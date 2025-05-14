import { useSelectedInvitation } from "@/hooks/use-selected-invitation";
import { useRouter } from "next/navigation";

export default function ChangeInvitationButton() {
  const { removeInvitationId } = useSelectedInvitation();
  const router = useRouter();

  const handleClick = () => {
    removeInvitationId();
    router.push("/dashboard/share-invitations");
  };

  return (
    <button
      onClick={handleClick}
      className="text-blue-600 underline text-xs md:text-sm cursor-pointer"
    >
      Change Invitation
    </button>
  );
}
