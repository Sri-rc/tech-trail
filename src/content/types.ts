export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceContent;
  gallery: GalleryContent;
  footer: FooterContent;
}

export interface HeroContent {
  subtitle: string;
  title: string;
  ctaButton: {
    text: string;
    href: string;
  };
  backgroundImage: {
    src: string;
    alt: string;
  };
}

export interface FooterContent {
  logo: string
  sections: {
    title: string
    links: {
      text: string
      href: string
    }[]
  }[]
  social: {
    platform: string
    href: string
    icon: string
  }[]
  copyright: string
  disclaimer: string
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
  social: SocialLink[];
  copyright: string;
  disclaimer: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
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
