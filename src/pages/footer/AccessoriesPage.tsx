import FooterPage from './FooterPage';
import { Headphones, Watch, Battery, Cable } from 'lucide-react';

export default function AccessoriesPage() {
  const categories = [
    { name: 'Audio', icon: Headphones, items: ['AirPods', 'AirPods Pro', 'AirPods Max', 'EarPods'] },
    { name: 'Cases & Protection', icon: Battery, items: ['iPhone Cases', 'iPad Cases', 'Mac Sleeves', 'Screen Protectors'] },
    { name: 'Watch Bands', icon: Watch, items: ['Sport Band', 'Sport Loop', 'Leather', 'Stainless Steel'] },
    { name: 'Cables & Chargers', icon: Cable, items: ['Lightning', 'USB-C', 'MagSafe', 'Power Adapters'] },
  ];

  return (
    <FooterPage
      title="Accessories"
      subtitle="The perfect companions for your Apple devices."
      content={
        <div className="space-y-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="content-item bg-white rounded-apple p-6 shadow-apple">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-apple-blue" />
                  <h2 className="text-headline font-semibold text-apple-gray-500">{category.name}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="bg-apple-gray-50 px-4 py-2 rounded-full text-body text-apple-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      }
    />
  );
}
