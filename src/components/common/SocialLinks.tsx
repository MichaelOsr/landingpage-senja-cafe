import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { SocialLink } from '@/types'

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

/** Row of icon buttons linking to social profiles. */
export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  )
}
