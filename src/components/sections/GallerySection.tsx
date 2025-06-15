import ImagesGallery from '@/components/utils/ImagesGallery'
import { GalleryContent } from '@/content/types'

interface Props {
  content: GalleryContent
}

export default function GallerySection({ content }: Props) {
  const { 
    title, 
    subtitle, 
    images, 
    viewMoreButton, 
    displayConfig 
  } = content;

  // Fallback values for optional properties
  const defaultViewMoreButton = {
    text: 'VIEW MORE',
    hideText: 'SHOW LESS'
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="gallery-heading"
            className="font-heading text-heading-lg font-bold text-neutral-dark mb-8"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-neutral-medium">
              {subtitle}
            </p>
          )}
        </div>

        <ImagesGallery 
          images={images}
          viewMoreButton={viewMoreButton || defaultViewMoreButton}
          initialCount={displayConfig?.initialCount}
        />

      </div>
    </section>
  )
}
