import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',
	// Static site: pre-render public pages and ship a client-only bundle.
	ssr: false,
	prerender: ['/', '/calcinhas', '/soutiens'],
} satisfies Config;
