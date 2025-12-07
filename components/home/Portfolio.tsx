import { motion } from "framer-motion";
import { ExternalLink, Heart, Globe, Eye } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Wedding Invitation - Syafik & Bella",
      category: "invitation",
      type: "Undangan Pernikahan",
      gradient: "from-rose-400 via-pink-400 to-purple-400",
      previewImage: "/assets/images/portfolio/netflix-bella-syafik.png",
      url: "https://calaraya.vercel.app/bella-syafik?id=OkfVBm",
      icon: Heart,
    },
    {
      id: 2,
      title: "Company Profile - PT Maju Jaya",
      category: "website",
      type: "Company Profile",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
      previewImage: "/portfolio/wedding-andi-siti.png",
      url: "",
      icon: Globe,
    },
    {
      id: 3,
      title: "Wedding Invitation - Ihksan & Tasya",
      category: "invitation",
      type: "Undangan Pernikahan",
      gradient: "from-amber-400 via-orange-400 to-red-400",
      previewImage: "/assets/images/portfolio/maroon-ihksan-tasya.png",
      url: "https://calaraya.vercel.app/ihksan-tasya?id=n4cBkO",
      icon: Heart,
    },
    {
      id: 4,
      title: "E-Commerce - Fashion Store",
      category: "website",
      type: "Toko Online",
      gradient: "from-purple-400 via-violet-400 to-indigo-400",
      previewImage: "/portfolio/wedding-andi-siti.png",
      url: "",
      icon: Globe,
    },
    {
      id: 5,
      title: "Wedding Invitation - Budi & Ani",
      category: "invitation",
      type: "Undangan Pernikahan",
      gradient: "from-emerald-400 via-green-400 to-teal-400",
      previewImage: "/portfolio/wedding-andi-siti.png",
      url: "",
      icon: Heart,
    },
    {
      id: 6,
      title: "Landing Page - Startup Tech",
      category: "website",
      type: "Landing Page",
      gradient: "from-slate-400 via-gray-400 to-zinc-400",
      previewImage: "/portfolio/wedding-andi-siti.png",
      url: "",
      icon: Globe,
    },
  ];

  const filters = [
    { id: "all", label: "Semua Project" },
    { id: "invitation", label: "Undangan" },
    { id: "website", label: "Website" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

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
    <section className="py-24 bg-slate-50 dark:bg-slate-900" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full mb-4">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Karya Terbaik Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Portfolio Kami
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Beberapa undangan digital dan website yang telah kami buat.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layout
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-black/30 transition-all duration-500"
            >
              {/* Image Placeholder with Gradient */}
              {/* Image Placeholder with Gradient */}
              <div
                className={`relative h-64 bg-gradient-to-br ${item.gradient} overflow-hidden`}
              >
                {/* Preview Image */}
                <Image
                  src={item.previewImage}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  width={400}
                  height={256}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`}
                ></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/70 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Lihat Detail
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Klik untuk melihat detail project
                </p>
              </div>

              {/* Bottom Border Accent */}
              <div
                className={`h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
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
            Ingin melihat lebih banyak project kami?
          </p>
          <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-white/10">
            Lihat Semua Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
