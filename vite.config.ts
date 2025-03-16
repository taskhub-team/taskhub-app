import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { readFileSync } from 'fs';

// Parse package.json for version info
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      // Make version available to the app
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
      'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toISOString()),
    },
    build: {
      sourcemap: mode !== 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      host: true,
    },
  };
});
