import React from 'react';

const useCases = [
  {
    category: 'Websites & Web Platforms',
    heading: 'AI-Built Web Platforms That Convert',
    body: 'Tachymation designs and deploys high-performance websites and web applications using AI automation tools. From landing pages to full-stack SaaS platforms, our AI builds, tests, and deploys in hours — not weeks. Every platform is architected to load instantly and convert visitors using predictive AI logic.',
    tags: ['Landing Pages', 'SaaS Platforms', 'E-commerce', 'Dashboards'],
    stat: '4m 12s',
    statLabel: 'avg. deploy time',
  },
  {
    category: 'Business Workflow Automation',
    heading: 'Automate Every Business Process With AI',
    body: "Tachymation's workflow automation connects your CRM, ERP, Slack, databases, and email into a single intelligent pipeline. We automate business processes including invoice reconciliation, data entry, report generation, lead routing, and customer onboarding — eliminating manual work entirely. Our AI automation tools run 24/7 with zero human intervention required.",
    tags: ['CRM Sync', 'Invoice Processing', 'Report Generation', 'Lead Routing'],
    stat: '94%',
    statLabel: 'tasks without human touch',
  },
  {
    category: 'Enterprise System Integration',
    heading: 'Enterprise Automation at Any Scale',
    body: "For large organisations, Tachymation builds bespoke enterprise automation systems that integrate across legacy infrastructure, cloud services, and modern APIs. Our AI automation platform handles complex multi-system orchestration — from data pipelines to compliance workflows — giving enterprise teams the tools to automate business processes at scale without rebuilding their entire stack.",
    tags: ['Legacy Integration', 'Cloud Pipelines', 'Compliance', 'Multi-system Orchestration'],
    stat: '3,200+',
    statLabel: 'hours saved per client / quarter',
  },
];

const UseCases = () => {
  return (
    <section
      id="use-cases"
      aria-label="Tachymation Use Cases"
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase font-semibold mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            What Tachymation automates for your business
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            From solo founders to enterprise teams — Tachymation is the AI automation platform that replaces
            repetitive work across every layer of your business. Explore how businesses use our
            AI automation tools to move faster.
          </p>
        </header>

        <div className="space-y-8">
          {useCases.map((uc, index) => (
            <article
              key={index}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-[10px] text-white/30 tracking-[0.35em] uppercase font-semibold mb-3">
                    {uc.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                    {uc.heading}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
                    {uc.body}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-start md:justify-center gap-2 md:gap-1 shrink-0">
                <span className="text-4xl md:text-5xl font-black text-white tabular-nums leading-none">
                  {uc.stat}
                </span>
                <span className="text-xs text-white/40 md:text-right leading-tight max-w-[120px]">
                  {uc.statLabel}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Tachymation is an AI automation platform — not just a tool
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Unlike no-code workflow builders or generic automation tools, Tachymation is a full-service
            AI automation platform. We handle the full lifecycle: designing the automation logic,
            building the infrastructure, deploying it, and maintaining it. When businesses need to
            automate business processes with real intelligence — they choose Tachymation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
