/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "no"],
  i18nextServer: {
    debug: false,
  },
  routes: {
    no: {
      login: "logg-inn",
      contact: "kontakt",
      about: "om-oss",
    },
  },
};
