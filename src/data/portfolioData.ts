import { ExperienceItem, ProductCaseStudy, SubstackPost } from '../types';
import { LIVE_SUBSTACK_POSTS } from './substackArticles';

export const PERSONAL_INFO = {
  name: "Yash Patil",
  headline: "Product and Strategy • IIT Kharagpur",
  subheadline: "Interested in the decisions behind products: using user behaviour, data, business context, and experimentation.",
  bio: "I’m interested in the decisions behind products: using user behaviour, data, business context, and experimentation to understand what is happening, why it is happening, and what to do next.",
  institution: "IIT Kharagpur",
  location: "Kharagpur / Pune, India",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  degree: "B.S. (Hons.) Applied Geology (2023 to 2027)",
  email: "yashpatil303022@gmail.com",
  academicEmail: "yashpatil@kgpian.iitkgp.ac.in",
  linkedin: "https://www.linkedin.com/in/yash-patil6010/",
  github: "https://github.com/yashpatil",
  twitter: "https://x.com/patilyash",
  defaultSubstackHandle: "patilyash",
  substackUrl: "https://patilyash.substack.com",
  roles: [
    "Product Management",
    "Consumer Products",
    "Data and Analytics",
    "Product Strategy"
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "bajaj-finance",
    company: "Bajaj Finance",
    role: "Product Management Intern, Consumer AI",
    location: "Pune, India",
    period: "Jun 2026 to Jul 2026",
    domain: "Consumer AI and Conversational Banking",
    summary: "Led product discovery and user journey optimization for the customer conversational assistant at Bajaj Finance.",
    bullets: [
      "Analyzed user drop-offs across 45,000 sessions, mapping where users abandoned the funnel between loan discovery and account disbursal.",
      "Redesigned conversational prompts and contextual action suggestions to guide users directly through verification steps, improving journey completion.",
      "Defined product telemetry and success metrics to track drop-off states and assess conversion impact across customer segments."
    ],
    metrics: [
      { value: "63%", label: "Drop-Off Pinpointed" },
      { value: "45K+", label: "Sessions Analyzed" },
      { value: "10%+", label: "Targeted Conversion Lift" }
    ],
    tools: ["Product Discovery", "Funnel Analytics", "Telemetry", "User Journeys", "Conversational AI"]
  },
  {
    id: "wize",
    company: "Wize",
    role: "Product Management Intern",
    location: "Bangalore, India",
    period: "Aug 2024 to Jan 2025",
    domain: "EdTech and Career Platforms",
    summary: "Built features focused on student engagement, workflow adoption, and user behavior analytics.",
    bullets: [
      "Launched interactive resume feedback and mock interview tools, increasing active session engagement and adoption across career preparation flows.",
      "Ran experimentation cycles and cohort retention analyses to identify where users dropped off and refine onboarding paths."
    ],
    metrics: [
      { value: "+50%", label: "Engagement Increase" },
      { value: "+35%", label: "Adoption Uplift" },
      { value: "4", label: "Experiments Run" }
    ],
    tools: ["A/B Testing", "Wireframing", "Retention Analysis", "Feature Scoping", "User Feedback"]
  },
  {
    id: "hicounselor",
    company: "HiCounselor",
    role: "Product Strategy Intern",
    location: "Remote (USA)",
    period: "Mar 2025 to May 2025",
    domain: "Growth Funnels and Pricing Strategy",
    summary: "Analyzed platform growth funnels and modeled pricing strategy across candidate segments.",
    bullets: [
      "Evaluated conversion bottlenecks across core candidate funnels and implemented workflow improvements based on session engagement data.",
      "Analyzed price elasticity, discount structures, and product mix using SQL and Python to model revenue impact across pricing tiers."
    ],
    metrics: [
      { value: "+18%", label: "Funnel Conversion" },
      { value: "₹1.5 Cr", label: "Projected Revenue Lift" },
      { value: "4", label: "Optimized Funnels" }
    ],
    tools: ["Python", "SQL", "Funnel Analytics", "Pricing Strategy", "Product Mix Modeling"]
  },
  {
    id: "crisil",
    company: "CRISIL",
    role: "Financial Analysis and Statistics Intern",
    location: "Mumbai, India",
    period: "May 2025 to Jul 2025",
    domain: "Infrastructure Feasibility and Financial Modeling",
    summary: "Built financial models and operational feasibility analyses for major infrastructure investments.",
    bullets: [
      "Evaluated project viability and breakeven economics for large public investments using 10-year operating and capital cash flow projections.",
      "Modeled downside risk scenarios by stress testing project assumptions across occupancy rates, pricing structures, and event schedules.",
      "Analyzed capital deployment schedules and balance sheet requirements for regional transport projects."
    ],
    metrics: [
      { value: "₹983 Cr", label: "Stadium Model" },
      { value: "₹16K Cr", label: "Airport Analysis" },
      { value: "25%", label: "Downside Variance Model" }
    ],
    tools: ["Financial Modeling", "Scenario Stress Testing", "Cash Flow Forecasting", "Risk Modeling"]
  },
  {
    id: "greynorth",
    company: "Greynorth Consulting",
    role: "Co-Founder, Growth and Strategy Consulting",
    location: "India",
    period: "May 2025 to Present",
    domain: "Growth and Retail Operations",
    summary: "Advised consumer businesses on growth strategy, customer retention, and retail operations.",
    bullets: [
      "Identified footfall and ordering friction for a multi-location cafe chain, driving improvements in order volume and average order value.",
      "Restructured digital menus, item bundles, and dine-in versus delivery workflows to improve repeat visits and order fulfillment."
    ],
    metrics: [
      { value: "+45%", label: "Revenue Growth" },
      { value: "+12%", label: "AOV Uplift" },
      { value: "+15%", label: "Repeat Order Rate" }
    ],
    tools: ["Growth Strategy", "AOV Optimization", "Pricing Tiers", "Retail Operations", "Retention Loops"]
  },
  {
    id: "harvard-analytics",
    company: "Harvard John A. Paulson (Prof. Vijay Reddy)",
    role: "Research Data Analytics Intern",
    location: "Remote",
    period: "May 2024 to Jul 2024",
    domain: "Large Scale Data Pipelines",
    summary: "Analyzed large academic research datasets to structure and validate data pipelines for publication classification.",
    bullets: [
      "Built cleaning, deduplication, and text processing pipelines across more than 100,000 research papers from 50 academic conferences.",
      "Improved classification accuracy through metadata tagging, feature extraction, and validation benchmarks."
    ],
    metrics: [
      { value: "100K+", label: "Papers Analyzed" },
      { value: "90%", label: "F1 Score Achieved" },
      { value: "50+", label: "Conferences" }
    ],
    tools: ["Python", "Pandas", "Feature Engineering", "Data Normalization"]
  }
];

