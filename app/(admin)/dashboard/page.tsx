"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import {
  Mail,
  Users,
  MessageSquare,
  UserCheck,
  UserX,
  Calendar,
  Plus,
  Share2,
  Eye,
  TrendingUp,
  Clock,
  Inbox,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/utils/format-date";

// Helper function to format date time
const formatDateTime = (date: Date | string): string => {
  const d = new Date(date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[d.getMonth()];
  const day = d.getDate();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  
  return `${month} ${day} at ${hours}:${minutes}`;
};

const DashboardPage = () => {
  const { data: session } = useSession();
  const { invitationAdminData: invitations } = useInvitationAdmin();

  // Calculate statistics
  const stats = useMemo(() => {
    const totalInvitations = invitations.length;
    const totalGuests = invitations.reduce(
      (sum, inv) => sum + (inv.guests?.length || 0),
      0
    );
    const allRsvps = invitations.flatMap((inv) => inv.rsvps || []);
    const totalRsvps = allRsvps.length;
    const attending = allRsvps.filter((r) => r.attendance_status === true).length;
    const notAttending = allRsvps.filter((r) => r.attendance_status === false).length;
    const totalGuestsAttending = allRsvps
      .filter((r) => r.attendance_status === true)
      .reduce((sum, r) => sum + (r.total_guest || 0), 0);

    return {
      totalInvitations,
      totalGuests,
      totalRsvps,
      attending,
      notAttending,
      totalGuestsAttending,
    };
  }, [invitations]);

  // Get recent RSVPs (last 5)
  const recentRsvps = useMemo(() => {
    const allRsvps = invitations.flatMap((inv) =>
      (inv.rsvps || []).map((rsvp) => ({
        ...rsvp,
        invitationId: inv.id,
        eventTitle: inv.event_title,
        coupleNames: `${inv.host_one_nickname} & ${inv.host_two_nickname}`,
      }))
    );

    return allRsvps
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 5);
  }, [invitations]);

  // Get active invitations
  const activeInvitations = useMemo(() => {
    return invitations
      .filter((inv) => inv.is_active)
      .sort((a, b) => new Date(b.activated_at || 0).getTime() - new Date(a.activated_at || 0).getTime())
      .slice(0, 3);
  }, [invitations]);

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Dashboard Overview
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Welcome back, {session?.user?.name || "User"}
            </p>
          </div>
          <Link
            href="/dashboard/my-invitations/create"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors shadow-md active:scale-95"
          >
            <Plus className="w-5 h-5" />
            <span>Create Invitation</span>
          </Link>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Invitations */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Invitations
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                {stats.totalInvitations}
              </p>
            </div>
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
              <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
        </div>

        {/* Total Guests */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Guests
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                {stats.totalGuests}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        {/* Total RSVP Responses */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                RSVP Responses
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                {stats.totalRsvps}
              </p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        {/* Attending */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Attending
              </p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-500 mt-2">
                {stats.attending}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                {stats.totalGuestsAttending} total guests
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <UserCheck className="w-6 h-6 text-green-600 dark:text-green-500" />
            </div>
          </div>
        </div>

        {/* Not Attending */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Not Attending
              </p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-500 mt-2">
                {stats.notAttending}
              </p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
              <UserX className="w-6 h-6 text-red-600 dark:text-red-500" />
            </div>
          </div>
        </div>

        {/* Response Rate */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Response Rate
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                {stats.totalGuests > 0
                  ? Math.round((stats.totalRsvps / stats.totalGuests) * 100)
                  : 0}
                %
              </p>
            </div>
            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
              <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent RSVP Activity */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Recent RSVP Activity
              </h2>
              <Link
                href="/dashboard/rsvp"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-6">
            {recentRsvps.length === 0 ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full mb-3">
                  <Inbox className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  No RSVP responses yet
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentRsvps.map((rsvp) => (
                  <div
                    key={rsvp.id}
                    className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {rsvp.guest_name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                        {rsvp.coupleNames}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                            rsvp.attendance_status
                              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                              : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                          }`}
                        >
                          {rsvp.attendance_status ? "Attending" : "Not Attending"}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDateTime(rsvp.created_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active Invitations */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Active Invitations
              </h2>
              <Link
                href="/dashboard/my-invitations"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-6">
            {activeInvitations.length === 0 ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full mb-3">
                  <Mail className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  No active invitations
                </p>
                <Link
                  href="/dashboard/my-invitations/create"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Create Your First Invitation
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {activeInvitations.map((invitation) => (
                  <div
                    key={invitation.id}
                    className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                          {invitation.host_one_nickname} & {invitation.host_two_nickname}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-slate-600 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formatDate(invitation.event_date)}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                          <span className="text-xs text-slate-500 dark:text-slate-500">
                            {invitation.guests?.length || 0} guests
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-500">
                            {invitation.rsvps?.length || 0} RSVPs
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/dashboard/my-invitations/${invitation.id}/edit`}
                          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        </Link>
                        <Link
                          href={`/dashboard/share-invitations/${invitation.id}`}
                          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                          title="Share"
                        >
                          <Share2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/dashboard/my-invitations/create"
            className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-900/50 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors group"
          >
            <div className="p-2 bg-indigo-600 dark:bg-indigo-500 rounded-lg">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                Create Invitation
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/my-invitations"
            className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
          >
            <div className="p-2 bg-slate-600 dark:bg-slate-500 rounded-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                My Invitations
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/rsvp"
            className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
          >
            <div className="p-2 bg-slate-600 dark:bg-slate-500 rounded-lg">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                View RSVPs
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/share-invitations"
            className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
          >
            <div className="p-2 bg-slate-600 dark:bg-slate-500 rounded-lg">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Share Invitation
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
