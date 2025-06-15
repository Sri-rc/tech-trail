"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { GalleryImage, ViewMoreButton } from "@/content/types";

interface Props {
  images: GalleryImage[];
  viewMoreButton: ViewMoreButton;
  initialCount?: number;
}

export default function ImagesGallery({ 
  images, 
  viewMoreButton, 
  initialCount = 4 
}: Props) {
  const [showAllImages, setShowAllImages] = useState(false);

  const toggleImages = () => {
    setShowAllImages(prev => !prev);
  };

  if (!images || images.length === 0) {
    return null;
  }

  const visibleImages = showAllImages 
    ? images 
    : images.slice(0, initialCount);

  const hasMoreImages = images.length > initialCount;

  return (
    <div className="w-full">
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        role="grid"
        aria-label="Kitchen gallery images"
      >
        {visibleImages.map((image, index) => (
          <div 
            key={image.id} 
            className="relative h-64 rounded-lg overflow-hidden group bg-neutral-light focus-within:ring-2 focus-within:ring-primary-main focus-within:ring-offset-2"
            role="gridcell"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={index < initialCount}
              loading={index < initialCount ? 'eager' : 'lazy'}
            />
            {image.title && (
              <div className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <p className="text-white p-4 font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMoreImages && (
        <div className="text-center">
          <Button
            variant="primary"
            width="default"
            onClick={toggleImages}
            aria-expanded={showAllImages}
            aria-controls="gallery-images-grid"
          >
            {showAllImages ? viewMoreButton.hideText : viewMoreButton.text}
          </Button>
        </div>
      )}
    </div>
  );
}
