export function formatTime(timeString: string | Date | null | undefined) {
  if (!timeString) return "";

  // Handle Date objects (from Prisma @db.Time fields)
  if (timeString instanceof Date) {
    const hours = timeString.getUTCHours().toString().padStart(2, "0");
    const minutes = timeString.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Ensure it's a string before calling .match()
  const str = String(timeString);
  const match = str.match(/(\d{2}:\d{2})/);
  
  return match ? match[0] : str;
}
