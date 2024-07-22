import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemaTypes';
import { colorInput } from '@sanity/color-input';

const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! || import.meta.env.SANITY_STUDIO_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! || import.meta.env.SANITY_STUDIO_DATASET!;

if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2
    )}`
  );
}

export default defineConfig({
  name: 'default',
  title: 'Astro-figmaland-sanity',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool(), colorInput()],
  schema: {
    types: schemaTypes,
  },
  studioBasePath: '/admin',
});
