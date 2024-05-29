/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "no"],
  load: ["server", "client"],
  resourcesBasePath: "/src/locales/",
  i18nextServer: {
    backend: {
      debug: true,
      loadPath: "./src/locales/{{lng}}/{{ns}}.json",
    },
  },
  routes: {
    no: {
      login: "logg-inn",
    },
  },
};
