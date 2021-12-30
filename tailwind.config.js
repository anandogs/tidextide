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
        'tab-footer': '1.375rem',
        'mob-uppercase-heading': '0.625rem',
      },
      lineHeight: {
        // mobile: '1.5625rem',
      },
      margin: {
        'mob-work': '1.5625rem',
        'mob-sides': '3.4375rem',
        'tab-sides': '4.75rem',
        'mob-project-sides': '5.1875rem',
      },
      height: {
        'mob-header': '7.75rem',
        'tab-header': '15.0625rem',
        'mob-logo': '3.8125rem',
        'tab-logo': '8.375rem',
        'mob-burger':'0.9375rem',
        'tab-burger':'1.875rem'
      }
    },
  },
  plugins: [],
}
