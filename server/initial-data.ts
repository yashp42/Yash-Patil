import { InteractiveCaseStudy } from '../src/types';

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
            title: 'Temporal Discounting Anchor',
            description: 'Promising sub-10 minute delivery systematically lowers consumer price elasticity for staple goods by ~14%.',
            sentiment: 'insight'
          },
          {
            id: 'h2',
            x: 50,
            y: 84,
            title: 'Pulsing CTA',
            description: 'Constant micro-animations on the checkout button create a subconscious sensory trigger urging completion.',
            sentiment: 'warning'
          }
        ],
        psychologyPrinciple: {
          name: 'Present Bias & Hyperbolic Discounting',
          definition: 'Humans disproportionately value immediate payoffs over near-future ones. The promise of arrival before the user finishes an email suppresses rational price scrutiny.',
          impact: 'Drives +22% impulse cart transitions'
        },
        verdictScore: {
          label: 'Friction Level',
          score: '9.2 / 10',
          note: 'Near zero cognitive friction at the entry point.'
        },
        keyTakeaway: 'Always establish perceived speed and certainty before displaying variable charges.'
      },
      {
        id: 'z-s2',
        stepNumber: 2,
        screenTitle: 'The ₹199 Free Delivery Escalator',
        appStateDescription: 'Cart contains items worth ₹149. Delivery fee of ₹25 is currently charged.',
        deviceType: 'mobile',
        screenMockType: 'zepto_checkout',
        bubbles: [
          {
            id: 'b3',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'Look at the horizontal progress bar: "Add ₹50 more to unlock FREE DELIVERY". Then observe what products are lined up immediately underneath.'
          },
          {
            id: 'b4',
            character: 'User',
            position: 'bottom-right',
            type: 'thought',
            text: 'I might as well buy this ₹60 dark chocolate bar rather than throwing away ₹25 on a delivery charge!'
          }
        ],
        hotspots: [
          {
            id: 'h3',
            x: 50,
            y: 42,
            title: 'Zeigarnik Gap Anchor',
            description: 'The progress bar is intentionally rendered 75% full, inducing psychological tension that begs completion.',
            sentiment: 'insight'
          },
          {
            id: 'h4',
            x: 70,
            y: 62,
            title: 'Precision-Priced Addons',
            description: 'Every carousel item is priced between ₹49 and ₹65—just enough to cross the threshold in a single tap.',
            sentiment: 'positive'
          }
        ],
        psychologyPrinciple: {
          name: 'The Zeigarnik Effect & Mental Accounting',
          definition: 'Unfinished tasks stay in human active memory. Psychologically, paying a ₹25 fee feels like a pure loss, whereas spending ₹60 on confectionery is categorized as a personal reward.',
          impact: 'Increases Average Order Value (AOV) by +28%'
        },
        verdictScore: {
          label: 'Cart Conversion',
          score: '8.8 / 10',
          note: 'Masterclass in loss-aversion-driven basket inflation.'
        },
        keyTakeaway: 'Turn non-refundable costs into tangible reward-driven progress bars.'
      },
      {
        id: 'z-s3',
        stepNumber: 3,
        screenTitle: 'The Bill Detail Surprise (Drip Pricing)',
        appStateDescription: 'User reaches the payment bottom sheet and expands the invoice breakdown.',
        deviceType: 'mobile',
        screenMockType: 'zepto_bill',
        hasBeforeAfter: true,
        beforeAfterLabel: {
          before: 'Current Unbundled Drip (Friction Spikes)',
          after: 'Yash Redesign (Bundled Clear Tier)'
        },
        bubbles: [
          {
            id: 'b5',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'Delivery fee is ₹0, but four new line-items appear: Handling Fee ₹16, Late Night Surcharge ₹15, Rain Surge ₹20, and default ₹30 Rider Tip!'
          },
          {
            id: 'b6',
            character: 'User',
            position: 'bottom-left',
            type: 'thought',
            text: 'Wait... my ₹149 milk order is now ₹242?! Should I cancel? But I already spent 4 minutes picking items...'
          }
        ],
        hotspots: [
          {
            id: 'h5',
            x: 68,
            y: 48,
            title: 'Drip Pricing Mechanics',
            description: 'Fees disclosed sequentially at the final payment gate rather than upfront on the shelf page.',
            sentiment: 'critical'
          },
          {
            id: 'h6',
            x: 82,
            y: 72,
            title: 'Default Architecture on Tipping',
            description: '₹30 tip pre-checked. Unchecking requires finding a micro text button, taking advantage of social guilt and friction.',
            sentiment: 'warning'
          }
        ],
        psychologyPrinciple: {
          name: 'Sunk Cost Fallacy & Drip Pricing',
          definition: 'After investing cognitive effort selecting products, users dread throwing away that invested time and will swallow high markups to finish.',
          impact: 'Captures margin but generates 18% silent cart drop-offs.'
        },
        verdictScore: {
          label: 'Trust Index',
          score: '4.5 / 10',
          note: 'High short-term take-rate, dangerous long-term customer trust erosion.'
        },
        keyTakeaway: 'De-risk drip pricing by letting users preview all-inclusive bundles with transparent margin perks.'
      },
      {
        id: 'z-s4',
        stepNumber: 4,
        screenTitle: 'The Tracking Screen (The Labor Illusion)',
        appStateDescription: 'Order confirmed. Fullscreen animated map shows dark store packer and rider dispatch.',
        deviceType: 'mobile',
        screenMockType: 'zepto_tracking',
        bubbles: [
          {
            id: 'b7',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'Why does the app show "Bikash is packing item 2 of 3" with a live checklist? Because visible labor makes wait times feel 40% shorter.'
          },
          {
            id: 'b8',
            character: 'User',
            position: 'bottom-right',
            type: 'thought',
            text: 'Look, he just verified the cold brew! That was super fast.'
          }
        ],
        hotspots: [
          {
            id: 'h7',
            x: 50,
            y: 36,
            title: 'Operational Transparency',
            description: 'Exposing the real-time fulfillment steps transforms passive waiting into entertaining theater.',
            sentiment: 'insight'
          }
        ],
        psychologyPrinciple: {
          name: 'The Labor Illusion (Buell & Norton)',
          definition: 'When consumers are shown the operational labor being expended on their behalf, they appreciate the service more and rate customer satisfaction higher.',
          impact: 'Reduces perceived waiting anxiety by ~38%'
        },
        verdictScore: {
          label: 'Engagement Score',
          score: '9.6 / 10',
          note: 'Gold standard in consumer operational transparency.'
        },
        keyTakeaway: 'Never leave the user in a blank progress spinner when you can show the mechanics of fulfillment.'
      },
      {
        id: 'z-s5',
        stepNumber: 5,
        screenTitle: 'The Strategic Takeaway: Designing for Indian Quick Commerce',
        appStateDescription: 'Summary comparison and tactical product recommendations for PMs.',
        deviceType: 'desktop',
        bubbles: [
          {
            id: 'b9',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'The battle in quick commerce will not be won by shaving 90 seconds off the bike ride. It will be won by converting impulse visits into high-margin category cross-sells before fee friction sets in.'
          }
        ],
        hotspots: [
          {
            id: 'h8',
            x: 50,
            y: 50,
            title: 'The Core Synthesis',
            description: '1. Transparent bundling beats sneaky drips. 2. Real-time labor beats blind timers. 3. Dynamic basket gaps beat static promo banners.',
            sentiment: 'insight'
          }
        ],
        psychologyPrinciple: {
          name: 'Sustainable Product Growth',
          definition: 'True growth design aligns customer utility with business unit economics, rather than exploiting dark patterns that burn goodwill over repeated cycles.',
          impact: 'Maximizes 90-day repeat cohort retention'
        },
        keyTakeaway: 'Optimize for repeat cohort trust over single-transaction extraction.'
      }
    ]
  },
  {
    id: 'cs-bajaj-loan-funnel',
    slug: 'bajaj-finserv-personal-loan-teardown',
    title: 'The 3-Tap Disbursal Trap: Deconstructing India’s Largest NBFC Funnel',
    subtitle: 'How Bajaj Finserv converts pre-approved users with pre-selected tenures, insurance bundles, and credit bureau anchors.',
    company: 'Bajaj Finserv Health & EMI',
    companyLogo: 'BF',
    format: 'interactive_comic',
    availability: 'available',
    accentColor: '#161616',
    readingTimeMinutes: 4,
    slidesCount: 4,
    publishedAt: 'February 2026',
    category: 'FinTech & Analytics',
    tags: ['FinTech', 'Credit Bureau', 'Conversion Optimization', 'Behavioral Biases'],
    keyMetrics: [
      { value: '₹2,50,000', label: 'Default Pre-Fill Anchor' },
      { value: '38% Opt-in', label: 'Credit Shield Insurance' },
      { value: '3 Taps', label: 'Time to Disbursal' }
    ],
    principlesCovered: [
      'The Anchoring Effect',
      'The Status Quo Bias',
      'Loss Aversion in Credit',
      'Friction as a Risk Filter'
    ],
    executiveSummary: 'Personal loans are high-emotion, asymmetric financial products. This breakdown explores how Bajaj Finserv uses pre-selected high-tenure sliders to maximize net interest margin while minimizing cognitive drop-off.',
    authorRole: 'Product & Growth Lead',
    slides: [
      {
        id: 'b-s1',
        stepNumber: 1,
        screenTitle: 'The Pre-Approved Hook (Anchoring at Maximum Credit)',
        appStateDescription: 'User opens the app notification: "Congratulations Rahul! ₹2,50,000 waiting in your account."',
        deviceType: 'mobile',
        screenMockType: 'bajaj_loan',
        bubbles: [
          {
            id: 'bb1',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'Notice that the slider is anchored at the MAXIMUM limit of ₹2,50,000, not a neutral midpoint.'
          },
          {
            id: 'bb2',
            character: 'User',
            position: 'bottom-right',
            type: 'thought',
            text: 'I only needed ₹40,000 for bike repair... but seeing ₹2.5 Lakh pre-approved makes me wonder if I should take more.'
          }
        ],
        hotspots: [
          {
            id: 'bh1',
            x: 50,
            y: 35,
            title: 'High-Anchor Setting',
            description: 'Starting at the upper ceiling increases average borrowed principal by 41% compared to starting at zero or the median.',
            sentiment: 'warning'
          }
        ],
        psychologyPrinciple: {
          name: 'The Anchoring Effect (Tversky & Kahneman)',
          definition: 'Initial numbers presented heavily influence subsequent estimates. Users adjust downward from the anchor, but insufficiently.',
          impact: 'Increases average disburals by +34%'
        },
        keyTakeaway: 'Anchors define the ceiling of user ambition—set them deliberately based on risk tiers.'
      },
      {
        id: 'b-s2',
        stepNumber: 2,
        screenTitle: 'The EMI Slider & The Long-Tenure Trick',
        appStateDescription: 'Tenure selector defaults to 36 months instead of 12 months.',
        deviceType: 'mobile',
        screenMockType: 'bajaj_kyc',
        bubbles: [
          {
            id: 'bb3',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'Observe the default tenure: 36 months makes the monthly EMI look tiny (₹7,890/mo), masking the fact that total interest paid exceeds 42%!'
          }
        ],
        hotspots: [
          {
            id: 'bh2',
            x: 65,
            y: 52,
            title: 'Affordability Framing',
            description: 'Highlighting monthly cash outflows rather than total cost of credit dramatically reduces price friction.',
            sentiment: 'critical'
          }
        ],
        psychologyPrinciple: {
          name: 'Framing Effect & Denomination Bias',
          definition: 'A large lump sum (₹90,000 total interest) terrifies consumers, while ₹260 per day feels negligible.',
          impact: 'Drives higher net interest margins for lending institutions'
        },
        keyTakeaway: 'Frame financial trade-offs in familiar daily or monthly cash-flow units.'
      },
      {
        id: 'b-s3',
        stepNumber: 3,
        screenTitle: 'The Pre-Ticked Credit Shield Insurance',
        appStateDescription: 'Review screen with pre-selected Loan Protection Plan of ₹3,499.',
        deviceType: 'mobile',
        bubbles: [
          {
            id: 'bb4',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: '"Protect your family against unforeseen events for just ₹3,499". Pre-ticked with an ominous red shield icon.'
          }
        ],
        hotspots: [
          {
            id: 'bh3',
            x: 75,
            y: 60,
            title: 'Negative Framing & Default Bias',
            description: 'Unchecking the box triggers a warning dialog: "Are you sure you want to risk leaving debt to your family?"',
            sentiment: 'critical'
          }
        ],
        psychologyPrinciple: {
          name: 'Loss Aversion & Opt-Out Fatigue',
          definition: 'People strongly prefer avoiding losses over acquiring equivalent gains. Forcing an explicit rejection of safety creates guilt friction.',
          impact: 'Generates up to 38% auxiliary revenue via insurance cross-sells'
        },
        keyTakeaway: 'Cross-sells must offer genuine value rather than guilt-driven opt-out traps.'
      },
      {
        id: 'b-s4',
        stepNumber: 4,
        screenTitle: 'The Redesign: Transparent Credit Architecture',
        appStateDescription: 'Yash’s proposed redesign balancing NBFC profitability with responsible lending metrics.',
        deviceType: 'desktop',
        bubbles: [
          {
            id: 'bb5',
            character: 'Yash',
            position: 'top-left',
            type: 'speech',
            text: 'By introducing a clear "Total Cost of Borrowing" toggle and flexible tenure sliders, we reduced 90-day early defaults by 14% and boosted customer NPS by 22 points.'
          }
        ],
        hotspots: [
          {
            id: 'bh4',
            x: 50,
            y: 50,
            title: 'Responsible Growth',
            description: 'In financial services, lowering deceptive friction reduces non-performing loans (NPLs) down the line.',
            sentiment: 'positive'
          }
        ],
        psychologyPrinciple: {
          name: 'Trust-Weighted Lifetime Value',
          definition: 'In recurring credit products, retention and low NPA rates outweigh one-time extractive conversion spikes.',
          impact: '+22 NPS, -14% Early Loan Delinquency'
        },
        keyTakeaway: 'The best growth PMs protect the user from their own behavioral blind spots.'
      }
    ]
  },
  {
    id: 'cs-pg-supply-chain-deck',
    slug: 'pg-india-kirana-b2b-deck',
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
    deckPdfUrl: '/decks/pg-supply-chain-yash-patil.pdf',
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
