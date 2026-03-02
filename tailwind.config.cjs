/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.js",
        "./src/**/*.ts",
        "./src/**/*.jsx",
        "./src/**/*.tsx",
    ],
    theme: {
        extend: {
            colors: {
                'rms-primary': {
                    50: '#effcf6',
                    100: '#d0f7e7',
                    200: '#a4eed2',
                    300: '#6ddeb8',
                    400: '#34c79a',
                    500: '#14a87e',
                    600: '#0a8b68',
                    700: '#087055',
                    800: '#095944',
                    900: '#07352a',
                },
                'rms-accent': {
                    50: '#fff5f5',
                    100: '#ffe0e6',
                    200: '#ffc2d1',
                    300: '#ff94ae',
                    400: '#ff6085',
                    500: '#f43f5e',
                    600: '#d6294b',
                    700: '#b4203c',
                    800: '#951c37',
                    900: '#5f0f22',
                },
                'rms-neutral': {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
            },
            boxShadow: {
                'rms-soft': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06)',
                'rms-medium': '0 4px 16px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.04)',
                'rms-heavy': '0 8px 40px rgba(0, 0, 0, 0.12), 0 16px 64px rgba(0, 0, 0, 0.06)',
                'rms-glow': '0 0 20px rgba(20, 168, 126, 0.15), 0 0 60px rgba(20, 168, 126, 0.08)',
            },
            animation: {
                'slideInRight': 'slideInRight 0.3s ease-out',
                'slideUp': 'slideUp 0.3s ease-out',
                'fadeIn': 'fadeIn 0.3s ease-out',
                'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
            },
            keyframes: {
                slideInRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' },
                }
            }
        },
    },
    plugins: [],
}
