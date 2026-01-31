import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Pencil, Layers, Video, Cpu, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductsByCategory, type Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

const iPadCapabilities = [
  {
    icon: Pencil,
    title: 'Apple Pencil',
    description: 'Write, draw, and annotate with pixel-perfect precision.',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Layers,
    title: 'Stage Manager',
    description: 'Resize apps and multitask like never before.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: Video,
    title: 'Center Stage',
    description: 'Stay in frame during video calls automatically.',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Cpu,
    title: 'M2 Power',
    description: 'Desktop-class performance in your hands.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Fingerprint,
    title: 'Face ID',
    description: 'Secure authentication with just a glance.',
    color: 'bg-pink-500/10 text-pink-500',
  },
];

export default function iPadPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const accessoriesRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const products = getProductsByCategory('iPad');

  useEffect(() => {
    const hero = heroRef.current;
    const capabilities = capabilitiesRef.current;
    const grid = gridRef.current;
    const accessories = accessoriesRef.current;

    if (!hero || !capabilities || !grid || !accessories) return;

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

      // Capabilities animation with stagger
      const capCards = capabilities.querySelectorAll('.capability-card');
      capCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.08,
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

      // Accessories section
      gsap.fromTo(
        accessories.querySelectorAll('.accessory-item'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: accessories,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
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
      {/* Hero Section - iPad specific gradient */}
      <div
        ref={heroRef}
        className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-secondary via-background to-primary/5"
      >
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 lg:pt-32">
          <div>
            <span className="animate-item inline-block text-xs font-medium text-primary uppercase tracking-widest mb-4">
              iPad
            </span>

            <h1 className="animate-item text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight mb-6">
              Your next computer
              <br />
              <span className="text-muted-foreground">is not a computer.</span>
            </h1>

            <p className="animate-item text-xl text-muted-foreground font-light mb-8 max-w-lg">
              iPad is so versatile, it's more than up to any task. Whether you're a creative pro or just getting started.
            </p>

            <div className="animate-item flex flex-wrap gap-4">
              <Link to="/store" className="btn-apple">
                Shop iPad
              </Link>
              <Link to="#models" className="btn-apple-outline">
                View models
              </Link>
            </div>
          </div>

          <div className="animate-item relative">
            <img
              src="/ipad-card.png"
              alt="iPad"
              className="w-full h-auto object-contain max-w-lg mx-auto lg:max-w-none drop-shadow-xl"
            />
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>
      </div>

      {/* Capabilities Section */}
      <div ref={capabilitiesRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-card-foreground mb-4 text-center">
            Made for everything you do
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            iPad adapts to whatever you want to do. Work, create, learn, play—iPad does it all.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {iPadCapabilities.map((cap, index) => (
              <div
                key={index}
                className="capability-card bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${cap.color} flex items-center justify-center mx-auto mb-4`}>
                  <cap.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Showcase */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-card mb-6">
            Liquid Retina XDR display.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Extreme Dynamic Range. 1600 nits peak brightness. ProMotion technology for smooth scrolling and responsive Apple Pencil.
          </p>

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-foreground to-foreground/80 p-8 lg:p-16">
            <img
              src="/ipad-card.png"
              alt="iPad Display"
              className="w-full max-w-3xl mx-auto h-auto"
            />

            {/* Display specs badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full text-card text-sm font-medium">
                120Hz ProMotion
              </span>
              <span className="px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full text-card text-sm font-medium">
                P3 Wide Color
              </span>
              <span className="px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full text-card text-sm font-medium">
                True Tone
              </span>
              <span className="px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full text-card text-sm font-medium">
                1600 nits HDR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div id="models" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Explore iPad models
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            There's an iPad for everyone.
          </p>

          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map(product => {
              const firstVariant = product.variants[0];

              return (
                <div
                  key={product.id}
                  className="product-card group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
                >
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-base text-muted-foreground mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-lg font-medium text-primary">
                        From ${product.basePrice}
                      </p>
                    </div>

                    <div className="flex items-center justify-center h-56 mb-6 bg-secondary/30 rounded-2xl">
                      <img
                        src={firstVariant?.image || product.heroImage}
                        alt={product.name}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

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

      {/* Accessories Section */}
      <div ref={accessoriesRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Essential accessories
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Do even more with iPad.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="accessory-item bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Pencil className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Apple Pencil</h3>
              <p className="text-muted-foreground mb-4">Precision meets creativity.</p>
              <p className="text-lg font-medium text-foreground">From $79</p>
            </div>

            <div className="accessory-item bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Magic Keyboard</h3>
              <p className="text-muted-foreground mb-4">The ultimate iPad keyboard.</p>
              <p className="text-lg font-medium text-foreground">From $299</p>
            </div>

            <div className="accessory-item bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Smart Folio</h3>
              <p className="text-muted-foreground mb-4">Protection that stands up.</p>
              <p className="text-lg font-medium text-foreground">From $79</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
