import MonochromePage from "@/themes/monochrome/MonochromePage";
import NetflixPage from "@/themes/netflix/NetflixPage";

const themeMap = {
  monochrome: MonochromePage,
  Netflix: NetflixPage,
};

export default async function Page({ params, searchParams }) {
  const { slug } = params;
  const { to } = searchParams;

  // Misal ambil data dari JSON statis atau DB
  const invitationData = await getInvitationBySlug(slug);

  const ThemeComponent = themeMap[invitationData.theme];

  if (!ThemeComponent) {
    return <div>Theme not found</div>;
  }

  return <ThemeComponent data={invitationData} guest={to} />;
}
