"use client";

import React from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { InvitationFormData } from "../../schema/FormSchema";
import FormInput from "../FormInput";
import { Trash2, Plus, Gift, BookOpen } from "lucide-react";
import CloudinaryButton from "../CloudinaryButton";
import Image from "next/image";

interface SectionProps {
  form: UseFormReturn<InvitationFormData>;
}

export default function AdditionalSection({ form }: SectionProps) {
  const { control, register, formState: { errors }, setValue, watch } = form;

  // Gift Info
  const {
    fields: giftFields,
    append: appendGift,
    remove: removeGift,
  } = useFieldArray({
    control,
    name: "gift_infos",
  });

  // Story
  const {
    fields: storyFields,
    append: appendStory,
    remove: removeStory,
    move: moveStory,
  } = useFieldArray({
    control,
    name: "stories",
  });

  return (
    <div className="space-y-12">
      {/* Gift Info Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-3">
            <Gift className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-bold italic">Wedding Gift / Digital Wallet</h3>
          </div>
          <button
            type="button"
            onClick={() => appendGift({ provider_name: "", account_number: "", account_holder: "", gift_delivery_address: "" })}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Account</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {giftFields.map((field, idx) => (
            <div key={field.id} className="relative p-6 border rounded-xl bg-white dark:bg-slate-900 shadow-sm border-emerald-100 dark:border-emerald-900/30">
              <button
                type="button"
                onClick={() => removeGift(idx)}
                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="space-y-4 pt-4">
                <FormInput
                  label="Provider (BCA / Mandiri / OVO / etc.)"
                  required
                  error={errors.gift_infos?.[idx]?.provider_name}
                  {...register(`gift_infos.${idx}.provider_name`)}
                />
                <FormInput
                  label="Account Number"
                  required
                  error={errors.gift_infos?.[idx]?.account_number}
                  {...register(`gift_infos.${idx}.account_number`)}
                />
                <FormInput
                  label="Account Holder Name"
                  required
                  error={errors.gift_infos?.[idx]?.account_holder}
                  {...register(`gift_infos.${idx}.account_holder`)}
                />
                <FormInput
                  label="Shipping Address (Optional for Physical Gifts)"
                  error={errors.gift_infos?.[idx]?.gift_delivery_address}
                  {...register(`gift_infos.${idx}.gift_delivery_address`)}
                />
              </div>
            </div>
          ))}
        </div>
        
        {giftFields.length === 0 && (
          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl border-2 border-dashed flex flex-col items-center justify-center text-slate-400">
            <p>No gift information added. Guests won't see digital wallet info.</p>
          </div>
        )}
      </div>

      {/* Love Story Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-bold italic">Our Journey / Love Story</h3>
          </div>
          <button
            type="button"
            onClick={() => appendStory({ title: "", content: "", image_url: "", story_date: "", order_number: storyFields.length })}
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Story</span>
          </button>
        </div>

        <div className="space-y-6">
          {storyFields.map((field, idx) => (
            <div key={field.id} className="p-6 border rounded-xl bg-white dark:bg-slate-900 shadow-sm space-y-6 relative border-rose-100 dark:border-rose-900/30">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-rose-700">Story Moment #{idx + 1}</h4>
                <div className="flex gap-2">
                   <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveStory(idx, idx - 1)}
                    className="p-1 border rounded disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    disabled={idx === storyFields.length - 1}
                    onClick={() => moveStory(idx, idx + 1)}
                    className="p-1 border rounded disabled:opacity-30"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeStory(idx)}
                    className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded ml-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <FormInput
                    label="Story Title"
                    required
                    error={errors.stories?.[idx]?.title}
                    {...register(`stories.${idx}.title`)}
                  />
                  <FormInput
                    label="Date"
                    type="date"
                    required
                    error={errors.stories?.[idx]?.story_date}
                    {...register(`stories.${idx}.story_date`)}
                  />
                  <div>
                    <label className="block text-sm font-semibold mb-2">Content / Story Detail</label>
                    <textarea
                      {...register(`stories.${idx}.content`)}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md bg-white/70 dark:bg-slate-950 focus:outline-none focus:border-rose-500"
                      placeholder="Tell the story of this moment..."
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="block text-sm font-semibold">Memory Photo</label>
                  <div className="flex gap-2">
                    <input
                      {...register(`stories.${idx}.image_url`)}
                      className="flex-1 px-4 py-2 border rounded-md bg-slate-50 dark:bg-slate-950 cursor-not-allowed text-xs"
                      readOnly
                      placeholder="Upload photo..."
                    />
                    <CloudinaryButton
                      type="image"
                      label="Upload"
                      folder="love_story"
                      onSuccess={(url) => setValue(`stories.${idx}.image_url`, url, { shouldDirty: true, shouldValidate: true })}
                      className="bg-slate-800 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-700"
                    />
                  </div>
                  
                  {watch(`stories.${idx}.image_url`) && (
                    <div className="relative aspect-video rounded-lg overflow-hidden border shadow-inner bg-slate-100">
                      <Image
                        src={watch(`stories.${idx}.image_url`)}
                        alt="Story"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {errors.stories?.[idx]?.image_url && <p className="text-red-500 text-sm">{errors.stories[idx].image_url.message}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {storyFields.length === 0 && (
          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl border-2 border-dashed flex flex-col items-center justify-center text-slate-400">
            <p>Share your love story with your guests!</p>
          </div>
        )}
      </div>
    </div>
  );
}
