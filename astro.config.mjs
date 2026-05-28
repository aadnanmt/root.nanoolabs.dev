import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.CF_PAGES === "1";

let adapter;
if (isProd) {
  const { default: cloudflare } = await import("@astrojs/cloudflare");
  adapter = cloudflare();
}

export default defineConfig({
  site: "https://me.nanoolabs.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: passthroughImageService(),
  },
  output: isProd ? "server" : "static",
  adapter: adapter,
});
