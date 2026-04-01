import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06060a",
        surface: "#0e0e14",
        surface2: "#141420",
        accent: "#b4f542",
        accent2: "#42d4f5",
        amber: "#f5a742",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        blink: "blink 2s infinite",
        marquee: "marquee 30s linear infinite",
        fadeUp: "fadeUp 0.8s forwards",
        float: "float 4s ease-in-out infinite",
        scanH: "scanH 4s linear infinite",
        numFloat: "numFloat 5s ease-in-out infinite",
        boxPulse: "boxPulse 3s ease-in-out infinite",
        borderGlow: "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        scanH: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(200%)" } },
        numFloat: {
          "0%,100%": { transform: "translateY(0) rotate(2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        boxPulse: { "0%,100%": { opacity: "0.2" }, "50%": { opacity: "0.9" } },
        borderGlow: {
          "0%,100%": { borderColor: "rgba(180,245,66,0.15)" },
          "50%": { borderColor: "rgba(180,245,66,0.5)", boxShadow: "0 0 20px rgba(180,245,66,0.15)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
