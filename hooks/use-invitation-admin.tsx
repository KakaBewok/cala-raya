"use client";

import {
  InvitationAdminContext,
  InvitationAdminContextType,
} from "@/context/InvitationAdminDataContext";
import { useContext } from "react";

export const useInvitationAdmin = (): InvitationAdminContextType => {
  const context = useContext(InvitationAdminContext);
  if (!context) {
    throw new Error(
      "useInvitationAdmin must be used within an InvitationAdminProvider"
    );
  }
  return context;
};
