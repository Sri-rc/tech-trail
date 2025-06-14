import Link from 'next/link'
import Image from 'next/image'
import { FooterContent } from '@/content/types'

interface Props {
  content: FooterContent
}

// Social Icon Component - Following single responsibility principle
const SocialIcon = ({ 
  platform, 
  href, 
  iconSrc 
}: { 
  platform: string
  href: string
  iconSrc: string
}) => (
  <Link
    href={href}
    className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-primary-gold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
    aria-label={`Follow us on ${platform}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image 
      src={iconSrc}
      alt={`${platform} icon`}
      width={40}
      height={40}
      className="w-5 h-5 sm:w-6 sm:h-6 lg:h-14 lg:w-14 filter group-hover:brightness-0 transition-all duration-300"
    />
  </Link>
)

// Footer Section Component - Reusable section structure
const FooterSection = ({ 
  title, 
  links 
}: { 
  title: string
  links: Array<{ text: string; href: string }>
}) => (
  <div className="text-center lg:text-left">
    <h3 className="text-nav-base text-nav-sm md:text-nav-md text-white mb-4 md:mb-6">
      {title}
    </h3>
    <ul className="space-y-2 md:space-y-4">
      {links.map((link, index) => (
        <li key={`${title}-${index}`}>
          <Link 
            href={link.href}
            className="text-nav-base text-nav-sm text-neutral-text-light hover:text-primary-gold transition-colors duration-300 block py-1"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default function Footer({ content }: Props) {
  // Social media configuration - Easy to maintain
  const socialConfig = [
    {
      platform: 'Facebook',
      href: content.social.find(s => s.platform === 'Facebook')?.href || 'https://facebook.com',
      iconSrc: '/assets/icons/facebook.svg'
    },
    {
      platform: 'Twitter', 
      href: content.social.find(s => s.platform === 'Twitter')?.href || 'https://twitter.com',
      iconSrc: '/assets/icons/twitter.svg'
    },
    {
      platform: 'Instagram',
      href: content.social.find(s => s.platform === 'Instagram')?.href || 'https://instagram.com',
      iconSrc: '/assets/icons/insta.svg'
    }
  ]

  return (
    <footer className="bg-neutral-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <Link 
            href="/" 
            className="inline-block hover:opacity-90 transition-opacity duration-300"
            aria-label="Go to homepage"
          >
            <Image 
              src="/assets/images/mk-logo.png" 
              alt="MK Logo"
              width={100}
              height={40}
              priority={false}
              quality={95}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter"
              sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 140px"
            />
          </Link>
        </div>

        {/* Main Footer Content - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 md:mb-16">
          
          {/* Navigation Sections - Dynamic rendering */}
          {content.sections.map((section, index) => (
            <FooterSection
              key={`section-${index}`}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Social Media Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-nav-base text-nav-sm md:text-nav-md text-white mb-4 md:mb-6">
              Follow
            </h3>
            
            {/* Social Icons - Responsive spacing */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
              {socialConfig.map((social, index) => (
                <SocialIcon
                  key={`social-${index}`}
                  platform={social.platform}
                  href={social.href}
                  iconSrc={social.iconSrc}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section - Responsive text sizing */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="text-center space-y-2">
            <p className="text-nav-base text-nav-sm text-neutral-text-light leading-relaxed">
              {content.copyright}
            </p>
            <p className="text-nav-base text-nav-sm text-neutral-text-light leading-relaxed">
              {content.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
