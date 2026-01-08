"use client";

import React, { useEffect, useState } from "react";
import { useForm, useFieldArray, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  invitationFormSchema,
  InvitationFormData,
  ImageType,
  imageType,
  THEME_CONFIG,
} from "../schema/FormSchema";
// import { useRouter } from "next/navigation";
import InvitationData from "@/types/invitation-data";
import CloudinaryButton from "./CloudinaryButton";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { SortableItem } from "./SortableItem";
import FormInput from "./FormInput";
import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import { GripVertical, Trash2, X } from "lucide-react";

interface InvitationFormProps {
  invitationData?: InvitationData;
  onSuccess?: () => void;
}

export function InvitationForm({
  invitationData,
  onSuccess,
}: InvitationFormProps) {
  // const router = useRouter();
  const isEditMode = !!invitationData;
  const [activeTab, setActiveTab] = useState<string>("basic");
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    host_one_name,
    host_one_nickname,
    host_one_additional_info,
    host_one_social_media,
    host_two_name,
    host_two_nickname,
    host_two_additional_info,
    host_two_social_media,
    hashtag,
    themes,
    music,
    images,
    rundowns,
    gift_infos,
    stories,
  } = invitationData || {};

  const submitForm = () => {
    onSuccess?.();
  };

  function getDefaultRundown() {
    return {
      title: "",
      location: "",
      location_detail: "",
      location_url: "",
      date: "",
      start_time: "",
      end_time: "",
      time_zone: "",
    };
  }

  function getDefaultMusic() {
    return { title: "", artist: "", url: "" };
  }

  function getDefaultTheme() {
    return { name: "" };
  }

  const sortedImages = (images || [])
    .sort((a, b) => (a.order_number ?? 0) - (b.order_number ?? 0))
    .map((img) => ({
      ...img,
      type: img.type as ImageType,
    }));

  // Initialize form with default values or existing data
  const form = useForm<InvitationFormData>({
    resolver: zodResolver(invitationFormSchema),
    defaultValues: isEditMode
      ? {
          host_one_name,
          host_one_nickname,
          host_one_additional_info,
          host_one_social_media,
          host_two_name,
          host_two_nickname,
          host_two_additional_info,
          host_two_social_media,
          hashtag,
          themes,
          music: music || getDefaultMusic(),
          images: sortedImages,
          rundowns: rundowns || [getDefaultRundown()],
          gift_infos: gift_infos || [],
          stories: stories || [],
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
          themes: getDefaultTheme(),
          music: getDefaultMusic(),
          images: [],
          rundowns: [getDefaultRundown()],
          gift_infos: [],
          stories: [],
        },
  });

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = form;

  const currentThemeName = watch("themes")?.name;

  // Field arrays for dynamic sections
  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
    move: moveImage,
  } = useFieldArray({
    control,
    name: "images",
  });

  // const {
  //   fields: rundownFields,
  //   append: appendRundown,
  //   remove: removeRundown,
  //   move: moveRundown,
  // } = useFieldArray({
  //   control,
  //   name: "rundowns",
  // });

  // const {
  //   fields: giftFields,
  //   append: appendGift,
  //   remove: removeGift,
  //   move: moveGift,
  // } = useFieldArray({
  //   control,
  //   name: "gift_infos",
  // });

  // const {
  //   fields: storyFields,
  //   append: appendStory,
  //   remove: removeStory,
  //   move: moveStory,
  // } = useFieldArray({
  //   control,
  //   name: "stories",
  // });

  function normalizeOrder(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturn<any>,
    fieldName: "images" | "rundowns" | "gift_infos" | "stories",
    typeFilter?: string // for gallery image
  ) {
    const items = form.getValues(fieldName);
    if (!items || items.length === 0) return;

    let currentOrder = 0;
    let changed = false;

    items.forEach(
      (item: { type: string; order_number: number }, idx: number) => {
        if (!typeFilter || item.type === typeFilter) {
          if (item.order_number !== currentOrder) {
            form.setValue(`${fieldName}.${idx}.order_number`, currentOrder);
            changed = true;
          }
          currentOrder++;
        }
      }
    );

    // revalidate
    if (changed) {
      form.trigger(fieldName);
    }
  }

  useEffect(() => {
    normalizeOrder(form, "images", "gallery");
    normalizeOrder(form, "rundowns");
    normalizeOrder(form, "gift_infos");
    normalizeOrder(form, "stories");
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = imageFields.findIndex((f) => f.id === active.id);
    const newIndex = imageFields.findIndex((f) => f.id === over.id);

    moveImage(oldIndex, newIndex); // dnd built in function

    // sync images order_number
    setTimeout(() => normalizeOrder(form, "images", "gallery"), 10);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  //cp --- //

  // RUNDOWN
  // const syncRundownOrder = () => {
  //   const rundowns = form.getValues("rundowns");
  //   rundowns.forEach((_, idx) => {
  //     form.setValue(`rundowns.${idx}.order_number`, idx);
  //   });
  // };

  // const moveRundownItem = (from: number, to: number) => {
  //   moveRundown(from, to);
  //   setTimeout(syncRundownOrder, 0);
  // };

  // GIFT INFO
  // const syncGiftOrder = () => {
  //   const gifts = form.getValues("gift_infos");
  //   gifts?.forEach((_, idx) => {
  //     form.setValue(`gift_infos.${idx}.order_number`, idx);
  //   });
  // };

  // const moveGiftItem = (from: number, to: number) => {
  //   moveGift(from, to);
  //   setTimeout(syncGiftOrder, 0);
  // };

  // STORY
  // const syncStoryOrder = () => {
  //   const stories = form.getValues("stories");
  //   stories?.forEach((_, idx) => {
  //     form.setValue(`stories.${idx}.order_number`, idx);
  //   });
  // };

  // const moveStoryItem = (from: number, to: number) => {
  //   moveStory(from, to);
  //   setTimeout(syncStoryOrder, 0);
  // };

  // Submit Handler - CREATE or UPDATE
  // const onSubmit = async (data: InvitationFormData) => {
  //   setIsSubmitting(true);
  //   // const supabase = createClient();
  //   console.log(data);
  //   // try {
  //   //   if (isEditMode) {
  //   //     await updateInvitation(supabase, invitationData.id, data);
  //   //   } else {
  //   //     await createInvitation(supabase, data);
  //   //   }

  //   //   onSuccess?.();
  //   //   router.push("/dashboard/my-invitations");
  //   // } catch (error) {
  //   //   console.error("Error submitting form:", error);
  //   //   alert(`Failed to ${isEditMode ? "update" : "create"} invitation`);
  //   // } finally {
  //   //   setIsSubmitting(false);
  //   // }
  // };

  // CREATE - Insert new invitation and all related data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const createInvitation = async (supabase: any, data: InvitationFormData) => {
  //   // 1. Insert main invitation
  //   const { data: invitation, error: invitationError } = await supabase
  //     .from("invitations")
  //     .insert({
  //       host_one_name: data.host_one_name,
  //       host_one_nickname: data.host_one_nickname,
  //       host_one_additional_info: data.host_one_additional_info,
  //       host_one_social_media: data.host_one_social_media,
  //       host_two_name: data.host_two_name,
  //       host_two_nickname: data.host_two_nickname,
  //       host_two_additional_info: data.host_two_additional_info,
  //       host_two_social_media: data.host_two_social_media,
  //       hashtag: data.hashtag,
  //     })
  //     .select()
  //     .single();

  //   if (invitationError) throw invitationError;

  //   const invitationId = invitation.id;

  //   // 2. Insert music
  //   await supabase.from("music").insert({
  //     invitation_id: invitationId,
  //     ...data.music,
  //   });

  //   // 3. Insert images
  //   if (data.images.length > 0) {
  //     await supabase.from("images").insert(
  //       data.images.map((img, idx) => ({
  //         invitation_id: invitationId,
  //         url: img.url,
  //         caption: img.caption,
  //         type: img.type,
  //         order_number: img.order_number ?? idx,
  //       }))
  //     );
  //   }

  //   // 4. Insert rundowns
  //   if (data.rundowns.length > 0) {
  //     await supabase.from("rundowns").insert(
  //       data.rundowns.map((rundown, idx) => ({
  //         invitation_id: invitationId,
  //         ...rundown,
  //         order_number: rundown.order_number ?? idx,
  //       }))
  //     );
  //   }

  //   // 5. Insert gift infos (optional)
  //   if (data.gift_infos && data.gift_infos.length > 0) {
  //     await supabase.from("gift_infos").insert(
  //       data.gift_infos.map((gift) => ({
  //         invitation_id: invitationId,
  //         ...gift,
  //       }))
  //     );
  //   }

  //   // 6. Insert stories (optional)
  //   if (data.stories && data.stories.length > 0) {
  //     await supabase.from("stories").insert(
  //       data.stories.map((story, idx) => ({
  //         invitation_id: invitationId,
  //         ...story,
  //         order_number: story.order_number ?? idx,
  //       }))
  //     );
  //   }
  // };

  // UPDATE - Update invitation and all related data
  // const updateInvitation = async (
  //   supabase: any,
  //   invitationId: number,
  //   data: InvitationFormData
  // ) => {
  //   // 1. Update main invitation
  //   await supabase
  //     .from("invitations")
  //     .update({
  //       host_one_name: data.host_one_name,
  //       host_one_nickname: data.host_one_nickname,
  //       host_one_additional_info: data.host_one_additional_info,
  //       host_one_social_media: data.host_one_social_media,
  //       host_two_name: data.host_two_name,
  //       host_two_nickname: data.host_two_nickname,
  //       host_two_additional_info: data.host_two_additional_info,
  //       host_two_social_media: data.host_two_social_media,
  //       hashtag: data.hashtag,
  //     })
  //     .eq("id", invitationId);

  //   // 2. Update music (upsert)
  //   await supabase
  //     .from("music")
  //     .upsert({
  //       invitation_id: invitationId,
  //       ...data.music,
  //     })
  //     .eq("invitation_id", invitationId);

  //   // 3. Update images (delete & re-insert for simplicity)
  //   await supabase.from("images").delete().eq("invitation_id", invitationId);
  //   if (data.images.length > 0) {
  //     await supabase.from("images").insert(
  //       data.images.map((img, idx) => ({
  //         invitation_id: invitationId,
  //         url: img.url,
  //         type: img.type,
  //         order_number: img.order_number ?? idx,
  //       }))
  //     );
  //   }

  //   // 4. Update rundowns (delete & re-insert)
  //   await supabase.from("rundowns").delete().eq("invitation_id", invitationId);
  //   if (data.rundowns.length > 0) {
  //     await supabase.from("rundowns").insert(
  //       data.rundowns.map((rundown, idx) => ({
  //         invitation_id: invitationId,
  //         ...rundown,
  //         order_number: rundown.order_number ?? idx,
  //       }))
  //     );
  //   }

  //   // 5. Update gift infos (delete & re-insert)
  //   await supabase
  //     .from("gift_infos")
  //     .delete()
  //     .eq("invitation_id", invitationId);
  //   if (data.gift_infos && data.gift_infos.length > 0) {
  //     await supabase.from("gift_infos").insert(
  //       data.gift_infos.map((gift) => ({
  //         invitation_id: invitationId,
  //         ...gift,
  //       }))
  //     );
  //   }

  //   // 6. Update stories (delete & re-insert)
  //   await supabase.from("stories").delete().eq("invitation_id", invitationId);
  //   if (data.stories && data.stories.length > 0) {
  //     await supabase.from("stories").insert(
  //       data.stories.map((story, idx) => ({
  //         invitation_id: invitationId,
  //         ...story,
  //         order_number: story.order_number ?? idx,
  //       }))
  //     );
  //   }
  // };

  //cp ---//

  const isMobile: boolean = useMediaQuery("(max-width: 768px)");

  const modifiers = isMobile
    ? [restrictToVerticalAxis]
    : [restrictToWindowEdges];

  const visibleImageTypes = imageType.filter((type: string) => {
    const allowedTypes =
      THEME_CONFIG[currentThemeName] || THEME_CONFIG["default"];

    return allowedTypes.includes(type);
  });

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "media", label: "Media" },
    { id: "rundown", label: "Rundown" },
    { id: "additional", label: "Additional" },
  ];

  return (
    <form
      onSubmit={handleSubmit(() => submitForm())}
      className="w-full max-w-5xl mx-auto p-3 md:p-6 bg-white/30 rounded-md dark:bg-slate-700/30"
    >
      <h1 className="text-red-500 font-semibold text-center my-4">
        MOHON MAAF FITUR EDIT MASIH DALAM PENGEMBANGAN. SAAT INI BELUM BISA
        DIGUNAKAN
      </h1>
      {/* Tab Navigation - Desktop (MD) */}
      <div className="hidden md:flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* BASIC INFO TAB */}
        {(activeTab === "basic" || window.innerWidth < 768) && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Basic Information</h2>

            {/* Host One */}
            <div className="grid md:grid-cols-3 gap-4">
              <FormInput
                label="Grooms Name"
                required
                error={errors.host_one_name}
                {...register("host_one_name")}
              />

              <FormInput
                label="Grooms Nickname"
                required
                error={errors.host_one_nickname}
                {...register("host_one_nickname")}
              />

              <FormInput
                label="Grooms Additional Info"
                required
                error={errors.host_one_additional_info}
                placeholder="Putra dari Bapak Jen Maliq dan Ibu Gigi Hadid"
                {...register("host_one_additional_info")}
              />

              <FormInput
                label="Grooms Instagram"
                description={`Username without "@"`}
                error={errors.host_one_social_media}
                {...register("host_one_social_media")}
              />
            </div>

            {/* Host Two */}
            <div className="grid md:grid-cols-3 gap-4">
              <FormInput
                label="Brides Name"
                required
                error={errors.host_two_name}
                {...register("host_two_name")}
              />

              <FormInput
                label="Brides Nickname"
                required
                error={errors.host_two_nickname}
                {...register("host_two_nickname")}
              />

              <FormInput
                label="Brides Additional Info"
                required
                placeholder="Putri dari Bapak Harry dan Ibu Styles"
                error={errors.host_two_additional_info}
                {...register("host_two_additional_info")}
              />

              <FormInput
                label="Brides Instagram"
                description={`Username without "@"`}
                error={errors.host_two_social_media}
                {...register("host_two_social_media")}
              />
            </div>
          </div>
        )}

        {/* EVENT INFO TAB */}
        {/* {(activeTab === "event" || window.innerWidth < 768) && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Event Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Event Title *
                </label>
                <input
                  {...form.register("event_title")}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {form.formState.errors.event_title && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.event_title.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Event Type *
                </label>
                <input
                  {...form.register("event_type")}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Wedding, Birthday, etc."
                />
                {form.formState.errors.event_type && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.event_type.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  {...form.register("event_date")}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {form.formState.errors.event_date && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.event_date.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Hashtag
                </label>
                <input
                  {...form.register("hashtag")}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="#MyEvent2024"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Location *
                </label>
                <input
                  {...form.register("location")}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {form.formState.errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Location Detail
                </label>
                <input
                  {...form.register("location_detail")}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Location URL
                </label>
                <input
                  {...form.register("location_url")}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="https://maps.google.com/..."
                />
                {form.formState.errors.location_url && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.location_url.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...form.register("message")}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={4}
                />
              </div>
            </div>
          </div>
        )} */}

        {/* MEDIA TAB */}
        {(activeTab === "media" || window.innerWidth < 768) && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Media</h2>

            {/* Music Section */}
            <div className="border rounded-lg p-4 shadow-xs">
              <h3 className="text-lg font-semibold mb-4">
                Music <span className="text-red-500">*</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput
                  label="Title"
                  error={errors.music?.title}
                  {...register("music.title")}
                />
                <FormInput
                  label="Artist"
                  error={errors.music?.artist}
                  {...register("music.artist")}
                />

                <div className="flex gap-2 items-center">
                  <FormInput
                    label="Upload Music"
                    error={errors.music?.url}
                    {...register("music.url")}
                    readOnly
                    required
                    description={
                      <>
                        Only MP3, WAV or OGG. Max. size 1MB.
                        <br /> Compressing music file at{" "}
                        <a
                          href="https://www.onlineconverter.com/compress-mp3"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 not-italic underline"
                        >
                          onlineconverter.com
                        </a>
                      </>
                    }
                  />

                  <CloudinaryButton
                    type="music"
                    label={"Upload"}
                    folder="soundtracks"
                    className="bg-blue-500 text-white px-3 py-2 rounded -mt-2 text-md cursor-pointer"
                    onSuccess={(url: string) => {
                      setValue("music.url", url, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    }}
                    isMultiple={false}
                  />
                </div>

                {/* Audio Preview */}
                {watch("music.url") && (
                  <div className="mt-3 border rounded-md p-3 bg-gray-50 dark:bg-slate-950 dark:border-slate-700">
                    <div className="flex justify-end mb-3">
                      <button
                        type="button"
                        onClick={() => {
                          setValue("music.url", "", {
                            shouldDirty: true,
                            shouldValidate: true,
                          });
                        }}
                        className="text-sm text-red-600 hover:underline cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <audio
                      controls
                      src={watch("music.url")}
                      className="w-full cursor-pointer"
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </div>

            {/* Images Section - Grouped by Type */}
            <div className="border rounded-lg p-4 shadow-xs">
              <h3 className="text-lg font-semibold mb-2">
                Images <span className="text-red-500">*</span>
              </h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed italic">
                <span className="block">
                  ⇅ Drag and drop to reorder gallery images
                </span>
                <span className="block tracking-wide font-medium">
                  Only JPG, PNG, JPEG or WEBP (Recommended). Max. 1MB
                </span>
                <span className="block">
                  Optimize and convert your image files at{" "}
                  <a
                    href="https://squoosh.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 not-italic underline"
                  >
                    squoosh.app
                  </a>
                </span>
              </p>

              {/* cp */}

              {visibleImageTypes.map((type) => (
                <div key={type} className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium capitalize">
                      {type.replace("-", " ")}
                    </h4>

                    <CloudinaryButton
                      type="image"
                      folder="user_photos"
                      onSuccess={(url) =>
                        appendImage({
                          url,
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          type: type as any,
                          // Order number dihitung hanya berdasarkan jumlah gambar di kategori ini saja
                          order_number: imageFields.filter(
                            (f) =>
                              form.watch(
                                `images.${imageFields.indexOf(f)}.type`
                              ) === type
                          ).length,
                        })
                      }
                      isMultiple={true}
                    />
                  </div>
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={modifiers}
                  >
                    <div className="grid md:grid-cols-3 gap-3">
                      <SortableContext
                        items={imageFields
                          .filter(
                            (_, idx) =>
                              form.watch(`images.${idx}.type`) === type
                          )
                          .map((f) => f.id)}
                        strategy={
                          isMobile
                            ? verticalListSortingStrategy
                            : rectSortingStrategy
                        }
                      >
                        {imageFields.map((field, idx) => {
                          const itemType = form.watch(`images.${idx}.type`);

                          if (itemType !== type) return null;

                          return (
                            <SortableItem key={field.id} id={field.id}>
                              <div className="group relative border rounded-sm overflow-hidden bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="relative aspect-[4/3]">
                                  <Image
                                    src={
                                      form.watch(`images.${idx}.url`) ||
                                      "/placeholder.png"
                                    }
                                    alt={`Gallery image ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-300"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4="
                                    quality={75}
                                  />

                                  {/* Overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/10 to-black/30 group-hover:bg-black/20 transition-all duration-400">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        removeImage(idx);
                                        setTimeout(
                                          () =>
                                            normalizeOrder(
                                              form,
                                              "images",
                                              type
                                            ),
                                          0
                                        );
                                      }}
                                      className="absolute top-0 right-0 inline-flex items-center px-1 py-1 cursor-pointer text-sm font-medium text-white bg-red-600 dark:hover:bg-red-900/20 rounded-tr-sm rounded-bl-sm transition-colors duration-200"
                                    >
                                      <X className="w-3 h-3" />
                                    </button>
                                  </div>

                                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white dark:bg-gray-800 rounded p-1.5 shadow-lg cursor-move">
                                      <GripVertical className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SortableItem>
                          );
                        })}
                      </SortableContext>
                    </div>
                  </DndContext>
                </div>
              ))}

              {errors.images && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.images.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* RUNDOWN TAB */}
        {(activeTab === "rundown" || window.innerWidth < 768) && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              {" "}
              <h2 className="text-2xl font-bold">
                {" "}
                Rundown * (At least 1 required){" "}
              </h2>{" "}
              {/* <button
                type="button"
                onClick={() => appendRundown(getDefaultRundown())}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {" "}
                + Add Rundown{" "}
              </button>{" "} */}
            </div>

            {/* {rundownFields
              .map((field, idx) => ({
                field,
                idx,
                order: form.watch(`rundowns.${idx}.order_number`) ?? idx,
              }))
              .sort((a, b) => a.order - b.order)
              .map(({ field, idx }) => (
                <div key={field.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Rundown {idx + 1}</h3>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => moveRundownItem(idx, idx - 1)}
                        className="px-2 border rounded disabled:opacity-40"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        disabled={idx === rundownFields.length - 1}
                        onClick={() => moveRundownItem(idx, idx + 1)}
                        className="px-2 border rounded disabled:opacity-40"
                      >
                        ↓
                      </button>

                      {rundownFields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRundown(idx)}
                          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Title *
                      </label>
                      <input
                        {...form.register(`rundowns.${idx}.title`)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {form.formState.errors.rundowns?.[idx]?.title && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.rundowns[idx]?.title?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Location *
                      </label>
                      <input
                        {...form.register(`rundowns.${idx}.location`)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {form.formState.errors.rundowns?.[idx]?.location && (
                        <p className="text-red-500 text-sm mt-1">
                          {
                            form.formState.errors.rundowns[idx]?.location
                              ?.message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        {...form.register(`rundowns.${idx}.date`)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {form.formState.errors.rundowns?.[idx]?.date && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.rundowns[idx]?.date?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Time Zone *
                      </label>
                      <input
                        {...form.register(`rundowns.${idx}.time_zone`)}
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Asia/Jakarta"
                      />
                      {form.formState.errors.rundowns?.[idx]?.time_zone && (
                        <p className="text-red-500 text-sm mt-1">
                          {
                            form.formState.errors.rundowns[idx]?.time_zone
                              ?.message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Start Time *
                      </label>
                      <input
                        type="time"
                        {...form.register(`rundowns.${idx}.start_time`)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      {form.formState.errors.rundowns?.[idx]?.start_time && (
                        <p className="text-red-500 text-sm mt-1">
                          {
                            form.formState.errors.rundowns[idx]?.start_time
                              ?.message
                          }
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        End Time
                      </label>
                      <input
                        type="time"
                        {...form.register(`rundowns.${idx}.end_time`)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Location Detail
                      </label>
                      <input
                        {...form.register(`rundowns.${idx}.location_detail`)}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Location URL
                      </label>
                      <input
                        {...form.register(`rundowns.${idx}.location_url`)}
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="https://maps.google.com/..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Description
                      </label>
                      <textarea
                        {...form.register(`rundowns.${idx}.description`)}
                        className="w-full px-4 py-2 border rounded-lg"
                        rows={3}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Image URL
                      </label>
                      <div className="flex gap-2">
                        <input
                          {...form.register(`rundowns.${idx}.image_url`)}
                          className="flex-1 px-4 py-2 border rounded-lg"
                          placeholder="Cloudinary URL"
                          readOnly
                        />
                        <button
                          type="button"
                          onClick={() =>
                            openCloudinaryWidget((url) =>
                              form.setValue(`rundowns.${idx}.image_url`, url)
                            )
                          }
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}

            {form.formState.errors.rundowns && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.rundowns.message}
              </p>
            )}
          </div>
        )}

        {/* ADDITIONAL TAB */}
        {(activeTab === "additional" || window.innerWidth < 768) && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Additional Information</h2>

            {/* Gift Info Section */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  Gift Information (Optional)
                </h3>
                {/* <button
                  type="button"
                  onClick={() =>
                    appendGift({
                      provider_name: "",
                      account_number: "",
                      account_holder: "",
                      gift_delivery_address: "",
                    })
                  }
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  + Add Gift Info
                </button> */}
              </div>

              {/* {giftFields
                .map((field, idx) => ({
                  field,
                  idx,
                  order: form.watch(`gift_infos.${idx}.order_number`) ?? idx,
                }))
                .sort((a, b) => a.order - b.order)
                .map(({ field, idx }) => (
                  <div key={field.id} className="border rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Gift {idx + 1}</h4>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            appendGift({
                              provider_name: "",
                              account_number: "",
                              account_holder: "",
                              gift_delivery_address: "",
                            })
                          }
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          + Add Gift Info
                        </button>
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => moveGiftItem(idx, idx - 1)}
                          className="px-2 border rounded disabled:opacity-40"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          disabled={idx === giftFields.length - 1}
                          onClick={() => moveGiftItem(idx, idx + 1)}
                          className="px-2 border rounded disabled:opacity-40"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeGift(idx)}
                          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Provider Name *
                        </label>
                        <input
                          {...form.register(`gift_infos.${idx}.provider_name`)}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                        {form.formState.errors.gift_infos?.[idx]
                          ?.provider_name && (
                          <p className="text-red-500 text-sm mt-1">
                            {
                              form.formState.errors.gift_infos[idx]
                                ?.provider_name?.message
                            }
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Account Number *
                        </label>
                        <input
                          {...form.register(`gift_infos.${idx}.account_number`)}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                        {form.formState.errors.gift_infos?.[idx]
                          ?.account_number && (
                          <p className="text-red-500 text-sm mt-1">
                            {
                              form.formState.errors.gift_infos[idx]
                                ?.account_number?.message
                            }
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Account Holder *
                        </label>
                        <input
                          {...form.register(`gift_infos.${idx}.account_holder`)}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                        {form.formState.errors.gift_infos?.[idx]
                          ?.account_holder && (
                          <p className="text-red-500 text-sm mt-1">
                            {
                              form.formState.errors.gift_infos[idx]
                                ?.account_holder?.message
                            }
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Gift Delivery Address
                        </label>
                        <input
                          {...form.register(
                            `gift_infos.${idx}.gift_delivery_address`
                          )}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>

            {/* Story Section */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Stories (Optional)</h3>
                {/* <button
                  type="button"
                  onClick={() =>
                    appendStory({
                      title: "",
                      content: "",
                      image_url: "",
                      story_date: "",
                    })
                  }
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  + Add Story
                </button> */}
              </div>

              {/* {storyFields
                .map((field, idx) => ({
                  field,
                  idx,
                  order: form.watch(`stories.${idx}.order_number`) ?? idx,
                }))
                .sort((a, b) => a.order - b.order)
                .map(({ field, idx }) => (
                  <div key={field.id} className="border rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Story {idx + 1}</h4>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            appendStory({
                              title: "",
                              content: "",
                              image_url: "",
                              story_date: "",
                            })
                          }
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          + Add Story
                        </button>
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => moveStoryItem(idx, idx - 1)}
                          className="px-2 border rounded disabled:opacity-40"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          disabled={idx === storyFields.length - 1}
                          onClick={() => moveStoryItem(idx, idx + 1)}
                          className="px-2 border rounded disabled:opacity-40"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeStory(idx)}
                          className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Title *
                        </label>
                        <input
                          {...form.register(`stories.${idx}.title`)}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                        {form.formState.errors.stories?.[idx]?.title && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.stories[idx]?.title?.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Date *
                        </label>
                        <input
                          type="date"
                          {...form.register(`stories.${idx}.story_date`)}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                        {form.formState.errors.stories?.[idx]?.story_date && (
                          <p className="text-red-500 text-sm mt-1">
                            {
                              form.formState.errors.stories[idx]?.story_date
                                ?.message
                            }
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">
                          Content *
                        </label>
                        <textarea
                          {...form.register(`stories.${idx}.content`)}
                          className="w-full px-4 py-2 border rounded-lg"
                          rows={4}
                        />
                        {form.formState.errors.stories?.[idx]?.content && (
                          <p className="text-red-500 text-sm mt-1">
                            {
                              form.formState.errors.stories[idx]?.content
                                ?.message
                            }
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">
                          Image URL *
                        </label>
                        <div className="flex gap-2">
                          <input
                            {...form.register(`stories.${idx}.image_url`)}
                            className="flex-1 px-4 py-2 border rounded-lg"
                            placeholder="Cloudinary URL"
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={() =>
                              openCloudinaryWidget((url) =>
                                form.setValue(`stories.${idx}.image_url`, url)
                              )
                            }
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          >
                            Upload
                          </button>
                        </div>
                        {form.formState.errors.stories?.[idx]?.image_url && (
                          <p className="text-red-500 text-sm mt-1">
                            {
                              form.formState.errors.stories[idx]?.image_url
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      {/* <div className="mt-8 flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-medium"
        >
          {isSubmitting
            ? "Saving..."
            : isEditMode
            ? "Update Invitation"
            : "Create Invitation"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div> */}
    </form>
  );
}
