// export const formatDate = (date: string | null) => {
//   if (!date) return null;

//   const formattedDate = new Intl.DateTimeFormat("id-ID", {
//     dateStyle: "long",
//   }).format(new Date(date));

//   return formattedDate;
// };

export const formatDate = (date: string | null, withDay?: boolean) => {
  if (!date) return null;

  const formattedDate = withDay
    ? new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date))
    : new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date));

  return formattedDate;
};
