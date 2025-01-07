import { nextui } from "@nextui-org/theme";

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "app",
    themes: {
      light: {
        colors: {
          background: "#f5f5f5",
          foreground: "#1e1e1e",
          default: {
            50: "#fafafa",
            100: "#f4f4f4",
            200: "#e4e4e4",
            300: "#d4d4d4",
            400: "#a1a1a1",
            500: "#717171",
            600: "#525252",
            700: "#3f3f3f",
            800: "#272727",
            900: "#181818",
          }
        },
      },
      dark: {
        colors: {
          background: "#0c0c0c",
          foreground: "#ECEDEE",
          content1: "#181818",
          default: {
            50: "#181818",
            100: "#272727",
            200: "#3f3f3f",
            300: "#525252",
            400: "#717171",
            500: "#a1a1a1",
            600: "#d4d4d4",
            700: "#e4e4e4",
            800: "#f4f4f4",
            900: "#fafafa",
          }
        },
      },
    },
  })]
};
