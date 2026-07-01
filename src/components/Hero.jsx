import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { ChevronDown } from 'lucide-react';
import useMagneticButton from '../hooks/useMagneticButton';

/* ─────────────────────────────────────────────
   Magnetic Button
───────────────────────────────────────────── */
const MagneticButton = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
}) => {
  const { buttonRef, handleMouseMove, handleMouseLeave } = useMagneticButton();

  const baseClasses =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-white/90 font-semibold tracking-tight border border-transparent shadow-sm hover:shadow-md'
      : 'bg-transparent text-white/70 hover:text-white border border-white/20 hover:border-white/40';

  return (
    <button
      ref={buttonRef}
      className={`magnetic-btn transition-all duration-300 ${baseClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
const Hero = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  /* Three.js particle field */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (prefersReducedMotion || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let scene, camera, renderer, particlesGeometry, particlesMaterial, particles;

    // Defer initialization to avoid blocking main thread
    const initTimer = setTimeout(() => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 50;

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      /* Particles */
      particlesGeometry = new THREE.BufferGeometry();
      const count = 400; // Reduced count
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 150;
      }
      particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
      particlesMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: '#ffffff',
        transparent: true,
        opacity: 0.35,
        depthWrite: false
      });
      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      let lastTime = 0;
      const fpsInterval = 1000 / 30; // Limit to 30 FPS

      const animate = (time) => {
        rafRef.current = requestAnimationFrame(animate);
        
        const elapsed = time - lastTime;
        if (elapsed > fpsInterval) {
          lastTime = time - (elapsed % fpsInterval);
          particles.rotation.y += 0.0008;
          renderer.render(scene, camera);
        }
      };
      
      rafRef.current = requestAnimationFrame(animate);
    }, 100);

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (particlesGeometry) particlesGeometry.dispose();
      if (particlesMaterial) particlesMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black pt-[72px]">

      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Main Container */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16 pb-12 md:pb-0">

        {/* ── LEFT TEXT ── */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-[640px] mx-auto md:mx-0">
          <p className="tracking-[0.45em] text-[10px] md:text-xs text-white/70 mb-4 md:mb-6 uppercase font-mono">
            <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">iteratefirst</span> SYSTEM
          </p>

          <h1 className="font-space-grotesk uppercase leading-none tracking-[-0.03em] w-full flex flex-col items-center md:items-start select-none">
            <span className="sr-only">Iterate First: Move at the speed of thought.</span>
            {/* MOVE AT THE (technical eyebrow) */}
            <span className="block font-mono text-xs md:text-sm tracking-[0.35em] text-white/50 uppercase mb-4">
              Move at the
            </span>
            {/* SPEED (massive Display font) */}
            <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[110px] font-bold tracking-tighter text-white leading-none">
              Speed
            </span>
            {/* OF THOUGHT. (gradient/glow secondary display) */}
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-semibold tracking-tight text-white/80 leading-none mt-2">
              of thought.
            </span>
          </h1>

          <p className="mt-4 md:mt-8 text-gray-400 text-sm md:text-base lg:text-lg max-w-[520px] leading-relaxed font-light px-4 md:px-0">
            Advanced AI automation by <span className="text-white font-bold">Iterate First</span> that eliminates effort from websites to enterprise systems.
          </p>

          <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
            <MagneticButton
              className="px-8 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] w-full sm:w-auto"
              onClick={() => navigate('/contact')}
              aria-label="Get early access to Iterate First"
            >
              Get Early Access →
            </MagneticButton>
          </div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="flex-[0.8] md:flex-1 flex justify-center md:justify-end items-center relative w-full h-[40vh] md:h-full mt-4 md:mt-0">
          <div className="relative group w-full flex justify-center md:justify-end">

            {/* Ambient white spotlight glow layer */}
            <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[350px] md:h-[350px] bg-white opacity-[0.08] blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            {/* Eagle logo */}
            <img
              src="/favicon.webp"
              alt="Iterate First AI Automation Logo - Intelligent Workflow Systems"
              width="620"
              height="620"
              loading="eager"
              className="relative z-10 w-[200px] sm:w-[280px] md:w-[500px] lg:w-[620px] object-contain logo-glow-effect animate-logo-float group-hover:scale-[1.05] md:group-hover:scale-[1.1]"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-pointer z-20">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-white" />
      </div>

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none z-5" />
    </section>
  );
};

export default Hero;