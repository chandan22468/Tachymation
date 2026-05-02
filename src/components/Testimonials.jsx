import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "We replaced a 6-person ops team's weekly reporting workflow in 4 hours. I still don't fully believe it.",
    author: 'Rohit Sharma',
    role: 'CTO, Fintech Series B',
    location: 'Mumbai',
  },
  {
    quote: "Every agency we'd tried took 8 weeks and delivered something we had to rebuild anyway. aetomation shipped a working product in 3 days.",
    author: 'Priya Nair',
    role: 'VP Engineering, D2C Brand',
    location: 'Bangalore',
  },
  {
    quote: 'This is what I wanted AI to be. Not a chatbot. An actual system that does the work.',
    author: 'Arjun Mehta',
    role: 'Head of Technology, Enterprise Logistics',
    location: 'Pune',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  const navigate = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex = direction === 'next'
      ? (currentIndex + 1) % testimonials.length
      : (currentIndex - 1 + testimonials.length) % testimonials.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      },
    });

    tl.to(quoteRef.current, {
      x: direction === 'next' ? -60 : 60,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });
  };

  useEffect(() => {
    if (!quoteRef.current) return;

    gsap.fromTo(
      quoteRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, [currentIndex]);

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
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-black"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="font-display text-3xl md:text-5xl text-text-primary text-center mb-16">
          The Human Evidence
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-[#333333] shadow-sm">
          {/* Quote Mark */}
          <span className="absolute top-6 left-8 font-drama text-6xl md:text-8xl text-white/30 leading-none">
            "
          </span>

          <div ref={quoteRef} className="relative z-10">
            {/* Quote */}
            <blockquote className="font-body text-xl md:text-2xl text-text-primary leading-relaxed mb-8 pl-8 md:pl-12">
              {current.quote}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between pl-8 md:pl-12">
              <div>
                <p className="font-display text-lg text-text-primary">
                  — {current.author}
                </p>
                <p className="font-body text-sm text-white/50">
                  {current.role}, {current.location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('prev')}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors duration-300 disabled:opacity-50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('next')}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors duration-300 disabled:opacity-50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
