"use client";

import { InvitationForm } from "../components/InvitationForm";

const CreateInvitationPage = () => {

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Invitation</h1>
        <p className="text-gray-500">Fill in the details to create your digital wedding invitation.</p>
      </div>
      
      <InvitationForm
        onSuccess={() => {
          // Success behavior (redirect & toast) is now handled inside InvitationForm
        }}
      />
    </div>
  );
};

export default CreateInvitationPage;
