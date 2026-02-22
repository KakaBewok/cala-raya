import { z } from "zod";

// ══════════════════════════════════════════════════════════
//  IMAGE TYPES
// ══════════════════════════════════════════════════════════

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
  "rsvp-footer",     // Stylish Bold
  "thumbnail",       // Netflix
  "message",         // Netflix
] as const;

export type ImageType = (typeof imageType)[number];

// ══════════════════════════════════════════════════════════
//  CENTRALIZED THEME CONFIGURATION
// ══════════════════════════════════════════════════════════

/** Default image types included in ALL themes. */
export const DEFAULT_IMAGE_TYPES: ImageType[] = [
  "gallery",
  "hero",
  "cover",
  "grooms",
  "brides",
  "event-info",
  "initial",
  "closing",
  "preview",
];

/** Theme-specific extra image types (merged with defaults). */
export const THEME_EXTRA_IMAGES: Record<string, ImageType[]> = {
  stylishBold: ["initial-outline", "rsvp-footer"],
  netflix:     ["thumbnail", "message"],
};

/** Feature flags per theme. */
export const THEME_FEATURES: Record<string, { stories: boolean }> = {
  netflix:     { stories: true },
  stylishBold: { stories: false },
  default:     { stories: false },
};

/** Image upload limits per type. gallery → max 10, everything else → 1. */
export const IMAGE_MAX_COUNT: Record<string, number | null> = {
  gallery: 10,
};

// ══════════════════════════════════════════════════════════
//  SECTION LIMITS — single source of truth
// ══════════════════════════════════════════════════════════

export const SECTION_LIMITS = {
  rundowns:   3,
  gift_infos: 2,
  stories:    5,
} as const;

// ──────────────────────────────────────────────────────────
//  Helper functions consumed by components & backend
// ──────────────────────────────────────────────────────────

export function getImageTypesForTheme(themeName: string): ImageType[] {
  const extras = THEME_EXTRA_IMAGES[themeName] || [];
  return [...DEFAULT_IMAGE_TYPES, ...extras];
}

export function getMaxImagesForType(type: string): number | null {
  return IMAGE_MAX_COUNT[type] ?? 1;
}

export function getThemeFeatures(themeName: string) {
  return THEME_FEATURES[themeName] || THEME_FEATURES["default"] || { stories: false };
}

/** Backward-compatible theme → image types map. */
export const THEME_CONFIG: Record<string, ImageType[]> = {
  netflix:     getImageTypesForTheme("netflix"),
  stylishBold: getImageTypesForTheme("stylishBold"),
  default:     getImageTypesForTheme("default"),
};

// ══════════════════════════════════════════════════════════
//  SHARED TYPES
// ══════════════════════════════════════════════════════════

export type OrderedItem = {
  order_number?: number | null;
  type?: string;
};

// ══════════════════════════════════════════════════════════
//  ZOD SUB-SCHEMAS
// ══════════════════════════════════════════════════════════

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
  order_number: z.number().optional(),
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
  order_number: z.number(),
});

export const giftInfoSchema = z.object({
  provider_name: z.string().min(1, "Provider name is required"),
  account_number: z.string().min(1, "Account number is required"),
  account_holder: z.string().min(1, "Account holder is required"),
  gift_delivery_address: z.string().optional(),
});

export const storySchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image_url: z.string().url("Please provide a valid image URL"),
  story_date: z.string().min(1, "Date is required"),
  order_number: z.number(),
});

// ══════════════════════════════════════════════════════════
//  MAIN FORM SCHEMA
// ══════════════════════════════════════════════════════════

export const invitationFormSchema = z.object({
  // Host One
  host_one_name: z.string().min(1, "Grooms name is required"),
  host_one_nickname: z.string().min(1, "Grooms nickname is required"),
  host_one_additional_info: z.string().min(1, "Grooms additional info is required"),
  host_one_social_media: z.string().optional(),

  // Host Two
  host_two_name: z.string().min(1, "Brides name is required"),
  host_two_nickname: z.string().min(1, "Brides nickname is required"),
  host_two_additional_info: z.string().min(1, "Brides additional info is required"),
  host_two_social_media: z.string().optional(),

  // Etc
  hashtag: z.string().optional(),

  // ── 7 backend-managed event fields ──
  // These are NOT rendered on the form; backend always overrides them.
  // Kept optional so Zod doesn't block submission.
  event_title: z.string().optional(),
  event_date: z.string().optional(),
  event_type: z.string().optional(),
  location: z.string().optional(),
  location_url: z.string().optional(),
  location_detail: z.string().optional(),
  message: z.string().optional(),

  // Theme
  themes: themeSchema,

  // Music
  music: musicSchema,

  // Images — validated per-type via superRefine
  images: z.array(imageSchema).min(1, "At least one image is required"),

  // Rundowns — max 3
  rundowns: z
    .array(rundownSchema)
    .min(1, "At least one rundown is required")
    .max(SECTION_LIMITS.rundowns, `Maximum ${SECTION_LIMITS.rundowns} rundown entries allowed`),

  // Gift infos — max 2
  gift_infos: z
    .array(giftInfoSchema)
    .max(SECTION_LIMITS.gift_infos, `Maximum ${SECTION_LIMITS.gift_infos} gift info entries allowed`)
    .optional(),

  // Stories — max 5
  stories: z
    .array(storySchema)
    .max(SECTION_LIMITS.stories, `Maximum ${SECTION_LIMITS.stories} story entries allowed`)
    .optional(),

  web_url: z.string().optional(),

  // Admin-only: assign invitation to a specific user
  user_id: z.number().optional(),
}).superRefine((data, ctx) => {
  const themeName = data.themes?.name || "default";
  const allowedTypes = getImageTypesForTheme(themeName);

  // ── Validate per-type image counts ──
  if (data.images) {
    const countByType: Record<string, number> = {};
    for (const img of data.images) {
      countByType[img.type] = (countByType[img.type] || 0) + 1;
    }

    for (const [type, count] of Object.entries(countByType)) {
      if (!allowedTypes.includes(type as ImageType)) continue;

      const max = getMaxImagesForType(type);
      if (max !== null && count > max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["images"],
          message: `"${type}" allows at most ${max} image(s), but ${count} were provided.`,
        });
      }
    }
  }
});

export type InvitationFormData = z.infer<typeof invitationFormSchema>;
