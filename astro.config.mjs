import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";
import dotenv from "dotenv";

dotenv.config();

// Determine the adapter based on the environment
const isDevelopment = process.env.PUBLIC_MODE === "development";
const adapter = isDevelopment ? node({ mode: "standalone" }) : vercel();

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
  adapter,
});
