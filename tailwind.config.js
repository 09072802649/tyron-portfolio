/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,css}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border, 215 27.9% 16.9%))",
        input: "hsl(var(--input, 215 27.9% 16.9%))",
        ring: "hsl(var(--ring, 186 100% 50%))",
        background: "hsl(var(--background, 222.2 84% 4.9%))",
        foreground: "hsl(var(--foreground, 210 40% 98%))",
        primary: {
          DEFAULT: "hsl(var(--primary, 186 100% 50%))",
          foreground: "hsl(var(--primary-foreground, 222.2 47.4% 11.2%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 217.2 32.6% 17.5%))",
          foreground: "hsl(var(--secondary-foreground, 210 40% 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 217.2 32.6% 17.5%))",
          foreground: "hsl(var(--muted-foreground, 215 20.2% 65.1%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 217.2 32.6% 17.5%))",
          foreground: "hsl(var(--accent-foreground, 210 40% 98%))",
        },
      },
    },
  },
  plugins: [],
};
