// import { Eye, Heart } from "lucide-react";

// function Themes() {
//   const themes = [
//     {
//       name: "Elegant Rose",
//       category: "Wedding",
//       price: "Rp 299.000",
//       image:
//         "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
//       features: ["Music", "RSVP", "Gallery"],
//     },
//     {
//       name: "Modern Minimal",
//       category: "Wedding",
//       price: "Rp 349.000",
//       image:
//         "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80",
//       features: ["Video BG", "Instagram", "Timer"],
//     },
//     {
//       name: "Rustic Garden",
//       category: "Wedding",
//       price: "Rp 299.000",
//       image:
//         "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80",
//       features: ["Animation", "Maps", "Guestbook"],
//     },
//     {
//       name: "Sweet Birthday",
//       category: "Birthday",
//       price: "Rp 199.000",
//       image:
//         "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80",
//       features: ["Confetti", "Wishlist", "Collage"],
//     },
//     {
//       name: "Luxury Gold",
//       category: "Wedding",
//       price: "Rp 449.000",
//       image:
//         "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500&q=80",
//       features: ["Parallax", "QR Code", "Gift"],
//     },
//     {
//       name: "Kids Party",
//       category: "Birthday",
//       price: "Rp 249.000",
//       image:
//         "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
//       features: ["Games", "Cartoon", "Fun"],
//     },
//   ];

//   return (
//     <section id="themes" className="py-24 bg-white dark:bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
//             Pilihan Tema Undangan
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-400">
//             Koleksi tema elegan untuk berbagai acara spesial
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
//           {themes.map((theme, i) => (
//             <div
//               key={i}
//               className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
//             >
//               <div className="relative h-40 overflow-hidden">
//                 <img
//                   src={theme.image}
//                   alt={theme.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all flex items-center justify-center">
//                   <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-white text-slate-900 rounded-full font-semibold flex items-center gap-2 transition-all text-sm">
//                     <Eye className="w-3 h-3" />
//                     Preview
//                   </button>
//                 </div>
//               </div>
//               <div className="p-3">
//                 <div className="mb-2">
//                   <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
//                     {theme.name}
//                   </h3>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">
//                     {theme.category}
//                   </p>
//                 </div>
//                 <div className="text-right mb-2">
//                   <div className="text-[10px] text-slate-500 dark:text-slate-400">
//                     Mulai dari
//                   </div>
//                   <div className="text-sm font-bold text-slate-900 dark:text-white">
//                     {theme.price}
//                   </div>
//                 </div>
//                 <div className="flex gap-1 mb-3">
//                   {theme.features.map((f, idx) => (
//                     <span
//                       key={idx}
//                       className="text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
//                     >
//                       {f}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-1.5">
//                   <button className="flex-1 px-2 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-1 text-xs">
//                     <Heart className="w-3 h-3" />
//                     Gunakan
//                   </button>
//                   <button className="px-2 py-2 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-lg font-semibold hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
//                     <Eye className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Themes;

"use client";

import React, { useState, useMemo } from "react";
import { Eye, Heart, ShoppingCart, Layout, Grid } from "lucide-react"; // Import icon baru

function Themes() {
  // Data Tema yang Diperbarui (Termasuk Kategori Website Baru)
  const allThemes = [
    // --- Kategori Undangan ---
    {
      name: "Elegant Rose",
      type: "Undangan Digital", // Kategori Utama: Undangan
      category: "Pernikahan",
      price: "Rp 299.000",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
      features: ["Musik", "RSVP", "Galeri"],
    },
    {
      name: "Modern Minimal",
      type: "Undangan Digital",
      category: "Pernikahan",
      price: "Rp 349.000",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80",
      features: ["Video BG", "Instagram", "Timer"],
    },
    {
      name: "Rustic Garden",
      type: "Undangan Digital",
      category: "Pernikahan",
      price: "Rp 299.000",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80",
      features: ["Animasi", "Maps", "Guestbook"],
    },
    {
      name: "Sweet Birthday",
      type: "Undangan Digital",
      category: "Ulang Tahun",
      price: "Rp 199.000",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80",
      features: ["Confetti", "Wishlist", "Kolase"],
    },
    {
      name: "Luxury Gold",
      type: "Undangan Digital",
      category: "Pernikahan",
      price: "Rp 449.000",
      image:
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500&q=80",
      features: ["Parallax", "QR Code", "Kado"],
    },
    // --- Kategori Website Lainnya ---
    {
      name: "Corporate Pro",
      type: "Website Lain", // Kategori Utama: Website Lain
      category: "Landing Page",
      price: "Rp 599.000",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      features: ["SEO Ready", "Contact Form", "Portofolio"],
    },
    {
      name: "E-Commerce Basic",
      type: "Website Lain",
      category: "Toko Online",
      price: "Rp 899.000",
      image:
        "https://images.unsplash.com/photo-1526178611142-d6a7493a54b4?w=500&q=80",
      features: ["Keranjang", "Pembayaran", "Inventori"],
    },
    {
      name: "CRM Lite",
      type: "Website Lain",
      category: "Sistem Lainnya",
      price: "Rp 1.500.000",
      image:
        "https://images.unsplash.com/photo-1556761175-59424e8e578c?w=500&q=80",
      features: ["User Dashboard", "Data Report", "Auth"],
    },
  ];

  const tabs = [
    { id: "Undangan Digital", label: "Undangan Digital", icon: Heart },
    { id: "Website Lain", label: "Website Lain", icon: Layout },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Filter tema berdasarkan tab yang aktif
  const filteredThemes = useMemo(() => {
    return allThemes.filter((theme) => theme.type === activeTab);
  }, [activeTab]);

  const getCategoryIcon = (category: unknown) => {
    switch (category) {
      case "Toko Online":
        return <ShoppingCart className="w-3 h-3 mr-1" />;
      case "Landing Page":
        return <Layout className="w-3 h-3 mr-1" />;
      case "Sistem Lainnya":
        return <Grid className="w-3 h-3 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <section id="themes" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Pilihan Desain & Tema
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Koleksi tema elegan untuk berbagai kebutuhan digital spesial Anda.
          </p>
        </div>

        {/* --- Komponen Tabs --- */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-slate-200 dark:border-slate-700 rounded-xl p-1 bg-slate-50 dark:bg-slate-800 shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const IconComponent = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        {/* --- End Komponen Tabs --- */}

        {/* Tampilan Tema */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredThemes.map((theme, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Preview Button */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-white text-slate-900 rounded-full font-semibold flex items-center gap-2 transition-all text-sm">
                    <Eye className="w-3 h-3" />
                    Preview
                  </button>
                </div>
              </div>
              <div className="p-3">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                    {getCategoryIcon(theme.category)}
                    {theme.category}
                  </p>
                </div>
                <div className="text-right mb-2">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Mulai dari
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {theme.price}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {theme.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded whitespace-nowrap"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex gap-1.5">
                  <button className="flex-1 px-2 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-1 text-xs">
                    <Heart className="w-3 h-3" />
                    Pesan
                  </button>
                  <button className="px-2 py-2 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-lg font-semibold hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Pesan jika tidak ada tema di tab yang dipilih */}
          {filteredThemes.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-500 dark:text-slate-400">
                Belum ada tema untuk kategori &quot;{activeTab}&quot;. Segera
                hadir!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Themes;
