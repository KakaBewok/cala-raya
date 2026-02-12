"use client";

import ChangeInvitationButton from "@/components/dashboard/ChangeInvitationButton";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import InvitationData from "@/types/invitation-data";
import { RsvpColumn } from "@/types/rsvp-column";
import { formatDate } from "@/utils/format-date";
import {
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  MessageSquare,
  Filter,
  Search,
  Clock,
  UserCheck,
  UserX,
  Inbox,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useMemo, useState } from "react";

// Helper function to format date
const formatDateTime = (date: Date | string): string => {
  const d = new Date(date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  
  return `${month} ${day}, ${year} at ${hours}:${minutes}`;
};

interface RsvpClientProps {
  rsvpData: RsvpColumn[];
  selectedInvitation?: InvitationData;
}

type FilterType = "all" | "attending" | "not_attending";
type SortType = "newest" | "oldest";

export const RsvpClient: React.FC<RsvpClientProps> = ({
  rsvpData,
  selectedInvitation,
}) => {
  const { invitationAdminData: invitations } = useInvitationAdmin();
  const [filterStatus, setFilterStatus] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortType>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const bridesAndGrooms = `${selectedInvitation?.host_one_nickname} & ${selectedInvitation?.host_two_nickname}`;

  // Get full RSVP data with attendance status
  const fullRsvpData = useMemo(() => {
    return selectedInvitation?.rsvps || [];
  }, [selectedInvitation?.rsvps]);

  // Calculate statistics
  const stats = useMemo(() => {
    const attending = fullRsvpData.filter((r) => r.attendance_status === true);
    const notAttending = fullRsvpData.filter(
      (r) => r.attendance_status === false
    );
    const totalGuests = fullRsvpData.reduce(
      (sum, rsvp) => sum + (rsvp.total_guest || 0),
      0
    );

    return {
      total: fullRsvpData.length,
      attending: attending.length,
      notAttending: notAttending.length,
      totalGuests,
    };
  }, [fullRsvpData]);

  // Filter and sort RSVPs
  const filteredAndSortedRsvps = useMemo(() => {
    let filtered = [...fullRsvpData];

    // Apply status filter
    if (filterStatus === "attending") {
      filtered = filtered.filter((r) => r.attendance_status === true);
    } else if (filterStatus === "not_attending") {
      filtered = filtered.filter((r) => r.attendance_status === false);
    }

    // Apply search
    if (searchQuery.trim()) {
      filtered = filtered.filter((r) =>
        r.guest_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sort
    filtered.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [fullRsvpData, filterStatus, searchQuery, sortBy]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [filterStatus, searchQuery, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedRsvps.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedRsvps = filteredAndSortedRsvps.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title & Info */}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                RSVP & Guest Messages
              </h1>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>{bridesAndGrooms}</span>
                {selectedInvitation?.event_date && (
                  <>
                    <span>•</span>
                    <span>{formatDate(selectedInvitation.event_date)}</span>
                  </>
                )}
              </div>
            </div>

            {/* Change Invitation Button */}
            {invitations.length > 1 && (
              <div className="lg:self-start">
                <ChangeInvitationButton url="/dashboard/rsvp" />
              </div>
            )}
          </div>

          {/* Statistics Cards */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {stats.total}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Total Responses
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-900/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <UserCheck className="w-5 h-5 text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                    {stats.attending}
                  </p>
                  <p className="text-xs text-green-700 dark:text-green-400">
                    Attending
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-900/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <UserX className="w-5 h-5 text-red-600 dark:text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-900 dark:text-red-100">
                    {stats.notAttending}
                  </p>
                  <p className="text-xs text-red-700 dark:text-red-400">
                    Not Attending
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-900/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                    {stats.totalGuests}
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    Total Guests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by guest name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* Filter by Status */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as FilterType)}
              className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Responses</option>
              <option value="attending">Attending Only</option>
              <option value="not_attending">Not Attending</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* RSVP List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Guest Responses ({filteredAndSortedRsvps.length})
            </h2>
            {filteredAndSortedRsvps.length > 0 && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedRsvps.length)} of {filteredAndSortedRsvps.length}
              </p>
            )}
          </div>

          {filteredAndSortedRsvps.length === 0 ? (
            // Empty State
            <div className="py-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
                <Inbox className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {searchQuery || filterStatus !== "all"
                  ? "No responses found"
                  : "No guest responses yet"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                {searchQuery || filterStatus !== "all"
                  ? "Try adjusting your filters or search query"
                  : "Guest responses will appear here once they RSVP to your invitation"}
              </p>
            </div>
          ) : (
            <>
              {/* RSVP Cards */}
              <div className="space-y-3">
                {paginatedRsvps.map((rsvp) => (
                  <div
                    key={rsvp.id}
                    className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        {/* Guest Name & Status */}
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            {rsvp.guest_name}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                              rsvp.attendance_status
                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50"
                                : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/50"
                            }`}
                          >
                            {rsvp.attendance_status ? (
                              <>
                                <CheckCircle className="w-3 h-3" />
                                Attending
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3 h-3" />
                                Not Attending
                              </>
                            )}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                            <Users className="w-3 h-3" />
                            {rsvp.total_guest}{" "}
                            {rsvp.total_guest === 1 ? "guest" : "guests"}
                          </span>
                        </div>

                        {/* Message */}
                        {rsvp.message && (
                          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              "{rsvp.message}"
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Timestamp */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>
                          {formatDateTime(rsvp.created_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {getPageNumbers().map((page, index) => (
                      <button
                        key={index}
                        onClick={() => typeof page === "number" && setCurrentPage(page)}
                        disabled={page === "..."}
                        className={`min-w-[40px] h-10 px-3 text-sm font-medium rounded-lg transition-colors ${
                          page === currentPage
                            ? "bg-indigo-600 text-white dark:bg-indigo-500"
                            : page === "..."
                            ? "text-slate-400 cursor-default"
                            : "text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
