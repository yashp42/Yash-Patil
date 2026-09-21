import { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Target, BarChart2 } from 'lucide-react';
import { PRODUCT_CASE_STUDIES } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudyId: string;
  onClose: () => void;
  onSelectCaseStudy: (id: string) => void;
}

export default function CaseStudyModal({
  caseStudyId,
  onClose,
  onSelectCaseStudy
}: CaseStudyModalProps) {
  const caseStudy = PRODUCT_CASE_STUDIES.find(cs => cs.id === caseStudyId);
  const currentIndex = PRODUCT_CASE_STUDIES.findIndex(cs => cs.id === caseStudyId);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < PRODUCT_CASE_STUDIES.length - 1) {
        onSelectCaseStudy(PRODUCT_CASE_STUDIES[currentIndex + 1].id);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectCaseStudy(PRODUCT_CASE_STUDIES[currentIndex - 1].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudyId, currentIndex, onClose, onSelectCaseStudy]);

  if (!caseStudy) return null;

  return (
    <div
      id="case-study-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FAF9F5] dark:bg-[#171716] w-full max-w-4xl rounded-sm shadow-2xl border border-[#E8E6E0] dark:border-[#2C2B27] overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-[#FAF9F5] dark:bg-[#171716] border-b border-[#E8E6E0] dark:border-[#2C2B27] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
            <span className="uppercase">{caseStudy.category}</span>
            <span>•</span>
            <span>{caseStudy.period}</span>
          </div>

          <div className="flex items-center gap-2">
            {currentIndex > 0 && (
              <button
                onClick={() => onSelectCaseStudy(PRODUCT_CASE_STUDIES[currentIndex - 1].id)}
                className="p-1.5 hover:bg-[#EAE7DE] dark:hover:bg-[#282723] rounded-xs text-[#161616] dark:text-[#FAF9F5] text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors"
                title="Previous Case Study"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>
            )}

            {currentIndex < PRODUCT_CASE_STUDIES.length - 1 && (
              <button
                onClick={() => onSelectCaseStudy(PRODUCT_CASE_STUDIES[currentIndex + 1].id)}
                className="p-1.5 hover:bg-[#EAE7DE] dark:hover:bg-[#282723] rounded-xs text-[#161616] dark:text-[#FAF9F5] text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors"
                title="Next Case Study"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 hover:bg-[#EAE7DE] dark:hover:bg-[#282723] rounded-xs text-[#161616] dark:text-[#FAF9F5] transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 sm:px-12 py-8 sm:py-10 space-y-12">
          {/* Header */}
          <div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#161616] dark:text-[#FAF9F5] tracking-tight leading-[1.15]">
              {caseStudy.title}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#52504C] dark:text-[#C5C3B8] mt-2 font-medium">
              {caseStudy.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-[#EAE8E2] dark:border-[#2C2B27] font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
              <div>
                <span className="text-[#161616] dark:text-[#FAF9F5] font-medium">Role:</span> {caseStudy.role}
              </div>
              <div>
                <span className="text-[#161616] dark:text-[#FAF9F5] font-medium">Timeline:</span> {caseStudy.period}
              </div>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="bg-white dark:bg-[#1F1E1B] border border-[#E6E3DB] dark:border-[#2C2B27] p-6 sm:p-8 rounded-xs">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890] mb-2">
              Executive Overview
            </h3>
            <p className="font-sans text-base text-[#161616] dark:text-[#FAF9F5] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* The Core Problem */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-widest mb-2">
              <Target className="w-4 h-4 text-[#161616] dark:text-[#FAF9F5]" />
              <span>Problem Analysis</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#161616] dark:text-[#FAF9F5]">
              Core Challenge
            </h2>
            <p className="font-sans text-base text-[#3C3B37] dark:text-[#C5C3B8] mt-3 leading-relaxed">
              {caseStudy.theProblem}
            </p>
          </div>

          {/* Market & User Insights */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-widest mb-4">
              <BarChart2 className="w-4 h-4 text-[#161616] dark:text-[#FAF9F5]" />
              <span>Market and User Insights</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.marketAndUserInsights.map((insight, idx) => (
                <div key={idx} className="bg-white dark:bg-[#1F1E1B] border border-[#E6E3DB] dark:border-[#2C2B27] p-6 rounded-xs">
                  <div className="font-serif text-3xl text-[#161616] dark:text-[#FAF9F5] font-medium">
                    {insight.stat}
                  </div>
                  <div className="font-mono text-xs text-[#161616] dark:text-[#FAF9F5] font-semibold uppercase tracking-wider mt-1">
                    {insight.label}
                  </div>
                  <p className="font-sans text-xs text-[#52504C] dark:text-[#C5C3B8] mt-2 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Framework */}
          <div className="border border-[#161616] dark:border-[#FAF9F5]/30 bg-white dark:bg-[#1F1E1B] p-6 sm:p-8 rounded-xs">
            <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890] mb-1">
              Strategy Framework
            </div>
            <h3 className="font-serif text-2xl text-[#161616] dark:text-[#FAF9F5]">
              {caseStudy.strategicFramework.frameworkName}
            </h3>
            <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-2 leading-relaxed">
              {caseStudy.strategicFramework.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#F0EEE8] dark:border-[#2C2B27]">
              {caseStudy.strategicFramework.pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-sans text-sm font-semibold text-[#161616] dark:text-[#FAF9F5]">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-[#52504C] dark:text-[#C5C3B8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Solutions Breakdown */}
          <div>
            <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-widest mb-4">
              Product Solutions
            </div>
            <div className="space-y-6">
              {caseStudy.productSolutions.map((sol, idx) => (
                <div key={idx} className="bg-white dark:bg-[#1F1E1B] border border-[#E6E3DB] dark:border-[#2C2B27] p-6 rounded-xs">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#F0EEE8] dark:border-[#2C2B27]">
                    <span className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] font-medium uppercase">
                      {sol.phase}
                    </span>
                    <h3 className="font-sans text-base font-semibold text-[#161616] dark:text-[#FAF9F5]">
                      {sol.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-3 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F0EEE8] dark:border-[#2C2B27]">
                    <div className="font-mono text-[11px] text-[#73726E] dark:text-[#9A9890] uppercase mb-2">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5 font-sans text-xs text-[#3C3B37] dark:text-[#C5C3B8]">
                      {sol.keyDeliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unit Economics & Verified Outcomes */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#73726E] dark:text-[#9A9890] uppercase tracking-widest mb-4">
              <TrendingUp className="w-4 h-4 text-[#161616] dark:text-[#FAF9F5]" />
              <span>Unit Economics and Expected Impact</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#F4F2EC] dark:bg-[#1F1E1B] p-6 rounded-xs border border-[#E6E3DB] dark:border-[#2C2B27]">
              {caseStudy.unitEconomicsAndImpact.map((metric, idx) => (
                <div key={idx}>
                  <div className="font-serif text-3xl sm:text-4xl text-[#161616] dark:text-[#FAF9F5] font-medium">
                    {metric.metric}
                  </div>
                  <div className="font-mono text-xs text-[#161616] dark:text-[#FAF9F5] font-semibold uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                  <p className="font-sans text-xs text-[#52504C] dark:text-[#C5C3B8] mt-1.5 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#EAE8E2] dark:border-[#2C2B27] flex flex-wrap gap-2">
            {caseStudy.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-white dark:bg-[#1F1E1B] border border-[#D8D6CE] dark:border-[#383632] text-xs font-mono text-[#52504C] dark:text-[#C5C3B8] rounded-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#FAF9F5] dark:bg-[#171716] border-t border-[#E8E6E0] dark:border-[#2C2B27] px-6 py-4 flex items-center justify-between">
          <div className="text-xs font-mono text-[#73726E] dark:text-[#9A9890]">
            Case {currentIndex + 1} of {PRODUCT_CASE_STUDIES.length}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#161616] dark:bg-[#FAF9F5] hover:bg-[#333] dark:hover:bg-[#EAE8E0] text-[#FAF9F5] dark:text-[#141413] rounded-xs text-xs font-mono transition-colors cursor-pointer"
          >
            Close Breakdown
          </button>
        </div>
      </div>
    </div>
  );
}
