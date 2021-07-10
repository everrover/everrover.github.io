module.exports = {
  purge: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}', 
    './containers/**/*.{js,jsx}',
    './styles/*.{css,scss}',
    './styles/**/*.{css,scss}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
