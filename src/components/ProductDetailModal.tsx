import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Truck, 
  RotateCcw, 
  Layers,
  Plus,
  Minus
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { INITIAL_REVIEWS } from '../data/products';

export const ProductDetailModal: React.FC = () => {
  const {
    activeDetailProduct,
    setActiveDetailProduct,
    addToCart,
    toggleWishlist,
    wishlist,
    products,
    userProfile
  } = useStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!activeDetailProduct) return null;

  const isFav = wishlist.includes(activeDetailProduct.id);
  const reviews = INITIAL_REVIEWS[activeDetailProduct.id] || [];

  // Related products (same category or bundle compatible)
  const related = products
    .filter((p) => p.id !== activeDetailProduct.id && (p.category === activeDetailProduct.category || p.isBundleEligible))
    .slice(0, 2);

  const galleryImages = activeDetailProduct.gallery.length > 0 
    ? activeDetailProduct.gallery 
    : [activeDetailProduct.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#C5A46D]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-fadeIn">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#F7F3EB] border-b border-[#E9E0D2] flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-[#8C7A70]">
            <span>Catalogue</span>
            <span>/</span>
            <span className="font-semibold text-[#4A3028]">{activeDetailProduct.category}</span>
          </div>
          <button
            onClick={() => setActiveDetailProduct(null)}
            className="p-1.5 rounded-full text-[#63443A] hover:bg-[#E9E0D2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Gallery Column */}
            <div className="space-y-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F7F3EB] border border-[#E9E0D2] shadow-sm relative">
                <img
                  src={galleryImages[selectedImageIndex] || activeDetailProduct.image}
                  alt={activeDetailProduct.name}
                  className="w-full h-full object-cover object-center"
                />
                {activeDetailProduct.isSponsored && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#4A3028] text-[#F7F3EB] border border-[#C5A46D]/40">
                    ★ Sponsored Partner
                  </span>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="flex space-x-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx ? 'border-[#C5A46D] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-[#63443A] pt-4 border-t border-[#E9E0D2]">
                <div className="p-2 bg-[#F7F3EB] rounded-xl flex flex-col items-center justify-center">
                  <Truck className="w-4 h-4 text-[#C5A46D] mb-1" />
                  <span>Carbon-Free Dispatch</span>
                </div>
                <div className="p-2 bg-[#F7F3EB] rounded-xl flex flex-col items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#C5A46D] mb-1" />
                  <span>2-Year Warranty</span>
                </div>
                <div className="p-2 bg-[#F7F3EB] rounded-xl flex flex-col items-center justify-center">
                  <RotateCcw className="w-4 h-4 text-[#C5A46D] mb-1" />
                  <span>30-Day Free Return</span>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E9E0D2] text-[#4A3028]">
                    {activeDetailProduct.category}
                  </span>
                  {activeDetailProduct.ecoScore && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Eco-Impact: Grade {activeDetailProduct.ecoScore}
                    </span>
                  )}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A3028]">
                  {activeDetailProduct.name}
                </h2>
                <p className="text-xs text-[#63443A] mt-1 font-medium italic">
                  {activeDetailProduct.tagline}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex text-[#C5A46D]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(activeDetailProduct.rating) ? 'fill-current' : 'text-[#D4C8B5]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#4A3028]">{activeDetailProduct.rating} / 5.0</span>
                  <span className="text-xs text-[#8C7A70]">({activeDetailProduct.reviewsCount} customer reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E9E0D2] flex items-center justify-between">
                <div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold font-mono text-[#4A3028]">
                      ${activeDetailProduct.price.toFixed(2)}
                    </span>
                    {activeDetailProduct.originalPrice && (
                      <span className="text-sm font-mono text-[#9E8B83] line-through">
                        ${activeDetailProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {userProfile.isNovaPlus && (
                    <p className="text-[11px] text-[#C5A46D] font-bold mt-0.5">
                      ★ NOVA Plus Member Price: ${(activeDetailProduct.price * 0.9).toFixed(2)} (10% Off)
                    </p>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-700 block">
                    ● In Stock ({activeDetailProduct.stockCount} units available)
                  </span>
                  <span className="text-[10px] text-[#8C7A70]">Ready to pack in Chicago Hub</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#63443A] leading-relaxed">
                {activeDetailProduct.description}
              </p>

              {/* Features List */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3028]">Key Highlights</h4>
                <ul className="space-y-1">
                  {activeDetailProduct.features.map((feat, i) => (
                    <li key={i} className="text-xs text-[#63443A] flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3028] mb-2">Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(activeDetailProduct.specs).map(([key, val]) => (
                    <div key={key} className="p-2 bg-[#F7F3EB] rounded-lg">
                      <span className="text-[10px] text-[#8C7A70] block">{key}</span>
                      <span className="font-semibold text-[#4A3028]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-4 border-t border-[#E9E0D2]">
                <div className="flex items-center border border-[#D4C8B5] rounded-full bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:bg-[#F7F3EB] rounded-full text-[#4A3028]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold font-mono">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:bg-[#F7F3EB] rounded-full text-[#4A3028]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(activeDetailProduct, quantity);
                    setActiveDetailProduct(null);
                  }}
                  className="flex-1 py-3 px-6 rounded-full bg-[#4A3028] hover:bg-[#35211B] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center space-x-2 group"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                  <span>Add {quantity} to Bag • ${(activeDetailProduct.price * quantity).toFixed(2)}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(activeDetailProduct.id)}
                  className={`p-3 rounded-full border transition-all ${
                    isFav
                      ? 'border-[#C5A46D] bg-[#F7F3EB] text-[#C5A46D]'
                      : 'border-[#D4C8B5] text-[#63443A] hover:border-[#4A3028]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="pt-8 border-t border-[#E9E0D2] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#4A3028]">
                Customer Testimonials ({reviews.length > 0 ? reviews.length : 'Demonstration Sample'})
              </h3>
              <span className="text-[11px] text-[#8C7A70] italic">
                *Sample reviews for MBA Digital Business Challenge demonstration
              </span>
            </div>

            <div className="space-y-3">
              {reviews.length > 0 ? (
                reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E9E0D2] space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-[#4A3028]">{rev.author}</span>
                        <span className="px-2 py-0.5 rounded-full bg-white text-[#C5A46D] text-[10px] font-semibold border border-[#C5A46D]/30">
                          {rev.persona}
                        </span>
                        {rev.verifiedPurchase && (
                          <span className="text-[10px] text-emerald-700 font-medium">✓ Verified Buyer</span>
                        )}
                      </div>
                      <span className="text-[#8C7A70] text-[10px]">{rev.date}</span>
                    </div>

                    <div className="flex text-[#C5A46D]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs font-semibold text-[#4A3028]">{rev.title}</p>
                    <p className="text-xs text-[#63443A]">{rev.comment}</p>
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#E9E0D2] text-xs text-[#63443A]">
                  <p className="font-semibold text-[#4A3028]">98% Buyer Satisfaction Score</p>
                  <p className="text-[11px] text-[#8C7A70] mt-0.5">
                    "Exceptional tactile feel and packaging. Arrived in recyclable molded paper pulp with zero plastic." — Sample Community Review
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* AI Bundle Upsell Cross-Sell */}
          {related.length > 0 && (
            <div className="pt-6 border-t border-[#E9E0D2] space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#4A3028]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>AI Recommends Pairing With:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map((rel) => (
                  <div key={rel.id} className="p-3 rounded-2xl border border-[#E9E0D2] flex items-center justify-between bg-white hover:border-[#C5A46D] transition-colors">
                    <div className="flex items-center space-x-3">
                      <img src={rel.image} alt={rel.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <p className="text-xs font-bold text-[#4A3028] line-clamp-1">{rel.name}</p>
                        <p className="text-[11px] font-mono text-[#C5A46D] font-bold">${rel.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(rel, 1)}
                      className="px-3 py-1.5 rounded-full bg-[#E9E0D2] hover:bg-[#4A3028] hover:text-white text-[#4A3028] text-[11px] font-bold transition-all"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
