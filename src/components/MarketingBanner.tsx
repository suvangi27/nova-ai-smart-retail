import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Share2, 
  Copy, 
  Check, 
  Clock, 
  Instagram, 
  X, 
  ArrowRight, 
  Heart, 
  Tag, 
  Users 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const MarketingBanner: React.FC = () => {
  const { 
    isReferralOpen, 
    setIsReferralOpen, 
    showNotification, 
    setActiveDetailProduct, 
    products 
  } = useStore();

  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const referralLink = 'https://nova-retail.store/join?ref=ALEX2026';

  const handleCopy = () => {
    navigator.clipboard?.writeText(referralLink);
    setCopied(true);
    showNotification('Referral link copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const communityLooks = [
    {
      id: 'look-1',
      author: '@marcus.study',
      handle: 'Cambridge, MA',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
      caption: 'Final year thesis grind fueled by the Monolith keyboard & pour-over stoneware.',
      productKey: 'nova-mechanical-keyboard'
    },
    {
      id: 'look-2',
      author: '@claire_arch',
      handle: 'SoHo Studio, NYC',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      caption: 'The Lumina lamp casts museum-accurate lighting across my architectural sketches.',
      productKey: 'nova-lumina-lamp'
    },
    {
      id: 'look-3',
      author: '@david.executive',
      handle: 'London, UK',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      caption: 'Aura Studio headphones make cross-Atlantic flights silent and serene.',
      productKey: 'nova-aura-headphones'
    },
    {
      id: 'look-4',
      author: '@sophia_slowlife',
      handle: 'Zurich, Switzerland',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
      caption: 'Amber Santal extrait has become my signature scent for evening gatherings.',
      productKey: 'nova-botanical-parfum'
    }
  ];

  return (
    <>
      {/* Promotional Flash Offer Strip */}
      <section className="bg-gradient-to-r from-[#4A3028] via-[#35211B] to-[#4A3028] text-white py-4 px-4 sm:px-8 border-y border-[#C5A46D]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center space-x-3 text-center md:text-left">
            <span className="p-1.5 rounded-full bg-[#C5A46D]/20 text-[#C5A46D] border border-[#C5A46D]/40">
              <Clock className="w-4 h-4" />
            </span>
            <div>
              <p className="font-serif font-bold text-sm tracking-wide">
                Flash Curation Drop — MBA Digital Business Challenge Edition
              </p>
              <p className="text-[11px] text-[#DFC8A2]">
                Unlock complimentary expedited dispatch + extra 15% off with code <strong className="text-white font-mono">NOVA2026</strong>
              </p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 font-mono font-bold text-sm">
              <span className="px-2.5 py-1 bg-[#1E110E] rounded-md border border-[#C5A46D]/30 text-[#DFC8A2]">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="px-2.5 py-1 bg-[#1E110E] rounded-md border border-[#C5A46D]/30 text-[#DFC8A2]">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="px-2.5 py-1 bg-[#1E110E] rounded-md border border-[#C5A46D]/30 text-[#C5A46D]">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>

            <button
              onClick={() => setIsReferralOpen(true)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#B38E54] hover:brightness-105 text-white font-bold text-xs shadow-gold-glow flex items-center space-x-1.5 transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Give $20, Get $20</span>
            </button>
          </div>

        </div>
      </section>

      {/* Social UGC Community Lookbook Section */}
      <section className="py-20 bg-[#F7F3EB] border-b border-[#E9E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E9E0D2]">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A46D] mb-1">
                <Instagram className="w-3.5 h-3.5" />
                <span>Dimension 6: Digital Marketing & Social Proof</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3028]">
                Curated by the NOVA Community
              </h2>
              <p className="text-sm text-[#63443A] mt-1 max-w-xl">
                Explore real lifestyle pairings captured by creators, university scholars, and executives worldwide. Tag #ShopNOVA to be featured.
              </p>
            </div>

            <button
              onClick={() => setIsReferralOpen(true)}
              className="px-5 py-2.5 rounded-full bg-white border border-[#D4C8B5] hover:border-[#C5A46D] text-[#4A3028] text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all"
            >
              <Users className="w-4 h-4 text-[#C5A46D]" />
              <span>Invite Friends (Earn $20 Credit)</span>
            </button>
          </div>

          {/* 4 Community Look Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLooks.map((look) => {
              const matchedProd = products.find((p) => p.id === look.productKey);

              return (
                <div
                  key={look.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E9E0D2] hover:border-[#C5A46D] hover:shadow-luxury transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#F7F3EB]">
                    <img
                      src={look.image}
                      alt={look.author}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 flex items-center space-x-1.5 text-white text-xs font-bold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                      <Instagram className="w-3 h-3 text-[#DFC8A2]" />
                      <span>{look.author}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[11px] text-[#DFC8A2] font-medium">{look.handle}</p>
                      <p className="text-xs line-clamp-2 mt-0.5 leading-snug drop-shadow-sm">
                        {look.caption}
                      </p>
                    </div>
                  </div>

                  {matchedProd && (
                    <div className="p-3.5 bg-[#F7F3EB] border-t border-[#E9E0D2] flex items-center justify-between">
                      <div className="truncate mr-2">
                        <span className="text-[10px] text-[#8C7A70] uppercase font-bold block">Featured Item</span>
                        <span className="font-serif text-xs font-bold text-[#4A3028] truncate block">
                          {matchedProd.name}
                        </span>
                      </div>
                      <button
                        onClick={() => setActiveDetailProduct(matchedProd)}
                        className="px-3 py-1 rounded-full bg-white hover:bg-[#4A3028] hover:text-white border border-[#D4C8B5] text-[11px] font-bold text-[#4A3028] transition-colors whitespace-nowrap shadow-sm"
                      >
                        Shop Look
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Referral Program Modal */}
      {isReferralOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#F7F3EB] rounded-3xl border border-[#C5A46D]/50 shadow-2xl overflow-hidden animate-fadeIn">
            
            <div className="bg-[#4A3028] text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-[#C5A46D]" />
                <div>
                  <h3 className="font-serif text-base font-bold">Refer a Friend (Growth Engine)</h3>
                  <p className="text-xs text-[#DFC8A2]">Dimension 6: Viral Marketing Flywheel</p>
                </div>
              </div>
              <button
                onClick={() => setIsReferralOpen(false)}
                className="p-1 rounded-full text-[#DFC8A2] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs">
              <div className="text-center space-y-1">
                <span className="text-2xl font-serif font-bold text-[#4A3028]">Give $20, Get $20</span>
                <p className="text-[#63443A] leading-relaxed">
                  Share your personal invitation link. When your colleague or classmate places their first order of $75+, both of you instantly receive a $20 store voucher.
                </p>
              </div>

              {/* Shareable Link Box */}
              <div className="p-3 bg-white rounded-2xl border border-[#D4C8B5] flex items-center justify-between">
                <input
                  type="text"
                  readOnly
                  value={referralLink}
                  className="bg-transparent text-xs font-mono text-[#4A3028] flex-1 focus:outline-none truncate mr-2"
                />
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-xl bg-[#4A3028] text-white hover:bg-[#35211B] flex items-center space-x-1 font-semibold text-[11px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C5A46D]" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Referral Balance Card */}
              <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] space-y-2">
                <div className="flex justify-between items-center text-[#4A3028] font-bold">
                  <span>Your Referral Credits Earned:</span>
                  <span className="font-mono text-base text-emerald-700">$40.00</span>
                </div>
                <p className="text-[11px] text-[#8C7A70]">
                  2 friends successfully redeemed their vouchers. Credits auto-apply at checkout.
                </p>
              </div>

              <button
                onClick={() => setIsReferralOpen(false)}
                className="w-full py-3 rounded-full bg-[#4A3028] text-white font-semibold hover:bg-[#35211B]"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
