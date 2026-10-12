export type Category = 'All' | 'Tech & Audio' | 'Fashion & Apparel' | 'Home & Living' | 'Beauty & Wellness' | 'Work & Study';

export type CustomerPersona = 'Student' | 'Young Professional' | 'Lifestyle Shopper';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  inStock: boolean;
  stockCount: number;
  isSponsored?: boolean;
  sponsorName?: string;
  isBundleEligible?: boolean;
  aiFitScore?: number; // 0-100%
  personas: CustomerPersona[];
  tags: string[];
  specs: Record<string, string>;
  ecoScore?: 'A' | 'B' | 'A+';
}

export interface Review {
  id: string;
  author: string;
  persona: CustomerPersona;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface SmartBundle {
  id: string;
  name: string;
  subtitle: string;
  targetPersona: CustomerPersona;
  productIds: string[];
  originalTotal: number;
  bundlePrice: number;
  discountPercentage: number;
  badge: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface QuizPreferences {
  persona: CustomerPersona;
  budgetTier: 'Under $75' | '$75 - $200' | '$200+';
  primaryGoal: 'Budget-Savvy' | 'Aesthetic & Luxury' | 'Productivity & Work' | 'Eco & Wellness';
  preferredCategories: Category[];
  completed: boolean;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export type OrderStatus = 'Confirmed' | 'Inventory Verified' | 'Eco-Packed' | 'Dispatched' | 'Out for Delivery' | 'Delivered';

export interface Order {
  id: string;
  date: string;
  customerName: string;
  email: string;
  shippingAddress: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  trackingNumber: string;
  carrier: string;
  estimatedDelivery: string;
  history: {
    status: OrderStatus;
    timestamp: string;
    location: string;
    details: string;
  }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  suggestedProducts?: string[]; // product IDs
  actions?: {
    label: string;
    actionKey: string;
  }[];
}

export interface UserAccount {
  name: string;
  email: string;
  persona: CustomerPersona;
  isNovaPlus: boolean;
  novaPoints: number;
  memberSince: string;
  preferences?: QuizPreferences;
}
