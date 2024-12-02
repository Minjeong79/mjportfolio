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
      },
      height: {
        '550': '550px',
        '80vh' : '80vh',
        '85vh' : '85vh',
        '90vh' : '90vh'
      },
      width:{
        '55p' : '55%',
      }
    },
  },
  plugins: [],
} satisfies Config;
