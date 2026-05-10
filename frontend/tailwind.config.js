/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Inverted scale: high numbers = light (page/card/input), low numbers = dark (text/borders)
        // Components that used bg-stone-9xx get warm light surfaces; text-stone-4xx get warm readable ink
        stone: {
          950: '#fdf8ef',  // page background — warm cream
          900: '#ffffff',  // card / panel surface
          800: '#faf4e8',  // input / alternate surface
          700: '#ece0c4',  // section dividers, subtle borders
          600: '#d4bc90',  // visible borders
          500: '#9e8468',  // placeholder / icon text
          400: '#78604a',  // secondary text
          300: '#573c2c',  // body descriptions
          200: '#3a2016',
          100: '#24100c',
          50:  '#160808',
        },
        parchment: '#1e000e',  // primary text — palette darkest, ink on parchment
        ink:       '#0f0400',  // near-black — text on colored buttons
        gold:      '#b8900a',  // amber — slightly darkened for light-bg contrast
        crimson:   '#823038',  // burgundy — primary actions, completed steps
        vivid:     '#4a6800',  // dark olive — positive modifiers, readable on light bg
      },
      fontFamily: {
        display: ['"MedievalSharp"', 'serif'],
        body: ['"Crimson Text"', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        sm:   '0.25rem',
        md:   '0.5rem',
        lg:   '0.625rem',
        xl:   '0.875rem',
        '2xl':'1.25rem',
        '3xl':'1.75rem',
        full: '9999px',
      },
      boxShadow: {
        card:       '0 2px 12px -3px rgba(30,0,14,0.10), 0 1px 4px rgba(30,0,14,0.06)',
        'card-hover':'0 6px 20px -4px rgba(30,0,14,0.16), 0 2px 6px rgba(30,0,14,0.08)',
        stat:       '0 1px 6px rgba(30,0,14,0.08)',
        btn:        '0 1px 3px rgba(30,0,14,0.14)',
        input:      'inset 0 1px 3px rgba(30,0,14,0.05)',
      },
    }
  },
  plugins: []
}
