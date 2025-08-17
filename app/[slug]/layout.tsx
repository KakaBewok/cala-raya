import db from "@/configs/db-config";
import { formatDate } from "@/utils/format-date";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const { data, error } = await db
    .from("invitations")
    .select(
      "host_one_nickname, host_two_nickname, event_title, slug, event_date, images (*)"
    )
    .eq("slug", slug)
    .limit(1);

  const invitation = data?.[0];

  if (!data || error) {
    console.error("Error fetching invitation for metadata: ", error?.message);
    return {
      title: "Undangan tidak ditemukan",
      description: "Silakan periksa kembali link undangan Anda.",
      openGraph: {
        title: "Undangan tidak ditemukan",
        description: "Silakan periksa kembali link undangan Anda.",
        url: `https://calaraya.vercel.app/${slug}`,
      },
    };
  }

  const previewImageObj = invitation?.images.find(
    (image) => image.type === "preview"
  );
  const previewImage =
    previewImageObj?.url ?? "https://calaraya.vercel.app/og-image.jpg";

  return {
    title: `${invitation?.host_two_nickname} ❤️ ${invitation?.host_one_nickname}`,
    description: `${formatDate(invitation?.event_date, true)}`,
    openGraph: {
      title: `${invitation?.event_title}`,
      description: `${formatDate(invitation?.event_date, true)}`,
      url: `https://calaraya.vercel.app/${slug}`,
      images: [
        {
          url: previewImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function SlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
