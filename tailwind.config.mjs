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
        "gray-text": "rgb(var(--gray-text))",
        border: "rgb(var(--border))",
        "border-secondary": "rgb(var(--border-secondary))",
        "gradient-blue": "rgb(var(--gradient-blue))",
        "gradient-yellow": "rgb(var(--gradient-yellow))",
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
        "img-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%)",
        "login-gradient":
          "linear-gradient(90deg, rgb(var(--gradient-blue)) 0%, rgb(var(--gradient-yellow)) 100%)",
      },
      height: {
        gradient: "calc(100% - 180px)",
      },
      letterSpacing: {
        tightest: "-.08em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
