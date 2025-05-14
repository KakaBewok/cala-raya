"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
const InvitationPage = () => {
  const { invitationAdminData: invitations } = useInvitationAdmin();

  console.log(invitations.length);

  return (
    <>
      <div className="p-2 pt-6 space-y-7">Under maintenance</div>
    </>
  );
};

export default InvitationPage;
