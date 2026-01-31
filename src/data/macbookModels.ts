import type { Product } from './products';

// MacBook model images mapping
const macbookImages = {
  // MacBook Air 13" Series
  'macbook-air-13-m1': '/air13m1.jpg',
  'macbook-air-13-m2': '/air13m2.jpg',
  'macbook-air-13-m3': '/air13m3.jpg',
  'macbook-air-13-m4': '/air13m4.jpg',
  // MacBook Air 15" Series
  'macbook-air-15-m2': '/air15m2.jpg',
  'macbook-air-15-m4': '/air15m4.jpg',
  'macbook-air-15-m5': '/air15m5.jpg',
  // MacBook Pro 13" Series
  'macbook-pro-13-m1': '/macbookpro13m1.jpg',
  // MacBook Pro 14" Series
  'macbook-pro-14-m1': '/macbookpro14m1.jpg',
  'macbook-pro-14-m2': '/macbookpro14m2.jpg',
  'macbook-pro-14-m3': '/macbookpro14m3.jpg',
  'macbook-pro-14-m4': '/macbookpro14m4.jpg',
  'macbook-pro-14-m5': '/macbookpro14m5.jpg',
  // MacBook Pro 16" Series
  'macbook-pro-16-m1': '/macbookpro16m1.jpg',
  'macbook-pro-16-m2': '/macbookpro16m2.jpg',
  'macbook-pro-16-m3': '/macbookpro16m3.jpg',
  'macbook-pro-16-m4': '/macbookpro16m4.jpg',
  'macbook-pro-16-m5': '/macbookpro16m5.jpg',
};

