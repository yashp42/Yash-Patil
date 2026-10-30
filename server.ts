import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { INITIAL_CASE_STUDIES } from './server/initial-data';
import { InteractiveCaseStudy } from './src/types';

const app = express();
const PORT = 3000;
const ADMIN_SECRET = 'yash6010';
const VALID_PASSKEYS = new Set([
  'yash6010',
  process.env.ADMIN_SECRET_KEY,
  'yash2026',
  'yp_growth_2026'
].filter(Boolean) as string[]);

function isValidAdminKey(key?: string): boolean {
  if (!key) return false;
  const clean = key.trim();
  return clean === 'yash6010' || VALID_PASSKEYS.has(clean);
}

// Persistent data directory
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'case-studies.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// In-memory cache synced with disk
let caseStudies: InteractiveCaseStudy[] = [];

function loadCaseStudies(): void {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const loaded: InteractiveCaseStudy[] = JSON.parse(raw);
      const loadedIds = new Set(loaded.map((cs) => cs.id));
      const missingSeeds = INITIAL_CASE_STUDIES.filter((cs) => !loadedIds.has(cs.id));
      caseStudies = [...loaded, ...missingSeeds];
      fs.writeFileSync(DATA_FILE, JSON.stringify(caseStudies, null, 2), 'utf-8');
      console.log(`[Storage] Loaded ${caseStudies.length} case studies from ${DATA_FILE}`);
    } else {
      caseStudies = [...INITIAL_CASE_STUDIES];
      fs.writeFileSync(DATA_FILE, JSON.stringify(caseStudies, null, 2), 'utf-8');
      console.log(`[Storage] Initialized ${DATA_FILE} with ${caseStudies.length} seed case studies`);
    }
  } catch (err) {
    console.error('[Storage] Error loading case studies, falling back to seed:', err);
    caseStudies = [...INITIAL_CASE_STUDIES];
  }
}

function saveCaseStudies(): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(caseStudies, null, 2), 'utf-8');
  } catch (err) {
    console.error('[Storage] Failed to persist case studies to disk:', err);
  }
}

loadCaseStudies();

// Express body parsers (support up to 150MB for large PDF/PPT presentation uploads and high-res screenshots)
app.use(express.json({ limit: '150mb' }));
app.use(express.urlencoded({ extended: true, limit: '150mb' }));

// Static uploads serving with correct content disposition for PDF decks
app.use('/uploads', express.static(UPLOADS_DIR, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline');
    }
  }
}));

// Admin authentication middleware
function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const headerKey = req.headers['x-admin-key'] as string;
  const authHeader = req.headers['authorization'];
  let bearerToken = '';
  if (authHeader && authHeader.startsWith('Bearer ')) {
    bearerToken = authHeader.substring(7);
  }

  const providedKey = headerKey || bearerToken;
  if (!isValidAdminKey(providedKey)) {
    res.status(401).json({
      error: 'Unauthorized: Valid admin secret key required to perform this action.',
      authenticated: false
    });
    return;
  }
  next();
}

// -------------------------------------------------------------
// PUBLIC API ROUTES
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    version: '2.0.0',
    caseStudiesCount: caseStudies.length,
    timestamp: new Date().toISOString()
  });
});

