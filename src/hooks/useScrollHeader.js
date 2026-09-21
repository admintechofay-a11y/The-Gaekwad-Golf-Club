import { useState, useEffect } from 'react';

/**
 * Custom hook that monitors vertical scroll offset
 * @returns {{ scrolled: boolean }}
 */
export function useScrollHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Run once on mount to capture initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrolled };
}

export default useScrollHeader;
