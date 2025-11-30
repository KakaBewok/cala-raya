import { geistMono, geistSans } from "@/fonts/fonts";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Cala Raya Project",
  description: "Digital Invitation & Website Creation Service.",
  openGraph: {
    title: "Cala Raya Project",
    description: "Digital Invitation & Website Creation Service.",
    url: "https://calaraya.vercel.app/",
    images: [
      {
        url: "https://calaraya.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
