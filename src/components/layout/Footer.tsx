import { SenjaLogo } from '@/components/common/SenjaLogo'

import { SocialLinks } from '@/components/common/SocialLinks'
import { useT } from '@/context/language-context'
import { cafe } from '@/data/cafe'

export function Footer() {
  const { t } = useT()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-ink-foreground mt-8">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        {/* Brand */}
        <div className="max-w-xs">
          <p className="flex items-center gap-2 font-display text-xl font-bold">
            <SenjaLogo className="size-7" />
            {cafe.name}
          </p>
          <p className="mt-3 text-sm opacity-70">{t.footer.tagline}</p>
          <SocialLinks links={cafe.socials} className="mt-4 -ml-2" />
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide uppercase opacity-90">
            {t.footer.quickLinksTitle}
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {t.nav.links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase opacity-90">
            {t.footer.followTitle}
          </h2>
          <address className="mt-4 flex flex-col gap-2 text-sm not-italic opacity-70">
            {cafe.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a href={`tel:${cafe.phone.replace(/\s/g, '')}`} className="transition-opacity hover:opacity-100">
              {cafe.phone}
            </a>
            <a href={`mailto:${cafe.email}`} className="transition-opacity hover:opacity-100">
              {cafe.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs opacity-60 sm:px-6">
          © {year} {cafe.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
