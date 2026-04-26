import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF9B6',
        purple: '#720065',
        lavender: '#E9C9E4',
        plum: '#4C0345',
        orchid: '#9E3E8A',
        blush: '#F5E7F0',
        haze: '#FFFCE2',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(114, 0, 101, 0.12)',
        glow: '0 24px 100px rgba(114, 0, 101, 0.22)',
        insetSoft: 'inset 0 1px 0 rgba(255, 255, 255, 0.35)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, rgba(253, 249, 182, 1) 0%, rgba(233, 201, 228, 0.92) 46%, rgba(114, 0, 101, 1) 100%)',
        'hero-glow':
          'radial-gradient(circle at top left, rgba(253, 249, 182, 0.95), transparent 40%), radial-gradient(circle at top right, rgba(158, 62, 138, 0.35), transparent 35%), linear-gradient(180deg, rgba(255, 252, 226, 0.95), rgba(245, 231, 240, 0.75))',
      },
    },
  },
  plugins: [],
};

export default config;
