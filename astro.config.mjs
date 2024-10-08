import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://frameplugins.com',
  integrations: [tailwind(), sitemap(), icon()],
  trailingSlash: 'never',
  output: "server",
  adapter: netlify(),
  build: {
    format: 'file'
  },
});