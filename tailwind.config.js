/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A1931",
        surface: "#1A3D63",
        card: "#1A3D63",
        border: "#2a4a6b",
        muted: "#B3CFE5",
        subtle: "#3F3F46",
        primary: "#F6FAFD",
        accent: "#4A7FA7",
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
