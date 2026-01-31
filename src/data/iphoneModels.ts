import type { Product } from './products';

// iPhone model images mapping
const iphoneImages = {
  // iPhone 13 Series
  'iphone-13': '/iphone13.jpg',
  'iphone-13-mini': '/iphone13mini.png',
  'iphone-13-pro': '/iphone13pro.png',
  'iphone-13-pro-max': '/iphone13promax.jpg',
  // iPhone 14 Series
  'iphone-14': '/iphone14.jpg',
  'iphone-14-plus': '/iphone14plus.jpg',
  'iphone-14-pro': '/iphone14pro.jpg',
  'iphone-14-pro-max': '/iphone14promax.jpg',
  // iPhone 15 Series
  'iphone-15': '/iphone15.jpg',
  'iphone-15-plus': '/iphone15plus.jpg',
  'iphone-15-pro': '/iphone15pro.jpg',
  'iphone-15-pro-max': '/iphone15promax.jpg',
  // iPhone 16 Series
  'iphone-16': '/iphone16.jpg',
  'iphone-16-plus': '/iphone16plus.jpg',
  'iphone-16-pro': '/iphone16pro.jpg',
  'iphone-16-pro-max': '/iphone16promax.jpg',
  // iPhone 17 Series
  'iphone-17': '/iphone17.jpg',
  'iphone-17-pro': '/iphone17pro.jpg',
  'iphone-17-pro-max': '/iphone17promax.jpg',
};

