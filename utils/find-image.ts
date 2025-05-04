import InvitationData from "@/types/invitation-data";

export const findImage = (data: InvitationData | null, imagetype: string) => {
  const image = data?.images?.find((image) => image.type === imagetype)?.url;
  return image || "";
};
