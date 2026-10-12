import React from 'react';
import { Sparkles, ShieldCheck, Zap, Heart } from 'lucide-react';

export const FallbackHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[450px] sm:h-[520px] flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#E9E0D2]/70 via-[#F7F3EB] to-[#DFC8A2]/50 border border-[#C5A46D]/30 shadow-2xl p-6">
      {/* Background ambient luxury glow rings */}
      <div className="absolute w-72 h-72 rounded-full bg-[#C5A46D]/20 blur-3xl -top-10 -right-10 pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full bg-[#4A3028]/10 blur-3xl -bottom-10 -left-10 pointer-events-none" />

      {/* Central Hero Product Card - 3D Styled */}
      <div className="relative z-10 w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-2xl p-5 border border-[#C5A46D]/40 shadow-luxury transform hover:scale-[1.02] transition-all duration-500">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#4A3028] text-[#F7F3EB] rounded-full flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-[#C5A46D]" />
            <span>Featured AI Pick</span>
          </span>
          <span className="text-xs font-semibold text-[#4A3028] bg-[#E9E0D2] px-2 py-0.5 rounded-full">
            98% Style Match
          </span>
        </div>

        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 group bg-[#F7F3EB]">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
            alt="Aura Studio Headphones"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A3028]/40 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-white">
            <div>
              <p className="text-[11px] font-medium text-[#E9E0D2]">Aura Acoustics Paris</p>
              <p className="text-sm font-bold font-serif">Aura Studio ANC</p>
            </div>
            <p className="text-sm font-bold font-mono text-[#DFC8A2]">$249.00</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-[#63443A] pt-2 border-t border-[#E9E0D2]">
          <div className="p-1.5 rounded-lg bg-[#F7F3EB]">
            <p className="font-bold text-[#4A3028]">45h</p>
            <p className="text-[10px]">Battery</p>
          </div>
          <div className="p-1.5 rounded-lg bg-[#F7F3EB]">
            <p className="font-bold text-[#4A3028]">Beryllium</p>
            <p className="text-[10px]">Acoustics</p>
          </div>
          <div className="p-1.5 rounded-lg bg-[#F7F3EB]">
            <p className="font-bold text-[#4A3028]">Eco A</p>
            <p className="text-[10px]">Impact</p>
          </div>
        </div>
      </div>

      {/* Floating Badge 1 - Left */}
      <div className="absolute left-2 sm:left-4 top-12 z-20 bg-white/95 backdrop-blur-md border border-[#C5A46D]/40 rounded-xl p-3 shadow-lg max-w-[170px] animate-float">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#4A3028]">
          <div className="w-6 h-6 rounded-full bg-[#E9E0D2] flex items-center justify-center text-[#C5A46D]">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[10px] text-[#8C7A70]">Adaptive Curation</p>
            <p className="text-xs font-bold">Personalized in 60s</p>
          </div>
        </div>
      </div>

      {/* Floating Badge 2 - Right */}
      <div className="absolute right-2 sm:right-4 bottom-14 z-20 bg-white/95 backdrop-blur-md border border-[#C5A46D]/40 rounded-xl p-3 shadow-lg max-w-[180px] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#4A3028]">
          <div className="w-6 h-6 rounded-full bg-[#E9E0D2] flex items-center justify-center text-[#4A3028]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
          </div>
          <div>
            <p className="text-[10px] text-[#8C7A70]">MBA 2026 Engine</p>
            <p className="text-xs font-bold">100% Carbon Neutral</p>
          </div>
        </div>
      </div>
    </div>
  );
};
