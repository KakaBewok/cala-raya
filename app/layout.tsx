import { InvitationProvider } from "@/context/InvitationDataContext";
import { geistMono, geistSans } from "@/fonts/fonts";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cala Raya Project",
  description: "Modern digital invitations made simple and stylish.",
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
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
