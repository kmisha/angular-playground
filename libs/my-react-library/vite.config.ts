import { defineConfig } from 'vite'
import path from 'node:path';

import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';

import { peerDependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            rollupTypes: true,
            tsconfigPath: path.resolve(import.meta.dirname, 'tsconfig.lib.json'),
        })],
    build: {
        lib: {
            entry: path.resolve(import.meta.dirname, 'src/index.ts'),
            name: 'my-react-lib',
            fileName: 'my-react-lib',
            formats: ['es']
        },
        rollupOptions: {
            external: ['react/jsx-runtime', ...Object.keys(peerDependencies)]
        }
    }
})
