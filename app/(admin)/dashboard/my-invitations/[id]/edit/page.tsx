"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useEffect, useState } from "react";
import GeneralLoading from "@/components/GeneralLoading";
import { useParams } from "next/navigation";

const EditInvitationPage = () => {
  const params = useParams();
  const invitationId = params.id;

  const { invitationAdminData: invitations } = useInvitationAdmin();
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  const invitation = invitations?.find(
    (inv) => inv.id.toString() === invitationId
  );

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
      <div>
        <h1 className="text-2xl font-bold">
          Edit Invitation{" "}
          <span className="text-red-500">(UNDER MANTAINANCE)</span>
        </h1>
        <p className="text-gray-500">Edit your invitations here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        Edit page is under maintenance. Title: {invitation?.event_title}
      </div>
    </div>
  );
};

export default EditInvitationPage;
