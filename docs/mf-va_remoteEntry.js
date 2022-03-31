(function () {
  'use strict';
  var e = {},
    n = {};
  function t(r) {
    var u = n[r];
    if (void 0 !== u) return u.exports;
    var o = (n[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, t), o.exports;
  }
  (t.m = e),
    (function () {
      t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e['default'];
              }
            : function () {
                return e;
              };
        return t.d(n, { a: n }), n;
      };
    })(),
    (function () {
      t.d = function (e, n) {
        for (var r in n)
          t.o(n, r) &&
            !t.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
      };
    })(),
    (function () {
      (t.f = {}),
        (t.e = function (e) {
          return Promise.all(
            Object.keys(t.f).reduce(function (n, r) {
              return t.f[r](e, n), n;
            }, []),
          );
        });
    })(),
    (function () {
      t.u = function (e) {
        return e + '.js';
      };
    })(),
    (function () {
      t.miniCssF = function (e) {
        return 'mf-dep_700' === e ? 'mf.css' : e + '.chunk.css';
      };
    })(),
    (function () {
      t.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (function () {
      t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      };
    })(),
    (function () {
      var e = {};
      t.l = function (n, r, u, o) {
        if (e[n]) e[n].push(r);
        else {
          var i, f;
          if (void 0 !== u)
            for (
              var c = document.getElementsByTagName('script'), d = 0;
              d < c.length;
              d++
            ) {
              var m = c[d];
              if (m.getAttribute('src') == n) {
                i = m;
                break;
              }
            }
          i ||
            ((f = !0),
            (i = document.createElement('script')),
            (i.charset = 'utf-8'),
            (i.timeout = 120),
            t.nc && i.setAttribute('nonce', t.nc),
            (i.src = n)),
            (e[n] = [r]);
          var s = function (t, r) {
              (i.onerror = i.onload = null), clearTimeout(a);
              var u = e[n];
              if (
                (delete e[n],
                i.parentNode && i.parentNode.removeChild(i),
                u &&
                  u.forEach(function (e) {
                    return e(r);
                  }),
                t)
              )
                return t(r);
            },
            a = setTimeout(
              s.bind(null, void 0, { type: 'timeout', target: i }),
              12e4,
            );
          (i.onerror = s.bind(null, i.onerror)),
            (i.onload = s.bind(null, i.onload)),
            f && document.head.appendChild(i);
        }
      };
    })(),
    (function () {
      t.r = function (e) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      };
    })(),
    (function () {
      t.p = '/weather/';
    })(),
    (function () {
      var e = function (e, n, t) {
          var r = document.createElement('link');
          (r.rel = 'stylesheet'),
            (r.type = 'text/css'),
            (r.onload = n),
            (r.onerror = function (n) {
              var u = (n && n.target && n.target.src) || e,
                o = new Error(
                  'Loading CSS chunk ' + chunkId + ' failed.\n(' + u + ')',
                );
              (o.code = 'CSS_CHUNK_LOAD_FAILED'),
                (o.request = u),
                r.parentNode.removeChild(r),
                t(o);
            }),
            (r.href = e);
          var u = document.getElementsByTagName('head')[0];
          return u.appendChild(r), r;
        },
        n = function (e, n) {
          for (
            var t = document.getElementsByTagName('link'), r = 0;
            r < t.length;
            r++
          ) {
            var u = t[r],
              o = u.getAttribute('data-href') || u.getAttribute('href');
            if ('stylesheet' === u.rel && (o === e || o === n)) return u;
          }
          var i = document.getElementsByTagName('style');
          for (r = 0; r < i.length; r++) {
            (u = i[r]), (o = u.getAttribute('data-href'));
            if (o === e || o === n) return u;
          }
        },
        r = function (r) {
          return new Promise(function (u, o) {
            var i = t.miniCssF(r),
              f = t.p + i;
            if (n(i, f)) return u();
            e(f, u, o);
          });
        },
        u = { 'mf-dep_700': 0 };
      t.f.miniCss = function (e, n) {
        var t = { 'mf-dep_997': 1, 'mf-dep_272': 1, 'mf-dep_934': 1 };
        u[e]
          ? n.push(u[e])
          : 0 !== u[e] &&
            t[e] &&
            n.push(
              (u[e] = r(e).then(
                function () {
                  u[e] = 0;
                },
                function (n) {
                  throw (delete u[e], n);
                },
              )),
            );
      };
    })(),
    (function () {
      var e = { 'mf-dep_700': 0 };
      t.f.j = function (n, r) {
        var u = t.o(e, n) ? e[n] : void 0;
        if (0 !== u)
          if (u) r.push(u[2]);
          else if ('mf-dep_997' != n) {
            var o = new Promise(function (t, r) {
              u = e[n] = [t, r];
            });
            r.push((u[2] = o));
            var i = t.p + t.u(n),
              f = new Error(),
              c = function (r) {
                if (t.o(e, n) && ((u = e[n]), 0 !== u && (e[n] = void 0), u)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    i = r && r.target && r.target.src;
                  (f.message =
                    'Loading chunk ' + n + ' failed.\n(' + o + ': ' + i + ')'),
                    (f.name = 'ChunkLoadError'),
                    (f.type = o),
                    (f.request = i),
                    u[1](f);
                }
              };
            t.l(i, c, 'chunk-' + n, n);
          } else e[n] = 0;
      };
      var n = function (n, r) {
          var u,
            o,
            i = r[0],
            f = r[1],
            c = r[2],
            d = 0;
          for (u in f) t.o(f, u) && (t.m[u] = f[u]);
          if (c) c(t);
          for (n && n(r); d < i.length; d++)
            (o = i[d]), t.o(e, o) && e[o] && e[o][0](), (e[i[d]] = 0);
        },
        r = (self['webpackChunk'] = self['webpackChunk'] || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })();
  var r = {};
  !(function () {
    var e = r,
      n = {
        './$CWD$/node_modules/@umijs/renderer-react': function () {
          return Promise.all([
            t.e('mf-dep_686'),
            t.e('mf-dep_615'),
            t.e('mf-dep_59'),
          ]).then(function () {
            return function () {
              return t(41059);
            };
          });
        },
        './$CWD$/node_modules/umi/node_modules/@umijs/runtime': function () {
          return Promise.all([t.e('mf-dep_615'), t.e('mf-dep_577')]).then(
            function () {
              return function () {
                return t(58617);
              };
            },
          );
        },
        './regenerator-runtime/runtime': function () {
          return Promise.all([t.e('mf-dep_445'), t.e('mf-dep_110')]).then(
            function () {
              return function () {
                return t(22110);
              };
            },
          );
        },
        './core-js': function () {
          return Promise.all([t.e('mf-dep_486'), t.e('mf-dep_597')]).then(
            function () {
              return function () {
                return t(20597);
              };
            },
          );
        },
        './react': function () {
          return t.e('mf-dep_817').then(function () {
            return function () {
              return t(83817);
            };
          });
        },
        './react/jsx-runtime': function () {
          return t.e('mf-dep_303').then(function () {
            return function () {
              return t(93303);
            };
          });
        },
        './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray':
          function () {
            return t.e('mf-dep_618').then(function () {
              return function () {
                return t(88618);
              };
            });
          },
        './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator':
          function () {
            return t.e('mf-dep_790').then(function () {
              return function () {
                return t(40790);
              };
            });
          },
        './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator':
          function () {
            return Promise.all([t.e('mf-dep_445'), t.e('mf-dep_17')]).then(
              function () {
                return function () {
                  return t(41017);
                };
              },
            );
          },
        './$CWD$/node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js':
          function () {
            return t.e('mf-dep_908').then(function () {
              return function () {
                return t(21908);
              };
            });
          },
        './store': function () {
          return t.e('mf-dep_68').then(function () {
            return function () {
              return t(35068);
            };
          });
        },
        './umi-request': function () {
          return Promise.all([t.e('mf-dep_238'), t.e('mf-dep_131')]).then(
            function () {
              return function () {
                return t(82138);
              };
            },
          );
        },
        './@antv/f2': function () {
          return Promise.all([
            t.e('mf-dep_445'),
            t.e('mf-dep_148'),
            t.e('mf-dep_243'),
            t.e('mf-dep_995'),
          ]).then(function () {
            return function () {
              return t(43995);
            };
          });
        },
        './@antv/f2-react': function () {
          return Promise.all([t.e('mf-dep_148'), t.e('mf-dep_254')]).then(
            function () {
              return function () {
                return t(40254);
              };
            },
          );
        },
        './dayjs': function () {
          return t.e('mf-dep_805').then(function () {
            return function () {
              return t(11805);
            };
          });
        },
        './$CWD$/node_modules/@ahooksjs/use-request': function () {
          return Promise.all([t.e('mf-dep_279'), t.e('mf-dep_915')]).then(
            function () {
              return function () {
                return t(31915);
              };
            },
          );
        },
        './$CWD$/node_modules/umi-request': function () {
          return Promise.all([t.e('mf-dep_238'), t.e('mf-dep_575')]).then(
            function () {
              return function () {
                return t(22696);
              };
            },
          );
        },
        './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2':
          function () {
            return t.e('mf-dep_671').then(function () {
              return function () {
                return t(98671);
              };
            });
          },
        './$CWD$/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties':
          function () {
            return t.e('mf-dep_679').then(function () {
              return function () {
                return t(19700);
              };
            });
          },
        './$CWD$/node_modules/react-helmet': function () {
          return Promise.all([t.e('mf-dep_593'), t.e('mf-dep_762')]).then(
            function () {
              return function () {
                return t(93762);
              };
            },
          );
        },
        './antd/es/notification': function () {
          return Promise.all([
            t.e('mf-dep_445'),
            t.e('mf-dep_686'),
            t.e('mf-dep_49'),
            t.e('mf-dep_622'),
          ]).then(function () {
            return function () {
              return t(87622);
            };
          });
        },
        './antd/es/notification/style': function () {
          return Promise.all([t.e('mf-dep_997'), t.e('mf-dep_272')]).then(
            function () {
              return function () {
                return t(87272);
              };
            },
          );
        },
        './antd/es/message': function () {
          return Promise.all([
            t.e('mf-dep_445'),
            t.e('mf-dep_686'),
            t.e('mf-dep_49'),
            t.e('mf-dep_837'),
          ]).then(function () {
            return function () {
              return t(61837);
            };
          });
        },
        './antd/es/message/style': function () {
          return Promise.all([t.e('mf-dep_997'), t.e('mf-dep_934')]).then(
            function () {
              return function () {
                return t(46934);
              };
            },
          );
        },
      },
      u = function (e, r) {
        return (
          (t.R = r),
          (r = t.o(n, e)
            ? n[e]()
            : Promise.resolve().then(function () {
                throw new Error(
                  'Module "' + e + '" does not exist in container.',
                );
              })),
          (t.R = void 0),
          r
        );
      },
      o = function (e, n) {
        if (t.S) {
          var r = t.S['default'],
            u = 'default';
          if (r && r !== e)
            throw new Error(
              'Container initialization failed as it has already been initialized with a different share scope',
            );
          return (t.S[u] = e), t.I(u, n);
        }
      };
    t.d(e, {
      get: function () {
        return u;
      },
      init: function () {
        return o;
      },
    });
  })(),
    (self.mf = r);
})();
