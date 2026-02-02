import type { Product } from './products';

// Vision model images mapping
const visionImages = {
  'vision-pro': '/visionpro.jpg',
  'vision-2': '/vision2.jpg',
};

export const visionModels: Product[] = [
  // ============================================
  // Apple Vision Pro
  // ============================================
  {
    id: 'apple-vision-pro',
    name: 'Apple Vision Pro',
    shortName: 'Vision Pro',
    tagline: 'Welcome to the era of spatial computing.',
    description: 'Apple Vision Pro seamlessly blends digital content with your physical space.',
    fullDescription: 'Apple Vision Pro is a revolutionary spatial computer that transforms how you work, collaborate, connect, and relive memories. It lets you use apps in ways never before possible — with just your eyes, hands, and voice. Featuring the most advanced display system ever built, custom Apple silicon, and a 3D camera.',
    category: 'Vision',
    basePrice: 3499,
    heroImage: visionImages['vision-pro'],
    colors: [
      { name: 'Silver', value: '#c0c0c0', images: [visionImages['vision-pro']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
      { size: '1TB', priceAdjustment: 400 },
    ],
    variants: [
      { id: 'vision-pro-256', name: 'Apple Vision Pro 256GB', color: { name: 'Silver', value: '#c0c0c0' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 3499, availability: 'in-stock', image: visionImages['vision-pro'] },
      { id: 'vision-pro-512', name: 'Apple Vision Pro 512GB', color: { name: 'Silver', value: '#c0c0c0' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 3699, availability: 'in-stock', image: visionImages['vision-pro'] },
      { id: 'vision-pro-1tb', name: 'Apple Vision Pro 1TB', color: { name: 'Silver', value: '#c0c0c0' }, storage: { size: '1TB', priceAdjustment: 400 }, price: 3899, availability: 'in-stock', image: visionImages['vision-pro'] },
    ],
    specs: [
      {
        category: 'Display System',
        items: [
          { label: 'Display Type', value: 'Micro-OLED' },
          { label: 'Total Pixels', value: '23 million pixels across two displays' },
          { label: 'Resolution per Eye', value: 'More than 4K per eye' },
          { label: 'Pixel Density', value: '3,386 pixels per inch' },
          { label: 'Color Support', value: 'Wide color (P3), HDR' },
          { label: 'Refresh Rate', value: '90Hz, 96Hz, or 100Hz' },
          { label: 'Field of View', value: 'Approximately 100 degrees' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Main Processor', value: 'Apple M2 chip' },
          { label: 'M2 CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'M2 GPU', value: '10-core GPU' },
          { label: 'M2 Memory', value: '16GB unified memory' },
          { label: 'M2 Memory Bandwidth', value: '100GB/s' },
          { label: 'Sensor Processor', value: 'Apple R1 chip' },
          { label: 'R1 Latency', value: '12 milliseconds from sensor to display' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
        ],
      },
      {
        category: 'Sensors & Cameras',
        items: [
          { label: 'Cameras', value: '12 cameras' },
          { label: 'Sensors', value: '5 sensors' },
          { label: 'Microphones', value: '6 microphones with directional audio' },
          { label: 'Eye Tracking', value: 'High-speed cameras and LED illuminators' },
          { label: 'TrueDepth Camera', value: 'For Optic ID authentication' },
          { label: 'LiDAR Scanner', value: 'For spatial mapping' },
          { label: 'Ambient Light Sensor', value: 'Yes' },
          { label: 'Flicker Sensor', value: 'Yes' },
        ],
      },
      {
        category: '3D Camera',
        items: [
          { label: 'Spatial Photos', value: 'Capture photos with depth' },
          { label: 'Spatial Videos', value: 'Record 3D videos in stunning quality' },
          { label: 'Playback', value: 'Relive memories in 3D with spatial audio' },
          { label: 'iPhone 15 Pro', value: 'View spatial videos captured on iPhone' },
        ],
      },
      {
        category: 'Audio',
        items: [
          { label: 'Speakers', value: 'Audio Pods with dual drivers' },
          { label: 'Spatial Audio', value: 'Personalized Spatial Audio with head tracking' },
          { label: 'Audio Raytracing', value: 'Matches sound to your environment' },
          { label: 'Voice Isolation', value: 'For clear communication' },
          { label: 'Transparency', value: 'Hear the world around you' },
        ],
      },
      {
        category: 'EyeSight',
        items: [
          { label: 'External Display', value: 'Curved OLED shows your eyes to others' },
          { label: 'Technology', value: 'Lenticular lens for dimensional appearance' },
          { label: 'Modes', value: 'Shows eyes when using apps, dims when immersed' },
        ],
      },
      {
        category: 'Input',
        items: [
          { label: 'Eye Input', value: 'Navigate by looking at elements' },
          { label: 'Hand Input', value: 'Tap, pinch, scroll, zoom with natural gestures' },
          { label: 'Voice Input', value: 'Dictation and Siri for commands' },
          { label: 'Virtual Keyboard', value: 'Type by looking at letters' },
          { label: 'External Keyboard', value: 'Bluetooth keyboard and trackpad support' },
        ],
      },
      {
        category: 'Design & Fit',
        items: [
          { label: 'Frame Material', value: 'Custom aluminum alloy with glass front' },
          { label: 'Light Seal', value: 'Soft textile for light blocking and comfort' },
          { label: 'Headband', value: 'Solo Knit Band or Dual Loop Band' },
          { label: 'Weight (without band)', value: '600-650g depending on Light Seal' },
          { label: 'Vision Correction', value: 'ZEISS Optical Inserts available' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Usage Time', value: 'Up to 2 hours general use' },
          { label: 'Video Playback', value: 'Up to 2.5 hours' },
          { label: 'External Battery', value: 'Woven cable with USB-C' },
          { label: 'Battery Capacity', value: '3,166 mAh' },
          { label: 'Power Tethered', value: 'All-day use when plugged in' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'USB-C', value: 'For power and Mac Virtual Display' },
        ],
      },
      {
        category: 'Security',
        items: [
          { label: 'Optic ID', value: 'Secure authentication using iris scanning' },
          { label: 'Privacy', value: 'Eye tracking data never leaves device' },
          { label: 'Visual Indicator', value: 'LED shows when cameras are active' },
        ],
      },
    ],
    features: [
      { title: 'Spatial Computing', description: 'Apps and content exist in your physical space, expanding beyond any display.', icon: 'Box' },
      { title: 'EyeSight', description: 'An outward display reveals your eyes so people know when you\'re using apps or immersed.', icon: 'Eye' },
      { title: 'M2 + R1 Chips', description: 'M2 delivers powerful performance while R1 processes sensor data in real time.', icon: 'Cpu' },
      { title: '23 Million Pixels', description: 'Ultra-high-resolution micro-OLED displays deliver stunning visual fidelity.', icon: 'Monitor' },
      { title: 'Spatial Audio', description: 'Personalized sound that matches your environment for complete immersion.', icon: 'Volume2' },
      { title: 'Natural Input', description: 'Control with your eyes, hands, and voice — no controllers needed.', icon: 'Hand' },
      { title: '3D Camera', description: 'Capture and relive spatial photos and videos with remarkable depth.', icon: 'Camera' },
      { title: 'Environments', description: 'Transform your surroundings into beautiful, dynamic landscapes.', icon: 'Globe' },
      { title: 'Mac Virtual Display', description: 'Bring your Mac into Vision Pro as an enormous, private display.', icon: 'Monitor' },
      { title: 'Optic ID', description: 'Secure authentication using the uniqueness of your iris.', icon: 'Fingerprint' },
    ],
    whatsInTheBox: [
      'Apple Vision Pro',
      'Solo Knit Band (S, M, or L)',
      'Dual Loop Band (S, M, or L)',
      'Light Seal',
      'Light Seal Cushion (2)',
      'External Battery',
      'USB-C Charge Cable (1.5m)',
      'USB-C Power Adapter',
      'Polishing Cloth',
      'Documentation',
    ],
  },

  // ============================================
  // Apple Vision (2nd generation)
  // ============================================
  {
    id: 'apple-vision-2',
    name: 'Apple Vision (2nd generation)',
    shortName: 'Vision 2',
    tagline: 'Spatial computing for everyone.',
    description: 'A more accessible Apple Vision with powerful features at a breakthrough price.',
    fullDescription: 'Apple Vision (2nd generation) brings the magic of spatial computing to more people. Featuring the M3 chip for incredible performance, advanced display technology, refined design with improved comfort, and access to the growing library of spatial apps and experiences.',
    category: 'Vision',
    basePrice: 2499,
    heroImage: visionImages['vision-2'],
    isNew: true,
    colors: [
      { name: 'Silver', value: '#c0c0c0', images: [visionImages['vision-2']] },
      { name: 'Space Gray', value: '#535150', images: [visionImages['vision-2']] },
    ],
    storageOptions: [
      { size: '256GB', priceAdjustment: 0 },
      { size: '512GB', priceAdjustment: 200 },
    ],
    variants: [
      { id: 'vision-2-256-silver', name: 'Apple Vision 2 256GB Silver', color: { name: 'Silver', value: '#c0c0c0' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 2499, availability: 'pre-order', image: visionImages['vision-2'] },
      { id: 'vision-2-512-silver', name: 'Apple Vision 2 512GB Silver', color: { name: 'Silver', value: '#c0c0c0' }, storage: { size: '512GB', priceAdjustment: 200 }, price: 2699, availability: 'pre-order', image: visionImages['vision-2'] },
      { id: 'vision-2-256-spacegray', name: 'Apple Vision 2 256GB Space Gray', color: { name: 'Space Gray', value: '#535150' }, storage: { size: '256GB', priceAdjustment: 0 }, price: 2499, availability: 'pre-order', image: visionImages['vision-2'] },
    ],
    specs: [
      {
        category: 'Display System',
        items: [
          { label: 'Display Type', value: 'Advanced micro-OLED' },
          { label: 'Total Pixels', value: '20 million pixels' },
          { label: 'Resolution', value: '4K per eye' },
          { label: 'Color Support', value: 'Wide color (P3), HDR' },
          { label: 'Refresh Rate', value: '90Hz, 96Hz, or 100Hz' },
          { label: 'Field of View', value: 'Approximately 100 degrees' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Main Processor', value: 'Apple M3 chip' },
          { label: 'CPU', value: '8-core CPU (4 performance + 4 efficiency)' },
          { label: 'GPU', value: '10-core GPU with hardware ray tracing' },
          { label: 'Memory', value: '16GB unified memory' },
          { label: 'Neural Engine', value: '16-core Neural Engine' },
          { label: 'Sensor Processor', value: 'Apple R2 chip' },
          { label: 'Latency', value: '10 milliseconds from sensor to display' },
        ],
      },
      {
        category: 'Sensors & Cameras',
        items: [
          { label: 'Cameras', value: '10 cameras' },
          { label: 'Sensors', value: '4 sensors' },
          { label: 'Microphones', value: '6 microphones' },
          { label: 'Eye Tracking', value: 'High-speed eye tracking system' },
          { label: 'Optic ID', value: 'Secure iris authentication' },
        ],
      },
      {
        category: 'Spatial Features',
        items: [
          { label: 'Spatial Photos', value: 'Capture and view 3D photos' },
          { label: 'Spatial Videos', value: 'Record and playback spatial videos' },
          { label: 'Environments', value: 'Immersive virtual environments' },
          { label: 'Passthrough', value: 'High-quality real-time video' },
        ],
      },
      {
        category: 'Audio',
        items: [
          { label: 'Speakers', value: 'Integrated Audio Pods' },
          { label: 'Spatial Audio', value: 'Personalized Spatial Audio' },
          { label: 'Transparency', value: 'Enhanced transparency mode' },
        ],
      },
      {
        category: 'EyeSight',
        items: [
          { label: 'External Display', value: 'Yes, shows eyes to others' },
          { label: 'Technology', value: 'OLED with lenticular lens' },
        ],
      },
      {
        category: 'Input',
        items: [
          { label: 'Eye Input', value: 'Navigate by looking' },
          { label: 'Hand Input', value: 'Natural gestures' },
          { label: 'Voice Input', value: 'Siri and dictation' },
          { label: 'Keyboard Support', value: 'Bluetooth keyboards' },
        ],
      },
      {
        category: 'Design',
        items: [
          { label: 'Frame Material', value: 'Aluminum alloy with glass front' },
          { label: 'Light Seal', value: 'Improved textile design' },
          { label: 'Headband', value: 'New comfort-focused design' },
          { label: 'Weight', value: '500-550g (significantly lighter)' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Usage Time', value: 'Up to 3 hours general use' },
          { label: 'Video Playback', value: 'Up to 3.5 hours' },
          { label: 'External Battery', value: 'Improved battery with USB-C' },
          { label: 'Power Tethered', value: 'All-day use when plugged in' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'USB-C', value: 'For power and connectivity' },
        ],
      },
    ],
    features: [
      { title: 'M3 + R2 Chips', description: 'Next-generation Apple silicon for even better performance and efficiency.', icon: 'Cpu' },
      { title: 'Lighter Design', description: 'Significantly reduced weight for improved comfort during extended use.', icon: 'Feather' },
      { title: 'Extended Battery', description: 'Up to 3 hours of use on a single charge.', icon: 'Battery' },
      { title: 'Lower Latency', description: 'R2 chip delivers 10ms sensor-to-display latency.', icon: 'Zap' },
      { title: 'Spatial Computing', description: 'Full access to visionOS apps and experiences.', icon: 'Box' },
      { title: 'EyeSight', description: 'Enhanced external display for natural interactions.', icon: 'Eye' },
      { title: 'Natural Input', description: 'Control with eyes, hands, and voice.', icon: 'Hand' },
      { title: 'Space Gray', description: 'Available in a new Space Gray finish.', icon: 'Palette' },
    ],
    whatsInTheBox: [
      'Apple Vision',
      'Comfort Band (S, M, or L)',
      'Light Seal',
      'Light Seal Cushion',
      'External Battery',
      'USB-C Charge Cable',
      'USB-C Power Adapter',
      'Polishing Cloth',
      'Documentation',
    ],
  },
];
