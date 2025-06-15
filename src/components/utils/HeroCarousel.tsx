'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import { HeroCarousel as HeroCarouselType, HeroSlide } from "@/content/types";

interface Props {
  carousel: HeroCarouselType;
  onSlideChange: (slide: HeroSlide) => void;
}

export default function HeroCarousel({ carousel, onSlideChange }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const { slides, autoRotate, interval } = carousel;

  // Memoized slide change handler
  const handleSlideTransition = useCallback((nextSlideIndex: number) => {
    if (nextSlideIndex === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setProgress(0);
    
    setTimeout(() => {
      setCurrentSlide(nextSlideIndex);
      onSlideChange(slides[nextSlideIndex]);
      setIsTransitioning(false);
    }, 300);
  }, [currentSlide, isTransitioning, slides, onSlideChange]);

  // Auto-rotate functionality
  useEffect(() => {
    if (!autoRotate || slides.length <= 1) return;

    let progressInterval: NodeJS.Timeout;
    let slideInterval: NodeJS.Timeout;

    const startAutoRotate = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const increment = 100 / (interval / 100);
          return prev >= 100 ? 0 : prev + increment;
        });
      }, 100);

      slideInterval = setInterval(() => {
        setCurrentSlide(prev => {
          const nextSlide = (prev + 1) % slides.length;
          setIsTransitioning(true);
          setProgress(0);
          
          setTimeout(() => {
            onSlideChange(slides[nextSlide]);
            setIsTransitioning(false);
          }, 300);
          
          return nextSlide;
        });
      }, interval);
    };

    startAutoRotate();

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [autoRotate, slides.length, interval, slides, onSlideChange]);

  // Initialize with first slide
  useEffect(() => {
    if (slides.length > 0) {
      onSlideChange(slides[0]);
    }
  }, [slides, onSlideChange]);

  // Navigation handlers

  const goToSlide = useCallback((index: number) => {
    handleSlideTransition(index);
  }, [handleSlideTransition]);

  return (
    <>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div key={`slide-${index}`} className="absolute inset-0">
            {/* Desktop Image */}
            <Image
              src={slide.backgroundImage.desktop.src}
              alt={slide.backgroundImage.desktop.alt}
              fill
              className={`object-cover hidden sm:block transition-opacity duration-500 ${
                index === currentSlide && !isTransitioning ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
              sizes="100vw"
            />
            {/* Mobile Image */}
            <Image
              src={slide.backgroundImage.mobile.src}
              alt={slide.backgroundImage.mobile.alt}
              fill
              className={`object-cover block sm:hidden transition-opacity duration-500 ${
                index === currentSlide && !isTransitioning ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Mobile Black Overlay */}
        <div className="absolute inset-0 bg-black/60 block sm:hidden" aria-hidden="true" />
      </div>

      {/* Carousel Controls */}
      {slides.length > 1 && (
        <>
          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
            {slides.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToSlide(index)}
                className="relative w-12 h-1 bg-white/90 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={`Go to slide ${index + 1} of ${slides.length}`}
                type="button"
              >
                {/* Progress bar for current slide - Using primary gold color */}
                {index === currentSlide && (
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-100 ease-linear"
                    style={{ 
                      width: `${progress}%`,
                      backgroundColor: 'var(--color-primary-gold)'
                    }}
                  />
                )}
                {/* Static fill for completed slides - Using primary gold color */}
                {index < currentSlide && (
                  <div 
                    className="absolute top-0 left-0 h-full w-full rounded-full" 
                    style={{ backgroundColor: 'var(--color-primary-gold)' }}
                  />
                )}
              </button>
            ))}
          </div>

        </>
      )}
    </>
  );
}
