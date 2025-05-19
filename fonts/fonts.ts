import { Geist, Geist_Mono, Playfair_Display, Roboto } from "next/font/google";
import localFont from "next/font/local";

// default font for the app
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// default font for the app
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
});

export const optivaground = localFont({
  src: "./optivaground/optivaground-bold.otf",
  variable: "--font-optivaground",
  display: "swap",
});
