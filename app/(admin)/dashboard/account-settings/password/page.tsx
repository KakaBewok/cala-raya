"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import InputError from "@/components/dashboard/InputError";
import { Lock, ShieldCheck, Eye, EyeOff, Loader2} from "lucide-react";

export default function PasswordPage() {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
    setMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessages({
        password_confirmation: "Password confirmation does not match",
      });
      setProcessing(false);
      return;
    }

    try {
      const res = await fetch("/api/user/update-password", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          current_password: currentPassword,
          password: newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Password successfully updated");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        clearMessage(4000);
      } else {
        if (data?.field && data?.message) {
          setErrorMessages({ [data.field]: data.message });
        } else {
          setMessage(data.message || "Failed to update password");
          clearMessage(4000);
        }
      }
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : "An unexpected error occurred");
      clearMessage(4000);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="py-6 px-0 md:p-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 border-none shadow-lg shadow-black/5">
        <CardHeader className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 p-5 md:p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Security Settings
              </CardTitle>
              <CardDescription className="text-slate-500 text-sm mt-1">
                Ensure your account is using a long, random password to stay secure
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* Current Password */}
              <div className="space-y-3">
                <Label htmlFor="current" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Current Password
                </Label>
                <div className="relative group">
                  <Input
                    id="current"
                    type={showCurrent ? "text" : "password"}
                    className="pl-11 pr-11 h-12 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all rounded-xl"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    placeholder="Enter current password"
                  />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                  >
                    {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <InputError message={errorMessages.current_password} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* New Password */}
                <div className="space-y-3">
                  <Label htmlFor="new" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                    New Password
                  </Label>
                  <div className="relative group">
                    <Input
                      id="new"
                      type={showNew ? "text" : "password"}
                      className="pl-11 pr-11 h-12 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all rounded-xl"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      placeholder="Minimum 8 characters"
                    />
                    <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                    >
                      {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <InputError message={errorMessages.password} />
                </div>

                {/* Confirm Password */}
                <div className="space-y-3">
                  <Label htmlFor="confirm" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Confirm New Password
                  </Label>
                  <div className="relative group">
                    <Input
                      id="confirm"
                      type={showConfirm ? "text" : "password"}
                      className="pl-11 pr-11 h-12 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all rounded-xl"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Repeat new password"
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                    >
                      {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <InputError message={errorMessages.password_confirmation} />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex-1 min-h-[24px]">
                {message && (
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold animate-in fade-in slide-in-from-left-2 ${
                    message.toLowerCase().includes("failed") || message.toLowerCase().includes("error")
                      ? "text-rose-600 bg-rose-50 dark:bg-rose-900/20" 
                      : "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20"
                  }`}>
                    {message}
                  </div>
                )}
              </div>
              <Button
                type="submit"
                disabled={processing}
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50 min-w-[180px]"
              >
                {processing ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Updating Security...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Update Password
                  </span>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
