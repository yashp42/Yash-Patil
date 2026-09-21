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
