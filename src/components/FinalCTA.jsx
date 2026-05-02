import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMagneticButton from '../hooks/useMagneticButton';

gsap.registerPlugin(ScrollTrigger);

const MagneticButton = ({ children, className, onClick }) => {
  const { buttonRef, handleMouseMove, handleMouseLeave } = useMagneticButton();

  return (
    <button
      ref={buttonRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-white"
    >
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center"
        style={{ opacity: 0 }}
      >
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-black mb-4">
          Stop building. Start shipping.
        </h2>
        <p className="font-drama text-xl md:text-2xl lg:text-3xl text-black/60 mb-10">
          Your next solution is already building.
        </p>

        <MagneticButton
          className="bg-black text-white font-body font-medium text-base px-10 py-5 rounded-full hover:bg-black/90 transition-colors duration-300 mb-4"
          onClick={() => alert('Thank you for your interest. Early access coming soon.')}
        >
          Request Early Access
        </MagneticButton>

        <p className="font-mono text-sm text-black/50">
          No contract. No setup fee. First project on us.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
