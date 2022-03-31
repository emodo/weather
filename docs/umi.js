(function () {
  'use strict';
  var t = {
      9684: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            n.d(e, {
              f: function () {
                return u;
              },
              m: function () {
                return i;
              },
            });
            const { createHashHistory: r } = await n
              .e(412)
              .then(n.t.bind(n, 4412, 23));
            var a = { basename: '/weather/' };
            window.routerBase && (a.basename = window.routerBase);
            var i = { NODE_ENV: 'production' }.__IS_SERVER ? null : r(a),
              u = function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return t || (i = r(a)), i;
              };
            t();
          },
          1,
        );
      },
      2255: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            n.d(e, {
              B: function () {
                return a;
              },
            });
            const { Plugin: r } = await n.e(412).then(n.t.bind(n, 4412, 23));
            var a = new r({
              validKeys: [
                'modifyClientRenderOpts',
                'patchRoutes',
                'rootContainer',
                'render',
                'onRouteChange',
                '__mfsu',
                'getInitialState',
                'initialStateConfig',
                'request',
              ],
            });
            t();
          },
          1,
        );
      },
      3575: function (t, e, n) {
        n.a(t, async function (t) {
          var e = n(2255),
            r = n(8466),
            a = n(9185),
            i = n(4908),
            u = t([i, e, a]);
          ([i, e, a] = u.then ? await u : u),
            e.B.register({
              apply: r,
              path: '/Users/dushichen/learn/emodo-weather/src/app.ts',
            }),
            e.B.register({ apply: a, path: '../plugin-initial-state/runtime' }),
            e.B.register({ apply: i, path: '../plugin-model/runtime' });
        });
      },
      7416: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            const {} = await n.e(693).then(n.t.bind(n, 1693, 23)),
              {} = await n.e(815).then(n.t.bind(n, 8815, 23));
            t();
          },
          1,
        );
      },
      7133: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            n.d(e, {
              s: function () {
                return o;
              },
            });
            var r = n(2255),
              a = t([r]);
            r = (a.then ? await a : a)[0];
            const { ApplyPluginsType: i, dynamic: u } = await n
              .e(412)
              .then(n.t.bind(n, 4412, 23));
            function o() {
              var t = [
                {
                  path: '/',
                  component: u({
                    loader: () => n.e(866).then(n.bind(n, 6076)),
                  }),
                  exact: !0,
                },
                {
                  path: '/detail',
                  component: u({ loader: () => n.e(51).then(n.bind(n, 3670)) }),
                  exact: !0,
                },
              ];
              return (
                r.B.applyPlugins({
                  key: 'patchRoutes',
                  type: i.event,
                  args: { routes: t },
                }),
                t
              );
            }
            t();
          },
          1,
        );
      },
      2231: function (t, e, n) {
        n.a(t, async function (t) {
          n.d(e, {
            m8: function () {
              return r.m;
            },
            BA: function () {
              return a.B;
            },
          });
          var r = n(9684),
            a = n(2255),
            i = n(3776),
            u = n(9413),
            o = n(5028),
            c = t([o, u, i, a, r]);
          [o, u, i, a, r] = c.then ? await c : c;
        });
      },
      5028: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            const { Helmet: e } = await n.e(770).then(n.t.bind(n, 4770, 23));
            t();
          },
          1,
        );
      },
      5639: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            var r = n(2231),
              a = n(3776),
              i = t([a, r]);
            [a, r] = i.then ? await i : i;
            const { useRef: u, useEffect: o } = await n
                .e(910)
                .then(n.t.bind(n, 9910, 23)),
              { ApplyPluginsType: c } = await n
                .e(412)
                .then(n.t.bind(n, 4412, 23));
            if ('function' !== typeof a.t)
              throw new Error(
                '[plugin-initial-state]: useModel is not a function, @umijs/plugin-model is required.',
              );
            (e['Z'] = (t) => {
              var e = t.children,
                n = u(!1),
                i =
                  r.BA.applyPlugins({
                    key: 'initialStateConfig',
                    type: c.modify,
                    initialValue: {},
                  }) || {},
                f = (0, a.t)('@@initialState') || {},
                s = f.loading,
                d = void 0 !== s && s;
              return (
                o(() => {
                  d || (n.current = !0);
                }, [d]),
                d && !n.current ? i.loading || null : e
              );
            }),
              t();
          },
          1,
        );
      },
      3795: function (t, e) {
        e['Z'] = () => ({ loading: !1, refresh: () => {} });
      },
      9185: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            n.r(e),
              n.d(e, {
                rootContainer: function () {
                  return u;
                },
              });
            var r = n(5639),
              a = t([r]);
            r = (a.then ? await a : a)[0];
            const { default: i } = await n.e(910).then(n.t.bind(n, 9910, 23));
            function u(t) {
              return i.createElement(r.Z, null, t);
            }
            t();
          },
          1,
        );
      },
      9073: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            var r = n(3795),
              a = n(6105),
              i = n(360),
              u = n(1310),
              o = t([u, i]);
            [u, i] = o.then ? await o : o;
            const { default: c } = await n.e(813).then(n.t.bind(n, 7813, 23)),
              { default: f } = await n.e(910).then(n.t.bind(n, 9910, 23)),
              { jsx: s } = await n.e(455).then(n.t.bind(n, 4455, 23)),
              { jsxs: d } = await n.e(455).then(n.t.bind(n, 4455, 23));
            var l = { '@@initialState': r.Z },
              p = new a.Z(),
              h = i.Z;
            (e['Z'] = (t) => {
              var e = t.children;
              return d(u.y.Provider, {
                value: p,
                children: [
                  Object.entries(l).map((t) =>
                    s(
                      h,
                      {
                        namespace: t[0],
                        hook: t[1],
                        onUpdate: (e) => {
                          var n = t,
                            r = c(n, 1),
                            a = r[0];
                          (p.data[a] = e), p.update(a);
                        },
                      },
                      t[0],
                    ),
                  ),
                  e,
                ],
              });
            }),
              t();
          },
          1,
        );
      },
      1310: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            n.d(e, {
              y: function () {
                return a;
              },
            });
            const { default: r } = await n.e(910).then(n.t.bind(n, 9910, 23));
            var a = r.createContext({});
            t();
          },
          1,
        );
      },
      6105: function (t, e, n) {
        n.d(e, {
          Z: function () {
            return r;
          },
        });
        class r {
          constructor() {
            (this.callbacks = {}),
              (this.data = {}),
              (this.update = (t) => {
                (this.callbacks[t] || []).forEach((e) => {
                  try {
                    var n = this.data[t];
                    e(n);
                  } catch (r) {
                    e(void 0);
                  }
                });
              });
          }
        }
      },
      360: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            const {
                default: r,
                useEffect: a,
                useRef: i,
                useMemo: u,
              } = await n.e(910).then(n.t.bind(n, 9910, 23)),
              { Fragment: o } = await n.e(455).then(n.t.bind(n, 4455, 23)),
              { jsx: c } = await n.e(455).then(n.t.bind(n, 4455, 23));
            (e['Z'] = (t) => {
              var e = t.hook,
                n = t.onUpdate,
                r = t.namespace,
                f = i(n);
              f.current = n;
              var s,
                d = i(!1);
              try {
                s = e();
              } catch (l) {
                console.error(
                  "plugin-model: Invoking '".concat(
                    r || 'unknown',
                    "' model failed:",
                  ),
                  l,
                );
              }
              return (
                u(() => {
                  f.current(s), (d.current = !1);
                }, []),
                a(() => {
                  d.current ? f.current(s) : (d.current = !0);
                }),
                c(o, {})
              );
            }),
              t();
          },
          1,
        );
      },
      4908: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            n.r(e),
              n.d(e, {
                rootContainer: function () {
                  return u;
                },
              });
            var r = n(9073),
              a = t([r]);
            r = (a.then ? await a : a)[0];
            const { default: i } = await n.e(910).then(n.t.bind(n, 9910, 23));
            function u(t) {
              return i.createElement(r.Z, null, t);
            }
            t();
          },
          1,
        );
      },
      3776: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            n.d(e, {
              t: function () {
                return d;
              },
            });
            var r = n(1310),
              a = t([r]);
            r = (a.then ? await a : a)[0];
            const { default: i } = await n.e(813).then(n.t.bind(n, 7813, 23)),
              {
                useState: u,
                useEffect: o,
                useContext: c,
                useRef: f,
              } = await n.e(910).then(n.t.bind(n, 9910, 23)),
              { default: s } = await n.e(867).then(n.t.bind(n, 8867, 23));
            function d(t, e) {
              var n = c(r.y),
                a = f(e);
              a.current = e;
              var d = u(() => (a.current ? a.current(n.data[t]) : n.data[t])),
                l = i(d, 2),
                p = l[0],
                h = l[1],
                m = f(p);
              m.current = p;
              var v = f(!1);
              return (
                o(
                  () => (
                    (v.current = !0),
                    () => {
                      v.current = !1;
                    }
                  ),
                  [],
                ),
                o(() => {
                  var r = (r) => {
                    if (v.current)
                      if (e && a.current) {
                        var i = a.current(r),
                          u = m.current;
                        s(i, u) || h(i);
                      } else h(r);
                    else
                      setTimeout(() => {
                        (n.data[t] = r), n.update(t);
                      });
                  };
                  try {
                    n.callbacks[t].add(r), n.update(t);
                  } catch (i) {
                    (n.callbacks[t] = new Set()),
                      n.callbacks[t].add(r),
                      n.update(t);
                  }
                  return () => {
                    n.callbacks[t].delete(r);
                  };
                }, [t]),
                p
              );
            }
            t();
          },
          1,
        );
      },
      9413: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            var e = n(2231),
              r = n(5713),
              a = t([r, e]);
            [r, e] = a.then ? await a : a;
            const { default: i } = await n.e(634).then(n.t.bind(n, 5634, 23)),
              { default: u } = await n.e(894).then(n.t.bind(n, 9894, 23)),
              { default: o } = await n.e(875).then(n.t.bind(n, 5875, 23)),
              { default: c } = await n.e(658).then(n.t.bind(n, 8658, 23)),
              { extend: f } = await n.e(265).then(n.t.bind(n, 3265, 23)),
              { ApplyPluginsType: s } = await n
                .e(412)
                .then(n.t.bind(n, 4412, 23)),
              { default: d, UseRequestProvider: l } = await n
                .e(574)
                .then(n.t.bind(n, 1574, 23));
            var p;
            (function (t) {
              (t[(t['SILENT'] = 0)] = 'SILENT'),
                (t[(t['WARN_MESSAGE'] = 1)] = 'WARN_MESSAGE'),
                (t[(t['ERROR_MESSAGE'] = 2)] = 'ERROR_MESSAGE'),
                (t[(t['NOTIFICATION'] = 4)] = 'NOTIFICATION'),
                (t[(t['REDIRECT'] = 9)] = 'REDIRECT');
            })(p || (p = {}));
            t();
          },
          1,
        );
      },
      5713: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            const {} = await n.e(555).then(n.t.bind(n, 4555, 23)),
              { default: e } = await n.e(762).then(n.t.bind(n, 7762, 23)),
              {} = await n.e(283).then(n.t.bind(n, 3283, 23)),
              { default: r } = await n.e(103).then(n.t.bind(n, 103, 23));
            t();
          },
          1,
        );
      },
      3452: function (t, e, n) {
        n.a(
          t,
          async function (t) {
            var e = n(7416),
              r = n(2255),
              a = n(3575),
              i = n(9684),
              u = n(7133),
              o = t([i, r, u, a, e]);
            [i, r, u, a, e] = o.then ? await o : o;
            const { ApplyPluginsType: c } = await n
                .e(412)
                .then(n.t.bind(n, 4412, 23)),
              { renderClient: f } = await n.e(279).then(n.t.bind(n, 9283, 23)),
              {} = await n.e(34).then(n.t.bind(n, 8034, 23));
            var s = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return r.B.applyPlugins({
                  key: 'render',
                  type: c.compose,
                  initialValue: () => {
                    var e = r.B.applyPlugins({
                      key: 'modifyClientRenderOpts',
                      type: c.modify,
                      initialValue: {
                        routes: t.routes || (0, u.s)(),
                        plugin: r.B,
                        history: (0, i.f)(t.hot),
                        isServer: { NODE_ENV: 'production' }.__IS_SERVER,
                        dynamicImport: !0,
                        rootElement: 'root',
                        defaultTitle: '',
                      },
                    });
                    return f(e);
                  },
                  args: t,
                });
              },
              d = s();
            d();
            (window.g_umi = { version: '3.5.21' }), t();
          },
          1,
        );
      },
      8466: function (t, e, n) {
        n.r(e),
          n.d(e, {
            __mfsu: function () {
              return r;
            },
          });
        var r = 1;
      },
      6326: function (t, e, n) {
        var r = new Error();
        t.exports = new Promise(function (t, e) {
          if ('undefined' !== typeof mf) return t();
          n.l(
            n.p + 'mf-va_remoteEntry.js',
            function (n) {
              if ('undefined' !== typeof mf) return t();
              var a = n && ('load' === n.type ? 'missing' : n.type),
                i = n && n.target && n.target.src;
              (r.message = 'Loading script failed.\n(' + a + ': ' + i + ')'),
                (r.name = 'ScriptExternalLoadError'),
                (r.type = a),
                (r.request = i),
                e(r);
            },
            'mf',
          );
        }).then(function () {
          return mf;
        });
      },
    },
    e = {};
  function n(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var i = (e[r] = { exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.m = t),
    (function () {
      var t =
          'function' === typeof Symbol
            ? Symbol('webpack then')
            : '__webpack_then__',
        e =
          'function' === typeof Symbol
            ? Symbol('webpack exports')
            : '__webpack_exports__',
        r = function (t) {
          t &&
            (t.forEach(function (t) {
              t.r--;
            }),
            t.forEach(function (t) {
              t.r-- ? t.r++ : t();
            }));
        },
        a = function (t) {
          !--t.r && t();
        },
        i = function (t, e) {
          t ? t.push(e) : a(e);
        },
        u = function (n) {
          return n.map(function (n) {
            if (null !== n && 'object' === typeof n) {
              if (n[t]) return n;
              if (n.then) {
                var u = [];
                n.then(function (t) {
                  (o[e] = t), r(u), (u = 0);
                });
                var o = {
                  [t]: function (t, e) {
                    i(u, t), n.catch(e);
                  },
                };
                return o;
              }
            }
            return {
              [t]: function (t) {
                a(t);
              },
              [e]: n,
            };
          });
        };
      n.a = function (n, o, c) {
        var f,
          s,
          d,
          l = c && [],
          p = n.exports,
          h = !0,
          m = !1,
          v = function (e, n, r) {
            m ||
              ((m = !0),
              (n.r += e.length),
              e.map(function (e, a) {
                e[t](n, r);
              }),
              (m = !1));
          },
          b = new Promise(function (t, e) {
            (d = e),
              (s = function () {
                t(p), r(l), (l = 0);
              });
          });
        (b[e] = p),
          (b[t] = function (t, e) {
            if (h) return a(t);
            f && v(f, t, e), i(l, t), b.catch(e);
          }),
          (n.exports = b),
          o(function (t) {
            if (!t) return s();
            var n, r;
            f = u(t);
            var a = new Promise(function (t, a) {
              (n = function () {
                t(
                  (r = f.map(function (t) {
                    return t[e];
                  })),
                );
              }),
                (n.r = 0),
                v(f, n, a);
            });
            return n.r ? a : r;
          }).then(s, d),
          (h = !1);
      };
    })(),
    (function () {
      n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t['default'];
              }
            : function () {
                return t;
              };
        return n.d(e, { a: e }), e;
      };
    })(),
    (function () {
      var t,
        e = Object.getPrototypeOf
          ? function (t) {
              return Object.getPrototypeOf(t);
            }
          : function (t) {
              return t.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ('object' === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && 'function' === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var u = {};
        t = t || [null, e({}), e([]), e(e)];
        for (
          var o = 2 & a && r;
          'object' == typeof o && !~t.indexOf(o);
          o = e(o)
        )
          Object.getOwnPropertyNames(o).forEach(function (t) {
            u[t] = function () {
              return r[t];
            };
          });
        return (
          (u['default'] = function () {
            return r;
          }),
          n.d(i, u),
          i
        );
      };
    })(),
    (function () {
      n.d = function (t, e) {
        for (var r in e)
          n.o(e, r) &&
            !n.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (t) {
          return Promise.all(
            Object.keys(n.f).reduce(function (e, r) {
              return n.f[r](t, e), e;
            }, []),
          );
        });
    })(),
    (function () {
      n.u = function (t) {
        return ({ 51: 'p__detail', 866: 'p__index' }[t] || t) + '.js';
      };
    })(),
    (function () {
      n.miniCssF = function (t) {
        return 620 === t
          ? 'umi.css'
          : ({ 51: 'p__detail', 866: 'p__index' }[t] || t) + '.chunk.css';
      };
    })(),
    (function () {
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      var t = {};
      n.l = function (e, r, a, i) {
        if (t[e]) t[e].push(r);
        else {
          var u, o;
          if (void 0 !== a)
            for (
              var c = document.getElementsByTagName('script'), f = 0;
              f < c.length;
              f++
            ) {
              var s = c[f];
              if (s.getAttribute('src') == e) {
                u = s;
                break;
              }
            }
          u ||
            ((o = !0),
            (u = document.createElement('script')),
            (u.charset = 'utf-8'),
            (u.timeout = 120),
            n.nc && u.setAttribute('nonce', n.nc),
            (u.src = e)),
            (t[e] = [r]);
          var d = function (n, r) {
              (u.onerror = u.onload = null), clearTimeout(l);
              var a = t[e];
              if (
                (delete t[e],
                u.parentNode && u.parentNode.removeChild(u),
                a &&
                  a.forEach(function (t) {
                    return t(r);
                  }),
                n)
              )
                return n(r);
            },
            l = setTimeout(
              d.bind(null, void 0, { type: 'timeout', target: u }),
              12e4,
            );
          (u.onerror = d.bind(null, u.onerror)),
            (u.onload = d.bind(null, u.onload)),
            o && document.head.appendChild(u);
        }
      };
    })(),
    (function () {
      n.r = function (t) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      };
    })(),
    (function () {
      var t = {
          103: [103],
          164: [4164],
          265: [3265],
          279: [9283],
          283: [3283],
          304: [6103],
          412: [4412],
          455: [4455],
          456: [4456],
          555: [4555],
          574: [1574],
          634: [5634],
          658: [8658],
          693: [1693],
          762: [7762],
          770: [4770],
          813: [7813],
          815: [8815],
          822: [5822],
          849: [3849],
          867: [8867],
          875: [5875],
          894: [9894],
          910: [9910],
        },
        e = {
          103: ['default', './antd/es/notification', 6326],
          1574: ['default', './$CWD$/node_modules/@ahooksjs/use-request', 6326],
          1693: ['default', './core-js', 6326],
          3265: ['default', './$CWD$/node_modules/umi-request', 6326],
          3283: ['default', './antd/es/notification/style', 6326],
          3849: ['default', './@antv/f2', 6326],
          4164: ['default', './dayjs', 6326],
          4412: [
            'default',
            './$CWD$/node_modules/umi/node_modules/@umijs/runtime',
            6326,
          ],
          4455: ['default', './react/jsx-runtime', 6326],
          4456: ['default', './@antv/f2-react', 6326],
          4555: ['default', './antd/es/message/style', 6326],
          4770: ['default', './$CWD$/node_modules/react-helmet', 6326],
          5634: [
            'default',
            './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator',
            6326,
          ],
          5822: ['default', './umi-request', 6326],
          5875: [
            'default',
            './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties',
            6326,
          ],
          6103: ['default', './store', 6326],
          7762: ['default', './antd/es/message', 6326],
          7813: [
            'default',
            './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray',
            6326,
          ],
          8658: [
            'default',
            './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2',
            6326,
          ],
          8815: ['default', './regenerator-runtime/runtime', 6326],
          8867: [
            'default',
            './$CWD$/node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js',
            6326,
          ],
          9283: ['default', './$CWD$/node_modules/@umijs/renderer-react', 6326],
          9894: [
            'default',
            './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator',
            6326,
          ],
          9910: ['default', './react', 6326],
        };
      n.f.remotes = function (r, a) {
        n.o(t, r) &&
          t[r].forEach(function (t) {
            var r = n.R;
            r || (r = []);
            var i = e[t];
            if (!(r.indexOf(i) >= 0)) {
              if ((r.push(i), i.p)) return a.push(i.p);
              var u = function (e) {
                  e || (e = new Error('Container missing')),
                    'string' === typeof e.message &&
                      (e.message +=
                        '\nwhile loading "' + i[1] + '" from ' + i[2]),
                    (n.m[t] = function () {
                      throw e;
                    }),
                    (i.p = 0);
                },
                o = function (t, e, n, r, o, c) {
                  try {
                    var f = t(e, n);
                    if (!f || !f.then) return o(f, r, c);
                    var s = f.then(function (t) {
                      return o(t, r);
                    }, u);
                    if (!c) return s;
                    a.push((i.p = s));
                  } catch (d) {
                    u(d);
                  }
                },
                c = function (t, e, r) {
                  return t ? o(n.I, i[0], 0, t, f, r) : u();
                },
                f = function (t, e, n) {
                  return o(e.get, i[1], r, 0, s, n);
                },
                s = function (e) {
                  (i.p = 1),
                    (n.m[t] = function (t) {
                      t.exports = e();
                    });
                };
              o(n, i[2], 0, 0, c, 1);
            }
          });
      };
    })(),
    (function () {
      n.S = {};
      var t = {},
        e = {};
      n.I = function (r, a) {
        a || (a = []);
        var i = e[r];
        if ((i || (i = e[r] = {}), !(a.indexOf(i) >= 0))) {
          if ((a.push(i), t[r])) return t[r];
          n.o(n.S, r) || (n.S[r] = {});
          n.S[r];
          var u = function (t) {
              return (
                'undefined' !== typeof console &&
                console.warn &&
                console.warn(t)
              );
            },
            o = function (t) {
              var e = function (t) {
                u('Initialization of sharing external failed: ' + t);
              };
              try {
                var i = n(t);
                if (!i) return;
                var o = function (t) {
                  return t && t.init && t.init(n.S[r], a);
                };
                if (i.then) return c.push(i.then(o, e));
                var f = o(i);
                if (f && f.then) return c.push(f.catch(e));
              } catch (s) {
                e(s);
              }
            },
            c = [];
          switch (r) {
            case 'default':
              o(6326);
              break;
          }
          return c.length
            ? (t[r] = Promise.all(c).then(function () {
                return (t[r] = 1);
              }))
            : (t[r] = 1);
        }
      };
    })(),
    (function () {
      n.p = '/weather/';
    })(),
    (function () {
      var t = function (t, e, n) {
          var r = document.createElement('link');
          (r.rel = 'stylesheet'),
            (r.type = 'text/css'),
            (r.onload = e),
            (r.onerror = function (e) {
              var a = (e && e.target && e.target.src) || t,
                i = new Error(
                  'Loading CSS chunk ' + chunkId + ' failed.\n(' + a + ')',
                );
              (i.code = 'CSS_CHUNK_LOAD_FAILED'),
                (i.request = a),
                r.parentNode.removeChild(r),
                n(i);
            }),
            (r.href = t);
          var a = document.getElementsByTagName('head')[0];
          return a.appendChild(r), r;
        },
        e = function (t, e) {
          for (
            var n = document.getElementsByTagName('link'), r = 0;
            r < n.length;
            r++
          ) {
            var a = n[r],
              i = a.getAttribute('data-href') || a.getAttribute('href');
            if ('stylesheet' === a.rel && (i === t || i === e)) return a;
          }
          var u = document.getElementsByTagName('style');
          for (r = 0; r < u.length; r++) {
            (a = u[r]), (i = a.getAttribute('data-href'));
            if (i === t || i === e) return a;
          }
        },
        r = function (r) {
          return new Promise(function (a, i) {
            var u = n.miniCssF(r),
              o = n.p + u;
            if (e(u, o)) return a();
            t(o, a, i);
          });
        },
        a = { 620: 0 };
      n.f.miniCss = function (t, e) {
        var n = {
          34: 1,
          48: 1,
          203: 1,
          365: 1,
          418: 1,
          673: 1,
          701: 1,
          773: 1,
          797: 1,
          989: 1,
        };
        a[t]
          ? e.push(a[t])
          : 0 !== a[t] &&
            n[t] &&
            e.push(
              (a[t] = r(t).then(
                function () {
                  a[t] = 0;
                },
                function (e) {
                  throw (delete a[t], e);
                },
              )),
            );
      };
    })(),
    (function () {
      var t = { 620: 0 };
      n.f.j = function (e, r) {
        var a = n.o(t, e) ? t[e] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else if (
            /^(7(01|73|97)|203|34|365|418|48|51|620|673|866|989)$/.test(e)
          ) {
            var i = new Promise(function (n, r) {
              a = t[e] = [n, r];
            });
            r.push((a[2] = i));
            var u = n.p + n.u(e),
              o = new Error(),
              c = function (r) {
                if (n.o(t, e) && ((a = t[e]), 0 !== a && (t[e] = void 0), a)) {
                  var i = r && ('load' === r.type ? 'missing' : r.type),
                    u = r && r.target && r.target.src;
                  (o.message =
                    'Loading chunk ' + e + ' failed.\n(' + i + ': ' + u + ')'),
                    (o.name = 'ChunkLoadError'),
                    (o.type = i),
                    (o.request = u),
                    a[1](o);
                }
              };
            n.l(u, c, 'chunk-' + e, e);
          } else t[e] = 0;
      };
      var e = function (e, r) {
          var a,
            i,
            u = r[0],
            o = r[1],
            c = r[2],
            f = 0;
          for (a in o) n.o(o, a) && (n.m[a] = o[a]);
          if (c) c(n);
          for (e && e(r); f < u.length; f++)
            (i = u[f]), n.o(t, i) && t[i] && t[i][0](), (t[u[f]] = 0);
        },
        r = (self['webpackChunk'] = self['webpackChunk'] || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  n(3452);
})();
