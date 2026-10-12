import React, { useState } from 'react';
import { 
  Truck, 
  PackageCheck, 
  Boxes, 
  MapPin, 
  ShieldCheck, 
  RotateCcw, 
  Search, 
  Clock, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { OrderStatus } from '../types';

export const OperationsSimulator: React.FC = () => {
  const { 
    isOrderTrackingOpen, 
    setIsOrderTrackingOpen, 
    orders, 
    trackingOrderId, 
    trackOrder,
    showNotification 
  } = useStore();

  const [searchId, setSearchId] = useState(trackingOrderId);
  const [returnSimulated, setReturnSimulated] = useState(false);

  // Active tracked order
  const activeOrder = orders.find((o) => o.id.toLowerCase() === (searchId || trackingOrderId).toLowerCase()) || orders[0];

  const milestones: { status: OrderStatus; label: string; icon: any; node: string; desc: string }[] = [
    {
      status: 'Confirmed',
      label: 'Order Confirmed',
      icon: CheckCircle2,
      node: 'NOVA Cloud Engine',
      desc: 'Algorithmic fraud check passed (Score: 0.02). Automated receipt dispatched.'
    },
    {
      status: 'Inventory Verified',
      label: 'Inventory Verified',
      icon: Boxes,
      node: 'Chicago Logistics Node',
      desc: 'Automated warehouse robotics verified stock in Bay 14-B. Reserved in OMS.'
    },
    {
      status: 'Eco-Packed',
      label: 'Eco-Packed',
      icon: PackageCheck,
      node: 'Packaging Station 3',
      desc: 'Plastic-free corrugated box with water-soluble vegetable tape and RFID tag.'
    },
    {
      status: 'Dispatched',
      label: 'Carrier Dispatch',
      icon: Truck,
      node: 'Regional Hub (ORD)',
      desc: 'Transferred to FedEx Carbon-Neutral Ground express fleet. Tracking active.'
    },
    {
      status: 'Out for Delivery',
      label: 'Out for Delivery',
      icon: MapPin,
      node: 'Local Manhattan Depot',
      desc: 'Loaded onto Electric Delivery Van #412. Final mile ETA on schedule.'
    },
    {
      status: 'Delivered',
      label: 'Delivered & Post-Care',
      icon: ShieldCheck,
      node: 'Customer Doorstep',
      desc: 'Delivered with photo proof. 30-day automated hassle-free return window active.'
    }
  ];

  const getMilestoneIndex = (status: OrderStatus) => {
    switch (status) {
      case 'Confirmed': return 0;
      case 'Inventory Verified': return 1;
      case 'Eco-Packed': return 2;
      case 'Dispatched': return 3;
      case 'Out for Delivery': return 4;
      case 'Delivered': return 5;
      default: return 0;
    }
  };

  const currentIndex = activeOrder ? getMilestoneIndex(activeOrder.status) : 4;

  const handleAdvanceSimulation = () => {
    if (!activeOrder) return;
    const nextStatusMap: Record<OrderStatus, OrderStatus> = {
      'Confirmed': 'Inventory Verified',
      'Inventory Verified': 'Eco-Packed',
      'Eco-Packed': 'Dispatched',
      'Dispatched': 'Out for Delivery',
      'Out for Delivery': 'Delivered',
      'Delivered': 'Confirmed'
    };
    activeOrder.status = nextStatusMap[activeOrder.status];
    showNotification(`Simulation advanced: Order #${activeOrder.id} is now ${activeOrder.status}!`);
  };

  const handleSimulateReturn = () => {
    setReturnSimulated(true);
    showNotification('Simulated 1-click return initiated: QR code generated & courier pickup scheduled!');
  };

  return (
    <>
      {/* On-Page Operations Section */}
      <section className="py-20 bg-[#F7F3EB] border-b border-[#E9E0D2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E9E0D2]">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A46D] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dimension 8: Operational Excellence & Fulfillment</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3028]">
                End-to-End Fulfillment Simulator
              </h2>
              <p className="text-sm text-[#63443A] mt-1 max-w-xl">
                Real-time visibility from automated fraud authorization to warehouse robotic packing, carrier assignment, and 1-click post-purchase returns.
              </p>
            </div>

            <button
              onClick={() => setIsOrderTrackingOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#4A3028] text-white hover:bg-[#35211B] text-xs font-semibold flex items-center space-x-2 shadow-sm"
            >
              <Truck className="w-4 h-4 text-[#C5A46D]" />
              <span>Open Interactive Live Tracker Modal</span>
            </button>
          </div>

          {/* Operational Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
              <span className="text-[11px] text-[#8C7A70] font-semibold uppercase">Avg Fulfillment Time</span>
              <p className="font-serif text-2xl font-bold text-[#4A3028] mt-1">1.8 Hours</p>
              <span className="text-[10px] text-emerald-700 font-medium">From click to carrier dispatch</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
              <span className="text-[11px] text-[#8C7A70] font-semibold uppercase">Warehouse Network</span>
              <p className="font-serif text-2xl font-bold text-[#4A3028] mt-1">3 Smart Nodes</p>
              <span className="text-[10px] text-[#63443A]">Chicago • Frankfurt • Singapore</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
              <span className="text-[11px] text-[#8C7A70] font-semibold uppercase">Eco Packaging</span>
              <p className="font-serif text-2xl font-bold text-[#C5A46D] mt-1">100% Plastic-Free</p>
              <span className="text-[10px] text-[#63443A]">FSC certified & vegetable ink</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#E9E0D2] shadow-sm">
              <span className="text-[11px] text-[#8C7A70] font-semibold uppercase">Return Window</span>
              <p className="font-serif text-2xl font-bold text-[#4A3028] mt-1">30 Days Free</p>
              <span className="text-[10px] text-emerald-700 font-medium">1-Click digital label generator</span>
            </div>
          </div>

          {/* Operations Workflow Graphic */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E9E0D2] shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F2ECE2]">
              <div>
                <span className="text-xs text-[#8C7A70]">Currently Tracking Order:</span>
                <span className="font-mono text-base font-bold text-[#4A3028] ml-2">#{activeOrder.id}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleAdvanceSimulation}
                  className="px-4 py-2 rounded-full bg-[#E9E0D2] hover:bg-[#D4C8B5] text-[#4A3028] text-xs font-semibold transition-all flex items-center space-x-1.5"
                  title="Simulate advancing the order status to the next stage"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Advance Milestone (Simulate Next Step)</span>
                </button>
              </div>
            </div>

            {/* Step-by-Step Horizontal Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
              {milestones.map((m, idx) => {
                const isPassed = idx <= currentIndex;
                const isCurrent = idx === currentIndex;

                return (
                  <div
                    key={m.status}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      isCurrent
                        ? 'border-[#C5A46D] bg-[#F7F3EB] ring-2 ring-[#C5A46D]/40 shadow-sm'
                        : isPassed
                        ? 'border-[#D4C8B5] bg-white'
                        : 'border-[#E9E0D2] bg-white/40 opacity-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-xl ${isPassed ? 'bg-[#4A3028] text-[#C5A46D]' : 'bg-[#E9E0D2] text-[#8C7A70]'}`}>
                          <m.icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-[#8C7A70]">0{idx + 1}</span>
                      </div>
                      <p className="font-serif text-xs font-bold text-[#4A3028]">{m.label}</p>
                      <p className="text-[10px] font-semibold text-[#C5A46D] mt-0.5">{m.node}</p>
                    </div>

                    <p className="text-[10px] text-[#63443A] mt-2 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Post-Purchase Support & Return Simulator Callout */}
            <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#C5A46D]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-[#C5A46D]" />
                <div>
                  <p className="font-bold text-[#4A3028]">Post-Purchase Support & Returns Simulator</p>
                  <p className="text-[#63443A] text-[11px]">
                    Simulate customer initiating a 1-click zero-friction return or exchange within 30 days.
                  </p>
                </div>
              </div>
              <button
                onClick={handleSimulateReturn}
                disabled={returnSimulated}
                className="px-4 py-2 rounded-full bg-white border border-[#D4C8B5] hover:border-[#4A3028] text-[#4A3028] font-semibold text-xs transition-all whitespace-nowrap shadow-sm disabled:opacity-50"
              >
                {returnSimulated ? '✓ Return QR Issued' : 'Simulate 1-Click Return'}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Pop-up Live Order Tracking Modal */}
      {isOrderTrackingOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#C5A46D]/40 shadow-2xl overflow-hidden animate-fadeIn">
            
            {/* Header */}
            <div className="bg-[#4A3028] text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-[#C5A46D]" />
                <div>
                  <h3 className="font-serif text-lg font-bold">Live Order Tracking Simulator</h3>
                  <p className="text-xs text-[#DFC8A2]">Order Lifecycle Operations & Carrier Telemetry</p>
                </div>
              </div>
              <button
                onClick={() => setIsOrderTrackingOpen(false)}
                className="p-1 rounded-full text-[#DFC8A2] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search order ID bar */}
            <div className="p-5 bg-[#F7F3EB] border-b border-[#E9E0D2] flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#9E8B83] absolute left-3.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Enter order ID (e.g. NOVA-9842)..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full bg-white border border-[#D4C8B5] rounded-xl py-2 pl-10 pr-3 text-xs text-[#4A3028] font-mono font-bold"
                />
              </div>
              <button
                onClick={() => trackOrder(searchId)}
                className="px-4 py-2 rounded-xl bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B]"
              >
                Track
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              
              {/* Order Meta Header */}
              <div className="bg-[#F7F3EB] rounded-2xl p-4 border border-[#E9E0D2] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <p className="text-[#8C7A70]">Order ID: <strong className="text-[#4A3028] font-mono">{activeOrder.id}</strong></p>
                  <p className="text-[#8C7A70]">Customer: <strong className="text-[#4A3028]">{activeOrder.customerName}</strong></p>
                </div>
                <div>
                  <p className="text-[#8C7A70]">Carrier: <strong className="text-[#4A3028]">{activeOrder.carrier}</strong></p>
                  <p className="text-[#8C7A70]">Tracking: <strong className="text-[#C5A46D] font-mono">{activeOrder.trackingNumber}</strong></p>
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    {activeOrder.status}
                  </span>
                </div>
              </div>

              {/* Progress Milestones Bar */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3028]">
                  Fulfillment Status Log
                </h4>
                <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#E9E0D2]">
                  {milestones.map((m, idx) => {
                    const isPassed = idx <= currentIndex;
                    const isCurrent = idx === currentIndex;

                    return (
                      <div key={m.status} className="relative flex items-start space-x-4 pl-1">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                            isCurrent
                              ? 'bg-[#C5A46D] text-white ring-4 ring-[#C5A46D]/20 animate-pulse'
                              : isPassed
                              ? 'bg-[#4A3028] text-[#C5A46D]'
                              : 'bg-[#E9E0D2] text-[#8C7A70]'
                          }`}
                        >
                          <m.icon className="w-3.5 h-3.5" />
                        </div>
                        <div className={`p-3 rounded-xl border flex-1 text-xs ${
                          isCurrent
                            ? 'bg-[#F7F3EB] border-[#C5A46D]'
                            : 'bg-white border-[#E9E0D2]'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#4A3028]">{m.label}</span>
                            <span className="text-[10px] text-[#8C7A70]">{m.node}</span>
                          </div>
                          <p className="text-[11px] text-[#63443A] mt-1">{m.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Items in order */}
              <div className="space-y-2 pt-2 border-t border-[#E9E0D2]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3028]">
                  Package Contents ({activeOrder.items.length})
                </h4>
                <div className="space-y-2">
                  {activeOrder.items.map((it, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-[#F7F3EB] text-xs">
                      <div className="flex items-center space-x-2">
                        <img src={it.image} alt={it.name} className="w-8 h-8 rounded-lg object-cover" />
                        <span className="font-medium text-[#4A3028]">{it.quantity}x {it.name}</span>
                      </div>
                      <span className="font-mono font-bold text-[#4A3028]">${(it.price * it.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 bg-[#F2ECE2] border-t border-[#E9E0D2] flex items-center justify-between">
              <button
                onClick={handleAdvanceSimulation}
                className="px-4 py-2 rounded-full bg-[#4A3028] text-white text-xs font-semibold hover:bg-[#35211B] flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Simulate Next Stage</span>
              </button>

              <button
                onClick={() => setIsOrderTrackingOpen(false)}
                className="px-4 py-2 rounded-full bg-white border border-[#D4C8B5] text-xs font-semibold text-[#4A3028]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
