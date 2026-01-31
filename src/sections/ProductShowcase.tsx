import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const title = titleRef.current;
    const desc = descRef.current;

    if (!section || !image || !content || !title || !desc) return;

    const ctx = gsap.context(() => {
      // Parallax effect for image
      gsap.fromTo(
        image,
        { y: 100, scale: 0.8, rotateY: -15 },
        {
          y: -100,
          scale: 1.2,
          rotateY: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Content reveal
      gsap.fromTo(
        content,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Title animation
      gsap.fromTo(
        title,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Description animation
      gsap.fromTo(
        desc,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="iphone"
      className="relative min-h-screen flex items-center overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-apple-gray-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative perspective-1000 order-2 lg:order-1"
          >
            <div className="relative aspect-square preserve-3d">
              <img
                src="/iphone-card.png"
                alt="iPhone 15 Pro"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-apple-blue/5 blur-3xl rounded-full -z-10 scale-75" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-4">
              New
            </span>
            <h2
              ref={titleRef}
              className="text-display-md sm:text-display-lg font-semibold text-apple-gray-500 tracking-tight mb-6"
            >
              iPhone 15 Pro
            </h2>
            <p
              ref={descRef}
              className="text-body-lg text-apple-gray-300 font-light mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Titanium design. A17 Pro chip. Action button. 48MP Main camera.
              The most powerful iPhone ever.
            </p>

            {/* Specs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <div className="text-center">
                <div className="text-display-sm font-semibold text-apple-gray-500">
                  A17 Pro
                </div>
                <div className="text-caption text-apple-gray-300">
                  Game-changing chip
                </div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-semibold text-apple-gray-500">
                  48MP
                </div>
                <div className="text-caption text-apple-gray-300">
                  Main camera
                </div>
              </div>
              <div className="text-center">
                <div className="text-display-sm font-semibold text-apple-gray-500">
                  29h
                </div>
                <div className="text-caption text-apple-gray-300">
                  Video playback
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/product/iphone-15-pro" className="btn-apple group">
                Buy
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/product/iphone-15-pro"
                className="text-apple-blue hover:underline flex items-center gap-1 text-body"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
