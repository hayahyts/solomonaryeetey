import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#7A7A7A",
        background: "#FFFFFF",
        accent: {
          from: "#FFE259",
          to: "#FFA751",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        soft: "0 10px 50px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, var(--accent-from), var(--accent-to))',
      },
      typography: {},
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config


