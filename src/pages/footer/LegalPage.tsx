import FooterPage from './FooterPage';
import { FileText, Scale, Shield } from 'lucide-react';

export default function LegalPage() {
  return (
    <FooterPage
      title="Legal"
      subtitle="Terms, policies, and legal information."
      icon={<Scale className="w-16 h-16 text-apple-gray-500 mx-auto" />}
      content={
        <div className="space-y-6">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-apple-blue" />
              <h2 className="text-headline font-semibold text-apple-gray-500">
                Privacy Policy
              </h2>
            </div>
            <p className="text-body text-apple-gray-300 mb-4">
              Apple is committed to your privacy. Read our Privacy Policy to learn how we 
              collect, use, and protect your personal information.
            </p>
            <button className="text-apple-blue hover:underline text-body">
              Read Privacy Policy →
            </button>
          </div>

          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-apple-blue" />
              <h2 className="text-headline font-semibold text-apple-gray-500">
                Terms of Use
              </h2>
            </div>
            <p className="text-body text-apple-gray-300 mb-4">
              By using Apple services, you agree to our Terms of Use. Please read them carefully 
              to understand your rights and obligations.
            </p>
            <button className="text-apple-blue hover:underline text-body">
              Read Terms of Use →
            </button>
          </div>

          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-apple-blue" />
              <h2 className="text-headline font-semibold text-apple-gray-500">
                Sales and Refunds
              </h2>
            </div>
            <p className="text-body text-apple-gray-300 mb-4">
              Learn about our sales policies, return procedures, and refund options for products 
              purchased from the Apple Store.
            </p>
            <button className="text-apple-blue hover:underline text-body">
              Read Sales Policy →
            </button>
          </div>
        </div>
      }
    />
  );
}
