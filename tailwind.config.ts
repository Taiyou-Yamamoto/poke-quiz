import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        PokeGB: ['PokeGB', 'sans-serif'],
        DotJP: ['DotJP', 'sans-serif'],
      },
      keyframes: {
        chime: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(5deg)' },
          '20%': { transform: 'rotate(-5deg)' },
          '30%': { transform: 'rotate(2deg)' },
          '40%': { transform: 'rotate(-2deg)' },
          '45%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg)' },
          '55%': { transform: 'rotate(1deg)' },
          '60%': { transform: 'rotate(0.5deg)' },
          '65%': { transform: 'rotate(-0.5deg)' },
          '70%': { transform: 'rotate(0.2deg)' },
          '75%': { transform: 'rotate(-0.2deg)' },
          '78%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shake: {
          '0%': { transform: 'translateX(0%)' },
          '5%': { transform: 'translateX(-3%)' },
          '10%': { transform: 'translateX(3%)' },
          '15%': { transform: 'translateX(-3%)' },
          '20%': { transform: 'translateX(3%)' },
          '25%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-800px)' },
        },

        reverse_slide: {
          '0%': { transform: 'translateX(-800px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        chime: 'chime 3.5s ease-in-out infinite',
        shake: 'shake 3s ease-in-out infinite',
        blink: 'blink 0.7s steps(1) infinite',
        slide: 'slide 30s linear infinite',
        reverse_slide: 'reverse_slide 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
