/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#efa256",

          secondary: "#e6007d",

          accent: "#bc4131",

          neutral: "#FFF",

          "base-100": "#e6007d",

          info: "#B1C3E7",

          success: "#64E3D6",

          warning: "#F3A953",

          error: "#ED5A7A",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
};