export const iphoneModels: Product[] = [
  // ============================================
  // iPhone 13 Series
  // ============================================
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    shortName: 'iPhone 13',
    tagline: 'Your new superpower.',
    description: 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again.',
    fullDescription: 'iPhone 13 features a beautiful 6.1-inch Super Retina XDR display with a sleek design. Powered by the A15 Bionic chip, it delivers incredible performance with outstanding battery life.',
    category: 'iPhone',
    basePrice: 599,
    heroImage: iphoneImages['iphone-13'],
    colors: [
      { name: 'Starlight', value: '#f5f5dc', images: [iphoneImages['iphone-13']] },
      { name: 'Midnight', value: '#1a1a2e', images: [iphoneImages['iphone-13']] },
      { name: 'Blue', value: '#4a6fa5', images: [iphoneImages['iphone-13']] },
      { name: 'Pink', value: '#ffc0cb', images: [iphoneImages['iphone-13']] },
      { name: 'Green', value: '#90ee90', images: [iphoneImages['iphone-13']] },
      { name: '(PRODUCT)RED', value: '#ff0000', images: [iphoneImages['iphone-13']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-13-128-starlight', name: 'iPhone 13 128GB Starlight', color: { name: 'Starlight', value: '#f5f5dc' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: iphoneImages['iphone-13'] },
      { id: 'iphone-13-256-starlight', name: 'iPhone 13 256GB Starlight', color: { name: 'Starlight', value: '#f5f5dc' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 699, availability: 'in-stock', image: iphoneImages['iphone-13'] },
      { id: 'iphone-13-512-starlight', name: 'iPhone 13 512GB Starlight', color: { name: 'Starlight', value: '#f5f5dc' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-13'] },
      { id: 'iphone-13-128-midnight', name: 'iPhone 13 128GB Midnight', color: { name: 'Midnight', value: '#1a1a2e' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: iphoneImages['iphone-13'] },
      { id: 'iphone-13-128-blue', name: 'iPhone 13 128GB Blue', color: { name: 'Blue', value: '#4a6fa5' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: iphoneImages['iphone-13'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2532 x 1170 pixels at 460 ppi' },
          { label: 'Features', value: 'HDR display, True Tone, Wide color (P3)' },
          { label: 'Brightness', value: '800 nits typical, 1200 nits HDR' },
          { label: 'Contrast', value: '2,000,000:1 contrast ratio' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A15 Bionic chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '4-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '12MP Main camera, ƒ/1.6 aperture, sensor-shift OIS' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/2.4, 120° field of view' },
          { label: 'Video', value: '4K Dolby Vision HDR at 24/25/30/60fps, Cinematic mode' },
          { label: 'Front Camera', value: '12MP TrueDepth, ƒ/2.2, Night mode' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 19 hours' },
          { label: 'Audio Playback', value: 'Up to 75 hours' },
          { label: 'Charging', value: 'Lightning connector' },
          { label: 'Fast Charging', value: 'Up to 50% in 30 min with 20W+ adapter' },
          { label: 'MagSafe', value: 'Wireless charging up to 15W' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Ceramic Shield front, glass back, aluminum frame' },
          { label: 'Height', value: '146.7 mm (5.78 inches)' },
          { label: 'Width', value: '71.5 mm (2.82 inches)' },
          { label: 'Depth', value: '7.65 mm (0.30 inch)' },
          { label: 'Weight', value: '173 grams (6.14 ounces)' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: '5G', value: 'Sub-6GHz and mmWave 5G' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.0' },
          { label: 'Water Resistance', value: 'IP68 (6 meters for 30 minutes)' },
        ],
      },
    ],
    features: [
      { title: 'A15 Bionic', description: 'The fastest chip ever in a smartphone at its time.', icon: 'Cpu' },
      { title: 'Cinematic Mode', description: 'Record videos with shallow depth of field and automatic focus changes.', icon: 'Video' },
      { title: 'Sensor-Shift OIS', description: 'Previously only in iPhone Pro models for stabilized photos.', icon: 'Camera' },
      { title: 'Ceramic Shield', description: '4x better drop performance for durability.', icon: 'Shield' },
    ],
    whatsInTheBox: ['iPhone 13', 'USB-C to Lightning Cable', 'Documentation'],
  },
  {
    id: 'iphone-13-mini',
    name: 'iPhone 13 mini',
    shortName: 'iPhone 13 mini',
    tagline: 'Big things in a small package.',
    description: 'All the power of iPhone 13 in a 5.4-inch size.',
    fullDescription: 'iPhone 13 mini features a 5.4-inch Super Retina XDR display, A15 Bionic chip, and advanced dual-camera system in an incredibly compact design.',
    category: 'iPhone',
    basePrice: 499,
    heroImage: iphoneImages['iphone-13-mini'],
    colors: [
      { name: 'Starlight', value: '#f5f5dc', images: [iphoneImages['iphone-13-mini']] },
      { name: 'Midnight', value: '#1a1a2e', images: [iphoneImages['iphone-13-mini']] },
      { name: 'Blue', value: '#4a6fa5', images: [iphoneImages['iphone-13-mini']] },
      { name: 'Pink', value: '#ffc0cb', images: [iphoneImages['iphone-13-mini']] },
      { name: 'Green', value: '#90ee90', images: [iphoneImages['iphone-13-mini']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-13-mini-128-starlight', name: 'iPhone 13 mini 128GB Starlight', color: { name: 'Starlight', value: '#f5f5dc' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 499, availability: 'in-stock', image: iphoneImages['iphone-13-mini'] },
      { id: 'iphone-13-mini-256-starlight', name: 'iPhone 13 mini 256GB Starlight', color: { name: 'Starlight', value: '#f5f5dc' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 599, availability: 'in-stock', image: iphoneImages['iphone-13-mini'] },
      { id: 'iphone-13-mini-128-midnight', name: 'iPhone 13 mini 128GB Midnight', color: { name: 'Midnight', value: '#1a1a2e' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 499, availability: 'in-stock', image: iphoneImages['iphone-13-mini'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '5.4-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2340 x 1080 pixels at 476 ppi' },
          { label: 'Features', value: 'HDR display, True Tone, Wide color (P3)' },
          { label: 'Brightness', value: '800 nits typical, 1200 nits HDR' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A15 Bionic chip' },
          { label: 'CPU', value: '6-core CPU' },
          { label: 'GPU', value: '4-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '12MP Main, ƒ/1.6, sensor-shift OIS' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/2.4' },
          { label: 'Front Camera', value: '12MP TrueDepth' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 17 hours' },
          { label: 'Audio Playback', value: 'Up to 55 hours' },
          { label: 'Charging', value: 'Lightning connector' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '131.5 mm (5.18 inches)' },
          { label: 'Width', value: '64.2 mm (2.53 inches)' },
          { label: 'Depth', value: '7.65 mm (0.30 inch)' },
          { label: 'Weight', value: '140 grams (4.97 ounces)' },
        ],
      },
    ],
    features: [
      { title: 'Compact Design', description: 'The smallest, thinnest, lightest 5G phone.', icon: 'Smartphone' },
      { title: 'A15 Bionic', description: 'Same powerful chip as iPhone 13.', icon: 'Cpu' },
      { title: 'Cinematic Mode', description: 'Record with beautiful depth of field.', icon: 'Video' },
    ],
    whatsInTheBox: ['iPhone 13 mini', 'USB-C to Lightning Cable', 'Documentation'],
  },
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    shortName: 'iPhone 13 Pro',
    tagline: 'Oh. So. Pro.',
    description: 'A dramatically more powerful camera system. A display so responsive.',
    fullDescription: 'iPhone 13 Pro features the most advanced Pro camera system ever, with ProMotion display, A15 Bionic with 5-core GPU, and up to 1TB storage.',
    category: 'iPhone',
    basePrice: 799,
    heroImage: iphoneImages['iphone-13-pro'],
    colors: [
      { name: 'Graphite', value: '#4a4a4a', images: [iphoneImages['iphone-13-pro']] },
      { name: 'Gold', value: '#ffd700', images: [iphoneImages['iphone-13-pro']] },
      { name: 'Silver', value: '#c0c0c0', images: [iphoneImages['iphone-13-pro']] },
      { name: 'Sierra Blue', value: '#69a3c8', images: [iphoneImages['iphone-13-pro']] },
      { name: 'Alpine Green', value: '#505f4e', images: [iphoneImages['iphone-13-pro']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'iphone-13-pro-128-graphite', name: 'iPhone 13 Pro 128GB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-13-pro'] },
      { id: 'iphone-13-pro-256-graphite', name: 'iPhone 13 Pro 256GB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-13-pro'] },
      { id: 'iphone-13-pro-512-graphite', name: 'iPhone 13 Pro 512GB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1099, availability: 'in-stock', image: iphoneImages['iphone-13-pro'] },
      { id: 'iphone-13-pro-1tb-graphite', name: 'iPhone 13 Pro 1TB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '1TB', priceAdjustment: 500 }, price: 1299, availability: 'in-stock', image: iphoneImages['iphone-13-pro'] },
      { id: 'iphone-13-pro-128-sierra-blue', name: 'iPhone 13 Pro 128GB Sierra Blue', color: { name: 'Sierra Blue', value: '#69a3c8' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-13-pro'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2532 x 1170 pixels at 460 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion with adaptive 10Hz-120Hz' },
          { label: 'Brightness', value: '1000 nits typical, 1200 nits HDR' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A15 Bionic chip' },
          { label: 'CPU', value: '6-core CPU' },
          { label: 'GPU', value: '5-core GPU (Pro exclusive)' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '12MP Main, ƒ/1.5, 1.9µm pixels, sensor-shift OIS' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/1.8, 120° FOV' },
          { label: 'Telephoto', value: '12MP Telephoto, 3x optical zoom, ƒ/2.8' },
          { label: 'Video', value: 'ProRes video recording up to 4K 30fps' },
          { label: 'Macro', value: 'Macro photography and video' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 22 hours' },
          { label: 'Audio Playback', value: 'Up to 75 hours' },
          { label: 'Charging', value: 'Lightning connector, MagSafe up to 15W' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Surgical-grade stainless steel, textured matte glass' },
          { label: 'Height', value: '146.7 mm' },
          { label: 'Width', value: '71.5 mm' },
          { label: 'Weight', value: '203 grams (7.19 ounces)' },
        ],
      },
    ],
    features: [
      { title: 'ProMotion', description: 'Adaptive refresh rates up to 120Hz for smooth scrolling.', icon: 'Monitor' },
      { title: 'Pro Camera System', description: '3x optical zoom, macro photography, ProRes video.', icon: 'Camera' },
      { title: 'Cinematic Mode', description: 'Record with beautiful depth of field in 4K HDR.', icon: 'Video' },
      { title: 'Stainless Steel', description: 'Surgical-grade stainless steel design.', icon: 'Shield' },
    ],
    whatsInTheBox: ['iPhone 13 Pro', 'USB-C to Lightning Cable', 'Documentation'],
  },
  {
    id: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    shortName: 'iPhone 13 Pro Max',
    tagline: 'The biggest Pro camera system ever.',
    description: 'All the Pro features plus the largest display and best battery life.',
    fullDescription: 'iPhone 13 Pro Max features a massive 6.7-inch ProMotion display, the longest battery life ever in an iPhone, and the same incredible Pro camera system.',
    category: 'iPhone',
    basePrice: 899,
    heroImage: iphoneImages['iphone-13-pro-max'],
    colors: [
      { name: 'Graphite', value: '#4a4a4a', images: [iphoneImages['iphone-13-pro-max']] },
      { name: 'Gold', value: '#ffd700', images: [iphoneImages['iphone-13-pro-max']] },
      { name: 'Silver', value: '#c0c0c0', images: [iphoneImages['iphone-13-pro-max']] },
      { name: 'Sierra Blue', value: '#69a3c8', images: [iphoneImages['iphone-13-pro-max']] },
      { name: 'Alpine Green', value: '#505f4e', images: [iphoneImages['iphone-13-pro-max']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'iphone-13-pro-max-128-graphite', name: 'iPhone 13 Pro Max 128GB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-13-pro-max'] },
      { id: 'iphone-13-pro-max-256-graphite', name: 'iPhone 13 Pro Max 256GB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 999, availability: 'in-stock', image: iphoneImages['iphone-13-pro-max'] },
      { id: 'iphone-13-pro-max-512-graphite', name: 'iPhone 13 Pro Max 512GB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1199, availability: 'in-stock', image: iphoneImages['iphone-13-pro-max'] },
      { id: 'iphone-13-pro-max-1tb-graphite', name: 'iPhone 13 Pro Max 1TB Graphite', color: { name: 'Graphite', value: '#4a4a4a' }, storage: { size: '1TB', priceAdjustment: 500 }, price: 1399, availability: 'in-stock', image: iphoneImages['iphone-13-pro-max'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.7-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2778 x 1284 pixels at 458 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion 10Hz-120Hz' },
          { label: 'Brightness', value: '1000 nits typical, 1200 nits HDR' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A15 Bionic chip' },
          { label: 'CPU', value: '6-core CPU' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '12MP Main, ƒ/1.5, sensor-shift OIS' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/1.8' },
          { label: 'Telephoto', value: '12MP Telephoto, 3x optical zoom' },
          { label: 'Video', value: 'ProRes up to 4K 30fps' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 28 hours (longest iPhone battery ever)' },
          { label: 'Audio Playback', value: 'Up to 95 hours' },
          { label: 'Charging', value: 'Lightning, MagSafe 15W' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '160.8 mm' },
          { label: 'Width', value: '78.1 mm' },
          { label: 'Weight', value: '238 grams' },
        ],
      },
    ],
    features: [
      { title: '28-Hour Battery', description: 'The longest battery life ever in an iPhone.', icon: 'Battery' },
      { title: '6.7" ProMotion', description: 'Massive display with adaptive 120Hz.', icon: 'Monitor' },
      { title: 'Pro Camera System', description: '3x optical zoom and ProRes video.', icon: 'Camera' },
    ],
    whatsInTheBox: ['iPhone 13 Pro Max', 'USB-C to Lightning Cable', 'Documentation'],
  },

  // ============================================
  // iPhone 14 Series
  // ============================================
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    shortName: 'iPhone 14',
    tagline: 'A total powerhouse.',
    description: 'Advanced camera system with Photonic Engine. Crash Detection. Emergency SOS via satellite.',
    fullDescription: 'iPhone 14 brings the A15 Bionic with 5-core GPU, an upgraded dual-camera system with Photonic Engine, and groundbreaking safety features like Crash Detection and Emergency SOS via satellite.',
    category: 'iPhone',
    basePrice: 699,
    heroImage: iphoneImages['iphone-14'],
    colors: [
      { name: 'Blue', value: '#78a5c5', images: [iphoneImages['iphone-14']] },
      { name: 'Purple', value: '#e6d0e6', images: [iphoneImages['iphone-14']] },
      { name: 'Midnight', value: '#1a1a2e', images: [iphoneImages['iphone-14']] },
      { name: 'Starlight', value: '#f5f5dc', images: [iphoneImages['iphone-14']] },
      { name: '(PRODUCT)RED', value: '#ff0000', images: [iphoneImages['iphone-14']] },
      { name: 'Yellow', value: '#f5e050', images: [iphoneImages['iphone-14']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-14-128-blue', name: 'iPhone 14 128GB Blue', color: { name: 'Blue', value: '#78a5c5' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 699, availability: 'in-stock', image: iphoneImages['iphone-14'] },
      { id: 'iphone-14-256-blue', name: 'iPhone 14 256GB Blue', color: { name: 'Blue', value: '#78a5c5' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-14'] },
      { id: 'iphone-14-512-blue', name: 'iPhone 14 512GB Blue', color: { name: 'Blue', value: '#78a5c5' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 999, availability: 'in-stock', image: iphoneImages['iphone-14'] },
      { id: 'iphone-14-128-purple', name: 'iPhone 14 128GB Purple', color: { name: 'Purple', value: '#e6d0e6' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 699, availability: 'in-stock', image: iphoneImages['iphone-14'] },
      { id: 'iphone-14-128-midnight', name: 'iPhone 14 128GB Midnight', color: { name: 'Midnight', value: '#1a1a2e' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 699, availability: 'in-stock', image: iphoneImages['iphone-14'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2532 x 1170 pixels at 460 ppi' },
          { label: 'Features', value: 'HDR display, True Tone, Wide color (P3), Haptic Touch' },
          { label: 'Brightness', value: '800 nits typical, 1200 nits peak HDR' },
          { label: 'Contrast', value: '2,000,000:1 contrast ratio' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A15 Bionic chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency)' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '12MP Main, ƒ/1.5, sensor-shift OIS, larger sensor' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/2.4, 120° FOV' },
          { label: 'Photonic Engine', value: 'Deep Fusion earlier in the pipeline for all cameras' },
          { label: 'Video', value: '4K Dolby Vision HDR, Cinematic mode 4K 30fps, Action mode' },
          { label: 'Front Camera', value: '12MP TrueDepth with autofocus, ƒ/1.9' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 20 hours' },
          { label: 'Audio Playback', value: 'Up to 80 hours' },
          { label: 'Streaming', value: 'Up to 16 hours video streaming' },
          { label: 'Charging', value: 'Lightning connector' },
          { label: 'MagSafe', value: 'Wireless charging up to 15W' },
        ],
      },
      {
        category: 'Safety Features',
        items: [
          { label: 'Crash Detection', value: 'Detects severe car crashes and calls for help' },
          { label: 'Emergency SOS', value: 'Emergency SOS via satellite' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Ceramic Shield, aluminum design' },
          { label: 'Height', value: '146.7 mm (5.78 inches)' },
          { label: 'Width', value: '71.5 mm (2.82 inches)' },
          { label: 'Depth', value: '7.80 mm (0.31 inch)' },
          { label: 'Weight', value: '172 grams (6.07 ounces)' },
        ],
      },
    ],
    features: [
      { title: 'Photonic Engine', description: 'Dramatically improves low-light photos across all cameras.', icon: 'Camera' },
      { title: 'Crash Detection', description: 'Automatically detects severe car crashes and calls for help.', icon: 'AlertTriangle' },
      { title: 'Emergency SOS via Satellite', description: 'Text emergency services when cellular and Wi-Fi are unavailable.', icon: 'Satellite' },
      { title: 'Action Mode', description: 'Smooth, steady handheld video even when shooting on the move.', icon: 'Video' },
    ],
    whatsInTheBox: ['iPhone 14', 'USB-C to Lightning Cable', 'Documentation'],
  },
  {
    id: 'iphone-14-plus',
    name: 'iPhone 14 Plus',
    shortName: 'iPhone 14 Plus',
    tagline: 'More of everything you love.',
    description: 'The larger 6.7-inch Super Retina XDR display with all-day battery life.',
    fullDescription: 'iPhone 14 Plus features a 6.7-inch Super Retina XDR display, the longest battery life ever in an iPhone, and all the great features of iPhone 14 in a bigger size.',
    category: 'iPhone',
    basePrice: 799,
    heroImage: iphoneImages['iphone-14-plus'],
    colors: [
      { name: 'Blue', value: '#78a5c5', images: [iphoneImages['iphone-14-plus']] },
      { name: 'Purple', value: '#e6d0e6', images: [iphoneImages['iphone-14-plus']] },
      { name: 'Midnight', value: '#1a1a2e', images: [iphoneImages['iphone-14-plus']] },
      { name: 'Starlight', value: '#f5f5dc', images: [iphoneImages['iphone-14-plus']] },
      { name: '(PRODUCT)RED', value: '#ff0000', images: [iphoneImages['iphone-14-plus']] },
      { name: 'Yellow', value: '#f5e050', images: [iphoneImages['iphone-14-plus']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-14-plus-128-blue', name: 'iPhone 14 Plus 128GB Blue', color: { name: 'Blue', value: '#78a5c5' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-14-plus'] },
      { id: 'iphone-14-plus-256-blue', name: 'iPhone 14 Plus 256GB Blue', color: { name: 'Blue', value: '#78a5c5' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-14-plus'] },
      { id: 'iphone-14-plus-128-purple', name: 'iPhone 14 Plus 128GB Purple', color: { name: 'Purple', value: '#e6d0e6' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-14-plus'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.7-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2778 x 1284 pixels at 458 ppi' },
          { label: 'Brightness', value: '800 nits typical, 1200 nits peak HDR' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A15 Bionic chip' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '12MP Main with larger sensor, sensor-shift OIS' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide' },
          { label: 'Video', value: '4K Dolby Vision, Cinematic mode, Action mode' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 26 hours (longest iPhone battery)' },
          { label: 'Audio Playback', value: 'Up to 100 hours' },
          { label: 'Streaming', value: 'Up to 20 hours' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '160.8 mm' },
          { label: 'Width', value: '78.1 mm' },
          { label: 'Weight', value: '203 grams' },
        ],
      },
    ],
    features: [
      { title: '26-Hour Battery', description: 'The longest battery life ever in an iPhone at launch.', icon: 'Battery' },
      { title: '6.7" Display', description: 'Larger Super Retina XDR display.', icon: 'Monitor' },
      { title: 'Crash Detection', description: 'Detects severe crashes and calls for help.', icon: 'AlertTriangle' },
    ],
    whatsInTheBox: ['iPhone 14 Plus', 'USB-C to Lightning Cable', 'Documentation'],
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    shortName: 'iPhone 14 Pro',
    tagline: 'Pro. Beyond.',
    description: 'Dynamic Island. 48MP Main camera. Always-On display. A16 Bionic chip.',
    fullDescription: 'iPhone 14 Pro introduces the Dynamic Island and Always-On display, features a 48MP Main camera for incredible detail, and is powered by the A16 Bionic chip.',
    category: 'iPhone',
    basePrice: 899,
    heroImage: iphoneImages['iphone-14-pro'],
    colors: [
      { name: 'Space Black', value: '#1a1a1a', images: [iphoneImages['iphone-14-pro']] },
      { name: 'Silver', value: '#c0c0c0', images: [iphoneImages['iphone-14-pro']] },
      { name: 'Gold', value: '#ffd700', images: [iphoneImages['iphone-14-pro']] },
      { name: 'Deep Purple', value: '#5c4d8c', images: [iphoneImages['iphone-14-pro']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'iphone-14-pro-128-space-black', name: 'iPhone 14 Pro 128GB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-14-pro'] },
      { id: 'iphone-14-pro-256-space-black', name: 'iPhone 14 Pro 256GB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 999, availability: 'in-stock', image: iphoneImages['iphone-14-pro'] },
      { id: 'iphone-14-pro-512-space-black', name: 'iPhone 14 Pro 512GB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1199, availability: 'in-stock', image: iphoneImages['iphone-14-pro'] },
      { id: 'iphone-14-pro-1tb-space-black', name: 'iPhone 14 Pro 1TB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '1TB', priceAdjustment: 500 }, price: 1399, availability: 'in-stock', image: iphoneImages['iphone-14-pro'] },
      { id: 'iphone-14-pro-128-deep-purple', name: 'iPhone 14 Pro 128GB Deep Purple', color: { name: 'Deep Purple', value: '#5c4d8c' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-14-pro'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2556 x 1179 pixels at 460 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion 1Hz-120Hz adaptive' },
          { label: 'Always-On', value: 'Always-On display with Dynamic Island' },
          { label: 'Brightness', value: '2000 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A16 Bionic chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency)' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Process', value: '4-nanometer technology' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Main, ƒ/1.78, quad-pixel sensor, 2nd-gen sensor-shift OIS' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/2.2, 120° FOV' },
          { label: 'Telephoto', value: '12MP Telephoto, 3x optical zoom, ƒ/2.8' },
          { label: 'Video', value: '4K 24fps Cinematic mode, ProRes up to 4K 30fps' },
          { label: 'Front Camera', value: '12MP TrueDepth, autofocus, ƒ/1.9' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 23 hours' },
          { label: 'Audio Playback', value: 'Up to 75 hours' },
          { label: 'Charging', value: 'Lightning connector' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Surgical-grade stainless steel, textured matte glass' },
          { label: 'Height', value: '147.5 mm' },
          { label: 'Width', value: '71.5 mm' },
          { label: 'Weight', value: '206 grams' },
        ],
      },
    ],
    features: [
      { title: 'Dynamic Island', description: 'A magical new way to interact with iPhone.', icon: 'Sparkles' },
      { title: '48MP Main Camera', description: 'Quad-pixel sensor for incredible detail.', icon: 'Camera' },
      { title: 'Always-On Display', description: 'Your Lock Screen is always glanceable.', icon: 'Monitor' },
      { title: 'A16 Bionic', description: 'The fastest chip ever in a smartphone.', icon: 'Cpu' },
    ],
    whatsInTheBox: ['iPhone 14 Pro', 'USB-C to Lightning Cable', 'Documentation'],
    isNew: false,
  },
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    shortName: 'iPhone 14 Pro Max',
    tagline: 'The ultimate iPhone.',
    description: 'All the Pro features with the largest display and best battery life.',
    fullDescription: 'iPhone 14 Pro Max combines the Dynamic Island, Always-On display, and 48MP camera with a massive 6.7-inch display and exceptional battery life.',
    category: 'iPhone',
    basePrice: 1099,
    heroImage: iphoneImages['iphone-14-pro-max'],
    colors: [
      { name: 'Space Black', value: '#1a1a1a', images: [iphoneImages['iphone-14-pro-max']] },
      { name: 'Silver', value: '#c0c0c0', images: [iphoneImages['iphone-14-pro-max']] },
      { name: 'Gold', value: '#ffd700', images: [iphoneImages['iphone-14-pro-max']] },
      { name: 'Deep Purple', value: '#5c4d8c', images: [iphoneImages['iphone-14-pro-max']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'iphone-14-pro-max-128-space-black', name: 'iPhone 14 Pro Max 128GB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: iphoneImages['iphone-14-pro-max'] },
      { id: 'iphone-14-pro-max-256-space-black', name: 'iPhone 14 Pro Max 256GB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 1199, availability: 'in-stock', image: iphoneImages['iphone-14-pro-max'] },
      { id: 'iphone-14-pro-max-512-space-black', name: 'iPhone 14 Pro Max 512GB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1399, availability: 'in-stock', image: iphoneImages['iphone-14-pro-max'] },
      { id: 'iphone-14-pro-max-1tb-space-black', name: 'iPhone 14 Pro Max 1TB Space Black', color: { name: 'Space Black', value: '#1a1a1a' }, storage: { size: '1TB', priceAdjustment: 500 }, price: 1599, availability: 'in-stock', image: iphoneImages['iphone-14-pro-max'] },
      { id: 'iphone-14-pro-max-128-deep-purple', name: 'iPhone 14 Pro Max 128GB Deep Purple', color: { name: 'Deep Purple', value: '#5c4d8c' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: iphoneImages['iphone-14-pro-max'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.7-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2796 x 1290 pixels at 460 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion 1Hz-120Hz' },
          { label: 'Always-On', value: 'Always-On display with Dynamic Island' },
          { label: 'Brightness', value: '2000 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A16 Bionic chip' },
          { label: 'CPU', value: '6-core CPU' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Main, quad-pixel sensor' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide' },
          { label: 'Telephoto', value: '12MP 3x Telephoto' },
          { label: 'Video', value: 'ProRes, Cinematic mode 4K' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 29 hours' },
          { label: 'Audio Playback', value: 'Up to 95 hours' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '160.7 mm' },
          { label: 'Width', value: '77.6 mm' },
          { label: 'Weight', value: '240 grams' },
        ],
      },
    ],
    features: [
      { title: 'Dynamic Island', description: 'A magical new way to interact with iPhone.', icon: 'Sparkles' },
      { title: '29-Hour Battery', description: 'The longest battery life in iPhone Pro.', icon: 'Battery' },
      { title: '48MP Camera', description: 'Capture incredible detail.', icon: 'Camera' },
      { title: 'Always-On Display', description: 'Your Lock Screen always visible.', icon: 'Monitor' },
    ],
    whatsInTheBox: ['iPhone 14 Pro Max', 'USB-C to Lightning Cable', 'Documentation'],
  },

  // ============================================
  // iPhone 15 Series
  // ============================================
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    shortName: 'iPhone 15',
    tagline: 'Newphoria.',
    description: 'Dynamic Island. 48MP camera. USB-C. Durable color-infused glass design.',
    fullDescription: 'iPhone 15 features a color-infused glass and aluminum design, Dynamic Island, 48MP Main camera, USB-C connector, and the powerful A16 Bionic chip.',
    category: 'iPhone',
    basePrice: 799,
    heroImage: iphoneImages['iphone-15'],
    colors: [
      { name: 'Black', value: '#1a1a1a', images: [iphoneImages['iphone-15']] },
      { name: 'Blue', value: '#a7c7e7', images: [iphoneImages['iphone-15']] },
      { name: 'Green', value: '#c5d5cb', images: [iphoneImages['iphone-15']] },
      { name: 'Yellow', value: '#f5e6a3', images: [iphoneImages['iphone-15']] },
      { name: 'Pink', value: '#f8d7dc', images: [iphoneImages['iphone-15']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-15-128-black', name: 'iPhone 15 128GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-15'] },
      { id: 'iphone-15-256-black', name: 'iPhone 15 256GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-15'] },
      { id: 'iphone-15-512-black', name: 'iPhone 15 512GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1099, availability: 'in-stock', image: iphoneImages['iphone-15'] },
      { id: 'iphone-15-128-blue', name: 'iPhone 15 128GB Blue', color: { name: 'Blue', value: '#a7c7e7' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-15'] },
      { id: 'iphone-15-128-pink', name: 'iPhone 15 128GB Pink', color: { name: 'Pink', value: '#f8d7dc' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-15'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2556 x 1179 pixels at 460 ppi' },
          { label: 'Features', value: 'Dynamic Island, HDR, True Tone, Wide color (P3)' },
          { label: 'Brightness', value: '1000 nits typical, 2000 nits peak HDR outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A16 Bionic chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency)' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Main, ƒ/1.6, sensor-shift OIS, 2x Telephoto option' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/2.4, 120° FOV' },
          { label: 'Video', value: '4K Dolby Vision HDR, Cinematic mode, Action mode' },
          { label: 'Front Camera', value: '12MP TrueDepth, autofocus, ƒ/1.9' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 20 hours' },
          { label: 'Audio Playback', value: 'Up to 80 hours' },
          { label: 'Connector', value: 'USB-C (USB 2 speeds)' },
          { label: 'MagSafe', value: 'Wireless charging up to 15W' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Color-infused glass back, aluminum frame' },
          { label: 'Height', value: '147.6 mm' },
          { label: 'Width', value: '71.6 mm' },
          { label: 'Depth', value: '7.80 mm' },
          { label: 'Weight', value: '171 grams' },
        ],
      },
      {
        category: 'Durability',
        items: [
          { label: 'Water Resistance', value: 'IP68 (6 meters for 30 minutes)' },
          { label: 'Front Glass', value: 'Ceramic Shield front' },
        ],
      },
    ],
    features: [
      { title: 'Dynamic Island', description: 'A new way to interact with iPhone.', icon: 'Sparkles' },
      { title: '48MP Camera', description: 'Super-high-resolution photos with 2x Telephoto.', icon: 'Camera' },
      { title: 'USB-C', description: 'Industry-standard charging and accessories.', icon: 'Usb' },
      { title: 'A16 Bionic', description: 'Powerfully fast chip from iPhone 14 Pro.', icon: 'Cpu' },
    ],
    whatsInTheBox: ['iPhone 15', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },
  {
    id: 'iphone-15-plus',
    name: 'iPhone 15 Plus',
    shortName: 'iPhone 15 Plus',
    tagline: 'Plus-sized power.',
    description: 'All the features of iPhone 15 with a larger 6.7-inch display and longer battery.',
    fullDescription: 'iPhone 15 Plus features the same great Dynamic Island, 48MP camera, and USB-C as iPhone 15, but with a larger 6.7-inch display and the longest battery life in iPhone.',
    category: 'iPhone',
    basePrice: 899,
    heroImage: iphoneImages['iphone-15-plus'],
    colors: [
      { name: 'Black', value: '#1a1a1a', images: [iphoneImages['iphone-15-plus']] },
      { name: 'Blue', value: '#a7c7e7', images: [iphoneImages['iphone-15-plus']] },
      { name: 'Green', value: '#c5d5cb', images: [iphoneImages['iphone-15-plus']] },
      { name: 'Yellow', value: '#f5e6a3', images: [iphoneImages['iphone-15-plus']] },
      { name: 'Pink', value: '#f8d7dc', images: [iphoneImages['iphone-15-plus']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-15-plus-128-black', name: 'iPhone 15 Plus 128GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-15-plus'] },
      { id: 'iphone-15-plus-256-black', name: 'iPhone 15 Plus 256GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 999, availability: 'in-stock', image: iphoneImages['iphone-15-plus'] },
      { id: 'iphone-15-plus-128-blue', name: 'iPhone 15 Plus 128GB Blue', color: { name: 'Blue', value: '#a7c7e7' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-15-plus'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.7-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2796 x 1290 pixels at 460 ppi' },
          { label: 'Features', value: 'Dynamic Island, 2000 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A16 Bionic chip' },
          { label: 'GPU', value: '5-core GPU' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Main with 2x Telephoto' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 26 hours' },
          { label: 'Connector', value: 'USB-C' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '160.9 mm' },
          { label: 'Width', value: '77.8 mm' },
          { label: 'Weight', value: '201 grams' },
        ],
      },
    ],
    features: [
      { title: '26-Hour Battery', description: 'All-day and more battery life.', icon: 'Battery' },
      { title: '6.7" Display', description: 'Larger Super Retina XDR display.', icon: 'Monitor' },
      { title: '48MP Camera', description: 'Super-high-resolution photos.', icon: 'Camera' },
    ],
    whatsInTheBox: ['iPhone 15 Plus', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },

  // ============================================
  // iPhone 16 Series
  // ============================================
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    shortName: 'iPhone 16',
    tagline: 'Hello, Apple Intelligence.',
    description: 'Built for Apple Intelligence. Camera Control. A18 chip. 48MP Fusion camera.',
    fullDescription: 'iPhone 16 is designed from the ground up for Apple Intelligence. It features the A18 chip, a new Camera Control button, and an advanced 48MP Fusion camera system.',
    category: 'iPhone',
    basePrice: 799,
    heroImage: iphoneImages['iphone-16'],
    colors: [
      { name: 'Black', value: '#1a1a1a', images: [iphoneImages['iphone-16']] },
      { name: 'White', value: '#f5f5f5', images: [iphoneImages['iphone-16']] },
      { name: 'Pink', value: '#f4c2c2', images: [iphoneImages['iphone-16']] },
      { name: 'Teal', value: '#008080', images: [iphoneImages['iphone-16']] },
      { name: 'Ultramarine', value: '#4166f5', images: [iphoneImages['iphone-16']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-16-128-black', name: 'iPhone 16 128GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-16'] },
      { id: 'iphone-16-256-black', name: 'iPhone 16 256GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-16'] },
      { id: 'iphone-16-512-black', name: 'iPhone 16 512GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1099, availability: 'in-stock', image: iphoneImages['iphone-16'] },
      { id: 'iphone-16-128-ultramarine', name: 'iPhone 16 128GB Ultramarine', color: { name: 'Ultramarine', value: '#4166f5' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-16'] },
      { id: 'iphone-16-128-teal', name: 'iPhone 16 128GB Teal', color: { name: 'Teal', value: '#008080' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: iphoneImages['iphone-16'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2556 x 1179 pixels at 460 ppi' },
          { label: 'Features', value: 'Dynamic Island, HDR, True Tone, Wide color (P3)' },
          { label: 'Brightness', value: '1000 nits typical, 2000 nits peak HDR outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A18 chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency)' },
          { label: 'GPU', value: '5-core GPU with hardware ray tracing' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Apple Intelligence', value: 'Designed for Apple Intelligence features' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Fusion camera, ƒ/1.6, sensor-shift OIS, 2x Telephoto' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide, ƒ/2.2, 120° FOV, macro' },
          { label: 'Camera Control', value: 'New Camera Control button for quick access' },
          { label: 'Video', value: '4K 60fps Dolby Vision, Cinematic mode, Action mode' },
          { label: 'Spatial', value: 'Spatial photos and videos for Apple Vision Pro' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 22 hours' },
          { label: 'Audio Playback', value: 'Up to 85 hours' },
          { label: 'Connector', value: 'USB-C (USB 2)' },
          { label: 'MagSafe', value: 'Wireless charging up to 25W with MagSafe' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Color-infused glass back, aluminum frame' },
          { label: 'Height', value: '147.6 mm' },
          { label: 'Width', value: '71.6 mm' },
          { label: 'Weight', value: '170 grams' },
        ],
      },
    ],
    features: [
      { title: 'Apple Intelligence', description: 'Personal AI that understands you.', icon: 'Sparkles' },
      { title: 'Camera Control', description: 'New button for quick camera access.', icon: 'Camera' },
      { title: 'A18 Chip', description: '30% faster than A16, designed for AI.', icon: 'Cpu' },
      { title: 'Spatial Video', description: 'Capture memories for Apple Vision Pro.', icon: 'Video' },
    ],
    whatsInTheBox: ['iPhone 16', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    shortName: 'iPhone 16 Plus',
    tagline: 'More power. More screen.',
    description: 'All the Apple Intelligence features in a larger 6.7-inch display.',
    fullDescription: 'iPhone 16 Plus brings Apple Intelligence to a larger canvas with its 6.7-inch display, A18 chip, Camera Control, and the longest battery life ever in an iPhone.',
    category: 'iPhone',
    basePrice: 899,
    heroImage: iphoneImages['iphone-16-plus'],
    colors: [
      { name: 'Black', value: '#1a1a1a', images: [iphoneImages['iphone-16-plus']] },
      { name: 'White', value: '#f5f5f5', images: [iphoneImages['iphone-16-plus']] },
      { name: 'Pink', value: '#f4c2c2', images: [iphoneImages['iphone-16-plus']] },
      { name: 'Teal', value: '#008080', images: [iphoneImages['iphone-16-plus']] },
      { name: 'Ultramarine', value: '#4166f5', images: [iphoneImages['iphone-16-plus']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-16-plus-128-black', name: 'iPhone 16 Plus 128GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-16-plus'] },
      { id: 'iphone-16-plus-256-black', name: 'iPhone 16 Plus 256GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 999, availability: 'in-stock', image: iphoneImages['iphone-16-plus'] },
      { id: 'iphone-16-plus-128-ultramarine', name: 'iPhone 16 Plus 128GB Ultramarine', color: { name: 'Ultramarine', value: '#4166f5' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'in-stock', image: iphoneImages['iphone-16-plus'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.7-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2796 x 1290 pixels at 460 ppi' },
          { label: 'Features', value: 'Dynamic Island, 2000 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A18 chip' },
          { label: 'GPU', value: '5-core GPU with ray tracing' },
          { label: 'Apple Intelligence', value: 'Built for Apple Intelligence' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Fusion camera with Camera Control' },
          { label: 'Ultra Wide', value: '12MP with macro' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 27 hours' },
          { label: 'MagSafe', value: 'Up to 25W wireless' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '160.9 mm' },
          { label: 'Width', value: '77.8 mm' },
          { label: 'Weight', value: '199 grams' },
        ],
      },
    ],
    features: [
      { title: '27-Hour Battery', description: 'Longest battery life ever in iPhone.', icon: 'Battery' },
      { title: 'Apple Intelligence', description: 'Personal AI on a larger canvas.', icon: 'Sparkles' },
      { title: 'Camera Control', description: 'Quick access to camera features.', icon: 'Camera' },
    ],
    whatsInTheBox: ['iPhone 16 Plus', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    shortName: 'iPhone 16 Pro',
    tagline: 'Built for Apple Intelligence.',
    description: 'A18 Pro chip. 48MP Fusion camera. 5x Telephoto. Camera Control. Titanium.',
    fullDescription: 'iPhone 16 Pro features the most advanced Pro camera system ever with a 48MP Fusion camera, 5x Telephoto, and Camera Control. Powered by A18 Pro chip designed for Apple Intelligence.',
    category: 'iPhone',
    basePrice: 999,
    heroImage: iphoneImages['iphone-16-pro'],
    colors: [
      { name: 'Black Titanium', value: '#1a1a1a', images: [iphoneImages['iphone-16-pro']] },
      { name: 'White Titanium', value: '#f7f7f7', images: [iphoneImages['iphone-16-pro']] },
      { name: 'Natural Titanium', value: '#9a9a9a', images: [iphoneImages['iphone-16-pro']] },
      { name: 'Desert Titanium', value: '#c4a35a', images: [iphoneImages['iphone-16-pro']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'iphone-16-pro-128-black-titanium', name: 'iPhone 16 Pro 128GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: iphoneImages['iphone-16-pro'] },
      { id: 'iphone-16-pro-256-black-titanium', name: 'iPhone 16 Pro 256GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 1099, availability: 'in-stock', image: iphoneImages['iphone-16-pro'] },
      { id: 'iphone-16-pro-512-black-titanium', name: 'iPhone 16 Pro 512GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1299, availability: 'in-stock', image: iphoneImages['iphone-16-pro'] },
      { id: 'iphone-16-pro-1tb-black-titanium', name: 'iPhone 16 Pro 1TB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '1TB', priceAdjustment: 500 }, price: 1499, availability: 'in-stock', image: iphoneImages['iphone-16-pro'] },
      { id: 'iphone-16-pro-128-desert-titanium', name: 'iPhone 16 Pro 128GB Desert Titanium', color: { name: 'Desert Titanium', value: '#c4a35a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: iphoneImages['iphone-16-pro'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.3-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2622 x 1206 pixels at 460 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion 1Hz-120Hz' },
          { label: 'Always-On', value: 'Always-On display with Dynamic Island' },
          { label: 'Brightness', value: '2000 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A18 Pro chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency)' },
          { label: 'GPU', value: '6-core GPU with hardware ray tracing' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Apple Intelligence', value: 'Designed for Apple Intelligence' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Fusion camera, ƒ/1.78, 2nd-gen sensor-shift OIS' },
          { label: 'Ultra Wide', value: '48MP Ultra Wide, ƒ/2.2, macro' },
          { label: 'Telephoto', value: '12MP 5x Telephoto, 120mm, tetraprism' },
          { label: 'Camera Control', value: 'Dedicated Camera Control button' },
          { label: 'Video', value: '4K 120fps, ProRes, Log, Spatial video' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 27 hours' },
          { label: 'Connector', value: 'USB-C with USB 3 (up to 10Gb/s)' },
          { label: 'MagSafe', value: 'Up to 25W wireless charging' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Grade 5 titanium, textured matte glass' },
          { label: 'Height', value: '149.6 mm' },
          { label: 'Width', value: '71.5 mm' },
          { label: 'Weight', value: '199 grams' },
        ],
      },
    ],
    features: [
      { title: 'Apple Intelligence', description: 'Personal AI built into iPhone.', icon: 'Sparkles' },
      { title: '48MP Fusion Camera', description: 'Revolutionary dual-use sensor.', icon: 'Camera' },
      { title: '5x Telephoto', description: 'Longest optical zoom on iPhone Pro.', icon: 'ZoomIn' },
      { title: 'A18 Pro', description: 'Most powerful chip in a smartphone.', icon: 'Cpu' },
      { title: 'Camera Control', description: 'New way to capture and adjust.', icon: 'Aperture' },
    ],
    whatsInTheBox: ['iPhone 16 Pro', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    shortName: 'iPhone 16 Pro Max',
    tagline: 'The ultimate Pro.',
    description: 'Largest display ever. A18 Pro. 48MP camera. 5x zoom. Titanium design.',
    fullDescription: 'iPhone 16 Pro Max features the largest iPhone display ever at 6.9 inches, A18 Pro chip, 48MP Fusion camera with 5x Telephoto, Camera Control, and all-day battery life.',
    category: 'iPhone',
    basePrice: 1199,
    heroImage: iphoneImages['iphone-16-pro-max'],
    colors: [
      { name: 'Black Titanium', value: '#1a1a1a', images: [iphoneImages['iphone-16-pro-max']] },
      { name: 'White Titanium', value: '#f7f7f7', images: [iphoneImages['iphone-16-pro-max']] },
      { name: 'Natural Titanium', value: '#9a9a9a', images: [iphoneImages['iphone-16-pro-max']] },
      { name: 'Desert Titanium', value: '#c4a35a', images: [iphoneImages['iphone-16-pro-max']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'iphone-16-pro-max-256-black-titanium', name: 'iPhone 16 Pro Max 256GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1199, availability: 'in-stock', image: iphoneImages['iphone-16-pro-max'] },
      { id: 'iphone-16-pro-max-512-black-titanium', name: 'iPhone 16 Pro Max 512GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1399, availability: 'in-stock', image: iphoneImages['iphone-16-pro-max'] },
      { id: 'iphone-16-pro-max-1tb-black-titanium', name: 'iPhone 16 Pro Max 1TB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '1TB', priceAdjustment: 400 }, price: 1599, availability: 'in-stock', image: iphoneImages['iphone-16-pro-max'] },
      { id: 'iphone-16-pro-max-256-desert-titanium', name: 'iPhone 16 Pro Max 256GB Desert Titanium', color: { name: 'Desert Titanium', value: '#c4a35a' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1199, availability: 'in-stock', image: iphoneImages['iphone-16-pro-max'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.9-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2868 x 1320 pixels at 460 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion 1Hz-120Hz' },
          { label: 'Always-On', value: 'Always-On display' },
          { label: 'Brightness', value: '2000 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A18 Pro chip' },
          { label: 'CPU', value: '6-core CPU' },
          { label: 'GPU', value: '6-core GPU with ray tracing' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Fusion camera' },
          { label: 'Ultra Wide', value: '48MP Ultra Wide with macro' },
          { label: 'Telephoto', value: '12MP 5x Telephoto tetraprism' },
          { label: 'Video', value: '4K 120fps Dolby Vision, ProRes' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 33 hours' },
          { label: 'Connector', value: 'USB-C with USB 3' },
          { label: 'MagSafe', value: 'Up to 25W wireless' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Grade 5 titanium' },
          { label: 'Height', value: '163.0 mm' },
          { label: 'Width', value: '77.6 mm' },
          { label: 'Weight', value: '227 grams' },
        ],
      },
    ],
    features: [
      { title: '6.9" Display', description: 'Largest iPhone display ever.', icon: 'Monitor' },
      { title: '33-Hour Battery', description: 'Incredible all-day+ battery.', icon: 'Battery' },
      { title: 'Apple Intelligence', description: 'Personal AI at its best.', icon: 'Sparkles' },
      { title: '4K 120fps Video', description: 'Professional-grade video.', icon: 'Video' },
    ],
    whatsInTheBox: ['iPhone 16 Pro Max', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },

  // ============================================
  // iPhone 17 Series (2025)
  // ============================================
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    shortName: 'iPhone 17',
    tagline: 'Intelligence redefined.',
    description: 'A19 chip. Advanced Apple Intelligence. 48MP camera system. All-new design.',
    fullDescription: 'iPhone 17 introduces a refined design with even more powerful Apple Intelligence features, the A19 chip, and an enhanced 48MP camera system with computational photography breakthroughs.',
    category: 'iPhone',
    basePrice: 899,
    heroImage: iphoneImages['iphone-17'],
    colors: [
      { name: 'Black', value: '#1a1a1a', images: [iphoneImages['iphone-17']] },
      { name: 'White', value: '#f5f5f5', images: [iphoneImages['iphone-17']] },
      { name: 'Blue', value: '#6495ed', images: [iphoneImages['iphone-17']] },
      { name: 'Green', value: '#8fbc8f', images: [iphoneImages['iphone-17']] },
      { name: 'Rose', value: '#dba39a', images: [iphoneImages['iphone-17']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'iphone-17-128-black', name: 'iPhone 17 128GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'pre-order', image: iphoneImages['iphone-17'] },
      { id: 'iphone-17-256-black', name: 'iPhone 17 256GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 999, availability: 'pre-order', image: iphoneImages['iphone-17'] },
      { id: 'iphone-17-512-black', name: 'iPhone 17 512GB Black', color: { name: 'Black', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1199, availability: 'pre-order', image: iphoneImages['iphone-17'] },
      { id: 'iphone-17-128-blue', name: 'iPhone 17 128GB Blue', color: { name: 'Blue', value: '#6495ed' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 899, availability: 'pre-order', image: iphoneImages['iphone-17'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.1-inch Super Retina XDR display' },
          { label: 'Resolution', value: '2556 x 1179 pixels at 460 ppi' },
          { label: 'Features', value: 'Dynamic Island, ProMotion 120Hz' },
          { label: 'Brightness', value: '2200 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A19 chip' },
          { label: 'CPU', value: '6-core CPU with enhanced efficiency' },
          { label: 'GPU', value: '6-core GPU with advanced ray tracing' },
          { label: 'Neural Engine', value: '18-core Neural Engine' },
          { label: 'Apple Intelligence', value: 'Enhanced on-device AI capabilities' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Fusion camera with advanced computational photography' },
          { label: 'Ultra Wide', value: '12MP Ultra Wide with improved low-light' },
          { label: 'Camera Control', value: 'Enhanced Camera Control with haptic feedback' },
          { label: 'Video', value: '4K 120fps HDR, enhanced Cinematic mode' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 24 hours' },
          { label: 'Connector', value: 'USB-C with USB 3' },
          { label: 'MagSafe', value: 'Up to 30W wireless charging' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Refined aluminum and ceramic glass' },
          { label: 'Height', value: '147.6 mm' },
          { label: 'Width', value: '71.6 mm' },
          { label: 'Weight', value: '168 grams' },
        ],
      },
    ],
    features: [
      { title: 'A19 Chip', description: 'Next-generation performance.', icon: 'Cpu' },
      { title: 'Enhanced AI', description: 'More powerful Apple Intelligence.', icon: 'Sparkles' },
      { title: 'ProMotion', description: '120Hz now on standard iPhone.', icon: 'Monitor' },
      { title: '30W MagSafe', description: 'Fastest wireless charging ever.', icon: 'Zap' },
    ],
    whatsInTheBox: ['iPhone 17', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    shortName: 'iPhone 17 Pro',
    tagline: 'Professional power.',
    description: 'A19 Pro chip. Revolutionary camera system. Titanium. Apple Intelligence Pro.',
    fullDescription: 'iPhone 17 Pro pushes the boundaries with A19 Pro chip, a revolutionary 48MP triple-camera system with enhanced zoom capabilities, and titanium design with advanced Apple Intelligence Pro features.',
    category: 'iPhone',
    basePrice: 1099,
    heroImage: iphoneImages['iphone-17-pro'],
    colors: [
      { name: 'Black Titanium', value: '#1a1a1a', images: [iphoneImages['iphone-17-pro']] },
      { name: 'White Titanium', value: '#f7f7f7', images: [iphoneImages['iphone-17-pro']] },
      { name: 'Natural Titanium', value: '#9a9a9a', images: [iphoneImages['iphone-17-pro']] },
      { name: 'Ocean Titanium', value: '#1e3a5f', images: [iphoneImages['iphone-17-pro']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
      { size: '2TB', priceAdjustment: 800 },
    ],
    variants: [
      { id: 'iphone-17-pro-256-black-titanium', name: 'iPhone 17 Pro 256GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'pre-order', image: iphoneImages['iphone-17-pro'] },
      { id: 'iphone-17-pro-512-black-titanium', name: 'iPhone 17 Pro 512GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1299, availability: 'pre-order', image: iphoneImages['iphone-17-pro'] },
      { id: 'iphone-17-pro-1tb-black-titanium', name: 'iPhone 17 Pro 1TB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '1TB', priceAdjustment: 400 }, price: 1499, availability: 'pre-order', image: iphoneImages['iphone-17-pro'] },
      { id: 'iphone-17-pro-2tb-black-titanium', name: 'iPhone 17 Pro 2TB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '2TB', priceAdjustment: 800 }, price: 1899, availability: 'pre-order', image: iphoneImages['iphone-17-pro'] },
      { id: 'iphone-17-pro-256-ocean-titanium', name: 'iPhone 17 Pro 256GB Ocean Titanium', color: { name: 'Ocean Titanium', value: '#1e3a5f' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'pre-order', image: iphoneImages['iphone-17-pro'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.3-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2622 x 1206 pixels at 460 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion 1Hz-120Hz' },
          { label: 'Always-On', value: 'Always-On display with Dynamic Island' },
          { label: 'Brightness', value: '2500 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A19 Pro chip' },
          { label: 'CPU', value: '6-core CPU with 20% faster performance' },
          { label: 'GPU', value: '6-core GPU with enhanced ray tracing' },
          { label: 'Neural Engine', value: '18-core Neural Engine' },
          { label: 'Apple Intelligence Pro', value: 'Advanced on-device AI with Pro features' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Fusion camera, enhanced low-light' },
          { label: 'Ultra Wide', value: '48MP Ultra Wide with macro' },
          { label: 'Telephoto', value: '12MP 7x Telephoto with improved OIS' },
          { label: 'Video', value: '8K 30fps, 4K 120fps ProRes, Log' },
          { label: 'Spatial', value: 'Enhanced spatial video and photos' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 30 hours' },
          { label: 'Connector', value: 'USB-C with Thunderbolt 4' },
          { label: 'MagSafe', value: 'Up to 30W wireless charging' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Grade 5 titanium, ceramic shield' },
          { label: 'Height', value: '149.6 mm' },
          { label: 'Width', value: '71.5 mm' },
          { label: 'Weight', value: '194 grams' },
        ],
      },
    ],
    features: [
      { title: 'A19 Pro', description: '20% faster, breakthrough efficiency.', icon: 'Cpu' },
      { title: '7x Telephoto', description: 'Longest optical zoom in iPhone.', icon: 'ZoomIn' },
      { title: '8K Video', description: 'Professional-grade 8K recording.', icon: 'Video' },
      { title: 'Thunderbolt 4', description: 'Fastest data transfer ever.', icon: 'Zap' },
      { title: 'AI Pro Features', description: 'Enhanced Apple Intelligence.', icon: 'Sparkles' },
    ],
    whatsInTheBox: ['iPhone 17 Pro', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    shortName: 'iPhone 17 Pro Max',
    tagline: 'Maximum everything.',
    description: 'Largest display. Longest battery. Most powerful chip. Ultimate camera.',
    fullDescription: 'iPhone 17 Pro Max is the ultimate iPhone with a 6.9-inch display, A19 Pro chip, revolutionary 7x zoom camera system, up to 40 hours of video playback, and the most advanced Apple Intelligence features.',
    category: 'iPhone',
    basePrice: 1299,
    heroImage: iphoneImages['iphone-17-pro-max'],
    colors: [
      { name: 'Black Titanium', value: '#1a1a1a', images: [iphoneImages['iphone-17-pro-max']] },
      { name: 'White Titanium', value: '#f7f7f7', images: [iphoneImages['iphone-17-pro-max']] },
      { name: 'Natural Titanium', value: '#9a9a9a', images: [iphoneImages['iphone-17-pro-max']] },
      { name: 'Ocean Titanium', value: '#1e3a5f', images: [iphoneImages['iphone-17-pro-max']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
      { size: '2TB', priceAdjustment: 800 },
    ],
    variants: [
      { id: 'iphone-17-pro-max-256-black-titanium', name: 'iPhone 17 Pro Max 256GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1299, availability: 'pre-order', image: iphoneImages['iphone-17-pro-max'] },
      { id: 'iphone-17-pro-max-512-black-titanium', name: 'iPhone 17 Pro Max 512GB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1499, availability: 'pre-order', image: iphoneImages['iphone-17-pro-max'] },
      { id: 'iphone-17-pro-max-1tb-black-titanium', name: 'iPhone 17 Pro Max 1TB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '1TB', priceAdjustment: 400 }, price: 1699, availability: 'pre-order', image: iphoneImages['iphone-17-pro-max'] },
      { id: 'iphone-17-pro-max-2tb-black-titanium', name: 'iPhone 17 Pro Max 2TB Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, storage: { size: '2TB', priceAdjustment: 800 }, price: 2099, availability: 'pre-order', image: iphoneImages['iphone-17-pro-max'] },
      { id: 'iphone-17-pro-max-256-ocean-titanium', name: 'iPhone 17 Pro Max 256GB Ocean Titanium', color: { name: 'Ocean Titanium', value: '#1e3a5f' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1299, availability: 'pre-order', image: iphoneImages['iphone-17-pro-max'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '6.9-inch Super Retina XDR with ProMotion' },
          { label: 'Resolution', value: '2868 x 1320 pixels at 460 ppi' },
          { label: 'Refresh Rate', value: 'ProMotion 1Hz-120Hz' },
          { label: 'Always-On', value: 'Always-On display' },
          { label: 'Brightness', value: '2500 nits peak outdoor' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A19 Pro chip' },
          { label: 'CPU', value: '6-core CPU' },
          { label: 'GPU', value: '6-core GPU' },
          { label: 'Neural Engine', value: '18-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Main', value: '48MP Fusion camera' },
          { label: 'Ultra Wide', value: '48MP Ultra Wide' },
          { label: 'Telephoto', value: '12MP 7x Telephoto' },
          { label: 'Video', value: '8K 30fps, ProRes' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Video Playback', value: 'Up to 40 hours' },
          { label: 'Connector', value: 'USB-C with Thunderbolt 4' },
          { label: 'MagSafe', value: 'Up to 30W wireless' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Material', value: 'Grade 5 titanium' },
          { label: 'Height', value: '163.0 mm' },
          { label: 'Width', value: '77.6 mm' },
          { label: 'Weight', value: '222 grams' },
        ],
      },
    ],
    features: [
      { title: '40-Hour Battery', description: 'Unprecedented battery life.', icon: 'Battery' },
      { title: '6.9" Display', description: 'Largest iPhone display.', icon: 'Monitor' },
      { title: '8K Video', description: 'Professional video recording.', icon: 'Video' },
      { title: '2TB Storage', description: 'Most storage ever in iPhone.', icon: 'Database' },
    ],
    whatsInTheBox: ['iPhone 17 Pro Max', 'USB-C Charge Cable (1m)', 'Documentation'],
    isNew: true,
  },
];
