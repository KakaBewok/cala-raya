import { Check, Eye, Heart, Instagram, Star } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama pembuatan undangan digital?",
    a: "Pembuatan undangan digital memakan waktu 1-2 hari kerja setelah semua data diterima lengkap.",
  },
  {
    q: "Apakah bisa revisi?",
    a: "Tentu bisa! Revisi disesuaikan dengan paket yang Anda pilih. Paket Basic 2x revisi, Premium 5x revisi, Ultimate unlimited.",
  },
  {
    q: "Website pakai teknologi apa?",
    a: "Kami menggunakan teknologi modern seperti Next.js, React, dan Tailwind CSS untuk website yang cepat dan responsive.",
  },
  {
    q: "Bagaimana cara pembayaran?",
    a: "Pembayaran via transfer bank, e-wallet, atau QRIS. Sistem DP 50% di awal, pelunasan 50% setelah project selesai.",
  },
];

const socialMedia = [
  { icon: Instagram, href: "#" },
  // { icon: Whatsapp, href: "#" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tema", href: "#themes" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
  { name: "Review", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

const portfolios = [
  {
    title: "Qatia Rent",
    description:
      "Website penyewaan pakaian dengan halaman admin untuk mengelola pakaian & transaksi",
    product: "Website & Sistem",
    type: "Rental Website",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765989761/personal/web-porto/qatia_tiulwx.png",
    url: "https://qatiarent.com/",
  },
  {
    title: "Dinna & Hudha's Wedding",
    description: "Undangan Digital bertema Stylish Bold yang modern dan elegan",
    product: "Undangan Digital",
    type: "Stylish Bold",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994579/personal/web-porto/stylishbold_armbt3.png",
    url: "https://calaraya.vercel.app/dinna-hudha?id=6yTQy",
  },
  {
    title: "Reigiya & Amar's Wedding",
    description: "Undangan Digital bertema Maroon yang elegan dan berkelas",
    product: "Undangan Digital",
    type: "Maroon",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994308/personal/web-porto/maroon_aohj7a.png",
    url: "https://calaraya.vercel.app/reigiya-amar?id=1XsqW",
  },
  {
    title: "Rahma & Jalal's Wedding",
    description: "Undangan Digital bertema Magazine yang modern dan unik",
    product: "Undangan Digital",
    type: "Magazine",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765993975/personal/web-porto/magazine_yt4whr.png",
    url: "https://calaraya.vercel.app/rahma-jalal?id=Gku6G",
  },
  {
    title: "Ilham & Rosi's Wedding",
    description: "Undangan Digital bertema Floral yang cantik dan romantis",
    product: "Undangan Digital",
    type: "Floral",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992923/personal/web-porto/floral_lund0v.png",
    url: "https://calaraya.vercel.app/ilham-rosi?id=O9IPp",
  },
  {
    title: "Bella & Syafik's Wedding",
    description: "Undangan Digital bertema Netflix yang unik",
    product: "Undangan Digital",
    type: "Netflix",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992495/personal/web-porto/netflix_jmoiic.png",
    url: "https://calaraya.vercel.app/bella-syafik?id=OkfVBm",
  },
  {
    title: "Agung & Dessy's Wedding",
    description: "Undangan Digital bertema Netflix yang unik",
    product: "Undangan Digital",
    type: "Netflix",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766307590/personal/web-porto/netflix_agung_oz1ov9.png",
    url: "https://calaraya.vercel.app/agung-dessy?id=m6u1M",
  },
  {
    title: "Andres & Agnalya's Wedding",
    description: "Undangan Digital bertema Netflix yang unik",
    product: "Undangan Digital",
    type: "Netflix",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766310590/personal/web-porto/netflix_andres_agnal_ppk1iy.png",
    url: "https://calaraya.vercel.app/andres-agnalya?id=mrfBW",
  },
  {
    title: "Ferdy & Irma's Wedding",
    description: "Undangan Digital bertema Magazine yang unik",
    product: "Undangan Digital",
    type: "Magazine",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766311786/personal/web-porto/ferdyirma_t0uis9.png",
    url: "https://calaraya.vercel.app/ferdy-irma?id=BMCXM",
  },
  {
    title: "Naomi & Rayhan's Wedding",
    description: "Undangan Digital bertema Magazine yang unik",
    product: "Undangan Digital",
    type: "Magazine",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766311068/personal/web-porto/magazine_naomi_xmtaes.png",
    url: "https://calaraya.vercel.app/naomi-rayhan?id=k5HWZ",
  },
  {
    title: "Choirul & Amanda's Wedding",
    description: "Undangan Digital bertema Magazine yang unik",
    product: "Undangan Digital",
    type: "Magazine",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766312056/personal/web-porto/choirulamanda_qs6nu8.png",
    url: "https://calaraya.vercel.app/choirul-amanda?id=y6tle",
  },
  {
    title: "Yogi & Nova's Wedding",
    description: "Undangan Digital bertema Magazine yang unik",
    product: "Undangan Digital",
    type: "Magazine",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766312656/personal/web-porto/yoginova_i4s42t.png",
    url: "https://calaraya.vercel.app/yogi-nova?id=A5FBX",
  },
  {
    title: "Riko & Shelly's Wedding",
    description: "Undangan Digital bertema Magazine yang unik",
    product: "Undangan Digital",
    type: "Magazine",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766313116/personal/web-porto/riko-shelly_qy9mey.png",
    url: "https://calaraya.vercel.app/riko-shelly?id=lyhwL",
  },
  {
    title: "Nadiah & Haris's Wedding",
    description: "Undangan Digital bertema Monochrome yang simpel dan modern",
    product: "Undangan Digital",
    type: "Monochrome",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766313919/personal/web-porto/nadhar_rginzu.png",
    url: "https://calaraya.vercel.app/nadiah-haris?id=XyUaw",
  },
  {
    title: "Ikhsan & Tasya's Wedding",
    description: "Undangan Digital bertema Maroon yang elegan dan berkelas",
    product: "Undangan Digital",
    type: "Maroon",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766314384/personal/web-porto/ikhsan_tasya_vnqmcd.png",
    url: "https://calaraya.vercel.app/ihksan-tasya?id=n4cBkO",
  },
  {
    title: "Shamil & Sarah's Wedding",
    description: "Undangan Digital bertema Maroon yang elegan dan berkelas",
    product: "Undangan Digital",
    type: "Maroon Custom",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766314647/personal/web-porto/shamilsarah_a6vjfd.png",
    url: "https://calaraya.vercel.app/sarah-shamil?id=3otO5E",
  },
  {
    title: "Ridho & Sasa's Wedding",
    description: "Undangan Digital bertema Magazine yang unik",
    product: "Undangan Digital",
    type: "Magazine",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766314852/personal/web-porto/sasa_ridho_xqorpc.png",
    url: "https://calaraya.vercel.app/ridho-sasa?id=6xCqNG",
  },
];

const reviews = [
  {
    name: "Sarah Abdullah",
    rating: 5,
    comment:
      "Pelayanan sangat memuaskan! Undangan digital yang dibuat sangat cantik dan sesuai harapan. Responsif dan cepat dalam revisi.",
    image: "https://i.pravatar.cc/150?img=1",
    chatImage:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
  {
    name: "Budi Santoso",
    rating: 5,
    comment:
      "Website company profile yang dibuat sangat profesional. Tim sangat membantu dari awal hingga akhir project. Recommended!",
    image: "https://i.pravatar.cc/150?img=12",
    chatImage:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
  {
    name: "Dewi Lestari",
    rating: 5,
    comment:
      "Harga terjangkau dengan kualitas premium. Undangan pernikahan kami jadi sangat berkesan. Terima kasih!",
    image: "https://i.pravatar.cc/150?img=5",
    chatImage:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
  {
    name: "Ahmad Rifai",
    rating: 5,
    comment:
      "Proses cepat dan hasil memuaskan. Tim sangat kooperatif dan detail oriented. Akan order lagi untuk project berikutnya!",
    image: "https://i.pravatar.cc/150?img=8",
    chatImage:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
  {
    name: "Siti Nurhaliza",
    rating: 5,
    comment:
      "Undangan digital untuk acara aqiqah anak saya sangat indah. Tamu-tamu pada memuji designnya. Sukses terus!",
    image: "https://i.pravatar.cc/150?img=9",
    chatImage:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
];

const allThemes = [
  {
    name: "Rental Website",
    type: "Website",
    category: "Website Application",
    price: "Rp 2.000.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765989761/personal/web-porto/qatia_tiulwx.png",
    previewUrl: "https://qatiarent.com/",
    features: [
      "Customer Page",
      "Dashboard",
      "Admin Page",
      "Manajemen Produk",
      "Manajemen Transaksi",
    ],
  },
  {
    name: "Custom Website",
    type: "Website",
    category: "Custom Website",
    price: "Rp 1.000.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766328476/personal/web-porto/b6417ac5-6b4f-4b73-8c5f-6d0fd1e48249_a7lpa6.webp",
    previewUrl: "#",
    features: ["Custom Feature"],
  },

  {
    name: "Netflix",
    type: "Undangan Digital",
    category: "Wedding",
    price: "Rp 50.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992495/personal/web-porto/netflix_jmoiic.png",
    previewUrl: "https://calaraya.vercel.app/bella-syafik?id=OkfVBm",
    features: [
      "Auto Scroll",
      "RSVP",
      "Galeri",
      "Custom Music",
      "Story",
      "Gift Info",
      "Google Maps",
    ],
  },
  {
    name: "Floral",
    type: "Undangan Digital",
    category: "Wedding",
    price: "Rp 50.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992923/personal/web-porto/floral_lund0v.png",
    previewUrl: "https://calaraya.vercel.app/ilham-rosi?id=O9IPp",
    features: [
      "RSVP",
      "Galeri",
      "Custom Music",
      "Calendar",
      "Google Maps",
      "Gift Info",
    ],
  },
  {
    name: "Magazine",
    type: "Undangan Digital",
    category: "Wedding",
    price: "Rp 50.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765993975/personal/web-porto/magazine_yt4whr.png",
    previewUrl: "https://calaraya.vercel.app/rahma-jalal?id=Gku6G",
    features: [
      "RSVP",
      "Galeri",
      "Custom Music",
      "Calendar",
      "Google Maps",
      "Gift Info",
    ],
  },
  {
    name: "Maroon",
    type: "Undangan Digital",
    category: "Wedding",
    price: "Rp 50.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994308/personal/web-porto/maroon_aohj7a.png",
    previewUrl: "https://calaraya.vercel.app/reigiya-amar?id=1XsqW",
    features: [
      "RSVP",
      "Galeri",
      "Custom Music",
      "Calendar",
      "Google Maps",
      "Gift Info",
    ],
  },
  {
    name: "Stylish Bold",
    type: "Undangan Digital",
    category: "Wedding",
    price: "Rp 50.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994579/personal/web-porto/stylishbold_armbt3.png",
    previewUrl: "https://calaraya.vercel.app/dinna-hudha?id=6yTQy",
    features: [
      "RSVP",
      "Galeri",
      "Custom Music",
      "Calendar",
      "Google Maps",
      "Gift Info",
    ],
  },
  {
    name: "Monochrome",
    type: "Undangan Digital",
    category: "Wedding",
    price: "Rp 50.000",
    image:
      "https://res.cloudinary.com/dk16ng09n/image/upload/v1766313919/personal/web-porto/nadhar_rginzu.png",
    previewUrl: "https://calaraya.vercel.app/nadiah-haris?id=XyUaw",
    features: [
      "RSVP",
      "Galeri",
      "Custom Music",
      "Calendar",
      "Google Maps",
      "Gift Info",
    ],
  },
];

const features = [
  {
    icon: "⚡",
    title: "Proses Cepat",
    description:
      "Undangan digital jadi dalam 1-2 hari kerja. Website selesai dalam 1-2 minggu.",
    IconComponent: Star,
  },
  {
    icon: "💎",
    title: "Desain Premium",
    description:
      "Tema elegan dan modern yang dibuat oleh designer profesional.",
    IconComponent: Heart,
  },
  {
    icon: "🔄",
    title: "Revisi Unlimited",
    description: "Revisi sepuasnya hingga hasil sesuai keinginan Anda.",
    IconComponent: Check,
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    description: "Harga mulai dari 199rb untuk undangan digital.",
    IconComponent: Star,
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Tampilan sempurna di semua device (HP, tablet, desktop).",
    IconComponent: Eye,
  },
  {
    icon: "🎯",
    title: "Custom Request",
    description: "Kami bisa buatkan tema custom sesuai keinginan Anda.",
    IconComponent: Heart,
  },
  {
    icon: "🛠️",
    title: "After Sales Support",
    description:
      "Garansi maintenance 30 hari gratis. Support 24/7 via WhatsApp.",
    IconComponent: Check,
  },
  {
    icon: "⚙️",
    title: "Fitur Lengkap",
    description: "RSVP, Google Maps, Gallery, Music, Video, Countdown Timer.",
    IconComponent: Star,
  },
];

export {
  faqs,
  socialMedia,
  navLinks,
  portfolios,
  reviews,
  allThemes,
  features,
};

// const portfolioProjects = [
//   {
//     title: "Qatia Rent",
//     description:
//       "A web application for renting clothes and admin panel to manage the clothes & transactions.",
//     imageUrl:
//       "https://res.cloudinary.com/dk16ng09n/image/upload/v1765989761/personal/web-porto/qatia_tiulwx.png",
//     techStack: ["Laravel", "React", "MySQL", "Tailwind CSS"],
//     previewUrl: "https://qatiarent.com/",
//   },
//   {
//     title: "E-Invitation Netflix",
//     description: "A modern e-invitation with a Netflix-inspired theme",
//     imageUrl:
//       "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992495/personal/web-porto/netflix_jmoiic.png",
//     techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
//     previewUrl: "https://calaraya.vercel.app/bella-syafik?id=OkfVBm",
//   },
//   {
//     title: "E-Invitation Floral",
//     description: "A beautiful e-invitation with a floral-inspired theme",
//     imageUrl:
//       "https://res.cloudinary.com/dk16ng09n/image/upload/v1765992923/personal/web-porto/floral_lund0v.png",
//     techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
//     previewUrl: "https://calaraya.vercel.app/ilham-rosi?id=O9IPp",
//   },
//   {
//     title: "E-Invitation Magazine",
//     description: "A stylish e-invitation with a magazine-inspired theme",
//     imageUrl:
//       "https://res.cloudinary.com/dk16ng09n/image/upload/v1765993975/personal/web-porto/magazine_yt4whr.png",
//     techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
//     previewUrl: "https://calaraya.vercel.app/rahma-jalal?id=Gku6G",
//   },
//   {
//     title: "E-Invitation Maroon",
//     description: "An Elegant e-invitation with a maroon-inspired theme",
//     imageUrl:
//       "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994308/personal/web-porto/maroon_aohj7a.png",
//     techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
//     previewUrl: "https://calaraya.vercel.app/reigiya-amar?id=1XsqW",
//   },
//   {
//     title: "E-Invitation Stylish Bold",
//     description: "A modern e-invitation with a stylish bold-inspired theme",
//     imageUrl:
//       "https://res.cloudinary.com/dk16ng09n/image/upload/v1765994579/personal/web-porto/stylishbold_armbt3.png",
//     techStack: ["Next.js", "Typescript", "Supabase", "Tailwind CSS"],
//     previewUrl: "https://calaraya.vercel.app/dinna-hudha?id=6yTQy",
//   },
// ];
