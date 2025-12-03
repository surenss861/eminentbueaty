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
        blush: {
          base: "#F8ECEB",
          deep: "#EAD7D1",
          rosewood: "#D4B5B0",
        },
        ink: {
          black: "#1B1B1B",
          espresso: "#3A2F2F",
        },
        gold: {
          soft: "#E8D8BE",
          champagne: "#D4C4A8",
          shimmer: "#F5E6D3",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        handwritten: ["var(--font-handwritten)", "cursive"],
      },
      backgroundImage: {
        "gradient-shimmer": "linear-gradient(135deg, #E8D8BE 0%, #F5E6D3 50%, #E8D8BE 100%)",
        "gradient-glow": "radial-gradient(circle at 50% 50%, rgba(232, 216, 190, 0.3) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
