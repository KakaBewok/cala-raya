import { contact, socialMedia } from "@/data/data";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                alt="Calaraya Logo"
                src="https://res.cloudinary.com/dk16ng09n/image/upload/v1766687461/personal/web-porto/ChatGPT_Image_Dec_26_2025_01_29_22_AM_os33rl.webp"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-[16px] font-semibold tracking-wide">
                Calaraya
              </span>
            </div>
            <p className="text-[13px] text-stone-400 leading-relaxed max-w-xs mb-5">
              Undangan digital dan website profesional dengan pendekatan desain
              modern, elegan, dan fungsional.
            </p>
            <div className="flex items-center gap-2 text-stone-400 text-[13px]">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{contact.address}</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-semibold tracking-wide mb-5 text-stone-300">
              Kontak
            </h3>
            <div className="space-y-3 text-[13px] text-stone-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>+{contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[13px] font-semibold tracking-wide mb-5 text-stone-300">
              Follow Us
            </h3>
            <div className="flex gap-2.5">
              {socialMedia.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-stone-800 hover:bg-stone-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-stone-800 text-center">
          <p className="text-[12px] text-stone-500 tracking-wide">
            © {new Date().getFullYear()} Calaraya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
