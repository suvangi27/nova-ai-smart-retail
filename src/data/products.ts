import { Product, Review } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'nova-aura-headphones',
    name: 'Aura Studio Wireless Headphones',
    tagline: 'Active noise cancellation with warm brass acoustic drivers',
    category: 'Tech & Audio',
    price: 249.00,
    originalPrice: 299.00,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered for discerning listeners, the Aura combines custom tuned 40mm beryllium drivers with custom warm champagne gold CNC aluminum earcups. Features 45-hour battery life, hybrid ANC, and multipoint Bluetooth 5.4.',
    features: [
      '45-Hour Battery with Fast USB-C Quickcharge (3h playback in 10 mins)',
      'Adaptive Hybrid Noise Cancellation with Transparency Mode',
      'Memory foam leather ear cushions in mocha chocolate finish',
      'Spatial Audio tuned for acoustic, jazz, and studio mastering'
    ],
    inStock: true,
    stockCount: 18,
    isSponsored: true,
    sponsorName: 'Aura Acoustics Paris',
    isBundleEligible: true,
    aiFitScore: 98,
    personas: ['Young Professional', 'Student', 'Lifestyle Shopper'],
    tags: ['Best Seller', 'Editor Choice', 'Noise Cancelling', 'Wireless'],
    specs: {
      'Driver Size': '40mm Custom Beryllium',
      'Frequency Response': '10Hz – 40,000Hz',
      'Weight': '265 grams',
      'Connectivity': 'Bluetooth 5.4 / 3.5mm Aux / USB-C DAC'
    },
    ecoScore: 'A'
  },
  {
    id: 'nova-solstice-watch',
    name: 'Solstice Minimalist Chronometer',
    tagline: 'Automatic mechanical movement with sapphire crystal and mocha leather',
    category: 'Fashion & Apparel',
    price: 320.00,
    originalPrice: 380.00,
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A timeless timepiece engineered for the modern executive. Crafted from 316L surgical-grade stainless steel with champagne gold PVD coating, double-domed anti-reflective sapphire crystal, and vegetable-tanned Italian leather.',
    features: [
      'Miyota 9015 Automatic Movement with 42-hour power reserve',
      '50m Water Resistance suitable for everyday lifestyle',
      'Interchangeable quick-release straps (Mocha & Ivory Included)',
      'Subtle luminous indices with exhibition open-heart caseback'
    ],
    inStock: true,
    stockCount: 12,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 95,
    personas: ['Young Professional', 'Lifestyle Shopper'],
    tags: ['Luxury Essential', 'Handcrafted', 'Mechanical'],
    specs: {
      'Case Diameter': '39mm',
      'Case Thickness': '9.8mm',
      'Crystal': 'Double-domed Sapphire with AR coating',
      'Strap Width': '20mm Full-Grain Tuscan Leather'
    },
    ecoScore: 'A+'
  },
  {
    id: 'nova-botanical-parfum',
    name: 'Amber Santal Botanical Extrait',
    tagline: 'Artisanal organic perfume with warm sandalwood, tonka bean, and bergamot',
    category: 'Beauty & Wellness',
    price: 115.00,
    originalPrice: 135.00,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An evocative olfactory journey opening with crisp Calabrian bergamot, leading to a velvety heart of Tuscan iris, grounded in sustainably harvested Mysore sandalwood and smoky amber.',
    features: [
      '100% Vegan & Cruelty-Free, clean formulation free of phthalates',
      'Concentrated 25% Extrait de Parfum for 12+ hour longevity',
      'Flacon sculpted from heavy recycled flint glass with gold magnetic cap',
      'Sustainably sourced botanicals ethically harvested in Grasse, France'
    ],
    inStock: true,
    stockCount: 34,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 92,
    personas: ['Lifestyle Shopper', 'Young Professional', 'Student'],
    tags: ['Clean Beauty', 'Signature Scent', 'Grasse Certified'],
    specs: {
      'Volume': '75 ml / 2.5 fl. oz.',
      'Concentration': 'Extrait de Parfum (25%)',
      'Top Notes': 'Calabrian Bergamot, Cardamom, Pink Pepper',
      'Base Notes': 'Mysore Sandalwood, Warm Amber, Bourbon Vanilla'
    },
    ecoScore: 'A+'
  },
  {
    id: 'nova-merino-knit',
    name: 'Atelier Merino Wool Relaxed Knit',
    tagline: '100% Extra-fine Australian Merino wool in warm oatmeal melange',
    category: 'Fashion & Apparel',
    price: 145.00,
    originalPrice: 175.00,
    rating: 4.7,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The definitive capsule wardrobe sweater. Ultra-soft 19.5 micron merino wool offers thermoregulation, wrinkle resistance, and elevated silhouette transitions from boardroom to evening dining.',
    features: [
      'Naturally breathable, odor-resistant, and temperature-regulating',
      'Seamless 3D knit construction for zero waste and maximum movement',
      'Pre-washed and shrink-resistant for effortless maintenance',
      'Responsible Wool Standard (RWS) certified'
    ],
    inStock: true,
    stockCount: 22,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 89,
    personas: ['Young Professional', 'Student'],
    tags: ['Capsule Wardrobe', 'Sustainable', 'All Season'],
    specs: {
      'Material': '100% Extra-fine Merino Wool (19.5 Micron)',
      'Fit': 'Contemporary Relaxed Fit',
      'Origin': 'Biella, Italy Knitwear Studio',
      'Care': 'Hand wash cold or gentle wool cycle'
    },
    ecoScore: 'A'
  },
  {
    id: 'nova-lumina-lamp',
    name: 'Lumina Sculptural Brass Desk Lamp',
    tagline: 'Dimmable warm glow LED with solid champagne brass armature',
    category: 'Home & Living',
    price: 185.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Transform your work sanctuary. Lumina balances mid-century architectural geometry with smart touch-capacitive dimming, 98+ CRI natural daylight rendering, and integrated Qi wireless charging pad in its solid marble base.',
    features: [
      'Integrated 15W Qi Fast Wireless Charger embedded in base',
      '98+ CRI Museum-Grade LEDs prevent eye fatigue during study sessions',
      '3-Stage Stepless Warm White Dimming (2200K to 4000K)',
      'Heavy Crema Marfil Spanish marble weighted pedestal'
    ],
    inStock: true,
    stockCount: 9,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 94,
    personas: ['Young Professional', 'Lifestyle Shopper', 'Student'],
    tags: ['Workspace Upgrade', 'Qi Charging', 'Architectural'],
    specs: {
      'Base Material': 'Solid Spanish Marble & Brushed Champagne Brass',
      'Lumens': '850 lm max output',
      'Power Input': 'USB-C PD 45W included',
      'Dimensions': '42cm H x 28cm W x 14cm D'
    },
    ecoScore: 'A'
  },
  {
    id: 'nova-lumbar-backpack',
    name: 'Kyoto Commuter Modular Leather Backpack',
    tagline: 'Waterproof recycled ballistic nylon with Italian calfskin trim',
    category: 'Work & Study',
    price: 195.00,
    originalPrice: 240.00,
    rating: 4.8,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Designed for the hybrid professional and university innovator. Features a dedicated suspended 16-inch laptop chamber, magnetic Fidlock buckles, hidden passport compartment, and luggage pass-through.',
    features: [
      'Suspended Neoprene sleeve fits laptops up to 16” MacBook Pro',
      'Waterproof YKK Aquaguard zippers and rain-tested fabric',
      'Ergonomic memory-foam back panel with airflow channels',
      'Modular interior with tech organizer cables pouch'
    ],
    inStock: true,
    stockCount: 27,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 96,
    personas: ['Student', 'Young Professional'],
    tags: ['Campus Ready', 'Waterproof', 'Fidlock Buckles'],
    specs: {
      'Capacity': '22 Liters',
      'Weight': '920 grams',
      'Laptop Sleeve': 'Up to 16-inch screen (shockproof)',
      'Fabric': '100% Recycled 1680D Cordura Ballistic Nylon'
    },
    ecoScore: 'A+'
  },
  {
    id: 'nova-ceramic-pour',
    name: 'Artisan Sandstone Ceramic Pour-Over Set',
    tagline: 'Hand-thrown stoneware with precision double-wall gold mesh filter',
    category: 'Home & Living',
    price: 68.00,
    originalPrice: 85.00,
    rating: 4.9,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Elevate your morning ritual. Each pour-over carafe is individually wheel-thrown by master potters using iron-rich clay. Paired with a reusable titanium gold micromesh cone that eliminates paper filters.',
    features: [
      'Zero paper waste: Reusable titanium gold coated micro-etched filter',
      'Thermal insulating double-wall stoneware keeps brew hot 45+ minutes',
      'Ergonomic walnut handle with food-grade organic beeswax finish',
      'Microwave and dishwasher safe carafe'
    ],
    inStock: true,
    stockCount: 40,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 91,
    personas: ['Student', 'Lifestyle Shopper', 'Young Professional'],
    tags: ['Morning Ritual', 'Zero Waste', 'Handmade'],
    specs: {
      'Carafe Capacity': '600 ml (2-3 Cups)',
      'Material': 'High-fire Stoneware & Walnut Wood',
      'Filter': '304 Titanium-plated Stainless Steel Mesh',
      'Origin': 'Kyoto Prefecture Pottery Guild'
    },
    ecoScore: 'A+'
  },
  {
    id: 'nova-hydra-serum',
    name: 'Botanical Ceramide Cellular Barrier Serum',
    tagline: 'Clinically tested bio-fermented hyaluronic acid and squalane',
    category: 'Beauty & Wellness',
    price: 64.00,
    originalPrice: 78.00,
    rating: 4.8,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-bb4a9efcf112?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Formulated to counteract blue light screen fatigue and urban pollution. Powered by 5 molecular weights of hyaluronic acid, 3 essential plant ceramides, and centella asiatica for radiant skin hydration.',
    features: [
      'Fast-absorbing velvet finish with zero sticky residue',
      'Strengthens lipid moisture barrier by 74% in 14 days of clinical trials',
      'Fragrance-free, hypoallergenic, non-comedogenic formulation',
      'FSC-certified amber glass dropper with refillable pod architecture'
    ],
    inStock: true,
    stockCount: 52,
    isSponsored: true,
    sponsorName: 'BioLuxe Dermaceuticals',
    isBundleEligible: true,
    aiFitScore: 90,
    personas: ['Student', 'Young Professional', 'Lifestyle Shopper'],
    tags: ['Clinical Proven', 'Skin Barrier', 'Clean Glow'],
    specs: {
      'Volume': '50 ml / 1.7 oz',
      'Active Actives': '5% Multi-Molecular HA, 3% Phytoceramides',
      'Skin Type': 'All Skin Types (Sensitive Friendly)',
      'Certifications': 'EWG Verified, Leaping Bunny Certified'
    },
    ecoScore: 'A'
  },
  {
    id: 'nova-mechanical-keyboard',
    name: 'Monolith Wireless Mechanical Keyboard',
    tagline: 'Hot-swappable tactile switches with solid CNC aluminum chassis',
    category: 'Work & Study',
    price: 165.00,
    originalPrice: 195.00,
    rating: 4.9,
    reviewsCount: 132,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered for executive coders, writers, and analysts. Features custom factory-lubricated Gateron Oil King linear switches, sound-dampening silicone gaskets, Mac/Windows switch, and Bluetooth 5.2 tri-mode.',
    features: [
      'Tri-Mode Connectivity: 2.4GHz low latency, Bluetooth 5.2, USB-C',
      'Gasket mounted acoustic feel with rich, deep keystroke sound',
      'PBT double-shot keycaps in mocha brown and warm cream legends',
      'Rotary brass knob for fluid volume and timeline scrubbing'
    ],
    inStock: true,
    stockCount: 15,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 97,
    personas: ['Student', 'Young Professional'],
    tags: ['Productivity Beast', 'Hot-Swap', 'Acoustic Gasket'],
    specs: {
      'Layout': '75% Compact (82 Keys)',
      'Battery': '4000mAh (Up to 200 hours without RGB)',
      'Switch Type': 'Pre-lubricated Silent Tactile',
      'Weight': '1.2 kg Solid Aluminum Block'
    },
    ecoScore: 'B'
  },
  {
    id: 'nova-linen-duvet',
    name: 'Verona Washed French Flax Linen Bedding',
    tagline: 'Pre-washed pure European flax duvet set with coconut shell buttons',
    category: 'Home & Living',
    price: 210.00,
    originalPrice: 260.00,
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Breathe deeper and sleep sounder. Woven exclusively from Normandy flax, this heritage duvet breathes naturally to keep you cool in summer and warm in winter. Softens with every single laundry wash.',
    features: [
      'OEKO-TEX Standard 100 certified, free from harsh finishing chemicals',
      'Corner ties keep duvet securely positioned through the night',
      'Natural coconut shell closure buttons with hidden placket',
      'Includes 1 Duvet Cover + 2 Matching Pillowcases'
    ],
    inStock: true,
    stockCount: 16,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 88,
    personas: ['Lifestyle Shopper', 'Young Professional'],
    tags: ['Luxury Sleep', 'French Flax', 'Thermoregulating'],
    specs: {
      'Sizes': 'Queen / King / Full',
      'Material': '100% Normandy Flax Linen (175 GSM)',
      'Weave': 'Traditional Plain Weave, Garment Enzyme Washed',
      'Care': 'Machine wash warm, tumble dry gentle'
    },
    ecoScore: 'A+'
  },
  {
    id: 'nova-leather-organizer',
    name: 'Siena Full-Grain Executive Folio',
    tagline: 'Hand-burnished vegetable-tanned leather organizer with iPad sleeve',
    category: 'Work & Study',
    price: 88.00,
    originalPrice: 110.00,
    rating: 4.9,
    reviewsCount: 73,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Carry your thoughts with poise. Handcrafted by Tuscan artisans, this sleek folio accommodates an A4 notepad, 11-inch tablet, pen slot, and business cards in a slender silhouette.',
    features: [
      'Ages with a rich, unique patina over years of business use',
      'Magnetic brass closure clasp provides effortless opening',
      'Microfiber inner lining prevents device scratches',
      'Includes refillable fountain-pen friendly cotton paper pad'
    ],
    inStock: true,
    stockCount: 29,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 93,
    personas: ['Student', 'Young Professional'],
    tags: ['Executive Ready', 'Tuscan Leather', 'Patina'],
    specs: {
      'Dimensions': '31.5cm x 24cm x 2.2cm',
      'Leather': 'Full-grain Vegetable-Tanned Cowhide',
      'Fit': 'iPad Pro 11", Remarkable 2, A5/A4 Notebooks',
      'Hardware': 'Solid Antique Brass Rivets'
    },
    ecoScore: 'A'
  },
  {
    id: 'nova-diffuser-stone',
    name: 'Kyoto Ultrasonic Stone Mist Diffuser',
    tagline: 'Hand-carved porcelain ceramic dome with ambient candlelight mode',
    category: 'Home & Living',
    price: 79.00,
    originalPrice: 95.00,
    rating: 4.7,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Transform room energy into a sanctuary of calm. Operates at a whisper-quiet 20dB with ultrasonic 2.4MHz vibration, dispersing pure essential oil botanicals across up to 500 sq ft.',
    features: [
      'Whisper-quiet ultrasonic misting (under 20 decibels)',
      'Subtle warm amber LED ring replicates flicker of natural candle',
      'Automatic shutoff when water runs dry for safety',
      'Dual mist modes: Continuous 6 hours or Intermittent 12 hours'
    ],
    inStock: true,
    stockCount: 24,
    isSponsored: false,
    isBundleEligible: true,
    aiFitScore: 87,
    personas: ['Lifestyle Shopper', 'Student'],
    tags: ['Aromatherapy', 'Zen Home', 'Whisper Quiet'],
    specs: {
      'Water Reservoir': '180 ml',
      'Coverage': 'Up to 500 square feet',
      'Exterior': 'Matte Handcrafted Ceramic Stone Cover',
      'Power': 'Universal USB-C Low-Voltage'
    },
    ecoScore: 'A'
  }
];

