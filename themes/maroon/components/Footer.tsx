import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const message = `Halo admin Calaraya Project, aku tertarik untuk bikin undangan digital. Boleh dibantu prosesnya? Terima kasih 🙏`;
  return (
    <footer className="w-full bg-rose-900 text-white p-5 flex justify-between items-start z-50">
      <div className="flex items-center gap-3">
        <Link
          href="https://instagram.com/calarayaproject"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl" />
        </Link>
        <Link
          href={`https://wa.me/6282111531677?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-xl" />
        </Link>
      </div>

      <div className="flex items-start gap-5">
        <span className="text-neutral-300 font-medium text-sm">crafted by</span>
        <Link
          href="https://instagram.com/calarayaproject"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-serif text-md leading-normal"
        >
          <span>Calaraya</span>
          <br />
          <span>Project</span>
        </Link>
      </div>
    </footer>
  );
}
