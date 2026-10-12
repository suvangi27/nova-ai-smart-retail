import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  Truck, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    appliedCoupon,
    applyCoupon,
    userProfile,
    setIsCheckoutOpen,
    bundles,
    addBundleToCart
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 150;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError(null);
      setCouponInput('');
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#F7F3EB] h-full shadow-2xl flex flex-col justify-between border-l border-[#C5A46D]/30 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-6 bg-white border-b border-[#E9E0D2] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-[#C5A46D]" />
            <h3 className="font-serif text-lg font-bold text-[#4A3028]">Your Shopping Bag</h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E9E0D2] text-[#4A3028]">
              {cart.reduce((a, b) => a + b.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-full text-[#63443A] hover:bg-[#F7F3EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#F2ECE2] px-6 py-3 border-b border-[#E9E0D2]">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium text-[#4A3028]">
            <span className="flex items-center space-x-1">
              <Truck className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>
                {userProfile.isNovaPlus || cartSubtotal >= freeShippingThreshold
                  ? 'Free Carbon-Neutral Shipping Unlocked!'
                  : `Add $${remainingForFreeShipping.toFixed(2)} more for Free Shipping`}
              </span>
            </span>
            <span className="font-mono text-[11px] font-bold">
              {userProfile.isNovaPlus || cartSubtotal >= freeShippingThreshold ? '100%' : `${Math.round(progressToFreeShipping)}%`}
            </span>
          </div>
          <div className="w-full bg-[#D4C8B5] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#C5A46D] h-full transition-all duration-300"
              style={{ width: `${userProfile.isNovaPlus ? 100 : progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#E9E0D2] flex items-center justify-center mx-auto text-[#C5A46D]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#4A3028]">Your bag is empty</h4>
              <p className="text-xs text-[#63443A] max-w-xs mx-auto">
                Discover our curated capsule items or try the interactive style quiz to personalize your feed.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B]"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-2xl p-3.5 border border-[#E9E0D2] shadow-sm flex items-center space-x-3.5"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-[#F7F3EB] border border-[#E9E0D2]"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-xs font-bold text-[#4A3028] truncate">
                      {item.product.name}
                    </h5>
                    <p className="text-[11px] font-mono font-bold text-[#C5A46D]">
                      ${item.product.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center border border-[#D4C8B5] rounded-full px-1.5 py-0.5 bg-[#F7F3EB]">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-0.5 text-[#4A3028] hover:text-[#C5A46D]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-0.5 text-[#4A3028] hover:text-[#C5A46D]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#9E8B83] hover:text-rose-600 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-[#4A3028]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Smart Bundle Upsell Widget in Cart */}
          {cart.length > 0 && bundles.length > 0 && (
            <div className="p-3.5 bg-gradient-to-r from-[#E9E0D2]/60 to-[#DFC8A2]/40 rounded-2xl border border-[#C5A46D]/40 mt-4 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-[#4A3028]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Smart Bundle Recommendation</span>
              </div>
              <p className="text-[11px] text-[#63443A]">
                Upgrade to <strong>{bundles[0].name}</strong> to unlock 20% bundled savings!
              </p>
              <button
                onClick={() => addBundleToCart(bundles[0])}
                className="w-full py-1.5 rounded-lg bg-white hover:bg-[#4A3028] hover:text-white text-[#4A3028] border border-[#C5A46D]/50 text-xs font-bold transition-all shadow-sm"
              >
                + Add Bundle ({bundles[0].badge})
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E9E0D2] space-y-4">
            
            {/* Coupon Code Entry */}
            <div>
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#9E8B83] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Try 'NOVA2026' or 'STUDENT20'"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="w-full bg-[#F7F3EB] border border-[#D4C8B5] rounded-xl py-2 pl-9 pr-3 text-xs text-[#4A3028] uppercase font-mono font-medium focus:ring-1 focus:ring-[#C5A46D] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B]"
                >
                  Apply
                </button>
              </form>
              {appliedCoupon && (
                <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg mt-2 font-medium">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Coupon <strong>{appliedCoupon}</strong> active</span>
                  </span>
                  <span>Applied</span>
                </div>
              )}
              {couponError && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{couponError}</p>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-[#63443A] pt-2 border-t border-[#F2ECE2]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-semibold text-[#4A3028]">${cartSubtotal.toFixed(2)}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Savings & Discounts</span>
                  <span className="font-mono">-${cartDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Carbon-Neutral Shipping</span>
                <span className="font-mono font-semibold text-[#4A3028]">
                  {cartShipping === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `$${cartShipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#4A3028] pt-2 border-t border-[#E9E0D2]">
                <span>Estimated Total</span>
                <span className="font-mono text-base font-bold text-[#4A3028]">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedCheckout}
              className="w-full py-3.5 rounded-full bg-[#4A3028] hover:bg-[#35211B] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center space-x-2 group"
            >
              <span>Simulated Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] text-[#8C7A70]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Simulated sandbox mode • No actual charges made</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
