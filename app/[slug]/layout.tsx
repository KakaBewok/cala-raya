import db from "@/configs/db-config";
import { formatDate } from "@/utils/format-date";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const { data, error } = await db
    .from("invitations")
    .select("event_title, slug, event_date")
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
        // images: [
        //   {
        //     url: "https://calaraya.vercel.app/og-image-not-found.jpg",
        //     width: 1200,
        //     height: 630,
        //   },
        // ],
      },
    };
  }

  return {
    title: `${data.event_title}`,
    description: `${formatDate(data.event_date, true)}`,
    openGraph: {
      title: `${data.event_title}`,
      description: `${formatDate(data.event_date, true)}`,
      url: `https://calaraya.vercel.app/${slug}`,
      //   images: [
      //     {
      //       url:
      //         data.cover_image_url || "https://calaraya.vercel.app/og-image.jpg",
      //       width: 1200,
      //       height: 630,
      //       alt: `Cover Undangan ${data.event_title}`,
      //     },
      //   ],
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
