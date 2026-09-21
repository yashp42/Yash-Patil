import { motion } from 'motion/react';

interface SectionDividerProps {
  className?: string;
  hasDot?: boolean;
}

export default function SectionDivider({ className = '', hasDot = true }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.96 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
      className={`max-w-7xl mx-auto px-6 sm:px-8 py-2 md:py-4 origin-center ${className}`}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle, thin horizontal rule bounded to the content width */}
        <div className="w-full border-t border-[#E4E1D8] dark:border-[#282724]" />
        
        {/* Optional subtle dot accent */}
        {hasDot && (
          <div className="absolute px-3 bg-[#FAF9F5] dark:bg-[#141413] transition-colors">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#CCC8BC] dark:bg-[#44423C]" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
