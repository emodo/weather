(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_254'],
  {
    40254: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return y;
          },
        });
      var n = r(28991),
        o = r(6610),
        u = r(5991),
        a = r(10379),
        i = r(54070),
        c = r(67294),
        f = r(42148),
        s = (function (e) {
          (0, a.Z)(r, e);
          var t = (0, i.Z)(r);
          function r(e) {
            var n;
            return (
              (0, o.Z)(this, r),
              (n = t.call(this, e)),
              (n.state = { hasError: !1 }),
              n
            );
          }
          return (
            (0, u.Z)(
              r,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    console.error('\u56fe\u8868\u6e32\u67d3\u5931\u8d25: ', e);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    if (this.state.hasError) {
                      var e = this.props.fallback;
                      return e || null;
                    }
                    return this.props.children || null;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ],
            ),
            r
          );
        })(c.Component),
        l = (function (e) {
          (0, a.Z)(r, e);
          var t = (0, i.Z)(r);
          function r(e) {
            var n;
            (0, o.Z)(this, r), (n = t.call(this, e));
            var u = e.canvasRef;
            return (n.canvasRef = u || c.createRef()), n;
          }
          return (
            (0, u.Z)(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.canvasRef,
                    t = this.props,
                    r = e.current,
                    o = r.getContext('2d'),
                    u = new f.Z(
                      (0, n.Z)(
                        (0, n.Z)({ pixelRatio: 1 }, t),
                        {},
                        { context: o },
                      ),
                    );
                  (this.canvas = u), u.render();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this.canvas,
                    t = this.props;
                  e.update(t);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.className,
                    r = void 0 === t ? '' : t;
                  return c.createElement('canvas', {
                    className: 'f2-chart '.concat(r),
                    ref: this.canvasRef,
                    style: {
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      padding: 0,
                      margin: 0,
                    },
                  });
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.canvas;
                  e.destroy();
                },
              },
            ]),
            r
          );
        })(c.Component),
        p = (0, c.forwardRef)(function (e, t) {
          var r = e.fallback;
          return c.createElement(s, {
            fallback: r,
            children: c.createElement(
              l,
              (0, n.Z)((0, n.Z)({}, e), {}, { ref: t }),
            ),
          });
        }),
        y = p;
    },
    27418: function (e) {
      'use strict';
      var t = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable;
      function o(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined',
          );
        return Object(e);
      }
      function u() {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, r = 0; r < 10; r++)
            t['_' + String.fromCharCode(r)] = r;
          var n = Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
          });
          if ('0123456789' !== n.join('')) return !1;
          var o = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              o[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, o)).join('')
          );
        } catch (u) {
          return !1;
        }
      }
      e.exports = u()
        ? Object.assign
        : function (e, u) {
            for (var a, i, c = o(e), f = 1; f < arguments.length; f++) {
              for (var s in ((a = Object(arguments[f])), a))
                r.call(a, s) && (c[s] = a[s]);
              if (t) {
                i = t(a);
                for (var l = 0; l < i.length; l++)
                  n.call(a, i[l]) && (c[i[l]] = a[i[l]]);
              }
            }
            return c;
          };
    },
    72408: function (e, t, r) {
      'use strict';
      var n = r(27418),
        o = 60103,
        u = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var a = 60109,
        i = 60110,
        c = 60112;
      t.Suspense = 60113;
      var f = 60115,
        s = 60116;
      if ('function' === typeof Symbol && Symbol.for) {
        var l = Symbol.for;
        (o = l('react.element')),
          (u = l('react.portal')),
          (t.Fragment = l('react.fragment')),
          (t.StrictMode = l('react.strict_mode')),
          (t.Profiler = l('react.profiler')),
          (a = l('react.provider')),
          (i = l('react.context')),
          (c = l('react.forward_ref')),
          (t.Suspense = l('react.suspense')),
          (f = l('react.memo')),
          (s = l('react.lazy'));
      }
      var p = 'function' === typeof Symbol && Symbol.iterator;
      function y(e) {
        return null === e || 'object' !== typeof e
          ? null
          : ((e = (p && e[p]) || e['@@iterator']),
            'function' === typeof e ? e : null);
      }
      function d(e) {
        for (
          var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            r = 1;
          r < arguments.length;
          r++
        )
          t += '&args[]=' + encodeURIComponent(arguments[r]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
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
        h = {};
      function m(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = r || v);
      }
      function b() {}
      function _(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = r || v);
      }
      (m.prototype.isReactComponent = {}),
        (m.prototype.setState = function (e, t) {
          if ('object' !== typeof e && 'function' !== typeof e && null != e)
            throw Error(d(85));
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (m.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (b.prototype = m.prototype);
      var g = (_.prototype = new b());
      (g.constructor = _), n(g, m.prototype), (g.isPureReactComponent = !0);
      var k = { current: null },
        w = Object.prototype.hasOwnProperty,
        j = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(e, t, r) {
        var n,
          u = {},
          a = null,
          i = null;
        if (null != t)
          for (n in (void 0 !== t.ref && (i = t.ref),
          void 0 !== t.key && (a = '' + t.key),
          t))
            w.call(t, n) && !j.hasOwnProperty(n) && (u[n] = t[n]);
        var c = arguments.length - 2;
        if (1 === c) u.children = r;
        else if (1 < c) {
          for (var f = Array(c), s = 0; s < c; s++) f[s] = arguments[s + 2];
          u.children = f;
        }
        if (e && e.defaultProps)
          for (n in ((c = e.defaultProps), c)) void 0 === u[n] && (u[n] = c[n]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: i,
          props: u,
          _owner: k.current,
        };
      }
      function C(e, t) {
        return {
          $$typeof: o,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner,
        };
      }
      function O(e) {
        return 'object' === typeof e && null !== e && e.$$typeof === o;
      }
      function S(e) {
        var t = { '=': '=0', ':': '=2' };
        return (
          '$' +
          e.replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      }
      var R = /\/+/g;
      function $(e, t) {
        return 'object' === typeof e && null !== e && null != e.key
          ? S('' + e.key)
          : t.toString(36);
      }
      function P(e, t, r, n, a) {
        var i = typeof e;
        ('undefined' !== i && 'boolean' !== i) || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else
          switch (i) {
            case 'string':
            case 'number':
              c = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case o:
                case u:
                  c = !0;
              }
          }
        if (c)
          return (
            (c = e),
            (a = a(c)),
            (e = '' === n ? '.' + $(c, 0) : n),
            Array.isArray(a)
              ? ((r = ''),
                null != e && (r = e.replace(R, '$&/') + '/'),
                P(a, t, r, '', function (e) {
                  return e;
                }))
              : null != a &&
                (O(a) &&
                  (a = C(
                    a,
                    r +
                      (!a.key || (c && c.key === a.key)
                        ? ''
                        : ('' + a.key).replace(R, '$&/') + '/') +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((c = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(e)))
          for (var f = 0; f < e.length; f++) {
            i = e[f];
            var s = n + $(i, f);
            c += P(i, t, r, s, a);
          }
        else if (((s = y(e)), 'function' === typeof s))
          for (e = s.call(e), f = 0; !(i = e.next()).done; )
            (i = i.value), (s = n + $(i, f++)), (c += P(i, t, r, s, a));
        else if ('object' === i)
          throw (
            ((t = '' + e),
            Error(
              d(
                31,
                '[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t,
              ),
            ))
          );
        return c;
      }
      function x(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          P(e, n, '', '', function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function Z(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              },
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var A = { current: null };
      function U() {
        var e = A.current;
        if (null === e) throw Error(d(321));
        return e;
      }
      var D = {
        ReactCurrentDispatcher: A,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: k,
        IsSomeRendererActing: { current: !1 },
        assign: n,
      };
      (t.Children = {
        map: x,
        forEach: function (e, t, r) {
          x(
            e,
            function () {
              t.apply(this, arguments);
            },
            r,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            x(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            x(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e)) throw Error(d(143));
          return e;
        },
      }),
        (t.Component = m),
        (t.PureComponent = _),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (t.cloneElement = function (e, t, r) {
          if (null === e || void 0 === e) throw Error(d(267, e));
          var u = n({}, e.props),
            a = e.key,
            i = e.ref,
            c = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (c = k.current)),
              void 0 !== t.key && (a = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var f = e.type.defaultProps;
            for (s in t)
              w.call(t, s) &&
                !j.hasOwnProperty(s) &&
                (u[s] = void 0 === t[s] && void 0 !== f ? f[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) u.children = r;
          else if (1 < s) {
            f = Array(s);
            for (var l = 0; l < s; l++) f[l] = arguments[l + 2];
            u.children = f;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: a,
            ref: i,
            props: u,
            _owner: c,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            (e = {
              $$typeof: i,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }),
            (e.Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = E),
        (t.createFactory = function (e) {
          var t = E.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = O),
        (t.lazy = function (e) {
          return {
            $$typeof: s,
            _payload: { _status: -1, _result: e },
            _init: Z,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return U().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return U().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return U().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return U().useImperativeHandle(e, t, r);
        }),
        (t.useLayoutEffect = function (e, t) {
          return U().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return U().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return U().useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return U().useRef(e);
        }),
        (t.useState = function (e) {
          return U().useState(e);
        }),
        (t.version = '17.0.2');
    },
    67294: function (e, t, r) {
      'use strict';
      e.exports = r(72408);
    },
  },
]);
