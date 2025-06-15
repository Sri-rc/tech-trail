"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderContent } from "@/content/types";

interface Props {
  content: HeaderContent;
}

interface SocialIconProps {
  platform: string;
  href: string;
  iconSrc: string;
}

interface NavigationProps {
  links: Array<{ text: string; href: string }>;
  className?: string;
  onClick?: () => void;
}

interface CTAButtonProps {
  text: string;
  cartIcon: {
    src: string;
    alt: string;
  };
  className?: string;
}

// Social Icon Component - Reusable and accessible
const SocialIcon = ({ platform, href, iconSrc }: SocialIconProps) => (
  <Link
    href={href}
    className="hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-transparent"
    aria-label={`Visit our ${platform} page`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={iconSrc}
      alt={platform}
      width={20}
      height={20}
      className="w-5 h-5"
      loading="lazy"
    />
  </Link>
);

// Navigation Component - Reusable for both desktop and mobile with nowrap
const Navigation = ({ links, className = "", onClick }: NavigationProps) => (
  <nav className={className} role="navigation">
    {links.map((link, index) => (
      <Link
        key={`nav-${index}`}
        href={link.href}
        className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg hover:text-primary-gold-hover transition-colors focus:outline-none focus:text-primary-gold whitespace-nowrap"
        onClick={onClick}
      >
        {link.text}
      </Link>
    ))}
  </nav>
);

// CTA Button Component - Reusable with cart icon
const CTAButton = ({ text, cartIcon, className = "" }: CTAButtonProps) => (
  <button className={`group flex items-center space-x-2 lg:space-x-3 px-4 lg:px-6 py-2 lg:py-3 border border-white text-white text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg hover:bg-white hover:text-neutral-text-dark transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap ${className}`}>
    <span>{text}</span>
    <Image
      src={cartIcon.src}
      alt={cartIcon.alt}
      width={16}
      height={16}
      className="w-4 h-4 group-hover:brightness-100 group-hover:invert-0 transition-all"
    />
  </button>
);

// Mobile Menu Toggle Button - Accessible hamburger menu
const MobileMenuToggle = ({ 
  isOpen, 
  onClick, 
  toggleLabel 
}: { 
  isOpen: boolean; 
  onClick: () => void; 
  toggleLabel: string;
}) => (
  <button
    className="lg:hidden focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-transparent z-50 relative"
    onClick={onClick}
    aria-label={toggleLabel}
    aria-expanded={isOpen}
  >
    <div className="w-6 h-6 flex flex-col justify-center">
      <span className={`block w-full h-0.5 bg-white mb-1 transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
      <span className={`block w-full h-0.5 bg-white mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
    </div>
  </button>
);

// Close Button for Mobile Menu
const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-6 right-6 p-2 text-white hover:text-primary-gold focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-neutral-dark transition-colors"
    aria-label="Close menu"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);

export default function Header({ content }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized toggle handler for performance
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMobileNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Error boundary for missing content
  if (!content) {
    console.warn('Header: Missing required content data');
    return null;
  }

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 right-0 z-50 pt-7 pb-7" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 relative">
            {/* Mobile Layout - Logo left, hamburger right */}
            <div className="flex justify-between items-center h-full lg:hidden">
              <div className="flex items-center">
                <Link
                  href={content.logo.href}
                  className="block hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Go to homepage"
                >
                  <Image
                    src={content.logo.src}
                    alt={content.logo.alt}
                    width={84}
                    height={33}
                    priority={true}
                    quality={95}
                    sizes="(max-width: 640px) 60px, (max-width: 768px) 70px, (max-width: 1024px) 80px, 84px"
                    className="w-auto h-7 sm:h-8 md:h-8 object-contain"
                  />
                </Link>
              </div>
              
              <MobileMenuToggle
                isOpen={isMenuOpen}
                onClick={handleMenuToggle}
                toggleLabel={content.mobileMenu.toggleLabel}
              />
            </div>

            {/* Desktop Layout - 3 column grid for perfect centering */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-2 xl:gap-4 lg:items-center h-full">
              {/* Left Section - Social Icons + Navigation */}
              <div className="flex items-center space-x-8 xl:space-x-12 2xl:space-x-16">
                {/* Social Media Icons */}
                {content.social && content.social.length > 0 && (
                  <div className="flex space-x-2 flex-shrink-0" role="list">
                    {content.social.map((social, index) => (
                      <SocialIcon
                        key={`social-${index}`}
                        platform={social.platform}
                        href={social.href}
                        iconSrc={social.icon}
                      />
                    ))}
                  </div>
                )}

                {/* Left Navigation */}
                {content.navigation?.left && (
                  <Navigation
                    links={content.navigation.left}
                    className="flex space-x-4 xl:space-x-6 2xl:space-x-8"
                  />
                )}
              </div>

              {/* Center Logo - Perfectly centered */}
              <div className="flex justify-center">
                <Link
                  href={content.logo.href}
                  className="block hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Go to homepage"
                >
                  <Image
                    src={content.logo.src}
                    alt={content.logo.alt}
                    width={84}
                    height={33}
                    priority={true}
                    quality={95}
                    sizes="84px"
                    className="w-auto h-8 xl:h-8 2xl:h-8 object-contain"
                  />
                </Link>
              </div>

              {/* Right Section - Navigation + CTA */}
              <div className="flex items-center justify-end space-x-8 xl:space-x-12 2xl:space-x-16">
                {/* Right Navigation */}
                {content.navigation?.right && (
                  <Navigation
                    links={content.navigation.right}
                    className="flex space-x-4 xl:space-x-6 2xl:space-x-8"
                  />
                )}

                {/* CTA Button with Cart Icon */}
                <div className="flex-shrink-0">
                  <CTAButton
                    text={content.cta.text}
                    cartIcon={content.cta.cartIcon}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Underline spanning content width */}
          <div className="h-px opacity-50 bg-white mt-3" aria-hidden="true"></div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={handleMobileNavClick}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-neutral-dark z-50 lg:hidden transform transition-transform duration-300 ease-in-out"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <CloseButton onClick={handleMobileNavClick} />
              
              {/* Menu Header */}
              <div className="pt-16 pb-6 px-6 border-b border-white/10">
                <h2 id="mobile-menu-title" className="text-nav-base text-nav-md text-white">
                  Menu
                </h2>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto py-6">
                <div className="px-6 space-y-8">
                  {/* Left Navigation */}
                  {content.navigation?.left && (
                    <div>
                      <Navigation
                        links={content.navigation.left}
                        className="flex flex-col space-y-4"
                        onClick={handleMobileNavClick}
                      />
                    </div>
                  )}
                  
                  {/* Right Navigation */}
                  {content.navigation?.right && (
                    <div>
                      <Navigation
                        links={content.navigation.right}
                        className="flex flex-col space-y-4"
                        onClick={handleMobileNavClick}
                      />
                    </div>
                  )}

                  {/* Mobile CTA Button */}
                  <div className="pt-4">
                    <CTAButton
                      text={content.cta.text}
                      cartIcon={content.cta.cartIcon}
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Social Icons */}
              {content.social && content.social.length > 0 && (
                <div className="border-t border-white/10 p-6">
                  <div className="flex justify-center space-x-6">
                    {content.social.map((social, index) => (
                      <SocialIcon
                        key={`mobile-social-${index}`}
                        platform={social.platform}
                        href={social.href}
                        iconSrc={social.icon}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
