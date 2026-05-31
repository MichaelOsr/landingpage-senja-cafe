import { useId } from 'react'
import { cn } from '@/lib/utils'

interface SenjaLogoProps {
  className?: string
  /** When true, the sun rises from below the horizon on mount. */
  animated?: boolean
}

/**
 * Logo concept #1 — "Horizon": half-sun rising above the waterline.
 *
 * Uses a full circle clipped to the upper half by a clipPath so the sun can
 * be animated upward via translateY without the bottom half leaking through.
 * transform-box: fill-box (applied via .senja-sun-rise in index.css) makes
 * 50% equal exactly one radius, perfectly hiding the circle at rest.
 */
export function SenjaLogo({ className = 'size-6', animated = false }: SenjaLogoProps) {
  const uid = useId()
  const clipId = `senja-clip-${uid}`

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        {/* Clips to the area above the horizon line (y < 62). */}
        <clipPath id={clipId}>
          <rect x="0" y="0" width="120" height="62" />
        </clipPath>
      </defs>

      {/* Sun — full circle clipped to its upper half. */}
      <g clipPath={`url(#${clipId})`}>
        <circle
          cx="60"
          cy="62"
          r="26"
          className={cn('fill-primary', animated && 'senja-sun-rise')}
        />
      </g>

      {/* Horizon line */}
      <line
        x1="18"
        y1="62"
        x2="102"
        y2="62"
        className="stroke-foreground"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Ripple lines */}
      <line
        x1="30"
        y1="74"
        x2="90"
        y2="74"
        className="stroke-muted-foreground"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="84"
        x2="78"
        y2="84"
        className="stroke-muted-foreground"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}
