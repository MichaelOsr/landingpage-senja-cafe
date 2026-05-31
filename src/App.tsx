import { LanguageProvider } from '@/context/LanguageProvider'
import { useT } from '@/context/language-context'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { YellowBanner } from '@/components/sections/YellowBanner'
import { About } from '@/components/sections/About'
import { Menu } from '@/components/sections/Menu'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { HoursLocation } from '@/components/sections/HoursLocation'
import { Contact } from '@/components/sections/Contact'
import { ReserveCTA } from '@/components/sections/ReserveCTA'
import Logos from '@/pages/Logos'

/** The page itself. Reads localized copy via useT (so it lives under the provider). */
function Page() {
  const { t } = useT()

  return (
    <>
      {/* Keyboard users can jump straight to content (a11y). */}
      <a
        href="#main"
        className="bg-primary text-primary-foreground focus:ring-ring sr-only z-100 rounded-full px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:ring-2"
      >
        {t.toggles.skipToContent}
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <YellowBanner />
        <Menu />
        <About />
        <Gallery />
        <Testimonials />
        <HoursLocation />
        <Contact />
        <ReserveCTA />
      </main>

      <Footer />
    </>
  )
}

export default function App() {
  // TEMP: lightweight path switch for the /logos brand-exploration page.
  // Remove this branch (and src/pages/Logos.tsx) when no longer needed.
  if (typeof window !== 'undefined' && window.location.pathname === '/logos') {
    // Wrapped in LanguageProvider because nested components call useT().
    return (
      <LanguageProvider>
        <Logos />
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
