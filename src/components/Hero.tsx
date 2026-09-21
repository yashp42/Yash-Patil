import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import InteractivePortrait from './InteractivePortrait';

interface HeroProps {
  onExploreExperience: () => void;
  onExploreCaseStudies: () => void;
  onExploreSubstack: () => void;
}

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero({ onExploreExperience, onExploreCaseStudies, onExploreSubstack }: HeroProps) {
  return (
    <section id="hero" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-16">
          {/* Main Editorial Content Column */}
          <div className="flex-1 max-w-2xl">
            {/* Clean statement */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: EDITORIAL_EASE }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.12] tracking-tight font-normal text-[#161616] dark:text-[#FAF9F5]"
            >
              Hi, I’m Yash Patil.
            </motion.h1>

            {/* Natural bio without buzzword overload */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: EDITORIAL_EASE }}
              className="mt-6 text-xl sm:text-2xl text-[#3C3B37] dark:text-[#C5C3B8] font-sans leading-relaxed font-light"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Clean navigation links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: EDITORIAL_EASE }}
              className="mt-10 flex flex-wrap items-center gap-3 font-sans text-sm"
            >
              <a
                href="#projects"
                className="px-4 py-2.5 bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] rounded-xs font-medium hover:bg-[#333] dark:hover:bg-[#EAE8E0] transition-colors"
              >
                Work &amp; Projects
              </a>

              <a
                href="#experience"
                className="px-4 py-2.5 border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] bg-white dark:bg-[#1C1B19] text-[#161616] dark:text-[#FAF9F5] rounded-xs font-medium transition-colors"
              >
                Experience
              </a>

              <a
                href="#writing"
                className="px-4 py-2.5 border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] bg-white dark:bg-[#1C1B19] text-[#161616] dark:text-[#FAF9F5] rounded-xs font-medium transition-colors"
              >
                Writing
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] bg-white dark:bg-[#1C1B19] text-[#161616] dark:text-[#FAF9F5] rounded-xs font-medium transition-colors inline-flex items-center gap-1.5"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#73726E] dark:text-[#9A9890]" />
              </a>
            </motion.div>
          </div>

          {/* Interactive Modern Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EDITORIAL_EASE }}
            className="flex justify-center lg:justify-end shrink-0"
          >
            <InteractivePortrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

