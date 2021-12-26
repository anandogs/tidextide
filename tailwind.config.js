module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        cabinet :"'Cabinet Grotesk', sans-serif"
      },
      fontSize: {
        mobile:'1.5625rem',
        'mob-footer': '0.75rem',
      },
      lineHeight: {
        mobile: '1.5625rem',
      },
      margin: {
        'mob-work': '1.5625rem',
        'mob-sides': '3.4375rem',
      }
    },
  },
  plugins: [],
}
