import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#101214",
          50: "#1a1c1f",
          100: "#16181b",
          200: "#101214",
          900: "#050607",
        },
        ink: "#050607",
        concrete: {
          DEFAULT: "#8B8E8F",
          50: "#c5c6ca",
          100: "#a4a6a9",
          400: "#8B8E8F",
          600: "#5d5e61",
          800: "#3a3c3e",
        },
        bone: "#F4F1EA",
        petrol: {
          DEFAULT: "#12313A",
          50: "#1a4452",
          100: "#163a47",
          900: "#0a1f25",
        },
        copper: {
          DEFAULT: "#B07A45",
          50: "#d6a37b",
          100: "#c8915f",
          400: "#B07A45",
          600: "#8e5f31",
          800: "#5d3d1f",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tech: "0.18em",
      },
      backgroundImage: {
        "grain-noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        "tech-grid":
          "linear-gradient(to right, rgba(176,122,69,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(176,122,69,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-80": "80px 80px",
      },
      keyframes: {
        "copper-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "copper-pulse": "copper-pulse 3.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
