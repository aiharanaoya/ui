import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: { '@': resolve(__dirname, 'src') },
		tsconfigPaths: true,
	},
	build: {
		outDir: 'src/catalog/dist',
		emptyOutDir: true,
	},
	test: {
		environment: 'happy-dom',
		setupFiles: ['./src/testing/setupTestingLibrary'],
	},
});
