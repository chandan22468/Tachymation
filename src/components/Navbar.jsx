import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import gsap from 'gsap';
import useMagneticButton from '../hooks/useMagneticButton';
import eagleLogo from '../assets/eagle.webp';

const MagneticButton = ({ children, className, as: Tag = 'button', to, onClick }) => {
  const { buttonRef, handleMouseMove, handleMouseLeave } = useMagneticButton();

  if (Tag === Link) {
    return (
      <Link
        ref={buttonRef}
        to={to}
        className={`magnetic-btn ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

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

const navLinks = [
  { to: '/features',  label: 'Features'  },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/about',     label: 'About'     },
  { to: '/blog',      label: 'Blog'      },
];

const Navbar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
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

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/50'
          : 'bg-black/40 backdrop-blur-md border border-white/10'
      } rounded-full px-6 py-3`}
      style={{ opacity: 0 }}
    >
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Aetomation home">
          <img
            src={eagleLogo}
            alt="Aetomation — AI Automation Platform"
            width="64"
            height="64"
            className="h-14 md:h-16 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            decoding="async"
            fetchpriority="high"
          />
        </Link>

        {/* Nav Links — crawlable <a> tags */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-body text-sm transition-colors duration-300 ${
                  isActive ? 'text-white font-semibold' : 'text-white/50 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <MagneticButton
          as={Link}
          to="/contact"
          className="bg-white text-black font-body text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-300"
        >
          Get Access
        </MagneticButton>
      </div>
    </nav>
  );
};

export default Navbar;
