"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { RsvpClient } from "./components/client";
import { RsvpColumn } from "@/types/rsvp-column";

const RsvpInvitationPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { invitationAdminData: invitations } = useInvitationAdmin();

  const selectedInvitation = useMemo(
    () => invitations.find((invitation) => invitation.id === Number(id)),
    [invitations, id]
  );

  const formattedRsvps = useMemo<RsvpColumn[]>(() => {
    return [...(selectedInvitation?.rsvps ?? [])]
      .sort((a, b) => b.id - a.id)
      .filter(
        (rsvp, index, self) =>
          index ===
          self.findIndex((item) => item.guest_name === rsvp.guest_name)
      )
      .map(({ id, guest_name, total_guest, message }) => ({
        id,
        guest_name,
        total_guest,
        message,
      }));
  }, [selectedInvitation?.rsvps]);

  return (
    <>
      <div className="p-2 pt-6 space-y-7">
        <RsvpClient
          rsvpData={formattedRsvps}
          selectedInvitation={selectedInvitation}
        />
      </div>
    </>
  );
};

export default RsvpInvitationPage;
