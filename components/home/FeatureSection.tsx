import { motion } from "framer-motion";
import {
  Heart,
  Image,
  UserCheck,
  Clock,
  MapPin,
  Music,
  MessageCircle,
  Globe,
  Briefcase,
  ShoppingCart,
  Layout,
  BarChart,
  Calendar,
} from "lucide-react";

function FeaturesSection() {
  const invitationFeatures = [
    {
      icon: Heart,
      title: "Tema premium & elegan",
      desc: "Pilihan desain yang stunning",
    },
    {
      icon: Image,
      title: "Galeri foto & video",
      desc: "Tampilkan momen spesial",
    },
    {
      icon: UserCheck,
      title: "Custom nama tamu",
      desc: "Personal untuk setiap tamu",
    },
    {
      icon: Clock,
      title: "RSVP real-time",
      desc: "Konfirmasi kehadiran langsung",
    },
    {
      icon: MapPin,
      title: "Google Maps lokasi",
      desc: "Navigasi mudah ke lokasi",
    },
    { icon: Music, title: "Musik custom", desc: "Background music pilihan" },
    {
      icon: MessageCircle,
      title: "Kirim otomatis via WhatsApp",
      desc: "Distribusi cepat & mudah",
    },
  ];

  const websiteFeatures = [
    { icon: Layout, title: "Landing Page", desc: "Halaman utama yang menarik" },
    {
      icon: Briefcase,
      title: "Company Profile",
      desc: "Profil perusahaan profesional",
    },
    { icon: ShoppingCart, title: "E-Commerce", desc: "Toko online lengkap" },
    {
      icon: Globe,
      title: "Custom Web App",
      desc: "Aplikasi web sesuai kebutuhan",
    },
    {
      icon: BarChart,
      title: "Dashboard Admin",
      desc: "Panel kontrol yang powerful",
    },
    {
      icon: Calendar,
      title: "Sistem Booking",
      desc: "Manajemen reservasi otomatis",
    },
  ];

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
    <div className="bg-white dark:bg-slate-900">
      {/* Undangan Digital Section */}
      <section className="py-24" id="undangan">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 rounded-full mb-4">
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">
                  Untuk Momen Spesial Anda
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Undangan Digital Modern
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Undangan digital siap pakai, elegan, dan mudah dibagikan kepada
                tamu.
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {invitationFeatures.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-rose-300 dark:hover:border-rose-500 hover:shadow-lg hover:shadow-rose-100 dark:hover:shadow-rose-500/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-rose-400/5 group-hover:via-pink-400/5 group-hover:to-purple-400/5 dark:group-hover:from-rose-400/10 dark:group-hover:via-pink-400/10 dark:group-hover:to-purple-400/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-white/10">
              Buat Undangan Sekarang
            </button>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
      </div>

      {/* Website Section */}
      <section className="py-24" id="website">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full mb-4">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Solusi Digital Bisnis
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Website Profesional Untuk Bisnis Anda
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Dibangun menggunakan teknologi modern: Laravel, React, Next.js.
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {websiteFeatures.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-100 dark:hover:shadow-emerald-500/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/0 via-teal-400/0 to-blue-400/0 group-hover:from-emerald-400/5 group-hover:via-teal-400/5 group-hover:to-blue-400/5 dark:group-hover:from-emerald-400/10 dark:group-hover:via-teal-400/10 dark:group-hover:to-blue-400/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-white/10">
              Konsultasi Gratis
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;
