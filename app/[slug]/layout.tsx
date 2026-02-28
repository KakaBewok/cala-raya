import { publicInvitationService } from "@/services/PublicInvitationService";
import { formatDate } from "@/utils/format-date";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const invitation = await publicInvitationService.getInvitationMetadata(slug);

  if (!invitation) {
    console.error("Invitation not found for slug:", slug);
    return {
      title: "Undangan tidak ditemukan",
      description: "Silakan periksa kembali link undangan Anda.",
      openGraph: {
        title: "Undangan tidak ditemukan",
        description: "Silakan periksa kembali link undangan Anda.",
        url: `${process.env.NEXT_PUBLIC_APP_URL_PROD!}/${slug}`,
      },
    };
  }

  const previewImageObj = invitation.images.find(
    (image) => image.type === "preview"
  );
  const previewImage =
    previewImageObj?.url ?? `${process.env.NEXT_PUBLIC_APP_URL_PROD!}/og-image.jpg`;

  return {
    title: `${invitation?.host_one_nickname} ❤️ ${invitation?.host_two_nickname}`,
    description: `${formatDate(invitation?.rundowns[0].date, true)}`,
    openGraph: {
      title: `${invitation?.event_title}`,
      description: `${formatDate(invitation?.rundowns[0].date, true)}`,
      url: `${process.env.NEXT_PUBLIC_APP_URL_PROD!}/${slug}`,
      images: [
        {
          url: previewImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
    card: 'summary_large_image',
    title: `${invitation?.event_title}`,
    description: `${formatDate(invitation?.rundowns[0].date, true)}`,
    images: [previewImage], 
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
