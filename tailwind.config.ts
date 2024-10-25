import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        PokeFont: ['Pokemon Hollow', 'sans-serif'],
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
      },
      animation: {
        chime: 'chime 3.5s ease-in-out infinite', // 3.5秒ごとに無限ループ
        shake: ' shake 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
