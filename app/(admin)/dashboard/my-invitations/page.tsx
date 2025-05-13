"use client";

import { InvitationClient } from "./components/client";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { formatDate } from "@/utils/format-date";
import { InvitationColumn } from "@/types/invitation-column";
import { useMemo } from "react";

const InvitationPage = () => {
  const { invitationAdminData: invitations } = useInvitationAdmin();

  // console.log("invitations: ", invitations.);

  const formattedInvitations = useMemo<InvitationColumn[]>(() => {
    return invitations.map((item) => ({
      id: item.id,
      event_title: item.event_title,
      event_date: formatDate(item.event_date) ?? "-",
      theme: item.theme?.name ?? "-",
      status: item.activated_at ? "Active" : "Inactive",
    }));
  }, [invitations]);

  return (
    <>
      <div className="p-2 pt-6 space-y-7">
        <InvitationClient data={formattedInvitations} />
      </div>
    </>
  );
};

export default InvitationPage;
