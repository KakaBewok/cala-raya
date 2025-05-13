"use client";

import { InvitationProvider } from "@/context/InvitationDataContext";
import { InvitationAdminProvider } from "@/context/InvitationAdminDataContext";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <InvitationProvider>
        <InvitationAdminProvider>
          <Toaster position="top-right" />
          {children}
        </InvitationAdminProvider>
      </InvitationProvider>
    </SessionProvider>
  );
}
