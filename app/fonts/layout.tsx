import {
  geistSans,
  geistMono,
  roboto,
  playfair,
  poppins,
  didot,
  raleway,
  greatVibes,
  optivaground,
  remineFares,
  amalfiCoast,
  ninfa,
  nyghtSerif,
  theSecret,
  commuters,
  lagunac,
  monthGlade,
  gandhiSerif,
  montserrat,
} from "@/fonts/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Font Preview — Calaraya Project",
  description:
    "Interactive font preview showcase for selecting invitation theme fonts.",
};

/**
 * All font objects in one array so we can join their `.variable` classes.
 * The order doesn't matter — we just need every CSS‑variable class on
 * a common ancestor so child elements can reference `var(--font-xxx)`.
 */
const allFonts = [
  geistSans,
  geistMono,
  roboto,
  playfair,
  poppins,
  didot,
  raleway,
  greatVibes,
  optivaground,
  remineFares,
  amalfiCoast,
  ninfa,
  nyghtSerif,
  theSecret,
  commuters,
  lagunac,
  monthGlade,
  gandhiSerif,
  montserrat,
];

export default function FontsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVariableClasses = allFonts.map((f) => f.variable).join(" ");

  return <div className={fontVariableClasses}>{children}</div>;
}
