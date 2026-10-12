import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CustomerPersona, Category, QuizPreferences, Order, UserAccount, SmartBundle } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';
import { SMART_BUNDLES } from '../data/bundles';

interface StoreContextType {
  products: Product[];
  filteredProducts: Product[];
  bundles: SmartBundle[];
  cart: CartItem[];
  wishlist: string[];
  activePersona: CustomerPersona;
  userProfile: UserAccount;
  quizPreferences: QuizPreferences;
  orders: Order[];
  activeDetailProduct: Product | null;
  searchQuery: string;
  selectedCategory: Category;
  selectedSort: 'featured' | 'price-low' | 'price-high' | 'rating' | 'ai-match';
  priceRange: [number, number];
  appliedCoupon: string | null;
  discountPercentage: number;
  notification: string | null;
  lastCompletedOrder: Order | null;
  trackingOrderId: string;
  
  // Modals
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isQuizOpen: boolean;
  isNovaPlusOpen: boolean;
  isAdminOpen: boolean;
  isMbaOverviewOpen: boolean;
  isOrderTrackingOpen: boolean;
  isCheckoutOpen: boolean;
  isAiAssistantOpen: boolean;
  isReferralOpen: boolean;
  isProfileOpen: boolean;

  // Actions
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: Category) => void;
  setSelectedSort: (sort: 'featured' | 'price-low' | 'price-high' | 'rating' | 'ai-match') => void;
  setPriceRange: (range: [number, number]) => void;
  addToCart: (product: Product, quantity?: number) => void;
  addBundleToCart: (bundle: SmartBundle) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  setActiveDetailProduct: (product: Product | null) => void;
  setActivePersona: (persona: CustomerPersona) => void;
  saveQuizPreferences: (prefs: QuizPreferences) => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  toggleNovaPlus: () => void;
  completeCheckout: (details: { name: string; email: string; address: string; paymentMethod: string }) => Order;
  trackOrder: (orderId: string) => void;
  showNotification: (msg: string) => void;

  // Modal toggles
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsQuizOpen: (open: boolean) => void;
  setIsNovaPlusOpen: (open: boolean) => void;
  setIsAdminOpen: (open: boolean) => void;
  setIsMbaOverviewOpen: (open: boolean) => void;
  setIsOrderTrackingOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsAiAssistantOpen: (open: boolean) => void;
  setIsReferralOpen: (open: boolean) => void;
  setIsProfileOpen: (open: boolean) => void;

  // Cart Calculations
  cartSubtotal: number;
  cartDiscount: number;
  cartShipping: number;
  cartTotal: number;
  cartItemCount: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [bundles] = useState<SmartBundle[]>(SMART_BUNDLES);
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: INITIAL_PRODUCTS[0], // Aura Studio Headphones in initial demo cart
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['nova-solstice-watch']);
  const [activePersona, setActivePersonaState] = useState<CustomerPersona>('Young Professional');
  const [userProfile, setUserProfile] = useState<UserAccount>({
    name: 'Alex Sterling',
    email: 'alex.sterling@mba2026.edu',
    persona: 'Young Professional',
    isNovaPlus: false,
    novaPoints: 480,
    memberSince: 'October 2026'
  });

  const [quizPreferences, setQuizPreferences] = useState<QuizPreferences>({
    persona: 'Young Professional',
    budgetTier: '$75 - $200',
    primaryGoal: 'Productivity & Work',
    preferredCategories: ['Tech & Audio', 'Work & Study'],
    completed: false
  });

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'NOVA-9842',
      date: 'Oct 11, 2026',
      customerName: 'Alex Sterling',
      email: 'alex.sterling@mba2026.edu',
      shippingAddress: '450 Lexington Ave, Suite 1800, New York, NY 10017',
      items: [
        {
          productId: 'nova-aura-headphones',
          name: 'Aura Studio Wireless Headphones',
          quantity: 1,
          price: 249.00,
          image: INITIAL_PRODUCTS[0].image
        }
      ],
      subtotal: 249.00,
      discount: 24.90,
      shipping: 0.00,
      total: 224.10,
      status: 'Out for Delivery',
      trackingNumber: 'FDX-99382104-NV',
      carrier: 'FedEx Carbon-Neutral Ground',
      estimatedDelivery: 'Today by 4:30 PM',
      history: [
        { status: 'Confirmed', timestamp: 'Oct 11, 09:15 AM', location: 'NOVA Cloud Engine', details: 'Automated fraud score passed (0.02) & authorized.' },
        { status: 'Inventory Verified', timestamp: 'Oct 11, 09:42 AM', location: 'Chicago Logistics Node', details: 'Barcodes verified in Aisle 14-B.' },
        { status: 'Eco-Packed', timestamp: 'Oct 11, 11:20 AM', location: 'Packing Station 3', details: 'Plastic-free corrugated box with water-soluble paper tape.' },
        { status: 'Dispatched', timestamp: 'Oct 11, 02:10 PM', location: 'FedEx Regional Hub (ORD)', details: 'Departed sorting facility on express trailer.' },
        { status: 'Out for Delivery', timestamp: 'Today, 08:35 AM', location: 'New York Delivery Depot', details: 'Loaded on electric delivery van #412.' }
      ]
    }
  ]);

  const [lastCompletedOrder, setLastCompletedOrder] = useState<Order | null>(null);
  const [trackingOrderId, setTrackingOrderId] = useState<string>('NOVA-9842');

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedSort, setSelectedSort] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'ai-match'>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isNovaPlusOpen, setIsNovaPlusOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isMbaOverviewOpen, setIsMbaOverviewOpen] = useState(false);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((current) => (current === msg ? null : current));
    }, 4000);
  };

  const setActivePersona = (persona: CustomerPersona) => {
    setActivePersonaState(persona);
    setUserProfile((prev) => ({
      ...prev,
      persona,
      name: persona === 'Student' ? 'Maya Lin (MBA Candidate)' : persona === 'Young Professional' ? 'Alex Sterling' : 'Elena Rostova (Creative Director)'
    }));
    showNotification(`Switched persona to: ${persona} — Recommendations updated!`);
  };

  const saveQuizPreferences = (prefs: QuizPreferences) => {
    setQuizPreferences(prefs);
    setActivePersonaState(prefs.persona);
    setUserProfile((prev) => ({
      ...prev,
      persona: prefs.persona,
      preferences: prefs
    }));
    showNotification(`Style profile calibrated: ${prefs.persona} (${prefs.primaryGoal})!`);
  };

  const toggleNovaPlus = () => {
    setUserProfile((prev) => {
      const nextStatus = !prev.isNovaPlus;
      if (nextStatus) {
        showNotification('🌟 Welcome to NOVA Plus! 10% instant discount & free delivery unlocked.');
      } else {
        showNotification('NOVA Plus membership deactivated.');
      }
      return { ...prev, isNovaPlus: nextStatus };
    });
  };

  // Cart actions
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    showNotification(`Added "${product.name}" to cart`);
  };

  const addBundleToCart = (bundle: SmartBundle) => {
    const bundleItems = products.filter((p) => bundle.productIds.includes(p.id));
    bundleItems.forEach((p) => {
      addToCart(p, 1);
    });
    showNotification(`Added bundle "${bundle.name}" to cart (Bundle savings applied)!`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showNotification('Item removed from cart');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showNotification('Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showNotification('Saved to wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'NOVA2026') {
      setAppliedCoupon('NOVA2026');
      setDiscountPercentage(15);
      showNotification('Promo NOVA2026 applied: 15% discount!');
      return { success: true, message: '15% discount applied successfully!' };
    } else if (clean === 'STUDENT20') {
      setAppliedCoupon('STUDENT20');
      setDiscountPercentage(20);
      showNotification('Verified Student discount applied: 20% off!');
      return { success: true, message: '20% Student discount applied!' };
    } else if (clean === 'WELCOME10') {
      setAppliedCoupon('WELCOME10');
      setDiscountPercentage(10);
      showNotification('Welcome promo applied: 10% off!');
      return { success: true, message: '10% Welcome gift applied!' };
    } else {
      return { success: false, message: 'Invalid code. Try "NOVA2026" or "STUDENT20".' };
    }
  };

  // Cart Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const memberDiscount = userProfile.isNovaPlus ? 0.10 : 0;
  const effectiveDiscountRate = Math.max(discountPercentage / 100, memberDiscount);
  const cartDiscount = cartSubtotal * effectiveDiscountRate;
  const cartShipping = (cartSubtotal > 150 || userProfile.isNovaPlus || cart.length === 0) ? 0 : 12.00;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount + cartShipping);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const completeCheckout = (details: { name: string; email: string; address: string; paymentMethod: string }): Order => {
    const newOrderId = `NOVA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: Order = {
      id: newOrderId,
      date: 'Just now',
      customerName: details.name,
      email: details.email,
      shippingAddress: details.address,
      items: cart.map((i) => ({
        productId: i.product.id,
        name: i.product.name,
        quantity: i.quantity,
        price: i.product.price,
        image: i.product.image
      })),
      subtotal: cartSubtotal,
      discount: cartDiscount,
      shipping: cartShipping,
      total: cartTotal,
      status: 'Confirmed',
      trackingNumber: `TRK-${Math.floor(10000000 + Math.random() * 90000000)}-NV`,
      carrier: userProfile.isNovaPlus ? 'NOVA Plus Priority Air' : 'DHL EcoGround Freight',
      estimatedDelivery: 'Estimated in 2-3 business days',
      history: [
        {
          status: 'Confirmed',
          timestamp: 'Just now',
          location: 'NOVA Order Management Gateway',
          details: `Simulated payment authorized via ${details.paymentMethod}. Order queued for fulfillment.`
        },
        {
          status: 'Inventory Verified',
          timestamp: '1 min ago (Simulated)',
          location: 'Regional Hub East',
          details: 'Items verified in stock and reserved.'
        }
      ]
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastCompletedOrder(newOrder);
    setTrackingOrderId(newOrderId);
    clearCart();
    return newOrder;
  };

  const trackOrder = (orderId: string) => {
    setTrackingOrderId(orderId);
    setIsOrderTrackingOpen(true);
  };

  // Filtered and Sorted products
  const filteredProducts = products.filter((p) => {
    // Search match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
      const matchCat = p.category.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      if (!matchName && !matchTag && !matchCat && !matchDesc) return false;
    }

    // Category match
    if (selectedCategory !== 'All' && p.category !== selectedCategory) {
      return false;
    }

    // Price range match
    if (p.price < priceRange[0] || p.price > priceRange[1]) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (selectedSort === 'price-low') return a.price - b.price;
    if (selectedSort === 'price-high') return b.price - a.price;
    if (selectedSort === 'rating') return b.rating - a.rating;
    if (selectedSort === 'ai-match') {
      // Prioritize persona match
      const aMatch = a.personas.includes(activePersona) ? (a.aiFitScore || 90) + 10 : (a.aiFitScore || 80);
      const bMatch = b.personas.includes(activePersona) ? (b.aiFitScore || 90) + 10 : (b.aiFitScore || 80);
      return bMatch - aMatch;
    }
    // Default featured: sponsor first, then aiFitScore
    if (a.isSponsored && !b.isSponsored) return -1;
    if (!a.isSponsored && b.isSponsored) return 1;
    return (b.aiFitScore || 80) - (a.aiFitScore || 80);
  });

  return (
    <StoreContext.Provider
      value={{
        products,
        filteredProducts,
        bundles,
        cart,
        wishlist,
        activePersona,
        userProfile,
        quizPreferences,
        orders,
        activeDetailProduct,
        searchQuery,
        selectedCategory,
        selectedSort,
        priceRange,
        appliedCoupon,
        discountPercentage,
        notification,
        lastCompletedOrder,
        trackingOrderId,
        isCartOpen,
        isWishlistOpen,
        isQuizOpen,
        isNovaPlusOpen,
        isAdminOpen,
        isMbaOverviewOpen,
        isOrderTrackingOpen,
        isCheckoutOpen,
        isAiAssistantOpen,
        isReferralOpen,
        isProfileOpen,
        setSearchQuery,
        setSelectedCategory,
        setSelectedSort,
        setPriceRange,
        addToCart,
        addBundleToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        setActiveDetailProduct,
        setActivePersona,
        saveQuizPreferences,
        applyCoupon,
        toggleNovaPlus,
        completeCheckout,
        trackOrder,
        showNotification,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsQuizOpen,
        setIsNovaPlusOpen,
        setIsAdminOpen,
        setIsMbaOverviewOpen,
        setIsOrderTrackingOpen,
        setIsCheckoutOpen,
        setIsAiAssistantOpen,
        setIsReferralOpen,
        setIsProfileOpen,
        cartSubtotal,
        cartDiscount,
        cartShipping,
        cartTotal,
        cartItemCount
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
