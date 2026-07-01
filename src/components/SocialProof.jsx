import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  'Infosys', 'Razorpay', 'Zomato', 'HDFC Tech', 
  'Meesho', 'Groww', 'PhonePe', 'Freshworks'
];

const stats = [
  '10x faster delivery',
  '94% task automation rate',
  'Zero human hours on 3,000+ builds',
  '4.9★ across 200+ enterprise projects'
];

const SocialProof = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
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
      className="w-full py-8 bg-bg-primary border-y border-border overflow-hidden"
    >
      {/* Clients Row */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />
        
        <div className="flex animate-scroll">
          {[...clients, ...clients].map((client, index) => (
            <span
              key={index}
              className="font-mono text-sm text-text-secondary uppercase tracking-wider whitespace-nowrap px-8"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />
        
        <div className="flex animate-scroll-reverse">
          {[...stats, ...stats].map((stat, index) => (
            <span
              key={index}
              className="font-mono text-sm text-text-primary whitespace-nowrap px-8 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-text-primary" />
              {stat}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
