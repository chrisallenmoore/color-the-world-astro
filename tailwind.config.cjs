/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        paradiso: {
          50: "#f1faf9",
          100: "#dbf2f2",
          200: "#bbe5e6",
          300: "#8cd1d4",
          400: "#56b6ba",
          500: "#3b9a9f",
          600: "#35818a",
          700: "#2f676f",
          800: "#2e555c",
          900: "#2a484f",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
