"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useEffect, useState } from "react";
import GeneralLoading from "@/components/GeneralLoading";
import InvitationCard from "./components/InvitationCard";

const InvitationPage = () => {
  const { invitationAdminData: invitations } = useInvitationAdmin();
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!invitations && shouldRender) {
    return (
      <div className="text-center text-gray-500">
        You don’t have any invitations yet.
      </div>
    );
  }

  if (!shouldRender) {
    return <GeneralLoading />;
  }

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold italic">
            My Invitation
          </h1>
          <p className="text-gray-500">Manage your digital invitations here</p>
        </div>
        <a
          href="/dashboard/my-invitations/create"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-indigo-100 dark:shadow-none transition-all active:scale-95"
        >
          + Create New
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {invitations.map((invitation) => (
          <InvitationCard key={invitation.id} invitation={invitation} />
        ))}
      </div>
    </div>
  );
};

export default InvitationPage;
