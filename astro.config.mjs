import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://chrisallenmoore.github.io",
  base: "/color-the-world-astro",
  trailingSlash: "always",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [react(), svelte(), image(), mdx(), tailwind({})],
});
