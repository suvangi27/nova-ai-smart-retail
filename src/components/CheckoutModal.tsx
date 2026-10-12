import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Printer, 
  ExternalLink,
  Lock,
  Building,
  Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStore } from '../context/StoreContext';
import { Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartDiscount,
    cartShipping,
    cartTotal,
    completeCheckout,
    trackOrder,
    userProfile
  } = useStore();

  const [step, setStep] = useState<'shipping' | 'payment' | 'processing' | 'confirmed'>('shipping');
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    address: '450 Lexington Ave, Suite 1800',
    city: 'New York',
    state: 'NY',
    zip: '10017',
    country: 'United States'
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple-pay' | 'klarna'>('card');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  if (!isCheckoutOpen) return null;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayOrder = () => {
    setStep('processing');
    
    // Simulate real-time backend OMS checks
    setTimeout(() => {
      const order = completeCheckout({
        name: formData.name,
        email: formData.email,
        address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`,
        paymentMethod: paymentMethod === 'card' ? 'Visa •••• 4242' : paymentMethod === 'apple-pay' ? 'Apple Pay' : 'Klarna Pay in 4'
      });
      setCompletedOrder(order);
      setStep('confirmed');

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#C5A46D', '#4A3028', '#E9E0D2']
        });
      } catch {
        // Safe fallback
      }
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#C5A46D]/40 shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="bg-[#4A3028] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-[#C5A46D]" />
            <div>
              <h3 className="font-serif text-base font-bold">Simulated Secure Checkout</h3>
              <p className="text-[11px] text-[#DFC8A2]">MBA Challenge Demonstration • Zero Real Charges</p>
            </div>
          </div>
          {step !== 'processing' && (
            <button
              onClick={() => {
                setIsCheckoutOpen(false);
                setStep('shipping');
              }}
              className="p-1 rounded-full text-[#DFC8A2] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step Indicator */}
        {step !== 'confirmed' && step !== 'processing' && (
          <div className="bg-[#F7F3EB] px-6 py-2.5 border-b border-[#E9E0D2] flex justify-between text-xs font-semibold">
            <span className={step === 'shipping' ? 'text-[#4A3028] font-bold' : 'text-[#8C7A70]'}>
              1. Delivery Details
            </span>
            <span className="text-[#D4C8B5]">→</span>
            <span className={step === 'payment' ? 'text-[#4A3028] font-bold' : 'text-[#8C7A70]'}>
              2. Payment Method
            </span>
            <span className="text-[#D4C8B5]">→</span>
            <span className="text-[#8C7A70]">3. Confirmation</span>
          </div>
        )}

        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Shipping Form */}
          {step === 'shipping' && (
            <form onSubmit={handleNextToPayment} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-[#4A3028]">Shipping Address</h4>
                <span className="text-xs text-[#8C7A70]">*Pre-filled for demo</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#63443A] font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7F3EB] border border-[#D4C8B5] rounded-xl p-2.5 text-[#4A3028]"
                  />
                </div>
                <div>
                  <label className="block text-[#63443A] font-semibold mb-1">Email for Receipt & Tracking</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F3EB] border border-[#D4C8B5] rounded-xl p-2.5 text-[#4A3028]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[#63443A] font-semibold mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#F7F3EB] border border-[#D4C8B5] rounded-xl p-2.5 text-[#4A3028]"
                  />
                </div>
                <div>
                  <label className="block text-[#63443A] font-semibold mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#F7F3EB] border border-[#D4C8B5] rounded-xl p-2.5 text-[#4A3028]"
                  />
                </div>
                <div>
                  <label className="block text-[#63443A] font-semibold mb-1">Postal / ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full bg-[#F7F3EB] border border-[#D4C8B5] rounded-xl p-2.5 text-[#4A3028]"
                  />
                </div>
              </div>

              {/* Order Quick Summary */}
              <div className="p-4 bg-[#F7F3EB] rounded-2xl border border-[#E9E0D2] flex items-center justify-between text-xs mt-4">
                <div>
                  <span className="text-[#8C7A70]">Total Payable:</span>
                  <span className="font-mono text-base font-bold text-[#4A3028] ml-2">${cartTotal.toFixed(2)}</span>
                </div>
                <span className="text-emerald-700 font-semibold">Includes Carbon Offset</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#4A3028] hover:bg-[#35211B] text-white text-xs font-semibold shadow-md flex items-center space-x-2"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Payment Simulator */}
          {step === 'payment' && (
            <div className="space-y-5">
              <h4 className="font-serif text-lg font-bold text-[#4A3028]">Select Payment Simulation</h4>

              <div className="space-y-3">
                {/* Credit Card */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 ${
                    paymentMethod === 'card'
                      ? 'border-[#C5A46D] bg-[#F7F3EB] ring-2 ring-[#C5A46D]/40'
                      : 'border-[#D4C8B5] bg-white hover:bg-[#F7F3EB]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#C5A46D] mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-xs text-[#4A3028]">Instant Simulated Card</p>
                    <p className="text-[11px] text-[#8C7A70]">Pre-configured test card • Visa ending in 4242</p>
                  </div>
                  <span className="text-xs font-bold text-[#4A3028]">${cartTotal.toFixed(2)}</span>
                </div>

                {/* Apple Pay */}
                <div
                  onClick={() => setPaymentMethod('apple-pay')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 ${
                    paymentMethod === 'apple-pay'
                      ? 'border-[#C5A46D] bg-[#F7F3EB] ring-2 ring-[#C5A46D]/40'
                      : 'border-[#D4C8B5] bg-white hover:bg-[#F7F3EB]'
                  }`}
                >
                  <Smartphone className="w-5 h-5 text-[#C5A46D] mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-xs text-[#4A3028]">Apple Pay One-Touch</p>
                    <p className="text-[11px] text-[#8C7A70]">Simulated biometric authentication</p>
                  </div>
                  <span className="text-xs font-bold text-[#4A3028]">${cartTotal.toFixed(2)}</span>
                </div>

                {/* Klarna BNPL */}
                <div
                  onClick={() => setPaymentMethod('klarna')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 ${
                    paymentMethod === 'klarna'
                      ? 'border-[#C5A46D] bg-[#F7F3EB] ring-2 ring-[#C5A46D]/40'
                      : 'border-[#D4C8B5] bg-white hover:bg-[#F7F3EB]'
                  }`}
                >
                  <Building className="w-5 h-5 text-[#C5A46D] mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-xs text-[#4A3028]">Klarna: 4 Interest-Free Payments</p>
                    <p className="text-[11px] text-[#8C7A70]">Pay ${(cartTotal / 4).toFixed(2)} today, remainder bi-weekly</p>
                  </div>
                  <span className="text-xs font-bold font-mono text-[#C5A46D]">
                    4x ${(cartTotal / 4).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E9E0D2]">
                <button
                  onClick={() => setStep('shipping')}
                  className="px-4 py-2 text-xs font-semibold text-[#63443A] hover:text-[#4A3028]"
                >
                  ← Back to Address
                </button>
                <button
                  onClick={handlePayOrder}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#B38E54] text-white text-xs font-bold shadow-gold-glow hover:brightness-105 flex items-center space-x-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorize & Complete Simulated Order</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Processing Animation */}
          {step === 'processing' && (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 border-4 border-[#C5A46D] border-t-transparent rounded-full animate-spin mx-auto" />
              <h4 className="font-serif text-xl font-bold text-[#4A3028]">Authorizing Order...</h4>
              <p className="text-xs text-[#63443A] max-w-sm mx-auto">
                Validating inventory in Chicago Hub • Running automated fraud scoring • Allocating carbon-neutral carrier...
              </p>
            </div>
          )}

          {/* STEP 4: Confirmed Order Receipt */}
          {step === 'confirmed' && completedOrder && (
            <div className="space-y-5 animate-fadeIn">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#4A3028]">
                  Order Confirmed!
                </h4>
                <p className="text-xs text-[#63443A]">
                  Thank you, {completedOrder.customerName}. Your order is registered in the simulated OMS pipeline.
                </p>
              </div>

              {/* Order Info Card */}
              <div className="bg-[#F7F3EB] rounded-2xl p-4 border border-[#E9E0D2] space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#E9E0D2]">
                  <div>
                    <span className="text-[#8C7A70]">Order Number:</span>
                    <span className="font-mono font-bold text-[#4A3028] ml-1.5">{completedOrder.id}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 text-[11px]">
                    Status: {completedOrder.status}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[11px] text-[#63443A]">
                  <span>Carrier: <strong>{completedOrder.carrier}</strong></span>
                  <span>Tracking: <strong className="font-mono text-[#C5A46D]">{completedOrder.trackingNumber}</strong></span>
                </div>

                <div className="pt-2 border-t border-[#E9E0D2] space-y-1">
                  <p className="font-bold text-[#4A3028]">Purchased Items ({completedOrder.items.length}):</p>
                  {completedOrder.items.map((it, idx) => (
                    <div key={idx} className="flex justify-between text-[#63443A]">
                      <span>{it.quantity}x {it.name}</span>
                      <span className="font-mono">${(it.price * it.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold text-[#4A3028] pt-1">
                    <span>Total Paid (Simulated)</span>
                    <span className="font-mono">${completedOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    trackOrder(completedOrder.id);
                  }}
                  className="w-full sm:flex-1 py-3 rounded-full bg-[#4A3028] text-white hover:bg-[#35211B] text-xs font-semibold flex items-center justify-center space-x-2 shadow"
                >
                  <Truck className="w-4 h-4 text-[#C5A46D]" />
                  <span>View in Live Fulfillment Simulator</span>
                </button>

                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setStep('shipping');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-[#D4C8B5] text-[#4A3028] hover:bg-[#F7F3EB] text-xs font-semibold"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
