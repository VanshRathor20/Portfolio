/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        card: "#161616",
        border: "#222222",
        muted: "#A1A1AA",
        subtle: "#52525B",
        primary: "#F5F5F5",
        accent: "#7C3AED",
        accentLight: "#8B5CF6",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        display: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
