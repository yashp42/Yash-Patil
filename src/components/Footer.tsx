import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, ease: EDITORIAL_EASE }}
      className="py-16 bg-[#F4F2EC] dark:bg-[#111110] border-t border-[#E8E6E0] dark:border-[#282724] text-[#73726E] dark:text-[#9A9890] font-mono text-xs"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E2DFD6] dark:border-[#242320]">
          {/* Identity */}
          <div className="md:col-span-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#161616] dark:text-[#FAF9F5]">
              {PERSONAL_INFO.name}
            </h2>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-4 space-y-1">
            <div className="text-[#161616] dark:text-[#FAF9F5] font-medium uppercase tracking-wider mb-2">
              Index
            </div>
            <div className="flex flex-col gap-1 text-[#52504C] dark:text-[#B5B3A8]">
              <a href="#projects" className="hover:text-[#161616] dark:hover:text-[#FAF9F5] hover:underline">
                Work &amp; Projects
              </a>
              <a href="#experience" className="hover:text-[#161616] dark:hover:text-[#FAF9F5] hover:underline">
                Experience
              </a>
              <a href="#writing" className="hover:text-[#161616] dark:hover:text-[#FAF9F5] hover:underline">
                Writing
              </a>
              <a href="#about" className="hover:text-[#161616] dark:hover:text-[#FAF9F5] hover:underline">
                About
              </a>
              <a href="#contact" className="hover:text-[#161616] dark:hover:text-[#FAF9F5] hover:underline">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-1">
            <div className="text-[#161616] dark:text-[#FAF9F5] font-medium uppercase tracking-wider mb-2">
              Direct Inquiries
            </div>
            <div className="text-[#161616] dark:text-[#FAF9F5] font-mono break-all">{PERSONAL_INFO.email}</div>
            <div className="text-[#73726E] dark:text-[#9A9890] font-mono break-all">{PERSONAL_INFO.academicEmail}</div>
            <div className="text-[#52504C] dark:text-[#B5B3A8] pt-2">IIT Kharagpur, West Bengal, India</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] rounded-xs bg-white dark:bg-[#1C1B19] text-[#161616] dark:text-[#FAF9F5] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

