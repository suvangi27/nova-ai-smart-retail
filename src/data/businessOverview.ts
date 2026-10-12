export interface BusinessDimension {
  number: number;
  title: string;
  tagline: string;
  keyMetric: string;
  executiveSummary: string;
  bulletPoints: string[];
  strategicImplication: string;
}

export const MBA_BUSINESS_DIMENSIONS: BusinessDimension[] = [
  {
    number: 1,
    title: 'Business & Monetization Model',
    tagline: 'Multi-stream revenue flywheel blending high-margin sales, algorithmic bundles, advertising, and recurring SaaS-style memberships.',
    keyMetric: '$148.9K Mo. Revenue | 44.8% Gross Margin',
    executiveSummary: 'Unlike legacy single-transaction storefronts, NOVA operates a diversified 4-pillar monetization model designed to maximize Customer Lifetime Value (LTV) and defensibility.',
    bulletPoints: [
      'Direct Product Sales: Premium lifestyle hardware, capsule fashion, and wellness goods with tiered 40-65% gross margins.',
      'Algorithmic Smart Bundles: Dynamic automated cross-selling delivering 15-22% consumer savings while surging Average Order Value (AOV) by +31% ($104.87 vs industry $80.00).',
      'Sponsored Brand Listings: Curated native placement for vetted sustainable partners (marked clearly with gold insignia), driving high-margin pure-profit ad income ($18.5K/mo).',
      'NOVA Plus Membership ($9.99/mo or $99/yr): Free carbon-neutral priority shipping, 10% instant member cashback, VIP early capsule access, producing predictable MRR ($14,185 ARR run-rate $170K+).'
    ],
    strategicImplication: 'Diversification insulates NOVA against wholesale supply shocks and ad privacy policy headwinds, creating compound cash flows.'
  },
  {
    number: 2,
    title: 'Target Customer Segments & Archetypes',
    tagline: 'Hyper-focused on discerning digital natives: Students, Young Professionals, and Lifestyle Shoppers.',
    keyMetric: '3 Core Personas | 68% Gen Z / Millennial Mix',
    executiveSummary: 'NOVA bypasses mass generic aggregation to conquer high-velocity demographic segments that prioritize curated quality, aesthetic cohesion, and budget transparency.',
    bulletPoints: [
      'The Ambitious Student: Budget-constrained yet brand-conscious; seeking durable tech gear, capsule study accessories, and verified student discounts.',
      'The Rising Professional: Time-starved knowledge worker requiring seamless work-from-anywhere setups, refined executive essentials, and automated 1-click styling.',
      'The Mindful Lifestyle Shopper: Values sustainability, clean beauty, artisanal homeware, and aesthetic elevation; willing to pay premium for transparent provenance.',
      'Interactive Style-Preference Quiz: Converts anonymous browser traffic into rich first-party behavioral vectors within 60 seconds.'
    ],
    strategicImplication: 'First-party zero-party data acquired through the style quiz eliminates reliance on third-party cookies and drastically lowers CAC.'
  },
  {
    number: 3,
    title: 'Core Value Proposition',
    tagline: 'Budget-aware discovery meets luxury curation: shop smarter, live better without friction.',
    keyMetric: '3.42% Conversion Rate (+59% vs Benchmark)',
    executiveSummary: 'Conventional e-commerce suffers from choice overload and fragmented discovery. NOVA solves cognitive fatigue through intelligent curation.',
    bulletPoints: [
      'Budget-Bound Discovery: Users specify hard financial caps; NOVA optimizes bundle contents to maximize aesthetic value without blowing budgets.',
      'AI-Tailored Relevance: Real-time match scoring (e.g. 98% AI Match) clarifies why an item complements the shopper’s lifestyle profile.',
      'Total Transparency: Eco-impact ratings (A+, A, B), verified material origin, and no deceptive dark patterns.',
      'Frictionless Convenience: Unified multi-item checkout, instant bag preview, and intelligent cross-category bundling.'
    ],
    strategicImplication: 'Shifts customer perception from transactional commodity hunting to trusted personal advisory relationship.'
  },
  {
    number: 4,
    title: 'End-to-End Customer Journey',
    tagline: 'A seamless 5-stage closed loop: Awareness → Consideration → Personalisation → Purchase → Loyalty.',
    keyMetric: '58.2% Cart Abandonment (-11.9% vs Industry 70.1%)',
    executiveSummary: 'Every touchpoint in the NOVA shopping funnel is optimized through behavioural psychology and interactive feedback loops.',
    bulletPoints: [
      '1. Awareness: Viral social lookbooks, TikTok UGC styling reels, high-intent SEO long-tail catalog pages, and referral incentives ($20/$20).',
      '2. Consideration: 3D interactive hero inspection, high-resolution multi-angle galleries, verified customer reviews with persona tags.',
      '3. Personalisation: Instant style quiz, dynamic category re-ranking, and the conversational NOVA AI Concierge.',
      '4. Purchase: 3-step checkout with Klarna BNPL, Apple Pay, transparent tax calculation, and instant order tracking generation.',
      '5. Loyalty: Automated delivery milestone alerts, NOVA Plus tier upgrades, post-purchase styling recommendations, and carbon offset tracking.'
    ],
    strategicImplication: 'Reduces top-of-funnel dropoff and turns single-purchase buyers into habitual brand advocates.'
  },
  {
    number: 5,
    title: 'Website UX & Information Architecture',
    tagline: 'Modern, minimal luxury interface built with Three.js, responsive Tailwind grids, and sub-100ms micro-interactions.',
    keyMetric: '0.8s LCP | 99.4% Accessibility Score',
    executiveSummary: 'Crafted with a warm ivory, chocolate brown, and champagne gold palette reflecting high-end editorial magazines while maintaining razor-sharp e-commerce utility.',
    bulletPoints: [
      'Interactive 3D Visuals: WebGL Three.js canvas featuring floating products with mouse parallax, luxury reflections, and lightweight fallback toggle.',
      'Live Reactive Search & Filters: Real-time faceted filtering by category, price range, brand, ratings, and AI compatibility.',
      'Smart Cart & Sliding Drawers: Zero-page-reload experience preserving user context across wishlist, bag, and product quick-views.',
      'Mobile-First Ergonomics: Thumb-zone navigation, responsive touch sheets, and accessible contrast ratios.'
    ],
    strategicImplication: 'Decreased cognitive friction elevates dwell time and fosters a luxury brand halo that commands pricing power.'
  },
  {
    number: 6,
    title: 'Digital Marketing & Growth Engine',
    tagline: 'Omnichannel growth combining high-intent SEO, referral flywheels, and community-driven UGC.',
    keyMetric: '3.8x Return on Ad Spend (ROAS) | $18.40 CAC',
    executiveSummary: 'NOVA bypasses commoditized bidding wars through organic viral mechanics, student ambassador programs, and social shopping integrations.',
    bulletPoints: [
      'SEO & Structured Rich Snippets: Complete JSON-LD schema integration for Google Shopping, product rating stars, and editorial breadcrumbs.',
      'Referral Flywheel (Give $20, Get $20): Built-in link sharing incentives with trackable referral codes boosting viral coefficient to K=1.24.',
      'Social Lookbook & UGC: Shoppable Instagram/TikTok community carousels demonstrating real-life styling in campus and loft settings.',
      'Targeted Promotional Engines: Timed flash capsules, automated student verification discounts (STUDENT20), and first-order newsletter coupons.'
    ],
    strategicImplication: 'Lower Customer Acquisition Cost (CAC) combined with high organic referral rate accelerates path to profitability.'
  },
  {
    number: 7,
    title: 'AI & GenAI Shopping Concierge',
    tagline: 'Intelligent conversational assistant and heuristic recommendation algorithms bridging human styling with instant scale.',
    keyMetric: '41.8% AI Engagement | 28.6% Assisted Conversion',
    executiveSummary: 'NOVA deploys a hybrid AI engine: conversational natural language assistant for open-ended queries coupled with vector-style similarity scoring for real-time catalog recommendations.',
    bulletPoints: [
      'NOVA Concierge Assistant: Understands complex intent (e.g. "Find me a study desk setup under $200" or "Outfit for a venture capital pitch").',
      'Rule-Based Heuristic Match Engine: Instant real-time recalculation of product compatibility scores based on user quiz choices and current cart.',
      'Dynamic Bundle Generation: Automatically identifies complementary item affinities and outputs bundle discount packages with 1-click checkout.',
      'Honest Explainability: Explicitly explains why each product was selected (e.g. "Recommended because you chose Young Professional + Acoustic Focus").'
    ],
    strategicImplication: 'AI acts as a 24/7 digital personal shopper, driving higher basket sizes without human payroll overhead.'
  },
  {
    number: 8,
    title: 'Operations & Supply Chain Fulfillment',
    tagline: 'Simulated Order Management System (OMS) with multi-node warehousing, RFID eco-packing, and transparent live tracking.',
    keyMetric: '99.2% On-Time Fulfillment | 1.8 Day Avg Dispatch',
    executiveSummary: 'Operational excellence underpins brand trust. NOVA features an interactive OMS simulator tracking orders from fraud check to doorstep delivery.',
    bulletPoints: [
      'Distributed Warehouse Nodes: Simulated inventory verification across Chicago, Frankfurt, and Singapore logistics hubs.',
      'Eco-Conscious Packaging: Plastic-free biodegradable packing with recycled water-based inks and automated carbon offsetting.',
      'Live Carrier Integration: Simulated real-time tracking with FedEx/DHL Express tracking numbers, GPS status checkpoints, and delivery ETA.',
      'Post-Purchase Resolution Portal: 1-click automated self-service returns and exchanges reducing customer service ticket volume by 44%.'
    ],
    strategicImplication: 'Post-purchase visibility slashes "Where Is My Order?" (WISMO) inquiries and fortifies customer retention.'
  },
  {
    number: 9,
    title: 'Analytics & Executive Performance Dashboard',
    tagline: 'Real-time telemetry measuring revenue velocity, customer journey drop-offs, and algorithmic efficiency.',
    keyMetric: '$104.87 AOV | +28.4% MoM Revenue Growth',
    executiveSummary: 'Full-featured executive admin suite giving MBA judges instant visibility into business telemetry, unit economics, and operational health.',
    bulletPoints: [
      'Executive KPI Cards: Live tracking of Demo Revenue ($148.9K), Total Orders (1,420), AOV ($104.87), Conversion Rate (3.42%), and Abandonment Rate (58.2%).',
      'Revenue & AI Impact Charts: Comparative visualization showing AI-assisted purchases generating 57.8% higher cart values.',
      'Funnel Telemetry: Detailed conversion metrics across Awareness, Consideration, Personalisation, Cart, and Purchase.',
      'Live Activity Stream: Real-time simulated feed showing global customer actions, checkout events, and warehouse fulfillment updates.'
    ],
    strategicImplication: 'Data-driven governance allows agile iteration on product assortment, pricing thresholds, and marketing spend.'
  },
  {
    number: 10,
    title: 'Competitive Advantage & Sustainable Moats',
    tagline: 'Defensible positioning that outperforms generic giants on curation and outpaces niche boutiques on intelligence.',
    keyMetric: '4.8x Higher LTV/CAC Ratio than Traditional E-Commerce',
    executiveSummary: 'NOVA occupies the lucrative "Intelligent Luxury" sweet spot between impersonal commodity bazaars (Amazon) and expensive, clunky boutique stores.',
    bulletPoints: [
      'Proprietary Style Intelligence: Zero-party style data powers a personalization flywheel that competitors cannot duplicate via scraping.',
      'Curated Curation over Endless Scrolling: Strictly vetted high-utility items eliminate decision fatigue and elevate perceived value.',
      'Built-in Bundle Economy: Algorithmic pricing advantages create perceived bargain psychology while preserving brand prestige.',
      'Integrated Membership Ecosystem: NOVA Plus bonds high-value shoppers with sticky recurring benefits and community privileges.'
    ],
    strategicImplication: 'Creates switching costs and high customer loyalty, securing long-term economic profit above the cost of capital.'
  }
];

export const MBA_FINANCIAL_FORECAST = [
  { year: 'Year 1 (2026)', revenue: '$1.8M', grossMargin: '45.2%', netMargin: '8.4%', activeUsers: '34,000', novaPlusMembers: '3,800' },
  { year: 'Year 2 (2027)', revenue: '$4.9M', grossMargin: '48.6%', netMargin: '16.2%', activeUsers: '96,000', novaPlusMembers: '14,200' },
  { year: 'Year 3 (2028)', revenue: '$12.4M', grossMargin: '52.1%', netMargin: '22.8%', activeUsers: '240,000', novaPlusMembers: '42,000' }
];
