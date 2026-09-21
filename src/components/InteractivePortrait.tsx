import { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import yashPhoto from '../assets/images/phoyo me.jpeg';

interface InteractivePortraitProps {
  className?: string;
}

export default function InteractivePortrait({ className = '' }: InteractivePortraitProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 3D Tilt motion springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`relative perspective-1000 ${className}`}>
      {/* Subtle ambient lighting */}
      <div
        className="absolute -inset-2 bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-blue-500/10 dark:from-amber-400/5 dark:via-emerald-400/5 dark:to-blue-400/5 rounded-2xl blur-xl transition-opacity duration-500"
        style={{ opacity: isHovered ? 0.8 : 0.25 }}
        aria-hidden="true"
      />

      {/* Floating animation wrapper using motion */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative group w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl p-2.5 bg-white dark:bg-[#1C1B19] border border-[#E6E3DB] dark:border-[#2C2B27] shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.6)] select-none transition-colors duration-300"
        >
          {/* Subtle interactive reflection glare overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
            style={{
              background: `radial-gradient(400px circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 70%)`,
            }}
          />

          {/* Clean Photo Container - Fixed User Photo */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#EAE8E1] dark:bg-[#252421]">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-[#E3E0D6] dark:bg-[#2C2B27]" />
            )}

            <img
              src={yashPhoto}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
