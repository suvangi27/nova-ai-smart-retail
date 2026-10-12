import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  X, 
  Minus, 
  Award, 
  Zap, 
  ShieldCheck, 
  Compass, 
  Scale 
} from 'lucide-react';

export const CompetitiveAdvantageSection: React.FC = () => {
  const [selectedFocus, setSelectedFocus] = useState<number>(0);

  const pillars = [
    {
      title: 'Personalised Discovery',
      metric: '37% Higher CTR',
      desc: 'Instead of forcing shoppers to scroll past 10,000 generic search results, NOVA uses a 60-second style preference quiz and conversational AI to present a curated 12-item capsule feed.'
    },
    {
      title: 'Budget-Bound Bundling',
      metric: '+$24.87 Avg Order Value',
      desc: 'NOVA guarantees shoppers never get upsold into buyer remorse. Intelligent bundling combines complementary essentials to yield 20% automated volume savings.'
    },
    {
      title: 'Zero Cognitive Friction',
      metric: '58.2% Low Abandonment',
      desc: 'Minimalist luxury aesthetic, 3D WebGL inspection, transparent eco-ratings, and 1-click checkout reduce decision paralysis and elevate brand trust.'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Discovery Paradigm',
      nova: 'Curated 3D WebGL & Adaptive Style AI',
      amazon: 'Endless algorithmic grid (Choice overload)',
      boutique: 'Static photography & high friction',
      novaHighlight: true
    },
    {
      feature: 'Budget-Aware Personalization',
      nova: 'Strict financial caps & bundle optimization',
      amazon: 'Aggressive ad-bidding recommendations',
      boutique: 'Rigid high luxury pricing (no bundles)',
      novaHighlight: true
    },
    {
      feature: 'Conversational Shopping Assistant',
      nova: 'Dedicated 24/7 AI Concierge with explanations',
      amazon: 'Generic search bar + sponsored ad bias',
      boutique: 'In-person store staff only (no digital AI)',
      novaHighlight: true
    },
    {
      feature: 'Environmental & Packaging Ethics',
      nova: '100% Plastic-free + Verified Carbon Offsets',
      amazon: 'Heavy plastic mailers & variable ethics',
      boutique: 'Expensive packaging, high carbon footprint',
      novaHighlight: true
    },
    {
      feature: 'Customer Membership Model',
      nova: 'NOVA Plus ($9.99/mo with 10% cashback)',
      amazon: 'Prime (Focused purely on shipping logistics)',
      boutique: 'Rare or gated spend-threshold VIP tiers',
      novaHighlight: true
    },
    {
      feature: 'Post-Purchase Transparency',
      nova: 'Simulated 6-stage OMS & 1-click returns',
      amazon: 'Impersonal tracking updates',
      boutique: 'Strict 14-day store-credit return policies',
      novaHighlight: true
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E9E0D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F7F3EB] border border-[#C5A46D]/40 text-xs font-semibold text-[#4A3028] shadow-sm mb-3">
            <Scale className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Dimension 10: Competitive Advantage & Moats</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3028]">
            Why NOVA Wins: Strategic Differentiation
          </h2>
          <p className="text-sm text-[#63443A] mt-2 leading-relaxed">
            Conventional e-commerce built search engines for catalogs. NOVA builds an intelligent personal shopper that respects your taste, your time, and your budget.
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedFocus(idx)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                selectedFocus === idx
                  ? 'border-[#C5A46D] bg-[#F7F3EB] shadow-luxury ring-2 ring-[#C5A46D]/40'
                  : 'border-[#E9E0D2] bg-white hover:bg-[#F7F3EB]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#C5A46D]">Pillar 0{idx + 1}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white text-[#4A3028] border border-[#D4C8B5]">
                  {p.metric}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A3028]">{p.title}</h3>
              <p className="text-xs text-[#63443A] mt-2 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-[#F7F3EB] rounded-3xl p-6 sm:p-8 border border-[#C5A46D]/40 shadow-sm overflow-x-auto">
          <div className="min-w-[650px]">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#D4C8B5] text-[#4A3028]">
                  <th className="pb-4 font-bold uppercase tracking-wider text-[11px] w-1/4">
                    Evaluation Dimension
                  </th>
                  <th className="pb-4 font-serif text-base font-bold text-[#4A3028] bg-white/70 px-4 py-2 rounded-t-xl border-t border-x border-[#C5A46D]/40 text-center w-1/3">
                    <div className="flex items-center justify-center space-x-1.5 text-[#4A3028]">
                      <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                      <span>NOVA AI Retail</span>
                    </div>
                  </th>
                  <th className="pb-4 font-semibold text-[#8C7A70] px-3 text-center">
                    Mass Retailers (Amazon)
                  </th>
                  <th className="pb-4 font-semibold text-[#8C7A70] px-3 text-center">
                    Conventional Luxury
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E0D2]">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-white/40 transition-colors">
                    <td className="py-3.5 font-bold text-[#4A3028]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 bg-white/70 border-x border-[#C5A46D]/40 text-center font-medium text-[#4A3028]">
                      <div className="flex items-center justify-center space-x-1.5">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{row.nova}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-center text-[#63443A]">
                      <span>{row.amazon}</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-[#63443A]">
                      <span>{row.boutique}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MBA Bottom Conclusion */}
          <div className="mt-6 pt-6 border-t border-[#D4C8B5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#63443A] gap-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
              <span>
                <strong>MBA Strategic Takeaway:</strong> NOVA creates defensibility via zero-party style data, higher basket margins, and predictable subscription cash flow.
              </span>
            </div>
            <span className="font-bold text-[#4A3028] whitespace-nowrap">
              Targeted LTV / CAC: 4.8x
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
