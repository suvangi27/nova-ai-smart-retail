import React, { useState } from 'react';
import { 
  X, 
  Presentation, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  TrendingUp, 
  FileText, 
  Layers,
  Download
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { MBA_BUSINESS_DIMENSIONS, MBA_FINANCIAL_FORECAST } from '../data/businessOverview';

export const MbaBusinessOverviewModal: React.FC = () => {
  const { isMbaOverviewOpen, setIsMbaOverviewOpen } = useStore();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'slides' | 'memo'>('slides');

  if (!isMbaOverviewOpen) return null;

  const currentDim = MBA_BUSINESS_DIMENSIONS[currentSlideIndex];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl bg-[#F7F3EB] rounded-3xl border border-[#C5A46D]/50 shadow-2xl overflow-hidden max-h-[94vh] flex flex-col animate-fadeIn">
        
        {/* Header */}
        <div className="bg-[#4A3028] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#C5A46D]/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#35211B] flex items-center justify-center border border-[#C5A46D]/50">
              <Presentation className="w-5 h-5 text-[#C5A46D]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold">MBA Digital Business Challenge 2026</h3>
                <span className="text-[10px] bg-[#C5A46D] text-[#4A3028] px-2 py-0.5 rounded-full font-bold uppercase">
                  10-Min Pitch Deck
                </span>
              </div>
              <p className="text-xs text-[#DFC8A2]">
                Comprehensive 10-Dimension Executive Presentation & Strategic Case
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex bg-[#35211B] p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setViewMode('slides')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'slides' ? 'bg-[#C5A46D] text-white' : 'text-[#DFC8A2] hover:text-white'
                }`}
              >
                Slide View
              </button>
              <button
                onClick={() => setViewMode('memo')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'memo' ? 'bg-[#C5A46D] text-white' : 'text-[#DFC8A2] hover:text-white'
                }`}
              >
                Executive Memo
              </button>
            </div>

            <button
              onClick={() => setIsMbaOverviewOpen(false)}
              className="p-1.5 rounded-full text-[#DFC8A2] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SLIDE VIEW */}
        {viewMode === 'slides' ? (
          <div className="flex-1 overflow-y-auto flex flex-col justify-between p-6 sm:p-8 space-y-6">
            
            {/* Slide Navigation Dots */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E0D2]">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#63443A]">
                <span>Dimension {currentDim.number} of 10:</span>
                <span className="text-[#4A3028] font-bold">{currentDim.title}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                {MBA_BUSINESS_DIMENSIONS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlideIndex === idx ? 'bg-[#C5A46D] w-6' : 'bg-[#D4C8B5] hover:bg-[#8C7A70]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Slide Content Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E0D2] shadow-sm space-y-6 flex-1">
              
              {/* Slide Meta Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#E9E0D2] text-[#4A3028] w-fit">
                  Slide {currentDim.number} • {currentDim.title}
                </span>
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#4A3028] text-[#C5A46D] w-fit">
                  {currentDim.keyMetric}
                </span>
              </div>

              {/* Tagline */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A3028]">
                  {currentDim.title}
                </h2>
                <p className="text-sm sm:text-base font-serif italic text-[#C5A46D] mt-1 font-semibold">
                  "{currentDim.tagline}"
                </p>
              </div>

              {/* Executive Summary */}
              <p className="text-xs sm:text-sm text-[#63443A] leading-relaxed">
                {currentDim.executiveSummary}
              </p>

              {/* Implementation Bullets */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#4A3028]">
                  Core Operational & Commercial Levers:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDim.bulletPoints.map((bp, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-[#F7F3EB] border border-[#E9E0D2] flex items-start space-x-2.5 text-xs text-[#63443A]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A46D] flex-shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Implication Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E9E0D2]/80 to-[#DFC8A2]/50 border border-[#C5A46D]/40 text-xs text-[#4A3028]">
                <strong>MBA Strategic Defense:</strong> {currentDim.strategicImplication}
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))}
                disabled={currentSlideIndex === 0}
                className="px-5 py-2.5 rounded-full border border-[#D4C8B5] bg-white text-xs font-semibold text-[#4A3028] hover:bg-[#F2ECE2] disabled:opacity-40 flex items-center space-x-1.5 shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Dimension</span>
              </button>

              <span className="text-xs font-mono font-bold text-[#8C7A70]">
                {currentSlideIndex + 1} / 10
              </span>

              <button
                onClick={() => setCurrentSlideIndex(Math.min(9, currentSlideIndex + 1))}
                disabled={currentSlideIndex === 9}
                className="px-6 py-2.5 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B] disabled:opacity-40 flex items-center space-x-1.5 shadow"
              >
                <span>Next Dimension</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </button>
            </div>

          </div>
        ) : (
          /* MEMO VIEW (All 10 dimensions listed in depth) */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Memo Header */}
            <div className="border-b border-[#E9E0D2] pb-6 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-[#C5A46D]">
                Executive Briefing Document
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#4A3028]">
                NOVA AI Smart Retail Store: 10-Dimension Strategic Architecture
              </h2>
              <p className="text-xs text-[#63443A]">
                Prepared for the MBA Digital Business Challenge 2026 Evaluation Committee.
              </p>
            </div>

            {/* 3-Year Financial Forecast Table */}
            <div className="bg-white rounded-2xl p-6 border border-[#E9E0D2] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-base font-bold text-[#4A3028]">
                  3-Year Financial & Unit Economics Forecast
                </h4>
                <span className="text-xs font-mono text-[#C5A46D] font-bold">2026 - 2028 Projection</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E9E0D2] text-[#8C7A70]">
                      <th className="pb-2">Period</th>
                      <th className="pb-2">Gross Revenue</th>
                      <th className="pb-2">Gross Margin</th>
                      <th className="pb-2">Net Margin</th>
                      <th className="pb-2">Active Shoppers</th>
                      <th className="pb-2">NOVA Plus Subscribers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2ECE2] text-[#4A3028] font-medium">
                    {MBA_FINANCIAL_FORECAST.map((fc) => (
                      <tr key={fc.year} className="hover:bg-[#F7F3EB]">
                        <td className="py-2.5 font-bold">{fc.year}</td>
                        <td className="py-2.5 font-mono font-bold text-[#C5A46D]">{fc.revenue}</td>
                        <td className="py-2.5">{fc.grossMargin}</td>
                        <td className="py-2.5">{fc.netMargin}</td>
                        <td className="py-2.5">{fc.activeUsers}</td>
                        <td className="py-2.5 font-bold">{fc.novaPlusMembers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 10 Dimension Memo Blocks */}
            <div className="space-y-6">
              {MBA_BUSINESS_DIMENSIONS.map((dim) => (
                <div key={dim.number} className="bg-white rounded-2xl p-6 border border-[#E9E0D2] shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#E9E0D2] text-[#4A3028]">
                      Dimension {dim.number}: {dim.title}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#C5A46D]">
                      {dim.keyMetric}
                    </span>
                  </div>

                  <p className="font-serif text-sm font-semibold text-[#4A3028] italic">
                    "{dim.tagline}"
                  </p>

                  <p className="text-xs text-[#63443A] leading-relaxed">
                    {dim.executiveSummary}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {dim.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-[#63443A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3 rounded-xl bg-[#F7F3EB] text-[11px] text-[#4A3028] font-medium border border-[#E9E0D2]">
                    <strong>MBA Evaluation:</strong> {dim.strategicImplication}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 bg-[#F2ECE2] border-t border-[#E9E0D2] flex items-center justify-between">
          <span className="text-[11px] text-[#8C7A70] italic">
            *Prepared exclusively for MBA Digital Business Challenge 2026
          </span>
          <button
            onClick={() => setIsMbaOverviewOpen(false)}
            className="px-5 py-2 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B]"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
