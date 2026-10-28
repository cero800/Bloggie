import type { Config } from 'tailwindcss'

type ThemeMode = 'light' | 'dark'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mono: {
          bg: {
            DEFAULT: '#ffffff',
            card: '#fafafa',
            input: '#f5f5f5',
            muted: '#e5e5e5',
          },
          ink: {
            DEFAULT: '#171717',
            muted: '#737373',
            line: '#e5e5e5',
          },
          inverse: {
            bg: '#0a0a0a',
            card: '#171717',
            input: '#242424',
            muted: '#333333',
            line: '#333333',
            ink: '#fafafa',
            muted: '#a3a3a3',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        mono: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}

export default config
