import { defineConfig } from 'rolldown'

export default defineConfig({
    input: 'src/main.js',
    output: {
        dir: 'dist',
        format: 'esm',
    },
})