import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';

const features = [
  {
    id: 'ai-build-engine',
    title: 'AI Build Engine',
    tagline: 'Websites deployed in minutes, not months.',
    description:
      "Tachymation's AI Build Engine takes your brief — a doc, a Figma file, a voice note — and generates production-ready web platforms. Landing pages for fintech clients, e-commerce stores with 80+ products, real-time analytics dashboards — all built and deployed by AI automation tools.",
    capabilities: [
      'Production-grade code output',
      'Auto-deployment to CDN',
      'Performance-optimised by default',
      'Full CMS integration support',
    ],
    stat: '4m 12s',
    statLabel: 'average deploy time',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation Engine',
    tagline: 'Connect every tool. Automate every process.',
    description:
      "Tachymation's workflow automation engine integrates your entire business stack — CRM, ERP, Slack, email, databases — into a single intelligent pipeline. We automate business processes including invoice reconciliation, data entry, report generation, lead routing, and customer onboarding. Zero human intervention required.",
    capabilities: [
      'CRM → ERP → Slack sync',
      'Invoice & finance automation',
      'Lead routing & onboarding flows',
      'Scheduled report generation',
    ],
    stat: '94%',
    statLabel: 'tasks without human touch',
  },
  {
    id: 'enterprise-integration',
    title: 'Enterprise Integration Layer',
    tagline: 'Legacy or modern — Tachymation connects everything.',
    description:
      'For enterprise teams, Tachymation builds bespoke system integration layers that connect legacy infrastructure with modern cloud services. Our AI automation platform handles multi-system orchestration, compliance workflows, and real-time data pipelines without requiring you to rebuild your existing stack.',
    capabilities: [
      'Legacy system bridging',
      'Cloud pipeline architecture',
      'Compliance workflow automation',
      'Real-time data orchestration',
    ],
    stat: '3,200+',
    statLabel: 'hours saved per client / quarter',
  },
  {
    id: 'analytics-intelligence',
    title: 'Automation Intelligence',
    tagline: 'Your automation learns and improves over time.',
    description:
      'Every Tachymation system includes built-in analytics and adaptive logic. The platform monitors automation performance, surfaces bottlenecks, and continuously optimises workflows. This is AI automation that gets smarter the longer it runs — turning your business processes into self-improving systems.',
    capabilities: [
      'Real-time performance monitoring',
      'Bottleneck detection',
      'Adaptive workflow optimisation',
      'Custom reporting dashboards',
    ],
    stat: '10x',
    statLabel: 'faster than traditional dev',
  },
];

const FeaturesPage = () => {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
  ]);

  return (
    <>
      <SEO 
        title="Tachymation Features - Automate Business Workflows with AI"
        description="Explore Tachymation's AI automation features: workflow automation engine, AI build engine for websites, enterprise integration, and adaptive automation intelligence. Automate your business processes today."
        canonical="/features"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

      <main className="w-full bg-[#050505] text-white min-h-screen pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-xs text-white/30 font-mono uppercase tracking-widest">
              <li><Link to="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white/60">Features</li>
            </ol>
          </nav>

          {/* Hero */}
          <p className="text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase font-semibold mb-4">
            Platform Features
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Everything Tachymation<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
              automates for you.
            </span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed mb-16 max-w-2xl">
            Tachymation is a full-spectrum AI automation platform. Every feature is designed to
            eliminate a specific category of manual work — from building websites to orchestrating
            enterprise data pipelines.
          </p>

          {/* Feature sections */}
          <div className="space-y-24">
            {features.map((f) => (
              <section key={f.id} id={f.id} aria-labelledby={`${f.id}-heading`}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
                  <div>
                    <p className="text-[10px] text-white/30 tracking-[0.35em] uppercase font-semibold mb-3">
                      {f.tagline}
                    </p>
                    <h2 id={`${f.id}-heading`} className="text-2xl md:text-4xl font-bold text-white mb-4">
                      {f.title}
                    </h2>
                    <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl">
                      {f.description}
                    </p>
                    <ul className="space-y-2">
                      {f.capabilities.map((c) => (
                        <li key={c} className="flex items-center gap-3 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 shrink-0 md:pt-12">
                    <span className="text-5xl md:text-6xl font-black text-white tabular-nums leading-none">
                      {f.stat}
                    </span>
                    <span className="text-xs text-white/40 md:text-right max-w-[140px] leading-tight">
                      {f.statLabel}
                    </span>
                  </div>
                </div>
                <div className="mt-10 h-px bg-white/5" />
              </section>
            ))}
          </div>

          {/* Internal link CTAs */}
          <section className="mt-20 pt-12 border-t border-white/5">
            <h2 className="text-xl font-bold text-white mb-6">
              See Tachymation's features in action
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/use-cases"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Explore Use Cases →
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
              >
                About Tachymation →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
              >
                Get Early Access →
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default FeaturesPage;
