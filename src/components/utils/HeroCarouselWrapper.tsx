'use client';

import { useState, useCallback } from 'react';
import Button from "@/components/ui/Button";
import { HeroContent, HeroSlide } from "@/content/types";
import HeroCarousel from "./HeroCarousel";

interface Props {
  content: HeroContent;
}

export default function HeroCarouselWrapper({ content }: Props) {
  const [currentSlideData, setCurrentSlideData] = useState<HeroSlide | null>(null);

  // Client-side function to handle line breaks
  const formatTextWithLineBreaks = useCallback((text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  }, []);

  // Use carousel data if available, otherwise use default content
  const displayContent = currentSlideData || {
    title: content.title,
    subtitle: content.subtitle,
    backgroundImage: content.backgroundImage
  };

  const handleSlideChange = useCallback((slide: HeroSlide) => {
    setCurrentSlideData(slide);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroCarousel 
        carousel={content.carousel!} 
        onSlideChange={handleSlideChange}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Subtitle */}
        <p 
          key={`subtitle-${displayContent.subtitle}`}
          className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg mb-2 text-center transition-opacity duration-500"
        >
          {displayContent.subtitle}
        </p>

        {/* Title */}
        <h1 
          key={`title-${displayContent.title}`}
          className="font-heading text-hero-sm sm:text-hero-md lg:text-hero-lg xl:text-hero-xl font-helvetica-bold mb-8 sm:mb-12 max-w-5xl mx-auto text-center text-shadow-hero text-white transition-opacity duration-500"
        >
          {formatTextWithLineBreaks(displayContent.title)}
        </h1>

        {/* Button */}
        <Button 
          variant="primary" 
          width="compact"
        >
          {content.ctaButton.text}
        </Button>
      </div>
    </section>
  );
}
