import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
        ViteImageOptimizer({
            exclude: /\.svg$/,
            png: { quality: 85 },
            jpeg: { quality: 85 },
            webp: { quality: 85 },
        }),
    ],
})
