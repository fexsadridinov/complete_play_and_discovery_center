/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3F9AAE",
          dark: "#357d8f",
          deep: "#2c6572",
          foreground: "#ffffff",
        },
        mint: {
          DEFAULT: "#79C9C5",
          soft: "rgba(121, 201, 197, 0.22)",
          surface: "#EEF8F7",
        },
        cream: {
          DEFAULT: "#FFE2AF",
          soft: "#FFF7E8",
          muted: "rgba(255, 226, 175, 0.45)",
        },
        coral: {
          DEFAULT: "#F96E5B",
          dark: "#e85f4c",
        },
        ink: {
          DEFAULT: "#1c2d33",
          muted: "#3e5c66",
          soft: "#5f7a83",
        },
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Fraunces",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(28, 45, 51, 0.08)",
        card: "0 10px 40px -12px rgba(28, 45, 51, 0.14)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      maxWidth: {
        content: "80rem",
        prose: "42rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
