/**
 * * i18n features for Astro
 **/
import { defaultLang, routes, ui } from './ui';

const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key as keyof (typeof ui)['en']] || key;
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, newLang: keyof typeof ui = lang): string {
    const segments = path.replace(/^\/|\/$/g, '').split('/');
    const hasCurrentLanguage = segments[0] === lang;
    const adjustedSegments = hasCurrentLanguage ? segments.slice(1) : segments;
    const pathName = adjustedSegments.join('/');

    const hasTranslation = defaultLang !== newLang && routes[newLang]?.[pathName] !== undefined;

    const translatedPath = hasTranslation ? routes[newLang][pathName] : pathName;

    if (!showDefaultLang && newLang === defaultLang) {
      return `/${translatedPath}`;
    } else {
      return `/${newLang}/${translatedPath}`;
    }
  };
}
