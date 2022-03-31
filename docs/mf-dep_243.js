(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_243'],
  {
    5257: function (t, e, n) {
      var r = n(41674),
        i = (function () {
          var t = e.prototype;
          function e(t) {
            this._initDefaultCfg(), r(this, t);
          }
          return (
            (t._initDefaultCfg = function () {
              this.adjustNames = ['x', 'y'];
            }),
            (t.processAdjust = function () {}),
            e
          );
        })();
      t.exports = i;
    },
    77131: function (t, e, n) {
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var i = n(5257),
        a = n(23087),
        o = 0.5,
        u = 0.5,
        s = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          r(e, t);
          var n = e.prototype;
          return (
            (n._initDefaultCfg = function () {
              (this.marginRatio = o),
                (this.dodgeRatio = u),
                (this.adjustNames = ['x', 'y']);
            }),
            (n.getDodgeOffset = function (t, e, n) {
              var r = this,
                i = t.pre,
                a = t.next,
                o = a - i,
                u = (o * r.dodgeRatio) / n,
                s = r.marginRatio * u,
                l =
                  0.5 * (o - n * u - (n - 1) * s) +
                  ((e + 1) * u + e * s) -
                  0.5 * u -
                  0.5 * o;
              return (i + a) / 2 + l;
            }),
            (n.processAdjust = function (t) {
              var e = this,
                n = t.length,
                r = e.xField;
              a(t, function (t, i) {
                for (var a = 0, o = t.length; a < o; a++) {
                  var u = t[a],
                    s = u[r],
                    l = {
                      pre: 1 === o ? s - 1 : s - 0.5,
                      next: 1 === o ? s + 1 : s + 0.5,
                    },
                    c = e.getDodgeOffset(l, i, n);
                  u[r] = c;
                }
              });
            }),
            e
          );
        })(i);
      (i.Dodge = s), (t.exports = s);
    },
    9879: function (t, e, n) {
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var i = n(48709),
        a = n(12280),
        o = n(5257),
        u = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          r(e, t);
          var n = e.prototype;
          return (
            (n._initDefaultCfg = function () {
              (this.xField = null), (this.yField = null);
            }),
            (n.processAdjust = function (t) {
              this.processStack(t);
            }),
            (n.processStack = function (t) {
              var e = this,
                n = e.xField,
                r = e.yField,
                o = t.length,
                u = { positive: {}, negative: {} };
              e.reverseOrder && (t = t.slice(0).reverse());
              for (var s = 0; s < o; s++)
                for (var l = t[s], c = 0, h = l.length; c < h; c++) {
                  var f = l[c],
                    p = f[n] || 0,
                    v = f[r],
                    d = p.toString();
                  if (((v = i(v) ? v[1] : v), !a(v))) {
                    var y = v >= 0 ? 'positive' : 'negative';
                    u[y][d] || (u[y][d] = 0),
                      (f[r] = [u[y][d], v + u[y][d]]),
                      (u[y][d] += v);
                  }
                }
            }),
            e
          );
        })(o);
      (o.Stack = u), (t.exports = u);
    },
    24207: function (t, e, n) {
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var i = n(23087),
        a = n(67008),
        o = n(48709),
        u = { merge: n(58775) },
        s = n(5257),
        l = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          r(e, t);
          var n = e.prototype;
          return (
            (n._initDefaultCfg = function () {
              (this.xField = null),
                (this.yField = null),
                (this.cacheMax = null),
                (this.adjustNames = ['y']),
                (this.groupFields = null);
            }),
            (n._getMax = function (t) {
              var e = this,
                n = e.mergeData,
                r = a(n, function (e) {
                  var n = e[t];
                  return o(n) ? Math.max.apply(null, n) : n;
                }),
                i = r[t],
                u = o(i) ? Math.max.apply(null, i) : i;
              return u;
            }),
            (n._getXValuesMax = function () {
              var t = this,
                e = t.yField,
                n = t.xField,
                r = {},
                a = t.mergeData;
              return (
                i(a, function (t) {
                  var i = t[n],
                    a = t[e],
                    u = o(a) ? Math.max.apply(null, a) : a;
                  (r[i] = r[i] || 0), r[i] < u && (r[i] = u);
                }),
                r
              );
            }),
            (n.processAdjust = function (t) {
              var e = this,
                n = u.merge(t);
              (e.mergeData = n), e._processSymmetric(t), (e.mergeData = null);
            }),
            (n._processSymmetric = function (t) {
              var e,
                n = this,
                r = n.xField,
                a = n.yField,
                u = n._getMax(a),
                s = t[0][0];
              s && o(s[a]) && (e = n._getXValuesMax()),
                i(t, function (t) {
                  i(t, function (t) {
                    var n,
                      s = t[a];
                    if (o(s)) {
                      var l = t[r],
                        c = e[l];
                      n = (u - c) / 2;
                      var h = [];
                      i(s, function (t) {
                        h.push(n + t);
                      }),
                        (t[a] = h);
                    } else (n = (u - s) / 2), (t[a] = [n, s + n]);
                  });
                });
            }),
            e
          );
        })(s);
      (s.Symmetric = l), (t.exports = l);
    },
    58775: function (t) {
      var e = function (t) {
        for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
        return e;
      };
      t.exports = e;
    },
    23087: function (t, e, n) {
      var r = n(21944),
        i = n(48709),
        a = function (t, e) {
          if (t) {
            var n = void 0;
            if (i(t)) {
              for (var a = 0, o = t.length; a < o; a++)
                if (((n = e(t[a], a)), !1 === n)) break;
            } else if (r(t))
              for (var u in t)
                if (t.hasOwnProperty(u) && ((n = e(t[u], u)), !1 === n)) break;
          }
        };
      t.exports = a;
    },
    67008: function (t, e, n) {
      var r = n(48709),
        i = n(40865),
        a = n(23087),
        o = function (t, e) {
          if (r(t)) {
            var n = t[0],
              o = void 0;
            o = i(e) ? e(t[0]) : t[0][e];
            var u = void 0;
            return (
              a(t, function (t) {
                (u = i(e) ? e(t) : t[e]), u > o && ((n = t), (o = u));
              }),
              n
            );
          }
        };
      t.exports = o;
    },
    41674: function (t) {
      function e(t, e) {
        for (var n in e)
          e.hasOwnProperty(n) &&
            'constructor' !== n &&
            void 0 !== e[n] &&
            (t[n] = e[n]);
      }
      var n = function (t, n, r, i) {
        return n && e(t, n), r && e(t, r), i && e(t, i), t;
      };
      t.exports = n;
    },
    48709: function (t, e, n) {
      var r = n(28232),
        i = Array.isArray
          ? Array.isArray
          : function (t) {
              return r(t, 'Array');
            };
      t.exports = i;
    },
    40865: function (t, e, n) {
      var r = n(28232),
        i = function (t) {
          return r(t, 'Function');
        };
      t.exports = i;
    },
    12280: function (t) {
      var e = function (t) {
        return null === t || void 0 === t;
      };
      t.exports = e;
    },
    21944: function (t) {
      var e =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        n = function (t) {
          var n = 'undefined' === typeof t ? 'undefined' : e(t);
          return (null !== t && 'object' === n) || 'function' === n;
        };
      t.exports = n;
    },
    28232: function (t) {
      var e = {}.toString,
        n = function (t, n) {
          return e.call(t) === '[object ' + n + ']';
        };
      t.exports = n;
    },
    73243: function (t, e, n) {
      'use strict';
      n.d(e, {
        MG: function () {
          return ii;
        },
        uN: function () {
          return hr;
        },
        YX: function () {
          return cr;
        },
        RD: function () {
          return Nr;
        },
        l7: function () {
          return Rr;
        },
        Xz: function () {
          return g.Z;
        },
        kL: function () {
          return vn;
        },
        hu: function () {
          return s.Z;
        },
        wA: function () {
          return l.Z;
        },
        aC: function () {
          return Da;
        },
        AN: function () {
          return _a;
        },
        ZX: function () {
          return Qn;
        },
        fD: function () {
          return si;
        },
        Q8: function () {
          return oi;
        },
        Xp: function () {
          return Mr;
        },
        he: function () {
          return xr;
        },
        De: function () {
          return zr;
        },
        Sl: function () {
          return Br;
        },
        x1: function () {
          return or;
        },
        V0: function () {
          return ri;
        },
        y3: function () {
          return ar;
        },
        dG: function () {
          return Sa;
        },
        wN: function () {
          return Za;
        },
        E9: function () {
          return wr;
        },
        ZY: function () {
          return ni;
        },
        rG: function () {
          return Sr;
        },
        $o: function () {
          return ai;
        },
        Bl: function () {
          return Fa;
        },
        ky: function () {
          return Ha;
        },
        qu: function () {
          return ha;
        },
        pX: function () {
          return sa;
        },
        KX: function () {
          return ui;
        },
        U4: function () {
          return ei;
        },
        TY: function () {
          return y;
        },
        u: function () {
          return yi;
        },
        Xf: function () {
          return di;
        },
        WB: function () {
          return ia;
        },
        zE: function () {
          return ra;
        },
        LG: function () {
          return ja;
        },
        az: function () {
          return gn;
        },
        Vf: function () {
          return hi;
        },
        tZ: function () {
          return gn;
        },
        sY: function () {
          return Ua.Z;
        },
        vq: function () {
          return xn.vq;
        },
        $d: function () {
          return ur;
        },
        Ny: function () {
          return br;
        },
        iv: function () {
          return Ca;
        },
        He: function () {
          return Hr;
        },
        nP: function () {
          return dr;
        },
        DN: function () {
          return Er;
        },
        Kx: function () {
          return tr;
        },
        hO: function () {
          return Ma;
        },
        it: function () {
          return Zr;
        },
        UK: function () {
          return Ba;
        },
        ie: function () {
          return ua;
        },
        TC: function () {
          return li;
        },
        cG: function () {
          return na;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          assign: function () {
            return it;
          },
          default: function () {
            return Ct;
          },
          defaultI18n: function () {
            return lt;
          },
          format: function () {
            return St;
          },
          parse: function () {
            return wt;
          },
          setGlobalDateI18n: function () {
            return ht;
          },
          setGlobalDateMasks: function () {
            return Zt;
          },
        });
      var i = {};
      n.r(i),
        n.d(i, {
          Dodge: function () {
            return Dn;
          },
          Stack: function () {
            return bn;
          },
          Symmetric: function () {
            return An;
          },
        });
      var a = {};
      n.r(a),
        n.d(a, {
          Attr: function () {
            return In;
          },
          Category: function () {
            return Bn;
          },
          Identity: function () {
            return Ln;
          },
          Linear: function () {
            return En;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          funnel: function () {
            return vr;
          },
          pyramid: function () {
            return vr;
          },
        });
      var u = {};
      n.r(u),
        n.d(u, {
          funnel: function () {
            return kr;
          },
          pyramid: function () {
            return kr;
          },
          rect: function () {
            return xr;
          },
        });
      var s = n(98999),
        l = n(42381),
        c = n(6610),
        h = n(5991),
        f = n(63349),
        p = n(10379),
        v = n(54070),
        d = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t) {
            var r;
            (0, c.Z)(this, n),
              (r = e.call(this, t)),
              (r.next = function () {
                var t = (0, f.Z)(r),
                  e = t.state,
                  n = t.props,
                  i = e.index,
                  a = e.count,
                  o = e.delay,
                  u = n.loop,
                  s = u ? (i + 1) % a : i + 1;
                s < a &&
                  setTimeout(function () {
                    r.setState({ index: s });
                  }, o || 0);
              });
            var i = t.delay,
              a = t.start,
              o = void 0 === a ? 0 : a,
              u = t.children,
              l = s.Z.toArray(u).length;
            return (r.state = { delay: i, count: l, index: o }), r;
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'didMount',
                value: function () {
                  var t = this.context,
                    e = t.root;
                  e.on('animationEnd', this.next);
                },
              },
              {
                key: 'didUnmount',
                value: function () {
                  var t = this.context,
                    e = t.root;
                  e.off('animationEnd', this.next);
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.state,
                    e = this.props,
                    n = e.children,
                    r = t.index,
                    i = s.Z.toArray(n);
                  return i[r];
                },
              },
            ]),
            n
          );
        })(l.Z),
        y = d,
        g = n(42148),
        x = n(96156),
        m = n(28991),
        k = n(93487),
        M = n(97584),
        Z = n(28481),
        S = n(34374),
        w = (function () {
          function t() {
            (0, c.Z)(this, t);
          }
          return (
            (0, h.Z)(t, [
              {
                key: 'getRectRange',
                value: function (t) {
                  var e = t.left,
                    n = t.top,
                    r = t.width,
                    i = t.height,
                    a = t.padding,
                    o = (0, Z.Z)(a, 4),
                    u = o[0],
                    s = o[1],
                    l = o[2],
                    c = o[3];
                  return {
                    left: e + c,
                    top: n + u,
                    width: r - c - s,
                    height: i - u - l,
                  };
                },
              },
              {
                key: 'create',
                value: function (t) {
                  var e = this.getRectRange(t),
                    n = new S.Z(e);
                  return (this.layout = n), n;
                },
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this.getRectRange(t),
                    n = this.layout;
                  return n.update(e), n;
                },
              },
            ]),
            t
          );
        })(),
        b = w,
        C = n(66213),
        _ = n(77608);
      function D(t) {
        var e = t.xMin,
          n = t.xMax,
          r = t.yMin,
          i = t.yMax;
        return { xMin: r, xMax: i, yMin: e, yMax: n };
      }
      function T(t) {
        var e,
          n,
          r,
          i,
          a = t.x,
          o = t.y,
          u = t.size,
          s = t.y0;
        return (
          (0, k.kJ)(a)
            ? ((e = a[0]), (n = a[1]))
            : ((e = a - u / 2), (n = a + u / 2)),
          (0, k.kJ)(o)
            ? ((r = o[0]), (i = o[1]))
            : ((r = Math.min(s, o)), (i = Math.max(s, o))),
          { xMin: e, xMax: n, yMin: r, yMax: i }
        );
      }
      var Y = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t) {
            var r;
            return (
              (0, c.Z)(this, n),
              (r = e.call(this, t)),
              (r.transposed = !1),
              (r.x = [0, 1]),
              (r.y = [0, 1]),
              r.update(t),
              r
            );
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'update',
                value: function (t) {
                  (0, C.Z)((0, _.Z)(n.prototype), 'update', this).call(this, t);
                  var e = this.left,
                    r = this.top,
                    i = this.width,
                    a = this.height;
                  return (this.center = { x: e + i / 2, y: r + a / 2 }), this;
                },
              },
              {
                key: 'isCyclic',
                value: function () {
                  return !1;
                },
              },
              {
                key: '_zoomVal',
                value: function (t, e) {
                  return (0, k.kJ)(t)
                    ? t.map(function (t) {
                        return e(t);
                      })
                    : e(t);
                },
              },
              {
                key: 'convert',
                value: function (t) {
                  var e = this.transposed,
                    n = this.x,
                    r = this.y,
                    i = e ? 'y' : 'x',
                    a = e ? 'x' : 'y',
                    o = t[i],
                    u = t[a];
                  return o < 0 || o > 1 || u < 0 || u > 1
                    ? { x: NaN, y: NaN }
                    : {
                        x: this._zoomVal(t[i], function (t) {
                          return n[0] + (n[1] - n[0]) * t;
                        }),
                        y: this._zoomVal(t[a], function (t) {
                          return r[0] + (r[1] - r[0]) * t;
                        }),
                      };
                },
              },
              {
                key: 'invert',
                value: function (t) {
                  var e,
                    n = this.transposed,
                    r = this.x,
                    i = this.y,
                    a = n ? 'y' : 'x',
                    o = n ? 'x' : 'y';
                  return (
                    (e = {}),
                    (0, x.Z)(
                      e,
                      a,
                      this._zoomVal(t.x, function (t) {
                        return (t - r[0]) / (r[1] - r[0]);
                      }),
                    ),
                    (0, x.Z)(
                      e,
                      o,
                      this._zoomVal(t.y, function (t) {
                        return (t - i[0]) / (i[1] - i[0]);
                      }),
                    ),
                    e
                  );
                },
              },
              {
                key: 'convertPoint',
                value: function (t) {
                  return this.convert(t);
                },
              },
              {
                key: 'invertPoint',
                value: function (t) {
                  return this.invert(t);
                },
              },
              {
                key: 'convertRect',
                value: function (t) {
                  var e = this.x,
                    n = this.y,
                    r = this.transposed,
                    i = (0, Z.Z)(e, 2),
                    a = i[0],
                    o = i[1],
                    u = (0, Z.Z)(n, 2),
                    s = u[0],
                    l = u[1],
                    c = T(t),
                    h = r ? D(c) : c,
                    f = h.xMin,
                    p = h.xMax,
                    v = h.yMin,
                    d = h.yMax,
                    y = a + (o - a) * f,
                    g = a + (o - a) * p,
                    x = s + (l - s) * v,
                    m = s + (l - s) * d;
                  return {
                    xMin: Math.min(y, g),
                    xMax: Math.max(y, g),
                    yMin: Math.min(x, m),
                    yMax: Math.max(x, m),
                  };
                },
              },
              {
                key: 'transformToRect',
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    r = t.y0,
                    i = t.size,
                    a = this.convertPoint({ x: 0, y: r }),
                    o = this.transposed,
                    u = {
                      size: i,
                      x: o ? n : e,
                      y: o ? e : n,
                      y0: o ? a.x : a.y,
                    },
                    s = T(u),
                    l = o ? D(s) : s,
                    c = l.xMin,
                    h = l.xMax,
                    f = l.yMin,
                    p = l.yMax;
                  return { xMin: c, xMax: h, yMin: f, yMax: p };
                },
              },
            ]),
            n
          );
        })(S.Z),
        A = Y,
        P = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n() {
            var t;
            return (
              (0, c.Z)(this, n),
              (t = e.apply(this, arguments)),
              (t.type = 'rect'),
              t
            );
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'update',
                value: function (t) {
                  (0, C.Z)((0, _.Z)(n.prototype), 'update', this).call(this, t);
                  var e = this.left,
                    r = this.top,
                    i = this.right,
                    a = this.bottom,
                    o = [e, i],
                    u = [a, r];
                  return (this.x = o), (this.y = u), this;
                },
              },
            ]),
            n
          );
        })(A),
        O = P,
        I = n(44093),
        R = n(96229),
        N = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n() {
            var t;
            return (
              (0, c.Z)(this, n),
              (t = e.apply(this, arguments)),
              (t.type = 'polar'),
              (t.isPolar = !0),
              t
            );
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'update',
                value: function (t) {
                  (0, C.Z)((0, _.Z)(n.prototype), 'update', this).call(this, t),
                    this.option || (this.option = t);
                  var e = this.option,
                    r = e.radius,
                    i = void 0 === r ? 1 : r,
                    a = e.innerRadius,
                    o = void 0 === a ? 0 : a,
                    u = this.width,
                    s = this.height,
                    l = this.startAngle,
                    c = void 0 === l ? -Math.PI / 2 : l,
                    h = this.endAngle,
                    f = void 0 === h ? (3 * Math.PI) / 2 : h,
                    p = i * (Math.min(u, s) / 2),
                    v = [c, f],
                    d = [o * p, p];
                  return (
                    (this.x = v),
                    (this.y = d),
                    (this.startAngle = c),
                    (this.endAngle = f),
                    (this.radius = p),
                    (this.innnerRadius = o * p),
                    this
                  );
                },
              },
              {
                key: 'isCyclic',
                value: function () {
                  var t = this.startAngle,
                    e = this.endAngle;
                  return !(e - t < 2 * Math.PI);
                },
              },
              {
                key: 'convertPoint',
                value: function (t) {
                  var e = this.center,
                    n = this.transposed,
                    r = this.x,
                    i = this.y,
                    a = n ? 'y' : 'x',
                    o = n ? 'x' : 'y',
                    u = (0, Z.Z)(r, 2),
                    s = u[0],
                    l = u[1],
                    c = (0, Z.Z)(i, 2),
                    h = c[0],
                    f = c[1],
                    p = s + (l - s) * t[a],
                    v = h + (f - h) * t[o];
                  return { x: e.x + Math.cos(p) * v, y: e.y + Math.sin(p) * v };
                },
              },
              {
                key: 'invertPoint',
                value: function (t) {
                  var e = this.center,
                    n = this.transposed,
                    r = this.x,
                    i = this.y,
                    a = n ? 'y' : 'x',
                    o = n ? 'x' : 'y',
                    u = (0, Z.Z)(r, 2),
                    s = u[0],
                    l = u[1],
                    c = (0, Z.Z)(i, 2),
                    h = c[0],
                    f = c[1],
                    p = [1, 0, 0, 1, 0, 0];
                  I.Z.rotate(p, p, s);
                  var v = [1, 0];
                  R.Z.transformMat2d(v, v, p), (v = [v[0], v[1]]);
                  var d = [t.x - e.x, t.y - e.y];
                  if (R.Z.zero(d)) return { x: 0, y: 0 };
                  var y = R.Z.angleTo(v, d, l < s);
                  Math.abs(y - 2 * Math.PI) < 0.001 && (y = 0);
                  var g = R.Z.length(d),
                    x = y / (l - s);
                  x = l - s > 0 ? x : -x;
                  var m = (g - h) / (f - h),
                    k = {};
                  return (k[a] = x), (k[o] = m), k;
                },
              },
            ]),
            n
          );
        })(A),
        E = N,
        j = { rect: O, polar: E },
        B = (function () {
          function t() {
            (0, c.Z)(this, t);
          }
          return (
            (0, h.Z)(t, [
              {
                key: 'getOption',
                value: function (t) {
                  if ((0, k.HD)(t)) return { type: j[t] || O };
                  if ((0, k.mf)(t)) return { type: t };
                  var e = t || {},
                    n = e.type;
                  return (0, m.Z)(
                    (0, m.Z)({}, t),
                    {},
                    { type: (0, k.mf)(n) ? n : j[n] || O },
                  );
                },
              },
              {
                key: 'create',
                value: function (t, e) {
                  var n = this.getOption(t),
                    r = n.type,
                    i = new r((0, m.Z)((0, m.Z)({}, n), e));
                  return (this.coord = i), i;
                },
              },
              {
                key: 'updateLayout',
                value: function (t) {
                  this.coord.update(t);
                },
              },
              { key: 'update', value: function () {} },
            ]),
            t
          );
        })(),
        z = B,
        L = {};
      function H(t) {
        return L[t];
      }
      function F(t, e) {
        L[t] = e;
      }
      var U = (function () {
          function t(t) {
            (this.type = 'base'),
              (this.isCategory = !1),
              (this.isLinear = !1),
              (this.isContinuous = !1),
              (this.isIdentity = !1),
              (this.values = []),
              (this.range = [0, 1]),
              (this.ticks = []),
              (this.__cfg__ = t),
              this.initCfg(),
              this.init();
          }
          return (
            (t.prototype.translate = function (t) {
              return t;
            }),
            (t.prototype.change = function (t) {
              (0, k.f0)(this.__cfg__, t), this.init();
            }),
            (t.prototype.clone = function () {
              return this.constructor(this.__cfg__);
            }),
            (t.prototype.getTicks = function () {
              var t = this;
              return (0, k.UI)(this.ticks, function (e, n) {
                return (0, k.Kn)(e)
                  ? e
                  : { text: t.getText(e, n), tickValue: e, value: t.scale(e) };
              });
            }),
            (t.prototype.getText = function (t, e) {
              var n = this.formatter,
                r = n ? n(t, e) : t;
              return (0, k.UM)(r) || !(0, k.mf)(r.toString) ? '' : r.toString();
            }),
            (t.prototype.getConfig = function (t) {
              return this.__cfg__[t];
            }),
            (t.prototype.init = function () {
              (0, k.f0)(this, this.__cfg__),
                this.setDomain(),
                (0, k.xb)(this.getConfig('ticks')) &&
                  (this.ticks = this.calculateTicks());
            }),
            (t.prototype.initCfg = function () {}),
            (t.prototype.setDomain = function () {}),
            (t.prototype.calculateTicks = function () {
              var t = this.tickMethod,
                e = [];
              if ((0, k.HD)(t)) {
                var n = H(t);
                if (!n)
                  throw new Error('There is no method to to calculate ticks!');
                e = n(this);
              } else (0, k.mf)(t) && (e = t(this));
              return e;
            }),
            (t.prototype.rangeMin = function () {
              return this.range[0];
            }),
            (t.prototype.rangeMax = function () {
              return this.range[1];
            }),
            (t.prototype.calcPercent = function (t, e, n) {
              return (0, k.hj)(t) ? (t - e) / (n - e) : NaN;
            }),
            (t.prototype.calcValue = function (t, e, n) {
              return e + t * (n - e);
            }),
            t
          );
        })(),
        X = U,
        V = n(70655),
        W = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'cat'), (e.isCategory = !0), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.buildIndexMap = function () {
              if (!this.translateIndexMap) {
                this.translateIndexMap = new Map();
                for (var t = 0; t < this.values.length; t++)
                  this.translateIndexMap.set(this.values[t], t);
              }
            }),
            (e.prototype.translate = function (t) {
              this.buildIndexMap();
              var e = this.translateIndexMap.get(t);
              return void 0 === e && (e = (0, k.hj)(t) ? t : NaN), e;
            }),
            (e.prototype.scale = function (t) {
              var e = this.translate(t),
                n = this.calcPercent(e, this.min, this.max);
              return this.calcValue(n, this.rangeMin(), this.rangeMax());
            }),
            (e.prototype.invert = function (t) {
              var e = this.max - this.min,
                n = this.calcPercent(t, this.rangeMin(), this.rangeMax()),
                r = Math.round(e * n) + this.min;
              return r < this.min || r > this.max ? NaN : this.values[r];
            }),
            (e.prototype.getText = function (e) {
              for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
              var i = e;
              return (
                (0, k.hj)(e) &&
                  !this.values.includes(e) &&
                  (i = this.values[i]),
                t.prototype.getText.apply(this, (0, V.pr)([i], n))
              );
            }),
            (e.prototype.initCfg = function () {
              this.tickMethod = 'cat';
            }),
            (e.prototype.setDomain = function () {
              if (
                ((0, k.UM)(this.getConfig('min')) && (this.min = 0),
                (0, k.UM)(this.getConfig('max')))
              ) {
                var t = this.values.length;
                this.max = t > 1 ? t - 1 : t;
              }
              this.translateIndexMap && (this.translateIndexMap = void 0);
            }),
            e
          );
        })(X),
        $ = W,
        q =
          /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        G = '[1-9]\\d?',
        J = '\\d\\d',
        K = '\\d{3}',
        Q = '\\d{4}',
        tt = '[^\\s]+',
        et = /\[([^]*?)\]/gm;
      function nt(t, e) {
        for (var n = [], r = 0, i = t.length; r < i; r++)
          n.push(t[r].substr(0, e));
        return n;
      }
      var rt = function (t) {
        return function (e, n) {
          var r = n[t].map(function (t) {
              return t.toLowerCase();
            }),
            i = r.indexOf(e.toLowerCase());
          return i > -1 ? i : null;
        };
      };
      function it(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) {
          var a = i[r];
          for (var o in a) t[o] = a[o];
        }
        return t;
      }
      var at = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        ot = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        ut = nt(ot, 3),
        st = nt(at, 3),
        lt = {
          dayNamesShort: st,
          dayNames: at,
          monthNamesShort: ut,
          monthNames: ot,
          amPm: ['am', 'pm'],
          DoFn: function (t) {
            return (
              t +
              ['th', 'st', 'nd', 'rd'][
                t % 10 > 3 ? 0 : ((t - (t % 10) !== 10 ? 1 : 0) * t) % 10
              ]
            );
          },
        },
        ct = it({}, lt),
        ht = function (t) {
          return (ct = it(ct, t));
        },
        ft = function (t) {
          return t.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
        },
        pt = function (t, e) {
          void 0 === e && (e = 2), (t = String(t));
          while (t.length < e) t = '0' + t;
          return t;
        },
        vt = {
          D: function (t) {
            return String(t.getDate());
          },
          DD: function (t) {
            return pt(t.getDate());
          },
          Do: function (t, e) {
            return e.DoFn(t.getDate());
          },
          d: function (t) {
            return String(t.getDay());
          },
          dd: function (t) {
            return pt(t.getDay());
          },
          ddd: function (t, e) {
            return e.dayNamesShort[t.getDay()];
          },
          dddd: function (t, e) {
            return e.dayNames[t.getDay()];
          },
          M: function (t) {
            return String(t.getMonth() + 1);
          },
          MM: function (t) {
            return pt(t.getMonth() + 1);
          },
          MMM: function (t, e) {
            return e.monthNamesShort[t.getMonth()];
          },
          MMMM: function (t, e) {
            return e.monthNames[t.getMonth()];
          },
          YY: function (t) {
            return pt(String(t.getFullYear()), 4).substr(2);
          },
          YYYY: function (t) {
            return pt(t.getFullYear(), 4);
          },
          h: function (t) {
            return String(t.getHours() % 12 || 12);
          },
          hh: function (t) {
            return pt(t.getHours() % 12 || 12);
          },
          H: function (t) {
            return String(t.getHours());
          },
          HH: function (t) {
            return pt(t.getHours());
          },
          m: function (t) {
            return String(t.getMinutes());
          },
          mm: function (t) {
            return pt(t.getMinutes());
          },
          s: function (t) {
            return String(t.getSeconds());
          },
          ss: function (t) {
            return pt(t.getSeconds());
          },
          S: function (t) {
            return String(Math.round(t.getMilliseconds() / 100));
          },
          SS: function (t) {
            return pt(Math.round(t.getMilliseconds() / 10), 2);
          },
          SSS: function (t) {
            return pt(t.getMilliseconds(), 3);
          },
          a: function (t, e) {
            return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
          },
          A: function (t, e) {
            return t.getHours() < 12
              ? e.amPm[0].toUpperCase()
              : e.amPm[1].toUpperCase();
          },
          ZZ: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? '-' : '+') +
              pt(100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60), 4)
            );
          },
          Z: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? '-' : '+') +
              pt(Math.floor(Math.abs(e) / 60), 2) +
              ':' +
              pt(Math.abs(e) % 60, 2)
            );
          },
        },
        dt = function (t) {
          return +t - 1;
        },
        yt = [null, G],
        gt = [null, tt],
        xt = [
          'isPm',
          tt,
          function (t, e) {
            var n = t.toLowerCase();
            return n === e.amPm[0] ? 0 : n === e.amPm[1] ? 1 : null;
          },
        ],
        mt = [
          'timezoneOffset',
          '[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?',
          function (t) {
            var e = (t + '').match(/([+-]|\d\d)/gi);
            if (e) {
              var n = 60 * +e[1] + parseInt(e[2], 10);
              return '+' === e[0] ? n : -n;
            }
            return 0;
          },
        ],
        kt = {
          D: ['day', G],
          DD: ['day', J],
          Do: [
            'day',
            G + tt,
            function (t) {
              return parseInt(t, 10);
            },
          ],
          M: ['month', G, dt],
          MM: ['month', J, dt],
          YY: [
            'year',
            J,
            function (t) {
              var e = new Date(),
                n = +('' + e.getFullYear()).substr(0, 2);
              return +('' + (+t > 68 ? n - 1 : n) + t);
            },
          ],
          h: ['hour', G, void 0, 'isPm'],
          hh: ['hour', J, void 0, 'isPm'],
          H: ['hour', G],
          HH: ['hour', J],
          m: ['minute', G],
          mm: ['minute', J],
          s: ['second', G],
          ss: ['second', J],
          YYYY: ['year', Q],
          S: [
            'millisecond',
            '\\d',
            function (t) {
              return 100 * +t;
            },
          ],
          SS: [
            'millisecond',
            J,
            function (t) {
              return 10 * +t;
            },
          ],
          SSS: ['millisecond', K],
          d: yt,
          dd: yt,
          ddd: gt,
          dddd: gt,
          MMM: ['month', tt, rt('monthNamesShort')],
          MMMM: ['month', tt, rt('monthNames')],
          a: xt,
          A: xt,
          ZZ: mt,
          Z: mt,
        },
        Mt = {
          default: 'ddd MMM DD YYYY HH:mm:ss',
          shortDate: 'M/D/YY',
          mediumDate: 'MMM D, YYYY',
          longDate: 'MMMM D, YYYY',
          fullDate: 'dddd, MMMM D, YYYY',
          isoDate: 'YYYY-MM-DD',
          isoDateTime: 'YYYY-MM-DDTHH:mm:ssZ',
          shortTime: 'HH:mm',
          mediumTime: 'HH:mm:ss',
          longTime: 'HH:mm:ss.SSS',
        },
        Zt = function (t) {
          return it(Mt, t);
        },
        St = function (t, e, n) {
          if (
            (void 0 === e && (e = Mt['default']),
            void 0 === n && (n = {}),
            'number' === typeof t && (t = new Date(t)),
            '[object Date]' !== Object.prototype.toString.call(t) ||
              isNaN(t.getTime()))
          )
            throw new Error('Invalid Date pass to format');
          e = Mt[e] || e;
          var r = [];
          e = e.replace(et, function (t, e) {
            return r.push(e), '@@@';
          });
          var i = it(it({}, ct), n);
          return (
            (e = e.replace(q, function (e) {
              return vt[e](t, i);
            })),
            e.replace(/@@@/g, function () {
              return r.shift();
            })
          );
        };
      function wt(t, e, n) {
        if ((void 0 === n && (n = {}), 'string' !== typeof e))
          throw new Error('Invalid format in fecha parse');
        if (((e = Mt[e] || e), t.length > 1e3)) return null;
        var r = new Date(),
          i = {
            year: r.getFullYear(),
            month: 0,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            isPm: null,
            timezoneOffset: null,
          },
          a = [],
          o = [],
          u = e.replace(et, function (t, e) {
            return o.push(ft(e)), '@@@';
          }),
          s = {},
          l = {};
        (u = ft(u).replace(q, function (t) {
          var e = kt[t],
            n = e[0],
            r = e[1],
            i = e[3];
          if (s[n])
            throw new Error(
              'Invalid format. ' + n + ' specified twice in format',
            );
          return (s[n] = !0), i && (l[i] = !0), a.push(e), '(' + r + ')';
        })),
          Object.keys(l).forEach(function (t) {
            if (!s[t])
              throw new Error(
                'Invalid format. ' + t + ' is required in specified format',
              );
          }),
          (u = u.replace(/@@@/g, function () {
            return o.shift();
          }));
        var c = t.match(new RegExp(u, 'i'));
        if (!c) return null;
        for (var h = it(it({}, ct), n), f = 1; f < c.length; f++) {
          var p = a[f - 1],
            v = p[0],
            d = p[2],
            y = d ? d(c[f], h) : +c[f];
          if (null == y) return null;
          i[v] = y;
        }
        1 === i.isPm && null != i.hour && 12 !== +i.hour
          ? (i.hour = +i.hour + 12)
          : 0 === i.isPm && 12 === +i.hour && (i.hour = 0);
        for (
          var g = new Date(
              i.year,
              i.month,
              i.day,
              i.hour,
              i.minute,
              i.second,
              i.millisecond,
            ),
            x = [
              ['month', 'getMonth'],
              ['day', 'getDate'],
              ['hour', 'getHours'],
              ['minute', 'getMinutes'],
              ['second', 'getSeconds'],
            ],
            m = ((f = 0), x.length);
          f < m;
          f++
        )
          if (s[x[f][0]] && i[x[f][0]] !== g[x[f][1]]()) return null;
        return null == i.timezoneOffset
          ? g
          : new Date(
              Date.UTC(
                i.year,
                i.month,
                i.day,
                i.hour,
                i.minute - i.timezoneOffset,
                i.second,
                i.millisecond,
              ),
            );
      }
      var bt = {
          format: St,
          parse: wt,
          defaultI18n: lt,
          setGlobalDateI18n: ht,
          setGlobalDateMasks: Zt,
        },
        Ct = bt;
      function _t(t) {
        return function (e, n, r, i) {
          var a = (0, k.UM)(r) ? 0 : r,
            o = (0, k.UM)(i) ? e.length : i;
          while (a < o) {
            var u = (a + o) >>> 1;
            t(e[u]) > n ? (o = u) : (a = u + 1);
          }
          return a;
        };
      }
      var Dt = 'format';
      function Tt(t, e) {
        var n = r[Dt] || Ct[Dt];
        return n(t, e);
      }
      function Yt(t) {
        return (
          (0, k.HD)(t) &&
            (t =
              t.indexOf('T') > 0
                ? new Date(t).getTime()
                : new Date(t.replace(/-/gi, '/')).getTime()),
          (0, k.J_)(t) && (t = t.getTime()),
          t
        );
      }
      var At = 1e3,
        Pt = 60 * At,
        Ot = 60 * Pt,
        It = 24 * Ot,
        Rt = 31 * It,
        Nt = 365 * It,
        Et = [
          ['HH:mm:ss', At],
          ['HH:mm:ss', 10 * At],
          ['HH:mm:ss', 30 * At],
          ['HH:mm', Pt],
          ['HH:mm', 10 * Pt],
          ['HH:mm', 30 * Pt],
          ['HH', Ot],
          ['HH', 6 * Ot],
          ['HH', 12 * Ot],
          ['YYYY-MM-DD', It],
          ['YYYY-MM-DD', 4 * It],
          ['YYYY-WW', 7 * It],
          ['YYYY-MM', Rt],
          ['YYYY-MM', 4 * Rt],
          ['YYYY-MM', 6 * Rt],
          ['YYYY', 380 * It],
        ];
      function jt(t, e, n) {
        var r = (e - t) / n,
          i =
            _t(function (t) {
              return t[1];
            })(Et, r) - 1,
          a = Et[i];
        return i < 0 ? (a = Et[0]) : i >= Et.length && (a = (0, k.Z$)(Et)), a;
      }
      var Bt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'timeCat'), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.translate = function (t) {
              t = Yt(t);
              var e = this.values.indexOf(t);
              return (
                -1 === e &&
                  (e = (0, k.hj)(t) && t < this.values.length ? t : NaN),
                e
              );
            }),
            (e.prototype.getText = function (t, e) {
              var n = this.translate(t);
              if (n > -1) {
                var r = this.values[n],
                  i = this.formatter;
                return (r = i ? i(r, e) : Tt(r, this.mask)), r;
              }
              return t;
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = 'time-cat'),
                (this.mask = 'YYYY-MM-DD'),
                (this.tickCount = 7);
            }),
            (e.prototype.setDomain = function () {
              var e = this.values;
              (0, k.S6)(e, function (t, n) {
                e[n] = Yt(t);
              }),
                e.sort(function (t, e) {
                  return t - e;
                }),
                t.prototype.setDomain.call(this);
            }),
            e
          );
        })($),
        zt = Bt,
        Lt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.isContinuous = !0), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.scale = function (t) {
              if ((0, k.UM)(t)) return NaN;
              var e = this.rangeMin(),
                n = this.rangeMax(),
                r = this.max,
                i = this.min;
              if (r === i) return e;
              var a = this.getScalePercent(t);
              return e + a * (n - e);
            }),
            (e.prototype.init = function () {
              t.prototype.init.call(this);
              var e = this.ticks,
                n = (0, k.YM)(e),
                r = (0, k.Z$)(e);
              n < this.min && (this.min = n),
                r > this.max && (this.max = r),
                (0, k.UM)(this.minLimit) || (this.min = n),
                (0, k.UM)(this.maxLimit) || (this.max = r);
            }),
            (e.prototype.setDomain = function () {
              var t = (0, k.rx)(this.values),
                e = t.min,
                n = t.max;
              (0, k.UM)(this.min) && (this.min = e),
                (0, k.UM)(this.max) && (this.max = n),
                this.min > this.max && ((this.min = e), (this.max = n));
            }),
            (e.prototype.calculateTicks = function () {
              var e = this,
                n = t.prototype.calculateTicks.call(this);
              return (
                this.nice ||
                  (n = (0, k.hX)(n, function (t) {
                    return t >= e.min && t <= e.max;
                  })),
                n
              );
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.max,
                n = this.min;
              return (t - n) / (e - n);
            }),
            (e.prototype.getInvertPercent = function (t) {
              return (
                (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin())
              );
            }),
            e
          );
        })(X),
        Ht = Lt,
        Ft = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'linear'), (e.isLinear = !0), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.invert = function (t) {
              var e = this.getInvertPercent(t);
              return this.min + e * (this.max - this.min);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = 'wilkinson-extended'), (this.nice = !1);
            }),
            e
          );
        })(Ht),
        Ut = Ft;
      function Xt(t, e) {
        var n,
          r = Math.E;
        return (
          (n =
            e >= 0
              ? Math.pow(r, Math.log(e) / t)
              : -1 * Math.pow(r, Math.log(-e) / t)),
          n
        );
      }
      function Vt(t, e) {
        return 1 === t ? 1 : Math.log(e) / Math.log(t);
      }
      function Wt(t, e, n) {
        (0, k.UM)(n) && (n = Math.max.apply(null, t));
        var r = n;
        return (
          (0, k.S6)(t, function (t) {
            t > 0 && t < r && (r = t);
          }),
          r === n && (r = n / e),
          r > 1 && (r = 1),
          r
        );
      }
      var $t = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'log'), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.invert = function (t) {
              var e,
                n = this.base,
                r = Vt(n, this.max),
                i = this.rangeMin(),
                a = this.rangeMax() - i,
                o = this.positiveMin;
              if (o) {
                if (0 === t) return 0;
                e = Vt(n, o / n);
                var u = (1 / (r - e)) * a;
                if (t < u) return (t / u) * o;
              } else e = Vt(n, this.min);
              var s = (t - i) / a,
                l = s * (r - e) + e;
              return Math.pow(n, l);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = 'log'),
                (this.base = 10),
                (this.tickCount = 6),
                (this.nice = !0);
            }),
            (e.prototype.setDomain = function () {
              t.prototype.setDomain.call(this);
              var e = this.min;
              if (e < 0)
                throw new Error(
                  'When you use log scale, the minimum value must be greater than zero!',
                );
              0 === e &&
                (this.positiveMin = Wt(this.values, this.base, this.max));
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.max,
                n = this.min;
              if (e === n) return 0;
              if (t <= 0) return 0;
              var r,
                i = this.base,
                a = this.positiveMin;
              return (
                a && (n = (1 * a) / i),
                (r =
                  t < a
                    ? t / a / (Vt(i, e) - Vt(i, n))
                    : (Vt(i, t) - Vt(i, n)) / (Vt(i, e) - Vt(i, n))),
                r
              );
            }),
            e
          );
        })(Ht),
        qt = $t,
        Gt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'pow'), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.invert = function (t) {
              var e = this.getInvertPercent(t),
                n = this.exponent,
                r = Xt(n, this.max),
                i = Xt(n, this.min),
                a = e * (r - i) + i,
                o = a >= 0 ? 1 : -1;
              return Math.pow(a, n) * o;
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = 'pow'),
                (this.exponent = 2),
                (this.tickCount = 5),
                (this.nice = !0);
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.max,
                n = this.min;
              if (e === n) return 0;
              var r = this.exponent,
                i = (Xt(r, t) - Xt(r, n)) / (Xt(r, e) - Xt(r, n));
              return i;
            }),
            e
          );
        })(Ht),
        Jt = Gt,
        Kt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'time'), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.getText = function (t, e) {
              var n = this.translate(t),
                r = this.formatter;
              return r ? r(n, e) : Tt(n, this.mask);
            }),
            (e.prototype.scale = function (e) {
              var n = e;
              return (
                ((0, k.HD)(n) || (0, k.J_)(n)) && (n = this.translate(n)),
                t.prototype.scale.call(this, n)
              );
            }),
            (e.prototype.translate = function (t) {
              return Yt(t);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = 'time-pretty'),
                (this.mask = 'YYYY-MM-DD'),
                (this.tickCount = 7),
                (this.nice = !1);
            }),
            (e.prototype.setDomain = function () {
              var t = this.values,
                e = this.getConfig('min'),
                n = this.getConfig('max');
              if (
                (((0, k.UM)(e) && (0, k.hj)(e)) ||
                  (this.min = this.translate(this.min)),
                ((0, k.UM)(n) && (0, k.hj)(n)) ||
                  (this.max = this.translate(this.max)),
                t && t.length)
              ) {
                var r = [],
                  i = 1 / 0,
                  a = i,
                  o = 0;
                (0, k.S6)(t, function (t) {
                  var e = Yt(t);
                  if (isNaN(e))
                    throw new TypeError(
                      'Invalid Time: ' + t + ' in time scale!',
                    );
                  i > e ? ((a = i), (i = e)) : a > e && (a = e),
                    o < e && (o = e),
                    r.push(e);
                }),
                  t.length > 1 && (this.minTickInterval = a - i),
                  (0, k.UM)(e) && (this.min = i),
                  (0, k.UM)(n) && (this.max = o);
              }
            }),
            e
          );
        })(Ut),
        Qt = Kt,
        te = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'quantize'), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.invert = function (t) {
              var e = this.ticks,
                n = e.length,
                r = this.getInvertPercent(t),
                i = Math.floor(r * (n - 1));
              if (i >= n - 1) return (0, k.Z$)(e);
              if (i < 0) return (0, k.YM)(e);
              var a = e[i],
                o = e[i + 1],
                u = i / (n - 1),
                s = (i + 1) / (n - 1);
              return a + ((r - u) / (s - u)) * (o - a);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = 'r-pretty'),
                (this.tickCount = 5),
                (this.nice = !0);
            }),
            (e.prototype.calculateTicks = function () {
              var e = t.prototype.calculateTicks.call(this);
              return (
                this.nice ||
                  ((0, k.Z$)(e) !== this.max && e.push(this.max),
                  (0, k.YM)(e) !== this.min && e.unshift(this.min)),
                e
              );
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.ticks;
              if (t < (0, k.YM)(e)) return 0;
              if (t > (0, k.Z$)(e)) return 1;
              var n = 0;
              return (
                (0, k.S6)(e, function (e, r) {
                  if (!(t >= e)) return !1;
                  n = r;
                }),
                n / (e.length - 1)
              );
            }),
            e
          );
        })(Ht),
        ee = te,
        ne = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'quantile'), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.initCfg = function () {
              (this.tickMethod = 'quantile'),
                (this.tickCount = 5),
                (this.nice = !0);
            }),
            e
          );
        })(ee),
        re = ne,
        ie = {};
      function ae(t) {
        return ie[t];
      }
      function oe(t, e) {
        if (ae(t)) throw new Error("type '" + t + "' existed.");
        ie[t] = e;
      }
      var ue = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = 'identity'), (e.isIdentity = !0), e;
          }
          return (
            (0, V.ZT)(e, t),
            (e.prototype.calculateTicks = function () {
              return this.values;
            }),
            (e.prototype.scale = function (t) {
              return this.values[0] !== t && (0, k.hj)(t) ? t : this.range[0];
            }),
            (e.prototype.invert = function (t) {
              var e = this.range;
              return t < e[0] || t > e[1] ? NaN : this.values[0];
            }),
            e
          );
        })(X),
        se = ue;
      function le(t) {
        return Math.abs(t) < 1e-15 ? t : parseFloat(t.toFixed(15));
      }
      var ce = [1, 5, 2, 2.5, 4, 3],
        he = 100 * Number.EPSILON;
      function fe(t, e) {
        return ((t % e) + e) % e;
      }
      function pe(t) {
        return Math.round(1e12 * t) / 1e12;
      }
      function ve(t, e, n, r, i, a) {
        var o = (0, k.dp)(e),
          u = (0, k.cq)(e, t),
          s = 0,
          l = fe(r, a);
        return (
          (l < he || a - l < he) && r <= 0 && i >= 0 && (s = 1),
          1 - u / (o - 1) - n + s
        );
      }
      function de(t, e, n) {
        var r = (0, k.dp)(e),
          i = (0, k.cq)(e, t),
          a = 1;
        return 1 - i / (r - 1) - n + a;
      }
      function ye(t, e, n, r, i, a) {
        var o = (t - 1) / (a - i),
          u = (e - 1) / (Math.max(a, r) - Math.min(n, i));
        return 2 - Math.max(o / u, u / o);
      }
      function ge(t, e) {
        return t >= e ? 2 - (t - 1) / (e - 1) : 1;
      }
      function xe(t, e, n, r) {
        var i = e - t;
        return (
          1 -
          (0.5 * (Math.pow(e - r, 2) + Math.pow(t - n, 2))) /
            Math.pow(0.1 * i, 2)
        );
      }
      function me(t, e, n) {
        var r = e - t;
        if (n > r) {
          var i = (n - r) / 2;
          return 1 - Math.pow(i, 2) / Math.pow(0.1 * r, 2);
        }
        return 1;
      }
      function ke() {
        return 1;
      }
      function Me(t, e, n, r, i, a) {
        void 0 === n && (n = 5),
          void 0 === r && (r = !0),
          void 0 === i && (i = ce),
          void 0 === a && (a = [0.25, 0.2, 0.5, 0.05]);
        var o = n < 0 ? 0 : Math.round(n);
        if (
          Number.isNaN(t) ||
          Number.isNaN(e) ||
          'number' !== typeof t ||
          'number' !== typeof e ||
          !o
        )
          return { min: 0, max: 0, ticks: [] };
        if (e - t < 1e-15 || 1 === o) return { min: t, max: e, ticks: [t] };
        var u = { score: -2, lmin: 0, lmax: 0, lstep: 0 },
          s = 1;
        while (s < 1 / 0) {
          for (var l = 0; l < i.length; l += 1) {
            var c = i[l],
              h = de(c, i, s);
            if (a[0] * h + a[1] + a[2] + a[3] < u.score) {
              s = 1 / 0;
              break;
            }
            var f = 2;
            while (f < 1 / 0) {
              var p = ge(f, o);
              if (a[0] * h + a[1] + a[2] * p + a[3] < u.score) break;
              var v = (e - t) / (f + 1) / s / c,
                d = Math.ceil(Math.log10(v));
              while (d < 1 / 0) {
                var y = s * c * Math.pow(10, d),
                  g = me(t, e, y * (f - 1));
                if (a[0] * h + a[1] * g + a[2] * p + a[3] < u.score) break;
                var x = Math.floor(e / y) * s - (f - 1) * s,
                  m = Math.ceil(t / y) * s;
                if (x <= m)
                  for (var M = m - x, Z = 0; Z <= M; Z += 1) {
                    var S = x + Z,
                      w = S * (y / s),
                      b = w + y * (f - 1),
                      C = y,
                      _ = ve(c, i, s, w, b, C),
                      D = xe(t, e, w, b),
                      T = ye(f, o, t, e, w, b),
                      Y = ke(),
                      A = a[0] * _ + a[1] * D + a[2] * T + a[3] * Y;
                    A > u.score &&
                      (!r || (w <= t && b >= e)) &&
                      ((u.lmin = w),
                      (u.lmax = b),
                      (u.lstep = C),
                      (u.score = A));
                  }
                d += 1;
              }
              f += 1;
            }
          }
          s += 1;
        }
        var P = le(u.lmax),
          O = le(u.lmin),
          I = le(u.lstep),
          R = Math.floor(pe((P - O) / I)) + 1,
          N = new Array(R);
        N[0] = le(O);
        for (l = 1; l < R; l++) N[l] = le(N[l - 1] + I);
        return {
          min: Math.min(t, (0, k.YM)(N)),
          max: Math.max(e, (0, k.Z$)(N)),
          ticks: N,
        };
      }
      function Ze(t) {
        var e = t.values,
          n = t.tickInterval,
          r = t.tickCount,
          i = e;
        if ((0, k.hj)(n))
          return (0, k.hX)(i, function (t, e) {
            return e % n === 0;
          });
        var a = t.min,
          o = t.max;
        if (
          ((0, k.UM)(a) && (a = 0),
          (0, k.UM)(o) && (o = e.length - 1),
          (0, k.hj)(r) && r < o - a)
        ) {
          var u = Me(a, o, r, !1, [1, 2, 5, 3, 4, 7, 6, 8, 9]).ticks,
            s = (0, k.hX)(u, function (t) {
              return t >= a && t <= o;
            });
          return s.map(function (t) {
            return e[t];
          });
        }
        return e.slice(a, o + 1);
      }
      function Se(t) {
        var e = t.min,
          n = t.max,
          r = t.nice,
          i = t.tickCount,
          a = new De();
        return a.domain([e, n]), r && a.nice(i), a.ticks(i);
      }
      var we = 5,
        be = Math.sqrt(50),
        Ce = Math.sqrt(10),
        _e = Math.sqrt(2),
        De = (function () {
          function t() {
            this._domain = [0, 1];
          }
          return (
            (t.prototype.domain = function (t) {
              return t
                ? ((this._domain = Array.from(t, Number)), this)
                : this._domain.slice();
            }),
            (t.prototype.nice = function (t) {
              var e, n;
              void 0 === t && (t = we);
              var r,
                i = this._domain.slice(),
                a = 0,
                o = this._domain.length - 1,
                u = this._domain[a],
                s = this._domain[o];
              return (
                s < u &&
                  ((e = [s, u]),
                  (u = e[0]),
                  (s = e[1]),
                  (n = [o, a]),
                  (a = n[0]),
                  (o = n[1])),
                (r = Ye(u, s, t)),
                r > 0
                  ? ((u = Math.floor(u / r) * r),
                    (s = Math.ceil(s / r) * r),
                    (r = Ye(u, s, t)))
                  : r < 0 &&
                    ((u = Math.ceil(u * r) / r),
                    (s = Math.floor(s * r) / r),
                    (r = Ye(u, s, t))),
                r > 0
                  ? ((i[a] = Math.floor(u / r) * r),
                    (i[o] = Math.ceil(s / r) * r),
                    this.domain(i))
                  : r < 0 &&
                    ((i[a] = Math.ceil(u * r) / r),
                    (i[o] = Math.floor(s * r) / r),
                    this.domain(i)),
                this
              );
            }),
            (t.prototype.ticks = function (t) {
              return (
                void 0 === t && (t = we),
                Te(
                  this._domain[0],
                  this._domain[this._domain.length - 1],
                  t || we,
                )
              );
            }),
            t
          );
        })();
      function Te(t, e, n) {
        var r,
          i,
          a,
          o,
          u = -1;
        if (((e = +e), (t = +t), (n = +n), t === e && n > 0)) return [t];
        if (
          ((r = e < t) && ((i = t), (t = e), (e = i)),
          0 === (o = Ye(t, e, n)) || !isFinite(o))
        )
          return [];
        if (o > 0) {
          (t = Math.ceil(t / o)),
            (e = Math.floor(e / o)),
            (a = new Array((i = Math.ceil(e - t + 1))));
          while (++u < i) a[u] = (t + u) * o;
        } else {
          (t = Math.floor(t * o)),
            (e = Math.ceil(e * o)),
            (a = new Array((i = Math.ceil(t - e + 1))));
          while (++u < i) a[u] = (t - u) / o;
        }
        return r && a.reverse(), a;
      }
      function Ye(t, e, n) {
        var r = (e - t) / Math.max(0, n),
          i = Math.floor(Math.log(r) / Math.LN10),
          a = r / Math.pow(10, i);
        return i >= 0
          ? (a >= be ? 10 : a >= Ce ? 5 : a >= _e ? 2 : 1) * Math.pow(10, i)
          : -Math.pow(10, -i) / (a >= be ? 10 : a >= Ce ? 5 : a >= _e ? 2 : 1);
      }
      function Ae(t, e, n) {
        var r;
        return (
          (r =
            'ceil' === n
              ? Math.ceil(t / e)
              : 'floor' === n
              ? Math.floor(t / e)
              : Math.round(t / e)),
          r * e
        );
      }
      function Pe(t, e, n) {
        var r = Ae(t, n, 'floor'),
          i = Ae(e, n, 'ceil');
        (r = (0, k.ri)(r, n)), (i = (0, k.ri)(i, n));
        for (
          var a = [], o = Math.max((i - r) / (Math.pow(2, 12) - 1), n), u = r;
          u <= i;
          u += o
        ) {
          var s = (0, k.ri)(u, o);
          a.push(s);
        }
        return { min: r, max: i, ticks: a };
      }
      function Oe(t, e, n) {
        var r,
          i = t.minLimit,
          a = t.maxLimit,
          o = t.min,
          u = t.max,
          s = t.tickCount,
          l = void 0 === s ? 5 : s,
          c = (0, k.UM)(i) ? ((0, k.UM)(e) ? o : e) : i,
          h = (0, k.UM)(a) ? ((0, k.UM)(n) ? u : n) : a;
        if ((c > h && ((r = [c, h]), (h = r[0]), (c = r[1])), l <= 2))
          return [c, h];
        for (var f = (h - c) / (l - 1), p = [], v = 0; v < l; v++)
          p.push(c + f * v);
        return p;
      }
      function Ie(t) {
        var e = t.min,
          n = t.max,
          r = t.tickInterval,
          i = t.minLimit,
          a = t.maxLimit,
          o = Se(t);
        return (0, k.UM)(i) && (0, k.UM)(a)
          ? r
            ? Pe(e, n, r).ticks
            : o
          : Oe(t, (0, k.YM)(o), (0, k.Z$)(o));
      }
      function Re(t) {
        var e = t.min,
          n = t.max,
          r = t.tickCount,
          i = t.nice,
          a = t.tickInterval,
          o = t.minLimit,
          u = t.maxLimit,
          s = Me(e, n, r, i).ticks;
        return (0, k.UM)(o) && (0, k.UM)(u)
          ? a
            ? Pe(e, n, a).ticks
            : s
          : Oe(t, (0, k.YM)(s), (0, k.Z$)(s));
      }
      function Ne(t) {
        var e,
          n = t.base,
          r = t.tickCount,
          i = t.min,
          a = t.max,
          o = t.values,
          u = Vt(n, a);
        if (i > 0) e = Math.floor(Vt(n, i));
        else {
          var s = Wt(o, n, a);
          e = Math.floor(Vt(n, s));
        }
        for (
          var l = u - e, c = Math.ceil(l / r), h = [], f = e;
          f < u + c;
          f += c
        )
          h.push(Math.pow(n, f));
        return i <= 0 && h.unshift(0), h;
      }
      function Ee(t, e, n) {
        if ((void 0 === n && (n = 5), t === e))
          return { max: e, min: t, ticks: [t] };
        var r = n < 0 ? 0 : Math.round(n);
        if (0 === r) return { max: e, min: t, ticks: [] };
        var i = 1.5,
          a = 0.5 + 1.5 * i,
          o = e - t,
          u = o / r,
          s = Math.pow(10, Math.floor(Math.log10(u))),
          l = s;
        2 * s - u < i * (u - l) &&
          ((l = 2 * s),
          5 * s - u < a * (u - l) &&
            ((l = 5 * s), 10 * s - u < i * (u - l) && (l = 10 * s)));
        for (
          var c = Math.ceil(e / l),
            h = Math.floor(t / l),
            f = Math.max(c * l, e),
            p = Math.min(h * l, t),
            v = Math.floor((f - p) / l) + 1,
            d = new Array(v),
            y = 0;
          y < v;
          y++
        )
          d[y] = le(p + y * l);
        return { min: p, max: f, ticks: d };
      }
      function je(t) {
        var e = t.exponent,
          n = t.tickCount,
          r = Math.ceil(Xt(e, t.max)),
          i = Math.floor(Xt(e, t.min)),
          a = Ee(i, r, n).ticks;
        return a.map(function (t) {
          var n = t >= 0 ? 1 : -1;
          return Math.pow(t, e) * n;
        });
      }
      function Be(t, e) {
        var n = t.length * e;
        return 1 === e
          ? t[t.length - 1]
          : 0 === e
          ? t[0]
          : n % 1 !== 0
          ? t[Math.ceil(n) - 1]
          : t.length % 2 === 0
          ? (t[n - 1] + t[n]) / 2
          : t[n];
      }
      function ze(t) {
        var e = t.tickCount,
          n = t.values;
        if (!n || !n.length) return [];
        for (
          var r = n.slice().sort(function (t, e) {
              return t - e;
            }),
            i = [],
            a = 0;
          a < e;
          a++
        ) {
          var o = a / (e - 1);
          i.push(Be(r, o));
        }
        return i;
      }
      function Le(t) {
        var e = t.min,
          n = t.max,
          r = t.tickCount,
          i = t.tickInterval,
          a = t.minLimit,
          o = t.maxLimit,
          u = Ee(e, n, r).ticks;
        return (0, k.UM)(a) && (0, k.UM)(o)
          ? i
            ? Pe(e, n, i).ticks
            : u
          : Oe(t, (0, k.YM)(u), (0, k.Z$)(u));
      }
      function He(t) {
        var e = t.min,
          n = t.max,
          r = t.minTickInterval,
          i = t.tickInterval,
          a = t.tickCount;
        if (i) a = Math.ceil((n - e) / i);
        else {
          i = jt(e, n, a)[1];
          var o = (n - e) / i,
            u = o / a;
          u > 1 && (i *= Math.ceil(u)), r && i < r && (i = r);
        }
        i = Math.max(Math.floor((n - e) / (Math.pow(2, 12) - 1)), i);
        for (var s = [], l = e; l < n + i; l += i) s.push(l);
        return s;
      }
      function Fe(t) {
        var e = Ze(t),
          n = (0, k.Z$)(t.values);
        return n !== (0, k.Z$)(e) && e.push(n), e;
      }
      function Ue(t) {
        return new Date(t).getFullYear();
      }
      function Xe(t) {
        return new Date(t, 0, 1).getTime();
      }
      function Ve(t) {
        return new Date(t).getMonth();
      }
      function We(t, e) {
        var n = Ue(t),
          r = Ue(e),
          i = Ve(t),
          a = Ve(e);
        return 12 * (r - n) + ((a - i) % 12);
      }
      function $e(t, e) {
        return new Date(t, e, 1).getTime();
      }
      function qe(t, e) {
        return Math.ceil((e - t) / It);
      }
      function Ge(t, e) {
        return Math.ceil((e - t) / Ot);
      }
      function Je(t, e) {
        return Math.ceil((e - t) / 6e4);
      }
      function Ke(t) {
        var e = t.min,
          n = t.max,
          r = t.minTickInterval,
          i = t.tickCount,
          a = t.tickInterval,
          o = [];
        a || ((a = (n - e) / i), r && a < r && (a = r)),
          (a = Math.max(Math.floor((n - e) / (Math.pow(2, 12) - 1)), a));
        var u = Ue(e);
        if (a > Nt)
          for (var s = Ue(n), l = Math.ceil(a / Nt), c = u; c <= s + l; c += l)
            o.push(Xe(c));
        else if (a > Rt) {
          var h = Math.ceil(a / Rt),
            f = Ve(e),
            p = We(e, n);
          for (c = 0; c <= p + h; c += h) o.push($e(u, c + f));
        } else if (a > It) {
          var v = new Date(e),
            d = v.getFullYear(),
            y = v.getMonth(),
            g = v.getDate(),
            x = Math.ceil(a / It),
            m = qe(e, n);
          for (c = 0; c < m + x; c += x)
            o.push(new Date(d, y, g + c).getTime());
        } else if (a > Ot) {
          (v = new Date(e)),
            (d = v.getFullYear()),
            (y = v.getMonth()),
            (x = v.getDate());
          var k = v.getHours(),
            M = Math.ceil(a / Ot),
            Z = Ge(e, n);
          for (c = 0; c <= Z + M; c += M)
            o.push(new Date(d, y, x, k + c).getTime());
        } else if (a > Pt) {
          var S = Je(e, n),
            w = Math.ceil(a / Pt);
          for (c = 0; c <= S + w; c += w) o.push(e + c * Pt);
        } else {
          var b = a;
          b < At && (b = At);
          var C = Math.floor(e / At) * At,
            _ = Math.ceil((n - e) / At),
            D = Math.ceil(b / At);
          for (c = 0; c < _ + D; c += D) o.push(C + c * At);
        }
        return (
          o.length >= 512 &&
            console.warn(
              'Notice: current ticks length(' +
                o.length +
                ') >= 512, may cause performance issues, even out of memory. Because of the configure "tickInterval"(in milliseconds, current is ' +
                a +
                ') is too small, increase the value to solve the problem!',
            ),
          o
        );
      }
      F('cat', Ze),
        F('time-cat', Fe),
        F('wilkinson-extended', Re),
        F('r-pretty', Le),
        F('time', He),
        F('time-pretty', Ke),
        F('log', Ne),
        F('pow', je),
        F('quantile', ze),
        F('d3-linear', Ie),
        oe('cat', $),
        oe('category', $),
        oe('identity', se),
        oe('linear', Ut),
        oe('log', qt),
        oe('pow', Jt),
        oe('time', Qt),
        oe('timeCat', zt),
        oe('quantize', ee),
        oe('quantile', re);
      var Qe = function (t) {
          var e = t.values,
            n = t.tickCount;
          if (!n) return e;
          if (e.length <= 1) return e;
          for (
            var r = Math.floor(e.length / (n - 1)) || 1, i = [], a = 0;
            a < e.length;
            a += r
          )
            i.push(e[a]);
          var o = e[e.length - 1];
          return (
            i[i.length - 1] !== o &&
              (i.length >= n ? (i[i.length - 1] = o) : i.push(o)),
            i
          );
        },
        tn = [1, 1.2, 1.5, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10],
        en = 5,
        nn = function (t) {
          var e = t || {},
            n = e.tickCount,
            r = e.tickInterval,
            i = t || {},
            a = i.min,
            o = i.max;
          (a = isNaN(a) ? 0 : a), (o = isNaN(o) ? 0 : o);
          var u = n && n >= 2 ? n : en,
            s = r || on({ tickCount: u, max: o, min: a }),
            l = Math.floor(a / s) * s;
          if (r) {
            var c = Math.abs(Math.ceil((o - l) / r)) + 1;
            u = Math.max(u, c);
          }
          var h = [],
            f = 0,
            p = ln(s);
          while (f < u) h.push(cn(l + f * s, p)), f++;
          return h;
        },
        rn = 12;
      function an(t) {
        t = Math.abs(t);
        var e = 1;
        if (0 === t) return e;
        if (t < 1) {
          var n = 0;
          while (t < 1) (e /= 10), (t *= 10), n++;
          return e.toString().length > rn && (e = parseFloat(e.toFixed(n))), e;
        }
        while (t > 10) (e *= 10), (t /= 10);
        return e;
      }
      function on(t) {
        var e = t.tickCount,
          n = t.min,
          r = t.max;
        if (n === r) return 1 * an(r);
        for (
          var i = (r - n) / (e - 1),
            a = an(i),
            o = i / a,
            u = r / a,
            s = n / a,
            l = 0,
            c = 0;
          c < tn.length;
          c++
        ) {
          var h = tn[c];
          if (o <= h) {
            l = c;
            break;
          }
        }
        var f = un(l, e, s, u),
          p = ln(f) + ln(a);
        return cn(f * a, p);
      }
      function un(t, e, n, r) {
        for (var i = !1, a = tn[t], o = t; o < tn.length; o++)
          if (sn({ interval: tn[o], tickCount: e, max: r, min: n })) {
            (a = tn[o]), (i = !0);
            break;
          }
        return i ? a : 10 * un(0, e, n / 10, r / 10);
      }
      function sn(t) {
        var e = t.interval,
          n = t.tickCount,
          r = t.max,
          i = t.min,
          a = Math.floor(i / e) * e;
        return a + (n - 1) * e >= r;
      }
      function ln(t) {
        var e = t.toString(),
          n = e.indexOf('.'),
          r = e.indexOf('e-'),
          i = r >= 0 ? parseInt(e.substr(r + 2), 10) : e.substr(n + 1).length;
        return i > 20 && (i = 20), i;
      }
      function cn(t, e) {
        return parseFloat(t.toFixed(e));
      }
      F('cat', Qe), F('time-cat', Qe), F('wilkinson-extended', nn);
      var hn = (function () {
          function t(e) {
            (0, c.Z)(this, t),
              (this.data = e),
              (this.options = {}),
              (this.scales = {});
          }
          return (
            (0, h.Z)(t, [
              {
                key: '_getType',
                value: function (t) {
                  var e = t.type,
                    n = t.values,
                    r = t.field;
                  return (
                    e ||
                    ((0, k.hj)(r) || ((0, k.UM)(n[0]) && r)
                      ? 'identity'
                      : 'number' === typeof n[0]
                      ? 'linear'
                      : 'cat')
                  );
                },
              },
              {
                key: '_getOption',
                value: function (t) {
                  var e = t.values,
                    n = t.field,
                    r = this._getType(t);
                  if (((t.type = r), 'identity' === r))
                    return (t.field = n.toString()), (t.values = [n]), t;
                  if ('linear' === r) {
                    'boolean' !== typeof t.nice && (t.nice = !0);
                    var i = (0, k.rx)(e),
                      a = i.min,
                      o = i.max;
                    return (
                      (0, k.UM)(t.min) && (t.min = a),
                      (0, k.UM)(t.max) && (t.max = o),
                      t
                    );
                  }
                  if ('cat' === r || 'timeCat' === r) {
                    if (t.range) return t;
                    var u = e.length,
                      s = [0, 1];
                    if (1 === u) s = [0.5, 1];
                    else {
                      var l = (1 / u) * 0.5;
                      s = [l, 1 - l];
                    }
                    t.range = s;
                  }
                  return t;
                },
              },
              {
                key: 'createScale',
                value: function (t) {
                  var e = t.type;
                  if ((0, k.mf)(e)) return new e(t);
                  var n = ae(e);
                  return new n(t);
                },
              },
              {
                key: 'setScale',
                value: function (t, e) {
                  var n = this.options,
                    r = this.scales;
                  (n[t] = (0, k.CD)({}, n[t], e)), r[t] && delete r[t];
                },
              },
              {
                key: 'create',
                value: function (t) {
                  this.update(t);
                },
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this;
                  t &&
                    ((0, k.S6)(t, function (t, n) {
                      e.setScale(n, t);
                    }),
                    (this.scales = (0, m.Z)({}, this.scales)));
                },
              },
              {
                key: 'changeData',
                value: function (t) {
                  (this.data = t), (this.scales = {});
                },
              },
              {
                key: 'getData',
                value: function () {
                  return this.data;
                },
              },
              {
                key: 'getScale',
                value: function (t) {
                  var e = this.scales,
                    n = this.options,
                    r = this.data,
                    i = e[t];
                  if (i) return i;
                  var a = n[t];
                  if (!a) return null;
                  var o = a.values ? a.values : r ? (0, k.I)(r, t) : [],
                    u = this._getOption(
                      (0, m.Z)((0, m.Z)({}, a), {}, { field: t, values: o }),
                    ),
                    s = this.createScale(u);
                  return (e[t] = s), s;
                },
              },
              {
                key: 'getScales',
                value: function () {
                  var t = this,
                    e = this.options,
                    n = this.scales;
                  return (
                    (0, k.S6)(e, function (e, n) {
                      t.getScale(n);
                    }),
                    n
                  );
                },
              },
              {
                key: 'adjustStartZero',
                value: function (t) {
                  var e = this.options,
                    n = t.field,
                    r = t.min,
                    i = t.max,
                    a = e[n];
                  (a && a.min) ||
                    (r > 0
                      ? t.change({ min: 0 })
                      : i < 0 && t.change({ max: 0 }));
                },
              },
              {
                key: 'adjustPieScale',
                value: function (t) {
                  var e = this.options,
                    n = t.field,
                    r = e[n];
                  if (r && !(0, k.UM)(r.nice)) return null;
                  t.change({ nice: !1 });
                },
              },
              {
                key: 'getZeroValue',
                value: function (t) {
                  var e,
                    n = t.min,
                    r = t.max;
                  return (e = n >= 0 ? n : r <= 0 ? r : 0), t.scale(e);
                },
              },
            ]),
            t
          );
        })(),
        fn = hn,
        pn = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t, r, i) {
            var a;
            (0, c.Z)(this, n),
              (a = e.call(this, t, r, i)),
              (a.componentsPosition = []);
            var o = t.data,
              u = t.coord,
              s = t.scale,
              l = void 0 === s ? [] : s;
            (a.layoutController = new b()),
              (a.coordController = new z()),
              (a.scaleController = new fn(o)),
              (a.scale = a.scaleController);
            var h = (0, f.Z)(a),
              p = h.layoutController,
              v = h.coordController,
              d = h.scaleController,
              y = a.getStyle(t, r);
            return (
              (a.layout = p.create(y)),
              (a.coord = v.create(u, a.layout)),
              d.create(l),
              (a.data = o),
              (a.state = { filters: {} }),
              a
            );
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'willReceiveProps',
                value: function (t) {
                  var e = this.layoutController,
                    n = this.coordController,
                    r = this.scaleController,
                    i = this.props,
                    a = t.style,
                    o = t.data,
                    u = t.scale,
                    s = i.style,
                    l = i.data,
                    c = i.scale;
                  if (!(0, M.Z)(a, s)) {
                    var h = this.getStyle(t, this.context);
                    (this.layout = e.create(h)), n.updateLayout(this.layout);
                  }
                  o !== l && r.changeData(o), (0, M.Z)(u, c) || r.update(u);
                },
              },
              {
                key: 'willUpdate',
                value: function () {
                  var t = this.coordController,
                    e = this.props;
                  this.coord = t.create(e.coord, this.layout);
                },
              },
              {
                key: 'getStyle',
                value: function (t, e) {
                  var n = e.theme,
                    r = e.px2hd,
                    i = e.left,
                    a = e.top,
                    o = e.width,
                    u = e.height,
                    s = t.style;
                  return r(
                    (0, m.Z)(
                      (0, m.Z)(
                        { left: i, top: a, width: o, height: u },
                        n.chart,
                      ),
                      s,
                    ),
                  );
                },
              },
              {
                key: 'layoutCoord',
                value: function (t) {
                  var e = this.coord,
                    n = t.position,
                    r = t.width,
                    i = t.height,
                    a = e.left,
                    o = e.top,
                    u = e.width,
                    s = e.height;
                  switch (n) {
                    case 'left':
                      (a += r), (u = Math.max(0, u - r));
                      break;
                    case 'right':
                      u = Math.max(0, u - r);
                      break;
                    case 'top':
                      (o += i), (s = Math.max(0, s - i));
                      break;
                    case 'bottom':
                      s = Math.max(0, s - i);
                      break;
                  }
                  e.update({ left: a, top: o, width: u, height: s });
                },
              },
              {
                key: 'resetCoordLayout',
                value: function () {
                  var t = this.coord,
                    e = this.layout;
                  t.update(e);
                },
              },
              {
                key: 'updateCoordLayout',
                value: function (t) {
                  var e = this;
                  (0, k.kJ)(t)
                    ? t.forEach(function (t) {
                        e.layoutCoord(t);
                      })
                    : this.layoutCoord(t);
                },
              },
              {
                key: 'updateCoordFor',
                value: function (t, e) {
                  var n = this;
                  if (e) {
                    var r = this.componentsPosition,
                      i = { component: t, layout: e },
                      a = (0, k.cx)(r, function (e) {
                        return e.component === t;
                      });
                    if (a > -1)
                      return (
                        r.splice(a, 1, i),
                        this.resetCoordLayout(),
                        void r.forEach(function (t) {
                          var e = t.layout;
                          n.updateCoordLayout(e);
                        })
                      );
                    r.push(i), this.updateCoordLayout(e);
                  }
                },
              },
              {
                key: 'getGeometrys',
                value: function () {
                  var t = this.children,
                    e = [];
                  return (
                    s.Z.toArray(t).forEach(function (t) {
                      if (!t) return !1;
                      var n = t.component;
                      n && n.isGeometry && e.push(n);
                    }),
                    e
                  );
                },
              },
              {
                key: 'getPosition',
                value: function (t) {
                  for (
                    var e = this.getCoord(),
                      n = this.getXScales()[0],
                      r = n.field,
                      i = this.getYScales(),
                      a = i[0],
                      o = a.field,
                      u = 0,
                      s = i.length;
                    u < s;
                    u++
                  ) {
                    var l = i[u],
                      c = l.field;
                    if (t[c]) {
                      (a = l), (o = c);
                      break;
                    }
                  }
                  var h = n.scale(t[r]),
                    f = a.scale(t[o]);
                  return e.convertPoint({ x: h, y: f });
                },
              },
              {
                key: 'getSnapRecords',
                value: function (t) {
                  var e = this.getGeometrys();
                  if (e.length) return e[0].getSnapRecords(t);
                },
              },
              {
                key: 'getLegendItems',
                value: function (t) {
                  var e = this.getGeometrys();
                  if (e.length) return e[0].getLegendItems(t);
                },
              },
              {
                key: 'setScale',
                value: function (t, e) {
                  this.scaleController.setScale(t, e);
                },
              },
              {
                key: 'getScale',
                value: function (t) {
                  return this.scaleController.getScale(t);
                },
              },
              {
                key: 'getScales',
                value: function () {
                  return this.scaleController.getScales();
                },
              },
              {
                key: 'getXScales',
                value: function () {
                  var t = this.getGeometrys();
                  return t.map(function (t) {
                    return t.getXScale();
                  });
                },
              },
              {
                key: 'getYScales',
                value: function () {
                  var t = this.getGeometrys();
                  return t.map(function (t) {
                    return t.getYScale();
                  });
                },
              },
              {
                key: 'getCoord',
                value: function () {
                  return this.coord;
                },
              },
              {
                key: 'filter',
                value: function (t, e) {
                  var n = this.state.filters;
                  this.setState({
                    filters: (0, m.Z)((0, m.Z)({}, n), {}, (0, x.Z)({}, t, e)),
                  });
                },
              },
              {
                key: '_getRenderData',
                value: function () {
                  var t = this.props,
                    e = this.state,
                    n = t.data,
                    r = e.filters;
                  if (!r || !Object.keys(r).length) return n;
                  var i = n;
                  return (
                    (0, k.S6)(r, function (t, e) {
                      t &&
                        (i = i.filter(function (n) {
                          return t(n[e], n);
                        }));
                    }),
                    i
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = this.props,
                    n = this.layout,
                    r = this.coord,
                    i = e.children,
                    a = e.data;
                  if (!a) return null;
                  var o = this._getRenderData();
                  return s.Z.map(i, function (e) {
                    return s.Z.cloneElement(e, {
                      chart: t,
                      coord: r,
                      data: o,
                      layout: n,
                    });
                  });
                },
              },
            ]),
            n
          );
        })(l.Z),
        vn = pn,
        dn = n(81253),
        yn = ['key', 'ref'];
      function gn(t, e) {
        for (
          var n = e || {},
            r = n.key,
            i = n.ref,
            a = (0, dn.Z)(n, yn),
            o = arguments.length,
            u = new Array(o > 2 ? o - 2 : 0),
            s = 2;
          s < o;
          s++
        )
          u[s - 2] = arguments[s];
        return (
          u.length && (a.children = 1 === u.length ? u[0] : u),
          { key: r, ref: i, type: t, props: a, _cache: {} }
        );
      }
      var xn = n(44906),
        mn = n(46070);
      function kn(t, e, n) {
        if (t === e) return !0;
        for (var r = 0, i = n.length; r < i; r++) {
          var a = n[r];
          if (t[a] !== e[a]) return !1;
        }
        return !0;
      }
      var Mn = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t, r) {
            var i;
            (0, c.Z)(this, n), (i = e.call(this, t, r));
            var a = t.selection;
            if (!a) return (0, mn.Z)(i);
            var o = a.defaultSelected;
            return (i.state.selected = o), i;
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'didMount',
                value: function () {
                  var t = this,
                    e = this.props,
                    n = this.state,
                    r = this.container,
                    i = r.get('canvas'),
                    a = e.selection,
                    o = e.chart;
                  if (a) {
                    var u = a.triggerOn,
                      s = void 0 === u ? 'click' : u;
                    i.on(s, function (e) {
                      var r = e.points,
                        i = t.getSnapRecords(r[0]),
                        u = a.type,
                        s = void 0 === u ? 'single' : u,
                        l = a.cancelable,
                        c = void 0 === l || l;
                      if (i && i.length) {
                        var h = n.selected,
                          f = i.map(function (t) {
                            return t.origin;
                          });
                        if (
                          ((h && h.length) || t.setState({ selected: f }),
                          'single' === s)
                        ) {
                          if (!c) return void t.setState({ selected: f });
                          var p = [];
                          return (
                            i.forEach(function (e) {
                              t.isSelected(e) || p.push(e.origin);
                            }),
                            void t.setState({ selected: p })
                          );
                        }
                        var v = o.getScales(),
                          d = Object.keys(v),
                          y = {};
                        h.forEach(function (t) {
                          var e = d
                            .map(function (e) {
                              return t[e];
                            })
                            .join('-');
                          y[e] = t;
                        }),
                          i.forEach(function (t) {
                            var e = t.origin,
                              n = d
                                .map(function (t) {
                                  return e[t];
                                })
                                .join('-');
                            y[n] = y[n] ? null : e;
                          });
                        var g = Object.keys(y)
                          .map(function (t) {
                            return y[t];
                          })
                          .filter(Boolean);
                        t.setState({ selected: g });
                      } else c && t.setState({ selected: null });
                    });
                  }
                },
              },
              {
                key: 'willReceiveProps',
                value: function (t) {
                  var e = t.selection,
                    n = this.props.selection;
                  if (e && n) {
                    var r = e.defaultSelected,
                      i = n.defaultSelected;
                    (0, M.Z)(r, i) || (this.state.selected = r);
                  }
                },
              },
              {
                key: 'getSnapRecords',
                value: function (t) {
                  return null;
                },
              },
              {
                key: 'isSelected',
                value: function (t) {
                  var e = this.state,
                    n = this.props,
                    r = e.selected;
                  if (!r || !r.length) return !1;
                  for (
                    var i = n.chart,
                      a = i.getScales(),
                      o = Object.keys(a),
                      u = 0,
                      s = r.length;
                    u < s;
                    u++
                  ) {
                    var l = r[u];
                    if (kn(t.origin, l, o)) return !0;
                  }
                  return !1;
                },
              },
              {
                key: 'getSelectionStyle',
                value: function (t) {
                  var e = this.state,
                    n = this.props,
                    r = e.selected;
                  if (!r || !r.length) return null;
                  var i = n.selection,
                    a = i.selectedStyle,
                    o = i.unSelectedStyle,
                    u = this.isSelected(t);
                  return u
                    ? (0, k.mf)(a)
                      ? a(t)
                      : a
                    : (0, k.mf)(o)
                    ? o(t)
                    : o;
                },
              },
            ]),
            n
          );
        })(l.Z),
        Zn = Mn,
        Sn = n(9879),
        wn = n.n(Sn),
        bn = wn(),
        Cn = n(77131),
        _n = n.n(Cn),
        Dn = _n(),
        Tn = n(24207),
        Yn = n.n(Tn),
        An = Yn(),
        Pn = n(84061),
        On = (function () {
          function t(e) {
            (0, c.Z)(this, t), (0, k.CD)(this, e);
            var n = this.scale,
              r = this.field,
              i = this.data;
            if (!n && i) {
              var a = (0, k.I)(i, r);
              this.scale = this.createScale({ values: a, field: r });
            }
          }
          return (
            (0, h.Z)(t, [
              {
                key: 'createScale',
                value: function (t) {
                  return null;
                },
              },
              {
                key: '_mapping',
                value: function (t) {
                  return t;
                },
              },
              {
                key: 'update',
                value: function (t) {
                  (0, k.CD)(this, t);
                },
              },
              {
                key: 'setRange',
                value: function (t) {
                  this.range = t;
                },
              },
              {
                key: 'normalize',
                value: function (t) {
                  var e = this.scale;
                  return (0, k.kJ)(t)
                    ? t.map(function (t) {
                        return e.scale(t);
                      })
                    : e.scale(t);
                },
              },
              {
                key: 'convert',
                value: function (t) {
                  return t;
                },
              },
              {
                key: 'mapping',
                value: function (t) {
                  var e = (0, k.mf)(this.callback) ? this.callback(t) : null;
                  return (0, k.UM)(e) ? this._mapping(t) : e;
                },
              },
            ]),
            t
          );
        })(),
        In = On,
        Rn = n(7461),
        Nn = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t) {
            var r;
            return (
              (0, c.Z)(this, n),
              (r = e.call(this, t)),
              r._updateInterpolate(),
              r
            );
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'createScale',
                value: function (t) {
                  return new Ut(t);
                },
              },
              {
                key: '_updateInterpolate',
                value: function () {
                  var t = (0, Z.Z)(this.range, 2),
                    e = t[0],
                    n = t[1];
                  this.interpolate = (0, Rn.Z)(e, n);
                },
              },
              {
                key: 'update',
                value: function (t) {
                  (0, C.Z)((0, _.Z)(n.prototype), 'update', this).call(this, t),
                    this._updateInterpolate();
                },
              },
              {
                key: '_mapping',
                value: function (t) {
                  var e = this.scale,
                    n = this.interpolate;
                  return (0, k.kJ)(t)
                    ? t.map(function (t) {
                        return n(e.scale(t));
                      })
                    : n(e.scale(t));
                },
              },
              {
                key: 'normalize',
                value: function (t) {
                  var e = this.scale;
                  return (0, k.kJ)(t)
                    ? t.map(function (t) {
                        return e.scale(t);
                      })
                    : e.scale(t);
                },
              },
              {
                key: 'convert',
                value: function (t) {
                  var e = this.range,
                    n = (0, Z.Z)(e, 2),
                    r = n[0],
                    i = n[1];
                  return (0, k.kJ)(t)
                    ? t.map(function (t) {
                        return r + (i - r) * t;
                      })
                    : r + (i - r) * t;
                },
              },
            ]),
            n
          );
        })(In),
        En = Nn,
        jn = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n() {
            return (0, c.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'createScale',
                value: function (t) {
                  return new $(t);
                },
              },
              {
                key: '_mapping',
                value: function (t) {
                  var e = this.scale,
                    n = this.range;
                  if ('cat' === e.type) {
                    var r = e.translate(t);
                    return n[r % n.length];
                  }
                  var i = e.scale(t),
                    a = Math.round(i * (n.length - 1));
                  return n[a];
                },
              },
            ]),
            n
          );
        })(In),
        Bn = jn,
        zn = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n() {
            return (0, c.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'createScale',
                value: function (t) {
                  return new se(t);
                },
              },
              {
                key: '_mapping',
                value: function () {
                  var t = this.field,
                    e = this.range;
                  return t || (e && e[0]);
                },
              },
            ]),
            n
          );
        })(In),
        Ln = zn,
        Hn = Ln,
        Fn = En,
        Un = Bn,
        Xn = ['x', 'y', 'color', 'size', 'shape'],
        Vn = ['color', 'size', 'shape'];
      function Wn(t, e) {
        return new t.constructor((0, m.Z)((0, m.Z)({}, t.__cfg__), e));
      }
      var $n = (function () {
          function t(e, n) {
            (0, c.Z)(this, t),
              (this.scaleController = e),
              (this.attrsRange = n),
              (this.options = {}),
              (this.attrs = {});
          }
          return (
            (0, h.Z)(t, [
              {
                key: 'parseOption',
                value: function (t, e) {
                  return t
                    ? (0, k.HD)(t)
                      ? { field: t, type: 'category' }
                      : (0, k.hj)(t) && 'size' === e
                      ? { type: 'identity', field: t }
                      : (0, k.kJ)(t)
                      ? { field: t[0], range: t[1] }
                      : t
                    : { type: 'identity' };
                },
              },
              {
                key: 'getAttrOptions',
                value: function (t) {
                  var e = this;
                  if (!t.x || !t.y) throw new Error('x, y are required !');
                  var n = {},
                    r = this.attrsRange;
                  Xn.forEach(function (i) {
                    if (t[i]) {
                      var a = e.parseOption(t[i], i);
                      a.range || (a.range = r[i]), (n[i] = a);
                    }
                  });
                  var i = n.x,
                    a = n.y;
                  return (i.type = Fn), (a.type = Fn), n;
                },
              },
              {
                key: 'getDefaultAttrValues',
                value: function () {
                  var t = this.attrsRange,
                    e = t.color,
                    n = t.shape;
                  return { color: e[0], shape: n && n[0] };
                },
              },
              {
                key: 'getGroupScales',
                value: function () {
                  var t = this.attrs,
                    e = [];
                  return (
                    (0, k.S6)(Vn, function (n) {
                      var r = t[n];
                      if (r) {
                        var i = r.scale;
                        i && i.isCategory && -1 === e.indexOf(i) && e.push(i);
                      }
                    }),
                    e
                  );
                },
              },
              {
                key: 'createAttr',
                value: function (t) {
                  var e = t.type,
                    n = t.field,
                    r = t.scale;
                  if ((0, k.UM)(n) || e === Hn) return new Hn(t);
                  var i = this.scaleController.getScale(n),
                    o = (0, m.Z)(
                      (0, m.Z)({}, t),
                      {},
                      {
                        data: this.scaleController.getData(),
                        scale: r ? Wn(i, r) : i,
                      },
                    );
                  if (i && 'identity' === i.type) return new Hn(o);
                  var u = i.isLinear ? Fn : Un;
                  return (
                    (0, k.mf)(e) && (u = e),
                    (0, k.HD)(e) && a[(0, k.jC)(e)] && (u = a[(0, k.jC)(e)]),
                    new u(o)
                  );
                },
              },
              {
                key: 'create',
                value: function (t) {
                  this.update(t);
                },
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this.scaleController,
                    n = this.options,
                    r = this.attrs,
                    i = {};
                  (0, k.S6)(t, function (t, a) {
                    var o = n[a];
                    (0, M.Z)(t, o) && (i[a] = r[a]);
                    var u = t.field;
                    u && e.setScale(u);
                  }),
                    (this.options = t),
                    (this.attrs = i);
                },
              },
              {
                key: 'getAttr',
                value: function (t) {
                  var e = this.attrs,
                    n = this.options,
                    r = e[t];
                  if (r) return r;
                  var i = n[t];
                  if (!i) return null;
                  var a = this.createAttr(i);
                  return (e[t] = a), a;
                },
              },
              {
                key: 'getAttrs',
                value: function () {
                  var t = this,
                    e = this.options,
                    n = this.attrs;
                  return (
                    (0, k.S6)(e, function (e, n) {
                      t.getAttr(n);
                    }),
                    n
                  );
                },
              },
              {
                key: 'isGroupAttr',
                value: function (t) {
                  return -1 !== Vn.indexOf(t);
                },
              },
              {
                key: 'getAttrsByLinear',
                value: function () {
                  var t = this.attrs,
                    e = Object.keys(t),
                    n = [],
                    r = [];
                  return (
                    e.forEach(function (e) {
                      if ('x' !== e && 'y' !== e) {
                        var i = t[e].scale;
                        i && 'linear' === i.type ? n.push(e) : r.push(e);
                      } else n.push(e);
                    }),
                    { linearAttrs: n, nonlinearAttrs: r }
                  );
                },
              },
            ]),
            t
          );
        })(),
        qn = $n,
        Gn = ['field'],
        Jn = 'origin',
        Kn = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t, r) {
            var i;
            (0, c.Z)(this, n),
              (i = e.call(this, t, r)),
              (i.isGeometry = !0),
              (i.startOnZero = !1),
              (i.connectNulls = !1),
              (i.sortable = !1),
              (0, k.CD)((0, f.Z)(i), i.getDefaultCfg());
            var a = t.chart,
              o = i._getThemeAttrsRange();
            i.attrController = new qn(a.scale, o);
            var u = (0, f.Z)(i),
              s = u.attrController,
              l = s.getAttrOptions(t);
            return s.create(l), i;
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'getDefaultCfg',
                value: function () {
                  return {};
                },
              },
              {
                key: 'willReceiveProps',
                value: function (t) {
                  (0, C.Z)(
                    (0, _.Z)(n.prototype),
                    'willReceiveProps',
                    this,
                  ).call(this, t);
                  var e = this.props,
                    r = this.attrController,
                    i = t.data,
                    a = t.adjust,
                    o = t.zoomRange,
                    u = e.data,
                    s = e.adjust,
                    l = e.zoomRange,
                    c = r.getAttrOptions(t),
                    h = r.getAttrOptions(e);
                  (0, M.Z)(c, h) || (r.update(c), (this.records = null)),
                    i !== u && (this.records = null),
                    a !== s && (this.records = null),
                    (0, M.Z)(o, l) || (this.records = null);
                },
              },
              {
                key: 'willMount',
                value: function () {
                  this._createAttrs(), this.records || this._processData();
                },
              },
              {
                key: 'willUpdate',
                value: function () {
                  this._createAttrs(), this.records || this._processData();
                },
              },
              {
                key: 'didMount',
                value: function () {
                  (0, C.Z)((0, _.Z)(n.prototype), 'didMount', this).call(this),
                    this._initEvent();
                },
              },
              {
                key: '_createAttrs',
                value: function () {
                  var t = this.attrController;
                  (t.attrs = {}), (this.attrs = t.getAttrs());
                },
              },
              {
                key: '_getThemeAttrsRange',
                value: function () {
                  var t = this.context,
                    e = this.props,
                    n = this.geomType,
                    r = e.coord,
                    i = t.theme,
                    a = i.colors,
                    o = i.sizes,
                    u = i.shapes;
                  return { x: r.x, y: r.y, color: a, size: o, shape: u[n] };
                },
              },
              {
                key: '_adjustScales',
                value: function () {
                  var t = this.attrs,
                    e = this.props,
                    n = this.startOnZero,
                    r = e.chart,
                    i = e.startOnZero,
                    a = void 0 === i ? n : i,
                    o = e.coord,
                    u = e.adjust,
                    s = o.isPolar,
                    l = o.transposed;
                  if (a) {
                    var c = t.y;
                    r.scale.adjustStartZero(c.scale);
                  }
                  if (s && l && 'stack' === u) {
                    var h = t.y;
                    r.scale.adjustPieScale(h.scale);
                  }
                },
              },
              {
                key: '_groupData',
                value: function (t) {
                  var e = this.attrController,
                    n = e.getGroupScales();
                  if (!n.length) return [{ children: t }];
                  var r = [];
                  n.forEach(function (t) {
                    var e = t.field;
                    r.push(e);
                  });
                  var i = (0, k.Ms)(t, r),
                    a = [];
                  for (var o in i)
                    a.push({ key: o.replace(/^_/, ''), children: i[o] });
                  return a;
                },
              },
              {
                key: '_saveOrigin',
                value: function (t) {
                  for (var e = t.length, n = new Array(e), r = 0; r < e; r++) {
                    var i = t[r];
                    n[r] = (0, m.Z)((0, m.Z)({}, i), {}, (0, x.Z)({}, Jn, i));
                  }
                  return n;
                },
              },
              {
                key: '_numberic',
                value: function (t) {
                  for (
                    var e = this.attrs,
                      n = [e.x.scale, e.y.scale],
                      r = 0,
                      i = t.length;
                    r < i;
                    r++
                  )
                    for (
                      var a = t[r], o = Math.min(2, n.length), u = 0;
                      u < o;
                      u++
                    ) {
                      var s = n[u];
                      if (s.isCategory) {
                        var l = s.field;
                        a[l] = s.translate(a[l]);
                      }
                    }
                },
              },
              {
                key: '_adjustData',
                value: function (t) {
                  var e = this.attrs,
                    n = this.props,
                    r = n.adjust;
                  if (!r) return t;
                  var a = 'string' === typeof r ? { type: r } : r,
                    o = (0, k.jC)(a.type);
                  if (!i[o]) throw new Error('not support such adjust : ' + r);
                  var u = e.x,
                    s = e.y,
                    l = u.field,
                    c = s.field,
                    h = new i[o]((0, m.Z)({ xField: l, yField: c }, a));
                  if ('Dodge' === o)
                    for (var f = 0, p = t.length; f < p; f++)
                      this._numberic(t[f]);
                  return (
                    h.processAdjust(t),
                    'Stack' === o && this._updateStackRange(c, s.scale, t),
                    (this.adjust = h),
                    t
                  );
                },
              },
              {
                key: '_updateStackRange',
                value: function (t, e, n) {
                  for (
                    var r = (0, k.xH)(n),
                      i = 1 / 0,
                      a = -1 / 0,
                      o = 0,
                      u = r.length;
                    o < u;
                    o++
                  ) {
                    var s = r[o],
                      l = Math.min.apply(null, s[t]),
                      c = Math.max.apply(null, s[t]);
                    l < i && (i = l), c > a && (a = c);
                  }
                  (i === e.min && a === e.max) || e.change({ min: i, max: a });
                },
              },
              {
                key: '_processData',
                value: function () {
                  var t = this.props,
                    e = t.data,
                    n = this._saveOrigin(e),
                    r = this._groupData(n),
                    i = r.map(function (t) {
                      return t.children;
                    }),
                    a = this._adjustData(i);
                  this._adjustScales(),
                    (this.dataArray = a),
                    this.sortable && this._sortData(r),
                    (this.records = r);
                },
              },
              {
                key: '_sortData',
                value: function (t) {
                  var e = this.getXScale(),
                    n = e.field,
                    r = e.type;
                  'identity' !== r &&
                    e.values.length > 1 &&
                    (0, k.S6)(t, function (t) {
                      var i = t.children;
                      i.sort(function (t, i) {
                        return 'timeCat' === r
                          ? (0, Pn.u8)(t[Jn][n]) - (0, Pn.u8)(i[Jn][n])
                          : e.translate(t[Jn][n]) - e.translate(i[Jn][n]);
                      });
                    });
                },
              },
              {
                key: '_initEvent',
                value: function () {
                  var t = this,
                    e = this.container,
                    n = this.props,
                    r = e.get('canvas');
                  [
                    'onPressStart',
                    'onPress',
                    'onPressEnd',
                    'onPan',
                    'onPanStart',
                    'onPanEnd',
                  ].forEach(function (e) {
                    n[e] &&
                      r.on(e.substr(2).toLowerCase(), function (r) {
                        (r.geometry = t), n[e](r);
                      });
                  });
                },
              },
              {
                key: 'getY0Value',
                value: function () {
                  var t = this.attrs,
                    e = this.props,
                    n = e.chart,
                    r = t.y.field,
                    i = n.getScale(r);
                  return n.scale.getZeroValue(i);
                },
              },
              {
                key: '_getShapeStyle',
                value: function (t, e) {
                  var n = this.context,
                    r = this.props,
                    i = this.geomType,
                    a = n.theme,
                    o = a.shape[i] || {},
                    u = o.default,
                    s = o[t],
                    l = r.style,
                    c = (0, m.Z)((0, m.Z)({}, u), s);
                  if (!l || !(0, k.Kn)(l)) return c;
                  var h = l.field,
                    f = (0, dn.Z)(l, Gn),
                    p = h ? e[h] : e;
                  return (
                    (0, k.S6)(f, function (t, e) {
                      (0, k.mf)(t) ? (c[e] = t(p)) : (c[e] = t);
                    }),
                    c
                  );
                },
              },
              {
                key: '_mapping',
                value: function (t) {
                  for (
                    var e = this.attrs,
                      n = this.props,
                      r = this.attrController,
                      i = n.coord,
                      a = r.getAttrsByLinear(),
                      o = a.linearAttrs,
                      u = a.nonlinearAttrs,
                      s = r.getDefaultAttrValues(),
                      l = 0,
                      c = t.length;
                    l < c;
                    l++
                  ) {
                    for (
                      var h = t[l],
                        f = h.children,
                        p = (0, m.Z)({}, s),
                        v = f[0],
                        d = 0,
                        y = u.length;
                      d < y;
                      d++
                    ) {
                      var g = u[d],
                        x = e[g];
                      p[g] = x.mapping(v[x.field]);
                    }
                    for (var M = 0, Z = f.length; M < Z; M++) {
                      for (var S = f[M], w = {}, b = 0; b < o.length; b++) {
                        var C = o[b],
                          _ = e[C];
                        r.isGroupAttr(C)
                          ? (p[C] = _.mapping(S[_.field]))
                          : (w[C] = _.normalize(S[_.field]));
                      }
                      var D = i.convertPoint({ x: w.x, y: w.y }),
                        T = D.x,
                        Y = D.y,
                        A = p.shape,
                        P = this._getShapeStyle(A, S.origin),
                        O = this.isSelected(S);
                      (0, k.CD)(S, p, {
                        normalized: w,
                        x: T,
                        y: Y,
                        shapeName: A,
                        shape: P,
                        selected: O,
                      });
                    }
                  }
                  return t;
                },
              },
              {
                key: 'mapping',
                value: function () {
                  var t = this.records;
                  return this._mapping(t), t;
                },
              },
              {
                key: 'getAttr',
                value: function (t) {
                  return this.attrController.getAttr(t);
                },
              },
              {
                key: 'getXScale',
                value: function () {
                  return this.getAttr('x').scale;
                },
              },
              {
                key: 'getYScale',
                value: function () {
                  return this.getAttr('y').scale;
                },
              },
              {
                key: '_getXSnap',
                value: function (t) {
                  var e = this.getXScale();
                  if (e.isCategory) return e.invert(t);
                  var n = e.invert(t),
                    r = e.values,
                    i = r.length;
                  if (1 === i) return r[0];
                  if ((r[0] + r[1]) / 2 > n) return r[0];
                  if ((r[i - 2] + r[i - 1]) / 2 <= n) return r[i - 1];
                  for (var a = 1; a < i; a++)
                    if ((r[a - 1] + r[a]) / 2 <= n && (r[a + 1] + r[a]) / 2 > n)
                      return r[a];
                  return null;
                },
              },
              {
                key: '_getYSnapRecords',
                value: function (t, e) {
                  var n = this.getYScale(),
                    r = n.field,
                    i = n.invert(t);
                  return n.isCategory
                    ? e.filter(function (t) {
                        return t[Jn][r] === i;
                      })
                    : e.filter(function (t) {
                        var e = t[r];
                        return e[0] <= i && e[1] >= i;
                      });
                },
              },
              {
                key: 'flatRecords',
                value: function () {
                  var t = this.records;
                  return t.reduce(function (t, e) {
                    return t.concat(e.children);
                  }, []);
                },
              },
              {
                key: 'getSnapRecords',
                value: function (t) {
                  var e = this.props,
                    n = e.coord,
                    r = e.adjust,
                    i = n.invertPoint(t),
                    a = this.getXScale(),
                    o = this.getYScale();
                  if (i.x < 0 || i.y < 0) return [];
                  var u = this.flatRecords();
                  if (
                    'stack' === r &&
                    n.isPolar &&
                    n.transposed &&
                    i.x >= 0 &&
                    i.x <= 1
                  ) {
                    var s = this._getYSnapRecords(i.y, u);
                    return s;
                  }
                  var l = [],
                    c = this._getXSnap(i.x);
                  if (!c) return l;
                  for (
                    var h = a.field, f = o.field, p = 0, v = u.length;
                    p < v;
                    p++
                  ) {
                    var d = (0, m.Z)(
                        (0, m.Z)({}, u[p]),
                        {},
                        { xField: h, yField: f },
                      ),
                      y = d[Jn][h];
                    (('timeCat' === a.type && (0, Pn.u8)(y) === c) ||
                      y === c) &&
                      l.push(d);
                  }
                  return l;
                },
              },
              {
                key: 'getLegendItems',
                value: function () {
                  var t = this.attrController,
                    e = t.getAttr('color');
                  if (!e) return null;
                  var n = e.scale;
                  if (!n.isCategory) return null;
                  var r = n.getTicks(),
                    i = r.map(function (t) {
                      var r = t.text,
                        i = t.tickValue,
                        a = e.mapping(i);
                      return {
                        field: n.field,
                        color: a,
                        name: r,
                        tickValue: i,
                      };
                    });
                  return i;
                },
              },
            ]),
            n
          );
        })(Zn),
        Qn = Kn,
        tr = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r() {
              return (0, c.Z)(this, r), n.apply(this, arguments);
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'getDefaultCfg',
                  value: function () {
                    return { geomType: 'line', sortable: !0 };
                  },
                },
                {
                  key: 'splitPoints',
                  value: function (t) {
                    for (var e = [], n = [], r = 0, i = t.length; r < i; r++) {
                      var a = t[r],
                        o = a.x,
                        u = a.y;
                      e.push((0, m.Z)((0, m.Z)({}, a), {}, { x: o, y: u[1] })),
                        n.push(
                          (0, m.Z)((0, m.Z)({}, a), {}, { x: o, y: u[0] }),
                        );
                    }
                    return [e, n];
                  },
                },
                {
                  key: 'splitNulls',
                  value: function (t, e) {
                    if (e) {
                      for (var n = [], r = 0, i = t.length; r < i; r++) {
                        var a = t[r],
                          o = a.y;
                        if ((0, k.kJ)(o)) {
                          if (isNaN(o[0])) continue;
                          n.push(a);
                        } else isNaN(o) || n.push(a);
                      }
                      return n.length ? [n] : [];
                    }
                    for (var u = [], s = [], l = 0, c = t.length; l < c; l++) {
                      var h = t[l],
                        f = h.y;
                      if ((0, k.kJ)(f)) {
                        if (isNaN(f[0])) {
                          s.length && (u.push(s), (s = []));
                          continue;
                        }
                        s.push(h);
                      } else
                        isNaN(f)
                          ? s.length && (u.push(s), (s = []))
                          : s.push(h);
                    }
                    return s.length && u.push(s), u;
                  },
                },
                {
                  key: 'mapping',
                  value: function () {
                    var t = this,
                      e = (0, C.Z)((0, _.Z)(r.prototype), 'mapping', this).call(
                        this,
                      ),
                      n = this.props,
                      i = this.connectNulls,
                      a = n.coord,
                      o = n.connectNulls,
                      u = void 0 === o ? i : o;
                    return e.map(function (e) {
                      var n = e.children,
                        r = n[0] || {},
                        i = r.size,
                        o = r.color,
                        s = r.shape,
                        l = r.y,
                        c = n;
                      a.isPolar && c.push(c[0]);
                      var h = t.splitNulls(c, u),
                        f = h.map(function (e) {
                          var n = (0, k.kJ)(l) ? t.splitPoints(e) : [e, void 0],
                            r = (0, Z.Z)(n, 2),
                            a = r[0],
                            u = r[1];
                          return {
                            size: i,
                            color: o,
                            shape: s,
                            points: a,
                            bottomPoints: u,
                          };
                        });
                      return (0, m.Z)((0, m.Z)({}, e), {}, { children: f });
                    });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = e.coord,
                      r = this.mapping();
                    return gn(
                      t,
                      (0, m.Z)((0, m.Z)({}, e), {}, { coord: n, records: r }),
                    );
                  },
                },
              ]),
              r
            );
          })(Qn);
        };
      function er(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t[n];
          e = e.concat(r.points);
        }
        return e;
      }
      function nr(t) {
        var e = t.y;
        return { x: t.x, y: (0, k.kJ)(e) ? e[1] : e };
      }
      function rr(t, e) {
        for (
          var n = t.map(function (t) {
              return nr(t);
            }),
            r = n[0],
            i = n[n.length - 1],
            a = i.x - r.x,
            o = r.x + a * e,
            u = 1;
          u < n.length;
          u++
        ) {
          var s = n[u],
            l = n[u - 1];
          if (o >= l.x && o <= s.x) {
            var c = (o - l.x) / (s.x - l.x);
            return { x: o, y: l.y + (s.y - l.y) * c };
          }
        }
      }
      function ir(t) {
        var e = t.record,
          n = t.appear,
          r = t.EndView,
          i = e.children,
          a = er(i),
          o = a[0].origin;
        return gn(
          'group',
          {
            animation: {
              appear: {
                easing: n.easing,
                duration: n.duration,
                onFrame: function (t) {
                  var e = this.element,
                    n = e.get('children'),
                    r = rr(a, t);
                  n.forEach(function (t) {
                    t.moveTo(r.x, r.y);
                  });
                },
              },
            },
          },
          gn(r, { origin: o }),
        );
      }
      var ar = function (t) {
          var e = t.records,
            n = t.coord,
            r = t.animation,
            i = t.endView,
            a = n.left,
            o = n.top,
            u = n.width,
            s = n.height,
            l = {
              easing: 'linear',
              duration: 450,
              clip: {
                type: 'rect',
                property: ['width'],
                attrs: { x: a, y: o, height: s },
                start: { width: 0 },
                end: { width: u },
              },
            };
          return gn(
            'group',
            null,
            e.map(function (t) {
              var e = t.key,
                n = t.children;
              return gn(
                'group',
                { key: e },
                n.map(function (t) {
                  var e = t.points,
                    n = t.color,
                    i = t.size,
                    a = t.shape;
                  return gn('polyline', {
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        {
                          points: e.map(function (t) {
                            return { x: t.x, y: t.y };
                          }),
                          stroke: n,
                        },
                        a,
                      ),
                      {},
                      { lineWidth: i || a.lineWidth },
                    ),
                    animation: (0, k.b$)(
                      {
                        update: {
                          easing: 'linear',
                          duration: 450,
                          property: ['points'],
                        },
                        appear: l,
                      },
                      r,
                    ),
                  });
                }),
                i ? gn(ir, { record: t, EndView: i, appear: l }) : null,
              );
            }),
          );
        },
        or = tr(ar),
        ur = function (t) {
          return (function (t) {
            (0, p.Z)(n, t);
            var e = (0, v.Z)(n);
            function n() {
              return (0, c.Z)(this, n), e.apply(this, arguments);
            }
            return (
              (0, h.Z)(n, [
                {
                  key: 'getDefaultCfg',
                  value: function () {
                    return { geomType: 'area', startOnZero: !0, sortable: !0 };
                  },
                },
                {
                  key: 'mapping',
                  value: function () {
                    var t = (0, C.Z)(
                        (0, _.Z)(n.prototype),
                        'mapping',
                        this,
                      ).call(this),
                      e = this.getY0Value(),
                      r = this.props,
                      i = this.startOnZero,
                      a = r.coord,
                      o = r.startOnZero,
                      u = void 0 === o ? i : o,
                      s = a.y[0];
                    if (u) {
                      var l = a.convertPoint({ x: 0, y: e });
                      s = l.y;
                    }
                    for (var c = 0, h = t.length; c < h; c++)
                      for (
                        var f = t[c], p = f.children, v = 0, d = p.length;
                        v < d;
                        v++
                      ) {
                        var y = p[v],
                          g = y.points,
                          x = y.bottomPoints;
                        x && x.length
                          ? (x.reverse(), (y.points = g.concat(x)))
                          : (g.push({ x: g[g.length - 1].x, y: s }),
                            g.push({ x: g[0].x, y: s }));
                      }
                    return t;
                  },
                },
              ]),
              n
            );
          })(tr(t));
        },
        sr = n(18838),
        lr = n(77797),
        cr = function (t) {
          var e = t.records,
            n = t.shape,
            r = t.animation,
            i = 'smooth' === n;
          return gn(
            'group',
            null,
            e.map(function (t) {
              var e = t.key,
                n = t.children;
              return gn(
                'group',
                { key: e },
                n.map(function (t) {
                  var e = t.points,
                    n = t.bottomPoints,
                    a = t.color,
                    o = t.shape;
                  return i
                    ? gn('custom', {
                        attrs: (0, m.Z)(
                          { points: e, lineWidth: '2px', fill: a },
                          o,
                        ),
                        createPath: function (t) {
                          var r = [
                              [0, 0],
                              [1, 1],
                            ],
                            i =
                              (null === n || void 0 === n
                                ? void 0
                                : n.length) || 0,
                            a = e.slice(0, e.length - i),
                            o = sr.i(a, !1, r);
                          t.beginPath(), t.moveTo(a[0].x, a[0].y);
                          for (var u = 0, s = o.length; u < s; u++) {
                            var l = o[u];
                            t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
                          }
                          if (i) {
                            var c = sr.i(n, !1, r);
                            t.lineTo(n[0].x, n[0].y);
                            for (var h = 0, f = c.length; h < f; h++) {
                              var p = c[h];
                              t.bezierCurveTo(
                                p[1],
                                p[2],
                                p[3],
                                p[4],
                                p[5],
                                p[6],
                              );
                            }
                          }
                          t.closePath();
                        },
                        calculateBox: function () {
                          return lr.Ol(e);
                        },
                      })
                    : gn('polygon', {
                        attrs: (0, m.Z)(
                          { points: e, lineWidth: '2px', fill: a },
                          o,
                        ),
                        animation: (0, k.b$)(
                          {
                            update: {
                              easing: 'linear',
                              duration: 450,
                              property: ['points'],
                            },
                          },
                          r,
                        ),
                      });
                }),
              );
            }),
          );
        },
        hr = ur(cr);
      function fr(t, e) {
        var n = (e.x - t.x) / 2 + t.x,
          r = (e.y - t.y) / 2 + t.y;
        return { x: n, y: r };
      }
      var pr = { textBaseline: 'middle', fill: '#808080' };
      function vr(t) {
        var e,
          n,
          r = t.record,
          i = t.offsetX,
          a = t.offsetY,
          o = t.points,
          u = t.label,
          s = t.guide,
          l = r.origin,
          c = r.color;
        if ((0, k.mf)(u)) {
          var h = 4 === o.length ? fr(o[1], o[2]) : fr(o[0], o[1]);
          e = (0, k.CD)({ x: h.x + i, y: h.y + a }, pr, u(l, c));
        }
        if ((0, k.mf)(s)) {
          var f,
            p = fr(
              4 === o.length ? fr(o[0], o[1]) : o[0],
              fr(o[2], null !== (f = o[3]) && void 0 !== f ? f : o[1]),
            );
          n = (0, k.CD)(
            { x: p.x, y: p.y, textBaseline: 'middle', textAlign: 'center' },
            pr,
            s(l, c),
          );
        }
        return gn(
          'group',
          null,
          e && gn('text', { attrs: e }),
          n && gn('text', { attrs: n }),
        );
      }
      var dr = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r() {
              return (0, c.Z)(this, r), n.apply(this, arguments);
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'getDefaultCfg',
                  value: function () {
                    return { geomType: 'interval', startOnZero: !0 };
                  },
                },
                {
                  key: 'getDefaultSize',
                  value: function () {
                    var t = this.attrs,
                      e = this.props,
                      n = this.adjust,
                      r = this.records,
                      i = e.coord,
                      a = e.sizeRatio,
                      o = t.x,
                      u = o.scale,
                      s = u.values;
                    if (a) return (1 / s.length) * a;
                    var l,
                      c = { column: 0.5, rose: 0.999999, multiplePie: 3 / 4 },
                      h = s.length;
                    l = i.isPolar
                      ? i.transposed && h > 1
                        ? c.multiplePie
                        : c.rose
                      : c.column;
                    var f = (1 / s.length) * l;
                    return n && 'dodge' === n.type ? f / r.length : f;
                  },
                },
                {
                  key: 'mapping',
                  value: function () {
                    for (
                      var t = (0, C.Z)(
                          (0, _.Z)(r.prototype),
                          'mapping',
                          this,
                        ).call(this),
                        e = this.props,
                        n = e.coord,
                        i = this.getY0Value(),
                        a = this.getDefaultSize(),
                        o = 0,
                        u = t.length;
                      o < u;
                      o++
                    )
                      for (
                        var s = t[o], l = s.children, c = 0, h = l.length;
                        c < h;
                        c++
                      ) {
                        var f = l[c],
                          p = f.normalized,
                          v = f.size;
                        if ((0, k.UM)(v)) {
                          var d = p.x,
                            y = p.y,
                            g = p.size,
                            x = void 0 === g ? a : g;
                          (0, k.CD)(
                            f,
                            n.convertRect({ x: d, y: y, y0: i, size: x }),
                          );
                        } else {
                          var m = f.x,
                            M = f.y,
                            Z = { size: v, x: m, y: M, y0: i };
                          (0, k.CD)(f, n.transformToRect(Z));
                        }
                        (0, k.CD)(f.shape, this.getSelectionStyle(f));
                      }
                    return t;
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = this.state,
                      r = e.coord,
                      i = e.shape,
                      a = void 0 === i ? 'rect' : i,
                      u = e.animation,
                      s = e.showLabel,
                      l = e.labelCfg,
                      c = t[a],
                      h = o[a],
                      f = (0, k.b$)({ label: null, offsetX: 0, offsetY: 0 }, l);
                    if (!c) return null;
                    var p = n.selected,
                      v = this.mapping();
                    return gn(c, {
                      coord: r,
                      records: v,
                      selected: p,
                      shape: a,
                      animation: u,
                      showLabel: s,
                      labelCfg: f,
                      LabelView: h,
                    });
                  },
                },
              ]),
              r
            );
          })(Qn);
        },
        yr = function (t) {
          var e = t.records,
            n = t.animation;
          return gn(
            'group',
            null,
            e.map(function (t) {
              var e = t.key,
                r = t.children;
              return gn(
                'group',
                { key: e },
                r.map(function (t) {
                  var e = t.key,
                    r = t.xMin,
                    i = t.xMax,
                    a = t.yMin,
                    o = t.yMax,
                    u = t.color,
                    s = t.shape;
                  return gn('rect', {
                    key: e,
                    attrs: (0, m.Z)(
                      { x: r, y: a, width: i - r, height: o - a, fill: u },
                      s,
                    ),
                    animation: (0, k.b$)(
                      {
                        appear: {
                          easing: 'linear',
                          duration: 450,
                          property: ['y', 'height'],
                          start: { y: o, height: 0 },
                        },
                        update: {
                          easing: 'linear',
                          duration: 450,
                          property: ['x', 'y', 'width', 'height'],
                        },
                      },
                      n,
                    ),
                  });
                }),
              );
            }),
          );
        },
        gr = function (t) {
          var e = t.coord,
            n = t.records,
            r = t.animation,
            i = e.center,
            a = e.startAngle,
            o = e.endAngle,
            u = e.radius;
          return gn(
            'group',
            {
              animation: {
                appear: (0, m.Z)(
                  (0, m.Z)(
                    { easing: 'quadraticOut', duration: 450 },
                    r && r.appear,
                  ),
                  {},
                  {
                    clip: {
                      type: 'sector',
                      property: ['endAngle'],
                      attrs: { x: i.x, y: i.y, startAngle: a, r: u },
                      start: { endAngle: a },
                      end: { endAngle: o },
                    },
                  },
                ),
              },
            },
            n.map(function (t) {
              var e = t.key,
                n = t.children;
              return gn(
                'group',
                { key: e },
                n.map(function (t) {
                  var e = t.key,
                    n = t.xMin,
                    a = t.xMax,
                    o = t.yMin,
                    u = t.yMax,
                    s = t.color,
                    l = t.shape;
                  return gn('sector', {
                    key: e,
                    attrs: (0, m.Z)(
                      {
                        x: i.x,
                        y: i.y,
                        fill: s,
                        startAngle: n,
                        endAngle: a,
                        r0: o,
                        r: u,
                      },
                      l,
                    ),
                    animation: (0, k.b$)(
                      {
                        update: {
                          easing: 'linear',
                          duration: 450,
                          property: [
                            'x',
                            'y',
                            'startAngle',
                            'endAngle',
                            'r0',
                            'r',
                          ],
                        },
                      },
                      r,
                    ),
                  });
                }),
              );
            }),
          );
        },
        xr = function (t) {
          var e = t.coord,
            n = e.type;
          return gn('rect' === n ? yr : gr, (0, m.Z)({}, t));
        };
      function mr(t) {
        var e = t.xMin,
          n = t.xMax,
          r = t.yMin,
          i = t.yMax;
        return [
          { x: e, y: r },
          { x: n, y: r },
          { x: n, y: i },
          { x: e, y: i },
        ];
      }
      var kr = function (t) {
          var e = t.records,
            n = t.shape,
            r = t.showLabel,
            i = t.labelCfg,
            a = t.LabelView,
            o = !1;
          return gn(
            'group',
            null,
            e.map(function (t, u) {
              var s = t.key,
                l = t.children,
                c = u === e.length - 1,
                h = c ? t : e[u + 1],
                f = h.children,
                p = mr(f[0]),
                v = mr(f[f.length - 1]);
              o || (o = f[0].yMax > l[0].yMax), o && (p.reverse(), v.reverse());
              var d = l.map(function (t, e) {
                var r = mr(t);
                return (
                  o && r.reverse(),
                  c
                    ? 'pyramid' === n && (r = [fr(r[0], r[1]), r[2], r[3]])
                    : (0 === e && (r[0] = p[3]),
                      e === l.length - 1 && (r[1] = v[2])),
                  (0, m.Z)((0, m.Z)({}, t), {}, { points: r })
                );
              });
              return gn(
                'group',
                { key: s },
                d.map(function (t) {
                  var e = t.points,
                    n = t.color,
                    o = t.shape;
                  return gn(
                    'group',
                    null,
                    gn('polygon', {
                      attrs: (0, m.Z)({ points: e, fill: n }, o),
                    }),
                    r && a
                      ? gn(a, (0, m.Z)({ record: t, points: e }, i))
                      : null,
                  );
                }),
              );
            }),
          );
        },
        Mr = dr(u),
        Zr = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r() {
              return (0, c.Z)(this, r), n.apply(this, arguments);
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'getDefaultCfg',
                  value: function () {
                    return { geomType: 'point' };
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = e.coord,
                      r = this.mapping();
                    return gn(
                      t,
                      (0, m.Z)((0, m.Z)({}, e), {}, { coord: n, records: r }),
                    );
                  },
                },
              ]),
              r
            );
          })(Qn);
        },
        Sr = function (t) {
          var e = t.records,
            n = t.animation;
          return gn(
            'group',
            null,
            e.map(function (t) {
              var e = t.key,
                r = t.children;
              return gn(
                'group',
                { key: e },
                r.map(function (t) {
                  var e = t.x,
                    r = t.y,
                    i = t.size,
                    a = t.color,
                    o = t.shapeName,
                    u = t.shape;
                  if ('rect' === o) {
                    var s = (0, k.UM)(i) ? u.size : i;
                    return gn('rect', {
                      attrs: (0, m.Z)(
                        (0, m.Z)({ x: e - s, y: r - s, fill: a, stroke: a }, u),
                        {},
                        { width: 2 * s, height: 2 * s },
                      ),
                      animation: (0, k.b$)(
                        {
                          appear: { easing: 'linear', duration: 450 },
                          update: {
                            easing: 'linear',
                            duration: 450,
                            property: ['x', 'y', 'width', 'height', 'fill'],
                          },
                        },
                        n,
                      ),
                    });
                  }
                  return gn('circle', {
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        {
                          x: e,
                          y: r,
                          fill: 'circle' === o ? a : null,
                          stroke: 'hollowCircle' === o ? a : null,
                        },
                        u,
                      ),
                      {},
                      { r: (0, k.UM)(i) ? u.size : i },
                    ),
                    animation: (0, k.b$)(
                      {
                        appear: { easing: 'linear', duration: 450 },
                        update: {
                          easing: 'linear',
                          duration: 450,
                          property: ['x', 'y', 'r', 'fill'],
                        },
                      },
                      n,
                    ),
                  });
                }),
              );
            }),
          );
        },
        wr = Zr(Sr),
        br = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r(t) {
              var e;
              (0, c.Z)(this, r), (e = n.call(this, t)), (e.style = {});
              var i = e.props,
                a = i.chart,
                o = i.field,
                u = e.getScaleOption(t);
              return a.setScale(o, u), e;
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'willReceiveProps',
                  value: function (t) {
                    var e = this.props,
                      n = t.chart,
                      r = t.field,
                      i = this.getScaleOption(t),
                      a = this.getScaleOption(e);
                    (0, M.Z)(i, a) || n.setScale(r, i);
                  },
                },
                {
                  key: 'willMount',
                  value: function () {
                    this.updateCoord();
                  },
                },
                {
                  key: 'willUpdate',
                  value: function () {
                    this.updateCoord();
                  },
                },
                {
                  key: 'getScaleOption',
                  value: function (t) {
                    var e = t.type,
                      n = t.tickCount,
                      r = t.range,
                      i = t.mask,
                      a = t.formatter,
                      o = t.min,
                      u = t.max,
                      s = t.nice;
                    return {
                      type: e,
                      tickCount: n,
                      range: r,
                      mask: i,
                      formatter: a,
                      min: o,
                      max: u,
                      nice: s,
                    };
                  },
                },
                {
                  key: '_getDimType',
                  value: function () {
                    var t = this.props,
                      e = t.field,
                      n = t.chart,
                      r = n.getXScales(),
                      i = r.filter(function (t) {
                        return t.field === e;
                      });
                    return i.length > 0 ? 'x' : 'y';
                  },
                },
                {
                  key: 'getMaxBBox',
                  value: function (t, e) {
                    var n = this.context,
                      r = n.measureText,
                      i = e.labelOffset,
                      a = 0,
                      o = 0;
                    t.forEach(function (t) {
                      var n = t.labelStyle,
                        i = t.text,
                        u = r(i, (0, m.Z)((0, m.Z)({}, e.label), n));
                      (a = Math.max(a, u.width)), (o = Math.max(o, u.height));
                    });
                    var u = { width: a + i, height: o + i };
                    return u;
                  },
                },
                {
                  key: '_getPosition',
                  value: function () {
                    var t = this.props,
                      e = t.position,
                      n = t.coord;
                    if (e) return e;
                    var r = this._getDimType();
                    return n.transposed
                      ? 'x' === r
                        ? 'left'
                        : 'bottom'
                      : 'x' === r
                      ? 'bottom'
                      : 'left';
                  },
                },
                {
                  key: 'getTicks',
                  value: function () {
                    var t = this.props,
                      e = t.field,
                      n = t.chart,
                      r = n.getScale(e),
                      i = r.getTicks();
                    return (i = this._setTicksStyle(i)), i;
                  },
                },
                {
                  key: '_setTicksStyle',
                  value: function (t) {
                    var e = this,
                      n = this.props,
                      r = this.context,
                      i = r.theme,
                      a = r.px2hd,
                      o = n.style,
                      u = void 0 === o ? {} : o,
                      s = i.axis;
                    return (
                      (0, k.S6)(s, function (t, n) {
                        if (null !== u[n]) {
                          var r = (0, k.mf)(u[n]) ? void 0 : u[n];
                          (0, k.HD)(t) || (0, k.hj)(t)
                            ? (e.style[n] = a(r) || t)
                            : (e.style[n] = a((0, k.b$)((0, k.d9)(t), r)));
                        }
                      }),
                      t.map(function (e, n) {
                        var r = u.label,
                          i = u.grid,
                          o = s.label,
                          l = s.grid;
                        return (
                          (0, k.mf)(r) &&
                            (e.labelStyle = a(
                              (0, k.CD)({}, o, r(e.text, n, t)),
                            )),
                          (0, k.mf)(i) &&
                            (e.gridStyle = a(
                              (0, k.CD)({}, l, i(e.text, n, t.length)),
                            )),
                          e
                        );
                      })
                    );
                  },
                },
                {
                  key: 'convertTicks',
                  value: function (t) {
                    var e = this.props,
                      n = e.coord,
                      r = this._getDimType(),
                      i = 'x' === r ? 'y' : 'x';
                    return t.map(function (t) {
                      var e,
                        a,
                        o = n.convertPoint(
                          ((e = {}),
                          (0, x.Z)(e, r, t.value),
                          (0, x.Z)(e, i, 0),
                          e),
                        ),
                        u = n.convertPoint(
                          ((a = {}),
                          (0, x.Z)(a, r, t.value),
                          (0, x.Z)(a, i, 1),
                          a),
                        );
                      return (0, m.Z)((0, m.Z)({}, t), {}, { points: [o, u] });
                    });
                  },
                },
                {
                  key: 'measureLayout',
                  value: function () {
                    var t = this.props,
                      e = t.visible,
                      n = t.coord;
                    if (!1 === e) return null;
                    var r = this.getTicks(),
                      i = this.getMaxBBox(r, this.style),
                      a = n.isPolar,
                      o = this._getDimType(),
                      u = i.width,
                      s = i.height;
                    if (a)
                      return 'y' === o
                        ? null
                        : ['top', 'right', 'bottom', 'left'].map(function (t) {
                            return { position: t, width: u, height: s };
                          });
                    var l = this._getPosition();
                    return { position: l, width: u, height: s };
                  },
                },
                {
                  key: 'updateCoord',
                  value: function () {
                    var t = this.props,
                      e = t.chart,
                      n = this.measureLayout();
                    e.updateCoordFor(this, n);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = this.style,
                      r = e.visible,
                      i = e.coord;
                    if (!1 === r) return null;
                    var a = this.getTicks(),
                      o = this._getPosition(),
                      u = this._getDimType();
                    return gn(
                      t,
                      (0, m.Z)(
                        (0, m.Z)({}, e),
                        {},
                        {
                          style: n,
                          ticks: this.convertTicks(a),
                          coord: i,
                          position: o,
                          dimType: u,
                        },
                      ),
                    );
                  },
                },
              ]),
              r
            );
          })(l.Z);
        };
      function Cr(t, e, n) {
        var r = e.x - t.x,
          i = e.y - t.y,
          a = [r, i],
          o = R.Z.length(a),
          u = o + n,
          s = (r / o) * u,
          l = (i / o) * u;
        return { x: t.x + s, y: t.y + l };
      }
      function _r(t, e) {
        var n,
          r,
          i = [e.x - t.x, e.y - t.y];
        return (
          (n = i[0] > 0 ? 'left' : i[0] < 0 ? 'right' : 'center'),
          (r = i[1] > 0 ? 'top' : i[1] < 0 ? 'bottom' : 'middle'),
          { textAlign: n, textBaseline: r }
        );
      }
      var Dr = function (t) {
          var e = t.ticks,
            n = t.coord,
            r = t.style,
            i = n.center,
            a = r.grid,
            o = r.tickLine,
            u = r.line,
            s = r.labelOffset,
            l = r.label,
            c = e[0],
            h = c.points,
            f = h[h.length - 1],
            p = R.Z.length([f.x - i.x, f.y - i.y]);
          return gn(
            'group',
            null,
            a
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.gridStyle,
                    r = e[e.length - 1];
                  return gn('line', {
                    attrs: (0, m.Z)(
                      (0, m.Z)({ x1: i.x, y1: i.y, x2: r.x, y2: r.y }, a),
                      n,
                    ),
                  });
                })
              : null,
            o && o.length
              ? e.map(function (t) {
                  var e = t.points,
                    n = e[e.length - 1],
                    r = Cr(i, n, o.length);
                  return gn('line', {
                    attrs: (0, m.Z)({ x1: n.x, y1: n.y, x2: r.x, y2: r.y }, o),
                  });
                })
              : null,
            u
              ? gn('arc', { attrs: (0, m.Z)({ x: i.x, y: i.y, r: p }, u) })
              : null,
            l
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.text,
                    r = t.labelStyle,
                    a = e[e.length - 1],
                    o = Cr(i, a, s);
                  return gn('text', {
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        (0, m.Z)({ x: o.x, y: o.y, text: n }, _r(i, a)),
                        l,
                      ),
                      r,
                    ),
                  });
                })
              : null,
          );
        },
        Tr = function (t) {
          var e = t.ticks,
            n = t.coord,
            r = t.style,
            i = n.center,
            a = r.grid,
            o = r.tickLine,
            u = r.line,
            s = r.labelOffset,
            l = r.label;
          return gn(
            'group',
            null,
            a
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.gridStyle,
                    r = e[e.length - 1];
                  return gn('arc', {
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        {
                          x: i.x,
                          y: i.y,
                          r: R.Z.length([r.x - i.x, r.y - i.y]),
                        },
                        a,
                      ),
                      n,
                    ),
                  });
                })
              : null,
            o && o.length
              ? e.map(function (t) {
                  var e = t.points,
                    n = e[e.length - 1];
                  return gn('line', {
                    attrs: (0, m.Z)(
                      { x1: n.x, y1: n.y, x2: n.x - o.length, y2: n.y },
                      o,
                    ),
                  });
                })
              : null,
            u
              ? gn('line', {
                  attrs: (0, m.Z)(
                    {
                      x1: e[0].points[0].x,
                      y1: e[0].points[0].y,
                      x2: e[e.length - 1].points[0].x,
                      y2: e[e.length - 1].points[0].y,
                    },
                    u,
                  ),
                })
              : null,
            l
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.text,
                    r = t.labelStyle,
                    i = e[e.length - 1];
                  return gn('text', {
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        {
                          x: i.x - s,
                          y: i.y,
                          text: n,
                          textAlign: 'right',
                          textBaseline: 'middle',
                        },
                        l,
                      ),
                      r,
                    ),
                  });
                })
              : null,
          );
        },
        Yr = function (t) {
          var e = t.ticks,
            n = t.coord,
            r = t.style,
            i = n.left,
            a = n.top,
            o = n.right,
            u = r.grid,
            s = r.tickLine,
            l = r.line,
            c = r.labelOffset,
            h = r.label;
          return gn(
            'group',
            null,
            u
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.gridStyle,
                    r = e[0],
                    i = e[e.length - 1];
                  return gn('line', {
                    attrs: (0, m.Z)(
                      (0, m.Z)({ x1: r.x, y1: r.y, x2: i.x, y2: i.y }, u),
                      n,
                    ),
                  });
                })
              : null,
            s && s.length
              ? e.map(function (t) {
                  var e = t.points,
                    n = e[e.length - 1];
                  return gn('line', {
                    attrs: (0, m.Z)(
                      { x1: n.x, y1: n.y, x2: n.x, y2: n.y - s.length },
                      s,
                    ),
                  });
                })
              : null,
            l
              ? gn('line', {
                  attrs: (0, m.Z)({ x1: i, y1: a, x2: o, y2: a }, l),
                })
              : null,
            h
              ? e.map(function (t, e) {
                  var n = t.points,
                    r = t.text,
                    i = t.labelStyle,
                    a = n[n.length - 1];
                  return gn('text', {
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        {
                          x: a.x,
                          y: a.y - c,
                          textAlign: 'center',
                          textBaseline: 'bottom',
                          text: r,
                        },
                        h,
                      ),
                      i,
                    ),
                  });
                })
              : null,
          );
        },
        Ar = function (t, e) {
          var n = t.ticks,
            r = t.coord,
            i = t.style,
            a = t.animation,
            o = e.px2hd,
            u = r.left,
            s = r.right,
            l = r.bottom,
            c = i.grid,
            h = i.tickLine,
            f = i.line,
            p = i.labelOffset,
            v = i.label;
          return gn(
            'group',
            null,
            c
              ? n.map(function (t) {
                  var e = t.points,
                    n = t.tickValue,
                    r = t.gridStyle,
                    i = e[0],
                    a = e[e.length - 1];
                  return gn('line', {
                    key: n,
                    attrs: (0, m.Z)(
                      (0, m.Z)({ x1: i.x, y1: i.y, x2: a.x, y2: a.y }, c),
                      r,
                    ),
                  });
                })
              : null,
            h && h.length
              ? n.map(function (t) {
                  var e = t.points,
                    n = t.tickValue,
                    r = e[0];
                  return gn('line', {
                    key: n,
                    attrs: (0, m.Z)(
                      { x1: r.x, y1: r.y, x2: r.x, y2: r.y + o(h.length) },
                      h,
                    ),
                  });
                })
              : null,
            f
              ? gn('line', {
                  attrs: (0, m.Z)({ x1: u, y1: l, x2: s, y2: l }, f),
                })
              : null,
            v
              ? n.map(function (t, e) {
                  var r = t.points,
                    i = t.text,
                    o = t.tickValue,
                    u = t.labelStyle,
                    s = r[0],
                    l = u || v || {},
                    c = l.align,
                    h = void 0 === c ? 'center' : c,
                    f = (0, m.Z)(
                      (0, m.Z)(
                        { x: s.x, y: s.y + p, textBaseline: 'top', text: i },
                        v,
                      ),
                      u,
                    );
                  return (
                    'between' === h
                      ? 0 === e
                        ? (f.textAlign = 'start')
                        : e === n.length - 1
                        ? (f.textAlign = 'end')
                        : (f.textAlign = 'center')
                      : (f.textAlign = h),
                    gn('text', {
                      key: o,
                      attrs: f,
                      animation: a || {
                        appear: {
                          easing: 'linear',
                          duration: 300,
                          delay: 0,
                          property: ['fillOpacity'],
                          start: { fillOpacity: 0 },
                          end: { fillOpacity: 1 },
                        },
                        update: {
                          easing: 'linear',
                          duration: 450,
                          delay: 0,
                          property: ['x', 'y'],
                        },
                        leave: {
                          easing: 'linear',
                          duration: 450,
                          delay: 0,
                          property: ['fillOpacity'],
                          start: { fillOpacity: 1 },
                          end: { fillOpacity: 0 },
                        },
                      },
                    })
                  );
                })
              : null,
          );
        },
        Pr = function (t) {
          var e = t.ticks,
            n = t.coord,
            r = t.style,
            i = n.top,
            a = n.right,
            o = n.bottom,
            u = r.grid,
            s = r.tickLine,
            l = r.line,
            c = r.labelOffset,
            h = r.label;
          return gn(
            'group',
            null,
            u
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.gridStyle,
                    r = e[0],
                    i = e[e.length - 1];
                  return gn('line', {
                    attrs: (0, m.Z)(
                      (0, m.Z)({ x1: r.x, y1: r.y, x2: i.x, y2: i.y }, u),
                      n,
                    ),
                  });
                })
              : null,
            s && s.length
              ? e.map(function (t) {
                  var e = t.points,
                    n = e[e.length - 1];
                  return gn('line', {
                    attrs: (0, m.Z)(
                      { x1: n.x, y1: n.y, x2: n.x + s.length, y2: n.y },
                      s,
                    ),
                  });
                })
              : null,
            l
              ? gn('line', {
                  attrs: (0, m.Z)({ x1: a, y1: i, x2: a, y2: o }, l),
                })
              : null,
            h
              ? e.map(function (t, e) {
                  var n = t.points,
                    r = t.text,
                    i = t.labelStyle,
                    a = n[n.length - 1];
                  return gn('text', {
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        {
                          x: a.x + c,
                          y: a.y,
                          textAlign: 'left',
                          textBaseline: 'middle',
                          text: r,
                        },
                        h,
                      ),
                      i,
                    ),
                  });
                })
              : null,
          );
        },
        Or = function (t) {
          var e = t.ticks,
            n = t.coord,
            r = t.style,
            i = t.animation,
            a = n.left,
            o = n.top,
            u = n.bottom,
            s = r.grid,
            l = r.tickLine,
            c = r.line,
            h = r.labelOffset,
            f = r.label;
          return gn(
            'group',
            null,
            s
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.tickValue,
                    r = t.gridStyle,
                    i = e[0],
                    a = e[e.length - 1];
                  return gn('line', {
                    key: n,
                    attrs: (0, m.Z)(
                      (0, m.Z)({ x1: i.x, y1: i.y, x2: a.x, y2: a.y }, s),
                      r,
                    ),
                  });
                })
              : null,
            l && l.length
              ? e.map(function (t) {
                  var e = t.points,
                    n = t.tickValue,
                    r = e[0];
                  return gn('line', {
                    key: n,
                    attrs: (0, m.Z)(
                      { x1: r.x, y1: r.y, x2: r.x - l.length, y2: r.y },
                      l,
                    ),
                  });
                })
              : null,
            c
              ? gn('line', {
                  attrs: (0, m.Z)({ x1: a, y1: o, x2: a, y2: u }, c),
                })
              : null,
            f
              ? e.map(function (t, e) {
                  var n = t.tickValue,
                    r = t.points,
                    a = t.text,
                    o = t.labelStyle,
                    u = r[0];
                  return gn('text', {
                    key: n,
                    attrs: (0, m.Z)(
                      (0, m.Z)(
                        {
                          x: u.x - h,
                          y: u.y,
                          textAlign: 'right',
                          textBaseline: 'middle',
                          text: a,
                        },
                        f,
                      ),
                      o,
                    ),
                    animation: i || {
                      appear: {
                        easing: 'linear',
                        duration: 300,
                        delay: 0,
                        property: ['fillOpacity'],
                        start: { fillOpacity: 0 },
                        end: { fillOpacity: 1 },
                      },
                      update: {
                        easing: 'linear',
                        duration: 450,
                        delay: 0,
                        property: ['x', 'y'],
                      },
                      leave: {
                        easing: 'linear',
                        duration: 450,
                        delay: 0,
                        property: ['fillOpacity'],
                        start: { fillOpacity: 1 },
                        end: { fillOpacity: 0 },
                      },
                    },
                  });
                })
              : null,
          );
        };
      function Ir(t) {
        return t.coord.isPolar;
      }
      var Rr = function (t) {
          if (Ir(t)) {
            var e = t.dimType;
            return gn('x' === e ? Dr : Tr, (0, m.Z)({}, t));
          }
          var n = t.position;
          return gn(
            'right' === n ? Pr : 'left' === n ? Or : 'top' === n ? Yr : Ar,
            (0, m.Z)({}, t),
          );
        },
        Nr = br(Rr),
        Er = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r(t) {
              var e;
              return (
                (0, c.Z)(this, r),
                (e = n.call(this, t)),
                (e.state = { filtered: {}, items: [] }),
                e
              );
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'getOriginItems',
                  value: function () {
                    var t = this.props.chart;
                    return t.getLegendItems();
                  },
                },
                {
                  key: 'getItems',
                  value: function () {
                    var t,
                      e = this.props,
                      n = this.state,
                      r = n.items,
                      i = n.filtered,
                      a = (null === r || void 0 === r ? void 0 : r.length)
                        ? r
                        : (
                            null === (t = e.items) || void 0 === t
                              ? void 0
                              : t.length
                          )
                        ? e.items
                        : this.getOriginItems();
                    return a
                      ? a.map(function (t) {
                          var e = t.tickValue;
                          return (0,
                          m.Z)((0, m.Z)({}, t), {}, { filtered: i[e] });
                        })
                      : null;
                  },
                },
                {
                  key: 'getMaxItemBox',
                  value: function (t) {
                    var e = 0,
                      n = 0;
                    return (
                      (t.get('children') || []).forEach(function (t) {
                        var r = t.get('attrs'),
                          i = r.width,
                          a = r.height;
                        (e = Math.max(e, i)), (n = Math.max(n, a));
                      }),
                      { width: e, height: n }
                    );
                  },
                },
                {
                  key: '_init',
                  value: function () {
                    var t = this.props,
                      e = this.context,
                      n = t.layout,
                      r = t.width,
                      i = t.height,
                      a = t.position,
                      o = void 0 === a ? 'top' : a,
                      u = this.getItems();
                    if (u && u.length) {
                      var s = n.left,
                        l = n.top,
                        c = n.right,
                        h = n.bottom,
                        f = n.width,
                        p = n.height,
                        v = e.px2hd(r) || f,
                        d = (0, xn.vq)(this, this.render(), !1),
                        y = this.getMaxItemBox(d),
                        g = y.width,
                        x = y.height,
                        m = Math.floor(v / g),
                        k = u.length,
                        M = Math.ceil(k / m),
                        Z = v / m,
                        S = x * M,
                        w = {
                          left: s,
                          top: l,
                          width: v,
                          height: void 0,
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        };
                      1 === M && (w.justifyContent = 'space-between'),
                        'top' === o && (w.height = i || S),
                        'left' === o &&
                          ((w.flexDirection = 'column'),
                          (w.justifyContent = 'center'),
                          (w.width = g),
                          (w.height = i || p)),
                        'right' === o &&
                          ((w.flexDirection = 'column'),
                          (w.alignItems = 'flex-start'),
                          (w.justifyContent = 'center'),
                          (w.width = g),
                          (w.height = i || p),
                          (w.left = c - g)),
                        'bottom' === o &&
                          ((w.top = h - S), (w.height = i || S)),
                        this.setState({ items: u, itemWidth: Z, style: w }),
                        (this.style = w),
                        d.remove();
                    }
                  },
                },
                {
                  key: 'updateCoord',
                  value: function () {
                    var t = this.context,
                      e = this.props,
                      n = this.style,
                      r = e.position,
                      i = void 0 === r ? 'top' : r,
                      a = e.margin,
                      o = void 0 === a ? '30px' : a,
                      u = e.chart,
                      s = n.width,
                      l = n.height,
                      c = t.px2hd(o);
                    u.updateCoordFor(this, {
                      position: i,
                      width: s + c,
                      height: l + c,
                    });
                  },
                },
                {
                  key: 'willMount',
                  value: function () {
                    var t = this.getItems();
                    t && t.length && (this._init(), this.updateCoord());
                  },
                },
                {
                  key: 'didMount',
                  value: function () {
                    this._initEvent();
                  },
                },
                {
                  key: 'willUpdate',
                  value: function () {
                    var t = this.getItems();
                    t && t.length && this.updateCoord();
                  },
                },
                {
                  key: '_initEvent',
                  value: function () {
                    var t = this,
                      e = this.context,
                      n = this.props,
                      r = this.container,
                      i = e.canvas,
                      a = n.chart;
                    i.on('click', function (e) {
                      var n = e.points,
                        i = n[0],
                        o = r.getBBox();
                      if ((0, Pn.qz)(o, i)) {
                        var u = (0, Pn.Fs)('legend-item', r);
                        if (u.length) {
                          var s = (0, k.sE)(u, function (t) {
                            var e = t.getBBox();
                            return (0, Pn.qz)(e, i);
                          });
                          if (s) {
                            var l = s.get('data-item');
                            if (l) {
                              var c = l.field,
                                h = l.tickValue,
                                f = t.state.filtered,
                                p = (0, m.Z)(
                                  (0, m.Z)({}, f),
                                  {},
                                  (0, x.Z)({}, h, !f[h]),
                                );
                              t.setState({ filtered: p }),
                                a.filter(c, function (t) {
                                  return !p[t];
                                });
                            }
                          }
                        }
                      }
                    });
                  },
                },
                {
                  key: 'setItems',
                  value: function (t) {
                    this.setState({ items: t });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = this.state,
                      r = this.getItems();
                    if (!r || !r.length) return null;
                    var i = n.itemWidth,
                      a = n.style;
                    return gn(
                      t,
                      (0, m.Z)(
                        (0, m.Z)({}, e),
                        {},
                        {
                          items: r,
                          itemWidth: i,
                          style: (0, m.Z)((0, m.Z)({}, a), e.style),
                        },
                      ),
                    );
                  },
                },
              ]),
              r
            );
          })(l.Z);
        },
        jr = function (t) {
          var e = t.type,
            n = t.color;
          return gn('square' === e ? 'rect' : 'circle', {
            style: { width: '12px', height: '12px', marginRight: '10px' },
            attrs: { fill: n },
          });
        },
        Br = function (t) {
          var e = t.items,
            n = t.itemWidth,
            r = t.itemFormatter,
            i = t.style,
            a = t.marker,
            o = void 0 === a ? 'circle' : a,
            u = t.nameStyle,
            s = t.valueStyle,
            l = function (t) {
              return (0, k.mf)(r) ? ': '.concat(r(t)) : ': '.concat(t);
            };
          return gn(
            'group',
            { style: i },
            e.map(function (t) {
              var e = t.color,
                r = t.name,
                i = t.value,
                a = t.filtered;
              return gn(
                'group',
                {
                  className: 'legend-item',
                  style: {
                    width: n,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: ['6px', '6px', '6px', 0],
                  },
                  'data-item': t,
                },
                gn(jr, { color: a ? '#bfbfbf' : e, type: o }),
                gn('text', {
                  attrs: (0, m.Z)(
                    { fill: a ? '#bfbfbf' : '#808080', text: r },
                    u,
                  ),
                }),
                i
                  ? gn('text', {
                      attrs: (0, m.Z)({ fill: '#808080', text: l(i) }, s),
                    })
                  : null,
              );
            }),
          );
        },
        zr = Er(Br);
      function Lr(t, e) {
        var n = t.minX,
          r = t.maxX,
          i = t.minY,
          a = t.maxY,
          o = e.x,
          u = e.y;
        return n <= o && r >= o && i <= u && a >= u;
      }
      var Hr = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r(t) {
              var e;
              return (
                (0, c.Z)(this, r),
                (e = n.call(this, t)),
                (e.triggerRef = {}),
                (e.state = {}),
                e
              );
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'willMount',
                  value: function () {
                    (0, C.Z)((0, _.Z)(r.prototype), 'willMount', this).call(
                      this,
                    ),
                      this.getGuideBBox();
                  },
                },
                {
                  key: 'didMount',
                  value: function () {
                    var t = this,
                      e = this.context,
                      n = this.props,
                      r = e.canvas,
                      i = n.onClick;
                    r.on('click', function (e) {
                      var n = e.points,
                        r = t.triggerRef.current;
                      if (r && !r.isDestroyed()) {
                        var a = r.getBBox();
                        Lr(a, n[0]) && ((e.shape = r), i && i(e));
                      }
                    });
                  },
                },
                {
                  key: 'getGuideBBox',
                  value: function () {
                    var t = (0, xn.vq)(this, this.render(), !1),
                      e = t.get('attrs'),
                      n = e.x,
                      r = e.y,
                      i = e.width,
                      a = e.height,
                      o = {
                        minX: n,
                        minY: r,
                        maxX: n + i,
                        maxY: r + a,
                        width: i,
                        height: a,
                      };
                    this.setState({ guideBBox: o }), t.destroy();
                  },
                },
                {
                  key: 'parseReplaceStr',
                  value: function (t, e) {
                    var n = { min: 0, max: 1, median: 0.5 };
                    if (!(0, k.UM)(n[t])) return n[t];
                    if (
                      (0, k.HD)(t) &&
                      -1 != t.indexOf('%') &&
                      !isNaN(Number(t.slice(0, -1)))
                    ) {
                      var r = Number(t.slice(0, -1)),
                        i = r / 100;
                      return i;
                    }
                    return e.scale(t);
                  },
                },
                {
                  key: 'parsePoint',
                  value: function (t) {
                    var e = this.props,
                      n = e.chart,
                      r = e.coord,
                      i = n.getXScales()[0],
                      a = n.getYScales()[0],
                      o = this.parseReplaceStr(t[i.field], i),
                      u = this.parseReplaceStr(t[a.field], a);
                    return r.convertPoint({ x: o, y: u });
                  },
                },
                {
                  key: 'convertPoints',
                  value: function (t) {
                    var e = this;
                    return t.map(function (t) {
                      return e.parsePoint(t);
                    });
                  },
                },
                {
                  key: 'getGuideTheme',
                  value: function () {
                    var t = this.context,
                      e = t.theme;
                    return e.guide;
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = this.context,
                      r = e.coord,
                      i = e.records,
                      a = void 0 === i ? [] : i,
                      o = e.animation,
                      u = e.chart,
                      s = n.width,
                      l = n.height,
                      c = this.convertPoints(a),
                      h = this.getGuideTheme(),
                      f = this.state,
                      p = f.guideWidth,
                      v = f.guideHeight,
                      d = f.guideBBox,
                      y = o;
                    return (
                      (0, k.mf)(o) && (y = o(c, u)),
                      gn(
                        t,
                        (0, m.Z)(
                          (0, m.Z)(
                            {
                              triggerRef: this.triggerRef,
                              points: c,
                              theme: h,
                              coord: r,
                            },
                            e,
                          ),
                          {},
                          {
                            canvasWidth: s,
                            canvasHeight: l,
                            guideWidth: p,
                            guideHeight: v,
                            guideBBox: d,
                            animation: y,
                          },
                        ),
                      )
                    );
                  },
                },
              ]),
              r
            );
          })(l.Z);
        },
        Fr = function (t) {
          var e = t.theme,
            n = void 0 === e ? {} : e,
            r = (0, k.b$)((0, m.Z)({}, n.text), t),
            i = r.points,
            a = r.style,
            o = r.offsetX,
            u = r.offsetY,
            s = r.content,
            l = r.animation,
            c = i[0] || {},
            h = c.x,
            f = c.y,
            p = h + (o || 0),
            v = f + (u || 0);
          return gn('text', {
            attrs: (0, m.Z)({ text: s, x: p, y: v }, a),
            animation: (0, k.b$)(
              {
                update: {
                  easing: 'linear',
                  duration: 450,
                  property: ['x', 'y'],
                },
              },
              l,
            ),
          });
        },
        Ur = function (t) {
          var e = t.theme,
            n = (0, k.b$)((0, m.Z)({}, e.point), t),
            r = n.points,
            i = n.style,
            a = n.offsetX,
            o = n.offsetY,
            u = n.animation,
            s = r[0] || {},
            l = s.x,
            c = s.y,
            h = l + (a || 0),
            f = c + (o || 0);
          return gn(
            'group',
            null,
            gn('circle', { attrs: (0, m.Z)({ x: h, y: f }, i), animation: u }),
          );
        },
        Xr = function (t) {
          var e = t.theme,
            n = void 0 === e ? {} : e,
            r = (0, k.b$)((0, m.Z)({}, n.line), t),
            i = r.points,
            a = r.style,
            o = r.offsetX,
            u = r.offsetY,
            s = r.animation,
            l = i[0] || {},
            c = l.x,
            h = l.y,
            f = i[1] || {},
            p = f.x,
            v = f.y,
            d = c + ((0, k.kJ)(o) ? o[0] || 0 : o || 0),
            y = h + ((0, k.kJ)(u) ? u[0] || 0 : u || 0),
            g = p + ((0, k.kJ)(o) ? o[1] || 0 : o || 0),
            x = v + ((0, k.kJ)(u) ? u[1] || 0 : u || 0);
          return gn(
            'group',
            null,
            gn('line', {
              attrs: (0, m.Z)({ x1: d, y1: y, x2: g, y2: x }, a),
              animation: s,
            }),
          );
        },
        Vr = function (t) {
          var e = t.theme,
            n = void 0 === e ? {} : e,
            r = (0, k.b$)((0, m.Z)({}, n.line), t),
            i = r.coord,
            a = r.points,
            o = r.style,
            u = r.animation,
            s = a[0] || {},
            l = a[1] || {},
            c = i.center,
            h = Math.sqrt(
              (s.x - c.x) * (s.x - c.x) + (s.y - c.y) * (s.y - c.y),
            ),
            f = Math.atan2(s.y - c.y, s.x - c.x),
            p = Math.atan2(l.y - c.y, l.x - c.x);
          return gn(
            'group',
            null,
            gn('arc', {
              attrs: (0, m.Z)(
                { x: c.x, y: c.y, r: h, startAngle: f, endAngle: p },
                o,
              ),
              animation: u,
            }),
          );
        },
        Wr = function (t) {
          var e = t.theme,
            n = void 0 === e ? {} : e,
            r = (0, k.b$)((0, m.Z)({}, n.rect), t),
            i = r.points,
            a = r.style,
            o = r.animation,
            u = i[0] || {},
            s = i[1] || {};
          return gn(
            'group',
            null,
            gn('rect', {
              attrs: (0, m.Z)(
                {
                  x: Math.min(u.x, s.x),
                  y: Math.min(u.y, s.y),
                  width: Math.abs(s.x - u.x),
                  height: Math.abs(u.y - s.y),
                },
                a,
              ),
              animation: o,
            }),
          );
        },
        $r = { offsetX: 0, offsetY: 0, points: [], src: '' },
        qr = { height: '20px', width: '20px' },
        Gr = function (t) {
          var e = (0, k.b$)({}, $r, t),
            n = e.points,
            r = e.style,
            i = e.attrs,
            a = e.offsetX,
            o = e.offsetY,
            u = e.src,
            s = e.animation,
            l = n[0] || {},
            c = l.x,
            h = l.y,
            f = i.height,
            p = void 0 === f ? 0 : f,
            v = i.width,
            d = void 0 === v ? 0 : v,
            y = c + (a || 0) - p / 2,
            g = h + (o || 0) - d / 2;
          return gn(
            'group',
            { style: r },
            gn('image', {
              attrs: (0, m.Z)(
                (0, m.Z)((0, m.Z)({}, qr), i),
                {},
                { height: p + 'px', width: d + 'px', x: y, y: g, src: u },
              ),
              animation: (0, k.b$)(
                {
                  update: {
                    easing: 'linear',
                    duration: 450,
                    property: ['x', 'y'],
                  },
                },
                s,
              ),
            }),
          );
        },
        Jr = {
          offsetX: 0,
          offsetY: 0,
          points: [],
          direct: 'tl',
          side: 6,
          autoAdjust: !0,
        },
        Kr = {
          container: { fill: '#1677FF', radius: 2, padding: [3, 5] },
          text: { fontSize: '22px', fill: '#fff' },
          arrow: { fill: '#1677FF' },
        },
        Qr = function (t) {
          var e = (0, m.Z)((0, m.Z)({}, Jr), t),
            n = e.points,
            r = e.content,
            i = e.offsetX,
            a = e.offsetY,
            o = e.direct,
            u = e.side,
            s = e.autoAdjust,
            l = e.canvasWidth,
            c = e.canvasHeight,
            h = e.guideBBox,
            f = e.background,
            p = e.textStyle,
            v = n[0] || {},
            d = v.x,
            y = v.y,
            g = h || {},
            x = g.width,
            k = g.height,
            M = d + (i || 0),
            Z = y + (a || 0),
            S = function (t) {
              var e = o,
                n = t.x,
                r = t.y,
                i = e[0],
                a = e[1];
              't' === i && r - u - k < 0
                ? (i = 'b')
                : 'b' === i && r + u + k > c && (i = 't');
              var s = 'c' === i ? u : 0;
              return (
                'l' === a && n - s - x < 0
                  ? (a = 'r')
                  : 'r' === a && n + s + x > l
                  ? (a = 'l')
                  : 'c' === a &&
                    (x / 2 + n + s > l
                      ? (a = 'l')
                      : n - x / 2 - s < 0 && (a = 'r')),
                (e = i + a),
                e
              );
            },
            w = function (t) {
              var e = [],
                n = h || {},
                r = n.minX,
                i = n.minY;
              return (
                'tl' === t
                  ? ((e = [
                      { x: r, y: i - 1 },
                      { x: r, y: i + u },
                      { x: r - u - 1, y: i - 1 },
                    ]),
                    (M -= x || 0),
                    (Z = Z - (k || 0) - u))
                  : 'cl' === t
                  ? ((e = [
                      { x: r - 1, y: i - 1 - u / 2 },
                      { x: r - 1, y: i + 1 + u / 2 },
                      { x: r + u, y: i },
                    ]),
                    (M = M - (x || 0) - u),
                    (Z -= k / 2 || 0))
                  : 'bl' === t
                  ? ((e = [
                      { x: r, y: -u + i },
                      { x: r - u - 1, y: i + 1 },
                      { x: r, y: i + 1 },
                    ]),
                    (M -= x || 0),
                    (Z += u))
                  : 'bc' === t
                  ? (e = [
                      { x: x / 2 + r, y: -u + i },
                      { x: (x - u) / 2 + r - 1, y: i + 1 },
                      { x: (x + u) / 2 + r + 1, y: i + 1 },
                    ])
                  : 'br' === t
                  ? ((e = [
                      { x: r, y: i - u },
                      { x: r, y: i + 1 },
                      { x: r + u + 1, y: i + 1 },
                    ]),
                    (Z += u))
                  : 'cr' === t
                  ? ((e = [
                      { x: r - u, y: i },
                      { x: r + 1, y: i - 1 - u / 2 },
                      { x: r + 1, y: i + 1 + u / 2 },
                    ]),
                    (M += u),
                    (Z -= k / 2 || 0))
                  : 'tr' === t
                  ? ((e = [
                      { x: r, y: i + u },
                      { x: r, y: i - 1 },
                      { x: u + r + 1, y: i - 1 },
                    ]),
                    (Z = Z - (k || 0) - u))
                  : 'tc' === t &&
                    ((e = [
                      { x: r - 1 - u / 2, y: i - 1 },
                      { x: r + 1 + u / 2, y: i - 1 },
                      { x: r, y: i + u },
                    ]),
                    (M -= x / 2 || 0),
                    (Z = Z - (k || 0) - u)),
                e
              );
            },
            b = s ? S(n[0]) : o,
            C = w(b);
          return gn(
            'group',
            {
              attrs: (0, m.Z)(
                { fill: Kr.container.fill, radius: Kr.container.radius },
                f,
              ),
              style: (0, m.Z)(
                { left: M, top: Z, padding: Kr.container.padding },
                f,
              ),
            },
            gn('text', {
              attrs: (0, m.Z)(
                { text: r, fontSize: Kr.text.fontSize, fill: Kr.text.fill },
                p,
              ),
            }),
            h &&
              gn('polygon', {
                attrs: {
                  points: C,
                  fill:
                    (null === f || void 0 === f ? void 0 : f.fill) ||
                    Kr.arrow.fill,
                },
              }),
          );
        },
        ti = function () {
          return null;
        },
        ei = Hr(Fr),
        ni = Hr(Ur),
        ri = Hr(Xr),
        ii = Hr(Vr),
        ai = Hr(Wr),
        oi = Hr(Gr),
        ui = Hr(Qr),
        si = Hr(ti),
        li = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r(t) {
              var e;
              return (
                (0, c.Z)(this, r),
                (e = n.call(this, t)),
                (e.isPressEvent = !1),
                (e.state = { records: null }),
                e
              );
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'updateCoord',
                  value: function () {
                    var t = this.props,
                      e = this.context,
                      n = t.padding,
                      r = void 0 === n ? '10px' : n,
                      i = t.chart;
                    i.updateCoordFor(this, {
                      position: 'top',
                      width: 0,
                      height: e.px2hd(r),
                    });
                  },
                },
                {
                  key: 'willMount',
                  value: function () {
                    this.updateCoord();
                  },
                },
                {
                  key: 'didMount',
                  value: function () {
                    this._initShow(), this._initEvent();
                  },
                },
                {
                  key: 'didUpdate',
                  value: function () {
                    this.isPressEvent
                      ? (this.isPressEvent = !1)
                      : this._initShow();
                  },
                },
                {
                  key: '_initShow',
                  value: function () {
                    var t = this.props,
                      e = t.chart,
                      n = t.defaultItem;
                    if (n) {
                      var r = e.getPosition(n);
                      this.show(r);
                    }
                  },
                },
                {
                  key: '_initEvent',
                  value: function () {
                    var t = this,
                      e = this.context,
                      n = this.props,
                      r = e.canvas,
                      i = n.triggerOn,
                      a = void 0 === i ? 'press' : i,
                      o = n.triggerOff,
                      u = void 0 === o ? 'pressend' : o,
                      s = n.alwaysShow,
                      l = void 0 !== s && s;
                    r.on(a, function (e) {
                      var n = e.points;
                      (t.isPressEvent = !0), t.show(n[0]);
                    }),
                      r.on(u, function (e) {
                        l || t.hide();
                      });
                  },
                },
                {
                  key: 'show',
                  value: function (t) {
                    var e = this.props,
                      n = e.chart,
                      r = e.coord,
                      i = e.onChange,
                      a = n.getSnapRecords(t);
                    if (a && a.length) {
                      var o = n.getLegendItems(),
                        u = a[0],
                        s = u.origin,
                        l = u.xField,
                        c = u.yField,
                        h = n.getScale(l),
                        f = n.getScale(c),
                        p = r.convertPoint({
                          x: h.scale(s[l]),
                          y: f.scale(s[c]),
                        }),
                        v = a.map(function (t) {
                          var e = t.origin,
                            n = t.xField,
                            r = t.yField,
                            i = f.getText(e[r]),
                            a = f.alias;
                          if (!a && ((a = h.getText(e[n])), o && o.length)) {
                            var u = (0, k.sE)(o, function (t) {
                              var n = t.field,
                                r = t.tickValue;
                              return e[n] === r;
                            });
                            u && u.name && (a = u.name);
                          }
                          return (0,
                          m.Z)((0, m.Z)({}, t), {}, { name: a, value: i });
                        });
                      (0, k.kJ)(v) &&
                        v.length &&
                        (this.setState({ point: p, records: v }),
                        (0, k.mf)(i) && i(v));
                    }
                  },
                },
                {
                  key: 'hide',
                  value: function () {
                    this.setState({ point: null, records: null });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = this.state,
                      r = e.visible;
                    if (!1 === r) return null;
                    var i = n.point,
                      a = n.records;
                    return a && a.length
                      ? gn(
                          t,
                          (0, m.Z)(
                            (0, m.Z)({}, e),
                            {},
                            { point: i, records: a },
                          ),
                        )
                      : null;
                  },
                },
              ]),
              r
            );
          })(l.Z);
        },
        ci = n(85061);
      function hi() {
        var t = { current: null };
        return t;
      }
      var fi = {
        showTitle: !1,
        showCrosshairs: !1,
        crosshairsType: 'y',
        crosshairsStyle: { stroke: 'rgba(0, 0, 0, 0.25)', lineWidth: '2px' },
        showTooltipMarker: !1,
        tooltipMarkerStyle: { fill: '#fff', lineWidth: '3px' },
        background: {
          radius: '4px',
          fill: 'rgba(0, 0, 0, 0.65)',
          padding: ['6px', '10px'],
        },
        titleStyle: {
          fontSize: '24px',
          fill: '#fff',
          textAlign: 'start',
          textBaseline: 'top',
        },
        nameStyle: {
          fontSize: '24px',
          fill: 'rgba(255, 255, 255, 0.65)',
          textAlign: 'start',
          textBaseline: 'middle',
        },
        valueStyle: {
          fontSize: '24px',
          fill: '#fff',
          textAlign: 'start',
          textBaseline: 'middle',
        },
        joinString: ': ',
        showItemMarker: !0,
        itemMarkerStyle: {
          width: '12px',
          radius: '6px',
          symbol: 'circle',
          lineWidth: '2px',
          stroke: '#fff',
        },
        layout: 'horizontal',
        snap: !1,
        xTipTextStyle: { fontSize: '24px', fill: '#fff' },
        yTipTextStyle: { fontSize: '24px', fill: '#fff' },
        xTipBackground: {
          radius: '4px',
          fill: 'rgba(0, 0, 0, 0.65)',
          padding: ['6px', '10px'],
          marginLeft: '-50%',
          marginTop: '6px',
        },
        yTipBackground: {
          radius: '4px',
          fill: 'rgba(0, 0, 0, 0.65)',
          padding: ['6px', '10px'],
          marginLeft: '-100%',
          marginTop: '-50%',
        },
      };
      function pi(t, e) {
        return void 0 === t || ('string' === typeof t && -1 !== t.indexOf(e));
      }
      var vi = function (t) {
          var e = t.records,
            n = t.coord,
            r = t.context,
            i = n.convertPoint({ x: 1, y: 1 }),
            a = r.px2hd('6px'),
            o = [].concat(
              (0, ci.Z)(
                e.map(function (t) {
                  return t.xMin;
                }),
              ),
              (0, ci.Z)(
                e.map(function (t) {
                  return t.xMax;
                }),
              ),
            ),
            u = [].concat(
              (0, ci.Z)(
                e.map(function (t) {
                  return t.yMin;
                }),
              ),
              (0, ci.Z)(
                e.map(function (t) {
                  return t.yMax;
                }),
              ),
            );
          n.transposed ? o.push(i.x) : u.push(i.y);
          var s = Math.min.apply(null, o),
            l = Math.max.apply(null, o),
            c = Math.min.apply(null, u),
            h = Math.max.apply(null, u),
            f = n.transposed ? s : s - a,
            p = n.transposed ? c - a : c,
            v = n.transposed ? l - s : l - s + 2 * a,
            d = n.transposed ? h - c + 2 * a : h - c;
          return gn('rect', {
            attrs: {
              x: f,
              y: p,
              width: v,
              height: d,
              fill: '#CCD6EC',
              opacity: 0.3,
            },
          });
        },
        di = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t) {
            var r;
            return (
              (0, c.Z)(this, n),
              (r = e.call(this, t)),
              (r.rootRef = hi()),
              (r.arrowRef = hi()),
              r
            );
          }
          return (
            (0, h.Z)(n, [
              {
                key: '_position',
                value: function () {
                  var t = this.props,
                    e = this.context,
                    n = this.rootRef,
                    r = this.arrowRef,
                    i = n.current;
                  if (i) {
                    var a = t.records,
                      o = t.coord,
                      u = e.px2hd('6px'),
                      s = a[0],
                      l = s.x,
                      c = o.left,
                      h = o.width,
                      f = i.get('attrs'),
                      p = f.y,
                      v = f.width,
                      d = f.height,
                      y = f.radius,
                      g = v / 2,
                      x = Math.min(Math.max(l - c - g, -u - y), h - v + u + y),
                      m = Math.min(p, d + u);
                    i.moveTo(x, -m), r.current.moveTo(0, d - m);
                  }
                },
              },
              {
                key: 'didMount',
                value: function () {
                  this._position();
                },
              },
              {
                key: 'didUpdate',
                value: function () {
                  this._position();
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = this.context,
                    n = t.records,
                    r = t.point,
                    i = t.coord,
                    a = i.left,
                    o = i.top,
                    u = i.right,
                    s = i.bottom,
                    l = n[0],
                    c = r.x,
                    h = r.y,
                    f = l.name,
                    p = l.value,
                    v = t.background,
                    d = t.showTooltipMarker,
                    y = void 0 === d ? fi.showTooltipMarker : d,
                    g = t.showItemMarker,
                    x = void 0 === g ? fi.showItemMarker : g,
                    M = t.itemMarkerStyle,
                    Z = t.nameStyle,
                    S = t.valueStyle,
                    w = t.joinString,
                    b = void 0 === w ? fi.joinString : w,
                    C = t.showCrosshairs,
                    _ = void 0 === C ? fi.showCrosshairs : C,
                    D = t.crosshairsStyle,
                    T = t.crosshairsType,
                    Y = void 0 === T ? fi.crosshairsType : T,
                    A = t.snap,
                    P = void 0 === A ? fi.snap : A,
                    O = t.tooltipMarkerStyle,
                    I = void 0 === O ? fi.tooltipMarkerStyle : O,
                    R = t.showXTip,
                    N = t.showYTip,
                    E = t.xTip,
                    j = t.yTip,
                    B = t.xTipTextStyle,
                    z = void 0 === B ? fi.xTipTextStyle : B,
                    L = t.yTipTextStyle,
                    H = void 0 === L ? fi.yTipTextStyle : L,
                    F = t.xTipBackground,
                    U = void 0 === F ? fi.xTipBackground : F,
                    X = t.yTipBackground,
                    V = void 0 === X ? fi.yTipBackground : X,
                    W = t.custom,
                    $ = void 0 !== W && W,
                    q = (0, m.Z)((0, m.Z)({}, M), fi.itemMarkerStyle),
                    G = (0, m.Z)((0, m.Z)({}, fi.background), v),
                    J = e.px2hd('6px');
                  return gn(
                    'group',
                    null,
                    gn(
                      'group',
                      { style: { left: a, top: o } },
                      !$ &&
                        gn(
                          'group',
                          { ref: this.rootRef, style: G, attrs: G },
                          gn(
                            'group',
                            {
                              style: {
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                padding: [0, 0, 0, '6px'],
                              },
                            },
                            n.map(function (t) {
                              var e = t.name,
                                n = t.value;
                              return gn(
                                'group',
                                {
                                  style: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: [0, '6px', 0, 0],
                                  },
                                },
                                x
                                  ? gn('marker', {
                                      style: {
                                        width: q.width,
                                        marginRight: '6px',
                                      },
                                      attrs: (0, m.Z)(
                                        (0, m.Z)({}, q),
                                        {},
                                        { fill: t.color },
                                      ),
                                    })
                                  : null,
                                gn('text', {
                                  attrs: (0, m.Z)(
                                    (0, m.Z)((0, m.Z)({}, fi.nameStyle), Z),
                                    {},
                                    { text: n ? ''.concat(e).concat(b) : e },
                                  ),
                                }),
                                gn('text', {
                                  attrs: (0, m.Z)(
                                    (0, m.Z)((0, m.Z)({}, fi.valueStyle), S),
                                    {},
                                    { text: n },
                                  ),
                                }),
                              );
                            }),
                          ),
                        ),
                      gn('polygon', {
                        ref: this.arrowRef,
                        attrs: {
                          points: [
                            { x: c - J, y: o },
                            { x: c + J, y: o },
                            { x: c, y: o + J },
                          ],
                          fill: G.fill,
                        },
                      }),
                      y ? gn(vi, { coord: i, context: e, records: n }) : null,
                      P
                        ? n.map(function (t) {
                            var e = t.x,
                              n = t.y,
                              r = t.color,
                              i = t.shape;
                            return gn('circle', {
                              attrs: (0, m.Z)(
                                (0, m.Z)(
                                  { x: e, y: n, r: '6px', stroke: r },
                                  i,
                                ),
                                I,
                              ),
                            });
                          })
                        : null,
                      _
                        ? gn(
                            'group',
                            null,
                            pi(Y, 'x')
                              ? gn('line', {
                                  attrs: (0, m.Z)(
                                    (0, m.Z)(
                                      { x1: a, y1: h, x2: u, y2: h },
                                      fi.crosshairsStyle,
                                    ),
                                    D,
                                  ),
                                })
                              : null,
                            pi(Y, 'y')
                              ? gn('line', {
                                  attrs: (0, m.Z)(
                                    (0, m.Z)(
                                      { x1: c, y1: o, x2: c, y2: s },
                                      fi.crosshairsStyle,
                                    ),
                                    D,
                                  ),
                                })
                              : null,
                          )
                        : null,
                    ),
                    R &&
                      gn(
                        'group',
                        {
                          style: (0, m.Z)(
                            (0, m.Z)({ left: c, top: s }, fi.xTipBackground),
                            U,
                          ),
                          attrs: (0, m.Z)((0, m.Z)({}, fi.xTipBackground), U),
                        },
                        gn('text', {
                          attrs: (0, m.Z)(
                            (0, m.Z)((0, m.Z)({}, fi.xTipTextStyle), z),
                            {},
                            { text: (0, k.mf)(E) ? E(f) : f },
                          ),
                        }),
                      ),
                    N &&
                      gn(
                        'group',
                        {
                          style: (0, m.Z)(
                            (0, m.Z)({ left: a, top: h }, fi.yTipBackground),
                            V,
                          ),
                          attrs: (0, m.Z)((0, m.Z)({}, fi.yTipBackground), V),
                        },
                        gn('text', {
                          attrs: (0, m.Z)(
                            (0, m.Z)((0, m.Z)({}, fi.yTipTextStyle), H),
                            {},
                            { text: (0, k.mf)(j) ? j(p) : p },
                          ),
                        }),
                      ),
                  );
                },
              },
            ]),
            n
          );
        })(l.Z),
        yi = li(di),
        gi = n(32059);
      function xi(t) {
        var e = 0,
          n = t.children,
          r = n && n.length;
        if (r) while (--r >= 0) e += n[r].value;
        else e = 1;
        t.value = e;
      }
      function mi() {
        return this.eachAfter(xi);
      }
      var ki = n(74694);
      function Mi(t, e) {
        var n;
        if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (0, ki.Z)(t)) ||
            (e && t && 'number' === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var a,
          o = !0,
          u = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (o = t.done), t;
          },
          e: function (t) {
            (u = !0), (a = t);
          },
          f: function () {
            try {
              o || null == n['return'] || n['return']();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function Zi(t, e) {
        var n,
          r = -1,
          i = Mi(this);
        try {
          for (i.s(); !(n = i.n()).done; ) {
            var a = n.value;
            t.call(e, a, ++r, this);
          }
        } catch (o) {
          i.e(o);
        } finally {
          i.f();
        }
        return this;
      }
      function Si(t, e) {
        var n,
          r,
          i = this,
          a = [i],
          o = -1;
        while ((i = a.pop()))
          if ((t.call(e, i, ++o, this), (n = i.children)))
            for (r = n.length - 1; r >= 0; --r) a.push(n[r]);
        return this;
      }
      function wi(t, e) {
        var n,
          r,
          i,
          a = this,
          o = [a],
          u = [],
          s = -1;
        while ((a = o.pop()))
          if ((u.push(a), (n = a.children)))
            for (r = 0, i = n.length; r < i; ++r) o.push(n[r]);
        while ((a = u.pop())) t.call(e, a, ++s, this);
        return this;
      }
      function bi(t, e) {
        var n,
          r = -1,
          i = Mi(this);
        try {
          for (i.s(); !(n = i.n()).done; ) {
            var a = n.value;
            if (t.call(e, a, ++r, this)) return a;
          }
        } catch (o) {
          i.e(o);
        } finally {
          i.f();
        }
      }
      function Ci(t) {
        return this.eachAfter(function (e) {
          var n = +t(e.data) || 0,
            r = e.children,
            i = r && r.length;
          while (--i >= 0) n += r[i].value;
          e.value = n;
        });
      }
      function _i(t) {
        return this.eachBefore(function (e) {
          e.children && e.children.sort(t);
        });
      }
      function Di(t) {
        var e = this,
          n = Ti(e, t),
          r = [e];
        while (e !== n) (e = e.parent), r.push(e);
        var i = r.length;
        while (t !== n) r.splice(i, 0, t), (t = t.parent);
        return r;
      }
      function Ti(t, e) {
        if (t === e) return t;
        var n = t.ancestors(),
          r = e.ancestors(),
          i = null;
        (t = n.pop()), (e = r.pop());
        while (t === e) (i = t), (t = n.pop()), (e = r.pop());
        return i;
      }
      function Yi() {
        var t = this,
          e = [t];
        while ((t = t.parent)) e.push(t);
        return e;
      }
      function Ai() {
        return Array.from(this);
      }
      function Pi() {
        var t = [];
        return (
          this.eachBefore(function (e) {
            e.children || t.push(e);
          }),
          t
        );
      }
      function Oi() {
        var t = this,
          e = [];
        return (
          t.each(function (n) {
            n !== t && e.push({ source: n.parent, target: n });
          }),
          e
        );
      }
      var Ii = n(94043),
        Ri = n.n(Ii),
        Ni = Ri().mark(Ei);
      function Ei() {
        var t, e, n, r, i, a;
        return Ri().wrap(
          function (o) {
            while (1)
              switch ((o.prev = o.next)) {
                case 0:
                  (t = this), (n = [t]);
                case 1:
                  (e = n.reverse()), (n = []);
                case 2:
                  if (!(t = e.pop())) {
                    o.next = 8;
                    break;
                  }
                  return (o.next = 5), t;
                case 5:
                  if ((r = t.children))
                    for (i = 0, a = r.length; i < a; ++i) n.push(r[i]);
                  o.next = 2;
                  break;
                case 8:
                  if (n.length) {
                    o.next = 1;
                    break;
                  }
                case 9:
                case 'end':
                  return o.stop();
              }
          },
          Ni,
          this,
        );
      }
      function ji(t, e) {
        t instanceof Map
          ? ((t = [void 0, t]), void 0 === e && (e = Li))
          : void 0 === e && (e = zi);
        var n,
          r,
          i,
          a,
          o,
          u = new Ui(t),
          s = [u];
        while ((n = s.pop()))
          if ((i = e(n.data)) && (o = (i = Array.from(i)).length))
            for (n.children = i, a = o - 1; a >= 0; --a)
              s.push((r = i[a] = new Ui(i[a]))),
                (r.parent = n),
                (r.depth = n.depth + 1);
        return u.eachBefore(Fi);
      }
      function Bi() {
        return ji(this).eachBefore(Hi);
      }
      function zi(t) {
        return t.children;
      }
      function Li(t) {
        return Array.isArray(t) ? t[1] : null;
      }
      function Hi(t) {
        void 0 !== t.data.value && (t.value = t.data.value),
          (t.data = t.data.data);
      }
      function Fi(t) {
        var e = 0;
        do {
          t.height = e;
        } while ((t = t.parent) && t.height < ++e);
      }
      function Ui(t) {
        (this.data = t), (this.depth = this.height = 0), (this.parent = null);
      }
      function Xi(t) {
        (t.x0 = Math.round(t.x0)),
          (t.y0 = Math.round(t.y0)),
          (t.x1 = Math.round(t.x1)),
          (t.y1 = Math.round(t.y1));
      }
      function Vi(t, e, n, r, i) {
        var a,
          o = t.children,
          u = -1,
          s = o.length,
          l = t.value && (r - e) / t.value;
        while (++u < s)
          (a = o[u]),
            (a.y0 = n),
            (a.y1 = i),
            (a.x0 = e),
            (a.x1 = e += a.value * l);
      }
      function Wi(t, e, n, r, i) {
        var a,
          o = t.children,
          u = -1,
          s = o.length,
          l = t.value && (i - n) / t.value;
        while (++u < s)
          (a = o[u]),
            (a.x0 = e),
            (a.x1 = r),
            (a.y0 = n),
            (a.y1 = n += a.value * l);
      }
      Ui.prototype = ji.prototype = (0, gi.Z)(
        {
          constructor: Ui,
          count: mi,
          each: Zi,
          eachAfter: wi,
          eachBefore: Si,
          find: bi,
          sum: Ci,
          sort: _i,
          path: Di,
          ancestors: Yi,
          descendants: Ai,
          leaves: Pi,
          links: Oi,
          copy: Bi,
        },
        Symbol.iterator,
        Ei,
      );
      var $i = (1 + Math.sqrt(5)) / 2;
      function qi(t, e, n, r, i, a) {
        var o,
          u,
          s,
          l,
          c,
          h,
          f,
          p,
          v,
          d,
          y,
          g = [],
          x = e.children,
          m = 0,
          k = 0,
          M = x.length,
          Z = e.value;
        while (m < M) {
          (s = i - n), (l = a - r);
          do {
            c = x[k++].value;
          } while (!c && k < M);
          for (
            h = f = c,
              d = Math.max(l / s, s / l) / (Z * t),
              y = c * c * d,
              v = Math.max(f / y, y / h);
            k < M;
            ++k
          ) {
            if (
              ((c += u = x[k].value),
              u < h && (h = u),
              u > f && (f = u),
              (y = c * c * d),
              (p = Math.max(f / y, y / h)),
              p > v)
            ) {
              c -= u;
              break;
            }
            v = p;
          }
          g.push((o = { value: c, dice: s < l, children: x.slice(m, k) })),
            o.dice
              ? Vi(o, n, r, i, Z ? (r += (l * c) / Z) : a)
              : Wi(o, n, r, Z ? (n += (s * c) / Z) : i, a),
            (Z -= c),
            (m = k);
        }
        return g;
      }
      var Gi = (function t(e) {
        function n(t, n, r, i, a) {
          qi(e, t, n, r, i, a);
        }
        return (
          (n.ratio = function (e) {
            return t((e = +e) > 1 ? e : 1);
          }),
          n
        );
      })($i);
      function Ji(t) {
        if ('function' !== typeof t) throw new Error();
        return t;
      }
      function Ki() {
        return 0;
      }
      function Qi(t) {
        return function () {
          return t;
        };
      }
      function ta() {
        var t = Gi,
          e = !1,
          n = 1,
          r = 1,
          i = [0],
          a = Ki,
          o = Ki,
          u = Ki,
          s = Ki,
          l = Ki;
        function c(t) {
          return (
            (t.x0 = t.y0 = 0),
            (t.x1 = n),
            (t.y1 = r),
            t.eachBefore(h),
            (i = [0]),
            e && t.eachBefore(Xi),
            t
          );
        }
        function h(e) {
          var n = i[e.depth],
            r = e.x0 + n,
            c = e.y0 + n,
            h = e.x1 - n,
            f = e.y1 - n;
          h < r && (r = h = (r + h) / 2),
            f < c && (c = f = (c + f) / 2),
            (e.x0 = r),
            (e.y0 = c),
            (e.x1 = h),
            (e.y1 = f),
            e.children &&
              ((n = i[e.depth + 1] = a(e) / 2),
              (r += l(e) - n),
              (c += o(e) - n),
              (h -= u(e) - n),
              (f -= s(e) - n),
              h < r && (r = h = (r + h) / 2),
              f < c && (c = f = (c + f) / 2),
              t(e, r, c, h, f));
        }
        return (
          (c.round = function (t) {
            return arguments.length ? ((e = !!t), c) : e;
          }),
          (c.size = function (t) {
            return arguments.length ? ((n = +t[0]), (r = +t[1]), c) : [n, r];
          }),
          (c.tile = function (e) {
            return arguments.length ? ((t = Ji(e)), c) : t;
          }),
          (c.padding = function (t) {
            return arguments.length
              ? c.paddingInner(t).paddingOuter(t)
              : c.paddingInner();
          }),
          (c.paddingInner = function (t) {
            return arguments.length
              ? ((a = 'function' === typeof t ? t : Qi(+t)), c)
              : a;
          }),
          (c.paddingOuter = function (t) {
            return arguments.length
              ? c.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t)
              : c.paddingTop();
          }),
          (c.paddingTop = function (t) {
            return arguments.length
              ? ((o = 'function' === typeof t ? t : Qi(+t)), c)
              : o;
          }),
          (c.paddingRight = function (t) {
            return arguments.length
              ? ((u = 'function' === typeof t ? t : Qi(+t)), c)
              : u;
          }),
          (c.paddingBottom = function (t) {
            return arguments.length
              ? ((s = 'function' === typeof t ? t : Qi(+t)), c)
              : s;
          }),
          (c.paddingLeft = function (t) {
            return arguments.length
              ? ((l = 'function' === typeof t ? t : Qi(+t)), c)
              : l;
          }),
          c
        );
      }
      function ea(t, e, n, r, i) {
        var a,
          o,
          u = t.children,
          s = u.length,
          l = new Array(s + 1);
        for (l[0] = o = a = 0; a < s; ++a) l[a + 1] = o += u[a].value;
        function c(t, e, n, r, i, a, o) {
          if (t >= e - 1) {
            var s = u[t];
            return (s.x0 = r), (s.y0 = i), (s.x1 = a), void (s.y1 = o);
          }
          var h = l[t],
            f = n / 2 + h,
            p = t + 1,
            v = e - 1;
          while (p < v) {
            var d = (p + v) >>> 1;
            l[d] < f ? (p = d + 1) : (v = d);
          }
          f - l[p - 1] < l[p] - f && t + 1 < p && --p;
          var y = l[p] - h,
            g = n - y;
          if (a - r > o - i) {
            var x = n ? (r * g + a * y) / n : a;
            c(t, p, y, r, i, x, o), c(p, e, g, x, i, a, o);
          } else {
            var m = n ? (i * g + o * y) / n : o;
            c(t, p, y, r, i, a, m), c(p, e, g, r, m, a, o);
          }
        }
        c(0, s, t.value, e, n, r, i);
      }
      var na = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r(t, e, i) {
              var a;
              (0, c.Z)(this, r), (a = n.call(this, t, e, i));
              var o = t.coord,
                u = t.color,
                s = t.data,
                l = e.width,
                h = e.height,
                p = e.theme;
              a.coordController = new z();
              var v = (0, f.Z)(a),
                d = v.coordController;
              return (
                (a.coord = d.create(o, { width: l, height: h })),
                (a.color = new Bn(
                  (0, m.Z)((0, m.Z)({ range: p.colors }, u), {}, { data: s }),
                )),
                a
              );
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'treemapLayout',
                  value: function () {
                    var t = this.props,
                      e = this.coord,
                      n = this.color,
                      r = t.data,
                      i = t.value,
                      a = ji({ children: r })
                        .sum(function (t) {
                          return t[i];
                        })
                        .sort(function (t, e) {
                          return e[i] - t[i];
                        }),
                      o = ta().tile(ea).round(!1),
                      u = o(a);
                    return u.children.map(function (t) {
                      var r = t.data,
                        i = t.x0,
                        a = t.y0,
                        o = t.x1,
                        u = t.y1,
                        s = n.mapping(r[n.field]),
                        l = e.convertRect({ x: [i, o], y: [a, u] });
                      return (0, m.Z)({ key: r.key, origin: r, color: s }, l);
                    });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.treemapLayout(),
                      n = this.props,
                      r = this.coord;
                    return gn(
                      t,
                      (0, m.Z)((0, m.Z)({ nodes: e }, n), {}, { coord: r }),
                    );
                  },
                },
              ]),
              r
            );
          })(l.Z);
        },
        ra = function (t) {
          var e = t.nodes,
            n = t.coord;
          if (n.isPolar) {
            var r = n.center,
              i = r.x,
              a = r.y;
            return gn(
              'group',
              null,
              e.map(function (t) {
                var e = t.xMin,
                  n = t.xMax,
                  r = t.yMin,
                  o = t.yMax,
                  u = t.color;
                return gn('sector', {
                  attrs: {
                    x: i,
                    y: a,
                    lineWidth: '1px',
                    stroke: '#fff',
                    startAngle: e,
                    endAngle: n,
                    r0: r,
                    r: o,
                    anticlockwise: !1,
                    fill: u,
                  },
                });
              }),
            );
          }
          return gn(
            'group',
            null,
            e.map(function (t) {
              var e = t.key,
                n = t.xMin,
                r = t.xMax,
                i = t.yMin,
                a = t.yMax,
                o = t.color;
              return gn('rect', {
                key: e,
                attrs: {
                  x: n,
                  y: i,
                  width: r - n,
                  height: a - i,
                  fill: o,
                  lineWidth: '4px',
                  stroke: '#fff',
                  radius: '8px',
                },
                animation: {
                  appear: {
                    easing: 'linear',
                    duration: 450,
                    property: ['fillOpacity', 'strokeOpacity'],
                    start: { fillOpacity: 0, strokeOpacity: 0 },
                    end: { fillOpacity: 1, strokeOpacity: 1 },
                  },
                  update: {
                    easing: 'linear',
                    duration: 450,
                    property: [
                      'x',
                      'y',
                      'width',
                      'height',
                      'radius',
                      'lineWidth',
                    ],
                  },
                },
              });
            }),
          );
        },
        ia = na(ra);
      function aa() {
        var t = 1,
          e = 1,
          n = 0,
          r = !1;
        function i(i) {
          var o = i.height + 1;
          return (
            (i.x0 = i.y0 = n),
            (i.x1 = t),
            (i.y1 = e / o),
            i.eachBefore(a(e, o)),
            r && i.eachBefore(Xi),
            i
          );
        }
        function a(t, e) {
          return function (r) {
            r.children &&
              Vi(
                r,
                r.x0,
                (t * (r.depth + 1)) / e,
                r.x1,
                (t * (r.depth + 2)) / e,
              );
            var i = r.x0,
              a = r.y0,
              o = r.x1 - n,
              u = r.y1 - n;
            o < i && (i = o = (i + o) / 2),
              u < a && (a = u = (a + u) / 2),
              (r.x0 = i),
              (r.y0 = a),
              (r.x1 = o),
              (r.y1 = u);
          };
        }
        return (
          (i.round = function (t) {
            return arguments.length ? ((r = !!t), i) : r;
          }),
          (i.size = function (n) {
            return arguments.length ? ((t = +n[0]), (e = +n[1]), i) : [t, e];
          }),
          (i.padding = function (t) {
            return arguments.length ? ((n = +t), i) : n;
          }),
          i
        );
      }
      function oa(t) {
        var e = t;
        while (e.depth > 1) e = e.parent;
        return e;
      }
      var ua = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r(t, e) {
              var i;
              (0, c.Z)(this, r), (i = n.call(this, t, e));
              var a = t.coord,
                o = t.color,
                u = t.data,
                s = e.width,
                l = e.height,
                h = e.theme;
              i.coordController = new z();
              var p = (0, f.Z)(i),
                v = p.coordController;
              return (
                (i.coord = v.create(a, { width: s, height: l })),
                (i.color = new Bn(
                  (0, m.Z)((0, m.Z)({ range: h.colors }, o), {}, { data: u }),
                )),
                i
              );
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'didMount',
                  value: function () {
                    var t = this,
                      e = this.props,
                      n = this.container,
                      r = e.onClick,
                      i = n.get('canvas');
                    (this.triggerRef = []),
                      i.on('click', function (e) {
                        var n = e.points,
                          i = t.triggerRef.find(function (t) {
                            return (0, Pn.qz)(t.current.getBBox(), n[0]);
                          });
                        i &&
                          ((e.shape = i), (e.payload = i.payload), r && r(e));
                      });
                  },
                },
                {
                  key: '_mapping',
                  value: function (t) {
                    for (
                      var e = this.color, n = this.coord, r = 0, i = t.length;
                      r < i;
                      r++
                    ) {
                      var a = t[r],
                        o = oa(a),
                        u = e.mapping(o.data[e.field]);
                      a.color = u;
                      var s = a.x0,
                        l = a.x1,
                        c = a.y0,
                        h = a.y1,
                        f = n.convertRect({ x: [s, l], y: [c, h] });
                      (0, k.CD)(a, f),
                        a.children &&
                          a.children.length &&
                          this._mapping(a.children);
                    }
                  },
                },
                {
                  key: 'sunburst',
                  value: function () {
                    var t = this.props,
                      e = t.data,
                      n = t.value,
                      r = t.sort,
                      i = void 0 === r || r,
                      a = ji({ children: e }).sum(function (t) {
                        return t[n];
                      });
                    if (!0 === i || (0, k.mf)(i)) {
                      var o = (0, k.mf)(i)
                        ? i
                        : function (t, e) {
                            return e[n] - t[n];
                          };
                      a.sort(o);
                    }
                    var u = aa()(a),
                      s = u.children;
                    return this._mapping(s), u;
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.sunburst(),
                      n = this.coord,
                      r = this.props;
                    return gn(
                      t,
                      (0, m.Z)(
                        (0, m.Z)({}, r),
                        {},
                        { coord: n, node: e, triggerRef: this.triggerRef },
                      ),
                    );
                  },
                },
              ]),
              r
            );
          })(l.Z);
        },
        sa = function (t) {
          var e = t.coord,
            n = t.node,
            r = n.children,
            i = e.center,
            a = i.x,
            o = i.y,
            u = function t(e) {
              return gn(
                'group',
                null,
                e.map(function (e) {
                  var n = e.xMin,
                    r = e.xMax,
                    i = e.yMin,
                    u = e.yMax,
                    s = e.color,
                    l = e.children;
                  return gn(
                    'group',
                    null,
                    gn('sector', {
                      attrs: {
                        x: a,
                        y: o,
                        lineWidth: '1px',
                        stroke: '#fff',
                        startAngle: n,
                        endAngle: r,
                        r0: i,
                        r: u,
                        anticlockwise: !1,
                        fill: s,
                      },
                    }),
                    l && l.length ? t(l) : null,
                  );
                }),
              );
            };
          return u(r);
        },
        la = function (t) {
          var e = t.node,
            n = e.children,
            r = function t(e) {
              return gn(
                'group',
                null,
                e.map(function (e) {
                  var n = e.xMin,
                    r = e.xMax,
                    i = e.yMin,
                    a = e.yMax,
                    o = e.color,
                    u = e.children;
                  return gn(
                    'group',
                    null,
                    gn('rect', {
                      attrs: {
                        x: n,
                        y: i,
                        width: r - n,
                        height: a - i,
                        lineWidth: '1px',
                        stroke: '#fff',
                        fill: o,
                      },
                    }),
                    u && u.length ? t(u) : null,
                  );
                }),
              );
            };
          return r(n);
        },
        ca = function (t) {
          var e = t.coord;
          return 'polar' === e.type
            ? gn(sa, (0, m.Z)({}, t))
            : gn(la, (0, m.Z)({}, t));
        },
        ha = ua(ca),
        fa = {
          anchorOffset: '10px',
          inflectionOffset: '30px',
          sidePadding: '40px',
          height: '64px',
          adjustOffset: '30',
          triggerOn: 'click',
          label1OffsetY: '-4px',
          label2OffsetY: '4px',
        };
      function pa(t, e, n) {
        return { x: t.x + n * Math.cos(e), y: t.y + n * Math.sin(e) };
      }
      function va(t, e) {
        return e < t && (e += 2 * Math.PI), (e + t) / 2;
      }
      function da(t, e, n, r) {
        var i = r.x,
          a = t.sort(function (t, e) {
            var n = Math.abs(t.x - i),
              r = Math.abs(e.x - i);
            return r - n;
          });
        return [a.slice(0, a.length - n), a.slice(a.length - n).concat(e)];
      }
      function ya(t) {
        return t >= -Math.PI / 2 && t < 0;
      }
      function ga(t) {
        return t >= 0 && t < Math.PI / 2;
      }
      function xa(t) {
        return t >= Math.PI / 2 && t < Math.PI;
      }
      function ma(t) {
        return t >= Math.PI && t < (3 * Math.PI) / 2;
      }
      function ka(t, e, n) {
        for (var r = (0, Pn.Fs)(n, t), i = 0, a = r.length; i < a; i++) {
          var o = r[i];
          if ((0, Pn.qz)(o.getBBox(), e)) return o;
        }
      }
      var Ma = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r(t) {
              var e;
              return (
                (0, c.Z)(this, r),
                (e = n.call(this, t)),
                (e._handleEvent = function (t) {
                  var n = e.props,
                    r = n.chart,
                    i = n.onClick,
                    a = e.triggerRef.current,
                    o = t.points[0],
                    u = ka(a, o, 'click'),
                    s = r.getSnapRecords(o);
                  'function' === typeof i &&
                    (u
                      ? i(u.get('data'))
                      : (0, k.kJ)(s) && s.length > 0 && i(s));
                }),
                (e.triggerRef = {}),
                e
              );
            }
            return (
              (0, h.Z)(r, [
                { key: 'willMount', value: function () {} },
                {
                  key: 'didMount',
                  value: function () {
                    this._initEvent();
                  },
                },
                {
                  key: 'getLabels',
                  value: function (t) {
                    var e = t.chart,
                      n = t.coord,
                      r = t.anchorOffset,
                      i = t.inflectionOffset,
                      a = t.label1,
                      o = t.label2,
                      u = t.height,
                      s = n.center,
                      l = n.radius,
                      c = n.width,
                      h = n.height,
                      f = n.left,
                      p = n.right,
                      v = n.top,
                      d = Math.floor(h / u),
                      y = 2 * d,
                      g = e.getGeometrys()[0],
                      x = g
                        .flatRecords()
                        .sort(function (t, e) {
                          var n = t.xMax - t.xMin,
                            r = e.xMax - e.xMin;
                          return r - n;
                        })
                        .slice(0, y),
                      m = [[], []];
                    if (
                      (x.forEach(function (t) {
                        var e = t.xMin,
                          n = t.xMax,
                          u = t.color,
                          c = t.origin,
                          h = va(e, n),
                          f = pa(s, h, l + r),
                          p = pa(s, h, l + i),
                          v = f.x < s.x ? 'left' : 'right',
                          d = {
                            origin: c,
                            angle: h,
                            anchor: f,
                            inflection: p,
                            side: v,
                            x: p.x,
                            y: p.y,
                            r: l + i,
                            color: u,
                            label1: (0, k.mf)(a) ? a(c, t) : a,
                            label2: (0, k.mf)(o) ? o(c, t) : o,
                          };
                        'left' === v ? m[0].push(d) : m[1].push(d);
                      }),
                      m[0].length > d)
                    )
                      m = da(m[0], m[1], m[0].length - d, s);
                    else if (m[1].length > d) {
                      var M = da(m[1], m[0], m[1].length - d, s),
                        S = (0, Z.Z)(M, 2),
                        w = S[0],
                        b = S[1];
                      m = [b, w];
                    }
                    var C = c / 2 - l - r - i,
                      _ = [];
                    return (
                      m.forEach(function (t, e) {
                        var n = 0 === e ? 'left' : 'right';
                        t.sort(function (t, e) {
                          var r = t.angle,
                            i = e.angle;
                          return 'left' === n
                            ? ((r = ya(r) ? r + 2 * Math.PI : r),
                              (i = ya(i) ? i + 2 * Math.PI : i),
                              i - r)
                            : ((r = ma(r) ? r - 2 * Math.PI : r),
                              (i = ma(i) ? i - 2 * Math.PI : i),
                              r - i);
                        });
                        var r = t.map(function (t) {
                            return t.y;
                          }),
                          i = Math.max.apply(null, r),
                          a = Math.min.apply(null, r),
                          o = t.length,
                          u = h / o,
                          s = u / 2,
                          l = 2;
                        'left' === n
                          ? t.forEach(function (t, e) {
                              var r = t.anchor,
                                c = t.inflection,
                                h = t.angle,
                                p = t.x,
                                d = t.y,
                                y = [r, c],
                                g = f,
                                x = v + s + u * e,
                                m = { x: g + C + l * e, y: x },
                                k = { x: g, y: x };
                              if (ya(h)) {
                                var M = a - l * (o - e);
                                y.push({ x: p, y: M }),
                                  y.push({ x: m.x, y: M });
                              } else if (xa(h) || ma(h))
                                y.push({ x: m.x, y: d });
                              else if (ga(h)) {
                                var Z = i + l * e;
                                y.push({ x: p, y: Z }),
                                  y.push({ x: m.x, y: Z });
                              }
                              y.push(m),
                                y.push(k),
                                (t.points = y),
                                (t.side = n),
                                _.push(t);
                            })
                          : t.forEach(function (t, e) {
                              var r = t.anchor,
                                c = t.inflection,
                                h = t.angle,
                                f = t.x,
                                d = t.y,
                                y = [r, c],
                                g = p,
                                x = v + s + u * e,
                                m = { x: g - C - l * e, y: x },
                                k = { x: g, y: x };
                              if (ma(h)) {
                                var M = a - l * (o - e);
                                y.push({ x: f, y: M }),
                                  y.push({ x: m.x, y: M });
                              } else if (ya(h) || ga(h))
                                y.push({ x: m.x, y: d });
                              else if (xa(h)) {
                                var Z = i + l * e;
                                y.push({ x: f, y: Z }),
                                  y.push({ x: m.x, y: Z });
                              }
                              y.push(m),
                                y.push(k),
                                (t.points = y),
                                (t.side = n),
                                _.push(t);
                            });
                      }),
                      _
                    );
                  },
                },
                {
                  key: '_initEvent',
                  value: function () {
                    var t = this.context,
                      e = this.props,
                      n = t.canvas,
                      r = e.triggerOn,
                      i = void 0 === r ? fa.triggerOn : r;
                    n.on(i, this._handleEvent);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.context,
                      n = e.px2hd((0, k.b$)({}, fa, this.props)),
                      r = this.getLabels(n);
                    return gn(
                      t,
                      (0, m.Z)(
                        (0, m.Z)({ labels: r }, n),
                        {},
                        { triggerRef: this.triggerRef },
                      ),
                    );
                  },
                },
              ]),
              r
            );
          })(l.Z);
        },
        Za = function (t) {
          var e = t.lineStyle,
            n = t.anchorStyle,
            r = t.labels,
            i = t.label1OffsetY,
            a = t.label2OffsetY,
            o = t.triggerRef;
          return gn(
            'group',
            { ref: o },
            r.map(function (t) {
              var r = t.origin,
                o = t.anchor,
                u = t.side,
                s = t.color,
                l = t.label1,
                c = t.label2,
                h = t.points,
                f = h[h.length - 1];
              return gn(
                'group',
                null,
                gn('circle', {
                  attrs: (0, m.Z)({ r: '4px', x: o.x, y: o.y, fill: s }, n),
                }),
                gn('polyline', {
                  attrs: (0, m.Z)(
                    { points: h, lineWidth: '2px', stroke: s },
                    e,
                  ),
                }),
                gn('text', {
                  className: 'click',
                  attrs: (0, m.Z)(
                    {
                      x: f.x,
                      y: f.y + i,
                      fontSize: '24px',
                      lineHeight: '24px',
                      fill: s,
                      textBaseline: 'bottom',
                      textAlign: 'left' === u ? 'left' : 'right',
                    },
                    l,
                  ),
                  data: r,
                }),
                gn('text', {
                  className: 'click',
                  attrs: (0, m.Z)(
                    {
                      x: f.x,
                      y: f.y + a,
                      fontSize: '24px',
                      lineHeight: '24px',
                      fill: '#808080',
                      textBaseline: 'top',
                      textAlign: 'left' === u ? 'left' : 'right',
                    },
                    c,
                  ),
                  data: r,
                }),
              );
            }),
          );
        },
        Sa = Ma(Za),
        wa = function (t, e, n) {
          var r = t.x + Math.cos(e) * n,
            i = t.y + Math.sin(e) * n;
          return { x: r, y: i };
        },
        ba = function (t, e, n, r, i, a, o) {
          for (var u = [], s = e - t, l = 0; l <= n; l++) {
            var c = t + (s * l) / n,
              h = wa(r, c, i + a - o),
              f = wa(r, c, i + a);
            u.push({ tickValue: c, start: h, end: f });
          }
          return u;
        },
        Ca = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r() {
              return (0, c.Z)(this, r), n.apply(this, arguments);
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = this.context,
                      r = e.startAngle,
                      i = e.endAngle,
                      a = e.tickCount,
                      o = e.center,
                      u = e.r,
                      s = e.tickOffset,
                      l = e.tickLength,
                      c = ba(r, i, a, o, n.px2hd(u), n.px2hd(s), n.px2hd(l));
                    return gn(t, (0, m.Z)((0, m.Z)({}, e), {}, { ticks: c }));
                  },
                },
              ]),
              r
            );
          })(l.Z);
        },
        _a = function (t) {
          var e = t.center,
            n = t.startAngle,
            r = t.endAngle,
            i = t.r,
            a = t.percent,
            o = t.ticks,
            u = e.x,
            s = e.y,
            l = r - n;
          return gn(
            'group',
            null,
            gn('arc', {
              attrs: {
                x: u,
                y: s,
                r: i,
                startAngle: n,
                endAngle: r,
                lineWidth: '20px',
                lineCap: 'round',
                stroke: '#e7e7e7',
              },
            }),
            gn('arc', {
              attrs: {
                x: u,
                y: s,
                r: i,
                startAngle: n,
                endAngle: n,
                lineWidth: '40px',
                lineCap: 'round',
                stroke: '#0075ff',
              },
              animation: {
                appear: {
                  easing: 'linear',
                  duration: 500,
                  property: ['endAngle'],
                  start: { endAngle: n },
                  end: { endAngle: n + l * a },
                },
              },
            }),
            o.map(function (t) {
              var e = t.start,
                n = t.end;
              return gn('line', {
                attrs: {
                  x1: e.x,
                  y1: e.y,
                  x2: n.x,
                  y2: n.y,
                  lineWidth: '6px',
                  lineCap: 'round',
                  stroke: '#e7e7e7',
                },
              });
            }),
          );
        },
        Da = Ca(_a);
      function Ta(t, e) {
        if (t.length !== e.length) return !1;
        var n = t.length - 1;
        return t[0] === e[0] && t[n] === e[n];
      }
      function Ya(t, e, n) {
        var r = t.values,
          i = t.ticks,
          a = t.tickMethod,
          o = t.tickCount,
          u = e.values,
          s = (0, Z.Z)(n, 2),
          l = s[0],
          c = s[1],
          h = u.length,
          f = l * h,
          p = c * h,
          v = Math.round(p - f),
          d = Math.round(f),
          y = u.slice(d, d + v),
          g = Math.round((o * u.length) / y.length),
          x = H(a),
          m = x({ tickCount: g, values: u });
        if (!Ta(r, y) || !Ta(i, m)) return t.change({ values: y, ticks: m }), t;
      }
      function Aa(t, e, n) {
        var r = e.min,
          i = e.max,
          a = (0, Z.Z)(n, 2),
          o = a[0],
          u = a[1],
          s = r + (i - r) * o,
          l = r + (i - r) * u;
        t.change({ min: s, max: l, nice: !1 });
      }
      function Pa(t, e) {
        var n = t.isLinear;
        if (n) {
          var r = (0, k.rx)(e),
            i = r.min,
            a = r.max;
          return t.change({ min: i, max: a, nice: !0 });
        }
      }
      function Oa(t, e, n) {
        var r = t.isCategory,
          i = t.isLinear;
        return r ? Ya(t, e, n) : i ? Aa(t, e, n) : void 0;
      }
      function Ia(t, e, n) {
        var r = e.field,
          i = e.type,
          a = e.values,
          o = {};
        return (
          a.forEach(function (t) {
            o[t] = !0;
          }),
          t.map(function (t) {
            var e = t.field,
              a = [];
            return (
              n.forEach(function (t) {
                var n = 'timeCat' === i ? (0, Pn.u8)(t[r]) : t[r];
                o[n] && a.push(t[e]);
              }),
              Pa(t, a)
            );
          })
        );
      }
      var Ra = 10;
      function Na(t, e) {
        return new t.constructor((0, m.Z)((0, m.Z)({}, t.__cfg__), e));
      }
      var Ea = (function (t) {
          (0, p.Z)(n, t);
          var e = (0, v.Z)(n);
          function n(t) {
            var r;
            (0, c.Z)(this, n),
              (r = e.call(this, t)),
              (r.onStart = function () {
                var t = (0, f.Z)(r),
                  e = t.state,
                  n = e.range;
                r.startRange = n;
              }),
              (r.onPan = function (t) {
                var e = r.props.mode,
                  n = void 0 === e ? 'x' : e;
                'x' !== n ? 'y' !== n || r._doYPan(t) : r._doXPan(t);
              }),
              (r.onPinch = function (t) {
                var e = r.props.mode,
                  n = void 0 === e ? 'x' : e;
                'x' !== n ? 'y' !== n || r._doYPinch(t) : r._doXPinch(t);
              }),
              (r.onEnd = function () {
                r.startRange = null;
              });
            var i = t.range,
              a = void 0 === i ? [0, 1] : i;
            return (r.state = { range: a }), r;
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'didMount',
                value: function () {
                  this._bindEvents();
                },
              },
              {
                key: 'willMount',
                value: function () {
                  var t = this.props,
                    e = t.range,
                    n = this._getScale(),
                    r = n.values;
                  (this.scale = n),
                    (this.originScale = Na(n)),
                    (this.minScale = Ra / r.length),
                    this.updateRange(e);
                },
              },
              {
                key: 'didUnmount',
                value: function () {
                  this._clearEvents();
                },
              },
              {
                key: '_doXPan',
                value: function (t) {
                  var e = t.direction,
                    n = t.deltaX;
                  if ('up' !== e && 'down' !== e) {
                    t.preventDefault && t.preventDefault();
                    var r = this.props,
                      i = r.coord,
                      a = i.width,
                      o = n / a;
                    this._doPan(o);
                  }
                },
              },
              {
                key: '_doYPan',
                value: function (t) {
                  var e = t.direction,
                    n = t.deltaY;
                  if ('left' !== e && 'right' !== e) {
                    t.preventDefault && t.preventDefault();
                    var r = this.props,
                      i = r.coord,
                      a = i.height,
                      o = -n / a;
                    this._doPan(o);
                  }
                },
              },
              {
                key: '_doPan',
                value: function (t) {
                  var e = this.startRange,
                    n = (0, Z.Z)(e, 2),
                    r = n[0],
                    i = n[1],
                    a = i - r,
                    o = a * t,
                    u = r - o,
                    s = i - o;
                  this.updateRange([u, s]);
                },
              },
              {
                key: '_doXPinch',
                value: function (t) {
                  t.preventDefault && t.preventDefault();
                  var e = t.zoom,
                    n = t.center,
                    r = this.props,
                    i = r.coord,
                    a = i.width,
                    o = i.left,
                    u = i.right,
                    s = Math.abs(n.x - o),
                    l = Math.abs(u - n.x),
                    c = s / a,
                    h = l / a;
                  this._doPinch(c, h, e);
                },
              },
              {
                key: '_doYPinch',
                value: function (t) {
                  t.preventDefault && t.preventDefault();
                  var e = t.zoom,
                    n = t.center,
                    r = this.props,
                    i = r.coord,
                    a = i.height,
                    o = i.top,
                    u = i.bottom,
                    s = Math.abs(n.x - o),
                    l = Math.abs(u - n.x),
                    c = s / a,
                    h = l / a;
                  this._doPinch(c, h, e);
                },
              },
              {
                key: '_doPinch',
                value: function (t, e, n) {
                  var r = this.startRange,
                    i = this.minScale,
                    a = (0, Z.Z)(r, 2),
                    o = a[0],
                    u = a[1],
                    s = 1 - n,
                    l = u - o,
                    c = l * s,
                    h = c * t,
                    f = c * e,
                    p = Math.max(0, o - h),
                    v = Math.min(1, u + f),
                    d = [p, v];
                  v - p < i || this.updateRange(d);
                },
              },
              {
                key: 'updateRange',
                value: function (t) {
                  if (t) {
                    var e,
                      n = (0, Z.Z)(t, 2),
                      r = n[0],
                      i = n[1],
                      a = i - r;
                    e = r < 0 ? [0, a] : i > 1 ? [1 - a, 1] : t;
                    var o = this.props,
                      u = this.scale,
                      s = this.originScale;
                    Oa(u, s, e);
                    var l = o.chart,
                      c = o.data,
                      h = o.autoFit;
                    if (h) {
                      var f = this._getFollowScales();
                      this.updateFollow(f, u, c);
                    }
                    this.setState({ range: e });
                    var p = l.animate;
                    l.setAnimate(!1),
                      l.forceUpdate(function () {
                        l.setAnimate(p);
                      });
                  }
                },
              },
              {
                key: 'updateFollow',
                value: function (t, e, n) {
                  Ia(t, e, n);
                },
              },
              {
                key: '_getScale',
                value: function () {
                  var t = this.props,
                    e = t.mode,
                    n = void 0 === e ? 'x' : e,
                    r = t.coord,
                    i = t.chart;
                  return 'x' === n
                    ? r.transposed
                      ? i.getYScales()[0]
                      : i.getXScales()[0]
                    : 'y' === n
                    ? r.transposed
                      ? i.getXScales()[0]
                      : i.getYScales()[0]
                    : void 0;
                },
              },
              {
                key: '_getFollowScales',
                value: function () {
                  var t = this.props,
                    e = t.mode,
                    n = void 0 === e ? 'x' : e,
                    r = t.coord,
                    i = t.chart;
                  return 'x' === n
                    ? r.transposed
                      ? i.getXScales()
                      : i.getYScales()
                    : 'y' === n
                    ? r.transposed
                      ? i.getYScales()
                      : i.getXScales()
                    : void 0;
                },
              },
              {
                key: '_bindEvents',
                value: function () {
                  var t = this.context,
                    e = this.props,
                    n = t.canvas,
                    r = e.pan,
                    i = e.pinch;
                  !1 !== r &&
                    (n.on('panstart', this.onStart),
                    n.on('pan', this.onPan),
                    n.on('panend', this.onEnd)),
                    !1 !== i &&
                      (n.on('pinchstart', this.onStart),
                      n.on('pinch', this.onPinch),
                      n.on('pinchend', this.onEnd));
                },
              },
              {
                key: '_clearEvents',
                value: function () {
                  var t = this.context,
                    e = this.props,
                    n = t.canvas,
                    r = e.pan,
                    i = e.pinch;
                  !1 !== r &&
                    (n.off('panstart', this.onStart),
                    n.off('pan', this.onPan),
                    n.off('panend', this.onEnd)),
                    !1 !== i &&
                      (n.off('pinchstart', this.onStart),
                      n.off('pinch', this.onPinch),
                      n.off('pinchend', this.onEnd));
                },
              },
            ]),
            n
          );
        })(l.Z),
        ja = Ea,
        Ba = function (t) {
          return (function (e) {
            (0, p.Z)(r, e);
            var n = (0, v.Z)(r);
            function r() {
              return (0, c.Z)(this, r), n.apply(this, arguments);
            }
            return (
              (0, h.Z)(r, [
                {
                  key: 'willMount',
                  value: function () {
                    (0, C.Z)((0, _.Z)(r.prototype), 'willMount', this).call(
                      this,
                    );
                    var t = this.context,
                      e = this.props,
                      n = e.visible,
                      i = e.position,
                      a = void 0 === i ? 'bottom' : i,
                      o = e.margin,
                      u = void 0 === o ? '16px' : o,
                      s = e.chart,
                      l = t.px2hd(u);
                    if (!1 === n) return null;
                    s.updateCoordFor(this, {
                      position: a,
                      width: 'left' === a || 'right' === a ? l : 0,
                      height: 'bottom' === a || 'top' === a ? l : 0,
                    });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      n = this.state,
                      r = e.visible;
                    return !1 === r
                      ? null
                      : gn(t, (0, m.Z)((0, m.Z)({ position: 'bottom' }, e), n));
                  },
                },
              ]),
              r
            );
          })(ja);
        },
        za = function (t, e) {
          var n = t.coord,
            r = t.range,
            i = t.position,
            a = t.layout,
            o = n.left,
            u = n.width,
            s = a.top,
            l = a.height,
            c = (0, Z.Z)(r, 2),
            h = c[0],
            f = c[1],
            p = u * h,
            v = u * (f - h);
          return gn(
            'group',
            {
              style: { left: o, top: 'top' === i ? s - e.px2hd('8px') : s + l },
            },
            gn('line', {
              style: { position: 'absolute', left: 0, width: u, height: 0 },
              attrs: {
                stroke: 'rgba(202, 215, 239, .2)',
                lineCap: 'round',
                lineWidth: '8px',
              },
            }),
            gn('line', {
              style: { position: 'absolute', left: p, width: v, height: 0 },
              attrs: {
                stroke: 'rgba(202, 215, 239, .5)',
                lineCap: 'round',
                lineWidth: '8px',
              },
            }),
          );
        },
        La = function (t, e) {
          var n = t.coord,
            r = t.range,
            i = t.position,
            a = t.layout,
            o = n.top,
            u = n.height,
            s = a.left,
            l = a.width,
            c = (0, Z.Z)(r, 2),
            h = c[0],
            f = c[1],
            p = u * h,
            v = u * (f - h);
          return gn(
            'group',
            {
              style: {
                top: o,
                left: 'left' === i ? s - e.px2hd('8px') : s + l,
              },
            },
            gn('line', {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: u,
              },
              attrs: {
                stroke: 'rgba(202, 215, 239, .2)',
                lineCap: 'round',
                lineWidth: '8px',
              },
            }),
            gn('line', {
              style: { position: 'absolute', top: p, width: 0, height: v },
              attrs: {
                stroke: 'rgba(202, 215, 239, .5)',
                lineCap: 'round',
                lineWidth: '8px',
              },
            }),
          );
        },
        Ha = function (t) {
          var e = t.position;
          return gn('left' === e || 'right' === e ? La : za, (0, m.Z)({}, t));
        },
        Fa = Ba(Ha),
        Ua = n(8444);
    },
    96410: function (t, e, n) {
      'use strict';
      function r(t) {
        if (
          ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t['@@iterator']
        )
          return Array.from(t);
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    85061: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var r = n(50676);
      function i(t) {
        if (Array.isArray(t)) return (0, r.Z)(t);
      }
      var a = n(96410),
        o = n(82961);
      function u() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(t) {
        return i(t) || (0, a.Z)(t) || (0, o.Z)(t) || u();
      }
    },
    32059: function (t, e, n) {
      'use strict';
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    74694: function (t, e, n) {
      'use strict';
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e) {
        if (t) {
          if ('string' === typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }
      n.d(e, {
        Z: function () {
          return i;
        },
      });
    },
    94043: function (t, e, n) {
      t.exports = n(17445);
    },
  },
]);
