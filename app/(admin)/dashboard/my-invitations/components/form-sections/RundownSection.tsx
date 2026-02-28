"use client";

import React from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { InvitationFormData, SECTION_LIMITS } from "../../schema/FormSchema";
import FormInput from "../FormInput";
import { Trash2, Plus, GripVertical, Clock, AlertTriangle } from "lucide-react";

interface SectionProps {
  form: UseFormReturn<InvitationFormData>;
  folder: string;
}

export default function RundownSection({ form, folder }: SectionProps) {
  const { control, register, formState: { errors }, watch } = form;

  const {
    fields: rundownFields,
    append: appendRundown,
    remove: removeRundown,
    move: moveRundown,
  } = useFieldArray({
    control,
    name: "rundowns",
  });

  const addRundown = () => {
    appendRundown({
      title: "",
      location: "",
      location_detail: "",
      location_url: "",
      date: "",
      start_time: "",
      end_time: "",
      time_zone: "WIB",
      order_number: rundownFields.length,
      image_url: "",
      public_id: "",
      resource_type: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Event Rundown</h2>
          <p className="text-sm text-slate-500">
            Add segments for your wedding events (Ceremony, Reception, etc.)
            <span className="ml-2 font-semibold text-slate-700 dark:text-slate-300">
              {rundownFields.length}/{SECTION_LIMITS.rundowns}
            </span>
          </p>
        </div>
        {rundownFields.length < SECTION_LIMITS.rundowns && (
          <button
            type="button"
            onClick={addRundown}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Event</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        {rundownFields.map((field, idx) => (
          <div key={field.id} className="relative bg-white dark:bg-slate-900 border rounded-xl shadow-sm overflow-hidden p-6 transition-all hover:shadow-md">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
            
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold capitalize">
                  {watch(`rundowns.${idx}.title`) || "Untitled Event"}
                </h3>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveRundown(idx, idx - 1)}
                    className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded disabled:opacity-30 transition-all"
                  >
                    <GripVertical className="w-4 h-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    disabled={idx === rundownFields.length - 1}
                    onClick={() => moveRundown(idx, idx + 1)}
                    className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded disabled:opacity-30 transition-all"
                  >
                    <GripVertical className="w-4 h-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeRundown(idx)}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                label="Event Title"
                placeholder="e.g. Akad Nikah"
                required
                error={errors.rundowns?.[idx]?.title}
                {...register(`rundowns.${idx}.title`)}
              />

              <FormInput
                label="Date"
                type="date"
                required
                error={errors.rundowns?.[idx]?.date}
                {...register(`rundowns.${idx}.date`)}
              />

              <div className="grid grid-cols-2 gap-2">
                <FormInput
                  label="Start Time"
                  type="time"
                  required
                  error={errors.rundowns?.[idx]?.start_time}
                  {...register(`rundowns.${idx}.start_time`)}
                />
                <FormInput
                  label="End Time"
                  type="time"
                  error={errors.rundowns?.[idx]?.end_time}
                  {...register(`rundowns.${idx}.end_time`)}
                />
              </div>

              <FormInput
                label="Venue Name"
                placeholder="e.g. Masjid Al-Ikhlas"
                required
                error={errors.rundowns?.[idx]?.location}
                {...register(`rundowns.${idx}.location`)}
              />

              <FormInput
                label="Location URL"
                placeholder="Google Maps link"
                error={errors.rundowns?.[idx]?.location_url}
                {...register(`rundowns.${idx}.location_url`)}
              />

              <FormInput
                label="Time Zone"
                placeholder="WIB"
                required
                error={errors.rundowns?.[idx]?.time_zone}
                {...register(`rundowns.${idx}.time_zone`)}
              />

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Location Detail
                </label>
                <textarea
                  {...register(`rundowns.${idx}.location_detail`)}
                  placeholder="e.g. Jl. Raya Sudirman No. 123, Gedung Serbaguna Lt. 2"
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
                {errors.rundowns?.[idx]?.location_detail && (
                  <p className="mt-1 text-xs text-red-500">{errors.rundowns?.[idx]?.location_detail?.message}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {rundownFields.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed rounded-xl bg-slate-50 dark:bg-slate-900/50">
            <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 italic">No events added yet. Start by adding your first event segment.</p>
            <button
              type="button"
              onClick={addRundown}
              className="mt-4 text-indigo-600 font-semibold hover:underline"
            >
              + Add First Event
            </button>
          </div>
        )}
      </div>

      {errors.rundowns && (
        <p className="text-red-800 dark:text-red-400 text-sm mt-4 font-bold bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-900/30 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-600" /> 
          {errors.rundowns.message || "Please fix errors in the rundown section"}
        </p>
      )}
    </div>
  );
}
