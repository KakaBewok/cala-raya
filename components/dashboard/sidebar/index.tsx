"use client";

import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { 
  CheckCircle, 
  LayoutDashboard, 
  Mail, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  BarChart3
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const { 
    sidebarOpen, 
    setSidebarOpen, 
    sidebarCollapsed, 
    setSidebarCollapsed 
  } = useInvitationAdmin();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (sidebarCollapsed) {
      document.body.classList.add("sidebar-collapsed");
    } else {
      document.body.classList.remove("sidebar-collapsed");
    }
  }, [sidebarCollapsed]);

  if (!mounted) return null;

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen flex-col overflow-y-hidden bg-slate-900 border-r border-slate-800 transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } ${sidebarCollapsed ? "w-20" : "w-72"}`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className={`flex items-center justify-between gap-2 px-6 py-6 lg:py-7 ${sidebarCollapsed ? "justify-center px-2" : ""}`}>
        <div className={`transition-opacity duration-300 ${sidebarCollapsed ? "opacity-0 w-0 hidden" : "opacity-100"}`}>
          <Link href="/dashboard" className="flex items-center gap-1">
            <h1 className="text-xl font-black text-white italic tracking-tighter">
              CALA RAYA
              <span className="text-indigo-500 not-italic ml-1">.</span>
            </h1>
          </Link>
        </div>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="block lg:hidden text-slate-300 hover:text-white"
        >
          <ChevronLeft className="rotate-180" />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        {/* <!-- Sidebar Menu --> */}
        <nav className={`px-4 py-4 mt-5 lg:mt-9 ${sidebarCollapsed ? "px-2" : "lg:px-6"}`}>
          <div>
            {!sidebarCollapsed && (
              <h3 className="mb-4 ml-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                Management
              </h3>
            )}

            <ul className="flex flex-col gap-2 mb-6">
              <li>
                <NavLink
                  url="/dashboard"
                  active={pathname === "/dashboard"}
                >
                  <LayoutDashboard 
                    size={20} 
                    className={pathname === "/dashboard" ? "text-indigo-500" : "text-slate-400 group-hover:text-white"} 
                  />
                  {!sidebarCollapsed && <span>Dashboard</span>}
                </NavLink>
              </li>

              {/* <!-- Invitations --> */}
              <li>
                <NavLink
                  url="/dashboard/my-invitations"
                  active={pathname.startsWith("/dashboard/my-invitations")}
                >
                  <Mail 
                    size={20} 
                    className={pathname.startsWith("/dashboard/my-invitations") ? "text-indigo-500" : "text-slate-400 group-hover:text-white"} 
                  />
                  {!sidebarCollapsed && <span>My Invitations</span>}
                </NavLink>
              </li>
              {/* <!-- Invitations --> */}

              {/* <!-- Share Invitations --> */}
              <li>
                <NavLink
                  url="/dashboard/share-invitations"
                  active={pathname.startsWith("/dashboard/share-invitations")}
                >
                  <Share2 
                    size={20} 
                    className={pathname.startsWith("/dashboard/share-invitations") ? "text-indigo-500" : "text-slate-400 group-hover:text-white"} 
                  />
                  {!sidebarCollapsed && <span>Share Invitations</span>}
                </NavLink>
              </li>
              {/* <!-- Share Invitations --> */}

              {/* <!-- RSVP --> */}
              <li>
                <NavLink
                  url="/dashboard/rsvp"
                  active={pathname.startsWith("/dashboard/rsvp")}
                >
                  <CheckCircle 
                    size={20} 
                    className={pathname.startsWith("/dashboard/rsvp") ? "text-indigo-500" : "text-slate-400 group-hover:text-white"} 
                  />
                  {!sidebarCollapsed && <span>RSVP</span>}
                </NavLink>
              </li>

              {/* <!-- RSVP --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
