import db from "@/configs/db-config";
import { decode } from "@/utils/hash";
import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}): Promise<Metadata> {
  const token = decode(searchParams.id || "");
  const invId = token[0];

  if (!invId) {
    return {
      title: "Undangan tidak ditemukan",
      description: "Silakan periksa kembali link undangan Anda.",
    };
  }

  const { data } = await db
    .from("invitations")
    .select("event_title, slug")
    .eq("slug", params.slug)
    .eq("id", invId)
    .single();

  if (!data) {
    return {
      title: "Undangan tidak ditemukan",
      description: "Silakan periksa kembali link undangan Anda.",
    };
  }

  return {
    title: `${data.event_title}`,
    description: `Digital Invitation by Cala Raya Project`,
    openGraph: {
      title: `${data.event_title}`,
      description: `Digital Invitation by Cala Raya Project`,
      url: `https://calaraya.vercel.app/${data.slug}`,
      //   images: [
      //     {
      //       url:
      //         data.cover_image_url || "https://calaraya.vercel.app/og-image.jpg",
      //       width: 1200,
      //       height: 630,
      //     },
      //   ],
    },
  };
}
