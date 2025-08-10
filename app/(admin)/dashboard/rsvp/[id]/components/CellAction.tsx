"use client";

import { AlertModal } from "@/components/dashboard/AlertModal";
import { Button } from "@/components/ui/button";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { RsvpColumn } from "@/types/rsvp-column";
import { useState } from "react";
import toast from "react-hot-toast";

export const CellAction = ({ data }: { data: RsvpColumn }) => {
  const { loading, refetchInvitations } = useInvitationAdmin();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const handleDeleteId = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setLoadingDelete(true);

    try {
      const res = await fetch(`/api/delete-guest/${data.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      refetchInvitations();
      toast.success("Guest deleted", {
        position: "top-center",
      });

      setDeleteModalOpen(false);
    } catch (error) {
      console.error("An error occurred: ", error);
      toast.error("Failed to delete");
    } finally {
      setLoadingDelete(false);
    }
  };

  const handleModalDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDeleteModalOpen(true);
  };

  return (
    <div>
      <AlertModal
        isOpen={deleteModalOpen}
        onClose={(e) => {
          e?.stopPropagation();
          setDeleteModalOpen(false);
        }}
        onConfirm={handleDeleteId}
        loading={loadingDelete}
        description="All data under this guest will also be deleted."
      />
      <div className="flex items-center gap-1">
        <Button
          disabled={loading}
          variant="destructive"
          onClick={handleModalDelete}
          className="h-8 p-0 bg-red-500 w-9 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="trash-alt"
            className="fill-current"
            width="21"
            height="21"
            fill="none"
          >
            <path
              fill="#F9F9FC"
              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
