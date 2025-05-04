export const formatDate = (date: string | null) => {
  if (!date) return null;

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
  }).format(new Date(date));

  return formattedDate;
};
