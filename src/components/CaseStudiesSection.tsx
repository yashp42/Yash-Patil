import { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_CASE_STUDIES } from '../data/portfolioData';

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

interface CaseStudiesSectionProps {
  onOpenCaseStudy: (id: string) => void;
  onExploreTeardowns?: () => void;
}

export default function CaseStudiesSection({ onOpenCaseStudy, onExploreTeardowns }: CaseStudiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { label: 'All', value: 'All' },
    { label: 'FinTech', value: 'FinTech and Growth Strategy' },
    { label: 'Strategy', value: 'Corporate Strategy and Product Portfolio' },
    { label: 'Product Discovery', value: 'Product Strategy and Discovery' },
    { label: 'Applied AI', value: 'Applied AI and Agriculture' },
  ];

  const filteredStudies = activeCategory === 'All'
    ? PRODUCT_CASE_STUDIES
    : PRODUCT_CASE_STUDIES.filter(cs => cs.category === activeCategory);

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-20 scroll-mt-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
    >
      <div id="case-studies" className="scroll-mt-16" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E6E0] dark:border-[#282724]"
        >
          <div>
            <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-wider mb-2">
              Selected Work
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] dark:text-[#FAF9F5] tracking-tight">
              Projects &amp; Case Studies
            </h2>
            <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-2 max-w-2xl">
              Product teardowns, user friction analyses, and market strategies from national case competitions and real initiatives.
            </p>
          </div>

          <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
            {PRODUCT_CASE_STUDIES.length} Projects
          </div>
        </motion.div>

        {/* Case Studies & Teardowns Callout Card */}
        <div className="mt-8 p-6 bg-white dark:bg-[#171716] rounded-xs border border-[#E8E6E0] dark:border-[#2C2B27] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
              Product Teardowns &amp; Slide Decks
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#161616] dark:text-[#FAF9F5] tracking-tight">
              Behavioral Teardowns &amp; Strategy Presentations
            </h3>
            <p className="text-sm text-[#52504C] dark:text-[#C5C3B8] font-sans leading-relaxed">
              Step-by-step product walkthroughs analyzing user friction, pricing architecture, and operational distribution strategies.
            </p>
          </div>

          <a
            href="#/case-studies"
            onClick={(e) => {
              if (onExploreTeardowns) {
                e.preventDefault();
                onExploreTeardowns();
              }
            }}
            className="shrink-0 inline-flex items-center justify-center px-4 py-2.5 rounded-xs bg-[#161616] dark:bg-[#FAF9F5] hover:bg-[#333] dark:hover:bg-[#EAE8E0] text-[#FAF9F5] dark:text-[#141413] font-normal text-xs font-sans transition-colors cursor-pointer"
          >
            Explore Case Studies &amp; Teardowns →
          </a>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: EDITORIAL_EASE }}
          className="flex items-center gap-2 my-6 overflow-x-auto pb-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 py-1.5 rounded-xs font-mono text-xs whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413]'
                  : 'bg-[#F2EFE8] dark:bg-[#201F1C] text-[#52504C] dark:text-[#B5B3A8] hover:bg-[#EAE7DE] dark:hover:bg-[#2A2925]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-6">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((cs, index) => (
              <motion.article
                key={cs.id}
                id={`case-study-${cs.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
                whileHover={{
                  y: -5,
                  scale: 1.015,
                  transition: { duration: 0.25, ease: EDITORIAL_EASE }
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.06, 0.24),
                  ease: EDITORIAL_EASE
                }}
                className="group flex flex-col justify-between bg-white dark:bg-[#1B1A18] border border-[#E6E3DB] dark:border-[#2C2B27] hover:border-[#161616] dark:hover:border-[#FAF9F5] rounded-sm p-6 sm:p-8 transition-colors duration-300 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.5)] print-avoid-break"
              >
                <div>
                  {/* Title & Subtitle */}
                  <div>
                    <h3
                      onClick={() => onOpenCaseStudy(cs.id)}
                      className="font-serif text-2xl sm:text-3xl text-[#161616] dark:text-[#FAF9F5] group-hover:text-[#000] dark:group-hover:text-white cursor-pointer hover:underline transition-colors leading-snug"
                    >
                      {cs.title}
                    </h3>
                    <p className="font-sans text-sm text-[#73726E] dark:text-[#9A9890] font-medium mt-1">
                      {cs.subtitle}
                    </p>
                  </div>

                  {/* Overview Paragraph */}
                  <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-4 leading-relaxed line-clamp-3">
                    {cs.overview}
                  </p>

                  {/* Market & User Insights Preview */}
                  <div className="mt-6 pt-4 border-t border-[#F0EEE8] dark:border-[#262522] grid grid-cols-3 gap-2 font-mono">
                    {cs.marketAndUserInsights.map((insight, idx) => (
                      <div key={idx} className="pr-2 border-r border-[#F0EEE8] dark:border-[#262522] last:border-0">
                        <div className="text-base sm:text-lg font-serif text-[#161616] dark:text-[#FAF9F5] font-medium">
                          {insight.stat}
                        </div>
                        <div className="text-[10px] text-[#73726E] dark:text-[#9A9890] uppercase tracking-wider line-clamp-1">
                          {insight.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Tags and Action */}
                <div className="mt-8 pt-5 border-t border-[#EAE8E2] dark:border-[#262522] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#E6E3DB] dark:border-[#2E2D29] text-[#52504C] dark:text-[#B5B3A8] font-mono text-[10px] rounded-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(cs.id)}
                    className="px-4 py-2 bg-[#161616] dark:bg-[#FAF9F5] hover:bg-[#333] dark:hover:bg-[#EAE8E0] text-[#FAF9F5] dark:text-[#141413] rounded-xs text-xs font-mono transition-colors flex items-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>Read Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
