import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import {fileURLToPath, URL} from 'url'

export default defineConfig(({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME

    return {
        plugins: [
            vue(),
            createHtmlPlugin({
                inject: {
                    data: {
                        lang: 'ru',
                        title: process.env.VITE_PROJECT_NAME
                    },
                }
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@c': path.resolve(__dirname, './src/components'),
                '@i': path.resolve(__dirname, './src/interfaces'),
                '@l': path.resolve(__dirname, './src/layouts'),
                '@p': path.resolve(__dirname, './src/pages'),
                '@r': path.resolve(__dirname, './src/router'),
                '@s': path.resolve(__dirname, './src/stores'),
            },
        },
    };
});


// https://vitejs.dev/config/
/*export default defineConfig({
    plugins: [
        vue(),
        createHtmlPlugin({
            inject: {
                data: {
                    lang: 'ru',
                    title: env.
                },
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@c': path.resolve(__dirname, './src/components'),
            '@i': path.resolve(__dirname, './src/interfaces'),
            '@l': path.resolve(__dirname, './src/layouts'),
            '@p': path.resolve(__dirname, './src/pages'),
            '@r': path.resolve(__dirname, './src/router'),
            '@s': path.resolve(__dirname, './src/stores'),
        },
    },
})*/
