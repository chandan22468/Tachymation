import { useState, useEffect, Suspense, lazy } from 'react';
import useLenis from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsAetomation from './components/WhatIsAetomation';

// Lazy Load heavy below-the-fold components
const SocialProof = lazy(() => import('./components/SocialProof'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const Stats = lazy(() => import('./components/Stats'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Initialize smooth scroll
  useLenis();

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 10);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Custom Cursor - Only visible when content is ready */}
      {showContent && <CustomCursor />}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <WhatIsAetomation />
        
        {/* Suspense Wrapper for heavy below-the-fold components */}
        <Suspense fallback={<div className="h-32 bg-[#050505] w-full" />}>
          <SocialProof />
          <Features />
          <HowItWorks />
          <Philosophy />
          <Stats />
          <Testimonials />
          <FinalCTA />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-32 bg-[#050505] w-full" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
