import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Cpu, Battery, Monitor, Zap, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductsByCategory, type Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

const macFeatures = [
  {
    icon: Cpu,
    title: 'Apple Silicon',
    description: 'M3 chips deliver incredible performance and power efficiency.',
  },
  {
    icon: Battery,
    title: 'All-Day Battery',
    description: 'Up to 18 hours of battery life on MacBook Air.',
  },
  {
    icon: Monitor,
    title: 'Stunning Displays',
    description: 'Liquid Retina and Liquid Retina XDR displays with P3 wide color.',
  },
  {
    icon: VolumeX,
    title: 'Silent Performance',
    description: 'Fanless design on MacBook Air for completely silent operation.',
  },
  {
    icon: Zap,
    title: 'Instant Wake',
    description: 'Open your Mac and get to work instantly.',
  },
];

export default function MacPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const products = getProductsByCategory('Mac');

  useEffect(() => {
    const hero = heroRef.current;
    const features = featuresRef.current;
    const grid = gridRef.current;
    const specs = specsRef.current;

    if (!hero || !features || !grid || !specs) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        hero.querySelectorAll('.animate-item'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );

      // Feature cards animation
      const featureCards = features.querySelectorAll('.feature-card');
      featureCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
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

      // Specs section animation
      gsap.fromTo(
        specs.querySelectorAll('.spec-item'),
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: specs,
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
      {/* Hero Section - Mac specific dark gradient */}
      <div
        ref={heroRef}
        className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-foreground via-foreground/95 to-foreground/90"
      >
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pt-32">
          <span className="animate-item inline-block text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Mac
          </span>

          <h1 className="animate-item text-5xl sm:text-7xl lg:text-8xl font-semibold text-card tracking-tight mb-6">
            If you can dream it,
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Mac can do it.
            </span>
          </h1>

          <p className="animate-item text-xl text-card/70 font-light mb-8 max-w-2xl">
            From the M3 chip to stunning Retina displays, Mac is designed to let you work, play, and create in ways you never imagined.
          </p>

          <div className="animate-item flex gap-4">
            <Link to="/store" className="btn-apple">
              Shop Mac
            </Link>
            <Link to="#lineup" className="btn-apple-outline border-card/30 text-card hover:bg-card hover:text-foreground">
              Compare models
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-16 w-full max-w-4xl">
            <img
              src="/macbook-card.png"
              alt="MacBook"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Why Mac
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Every Mac is designed to work together seamlessly. With Apple silicon, macOS, and built-in apps.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {macFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specs Highlight Section */}
      <div ref={specsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-card mb-8">
                Built for performance.
                <br />
                <span className="text-muted-foreground">Designed for pros.</span>
              </h2>

              <div className="space-y-6">
                <div className="spec-item flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">M3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">Apple M3 Chip</h3>
                    <p className="text-muted-foreground">8-core CPU, up to 10-core GPU. 60% faster than M1.</p>
                  </div>
                </div>

                <div className="spec-item flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">18h</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">All-Day Battery</h3>
                    <p className="text-muted-foreground">Up to 18 hours of movie playback on a single charge.</p>
                  </div>
                </div>

                <div className="spec-item flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">XDR</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">Liquid Retina XDR</h3>
                    <p className="text-muted-foreground">1600 nits peak HDR brightness. 1,000,000:1 contrast ratio.</p>
                  </div>
                </div>

                <div className="spec-item flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">6E</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card">Wi-Fi 6E</h3>
                    <p className="text-muted-foreground">Blazing fast wireless connectivity for all your needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/macbook-card.png"
                alt="MacBook Pro"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div id="lineup" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Explore the Mac lineup
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Find the Mac that's right for you.
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
                    <div className="mb-8">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                        {product.isNew ? 'New' : 'Popular'}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-card-foreground mb-3">
                        {product.name}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-2">
                        {product.tagline}
                      </p>
                      <p className="text-xl font-medium text-card-foreground">
                        From ${product.basePrice}
                      </p>
                    </div>

                    <div className="flex items-center justify-center h-64 lg:h-80 mb-8">
                      <img
                        src={firstVariant?.image || product.heroImage}
                        alt={product.name}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn-apple w-full sm:w-auto justify-center"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Buy
                      </button>

                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center text-primary hover:underline text-base font-medium"
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

      {/* Comparison Table */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-12 text-center">
            Compare Mac models
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-muted-foreground font-normal">Feature</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">MacBook Air 13"</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">MacBook Pro 14"</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">Chip</td>
                  <td className="text-center py-4 px-4 text-foreground">M3</td>
                  <td className="text-center py-4 px-4 text-foreground">M3 Pro</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">Display</td>
                  <td className="text-center py-4 px-4 text-foreground">13.6" Liquid Retina</td>
                  <td className="text-center py-4 px-4 text-foreground">14.2" Liquid Retina XDR</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">Battery</td>
                  <td className="text-center py-4 px-4 text-foreground">Up to 18 hours</td>
                  <td className="text-center py-4 px-4 text-foreground">Up to 17 hours</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">Weight</td>
                  <td className="text-center py-4 px-4 text-foreground">2.7 lbs</td>
                  <td className="text-center py-4 px-4 text-foreground">3.4 lbs</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-muted-foreground">Starting Price</td>
                  <td className="text-center py-4 px-4 text-foreground font-semibold">$1,099</td>
                  <td className="text-center py-4 px-4 text-foreground font-semibold">$1,599</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
