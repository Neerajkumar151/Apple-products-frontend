import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Shield, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    totalItems, 
    subtotal,
    tax,
    shipping,
    orderTotal,
    clearCart 
  } = useCart();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && items.length > 0) {
      const items_elements = contentRef.current.querySelectorAll('.animate-item');
      if (items_elements.length > 0) {
        gsap.fromTo(
          items_elements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
          }
        );
      }
    }
  }, [items]);

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-apple-gray-50 pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-apple-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-12 h-12 text-apple-gray-300" />
          </div>
          <h1 className="text-display-md font-semibold text-apple-gray-500 mb-4">
            Your bag is empty.
          </h1>
          <p className="text-body-lg text-apple-gray-300 mb-10">
            Looks like you haven't added anything to your bag yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store" className="btn-apple">
              Continue Shopping
            </Link>
            <Link to="/" className="btn-apple-outline">
              Back to Home
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-apple-gray-200">
            <p className="text-caption text-apple-gray-300 mb-4">Popular Products</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['iPhone 15 Pro', 'MacBook Air', 'iPad Pro', 'AirPods Pro'].map((item) => (
                <Link
                  key={item}
                  to={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white px-4 py-2 rounded-full text-body text-apple-gray-500 shadow-apple hover:shadow-apple-lg transition-shadow"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-gray-50 pt-24 pb-20">
      <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-item">
          <h1 className="text-display-md font-semibold text-apple-gray-500">
            Shopping Bag
          </h1>
          <span className="text-body text-apple-gray-300">
            {totalItems} item{totalItems !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="animate-item bg-white rounded-apple p-5 sm:p-6 shadow-apple hover:shadow-apple-lg transition-shadow duration-300"
              >
                <div className="flex gap-4 sm:gap-6">
                  {/* Product Image */}
                  <Link 
                    to={`/product/${item.productId}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-apple-gray-50 rounded-apple overflow-hidden hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <Link 
                          to={`/product/${item.productId}`}
                          className="text-headline font-semibold text-apple-gray-500 hover:text-apple-blue transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <div className="mt-1 space-y-0.5">
                          {item.color && (
                            <p className="text-caption text-apple-gray-300">
                              Color: {item.color}
                            </p>
                          )}
                          {item.storage && (
                            <p className="text-caption text-apple-gray-300">
                              {item.storage}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-apple-gray-300 hover:text-red-500 transition-colors p-1"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-9 h-9 rounded-full bg-apple-gray-100 flex items-center justify-center hover:bg-apple-gray-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-body font-medium text-apple-gray-500 w-10 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-9 h-9 rounded-full bg-apple-gray-100 flex items-center justify-center hover:bg-apple-gray-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-headline font-semibold text-apple-gray-500">
                          ${item.price * item.quantity}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-caption text-apple-gray-300">
                            ${item.price} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="animate-item text-body text-apple-gray-300 hover:text-red-500 transition-colors"
            >
              Clear bag
            </button>
          </div>

          {/* Order Summary */}
          <div className="animate-item">
            <div className="bg-white rounded-apple p-6 shadow-apple sticky top-28">
              <h2 className="text-headline font-semibold text-apple-gray-500 mb-6">
                Order Summary
              </h2>

              {/* Items Summary */}
              <div className="space-y-3 mb-6 pb-6 border-b border-apple-gray-100">
                <div className="flex justify-between text-body text-apple-gray-300">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-body text-apple-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4" />
                    Shipping
                  </span>
                  <span className={shipping === 0 ? 'text-apple-green' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-body text-apple-gray-300">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-headline font-semibold text-apple-gray-500">Total</span>
                <div className="text-right">
                  <span className="text-display-sm font-semibold text-apple-gray-500">
                    ${orderTotal.toFixed(2)}
                  </span>
                  <p className="text-caption text-apple-gray-300">
                    USD
                  </p>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigate('/checkout')}
                className="btn-apple w-full justify-center group mb-4"
              >
                Check Out
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Continue Shopping */}
              <Link
                to="/store"
                className="block text-center text-apple-blue hover:underline text-body"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-apple-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-caption text-apple-gray-300">
                  <Shield className="w-4 h-4 text-apple-green" />
                  Secure checkout
                </div>
                <div className="flex items-center gap-2 text-caption text-apple-gray-300">
                  <Sparkles className="w-4 h-4 text-apple-blue" />
                  Apple Pay available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
