import type { Product } from './products';

// Apple Watch model images mapping
const watchImages = {
  'watch-se-1': '/watchse1.jpg',
  'watch-se-2': '/watchse2.jpg',
  'watch-series-8': '/watchseries8.jpg',
  'watch-series-9': '/watchseries9.jpg',
  'watch-series-10': '/watchseries10.jpg',
  'watch-ultra-1': '/watchultra1.jpg',
  'watch-ultra-2': '/watchultra2.jpg',
};

export const watchModels: Product[] = [
  // ============================================
  // Apple Watch SE
  // ============================================
  {
    id: 'apple-watch-se-1st-gen',
    name: 'Apple Watch SE (1st generation)',
    shortName: 'Watch SE 1st Gen',
    tagline: 'Heavy on features. Light on price.',
    description: 'Apple Watch SE with all the essentials at an affordable price.',
    fullDescription: 'Apple Watch SE delivers the essential Apple Watch experience — Activity tracking, heart rate monitoring, emergency SOS, and seamless integration with iPhone — at an entry-level price. Features the S5 SiP chip and a stunning Retina display.',
    category: 'Watch',
    basePrice: 249,
    heroImage: watchImages['watch-se-1'],
    colors: [
      { name: 'Gold Aluminum', value: '#d4af37', images: [watchImages['watch-se-1']] },
      { name: 'Silver Aluminum', value: '#c0c0c0', images: [watchImages['watch-se-1']] },
      { name: 'Space Gray Aluminum', value: '#535150', images: [watchImages['watch-se-1']] },
    ],
    storageOptions: [
      { size: '32GB', priceAdjustment: 0 },
    ],
    variants: [
      { id: 'watch-se-1-40-gold', name: 'Apple Watch SE 1st Gen 40mm Gold', color: { name: 'Gold Aluminum', value: '#d4af37' }, size: '40mm', price: 249, availability: 'in-stock', image: watchImages['watch-se-1'] },
      { id: 'watch-se-1-44-gold', name: 'Apple Watch SE 1st Gen 44mm Gold', color: { name: 'Gold Aluminum', value: '#d4af37' }, size: '44mm', price: 279, availability: 'in-stock', image: watchImages['watch-se-1'] },
      { id: 'watch-se-1-40-silver', name: 'Apple Watch SE 1st Gen 40mm Silver', color: { name: 'Silver Aluminum', value: '#c0c0c0' }, size: '40mm', price: 249, availability: 'in-stock', image: watchImages['watch-se-1'] },
      { id: 'watch-se-1-40-spacegray', name: 'Apple Watch SE 1st Gen 40mm Space Gray', color: { name: 'Space Gray Aluminum', value: '#535150' }, size: '40mm', price: 249, availability: 'in-stock', image: watchImages['watch-se-1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Type', value: 'Retina LTPO OLED display' },
          { label: 'Size (40mm)', value: '324 x 394 pixels' },
          { label: 'Size (44mm)', value: '368 x 448 pixels' },
          { label: 'Brightness', value: '1000 nits max' },
          { label: 'Always-On', value: 'No' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S5 SiP with 64-bit dual-core processor' },
          { label: 'Storage', value: '32GB' },
          { label: 'W3 Chip', value: 'Yes, for wireless connectivity' },
        ],
      },
      {
        category: 'Health & Fitness',
        items: [
          { label: 'Heart Rate', value: 'Second-generation optical heart sensor' },
          { label: 'Accelerometer', value: 'Up to 32 g-force, fall detection' },
          { label: 'Gyroscope', value: 'Yes' },
          { label: 'Compass', value: 'Yes' },
          { label: 'Altimeter', value: 'Always-on altimeter' },
          { label: 'Water Resistance', value: '50 meters' },
        ],
      },
      {
        category: 'Safety Features',
        items: [
          { label: 'Emergency SOS', value: 'Yes' },
          { label: 'International Emergency Calling', value: 'Yes (GPS + Cellular models)' },
          { label: 'Fall Detection', value: 'Yes' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Charging', value: 'Magnetic charging cable' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: '802.11b/g/n 2.4GHz' },
          { label: 'Bluetooth', value: 'Bluetooth 5.0' },
          { label: 'Cellular', value: 'LTE and UMTS (cellular models)' },
          { label: 'GPS', value: 'GPS and GLONASS' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Case Material', value: 'Aluminum' },
          { label: '40mm Dimensions', value: '40 x 34 x 10.7mm' },
          { label: '44mm Dimensions', value: '44 x 38 x 10.7mm' },
          { label: '40mm Weight', value: '30.49g (GPS), 30.68g (Cellular)' },
          { label: '44mm Weight', value: '36.20g (GPS), 36.36g (Cellular)' },
        ],
      },
    ],
    features: [
      { title: 'Essential Health', description: 'Heart rate monitoring, fall detection, and emergency SOS.', icon: 'Heart' },
      { title: 'Fitness Tracking', description: 'Track your workouts and close your Activity rings.', icon: 'Activity' },
      { title: 'Swimproof', description: '50m water resistance for pool and ocean swimming.', icon: 'Droplets' },
      { title: 'Family Setup', description: 'Set up a watch for family members without an iPhone.', icon: 'Users' },
    ],
    whatsInTheBox: ['Apple Watch SE', 'Band', 'Magnetic Charging Cable (1m)', 'Documentation'],
  },

  {
    id: 'apple-watch-se-2nd-gen',
    name: 'Apple Watch SE (2nd generation)',
    shortName: 'Watch SE 2',
    tagline: 'A great deal to ask for.',
    description: 'Apple Watch SE with S8 chip, Crash Detection, and enhanced workout tracking.',
    fullDescription: 'Apple Watch SE (2nd generation) is packed with features at an amazing value. Powered by the S8 SiP for fast performance, it includes Crash Detection, enhanced workout types, and the redesigned Compass app. All in a swimproof, durable design.',
    category: 'Watch',
    basePrice: 249,
    heroImage: watchImages['watch-se-2'],
    colors: [
      { name: 'Midnight Aluminum', value: '#2e3642', images: [watchImages['watch-se-2']] },
      { name: 'Starlight Aluminum', value: '#f5e6d3', images: [watchImages['watch-se-2']] },
      { name: 'Silver Aluminum', value: '#c0c0c0', images: [watchImages['watch-se-2']] },
    ],
    storageOptions: [
      { size: '32GB', priceAdjustment: 0 },
    ],
    variants: [
      { id: 'watch-se-2-40-midnight', name: 'Apple Watch SE 2 40mm Midnight', color: { name: 'Midnight Aluminum', value: '#2e3642' }, size: '40mm', price: 249, availability: 'in-stock', image: watchImages['watch-se-2'] },
      { id: 'watch-se-2-44-midnight', name: 'Apple Watch SE 2 44mm Midnight', color: { name: 'Midnight Aluminum', value: '#2e3642' }, size: '44mm', price: 279, availability: 'in-stock', image: watchImages['watch-se-2'] },
      { id: 'watch-se-2-40-starlight', name: 'Apple Watch SE 2 40mm Starlight', color: { name: 'Starlight Aluminum', value: '#f5e6d3' }, size: '40mm', price: 249, availability: 'in-stock', image: watchImages['watch-se-2'] },
      { id: 'watch-se-2-40-silver', name: 'Apple Watch SE 2 40mm Silver', color: { name: 'Silver Aluminum', value: '#c0c0c0' }, size: '40mm', price: 249, availability: 'in-stock', image: watchImages['watch-se-2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Type', value: 'Retina LTPO OLED display' },
          { label: 'Size (40mm)', value: '324 x 394 pixels' },
          { label: 'Size (44mm)', value: '368 x 448 pixels' },
          { label: 'Brightness', value: '1000 nits max' },
          { label: 'Always-On', value: 'No' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S8 SiP with 64-bit dual-core processor' },
          { label: 'Storage', value: '32GB' },
          { label: 'Performance', value: '20% faster than S5' },
        ],
      },
      {
        category: 'Health & Fitness',
        items: [
          { label: 'Heart Rate', value: 'Second-generation optical heart sensor' },
          { label: 'Heart Notifications', value: 'High and low heart rate, irregular rhythm' },
          { label: 'Sleep Tracking', value: 'Yes, with sleep stages' },
          { label: 'Workouts', value: 'Advanced running metrics, custom workouts' },
          { label: 'Water Resistance', value: '50 meters' },
        ],
      },
      {
        category: 'Safety Features',
        items: [
          { label: 'Crash Detection', value: 'Yes' },
          { label: 'Fall Detection', value: 'Yes' },
          { label: 'Emergency SOS', value: 'Yes' },
          { label: 'International Emergency Calling', value: 'Yes' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Low Power Mode', value: 'Up to 36 hours' },
          { label: 'Charging', value: 'Fast charging (80% in 45 min)' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: '802.11b/g/n 2.4GHz and 5GHz' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Ultra Wideband', value: 'Yes, for Precision Finding' },
        ],
      },
      {
        category: 'Design & Dimensions',
        items: [
          { label: 'Case Material', value: '100% recycled aluminum' },
          { label: '40mm Case', value: '40 x 34 x 10.7mm' },
          { label: '44mm Case', value: '44 x 38 x 10.7mm' },
          { label: 'Back Crystal', value: 'Nylon composite (color-matched)' },
        ],
      },
    ],
    features: [
      { title: 'S8 Chip', description: 'Same processor as Apple Watch Series 8.', icon: 'Cpu' },
      { title: 'Crash Detection', description: 'Detects severe car crashes and calls for help.', icon: 'AlertTriangle' },
      { title: 'Enhanced Compass', description: 'Waypoints and Backtrack to retrace your steps.', icon: 'Compass' },
      { title: 'Carbon Neutral', description: 'Available in carbon neutral configurations.', icon: 'Leaf' },
    ],
    whatsInTheBox: ['Apple Watch SE', 'Band', 'Magnetic Charging Cable (1m)', 'Documentation'],
  },

  // ============================================
  // Apple Watch Series
  // ============================================
  {
    id: 'apple-watch-series-8',
    name: 'Apple Watch Series 8',
    shortName: 'Watch Series 8',
    tagline: 'A healthy leap ahead.',
    description: 'Apple Watch Series 8 with temperature sensing, Crash Detection, and Always-On display.',
    fullDescription: 'Apple Watch Series 8 features new temperature sensing capabilities for insights into your overall health and cycle tracking. It includes Crash Detection, an Always-On Retina display, and robust safety features in a refined design.',
    category: 'Watch',
    basePrice: 399,
    heroImage: watchImages['watch-series-8'],
    colors: [
      { name: 'Midnight', value: '#2e3642', images: [watchImages['watch-series-8']] },
      { name: 'Starlight', value: '#f5e6d3', images: [watchImages['watch-series-8']] },
      { name: 'Silver', value: '#c0c0c0', images: [watchImages['watch-series-8']] },
      { name: '(PRODUCT)RED', value: '#ff0000', images: [watchImages['watch-series-8']] },
    ],
    storageOptions: [
      { size: '32GB', priceAdjustment: 0 },
    ],
    variants: [
      { id: 'watch-s8-41-midnight', name: 'Apple Watch Series 8 41mm Midnight', color: { name: 'Midnight', value: '#2e3642' }, size: '41mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-8'] },
      { id: 'watch-s8-45-midnight', name: 'Apple Watch Series 8 45mm Midnight', color: { name: 'Midnight', value: '#2e3642' }, size: '45mm', price: 429, availability: 'in-stock', image: watchImages['watch-series-8'] },
      { id: 'watch-s8-41-starlight', name: 'Apple Watch Series 8 41mm Starlight', color: { name: 'Starlight', value: '#f5e6d3' }, size: '41mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-8'] },
      { id: 'watch-s8-41-red', name: 'Apple Watch Series 8 41mm (PRODUCT)RED', color: { name: '(PRODUCT)RED', value: '#ff0000' }, size: '41mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-8'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Type', value: 'Always-On Retina LTPO OLED display' },
          { label: 'Size (41mm)', value: '352 x 430 pixels, 904 sq mm' },
          { label: 'Size (45mm)', value: '396 x 484 pixels, 1143 sq mm' },
          { label: 'Brightness', value: '1000 nits max' },
          { label: 'Border', value: 'Nearly 20% larger than Series 6' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S8 SiP with 64-bit dual-core processor' },
          { label: 'Storage', value: '32GB' },
          { label: 'U1 Chip', value: 'Yes, Ultra Wideband' },
        ],
      },
      {
        category: 'Health & Fitness',
        items: [
          { label: 'Temperature Sensing', value: 'Two sensors for more accurate readings' },
          { label: 'Blood Oxygen', value: 'Blood Oxygen app and sensor' },
          { label: 'ECG', value: 'Electrical heart sensor (ECG app)' },
          { label: 'Heart Rate', value: 'Third-generation optical heart sensor' },
          { label: 'Sleep Tracking', value: 'With sleep stages' },
          { label: 'Cycle Tracking', value: 'Retrospective ovulation estimates' },
          { label: 'Water Resistance', value: '50 meters' },
        ],
      },
      {
        category: 'Safety Features',
        items: [
          { label: 'Crash Detection', value: 'Detects severe car crashes' },
          { label: 'Fall Detection', value: 'Yes' },
          { label: 'Emergency SOS', value: 'Yes' },
          { label: 'International Emergency Calling', value: 'Yes' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Low Power Mode', value: 'Up to 36 hours' },
          { label: 'Fast Charging', value: '0-80% in about 45 minutes' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: '802.11b/g/n 2.4GHz and 5GHz' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'NFC', value: 'Yes, for Apple Pay' },
        ],
      },
      {
        category: 'Design',
        items: [
          { label: 'Case Material', value: 'Aluminum or Stainless Steel' },
          { label: 'Front Crystal', value: 'Ion-X glass (Aluminum) or Sapphire (Steel)' },
          { label: 'Dust Resistance', value: 'IP6X' },
        ],
      },
    ],
    features: [
      { title: 'Temperature Sensing', description: 'Track temperature changes and get cycle insights.', icon: 'Thermometer' },
      { title: 'Crash Detection', description: 'Automatically detects severe car crashes.', icon: 'AlertTriangle' },
      { title: 'Always-On Display', description: 'See your watch face even when wrist is down.', icon: 'Monitor' },
      { title: 'Blood Oxygen', description: 'Measure your blood oxygen anytime.', icon: 'Activity' },
      { title: 'ECG App', description: 'Take an ECG right from your wrist.', icon: 'Heart' },
    ],
    whatsInTheBox: ['Apple Watch Series 8', 'Band', 'Magnetic Fast Charger to USB-C Cable (1m)', 'Documentation'],
  },

  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Series 9',
    shortName: 'Watch Series 9',
    tagline: 'Smarter. Brighter. Mightier.',
    description: 'Apple Watch Series 9 with S9 chip, Double Tap gesture, and 2000 nits brightness.',
    fullDescription: 'Apple Watch Series 9 features the all-new S9 SiP for a superbright display at 2000 nits, the magical Double Tap gesture to control your watch without touching it, Precision Finding for iPhone, and on-device Siri for faster responses.',
    category: 'Watch',
    basePrice: 399,
    heroImage: watchImages['watch-series-9'],
    colors: [
      { name: 'Midnight', value: '#2e3642', images: [watchImages['watch-series-9']] },
      { name: 'Starlight', value: '#f5e6d3', images: [watchImages['watch-series-9']] },
      { name: 'Silver', value: '#c0c0c0', images: [watchImages['watch-series-9']] },
      { name: 'Pink', value: '#f5c4c6', images: [watchImages['watch-series-9']] },
      { name: '(PRODUCT)RED', value: '#ff0000', images: [watchImages['watch-series-9']] },
    ],
    storageOptions: [
      { size: '64GB', priceAdjustment: 0 },
    ],
    variants: [
      { id: 'watch-s9-41-midnight', name: 'Apple Watch Series 9 41mm Midnight', color: { name: 'Midnight', value: '#2e3642' }, size: '41mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-9'] },
      { id: 'watch-s9-45-midnight', name: 'Apple Watch Series 9 45mm Midnight', color: { name: 'Midnight', value: '#2e3642' }, size: '45mm', price: 429, availability: 'in-stock', image: watchImages['watch-series-9'] },
      { id: 'watch-s9-41-starlight', name: 'Apple Watch Series 9 41mm Starlight', color: { name: 'Starlight', value: '#f5e6d3' }, size: '41mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-9'] },
      { id: 'watch-s9-41-pink', name: 'Apple Watch Series 9 41mm Pink', color: { name: 'Pink', value: '#f5c4c6' }, size: '41mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-9'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Type', value: 'Always-On Retina LTPO OLED display' },
          { label: 'Brightness', value: 'Up to 2000 nits peak outdoor' },
          { label: 'Minimum', value: '1 nit for dark rooms' },
          { label: 'Size (41mm)', value: '352 x 430 pixels' },
          { label: 'Size (45mm)', value: '396 x 484 pixels' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S9 SiP with 64-bit dual-core processor' },
          { label: 'Neural Engine', value: '4-core Neural Engine (2x faster ML)' },
          { label: 'Storage', value: '64GB' },
          { label: 'On-Device Siri', value: 'Process requests without internet' },
        ],
      },
      {
        category: 'Health & Fitness',
        items: [
          { label: 'Temperature Sensing', value: 'Yes' },
          { label: 'Blood Oxygen', value: 'Yes' },
          { label: 'ECG', value: 'Yes' },
          { label: 'Heart Rate', value: 'Third-generation optical sensor' },
          { label: 'Mental Health', value: 'Mindfulness and mood logging' },
          { label: 'Water Resistance', value: '50 meters' },
        ],
      },
      {
        category: 'New Features',
        items: [
          { label: 'Double Tap', value: 'Control without touching the display' },
          { label: 'Precision Finding', value: 'Find your iPhone with directions' },
          { label: 'Name Drop', value: 'Share contact info with a gesture' },
          { label: 'FaceTime Audio', value: 'Initiate calls directly from Watch' },
        ],
      },
      {
        category: 'Safety',
        items: [
          { label: 'Crash Detection', value: 'Yes' },
          { label: 'Fall Detection', value: 'Yes' },
          { label: 'Emergency SOS', value: 'Yes' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Low Power Mode', value: 'Up to 36 hours' },
          { label: 'Fast Charging', value: '0-80% in 45 minutes' },
        ],
      },
      {
        category: 'Design',
        items: [
          { label: 'Case Material', value: 'Aluminum or Stainless Steel' },
          { label: 'Front Crystal', value: 'Ion-X or Sapphire Crystal' },
          { label: 'Carbon Neutral', value: 'Available configurations' },
        ],
      },
    ],
    features: [
      { title: 'S9 Chip', description: '60% faster GPU, 2x faster Neural Engine.', icon: 'Cpu' },
      { title: 'Double Tap', description: 'Control your watch with a simple gesture.', icon: 'Hand' },
      { title: '2000 Nits', description: '2x brighter than Series 8 for outdoor visibility.', icon: 'Sun' },
      { title: 'Precision Finding', description: 'Locate your iPhone with distance and direction.', icon: 'MapPin' },
      { title: 'On-Device Siri', description: 'Faster, more private Siri processing.', icon: 'Mic' },
    ],
    whatsInTheBox: ['Apple Watch Series 9', 'Band', 'Magnetic Fast Charger to USB-C Cable (1m)', 'Documentation'],
  },

  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    shortName: 'Watch Series 10',
    tagline: 'Thinner. Bigger. Mightier.',
    description: 'The thinnest Apple Watch ever with the biggest display and advanced health features.',
    fullDescription: 'Apple Watch Series 10 is the thinnest Apple Watch ever with the biggest, most advanced display. Features the S10 chip, sleep apnea detection, enhanced depth gauge, and up to 30% faster charging. Available in aluminum and titanium.',
    category: 'Watch',
    basePrice: 399,
    heroImage: watchImages['watch-series-10'],
    isNew: true,
    colors: [
      { name: 'Jet Black', value: '#1a1a1a', images: [watchImages['watch-series-10']] },
      { name: 'Rose Gold', value: '#b76e79', images: [watchImages['watch-series-10']] },
      { name: 'Silver', value: '#c0c0c0', images: [watchImages['watch-series-10']] },
    ],
    storageOptions: [
      { size: '64GB', priceAdjustment: 0 },
    ],
    variants: [
      { id: 'watch-s10-42-jetblack', name: 'Apple Watch Series 10 42mm Jet Black', color: { name: 'Jet Black', value: '#1a1a1a' }, size: '42mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-10'] },
      { id: 'watch-s10-46-jetblack', name: 'Apple Watch Series 10 46mm Jet Black', color: { name: 'Jet Black', value: '#1a1a1a' }, size: '46mm', price: 429, availability: 'in-stock', image: watchImages['watch-series-10'] },
      { id: 'watch-s10-42-rosegold', name: 'Apple Watch Series 10 42mm Rose Gold', color: { name: 'Rose Gold', value: '#b76e79' }, size: '42mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-10'] },
      { id: 'watch-s10-42-silver', name: 'Apple Watch Series 10 42mm Silver', color: { name: 'Silver', value: '#c0c0c0' }, size: '42mm', price: 399, availability: 'in-stock', image: watchImages['watch-series-10'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Type', value: 'Always-On Wide-Angle OLED display' },
          { label: 'Technology', value: 'LTPO3 for ultra-low power' },
          { label: 'Size', value: 'Up to 30% larger than Series 4' },
          { label: 'Brightness', value: 'Up to 2000 nits peak' },
          { label: 'Wide Angle', value: '40% more visible at an angle' },
          { label: '46mm Display', value: '416 x 496 pixels, 1220 sq mm' },
          { label: '42mm Display', value: '374 x 446 pixels, 989 sq mm' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S10 SiP with 64-bit dual-core processor' },
          { label: 'Neural Engine', value: '4-core Neural Engine' },
          { label: 'Storage', value: '64GB' },
          { label: 'Performance', value: 'Faster and more efficient than S9' },
        ],
      },
      {
        category: 'Design',
        items: [
          { label: 'Thickness', value: '9.7mm (thinnest Apple Watch ever)' },
          { label: 'Weight (42mm)', value: '29.3g aluminum' },
          { label: 'Weight (46mm)', value: '35.3g aluminum' },
          { label: 'Case Materials', value: 'Aluminum or Titanium' },
          { label: 'Titanium Colors', value: 'Natural, Gold, Slate' },
        ],
      },
      {
        category: 'Health & Fitness',
        items: [
          { label: 'Sleep Apnea Detection', value: 'FDA-cleared notification' },
          { label: 'Depth Gauge', value: 'Water temperature and depth' },
          { label: 'Water Resistance', value: '50 meters, diving certified to 6m' },
          { label: 'Temperature Sensing', value: 'Yes' },
          { label: 'Blood Oxygen', value: 'Yes' },
          { label: 'ECG', value: 'Yes' },
          { label: 'Heart Rate', value: 'Fourth-generation optical sensor' },
        ],
      },
      {
        category: 'New Features',
        items: [
          { label: 'Double Tap', value: 'Yes' },
          { label: 'Speaker Playback', value: 'Play music and podcasts from speaker' },
          { label: 'Tides App', value: 'Check tidal conditions' },
          { label: 'Water Temperature', value: 'Displays in water activities' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Battery Life', value: 'Up to 18 hours' },
          { label: 'Low Power Mode', value: 'Up to 36 hours' },
          { label: 'Fast Charging', value: '80% in 30 minutes (30% faster)' },
          { label: '8 Hours Sleep Tracking', value: 'In just 8 minutes of charge' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: 'Wi-Fi 4 (2.4GHz and 5GHz)' },
          { label: 'Bluetooth', value: 'Bluetooth 5.3' },
          { label: 'Ultra Wideband', value: 'Second generation (U2)' },
          { label: 'NFC', value: 'Yes' },
        ],
      },
    ],
    features: [
      { title: 'Thinnest Ever', description: 'At just 9.7mm, the thinnest Apple Watch yet.', icon: 'Layers' },
      { title: 'Biggest Display', description: 'Up to 30% more screen area.', icon: 'Monitor' },
      { title: 'Sleep Apnea Detection', description: 'FDA-cleared monitoring while you sleep.', icon: 'Moon' },
      { title: 'S10 Chip', description: 'Faster, more efficient performance.', icon: 'Cpu' },
      { title: 'Faster Charging', description: '30% faster than Series 9.', icon: 'Zap' },
      { title: 'Titanium Option', description: 'Lightweight and durable titanium cases.', icon: 'Shield' },
    ],
    whatsInTheBox: ['Apple Watch Series 10', 'Band', 'Magnetic Fast Charger to USB-C Cable (1m)', 'Documentation'],
  },

  // ============================================
  // Apple Watch Ultra
  // ============================================
  {
    id: 'apple-watch-ultra-1',
    name: 'Apple Watch Ultra',
    shortName: 'Watch Ultra',
    tagline: 'Adventure awaits.',
    description: 'The most rugged and capable Apple Watch for extreme athletes and adventurers.',
    fullDescription: 'Apple Watch Ultra is designed for endurance athletes, outdoor adventurers, and water sports enthusiasts. Features a 49mm titanium case, precision dual-frequency GPS, up to 60 hours of battery life, and 100m water resistance for recreational diving.',
    category: 'Watch',
    basePrice: 799,
    heroImage: watchImages['watch-ultra-1'],
    colors: [
      { name: 'Natural Titanium', value: '#9a9a9a', images: [watchImages['watch-ultra-1']] },
    ],
    storageOptions: [
      { size: '32GB', priceAdjustment: 0 },
    ],
    variants: [
      { id: 'watch-ultra-1-titanium', name: 'Apple Watch Ultra 49mm Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, size: '49mm', price: 799, availability: 'in-stock', image: watchImages['watch-ultra-1'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '49mm case with 1.92-inch display' },
          { label: 'Type', value: 'Always-On Retina LTPO OLED' },
          { label: 'Resolution', value: '502 x 410 pixels' },
          { label: 'Brightness', value: '2000 nits max' },
          { label: 'Features', value: 'Flat sapphire front crystal' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S8 SiP with 64-bit dual-core processor' },
          { label: 'Storage', value: '32GB' },
          { label: 'Sensors', value: 'Depth gauge, water temperature sensor' },
        ],
      },
      {
        category: 'Design',
        items: [
          { label: 'Case Material', value: 'Aerospace-grade titanium' },
          { label: 'Case Size', value: '49 x 44 x 14.4mm' },
          { label: 'Weight', value: '61.3g (without band)' },
          { label: 'Front Crystal', value: 'Flat sapphire crystal' },
          { label: 'Crown Guard', value: 'Protects Digital Crown' },
          { label: 'Action Button', value: 'Customizable orange button' },
        ],
      },
      {
        category: 'Water & Durability',
        items: [
          { label: 'Water Resistance', value: '100 meters' },
          { label: 'Dive Certified', value: 'EN13319 for recreational diving to 40m' },
          { label: 'Dust Resistance', value: 'IP6X certified' },
          { label: 'Operating Temp', value: '-20°C to 55°C' },
          { label: 'MIL-STD 810H', value: 'Tested for extreme conditions' },
        ],
      },
      {
        category: 'GPS & Navigation',
        items: [
          { label: 'GPS', value: 'Precision dual-frequency GPS (L1 and L5)' },
          { label: 'Compass', value: 'Redesigned app with Waypoints and Backtrack' },
          { label: 'Depth App', value: 'Real-time depth and water temperature' },
          { label: 'Siren', value: '86-decibel siren for emergencies' },
        ],
      },
      {
        category: 'Health & Fitness',
        items: [
          { label: 'Temperature Sensing', value: 'Yes' },
          { label: 'Blood Oxygen', value: 'Yes' },
          { label: 'ECG', value: 'Yes' },
          { label: 'Heart Rate', value: 'Third-generation optical sensor' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Normal Use', value: 'Up to 36 hours' },
          { label: 'Low Power Mode', value: 'Up to 60 hours' },
          { label: 'Outdoor Workout', value: 'Up to 12 hours GPS' },
          { label: 'Fast Charging', value: 'Yes' },
        ],
      },
    ],
    features: [
      { title: 'Titanium Build', description: 'Aerospace-grade titanium case for maximum durability.', icon: 'Shield' },
      { title: 'Dual-Frequency GPS', description: 'L1 and L5 for the most accurate location tracking.', icon: 'MapPin' },
      { title: '100m Water Resistant', description: 'Dive certified to 40 meters for scuba diving.', icon: 'Droplets' },
      { title: '86dB Siren', description: 'Emergency siren audible up to 180 meters away.', icon: 'Bell' },
      { title: 'Action Button', description: 'Customizable button for instant access to features.', icon: 'Zap' },
      { title: '60-Hour Battery', description: 'Up to 60 hours in Low Power Mode.', icon: 'Battery' },
    ],
    whatsInTheBox: ['Apple Watch Ultra', 'Band', 'Magnetic Fast Charger to USB-C Cable (1m)', 'Documentation'],
  },

  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    shortName: 'Watch Ultra 2',
    tagline: 'Next level adventure.',
    description: 'The most powerful Apple Watch Ultra with S9 chip and 3000 nits brightness.',
    fullDescription: 'Apple Watch Ultra 2 is the ultimate tool for athletes and adventurers. Powered by the S9 chip with Double Tap gesture, featuring a 3000 nit display (the brightest Apple display ever), precision GPS, and 72-hour battery life in Low Power Mode.',
    category: 'Watch',
    basePrice: 799,
    heroImage: watchImages['watch-ultra-2'],
    isNew: true,
    colors: [
      { name: 'Natural Titanium', value: '#9a9a9a', images: [watchImages['watch-ultra-2']] },
      { name: 'Black Titanium', value: '#1a1a1a', images: [watchImages['watch-ultra-2']] },
    ],
    storageOptions: [
      { size: '64GB', priceAdjustment: 0 },
    ],
    variants: [
      { id: 'watch-ultra-2-natural', name: 'Apple Watch Ultra 2 Natural Titanium', color: { name: 'Natural Titanium', value: '#9a9a9a' }, size: '49mm', price: 799, availability: 'in-stock', image: watchImages['watch-ultra-2'] },
      { id: 'watch-ultra-2-black', name: 'Apple Watch Ultra 2 Black Titanium', color: { name: 'Black Titanium', value: '#1a1a1a' }, size: '49mm', price: 799, availability: 'in-stock', image: watchImages['watch-ultra-2'] },
    ],
    specs: [
      {
        category: 'Display',
        items: [
          { label: 'Size', value: '49mm case with 1.92-inch display' },
          { label: 'Type', value: 'Always-On Retina LTPO OLED' },
          { label: 'Resolution', value: '502 x 410 pixels' },
          { label: 'Brightness', value: '3000 nits max (brightest Apple display ever)' },
          { label: 'Minimum', value: '1 nit' },
        ],
      },
      {
        category: 'Chip',
        items: [
          { label: 'Processor', value: 'S9 SiP with 64-bit dual-core processor' },
          { label: 'Neural Engine', value: '4-core Neural Engine' },
          { label: 'Storage', value: '64GB' },
          { label: 'On-Device Siri', value: 'Yes' },
          { label: 'Double Tap', value: 'Yes' },
        ],
      },
      {
        category: 'Design',
        items: [
          { label: 'Case Material', value: 'Grade 5 titanium (95% recycled)' },
          { label: 'Case Size', value: '49 x 44 x 14.4mm' },
          { label: 'Weight', value: '61.4g (without band)' },
          { label: 'Front Crystal', value: 'Flat sapphire crystal' },
          { label: 'Customizable Action Button', value: 'Yes, now in black' },
        ],
      },
      {
        category: 'Water & Durability',
        items: [
          { label: 'Water Resistance', value: '100 meters' },
          { label: 'Dive Certified', value: 'EN13319 to 40m' },
          { label: 'Dust Resistance', value: 'IP6X' },
          { label: 'Operating Altitude', value: 'Tested from -500m to 9000m' },
        ],
      },
      {
        category: 'GPS & Navigation',
        items: [
          { label: 'GPS', value: 'Precision dual-frequency GPS (L1 and L5)' },
          { label: 'Accuracy', value: 'Most accurate GPS in any Apple Watch' },
          { label: 'Compass', value: 'With Waypoints, Backtrack, and elevation' },
          { label: 'Siren', value: '86dB siren' },
        ],
      },
      {
        category: 'Health & Fitness',
        items: [
          { label: 'Temperature Sensing', value: 'Yes' },
          { label: 'Blood Oxygen', value: 'Yes' },
          { label: 'ECG', value: 'Yes' },
          { label: 'Heart Rate', value: 'Third-generation optical sensor' },
          { label: 'Crash Detection', value: 'Yes' },
          { label: 'Fall Detection', value: 'Yes' },
        ],
      },
      {
        category: 'Battery',
        items: [
          { label: 'Normal Use', value: 'Up to 36 hours' },
          { label: 'Low Power Mode', value: 'Up to 72 hours' },
          { label: 'Outdoor Workout', value: 'Up to 17 hours GPS' },
          { label: 'Fast Charging', value: 'Yes' },
        ],
      },
      {
        category: 'Connectivity',
        items: [
          { label: 'Wi-Fi', value: '802.11b/g/n 2.4GHz and 5GHz' },
          { label: 'Bluetooth', value: '5.3' },
          { label: 'Ultra Wideband', value: 'Second generation (U2)' },
        ],
      },
    ],
    features: [
      { title: '3000 Nits', description: 'The brightest Apple display ever — 50% brighter than Ultra.', icon: 'Sun' },
      { title: 'S9 Chip', description: 'Powerful processor with on-device Siri.', icon: 'Cpu' },
      { title: 'Double Tap', description: 'Control without touching the display.', icon: 'Hand' },
      { title: '72-Hour Battery', description: 'Extended battery life in Low Power Mode.', icon: 'Battery' },
      { title: 'Black Titanium', description: 'New dark finish for the titanium case.', icon: 'Shield' },
      { title: 'Precision Finding', description: 'Find your iPhone with distance and direction.', icon: 'MapPin' },
    ],
    whatsInTheBox: ['Apple Watch Ultra 2', 'Band', 'Magnetic Fast Charger to USB-C Cable (1m)', 'Documentation'],
  },
];
