import React from 'react';
import { 
  X, 
  User, 
  Crown, 
  GraduationCap, 
  Briefcase, 
  Gem, 
  Sparkles, 
  Tag, 
  Truck, 
  Check, 
  Coins 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CustomerPersona } from '../types';

export const UserProfileDrawer: React.FC = () => {
  const {
    isProfileOpen,
    setIsProfileOpen,
    activePersona,
    setActivePersona,
    userProfile,
    setIsNovaPlusOpen,
    setIsOrderTrackingOpen,
    orders,
    applyCoupon
  } = useStore();

  if (!isProfileOpen) return null;

  const personasList: { id: CustomerPersona; name: string; title: string; perk: string; code: string; icon: any }[] = [
    {
      id: 'Student',
      name: 'Maya Lin',
      title: 'MBA Candidate / Student',
      perk: '20% Verified Student Discount',
      code: 'STUDENT20',
      icon: GraduationCap
    },
    {
      id: 'Young Professional',
      name: 'Alex Sterling',
      title: 'Management Consultant / Executive',
      perk: 'Complimentary Acoustic Bundle Packaging',
      code: 'NOVA2026',
      icon: Briefcase
    },
    {
      id: 'Lifestyle Shopper',
      name: 'Elena Rostova',
      title: 'Creative Director / Connoisseur',
      perk: 'Priority French Linen & Botanical Drops',
      code: 'WELCOME10',
      icon: Gem
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#F7F3EB] h-full shadow-2xl flex flex-col justify-between border-l border-[#C5A46D]/30 animate-slideLeft">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E9E0D2] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-full bg-[#E9E0D2] flex items-center justify-center text-[#4A3028]">
              <User className="w-5 h-5 text-[#C5A46D]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[#4A3028]">{userProfile.name}</h3>
              <p className="text-xs text-[#8C7A70]">{userProfile.email}</p>
            </div>
          </div>
          <button
            onClick={() => setIsProfileOpen(false)}
            className="p-1 rounded-full text-[#63443A] hover:bg-[#F7F3EB]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {/* Persona Switcher Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase tracking-wider text-[11px] text-[#4A3028]">
                Switch Active Persona (Dimension 2)
              </span>
              <span className="text-[10px] text-[#C5A46D] font-bold">Interactive Demo</span>
            </div>

            <div className="space-y-2.5">
              {personasList.map((p) => {
                const isSelected = activePersona === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setActivePersona(p.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#C5A46D] bg-white shadow-luxury ring-2 ring-[#C5A46D]/40'
                        : 'border-[#E9E0D2] bg-white/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#4A3028] text-[#C5A46D]' : 'bg-[#E9E0D2] text-[#4A3028]'}`}>
                          <p.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-[#4A3028]">{p.name}</p>
                          <p className="text-[10px] text-[#8C7A70]">{p.title}</p>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#C5A46D]" />}
                    </div>

                    {/* Persona Offer */}
                    <div className="mt-2.5 pt-2 border-t border-[#F2ECE2] flex items-center justify-between text-[11px]">
                      <span className="text-[#63443A] font-medium">{p.perk}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          applyCoupon(p.code);
                        }}
                        className="px-2 py-0.5 rounded bg-[#E9E0D2] text-[#4A3028] font-mono font-bold text-[10px] hover:bg-[#C5A46D] hover:text-white transition-colors"
                      >
                        Apply {p.code}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Membership & Points Card */}
          <div className="bg-white rounded-2xl p-4 border border-[#E9E0D2] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#4A3028]">Membership Tier</span>
              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  setIsNovaPlusOpen(true);
                }}
                className="text-[11px] text-[#C5A46D] font-bold hover:underline"
              >
                Manage
              </button>
            </div>

            <div className="p-3 rounded-xl bg-[#F7F3EB] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Crown className={`w-4 h-4 ${userProfile.isNovaPlus ? 'text-[#C5A46D]' : 'text-[#8C7A70]'}`} />
                <div>
                  <p className="font-bold text-xs text-[#4A3028]">
                    {userProfile.isNovaPlus ? 'NOVA Plus Member (VIP)' : 'Standard Shopper'}
                  </p>
                  <p className="text-[10px] text-[#8C7A70]">
                    {userProfile.isNovaPlus ? '10% Cashback Active • Free Priority Delivery' : 'Upgrade for 10% instant cashback'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs">
              <div className="flex items-center space-x-1.5 text-[#63443A]">
                <Coins className="w-4 h-4 text-[#C5A46D]" />
                <span>NOVA Rewards Points:</span>
              </div>
              <span className="font-mono font-bold text-[#4A3028]">{userProfile.novaPoints} pts</span>
            </div>
          </div>

          {/* Recent Orders Shortcut */}
          <div className="bg-white rounded-2xl p-4 border border-[#E9E0D2] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#4A3028]">Your Orders ({orders.length})</span>
              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  setIsOrderTrackingOpen(true);
                }}
                className="text-[11px] text-[#C5A46D] font-bold hover:underline flex items-center space-x-1"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Live Tracker</span>
              </button>
            </div>

            <div className="space-y-2">
              {orders.slice(0, 2).map((o) => (
                <div key={o.id} className="p-2.5 rounded-xl bg-[#F7F3EB] flex items-center justify-between">
                  <div>
                    <p className="font-bold font-mono text-[#4A3028]">#{o.id}</p>
                    <p className="text-[10px] text-[#8C7A70]">{o.items.length} items • ${o.total.toFixed(2)}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                    {o.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E9E0D2] text-center">
          <p className="text-[10px] text-[#8C7A70]">
            MBA 2026 Customer Profile & Multi-Persona Architecture
          </p>
        </div>
      </div>
    </div>
  );
};
