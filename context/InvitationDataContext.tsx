"use client";

import InvitationData, { Guest } from "@/types/invitation-data";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface InvitationContextType {
  invitationData: InvitationData | null;
  setInvitationData: (data: InvitationData | null) => void;
  guest: Guest | null;
  setGuest: (data: Guest | null) => void;
}

interface InvitationProviderProps {
  children: ReactNode;
}

const InvitationContext = createContext<InvitationContextType | undefined>(
  undefined
);

export const InvitationProvider: React.FC<InvitationProviderProps> = ({
  children,
}) => {
  const [invitationData, setInvitationData] = useState<InvitationData | null>(
    null
  );
  const [guest, setGuest] = useState<Guest | null>(null);

  return (
    <InvitationContext.Provider
      value={{ invitationData, setInvitationData, guest, setGuest }}
    >
      {children}
    </InvitationContext.Provider>
  );
};

export const useInvitation = (): InvitationContextType => {
  const context = useContext(InvitationContext);
  if (!context) {
    throw new Error("useInvitation must be used within an InvitationProvider");
  }
  return context;
};
