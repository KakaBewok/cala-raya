import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Undangan Digital", href: "#undangan" },
      { name: "Website Bisnis", href: "#website" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Harga", href: "#pricing" },
    ],
    company: [
      { name: "Tentang Kami", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Karir", href: "#" },
      { name: "Kontak", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Bantuan", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
    ],
  };

  const socialMedia = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@calaraya.com" },
    { icon: Phone, text: "+62 812-3456-7890" },
    { icon: MapPin, text: "Jakarta, Indonesia" },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold">Calaraya</div>
                <Heart className="w-6 h-6 text-rose-400 fill-current" />
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                Mewujudkan momen spesial Anda dengan undangan digital yang
                elegan dan website bisnis yang profesional.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold text-white mb-4">Produk</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-white mb-4">Perusahaan</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-semibold text-white mb-4">Dukungan</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm text-center md:text-left"
          >
            <p>© 2025 Calaraya. All rights reserved.</p>
            <p className="mt-1">
              Made with{" "}
              <Heart className="inline w-4 h-4 text-rose-400 fill-current" /> in
              Indonesia
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialMedia.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Newsletter Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-slate-800/50 rounded-2xl border border-slate-700"
        >
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Subscribe Newsletter</h3>
            <p className="text-slate-400 text-sm mb-6">
              Dapatkan update terbaru tentang promo dan tips seputar undangan
              digital & website
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
