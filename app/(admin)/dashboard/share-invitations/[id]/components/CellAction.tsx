"use client";

import { AlertModal } from "@/components/dashboard/AlertModal";
import { EditGuestModal } from "@/components/dashboard/EditGuestModal";
import { Button } from "@/components/ui/button";
import { useGuestRefetch } from "@/context/GuestRefetchContext";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { GuestColumn } from "@/types/guest-column";
import { GuestData } from "@/types/guest-data";
import { Rundown } from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";
import { encode } from "@/utils/hash";
import { CheckIcon, CopyIcon, MessageCircle, Trash2, Edit2 } from "lucide-react";
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
  const { refetchGuests } = useGuestRefetch();
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

      await refetchGuests();
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

      await refetchGuests();
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
    const isSpecialCase = selectedInvitation?.slug === "gabriel-rilly";

    if (rundowns.length === 0) return "";

    return rundowns
      .sort((a, b) => a.order_number - b.order_number)
      .map((rundown) => {
        const date =
          isSpecialCase
            ? formatDate(rundown.date, true, "en-US")
            : formatDate(rundown.date, true);
        const start = formatTime(rundown.start_time);
        const end = rundown.end_time ? formatTime(rundown.end_time) : "";
        const zone = rundown.time_zone;
        const location = rundown.location;

        return `
${rundown.title}:
🗓️ ${date}
🕛 ${start} ${zone} ${end === "" ? "" : `- ${end} ${zone}`}
📍 ${location}`;
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
      <div className="flex items-center gap-1.5">
        <Button
          disabled={loading}
          variant="ghost"
          onClick={handleModalDelete}
          className="h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          title="Delete guest"
        >
          <Trash2 className="h-4 w-4 text-red-600 dark:text-red-500" />
        </Button>
        
        <Button
          disabled={loading}
          variant="ghost"
          onClick={handleModalEdit}
          className="h-8 w-8 p-0 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
          title="Edit guest"
        >
          <Edit2 className="h-4 w-4 text-amber-600 dark:text-amber-500" />
        </Button>
        
        <Button
          disabled={loading}
          variant="ghost"
          onClick={handleCopy}
          className="h-8 w-8 p-0 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Copy message"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-500" />
          ) : (
            <CopyIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
          )}
        </Button>
        
        <Button
          disabled={loading}
          variant="ghost"
          onClick={handleShareWA}
          className="h-8 w-8 p-0 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
          title="Share via WhatsApp"
        >
          {isShare ? (
            <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-500" />
          ) : (
            <MessageCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
          )}
        </Button>
      </div>
    </div>
  );
};
