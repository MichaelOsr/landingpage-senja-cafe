import type { ComponentType, SVGProps } from 'react'

/** Any SVG icon component — lucide icons and our custom brand glyphs both fit. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

/** The two languages the site supports. Used as keys everywhere. */
export type Language = 'en' | 'id'

/** A value that has an English and an Indonesian variant. */
export type Localized<T> = Record<Language, T>

/* ----------------------------- UI dictionary ----------------------------- */
/*
  `Translation` is the shape of ONE language's copy. The full dictionary in
  src/data/content.ts is `Record<Language, Translation>`, so TypeScript forces
  the `en` and `id` objects to stay perfectly in sync — add a key to one and
  the other won't compile until you add it too.
*/

export interface NavLink {
  /** Anchor target id (matches the section's `id`). */
  id: string
  /** Visible label (already localized). */
  label: string
}

export interface Feature {
  title: string
  description: string
}

export interface TestimonialItem {
  quote: string
  name: string
  initials: string
  /** Star rating 1–5. */
  rating: number
  /** Localised relative time string, e.g. "2 weeks ago" / "2 minggu lalu". */
  timeAgo: string
}

export interface Translation {
  nav: {
    links: NavLink[]
    reserve: string
  }
  hero: {
    eyebrow: string
    title: string
    highlight: string
    subtitle: string
    ctaMenu: string
    ctaReserve: string
    socialProof: {
      /** e.g. "75+ happy guests" */
      guests: string
      /** e.g. "Excellent" — sits next to the star rating. */
      ratingLabel: string
    }
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    features: Feature[]
  }
  menu: {
    eyebrow: string
    title: string
    subtitle: string
    categoryLabels: Record<MenuCategory, string>
    /** Decorative pill-button label on each menu card (no real cart). */
    order: string
    note: string
  }
  yellowBanner: {
    statement: string
    /** Circular stamp-badge labels, e.g. "Roasted fresh". */
    badges: string[]
  }
  gallery: {
    eyebrow: string
    title: string
    subtitle: string
  }
  reserveCTA: {
    eyebrow: string
    title: string
    subtitle: string
    cta: string
  }
  testimonials: {
    eyebrow: string
    title: string
    /** Label displayed next to the map-pin, e.g. "Google Maps". */
    source: string
    /** Full sentence, e.g. "Based on 847 reviews". */
    basedOn: string
    items: TestimonialItem[]
  }
  visit: {
    eyebrow: string
    title: string
    subtitle: string
    hoursTitle: string
    locationTitle: string
    directions: string
    closed: string
    days: Record<Weekday, string>
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    labels: {
      name: string
      email: string
      date: string
      partySize: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      message: string
    }
    submit: string
    success: string
    errors: {
      name: string
      email: string
      date: string
    }
  }
  footer: {
    tagline: string
    quickLinksTitle: string
    followTitle: string
    rights: string
  }
  toggles: {
    theme: string
    language: string
    openMenu: string
    skipToContent: string
  }
}

/* ------------------------------- Cafe data ------------------------------- */

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export interface OpeningHour {
  day: Weekday
  /** e.g. "07:00 – 22:00", or `null` when closed. */
  hours: string | null
}

export interface SocialLink {
  label: string
  href: string
  icon: IconComponent
}

export interface CafeInfo {
  name: string
  /** Short word used in the logo lockup, e.g. "Senja". */
  shortName: string
  addressLines: string[]
  phone: string
  email: string
  openingHours: OpeningHour[]
  /** Google Maps "place" URL for the "Get directions" button. */
  mapsUrl: string
  socials: SocialLink[]
}

/* ------------------------------- Menu data ------------------------------- */

export type MenuCategory = 'coffee' | 'noncoffee' | 'pastries'

export interface MenuItem {
  name: string
  description: Localized<string>
  /** Price string already formatted, e.g. "Rp 32K". */
  price: string
  category: MenuCategory
  /** Photo for the menu card. */
  image: string
  /** Optional tag like "Signature" / "New". */
  badge?: Localized<string>
}

/* ------------------------------ Gallery data ----------------------------- */

export interface GalleryImage {
  src: string
  alt: Localized<string>
  width: number
  height: number
}
