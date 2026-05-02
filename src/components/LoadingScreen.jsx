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
      
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(overlayRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              onComplete?.();
            },
          });
        },
      });

      tl.set(chars, { opacity: 0, y: 30 })
        .to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
        })
        .to({}, { duration: 0.3 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const brandName = 'aetomation';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-black" />
      <div ref={textRef} className="relative z-10 flex overflow-hidden">
        {brandName.split('').map((char, index) => (
          <span
            key={index}
            className="char font-display text-4xl md:text-6xl text-white tracking-widest"
            style={{ opacity: 0 }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
