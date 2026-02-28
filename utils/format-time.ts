export function formatTime(timeString: string | null) {
  if (!timeString) return "";

  const match = timeString.match(/(\d{2}:\d{2})/);
  
  return match ? match[0] : timeString;
}
