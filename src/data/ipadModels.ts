import type { Product } from './products';

// iPad model images mapping
const ipadImages = {
  // iPad (standard)
  'ipad-10': '/ipad10.jpg',
  'ipad-11': '/ipad11.jpg',
  // iPad mini
  'ipad-mini-6': '/ipadmini6.jpg',
  'ipad-mini-7': '/ipadmini7.jpg',
  // iPad Air
  'ipad-air-109-m1': '/ipadair109m1.jpg',
  'ipad-air-11-m2': '/ipadair11m2.jpg',
  'ipad-air-13-m2': '/ipadair13m2.jpg',
  // iPad Pro 11"
  'ipad-pro-11-m1': '/ipadpro11m1.jpg',
  'ipad-pro-11-m2': '/ipadpro11m2.jpg',
  'ipad-pro-11-m4': '/ipadpro11m4.jpg',
  // iPad Pro 12.9"/13"
  'ipad-pro-129-m1': '/ipadpro129m1.jpg',
  'ipad-pro-129-m2': '/ipadpro129m2.jpg',
  'ipad-pro-13-m4': '/ipadpro13m4.jpg',
};

export const ipadModels: Product[] = [
  // ============================================
  // iPad (Standard Line)
  // ============================================
  {
    id: 'ipad-10th-gen',
    name: 'iPad (10th generation)',
    shortName: 'iPad 10th Gen',
    tagline: 'Lovable. Drawable. Magical.',
    description: 'A colorful iPad with an all-screen design, the powerful A14 Bionic chip, and a 10.9-inch Liquid Retina display.',
    fullDescription: 'The iPad (10th generation) features an all-screen design with a 10.9-inch Liquid Retina display, the A14 Bionic chip for smooth performance, a landscape 12MP Ultra Wide front camera perfect for video calls, USB-C connectivity, and support for Magic Keyboard Folio and Apple Pencil.',
    category: 'iPad',
    basePrice: 349,
    heroImage: ipadImages['ipad-10'],
    colors: [
      { name: 'Blue', value: '#5eb3e4', images: [ipadImages['ipad-10']] },
      { name: 'Pink', value: '#f5c4c6', images: [ipadImages['ipad-10']] },
      { name: 'Yellow', value: '#f9e36e', images: [ipadImages['ipad-10']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-10']] },
    ],
    storageOptions: [
      { size: '64GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
    ],
    variants: [
      { id: 'ipad-10-64-blue', name: 'iPad 10th Gen 64GB Blue', color: { name: 'Blue', value: '#5eb3e4' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 349, availability: 'in-stock', image: ipadImages['ipad-10'] },
      { id: 'ipad-10-256-blue', name: 'iPad 10th Gen 256GB Blue', color: { name: 'Blue', value: '#5eb3e4' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 449, availability: 'in-stock', image: ipadImages['ipad-10'] },
      { id: 'ipad-10-64-pink', name: 'iPad 10th Gen 64GB Pink', color: { name: 'Pink', value: '#f5c4c6' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 349, availability: 'in-stock', image: ipadImages['ipad-10'] },
      { id: 'ipad-10-64-yellow', name: 'iPad 10th Gen 64GB Yellow', color: { name: 'Yellow', value: '#f9e36e' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 349, availability: 'in-stock', image: ipadImages['ipad-10'] },
      { id: 'ipad-10-64-silver', name: 'iPad 10th Gen 64GB Silver', color: { name: 'Silver', value: '#e3e4e5' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 349, availability: 'in-stock', image: ipadImages['ipad-10'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '10.9-inch Liquid Retina display' },
          { label: 'Resolution', value: '2360 x 1640 pixels at 264 ppi' },
          { label: 'Brightness', value: '500 nits max brightness (SDR)' },
          { label: 'Features', value: 'True Tone, Wide color (P3), Fingerprint-resistant oleophobic coating' },
          { label: 'Fully Laminated', value: 'No' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A14 Bionic chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '4-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Performance', value: '30% faster CPU, 25% faster GPU than A13' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide camera, ƒ/1.8 aperture' },
          { label: 'Rear Video', value: '4K video at 24/25/30/60fps, 1080p at 25/30/60/120fps' },
          { label: 'Front Camera', value: '12MP Ultra Wide, ƒ/2.4, 122° field of view' },
          { label: 'Center Stage', value: 'Yes, in landscape orientation' },
          { label: 'Front Video', value: '1080p HD video at 25/30/60fps' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours web browsing on Wi-Fi' },
          { label: 'Video Playback', value: 'Up to 10 hours' },
          { label: 'Charging', value: 'USB-C connector' },
          { label: 'Battery Capacity', value: '28.6-watt-hour lithium-polymer' },
          { label: 'Power Adapter', value: '20W USB-C Power Adapter included' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '248.6 mm (9.79 inches)' },
          { label: 'Width', value: '179.5 mm (7.07 inches)' },
          { label: 'Depth', value: '7 mm (0.28 inch)' },
          { label: 'Weight', value: '477 g (1.05 pounds) Wi-Fi, 481 g Cellular' },
          { label: 'Material', value: '100% recycled aluminum enclosure' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.2' },
          { label: 'Cellular', value: '5G (sub-6 GHz), Gigabit LTE (cellular models)' },
          { label: 'Location', value: 'GPS, GLONASS, Galileo, QZSS' },
        ],
      },
      {
        category: 'Audio',
        items: [
          { label: 'Speakers', value: 'Landscape stereo speakers' },
          { label: 'Microphones', value: 'Dual microphones' },
        ],
      },
    ],
    features: [
      { title: 'A14 Bionic', description: 'Powerful chip for smooth multitasking, gaming, and creative apps.', icon: 'Cpu' },
      { title: 'All-Screen Design', description: '10.9-inch Liquid Retina display with vibrant colors.', icon: 'Monitor' },
      { title: 'Center Stage', description: 'Landscape camera keeps you in frame during video calls.', icon: 'Video' },
      { title: 'USB-C', description: 'Universal connectivity for accessories and charging.', icon: 'Usb' },
      { title: 'Apple Pencil Support', description: 'Works with Apple Pencil (1st generation via USB-C adapter).', icon: 'Pencil' },
    ],
    whatsInTheBox: ['iPad (10th generation)', '20W USB-C Power Adapter', 'USB-C Charge Cable (1m)', 'Documentation'],
  },

  {
    id: 'ipad-11th-gen',
    name: 'iPad (11th generation)',
    shortName: 'iPad 11th Gen',
    tagline: 'More power. More color. More fun.',
    description: 'The newest iPad with A16 Bionic, improved display, and Apple Intelligence support.',
    fullDescription: 'The iPad (11th generation) brings significant upgrades with the A16 Bionic chip enabling Apple Intelligence, a brighter display, improved cameras, and enhanced connectivity for everyday creativity and productivity.',
    category: 'iPad',
    basePrice: 399,
    heroImage: ipadImages['ipad-11'],
    isNew: true,
    colors: [
      { name: 'Blue', value: '#5eb3e4', images: [ipadImages['ipad-11']] },
      { name: 'Pink', value: '#f5c4c6', images: [ipadImages['ipad-11']] },
      { name: 'Yellow', value: '#f9e36e', images: [ipadImages['ipad-11']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-11']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
    ],
    variants: [
      { id: 'ipad-11-128-blue', name: 'iPad 11th Gen 128GB Blue', color: { name: 'Blue', value: '#5eb3e4' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 399, availability: 'in-stock', image: ipadImages['ipad-11'] },
      { id: 'ipad-11-256-blue', name: 'iPad 11th Gen 256GB Blue', color: { name: 'Blue', value: '#5eb3e4' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 499, availability: 'in-stock', image: ipadImages['ipad-11'] },
      { id: 'ipad-11-128-pink', name: 'iPad 11th Gen 128GB Pink', color: { name: 'Pink', value: '#f5c4c6' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 399, availability: 'in-stock', image: ipadImages['ipad-11'] },
      { id: 'ipad-11-128-silver', name: 'iPad 11th Gen 128GB Silver', color: { name: 'Silver', value: '#e3e4e5' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 399, availability: 'in-stock', image: ipadImages['ipad-11'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '10.9-inch Liquid Retina display' },
          { label: 'Resolution', value: '2360 x 1640 pixels at 264 ppi' },
          { label: 'Brightness', value: '500 nits max brightness' },
          { label: 'Features', value: 'True Tone, Wide color (P3), Anti-reflective coating' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A16 Bionic chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Apple Intelligence', value: 'Supported' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide camera, ƒ/1.8 aperture' },
          { label: 'Front Camera', value: '12MP Ultra Wide, Center Stage' },
          { label: 'Video Recording', value: '4K video at 60fps, 1080p slow-mo' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours' },
          { label: 'Charging', value: 'USB-C with fast charging support' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '248.6 mm (9.79 inches)' },
          { label: 'Width', value: '179.5 mm (7.07 inches)' },
          { label: 'Depth', value: '7 mm (0.28 inch)' },
          { label: 'Weight', value: '477 g (1.05 pounds)' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Cellular', value: '5G (sub-6 GHz and mmWave)' },
        ],
      },
    ],
    features: [
      { title: 'A16 Bionic', description: 'Powers Apple Intelligence for smart features.', icon: 'Cpu' },
      { title: 'Apple Intelligence', description: 'Personal intelligence system built for privacy.', icon: 'Brain' },
      { title: 'All-Day Battery', description: 'Up to 10 hours of use on a single charge.', icon: 'Battery' },
      { title: 'Versatile', description: 'Perfect for notes, streaming, gaming, and more.', icon: 'Layers' },
    ],
    whatsInTheBox: ['iPad (11th generation)', '20W USB-C Power Adapter', 'USB-C Cable (1m)'],
  },

  // ============================================
  // iPad mini
  // ============================================
  {
    id: 'ipad-mini-6',
    name: 'iPad mini (6th generation)',
    shortName: 'iPad mini 6',
    tagline: 'Mega power. Mini icons.',
    description: 'The powerful iPad mini with all-screen design, A15 Bionic chip, and Apple Pencil (2nd gen) support.',
    fullDescription: 'iPad mini (6th generation) features an all-screen 8.3-inch Liquid Retina display, the A15 Bionic chip, Touch ID in the top button, USB-C, 5G capability, and support for Apple Pencil (2nd generation). Perfect for on-the-go productivity and creativity.',
    category: 'iPad',
    basePrice: 449,
    heroImage: ipadImages['ipad-mini-6'],
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-mini-6']] },
      { name: 'Pink', value: '#f5c4c6', images: [ipadImages['ipad-mini-6']] },
      { name: 'Purple', value: '#b8b5c9', images: [ipadImages['ipad-mini-6']] },
      { name: 'Starlight', value: '#f5e6d3', images: [ipadImages['ipad-mini-6']] },
    ],
    storageOptions: [
      { size: '64GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
    ],
    variants: [
      { id: 'ipad-mini-6-64-spacegray', name: 'iPad mini 6 64GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 449, availability: 'in-stock', image: ipadImages['ipad-mini-6'] },
      { id: 'ipad-mini-6-256-spacegray', name: 'iPad mini 6 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 549, availability: 'in-stock', image: ipadImages['ipad-mini-6'] },
      { id: 'ipad-mini-6-64-pink', name: 'iPad mini 6 64GB Pink', color: { name: 'Pink', value: '#f5c4c6' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 449, availability: 'in-stock', image: ipadImages['ipad-mini-6'] },
      { id: 'ipad-mini-6-64-purple', name: 'iPad mini 6 64GB Purple', color: { name: 'Purple', value: '#b8b5c9' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 449, availability: 'in-stock', image: ipadImages['ipad-mini-6'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '8.3-inch Liquid Retina display' },
          { label: 'Resolution', value: '2266 x 1488 pixels at 326 ppi' },
          { label: 'Brightness', value: '500 nits max brightness' },
          { label: 'Features', value: 'Wide color (P3), True Tone, Fully laminated, Anti-reflective coating' },
          { label: 'Pencil Support', value: 'Apple Pencil (2nd generation), Apple Pencil (USB-C), Apple Pencil Pro' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A15 Bionic chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '5-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Performance', value: '40% faster CPU, 80% faster GPU than previous generation' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide camera, ƒ/1.8 aperture' },
          { label: 'Rear Video', value: '4K video at 24/25/30/60fps, 1080p slow-mo at 120/240fps' },
          { label: 'Front Camera', value: '12MP Ultra Wide, ƒ/2.4, 122° field of view' },
          { label: 'Center Stage', value: 'Yes' },
          { label: 'Smart HDR 3', value: 'Yes' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours web browsing on Wi-Fi' },
          { label: 'Video Playback', value: 'Up to 10 hours' },
          { label: 'Battery Capacity', value: '19.3-watt-hour lithium-polymer' },
          { label: 'Charging', value: 'USB-C connector, 20W adapter included' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '195.4 mm (7.69 inches)' },
          { label: 'Width', value: '134.8 mm (5.31 inches)' },
          { label: 'Depth', value: '6.3 mm (0.25 inch)' },
          { label: 'Weight', value: '293 g (0.65 pound) Wi-Fi, 297 g Cellular' },
          { label: 'Material', value: '100% recycled aluminum enclosure' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.0' },
          { label: 'Cellular', value: '5G (sub-6 GHz and mmWave), Gigabit LTE' },
          { label: 'Location', value: 'GPS, GLONASS, Galileo, QZSS, BeiDou' },
        ],
      },
      {
        category: 'Sensors',
        items: [
          { label: 'Touch ID', value: 'Top button integrated sensor' },
          { label: 'Accelerometer', value: 'Yes' },
          { label: 'Gyroscope', value: '3-axis gyro' },
          { label: 'Barometer', value: 'Yes' },
          { label: 'Ambient Light Sensor', value: 'Yes' },
        ],
      },
    ],
    features: [
      { title: 'Compact Powerhouse', description: '8.3-inch display in a portable design that fits anywhere.', icon: 'Smartphone' },
      { title: 'A15 Bionic', description: 'Same chip as iPhone 13 Pro for incredible performance.', icon: 'Cpu' },
      { title: 'Apple Pencil 2', description: 'Full support for the most advanced Apple Pencil.', icon: 'Pencil' },
      { title: '5G Capable', description: 'Ultrafast wireless connectivity on the go.', icon: 'Wifi' },
      { title: 'USB-C', description: 'Universal port for fast data transfer and charging.', icon: 'Usb' },
    ],
    whatsInTheBox: ['iPad mini', '20W USB-C Power Adapter', 'USB-C Charge Cable (1m)', 'Documentation'],
  },

  {
    id: 'ipad-mini-7',
    name: 'iPad mini (7th generation)',
    shortName: 'iPad mini 7',
    tagline: 'Small is the new powerful.',
    description: 'iPad mini with A17 Pro chip, Apple Intelligence, and Apple Pencil Pro support.',
    fullDescription: 'The new iPad mini (7th generation) is packed with the A17 Pro chip that enables Apple Intelligence, support for Apple Pencil Pro, faster Wi-Fi 6E, and a brilliant 8.3-inch Liquid Retina display. The ultimate portable iPad for creativity and productivity.',
    category: 'iPad',
    basePrice: 499,
    heroImage: ipadImages['ipad-mini-7'],
    isNew: true,
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-mini-7']] },
      { name: 'Blue', value: '#5eb3e4', images: [ipadImages['ipad-mini-7']] },
      { name: 'Purple', value: '#b8b5c9', images: [ipadImages['ipad-mini-7']] },
      { name: 'Starlight', value: '#f5e6d3', images: [ipadImages['ipad-mini-7']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
    ],
    variants: [
      { id: 'ipad-mini-7-128-spacegray', name: 'iPad mini 7 128GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 499, availability: 'in-stock', image: ipadImages['ipad-mini-7'] },
      { id: 'ipad-mini-7-256-spacegray', name: 'iPad mini 7 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 599, availability: 'in-stock', image: ipadImages['ipad-mini-7'] },
      { id: 'ipad-mini-7-512-spacegray', name: 'iPad mini 7 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 799, availability: 'in-stock', image: ipadImages['ipad-mini-7'] },
      { id: 'ipad-mini-7-128-blue', name: 'iPad mini 7 128GB Blue', color: { name: 'Blue', value: '#5eb3e4' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 499, availability: 'in-stock', image: ipadImages['ipad-mini-7'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '8.3-inch Liquid Retina display' },
          { label: 'Resolution', value: '2266 x 1488 pixels at 326 ppi' },
          { label: 'Brightness', value: '500 nits max brightness' },
          { label: 'Features', value: 'Wide color (P3), True Tone, Fully laminated, Anti-reflective coating' },
          { label: 'Pencil Support', value: 'Apple Pencil Pro, Apple Pencil (USB-C)' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'A17 Pro chip' },
          { label: 'CPU', value: '6-core CPU (2 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '5-core GPU with hardware-accelerated ray tracing' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Apple Intelligence', value: 'Fully supported' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide camera, ƒ/1.8 aperture' },
          { label: 'Front Camera', value: '12MP Ultra Wide, Center Stage' },
          { label: 'Video', value: '4K video at 60fps, ProRes video recording' },
          { label: 'Smart HDR 4', value: 'Yes' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours' },
          { label: 'Charging', value: 'USB-C with fast charging' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Cellular', value: '5G (sub-6 GHz and mmWave)' },
        ],
      },
    ],
    features: [
      { title: 'A17 Pro', description: 'Pro-level chip for desktop-class performance.', icon: 'Cpu' },
      { title: 'Apple Intelligence', description: 'AI-powered features built with privacy in mind.', icon: 'Brain' },
      { title: 'Apple Pencil Pro', description: 'Full support for the most advanced Pencil.', icon: 'Pencil' },
      { title: 'Ultraportable', description: 'Fits in one hand, goes anywhere.', icon: 'Smartphone' },
    ],
    whatsInTheBox: ['iPad mini', '20W USB-C Power Adapter', 'USB-C Cable (1m)'],
  },

  // ============================================
  // iPad Air
  // ============================================
  {
    id: 'ipad-air-109-m1',
    name: 'iPad Air 10.9" (M1)',
    shortName: 'iPad Air M1',
    tagline: 'Light. Bright. Full of might.',
    description: 'iPad Air with the breakthrough M1 chip for next-level performance.',
    fullDescription: 'iPad Air with M1 chip delivers powerful performance for demanding tasks. Features a stunning 10.9-inch Liquid Retina display, 12MP cameras, Touch ID, USB-C, 5G, and support for Apple Pencil (2nd generation) and Magic Keyboard.',
    category: 'iPad',
    basePrice: 599,
    heroImage: ipadImages['ipad-air-109-m1'],
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-air-109-m1']] },
      { name: 'Starlight', value: '#f5e6d3', images: [ipadImages['ipad-air-109-m1']] },
      { name: 'Pink', value: '#f5c4c6', images: [ipadImages['ipad-air-109-m1']] },
      { name: 'Purple', value: '#b8b5c9', images: [ipadImages['ipad-air-109-m1']] },
      { name: 'Blue', value: '#5eb3e4', images: [ipadImages['ipad-air-109-m1']] },
    ],
    storageOptions: [
      { size: '64GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 150 },
    ],
    variants: [
      { id: 'ipad-air-m1-64-spacegray', name: 'iPad Air M1 64GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: ipadImages['ipad-air-109-m1'] },
      { id: 'ipad-air-m1-256-spacegray', name: 'iPad Air M1 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 150 }, price: 749, availability: 'in-stock', image: ipadImages['ipad-air-109-m1'] },
      { id: 'ipad-air-m1-64-starlight', name: 'iPad Air M1 64GB Starlight', color: { name: 'Starlight', value: '#f5e6d3' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: ipadImages['ipad-air-109-m1'] },
      { id: 'ipad-air-m1-64-blue', name: 'iPad Air M1 64GB Blue', color: { name: 'Blue', value: '#5eb3e4' }, storage: { size: '64GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: ipadImages['ipad-air-109-m1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '10.9-inch Liquid Retina display' },
          { label: 'Resolution', value: '2360 x 1640 pixels at 264 ppi' },
          { label: 'Brightness', value: '500 nits max' },
          { label: 'Features', value: 'Wide color (P3), True Tone, Fully laminated, Anti-reflective' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M1 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '8-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Memory Bandwidth', value: '68.25 GB/s' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, ƒ/1.8' },
          { label: 'Front Camera', value: '12MP Ultra Wide, Center Stage' },
          { label: 'Video', value: '4K at 24/25/30/60fps' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours' },
          { label: 'Charging', value: 'USB-C, 20W adapter included' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.0' },
          { label: 'Cellular', value: '5G (sub-6 GHz)' },
        ],
      },
    ],
    features: [
      { title: 'M1 Chip', description: 'Desktop-class performance in a thin, light design.', icon: 'Cpu' },
      { title: 'All-Day Battery', description: 'Up to 10 hours of battery life.', icon: 'Battery' },
      { title: 'Center Stage', description: 'Stay centered in video calls automatically.', icon: 'Video' },
      { title: 'Touch ID', description: 'Secure authentication in the top button.', icon: 'Fingerprint' },
    ],
    whatsInTheBox: ['iPad Air', '20W USB-C Power Adapter', 'USB-C Cable (1m)'],
  },

  {
    id: 'ipad-air-11-m2',
    name: 'iPad Air 11" (M2)',
    shortName: 'iPad Air 11"',
    tagline: 'Supercharged by M2.',
    description: 'iPad Air with M2 chip, 11-inch Liquid Retina display, and Apple Pencil Pro support.',
    fullDescription: 'The new iPad Air 11" is supercharged by the M2 chip for powerful performance. Features a gorgeous 11-inch Liquid Retina display, landscape front camera, support for Apple Pencil Pro and Magic Keyboard, and Wi-Fi 6E.',
    category: 'iPad',
    basePrice: 599,
    heroImage: ipadImages['ipad-air-11-m2'],
    isNew: true,
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-air-11-m2']] },
      { name: 'Starlight', value: '#f5e6d3', images: [ipadImages['ipad-air-11-m2']] },
      { name: 'Purple', value: '#b8b5c9', images: [ipadImages['ipad-air-11-m2']] },
      { name: 'Blue', value: '#5eb3e4', images: [ipadImages['ipad-air-11-m2']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'ipad-air-11-m2-128-spacegray', name: 'iPad Air 11" M2 128GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: ipadImages['ipad-air-11-m2'] },
      { id: 'ipad-air-11-m2-256-spacegray', name: 'iPad Air 11" M2 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 699, availability: 'in-stock', image: ipadImages['ipad-air-11-m2'] },
      { id: 'ipad-air-11-m2-512-spacegray', name: 'iPad Air 11" M2 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 899, availability: 'in-stock', image: ipadImages['ipad-air-11-m2'] },
      { id: 'ipad-air-11-m2-128-blue', name: 'iPad Air 11" M2 128GB Blue', color: { name: 'Blue', value: '#5eb3e4' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 599, availability: 'in-stock', image: ipadImages['ipad-air-11-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '11-inch Liquid Retina display' },
          { label: 'Resolution', value: '2360 x 1640 pixels at 264 ppi' },
          { label: 'Brightness', value: '500 nits max' },
          { label: 'Features', value: 'Wide color (P3), True Tone, Fully laminated, Anti-reflective coating' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency cores)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Memory Bandwidth', value: '100 GB/s' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, ƒ/1.8' },
          { label: 'Front Camera', value: '12MP Ultra Wide (landscape), Center Stage' },
          { label: 'Video', value: '4K at 60fps, ProRes' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours' },
          { label: 'Charging', value: 'USB-C with fast charging' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Cellular', value: '5G (sub-6 GHz and mmWave)' },
        ],
      },
    ],
    features: [
      { title: 'M2 Chip', description: 'Faster performance for demanding creative apps.', icon: 'Cpu' },
      { title: 'Apple Pencil Pro', description: 'Barrel roll, squeeze, and haptic feedback.', icon: 'Pencil' },
      { title: 'Landscape Camera', description: 'Perfect framing for video calls.', icon: 'Video' },
      { title: 'Wi-Fi 6E', description: 'Blazing fast wireless connectivity.', icon: 'Wifi' },
    ],
    whatsInTheBox: ['iPad Air', 'USB-C Charge Cable (1m)'],
  },

  {
    id: 'ipad-air-13-m2',
    name: 'iPad Air 13" (M2)',
    shortName: 'iPad Air 13"',
    tagline: 'More screen. More space. More power.',
    description: 'The largest iPad Air ever with a stunning 13-inch Liquid Retina display.',
    fullDescription: 'iPad Air 13" features the largest display ever on an iPad Air. Powered by M2 chip with a gorgeous 13-inch Liquid Retina display, support for Apple Pencil Pro and Magic Keyboard, perfect for creative professionals who need more screen real estate.',
    category: 'iPad',
    basePrice: 799,
    heroImage: ipadImages['ipad-air-13-m2'],
    isNew: true,
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-air-13-m2']] },
      { name: 'Starlight', value: '#f5e6d3', images: [ipadImages['ipad-air-13-m2']] },
      { name: 'Purple', value: '#b8b5c9', images: [ipadImages['ipad-air-13-m2']] },
      { name: 'Blue', value: '#5eb3e4', images: [ipadImages['ipad-air-13-m2']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
    ],
    variants: [
      { id: 'ipad-air-13-m2-128-spacegray', name: 'iPad Air 13" M2 128GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: ipadImages['ipad-air-13-m2'] },
      { id: 'ipad-air-13-m2-256-spacegray', name: 'iPad Air 13" M2 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: ipadImages['ipad-air-13-m2'] },
      { id: 'ipad-air-13-m2-512-spacegray', name: 'iPad Air 13" M2 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1099, availability: 'in-stock', image: ipadImages['ipad-air-13-m2'] },
      { id: 'ipad-air-13-m2-1tb-spacegray', name: 'iPad Air 13" M2 1TB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '1TB', priceAdjustment: 500 }, price: 1299, availability: 'in-stock', image: ipadImages['ipad-air-13-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13-inch Liquid Retina display' },
          { label: 'Resolution', value: '2732 x 2048 pixels at 264 ppi' },
          { label: 'Brightness', value: '600 nits max' },
          { label: 'Features', value: 'Wide color (P3), True Tone, Fully laminated, Anti-reflective coating' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 chip' },
          { label: 'CPU', value: '8-core CPU' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, ƒ/1.8' },
          { label: 'Front Camera', value: '12MP Ultra Wide (landscape), Center Stage' },
          { label: 'Video', value: '4K at 60fps' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours' },
          { label: 'Charging', value: 'USB-C with fast charging' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '280.6 mm (11.04 inches)' },
          { label: 'Width', value: '214.9 mm (8.46 inches)' },
          { label: 'Depth', value: '6.1 mm (0.24 inch)' },
          { label: 'Weight', value: '617 g (1.36 pounds)' },
        ],
      },
    ],
    features: [
      { title: 'Largest Air Display', description: '13-inch screen for more creative space.', icon: 'Monitor' },
      { title: 'M2 Chip', description: 'Pro-level performance for demanding workflows.', icon: 'Cpu' },
      { title: 'Apple Pencil Pro', description: 'The most advanced Apple Pencil experience.', icon: 'Pencil' },
      { title: 'Magic Keyboard', description: 'Full-size keyboard with trackpad.', icon: 'Keyboard' },
    ],
    whatsInTheBox: ['iPad Air', 'USB-C Charge Cable (1m)'],
  },

  // ============================================
  // iPad Pro
  // ============================================
  {
    id: 'ipad-pro-11-m1',
    name: 'iPad Pro 11" (M1)',
    shortName: 'iPad Pro 11" M1',
    tagline: 'Supercharged by M1.',
    description: 'iPad Pro with breakthrough M1 chip, Liquid Retina display, and Thunderbolt support.',
    fullDescription: 'iPad Pro 11" with M1 brings desktop-class performance to iPad. Features a Liquid Retina display with ProMotion, Thunderbolt/USB 4 connectivity, and support for the best Apple accessories.',
    category: 'iPad',
    basePrice: 799,
    heroImage: ipadImages['ipad-pro-11-m1'],
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-pro-11-m1']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-pro-11-m1']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
      { size: '2TB', priceAdjustment: 900 },
    ],
    variants: [
      { id: 'ipad-pro-11-m1-128-spacegray', name: 'iPad Pro 11" M1 128GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: ipadImages['ipad-pro-11-m1'] },
      { id: 'ipad-pro-11-m1-256-spacegray', name: 'iPad Pro 11" M1 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: ipadImages['ipad-pro-11-m1'] },
      { id: 'ipad-pro-11-m1-512-spacegray', name: 'iPad Pro 11" M1 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1099, availability: 'in-stock', image: ipadImages['ipad-pro-11-m1'] },
      { id: 'ipad-pro-11-m1-128-silver', name: 'iPad Pro 11" M1 128GB Silver', color: { name: 'Silver', value: '#e3e4e5' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: ipadImages['ipad-pro-11-m1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '11-inch Liquid Retina display' },
          { label: 'Resolution', value: '2388 x 1668 pixels at 264 ppi' },
          { label: 'ProMotion', value: 'Adaptive 120Hz refresh rate' },
          { label: 'Brightness', value: '600 nits max' },
          { label: 'Features', value: 'Wide color (P3), True Tone, Fully laminated, Anti-reflective' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M1 chip' },
          { label: 'CPU', value: '8-core CPU' },
          { label: 'GPU', value: '8-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, 10MP Ultra Wide, LiDAR Scanner' },
          { label: 'Front Camera', value: '12MP Ultra Wide, Center Stage' },
          { label: 'Video', value: '4K ProRes, Cinematic mode' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Thunderbolt', value: 'Thunderbolt / USB 4' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
          { label: 'Cellular', value: '5G' },
        ],
      },
    ],
    features: [
      { title: 'M1 Chip', description: 'Desktop-class performance for pro workflows.', icon: 'Cpu' },
      { title: 'ProMotion', description: '120Hz adaptive refresh for fluid scrolling.', icon: 'Monitor' },
      { title: 'Thunderbolt', description: 'Pro connectivity for external displays and storage.', icon: 'Usb' },
      { title: 'LiDAR Scanner', description: 'Pro-level AR experiences and photography.', icon: 'Scan' },
    ],
    whatsInTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)'],
  },

  {
    id: 'ipad-pro-129-m1',
    name: 'iPad Pro 12.9" (M1)',
    shortName: 'iPad Pro 12.9" M1',
    tagline: 'The ultimate iPad experience.',
    description: 'iPad Pro with M1 chip and Liquid Retina XDR display with mini-LED technology.',
    fullDescription: 'iPad Pro 12.9" features the stunning Liquid Retina XDR display with mini-LED technology delivering 1600 nits peak brightness. Powered by M1 chip with Thunderbolt connectivity.',
    category: 'iPad',
    basePrice: 1099,
    heroImage: ipadImages['ipad-pro-129-m1'],
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-pro-129-m1']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-pro-129-m1']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
      { size: '2TB', priceAdjustment: 900 },
    ],
    variants: [
      { id: 'ipad-pro-129-m1-128-spacegray', name: 'iPad Pro 12.9" M1 128GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: ipadImages['ipad-pro-129-m1'] },
      { id: 'ipad-pro-129-m1-256-spacegray', name: 'iPad Pro 12.9" M1 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 1199, availability: 'in-stock', image: ipadImages['ipad-pro-129-m1'] },
      { id: 'ipad-pro-129-m1-512-spacegray', name: 'iPad Pro 12.9" M1 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1399, availability: 'in-stock', image: ipadImages['ipad-pro-129-m1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '12.9-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '2732 x 2048 pixels at 264 ppi' },
          { label: 'Technology', value: 'Mini-LED backlight with 2596 local dimming zones' },
          { label: 'ProMotion', value: 'Adaptive 120Hz refresh rate' },
          { label: 'Brightness', value: '1000 nits full-screen, 1600 nits peak HDR' },
          { label: 'Contrast', value: '1,000,000:1 contrast ratio' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M1 chip' },
          { label: 'CPU', value: '8-core CPU' },
          { label: 'GPU', value: '8-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, 10MP Ultra Wide, LiDAR Scanner' },
          { label: 'Front Camera', value: '12MP Ultra Wide, Center Stage' },
          { label: 'Video', value: '4K ProRes' },
        ],
      },
    ],
    features: [
      { title: 'Liquid Retina XDR', description: 'Mini-LED display with stunning HDR content.', icon: 'Monitor' },
      { title: 'M1 Chip', description: 'Desktop-class performance.', icon: 'Cpu' },
      { title: 'ProMotion', description: '120Hz adaptive refresh.', icon: 'Zap' },
      { title: 'LiDAR Scanner', description: 'Pro AR and photography features.', icon: 'Scan' },
    ],
    whatsInTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)'],
  },

  {
    id: 'ipad-pro-11-m2',
    name: 'iPad Pro 11" (M2)',
    shortName: 'iPad Pro 11" M2',
    tagline: 'Next-level performance.',
    description: 'iPad Pro with M2 chip, Apple Pencil hover, and pro camera system.',
    fullDescription: 'iPad Pro 11" with M2 chip delivers extraordinary performance with the 8-core CPU and 10-core GPU. Features Apple Pencil hover for precision, ProRes video recording, and advanced pro cameras.',
    category: 'iPad',
    basePrice: 799,
    heroImage: ipadImages['ipad-pro-11-m2'],
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-pro-11-m2']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-pro-11-m2']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
      { size: '2TB', priceAdjustment: 900 },
    ],
    variants: [
      { id: 'ipad-pro-11-m2-128-spacegray', name: 'iPad Pro 11" M2 128GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 799, availability: 'in-stock', image: ipadImages['ipad-pro-11-m2'] },
      { id: 'ipad-pro-11-m2-256-spacegray', name: 'iPad Pro 11" M2 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 899, availability: 'in-stock', image: ipadImages['ipad-pro-11-m2'] },
      { id: 'ipad-pro-11-m2-512-spacegray', name: 'iPad Pro 11" M2 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1099, availability: 'in-stock', image: ipadImages['ipad-pro-11-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '11-inch Liquid Retina display' },
          { label: 'Resolution', value: '2388 x 1668 pixels at 264 ppi' },
          { label: 'ProMotion', value: 'Adaptive 120Hz refresh rate' },
          { label: 'Brightness', value: '600 nits max' },
          { label: 'Apple Pencil Hover', value: 'Yes, detects up to 12mm above display' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Memory Bandwidth', value: '100 GB/s' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, 10MP Ultra Wide, LiDAR Scanner' },
          { label: 'Front Camera', value: '12MP Ultra Wide, Center Stage' },
          { label: 'Video', value: '4K ProRes video recording' },
        ],
      },
    ],
    features: [
      { title: 'M2 Chip', description: '15% faster CPU, 35% faster GPU than M1.', icon: 'Cpu' },
      { title: 'Apple Pencil Hover', description: 'See previews before you make your mark.', icon: 'Pencil' },
      { title: 'ProMotion', description: '120Hz adaptive refresh.', icon: 'Monitor' },
      { title: 'Wi-Fi 6E', description: 'Fastest wireless connectivity.', icon: 'Wifi' },
    ],
    whatsInTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)'],
  },

  {
    id: 'ipad-pro-129-m2',
    name: 'iPad Pro 12.9" (M2)',
    shortName: 'iPad Pro 12.9" M2',
    tagline: 'The ultimate iPad experience.',
    description: 'iPad Pro 12.9" with M2 chip and Liquid Retina XDR display.',
    fullDescription: 'The ultimate iPad Pro with M2 chip and stunning Liquid Retina XDR display with mini-LED. Features Apple Pencil hover, ProRes video, and the most powerful iPad ever.',
    category: 'iPad',
    basePrice: 1099,
    heroImage: ipadImages['ipad-pro-129-m2'],
    colors: [
      { name: 'Space Gray', value: '#535150', images: [ipadImages['ipad-pro-129-m2']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-pro-129-m2']] },
    ],
    storageOptions: [
      { size: '128GB', priceAdjustment: 0 },
      { size: '256GB', priceAdjustment: 100 },
      { size: '512GB', priceAdjustment: 300 },
      { size: '1TB', priceAdjustment: 500 },
      { size: '2TB', priceAdjustment: 900 },
    ],
    variants: [
      { id: 'ipad-pro-129-m2-128-spacegray', name: 'iPad Pro 12.9" M2 128GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '128GB', priceAdjustment: 0 }, price: 1099, availability: 'in-stock', image: ipadImages['ipad-pro-129-m2'] },
      { id: 'ipad-pro-129-m2-256-spacegray', name: 'iPad Pro 12.9" M2 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 100 }, price: 1199, availability: 'in-stock', image: ipadImages['ipad-pro-129-m2'] },
      { id: 'ipad-pro-129-m2-512-spacegray', name: 'iPad Pro 12.9" M2 512GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '512GB', priceAdjustment: 300 }, price: 1399, availability: 'in-stock', image: ipadImages['ipad-pro-129-m2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '12.9-inch Liquid Retina XDR display' },
          { label: 'Resolution', value: '2732 x 2048 pixels at 264 ppi' },
          { label: 'Technology', value: 'Mini-LED backlight with 2596 local dimming zones' },
          { label: 'ProMotion', value: 'Adaptive 120Hz refresh rate' },
          { label: 'Brightness', value: '1000 nits full-screen, 1600 nits peak HDR' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M2 chip' },
          { label: 'CPU', value: '8-core CPU' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
    ],
    features: [
      { title: 'Liquid Retina XDR', description: 'Extreme Dynamic Range with mini-LED.', icon: 'Monitor' },
      { title: 'M2 Chip', description: 'Next-level performance.', icon: 'Cpu' },
      { title: 'Apple Pencil Hover', description: 'Precision before you touch.', icon: 'Pencil' },
    ],
    whatsInTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)'],
  },

  {
    id: 'ipad-pro-11-m4',
    name: 'iPad Pro 11" (M4)',
    shortName: 'iPad Pro 11" M4',
    tagline: 'Unbelievably thin. Incredibly powerful.',
    description: 'The new iPad Pro with M4 chip, Ultra Retina XDR display, and Apple Intelligence.',
    fullDescription: 'The all-new iPad Pro is impossibly thin, featuring the M4 chip for outrageous performance, a stunning Ultra Retina XDR display with tandem OLED technology, Apple Pencil Pro support, and Apple Intelligence. The thinnest Apple product ever.',
    category: 'iPad',
    basePrice: 999,
    heroImage: ipadImages['ipad-pro-11-m4'],
    isNew: true,
    colors: [
      { name: 'Space Black', value: '#1d1d1f', images: [ipadImages['ipad-pro-11-m4']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-pro-11-m4']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
      { size: '2TB', priceAdjustment: 800 },
    ],
    variants: [
      { id: 'ipad-pro-11-m4-256-spaceblack', name: 'iPad Pro 11" M4 256GB Space Black', color: { name: 'Space Black', value: '#1d1d1f' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: ipadImages['ipad-pro-11-m4'] },
      { id: 'ipad-pro-11-m4-512-spaceblack', name: 'iPad Pro 11" M4 512GB Space Black', color: { name: 'Space Black', value: '#1d1d1f' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1199, availability: 'in-stock', image: ipadImages['ipad-pro-11-m4'] },
      { id: 'ipad-pro-11-m4-1tb-spaceblack', name: 'iPad Pro 11" M4 1TB Space Black', color: { name: 'Space Black', value: '#1d1d1f' }, storage: { size: '1TB', priceAdjustment: 400 }, price: 1399, availability: 'in-stock', image: ipadImages['ipad-pro-11-m4'] },
      { id: 'ipad-pro-11-m4-256-silver', name: 'iPad Pro 11" M4 256GB Silver', color: { name: 'Silver', value: '#e3e4e5' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 999, availability: 'in-stock', image: ipadImages['ipad-pro-11-m4'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '11-inch Ultra Retina XDR display' },
          { label: 'Technology', value: 'Tandem OLED technology' },
          { label: 'Resolution', value: '2420 x 1668 pixels at 264 ppi' },
          { label: 'ProMotion', value: 'Adaptive refresh 10Hz-120Hz' },
          { label: 'Brightness', value: '1000 nits SDR, 1600 nits HDR peak' },
          { label: 'Features', value: 'Ultra-wide viewing, Nano-texture glass option' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M4 chip' },
          { label: 'CPU', value: '9-core CPU (3 performance + 6 efficiency) or 10-core (4+6)' },
          { label: 'GPU', value: '10-core GPU' },
          { label: 'Neural Engine', value: '16-core Neural Engine (38 trillion ops/second)' },
          { label: 'Memory', value: '8GB or 16GB unified memory' },
          { label: 'Apple Intelligence', value: 'Fully supported' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, ƒ/1.8, Smart HDR 4' },
          { label: 'Flash', value: 'Adaptive True Tone flash' },
          { label: 'Front Camera', value: '12MP Ultra Wide (landscape), Center Stage' },
          { label: 'Video', value: '4K ProRes, Log video, Cinematic mode' },
          { label: 'LiDAR', value: 'LiDAR Scanner for AR and depth' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '249.7 mm (9.83 inches)' },
          { label: 'Width', value: '177.5 mm (6.99 inches)' },
          { label: 'Depth', value: '5.3 mm (0.21 inch)' },
          { label: 'Weight', value: '444 g (0.98 pound)' },
          { label: 'Note', value: 'Thinnest Apple product ever' },
        ],
      },
      {
        category: 'Battery & Power',
        items: [
          { label: 'Battery Life', value: 'Up to 10 hours' },
          { label: 'Charging', value: 'USB-C with Thunderbolt / USB 4' },
          { label: 'Fast Charge', value: 'Supported' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Thunderbolt', value: 'Thunderbolt / USB 4 (up to 40Gb/s)' },
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Cellular', value: '5G (sub-6 GHz and mmWave)' },
        ],
      },
    ],
    features: [
      { title: 'M4 Chip', description: 'Outrageous performance with 38 TOPS Neural Engine.', icon: 'Cpu' },
      { title: 'Ultra Retina XDR', description: 'Tandem OLED for extreme brightness and contrast.', icon: 'Monitor' },
      { title: 'Apple Intelligence', description: 'Personal AI built with privacy in mind.', icon: 'Brain' },
      { title: 'Apple Pencil Pro', description: 'Squeeze, barrel roll, and haptic feedback.', icon: 'Pencil' },
      { title: 'Incredibly Thin', description: 'Just 5.3mm — thinnest Apple product ever.', icon: 'Layers' },
    ],
    whatsInTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)'],
  },

  {
    id: 'ipad-pro-13-m4',
    name: 'iPad Pro 13" (M4)',
    shortName: 'iPad Pro 13" M4',
    tagline: 'The biggest leap forward for iPad.',
    description: 'iPad Pro 13" with M4 chip, tandem OLED display, and Apple Intelligence.',
    fullDescription: 'The new iPad Pro 13" features a stunning Ultra Retina XDR display with tandem OLED delivering SDR and HDR brightness like never before. Powered by M4 chip with Apple Intelligence, support for Apple Pencil Pro, and the thinnest design ever.',
    category: 'iPad',
    basePrice: 1299,
    heroImage: ipadImages['ipad-pro-13-m4'],
    isNew: true,
    colors: [
      { name: 'Space Black', value: '#1d1d1f', images: [ipadImages['ipad-pro-13-m4']] },
      { name: 'Silver', value: '#e3e4e5', images: [ipadImages['ipad-pro-13-m4']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
      { size: '2TB', priceAdjustment: 800 },
    ],
    variants: [
      { id: 'ipad-pro-13-m4-256-spaceblack', name: 'iPad Pro 13" M4 256GB Space Black', color: { name: 'Space Black', value: '#1d1d1f' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 1299, availability: 'in-stock', image: ipadImages['ipad-pro-13-m4'] },
      { id: 'ipad-pro-13-m4-512-spaceblack', name: 'iPad Pro 13" M4 512GB Space Black', color: { name: 'Space Black', value: '#1d1d1f' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 1499, availability: 'in-stock', image: ipadImages['ipad-pro-13-m4'] },
      { id: 'ipad-pro-13-m4-1tb-spaceblack', name: 'iPad Pro 13" M4 1TB Space Black', color: { name: 'Space Black', value: '#1d1d1f' }, storage: { size: '1TB', priceAdjustment: 400 }, price: 1699, availability: 'in-stock', image: ipadImages['ipad-pro-13-m4'] },
      { id: 'ipad-pro-13-m4-2tb-spaceblack', name: 'iPad Pro 13" M4 2TB Space Black', color: { name: 'Space Black', value: '#1d1d1f' }, storage: { size: '2TB', priceAdjustment: 800 }, price: 2099, availability: 'in-stock', image: ipadImages['ipad-pro-13-m4'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '13-inch Ultra Retina XDR display' },
          { label: 'Technology', value: 'Tandem OLED with two stacked OLED panels' },
          { label: 'Resolution', value: '2752 x 2064 pixels at 264 ppi' },
          { label: 'ProMotion', value: 'Adaptive 10Hz-120Hz' },
          { label: 'Brightness', value: '1000 nits SDR, 1600 nits HDR peak' },
          { label: 'Contrast', value: '2,000,000:1' },
          { label: 'Options', value: 'Nano-texture glass available' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'Apple M4 chip' },
          { label: 'CPU', value: '9-core or 10-core CPU' },
          { label: 'GPU', value: '10-core GPU with hardware ray tracing' },
          { label: 'Neural Engine', value: '16-core, 38 TOPS' },
          { label: 'Memory', value: '8GB or 16GB unified memory' },
        ],
      },
      {
        category: 'Camera System',
        items: [
          { label: 'Rear Camera', value: '12MP Wide, LiDAR Scanner' },
          { label: 'Front Camera', value: '12MP Ultra Wide (landscape), Center Stage' },
          { label: 'Video', value: '4K ProRes, Log encoding' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Height', value: '281.6 mm (11.09 inches)' },
          { label: 'Width', value: '215.5 mm (8.48 inches)' },
          { label: 'Depth', value: '5.1 mm (0.20 inch)' },
          { label: 'Weight', value: '579 g (1.28 pounds)' },
        ],
      },
    ],
    features: [
      { title: 'Tandem OLED', description: 'Two OLED panels for incredible brightness.', icon: 'Monitor' },
      { title: 'M4 Chip', description: 'The most powerful chip ever in an iPad.', icon: 'Cpu' },
      { title: 'Apple Intelligence', description: 'AI features built for privacy.', icon: 'Brain' },
      { title: 'Apple Pencil Pro', description: 'The most advanced creative tool.', icon: 'Pencil' },
      { title: '5.1mm Thin', description: 'Incredibly thin, incredibly capable.', icon: 'Layers' },
    ],
    whatsInTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)'],
  },
];
