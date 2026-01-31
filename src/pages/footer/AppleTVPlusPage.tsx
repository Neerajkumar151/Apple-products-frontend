import FooterPage from './FooterPage';
import { Tv, Film, Star } from 'lucide-react';

export default function AppleTVPlusPage() {
  const originals = [
    'Ted Lasso',
    'The Morning Show',
    'Severance',
    'For All Mankind',
    'Foundation',
    'Slow Horses',
  ];

  return (
    <FooterPage
      title="Apple TV+"
      subtitle="Award-winning original shows and movies."
      icon={<Tv className="w-16 h-16 text-apple-black mx-auto" />}
      heroBg="bg-gradient-to-b from-black to-apple-gray-500 text-white"
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Watch award-winning Apple Originals.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple TV+ features critically acclaimed Apple Original series and films, 
              including Emmy-winning shows like Ted Lasso and The Morning Show. New 
              exclusives added every month.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Film className="w-10 h-10 text-apple-blue mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Originals</h3>
                <p className="text-caption text-apple-gray-300">
                  Exclusive Apple Original content.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Star className="w-10 h-10 text-apple-yellow mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Award-Winning</h3>
                <p className="text-caption text-apple-gray-300">
                  Emmy, Oscar, and Golden Globe winners.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Tv className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Ad-Free</h3>
                <p className="text-caption text-apple-gray-300">
                  Watch without interruptions.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-black text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Popular Originals
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {originals.map((show) => (
                <div key={show} className="bg-white/10 rounded-apple p-4">
                  <p className="text-body font-medium">{show}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Pricing
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-apple px-6 py-4">
                <p className="text-caption text-apple-gray-300">Monthly</p>
                <p className="text-headline font-semibold text-apple-gray-500">$6.99/mo</p>
              </div>
              <div className="bg-white rounded-apple px-6 py-4">
                <p className="text-caption text-apple-gray-300">Apple One</p>
                <p className="text-headline font-semibold text-apple-gray-500">From $19.95/mo</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
