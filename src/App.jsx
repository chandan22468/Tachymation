import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import useLenis from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
const AboutPage    = lazy(() => import('./pages/AboutPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const UseCasesPage = lazy(() => import('./pages/UseCasesPage'));
const ContactPage  = lazy(() => import('./pages/ContactPage'));
const BlogPage     = lazy(() => import('./components/BlogPage'));
const Footer       = lazy(() => import('./components/Footer'));

const pageFallback = <div className="h-screen bg-[#050505] w-full" />;

function AppShell() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useLenis();

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 10);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && <CustomCursor />}

      <Navbar />

      <main>
        <Suspense fallback={pageFallback}>
          <Routes>
            <Route path="/"          element={<HomePage />} />
            <Route path="/about"     element={<AboutPage />} />
            <Route path="/features"  element={<FeaturesPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/contact"   element={<ContactPage />} />
            <Route path="/blog"      element={<BlogPage />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-32 bg-[#050505] w-full" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
