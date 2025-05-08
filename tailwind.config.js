/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/app/*/.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        keyframes: {
            scroll: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-50%)' },
            },
        },
        animation: {
            scroll: 'scroll 20s linear infinite',
        },
    },
};
export const plugins = [];