import { createI18n } from "vue-i18n";
import vi from "@/locales/vi";
import en from "@/locales/en";

const i18n = createI18n({
  legacy: false,
  locale: "vi",
  fallbackLocale: "vi",
  messages: {
    vi,
    en,
  },
});

export default i18n;
