import { createContext, useContext } from 'react'

import type { Language, Translation } from '@/types'

export interface LanguageContextValue {
  /** Active language code. */
  lang: Language
  /** Flip between `en` and `id`. */
  toggleLanguage: () => void
  /** The active language's copy — read it as `t.hero.title`, etc. */
  t: Translation
}

/*
  Context + hook live in this plain `.ts` module (no component export) so the
  Provider component can live in its own file without tripping React Fast
  Refresh's "only export components" rule.
*/
export const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Access the current language and its copy. Must be used inside LanguageProvider. */
export function useT(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useT must be used within a <LanguageProvider>')
  }
  return ctx
}
