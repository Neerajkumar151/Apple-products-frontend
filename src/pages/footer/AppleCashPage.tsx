import FooterPage from './FooterPage';
import { Banknote, Send, MessageSquare } from 'lucide-react';

export default function AppleCashPage() {
  return (
    <FooterPage
      title="Apple Cash"
      subtitle="Send and receive money in Messages."
      icon={<Banknote className="w-16 h-16 text-apple-green mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              The easy way to send and receive money.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple Cash is built right into the Messages app. Send money to friends and family 
              with just a few taps. Receive money and spend it with Apple Pay, or transfer to 
              your bank account.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <MessageSquare className="w-10 h-10 text-apple-blue mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">In Messages</h3>
                <p className="text-caption text-apple-gray-300">
                  Send money right in your conversations.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Send className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Instant</h3>
                <p className="text-caption text-apple-gray-300">
                  Money arrives instantly in Apple Cash.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Banknote className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Transfer</h3>
                <p className="text-caption text-apple-gray-300">
                  Move money to your bank account.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-gradient-to-br from-apple-green to-apple-teal text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              How It Works
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                <div>
                  <p className="text-body font-medium">Open Messages</p>
                  <p className="text-body text-white/70">Start a conversation or open an existing one.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                <div>
                  <p className="text-body font-medium">Tap the Apple Cash Button</p>
                  <p className="text-body text-white/70">Enter the amount you want to send.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                <div>
                  <p className="text-body font-medium">Authenticate and Send</p>
                  <p className="text-body text-white/70">Use Face ID, Touch ID, or passcode to confirm.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      }
    />
  );
}
