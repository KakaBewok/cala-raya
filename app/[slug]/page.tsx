"use client";

import Loading from "@/components/Loading";
import db from "@/configs/db-config";
import { useInvitation } from "@/context/InvitationDataContext";
import MonochromePage from "@/themes/monochrome/MonochromePage";
import NetflixPage from "@/themes/netflix/NetflixPage";
import { ThemeName } from "@/types/theme-name";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const themeMap: Record<ThemeName, React.ComponentType> = {
  monochrome: MonochromePage,
  netflix: NetflixPage,
};

export default function InvitationPage() {
  const { invitationData, setInvitationData, setGuest } = useInvitation();
  const params = useParams();
  const queryParams = useSearchParams();

  const slug = params.slug as string;
  const invId = queryParams.get("inv_id");
  const guestId = queryParams.get("guest_id");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInvitationData = async () => {
      if (!slug || !invId) {
        toast.error("Missing slug or invitation ID.");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await db
          .from("invitations")
          .select(
            `
            *,
            themes (*),
            music (*),
            videos (*),
            images (*),
            gift_infos (*),
            rundowns (*),
            guests (*),
            stories (*),
            rsvps (*)
          `
          )
          .eq("slug", slug)
          .eq("id", invId)
          .single();

        if (error) {
          toast.error("Invitation not found.");
        } else {
          setInvitationData(data);
        }
      } catch (err) {
        console.error("Unexpected error: ", err);
        toast.error("Unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvitationData();
  }, [slug, invId, setInvitationData]);

  // Get guest data from list after invitation loaded
  useEffect(() => {
    if (!invitationData || !guestId) return;

    const guestData = invitationData.guests?.find(
      (item) => item.id.toString() === guestId.toString()
    );
    setGuest(guestData || null);
  }, [invitationData, guestId, setGuest]);

  const themeName = invitationData?.theme?.name as ThemeName;
  const ThemeComponent = themeMap[themeName] ?? themeMap.netflix;

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Loading />
      </div>
    );

  if (!invitationData) return <div>No invitation data available.</div>;
  if (!slug) return <div>Slug not found!</div>;

  return <ThemeComponent />;
}
