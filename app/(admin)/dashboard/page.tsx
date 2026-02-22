"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { TutorialModal } from "@/components/dashboard/tutorial/TutorialModal";
import {
  Mail,
  Users,
  MessageSquare,
  UserCheck,
  UserX,
  Calendar,
  Plus,
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
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const { invitationAdminData: invitations, globalStats } = useInvitationAdmin();

  // Calculate accurate statistics from global database state
  const stats = useMemo(() => {
    if (globalStats) {
      return {
        ...globalStats,
        // Ensure responseRate is calculated for display
        responseRate: globalStats.totalGuests > 0 
          ? (globalStats.totalRsvps / globalStats.totalGuests) * 100 
          : 0
      };
    }

    // Default values while loading or if data is missing
    return {
      totalInvitations: 0,
      totalGuests: 0,
      totalRsvps: 0,
      attending: 0,
      notAttending: 0,
      totalGuestsAttending: 0,
      responseRate: 0
    };
  }, [globalStats]);

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
      .sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime())
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
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/my-invitations"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-purple-500/20 text-sm font-semibold"
            >
              <Plus className="w-4 h-4" />
              New Invitation
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Mail className="w-5 h-5 text-blue-600" />}
          label="Total Invitations"
          value={stats.totalInvitations}
          trend="+2 New"
          trendColor="text-blue-600"
          bgColor="bg-blue-50 dark:bg-blue-900/20"
        />
        <StatCard
          icon={<Users className="w-5 h-5 text-purple-600" />}
          label="Total Guests"
          value={stats.totalGuests}
          trend="+12 this week"
          trendColor="text-purple-600"
          bgColor="bg-purple-50 dark:bg-purple-900/20"
        />
        <StatCard
          icon={<MessageSquare className="w-5 h-5 text-emerald-600" />}
          label="RSVP Responses"
          value={stats.totalRsvps}
          trend={`${Math.round(stats.responseRate)}% rate`}
          trendColor="text-emerald-600"
          bgColor="bg-emerald-50 dark:bg-emerald-900/20"
        />
        <StatCard
          icon={<Clock className="w-5 h-5 text-amber-600" />}
          label="Active Directs"
          value={stats.totalInvitations}
          trend="Currently live"
          trendColor="text-amber-600"
          bgColor="bg-amber-50 dark:bg-amber-900/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats Detail */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                RSVP Breakdown
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Attending</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{stats.attending}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center">
                  <UserX className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Not Attending</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{stats.notAttending}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Total Guest Seats</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{stats.totalGuestsAttending}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Recent RSVP Activity</h3>
              <Link href="/dashboard/rsvp" className="text-xs font-semibold text-purple-600 hover:text-purple-700">
                View All
              </Link>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentRsvps.length > 0 ? (
                recentRsvps.map((rsvp: any) => (
                  <div key={rsvp.id} className="p-4 md:p-6 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      rsvp.attendance_status 
                        ? "bg-emerald-100 text-emerald-600" 
                        : "bg-rose-100 text-rose-600"
                    }`}>
                      {rsvp.attendance_status ? <UserCheck className="w-5 h-5" /> : <UserX className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                          {rsvp.guest_name}
                        </p>
                        <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDateTime(rsvp.created_at)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-2 truncate">
                        {rsvp.coupleNames} · {rsvp.attendance_status ? `Bringing ${rsvp.total_guest} guests` : "Declined"}
                      </p>
                      {rsvp.message && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700 italic line-clamp-2">
                          "{rsvp.message}"
                        </p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-10 text-center">
                  <Inbox className="w-10 h-10 text-slate-200 mx-auto mb-3" />
                  <p className="text-sm text-slate-400">No RSVP activities yet</p>
                  <Link href="/dashboard/share-invitations" className="text-xs text-purple-600 font-semibold mt-2 inline-block">
                    Start sharing your invitations
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar area */}
        <div className="space-y-6">
          {/* Active Invitations */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Active Invitations</h3>
            </div>
            <div className="p-2 space-y-1">
              {activeInvitations.length > 0 ? (
                activeInvitations.map((invitation: any) => (
                  <Link
                    key={invitation.id}
                    href={`/dashboard/my-invitations`}
                    className="flex flex-col p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">
                        {invitation.themes?.name || "Premium"}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {formatDate(invitation.event_date)}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-purple-600 transition-colors">
                      {invitation.host_one_nickname} & {invitation.host_two_nickname}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                          <Users className="w-3 h-3" />
                          {(invitation as any).guests?.length || 0}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                          <MessageSquare className="w-3 h-3" />
                          {(invitation as any).rsvps?.length || 0}
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center">
                  <Calendar className="w-8 h-8 text-slate-200 mx-auto mb-2" />
                  <p className="text-xs text-slate-400">No active invitations</p>
                </div>
              )}
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/dashboard/my-invitations"
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-purple-600 transition-colors"
              >
                Manage All Invitations
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-purple-500/20">
            <h4 className="font-bold mb-2">Need Help?</h4>
            <p className="text-xs text-purple-100 mb-4 leading-relaxed">
              Check out our tutorial on how to customize your invitations and manage guest lists effectively.
            </p>
            <button 
              onClick={() => setIsTutorialOpen(true)}
              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold py-2.5 rounded-xl transition-colors border border-white/20"
            >
              View Tutorials
            </button>
          </div>
        </div>
      </div>

      {/* Tutorial Modal */}
      <TutorialModal isOpen={isTutorialOpen} onClose={() => setIsTutorialOpen(false)} />
    </div>
  );
};

// Sub-component for individual stat cards
const StatCard = ({ icon, label, value, trend, trendColor, bgColor }: any) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm p-4 md:p-6 transition-all hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center`}>
          {icon}
        </div>
        <div className={`text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 ${trendColor}`}>
          {trend}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</h3>
      </div>
    </div>
  );
};

export default DashboardPage;
