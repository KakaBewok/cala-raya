"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/utils/format-date";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GeneralLoading from "@/components/GeneralLoading";

const InvitationPage = () => {
  const { invitationAdminData: invitations } = useInvitationAdmin();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  // return (
  //   <>
  //     <div className="p-2 pt-6 space-y-7">
  //       Under maintenance. Silahkan ke menu Share Invitations untuk setting
  //       template pesan, input tamu dan sebarkan undangan.
  //     </div>
  //   </>
  // );

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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          My Invitation (UNDER MANTAINANCE)
        </h1>
        <p className="text-gray-500">Manage your invitations here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {invitations.map((invitation) => (
          <Card
            key={invitation.id}
            className="relative p-4 rounded-xl border shadow cursor-pointer transition-all"
            onClick={() => {
              router.push(`/dashboard/my-invitations/${invitation.id}`);
            }}
          >
            <h2 className="font-semibold text-lg mb-1">
              {invitation.event_title}
            </h2>
            {invitation.themes?.name && (
              <span className="absolute bottom-2 right-2 bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-white text-xs font-medium px-2 py-1 rounded">
                {invitation.themes?.name}
              </span>
            )}
            <Separator className="bg-neutral-300 dark:bg-neutral-700" />
            <p className="text-sm text-gray-500">
              {formatDate(invitation.event_date)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvitationPage;
