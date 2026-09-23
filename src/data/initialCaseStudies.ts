import { InteractiveCaseStudy } from '../types';

export const INITIAL_CASE_STUDIES: InteractiveCaseStudy[] = [
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
  {
    id: 'cs-pg-supply-chain-b2b',
    slug: 'pg-distributor-b2b-deck',
    title: 'Digitizing Kirana Distribution: From WhatsApp Scrambles to Real-Time Fill Rates',
    subtitle: 'A full 12-slide strategy presentation deck on transforming P&G India’s distributor and merchant ordering workflows.',
    company: 'Procter & Gamble (P&G)',
    companyLogo: 'PG',
    format: 'slide_deck',
    availability: 'available',
    accentColor: '#161616',
    readingTimeMinutes: 6,
    slidesCount: 6,
    publishedAt: 'January 2026',
    category: 'B2B & Supply Chain',
    tags: ['B2B Product', 'Supply Chain', 'Kirana Tech', 'Order Fill Rate', 'Strategy Deck'],
    keyMetrics: [
      { value: '94.2%', label: 'Target Order Fill Rate' },
      { value: '-65%', label: 'Stockout Lead Time' },
      { value: '₹140 Cr', label: 'Addressable Distributor GMV' }
    ],
    principlesCovered: [
      'Asynchronous B2B Workflows',
      'The Zero-Training UI Law',
      'System Architecture in Tier-2 India'
    ],
    executiveSummary: 'Tier-2 and Tier-3 Indian Kirana store owners cannot afford complex enterprise software. This deck outlines the product architecture, WhatsApp-first ordering bots, and distributor dispatch routing designed to replace manual pen-and-paper ordering for P&G fast-moving consumer goods.',
    authorRole: 'Supply Chain & Product Strategist',
    deckPdfUrl: 'https://docs.google.com/presentation/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit?usp=sharing',
    downloadDeckUrl: '#',
    deckSlides: [
      {
        id: 'deck-1',
        slideNumber: 1,
        title: 'Executive Problem: The Broken Kirana Ordering Pipeline',
        subtitle: 'Why 42% of P&G product stockouts in Tier-2 districts stem from order transcription delays rather than factory shortages.',
        contentHighlights: [
          'Kirana store owners place orders via voice notes, handwritten paper chits, and fragmented phone calls to sales reps.',
          'Distributor clerks spend 4.5 hours daily manually entering paper slips into legacy ERPs.',
          'Stockouts happen on high-margin SKUs (Pampers, Ariel) because inventory visibility is delayed by 36 hours.'
        ],
        metricsGrid: [
          { label: 'Daily Data Entry Burn', value: '4.5 hrs / distributor' },
          { label: 'Unfulfilled Demand Loss', value: '7.8% of GMV' }
        ],
        notes: 'Field research conducted across 24 retail stores and 3 distributor hubs in western and northern districts.'
      },
      {
        id: 'deck-2',
        slideNumber: 2,
        title: 'The Persona Reality: Ashok (Kirana Owner, 46)',
        subtitle: 'Why standalone B2B apps fail: Zero time, fragmented memory, and extreme WhatsApp fluency.',
        contentHighlights: [
          'Ashok manages 800 customers daily with 1 helper; he cannot navigate a 5-step desktop catalog.',
          'He places replenishment orders between 10:30 PM and 11:15 PM after shuttering his shop.',
          'He trusts WhatsApp voice notes and vernacular text over any third-party app with login passwords.'
        ],
        frameworkDiagramTitle: 'The Merchant Operational Friction Loop',
        notes: 'Any solution requiring username/password or downloading a 50MB app will experience >80% churn in week 2.'
      },
      {
        id: 'deck-3',
        slideNumber: 3,
        title: 'Solution Architecture: The Headless WhatsApp B2B Engine',
        subtitle: 'Marrying WhatsApp Business API with real-time Distributor Inventory Sync.',
        contentHighlights: [
          'Kirana merchant sends voice note: "Send 4 cartons Whisper Choice and 2 boxes Gillette Mach3".',
          'AI Speech-to-SKU engine extracts exact product codes and validates against live distributor warehouse stock.',
          'Merchant receives instant 1-tap confirmation with payment tenure details and estimated dispatch slot.'
        ],
        metricsGrid: [
          { label: 'Order Placement Time', value: '< 15 seconds' },
          { label: 'SKU Parsing Accuracy', value: '98.4%' }
        ],
        notes: 'Zero training needed for store owners. Runs directly in their primary communication channel.'
      },
      {
        id: 'deck-4',
        slideNumber: 4,
        title: 'Distributor Dispatch & Route Density Optimizer',
        subtitle: 'Clustering orders to turn 3 erratic delivery runs into 1 planned milk run.',
        contentHighlights: [
          'Automated batching of Kirana drop-offs within a 4 km delivery geofence.',
          'Dynamic delivery slot assignment based on truck payload capacity and real-time city traffic.',
          'Live Proof of Delivery (PoD) with digital signature and UPI QR code collection at doorstep.'
        ],
        metricsGrid: [
          { label: 'Fuel & Fleet Cost', value: '-22% reduction' },
          { label: 'Daily Deliveries / Van', value: '+35% throughput' }
        ],
        notes: 'Field tested against standard hub-and-spoke distributor topologies.'
      },
      {
        id: 'deck-5',
        slideNumber: 5,
        title: 'Financial Model: Unit Economics & Distributor ROI',
        subtitle: 'How a ₹12,000 monthly software fee generates ₹78,000 in recovered lost sales per distributor.',
        contentHighlights: [
          'Reduction in order entry headcount costs: ₹18,000/month saved.',
          'Stockout reduction captures ₹54,000/month in previously leaked high-margin sales.',
          'Payback period for distributor onboarding: 1.4 months.'
        ],
        metricsGrid: [
          { label: 'Payback Period', value: '1.4 Months' },
          { label: 'Net Annual Value / Dist.', value: '₹7.2 Lakhs' }
        ],
        notes: 'Conservative estimate assuming only 60% merchant digital adoption in Month 1.'
      },
      {
        id: 'deck-6',
        slideNumber: 6,
        title: 'Rollout Roadmap: Pilot, Phased Expansion & Milestones',
        subtitle: '12-week deployment timeline across 5 Tier-2 clusters.',
        contentHighlights: [
          'Weeks 1-3: WhatsApp bot integration with distributor ERPs (Tally, Busy).',
          'Weeks 4-6: Closed pilot with 100 beta Kirana merchants; latency stress-testing.',
          'Weeks 7-12: Full cluster rollout; training distributor sales reps on exception handling.'
        ],
        metricsGrid: [
          { label: 'Phase 1 Target', value: '500 Kirana Stores' },
          { label: 'Target Fill Rate', value: '95% On-Time' }
        ],
        notes: 'Presented as final strategic recommendation for national FMCG distribution.'
      }
    ]
  },
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
