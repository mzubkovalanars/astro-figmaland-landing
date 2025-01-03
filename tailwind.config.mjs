/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    screens: {
      xl: {
        max: '1280px',
      },
      lg: {
        max: '1090px',
      },
      md: {
        max: '767px',
      },
      sm: {
        max: '500px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Graphik"', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', 'sans-serif'],
        grotesk: ['SpaceGrotesk', 'sans-serif'],
        graphik: ['Graphik', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
        first: 'rgb(var(--first-text))',
        second: 'rgb(var(--second-text))',
        light: 'rgb(var(--light-text))',
        'gray-text': 'rgb(var(--gray-text))',
        border: 'rgb(var(--border))',
        'border-secondary': 'rgb(var(--border-secondary))',
        'gradient-blue': 'rgb(var(--gradient-blue))',
        'gradient-yellow': 'rgb(var(--gradient-yellow))',
        'gradient-violet': 'rgb(var(--gradient-violet))',
        'gradient-violet-secondary': 'rgb(var(--gradient-violet-secondary))',
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 2px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      top: {
        67.1: '67.1%',
      },
      backgroundImage: {
        'img-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0E0E 66.15%)',
        'login-gradient':
          'linear-gradient(90deg, rgb(var(--gradient-blue)) 0%, rgb(var(--gradient-yellow)) 100%)',
        'contact-gradient':
          'linear-gradient(90deg, rgb(var(--gradient-violet)) 0%, rgb(var(--gradient-violet-secondary)) 100%)',
      },
      height: {
        gradient: 'calc(100% - 180px)',
      },
      letterSpacing: {
        tightest: '-.08em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
