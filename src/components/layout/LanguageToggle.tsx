import { Button } from '@/components/ui/button'
import { useT } from '@/context/language-context'

/** Compact EN / ID switch. Shows the language you'll switch *to*. */
export function LanguageToggle() {
  const { lang, toggleLanguage, t } = useT()
  const next = lang === 'en' ? 'ID' : 'EN'

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label={t.toggles.language}
      className="font-semibold tracking-wide"
    >
      {next}
    </Button>
  )
}
