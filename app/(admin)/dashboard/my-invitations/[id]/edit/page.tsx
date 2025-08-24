"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useEffect, useState } from "react";
import GeneralLoading from "@/components/GeneralLoading";
import { useParams } from "next/navigation";

// type EditInvitationPageProps = {
//   params: {
//     id: string;
//   };
// };

// type EditInvitationPageProps = Promise<{ params: { id: string } }>
// { params }: EditInvitationPageProps

const EditInvitationPage = () => {
  // const { id } = params;

  const params = useParams();
  const id = params.id; // akan jadi "15"

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
      <div>
        <h1 className="text-2xl font-bold">
          Edit Invitation{" "}
          <span className="text-red-500">(UNDER MANTAINANCE)</span>
        </h1>
        <p className="text-gray-500">Edit your invitations here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        Edit page is under maintenance. id: {id}
      </div>
    </div>
  );
};

export default EditInvitationPage;
