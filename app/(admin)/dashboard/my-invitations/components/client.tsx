import { AlertModal } from "@/components/dashboard/AlertModal";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/dashboard/DataTable";
import Heading from "@/components/dashboard/Heading";
import { Plus } from "lucide-react";
import { useState } from "react";
// import { toast } from "react-toastify";
import { columns } from "./columns";
import { InvitationColumn } from "@/types/invitation-column";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";

interface InvitationClientProps {
  data: InvitationColumn[];
}

export const InvitationClient: React.FC<InvitationClientProps> = ({ data }) => {
  const { loading } = useInvitationAdmin();
  const [ids, setIds] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
        <Heading
          title={`Invitations (${data.length})`}
          description="Manage your invitations"
        />
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
