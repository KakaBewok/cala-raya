"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RsvpClient } from "./components/client";
import { RsvpColumn } from "@/types/rsvp-column";
import InvitationData, { RSVP } from "@/types/invitation-data";
import GeneralLoading from "@/components/GeneralLoading";
import toast from "react-hot-toast";

const RsvpInvitationPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [selectedInvitation, setSelectedInvitation] = useState<InvitationData | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [rsvps, setRsvps] = useState<RsvpColumn[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const res = await fetch(`/api/invitations/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSelectedInvitation(data.invitation);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchInvitation();
  }, [id]);

  useEffect(() => {
    const fetchRsvps = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/invitations/${id}/rsvps?page=${page}&pageSize=${pageSize}`);
        if (!res.ok) throw new Error("Failed to fetch rsvps");
        
        const data = await res.json();
        const formatted = data.data.map((item: RSVP) => ({
          id: item.id,
          guest_name: item.guest_name,
          total_guest: item.total_guest,
          message: item.message,
          attendance_status: item.attendance_status,
          created_at: item.created_at,
        }));
        
        setRsvps(formatted);
        setTotalPages(data.totalPages);
        setTotalCount(data.totalCount);
      } catch (err) {
        console.error("Error:", err);
        toast.error("Failed to load rsvps");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRsvps();
    }
  }, [id, page]);

  if (loading && !selectedInvitation) return <GeneralLoading />;

  if (!selectedInvitation) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Invitation not found
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="p-2 pt-6 space-y-7">
        <RsvpClient
          rsvpData={rsvps}
          selectedInvitation={selectedInvitation}
          currentPage={page}
          totalPages={totalPages}
          totalCount={totalCount}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};

export default RsvpInvitationPage;
