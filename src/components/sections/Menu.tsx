import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { MenuPhotoCard } from '@/components/common/MenuPhotoCard'
import { useT } from '@/context/language-context'
import { menu } from '@/data/menu'

export function Menu() {
  const { t, lang } = useT()

  return (
    <Section id="menu" className="scroll-mt-4">
      <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} description={t.menu.subtitle} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menu.map((item) => (
          <MenuPhotoCard
            key={item.name}
            item={item}
            lang={lang}
            orderLabel={t.menu.order}
            categoryLabel={t.menu.categoryLabels[item.category]}
          />
        ))}
      </div>

      <p className="text-muted-foreground mt-10 text-center text-sm">{t.menu.note}</p>
    </Section>
  )
}
