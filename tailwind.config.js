// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                cosmic: {
                    900: '#0B0B1A',
                    800: '#171124',
                    700: '#1F1A2E',
                },
                gold: {
                    500: '#D4AF37',
                    400: '#F2D6A0',
                    300: '#F7DFA8',
                    600: '#B8962E',
                    700: '#9C7D26',
                },
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1440px',
                },
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(110deg, #D4AF37 0%, #F2D6A0 50%, #D4AF37 100%)',
                'gold-gradient-text': 'linear-gradient(100deg, #D4AF37 0%, #F2D6A0 50%, #D4AF37 100%)',
                'radial-gold': 'radial-gradient(circle at center, rgba(212,175,55,0.08), transparent 55%)',
            },
            boxShadow: {
                'gold': '0 0 30px rgba(212,175,55,0.25)',
                'gold-hover': '0 0 45px rgba(212,175,55,0.4)',
                'gold-strong': '0 0 60px rgba(212,175,55,0.4)',
            },
            animation: {
                'orbit-spin': 'orbit-spin 90s linear infinite',
                'fade-in': 'fadeIn 0.65s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
            },
            keyframes: {
                'orbit-spin': {
                    to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
                },
                fadeIn: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};