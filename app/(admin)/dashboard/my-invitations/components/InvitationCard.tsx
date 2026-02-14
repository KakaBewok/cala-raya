"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import InvitationData from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import BadgeCorner from "@/components/BadgeCorner";
import Link from "next/link";
import { Trash2, Edit, Eye, Share2, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface InvitationCardProps {
  invitation: InvitationData;
  onDelete?: () => void;
}

const InvitationCard = ({ invitation, onDelete }: InvitationCardProps) => {
  const router = useRouter();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/delete-invitation`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: invitation.id }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete invitation");
      }

      toast.success("Invitation deleted successfully");
      setDeleteDialogOpen(false);
      
      // Call onDelete callback if provided
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error("Error deleting invitation:", error);
      toast.error("Failed to delete invitation");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleView = () => {
    if (invitation.web_url && invitation.slug) {
      const url = `${invitation.web_url}/${invitation.slug}`;
      window.open(url, "_blank");
    } else {
      toast.error("Invitation URL not available");
    }
  };

  const handleShare = () => {
    router.push(`/dashboard/share-invitations/${invitation.id}`);
  };

  return (
    <>
      <div className="overflow-hidden relative hover:shadow-lg bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 group">
        {invitation.additional_info && (
          <BadgeCorner content={invitation.additional_info} />
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              invitation.is_active
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            {invitation.is_active ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Content */}
        <div className="mb-4 pr-20">
          <h2 className="font-bold text-lg mb-1 text-slate-900 dark:text-slate-100">
            {invitation.host_one_nickname} & {invitation.host_two_nickname}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            {formatDate(invitation.event_date)}
          </p>
          {invitation.event_title && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              {invitation.event_title}
            </p>
          )}
        </div>

        <Separator className="bg-slate-200 dark:bg-slate-700 my-3" />

        {/* Theme Badge */}
        {invitation.themes?.name && (
          <div className="mb-3">
            <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 text-xs font-medium px-2.5 py-1 rounded-md">
              {invitation.themes.name}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleView}
            className="h-8 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Preview invitation"
          >
            <Eye className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="h-8 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Share invitation"
          >
            <Share2 className="w-4 h-4" />
          </Button>

          <Link href={`/dashboard/my-invitations/${invitation.id}/edit`}>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Edit invitation"
            >
              <Edit className="w-4 h-4" />
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDeleteDialogOpen(true)}
            className="h-8 px-3 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20 transition-colors"
            title="Delete invitation"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the invitation for{" "}
              <span className="font-semibold">
                {invitation.host_one_nickname} & {invitation.host_two_nickname}
              </span>
              . This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default InvitationCard;
