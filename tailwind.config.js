/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      maxWidth: {
        xxl: "1600px",
      },
      borderRadius: {
        borderRadius: "43px",
      },
      flexShrink: {
        flexShrink: "2",
      },
      textColor: {
        textColor: "#19202B",
      },
    },
  },
  plugins: [],
};
