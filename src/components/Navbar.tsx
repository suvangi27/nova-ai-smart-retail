import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  Search, 
  Crown, 
  BarChart3, 
  Presentation, 
  Truck, 
  User, 
  Menu, 
  X,
  Compass
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Category } from '../types';

export const Navbar: React.FC = () => {
  const {
    cartItemCount,
    cartTotal,
    wishlist,
    activePersona,
    userProfile,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsQuizOpen,
    setIsNovaPlusOpen,
    setIsAdminOpen,
    setIsMbaOverviewOpen,
    setIsOrderTrackingOpen,
    setIsProfileOpen
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categories: Category[] = ['All', 'Tech & Audio', 'Fashion & Apparel', 'Home & Living', 'Beauty & Wellness', 'Work & Study'];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F3EB]/95 backdrop-blur-md border-b border-[#E9E0D2] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#4A3028] text-[#F7F3EB] px-4 py-1.5 text-xs font-medium flex justify-between items-center tracking-wide">
        <div className="hidden sm:flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
          <span>MBA Digital Business Challenge 2026 — Live Interactive Demo Store</span>
        </div>
        <div className="mx-auto sm:mx-0 flex items-center space-x-4">
          <span className="text-[#C5A46D] font-semibold">Limited Drop:</span>
          <span>Use code <code className="bg-[#35211B] text-[#C5A46D] px-1.5 py-0.5 rounded font-mono font-bold">NOVA2026</code> for 15% off</span>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <button 
            onClick={() => setIsOrderTrackingOpen(true)}
            className="hover:text-[#C5A46D] transition-colors flex items-center space-x-1"
          >
            <Truck className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Track Order</span>
          </button>
          <span>|</span>
          <button 
            onClick={() => setIsMbaOverviewOpen(true)}
            className="hover:text-[#C5A46D] transition-colors flex items-center space-x-1 font-semibold text-[#C5A46D]"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>MBA Pitch Mode</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full bg-[#4A3028] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-[#C5A46D]/40">
                <Sparkles className="w-5 h-5 text-[#C5A46D]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#4A3028] flex items-center">
                  NOVA
                  <span className="text-[#C5A46D] ml-0.5 text-xs font-sans tracking-widest font-semibold uppercase px-1.5 py-0.5 bg-[#E9E0D2] rounded ml-1.5">AI</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#63443A] font-medium -mt-1">
                  Shop Smarter. Live Better.
                </span>
              </div>
            </a>
          </div>

          {/* Search Bar with live filter */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4 relative">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search smart bundles, audio, fashion, workspace..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/80 border border-[#D4C8B5] rounded-full py-2 pl-10 pr-10 text-sm text-[#4A3028] placeholder-[#9E8B83] focus:outline-none focus:ring-2 focus:ring-[#C5A46D] focus:border-transparent transition-all shadow-sm"
              />
              <Search className="w-4 h-4 text-[#9E8B83] absolute left-3.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-[#9E8B83] hover:text-[#4A3028]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Action Badges and Modals */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Style Quiz Trigger */}
            <button
              onClick={() => setIsQuizOpen(true)}
              className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E9E0D2] hover:bg-[#D4C8B5] text-[#4A3028] border border-[#C5A46D]/30 transition-all hover:scale-105"
              title="Calibrate your shopping style quiz"
            >
              <Compass className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Style Quiz</span>
            </button>

            {/* Persona Switcher Pill */}
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#D4C8B5] text-[#4A3028] hover:border-[#C5A46D] transition-all"
              title="Switch Target Persona"
            >
              <User className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span className="hidden sm:inline font-semibold">{activePersona}</span>
            </button>

            {/* NOVA Plus Membership Pill */}
            <button
              onClick={() => setIsNovaPlusOpen(true)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm ${
                userProfile.isNovaPlus 
                  ? 'bg-gradient-to-r from-[#C5A46D] to-[#B38E54] text-white shadow-gold-glow'
                  : 'bg-white hover:bg-[#F2ECE2] text-[#4A3028] border border-[#C5A46D]/60'
              }`}
            >
              <Crown className={`w-3.5 h-3.5 ${userProfile.isNovaPlus ? 'text-white' : 'text-[#C5A46D]'}`} />
              <span className="hidden sm:inline">{userProfile.isNovaPlus ? 'NOVA Plus Active' : 'NOVA Plus'}</span>
            </button>

            {/* Admin Dashboard Pill */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="hidden lg:flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-[#4A3028] text-[#F7F3EB] hover:bg-[#35211B] transition-all"
              title="Open MBA Admin & Analytics Telemetry"
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Analytics</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 rounded-full hover:bg-white/70 text-[#4A3028] transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#C5A46D] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2 px-3 py-2 rounded-full bg-[#4A3028] text-white hover:bg-[#35211B] transition-all shadow-md group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">{cartItemCount}</span>
              <span className="hidden md:inline text-xs font-mono font-medium text-[#DFC8A2] border-l border-[#63443A] pl-2">
                ${cartTotal.toFixed(2)}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#4A3028] hover:bg-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Category Navigation Bar (Subnav) */}
        <div className="hidden md:flex items-center space-x-1 py-2.5 overflow-x-auto border-t border-[#E9E0D2]/60 scrollbar-none text-xs">
          <span className="text-[11px] font-semibold text-[#8C7A70] uppercase tracking-wider mr-2">Categories:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#4A3028] text-white shadow-sm'
                  : 'text-[#63443A] hover:text-[#4A3028] hover:bg-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="ml-auto flex items-center space-x-2">
            <button 
              onClick={() => setIsMbaOverviewOpen(true)}
              className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#C5A46D]/20 to-[#E9E0D2] text-[#4A3028] border border-[#C5A46D]/40 font-semibold flex items-center space-x-1 hover:border-[#C5A46D]"
            >
              <Presentation className="w-3 h-3 text-[#C5A46D]" />
              <span>10 MBA Dimensions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E9E0D2] px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F7F3EB] border border-[#D4C8B5] rounded-lg py-2 pl-10 pr-4 text-sm text-[#4A3028]"
            />
            <Search className="w-4 h-4 text-[#9E8B83] absolute left-3 top-2.5" />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold text-[#8C7A70] uppercase px-1">Filter Categories</div>
            <div className="grid grid-cols-2 gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md text-xs font-medium ${
                    selectedCategory === cat ? 'bg-[#4A3028] text-white' : 'bg-[#F7F3EB] text-[#4A3028]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#E9E0D2] flex flex-col space-y-2">
            <button
              onClick={() => { setIsMbaOverviewOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg bg-[#E9E0D2] text-[#4A3028] text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <Presentation className="w-4 h-4 text-[#C5A46D]" />
                <span>MBA Business Overview (10 Dimensions)</span>
              </span>
              <span>→</span>
            </button>
            <button
              onClick={() => { setIsAdminOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg bg-[#4A3028] text-white text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-[#C5A46D]" />
                <span>Executive Admin & Analytics Dashboard</span>
              </span>
              <span>→</span>
            </button>
            <button
              onClick={() => { setIsOrderTrackingOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg bg-[#F7F3EB] text-[#4A3028] text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-[#C5A46D]" />
                <span>Fulfillment & Order Tracker</span>
              </span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
