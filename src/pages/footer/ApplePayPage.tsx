import FooterPage from './FooterPage';
import { Smartphone, Shield, Zap } from 'lucide-react';

export default function ApplePayPage() {
  return (
    <FooterPage
      title="Apple Pay"
      subtitle="The safer, more private way to pay."
      icon={<Smartphone className="w-16 h-16 text-apple-black mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Pay with just a touch or a glance.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple Pay is the easier, safer way to pay in stores, in apps, and on the web. 
              Use it on your iPhone, Apple Watch, iPad, and Mac. No need to carry physical cards 
              or cash.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Zap className="w-10 h-10 text-apple-blue mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Fast</h3>
                <p className="text-caption text-apple-gray-300">
                  Check out with a single touch.
                </p>
              </div>
              <div className="text-center p-6">
                <Shield className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Secure</h3>
                <p className="text-caption text-apple-gray-300">
                  Your card numbers are never shared.
                </p>
              </div>
              <div className="text-center p-6">
                <Smartphone className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Private</h3>
                <p className="text-caption text-apple-gray-300">
                  Apple doesn't track your purchases.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Where to Use Apple Pay
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">In Stores</h3>
                <p className="text-caption text-apple-gray-300">
                  Look for the contactless payment symbol or Apple Pay mark at checkout.
                </p>
              </div>
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">In Apps</h3>
                <p className="text-caption text-apple-gray-300">
                  Pay with Apple Pay in your favorite apps without entering card details.
                </p>
              </div>
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">On the Web</h3>
                <p className="text-caption text-apple-gray-300">
                  Use Apple Pay in Safari on iPhone, iPad, and Mac.
                </p>
              </div>
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">On Transit</h3>
                <p className="text-caption text-apple-gray-300">
                  Pay for rides and passes in select cities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