export const INITIAL_REVIEWS: Record<string, Review[]> = {
  'nova-aura-headphones': [
    {
      id: 'rev-1',
      author: 'Chloe Vance',
      persona: 'Young Professional',
      rating: 5,
      date: '2 weeks ago',
      title: 'Flawless acoustics for high-stress workdays',
      comment: 'As an investment banking associate, these keep my train commute and 14-hour desk stretches sane. The champagne gold finish looks like a high-end fashion piece rather than bulky tech.',
      verifiedPurchase: true
    },
    {
      id: 'rev-2',
      author: 'Liam Chen',
      persona: 'Student',
      rating: 5,
      date: '1 month ago',
      title: 'Worth every penny of my student savings',
      comment: 'The noise cancellation completely blocks out library chatter. Plus the fast charge saved me multiple times during finals week.',
      verifiedPurchase: true
    }
  ],
  'nova-solstice-watch': [
    {
      id: 'rev-3',
      author: 'Marcus Sterling',
      persona: 'Young Professional',
      rating: 5,
      date: '3 weeks ago',
      title: 'Minimalist luxury at a fraction of Swiss markups',
      comment: 'The case profile sits neatly under tailored shirt cuffs. The Miyota automatic movement keeps time within +4 seconds/day. Remarkable craftsmanship.',
      verifiedPurchase: true
    }
  ]
};
