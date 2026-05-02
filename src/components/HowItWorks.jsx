import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Tell us what you need.',
    description:
      'You describe the task — in plain language, a voice note, a doc, a Figma file. Anything works. Any business, any size.',
  },
  {
    number: '02',
    title: 'Our AI gets to work.',
    description:
      "aetomation's AI models break the task into components, assign the right automation stack, and begin building in parallel.",
  },
  {
    number: '03',
    title: 'You receive the output.',
    description:
      'A working product, automation, or solution — delivered and deployed. You review, we refine. Done.',
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate connecting line
      const line = lineRef.current;
      if (line) {
        const length = line.getTotalLength();
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;

        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        });
      }

      // Animate steps
      const stepElements = stepsRef.current?.querySelectorAll('.step-card');
      if (stepElements) {
        stepElements.forEach((step, index) => {
          gsap.fromTo(
            step,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-4">
            Three steps. No learning curve.
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* SVG Connecting Line - Desktop only */}
          <svg
            className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 hidden md:block"
            preserveAspectRatio="none"
          >
            <line
              ref={lineRef}
              x1="16.66%"
              y1="50%"
              x2="83.33%"
              y2="50%"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="8,8"
            />
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="step-card relative">
                {/* Step Number */}
                <span className="absolute -top-8 -left-2 font-mono text-[6rem] md:text-[8rem] text-white/10 leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                {/* Card Content */}
                <div className="relative bg-[#1A1A1A] rounded-3xl p-8 md:p-10 border border-[#333333] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-mono text-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
