import { Star, MapPin } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Section } from '@/components/layout/Section'
import { useT } from '@/context/language-context'

const AGGREGATE_RATING = 4.8

function StarRow({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          strokeWidth={0}
          className={cn(
            size === 'lg' ? 'size-5' : 'size-4',
            i < Math.round(rating) ? 'fill-amber-400' : 'fill-border',
          )}
        />
      ))}
    </div>
  )
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      aria-hidden="true"
      className="bg-foreground/10 text-foreground flex size-10 shrink-0 items-center justify-center rounded-full font-sans text-sm font-semibold"
    >
      {initials}
    </div>
  )
}

export function Testimonials() {
  const { t } = useT()

  return (
    <Section id="testimonials">
      <div className="grid gap-12 lg:grid-cols-[5fr_8fr] lg:gap-20">

        {/* ── Left: aggregate stats ───────────────────────────────────── */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          {/* Source badge */}
          <div className="mb-8 flex items-center gap-1.5">
            <MapPin className="text-muted-foreground size-3.5" strokeWidth={1.5} />
            <span className="text-muted-foreground text-xs tracking-[0.14em] uppercase">
              {t.testimonials.source}
            </span>
          </div>

          <p className="text-primary mb-2 text-xs font-semibold tracking-[0.18em] uppercase">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="font-display mb-8 text-3xl font-bold sm:text-4xl">
            {t.testimonials.title}
          </h2>

          {/* Big rating number */}
          <div className="mb-3 flex items-end gap-1 leading-none">
            <span className="font-display text-8xl font-bold">{AGGREGATE_RATING}</span>
            <span className="text-muted-foreground font-display mb-2 text-3xl">/5</span>
          </div>

          <StarRow rating={AGGREGATE_RATING} size="lg" />

          <p className="text-muted-foreground mt-3 text-sm">{t.testimonials.basedOn}</p>
        </div>

        {/* ── Right: individual reviews ───────────────────────────────── */}
        <div className="divide-y divide-border">
          {t.testimonials.items.map((item) => (
            <article key={item.name} className="py-8 first:pt-0 last:pb-0">
              {/* Stars + timestamp */}
              <div className="mb-4 flex items-center justify-between gap-4">
                <StarRow rating={item.rating} />
                <time className="text-muted-foreground shrink-0 text-sm">{item.timeAgo}</time>
              </div>

              {/* Review text */}
              <p className="mb-5 text-base leading-relaxed">{item.quote}</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <Avatar initials={item.initials} />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <MapPin className="size-3" strokeWidth={1.5} />
                    <span>{t.testimonials.source}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
