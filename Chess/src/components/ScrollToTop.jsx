import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from '../lenis';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
