"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import DataTtypes from "@/types/data-types";

interface InvitationContextType {
  invitationData: DataTtypes | null;
  setInvitationData: (data: DataTtypes | null) => void;
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
  const [invitationData, setInvitationData] = useState<DataTtypes | null>(null);

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
