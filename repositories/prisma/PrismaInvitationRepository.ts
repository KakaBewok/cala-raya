import prisma from "@/lib/prisma";
import {
  IInvitationRepository,
  CreateInvitationDTO,
  UpdateInvitationDTO,
} from "../interfaces/IInvitationRepository";
import InvitationData from "@/types/invitation-data";

/**
 * Prisma implementation of IInvitationRepository
 * Replaces SupabaseInvitationRepository with type-safe Prisma queries
 */

// Standard include for all invitation queries with relations
const INVITATION_INCLUDE = {
  themes: true,
  music: true,
  images: true,
  rundowns: true,
  gift_infos: true,
  stories: true,
  guests: true,
  rsvps: true,
} as const;

/**
 * Helper to convert time string (HH:mm) to ISO string for Prisma Time columns
 */
const timeToISO = (time: string, dateStr?: string): string => {
  if (!time) return "";
  if (time.includes("T") && time.endsWith("Z")) return time; // Already ISO
  
  const base = dateStr ? new Date(dateStr) : new Date();
  const [hours, minutes] = time.split(":").map(Number);
  
  // Set time components
  base.setHours(hours || 0, minutes || 0, 0, 0);
  return base.toISOString();
};

export class PrismaInvitationRepository implements IInvitationRepository {
  /**
   * Find ALL invitations across all users (admin only)
   */
  async findAll(): Promise<InvitationData[]> {
    try {
      const invitations = await prisma.invitations.findMany({
        include: INVITATION_INCLUDE,
        orderBy: { updated_at: "desc" },
      });
      return invitations as unknown as InvitationData[];
    } catch (error: any) {
      throw new Error(`Failed to fetch all invitations: ${error.message}`);
    }
  }

  /**
   * Find all invitations for a specific user with all related data
   */
  async findByUserId(userId: number): Promise<InvitationData[]> {
    try {
      const invitations = await prisma.invitations.findMany({
        where: { user_id: userId },
        include: INVITATION_INCLUDE,
        orderBy: { created_at: "desc" },
      });

      return invitations as unknown as InvitationData[];
    } catch (error: any) {
      throw new Error(`Failed to fetch invitations: ${error.message}`);
    }
  }

  /**
   * Find ALL invitations paginated (admin only)
   */
  async findAllPaginated(
    page: number,
    pageSize: number
  ): Promise<{ data: InvitationData[]; total: number }> {
    try {
      const skip = (page - 1) * pageSize;
      const [invitations, total] = await Promise.all([
        prisma.invitations.findMany({
          skip,
          take: pageSize,
          include: INVITATION_INCLUDE,
          orderBy: { updated_at: "desc" },
        }),
        prisma.invitations.count(),
      ]);

      return {
        data: invitations as unknown as InvitationData[],
        total,
      };
    } catch (error: any) {
      throw new Error(
        `Failed to fetch paginated invitations: ${error.message}`
      );
    }
  }

  /**
   * Find paginated invitations for a specific user
   */
  async findByUserIdPaginated(
    userId: number,
    page: number,
    pageSize: number
  ): Promise<{ data: InvitationData[]; total: number }> {
    try {
      const skip = (page - 1) * pageSize;
      const [invitations, total] = await Promise.all([
        prisma.invitations.findMany({
          where: { user_id: userId },
          skip,
          take: pageSize,
          include: INVITATION_INCLUDE,
          orderBy: { created_at: "desc" },
        }),
        prisma.invitations.count({
          where: { user_id: userId },
        }),
      ]);

      return {
        data: invitations as unknown as InvitationData[],
        total,
      };
    } catch (error: any) {
      throw new Error(
        `Failed to fetch paginated user invitations: ${error.message}`
      );
    }
  }

  /**
   * Find a single invitation by ID with all related data
   */
  async findById(id: number): Promise<InvitationData | null> {
    try {
      const invitation = await prisma.invitations.findUnique({
        where: { id },
        include: INVITATION_INCLUDE,
      });

      return invitation as unknown as InvitationData | null;
    } catch (error: any) {
      throw new Error(`Failed to fetch invitation: ${error.message}`);
    }
  }

