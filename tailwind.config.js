/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "light-red": "hsl(0, 100%, 67%)",
          "orange-yellow": "hsl(39, 100%, 56%)",
          "green-teal": "hsl(166, 100%, 37%)",
          "cobalt-blue": "hsl(234, 85%, 45%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          "pale-blue": "hsl(221, 100%, 96%)",
          lavender: "hsl(241, 100%, 89%)",
          "gray-blue": "hsl(224, 30%, 27%)",
        },
        gradient: {
          "slate-blue": "hsl(252, 100%, 67%)",
          "royal-blue": "hsl(241, 81%, 54%)",
          "violet-blue": "hsla(256, 72%, 46%, 1)",
          "persian-blue": "hsla(241, 72%, 46%, 0)",
        },
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
