/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'en',
  locales: ['en', 'no'],
  load: ['server'],
  i18nextServer: {
    debug: true,
    backend: {
      loadPath: './src/assets/locales/{{lng}}/{{ns}}.json',
    },
  },
  routes: {
    no: {
      login: 'logg-inn',
      contact: 'kontakt',
    },
  },
};
