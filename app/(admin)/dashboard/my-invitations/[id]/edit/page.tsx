"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useParams } from "next/navigation";
import { InvitationForm } from "../../components/InvitationForm";

const EditInvitationPage = () => {
  const params = useParams();
  const invitationId = params.id;
  const { invitationAdminData: invitations } = useInvitationAdmin();

  const invitation = invitations?.find(
    (inv) => inv.id.toString() === invitationId
  );

  return (
    <InvitationForm
      invitationData={invitation}
      onSuccess={() => {
        alert("Invitation updated successfully!");
      }}
    />
  );
};

export default EditInvitationPage;
