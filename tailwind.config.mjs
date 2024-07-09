/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "colorbg-card": "rgb(19, 19, 19)",
        "colorbg-card-hover": "rgb(25, 25, 25)",
        "color-basic-text": "rgb(170, 170, 170)",
        "colorbg-folder": "rgb(36, 36, 36)",
        "spotify-green": "rgb(0, 201, 92)",
      },
    },
  },
  plugins: [],
};
