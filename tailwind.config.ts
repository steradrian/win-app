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
        primary: "var(--primary)",
        primaryHover: "var(--primaryHover)",
        critical: "var(--critical)",
        success: "var(--success)",

        // Text colors
        textDefault: "var(--textDefault)",
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
      },
      animation: {
        "fade-in": "fade-in 300ms ease-in forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
