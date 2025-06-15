'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ExperienceItem } from '@/content/types'

interface Props {
  items: ExperienceItem[]
}

export default function ExperienceCarousel({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentItem = items[currentIndex]

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        {/* Left Arrow - Larger on big screens */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 sm:left-2 md:left-4 lg:left-0 xl:left-2 2xl:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 hover:opacity-70 hover:scale-110 transition-all duration-300 z-10"
          aria-label="Previous testimonial"
        >
          <Image
            src="/assets/images/arrow.png"
            alt="Previous"
            width={80}
            height={80}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rotate-180"
          />
        </button>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-16 sm:px-20 md:px-24 lg:px-32 xl:px-40 2xl:px-48">
          {/* Quote */}
          <blockquote className="font-subtitle text-body-lg font-normal text-neutral-text-light mb-6 italic leading-relaxed">
            &quot;{currentItem.testimonial.quote}&quot;
          </blockquote>
          
          {/* Attribution */}
          <div className="flex items-center justify-center space-x-2">
            <p className="font-subtitle text-body font-normal text-neutral-text-light">
              {currentItem.testimonial.author}, {currentItem.testimonial.location}
            </p>
          </div>
        </div>

        {/* Right Arrow - Larger on big screens */}
        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-2 md:right-4 lg:right-0 xl:right-2 2xl:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 hover:opacity-70 hover:scale-110 transition-all duration-300 z-10"
          aria-label="Next testimonial"
        >
          <Image
            src="/assets/images/arrow.png"
            alt="Next"
            width={80}
            height={80}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24"
          />
        </button>
      </div>


    </div>
  )
}
