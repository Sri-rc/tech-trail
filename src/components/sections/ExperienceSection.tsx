import Button from "@/components/ui/Button";
import { ExperienceContent } from "@/content/types";
import ExperienceCarousel from "./Courosel";

interface Props {
  content: ExperienceContent;
}

export default function ExperienceSection({ content }: Props) {
  return (
    <section
      className="py-20"
      style={{ background: "#EEEEEE 0% 0% no-repeat padding-box" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <p className="text-nav-base text-about-title-sm sm:text-about-title-md lg:text-about-title-lg text-nav-sm md:text-nav-md lg:text-nav-lg text-primary-gold mb-4">
          {content.subtitle}
        </p>

        {/* Main Heading */}
        <h2 className="text-heading-base text-heading-lg mb-12">
          {content.title}
        </h2>

        {/* Testimonial Carousel */}
        <div className="mb-12">
          <ExperienceCarousel items={content.items} />
        </div>

        {/* CTA Button */}
 <Button 
          variant="primary" 
          width="full"
          href={content.ctaButton.href}
        >
          {content.ctaButton.text}
        </Button>
      </div>
    </section>
  );
}
