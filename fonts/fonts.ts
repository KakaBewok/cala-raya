import { Geist, Geist_Mono } from "next/font/google";

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
