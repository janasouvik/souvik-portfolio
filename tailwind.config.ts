import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Roboto Mono"', "monospace"],
      },
      colors: {
        main: "#1F1E25",
        secondary: "#292830",
        accent: "#00E6A8",
        "accent-hover": "#00C98F",
        primary: "#F5F5F7",
        muted: "#777680",
        border: "#41404A",
        input: "#1F1E25",
      },
      textColor: {
        primary: "#F5F5F7",
        secondary: "#A6A5AE",
        muted: "#777680",
        accent: "#00E6A8",
      },
      backgroundColor: {
        main: "#1F1E25",
        secondary: "#292830",
        accent: "#00E6A8",
        "accent-hover": "#00C98F",
        input: "#1F1E25",
      },
      borderColor: {
        DEFAULT: "#41404A",
        border: "#41404A",
        accent: "#00E6A8",
      },
    },
  },
  plugins: [],
};

export default config;
