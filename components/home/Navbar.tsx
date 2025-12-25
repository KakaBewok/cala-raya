"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon, MailIcon } from "lucide-react";
import { CONTACT_PERSON, navLinks } from "@/data/data";

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
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <MailIcon className="w-6 h-6 text-green-700 dark:text-green-600" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Calaraya
            </span>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right - Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
            <a
              href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                "Halo, saya ingin bertanya tentang jasa pembuatan Undangan Digital/Website"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Konsultasi
            </a>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {/* Menu icon */}
              <Menu
                className={`
                  absolute inset-0 m-auto w-6 h-6
                  text-slate-600 dark:text-slate-300
                  transition-all duration-200 ease-out
                  ${isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"}
                `}
              />

              {/* Close icon */}
              <X
                className={`
                  absolute inset-0 m-auto w-6 h-6
                  text-slate-600 dark:text-slate-300
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
          <div className="py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
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
                className="text-center px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold"
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
