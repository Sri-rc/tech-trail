export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceContent;
  gallery: GalleryContent;
  footer: FooterContent;
  notFound: notFound;
}

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

export interface NavigationLink {
  text: string;
  href: string;
  isExternal?: boolean;
}

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

export interface HeroCarousel {
  autoRotate: boolean;
  interval: number;
  slides: HeroSlide[];
}

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


export interface AboutContent {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  description: string;
  ctaButton: {
    text: string;
    href: string;
  };
}

export interface ExperienceContent {
  subtitle: string
  title: string
  items: ExperienceItem[]
  ctaButton: {
    text: string
    href: string
  }
}

export interface ExperienceItem {
  testimonial: {
    quote: string
    author: string
    location: string
  }
}

export interface GalleryContent {
  title: string;
  subtitle: string;
  images: GalleryImage[];
  ctaButton: {
    text: string;
    href: string;
  };
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export interface FooterContent {
  logo: string;
  sections: FooterSection[];
  copyright: string;
  disclaimer: string;
}

export interface FooterSection {
  title: string;
  links?: FooterLink[];
  social?: SocialLink[];
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

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
