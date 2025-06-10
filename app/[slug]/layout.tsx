import db from "@/configs/db-config";
import { formatDate } from "@/utils/format-date";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  // params: Promise<{ slug: string }>;
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const { data, error } = await db
    .from("invitations")
    .select("event_title, slug, event_date, images (*)")
    .eq("slug", slug)
    .single();

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

  const previewImageObj = data.images.find((image) => image.type === "preview");
  const previewImage =
    previewImageObj?.url ?? "https://calaraya.vercel.app/og-image.jpg";

  return {
    title: `${data.event_title}`,
    description: `${formatDate(data.event_date, true)}`,
    openGraph: {
      title: `${data.event_title}`,
      description: `${formatDate(data.event_date, true)}`,
      url: `https://calaraya.vercel.app/${slug}`,
      images: [
        {
          url: previewImage,
          width: 1200,
          height: 630,
          alt: `Cover ${data.event_title}`,
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
