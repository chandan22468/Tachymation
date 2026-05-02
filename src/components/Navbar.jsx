import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMagneticButton from '../hooks/useMagneticButton';
import eagleLogo from '../assets/eagle.png';

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

const Navbar = ({ onNavigate, currentPage }) => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/50'
          : 'bg-black/40 backdrop-blur-md border border-white/10'
      } rounded-full px-6 py-3`}
      style={{ opacity: 0 }}
    >
      <div className="flex items-center gap-8">
        {/* Logo */}
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (onNavigate) onNavigate('home');
          }}
          className="flex items-center gap-2"
        >
          <img
            src={eagleLogo}
            alt="aetomation"
            className="h-14 md:h-16 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            decoding="async"
          />
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => {
              if (onNavigate) onNavigate('home');
              setTimeout(() => scrollToSection('features'), 100);
            }}
            className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            Product
          </button>
          <button
            onClick={() => {
              if (onNavigate) onNavigate('home');
              setTimeout(() => scrollToSection('how-it-works'), 100);
            }}
            className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            Process
          </button>
          <button
            onClick={() => {
              if (onNavigate) onNavigate('home');
              setTimeout(() => scrollToSection('philosophy'), 100);
            }}
            className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            Philosophy
          </button>
          <button
            onClick={() => {
              if (onNavigate) onNavigate('home');
              setTimeout(() => scrollToSection('testimonials'), 100);
            }}
            className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            Stories
          </button>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (onNavigate) onNavigate('blog');
            }}
            className={`font-body text-sm transition-colors duration-300 ${
              currentPage === 'blog' ? 'text-white font-semibold' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Blog
          </button>
        </div>

        {/* CTA Button */}
        <MagneticButton
          className="bg-white text-black font-body text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-300"
          onClick={() => {
            if (onNavigate) onNavigate('home');
            setTimeout(() => scrollToSection('cta'), 100);
          }}
        >
          Get Access
        </MagneticButton>
      </div>
    </nav>
  );
};

export default Navbar;
