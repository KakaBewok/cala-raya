"use server";

import { publicInvitationService } from "@/services/PublicInvitationService";
import InvitationData from "@/types/invitation-data";

/**
 * Server action to fetch public invitation data
 * This runs on the server and keeps database logic secure
 */
export async function getPublicInvitation(
  slug: string,
  invitationId: number
): Promise<{ data: InvitationData | null; error: string | null }> {
  try {
    const invitation = await publicInvitationService.getPublicInvitation(
      slug,
      invitationId
    );

    if (!invitation) {
      return {
        data: null,
        error: "Invitation not found",
      };
    }

    return {
      data: invitation,
      error: null,
    };
  } catch (error: unknown) {
    console.error("Server action error:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Failed to fetch invitation",
    };
  }
}

/**
 * Server action to fetch invitation by slug only
 */
export async function getInvitationBySlug(
  slug: string
): Promise<{ data: InvitationData | null; error: string | null }> {
  try {
    const invitation = await publicInvitationService.getInvitationBySlug(slug);

    if (!invitation) {
      return {
        data: null,
        error: "Invitation not found",
      };
    }

    return {
      data: invitation,
      error: null,
    };
  } catch (error: unknown) {
    console.error("Server action error:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Failed to fetch invitation",
    };
  }
}
