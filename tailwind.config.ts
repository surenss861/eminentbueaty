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
        // Base: warm champagne, deeper rosewood for dark-feminine twist
        base: {
          champagne: "#F5E6D3",
          "champagne-warm": "#F0DDC4",
          rosewood: "#8B6F5E",
          "rosewood-deep": "#6B5243",
        },
        // Accent: single rose-gold or mauve
        accent: {
          "rose-gold": "#D4A574",
          mauve: "#C8A1AA",
        },
        // Dark backgrounds (keeping dark feminine)
        dark: {
          espresso: "#2A1F1A",
          "wine-black": "#1A0F0F",
        },
        // Light text
        light: {
          "off-white": "#F6F4F3",
          cream: "#FAF8F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        handwritten: ["var(--font-handwritten)", "cursive"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(212, 165, 116, 0.2)",
        "glow-soft": "0 0 30px rgba(212, 165, 116, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
