import React from 'react';

const useCases = [
  {
    category: 'Websites & Web Platforms',
    heading: 'AI-Built Web Platforms That Convert',
    body: 'Iterate First designs and deploys high-performance websites and web applications using AI automation tools. From landing pages to full-stack SaaS platforms, our AI builds, tests, and deploys in hours — not weeks. Every platform is architected to load instantly and convert visitors using predictive AI logic.',
    tags: ['Landing Pages', 'SaaS Platforms', 'E-commerce', 'Dashboards'],
    stat: '4m 12s',
    statLabel: 'avg. deploy time',
  },
  {
    category: 'Business Workflow Automation',
    heading: 'Automate Every Business Process With AI',
    body: "Iterate First's workflow automation connects your CRM, ERP, Slack, databases, and email into a single intelligent pipeline. We automate business processes including invoice reconciliation, data entry, report generation, lead routing, and customer onboarding — eliminating manual work entirely. Our AI automation tools run 24/7 with zero human intervention required.",
    tags: ['CRM Sync', 'Invoice Processing', 'Report Generation', 'Lead Routing'],
    stat: '94%',
    statLabel: 'tasks without human touch',
  },
  {
    category: 'Enterprise System Integration',
    heading: 'Enterprise Automation at Any Scale',
    body: "For large organisations, Iterate First builds bespoke enterprise automation systems that integrate across legacy infrastructure, cloud services, and modern APIs. Our AI automation platform handles complex multi-system orchestration — from data pipelines to compliance workflows — giving enterprise teams the tools to automate business processes at scale without rebuilding their entire stack.",
    tags: ['Legacy Integration', 'Cloud Pipelines', 'Compliance', 'Multi-system Orchestration'],
    stat: '3,200+',
    statLabel: 'hours saved per client / quarter',
  },
];

const UseCases = () => {
  return (
    <section
      id="use-cases"
      aria-label="Iterate First Use Cases"
      className="w-full py-24 md:py-32 px-6 md:px-16 bg-bg-secondary border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[10px] md:text-xs text-text-secondary/60 tracking-[0.4em] uppercase font-mono mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight mb-6 font-space-grotesk">
            What Iterate First automates for your business
          </h2>
          <p className="text-lg text-text-secondary font-light leading-relaxed">
            From solo founders to enterprise teams — Iterate First is the AI automation platform that replaces
            repetitive work across every layer of your business. Explore how businesses use our
            AI automation tools to move faster.
          </p>
        </header>

        <div className="space-y-8">
          {useCases.map((uc, index) => (
            <article
              key={index}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10 border border-border rounded-lg bg-bg-secondary hover:bg-bg-primary/40 shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-[10px] text-text-secondary/50 tracking-[0.35em] uppercase font-mono mb-3">
                    {uc.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-snug font-space-grotesk">
                    {uc.heading}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl">
                    {uc.body}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-secondary border border-border rounded-full px-3 py-1 bg-bg-primary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-start md:justify-center gap-2 md:gap-1 shrink-0">
                <span className="text-4xl md:text-5xl font-bold text-text-primary tabular-nums leading-none font-space-grotesk">
                  {uc.stat}
                </span>
                <span className="text-xs text-text-secondary/60 md:text-right leading-tight max-w-[120px]">
                  {uc.statLabel}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 rounded-lg border border-border bg-bg-primary text-center shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 font-space-grotesk">
            Iterate First is an AI automation platform — not just a tool
          </h3>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Unlike no-code workflow builders or generic automation tools, Iterate First is a full-service
            AI automation platform. We handle the full lifecycle: designing the automation logic,
            building the infrastructure, deploying it, and maintaining it. When businesses need to
            automate business processes with real intelligence — they choose Iterate First.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
