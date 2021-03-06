(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    107: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(0),
        a = c.n(n),
        r = c(31),
        s = c.n(r),
        i = (c(48), c(108)),
        o = c(5);
      function u() {
        return Object(o.jsx)(i.a, {
          className: "d-flex justify-content-center align-items-center",
          style: { minHeight: "100vh" },
          children: Object(o.jsx)("a", {
            className: "btn btn-success btn-lg",
            href: "https://accounts.spotify.com/authorize?client_id=88e9ad173305490ba60849a2ecf9d0d8&response_type=code&redirect_uri=https://spotify-only-server-side-to-be-deployed.vercel.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
            children: "Login With Spotify",
          }),
        });
      }
      var l = c(7),
        d = c(8),
        f = c.n(d);
      var b = c(109),
        j = c(32),
        h = c.n(j);
      function p(e) {
        var t = e.track,
          c = e.chooseTrack;
        return Object(o.jsxs)("div", {
          className: "d-flex m-2 align-items-center",
          style: { cursor: "pointer" },
          onClick: function () {
            c(t);
          },
          children: [
            Object(o.jsx)("img", {
              src: t.albumUrl,
              style: { height: "64px", width: "64px" },
            }),
            Object(o.jsxs)("div", {
              className: "ml-3",
              children: [
                Object(o.jsx)("div", { children: t.title }),
                Object(o.jsx)("div", {
                  className: "text-muted",
                  children: t.artist,
                }),
              ],
            }),
          ],
        });
      }
      var O = c(41);
      function v(e) {
        var t = e.accessToken,
          c = e.trackUri,
          a = Object(n.useState)(!1),
          r = Object(l.a)(a, 2),
          s = r[0],
          i = r[1];
        return (
          Object(n.useEffect)(
            function () {
              return i(!0);
            },
            [c]
          ),
          t
            ? Object(o.jsx)(O.a, {
                token: t,
                showSaveIcon: !0,
                callback: function (e) {
                  e.isPlaying || i(!1);
                },
                play: s,
                uris: c ? [c] : [],
              })
            : null
        );
      }
      var y = new h.a({ clientId: "88e9ad173305490ba60849a2ecf9d0d8" });
      function m(e) {
        var t = (function (e) {
            var t = Object(n.useState)(),
              c = Object(l.a)(t, 2),
              a = c[0],
              r = c[1],
              s = Object(n.useState)(),
              i = Object(l.a)(s, 2),
              o = i[0],
              u = i[1],
              d = Object(n.useState)(),
              b = Object(l.a)(d, 2),
              j = b[0],
              h = b[1];
            return (
              Object(n.useEffect)(
                function () {
                  f.a
                    .post(
                      "https://spotify-only-server-side-to-be-deployed.vercel.app/login",
                      { code: e }
                    )
                    .then(function (e) {
                      r(e.data.accessToken),
                        u(e.data.refreshToken),
                        h(e.data.expiresIn),
                        window.history.pushState({}, null, "/");
                    })
                    .catch(function () {
                      window.location = "/";
                    });
                },
                [e]
              ),
              Object(n.useEffect)(
                function () {
                  if (o && j) {
                    var e = setInterval(function () {
                      f.a
                        .post(
                          "https://spotify-only-server-side-to-be-deployed.vercel.app/refresh",
                          { refreshToken: o }
                        )
                        .then(function (e) {
                          r(e.data.accessToken), h(e.data.expiresIn);
                        })
                        .catch(function () {
                          window.location = "/";
                        });
                    }, 1e3 * (j - 60));
                    return function () {
                      return clearInterval(e);
                    };
                  }
                },
                [o, j]
              ),
              a
            );
          })(e.code),
          c = Object(n.useState)(""),
          a = Object(l.a)(c, 2),
          r = a[0],
          s = a[1],
          u = Object(n.useState)([]),
          d = Object(l.a)(u, 2),
          j = d[0],
          h = d[1],
          O = Object(n.useState)(),
          m = Object(l.a)(O, 2),
          x = m[0],
          g = m[1],
          k = Object(n.useState)(""),
          w = Object(l.a)(k, 2),
          S = w[0],
          T = w[1];
        function N(e) {
          g(e), s(""), T("");
        }
        return (
          Object(n.useEffect)(
            function () {
              x &&
                f.a
                  .get(
                    "https://spotify-only-server-side-to-be-deployed.vercel.app/lyrics",
                    { params: { track: x.title, artist: x.artist } }
                  )
                  .then(function (e) {
                    T(e.data.lyrics);
                  });
            },
            [x]
          ),
          Object(n.useEffect)(
            function () {
              t && y.setAccessToken(t);
            },
            [t]
          ),
          Object(n.useEffect)(
            function () {
              if (!r) return h([]);
              if (t) {
                var e = !1;
                return (
                  y.searchTracks(r).then(function (t) {
                    e ||
                      h(
                        t.body.tracks.items.map(function (e) {
                          var t = e.album.images.reduce(function (e, t) {
                            return t.height < e.height ? t : e;
                          }, e.album.images[0]);
                          return {
                            artist: e.artists[0].name,
                            title: e.name,
                            uri: e.uri,
                            albumUrl: t.url,
                          };
                        })
                      );
                  }),
                  function () {
                    return (e = !0);
                  }
                );
              }
            },
            [r, t]
          ),
          Object(o.jsxs)(i.a, {
            className: "d-flex flex-column py-2",
            style: { height: "100vh" },
            children: [
              Object(o.jsx)(b.a.Control, {
                type: "search",
                placeholder: "Search Songs/Artists",
                value: r,
                onChange: function (e) {
                  return s(e.target.value);
                },
              }),
              Object(o.jsxs)("div", {
                className: "flex-grow-1 my-2",
                style: { overflowY: "auto" },
                children: [
                  j.map(function (e) {
                    return Object(o.jsx)(
                      p,
                      { track: e, chooseTrack: N },
                      e.uri
                    );
                  }),
                  0 === j.length &&
                    Object(o.jsx)("div", {
                      className: "text-center",
                      style: { whiteSpace: "pre" },
                      children: S,
                    }),
                ],
              }),
              Object(o.jsx)("div", {
                children: Object(o.jsx)(v, {
                  accessToken: t,
                  trackUri: null === x || void 0 === x ? void 0 : x.uri,
                }),
              }),
            ],
          })
        );
      }
      var x = new URLSearchParams(window.location.search).get("code");
      var g = function () {
        return x ? Object(o.jsx)(m, { code: x }) : Object(o.jsx)(u, {});
      };
      s.a.render(
        Object(o.jsx)(a.a.StrictMode, { children: Object(o.jsx)(g, {}) }),
        document.getElementById("root")
      );
    },
    86: function (e, t) {},
  },
  [[107, 1, 2]],
]);
//# sourceMappingURL=main.9914947a.chunk.js.map
