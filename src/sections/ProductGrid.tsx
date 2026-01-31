import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    productId: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    price: 'From $999',
    image: '/iphone-card.png',
    color: 'bg-gradient-to-b from-apple-gray-100 to-white',
  },
  {
    id: 2,
    productId: 'macbook-air-m3',
    name: 'MacBook Air',
    tagline: 'Lean. Mean. M3 machine.',
    price: 'From $1099',
    image: '/macbook-card.png',
    color: 'bg-gradient-to-b from-apple-gray-100 to-white',
  },
  {
    id: 3,
    productId: 'ipad-pro-m2',
    name: 'iPad Pro',
    tagline: 'Supercharged by M2.',
    price: 'From $799',
    image: '/ipad-card.png',
    color: 'bg-gradient-to-b from-apple-gray-100 to-white',
  },
  {
    id: 4,
    productId: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra',
    tagline: 'Next-level adventure.',
    price: 'From $799',
    image: '/watch-card.png',
    color: 'bg-gradient-to-b from-apple-gray-100 to-white',
  },
  {
    id: 5,
    productId: 'airpods-pro-2',
    name: 'AirPods Pro',
    tagline: 'Adaptive Audio. Now playing.',
    price: 'From $249',
    image: '/airpods-card.png',
    color: 'bg-gradient-to-b from-apple-gray-100 to-white',
  },
  {
    id: 6,
    productId: 'apple-vision-pro',
    name: 'Apple Vision Pro',
    tagline: 'Spatial computing. Here.',
    price: 'From $3499',
    image: '/vision-card.png',
    color: 'bg-gradient-to-b from-apple-gray-100 to-white',
  },
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid cards animation
      const cards = grid.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            rotateX: 45,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-apple-gray-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-4">
            The Latest
          </span>
          <h2 className="text-display-md sm:text-display-lg font-semibold text-apple-gray-500 tracking-tight mb-6">
            Check out the lineup.
          </h2>
          <p className="text-body-lg text-apple-gray-300 font-light max-w-2xl mx-auto">
            Discover the perfect device for your life.
          </p>
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group relative rounded-apple overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Background */}
              <div className={`${product.color} p-8 h-full min-h-[480px] flex flex-col`}>
                {/* Product Info */}
                <div className="mb-6">
                  <h3 className="text-headline font-semibold text-apple-gray-500 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-body text-apple-gray-300 mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-caption font-medium text-apple-gray-400">
                    {product.price}
                  </p>
                </div>

                {/* Product Image */}
                <div className="flex-1 flex items-center justify-center relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-[280px] h-auto object-contain transition-all duration-700 ease-apple group-hover:scale-110 group-hover:-translate-y-2"
                  />
                </div>

                <div
                  className={`mt-6 flex items-center gap-4 transition-all duration-500 ease-apple ${
                    hoveredId === product.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Link to={`/product/${product.productId}`} className="btn-apple flex-1 justify-center text-sm py-2.5">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Buy
                  </Link>
                  <Link
                    to={`/product/${product.productId}`}
                    className="flex items-center text-apple-blue hover:underline text-body"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Hover shadow overlay */}
              <div className="absolute inset-0 shadow-apple opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-apple" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
