"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import InvitationData from "@/types/invitation-data";

interface InvitationContextType {
  invitationData: InvitationData | null;
  setInvitationData: (data: InvitationData | null) => void;
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

  return (
    <InvitationContext.Provider value={{ invitationData, setInvitationData }}>
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
