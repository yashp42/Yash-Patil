import { MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-16 md:py-20 scroll-mt-12"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
          className="pb-6 border-b border-[#E8E6E0] dark:border-[#282724]"
        >
          <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-wider mb-2">
            Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] dark:text-[#FAF9F5] tracking-tight">
            Work Experience
          </h2>
          <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-2 max-w-2xl">
            Roles across product management, analytics, and strategy.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8 mt-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: EDITORIAL_EASE }}
              className="bg-white dark:bg-[#1B1A18] border border-[#E6E3DB] dark:border-[#2C2B27] hover:border-[#161616] dark:hover:border-[#FAF9F5] rounded-xs p-6 sm:p-8 transition-colors"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#F0EEE8] dark:border-[#262522]">
                <div>
                  <h3 className="font-serif text-2xl text-[#161616] dark:text-[#FAF9F5] font-medium">
                    {exp.company}
                  </h3>
                  <div className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-0.5">
                    {exp.role}
                  </div>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#A8A69E] dark:text-[#73726E]" />
                    {exp.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#A8A69E] dark:text-[#73726E]" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-4 font-sans text-base text-[#3C3B37] dark:text-[#C5C3B8] leading-relaxed">
                {exp.summary}
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2.5 font-sans text-sm text-[#52504C] dark:text-[#B5B3A8] leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#161616] dark:bg-[#FAF9F5] mt-2 shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Key Focus / Tools */}
              {exp.tools && exp.tools.length > 0 && (
                <div className="mt-6 pt-4 border-t border-[#F0EEE8] dark:border-[#262522] flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-[#73726E] dark:text-[#9A9890] uppercase tracking-wider mr-1">
                    Focus:
                  </span>
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 bg-[#FAF9F5] dark:bg-[#23221F] border border-[#E8E6E0] dark:border-[#2E2D29] text-[#52504C] dark:text-[#B5B3A8] font-mono text-[11px] rounded-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

