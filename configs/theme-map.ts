import FloralPage from "@/themes/floral/FloralPage";
import MagazinePage from "@/themes/magazine/MagazinePage";
import MaroonPageCustom from "@/themes/maroon_custom/MaroonPageCustom";
import MaroonPage from "@/themes/maroon/MaroonPage";
import MonochromePage from "@/themes/monochrome/MonochromePage";
import NetflixPage from "@/themes/netflix/NetflixPage";
import StylishBoldPage from "@/themes/stylishBold/StylishBoldPage";
import { ThemeName } from "@/types/theme-name";
import MaroonMonochromePage from "@/themes/maroon_monochrome/MaroonMonochromePage";

export const themeMap: Record<ThemeName, React.ComponentType> = {
  monochrome: MonochromePage,
  netflix: NetflixPage,
  floral: FloralPage,
  magazine: MagazinePage,
  maroon: MaroonPage,
  maroon_custom: MaroonPageCustom,
  maroon_monochrome: MaroonMonochromePage,
  stylishBold: StylishBoldPage,
};
