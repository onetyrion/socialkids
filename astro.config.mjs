import { defineConfig } from "astro/config";
import { settings } from "./src/data/settings";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date(),
    }),
    icon({
      include: {
        // Include only three `mdi` icons in the bundle
        mdi: ["instagram", "linkedin", "whatsapp", "email"],
        // Include all `uis` icons
        uis: ["*"],
      },
    }),
  ],
});
