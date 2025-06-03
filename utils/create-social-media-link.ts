export const createSocialMediaLink = (username: string) => {
  if (!username) return "#";
  return `https://instagram.com/${username}`;
};
