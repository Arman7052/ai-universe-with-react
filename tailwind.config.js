/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7478ed",

          "secondary": "#2399bc",

          "accent": "#dc9de8",

          "neutral": "#181523",

          "base-100": "#FCFCFD",

          "info": "#A1D0E8",

          "success": "#56D78C",

          "warning": "#EB5757",

          "error": "#DE5C45",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

