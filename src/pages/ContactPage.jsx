import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Aetomation - Get Started with AI Automation</title>
        <meta name="description" content="Contact Aetomation to start automating your business workflows, build AI-powered web platforms, or integrate enterprise systems. First project free. No contract." />
        <link rel="canonical" href="https://aetomation.vercel.app/contact" />
        <meta property="og:title" content="Contact Aetomation - Get Started with AI Automation" />
        <meta property="og:description" content="Contact Aetomation to automate your business. First project free. No setup fee. No contract." />
        <meta property="og:url" content="https://aetomation.vercel.app/contact" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "url": "https://aetomation.vercel.app/contact",
          "name": "Contact Aetomation",
          "description": "Contact Aetomation to start automating your business with AI automation tools.",
          "isPartOf": { "@id": "https://aetomation.vercel.app/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aetomation.vercel.app/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://aetomation.vercel.app/contact" }
            ]
          }
        })}</script>
      </Helmet>

      <main className="w-full bg-[#050505] text-white min-h-screen pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-xs text-white/30 font-mono uppercase tracking-widest">
              <li><Link to="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white/60">Contact</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left — copy */}
            <div>
              <p className="text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase font-semibold mb-4">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                Start automating<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                  your business today.
                </span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-8">
                Tell us what you need. <strong className="text-white font-medium">Aetomation</strong> will
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
                    <span className="mt-1 w-4 h-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 space-y-2">
                <p className="text-xs text-white/30 uppercase tracking-widest font-mono">Explore first</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Link to="/features" className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors">
                    Features
                  </Link>
                  <Link to="/use-cases" className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors">
                    Use Cases
                  </Link>
                  <Link to="/about" className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-10 border border-white/5 rounded-3xl bg-white/[0.02]">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Message received.</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    The Aetomation team will review your request and be in touch within one business day.
                  </p>
                  <Link
                    to="/"
                    className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Back to home
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label="Contact Aetomation"
                  className="space-y-5 p-8 border border-white/5 rounded-3xl bg-white/[0.02]"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs text-white/50 uppercase tracking-widest mb-2">
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-white/50 uppercase tracking-widest mb-2">
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                      Company <span className="text-white/20">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-white/50 uppercase tracking-widest mb-2">
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold text-sm px-6 py-4 rounded-full hover:bg-white/90 transition-colors"
                  >
                    Send to Aetomation →
                  </button>
                  <p className="text-center text-xs text-white/25">
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
