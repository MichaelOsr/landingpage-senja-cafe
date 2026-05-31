import { beforeEach, describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { useT } from '@/context/language-context'
import { renderWithProviders } from '@/test/utils'

/** Tiny consumer that prints the active hero title so we can assert the copy switched. */
function HeroTitleProbe() {
  const { t } = useT()
  return <p>{t.hero.subtitle}</p>
}

describe('LanguageToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = 'en'
  })

  it('starts in English and offers to switch to Indonesian', () => {
    renderWithProviders(<LanguageToggle />)
    expect(screen.getByRole('button')).toHaveTextContent('ID')
  })

  it('switches all copy to Indonesian on click', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <>
        <LanguageToggle />
        <HeroTitleProbe />
      </>,
    )

    // English copy first.
    expect(screen.getByText(/Senja Coffee House is a cozy corner/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button'))

    // Indonesian copy after toggling, and <html lang> updated for a11y/SEO.
    expect(screen.getByText(/sudut nyaman untuk kopi single-origin/i)).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('id')
    expect(screen.getByRole('button')).toHaveTextContent('EN')
  })
})
