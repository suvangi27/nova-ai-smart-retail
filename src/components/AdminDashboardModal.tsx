import React, { useState } from 'react';
import { 
  X, 
  BarChart3, 
  TrendingUp, 
  ShoppingBag, 
  DollarSign, 
  Users, 
  Sparkles, 
  Percent, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  RefreshCw,
  Award,
  Layers
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { 
  DEMO_KPI_SUMMARY, 
  REVENUE_TIMELINE, 
  CONVERSION_FUNNEL, 
  CATEGORY_BREAKDOWN, 
  RECENT_ACTIVITY_STREAM 
} from '../data/analyticsData';

export const AdminDashboardModal: React.FC = () => {
  const { isAdminOpen, setIsAdminOpen } = useStore();
  const [activeTab, setActiveTab] = useState<'kpis' | 'revenue' | 'funnel' | 'activity'>('kpis');

  if (!isAdminOpen) return null;

  const maxRevenue = Math.max(...REVENUE_TIMELINE.map((d) => d.revenue));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl bg-[#F7F3EB] rounded-3xl border border-[#C5A46D]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-fadeIn">
        
        {/* Top Header */}
        <div className="bg-[#4A3028] text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#35211B] flex items-center justify-center border border-[#C5A46D]/50">
              <BarChart3 className="w-5 h-5 text-[#C5A46D]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold">Executive Analytics & Telemetry</h3>
                <span className="text-[10px] bg-[#C5A46D] text-[#4A3028] px-2 py-0.5 rounded-full font-bold uppercase">
                  MBA Demo Mode
                </span>
              </div>
              <p className="text-xs text-[#DFC8A2]">
                Real-time business telemetry for MBA Digital Business Challenge 2026
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-1.5 rounded-full text-[#DFC8A2] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white px-6 border-b border-[#E9E0D2] flex space-x-4 overflow-x-auto text-xs font-semibold">
          {[
            { id: 'kpis', label: 'Executive KPIs', icon: TrendingUp },
            { id: 'revenue', label: 'Revenue & Bundles', icon: DollarSign },
            { id: 'funnel', label: 'Conversion Funnel', icon: Layers },
            { id: 'activity', label: 'Live Activity Stream', icon: Clock }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 border-b-2 flex items-center space-x-1.5 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#C5A46D] text-[#4A3028] font-bold'
                  : 'border-transparent text-[#8C7A70] hover:text-[#4A3028]'
              }`}
            >
              <tab.icon className="w-4 h-4 text-[#C5A46D]" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: EXECUTIVE KPIS */}
          {activeTab === 'kpis' && (
            <div className="space-y-6">
              
              {/* Disclaimer Banner */}
              <div className="bg-[#E9E0D2]/70 rounded-2xl p-4 border border-[#C5A46D]/30 flex items-center justify-between text-xs text-[#63443A]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                  <span>
                    <strong>Demonstration Telemetry:</strong> Simulated commercial and operational metrics illustrating NOVA's unit economics and customer acquisition advantages.
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#4A3028] font-bold hidden sm:inline">
                  Active Users: {DEMO_KPI_SUMMARY.liveVisitors}
                </span>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                {/* Gross Revenue */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>Monthly Revenue</span>
                    <DollarSign className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#4A3028] mt-2">
                    ${DEMO_KPI_SUMMARY.totalRevenue.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-0.5" />
                    +{DEMO_KPI_SUMMARY.growthVsLastMonth}% vs last month
                  </p>
                </div>

                {/* Total Orders */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>Total Orders</span>
                    <ShoppingBag className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#4A3028] mt-2">
                    {DEMO_KPI_SUMMARY.totalOrders.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-0.5" />
                    +{DEMO_KPI_SUMMARY.ordersGrowth}% vs last month
                  </p>
                </div>

                {/* Average Order Value (AOV) */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>Avg Order Value (AOV)</span>
                    <Award className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#4A3028] mt-2">
                    ${DEMO_KPI_SUMMARY.averageOrderValue.toFixed(2)}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    {DEMO_KPI_SUMMARY.aovVsIndustry} vs industry ($80.00)
                  </p>
                </div>

                {/* Conversion Rate */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>Conversion Rate</span>
                    <Percent className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#4A3028] mt-2">
                    {DEMO_KPI_SUMMARY.conversionRate}%
                  </p>
                  <p className="text-[11px] text-[#63443A] font-medium mt-1">
                    Industry benchmark: {DEMO_KPI_SUMMARY.industryAvgConversion}%
                  </p>
                </div>

                {/* Cart Abandonment */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>Cart Abandonment</span>
                    <TrendingUp className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#4A3028] mt-2">
                    {DEMO_KPI_SUMMARY.cartAbandonmentRate}%
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    {DEMO_KPI_SUMMARY.abandonmentReduction} vs 70.1% benchmark
                  </p>
                </div>

                {/* AI CTR Engagement */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>AI Engagement CTR</span>
                    <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#4A3028] mt-2">
                    {DEMO_KPI_SUMMARY.aiRecommendationEngagement}%
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    {DEMO_KPI_SUMMARY.aiRecommendationConversion}% converted
                  </p>
                </div>

                {/* NOVA Plus MRR */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>NOVA Plus MRR</span>
                    <Award className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-[#4A3028] mt-2">
                    ${DEMO_KPI_SUMMARY.novaPlusMrr.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-[#63443A] font-medium mt-1">
                    {DEMO_KPI_SUMMARY.novaPlusSubscribers} Active Members
                  </p>
                </div>

                {/* Carbon Offsets */}
                <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
                  <div className="flex items-center justify-between text-[#8C7A70] text-xs">
                    <span>Carbon Offset</span>
                    <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                  <p className="font-serif text-2xl font-bold text-emerald-700 mt-2">
                    {DEMO_KPI_SUMMARY.carbonOffsetKg} kg
                  </p>
                  <p className="text-[11px] text-[#63443A] font-medium mt-1">
                    100% Eco-neutral delivery
                  </p>
                </div>

              </div>

              {/* Category Breakdown Progress */}
              <div className="bg-white rounded-2xl p-6 border border-[#E9E0D2] shadow-sm space-y-4">
                <h4 className="font-serif text-base font-bold text-[#4A3028]">
                  Sales Share by Category
                </h4>
                <div className="space-y-3">
                  {CATEGORY_BREAKDOWN.map((cat) => (
                    <div key={cat.category} className="space-y-1">
                      <div className="flex justify-between text-xs text-[#63443A]">
                        <span className="font-semibold text-[#4A3028]">{cat.category}</span>
                        <span className="font-mono">${cat.revenue.toLocaleString()} ({cat.percentage}%)</span>
                      </div>
                      <div className="w-full bg-[#E9E0D2] h-2 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: REVENUE & BUNDLES CHART */}
          {activeTab === 'revenue' && (
            <div className="bg-white rounded-2xl p-6 border border-[#E9E0D2] shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#4A3028]">
                    7-Day Revenue Velocity (Total vs AI-Assisted)
                  </h4>
                  <p className="text-xs text-[#63443A]">
                    Notice how AI recommendations & smart bundles drive over 62% of aggregate top-line revenue.
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <span className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-[#4A3028] rounded-sm" />
                    <span>Total Revenue</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-[#C5A46D] rounded-sm" />
                    <span>AI-Driven Volume</span>
                  </span>
                </div>
              </div>

              {/* Bar Chart Visualization */}
              <div className="h-64 flex items-end justify-between gap-3 pt-6 pb-2 border-b border-[#E9E0D2]">
                {REVENUE_TIMELINE.map((item) => {
                  const totalHeight = (item.revenue / maxRevenue) * 100;
                  const aiHeight = (item.aiDrivenRevenue / maxRevenue) * 100;

                  return (
                    <div key={item.day} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                      {/* Tooltip */}
                      <div className="absolute -top-12 bg-[#4A3028] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
                        <p className="font-bold">${item.revenue.toLocaleString()} ({item.orders} orders)</p>
                        <p className="text-[#DFC8A2]">AI: ${item.aiDrivenRevenue.toLocaleString()}</p>
                      </div>

                      <div className="w-full max-w-[36px] flex items-end justify-center space-x-1 h-full">
                        {/* Total Bar */}
                        <div
                          className="w-1/2 bg-[#4A3028] rounded-t-md transition-all duration-500 hover:bg-[#35211B]"
                          style={{ height: `${totalHeight}%` }}
                        />
                        {/* AI Bar */}
                        <div
                          className="w-1/2 bg-[#C5A46D] rounded-t-md transition-all duration-500 hover:bg-[#B38E54]"
                          style={{ height: `${aiHeight}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-[#63443A] mt-2">{item.day}</span>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 bg-[#F7F3EB] rounded-2xl border border-[#E9E0D2] text-xs text-[#63443A] space-y-1">
                <p className="font-bold text-[#4A3028]">MBA Strategic Analysis:</p>
                <p>
                  Bundling increases baseline basket size from $64.00 (single item average) to $104.87 without eroding brand equity. Consumers perceive up to $120 in bundle discounts while NOVA maintains healthy 45%+ gross margins.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CONVERSION FUNNEL */}
          {activeTab === 'funnel' && (
            <div className="bg-white rounded-2xl p-6 border border-[#E9E0D2] shadow-sm space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#4A3028]">
                  E-Commerce Funnel Performance vs E-Commerce Industry Benchmark
                </h4>
                <p className="text-xs text-[#63443A]">
                  How NOVA captures superior retention at every stage of the 5-step customer journey.
                </p>
              </div>

              <div className="space-y-4">
                {CONVERSION_FUNNEL.map((f, i) => (
                  <div key={f.stage} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-[#4A3028]">{f.stage}</span>
                      <span className="font-mono text-[#63443A]">
                        {f.users.toLocaleString()} users ({f.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-[#F7F3EB] h-4 rounded-full overflow-hidden p-0.5 border border-[#E9E0D2] flex">
                      <div
                        className="bg-gradient-to-r from-[#4A3028] to-[#C5A46D] h-full rounded-full transition-all duration-500"
                        style={{ width: `${f.percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-[#8C7A70]">
                      <span>NOVA Performance: {f.percentage}%</span>
                      <span>Industry Standard: {f.benchmark}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: LIVE ACTIVITY STREAM */}
          {activeTab === 'activity' && (
            <div className="bg-white rounded-2xl p-6 border border-[#E9E0D2] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E9E0D2]">
                <h4 className="font-serif text-base font-bold text-[#4A3028]">
                  Simulated Real-Time Operational Stream
                </h4>
                <span className="flex items-center space-x-1 text-xs text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Stream Active</span>
                </span>
              </div>

              <div className="space-y-3">
                {RECENT_ACTIVITY_STREAM.map((act) => (
                  <div
                    key={act.id}
                    className="p-3 rounded-xl bg-[#F7F3EB] border border-[#E9E0D2] flex items-center justify-between text-xs hover:border-[#C5A46D] transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-[#4A3028]">{act.event}</p>
                      <p className="text-[11px] text-[#8C7A70]">
                        Persona: <strong className="text-[#63443A]">{act.persona}</strong> • {act.location}
                      </p>
                    </div>
                    <span className="text-[10px] text-[#8C7A70] whitespace-nowrap">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F2ECE2] border-t border-[#E9E0D2] flex items-center justify-between">
          <span className="text-[11px] text-[#8C7A70] italic">
            *Certified telemetry demonstration prepared for MBA Digital Business Challenge 2026
          </span>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-5 py-2 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B]"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};
