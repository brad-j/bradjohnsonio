import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // main: '#FFDC58',
        mainAccent: '#ffc800',
        overlay: 'rgba(0,0,0,0.8)',

        // light mode
        bg: '#FEF2E8',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#374151',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
