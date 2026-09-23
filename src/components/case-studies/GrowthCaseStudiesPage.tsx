import { useState, useEffect } from 'react';
import { InteractiveCaseStudy, CaseStudyFormat, CaseStudyAvailability } from '../../types';
import InteractiveTeardownModal from './InteractiveTeardownModal';
import SlideDeckViewerModal from './SlideDeckViewerModal';
import AdminCreatorStudioModal from './AdminCreatorStudioModal';
import { fetchAllCaseStudies } from '../../services/caseStudyStore';

interface GrowthCaseStudiesPageProps {
  onBackToOverview?: () => void;
}

export default function GrowthCaseStudiesPage({ onBackToOverview }: GrowthCaseStudiesPageProps) {
  const [caseStudies, setCaseStudies] = useState<InteractiveCaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFormat, setSelectedFormat] = useState<'all' | CaseStudyFormat>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<'all' | CaseStudyAvailability>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [hasAuthorSession, setHasAuthorSession] = useState(false);
  
  // Modals
  const [activeTeardown, setActiveTeardown] = useState<InteractiveCaseStudy | null>(null);
  const [activeDeck, setActiveDeck] = useState<InteractiveCaseStudy | null>(null);

  const fetchStudies = async () => {
    try {
      setLoading(true);
      const studies = await fetchAllCaseStudies();
      setCaseStudies(studies);
    } catch (err) {
      console.error('Failed to load case studies:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudies();

    // Check if author session is active
    if (localStorage.getItem('yp_admin_token')) {
      setHasAuthorSession(true);
    }

    // Check if query param requests studio (e.g. ?studio=true or ?admin=true)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('studio') === 'true' || urlParams.get('admin') === 'true') {
      setIsStudioOpen(true);
    }

    // Keyboard shortcut: Ctrl+Shift+U or Cmd+Shift+U opens Studio
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        setIsStudioOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenStudy = (cs: InteractiveCaseStudy) => {
    if (cs.availability === 'coming_soon') {
      return;
    }

    if (cs.format === 'interactive_comic') {
      setActiveTeardown(cs);
    } else {
      setActiveDeck(cs);
    }
  };

  // Filtered List
  const filteredStudies = caseStudies.filter((cs) => {
    if (selectedFormat !== 'all' && cs.format !== selectedFormat) return false;
    if (selectedAvailability !== 'all' && cs.availability !== selectedAvailability) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = cs.title.toLowerCase().includes(q);
      const matchCompany = cs.company.toLowerCase().includes(q);
      const matchTag = cs.tags?.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchCompany && !matchTag) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#141413] text-[#161616] dark:text-[#FAF9F5] transition-colors duration-200">
      
      {/* Top Breadcrumb Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-8 pb-4">
        <div className="flex items-center justify-between border-b border-[#E8E6E0] dark:border-[#282724] pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
            {onBackToOverview && (
              <button
                onClick={onBackToOverview}
                className="hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors cursor-pointer"
              >
                ← Portfolio Overview
              </button>
            )}
            <span>/</span>
            <span className="text-[#161616] dark:text-[#FAF9F5] uppercase">Case Studies &amp; Teardowns</span>
          </div>

          <div className="flex items-center gap-3">
            {hasAuthorSession && (
              <button
                onClick={() => setIsStudioOpen(true)}
                className="px-2 py-0.5 rounded-xs border border-[#161616] dark:border-[#FAF9F5] text-[#161616] dark:text-[#FAF9F5] font-mono text-[11px] transition-colors cursor-pointer"
              >
                [Author Studio]
              </button>
            )}
            <div className="font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
              {filteredStudies.length} of {caseStudies.length} Cases
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-8 pb-12">
        <div className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890] mb-3">
            Product &amp; Behavioral Strategy
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161616] dark:text-[#FAF9F5] leading-[1.15]">
            Product Teardowns &amp; Strategy Decks
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#52504C] dark:text-[#C5C3B8] mt-4 leading-relaxed font-light">
            Screen-by-screen analyses and strategic presentation decks exploring user friction, 
            behavioral psychology, and distribution unit economics across high-scale products.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 pt-6 border-t border-[#E8E6E0] dark:border-[#282724] flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Format Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedFormat('all')}
              className={`px-3 py-1.5 rounded-xs font-mono text-xs whitespace-nowrap transition-colors cursor-pointer ${
                selectedFormat === 'all'
                  ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413]'
                  : 'bg-[#F2EFE8] dark:bg-[#201F1C] text-[#52504C] dark:text-[#B5B3A8] hover:bg-[#EAE7DE] dark:hover:bg-[#2A2925]'
              }`}
            >
              All Studies
            </button>
            <button
              onClick={() => setSelectedFormat('interactive_comic')}
              className={`px-3 py-1.5 rounded-xs font-mono text-xs whitespace-nowrap transition-colors cursor-pointer ${
                selectedFormat === 'interactive_comic'
                  ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413]'
                  : 'bg-[#F2EFE8] dark:bg-[#201F1C] text-[#52504C] dark:text-[#B5B3A8] hover:bg-[#EAE7DE] dark:hover:bg-[#2A2925]'
              }`}
            >
              Product Teardowns
            </button>
            <button
              onClick={() => setSelectedFormat('slide_deck')}
              className={`px-3 py-1.5 rounded-xs font-mono text-xs whitespace-nowrap transition-colors cursor-pointer ${
                selectedFormat === 'slide_deck'
                  ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413]'
                  : 'bg-[#F2EFE8] dark:bg-[#201F1C] text-[#52504C] dark:text-[#B5B3A8] hover:bg-[#EAE7DE] dark:hover:bg-[#2A2925]'
              }`}
            >
              Strategy Decks
            </button>
          </div>

          {/* Status & Search Filter */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Availability Filter */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSelectedAvailability('all')}
                className={`px-2.5 py-1 rounded-xs font-mono text-xs transition-colors cursor-pointer ${
                  selectedAvailability === 'all'
                    ? 'text-[#161616] dark:text-[#FAF9F5] font-medium underline underline-offset-4'
                    : 'text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5]'
                }`}
              >
                [All Status]
              </button>
              <button
                onClick={() => setSelectedAvailability('available')}
                className={`px-2.5 py-1 rounded-xs font-mono text-xs transition-colors cursor-pointer ${
                  selectedAvailability === 'available'
                    ? 'text-[#161616] dark:text-[#FAF9F5] font-medium underline underline-offset-4'
                    : 'text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5]'
                }`}
              >
                [Available]
              </button>
              <button
                onClick={() => setSelectedAvailability('coming_soon')}
                className={`px-2.5 py-1 rounded-xs font-mono text-xs transition-colors cursor-pointer ${
                  selectedAvailability === 'coming_soon'
                    ? 'text-[#161616] dark:text-[#FAF9F5] font-medium underline underline-offset-4'
                    : 'text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5]'
                }`}
              >
                [In Research]
              </button>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search companies, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white dark:bg-[#171716] border border-[#E8E6E0] dark:border-[#282724] px-3 py-1.5 rounded-xs font-sans text-xs text-[#161616] dark:text-[#FAF9F5] placeholder-[#73726E] dark:placeholder-[#9A9890] focus:outline-none focus:border-[#161616] dark:focus:border-[#FAF9F5] w-48 sm:w-56"
            />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-8">
          {loading ? (
            <div className="py-20 text-center font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
              Loading case studies...
            </div>
          ) : filteredStudies.length === 0 ? (
            <div className="py-20 text-center font-mono text-xs text-[#73726E] dark:text-[#9A9890] border border-[#E8E6E0] dark:border-[#282724] bg-white dark:bg-[#171716] rounded-xs p-8">
              No matching case studies found. Try adjusting your search query or filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStudies.map((cs) => {
                const isAvailable = cs.availability === 'available';
                const isComic = cs.format === 'interactive_comic';

                return (
                  <div
                    key={cs.id}
                    onClick={() => handleOpenStudy(cs)}
                    className={`group bg-white dark:bg-[#171716] border border-[#E8E6E0] dark:border-[#282724] p-6 sm:p-7 rounded-xs transition-all flex flex-col justify-between ${
                      isAvailable
                        ? 'hover:border-[#161616] dark:hover:border-[#FAF9F5] cursor-pointer'
                        : 'opacity-75 cursor-default'
                    }`}
                  >
                    <div>
                      {/* Card Header: Meta + Status */}
                      <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E8E6E0] dark:border-[#282724]">
                        <div className="flex items-center gap-2 font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
                          <span className="font-semibold text-[#161616] dark:text-[#FAF9F5] uppercase">
                            {cs.company}
                          </span>
                          <span>•</span>
                          <span className="uppercase">{cs.category}</span>
                        </div>

                        <div className="font-mono text-xs">
                          {isAvailable ? (
                            <span className="text-[#161616] dark:text-[#FAF9F5] border border-[#E8E6E0] dark:border-[#282724] px-2 py-0.5 rounded-xs">
                              [Available]
                            </span>
                          ) : (
                            <span className="text-[#73726E] dark:text-[#9A9890] border border-[#E8E6E0] dark:border-[#282724] px-2 py-0.5 rounded-xs">
                              [In Research]
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#161616] dark:text-[#FAF9F5] tracking-tight mt-4 leading-snug group-hover:underline">
                        {cs.title}
                      </h2>

                      {/* Subtitle */}
                      <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] mt-2 leading-relaxed font-light">
                        {cs.subtitle}
                      </p>

                      {/* Key Metrics */}
                      {cs.keyMetrics && cs.keyMetrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-3 my-5 py-3 border-y border-[#E8E6E0] dark:border-[#282724]">
                          {cs.keyMetrics.map((km, idx) => (
                            <div key={idx}>
                              <div className="font-serif text-base sm:text-lg font-normal text-[#161616] dark:text-[#FAF9F5]">
                                {km.value}
                              </div>
                              <div className="font-mono text-[10px] text-[#73726E] dark:text-[#9A9890] uppercase mt-0.5 truncate">
                                {km.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      {cs.tags && cs.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 my-3">
                          {cs.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-[10px] text-[#73726E] dark:text-[#9A9890] bg-[#F2EFE8] dark:bg-[#201F1C] px-2 py-0.5 rounded-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 mt-2 border-t border-[#E8E6E0] dark:border-[#282724] flex items-center justify-between font-mono text-xs">
                      <span className="text-[#73726E] dark:text-[#9A9890]">
                        {cs.slidesCount > 0 ? `${cs.slidesCount} Slides • ${cs.readingTimeMinutes} min read` : `${cs.readingTimeMinutes} min read`}
                      </span>

                      <div>
                        {isAvailable ? (
                          <span className="font-sans text-xs font-medium text-[#161616] dark:text-[#FAF9F5] group-hover:underline">
                            {isComic
                              ? 'Read Teardown →'
                              : cs.deckPdfUrl
                                ? 'Read Deck On-Site →'
                                : 'View Presentation →'}
                          </span>
                        ) : (
                          <span className="text-[#73726E] dark:text-[#9A9890] text-xs font-sans">
                            In Field Research
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Minimalist Footnote */}
        <footer className="mt-16 pt-8 border-t border-[#E8E6E0] dark:border-[#282724] flex items-center justify-between font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
          <span>Portfolio Research Archive • Yash Patil</span>
          <button
            onClick={() => setIsStudioOpen(true)}
            className="text-[#9A9890] dark:text-[#52504C] hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors cursor-pointer text-[11px]"
            title="Author verification required"
          >
            Author Access
          </button>
        </footer>
      </div>

      {/* Case Study Teardown Reader Modal */}
      {activeTeardown && (
        <InteractiveTeardownModal
          caseStudy={activeTeardown}
          onClose={() => setActiveTeardown(null)}
        />
      )}

      {/* Strategy Slide Deck Modal */}
      {activeDeck && (
        <SlideDeckViewerModal
          caseStudy={activeDeck}
          onClose={() => setActiveDeck(null)}
        />
      )}

      {/* Author & Creator Studio Modal */}
      <AdminCreatorStudioModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        caseStudies={caseStudies}
        onRefreshData={fetchStudies}
        onAuthChange={setHasAuthorSession}
        onPreviewStudy={(cs) => {
          if (cs.format === 'interactive_comic') {
            setActiveTeardown(cs);
          } else {
            setActiveDeck(cs);
          }
        }}
      />
    </div>
  );
}
