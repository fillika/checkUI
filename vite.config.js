import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    build: {
        rollupOptions: {
            output: {
                dir: 'dist/checkUI',
                entryFileNames: 'checkUI.js',
                chunkFileNames: 'checkUI.js',
                assetFileNames: 'checkUI.[ext]',
            }
        }
    }

})
