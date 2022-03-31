if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, c) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[a]) return;
    let i = {};
    const o = (e) => n(e, a),
      m = { module: { uri: a }, exports: i, require: o };
    s[a] = Promise.all(t.map((e) => m[e] || o(e))).then((e) => (c(...e), i));
  };
}
define(['./workbox-459c3508'], function (e) {
  'use strict';
  e.setCacheNameDetails({ prefix: 'webpack-pwa' }),
    self.skipWaiting(),
    e.clientsClaim(),
    e.registerRoute(
      /^https:\/\/restapi.amap\.com\//,
      new e.NetworkFirst({
        cacheName: 'cached-api',
        networkTimeoutSeconds: 6,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 600 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/api.openweathermap\.org\//,
      new e.NetworkFirst({
        cacheName: 'cached-weather-api',
        networkTimeoutSeconds: 6,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 600 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /.*\.js.*/i,
      new e.CacheFirst({
        cacheName: 'seed-js',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 600 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\//i,
      new e.CacheFirst({
        cacheName: 'seed-html',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 600 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /.*css.*/,
      new e.CacheFirst({
        cacheName: 'seed-css',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 600 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /.*(png|svga).*/,
      new e.CacheFirst({
        cacheName: 'seed-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 600 }),
        ],
      }),
      'GET',
    );
});
