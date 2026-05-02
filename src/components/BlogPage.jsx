import React from 'react';
import { Clock, Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const tableOfContents = [
    { id: 'what-is-ai-automation', title: 'What is AI Automation?' },
    { id: 'why-it-matters', title: 'Why it Matters in Modern Business' },
    { id: 'use-cases', title: 'Real-World Use Cases' },
    { id: 'tools', title: 'Tools & Platforms' },
    { id: 'workflow-example', title: 'Step-by-Step Workflow Example' },
    { id: 'dashboards', title: 'Dashboards & Analytics Role' },
    { id: 'challenges', title: 'Challenges & Limitations' },
    { id: 'future-trends', title: 'Future Trends' },
    { id: 'pros-cons', title: 'Pros & Cons' },
    { id: 'case-study', title: 'Mini Case Study' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-white/30 selection:text-white pb-24">
      
      {/* ── HERO SECTION ── */}
      <header className="relative w-full pt-32 pb-16 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto border-b border-white/10">
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white/50 tracking-widest uppercase mb-6">
          <span>Technology</span>
          <span>•</span>
          <span>Automation</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
          How AI Automation is <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Transforming Business Workflows
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-light">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Aetomation Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>May 2, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>6 min read</span>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
        
        {/* LEFT ARTICLE CONTAINER */}
        <article className="prose prose-invert prose-lg max-w-none">
          
          {/* Featured Image */}
          <div className="w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden relative bg-white/5 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2400&auto=format&fit=crop" 
              alt="AI Automation visualization" 
              loading="eager"
              width="1200"
              height="675"
              className="w-full h-full object-cover opacity-80 mix-blend-lighten"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-12">
            Every growing business eventually hits a wall: the point where manual tasks, endless spreadsheet updates, and repetitive data entry start stifling innovation. Enter <strong className="text-white font-medium">AI automation</strong>—the integration of artificial intelligence with traditional workflow automation to create systems that don't just follow rules, but actually <em>think</em>.
          </p>

          <h2 id="what-is-ai-automation" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">What is AI Automation?</h2>
          <p className="mb-6 leading-relaxed">
            Traditional business automation uses rigid "if-this-then-that" logic. AI automation adds a cognitive layer to this logic. It allows software to read unstructured data, understand sentiment, make real-time decisions, and generate human-like responses. It's the difference between a robot moving a box and a robot deciding <em>which</em> box needs to be moved based on priority.
          </p>

          <h2 id="why-it-matters" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">Why it Matters in Modern Business</h2>
          <p className="mb-6 leading-relaxed">In 2026, speed is the ultimate currency. Implementing AI into your business workflows provides three massive advantages:</p>
          <ul className="mb-6 space-y-3 list-none pl-0">
            <li className="flex items-start gap-4">
              <span className="text-white/40 mt-1">✦</span>
              <span><strong className="text-white">Infinite Scale:</strong> AI doesn't sleep. It processes 1,000 inbound requests as quickly as it processes 10.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-white/40 mt-1">✦</span>
              <span><strong className="text-white">Cost Reduction:</strong> Automating low-level cognitive tasks frees up your expensive human capital for high-level strategy.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-white/40 mt-1">✦</span>
              <span><strong className="text-white">Error Elimination:</strong> AI drastically reduces the human error inherent in manual data entry and transfer.</span>
            </li>
          </ul>

          <h2 id="use-cases" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">Real-World Use Cases</h2>
          <p className="mb-6 leading-relaxed">How are top companies actually using this today?</p>
          <ul className="mb-6 space-y-3 list-disc pl-6 marker:text-white/30">
            <li className="pl-2"><strong>Intelligent Customer Support:</strong> Chatbots that resolve 80% of tickets by analyzing past documentation instead of feeding generic macro responses.</li>
            <li className="pl-2"><strong>Automated Lead Generation:</strong> Scraping inbound emails, using AI to determine lead quality, and directly pushing high-tier leads to a CRM.</li>
            <li className="pl-2"><strong>Invoice Processing:</strong> Extracting data from messy PDF invoices and automatically matching them to purchase orders in an ERP.</li>
          </ul>

          <h2 id="tools" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">Tools & Platforms Driving the Shift</h2>
          <p className="mb-6 leading-relaxed">You no longer need a massive engineering team to implement these systems. The ecosystem is heavily supported by robust platforms:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {['Make & Zapier', 'OpenAI & Anthropic APIs', 'n8n', 'Aetomation'].map((tool) => (
              <div key={tool} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-center">
                <span className="text-white font-medium">{tool}</span>
              </div>
            ))}
          </div>

          <h2 id="workflow-example" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">Step-by-Step Workflow Example</h2>
          <p className="mb-6 leading-relaxed">Let’s look at a modern <strong>no-code</strong> lead processing workflow:</p>
          <ol className="mb-6 space-y-4 list-decimal pl-6 marker:text-white/50 text-gray-300">
            <li className="pl-2"><strong className="text-white">Trigger:</strong> A user submits a contact form on your website.</li>
            <li className="pl-2"><strong className="text-white">Action 1 (AI Analysis):</strong> The form data is sent to an LLM to extract the budget, industry, and urgency.</li>
            <li className="pl-2"><strong className="text-white">Action 2 (Routing):</strong> A conditional path routes the data. If the budget is >$10k, it sends a Slack alert to the senior sales team.</li>
            <li className="pl-2"><strong className="text-white">Action 3 (CRM Entry):</strong> The formatted data is pushed cleanly into HubSpot or Salesforce.</li>
            <li className="pl-2"><strong className="text-white">Action 4 (Auto-Response):</strong> AI drafts and sends a personalized email directly to the prospect based on their needs.</li>
          </ol>

          <h2 id="dashboards" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">The Role of Dashboards & Analytics</h2>
          <p className="mb-6 leading-relaxed">
            An automated system is a black box without proper visibility. <strong>Dashboards</strong> are critical to AI workflows. A well-designed analytics dashboard allows managers to monitor API costs, track successful vs. failed automations, and intervene when human-in-the-loop verification is triggered.
          </p>

          <h2 id="challenges" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">Challenges & Limitations</h2>
          <p className="mb-6 leading-relaxed">AI automation isn't flawless:</p>
          <ul className="mb-6 space-y-3 list-none pl-0">
            <li className="flex items-start gap-4">
              <span className="text-red-500/50 mt-1">✕</span>
              <span><strong className="text-white">Hallucinations:</strong> AI can confidently provide wrong answers if not strictly bounded by system prompts.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-500/50 mt-1">✕</span>
              <span><strong className="text-white">Data Privacy:</strong> Sending sensitive customer data to third-party LLM providers requires strict compliance.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-500/50 mt-1">✕</span>
              <span><strong className="text-white">Technical Debt:</strong> Poorly documented workflows can become a nightmare to maintain when API endpoints update.</span>
            </li>
          </ul>

          <h2 id="future-trends" className="text-3xl font-bold text-white mt-16 mb-6 scroll-mt-32">Future Trends</h2>
          <p className="mb-6 leading-relaxed">
            We are moving rapidly away from single-task bots toward <strong>Autonomous AI Agents</strong>. These are systems given an overarching goal (e.g., "Research these 50 competitors and summarize their pricing") that can browse the web, navigate software, and compile data entirely independently.
          </p>

          <hr className="my-16 border-white/10" />

          {/* Pros & Cons Section */}
          <h2 id="pros-cons" className="text-3xl font-bold text-white mb-8 scroll-mt-32">Pros & Cons of AI Automation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
              <h4 className="text-green-400 font-bold mb-4 text-lg">Pros</h4>
              <ul className="space-y-3 list-none pl-0 text-sm">
                <li>✓ Drastically lowers operational overhead</li>
                <li>✓ 24/7 continuous operation cycle</li>
                <li>✓ Highly customizable via modern APIs</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
              <h4 className="text-red-400 font-bold mb-4 text-lg">Cons</h4>
              <ul className="space-y-3 list-none pl-0 text-sm">
                <li>✕ High initial setup time</li>
                <li>✕ Requires ongoing monitoring</li>
                <li>✕ Relies on third-party API stability</li>
              </ul>
            </div>
          </div>

          <h2 id="case-study" className="text-3xl font-bold text-white mb-6 scroll-mt-32">Mini Case Study: Acme Corp</h2>
          <div className="px-8 py-8 rounded-2xl bg-white/[0.02] border border-white/5 mb-16 leading-relaxed">
            <p className="mb-4"><strong className="text-white">The Problem:</strong> Acme Corp’s accounting team spent 40 hours a week manually entering data from vendor PDF invoices into their proprietary accounting software.</p>
            <p className="mb-4"><strong className="text-white">The Solution:</strong> Using an AI automation pipeline, incoming emails with PDF attachments were routed to a vision-language model. The AI extracted line items, mapped them to JSON, and pushed them to the database via API.</p>
            <p><strong className="text-white">The Result:</strong> Processing time fell from days to seconds. The accounting team saved 160 hours a month, redirecting that time toward financial forecasting.</p>
          </div>

        </article>

        {/* RIGHT SIDEBAR / TABLE OF CONTENTS */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-32 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Table of Contents</h4>
            <nav className="flex flex-col gap-3 text-sm">
              {tableOfContents.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 line-clamp-1"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            
            {/* Sidebar mini CTA */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-xs text-gray-400 mb-4">Want to automate your own workflows?</p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-white hover:text-gray-300 transition-colors group">
                Consult with Aetomation 
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </aside>

      </div>

      {/* ── FOOTER CTA ── */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 mt-24">
        <div className="w-full rounded-[2rem] bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
          {/* Subtle glow effect behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white opacity-5 blur-[100px] pointer-events-none rounded-full" />
          
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Move at the Speed of Thought?</h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto relative z-10 font-light">
            Stop competing in the slow lane. Transform your operations with bespoke, enterprise-grade AI automation architectures.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-bold tracking-widest uppercase text-xs hover:bg-white/90 transition-all hover:scale-105 active:scale-95 cursor-pointer relative z-10"
          >
            Discover Aetomation
          </a>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;
