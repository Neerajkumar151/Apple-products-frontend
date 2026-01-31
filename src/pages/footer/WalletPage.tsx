import FooterPage from './FooterPage';
import { Wallet, CreditCard, Banknote, Smartphone } from 'lucide-react';

export default function WalletPage() {
  return (
    <FooterPage
      title="Apple Wallet"
      subtitle="Everything you need, all in one place."
      icon={<Wallet className="w-16 h-16 text-apple-black mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Your Wallet, Reimagined
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple Wallet is the one place for everything you need to pay, travel, and access.
              Store your credit and debit cards, transit cards, boarding passes, tickets, 
              car keys, and more — all in one secure app.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <CreditCard className="w-8 h-8 text-apple-blue mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Payment Cards</h3>
                <p className="text-caption text-apple-gray-300">
                  Store all your credit and debit cards securely.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Smartphone className="w-8 h-8 text-apple-green mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Passes & Tickets</h3>
                <p className="text-caption text-apple-gray-300">
                  Boarding passes, movie tickets, and event tickets.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Banknote className="w-8 h-8 text-apple-orange mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Transit Cards</h3>
                <p className="text-caption text-apple-gray-300">
                  Pay for transit with just a tap.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Wallet className="w-8 h-8 text-apple-purple mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">ID Cards</h3>
                <p className="text-caption text-apple-gray-300">
                  Driver's license and state ID (where available).
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-black text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Privacy & Security
            </h2>
            <p className="text-body text-white/70 mb-4">
              Apple Wallet keeps your information private and secure. Your card numbers are never 
              stored on your device or on Apple servers. When you pay, your card numbers are never 
              shared with merchants.
            </p>
            <p className="text-caption text-white/50">
              Learn more about Apple Wallet security at support.apple.com
            </p>
          </div>
        </div>
      }
    />
  );
}
