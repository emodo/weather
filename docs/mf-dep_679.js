(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_679'],
  {
    19700: function (e, r, t) {
      'use strict';
      function n(e, r) {
        if (null == e) return {};
        var t,
          n,
          u = {},
          f = Object.keys(e);
        for (n = 0; n < f.length; n++)
          (t = f[n]), r.indexOf(t) >= 0 || (u[t] = e[t]);
        return u;
      }
      function u(e, r) {
        if (null == e) return {};
        var t,
          u,
          f = n(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (u = 0; u < l.length; u++)
            (t = l[u]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (f[t] = e[t]));
        }
        return f;
      }
      t.r(r),
        t.d(r, {
          default: function () {
            return f;
          },
        });
      var f = u;
    },
  },
]);
