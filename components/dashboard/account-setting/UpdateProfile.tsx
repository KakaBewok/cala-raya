import HeadingSmall from "@/components/dashboard/HeadingSmall";
import InputError from "@/components/dashboard/InputError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@/types/invitation-data";
import { useState } from "react";

const UpdateProfile = ({ user }: { user: User | null }) => {
  const [name, setName] = useState<string | undefined>(user?.name);
  const [email, setEmail] = useState<string | undefined>(user?.email);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [processing, setProcessing] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const clearMessage = (duration: number) => {
    setTimeout(() => {
      setMessage("");
    }, duration);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});
    setMessage("");

    const res = await fetch("/api/user/update-profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrors(data.error || {});
      setMessage(data.message || "Failed to update");
      clearMessage(3000);
    } else {
      setMessage(data.message || "Profile updated successfully");
      clearMessage(3000);
    }

    setProcessing(false);
  };

  return (
    <div className="space-y-6">
      <HeadingSmall
        title="Profile information"
        description="Update your name and email address"
      />

      <form onSubmit={submit} className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            className="mt-1 block w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            placeholder="Full name"
          />
          <InputError className="mt-2" message={errors.name} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="Email address"
          />
          <InputError className="mt-2" message={errors.email} />
        </div>

        <div className="flex items-center gap-4">
          <Button
            type="submit"
            disabled={processing}
            className="cursor-pointer"
          >
            {processing ? "Saving..." : "Save"}
          </Button>
          {message && <p className="text-sm text-green-600">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
