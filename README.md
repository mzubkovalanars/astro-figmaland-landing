# Astro FigmaLand Landing

## Deploy:
[astro-figmaland.vercel.app](https://astro-figmaland.vercel.app)

## Resources and tools:
- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [astro-i18next](https://github.com/yassinedoghri/astro-i18next)
- [i18next](https://www.i18next.com/)

---
## 🚀 Project Structure
```text
/
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── images/
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
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json
│   │   └── no/
│   │       └── translation.json
│   ├── pages/
│   │     ├── index.astro
│   │     │   └── ...
│   │     └── no/
│   │         ├── index.astro
│   │         └── ...
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   ├── constants.ts
│   │   └── interfaces.ts
│   └── env.d.ts
├── package.json
├── node_modules
├── .prettierrc
├── astro-i18next.config.mjs
├── astro.config.mjs
├── components.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying (also works for SSR builds if you use an adapter that supports it. Currently, only the Node adapter supports astro preview)     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run i18n`           | Create localized pages to `./pages/`          |
