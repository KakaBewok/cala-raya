export function formatTime(timeString: string | null) {
  if (!timeString) {
    return null;
  }

  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`;
}