  /**
   * Create a new invitation with all related data
   */
  async create(data: CreateInvitationDTO): Promise<InvitationData> {
    try {
      const invitation = await prisma.invitations.create({
        data: {
          user_id: data.user_id,
          theme_id: data.theme_id,
          slug: data.slug,
          host_one_name: data.host_one_name,
          host_one_nickname: data.host_one_nickname,
          host_one_additional_info: data.host_one_additional_info,
          host_one_social_media: data.host_one_social_media,
          host_two_name: data.host_two_name,
          host_two_nickname: data.host_two_nickname,
          host_two_additional_info: data.host_two_additional_info,
          host_two_social_media: data.host_two_social_media,
          event_title: data.event_title,
          event_date: data.event_date,
          event_type: data.event_type,
          location: data.location,
          location_url: data.location_url,
          location_detail: data.location_detail,
          message: data.message,
          hashtag: data.hashtag,
          web_url: data.web_url,
          // Nested creates
          images: data.images
            ? {
                create: data.images.map((img) => ({
                  url: img.url,
                  public_id: img.public_id,
                  resource_type: img.resource_type,
                  caption: img.caption || null,
                  type: img.type,
                  order_number: img.order_number !== undefined ? String(img.order_number) : null,
                })),
              }
            : undefined,
          rundowns: data.rundowns
            ? {
                create: data.rundowns.map((r) => ({
                  title: r.title,
                  location: r.location,
                  location_url: r.location_url,
                  date: new Date(r.date).toISOString(),
                  start_time: r.start_time ? timeToISO(String(r.start_time), String(r.date)) : null,
                  end_time: r.end_time ? timeToISO(String(r.end_time), String(r.date)) : null,
                  time_zone: r.time_zone,
                  description: r.description,
                  image_url: r.image_url,
                  public_id: r.public_id,
                  resource_type: r.resource_type,
                  location_detail: r.location_detail,
                  order_number: r.order_number !== undefined ? Number(r.order_number) : null,
                })),
              }
            : undefined,
          gift_infos: data.gift_infos
            ? {
                create: data.gift_infos.map((g) => ({
                  provider_name: g.provider_name,
                  account_number: g.account_number,
                  account_holder: g.account_holder,
                  gift_delivery_address: g.gift_delivery_address,
                })),
              }
            : undefined,
          stories: data.stories
            ? {
                create: data.stories.map((s) => ({
                  title: s.title,
                  content: s.content,
                  image_url: s.image_url,
                  public_id: s.public_id,
                  resource_type: s.resource_type,
                  story_date: s.story_date,
                  order_number: s.order_number !== undefined ? Number(s.order_number) : null,
                })),
              }
            : undefined,
        },
        include: INVITATION_INCLUDE,
      });

      // Handle music - only create if URL is provided
      if (data.music && data.music.url) {
        const createdMusic = await prisma.music.create({
          data: {
            title: data.music.title || "",
            artist: data.music.artist || "",
            url: data.music.url,
            public_id: data.music.public_id,
            resource_type: data.music.resource_type || "video",
          },
        });
        await prisma.invitations.update({
          where: { id: invitation.id },
          data: { music_id: createdMusic.id },
        });
      }

      return (await this.findById(invitation.id)) as InvitationData;
    } catch (error: any) {
      throw new Error(`Failed to create invitation: ${error.message}`);
    }
  }

  /**
   * Update an existing invitation
   */
  async update(
    id: number,
    data: UpdateInvitationDTO
  ): Promise<InvitationData> {
    try {
      await prisma.$transaction(async (tx: any) => {
        // 1. Update main fields
        await tx.invitations.update({
          where: { id },
          data: {
            user_id: data.user_id,
            theme_id: data.theme_id,
            host_one_name: data.host_one_name,
            host_one_nickname: data.host_one_nickname,
            host_one_additional_info: data.host_one_additional_info,
            host_one_social_media: data.host_one_social_media,
            host_two_name: data.host_two_name,
            host_two_nickname: data.host_two_nickname,
            host_two_additional_info: data.host_two_additional_info,
            host_two_social_media: data.host_two_social_media,
            event_title: data.event_title,
            event_date: data.event_date,
            event_type: data.event_type,
            location: data.location,
            location_url: data.location_url,
            location_detail: data.location_detail,
            message: data.message,
            hashtag: data.hashtag,
            web_url: data.web_url,
          },
        });

        // 2. Images
        if (data.images !== undefined) {
          await tx.images.deleteMany({ where: { invitation_id: id } });
          if (data.images.length > 0) {
            await tx.images.createMany({
              data: data.images.map((img) => ({
                invitation_id: id,
                url: img.url,
                public_id: img.public_id,
                resource_type: img.resource_type,
                caption: img.caption || null,
                type: img.type,
                order_number: img.order_number !== undefined ? String(img.order_number) : null,
              })),
            });
          }
        }

        // 3. Rundowns
        if (data.rundowns !== undefined) {
          await tx.rundowns.deleteMany({ where: { invitation_id: id } });
          if (data.rundowns.length > 0) {
            await tx.rundowns.createMany({
              data: data.rundowns.map((r) => ({
                invitation_id: id,
                title: r.title,
                location: r.location,
                location_url: r.location_url,
                date: new Date(r.date).toISOString(),
                start_time: r.start_time ? timeToISO(String(r.start_time), String(r.date)) : null,
                end_time: r.end_time ? timeToISO(String(r.end_time), String(r.date)) : null,
                time_zone: r.time_zone,
                description: r.description,
                image_url: r.image_url,
                public_id: r.public_id,
                resource_type: r.resource_type,
                location_detail: r.location_detail,
                order_number: r.order_number !== undefined ? Number(r.order_number) : null,
              })),
            });
          }
        }

        // 4. Gift Infos
        if (data.gift_infos !== undefined) {
          await tx.gift_infos.deleteMany({ where: { invitation_id: id } });
          if (data.gift_infos.length > 0) {
            await tx.gift_infos.createMany({
              data: data.gift_infos.map((g) => ({
                invitation_id: id,
                provider_name: g.provider_name,
                account_number: g.account_number,
                account_holder: g.account_holder,
                gift_delivery_address: g.gift_delivery_address,
              })),
            });
          }
        }

        // 5. Stories
        if (data.stories !== undefined) {
          await tx.stories.deleteMany({ where: { invitation_id: id } });
          if (data.stories.length > 0) {
            await tx.stories.createMany({
              data: data.stories.map((s) => ({
                invitation_id: id,
                title: s.title,
                content: s.content,
                image_url: s.image_url,
                public_id: s.public_id,
                resource_type: s.resource_type,
                story_date: s.story_date,
                order_number: s.order_number !== undefined ? Number(s.order_number) : null,
              })),
            });
          }
        }

        // 6. Music
        if (data.music !== undefined) {
          const inv = await tx.invitations.findUnique({
            where: { id },
            select: { music_id: true }
          });
          
          if (data.music.url) {
            if (inv?.music_id) {
              await tx.music.update({
                where: { id: inv.music_id },
                data: {
                  title: data.music.title || "",
                  artist: data.music.artist || "",
                  url: data.music.url,
                  public_id: data.music.public_id,
                  resource_type: data.music.resource_type || "video",
                }
              });
            } else {
              const newMusic = await tx.music.create({
                data: {
                  title: data.music.title || "",
                  artist: data.music.artist || "",
                  url: data.music.url,
                  public_id: data.music.public_id,
                  resource_type: data.music.resource_type || "video",
                }
              });
              await tx.invitations.update({
                where: { id },
                data: { music_id: newMusic.id }
              });
            }
          } else if (inv?.music_id) {
            await tx.invitations.update({
              where: { id },
              data: { music_id: null }
            });
          }
        }
      });

      return (await this.findById(id)) as InvitationData;
    } catch (error: any) {
      throw new Error(`Failed to update invitation: ${error.message}`);
    }
  }

