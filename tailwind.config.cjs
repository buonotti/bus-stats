/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {},
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
                    "base-100": "#36383f",
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#f87171",
                },
                bus_stats_light: {
                    "primary": "#ff9100",
                    "secondary": "#ffb15e",
                    "accent": "#36383f",
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