// GET /api/case-studies: Get list of case studies (filter by format, category, availability)
app.get('/api/case-studies', (req: Request, res: Response) => {
  const { format, category, availability } = req.query;
  const headerKey = req.headers['x-admin-key'] as string;
  const isAdmin = isValidAdminKey(headerKey);

  let results = [...caseStudies];

  // If not admin, hide draft items (available and coming_soon are visible)
  if (!isAdmin) {
    results = results.filter((cs) => cs.availability !== 'draft');
  }

  if (format && typeof format === 'string' && format !== 'all') {
    results = results.filter((cs) => cs.format === format);
  }

  if (category && typeof category === 'string' && category !== 'All') {
    results = results.filter((cs) => cs.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (availability && typeof availability === 'string' && availability !== 'all') {
    results = results.filter((cs) => cs.availability === availability);
  }

  res.json({
    success: true,
    total: results.length,
    caseStudies: results.map((cs) => ({
      id: cs.id,
      slug: cs.slug,
      title: cs.title,
      subtitle: cs.subtitle,
      company: cs.company,
      companyLogo: cs.companyLogo,
      format: cs.format,
      availability: cs.availability,
      accentColor: cs.accentColor,
      readingTimeMinutes: cs.readingTimeMinutes,
      slidesCount: cs.format === 'interactive_comic' ? (cs.slides?.length || cs.slidesCount) : (cs.deckSlides?.length || cs.slidesCount),
      publishedAt: cs.publishedAt,
      category: cs.category,
      tags: cs.tags,
      keyMetrics: cs.keyMetrics,
      principlesCovered: cs.principlesCovered,
      executiveSummary: cs.executiveSummary,
      authorRole: cs.authorRole,
      hasDeckPdf: Boolean(cs.deckPdfUrl)
    }))
  });
});

// GET /api/case-studies/:id: Get full case study by ID or slug
app.get('/api/case-studies/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const cs = caseStudies.find((item) => item.id === id || item.slug === id);

  if (!cs) {
    res.status(404).json({ error: 'Case study not found' });
    return;
  }

  res.json({
    success: true,
    caseStudy: cs
  });
});

// -------------------------------------------------------------
// SUBSTACK RSS FEED PROXY & PARSER
// -------------------------------------------------------------
interface SubstackParsedPost {
  id: string;
  title: string;
  slug: string;
  link: string;
  pubDate: string;
  formattedDate: string;
  readingTimeMinutes: number;
  excerpt: string;
  contentHtml: string;
  tags: string[];
  coverImage?: string;
  isFeatured: boolean;
}

let substackFeedCache: {
  url: string;
  timestamp: number;
  posts: SubstackParsedPost[];
  feedInfo: { title: string; link: string; description: string };
} | null = null;

const SUBSTACK_CACHE_TTL_MS = 1000 * 60 * 3; // 3 minutes

function formatPostDateServer(dateStr: string): string {
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

function calculateReadingTimeServer(text: string): number {
  if (!text) return 4;
  const clean = text.replace(/<[^>]*>/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 220);
  return Math.max(2, minutes);
}

function derivePostTags(title: string, desc: string, categories: string[]): string[] {
  if (categories && categories.length > 0) {
    return categories.slice(0, 3);
  }
  const combined = (title + ' ' + desc).toLowerCase();
  if (combined.includes('apple') || combined.includes('pay') || combined.includes('payment') || combined.includes('card')) {
    return ['Apple Ecosystem', 'Fintech & Payments', 'India Strategy'];
  }
  if (combined.includes('consumer ai') || combined.includes('126 billion') || combined.includes('download')) {
    return ['Consumer AI', 'India Strategy', 'Monetisation'];
  }
  if (combined.includes('hardest one to leave') || combined.includes('valuable ai') || combined.includes('retention') || combined.includes('ecosystem')) {
    return ['AI Moats', 'Consumer Psychology', 'Ecosystem Strategy'];
  }
  return ['Product Strategy', 'Consumer Behavior'];
}

function parseSubstackXml(xmlText: string, defaultFeedUrl: string) {
  const itemMatches = xmlText.split(/<item>/i).slice(1);
  const posts: SubstackParsedPost[] = [];

  // Channel title & description
  const channelBlock = xmlText.split(/<item>/i)[0] || '';
  const channelTitleMatch = channelBlock.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/i);
  const channelDescMatch = channelBlock.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/i);
  const channelLinkMatch = channelBlock.match(/<link>(.*?)<\/link>/i);

  const feedInfo = {
    title: (channelTitleMatch ? (channelTitleMatch[1] || channelTitleMatch[2]) : "Yash's Substack").trim(),
    link: (channelLinkMatch ? channelLinkMatch[1] : defaultFeedUrl.replace(/\/feed\/?$/, '')).trim(),
    description: (channelDescMatch ? (channelDescMatch[1] || channelDescMatch[2]) : 'Product decisions, consumer behavior and business models.').trim()
  };

  for (let idx = 0; idx < itemMatches.length; idx++) {
    const itemBlock = itemMatches[idx].split(/<\/item>/i)[0];
    const getCdataOrText = (tag: string) => {
      const regex = new RegExp('<' + tag + '[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/' + tag + '>', 'i');
      const match = itemBlock.match(regex);
      if (!match) return '';
      return (match[1] !== undefined ? match[1] : match[2] || '').trim();
    };

    const title = getCdataOrText('title') || 'Untitled Essay';
    const link = getCdataOrText('link') || feedInfo.link;
    const pubDate = getCdataOrText('pubDate') || new Date().toISOString();
    const guid = getCdataOrText('guid') || link;
    const description = getCdataOrText('description');
    const content = getCdataOrText('content:encoded') || description;

    const enclosureMatch = itemBlock.match(/<enclosure[^>]+url=["\x27]([^"\x27]+)["\x27]/i);
    let coverImage = enclosureMatch ? enclosureMatch[1] : undefined;
    if (!coverImage) {
      const imgMatch = content.match(/<img[^>]+src=["\x27]([^"\x27]+)["\x27]/i);
      if (imgMatch) coverImage = imgMatch[1];
    }

    const categories: string[] = [];
    const catRegex = /<category[^>]*>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/category>/gi;
    let cm;
    while ((cm = catRegex.exec(itemBlock)) !== null) {
      const c = (cm[1] !== undefined ? cm[1] : cm[2] || '').trim();
      if (c && !categories.includes(c)) categories.push(c);
    }

    const slug = link.includes('/p/') ? link.split('/p/')[1].replace(/\/$/, '') : title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const id = guid.startsWith('http') ? `sub-${slug}` : guid;

    const cleanExcerpt = description
      ? description.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 180) + '...'
      : 'Read the latest essay on Yash’s Substack publication.';

    posts.push({
      id,
      title,
      slug,
      link,
      pubDate,
      formattedDate: formatPostDateServer(pubDate),
      readingTimeMinutes: calculateReadingTimeServer(content),
      excerpt: cleanExcerpt,
      contentHtml: content,
      tags: derivePostTags(title, cleanExcerpt, categories),
      coverImage,
      isFeatured: idx === 0
    });
  }

  return { posts, feedInfo };
}

// GET /api/substack-feed: Real-time Substack RSS feed fetcher and parser
app.get('/api/substack-feed', async (req: Request, res: Response) => {
  const targetUrl = (typeof req.query.url === 'string' && req.query.url.trim())
    ? req.query.url.trim()
    : 'https://patilyash.substack.com/feed';
  const force = req.query.force === 'true' || req.query.refresh === 'true';

  if (!force && substackFeedCache && substackFeedCache.url === targetUrl) {
    const age = Date.now() - substackFeedCache.timestamp;
    if (age < SUBSTACK_CACHE_TTL_MS) {
      res.setHeader('Cache-Control', 'public, max-age=180');
      res.json({
        success: true,
        source: 'server_cache',
        total: substackFeedCache.posts.length,
        posts: substackFeedCache.posts,
        feedInfo: substackFeedCache.feedInfo,
        lastUpdated: new Date(substackFeedCache.timestamp).toISOString()
      });
      return;
    }
  }

  try {
    const fetchResponse = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8'
      }
    });

    if (!fetchResponse.ok) {
      throw new Error(`Substack returned HTTP ${fetchResponse.status}`);
    }

    const xml = await fetchResponse.text();
    const { posts, feedInfo } = parseSubstackXml(xml, targetUrl);

    substackFeedCache = {
      url: targetUrl,
      timestamp: Date.now(),
      posts,
      feedInfo
    };

    res.setHeader('Cache-Control', 'no-cache');
    res.json({
      success: true,
      source: 'live_fetch',
      total: posts.length,
      posts,
      feedInfo,
      lastUpdated: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('[Substack Feed] Error fetching feed:', err);
    if (substackFeedCache && substackFeedCache.posts.length > 0) {
      res.json({
        success: true,
        source: 'stale_cache',
        total: substackFeedCache.posts.length,
        posts: substackFeedCache.posts,
        feedInfo: substackFeedCache.feedInfo,
        warning: 'Failed to fetch live feed, returning cached version: ' + err.message
      });
      return;
    }

    res.status(502).json({
      success: false,
      error: 'Failed to fetch Substack feed: ' + (err?.message || 'Network error')
    });
  }
});


