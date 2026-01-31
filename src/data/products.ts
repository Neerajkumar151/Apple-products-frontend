import { iphoneModels } from './iphoneModels';
import { macbookModels } from './macbookModels';

export interface ProductVariant {
  id: string;
  name: string;
  color?: {
    name: string;
    value: string;
    image?: string;
  };
  storage?: {
    size: string;
    priceAdjustment: number;
  };
  size?: string;
  price: number;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  image: string;
}

export interface ProductSpec {
  category: string;
  items: { label: string; value: string }[];
}

export interface Product {
  id: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  category: 'iPhone' | 'Mac' | 'iPad' | 'Watch' | 'Vision' | 'AirPods' | 'TV & Home' | 'Accessories';
  basePrice: number;
  heroImage: string;
  variants: ProductVariant[];
  colors?: { name: string; value: string; images: string[] }[];
  storageOptions?: { size: string; priceAdjustment: number }[];
  specs: ProductSpec[];
  features: { title: string; description: string; icon: string; image?: string }[];
  whatsInTheBox?: string[];
  releaseDate?: string;
  isNew?: boolean;
}

// Product Images
const productImages = {
  iphone: {
    hero: '/iphone-hero.jpg',
    card: '/iphone-card.png',
    back: '/iphone-back.png',
  },
  macbook: {
    card: '/macbook-card.png',
  },
  ipad: {
    card: '/ipad-card.png',
  },
  watch: {
    card: '/watch-card.png',
  },
  airpods: {
    card: '/airpods-card.png',
  },
  vision: {
    card: '/vision-card.png',
  },
};

