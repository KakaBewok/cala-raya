"use client";

import Header from "@/components/dashboard/header/index";
import Sidebar from "@/components/dashboard/sidebar/index";
import GeneralLoading from "@/components/GeneralLoading";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import React, { ReactNode } from "react";

const AuthenticatedLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { loading } = useInvitationAdmin();

  return (
    <div
      className="text-slate-800 bg-gradient-to-tl from-blue-200 via-purple-100 to-green-100
         dark:text-slate-100 dark:bg-gradient-to-br dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
    >
      {loading && <GeneralLoading />}
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <Header />
          <main>
            <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
