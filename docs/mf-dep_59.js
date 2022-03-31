(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_59'],
  {
    41059: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          renderClient: function () {
            return oe;
          },
          renderRoutes: function () {
            return Z;
          },
        });
      var n = r(67294),
        o = r(42634);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                s(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function c(e, t, r) {
        return t && l(e.prototype, t), r && l(e, r), e;
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function f(e, t) {
        if (e) {
          if ('string' === typeof e) return p(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? p(e, t)
              : void 0
          );
        }
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function d(e, t) {
        var r =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = f(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          u = !0,
          a = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              u || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      var h = (0, n.createContext)(null),
        y = [],
        m = [],
        v = !1;
      function b(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      function g(e) {
        var t = { loading: !1, loaded: {}, error: null },
          r = [];
        try {
          Object.keys(e).forEach(function (n) {
            var o = b(e[n]);
            o.loading
              ? (t.loading = !0)
              : ((t.loaded[n] = o.loaded), (t.error = o.error)),
              r.push(o.promise),
              o.promise
                .then(function (e) {
                  t.loaded[n] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (n) {
          t.error = n;
        }
        return (
          (t.promise = Promise.all(r)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function w(e) {
        return e && e.__esModule ? e.default : e;
      }
      function O(e, t) {
        return (0, n.createElement)(w(e), t);
      }
      function P(e, t) {
        var r = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: O,
              webpack: null,
              modules: null,
            },
            t,
          ),
          i = null;
        function u() {
          if (!i) {
            var t = new _(e, r);
            i = {
              getCurrentValue: t.getCurrentValue.bind(t),
              subscribe: t.subscribe.bind(t),
              retry: t.retry.bind(t),
              promise: t.promise.bind(t),
            };
          }
          return i.promise();
        }
        if (
          ('undefined' === typeof window && y.push(u),
          !v &&
            'undefined' !== typeof window &&
            'function' === typeof r.webpack)
        ) {
          var a = r.webpack();
          m.push(function (e) {
            var t,
              r = d(a);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var n = t.value;
                if (-1 !== e.indexOf(n)) return u();
              }
            } catch (o) {
              r.e(o);
            } finally {
              r.f();
            }
          });
        }
        var l = function (e, t) {
            u();
            var a = (0, n.useContext)(h),
              l = (0, o.useSubscription)(i);
            return (
              (0, n.useImperativeHandle)(t, function () {
                return { retry: i.retry };
              }),
              a &&
                Array.isArray(r.modules) &&
                r.modules.forEach(function (e) {
                  a(e);
                }),
              l.loading || l.error
                ? (0, n.createElement)(r.loading, {
                    isLoading: l.loading,
                    pastDelay: l.pastDelay,
                    timedOut: l.timedOut,
                    error: l.error,
                    retry: i.retry,
                  })
                : l.loaded
                ? r.render(l.loaded, e)
                : null
            );
          },
          c = (0, n.forwardRef)(l);
        return (
          (c.preload = function () {
            return u();
          }),
          (c.displayName = 'LoadableComponent'),
          c
        );
      }
      var _ = (function () {
        function e(t, r) {
          a(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          c(e, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ('number' === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, r.delay))),
                  'number' === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update(), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update(), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function (e) {
                (this._state = u(u({}, this._state), e)),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return u(
                  u({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                );
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function j(e) {
        return P(b, e);
      }
      function E(e) {
        if ('function' !== typeof e.render)
          throw new Error(
            'LoadableMap requires a `render(loaded, props)` function',
          );
        return P(g, e);
      }
      function k(e, t) {
        var r = [];
        while (e.length) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return k(e, t);
        });
      }
      (j.Map = E),
        (j.preloadAll = function () {
          return new Promise(function (e, t) {
            k(y).then(e, t);
          });
        }),
        (j.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (v = !0), t();
            };
            k(m, e).then(r, r);
          });
        }),
        'undefined' !== typeof window &&
          (window.__NEXT_PRELOADREADY = j.preloadReady);
      var x;
      (function (e) {
        (e['compose'] = 'compose'),
          (e['modify'] = 'modify'),
          (e['event'] = 'event');
      })(x || (x = {}));
      var S = r(51615),
        C = r(73935);
      function I(e, t, r) {
        return (
          void 0 === r && (r = []),
          e.some(function (e) {
            var n = e.path
              ? (0, S.LX)(t, e)
              : r.length
              ? r[r.length - 1].match
              : S.F0.computeRootMatch(t);
            return (
              n &&
                (r.push({ route: e, match: n }), e.routes && I(e.routes, t, r)),
              n
            );
          }),
          r
        );
      }
      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                V(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function T(e, t, r, n, o, i, u) {
        try {
          var a = e[i](u),
            l = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, o);
      }
      function D(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function u(e) {
              T(i, n, o, u, a, 'next', e);
            }
            function a(e) {
              T(i, n, o, u, a, 'throw', e);
            }
            u(void 0);
          });
        };
      }
      function V(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function L() {
        return (
          (L =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          L.apply(this, arguments)
        );
      }
      function M(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      function F(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = M(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function N(e, t) {
        return X(e) || U(e, t) || $(e, t) || B();
      }
      function X(e) {
        if (Array.isArray(e)) return e;
      }
      function U(e, t) {
        var r =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != r) {
          var n,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (r = r.call(e); !(u = (n = r.next()).done); u = !0)
              if ((i.push(n.value), t && i.length === t)) break;
          } catch (l) {
            (a = !0), (o = l);
          } finally {
            try {
              u || null == r['return'] || r['return']();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }
      function $(e, t) {
        if (e) {
          if ('string' === typeof e) return q(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? q(e, t)
              : void 0
          );
        }
      }
      function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function B() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function G(e, t) {
        var r =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = $(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          u = !0,
          a = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (a = !0), (i = e);
          },
          f: function () {
            try {
              u || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function H(e) {
        return n.createElement(S.s6.Consumer, null, function (t) {
          var r = e.location || t.location,
            o = e.computedMatch,
            i = A(A({}, t), {}, { location: r, match: o }),
            u = e.render;
          return n.createElement(
            S.s6.Provider,
            { value: i },
            i.match ? u(A(A({}, e.layoutProps), i)) : null,
          );
        });
      }
      var W = ['children'];
      function Y(e) {
        return n.createElement(S.s6.Consumer, null, function (t) {
          var r,
            o = e.children,
            i = F(e, W),
            u = e.location || t.location,
            a = null;
          return (
            n.Children.forEach(o, function (e) {
              if (null === a && (0, n.isValidElement)(e)) {
                r = e;
                var o = e.props.path || e.props.from;
                a = o
                  ? (0, S.LX)(u.pathname, A(A({}, e.props), {}, { path: o }))
                  : t.match;
              }
            }),
            a
              ? (0, n.cloneElement)(r, {
                  location: u,
                  computedMatch: a,
                  layoutProps: i,
                })
              : null
          );
        });
      }
      var z = ['component'];
      function J(e, t) {
        e.component;
        var r = F(e, z),
          o = e.component;
        function i(i) {
          var u = (0, n.useState)(function () {
              return window.g_initialProps;
            }),
            a = N(u, 2),
            l = a[0],
            c = a[1];
          return (
            (0, n.useEffect)(
              function () {
                var n = (function () {
                  var n = D(
                    regeneratorRuntime.mark(function n() {
                      var u, a, l, s, f;
                      return regeneratorRuntime.wrap(function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (((a = o), !o.preload)) {
                                n.next = 6;
                                break;
                              }
                              return (n.next = 4), o.preload();
                            case 4:
                              (a = n.sent), (a = a.default || a);
                            case 6:
                              if (
                                ((l = A(
                                  A(
                                    {
                                      isServer: !1,
                                      match:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.match,
                                      history:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.history,
                                      route: e,
                                    },
                                    t.getInitialPropsCtx || {},
                                  ),
                                  r,
                                )),
                                !(null === (u = a) || void 0 === u
                                  ? void 0
                                  : u.getInitialProps))
                              ) {
                                n.next = 15;
                                break;
                              }
                              return (
                                (n.next = 10),
                                t.plugin.applyPlugins({
                                  key: 'ssr.modifyGetInitialPropsCtx',
                                  type: x.modify,
                                  initialValue: l,
                                  async: !0,
                                })
                              );
                            case 10:
                              return (
                                (s = n.sent),
                                (n.next = 13),
                                a.getInitialProps(s || l)
                              );
                            case 13:
                              (f = n.sent), c(f);
                            case 15:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  );
                  return function () {
                    return n.apply(this, arguments);
                  };
                })();
                window.g_initialProps || n();
              },
              [window.location.pathname, window.location.search],
            ),
            n.createElement(o, L({}, i, l))
          );
        }
        return (
          (i.wrapInitialPropsLoaded = !0),
          (i.displayName = 'ComponentWithInitialPropsFetch'),
          i
        );
      }
      function K(e) {
        var t = e.route,
          r = e.opts,
          o = e.props,
          i = Z(
            A(
              A({}, r),
              {},
              { routes: t.routes || [], rootRoutes: r.rootRoutes },
            ),
            { location: o.location },
          ),
          u = t.component,
          a = t.wrappers;
        if (u) {
          var l = r.isServer ? {} : window.g_initialProps,
            c = A(
              A(A(A({}, o), r.extraProps), r.pageInitialProps || l),
              {},
              { route: t, routes: r.rootRoutes },
            ),
            s = n.createElement(u, c, i);
          if (a) {
            var f = a.length - 1;
            while (f >= 0) (s = (0, n.createElement)(a[f], c, s)), (f -= 1);
          }
          return s;
        }
        return i;
      }
      function Q(e) {
        var t,
          r,
          o,
          i = e.route,
          u = e.index,
          a = e.opts,
          l = {
            key: i.key || u,
            exact: i.exact,
            strict: i.strict,
            sensitive: i.sensitive,
            path: i.path,
          };
        return i.redirect
          ? n.createElement(S.l_, L({}, l, { from: i.path, to: i.redirect }))
          : (!a.ssrProps ||
              a.isServer ||
              (null === (t = i.component) || void 0 === t
                ? void 0
                : t.wrapInitialPropsLoaded) ||
              (!(null === (r = i.component) || void 0 === r
                ? void 0
                : r.getInitialProps) &&
                !(null === (o = i.component) || void 0 === o
                  ? void 0
                  : o.preload)) ||
              (i.component = J(i, a)),
            n.createElement(
              H,
              L({}, l, {
                render: function (e) {
                  return K({ route: i, opts: a, props: e });
                },
              }),
            ));
      }
      function Z(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.routes
          ? n.createElement(
              Y,
              t,
              e.routes.map(function (t, r) {
                return Q({
                  route: t,
                  index: r,
                  opts: A(
                    A({}, e),
                    {},
                    { rootRoutes: e.rootRoutes || e.routes },
                  ),
                });
              }),
            )
          : null;
      }
      var ee = ['history'];
      function te(e) {
        var t = e.history,
          r = F(e, ee);
        return (
          (0, n.useEffect)(
            function () {
              function n(t, n) {
                var o = I(e.routes, t.pathname);
                'undefined' !== typeof document &&
                  void 0 !== r.defaultTitle &&
                  (document.title =
                    (o.length && o[o.length - 1].route.title) ||
                    r.defaultTitle ||
                    ''),
                  e.plugin.applyPlugins({
                    key: 'onRouteChange',
                    type: x.event,
                    args: {
                      routes: e.routes,
                      matchedRoutes: o,
                      location: t,
                      action: n,
                    },
                  });
              }
              return (
                window.g_useSSR && (window.g_initialProps = null),
                n(t.location, 'POP'),
                t.listen(n)
              );
            },
            [t],
          ),
          n.createElement(S.F0, { history: t }, Z(r))
        );
      }
      function re(e) {
        return ne.apply(this, arguments);
      }
      function ne() {
        return (
          (ne = D(
            regeneratorRuntime.mark(function e(t) {
              var r,
                n,
                o,
                i,
                u,
                a,
                l,
                c,
                s = arguments;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r =
                          s.length > 1 && void 0 !== s[1]
                            ? s[1]
                            : window.location.pathname),
                          (n = I(t, r)),
                          (o = G(n)),
                          (e.prev = 3),
                          o.s();
                      case 5:
                        if ((i = o.n()).done) {
                          e.next = 19;
                          break;
                        }
                        if (
                          ((a = i.value),
                          (l = a.route),
                          'string' === typeof l.component ||
                            !(null === (u = l.component) || void 0 === u
                              ? void 0
                              : u.preload))
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (e.next = 11), l.component.preload();
                      case 11:
                        (c = e.sent), (l.component = c.default || c);
                      case 13:
                        if (!l.routes) {
                          e.next = 17;
                          break;
                        }
                        return (e.next = 16), re(l.routes, r);
                      case 16:
                        l.routes = e.sent;
                      case 17:
                        e.next = 5;
                        break;
                      case 19:
                        e.next = 24;
                        break;
                      case 21:
                        (e.prev = 21), (e.t0 = e['catch'](3)), o.e(e.t0);
                      case 24:
                        return (e.prev = 24), o.f(), e.finish(24);
                      case 27:
                        return e.abrupt('return', t);
                      case 28:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 21, 24, 27]],
              );
            }),
          )),
          ne.apply(this, arguments)
        );
      }
      function oe(e) {
        var t = e.plugin.applyPlugins({
          type: x.modify,
          key: 'rootContainer',
          initialValue: n.createElement(te, {
            history: e.history,
            routes: e.routes,
            plugin: e.plugin,
            ssrProps: e.ssrProps,
            defaultTitle: e.defaultTitle,
          }),
          args: { history: e.history, routes: e.routes, plugin: e.plugin },
        });
        if (!e.rootElement) return t;
        var r =
            'string' === typeof e.rootElement
              ? document.getElementById(e.rootElement)
              : e.rootElement,
          o = e.callback || function () {};
        window.g_useSSR
          ? e.dynamicImport
            ? re(e.routes).then(function () {
                (0, C.hydrate)(t, r, o);
              })
            : (0, C.hydrate)(t, r, o)
          : (0, C.render)(t, r, o);
      }
    },
    83706: function (e, t, r) {
      'use strict';
      var n = r(27418),
        o = r(67294);
      t.useSubscription = function (e) {
        var t = e.getCurrentValue,
          r = e.subscribe,
          i = o.useState(function () {
            return { getCurrentValue: t, subscribe: r, value: t() };
          });
        e = i[0];
        var u = i[1];
        return (
          (i = e.value),
          (e.getCurrentValue === t && e.subscribe === r) ||
            ((i = t()), u({ getCurrentValue: t, subscribe: r, value: i })),
          o.useDebugValue(i),
          o.useEffect(
            function () {
              function e() {
                if (!o) {
                  var e = t();
                  u(function (o) {
                    return o.getCurrentValue !== t ||
                      o.subscribe !== r ||
                      o.value === e
                      ? o
                      : n({}, o, { value: e });
                  });
                }
              }
              var o = !1,
                i = r(e);
              return (
                e(),
                function () {
                  (o = !0), i();
                }
              );
            },
            [t, r],
          ),
          i
        );
      };
    },
    42634: function (e, t, r) {
      'use strict';
      e.exports = r(83706);
    },
  },
]);
