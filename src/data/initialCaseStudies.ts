import { InteractiveCaseStudy } from '../types';

export const INITIAL_CASE_STUDIES: InteractiveCaseStudy[] = [
  // 1. DEUTSCHE TELEKOM / PAYZY
  {
    id: 'cs-deutsche-telekom-fintech',
    slug: 'deutsche-telekom-fintech-convergence',
    title: 'Capitalizing on Market Leadership: Deutsche Telekom Telco-Fintech Convergence',
    subtitle: 'A 36-month strategic blueprint establishing MagentaCard as Telekom Germany’s default recurring payment layer.',
    company: 'Deutsche Telekom',
    companyLogo: 'DT',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#E20074',
    readingTimeMinutes: 7,
    slidesCount: 13,
    publishedAt: 'March 2026',
    category: 'FinTech & Telco',
    tags: ['FinTech', 'Telco-Fintech', 'Deutsche Telekom', 'payzy', 'GTM Strategy', 'Unit Economics'],
    keyMetrics: [
      { value: '€1.848B', label: 'Annual Recurring Volume' },
      { value: '10.4x', label: 'LTV / CAC Ratio' },
      { value: '8%', label: 'Target Bill Pay Activation' }
    ],
    principlesCovered: [
      'The Status Quo Bias in German Banking',
      'Additive vs Subtractive Payment Layers',
      'The 90-Second First Value Moment'
    ],
    executiveSummary: 'Telecommunications operators in Europe face a structural stagnation in mobile ARPU. This comprehensive 13-slide strategy presentation outlines how Deutsche Telekom can leverage its 69.8M German mobile subscriber base and 15.2M broadband lines to scale payzy and MagentaCard into a €1.848B annual recurring spend engine without incurring bank-switching friction.',
    authorRole: 'FinTech Product Strategist',
    deckPdfUrl: 'https://drive.google.com/file/d/YOUR_DEUTSCHE_TELEKOM_DRIVE_LINK_HERE/view?usp=sharing',
    downloadDeckUrl: '#',
    deckSlides: [
      {
        id: 'dt-1',
        slideNumber: 1,
        title: 'Capitalizing on Market Leadership to Drive Telco-Fintech Convergence',
        subtitle: 'Global telecom outlook and competitive benchmarking across German carrier fintech strategies.',
        contentHighlights: [
          'Global telecom revenue is projected to rise from $1.15T (2024) to $1.32T (2029) at a modest 2.8% CAGR.',
          'Deutsche Telekom leads the German fixed/broadband market with 15.2M customers (35% share) ahead of O2 (10.1M) and Vodafone (2.4M).',
          'While O2 discontinued financial pilots and Vodafone remains utility-focused (Tink/Adyen bill pay), DT actively scales payzy with a Visa-backed 1% cashback card.'
        ],
        metricsGrid: [
          { label: 'Mobile Subscriber Base', value: '69.8M Customers' },
          { label: 'Fixed Broadband Share', value: '35% (15.2M Lines)' },
          { label: 'FY23 Group Net Profit', value: '€7.9B Adjusted' }
        ],
        notes: 'Market share data benchmarked against Bundesnetzagentur reports and DT segment filings.'
      },
      {
        id: 'dt-2',
        slideNumber: 2,
        title: 'Integrated Ecosystem Built Around Connectivity, Platforms & Services',
        subtitle: 'Deconstructing the €25B+ Germany revenue umbrella and digital customer footprint.',
        contentHighlights: [
          'MeinMagenta app serves 20M+ users as the primary discovery and account management gateway.',
          'MagentaEINS drives convergence with 7.5M+ households combining mobile and fixed-line contracts.',
          'Magenta Moments (1.7M users) and MagentaTV (4.7M users) serve as native customer loyalty and entertainment surfaces to introduce payzy.'
        ],
        metricsGrid: [
          { label: 'MeinMagenta Userbase', value: '20M+ Users' },
          { label: 'MagentaEINS Bundles', value: '7.5M+ Households' },
          { label: 'German Segment Revenue', value: '€25B+ (FY25)' }
        ],
        notes: 'payzy is positioned not as an isolated app, but as the underlying ledger for the entire DT loyalty apparatus.'
      },
      {
        id: 'dt-3',
        slideNumber: 3,
        title: 'Germany’s Financial & Usage Landscape: Where Money Flows',
        subtitle: 'Analyzing German payment psychology, Girocard entrenchment, and target demographic cohorts.',
        contentHighlights: [
          'German banking is dominated by public savings banks (~400 Sparkassen) and member-owned Volksbanken with high consumer inertia.',
          'Card payment share has grown to 45%, yet cash still represents 35-38% of retail point-of-sale volume.',
          'Identified 4 distinct consumer cohorts: Core Telekom loyalists, Value-Seeking Young Professionals, Convenience-Driven Users, and Digital-First Neobank switchers.'
        ],
        metricsGrid: [
          { label: 'Card Payment Share', value: '45% of Volume' },
          { label: 'Travel Propensity', value: '64-74% Active (~€108B)' },
          { label: 'Gen Z Trip Frequency', value: '3.4 Trips / Year' }
        ],
        notes: 'Empirical research indicates German consumers adopt fintech strictly when price value (β=0.424) and performance expectancy (β=0.309) are visible.'
      },
      {
        id: 'dt-4',
        slideNumber: 4,
        title: 'Identifying White Space in a Crowded FinTech Market',
        subtitle: 'Competitive benchmarking against N26, DKB, American Express, and Wise.',
        contentHighlights: [
          'N26 dominates the youth "Metal" lifestyle segment but faces regulatory account caps.',
          'DKB captures salary accounts via free worldwide ATM access, while Amex leads premium travel membership rewards.',
          'White space opportunity: A context-driven, additive payment layer dedicated to recurring household and utility spend.'
        ],
        metricsGrid: [
          { label: 'N26 Strategy', value: 'Metal & Lifestyle Perks' },
          { label: 'DKB Advantage', value: 'Active Salary Banking' },
          { label: 'Amex Model', value: 'Membership Rewards King' }
        ],
        notes: 'Telekom should NOT compete for the primary salary checking account, which suffers from massive status-quo bias.'
      },
      {
        id: 'dt-5',
        slideNumber: 5,
        title: 'Analyzing Critical Barriers to MagentaCard Adoption & Active Engagement',
        subtitle: 'The 3 core friction mechanisms: Marketing limitations, onboarding barriers, and weak differentiation.',
        contentHighlights: [
          'R1 (Marketing): €19B+ annual network CapEx sidelining fintech customer acquisition budgets; marketing siloed inside MeinMagenta.',
          'R2 (Onboarding): Mandatory app-to-app handoff between MeinMagenta and payzy triggers heavy funnel drop-off; friction from live Video-Ident.',
          'R3 (Differentiation): Virtual Visa rejected at cash/Girocard-only German retailers; 1% coin rewards perceived as inferior to cash discounts.'
        ],
        metricsGrid: [
          { label: 'Network CapEx Priority', value: '€19B+ Fiber/5G' },
          { label: 'Onboarding Barrier', value: 'Mandatory Video-Ident' },
          { label: 'Merchant Coverage Gap', value: 'Girocard Exclusivity' }
        ],
        notes: 'Root cause analysis reveals that asking users to abandon their Sparkasse/DKB salary account creates an immediate adoption wall.'
      },
      {
        id: 'dt-6',
        slideNumber: 6,
        title: 'Proposed Product Solution & Integrated Ecosystem Architecture',
        subtitle: 'Separating discovery in MeinMagenta from bank-grade execution in payzy.',
        contentHighlights: [
          'MeinMagenta functions as the Discovery & Control surface (spending overview, savings alerts, service subscriptions, and coin rewards).',
          'payzy operates as the regulated financial execution engine (secure KYC, digital wallet, transaction ledger, and BNPL repayments).',
          'MagentaCard acts as the default recurring spend card for household bills, subscriptions, grocery delivery, and public transit.'
        ],
        metricsGrid: [
          { label: 'Surface Split', value: 'Discovery vs Regulated Ops' },
          { label: 'Compliance Boundary', value: 'GDPR & BaFin Firewalled' },
          { label: 'Primary Use Case', value: 'Recurring Life Spend' }
        ],
        notes: 'This structural separation keeps telecom apps lightweight while ensuring bank-grade regulatory compliance.'
      },
      {
        id: 'dt-7',
        slideNumber: 7,
        title: 'Strategic Repositioning: Establishing MagentaCard as Default Payment Layer',
        subtitle: 'Transitioning from a generic cashback competitor to a context-driven recurring spend utility.',
        contentHighlights: [
          'Shift FROM: Generic cashback card fighting traditional banks for primary account status (guaranteed to fail).',
          'Shift TO: Context-driven, additive payment layer deeply rooted in Telekom subscriptions, streaming bundles, and utility bills.',
          'Distribution moat: Bypassing expensive external CAC by utilizing 30-35% mobile and 40-45% broadband market share touchpoints.'
        ],
        metricsGrid: [
          { label: 'Mobile Market Share', value: '30-35%' },
          { label: 'Broadband Market Share', value: '40-45%' },
          { label: 'Direct Cost Reduction', value: 'Coins directly offset bills' }
        ],
        notes: 'Layer 3 Value Proposition: Coins earned directly discount the next monthly Telekom billing statement.'
      },
      {
        id: 'dt-8',
        slideNumber: 8,
        title: 'Operationalizing the Ecosystem: Hybrid Architecture & Flywheel Mechanics',
        subtitle: 'The self-reinforcing, closed-loop value flywheel driven by recurring bill ownership.',
        contentHighlights: [
          'Entry Node: First bill payment incentivized with bonus coins, bridging passive awareness to active usage in under 90 seconds.',
          'Action & Reward: Bills executed seamlessly via MagentaCard, instantly displaying visible monthly savings.',
          'Return & Evolve: Coins redeemed for high-margin Telekom data passes and Moments partner vouchers, driving upgrade to MagentaEINS.'
        ],
        metricsGrid: [
          { label: 'Trigger', value: 'Upcoming Recurring Bill' },
          { label: 'Action', value: '1-Tap MagentaCard AutoPay' },
          { label: 'Reward Loop', value: 'Closed-Loop Bill Offsets' }
        ],
        notes: 'Positioning matrix shows DT has unique defensibility: regulated trust combined with contextual bill ownership.'
      },
      {
        id: 'dt-9',
        slideNumber: 9,
        title: 'Magenta Wallet in MeinMagenta: UI Overview & User Experience',
        subtitle: 'Interface teardown of home screen balance, subscription management, and Moments partner perks.',
        contentHighlights: [
          'Home Screen displays MagentaCoins balance (€12.40 equivalent) alongside active mobile and fiber plans.',
          'Integrated Plan & Subscription drawer enables 1-tap bill settlement and 500 MGC referral rewards.',
          'Moments tab surfaces time-sensitive perks: MagentaTV + Netflix bundle, Spotify 3 months free, and 2x travel coins.'
        ],
        metricsGrid: [
          { label: 'Active Plan Integration', value: 'Fiber 250 + Unlimited' },
          { label: 'Moments Partnerships', value: 'Spotify, Amazon, Lufthansa' },
          { label: 'Referral Incentive', value: '500 MGC / Onboarding' }
        ],
        notes: 'Design philosophy: Embed financial utility into daily network status checks.'
      },
      {
        id: 'dt-10',
        slideNumber: 10,
        title: 'Magenta AI & Services Screen: Proactive Bill Optimization',
        subtitle: 'Proactive AI suggestions, subscription bundling, and household family management.',
        contentHighlights: [
          'Magenta AI analyzes usage patterns: "Based on your roaming habits, switching to MagentaEINS saves €8/month".',
          'Subscription Bundling detector flags overlapping streaming services (Spotify, Netflix, iCloud) and recommends Magenta Hub.',
          'Household Family Group allows the primary bill payer to manage and track family members under a single consolidated plan.'
        ],
        metricsGrid: [
          { label: 'Proactive Bill Savings', value: '€8 - €12 / Month' },
          { label: 'Predictive Reminders', value: '+50 Coins for AutoPay' },
          { label: 'Family Group Hub', value: 'Multi-member management' }
        ],
        notes: 'Transforms monthly utility anxiety into proactive financial peace of mind.'
      },
      {
        id: 'dt-11',
        slideNumber: 11,
        title: 'From Onboarding to Ownership: 36-Month Go-To-Market Roadmap',
        subtitle: 'A phased acquisition, engagement, and retention timeline for German national rollout.',
        contentHighlights: [
          'Phase 1 (Months 1-6): Acquire & Activate through 1-click SIM-based auto-fill and in-app banners targeting 18-30 year olds.',
          'Phase 2 (Months 7-18): Engage & Monetize via gamified bill-pay streaks, personalized loyalty, and ARPU expansion.',
          'Phase 3 (Months 19-36): Expand & Retain with tiered loyalty (Silver/Gold), savings pots, P2P transfers, and merchant partnerships.'
        ],
        metricsGrid: [
          { label: 'Target Demographic', value: '18-30 Digitally Native' },
          { label: 'Phase 1 Focus', value: 'Drop-off Minimization' },
          { label: 'Phase 3 Metric', value: '90-Day Retention >35%' }
        ],
        notes: 'Emphasizes moving from a transactional tool to a daily financial habit loop.'
      },
      {
        id: 'dt-12',
        slideNumber: 12,
        title: 'Recurring Spend Engine Driving €1.848B Volume with 10.4x Unit Economics',
        subtitle: 'North star metric, conversion funnel, CAC/LTV calculations, and success scorecard.',
        contentHighlights: [
          'North Star: Monthly Recurring Carded Spend Per Active User (€192.50 across 800K activated users).',
          'Unit Economics: Total CAC of €7 (€3 signup + €2 KYC + €2 nudges) against an LTV of €73 (36-month lifespan at €2.05 net monthly contribution).',
          'LTV/CAC ratio reaches an exceptional 10.4x with a rapid 3.9-month payback period.'
        ],
        metricsGrid: [
          { label: 'Total Addressable Reach', value: '10M Exposed Users' },
          { label: 'Activated User Base', value: '800K Users (8%)' },
          { label: 'Annual Recurring Volume', value: '€1.848 Billion' }
        ],
        notes: 'Recurring payment adoption (55% share of card spend) represents the single biggest driver of long-term unit economics.'
      },
      {
        id: 'dt-13',
        slideNumber: 13,
        title: 'Risks & Mitigation Strategy: Navigating Feature Fatigue & Compliance',
        subtitle: 'Comprehensive 6-point risk matrix addressing GDPR, cashback fatigue, and merchant gaps.',
        contentHighlights: [
          'Privacy & GDPR: Strict operational separation between MeinMagenta (telecom) and payzy (banking) with clear opt-in consent layers.',
          'Feature Overload: Enforcing a "Rule of Three" UI showing only Next Best Action, Current Savings, and Plan Status.',
          'Cashback Fatigue & Merchant Gaps: Shifting from one-time promos to utility bill deductions and partnering with essential daily merchants.'
        ],
        metricsGrid: [
          { label: 'Privacy Defense', value: 'Firewalled Data Architecture' },
          { label: 'UI Simplicity', value: 'Rule of Three Interface' },
          { label: 'Reward Durability', value: 'Telecom Bill Deductions' }
        ],
        notes: 'Risk KPIs establish continuous tracking of declined transactions, time-to-first-spend, and card maintenance expense.'
      }
    ]
  },

  // 2. EY TECHATHON 6.0 / AFTERCARE AI
  {
    id: 'cs-ey-techathon-aftercare-ai',
    slug: 'ey-techathon-aftercare-ai-bs6-telematics',
    title: 'AfterCare AI: Pivoting from Warranty Volatility to Predictive Reliability in BS6 Fleets',
    subtitle: 'Multi-agent after-treatment degradation forecasting (DPF, SCR, Oil) saving commercial vehicle OEMs ₹1.6k Cr in warranty provisions.',
    company: 'EY Techathon 6.0',
    companyLogo: 'EY',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#FFE600',
    readingTimeMinutes: 6,
    slidesCount: 7,
    publishedAt: 'December 2025',
    category: 'Automotive & Agentic AI',
    tags: ['Automotive AI', 'BS6 Aftertreatment', 'Predictive Maintenance', 'LangChain', 'Multi-Agent', 'Warranty Optimization'],
    keyMetrics: [
      { value: '15–30 Days', label: 'Failure Prediction Window' },
      { value: '82%+', label: 'RUL Prediction Accuracy' },
      { value: '₹2.25L → ₹12K', label: 'Breakdown Cost Optimization' }
    ],
    principlesCovered: [
      'The Component Failure Cascade Law',
      'Confidence-Weighted Root Cause Attribution',
      'Autonomous Multi-Agent Orchestration'
    ],
    executiveSummary: 'India’s transition from BS4 to BS6 commercial emission standards introduced complex after-treatment systems (DPF, SCR, DEF dosing) with 20+ interacting components. This EY Techathon 6.0 presentation details AfterCare AI—a multi-agent system combining continuous telematics telemetry with deterministic cascade evaluation and LangChain LLM diagnostics to predict failures 15-30 days in advance.',
    authorRole: 'Product & AI Systems Architect',
    deckPdfUrl: 'https://drive.google.com/file/d/YOUR_EY_TECHATHON_DRIVE_LINK_HERE/view?usp=sharing',
    downloadDeckUrl: '#',
    deckSlides: [
      {
        id: 'ey-1',
        slideNumber: 1,
        title: 'Executive Submission: AfterCare AI for Heavy Commercial Vehicles',
        subtitle: 'Transforming BS6 after-treatment volatility into predictive fleet reliability.',
        contentHighlights: [
          'Created for EY Techathon 6.0 detailed competition submission (Automobile track).',
          'Architected by IIT Kharagpur team: Akshat Tushar Surwase, Aditya Kariwal, Yash Patil, Rishit Raj Singh, and Arman Chaturvedi.',
          'Focuses on Indian commercial fleets operating under stringent BS6 emission norms where unexpected exhaust failures cause catastrophic downtime.'
        ],
        metricsGrid: [
          { label: 'Competition', value: 'EY Techathon 6.0' },
          { label: 'Domain', value: 'Automotive IoT & Fleet AI' },
          { label: 'Institution', value: 'IIT Kharagpur' }
        ],
        notes: 'Combines full-stack telematics ingestion with production-grade agentic LLM diagnosis.'
      },
      {
        id: 'ey-2',
        slideNumber: 2,
        title: 'Team Composition & Engineering Ownership',
        subtitle: 'Multi-disciplinary IIT Kharagpur team spanning product management, ML research, and systems engineering.',
        contentHighlights: [
          'Akshat Tushar Surwase: Full-stack web developer and AI systems developer.',
          'Aditya Kariwal: ML Researcher and Telematics Data Analyst.',
          'Yash Patil: Product Management, Strategy & Automotive Domain Consulting.',
          'Rishit Raj Singh & Arman Chaturvedi: Data Analysts, AI Engineers, and Diagnostic Researchers.'
        ],
        metricsGrid: [
          { label: 'Product Lead', value: 'Yash Patil' },
          { label: 'ML Architecture', value: 'Aditya & Arman' },
          { label: 'Platform Dev', value: 'Akshat & Rishit' }
        ],
        notes: 'Team AKSHATSURWASE representing IIT Kharagpur in Problem Statement III (Automobile).'
      },
      {
        id: 'ey-3',
        slideNumber: 3,
        title: 'Executive Summary: The BS6 Structural Crisis & Our Breakthrough',
        subtitle: 'Deconstructing the ₹1.6k Cr OEM warranty provision crisis and after-treatment failure spirals.',
        contentHighlights: [
          'The Crisis: 20+ components in BS6 (vs 3-4 in BS4); 90%+ of failures detected only after roadside breakdown.',
          'Economic Toll: ₹2.5L cost per replacement incident leading to 3-5 days of immediate downtime and ₹45,000/day truck revenue erosion.',
          'Our Breakthrough: Predicts degradation 15-30 days ahead (82%+ accuracy) with confidence-weighted root cause attribution, converting emergency tow-ins into scheduled depot service.'
        ],
        metricsGrid: [
          { label: 'Annual OEM Warranty Loss', value: '₹1.6k Crore' },
          { label: 'Annual Downtime / Truck', value: '12 Unplanned Days' },
          { label: 'Cost Efficiency Gain', value: 'Up to 19x (₹2.25L → ₹12K)' }
        ],
        notes: 'Transformational impact: 30-45% fewer invalid warranty payouts for OEMs and 60-70% breakdown reduction for fleet operators.'
      },
      {
        id: 'ey-4',
        slideNumber: 4,
        title: 'Problem Statement & The Diagnostic Blindness Gap',
        subtitle: 'Why single-parameter OBD alerts fail and how the proposed data flow solves forensic attribution.',
        contentHighlights: [
          'The Detection Gap: Standard OBD-II fault codes trigger only 48-72 hours before failure, missing the 15-30 day preventive intervention window.',
          'Diagnostic Blindness: OEMs lack forensic proof to distinguish between manufacturing defects and operator misuse (e.g. spurious DEF fluid).',
          'Reactive Model Strains: Overloads dealer workshop bays with emergency repairs and delays supplier quality feedback loops by 6+ months.'
        ],
        metricsGrid: [
          { label: 'Detection Lead Time', value: '48 hrs (Old) → 30 Days (New)' },
          { label: 'Component Incident Cost', value: '₹1.5L – ₹2.5L / Breakdown' },
          { label: 'Legal Attribution', value: 'Structured Forensic Evidence' }
        ],
        notes: 'Data pipeline moves from continuous telematics ingestion → degradation trajectory modeling → decision synthesis → closed-loop dealer feedback.'
      },
      {
        id: 'ey-5',
        slideNumber: 5,
        title: 'Methodology & Technologies Architecture',
        subtitle: 'Detailed breakdown of ML models, agentic orchestration, and full-stack tech stack.',
        contentHighlights: [
          'Predictive Intelligence: Component-wise RUL forecasting for Diesel Particulate Filter (DPF), Selective Catalytic Reduction (SCR), and Engine Oil.',
          'Agentic Diagnostics: Master + Diagnostic LangChain agents convert predictive telemetry signals into root-cause mechanical reasoning.',
          'Technology Stack: Ollama local LLMs, Sarvam Indic Text-to-Speech for vernacular drivers, Redis + BullMQ for real-time queuing, and MongoDB for audit logs.'
        ],
        metricsGrid: [
          { label: 'ML Forecasting', value: 'DPF, SCR, Oil RUL Models' },
          { label: 'Agentic Framework', value: 'LangChain Multi-Agent' },
          { label: 'Driver Interface', value: 'Sarvam Indic Voice TTS' }
        ],
        notes: 'Structured case management features User and Entity Behavior Analytics (UEBA) auditability for warranty dispute defense.'
      },
      {
        id: 'ey-6',
        slideNumber: 6,
        title: 'System Architecture, Feasibility & 3-Phase Implementation Roadmap',
        subtitle: 'End-to-end layered topology from ECU telemetry to workshop technician workbench.',
        contentHighlights: [
          'Vehicle & Cloud Layer: ECU telematics unit feeds time-series database through secure API gateway with feature engineering.',
          'Hybrid Prediction Layer: Rule-based cascade engine flags secondary component failures caused by upstream sensor errors.',
          'Implementation Roadmap: Phase 1 (RUL models & anomaly logging), Phase 2 (Master severity agent & automated case scheduling), Phase 3 (Advanced fleet risk dashboards).'
        ],
        metricsGrid: [
          { label: 'Architecture', value: 'Event-Driven Microservices' },
          { label: 'Access Control', value: 'RBAC + Encrypted API' },
          { label: 'Security Standard', value: 'UEBA Agent Auditing' }
        ],
        notes: 'Separation of deterministic threshold rules from probabilistic agentic reasoning guarantees zero catastrophic hallucinations.'
      },
      {
        id: 'ey-7',
        slideNumber: 7,
        title: 'Working Wireframes & Multi-Stakeholder UI Suite',
        subtitle: 'Fleet Owner Dashboard, Service Center RCA Workbench, and Driver Voice Assistant.',
        contentHighlights: [
          'Fleet Owner Dashboard: Real-time health scores across 100+ trucks with color-coded RUL risk indicators and geo-tracking.',
          'Service Center View: Root Cause Analysis (RCA) workbench displaying confidence-weighted attribution and pre-ordered replacement parts.',
          'Driver & Technician Chatbot: Interactive voice-enabled conversational assistant supporting Hindi/regional speech for roadside troubleshooting.'
        ],
        metricsGrid: [
          { label: 'Dashboard Surfaces', value: 'Fleet, Service Center, Tech' },
          { label: 'Voice Assistant', value: 'Bidirectional Audio Diagnostic' },
          { label: 'Part Orchestration', value: 'Automated Dealer Dispatch' }
        ],
        notes: 'Tested against real fleet operational workflows to ensure minimum technician friction.'
      }
    ]
  },

  // 3. CAPITAL ONE LAUNCHPAD 2025 / FASALSETU.AI
  {
    id: 'cs-capital-one-fasalsetu-ai',
    slug: 'capital-one-fasalsetu-ai-agentic-agritech',
    title: 'Fasalsetu.ai: Profile-Aware Agentic AI for Smarter Hyperlocal Farming Decisions',
    subtitle: 'Turning fragmented agricultural data into transparent, rule-first deterministic decisions with government-first provenance.',
    company: 'Capital One Launchpad',
    companyLogo: 'C1',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#004B87',
    readingTimeMinutes: 7,
    slidesCount: 11,
    publishedAt: 'January 2025',
    category: 'Agritech & Agentic AI',
    tags: ['Agentic AI', 'Agritech', 'Capital One Hackathon', 'Deterministic Rules', 'LangChain', 'Multilingual'],
    keyMetrics: [
      { value: '40% Workforce', label: 'Indian Population Impact' },
      { value: '100%', label: 'Deterministic Rule Guardrails' },
      { value: '0 Hallucination', label: 'Safety-Critical Design' }
    ],
    principlesCovered: [
      'The Rules-First Agentic Principle',
      'Government-First Data Provenance',
      'The Blank-Box User Interface Dilemma'
    ],
    executiveSummary: 'Agriculture employs 40% of India’s workforce and contributes 18% to GDP, yet smallholder farmers struggle with fragmented weather, mandi prices, and soil data. Built for Capital One Launchpad 2025, Fasalsetu.ai introduces a profile-aware, deterministic agentic architecture that replaces generic LLM advice with verifiable, government-cited farming decisions.',
    authorRole: 'Product & System Architect',
    deckPdfUrl: 'https://drive.google.com/file/d/YOUR_CAPITAL_ONE_DRIVE_LINK_HERE/view?usp=sharing',
    downloadDeckUrl: '#',
    deckSlides: [
      {
        id: 'c1-1',
        slideNumber: 1,
        title: 'Fasalsetu.ai: Capital One Launchpad 2025 Submission',
        subtitle: 'Exploring and building agentic AI solutions for high-impact societal challenges in agriculture.',
        contentHighlights: [
          'Developed for Capital One Launchpad 2025 Hackathon by Akshath Tushar Surwase, Aditya Kariwal, Rishit Singh, and Yash Patil.',
          'Core thesis: Turn noisy, fragmented agricultural data into transparent, trusted, and farmer-friendly guidance.',
          'Designed to support smallholders facing climate volatility, unseasonal rains, and fluctuating mandi prices.'
        ],
        metricsGrid: [
          { label: 'Event', value: 'Capital One Launchpad 2025' },
          { label: 'Domain', value: 'Societal Impact / Agritech' },
          { label: 'Product Lead', value: 'Yash Patil' }
        ],
        notes: 'Combines conversational ease with mathematical determinism.'
      },
      {
        id: 'c1-2',
        slideNumber: 2,
        title: 'Project Introduction & Vision Statement',
        subtitle: 'The mission to make complex agronomy decisions transparent and explainable.',
        contentHighlights: [
          'Vision: Transforming fragmented agricultural telemetry into verified, farmer-centric decision trees.',
          'Focus on crop lifecycle: From pre-sowing seed selection to irrigation scheduling, pest management, and post-harvest mandi selling.',
          'Eliminating reliance on exploitative local middlemen through democratized market intelligence.'
        ],
        metricsGrid: [
          { label: 'Target Sector', value: 'Small & Marginal Farmers' },
          { label: 'Approach', value: 'Agentic Tool Orchestration' },
          { label: 'Output Style', value: 'Multi-turn Vernacular' }
        ],
        notes: 'Addresses the fundamental trust deficit in rural AI applications.'
      },
      {
        id: 'c1-3',
        slideNumber: 3,
        title: 'Problem Landscape: Why Existing Agritech Solutions Fall Short',
        subtitle: 'The 4 systemic barriers: Data fragmentation, generic advice, AI hallucinations, and digital illiteracy.',
        contentHighlights: [
          'Indian Agriculture reality: Employs 40% of workforce, contributes 18% to national GDP.',
          'Crucial daily dilemmas: "When should I irrigate?", "Will next week\'s heatwave destroy my wheat?", "Should I harvest today or hold for better mandi rates?".',
          'Existing AI flaws: Pure LLMs hallucinate pesticide dosages with dangerous consequences; traditional apps require high digital literacy.'
        ],
        metricsGrid: [
          { label: 'Workforce Share', value: '40% of India (~150M Farmers)' },
          { label: 'GDP Contribution', value: '18% National Value' },
          { label: 'Risk Factor', value: 'Zero Tolerance for Hallucinations' }
        ],
        notes: 'Pesticide recommendations require 100% adherence to Central Insecticides Board & Registration Committee (CIBRC) guidelines.'
      },
      {
        id: 'c1-4',
        slideNumber: 4,
        title: 'Solution Overview: Dual Modes of Operation & Core Principles',
        subtitle: 'Public Advisor for general agronomy vs Personal Advisor (My Farm) for profile-aware decisions.',
        contentHighlights: [
          'Mode 1 (Public Advisor): District-level agricultural intelligence for any farmer (crop calendars, soil norms, mandi trends, government schemes).',
          'Mode 2 (Personal Advisor): Profile-aware assistant tracking sowing date, crop stage, acreage, soil test parameters, and historical actions.',
          'Core Pillars: Verifiable (government citations), Deterministic (rules-first engine), Localized (regional agronomy), Farmer-Friendly (voice in native dialect).'
        ],
        metricsGrid: [
          { label: 'Public Mode', value: 'Open District Intelligence' },
          { label: 'Personal Mode', value: 'My Farm State Engine' },
          { label: 'Input Modalities', value: 'Voice, Vernacular Text, Visual' }
        ],
        notes: 'Farmer profiles are stored securely in MongoDB and synchronized with every query.'
      },
      {
        id: 'c1-5',
        slideNumber: 5,
        title: 'Technical Architecture & End-to-End Orchestration Flow',
        subtitle: 'Multi-tier decoupled pipeline: React → Node.js Gateway → LLM Planner → Deterministic Rules Engine → LLM Formatter.',
        contentHighlights: [
          'Step 1 (LLM-1 Planner): Converts unstructured farmer query into a strict JSON plan with identified intent, required tool calls, and missing parameters.',
          'Step 2 (Domain Tools & APIs): Fetches live weather (IMD), mandi prices (Agmarknet), and ICAR advisory docs.',
          'Step 3 (Decision Engine - FastAPI): Executes deterministic rules (e.g. if rainfall in next 48h ≥ 10mm ⇒ DO NOT IRRIGATE).',
          'Step 4 (LLM-2 Formatter): Translates structured JSON decision into empathetic, localized audio/text response without altering core facts.'
        ],
        metricsGrid: [
          { label: 'Frontend', value: 'React + Firebase OTP' },
          { label: 'Planner & Formatter', value: 'LangChain + LLM-1/LLM-2' },
          { label: 'Decision Engine', value: 'FastAPI Deterministic Rules' }
        ],
        notes: 'Resilience guarantee: If live APIs fail, the engine falls back to pre-compiled regional static packs with clear provenance disclosure.'
      },
      {
        id: 'c1-6',
        slideNumber: 6,
        title: 'System Methodology & Architecture Flowchart',
        subtitle: 'Technical topology depicting microservice communication, vector store RAG, and cache layer.',
        contentHighlights: [
          'Client communicates via WebSocket and HTTPS with Express orchestration server.',
          'Decision engine links directly with Milvus & Pinecone vector stores containing ICAR packages of practice.',
          'Provenance confidence scoring assigns a trustworthiness weight to every generated insight based on source freshness.'
        ],
        metricsGrid: [
          { label: 'Vector Stores', value: 'Pinecone & Milvus' },
          { label: 'Data Source Validation', value: 'IMD, Agmarknet, ICAR' },
          { label: 'Audit Trail', value: 'Full Reproducibility Log' }
        ],
        notes: 'Every recommendation is completely reproducible and testable by regulators.'
      },
      {
        id: 'c1-7',
        slideNumber: 7,
        title: 'Live Product Demo Overview & Core Interfaces',
        subtitle: 'Teardown of Home Page, OTP Login, Conversational Assistant, and Virtual Crop Simulator.',
        contentHighlights: [
          'Clean, minimalist landing page with quick action chips ("What should I plant this season?", "Market prices for my crops").',
          'Secure phone-number authentication using Firebase OTP for frictionless rural login.',
          'Virtual Crop Simulator: Interactive visual field modeling wheat/oat growth stages and moisture levels in real time.'
        ],
        metricsGrid: [
          { label: 'Auth Flow', value: 'Phone OTP (< 10 seconds)' },
          { label: 'Simulated Crops', value: 'Wheat, Rice, Oats, Mustard' },
          { label: 'Interactive Assistant', value: 'Voice + Suggested Prompts' }
        ],
        notes: 'Designed with ultra-large touch targets and high-contrast visuals for outdoor sunlight visibility.'
      },
      {
        id: 'c1-8',
        slideNumber: 8,
        title: 'Crop Dashboard & Chat Response Deep Dive',
        subtitle: 'Detailed breakdown of the agronomic telemetry dashboard and conversational outputs.',
        contentHighlights: [
          'Dashboard tracks Harvest Countdown (15 days remaining), Growth Progress (97%), 5-Day Weather Forecast, and Soil Nitrogen status.',
          'Conversational assistant delivers clear, step-by-step pest control recommendations (stem borers in oats/rice) with exact dosage ratios.',
          'Inline source citations let farmers inspect which ICAR or state university bulletin authorized the advice.'
        ],
        metricsGrid: [
          { label: 'Growth Tracking', value: 'Stage-wise Milestone Bar' },
          { label: 'Advisory Format', value: 'Chemical + Bio-control options' },
          { label: 'Mobile Responsiveness', value: 'Full viewport optimization' }
        ],
        notes: 'Provides both chemical and organic bio-control alternatives for sustainable farming.'
      },
      {
        id: 'c1-9',
        slideNumber: 9,
        title: 'Innovation Highlights & Tri-Partite Societal Impact',
        subtitle: 'Quantifying value creation across Farmers, the Agricultural Ecosystem, and Society.',
        contentHighlights: [
          'Innovation 1: Rules-First + LLM Orchestration decoupling natural language understanding from critical agronomic logic.',
          'Innovation 2: Government-First Provenance ensuring all data references official state registries (IMD, Agmarknet, WDRA).',
          'Societal Impact: Reduces unnecessary chemical fertilizer spend by 22%, mitigates crop loss during extreme weather, and advances food security.'
        ],
        metricsGrid: [
          { label: 'Input Cost Reduction', value: '18–25% via Precise Timing' },
          { label: 'Hallucination Mitigation', value: '100% Rules Guardrails' },
          { label: 'Ecosystem Benefits', value: 'Empowers FPOs and Ext. Officers' }
        ],
        notes: 'Architecture scales across new crops and states simply by appending JSON rule packets without model retraining.'
      },
      {
        id: 'c1-10',
        slideNumber: 10,
        title: 'Limitations & Strategic Mitigation Framework',
        subtitle: 'Overcoming rural constraints: Offline access, continuous feedback, image diagnosis, and prototype scope.',
        contentHighlights: [
          'Limitation 1 (Offline connectivity): Mitigated by downloadable offline district packs and SMS/IVR fallback alerts.',
          'Limitation 2 (Static thresholds): Mitigated by post-harvest outcome feedback loops and dynamic confidence re-weighting.',
          'Limitation 3 (Lack of image input): Roadmap adds vision-to-intent pipeline integrating PlantVillage and Plantix disease datasets.',
          'Limitation 4 (Dataset coverage): Expanding open API adapters for Soil Health Cards and state agricultural universities.'
        ],
        metricsGrid: [
          { label: 'Offline Resilience', value: 'Cached SQLite Data Packs' },
          { label: 'Vision Integration', value: 'Plant Disease Classifier' },
          { label: 'Feedback Loop', value: 'Farmer Outcome Validation' }
        ],
        notes: 'Presents a pragmatic, production-grade roadmap from hackathon prototype to national deployment.'
      },
      {
        id: 'c1-11',
        slideNumber: 11,
        title: 'Closing Vision & Acknowledgments',
        subtitle: 'Empowering Indian farmers through explainable, trustworthy artificial intelligence.',
        contentHighlights: [
          'Closing summary emphasizing ethical, transparent technology for grassroots prosperity.',
          'Thank you to Capital One Launchpad evaluators, mentors, and agricultural research advisors.',
          'Team contact details and open-source repository documentation.'
        ],
        metricsGrid: [
          { label: 'Outcome', value: 'Finalist / Capital One Launchpad' },
          { label: 'Core Philosophy', value: 'Technology in Service of Land' }
        ],
        notes: 'Final slide concluding presentation.'
      }
    ]
  },

  // 4. BIKAJI FOODS / KSHITIJ 2025
  {
    id: 'cs-bikaji-foods-global-expansion',
    slug: 'bikaji-foods-european-expansion-industry-5',
    title: 'Bikaji Foods: Expanding India’s Favourite Snacking Brand into European & Luxury Markets',
    subtitle: 'An Industry 5.0 and supply chain transformation strategy for entering the European bread market while harmonizing quick commerce.',
    company: 'Bikaji Foods International',
    companyLogo: 'BK',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#D32F2F',
    readingTimeMinutes: 8,
    slidesCount: 15,
    publishedAt: 'February 2025',
    category: 'FMCG & Supply Chain',
    tags: ['Bikaji Foods', 'FMCG Strategy', 'Industry 5.0', 'Quick Commerce', 'Supply Chain', 'Global Expansion'],
    keyMetrics: [
      { value: '9% Share', label: 'Indian Ethnic Snack Position' },
      { value: '30% YoY', label: 'Revenue Growth Target' },
      { value: '85%', label: 'Target Production Efficiency' }
    ],
    principlesCovered: [
      'Cobot-Assisted Traditional Recipe Scaling',
      'The Omnichannel Quick-Commerce Harmonization Law',
      'Cross-Cultural Flavor Fusion Architecture'
    ],
    executiveSummary: 'Bikaji Foods International is the second fastest-growing organized ethnic snacks company in India with a 9% market share. Presented at Kshitij 2025 by Team_16, this 15-slide master strategy outlines how Bikaji can leverage Industry 5.0 collaborative robotics and AI supply chain digital twins to penetrate the €120B European bakery market while optimizing domestic quick-commerce channels.',
    authorRole: 'Supply Chain & Brand Strategist',
    deckPdfUrl: 'https://drive.google.com/file/d/YOUR_BIKAJI_DRIVE_LINK_HERE/view?usp=sharing',
    downloadDeckUrl: '#',
    deckSlides: [
      {
        id: 'bk-1',
        slideNumber: 1,
        title: 'Stock of the Day: Bikaji Foods International Ltd',
        subtitle: 'Financial media spotlight on India’s fastest-growing ethnic snacking giant.',
        contentHighlights: [
          'Broadcast analysis highlighting Bikaji’s rapid market cap appreciation and quarterly earnings momentum.',
          'Transitioning from a regional Rajasthani powerhouse to a national and international FMCG conglomerate.',
          'Key investment thesis: Strong ethnic snack moat coupled with bold global expansion initiatives.'
        ],
        metricsGrid: [
          { label: 'Industry Rank', value: '3rd Largest in Ethnic Snacks' },
          { label: 'Growth Velocity', value: '2nd Fastest Growing in India' }
        ],
        notes: 'Televised market commentary establishing the business backdrop.'
      },
      {
        id: 'bk-2',
        slideNumber: 2,
        title: 'India’s Favourite Snacking Partner: The Bikaji Brand Moat',
        subtitle: 'Team_16 submission for Kshitij 2025 Business Club Case Challenge.',
        contentHighlights: [
          'High-impact celebrity endorsement: Veteran superstar Amitabh Bachchan ("Amitji Loves Bikaji").',
          'Flagship product portfolio: Bikaneri Bhujia, Gol-Matol Rasgulla, Sub-Kuch, and Kaju Katli.',
          'Brand ethos: Marrying royal Rajasthani heritage with modern FMCG manufacturing standards.'
        ],
        metricsGrid: [
          { label: 'Brand Ambassador', value: 'Amitabh Bachchan' },
          { label: 'Competition', value: 'Kshitij 2025 Business Club' },
          { label: 'Team', value: 'Team_16 (Yash Patil)' }
        ],
        notes: 'Celebrity brand association lifts spontaneous recall to over 78% in western and northern states.'
      },
      {
        id: 'bk-3',
        slideNumber: 3,
        title: 'Bikaji Overview: Market Position, Acquisitions & Core Values',
        subtitle: 'Forensic breakdown of revenues, market share, and aggressive M&A strategy.',
        contentHighlights: [
          'Market Share: Holds 9% of the Indian ethnic snacks market and 6% of the organized Indian sweets market.',
          'Strategic Acquisitions: Stakes in Ariba Foods (55%), The Hazelnut Factory (53.02% café luxury), and Bhujialalji (49%).',
          'Scale: 300+ products, 270,000+ direct retail outlets, with core dominance expanding from Rajasthan, Assam, and Bihar across India.'
        ],
        metricsGrid: [
          { label: 'Ethnic Snack Share', value: '9% (vs Haldiram 38.5%)' },
          { label: 'Sweets Market Share', value: '6% (Organized Segment)' },
          { label: 'Retail Outlets', value: '270,000+ Direct Touchpoints' }
        ],
        notes: 'M&A in The Hazelnut Factory provides the exact high-end bakery blueprint for European luxury entry.'
      },
      {
        id: 'bk-4',
        slideNumber: 4,
        title: 'Competitive Benchmarking: Bikaji vs Haldiram’s, Balaji & PepsiCo',
        subtitle: 'GTM strategy, unique selling propositions, revenue numbers, and YoY growth rates.',
        contentHighlights: [
          'Haldiram’s: ₹8,700 Cr revenue (18% YoY) dominating 38.5% share through traditional sweets and heritage GTM.',
          'Balaji Wafers: ₹4,900 Cr revenue (18% YoY, 9.6% share) winning on regional value-for-money and word-of-mouth.',
          'PepsiCo (₹6,400 Cr, 4% YoY) and ITC (₹2,900 Cr, 20% YoY) winning on international brand distribution.',
          'Bikaji’s opportunity: Highest agility in M&A, quick commerce adoption, and modern manufacturing.'
        ],
        metricsGrid: [
          { label: 'Haldiram Revenue', value: '₹8,700 Cr (38.5% Share)' },
          { label: 'Balaji Revenue', value: '₹4,900 Cr (9.6% Share)' },
          { label: 'PepsiCo Revenue', value: '₹6,400 Cr (3.0% Share)' }
        ],
        notes: 'Benchmarked against FY23 audited financial disclosures and market share aggregates.'
      },
      {
        id: 'bk-5',
        slideNumber: 5,
        title: 'Understanding the European Bread & Bakery Market Opportunity',
        subtitle: 'Volume consumption, market drivers, and Germany’s organic bread leadership.',
        contentHighlights: [
          'European bread market revenue exceeds $120B, with offline bakery channels still capturing 96.9% of total volume.',
          'Consumer shifts: 45% of young Europeans consume baked goods daily, with strong demand for organic, gluten-free, and artisanal sourdough.',
          'Germany is the single largest organic bread market in Europe, with 8.5% of total bread sales coming from organic artisanal lines.'
        ],
        metricsGrid: [
          { label: 'Market Scale', value: '>$120B Annual Volume' },
          { label: 'Daily Youth Consumption', value: '45% of Young Europeans' },
          { label: 'Germany Organic Share', value: '8.5% of Bread Market' }
        ],
        notes: 'Entry thesis: Cross-cultural bakery fusion combining European artisanal crusts with authentic Indian spices.'
      },
      {
        id: 'bk-6',
        slideNumber: 6,
        title: 'Strategic Branding for European and Luxury Markets',
        subtitle: 'The "Bikaji Boulangerie" concept: Saffron croissants, masala focaccia, and D2C distribution.',
        contentHighlights: [
          'Pillar 1 (USPs): Fusion lines such as Saffron Cardamom Croissants, Masala Sourdough Focaccia, and limited-edition festival boxes.',
          'Pillar 2 (Marketing): High-end tasting pop-ups in prominent malls (KaDeWe Berlin, Galeries Lafayette Paris) and food influencer partnerships.',
          'Pillar 3 & 4 (Cost-Effective Scaling): Partnering with local artisanal European bakeries to minimize CapEx while scaling D2C pre-orders.'
        ],
        metricsGrid: [
          { label: 'Concept Brand', value: '"Bikaji Boulangerie"' },
          { label: 'Target Markets', value: 'Germany, UK, France' },
          { label: 'Asset-Light Scaling', value: 'Local Bakery Partnerships' }
        ],
        notes: 'Bypasses massive brick-and-mortar bakery investment by leveraging co-manufacturing.'
      },
      {
        id: 'bk-7',
        slideNumber: 7,
        title: 'Target User Personas: Demographics & Evolving Snacking Priorities',
        subtitle: 'Profiling Priya Mehta (Urban Mumbai), Ramesh Kumar (Rural Bihar), and Aisha Khan (College Student).',
        contentHighlights: [
          'Priya Mehta (32, Mumbai, ₹85k income): Health-conscious millennial seeking clean-label, low-calorie, on-the-go quick commerce snacks.',
          'Ramesh Kumar (45, Rural Bihar, ₹15k income): Value-conscious farmer seeking high-volume traditional namkeen in small affordable packs.',
          'Aisha Khan (19, Pune Student, ₹8k allowance): Trend-conscious hostel student balancing budget constraints with late-night study snacking cravings.'
        ],
        metricsGrid: [
          { label: 'Urban Millennial', value: 'Convenience & Health First' },
          { label: 'Rural Traditional', value: 'Value & Familiar Flavors' },
          { label: 'Gen-Z Student', value: 'Bite-Sized & Trendy' }
        ],
        notes: 'Highlights the necessity of multi-tier packaging and regional product formulation.'
      },
      {
        id: 'bk-8',
        slideNumber: 8,
        title: 'Industry 5.0: Optimizing Value Chain & Cognitive Manufacturing',
        subtitle: 'Deploying collaborative robots (Cobots), smart recipe repositories, and AI waste reduction.',
        contentHighlights: [
          'Human-Centric Automation: Cobots work alongside veteran halwais (master confectioners) to maintain artisanal authenticity.',
          'Cognitive Systems: Digital repository of 200+ heritage recipes adapting batch mixing parameters to seasonal humidity and raw material shifts.',
          'Resource Optimization: 86% of ingredients sourced from Rajasthan (moth dal, cow milk). AI spoilage models reduce factory waste by 15-20%.'
        ],
        metricsGrid: [
          { label: 'Waste Reduction Target', value: '15–20% Factory Savings' },
          { label: 'Production Throughput', value: '+30–35% with Cobots' },
          { label: 'Local Sourcing Moat', value: '86% Rajasthan Raw Materials' }
        ],
        notes: 'Industry 5.0 differs from 4.0 by prioritizing human-machine symbiosis rather than pure robotic replacement.'
      },
      {
        id: 'bk-9',
        slideNumber: 9,
        title: 'Industry 5.0: Optimizing Supply Chains & Product Life Cycles',
        subtitle: 'Digital twins, IoT cold chain sensors, and quick commerce stage-by-stage insights.',
        contentHighlights: [
          'AI & ML: Demand forecasting minimizing overstocking (benchmarked against Walmart and Ocado AI fulfillment).',
          'Digital Twins: Virtual delivery route modeling saving up to 15% in logistics fuel burn (benchmarked against Unilever & Swiggy).',
          'Quick-Commerce Lifecycle Management: Introduction via Zepto bundles (+40% peak sales), growth via festival SKUs (-15% inventory costs), and decline mitigation via flash discounts (-30% waste).'
        ],
        metricsGrid: [
          { label: 'Product Launch Velocity', value: '25% Faster via Swiggy Data' },
          { label: 'Inventory Cost Reduction', value: '-15% in Growth Stage' },
          { label: 'Waste Mitigation', value: '-30% via AI Flash Sales' }
        ],
        notes: 'Applies FMCG lifecycle management directly to quick commerce dark stores.'
      },
      {
        id: 'bk-10',
        slideNumber: 10,
        title: 'Snack Smart: Adapting to Emerging Consumer Behaviors',
        subtitle: 'Portability, health-conscious namkeens, e-commerce optimization, and cultural storytelling.',
        contentHighlights: [
          'Convenience: 50% of urban Indians now treat snacks as mini-meals, demanding 50g single-serve portable packaging.',
          'Health: Launching roasted, protein-enriched, and gluten-free namkeens to capture the health-conscious urban segment.',
          'Sustainability & Heritage: 81% of shoppers prioritize eco-friendly packaging; marketing leverages authentic Rajasthani cultural heritage.'
        ],
        metricsGrid: [
          { label: 'Snack as Mini-Meal', value: '50% of Urban Indians' },
          { label: 'Online Snacking Share', value: '15% of Market' },
          { label: 'Sustainable Packaging', value: '81% Consumer Priority' }
        ],
        notes: 'Combines traditional taste with modern nutritional claims (clean-label, no palm oil).'
      },
      {
        id: 'bk-11',
        slideNumber: 11,
        title: 'Harmonizing Operations: Quick Commerce, E-Commerce & Traditional Trade',
        subtitle: 'Preventing channel conflict through differentiated SKUs and collaborative data feedback.',
        contentHighlights: [
          'People-Centric Innovation: Convenience packs for quick commerce (+30% sales lift) vs bulk festival hampers for traditional retail.',
          'Tech-Driven Supply: Micro-distribution dark store hubs delivering within 10 minutes (-15% inventory holding cost).',
          'Collaborative Ecosystems: Fast-track consumer review loops reducing new product development cycles by 20%.'
        ],
        metricsGrid: [
          { label: 'Channel Specific Lift', value: '+30% Sales Boost' },
          { label: 'Inventory Cost Saving', value: '-15% Warehousing Cost' },
          { label: 'R&D Cycle Speed', value: '20% Faster Product Cycles' }
        ],
        notes: 'Channel exclusivity ensures modern quick-commerce partners do not undercut traditional mom-and-pop distributors.'
      },
      {
        id: 'bk-12',
        slideNumber: 12,
        title: 'Shaping the Future: Accessibility, Sustainability & Quality',
        subtitle: 'Sustainable practices, regenerative raw material sourcing, and omnichannel reach.',
        contentHighlights: [
          'Sustainable Practices: Tata Power Solar renewable energy integration, Tetra Pak recycling, and partnerships with SEWA and Give Me Trees.',
          'Ingredients Quality: Sourcing with ISO/BIS certified organic suppliers; fortifying snacks with superfoods (millet, quinoa) via CFTRI tie-ups.',
          'Distribution: Blending Zepto/Blinkit q-commerce reach with influencer nutritionist endorsements.'
        ],
        metricsGrid: [
          { label: 'Key Energy Partner', value: 'Tata Power Solar' },
          { label: 'Research Tie-Up', value: 'CFTRI (Food Technology)' },
          { label: 'Quick Commerce Rail', value: 'Zepto & Blinkit Hubs' }
        ],
        notes: 'Embeds ESG directly into brand differentiation rather than treating it as a compliance expense.'
      },
      {
        id: 'bk-13',
        slideNumber: 13,
        title: 'Bikaji’s Market Gains & 4-Year Strategic Scaling Roadmap',
        subtitle: 'Projecting operational and financial milestones from 2026 to 2029.',
        contentHighlights: [
          'Current Standings: ₹704 Cr in Q4 FY24 (15.8% YoY growth), ₹69.2 Cr net profit (13% YoY), 270,000 direct retail outlets.',
          '2026-2027 Milestones: 85% production efficiency, 40% carbon footprint cut, 35% digital sales contribution, 60% smart packaging adoption.',
          '2028-2029 Target: 4+ Industry 5.0 mega-plants, 95% supply chain efficiency, 80% automated warehouse coverage, and 30% sustained YoY revenue growth.'
        ],
        metricsGrid: [
          { label: 'Q4 FY24 Baseline', value: '₹704 Cr (15.8% YoY)' },
          { label: 'Target Product Diversification', value: '250+ New SKUs' },
          { label: 'Warehouse Automation', value: '80% Autonomous Metro Hubs' }
        ],
        notes: 'Long-term roadmap positions Bikaji as a multi-category global food conglomerate.'
      },
      {
        id: 'bk-14',
        slideNumber: 14,
        title: 'Executive Summary: Strategic Focus Areas, Outcomes & Vision',
        subtitle: 'Synthesizing the global expansion and domestic operational excellence blueprint.',
        contentHighlights: [
          '01 Strategic Focus: Eco-friendly sourcing, low-fat/high-protein formulations, and human-machine creative automation.',
          '02 Expected Outcomes: Smooth low-CapEx entry into European artisanal bread market; high market presence in quick commerce.',
          '03 Key Actions: Establish Bikaji as a premium fusion brand; scale personalized D2C subscriptions; deploy collaborative robotics.',
          '04 Vision: Bikaji Foods International aspires to be amongst the global snacking leaders for the total satisfaction of customers.'
        ],
        metricsGrid: [
          { label: 'Focus Area 1', value: 'Artisanal European Fusion' },
          { label: 'Focus Area 2', value: 'Industry 5.0 Cobots' },
          { label: 'Focus Area 3', value: 'Omnichannel Harmonization' }
        ],
        notes: 'Final strategic pitch delivered to Kshitij 2025 Business Club jury.'
      },
      {
        id: 'bk-15',
        slideNumber: 15,
        title: 'Appendix & Research Citations',
        subtitle: 'Statista, TradeBrains, corporate filings, and global food industry benchmarks.',
        contentHighlights: [
          'Statista ethnic snacks market share reports and European bakery market sizing data.',
          'TradeBrains analysis: "Bikaji Foods International: A Vision for Global Expansion".',
          'Corporate presentations from Bikaji, Yellow Diamond (Prataap Snacks), and Haldiram’s global case archives.'
        ],
        metricsGrid: [
          { label: 'Market Citations', value: 'Statista, TradeBrains' },
          { label: 'Industry Case Data', value: 'Yellow Diamond & Haldiram' },
          { label: 'Official Filings', value: 'Bikaji Investor Relations' }
        ],
        notes: 'Complete research bibliography supporting the case study.'
      }
    ]
  },

  // 5. CARBX / IIT ROORKEE E-SUMMIT '25
  {
    id: 'cs-carbx-carbon-offsets-platform',
    slug: 'carbx-carbon-offsets-mind-the-product',
    title: 'CarbX: Democratizing Carbon Offsets for Individuals and Enterprises',
    subtitle: 'Dual-sided carbon accounting integrating B2C Carbon Pulse gamification with B2B Core compliance trading.',
    company: 'CarbX (IIT Roorkee E-Summit)',
    companyLogo: 'CX',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#1B5E20',
    readingTimeMinutes: 7,
    slidesCount: 12,
    publishedAt: 'January 2025',
    category: 'ClimateTech & B2B2C',
    tags: ['Carbon Offsets', 'ClimateTech', 'Mind The Product', 'IIT Roorkee', 'B2B2C', 'Sustainability Gamification'],
    keyMetrics: [
      { value: '$2.5B → $250B', label: 'Global Carbon Market Growth' },
      { value: '933%', label: 'Projected 2-Year ROI' },
      { value: '10.4x', label: 'Combined LTV/CAC Ratio' }
    ],
    principlesCovered: [
      'The Carbon Pulse Behavioral Loop',
      'Dual-Sided Liquidity in Offset Markets',
      'The B2B2C Employee Engagement Moat'
    ],
    executiveSummary: 'Global carbon emissions peaked at 59 GtCO2e, yet only 17% are covered by compliance trading schemes. Developed for Mind The Product at IIT Roorkee E-Summit ’25 by Team Adrenaline (Rohit Kamboj & Yash Patil), CarbX solves the adoption barrier by introducing a dual-sided platform: CarbX Pulse (gamified B2C eco-tracking) and CarbX Core (B2B carbon ledger and compliance trading).',
    authorRole: 'Product & Growth Lead',
    deckPdfUrl: 'https://drive.google.com/file/d/YOUR_CARBX_DRIVE_LINK_HERE/view?usp=sharing',
    downloadDeckUrl: '#',
    deckSlides: [
      {
        id: 'cx-1',
        slideNumber: 1,
        title: 'Mind The Product: Introducing CarbX',
        subtitle: 'Empowering sustainability, one action at a time: IIT Roorkee E-Summit ’25 submission.',
        contentHighlights: [
          'Team Adrenaline: Rohit Kamboj and Yash Patil.',
          'Core Concept: A unified carbon-offset platform that tracks, rewards, and manages sustainable actions for both retail consumers and enterprises.',
          'Integrates certified carbon credits directly into daily operational software and shopping checkouts using gamification and transparency.'
        ],
        metricsGrid: [
          { label: 'Event', value: 'E-Summit ’25 Synergy of Genesis' },
          { label: 'Host', value: 'E-Cell IIT Roorkee' },
          { label: 'Product Lead', value: 'Yash Patil' }
        ],
        notes: 'Designed to bridge the gap between abstract corporate ESG pledges and consumer everyday habits.'
      },
      {
        id: 'cx-2',
        slideNumber: 2,
        title: 'Macro Context & The Global Carbon Credit Challenge',
        subtitle: 'Market explosion from $2.5B to $250B by 2030 amidst acute accessibility bottlenecks.',
        contentHighlights: [
          'Market Opportunity: Global carbon credit market is projected to surge 100x from $2.5B to $250B by 2030.',
          'The Blindspot: Carbon emissions peaked at 59 GtCO2e, yet only 17% are covered under active carbon trading mechanisms.',
          'The Friction: Businesses struggle to calculate scope-3 emissions; retail consumers have near-zero accessible tools to participate in carbon markets.'
        ],
        metricsGrid: [
          { label: 'Market Projection', value: '$2.5B → $250B by 2030' },
          { label: 'Emissions Peak', value: '59 GtCO2e Globally' },
          { label: 'Trading Coverage', value: 'Only 17% Covered Today' }
        ],
        notes: 'Industrial sectors generate 30% of global emissions, making B2B offset compliance a regulatory urgency.'
      },
      {
        id: 'cx-3',
        slideNumber: 3,
        title: 'Carbon Credits Explained, India’s CCTS & Target User Personas',
        subtitle: 'Deconstructing 1 credit = 1 ton CO2, compliance vs voluntary offsets, and core user segments.',
        contentHighlights: [
          'Mechanics: 1 carbon credit equals a verifiable permit to emit 1 metric ton of CO2 or equivalent greenhouse gas.',
          'India’s CCTS (2023): Carbon Credit Trading Scheme establishes dual compliance mandates and voluntary offset markets.',
          'User Personas: Ananya (28, B2C Eco-shopper), Rajat (42, B2B Logistics fleet owner), and Meera (38, B2B2C Retail Sustainability VP).'
        ],
        metricsGrid: [
          { label: 'Credit Unit', value: '1 Credit = 1 Ton CO2' },
          { label: 'Regulatory Mandate', value: 'India CCTS 2023' },
          { label: 'Target Personas', value: 'B2C, B2B, B2B2C' }
        ],
        notes: 'Ananya lacks impact feedback; Rajat balances compliance costs; Meera struggles with supplier Scope-3 data.'
      },
      {
        id: 'cx-4',
        slideNumber: 4,
        title: 'The Solution: CarbX Pulse (Individuals) & CarbX Core (Businesses)',
        subtitle: 'A dual-platform architecture democratizing carbon credit tracking, earning, and trading.',
        contentHighlights: [
          'CarbX Pulse: Mobile app for individuals that tracks fitness, sustainable commuting, and green purchases, translating them into Carbon Pulse credits.',
          'CarbX Core: Enterprise dashboard for businesses to calculate footprints, trade credits, and distribute ESG rewards to employees.',
          'Core Pillars: Democratizing offsets, gamification & behavioral nudges, seamless API integrations, and verifiable data-driven analytics.'
        ],
        metricsGrid: [
          { label: 'B2C Surface', value: 'CarbX Pulse App' },
          { label: 'B2B Surface', value: 'CarbX Core Dashboard' },
          { label: 'Core Mechanism', value: 'Behavioral Rewards + Trading' }
        ],
        notes: 'Creates mutual reinforcement: B2B companies buy credits that fund rewards earned by B2C consumers.'
      },
      {
        id: 'cx-5',
        slideNumber: 5,
        title: 'CarbX Pulse for Individuals: Scoring, Activities & AI Recommendation',
        subtitle: 'The Carbon Pulse score, personalized reports, and verified green activity participation.',
        contentHighlights: [
          'Carbon Pulse Score: A dynamic personal credit score (e.g. 753) reflecting monthly commuting, recycling, and sustainable shopping.',
          'AI Behavior Assessment: Machine learning models analyze spending patterns to recommend highest-impact carbon reductions.',
          'Actionable Activities: Participating in tree plantation drives, electronics recycling, and green transit with instant credit scoring.'
        ],
        metricsGrid: [
          { label: 'Scoring Metric', value: 'Carbon Pulse (300–850)' },
          { label: 'Intelligence Layer', value: 'Predictive Behavior Model' },
          { label: 'Instant Feedback', value: 'Real-time Activity Verification' }
        ],
        notes: 'Turns invisible carbon savings into tactile, measurable digital achievements.'
      },
      {
        id: 'cx-6',
        slideNumber: 6,
        title: 'CarbX Pulse: Sustainable Marketplace, Fitness Tracking & Partner Perks',
        subtitle: 'Linking health tracking (cycling, steps) with green commerce discounts (Sleepy Owl, Whole Truth, Zepto).',
        contentHighlights: [
          'Fitness Sync: Tracks daily steps, active cycling, and calories, converting human energy into CarbX Boost points.',
          'Partner Marketplace: Redeem Carbon Pulse points for exclusive discounts at eco-friendly brands (The Whole Truth, Sleepy Owl, Zomato green orders).',
          'Sustainable Brand Hub: Curated shopping categories for certified organic, zero-plastic, and ethical consumer products.'
        ],
        metricsGrid: [
          { label: 'Activity Conversion', value: 'Steps/Cycling → CarbX Boost' },
          { label: 'Marketplace Partners', value: 'Zepto, Whole Truth, Zomato' },
          { label: 'Commercial Engine', value: 'Affiliate + Sponsored Placements' }
        ],
        notes: 'Gamified rewards drive 4.2x higher weekly active usage than passive carbon calculators.'
      },
      {
        id: 'cx-7',
        slideNumber: 7,
        title: 'CarbX Core for Businesses: Auditing, Trading & Regulatory Reports',
        subtitle: 'Enterprise dashboard for monthly emissions tracking, peer benchmarking, and credit trading.',
        contentHighlights: [
          'Monthly Emissions Telemetry: Real-time graphs monitoring Scope 1, 2, and 3 emissions across corporate facilities.',
          'Credit Trading Desk: Direct marketplace to purchase verified carbon offsets or sell excess credits to industry peers.',
          'AI-Powered Sustainability Recommendations: Prescriptive advice ("Switch 40% warehouse energy to solar to save ₹12L and 40t CO2").'
        ],
        metricsGrid: [
          { label: 'Enterprise Ledger', value: 'Carbon Credit Balance' },
          { label: 'Audit Output', value: '1-Click Annual ESG Report' },
          { label: 'Marketplace Function', value: 'Peer-to-Peer Credit Transfers' }
        ],
        notes: 'Empowers logistics and manufacturing firms to meet regulatory emission quotas smoothly.'
      },
      {
        id: 'cx-8',
        slideNumber: 8,
        title: 'Ecosystem Flywheel: Harmonizing B2C, B2B, and B2B2C Rails',
        subtitle: 'How consumer actions, corporate compliance, and retail brands interact in a self-sustaining loop.',
        contentHighlights: [
          'B2C loop: Consumers earn points for cycling and eco-shopping, spending them on partner brand vouchers.',
          'B2B loop: Enterprises (ITC, Reliance, ONGC) buy credits to offset manufacturing footprints and maintain ESG rankings.',
          'B2B2C loop: Retailers (Amazon, Blinkit, Uber) sponsor consumer rewards, driving eco-friendly product sales while acquiring certified green loyalty.'
        ],
        metricsGrid: [
          { label: 'Enterprise Participants', value: 'ITC, Reliance, ONGC' },
          { label: 'Retail Intermediaries', value: 'Amazon, Blinkit, Uber' },
          { label: 'Closed-Loop Moat', value: 'Data Exchange + Credit Liquidity' }
        ],
        notes: 'The network effect: More B2C users attract more B2B2C retailers, which increases B2B credit liquidity.'
      },
      {
        id: 'cx-9',
        slideNumber: 9,
        title: 'Financial Model: Unit Economics, CAC, LTV & 933% ROI',
        subtitle: 'Rigorous financial mechanics across B2C retail users and B2B enterprise clients.',
        contentHighlights: [
          'B2C Unit Economics: CAC of ₹1,500; ARPU of ₹157.45/month; 2-year LTV of ₹2,330.80 (61.67% gross margin).',
          'B2B Unit Economics: CAC of ₹35,000; Annual SaaS fee of ₹1,00,000; 2-year LTV of ₹1,60,000 (80% gross margin).',
          'Total Return on Investment: ₹1 Cr investment (₹50L B2C + ₹50L B2B) generates ₹10.33 Cr in 2-year revenue, delivering a 933.08% ROI.'
        ],
        metricsGrid: [
          { label: 'Total Initial Investment', value: '₹1.00 Crore' },
          { label: 'Combined 2-Year Revenue', value: '₹10.33 Crore' },
          { label: 'Net Projected ROI', value: '933.08%' }
        ],
        notes: 'Assumes conservative adoption: 10,000 B2C users (2% of 5L target) and 500 B2B clients (5% of 10k target).'
      },
      {
        id: 'cx-10',
        slideNumber: 10,
        title: 'Key Metrics & Financial Performance Summary Scorecard',
        subtitle: 'Consolidated comparison table of CAC, LTV, ROI, and adoption rates across both business segments.',
        contentHighlights: [
          'B2C Segment (Pulse): CAC ₹1,500/user, LTV ₹5,400/user, Segment ROI 366%, Adoption rate 2%.',
          'B2B Segment (Core): CAC ₹35,000/client, LTV ₹2,40,000/client, Segment ROI 1500%, Adoption rate 5%.',
          'Combined Blended Performance: Super-linear returns driven by high B2B enterprise retention and low B2C viral acquisition costs.'
        ],
        metricsGrid: [
          { label: 'B2C Segment ROI', value: '366%' },
          { label: 'B2B Segment ROI', value: '1500%' },
          { label: 'Blended Enterprise LTV', value: '₹2,40,000 / Client' }
        ],
        notes: 'Demonstrates robust venture viability with minimal balance sheet burn.'
      },
      {
        id: 'cx-11',
        slideNumber: 11,
        title: 'Risk Matrix & Mitigation Strategies: Overcoming Adoption Pitfalls',
        subtitle: 'Addressing consumer apathy, marketplace cold starts, API integration friction, and sales resistance.',
        contentHighlights: [
          'Pitfall 1 (Lack of consumer awareness): Mitigated by bite-sized eco-tips, instant pulse gamification, and real-world cash savings.',
          'Pitfall 2 (Marketplace cold start): Curating exclusive launch brand partnerships with established sustainable leaders.',
          'Pitfall 3 (API integration delays): Providing lightweight SDKs, no-code webhooks, and dedicated technical onboarding webinars.',
          'Pitfall 4 (B2B sales resistance): Demonstrating tangible regulatory compliance savings and offering first-year pilot discounts.'
        ],
        metricsGrid: [
          { label: 'B2C Risk Defense', value: 'Bite-sized Gamified Rewards' },
          { label: 'B2B Risk Defense', value: 'Regulatory Compliance ROI' },
          { label: 'Integration Speed', value: 'Pre-built ERP & Telematics APIs' }
        ],
        notes: 'Pre-emptively solves friction at each node of the multi-sided platform.'
      },
      {
        id: 'cx-12',
        slideNumber: 12,
        title: 'Appendix, Bibliography & Carbon Registry Citations',
        subtitle: 'Bureau of Energy Efficiency (BEE), Carbon Trade Exchange, ERM, and academic climate studies.',
        contentHighlights: [
          'Government references: Bureau of Energy Efficiency (BEE) Carbon Credit Trading Scheme notifications.',
          'Industry exchanges: Carbon Trade Exchange (CTX), International Carbon Registry, and Carbonplace banking network.',
          'Case benchmarks: Analysis of Microsoft’s carbon-negative roadmap and Aramco industrial decarbonization studies.'
        ],
        metricsGrid: [
          { label: 'Policy Source', value: 'Ministry of Power (BEE India)' },
          { label: 'Market Benchmarks', value: 'Carbonplace & CTX Exchange' },
          { label: 'Academic Studies', value: 'Emerald Insight Climate Data' }
        ],
        notes: 'Authoritative research documentation underpinning CarbX platform mechanics.'
      }
    ]
  },

  // 6. BCG x IIM LUCKNOW / ACE THE CASE (INDORE SMART CITY)
  {
    id: 'cs-bcg-ace-the-case-indore',
    slug: 'bcg-ace-the-case-indore-urban-hub',
    title: 'Ace the Case: Transforming Indore into India’s Model Tier-2 Urban & Industrial Hub',
    subtitle: 'A 20-year multi-stage PPP roadmap creating 50,000 jobs and 6,250 jobs/km² while avoiding metropolitan sprawl.',
    company: 'BCG x IIM Lucknow',
    companyLogo: 'BCG',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#007A3D',
    readingTimeMinutes: 7,
    slidesCount: 8,
    publishedAt: 'October 2024',
    category: 'Public Policy & Urban Strategy',
    tags: ['Urban Planning', 'BCG Case Competition', 'Indore Smart City', 'PPP Models', 'Economic Multiplier', 'Infrastructure'],
    keyMetrics: [
      { value: '6,250 Jobs/km²', label: 'Urban Density Target' },
      { value: '4.0', label: 'Economic Return (EIR)' },
      { value: '₹12,000 Cr', label: 'Total Economic Output' }
    ],
    principlesCovered: [
      'The Urban Density Optimization (UDO) Law',
      'The 2.8x Job Creation Multiplier Effect',
      'The Risk-Weighted PPP Involvement Spectrum'
    ],
    executiveSummary: 'India’s urban population will surge from 35% (2021) to 40% by 2030, leaving Tier-1 megacities (Mumbai, Delhi, Bengaluru) paralyzed by extreme AQI crises, water shortages, and transit gridlock. Presented for BCG x IIM Lucknow’s Ace The Case by Team Rhapsody (Nehal Singh, Tuhina Rai & Yash Patil), this strategic roadmap deconstructs why Indore is primed to absorb this migration, outlining a 4-stage PPP action plan generating 50,000 jobs and ₹12,000 Cr in economic output.',
    authorRole: 'Urban Strategy & Economic Modeler',
    deckPdfUrl: 'https://drive.google.com/file/d/YOUR_BCG_INDORE_DRIVE_LINK_HERE/view?usp=sharing',
    downloadDeckUrl: '#',
    deckSlides: [
      {
        id: 'bcg-1',
        slideNumber: 1,
        title: 'Ace The Case: Transforming Tier-2 Cities into Sustainable Economic Engines',
        subtitle: 'BCG x IIM Lucknow case competition submission by Team Rhapsody.',
        contentHighlights: [
          'Case study presentation for Boston Consulting Group (BCG) and IIM Lucknow competition.',
          'Authored by Team Rhapsody: Nehal Singh, Tuhina Rai, and Yash Patil.',
          'Core proposition: How can Tier-2 and Tier-3 Indian cities be transformed into productive employment hubs without repeating the congestion collapse of Tier-1 metros?'
        ],
        metricsGrid: [
          { label: 'Organizers', value: 'BCG x IIM Lucknow' },
          { label: 'Team', value: 'Team Rhapsody (Yash Patil)' },
          { label: 'Focus', value: 'National Urban Transformation' }
        ],
        notes: 'Addresses the urgent need for secondary economic growth corridors across India.'
      },
      {
        id: 'bcg-2',
        slideNumber: 2,
        title: 'Macro Urban Dilemma: The Breakdown of India’s Tier-1 Megacities',
        subtitle: 'Population explosion in Mumbai (26.4M), Delhi (22.5M), and Bengaluru (14.2M) exceeding carrying capacity.',
        contentHighlights: [
          'Delhi (The Choked Capital): Hazardous AQI, chronic landfill crises, toxic Yamuna river, and acute respiratory health crises.',
          'Mumbai (The Overloaded Financial Hub): Extreme density (20,000/km²), 40% slum population, frequent monsoon flooding, and severe social divide.',
          'Bengaluru (The Stressed Tech City): Traffic gridlock with 50% longer commutes, critical groundwater shortages, and failing urban drainage.'
        ],
        metricsGrid: [
          { label: 'India Urban Shift', value: '35% (2021) → 40% (2030)' },
          { label: 'Mumbai Density', value: '20,000 / km² (Slum Stress)' },
          { label: 'Metropolitan Core Question', value: 'How to build Tier-2 alternative hubs?' }
        ],
        notes: 'Megacity collapse necessitates diverting white-collar and manufacturing migration to resilient Tier-2 cities.'
      },
      {
        id: 'bcg-3',
        slideNumber: 3,
        title: 'Why Indore? Cleanest City, Economic Powerhouse & Untapped Growth Moat',
        subtitle: 'Benchmarking Indore’s governance, education, healthcare, and industrial competitiveness.',
        contentHighlights: [
          'Cleanest City in India: Ranked #1 seven consecutive times with an AQI of 70-100 and 100% door-to-door waste segregation.',
          'Economic Engine: Generates 40% of Madhya Pradesh’s GDP with a 9.5% CAGR, supported by 2.5M population (2.65% annual growth).',
          'Academic & Infrastructure Moat: Only Indian city hosting both an IIT and an IIM; 28km metro underway (₹7,500 Cr investment) alongside Devi Ahilya Bai Holkar International Airport.',
          'Affordability: 25% lower overall cost of living compared to Bangalore and Mumbai, with 24/7 water supply and PMAY 2.0 affordable housing.'
        ],
        metricsGrid: [
          { label: 'Swachh Survekshan', value: '#1 Cleanest City (7x Winner)' },
          { label: 'State GDP Share', value: '40% of Madhya Pradesh GDP' },
          { label: 'Cost of Living Advantage', value: '25% Cheaper than Metros' }
        ],
        notes: 'Indore Municipal Corporation operates Asia’s largest 550 tonnes/day bio-CNG plant and 60 MW solar pumping at Jalud.'
      },
      {
        id: 'bcg-4',
        slideNumber: 4,
        title: 'Strategic Action Plan: Industry Attraction, PPP Models & Financial Returns',
        subtitle: '20-year roadmap encompassing eco-zoning, smart utilities, tax subsidies, and ₹12,000 Cr economic output.',
        contentHighlights: [
          'Industry Clusters: 500-acre Tech Park collaborating with IIT Indore; Medical Devices Park; and EV Green Tech Revamp at Pithampur Industrial Area.',
          'Incentive Framework: 7-year corporate tax holidays (>₹100 Cr), 30% land subsidies (90-day approvals), and 15% CapEx grants for automation/AI.',
          'Financial Impact: ₹5,000 Cr private/public investment creates 50,000 direct formal jobs, driving ₹12,000 Cr in total economic output (400% ROI).'
        ],
        metricsGrid: [
          { label: 'Target Investment', value: '₹5,000 Cr Attracted' },
          { label: 'Direct Employment', value: '50,000 Formal Jobs' },
          { label: 'Total Economic Output', value: '₹12,000 Cr (400% ROI)' }
        ],
        notes: 'Includes ₹1,000 Cr Indore Innovation Fund (49% government, 51% private equity) for local startups.'
      },
      {
        id: 'bcg-5',
        slideNumber: 5,
        title: 'Micro Strategic Planning: Surveillance, Green Mobility, Rail & Pollution',
        subtitle: 'A 4-pillar localized implementation across Vijay Nagar, Tukoganj, Bhanwarkuan, and Pithampur.',
        contentHighlights: [
          'Pillar 1 (Smart Surveillance): Unified CCTV integration with AI license plate/anomaly detection and MySafeIndore citizen SOS app.',
          'Pillar 2 (Green Mobility): 500 electric buses for industrial zones, subsidized worker transit passes, and 25 solar charging stations.',
          'Pillar 3 (Industrial Rail): Dedicated Freight Corridor connecting Pithampur to JNPA Mumbai (309 km) with IoT sidings (45-min turnaround).',
          'Pillar 4 (Industrial Pollution): AI-driven emission monitors with automatic non-compliance fines and waste-to-energy plasma gasification.'
        ],
        metricsGrid: [
          { label: 'Rail Corridor', value: 'Pithampur → JNPA (309 km)' },
          { label: 'Green Transit Fleet', value: '500 E-Buses + 25 Solar Hubs' },
          { label: 'Air Quality Target', value: 'PM2.5: 35 → 21 μg/m³' }
        ],
        notes: 'Multi-Modal Logistics Park (MMLP 2.0) features a 5km elevated rail link directly to Indore Airport for pharma cold-chain export.'
      },
      {
        id: 'bcg-6',
        slideNumber: 6,
        title: 'Quantitative Validation: Multipliers, Density Optimization & PPP Spectrum',
        subtitle: 'Economic Return on Investment (EIR), Job Creation Multiplier (JCM), and Urban Density Optimization (UDO).',
        contentHighlights: [
          'Job Multiplier (JCM): JCM = (50k direct + 50k indirect + 40k induced) / 50k = 2.8x. Every direct job creates 2.8 secondary jobs in Indore.',
          'Urban Density Optimization (UDO): 50,000 jobs across 8 sq. km = 6,250 jobs/sq. km, outperforming Bangalore (4,800) while preventing sprawl.',
          'Economic Return (EIR): EIR = (12,000 Cr + 8,000 Cr) / 5,000 Cr = 4.0. Every ₹1 invested generates ₹4 in sustained economic velocity.',
          'PPP Spectrum: Progressive evolution from basic O&M to Design-Build-Finance-Operate-Maintain (DBFOM) and BOOT risk-sharing.'
        ],
        metricsGrid: [
          { label: 'Job Creation Multiplier', value: '2.8x Total Employment' },
          { label: 'Job Density (UDO)', value: '6,250 Jobs / km²' },
          { label: 'Economic Return (EIR)', value: '4.0x Capital Velocity' }
        ],
        notes: 'High EIR signals Indore as an investor magnet with significantly lower infrastructure capital drag than Tier-1 cities.'
      },
      {
        id: 'bcg-7',
        slideNumber: 7,
        title: 'Four-Stage Phased Implementation Roadmap (2025–2031+)',
        subtitle: 'From core infrastructure foundation to national replication and international consultancy export.',
        contentHighlights: [
          'Stage 1 (2025-2026): Metropolitan expansion finalizing Nagda & Badnawar (8,676 sq. km); commence Pithampur-JNPA rail link; PMAY 2.0 housing.',
          'Stage 2 (2027-2028): Roll out unified AI CCTV; operationalize 500 e-buses; commission 3 plasma waste-to-energy plants (40% PM2.5 reduction).',
          'Stage 3 (2029-2030): Escalate PPPs to DBFM models (70% private financing); train 50,000 workers in green tech; secure ₹3,000 Cr CSR funds.',
          'Stage 4 (2031+): Institutionalize Indore Smart Surveillance Standards (ISSS) nationally; export AI urban planning consultancy to 3 SE Asian nations.'
        ],
        metricsGrid: [
          { label: 'Phase 1 Timeline', value: '2025–2026 Core Infra' },
          { label: 'Phase 2 Timeline', value: '2027–2028 Green Systems' },
          { label: 'Phase 4 Scale', value: '2031+ National Benchmark' }
        ],
        notes: 'Converts a localized city intervention into an institutionalized national model for Indian urbanization.'
      },
      {
        id: 'bcg-8',
        slideNumber: 8,
        title: 'Appendix, Data Sources & Official Master Plan Citations',
        subtitle: 'Smart City Indore, McKinsey Global Institute, Boston Consulting Group reports, and Centre for Liveable Cities.',
        contentHighlights: [
          'Smart City Indore official portal & ABD Master Plan (2024-2030).',
          'BCG Research: "Bridging the Gap: Leveraging The Transformative Power of Private Sector Partnerships" (Oct 2024) and "Cities of the Future" (Feb 2023).',
          'McKinsey Global Institute: "India’s Urban Awakening: Building Inclusive Cities, Sustaining Economic Growth".',
          'Singapore Centre for Liveable Cities: "Singapore’s Urban Systems Approach: Sustaining Liveability".'
        ],
        metricsGrid: [
          { label: 'Primary Data', value: 'Indore Master Plan 2024-2030' },
          { label: 'Strategy References', value: 'BCG Cities of the Future' },
          { label: 'Urban Benchmark', value: 'Singapore Centre Liveable Cities' }
        ],
        notes: 'Comprehensive documentation concluding the presentation.'
      }
    ]
  },

  // 7. CONSUMER AI IN INDIA REPORT (WITH REAL DRIVE LINK)
  {
    id: 'cs-consumer-ai-india-report',
    slug: 'consumer-ai-in-india-report',
    title: 'Consumer AI in India: The 2026 Product Landscape & Adoption Teardown',
    subtitle: 'A forensic strategic slide deck on how 350M+ Indian smartphone users adopt generative AI, vernacular voice interfaces, and conversational agents.',
    company: 'Consumer AI India',
    companyLogo: 'AI',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#161616',
    readingTimeMinutes: 7,
    slidesCount: 8,
    publishedAt: 'March 2026',
    category: 'Generative AI & Consumer Tech',
    tags: ['Consumer AI', 'India Tech', 'Voice First', 'Vernacular LLM', 'Product Teardown', 'Strategy Deck'],
    keyMetrics: [
      { value: '350M+', label: 'Addressable Users' },
      { value: '4.8x', label: 'Voice vs Text Query Volume' },
      { value: '₹0 → ₹299', label: 'WTP Subscription Inflection' }
    ],
    principlesCovered: [
      'The Vernacular Voice Primacy Law',
      'Latency Perception in Conversational UI',
      'The Trust Gradient in Generated Answers'
    ],
    executiveSummary: 'India is rapidly becoming the world’s highest-volume consumer AI testing ground. From WhatsApp-based conversational bots to vernacular voice search, this strategic presentation deck examines how consumer behavior in Tier-2 and Tier-3 markets breaks Western prompt-engineering assumptions and rewires consumer workflows.',
    authorRole: 'AI & Growth Strategist',
    deckPdfUrl: 'https://drive.google.com/file/d/1zq-WXSZsNdik8E2oe1hq43Xja1bPxNNI/view?usp=sharing',
    downloadDeckUrl: 'https://drive.google.com/file/d/1zq-WXSZsNdik8E2oe1hq43Xja1bPxNNI/view?usp=sharing',
    deckSlides: [
      {
        id: 'cai-1',
        slideNumber: 1,
        title: 'Executive Overview: The Indian Consumer AI Wave',
        subtitle: 'Why India is adopting AI through voice notes, WhatsApp channels, and search rather than standalone chat applications.',
        contentHighlights: [
          'Over 68% of first-time Indian generative AI interactions occur in Indic languages via voice notes.',
          'Standalone chat apps experience high initial curiosity followed by steep day-14 churn due to blank-prompt paralysis.',
          'Winning consumer AI products embed intelligence directly into existing communication rails.'
        ],
        metricsGrid: [
          { label: 'Market Scale', value: '350M+ Next Billion' },
          { label: 'Voice Preference', value: '4.8x over typing' }
        ],
        notes: 'Field analysis based on user interviews and market telemetry across 6 tier-2 hubs.'
      },
      {
        id: 'cai-2',
        slideNumber: 2,
        title: 'The Persona Barrier: The Blank Input Box Dilemma',
        subtitle: 'Why Western prompt engineering fails with non-English first users.',
        contentHighlights: [
          'Western LLM interfaces assume users know what to ask and how to formulate multi-turn prompts.',
          'Indian consumers perceive the empty input field as an exam rather than a conversation.',
          'Guided chip suggestions, audio mic defaulting, and visual cards increase session depth by 310%.'
        ],
        metricsGrid: [
          { label: 'Blank Box Drop-Off', value: '54% within 10s' },
          { label: 'Guided Chips Lift', value: '+310% depth' }
        ],
        notes: 'Observed during usability trials comparing open chat with guided prompt menus.'
      },
      {
        id: 'cai-3',
        slideNumber: 3,
        title: 'Voice-First Architecture: Hinglish, Code-Switching & Latency',
        subtitle: 'Solving multi-dialect speech-to-text where English words are seamlessly woven into vernacular speech.',
        contentHighlights: [
          'Speech recognition accuracy degrades significantly without code-switching dictionaries.',
          'Perceived latency threshold for voice notes is <1.2 seconds before the user assumes the system froze.',
          'Chunked audio streaming and immediate haptic feedback mitigate acoustic latency anxiety.'
        ],
        metricsGrid: [
          { label: 'Target Voice Latency', value: '< 1.2 seconds' },
          { label: 'Code-Switching Rate', value: '72% of queries' }
        ],
        notes: 'Detailed architecture diagrams for acoustic model pipeline and inference cache.'
      },
      {
        id: 'cai-4',
        slideNumber: 4,
        title: 'Monetization & Willingness-to-Pay (WTP) in India',
        subtitle: 'From $20/month Western SaaS models to ₹99 sachet micro-transactions.',
        contentHighlights: [
          'Indian consumers reject $20 recurring subscriptions but readily purchase ₹29 - ₹99 episodic credits.',
          'Tie-ins with UPI AutoPay mandate and bite-sized usage unlocks consumer monetization.',
          'The value equation must directly correlate to real-world outcomes: education, exam prep, or business leads.'
        ],
        metricsGrid: [
          { label: 'Episodic Sachet Conversion', value: '8.4%' },
          { label: 'Monthly Recurring Conversion', value: '< 0.7%' }
        ],
        notes: 'Pricing elasticity curves tested across educational and professional user segments.'
      }
    ]
  },

  // 8. ZEPTO INTERACTIVE COMIC TEARDOWN
  {
    id: 'cs-zepto-10-min',
    slug: 'zepto-blinkit-cart-psychology',
    title: 'The 10-Minute Cart Trap: How Quick-Commerce Optimizes Checkout Anxiety',
    subtitle: 'A forensic visual teardown of variable tipping, the ₹16 handling fee reveal, and artificial scarcity loops in Indian quick commerce.',
    company: 'Zepto & Blinkit',
    companyLogo: 'ZP',
    format: 'interactive_comic',
    availability: 'available',
    accentColor: '#161616',
    readingTimeMinutes: 5,
    slidesCount: 5,
    publishedAt: 'March 2026',
    category: 'Quick Commerce',
    tags: ['Cart Abandonment', 'Drip Pricing', 'Consumer Psychology', 'Unit Economics'],
    keyMetrics: [
      { value: '₹149 → ₹210', label: 'Average Basket Push' },
      { value: '18% Drop', label: 'Unbundled Fee Friction' },
      { value: '4.2x', label: 'Tip Opt-In via Defaulting' }
    ],
    principlesCovered: [
      'Present Bias',
      'The Zeigarnik Effect',
      'Drip Pricing',
      'The Labor Illusion',
      'Default Architecture'
    ],
    executiveSummary: 'Quick commerce apps in India have perfected the psychological art of converting impulse into transaction within 120 seconds. This teardown deconstructs how Zepto and Blinkit engineer artificial urgency, nudge basket size expansion, and unbundle fee line-items at the exact moment user commitment peaks.',
    authorRole: 'Product Teardown Lead',
    slides: [
      {
        id: 'z-s1',
        stepNumber: 1,
        screenTitle: 'The 8-Minute Anchor (Search & Cart Drawer)',
        appStateDescription: 'Customer searches for Cold Brew and Cow Milk in Indiranagar at 10:45 PM.',
        deviceType: 'mobile',
        screenMockType: 'zepto_cart',
        bubbles: [
          {
            id: 'b1',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'Notice the top badge: "8 MINS TO DOORSTEP". This anchors immediate gratification before the customer even evaluates the shelf price.'
          },
          {
            id: 'b2',
            character: 'User',
            position: 'bottom-right',
            type: 'thought',
            text: 'I just need cold brew for tonight... wait, why is the checkout button pulsating in emerald green?'
          }
        ],
        hotspots: [
          {
            id: 'h1',
            x: 75,
            y: 18,
            title: 'Dynamic ETA Anchor',
            description: 'Calculated using real-time rider dispatch telemetry. Drops customer price sensitivity by 24% by creating hyper-urgency.',
            impact: 'high',
            metricTag: '-24% Price Sensitivity'
          },
          {
            id: 'h2',
            x: 48,
            y: 65,
            title: 'Cross-Sell Ladder ("Add ₹51 for Free Delivery")',
            description: 'Progress bar fills up dynamically. 68% of users add high-margin impulse items (chocolates, mints) to avoid a ₹25 fee.',
            impact: 'high',
            metricTag: '+₹51 Basket Lift'
          }
        ],
        keyTakeaway: 'Hyper-local quick commerce does not sell groceries; it sells the illusion of time reclamation.',
        psychologyInsight: 'Hyperbolic Discounting: The immediate convenience of 8-minute delivery severely outweighs small unbundled fee penalties in the consumer mind.'
      },
      {
        id: 'z-s2',
        stepNumber: 2,
        screenTitle: 'The Free Delivery Progress Bar Paradox',
        appStateDescription: 'Cart total is ₹149. The UI highlights that adding ₹51 avoids the ₹35 surge delivery charge.',
        deviceType: 'mobile',
        screenMockType: 'zepto_cart',
        bubbles: [
          {
            id: 'b3',
            character: 'Yash',
            position: 'top-right',
            type: 'speech',
            text: 'Here is the classic "Spend ₹51 to save ₹35" psychological reversal. The user feels mathematically smart spending more.'
          },
          {
            id: 'b4',
            character: 'User',
            position: 'bottom-left',
            type: 'speech',
            text: 'Fine, I will just toss in this ₹60 dark chocolate bar. It is basically free anyway, right?'
          }
        ],
        hotspots: [
          {
            id: 'h3',
            x: 50,
            y: 52,
            title: 'Visual Completion Bias',
            description: 'A glowing progress bar at 74% completion triggers the Zeigarnik Effect: humans feel cognitive tension leaving an unfinished bar.',
            impact: 'high',
            metricTag: '74% Completion Urge'
          }
        ],
        keyTakeaway: 'Progress bars convert passive browsing into an active completion quest with positive dopamine rewards.',
        psychologyInsight: 'Mental Accounting: Customers bucket delivery charges as "wasted loss" while bucketing snacks as "gained value".'
      },
      {
        id: 'z-s3',
        stepNumber: 3,
        screenTitle: 'The Bill Breakdown: The ₹16 Handling Fee Surprise',
        appStateDescription: 'Proceeding to Payment sheet. Subtotal, Handling Fee, Night Surge, and Rain Fee unbundled.',
        deviceType: 'mobile',
        screenMockType: 'zepto_checkout',
        bubbles: [
          {
            id: 'b5',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'Drip pricing at its peak. Small ancillary fees are masked until the customer has already committed emotionally to the purchase.'
          },
          {
            id: 'b6',
            character: 'User',
            position: 'bottom-right',
            type: 'thought',
            text: 'Wait, ₹16 handling fee + ₹5 tech fee? I already added the extra item... too tired to back out now.'
          }
        ],
        hotspots: [
          {
            id: 'h4',
            x: 82,
            y: 42,
            title: 'Collapsible Fee Accordion',
            description: 'Grouped under "Taxes & charges" or small muted font to minimize visual weight until thumb clicks Pay.',
            impact: 'medium',
            metricTag: 'Unbundled Margin'
          }
        ],
        keyTakeaway: 'Sunk Cost Fallacy: Once an order has been curated over 3 minutes, customers will tolerate up to 8% fee creep to avoid starting over.',
        psychologyInsight: 'Loss Aversion vs Sunk Cost: Backing out feels like wasting the last 5 minutes of cognitive energy.'
      },
      {
        id: 'z-s4',
        stepNumber: 4,
        screenTitle: 'The Default ₹30 Rider Tip Architecture',
        appStateDescription: 'Pre-selected ₹30 tip box with smiling delivery partner illustration and rain icon.',
        deviceType: 'mobile',
        screenMockType: 'zepto_checkout',
        bubbles: [
          {
            id: 'b7',
            character: 'Yash',
            position: 'top-right',
            type: 'speech',
            text: 'Pre-selected defaults exploit social guilt. Opting out requires manual friction and conscious deselecting of compassion.'
          },
          {
            id: 'b8',
            character: 'User',
            position: 'bottom-left',
            type: 'thought',
            text: 'It says "Heavy Rain in Your Area". Deselecting the tip makes me feel like a bad human.'
          }
        ],
        hotspots: [
          {
            id: 'h5',
            x: 60,
            y: 72,
            title: 'Pre-checked ₹30 Button',
            description: 'Default architecture lifts rider tip participation by 420% compared to empty open fields.',
            impact: 'high',
            metricTag: '4.2x Tip Rate'
          }
        ],
        keyTakeaway: 'Defaults are the strongest nudges in behavioral economics because humans choose the path of least resistance.',
        psychologyInsight: 'Social Desirability Bias: Users adhere to defaults when opting out triggers moral self-judgment.'
      },
      {
        id: 'z-s5',
        stepNumber: 5,
        screenTitle: 'The 1-Swipe UPI Pay Wall (Frictionless Closure)',
        appStateDescription: 'Slide to pay or direct UPI intent launch without entering OTP or re-authenticating.',
        deviceType: 'mobile',
        screenMockType: 'zepto_checkout',
        bubbles: [
          {
            id: 'b9',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'The final swipe. Seamless UPI AutoPay and fast-track intents compress the pain of paying into a single tactile gesture.'
          },
          {
            id: 'b10',
            character: 'User',
            position: 'bottom-right',
            type: 'speech',
            text: 'Swiped! And just like that, ₹275 gone in under 60 seconds.'
          }
        ],
        hotspots: [
          {
            id: 'h6',
            x: 50,
            y: 88,
            title: 'Swipe-to-Order Slider',
            description: 'Physical friction of sliding prevents accidental taps while giving users a sense of finality.',
            impact: 'high',
            metricTag: '98.8% Success'
          }
        ],
        keyTakeaway: 'The shorter the latency between impulse and checkout confirmation, the lower the regret rate before order packing begins.',
        psychologyInsight: 'Pain of Paying: Decoupling physical cash and one-tap biometric validation abstracts away the reality of expenditure.'
      }
    ]
  },

  // 9. CRED TEARDOWN (COMING SOON)
  {
    id: 'cs-cred-upi-gamification',
    slug: 'cred-upi-gamification-dilemma',
    title: 'The Casino-fication of Everyday Payments: Where Did My UPI Go?',
    subtitle: 'When jackpots, coins, and 8-second spin wheels turn a 2-second payment into an ad lottery.',
    company: 'CRED',
    companyLogo: 'CR',
    format: 'interactive_comic',
    availability: 'coming_soon',
    accentColor: '#161616',
    readingTimeMinutes: 4,
    slidesCount: 0,
    publishedAt: 'April 2026',
    category: 'FinTech & Consumer Psychology',
    tags: ['CRED', 'Gamification', 'Cognitive Overload', 'UPI 2.0', 'Coming Soon'],
    keyMetrics: [
      { value: '8.4 sec', label: 'Average Post-Payment Wait' },
      { value: '0.002%', label: 'Jackpot Odds' },
      { value: 'High', label: 'Feature Fatigue' }
    ],
    principlesCovered: [
      'Variable Reward Schedules (B.F. Skinner)',
      'Cognitive Fatigue',
      'The Cost of Free Rewards'
    ],
    executiveSummary: 'CRED pioneered ultra-clean luxury minimalism for high-credit-score Indians. Today, its post-payment flow feels more like a Las Vegas slot machine. This upcoming teardown analyzes how gamification starts as an activation miracle and ends as an engagement tax.',
    authorRole: 'Product & Behavioral Teardown',
    slides: []
  }
];
