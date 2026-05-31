# Senja Coffee House — Landing Page

A polished, bilingual (English / Bahasa Indonesia) landing page for a fictional
specialty cafe. Built as a portfolio piece: warm artisan visual design, clean
and well-organized code, and a Lighthouse-friendly setup (fast, accessible, SEO-ready).

![placeholder — add a screenshot at docs/screenshot.png](docs/screenshot.png)

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** with shadcn/ui-style design tokens (oklch colors)
- **lucide-react** icons
- **Vitest** + **Testing Library** for tests
- **ESLint** + **Prettier**

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build locally
npm run lint       # lint
npm run test       # run unit tests
```

## How it's organized

```
src/
  components/
    layout/      # Navbar, Footer, Section, theme & language toggles
    sections/    # Hero, About, Menu, Gallery, HoursLocation, Contact
    common/      # SectionHeading, SocialLinks, MenuItemCard
    ui/          # shadcn/ui primitives (button, card, input, …)
  context/       # LanguageProvider + useT() hook
  data/          # ← EDIT HERE: all content lives in data files
  hooks/         # useTheme, useLanguage, useActiveSection
  types/         # shared TypeScript types
  index.css      # ← EDIT HERE: color tokens / theme
```

## Customizing (the two places you'll touch most)

1. **Content & copy** — everything is in `src/data/`:
   - `content.ts` — all UI text in both languages (`en` / `id`). TypeScript keeps
     the two in sync, so you can't forget a translation.
   - `cafe.ts` — name, address, phone, email, opening hours, socials, map link.
   - `menu.ts` — menu items (name, price, localized description, category).
   - `gallery.ts` — gallery images (swap the placeholders in `public/images/`).

2. **Colors & fonts** — `src/index.css`. Edit the oklch tokens in `:root` (light)
   and `.dark` (dark) to re-theme the whole site. Fonts are loaded in `index.html`
   (Fraunces for headings, Inter for body).

### Swapping the placeholder images

The hero/gallery use lightweight SVG placeholders in `public/images/`. Replace
them with real photos — prefer **`.webp`** at the dimensions declared in
`gallery.ts` (keep the `width`/`height` accurate to avoid layout shift).

### Wiring up the reservation form

`src/components/sections/Contact.tsx` validates on the client and shows a success
message — it does **not** send anywhere yet. Look for the marked comment in
`handleSubmit` to POST to your backend / email service (Formspree, Resend, a
Vercel serverless function, etc.).

## Deploying

Configured for **Vercel** (`vercel.json` rewrites everything to `index.html`).
Push the repo, import it on Vercel, and it builds with `npm run build`. Any static
host works too — just serve the `dist/` folder. Before launch, update the domain
in `index.html` (canonical + Open Graph URLs) and `public/robots.txt`.
