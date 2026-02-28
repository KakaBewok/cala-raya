"use client";

import { GuestColumn } from "@/types/guest-column";
import { Guest } from "@/types/invitation-data";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { GuestClient } from "./components/client";
import { useSelectedInvitation } from "@/hooks/use-selected-invitation";
import InvitationData from "@/types/invitation-data";
import GeneralLoading from "@/components/GeneralLoading";
import toast from "react-hot-toast";

const ShareInvitationPage = () => {
  const params = useParams();
  const router = useRouter();
  const { removeInvitationId } = useSelectedInvitation();
  const id = params.id as string;
  const [selectedInvitation, setSelectedInvitation] = useState<InvitationData | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [guests, setGuests] = useState<GuestColumn[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalGuests, setTotalGuests] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const res = await fetch(`/api/invitations/${id}`);
        
        if (res.status === 404) {
          removeInvitationId();
          toast.error("Invitation not found");
          router.replace("/dashboard/share-invitations");
          return;
        }

        if (!res.ok) throw new Error("Failed to fetch");
        
        const data = await res.json();
        setSelectedInvitation(data.invitation);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchInvitation();
  }, [id, removeInvitationId, router]);

  const fetchGuests = useCallback(async (targetPage?: number) => {
    const fetchPage = targetPage ?? page;
    try {
      setLoading(true);
      const res = await fetch(`/api/invitations/${id}/guests?page=${fetchPage}&pageSize=${pageSize}`);
      if (!res.ok) throw new Error("Failed to fetch guests");
      
      const data = await res.json();
      const formatted = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        phone_number: item.phone_number ?? "-",
        address: item.address ?? "-",
        notes: item.notes ?? "-",
      }));
      
      setGuests(formatted);
      setTotalPages(data.totalPages);
      setTotalGuests(data.totalCount);
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to load guests");
    } finally {
      setLoading(false);
    }
  }, [id, page, pageSize]);

  useEffect(() => {
    if (id) {
      fetchGuests();
    }
  }, [id, page, fetchGuests]);

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
        <GuestClient
          guestData={guests}
          selectedInvitation={selectedInvitation}
          currentPage={page}
          totalPages={totalPages}
          totalCount={totalGuests}
          onPageChange={setPage}
          refetchGuests={fetchGuests}
        />
      </div>
    </>
  );
};

export default ShareInvitationPage;
