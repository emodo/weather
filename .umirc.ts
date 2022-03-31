import { defineConfig } from 'umi';
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');

const repo = process.env.NODE_ENV === 'development' ? '/' : '/weather/';

const mfsu =
  process.env.NODE_ENV === 'development'
    ? {}
    : { production: { output: '.mfsu-production' } };
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
  webpack5: {},
  dynamicImport: {},
  mfsu,
  chainWebpack(config) {
    config.module
      .rule('ttf')
      .test(/.(woff|eot|woff2|ttf)$/)
      .use('file-loader')
      .loader('file-loader');
    // config.plugin('workbox').use(InjectManifest, [{
    //   swSrc: './src/sw.js',
    //   swDest: `${repo}weather-service-worker.js`,
    //   compileSrc: false,
    // }]);
    config.plugin('workbox').use(GenerateSW, [
      {
        cacheId: 'webpack-pwa', // 设置前缀
        skipWaiting: true, // 强制等待中的 Service Worker 被激活
        clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
        cleanupOutdatedCaches: true, //删除过时、老版本的缓存
        swDest: 'weather-service-worker.js', // 输出 Service worker 文件
        include: ['**/*.{html,js,css,png,jpg,ttf}'], // 匹配的文件
        exclude: ['service-worker.js'], // 忽略的文件
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/restapi.amap\.com\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'cached-api',
              networkTimeoutSeconds: 6,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/api.openweathermap\.org\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'cached-weather-api',
              networkTimeoutSeconds: 6,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /.*\.js.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'seed-js',
              expiration: {
                maxEntries: 20, //最多缓存20个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /\//i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'seed-html',
              expiration: {
                maxEntries: 20, //最多缓存20个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /.*css.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'seed-css',
              expiration: {
                maxEntries: 30, //最多缓存30个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /.*(png|svga).*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'seed-image',
              expiration: {
                maxEntries: 30, //最多缓存30个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    ]);
  },
});
