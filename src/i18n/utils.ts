/**
 * * i18n features for Astro
 **/

import { ui, defaultLang, routes } from './ui';

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

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
