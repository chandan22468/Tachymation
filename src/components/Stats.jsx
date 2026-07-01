import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: 'x', label: 'faster', sublabel: 'Average delivery vs traditional development' },
  { value: 94, suffix: '%', label: 'automation rate', sublabel: 'Tasks completed without human intervention' },
  { value: 3200, suffix: '+', label: 'hours saved', sublabel: 'Per enterprise client, per quarter' },
  { value: 4.9, suffix: '★', label: 'rating', sublabel: 'Across all deployments', isDecimal: true },
];

const AnimatedCounter = ({ value, suffix, isDecimal }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: value,
            duration: 2,
            ease: 'power2.out',
            snap: isDecimal ? undefined : { val: 1 },
            onUpdate: function () {
              setDisplayValue(isDecimal ? this.targets()[0].val.toFixed(1) : Math.round(this.targets()[0].val));
            },
          }
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, [value, isDecimal]);

  return (
    <span ref={counterRef} className="font-space-grotesk font-bold text-5xl md:text-7xl text-text-primary">
      {displayValue}{suffix}
    </span>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.stat-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-bg-secondary rounded-lg p-6 md:p-8 text-center border border-border shadow-sm"
            >
              <div className="mb-3">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isDecimal={stat.isDecimal} 
                />
              </div>
              <p className="font-space-grotesk font-bold text-lg text-text-primary mb-1">
                {stat.label}
              </p>
              <p className="font-body text-sm text-text-secondary">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
