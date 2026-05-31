/**
 * TEMP ROUTE — /logos
 * A throwaway showcase page presenting 10 logo concepts for "Senja" cafe.
 * "Senja" is Indonesian for dusk/twilight, so the marks lean on sunset,
 * horizon, and coffee motifs in the site's warm-artisan palette.
 *
 * Colors come from Tailwind fill/stroke utilities (fill-primary,
 * stroke-foreground, ...) rather than `fill="var(--token)"` — SVG
 * presentation attributes do NOT resolve CSS custom properties, so the
 * utility classes are what keep the marks visible AND theme-aware.
 *
 * Safe to delete: remove this file and the `/logos` branch in src/App.tsx.
 */
import type { ReactNode } from 'react'

import { Card, CardContent } from '@/components/ui/card'

type LogoConcept = {
  id: number
  name: string
  tagline: string
  mark: ReactNode
}

/* Each `mark` is a square, self-contained SVG (viewBox 0 0 120 120). */
const concepts: LogoConcept[] = [
  {
    id: 1,
    name: 'Horizon',
    tagline: 'Half-sun dipping below a clean horizon line',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Horizon logo">
        <defs>
          <clipPath id="h-clip">
            <rect x="20" y="20" width="80" height="42" />
          </clipPath>
        </defs>
        <g clipPath="url(#h-clip)">
          <circle cx="60" cy="62" r="26" className="fill-primary" />
        </g>
        <line x1="18" y1="62" x2="102" y2="62" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="72" x2="90" y2="72" className="stroke-muted-foreground" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="42" y1="80" x2="78" y2="80" className="stroke-muted-foreground" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Sunrise Cup',
    tagline: 'A rising sun cradled in a coffee cup',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Sunrise Cup logo">
        <circle cx="60" cy="50" r="18" className="fill-primary" />
        {[-32, -16, 0, 16, 32].map((a) => (
          <line
            key={a}
            x1="60"
            y1="50"
            x2={60 + Math.sin((a * Math.PI) / 180) * 34}
            y2={50 - Math.cos((a * Math.PI) / 180) * 34}
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
        <path
          d="M34 70 h52 v6 a26 26 0 0 1 -52 0 z"
          fill="none"
          className="stroke-foreground"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M86 74 a10 10 0 0 1 0 16" fill="none" className="stroke-foreground" strokeWidth="4" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Radiant',
    tagline: 'Minimal monoline sun, endlessly versatile',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Radiant logo">
        <circle cx="60" cy="60" r="20" fill="none" className="stroke-foreground" strokeWidth="4" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180
          return (
            <line
              key={i}
              x1={60 + Math.cos(a) * 28}
              y1={60 + Math.sin(a) * 28}
              x2={60 + Math.cos(a) * 38}
              y2={60 + Math.sin(a) * 38}
              className={i % 2 === 0 ? 'stroke-primary' : 'stroke-muted-foreground'}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          )
        })}
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Emblem',
    tagline: 'Circular badge for stamps, cups & signage',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Emblem logo">
        <defs>
          <path id="arc-top" d="M28 60 a32 32 0 0 1 64 0" fill="none" />
          <path id="arc-bot" d="M30 64 a30 30 0 0 0 60 0" fill="none" />
          <clipPath id="e-clip">
            <rect x="40" y="40" width="40" height="22" />
          </clipPath>
        </defs>
        <circle cx="60" cy="60" r="40" fill="none" className="stroke-foreground" strokeWidth="3" />
        <circle cx="60" cy="60" r="34" fill="none" className="stroke-muted-foreground" strokeWidth="1.5" />
        <g clipPath="url(#e-clip)">
          <circle cx="60" cy="62" r="14" className="fill-primary" />
        </g>
        <line x1="44" y1="62" x2="76" y2="62" className="stroke-foreground" strokeWidth="2.5" strokeLinecap="round" />
        <text
          className="fill-foreground"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '9px', letterSpacing: '2px' }}
        >
          <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
            SENJA COFFEE
          </textPath>
        </text>
        <text
          className="fill-muted-foreground"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '7px', letterSpacing: '3px' }}
        >
          <textPath href="#arc-bot" startOffset="50%" textAnchor="middle">
            EST · DUSK
          </textPath>
        </text>
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Lettermark S',
    tagline: 'Serif "S" crowned with a setting sun',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Lettermark logo">
        <circle cx="60" cy="34" r="11" className="fill-primary" />
        <text
          x="60"
          y="92"
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '70px', fontWeight: 600 }}
        >
          S
        </text>
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Twin Peaks',
    tagline: 'Sun behind mountains, mirrored on water',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Twin Peaks logo">
        <defs>
          <clipPath id="m-clip">
            <rect x="18" y="20" width="84" height="42" />
          </clipPath>
        </defs>
        <g clipPath="url(#m-clip)">
          <circle cx="72" cy="46" r="14" className="fill-primary" />
        </g>
        <path d="M18 62 L44 34 L62 54 L80 38 L102 62 Z" className="fill-foreground" />
        <line x1="18" y1="62" x2="102" y2="62" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 70 L44 92 L62 74 L80 90 L98 70" fill="none" className="stroke-muted-foreground" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 7,
    name: 'Roast Bean',
    tagline: 'A coffee bean glowing with sunset rays',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Roast Bean logo">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180
          return (
            <line
              key={i}
              x1={60 + Math.cos(a) * 34}
              y1={60 + Math.sin(a) * 34}
              x2={60 + Math.cos(a) * 44}
              y2={60 + Math.sin(a) * 44}
              className="stroke-primary"
              strokeWidth="3"
              strokeLinecap="round"
            />
          )
        })}
        <ellipse cx="60" cy="60" rx="20" ry="28" className="fill-primary" />
        <path d="M60 34 C50 46 50 74 60 86" fill="none" className="stroke-foreground" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 8,
    name: 'Cup Horizon',
    tagline: 'The cup rim becomes the horizon line',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Cup Horizon logo">
        <defs>
          <clipPath id="c-clip">
            <rect x="30" y="30" width="60" height="34" />
          </clipPath>
        </defs>
        <g clipPath="url(#c-clip)">
          <circle cx="60" cy="64" r="20" className="fill-primary" />
        </g>
        <path
          d="M32 64 h56 v4 a28 28 0 0 1 -56 0 z"
          fill="none"
          className="stroke-foreground"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M88 68 a11 11 0 0 1 0 18" fill="none" className="stroke-foreground" strokeWidth="4" />
        <line x1="40" y1="98" x2="80" y2="98" className="stroke-foreground" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 9,
    name: 'Dusk Lines',
    tagline: 'Layered horizon stripes fading to a sun dot',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Dusk Lines logo">
        <circle cx="60" cy="40" r="13" className="fill-primary" />
        {[58, 70, 82, 94].map((y, i) => (
          <line
            key={y}
            x1={32 + i * 3}
            y1={y}
            x2={88 - i * 3}
            y2={y}
            className={i === 0 ? 'stroke-foreground' : 'stroke-muted-foreground'}
            strokeWidth={i === 0 ? 3.5 : 3}
            strokeLinecap="round"
            opacity={1 - i * 0.18}
          />
        ))}
      </svg>
    ),
  },
  {
    id: 10,
    name: 'Arch',
    tagline: 'A modern terracotta arch framing the sun',
    mark: (
      <svg viewBox="0 0 120 120" className="size-28" role="img" aria-label="Senja Arch logo">
        <path
          d="M30 96 V60 a30 30 0 0 1 60 0 V96"
          fill="none"
          className="stroke-foreground"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="60" cy="64" r="15" className="fill-primary" />
        <line x1="24" y1="96" x2="96" y2="96" className="stroke-foreground" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Logos() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-warm-radial border-b">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
          <a href="/" className="text-sm font-medium hover:underline">
            ← Back to site
          </a>
        </header>
        <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <p className="text-primary mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            Temp · Brand exploration
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            10 logo concepts for <span className="text-primary">Senja</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg text-pretty">
            "Senja" means dusk in Indonesian — each mark plays on sunsets, horizons, and coffee in
            the café's warm-artisan palette. Toggle dark mode to preview them on roast brown.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Logo grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <Card key={c.id} className="overflow-hidden">
              <CardContent className="flex flex-col items-center gap-5 text-center">
                <div className="bg-background flex aspect-square w-full max-w-[220px] items-center justify-center rounded-lg border">
                  {c.mark}
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">{`0${c.id}`.slice(-2)}</p>
                  <h2 className="font-serif text-xl font-semibold">
                    Senja <span className="text-muted-foreground font-sans text-sm">/ {c.name}</span>
                  </h2>
                  <p className="text-muted-foreground mt-1 text-sm text-pretty">{c.tagline}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </main>
    </div>
  )
}
