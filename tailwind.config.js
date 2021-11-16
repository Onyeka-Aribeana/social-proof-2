module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    fontFamily: {
      body: ["Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-magenta": "#502050",
        "soft-pink": "#ee68a4",
        "dark-grayish-magenta": "#937b92",
        "light-grayish-magenta": "#f7f2f7",
      },
      width: {
        600: "480px",
        card: "380px",
        test: "85vw",
      },
      height: {
        card: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
