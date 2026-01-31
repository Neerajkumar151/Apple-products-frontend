import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial page load animation
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
}

// Reveal on scroll animation hook
export function useScrollReveal(
  ref: React.RefObject<HTMLElement>,
  options: {
    y?: number;
    x?: number;
    opacity?: number;
    scale?: number;
    duration?: number;
    delay?: number;
    start?: string;
    stagger?: number;
    childSelector?: string;
  } = {}
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      y = 60,
      x = 0,
      opacity = 0,
      scale = 1,
      duration = 0.8,
      delay = 0,
      start = 'top 80%',
      stagger = 0,
      childSelector,
    } = options;

    const targets = childSelector
      ? element.querySelectorAll(childSelector)
      : element;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          y,
          x,
          opacity,
          scale,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [ref, options]);
}

// Parallax effect hook
export function useParallax(
  ref: React.RefObject<HTMLElement>,
  speed: number = 0.5
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        yPercent: -30 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [ref, speed]);
}

// Text split animation component
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const chars = element.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          delay,
          ease: 'power3.out',
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay]);

  return (
    <span ref={textRef} className={`inline-block perspective-1000 ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block preserve-3d"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
