import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { Language, MenuItem } from '@/types'

interface MenuPhotoCardProps {
  item: MenuItem
  lang: Language
  /** Decorative pill-button label, e.g. "Order". */
  orderLabel: string
  /** Localised category label shown as the photo chip. */
  categoryLabel: string
}

/**
 * A photo menu card (reference "What's On The Menu" style): image with a
 * category chip, then name + price and a decorative "Order" pill. There is no
 * real cart — the button is visual only, so it's an inert <span>-styled pill.
 */
export function MenuPhotoCard({ item, lang, orderLabel, categoryLabel }: MenuPhotoCardProps) {
  return (
    <article className="bg-card group flex flex-col overflow-hidden rounded-3xl border shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          width={600}
          height={450}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category chip — or the item's own badge if it has one. */}
        <span className="bg-background/90 absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {item.badge ? item.badge[lang] : categoryLabel}
        </span>
      </div>

      <div className="flex grow flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">{item.name}</h3>
          <span className="text-primary shrink-0 font-semibold whitespace-nowrap">{item.price}</span>
        </div>
        <p className="text-muted-foreground mt-1.5 grow text-sm text-pretty">
          {item.description[lang]}
        </p>

        {/* Decorative order pill (no real cart). */}
        <Button size="sm" className="mt-4 self-start" tabIndex={-1} aria-hidden="true">
          <Plus aria-hidden="true" />
          {orderLabel}
        </Button>
      </div>
    </article>
  )
}
