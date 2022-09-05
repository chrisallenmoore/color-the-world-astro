import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://chrisallenmoore.github.io",
  base: "/",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [react(), svelte(), image(), mdx(), partytown(), tailwind({})],
});