export const macbookModels: Product[] = [
  // ============================================
  // MacBook Air 13" Series
  // ============================================
  {
    id: 'macbook-air-13-m1',
    name: 'MacBook Air 13" (M1)',
    shortName: 'Air 13" M1',
    tagline: 'Apple\'s thinnest, lightest notebook, completely transformed by M1.',
    description: 'The MacBook Air with M1 chip delivers incredible performance in an impossibly thin design.',
    fullDescription: 'The MacBook Air with M1 chip delivers incredible performance in an impossibly thin design. With up to 18 hours of battery life, the M1 chip makes this MacBook Air faster than ever.',
    category: 'Mac',
    basePrice: 799,
    heroImage: macbookImages['macbook-air-13-m1'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-air-13-m1']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-air-13-m1']] },
      { name: 'Gold', value: '#F5D9C9', images: [macbookImages['macbook-air-13-m1']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'macbook-air-13-m1-silver-256', name: 'MacBook Air 13" M1 256GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: macbookImages['macbook-air-13-m1'] },
      { id: 'macbook-air-13-m1-silver-512', name: 'MacBook Air 13" M1 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 999, availability: 'in-stock', image: macbookImages['macbook-air-13-m1'] },
      { id: 'macbook-air-13-m1-spacegray-256', name: 'MacBook Air 13" M1 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: macbookImages['macbook-air-13-m1'] },
      { id: 'macbook-air-13-m1-gold-256', name: 'MacBook Air 13" M1 256GB Gold', color: { name: 'Gold', value: '#F5D9C9' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: macbookImages['macbook-air-13-m1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13.3-inch Retina display' },
          { label: 'Resolution', value: '2560 x 1600 native resolution' },
          { label: 'Brightness', value: '400 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M1 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'GPU', value: '7-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '8GB (configurable to 16GB)' },
          { label: 'Storage', value: '256GB SSD (up to 2TB)' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Power Adapter', value: '30W USB-C Power Adapter' },
        ],
      },
      {
        category: 'Ports',
        items: [
          { label: 'Thunderbolt', value: '2x Thunderbolt/USB 4 ports' },
          { label: 'Audio', value: '3.5mm headphone jack' },
        ],
      },
    ],
    features: [
      { title: 'M1 Chip', description: 'Apple\'s first chip designed specifically for Mac.', icon: 'Cpu' },
      { title: 'Fanless Design', description: 'Runs completely silent with no fan noise.', icon: 'Wind' },
      { title: '18-Hour Battery', description: 'The longest battery life ever in a MacBook Air.', icon: 'Battery' },
      { title: 'Touch ID', description: 'Secure authentication right at your fingertips.', icon: 'Fingerprint' },
    ],
    whatsInTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2m)'],
  },

  {
    id: 'macbook-air-13-m2',
    name: 'MacBook Air 13" (M2)',
    shortName: 'Air 13" M2',
    tagline: 'Supercharged by M2. Strikingly thin design.',
    description: 'MacBook Air with M2 features a completely redesigned body that is strikingly thin.',
    fullDescription: 'MacBook Air with M2 features a completely redesigned body that is strikingly thin, with the power of M2 chip and up to 18 hours of battery life.',
    category: 'Mac',
    basePrice: 999,
    heroImage: macbookImages['macbook-air-13-m2'],
    colors: [
      { name: 'Midnight', value: '#2E3642', images: [macbookImages['macbook-air-13-m2']] },
      { name: 'Starlight', value: '#F5E6D3', images: [macbookImages['macbook-air-13-m2']] },
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-air-13-m2']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-air-13-m2']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'macbook-air-13-m2-midnight-256', name: 'MacBook Air 13" M2 256GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: macbookImages['macbook-air-13-m2'] },
      { id: 'macbook-air-13-m2-midnight-512', name: 'MacBook Air 13" M2 512GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1199, availability: 'in-stock', image: macbookImages['macbook-air-13-m2'] },
      { id: 'macbook-air-13-m2-starlight-256', name: 'MacBook Air 13" M2 256GB Starlight', color: { name: 'Starlight', value: '#F5E6D3' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: macbookImages['macbook-air-13-m2'] },
      { id: 'macbook-air-13-m2-silver-256', name: 'MacBook Air 13" M2 256GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: macbookImages['macbook-air-13-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13.6-inch Liquid Retina display' },
          { label: 'Resolution', value: '2560 x 1664 native resolution' },
          { label: 'Brightness', value: '500 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'GPU', value: '8-core GPU (up to 10-core)' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '8GB (configurable to 24GB)' },
          { label: 'Storage', value: '256GB SSD (up to 2TB)' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Power Adapter', value: '35W Dual USB-C Port Power Adapter' },
          { label: 'MagSafe', value: 'MagSafe 3 charging' },
        ],
      },
      {
        category: 'Ports',
        items: [
          { label: 'Thunderbolt', value: '2x Thunderbolt/USB 4 ports' },
          { label: 'MagSafe', value: 'MagSafe 3 port' },
          { label: 'Audio', value: '3.5mm headphone jack' },
        ],
      },
    ],
    features: [
      { title: 'M2 Chip', description: 'Next generation Apple silicon for incredible performance.', icon: 'Cpu' },
      { title: 'MagSafe Charging', description: 'Easy-to-use magnetic charging connection.', icon: 'Zap' },
      { title: '1080p Camera', description: 'FaceTime HD camera for clearer video calls.', icon: 'Camera' },
      { title: 'Spatial Audio', description: '4-speaker sound system with Spatial Audio.', icon: 'Music' },
    ],
    whatsInTheBox: ['MacBook Air', '35W Dual USB-C Port Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-air-13-m3',
    name: 'MacBook Air 13" (M3)',
    shortName: 'Air 13" M3',
    tagline: 'Lean. Mean. M3 machine.',
    description: 'MacBook Air with M3 is the world\'s best consumer laptop.',
    fullDescription: 'MacBook Air with M3 is the world\'s best consumer laptop. With the blazing-fast M3 chip, support for two external displays, and up to 18 hours of battery life.',
    category: 'Mac',
    basePrice: 1099,
    heroImage: macbookImages['macbook-air-13-m3'],
    isNew: true,
    colors: [
      { name: 'Midnight', value: '#2E3642', images: [macbookImages['macbook-air-13-m3']] },
      { name: 'Starlight', value: '#F5E6D3', images: [macbookImages['macbook-air-13-m3']] },
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-air-13-m3']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-air-13-m3']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'macbook-air-13-m3-midnight-256', name: 'MacBook Air 13" M3 256GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-13-m3'] },
      { id: 'macbook-air-13-m3-midnight-512', name: 'MacBook Air 13" M3 512GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1299, availability: 'in-stock', image: macbookImages['macbook-air-13-m3'] },
      { id: 'macbook-air-13-m3-starlight-256', name: 'MacBook Air 13" M3 256GB Starlight', color: { name: 'Starlight', value: '#F5E6D3' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-13-m3'] },
      { id: 'macbook-air-13-m3-silver-256', name: 'MacBook Air 13" M3 256GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-13-m3'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13.6-inch Liquid Retina display' },
          { label: 'Resolution', value: '2560 x 1664 native resolution' },
          { label: 'Brightness', value: '500 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M3 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '8GB (configurable to 24GB)' },
          { label: 'Storage', value: '256GB SSD (up to 2TB)' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Power Adapter', value: '35W Dual USB-C Port Power Adapter' },
        ],
      },
    ],
    features: [
      { title: 'M3 Chip', description: '3nm technology for incredible performance and efficiency.', icon: 'Cpu' },
      { title: 'Dual Display Support', description: 'Connect up to two external displays.', icon: 'Monitor' },
      { title: 'Wi-Fi 6E', description: 'Faster wireless connectivity than ever.', icon: 'Wifi' },
      { title: 'All-Day Battery', description: 'Up to 18 hours of battery life.', icon: 'Battery' },
    ],
    whatsInTheBox: ['MacBook Air', '35W Dual USB-C Port Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-air-13-m4',
    name: 'MacBook Air 13" (M4)',
    shortName: 'Air 13" M4',
    tagline: 'Built for Apple Intelligence.',
    description: 'MacBook Air with M4 is built for Apple Intelligence.',
    fullDescription: 'MacBook Air with M4 is built for Apple Intelligence. The most capable MacBook Air ever, with breakthrough performance, all-day battery life, and a portable design.',
    category: 'Mac',
    basePrice: 1099,
    heroImage: macbookImages['macbook-air-13-m4'],
    isNew: true,
    colors: [
      { name: 'Midnight', value: '#2E3642', images: [macbookImages['macbook-air-13-m4']] },
      { name: 'Starlight', value: '#F5E6D3', images: [macbookImages['macbook-air-13-m4']] },
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-air-13-m4']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-air-13-m4']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'macbook-air-13-m4-midnight-256', name: 'MacBook Air 13" M4 256GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-13-m4'] },
      { id: 'macbook-air-13-m4-midnight-512', name: 'MacBook Air 13" M4 512GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1299, availability: 'in-stock', image: macbookImages['macbook-air-13-m4'] },
      { id: 'macbook-air-13-m4-starlight-256', name: 'MacBook Air 13" M4 256GB Starlight', color: { name: 'Starlight', value: '#F5E6D3' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-13-m4'] },
      { id: 'macbook-air-13-m4-silver-256', name: 'MacBook Air 13" M4 256GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-13-m4'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13.6-inch Liquid Retina display' },
          { label: 'Resolution', value: '2560 x 1664 native resolution' },
          { label: 'Brightness', value: '500 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M4 chip' },
          { label: 'CPU', value: '10-core CPU (4 performance + 6 efficiency)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '16GB (configurable to 32GB)' },
          { label: 'Storage', value: '256GB SSD (up to 2TB)' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Power Adapter', value: '35W Dual USB-C Port Power Adapter' },
        ],
      },
    ],
    features: [
      { title: 'Apple Intelligence', description: 'Built-in AI capabilities for enhanced productivity.', icon: 'Brain' },
      { title: 'M4 Chip', description: 'Next-gen performance with incredible efficiency.', icon: 'Cpu' },
      { title: '12MP Camera', description: 'Center Stage camera for better video calls.', icon: 'Camera' },
      { title: 'Thunderbolt 4', description: 'Faster data transfer and connectivity.', icon: 'Zap' },
    ],
    whatsInTheBox: ['MacBook Air', '35W Dual USB-C Port Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  // ============================================
  // MacBook Air 15" Series
  // ============================================
  {
    id: 'macbook-air-15-m2',
    name: 'MacBook Air 15" (M2)',
    shortName: 'Air 15" M2',
    tagline: 'Impressively big. Impossibly thin.',
    description: 'The 15-inch MacBook Air makes room for more of what you love.',
    fullDescription: 'The 15-inch MacBook Air makes room for more of what you love with a spacious 15.3-inch Liquid Retina display. With M2 chip and up to 18 hours of battery.',
    category: 'Mac',
    basePrice: 1099,
    heroImage: macbookImages['macbook-air-15-m2'],
    colors: [
      { name: 'Midnight', value: '#2E3642', images: [macbookImages['macbook-air-15-m2']] },
      { name: 'Starlight', value: '#F5E6D3', images: [macbookImages['macbook-air-15-m2']] },
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-air-15-m2']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-air-15-m2']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'macbook-air-15-m2-midnight-256', name: 'MacBook Air 15" M2 256GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-15-m2'] },
      { id: 'macbook-air-15-m2-midnight-512', name: 'MacBook Air 15" M2 512GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1299, availability: 'in-stock', image: macbookImages['macbook-air-15-m2'] },
      { id: 'macbook-air-15-m2-starlight-256', name: 'MacBook Air 15" M2 256GB Starlight', color: { name: 'Starlight', value: '#F5E6D3' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-15-m2'] },
      { id: 'macbook-air-15-m2-silver-256', name: 'MacBook Air 15" M2 256GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-air-15-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '15.3-inch Liquid Retina display' },
          { label: 'Resolution', value: '2880 x 1864 native resolution' },
          { label: 'Brightness', value: '500 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '8GB (configurable to 24GB)' },
          { label: 'Storage', value: '256GB SSD (up to 2TB)' },
        ],
      },
      {
        category: 'Audio',
        items: [
          { label: 'Speakers', value: '6-speaker sound system with Spatial Audio' },
          { label: 'Microphone', value: '3-mic array with directional beamforming' },
        ],
      },
    ],
    features: [
      { title: 'Bigger Display', description: '15.3-inch Liquid Retina display for immersive viewing.', icon: 'Monitor' },
      { title: '6-Speaker System', description: 'Powerful audio with Spatial Audio support.', icon: 'Music' },
      { title: 'M2 Performance', description: 'Fast and efficient Apple silicon.', icon: 'Cpu' },
      { title: 'All-Day Battery', description: 'Up to 18 hours of battery life.', icon: 'Battery' },
    ],
    whatsInTheBox: ['MacBook Air', '35W Dual USB-C Port Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-air-15-m4',
    name: 'MacBook Air 15" (M4)',
    shortName: 'Air 15" M4',
    tagline: 'Big. Beautiful. Brilliant.',
    description: 'The 15-inch MacBook Air with M4 gives you a spacious display and Apple Intelligence.',
    fullDescription: 'The 15-inch MacBook Air with M4 gives you a spacious display, Apple Intelligence, and incredible all-day battery life in a beautifully thin design.',
    category: 'Mac',
    basePrice: 1299,
    heroImage: macbookImages['macbook-air-15-m4'],
    isNew: true,
    colors: [
      { name: 'Midnight', value: '#2E3642', images: [macbookImages['macbook-air-15-m4']] },
      { name: 'Starlight', value: '#F5E6D3', images: [macbookImages['macbook-air-15-m4']] },
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-air-15-m4']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-air-15-m4']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'macbook-air-15-m4-midnight-256', name: 'MacBook Air 15" M4 256GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1299, availability: 'in-stock', image: macbookImages['macbook-air-15-m4'] },
      { id: 'macbook-air-15-m4-midnight-512', name: 'MacBook Air 15" M4 512GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1499, availability: 'in-stock', image: macbookImages['macbook-air-15-m4'] },
      { id: 'macbook-air-15-m4-starlight-256', name: 'MacBook Air 15" M4 256GB Starlight', color: { name: 'Starlight', value: '#F5E6D3' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1299, availability: 'in-stock', image: macbookImages['macbook-air-15-m4'] },
      { id: 'macbook-air-15-m4-silver-256', name: 'MacBook Air 15" M4 256GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1299, availability: 'in-stock', image: macbookImages['macbook-air-15-m4'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '15.3-inch Liquid Retina display' },
          { label: 'Resolution', value: '2880 x 1864 native resolution' },
          { label: 'Brightness', value: '500 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M4 chip' },
          { label: 'CPU', value: '10-core CPU (4 performance + 6 efficiency)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '16GB (configurable to 32GB)' },
          { label: 'Storage', value: '256GB SSD (up to 2TB)' },
        ],
      },
    ],
    features: [
      { title: 'Apple Intelligence', description: 'AI-powered features for enhanced productivity.', icon: 'Brain' },
      { title: 'Bigger Display', description: '15.3-inch Liquid Retina for immersive viewing.', icon: 'Monitor' },
      { title: 'M4 Performance', description: 'Next-gen Apple silicon performance.', icon: 'Cpu' },
      { title: '12MP Camera', description: 'Center Stage camera for better video calls.', icon: 'Camera' },
    ],
    whatsInTheBox: ['MacBook Air', '35W Dual USB-C Port Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-air-15-m5',
    name: 'MacBook Air 15" (M5)',
    shortName: 'Air 15" M5',
    tagline: 'The ultimate portable powerhouse.',
    description: 'MacBook Air 15" with M5 delivers unprecedented performance in the thinnest notebook.',
    fullDescription: 'MacBook Air 15" with M5 delivers unprecedented performance in the thinnest notebook. Apple Intelligence, all-day battery, and stunning display.',
    category: 'Mac',
    basePrice: 1499,
    heroImage: macbookImages['macbook-air-15-m5'],
    isNew: true,
    colors: [
      { name: 'Midnight', value: '#2E3642', images: [macbookImages['macbook-air-15-m5']] },
      { name: 'Starlight', value: '#F5E6D3', images: [macbookImages['macbook-air-15-m5']] },
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-air-15-m5']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-air-15-m5-midnight-512', name: 'MacBook Air 15" M5 512GB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1499, availability: 'in-stock', image: macbookImages['macbook-air-15-m5'] },
      { id: 'macbook-air-15-m5-midnight-1tb', name: 'MacBook Air 15" M5 1TB Midnight', color: { name: 'Midnight', value: '#2E3642' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 1699, availability: 'in-stock', image: macbookImages['macbook-air-15-m5'] },
      { id: 'macbook-air-15-m5-silver-512', name: 'MacBook Air 15" M5 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1499, availability: 'in-stock', image: macbookImages['macbook-air-15-m5'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '15.3-inch Liquid Retina display' },
          { label: 'Resolution', value: '2880 x 1864 native resolution' },
          { label: 'Brightness', value: '600 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M5 chip' },
          { label: 'CPU', value: '12-core CPU (4 performance + 8 efficiency)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Memory & Storage',
        items: [
          { label: 'Unified Memory', value: '24GB (configurable to 32GB)' },
          { label: 'Storage', value: '512GB SSD (up to 2TB)' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 20 hours' },
          { label: 'Power Adapter', value: '70W USB-C Power Adapter' },
        ],
      },
    ],
    features: [
      { title: 'M5 Chip', description: '2nm technology for breakthrough performance.', icon: 'Cpu' },
      { title: 'Enhanced AI', description: 'Advanced Apple Intelligence capabilities.', icon: 'Brain' },
      { title: '20-Hour Battery', description: 'The longest battery life in a MacBook Air.', icon: 'Battery' },
      { title: 'Wi-Fi 7', description: 'Next-gen wireless for blazing fast connectivity.', icon: 'Wifi' },
    ],
    whatsInTheBox: ['MacBook Air', '70W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  // ============================================
  // MacBook Pro 13" Series
  // ============================================
  {
    id: 'macbook-pro-13-m1',
    name: 'MacBook Pro 13" (M1)',
    shortName: 'Pro 13" M1',
    tagline: 'Apple M1 chip. A new level of performance.',
    description: 'The MacBook Pro 13-inch with M1 delivers incredible CPU and GPU performance.',
    fullDescription: 'The MacBook Pro 13-inch with M1 delivers incredible CPU and GPU performance, up to 20 hours of battery life, and the brilliant Retina display.',
    category: 'Mac',
    basePrice: 1099,
    heroImage: macbookImages['macbook-pro-13-m1'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-13-m1']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-pro-13-m1']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'macbook-pro-13-m1-silver-256', name: 'MacBook Pro 13" M1 256GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-pro-13-m1'] },
      { id: 'macbook-pro-13-m1-silver-512', name: 'MacBook Pro 13" M1 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1299, availability: 'in-stock', image: macbookImages['macbook-pro-13-m1'] },
      { id: 'macbook-pro-13-m1-spacegray-256', name: 'MacBook Pro 13" M1 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: macbookImages['macbook-pro-13-m1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13.3-inch Retina display' },
          { label: 'Resolution', value: '2560 x 1600 native resolution' },
          { label: 'Brightness', value: '500 nits' },
          { label: 'Color', value: 'P3 wide color, True Tone' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M1 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'GPU', value: '8-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 20 hours' },
          { label: 'Power Adapter', value: '61W USB-C Power Adapter' },
        ],
      },
    ],
    features: [
      { title: 'M1 Chip', description: 'Apple\'s first chip designed for Mac.', icon: 'Cpu' },
      { title: '20-Hour Battery', description: 'The longest battery life ever in a Mac.', icon: 'Battery' },
      { title: 'Active Cooling', description: 'Fan system for sustained performance.', icon: 'Wind' },
      { title: 'Touch Bar', description: 'Touch Bar with Touch ID.', icon: 'Fingerprint' },
    ],
    whatsInTheBox: ['MacBook Pro', '61W USB-C Power Adapter', 'USB-C Charge Cable (2m)'],
  },

  // ============================================
  // MacBook Pro 14" Series
  // ============================================
  {
    id: 'macbook-pro-14-m1-pro',
    name: 'MacBook Pro 14" (M1 Pro/Max)',
    shortName: 'Pro 14" M1 Pro',
    tagline: 'Supercharged for pros.',
    description: 'The most powerful MacBook Pro ever with M1 Pro and M1 Max chips.',
    fullDescription: 'The most powerful MacBook Pro ever. M1 Pro and M1 Max deliver exceptional performance for demanding workflows.',
    category: 'Mac',
    basePrice: 1999,
    heroImage: macbookImages['macbook-pro-14-m1'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-14-m1']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-pro-14-m1']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-14-m1pro-silver-512', name: 'MacBook Pro 14" M1 Pro 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1999, availability: 'in-stock', image: macbookImages['macbook-pro-14-m1'] },
      { id: 'macbook-pro-14-m1pro-silver-1tb', name: 'MacBook Pro 14" M1 Pro 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 2199, availability: 'in-stock', image: macbookImages['macbook-pro-14-m1'] },
      { id: 'macbook-pro-14-m1pro-spacegray-512', name: 'MacBook Pro 14" M1 Pro 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1999, availability: 'in-stock', image: macbookImages['macbook-pro-14-m1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '14.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3024 x 1964 native resolution' },
          { label: 'Brightness', value: '1600 nits peak (HDR), 1000 nits sustained' },
          { label: 'Refresh Rate', value: 'ProMotion up to 120Hz' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M1 Pro or M1 Max chip' },
          { label: 'CPU', value: 'Up to 10-core CPU' },
          { label: 'GPU', value: 'Up to 32-core GPU (M1 Max)' },
          { label: 'Memory', value: 'Up to 64GB unified memory' },
        ],
      },
      {
        category: 'Ports',
        items: [
          { label: 'Thunderbolt', value: '3x Thunderbolt 4 ports' },
          { label: 'HDMI', value: 'HDMI port' },
          { label: 'SD Card', value: 'SDXC card slot' },
          { label: 'MagSafe', value: 'MagSafe 3 port' },
        ],
      },
    ],
    features: [
      { title: 'M1 Pro/Max', description: 'Pro chips for pro workflows.', icon: 'Cpu' },
      { title: 'ProMotion', description: '120Hz adaptive refresh rate.', icon: 'Monitor' },
      { title: 'XDR Display', description: 'Extreme Dynamic Range for stunning visuals.', icon: 'Sparkles' },
      { title: 'Full Connectivity', description: 'HDMI, SD card, and more.', icon: 'Plug' },
    ],
    whatsInTheBox: ['MacBook Pro', '96W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-14-m2-pro',
    name: 'MacBook Pro 14" (M2 Pro/Max)',
    shortName: 'Pro 14" M2 Pro',
    tagline: 'Pro to the Max.',
    description: 'MacBook Pro 14" with M2 Pro and M2 Max delivers even more performance.',
    fullDescription: 'MacBook Pro 14" with M2 Pro and M2 Max delivers even more performance for demanding pro workflows with next-gen Apple silicon.',
    category: 'Mac',
    basePrice: 1999,
    heroImage: macbookImages['macbook-pro-14-m2'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-14-m2']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-pro-14-m2']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-14-m2pro-silver-512', name: 'MacBook Pro 14" M2 Pro 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1999, availability: 'in-stock', image: macbookImages['macbook-pro-14-m2'] },
      { id: 'macbook-pro-14-m2pro-silver-1tb', name: 'MacBook Pro 14" M2 Pro 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 2199, availability: 'in-stock', image: macbookImages['macbook-pro-14-m2'] },
      { id: 'macbook-pro-14-m2pro-spacegray-512', name: 'MacBook Pro 14" M2 Pro 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1999, availability: 'in-stock', image: macbookImages['macbook-pro-14-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '14.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3024 x 1964 native resolution' },
          { label: 'Brightness', value: '1600 nits peak (HDR)' },
          { label: 'Refresh Rate', value: 'ProMotion up to 120Hz' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 Pro or M2 Max chip' },
          { label: 'CPU', value: 'Up to 12-core CPU' },
          { label: 'GPU', value: 'Up to 38-core GPU (M2 Max)' },
          { label: 'Memory', value: 'Up to 96GB unified memory' },
        ],
      },
    ],
    features: [
      { title: 'M2 Pro/Max', description: 'Next-gen pro chips for ultimate performance.', icon: 'Cpu' },
      { title: '96GB Memory', description: 'Up to 96GB unified memory with M2 Max.', icon: 'HardDrive' },
      { title: 'Wi-Fi 6E', description: 'Faster wireless connectivity.', icon: 'Wifi' },
      { title: 'HDMI 2.1', description: 'Support for 8K displays.', icon: 'Monitor' },
    ],
    whatsInTheBox: ['MacBook Pro', '96W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-14-m3',
    name: 'MacBook Pro 14" (M3/Pro/Max)',
    shortName: 'Pro 14" M3',
    tagline: 'The most advanced Mac laptops.',
    description: 'MacBook Pro 14" powered by M3, M3 Pro, or M3 Max delivers unprecedented performance.',
    fullDescription: 'MacBook Pro 14" powered by M3, M3 Pro, or M3 Max delivers unprecedented performance with the industry-leading 3nm chip.',
    category: 'Mac',
    basePrice: 1599,
    heroImage: macbookImages['macbook-pro-14-m3'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-14-m3']] },
      { name: 'Space Black', value: '#1D1D1F', images: [macbookImages['macbook-pro-14-m3']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-14-m3-silver-512', name: 'MacBook Pro 14" M3 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1599, availability: 'in-stock', image: macbookImages['macbook-pro-14-m3'] },
      { id: 'macbook-pro-14-m3-silver-1tb', name: 'MacBook Pro 14" M3 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 1799, availability: 'in-stock', image: macbookImages['macbook-pro-14-m3'] },
      { id: 'macbook-pro-14-m3-spaceblack-512', name: 'MacBook Pro 14" M3 512GB Space Black', color: { name: 'Space Black', value: '#1D1D1F' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1599, availability: 'in-stock', image: macbookImages['macbook-pro-14-m3'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '14.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3024 x 1964 native resolution' },
          { label: 'Brightness', value: '1600 nits peak (HDR)' },
          { label: 'Refresh Rate', value: 'ProMotion up to 120Hz' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M3, M3 Pro, or M3 Max chip' },
          { label: 'CPU', value: 'Up to 16-core CPU' },
          { label: 'GPU', value: 'Up to 40-core GPU (M3 Max)' },
          { label: 'Memory', value: 'Up to 128GB unified memory' },
        ],
      },
    ],
    features: [
      { title: '3nm Technology', description: 'Industry-leading chip process.', icon: 'Cpu' },
      { title: 'Space Black', description: 'New stunning dark finish.', icon: 'Palette' },
      { title: 'Ray Tracing', description: 'Hardware-accelerated ray tracing.', icon: 'Sparkles' },
      { title: '128GB Memory', description: 'Up to 128GB with M3 Max.', icon: 'HardDrive' },
    ],
    whatsInTheBox: ['MacBook Pro', '70W/96W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-14-m4',
    name: 'MacBook Pro 14" (M4/Pro/Max)',
    shortName: 'Pro 14" M4',
    tagline: 'Built for Apple Intelligence. Designed for pros.',
    description: 'MacBook Pro 14" with M4 chips delivers breakthrough performance for Apple Intelligence.',
    fullDescription: 'MacBook Pro 14" with M4 chips delivers breakthrough performance for Apple Intelligence and the most demanding pro workflows.',
    category: 'Mac',
    basePrice: 1599,
    heroImage: macbookImages['macbook-pro-14-m4'],
    isNew: true,
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-14-m4']] },
      { name: 'Space Black', value: '#1D1D1F', images: [macbookImages['macbook-pro-14-m4']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-14-m4-silver-512', name: 'MacBook Pro 14" M4 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1599, availability: 'in-stock', image: macbookImages['macbook-pro-14-m4'] },
      { id: 'macbook-pro-14-m4-silver-1tb', name: 'MacBook Pro 14" M4 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 1799, availability: 'in-stock', image: macbookImages['macbook-pro-14-m4'] },
      { id: 'macbook-pro-14-m4-spaceblack-512', name: 'MacBook Pro 14" M4 512GB Space Black', color: { name: 'Space Black', value: '#1D1D1F' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1599, availability: 'in-stock', image: macbookImages['macbook-pro-14-m4'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '14.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3024 x 1964 native resolution' },
          { label: 'Brightness', value: '1600 nits peak (HDR)' },
          { label: 'Option', value: 'Nano-texture display available' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M4, M4 Pro, or M4 Max chip' },
          { label: 'CPU', value: 'Up to 16-core CPU' },
          { label: 'GPU', value: 'Up to 40-core GPU' },
          { label: 'Memory', value: 'Up to 128GB unified memory' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 24 hours' },
        ],
      },
    ],
    features: [
      { title: 'Apple Intelligence', description: 'Built-in AI for enhanced workflows.', icon: 'Brain' },
      { title: 'Thunderbolt 5', description: 'Fastest connectivity ever.', icon: 'Zap' },
      { title: '12MP Camera', description: 'Center Stage camera.', icon: 'Camera' },
      { title: '24-Hour Battery', description: 'All-day and into the night.', icon: 'Battery' },
    ],
    whatsInTheBox: ['MacBook Pro', '70W/96W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-14-m5',
    name: 'MacBook Pro 14" (M5/Pro/Max)',
    shortName: 'Pro 14" M5',
    tagline: 'The future of pro computing.',
    description: 'MacBook Pro 14" with M5 chips takes performance to unprecedented levels.',
    fullDescription: 'MacBook Pro 14" with M5 chips takes performance to unprecedented levels. The ultimate machine for professionals.',
    category: 'Mac',
    basePrice: 1799,
    heroImage: macbookImages['macbook-pro-14-m5'],
    isNew: true,
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-14-m5']] },
      { name: 'Space Black', value: '#1D1D1F', images: [macbookImages['macbook-pro-14-m5']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-14-m5-silver-512', name: 'MacBook Pro 14" M5 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1799, availability: 'in-stock', image: macbookImages['macbook-pro-14-m5'] },
      { id: 'macbook-pro-14-m5-silver-1tb', name: 'MacBook Pro 14" M5 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 1999, availability: 'in-stock', image: macbookImages['macbook-pro-14-m5'] },
      { id: 'macbook-pro-14-m5-spaceblack-512', name: 'MacBook Pro 14" M5 512GB Space Black', color: { name: 'Space Black', value: '#1D1D1F' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 1799, availability: 'in-stock', image: macbookImages['macbook-pro-14-m5'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '14.2-inch Liquid Retina XDR display' },
          { label: 'Brightness', value: '2000 nits peak' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M5, M5 Pro, or M5 Max chip' },
          { label: 'Technology', value: '2nm process' },
          { label: 'Memory', value: 'Up to 192GB unified memory' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 26 hours' },
        ],
      },
    ],
    features: [
      { title: '2nm Chip', description: 'Cutting-edge process technology.', icon: 'Cpu' },
      { title: '192GB Memory', description: 'Unprecedented memory capacity.', icon: 'HardDrive' },
      { title: 'Wi-Fi 7', description: 'Next-gen wireless speeds.', icon: 'Wifi' },
      { title: '26-Hour Battery', description: 'Longest ever in a MacBook Pro.', icon: 'Battery' },
    ],
    whatsInTheBox: ['MacBook Pro', '70W/140W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  // ============================================
  // MacBook Pro 16" Series
  // ============================================
  {
    id: 'macbook-pro-16-m1-pro',
    name: 'MacBook Pro 16" (M1 Pro/Max)',
    shortName: 'Pro 16" M1 Pro',
    tagline: 'The ultimate pro notebook.',
    description: 'The 16-inch MacBook Pro with M1 Pro and M1 Max is the most powerful MacBook ever.',
    fullDescription: 'The 16-inch MacBook Pro with M1 Pro and M1 Max is the most powerful MacBook ever for professionals who need maximum performance.',
    category: 'Mac',
    basePrice: 2499,
    heroImage: macbookImages['macbook-pro-16-m1'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-16-m1']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-pro-16-m1']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-16-m1pro-silver-512', name: 'MacBook Pro 16" M1 Pro 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m1'] },
      { id: 'macbook-pro-16-m1pro-silver-1tb', name: 'MacBook Pro 16" M1 Pro 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 2699, availability: 'in-stock', image: macbookImages['macbook-pro-16-m1'] },
      { id: 'macbook-pro-16-m1pro-spacegray-512', name: 'MacBook Pro 16" M1 Pro 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '16.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3456 x 2234 native resolution' },
          { label: 'Brightness', value: '1600 nits peak (HDR)' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M1 Pro or M1 Max chip' },
          { label: 'CPU', value: 'Up to 10-core CPU' },
          { label: 'GPU', value: 'Up to 32-core GPU' },
          { label: 'Memory', value: 'Up to 64GB unified memory' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 21 hours' },
        ],
      },
    ],
    features: [
      { title: 'Massive Display', description: '16.2-inch Liquid Retina XDR.', icon: 'Monitor' },
      { title: '21-Hour Battery', description: 'Incredible all-day battery life.', icon: 'Battery' },
      { title: 'M1 Pro/Max', description: 'Pro power for pro workflows.', icon: 'Cpu' },
      { title: '6-Speaker Audio', description: 'Immersive sound system.', icon: 'Music' },
    ],
    whatsInTheBox: ['MacBook Pro', '140W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-16-m2-pro',
    name: 'MacBook Pro 16" (M2 Pro/Max)',
    shortName: 'Pro 16" M2 Pro',
    tagline: 'Beastly powerful. Beautifully capable.',
    description: 'The 16-inch MacBook Pro with M2 Pro and M2 Max delivers extraordinary performance.',
    fullDescription: 'The 16-inch MacBook Pro with M2 Pro and M2 Max delivers extraordinary performance in an incredibly portable design.',
    category: 'Mac',
    basePrice: 2499,
    heroImage: macbookImages['macbook-pro-16-m2'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-16-m2']] },
      { name: 'Space Gray', value: '#535150', images: [macbookImages['macbook-pro-16-m2']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-16-m2pro-silver-512', name: 'MacBook Pro 16" M2 Pro 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m2'] },
      { id: 'macbook-pro-16-m2pro-silver-1tb', name: 'MacBook Pro 16" M2 Pro 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 2699, availability: 'in-stock', image: macbookImages['macbook-pro-16-m2'] },
      { id: 'macbook-pro-16-m2pro-spacegray-512', name: 'MacBook Pro 16" M2 Pro 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '16.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3456 x 2234 native resolution' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 Pro or M2 Max chip' },
          { label: 'CPU', value: 'Up to 12-core CPU' },
          { label: 'GPU', value: 'Up to 38-core GPU' },
          { label: 'Memory', value: 'Up to 96GB unified memory' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 22 hours' },
        ],
      },
    ],
    features: [
      { title: 'M2 Pro/Max', description: 'Next-gen pro performance.', icon: 'Cpu' },
      { title: '22-Hour Battery', description: 'Even longer battery life.', icon: 'Battery' },
      { title: '96GB Memory', description: 'Massive unified memory.', icon: 'HardDrive' },
      { title: 'Wi-Fi 6E', description: 'Faster wireless connectivity.', icon: 'Wifi' },
    ],
    whatsInTheBox: ['MacBook Pro', '140W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-16-m3',
    name: 'MacBook Pro 16" (M3 Pro/Max)',
    shortName: 'Pro 16" M3',
    tagline: 'Mind-blowing. Head-turning.',
    description: 'The 16-inch MacBook Pro with M3 Pro and M3 Max pushes the limits of performance.',
    fullDescription: 'The 16-inch MacBook Pro with M3 Pro and M3 Max pushes the limits of performance with the revolutionary 3nm chip architecture.',
    category: 'Mac',
    basePrice: 2499,
    heroImage: macbookImages['macbook-pro-16-m3'],
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-16-m3']] },
      { name: 'Space Black', value: '#1D1D1F', images: [macbookImages['macbook-pro-16-m3']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-16-m3pro-silver-512', name: 'MacBook Pro 16" M3 Pro 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m3'] },
      { id: 'macbook-pro-16-m3pro-silver-1tb', name: 'MacBook Pro 16" M3 Pro 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 2699, availability: 'in-stock', image: macbookImages['macbook-pro-16-m3'] },
      { id: 'macbook-pro-16-m3pro-spaceblack-512', name: 'MacBook Pro 16" M3 Pro 512GB Space Black', color: { name: 'Space Black', value: '#1D1D1F' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m3'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '16.2-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '3456 x 2234 native resolution' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M3 Pro or M3 Max chip' },
          { label: 'Technology', value: '3nm process' },
          { label: 'Memory', value: 'Up to 128GB unified memory' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 22 hours' },
        ],
      },
    ],
    features: [
      { title: '3nm Technology', description: 'Revolutionary chip architecture.', icon: 'Cpu' },
      { title: 'Space Black', description: 'Stunning new dark finish.', icon: 'Palette' },
      { title: '128GB Memory', description: 'Professional-grade memory.', icon: 'HardDrive' },
      { title: 'Ray Tracing', description: 'Hardware-accelerated graphics.', icon: 'Sparkles' },
    ],
    whatsInTheBox: ['MacBook Pro', '140W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-16-m4',
    name: 'MacBook Pro 16" (M4 Pro/Max)',
    shortName: 'Pro 16" M4',
    tagline: 'The world\'s best pro laptop. Now with Apple Intelligence.',
    description: 'The 16-inch MacBook Pro with M4 Pro and M4 Max is the most powerful Mac laptop ever.',
    fullDescription: 'The 16-inch MacBook Pro with M4 Pro and M4 Max is the most powerful and capable Mac laptop ever built, designed for Apple Intelligence.',
    category: 'Mac',
    basePrice: 2499,
    heroImage: macbookImages['macbook-pro-16-m4'],
    isNew: true,
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-16-m4']] },
      { name: 'Space Black', value: '#1D1D1F', images: [macbookImages['macbook-pro-16-m4']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-16-m4pro-silver-512', name: 'MacBook Pro 16" M4 Pro 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m4'] },
      { id: 'macbook-pro-16-m4pro-silver-1tb', name: 'MacBook Pro 16" M4 Pro 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 2699, availability: 'in-stock', image: macbookImages['macbook-pro-16-m4'] },
      { id: 'macbook-pro-16-m4pro-spaceblack-512', name: 'MacBook Pro 16" M4 Pro 512GB Space Black', color: { name: 'Space Black', value: '#1D1D1F' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2499, availability: 'in-stock', image: macbookImages['macbook-pro-16-m4'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '16.2-inch Liquid Retina XDR display' },
          { label: 'Option', value: 'Nano-texture display available' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M4 Pro or M4 Max chip' },
          { label: 'Memory', value: 'Up to 128GB unified memory' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 24 hours' },
        ],
      },
    ],
    features: [
      { title: 'Apple Intelligence', description: 'Built-in AI capabilities.', icon: 'Brain' },
      { title: 'Thunderbolt 5', description: 'Lightning-fast connectivity.', icon: 'Zap' },
      { title: '24-Hour Battery', description: 'All-day and all-night power.', icon: 'Battery' },
      { title: '12MP Camera', description: 'Center Stage for video calls.', icon: 'Camera' },
    ],
    whatsInTheBox: ['MacBook Pro', '140W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },

  {
    id: 'macbook-pro-16-m5',
    name: 'MacBook Pro 16" (M5 Pro/Max)',
    shortName: 'Pro 16" M5',
    tagline: 'Unmatched power. Unlimited possibilities.',
    description: 'The 16-inch MacBook Pro with M5 Pro and M5 Max redefines what a laptop can do.',
    fullDescription: 'The 16-inch MacBook Pro with M5 Pro and M5 Max redefines what a laptop can do. The most powerful Mac ever created.',
    category: 'Mac',
    basePrice: 2799,
    heroImage: macbookImages['macbook-pro-16-m5'],
    isNew: true,
    colors: [
      { name: 'Silver', value: '#E3E4E5', images: [macbookImages['macbook-pro-16-m5']] },
      { name: 'Space Black', value: '#1D1D1F', images: [macbookImages['macbook-pro-16-m5']] },
    ],
    storageOptions: [
      { size: '512GB', priceAdjustment: 0 },
      { size: '1TB', priceAdjustment: 200 },
      { size: '2TB', priceAdjustment: 600 },
    ],
    variants: [
      { id: 'macbook-pro-16-m5pro-silver-512', name: 'MacBook Pro 16" M5 Pro 512GB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2799, availability: 'in-stock', image: macbookImages['macbook-pro-16-m5'] },
      { id: 'macbook-pro-16-m5pro-silver-1tb', name: 'MacBook Pro 16" M5 Pro 1TB Silver', color: { name: 'Silver', value: '#E3E4E5' }, storage: { size: '1TB', priceAdjustment: 200 }, price: 2999, availability: 'in-stock', image: macbookImages['macbook-pro-16-m5'] },
      { id: 'macbook-pro-16-m5pro-spaceblack-512', name: 'MacBook Pro 16" M5 Pro 512GB Space Black', color: { name: 'Space Black', value: '#1D1D1F' }, storage: { size: '512GB', priceAdjustment: 0 }, price: 2799, availability: 'in-stock', image: macbookImages['macbook-pro-16-m5'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '16.2-inch Liquid Retina XDR display' },
          { label: 'Brightness', value: '2000 nits peak' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M5 Pro or M5 Max chip' },
          { label: 'Technology', value: '2nm process' },
          { label: 'Memory', value: 'Up to 192GB unified memory' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 28 hours' },
        ],
      },
    ],
    features: [
      { title: '2nm Technology', description: 'Most advanced chip ever.', icon: 'Cpu' },
      { title: '192GB Memory', description: 'Unprecedented capacity.', icon: 'HardDrive' },
      { title: '28-Hour Battery', description: 'Longest battery ever in a Mac.', icon: 'Battery' },
      { title: 'Wi-Fi 7', description: 'Blazing fast wireless.', icon: 'Wifi' },
    ],
    whatsInTheBox: ['MacBook Pro', '140W USB-C Power Adapter', 'USB-C to MagSafe 3 Cable (2m)'],
  },
];
