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
        dark: {
          espresso: "#1e1816",
          "wine-black": "#1a0f0f",
          "midnight-plum": "#1a1014",
        },
        accent: {
          "rose-gold": "#d1a19b",
          "champagne-blush": "#e7cfc7",
          mauve: "#c8a1aa",
        },
        light: {
          "off-white": "#f6f4f3",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        handwritten: ["var(--font-handwritten)", "cursive"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(209, 161, 155, 0.3)",
        "glow-strong": "0 0 40px rgba(209, 161, 155, 0.5)",
        "inner-glow": "inset 0 0 30px rgba(209, 161, 155, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
