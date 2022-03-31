(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [51],
  {
    3024: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.d(e, {
            Z: function () {
              return p;
            },
          });
          var i = n(6773),
            a = t([i]);
          i = (a.then ? await a : a)[0];
          const { default: c } = await n.e(813).then(n.t.bind(n, 7813, 23)),
            { default: s } = await n.e(456).then(n.t.bind(n, 4456, 23)),
            {
              Chart: r,
              Area: d,
              Line: u,
              Axis: A,
            } = await n.e(849).then(n.t.bind(n, 3849, 23)),
            { default: o } = await n.e(701).then(n.t.bind(n, 6701, 23)),
            { jsx: l } = await n.e(455).then(n.t.bind(n, 4455, 23)),
            { jsxs: h } = await n.e(455).then(n.t.bind(n, 4455, 23));
          function p(t) {
            var e = (0, i.Z)(t.hourList),
              n = c(e, 1),
              a = n[0];
            return l('div', {
              className: o.chart,
              children: h('div', {
                className: o.chatnner,
                children: [
                  l('div', { className: o.title, children: 'Today' }),
                  a && a.length
                    ? l(s, {
                        pixelRatio: window.devicePixelRatio,
                        height: '87',
                        children: h(r, {
                          data: a,
                          scale: { time: { tickCount: 6 }, temp: { min: 0 } },
                          children: [
                            l(A, {
                              field: 'time',
                              nice: !1,
                              style: { label: { align: 'between' } },
                            }),
                            l(d, {
                              x: 'time',
                              y: 'temp',
                              color: 'l(90) 0:#E9C939 1:#f7f7f7',
                              shape: 'smooth',
                            }),
                            l(u, {
                              x: 'time',
                              y: 'temp',
                              color: 'l(90) 0:#E9C939 1:#f7f7f7',
                              shape: 'smooth',
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            });
          }
          t();
        },
        1,
      );
    },
    8284: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.d(e, {
            Z: function () {
              return u;
            },
          });
          var i = n(6773),
            a = t([i]);
          i = (a.then ? await a : a)[0];
          const { default: c } = await n.e(813).then(n.t.bind(n, 7813, 23)),
            { default: s } = await n.e(773).then(n.t.bind(n, 7773, 23)),
            { jsx: r } = await n.e(455).then(n.t.bind(n, 4455, 23)),
            { jsxs: d } = await n.e(455).then(n.t.bind(n, 4455, 23));
          function u(t) {
            var e = (0, i.Z)(t.hourList),
              n = c(e, 1),
              a = n[0];
            return r('div', {
              className: s.hours,
              children: r('div', {
                className: s.hoursInner,
                children: r('ul', {
                  children:
                    null === a || void 0 === a
                      ? void 0
                      : a.map((t) =>
                          d(
                            'li',
                            {
                              children: [
                                d('div', {
                                  className: s.temp,
                                  children: [
                                    t.temp,
                                    r('span', { children: '\xb0C' }),
                                  ],
                                }),
                                r('div', {
                                  className: s.time,
                                  children: t.time,
                                }),
                              ],
                            },
                            t.id,
                          ),
                        ),
                }),
              }),
            });
          }
          t();
        },
        1,
      );
    },
    7109: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.d(e, {
            Z: function () {
              return s;
            },
          });
          const { default: i } = await n.e(921).then(n.t.bind(n, 4921, 23)),
            { jsx: a } = await n.e(455).then(n.t.bind(n, 4455, 23)),
            { jsxs: c } = await n.e(455).then(n.t.bind(n, 4455, 23));
          function s(t) {
            var e = t.loading;
            return a('div', {
              className: e ? i.loadingWrapper : '',
              children: a('div', {
                className: i.spin,
                children: c('span', {
                  className: ''.concat(i.spinDot, ' ').concat(i.spinDotSpin),
                  children: [
                    a('i', { className: i.dotItem }),
                    a('i', { className: i.dotItem }),
                    a('i', { className: i.dotItem }),
                    a('i', { className: i.dotItem }),
                  ],
                }),
              }),
            });
          }
          t();
        },
        1,
      );
    },
    3562: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.d(e, {
            Z: function () {
              return l;
            },
          });
          var i = n(5123),
            a = n.n(i),
            c = n(2998),
            s = n.n(c),
            r = n(6511),
            d = n.n(r);
          const { default: u } = await n.e(365).then(n.t.bind(n, 4662, 23)),
            { jsx: A } = await n.e(455).then(n.t.bind(n, 4455, 23)),
            { jsxs: o } = await n.e(455).then(n.t.bind(n, 4455, 23));
          function l(t) {
            var e = t.humidity,
              n = t.rain,
              i = t.wind_speed;
            return A('div', {
              className: u.tag,
              children: A('div', {
                className: u.tagInner,
                children: o('ul', {
                  children: [
                    o('li', {
                      className: u.blue,
                      children: [
                        A('div', { children: A('img', { src: s() }) }),
                        o('span', { className: u.value, children: [n, '%'] }),
                      ],
                    }),
                    o('li', {
                      className: u.blue,
                      children: [
                        A('div', { children: A('img', { src: a() }) }),
                        o('span', { className: u.value, children: [e, '%'] }),
                      ],
                    }),
                    o('li', {
                      className: u.blue,
                      children: [
                        A('div', { children: A('img', { src: d() }) }),
                        o('span', {
                          className: u.value,
                          children: [i, ' km/h'],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }
          t();
        },
        1,
      );
    },
    78: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.d(e, {
            Z: function () {
              return p;
            },
          });
          var i = n(6229),
            a = n.n(i),
            c = n(9228),
            s = t([c]);
          c = (s.then ? await s : s)[0];
          const { default: r } = await n.e(813).then(n.t.bind(n, 7813, 23)),
            { default: d } = await n.e(797).then(n.t.bind(n, 8797, 23)),
            { useEffect: u, useState: A } = await n
              .e(910)
              .then(n.t.bind(n, 9910, 23)),
            { default: o } = await n.e(164).then(n.t.bind(n, 4164, 23)),
            { jsx: l } = await n.e(455).then(n.t.bind(n, 4455, 23)),
            { jsxs: h } = await n.e(455).then(n.t.bind(n, 4455, 23));
          a(), a(), a(), a(), a(), a(), a();
          function p(t) {
            var e = A(),
              n = r(e, 2),
              i = n[0],
              a = n[1];
            return (
              u(() => {
                var e = t.weekList.reduce(
                  (t, e) => (
                    t.push({
                      id: e.dt,
                      title: (0, c.x2)(o(o.unix(e.dt)).day()),
                      img:
                        (0, c.EJ)(e.weather[0].main) && c.H$[e.weather[0].main],
                      tempHigh: e.temp.max.toFixed(0),
                      tempLow: e.temp.min.toFixed(0),
                    }),
                    t
                  ),
                  [],
                );
                a(e);
              }, [t.weekList]),
              l('div', {
                className: d.week,
                children: l('div', {
                  className: d.weekInner,
                  children: l('ul', {
                    children:
                      null === i || void 0 === i
                        ? void 0
                        : i.map((t) =>
                            h(
                              'li',
                              {
                                children: [
                                  l('div', {
                                    className: d.title,
                                    children: t.title,
                                  }),
                                  l('div', {
                                    children: l('img', {
                                      className: d.weekImg,
                                      src: t.img,
                                    }),
                                  }),
                                  h('div', {
                                    className: d.temp,
                                    children: [
                                      h('span', {
                                        className: d.high,
                                        children: [
                                          t.tempHigh,
                                          l('span', {
                                            className: d.unit,
                                            children: '\xb0C',
                                          }),
                                        ],
                                      }),
                                      h('span', {
                                        className: d.low,
                                        children: [
                                          t.tempLow,
                                          l('span', {
                                            className: d.unit,
                                            children: '\xb0C',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t.id,
                            ),
                          ),
                  }),
                }),
              })
            );
          }
          t();
        },
        1,
      );
    },
    3670: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.r(e),
            n.d(e, {
              default: function () {
                return C;
              },
            });
          var i = n(2231),
            a = n(6594),
            c = n.n(a),
            s = n(3562),
            r = n(3024),
            d = n(8284),
            u = n(78),
            A = n(2306),
            o = n(9228),
            l = n(7109),
            h = n(3419),
            p = t([u, d, r, s, o, l, A, i, h]);
          [u, d, r, s, o, l, A, i, h] = p.then ? await p : p;
          const { default: m } = await n.e(634).then(n.t.bind(n, 5634, 23)),
            { default: f } = await n.e(894).then(n.t.bind(n, 9894, 23)),
            { default: w } = await n.e(813).then(n.t.bind(n, 7813, 23)),
            { useLocation: g } = await n.e(412).then(n.t.bind(n, 4412, 23)),
            { default: v } = await n.e(989).then(n.t.bind(n, 6989, 23)),
            { useEffect: b, useState: N } = await n
              .e(910)
              .then(n.t.bind(n, 9910, 23)),
            { jsx: x } = await n.e(455).then(n.t.bind(n, 4455, 23)),
            { jsxs: y } = await n.e(455).then(n.t.bind(n, 4455, 23));
          function C() {
            var t = (0, h.Z)(),
              e = g(),
              n = e.query,
              a = n.latitude,
              p = n.longitude,
              C = n.city,
              E = n.province,
              S = N({
                humidity: 0,
                wind_speed: 0,
                rain: 0,
                temp: 0,
                main: 'Clear',
                mainList: [],
                daily: [],
                hourly: [],
              }),
              B = w(S, 2),
              R = B[0],
              k = B[1],
              Z = () => {
                i.m8.push('/');
              },
              L = (function () {
                var e = f(
                  m.mark(function e() {
                    var n;
                    return m.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.setLoadingState(!0),
                              (e.next = 3),
                              (0, A.p)({
                                lat: Number(a),
                                lon: Number(p),
                                exclude: 'minutely',
                              })
                            );
                          case 3:
                            (n = e.sent),
                              t.setLoadingState(!1),
                              k({
                                temp: n.current.temp.toFixed(0),
                                humidity: n.current.humidity,
                                wind_speed: n.current.wind_speed,
                                rain: n.current.rain ? n.current.rain['1h'] : 0,
                                main: n.current.weather[0].main,
                                mainList: n.current.weather,
                                daily: n.daily,
                                hourly: n.hourly,
                              });
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (
              b(() => {
                L();
              }, []),
              y('div', {
                className: v.wrapper,
                children: [
                  x(l.Z, { loading: t.loading }),
                  x('div', {
                    className: v.back,
                    children: x('img', { onClick: Z, src: c(), alt: 'back' }),
                  }),
                  x('div', {
                    className: v.weatherIcon,
                    children: x('img', {
                      width: 150,
                      src: (0, o.EJ)(R.main) && o.H$[R.main],
                    }),
                  }),
                  y('div', {
                    className: v.location,
                    children: [
                      x('div', {
                        children: C && 0 !== C.length ? ''.concat(C, ',') : '',
                      }),
                      x('div', { className: v.province, children: E }),
                    ],
                  }),
                  y('div', {
                    className: v.temperature,
                    children: [R.temp, x('span', { children: '\xb0C' })],
                  }),
                  x(s.Z, {
                    humidity: R.humidity,
                    wind_speed: R.wind_speed,
                    rain: R.rain,
                  }),
                  x(r.Z, { hourList: R.hourly }),
                  x(d.Z, { hourList: R.hourly }),
                  x(u.Z, { weekList: R.daily }),
                ],
              })
            );
          }
          t();
        },
        1,
      );
    },
    6773: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          const { default: i } = await n.e(813).then(n.t.bind(n, 7813, 23)),
            { default: a } = await n.e(164).then(n.t.bind(n, 4164, 23)),
            { useEffect: c, useState: s } = await n
              .e(910)
              .then(n.t.bind(n, 9910, 23));
          var r = (t) => {
            var e = s(),
              n = i(e, 2),
              r = n[0],
              d = n[1];
            return (
              c(() => {
                var e = t.reduce(
                  (t, e, n) => (
                    n < 24 &&
                      t.push({
                        id: e.dt,
                        temp: e.temp.toFixed(0),
                        time: a.unix(e.dt).format('H a'),
                      }),
                    t
                  ),
                  [],
                );
                d(e);
              }, [t]),
              [r]
            );
          };
          (e['Z'] = r), t();
        },
        1,
      );
    },
    3419: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          const { default: i } = await n.e(813).then(n.t.bind(n, 7813, 23)),
            { useState: a } = await n.e(910).then(n.t.bind(n, 9910, 23));
          var c = () => {
            var t = a(!1),
              e = i(t, 2),
              n = e[0],
              c = e[1],
              s = (t) => {
                c(t);
              };
            return { loading: n, setLoadingState: s };
          };
          (e['Z'] = c), t();
        },
        1,
      );
    },
    2306: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.d(e, {
            p: function () {
              return s;
            },
          });
          const { default: i } = await n.e(822).then(n.t.bind(n, 5822, 23)),
            { default: a } = await n.e(304).then(n.t.bind(n, 6103, 23));
          var c = '5329ece50e04a1bd3c4c826d6f3e2340';
          function s(t) {
            return i('https://api.openweathermap.org/data/2.5/onecall', {
              method: 'get',
              useCache: !0,
              timeout: 0,
              params: {
                appid: c,
                lat: t.lat,
                lon: t.lon,
                exclude: t.exclude,
                units: 'metric',
                lang: 'zh_cn',
              },
            })
              .then(function (t) {
                return a.set('weather', t), t;
              })
              .catch(function (t) {
                return a.get('weather');
              });
          }
          t();
        },
        1,
      );
    },
    9228: function (t, e, n) {
      'use strict';
      n.a(
        t,
        async function (t) {
          n.d(e, {
            k$: function () {
              return c;
            },
            x2: function () {
              return r;
            },
            H$: function () {
              return u;
            },
            EJ: function () {
              return A;
            },
          });
          const { default: i } = await n.e(164).then(n.t.bind(n, 4164, 23)),
            { default: a } = await n.e(304).then(n.t.bind(n, 6103, 23));
          function c() {
            return new Promise((t, e) => {
              navigator.geolocation
                ? navigator.geolocation.getCurrentPosition(
                    (e) => {
                      var n = {
                        latitude: e.coords.latitude,
                        longitude: e.coords.longitude,
                      };
                      a.set('location', n), t(n);
                    },
                    (t) => {
                      switch (t.code) {
                        case 1:
                          e(
                            '\u4f4d\u7f6e\u670d\u52a1\u8bf7\u6c42\u88ab\u62d2\u7edd',
                          );
                          break;
                        case 2:
                          e(
                            '\u6682\u65f6\u83b7\u53d6\u4e0d\u5230\u4f4d\u7f6e\u4fe1\u606f',
                          );
                          break;
                        case 3:
                          e('\u83b7\u53d6\u4fe1\u606f\u8d85\u65f6');
                          break;
                        case 4:
                          e('\u672a\u77e5\u9519\u8bef');
                          break;
                      }
                    },
                    { enableHighAccuracy: !0, timeout: 4e3 },
                  )
                : e('\u4e0d\u652f\u6301\u5730\u7406\u5b9a\u4f4d');
            });
          }
          var s;
          function r(t) {
            var e = t;
            return s[e];
          }
          (function (t) {
            (t[(t['\u5468\u65e5'] = 0)] = '\u5468\u65e5'),
              (t[(t['\u5468\u4e00'] = 1)] = '\u5468\u4e00'),
              (t[(t['\u5468\u4e8c'] = 2)] = '\u5468\u4e8c'),
              (t[(t['\u5468\u4e09'] = 3)] = '\u5468\u4e09'),
              (t[(t['\u5468\u56db'] = 4)] = '\u5468\u56db'),
              (t[(t['\u5468\u4e94'] = 5)] = '\u5468\u4e94'),
              (t[(t['\u5468\u516d'] = 6)] = '\u5468\u516d');
          })(s || (s = {}));
          var d = i().hour() > 18 || i().hour() < 6,
            u = {
              Thunderstorm: n(d ? 2436 : 3046),
              Drizzle: n(d ? 6493 : 3779),
              Rain: n(d ? 6493 : 3779),
              Snow: n(d ? 3325 : 879),
              Clear: n(d ? 1028 : 6229),
              Clouds: n(d ? 3963 : 4389),
              Atmosphere: n(d ? 1442 : 596),
            };
          function A(t) {
            return t in u;
          }
          t();
        },
        1,
      );
    },
    6594: function (t) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgBrZTBjcIwEEX/2AvLkRK8e8rRYhuADjYV7HaytEAFSwehA65IXHxCSFxcAlcOYRg7IRIEJBPlXyYZKc/fk5khPJHNjNGEgpnGuuR8e/AOCXp7BlOgNRiG5L3U+JaQBFQtmDFjzVQIyNQpPwSWSBS1YO/ijGCvsAF4ttl7j0TdXFmPUARuV1hQc+VJ9vkvhqeofB+V4vxVWPVpDSPwbwMjnm13aX+1BZxk5o9Ac/QgBs/pK/tg9ChpN1qgLzEtYg3F5VLCT5WUGp6lhoeONbw+9AW9aWyBriVMKyb8WfrQde3DoHLEuRzh6pPiPIe5xgui+4S1Mn6nuBhsF6et5eCcPw5YnAqoccpx2yRJPUqGkQtzHKEyOUPCCom6AM39b32sCfxTAAAAAElFTkSuQmCC';
    },
    5123: function (t) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgB7ZSxDcIwEEXvjoouG0CH0mWEjAAb3AYRG5AJzAZJJmAE2IAOBFVGyAQ2FzASBdLZQXR+0smJ9H3PLnwACQUMCd3YrB3SwTlb5+12BxFQSMgCZK8wLiCSIMEvJEESfOfMJgvNThLMkY5XNksp1rLRAt+0kGJ51a2Wn3KDkwPoxlVkpRYOEhDQc0RI40xO3edNxfK7lCq1veqwu8igmyE1zs8j2cCrpuogEPUGhGTezUfkew8RqAL8aO4ZIAJVYJ3dyNJ72eAQa/gHdzZFzANLBPMA9Mc0iK06XBMAAAAASUVORK5CYII=';
    },
    2998: function (t) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgB7VRNTsJAFH5vhkaiMeEI3RmNieUE4gmsJ7AqTVxK1IUrcWWiQuPORAx4AvEE6AnAxAh1A0dgZVTCjNNC+Z3Sogs3fAkZ+t603/v53gOY4b+BMmPysppAQrZb3+yscLLcGPWbF+8ap3wzd7h0BgEgUlaKuqA2lDlS2rt600f9nLZ1REibWbtunFdVmJZAYK17qoTQvGGVY0MBIK57fieIUX8YgkHEFFDUCX41CtHpCJDDY/+JX9+mVit+ftHEyk1qvE+BOBBp71v+9U1a1YTzgwAghESQsvwQpgfdm6g5yorM0fygeTdTNSYpKTwB424fENjLoJkitYSSyubFqyZ7LSIzGulyrJCONwdtuePlJ5CUFIE3uVASV6hUSdIMyGJUNzN2PmiI3LvINsRgxHMpNwAYD0ACM1srCVdC/G0y1t65O1op9n12ufXFtsI22qcHxKtnTEzygzepjpLEoYma15MZ+xR+T8CH6hmBqNa9nfBszi7y9pRTSkdNoQk4g/vehwAafvUliG4gVCEaRZJPZmpWKILc0ZLBRfPayHbm8SPey4RAwSHshvG8QD6LnWy42jndvv0dshWyZ9n6wYStOoMvfgDBRZZQsAWCHAAAAABJRU5ErkJggg==';
    },
    4389: function (t, e, n) {
      t.exports = n.p + 'static/clouds-day.b606c9ff.png';
    },
    3963: function (t, e, n) {
      t.exports = n.p + 'static/clouds-night.eaf98c27.png';
    },
    3779: function (t, e, n) {
      t.exports = n.p + 'static/rain-day.03e675da.png';
    },
    6493: function (t, e, n) {
      t.exports = n.p + 'static/rain-night.7cb8f791.png';
    },
    879: function (t, e, n) {
      t.exports = n.p + 'static/snow-day.8d9d6b94.png';
    },
    3325: function (t, e, n) {
      t.exports = n.p + 'static/snow-night.bdbd9c27.png';
    },
    6229: function (t, e, n) {
      t.exports = n.p + 'static/sun-day.f60f0bf2.png';
    },
    1028: function (t, e, n) {
      t.exports = n.p + 'static/sun-night.b54e374b.png';
    },
    2436: function (t, e, n) {
      t.exports = n.p + 'static/thunder-night.34db9ab2.png';
    },
    3046: function (t, e, n) {
      t.exports = n.p + 'static/thunder.cdf5c69a.png';
    },
    596: function (t, e, n) {
      t.exports = n.p + 'static/wind-day.4ec6c7a2.png';
    },
    1442: function (t, e, n) {
      t.exports = n.p + 'static/wind-night.364dfe69.png';
    },
    6511: function (t) {
      t.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7ZVNdtNADMf/kkMfO8wJyBFyAmJveZCYHa8vKekJKCdIcwLgBJimC3Z1gP04J2hugHuD7NuMqknjtHbz4X6s+vp7z/GMRhpZo5ECPHMHqIpStzX+RoSDfC6Q9Jxk/3cSZlXsuYoS2J7p1osHUwIFO8Knu5FpVDGvFEmZvWh8qOH0BZQOR2/DbfrVIilxlDQP3Zsg9Vz2KTL1znsTPJoTt+FiOHU/nWjc1+P7zx6b3vXaEiob71j0sAEL+Ez8WYe+kN0XIGNhkzs9GjVfl21qNycvgAjEfWxgGbpgMByFcfeD6eVCIRqssik48YAYZDPM4GMTHpJ4FE71aPyZeG2mmUv+JE7CKZ40hcS7K0ge3cqJR/Lx4gJu7Qs2YeXX8G8Yl8WFnFANdRIKSjp6zuKvWSvCFHRa4zfHf5qDtZGsIq+JbX1KL0HDCp/osG5nNjz+F6ZL39jCS3200E667dTMr+sa9GZNtG5+zL+cUOhpW52ocSZiz1xTJOaf6uhgna5YfrVKXkMVGIkWX/vqKznQ13c33n1nGsyLmmJu8uLvwNM6urOTYaKVHRmtU+7pNHMy16M0B6dlXa36r3Epf/dq9Tl7LW35muj55mwn2jFSlxs88xAuAcxvogfShBAjAAAAAElFTkSuQmCC';
    },
  },
]);
