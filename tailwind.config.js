/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#0F0F0F",
        card: "#141414",
        border: "#1F1F1F",
        muted: "#71717A",
        subtle: "#3F3F46",
        primary: "#ECECEC",
        accent: "#7C3AED",
      },
      fontFamily: {
        display: ["'Satoshi'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
