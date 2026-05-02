import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Word-by-word reveal
      const words = contentRef.current?.querySelectorAll('.reveal-word');
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const wrapWords = (text, className = '') => {
    return text.split(' ').map((word, index) => (
      <span key={index} className={`reveal-word inline-block ${className}`}>
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative w-full py-32 md:py-48 px-6 md:px-16 bg-dark-panel overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.2)',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="font-body text-text-secondary mb-4">
          {wrapWords('Most automation tools give you:')}
        </p>
        
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-8">
          {wrapWords('"More complexity."')}
        </h2>

        <p className="font-body text-text-secondary mb-4">
          {wrapWords('aetomation gives you:')}
        </p>

        <h2 className="font-drama text-4xl md:text-6xl lg:text-8xl text-white mb-8">
          {wrapWords('Less everything.')}
        </h2>

        <p className="font-body text-text-secondary max-w-xl mx-auto">
          {wrapWords('Less time spent. Less team overhead. Less explaining yourself to software.')}
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
