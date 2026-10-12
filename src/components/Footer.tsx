import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Check, 
  Code2, 
  ShieldCheck, 
  Heart, 
  Presentation, 
  BarChart3, 
  Truck, 
  Crown,
  ChevronDown
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { 
    showNotification, 
    applyCoupon, 
    setIsMbaOverviewOpen, 
    setIsAdminOpen, 
    setIsOrderTrackingOpen,
    setIsNovaPlusOpen 
  } = useStore();

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showJsonLd, setShowJsonLd] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    applyCoupon('WELCOME10');
    showNotification('Subscribed! 10% coupon WELCOME10 unlocked and applied.');
  };

  const sampleJsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "name": "NOVA AI Smart Retail Store",
    "url": "https://nova-retail.store",
    "description": "Next-generation luxury e-commerce for MBA Digital Business Challenge 2026.",
    "founder": "MBA Challenge Innovation Team",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Credit Card, Apple Pay, Klarna BNPL",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Curated Lifestyle & Work Essentials",
      "numberOfItems": 18
    }
  };

  return (
    <footer className="bg-[#4A3028] text-[#F7F3EB] pt-16 pb-12 border-t border-[#C5A46D]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Curation Strip */}
        <div className="bg-[#35211B] rounded-3xl p-6 sm:p-10 border border-[#C5A46D]/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D] flex items-center justify-center lg:justify-start space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Marketing • Dimension 6</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Join the NOVA Curation Circle
            </h3>
            <p className="text-xs sm:text-sm text-[#DFC8A2] leading-relaxed">
              Receive limited capsule drop notifications, algorithmic seasonal style guides, and an instant 10% discount on your first order.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="bg-[#4A3028] p-4 rounded-2xl border border-[#C5A46D] text-center space-y-1">
                <p className="text-xs font-bold text-white flex items-center justify-center space-x-1">
                  <Check className="w-4 h-4 text-[#C5A46D]" />
                  <span>You're Subscribed! Coupon Active:</span>
                </p>
                <p className="font-mono text-sm font-bold text-[#DFC8A2]">WELCOME10</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your university or work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#4A3028] border border-[#63443A] rounded-full py-3 px-5 text-xs text-white placeholder-[#8C7A70] focus:outline-none focus:ring-2 focus:ring-[#C5A46D] flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#B38E54] text-white text-xs font-bold hover:brightness-105 transition-all shadow-gold-glow flex items-center justify-center space-x-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          {/* Brand Info */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#35211B] flex items-center justify-center border border-[#C5A46D]/50">
                <Sparkles className="w-4 h-4 text-[#C5A46D]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">NOVA</span>
            </div>
            <p className="text-[#DFC8A2] text-xs leading-relaxed">
              Next-generation retail prototype built for the <strong>MBA Digital Business Challenge 2026</strong>. Blending 3D immersion, budget-bound discovery, and operational agility.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-[11px] text-[#C5A46D]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Carbon-Neutral Fulfillment</span>
            </div>
          </div>

          {/* Business Dimensions Quick Links */}
          <div className="space-y-2.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              10 MBA Dimensions
            </h4>
            <ul className="space-y-1.5 text-[#DFC8A2]">
              <li>
                <button onClick={() => setIsMbaOverviewOpen(true)} className="hover:text-white transition-colors">
                  • 01. Monetization Model
                </button>
              </li>
              <li>
                <button onClick={() => setIsMbaOverviewOpen(true)} className="hover:text-white transition-colors">
                  • 02. Target Personas
                </button>
              </li>
              <li>
                <button onClick={() => setIsMbaOverviewOpen(true)} className="hover:text-white transition-colors">
                  • 04. Customer Journey
                </button>
              </li>
              <li>
                <button onClick={() => setIsMbaOverviewOpen(true)} className="hover:text-white transition-colors">
                  • 07. AI & Heuristic Curation
                </button>
              </li>
              <li>
                <button onClick={() => setIsMbaOverviewOpen(true)} className="hover:text-white transition-colors">
                  • 10. Competitive Advantage
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Demos */}
          <div className="space-y-2.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Live Interactive Tools
            </h4>
            <ul className="space-y-1.5 text-[#DFC8A2]">
              <li>
                <button onClick={() => setIsAdminOpen(true)} className="hover:text-white transition-colors flex items-center space-x-1">
                  <BarChart3 className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Admin Telemetry Dashboard</span>
                </button>
              </li>
              <li>
                <button onClick={() => setIsOrderTrackingOpen(true)} className="hover:text-white transition-colors flex items-center space-x-1">
                  <Truck className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Order Fulfillment Simulator</span>
                </button>
              </li>
              <li>
                <button onClick={() => setIsNovaPlusOpen(true)} className="hover:text-white transition-colors flex items-center space-x-1">
                  <Crown className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>NOVA Plus VIP Membership</span>
                </button>
              </li>
              <li>
                <button onClick={() => setIsMbaOverviewOpen(true)} className="hover:text-white transition-colors flex items-center space-x-1">
                  <Presentation className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>10-Minute MBA Pitch Deck</span>
                </button>
              </li>
            </ul>
          </div>

          {/* SEO Structured Data Schema */}
          <div className="space-y-2.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              SEO & Structured Data
            </h4>
            <p className="text-[11px] text-[#DFC8A2] leading-relaxed">
              Google Shopping JSON-LD Schema markup configured for rich snippet search presence.
            </p>
            <button
              onClick={() => setShowJsonLd(!showJsonLd)}
              className="px-3 py-1.5 rounded-lg bg-[#35211B] text-[#DFC8A2] hover:text-white border border-[#63443A] text-[11px] font-mono flex items-center space-x-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>{showJsonLd ? 'Hide Schema' : 'Inspect JSON-LD Schema'}</span>
            </button>
          </div>

        </div>

        {/* JSON-LD Schema Drawer */}
        {showJsonLd && (
          <div className="p-4 rounded-2xl bg-[#35211B] border border-[#63443A] text-xs font-mono text-[#DFC8A2] overflow-x-auto">
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-[#4A3028]">
              <span className="font-bold text-white">Google Shopping Rich Snippet Schema (JSON-LD)</span>
              <button onClick={() => setShowJsonLd(false)} className="text-[10px] text-[#8C7A70] hover:text-white">Close</button>
            </div>
            <pre className="text-[11px] leading-snug">{JSON.stringify(sampleJsonLd, null, 2)}</pre>
          </div>
        )}

        {/* Bottom Credits & Legal Strip */}
        <div className="pt-8 border-t border-[#63443A] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#DFC8A2] gap-4">
          <p>© 2026 NOVA AI Smart Retail. Developed for the MBA Digital Business Challenge 2026.</p>
          <div className="flex items-center space-x-4">
            <span>Palette: Ivory • Chocolate • Champagne Gold</span>
            <span>•</span>
            <span>Three.js WebGL & React 18</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
