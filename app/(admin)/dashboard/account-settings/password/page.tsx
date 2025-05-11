"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import HeadingSmall from "@/components/dashboard/HeadingSmall";
import InputError from "@/components/dashboard/InputError";

export default function PasswordPage() {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<{
    current_password?: string;
    password?: string;
    password_confirmation?: string;
  }>({});
  const [message, setMessage] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);

  const clearMessage = (duration: number) => {
    setTimeout(() => {
      setMessage("");
    }, duration);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setErrorMessages({});

    if (newPassword !== confirmPassword) {
      setErrorMessages({
        password_confirmation: "Password confirmation does not match",
      });
      setProcessing(false);
      return;
    }

    const res = await fetch("/api/user/update-password", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        current_password: currentPassword,
        password: newPassword,
      }),
    });

    if (res.ok) {
      setMessage("Password updated");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      clearMessage(3000);
    } else {
      const error = await res.json();
      if (error?.field && error?.message) {
        setErrorMessages({ [error.field]: error.message });
      } else {
        setMessage("Failed to update password");
        clearMessage(3000);
      }
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-9 p-6 max-w-2xl mx-auto">
      <HeadingSmall
        title="Update password"
        description="Ensure your account is using a long, random password to stay secure"
      />
      <div className="space-y-5">
        <div>
          <Label htmlFor="current" className="mb-2">
            Current Password
          </Label>
          <Input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            id="current"
            type="password"
            required
          />
          <InputError message={errorMessages.current_password} />
        </div>
        <div>
          <Label htmlFor="new" className="mb-2">
            New Password
          </Label>
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            id="new"
            type="password"
            required
          />
          <InputError message={errorMessages.password} />
        </div>
        <div>
          <Label htmlFor="confirm" className="mb-2">
            Confirm New Password
          </Label>
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirm"
            type="password"
            required
          />
          <InputError message={errorMessages.password_confirmation} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={processing} className="cursor-pointer">
          {processing ? "Updating..." : "Change Password"}
        </Button>
        {message && <p className="text-sm text-green-600">{message}</p>}
      </div>
    </form>
  );
}
