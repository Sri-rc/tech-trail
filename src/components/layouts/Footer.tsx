import Link from "next/link";
import Image from "next/image";
import { FooterContent } from "@/content/types";

interface Props {
  content: FooterContent;
}

interface SocialIconProps {
  platform: string;
  href: string;
  iconSrc: string;
}

interface FooterSectionProps {
  title: string;
  links?: Array<{ text: string; href: string }>;
  social?: Array<{ platform: string; href: string; icon: string }>;
}

// Social Icon Component - Memoized for performance
const SocialIcon = ({ platform, href, iconSrc }: SocialIconProps) => (
  <Link
    href={href}
    className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-primary-gold hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-neutral-dark"
    aria-label={`Follow us on ${platform}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={iconSrc}
      alt={`${platform} icon`}
      width={40}
      height={40}
      loading="lazy"
      className="w-5 h-5 sm:w-6 sm:h-6 lg:h-12 lg:w-12 filter group-hover:brightness-0 transition-all duration-300"
    />
  </Link>
);

// Footer Section Component - Handles both regular links and social
const FooterSection = ({ title, links, social }: FooterSectionProps) => (
  <div className="text-center lg:text-left">
    <h3 className="text-footer-title-sm md:text-footer-title-md lg:text-footer-title-lg mb-4 md:mb-6 font-heading">
      {title}
    </h3>

    {/* Regular navigation links */}
    {links && (
      <ul className="space-y-2 md:space-y-4" role="list">
        {links.map((link, index) => (
          <li key={`${title}-link-${index}`}>
            <Link
              href={link.href}
              className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg opacity-80 text-neutral-text-light leading-relaxed hover:opacity-100 hover:text-primary-gold transition-all duration-300 focus:outline-none focus:text-primary-gold"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    )}

    {/* Social media icons */}
    {social && (
      <div
        className="flex justify-center lg:justify-start space-x-3 sm:space-x-4"
        role="list"
      >
        {social.map((socialItem, index) => (
          <SocialIcon
            key={`${title}-social-${index}`}
            platform={socialItem.platform}
            href={socialItem.href}
            iconSrc={socialItem.icon}
          />
        ))}
      </div>
    )}
  </div>
);

export default function Footer({ content }: Props) {
  // Error boundary for missing content
  if (!content || !content.sections) {
    console.warn("Footer: Missing required content data");
    return null;
  }

  return (
    <footer className="bg-neutral-dark py-12 md:py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section with decorative lines */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center space-x-6 md:space-x-8">
            <div className="flex-1 h-px bg-white/50" aria-hidden="true" />

            <Link
              href="/"
              className="inline-block hover:opacity-90 transition-opacity duration-300 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-neutral-dark"
              aria-label="Go to homepage"
            >
              <Image
                src={content.logo}
                alt="MK Handmade Kitchens Logo"
                width={100}
                height={40}
                priority={false}
                quality={95}
                className="h-8 w-auto sm:h-10 md:h-12 object-contain"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 140px"
              />
            </Link>

            <div className="flex-1 h-px bg-white/50" aria-hidden="true" />
          </div>
        </div>

        {/* Main Footer Content - Dynamic sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 md:mb-16 lg:justify-items-center">
          {content.sections.map((section, index) => (
            <FooterSection
              key={`footer-section-${index}`}
              title={section.title}
              links={section.links}
              social={section.social}
            />
          ))}
        </div>

        {/* Copyright and Legal Information */}
        {(content.copyright || content.disclaimer) && (
          <div className="text-center space-y-2">
            {content.copyright && (
              <p className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg opacity-50 normal-case text-neutral-text-light leading-relaxed">
                {content.copyright}
              </p>
            )}
            {content.disclaimer && (
              <p className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg opacity-50 normal-case text-neutral-text-light leading-relaxed">
                {content.disclaimer}
              </p>
            )}
          </div>
        )}

        {/* Decorative separator */}
        <div
          className="border-t border-white/50 mt-8 md:mt-10"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
