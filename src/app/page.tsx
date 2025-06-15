import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import GallerySection from '@/components/sections/GallerySection'
import { ContentManager } from '@/lib/content-manager'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import type { Metadata } from 'next'

// Generate metadata for the home page
export async function generateMetadata(): Promise<Metadata> {
  const heroContent = await ContentManager.getHeroContent()
  
  return {
    title: "Home",
    description: heroContent.subtitle || "Design and order your new kitchen online today. Over 35 years experience designing handmade, bespoke kitchens.",
    openGraph: {
      title: heroContent.title?.replace('\n', ' ') || "Bespoke & Made to Measure Handmade Kitchen Design",
      description: heroContent.subtitle || "Design and order your new kitchen online today",
      images: [
        {
          url: heroContent.backgroundImage?.desktop?.src || "/assets/images/Hero-Image.png",
          width: 1200,
          height: 630,
          alt: heroContent.backgroundImage?.desktop?.alt || "Modern bespoke kitchen design",
        },
      ],
    },
    twitter: {
      title: heroContent.title?.replace('\n', ' ') || "Bespoke & Made to Measure Handmade Kitchen Design",
      description: heroContent.subtitle || "Design and order your new kitchen online today",
      images: [heroContent.backgroundImage?.desktop?.src || "/assets/images/Hero-Image.png"],
    },
  }
}

export default async function HomePage() {
  try {
    // Fetch all content with error handling
    const [
      headerContent,
      heroContent,
      aboutContent, 
      experienceContent,
      galleryContent,
      footerContent
    ] = await Promise.all([
      ContentManager.getHeaderContent(),
      ContentManager.getHeroContent(),
      ContentManager.getAboutContent(),
      ContentManager.getExperienceContent(),
      ContentManager.getGalleryContent(),
      ContentManager.getFooterContent()
    ])

    return (
      <div className="relative min-h-screen">
        {/* Header - now fixed with scroll behavior */}
        <Header content={headerContent} />
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neutral-dark text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-primary-gold"
        >
          Skip to main content
        </a>
        
        {/* Main content - no top padding since header is overlaying */}
        <main id="main-content" className="flex-1">
          <HeroSection content={heroContent} />
          <AboutSection content={aboutContent} />
          <ExperienceSection content={experienceContent} />
          <GallerySection content={galleryContent} />
        </main>
        
        {/* Footer */}
        <Footer content={footerContent} />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MK Handmade Kitchens",
              "description": "Over 35 years experience designing handmade, bespoke kitchens. Quality craftsmanship from build to delivery.",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/assets/images/mk-logo.png`,
              "sameAs": [
                headerContent.social?.find(s => s.platform === "Facebook")?.href,
                headerContent.social?.find(s => s.platform === "Twitter")?.href,
                headerContent.social?.find(s => s.platform === "Instagram")?.href
              ].filter(Boolean),
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kitchen Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bespoke Kitchen Design",
                      "description": "Custom handmade kitchen design and installation"
                    }
                  }
                ]
              }
            })
          }}
        />
      </div>
    )
  } catch (error) {
    console.error('Error loading page content:', error)
    
    // Fallback content or error boundary
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="mb-6">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-6">
            We&apos;re having trouble loading the page. Please try refreshing or check back later.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neutral-dark hover:bg-neutral-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-dark transition-colors"
          >
            <svg 
              className="mr-2 h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
            Refresh Page
          </button>
        </div>
      </div>
    )
  }
}
