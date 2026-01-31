import { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import { useSearch } from '../context/SearchContext';
import { useCart } from '../context/CartContext';
import { searchProducts, type Product } from '../data/products';
import { Search, X, ShoppingBag, ArrowRight, Sparkles, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

// Popular search suggestions
const POPULAR_SEARCHES = [
  'iPhone 15 Pro',
  'MacBook Air',
  'iPad Pro',
  'Apple Watch',
  'AirPods Pro',
  'Vision Pro',
  'Apple Watch Ultra',
  'MacBook Pro',
];

// Quick categories for empty state
const QUICK_CATEGORIES = [
  { name: 'iPhone', path: '/iphone', icon: '📱' },
  { name: 'Mac', path: '/mac', icon: '💻' },
  { name: 'iPad', path: '/ipad', icon: '📲' },
  { name: 'Watch', path: '/watch', icon: '⌚' },
  { name: 'AirPods', path: '/airpods', icon: '🎧' },
  { name: 'Vision', path: '/vision', icon: '👓' },
];

export default function SearchModal() {
  const { isOpen, query, closeSearch, setQuery } = useSearch();
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchProducts(query);
  }, [query]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [results]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeSearch();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleProductClick(results[selectedIndex].id);
          } else if (query.trim() && results.length > 0) {
            handleProductClick(results[0].id);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeSearch, results, selectedIndex, query]);

  // Animation on open
  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalRef.current.querySelector('.search-container'),
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, delay: 0.1, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  const handleAddToCart = useCallback((product: Product) => {
    const inStockVariant = product.variants.find(v => v.availability === 'in-stock');
    const variant = inStockVariant || product.variants[0];
    
    if (!variant) return;

    addToCart({
      productId: product.id,
      variantId: variant.id,
      name: product.name,
      shortName: product.shortName,
      price: variant.price,
      originalPrice: variant.price,
      image: variant.image,
      color: variant.color?.name,
      storage: variant.storage?.size,
      category: product.category,
    });
    
    // Show feedback and close
    closeSearch();
  }, [addToCart, closeSearch]);

  const handleProductClick = useCallback((productId: string) => {
    closeSearch();
    navigate(`/product/${productId}`);
  }, [closeSearch, navigate]);

  const handleCategoryClick = useCallback((path: string) => {
    closeSearch();
    navigate(path);
  }, [closeSearch, navigate]);

  const clearSearch = useCallback(() => {
    setQuery('');
    inputRef.current?.focus();
  }, [setQuery]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] bg-apple-gray-500/85 backdrop-blur-2xl"
      onClick={closeSearch}
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
    >
      <div
        className="search-container w-full max-w-4xl mx-auto px-4 pt-16 sm:pt-24"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="relative mb-8">
          <Search 
            className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/70" 
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-white/10 text-white text-xl sm:text-2xl placeholder:text-white/60 rounded-apple-lg py-5 pl-16 pr-14 outline-none focus:bg-white/15 transition-all duration-300"
            aria-label="Search query"
            autoComplete="off"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Results */}
        <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto scrollbar-hide">
          {query.trim() ? (
            results.length > 0 ? (
              <div className="space-y-3">
                <p className="text-white/70 text-sm mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                </p>
                {results.map((product, index) => {
                  const inStockVariant = product.variants.find(v => v.availability === 'in-stock');
                  const variant = inStockVariant || product.variants[0];
                  const isSelected = index === selectedIndex;
                  const alreadyInCart = variant ? isInCart(product.id, variant.id) : false;

                  return (
                    <div
                      key={product.id}
                      className={`group flex items-center gap-4 sm:gap-6 bg-white/10 rounded-apple p-4 transition-all duration-200 cursor-pointer ${
                        isSelected ? 'bg-white/15 ring-2 ring-apple-blue' : 'hover:bg-white/15'
                      }`}
                      onClick={() => handleProductClick(product.id)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      role="option"
                      aria-selected={isSelected}
                      tabIndex={0}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white/10 rounded-apple overflow-hidden">
                        <img
                          src={variant?.image || product.heroImage}
                          alt={product.name}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                            {product.name}
                          </h3>
                          {product.isNew && (
                            <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 bg-apple-blue/20 text-apple-blue text-xs rounded-full">
                              <Sparkles className="w-3 h-3" />
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-white/60 text-sm truncate">{product.tagline}</p>
                        <p className="text-white/80 text-sm mt-1">
                          From ${product.basePrice}
                        </p>
                        {variant?.color && (
                          <p className="text-white/70 text-xs mt-0.5">
                            {product.variants.length} options
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          disabled={alreadyInCart}
                          className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                            alreadyInCart
                              ? 'bg-green-500/20 text-green-400 cursor-default'
                              : 'bg-apple-blue text-white hover:bg-opacity-90'
                          }`}
                          aria-label={alreadyInCart ? 'Already in cart' : 'Add to cart'}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span className="hidden sm:inline">{alreadyInCart ? 'Added' : 'Add'}</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(product.id);
                          }}
                          className="text-white/60 hover:text-white transition-colors flex items-center gap-1 text-sm"
                          aria-label={`View ${product.name}`}
                        >
                          <span className="hidden sm:inline">View</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-white/30" />
                </div>
                <p className="text-white/70 text-lg mb-2">
                  No results found for "{query}"
                </p>
                <p className="text-white/40 text-sm mb-8">
                  Try different keywords or browse categories below
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {QUICK_CATEGORIES.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => handleCategoryClick(cat.path)}
                      className="bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2"
                    >
                      <span>{cat.icon}</span>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )
          ) : (
            /* Empty State - Quick Links */
            <div>
              <p className="text-white/70 text-sm mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <p className="text-white/70 text-sm mb-4">Browse by Category</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {QUICK_CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryClick(cat.path)}
                    className="bg-white/10 hover:bg-white/15 text-white p-4 rounded-apple text-left transition-all duration-200 group"
                  >
                    <span className="text-2xl mb-2 block">{cat.icon}</span>
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                      {cat.name} →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Keyboard Hints */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-white/30 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-white/10 px-1.5 py-0.5 rounded">↑↓</kbd> to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-white/10 px-1.5 py-0.5 rounded">↵</kbd> to select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded">esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
