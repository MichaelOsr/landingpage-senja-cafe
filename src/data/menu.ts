import type { MenuItem } from '@/types'

/*
  ┌──────────────────────────────────────────────────────────────────┐
  │  EDIT ME — featured menu items. `name` is shared across languages; │
  │  `description` and any `badge` are localized (en / id).            │
  │  `image` is the menu-card photo. Grouped in the UI by `category`.  │
  └──────────────────────────────────────────────────────────────────┘
*/
export const menu: MenuItem[] = [
  {
    name: 'Senja Signature Latte',
    category: 'coffee',
    price: 'Rp 38K',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?fm=jpg&q=80&w=600&auto=format&fit=crop',
    badge: { en: 'Signature', id: 'Andalan' },
    description: {
      en: 'Double shot, steamed milk, and a whisper of palm-sugar caramel.',
      id: 'Double shot, susu steam, dan sentuhan karamel gula aren.',
    },
  },
  {
    name: 'Single-Origin V60',
    category: 'coffee',
    price: 'Rp 35K',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?fm=jpg&q=80&w=600&auto=format&fit=crop',
    description: {
      en: 'A rotating pour-over that lets the bean of the week shine.',
      id: 'Seduh manual yang menonjolkan biji pilihan minggu ini.',
    },
  },
  {
    name: 'Es Kopi Susu Aren',
    category: 'coffee',
    price: 'Rp 30K',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?fm=jpg&q=80&w=600&auto=format&fit=crop',
    badge: { en: 'Bestseller', id: 'Terlaris' },
    description: {
      en: 'Iced espresso, fresh milk, and house palm-sugar syrup.',
      id: 'Espresso dingin, susu segar, dan sirup gula aren rumahan.',
    },
  },
  {
    name: 'Cortado',
    category: 'coffee',
    price: 'Rp 32K',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?fm=jpg&q=80&w=600&auto=format&fit=crop',
    description: {
      en: 'Equal parts espresso and warm milk — small, smooth, balanced.',
      id: 'Espresso dan susu hangat seimbang — kecil, halus, pas.',
    },
  },
  {
    name: 'Matcha Latte',
    category: 'noncoffee',
    price: 'Rp 36K',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?fm=jpg&q=80&w=600&auto=format&fit=crop',
    description: {
      en: 'Ceremonial-grade matcha whisked with creamy milk.',
      id: 'Matcha ceremonial-grade dikocok dengan susu lembut.',
    },
  },
  {
    name: 'Hot Chocolate',
    category: 'noncoffee',
    price: 'Rp 34K',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?fm=jpg&q=80&w=600&auto=format&fit=crop',
    description: {
      en: 'Dark couverture melted into steamed milk. Pure comfort.',
      id: 'Cokelat couverture dilelehkan ke dalam susu steam. Nikmat.',
    },
  },
  {
    name: 'Butter Croissant',
    category: 'pastries',
    price: 'Rp 28K',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?fm=jpg&q=80&w=600&auto=format&fit=crop',
    badge: { en: 'Baked daily', id: 'Baru tiap hari' },
    description: {
      en: 'Laminated for two days, baked golden every morning.',
      id: 'Dilaminasi dua hari, dipanggang keemasan tiap pagi.',
    },
  },
  {
    name: 'Almond Banana Bread',
    category: 'pastries',
    price: 'Rp 26K',
    image: 'https://images.unsplash.com/photo-1632931057819-4eefffa8e007?fm=jpg&q=80&w=600&auto=format&fit=crop',
    description: {
      en: 'Moist banana loaf with toasted almonds and a hint of cinnamon.',
      id: 'Banana bread lembut dengan almond panggang dan sedikit kayu manis.',
    },
  },
  {
    name: 'Cinnamon Roll',
    category: 'pastries',
    price: 'Rp 30K',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?fm=jpg&q=80&w=600&auto=format&fit=crop',
    description: {
      en: 'Soft, swirled, and finished with cream-cheese glaze.',
      id: 'Lembut, bergulung, dengan olesan cream cheese.',
    },
  },
]
