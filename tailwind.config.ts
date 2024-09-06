import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        outfit: ["var(--font-outfit)"],
      },
      screens: {
        "1024px": "1024px",
        "1320px": "1320px",
        "1440px": "1440px",
        "1600px": "1600px",
        "1700px": "1700px",
      },
      backgroundImage: {
        "free-trail-image": "url('/free-trial-BG.png')",
        "feature-card": "url('/bg/feature-card.svg')",
      },
      boxShadow: {
        custom: "0px 5px 16px 0px #080F340F",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        backgroundImage: {
          linear: "linear-gradient(89.7deg, #EAFEFF -27.13%, #FFFBF1 112.83%)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "brand-1": "#1A86FE",
          "brand-2": "#CBEE5D",
          "brand-3": "#F36339",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          title: "#0F2F65",
          body: "#424959",
          "stroke-line": "#DDE3EA",
          "stroke-line-2": "#B1B4B5",
        },
        tertiary: {
          purple: "#6A6BEA",
          yellow: "#FFD301",
          disable: "#B1B4B5",
          success: "#06A031",
          error: "#CC0000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
