import db from "@/configs/db-config";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data, error } = await db
    .from("invitations")
    .select("event_title, slug")
    .eq("slug", params.slug)
    .single();

  if (!data || error) {
    console.error("Error fetching invitation for metadata: ", error?.message);
    return {
      title: "Undangan tidak ditemukan",
      description: "Silakan periksa kembali link undangan Anda.",
      openGraph: {
        title: "Undangan tidak ditemukan",
        description: "Silakan periksa kembali link undangan Anda.",
        url: `https://calaraya.vercel.app/${params.slug}`,
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
    description: `Digital Invitation by Cala Raya Project.`,
    openGraph: {
      title: `${data.event_title}`,
      description: `Digital Invitation by Cala Raya Project.`,
      url: `https://calaraya.vercel.app/${data.slug}`,
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
