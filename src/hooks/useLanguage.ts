import { useCallback, useEffect, useState } from 'react'

import type { Language } from '@/types'

const STORAGE_KEY = 'lang'

/** Read the saved language, falling back to the browser's preference. */
function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'id') return stored
  return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
}

/**
 * Language state. Persists the choice to localStorage and keeps <html lang>
 * in sync (important for screen readers and SEO). The matching anti-FOUC
 * script in index.html sets <html lang> before React mounts.
 */
export function useLanguage() {
  const [lang, setLang] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'en' ? 'id' : 'en'))
  }, [])

  return { lang, setLang, toggleLanguage }
}
