import FooterPage from './FooterPage';
import { Layers } from 'lucide-react';

export default function AppleOnePage() {
  const services = [
    { name: 'Apple Music', description: 'Over 100 million songs' },
    { name: 'Apple TV+', description: 'Award-winning originals' },
    { name: 'Apple Arcade', description: '200+ ad-free games' },
    { name: 'iCloud+', description: '50GB of storage' },
  ];

  return (
    <FooterPage
      title="Apple One"
      subtitle="Bundle up to six Apple services. And enjoy more for less."
      icon={<Layers className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              One subscription. All the services you love.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple One bundles all your favorite Apple services into one simple plan. 
              Enjoy Apple Music, Apple TV+, Apple Arcade, iCloud+, and more with one 
              convenient subscription.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.name} className="bg-apple-gray-50 rounded-apple p-4">
                  <h3 className="text-body font-semibold text-apple-gray-500">{service.name}</h3>
                  <p className="text-caption text-apple-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Choose Your Plan
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-apple p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-headline font-semibold text-apple-gray-500">Individual</h3>
                    <p className="text-body text-apple-gray-300">Apple Music, TV+, Arcade, iCloud+ (50GB)</p>
                  </div>
                  <p className="text-headline font-semibold text-apple-gray-500">$19.95/mo</p>
                </div>
              </div>
              <div className="bg-white rounded-apple p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-headline font-semibold text-apple-gray-500">Family</h3>
                    <p className="text-body text-apple-gray-300">Share with up to 5 family members, iCloud+ (200GB)</p>
                  </div>
                  <p className="text-headline font-semibold text-apple-gray-500">$25.95/mo</p>
                </div>
              </div>
              <div className="bg-white rounded-apple p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-headline font-semibold text-apple-gray-500">Premier</h3>
                    <p className="text-body text-apple-gray-300">Everything plus Fitness+ and News+, iCloud+ (2TB)</p>
                  </div>
                  <p className="text-headline font-semibold text-apple-gray-500">$37.95/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
