"use client";

import { AlertModal } from "@/components/dashboard/AlertModal";
import { EditGuestModal } from "@/components/dashboard/EditGuestModal";
import { Button } from "@/components/ui/button";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { GuestColumn } from "@/types/guest-column";
import { GuestData } from "@/types/guest-data";
import { Rundown } from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";
import { encode } from "@/utils/hash";
import { CheckIcon, CopyIcon, MessageCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const CellAction = ({ data }: { data: GuestColumn }) => {
  const params = useParams();
  const id = params.id as string;
  const {
    loading,
    invitationAdminData: invitations,
    refetchInvitations,
  } = useInvitationAdmin();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isShare, setIsShare] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const [loadingEdit, setLoadingEdit] = useState<boolean>(false);

  const selectedInvitation = invitations.find(
    (invitation) => invitation.id === Number(id)
  );

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

  const handleEditId = async (guest: GuestData) => {
    setLoadingEdit(true);
    try {
      const res = await fetch(`/api/update-guest/${data.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guest),
      });

      if (!res.ok) throw new Error("Update failed");

      refetchInvitations();
      setEditModalOpen(false);
      toast.success("Guest updated", {
        position: "top-center",
      });
    } catch (err) {
      toast.error("Failed to update");
      console.error(err);
    } finally {
      setLoadingEdit(false);
    }
  };

  const handleModalDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDeleteModalOpen(true);
  };

  const handleModalEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEditModalOpen(true);
  };

  const generateUrl = () => {
    if (!selectedInvitation?.id || !data.id) return null;
    const token = encode([selectedInvitation?.id, data.id]);
    return `${selectedInvitation?.web_url}/${selectedInvitation?.slug}?id=${token}`;
  };

  const generateRundownText = (rundowns: Rundown[] = []) => {
    if (rundowns.length === 0) return "";

    return rundowns
      .map((rundown) => {
        const date = formatDate(rundown.date, true);
        const start = formatTime(rundown.start_time);
        const end = rundown.end_time ? formatTime(rundown.end_time) : "Selesai";
        const zone = rundown.time_zone;
        const location = rundown.location;

        return `
${rundown.title}:
🗓️ Tanggal  : ${date}
🕛 Pukul    : ${start} ${zone} s/d ${end === "Selesai" ? end : `${end} ${zone}`}
📍 Lokasi   : ${location}`;
      })
      .join("\n");
  };

  const applyTemplate = (template: string, data: Record<string, string>) => {
    return Object.entries(data).reduce((result, [key, value]) => {
      return result.replace(new RegExp(`{${key}}`, "g"), value);
    }, template);
  };

  const generateMessage = () => {
    if (!selectedInvitation) return "Invitation data not found";

    const template = selectedInvitation?.message_template;

    const dataMap: Record<string, string> = {
      guest_name: data.name,
      event_title: selectedInvitation.event_title ?? "-",
      url: generateUrl() ?? "-",
      event_rundowns: generateRundownText(selectedInvitation.rundowns),
    };

    return applyTemplate(template, dataMap);
  };

  const normalizePhoneNumber = (raw?: string): string | null => {
    if (!raw) return null;

    const cleaned = raw.replace(/\D/g, "");

    if (cleaned.startsWith("0")) {
      return "62" + cleaned.slice(1);
    }

    if (cleaned.startsWith("62")) {
      return cleaned;
    }

    return null;
  };

  const handleShareWA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!selectedInvitation || !selectedInvitation.message_template) {
      toast.error(
        "Template message not found. Please create a template message!"
      );
      return;
    }

    const message = generateMessage();
    const phone = normalizePhoneNumber(data.phone_number);
    const waUrl = phone
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;

    setIsShare(true);
    setTimeout(() => {
      setIsShare(false);
    }, 6000);
    window.open(waUrl, "_blank");
  };

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!selectedInvitation || !selectedInvitation.message_template) {
      toast.error(
        "Template message not found. Please create a template message!"
      );
      return;
    }

    navigator.clipboard.writeText(generateMessage());

    toast.success("Message copied!", {
      position: "top-center",
    });

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 6000);
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
      <EditGuestModal
        selectedData={data}
        isOpen={editModalOpen}
        onClose={(e) => {
          e?.stopPropagation();
          setEditModalOpen(false);
        }}
        onSubmit={handleEditId}
        loading={loadingEdit}
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
        <Button
          disabled={loading}
          variant="ghost"
          className="h-8 p-0 w-9 bg-amber-400 hover:bg-amber-500 dark:hover:bg-amber-500 cursor-pointer"
          onClick={handleModalEdit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="edit-alt"
            className="fill-current"
            width="21"
            height="21"
            fill="none"
          >
            <path
              fill="#F9F9FC"
              d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
            ></path>
          </svg>
        </Button>
        <Button
          disabled={loading}
          variant="ghost"
          className={`h-8 p-0 w-9 bg-sky-500 hover:bg-sky-600 dark:hover:bg-sky-600 cursor-pointer`}
          onClick={handleCopy}
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-white" />
          ) : (
            <CopyIcon className="h-4 w-4 text-white" />
          )}
        </Button>
        <Button
          disabled={loading}
          variant="ghost"
          className={`h-8 p-0 w-9 bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-pointer`}
          onClick={handleShareWA}
        >
          {isShare ? (
            <CheckIcon className="h-4 w-4 text-white" />
          ) : (
            <MessageCircle className="h-4 w-4 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};
