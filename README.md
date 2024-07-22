# Astro FigmaLand Landing
Astro FigmaLand Landing is a modern and responsive landing page project built with Astro and React. This project showcases the seamless integration of Astro's static site generation capabilities with React's powerful component-based architecture. The landing page is designed to be visually appealing and performant, leveraging the best practices of both Astro and React to deliver a high-quality user experience.

Explore the live demo: [astro-figmaland.vercel.app](https://astro-figmaland.vercel.app)


## Resources and tools:
- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [astro-i18next](https://github.com/yassinedoghri/astro-i18next)
- [i18next](https://www.i18next.com/)
- [Sanity](https://www.sanity.io/docs)

---
## 🚀 Project Structure
```text
/
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json
│   │   └── no/
│   │       └── translation.json
│   └── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── Nav.astro
│   ├── content/
│   │   ├── content/
│   │   │   ├── Blog
│   │   │   │   ├── exploring-figmaland.mdx
│   │   │   │   └── figmaland-for-beginners.md
│   │   │   └── config.ts
│   ├── i18n/
│   │   ├── utils.ts
│   │   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   ├── components/
│   │   │   ├── button.tsx
│   │   │   └── ...
│   │   ├── utils/
│   │   │   └── utils.ts
│   ├── pages/
│   │     ├── index.astro
│   │     │   └── ...
│   │     └── no/
│   │         ├── index.astro
│   │         └── ...
│   ├── sanity/
│   │   └── client.ts
│   ├── schemaTypes/
│   │   ├── product.ts
│   │   ├── index.ts
│   │   └── ...
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   ├── constants.ts
│   │   └── interfaces.ts
│   └── env.d.ts
├── node_modules
├── .eslintrc
├── .prettierrc
├── .prettierignore
├── astro-i18next.config.mjs
├── astro.config.mjs
├── components.json
├── package.json
├── package-lock.json
├── sanity.config.ts
├── tailwind.config.mjs
└── tsconfig.json
```

## Sanity Studio

Sanity Studio is a customizable content management system (CMS) designed to provide an intuitive interface for managing content in your projects. It integrates seamlessly with Astro and React, offering real-time collaboration, a flexible schema system, and a powerful query language (GROQ). The documentation for GROQ can be found [here](https://www.sanity.io/docs).

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying (also works for SSR builds if you use an adapter that supports it. Currently, only the Node adapter supports astro preview)     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`     | Get help using the Astro CLI                     |
| `npm run i18n`      | Create localized pages to `./pages/`             |
| `npm run sanity`    | Starts Sanity local dev server at `localhost:3333` or `http://localhost:4321/admin`             |
| `npm run build-sanity`    | Build your Sanity Studio             |
| `npm run deploy-sanity`   | Deploy your Sanity Studio            |