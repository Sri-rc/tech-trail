import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import GallerySection from '@/components/sections/GallerySection'
import { ContentManager } from '@/lib/content-manager'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default async function HomePage() {
  // Fetch all content - future CMS integration point
  const headerConten = await ContentManager.getHeaderContent()
  const heroContent = await ContentManager.getHeroContent()
  const aboutContent = await ContentManager.getAboutContent()
  const experienceContent = await ContentManager.getExperienceContent()
  const galleryContent = await ContentManager.getGalleryContent()
  const footerContent = await ContentManager.getFooterContent()

  return (
    <main>
      <Header content={headerConten} />
      <HeroSection content={heroContent} />
      <AboutSection content={aboutContent} />
      <ExperienceSection content={experienceContent} />
      <GallerySection content={galleryContent} />
      <Footer content={footerContent} />
    </main>
  )
}
