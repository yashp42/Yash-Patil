import { SubstackPost } from '../types';
import { SUBSTACK_POSTS } from '../data/portfolioData';

interface Rss2JsonItem {
  title: string;
  pubDate: string;
  link: string;
  guid?: string;
  author?: string;
  thumbnail?: string;
  description: string;
  content?: string;
  enclosure?: {
    link?: string;
  };
  categories?: string[];
}

interface Rss2JsonResponse {
  status: string;
  feed?: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items?: Rss2JsonItem[];
}

export function cleanSubstackUrl(input: string): { feedUrl: string; cleanUrl: string; handle: string } {
  let trimmed = input.trim();
  if (!trimmed) {
    trimmed = "patilyash";
  }

  // Remove trailing slashes and common prefixes
  trimmed = trimmed.replace(/\/feed\/?$/, '').replace(/\/$/, '');

  let cleanUrl = '';
  let handle = '';

  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    cleanUrl = trimmed;
    try {
      const parsed = new URL(trimmed);
      const hostParts = parsed.hostname.split('.');
      if (hostParts.length >= 3 && hostParts[1] === 'substack') {
        handle = hostParts[0];
      } else {
        handle = parsed.hostname;
      }
    } catch {
      handle = trimmed;
    }
  } else if (trimmed.includes('.substack.com')) {
    cleanUrl = `https://${trimmed}`;
    handle = trimmed.split('.')[0];
  } else if (trimmed.includes('.')) {
    // Custom domain
    cleanUrl = `https://${trimmed}`;
    handle = trimmed;
  } else {
    // Just a handle
    handle = trimmed.replace(/^@/, '');
    cleanUrl = `https://${handle}.substack.com`;
  }

  const feedUrl = `${cleanUrl}/feed`;
  return { feedUrl, cleanUrl, handle };
}

export function calculateReadingTime(text: string): number {
  if (!text) return 4;
  // Strip html tags
  const clean = text.replace(/<[^>]*>/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 220);
  return Math.max(2, minutes);
}

export function formatPostDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

const CACHE_KEY = 'yash_substack_posts_cache_v4';
const CACHE_TIME_KEY = 'yash_substack_cache_time_v4';
const CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes

// Clean up any legacy cache versions
try {
  localStorage.removeItem('yash_substack_posts_cache');
  localStorage.removeItem('yash_substack_posts_cache_v2');
  localStorage.removeItem('yash_substack_posts_cache_v3');
  localStorage.removeItem('yash_substack_cache_time_v2');
} catch (_) {}

function mergeAndSortPosts(fetched: SubstackPost[], baseline: SubstackPost[]): SubstackPost[] {
  const map = new Map<string, SubstackPost>();

  // Add baseline posts first
  baseline.forEach(p => {
    const key = p.link.replace(/\/$/, '').toLowerCase();
    map.set(key, p);
  });

  // Merge in fetched posts
  fetched.forEach(p => {
    const key = p.link.replace(/\/$/, '').toLowerCase();
    const existing = map.get(key);
    if (existing) {
      map.set(key, {
        ...existing,
        ...p,
        contentHtml: (p.contentHtml && p.contentHtml.length > 50) ? p.contentHtml : existing.contentHtml,
        coverImage: p.coverImage || existing.coverImage,
        tags: p.tags && p.tags.length > 0 ? p.tags : existing.tags
      });
    } else {
      map.set(key, p);
    }
  });

  const combined = Array.from(map.values());
  // Sort descending by pubDate
  combined.sort((a, b) => {
    const timeA = new Date(a.pubDate).getTime() || 0;
    const timeB = new Date(b.pubDate).getTime() || 0;
    return timeB - timeA;
  });

  return combined.map((p, idx) => ({
    ...p,
    isFeatured: idx === 0
  }));
}

function parseXmlRssFeed(xmlText: string, cleanUrl: string): SubstackPost[] {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    const items = xmlDoc.querySelectorAll('item');
    if (!items || items.length === 0) return [];

    const posts: SubstackPost[] = [];
    items.forEach((item, idx) => {
      const title = item.querySelector('title')?.textContent || 'Untitled Essay';
      const link = item.querySelector('link')?.textContent || cleanUrl;
      const pubDate = item.querySelector('pubDate')?.textContent || new Date().toISOString();
      const description = item.querySelector('description')?.textContent || '';
      const content = item.querySelector('encoded')?.textContent || description;
      const guid = item.querySelector('guid')?.textContent || `feed-${idx}-${Date.now()}`;
      const enclosure = item.querySelector('enclosure')?.getAttribute('url') || undefined;

      const categories: string[] = [];
      item.querySelectorAll('category').forEach(cat => {
        if (cat.textContent) categories.push(cat.textContent.trim());
      });

      const plainExcerpt = description
        ? description.replace(/<[^>]*>/g, '').slice(0, 180).trim() + '...'
        : 'Read the latest essay on my Substack publication.';

      posts.push({
        id: guid,
        title,
        link,
        pubDate,
        formattedDate: formatPostDate(pubDate),
        readingTimeMinutes: calculateReadingTime(content),
        excerpt: plainExcerpt,
        contentHtml: content,
        tags: categories.length > 0 ? categories.slice(0, 3) : ['Consumer AI', 'Strategy'],
        coverImage: enclosure,
        isFeatured: idx === 0
      });
    });

    return posts;
  } catch (e) {
    console.warn('Failed to parse XML RSS feed:', e);
    return [];
  }
}

