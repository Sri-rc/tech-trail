import Button from "@/components/ui/Button";
import Image from "next/image";
import { HeroContent } from "@/content/types";

interface Props {
  content: HeroContent;
}

export default function HeroSection({ content }: Props) {
  // Function to handle line breaks in content
  const formatTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={content.backgroundImage.src}
          alt={content.backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle - Helvetica Regular */}
<p className="text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg mb-2 text-center">
  {content.subtitle}
</p>


        {/* Title */}
        <h1 className="font-heading text-hero-sm sm:text-hero-md lg:text-hero-lg xl:text-hero-xl font-helvetica-bold mb-8 sm:mb-12 max-w-5xl mx-auto text-center text-shadow-hero text-white">
          {formatTextWithLineBreaks(content.title)}
        </h1>

        {/* Button - Enhanced with proper desktop styling */}
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
