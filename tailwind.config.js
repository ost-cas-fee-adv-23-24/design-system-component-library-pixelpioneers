import colors from 'tailwindcss/colors';

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        fontFamily: {
            default: ['Poppins', 'sans-serif'],
        },
        fontSize: {
            xs: '0.875rem', // 14px
            sm: '1rem', // 16px
            base: '1.125rem', // 18px
            lg: '1.25rem', // 20px
            xl: '1.5rem', // 24px
            '2xl': '2rem', // 32px
            '3xl': '2.5rem', // 40px
            '4xl': '3rem', // 48px
        },
        lineHeight: {
            none: '1',
            s: '1.25',
            m: '1.4',
            l: '1.45',
        },
        fontWeight: {
            medium: '500',
            semibold: '600',
            bold: '700',
        },
        spacing: {
            0: 0,
            '2xs': '0.25rem', // 4px
            xs: '0.5rem', // 8px
            base: '0.75rem', // 12px
            s: '1rem', // 16px
            m: '1.5rem', // 24px
            l: '2rem', // 32px
            '2l': '2.5rem', // 40px;
            xl: '3rem', // 48px
            '2xl': '4rem', // 64px
            '7xl': '6rem', // 96px
            '15xl': '10rem', // 160px
            xxl: '3.5rem', // 56px
        },
        borderRadius: {
            none: '0',
            s: '0.5rem', // 8px
            m: '1rem', // 16px
            full: '100%',
        },
        ringWidth: {
            2: '2px',
            3: '3px',
            4: '4px',
            6: '6px',
        },
        colors: {
            black: '#000',
            white: '#fff',
            violet: {
                50: '#F5F3FF',
                100: '#EDE9FE',
                200: '#DDD6FE',
                300: '#C4B5FD',
                400: '#A78BFA',
                500: '#8B5CF6',
                600: '#7C3AED',
                700: '#6D28D9',
                800: '#5B21B6',
                900: '#4C1D95',
            },
            pink: {
                50: '#FDF2F8',
                100: '#FCE7F3',
                200: '#FBCFE8',
                300: '#F9A8D4',
                400: '#F472B6',
                500: '#EC4899',
                600: '#DB2777',
                700: '#BE185D',
                800: '#9D174D',
                900: '#831843',
            },
            slate: {
                50: '#F8FAFC',
                100: '#F1F5F9',
                200: '#E2E8F0',
                300: '#CBD5E1',
                400: '#94A3B8',
                500: '#64748B',
                600: '#475569',
                700: '#334155',
                800: '#1E293B',
                900: '#0F172A',
            },
            primary: colors.violet,
            secondary: colors.slate,
            tertiary: colors.pink,
        },
        extend: {
            backgroundImage: {
                'gradient-30-70':
                    'linear-gradient(90deg, var(--tw-gradient-from) -12.56%, var(--tw-gradient-to) 62.92%);',
                'gradient-20-80':
                    'linear-gradient(90deg, var(--tw-gradient-from) -15.33%, var(--tw-gradient-to) 38.87%);',
            },
            transitionDuration: {
                350: '350ms',
            },
        },
    },
    plugins: [],
};
