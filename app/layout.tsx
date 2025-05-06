import { InvitationProvider } from "@/context/InvitationDataContext";
import { geistMono, geistSans } from "@/fonts/fonts";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cala Raya Project",
  description: "Digital invitation service for your special moments.",
  openGraph: {
    title: "Cala Raya Project",
    description: "Digital invitation service for your special moments.",
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
        <InvitationProvider>
          <Toaster position="top-right" />
          <Suspense>{children}</Suspense>
        </InvitationProvider>
      </body>
    </html>
  );
}
