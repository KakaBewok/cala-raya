"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  invitationFormSchema,
  InvitationFormData,
} from "../schema/FormSchema";
import InvitationData from "@/types/invitation-data";
import { useRouter } from "next/navigation";
import { 
  Save, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Clock, 
  Image as ImageIcon, 
  Music, 
  Sparkles, 
  Settings,
  AlertTriangle
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useInvitationAdmin } from "@/hooks/use-invitation-admin";
import toast from "react-hot-toast";

// Sections
import CoupleSection from "./form-sections/CoupleSection";
import RundownSection from "./form-sections/RundownSection";
import GallerySection from "./form-sections/GallerySection";
import MusicSection from "./form-sections/MusicSection";
import AdditionalSection from "./form-sections/AdditionalSection";
import SettingsSection from "./form-sections/SettingsSection";

interface InvitationFormProps {
  invitationData?: InvitationData;
  onSuccess?: () => void;
}

export function InvitationForm({
  invitationData,
  onSuccess,
}: InvitationFormProps) {
  const { refetchInvitations, setCurrentPage } = useInvitationAdmin();
  const router = useRouter();
  const { data: session } = useSession();
  const userRole = session?.user?.role || "USER";
  const isEditMode = !!invitationData;
  const [activeTab, setActiveTab] = useState<string>("couple");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Initialize form with default values or existing data
  const form = useForm<InvitationFormData>({
    resolver: zodResolver(invitationFormSchema),
    defaultValues: isEditMode
      ? {
          host_one_name: invitationData.host_one_name || "",
          host_one_nickname: invitationData.host_one_nickname || "",
          host_one_additional_info: invitationData.host_one_additional_info || "",
          host_one_social_media: invitationData.host_one_social_media || "",
          host_two_name: invitationData.host_two_name || "",
          host_two_nickname: invitationData.host_two_nickname || "",
          host_two_additional_info: invitationData.host_two_additional_info || "",
          host_two_social_media: invitationData.host_two_social_media || "",
          hashtag: invitationData.hashtag || "",
          themes: invitationData.themes || { name: "default" },
          web_url: process.env.NEXT_PUBLIC_APP_URL_PROD!,
          music: invitationData.music ? { 
            title: invitationData.music.title || "", 
            artist: invitationData.music.artist || "", 
            url: invitationData.music.url || "" 
          } : { title: "", artist: "", url: "" },
          images: (invitationData.images || []).map((img) => ({
            url: img.url,
            type: img.type as any,
            order_number: img.order_number ? Number(img.order_number) : undefined,
          })),
          rundowns: (invitationData.rundowns || []).map((r) => ({
            title: r.title,
            location: r.location,
            location_detail: r.location_detail || undefined,
            location_url: r.location_url || "",
            date: r.date,
            start_time: r.start_time,
            end_time: r.end_time || undefined,
            time_zone: r.time_zone,
            order_number: r.order_number,
          })),
          gift_infos: (invitationData.gift_infos || []).map((g) => ({
            provider_name: g.provider_name,
            account_number: g.account_number,
            account_holder: g.account_holder,
            gift_delivery_address: g.gift_delivery_address || undefined,
          })),
          stories: (invitationData.stories || []).map((s) => ({
            title: s.title,
            content: s.content,
            image_url: s.image_url,
            story_date: s.story_date,
            order_number: s.order_number,
          })),
          // Pre-fill user_id so admin doesn't have to re-select the owner
          user_id: invitationData.user_id ?? invitationData.user?.id ?? undefined,
        }
      : {
          host_one_name: "",
          host_one_nickname: "",
          host_one_additional_info: "",
          host_one_social_media: "",
          host_two_name: "",
          host_two_nickname: "",
          host_two_additional_info: "",
          host_two_social_media: "",
          hashtag: "",
          themes: { name: "default" },
          web_url: `${process.env.NEXT_PUBLIC_APP_URL_PROD!}`,
          music: { title: "", artist: "", url: "" },
          images: [],
          rundowns: [],
          gift_infos: [],
          stories: [],
        },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: InvitationFormData) => {
    setIsSubmitting(true);
    try {
      if (isEditMode && !invitationData?.id) {
        throw new Error("Unable to save: Invitation ID is missing.");
      }

      const url = isEditMode ? `/api/invitations/${invitationData.id}` : "/api/invitations";
      const method = isEditMode ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to save invitation");
      }

      const result = await response.json();
      onSuccess?.();
      
      // Refresh list to show new/updated data
      await refetchInvitations();
      
      if (!isEditMode) {
        toast.success("Invitation published successfully!");
        setCurrentPage(1); // Go to first page to see the newest
      } else {
        toast.success("Changes saved successfully");
      }
      
      // Always redirect to list after success (both create and edit)
      router.push("/dashboard/my-invitations");
      
    } catch (error: any) {
      console.error("Error saving invitation:", error);
      toast.error(error.message || "An error occurred while saving.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: "couple", label: "Couple", icon: <Heart className="w-4 h-4" /> },
    { id: "rundown", label: "Rundown", icon: <Clock className="w-4 h-4" /> },
    { id: "gallery", label: "Gallery", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "music", label: "Music", icon: <Music className="w-4 h-4" /> },
    { id: "additional", label: "Additional", icon: <Sparkles className="w-4 h-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
  ];

  // Check if a tab has validation errors
  const hasTabErrors = (tabId: string): boolean => {
    const errorKeys = Object.keys(errors);
    
    switch (tabId) {
      case "couple":
        return errorKeys.some(key => 
          key.startsWith("host_one_") || key.startsWith("host_two_")
        );
      case "rundown":
        return errorKeys.includes("rundowns");
      case "gallery":
        return errorKeys.includes("images");
      case "music":
        return errorKeys.includes("music");
      case "additional":
        return errorKeys.some(key => key === "gift_infos" || key === "stories");
      case "settings":
        return errorKeys.some(key => key === "hashtag" || key === "themes");
      default:
        return false;
    }
  };

  const currentIndex = tabs.findIndex(t => t.id === activeTab);

  const nextTab = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevTab = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-20">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Tab-Based Navigation */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border shadow-sm overflow-hidden">
          {/* Horizontal Tabs */}
          <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex min-w-max px-4 md:px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-4 md:px-6 py-4 text-sm font-semibold transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <span className={`transition-colors ${
                      activeTab === tab.id 
                        ? "text-indigo-600 dark:text-indigo-400" 
                        : "text-slate-400"
                    }`}>
                      {tab.icon}
                    </span>
                    <span className="hidden sm:inline">{tab.label}</span>
                    
                    {/* Validation Error Indicator */}
                    {hasTabErrors(tab.id) && (
                      <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    )}
                    
                    {/* Active Tab Indicator */}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8 min-h-[500px] transition-all duration-300 ease-in-out">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
             
              {activeTab === "couple" && <CoupleSection form={form} />}
              {activeTab === "rundown" && <RundownSection form={form} />}
              {activeTab === "gallery" && <GallerySection form={form} />}
              {activeTab === "music" && <MusicSection form={form} />}
              {activeTab === "additional" && <AdditionalSection form={form} />}
                {activeTab === "settings" && <SettingsSection form={form} userRole={userRole} />}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="px-6 py-4 border-t bg-slate-50 dark:bg-slate-800/30 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              type="button"
              onClick={prevTab}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed font-semibold hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeTab === tab.id
                      ? "bg-indigo-600 dark:bg-indigo-400 w-8"
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to ${tab.label}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={nextTab}
                disabled={currentIndex === tabs.length - 1}
                className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-900 dark:hover:bg-slate-600 transition-all shadow-md active:scale-95 disabled:opacity-30"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Action Footer - Sticky for Desktop, Persistent for Mobile */}
        <div className="sticky bottom-6 mt-10 z-30">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto ring-1 ring-slate-900/5 dark:ring-white/5">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 dark:bg-indigo-900/40 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Status</p>
                <p className="text-sm font-black text-slate-700 dark:text-slate-300">
                  {isEditMode ? "Editing Invitation" : "New Invitation"}
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-auto gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-10 py-3 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none disabled:opacity-50 active:scale-95 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{isEditMode ? "Save All Changes" : "Publish Invitation"}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
          
          {/* Validation Error Summary */}
          {Object.keys(errors).length > 0 && (
            <div className="p-5 bg-red-50 dark:bg-red-950/30 border-2 border-red-100 dark:border-red-900/30 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-red-800 dark:text-red-400 font-black text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" /> Some fields need your attention:
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                {Object.entries(errors).map(([key, error]) => (
                  <div key={key} className="text-xs text-red-600 dark:text-red-400 py-1 border-b border-red-100/50 dark:border-red-900/20 last:border-0 flex justify-between">
                    <span className="font-bold capitalize">{key.replace(/_/g, " ")}:</span>
                    <span className="italic">{(error as any).message || "Invalid value"}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>
      </div>
  );
}
