import { defineConfig } from "astro/config";
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap({
    lastmod: new Date(),
  }), icon({
    include: {
      // Include only three `mdi` icons in the bundle
      mdi: ['instagram', 'linkedin', 'whatsapp'],
      // Include all `uis` icons
      uis: ['*']
    }
  })],
});
