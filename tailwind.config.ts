import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'bxl': '3px 3px 0px rgba(111, 122, 204)',
        'blackxl': '2px 2px 1px rgba(0, 0, 0 , 0.4)',
      }
    },
  },
  plugins: [],
} satisfies Config;
