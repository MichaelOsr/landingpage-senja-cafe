import { useCallback, useState } from 'react'
import { Menu } from 'lucide-react'

import { SenjaLogo } from '@/components/common/SenjaLogo'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { sectionIds } from '@/config/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useT } from '@/context/language-context'
import { cafe } from '@/data/cafe'
import { cn } from '@/lib/utils'

export function Navbar() {
  const activeId = useActiveSection(sectionIds)
  const { t } = useT()
  const [mobileOpen, setMobileOpen] = useState(false)

  /**
   * Mobile links only. Close the Sheet, then scroll once the page scroll lock
   * (Radix Dialog uses react-remove-scroll) is actually released — polling for
   * the lock to clear avoids racing the close animation and landing nowhere.
   * `scrollIntoView` respects `scroll-padding-top` on <html>, so no per-device
   * pixel math. Mirrors the pattern from the reference portfolio.
   */
  const handleMobileNavClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setMobileOpen(false)

    const el = document.getElementById(id)
    if (!el) return

    let frames = 0
    const scrollWhenUnlocked = () => {
      if (document.body.hasAttribute('data-scroll-locked') && frames++ < 60) {
        requestAnimationFrame(scrollWhenUnlocked)
        return
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    }
    requestAnimationFrame(scrollWhenUnlocked)
  }, [])

  const logo = (
    <a
      href="#top"
      className="flex items-center gap-2 rounded-sm font-display text-xl font-bold tracking-tight"
    >
      <SenjaLogo className="size-7" animated />
      {cafe.shortName}
    </a>
  )

  return (
    <header className="bg-background/85 sticky top-0 z-50 w-full backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr]"
      >
        {/* Desktop links (left) — native anchor + scroll-padding-top handles offset. */}
        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeId === id ? 'true' : undefined}
                className={cn(
                  'hover:text-foreground rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  activeId === id ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo — centered on desktop, leading on mobile. */}
        <div className="md:justify-self-center">{logo}</div>

        {/* Actions (right) */}
        <div className="flex items-center gap-1 md:justify-self-end">
          <LanguageToggle />

          <Button asChild size="sm" className="ml-1 hidden md:inline-flex">
            <a href="#contact">{t.nav.reserve}</a>
          </Button>

          {/* Mobile + tablet menu (below md = 768px). */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={t.toggles.openMenu}
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <SheetHeader>
                <SheetTitle className="font-display">{cafe.name}</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-2">
                {t.nav.links.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleMobileNavClick(e, id)}
                      aria-current={activeId === id ? 'true' : undefined}
                      className={cn(
                        'hover:bg-accent block rounded-md px-3 py-2 text-base font-medium transition-colors',
                        activeId === id ? 'text-foreground' : 'text-muted-foreground',
                      )}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 px-4">
                <Button asChild className="w-full">
                  <a href="#contact" onClick={(e) => handleMobileNavClick(e, 'contact')}>
                    {t.nav.reserve}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