export const PRODUCT_CASE_STUDIES: ProductCaseStudy[] = [
  {
    id: "cs-deutsche-telekom",
    title: "Deutsche Telekom: Consumer Payments Strategy",
    subtitle: "Repositioning MagentaCard and payzy into a Recurring Spend Engine",
    competition: "General Championship: Gold (Rank 1 out of 23 Teams)",
    award: "Offered Pre-Placement Interview • 1st Place Gold",
    category: "FinTech and Growth Strategy",
    role: "Product Lead and Business Modeler",
    period: "Feb 2026 to Mar 2026",
    overview: "Deutsche Telekom launched payzy and a Visa-backed MagentaCard, but user adoption and repeat transactions in Germany lagged expectations. Our team engineered a product and go-to-market strategy that shifted MagentaCard from competing directly with primary checking accounts to functioning as an automated recurring payment layer for Telekom's 10M reachable subscriber base.",
    theProblem: "German consumers show strong inertia toward their primary bank accounts. Competing head-on for primary account status created high friction, low activation, and steep drop-off during identity verification. Telekom needed an adoption model tied to its core assets: mobile, broadband, and recurring utility bills.",
    marketAndUserInsights: [
      {
        stat: "10M+",
        label: "Reachable Base",
        description: "Existing subscribers interacting with the MeinMagenta application monthly for billing touchpoints."
      },
      {
        stat: "55%",
        label: "Target Recurring Share",
        description: "Recurring household spend representing steady, low-churn transactional volume."
      },
      {
        stat: "10.4x",
        label: "LTV to CAC Ratio",
        description: "Leveraging in-app customer touchpoints yields low acquisition cost against recurring subscriber lifetime value."
      }
    ],
    strategicFramework: {
      frameworkName: "Context-Driven Recurring Payment Layer",
      summary: "Three-phase product shift: Discovery in MeinMagenta, clean execution in payzy, and default utility settlement on MagentaCard.",
      pillars: [
        {
          title: "Direct Bill Offsets",
          description: "Aligning incentives with consumer utility preferences. Replacing complex point schemes with transparent monthly telecom bill credits."
        },
        {
          title: "Clear Separation of Concerns",
          description: "MeinMagenta handles discovery and permissions, while the regulated banking partner manages the payment ledger."
        },
        {
          title: "Habitual Repeat Loops",
          description: "Automated bill payments trigger instant first value, cycling directly into data rewards and subscription offsets."
        }
      ]
    },
    productSolutions: [
      {
        phase: "Phase 1",
        title: "Simplified Activation and First Transaction Nudge",
        description: "Reduced onboarding friction with pre-verified subscriber information and instant virtual cards. Introduced direct bill savings for first automated payments.",
        keyDeliverables: [
          "Direct card activation inside MeinMagenta",
          "Automated bill payment cashback integration",
          "Virtual MagentaCard issued within minutes"
        ]
      },
      {
        phase: "Phase 2",
        title: "Wallet and Household Subscription Management",
        description: "Introduced smart subscription tracking to detect overlapping household entertainment plans, helping families bundle services and save monthly.",
        keyDeliverables: [
          "Family account budgeting view",
          "Predictive bill reminders with automatic savings",
          "Subscription tracker detecting duplicate accounts"
        ]
      },
      {
        phase: "Phase 3",
        title: "High-Frequency Retail Partnerships",
        description: "Partnered with grocery and everyday retail merchants to establish consistent card usage beyond telecom bills.",
        keyDeliverables: [
          "Partnerships with major national retailers",
          "Tiered loyalty perks for active users",
          "Shared family expense settlement"
        ]
      }
    ],
    unitEconomicsAndImpact: [
      {
        metric: "€1.85B",
        label: "Annual Recurring Volume",
        description: "Projected gross payment volume across 800,000 active users spending on recurring household needs.",
        detail: "Projected annual gross payment volume across 800K activated users spending €192.5 recurring monthly."
      },
      {
        metric: "10.4x",
        label: "LTV to CAC Efficiency",
        description: "Customer lifetime value relative to blended acquisition costs.",
        detail: "€73 customer LTV versus €7 blended customer acquisition cost, achieving full payback in 3.9 months."
      },
      {
        metric: "8%",
        label: "Target Activation Rate",
        description: "Conversion of reachable subscriber base with strong 30-day repeat payment rates.",
        detail: "Conservative 8% conversion of reachable 10M MeinMagenta base with >50% 30-day repeat payment rate."
      }
    ],
    tags: ["FinTech", "Strategy", "Unit Economics", "Retention", "Payments"]
  },
  {
    id: "cs-ather-energy",
    title: "Ather Energy: Turnaround and Profitability Roadmap",
    subtitle: "Solving Operating Leverage and Balancing Volume with Margins",
    competition: "Indian Case Challenge: Kshitij Business Club",
    award: "National Finalist",
    category: "Corporate Strategy and Product Portfolio",
    role: "Strategy and Financial Architect",
    period: "Jan 2026",
    overview: "Ather Energy was expanding revenue rapidly yet faced persistent operating losses due to high fixed R&D overhead and capital tied up in proprietary charging grids. Our team formulated a strategic roadmap to convert fixed hardware overhead into software, platform partnerships, and recurring service margins.",
    theProblem: "Unlike traditional auto manufacturers, electric two-wheeler startups face steep upfront R&D without the benefit of legacy combustion sales volume. Capital expenditure in charging networks and company-owned retail locations created an ongoing cost drag that volume alone was not solving.",
    marketAndUserInsights: [
      {
        stat: "19%",
        label: "Gross Margin",
        description: "Improving manufacturing unit economics proved product-market fit, but operating overhead remained high."
      },
      {
        stat: "84%",
        label: "Mass Market Share",
        description: "The electric two-wheeler market in India is heavily concentrated in commuter and family segments."
      },
      {
        stat: "High Cost",
        label: "Charging Infrastructure",
        description: "Proprietary grid maintenance consumed capital that was better deployed into software and distribution."
      }
    ],
    strategicFramework: {
      frameworkName: "Balanced Portfolio and Capital Discipline",
      summary: "Balancing high-volume family scooters with premium performance models, alongside software monetization and asset-light charging partnerships.",
      pillars: [
        {
          title: "Portfolio Segmentation",
          description: "The Rizta platform serves as the volume engine, while the 450X and Apex models protect premium brand positioning and higher unit margins."
        },
        {
          title: "Commercial Delivery Partnerships",
          description: "Partnering with gig delivery fleets through battery subscription models, generating recurring revenue and predictable utilization."
        },
        {
          title: "Software and Telematics",
          description: "Monetizing connected vehicle diagnostics through usage-based insurance partnerships and verified battery health certificates."
        }
      ]
    },
    productSolutions: [
      {
        phase: "Phase 1",
        title: "Capital Discipline and Network Sharing",
        description: "Transitioned proprietary charging stations to open public charging partnerships, reducing operating costs while expanding real-world charger access.",
        keyDeliverables: [
          "Asset-light dealership model lowering showroom capital costs",
          "Interoperable charging partnerships across public networks",
          "Component localization to reduce production costs"
        ]
      },
      {
        phase: "Phase 2",
        title: "Fleet Subscriptions and Commercial Adoption",
        description: "Introduced dedicated utility variants with battery subscription options, lowering upfront purchase barriers for delivery riders.",
        keyDeliverables: [
          "Dedicated commercial fleet management portal",
          "Predictable monthly battery subscription program",
          "Long-term commercial service agreements"
        ]
      },
      {
        phase: "Phase 3",
        title: "Connected Software and Battery Analytics",
        description: "Built telematics algorithms to assess battery degradation and riding patterns, offering transparent resale valuations for owners.",
        keyDeliverables: [
          "Battery health certification system for the pre-owned market",
          "Usage-based insurance integration with insurance providers",
          "Fleet maintenance scheduling alerts based on sensor data"
        ]
      }
    ],
    unitEconomicsAndImpact: [
      {
        metric: "EBITDA+",
        label: "Path to Breakeven",
        description: "Clear path to positive operating cash flow through cost discipline and scaled commuter volumes.",
        detail: "Turning corporate performance from operating losses toward sustainable positive cash flow."
      },
      {
        metric: "18 Mo",
        label: "Operational Timeline",
        description: "Targeted timeline to achieve operating cash flow neutrality across manufacturing lines.",
        detail: "Achieving positive Free Cash Flow and EBITDA breakeven through cost discipline and Rizta scaling."
      },
      {
        metric: "Asset-Light",
        label: "Charging Model",
        description: "Drastically reduced capital intensity through interoperable charging standards.",
        detail: "Asset-light manufacturing and software monetization lifting long-term ROIC past 20%."
      }
    ],
    tags: ["Strategy", "Product Portfolio", "Unit Economics", "Mobility", "Hardware"]
  },
  {
    id: "cs-zepto-teardown",
    title: "Zepto: Basket Size and Order Value Optimization",
    subtitle: "Product Strategy to Increase Average Order Value in Quick Commerce",
    competition: "Product Space: Season 10 Product Teardown",
    award: "Featured Product Teardown",
    category: "Product Strategy and Discovery",
    role: "Lead Product Strategist and User Researcher",
    period: "Nov 2024",
    overview: "Zepto proved the viability of 10-minute grocery delivery in India. However, average basket values lagged behind competitors because consumers treated the service primarily as an emergency pantry. We conducted user research across 100 shoppers, mapped the purchasing funnel, and designed discovery features to encourage higher-value orders without compromising delivery speed.",
    theProblem: "Rapid 10-minute delivery conditioned users into making small, frequent purchases. Many customers were unaware of higher-margin categories like specialty foods, personal care, and electronics, while cluttered navigation made building larger baskets tedious.",
    marketAndUserInsights: [
      {
        stat: "₹460 vs ₹607",
        label: "Order Value Gap",
        description: "Average order value difference between emergency shoppers and planned weekly basket builders."
      },
      {
        stat: "65%",
        label: "Category Blindness",
        description: "Shoppers surveyed who viewed the platform strictly as a milk and vegetables store."
      },
      {
        stat: "High Impact",
        label: "Smart Bundling",
        description: "Dynamic recipe packages and automated reorder lists emerged as the most requested improvements."
      }
    ],
    strategicFramework: {
      frameworkName: "Basket Expansion Funnel",
      summary: "Guiding emergency shoppers into high-value basket builders through contextual discovery, meal curation, and effortless reordering.",
      pillars: [
        {
          title: "Contextual Discovery",
          description: "Featuring relevant specialty products and seasonal essentials without cluttering the quick-access homepage."
        },
        {
          title: "Trust in High-Value Items",
          description: "Adding transparent return policies and verified product guarantees on items priced above ₹1,000."
        },
        {
          title: "Recipe and Meal Bundles",
          description: "One-tap ingredient packages that automatically add fresh produce, spices, and sauces into the cart together."
        }
      ]
    },
    productSolutions: [
      {
        phase: "Initiative 1",
        title: "Smart Bundling and High-Value Showcase",
        description: "Engineered targeted product pairings based on cart contents and typical cooking routines, surfacing natural additions at checkout.",
        keyDeliverables: [
          "Curated product pairings on the cart review screen",
          "Automated bundling of related grocery staples",
          "Specialty ingredient spotlights for weekend cooking"
        ]
      },
      {
        phase: "Initiative 2",
        title: "Saved Basket Reordering",
        description: "Eliminated search fatigue by enabling shoppers to save routine weekly orders and reorder their entire pantry list with a single confirmation.",
        keyDeliverables: [
          "One-tap repeat ordering for staple grocery lists",
          "Low-inventory reminders based on historical consumption cycles",
          "Personalized suggestions for pantry replenishment"
        ]
      },
      {
        phase: "Initiative 3",
        title: "Complete Meal Packages",
        description: "Curated dinner kits that combine raw ingredients with step-by-step instructions, expanding typical 2-item orders into 6-item baskets.",
        keyDeliverables: [
          "Recipe-to-cart integration with adjustable portion sizes",
          "Health and dietary filters for meal packages",
          "Seasonal and festive cooking packages"
        ]
      }
    ],
    unitEconomicsAndImpact: [
      {
        metric: "₹600+",
        label: "Target Basket Value",
        description: "Targeted increase in average order value through curated packages and improved category discovery.",
        detail: "Projected 30% increase in basket size from ₹460 to ₹600 through bundling and high-value product discovery."
      },
      {
        metric: "+15%",
        label: "Repeat Order Rate",
        description: "Improved retention through saved staple lists and recurring pantry replenishment.",
        detail: "Boosted user retention by eliminating search friction through favorites lists and meal kits."
      },
      {
        metric: "Strong",
        label: "Margin Growth",
        description: "Higher contribution margins from multi-item baskets and specialty grocery sales.",
        detail: "Capitalizing on the Indian quick commerce boom projected to reach $13.74B SOM by 2025."
      }
    ],
    tags: ["Quick Commerce", "Product Discovery", "Basket Size", "User Research"]
  },
  {
    id: "cs-fasal-setu",
    title: "Fasal Setu: Decision Support for Agriculture",
    subtitle: "Translating Weather and Agronomic Data into Clear Farm Actions",
    competition: "Capital One Launchpad Hackathon 2025",
    award: "Hackathon Project",
    category: "Applied AI and Agriculture",
    role: "Product Architect and System Design",
    period: "Sep 2025",
    overview: "Smallholder farmers in India manage small plots under severe climate uncertainty around sowing dates, irrigation, and mandi wholesale prices. Standard language models often produce generic or hallucinated agricultural advice. We built Fasal Setu: an advisory system that pairs natural language understanding with verified, rules-based agronomic logic.",
    theProblem: "Farmers need reliable, hyper-local advice on basic mobile devices. Existing solutions provide broad district forecasts that ignore crop growth stages, soil moisture conditions, and verified government agricultural advisories.",
    marketAndUserInsights: [
      {
        stat: "10,000+",
        label: "Target Farmers",
        description: "Smallholder farmers managing 1 to 5 acre plots vulnerable to unpredictable rainfall."
      },
      {
        stat: "Zero Tolerance",
        label: "Hallucination Risk",
        description: "Fertilizer dosages and irrigation decisions require deterministic agronomic verification."
      },
      {
        stat: "Instant",
        label: "Decision Support",
        description: "Voice and multilingual query processing reduces advisory wait times from days to seconds."
      }
    ],
    strategicFramework: {
      frameworkName: "Rules Engine Paired with Language Interface",
      summary: "Separating natural language understanding from critical agronomic calculations to guarantee safety and transparency.",
      pillars: [
        {
          title: "Query Understanding",
          description: "Converts farmer voice or text questions into structured parameters specifying crop, stage, and location."
        },
        {
          title: "Rules-Based Engine",
          description: "Executes verified agronomic rules from government agricultural datasets to calculate exact recommendations."
        },
        {
          title: "Localized Vernacular Output",
          description: "Translates verified calculations back into simple regional audio and text explanations without altering numeric values."
        }
      ]
    },
    productSolutions: [
      {
        phase: "Public View",
        title: "District Crop and Market Overview",
        description: "Provides farmers with real-time district wholesale crop prices, rainfall radar alerts, and government scheme updates.",
        keyDeliverables: [
          "Live mandi price tracking across 50 regional crops",
          "Short-term weather forecasts with frost and storm alerts",
          "Voice search in regional languages"
        ]
      },
      {
        phase: "Farm View",
        title: "Personalized Crop Calendar and Soil Guidance",
        description: "A tailored view tied to the farmer's specific sowing date, tracking crop maturity stages and recommending irrigation schedules.",
        keyDeliverables: [
          "Crop growth timeline from sowing to harvest",
          "Moisture-aware irrigation alerts based on local rainfall",
          "Pest diagnostic guidance with verified safety thresholds"
        ]
      }
    ],
    unitEconomicsAndImpact: [
      {
        metric: "100%",
        label: "Source Attribution",
        description: "Every agronomic recommendation is traceable to verified government research institutions.",
        detail: "Every single recommendation carries source attribution to official government agronomy datasets."
      },
      {
        metric: "Voice First",
        label: "Accessibility",
        description: "Audio-first design enabling farmers across literacy levels to receive reliable recommendations.",
        detail: "Offline-first progressive caching and voice support enabling broader access to high-grade advisory."
      },
      {
        metric: "15 to 20%",
        label: "Input Cost Savings",
        description: "Prevents over-irrigation and premature pesticide application through precise timing.",
        detail: "Preventing over-irrigation and premature fertilizer application through precision schedule notifications."
      }
    ],
    tags: ["Applied AI", "Agriculture", "Rules Engine", "Product Architecture"]
  },
  {
    id: "cs-bcg-indore",
    title: "Indore Urban and Economic Strategy",
    subtitle: "Public-Private Partnership Strategy for Sustainable Employment Growth",
    competition: "BCG Ace the Case: IIM Lucknow",
    award: "National Winner (1st out of 500+ Teams)",
    category: "Economic Strategy and Policy",
    role: "Strategy and Economic Modeling",
    period: "Jan 2025 to Mar 2025",
    overview: "India's tier-1 metropolitan cities face acute infrastructure strain, congestion, and air quality issues. At BCG Ace the Case, our team created a strategic growth blueprint for Indore, designing high-density industrial corridors and sustainable infrastructure using public-private partnership models.",
    theProblem: "How do you scale employment and industrial investment in a growing tier-2 city while proactively preventing the urban sprawl, traffic congestion, and infrastructure deficits that challenge existing megacities?",
    marketAndUserInsights: [
      {
        stat: "50+",
        label: "Modeled Indicators",
        description: "Benchmarked logistics, demographic, and economic indicators against peer regional cities."
      },
      {
        stat: "2.8x",
        label: "Employment Multiplier",
        description: "Each primary manufacturing and tech job generates secondary employment in logistics, services, and housing."
      },
      {
        stat: "Targeted",
        label: "Infrastructure Focus",
        description: "Prioritizing freight logistics corridors and clean energy networks to attract long-term enterprise capital."
      }
    ],
    strategicFramework: {
      frameworkName: "Urban Density and Industrial Corridors",
      summary: "Combining vertical industrial zones, dedicated freight access, and targeted incentives to build sustainable regional scale.",
      pillars: [
        {
          title: "Logistics and Freight Corridors",
          description: "Connecting manufacturing hubs directly to national freight networks to minimize turnaround times."
        },
        {
          title: "Clean Energy and Waste Recycling",
          description: "Integrating industrial bio-gas plants and solar transit networks to decouple growth from emissions."
        },
        {
          title: "Targeted Investment Incentives",
          description: "Incentive structures designed to attract advanced manufacturing and electronics assembly."
        }
      ]
    },
    productSolutions: [
      {
        phase: "Phase 1",
        title: "Core Infrastructure and Logistics Corridors",
        description: "Initiated single-window clearance for pharmaceutical and technical manufacturing, integrated with direct freight links.",
        keyDeliverables: [
          "Affordable housing integration near major industrial hubs",
          "Freight rail connector links to western ports",
          "Smart municipal transit planning"
        ]
      },
      {
        phase: "Phase 2",
        title: "Workforce Training and Sustainable Mobility",
        description: "Established vocational technical training centers and electric public transit links to connect suburban workers to industrial centers.",
        keyDeliverables: [
          "Technical training programs in green manufacturing",
          "Electric municipal bus fleet implementation",
          "Multi-modal logistics park integration"
        ]
      }
    ],
    unitEconomicsAndImpact: [
      {
        metric: "50,000",
        label: "Target Jobs",
        description: "Long-term employment target across technical manufacturing and logistics.",
        detail: "High-skill employment across IT, EV manufacturing, and pharmaceutical devices."
      },
      {
        metric: "₹12,000 Cr",
        label: "Economic Output",
        description: "Projected annual economic output generated across planned industrial corridors.",
        detail: "Projected annual gross output generated by 2030 through PPP-backed industrial zones."
      },
      {
        metric: "Dense",
        label: "Urban Planning",
        description: "Compact urban planning designed to prevent sprawling commutes.",
        detail: "Compact urban density optimization preventing unstructured sprawl and commuting congestion."
      }
    ],
    tags: ["Strategy", "Economic Policy", "Public Private Partnerships", "Urban Planning"]
  },
  {
    id: "cs-ey-techathon",
    title: "Fleet Reliability and Predictive Maintenance",
    subtitle: "Early Anomaly Detection and Service Scheduling for Commercial Fleets",
    competition: "EY Techathon (Mahindra and Mahindra)",
    award: "National Semi-Finalist (Top 61 out of 150,000+ Participants)",
    category: "Predictive Systems and Automotive",
    role: "Product Management and Systems Design",
    period: "Nov 2025 to Jan 2026",
    overview: "Modern commercial vehicles operate complex exhaust and emission systems. Component issues were often detected only hours before total breakdown, causing expensive highway roadside repairs and several days of lost vehicle uptime. We designed a predictive maintenance platform that detects component degradation weeks in advance.",
    theProblem: "Single-threshold telematics alerts struggle to distinguish temporary driving fluctuations from genuine component wear. Fleet owners experienced sudden vehicle breakdowns, while manufacturers faced high warranty costs due to late diagnosis.",
    marketAndUserInsights: [
      {
        stat: "15 to 30 Days",
        label: "Early Warning",
        description: "Enables service depot repairs during scheduled stops rather than emergency highway towing."
      },
      {
        stat: "60%",
        label: "Breakdown Reduction",
        description: "Early anomaly detection prevents catastrophic component lockups on the road."
      },
      {
        stat: "Substantial",
        label: "Cost Savings",
        description: "Planned depot maintenance costs significantly less than reactive highway replacements."
      }
    ],
    strategicFramework: {
      frameworkName: "Predictive Intelligence and Service Routing",
      summary: "Combining component degradation modeling with automated service depot scheduling along truck travel corridors.",
      pillars: [
        {
          title: "Component Degradation Modeling",
          description: "Regression models monitoring exhaust temperature, pressure differentials, and soot levels over time."
        },
        {
          title: "Root Cause Attribution",
          description: "Distinguishing between operator driving behavior and true supplier manufacturing defects."
        },
        {
          title: "Automated Service Scheduling",
          description: "Alerts the nearest authorized service center along the vehicle route and pre-orders replacement parts."
        }
      ]
    },
    productSolutions: [
      {
        phase: "Architecture",
        title: "Telemetry Ingestion to Closed-Loop Repair",
        description: "Sensor data from the vehicle bus is processed through anomaly detection models, automatically notifying fleet managers when components require inspection.",
        keyDeliverables: [
          "Fleet health dashboard for logistics managers",
          "Diagnostic traces for service technicians",
          "Automated parts order triggers based on wear rates"
        ]
      }
    ],
    unitEconomicsAndImpact: [
      {
        metric: "60%",
        label: "Fewer Breakdowns",
        description: "Proactive service interventions preventing roadside vehicle breakdowns.",
        detail: "Proactive service interventions eliminating high-cost en-route breakdown incidents."
      },
      {
        metric: "High ROI",
        label: "Cost Advantage",
        description: "Preventive maintenance delivers large savings compared to emergency towing and replacement.",
        detail: "Preventive servicing vs reactive replacement generates strong financial returns."
      },
      {
        metric: "Fast",
        label: "Defect Detection",
        description: "Identifies supplier component defects significantly faster than lagging warranty claims.",
        detail: "Detects supplier batch issues quickly compared to months of lagging claims."
      }
    ],
    tags: ["Predictive Maintenance", "IoT Telematics", "Fleet Operations", "Systems"]
  }
];

