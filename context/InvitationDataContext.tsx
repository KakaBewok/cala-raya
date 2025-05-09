"use client";

import InvitationData, { Guest } from "@/types/invitation-data";
import React, { createContext, ReactNode, useState } from "react";

export interface InvitationContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  invitationData: InvitationData | null;
  setInvitationData: (data: InvitationData | null) => void;
  guest: Guest | null;
  setGuest: (data: Guest | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

interface InvitationProviderProps {
  children: ReactNode;
}

export const InvitationContext = createContext<
  InvitationContextType | undefined
>(undefined);

export const InvitationProvider: React.FC<InvitationProviderProps> = ({
  children,
}) => {
  const [invitationData, setInvitationData] = useState<InvitationData | null>(
    null
  );
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <InvitationContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        invitationData,
        setInvitationData,
        guest,
        setGuest,
        loading,
        setLoading,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
};
