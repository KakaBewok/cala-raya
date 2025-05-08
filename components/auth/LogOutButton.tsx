"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Sesuaikan dengan UI library kamu, bisa juga pakai <button>

const LogoutButton = () => {
  return (
    <Button
      variant="destructive"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
