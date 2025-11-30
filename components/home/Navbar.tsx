"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { roboto } from "@/fonts/fonts";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#undangan", label: "Undangan" },
    { href: "#website", label: "Website" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/70 shadow-xs dark:bg-slate-900/80`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1
            className={`${roboto.className} font-bold text-xl md:text-2xl lg:text-3xl text-green-800 dark:text-slate-50 tracking-wide`}
          >
            Calaraya❤️
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-8 text-sm font-medium items-center">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-slate-50 hover:text-green-800 dark:hover:text-slate-300 transition duration-400 font-semibold"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Desktop CTA */}
        <a
          href="#order"
          className="dark:bg-transparent dark:border-2 dark:border-green-400 dark:text-green-400 hidden md:block bg-green-800 hover:bg-green-900 text-white py-2 px-4 rounded-xs transition duration-400 shadow-sm font-semibold"
        >
          Login
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden dark:bg-slate-800/70 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="dark:hover:text-slate-300 dark:text-slate-50 text-gray-800 hover:text-green-800 transition duration-400"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />

          <a
            href="#order"
            onClick={closeMenu}
            className="dark:bg-transparent dark:border-2 dark:border-green-400 dark:text-green-400 bg-green-800 hover:bg-green-900 text-white text-center py-2 rounded-xs duration-400 transition shadow-sm"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
