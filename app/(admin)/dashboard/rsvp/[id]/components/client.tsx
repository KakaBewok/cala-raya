"use client";

import { DataTable } from "@/components/dashboard/DataTable";
import Heading from "@/components/dashboard/Heading";
import { Button } from "@/components/ui/button";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import { PartyPopper } from "lucide-react";
import { columns } from "./columns";
import { RsvpColumn } from "@/types/rsvp-column";
import ChangeInvitationButton from "@/components/dashboard/ChangeInvitationButton";

interface RsvpClientProps {
  rsvpData: RsvpColumn[];
  selectedInvitation?: InvitationData;
}

export const RsvpClient: React.FC<RsvpClientProps> = ({
  rsvpData,
  selectedInvitation,
}) => {
  const { invitationAdminData: invitations } = useInvitationAdmin();

  const bridesAndGrooms = `${selectedInvitation?.host_one_nickname} & ${selectedInvitation?.host_two_nickname}`;

  const description = `${bridesAndGrooms} - ${
    selectedInvitation?.event_date
      ? formatDate(selectedInvitation.event_date)
      : ""
  }`;

  const openDeleteModal = () => {
    alert("Delete functionality is not implemented yet.");
  };

  const sumTotalGuests = (rsvps: RsvpColumn[]) => {
    return rsvps.reduce((sum, rsvp) => sum + rsvp.total_guest, 0) ?? 0;
  };

  return (
    <>
      <div className="flex flex-row items-center md:items-center justify-between">
        <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
          <Heading
            title={`RSVP List (${rsvpData?.length ?? 0})`}
            description={`${
              selectedInvitation ? `${description}` : "Loading..."
            }`}
            additionalInfo={`${selectedInvitation?.additional_info ?? ``}`}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {invitations.length > 1 && (
            <ChangeInvitationButton url="/dashboard/rsvp" />
          )}
          <Button className="dark:bg-blue-600 dark:hover:bg-blue-600 bg-blue-600 hover:bg-blue-600 text-white rounded-none">
            <span className="text-xs md:text-sm font-semibold">
              <span className="font-bold">{sumTotalGuests(rsvpData)}</span>{" "}
              Guests
            </span>
            <PartyPopper className="w-6 h-6 dark:text-slate-50" />
          </Button>
        </div>
      </div>

      <DataTable
        onDelete={openDeleteModal}
        searchKey="guest_name"
        columns={columns}
        data={rsvpData}
      />
    </>
  );
};
