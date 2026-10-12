import React from 'react';
import { X, Crown, Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const NovaPlusModal: React.FC = () => {
  const { isNovaPlusOpen, setIsNovaPlusOpen, userProfile, toggleNovaPlus } = useStore();

  if (!isNovaPlusOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#F7F3EB] rounded-3xl border border-[#C5A46D]/50 shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Header with Luxury Gold Gradient */}
        <div className="bg-gradient-to-r from-[#4A3028] via-[#35211B] to-[#4A3028] text-white p-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A46D]/20 rounded-full blur-2xl" />
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C5A46D] to-[#DFC8A2] flex items-center justify-center text-[#4A3028] shadow-gold-glow">
                <Crown className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold flex items-center space-x-1.5">
                  <span>NOVA Plus</span>
                  <span className="text-[10px] bg-[#C5A46D] text-white px-2 py-0.5 rounded-full font-sans font-bold uppercase tracking-wider">
                    VIP Tier
                  </span>
                </h3>
                <p className="text-xs text-[#DFC8A2]">Recurring SaaS-Style Retail Membership</p>
              </div>
            </div>

            <button
              onClick={() => setIsNovaPlusOpen(false)}
              className="p-1 rounded-full text-[#DFC8A2] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-[#C5A46D]/40 shadow-sm flex items-baseline justify-between">
            <div>
              <span className="text-3xl font-bold font-serif text-[#4A3028]">$9.99</span>
              <span className="text-xs text-[#8C7A70] ml-1">/ month or $99/year</span>
              <p className="text-[11px] text-[#C5A46D] font-bold mt-0.5">Cancel anytime in 1 click</p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              {userProfile.isNovaPlus ? 'Currently Active' : 'First 30 Days Free'}
            </span>
          </div>

          {/* Perks List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3028]">
              Exclusive Member Privileges
            </h4>
            <div className="space-y-2.5 text-xs text-[#63443A]">
              {[
                { title: '10% Instant Member Cashback', desc: 'Automatic 10% discount applied at checkout across all items & smart bundles.' },
                { title: 'Always-Free Carbon-Neutral Express Shipping', desc: 'No minimum order required. All packages dispatched via priority fleet.' },
                { title: 'Priority AI Concierge Styling Queue', desc: 'Sub-second real-time AI styling advice and personal shopper wardrobe planning.' },
                { title: 'VIP Early Access to Capsule Drops', desc: '48-hour head-start on limited artisanal editions before public release.' },
                { title: 'Automated Carbon Offset Tracking', desc: 'Monthly certificate showing trees planted and emissions neutralized.' }
              ].map((perk, i) => (
                <div key={i} className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#E9E0D2]">
                  <Check className="w-4 h-4 text-[#C5A46D] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#4A3028] block">{perk.title}</strong>
                    <span className="text-[11px] text-[#8C7A70]">{perk.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              toggleNovaPlus();
              setIsNovaPlusOpen(false);
            }}
            className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 ${
              userProfile.isNovaPlus
                ? 'bg-rose-700 hover:bg-rose-800 text-white'
                : 'bg-gradient-to-r from-[#C5A46D] to-[#B38E54] text-white shadow-gold-glow hover:brightness-105'
            }`}
          >
            <Crown className="w-4 h-4" />
            <span>{userProfile.isNovaPlus ? 'Cancel NOVA Plus Membership' : 'Activate NOVA Plus (Demo Toggle)'}</span>
          </button>

          <p className="text-[10px] text-center text-[#8C7A70] italic">
            *Demonstrates Dimension 1 (Recurring Membership Monetization Model)
          </p>
        </div>

      </div>
    </div>
  );
};
