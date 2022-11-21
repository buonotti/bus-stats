import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    base: "", // Find alternative
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: "auto",
            strategies: "generateSW",
            devOptions: {
                enabled: true
            },
            includeAssets: [
                "favicon.ico",
                "apple-touch-icon.png",
            ],
            manifest: {
                name: "BusStats",
                short_name: "BusStats",
                description: "A statistic app for public transport",
                theme_color: "#ff9100",
                icons: [
                    {
                        src: "/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        })
    ]
})
