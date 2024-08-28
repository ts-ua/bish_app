import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    screens: {
      '3xl': '1920px',
      '2xl': '1620px',
      'xl': '1420px',
      'lg': '980px',
      'md': '620px',
      'sm': '326px', // Custom screen size for sm
      // ...other breakpoints
    },
    extend: {
      fontFamily: {
        gilroy: ['Gilroy-Regular', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
        montserrat: ['Montserrat', 'sans-serif'],
        georgia: ['Georgia', 'Times', 'Times New Roman', 'serif'],
      },
      lineHeight: {
        'custom': '44.61px',
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "bg-img-3": "url('/img-3.png')",
        "bg-img-4": "url('/img-4.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/design.png')",
      },

      colors: {
        black: {
          50: "#1D1D1F",
          20: "#F0F2F4",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
          1: "#333333",
        },
        blue: {
          50: "#007AFF",
          60: "#0069d4",
          70: "#007aff",
          80: "#0069d4",

        },
        pink: {
          50: "#FB2A63"
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      }
    },
  },
  plugins: [],
};
export default config;
