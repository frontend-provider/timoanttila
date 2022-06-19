import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `nuxt.config.{js,ts}`
  ],
  theme: {
    fontFamily: {
      'montserrat': 'montserrat',
      'koho': 'koho'
    },
    fontSize: {
      sm: '0.9em',
      base: '1em',
      desc: '1.2em',
      md: '1.4em',
      lg: '2.2em',
      xl: 'clamp(2em, 3em, 10vw)',
      '2xl': 'clamp(2em, 5em, 10vw)',
      fontSize: '1.8rem'
    },
    extend: {
      screens: {
        lg: '1000px'
      },
      colors: {
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-secondary)',
        'content': 'var(--text)',
        'title': 'var(--text-title)',
        'link': 'var(--text-link)'
      },
      lineHeight: {
        '1': 1.1,
        '2': 1.2,
        '3': 1.3
      },
    }
  },
  preflight: false,
  fontFamily: false,
  fontWeight: false
})
