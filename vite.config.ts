import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            exportAsDefault: true,
        }),
        checker({
            typescript: {
                root: './src/client',
                tsconfigPath: './tsconfig.json',
            },
        }),
    ],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
    server: {
        open: true,
        watch: {
            ignored: ['./node_modules'],
        },
    },
});
