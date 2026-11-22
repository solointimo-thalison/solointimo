import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('calcinhas', 'routes/calcinhas.tsx'),
  route('soutiens', 'routes/soutiens.tsx'),
] satisfies RouteConfig;
