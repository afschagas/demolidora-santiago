/** Paleta padrão: logo Demolidora Santiago — laranja #FF7900, carvão #1A1A1A, cinza #4D4D4D, prata #C0C0C0–#E6E6E6. */
export default {
  /* Só ativa dark: quando <html class="dark"> — evita texto branco no claro se <body> ficar com .dark solto */
  darkMode: ["selector", "html.dark &"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FF7900",
        "accent-hover": "#fc7010",
        black: "#000000",
        charcoal: "#1A1A1A",
        muted: "#4D4D4D",
        silver: {
          DEFAULT: "#C0C0C0",
          light: "#E6E6E6",
        },
        surface: "#F3F4F6",
        ink: "#0c0c0c",
        "theme-bg": "#0c0c0c",
        "theme-raised": "#141414",
        "theme-panel": "#1c1c1c",
        primary: "#FF7900",
        "nav-link": "#fc700f",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-silver":
          "linear-gradient(180deg, #E6E6E6 0%, #C0C0C0 100%)",
      },
    },
  },
  plugins: [],
};
