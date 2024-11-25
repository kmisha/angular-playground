import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        legacy({targets: ['defaults', 'not IE 11']})
    ],
    css: {
        // transformer: 'lightningcss',
        modules: {
            localsConvention: 'camelCaseOnly'
        },
    },
    build: {
        // cssMinify: 'lightningcss'
    }
})
