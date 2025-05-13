"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { InvitationColumn } from "@/types/invitation-column";
import { formatDate } from "@/utils/format-date";
import { useMemo } from "react";
import { InvitationClient } from "./components/client";

const InvitationPage = () => {
  const { invitationAdminData: invitations } = useInvitationAdmin();

  const formattedInvitations = useMemo<InvitationColumn[]>(() => {
    return invitations.map((item) => ({
      id: item.id,
      event_title: item.event_title,
      event_date: formatDate(item.event_date) ?? "-",
      theme: item.themes?.name ?? "-",
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
