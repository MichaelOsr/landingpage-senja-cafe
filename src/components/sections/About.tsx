import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { CoffeeBeans, Sparkle } from '@/components/common/Doodles'
import { useT } from '@/context/language-context'
import { gallery } from '@/data/gallery'

export function About() {
  const { t, lang } = useT()
  // Reuse a warm gallery photo for the feature image.
  const photo = gallery[2]

  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo with playful framing + doodle accents */}
        <div className="relative order-last lg:order-first">
          <CoffeeBeans className="text-primary/30 pointer-events-none absolute -top-6 -left-4 z-10 hidden w-20 -rotate-12 sm:block" />
          <Sparkle className="text-primary/50 pointer-events-none absolute -right-2 -bottom-4 z-10 size-7" />
          <div className="overflow-hidden rounded-4xl border-2 shadow-md">
            <img
              src={photo.src}
              alt={photo.alt[lang]}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="aspect-4/3 size-full object-cover"
            />
          </div>
        </div>

        {/* Story */}
        <div>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            centered={false}
            className="max-w-none"
          />
          <div className="mt-6 space-y-4">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground text-base text-pretty sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-8 border-t-2 border-dashed pt-8">
            {[
              { value: '5+', label: t.about.features[0].title },
              { value: 'Weekly', label: t.about.features[1].title },
              { value: 'Daily', label: t.about.features[2].title },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-primary font-display text-3xl font-bold">{value}</p>
                <p className="text-muted-foreground mt-0.5 text-xs tracking-wider uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature chips */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.about.features.map((feature) => (
          <div key={feature.title} className="bg-card rounded-2xl border p-5 shadow-sm">
            <h3 className="font-display text-base font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground mt-1.5 text-sm text-pretty">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
