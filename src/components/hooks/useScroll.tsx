"use client";
import { useState, useEffect, useCallback } from 'react';

interface UseScrollDirectionOptions {
  threshold?: number;
  debounceMs?: number;
}

export const useScrollDirection = ({ 
  threshold = 10, 
  debounceMs = 16 // ~60fps
}: UseScrollDirectionOptions = {}) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'none'>('none');
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateScrollDirection = useCallback(() => {
    const scrollY = window.scrollY;
    const difference = scrollY - lastScrollY;
    
    // Check if we're at the top of the page
    const atTop = scrollY < threshold;
    setIsAtTop(atTop);

    // Only update direction if we've scrolled past the threshold
    if (Math.abs(difference) < threshold) {
      return;
    }

    // Determine scroll direction
    const direction = difference > 0 ? 'down' : 'up';
    
    // Only update if direction actually changed
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }
    
    setLastScrollY(scrollY);
  }, [lastScrollY, scrollDirection, threshold]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Debounce scroll events for performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScrollDirection, debounceMs);
    };

    // Set initial scroll position
    setLastScrollY(window.scrollY);
    setIsAtTop(window.scrollY < threshold);

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [updateScrollDirection, debounceMs, threshold]);

  return { scrollDirection, isAtTop };
};
