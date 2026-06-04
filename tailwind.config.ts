import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome (zinc) + electric blue accent
        ink: "#09090b",       // primary text / headings
        graphite: "#27272a",  // strong secondary
        body: "#3f3f46",      // body text
        muted: "#71717a",     // secondary text
        faint: "#a1a1aa",     // labels / tertiary
        line: "#e6e4ef",      // borders (slightly violet-tinted)
        line2: "#f3f1fa",     // subtle dividers
        surface: "#ffffff",
        canvas: "#faf9fe",    // page background (soft violet white)
        brand: "#4f46e5",     // accent (indigo)
        brandDark: "#4338ca",
        brandSoft: "#eef2ff",
        iris: "#6366f1",
        violet: { DEFAULT: "#7c3aed", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa" },
        fuchsia: { DEFAULT: "#db2777", 300: "#f0abfc", 400: "#e879f9" },
        sky: "#0ea5e9",
        amber: "#f59e0b",
        emerald: { DEFAULT: "#10b981", 400: "#34d399", 500: "#10b981" },
        tint: "#f5f3ff",
        tint2: "#eef2ff",
        // dark-glass theme
        night: "#07070c",
        night2: "#0b0b14",
        nightline: "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(9,9,11,0.04), 0 1px 3px rgba(9,9,11,0.05)",
        lift: "0 16px 40px -16px rgba(9,9,11,0.22)",
        glow: "0 0 0 1px rgba(37,99,235,0.18), 0 18px 50px -18px rgba(37,99,235,0.35)",
      },
      keyframes: {
        flow: { to: { strokeDashoffset: "-20" } },
        nodepulse: {
          "0%,100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.35)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        flow: "flow 1.1s linear infinite",
        nodepulse: "nodepulse 2.4s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
