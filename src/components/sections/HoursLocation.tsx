import { Clock, MapPin, Navigation } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { useT } from '@/context/language-context'
import { cafe } from '@/data/cafe'

export function HoursLocation() {
  const { t } = useT()
  const today = new Date().getDay() // 0 = Sunday … 6 = Saturday

  return (
    <Section id="visit">
      <SectionHeading
        eyebrow={t.visit.eyebrow}
        title={t.visit.title}
        description={t.visit.subtitle}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Hours + address */}
        <div className="flex flex-col gap-8">
          <div className="bg-card rounded-3xl border-2 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <Clock className="text-primary size-5" aria-hidden="true" />
              {t.visit.hoursTitle}
            </h3>
            <dl className="mt-4 divide-y">
              {cafe.openingHours.map(({ day, hours }) => {
                // JS getDay: Sun=0,Mon=1… ; map our keys to that index.
                const dayIndex = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(day)
                const isToday = dayIndex === today
                return (
                  <div
                    key={day}
                    className={
                      'flex items-center justify-between py-2 text-sm ' +
                      (isToday ? 'font-semibold' : '')
                    }
                  >
                    <dt className={isToday ? 'text-primary' : ''}>{t.visit.days[day]}</dt>
                    <dd className={hours ? 'text-muted-foreground' : 'text-destructive'}>
                      {hours ?? t.visit.closed}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>

          <div className="bg-card rounded-3xl border-2 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <MapPin className="text-primary size-5" aria-hidden="true" />
              {t.visit.locationTitle}
            </h3>
            <address className="text-muted-foreground mt-4 flex flex-col gap-1 text-sm not-italic">
              {cafe.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <Button asChild variant="outline" className="mt-5">
              <a href={cafe.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation aria-hidden="true" />
                {t.visit.directions}
              </a>
            </Button>
          </div>
        </div>

        {/* Map — lazy iframe so it never blocks first paint / LCP. */}
        <div className="min-h-80 overflow-hidden rounded-3xl border-2 shadow-sm">
          <iframe
            title={t.visit.locationTitle}
            src="https://www.openstreetmap.org/export/embed.html?bbox=112.15%2C-8.11%2C112.18%2C-8.08&layer=mapnik"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-80 w-full border-0"
          />
        </div>
      </div>
    </Section>
  )
}
