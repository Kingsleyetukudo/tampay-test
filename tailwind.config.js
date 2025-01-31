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
    },
  },
  plugins: [],
};
