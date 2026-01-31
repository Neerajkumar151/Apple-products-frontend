import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface FooterPageProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  heroBg?: string;
}

export default function FooterPage({
  title,
  subtitle,
  content,
  icon,
  heroBg = 'bg-gradient-to-b from-white to-apple-gray-50',
}: FooterPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      const contentItems = contentRef.current?.querySelectorAll('.content-item');
      if (contentItems && contentItems.length > 0) {
        gsap.fromTo(
          contentItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
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
        className={`relative min-h-[40vh] flex items-center justify-center ${heroBg}`}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          {icon && (
            <div className="animate-item mb-6">{icon}</div>
          )}
          <h1 className="animate-item text-display-md sm:text-display-lg font-semibold text-apple-gray-500 tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="animate-item text-headline text-apple-gray-300 font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {content}
        </div>
      </div>

      {/* Back to Home */}
      <div className="py-8 px-4 text-center border-t border-apple-gray-200">
        <Link to="/" className="text-apple-blue hover:underline text-body">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
