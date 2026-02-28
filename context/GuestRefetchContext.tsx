"use client";

import { createContext, useContext } from "react";

interface GuestRefetchContextType {
  refetchGuests: () => Promise<void>;
}

const GuestRefetchContext = createContext<GuestRefetchContextType | undefined>(
  undefined
);

export const GuestRefetchProvider = GuestRefetchContext.Provider;

export const useGuestRefetch = (): GuestRefetchContextType => {
  const context = useContext(GuestRefetchContext);
  if (!context) {
    throw new Error(
      "useGuestRefetch must be used within a GuestRefetchProvider"
    );
  }
  return context;
};
