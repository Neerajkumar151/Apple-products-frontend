import FooterPage from './FooterPage';
import { Lock, Shield, Eye } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <FooterPage
      title="Privacy"
      subtitle="Privacy is a fundamental human right."
      icon={<Lock className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Privacy is built in from the beginning.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              At Apple, we believe privacy is a fundamental human right. That's why we design 
              our products and services to protect your personal information. We minimize data 
              collection, process as much as possible on your device, and provide transparency 
              and control.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Shield className="w-10 h-10 text-apple-blue mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">On-Device Processing</h3>
                <p className="text-caption text-apple-gray-300">
                  Your data stays on your device.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Eye className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Transparency</h3>
                <p className="text-caption text-apple-gray-300">
                  You control what you share.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Lock className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Encryption</h3>
                <p className="text-caption text-apple-gray-300">
                  End-to-end encryption by default.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-black text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Privacy Features
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-apple p-4">
                <h3 className="text-body font-semibold mb-1">App Tracking Transparency</h3>
                <p className="text-caption text-white/70">Choose which apps can track your activity.</p>
              </div>
              <div className="bg-white/10 rounded-apple p-4">
                <h3 className="text-body font-semibold mb-1">Mail Privacy Protection</h3>
                <p className="text-caption text-white/70">Stop senders from seeing your email activity.</p>
              </div>
              <div className="bg-white/10 rounded-apple p-4">
                <h3 className="text-body font-semibold mb-1">iCloud Private Relay</h3>
                <p className="text-caption text-white/70">Browse Safari without being tracked.</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
