import { defineConfig } from 'vite'
import path from 'node:path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            rollupTypes: true,
            include: ['src'],
            tsconfigPath: './tsconfig.lib.json'
        })],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'my-react-lib',
            fileName: 'my-react-lib',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    }
})
