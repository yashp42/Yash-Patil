export type ProductCategory =
  | 'All'
  | 'Consumer AI'
  | 'Growth & Strategy'
  | 'FinTech & Analytics'
  | 'Product Teardowns';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  domain: string;
  summary: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
  tools: string[];
}

export interface ProductCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  competition: string;
  award?: string;
  category: string;
  role: string;
  period: string;
  overview: string;
  theProblem: string;
  marketAndUserInsights: {
    stat: string;
    label: string;
    description: string;
  }[];
  strategicFramework: {
    frameworkName: string;
    summary: string;
    pillars: { title: string; description: string }[];
  };
  productSolutions: {
    phase: string;
    title: string;
    description: string;
    keyDeliverables: string[];
  }[];
  unitEconomicsAndImpact: {
    metric: string;
    label: string;
    detail: string;
    description?: string;
  }[];
  tags: string[];
}

export interface SubstackPost {
  id: string;
  title: string;
  slug?: string;
  link: string;
  pubDate: string;
  formattedDate: string;
  readingTimeMinutes: number;
  excerpt: string;
  contentHtml?: string;
  coverImage?: string;
  tags: string[];
  isFeatured?: boolean;
}

// -------------------------------------------------------------
// Growth.design Style Interactive Teardowns & Decks
// -------------------------------------------------------------

export type CaseStudyFormat = 'interactive_comic' | 'slide_deck';
export type CaseStudyAvailability = 'available' | 'coming_soon' | 'draft';

export interface PsychologyPrinciple {
  name: string; // e.g. "Von Restorff Effect", "Default Bias", "The Zeigarnik Effect"
  definition: string;
  impact?: string;
}

export interface ComicHotspot {
  id: string;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  title: string;
  description: string;
  sentiment?: 'positive' | 'warning' | 'critical' | 'insight';
  impact?: string;
  metricTag?: string;
}

export interface ComicBubble {
  id: string;
  character: 'Yash' | 'User' | 'PM' | 'Founder';
  avatarUrl?: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  type: 'speech' | 'thought' | 'whisper';
  text: string;
}

export interface TeardownSlide {
  id: string;
  stepNumber: number;
  screenTitle: string;
  appStateDescription: string;
  deviceType: 'mobile' | 'desktop';
  screenImageUrl?: string;
  screenMockType?: 'zepto_cart' | 'zepto_checkout' | 'zepto_bill' | 'zepto_tracking' | 'bajaj_loan' | 'bajaj_kyc' | 'custom' | string;
  redesignImageUrl?: string;
  hasBeforeAfter?: boolean;
  beforeAfterLabel?: {
    before: string;
    after: string;
  };
  bubbles?: ComicBubble[];
  hotspots: ComicHotspot[];
  psychologyPrinciple?: PsychologyPrinciple;
  verdictScore?: {
    label: string;
    score: string;
    note: string;
  };
  keyTakeaway?: string;
  psychologyInsight?: string;
}

export interface DeckSlide {
  id: string;
  slideNumber: number;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  contentHighlights: string[];
  metricsGrid?: { label: string; value: string }[];
  frameworkDiagramTitle?: string;
  notes?: string;
}

export interface InteractiveCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  companyLogo?: string;
  format: CaseStudyFormat; // 'interactive_comic' | 'slide_deck'
  availability: CaseStudyAvailability; // 'available' | 'coming_soon' | 'draft'
  coverImage?: string;
  accentColor?: string; // e.g. '#E05338', '#2563EB', '#059669'
  readingTimeMinutes: number;
  slidesCount: number;
  publishedAt: string;
  category: string;
  tags: string[];
  keyMetrics?: { value: string; label: string }[];
  principlesCovered?: string[];
  executiveSummary: string;
  authorRole: string;
  // For interactive comic teardowns:
  slides?: TeardownSlide[];
  // For presentations / decks / PDFs:
  deckSlides?: DeckSlide[];
  downloadDeckUrl?: string;
  deckPdfUrl?: string;
  updatedAt?: string;
}

