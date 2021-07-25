module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ark-green": "#cfff0a",
        "ark-gray": "#131314",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
