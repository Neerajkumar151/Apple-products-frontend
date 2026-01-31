import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Zap, Cpu, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import type { Product } from '../../data/products';

gsap.registerPlugin(ScrollTrigger);

const ITEMS_PER_PAGE = 8;

const featuredCategories = [
  { name: 'iPhone', path: '/iphone', icon: Camera },
  { name: 'Mac', path: '/mac', icon: Cpu },
  { name: 'iPad', path: '/ipad', icon: Zap },
  { name: 'Watch', path: '/watch', icon: Zap },
  { name: 'AirPods', path: '/airpods', icon: Zap },
  { name: 'Vision', path: '/vision', icon: Zap },
];

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink: string;
  addToCart: (item: Parameters<ReturnType<typeof useCart>['addToCart']>[0]) => void;
}

function ProductSection({ title, products: sectionProducts, viewAllLink, addToCart }: ProductSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sectionProducts.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedProducts = sectionProducts.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-display-xs font-semibold text-apple-gray-500">
          {title}
        </h3>
        <Link
          to={viewAllLink}
          className="flex items-center text-apple-blue hover:underline text-body font-medium"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card group bg-white rounded-apple overflow-hidden shadow-apple hover:shadow-apple-lg transition-all duration-500"
          >
            <div className="p-6">
              {product.isNew && (
                <span className="inline-block px-2 py-0.5 bg-apple-orange text-white text-xs font-medium rounded-full mb-2">
                  New
                </span>
              )}
              <div className="flex items-center justify-center h-40 mb-4">
                <img
                  src={product.variants[0]?.image || product.heroImage}
                  alt={product.name}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-body font-semibold text-apple-gray-500 mb-1">
                {product.shortName || product.name}
              </h4>
              <p className="text-caption text-apple-gray-300 mb-2 line-clamp-2">
                {product.tagline}
              </p>
              <p className="text-caption font-medium text-apple-gray-400 mb-4">
                From ${product.basePrice}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const variant = product.variants[0];
                    if (variant) {
                      addToCart({
                        productId: product.id,
                        variantId: variant.id,
                        name: product.name,
                        shortName: product.shortName,
                        price: variant.price,
                        originalPrice: variant.price,
                        image: variant.image,
                        color: variant.color?.name,
                        storage: variant.storage?.size,
                        category: product.category,
                      });
                    }
                  }}
                  className="btn-apple flex-1 justify-center text-xs py-2"
                >
                  <ShoppingBag className="w-3 h-3 mr-1" />
                  Buy
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="text-apple-blue hover:underline text-caption"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-apple-gray-100 text-apple-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-apple-gray-200 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-apple-blue text-white'
                    : 'bg-apple-gray-100 text-apple-gray-500 hover:bg-apple-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-apple-gray-100 text-apple-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-apple-gray-200 transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function StorePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  // Get all products organized by category
  const allProducts = products;
  const iPhones = allProducts.filter(p => p.category === 'iPhone');
  const macs = allProducts.filter(p => p.category === 'Mac');
  const ipads = allProducts.filter(p => p.category === 'iPad');
  const watches = allProducts.filter(p => p.category === 'Watch');
  const airpods = allProducts.filter(p => p.category === 'AirPods');
  const visionProducts = allProducts.filter(p => p.category === 'Vision');
  const otherProducts = allProducts.filter(p => 
    !['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Vision'].includes(p.category)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const cards = productsRef.current?.querySelectorAll('.product-card');
      if (cards && cards.length > 0) {
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
            delay: (index % 4) * 0.1,
          }
        );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-apple-gray-50 pt-20">
      {/* Hero */}
      <div
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-apple-gray-50"
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <span className="animate-item inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-4">
            Store
          </span>
          <h1 className="animate-item text-display-lg sm:text-display-xl font-semibold text-apple-gray-500 tracking-tight mb-6">
            Apple Store Online
          </h1>
          <p className="animate-item text-headline text-apple-gray-300 font-light mb-8">
            The best way to buy the products you love.
          </p>

          {/* Category Links */}
          <div className="animate-item flex flex-wrap justify-center gap-4">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                className="bg-white px-6 py-3 rounded-full shadow-apple hover:shadow-apple-lg transition-all duration-300 text-apple-gray-500 font-medium"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div ref={productsRef} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-4">
            The latest.
          </h2>
          <p className="text-body-lg text-apple-gray-300 mb-12">
            Take a look at what&apos;s new, right now.
          </p>

          {/* Featured row - 6 items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allProducts.slice(0, 6).map((product) => (
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

                  <div className="flex items-center justify-center h-48 mb-6">
                    <img
                      src={product.variants[0]?.image || product.heroImage}
                      alt={product.name}
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        const variant = product.variants[0];
                        if (variant) {
                          addToCart({
                            productId: product.id,
                            variantId: variant.id,
                            name: product.name,
                            shortName: product.shortName,
                            price: variant.price,
                            originalPrice: variant.price,
                            image: variant.image,
                            color: variant.color?.name,
                            storage: variant.storage?.size,
                            category: product.category,
                          });
                        }
                      }}
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
            ))}
          </div>

          {/* iPhone Section */}
          {iPhones.length > 0 && (
            <ProductSection
              title="iPhone"
              products={iPhones}
              viewAllLink="/iphone"
              addToCart={addToCart}
            />
          )}

          {/* Mac Section */}
          {macs.length > 0 && (
            <ProductSection
              title="Mac"
              products={macs}
              viewAllLink="/mac"
              addToCart={addToCart}
            />
          )}

          {/* iPad Section */}
          {ipads.length > 0 && (
            <ProductSection
              title="iPad"
              products={ipads}
              viewAllLink="/ipad"
              addToCart={addToCart}
            />
          )}

          {/* Watch Section */}
          {watches.length > 0 && (
            <ProductSection
              title="Apple Watch"
              products={watches}
              viewAllLink="/watch"
              addToCart={addToCart}
            />
          )}

          {/* AirPods Section */}
          {airpods.length > 0 && (
            <ProductSection
              title="AirPods"
              products={airpods}
              viewAllLink="/airpods"
              addToCart={addToCart}
            />
          )}

          {/* Vision Section */}
          {visionProducts.length > 0 && (
            <ProductSection
              title="Vision"
              products={visionProducts}
              viewAllLink="/vision"
              addToCart={addToCart}
            />
          )}

          {/* Other Products Section */}
          {otherProducts.length > 0 && (
            <ProductSection
              title="More Products"
              products={otherProducts}
              viewAllLink="/store"
              addToCart={addToCart}
            />
          )}
        </div>
      </div>

      {/* Help Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-8">
            Need help?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-apple-gray-50 rounded-apple">
              <h3 className="text-headline font-semibold text-apple-gray-500 mb-2">
                Contact Us
              </h3>
              <p className="text-body text-apple-gray-300 mb-4">
                Get help from Apple experts
              </p>
              <Link
                to="/support"
                className="text-apple-blue hover:underline"
              >
                Get support
              </Link>
            </div>
            <div className="p-8 bg-apple-gray-50 rounded-apple">
              <h3 className="text-headline font-semibold text-apple-gray-500 mb-2">
                Free Delivery
              </h3>
              <p className="text-body text-apple-gray-300 mb-4">
                On all orders over $50
              </p>
              <Link to="/store" className="text-apple-blue hover:underline">
                Learn more
              </Link>
            </div>
            <div className="p-8 bg-apple-gray-50 rounded-apple">
              <h3 className="text-headline font-semibold text-apple-gray-500 mb-2">
                Apple Trade In
              </h3>
              <p className="text-body text-apple-gray-300 mb-4">
                Get credit toward a new purchase
              </p>
              <Link to="/store" className="text-apple-blue hover:underline">
                See trade-in values
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
