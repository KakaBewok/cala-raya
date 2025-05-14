import { AlertModal } from "@/components/dashboard/AlertModal";
import { DataTable } from "@/components/dashboard/DataTable";
import { ExcelUploadModal } from "@/components/dashboard/ExcelUploadModal";
import { GuestInputModal } from "@/components/dashboard/GuestInputModal";
import Heading from "@/components/dashboard/Heading";
import { TooltipHover } from "@/components/Tooltip";
import { Button } from "@/components/ui/button";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { GuestColumn } from "@/types/guest-column";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import { Plus, Upload } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ChangeInvitationButton from "./ChangeInvitationButton";
import { columns } from "./Columns";

interface GuestClientProps {
  guestData: GuestColumn[];
  selectedInvitation?: InvitationData;
}
export const GuestClient: React.FC<GuestClientProps> = ({
  guestData,
  selectedInvitation,
}) => {
  const {
    loading,
    setLoading,
    invitationAdminData: invitations,
    refetchInvitations,
  } = useInvitationAdmin();
  const [ids, setIds] = useState<number[]>([]);
  const [alertModalOpen, setAlertModalOpen] = useState<boolean>(false);
  const [guestInputModalOpen, setGuestInputModalOpen] =
    useState<boolean>(false);
  const [excelUploadModalOpen, setExcelUploadModalOpen] =
    useState<boolean>(false);

  const bridesAndGrooms = `${selectedInvitation?.host_one_nickname} & ${selectedInvitation?.host_two_nickname}`;

  console.log("testids: ", ids);

  // const handleDeleteIds = () => {
  //     setLoading(true);
  //     router.post(
  //         route("admin.category.destroy-bulk", { ids }),
  //         {},
  //         {
  //             onSuccess: () => {
  //                 router.visit(route("admin.category.index")),
  //                     setTimeout(() => {
  //                         toast.success("Data deleted.", {
  //                             position: "top-center",
  //                         });
  //                     }, 1000);
  //             },
  //             onError: (error) => console.log("An error occurred: ", error),
  //             onFinish: () => setLoading(false),
  //         }
  //     );
  // };

  const openDeleteModal = (ids: number[]) => {
    setIds(ids);
    setAlertModalOpen(true);
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

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Heading
            title={`Guests List (${guestData?.length ?? 0})`}
            description={`${bridesAndGrooms} - ${
              selectedInvitation?.event_date
                ? formatDate(selectedInvitation.event_date)
                : ""
            }`}
          />
          {invitations.length > 1 && <ChangeInvitationButton />}
        </div>
        <div className="flex items-center gap-2">
          <TooltipHover message="Upload Guests List">
            <Button
              onClick={() => setExcelUploadModalOpen(true)}
              variant="outline"
              className="dark:bg-slate-200 cursor-pointer"
            >
              <Upload className="w-4 h-4 dark:text-slate-900" />
            </Button>
          </TooltipHover>
          <TooltipHover message="Input Guests Manually">
            <Button
              onClick={() => setGuestInputModalOpen(true)}
              variant="outline"
              className="dark:bg-slate-200 cursor-pointer"
            >
              <Plus className="w-4 h-4 dark:text-slate-900" />
            </Button>
          </TooltipHover>
        </div>
      </div>

      <AlertModal
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => alert("This feature is not available yet.")}
        loading={loading}
        description="All data under this guests will also be deleted."
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
        onUpload={() => alert("This feature is not available yet.")}
        loading={loading}
      />
      <DataTable
        onDelete={openDeleteModal}
        searchKey="name"
        columns={columns}
        data={guestData}
      />
    </>
  );
};
