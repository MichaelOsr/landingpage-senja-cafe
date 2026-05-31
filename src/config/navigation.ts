/*
  The visible nav labels are localized in src/data/content.ts (t.nav.links).
  This file holds the *stable* list of section ids used by the scroll-spy
  (useActiveSection) so the observer doesn't rebuild when the language changes.
*/
export const sectionIds: readonly string[] = ['about', 'menu', 'gallery', 'visit', 'contact']
