const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(accordion|divider).js"
],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}

