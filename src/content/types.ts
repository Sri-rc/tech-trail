/**
 * Main site content structure containing all page sections
 */
export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceContent;
  gallery: GalleryContent;
  footer: FooterContent;
  notFound: notFound;
}

/**
 * Header component content including navigation, logo, and social links
 */
export interface HeaderContent {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  navigation: {
    left: NavigationLink[];
    right: NavigationLink[];
  };
  social: SocialLink[];
  cta: {
    text: string;
    cartIcon: {
      src: string;
      alt: string;
    };
  };
  mobileMenu: {
    toggleLabel: string;
    openLabel: string;
  };
}

/**
 * Individual navigation link with text and destination
 */
export interface NavigationLink {
  text: string;
  href: string;
  isExternal?: boolean;
}

/**
 * Individual slide content for hero carousel
 */
export interface HeroSlide {
  title: string;
  subtitle: string;
  backgroundImage: {
    desktop: {
      src: string;
      alt: string;
    };
    mobile: {
      src: string;
      alt: string;
    };
  };
}

/**
 * Hero carousel configuration and slide data
 */
export interface HeroCarousel {
  autoRotate: boolean;
  interval: number;
  slides: HeroSlide[];
}

/**
 * Hero section content with title, CTA, and background imagery
 */
export interface HeroContent {
  subtitle: string;
  title: string;
  ctaButton: {
    text: string;
    href: string;
  };
  carousel?: HeroCarousel;
  backgroundImage: {
    desktop: {
      src: string;
      alt: string;
    };
    mobile: {
      src: string;
      alt: string;
    };
  };
}

/**
 * Basic image content with source and alt text
 */
export interface ImageContent {
  src: string;
  alt: string;
}

/**
 * Extended image content with unique identifier and title
 */
export interface AdditionalImage extends ImageContent {
  id: string;
  title: string;
}

/**
 * Call-to-action button with text and destination
 */
export interface ButtonContent {
  text: string;
  href: string;
}

/**
 * Toggle button for expanding/collapsing content sections
 */
export interface ViewMoreButton {
  text: string;
  hideText: string;
}

/**
 * About section content including description, images, and CTA
 */
export interface AboutContent {
  image: ImageContent;
  title: string;
  subtitle: string;
  description: string;
  ctaButton: ButtonContent;
  additionalImages: AdditionalImage[];
  viewMoreButton: ViewMoreButton;
}

/**
 * Experience section content with testimonials and company history
 */
export interface ExperienceContent {
  subtitle: string
  title: string
  items: ExperienceItem[]
  ctaButton: {
    text: string
    href: string
  }
}

/**
 * Individual experience/testimonial item with customer feedback
 */
export interface ExperienceItem {
  testimonial: {
    quote: string
    author: string
    location: string
  }
}

/**
 * Gallery display configuration for image loading behavior
 */
export interface GalleryDisplayConfig {
  initialCount: number;
  loadMoreCount: number;
}

/**
 * Gallery section content with image collection and display settings
 */
export interface GalleryContent {
  title: string;
  subtitle: string;
  images: GalleryImage[];
  displayConfig?: GalleryDisplayConfig;
  ctaButton: {
    text: string;
    href: string;
  };
  viewMoreButton: ViewMoreButton;
}

/**
 * Individual gallery image with metadata and optional title
 */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

/**
 * Footer content including logo, navigation sections, and legal text
 */
export interface FooterContent {
  logo: string;
  sections: FooterSection[];
  copyright: string;
  disclaimer: string;
}

/**
 * Footer section containing links or social media icons
 */
export interface FooterSection {
  title: string;
  links?: FooterLink[];
  social?: SocialLink[];
}

/**
 * Individual footer navigation link
 */
export interface FooterLink {
  text: string;
  href: string;
}

/**
 * Social media platform link with icon
 */
export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

/**
 * 404 Not Found page content with error messaging and navigation options
 */
export interface notFound {
  title: string;
  subtitle: string;
  message: string;
  errorCode: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  suggestions: {
    title: string;
    actions: Array<{
      text: string;
      href: string;
      icon: string;
      description: string;
    }>;
  };
  popularPages: {
    title: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  };
}
