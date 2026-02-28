"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { InvitationForm } from "../../components/InvitationForm";
import InvitationData from "@/types/invitation-data";
import GeneralLoading from "@/components/GeneralLoading";
import toast from "react-hot-toast";

const EditInvitationPage = () => {
  const params = useParams();
  const invitationId = params.id;
  const [invitation, setInvitation] = useState<InvitationData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvitation = async () => {
      if (!invitationId) return;
      
      try {
        setLoading(true);
        const res = await fetch(`/api/invitations/${invitationId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch invitation");
        }
        const data = await res.json();
        setInvitation(data.invitation);
      } catch (error) {
        console.error("Error fetching invitation:", error);
        toast.error("Failed to load invitation data");
      } finally {
        setLoading(false);
      }
    };

    fetchInvitation();
  }, [invitationId]);

  if (loading) {
    return <GeneralLoading />;
  }

  if (!invitation) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Invitation not found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          The invitation you are looking for does not exist or you dont have access.
        </p>
      </div>
    );
  }

  return (
    <InvitationForm
      invitationData={invitation}
      onSuccess={() => {
        toast.success("Invitation updated successfully!");
      }}
    />
  );
};

export default EditInvitationPage;
