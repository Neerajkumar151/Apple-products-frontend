import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, MessageCircle, Phone, MapPin, Wrench, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const supportTopics = [
  { name: 'Getting Started', icon: Wrench, description: 'Set up your new Apple device' },
  { name: 'Repairs', icon: Shield, description: 'Service and repair information' },
  { name: 'Billing', icon: Shield, description: 'Subscriptions and purchases' },
  { name: 'Apple ID', icon: Shield, description: 'Manage your account' },
];

const contactOptions = [
  { name: 'Chat', description: 'Chat with an Apple specialist', icon: MessageCircle },
  { name: 'Phone', description: 'Call Apple Support', icon: Phone },
  { name: 'Store', description: 'Find an Apple Store', icon: MapPin },
];

export default function SupportPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-apple-gray-50 pt-20">
      {/* Hero */}
      <div
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-white to-apple-gray-50"
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <span className="animate-item inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-4">
            Support
          </span>
          <h1 className="animate-item text-display-lg sm:text-display-xl font-semibold text-apple-gray-500 tracking-tight mb-6">
            We're here to help.
          </h1>

          {/* Search */}
          <div className="animate-item relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-apple-gray-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for topics..."
              className="w-full bg-white border border-apple-gray-200 rounded-apple-lg py-4 pl-12 pr-4 text-apple-gray-500 placeholder:text-apple-gray-300 outline-none focus:border-apple-blue transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-12 text-center">
            Popular Topics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.name}
                  className="bg-white rounded-apple p-6 shadow-apple hover:shadow-apple-lg transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-apple-blue mb-4" />
                  <h3 className="text-headline font-semibold text-apple-gray-500 mb-2">
                    {topic.name}
                  </h3>
                  <p className="text-body text-apple-gray-300">
                    {topic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-12 text-center">
            Contact Apple Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.name}
                  className="text-center p-8 bg-apple-gray-50 rounded-apple"
                >
                  <Icon className="w-12 h-12 text-apple-blue mx-auto mb-4" />
                  <h3 className="text-headline font-semibold text-apple-gray-500 mb-2">
                    {option.name}
                  </h3>
                  <p className="text-body text-apple-gray-300">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AppleCare */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-apple-blue mx-auto mb-6" />
          <h2 className="text-display-sm font-semibold text-apple-gray-500 mb-4">
            AppleCare+ Protection
          </h2>
          <p className="text-body-lg text-apple-gray-300 mb-8">
            Get unlimited repairs for accidental damage protection, plus priority access to Apple experts.
          </p>
          <button className="btn-apple">Learn more about AppleCare+</button>
        </div>
      </div>
    </div>
  );
}
