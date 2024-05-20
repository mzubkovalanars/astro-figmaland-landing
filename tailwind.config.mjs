/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    screens: {
      lg: { max: "1090px" },
      md: { max: "767px" },
      sm: { max: "500px" },
    },
    extend: {
      fontFamily: {
        sans: ['"Graphik"', ...defaultTheme.fontFamily.sans],
        inter: ["Inter", "sans-serif"],
        grotesk: ["SpaceGrotesk", "sans-serif"],
        graphik: ["Graphik", "sans-serif"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        first: "rgb(var(--first-text))",
        second: "rgb(var(--second-text))",
        light: "rgb(var(--light-text))",
        border: "rgb(var(--border))",
        "border-secondary": "rgb(var(--border-secondary))",
        input: "rgb(var(--input) / 5%)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      top: {
        67.1: "67.1%",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%)",
      },
      height: {
        gradient: "calc(100% - 180px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
