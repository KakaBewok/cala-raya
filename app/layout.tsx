import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { InvitationProvider } from "@/context/InvitationDataContext";
import { geistMono, geistSans } from "@/fonts/fonts";

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
          <Suspense>{children}</Suspense>
        </InvitationProvider>
      </body>
    </html>
  );
}
