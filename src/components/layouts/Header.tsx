'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50 pt-4 sm:pt-4 md:pt-5 lg:pt-7 pb-4 sm:pb-4 md:pb-5 lg:pb-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Left Section - Social Icons + Navigation */}
          <div className="flex items-center space-x-8">
            {/* Social Media Icons */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity duration-300">
                <span className="sr-only">Facebook</span>
                <Image 
                  src="/assets/icons/facebook.svg" 
                  alt="Facebook" 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity duration-300">
                <span className="sr-only">Twitter</span>
                <Image 
                  src="/assets/icons/twitter.svg" 
                  alt="Twitter" 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity duration-300">
                <span className="sr-only">Instagram</span>
                <Image 
                  src="/assets/icons/insta.svg" 
                  alt="Instagram" 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>

            {/* Left Navigation - Updated with base typography classes */}
            <nav className="hidden md:flex space-x-8">
              <a href="/shop" className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg hover:text-primary-gold-hover transition-colors">
                SHOP
              </a>
              <a href="/plan" className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg hover:text-primary-gold-hover transition-colors">
                PLAN MY KITCHEN
              </a>
            </nav>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="block hover:opacity-90 transition-opacity">
              <Image 
                src="/assets/images/mk-logo.png" 
                alt="MHK - Modern Kitchen Solutions Logo" 
                width={120}
                height={48}
                priority={true}
                quality={95}
                sizes="(max-width: 768px) 80px, 120px"
                className="h-8 w-auto md:h-12 object-contain"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </div>

          {/* Right Section - Navigation + CTA */}
          <div className="flex items-center space-x-8">
            {/* Right Navigation - Updated with base typography classes */}
            <nav className="hidden md:flex space-x-8">
              <a href="/about" className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg hover:text-primary-gold-hover transition-colors">
                ABOUT US
              </a>
              <a href="/gallery" className="text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg hover:text-primary-gold-hover transition-colors">
                GALLERY
              </a>
            </nav>

            {/* CTA Button with Cart Icon - Updated with base typography classes */}
            <div className="hidden md:block">
              <button className="group flex items-center space-x-2 px-5 py-2 border border-white text-white text-nav-base text-nav-sm md:text-nav-md lg:text-nav-lg hover:bg-white hover:text-neutral-text-dark transition-colors rounded-full">
                <span>MY ORDER</span>
                <Image 
                  src="/assets/images/shopping-cart.png" 
                  alt="Shopping Cart" 
                  width={16} 
                  height={16}
                  className="w-4 h-4 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className="block w-full h-0.5 bg-white mb-1 transition-all duration-300"></span>
              <span className="block w-full h-0.5 bg-white mb-1 transition-all duration-300"></span>
              <span className="block w-full h-0.5 bg-white transition-all duration-300"></span>
            </div>
          </button>
        </div>

        {/* Underline spanning content width - moved outside the flex container */}
        <div className="h-px bg-gradient-to-r via-white mt-4 sm:mt-4 md:mt-5 lg:mt-7"></div>
      </div>

      {/* Mobile menu - Updated with base typography classes */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-dark bg-opacity-90 backdrop-blur-sm">
          <nav className="px-4 py-4 space-y-4">
            <a href="/shop" className="block text-nav-base text-nav-sm hover:text-primary-gold-hover transition-colors">
              SHOP
            </a>
            <a href="/plan" className="block text-nav-base text-nav-sm hover:text-primary-gold-hover transition-colors">
              PLAN MY KITCHEN
            </a>
            <a href="/about" className="block text-nav-base text-nav-sm hover:text-primary-gold-hover transition-colors">
              ABOUT US
            </a>
            <a href="/gallery" className="block text-nav-base text-nav-sm hover:text-primary-gold-hover transition-colors">
              GALLERY
            </a>
            <button className="group flex items-center space-x-2 px-4 py-2 border border-white text-white text-nav-base text-nav-sm hover:bg-white hover:text-neutral-text-dark transition-colors rounded">
              <span>MY ORDER</span>
              <Image 
                src="/assets/images/shopping-cart.png" 
                alt="Shopping Cart" 
                width={16} 
                height={16}
                className="w-4 h-4 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
              />
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
