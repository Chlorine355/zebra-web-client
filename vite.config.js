import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const alias = {
  '@app': path.resolve(__dirname, './src/app'),
  '@pages': path.resolve(__dirname, './src/pages'),
  '@widgets': path.resolve(__dirname, './src/widgets'),
  '@features': path.resolve(__dirname, './src/features'),
  '@entities': path.resolve(__dirname, './src/entities'),
  '@shared': path.resolve(__dirname, './src/shared'),
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias },
  css: {
    modules: {
      generateScopedName: '[folder]_[local]__[hash:base64:5]',
    },
  },
})
