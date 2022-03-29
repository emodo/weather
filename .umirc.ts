import { defineConfig } from 'umi';
const repo = 'weather';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  hash: true,
  outputPath: 'docs',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});
