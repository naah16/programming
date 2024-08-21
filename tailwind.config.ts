import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'lochmara': { 
          '50': '#f0f9ff', 
          '100': '#dff2ff', 
          '200': '#b9e7fe', 
          '300': '#7bd5fe', 
          '400': '#34c0fc', 
          '500': '#0aa9ed', 
          '600': '#0087cb', 
          '700': '#0077b6', 
          '800': '#055b87', 
          '900': '#0a4b70', 
          '950': ' #07304a',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config