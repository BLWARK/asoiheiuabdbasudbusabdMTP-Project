import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#a80068",        // Warna utama
        secondary: "#f4f4f4",   // Warna sekunder
        hover: "#34D399",       // Warna saat hover
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"], // Font untuk isi
      },
    },
  },
  plugins: [],
} satisfies Config;
