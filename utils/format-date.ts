export const formatDate = (
  date: string | null,
  withDay?: boolean,
  locale: string = "id-ID"
) => {
  if (!date) return null;

  const formattedDate = withDay
    ? new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date))
    : new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date));

  return formattedDate;
};
