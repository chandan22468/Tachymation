import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ChevronDown } from 'lucide-react';
import useMagneticButton from '../hooks/useMagneticButton';
import eagleLogo from '../assets/hero.png';

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
      ? 'bg-white text-black hover:bg-white/90 font-bold tracking-tight'
      : 'bg-transparent text-white/60 hover:text-white border border-white/20';

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
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  /* Three.js particle field */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (prefersReducedMotion || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let scene, camera, renderer, particlesGeometry, particlesMaterial, particles, rafId;

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
        opacity: 0.3,
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
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] pt-[72px]">

      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Main Container */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16 pb-12 md:pb-0">

        {/* ── LEFT TEXT ── */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-[640px] mx-auto md:mx-0">
          <p className="tracking-[0.45em] text-[10px] md:text-xs text-white/40 mb-4 md:mb-6 uppercase font-semibold">
            aetomation SYSTEM
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[75px] font-black italic uppercase leading-[0.9] tracking-[-0.02em] text-white break-words w-full">
            <span className="block">Move at the</span>
            <span className="block mt-1 md:mt-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
              speed of thought.
            </span>
          </h1>

          <p className="mt-4 md:mt-8 text-gray-400 text-sm md:text-base lg:text-lg max-w-[520px] leading-relaxed font-light px-4 md:px-0">
            AI automation that eliminates effort from websites to enterprise systems.
          </p>

          <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
            <MagneticButton className="px-8 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] w-full sm:w-auto">
              Get Early Access →
            </MagneticButton>
          </div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="flex-[0.8] md:flex-1 flex justify-center md:justify-end items-center relative w-full h-[40vh] md:h-full mt-4 md:mt-0">
          <div className="relative group w-full flex justify-center md:justify-end">

            {/* Ambient glow layers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[600px] bg-white opacity-[0.09] blur-[130px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.14]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-white opacity-[0.06] blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.10]" />

            {/* Eagle logo */}
            <img
              src={eagleLogo}
              alt="aetomation Eagle"
              className="relative z-10 w-[200px] sm:w-[280px] md:w-[500px] lg:w-[620px] object-contain
                         transition-all duration-700 ease-out
                         group-hover:scale-[1.05] md:group-hover:scale-[1.1]
                         drop-shadow-[0_0_30px_rgba(255,255,255,0.20)] md:drop-shadow-[0_0_55px_rgba(255,255,255,0.30)]
                         group-hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.40)] md:group-hover:drop-shadow-[0_0_90px_rgba(255,255,255,0.50)]"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity cursor-pointer z-20">
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