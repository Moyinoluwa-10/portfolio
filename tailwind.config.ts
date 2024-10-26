import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        recursive: ["var(--font-recursive)"],
      },
      container: {
        center: true,
      },
      colors: {
        white: "#FFFFFF",
        black: "#0B1C1C",
        primary: {
          DEFAULT: "#1C4645",
          50: "#DDF3F266",
          100: "#DDF3F2",
        },
        secondary: "#F88904",
        alt: {
          1: "rgb(var(--color-accent-1) / <alpha-value>)",
          2: "#1AFFA8",
          3: "#6B7884",
          4: "#D9D9D926",
        },
        accent: {
          1: "#E3EAEA",
          2: "#0B1C1C",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
