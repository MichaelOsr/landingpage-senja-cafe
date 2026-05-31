import type { GalleryImage } from '@/types'

/*
  ┌──────────────────────────────────────────────────────────────────┐
  │  EDIT ME — gallery images. Replace the placeholder SVGs in         │
  │  public/images/ with real photos (.webp recommended). Always set   │
  │  width/height to the real pixel size to avoid layout shift (CLS).  │
  │  `alt` is localized for accessibility in both languages.           │
  └──────────────────────────────────────────────────────────────────┘
*/
export const gallery: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1620052087171-68c17d1a196f?fm=jpg&q=80&w=800&auto=format&fit=crop',
    width: 800,
    height: 1000,
    alt: {
      en: 'Barista pulling an espresso shot at the counter.',
      id: 'Barista menarik espresso di meja bar.',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?fm=jpg&q=80&w=800&auto=format&fit=crop',
    width: 800,
    height: 600,
    alt: {
      en: 'Latte art in a ceramic cup on a wooden table.',
      id: 'Latte art dalam cangkir keramik di meja kayu.',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1739723745132-97df9db49db2?fm=jpg&q=80&w=800&auto=format&fit=crop',
    width: 800,
    height: 600,
    alt: {
      en: 'Warmly lit seating area with soft chairs.',
      id: 'Area duduk dengan cahaya hangat dan kursi empuk.',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1623334044303-241021148842?fm=jpg&q=80&w=800&auto=format&fit=crop',
    width: 800,
    height: 1000,
    alt: {
      en: 'Fresh croissants and pastries on display.',
      id: 'Croissant dan kue segar yang dipajang.',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?fm=jpg&q=80&w=800&auto=format&fit=crop',
    width: 800,
    height: 600,
    alt: {
      en: 'Roasted coffee beans spilling from a scoop.',
      id: 'Biji kopi sangrai tumpah dari sendok takar.',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1495862433577-132cf20d7902?fm=jpg&q=80&w=800&auto=format&fit=crop',
    width: 800,
    height: 600,
    alt: {
      en: 'Pour-over coffee being brewed by hand.',
      id: 'Kopi seduh manual yang sedang dibuat.',
    },
  },
]
