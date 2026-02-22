"use client";

import GeneralLoading from "@/components/GeneralLoading";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useSelectedInvitation } from "@/hooks/use-selected-invitation";
import { formatDate } from "@/utils/format-date";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BadgeCorner from "@/components/BadgeCorner";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SelectInvitationGrid() {
  const { 
    invitationAdminData: invitations, 
    totalInvitations, 
    currentPage, 
    setCurrentPage, 
    pageSize 
  } = useInvitationAdmin();
  const { getInvitationId, setInvitationId } = useSelectedInvitation();
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const router = useRouter();

  const totalPages = Math.ceil(totalInvitations / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    if (totalInvitations === 1 && invitations.length === 1) {
      const firstInvitation = invitations[0];
      router.replace(`/dashboard/rsvp/${firstInvitation.id}`);
      return;
    }

    if (totalInvitations > 1) {
      const id = getInvitationId();
      if (id) {
        const exists = invitations.some(inv => inv.id === id);
        if (exists) {
          router.replace(`/dashboard/rsvp/${id}`);
          return;
        }
      }
    }

    setShouldRender(true);
  }, [getInvitationId, invitations, totalInvitations, router]);

  if (!shouldRender) {
    return <GeneralLoading />;
  }

  if (totalInvitations === 0) {
    return (
      <div className="text-center text-gray-500 py-20">
        You don’t have any invitations yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">View RSVP Details</h1>
        <p className="text-gray-500">
          Select an invitation to see who’s attending and read their messages ({totalInvitations})
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {invitations.map((invitation) => (
          <Card
            key={invitation.id}
            className="overflow-hidden hover:border-purple-600 hover:dark:border-white duration-500 relative p-4 rounded-xl border dark:border-neutral-700 cursor-pointer transition-all"
            onClick={() => {
              setInvitationId(invitation.id);
              router.push(`/dashboard/rsvp/${invitation.id}`);
            }}
          >
            {invitation.additional_info && (
              <BadgeCorner content={invitation.additional_info} />
            )}
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

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing <span className="font-medium">{Math.min((currentPage - 1) * pageSize + 1, totalInvitations)}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * pageSize, totalInvitations)}
            </span>{" "}
            of <span className="font-medium">{totalInvitations}</span> invitations
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <div className="hidden sm:flex items-center px-4 h-9 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              PAGE {currentPage} / {totalPages}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
