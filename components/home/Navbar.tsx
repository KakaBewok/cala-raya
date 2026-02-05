"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { CONTACT_PERSON, navLinks } from "@/data/data";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Close mobile menu when clicking outside or on link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b-4 border-slate-900 dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <Image
              alt="Logo"
              src="https://res.cloudinary.com/dk16ng09n/image/upload/v1766687461/personal/web-porto/ChatGPT_Image_Dec_26_2025_01_29_22_AM_os33rl.webp"
              width={50}
              height={50}
            />
            <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
              Calaraya
            </span>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-900 dark:text-white font-bold whitespace-nowrap hover:underline decoration-4 underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right - Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 border-3 border-slate-900 dark:border-white bg-white dark:bg-slate-900 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a
              href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                "Halo, saya ingin bertanya tentang jasa pembuatan Undangan Digital/Website"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-3 border-slate-900 dark:border-white font-bold hover:bg-white hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white whitespace-nowrap"
            >
              Konsultasi
            </a>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 border-3 border-slate-900 dark:border-white bg-white dark:bg-slate-900"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-slate-900 dark:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-slate-900" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 border-3 border-slate-900 dark:border-white bg-white dark:bg-slate-900"
            >
              {/* Menu icon */}
              <Menu
                className={`
                  absolute inset-0 m-auto w-6 h-6
                  text-slate-900 dark:text-white
                  transition-all duration-200 ease-out
                  ${isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"}
                `}
              />

              {/* Close icon */}
              <X
                className={`
                  absolute inset-0 m-auto w-6 h-6
                  text-slate-900 dark:text-white
                  transition-all duration-200 ease-out
                  ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              />

              <span className="block w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only visible on mobile when opened */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-350 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t-3 border-slate-900 dark:border-white">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-900 dark:text-white font-bold hover:underline decoration-3"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                  "Halo, saya ingin bertanya tentang jasa pembuatan Undangan Digital/Website"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-3 border-slate-900 dark:border-white font-bold"
              >
                Konsultasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
