/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cinematic: {
          bg: '#0A0A0A',
          surface: '#121212',
          surfaceHover: '#181818',
          gold: '#F5A623',
          goldBright: '#FFAA1D',
          goldMuted: 'rgba(245, 166, 35, 0.15)',
          muted: '#8E8E93',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      animation: {
        marquee: 'marquee-scroll 24s linear infinite',
      },
      keyframes: {
        'marquee-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
