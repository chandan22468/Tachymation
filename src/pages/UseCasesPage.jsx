import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';

const cases = [
  {
    id: 'websites',
    industry: 'Websites & Web Platforms',
    heading: 'AI-Built Web Platforms That Convert',
    body: 'Iterate First designs and deploys high-performance websites and web applications using AI automation tools. From landing pages to full-stack SaaS platforms, our AI builds, tests, and deploys in hours — not weeks. Every platform is architected to load instantly and convert visitors using predictive AI logic.',
    examples: [
      'Fintech landing page — deployed in 4 minutes',
      'E-commerce store with 80 products — deployed in 6 minutes',
      'Real-time analytics dashboard — deployed in 9 minutes',
    ],
    stat: '4m 12s',
    statLabel: 'avg. deploy time',
  },
  {
    id: 'workflow-automation',
    industry: 'Business Workflow Automation',
    heading: 'Automate Every Business Process With AI',
    body: "Iterate First's workflow automation connects your CRM, ERP, Slack, databases, and email into a single intelligent pipeline. We automate business processes including invoice reconciliation, data entry, report generation, lead routing, and customer onboarding — eliminating manual work entirely. Our AI automation tools run 24/7 with zero human intervention required.",
    examples: [
      'Invoice reconciliation — 0 human hours per week',
      'CRM → ERP → Slack sync — real-time, always-on',
      'Weekly stakeholder reports — generated and sent automatically',
    ],
    stat: '94%',
    statLabel: 'tasks without human touch',
  },
  {
    id: 'enterprise',
    industry: 'Enterprise System Integration',
    heading: 'Enterprise Automation at Any Scale',
    body: 'For large organisations, Iterate First builds bespoke enterprise automation systems that integrate across legacy infrastructure, cloud services, and modern APIs. Our AI automation platform handles complex multi-system orchestration — from data pipelines to compliance workflows — giving enterprise teams the tools to automate business processes at scale without rebuilding their entire stack.',
    examples: [
      '6-person ops team workflow replaced in 4 hours',
      'Working product delivered in 3 days (vs. 8 weeks)',
      'Enterprise logistics automation — zero downtime handoff',
    ],
    stat: '3,200+',
    statLabel: 'hours saved per client / quarter',
  },
  {
    id: 'startups',
    industry: 'Startups & Scale-ups',
    heading: 'Move at the Speed of Thought',
    body: "For startups and scale-ups, Iterate First is the unfair advantage. Instead of hiring a full engineering team or waiting months for an agency, founders use Iterate First to ship web platforms, automate their operations, and build internal tools — all without writing a line of code. Iterate First's AI automation tools are built for teams that need to move fast and can't afford to slow down.",
    examples: [
      'Launch-ready SaaS product — in days, not months',
      'Internal ops dashboard — built and deployed overnight',
      'Customer onboarding flow — automated end-to-end',
    ],
    stat: '10x',
    statLabel: 'faster than traditional dev',
  },
];

const UseCasesPage = () => {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Use Cases', path: '/use-cases' },
  ]);

  return (
    <>
      <SEO 
        title="Iterate First Use Cases - AI Automation for Every Business"
        description="Discover how Iterate First's AI automation tools help businesses automate workflows, build web platforms, and integrate enterprise systems. Real use cases, real results."
        canonical="/use-cases"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

      <main className="w-full bg-black text-white min-h-screen pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-xs text-white/30 font-mono uppercase tracking-widest">
              <li><Link to="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white/60">Use Cases</li>
            </ol>
          </nav>

          {/* Hero */}
          <p className="text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase font-semibold mb-4">
            Use Cases
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            What Iterate First automates<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
              for your business.
            </span>
          </h1>
          <p className="text-lg text-[#a1a1aa] font-light leading-relaxed mb-16 max-w-2xl">
            From solo founders to enterprise teams — Iterate First is the AI automation platform
            that replaces repetitive work across every layer of your business. These are the
            real ways businesses use Iterate First's AI automation tools to move faster and operate
            smarter.
          </p>

          {/* Cases */}
          <div className="space-y-20">
            {cases.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-heading`}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start p-8 md:p-10 border border-white/10 rounded-lg bg-white/[0.02]">
                  <div>
                    <p className="text-[10px] text-white/30 tracking-[0.35em] uppercase font-semibold mb-3">
                      {c.industry}
                    </p>
                    <h2 id={`${c.id}-heading`} className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                      {c.heading}
                    </h2>
                    <p className="text-base text-[#a1a1aa] leading-relaxed mb-6 max-w-xl">
                      {c.body}
                    </p>
                    <ul className="space-y-2">
                      {c.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border0 shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-start md:justify-center gap-2 md:gap-1 shrink-0 md:pt-4">
                    <span className="text-4xl md:text-5xl font-black text-white tabular-nums leading-none">
                      {c.stat}
                    </span>
                    <span className="text-xs text-white/40 md:text-right leading-tight max-w-[120px]">
                      {c.statLabel}
                    </span>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Brand summary */}
          <div className="mt-16 p-8 md:p-10 rounded-lg border border-white/10 bg-white/[0.02] text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Iterate First is an AI automation platform — not just a tool
            </h2>
            <p className="text-[#a1a1aa] text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Unlike no-code workflow builders or generic automation tools, Iterate First handles
              the full lifecycle: designing the automation logic, building the infrastructure,
              deploying it, and maintaining it. When businesses need to automate business
              processes with real intelligence — they choose Iterate First.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/features"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Explore Features →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/10 text-white text-sm px-6 py-3 rounded-full hover:bg-border transition-colors"
              >
                Get Early Access →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default UseCasesPage;
