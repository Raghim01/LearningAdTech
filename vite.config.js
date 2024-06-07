import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect'



export default defineConfig({
    plugins: [
        Inspect(),
       ],

    root: './',
    base: '/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/wrapper.js',
                chunkFileNames: 'assets/wrapper-[hash].js',
            }
        },
    },
    server: {
        port: 3000,
    },
});
