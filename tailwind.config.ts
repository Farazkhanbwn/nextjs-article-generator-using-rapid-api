import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "@layer font-face": {
        "@font-face": {
          fontFamily: "Satoshi",
          src: "url('/assets/fonts/Satoshi-Regular.woff2') format('woff2')",
          fontWeight: "400",
          fontStyle: "normal",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi-Regular", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
