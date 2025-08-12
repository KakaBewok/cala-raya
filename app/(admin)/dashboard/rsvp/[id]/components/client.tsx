"use client";

import { AlertModal } from "@/components/dashboard/AlertModal";
import { DataTable } from "@/components/dashboard/DataTable";
import Heading from "@/components/dashboard/Heading";
import { Button } from "@/components/ui/button";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import { PartyPopper } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
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
  const { invitationAdminData: invitations, refetchInvitations } =
    useInvitationAdmin();
  const [ids, setIds] = useState<number[]>([]);
  const [bulkDeleteModalOpen, setBulkDeleteModalOpen] =
    useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const bridesAndGrooms = `${selectedInvitation?.host_one_nickname} & ${selectedInvitation?.host_two_nickname}`;
  const description = `${bridesAndGrooms} - ${
    selectedInvitation?.event_date
      ? formatDate(selectedInvitation.event_date)
      : ""
  }`;

  const handleBulkDelete = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setLoadingDelete(true);

    try {
      const res = await fetch(`/api/delete-guest`, {
        method: "DELETE",
        body: JSON.stringify({ ids }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      refetchInvitations();
      toast.success("Guests deleted", {
        position: "top-center",
      });

      setBulkDeleteModalOpen(false);
    } catch (error) {
      console.error("An error occurred: ", error);
      toast.error("Failed to delete");
    } finally {
      setLoadingDelete(false);
    }
  };

  const openDeleteModal = (ids: number[]) => {
    setIds(ids);
    setBulkDeleteModalOpen(true);
  };

  const sumTotalGuests = (rsvps: RsvpColumn[]) => {
    return rsvps.reduce((sum, rsvp) => sum + rsvp.total_guest, 0) ?? 0;
  };

  return (
    <>
      <div className="flex flex-row items-end md:items-center justify-between">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <Heading
            title={`RSVP List (${rsvpData?.length ?? 0})`}
            description={`${
              selectedInvitation ? `${description}` : "Loading..."
            }`}
          />
          {invitations.length > 1 && (
            <ChangeInvitationButton url="/dashboard/rsvp" />
          )}
        </div>
        <Button
          // onClick={() => alert("test")}
          className="dark:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white rounded-none"
        >
          <span className="text-xs md:text-sm font-semibold">
            <span className="font-bold">{sumTotalGuests(rsvpData)}</span> Total
            Guests
          </span>
          <PartyPopper className="w-6 h-6 dark:text-slate-50" />
        </Button>
      </div>

      <AlertModal
        isOpen={bulkDeleteModalOpen}
        onClose={() => setBulkDeleteModalOpen(false)}
        onConfirm={handleBulkDelete}
        loading={loadingDelete}
        description="All data under this guests will also be deleted."
      />
      <DataTable
        onDelete={openDeleteModal}
        searchKey="guest_name"
        columns={columns}
        data={rsvpData}
      />
    </>
  );
};
