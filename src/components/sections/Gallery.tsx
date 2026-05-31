import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useT } from '@/context/language-context'
import { gallery } from '@/data/gallery'

export function Gallery() {
  const { t, lang } = useT()

  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow={t.gallery.eyebrow}
        title={t.gallery.title}
        description={t.gallery.subtitle}
      />

      {/* CSS columns give an effortless masonry layout. */}
      <div className="mt-12 gap-5 [column-fill:balance] sm:columns-2 lg:columns-3">
        {gallery.map((image, i) => (
          <figure
            key={image.src}
            className="mb-5 break-inside-avoid overflow-hidden rounded-3xl border-2 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:rotate-0"
            style={{ rotate: `${i % 2 === 0 ? -1.2 : 1.2}deg` }}
          >
            <img
              src={image.src}
              alt={image.alt[lang]}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
            />
          </figure>
        ))}
      </div>
    </Section>
  )
}
