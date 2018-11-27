import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Heebo',
      styles: ['400'],
    },
    {
      name: 'Hind',
      styles: ['700'],
    },
  ],
  headerFontFamily: ['Hind', 'sans-serif'],
  bodyFontFamily: ['Heebo', 'sans-serif'],
})

export default typography
