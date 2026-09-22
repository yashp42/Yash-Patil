import { useState, useEffect } from 'react';
import { InteractiveCaseStudy, TeardownSlide } from '../../types';
import TeardownScreenMock from './TeardownScreenMock';

interface InteractiveTeardownModalProps {
  caseStudy: InteractiveCaseStudy;
  onClose: () => void;
}

export default function InteractiveTeardownModal({
  caseStudy,
  onClose,
}: InteractiveTeardownModalProps) {
  const slides = caseStudy.slides || [];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isRedesignActive, setIsRedesignActive] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const currentSlide: TeardownSlide | undefined = slides[currentSlideIndex];

  // Reset redesign toggle when changing slides
  useEffect(() => {
    setIsRedesignActive(false);
  }, [currentSlideIndex]);

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlideIndex < slides.length - 1) {
          setCurrentSlideIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlideIndex > 0) {
          setCurrentSlideIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlideIndex, slides.length, onClose]);

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (!currentSlide) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen flex flex-col bg-[#FAF9F5] dark:bg-[#141413] text-[#161616] dark:text-[#FAF9F5] overflow-hidden select-none animate-fade-in"
    >
      {/* Top Header Bar - Full Screen Width */}
      <header className="h-14 sm:h-16 shrink-0 bg-[#FAF9F5] dark:bg-[#171716] border-b border-[#E8E6E0] dark:border-[#2C2B27] px-4 sm:px-8 flex items-center justify-between z-20">
        
        {/* Left: Study Metadata & Back */}
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs">
          <button
            onClick={onClose}
            className="text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors cursor-pointer"
          >
            ← Exit Teardown
          </button>
          <span className="text-[#D8D6CE] dark:text-[#33322E]">/</span>
          <span className="font-semibold text-[#161616] dark:text-[#FAF9F5] uppercase">
            {caseStudy.company}
          </span>
          <span className="hidden sm:inline text-[#D8D6CE] dark:text-[#33322E]">•</span>
          <span className="hidden sm:inline uppercase text-[#73726E] dark:text-[#9A9890]">
            {caseStudy.category}
          </span>
        </div>

        {/* Center: Slide Progress Counter */}
        <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
          Step {String(currentSlideIndex + 1).padStart(2, '0')} of {String(slides.length).padStart(2, '0')}
        </div>

        {/* Right: Navigation Controls */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer ${
              currentSlideIndex === 0
                ? 'opacity-25 cursor-not-allowed border-[#E8E6E0] dark:border-[#2C2B27]'
                : 'hover:bg-[#EAE7DE] dark:hover:bg-[#282723] border-[#D8D6CE] dark:border-[#33322E]'
            }`}
          >
            ← Prev
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === slides.length - 1}
            className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer ${
              currentSlideIndex === slides.length - 1
                ? 'opacity-25 cursor-not-allowed border-[#E8E6E0] dark:border-[#2C2B27]'
                : 'hover:bg-[#EAE7DE] dark:hover:bg-[#282723] border-[#D8D6CE] dark:border-[#33322E]'
            }`}
          >
            Next →
          </button>

          <button
            onClick={handleCopyShare}
            className="hidden sm:inline-block px-3 py-1.5 rounded-xs border border-[#D8D6CE] dark:border-[#33322E] hover:bg-[#EAE7DE] dark:hover:bg-[#282723] transition-colors cursor-pointer"
          >
            {copiedLink ? 'Copied Link' : 'Share'}
          </button>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-xs border border-[#D8D6CE] dark:border-[#33322E] hover:bg-[#EAE7DE] dark:hover:bg-[#282723] transition-colors cursor-pointer ml-1"
            aria-label="Close teardown"
          >
            Close [x]
          </button>
        </div>
      </header>

      {/* Main Full-Screen Split Stage */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Half: Edge-to-Edge Visual Phone/Screen Stage */}
        <div className="lg:w-1/2 h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#F3F0E8] dark:bg-[#10100F] border-b lg:border-b-0 lg:border-r border-[#E8E6E0] dark:border-[#282724] overflow-y-auto">
          <div className="w-full max-w-sm sm:max-w-md h-[580px] sm:h-[680px] lg:h-[740px] max-h-[82vh] rounded-xs border border-[#E8E6E0] dark:border-[#2C2B27] bg-[#FFFFFF] dark:bg-[#1C1B19] overflow-hidden shadow-md flex flex-col">
            
            {/* Screen Mock Header */}
            <div className="px-4 py-2.5 border-b border-[#E8E6E0] dark:border-[#2C2B27] flex items-center justify-between font-mono text-[11px] text-[#73726E] dark:text-[#9A9890] bg-[#FAF9F5] dark:bg-[#141413]">
              <span className="font-semibold text-[#161616] dark:text-[#FAF9F5]">USER JOURNEY FLOW</span>
              <span>{currentSlide.deviceType === 'mobile' ? 'MOBILE' : 'DESKTOP'}</span>
            </div>

            {/* Screen Content Frame */}
            <div className="flex-1 w-full overflow-hidden bg-[#FFFFFF] dark:bg-[#121211]">
              <TeardownScreenMock
                mockType={currentSlide.screenMockType}
                imageUrl={isRedesignActive ? currentSlide.redesignImageUrl : currentSlide.screenImageUrl}
                hasRedesignActive={isRedesignActive}
                stepNumber={currentSlide.stepNumber}
              />
            </div>
          </div>

          {/* Before/After Redesign Toggle (if available) */}
          {currentSlide.hasBeforeAfter && (
            <div className="w-full max-w-sm sm:max-w-md mt-4 flex items-center justify-between border border-[#E8E6E0] dark:border-[#2C2B27] p-1 rounded-xs bg-[#FAF9F5] dark:bg-[#1C1B19] font-mono text-xs">
              <button
                onClick={() => setIsRedesignActive(false)}
                className={`flex-1 py-1.5 text-center transition-colors cursor-pointer rounded-xs ${
                  !isRedesignActive
                    ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] font-medium'
                    : 'text-[#73726E] dark:text-[#9A9890]'
                }`}
              >
                Original Flow
              </button>
              <button
                onClick={() => setIsRedesignActive(true)}
                className={`flex-1 py-1.5 text-center transition-colors cursor-pointer rounded-xs ${
                  isRedesignActive
                    ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] font-medium'
                    : 'text-[#73726E] dark:text-[#9A9890]'
                }`}
              >
                Proposed Redesign
              </button>
            </div>
          )}
        </div>

        {/* Right Half: Generous Executive Teardown Analysis Stage */}
        <div className="lg:w-1/2 h-full overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-8 bg-[#FAF9F5] dark:bg-[#141413]">
          <div className="max-w-2xl mx-auto space-y-8">
            
            {/* Step Heading & Journey Context */}
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
                Step {String(currentSlide.stepNumber).padStart(2, '0')} of {String(slides.length).padStart(2, '0')} • {caseStudy.company}
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#161616] dark:text-[#FAF9F5] tracking-tight leading-tight">
                {currentSlide.screenTitle}
              </h1>
              <p className="font-sans text-base text-[#52504C] dark:text-[#C5C3B8] leading-relaxed font-light pt-1">
                {currentSlide.appStateDescription}
              </p>
            </div>

            {/* Behavioral Heuristics Block */}
            {currentSlide.psychologyPrinciple && (
              <div className="border border-[#E8E6E0] dark:border-[#2C2B27] bg-white dark:bg-[#1A1918] p-6 rounded-xs space-y-3 shadow-xs">
                <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
                  Behavioral Psychology Heuristic
                </div>
                <h3 className="font-serif text-xl text-[#161616] dark:text-[#FAF9F5]">
                  {currentSlide.psychologyPrinciple.name}
                </h3>
                <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] leading-relaxed font-light">
                  {currentSlide.psychologyPrinciple.definition}
                </p>
                {currentSlide.psychologyPrinciple.impact && (
                  <div className="pt-3 border-t border-[#E8E6E0] dark:border-[#282724] font-mono text-xs text-[#161616] dark:text-[#FAF9F5]">
                    Impact: {currentSlide.psychologyPrinciple.impact}
                  </div>
                )}
              </div>
            )}

            {/* Friction Points & Forensic Observations */}
            {currentSlide.hotspots && currentSlide.hotspots.length > 0 && (
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
                  Friction Points &amp; Flow Observations
                </div>
                <div className="space-y-3">
                  {currentSlide.hotspots.map((h, idx) => (
                    <div
                      key={h.id}
                      className="p-4 border border-[#E8E6E0] dark:border-[#2C2B27] bg-white dark:bg-[#1A1918] rounded-xs space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <h4 className="font-sans text-sm font-medium text-[#161616] dark:text-[#FAF9F5]">
                          {h.title}
                        </h4>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-[#52504C] dark:text-[#C5C3B8] leading-relaxed pl-6 font-light">
                        {h.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Strategic Takeaway Block */}
            {currentSlide.keyTakeaway && (
              <div className="p-5 border-l-2 border-[#161616] dark:border-[#FAF9F5] bg-[#F7F5F0] dark:bg-[#1C1B19] space-y-1">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
                  Strategic Product Takeaway
                </div>
                <p className="font-sans text-sm sm:text-base text-[#161616] dark:text-[#FAF9F5] font-normal leading-relaxed">
                  {currentSlide.keyTakeaway}
                </p>
              </div>
            )}

            {/* Bottom Scrubber & Keyboard Shortcuts */}
            <div className="pt-6 border-t border-[#E8E6E0] dark:border-[#282724] flex items-center justify-between font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2 rounded-xs transition-all cursor-pointer ${
                      idx === currentSlideIndex
                        ? 'w-8 bg-[#161616] dark:bg-[#FAF9F5]'
                        : 'w-2.5 bg-[#D8D6CE] dark:bg-[#33322E] hover:bg-[#73726E]'
                    }`}
                    title={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>

              <span>Press ← / → or Space to navigate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
