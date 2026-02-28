"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { InvitationFormData } from "../../schema/FormSchema";
import FormInput from "../FormInput";

interface SectionProps {
  form: UseFormReturn<InvitationFormData>;
}

export default function EventDetailsSection({ form }: SectionProps) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Event Title"
          required
          placeholder="e.g. The Wedding of Nick & Jane"
          error={errors.event_title}
          {...register("event_title")}
        />

        <FormInput
          label="Event Type"
          required
          placeholder="e.g. Wedding Reception"
          error={errors.event_type}
          {...register("event_type")}
        />

        <FormInput
          label="Event Date"
          type="date"
          required
          error={errors.event_date}
          {...register("event_date")}
        />

        <FormInput
          label="Location"
          required
          placeholder="e.g. Grand Ballroom, Hilton Hotel"
          error={errors.location}
          {...register("location")}
        />

        <FormInput
          label="Location URL (Google Maps)"
          placeholder="https://maps.google.com/..."
          error={errors.location_url}
          {...register("location_url")}
        />

        <FormInput
          label="Location Detail"
          placeholder="e.g. 2nd Floor, Room 201"
          error={errors.location_detail}
          {...register("location_detail")}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Invitation Message</label>
        <textarea
          className="w-full px-4 py-2 border rounded-md bg-white/70 dark:bg-slate-950 focus:outline-none focus:border-blue-500 transition-colors"
          rows={4}
          placeholder="Write a beautiful message for your guests..."
          {...register("message")}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
    </div>
  );
}
