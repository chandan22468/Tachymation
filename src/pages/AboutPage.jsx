import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';

const AboutPage = () => {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  return (
    <>
      <SEO 
        title="About Iterate First - AI Automation Company"
        description="Learn about Iterate First — the AI automation company built to eliminate manual business processes. Discover our mission, values, and how we deliver intelligent automation 10x faster."
        canonical="/about"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

      <main className="w-full bg-bg-primary text-text-primary min-h-screen pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-xs text-text-primary/30 font-mono uppercase tracking-widest">
              <li><Link to="/" className="hover:text-text-primary/60 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-text-primary/60">About</li>
            </ol>
          </nav>

          {/* Hero */}
          <p className="text-[10px] md:text-xs text-text-primary/40 tracking-[0.4em] uppercase font-semibold mb-4">
            About Iterate First
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary leading-tight tracking-tight mb-8">
            We built Iterate First<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
              to remove the friction.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-16 max-w-2xl">
            <strong className="text-text-primary font-medium">Iterate First</strong> is an AI automation platform
            founded on a single belief: the best work happens when humans focus on thinking, not
            on clicking through repetitive tasks. We built the tools to make that real.
          </p>

          {/* Mission */}
          <section aria-labelledby="mission-heading" className="mb-20">
            <h2 id="mission-heading" className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Iterate First exists to give every business — startup or enterprise — access to the same
              intelligent automation infrastructure that was previously only available to the
              largest technology companies in the world.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              We are an <strong className="text-text-primary/80">AI automation platform</strong> that builds
              autonomous workflows, deploys intelligent web platforms, and integrates across enterprise
              systems. Our clients don't just save time — they fundamentally change how their business
              operates.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When businesses search for <strong className="text-text-primary/80">AI automation tools</strong>,
              workflow automation solutions, or ways to automate business processes — Iterate First is
              the answer they find and the platform they choose.
            </p>
          </section>

          {/* Values */}
          <section aria-labelledby="values-heading" className="mb-20">
            <h2 id="values-heading" className="text-2xl md:text-3xl font-bold text-text-primary mb-10">
              What makes Iterate First different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Speed without compromise',
                  body: 'Iterate First delivers working automation systems in hours. Traditional agencies take weeks. We use AI to parallelise every stage of the build cycle.',
                },
                {
                  title: 'Full-lifecycle ownership',
                  body: 'Unlike no-code tools, Iterate First owns the entire automation lifecycle — from designing the logic to deploying, maintaining, and improving it over time.',
                },
                {
                  title: 'Built for real businesses',
                  body: 'Every Iterate First system is production-grade from day one. We build automation that integrates with your existing stack, not around it.',
                },
                {
                  title: 'Zero learning curve',
                  body: 'You describe what needs automating. Iterate First builds it. No new software to learn. No complex configuration. Just results.',
                },
              ].map((v) => (
                <div key={v.title} className="p-8 border border-border rounded-lg bg-white/[0.02]">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section aria-labelledby="stats-heading" className="mb-20">
            <h2 id="stats-heading" className="text-2xl md:text-3xl font-bold text-text-primary mb-10">
              Iterate First by the numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '10x', label: 'faster delivery' },
                { value: '94%', label: 'automation rate' },
                { value: '3,200+', label: 'hours saved / quarter' },
                { value: '4.9★', label: 'client rating' },
              ].map((s) => (
                <div key={s.label} className="p-6 border border-border rounded-lg bg-white/[0.02] text-center">
                  <p className="text-3xl md:text-4xl font-black text-text-primary mb-2">{s.value}</p>
                  <p className="text-xs text-text-secondary/60 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA links */}
          <section className="border-t border-border pt-12">
            <h2 className="text-xl font-bold text-text-primary mb-6">Explore Iterate First</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/features"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Explore Features →
              </Link>
              <Link
                to="/use-cases"
                className="inline-flex items-center gap-2 border border-border text-text-primary text-sm px-6 py-3 rounded-full hover:bg-border transition-colors"
              >
                View Use Cases →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border text-text-primary text-sm px-6 py-3 rounded-full hover:bg-border transition-colors"
              >
                Get in Touch →
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default AboutPage;
