"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { GuestColumn } from "@/types/guest-column";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { GuestClient } from "./components/client";

const ShareInvitationPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { invitationAdminData: invitations } = useInvitationAdmin();

  const selectedInvitation = invitations.find(
    (invitation) => invitation.id === Number(id)
  );

  const formattedGuests = useMemo<GuestColumn[]>(() => {
    return (selectedInvitation?.guests ?? []).map((item) => ({
      id: item.id,
      name: item.name,
      phone_number: item.phone_number ?? "-",
      address: item.address ?? "-",
      notes: item.notes ?? "-",
    }));
  }, [selectedInvitation?.guests]);

  return (
    <>
      <div className="p-2 pt-6 space-y-7">
        <GuestClient
          guestData={formattedGuests}
          selectedInvitation={selectedInvitation}
        />
      </div>
    </>
  );
};

export default ShareInvitationPage;
