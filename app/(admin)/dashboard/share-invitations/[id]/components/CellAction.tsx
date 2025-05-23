"use client";

import { AlertModal } from "@/components/dashboard/AlertModal";
import { Button } from "@/components/ui/button";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { GuestColumn } from "@/types/guest-column";
import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";
import { encode } from "@/utils/hash";
import { CheckIcon, CopyIcon, MessageCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export const CellAction = ({ data }: { data: GuestColumn }) => {
  const params = useParams();
  const id = params.id as string;
  const { loading, invitationAdminData: invitations } = useInvitationAdmin();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isShare, setIsShare] = useState<boolean>(false);

  const selectedInvitation = invitations.find(
    (invitation) => invitation.id === Number(id)
  );

  //   const handleDeleteId = (e?: React.MouseEvent<HTMLButtonElement>) => {
  //     e?.stopPropagation();

  //     setLoading(true);
  //     router.delete(route("admin.category.destroy", data.id), {
  //       onSuccess: () => {
  //         toast.success("Data deleted.", {
  //           position: "top-center",
  //         }),
  //           setModalOpen(false);
  //       },
  //       onError: (error) => console.log("An error occurred: ", error),
  //       onFinish: () => setLoading(false),
  //     });
  //   };

  //   const handleEditProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.stopPropagation();

  //     setLoading(true);
  //     router.get(
  //       route("admin.category.edit", data.id),
  //       {},
  //       {
  //         onFinish: () => setLoading(false),
  //       }
  //     );
  //   };

  //   const handleShowDetailsCategory = (
  //     e: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     e.stopPropagation();

  //     setLoading(true);
  //     router.get(
  //       route("admin.category.show", data.id),
  //       {},
  //       {
  //         onFinish: () => setLoading(false),
  //       }
  //     );
  //   };

  //   const handleModalDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.stopPropagation();
  //     setModalOpen(true);
  //   };

  //

  const generateUrl = () => {
    if (!selectedInvitation?.id || !data.id) return null;
    const token = encode([selectedInvitation?.id, data.id]);
    return `${selectedInvitation?.web_url}/${selectedInvitation?.slug}?id=${token}`;
  };

  const applyTemplate = (template: string, data: Record<string, string>) => {
    return Object.entries(data).reduce((result, [key, value]) => {
      return result.replace(new RegExp(`{${key}}`, "g"), value);
    }, template);
  };

  const generateMessage = () => {
    if (!selectedInvitation) return "Template not found";

    const template =
      selectedInvitation.message_template || "Please create a message template";

    const rundown = selectedInvitation.rundowns?.[0];

    const dataMap: Record<string, string> = {
      guest_name: data.name,
      event_title: selectedInvitation.event_title ?? "-",
      event_date: formatDate(selectedInvitation.event_date || "") ?? "-",
      start_time: formatTime(rundown?.start_time || "") ?? "-",
      end_time: formatTime(rundown?.end_time || "") ?? "-",
      time_zone: rundown?.time_zone ?? "-",
      location: selectedInvitation.location ?? "-",
      url: generateUrl() ?? "-",
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
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 6000);
  };

  const temp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert("This feature is not available yet.");
  };

  return (
    <div>
      <AlertModal
        isOpen={modalOpen}
        onClose={(e) => {
          e?.stopPropagation();
          setModalOpen(false);
        }}
        onConfirm={() => temp}
        loading={loading}
        description="All data under this guests will also be deleted."
      />
      <div className="flex items-center gap-1">
        <Button
          disabled={loading}
          variant="destructive"
          onClick={temp}
          className="h-8 p-0 bg-red-500 w-9 hover:bg-red-600 cursor-pointer"
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
          className="h-8 p-0 w-9 bg-amber-400 hover:bg-amber-500  cursor-pointer"
          onClick={temp}
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
          className={`h-8 p-0 w-9 bg-sky-500 hover:bg-sky-600 cursor-pointer`}
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
          className={`h-8 p-0 w-9 bg-green-500 hover:bg-green-600 cursor-pointer`}
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
