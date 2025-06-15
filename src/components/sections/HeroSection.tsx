import Button from "@/components/ui/Button";
import Image from "next/image";
import { HeroContent } from "@/content/types";
import HeroCarouselWrapper from "../utils/HeroCarouselWrapper";

interface Props {
  content: HeroContent;
}

export default function HeroSection({ content }: Props) {
  const hasCarousel = content.carousel && content.carousel.slides.length > 0;

  // Function to handle line breaks in content (server-side)
  const formatTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  if (hasCarousel) {
    return <HeroCarouselWrapper content={content} />;
  }

  // Static hero section (server component)
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src={content.backgroundImage.desktop.src}
          alt={content.backgroundImage.desktop.alt}
          fill
          className="object-cover hidden sm:block"
          priority
        />
        {/* Mobile Image */}
        <Image
          src={content.backgroundImage.mobile.src}
          alt={content.backgroundImage.mobile.alt}
          fill
          className="object-cover block sm:hidden"
          priority
        />
        {/* Mobile Black Overlay */}
        <div className="absolute inset-0 bg-black/60 block sm:hidden" aria-hidden="true"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Subtitle */}
        <p className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg mb-2 text-center">
          {content.subtitle}
        </p>

        {/* Title */}
        <h1 className="font-heading text-hero-sm sm:text-hero-md lg:text-hero-lg xl:text-hero-xl font-helvetica-bold mb-8 sm:mb-12 max-w-5xl mx-auto text-center text-shadow-hero text-white">
          {formatTextWithLineBreaks(content.title)}
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
