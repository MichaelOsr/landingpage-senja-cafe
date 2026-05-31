import { StampBadge, Sparkle } from '@/components/common/Doodles'
import { useT } from '@/context/language-context'

/**
 * Full-bleed bright-yellow statement band — the reference's "Nothing brings
 * people together…" block, adapted for Senja. Two circular stamp badges sit
 * alongside a big display statement.
 */
export function YellowBanner() {
  const { t } = useT()
  const [badgeTop, badgeBottom] = t.yellowBanner.badges

  return (
    <section className="bg-accent-yellow text-accent-yellow-foreground relative overflow-hidden">
      <Sparkle className="absolute top-8 left-[8%] hidden size-6 opacity-30 sm:block" />
      <Sparkle className="absolute right-[10%] bottom-10 hidden size-8 opacity-25 sm:block" />

      {/* Stamps are absolutely positioned so they never push the text off-center. */}
      <StampBadge
        className="absolute top-1/2 left-[4%] hidden size-28 -translate-y-1/2 rotate-[-8deg] opacity-90 lg:block xl:size-32"
        topText={`· ${badgeBottom} ·`}
        bottomText={`· ${badgeBottom} ·`}
      />
      <StampBadge
        className="absolute top-1/2 right-[4%] hidden size-28 -translate-y-1/2 rotate-6 opacity-90 lg:block xl:size-32"
        topText={`· ${badgeTop} ·`}
        bottomText={`· ${badgeTop} ·`}
      />

      <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {t.yellowBanner.statement}
        </p>
      </div>
    </section>
  )
}
