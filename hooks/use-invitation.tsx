"use client";

import {
  InvitationContext,
  InvitationContextType,
} from "@/context/InvitationDataContext";
import { useContext } from "react";

export const useInvitation = (): InvitationContextType => {
  const context = useContext(InvitationContext);
  if (!context) {
    throw new Error("useInvitation must be used within an InvitationProvider");
  }
  return context;
};
