import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',
	// Static site: pre-render the home page and ship a client-only bundle.
	ssr: false,
	prerender: ['/'],
} satisfies Config;