// -------------------------------------------------------------
// ADMIN API ROUTES (PROTECTED)
// -------------------------------------------------------------

// POST /api/admin/login: Authenticate Yash's admin passkey
app.post('/api/admin/login', (req: Request, res: Response) => {
  const { passcode } = req.body;
  const cleanPasscode = typeof passcode === 'string' ? passcode.trim() : '';
  if (!cleanPasscode) {
    res.status(400).json({ error: 'Passcode is required', authenticated: false });
    return;
  }

  if (isValidAdminKey(cleanPasscode)) {
    res.json({
      success: true,
      authenticated: true,
      message: 'Admin access granted to Creator Studio',
      token: cleanPasscode,
      user: {
        name: 'Yash Patil',
        role: 'Author & Curator'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      authenticated: false,
      error: 'Incorrect author passcode. Please enter the correct password.'
    });
  }
});

// POST /api/admin/verify: Verify admin token validity
app.post('/api/admin/verify', requireAdmin, (req: Request, res: Response) => {
  res.json({
    success: true,
    authenticated: true,
    user: {
      name: 'Yash Patil',
      role: 'Author & Curator'
    }
  });
});

// POST /api/admin/case-studies: Create a new interactive case study or deck
app.post('/api/admin/case-studies', requireAdmin, (req: Request, res: Response) => {
  const newStudy = req.body as Partial<InteractiveCaseStudy>;

  if (!newStudy.title || !newStudy.company) {
    res.status(400).json({ error: 'Title and company are required fields.' });
    return;
  }

  const id = newStudy.id || `cs-${Date.now()}`;
  const slug = newStudy.slug || newStudy.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const completeStudy: InteractiveCaseStudy = {
    id,
    slug,
    title: newStudy.title,
    subtitle: newStudy.subtitle || '',
    company: newStudy.company,
    companyLogo: newStudy.companyLogo || '⚡',
    format: newStudy.format || 'interactive_comic',
    availability: newStudy.availability || 'available',
    accentColor: newStudy.accentColor || '#E05338',
    readingTimeMinutes: Number(newStudy.readingTimeMinutes) || 5,
    slidesCount: newStudy.format === 'interactive_comic' ? (newStudy.slides?.length || 0) : (newStudy.deckSlides?.length || 0),
    publishedAt: newStudy.publishedAt || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    category: newStudy.category || 'Product Teardowns',
    tags: newStudy.tags || ['Growth Design', 'Case Study'],
    keyMetrics: newStudy.keyMetrics || [],
    principlesCovered: newStudy.principlesCovered || [],
    executiveSummary: newStudy.executiveSummary || '',
    authorRole: newStudy.authorRole || 'Product Lead & Researcher',
    slides: newStudy.slides || [],
    deckSlides: newStudy.deckSlides || [],
    deckPdfUrl: newStudy.deckPdfUrl,
    downloadDeckUrl: newStudy.downloadDeckUrl
  };

  caseStudies.unshift(completeStudy);
  saveCaseStudies();

  console.log(`[Admin] Created case study "${completeStudy.title}" (${completeStudy.id})`);
  res.status(201).json({
    success: true,
    message: 'Case study published successfully!',
    caseStudy: completeStudy
  });
});

// PUT /api/admin/case-studies/:id: Update existing case study or toggle availability
app.put('/api/admin/case-studies/:id', requireAdmin, (req: Request, res: Response) => {
  const { id } = req.params;
  const index = caseStudies.findIndex((cs) => cs.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Case study not found' });
    return;
  }

  const updatedData = req.body as Partial<InteractiveCaseStudy>;
  const current = caseStudies[index];

  const merged: InteractiveCaseStudy = {
    ...current,
    ...updatedData,
    id: current.id, // Immutable ID
    slidesCount: (updatedData.format || current.format) === 'interactive_comic'
      ? (updatedData.slides?.length ?? current.slides?.length ?? current.slidesCount)
      : (updatedData.deckSlides?.length ?? current.deckSlides?.length ?? current.slidesCount)
  };

  caseStudies[index] = merged;
  saveCaseStudies();

  console.log(`[Admin] Updated case study "${merged.title}" (${merged.id})`);
  res.json({
    success: true,
    message: 'Case study updated successfully!',
    caseStudy: merged
  });
});

// DELETE /api/admin/case-studies/:id: Delete case study
app.delete('/api/admin/case-studies/:id', requireAdmin, (req: Request, res: Response) => {
  const { id } = req.params;
  const index = caseStudies.findIndex((cs) => cs.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Case study not found' });
    return;
  }

  const removed = caseStudies.splice(index, 1);
  saveCaseStudies();

  console.log(`[Admin] Deleted case study "${removed[0].title}"`);
  res.json({
    success: true,
    message: `Case study "${removed[0].title}" deleted.`
  });
});

// GET /api/admin/storage-status: Check current storage configuration
app.get('/api/admin/storage-status', requireAdmin, (req: Request, res: Response) => {
  res.json({
    storageType: 'local_disk',
    googleDriveSupported: true,
  });
});

// POST /api/admin/upload-slide: Upload slide screenshot, PDF, or presentation deck locally
app.post('/api/admin/upload-slide', requireAdmin, async (req: Request, res: Response) => {
  const { dataUrl, fileName } = req.body;

  if (!dataUrl || typeof dataUrl !== 'string') {
    res.status(400).json({ error: 'File data URL is required' });
    return;
  }

  try {
    const commaIndex = dataUrl.indexOf(',');
    if (commaIndex === -1) {
      res.status(400).json({ error: 'Invalid data URL format. Expected "data:...;base64,..."' });
      return;
    }

    const metaPart = dataUrl.substring(0, commaIndex);
    const base64Data = dataUrl.substring(commaIndex + 1);

    // Extract mime type safely from meta prefix
    let mimeType = 'application/octet-stream';
    const mimeMatch = metaPart.match(/^data:([^;]+)/);
    if (mimeMatch && mimeMatch[1]) {
      mimeType = mimeMatch[1].trim().toLowerCase();
    }

    // Determine clean file extension
    let ext = '';
    if (fileName && typeof fileName === 'string' && fileName.includes('.')) {
      ext = fileName.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '') || '';
    }

    if (!ext) {
      if (mimeType.includes('pdf')) ext = 'pdf';
      else if (mimeType.includes('openxml') || mimeType.includes('presentationml')) ext = 'pptx';
      else if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) ext = 'ppt';
      else if (mimeType.includes('jpeg') || mimeType.includes('jpg')) ext = 'jpg';
      else if (mimeType.includes('png')) ext = 'png';
      else if (mimeType.includes('webp')) ext = 'webp';
      else if (mimeType.includes('svg')) ext = 'svg';
      else ext = 'bin';
    }

    const safeBaseName = (fileName || `file_${Date.now()}`)
      .replace(/\.[^/.]+$/, '')
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .substring(0, 80);

    const finalFileName = `${Date.now()}_${safeBaseName}.${ext}`;
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
    const filePath = path.join(UPLOADS_DIR, finalFileName);

    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(filePath, buffer);
    console.log(`[Upload] Saved ${buffer.length} bytes -> ${finalFileName}`);

    res.json({
      success: true,
      url: `/uploads/${finalFileName}`,
      fileName: finalFileName,
      sizeBytes: buffer.length,
      storage: 'local_disk'
    });
  } catch (err: any) {
    console.error('[Upload] Error saving file:', err?.message || err);
    res.status(500).json({ error: 'Failed to save uploaded file: ' + (err?.message || 'Disk error') });
  }
});

// POST /api/admin/reset-seeds: Reset to default factory teardowns
app.post('/api/admin/reset-seeds', requireAdmin, (req: Request, res: Response) => {
  caseStudies = [...INITIAL_CASE_STUDIES];
  saveCaseStudies();
  res.json({
    success: true,
    message: 'Reset all case studies to original initial research seeds.',
    count: caseStudies.length
  });
});

// Error handling middleware for oversized payloads
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err?.type === 'entity.too.large' || err?.status === 413) {
    res.status(413).json({
      error: 'The uploaded file is too large for direct local upload (>100MB). For large presentations or decks, upload to Google Drive and paste the share link instead!'
    });
    return;
  }
  next(err);
});

// -------------------------------------------------------------
// VITE DEV SERVER / PRODUCTION STATIC SERVING
// -------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
