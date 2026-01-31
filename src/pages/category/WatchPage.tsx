import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Heart, Activity, Droplets, Sun, Battery, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductsByCategory, type Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

const healthFeatures = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'ECG app and irregular rhythm notifications.',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: Activity,
    title: 'Blood Oxygen',
    description: 'Measure your blood oxygen level anytime.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Droplets,
    title: 'Temperature',
    description: 'Track your temperature trends over time.',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Activity,
    title: 'Fitness Tracking',
    description: 'Close your rings every day with workouts.',
    color: 'bg-green-500/10 text-green-500',
  },
];

export default function WatchPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const ultraRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const products = getProductsByCategory('Watch');

  useEffect(() => {
    const hero = heroRef.current;
    const health = healthRef.current;
    const ultra = ultraRef.current;
    const grid = gridRef.current;

    if (!hero || !health || !ultra || !grid) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        hero.querySelectorAll('.animate-item'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        }
      );

      // Watch rotation animation
      gsap.to('.watch-hero', {
        rotateY: 15,
        duration: 4,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Health features animation
      const healthCards = health.querySelectorAll('.health-card');
      healthCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, rotateX: -10 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
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

      // Ultra section animation
      gsap.fromTo(
        ultra.querySelectorAll('.ultra-feature'),
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ultra,
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
    <div className="min-h-screen pt-20 pb-20 bg-background">
      {/* Hero Section - Watch specific gradient */}
      <div
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-red-500/5 via-background to-background"
      >
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pt-24 lg:pt-32">
          <span className="animate-item inline-block text-xs font-medium text-red-500 uppercase tracking-widest mb-4">
            Apple Watch
          </span>

          <h1 className="animate-item text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight mb-6">
            A healthy leap ahead.
          </h1>

          <p className="animate-item text-xl text-muted-foreground font-light mb-8 max-w-2xl">
            The most advanced health features. The most durable design. The most powerful chip ever in Apple Watch.
          </p>

          <div className="animate-item flex gap-4 mb-12">
            <Link to="/store" className="btn-apple">
              Shop Watch
            </Link>
            <Link to="#models" className="btn-apple-outline">
              Compare models
            </Link>
          </div>

          {/* Watch Hero Image */}
          <div className="animate-item watch-hero relative perspective-1000">
            <img
              src="/watch-card.png"
              alt="Apple Watch"
              className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Animated rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
          <div className="absolute inset-0 border-4 border-red-500/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-8 border-4 border-green-500/10 rounded-full animate-ping" style={{ animationDuration: '3.5s' }} />
          <div className="absolute inset-16 border-4 border-blue-500/10 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        </div>
      </div>

      {/* Health Features Section */}
      <div ref={healthRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-card-foreground mb-4 text-center">
            Your health, at a glance
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Apple Watch helps you understand your health with powerful sensors and intuitive apps.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthFeatures.map((feature, index) => (
              <div
                key={index}
                className="health-card bg-background rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Activity Rings Showcase */}
          <div className="mt-20 bg-foreground rounded-3xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-card mb-4">
                  Close your rings.
                </h3>
                <p className="text-lg text-card/70 mb-8">
                  Three rings: Move, Exercise, and Stand. Your goal is simple: close them every day. It's a whole new way to visualize and stay motivated.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="w-4 h-4 rounded-full bg-red-500 mb-2" />
                    <p className="text-card/70 text-sm">Move</p>
                  </div>
                  <div>
                    <div className="w-4 h-4 rounded-full bg-green-500 mb-2" />
                    <p className="text-card/70 text-sm">Exercise</p>
                  </div>
                  <div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 mb-2" />
                    <p className="text-card/70 text-sm">Stand</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 border-8 border-red-500/30 rounded-full" />
                  <div className="absolute inset-4 border-8 border-green-500/30 rounded-full" />
                  <div className="absolute inset-8 border-8 border-blue-500/30 rounded-full" />
                  {/* Animated fill */}
                  <div className="absolute inset-0 border-8 border-red-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra Section */}
      <div ref={ultraRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-foreground to-foreground/95">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-orange-500 font-medium text-sm uppercase tracking-wider mb-4">
                Apple Watch Ultra 2
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-card mb-6">
                Next-level adventure.
              </h2>
              <p className="text-lg text-card/70 mb-8">
                The most rugged and capable Apple Watch ever. Built for exploration, endurance, and water sports.
              </p>

              <div className="space-y-6">
                <div className="ultra-feature flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">3000 nits</h3>
                    <p className="text-card/60">Our brightest display ever</p>
                  </div>
                </div>

                <div className="ultra-feature flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Battery className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">36-hour battery</h3>
                    <p className="text-card/60">Up to 72 hours in Low Power Mode</p>
                  </div>
                </div>

                <div className="ultra-feature flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">Precision dual GPS</h3>
                    <p className="text-card/60">L1 and L5 for accurate tracking</p>
                  </div>
                </div>

                <div className="ultra-feature flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">100m water resistant</h3>
                    <p className="text-card/60">Dive ready with depth gauge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/watch-card.png"
                alt="Apple Watch Ultra 2"
                className="w-full max-w-md mx-auto h-auto drop-shadow-2xl"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-orange-500/30 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div id="models" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Find your watch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            From everyday fitness to extreme adventures, there's an Apple Watch for you.
          </p>

          <div
            ref={gridRef}
            className="grid md:grid-cols-2 gap-8"
          >
            {products.map(product => {
              const firstVariant = product.variants[0];

              return (
                <div
                  key={product.id}
                  className="product-card group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="flex items-center justify-center h-48 lg:h-64">
                        <img
                          src={firstVariant?.image || product.heroImage}
                          alt={product.name}
                          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div>
                        {product.isNew && (
                          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-500 text-xs font-medium rounded-full mb-3">
                            New
                          </span>
                        )}
                        <h3 className="text-2xl lg:text-3xl font-semibold text-card-foreground mb-2">
                          {product.name}
                        </h3>
                        <p className="text-base text-muted-foreground mb-3">
                          {product.tagline}
                        </p>
                        <p className="text-xl font-medium text-card-foreground mb-6">
                          From ${product.basePrice}
                        </p>

                        <div className="flex flex-col gap-3">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="btn-apple w-full justify-center"
                          >
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Buy
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

      {/* Band Customization CTA */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Express yourself with bands.
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Mix and match cases and bands to create a look that's uniquely you.
          </p>
          <Link to="/store" className="btn-apple">
            Create your style
          </Link>
        </div>
      </div>
    </div>
  );
}
