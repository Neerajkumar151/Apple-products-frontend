import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail, ShoppingBag, Printer } from 'lucide-react';

export default function OrderConfirmationPage() {
  // Generate order number once
  const orderNumber = useMemo(() => {
    const prefix = 'APL';
    const timestamp = Date.now().toString(36).toUpperCase().slice(-6);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }, []);

  // Calculate delivery dates
  const deliveryDates = useMemo(() => {
    const start = new Date();
    start.setDate(start.getDate() + 5);
    const end = new Date();
    end.setDate(end.getDate() + 7);
    return { start, end };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-apple-gray-50 pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>

        <h1 className="text-display-md font-semibold text-apple-gray-500 mb-4 text-center">
          Thank you for your order!
        </h1>
        <p className="text-body-lg text-apple-gray-300 mb-8 text-center">
          Your order has been confirmed and will be shipped soon.
        </p>

        {/* Order Details */}
        <div className="bg-white rounded-apple p-8 shadow-apple mb-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-body text-apple-gray-300">Order Number</span>
            <span className="text-headline font-semibold text-apple-gray-500 font-mono">
              {orderNumber}
            </span>
          </div>

          <div className="border-t border-apple-gray-100 pt-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-apple-blue/10 rounded-apple flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-apple-blue" />
              </div>
              <div>
                <p className="text-body font-medium text-apple-gray-500">
                  Estimated Delivery
                </p>
                <p className="text-body text-apple-gray-300">
                  {deliveryDates.start.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })} - {' '}
                  {deliveryDates.end.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-apple-green/10 rounded-apple flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-apple-green" />
              </div>
              <div>
                <p className="text-body font-medium text-apple-gray-500">
                  Confirmation Email
                </p>
                <p className="text-body text-apple-gray-300">
                  We've sent a confirmation email with your order details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-apple p-8 shadow-apple mb-8">
          <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
            What's Next?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-apple-blue text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <p className="text-body text-apple-gray-300">
                We'll send you a shipping confirmation email when your order ships.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-apple-blue text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <p className="text-body text-apple-gray-300">
                Track your order status anytime in your account.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-apple-blue text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <p className="text-body text-apple-gray-300">
                Enjoy your new Apple products!
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/store" className="flex-1 btn-apple justify-center group">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
          <button 
            onClick={handlePrint}
            className="flex-1 btn-apple-outline justify-center"
          >
            <Printer className="w-5 h-5 mr-2" />
            Print Receipt
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-body text-apple-gray-300">
            Have questions?{' '}
            <Link to="/support" className="text-apple-blue hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
