import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Compass, GraduationCap, Briefcase, Gem, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStore } from '../context/StoreContext';
import { CustomerPersona, Category, QuizPreferences } from '../types';

export const StyleQuizModal: React.FC = () => {
  const { isQuizOpen, setIsQuizOpen, saveQuizPreferences, setSelectedCategory, setSelectedSort } = useStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPersona, setSelectedPersona] = useState<CustomerPersona>('Young Professional');
  const [selectedBudget, setSelectedBudget] = useState<'Under $75' | '$75 - $200' | '$200+'>('$75 - $200');
  const [selectedGoal, setSelectedGoal] = useState<'Budget-Savvy' | 'Aesthetic & Luxury' | 'Productivity & Work' | 'Eco & Wellness'>('Productivity & Work');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(['Tech & Audio', 'Work & Study']);

  if (!isQuizOpen) return null;

  const toggleCategory = (cat: Category) => {
    if (selectedCategories.includes(cat)) {
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter((c) => c !== cat));
      }
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleFinish = () => {
    const prefs: QuizPreferences = {
      persona: selectedPersona,
      budgetTier: selectedBudget,
      primaryGoal: selectedGoal,
      preferredCategories: selectedCategories,
      completed: true
    };

    saveQuizPreferences(prefs);
    setSelectedSort('ai-match');
    if (selectedCategories.length === 1) {
      setSelectedCategory(selectedCategories[0]);
    } else {
      setSelectedCategory('All');
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A46D', '#4A3028', '#E9E0D2']
      });
    } catch {
      // Fallback gracefully
    }

    setIsQuizOpen(false);
    setCurrentStep(1);

    const el = document.getElementById('catalogue-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#F7F3EB] rounded-3xl border border-[#C5A46D]/40 shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="bg-[#4A3028] text-[#F7F3EB] p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Discover Your Style & Budget Profile</h3>
              <p className="text-xs text-[#DFC8A2]">AI Preference Calibration Engine • Step {currentStep} of 4</p>
            </div>
          </div>
          <button
            onClick={() => setIsQuizOpen(false)}
            className="p-1 rounded-full text-[#DFC8A2] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#E9E0D2] h-1.5">
          <div
            className="bg-[#C5A46D] h-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* STEP 1: Persona */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A46D]">Dimension 2: Target Segment</span>
                <h4 className="font-serif text-2xl font-bold text-[#4A3028] mt-1">Which shopper archetype best fits you?</h4>
                <p className="text-xs text-[#63443A] mt-1">Helps our recommendation algorithm prioritize price vs luxury styling.</p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {[
                  {
                    id: 'Student' as CustomerPersona,
                    title: 'The Ambitious Student',
                    icon: GraduationCap,
                    desc: 'Prioritizes smart budget limits, study endurance, tech accessories & verified student perks (20% off).'
                  },
                  {
                    id: 'Young Professional' as CustomerPersona,
                    title: 'The Rising Executive / Professional',
                    icon: Briefcase,
                    desc: 'Demands seamless work-from-anywhere setups, refined timepieces, and acoustic noise isolation.'
                  },
                  {
                    id: 'Lifestyle Shopper' as CustomerPersona,
                    title: 'The Mindful Lifestyle Connoisseur',
                    icon: Gem,
                    desc: 'Values sustainable French linen, clean botanicals, slow living, and organic artisan craftsmanship.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedPersona(item.id)}
                    className={`p-4 rounded-2xl border text-left flex items-start space-x-3.5 transition-all ${
                      selectedPersona === item.id
                        ? 'border-[#C5A46D] bg-white shadow-luxury ring-2 ring-[#C5A46D]/40'
                        : 'border-[#D4C8B5] bg-white/60 hover:bg-white'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${selectedPersona === item.id ? 'bg-[#4A3028] text-[#C5A46D]' : 'bg-[#E9E0D2] text-[#4A3028]'}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#4A3028]">{item.title}</span>
                        {selectedPersona === item.id && <Check className="w-4 h-4 text-[#C5A46D]" />}
                      </div>
                      <p className="text-xs text-[#63443A] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Budget */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A46D]">Dimension 3: Budget-Aware Discovery</span>
                <h4 className="font-serif text-2xl font-bold text-[#4A3028] mt-1">What is your target budget comfort range?</h4>
                <p className="text-xs text-[#63443A] mt-1">NOVA never recommends out-of-reach luxury without budget-friendly equivalents.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {[
                  { tier: 'Under $75' as const, label: 'Accessible Tier', highlight: 'Smart essentials under $75' },
                  { tier: '$75 - $200' as const, label: 'Optimal Value', highlight: 'Highest rated craft & durability' },
                  { tier: '$200+' as const, label: 'Premium Luxury', highlight: 'Bespoke timepieces & acoustic audio' }
                ].map((b) => (
                  <button
                    key={b.tier}
                    onClick={() => setSelectedBudget(b.tier)}
                    className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                      selectedBudget === b.tier
                        ? 'border-[#C5A46D] bg-white shadow-luxury ring-2 ring-[#C5A46D]/40'
                        : 'border-[#D4C8B5] bg-white/60 hover:bg-white'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E9E0D2] flex items-center justify-center text-[#4A3028] mb-2 font-bold font-mono">
                      $
                    </div>
                    <p className="font-bold text-base text-[#4A3028]">{b.tier}</p>
                    <p className="text-[11px] font-semibold text-[#C5A46D] uppercase mt-0.5">{b.label}</p>
                    <p className="text-[10px] text-[#63443A] mt-2">{b.highlight}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Priority Goal */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A46D]">Personalization Weighting</span>
                <h4 className="font-serif text-2xl font-bold text-[#4A3028] mt-1">What is your highest decision priority?</h4>
                <p className="text-xs text-[#63443A] mt-1">Determines our AI ranking weight for match scoring.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { key: 'Budget-Savvy' as const, title: 'Budget-Savvy', desc: 'Max savings, coupon triggers & bundle discounts' },
                  { key: 'Aesthetic & Luxury' as const, title: 'Aesthetic & Luxury', desc: 'Prestige materials, timeless minimal design' },
                  { key: 'Productivity & Work' as const, title: 'Productivity & Work', desc: 'Ergonomic performance and focus enhancement' },
                  { key: 'Eco & Wellness' as const, title: 'Eco & Wellness', desc: 'Zero plastic, cruelty-free, carbon-neutral verified' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedGoal(item.key)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedGoal === item.key
                        ? 'border-[#C5A46D] bg-white shadow-luxury ring-2 ring-[#C5A46D]/40'
                        : 'border-[#D4C8B5] bg-white/60 hover:bg-white'
                    }`}
                  >
                    <p className="font-bold text-sm text-[#4A3028] flex items-center justify-between">
                      <span>{item.title}</span>
                      {selectedGoal === item.key && <Check className="w-3.5 h-3.5 text-[#C5A46D]" />}
                    </p>
                    <p className="text-[11px] text-[#63443A] mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Preferred Categories */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A46D]">Feed Calibration</span>
                <h4 className="font-serif text-2xl font-bold text-[#4A3028] mt-1">Select your primary interests</h4>
                <p className="text-xs text-[#63443A] mt-1">Select one or more to personalize your store front.</p>
              </div>

              <div className="flex flex-wrap gap-2.5 justify-center pt-2">
                {(['Tech & Audio', 'Fashion & Apparel', 'Home & Living', 'Beauty & Wellness', 'Work & Study'] as Category[]).map((cat) => {
                  const isSelected = selectedCategories.includes(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                        isSelected
                          ? 'bg-[#4A3028] text-white shadow-md'
                          : 'bg-white border border-[#D4C8B5] text-[#4A3028] hover:border-[#C5A46D]'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A46D]" />}
                      <span>{cat}</span>
                    </button>
                  );
                })}
              </div>

              {/* Profile Summary Card */}
              <div className="bg-[#E9E0D2]/70 rounded-2xl p-4 border border-[#C5A46D]/30 mt-4 text-xs space-y-1">
                <div className="flex justify-between text-[#4A3028] font-bold">
                  <span>Calibrated Persona:</span>
                  <span className="text-[#C5A46D]">{selectedPersona}</span>
                </div>
                <div className="flex justify-between text-[#63443A]">
                  <span>Budget Tier:</span>
                  <span className="font-medium text-[#4A3028]">{selectedBudget}</span>
                </div>
                <div className="flex justify-between text-[#63443A]">
                  <span>Core Anchor:</span>
                  <span className="font-medium text-[#4A3028]">{selectedGoal}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="bg-[#F2ECE2] px-6 py-4 border-t border-[#E9E0D2] flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 rounded-full border border-[#D4C8B5] text-xs font-semibold text-[#4A3028] hover:bg-white flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-5 py-2.5 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B] flex items-center space-x-1.5 shadow"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#B38E54] text-white text-xs font-bold hover:brightness-105 flex items-center space-x-2 shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply & View My Recommendations</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
