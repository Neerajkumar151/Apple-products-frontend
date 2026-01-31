import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Tv, Music, Zap, ShieldCheck, Smartphone, Cast, Plus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Apple TV 4K',
    tagline: 'The Apple experience. Cinematic in every sense.',
    price: 129,
    image: 'https://www.apple.com/v/tv-home/k/images/overview/apple_tv_4k__b89u7p5sqpqq_large.jpg',
    description: 'Apple TV 4K brings the best of TV together with your favorite Apple devices and services.',
    icon: Tv,
  },
  {
    name: 'HomePod',
    tagline: 'Profound sound.',
    price: 299,
    image: 'https://www.apple.com/v/tv-home/k/images/overview/homepod__eam7sb8cr1m6_large.jpg',
    description: 'HomePod is a powerhouse of a speaker. Apple-engineered audio technology and advanced software.',
    icon: Music,
  },
  {
    name: 'HomePod mini',
    tagline: 'Room-filling sound.',
    price: 99,
    image: 'https://www.apple.com/v/tv-home/k/images/overview/homepod_mini__f799t9au6u6e_large.jpg',
    description: 'HomePod mini delivers surprisingly big sound for such a small speaker.',
    icon: Home,
  },
];

const smartHomeFeatures = [
  {
    title: 'Easy Control',
    description: 'The Home app makes it easy to navigate and control all your smart home accessories.',
    icon: Smartphone,
  },
  {
    title: 'Private & Secure',
    description: 'HomeKit technology ensures your home data is encrypted and stays on your device.',
    icon: ShieldCheck,
  },
  {
    title: 'Intercom',
    description: 'Send messages from one HomePod to another throughout the house.',
    icon: Cast,
  },
];

export default function TVHomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.animate-item',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out' }
      );

      // Scroll reveal for product cards
      gsap.utils.toArray('.product-card').forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // Feature reveal
      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: '.feature-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f5f7] pt-32 pb-20 overflow-x-hidden">
      
      {/* Immersive Hero Section */}
      <section ref={heroRef} className="relative container mx-auto px-6 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="animate-item inline-block text-sm font-semibold text-apple-blue uppercase tracking-[0.2em] mb-4">
            TV & Home
          </span>
          <h1 className="animate-item text-6xl md:text-8xl font-bold tracking-tight text-[#1d1d1f] mb-8">
            The future <br /> hits home.
          </h1>
          <p className="animate-item text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl mx-auto leading-relaxed">
            Simply connect your favorite devices and transform <br className="hidden md:block" />
            your house into a smart, private, and secure home.
          </p>
        </div>

        {/* Visual Hero Element */}
        <div className="animate-item mt-16 relative rounded-[40px] overflow-hidden aspect-[21/9] bg-black shadow-2xl">
          <img 
            src="https://www.apple.com/v/tv-home/k/images/overview/hero__eb66v8v869ae_large.jpg" 
            alt="Apple TV and HomePod"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </section>

      {/* Main Product Showcase Grid */}
      <section className="container mx-auto px-6 mb-40">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The lineup for every room.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="product-card group relative bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-700"
              >
                <div className="mb-8 p-4 bg-[#f5f5f7] rounded-full group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-[#1d1d1f]" />
                </div>
                
                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-2">{product.name}</h3>
                <p className="text-[#86868b] text-lg font-medium mb-4">{product.tagline}</p>
                <p className="text-[#1d1d1f] font-semibold mb-6">From ${product.price}</p>
                
                <div className="h-64 mb-8 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-auto flex flex-col gap-4 w-full">
                  <button className="bg-apple-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0077ed] transition-colors">
                    Buy
                  </button>
                  <Link to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-apple-blue hover:underline flex items-center justify-center font-medium">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Smart Home Deep Dive Section */}
      <section className="bg-white py-32 mb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <Zap className="w-16 h-16 text-apple-blue mb-4" />
              <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight">
                Your home at <br /> your command.
              </h2>
              <p className="text-xl text-[#86868b] leading-relaxed max-w-lg">
                The Home app connects all your smart home accessories. Control your lights, 
                locks, and thermostats from your iPhone, iPad, or Mac. It even works with 
                Siri so you can use your voice.
              </p>
              
              <div className="feature-grid grid gap-6 pt-8">
                {smartHomeFeatures.map((f) => {
                  const FIcon = f.icon;
                  return (
                    <div key={f.title} className="feature-item flex gap-4 p-6 bg-[#f5f5f7] rounded-2xl">
                      <FIcon className="w-6 h-6 text-apple-blue flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-[#1d1d1f]">{f.title}</h4>
                        <p className="text-[#86868b] text-sm">{f.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <img 
                src="https://www.apple.com/v/tv-home/k/images/overview/home_app__fd9unf12p96u_large.jpg" 
                alt="Home App on iPhone"
                className="rounded-[40px] shadow-2xl"
              />
              {/* Floating UI Element Simulation */}
              <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-xl p-6 rounded-[24px] shadow-lg hidden md:block border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-apple-orange rounded-full flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#86868b] uppercase tracking-wider font-bold">Scene</p>
                    <p className="text-sm font-bold">Movie Night</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-[#1d1d1f] rounded-[40px] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Matter. <br /> The new standard.</h2>
            <p className="text-xl text-gray-400 mb-8">
              Matter is a new smart home connectivity standard that enables a wide variety 
              of smart home accessories to work together across ecosystems.
            </p>
            <button className="flex items-center gap-2 text-white font-bold hover:underline">
              Learn about Matter <Plus className="w-5 h-5" />
            </button>
          </div>
          {/* Subtle logo background or pattern could go here */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 hidden lg:block">
             <div className="h-full flex items-center justify-center">
                <Home className="w-64 h-64" />
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}