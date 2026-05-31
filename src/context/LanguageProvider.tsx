import { useMemo, type ReactNode } from 'react'

import { content } from '@/data/content'
import { useLanguage } from '@/hooks/useLanguage'
import { LanguageContext, type LanguageContextValue } from '@/context/language-context'

/**
 * Provides the active language and its translated copy to the whole tree.
 * Wrap the app once (see src/App.tsx); components then call `useT()`.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const { lang, toggleLanguage } = useLanguage()

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, toggleLanguage, t: content[lang] }),
    [lang, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
