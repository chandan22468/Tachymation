import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import WhatIsTachymation from '../components/WhatIsTachymation';
import { getOrganizationSchema, getWebsiteSchema } from '../utils/structuredData';

const UseCases = lazy(() => import('../components/UseCases'));
const SocialProof = lazy(() => import('../components/SocialProof'));
const Features = lazy(() => import('../components/Features'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const Philosophy = lazy(() => import('../components/Philosophy'));
const Stats = lazy(() => import('../components/Stats'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FinalCTA = lazy(() => import('../components/FinalCTA'));

const fallback = <div className="h-32 bg-[#050505] w-full" />;

const HomePage = () => {
  return (
    <>
      <SEO 
        title="AI Automation Platform for Businesses & Startups"
        description="Tachymation helps businesses automate workflows, websites, and enterprise systems using AI automation tools. Replace manual processes with intelligent automation — 10x faster delivery."
        canonical="/"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(getOrganizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(getWebsiteSchema())}
      </script>

      <Hero />
      <WhatIsTachymation />

      {/* Internal linking strip — crawlable <a> tags pointing to real pages */}
      <nav
        aria-label="Explore Tachymation"
        className="w-full bg-[#050505] px-6 md:px-16 pb-8"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Explore Features →
          </Link>
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            View Use Cases →
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            About Tachymation →
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </nav>

      <Suspense fallback={fallback}>
        <UseCases />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Philosophy />
        <Stats />
        <Testimonials />
        <FinalCTA />
      </Suspense>
    </>
  );
};

export default HomePage;
