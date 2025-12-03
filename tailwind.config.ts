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
        luxury: {
          blush: "#E8D5C4",
          "dusty-rose": "#D4A5A5",
          "soft-rose": "#E8C4C4",
          ivory: "#FAF8F3",
          "warm-white": "#FFFEF9",
          navy: "#1B2A3A",
          charcoal: "#2C3E50",
          gold: "#C9A961",
          "soft-gold": "#E8D5B7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        elegant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

