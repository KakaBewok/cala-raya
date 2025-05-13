import { AlertModal } from "@/components/dashboard/AlertModal";
import { DataTable } from "@/components/dashboard/DataTable";
import Heading from "@/components/dashboard/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
// import { toast } from "react-toastify";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { GuestColumn } from "@/types/guest-column";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import ChangeInvitationButton from "./ChangeInvitationButton";
import { columns } from "./columns";

interface GuestClientProps {
  guestData: GuestColumn[];
  selectedInvitation?: InvitationData;
}
export const InvitationClient: React.FC<GuestClientProps> = ({
  guestData,
  selectedInvitation,
}) => {
  const { loading, invitationAdminData: invitations } = useInvitationAdmin();
  const [ids, setIds] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const bridesAndGrooms = `${selectedInvitation?.host_one_nickname} & ${selectedInvitation?.host_two_nickname}`;

  console.log("ids: ", ids);

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

  //   const handleCreateCategory = () => {
  //     setLoading(true);
  //     router.get(
  //       route("admin.category.create"),
  //       {},
  //       {
  //         onFinish: () => setLoading(false),
  //       }
  //     );
  //   };

  const openDeleteModal = (ids: number[]) => {
    setIds(ids);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
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
        <Button
          onClick={() => alert("This feature is not available yet.")}
          variant="outline"
          className="dark:bg-slate-200"
        >
          <Plus className="w-4 h-4 dark:text-slate-900" />
        </Button>
      </div>

      <AlertModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => alert("This feature is not available yet.")}
        loading={loading}
        description="All data under this guests will also be deleted."
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
