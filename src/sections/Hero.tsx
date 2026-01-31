import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;
    const image = imageRef.current;

    if (!section || !heading || !subheading || !cta || !image) return;

    const ctx = gsap.context(() => {
      // Split heading into characters for animation
      const chars = heading.querySelectorAll('.char');

      // Initial entrance animations
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        chars,
        {
          opacity: 0,
          rotateX: 90,
          y: 80,
        },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: 'power3.out',
        }
      )
        .fromTo(
          subheading,
          {
            opacity: 0,
            clipPath: 'inset(0 100% 0 0)',
          },
          {
            opacity: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .fromTo(
          cta,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        )
        .fromTo(
          image,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.5'
        );

      // Scroll-triggered animations
      gsap.to(chars, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '50% top',
          scrub: 1,
        },
        letterSpacing: '0.5em',
        opacity: 0,
        ease: 'none',
      });

      gsap.to(image, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '80% top',
          scrub: 1,
        },
        y: -100,
        scale: 1.1,
        ease: 'none',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Split text into characters
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-apple-gray-50 via-apple-gray-50 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-display-lg sm:text-display-xl font-semibold text-apple-gray-500 tracking-tight mb-6 perspective-1000"
        >
          <span className="preserve-3d">{splitText('New Arrivals')}</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-headline sm:text-display-sm text-apple-gray-300 font-light mb-10 max-w-2xl mx-auto"
        >
          Explore the latest innovations.
          <br />
          Designed to inspire.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/store" className="btn-apple group">
            Shop Now
            <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link to="/product/iphone-15-pro" className="btn-apple-outline">
            Learn more
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div
        ref={imageRef}
        className="relative z-10 mt-16 w-full max-w-5xl mx-auto px-4 sm:px-6"
      >
        <div className="relative aspect-video rounded-apple-lg overflow-hidden shadow-apple-lg">
          <img
            src="/iphone-hero.jpg"
            alt="iPhone 15 Pro"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-apple-gray-500/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-caption text-apple-gray-300">Scroll to explore</span>
        <div className="w-px h-8 bg-apple-gray-300/50 animate-pulse" />
      </div>
    </section>
  );
}
