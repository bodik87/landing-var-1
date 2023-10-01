import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        loading: "loading 2s linear infinite",
      },
      keyframes: {
        loading: {
          "0%": {
            transform: "translateX(-800%) skewX(-30deg)",
          },

          "100%": {
            transform: "translateX(820%) skewX(-30deg)",
          },
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
