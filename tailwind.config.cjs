/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {},
        screens: {
            'p': '400px',
            's': '520px',
            'm': '768px',
            'ml': '875px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                bus_stats_dark: {
                    "primary": "#ff9100",
                    "secondary": "#ffb15e",
                    "accent": "#ffffff",
                    "neutral": "#191D24",
                    "base-100": "#2C2C2C",
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#f87171",
                },
                bus_stats_light: {
                    "primary": "#ff9100",
                    "secondary": "#ffb15e",
                    "accent": "#2C2C2C",
                    "neutral": "#191D24",
                    "base-100": "#ffffff",
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#f87171",
                },
            },
        ],
    },
}
