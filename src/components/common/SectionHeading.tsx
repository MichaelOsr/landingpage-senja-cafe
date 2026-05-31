import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  /** Small uppercase label above the title, e.g. "Our story". */
  eyebrow?: string
  title: string
  description?: string
  /** Set false for left-aligned headings (default is centered). */
  centered?: boolean
  className?: string
}

/** Consistent heading block used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-4 text-base text-pretty sm:text-lg">{description}</p>
      )}
    </div>
  )
}
