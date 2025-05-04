import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { InvitationProvider } from "@/context/InvitationDataContext";
import { geistMono, geistSans } from "@/fonts/fonts";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Cala Raya",
  description: "Created by Cala Raya",
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