export function getCachedSubstackPosts(): SubstackPost[] | null {
  try {
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
    if (cachedTime && Date.now() - parseInt(cachedTime, 10) > CACHE_TTL_MS) {
      return null;
    }
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as SubstackPost[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return mergeAndSortPosts(parsed, SUBSTACK_POSTS);
      }
    }
  } catch (_) {}
  return null;
}

export async function fetchSubstackFeed(
  substackInput: string,
  forceRefresh = false
): Promise<{
  posts: SubstackPost[];
  feedInfo?: { title: string; link: string; description: string };
  isLive: boolean;
  error?: string;
}> {
  const { feedUrl, cleanUrl, handle } = cleanSubstackUrl(substackInput);

  if (!forceRefresh) {
    const cachedPosts = getCachedSubstackPosts();
    if (cachedPosts && cachedPosts.length > 0) {
      return {
        posts: cachedPosts,
        isLive: true
      };
    }
  }

  const timestamp = Date.now();
  const cacheBustedFeedUrl = `${feedUrl}?t=${timestamp}`;

  // 1. Try rss2json proxy with cache-busting
  try {
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(cacheBustedFeedUrl)}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(proxyUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data: Rss2JsonResponse = await response.json();
      if (data.status === 'ok' && data.items && data.items.length > 0) {
        const mappedPosts: SubstackPost[] = data.items.map((item, idx) => {
          const fullContent = item.content || item.description || '';
          const readingTime = calculateReadingTime(fullContent);
          const plainExcerpt = item.description
            ? item.description.replace(/<[^>]*>/g, '').slice(0, 180).trim() + '...'
            : 'Read the latest essay on my Substack publication.';

          const coverImg =
            item.thumbnail ||
            item.enclosure?.link;

          return {
            id: item.guid || `feed-${idx}-${timestamp}`,
            title: item.title,
            link: item.link || cleanUrl,
            pubDate: item.pubDate,
            formattedDate: formatPostDate(item.pubDate),
            readingTimeMinutes: readingTime,
            excerpt: plainExcerpt,
            contentHtml: item.content || item.description,
            tags: item.categories && item.categories.length > 0 ? item.categories.slice(0, 3) : ['Product', 'Strategy'],
            coverImage: coverImg,
            isFeatured: idx === 0
          };
        });

        // Merge mapped posts with our baseline curated archive
        const merged = mergeAndSortPosts(mappedPosts, SUBSTACK_POSTS);

        // Update local cache
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(merged));
          localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
        } catch (_) {}

        return {
          posts: merged,
          feedInfo: data.feed ? {
            title: data.feed.title || `${handle}'s Substack`,
            link: data.feed.link || cleanUrl,
            description: data.feed.description || 'Product decisions, consumer behavior and business models.'
          } : undefined,
          isLive: true
        };
      }
    }
  } catch (err) {
    console.info('rss2json proxy unreachable, checking fallback:', err);
  }

  // 2. Secondary Fallback: AllOrigins raw XML proxy + native DOMParser
  try {
    const rawProxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(cacheBustedFeedUrl)}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(rawProxyUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (response.ok) {
      const xmlText = await response.text();
      const xmlPosts = parseXmlRssFeed(xmlText, cleanUrl);
      if (xmlPosts.length > 0) {
        const merged = mergeAndSortPosts(xmlPosts, SUBSTACK_POSTS);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(merged));
          localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
        } catch (_) {}

        return {
          posts: merged,
          feedInfo: {
            title: `${handle}'s Substack`,
            link: cleanUrl,
            description: 'Product decisions, consumer behavior and business models.'
          },
          isLive: true
        };
      }
    }
  } catch (err) {
    console.info('AllOrigins XML fallback unreachable:', err);
  }

  // 3. Fallback: Always return baseline SUBSTACK_POSTS (which now includes the latest post!)
  return {
    posts: SUBSTACK_POSTS,
    isLive: false,
    error: 'Using archived essay edition.'
  };
}
