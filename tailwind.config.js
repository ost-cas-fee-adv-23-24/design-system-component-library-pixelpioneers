/** @type {import("tailwindcss").Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
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
            extend: {
                backgroundImage: {
                    'gradient-50-50':
                        'linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);',
                    'gradient-30-70':
                        'linear-gradient(90deg, var(--tw-gradient-from) -12.56%, var(--tw-gradient-to) 62.92%);',
                    'gradient-20-80':
                        'linear-gradient(90deg, var(--tw-gradient-from) -15.33%, var(--tw-gradient-to) 38.87%);',
                },
            },
        },
    },
    plugins: [],
};
