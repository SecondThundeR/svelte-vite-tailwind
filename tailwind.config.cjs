/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        root: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      },
    },
  },

  plugins: [],
};

module.exports = config;
