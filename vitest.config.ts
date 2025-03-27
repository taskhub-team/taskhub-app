import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'coverage/**',
        'dist/**',
        '**/[.]{git,github,circleci,husky}/**',
        '**/*.d.ts',
        '**/types/**',
        '**/test/**', // Setup test changes
        '**/tests/**', // actual test files inside of tests directory
        '**/main.tsx', // Entry point typically doesn't need full coverage
        '**/config/**', // Configuration files often don't need full coverage
      ],
      thresholds: {
        branches: 95,
        lines: 95,
        functions: 95,
        statements: 95,
      },
    },

    include: ['src/**/tests/**/*.{test,spec}.{ts,tsx}'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
