import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1730", 900: "#0B1730", 800: "#142B49", 700: "#1E3A60", 950: "#070F21" },
        gold: { DEFAULT: "#C9A45C", light: "#DDBF84", dark: "#7E6128" },
        mist: "#F5F7FA",
        ink: { DEFAULT: "#111B2E", soft: "#4A5568" },
        line: "#E3E8EF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: { site: "1200px" },
      boxShadow: { card: "0 1px 2px rgba(11,23,48,.04), 0 8px 24px -12px rgba(11,23,48,.12)" },
    },
  },
  plugins: [],
};
export default config;
