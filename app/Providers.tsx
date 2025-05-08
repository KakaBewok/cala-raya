"use client";

import { InvitationProvider } from "@/context/InvitationDataContext";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <InvitationProvider>
        <Toaster position="top-right" />
        {children}
      </InvitationProvider>
    </SessionProvider>
  );
}
