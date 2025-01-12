import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	define: {
		__APP_NAME__: JSON.stringify(pkg.name),
		__APP_VERSION__: JSON.stringify(pkg.version)
	},
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	},

	test: {
		environment: 'happy-dom',
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}));
