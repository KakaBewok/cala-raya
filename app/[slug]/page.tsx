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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setGuest(queryParams.get("to") ?? "Guest");
  }, [queryParams, setGuest]);

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

  return <ThemeComponent />;
}
