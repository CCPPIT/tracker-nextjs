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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
    colors:{
      customed:"#d90429",
      white:"#fff",
      black:"#000",
      textColor:"#000000",
      background:"#FFFFFF",
      darkModeColor:{
        background:"#003049",
        textColor:"#FFFFFF"
      },
      slate:{
        50:"#f8fafc",
        100:"#f1f5f9",
        200:"#e2e8f0",
        300:"#cbd5e1",
        400:"#94a3b8",
        500:"#64748b",
        600:"#475569",
        700:"#334155",
        800:"#1e293b",
        900:"#0f172a",
        950:"#020617",
      },
      amber:{
        50:"#fffbeb",
        100:"#fef3c7",
        200:"#fde68a",
        300:"#fcd34d",
        400:"#fbbf24",
        500:"#f59e0b",
        600:"#d97706",
        700:"#b45309",
        800:"#92400e",
        900:"#78350f",
        950:"#451a03",

      },
      gray:{
        50:"#f9fafb",
        100:"#f3f4f6",
        200:"#e5e7eb",
        300:"#d1d5db",
        400:"#9ca3af",
        500:"#6b7280",
        600:"#4b5563",
        700:"#374151",
        800:"#1f2937",
        900:"#111827",
        950:"#030712",

      },
      red:{
        500:"#ef4444",
        600:"#dc2626"
      },
      yellow:{
        50:"",
        100:"",
        200:"",
        300:"#fde047"
      },
      blue:{
        50:"",
        100:"",
        200:"",
        300:"",
        400:"",
        500:"",
        600:"",
        700:"#1d4ed8"

      },
      fuchsia:{
        300:"#f0abfc"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config