(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_279'],
  {
    10279: function (t, e, n) {
      'use strict';
      n.d(e, {
        dQ: function () {
          return it;
        },
        jQ: function () {
          return ot;
        },
        ZP: function () {
          return ut;
        },
        r5: function () {
          return L;
        },
        BR: function () {
          return A;
        },
        mU: function () {
          return Z;
        },
      });
      var r = n(67294),
        o = n(91296),
        i = n.n(o),
        u = n(93096),
        a = n.n(u);
      function c() {
        return (
          'undefined' === typeof document ||
          'undefined' === typeof document.visibilityState ||
          'hidden' !== document.visibilityState
        );
      }
      function f() {
        return 'undefined' === typeof navigator.onLine || navigator.onLine;
      }
      var l = new Map(),
        s = function (t, e, n) {
          var r = l.get(t);
          (null === r || void 0 === r ? void 0 : r.timer) &&
            clearTimeout(r.timer);
          var o = void 0;
          e > -1 &&
            (o = setTimeout(function () {
              l['delete'](t);
            }, e)),
            l.set(t, { data: n, timer: o, startTime: new Date().getTime() });
        },
        p = function (t) {
          var e = l.get(t);
          return {
            data: null === e || void 0 === e ? void 0 : e.data,
            startTime: null === e || void 0 === e ? void 0 : e.startTime,
          };
        },
        d = function (t, e) {
          var n = 'function' === typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            u = [];
          try {
            while ((void 0 === e || e-- > 0) && !(r = i.next()).done)
              u.push(r.value);
          } catch (a) {
            o = { error: a };
          } finally {
            try {
              r && !r.done && (n = i['return']) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return u;
        },
        h = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(d(arguments[e]));
          return t;
        };
      function v(t, e) {
        var n = !1;
        return function () {
          for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o];
          n ||
            ((n = !0),
            t.apply(void 0, h(r)),
            setTimeout(function () {
              n = !1;
            }, e));
        };
      }
      var y = function (t, e) {
          var n = 'function' === typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            u = [];
          try {
            while ((void 0 === e || e-- > 0) && !(r = i.next()).done)
              u.push(r.value);
          } catch (a) {
            o = { error: a };
          } finally {
            try {
              r && !r.done && (n = i['return']) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return u;
        },
        g = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(y(arguments[e]));
          return t;
        };
      function m(t) {
        var e = (0, r.useRef)(function () {
          throw new Error('Cannot call an event handler while rendering.');
        });
        e.current = t;
        var n = (0, r.useCallback)(
          function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = e.current;
            if (r) return r.apply(void 0, g(t));
          },
          [e],
        );
        if ('function' === typeof t) return n;
      }
      var b = m,
        w = function (t, e) {
          var n = (0, r.useRef)(!1);
          (0, r.useEffect)(function () {
            return function () {
              n.current = !1;
            };
          }, []),
            (0, r.useEffect)(function () {
              if (n.current) return t();
              n.current = !0;
            }, e);
        },
        O = w,
        j = [];
      function S(t) {
        return (
          j.push(t),
          function () {
            var e = j.indexOf(t);
            j.splice(e, 1);
          }
        );
      }
      var E = !1;
      if ('undefined' !== typeof window && window.addEventListener && !E) {
        var T = function () {
          if (c() && f())
            for (var t = 0; t < j.length; t++) {
              var e = j[t];
              e();
            }
        };
        window.addEventListener('visibilitychange', T, !1),
          window.addEventListener('focus', T, !1),
          (E = !0);
      }
      var _ = S,
        R = [];
      function P(t) {
        return (
          R.push(t),
          function () {
            var e = R.indexOf(t);
            R.splice(e, 1);
          }
        );
      }
      var k = !1;
      if ('undefined' !== typeof window && window.addEventListener && !k) {
        var x = function () {
          if (c())
            for (var t = 0; t < R.length; t++) {
              var e = R[t];
              e();
            }
        };
        window.addEventListener('visibilitychange', x, !1), (k = !0);
      }
      var C = P,
        $ = function () {
          return (
            ($ =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in ((e = arguments[n]), e))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            $.apply(this, arguments)
          );
        },
        D = function (t, e) {
          var n = 'function' === typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            u = [];
          try {
            while ((void 0 === e || e-- > 0) && !(r = i.next()).done)
              u.push(r.value);
          } catch (a) {
            o = { error: a };
          } finally {
            try {
              r && !r.done && (n = i['return']) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return u;
        },
        I = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(D(arguments[e]));
          return t;
        },
        M = 'AHOOKS_USE_REQUEST_DEFAULT_KEY',
        F = (function () {
          function t(t, e, n, r) {
            (this.count = 0),
              (this.pollingWhenVisibleFlag = !1),
              (this.pollingTimer = void 0),
              (this.loadingDelayTimer = void 0),
              (this.unsubscribe = []),
              (this.that = this),
              (this.state = {
                loading: !1,
                params: [],
                data: void 0,
                error: void 0,
                run: this.run.bind(this.that),
                mutate: this.mutate.bind(this.that),
                refresh: this.refresh.bind(this.that),
                cancel: this.cancel.bind(this.that),
                unmount: this.unmount.bind(this.that),
              }),
              (this.service = t),
              (this.config = e),
              (this.subscribe = n),
              r && (this.state = $($({}, this.state), r)),
              (this.debounceRun = this.config.debounceInterval
                ? i()(this._run, this.config.debounceInterval)
                : void 0),
              (this.throttleRun = this.config.throttleInterval
                ? a()(this._run, this.config.throttleInterval)
                : void 0),
              (this.limitRefresh = v(
                this.refresh.bind(this),
                this.config.focusTimespan,
              )),
              this.config.pollingInterval &&
                this.unsubscribe.push(C(this.rePolling.bind(this))),
              this.config.refreshOnWindowFocus &&
                this.unsubscribe.push(_(this.limitRefresh.bind(this)));
          }
          return (
            (t.prototype.setState = function (t) {
              void 0 === t && (t = {}),
                (this.state = $($({}, this.state), t)),
                this.subscribe(this.state);
            }),
            (t.prototype._run = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              this.pollingTimer && clearTimeout(this.pollingTimer),
                this.loadingDelayTimer && clearTimeout(this.loadingDelayTimer),
                (this.count += 1);
              var r = this.count;
              return (
                this.setState({
                  loading: !this.config.loadingDelay,
                  params: e,
                }),
                this.config.loadingDelay &&
                  (this.loadingDelayTimer = setTimeout(function () {
                    t.setState({ loading: !0 });
                  }, this.config.loadingDelay)),
                this.service
                  .apply(this, I(e))
                  .then(function (n) {
                    if (r !== t.count) return new Promise(function () {});
                    t.loadingDelayTimer && clearTimeout(t.loadingDelayTimer);
                    var o = t.config.formatResult
                      ? t.config.formatResult(n)
                      : n;
                    return (
                      t.setState({ data: o, error: void 0, loading: !1 }),
                      t.config.onSuccess && t.config.onSuccess(o, e),
                      o
                    );
                  })
                  ['catch'](function (n) {
                    if (r !== t.count) return new Promise(function () {});
                    if (
                      (t.loadingDelayTimer && clearTimeout(t.loadingDelayTimer),
                      t.setState({ data: void 0, error: n, loading: !1 }),
                      t.config.onError && t.config.onError(n, e),
                      t.config.throwOnError)
                    )
                      throw n;
                    return (
                      console.error(n),
                      Promise.reject(
                        'useRequest has caught the exception, if you need to handle the exception yourself, you can set options.throwOnError to true.',
                      )
                    );
                  })
                  ['finally'](function () {
                    if (r === t.count && t.config.pollingInterval) {
                      if (!c() && !t.config.pollingWhenHidden)
                        return void (t.pollingWhenVisibleFlag = !0);
                      t.pollingTimer = setTimeout(function () {
                        t._run.apply(t, I(e));
                      }, t.config.pollingInterval);
                    }
                  })
              );
            }),
            (t.prototype.run = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return this.debounceRun
                ? (this.debounceRun.apply(this, I(t)), Promise.resolve(null))
                : this.throttleRun
                ? (this.throttleRun.apply(this, I(t)), Promise.resolve(null))
                : this._run.apply(this, I(t));
            }),
            (t.prototype.cancel = function () {
              this.debounceRun && this.debounceRun.cancel(),
                this.throttleRun && this.throttleRun.cancel(),
                this.loadingDelayTimer && clearTimeout(this.loadingDelayTimer),
                this.pollingTimer && clearTimeout(this.pollingTimer),
                (this.pollingWhenVisibleFlag = !1),
                (this.count += 1),
                this.setState({ loading: !1 });
            }),
            (t.prototype.refresh = function () {
              return this.run.apply(this, I(this.state.params));
            }),
            (t.prototype.rePolling = function () {
              this.pollingWhenVisibleFlag &&
                ((this.pollingWhenVisibleFlag = !1), this.refresh());
            }),
            (t.prototype.mutate = function (t) {
              'function' === typeof t
                ? this.setState({ data: t(this.state.data) || {} })
                : this.setState({ data: t });
            }),
            (t.prototype.unmount = function () {
              this.cancel(),
                this.unsubscribe.forEach(function (t) {
                  t();
                });
            }),
            t
          );
        })();
      function W(t, e) {
        var n,
          o = e || {},
          i = o.refreshDeps,
          u = void 0 === i ? [] : i,
          a = o.manual,
          c = void 0 !== a && a,
          f = o.onSuccess,
          l = void 0 === f ? function () {} : f,
          d = o.onError,
          h = void 0 === d ? function () {} : d,
          v = o.defaultLoading,
          y = void 0 !== v && v,
          g = o.loadingDelay,
          m = o.pollingInterval,
          w = void 0 === m ? 0 : m,
          j = o.pollingWhenHidden,
          S = void 0 === j || j,
          E = o.defaultParams,
          T = void 0 === E ? [] : E,
          _ = o.refreshOnWindowFocus,
          R = void 0 !== _ && _,
          P = o.focusTimespan,
          k = void 0 === P ? 5e3 : P,
          x = o.fetchKey,
          C = o.cacheKey,
          W = o.cacheTime,
          L = void 0 === W ? 3e5 : W,
          K = o.staleTime,
          q = void 0 === K ? 0 : K,
          z = o.debounceInterval,
          N = o.throttleInterval,
          U = o.initialData,
          A = o.ready,
          V = void 0 === A || A,
          H = o.throwOnError,
          Y = void 0 !== H && H,
          B = (0, r.useRef)(M),
          Q = b(t),
          Z = b(l),
          G = b(h),
          J = b(x);
        'formatResult' in o && (n = o.formatResult);
        var X = b(n),
          tt = {
            formatResult: X,
            onSuccess: Z,
            onError: G,
            loadingDelay: g,
            pollingInterval: w,
            pollingWhenHidden: S,
            refreshOnWindowFocus: !c && R,
            focusTimespan: k,
            debounceInterval: z,
            throttleInterval: N,
            throwOnError: Y,
          },
          et = b(function (t, e) {
            ot(function (n) {
              return (n[t] = e), $({}, n);
            });
          }),
          nt = D(
            (0, r.useState)(function () {
              var t;
              if (C) {
                var e = null === (t = p(C)) || void 0 === t ? void 0 : t.data;
                if (e) {
                  B.current = e.newstFetchKey;
                  var n = {};
                  return (
                    Object.keys(e.fetches).forEach(function (t) {
                      var r = e.fetches[t],
                        o = new F(Q, tt, et.bind(null, t), {
                          loading: r.loading,
                          params: r.params,
                          data: r.data,
                          error: r.error,
                        });
                      n[t] = o.state;
                    }),
                    n
                  );
                }
              }
              return {};
            }),
            2,
          ),
          rt = nt[0],
          ot = nt[1],
          it = (0, r.useRef)(rt);
        it.current = rt;
        var ut = (0, r.useRef)(),
          at = (0, r.useCallback)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              if (V) {
                if (J) {
                  var n = J.apply(void 0, I(t));
                  B.current = void 0 === n ? M : n;
                }
                var r = B.current,
                  o = it.current[r];
                if (!o) {
                  var i = new F(Q, tt, et.bind(null, r), { data: U });
                  (o = i.state),
                    ot(function (t) {
                      return (t[r] = o), $({}, t);
                    });
                }
                return o.run.apply(o, I(t));
              }
              ut.current = t;
            },
            [x, et, V],
          ),
          ct = (0, r.useRef)(at);
        (ct.current = at),
          O(
            function () {
              C && s(C, L, { fetches: rt, newstFetchKey: B.current });
            },
            [C, rt],
          );
        var ft = (0, r.useRef)(!1);
        O(
          function () {
            V &&
              (!ft.current && ut.current && ct.current.apply(ct, I(ut.current)),
              (ft.current = !0));
          },
          [V],
        ),
          (0, r.useEffect)(function () {
            var t;
            if (!c)
              if (Object.keys(rt).length > 0) {
                var e =
                  (C &&
                    (null === (t = p(C)) || void 0 === t
                      ? void 0
                      : t.startTime)) ||
                  0;
                -1 === q ||
                  new Date().getTime() - e <= q ||
                  Object.values(rt).forEach(function (t) {
                    t.refresh();
                  });
              } else ct.current.apply(ct, I(T));
          }, []);
        var lt = (0, r.useCallback)(
          function () {
            Object.values(it.current).forEach(function (t) {
              t.unmount();
            }),
              (B.current = M),
              ot({}),
              (it.current = {});
          },
          [ot],
        );
        O(function () {
          c ||
            Object.values(it.current).forEach(function (t) {
              t.refresh();
            });
        }, I(u)),
          (0, r.useEffect)(function () {
            return function () {
              Object.values(it.current).forEach(function (t) {
                t.unmount();
              });
            };
          }, []);
        var st = (0, r.useCallback)(function (t) {
          return function () {
            console.warn(
              "You should't call " + t + ' when service not executed once.',
            );
          };
        }, []);
        return $(
          $(
            {
              loading: (V && !c) || y,
              data: U,
              error: void 0,
              params: [],
              cancel: st('cancel'),
              refresh: st('refresh'),
              mutate: st('mutate'),
            },
            rt[B.current] || {},
          ),
          { run: at, fetches: rt, reset: lt },
        );
      }
      var L = W,
        K = function () {
          return (
            (K =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in ((e = arguments[n]), e))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            K.apply(this, arguments)
          );
        },
        q = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        },
        z = function (t, e) {
          var n = 'function' === typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            u = [];
          try {
            while ((void 0 === e || e-- > 0) && !(r = i.next()).done)
              u.push(r.value);
          } catch (a) {
            o = { error: a };
          } finally {
            try {
              r && !r.done && (n = i['return']) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return u;
        },
        N = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(z(arguments[e]));
          return t;
        };
      function U(t, e) {
        var n = e.refreshDeps,
          o = void 0 === n ? [] : n,
          i = e.ref,
          u = e.isNoMore,
          a = e.threshold,
          c = void 0 === a ? 100 : a,
          f =
            (e.fetchKey,
            q(e, ['refreshDeps', 'ref', 'isNoMore', 'threshold', 'fetchKey'])),
          l = z((0, r.useState)(!1), 2),
          s = l[0],
          p = l[1];
        (0, r.useEffect)(function () {
          e.fetchKey &&
            console.warn("useRequest loadMore mode don't need fetchKey!");
        }, []);
        var d = L(
            t,
            K(K({}, f), {
              fetchKey: function (t) {
                var e;
                return (
                  (null ===
                    (e = null === t || void 0 === t ? void 0 : t.list) ||
                  void 0 === e
                    ? void 0
                    : e.length) || 0
                );
              },
              onSuccess: function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                p(!1), e.onSuccess && e.onSuccess.apply(e, N(t));
              },
            }),
          ),
          h = d.data,
          v = d.run,
          y = d.params,
          g = d.reset,
          m = d.loading,
          b = d.fetches,
          w = (0, r.useCallback)(
            function () {
              g();
              var t = z(y),
                e = t.slice(1);
              v.apply(void 0, N([void 0], e));
            },
            [v, g, y],
          ),
          j = (0, r.useRef)(w);
        (j.current = w),
          O(function () {
            e.manual || j.current();
          }, N(o));
        var S = (0, r.useMemo)(
            function () {
              var t = [],
                e = h;
              return (
                Object.values(b).forEach(function (n) {
                  var r, o;
                  (null === (r = n.data) || void 0 === r ? void 0 : r.list) &&
                    (t = t.concat(
                      null === (o = n.data) || void 0 === o ? void 0 : o.list,
                    )),
                    n.loading || (e = n.data);
                }),
                K(K({}, e), { list: t })
              );
            },
            [b, h],
          ),
          E = !!u && !m && !s && u(S),
          T = (0, r.useCallback)(
            function () {
              if (!E) {
                p(!0);
                var t = z(y),
                  e = t.slice(1);
                v.apply(void 0, N([S], e));
              }
            },
            [E, v, S, y],
          ),
          _ = function () {
            !m &&
              !s &&
              i &&
              i.current &&
              i.current.scrollHeight - i.current.scrollTop <=
                i.current.clientHeight + c &&
              T();
          },
          R = (0, r.useRef)(_);
        return (
          (R.current = _),
          (0, r.useEffect)(
            function () {
              if (!i || !i.current) return function () {};
              var t = function () {
                return R.current();
              };
              return (
                i.current.addEventListener('scroll', t),
                function () {
                  i && i.current && i.current.removeEventListener('scroll', t);
                }
              );
            },
            [R],
          ),
          K(K({}, d), {
            data: S,
            reload: w,
            loading: m && 0 === S.list.length,
            loadMore: T,
            loadingMore: s,
            noMore: E,
          })
        );
      }
      var A = U,
        V = function () {
          return (
            (V =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in ((e = arguments[n]), e))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            V.apply(this, arguments)
          );
        },
        H = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        },
        Y = function (t, e) {
          var n = 'function' === typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            u = [];
          try {
            while ((void 0 === e || e-- > 0) && !(r = i.next()).done)
              u.push(r.value);
          } catch (a) {
            o = { error: a };
          } finally {
            try {
              r && !r.done && (n = i['return']) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return u;
        },
        B = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(Y(arguments[e]));
          return t;
        };
      function Q(t, e) {
        e.paginated;
        var n = e.defaultPageSize,
          o = void 0 === n ? 10 : n,
          i = e.refreshDeps,
          u = void 0 === i ? [] : i,
          a = e.fetchKey,
          c = H(e, ['paginated', 'defaultPageSize', 'refreshDeps', 'fetchKey']);
        (0, r.useEffect)(function () {
          a && console.error("useRequest pagination's fetchKey will not work!");
        }, []);
        var f = L(t, V({ defaultParams: [{ current: 1, pageSize: o }] }, c)),
          l = f.data,
          s = f.params,
          p = f.run,
          d = f.loading,
          h = H(f, ['data', 'params', 'run', 'loading']),
          v = s && s[0] ? s[0] : {},
          y = v.current,
          g = void 0 === y ? 1 : y,
          m = v.pageSize,
          b = void 0 === m ? o : m,
          w = v.sorter,
          j = void 0 === w ? {} : w,
          S = v.filters,
          E = void 0 === S ? {} : S,
          T = (0, r.useCallback)(
            function (t) {
              var e = Y(s),
                n = e[0],
                r = e.slice(1);
              p.apply(void 0, B([V(V({}, n), t)], r));
            },
            [p, s],
          ),
          _ = (null === l || void 0 === l ? void 0 : l.total) || 0,
          R = (0, r.useMemo)(
            function () {
              return Math.ceil(_ / b);
            },
            [b, _],
          ),
          P = (0, r.useCallback)(
            function (t, e) {
              var n = t <= 0 ? 1 : t,
                r = e <= 0 ? 1 : e,
                o = Math.ceil(_ / r);
              n > o && (n = Math.max(1, o)), T({ current: n, pageSize: r });
            },
            [_, T],
          ),
          k = (0, r.useCallback)(
            function (t) {
              P(t, b);
            },
            [P, b],
          ),
          x = (0, r.useCallback)(
            function (t) {
              P(g, t);
            },
            [P, g],
          ),
          C = (0, r.useRef)(k);
        (C.current = k),
          O(function () {
            e.manual || C.current(1);
          }, B(u));
        var $ = (0, r.useCallback)(
          function (t, e, n) {
            T({
              current: t.current,
              pageSize: t.pageSize || o,
              filters: e,
              sorter: n,
            });
          },
          [E, j, T],
        );
        return V(
          {
            loading: d,
            data: l,
            params: s,
            run: p,
            pagination: {
              current: g,
              pageSize: b,
              total: _,
              totalPage: R,
              onChange: P,
              changeCurrent: k,
              changePageSize: x,
            },
            tableProps: {
              dataSource: (null === l || void 0 === l ? void 0 : l.list) || [],
              loading: d,
              onChange: $,
              pagination: { current: g, pageSize: b, total: _ },
            },
            sorter: j,
            filters: E,
          },
          h,
        );
      }
      var Z = Q,
        G = r.createContext({});
      G.displayName = 'UseRequestConfigContext';
      var J = G,
        X = function () {
          return (
            (X =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in ((e = arguments[n]), e))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            X.apply(this, arguments)
          );
        },
        tt = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        },
        et = function (t, e) {
          var n = 'function' === typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            u = [];
          try {
            while ((void 0 === e || e-- > 0) && !(r = i.next()).done)
              u.push(r.value);
          } catch (a) {
            o = { error: a };
          } finally {
            try {
              r && !r.done && (n = i['return']) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return u;
        },
        nt = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(et(arguments[e]));
          return t;
        };
      function rt(t, e) {
        void 0 === e && (e = {});
        var n = (0, r.useContext)(J),
          o = X(X({}, n), e),
          i = o.paginated,
          u = o.loadMore,
          a = o.requestMethod,
          c = (0, r.useRef)(i),
          f = (0, r.useRef)(u);
        if (c.current !== i)
          throw Error('You should not modify the paginated of options');
        if (f.current !== u)
          throw Error('You should not modify the loadMore of options');
        (c.current = i), (f.current = u);
        var l,
          s = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return fetch.apply(void 0, nt(t)).then(function (t) {
              if (t.ok) return t.json();
              throw new Error(t.statusText);
            });
          },
          p = a || s;
        switch (typeof t) {
          case 'string':
            l = function () {
              return p(t);
            };
            break;
          case 'object':
            var d = t.url,
              h = tt(t, ['url']);
            l = function () {
              return a ? a(t) : s(d, h);
            };
            break;
          default:
            l = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new Promise(function (n, r) {
                var o = t.apply(void 0, nt(e)),
                  i = o;
                if (!o.then)
                  switch (typeof o) {
                    case 'string':
                      i = p(o);
                      break;
                    case 'object':
                      var u = o.url,
                        c = tt(o, ['url']);
                      i = a ? a(o) : s(u, c);
                      break;
                  }
                i.then(n)['catch'](r);
              });
            };
        }
        return u ? A(l, o) : i ? Z(l, o) : L(l, o);
      }
      var ot = J.Provider,
        it = ot,
        ut = rt;
    },
    91296: function (t, e, n) {
      var r = 'Expected a function',
        o = NaN,
        i = '[object Symbol]',
        u = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        l = parseInt,
        s = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
        p = 'object' == typeof self && self && self.Object === Object && self,
        d = s || p || Function('return this')(),
        h = Object.prototype,
        v = h.toString,
        y = Math.max,
        g = Math.min,
        m = function () {
          return d.Date.now();
        };
      function b(t, e, n) {
        var o,
          i,
          u,
          a,
          c,
          f,
          l = 0,
          s = !1,
          p = !1,
          d = !0;
        if ('function' != typeof t) throw new TypeError(r);
        function h(e) {
          var n = o,
            r = i;
          return (o = i = void 0), (l = e), (a = t.apply(r, n)), a;
        }
        function v(t) {
          return (l = t), (c = setTimeout(j, e)), s ? h(t) : a;
        }
        function b(t) {
          var n = t - f,
            r = t - l,
            o = e - n;
          return p ? g(o, u - r) : o;
        }
        function O(t) {
          var n = t - f,
            r = t - l;
          return void 0 === f || n >= e || n < 0 || (p && r >= u);
        }
        function j() {
          var t = m();
          if (O(t)) return E(t);
          c = setTimeout(j, b(t));
        }
        function E(t) {
          return (c = void 0), d && o ? h(t) : ((o = i = void 0), a);
        }
        function T() {
          void 0 !== c && clearTimeout(c), (l = 0), (o = f = i = c = void 0);
        }
        function _() {
          return void 0 === c ? a : E(m());
        }
        function R() {
          var t = m(),
            n = O(t);
          if (((o = arguments), (i = this), (f = t), n)) {
            if (void 0 === c) return v(f);
            if (p) return (c = setTimeout(j, e)), h(f);
          }
          return void 0 === c && (c = setTimeout(j, e)), a;
        }
        return (
          (e = S(e) || 0),
          w(n) &&
            ((s = !!n.leading),
            (p = 'maxWait' in n),
            (u = p ? y(S(n.maxWait) || 0, e) : u),
            (d = 'trailing' in n ? !!n.trailing : d)),
          (R.cancel = T),
          (R.flush = _),
          R
        );
      }
      function w(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e);
      }
      function O(t) {
        return !!t && 'object' == typeof t;
      }
      function j(t) {
        return 'symbol' == typeof t || (O(t) && v.call(t) == i);
      }
      function S(t) {
        if ('number' == typeof t) return t;
        if (j(t)) return o;
        if (w(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = w(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(u, '');
        var n = c.test(t);
        return n || f.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? o : +t;
      }
      t.exports = b;
    },
    93096: function (t, e, n) {
      var r = 'Expected a function',
        o = NaN,
        i = '[object Symbol]',
        u = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        l = parseInt,
        s = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
        p = 'object' == typeof self && self && self.Object === Object && self,
        d = s || p || Function('return this')(),
        h = Object.prototype,
        v = h.toString,
        y = Math.max,
        g = Math.min,
        m = function () {
          return d.Date.now();
        };
      function b(t, e, n) {
        var o,
          i,
          u,
          a,
          c,
          f,
          l = 0,
          s = !1,
          p = !1,
          d = !0;
        if ('function' != typeof t) throw new TypeError(r);
        function h(e) {
          var n = o,
            r = i;
          return (o = i = void 0), (l = e), (a = t.apply(r, n)), a;
        }
        function v(t) {
          return (l = t), (c = setTimeout(j, e)), s ? h(t) : a;
        }
        function b(t) {
          var n = t - f,
            r = t - l,
            o = e - n;
          return p ? g(o, u - r) : o;
        }
        function w(t) {
          var n = t - f,
            r = t - l;
          return void 0 === f || n >= e || n < 0 || (p && r >= u);
        }
        function j() {
          var t = m();
          if (w(t)) return S(t);
          c = setTimeout(j, b(t));
        }
        function S(t) {
          return (c = void 0), d && o ? h(t) : ((o = i = void 0), a);
        }
        function T() {
          void 0 !== c && clearTimeout(c), (l = 0), (o = f = i = c = void 0);
        }
        function _() {
          return void 0 === c ? a : S(m());
        }
        function R() {
          var t = m(),
            n = w(t);
          if (((o = arguments), (i = this), (f = t), n)) {
            if (void 0 === c) return v(f);
            if (p) return (c = setTimeout(j, e)), h(f);
          }
          return void 0 === c && (c = setTimeout(j, e)), a;
        }
        return (
          (e = E(e) || 0),
          O(n) &&
            ((s = !!n.leading),
            (p = 'maxWait' in n),
            (u = p ? y(E(n.maxWait) || 0, e) : u),
            (d = 'trailing' in n ? !!n.trailing : d)),
          (R.cancel = T),
          (R.flush = _),
          R
        );
      }
      function w(t, e, n) {
        var o = !0,
          i = !0;
        if ('function' != typeof t) throw new TypeError(r);
        return (
          O(n) &&
            ((o = 'leading' in n ? !!n.leading : o),
            (i = 'trailing' in n ? !!n.trailing : i)),
          b(t, e, { leading: o, maxWait: e, trailing: i })
        );
      }
      function O(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e);
      }
      function j(t) {
        return !!t && 'object' == typeof t;
      }
      function S(t) {
        return 'symbol' == typeof t || (j(t) && v.call(t) == i);
      }
      function E(t) {
        if ('number' == typeof t) return t;
        if (S(t)) return o;
        if (O(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = O(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(u, '');
        var n = c.test(t);
        return n || f.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? o : +t;
      }
      t.exports = w;
    },
    27418: function (t) {
      'use strict';
      var e = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      function o(t) {
        if (null === t || void 0 === t)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined',
          );
        return Object(t);
      }
      function i() {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc');
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, n = 0; n < 10; n++)
            e['_' + String.fromCharCode(n)] = n;
          var r = Object.getOwnPropertyNames(e).map(function (t) {
            return e[t];
          });
          if ('0123456789' !== r.join('')) return !1;
          var o = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (t) {
              o[t] = t;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, o)).join('')
          );
        } catch (i) {
          return !1;
        }
      }
      t.exports = i()
        ? Object.assign
        : function (t, i) {
            for (var u, a, c = o(t), f = 1; f < arguments.length; f++) {
              for (var l in ((u = Object(arguments[f])), u))
                n.call(u, l) && (c[l] = u[l]);
              if (e) {
                a = e(u);
                for (var s = 0; s < a.length; s++)
                  r.call(u, a[s]) && (c[a[s]] = u[a[s]]);
              }
            }
            return c;
          };
    },
    72408: function (t, e, n) {
      'use strict';
      var r = n(27418),
        o = 60103,
        i = 60106;
      (e.Fragment = 60107), (e.StrictMode = 60108), (e.Profiler = 60114);
      var u = 60109,
        a = 60110,
        c = 60112;
      e.Suspense = 60113;
      var f = 60115,
        l = 60116;
      if ('function' === typeof Symbol && Symbol.for) {
        var s = Symbol.for;
        (o = s('react.element')),
          (i = s('react.portal')),
          (e.Fragment = s('react.fragment')),
          (e.StrictMode = s('react.strict_mode')),
          (e.Profiler = s('react.profiler')),
          (u = s('react.provider')),
          (a = s('react.context')),
          (c = s('react.forward_ref')),
          (e.Suspense = s('react.suspense')),
          (f = s('react.memo')),
          (l = s('react.lazy'));
      }
      var p = 'function' === typeof Symbol && Symbol.iterator;
      function d(t) {
        return null === t || 'object' !== typeof t
          ? null
          : ((t = (p && t[p]) || t['@@iterator']),
            'function' === typeof t ? t : null);
      }
      function h(t) {
        for (
          var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
            n = 1;
          n < arguments.length;
          n++
        )
          e += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          t +
          '; visit ' +
          e +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        y = {};
      function g(t, e, n) {
        (this.props = t),
          (this.context = e),
          (this.refs = y),
          (this.updater = n || v);
      }
      function m() {}
      function b(t, e, n) {
        (this.props = t),
          (this.context = e),
          (this.refs = y),
          (this.updater = n || v);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (t, e) {
          if ('object' !== typeof t && 'function' !== typeof t && null != t)
            throw Error(h(85));
          this.updater.enqueueSetState(this, t, e, 'setState');
        }),
        (g.prototype.forceUpdate = function (t) {
          this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
        }),
        (m.prototype = g.prototype);
      var w = (b.prototype = new m());
      (w.constructor = b), r(w, g.prototype), (w.isPureReactComponent = !0);
      var O = { current: null },
        j = Object.prototype.hasOwnProperty,
        S = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(t, e, n) {
        var r,
          i = {},
          u = null,
          a = null;
        if (null != e)
          for (r in (void 0 !== e.ref && (a = e.ref),
          void 0 !== e.key && (u = '' + e.key),
          e))
            j.call(e, r) && !S.hasOwnProperty(r) && (i[r] = e[r]);
        var c = arguments.length - 2;
        if (1 === c) i.children = n;
        else if (1 < c) {
          for (var f = Array(c), l = 0; l < c; l++) f[l] = arguments[l + 2];
          i.children = f;
        }
        if (t && t.defaultProps)
          for (r in ((c = t.defaultProps), c)) void 0 === i[r] && (i[r] = c[r]);
        return {
          $$typeof: o,
          type: t,
          key: u,
          ref: a,
          props: i,
          _owner: O.current,
        };
      }
      function T(t, e) {
        return {
          $$typeof: o,
          type: t.type,
          key: e,
          ref: t.ref,
          props: t.props,
          _owner: t._owner,
        };
      }
      function _(t) {
        return 'object' === typeof t && null !== t && t.$$typeof === o;
      }
      function R(t) {
        var e = { '=': '=0', ':': '=2' };
        return (
          '$' +
          t.replace(/[=:]/g, function (t) {
            return e[t];
          })
        );
      }
      var P = /\/+/g;
      function k(t, e) {
        return 'object' === typeof t && null !== t && null != t.key
          ? R('' + t.key)
          : e.toString(36);
      }
      function x(t, e, n, r, u) {
        var a = typeof t;
        ('undefined' !== a && 'boolean' !== a) || (t = null);
        var c = !1;
        if (null === t) c = !0;
        else
          switch (a) {
            case 'string':
            case 'number':
              c = !0;
              break;
            case 'object':
              switch (t.$$typeof) {
                case o:
                case i:
                  c = !0;
              }
          }
        if (c)
          return (
            (c = t),
            (u = u(c)),
            (t = '' === r ? '.' + k(c, 0) : r),
            Array.isArray(u)
              ? ((n = ''),
                null != t && (n = t.replace(P, '$&/') + '/'),
                x(u, e, n, '', function (t) {
                  return t;
                }))
              : null != u &&
                (_(u) &&
                  (u = T(
                    u,
                    n +
                      (!u.key || (c && c.key === u.key)
                        ? ''
                        : ('' + u.key).replace(P, '$&/') + '/') +
                      t,
                  )),
                e.push(u)),
            1
          );
        if (((c = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(t)))
          for (var f = 0; f < t.length; f++) {
            a = t[f];
            var l = r + k(a, f);
            c += x(a, e, n, l, u);
          }
        else if (((l = d(t)), 'function' === typeof l))
          for (t = l.call(t), f = 0; !(a = t.next()).done; )
            (a = a.value), (l = r + k(a, f++)), (c += x(a, e, n, l, u));
        else if ('object' === a)
          throw (
            ((e = '' + t),
            Error(
              h(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          );
        return c;
      }
      function C(t, e, n) {
        if (null == t) return t;
        var r = [],
          o = 0;
        return (
          x(t, r, '', '', function (t) {
            return e.call(n, t, o++);
          }),
          r
        );
      }
      function $(t) {
        if (-1 === t._status) {
          var e = t._result;
          (e = e()),
            (t._status = 0),
            (t._result = e),
            e.then(
              function (e) {
                0 === t._status &&
                  ((e = e.default), (t._status = 1), (t._result = e));
              },
              function (e) {
                0 === t._status && ((t._status = 2), (t._result = e));
              },
            );
        }
        if (1 === t._status) return t._result;
        throw t._result;
      }
      var D = { current: null };
      function I() {
        var t = D.current;
        if (null === t) throw Error(h(321));
        return t;
      }
      var M = {
        ReactCurrentDispatcher: D,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: O,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (e.Children = {
        map: C,
        forEach: function (t, e, n) {
          C(
            t,
            function () {
              e.apply(this, arguments);
            },
            n,
          );
        },
        count: function (t) {
          var e = 0;
          return (
            C(t, function () {
              e++;
            }),
            e
          );
        },
        toArray: function (t) {
          return (
            C(t, function (t) {
              return t;
            }) || []
          );
        },
        only: function (t) {
          if (!_(t)) throw Error(h(143));
          return t;
        },
      }),
        (e.Component = g),
        (e.PureComponent = b),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
        (e.cloneElement = function (t, e, n) {
          if (null === t || void 0 === t) throw Error(h(267, t));
          var i = r({}, t.props),
            u = t.key,
            a = t.ref,
            c = t._owner;
          if (null != e) {
            if (
              (void 0 !== e.ref && ((a = e.ref), (c = O.current)),
              void 0 !== e.key && (u = '' + e.key),
              t.type && t.type.defaultProps)
            )
              var f = t.type.defaultProps;
            for (l in e)
              j.call(e, l) &&
                !S.hasOwnProperty(l) &&
                (i[l] = void 0 === e[l] && void 0 !== f ? f[l] : e[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) i.children = n;
          else if (1 < l) {
            f = Array(l);
            for (var s = 0; s < l; s++) f[s] = arguments[s + 2];
            i.children = f;
          }
          return {
            $$typeof: o,
            type: t.type,
            key: u,
            ref: a,
            props: i,
            _owner: c,
          };
        }),
        (e.createContext = function (t, e) {
          return (
            void 0 === e && (e = null),
            (t = {
              $$typeof: a,
              _calculateChangedBits: e,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }),
            (t.Provider = { $$typeof: u, _context: t }),
            (t.Consumer = t)
          );
        }),
        (e.createElement = E),
        (e.createFactory = function (t) {
          var e = E.bind(null, t);
          return (e.type = t), e;
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (t) {
          return { $$typeof: c, render: t };
        }),
        (e.isValidElement = _),
        (e.lazy = function (t) {
          return {
            $$typeof: l,
            _payload: { _status: -1, _result: t },
            _init: $,
          };
        }),
        (e.memo = function (t, e) {
          return { $$typeof: f, type: t, compare: void 0 === e ? null : e };
        }),
        (e.useCallback = function (t, e) {
          return I().useCallback(t, e);
        }),
        (e.useContext = function (t, e) {
          return I().useContext(t, e);
        }),
        (e.useDebugValue = function () {}),
        (e.useEffect = function (t, e) {
          return I().useEffect(t, e);
        }),
        (e.useImperativeHandle = function (t, e, n) {
          return I().useImperativeHandle(t, e, n);
        }),
        (e.useLayoutEffect = function (t, e) {
          return I().useLayoutEffect(t, e);
        }),
        (e.useMemo = function (t, e) {
          return I().useMemo(t, e);
        }),
        (e.useReducer = function (t, e, n) {
          return I().useReducer(t, e, n);
        }),
        (e.useRef = function (t) {
          return I().useRef(t);
        }),
        (e.useState = function (t) {
          return I().useState(t);
        }),
        (e.version = '17.0.2');
    },
    67294: function (t, e, n) {
      'use strict';
      t.exports = n(72408);
    },
  },
]);
