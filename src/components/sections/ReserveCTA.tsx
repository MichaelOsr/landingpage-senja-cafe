import { CalendarHeart } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { CoffeeCup, Sparkle, SteamSwirl } from '@/components/common/Doodles'
import { useT } from '@/context/language-context'

/**
 * Tan rounded call-to-action card before the footer (reference "eat your world
 * better" block). Scrolls to the reservation form at #contact.
 */
export function ReserveCTA() {
  const { t } = useT()

  return (
    <Section>
      <div className="bg-accent text-accent-foreground relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center shadow-sm sm:px-12 sm:py-20">
        {/* Decorative doodles */}
        <CoffeeCup className="text-foreground/10 pointer-events-none absolute -bottom-4 left-6 hidden w-24 sm:block" />
        <SteamSwirl className="text-primary/30 pointer-events-none absolute top-8 right-10 hidden w-12 sm:block" />
        <Sparkle className="text-primary/40 pointer-events-none absolute top-10 left-12 hidden size-6 sm:block" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-primary mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            {t.reserveCTA.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-5xl">
            {t.reserveCTA.title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-lg text-base text-pretty sm:text-lg">
            {t.reserveCTA.subtitle}
          </p>

          <Button asChild size="xl" className="mt-9">
            <a href="#contact">
              <CalendarHeart aria-hidden="true" />
              {t.reserveCTA.cta}
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
