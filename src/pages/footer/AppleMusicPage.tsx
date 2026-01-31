import FooterPage from './FooterPage';
import { Music, Headphones, Radio } from 'lucide-react';

export default function AppleMusicPage() {
  return (
    <FooterPage
      title="Apple Music"
      subtitle="Over 100 million songs. Spatial Audio with Dolby Atmos."
      icon={<Music className="w-16 h-16 text-apple-pink mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              The ultimate music streaming experience.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple Music gives you access to over 100 million songs, curated playlists, 
              and exclusive content. Experience Spatial Audio with Dolby Atmos for 
              immersive sound that surrounds you.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Music className="w-10 h-10 text-apple-pink mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">100M+ Songs</h3>
                <p className="text-caption text-apple-gray-300">
                  The entire music catalog.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Headphones className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Spatial Audio</h3>
                <p className="text-caption text-apple-gray-300">
                  Immersive sound with Dolby Atmos.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Radio className="w-10 h-10 text-apple-red mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Apple Music Radio</h3>
                <p className="text-caption text-apple-gray-300">
                  Live radio stations worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-gradient-to-br from-apple-pink to-apple-red text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Plans
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-apple p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-headline font-semibold">Individual</h3>
                    <p className="text-body text-white/70">Full catalog, ad-free</p>
                  </div>
                  <p className="text-headline font-semibold">$10.99/mo</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-apple p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-headline font-semibold">Family</h3>
                    <p className="text-body text-white/70">Share with up to 5 people</p>
                  </div>
                  <p className="text-headline font-semibold">$16.99/mo</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-apple p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-headline font-semibold">Student</h3>
                    <p className="text-body text-white/70">Verified students only</p>
                  </div>
                  <p className="text-headline font-semibold">$5.99/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
