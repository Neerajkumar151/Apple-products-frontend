import FooterPage from './FooterPage';
import { CreditCard, Percent, Zap } from 'lucide-react';

export default function AppleCardPage() {
  return (
    <FooterPage
      title="Apple Card"
      subtitle="A new kind of credit card. Created by Apple, not a bank."
      icon={<CreditCard className="w-16 h-16 text-apple-gray-500 mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              The simplicity of Apple. In a credit card.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple Card lives on your iPhone, in the Wallet app. You can sign up in as little as a minute 
              and start using it right away with Apple Pay. For purchases not made with Apple Pay, 
              you'll get a sleek titanium card.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Percent className="w-10 h-10 text-apple-blue mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">No Fees</h3>
                <p className="text-caption text-apple-gray-300">
                  No annual, late, international, or over-the-limit fees.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Zap className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Daily Cash</h3>
                <p className="text-caption text-apple-gray-300">
                  Get up to 3% back on every purchase, daily.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <CreditCard className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Privacy</h3>
                <p className="text-caption text-apple-gray-300">
                  Apple doesn't know what you bought or where.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-gradient-to-br from-apple-gray-500 to-black text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Daily Cash Back
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-body">3% at Apple</span>
                <span className="text-headline font-semibold">3%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="text-body">2% with Apple Pay</span>
                <span className="text-headline font-semibold">2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-body">1% with Titanium Card</span>
                <span className="text-headline font-semibold">1%</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
