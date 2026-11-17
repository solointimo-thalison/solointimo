import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.resolve(__dirname, '../..');

export default defineConfig({
	server: {
		port: 3000,
		host: '::',
		fs: {
			strict: true,
			allow: [__dirname, path.join(monorepoRoot, 'node_modules')],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
		extensions: ['.mjs', '.mts', '.ts', '.tsx', '.js', '.jsx', '.json'],
	},
	plugins: [reactRouter()],
});
