import {
  Geist,
  Geist_Mono,
  GFS_Didot,
  Playfair_Display,
  Poppins,
  Raleway,
  Roboto,
} from "next/font/google";
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

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const didot = GFS_Didot({
  subsets: ["greek"],
  weight: ["400"],
  variable: "--font-didot",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-raleway",
  display: "swap",
});

export const optivaground = localFont({
  src: "../public/fonts/optivaground/optivaground-bold.otf",
  variable: "--font-optivaground",
  display: "swap",
});
