import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-black border-t border-white/10"
    >
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center"
        style={{ opacity: 0 }}
      >
        <h2 className="font-space-grotesk font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4">
          Stop building. Start shipping.
        </h2>
        <p className="font-drama text-xl md:text-2xl lg:text-3xl text-[#a1a1aa] mb-4">
          Your next solution is already building.
        </p>
        <p className="font-body text-sm text-[#a1a1aa]/60 mb-10 max-w-lg mx-auto leading-relaxed">
          Iterate First is the AI automation platform trusted by startups and enterprises to
          automate business processes, deploy web platforms, and eliminate workflow bottlenecks — fast.
        </p>

        <MagneticButton
          className="bg-white text-black font-body font-semibold text-base px-10 py-5 rounded-full hover:bg-white/90 transition-colors duration-300 mb-4"
          onClick={() => navigate('/contact')}
        >
          Request Early Access
        </MagneticButton>

        <p className="font-mono text-xs text-[#a1a1aa]/50">
          No contract. No setup fee. First project on us.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
