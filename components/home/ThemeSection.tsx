import { motion } from "framer-motion";
import { Eye, Check, Heart, Sparkles, Flower2, Camera } from "lucide-react";
import { useState } from "react";

export default function ThemesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const themes = [
    {
      id: 1,
      name: "Elegant Rose",
      category: "wedding",
      description: "Tema pernikahan klasik dengan sentuhan bunga mawar",
      gradient: "from-rose-400 via-pink-400 to-rose-500",
      previewImage:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      features: ["Music Background", "RSVP Form", "Gallery 20 Foto"],
      price: "Rp 299.000",
      popular: true,
    },
    {
      id: 2,
      name: "Modern Minimalist",
      category: "wedding",
      description: "Desain minimalis modern untuk pasangan urban",
      gradient: "from-slate-400 via-gray-400 to-slate-500",
      previewImage:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      features: ["Video Background", "Live Instagram", "Countdown Timer"],
      price: "Rp 349.000",
      popular: false,
    },
    {
      id: 3,
      name: "Rustic Garden",
      category: "wedding",
      description: "Tema natural dengan nuansa taman dan bunga",
      gradient: "from-emerald-400 via-green-400 to-teal-500",
      previewImage:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      features: ["Floral Animation", "Google Maps", "Guest Book"],
      price: "Rp 299.000",
      popular: false,
    },
    {
      id: 4,
      name: "Luxury Gold",
      category: "wedding",
      description: "Tema mewah dengan aksen gold untuk acara eksklusif",
      gradient: "from-amber-400 via-yellow-400 to-orange-500",
      previewImage:
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
      features: ["Parallax Effect", "QR Code", "Gift Registry"],
      price: "Rp 449.000",
      popular: true,
    },
    {
      id: 5,
      name: "Sweet Birthday",
      category: "birthday",
      description: "Tema ulang tahun ceria dan penuh warna",
      gradient: "from-purple-400 via-pink-400 to-red-400",
      previewImage:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      features: ["Confetti Animation", "Wish List", "Photo Collage"],
      price: "Rp 199.000",
      popular: false,
    },
    {
      id: 6,
      name: "Kids Party",
      category: "birthday",
      description: "Tema ulang tahun anak dengan karakter lucu",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
      previewImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      features: ["Interactive Games", "Cartoon Theme", "Fun Animation"],
      price: "Rp 249.000",
      popular: false,
    },
    {
      id: 7,
      name: "Corporate Event",
      category: "other",
      description: "Tema profesional untuk acara kantor dan seminar",
      gradient: "from-indigo-400 via-blue-400 to-cyan-500",
      previewImage:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      features: ["Agenda Schedule", "Speaker Profile", "Registration Form"],
      price: "Rp 399.000",
      popular: false,
    },
    {
      id: 8,
      name: "Aqiqah & Walimah",
      category: "other",
      description: "Tema islami untuk acara aqiqah dan walimahan",
      gradient: "from-teal-400 via-emerald-400 to-green-500",
      previewImage:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      features: ["Islamic Ornament", "Doa Audio", "Donation Info"],
      price: "Rp 279.000",
      popular: false,
    },
  ];

  const categories = [
    { id: "all", label: "Semua Tema", icon: Sparkles },
    { id: "wedding", label: "Pernikahan", icon: Heart },
    { id: "birthday", label: "Ulang Tahun", icon: Camera },
    { id: "other", label: "Lainnya", icon: Flower2 },
  ];

  const filteredThemes =
    activeCategory === "all"
      ? themes
      : themes.filter((theme) => theme.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
      id="themes"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Pilih Tema Favorit Anda
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Tema Undangan Digital
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Koleksi tema undangan digital yang elegan dan modern, siap pakai
              untuk berbagai acara spesial Anda
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:scale-105"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Themes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredThemes.map((theme) => (
            <motion.div
              key={theme.id}
              variants={itemVariants}
              layout
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-black/30 transition-all duration-500 flex flex-col"
            >
              {/* Popular Badge */}
              {theme.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                  POPULER
                </div>
              )}

              {/* Image Preview */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={theme.previewImage}
                  alt={theme.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>

                {/* Hover Overlay with Preview Button */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-500 flex items-center justify-center">
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="opacity-0 group-hover:opacity-100 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-100 transition-all shadow-xl transform group-hover:scale-100 scale-95"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {theme.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                  {theme.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {theme.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                    >
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Mulai dari
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {theme.price}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Gunakan
                  </button>
                  <button className="px-4 py-3 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-semibold hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Tidak menemukan tema yang sesuai? Kami bisa membuat tema custom
            untuk Anda
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/30 hover:scale-105">
            Request Tema Custom
          </button>
        </motion.div>
      </div>
    </section>
  );
}
