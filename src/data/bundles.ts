import { SmartBundle } from '../types';

export const SMART_BUNDLES: SmartBundle[] = [
  {
    id: 'bundle-executive-focus',
    name: 'The Executive Productivity Suite',
    subtitle: 'High-performance acoustic isolation and mechanical typing precision',
    targetPersona: 'Young Professional',
    productIds: ['nova-aura-headphones', 'nova-mechanical-keyboard', 'nova-lumina-lamp'],
    originalTotal: 599.00,
    bundlePrice: 479.00,
    discountPercentage: 20,
    badge: 'Save $120 (20% Off)',
    description: 'Designed for high-impact knowledge workers. Combines the Aura Studio headphones for deep noise cancellation, the Monolith tactile mechanical keyboard, and the Lumina architectural brass lamp with 15W Qi charging.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundle-campus-accelerator',
    name: 'The Campus Vanguard Kit',
    subtitle: 'Streamlined academic gear built for commuter agility and long library nights',
    targetPersona: 'Student',
    productIds: ['nova-lumbar-backpack', 'nova-leather-organizer', 'nova-ceramic-pour'],
    originalTotal: 351.00,
    bundlePrice: 280.00,
    discountPercentage: 20,
    badge: 'Save $71 (Student Verified)',
    description: 'The ultimate kit for rigorous academics. Includes the waterproof Kyoto ballistic backpack, the handcrafted Siena leather executive folio for lecture notes, and the Kyoto sandstone pour-over set for artisanal coffee.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundle-sanctuary-glow',
    name: 'The Mindful Living Sanctuary',
    subtitle: 'Restorative home botanicals, French flax linen, and olfactory serenity',
    targetPersona: 'Lifestyle Shopper',
    productIds: ['nova-botanical-parfum', 'nova-diffuser-stone', 'nova-linen-duvet'],
    originalTotal: 404.00,
    bundlePrice: 329.00,
    discountPercentage: 19,
    badge: 'Save $75 (Curated Bundle)',
    description: 'Reclaim tranquility at home. Featuring the Amber Santal extrait perfume, the stone ultrasonic mist diffuser for therapeutic aromatherapy, and Normandy French flax linen bedding.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
  }
];
