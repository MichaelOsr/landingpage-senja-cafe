import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '@/components/icons/brand'

import type { CafeInfo } from '@/types'

/*
  ┌──────────────────────────────────────────────────────────────────┐
  │  EDIT ME — the cafe's real-world details (name, address, hours).   │
  │  All placeholder/fictional. Swap for a real client's info.         │
  └──────────────────────────────────────────────────────────────────┘
*/
export const cafe: CafeInfo = {
  name: 'Senja Coffee House',
  shortName: 'Senja',
  addressLines: ['Jl. Cemara Indah No. 24', 'Blitar, Jawa Timur 66131', 'Indonesia'],
  phone: '+62 812 3456 7890',
  email: 'hello@senjacoffee.id',
  openingHours: [
    { day: 'mon', hours: '07:00 – 22:00' },
    { day: 'tue', hours: '07:00 – 22:00' },
    { day: 'wed', hours: '07:00 – 22:00' },
    { day: 'thu', hours: '07:00 – 22:00' },
    { day: 'fri', hours: '07:00 – 23:00' },
    { day: 'sat', hours: '08:00 – 23:00' },
    { day: 'sun', hours: '08:00 – 21:00' },
  ],
  // Replace with the real Google Maps place link.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Blitar+coffee',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
    { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
    { label: 'WhatsApp', href: 'https://wa.me/6281234567890', icon: WhatsAppIcon },
  ],
}
