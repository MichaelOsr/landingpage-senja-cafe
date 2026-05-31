/*
  ┌──────────────────────────────────────────────────────────────────┐
  │  DOODLES — hand-drawn decorative glyphs for the playful theme.     │
  │  All are purely decorative (aria-hidden) and inherit color via     │
  │  Tailwind stroke-/fill- utility classes passed through className.  │
  │  Sized via className (e.g. "size-10 text-primary").                │
  └──────────────────────────────────────────────────────────────────┘
*/
interface DoodleProps {
  className?: string
}

/** Wavy rising steam — three offset squiggles. */
export function SteamSwirl({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      {[10, 24, 38].map((x, i) => (
        <path
          key={x}
          d={`M${x} 42 C${x - 5} 34 ${x + 5} 30 ${x} 22 C${x - 5} 14 ${x + 5} 10 ${x} 4`}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={1 - i * 0.22}
        />
      ))}
    </svg>
  )
}

/** A pair of roasted coffee beans with their centre crease. */
export function CoffeeBeans({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" aria-hidden="true">
      <g transform="rotate(-18 20 24)">
        <ellipse cx="20" cy="24" rx="11" ry="16" fill="currentColor" />
        <path d="M20 9 C14 16 14 32 20 39" stroke="var(--background)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g transform="rotate(14 44 26)">
        <ellipse cx="44" cy="26" rx="11" ry="16" fill="currentColor" />
        <path d="M44 11 C38 18 38 34 44 41" stroke="var(--background)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  )
}

/** A simple cup-and-saucer with a wisp of steam. */
export function CoffeeCup({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M14 30 h30 v8 a15 15 0 0 1 -30 0 z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M44 33 a8 8 0 0 1 0 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M16 56 h30" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M22 22 c-3 -4 3 -7 0 -12 M30 22 c-3 -4 3 -7 0 -12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

/** Four-point sparkle / twinkle. */
export function Sparkle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** A loose hand-drawn underline squiggle. */
export function Squiggle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 16" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M2 11 C20 3 30 3 48 9 C66 15 78 15 96 8 C106 4 113 5 118 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface StampBadgeProps extends DoodleProps {
  /** Text wrapped around the top arc. */
  topText?: string
  /** Text wrapped around the bottom arc. */
  bottomText?: string
}

/**
 * A circular rubber-stamp badge with text on arcs and a small glyph in the
 * centre — the reference's "FRESH MEAT" stamp, adapted for Senja.
 */
export function StampBadge({ className, topText = '', bottomText = '' }: StampBadgeProps) {
  // Unique ids per instance so multiple stamps on one page don't collide.
  const uid = topText.replace(/\W/g, '') + bottomText.replace(/\W/g, '')
  const topId = `stamp-top-${uid}`
  const botId = `stamp-bot-${uid}`

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <path id={topId} d="M22 60 a38 38 0 0 1 76 0" fill="none" />
        <path id={botId} d="M26 64 a34 34 0 0 0 68 0" fill="none" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" />

      <text
        fill="currentColor"
        style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px' }}
      >
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>
      <text
        fill="currentColor"
        style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px' }}
      >
        <textPath href={`#${botId}`} startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      {/* Centre sun glyph echoing the Senja logo. */}
      <circle cx="60" cy="58" r="9" fill="currentColor" />
      {[-30, 0, 30].map((a) => (
        <line
          key={a}
          x1={60 + Math.sin((a * Math.PI) / 180) * 14}
          y1={58 - Math.cos((a * Math.PI) / 180) * 14}
          x2={60 + Math.sin((a * Math.PI) / 180) * 20}
          y2={58 - Math.cos((a * Math.PI) / 180) * 20}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}
