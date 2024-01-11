import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')


export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8083
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
    // resolve: {
    //     extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    //     alias: {
    //         "@": path.resolve(__dirname, "./src"),
    //     }
    // }
})