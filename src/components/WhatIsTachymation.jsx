import React from 'react';

const WhatIsTachymation = () => {
  return (
    <section
      id="what-is-tachymation"
      aria-label="What is Tachymation"
      className="relative w-full bg-[#050505] text-white py-24 md:py-32 px-4 sm:px-8 md:px-16 z-20"
    >
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase font-semibold mb-4">
          What is Tachymation?
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white tracking-tight">
          Tachymation is an{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            AI Automation Platform
          </span>{' '}
          for businesses
        </h2>

        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-[700px] mx-auto">
          <strong className="text-white font-medium">Tachymation</strong> builds autonomous workflows,
          AI-powered web platforms, and{' '}
          <strong className="text-white font-medium">business automation tools</strong> - delivered
          10x faster than traditional development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
          <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-white">Business Automation</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Integrate with your existing stack and automate repetitive processes - from data entry to multi-system reporting - with zero human intervention.
            </p>
          </div>

          <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-white">AI Web Platforms</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              High-performance web platforms that load instantly and convert visitors - from landing pages to full-stack SaaS products.
            </p>
          </div>

          <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-white">Workflow Automation</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Intelligent backend workflows that handle your heavy lifting 24/7 - without errors, delays, or manual oversight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTachymation;
