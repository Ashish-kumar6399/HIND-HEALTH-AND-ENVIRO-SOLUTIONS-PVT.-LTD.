"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Immediately scroll to the top on path change
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
