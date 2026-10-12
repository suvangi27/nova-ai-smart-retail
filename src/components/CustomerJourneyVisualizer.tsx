import React, { useState } from 'react';
import { 
  Compass, 
  Eye, 
  Sparkles, 
  ShoppingBag, 
  Crown, 
  ArrowRight, 
  CheckCircle2, 
  BarChart, 
  Layers
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CustomerJourneyVisualizer: React.FC = () => {
  const { 
    setIsQuizOpen, 
    setIsCheckoutOpen, 
    setIsNovaPlusOpen, 
    setIsOrderTrackingOpen,
    setIsReferralOpen 
  } = useStore();

  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 0,
      name: 'Awareness',
      icon: Eye,
      tagline: 'Discovery via Viral UGC & SEO',
      conversionRate: '100% (41,500 Visitors)',
      touchpoints: ['Organic TikTok styling reels', 'High-intent Google Shopping JSON-LD schema', 'Give $20, Get $20 Referral Flywheel'],
      psychology: 'Attract high-intent shoppers through genuine aesthetic lookbooks rather than intrusive commodity banners.',
      kpi: 'Customer Acquisition Cost (CAC): $18.40 | ROAS: 3.8x',
      actionText: 'View Referral & Social Marketing',
      actionFn: () => setIsReferralOpen(true)
    },
    {
      id: 1,
      name: 'Consideration',
      icon: Layers,
      tagline: '3D Immersion & Product Depth',
      conversionRate: '60.0% (24,900 Views)',
      touchpoints: ['Interactive WebGL 3D retail inspection', 'Transparent Eco-Impact scoring (Grade A+)', 'Customer verified reviews categorized by persona'],
      psychology: 'Alleviate sensory uncertainty by letting shoppers inspect product finish, specifications, and materials before buying.',
      kpi: 'Dwell Time: 4.8 minutes (+85% vs standard e-commerce)',
      actionText: 'Explore 3D Hero Visuals',
      actionFn: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 2,
      name: 'Personalisation',
      icon: Compass,
      tagline: 'AI Preference Calibration',
      conversionRate: '37.0% (15,350 Calibrations)',
      touchpoints: ['4-Step interactive style & budget preference quiz', 'NOVA AI Concierge conversational styling advice', 'Real-time AI Match % indicator on all products'],
      psychology: 'Eliminates choice overload and cognitive fatigue by dynamically sorting items to fit exact lifestyle constraints.',
      kpi: 'AI Engagement Rate: 41.8% | Recommendation CTR: 28.6%',
      actionText: 'Launch Interactive Style Quiz',
      actionFn: () => setIsQuizOpen(true)
    },
    {
      id: 3,
      name: 'Purchase',
      icon: ShoppingBag,
      tagline: 'Frictionless Basket & BNPL',
      conversionRate: '3.42% (1,420 Completed)',
      touchpoints: ['Smart bundle cross-selling with 20% savings', 'Klarna Pay-in-4 and Apple Pay checkout', 'Real-time coupon validation (NOVA2026 / STUDENT20)'],
      psychology: 'Provide perceived bundle surplus and frictionless mobile checkout, reducing cart abandonment by 11.9%.',
      kpi: 'Average Order Value (AOV): $104.87 (+31% vs industry benchmark)',
      actionText: 'Test Simulated Checkout Flow',
      actionFn: () => setIsCheckoutOpen(true)
    },
    {
      id: 4,
      name: 'Loyalty',
      icon: Crown,
      tagline: 'NOVA Plus & Retention Loop',
      conversionRate: '1,420 Active Subscribers',
      touchpoints: ['Real-time order fulfillment simulator with GPS nodes', 'NOVA Plus recurring membership ($9.99/mo) with 10% cashback', 'Automated carbon-neutral offsets certificate'],
      psychology: 'Post-purchase transparency turns transactional shoppers into habitual brand advocates and recurring subscription members.',
      kpi: 'Customer Lifetime Value (LTV): $412 | Churn: <3.2%',
      actionText: 'Preview NOVA Plus Membership',
      actionFn: () => setIsNovaPlusOpen(true)
    }
  ];

  const current = stages[activeStage];

  return (
    <section className="py-20 bg-white border-b border-[#E9E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F7F3EB] border border-[#C5A46D]/40 text-xs font-semibold text-[#4A3028] shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Dimension 4: The 5-Stage Customer Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3028]">
            Customer Journey Architecture
          </h2>
          <p className="text-sm text-[#63443A] mt-2 leading-relaxed">
            From first viral discovery to recurring membership retention. Click through each milestone to inspect the behavioral psychology, technology levers, and conversion metrics powering NOVA.
          </p>
        </div>

        {/* 5-Step Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {stages.map((stg) => {
            const isSelected = activeStage === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg.id)}
                className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#C5A46D] bg-[#F7F3EB] shadow-luxury ring-2 ring-[#C5A46D]/40'
                    : 'border-[#E9E0D2] bg-white hover:bg-[#F7F3EB]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#4A3028] text-[#C5A46D]' : 'bg-[#E9E0D2] text-[#4A3028]'}`}>
                    <stg.icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#8C7A70]">0{stg.id + 1}</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#4A3028]">{stg.name}</h4>
                  <p className="text-[10px] text-[#63443A] truncate mt-0.5">{stg.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card for Selected Stage */}
        <div className="bg-[#F7F3EB] rounded-3xl p-6 sm:p-8 border border-[#C5A46D]/40 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stage Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#4A3028] text-white text-xs font-mono font-bold">
                  Stage 0{current.id + 1}
                </span>
                <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">
                  {current.conversionRate}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A3028]">
                {current.name}: {current.tagline}
              </h3>

              <p className="text-xs sm:text-sm text-[#63443A] leading-relaxed">
                <strong>Behavioral Mechanism:</strong> {current.psychology}
              </p>

              {/* Touchpoints */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#4A3028]">
                  Key Digital Touchpoints & Levers:
                </p>
                <ul className="space-y-1.5">
                  {current.touchpoints.map((tp, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#63443A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0 mt-0.5" />
                      <span>{tp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={current.actionFn}
                  className="px-6 py-3 rounded-full bg-[#4A3028] hover:bg-[#35211B] text-white text-xs font-semibold shadow-md flex items-center space-x-2 group"
                >
                  <span>{current.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Key MBA Telemetry Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#E9E0D2] shadow-luxury space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E9E0D2]">
                <span className="text-xs font-bold text-[#4A3028]">MBA Telemetry Metric</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Top Quartile
                </span>
              </div>

              <div className="p-4 bg-[#F7F3EB] rounded-xl border border-[#E9E0D2]">
                <p className="text-[11px] text-[#8C7A70] uppercase font-bold tracking-wider">Benchmark Impact</p>
                <p className="text-base font-bold font-serif text-[#4A3028] mt-1">{current.kpi}</p>
              </div>

              <div className="text-[11px] text-[#63443A] space-y-2">
                <p>
                  <strong>Why this differentiates NOVA:</strong> Conventional retailers treat purchase as the end of the transaction. NOVA treats it as the commencement of high-LTV personalized advisory.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
