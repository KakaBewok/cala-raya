"use client";

import InvitationData from "@/types/invitation-data";
import { useSession } from "next-auth/react";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface InvitationAdminContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  invitationAdminData: InvitationData[];
  setInvitationAdminData: (data: InvitationData[]) => void;
  refetchInvitations: () => Promise<void>;
}

interface InvitationAdminProviderProps {
  children: ReactNode;
}

export const InvitationAdminContext = createContext<
  InvitationAdminContextType | undefined
>(undefined);

export const InvitationAdminProvider: React.FC<
  InvitationAdminProviderProps
> = ({ children }) => {
  const { status } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [invitationAdminData, setInvitationAdminData] = useState<
    InvitationData[]
  >([]);

  const fetchInvitations = async () => {
    if (status !== "authenticated") return;
    try {
      setLoading(true);
      const res = await fetch("/api/invitations");
      const data = await res.json();
      setInvitationAdminData(data.invitations);
    } catch (error) {
      console.error("Error fetching invitations: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchInvitations();
    }
  }, [status]);

  return (
    <InvitationAdminContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        loading,
        setLoading,
        invitationAdminData,
        setInvitationAdminData,
        refetchInvitations: fetchInvitations,
      }}
    >
      {children}
    </InvitationAdminContext.Provider>
  );
};
