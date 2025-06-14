import Button from '@/components/ui/Button'
import Image from 'next/image'
import { GalleryContent } from '@/content/types'

interface Props {
  content: GalleryContent
}

export default function GallerySection({ content }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-heading-lg font-bold text-neutral-dark mb-8">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.images.map((image) => (
            <div key={image.id} className="relative h-64 rounded-lg overflow-hidden group bg-neutral-light">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                
              />
              {image.title && (
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                  <p className="text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" width="default" href={content.ctaButton.href}>
            {content.ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
