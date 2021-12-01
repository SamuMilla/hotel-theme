module.exports = {
  mode: 'jit',
  purge: {
    content:[ "./*.html", "./src/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "naranja": "hsl(28, 72%, 51%)",
        "naranja-light": "hsl(28, 72%, 93%)",
        "gris-light": "hsl(0, 0%, 97%)"
      },
      backgroundImage: {
        hero: "url('/dist/img/hero-alt.webp')"
      },
      zIndex: {
        '-10': '-10',
       },
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: "1280px",
        '2xl': "1280px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
