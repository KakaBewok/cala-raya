import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faq = [
    {
      q: "Berapa lama pembuatan undangan digital?",
      a: "Proses pembuatan undangan digital memakan waktu 1-2 hari kerja setelah semua data dan materi (foto, teks, dll) diterima lengkap. Kami akan memberikan preview untuk Anda review sebelum publikasi final.",
    },
    {
      q: "Apakah bisa revisi?",
      a: "Tentu bisa! Revisi disesuaikan dengan paket yang Anda pilih. Paket Basic mendapat 2x revisi, paket Premium mendapat 5x revisi, dan paket Ultimate mendapat revisi unlimited hingga Anda puas dengan hasilnya.",
    },
    {
      q: "Website pakai teknologi apa?",
      a: "Kami menggunakan teknologi modern dan terkini seperti Laravel untuk backend, React dan Next.js untuk frontend. Semua website yang kami buat responsive, cepat, dan SEO-friendly.",
    },
    {
      q: "Apakah ada garansi setelah project selesai?",
      a: "Ya, kami memberikan garansi maintenance gratis selama 30 hari setelah project selesai. Setelah masa garansi, Anda bisa berlangganan paket maintenance bulanan dengan harga khusus.",
    },
    {
      q: "Bagaimana cara pembayaran?",
      a: "Pembayaran dapat dilakukan via transfer bank (BCA, Mandiri, BRI), e-wallet (OVO, GoPay, Dana), atau QRIS. Sistem pembayaran: DP 50% di awal, pelunasan 50% setelah project selesai dan disetujui.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 rounded-full mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Pertanyaan Umum</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              FAQ
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faq.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div
                className={`bg-white dark:bg-slate-800 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "border-emerald-500 dark:border-emerald-400 shadow-lg shadow-emerald-100 dark:shadow-emerald-500/10"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {f.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i
                        ? "bg-emerald-500 text-white rotate-180"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === i ? "auto" : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Masih ada pertanyaan?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Tim kami siap membantu Anda dengan senang hati
          </p>
          <button className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg">
            Hubungi Kami
          </button>
        </motion.div>
      </div>
    </section>
  );
}
