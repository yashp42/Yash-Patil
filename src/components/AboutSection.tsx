import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
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
            About
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] dark:text-[#FAF9F5] tracking-tight">
            Background
          </h2>
        </motion.div>

        {/* Narrative Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, delay: 0.12, ease: EDITORIAL_EASE }}
          className="mt-8 space-y-6 font-sans text-base text-[#3C3B37] dark:text-[#C5C3B8] leading-relaxed"
        >
          <p className="text-xl sm:text-2xl text-[#161616] dark:text-[#FAF9F5] font-normal leading-relaxed">
            I’m interested in the decisions behind products: using user behaviour, data, business context, and experimentation to understand what is happening, why it is happening, and what to do next.
          </p>

          <p>
            I am an undergraduate student at <strong className="font-medium text-[#161616] dark:text-[#FAF9F5]">IIT Kharagpur</strong>. My product experience comes from working directly on real user problems, such as analyzing onboarding drop-offs at <strong className="font-medium text-[#161616] dark:text-[#FAF9F5]">Bajaj Finance</strong>, designing interview and resume tools at <strong className="font-medium text-[#161616] dark:text-[#FAF9F5]">Wize</strong>, and consulting on retail growth at <strong className="font-medium text-[#161616] dark:text-[#FAF9F5]">Greynorth</strong>.
          </p>

          <p>
            I enjoy connecting financial fundamentals like unit economics, customer lifetime value, and capital allocation with everyday product decisions.
          </p>

          <p>
            When I am not studying or building, I write long-form analyses on Substack about tech products, platform dynamics, and market mechanics.
          </p>

          <div className="pt-4 flex items-center gap-3 font-sans text-sm">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
              className="px-5 py-2.5 bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] rounded-xs font-medium hover:bg-[#333] dark:hover:bg-[#EAE8E0] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

