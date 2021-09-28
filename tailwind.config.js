module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "desk": "1440px",
      },
      backgroundColor:{
        "veryDarkBlue": "hsl(233, 47%, 7%)",
        "darkDesBlue": "hsl(244, 38%, 16%)",
        "softViolet": "hsl(277, 64%, 61%)",
      },
      fontFamily:{
        "inter": ["Inter", "sans-serif"],
        "lexendDeca": ["Lexend Deca", "sans-serif"],
      },
      fontSize:{
        "15px": "15px",
        "11px": "11px",
        "25px": "25px",
        "35px": "35px",
      },
      textColor:{
        "paragWhite": "hsla(0, 0%, 100%, 0.75)",
        "headWhite": "hsla(0, 0%, 100%, 0.6)",
        "softViolet": "hsl(277, 64%, 61%)",
      },
      height:{
        "800px": "800px"
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
