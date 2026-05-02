import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import useMagneticButton from '../hooks/useMagneticButton';
import logoImage from '../assets/logo.png';

const ShinyLogo = ({ className = "" }) => {
  const { buttonRef, handleMouseMove, handleMouseLeave } = useMagneticButton();
  const shineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Continuous subtle pulse for the background glow
    const ctx = gsap.context(() => {
      gsap.to('.logo-glow', {
        opacity: 0.6,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onMouseMove = (e) => {
    handleMouseMove(e);
    
    // Add 3D tilt effect
    const el = buttonRef.current;
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 40;

    gsap.to(el, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  const onMouseLeave = () => {
    handleMouseLeave();
    
    // Reset 3D tilt with elastic bounce
    gsap.to(buttonRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block perspective-1000 ${className}`}
    >
      {/* Ambient Glow */}
      <div className="logo-glow absolute inset-0 bg-white/20 blur-[100px] rounded-full scale-[2.5] opacity-20 pointer-events-none" />
      
      <div
        ref={buttonRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative z-10 cursor-pointer transform-style-3d"
      >
        {/* Shine Overlay Container */}
        <div className="relative overflow-hidden rounded-2xl group">
          <img 
            src={logoImage}
            alt="tachymation Logo" 
            className="h-24 md:h-32 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative z-10"
            loading="lazy"
            decoding="async"
          />
          
          {/* Sweeping Shine */}
          <div 
            ref={shineRef}
            className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] z-20 pointer-events-none animate-shine"
          />
        </div>
      </div>
    </div>
  );
};

export default ShinyLogo;
