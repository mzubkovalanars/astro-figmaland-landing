# Astro FigmaLand Landing


## Resources and tools:
- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [astro-i18next](https://github.com/yassinedoghri/astro-i18next)
- [i18next](https://www.i18next.com/)

---
## 🚀 Project Structure
```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Nav.astro
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
│   ├── env.d.ts
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
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run i18n`           | Create localized pages to `./pages/`          |
