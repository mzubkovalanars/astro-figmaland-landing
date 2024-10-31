import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv'
dotenv.config()

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost: process.env.SANITY_STUDIO_HOSTNAME,
  autoUpdates: true,
})
