"use client";

import GeneralLoading from "@/components/GeneralLoading";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useSelectedInvitation } from "@/hooks/use-selected-invitation";
import { formatDate } from "@/utils/format-date";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectInvitationGrid() {
  const { invitationAdminData: invitations } = useInvitationAdmin();
  const { getInvitationId, setInvitationId } = useSelectedInvitation();
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (invitations.length === 1) {
      const firstInvitation = invitations[0];
      router.replace(`/dashboard/share-invitations/${firstInvitation.id}`);
      return;
    }

    if (invitations.length > 1) {
      const id = getInvitationId();
      if (id) {
        router.replace(`/dashboard/share-invitations/${id}`);
        return;
      }
    }

    setShouldRender(true);
  }, [getInvitationId, invitations, router]);

  if (!shouldRender) {
    return <GeneralLoading />;
  }

  if (invitations.length === 0 || invitations === null) {
    return (
      <div className="text-center text-gray-500">
        You don’t have any invitations yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Choose Invitation</h1>
        <p className="text-gray-500">
          Please select one of the invitations to share
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {invitations.map((invitation) => (
          <Card
            key={invitation.id}
            className="relative p-4 rounded-xl border dark:border-neutral-700 cursor-pointer transition-all"
            onClick={() => {
              setInvitationId(invitation.id);
              router.push(`/dashboard/share-invitations/${invitation.id}`);
            }}
          >
            <h2 className="font-semibold text-lg mb-1">
              {invitation.host_one_nickname} & {invitation.host_two_nickname}
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
}
