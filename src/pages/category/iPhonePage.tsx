import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Camera, Cpu, Shield, Battery, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductsByCategory, type Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

const iPhoneHighlights = [
  {
    icon: Cpu,
    title: 'A17 Pro chip',
    description: 'The most powerful chip ever in a smartphone.',
    stat: '10%',
    statLabel: 'faster CPU',
  },
  {
    icon: Camera,
    title: '48MP Camera',
    description: 'Capture stunning detail with the new quad-pixel sensor.',
    stat: '48MP',
    statLabel: 'Main camera',
  },
  {
    icon: Shield,
    title: 'Titanium Design',
    description: 'The strongest iPhone design ever with aerospace-grade titanium.',
    stat: 'Grade 5',
    statLabel: 'Titanium',
  },
  {
    icon: Battery,
    title: 'All-Day Battery',
    description: 'Up to 29 hours of video playback on iPhone 15 Pro Max.',
    stat: '29hrs',
    statLabel: 'Video playback',
  },
];

export default function iPhonePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const products = getProductsByCategory('iPhone');

  useEffect(() => {
    const hero = heroRef.current;
    const highlights = highlightsRef.current;
    const camera = cameraRef.current;
    const grid = gridRef.current;

    if (!hero || !highlights || !camera || !grid) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        hero.querySelectorAll('.animate-item'),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      // iPhone image float animation
      gsap.to('.hero-phone', {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Highlights animation
      const highlightCards = highlights.querySelectorAll('.highlight-card');
      highlightCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );
      });

      // Camera section parallax
      gsap.fromTo(
        camera.querySelectorAll('.camera-stat'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: camera,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Product cards animation
      const productCards = grid.querySelectorAll('.product-card');
      productCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: (index % 3) * 0.1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, [products]);

  const handleAddToCart = (product: Product) => {
    const inStockVariant =
      product.variants.find(v => v.availability === 'in-stock') ||
      product.variants[0];

    if (!inStockVariant) return;

    addToCart({
      productId: product.id,
      variantId: inStockVariant.id,
      name: product.name,
      shortName: product.shortName,
      price: inStockVariant.price,
      originalPrice: inStockVariant.price,
      image: inStockVariant.image,
      color: inStockVariant.color?.name,
      storage: inStockVariant.storage?.size,
      category: product.category,
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-foreground">
      {/* Hero Section - iPhone specific dark theme */}
      <div
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground to-foreground/95" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pt-24 lg:pt-32">
          <span className="animate-item inline-block text-xs font-medium text-primary uppercase tracking-widest mb-4">
            iPhone 15 Pro
          </span>

          <h1 className="animate-item text-5xl sm:text-7xl lg:text-8xl font-semibold text-card tracking-tight mb-4">
            Titanium.
          </h1>
          <h2 className="animate-item text-4xl sm:text-5xl lg:text-6xl font-semibold text-card/80 tracking-tight mb-6">
            So strong. So light. So Pro.
          </h2>

          <p className="animate-item text-xl text-card/60 font-light mb-8 max-w-2xl">
            The first iPhone to feature an aerospace-grade titanium design, using the same alloy that spacecraft use for missions to Mars.
          </p>

          <div className="animate-item flex gap-4 mb-12">
            <Link to="/store" className="btn-apple">
              Buy
            </Link>
            <Link to="#models" className="btn-apple-outline border-card/30 text-card hover:bg-card hover:text-foreground">
              Learn more
            </Link>
          </div>

          {/* Hero iPhone Image */}
          <div className="animate-item hero-phone relative w-full max-w-md mx-auto">
            <img
              src="/iphone-card.png"
              alt="iPhone 15 Pro"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
            {/* Glow effect under phone */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/40 blur-2xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div ref={highlightsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-card-foreground mb-4 text-center">
            Designed for the extraordinary
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            iPhone 15 Pro is packed with groundbreaking features that change what a phone can do.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {iPhoneHighlights.map((highlight, index) => (
              <div
                key={index}
                className="highlight-card bg-background rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{highlight.stat}</span>
                  <span className="text-sm text-muted-foreground ml-2">{highlight.statLabel}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Camera Section */}
      <div ref={cameraRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Pro Camera System
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-card mb-6">
                A camera that captures your wildest imagination.
              </h2>
              <p className="text-lg text-card/70 mb-8">
                The 48MP Main camera has a quad-pixel sensor, enabling super-high-resolution photos and capturing incredible detail in every shot.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="camera-stat">
                  <div className="text-4xl font-bold text-primary mb-2">48MP</div>
                  <p className="text-card/70">Main camera with quad-pixel sensor</p>
                </div>
                <div className="camera-stat">
                  <div className="text-4xl font-bold text-primary mb-2">5x</div>
                  <p className="text-card/70">Optical zoom on Pro Max</p>
                </div>
                <div className="camera-stat">
                  <div className="text-4xl font-bold text-primary mb-2">4K</div>
                  <p className="text-card/70">Cinematic mode at 30fps</p>
                </div>
                <div className="camera-stat">
                  <div className="text-4xl font-bold text-primary mb-2">ProRes</div>
                  <p className="text-card/70">Log video recording</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/iphone-back.png"
                alt="iPhone Camera"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Button Feature */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-background to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Action button.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            A new, customizable button that lets you quickly access your favorite feature. Set it to toggle Silent mode, launch Camera, Voice Memo, Focus, Translate, and more.
          </p>
          <Link to="/store" className="btn-apple">
            Customize yours
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div id="models" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-card-foreground mb-4 text-center">
            Which iPhone is right for you?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Compare iPhone models and find the one that suits your needs.
          </p>

          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map(product => {
              const firstVariant = product.variants[0];

              return (
                <div
                  key={product.id}
                  className="product-card group bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="bg-gradient-to-b from-foreground/5 to-transparent p-8">
                    <div className="flex items-center justify-center h-64 mb-6">
                      <img
                        src={firstVariant?.image || product.heroImage}
                        alt={product.name}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <div className="mb-6">
                      {product.isNew && (
                        <span className="inline-block px-3 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full mb-3">
                          New
                        </span>
                      )}
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-base text-muted-foreground mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-xl font-medium text-foreground">
                        From ${product.basePrice}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn-apple flex-1 justify-center text-sm"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Buy
                      </button>

                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center text-primary hover:underline text-base"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                Products coming soon. Check back later!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* All iPhone Models by Series */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Explore All iPhone Models
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            From iPhone 13 to iPhone 17 — find your perfect iPhone.
          </p>

          {/* iPhone 17 Series */}
          {products.some(p => p.id.includes('iphone-17')) && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Latest
                </span>
                iPhone 17 Series
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.id.includes('iphone-17')).map(product => (
                  <div
                    key={product.id}
                    className="product-card group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center h-48 mb-4">
                        <img
                          src={product.variants[0]?.image || product.heroImage}
                          alt={product.name}
                          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{product.shortName}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
                      <p className="text-base font-medium text-foreground mb-4">From ${product.basePrice}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn-apple flex-1 justify-center text-sm py-2"
                        >
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          Buy
                        </button>
                        <Link to={`/product/${product.id}`} className="text-primary hover:underline text-sm">
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* iPhone 16 Series */}
          {products.some(p => p.id.includes('iphone-16')) && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                iPhone 16 Series
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.id.includes('iphone-16')).map(product => (
                  <div
                    key={product.id}
                    className="product-card group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-center h-40 mb-4">
                        <img
                          src={product.variants[0]?.image || product.heroImage}
                          alt={product.name}
                          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-base font-semibold text-foreground mb-1">{product.shortName}</h4>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{product.tagline}</p>
                      <p className="text-sm font-medium text-foreground mb-3">From ${product.basePrice}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn-apple flex-1 justify-center text-xs py-2"
                        >
                          Buy
                        </button>
                        <Link to={`/product/${product.id}`} className="text-primary hover:underline text-xs">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* iPhone 15 Series */}
          {products.some(p => p.id.startsWith('iphone-15')) && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                iPhone 15 Series
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.id.startsWith('iphone-15')).map(product => (
                  <div
                    key={product.id}
                    className="product-card group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-center h-40 mb-4">
                        <img
                          src={product.variants[0]?.image || product.heroImage}
                          alt={product.name}
                          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-base font-semibold text-foreground mb-1">{product.shortName}</h4>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{product.tagline}</p>
                      <p className="text-sm font-medium text-foreground mb-3">From ${product.basePrice}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn-apple flex-1 justify-center text-xs py-2"
                        >
                          Buy
                        </button>
                        <Link to={`/product/${product.id}`} className="text-primary hover:underline text-xs">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* iPhone 14 Series */}
          {products.some(p => p.id.startsWith('iphone-14')) && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                iPhone 14 Series
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.id.startsWith('iphone-14')).map(product => (
                  <div
                    key={product.id}
                    className="product-card group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-center h-40 mb-4">
                        <img
                          src={product.variants[0]?.image || product.heroImage}
                          alt={product.name}
                          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-base font-semibold text-foreground mb-1">{product.shortName}</h4>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{product.tagline}</p>
                      <p className="text-sm font-medium text-foreground mb-3">From ${product.basePrice}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn-apple flex-1 justify-center text-xs py-2"
                        >
                          Buy
                        </button>
                        <Link to={`/product/${product.id}`} className="text-primary hover:underline text-xs">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* iPhone 13 Series */}
          {products.some(p => p.id.startsWith('iphone-13')) && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                iPhone 13 Series
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.id.startsWith('iphone-13')).map(product => (
                  <div
                    key={product.id}
                    className="product-card group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-center h-40 mb-4">
                        <img
                          src={product.variants[0]?.image || product.heroImage}
                          alt={product.name}
                          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-base font-semibold text-foreground mb-1">{product.shortName}</h4>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{product.tagline}</p>
                      <p className="text-sm font-medium text-foreground mb-3">From ${product.basePrice}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn-apple flex-1 justify-center text-xs py-2"
                        >
                          Buy
                        </button>
                        <Link to={`/product/${product.id}`} className="text-primary hover:underline text-xs">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trade-in CTA */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Get $200–$650 credit toward iPhone when you trade in iPhone 11 or higher.
          </h2>
          <Link to="/store" className="text-primary hover:underline font-medium">
            See what your device is worth →
          </Link>
        </div>
      </div>
    </div>
  );
}
