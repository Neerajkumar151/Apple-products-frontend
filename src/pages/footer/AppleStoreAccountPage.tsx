import FooterPage from './FooterPage';
import { ShoppingBag, Package, CreditCard } from 'lucide-react';

export default function AppleStoreAccountPage() {
  return (
    <FooterPage
      title="Apple Store Account"
      subtitle="Manage your orders and preferences."
      icon={<ShoppingBag className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Everything about your Apple Store purchases.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              View your order history, track shipments, manage returns, and update your 
              payment and shipping information. Your Apple Store account makes it easy 
              to keep track of everything.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Package className="w-10 h-10 text-apple-blue mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Orders</h3>
                <p className="text-caption text-apple-gray-300">
                  View and track your orders.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <CreditCard className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Payments</h3>
                <p className="text-caption text-apple-gray-300">
                  Manage payment methods.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <ShoppingBag className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Returns</h3>
                <p className="text-caption text-apple-gray-300">
                  Start or track a return.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Account Features
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Order Status</h3>
                <p className="text-body text-apple-gray-300">
                  Track your orders in real-time from processing to delivery.
                </p>
              </div>
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Saved Items</h3>
                <p className="text-body text-apple-gray-300">
                  Save your favorite products for quick access later.
                </p>
              </div>
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Personalization</h3>
                <p className="text-body text-apple-gray-300">
                  Get personalized product recommendations based on your interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
