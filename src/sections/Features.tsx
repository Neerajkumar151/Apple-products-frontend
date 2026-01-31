import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Camera, Battery, Zap, Shield, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Cpu,
    title: 'A17 Pro Chip',
    description:
      'The biggest redesign in the history of Apple GPUs. A17 Pro is an entirely new class of iPhone chip that delivers our best graphics performance by far.',
    color: 'from-apple-purple to-apple-blue',
  },
  {
    icon: Camera,
    title: 'Pro Camera System',
    description:
      '48MP Main camera. Super-high-resolution photos. 2x Telephoto. Now you can choose default focal lengths for your Main camera — 24mm, 28mm, or 35mm.',
    color: 'from-apple-blue to-apple-teal',
  },
  {
    icon: Battery,
    title: 'All-Day Battery',
    description:
      'Even with so many advanced new features, you still get amazing all-day battery life. Up to 29 hours video playback on iPhone 15 Pro.',
    color: 'from-apple-green to-apple-teal',
  },
  {
    icon: Zap,
    title: 'Action Button',
    description:
      'The all-new Action button is a fast track to your favorite feature. Once you set the one you want, just press and hold to launch the action.',
    color: 'from-apple-orange to-apple-yellow',
  },
  {
    icon: Shield,
    title: 'Titanium Design',
    description:
      'iPhone 15 Pro is the first iPhone to feature an aerospace-grade titanium design, using the same alloy that spacecraft use for missions to Mars.',
    color: 'from-apple-gray-400 to-apple-gray-300',
  },
  {
    icon: Sparkles,
    title: 'USB-C Connector',
    description:
      'The new USB-C connector lets you charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro.',
    color: 'from-apple-pink to-apple-purple',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !header || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation with stagger
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            rotateX: 30,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-apple-gray-50 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-4">
            Features
          </span>
          <h2 className="text-display-md sm:text-display-lg font-semibold text-apple-gray-500 tracking-tight mb-6">
            Pro. Beyond.
          </h2>
          <p className="text-body-lg text-apple-gray-300 font-light max-w-2xl mx-auto">
            Every detail has been thoughtfully designed to create our most
            advanced iPhone ever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative bg-white rounded-apple p-8 shadow-apple transition-all duration-500 ease-apple hover:shadow-apple-lg hover:-translate-y-2 preserve-3d"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-apple bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-headline font-semibold text-apple-gray-500 mb-3">
                  {feature.title}
                </h3>
                <p className="text-body text-apple-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-apple bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
