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
    return (
      <div className="flex flex-col items-center justify-center p-12 min-h-[400px]">
        <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-600 rounded-full animate-spin mb-6" />
        <p className="text-slate-500 font-bold text-sm tracking-widest uppercase animate-pulse">
          Loading Profile
        </p>
      </div>
    );
  }

  return (
    <div className="py-6 px-0 md:p-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <UpdateProfile user={user} />
    </div>
  );
}
