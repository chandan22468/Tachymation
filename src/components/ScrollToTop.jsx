import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll restoration
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // 'instant' is better for SEO/UX consistency on route change
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
