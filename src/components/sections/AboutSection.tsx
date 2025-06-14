import Button from "@/components/ui/Button";
import Image from "next/image";
import { AboutContent } from "@/content/types";

interface Props {
  content: AboutContent;
}

export default function AboutSection({ content }: Props) {
  return (
    <section className="py-0.5 bg-neutral-light">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - Full width on mobile, left 50% on desktop */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section - Full width on mobile, right 50% on desktop, centered vertically */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12 xl:py-16 lg:flex lg:items-center">
          <div className="max-w-xl lg:max-w-none 2xl:max-w-[650px]">
            <h2 className="text-nav-base text-about-title-sm sm:text-about-title-md lg:text-about-title-lg mb-6">
              {content.title}
            </h2>
            <p className="text-about-subtitle-sm sm:text-about-subtitle-md lg:text-about-subtitle-lg xl:text-about-subtitle-xl text-left lg:mb-9">
              {content.subtitle}
            </p>

            <p className="font-subtitle text-body font-normal text-neutral-text-light mb-8 leading-relaxed">
              {content.description}
            </p>

            <Button
              variant="primary"
              width="compact"
            >
              {content.ctaButton.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
