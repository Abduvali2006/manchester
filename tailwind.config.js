/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      DMSans: ["DM Sans", "sans-serif"],
    },
    extend: {
      textColor: {
        "base-blue400": ["#3384FB"],
        "black-50": ["#001931"],
      },
      backgroundColor: {
        "header-bg": ["#DBF0FB"],
        "button-bg": ["#D0D0D0"],
        "button-blue": ["#3384FB"],
        "black-50": ["#001931"],
        "black-120": ["#3384FB"],
      },
    },
  },
  plugins: [],
};
