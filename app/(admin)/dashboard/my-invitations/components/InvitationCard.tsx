import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import BadgeCorner from "@/components/BadgeCorner";

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
          className="h-7 p-0 bg-red-500 w-8 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 cursor-pointer"
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
          disabled={false}
          variant="ghost"
          className="h-7 p-0 w-8 bg-amber-400 hover:bg-amber-500 dark:hover:bg-amber-500 cursor-pointer"
          onClick={() => alert("Edit action is not implemented yet")}
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
          disabled={false}
          variant="ghost"
          className={`h-7 p-0 w-8 bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-pointer`}
          onClick={() => alert("View action is not implemented yet")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="eye"
            className="fill-current"
            width="21"
            height="21"
            fill="none"
          >
            <path
              fill="#F9F9FC"
              d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default InvitationCard;
