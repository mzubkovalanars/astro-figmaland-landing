import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    astroI18next(),
    mdx(),
  ],
  output: "server",
  adapter:
    import.meta.env.MODE === "development"
      ? node({
          mode: "standalone",
        })
      : vercel(),
});
