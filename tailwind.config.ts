import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        proxima: ["Proxima Nova Cn Rg", "sans-serif"],
      },
      colors: {
        // Background colors
        dark: "var(--dark)",
        darkLighter: "var(--dark-lighter)",
        darkModal: "var(--dark-modal)",
        light: "var(--light)",
        light4: "var(--light-4)",
        lightest: "var(--lightest)",
        lighter: "var(--lighter)",
        gray: "var(--gray)",
        lightGray: "var(--lightGray)",
        primary: "var(--primary)",
        primaryHover: "var(--primaryHover)",
        basePrimary: "var(--basePrimary)",
        basePrimaryHover: "var(--basePrimaryHover)",
        critical: "var(--critical)",
        success: "var(--success)",

        // Text colors
        textDefault: "var(--textDefault)",
        textDark: "var(--textDark)",
        textSubdued: "var(--textSubdued)",
        textDisabled: "var(--textDisabled)",
        textPrimary: "var(--textPrimary)",
        textOnPurple: "var(--textOnPurple)",
      },
      transitionTimingFunction: {
        "nice-ease": "cubic-bezier(0.15, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-fill": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "border-fill": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms ease-in forwards",
        "line-fill": "line-fill 0.5s forwards",
        "border-fill": "border-fill 0.5s forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
