import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const colors = [
  { name: 'Natural Titanium', value: '#9a9a9a', bg: 'from-gray-300 to-gray-400' },
  { name: 'Blue Titanium', value: '#4a5568', bg: 'from-blue-400 to-blue-600' },
  { name: 'White Titanium', value: '#f7f7f7', bg: 'from-gray-100 to-gray-200' },
  { name: 'Black Titanium', value: '#1a1a1a', bg: 'from-gray-700 to-gray-900' },
];

export default function ColorLab() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const phone = phoneRef.current;

    if (!section || !header || !phone) return;

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
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Phone animation
      gsap.fromTo(
        phone,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: phone,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleColorChange = (color: typeof colors[0]) => {
    if (color.name === selectedColor.name || isFlipping) return;

    setIsFlipping(true);

    // Animate phone flip
    const phone = phoneRef.current;
    if (phone) {
      gsap.to(phone, {
        rotateY: 90,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setSelectedColor(color);
          gsap.to(phone, {
            rotateY: 0,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => setIsFlipping(false),
          });
        },
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="color-lab"
      className="relative py-32 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${selectedColor.bg} opacity-10 transition-all duration-700 pointer-events-none`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block text-caption font-medium text-apple-blue uppercase tracking-widest mb-4">
            Color Lab
          </span>
          <h2 className="text-display-md sm:text-display-lg font-semibold text-apple-gray-500 tracking-tight mb-6">
            Make it yours.
          </h2>
          <p className="text-body-lg text-apple-gray-300 font-light max-w-2xl mx-auto">
            Choose the finish that fits your style.
          </p>
        </div>

        {/* Phone Display */}
        <div className="flex flex-col items-center">
          <div
            ref={phoneRef}
            className="relative w-full max-w-md aspect-square mb-12 perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/iphone-back.png"
              alt={`iPhone in ${selectedColor.name}`}
              className="w-full h-full object-contain transition-all duration-500"
              style={{
                filter: selectedColor.name !== 'Natural Titanium'
                  ? `hue-rotate(${selectedColor.name === 'Blue Titanium' ? '200deg' : selectedColor.name === 'Black Titanium' ? '180deg brightness(0.5)' : '0deg'})`
                  : 'none',
              }}
            />
            {/* Glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${selectedColor.bg} blur-3xl opacity-30 -z-10 scale-75 transition-all duration-700`}
            />
          </div>

          {/* Color Name */}
          <p className="text-headline font-semibold text-apple-gray-500 mb-8">
            {selectedColor.name}
          </p>

          {/* Color Swatches */}
          <div className="flex items-center gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                  selectedColor.name === color.name
                    ? 'scale-110 ring-2 ring-offset-2 ring-apple-blue'
                    : 'hover:scale-105'
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={color.name}
              >
                {selectedColor.name === color.name && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-apple-blue/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
