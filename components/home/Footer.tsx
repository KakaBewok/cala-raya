import { contact, socialMedia } from "@/data/data";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-10 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-content-between mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                alt="Logo"
                src="https://res.cloudinary.com/dk16ng09n/image/upload/v1766687461/personal/web-porto/ChatGPT_Image_Dec_26_2025_01_29_22_AM_os33rl.webp"
                width={53}
                height={53}
              />
              <span className="text-xl font-bold">Calaraya</span>
            </div>
            <p className="text-slate-400 text-sm mb-4 max-w-sm">
              Undangan digital dan website profesional dengan pendekatan desain
              yang modern dan fungsional
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{contact.address}</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>+{contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialMedia.map((social, i: number) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>© 2025 Calaraya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
