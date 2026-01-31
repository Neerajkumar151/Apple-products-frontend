import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  'Shop and Learn': [
    { name: 'Store', path: '/store' },
    { name: 'Mac', path: '/mac' },
    { name: 'iPad', path: '/ipad' },
    { name: 'iPhone', path: '/iphone' },
    { name: 'Watch', path: '/watch' },
    { name: 'Vision', path: '/vision' },
    { name: 'AirPods', path: '/airpods' },
    { name: 'TV & Home', path: '/tv-home' },
    { name: 'AirTag', path: '/footer/airtag' },
    { name: 'Accessories', path: '/footer/accessories' },
    { name: 'Gift Cards', path: '/footer/gift-cards' },
  ],
  'Apple Wallet': [
    { name: 'Wallet', path: '/footer/wallet' },
    { name: 'Apple Card', path: '/footer/apple-card' },
    { name: 'Apple Pay', path: '/footer/apple-pay' },
    { name: 'Apple Cash', path: '/footer/apple-cash' },
  ],
  'Account': [
    { name: 'Manage Your Apple ID', path: '/footer/manage-apple-id' },
    { name: 'Apple Store Account', path: '/footer/apple-store-account' },
    { name: 'iCloud.com', path: '/footer/icloud' },
  ],
  'Entertainment': [
    { name: 'Apple One', path: '/footer/apple-one' },
    { name: 'Apple TV+', path: '/footer/apple-tv-plus' },
    { name: 'Apple Music', path: '/footer/apple-music' },
    { name: 'Apple Arcade', path: '/footer/apple-arcade' },
    { name: 'Apple Fitness+', path: '/footer/apple-fitness-plus' },
    { name: 'Apple News+', path: '/footer/apple-news-plus' },
    { name: 'Apple Podcasts', path: '/footer/apple-podcasts' },
    { name: 'Apple Books', path: '/footer/apple-books' },
    { name: 'App Store', path: '/footer/app-store' },
  ],
  'Apple Values': [
    { name: 'Accessibility', path: '/footer/accessibility' },
    { name: 'Education', path: '/footer/education' },
    { name: 'Environment', path: '/footer/environment' },
    { name: 'Inclusion and Diversity', path: '/footer/inclusion-diversity' },
    { name: 'Privacy', path: '/footer/privacy' },
    { name: 'Racial Equity and Justice', path: '/footer/racial-equity' },
    { name: 'Supplier Responsibility', path: '/footer/supplier-responsibility' },
  ],
  'About Apple': [
    { name: 'Newsroom', path: '/footer/newsroom' },
    { name: 'Apple Leadership', path: '/footer/leadership' },
    { name: 'Career Opportunities', path: '/footer/careers' },
    { name: 'Investors', path: '/footer/investors' },
    { name: 'Ethics & Compliance', path: '/footer/ethics-compliance' },
    { name: 'Events', path: '/footer/events' },
    { name: 'Contact Apple', path: '/footer/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-apple-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-caption font-semibold text-apple-gray-500 mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-caption text-apple-gray-300 hover:text-apple-gray-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-apple-gray-200 pt-8">
          

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <p className="text-body text-apple-gray-300">
              <Link
  to="/"
  className="inline-flex items-center gap-1 text-apple-blue hover:underline"
>
  <img
    src="/apple.svg"
    alt=""
    className="w-12 h-12"
  />
</Link> More ways to shop:{' '}
              <Link to="/store" className="text-apple-blue hover:underline">
                Find an Apple Store
              </Link>{' '}
              or{' '}
              <Link to="/store" className="text-apple-blue hover:underline">
                other retailer
              </Link>{' '}
              near you.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-caption text-apple-gray-300">
                Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: 'Privacy Policy', path: '/footer/privacy-policy' },
                  { name: 'Terms of Use', path: '/footer/terms-of-use' },
                  { name: 'Sales and Refunds', path: '/footer/sales-refunds' },
                  { name: 'Legal', path: '/footer/legal' },
                  { name: 'Site Map', path: '/footer/site-map' },
                ].map((item, index, arr) => (
                  <span key={item.name} className="flex items-center">
                    <Link
                      to={item.path}
                      className="text-caption text-apple-gray-300 hover:text-apple-gray-500 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                    {index < arr.length - 1 && (
                      <span className="text-apple-gray-200 mx-2">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Country Selector */}
            <Link
              to="/footer/country"
              className="flex items-center text-caption text-apple-gray-300 hover:text-apple-gray-500 transition-colors duration-300"
            >
              United States
              <ChevronRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
