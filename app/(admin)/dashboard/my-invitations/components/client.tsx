import { AlertModal } from "@/Components/AlertModal";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/Components/ui/data-table";
import { Heading } from "@/components/dashboard/Heading";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { columns } from "./columns";
import { InvitationColumn } from "@/types/invitation-column";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";

interface InvitationClientProps {
  data: InvitationColumn[];
}

export const InvitationClient: React.FC<InvitationClientProps> = ({ data }) => {
  const { loading, setLoading } = useInvitationAdmin();
  const [ids, setIds] = useState<string[]>([""]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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

  const openDeleteModal = (ids: string[]) => {
    setIds(ids);
    setModalOpen(true);
  };

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

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Invitations (${data.length})`}
          description="Manage your invitations"
        />
        <Button
          //   onClick={handleCreateCategory}
          variant="outline"
          className="dark:bg-slate-200"
        >
          <Plus className="w-4 h-4 dark:text-slate-900" />
        </Button>
      </div>
      <AlertModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        // onConfirm={handleDeleteIds}
        loading={loading}
        description="All data under this invitation will also be deleted."
      />
      <DataTable
        onDelete={openDeleteModal}
        searchKey="event_title"
        columns={columns}
        data={data}
      />
    </>
  );
};
