import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      const chars = textRef.current?.querySelectorAll('.char');

      const tl = gsap.timeline();

      // Faster text animation
      tl.fromTo(
        chars,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.015,
          ease: 'power2.out',
        }
      )

      // Immediately start exit (no long wait)
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: 'power3.inOut',
        delay: 0.1,
        onComplete: () => onComplete?.(),
      });

    }, containerRef);

    // 🔥 Safety fallback (VERY IMPORTANT)
    const fallback = setTimeout(() => {
      onComplete?.();
    }, 1500);

    return () => {
      ctx.revert();
      clearTimeout(fallback);
    };
  }, [onComplete]);

  const brandName = 'Aetomation';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black will-change-transform" />

      {/* Text */}
      <div ref={textRef} className="relative z-10 flex">
        {brandName.split('').map((char, index) => (
          <span
            key={index}
            className="char font-display text-4xl md:text-6xl text-white tracking-wide"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;