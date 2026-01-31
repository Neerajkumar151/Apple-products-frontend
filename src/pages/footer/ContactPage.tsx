import FooterPage from './FooterPage';
import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <FooterPage
      title="Contact Apple"
      subtitle="We're here to help."
      icon={<MessageCircle className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Phone className="w-8 h-8 text-apple-blue mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Phone</h3>
                <p className="text-caption text-apple-gray-300">
                  1-800-MY-APPLE
                </p>
                <p className="text-caption text-apple-gray-300">
                  Available 24/7
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <MessageCircle className="w-8 h-8 text-apple-green mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Chat</h3>
                <p className="text-caption text-apple-gray-300">
                  Chat with an Apple specialist
                </p>
                <p className="text-caption text-apple-gray-300">
                  Available 9 AM - 9 PM
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <MapPin className="w-8 h-8 text-apple-purple mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Apple Store</h3>
                <p className="text-caption text-apple-gray-300">
                  Find a store near you
                </p>
                <p className="text-caption text-apple-gray-300">
                  Genius Bar appointments available
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Mail className="w-8 h-8 text-apple-orange mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Email</h3>
                <p className="text-caption text-apple-gray-300">
                  support@apple.com
                </p>
                <p className="text-caption text-apple-gray-300">
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Corporate Address
            </h2>
            <p className="text-body text-apple-gray-300">
              Apple Inc.<br />
              One Apple Park Way<br />
              Cupertino, CA 95014<br />
              India
            </p>
          </div>
        </div>
      }
    />
  );
}
