import { LOCALES } from "../translation";
import { getFromStorage } from "../localeStorage";
export default {
  themeName: "",
  siteLang: getFromStorage("siteLang") || LOCALES.TURKISH,
  name: "maks",
};
