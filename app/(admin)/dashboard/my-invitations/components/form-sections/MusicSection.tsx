"use client";

import React, { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { InvitationFormData } from "../../schema/FormSchema";
import FormInput from "../FormInput";
import CloudinaryButton from "../CloudinaryButton";
import { Trash2, Music, Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Music as MusicType } from "@/types/invitation-data";

interface SectionProps {
  form: UseFormReturn<InvitationFormData>;
}

export default function MusicSection({ form }: SectionProps) {
  const { watch, setValue, register, formState: { errors } } = form;
  const [musicLibrary, setMusicLibrary] = useState<MusicType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectionMode, setSelectionMode] = useState<"library" | "upload">("library");

  const currentUrl = watch("music.url");

  useEffect(() => {
    fetch("/api/music-library")
      .then((res) => res.json())
      .then((data) => {
        setMusicLibrary(data.music || []);
        // If current music URL matched one in library, set mode to library
        if (currentUrl && data.music?.some((m: MusicType) => m.url === currentUrl)) {
          setSelectionMode("library");
        } else if (currentUrl) {
          setSelectionMode("upload");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLibrarySelect = (url: string) => {
    const selected = musicLibrary.find((m) => m.url === url);
    if (selected) {
      setValue("music.url", selected.url, { shouldDirty: true, shouldValidate: true });
      setValue("music.title", selected.title, { shouldDirty: true });
      setValue("music.artist", selected.artist, { shouldDirty: true });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-4">
        <button
          type="button"
          onClick={() => setSelectionMode("library")}
          className={`flex-1 py-3 px-4 rounded-md border-1 transition-all flex items-center justify-center gap-2 ${
            selectionMode === "library"
              ? "border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-slate-800 hover:border-gray-300"
          }`}
        >
          <Music className="w-5 h-5" />
          <span>Choose from Library</span>
        </button>
        <button
          type="button"
          onClick={() => setSelectionMode("upload")}
          className={`flex-1 py-3 px-4 rounded-md border-1 transition-all flex items-center justify-center gap-2 ${
            selectionMode === "upload"
              ? "border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-slate-800 hover:border-gray-300"
          }`}
        >
          <Upload className="w-5 h-5" />
          <span>Upload Custom Music</span>
        </button>
      </div>

      <div className="p-6 border rounded-md bg-white dark:bg-slate-900 shadow-sm space-y-6">
        {selectionMode === "library" ? (
          <div className="space-y-4">
            <label className="block text-sm font-semibold">Select Background Music</label>
            <Select onValueChange={handleLibrarySelect} value={currentUrl}>
              <SelectTrigger className="w-full h-12 py-6">
                <SelectValue placeholder={loading ? "Loading music..." : "Select a music"} />
              </SelectTrigger>
              <SelectContent>
                {musicLibrary.map((song) => (
                  <SelectItem key={song.id} value={song.url} className="cursor-pointer">
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{song.title}</span>
                      <span className="text-xs text-gray-500 ">{song.artist}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Upload Music (MP3/WAV/OGG)
              </label>
              <div className="flex gap-2">
                <input
                  {...register("music.url")}
                  className="flex-1 px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-950 cursor-not-allowed"
                  readOnly
                  placeholder="No file uploaded"
                />
                <CloudinaryButton
                  type="music"
                  label="Upload"
                  folder="soundtracks"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                  onSuccess={(url) => {
                    setValue("music.url", url, { shouldDirty: true, shouldValidate: true });
                  }}
                  isMultiple={false}
                />
              </div>
              {errors.music?.url && (
                <p className="text-red-500 text-sm mt-1">{errors.music.url.message}</p>
              )}
            </div>

            <FormInput
              label="Title"
              placeholder="e.g. My Custom Wedding Song"
              error={errors.music?.title}
              {...register("music.title")}
            />
            <FormInput
              label="Artist"
              placeholder="e.g. Jen Maliq"
              error={errors.music?.artist}
              {...register("music.artist")}
            />
          </div>
        )}

        {/* Audio Player Preview */}
        {currentUrl && (
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{watch("music.title") || "Unknown Title"}</p>
                  <p className="text-xs text-gray-500">{watch("music.artist") || "Unknown Artist"}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setValue("music.url", "");
                  setValue("music.title", "");
                  setValue("music.artist", "");
                }}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                title="Remove Music"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <audio controls src={currentUrl} className="w-full">
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-lg">
        <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed italic">
          Tip: Recommended music file size is under 1MB for faster loading. You can compress your MP3 files at <a href="https://www.onlineconverter.com/compress-mp3" target="_blank" className="underline font-bold">onlineconverter.com</a>.
        </p>
      </div>
    </div>
  );
}
