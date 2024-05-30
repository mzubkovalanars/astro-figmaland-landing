import en from "@public/locales/en/translation.json";
import no from "@public/locales/no/translation.json";

export const languages = {
  en: "En",
  no: "No",
};

export const ui = {
  en: en,
  no: no,
} as const;

export const routes: Record<string, Record<string, string>> = {
  no: {
    login: "logg-inn",
  },
};

export const defaultLang = "en";
