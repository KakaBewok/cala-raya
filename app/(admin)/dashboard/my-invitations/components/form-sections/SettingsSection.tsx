"use client";

import React, { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { InvitationFormData } from "../../schema/FormSchema";
import FormInput from "../FormInput";
import { Settings, Layout, Info, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Theme } from "@/types/invitation-data";

interface SectionProps {
  form: UseFormReturn<InvitationFormData>;
  userRole?: string;
}

export default function SettingsSection({ form, userRole }: SectionProps) {
  const { register, watch, setValue, formState: { errors } } = form;
  const currentTheme = watch("themes.name");
  const isAdmin = userRole === "ADMIN";
  
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/themes")
      .then(res => res.json())
      .then(data => {
        setThemes(data.themes || []);
      })
      .finally(() => setLoading(false));
  }, []);

  // Simplified previews for the UI
  const themePreviews: Record<string, string> = {
    netflix: "/assets/images/themes/netflix-preview.webp",
    stylishBold: "/assets/images/themes/stylish-bold-preview.webp",
    default: "/assets/images/themes/default-preview.webp",
    maroon: "/assets/images/themes/maroon-preview.webp",
    monochrome: "/assets/images/themes/monochrome-preview.webp",
  };

  const handleThemeChange = (themeName: string) => {
    setValue("themes.name", themeName, { shouldDirty: true, shouldValidate: true });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b pb-4">
          <Settings className="w-6 h-6 text-slate-600" />
          <h3 className="text-xl font-bold">General Settings</h3>
        </div>

        <div className="max-w-md">
          <FormInput
            label="Wedding Hashtag"
            placeholder="e.g. #NickJaneWedding"
            description="This will be displayed on several parts of your invitation."
            error={errors.hashtag}
            {...register("hashtag")}
          />
        </div>
      </div>

      <div className="space-y-6 pt-6">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-3">
            <Layout className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-bold">Invitation Theme</h3>
          </div>
          {isAdmin ? (
            <div className="flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              ADMIN ACCESS
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold border">
              <Lock className="w-3.5 h-3.5" />
              READ ONLY
            </div>
          )}
        </div>

        {!isAdmin ? (
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-4 rounded-xl flex gap-4 items-start animate-in fade-in duration-500">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-400">
              <p className="font-bold">Theme is locked</p>
              <p>Your invitation theme is assigned based on your purchase. To change the theme, please contact support or upgrade your package.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 max-w-md animate-in slide-in-from-top-2 duration-500">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              Change Active Theme
            </label>
            <Select onValueChange={handleThemeChange} value={currentTheme}>
              <SelectTrigger className="w-full h-12 bg-white dark:bg-slate-950 border-2 focus:ring-indigo-500">
                <SelectValue placeholder={loading ? "Loading themes..." : "Select a theme"} />
              </SelectTrigger>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme.id} value={theme.name}>
                    <div className="flex items-center gap-2">
                       <span className="font-medium capitalize">{theme.name}</span>
                       {theme.name === 'netflix' && <span className="bg-red-600 text-[10px] text-white px-1.5 py-0.5 rounded font-black">HOT</span>}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-500">
              Note: Changing themes may affect how your photos and rundown are displayed.
            </p>
          </div>
        )}

        <div className="mt-8">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Preview Selected Theme</p>
          <div className="relative group max-w-[280px] rounded-3xl overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700">
            <div className="aspect-[9/16] relative bg-slate-100">
              {/* Fallback to a placeholder if preview not found */}
              <Image
                src={themePreviews[currentTheme] || "/placeholder.png"}
                alt={`Theme: ${currentTheme}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase mb-1">Active Template</span>
                <h4 className="text-3xl font-black text-white capitalize tracking-tight">{currentTheme}</h4>
                <div className="w-10 h-1 bg-indigo-500 mt-3 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
