import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    cacheDir: '.cache/vite',
    plugins: [
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/src/js',
            '@vendor': '/vendor',
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    }
});