export const SUBSTACK_POSTS: SubstackPost[] = [
  ...LIVE_SUBSTACK_POSTS,
  {
    id: "sub-pm-01",
    title: "The Architecture of Conversational Products: Why Bots Fail Without Clear Decision Paths",
    slug: "architecture-of-conversational-products",
    link: "https://patilyash.substack.com",
    pubDate: "2025-02-20",
    formattedDate: "Feb 20, 2025",
    readingTimeMinutes: 6,
    isFeatured: false,
    tags: ["Consumer Products", "Product Management", "Conversational AI"],
    excerpt: "Analyzing 45,000 user sessions at Bajaj Finance revealed that conversational drop-offs happen not because language models fail, but because the interface lacks clear next action suggestions.",
    contentHtml: `
      <p class="lead text-lg leading-relaxed text-[#161616] mb-4">
        When teams launch conversational interfaces for financial journeys like loan applications or account upgrades, they often start by celebrating initial questions. But across 45,000 sessions, telemetry showed that over 60% of users dropped out between initial discovery and completion.
      </p>

      <h3 class="text-xl font-serif text-[#161616] mt-6 mb-3">1. The Friction of Open Text Boxes</h3>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        An empty text box asking "How can I help you today?" puts the entire cognitive burden on the user. In financial applications, customers rarely know the exact terms to use. When someone asks "Can I get funds today?", an unconstrained model often writes three paragraphs about interest rates rather than guiding them toward identity verification.
      </p>

      <h3 class="text-xl font-serif text-[#161616] mt-6 mb-3">2. Guiding Users with Contextual Action Chips</h3>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        The key improvement happened when we combined language understanding with clear, structured next steps. By identifying the most frequent drop-off points, we introduced contextual suggestion buttons like "Check Eligible Limit" or "Review Repayment Schedule" that appear based on where the customer is in the process.
      </p>

      <blockquote class="my-6 pl-4 border-l-2 border-[#161616] font-serif italic text-base text-[#161616]">
        "Conversational software in high-intent workflows is not an open chat room. It is a guided funnel designed to eliminate confusion at each decision point."
      </blockquote>

      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        Structuring conversations into clear decision states helped users move forward smoothly while giving product teams reliable telemetry to track where friction occurs.
      </p>
    `
  },
  {
    id: "sub-pm-02",
    title: "Unit Economics in Consumer Payments: Lessons from Telecom Finance",
    slug: "unit-economics-consumer-payments",
    link: "https://patilyash.substack.com",
    pubDate: "2025-01-15",
    formattedDate: "Jan 15, 2025",
    readingTimeMinutes: 7,
    isFeatured: true,
    tags: ["FinTech", "Unit Economics", "Strategy"],
    excerpt: "Why do telecom operators struggle when launching credit cards? How a focus on recurring household bills creates sustainable unit economics without competing for primary bank accounts.",
    contentHtml: `
      <p class="lead text-lg leading-relaxed text-[#161616] mb-4">
        Every major mobile operator looks at its millions of subscribers and asks the same question: "Why not issue them a payment card and earn interchange revenue?" Yet across Europe and Asia, carrier payment initiatives frequently struggle to gain traction.
      </p>

      <h3 class="text-xl font-serif text-[#161616] mt-6 mb-3">Customer Inertia in Primary Banking</h3>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        Expecting a customer to switch their primary salary account to a telecom brand faces immense behavioral friction. The customer acquisition cost required to force a primary bank change is simply too high.
      </p>

      <h3 class="text-xl font-serif text-[#161616] mt-6 mb-3">Positioning for Recurring Spend</h3>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        A more practical strategy positions the card as the default method for recurring monthly household payments. When card usage directly earns bill credits on the customer's mobile or fiber plan, the financial value is straightforward and immediate.
      </p>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        By engaging existing subscribers through their account apps, customer acquisition costs remain modest, yielding healthy unit economics and lasting retention.
      </p>
    `
  },
  {
    id: "sub-pm-03",
    title: "Quick Commerce Basket Dynamics: Balancing Speed and Order Value",
    slug: "quick-commerce-basket-dynamics",
    link: "https://patilyash.substack.com",
    pubDate: "2024-12-05",
    formattedDate: "Dec 5, 2024",
    readingTimeMinutes: 5,
    isFeatured: false,
    tags: ["Quick Commerce", "Growth", "Product Discovery"],
    excerpt: "When customers know groceries arrive in 10 minutes, they stop stocking up. How quick commerce apps can use meal packages and saved staple lists to grow basket sizes.",
    contentHtml: `
      <p class="lead text-lg leading-relaxed text-[#161616] mb-4">
        Quick commerce mastered fast delivery, but it also conditioned users into ordering only immediate essentials. When groceries arrive in 10 minutes, the motivation to build a large weekly basket disappears.
      </p>

      <h3 class="text-xl font-serif text-[#161616] mt-6 mb-3">Moving Beyond Emergency Purchases</h3>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        User surveys showed that most consumers viewed quick commerce apps strictly for emergency pantry runs. Increasing order sizes requires making it easy to discover related products without slowing down checkout.
      </p>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        Curated meal kits provide a natural bridge. Searching for pasta can prompt a one-tap suggestion containing olive oil, fresh herbs, and parmesan, lifting a modest purchase into a fuller basket with minimal effort.
      </p>
    `
  },
  {
    id: "sub-pm-04",
    title: "Operating Leverage in Hardware: Lessons from Electric Mobility",
    slug: "operating-leverage-hardware-mobility",
    link: "https://patilyash.substack.com",
    pubDate: "2024-11-12",
    formattedDate: "Nov 12, 2024",
    readingTimeMinutes: 6,
    isFeatured: false,
    tags: ["Hardware and Software", "Corporate Strategy", "Mobility"],
    excerpt: "Why rapid vehicle sales volume does not automatically yield profitability, and how platform partnerships and software services create sustainable operating margins.",
    contentHtml: `
      <p class="lead text-lg leading-relaxed text-[#161616] mb-4">
        In hardware manufacturing, volume growth does not automatically guarantee profit. When fixed research costs and company-owned charging infrastructure outpace gross margins, scaling can accelerate cash burn rather than solve it.
      </p>
      <p class="mb-4 text-[#3C3B37] leading-relaxed">
        Achieving sustainable operating leverage requires moving from complete vertical ownership to asset-light partnerships. Opening charging networks to shared public standards and introducing commercial battery subscriptions converts unpredictable hardware sales into dependable recurring income.
      </p>
    `
  }
];

export const SKILLS_AND_TOOLKIT = {
  productManagement: [
    "Product Discovery and User Journey Mapping",
    "Product Requirements and Documentation",
    "Telemetry Metrics and Success Frameworks",
    "Experimentation and Funnel Optimization",
    "Feature Prioritization",
    "User Research and Feedback Analysis"
  ],
  quantitativeAndTech: [
    "Python (Pandas, NumPy)",
    "SQL (Queries, Joins, Cohort Aggregation)",
    "Financial and Unit Economics Modeling",
    "Data Pipelines and Feature Engineering",
    "Statistical Hypothesis Testing"
  ],
  toolsAndPlatforms: [
    "Figma",
    "Notion",
    "Linear",
    "Google Analytics",
    "Tableau and Power BI",
    "Postman"
  ]
};
