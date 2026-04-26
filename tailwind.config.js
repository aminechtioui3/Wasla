var config = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                cream: '#FDF9B6',
                purple: '#720065',
                rose: '#E1A0BA',
                glow: '#F3D0BB',
                midnight: '#151015',
                panel: '#2A1430',
                lavender: '#E9C9E4',
                plum: '#4C0345',
                orchid: '#9E3E8A',
                blush: '#F5E7F0',
                haze: '#FFFCE2',
                mist: '#FFFDF0',
            },
            fontFamily: {
                sans: ['"Manrope"', 'sans-serif'],
                display: ['"Sora"', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 20px 60px rgba(114, 0, 101, 0.12)',
                glow: '0 24px 100px rgba(114, 0, 101, 0.22)',
                insetSoft: 'inset 0 1px 0 rgba(255, 255, 255, 0.35)',
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, rgba(253, 249, 182, 1) 0%, rgba(225, 160, 186, 0.9) 42%, rgba(114, 0, 101, 1) 100%)',
                'hero-glow': 'radial-gradient(circle at top left, rgba(253, 249, 182, 0.95), transparent 34%), radial-gradient(circle at top right, rgba(225, 160, 186, 0.26), transparent 28%), linear-gradient(180deg, rgba(255, 253, 240, 0.98), rgba(250, 243, 232, 0.9) 45%, rgba(248, 235, 244, 0.78) 100%)',
            },
        },
    },
    plugins: [],
};
export default config;
