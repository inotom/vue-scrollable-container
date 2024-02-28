/** @prettier */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import banner from 'vite-plugin-banner';
import pkg from './package.json';

const copyright = `/*! ${pkg.name} v${pkg.version} ${pkg.author} | ${pkg.license} License */`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [banner(copyright), vue(), cssInjectedByJsPlugin()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwsVueScrollableContainer',
      fileName: (format: string): string => {
        switch (format) {
          case 'umd':
            return 'vue-scrollable-container.umd.js';
          default:
            return 'vue-scrollable-container.js';
        }
      },
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'throttle-debounce'],
      output: {
        globals: {
          vue: 'Vue',
          'throttle-debounce': 'throttleDebounce',
        },
      },
    },
  },
});
