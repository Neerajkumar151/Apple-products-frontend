import FooterPage from './FooterPage';
import { User, Lock, Shield } from 'lucide-react';

export default function ManageAppleIDPage() {
  return (
    <FooterPage
      title="Manage Your Apple ID"
      subtitle="Your account. Your control."
      icon={<User className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Your Apple ID is the key to everything Apple.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Your Apple ID is the account you use to access all Apple services like the App Store, 
              Apple Music, iCloud, iMessage, FaceTime, and more. Manage your account settings, 
              security, and personal information all in one place.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Lock className="w-8 h-8 text-apple-blue mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Security</h3>
                <p className="text-caption text-apple-gray-300">
                  Two-factor authentication, password management, and trusted devices.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Shield className="w-8 h-8 text-apple-green mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Privacy</h3>
                <p className="text-caption text-apple-gray-300">
                  Control what data is shared and how it's used.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              What You Can Manage
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Personal Information',
                'Sign-In & Security',
                'Payment & Shipping',
                'Subscriptions',
                'iCloud Storage',
                'Family Sharing',
                'Devices',
                'Data & Privacy',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-body text-apple-gray-300">
                  <span className="w-2 h-2 bg-apple-blue rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="content-item text-center">
            <button className="btn-apple">Sign In to Apple ID</button>
          </div>
        </div>
      }
    />
  );
}
