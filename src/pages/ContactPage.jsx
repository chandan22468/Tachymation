import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';

const FORMSPREE_IDS = [
  import.meta.env.VITE_FORMSPREE_ID,
  import.meta.env.VITE_FORMSPREE_ID1,
].filter(Boolean);

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const results = await Promise.all(
        FORMSPREE_IDS.map((id) =>
          fetch(`https://formspree.io/f/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(form),
          })
        )
      );
      if (results.every((r) => r.ok)) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <SEO 
        title="Contact Iterate First - Get Started with AI Automation"
        description="Contact Iterate First to start automating your business workflows, build AI-powered web platforms, or integrate enterprise systems. First project free. No contract."
        canonical="/contact"
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

      <main className="w-full bg-bg-primary text-text-primary min-h-screen pt-32 pb-24 px-6 md:px-16 border-t border-border">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-xs text-text-secondary/50 font-mono uppercase tracking-widest">
              <li><Link to="/" className="hover:text-text-primary/60 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-text-primary/60">Contact</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left — copy */}
            <div>
              <p className="text-[10px] md:text-xs text-text-secondary/60 tracking-[0.4em] uppercase font-mono mb-4">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight mb-6 font-space-grotesk">
                Start automating<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-primary/50">
                  your business today.
                </span>
              </h1>
              <p className="text-text-secondary leading-relaxed mb-8">
                Tell us what you need. <strong className="text-text-primary font-medium">Iterate First</strong> will
                design and deliver the right AI automation solution — whether that's a workflow
                automation system, an AI-powered web platform, or full enterprise integration.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { label: 'No contract', detail: 'Month-to-month, cancel anytime.' },
                  { label: 'No setup fee', detail: 'We start building immediately.' },
                  { label: 'First project free', detail: 'See results before you commit.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 rounded-full bg-bg-secondary border border-border flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                      <p className="text-xs text-text-secondary">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border space-y-2">
                <p className="text-xs text-text-secondary/50 uppercase tracking-widest font-mono">Explore first</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Link to="/features" className="text-sm text-text-secondary hover:text-text-primary underline underline-offset-4 transition-colors">
                    Features
                  </Link>
                  <Link to="/use-cases" className="text-sm text-text-secondary hover:text-text-primary underline underline-offset-4 transition-colors">
                    Use Cases
                  </Link>
                  <Link to="/about" className="text-sm text-text-secondary hover:text-text-primary underline underline-offset-4 transition-colors">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-10 border border-border rounded-lg bg-bg-secondary shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-bg-primary border border-border flex items-center justify-center mb-6">
                    <span className="text-text-primary text-xl font-semibold">✓</span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3 font-space-grotesk">Message received.</h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    The Iterate First team will review your request and be in touch within one business day.
                  </p>
                  <Link
                    to="/"
                    className="text-sm text-text-secondary hover:text-text-primary underline underline-offset-4 transition-colors"
                  >
                    Back to home
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label="Contact Iterate First"
                  className="space-y-5 p-8 border border-border rounded-lg bg-bg-secondary shadow-sm"
                >
                  <div>
                    <label htmlFor="name" className="block text-[10px] text-text-secondary/70 uppercase tracking-widest font-mono mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-text-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] text-text-secondary/70 uppercase tracking-widest font-mono mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-text-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[10px] text-text-secondary/70 uppercase tracking-widest font-mono mb-2">
                      Company <span className="text-text-secondary/30">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-text-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] text-text-secondary/70 uppercase tracking-widest font-mono mb-2">
                      What do you want to automate?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your workflow, process, or system..."
                      className="w-full bg-bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/30 focus:outline-none focus:border-text-primary/30 transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-600 text-xs text-center font-medium">
                      Something went wrong - please try again or email us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-accent text-white font-semibold text-sm px-6 py-4 rounded-full hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send to Iterate First →'}
                  </button>
                  <p className="text-center text-[10px] text-text-secondary/40 font-mono">
                    No spam. No sales calls. Just automation.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default ContactPage;
