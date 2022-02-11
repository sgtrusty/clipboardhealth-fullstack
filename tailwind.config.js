module.exports = {
  purge: {
    content: [
      './pages/**/*.js',
      './screens/**/*.js',
      './components/**/*.js'
    ],
    options: {
      safelist: ['h-10', 'w-10', 'h-48', 'h-full', 'flex', 'justify-center', 'items-center']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
