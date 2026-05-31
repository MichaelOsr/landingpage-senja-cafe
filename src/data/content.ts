import type { Language, Translation } from '@/types'

/*
  ┌──────────────────────────────────────────────────────────────────┐
  │  ALL SITE COPY LIVES HERE — edit text in one place.               │
  │  `en` and `id` must have identical shapes (TypeScript enforces it).│
  │  Components read the active language via the `useT()` hook.        │
  └──────────────────────────────────────────────────────────────────┘
*/
export const content: Record<Language, Translation> = {
  en: {
    nav: {
      links: [
        { id: 'about', label: 'About' },
        { id: 'menu', label: 'Menu' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'visit', label: 'Visit' },
        { id: 'contact', label: 'Contact' },
      ],
      reserve: 'Reserve a table',
    },
    hero: {
      eyebrow: 'Specialty coffee · roasted in-house',
      title: 'Slow mornings,',
      highlight: 'served warm.',
      subtitle:
        'Senja Coffee House is a cozy corner for single-origin coffee, fresh pastries, and unhurried conversation — from the first pour to golden hour.',
      ctaMenu: 'Explore the menu',
      ctaReserve: 'Reserve a table',
      socialProof: {
        guests: '75+ happy regulars',
        ratingLabel: 'Excellent',
      },
    },
    about: {
      eyebrow: 'Our story',
      title: 'Coffee made with care, in a room that feels like home',
      paragraphs: [
        'We started Senja with a simple idea: a place where good coffee and good company slow the day down. Every cup begins with beans we source directly from small farms and roast in-house each week.',
        'From the espresso bar to the pastry case, everything is made fresh, by hand, by people who love what they do. Pull up a chair, stay a while — this is your corner too.',
      ],
      features: [
        {
          title: 'Single-origin beans',
          description: 'Sourced directly from growers and traceable to the farm.',
        },
        {
          title: 'Roasted in-house',
          description: 'Small batches roasted weekly for peak freshness.',
        },
        {
          title: 'Baked fresh daily',
          description: 'Pastries and bread from our kitchen every morning.',
        },
        {
          title: 'A room to linger',
          description: 'Warm light, soft seats, and free Wi-Fi to stay a while.',
        },
      ],
    },
    menu: {
      eyebrow: 'The menu',
      title: 'A few of our favourites',
      subtitle:
        'Seasonal highlights from the bar and kitchen. Ask our baristas for today’s specials.',
      categoryLabels: {
        coffee: 'Coffee',
        noncoffee: 'Non-coffee',
        pastries: 'Pastries',
      },
      order: 'Order',
      note: 'Prices in Indonesian Rupiah. Dairy-free milk available on request.',
    },
    yellowBanner: {
      statement: 'Good coffee brings people together.',
      badges: ['Roasted fresh', 'Eco friendly'],
    },
    gallery: {
      eyebrow: 'The space',
      title: 'A look around Senja',
      subtitle: 'Warm light, honest materials, and a counter that smells like fresh espresso.',
    },
    reserveCTA: {
      eyebrow: 'See you soon',
      title: 'Make your evening warmer at Senja',
      subtitle: 'Save your favourite seat — reserve a table and let golden hour do the rest.',
      cta: 'Reserve a table',
    },
    testimonials: {
      eyebrow: 'Customer reviews',
      title: 'What our guests say',
      source: 'Google Maps',
      basedOn: 'Based on 847 reviews',
      items: [
        {
          quote:
            "The cortado here is the best I've had outside of specialty cafes abroad. Quiet enough to work in, warm enough that you never feel like you're in a co-working space. I come back at least three times a week.",
          name: 'Aisyah R.',
          initials: 'AR',
          rating: 5,
          timeAgo: '2 weeks ago',
        },
        {
          quote:
            "Finally a place that takes single-origin seriously and still makes the best kouign-amann in the city. The staff remember my order by the third visit — that kind of detail is rare.",
          name: 'Bima S.',
          initials: 'BS',
          rating: 5,
          timeAgo: '1 month ago',
        },
        {
          quote:
            "I've worked from every café in this neighbourhood. Senja wins on all counts: fast Wi-Fi, genuinely comfortable seats, and the afternoon light through the front window is simply beautiful.",
          name: 'Citra W.',
          initials: 'CW',
          rating: 5,
          timeAgo: '3 months ago',
        },
      ],
    },
    visit: {
      eyebrow: 'Visit us',
      title: 'Find your seat',
      subtitle: 'We’re open seven days a week. Walk in, or reserve ahead for larger groups.',
      hoursTitle: 'Opening hours',
      locationTitle: 'Where to find us',
      directions: 'Get directions',
      closed: 'Closed',
      days: {
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
        sun: 'Sunday',
      },
    },
    contact: {
      eyebrow: 'Reservations',
      title: 'Book a table',
      subtitle: 'Tell us when you’re coming and we’ll have a table waiting.',
      labels: {
        name: 'Your name',
        email: 'Email',
        date: 'Date & time',
        partySize: 'Party size',
        message: 'Anything else?',
      },
      placeholders: {
        name: 'Jane Appleseed',
        email: 'jane@example.com',
        message: 'A window seat would be lovely…',
      },
      submit: 'Request reservation',
      success: 'Thanks! We’ve received your request and will confirm by email shortly.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email address.',
        date: 'Please choose a date and time.',
      },
    },
    footer: {
      tagline: 'Specialty coffee, roasted in-house and served warm.',
      quickLinksTitle: 'Explore',
      followTitle: 'Follow along',
      rights: 'All rights reserved.',
    },
    toggles: {
      theme: 'Toggle light and dark theme',
      language: 'Switch language',
      openMenu: 'Open menu',
      skipToContent: 'Skip to content',
    },
  },

  id: {
    nav: {
      links: [
        { id: 'about', label: 'Tentang' },
        { id: 'menu', label: 'Menu' },
        { id: 'gallery', label: 'Galeri' },
        { id: 'visit', label: 'Kunjungi' },
        { id: 'contact', label: 'Kontak' },
      ],
      reserve: 'Pesan meja',
    },
    hero: {
      eyebrow: 'Kopi spesialti · disangrai sendiri',
      title: 'Pagi yang santai,',
      highlight: 'disajikan hangat.',
      subtitle:
        'Senja Coffee House adalah sudut nyaman untuk kopi single-origin, kudapan segar, dan obrolan tanpa terburu-buru — dari seduhan pertama hingga senja tiba.',
      ctaMenu: 'Lihat menu',
      ctaReserve: 'Pesan meja',
      socialProof: {
        guests: '75+ pelanggan setia',
        ratingLabel: 'Memuaskan',
      },
    },
    about: {
      eyebrow: 'Cerita kami',
      title: 'Kopi yang dibuat dengan hati, di ruang yang terasa seperti rumah',
      paragraphs: [
        'Senja lahir dari ide sederhana: tempat di mana kopi yang enak dan teman yang baik membuat hari berjalan lebih pelan. Setiap cangkir berawal dari biji yang kami ambil langsung dari petani kecil dan kami sangrai sendiri setiap minggu.',
        'Dari bar espresso hingga etalase kue, semuanya dibuat segar, dengan tangan, oleh orang-orang yang mencintai pekerjaannya. Tarik kursi, duduklah sebentar — ini juga sudutmu.',
      ],
      features: [
        {
          title: 'Biji single-origin',
          description: 'Diambil langsung dari petani dan bisa ditelusuri asalnya.',
        },
        {
          title: 'Disangrai sendiri',
          description: 'Disangrai dalam jumlah kecil tiap minggu demi kesegaran terbaik.',
        },
        {
          title: 'Dipanggang segar tiap hari',
          description: 'Kue dan roti dari dapur kami setiap pagi.',
        },
        {
          title: 'Ruang untuk berlama-lama',
          description: 'Cahaya hangat, kursi empuk, dan Wi-Fi gratis untuk berlama-lama.',
        },
      ],
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Beberapa favorit kami',
      subtitle:
        'Pilihan musiman dari bar dan dapur. Tanyakan menu spesial hari ini ke barista kami.',
      categoryLabels: {
        coffee: 'Kopi',
        noncoffee: 'Non-kopi',
        pastries: 'Kue & Roti',
      },
      order: 'Pesan',
      note: 'Harga dalam Rupiah. Tersedia susu non-dairy atas permintaan.',
    },
    yellowBanner: {
      statement: 'Kopi yang enak mendekatkan orang.',
      badges: ['Disangrai segar', 'Ramah lingkungan'],
    },
    gallery: {
      eyebrow: 'Suasana',
      title: 'Mengintip Senja',
      subtitle: 'Cahaya hangat, material jujur, dan meja bar yang beraroma espresso segar.',
    },
    reserveCTA: {
      eyebrow: 'Sampai jumpa',
      title: 'Buat soremu lebih hangat di Senja',
      subtitle: 'Amankan tempat favoritmu — pesan meja dan biarkan senja yang menyempurnakan.',
      cta: 'Pesan meja',
    },
    testimonials: {
      eyebrow: 'Ulasan pelanggan',
      title: 'Kata para tamu kami',
      source: 'Google Maps',
      basedOn: 'Berdasarkan 847 ulasan',
      items: [
        {
          quote:
            "Cortado di sini yang terbaik yang pernah saya coba di luar kafe spesialti luar negeri. Cukup tenang untuk bekerja, tapi tetap hangat — tidak terasa seperti co-working space. Saya balik minimal tiga kali seminggu.",
          name: 'Aisyah R.',
          initials: 'AR',
          rating: 5,
          timeAgo: '2 minggu lalu',
        },
        {
          quote:
            "Akhirnya ada tempat yang serius soal single-origin dan tetap punya kouign-amann terenak di kota. Stafnya ingat pesanan saya sejak kunjungan ketiga — detail seperti itu jarang ada.",
          name: 'Bima S.',
          initials: 'BS',
          rating: 5,
          timeAgo: '1 bulan lalu',
        },
        {
          quote:
            "Saya sudah bekerja dari semua kafe di area ini. Senja menang di semua aspek: Wi-Fi kencang, kursi yang benar-benar nyaman, dan cahaya sore dari jendela depan sungguh indah.",
          name: 'Citra W.',
          initials: 'CW',
          rating: 5,
          timeAgo: '3 bulan lalu',
        },
      ],
    },
    visit: {
      eyebrow: 'Kunjungi kami',
      title: 'Temukan tempatmu',
      subtitle: 'Kami buka tujuh hari seminggu. Langsung datang, atau pesan dulu untuk rombongan.',
      hoursTitle: 'Jam buka',
      locationTitle: 'Lokasi kami',
      directions: 'Lihat rute',
      closed: 'Tutup',
      days: {
        mon: 'Senin',
        tue: 'Selasa',
        wed: 'Rabu',
        thu: 'Kamis',
        fri: 'Jumat',
        sat: 'Sabtu',
        sun: 'Minggu',
      },
    },
    contact: {
      eyebrow: 'Reservasi',
      title: 'Pesan meja',
      subtitle: 'Beri tahu kapan kamu datang, kami siapkan mejanya.',
      labels: {
        name: 'Nama kamu',
        email: 'Email',
        date: 'Tanggal & jam',
        partySize: 'Jumlah orang',
        message: 'Ada permintaan lain?',
      },
      placeholders: {
        name: 'Budi Santoso',
        email: 'budi@contoh.com',
        message: 'Boleh minta tempat dekat jendela…',
      },
      submit: 'Kirim permintaan',
      success: 'Terima kasih! Permintaanmu sudah kami terima dan akan kami konfirmasi lewat email.',
      errors: {
        name: 'Mohon isi nama kamu.',
        email: 'Mohon masukkan alamat email yang valid.',
        date: 'Mohon pilih tanggal dan jam.',
      },
    },
    footer: {
      tagline: 'Kopi spesialti, disangrai sendiri dan disajikan hangat.',
      quickLinksTitle: 'Jelajahi',
      followTitle: 'Ikuti kami',
      rights: 'Semua hak dilindungi.',
    },
    toggles: {
      theme: 'Ganti tema terang dan gelap',
      language: 'Ganti bahasa',
      openMenu: 'Buka menu',
      skipToContent: 'Lewati ke konten',
    },
  },
}
