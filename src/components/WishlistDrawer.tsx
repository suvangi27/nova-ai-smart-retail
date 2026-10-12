import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    products,
    toggleWishlist,
    addToCart,
    setActiveDetailProduct
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  const handleMoveAllToCart = () => {
    wishlistProducts.forEach((p) => {
      addToCart(p, 1);
    });
    setIsWishlistOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#F7F3EB] h-full shadow-2xl flex flex-col justify-between border-l border-[#C5A46D]/30 animate-slideLeft">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E9E0D2] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-[#C5A46D] fill-current" />
            <h3 className="font-serif text-lg font-bold text-[#4A3028]">Saved Wishlist</h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E9E0D2] text-[#4A3028]">
              {wishlistProducts.length} items
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1 rounded-full text-[#63443A] hover:bg-[#F7F3EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#E9E0D2] flex items-center justify-center mx-auto text-[#C5A46D]">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#4A3028]">No saved items yet</h4>
              <p className="text-xs text-[#63443A] max-w-xs mx-auto">
                Tap the heart icon on any product in the catalogue to save items for future review.
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B]"
              >
                Explore Catalogue
              </button>
            </div>
          ) : (
            wishlistProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-3.5 border border-[#E9E0D2] shadow-sm flex items-center space-x-3.5 hover:border-[#C5A46D] transition-colors"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-16 h-16 rounded-xl object-cover bg-[#F7F3EB] border border-[#E9E0D2] cursor-pointer"
                  onClick={() => {
                    setActiveDetailProduct(p);
                    setIsWishlistOpen(false);
                  }}
                />
                <div className="flex-1 min-w-0">
                  <h5
                    onClick={() => {
                      setActiveDetailProduct(p);
                      setIsWishlistOpen(false);
                    }}
                    className="font-serif text-xs font-bold text-[#4A3028] truncate hover:text-[#C5A46D] cursor-pointer"
                  >
                    {p.name}
                  </h5>
                  <p className="text-[11px] font-mono font-bold text-[#C5A46D]">
                    ${p.price.toFixed(2)}
                  </p>
                  <p className="text-[10px] text-emerald-700 font-medium">In Stock</p>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="p-2 rounded-full bg-[#4A3028] text-white hover:bg-[#35211B] transition-colors"
                    title="Add to Bag"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#C5A46D]" />
                  </button>
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="p-2 rounded-full text-[#9E8B83] hover:text-rose-600 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E9E0D2] space-y-3">
            <button
              onClick={handleMoveAllToCart}
              className="w-full py-3.5 rounded-full bg-[#4A3028] hover:bg-[#35211B] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A46D]" />
              <span>Move All ({wishlistProducts.length}) to Bag</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
