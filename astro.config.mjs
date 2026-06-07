import { defineConfig, passthroughImageService } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { execSync } from "child_process"

const isProd = process.env.CF_PAGES === "1"

let gitHash = "unknown"
try {
  gitHash = execSync("git rev-parse --short HEAD").toString().trim()
} catch (e) {
  console.warn("Could not get git hash")
}

let adapter
if (isProd) {
  const { default: cloudflare } = await import("@astrojs/cloudflare")
  adapter = cloudflare()
}

export default defineConfig({
  site: "https://root.nanoolabs.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: passthroughImageService(),
  },
  output: isProd ? "server" : "static",
  adapter: adapter,
  vite: {
    define: {
      "import.meta.env.GIT_HASH": JSON.stringify(
        process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7) || gitHash,
      ),
    },
  },
})
