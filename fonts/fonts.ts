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

export const remineFares = localFont({
  src: "../public/fonts/remine-fares/remine-fares.otf",
  variable: "--font-reminefares",
  display: "swap",
});

export const amalfiCoast = localFont({
  src: "../public/fonts/amalfi-coast/amalfi-coast.ttf",
  variable: "--font-amalfi-coast",
  display: "swap",
});

export const ninfa = localFont({
  // src: "../public/fonts/ninfa/ninfa_regular.otf",
  src: [
    { path: "../public/fonts/ninfa/ninfa_black.otf", weight: "700" },
    { path: "../public/fonts/ninfa/ninfa_light.otf", weight: "300" },
    { path: "../public/fonts/ninfa/ninfa_regular.otf", weight: "400" },
    { path: "../public/fonts/ninfa/ninfa_bold.otf", weight: "700" },
  ],
  variable: "--font-ninfa",
  display: "swap",
});
