/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brown-dark':  '#2F241C',
        'brown-mid':   '#8A6F52',
        'brown-light': '#A08060',
        'cream':       '#EAE3CF',
        'cream-light': '#F2EDD8',
        'site-bg':     '#EFEFEF',
        'text-dark':   '#3A2C23',
        'site-border': '#D9D9D9',
        'footer-bg':   '#28190E',
        'section-hdr': '#3D2E1E',
        'gold':        '#B8963E',
      },
      fontFamily: {
        urdu: ["'Noto Nastaliq Urdu'", 'serif'],
      },
    },
  },
  plugins: [],
}
