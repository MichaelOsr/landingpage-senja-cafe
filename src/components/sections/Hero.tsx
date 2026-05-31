import { ArrowRight, CalendarHeart, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SenjaLogo } from '@/components/common/SenjaLogo'
import { CoffeeBeans, CoffeeCup, Sparkle, SteamSwirl, Squiggle } from '@/components/common/Doodles'
import { useT } from '@/context/language-context'

/** Overlapping avatar cluster — initials circles, no external images. */
const GUEST_INITIALS = ['AR', 'BS', 'CW', 'DP']

function GuestAvatars() {
  return (
    <div className="flex -space-x-2" aria-hidden="true">
      {GUEST_INITIALS.map((initials, i) => (
        <span
          key={initials}
          className="border-background bg-accent text-accent-foreground flex size-9 items-center justify-center rounded-full border-2 text-xs font-semibold"
          style={{ zIndex: GUEST_INITIALS.length - i }}
        >
          {initials}
        </span>
      ))}
    </div>
  )
}

export function Hero() {
  const { t } = useT()

  return (
    <section id="top" className="bg-warm-radial relative overflow-hidden">
      {/* Decorative coffee doodles scattered around the hero (hidden from AT). */}
      <CoffeeBeans className="text-primary/30 pointer-events-none absolute top-24 right-[8%] hidden w-20 -rotate-6 lg:block" />
      <CoffeeCup className="text-foreground/15 pointer-events-none absolute bottom-16 left-[6%] hidden w-16 lg:block" />
      <Sparkle className="text-primary/40 pointer-events-none absolute top-32 left-[12%] hidden size-6 sm:block" />
      <Sparkle className="text-foreground/20 pointer-events-none absolute right-[18%] bottom-28 hidden size-4 sm:block" />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
        {/* Brand mark — animated sunrise plays once on page load. */}
        <SenjaLogo className="mx-auto mb-6 size-16" animated />

        <p className="text-primary mb-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase">
          <SteamSwirl className="size-4" />
          {t.hero.eyebrow}
        </p>

        <h1 className="font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl">
          {t.hero.title}{' '}
          <span className="text-primary relative inline-block">
            {t.hero.highlight}
            {/* Hand-drawn underline beneath the highlighted phrase. */}
            <Squiggle className="text-primary absolute -bottom-2 left-0 h-3 w-full" />
          </span>
        </h1>

        <p className="text-muted-foreground mx-auto mt-8 max-w-xl text-lg text-pretty">
          {t.hero.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="xl">
            <a href="#menu">
              {t.hero.ctaMenu}
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="ink">
            <a href="#contact">
              <CalendarHeart aria-hidden="true" />
              {t.hero.ctaReserve}
            </a>
          </Button>
        </div>

        {/* Social proof — avatars + guest count, and a star rating badge. */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <GuestAvatars />
            <span className="text-sm font-medium">{t.hero.socialProof.guests}</span>
          </div>

          <div className="bg-card flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} strokeWidth={0} className="size-4 fill-amber-400" />
              ))}
            </span>
            <span className="text-sm font-semibold">{t.hero.socialProof.ratingLabel}</span>
            <span className="text-muted-foreground text-sm">· 4.8/5</span>
          </div>
        </div>
      </div>
    </section>
  )
}
