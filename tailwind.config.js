/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brandColor-1": "#101928",
        "brandColor-2": "#18CF2D",
        "text-color": "#F0F2F5",
        "active-color": "#98A2B3",
        "brandColor-3": "#F5B546",
        hoverBG: "#1D2739",
      },
      screens: {
        "max-sm": { max: "768px" },
      },
      gridTemplateColumns: {
        "2col": "250px 1fr",
        "1col": "100px 1fr",
      },
      transitionProperty: {
        "grid-cols": "grid-template-columns",
      },

      gridTemplateAreas: {
        layout: ["sidebar header", "sidebar main", "sidebar main"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addUtilities }) {
      addUtilities({
        ".grid-layout": {
          display: "grid",
          "grid-template-areas": `
            "sidebar header"
            "sidebar main"
            "sidebar main"
          `,
        },
        ".header-area": {
          "grid-area": "header",
        },
        ".sidebar-area": {
          "grid-area": "sidebar",
        },
        ".main-area": {
          "grid-area": "main",
        },
      });
    },
  ],
};