const baseProducts: Product[] = [
  // iPhone 15 Pro
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    shortName: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    description: 'The first iPhone to feature an aerospace-grade titanium design.',
    fullDescription: 'The iPhone 15 Pro is the first iPhone to feature an aerospace-grade titanium design, using the same alloy that spacecraft use for missions to Mars. With the A17 Pro chip, a Pro camera system, and the all-new Action button.',
    category: 'iPhone',
    basePrice: 999,
    heroImage: productImages.iphone.hero,
    colors: [
      { name: 'Natural Titanium', value: '#9a9a9a', images: [productImages.iphone.card, productImages.iphone.back] },
      { name: 'Blue Titanium', value: '#4a5568', images: [productImages.iphone.card, productImages.iphone.back] },
      { name: 'White Titanium', value: '#f7f7f7', images: [productImages.iphone.card, productImages.iphone.back] },
      { name: 'Black Titanium', value: '#1a1a1a', images: [productImages.iphone.card, productImages.iphone.back] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'iphone-15-pro-128-natural', name: 'iPhone 15 Pro 128GB Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: productImages.iphone.card },
      { id: 'iphone-15-pro-256-natural', name: 'iPhone 15 Pro 256GB Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 1099, availability: 'in-stock', image: productImages.iphone.card },
      { id: 'iphone-15-pro-512-natural', name: 'iPhone 15 Pro 512GB Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1299, availability: 'in-stock', image: productImages.iphone.card },
      { id: 'iphone-15-pro-1tb-natural', name: 'iPhone 15 Pro 1TB Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, storage: { size: '1TB', priceAdjustment: 500 }, price: 1499, availability: 'pre-order', image: productImages.iphone.card },
      { id: 'iphone-15-pro-128-blue', name: 'iPhone 15 Pro 128GB Blue Titanium', color: { name: 'Blue Titanium', value: '#4a5568' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: productImages.iphone.card },
      { id: 'iphone-15-pro-256-blue', name: 'iPhone 15 Pro 256GB Blue Titanium', color: { name: 'Blue Titanium', value: '#4a5568' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 1099, availability: 'in-stock', image: productImages.iphone.card },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2556 x 1179 pixels at 460 ppi' },
          { label: 'Technology', value: 'ProMotion with adaptive refresh rates up to 120Hz' },
          { label: 'Brightness', value: '2000 nits peak (outdoor), 1000 nits typical' },
          { label: 'Features', value: 'Always-On display, Dynamic Island, HDR, True Tone, Wide color (P3)' },
          { label: 'Contrast Ratio', value: '2,000,000:1 contrast ratio' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A17 Pro chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '6-core GPU with hardware-accelerated ray tracing' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Performance', value: 'Up to 10% faster CPU, 20% faster GPU than A16' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Main camera, 24mm, ƒ/1.78, sensor-shift OIS, 100% Focus Pixels' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, 13mm, ƒ/2.2, 120° field of view' },
          { label: 'Telephoto', value: '12MP 3x Telephoto, 77mm, ƒ/2.8, OIS' },
          { label: 'Zoom', value: '0.5x, 1x, 2x, 3x optical zoom; up to 15x digital zoom' },
          { label: 'Video', value: '4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, ProRes, Log encoding' },
          { label: 'Front Camera', value: '12MP TrueDepth, ƒ/1.9, autofocus, Night mode, 4K Cinematic' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 23 hours' },
          { label: 'Audio Playback', value: 'Up to 75 hours' },
          { label: 'Streaming', value: 'Up to 20 hours video streaming' },
          { label: 'Charging', value: 'USB-C connector with USB 3 (up to 10Gb/s)' },
          { label: 'Fast Charging', value: 'Up to 50% charge in 30 minutes with 20W+ adapter' },
          { label: 'MagSafe', value: 'Wireless charging up to 15W' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Grade 5 titanium with textured matte glass back' },
          { label: 'Height', value: '146.6 mm (5.77 inches)' },
          { label: 'Width', value: '70.6 mm (2.78 inches)' },
          { label: 'Depth', value: '8.25 mm (0.32 inch)' },
          { label: 'Weight', value: '187 grams (6.60 ounces)' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: '5G', value: 'Sub-6GHz and mmWave 5G' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax) with 2x2 MIMO' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Ultra Wideband', value: 'Second-generation chip for Precision Finding' },
          { label: 'NFC', value: 'Reader mode with background tag reading' },
          { label: 'Satellite', value: 'Emergency SOS via satellite' },
        ],
      },
      {
        category: 'Durability',
        items: [
          { label: 'Water Resistance', value: 'IP68 (6 meters for up to 30 minutes)' },
          { label: 'Front Glass', value: 'Ceramic Shield front' },
          { label: 'Dust Resistance', value: 'IP68 rated' },
        ],
      },
    ],
    features: [
      { title: 'A17 Pro Chip', description: 'The biggest redesign in the history of Apple GPUs. Hardware-accelerated ray tracing for console-quality gaming.', icon: 'Cpu' },
      { title: 'Pro Camera System', description: '48MP Main camera with quad-pixel sensor. Shoot in ProRAW and ProRes for professional-grade content.', icon: 'Camera' },
      { title: 'Action Button', description: 'Customize it to instantly access your favorite feature—Camera, Flashlight, Voice Memo, Focus modes, and more.', icon: 'Zap' },
      { title: 'USB-C & USB 3', description: 'USB 3 speeds up to 10Gb/s. Record ProRes directly to external storage. Charge your Mac or iPad.', icon: 'Usb' },
      { title: 'Titanium Design', description: 'Aerospace-grade titanium. Our lightest Pro models ever with the strongest iPhone design.', icon: 'Shield' },
    ],
    whatsInTheBox: ['iPhone 15 Pro', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },

  // iPhone 15 Pro Max
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    shortName: 'iPhone 15 Pro Max',
    tagline: 'The ultimate iPhone.',
    description: 'The most powerful iPhone ever with the longest optical zoom in iPhone history.',
    fullDescription: 'The iPhone 15 Pro Max features the same groundbreaking A17 Pro chip and titanium design as the iPhone 15 Pro, but with a larger 6.7-inch display and an unprecedented 5x Telephoto camera — the longest optical zoom ever on iPhone.',
    category: 'iPhone',
    basePrice: 1199,
    heroImage: productImages.iphone.hero,
    colors: [
      { name: 'Natural Titanium', value: '#9a9a9a', images: [productImages.iphone.card, productImages.iphone.back] },
      { name: 'Blue Titanium', value: '#4a5568', images: [productImages.iphone.card, productImages.iphone.back] },
      { name: 'White Titanium', value: '#f7f7f7', images: [productImages.iphone.card, productImages.iphone.back] },
      { name: 'Black Titanium', value: '#1a1a1a', images: [productImages.iphone.card, productImages.iphone.back] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'iphone-15-pro-max-256-natural', name: 'iPhone 15 Pro Max 256GB Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1199, availability: 'in-stock', image: productImages.iphone.card },
      { id: 'iphone-15-pro-max-512-natural', name: 'iPhone 15 Pro Max 512GB Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1399, availability: 'in-stock', image: productImages.iphone.card },
      { id: 'iphone-15-pro-max-1tb-natural', name: 'iPhone 15 Pro Max 1TB Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, storage: { size: '1TB', priceAdjustment: 400 }, price: 1599, availability: 'in-stock', image: productImages.iphone.card },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.7-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2796 x 1290 pixels at 460 ppi' },
          { label: 'Technology', value: 'ProMotion with adaptive refresh rates up to 120Hz' },
          { label: 'Brightness', value: '2000 nits peak (outdoor), 1000 nits typical' },
          { label: 'Features', value: 'Always-On display, Dynamic Island, HDR, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A17 Pro chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '6-core GPU with hardware-accelerated ray tracing' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Main camera, 24mm, ƒ/1.78, sensor-shift OIS' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, 13mm, ƒ/2.2, 120° field of view' },
          { label: 'Telephoto', value: '12MP 5x Telephoto, 120mm, ƒ/2.8, tetraprism design' },
          { label: 'Zoom', value: '0.5x, 1x, 2x, 5x optical; up to 25x digital zoom' },
          { label: 'Video', value: '4K@24/25/30/60fps, ProRes, Log, Cinematic mode' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 29 hours' },
          { label: 'Audio Playback', value: 'Up to 95 hours' },
          { label: 'Streaming', value: 'Up to 25 hours video streaming' },
          { label: 'Fast Charging', value: 'Up to 50% charge in 30 minutes with 20W+ adapter' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Grade 5 titanium with textured matte glass back' },
          { label: 'Height', value: '159.9 mm (6.30 inches)' },
          { label: 'Width', value: '76.7 mm (3.02 inches)' },
          { label: 'Depth', value: '8.25 mm (0.32 inch)' },
          { label: 'Weight', value: '221 grams (7.81 ounces)' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: '5G', value: 'Sub-6GHz and mmWave 5G' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Water Resistance', value: 'IP68 (6 meters for 30 minutes)' },
        ],
      },
    ],
    features: [
      { title: '5x Optical Zoom', description: 'The longest optical zoom ever in an iPhone. Revolutionary tetraprism design.', icon: 'Camera' },
      { title: 'A17 Pro Chip', description: 'Console-level gaming with hardware-accelerated ray tracing.', icon: 'Cpu' },
      { title: 'All-Day Battery', description: 'Up to 29 hours of video playback. The best battery life ever in iPhone.', icon: 'Battery' },
      { title: 'Action Button', description: 'A new way to quickly access your favorite features.', icon: 'Zap' },
    ],
    whatsInTheBox: ['iPhone 15 Pro Max', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },

  // MacBook Air M3
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air 13" with M3',
    shortName: 'MacBook Air',
    tagline: 'Lean. Mean. M3 machine.',
    description: 'The most portable Mac laptop is also the most capable.',
    fullDescription: 'The MacBook Air with M3 is supercharged by the M3 chip. With up to 18 hours of battery life, a stunning Liquid Retina display, and a fanless design that makes it perfectly silent.',
    category: 'Mac',
    basePrice: 1099,
    heroImage: productImages.macbook.card,
    colors: [
      { name: 'Midnight', value: '#1a1a2e', images: [productImages.macbook.card] },
      { name: 'Starlight', value: '#f5f5dc', images: [productImages.macbook.card] },
      { name: 'Space Gray', value: '#4a4a4a', images: [productImages.macbook.card] },
      { name: 'Silver', value: '#c0c0c0', images: [productImages.macbook.card] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
      { size: '2TB', priceAdjustment: 800 },
    ],
    variants: [
      { id: 'macbook-air-m3-256-midnight', name: 'MacBook Air 13" M3 256GB Midnight', color: { name: 'Midnight', value: '#1a1a2e' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: productImages.macbook.card },
      { id: 'macbook-air-m3-512-midnight', name: 'MacBook Air 13" M3 512GB Midnight', color: { name: 'Midnight', value: '#1a1a2e' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1299, availability: 'in-stock', image: productImages.macbook.card },
      { id: 'macbook-air-m3-256-starlight', name: 'MacBook Air 13" M3 256GB Starlight', color: { name: 'Starlight', value: '#f5f5dc' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: productImages.macbook.card },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13.6-inch Liquid Retina display' },
          { label: 'Resolution', value: '2560 x 1664 native resolution at 224 ppi' },
          { label: 'Brightness', value: '500 nits brightness' },
          { label: 'Color', value: 'P3 wide color, True Tone technology' },
          { label: 'Features', value: '1 billion colors, support for sRGB and P3' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M3 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '8-core or 10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Memory Bandwidth', value: '100GB/s unified memory bandwidth' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '8GB (configurable to 16GB or 24GB)' },
          { label: 'Storage', value: '256GB SSD (configurable to 512GB, 1TB, or 2TB)' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours Apple TV movie playback' },
          { label: 'Wireless Web', value: 'Up to 15 hours wireless web' },
          { label: 'Battery', value: '52.6-watt-hour lithium-polymer battery' },
          { label: 'Power Adapter', value: '30W USB-C Power Adapter (35W Dual included with 10-core GPU)' },
          { label: 'Fast Charge', value: 'Fast-charge capable with 70W USB-C adapter' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '11.97 mm (0.44 inch)' },
          { label: 'Width', value: '304.1 mm (11.97 inches)' },
          { label: 'Depth', value: '215 mm (8.46 inches)' },
          { label: 'Weight', value: '1.24 kg (2.7 pounds)' },
          { label: 'Material', value: '100% recycled aluminum enclosure' },
        ],
      },
      {
        category: 'Camera & Audio',
        items: [
          { label: 'Camera', value: '1080p FaceTime HD camera' },
          { label: 'Audio', value: 'Four-speaker sound system with Spatial Audio' },
          { label: 'Microphones', value: 'Three-mic array with directional beamforming' },
        ],
      },
      {
        category: 'Keyboard & Trackpad',
        items: [
          { label: 'Keyboard', value: 'Backlit Magic Keyboard with Touch ID, ambient light sensor' },
          { label: 'Trackpad', value: 'Force Touch trackpad for precise cursor control' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'MagSafe', value: 'MagSafe 3 charging port' },
          { label: 'Thunderbolt', value: 'Two Thunderbolt / USB 4 ports' },
          { label: 'Headphone', value: '3.5 mm headphone jack' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
        ],
      },
    ],
    features: [
      { title: 'M3 Chip', description: 'Next-generation Apple silicon with 8-core CPU and GPU. Up to 60% faster than M1.', icon: 'Cpu' },
      { title: '18-Hour Battery', description: 'All-day battery life for work, creativity, and play.', icon: 'Battery' },
      { title: 'Fanless Design', description: 'Completely silent operation with no fan noise.', icon: 'VolumeX' },
      { title: 'MagSafe Charging', description: 'Quick-release magnetic connector for easy, secure charging.', icon: 'Zap' },
      { title: 'Liquid Retina Display', description: 'Brilliant 13.6-inch display with 500 nits brightness and P3 wide color.', icon: 'Monitor' },
    ],
    whatsInTheBox: ['MacBook Air', '30W or 35W Dual USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
    isNew: true,
  },

  // MacBook Pro 14
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    shortName: 'MacBook Pro 14"',
    tagline: 'Mind-blowing.',
    description: 'The most advanced Mac laptops for the most demanding workflows.',
    fullDescription: 'The MacBook Pro 14-inch with M3 Pro or M3 Max chip delivers extraordinary performance for the most demanding pro workflows. With up to 22 hours of battery life and a stunning Liquid Retina XDR display.',
    category: 'Mac',
    basePrice: 1599,
    heroImage: productImages.macbook.card,
    colors: [
      { name: 'Space Black', value: '#1a1a1a', images: [productImages.macbook.card] },
      { name: 'Silver', value: '#c0c0c0', images: [productImages.macbook.card] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-14-512-space-black', name: 'MacBook Pro 14" 512GB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1599, availability: 'in-stock', image: productImages.macbook.card },
      { id: 'macbook-pro-14-1tb-space-black', name: 'MacBook Pro 14" 1TB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 1799, availability: 'in-stock', image: productImages.macbook.card },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '14.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3024 x 1964 native resolution at 254 ppi' },
          { label: 'Technology', value: 'Mini-LED backlit, ProMotion (up to 120Hz)' },
          { label: 'Brightness', value: '1000 nits sustained, 1600 nits peak HDR' },
          { label: 'Contrast', value: '1,000,000:1 contrast ratio' },
          { label: 'Color', value: 'P3 wide color, True Tone, 1 billion colors' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M3 Pro chip' },
          { label: 'CPU', value: '11-core CPU (5 performance + 6 efficiency)' },
          { label: 'GPU', value: '14-core GPU with hardware ray tracing' },
          { label: 'Unified Memory', value: '18GB (configurable to 36GB)' },
          { label: 'Memory Bandwidth', value: '150GB/s' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 17 hours wireless web, 18 hours Apple TV movie playback' },
          { label: 'Battery', value: '72.4-watt-hour lithium-polymer battery' },
          { label: 'Power Adapter', value: '70W USB-C Power Adapter' },
          { label: 'Fast Charge', value: 'Fast-charge capable with 96W or 140W adapter' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '15.5 mm (0.61 inch)' },
          { label: 'Width', value: '312.6 mm (12.31 inches)' },
          { label: 'Depth', value: '221.2 mm (8.71 inches)' },
          { label: 'Weight', value: '1.55 kg (3.4 pounds)' },
        ],
      },
      {
        category: 'Ports & Connectivity',
        items: [
          { label: 'Thunderbolt', value: 'Three Thunderbolt 4 (USB-C) ports' },
          { label: 'HDMI', value: 'HDMI port supporting 8K external display' },
          { label: 'MagSafe', value: 'MagSafe 3 port' },
          { label: 'SDXC', value: 'SDXC card slot' },
          { label: 'Headphone', value: '3.5 mm headphone jack with advanced high-impedance support' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
        ],
      },
      {
        category: 'Camera & Audio',
        items: [
          { label: 'Camera', value: '1080p FaceTime HD camera with advanced ISP' },
          { label: 'Audio', value: 'Six-speaker sound system with force-cancelling woofers' },
          { label: 'Spatial Audio', value: 'Spatial Audio with dynamic head tracking (with AirPods)' },
          { label: 'Microphones', value: 'Studio-quality three-mic array with directional beamforming' },
        ],
      },
    ],
    features: [
      { title: 'M3 Pro Chip', description: 'Up to 11-core CPU and 14-core GPU. 40% faster than M1 Pro.', icon: 'Cpu' },
      { title: 'XDR Display', description: 'Extreme Dynamic Range with 1600 nits peak HDR brightness.', icon: 'Monitor' },
      { title: 'Pro Connectivity', description: 'HDMI for 8K displays, high-impedance headphone jack, Thunderbolt 4.', icon: 'Plug' },
      { title: 'All-Day Battery', description: 'Up to 18 hours of Apple TV movie playback.', icon: 'Battery' },
    ],
    whatsInTheBox: ['MacBook Pro 14"', '70W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  // iPad Pro M2
  {
    id: 'ipad-pro-m2',
    name: 'iPad Pro',
    shortName: 'iPad Pro',
    tagline: 'Supercharged by M2.',
    description: 'The ultimate iPad experience with the M2 chip.',
    fullDescription: 'The iPad Pro features the powerful M2 chip, a stunning Liquid Retina XDR display, and superfast wireless connectivity. It is the ultimate iPad for professionals and creatives.',
    category: 'iPad',
    basePrice: 799,
    heroImage: productImages.ipad.card,
    colors: [
      { name: 'Space Gray', value: '#4a4a4a', images: [productImages.ipad.card] },
      { name: 'Silver', value: '#c0c0c0', images: [productImages.ipad.card] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 700 },
      { size: '2TB', priceAdjustment: 1100 },
    ],
    variants: [
      { id: 'ipad-pro-11-128-space-gray', name: 'iPad Pro 11" 128GB Space Gray', color: { name: 'Space Gray', value: '#4a4a4a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: productImages.ipad.card },
      { id: 'ipad-pro-11-256-space-gray', name: 'iPad Pro 11" 256GB Space Gray', color: { name: 'Space Gray', value: '#4a4a4a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: productImages.ipad.card },
      { id: 'ipad-pro-12-128-space-gray', name: 'iPad Pro 12.9" 128GB Space Gray', color: { name: 'Space Gray', value: '#4a4a4a' }, storage: { size: '128GB', priceAdjustment: 300 }, price: 1099, availability: 'in-stock', image: productImages.ipad.card },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: '11-inch Size', value: '11-inch Liquid Retina display, 2388 x 1668 at 264 ppi' },
          { label: '12.9-inch Size', value: '12.9-inch Liquid Retina XDR, 2732 x 2048 at 264 ppi' },
          { label: 'Technology', value: 'ProMotion (10Hz-120Hz), True Tone, P3 wide color' },
          { label: 'Brightness', value: '600 nits (11"), 1000 nits sustained / 1600 nits peak HDR (12.9")' },
          { label: 'Features', value: 'Fingerprint-resistant oleophobic coating, anti-reflective' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine (15.8 trillion ops/sec)' },
          { label: 'Memory Bandwidth', value: '100GB/s unified memory bandwidth' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Wide', value: '12MP Wide camera, ƒ/1.8 aperture, Smart HDR 4' },
          { label: 'Ultra Wide', value: '10MP Ultra Wide, ƒ/2.4, 125° field of view' },
          { label: 'Front Camera', value: '12MP Ultra Wide TrueDepth, ƒ/2.4, Center Stage' },
          { label: 'LiDAR', value: 'LiDAR Scanner for AR and low-light autofocus' },
          { label: 'Video', value: '4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, ProRes' },
        ],
      },
      {
        category: 'Apple Pencil & Keyboard',
        items: [
          { label: 'Apple Pencil', value: 'Supports Apple Pencil (2nd generation), Apple Pencil (USB-C)' },
          { label: 'Hover', value: 'Apple Pencil hover for precise previews' },
          { label: 'Keyboard', value: 'Works with Magic Keyboard, Smart Keyboard Folio' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: '11-inch Height', value: '247.6 mm (9.74 inches)' },
          { label: '11-inch Width', value: '178.5 mm (7.02 inches)' },
          { label: '11-inch Depth', value: '5.9 mm (0.23 inch)' },
          { label: '11-inch Weight', value: '466 grams (1.03 pounds) Wi-Fi' },
          { label: '12.9-inch Weight', value: '682 grams (1.50 pounds) Wi-Fi' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Connector', value: 'USB-C with Thunderbolt / USB 4 support' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Cellular', value: '5G (sub-6 GHz and mmWave), Gigabit LTE (cellular models)' },
          { label: 'Face ID', value: 'TrueDepth camera for Face ID' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours web or video on Wi-Fi' },
          { label: 'Charging', value: 'USB-C, 20W USB-C Power Adapter' },
        ],
      },
    ],
    features: [
      { title: 'M2 Chip', description: 'Next-level performance. 15% faster CPU and 35% faster GPU than M1.', icon: 'Cpu' },
      { title: 'ProMotion Display', description: '120Hz adaptive refresh rate for fluid scrolling and Apple Pencil.', icon: 'Monitor' },
      { title: 'Center Stage', description: 'Ultra Wide front camera automatically keeps you in frame during calls.', icon: 'Video' },
      { title: 'Apple Pencil Hover', description: 'See a preview of your mark before you make it.', icon: 'Pencil' },
      { title: 'Thunderbolt Support', description: 'USB-C with Thunderbolt for pro accessories and fast transfers.', icon: 'Plug' },
    ],
    whatsInTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)', '20W USB-C Power Adapter'],
  },

  // Apple Watch Ultra 2
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    shortName: 'Watch Ultra 2',
    tagline: 'Next-level adventure.',
    description: 'The most rugged and capable Apple Watch ever.',
    fullDescription: 'Apple Watch Ultra 2 is the most rugged and capable Apple Watch ever. Designed for outdoor adventure, endurance sports, and water sports with a 49mm titanium case and precision dual-frequency GPS.',
    category: 'Watch',
    basePrice: 799,
    heroImage: productImages.watch.card,
    colors: [
      { name: 'Natural Titanium', value: '#9a9a9a', images: [productImages.watch.card] },
    ],
    variants: [
      { id: 'watch-ultra-2-natural', name: 'Apple Watch Ultra 2 Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, price: 799, availability: 'in-stock', image: productImages.watch.card },
    ],
    specs: [
      {
        category: 'Case & Design',
        items: [
          { label: 'Size', value: '49mm titanium case' },
          { label: 'Material', value: 'Aerospace-grade titanium' },
          { label: 'Front Crystal', value: 'Flat sapphire front crystal' },
          { label: 'Back', value: 'Sapphire back crystal' },
          { label: 'Dimensions', value: '49 x 44 x 14.4 mm' },
          { label: 'Weight', value: '61.4 grams (case only)' },
          { label: 'Action Button', value: 'International orange customizable Action button' },
        ],
      },
      {
        category: 'Display',
        items: [
          { label: 'Type', value: 'Always-On Retina LTPO3 OLED display' },
          { label: 'Resolution', value: '502 x 410 pixels' },
          { label: 'Brightness', value: '3000 nits max outdoor, 1 nit minimum' },
          { label: 'Display Area', value: '1185 sq mm (27% larger than Series 9)' },
        ],
      },
      {
        category: 'Chip & Performance',
        items: [
          { label: 'Chip', value: 'S9 SiP with 64-bit dual-core processor' },
          { label: 'GPU', value: '4-core GPU' },
          { label: 'Neural Engine', value: '4-core Neural Engine' },
          { label: 'Storage', value: '64GB capacity' },
          { label: 'Features', value: 'Double tap gesture, on-device Siri' },
        ],
      },
      {
        category: 'Health & Fitness Sensors',
        items: [
          { label: 'Blood Oxygen', value: 'Blood oxygen sensor with red and infrared LEDs' },
          { label: 'Heart', value: 'Third-generation optical heart sensor, electrical heart sensor (ECG)' },
          { label: 'Temperature', value: 'Temperature sensing (wrist and ambient)' },
          { label: 'Motion', value: 'High-g accelerometer, high dynamic range gyroscope' },
          { label: 'Compass', value: 'Precision dual-frequency GPS (L1 and L5), compass with waypoints' },
          { label: 'Altimeter', value: 'Always-on altimeter' },
          { label: 'Depth Gauge', value: 'Depth gauge and water temperature sensor' },
        ],
      },
      {
        category: 'Water Resistance & Durability',
        items: [
          { label: 'Water Resistance', value: '100 meters (ISO 22810)' },
          { label: 'Recreational Diving', value: 'EN13319 certified to 40 meters' },
          { label: 'Dust Resistance', value: 'IP6X dust resistant' },
          { label: 'MIL-STD', value: 'MIL-STD 810H certified' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Normal Use', value: 'Up to 36 hours' },
          { label: 'Low Power Mode', value: 'Up to 72 hours' },
          { label: 'Outdoor Workout', value: 'Up to 17 hours with GPS and LTE' },
          { label: 'Charging', value: 'About 80 minutes to 80% with fast charging' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Cellular', value: 'LTE and UMTS (GPS + Cellular models)' },
          { label: 'Wi-Fi', value: '802.11b/g/n 2.4GHz and 5GHz' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Ultra Wideband', value: 'Second-generation chip for Precision Finding' },
          { label: 'Speaker', value: '86 decibels siren' },
        ],
      },
    ],
    features: [
      { title: '3000 Nits Display', description: 'Our brightest display ever. Easily readable in direct sunlight.', icon: 'Sun' },
      { title: 'Precision Dual GPS', description: 'L1 and L5 GPS for accurate tracking in challenging environments.', icon: 'MapPin' },
      { title: 'Dive Ready', description: 'EN13319 certified with depth gauge and water temperature sensor.', icon: 'Waves' },
      { title: 'Action Button', description: 'Customizable button for instant access to your favorite feature.', icon: 'Zap' },
      { title: '36-Hour Battery', description: 'All-day battery with up to 72 hours in Low Power Mode.', icon: 'Battery' },
    ],
    whatsInTheBox: ['Apple Watch Ultra 2', 'Band (choice of Alpine Loop, Trail Loop, or Ocean Band)', 'USB-C Magnetic Fast Charging Cable (1m)', 'Documentation'],
    isNew: true,
  },

  // Apple Watch Series 9
  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Series 9',
    shortName: 'Watch Series 9',
    tagline: 'Smarter. Brighter. Mightier.',
    description: 'Our most powerful watch yet with the S9 SiP.',
    fullDescription: 'Apple Watch Series 9 features the S9 SiP, our most powerful watch chip yet. With a new double tap gesture, brighter display, and advanced health features.',
    category: 'Watch',
    basePrice: 399,
    heroImage: productImages.watch.card,
    colors: [
      { name: 'Midnight', value: '#1a1a2e', images: [productImages.watch.card] },
      { name: 'Starlight', value: '#f5f5dc', images: [productImages.watch.card] },
      { name: 'Silver', value: '#c0c0c0', images: [productImages.watch.card] },
      { name: 'Product Red', value: '#ff3b30', images: [productImages.watch.card] },
      { name: 'Pink', value: '#ffb6c1', images: [productImages.watch.card] },
    ],
    variants: [
      { id: 'watch-s9-41-midnight', name: 'Apple Watch Series 9 41mm Midnight', color: { name: 'Midnight', value: '#1a1a2e' }, price: 399, availability: 'in-stock', image: productImages.watch.card },
      { id: 'watch-s9-45-midnight', name: 'Apple Watch Series 9 45mm Midnight', color: { name: 'Midnight', value: '#1a1a2e' }, price: 429, availability: 'in-stock', image: productImages.watch.card },
      { id: 'watch-s9-41-starlight', name: 'Apple Watch Series 9 41mm Starlight', color: { name: 'Starlight', value: '#f5f5dc' }, price: 399, availability: 'in-stock', image: productImages.watch.card },
    ],
    specs: [
      {
        category: 'Case',
        items: [
          { label: 'Sizes', value: '41mm or 45mm' },
          { label: 'Materials', value: 'Aluminum or stainless steel' },
          { label: 'Crystal', value: 'Ion-X front glass (aluminum) or sapphire (stainless)' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S9 SiP with 64-bit dual-core processor' },
          { label: 'Features', value: 'Double tap gesture, on-device Siri' },
        ],
      },
      {
        category: 'Health',
        items: [
          { label: 'Sensors', value: 'Blood oxygen, ECG, temperature sensing' },
          { label: 'Cycle Tracking', value: 'Retrospective ovulation estimates' },
        ],
      },
    ],
    features: [
      { title: 'Double Tap', description: 'Control Apple Watch with a tap of your fingers.', icon: 'Hand' },
      { title: 'S9 SiP', description: 'Our most powerful watch chip ever.', icon: 'Cpu' },
      { title: 'Health First', description: 'Advanced health sensors and features.', icon: 'Heart' },
    ],
    whatsInTheBox: ['Apple Watch Series 9', 'Sport Band', 'Magnetic charging cable'],
  },

  // Apple Vision Pro
  {
    id: 'apple-vision-pro',
    name: 'Apple Vision Pro',
    shortName: 'Vision Pro',
    tagline: 'Spatial computing is here.',
    description: 'Apple Vision Pro seamlessly blends digital content with your physical space.',
    fullDescription: 'Apple Vision Pro is Apple\'s first spatial computer. It transforms any space into your own personal theater, lets you collaborate in new ways, and brings your memories to life like never before.',
    category: 'Vision',
    basePrice: 3499,
    heroImage: productImages.vision.card,
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'vision-pro-256', name: 'Apple Vision Pro 256GB', storage: { size: '256GB', priceAdjustment: 0 }, price: 3499, availability: 'pre-order', image: productImages.vision.card },
      { id: 'vision-pro-512', name: 'Apple Vision Pro 512GB', storage: { size: '512GB', priceAdjustment: 200 }, price: 3699, availability: 'pre-order', image: productImages.vision.card },
      { id: 'vision-pro-1tb', name: 'Apple Vision Pro 1TB', storage: { size: '1TB', priceAdjustment: 400 }, price: 3899, availability: 'pre-order', image: productImages.vision.card },
    ],
    specs: [
      {
        category: 'Display System',
        items: [
          { label: 'Type', value: 'Micro-OLED display system' },
          { label: 'Resolution', value: '23 million pixels across two displays (more than 4K per eye)' },
          { label: 'Pixel Density', value: '3,386 pixels per inch' },
          { label: 'Refresh Rate', value: '90Hz, 96Hz, or 100Hz' },
          { label: 'Color', value: 'Wide color (P3), HDR' },
        ],
      },
      {
        category: 'Chips',
        items: [
          { label: 'Main Chip', value: 'Apple M2 chip (8-core CPU, 10-core GPU)' },
          { label: 'Real-time Chip', value: 'Apple R1 chip for real-time sensor processing' },
          { label: 'Latency', value: '12ms photon-to-motion latency (8x faster than blink of an eye)' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Cameras & Sensors',
        items: [
          { label: 'Cameras', value: '12 cameras, 5 sensors, 6 microphones' },
          { label: '3D Camera', value: 'Stereoscopic 3D main camera for spatial photos and videos' },
          { label: 'Eye Tracking', value: 'High-speed cameras and LED illuminators for responsive eye tracking' },
          { label: 'Hand Tracking', value: 'Downward-facing cameras for natural hand and finger tracking' },
          { label: 'LiDAR', value: 'LiDAR Scanner for room mapping' },
          { label: 'TrueDepth', value: 'TrueDepth camera for Optic ID' },
        ],
      },
      {
        category: 'Audio',
        items: [
          { label: 'Speakers', value: 'Personalized Spatial Audio with audio ray tracing' },
          { label: 'Driver', value: 'Dual-driver audio pods' },
          { label: 'Microphones', value: 'Six-mic array with directional beamforming' },
        ],
      },
      {
        category: 'Design & Fit',
        items: [
          { label: 'Frame', value: '3D laminated glass curved into a single piece' },
          { label: 'Band', value: 'Solo Knit Band and Dual Loop Band included' },
          { label: 'Light Seal', value: 'Flexible Light Seal with soft frame for comfort' },
          { label: 'Zeiss Lenses', value: 'ZEISS Optical Inserts available for vision correction' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'General Use', value: 'Up to 2 hours of use' },
          { label: 'Video Playback', value: 'Up to 2.5 hours of video playback' },
          { label: 'Battery', value: 'External battery pack with woven cable' },
          { label: 'Charging', value: 'USB-C charging, use while charging supported' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'USB-C', value: 'USB-C port for accessories' },
        ],
      },
    ],
    features: [
      { title: 'Spatial Computing', description: 'Navigate with your eyes, hands, and voice. Apps exist in your space.', icon: 'Box' },
      { title: 'EyeSight', description: 'External display reveals your eyes to people nearby while you use apps.', icon: 'Eye' },
      { title: 'Infinite Canvas', description: 'Arrange apps anywhere around you at any scale you like.', icon: 'Maximize' },
      { title: 'Spatial Photos & Video', description: 'Capture and relive memories in stunning three dimensions.', icon: 'Camera' },
      { title: 'Environments', description: 'Transform your surroundings into immersive destinations.', icon: 'Globe' },
    ],
    whatsInTheBox: ['Apple Vision Pro', 'Solo Knit Band (S, M, or L)', 'Dual Loop Band (S, M, or L)', 'Light Seal', 'Two Light Seal Cushions', 'Cover', 'Battery', 'USB-C Charge Cable (1.5m)', 'USB-C Power Adapter', 'Polishing Cloth'],
    isNew: true,
  },

  // AirPods Pro 2
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    shortName: 'AirPods Pro',
    tagline: 'Adaptive Audio. Now playing.',
    description: 'Rebuilt from the sound up with the H2 chip.',
    fullDescription: 'AirPods Pro 2 feature the new Apple H2 chip for breakthrough audio performance. With up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio.',
    category: 'AirPods',
    basePrice: 249,
    heroImage: productImages.airpods.card,
    variants: [
      { id: 'airpods-pro-2', name: 'AirPods Pro 2nd generation', price: 249, availability: 'in-stock', image: productImages.airpods.card },
    ],
    specs: [
      {
        category: 'Audio Technology',
        items: [
          { label: 'Chip', value: 'Apple H2 headphone chip' },
          { label: 'Driver', value: 'Apple-designed low-distortion driver with custom amplifier' },
          { label: 'ANC', value: 'Up to 2x more Active Noise Cancellation than previous generation' },
          { label: 'Transparency', value: 'Adaptive Transparency reduces loud environmental noise' },
          { label: 'Spatial Audio', value: 'Personalized Spatial Audio with dynamic head tracking' },
          { label: 'Conversation Awareness', value: 'Lowers media volume when you speak' },
        ],
      },
      {
        category: 'Battery & Charging',
        items: [
          { label: 'AirPods Listening', value: 'Up to 6 hours with ANC enabled' },
          { label: 'Talk Time', value: 'Up to 4.5 hours' },
          { label: 'Total Listening', value: 'Up to 30 hours with charging case' },
          { label: 'Case Charging', value: 'MagSafe, Apple Watch charger, Qi, USB-C' },
          { label: 'Quick Charge', value: '5 minutes of charging = 1 hour of listening' },
        ],
      },
      {
        category: 'Design & Fit',
        items: [
          { label: 'Ear Tips', value: 'Four sizes of silicone ear tips (XS, S, M, L)' },
          { label: 'Touch Control', value: 'Touch control for music, calls, Siri' },
          { label: 'Force Sensor', value: 'Press to switch between ANC and Transparency' },
          { label: 'Swipe Volume', value: 'Swipe up or down to adjust volume' },
        ],
      },
      {
        category: 'Durability & Case',
        items: [
          { label: 'Rating', value: 'IP54 dust, sweat, and water resistant (AirPods and case)' },
          { label: 'Case Features', value: 'Precision Finding with U1 chip, built-in speaker, lanyard loop' },
          { label: 'Case Connector', value: 'USB-C charging connector' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Compatibility', value: 'Apple devices with latest OS, or Bluetooth audio devices' },
        ],
      },
    ],
    features: [
      { title: 'H2 Chip', description: 'Apple-designed H2 chip powers intelligent audio features.', icon: 'Cpu' },
      { title: '2x Better ANC', description: 'Dramatically more powerful noise cancellation.', icon: 'VolumeX' },
      { title: 'Adaptive Audio', description: 'Dynamically blends Transparency and Active Noise Cancellation.', icon: 'Volume2' },
      { title: 'Conversation Awareness', description: 'Automatically lowers volume when you start speaking.', icon: 'MessageSquare' },
      { title: 'Personalized Spatial Audio', description: 'Creates immersive sound tailored to your ear.', icon: 'Headphones' },
    ],
    whatsInTheBox: ['AirPods Pro', 'MagSafe Charging Case (USB-C)', 'Four sizes of silicone ear tips', 'USB-C Charge Cable', 'Documentation'],
  },

  // AirPods Max
  {
    id: 'airpods-max',
    name: 'AirPods Max',
    shortName: 'AirPods Max',
    tagline: 'High-fidelity audio.',
    description: 'AirPods Max combine high-fidelity audio with Active Noise Cancellation.',
    fullDescription: 'AirPods Max reimagine over-ear headphones. The canopy spanning the headband is made of breathable knit mesh, distributing weight to reduce on-head pressure.',
    category: 'AirPods',
    basePrice: 549,
    heroImage: productImages.airpods.card,
    colors: [
      { name: 'Space Gray', value: '#4a4a4a', images: [productImages.airpods.card] },
      { name: 'Silver', value: '#c0c0c0', images: [productImages.airpods.card] },
      { name: 'Sky Blue', value: '#87ceeb', images: [productImages.airpods.card] },
      { name: 'Pink', value: '#ffb6c1', images: [productImages.airpods.card] },
      { name: 'Green', value: '#90ee90', images: [productImages.airpods.card] },
    ],
    variants: [
      { id: 'airpods-max-space-gray', name: 'AirPods Max Space Gray', color: { name: 'Space Gray', value: '#4a4a4a' }, price: 549, availability: 'in-stock', image: productImages.airpods.card },
      { id: 'airpods-max-silver', name: 'AirPods Max Silver', color: { name: 'Silver', value: '#c0c0c0' }, price: 549, availability: 'in-stock', image: productImages.airpods.card },
      { id: 'airpods-max-sky-blue', name: 'AirPods Max Sky Blue', color: { name: 'Sky Blue', value: '#87ceeb' }, price: 549, availability: 'in-stock', image: productImages.airpods.card },
    ],
    specs: [
      {
        category: 'Audio Technology',
        items: [
          { label: 'Chip', value: 'Apple H1 headphone chip in each ear cup' },
          { label: 'Drivers', value: 'Apple-designed dynamic driver' },
          { label: 'ANC', value: 'Industry-leading Active Noise Cancellation' },
          { label: 'Spatial Audio', value: 'Spatial Audio with dynamic head tracking' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Listening Time', value: 'Up to 20 hours' },
          { label: 'Charging', value: 'Lightning connector' },
        ],
      },
    ],
    features: [
      { title: 'Computational Audio', description: 'H1 chip powers breakthrough listening experiences.', icon: 'Cpu' },
      { title: 'Premium Design', description: 'Breathable knit mesh canopy for comfort.', icon: 'Headphones' },
      { title: '20-Hour Battery', description: 'All-day listening with ANC enabled.', icon: 'Battery' },
    ],
    whatsInTheBox: ['AirPods Max', 'Smart Case', 'Lightning to USB-C Cable'],
  },
];

// Combine base products with all iPhone and MacBook models
export const products: Product[] = [...baseProducts, ...iphoneModels, ...macbookModels];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getVariantPrice(product: Product, _colorName?: string, storageSize?: string): number {
  let price = product.basePrice;
  
  if (storageSize && product.storageOptions) {
    const storage = product.storageOptions.find(s => s.size === storageSize);
    if (storage) {
      price += storage.priceAdjustment;
    }
  }
  
  return price;
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];
  
  return products.filter((p) => {
    // Search by name
    if (p.name.toLowerCase().includes(lowerQuery)) return true;
    if (p.shortName?.toLowerCase().includes(lowerQuery)) return true;
    
    // Search by category
    if (p.category.toLowerCase().includes(lowerQuery)) return true;
    
    // Search by tagline
    if (p.tagline.toLowerCase().includes(lowerQuery)) return true;
    
    // Search by description
    if (p.description.toLowerCase().includes(lowerQuery)) return true;
    if (p.fullDescription?.toLowerCase().includes(lowerQuery)) return true;
    
    // Search by specs
    for (const specCategory of p.specs) {
      for (const item of specCategory.items) {
        if (item.label.toLowerCase().includes(lowerQuery)) return true;
        if (item.value.toLowerCase().includes(lowerQuery)) return true;
      }
    }
    
    // Search by features
    for (const feature of p.features) {
      if (feature.title.toLowerCase().includes(lowerQuery)) return true;
      if (feature.description.toLowerCase().includes(lowerQuery)) return true;
    }
    
    return false;
  });
}

export function getAllCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getInStockVariants(product: Product): ProductVariant[] {
  return product.variants.filter((v) => v.availability === 'in-stock');
}

export function getVariantById(product: Product, variantId: string): ProductVariant | undefined {
  return product.variants.find((v) => v.id === variantId);
}
