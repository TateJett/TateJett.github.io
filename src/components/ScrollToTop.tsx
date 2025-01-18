// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]); // Trigger on route change

  return null; // This component doesn't render anything
}