import FooterPage from './FooterPage';
import { MapPin } from 'lucide-react';

export default function AirTagPage() {
  return (
    <FooterPage
      title="AirTag"
      subtitle="Lose your knack for losing things."
      icon={<MapPin className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Keep track of your keys, wallet, luggage, backpack, and more.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              AirTag is a super-easy way to keep track of your stuff. Attach one to your keys.
              Put another in your backpack. And just like that, they're on your radar in the Find My app.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Precision Finding</h3>
                <p className="text-caption text-apple-gray-300">
                  See exactly where your AirTag is with Precision Finding.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Find My Network</h3>
                <p className="text-caption text-apple-gray-300">
                  Leverages hundreds of millions of Apple devices.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Pricing
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-apple-gray-50 rounded-apple px-6 py-4">
                <p className="text-body font-semibold text-apple-gray-500">1 Pack</p>
                <p className="text-headline text-apple-gray-500">$29</p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple px-6 py-4">
                <p className="text-body font-semibold text-apple-gray-500">4 Pack</p>
                <p className="text-headline text-apple-gray-500">$99</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
