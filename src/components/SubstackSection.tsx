import { useState, useEffect } from 'react';
import {
  BookOpen,
  ArrowUpRight,
  Clock,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { SubstackPost } from '../types';
import { SUBSTACK_POSTS, PERSONAL_INFO } from '../data/portfolioData';
import { fetchSubstackFeed } from '../services/substackService';

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

interface SubstackSectionProps {
  onOpenArticle: (post: SubstackPost) => void;
}

export default function SubstackSection({ onOpenArticle }: SubstackSectionProps) {
  const [posts, setPosts] = useState<SubstackPost[]>(SUBSTACK_POSTS);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract all unique tags
  const allTags = ['All', ...Array.from(new Set(posts.flatMap(p => p.tags)))];

  useEffect(() => {
    // Attempt background sync with live feed from patilyash.substack.com
    const handle = PERSONAL_INFO.defaultSubstackHandle || 'patilyash';
    fetchSubstackFeed(handle)
      .then(result => {
        if (result.isLive && result.posts.length > 0) {
          setPosts(result.posts);
        }
      })
      .catch(() => {
        // Keep default curated posts
      });
  }, []);

  const filteredPosts = selectedTag === 'All'
    ? posts
    : posts.filter(p => p.tags.includes(selectedTag));

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <motion.section
      id="writing"
      className="py-16 md:py-20 scroll-mt-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E6E0] dark:border-[#282724]"
        >
          <div>
            <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-wider mb-2">
              Writing
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] dark:text-[#FAF9F5] tracking-tight">
              Essays &amp; Articles
            </h2>
            <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-2 max-w-2xl">
              Thoughts on product decisions, consumer behavior, and business models.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://patilyash.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] bg-white dark:bg-[#1C1B19] rounded-xs text-xs font-mono text-[#161616] dark:text-[#FAF9F5] transition-colors"
            >
              <span>patilyash.substack.com</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E05338]" />
            </a>
          </div>
        </motion.div>

        {/* Tag Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: EDITORIAL_EASE }}
          className="flex items-center gap-1.5 my-8 overflow-x-auto pb-2"
        >
          <span className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] mr-2">FILTER:</span>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-xs font-mono text-xs transition-colors whitespace-nowrap cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413]'
                  : 'bg-[#F2EFE8] dark:bg-[#201F1C] text-[#52504C] dark:text-[#B5B3A8] hover:bg-[#E8E5DC] dark:hover:bg-[#2A2925]'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Structured Articles Layout */}
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#1B1A18] border border-[#EAE8E2] dark:border-[#2C2B27] rounded-sm">
            <p className="font-serif text-xl text-[#73726E] dark:text-[#9A9890]">No articles found under this tag.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Lead Featured Article */}
            {featuredPost && (
              <motion.div
                id={`article-featured-${featuredPost.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: EDITORIAL_EASE }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  transition: { duration: 0.25, ease: EDITORIAL_EASE }
                }}
                className="group p-8 md:p-12 bg-white dark:bg-[#1B1A18] border-2 border-[#161616] dark:border-[#3D3A34] rounded-sm transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 flex flex-col justify-between h-full">
                    <div>
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#73726E] dark:text-[#9A9890] mb-4">
                        <span className="px-2 py-0.5 bg-[#E05338]/10 dark:bg-[#E05338]/20 text-[#E05338] rounded-xs font-semibold">
                          FEATURED ESSAY
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {featuredPost.formattedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {featuredPost.readingTimeMinutes} min read
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => onOpenArticle(featuredPost)}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161616] dark:text-[#FAF9F5] group-hover:text-[#000] dark:group-hover:text-white cursor-pointer transition-colors leading-[1.15]"
                      >
                        {featuredPost.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-sans text-base sm:text-lg text-[#52504C] dark:text-[#C5C3B8] mt-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Actions & Tags */}
                    <div className="mt-8 pt-6 border-t border-[#EAE8E2] dark:border-[#262522] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {featuredPost.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-[#F6F4ED] dark:bg-[#23221F] text-[#52504C] dark:text-[#B5B3A8] font-mono text-[11px] rounded-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onOpenArticle(featuredPost)}
                          className="px-4 py-2 bg-[#161616] dark:bg-[#FAF9F5] hover:bg-[#333] dark:hover:bg-[#EAE8E0] text-[#FAF9F5] dark:text-[#141413] text-xs font-mono rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Read On Site</span>
                        </button>

                        <a
                          href={featuredPost.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] text-[#161616] dark:text-[#FAF9F5] text-xs font-mono rounded-xs transition-colors flex items-center gap-1.5"
                        >
                          <span>Substack</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#E05338]" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Optional Featured Image */}
                  {featuredPost.coverImage && (
                    <div
                      onClick={() => onOpenArticle(featuredPost)}
                      className="lg:col-span-4 cursor-pointer overflow-hidden rounded-xs border border-[#E6E3DB] dark:border-[#2C2B27] bg-[#F2EFE8] dark:bg-[#201F1C]"
                    >
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Secondary Articles List: Structured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  id={`article-card-${post.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.65,
                    delay: (idx % 3) * 0.08,
                    ease: EDITORIAL_EASE
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.25, ease: EDITORIAL_EASE }
                  }}
                  className="group flex flex-col justify-between p-6 bg-white dark:bg-[#1B1A18] border border-[#E6E3DB] dark:border-[#2C2B27] hover:border-[#161616] dark:hover:border-[#FAF9F5] rounded-sm transition-colors duration-300 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    {/* Date & Time */}
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#73726E] dark:text-[#9A9890] mb-3">
                      <span>{post.formattedDate}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTimeMinutes}m read
                      </span>
                    </div>

                    {/* Title */}
                    <h4
                      onClick={() => onOpenArticle(post)}
                      className="font-serif text-xl sm:text-2xl text-[#161616] dark:text-[#FAF9F5] group-hover:underline cursor-pointer transition-colors leading-snug line-clamp-2"
                    >
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="font-sans text-xs sm:text-sm text-[#52504C] dark:text-[#C5C3B8] mt-3 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Bottom Footer */}
                  <div className="mt-6 pt-4 border-t border-[#F0EEE8] dark:border-[#262522] flex items-center justify-between">
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#EAE8E2] dark:border-[#2E2D29] text-[10px] font-mono text-[#73726E] dark:text-[#9A9890] rounded-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs">
                      <button
                        onClick={() => onOpenArticle(post)}
                        className="text-[#161616] dark:text-[#FAF9F5] hover:text-[#E05338] dark:hover:text-[#E05338] transition-colors cursor-pointer"
                      >
                        Read
                      </button>
                      <span className="text-[#D8D6CE] dark:text-[#383632]">/</span>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors flex items-center gap-0.5"
                      >
                        <span>Substack</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Official Substack Embeddable Subscription Widget */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease: EDITORIAL_EASE }}
          className="mt-16 p-6 sm:p-10 md:p-12 bg-[#F6F4EE] dark:bg-[#181715] border border-[#E0DDD5] dark:border-[#2C2B27] rounded-sm"
        >
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E05338] mb-2 block font-semibold">
              SUBSTACK PUBLICATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#161616] dark:text-[#FAF9F5] mb-3">
              Subscribe to patilyash.substack.com
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#52504C] dark:text-[#C5C3B8] mb-8 max-w-lg mx-auto">
              Get essays on product teardowns, conversational funnels, and consumer business models delivered directly to your inbox.
            </p>

            {/* Substack Embeddable Subscribe Button Widget */}
            <div className="flex justify-center items-center w-full overflow-hidden">
              <iframe
                src="https://patilyash.substack.com/embed"
                width="480"
                height="320"
                style={{ border: '1px solid #EEE', background: 'white', maxWidth: '100%' }}
                frameBorder="0"
                scrolling="no"
                title="Subscribe to Yash Patil on Substack"
                className="rounded-xs shadow-xs"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
              <span>Direct Link:</span>
              <a
                href="https://patilyash.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#161616] dark:text-[#FAF9F5] underline hover:text-[#E05338] transition-colors flex items-center gap-1 font-medium"
              >
                <span>patilyash.substack.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E05338]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
