/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      bootstrap: path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    port: 3000,
    hot: true,
  },
});
