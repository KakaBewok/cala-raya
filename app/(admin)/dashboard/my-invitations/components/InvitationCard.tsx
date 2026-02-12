import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import BadgeCorner from "@/components/BadgeCorner";
import Link from "next/link";
import { Trash2, Edit, Eye } from "lucide-react";

const InvitationCard = ({ invitation }: { invitation: InvitationData }) => {
  return (
    <div
      key={invitation.id}
      className="overflow-hidden relative hover:border-purple-600 hover:dark:border-white duration-500 bg-white dark:bg-neutral-900 p-4 rounded-xl border dark:border-neutral-700 cursor-pointer transition-all"
    >
      {invitation.additional_info && (
        <BadgeCorner content={invitation.additional_info} />
      )}
      <h2 className="font-semibold text-lg mb-1">
        {invitation.host_one_nickname} & {invitation.host_two_nickname}
      </h2>
      <p className="text-sm text-gray-500">
        {formatDate(invitation.event_date)}
      </p>
      <Separator className="bg-neutral-300 dark:bg-neutral-700 my-3" />
      {invitation.themes?.name && (
        <span className="absolute bottom-4 left-4 bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-white text-xs font-medium px-2 py-1 rounded">
          {invitation.themes?.name}
        </span>
      )}
      <div className="flex justify-end items-center gap-1">
        <Button
          disabled={false}
          variant="destructive"
          onClick={() => alert("Delete action is not implemented yet")}
          className="h-8 w-8 p-0 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 cursor-pointer rounded-lg"
        >
          <Trash2 className="w-4 h-4 text-white" />
        </Button>

        <Link href={`/dashboard/my-invitations/${invitation.id}/edit`}>
          <Button
            disabled={false}
            variant="ghost"
            className="h-8 w-8 p-0 bg-amber-400 hover:bg-amber-500 dark:hover:bg-amber-500 cursor-pointer rounded-lg"
          >
            <Edit className="w-4 h-4 text-white" />
          </Button>
        </Link>
        <Button
          disabled={false}
          variant="ghost"
          className={`h-8 w-8 p-0 bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-pointer rounded-lg`}
          onClick={() => alert("View action is not implemented yet")}
        >
          <Eye className="w-4 h-4 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default InvitationCard;
