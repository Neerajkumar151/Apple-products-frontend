import FooterPage from './FooterPage';
import { Gift } from 'lucide-react';

export default function GiftCardsPage() {
  return (
    <FooterPage
      title="Gift Cards"
      subtitle="The gift they'll love to receive."
      icon={<Gift className="w-16 h-16 text-apple-pink mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Apple Gift Card
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              For everything Apple. Products, accessories, apps, games, music, movies, TV shows, 
              iCloud+, and more. The Apple Gift Card is the gift that keeps on giving.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-apple-pink to-apple-purple rounded-apple p-6 text-white">
                <p className="text-caption mb-2">Digital</p>
                <p className="text-headline font-semibold">$25 - $500</p>
                <p className="text-body mt-2">Delivered by email</p>
              </div>
              <div className="bg-gradient-to-br from-apple-blue to-apple-teal rounded-apple p-6 text-white">
                <p className="text-caption mb-2">Physical</p>
                <p className="text-headline font-semibold">$25 - $2000</p>
                <p className="text-body mt-2">Shipped to you</p>
              </div>
              <div className="bg-gradient-to-br from-apple-gray-500 to-black rounded-apple p-6 text-white">
                <p className="text-caption mb-2">Corporate</p>
                <p className="text-headline font-semibold">Bulk Orders</p>
                <p className="text-body mt-2">For business</p>
              </div>
            </div>
          </div>

          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              How to Redeem
            </h2>
            <ol className="space-y-3 text-body text-apple-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-apple-blue text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                <span>Peel or gently scratch off the label on the back of the gift card.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-apple-blue text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                <span>Open the App Store app, iTunes Store app, or Apple Books app.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-apple-blue text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                <span>Tap "Redeem Gift Card or Code" and enter the code.</span>
              </li>
            </ol>
          </div>
        </div>
      }
    />
  );
}
