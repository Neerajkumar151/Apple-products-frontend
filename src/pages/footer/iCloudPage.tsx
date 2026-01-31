import FooterPage from './FooterPage';
import { Cloud, Folder, Lock, Share2 } from 'lucide-react';

export default function iCloudPage() {
  return (
    <FooterPage
      title="iCloud"
      subtitle="Store. Sync. Share. Secure."
      icon={<Cloud className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              The best place for all your photos, files, and more.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              iCloud keeps your photos, files, notes, passwords, and other data safely stored 
              in the cloud and up to date across all your devices. With end-to-end encryption, 
              your data is protected and only accessible by you.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Folder className="w-8 h-8 text-apple-blue mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">iCloud Drive</h3>
                <p className="text-caption text-apple-gray-300">
                  Store any file and access it from anywhere.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Lock className="w-8 h-8 text-apple-green mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">iCloud Keychain</h3>
                <p className="text-caption text-apple-gray-300">
                  Keep your passwords and credit cards secure.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Share2 className="w-8 h-8 text-apple-purple mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">iCloud Photos</h3>
                <p className="text-caption text-apple-gray-300">
                  All your photos and videos, always available.
                </p>
              </div>
              <div className="bg-apple-gray-50 rounded-apple p-6">
                <Cloud className="w-8 h-8 text-apple-orange mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">iCloud Backup</h3>
                <p className="text-caption text-apple-gray-300">
                  Automatic backups of your devices.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-gradient-to-br from-apple-blue to-apple-teal text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Storage Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-apple p-6">
                <p className="text-caption text-white/70">5GB</p>
                <p className="text-headline font-semibold">Free</p>
                <p className="text-body text-white/70 mt-2">Included with every Apple ID</p>
              </div>
              <div className="bg-white/10 rounded-apple p-6">
                <p className="text-caption text-white/70">50GB</p>
                <p className="text-headline font-semibold">$0.99/mo</p>
                <p className="text-body text-white/70 mt-2">Perfect for most users</p>
              </div>
              <div className="bg-white/10 rounded-apple p-6">
                <p className="text-caption text-white/70">200GB</p>
                <p className="text-headline font-semibold">$2.99/mo</p>
                <p className="text-body text-white/70 mt-2">Great for families</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
