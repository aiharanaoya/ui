import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		environment: 'happy-dom',
		setupFiles: ['./src/testing/setupTestingLibrary'],
	},
});
