"use client";

import MonochromePage from "@/themes/monochrome/MonochromePage";
import NetflixPage from "@/themes/netflix/NetflixPage";
import { ThemeName } from "@/types/theme-name";
import { useParams, useSearchParams } from "next/navigation";
import { ThemeProps } from "@/types/theme-props";
import { useEffect, useState } from "react";
import { useInvitation } from "@/context/InvitationDataContext";
import db from "@/configs/db-config";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";

const themeMap: Record<ThemeName, React.ComponentType<ThemeProps>> = {
  monochrome: MonochromePage,
  netflix: NetflixPage,
};

export default function InvitationPage() {
  const { invitationData, setInvitationData } = useInvitation();
  const params = useParams();
  const queryParams = useSearchParams();

  const slug = params.slug as string;
  const [guestName, setGuestName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setGuestName(queryParams.get("to") ?? "Guest");
  }, [queryParams]);

  useEffect(() => {
    const fetchInvitationData = async () => {
      if (!slug) {
        toast.error("Slug is missing.");
        setLoading(false);
        return;
      }

      try {
        const { data, error: fetchError } = await db
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
          .single();

        if (fetchError) {
          console.error("Error fetching invitation: ", fetchError);
          toast.error("Invitation data not found or an error occurred.");
        } else if (!data) {
          toast.error("No invitation data found.");
        } else {
          setInvitationData(data);
        }
      } catch (err) {
        console.error("Error: ", err);
        toast.error("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvitationData();
  }, [slug, setInvitationData]);

  if (!slug) return <div>Slug not found!</div>;
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Loading />
      </div>
    );
  if (!invitationData) return <div>No invitation data available.</div>;

  const themeName = invitationData.theme?.name as ThemeName;
  const ThemeComponent = themeMap[themeName] ?? themeMap.netflix;

  return <ThemeComponent guest={guestName} />;
}
