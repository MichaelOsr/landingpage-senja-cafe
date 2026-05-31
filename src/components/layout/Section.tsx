import { useEffect, useRef, type ComponentProps } from 'react'

import { cn } from '@/lib/utils'

/**
 * Shared section shell: centered max-width container with vertical rhythm.
 *
 * Scroll-reveal: on mount we check whether the section is already in the
 * viewport. If it's below the fold we add .reveal-section (opacity 0 +
 * translateY) and watch with IntersectionObserver; once it enters view we add
 * .visible to trigger the CSS transition. Sections already visible on load
 * are left untouched — no above-fold flash.
 */
export function Section({ className, children, ...props }: ComponentProps<'section'>) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let initialized = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!initialized) {
          initialized = true
          if (entry.isIntersecting) {
            // Already visible on load — leave it alone, stop observing.
            observer.unobserve(el)
            return
          }
          // Below the fold — apply the hidden state now (after first paint).
          el.classList.add('reveal-section')
          return
        }
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={cn('mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20', className)}
      {...props}
    >
      {children}
    </section>
  )
}
