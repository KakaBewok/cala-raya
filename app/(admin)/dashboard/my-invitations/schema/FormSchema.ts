import { z } from "zod";

export const imageType = [
  "gallery",
  "hero",
  "cover",
  "grooms",
  "brides",
  "event-info",
  "initial",
  "closing",
  "preview",
  "initial-outline", // Stylish Bold
  "rsvp-footer", // Stylish Bold
  "thumbnail", // Netflix
  "message", // Netflix
] as const;

export const BASE_IMAGE_TYPES = [
  "gallery",
  "hero",
  "grooms",
  "brides",
  "preview",
];

export const THEME_CONFIG: Record<string, string[]> = {
  netflix: [...BASE_IMAGE_TYPES, "thumbnail", "message"],
  stylishBold: [
    ...BASE_IMAGE_TYPES,
    "cover",
    "initial",
    "closing",
    "initial-outline",
    "rsvp-footer",
  ],
  default: [...BASE_IMAGE_TYPES, "cover", "event-info", "initial", "closing"],
};

export type ImageType = (typeof imageType)[number];

export type OrderedItem = {
  order_number?: number | null;
  type?: string;
};

// Base schemas for reusability
export const themeSchema = z.object({
  name: z.string().min(1, "Theme is required"),
});

export const musicSchema = z.object({
  title: z.string().optional(),
  artist: z.string().optional(),
  url: z.string().url("Please provide a valid music URL"),
});

export const imageSchema = z.object({
  url: z.string().url("Please provide a valid image URL"),
  type: z.enum(imageType),
  order_number: z.number().optional(), // Only gallery
});

export const rundownSchema = z.object({
  title: z.string().min(1, "Title is required"),
  location: z.string().min(1, "Location is required"),
  location_detail: z.string().optional(),
  location_url: z
    .string()
    .url("Please provide a valid URL")
    .optional()
    .or(z.literal("")),
  date: z.string().min(1, "Date is required"),
  start_time: z.string().min(1, "Start time is required"),
  end_time: z.string().optional(),
  time_zone: z.string().min(1, "Time zone is required"),
  description: z.string().optional(),
  image_url: z.string().optional(),
  order_number: z.number(),
});

export const giftInfoSchema = z.object({
  provider_name: z.string().min(1, "Provider name is required"),
  account_number: z.string().min(1, "Account number is required"),
  account_holder: z.string().min(1, "Account holder is required"),
  gift_delivery_address: z.string().optional(),
});

// Currently only for netflix
export const storySchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image_url: z.string().url("Please provide a valid image URL"),
  story_date: z.string().min(1, "Date is required"),
  order_number: z.number(),
});

// Main form schema
export const invitationFormSchema = z.object({
  // Host One Information
  host_one_name: z.string().min(1, "Grooms name is required"),
  host_one_nickname: z.string().min(1, "Grooms nickname is required"),
  host_one_additional_info: z
    .string()
    .min(1, "Grooms additional info is required"),
  host_one_social_media: z.string().optional(),

  // Host Two Information
  host_two_name: z.string().min(1, "Brides name is required"),
  host_two_nickname: z.string().min(1, "Brides nickname is required"),
  host_two_additional_info: z
    .string()
    .min(1, "Brides additional info is required"),
  host_two_social_media: z.string().optional(),

  // Etc.
  hashtag: z.string().optional(),

  // Event Details
  event_title: z.string().min(1, "Event title is required"),
  event_date: z.string().min(1, "Event date is required"),
  event_type: z.string().min(1, "Event type is required"),
  location: z.string().min(1, "Location is required"),
  location_url: z.string().url("Please provide a valid URL").optional().or(z.literal("")),
  location_detail: z.string().optional(),
  message: z.string().optional(),


  // Theme (Required)
  themes: themeSchema,

  // Music (Required)
  music: musicSchema,

  // Images (Required, at least 1)
  images: z.array(imageSchema).min(1, "At least one image is required"),

  // Rundowns (Required, at least 1)
  rundowns: z.array(rundownSchema).min(1, "At least one rundown is required"),

  // Optional sections
  gift_infos: z.array(giftInfoSchema).optional(),
  stories: z.array(storySchema).optional(),
});

export type InvitationFormData = z.infer<typeof invitationFormSchema>;
