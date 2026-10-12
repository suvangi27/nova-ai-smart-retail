import React from 'react';
import { Sparkles, ShoppingBag, Check, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { SmartBundle } from '../types';

export const SmartBundlesSection: React.FC = () => {
  const { bundles, addBundleToCart, products, setActiveDetailProduct } = useStore();

  return (
    <section className="py-20 bg-gradient-to-b from-[#F7F3EB] via-[#F2ECE2] to-[#F7F3EB] border-b border-[#E9E0D2] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A46D]/40 text-xs font-semibold text-[#4A3028] shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Dimension 1 & 7: Smart Bundles Engine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3028]">
            Algorithmic Smart Bundles
          </h2>
          <p className="text-sm text-[#63443A] mt-2 leading-relaxed">
            Engineered around daily life workflows. NOVA’s recommendation engine packages complementary essentials to unlock up to 20% automated savings, elevating Average Order Value (AOV).
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => {
            const bundleItems = products.filter((p) => bundle.productIds.includes(p.id));

            return (
              <div
                key={bundle.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E9E0D2] hover:border-[#C5A46D] hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7F3EB]">
                    <img
                      src={bundle.image}
                      alt={bundle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Discount Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C5A46D] text-white font-bold text-xs shadow-md">
                      {bundle.badge}
                    </span>

                    {/* Persona Target Tag */}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-[#4A3028] font-bold text-[10px] backdrop-blur-sm">
                      For: {bundle.targetPersona}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-serif text-lg font-bold leading-tight drop-shadow-sm">
                        {bundle.name}
                      </h3>
                      <p className="text-[11px] text-[#E9E0D2] mt-0.5 drop-shadow-sm">
                        {bundle.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Included Products List */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs text-[#63443A] leading-relaxed">
                      {bundle.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#F2ECE2]">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A70]">
                        Bundle Includes ({bundleItems.length} Products):
                      </p>
                      <div className="space-y-2">
                        {bundleItems.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setActiveDetailProduct(item)}
                            className="flex items-center space-x-3 p-2 rounded-xl bg-[#F7F3EB] hover:bg-[#E9E0D2] transition-colors cursor-pointer"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-[#4A3028] truncate">{item.name}</p>
                              <p className="text-[10px] text-[#8C7A70]">{item.category}</p>
                            </div>
                            <span className="text-xs font-mono font-bold text-[#4A3028]">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Pricing and Action */}
                <div className="p-5 bg-[#F7F3EB] border-t border-[#E9E0D2] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-[#8C7A70] line-through font-mono mr-2">
                        ${bundle.originalTotal.toFixed(2)}
                      </span>
                      <span className="text-2xl font-bold font-mono text-[#4A3028]">
                        ${bundle.bundlePrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Save ${(bundle.originalTotal - bundle.bundlePrice).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => addBundleToCart(bundle)}
                    className="w-full py-3 rounded-full bg-[#4A3028] hover:bg-[#35211B] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2 group"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                    <span>Add Complete Bundle to Bag</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
