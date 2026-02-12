"use client";

import { InvitationForm } from "../components/InvitationForm";
import { useRouter } from "next/navigation";

const CreateInvitationPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Invitation</h1>
        <p className="text-gray-500">Fill in the details to create your digital wedding invitation.</p>
      </div>
      
      <InvitationForm
        onSuccess={() => {
          // In a real scenario, we might want to redirect to the edit page of the newly created invitation
          // For now, redirect to the list
          router.push("/dashboard/my-invitations");
        }}
      />
    </div>
  );
};

export default CreateInvitationPage;
