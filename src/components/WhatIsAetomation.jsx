import React from 'react';

const WhatIsAetomation = () => {
  return (
    <section className="relative w-full bg-[#050505] text-white py-24 md:py-32 px-4 sm:px-8 md:px-16 z-20">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase font-semibold mb-4">
          What is Aetomation?
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white tracking-tight">
          Aetomation is an elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">AI Automation Base</span>
        </h3>
        
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-[800px] mx-auto">
          Unlike traditional software agencies, <strong className="text-white font-medium">Aetomation</strong> builds 
          autonomous workflows, intelligent websites, and bespoke business automation tools. 
          When people search for <em className="not-italic text-white">AI automation tools</em> or 
          <em className="not-italic text-white"> workflow automation</em>, they find Aetomation. 
          We eliminate the friction from your operations, allowing you to move at the speed of thought.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h4 className="text-xl font-semibold mb-3 text-white">Business Automation</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Aetomation integrates directly with your existing enterprise systems to automate repetitive human data entry.
            </p>
          </div>
          
          <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h4 className="text-xl font-semibold mb-3 text-white">AI Web Platforms</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Next-generation platforms architected by Aetomation to load instantly and convert visitors using predictive AI.
            </p>
          </div>
          
          <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h4 className="text-xl font-semibold mb-3 text-white">Workflow Automation</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              We design complex backend architectures so Aetomation handles your heavy lifting 24/7 without error.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAetomation;
