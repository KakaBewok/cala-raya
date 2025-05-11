"use client";

import UpdateProfile from "@/components/dashboard/account-setting/UpdateProfile";
import db from "@/configs/db-config";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { User } from "@/types/invitation-data";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchUser = async () => {
      if (!session?.user.id) return;

      const { data: userData, error } = await db
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error || !userData) {
        toast.error("User not found!");
        return;
      }

      setUser(userData);
    };

    fetchUser();
  }, [session?.user.id]);

  if (status === "loading" || !user) {
    return <div className="text-center p-6">Loading profile...</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <UpdateProfile user={user} />
    </div>
  );
}
