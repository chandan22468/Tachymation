import { useState, useEffect, Suspense, lazy } from 'react';
import useLenis from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsAetomation from './components/WhatIsAetomation';

// Lazy Load pages & heavy below-the-fold components
const BlogPage = lazy(() => import('./components/BlogPage'));
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
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'blog'

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
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      {/* Main Content */}
      <main>
        {currentPage === 'home' ? (
          <>
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
          </>
        ) : (
          <Suspense fallback={<div className="h-screen bg-[#050505] w-full" />}>
            <BlogPage onNavigate={setCurrentPage} />
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-32 bg-[#050505] w-full" />}>
        <Footer onNavigate={setCurrentPage} />
      </Suspense>
    </div>
  );
}

export default App;
