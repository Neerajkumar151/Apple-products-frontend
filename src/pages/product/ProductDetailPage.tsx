import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShoppingBag, 
  Check, 
  ArrowRight, 
  Shield, 
  Truck, 
  RotateCcw,
  Star,
  Info
} from 'lucide-react';
import { getProductById, getVariantPrice } from '../../data/products';
import { useCart } from '../../context/CartContext';
// Toast notifications

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const product = getProductById(id || '');

  const heroRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const stickyCtaRef = useRef<HTMLDivElement>(null);

  // Selection state
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedStorage, setSelectedStorage] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [isAdding, setIsAdding] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Initialize selections from product
  useEffect(() => {
    if (product) {
      const defaultVariant = product.variants.find(v => v.availability === 'in-stock') || product.variants[0];
      setSelectedVariant(defaultVariant);
      if (defaultVariant?.color) {
        setSelectedColor(defaultVariant.color.name);
      }
      if (defaultVariant?.storage) {
        setSelectedStorage(defaultVariant.storage.size);
      }
      // Scroll to top on mount to ensure navbar doesn't overlap on load
      window.scrollTo(0, 0);
    }
  }, [product]);

  // Calculate current price based on selections
  const currentPrice = useMemo(() => {
    if (!product) return 0;
    return getVariantPrice(product, selectedColor, selectedStorage);
  }, [product, selectedColor, selectedStorage]);

  // Check if selected variant is in cart
  const isVariantInCart = useMemo(() => {
    if (!product || !selectedVariant) return false;
    return isInCart(product.id, selectedVariant.id);
  }, [product, selectedVariant, isInCart]);

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroItems = heroRef.current?.querySelectorAll('.animate-item');
      if (heroItems && heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          }
        );
      }

      // Specs section animation
      if (specsRef.current) {
        gsap.fromTo(
          specsRef.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: specsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Features animation
      const featureItems = featuresRef.current?.querySelectorAll('.feature-item');
      if (featureItems && featureItems.length > 0) {
        gsap.fromTo(
          featureItems,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Sticky CTA visibility
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'bottom top+=100',
        onEnter: () => setShowStickyCta(true),
        onLeaveBack: () => setShowStickyCta(false),
      });
    });

    return () => ctx.revert();
  }, []);

  // Handle color selection
  const handleColorSelect = useCallback((colorName: string) => {
    setSelectedColor(colorName);
    // Find variant with this color and current storage
    const variant = product?.variants.find(v => 
      v.color?.name === colorName && 
      (!selectedStorage || v.storage?.size === selectedStorage)
    );
    if (variant) {
      setSelectedVariant(variant);
    }
  }, [product, selectedStorage]);

  // Handle storage selection
  const handleStorageSelect = useCallback((storageSize: string) => {
    setSelectedStorage(storageSize);
    // Find variant with current color and this storage
    const variant = product?.variants.find(v => 
      (!selectedColor || v.color?.name === selectedColor) && 
      v.storage?.size === storageSize
    );
    if (variant) {
      setSelectedVariant(variant);
    }
  }, [product, selectedColor]);

  // Handle add to cart
  const handleAddToCart = useCallback(() => {
    if (!product || !selectedVariant) return;

    setIsAdding(true);
    
    addToCart({
      productId: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      shortName: product.shortName,
      price: currentPrice,
      originalPrice: currentPrice,
      image: selectedVariant.image,
      color: selectedVariant.color?.name,
      storage: selectedVariant.storage?.size,
      category: product.category,
    });

    // Show success feedback (could use toast library here)

    setTimeout(() => setIsAdding(false), 500);
  }, [product, selectedVariant, currentPrice, addToCart, navigate]);

  // Handle buy now (add to cart and go to checkout)
  const handleBuyNow = useCallback(() => {
    handleAddToCart();
    setTimeout(() => navigate('/cart'), 300);
  }, [handleAddToCart, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen bg-apple-gray-50 pt-32 text-center px-4">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-apple-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Info className="w-10 h-10 text-apple-gray-300" />
          </div>
          <h1 className="text-display-md font-semibold text-apple-gray-500 mb-4">
            Product not found
          </h1>
          <p className="text-body-lg text-apple-gray-300 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/store" className="btn-apple inline-flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Browse Store
          </Link>
        </div>
      </div>
    );
  }

  const inStockVariant = product.variants.find(v => v.availability === 'in-stock');
  const isOutOfStock = !inStockVariant && product.variants.every(v => v.availability === 'out-of-stock');
  const isPreOrder = product.variants.some(v => v.availability === 'pre-order');

  return (
    // FIX: Changed pt-16 to pt-32 to fix navbar collision and added pb-20 for breathing room
    <div className="min-h-screen bg-apple-gray-50 pt-32 pb-20">
      {/* Breadcrumb */}
      <nav className="px-4 sm:px-6 lg:px-8 py-4 mb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="text-apple-gray-300 hover:text-apple-gray-500 transition-colors">
              Home
            </Link>
          </li>
          <li className="text-apple-gray-200">/</li>
          <li>
            <Link to={`/${product.category.toLowerCase()}`} className="text-apple-gray-300 hover:text-apple-gray-500 transition-colors">
              {product.category}
            </Link>
          </li>
          <li className="text-apple-gray-200">/</li>
          <li className="text-apple-gray-500 font-medium" aria-current="page">
            {product.shortName || product.name}
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-white to-apple-gray-50"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Product Image */}
            <div className="animate-item relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-lg mx-auto">
                <img
                  src={selectedVariant?.image || product.heroImage}
                  alt={product.name}
                  className="w-full h-full object-contain transition-all duration-500"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 bg-apple-blue text-white text-sm font-medium rounded-full">
                    <Star className="w-4 h-4" />
                    New
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-item order-1 lg:order-2">
              <span className="inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-3">
                {product.category}
              </span>
              <h1 className="text-display-md sm:text-display-lg font-semibold text-apple-gray-500 tracking-tight mb-3">
                {product.name}
              </h1>
              <p className="text-headline text-apple-gray-300 mb-4">
                {product.tagline}
              </p>
              <p className="text-body text-apple-gray-300 mb-8 max-w-lg">
                {product.fullDescription || product.description}
              </p>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <p className="text-body font-medium text-apple-gray-500 mb-3">
                    Color: <span className="text-apple-gray-300">{selectedColor}</span>
                  </p>
                  <div className="flex gap-3" role="radiogroup" aria-label="Select color">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorSelect(color.name)}
                        className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                          selectedColor === color.name
                            ? 'ring-2 ring-offset-2 ring-apple-blue scale-110'
                            : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.value }}
                        aria-label={color.name}
                        aria-pressed={selectedColor === color.name}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <span className="absolute inset-0 rounded-full ring-2 ring-white/30" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage Selector */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div className="mb-8">
                  <p className="text-body font-medium text-apple-gray-500 mb-3">
                    Storage
                  </p>
                  <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Select storage">
                    {product.storageOptions.map((storage) => (
                      <button
                        key={storage.size}
                        onClick={() => handleStorageSelect(storage.size)}
                        className={`px-5 py-3 rounded-apple border-2 transition-all duration-300 ${
                          selectedStorage === storage.size
                            ? 'border-apple-blue bg-apple-blue/5 text-apple-blue'
                            : 'border-apple-gray-200 text-apple-gray-500 hover:border-apple-gray-300'
                        }`}
                        aria-pressed={selectedStorage === storage.size}
                      >
                        <span className="text-body font-semibold block">{storage.size}</span>
                        {storage.priceAdjustment > 0 && (
                          <span className="text-caption text-apple-gray-300">
                            +${storage.priceAdjustment}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <p className="text-display-sm font-semibold text-apple-gray-500">
                    ${currentPrice}
                  </p>
                  {isPreOrder && (
                    <span className="text-caption text-apple-orange font-medium">
                      Pre-order
                    </span>
                  )}
                </div>
                <p className="text-caption text-apple-gray-300 mt-1">
                  or ${Math.round(currentPrice / 12)}/mo. for 12 mo.*
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8 text-caption text-apple-gray-300">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4" />
                  Free shipping
                </span>
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4" />
                  14-day returns
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  1-year warranty
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {isOutOfStock ? (
                  <button
                    disabled
                    className="flex-1 py-4 px-8 rounded-full bg-apple-gray-200 text-apple-gray-400 font-medium cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleAddToCart}
                      disabled={isAdding || isVariantInCart}
                      className={`flex-1 btn-apple justify-center transition-all duration-300 ${
                        isVariantInCart 
                          ? 'bg-green-500 hover:bg-green-500' 
                          : ''
                      }`}
                    >
                      {isAdding ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Adding...
                        </span>
                      ) : isVariantInCart ? (
                        <>
                          <Check className="w-5 h-5 mr-2" />
                          Added to Bag
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5 mr-2" />
                          Add to Bag
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleBuyNow}
                      disabled={isAdding}
                      className="flex-1 btn-apple-outline justify-center group"
                    >
                      Buy Now
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div
        ref={stickyCtaRef}
        className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-apple-gray-100 transition-transform duration-300 z-40 ${
          showStickyCta ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={selectedVariant?.image || product.heroImage}
                alt={product.name}
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-body font-semibold text-apple-gray-500">
                  {product.shortName || product.name}
                </p>
                <p className="text-caption text-apple-gray-300">
                  ${currentPrice}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddToCart}
                disabled={isVariantInCart}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isVariantInCart
                    ? 'bg-green-500 text-white'
                    : 'bg-apple-blue text-white hover:bg-opacity-90'
                }`}
              >
                {isVariantInCart ? 'Added' : 'Add to Bag'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <div ref={specsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-12 text-center">
            Tech Specs
          </h2>

          <div className="space-y-8">
            {product.specs.map((specCategory) => (
              <div key={specCategory.category} className="border-b border-apple-gray-100 pb-8 last:border-0">
                <h3 className="text-headline font-semibold text-apple-gray-500 mb-4">
                  {specCategory.category}
                </h3>
                <div className="space-y-4">
                  {specCategory.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4"
                    >
                      <span className="text-body font-medium text-apple-gray-500 sm:w-1/3">
                        {item.label}
                      </span>
                      <span className="text-body text-apple-gray-300 sm:w-2/3">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-12 text-center">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="feature-item bg-white rounded-apple p-8 shadow-apple hover:shadow-apple-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-apple-blue/10 rounded-apple flex items-center justify-center mb-5">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-headline font-semibold text-apple-gray-500 mb-3">
                  {feature.title}
                </h3>
                <p className="text-body text-apple-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's in the Box */}
      {product.whatsInTheBox && (
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-8">
              What's in the Box
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {product.whatsInTheBox.map((item) => (
                <span
                  key={item}
                  className="bg-apple-gray-50 px-6 py-3 rounded-full text-body text-apple-gray-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Spacer for Sticky CTA */}
      {showStickyCta && <div className="h-20" />}
    </div>
  );
}