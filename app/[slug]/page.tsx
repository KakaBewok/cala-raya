"use client";

import MonochromePage from "@/themes/monochrome/MonochromePage";
import NetflixPage from "@/themes/netflix/NetflixPage";
import data from "../../data/data";
import { ThemeName } from "@/types/theme-name";
import { useParams, useSearchParams } from "next/navigation";
import { ThemeProps } from "@/types/theme-props";
import { useEffect, useState } from "react";
import { useInvitation } from "@/context/InvitationDataContext";

const themeMap: Record<ThemeName, React.ComponentType<ThemeProps>> = {
  monochrome: MonochromePage,
  netflix: NetflixPage,
};

export default function Page() {
  const { setInvitationData } = useInvitation();
  const searchParams = useSearchParams();
  const params = useParams();

  const [to, setTo] = useState<string>("");
  const slug = params.slug;

  useEffect(() => {
    setTo(searchParams.get("to") ?? "Guest");
  }, [searchParams]);

  if (!slug) return <div>Slug not found!</div>;

  console.log("ini slug: ", slug);

  const invitationData = data.find((item) => item.slug === slug);

  if (!invitationData) return <div>Invitation data not found!</div>;

  const ThemeComponent =
    themeMap[invitationData.theme as ThemeName] ?? themeMap.netflix;

  setInvitationData(invitationData);

  return <ThemeComponent guest={to} />;
}
