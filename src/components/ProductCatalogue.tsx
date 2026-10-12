import React from 'react';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Star, 
  SlidersHorizontal, 
  RotateCcw,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product, Category } from '../types';

export const ProductCatalogue: React.FC = () => {
  const {
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort,
    priceRange,
    setPriceRange,
    searchQuery,
    setSearchQuery,
    addToCart,
    toggleWishlist,
    wishlist,
    setActiveDetailProduct,
    activePersona,
    setIsQuizOpen
  } = useStore();

  const categories: Category[] = [
    'All',
    'Tech & Audio',
    'Fashion & Apparel',
    'Home & Living',
    'Beauty & Wellness',
    'Work & Study'
  ];

  return (
    <section id="catalogue-section" className="py-16 bg-[#F7F3EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-[#E9E0D2]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A46D] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dimension 5: Catalogue & Personalised UX</span>
              <span className="text-[#8C7A70]">• Calibrated for: <strong className="text-[#4A3028]">{activePersona}</strong></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3028]">
              Curated Essentials
            </h2>
            <p className="text-sm text-[#63443A] mt-1 max-w-xl">
              Strictly selected for timeless longevity, acoustic fidelity, and ethical provenance. Every item is verified for optimal price-to-quality ratio.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-4 py-2 rounded-full bg-white border border-[#C5A46D]/60 hover:bg-[#F2ECE2] text-[#4A3028] text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Recalibrate AI Fit</span>
            </button>
          </div>
        </div>

        {/* Filter and Control Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9E0D2] shadow-sm mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#4A3028] text-white shadow-sm'
                      : 'bg-[#F7F3EB] text-[#63443A] hover:bg-[#E9E0D2] hover:text-[#4A3028]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sorting Dropdown & Price Range */}
            <div className="flex items-center space-x-3 text-xs w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center space-x-2">
                <span className="text-[#8C7A70] font-medium hidden sm:inline">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value as any)}
                  className="bg-[#F7F3EB] border border-[#D4C8B5] rounded-xl px-3 py-1.5 text-xs text-[#4A3028] font-medium focus:outline-none focus:ring-1 focus:ring-[#C5A46D]"
                >
                  <option value="featured">Featured & Sponsored</option>
                  <option value="ai-match">AI Recommended Match</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>

              {/* Price Max slider */}
              <div className="flex items-center space-x-2 bg-[#F7F3EB] px-3 py-1.5 rounded-xl border border-[#D4C8B5]">
                <span className="text-[#8C7A70] text-[11px]">Max:</span>
                <span className="font-bold text-[#4A3028] font-mono text-xs">${priceRange[1]}</span>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-20 accent-[#C5A46D] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Active Search & Filter Tag Bar */}
          {(searchQuery || selectedCategory !== 'All' || priceRange[1] < 500) && (
            <div className="flex items-center justify-between pt-3 border-t border-[#F2ECE2] text-xs">
              <div className="flex items-center space-x-2 text-[#63443A]">
                <span className="font-semibold">Active Filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="bg-[#E9E0D2] px-2 py-0.5 rounded-full text-[11px] font-medium">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-[#E9E0D2] px-2 py-0.5 rounded-full text-[11px] font-medium">
                    Query: "{searchQuery}"
                  </span>
                )}
                {priceRange[1] < 500 && (
                  <span className="bg-[#E9E0D2] px-2 py-0.5 rounded-full text-[11px] font-medium">
                    Under ${priceRange[1]}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setPriceRange([0, 500]);
                }}
                className="text-[#C5A46D] hover:text-[#A6844D] font-semibold flex items-center space-x-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset all</span>
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E9E0D2] p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F7F3EB] flex items-center justify-center mx-auto text-[#C5A46D]">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#4A3028]">No matching products found</h3>
            <p className="text-xs text-[#63443A] max-w-sm mx-auto">
              We couldn’t find items matching your active search or price filter. Try widening your price boundary.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setPriceRange([0, 500]);
              }}
              className="px-5 py-2.5 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isFav = wishlist.includes(product.id);
              const isPersonaMatch = product.personas.includes(activePersona);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E9E0D2] hover:border-[#C5A46D]/60 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F3EB]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for luxury depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
                      {product.isSponsored && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#4A3028] text-[#F7F3EB] border border-[#C5A46D]/40 flex items-center space-x-1 shadow-sm">
                          <span className="text-[#C5A46D]">★</span>
                          <span>Sponsored Partner</span>
                        </span>
                      )}

                      {isPersonaMatch && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C5A46D] text-white flex items-center space-x-1 shadow-sm">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{product.aiFitScore}% AI Match</span>
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
                        isFav
                          ? 'bg-[#4A3028] text-[#C5A46D] scale-110 shadow-md'
                          : 'bg-white/80 text-[#63443A] hover:bg-white hover:text-[#4A3028]'
                      }`}
                      aria-label="Save to wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={() => setActiveDetailProduct(product)}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#4A3028] text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-1.5 hover:bg-[#F2ECE2] hover:scale-105"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & Eco Tag */}
                      <div className="flex items-center justify-between text-[11px] text-[#8C7A70] mb-1">
                        <span>{product.category}</span>
                        {product.ecoScore && (
                          <span className="px-1.5 py-0.5 rounded bg-[#E9E0D2] text-[#4A3028] font-bold text-[10px] flex items-center space-x-0.5">
                            <ShieldCheck className="w-2.5 h-2.5 text-[#C5A46D]" />
                            <span>Eco {product.ecoScore}</span>
                          </span>
                        )}
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => setActiveDetailProduct(product)}
                        className="font-serif text-base font-bold text-[#4A3028] hover:text-[#C5A46D] transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs text-[#63443A] mt-1 line-clamp-2 leading-relaxed">
                        {product.tagline}
                      </p>

                      {/* Star Rating */}
                      <div className="flex items-center space-x-1.5 mt-2.5">
                        <div className="flex text-[#C5A46D]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) ? 'fill-current' : 'text-[#D4C8B5]'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-[#4A3028]">{product.rating}</span>
                        <span className="text-[11px] text-[#8C7A70]">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Price and Cart Action */}
                    <div className="pt-4 mt-3 border-t border-[#F2ECE2] flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="font-mono text-base font-bold text-[#4A3028]">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="font-mono text-xs text-[#9E8B83] line-through">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-emerald-700 font-medium">In Stock</span>
                      </div>

                      <button
                        onClick={() => addToCart(product, 1)}
                        className="p-2.5 rounded-full bg-[#4A3028] text-white hover:bg-[#35211B] hover:scale-105 transition-all shadow-sm group/btn"
                        title="Add to cart"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#C5A46D] group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
