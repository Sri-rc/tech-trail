import Link from "next/link";
import Image from "next/image";
import { notFound } from "@/content/types";
import Button from "@/components/ui/Button";

// Icon components for action cards
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const GalleryIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
  </svg>
);

const PlanIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
  </svg>
);

const iconMap = {
  home: HomeIcon,
  gallery: GalleryIcon,
  plan: PlanIcon,
  support: SupportIcon,
} as const;

interface NotFoundPageProps {
  content: notFound;
}

export default function NotFoundPage({ content }: NotFoundPageProps) {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center px-4 py-8 pt-32 md:pt-36 lg:pt-40 overflow-hidden"
      role="main"
      aria-label={`404 error page with ${content.backgroundImage.alt}`}
    >
      {/* Background Image */}
      <Image
        src={content.backgroundImage.src}
        alt={content.backgroundImage.alt}
        fill
        className="object-cover object-center -z-10"
        quality={85}
        priority
        sizes="100vw"
      />
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Error Code Display */}
        <div className="mb-8">
          <div 
            className="font-heading font-bold text-white/30 leading-none select-none text-8xl md:text-9xl lg:text-[12rem] drop-shadow-lg"
            aria-hidden="true"
          >
            {content.errorCode}
          </div>
        </div>

        {/* Error Content */}
        <div className="mb-12">
          <p className="text-error-subtitle-sm md:text-error-subtitle-md mb-2 drop-shadow-sm">
            {content.subtitle}
          </p>
          <h1 className="text-heading-base-dark text-heading-md md:text-heading-lg lg:text-heading-xl mb-6 drop-shadow-sm">
            {content.title}
          </h1>
          <p className="text-body-lg-dark max-w-2xl mx-auto drop-shadow-sm">
            {content.message}
          </p>
        </div>

        {/* Action Cards */}
        <section className="mb-16" aria-labelledby="suggestions-heading">
          <h2 
            id="suggestions-heading"
            className="text-heading-base-dark text-heading-md mb-8 drop-shadow-sm"
          >
            {content.suggestions.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.suggestions.actions.map((action, index) => {
              const IconComponent = iconMap[action.icon as keyof typeof iconMap];
              return (
                <Link
                  key={index}
                  href={action.href}
                  className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 border border-white/20 group flex flex-col items-center text-center"
                  aria-label={`${action.text}: ${action.description}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-gold/10 rounded-lg mb-4 text-primary-gold group-hover:bg-primary-gold/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-dark mb-2">
                    {action.text}
                  </h3>
                  <p className="text-sm text-neutral-text-light">
                    {action.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Popular Pages */}
        <section className="max-w-md mx-auto mb-12" aria-labelledby="popular-pages-heading">
          <h3 
            id="popular-pages-heading"
            className="text-heading-base-dark text-heading-sm mb-6 drop-shadow-sm"
          >
            {content.popularPages.title}
          </h3>
          <nav aria-label="Popular pages navigation">
            <ul className="space-y-3">
              {content.popularPages.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="inline-block text-primary-gold hover:text-white font-medium hover:underline transition-colors drop-shadow-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Back to Home Button */}
        <div>
          <Button href="/" variant="primary" width="wide">
            Take Me Home
          </Button>
        </div>
      </div>
    </div>
  );
}
