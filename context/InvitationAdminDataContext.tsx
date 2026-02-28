"use client";

import InvitationData from "@/types/invitation-data";
import { useSession } from "next-auth/react";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface GlobalStats {
  totalInvitations: number;
  totalGuests: number;
  totalRsvps: number;
  attending: number;
  notAttending: number;
  totalGuestsAttending: number;
}

export interface InvitationAdminContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  invitationAdminData: InvitationData[];
  setInvitationAdminData: (data: InvitationData[]) => void;
  refetchInvitations: (page?: number, pageSize?: number) => Promise<void>;
  totalInvitations: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  globalStats: GlobalStats | null;
  refetchGlobalStats: () => Promise<void>;
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [invitationAdminData, setInvitationAdminData] = useState<
    InvitationData[]
  >([]);
  const [totalInvitations, setTotalInvitations] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9); // Back to 9 per page
  const [globalStats, setGlobalStats] = useState<GlobalStats | null>(null);

  // Load collapsed state from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem("sidebar-collapsed");
    if (stored !== null) {
      setSidebarCollapsed(stored === "true");
    }
  }, []);

  // Save collapsed state to local storage when it changes
  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", sidebarCollapsed.toString());
  }, [sidebarCollapsed]);

  const fetchInvitations = async (page: number = currentPage, size: number = pageSize) => {
    if (status !== "authenticated") return;
    try {
      setLoading(true);
      const res = await fetch(`/api/invitations?page=${page}&pageSize=${size}`);
      const data = await res.json();
      
      if (data.data) {
        setInvitationAdminData(data.data);
        setTotalInvitations(data.total);
      } else {
        // Fallback for non-paginated response if any
        setInvitationAdminData(data.invitations || []);
        setTotalInvitations(data.invitations ? data.invitations.length : 0);
      }
    } catch (error) {
      console.error("Error fetching invitations: ", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGlobalStats = async () => {
    if (status !== "authenticated") return;
    try {
      const res = await fetch("/api/dashboard/stats");
      const data = await res.json();
      setGlobalStats(data);
    } catch (error) {
      console.error("Error fetching global statistics: ", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchInvitations(currentPage, pageSize);
      fetchGlobalStats();
    }
  }, [status, currentPage, pageSize]);

  return (
    <InvitationAdminContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        sidebarCollapsed,
        setSidebarCollapsed,
        loading,
        setLoading,
        invitationAdminData,
        setInvitationAdminData,
        refetchInvitations: fetchInvitations,
        totalInvitations,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        globalStats,
        refetchGlobalStats: fetchGlobalStats,
      }}
    >
      {children}
    </InvitationAdminContext.Provider>
  );
};
