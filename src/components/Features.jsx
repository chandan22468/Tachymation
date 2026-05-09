import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Card 1: AI Build Engine
const BuildEngineCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const builds = [
    { task: 'Landing page → fintech client', status: 'Deployed in 4m 12s' },
    { task: 'E-commerce store → 80 products', status: 'Deployed in 6m 44s' },
    { task: 'Dashboard → real-time analytics', status: 'Deployed in 9m 03s' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % builds.length);
      
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { rotateX: 20, opacity: 0.8 },
          { rotateX: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [builds.length]);

  return (
    <div
      ref={cardRef}
      className="bg-[#1A1A1A] border border-[#333333] rounded-3xl p-6 md:p-8 h-full"
      style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
    >
      <h3 className="font-display text-xl md:text-2xl text-text-primary mb-6">
        Websites. Built. Instantly.
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-mono text-white/50 pb-2 border-b border-[#333333]">
          <span>Task</span>
          <span>Status</span>
        </div>
        <div className="space-y-3">
          {builds.map((build, index) => (
            <div
              key={index}
              className={`flex justify-between text-sm transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <span className="font-body text-text-primary">{build.task}</span>
              <span className="font-mono text-white">✓ {build.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Card 2: Automation Console
const AutomationConsoleCard = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const consoleRef = useRef(null);

  const messages = [
    '> Automating invoice reconciliation...',
    '> Syncing CRM → ERP → Slack...',
    '> Report generated. Sent to 14 stakeholders.',
    '> Task complete. 0 human hours used.',
  ];

  const typeMessage = useCallback((message, callback) => {
    let index = 0;
    setDisplayText('');
    
    const typeInterval = setInterval(() => {
      if (index <= message.length) {
        setDisplayText(message.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        callback?.();
      }
    }, 15);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const message = messages[currentMessage];
    let cleanup;

    if (isTyping) {
      cleanup = typeMessage(message, () => {
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      });
    } else {
      const timeout = setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timeout);
    }

    return cleanup;
  }, [currentMessage, isTyping, messages, typeMessage]);

  return (
    <div
      ref={consoleRef}
      className="bg-dark-panel border border-gray-800 rounded-3xl p-6 md:p-8 h-full"
    >
      <h3 className="font-display text-xl md:text-2xl text-white mb-6">
        Any workflow. Any system.
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs text-green-500 uppercase tracking-wider">
            Live Automation
          </span>
        </div>
        
        <div className="font-mono text-sm text-white/90 min-h-[80px]">
          <span className="text-white">{displayText}</span>
          <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Card 3: Efficiency Signal
const EfficiencySignalCard = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const trigger = ScrollTrigger.create({
      trigger: svgRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
        });
      },
    });

    return () => trigger.kill();
  }, []);

  const dataPoints = [
    { week: 1, hours: 12, label: '12 hrs' },
    { week: 6, hours: 145, label: '145 hrs' },
    { week: 12, hours: 340, label: '340 hrs' },
  ];

  return (
    <div className="bg-[#1A1A1A] border border-[#333333] rounded-3xl p-6 md:p-8 h-full">
      <h3 className="font-display text-xl md:text-2xl text-text-primary mb-6">
        Hours saved. Measured.
      </h3>
      
      <div ref={svgRef} className="relative h-48">
        <svg aria-hidden="true" className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 50, 100, 150].map((y) => (
            <line
              key={y}
              x1="0"
              y1={150 - y}
              x2="300"
              y2={150 - y}
              stroke="#333333"
              strokeWidth="1"
            />
          ))}
          
          {/* Graph line */}
          <path
            ref={pathRef}
            d="M 0,140 Q 75,130 150,80 T 300,20"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Data points */}
          {dataPoints.map((point, index) => (
            <g key={index}>
              <circle
                cx={(point.week / 12) * 300}
                cy={150 - (point.hours / 340) * 130}
                r="4"
                fill="#FFFFFF"
                className="animate-pulse"
              />
            </g>
          ))}
        </svg>
        
        {/* Labels */}
        <div className="flex justify-between text-xs font-mono text-text-secondary mt-2">
          <span>Week 1</span>
          <span>Week 6</span>
          <span>Week 12</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#333333]">
        <span className="font-mono text-sm text-text-secondary">Hours Saved / Week</span>
        <span className="font-mono text-lg text-white font-medium">340 hrs</span>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="features"
      aria-label="Tachymation AI Automation Features"
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-4">
            What we eliminate.
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-xl">
            Every feature exists because someone's team was wasting time on it.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="feature-card">
            <BuildEngineCard />
          </div>
          <div className="feature-card">
            <AutomationConsoleCard />
          </div>
          <div className="feature-card">
            <EfficiencySignalCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
