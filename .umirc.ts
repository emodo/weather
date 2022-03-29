import { defineConfig } from 'umi';
const repo = 'weather';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/detail', component: '@/pages/detail' },
  ],
  fastRefresh: {},
  history: {
    type: 'hash',
  },
  outputPath: 'docs',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});
