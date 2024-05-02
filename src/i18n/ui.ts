import en from "@/locales/en/translation.json";
import no from "@/locales/no/translation.json";

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
    login: "leistungen",
  },
};

export const defaultLang = "en";
