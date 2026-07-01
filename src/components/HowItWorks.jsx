import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'Tell us what you need.',
    description:
      'You describe the task — in plain language, a voice note, a doc, a Figma file. Anything works. Any business, any size.',
  },
  {
    number: '2',
    title: 'Our AI gets to work.',
    description:
      "iteratefirst's AI models break the task into components, assign the right automation stack, and begin building in parallel.",
  },
  {
    number: '3',
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
      aria-label="How Iterate First AI Automation Works"
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-[#121212]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-5xl text-white mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative z-10 pt-16 md:pt-20">
            {steps.map((step) => (
              <div key={step.number} className="step-card relative group">
                {/* Step Number (Background Decor) */}
                <span 
                  className="absolute -top-20 -left-6 md:-top-28 md:-left-10
                            font-space-grotesk font-bold text-[8rem] md:text-[10rem]
                            leading-none select-none pointer-events-none z-0
                            text-transparent [-webkit-text-stroke:1px_rgba(23,23,23,0.08)]
                            group-hover:[-webkit-text-stroke:1px_rgba(23,23,23,0.18)]
                            transition-all duration-700 ease-out translate-y-4 group-hover:translate-y-0"
                >
                  {step.number}
                </span>

                {/* Card Context */}
                <div className="relative z-10 bg-[#121212]/80 backdrop-blur-xl rounded-lg p-8 md:p-10 border border-white/10 shadow-sm
                                transition-all duration-500 hover:bg-black/90 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-space-grotesk font-bold text-xl md:text-2xl text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#a1a1aa] leading-relaxed text-sm md:text-base">
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