  /**
   * Delete an invitation
   */
  async delete(id: number): Promise<boolean> {
    try {
      const invitation = await prisma.invitations.findUnique({
        where: { id },
        select: { music_id: true }
      });

      await prisma.$transaction(async (tx: any) => {
        await tx.gift_infos.deleteMany({ where: { invitation_id: id } });
        await tx.guests.deleteMany({ where: { invitation_id: id } });
        await tx.images.deleteMany({ where: { invitation_id: id } });
        await tx.rsvps.deleteMany({ where: { invitation_id: id } });
        await tx.rundowns.deleteMany({ where: { invitation_id: id } });
        await tx.stories.deleteMany({ where: { invitation_id: id } });
        await tx.videos.deleteMany({ where: { invitation_id: id } });
        
        await tx.invitations.delete({ where: { id } });

        if (invitation?.music_id) {
          const otherUsage = await tx.invitations.count({
            where: { music_id: invitation.music_id }
          });
          if (otherUsage === 0) {
            await tx.music.delete({ where: { id: invitation.music_id } });
          }
        }
      });

      return true;
    } catch (error: any) {
      throw new Error(`Failed to delete invitation: ${error.message}`);
    }
  }

  /**
   * Find all active invitations for a user
   */
  async findActiveByUserId(userId: number): Promise<InvitationData[]> {
    try {
      const invitations = await prisma.invitations.findMany({
        where: {
          user_id: userId,
          is_active: true,
        },
        include: INVITATION_INCLUDE,
        orderBy: { created_at: "desc" },
      });

      return invitations as unknown as InvitationData[];
    } catch (error: any) {
      throw new Error(`Failed to fetch active invitations: ${error.message}`);
    }
  }

  /**
   * Update invitation status
   */
  async updateStatus(id: number, isActive: boolean): Promise<boolean> {
    try {
      await prisma.invitations.update({
        where: { id },
        data: { is_active: isActive },
      });
      return true;
    } catch (error: any) {
      throw new Error(`Failed to update invitation status: ${error.message}`);
    }
  }

  /**
   * Get global statistics
   */
  async getGlobalStatistics(userId?: number) {
    try {
      const where = userId ? { user_id: userId } : {};
      const rsvpWhere = userId ? { invitations: { user_id: userId } } : {};
      const guestWhere = userId ? { invitations: { user_id: userId } } : {};
      
      const [totalInvitations, totalGuests, totalRsvps, attendingRsvps] = await Promise.all([
        prisma.invitations.count({ where }),
        prisma.guests.count({ where: guestWhere }),
        prisma.rsvps.count({ where: rsvpWhere }),
        prisma.rsvps.aggregate({
          where: { ...rsvpWhere, attendance_status: true },
          _count: true,
          _sum: { total_guest: true }
        })
      ]);

      const notAttending = await prisma.rsvps.count({
        where: { ...rsvpWhere, attendance_status: false }
      });

      return {
        totalInvitations,
        totalGuests,
        totalRsvps,
        attending: attendingRsvps._count,
        notAttending,
        totalGuestsAttending: attendingRsvps._sum.total_guest || 0,
      };
    } catch (error: any) {
      throw new Error(`Failed to fetch global statistics: ${error.message}`);
    }
  }
}
