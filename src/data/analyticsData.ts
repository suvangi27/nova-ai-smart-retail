export interface DailyRevenue {
  day: string;
  revenue: number;
  orders: number;
  aiDrivenRevenue: number;
}

export interface FunnelStage {
  stage: string;
  users: number;
  percentage: number;
  benchmark: number;
}

export interface CategoryMetric {
  category: string;
  revenue: number;
  percentage: number;
  color: string;
}

export const DEMO_KPI_SUMMARY = {
  totalRevenue: 148920,
  growthVsLastMonth: 28.4,
  totalOrders: 1420,
  ordersGrowth: 19.2,
  averageOrderValue: 104.87,
  aovVsIndustry: '+31%',
  conversionRate: 3.42,
  industryAvgConversion: 2.15,
  cartAbandonmentRate: 58.2, // industry avg is 70.1%
  abandonmentReduction: '-11.9%',
  aiRecommendationEngagement: 41.8, // % who clicked an AI recommendation
  aiRecommendationConversion: 28.6, // of those who clicked, converted
  novaPlusSubscribers: 1420,
  novaPlusMrr: 14185,
  carbonOffsetKg: 4890,
  liveVisitors: 87
};

export const REVENUE_TIMELINE: DailyRevenue[] = [
  { day: 'Mon', revenue: 18450, orders: 176, aiDrivenRevenue: 11400 },
  { day: 'Tue', revenue: 21200, orders: 204, aiDrivenRevenue: 13800 },
  { day: 'Wed', revenue: 19800, orders: 189, aiDrivenRevenue: 12500 },
  { day: 'Thu', revenue: 24650, orders: 235, aiDrivenRevenue: 16900 },
  { day: 'Fri', revenue: 27900, orders: 268, aiDrivenRevenue: 19400 },
  { day: 'Sat', revenue: 32400, orders: 310, aiDrivenRevenue: 22800 },
  { day: 'Sun', revenue: 24520, orders: 238, aiDrivenRevenue: 17200 }
];

export const CONVERSION_FUNNEL: FunnelStage[] = [
  { stage: 'Awareness (Store Visits)', users: 41500, percentage: 100, benchmark: 100 },
  { stage: 'Consideration (Product Views)', users: 24900, percentage: 60.0, benchmark: 48.0 },
  { stage: 'Personalisation (Quiz & AI Match)', users: 15350, percentage: 37.0, benchmark: 18.0 },
  { stage: 'Cart Additions (Bundles & Items)', users: 3400, percentage: 8.2, benchmark: 6.4 },
  { stage: 'Completed Purchase', users: 1420, percentage: 3.42, benchmark: 2.15 }
];

export const CATEGORY_BREAKDOWN: CategoryMetric[] = [
  { category: 'Tech & Audio', revenue: 49143, percentage: 33, color: '#4A3028' },
  { category: 'Fashion & Apparel', revenue: 38719, percentage: 26, color: '#C5A46D' },
  { category: 'Work & Study', revenue: 28295, percentage: 19, color: '#63443A' },
  { category: 'Home & Living', revenue: 20849, percentage: 14, color: '#A6844D' },
  { category: 'Beauty & Wellness', revenue: 11914, percentage: 8, color: '#D4C8B5' }
];

export const RECENT_ACTIVITY_STREAM = [
  { id: 'act-1', event: 'Order #NOVA-9842 confirmed ($479.00 - Executive Bundle)', persona: 'Young Professional', time: '2 mins ago', location: 'New York, USA' },
  { id: 'act-2', event: 'Style Quiz completed (Budget-Savvy, Campus Vanguard)', persona: 'Student', time: '4 mins ago', location: 'London, UK' },
  { id: 'act-3', event: 'NOVA Plus membership renewed ($9.99/mo)', persona: 'Lifestyle Shopper', time: '7 mins ago', location: 'Toronto, CAN' },
  { id: 'act-4', event: 'AI Concierge inquiry resolved (Gifting under $150)', persona: 'Young Professional', time: '11 mins ago', location: 'San Francisco, USA' },
  { id: 'act-5', event: 'Warehouse Zurich dispatched order #NOVA-9821 via DHL Express', persona: 'Operations', time: '14 mins ago', location: 'Zurich Hub' }
];
