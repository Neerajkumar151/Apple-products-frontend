import FooterPage from './FooterPage';
import { Leaf, Recycle, Sun } from 'lucide-react';

export default function EnvironmentPage() {
  return (
    <FooterPage
      title="Environment"
      subtitle="We're carbon neutral. And by 2030, every product you love will be too."
      icon={<Leaf className="w-16 h-16 text-apple-green mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Our 2030 Promise
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple is already carbon neutral for our corporate operations. By 2030, 
              every Apple device sold will have net zero climate impact. We're transforming 
              how we design, manufacture, and ship our products.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Recycle className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Recycled Materials</h3>
                <p className="text-caption text-apple-gray-300">
                  More recycled content in every product.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Sun className="w-10 h-10 text-apple-yellow mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Clean Energy</h3>
                <p className="text-caption text-apple-gray-300">
                  100% renewable electricity.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Leaf className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Carbon Removal</h3>
                <p className="text-caption text-apple-gray-300">
                  Investing in forests and nature.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-gradient-to-br from-apple-green to-emerald-600 text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Our Progress
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-body">Corporate Operations</span>
                <span className="text-headline font-semibold">Carbon Neutral</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-body">Recycled Aluminum</span>
                <span className="text-headline font-semibold">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-body">Renewable Energy</span>
                <span className="text-headline font-semibold">100%</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
