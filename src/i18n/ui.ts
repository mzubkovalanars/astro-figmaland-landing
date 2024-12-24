import en from '@assets/locales/en/translation.json';
import no from '@assets/locales/no/translation.json';

export const languages = {
  en: 'En',
  no: 'No',
};

export const ui = {
  en: en,
  no: no,
} as const;

export const routes: Record<string, Record<string, string>> = {
  no: {
    login: 'logg-inn',
    contact: 'kontakt',
  },
};

export const defaultLang = 'en';
