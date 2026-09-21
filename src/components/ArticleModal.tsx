import { useEffect } from 'react';
import { X, ArrowLeft, ArrowUpRight, Calendar, Clock, Share2, BookOpen } from 'lucide-react';
import { SubstackPost } from '../types';

interface ArticleModalProps {
  post: SubstackPost | null;
  onClose: () => void;
}

export default function ArticleModal({ post, onClose }: ArticleModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      id="article-reader-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF9F5] dark:bg-[#141413] flex flex-col antialiased selection:bg-[#161616] dark:selection:bg-[#FAF9F5] selection:text-[#FAF9F5] dark:selection:text-[#141413]"
      role="dialog"
      aria-modal="true"
    >
      {/* Reader Nav Bar */}
      <nav className="sticky top-0 z-20 bg-[#FAF9F5]/95 dark:bg-[#141413]/95 backdrop-blur-md border-b border-[#E8E6E0] dark:border-[#282724] px-6 sm:px-10 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-1.5 border border-[#D8D6CE] dark:border-[#383632] hover:border-[#161616] dark:hover:border-[#FAF9F5] bg-white dark:bg-[#1E1D1B] rounded-xs text-xs font-mono text-[#161616] dark:text-[#FAF9F5] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </button>

        <div className="flex items-center gap-3 font-mono text-xs">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#E05338] hover:underline px-3 py-1.5 border border-[#E05338]/30 dark:border-[#E05338]/40 rounded-xs bg-[#E05338]/5 dark:bg-[#E05338]/10"
          >
            <span>Open on Substack</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="p-1.5 bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] hover:bg-[#333] dark:hover:bg-[#EAE8E0] rounded-xs transition-colors ml-1 cursor-pointer"
            aria-label="Close reader"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Main Article Document */}
      <main className="max-w-3xl mx-auto px-6 sm:px-8 py-14 md:py-20 w-full flex-1">
        {/* Header */}
        <header className="pb-8 border-b border-[#E8E6E0] dark:border-[#282724]">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#73726E] dark:text-[#9A9890] mb-4">
            <span className="px-2 py-0.5 bg-[#E05338]/10 dark:bg-[#E05338]/20 text-[#E05338] rounded-xs font-semibold">
              SUBSTACK ESSAY
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTimeMinutes} min read
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161616] dark:text-[#FAF9F5] leading-[1.18] tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-[#F4F2EC] dark:bg-[#201F1C] text-[#52504C] dark:text-[#C5C3B8] font-mono text-[11px] rounded-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Optional Cover Image */}
        {post.coverImage && (
          <div className="my-10 rounded-sm overflow-hidden border border-[#E0DDD5] dark:border-[#2C2B27]">
            <img
              src={post.coverImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <article className="prose prose-stone dark:prose-invert max-w-none text-[#2C2B29] dark:text-[#D5D3C8] font-sans text-base sm:text-lg leading-[1.75] mt-10">
          {post.contentHtml ? (
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          ) : (
            <div className="space-y-6">
              <p className="lead font-serif text-xl italic text-[#161616] dark:text-[#FAF9F5]">
                {post.excerpt}
              </p>
              <p>
                To read this complete essay with full interactive diagrams and join the conversation in the comments, visit the publication on Substack.
              </p>
            </div>
          )}
        </article>

        {/* Footer Substack Card */}
        <div className="mt-16 pt-10 border-t border-[#E8E6E0] dark:border-[#282724] bg-[#F7F5EE] dark:bg-[#1C1B19] p-8 rounded-sm text-center">
          <h4 className="font-serif text-2xl text-[#161616] dark:text-[#FAF9F5] mb-2">
            Enjoyed this piece?
          </h4>
          <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mb-6 max-w-md mx-auto">
            Read more analyses on product decisions, consumer behavior, and unit economics on Substack.
          </p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] rounded-xs font-sans text-sm font-medium hover:bg-[#333] dark:hover:bg-[#EAE8E0] transition-colors cursor-pointer"
          >
            <span>Read &amp; Discuss on Substack</span>
            <ArrowUpRight className="w-4 h-4 text-[#E05338]" />
          </a>
        </div>
      </main>
    </div>
  );
}
