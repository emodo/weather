import { defineConfig } from 'umi';
const repo = process.env.NODE_ENV === 'development' ? '/' : '/weather/';

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
  base: `${repo}`,
  publicPath: `${repo}`,
  chainWebpack(config) {
    config.module
      .rule('ttf')
      .test(/.(woff|eot|woff2|ttf)$/)
      .use('file-loader')
      .loader('file-loader');
  }
});
