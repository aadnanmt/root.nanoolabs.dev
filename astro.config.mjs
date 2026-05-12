import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://me.nanoolabs.dev",
  output: 'server',
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: cloudflare()
});
