"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useEffect, useState } from "react";
import GeneralLoading from "@/components/GeneralLoading";
import InvitationCard from "./components/InvitationCard";
import { Plus, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const InvitationPage = () => {
  const { 
    invitationAdminData: invitations, 
    refetchInvitations,
    totalInvitations,
    currentPage,
    setCurrentPage,
    pageSize
  } = useInvitationAdmin();
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  const totalPages = Math.ceil(totalInvitations / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleInvitationDeleted = () => {
    // Refresh the invitation list after deletion
    refetchInvitations();
  };

  if (!shouldRender) {
    return <GeneralLoading />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            My Invitations
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Manage your digital invitations ({totalInvitations})
          </p>
        </div>
        <Link href="/dashboard/my-invitations/create">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95">
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      {/* Invitations Grid */}
      {!invitations || invitations.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-slate-400 dark:text-slate-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
            No invitations yet
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-6 max-w-md">
            Create your first digital invitation to get started
          </p>
          <Link href="/dashboard/my-invitations/create">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Invitation
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invitations.map((invitation) => (
              <InvitationCard
                key={invitation.id}
                invitation={invitation}
                onDelete={handleInvitationDeleted}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing <span className="font-medium">{Math.min((currentPage - 1) * pageSize + 1, totalInvitations)}</span> to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * pageSize, totalInvitations)}
                </span>{" "}
                of <span className="font-medium">{totalInvitations}</span> invitations
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                
                <div className="hidden sm:flex items-center px-4 h-9 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  PAGE {currentPage} / {totalPages}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InvitationPage;

