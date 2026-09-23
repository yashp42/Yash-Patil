import { useState, useEffect } from 'react';
import { InteractiveCaseStudy, DeckSlide } from '../../types';
import { Download, ExternalLink, FileText, Layers, X, ArrowLeft, ArrowRight, Eye } from 'lucide-react';

interface SlideDeckViewerModalProps {
  caseStudy: InteractiveCaseStudy;
  onClose: () => void;
}

export default function SlideDeckViewerModal({
  caseStudy,
  onClose,
}: SlideDeckViewerModalProps) {
  const slides: DeckSlide[] = caseStudy.deckSlides || [];
  const hasDocument = Boolean(caseStudy.deckPdfUrl);
  
  // Default to live document viewer if a PDF/PPT deck file is attached; otherwise slide breakdown
  const [activeTab, setActiveTab] = useState<'document' | 'breakdown'>(
    hasDocument ? 'document' : 'breakdown'
  );

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [useGoogleViewerFallback, setUseGoogleViewerFallback] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const currentSlide: DeckSlide | undefined = slides[currentSlideIndex];

  // Determine file type and best viewer URL
  const docUrl = caseStudy.deckPdfUrl || '';
  
  // Detect Google Drive, Google Slides, Google Docs, PPT, or native PDF
  const gDriveMatch = docUrl.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/i);
  const gSlidesMatch = docUrl.match(/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)/i);
  const gDocsMatch = docUrl.match(/docs\.google\.com\/document\/d\/([a-zA-Z0-9_-]+)/i);
  const isPpt = docUrl.toLowerCase().includes('.ppt') || docUrl.toLowerCase().includes('.pptx');
  const isGoogleSource = Boolean(gDriveMatch || gSlidesMatch || gDocsMatch);

  // Construct absolute URL for standard viewers if needed
  const absoluteDocUrl = docUrl.startsWith('http://') || docUrl.startsWith('https://')
    ? docUrl
    : typeof window !== 'undefined'
      ? `${window.location.origin}${docUrl}`
      : docUrl;

  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(absoluteDocUrl)}&embedded=true`;
  const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteDocUrl)}`;

  let viewerSrc = docUrl;
  let documentReaderLabel = 'Interactive Document Reader';

  if (gSlidesMatch && gSlidesMatch[1]) {
    viewerSrc = `https://docs.google.com/presentation/d/${gSlidesMatch[1]}/embed?start=false&loop=false&delayms=3000`;
    documentReaderLabel = 'Google Slides • Interactive Presentation';
  } else if (gDriveMatch && gDriveMatch[1]) {
    viewerSrc = `https://drive.google.com/file/d/${gDriveMatch[1]}/preview`;
    documentReaderLabel = 'Google Drive • Interactive Document Reader';
  } else if (gDocsMatch && gDocsMatch[1]) {
    viewerSrc = `https://docs.google.com/document/d/${gDocsMatch[1]}/preview`;
    documentReaderLabel = 'Google Docs • Document Reader';
  } else if (isPpt) {
    viewerSrc = officeViewerUrl;
    documentReaderLabel = 'Office Presentation Reader';
  } else if (useGoogleViewerFallback) {
    viewerSrc = googleViewerUrl;
    documentReaderLabel = 'Google Docs Web Viewer';
  } else if (docUrl && !docUrl.includes('#')) {
    viewerSrc = `${docUrl}#view=FitH&toolbar=1&navpanes=0`;
    documentReaderLabel = 'Native PDF Document Reader';
  }

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (activeTab === 'breakdown') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlideIndex, slides.length, onClose, activeTab]);

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

  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen flex flex-col bg-[#FAF9F5] dark:bg-[#141413] text-[#161616] dark:text-[#FAF9F5] overflow-hidden select-none animate-fade-in"
    >
      {/* Top Header Bar - Full Screen Width */}
      <header className="h-14 sm:h-16 shrink-0 bg-[#FAF9F5] dark:bg-[#171716] border-b border-[#E8E6E0] dark:border-[#2C2B27] px-4 sm:px-6 flex items-center justify-between z-20">
        
        {/* Left: Metadata & Back */}
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exit Presentation</span>
            <span className="sm:hidden">Exit</span>
          </button>
          <span className="text-[#D8D6CE] dark:text-[#33322E]">/</span>
          <span className="font-semibold text-[#161616] dark:text-[#FAF9F5] uppercase">
            {caseStudy.company}
          </span>
          <span className="hidden sm:inline text-[#D8D6CE] dark:text-[#33322E]">•</span>
          <span className="hidden sm:inline uppercase text-[#73726E] dark:text-[#9A9890] truncate max-w-[200px]">
            {caseStudy.title}
          </span>
        </div>

        {/* Center: View Switcher (If both document and breakdown exist) */}
        {hasDocument && slides.length > 0 && (
          <div className="hidden md:flex items-center border border-[#D8D6CE] dark:border-[#33322E] p-0.5 rounded-xs bg-[#EAE7DE] dark:bg-[#201F1C] text-xs font-mono">
            <button
              onClick={() => setActiveTab('document')}
              className={`px-3 py-1 rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'document'
                  ? 'bg-white dark:bg-[#141413] text-[#161616] dark:text-[#FAF9F5] font-semibold shadow-xs'
                  : 'text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Document Reader
            </button>
            <button
              onClick={() => setActiveTab('breakdown')}
              className={`px-3 py-1 rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'breakdown'
                  ? 'bg-white dark:bg-[#141413] text-[#161616] dark:text-[#FAF9F5] font-semibold shadow-xs'
                  : 'text-[#73726E] dark:text-[#9A9890] hover:text-[#161616] dark:hover:text-[#FAF9F5]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Strategic Highlights ({slides.length})
            </button>
          </div>
        )}

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {/* Download file button */}
          {hasDocument && (
            <a
              href={docUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xs border border-[#D8D6CE] dark:border-[#33322E] hover:bg-[#EAE7DE] dark:hover:bg-[#282723] text-[#161616] dark:text-[#FAF9F5] transition-colors cursor-pointer"
              title="Download presentation file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
          )}

          {/* Open in new tab or Google Drive */}
          {hasDocument && (
            <a
              href={docUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xs border border-[#D8D6CE] dark:border-[#33322E] hover:bg-[#EAE7DE] dark:hover:bg-[#282723] text-[#161616] dark:text-[#FAF9F5] transition-colors cursor-pointer"
              title={isGoogleSource ? 'Open in Google Drive / Slides' : 'Open in new tab'}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{isGoogleSource ? 'Open in Google Drive' : 'Full Screen'}</span>
            </a>
          )}

          {/* Slide Breakdown Controls (only active when in breakdown mode) */}
          {activeTab === 'breakdown' && slides.length > 0 && (
            <>
              <button
                onClick={() => setShowNotes(!showNotes)}
                className={`px-2.5 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                  showNotes
                    ? 'bg-[#161616] dark:bg-[#FAF9F5] text-[#FAF9F5] dark:text-[#141413] font-medium border-[#161616] dark:border-[#FAF9F5]'
                    : 'border-[#D8D6CE] dark:border-[#33322E] hover:bg-[#EAE7DE] dark:hover:bg-[#282723]'
                }`}
              >
                {showNotes ? 'Hide Notes' : 'Field Notes'}
              </button>

              <button
                onClick={handlePrev}
                disabled={currentSlideIndex === 0}
                className={`px-2.5 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                  currentSlideIndex === 0
                    ? 'opacity-25 cursor-not-allowed border-[#E8E6E0] dark:border-[#2C2B27]'
                    : 'hover:bg-[#EAE7DE] dark:hover:bg-[#282723] border-[#D8D6CE] dark:border-[#33322E]'
                }`}
              >
                ←
              </button>

              <button
                onClick={handleNext}
                disabled={currentSlideIndex === slides.length - 1}
                className={`px-2.5 py-1.5 rounded-xs border transition-colors cursor-pointer ${
                  currentSlideIndex === slides.length - 1
                    ? 'opacity-25 cursor-not-allowed border-[#E8E6E0] dark:border-[#2C2B27]'
                    : 'hover:bg-[#EAE7DE] dark:hover:bg-[#282723] border-[#D8D6CE] dark:border-[#33322E]'
                }`}
              >
                →
              </button>
            </>
          )}

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xs border border-[#D8D6CE] dark:border-[#33322E] hover:bg-[#EAE7DE] dark:hover:bg-[#282723] transition-colors cursor-pointer ml-1"
            aria-label="Close presentation"
          >
            <X className="w-4 h-4 sm:hidden" />
            <span className="hidden sm:inline">Close [x]</span>
          </button>
        </div>
      </header>

      {/* VIEW 1: LIVE ON-SITE DOCUMENT READER */}
      {activeTab === 'document' && hasDocument && (
        <div className="flex-1 w-full h-full flex flex-col bg-[#2A2A2A] relative overflow-hidden">
          
          {/* Subtle sub-bar with fallback toggle */}
          <div className="bg-[#1E1E1E] text-[#B0AEA5] border-b border-[#3A3935] px-4 py-1.5 flex items-center justify-between font-mono text-[11px] shrink-0">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#FAF9F5] font-medium">{documentReaderLabel}</span>
              <span className="text-[#605F5A]">•</span>
              <span className="text-[#888680] truncate max-w-xs">{caseStudy.title}</span>
            </div>

            <div className="flex items-center gap-3">
              {!isPpt && !isGoogleSource && (
                <button
                  onClick={() => setUseGoogleViewerFallback(!useGoogleViewerFallback)}
                  className="text-[#9A9890] hover:text-[#FAF9F5] underline cursor-pointer"
                >
                  {useGoogleViewerFallback ? 'Switch to Native Browser Reader' : 'Having trouble loading? Switch to Web Reader'}
                </button>
              )}
            </div>
          </div>

          {/* Full Screen Embedded Document Frame */}
          <div className="flex-1 w-full h-full relative bg-[#333333]">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1C1C1B] text-[#FAF9F5] font-mono text-xs gap-3 z-10">
                <div className="w-6 h-6 border-2 border-[#FAF9F5] border-t-transparent rounded-full animate-spin" />
                <span>Loading presentation document...</span>
              </div>
            )}

            <iframe
              src={viewerSrc}
              title={`${caseStudy.company} - ${caseStudy.title}`}
              className="w-full h-full border-0"
              onLoad={() => setIframeLoaded(true)}
              allow="fullscreen; autoplay"
            />
          </div>
        </div>
      )}

      {/* VIEW 2: STRATEGIC HIGHLIGHTS BREAKDOWN CANVAS */}
      {(activeTab === 'breakdown' || !hasDocument) && (
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-8 lg:p-12 flex flex-col justify-between items-center bg-[#F3F0E8] dark:bg-[#10100F]">
          {currentSlide ? (
            <div className="w-full max-w-5xl my-auto space-y-6">
              
              {/* Main 16:9 Presentation Canvas */}
              <div className="w-full border border-[#E8E6E0] dark:border-[#2C2B27] bg-white dark:bg-[#171716] p-8 sm:p-12 lg:p-16 rounded-xs shadow-md space-y-8">
                
                {/* Slide Header */}
                <div className="border-b border-[#E8E6E0] dark:border-[#282724] pb-6 space-y-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
                    Slide {String(currentSlide.slideNumber).padStart(2, '0')} of {String(slides.length).padStart(2, '0')} • {caseStudy.company}
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616] dark:text-[#FAF9F5] tracking-tight leading-tight">
                    {currentSlide.title}
                  </h1>
                  {currentSlide.subtitle && (
                    <p className="font-sans text-base sm:text-lg text-[#52504C] dark:text-[#C5C3B8] font-light leading-relaxed pt-1">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                {/* Metrics Grid */}
                {currentSlide.metricsGrid && currentSlide.metricsGrid.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
                    {currentSlide.metricsGrid.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-5 border border-[#E8E6E0] dark:border-[#282724] bg-[#FAF9F5] dark:bg-[#141413] rounded-xs"
                      >
                        <div className="font-serif text-2xl sm:text-3xl font-normal text-[#161616] dark:text-[#FAF9F5]">
                          {m.value}
                        </div>
                        <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890] mt-1.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Slide Graphic / Diagram Image */}
                {currentSlide.imageUrl && (
                  <div className="w-full border border-[#E8E6E0] dark:border-[#282724] bg-[#FAF9F5] dark:bg-[#141413] rounded-xs overflow-hidden max-h-[460px] flex items-center justify-center p-3">
                    <img
                      src={currentSlide.imageUrl}
                      alt={currentSlide.title}
                      className="max-h-[430px] w-auto max-w-full object-contain rounded-xs shadow-xs"
                    />
                  </div>
                )}

                {/* Strategic Analysis Bullets */}
                <div className="space-y-4 pt-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
                    Key Strategic Analysis &amp; Deliverables
                  </div>
                  <ul className="space-y-3">
                    {currentSlide.contentHighlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3.5 font-sans text-sm sm:text-base text-[#3C3B37] dark:text-[#D5D3C8] leading-relaxed"
                      >
                        <span className="font-mono text-xs text-[#73726E] dark:text-[#9A9890] mt-1 shrink-0">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <span className="font-light">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Framework diagram note */}
                {currentSlide.frameworkDiagramTitle && (
                  <div className="p-4 border border-[#E8E6E0] dark:border-[#282724] bg-[#FAF9F5] dark:bg-[#141413] rounded-xs font-mono text-xs text-[#52504C] dark:text-[#C5C3B8]">
                    <span className="font-semibold text-[#161616] dark:text-[#FAF9F5] uppercase mr-2">
                      Operating Framework:
                    </span>
                    {currentSlide.frameworkDiagramTitle}
                  </div>
                )}
              </div>

              {/* Presenter Field Notes Drawer */}
              {showNotes && currentSlide.notes && (
                <div className="p-6 border border-[#E8E6E0] dark:border-[#2C2B27] bg-[#FAF9F5] dark:bg-[#1A1918] rounded-xs space-y-2 shadow-sm">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#73726E] dark:text-[#9A9890]">
                    Author Notes &amp; Field Context
                  </div>
                  <p className="font-sans text-sm text-[#52504C] dark:text-[#C5C3B8] leading-relaxed font-light">
                    {currentSlide.notes}
                  </p>
                </div>
              )}

              {/* Bottom Slide Scrubber */}
              <div className="w-full pt-6 border-t border-[#E8E6E0] dark:border-[#282724] flex items-center justify-between font-mono text-xs text-[#73726E] dark:text-[#9A9890]">
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2 rounded-xs transition-all cursor-pointer ${
                        idx === currentSlideIndex
                          ? 'w-10 bg-[#161616] dark:bg-[#FAF9F5]'
                          : 'w-3 bg-[#D8D6CE] dark:bg-[#33322E] hover:bg-[#73726E]'
                      }`}
                      title={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <span>Press ← / → or Space to advance</span>
              </div>
            </div>
          ) : (
            <div className="my-auto text-center space-y-4 font-mono text-sm text-[#73726E] dark:text-[#9A9890]">
              <p>No document or individual slide breakdowns attached yet.</p>
              {hasDocument && (
                <button
                  onClick={() => setActiveTab('document')}
                  className="px-4 py-2 border border-[#161616] dark:border-[#FAF9F5] text-[#161616] dark:text-[#FAF9F5] rounded-xs hover:bg-[#EAE7DE] cursor-pointer"
                >
                  Open Live Document Reader
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
