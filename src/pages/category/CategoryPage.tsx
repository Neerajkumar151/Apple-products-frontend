import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductsByCategory, type Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

interface CategoryPageProps {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  category: string;
}

export default function CategoryPage({
  title,
  tagline,
  description,
  heroImage,
  category,
}: CategoryPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const products = getProductsByCategory(category);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const grid = gridRef.current;

    if (!hero || !content || !grid) return;

    const ctx = gsap.context(() => {
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

      const cards = grid.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
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
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-[70vh] overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-apple-gray-50" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-32">
          <span className="animate-item inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-4">
            {category}
          </span>

          <h1 className="animate-item text-display-lg sm:text-display-xl font-semibold text-apple-gray-500 tracking-tight mb-6">
            {title}
          </h1>

          <p className="animate-item text-headline text-apple-gray-300 font-light mb-4">
            {tagline}
          </p>

          <p className="animate-item text-body-lg text-apple-gray-300 max-w-2xl">
            {description}
          </p>

          {/* Hero Image */}
          {heroImage && (
            <div className="mt-20 w-full max-w-5xl px-4">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div ref={contentRef} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-12 text-center">
            Explore the lineup
          </h2>

          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map(product => {
              const firstVariant = product.variants[0];

              return (
                <div
                  key={product.id}
                  className="product-card group bg-white rounded-apple overflow-hidden shadow-apple hover:shadow-apple-lg transition-all duration-500"
                >
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-headline font-semibold text-apple-gray-500 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-body text-apple-gray-300 mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-caption font-medium text-apple-gray-400">
                        From ${product.basePrice}
                      </p>
                    </div>

                    <div className="flex items-center justify-center h-64 mb-6">
                      <img
                        src={firstVariant?.image || product.heroImage}
                        alt={product.name}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
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
                        className="flex items-center text-apple-blue hover:underline text-body"
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
              <p className="text-body-lg text-apple-gray-300">
                Products coming soon. Check back later!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
