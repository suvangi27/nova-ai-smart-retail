import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { ProductCatalogue } from './components/ProductCatalogue';
import { SmartBundlesSection } from './components/SmartBundlesSection';
import { CustomerJourneyVisualizer } from './components/CustomerJourneyVisualizer';
import { OperationsSimulator } from './components/OperationsSimulator';
import { CompetitiveAdvantageSection } from './components/CompetitiveAdvantageSection';
import { MarketingBanner } from './components/MarketingBanner';
import { Footer } from './components/Footer';

// Modals and Drawers
import { StyleQuizModal } from './components/StyleQuizModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AiConcierge } from './components/AiConcierge';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { MbaBusinessOverviewModal } from './components/MbaBusinessOverviewModal';
import { NovaPlusModal } from './components/NovaPlusModal';
import { UserProfileDrawer } from './components/UserProfileDrawer';

import { Presentation, Sparkles, CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { notification, setIsMbaOverviewOpen } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB] text-[#4A3028] selection:bg-[#C5A46D] selection:text-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#4A3028] text-white px-5 py-2.5 rounded-full shadow-2xl border border-[#C5A46D]/60 flex items-center space-x-2 text-xs font-semibold animate-slideDown">
          <Sparkles className="w-4 h-4 text-[#C5A46D]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar />

      {/* Hero 3D Section */}
      <Hero3D />

      {/* Promotional Flash & Marketing Strip */}
      <MarketingBanner />

      {/* Smart Bundles Section (Dimensions 1 & 7) */}
      <SmartBundlesSection />

      {/* Product Catalogue & UX (Dimensions 2, 3, 5) */}
      <ProductCatalogue />

      {/* Customer Journey Pipeline (Dimension 4) */}
      <CustomerJourneyVisualizer />

      {/* Operations & Fulfillment Simulator (Dimension 8) */}
      <OperationsSimulator />

      {/* Competitive Advantage (Dimension 10) */}
      <CompetitiveAdvantageSection />

      {/* Footer & Digital Marketing (Dimension 6) */}
      <Footer />

      {/* Modals & Overlays */}
      <StyleQuizModal />
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <WishlistDrawer />
      <AiConcierge />
      <AdminDashboardModal />
      <MbaBusinessOverviewModal />
      <NovaPlusModal />
      <UserProfileDrawer />

      {/* Floating Bottom Left Shortcut: Quick MBA Presentation Mode */}
      <div className="fixed bottom-6 left-6 z-30">
        <button
          onClick={() => setIsMbaOverviewOpen(true)}
          className="bg-white/90 backdrop-blur-md hover:bg-white text-[#4A3028] px-4 py-2.5 rounded-full shadow-xl border border-[#C5A46D]/60 text-xs font-bold flex items-center space-x-2 hover:scale-105 transition-all group"
          title="Open MBA 10 Dimensions Presentation Deck"
        >
          <Presentation className="w-4 h-4 text-[#C5A46D] group-hover:rotate-12 transition-transform" />
          <span>MBA 2026 Pitch Mode</span>
        </button>
      </div>
    </div>
  );
};

export function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}

export default App;
