"use client";

import { AlertModal } from "@/components/dashboard/AlertModal";
import { DataTable } from "@/components/dashboard/DataTable";
import { EditMessageModal } from "@/components/dashboard/EditMessageModal";
import { ExcelUploadModal } from "@/components/dashboard/ExcelUploadModal";
import { GuestInputModal } from "@/components/dashboard/GuestInputModal";
import Heading from "@/components/dashboard/Heading";
import { TooltipHover } from "@/components/Tooltip";
import { Button } from "@/components/ui/button";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import { Plus, SquarePen, Upload } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ChangeInvitationButton from "./ChangeInvitationButton";
import { columns } from "./columns";
import { RsvpColumn } from "@/types/rsvp-column";

interface RsvpClientProps {
  rsvpData: RsvpColumn[];
  selectedInvitation?: InvitationData;
}

export const RsvpClient: React.FC<RsvpClientProps> = ({
  rsvpData,
  selectedInvitation,
}) => {
  const {
    loading,
    setLoading,
    invitationAdminData: invitations,
    refetchInvitations,
  } = useInvitationAdmin();
  const [ids, setIds] = useState<number[]>([]);
  const [bulkDeleteModalOpen, setBulkDeleteModalOpen] =
    useState<boolean>(false);
  const [guestInputModalOpen, setGuestInputModalOpen] =
    useState<boolean>(false);
  const [excelUploadModalOpen, setExcelUploadModalOpen] =
    useState<boolean>(false);
  const [editMessageModalOpen, setEditMessageModalOpen] =
    useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
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

  const handleUpload = async (
    file: File | null,
    setFile: (file: File | null) => void
  ) => {
    if (!file) {
      toast.error("Please upload the file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("invitation_id", String(selectedInvitation?.id ?? ""));

    setIsUploading(true);

    try {
      const response = await fetch("/api/generate-message/upload-excel", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        refetchInvitations();
        setExcelUploadModalOpen(false);
        toast.success("File uploaded successfully!");
        setFile(null);
      } else {
        toast.error("Upload failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading.");
    } finally {
      setIsUploading(false);
    }
  };

  const openDeleteModal = (ids: number[]) => {
    setIds(ids);
    setBulkDeleteModalOpen(true);
  };

  const submitGuestInput = async (guestNames: string[]) => {
    try {
      setLoading(true);
      const res = await fetch("/api/generate-message/manual-guest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guests: guestNames,
          invitationId: selectedInvitation?.id,
        }),
      });

      if (!res.ok) throw new Error("Failed to add guests");

      refetchInvitations();
      setGuestInputModalOpen(false);

      toast.success("Guests added successfully", {
        position: "top-center",
      });
    } catch (err) {
      toast.error("Failed to add guest", {
        position: "top-center",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTemplate = async (template: string) => {
    if (!selectedInvitation?.id) {
      toast.error("Invitation ID not found!");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/template-message", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          invitationId: selectedInvitation?.id,
          template,
        }),
      });

      if (!res.ok) throw new Error("Failed to save template");

      refetchInvitations();

      toast.success("Template updated successfully!");
      setEditMessageModalOpen(false);
    } catch (err) {
      console.error("Save template error: ", err);
      toast.error("Failed to save template. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Heading
            title={`Guests List (${rsvpData?.length ?? 0})`}
            description={`${
              selectedInvitation ? `${description}` : "Loading..."
            }`}
          />
          {invitations.length > 1 && <ChangeInvitationButton />}
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-2">
          <div className="flex items-center gap-2">
            <TooltipHover message="Upload Guests List">
              <Button
                onClick={() => setExcelUploadModalOpen(true)}
                variant="outline"
                className="dark:bg-slate-200 hover:dark:bg-slate-300 cursor-pointer"
              >
                <Upload className="w-4 h-4 dark:text-slate-900" />
              </Button>
            </TooltipHover>
            <TooltipHover message="Input Guests">
              <Button
                onClick={() => setGuestInputModalOpen(true)}
                variant="outline"
                className="dark:bg-slate-200 hover:dark:bg-slate-300 cursor-pointer"
              >
                <Plus className="w-4 h-4 dark:text-slate-900" />
              </Button>
            </TooltipHover>
          </div>
          <TooltipHover message="Create Template Message">
            <Button
              onClick={() => setEditMessageModalOpen(true)}
              className="dark:bg-green-600 dark:hover:bg-green-500 cursor-pointer bg-green-600 hover:bg-green-500 text-white "
            >
              <span className="text-xs md:text-sm">Message</span>
              <SquarePen className="w-4 h-4 dark:text-slate-50" />
            </Button>
          </TooltipHover>
        </div>
      </div>

      <AlertModal
        isOpen={bulkDeleteModalOpen}
        onClose={() => setBulkDeleteModalOpen(false)}
        onConfirm={handleBulkDelete}
        loading={loadingDelete}
        description="All data under this guests will also be deleted."
      />
      <EditMessageModal
        isOpen={editMessageModalOpen}
        onClose={() => setEditMessageModalOpen(false)}
        onSubmit={handleSaveTemplate}
        initialTemplate={selectedInvitation?.message_template || ""}
        loading={loading}
      />
      <GuestInputModal
        isOpen={guestInputModalOpen}
        onClose={() => setGuestInputModalOpen(false)}
        onSubmit={submitGuestInput}
        loading={loading}
      />
      <ExcelUploadModal
        isOpen={excelUploadModalOpen}
        onClose={() => setExcelUploadModalOpen(false)}
        onUpload={handleUpload}
        loading={isUploading}
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
