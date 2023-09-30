import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-black": "#0D0F14",
      },
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
  plugins: [],
};
export default config;
