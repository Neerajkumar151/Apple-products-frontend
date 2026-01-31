import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Volume2, VolumeX, Headphones, MessageSquare, Cpu, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductsByCategory, type Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

const airpodsFeatures = [
  {
    icon: VolumeX,
    title: '2x Better ANC',
    description: 'Dramatically more powerful noise cancellation blocks outside noise.',
    highlight: 'Up to 2x',
  },
  {
    icon: Volume2,
    title: 'Adaptive Audio',
    description: 'Dynamically blends Transparency and Active Noise Cancellation.',
    highlight: 'Dynamic',
  },
  {
    icon: MessageSquare,
    title: 'Conversation Awareness',
    description: 'Automatically lowers volume and enhances voices when you speak.',
    highlight: 'Smart',
  },
  {
    icon: Headphones,
    title: 'Personalized Spatial Audio',
    description: 'Immersive sound tailored to the unique shape of your ears.',
    highlight: '3D Audio',
  },
];

export default function AirPodsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const products = getProductsByCategory('AirPods');

  useEffect(() => {
    const hero = heroRef.current;
    const features = featuresRef.current;
    const comparison = comparisonRef.current;
    const grid = gridRef.current;

    if (!hero || !features || !comparison || !grid) return;

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

      // AirPods floating animation
      gsap.to('.airpods-hero', {
        y: -15,
        rotation: 3,
        duration: 2.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Sound wave animation
      gsap.to('.sound-wave', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        ease: 'power1.out',
        repeat: -1,
        stagger: 0.3,
      });

      // Feature cards animation
      const featureCards = features.querySelectorAll('.feature-card');
      featureCards.forEach((card, index) => {
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

      // Comparison animation
      gsap.fromTo(
        comparison.querySelectorAll('.comparison-card'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: comparison,
            start: 'top 75%',
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
      {/* Hero Section - AirPods clean white theme */}
      <div
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-card via-card to-background"
      >
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pt-24 lg:pt-32">
          <span className="animate-item inline-block text-xs font-medium text-primary uppercase tracking-widest mb-4">
            AirPods Pro
          </span>

          <h1 className="animate-item text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight mb-4">
            Adaptive Audio.
          </h1>
          <h2 className="animate-item text-4xl sm:text-5xl lg:text-6xl font-semibold text-muted-foreground tracking-tight mb-6">
            Now playing.
          </h2>

          <p className="animate-item text-xl text-muted-foreground font-light mb-8 max-w-2xl">
            Rebuilt from the sound up. AirPods Pro feature the H2 chip for breakthrough audio performance.
          </p>

          <div className="animate-item flex gap-4 mb-16">
            <Link to="/store" className="btn-apple">
              Shop AirPods
            </Link>
            <Link to="#compare" className="btn-apple-outline">
              Compare models
            </Link>
          </div>

          {/* AirPods Hero Image with Sound Waves */}
          <div className="animate-item relative">
            <img
              src="/airpods-card.png"
              alt="AirPods Pro"
              className="airpods-hero w-full max-w-md h-auto object-contain drop-shadow-xl"
            />
            
            {/* Animated sound waves */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="sound-wave absolute w-64 h-64 border-2 border-primary/20 rounded-full" />
              <div className="sound-wave absolute w-64 h-64 border-2 border-primary/20 rounded-full" style={{ animationDelay: '0.3s' }} />
              <div className="sound-wave absolute w-64 h-64 border-2 border-primary/20 rounded-full" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* H2 Chip Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-10 h-10 text-primary" />
                <span className="text-primary font-medium">Apple H2 chip</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-card mb-6">
                The brain behind
                <br />
                <span className="text-card/70">the breakthrough.</span>
              </h2>
              <p className="text-lg text-card/70 mb-8">
                The Apple-designed H2 chip is the force behind AirPods Pro. It works with the audio driver and amplifier to enable a wide range of smart features.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-card/5 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">2x</div>
                  <p className="text-card/70 text-sm">More ANC than previous gen</p>
                </div>
                <div className="p-4 bg-card/5 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">6hrs</div>
                  <p className="text-card/70 text-sm">Listening time with ANC</p>
                </div>
                <div className="p-4 bg-card/5 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">30hrs</div>
                  <p className="text-card/70 text-sm">Total with charging case</p>
                </div>
                <div className="p-4 bg-card/5 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">IP54</div>
                  <p className="text-card/70 text-sm">Dust and water resistant</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <img
                  src="/airpods-card.png"
                  alt="AirPods Pro with H2 chip"
                  className="w-3/4 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Sound that adapts to you
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Intelligent audio features that respond to your environment and listening preferences.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {airpodsFeatures.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded mb-3">
                  {feature.highlight}
                </span>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audio Modes Showcase */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-12">
            Three modes. One seamless experience.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8">
              <VolumeX className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Active Noise Cancellation</h3>
              <p className="text-muted-foreground">Block out the world and focus on your audio.</p>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <Volume2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Transparency</h3>
              <p className="text-muted-foreground">Hear what's around you while enjoying your audio.</p>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <Music className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Adaptive Audio</h3>
              <p className="text-muted-foreground">Automatically adjusts based on your environment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div id="compare" ref={comparisonRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-card-foreground mb-4 text-center">
            Which AirPods are right for you?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Compare features to find your perfect pair.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="comparison-card bg-background rounded-3xl p-8 text-center hover:shadow-lg transition-shadow">
              <img
                src="/airpods-card.png"
                alt="AirPods Pro"
                className="w-32 h-32 object-contain mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-foreground mb-2">AirPods Pro</h3>
              <p className="text-primary font-medium mb-4">$249</p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  Active Noise Cancellation
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  Adaptive Audio
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  Personalized Spatial Audio
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  MagSafe Charging Case
                </li>
              </ul>
              <Link to="/store" className="btn-apple w-full justify-center">
                Buy
              </Link>
            </div>

            <div className="comparison-card bg-background rounded-3xl p-8 text-center hover:shadow-lg transition-shadow">
              <img
                src="/airpods-card.png"
                alt="AirPods Max"
                className="w-32 h-32 object-contain mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-foreground mb-2">AirPods Max</h3>
              <p className="text-primary font-medium mb-4">$549</p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  Over-ear design
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  High-fidelity audio
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  20-hour battery life
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</span>
                  Premium materials
                </li>
              </ul>
              <Link to="/store" className="btn-apple w-full justify-center">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Shop AirPods
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Find the perfect AirPods for you.
          </p>

          <div
            ref={gridRef}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {products.map(product => {
              const firstVariant = product.variants[0];

              return (
                <div
                  key={product.id}
                  className="product-card group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-center h-48 lg:h-56 mb-8 bg-secondary/30 rounded-2xl">
                      <img
                        src={firstVariant?.image || product.heroImage}
                        alt={product.name}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-base text-muted-foreground mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-xl font-medium text-card-foreground">
                        ${product.basePrice}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn-apple flex-1 justify-center"
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

      {/* Engraving CTA */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Make them uniquely yours.
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Engrave your AirPods charging case with a mix of emoji, names, initials, and numbers — free.
          </p>
          <Link to="/store" className="btn-apple">
            Engrave yours
          </Link>
        </div>
      </div>
    </div>
  );
}
