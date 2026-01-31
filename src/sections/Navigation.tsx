import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Store', path: '/store' },
  { name: 'Mac', path: '/mac' },
  { name: 'iPad', path: '/ipad' },
  { name: 'iPhone', path: '/iphone' },
  { name: 'Watch', path: '/watch' },
  { name: 'Vision', path: '/vision' },
  { name: 'AirPods', path: '/airpods' },
  { name: 'TV & Home', path: '/tv-home' },
  { name: 'Entertainment', path: '/entertainment' },
  { name: 'Support', path: '/support' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openSearch } = useSearch();
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple ${
          isScrolled
            ? 'bg-apple-gray-500/90 backdrop-blur-xl py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={`text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-apple-gray-500'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-light tracking-wide transition-all duration-300 hover:opacity-70 ${
                    isScrolled ? 'text-white/90' : 'text-apple-gray-500/90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-5">
              <button
                onClick={openSearch}
                className={`transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-white/90' : 'text-apple-gray-500/90'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <Link
                to="/cart"
                className={`relative transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-white/90' : 'text-apple-gray-500/90'
                }`}
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-apple-blue text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                className={`lg:hidden transition-colors duration-300 ${
                  isScrolled ? 'text-white/90' : 'text-apple-gray-500/90'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-apple-gray-500 transition-all duration-500 ease-apple lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-semibold text-white/90 hover:text-white transition-colors duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? 'translateY(0)'
                  : 'translateY(20px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
