import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dudhwa: {
          orange: {
            DEFAULT: "#F97316", // Primary Accent
            deep: "#EA580C",
            soft: "#FB923C",
          },
          black: {
            DEFAULT: "#050505", // Base Dark Surface
            near: "#111111", // Card Surface
            card: "#161616",
          },
          white: {
            DEFAULT: "#FFFFFF",
            soft: "#F5F5F0",
          },
          green: {
            forest: "#1F6F4A", // Interactive / Hover Accent
            deep: "#124734",
            light: "#2D9D68",
          },
          gray: {
            border: "#D9D9D2",
            subtle: "#262626",
            muted: "#777777",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
