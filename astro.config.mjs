import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sanity from '@sanity/astro';
import astroI18next from 'astro-i18next';
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import { loadEnv } from 'vite';

dotenv.config();

const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_MODE,
} = loadEnv(import.meta.env.MODE, process.cwd(), '');

// Determine the adapter based on the environment
const isDevelopment = PUBLIC_MODE === 'development';
const adapter = isDevelopment
  ? node({
      mode: 'standalone',
    })
  : vercel();

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    astroI18next(),
    mdx(),
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2024-07-04',
    }),
  ],
  output: 'hybrid',
  adapter,
});
