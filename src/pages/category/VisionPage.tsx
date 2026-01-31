import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Eye, Box, Camera, Globe, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductsByCategory, type Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

const visionFeatures = [
  {
    icon: Eye,
    title: 'EyeSight',
    description: 'Your eyes are never hidden. People can see when you are using apps or immersed.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Box,
    title: 'Spatial Computing',
    description: 'Apps exist in your space. Navigate with your eyes, hands, and voice.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Camera,
    title: '3D Photos & Video',
    description: 'Capture and relive memories in stunning three dimensions.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Environments',
    description: 'Transform your surroundings into immersive destinations.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Hand,
    title: 'Natural Input',
    description: 'Control with natural gestures. No controllers needed.',
    gradient: 'from-indigo-500 to-violet-500',
  },
];

const visionSpecs = [
  { label: 'Display', value: '23 million pixels', detail: 'More than 4K per eye' },
  { label: 'Chips', value: 'M2 + R1', detail: '12ms latency' },
  { label: 'Cameras', value: '12 cameras', detail: '5 sensors, 6 microphones' },
  { label: 'Audio', value: 'Spatial Audio', detail: 'Personalized sound' },
];

export default function VisionPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const products = getProductsByCategory('Vision');

  useEffect(() => {
    const hero = heroRef.current;
    const features = featuresRef.current;
    const specs = specsRef.current;
    const grid = gridRef.current;

    if (!hero || !features || !specs || !grid) return;

    const ctx = gsap.context(() => {
      // Hero animations with dramatic reveal
      gsap.fromTo(
        hero.querySelectorAll('.animate-item'),
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      // Feature cards with 3D effect
      const featureCards = features.querySelectorAll('.feature-card');
      featureCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotateY: -20 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
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

      // Specs counter animation
      const specItems = specs.querySelectorAll('.spec-item');
      specItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );
      });

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
      {/* Hero Section - Vision Pro immersive dark theme */}
      <div
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-purple-900/20 to-foreground" />
        
        {/* Floating light orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[120px]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px]" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pt-24 lg:pt-32">
          <span className="animate-item inline-block text-xs font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-widest mb-4">
            Apple Vision Pro
          </span>

          <h1 className="animate-item text-5xl sm:text-7xl lg:text-8xl font-semibold text-card tracking-tight mb-4">
            Welcome to the era of
          </h1>
          <h2 className="animate-item text-4xl sm:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            spatial computing.
          </h2>

          <p className="animate-item text-xl text-card/70 font-light mb-8 max-w-2xl">
            Apple Vision Pro seamlessly blends digital content with your physical space using revolutionary technology.
          </p>

          <div className="animate-item flex gap-4 mb-16">
            <Link to="/store" className="btn-apple bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Pre-order now
            </Link>
            <Link to="#features" className="btn-apple-outline border-card/30 text-card hover:bg-card/10">
              Explore features
            </Link>
          </div>

          {/* Vision Pro Hero Image */}
          <div className="animate-item relative w-full max-w-3xl mx-auto">
            <img
              src="/vision-card.png"
              alt="Apple Vision Pro"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
            {/* Reflection effect */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent blur-xl" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" ref={featuresRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-card-foreground mb-4 text-center">
            A new dimension of computing
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Experience a revolutionary way to work, create, and connect.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {visionFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-card group bg-background rounded-2xl p-6 hover:shadow-lg transition-all duration-300 perspective-1000"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immersive Display Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-card mb-6">
              More pixels than a 4K TV.
              <br />
              <span className="text-muted-foreground">For each eye.</span>
            </h2>
            <p className="text-xl text-card/70 max-w-3xl mx-auto">
              An ultra-high-resolution display system with 23 million pixels across two displays, and custom Apple silicon in a unique dual-chip design.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-purple-900/30 to-foreground p-8 lg:p-16">
            <img
              src="/vision-card.png"
              alt="Vision Pro Display"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            
            {/* Specs overlay */}
            <div ref={specsRef} className="flex flex-wrap justify-center gap-6 mt-12">
              {visionSpecs.map((spec, index) => (
                <div key={index} className="spec-item text-center px-6 py-4 bg-card/5 backdrop-blur-sm rounded-2xl border border-card/10">
                  <div className="text-2xl font-bold text-card mb-1">{spec.value}</div>
                  <div className="text-sm text-card/60">{spec.label}</div>
                  <div className="text-xs text-card/40 mt-1">{spec.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Environments Showcase */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                Transform your space.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Environments let you go beyond the dimensions of your physical space. Expand your view with stunning, dynamic landscapes that fill your room—from the calm of Mt. Hood to the energy of Yosemite.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600" />
                  <div>
                    <h3 className="font-medium text-foreground">Mt. Hood</h3>
                    <p className="text-sm text-muted-foreground">Peaceful mountain serenity</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-red-600" />
                  <div>
                    <h3 className="font-medium text-foreground">Yosemite</h3>
                    <p className="text-sm text-muted-foreground">Majestic valley views</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800" />
                  <div>
                    <h3 className="font-medium text-foreground">Moon</h3>
                    <p className="text-sm text-muted-foreground">Lunar surface exploration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 flex items-center justify-center">
                <Globe className="w-32 h-32 text-card/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div id="buy" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-card-foreground mb-4 text-center">
            Choose your Vision Pro
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Select the storage that fits your needs.
          </p>

          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {products.map(product => {
              const firstVariant = product.variants[0];

              return (
                <div
                  key={product.id}
                  className="product-card group bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
                >
                  <div className="bg-gradient-to-b from-purple-500/5 to-transparent p-8">
                    <div className="flex items-center justify-center h-48 mb-6">
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
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 text-xs font-medium rounded-full mb-3">
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

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn-apple w-full justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Pre-order
                      </button>

                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center justify-center text-primary hover:underline text-base font-medium py-2"
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

      {/* What's in the box */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            What's in the box
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="px-4 py-2 bg-card rounded-full text-sm">Apple Vision Pro</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm">Solo Knit Band</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm">Dual Loop Band</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm">Light Seal</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm">Battery</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm">USB-C Cable</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm">Power Adapter</span>
            <span className="px-4 py-2 bg-card rounded-full text-sm">Polishing Cloth</span>
          </div>
        </div>
      </div>
    </div>
  );
}
