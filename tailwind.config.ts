import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef9f0",
          100: "#fef3e0",
          200: "#fce5c1",
          300: "#f9d082",
          400: "#f5b643",
          500: "#f2a01c",
          600: "#e38912",
          700: "#bc6a10",
          800: "#975515",
          900: "#7a4714",
        },
        luxury: {
          gold: "#d4af37",
          cream: "#f5f5dc",
          charcoal: "#36454f",
          navy: "#1a1a2e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

