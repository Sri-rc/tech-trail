import siteContent from '@/content/site-content.json'
import navigation from '@/content/navigation.json'
import { SiteContent } from '@/content/types'

// Content management utility - future CMS integration point
export class ContentManager {
  // This will be replaced with CMS API calls
  static async getSiteContent(): Promise<SiteContent> {
    // TODO: Replace with CMS API call
    return siteContent as SiteContent
  }

  static async getNavigation() {
    // TODO: Replace with CMS API call
    return navigation
  }

  static async getHeroContent() {
    const content = await this.getSiteContent()
    return content.hero
  }

  static async getAboutContent() {
    const content = await this.getSiteContent()
    return content.about
  }

  static async getExperienceContent() {
    const content = await this.getSiteContent()
    return content.experience
  }

  static async getGalleryContent() {
    const content = await this.getSiteContent()
    return content.gallery
  }

  static async getFooterContent() {
    const content = await this.getSiteContent()
    return content.footer
  }
}

// Helper function for future CMS integration
export async function getPageContent(page: string) {
  // TODO: This will handle dynamic page content from CMS
  switch (page) {
    case 'home':
      return ContentManager.getSiteContent()
    default:
      return null
  }
}
