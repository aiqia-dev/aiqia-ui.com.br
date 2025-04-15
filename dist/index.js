import * as f from "react";
import K, { forwardRef as ta, createElement as wl, useState as yt, createContext as ur, useContext as dr, useEffect as Ge, useLayoutEffect as Yv, useRef as Rr, useCallback as Xv, isValidElement as f0, PureComponent as ra, useImperativeHandle as yu, useMemo as p0, cloneElement as m0 } from "react";
import * as Mn from "react-dom";
import Qv from "react-dom";
import { Link as h0 } from "react-router-dom";
import { useFormContext as Zv, FormProvider as v0, Controller as g0 } from "react-hook-form";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var no = { exports: {} }, Jr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function y0() {
  if (bf) return Jr;
  bf = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      a = {};
      for (var s in o)
        s !== "key" && (a[s] = o[s]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Jr.Fragment = t, Jr.jsx = r, Jr.jsxs = r, Jr;
}
var en = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function b0() {
  return xf || (xf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === A ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case S:
          return "Fragment";
        case C:
          return "Portal";
        case R:
          return "Profiler";
        case P:
          return "StrictMode";
        case W:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case I:
            return (E.displayName || "Context") + ".Provider";
          case T:
            return (E._context.displayName || "Context") + ".Consumer";
          case O:
            var X = E.render;
            return E = E.displayName, E || (E = X.displayName || X.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case N:
            return X = E.displayName || null, X !== null ? X : e(E.type) || "Memo";
          case L:
            X = E._payload, E = E._init;
            try {
              return e(E(X));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function r(E) {
      try {
        t(E);
        var X = !1;
      } catch {
        X = !0;
      }
      if (X) {
        X = console;
        var Q = X.error, fe = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Q.call(
          X,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          fe
        ), t(E);
      }
    }
    function n() {
    }
    function o() {
      if (Y === 0) {
        U = console.log, oe = console.info, B = console.warn, te = console.error, se = console.group, ae = console.groupCollapsed, ne = console.groupEnd;
        var E = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: E,
          log: E,
          warn: E,
          error: E,
          group: E,
          groupCollapsed: E,
          groupEnd: E
        });
      }
      Y++;
    }
    function a() {
      if (Y--, Y === 0) {
        var E = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ee({}, E, { value: U }),
          info: ee({}, E, { value: oe }),
          warn: ee({}, E, { value: B }),
          error: ee({}, E, { value: te }),
          group: ee({}, E, { value: se }),
          groupCollapsed: ee({}, E, { value: ae }),
          groupEnd: ee({}, E, { value: ne })
        });
      }
      0 > Y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function i(E) {
      if (H === void 0)
        try {
          throw Error();
        } catch (Q) {
          var X = Q.stack.trim().match(/\n( *(at )?)/);
          H = X && X[1] || "", le = -1 < Q.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Q.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + H + E + le;
    }
    function s(E, X) {
      if (!E || z) return "";
      var Q = ge.get(E);
      if (Q !== void 0) return Q;
      z = !0, Q = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var fe = null;
      fe = $.H, $.H = null, o();
      try {
        var Me = {
          DetermineComponentFrameRoot: function() {
            try {
              if (X) {
                var qe = function() {
                  throw Error();
                };
                if (Object.defineProperty(qe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(qe, []);
                  } catch (Je) {
                    var yr = Je;
                  }
                  Reflect.construct(E, [], qe);
                } else {
                  try {
                    qe.call();
                  } catch (Je) {
                    yr = Je;
                  }
                  E.call(qe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Je) {
                  yr = Je;
                }
                (qe = E()) && typeof qe.catch == "function" && qe.catch(function() {
                });
              }
            } catch (Je) {
              if (Je && yr && typeof Je.stack == "string")
                return [Je.stack, yr.stack];
            }
            return [null, null];
          }
        };
        Me.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var xe = Object.getOwnPropertyDescriptor(
          Me.DetermineComponentFrameRoot,
          "name"
        );
        xe && xe.configurable && Object.defineProperty(
          Me.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var ue = Me.DetermineComponentFrameRoot(), Qe = ue[0], dt = ue[1];
        if (Qe && dt) {
          var Ee = Qe.split(`
`), Ze = dt.split(`
`);
          for (ue = xe = 0; xe < Ee.length && !Ee[xe].includes(
            "DetermineComponentFrameRoot"
          ); )
            xe++;
          for (; ue < Ze.length && !Ze[ue].includes(
            "DetermineComponentFrameRoot"
          ); )
            ue++;
          if (xe === Ee.length || ue === Ze.length)
            for (xe = Ee.length - 1, ue = Ze.length - 1; 1 <= xe && 0 <= ue && Ee[xe] !== Ze[ue]; )
              ue--;
          for (; 1 <= xe && 0 <= ue; xe--, ue--)
            if (Ee[xe] !== Ze[ue]) {
              if (xe !== 1 || ue !== 1)
                do
                  if (xe--, ue--, 0 > ue || Ee[xe] !== Ze[ue]) {
                    var Nt = `
` + Ee[xe].replace(
                      " at new ",
                      " at "
                    );
                    return E.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", E.displayName)), typeof E == "function" && ge.set(E, Nt), Nt;
                  }
                while (1 <= xe && 0 <= ue);
              break;
            }
        }
      } finally {
        z = !1, $.H = fe, a(), Error.prepareStackTrace = Q;
      }
      return Ee = (Ee = E ? E.displayName || E.name : "") ? i(Ee) : "", typeof E == "function" && ge.set(E, Ee), Ee;
    }
    function c(E) {
      if (E == null) return "";
      if (typeof E == "function") {
        var X = E.prototype;
        return s(
          E,
          !(!X || !X.isReactComponent)
        );
      }
      if (typeof E == "string") return i(E);
      switch (E) {
        case W:
          return i("Suspense");
        case F:
          return i("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case O:
            return E = s(E.render, !1), E;
          case N:
            return c(E.type);
          case L:
            X = E._payload, E = E._init;
            try {
              return c(E(X));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var E = $.A;
      return E === null ? null : E.getOwner();
    }
    function d(E) {
      if (re.call(E, "key")) {
        var X = Object.getOwnPropertyDescriptor(E, "key").get;
        if (X && X.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function p(E, X) {
      function Q() {
        Ne || (Ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          X
        ));
      }
      Q.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: Q,
        configurable: !0
      });
    }
    function m() {
      var E = e(this.type);
      return He[E] || (He[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function v(E, X, Q, fe, Me, xe) {
      return Q = xe.ref, E = {
        $$typeof: _,
        type: E,
        key: X,
        props: xe,
        _owner: Me
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function y(E, X, Q, fe, Me, xe) {
      if (typeof E == "string" || typeof E == "function" || E === S || E === R || E === P || E === W || E === F || E === D || typeof E == "object" && E !== null && (E.$$typeof === L || E.$$typeof === N || E.$$typeof === I || E.$$typeof === T || E.$$typeof === O || E.$$typeof === j || E.getModuleId !== void 0)) {
        var ue = X.children;
        if (ue !== void 0)
          if (fe)
            if (G(ue)) {
              for (fe = 0; fe < ue.length; fe++)
                h(ue[fe], E);
              Object.freeze && Object.freeze(ue);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else h(ue, E);
      } else
        ue = "", (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), E === null ? fe = "null" : G(E) ? fe = "array" : E !== void 0 && E.$$typeof === _ ? (fe = "<" + (e(E.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof E, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          fe,
          ue
        );
      if (re.call(X, "key")) {
        ue = e(E);
        var Qe = Object.keys(X).filter(function(Ee) {
          return Ee !== "key";
        });
        fe = 0 < Qe.length ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}", De[ue + fe] || (Qe = 0 < Qe.length ? "{" + Qe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          fe,
          ue,
          Qe,
          ue
        ), De[ue + fe] = !0);
      }
      if (ue = null, Q !== void 0 && (r(Q), ue = "" + Q), d(X) && (r(X.key), ue = "" + X.key), "key" in X) {
        Q = {};
        for (var dt in X)
          dt !== "key" && (Q[dt] = X[dt]);
      } else Q = X;
      return ue && p(
        Q,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), v(E, ue, xe, Me, l(), Q);
    }
    function h(E, X) {
      if (typeof E == "object" && E && E.$$typeof !== Se) {
        if (G(E))
          for (var Q = 0; Q < E.length; Q++) {
            var fe = E[Q];
            g(fe) && b(fe, X);
          }
        else if (g(E))
          E._store && (E._store.validated = 1);
        else if (E === null || typeof E != "object" ? Q = null : (Q = k && E[k] || E["@@iterator"], Q = typeof Q == "function" ? Q : null), typeof Q == "function" && Q !== E.entries && (Q = Q.call(E), Q !== E))
          for (; !(E = Q.next()).done; )
            g(E.value) && b(E.value, X);
      }
    }
    function g(E) {
      return typeof E == "object" && E !== null && E.$$typeof === _;
    }
    function b(E, X) {
      if (E._store && !E._store.validated && E.key == null && (E._store.validated = 1, X = x(X), !ut[X])) {
        ut[X] = !0;
        var Q = "";
        E && E._owner != null && E._owner !== l() && (Q = null, typeof E._owner.tag == "number" ? Q = e(E._owner.type) : typeof E._owner.name == "string" && (Q = E._owner.name), Q = " It was passed a child from " + Q + ".");
        var fe = $.getCurrentStack;
        $.getCurrentStack = function() {
          var Me = c(E.type);
          return fe && (Me += fe() || ""), Me;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          X,
          Q
        ), $.getCurrentStack = fe;
      }
    }
    function x(E) {
      var X = "", Q = l();
      return Q && (Q = e(Q.type)) && (X = `

Check the render method of \`` + Q + "`."), X || (E = e(E)) && (X = `

Check the top-level render call using <` + E + ">."), X;
    }
    var w = K, _ = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), I = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), k = Symbol.iterator, A = Symbol.for("react.client.reference"), $ = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, ee = Object.assign, j = Symbol.for("react.client.reference"), G = Array.isArray, Y = 0, U, oe, B, te, se, ae, ne;
    n.__reactDisabledLog = !0;
    var H, le, z = !1, ge = new (typeof WeakMap == "function" ? WeakMap : Map)(), Se = Symbol.for("react.client.reference"), Ne, He = {}, De = {}, ut = {};
    en.Fragment = S, en.jsx = function(E, X, Q, fe, Me) {
      return y(E, X, Q, !1, fe, Me);
    }, en.jsxs = function(E, X, Q, fe, Me) {
      return y(E, X, Q, !0, fe, Me);
    };
  }()), en;
}
var wf;
function x0() {
  return wf || (wf = 1, process.env.NODE_ENV === "production" ? no.exports = y0() : no.exports = b0()), no.exports;
}
var u = x0();
function w0(e, t) {
  const r = f.createContext(t), n = (a) => {
    const { children: i, ...s } = a, c = f.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ u.jsx(r.Provider, { value: c, children: i });
  };
  n.displayName = e + "Provider";
  function o(a) {
    const i = f.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function Te(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = f.createContext(i), c = r.length;
    r = [...r, i];
    const l = (p) => {
      var b;
      const { scope: m, children: v, ...y } = p, h = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[c]) || s, g = f.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ u.jsx(h.Provider, { value: g, children: v });
    };
    l.displayName = a + "Provider";
    function d(p, m) {
      var h;
      const v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[c]) || s, y = f.useContext(v);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [l, d];
  }
  const o = () => {
    const a = r.map((i) => f.createContext(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [n, _0(o, ...t)];
}
function _0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = n.reduce((s, { useScope: c, scopeName: l }) => {
        const p = c(a)[`__scope${l}`];
        return { ...s, ...p };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function _f(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function An(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = _f(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : _f(e[o], null);
        }
      };
  };
}
function ie(...e) {
  return f.useCallback(An(...e), e);
}
var bt = f.forwardRef((e, t) => {
  const { children: r, ...n } = e, o = f.Children.toArray(r), a = o.find(S0);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? f.Children.count(i) > 1 ? f.Children.only(null) : f.isValidElement(i) ? i.props.children : null : c);
    return /* @__PURE__ */ u.jsx(_l, { ...n, ref: t, children: f.isValidElement(i) ? f.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ u.jsx(_l, { ...n, ref: t, children: r });
});
bt.displayName = "Slot";
var _l = f.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (f.isValidElement(r)) {
    const o = P0(r), a = C0(n, r.props);
    return r.type !== f.Fragment && (a.ref = t ? An(t, o) : o), f.cloneElement(r, a);
  }
  return f.Children.count(r) > 1 ? f.Children.only(null) : null;
});
_l.displayName = "SlotClone";
var bu = ({ children: e }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: e });
function S0(e) {
  return f.isValidElement(e) && e.type === bu;
}
function C0(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      a(...s), o(...s);
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function P0(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function fr(e) {
  const t = e + "CollectionProvider", [r, n] = Te(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: y, children: h } = v, g = K.useRef(null), b = K.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: y, itemMap: b, collectionRef: g, children: h });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = K.forwardRef(
    (v, y) => {
      const { scope: h, children: g } = v, b = a(s, h), x = ie(y, b.collectionRef);
      return /* @__PURE__ */ u.jsx(bt, { ref: x, children: g });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", d = "data-radix-collection-item", p = K.forwardRef(
    (v, y) => {
      const { scope: h, children: g, ...b } = v, x = K.useRef(null), w = ie(y, x), _ = a(l, h);
      return K.useEffect(() => (_.itemMap.set(x, { ref: x, ...b }), () => void _.itemMap.delete(x))), /* @__PURE__ */ u.jsx(bt, { [d]: "", ref: w, children: g });
    }
  );
  p.displayName = l;
  function m(v) {
    const y = a(e + "CollectionConsumer", v);
    return K.useCallback(() => {
      const g = y.collectionRef.current;
      if (!g) return [];
      const b = Array.from(g.querySelectorAll(`[${d}]`));
      return Array.from(y.itemMap.values()).sort(
        (_, C) => b.indexOf(_.ref.current) - b.indexOf(C.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: p },
    m,
    n
  ];
}
function q(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function pe(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Re({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, o] = E0({ defaultProp: t, onChange: r }), a = e !== void 0, i = a ? e : n, s = pe(r), c = f.useCallback(
    (l) => {
      if (a) {
        const p = typeof l == "function" ? l(e) : l;
        p !== e && s(p);
      } else
        o(l);
    },
    [a, e, o, s]
  );
  return [i, c];
}
function E0({
  defaultProp: e,
  onChange: t
}) {
  const r = f.useState(e), [n] = r, o = f.useRef(n), a = pe(t);
  return f.useEffect(() => {
    o.current !== n && (a(n), o.current = n);
  }, [n, o, a]), r;
}
var T0 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], V = T0.reduce((e, t) => {
  const r = f.forwardRef((n, o) => {
    const { asChild: a, ...i } = n, s = a ? bt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(s, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function pn(e, t) {
  e && Mn.flushSync(() => e.dispatchEvent(t));
}
var Pe = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
};
function N0(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var we = (e) => {
  const { present: t, children: r } = e, n = R0(t), o = typeof r == "function" ? r({ present: n.isPresent }) : f.Children.only(r), a = ie(n.ref, M0(o));
  return typeof r == "function" || n.isPresent ? f.cloneElement(o, { ref: a }) : null;
};
we.displayName = "Presence";
function R0(e) {
  const [t, r] = f.useState(), n = f.useRef({}), o = f.useRef(e), a = f.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = N0(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return f.useEffect(() => {
    const l = oo(n.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), Pe(() => {
    const l = n.current, d = o.current;
    if (d !== e) {
      const m = a.current, v = oo(l);
      e ? c("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Pe(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, p = (v) => {
        const h = oo(n.current).includes(v.animationName);
        if (v.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = oo(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: f.useCallback((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function oo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function M0(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var A0 = f.useId || (() => {
}), O0 = 0;
function _e(e) {
  const [t, r] = f.useState(A0());
  return Pe(() => {
    r((n) => n ?? String(O0++));
  }, [e]), t ? `radix-${t}` : "";
}
var xu = "Collapsible", [j0, Jv] = Te(xu), [D0, wu] = j0(xu), eg = f.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [c = !1, l] = Re({
      prop: n,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ u.jsx(
      D0,
      {
        scope: r,
        disabled: a,
        contentId: _e(),
        open: c,
        onOpenToggle: f.useCallback(() => l((d) => !d), [l]),
        children: /* @__PURE__ */ u.jsx(
          V.div,
          {
            "data-state": Su(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
eg.displayName = xu;
var tg = "CollapsibleTrigger", rg = f.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = wu(tg, r);
    return /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Su(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
rg.displayName = tg;
var _u = "CollapsibleContent", ng = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = wu(_u, e.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(we, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ u.jsx(I0, { ...n, ref: t, present: a }) });
  }
);
ng.displayName = _u;
var I0 = f.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = wu(_u, r), [s, c] = f.useState(n), l = f.useRef(null), d = ie(t, l), p = f.useRef(0), m = p.current, v = f.useRef(0), y = v.current, h = i.open || s, g = f.useRef(h), b = f.useRef(void 0);
  return f.useEffect(() => {
    const x = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), Pe(() => {
    const x = l.current;
    if (x) {
      b.current = b.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const w = x.getBoundingClientRect();
      p.current = w.height, v.current = w.width, g.current || (x.style.transitionDuration = b.current.transitionDuration, x.style.animationName = b.current.animationName), c(n);
    }
  }, [i.open, n]), /* @__PURE__ */ u.jsx(
    V.div,
    {
      "data-state": Su(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !h,
      ...a,
      ref: d,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": y ? `${y}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function Su(e) {
  return e ? "open" : "closed";
}
var k0 = eg, L0 = rg, $0 = ng, F0 = f.createContext(void 0);
function Dt(e) {
  const t = f.useContext(F0);
  return e || t || "ltr";
}
var It = "Accordion", q0 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Cu, B0, W0] = fr(It), [na, gW] = Te(It, [
  W0,
  Jv
]), Pu = Jv(), og = K.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ u.jsx(Cu.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ u.jsx(G0, { ...a, ref: t }) : /* @__PURE__ */ u.jsx(z0, { ...o, ref: t }) });
  }
);
og.displayName = It;
var [ag, H0] = na(It), [ig, V0] = na(
  It,
  { collapsible: !1 }
), z0 = K.forwardRef(
  (e, t) => {
    const {
      value: r,
      defaultValue: n,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, c] = Re({
      prop: r,
      defaultProp: n,
      onChange: o
    });
    return /* @__PURE__ */ u.jsx(
      ag,
      {
        scope: e.__scopeAccordion,
        value: s ? [s] : [],
        onItemOpen: c,
        onItemClose: K.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ u.jsx(ig, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ u.jsx(sg, { ...i, ref: t }) })
      }
    );
  }
), G0 = K.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Re({
    prop: r,
    defaultProp: n,
    onChange: o
  }), c = K.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = K.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ u.jsx(
    ag,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ u.jsx(ig, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(sg, { ...a, ref: t }) })
    }
  );
}), [U0, oa] = na(It), sg = K.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = K.useRef(null), c = ie(s, t), l = B0(r), p = Dt(o) === "ltr", m = q(e.onKeyDown, (v) => {
      var R;
      if (!q0.includes(v.key)) return;
      const y = v.target, h = l().filter((T) => {
        var I;
        return !((I = T.ref.current) != null && I.disabled);
      }), g = h.findIndex((T) => T.ref.current === y), b = h.length;
      if (g === -1) return;
      v.preventDefault();
      let x = g;
      const w = 0, _ = b - 1, C = () => {
        x = g + 1, x > _ && (x = w);
      }, S = () => {
        x = g - 1, x < w && (x = _);
      };
      switch (v.key) {
        case "Home":
          x = w;
          break;
        case "End":
          x = _;
          break;
        case "ArrowRight":
          a === "horizontal" && (p ? C() : S());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? S() : C());
          break;
        case "ArrowUp":
          a === "vertical" && S();
          break;
      }
      const P = x % b;
      (R = h[P].ref.current) == null || R.focus();
    });
    return /* @__PURE__ */ u.jsx(
      U0,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ u.jsx(Cu.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
          V.div,
          {
            ...i,
            "data-orientation": a,
            ref: c,
            onKeyDown: n ? void 0 : m
          }
        ) })
      }
    );
  }
), No = "AccordionItem", [K0, Eu] = na(No), cg = K.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = oa(No, r), i = H0(No, r), s = Pu(r), c = _e(), l = n && i.value.includes(n) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ u.jsx(
      K0,
      {
        scope: r,
        open: l,
        disabled: d,
        triggerId: c,
        children: /* @__PURE__ */ u.jsx(
          k0,
          {
            "data-orientation": a.orientation,
            "data-state": mg(l),
            ...s,
            ...o,
            ref: t,
            disabled: d,
            open: l,
            onOpenChange: (p) => {
              p ? i.onItemOpen(n) : i.onItemClose(n);
            }
          }
        )
      }
    );
  }
);
cg.displayName = No;
var lg = "AccordionHeader", ug = K.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = oa(It, r), a = Eu(lg, r);
    return /* @__PURE__ */ u.jsx(
      V.h3,
      {
        "data-orientation": o.orientation,
        "data-state": mg(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
ug.displayName = lg;
var Sl = "AccordionTrigger", dg = K.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = oa(It, r), a = Eu(Sl, r), i = V0(Sl, r), s = Pu(r);
    return /* @__PURE__ */ u.jsx(Cu.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      L0,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...n,
        ref: t
      }
    ) });
  }
);
dg.displayName = Sl;
var fg = "AccordionContent", pg = K.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = oa(It, r), a = Eu(fg, r), i = Pu(r);
    return /* @__PURE__ */ u.jsx(
      $0,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...n,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
pg.displayName = fg;
function mg(e) {
  return e ? "open" : "closed";
}
var Y0 = og, X0 = cg, Q0 = ug, hg = dg, vg = pg;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gg = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var J0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eP = ta(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => wl(
    "svg",
    {
      ref: c,
      ...J0,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: gg("lucide", o),
      ...s
    },
    [
      ...i.map(([l, d]) => wl(l, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = (e, t) => {
  const r = ta(
    ({ className: n, ...o }, a) => wl(eP, {
      ref: a,
      iconNode: t,
      className: gg(`lucide-${Z0(e)}`, n),
      ...o
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tP = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], rP = je("ArrowLeft", tP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], oP = je("ArrowRight", nP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aP = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], yg = je("Calendar", aP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iP = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], mn = je("Check", iP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Mr = je("ChevronDown", sP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cP = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Tu = je("ChevronLeft", cP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lP = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], On = je("ChevronRight", lP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], dP = je("ChevronUp", uP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Sf = je("CircleX", fP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pP = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], bg = je("Circle", pP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], hP = je("Clock", mP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vP = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], xg = je("Ellipsis", vP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gP = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], yP = je("LoaderCircle", gP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], xP = je("Plus", bP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wP = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], _P = je("Search", wP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SP = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
], CP = je("WandSparkles", SP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], aa = je("X", PP);
function wg(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = wg(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function At() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = wg(e)) && (n && (n += " "), n += t);
  return n;
}
const Nu = "-", EP = (e) => {
  const t = NP(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Nu);
      return s[0] === "" && s.length !== 1 && s.shift(), _g(s, t) || TP(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, _g = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? _g(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Nu);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Cf = /^\[(.+)\]$/, TP = (e) => {
  if (Cf.test(e)) {
    const t = Cf.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, NP = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Cl(r[o], n, o, t);
  return n;
}, Cl = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Pf(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (RP(o)) {
        Cl(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Cl(i, Pf(t, a), r, n);
    });
  });
}, Pf = (e, t) => {
  let r = e;
  return t.split(Nu).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, RP = (e) => e.isThemeGetter, MP = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    r.set(a, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = r.get(a);
      if (i !== void 0)
        return i;
      if ((i = n.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      r.has(a) ? r.set(a, i) : o(a, i);
    }
  };
}, Pl = "!", El = ":", AP = El.length, OP = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let i = 0, s = 0, c = 0, l;
    for (let y = 0; y < o.length; y++) {
      let h = o[y];
      if (i === 0 && s === 0) {
        if (h === El) {
          a.push(o.slice(c, y)), c = y + AP;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const d = a.length === 0 ? o : o.substring(c), p = jP(d), m = p !== d, v = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + El, a = n;
    n = (i) => i.startsWith(o) ? a(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (a) => r({
      className: a,
      parseClassName: o
    });
  }
  return n;
}, jP = (e) => e.endsWith(Pl) ? e.substring(0, e.length - 1) : e.startsWith(Pl) ? e.substring(1) : e, DP = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let a = [];
    return n.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...a.sort(), i), a = []) : a.push(i);
    }), o.push(...a.sort()), o;
  };
}, IP = (e) => ({
  cache: MP(e.cacheSize),
  parseClassName: OP(e),
  sortModifiers: DP(e),
  ...EP(e)
}), kP = /\s+/, LP = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(kP);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const d = s[l], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: y,
      maybePostfixModifierPosition: h
    } = r(d);
    if (p) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!h, b = n(g ? y.substring(0, h) : y);
    if (!b) {
      if (!g) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (b = n(y), !b) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const x = a(m).join(":"), w = v ? x + Pl : x, _ = w + b;
    if (i.includes(_))
      continue;
    i.push(_);
    const C = o(b, g);
    for (let S = 0; S < C.length; ++S) {
      const P = C[S];
      i.push(w + P);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function $P() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Sg(t)) && (n && (n += " "), n += r);
  return n;
}
const Sg = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Sg(e[n])) && (r && (r += " "), r += t);
  return r;
};
function FP(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const l = t.reduce((d, p) => p(d), e());
    return r = IP(l), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const d = LP(c, r);
    return o(c, d), d;
  }
  return function() {
    return a($P.apply(null, arguments));
  };
}
const Oe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Cg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Pg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qP = /^\d+\/\d+$/, BP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, WP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, HP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, VP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, br = (e) => qP.test(e), de = (e) => !!e && !Number.isNaN(Number(e)), Lt = (e) => !!e && Number.isInteger(Number(e)), Ef = (e) => e.endsWith("%") && de(e.slice(0, -1)), $t = (e) => BP.test(e), GP = () => !0, UP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  WP.test(e) && !HP.test(e)
), Ru = () => !1, KP = (e) => VP.test(e), YP = (e) => zP.test(e), XP = (e) => !Z(e) && !J(e), QP = (e) => Br(e, Ng, Ru), Z = (e) => Cg.test(e), Jt = (e) => Br(e, Rg, UP), Ua = (e) => Br(e, cE, de), ZP = (e) => Br(e, Eg, Ru), JP = (e) => Br(e, Tg, YP), eE = (e) => Br(e, Ru, KP), J = (e) => Pg.test(e), tn = (e) => Wr(e, Rg), tE = (e) => Wr(e, lE), rE = (e) => Wr(e, Eg), nE = (e) => Wr(e, Ng), oE = (e) => Wr(e, Tg), aE = (e) => Wr(e, uE, !0), Br = (e, t, r) => {
  const n = Cg.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Wr = (e, t, r = !1) => {
  const n = Pg.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Eg = (e) => e === "position", iE = /* @__PURE__ */ new Set(["image", "url"]), Tg = (e) => iE.has(e), sE = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ng = (e) => sE.has(e), Rg = (e) => e === "length", cE = (e) => e === "number", lE = (e) => e === "family-name", uE = (e) => e === "shadow", dE = () => {
  const e = Oe("color"), t = Oe("font"), r = Oe("text"), n = Oe("font-weight"), o = Oe("tracking"), a = Oe("leading"), i = Oe("breakpoint"), s = Oe("container"), c = Oe("spacing"), l = Oe("radius"), d = Oe("shadow"), p = Oe("inset-shadow"), m = Oe("drop-shadow"), v = Oe("blur"), y = Oe("perspective"), h = Oe("aspect"), g = Oe("ease"), b = Oe("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], S = () => [J, Z, c], P = () => [br, "full", "auto", ...S()], R = () => [Lt, "none", "subgrid", J, Z], T = () => ["auto", {
    span: ["full", Lt, J, Z]
  }, Lt, J, Z], I = () => [Lt, "auto", J, Z], O = () => ["auto", "min", "max", "fr", J, Z], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], N = () => ["auto", ...S()], L = () => [br, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], D = () => [e, J, Z], k = () => [Ef, tn, Jt], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    J,
    Z
  ], $ = () => ["", de, tn, Jt], re = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    J,
    Z
  ], G = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", J, Z], Y = () => ["none", de, J, Z], U = () => ["none", de, J, Z], oe = () => [de, J, Z], B = () => [br, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [$t],
      breakpoint: [$t],
      color: [GP],
      container: [$t],
      "drop-shadow": [$t],
      ease: ["in", "out", "in-out"],
      font: [XP],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [$t],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [$t],
      shadow: [$t],
      spacing: ["px", de],
      text: [$t],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", br, Z, J, h]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [de, Z, J, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...w(), Z, J]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Lt, "auto", J, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [br, "full", "auto", s, ...S()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [de, br, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", de, J, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", de, J, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Lt, "first", "last", "none", J, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": O()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": O()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...W(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...F(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...F()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...F(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...F(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": W()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...F(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...F()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: N()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: N()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: N()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: N()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: N()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: N()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: N()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: N()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: N()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": S()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": S()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: L()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...L()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...L()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, tn, Jt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, J, Ua]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ef, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tE, Z, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, J, Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [de, "none", J, Ua]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", J, Z]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", J, Z]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [de, "from-font", "auto", J, Jt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [de, "auto", J, Z]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, Z]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", J, Z]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...w(), rE, ZP]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", nE, QP]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Lt, J, Z],
          radial: ["", J, Z],
          conic: [Lt, J, Z]
        }, oE, JP]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: k()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": $()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...re(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...re(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: D()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...re(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [de, J, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", de, tn, Jt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          aE,
          eE
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", J, Z, p]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [de, Jt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [de, J, Z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          J,
          Z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: j()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [de, J, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [de, J, Z]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          J,
          Z
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", de, J, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [de, J, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", de, J, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [de, J, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", de, J, Z]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          J,
          Z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": j()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [de, J, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [de, J, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", de, J, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [de, J, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", de, J, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [de, J, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [de, J, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", de, J, Z]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, Z]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [de, "initial", J, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", g, J, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [de, J, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, J, Z]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [y, J, Z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": G()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Y()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Y()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Y()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Y()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: U()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": U()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": U()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": U()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: oe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": oe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": oe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [J, Z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: G()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: B()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": B()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": B()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": B()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: D()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: D()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, Z]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", J, Z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [de, tn, Jt, Ua]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, fE = /* @__PURE__ */ FP(dE);
function M(...e) {
  return fE(At(e));
}
const yW = Y0, pE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  X0,
  {
    ref: r,
    className: M("border-b", e),
    ...t
  }
));
pE.displayName = "AccordionItem";
const mE = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(Q0, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  hg,
  {
    ref: n,
    className: M(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(Mr, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
mE.displayName = hg.displayName;
const hE = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  vg,
  {
    ref: n,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ u.jsx("div", { className: M("pb-4 pt-0", e), children: t })
  }
));
hE.displayName = vg.displayName;
const Tf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Nf = At, St = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Nf(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const d = r == null ? void 0 : r[l], p = a == null ? void 0 : a[l];
    if (d === null) return null;
    const m = Tf(d) || Tf(p);
    return o[l][m];
  }), s = r && Object.entries(r).reduce((l, d) => {
    let [p, m] = d;
    return m === void 0 || (l[p] = m), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, d) => {
    let { class: p, className: m, ...v } = d;
    return Object.entries(v).every((y) => {
      let [h, g] = y;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...s
      }[h]) : {
        ...a,
        ...s
      }[h] === g;
    }) ? [
      ...l,
      p,
      m
    ] : l;
  }, []);
  return Nf(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, vE = St(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "bg-transparent text-foreground",
        outline: "border border-foreground bg-transparent text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), gE = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: M(vE({ variant: t }), e),
    ...r
  }
));
gE.displayName = "Alert";
const yE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "h5",
  {
    ref: r,
    className: M("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
yE.displayName = "AlertTitle";
const bE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
bE.displayName = "AlertDescription";
function xE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = pe(e);
  f.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var wE = "DismissableLayer", Tl = "dismissableLayer.update", _E = "dismissableLayer.pointerDownOutside", SE = "dismissableLayer.focusOutside", Rf, Mg = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zt = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = f.useContext(Mg), [d, p] = f.useState(null), m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = f.useState({}), y = ie(t, (P) => p(P)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = h.indexOf(g), x = d ? h.indexOf(d) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, _ = x >= b, C = PE((P) => {
      const R = P.target, T = [...l.branches].some((I) => I.contains(R));
      !_ || T || (o == null || o(P), i == null || i(P), P.defaultPrevented || s == null || s());
    }, m), S = EE((P) => {
      const R = P.target;
      [...l.branches].some((I) => I.contains(R)) || (a == null || a(P), i == null || i(P), P.defaultPrevented || s == null || s());
    }, m);
    return xE((P) => {
      x === l.layers.size - 1 && (n == null || n(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, m), f.useEffect(() => {
      if (d)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Rf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Mf(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Rf);
        };
    }, [d, m, r, l]), f.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Mf());
    }, [d, l]), f.useEffect(() => {
      const P = () => v({});
      return document.addEventListener(Tl, P), () => document.removeEventListener(Tl, P);
    }, []), /* @__PURE__ */ u.jsx(
      V.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: w ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
zt.displayName = wE;
var CE = "DismissableLayerBranch", Ag = f.forwardRef((e, t) => {
  const r = f.useContext(Mg), n = f.useRef(null), o = ie(t, n);
  return f.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ u.jsx(V.div, { ...e, ref: o });
});
Ag.displayName = CE;
function PE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = pe(e), n = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Og(
            _E,
            r,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function EE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = pe(e), n = f.useRef(!1);
  return f.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && Og(SE, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Mf() {
  const e = new CustomEvent(Tl);
  document.dispatchEvent(e);
}
function Og(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? pn(o, a) : o.dispatchEvent(a);
}
var TE = zt, NE = Ag, Ka = "focusScope.autoFocusOnMount", Ya = "focusScope.autoFocusOnUnmount", Af = { bubbles: !1, cancelable: !0 }, RE = "FocusScope", jn = f.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = f.useState(null), l = pe(o), d = pe(a), p = f.useRef(null), m = ie(t, (h) => c(h)), v = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (n) {
      let h = function(w) {
        if (v.paused || !s) return;
        const _ = w.target;
        s.contains(_) ? p.current = _ : qt(p.current, { select: !0 });
      }, g = function(w) {
        if (v.paused || !s) return;
        const _ = w.relatedTarget;
        _ !== null && (s.contains(_) || qt(p.current, { select: !0 }));
      }, b = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && qt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const x = new MutationObserver(b);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), x.disconnect();
      };
    }
  }, [n, s, v.paused]), f.useEffect(() => {
    if (s) {
      jf.add(v);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const b = new CustomEvent(Ka, Af);
        s.addEventListener(Ka, l), s.dispatchEvent(b), b.defaultPrevented || (ME(IE(jg(s)), { select: !0 }), document.activeElement === h && qt(s));
      }
      return () => {
        s.removeEventListener(Ka, l), setTimeout(() => {
          const b = new CustomEvent(Ya, Af);
          s.addEventListener(Ya, d), s.dispatchEvent(b), b.defaultPrevented || qt(h ?? document.body, { select: !0 }), s.removeEventListener(Ya, d), jf.remove(v);
        }, 0);
      };
    }
  }, [s, l, d, v]);
  const y = f.useCallback(
    (h) => {
      if (!r && !n || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, b = document.activeElement;
      if (g && b) {
        const x = h.currentTarget, [w, _] = AE(x);
        w && _ ? !h.shiftKey && b === _ ? (h.preventDefault(), r && qt(w, { select: !0 })) : h.shiftKey && b === w && (h.preventDefault(), r && qt(_, { select: !0 })) : b === x && h.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ u.jsx(V.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
jn.displayName = RE;
function ME(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (qt(n, { select: t }), document.activeElement !== r) return;
}
function AE(e) {
  const t = jg(e), r = Of(t, e), n = Of(t.reverse(), e);
  return [r, n];
}
function jg(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Of(e, t) {
  for (const r of e)
    if (!OE(r, { upTo: t })) return r;
}
function OE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function jE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function qt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && jE(e) && t && e.select();
  }
}
var jf = DE();
function DE() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Df(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Df(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Df(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function IE(e) {
  return e.filter((t) => t.tagName !== "A");
}
var kE = "Portal", pr = f.forwardRef((e, t) => {
  var s;
  const { container: r, ...n } = e, [o, a] = f.useState(!1);
  Pe(() => a(!0), []);
  const i = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Qv.createPortal(/* @__PURE__ */ u.jsx(V.div, { ...n, ref: t }), i) : null;
});
pr.displayName = kE;
var Xa = 0;
function ia() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? If()), document.body.insertAdjacentElement("beforeend", e[1] ?? If()), Xa++, () => {
      Xa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Xa--;
    };
  }, []);
}
function If() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ft = function() {
  return ft = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ft.apply(this, arguments);
};
function Dg(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function LE(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var yo = "right-scroll-bar-position", bo = "width-before-scroll-bar", $E = "with-scroll-bars-hidden", FE = "--removed-body-scroll-bar-size";
function Qa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function qE(e, t) {
  var r = yt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var BE = typeof window < "u" ? f.useLayoutEffect : f.useEffect, kf = /* @__PURE__ */ new WeakMap();
function WE(e, t) {
  var r = qE(null, function(n) {
    return e.forEach(function(o) {
      return Qa(o, n);
    });
  });
  return BE(function() {
    var n = kf.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || Qa(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Qa(s, i);
      });
    }
    kf.set(r, e);
  }, [e]), r;
}
function HE(e) {
  return e;
}
function VE(e, t) {
  t === void 0 && (t = HE);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var c = function() {
        var d = i;
        i = [], d.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(d) {
          i.push(d), l();
        },
        filter: function(d) {
          return i = i.filter(d), r;
        }
      };
    }
  };
  return o;
}
function zE(e) {
  e === void 0 && (e = {});
  var t = VE(null);
  return t.options = ft({ async: !0, ssr: !1 }, e), t;
}
var Ig = function(e) {
  var t = e.sideCar, r = Dg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return f.createElement(n, ft({}, r));
};
Ig.isSideCarExport = !0;
function GE(e, t) {
  return e.useMedium(t), Ig;
}
var kg = zE(), Za = function() {
}, sa = f.forwardRef(function(e, t) {
  var r = f.useRef(null), n = f.useState({
    onScrollCapture: Za,
    onWheelCapture: Za,
    onTouchMoveCapture: Za
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, p = e.shards, m = e.sideCar, v = e.noIsolation, y = e.inert, h = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = e.gapMode, w = Dg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = m, C = WE([r, t]), S = ft(ft({}, w), o);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(_, { sideCar: kg, removeScrollBar: l, shards: p, noIsolation: v, inert: y, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: x }),
    i ? f.cloneElement(f.Children.only(s), ft(ft({}, S), { ref: C })) : f.createElement(b, ft({}, S, { className: c, ref: C }), s)
  );
});
sa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
sa.classNames = {
  fullWidth: bo,
  zeroRight: yo
};
var UE = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function KE() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = UE();
  return t && e.setAttribute("nonce", t), e;
}
function YE(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function XE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var QE = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = KE()) && (YE(t, r), XE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ZE = function() {
  var e = QE();
  return function(t, r) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Lg = function() {
  var e = ZE(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, JE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ja = function(e) {
  return parseInt(e || "", 10) || 0;
}, eT = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ja(r), Ja(n), Ja(o)];
}, tT = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return JE;
  var t = eT(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, rT = Lg(), Pr = "data-scroll-locked", nT = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat($E, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(Pr, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(yo, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(bo, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(yo, " .").concat(yo, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(bo, " .").concat(bo, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Pr, `] {
    `).concat(FE, ": ").concat(s, `px;
  }
`);
}, Lf = function() {
  var e = parseInt(document.body.getAttribute(Pr) || "0", 10);
  return isFinite(e) ? e : 0;
}, oT = function() {
  f.useEffect(function() {
    return document.body.setAttribute(Pr, (Lf() + 1).toString()), function() {
      var e = Lf() - 1;
      e <= 0 ? document.body.removeAttribute(Pr) : document.body.setAttribute(Pr, e.toString());
    };
  }, []);
}, aT = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  oT();
  var a = f.useMemo(function() {
    return tT(o);
  }, [o]);
  return f.createElement(rT, { styles: nT(a, !t, o, r ? "" : "!important") });
}, Nl = !1;
if (typeof window < "u")
  try {
    var ao = Object.defineProperty({}, "passive", {
      get: function() {
        return Nl = !0, !0;
      }
    });
    window.addEventListener("test", ao, ao), window.removeEventListener("test", ao, ao);
  } catch {
    Nl = !1;
  }
var xr = Nl ? { passive: !1 } : !1, iT = function(e) {
  return e.tagName === "TEXTAREA";
}, $g = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !iT(e) && r[t] === "visible")
  );
}, sT = function(e) {
  return $g(e, "overflowY");
}, cT = function(e) {
  return $g(e, "overflowX");
}, $f = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Fg(e, n);
    if (o) {
      var a = qg(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, lT = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, uT = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Fg = function(e, t) {
  return e === "v" ? sT(t) : cT(t);
}, qg = function(e, t) {
  return e === "v" ? lT(t) : uT(t);
}, dT = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, fT = function(e, t, r, n, o) {
  var a = dT(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), l = !1, d = i > 0, p = 0, m = 0;
  do {
    var v = qg(e, s), y = v[0], h = v[1], g = v[2], b = h - g - a * y;
    (y || b) && Fg(e, s) && (p += b, m += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(m) < 1) && (l = !0), l;
}, io = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ff = function(e) {
  return [e.deltaX, e.deltaY];
}, qf = function(e) {
  return e && "current" in e ? e.current : e;
}, pT = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, mT = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, hT = 0, wr = [];
function vT(e) {
  var t = f.useRef([]), r = f.useRef([0, 0]), n = f.useRef(), o = f.useState(hT++)[0], a = f.useState(Lg)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = LE([e.lockRef.current], (e.shards || []).map(qf), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = f.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var b = io(h), x = r.current, w = "deltaX" in h ? h.deltaX : x[0] - b[0], _ = "deltaY" in h ? h.deltaY : x[1] - b[1], C, S = h.target, P = Math.abs(w) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && S.type === "range")
      return !1;
    var R = $f(P, S);
    if (!R)
      return !0;
    if (R ? C = P : (C = P === "v" ? "h" : "v", R = $f(P, S)), !R)
      return !1;
    if (!n.current && "changedTouches" in h && (w || _) && (n.current = C), !C)
      return !0;
    var T = n.current || C;
    return fT(T, g, h, T === "h" ? w : _);
  }, []), c = f.useCallback(function(h) {
    var g = h;
    if (!(!wr.length || wr[wr.length - 1] !== a)) {
      var b = "deltaY" in g ? Ff(g) : io(g), x = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && pT(C.delta, b);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(qf).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), _ = w.length > 0 ? s(g, w[0]) : !i.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = f.useCallback(function(h, g, b, x) {
    var w = { name: h, delta: g, target: b, should: x, shadowParent: gT(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== w;
      });
    }, 1);
  }, []), d = f.useCallback(function(h) {
    r.current = io(h), n.current = void 0;
  }, []), p = f.useCallback(function(h) {
    l(h.type, Ff(h), h.target, s(h, e.lockRef.current));
  }, []), m = f.useCallback(function(h) {
    l(h.type, io(h), h.target, s(h, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return wr.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, xr), document.addEventListener("touchmove", c, xr), document.addEventListener("touchstart", d, xr), function() {
      wr = wr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, xr), document.removeEventListener("touchmove", c, xr), document.removeEventListener("touchstart", d, xr);
    };
  }, []);
  var v = e.removeScrollBar, y = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    y ? f.createElement(a, { styles: mT(o) }) : null,
    v ? f.createElement(aT, { gapMode: e.gapMode }) : null
  );
}
function gT(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const yT = GE(kg, vT);
var Dn = f.forwardRef(function(e, t) {
  return f.createElement(sa, ft({}, e, { ref: t, sideCar: yT }));
});
Dn.classNames = sa.classNames;
var bT = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _r = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), co = {}, ei = 0, Bg = function(e) {
  return e && (e.host || Bg(e.parentNode));
}, xT = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Bg(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, wT = function(e, t, r, n) {
  var o = xT(t, Array.isArray(e) ? e : [e]);
  co[r] || (co[r] = /* @__PURE__ */ new WeakMap());
  var a = co[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(p) {
    !p || s.has(p) || (s.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var d = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        d(m);
      else
        try {
          var v = m.getAttribute(n), y = v !== null && v !== "false", h = (_r.get(m) || 0) + 1, g = (a.get(m) || 0) + 1;
          _r.set(m, h), a.set(m, g), i.push(m), h === 1 && y && so.set(m, !0), g === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return d(t), s.clear(), ei++, function() {
    i.forEach(function(p) {
      var m = _r.get(p) - 1, v = a.get(p) - 1;
      _r.set(p, m), a.set(p, v), m || (so.has(p) || p.removeAttribute(n), so.delete(p)), v || p.removeAttribute(r);
    }), ei--, ei || (_r = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), co = {});
  };
}, ca = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = bT(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), wT(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Mu = "Dialog", [Wg, Hg] = Te(Mu), [_T, st] = Wg(Mu), Vg = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = f.useRef(null), c = f.useRef(null), [l = !1, d] = Re({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ u.jsx(
    _T,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: _e(),
      titleId: _e(),
      descriptionId: _e(),
      open: l,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((p) => !p), [d]),
      modal: i,
      children: r
    }
  );
};
Vg.displayName = Mu;
var zg = "DialogTrigger", Gg = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = st(zg, r), a = ie(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ju(o.open),
        ...n,
        ref: a,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Gg.displayName = zg;
var Au = "DialogPortal", [ST, Ug] = Wg(Au, {
  forceMount: void 0
}), Kg = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = st(Au, t);
  return /* @__PURE__ */ u.jsx(ST, { scope: t, forceMount: r, children: f.Children.map(n, (i) => /* @__PURE__ */ u.jsx(we, { present: r || a.open, children: /* @__PURE__ */ u.jsx(pr, { asChild: !0, container: o, children: i }) })) });
};
Kg.displayName = Au;
var Ro = "DialogOverlay", Yg = f.forwardRef(
  (e, t) => {
    const r = Ug(Ro, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = st(Ro, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ u.jsx(we, { present: n || a.open, children: /* @__PURE__ */ u.jsx(CT, { ...o, ref: t }) }) : null;
  }
);
Yg.displayName = Ro;
var CT = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = st(Ro, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Dn, { as: bt, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        V.div,
        {
          "data-state": ju(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), nr = "DialogContent", Xg = f.forwardRef(
  (e, t) => {
    const r = Ug(nr, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = st(nr, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(we, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(PT, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(ET, { ...o, ref: t }) });
  }
);
Xg.displayName = nr;
var PT = f.forwardRef(
  (e, t) => {
    const r = st(nr, e.__scopeDialog), n = f.useRef(null), o = ie(t, r.contentRef, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return ca(a);
    }, []), /* @__PURE__ */ u.jsx(
      Qg,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), ET = f.forwardRef(
  (e, t) => {
    const r = st(nr, e.__scopeDialog), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Qg,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (n.current || (s = r.triggerRef.current) == null || s.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((l = r.triggerRef.current) == null ? void 0 : l.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Qg = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = st(nr, r), c = f.useRef(null), l = ie(t, c);
    return ia(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        jn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ u.jsx(
            zt,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": ju(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(NT, { titleId: s.titleId }),
        /* @__PURE__ */ u.jsx(MT, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Ou = "DialogTitle", Zg = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = st(Ou, r);
    return /* @__PURE__ */ u.jsx(V.h2, { id: o.titleId, ...n, ref: t });
  }
);
Zg.displayName = Ou;
var Jg = "DialogDescription", ey = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = st(Jg, r);
    return /* @__PURE__ */ u.jsx(V.p, { id: o.descriptionId, ...n, ref: t });
  }
);
ey.displayName = Jg;
var ty = "DialogClose", ry = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = st(ty, r);
    return /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ry.displayName = ty;
function ju(e) {
  return e ? "open" : "closed";
}
var ny = "DialogTitleWarning", [TT, oy] = w0(ny, {
  contentName: nr,
  titleName: Ou,
  docsSlug: "dialog"
}), NT = ({ titleId: e }) => {
  const t = oy(ny), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, RT = "DialogDescriptionWarning", MT = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${oy(RT).contentName}}.`;
  return f.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, la = Vg, Du = Gg, ua = Kg, Hr = Yg, Vr = Xg, In = Zg, kn = ey, zr = ry, ay = "AlertDialog", [AT, bW] = Te(ay, [
  Hg
]), kt = Hg(), iy = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = kt(t);
  return /* @__PURE__ */ u.jsx(la, { ...n, ...r, modal: !0 });
};
iy.displayName = ay;
var OT = "AlertDialogTrigger", sy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = kt(r);
    return /* @__PURE__ */ u.jsx(Du, { ...o, ...n, ref: t });
  }
);
sy.displayName = OT;
var jT = "AlertDialogPortal", cy = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = kt(t);
  return /* @__PURE__ */ u.jsx(ua, { ...n, ...r });
};
cy.displayName = jT;
var DT = "AlertDialogOverlay", ly = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = kt(r);
    return /* @__PURE__ */ u.jsx(Hr, { ...o, ...n, ref: t });
  }
);
ly.displayName = DT;
var Er = "AlertDialogContent", [IT, kT] = AT(Er), uy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, a = kt(r), i = f.useRef(null), s = ie(t, i), c = f.useRef(null);
    return /* @__PURE__ */ u.jsx(
      TT,
      {
        contentName: Er,
        titleName: dy,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u.jsx(IT, { scope: r, cancelRef: c, children: /* @__PURE__ */ u.jsxs(
          Vr,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: q(o.onOpenAutoFocus, (l) => {
              var d;
              l.preventDefault(), (d = c.current) == null || d.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ u.jsx(bu, { children: n }),
              /* @__PURE__ */ u.jsx($T, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
uy.displayName = Er;
var dy = "AlertDialogTitle", fy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = kt(r);
    return /* @__PURE__ */ u.jsx(In, { ...o, ...n, ref: t });
  }
);
fy.displayName = dy;
var py = "AlertDialogDescription", my = f.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = kt(r);
  return /* @__PURE__ */ u.jsx(kn, { ...o, ...n, ref: t });
});
my.displayName = py;
var LT = "AlertDialogAction", hy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = kt(r);
    return /* @__PURE__ */ u.jsx(zr, { ...o, ...n, ref: t });
  }
);
hy.displayName = LT;
var vy = "AlertDialogCancel", gy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = kT(vy, r), a = kt(r), i = ie(t, o);
    return /* @__PURE__ */ u.jsx(zr, { ...a, ...n, ref: i });
  }
);
gy.displayName = vy;
var $T = ({ contentRef: e }) => {
  const t = `\`${Er}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Er}\` by passing a \`${py}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Er}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return f.useEffect(() => {
    var n;
    document.getElementById(
      (n = e.current) == null ? void 0 : n.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, FT = iy, qT = sy, BT = cy, yy = ly, by = uy, xy = hy, wy = gy, _y = fy, Sy = my;
const xW = FT, wW = qT, WT = BT, Cy = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  yy,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Cy.displayName = yy.displayName;
const HT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs(WT, { children: [
  /* @__PURE__ */ u.jsx(Cy, {}),
  /* @__PURE__ */ u.jsx(
    by,
    {
      ref: r,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
HT.displayName = by.displayName;
const VT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
VT.displayName = "AlertDialogHeader";
const zT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
zT.displayName = "AlertDialogFooter";
const GT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  _y,
  {
    ref: r,
    className: M("text-lg font-semibold", e),
    ...t
  }
));
GT.displayName = _y.displayName;
const UT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Sy,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
UT.displayName = Sy.displayName;
const KT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  xy,
  {
    ref: r,
    className: M(vt(), e),
    ...t
  }
));
KT.displayName = xy.displayName;
const YT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  wy,
  {
    ref: r,
    className: M(
      vt({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
YT.displayName = wy.displayName;
var Iu = "Avatar", [XT, _W] = Te(Iu), [QT, Py] = XT(Iu), Ey = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = f.useState("idle");
    return /* @__PURE__ */ u.jsx(
      QT,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ u.jsx(V.span, { ...n, ref: t })
      }
    );
  }
);
Ey.displayName = Iu;
var Ty = "AvatarImage", Ny = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = Py(Ty, r), s = ZT(n, a.referrerPolicy), c = pe((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return Pe(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ u.jsx(V.img, { ...a, ref: t, src: n }) : null;
  }
);
Ny.displayName = Ty;
var Ry = "AvatarFallback", My = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = Py(Ry, r), [i, s] = f.useState(n === void 0);
    return f.useEffect(() => {
      if (n !== void 0) {
        const c = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(c);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u.jsx(V.span, { ...o, ref: t }) : null;
  }
);
My.displayName = Ry;
function ZT(e, t) {
  const [r, n] = f.useState("idle");
  return Pe(() => {
    if (!e) {
      n("error");
      return;
    }
    let o = !0;
    const a = new window.Image(), i = (s) => () => {
      o && n(s);
    };
    return n("loading"), a.onload = i("loaded"), a.onerror = i("error"), a.src = e, t && (a.referrerPolicy = t), () => {
      o = !1;
    };
  }, [e, t]), r;
}
var Ay = Ey, Oy = Ny, jy = My;
const JT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ay,
  {
    ref: r,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
JT.displayName = Ay.displayName;
const eN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Oy,
  {
    ref: r,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
eN.displayName = Oy.displayName;
const tN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  jy,
  {
    ref: r,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
tN.displayName = jy.displayName;
const rN = St(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Bf({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ u.jsx("div", { className: M(rN({ variant: t }), e), ...r });
}
const nN = f.forwardRef(({ ...e }, t) => /* @__PURE__ */ u.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
nN.displayName = "Breadcrumb";
const oN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "ol",
  {
    ref: r,
    className: M(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
oN.displayName = "BreadcrumbList";
const aN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "li",
  {
    ref: r,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
aN.displayName = "BreadcrumbItem";
const iN = f.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? bt : "a";
  return /* @__PURE__ */ u.jsx(
    o,
    {
      ref: n,
      className: M("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
iN.displayName = "BreadcrumbLink";
const sN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: M("font-normal text-foreground", e),
    ...t
  }
));
sN.displayName = "BreadcrumbPage";
const cN = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ u.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ u.jsx(On, {})
  }
);
cN.displayName = "BreadcrumbSeparator";
const lN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(xg, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
lN.displayName = "BreadcrumbElipssis";
const uN = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    ghostDestructive: "text-red-500 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/50",
    link: "text-primary underline-offset-4 hover:underline"
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-9 w-9",
    iconSm: "h-8 w-8 [&_svg]:size-4"
  }
}, vt = St(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: uN,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Gr = f.forwardRef(({ className: e, variant: t, size: r, disabled: n, href: o, ...a }, i) => /* @__PURE__ */ u.jsx(u.Fragment, { children: o ? /* @__PURE__ */ u.jsx(
  h0,
  {
    className: M(vt({ variant: t, size: r, className: e })),
    ref: i,
    to: o,
    ...a
  }
) : /* @__PURE__ */ u.jsx(
  "button",
  {
    className: M(vt({ variant: t, size: r, className: e })),
    ref: i,
    disabled: n,
    ...a
  }
) }));
Gr.displayName = "Button";
const ku = 6048e5, dN = 864e5, Wf = Symbol.for("constructDateFrom");
function Ae(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Wf in e ? e[Wf](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ve(e, t) {
  return Ae(t || e, e);
}
function Ie(e, t, r) {
  const n = ve(e, r == null ? void 0 : r.in);
  return isNaN(t) ? Ae((r == null ? void 0 : r.in) || e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Ke(e, t, r) {
  const n = ve(e, r == null ? void 0 : r.in);
  if (isNaN(t)) return Ae((r == null ? void 0 : r.in) || e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), a = Ae((r == null ? void 0 : r.in) || e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), n);
}
function fN(e, t, r) {
  const {
    years: n = 0,
    months: o = 0,
    weeks: a = 0,
    days: i = 0,
    hours: s = 0,
    minutes: c = 0,
    seconds: l = 0
  } = t, d = ve(e, r == null ? void 0 : r.in), p = o || n ? Ke(d, o + n * 12) : d, m = i || a ? Ie(p, i + a * 7) : p, v = c + s * 60, h = (l + v * 60) * 1e3;
  return Ae(e, +m + h);
}
let pN = {};
function Ln() {
  return pN;
}
function xt(e, t) {
  var s, c, l, d;
  const r = Ln(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((d = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function or(e, t) {
  return xt(e, { ...t, weekStartsOn: 1 });
}
function Dy(e, t) {
  const r = ve(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Ae(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = or(o), i = Ae(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = or(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Mo(e) {
  const t = ve(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Ur(e, ...t) {
  const r = Ae.bind(
    null,
    e || t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function Ar(e, t) {
  const r = ve(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function ht(e, t, r) {
  const [n, o] = Ur(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = Ar(n), i = Ar(o), s = +a - Mo(a), c = +i - Mo(i);
  return Math.round((s - c) / dN);
}
function mN(e, t) {
  const r = Dy(e, t), n = Ae(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), or(n);
}
function Rl(e, t, r) {
  return Ie(e, t * 7, r);
}
function hN(e, t, r) {
  return Ke(e, t * 12, r);
}
function vN(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Ae.bind(null, o));
    const a = ve(o, n);
    (!r || r < a || isNaN(+a)) && (r = a);
  }), Ae(n, r || NaN);
}
function gN(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Ae.bind(null, o));
    const a = ve(o, n);
    (!r || r > a || isNaN(+a)) && (r = a);
  }), Ae(n, r || NaN);
}
function Le(e, t, r) {
  const [n, o] = Ur(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return +Ar(n) == +Ar(o);
}
function Lu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function yN(e) {
  return !(!Lu(e) && typeof e != "number" || isNaN(+ve(e)));
}
function hn(e, t, r) {
  const [n, o] = Ur(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = n.getFullYear() - o.getFullYear(), i = n.getMonth() - o.getMonth();
  return a * 12 + i;
}
function bN(e, t, r) {
  const [n, o] = Ur(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = xt(n, r), i = xt(o, r), s = +a - Mo(a), c = +i - Mo(i);
  return Math.round((s - c) / ku);
}
function $u(e, t) {
  const r = ve(e, t == null ? void 0 : t.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function $e(e, t) {
  const r = ve(e, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function Iy(e, t) {
  const r = ve(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function Fu(e, t) {
  var s, c, l, d;
  const r = Ln(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((d = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ve(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function ky(e, t) {
  return Fu(e, { ...t, weekStartsOn: 1 });
}
const xN = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, wN = (e, t, r) => {
  let n;
  const o = xN[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Tr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const _N = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, SN = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, CN = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, PN = {
  date: Tr({
    formats: _N,
    defaultWidth: "full"
  }),
  time: Tr({
    formats: SN,
    defaultWidth: "full"
  }),
  dateTime: Tr({
    formats: CN,
    defaultWidth: "full"
  })
}, EN = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, TN = (e, t, r, n) => EN[e];
function pt(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const NN = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, RN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, MN = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, AN = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, ON = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, jN = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, DN = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, IN = {
  ordinalNumber: DN,
  era: pt({
    values: NN,
    defaultWidth: "wide"
  }),
  quarter: pt({
    values: RN,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: pt({
    values: MN,
    defaultWidth: "wide"
  }),
  day: pt({
    values: AN,
    defaultWidth: "wide"
  }),
  dayPeriod: pt({
    values: ON,
    defaultWidth: "wide",
    formattingValues: jN,
    defaultFormattingWidth: "wide"
  })
};
function mt(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? LN(s, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      kN(s, (p) => p.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const d = t.slice(i.length);
    return { value: l, rest: d };
  };
}
function kN(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function LN(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Ly(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const $N = /^(\d+)(th|st|nd|rd)?/i, FN = /\d+/i, qN = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, BN = {
  any: [/^b/i, /^(a|c)/i]
}, WN = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, HN = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, VN = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zN = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, GN = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, UN = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, KN = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, YN = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, XN = {
  ordinalNumber: Ly({
    matchPattern: $N,
    parsePattern: FN,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: mt({
    matchPatterns: qN,
    defaultMatchWidth: "wide",
    parsePatterns: BN,
    defaultParseWidth: "any"
  }),
  quarter: mt({
    matchPatterns: WN,
    defaultMatchWidth: "wide",
    parsePatterns: HN,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mt({
    matchPatterns: VN,
    defaultMatchWidth: "wide",
    parsePatterns: zN,
    defaultParseWidth: "any"
  }),
  day: mt({
    matchPatterns: GN,
    defaultMatchWidth: "wide",
    parsePatterns: UN,
    defaultParseWidth: "any"
  }),
  dayPeriod: mt({
    matchPatterns: KN,
    defaultMatchWidth: "any",
    parsePatterns: YN,
    defaultParseWidth: "any"
  })
}, $y = {
  code: "en-US",
  formatDistance: wN,
  formatLong: PN,
  formatRelative: TN,
  localize: IN,
  match: XN,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function QN(e, t) {
  const r = ve(e, t == null ? void 0 : t.in);
  return ht(r, Iy(r)) + 1;
}
function Fy(e, t) {
  const r = ve(e, t == null ? void 0 : t.in), n = +or(r) - +mN(r);
  return Math.round(n / ku) + 1;
}
function qy(e, t) {
  var d, p, m, v;
  const r = ve(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Ln(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = Ae((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = xt(i, t), c = Ae((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const l = xt(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function ZN(e, t) {
  var s, c, l, d;
  const r = Ln(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = qy(e, t), a = Ae((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), xt(a, t);
}
function By(e, t) {
  const r = ve(e, t == null ? void 0 : t.in), n = +xt(r, t) - +ZN(r, t);
  return Math.round(n / ku) + 1;
}
function ye(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Ft = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return ye(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : ye(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ye(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ye(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ye(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ye(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ye(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return ye(o, t.length);
  }
}, Sr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Hf = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
      return r.ordinalNumber(o, { unit: "year" });
    }
    return Ft.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = qy(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return ye(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : ye(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Dy(e);
    return ye(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return ye(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(n);
      // 01, 02, 03, 04
      case "QQ":
        return ye(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(n);
      // 01, 02, 03, 04
      case "qq":
        return ye(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ft.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(n + 1);
      // 01, 02, ..., 12
      case "LL":
        return ye(n + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const o = By(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : ye(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Fy(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : ye(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Ft.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = QN(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : ye(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return ye(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(a, { unit: "day" });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return ye(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), o = n === 0 ? 7 : n;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return ye(o, t.length);
      // 2nd
      case "io":
        return r.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n === 12 ? o = Sr.noon : n === 0 ? o = Sr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n >= 17 ? o = Sr.evening : n >= 12 ? o = Sr.afternoon : n >= 4 ? o = Sr.morning : o = Sr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Ft.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Ft.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : ye(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : ye(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ft.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ft.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ft.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return zf(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return er(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return er(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return zf(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return er(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return er(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Vf(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + er(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Vf(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + er(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return ye(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return ye(+e, t.length);
  }
};
function Vf(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + ye(a, 2);
}
function zf(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ye(Math.abs(e) / 60, 2) : er(e, t);
}
function er(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = ye(Math.trunc(n / 60), 2), a = ye(n % 60, 2);
  return r + o + t + a;
}
const Gf = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Wy = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, JN = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Gf(e, t);
  let a;
  switch (n) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Gf(n, t)).replace("{{time}}", Wy(o, t));
}, e1 = {
  p: Wy,
  P: JN
}, t1 = /^D+$/, r1 = /^Y+$/, n1 = ["D", "DD", "YY", "YYYY"];
function o1(e) {
  return t1.test(e);
}
function a1(e) {
  return r1.test(e);
}
function i1(e, t, r) {
  const n = s1(e, t, r);
  if (console.warn(n), n1.includes(e)) throw new RangeError(n);
}
function s1(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const c1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, l1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, u1 = /^'([^]*?)'?$/, d1 = /''/g, f1 = /[a-zA-Z]/;
function Ct(e, t, r) {
  var d, p, m, v, y, h, g, b;
  const n = Ln(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? $y, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((p = (d = r == null ? void 0 : r.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((v = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((h = (y = r == null ? void 0 : r.locale) == null ? void 0 : y.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((b = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = ve(e, r == null ? void 0 : r.in);
  if (!yN(s))
    throw new RangeError("Invalid time value");
  let c = t.match(l1).map((x) => {
    const w = x[0];
    if (w === "p" || w === "P") {
      const _ = e1[w];
      return _(x, o.formatLong);
    }
    return x;
  }).join("").match(c1).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const w = x[0];
    if (w === "'")
      return { isToken: !1, value: p1(x) };
    if (Hf[w])
      return { isToken: !0, value: x };
    if (w.match(f1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: x };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((x) => {
    if (!x.isToken) return x.value;
    const w = x.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && a1(w) || !(r != null && r.useAdditionalDayOfYearTokens) && o1(w)) && i1(w, t, String(e));
    const _ = Hf[w[0]];
    return _(s, w, o.localize, l);
  }).join("");
}
function p1(e) {
  const t = e.match(u1);
  return t ? t[1].replace(d1, "'") : e;
}
function m1(e, t) {
  const r = ve(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = r.getMonth(), a = Ae(r, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function h1(e) {
  return Math.trunc(+ve(e) / 1e3);
}
function v1(e, t) {
  const r = ve(e, t == null ? void 0 : t.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(0, 0, 0, 0), ve(r, t == null ? void 0 : t.in);
}
function g1(e, t) {
  const r = ve(e, t == null ? void 0 : t.in);
  return bN(
    v1(r, t),
    $e(r, t),
    t
  ) + 1;
}
function Ml(e, t) {
  return +ve(e) > +ve(t);
}
function Hy(e, t) {
  return +ve(e) < +ve(t);
}
function qu(e, t, r) {
  const [n, o] = Ur(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function y1(e, t, r) {
  const [n, o] = Ur(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear();
}
function ti(e, t, r) {
  return Ie(e, -t, r);
}
function ri(e, t, r) {
  const n = ve(e, r == null ? void 0 : r.in), o = n.getFullYear(), a = n.getDate(), i = Ae(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = m1(i);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Uf(e, t, r) {
  const n = ve(e, r == null ? void 0 : r.in);
  return isNaN(+n) ? Ae(e, NaN) : (n.setFullYear(t), n);
}
const b1 = {
  lessThanXSeconds: {
    one: "menos de um segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "meio minuto",
  lessThanXMinutes: {
    one: "menos de um minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "cerca de 1 hora",
    other: "cerca de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 dia",
    other: "{{count}} dias"
  },
  aboutXWeeks: {
    one: "cerca de 1 semana",
    other: "cerca de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "cerca de 1 mês",
    other: "cerca de {{count}} meses"
  },
  xMonths: {
    one: "1 mês",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "cerca de 1 ano",
    other: "cerca de {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "mais de 1 ano",
    other: "mais de {{count}} anos"
  },
  almostXYears: {
    one: "quase 1 ano",
    other: "quase {{count}} anos"
  }
}, x1 = (e, t, r) => {
  let n;
  const o = b1[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "em " + n : "há " + n : n;
}, w1 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, _1 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, S1 = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, C1 = {
  date: Tr({
    formats: w1,
    defaultWidth: "full"
  }),
  time: Tr({
    formats: _1,
    defaultWidth: "full"
  }),
  dateTime: Tr({
    formats: S1,
    defaultWidth: "full"
  })
}, P1 = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, E1 = (e, t, r, n) => {
  const o = P1[e];
  return typeof o == "function" ? o(t) : o;
}, T1 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, N1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, R1 = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez"
  ],
  wide: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ]
}, M1 = {
  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
  abbreviated: [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado"
  ],
  wide: [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  ]
}, A1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  }
}, O1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da tarde",
    night: "da noite"
  }
}, j1 = (e, t) => {
  const r = Number(e);
  return (t == null ? void 0 : t.unit) === "week" ? r + "ª" : r + "º";
}, D1 = {
  ordinalNumber: j1,
  era: pt({
    values: T1,
    defaultWidth: "wide"
  }),
  quarter: pt({
    values: N1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: pt({
    values: R1,
    defaultWidth: "wide"
  }),
  day: pt({
    values: M1,
    defaultWidth: "wide"
  }),
  dayPeriod: pt({
    values: A1,
    defaultWidth: "wide",
    formattingValues: O1,
    defaultFormattingWidth: "wide"
  })
}, I1 = /^(\d+)[ºªo]?/i, k1 = /\d+/i, L1 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, $1 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, F1 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, q1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, B1 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, W1 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^fev/i,
    /^mar/i,
    /^abr/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^set/i,
    /^out/i,
    /^nov/i,
    /^dez/i
  ]
}, H1 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, V1 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, z1 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, G1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn|^meia[-\s]noite/i,
    noon: /^md|^meio[-\s]dia/i,
    morning: /manhã/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noite/i
  }
}, U1 = {
  ordinalNumber: Ly({
    matchPattern: I1,
    parsePattern: k1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: mt({
    matchPatterns: L1,
    defaultMatchWidth: "wide",
    parsePatterns: $1,
    defaultParseWidth: "any"
  }),
  quarter: mt({
    matchPatterns: F1,
    defaultMatchWidth: "wide",
    parsePatterns: q1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mt({
    matchPatterns: B1,
    defaultMatchWidth: "wide",
    parsePatterns: W1,
    defaultParseWidth: "any"
  }),
  day: mt({
    matchPatterns: H1,
    defaultMatchWidth: "wide",
    parsePatterns: V1,
    defaultParseWidth: "any"
  }),
  dayPeriod: mt({
    matchPatterns: z1,
    defaultMatchWidth: "any",
    parsePatterns: G1,
    defaultParseWidth: "any"
  })
}, un = {
  code: "pt-BR",
  formatDistance: x1,
  formatLong: C1,
  formatRelative: E1,
  localize: D1,
  match: U1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var ce = function() {
  return ce = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ce.apply(this, arguments);
};
function K1(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Vy(e, t, r) {
  for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function $n(e) {
  return e.mode === "multiple";
}
function Fn(e) {
  return e.mode === "range";
}
function da(e) {
  return e.mode === "single";
}
var Y1 = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function X1(e, t) {
  return Ct(e, "LLLL y", t);
}
function Q1(e, t) {
  return Ct(e, "d", t);
}
function Z1(e, t) {
  return Ct(e, "LLLL", t);
}
function J1(e) {
  return "".concat(e);
}
function eR(e, t) {
  return Ct(e, "cccccc", t);
}
function tR(e, t) {
  return Ct(e, "yyyy", t);
}
var rR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: X1,
  formatDay: Q1,
  formatMonthCaption: Z1,
  formatWeekNumber: J1,
  formatWeekdayName: eR,
  formatYearCaption: tR
}), nR = function(e, t, r) {
  return Ct(e, "do MMMM (EEEE)", r);
}, oR = function() {
  return "Month: ";
}, aR = function() {
  return "Go to next month";
}, iR = function() {
  return "Go to previous month";
}, sR = function(e, t) {
  return Ct(e, "cccc", t);
}, cR = function(e) {
  return "Week n. ".concat(e);
}, lR = function() {
  return "Year: ";
}, uR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: nR,
  labelMonthDropdown: oR,
  labelNext: aR,
  labelPrevious: iR,
  labelWeekNumber: cR,
  labelWeekday: sR,
  labelYearDropdown: lR
});
function dR() {
  var e = "buttons", t = Y1, r = $y, n = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: rR,
    labels: uR,
    locale: r,
    modifiersClassNames: n,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function fR(e) {
  var t = e.fromYear, r = e.toYear, n = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return n ? a = $e(n) : t && (a = new Date(t, 0, 1)), o ? i = $u(o) : r && (i = new Date(r, 11, 31)), {
    fromDate: a ? Ar(a) : void 0,
    toDate: i ? Ar(i) : void 0
  };
}
var zy = ur(void 0);
function pR(e) {
  var t, r = e.initialProps, n = dR(), o = fR(r), a = o.fromDate, i = o.toDate, s = (t = r.captionLayout) !== null && t !== void 0 ? t : n.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (da(r) || $n(r) || Fn(r)) && (c = r.onSelect);
  var l = ce(ce(ce({}, n), r), { captionLayout: s, classNames: ce(ce({}, n.classNames), r.classNames), components: ce({}, r.components), formatters: ce(ce({}, n.formatters), r.formatters), fromDate: a, labels: ce(ce({}, n.labels), r.labels), mode: r.mode || n.mode, modifiers: ce(ce({}, n.modifiers), r.modifiers), modifiersClassNames: ce(ce({}, n.modifiersClassNames), r.modifiersClassNames), onSelect: c, styles: ce(ce({}, n.styles), r.styles), toDate: i });
  return u.jsx(zy.Provider, { value: l, children: e.children });
}
function be() {
  var e = dr(zy);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Gy(e) {
  var t = be(), r = t.locale, n = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: n.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: r }) });
}
function mR(e) {
  return u.jsx("svg", ce({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Uy(e) {
  var t, r, n = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = be(), d = (r = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && r !== void 0 ? r : mR;
  return u.jsxs("div", { className: s, style: c, children: [u.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: n, children: a }), u.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [i, u.jsx(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function hR(e) {
  var t, r = be(), n = r.fromDate, o = r.toDate, a = r.styles, i = r.locale, s = r.formatters.formatMonthCaption, c = r.classNames, l = r.components, d = r.labels.labelMonthDropdown;
  if (!n)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var p = [];
  if (y1(n, o))
    for (var m = $e(n), v = n.getMonth(); v <= o.getMonth(); v++)
      p.push(ri(m, v));
  else
    for (var m = $e(/* @__PURE__ */ new Date()), v = 0; v <= 11; v++)
      p.push(ri(m, v));
  var y = function(g) {
    var b = Number(g.target.value), x = ri($e(e.displayMonth), b);
    e.onChange(x);
  }, h = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Uy;
  return u.jsx(h, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: y, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(g) {
    return u.jsx("option", { value: g.getMonth(), children: s(g, { locale: i }) }, g.getMonth());
  }) });
}
function vR(e) {
  var t, r = e.displayMonth, n = be(), o = n.fromDate, a = n.toDate, i = n.locale, s = n.styles, c = n.classNames, l = n.components, d = n.formatters.formatYearCaption, p = n.labels.labelYearDropdown, m = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var v = o.getFullYear(), y = a.getFullYear(), h = v; h <= y; h++)
    m.push(Uf(Iy(/* @__PURE__ */ new Date()), h));
  var g = function(x) {
    var w = Uf($e(r), Number(x.target.value));
    e.onChange(w);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Uy;
  return u.jsx(b, { name: "years", "aria-label": p(), className: c.dropdown_year, style: s.dropdown_year, onChange: g, value: r.getFullYear(), caption: d(r, { locale: i }), children: m.map(function(x) {
    return u.jsx("option", { value: x.getFullYear(), children: d(x, { locale: i }) }, x.getFullYear());
  }) });
}
function gR(e, t) {
  var r = yt(e), n = r[0], o = r[1], a = t === void 0 ? n : t;
  return [a, o];
}
function yR(e) {
  var t = e.month, r = e.defaultMonth, n = e.today, o = t || r || n || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && hn(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Ke(a, l);
  }
  return i && hn(o, i) < 0 && (o = i), $e(o);
}
function bR() {
  var e = be(), t = yR(e), r = gR(t, e.month), n = r[0], o = r[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = $e(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [n, a];
}
function xR(e, t) {
  for (var r = t.reverseMonths, n = t.numberOfMonths, o = $e(e), a = $e(Ke(o, n)), i = hn(a, o), s = [], c = 0; c < i; c++) {
    var l = Ke(o, c);
    s.push(l);
  }
  return r && (s = s.reverse()), s;
}
function wR(e, t) {
  if (!t.disableNavigation) {
    var r = t.toDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = $e(e);
    if (!r)
      return Ke(s, i);
    var c = hn(r, e);
    if (!(c < a))
      return Ke(s, i);
  }
}
function _R(e, t) {
  if (!t.disableNavigation) {
    var r = t.fromDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = $e(e);
    if (!r)
      return Ke(s, -i);
    var c = hn(s, r);
    if (!(c <= 0))
      return Ke(s, -i);
  }
}
var Ky = ur(void 0);
function SR(e) {
  var t = be(), r = bR(), n = r[0], o = r[1], a = xR(n, t), i = wR(n, t), s = _R(n, t), c = function(p) {
    return a.some(function(m) {
      return qu(p, m);
    });
  }, l = function(p, m) {
    c(p) || (m && Hy(p, m) ? o(Ke(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, d = {
    currentMonth: n,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return u.jsx(Ky.Provider, { value: d, children: e.children });
}
function qn() {
  var e = dr(Ky);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Kf(e) {
  var t, r = be(), n = r.classNames, o = r.styles, a = r.components, i = qn().goToMonth, s = function(d) {
    i(Ke(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Gy, l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: n.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: n.vhidden, children: l }), u.jsx(hR, { onChange: s, displayMonth: e.displayMonth }), u.jsx(vR, { onChange: s, displayMonth: e.displayMonth })] });
}
function CR(e) {
  return u.jsx("svg", ce({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function PR(e) {
  return u.jsx("svg", ce({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Ao = ta(function(e, t) {
  var r = be(), n = r.classNames, o = r.styles, a = [n.button_reset, n.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ce(ce({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), u.jsx("button", ce({}, e, { ref: t, type: "button", className: i, style: s }));
});
function ER(e) {
  var t, r, n = be(), o = n.dir, a = n.locale, i = n.classNames, s = n.styles, c = n.labels, l = c.labelPrevious, d = c.labelNext, p = n.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var m = l(e.previousMonth, { locale: a }), v = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), y = d(e.nextMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), g = (t = p == null ? void 0 : p.IconRight) !== null && t !== void 0 ? t : PR, b = (r = p == null ? void 0 : p.IconLeft) !== null && r !== void 0 ? r : CR;
  return u.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && u.jsx(Ao, { name: "previous-month", "aria-label": m, className: v, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(g, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && u.jsx(Ao, { name: "next-month", "aria-label": y, className: h, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(g, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function Yf(e) {
  var t = be().numberOfMonths, r = qn(), n = r.previousMonth, o = r.nextMonth, a = r.goToMonth, i = r.displayMonths, s = i.findIndex(function(y) {
    return qu(e.displayMonth, y);
  }), c = s === 0, l = s === i.length - 1, d = t > 1 && (c || !l), p = t > 1 && (l || !c), m = function() {
    n && a(n);
  }, v = function() {
    o && a(o);
  };
  return u.jsx(ER, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: p, nextMonth: o, previousMonth: n, onPreviousClick: m, onNextClick: v });
}
function TR(e) {
  var t, r = be(), n = r.classNames, o = r.disableNavigation, a = r.styles, i = r.captionLayout, s = r.components, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Gy, l;
  return o ? l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = u.jsx(Kf, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = u.jsxs(u.Fragment, { children: [u.jsx(Kf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(Yf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = u.jsxs(u.Fragment, { children: [u.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Yf, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: n.caption, style: a.caption, children: l });
}
function NR(e) {
  var t = be(), r = t.footer, n = t.styles, o = t.classNames.tfoot;
  return r ? u.jsx("tfoot", { className: o, style: n.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: r }) }) }) : u.jsx(u.Fragment, {});
}
function RR(e, t, r) {
  for (var n = r ? or(/* @__PURE__ */ new Date()) : xt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ie(n, a);
    o.push(i);
  }
  return o;
}
function MR() {
  var e = be(), t = e.classNames, r = e.styles, n = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = RR(o, a, i);
  return u.jsxs("tr", { style: r.head_row, className: t.head_row, children: [n && u.jsx("td", { style: r.head_cell, className: t.head_cell }), l.map(function(d, p) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: r.head_cell, "aria-label": c(d, { locale: o }), children: s(d, { locale: o }) }, p);
  })] });
}
function AR() {
  var e, t = be(), r = t.classNames, n = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : MR;
  return u.jsx("thead", { style: n.head, className: r.head, children: u.jsx(a, {}) });
}
function OR(e) {
  var t = be(), r = t.locale, n = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: n(e.date, { locale: r }) });
}
var Bu = ur(void 0);
function jR(e) {
  if (!$n(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(Bu.Provider, { value: t, children: e.children });
  }
  return u.jsx(DR, { initialProps: e.initialProps, children: e.children });
}
function DR(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = t.min, a = t.max, i = function(l, d, p) {
    var m, v;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, l, d, p);
    var y = !!(d.selected && o && (n == null ? void 0 : n.length) === o);
    if (!y) {
      var h = !!(!d.selected && a && (n == null ? void 0 : n.length) === a);
      if (!h) {
        var g = n ? Vy([], n) : [];
        if (d.selected) {
          var b = g.findIndex(function(x) {
            return Le(l, x);
          });
          g.splice(b, 1);
        } else
          g.push(l);
        (v = t.onSelect) === null || v === void 0 || v.call(t, g, l, d, p);
      }
    }
  }, s = {
    disabled: []
  };
  n && s.disabled.push(function(l) {
    var d = a && n.length > a - 1, p = n.some(function(m) {
      return Le(m, l);
    });
    return !!(d && !p);
  });
  var c = {
    selected: n,
    onDayClick: i,
    modifiers: s
  };
  return u.jsx(Bu.Provider, { value: c, children: r });
}
function Wu() {
  var e = dr(Bu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function IR(e, t) {
  var r = t || {}, n = r.from, o = r.to;
  return n && o ? Le(o, e) && Le(n, e) ? void 0 : Le(o, e) ? { from: o, to: void 0 } : Le(n, e) ? void 0 : Ml(n, e) ? { from: e, to: o } : { from: n, to: e } : o ? Ml(e, o) ? { from: o, to: e } : { from: e, to: o } : n ? Hy(e, n) ? { from: e, to: n } : { from: n, to: e } : { from: e, to: void 0 };
}
var Hu = ur(void 0);
function kR(e) {
  if (!Fn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(Hu.Provider, { value: t, children: e.children });
  }
  return u.jsx(LR, { initialProps: e.initialProps, children: e.children });
}
function LR(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = n || {}, a = o.from, i = o.to, s = t.min, c = t.max, l = function(v, y, h) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, v, y, h);
    var x = IR(v, n);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, v, y, h);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], i ? (d.range_end = [i], Le(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]) : i && (d.range_start = [i], d.range_end = [i]), s && (a && !i && d.disabled.push({
    after: ti(a, s - 1),
    before: Ie(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: Ie(a, s - 1)
  }), !a && i && d.disabled.push({
    after: ti(i, s - 1),
    before: Ie(i, s - 1)
  })), c) {
    if (a && !i && (d.disabled.push({
      before: Ie(a, -c + 1)
    }), d.disabled.push({
      after: Ie(a, c - 1)
    })), a && i) {
      var p = ht(i, a) + 1, m = c - p;
      d.disabled.push({
        before: ti(a, m)
      }), d.disabled.push({
        after: Ie(i, m)
      });
    }
    !a && i && (d.disabled.push({
      before: Ie(i, -c + 1)
    }), d.disabled.push({
      after: Ie(i, c - 1)
    }));
  }
  return u.jsx(Hu.Provider, { value: { selected: n, onDayClick: l, modifiers: d }, children: r });
}
function Vu() {
  var e = dr(Hu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function xo(e) {
  return Array.isArray(e) ? Vy([], e) : e !== void 0 ? [e] : [];
}
function $R(e) {
  var t = {};
  return Object.entries(e).forEach(function(r) {
    var n = r[0], o = r[1];
    t[n] = xo(o);
  }), t;
}
var ot;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ot || (ot = {}));
var FR = ot.Selected, Rt = ot.Disabled, qR = ot.Hidden, BR = ot.Today, ni = ot.RangeEnd, oi = ot.RangeMiddle, ai = ot.RangeStart, WR = ot.Outside;
function HR(e, t, r) {
  var n, o = (n = {}, n[FR] = xo(e.selected), n[Rt] = xo(e.disabled), n[qR] = xo(e.hidden), n[BR] = [e.today], n[ni] = [], n[oi] = [], n[ai] = [], n[WR] = [], n);
  return e.fromDate && o[Rt].push({ before: e.fromDate }), e.toDate && o[Rt].push({ after: e.toDate }), $n(e) ? o[Rt] = o[Rt].concat(t.modifiers[Rt]) : Fn(e) && (o[Rt] = o[Rt].concat(r.modifiers[Rt]), o[ai] = r.modifiers[ai], o[oi] = r.modifiers[oi], o[ni] = r.modifiers[ni]), o;
}
var Yy = ur(void 0);
function VR(e) {
  var t = be(), r = Wu(), n = Vu(), o = HR(t, r, n), a = $R(t.modifiers), i = ce(ce({}, o), a);
  return u.jsx(Yy.Provider, { value: i, children: e.children });
}
function Xy() {
  var e = dr(Yy);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function zR(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function GR(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function UR(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function KR(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function YR(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function XR(e, t) {
  var r, n = t.from, o = t.to;
  if (n && o) {
    var a = ht(o, n) < 0;
    a && (r = [o, n], n = r[0], o = r[1]);
    var i = ht(e, n) >= 0 && ht(o, e) >= 0;
    return i;
  }
  return o ? Le(o, e) : n ? Le(n, e) : !1;
}
function QR(e) {
  return Lu(e);
}
function ZR(e) {
  return Array.isArray(e) && e.every(Lu);
}
function JR(e, t) {
  return t.some(function(r) {
    if (typeof r == "boolean")
      return r;
    if (QR(r))
      return Le(e, r);
    if (ZR(r))
      return r.includes(e);
    if (GR(r))
      return XR(e, r);
    if (YR(r))
      return r.dayOfWeek.includes(e.getDay());
    if (zR(r)) {
      var n = ht(r.before, e), o = ht(r.after, e), a = n > 0, i = o < 0, s = Ml(r.before, r.after);
      return s ? i && a : a || i;
    }
    return UR(r) ? ht(e, r.after) > 0 : KR(r) ? ht(r.before, e) > 0 : typeof r == "function" ? r(e) : !1;
  });
}
function zu(e, t, r) {
  var n = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return JR(e, s) && a.push(i), a;
  }, []), o = {};
  return n.forEach(function(a) {
    return o[a] = !0;
  }), r && !qu(e, r) && (o.outside = !0), o;
}
function eM(e, t) {
  for (var r = $e(e[0]), n = $u(e[e.length - 1]), o, a, i = r; i <= n; ) {
    var s = zu(i, t), c = !s.disabled && !s.hidden;
    if (!c) {
      i = Ie(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = Ie(i, 1);
  }
  return a || o;
}
var tM = 365;
function Qy(e, t) {
  var r = t.moveBy, n = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, p = o.locale, m = {
    day: Ie,
    week: Rl,
    month: Ke,
    year: hN,
    startOfWeek: function(g) {
      return o.ISOWeek ? or(g) : xt(g, { locale: p, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? ky(g) : Fu(g, { locale: p, weekStartsOn: c });
    }
  }, v = m[r](e, n === "after" ? 1 : -1);
  n === "before" && l ? v = vN([l, v]) : n === "after" && d && (v = gN([d, v]));
  var y = !0;
  if (a) {
    var h = zu(v, a);
    y = !h.disabled && !h.hidden;
  }
  return y ? v : s.count > tM ? s.lastFocused : Qy(v, {
    moveBy: r,
    direction: n,
    context: o,
    modifiers: a,
    retry: ce(ce({}, s), { count: s.count + 1 })
  });
}
var Zy = ur(void 0);
function rM(e) {
  var t = qn(), r = Xy(), n = yt(), o = n[0], a = n[1], i = yt(), s = i[0], c = i[1], l = eM(t.displayMonths, r), d = o ?? (s && t.isDateDisplayed(s)) ? s : l, p = function() {
    c(o), a(void 0);
  }, m = function(g) {
    a(g);
  }, v = be(), y = function(g, b) {
    if (o) {
      var x = Qy(o, {
        moveBy: g,
        direction: b,
        context: v,
        modifiers: r
      });
      Le(o, x) || (t.goToDate(x, o), m(x));
    }
  }, h = {
    focusedDay: o,
    focusTarget: d,
    blur: p,
    focus: m,
    focusDayAfter: function() {
      return y("day", "after");
    },
    focusDayBefore: function() {
      return y("day", "before");
    },
    focusWeekAfter: function() {
      return y("week", "after");
    },
    focusWeekBefore: function() {
      return y("week", "before");
    },
    focusMonthBefore: function() {
      return y("month", "before");
    },
    focusMonthAfter: function() {
      return y("month", "after");
    },
    focusYearBefore: function() {
      return y("year", "before");
    },
    focusYearAfter: function() {
      return y("year", "after");
    },
    focusStartOfWeek: function() {
      return y("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return y("endOfWeek", "after");
    }
  };
  return u.jsx(Zy.Provider, { value: h, children: e.children });
}
function Gu() {
  var e = dr(Zy);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function nM(e, t) {
  var r = Xy(), n = zu(e, r, t);
  return n;
}
var Uu = ur(void 0);
function oM(e) {
  if (!da(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(Uu.Provider, { value: t, children: e.children });
  }
  return u.jsx(aM, { initialProps: e.initialProps, children: e.children });
}
function aM(e) {
  var t = e.initialProps, r = e.children, n = function(a, i, s) {
    var c, l, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, i, s), i.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, i, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: n
  };
  return u.jsx(Uu.Provider, { value: o, children: r });
}
function Jy() {
  var e = dr(Uu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function iM(e, t) {
  var r = be(), n = Jy(), o = Wu(), a = Vu(), i = Gu(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, d = i.focusWeekBefore, p = i.blur, m = i.focus, v = i.focusMonthBefore, y = i.focusMonthAfter, h = i.focusYearBefore, g = i.focusYearAfter, b = i.focusStartOfWeek, x = i.focusEndOfWeek, w = function(k) {
    var A, $, re, ee;
    da(r) ? (A = n.onDayClick) === null || A === void 0 || A.call(n, e, t, k) : $n(r) ? ($ = o.onDayClick) === null || $ === void 0 || $.call(o, e, t, k) : Fn(r) ? (re = a.onDayClick) === null || re === void 0 || re.call(a, e, t, k) : (ee = r.onDayClick) === null || ee === void 0 || ee.call(r, e, t, k);
  }, _ = function(k) {
    var A;
    m(e), (A = r.onDayFocus) === null || A === void 0 || A.call(r, e, t, k);
  }, C = function(k) {
    var A;
    p(), (A = r.onDayBlur) === null || A === void 0 || A.call(r, e, t, k);
  }, S = function(k) {
    var A;
    (A = r.onDayMouseEnter) === null || A === void 0 || A.call(r, e, t, k);
  }, P = function(k) {
    var A;
    (A = r.onDayMouseLeave) === null || A === void 0 || A.call(r, e, t, k);
  }, R = function(k) {
    var A;
    (A = r.onDayPointerEnter) === null || A === void 0 || A.call(r, e, t, k);
  }, T = function(k) {
    var A;
    (A = r.onDayPointerLeave) === null || A === void 0 || A.call(r, e, t, k);
  }, I = function(k) {
    var A;
    (A = r.onDayTouchCancel) === null || A === void 0 || A.call(r, e, t, k);
  }, O = function(k) {
    var A;
    (A = r.onDayTouchEnd) === null || A === void 0 || A.call(r, e, t, k);
  }, W = function(k) {
    var A;
    (A = r.onDayTouchMove) === null || A === void 0 || A.call(r, e, t, k);
  }, F = function(k) {
    var A;
    (A = r.onDayTouchStart) === null || A === void 0 || A.call(r, e, t, k);
  }, N = function(k) {
    var A;
    (A = r.onDayKeyUp) === null || A === void 0 || A.call(r, e, t, k);
  }, L = function(k) {
    var A;
    switch (k.key) {
      case "ArrowLeft":
        k.preventDefault(), k.stopPropagation(), r.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        k.preventDefault(), k.stopPropagation(), r.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        k.preventDefault(), k.stopPropagation(), l();
        break;
      case "ArrowUp":
        k.preventDefault(), k.stopPropagation(), d();
        break;
      case "PageUp":
        k.preventDefault(), k.stopPropagation(), k.shiftKey ? h() : v();
        break;
      case "PageDown":
        k.preventDefault(), k.stopPropagation(), k.shiftKey ? g() : y();
        break;
      case "Home":
        k.preventDefault(), k.stopPropagation(), b();
        break;
      case "End":
        k.preventDefault(), k.stopPropagation(), x();
        break;
    }
    (A = r.onDayKeyDown) === null || A === void 0 || A.call(r, e, t, k);
  }, D = {
    onClick: w,
    onFocus: _,
    onBlur: C,
    onKeyDown: L,
    onKeyUp: N,
    onMouseEnter: S,
    onMouseLeave: P,
    onPointerEnter: R,
    onPointerLeave: T,
    onTouchCancel: I,
    onTouchEnd: O,
    onTouchMove: W,
    onTouchStart: F
  };
  return D;
}
function sM() {
  var e = be(), t = Jy(), r = Wu(), n = Vu(), o = da(e) ? t.selected : $n(e) ? r.selected : Fn(e) ? n.selected : void 0;
  return o;
}
function cM(e) {
  return Object.values(ot).includes(e);
}
function lM(e, t) {
  var r = [e.classNames.day];
  return Object.keys(t).forEach(function(n) {
    var o = e.modifiersClassNames[n];
    if (o)
      r.push(o);
    else if (cM(n)) {
      var a = e.classNames["day_".concat(n)];
      a && r.push(a);
    }
  }), r;
}
function uM(e, t) {
  var r = ce({}, e.styles.day);
  return Object.keys(t).forEach(function(n) {
    var o;
    r = ce(ce({}, r), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[n]);
  }), r;
}
function dM(e, t, r) {
  var n, o, a, i = be(), s = Gu(), c = nM(e, t), l = iM(e, c), d = sM(), p = !!(i.onDayClick || i.mode !== "default");
  Ge(function() {
    var S;
    c.outside || s.focusedDay && p && Le(s.focusedDay, e) && ((S = r.current) === null || S === void 0 || S.focus());
  }, [
    s.focusedDay,
    e,
    r,
    p,
    c.outside
  ]);
  var m = lM(i, c).join(" "), v = uM(i, c), y = !!(c.outside && !i.showOutsideDays || c.hidden), h = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : OR, g = u.jsx(h, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: v,
    className: m,
    children: g,
    role: "gridcell"
  }, x = s.focusTarget && Le(s.focusTarget, e) && !c.outside, w = s.focusedDay && Le(s.focusedDay, e), _ = ce(ce(ce({}, b), (n = { disabled: c.disabled, role: "gridcell" }, n["aria-selected"] = c.selected, n.tabIndex = w || x ? 0 : -1, n)), l), C = {
    isButton: p,
    isHidden: y,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: _,
    divProps: b
  };
  return C;
}
function fM(e) {
  var t = Rr(null), r = dM(e.date, e.displayMonth, t);
  return r.isHidden ? u.jsx("div", { role: "gridcell" }) : r.isButton ? u.jsx(Ao, ce({ name: "day", ref: t }, r.buttonProps)) : u.jsx("div", ce({}, r.divProps));
}
function pM(e) {
  var t = e.number, r = e.dates, n = be(), o = n.onWeekNumberClick, a = n.styles, i = n.classNames, s = n.locale, c = n.labels.labelWeekNumber, l = n.formatters.formatWeekNumber, d = l(Number(t), { locale: s });
  if (!o)
    return u.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var p = c(Number(t), { locale: s }), m = function(v) {
    o(t, r, v);
  };
  return u.jsx(Ao, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: m, children: d });
}
function mM(e) {
  var t, r, n = be(), o = n.styles, a = n.classNames, i = n.showWeekNumber, s = n.components, c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : fM, l = (r = s == null ? void 0 : s.WeekNumber) !== null && r !== void 0 ? r : pM, d;
  return i && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(l, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(p) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(c, { displayMonth: e.displayMonth, date: p }) }, h1(p));
  })] });
}
function Xf(e, t, r) {
  for (var n = r != null && r.ISOWeek ? ky(t) : Fu(t, r), o = r != null && r.ISOWeek ? or(e) : xt(e, r), a = ht(n, o), i = [], s = 0; s <= a; s++)
    i.push(Ie(o, s));
  var c = i.reduce(function(l, d) {
    var p = r != null && r.ISOWeek ? Fy(d) : By(d, r), m = l.find(function(v) {
      return v.weekNumber === p;
    });
    return m ? (m.dates.push(d), l) : (l.push({
      weekNumber: p,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function hM(e, t) {
  var r = Xf($e(e), $u(e), t);
  if (t != null && t.useFixedWeeks) {
    var n = g1(e, t);
    if (n < 6) {
      var o = r[r.length - 1], a = o.dates[o.dates.length - 1], i = Rl(a, 6 - n), s = Xf(Rl(a, 1), i, t);
      r.push.apply(r, s);
    }
  }
  return r;
}
function vM(e) {
  var t, r, n, o = be(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, p = o.weekStartsOn, m = o.firstWeekContainsDate, v = o.ISOWeek, y = hM(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: v,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: m
  }), h = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : AR, g = (r = d == null ? void 0 : d.Row) !== null && r !== void 0 ? r : mM, b = (n = d == null ? void 0 : d.Footer) !== null && n !== void 0 ? n : NR;
  return u.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && u.jsx(h, {}), u.jsx("tbody", { className: i.tbody, style: s.tbody, children: y.map(function(x) {
    return u.jsx(g, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), u.jsx(b, { displayMonth: e.displayMonth })] });
}
function gM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var yM = gM() ? Yv : Ge, ii = !1, bM = 0;
function Qf() {
  return "react-day-picker-".concat(++bM);
}
function xM(e) {
  var t, r = e ?? (ii ? Qf() : null), n = yt(r), o = n[0], a = n[1];
  return yM(function() {
    o === null && a(Qf());
  }, []), Ge(function() {
    ii === !1 && (ii = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function wM(e) {
  var t, r, n = be(), o = n.dir, a = n.classNames, i = n.styles, s = n.components, c = qn().displayMonths, l = xM(n.id ? "".concat(n.id, "-").concat(e.displayIndex) : void 0), d = n.id ? "".concat(n.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], m = i.month, v = e.displayIndex === 0, y = e.displayIndex === c.length - 1, h = !v && !y;
  o === "rtl" && (t = [v, y], y = t[0], v = t[1]), v && (p.push(a.caption_start), m = ce(ce({}, m), i.caption_start)), y && (p.push(a.caption_end), m = ce(ce({}, m), i.caption_end)), h && (p.push(a.caption_between), m = ce(ce({}, m), i.caption_between));
  var g = (r = s == null ? void 0 : s.Caption) !== null && r !== void 0 ? r : TR;
  return u.jsxs("div", { className: p.join(" "), style: m, children: [u.jsx(g, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(vM, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function _M(e) {
  var t = be(), r = t.classNames, n = t.styles;
  return u.jsx("div", { className: r.months, style: n.months, children: e.children });
}
function SM(e) {
  var t, r, n = e.initialProps, o = be(), a = Gu(), i = qn(), s = yt(!1), c = s[0], l = s[1];
  Ge(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), l(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var p = ce(ce({}, o.styles.root), o.style), m = Object.keys(n).filter(function(y) {
    return y.startsWith("data-");
  }).reduce(function(y, h) {
    var g;
    return ce(ce({}, y), (g = {}, g[h] = n[h], g));
  }, {}), v = (r = (t = n.components) === null || t === void 0 ? void 0 : t.Months) !== null && r !== void 0 ? r : _M;
  return u.jsx("div", ce({ className: d.join(" "), style: p, dir: o.dir, id: o.id, nonce: n.nonce, title: n.title, lang: n.lang }, m, { children: u.jsx(v, { children: i.displayMonths.map(function(y, h) {
    return u.jsx(wM, { displayIndex: h, displayMonth: y }, h);
  }) }) }));
}
function CM(e) {
  var t = e.children, r = K1(e, ["children"]);
  return u.jsx(pR, { initialProps: r, children: u.jsx(SR, { children: u.jsx(oM, { initialProps: r, children: u.jsx(jR, { initialProps: r, children: u.jsx(kR, { initialProps: r, children: u.jsx(VR, { children: u.jsx(rM, { children: t }) }) }) }) }) }) });
}
function eb(e) {
  return u.jsx(CM, ce({}, e, { children: u.jsx(SM, { initialProps: e }) }));
}
const PM = "(##) ####-####", EM = "(##) #####-####", TM = "#####-###", NM = "###.###.###-##", RM = "##.###.###/####-##", MM = "###########", AM = "##.###.###-#", OM = "AAA#A##", jM = "###########", DM = "##############", tb = (e, t) => {
  let r = "", n = 0;
  for (let o = 0; o < t.length; o++) {
    const a = e[n];
    if (a === void 0)
      break;
    switch (t[o]) {
      case "#":
        if (!/\d/.test(a))
          return r;
        r += a, n++;
        break;
      case "A":
        if (!/[a-zA-Z]/.test(a))
          return r;
        r += a, n++;
        break;
      case "*":
        /[a-zA-Z0-9]/.test(a) && (r += e[n]), n++;
        break;
      default:
        r += t[o], t[o] === a && n++;
    }
  }
  return r;
}, SW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: EM,
  CNH_MASK: MM,
  CNPJ_MASK: RM,
  CPF_MASK: NM,
  PHONE_MASK: PM,
  PLATE_MASK: OM,
  RENAVAM_MASK: jM,
  RG_MASK: AM,
  RNTRC_MASK: DM,
  ZIP_CODE_MASK: TM,
  formatMask: tb
}, Symbol.toStringTag, { value: "Module" })), CW = [
  "AC",
  // Acre
  "AL",
  // Alagoas
  "AP",
  // Amapá
  "AM",
  // Amazonas
  "BA",
  // Bahia
  "CE",
  // Ceará
  "DF",
  // Distrito Federal
  "ES",
  // Espírito Santo
  "GO",
  // Goiás
  "MA",
  // Maranhão
  "MT",
  // Mato Grosso
  "MS",
  // Mato Grosso do Sul
  "MG",
  // Minas Gerais
  "PA",
  // Pará
  "PB",
  // Paraíba
  "PR",
  // Paraná
  "PE",
  // Pernambuco
  "PI",
  // Piauí
  "RJ",
  // Rio de Janeiro
  "RN",
  // Rio Grande do Norte
  "RS",
  // Rio Grande do Sul
  "RO",
  // Rondônia
  "RR",
  // Roraima
  "SC",
  // Santa Catarina
  "SP",
  // São Paulo
  "SE",
  // Sergipe
  "TO"
  // Tocantins
];
function rb({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    eb,
    {
      showOutsideDays: r,
      className: M("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: M(
          vt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: M(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          n.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: M(
          vt({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ className: o, ...a }) => /* @__PURE__ */ u.jsx(Tu, { className: M("h-4 w-4", o), ...a }),
        IconRight: ({ className: o, ...a }) => /* @__PURE__ */ u.jsx(On, { className: M("h-4 w-4", o), ...a })
      },
      ...n
    }
  );
}
rb.displayName = "Calendar";
const IM = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
IM.displayName = "Card";
const kM = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M("flex flex-col space-y-1.5 p-2", e),
    ...t
  }
));
kM.displayName = "CardHeader";
const LM = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    ref: r,
    className: M(
      "text-xl font-semibold leading-none tracking-tight p-4 pb-0",
      e
    ),
    ...t
  }
));
LM.displayName = "CardTitle";
const $M = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: r,
    className: M("text-sm text-muted-foreground px-4", e),
    ...t
  }
));
$M.displayName = "CardDescription";
const FM = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { ref: r, className: M("p-4", e), ...t }));
FM.displayName = "CardContent";
const qM = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M("flex items-center p-4 pt-0", e),
    ...t
  }
));
qM.displayName = "CardFooter";
function BM(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Zf(e) {
  return BM(e) || Array.isArray(e);
}
function WM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ku(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : r.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !Zf(s) || !Zf(c) ? s === c : Ku(s, c);
  });
}
function Jf(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function HM(e, t) {
  if (e.length !== t.length) return !1;
  const r = Jf(e), n = Jf(t);
  return r.every((o, a) => {
    const i = n[a];
    return Ku(o, i);
  });
}
function Yu(e) {
  return typeof e == "number";
}
function Al(e) {
  return typeof e == "string";
}
function fa(e) {
  return typeof e == "boolean";
}
function ep(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ce(e) {
  return Math.abs(e);
}
function Xu(e) {
  return Math.sign(e);
}
function dn(e, t) {
  return Ce(e - t);
}
function VM(e, t) {
  if (e === 0 || t === 0 || Ce(e) <= Ce(t)) return 0;
  const r = dn(Ce(e), Ce(t));
  return Ce(r / e);
}
function zM(e) {
  return Math.round(e * 100) / 100;
}
function vn(e) {
  return gn(e).map(Number);
}
function nt(e) {
  return e[Bn(e)];
}
function Bn(e) {
  return Math.max(0, e.length - 1);
}
function Qu(e, t) {
  return t === Bn(e);
}
function tp(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function gn(e) {
  return Object.keys(e);
}
function nb(e, t) {
  return [e, t].reduce((r, n) => (gn(n).forEach((o) => {
    const a = r[o], i = n[o], s = ep(a) && ep(i);
    r[o] = s ? nb(a, i) : i;
  }), r), {});
}
function Ol(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function GM(e, t) {
  const r = {
    start: n,
    center: o,
    end: a
  };
  function n() {
    return 0;
  }
  function o(c) {
    return a(c) / 2;
  }
  function a(c) {
    return t - c;
  }
  function i(c, l) {
    return Al(e) ? r[e](c) : e(t, c, l);
  }
  return {
    measure: i
  };
}
function yn() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), c = () => o.removeEventListener(a, i, s);
    else {
      const l = o;
      l.addListener(i), c = () => l.removeListener(i);
    }
    return e.push(c), n;
  }
  function r() {
    e = e.filter((o) => o());
  }
  const n = {
    add: t,
    clear: r
  };
  return n;
}
function UM(e, t, r, n) {
  const o = yn(), a = 1e3 / 60;
  let i = null, s = 0, c = 0;
  function l() {
    o.add(e, "visibilitychange", () => {
      e.hidden && y();
    });
  }
  function d() {
    v(), o.clear();
  }
  function p(g) {
    if (!c) return;
    i || (i = g, r(), r());
    const b = g - i;
    for (i = g, s += b; s >= a; )
      r(), s -= a;
    const x = s / a;
    n(x), c && (c = t.requestAnimationFrame(p));
  }
  function m() {
    c || (c = t.requestAnimationFrame(p));
  }
  function v() {
    t.cancelAnimationFrame(c), i = null, s = 0, c = 0;
  }
  function y() {
    i = null, s = 0;
  }
  return {
    init: l,
    destroy: d,
    start: m,
    stop: v,
    update: r,
    render: n
  };
}
function KM(e, t) {
  const r = t === "rtl", n = e === "y", o = n ? "y" : "x", a = n ? "x" : "y", i = !n && r ? -1 : 1, s = d(), c = p();
  function l(y) {
    const {
      height: h,
      width: g
    } = y;
    return n ? h : g;
  }
  function d() {
    return n ? "top" : r ? "right" : "left";
  }
  function p() {
    return n ? "bottom" : r ? "left" : "right";
  }
  function m(y) {
    return y * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: c,
    measureSize: l,
    direction: m
  };
}
function ar(e = 0, t = 0) {
  const r = Ce(e - t);
  function n(l) {
    return l < e;
  }
  function o(l) {
    return l > t;
  }
  function a(l) {
    return n(l) || o(l);
  }
  function i(l) {
    return a(l) ? n(l) ? e : t : l;
  }
  function s(l) {
    return r ? l - r * Math.ceil((l - t) / r) : l;
  }
  return {
    length: r,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: n,
    removeOffset: s
  };
}
function ob(e, t, r) {
  const {
    constrain: n
  } = ar(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return r ? Ce((o + m) % o) : n(m);
  }
  function s() {
    return a;
  }
  function c(m) {
    return a = i(m), p;
  }
  function l(m) {
    return d().set(s() + m);
  }
  function d() {
    return ob(e, s(), r);
  }
  const p = {
    get: s,
    set: c,
    add: l,
    clone: d
  };
  return p;
}
function YM(e, t, r, n, o, a, i, s, c, l, d, p, m, v, y, h, g, b, x) {
  const {
    cross: w,
    direction: _
  } = e, C = ["INPUT", "SELECT", "TEXTAREA"], S = {
    passive: !1
  }, P = yn(), R = yn(), T = ar(50, 225).constrain(v.measure(20)), I = {
    mouse: 300,
    touch: 400
  }, O = {
    mouse: 500,
    touch: 600
  }, W = y ? 43 : 25;
  let F = !1, N = 0, L = 0, D = !1, k = !1, A = !1, $ = !1;
  function re(H) {
    if (!x) return;
    function le(ge) {
      (fa(x) || x(H, ge)) && oe(ge);
    }
    const z = t;
    P.add(z, "dragstart", (ge) => ge.preventDefault(), S).add(z, "touchmove", () => {
    }, S).add(z, "touchend", () => {
    }).add(z, "touchstart", le).add(z, "mousedown", le).add(z, "touchcancel", te).add(z, "contextmenu", te).add(z, "click", se, !0);
  }
  function ee() {
    P.clear(), R.clear();
  }
  function j() {
    const H = $ ? r : t;
    R.add(H, "touchmove", B, S).add(H, "touchend", te).add(H, "mousemove", B, S).add(H, "mouseup", te);
  }
  function G(H) {
    const le = H.nodeName || "";
    return C.includes(le);
  }
  function Y() {
    return (y ? O : I)[$ ? "mouse" : "touch"];
  }
  function U(H, le) {
    const z = p.add(Xu(H) * -1), ge = d.byDistance(H, !y).distance;
    return y || Ce(H) < T ? ge : g && le ? ge * 0.5 : d.byIndex(z.get(), 0).distance;
  }
  function oe(H) {
    const le = Ol(H, n);
    $ = le, A = y && le && !H.buttons && F, F = dn(o.get(), i.get()) >= 2, !(le && H.button !== 0) && (G(H.target) || (D = !0, a.pointerDown(H), l.useFriction(0).useDuration(0), o.set(i), j(), N = a.readPoint(H), L = a.readPoint(H, w), m.emit("pointerDown")));
  }
  function B(H) {
    if (!Ol(H, n) && H.touches.length >= 2) return te(H);
    const z = a.readPoint(H), ge = a.readPoint(H, w), Se = dn(z, N), Ne = dn(ge, L);
    if (!k && !$ && (!H.cancelable || (k = Se > Ne, !k)))
      return te(H);
    const He = a.pointerMove(H);
    Se > h && (A = !0), l.useFriction(0.3).useDuration(0.75), s.start(), o.add(_(He)), H.preventDefault();
  }
  function te(H) {
    const z = d.byDistance(0, !1).index !== p.get(), ge = a.pointerUp(H) * Y(), Se = U(_(ge), z), Ne = VM(ge, Se), He = W - 10 * Ne, De = b + Ne / 50;
    k = !1, D = !1, R.clear(), l.useDuration(He).useFriction(De), c.distance(Se, !y), $ = !1, m.emit("pointerUp");
  }
  function se(H) {
    A && (H.stopPropagation(), H.preventDefault(), A = !1);
  }
  function ae() {
    return D;
  }
  return {
    init: re,
    destroy: ee,
    pointerDown: ae
  };
}
function XM(e, t) {
  let n, o;
  function a(p) {
    return p.timeStamp;
  }
  function i(p, m) {
    const y = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ol(p, t) ? p : p.touches[0])[y];
  }
  function s(p) {
    return n = p, o = p, i(p);
  }
  function c(p) {
    const m = i(p) - i(o), v = a(p) - a(n) > 170;
    return o = p, v && (n = p), m;
  }
  function l(p) {
    if (!n || !o) return 0;
    const m = i(o) - i(n), v = a(p) - a(n), y = a(p) - a(o) > 170, h = m / v;
    return v && !y && Ce(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: l,
    readPoint: i
  };
}
function QM() {
  function e(r) {
    const {
      offsetTop: n,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = r;
    return {
      top: n,
      right: o + a,
      bottom: n + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function ZM(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function JM(e, t, r, n, o, a, i) {
  const s = [e].concat(n);
  let c, l, d = [], p = !1;
  function m(g) {
    return o.measureSize(i.measure(g));
  }
  function v(g) {
    if (!a) return;
    l = m(e), d = n.map(m);
    function b(x) {
      for (const w of x) {
        if (p) return;
        const _ = w.target === e, C = n.indexOf(w.target), S = _ ? l : d[C], P = m(_ ? e : n[C]);
        if (Ce(P - S) >= 0.5) {
          g.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((x) => {
      (fa(a) || a(g, x)) && b(x);
    }), r.requestAnimationFrame(() => {
      s.forEach((x) => c.observe(x));
    });
  }
  function y() {
    p = !0, c && c.disconnect();
  }
  return {
    init: v,
    destroy: y
  };
}
function eA(e, t, r, n, o, a) {
  let i = 0, s = 0, c = o, l = a, d = e.get(), p = 0;
  function m() {
    const S = n.get() - e.get(), P = !c;
    let R = 0;
    return P ? (i = 0, r.set(n), e.set(n), R = S) : (r.set(e), i += S / c, i *= l, d += i, e.add(i), R = d - p), s = Xu(R), p = d, C;
  }
  function v() {
    const S = n.get() - t.get();
    return Ce(S) < 1e-3;
  }
  function y() {
    return c;
  }
  function h() {
    return s;
  }
  function g() {
    return i;
  }
  function b() {
    return w(o);
  }
  function x() {
    return _(a);
  }
  function w(S) {
    return c = S, C;
  }
  function _(S) {
    return l = S, C;
  }
  const C = {
    direction: h,
    duration: y,
    velocity: g,
    seek: m,
    settled: v,
    useBaseFriction: x,
    useBaseDuration: b,
    useFriction: _,
    useDuration: w
  };
  return C;
}
function tA(e, t, r, n, o) {
  const a = o.measure(10), i = o.measure(50), s = ar(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function d(v) {
    if (!l()) return;
    const y = e.reachedMin(t.get()) ? "min" : "max", h = Ce(e[y] - t.get()), g = r.get() - t.get(), b = s.constrain(h / i);
    r.subtract(g * b), !v && Ce(g) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
  }
  function p(v) {
    c = !v;
  }
  return {
    shouldConstrain: l,
    constrain: d,
    toggleActive: p
  };
}
function rA(e, t, r, n, o) {
  const a = ar(-t + e, 0), i = p(), s = d(), c = m();
  function l(y, h) {
    return dn(y, h) <= 1;
  }
  function d() {
    const y = i[0], h = nt(i), g = i.lastIndexOf(y), b = i.indexOf(h) + 1;
    return ar(g, b);
  }
  function p() {
    return r.map((y, h) => {
      const {
        min: g,
        max: b
      } = a, x = a.constrain(y), w = !h, _ = Qu(r, h);
      return w ? b : _ || l(g, x) ? g : l(b, x) ? b : x;
    }).map((y) => parseFloat(y.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [a.max];
    if (n === "keepSnaps") return i;
    const {
      min: y,
      max: h
    } = s;
    return i.slice(y, h);
  }
  return {
    snapsContained: c,
    scrollContainLimit: s
  };
}
function nA(e, t, r) {
  const n = t[0], o = r ? n - e : nt(t);
  return {
    limit: ar(o, n)
  };
}
function oA(e, t, r, n) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = ar(a, i);
  function l(m) {
    return m === 1 ? c(r.get()) : m === -1 ? s(r.get()) : !1;
  }
  function d(m) {
    if (!l(m)) return;
    const v = e * (m * -1);
    n.forEach((y) => y.add(v));
  }
  return {
    loop: d
  };
}
function aA(e) {
  const {
    max: t,
    length: r
  } = e;
  function n(a) {
    const i = a - t;
    return r ? i / -r : 0;
  }
  return {
    get: n
  };
}
function iA(e, t, r, n, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, c = p().map(t.measure), l = m(), d = v();
  function p() {
    return s(n).map((h) => nt(h)[i] - h[0][a]).map(Ce);
  }
  function m() {
    return n.map((h) => r[a] - h[a]).map((h) => -Ce(h));
  }
  function v() {
    return s(l).map((h) => h[0]).map((h, g) => h + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: d
  };
}
function sA(e, t, r, n, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = n, l = d();
  function d() {
    const m = i(a), v = !e || t === "keepSnaps";
    return r.length === 1 ? [a] : v ? m : m.slice(s, c).map((y, h, g) => {
      const b = !h, x = Qu(g, h);
      if (b) {
        const w = nt(g[0]) + 1;
        return tp(w);
      }
      if (x) {
        const w = Bn(a) - nt(g)[0] + 1;
        return tp(w, nt(g)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: l
  };
}
function cA(e, t, r, n, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = n;
  function c(y) {
    return y.concat().sort((h, g) => Ce(h) - Ce(g))[0];
  }
  function l(y) {
    const h = e ? i(y) : s(y), g = t.map((x, w) => ({
      diff: d(x - h, 0),
      index: w
    })).sort((x, w) => Ce(x.diff) - Ce(w.diff)), {
      index: b
    } = g[0];
    return {
      index: b,
      distance: h
    };
  }
  function d(y, h) {
    const g = [y, y + r, y - r];
    if (!e) return y;
    if (!h) return c(g);
    const b = g.filter((x) => Xu(x) === h);
    return b.length ? c(b) : nt(g) - r;
  }
  function p(y, h) {
    const g = t[y] - o.get(), b = d(g, h);
    return {
      index: y,
      distance: b
    };
  }
  function m(y, h) {
    const g = o.get() + y, {
      index: b,
      distance: x
    } = l(g), w = !e && a(g);
    if (!h || w) return {
      index: b,
      distance: y
    };
    const _ = t[b] - x, C = y + d(_, 0);
    return {
      index: b,
      distance: C
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: d
  };
}
function lA(e, t, r, n, o, a, i) {
  function s(p) {
    const m = p.distance, v = p.index !== t.get();
    a.add(m), m && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (r.set(t.get()), t.set(p.index), i.emit("select"));
  }
  function c(p, m) {
    const v = o.byDistance(p, m);
    s(v);
  }
  function l(p, m) {
    const v = t.clone().set(p), y = o.byIndex(v.get(), m);
    s(y);
  }
  return {
    distance: c,
    index: l
  };
}
function uA(e, t, r, n, o, a, i, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let l = 0;
  function d(v) {
    if (!s) return;
    function y(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const x = r.findIndex((w) => w.includes(h));
      Yu(x) && (o.useDuration(0), n.index(x, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((h, g) => {
      a.add(h, "focus", (b) => {
        (fa(s) || s(v, b)) && y(g);
      }, c);
    });
  }
  function p(v) {
    v.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function on(e) {
  let t = e;
  function r() {
    return t;
  }
  function n(c) {
    t = i(c);
  }
  function o(c) {
    t += i(c);
  }
  function a(c) {
    t -= i(c);
  }
  function i(c) {
    return Yu(c) ? c : c.get();
  }
  return {
    get: r,
    set: n,
    add: o,
    subtract: a
  };
}
function ab(e, t) {
  const r = e.scroll === "x" ? i : s, n = t.style;
  let o = null, a = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function c(m) {
    if (a) return;
    const v = zM(e.direction(m));
    v !== o && (n.transform = r(v), o = v);
  }
  function l(m) {
    a = !m;
  }
  function d() {
    a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: c,
    toggleActive: l
  };
}
function dA(e, t, r, n, o, a, i, s, c) {
  const d = vn(o), p = vn(o).reverse(), m = b().concat(x());
  function v(P, R) {
    return P.reduce((T, I) => T - o[I], R);
  }
  function y(P, R) {
    return P.reduce((T, I) => v(T, R) > 0 ? T.concat([I]) : T, []);
  }
  function h(P) {
    return a.map((R, T) => ({
      start: R - n[T] + 0.5 + P,
      end: R + t - 0.5 + P
    }));
  }
  function g(P, R, T) {
    const I = h(R);
    return P.map((O) => {
      const W = T ? 0 : -r, F = T ? r : 0, N = T ? "end" : "start", L = I[O][N];
      return {
        index: O,
        loopPoint: L,
        slideLocation: on(-1),
        translate: ab(e, c[O]),
        target: () => s.get() > L ? W : F
      };
    });
  }
  function b() {
    const P = i[0], R = y(p, P);
    return g(R, r, !1);
  }
  function x() {
    const P = t - i[0] - 1, R = y(d, P);
    return g(R, -r, !0);
  }
  function w() {
    return m.every(({
      index: P
    }) => {
      const R = d.filter((T) => T !== P);
      return v(R, t) <= 0.1;
    });
  }
  function _() {
    m.forEach((P) => {
      const {
        target: R,
        translate: T,
        slideLocation: I
      } = P, O = R();
      O !== I.get() && (T.to(O), I.set(O));
    });
  }
  function C() {
    m.forEach((P) => P.translate.clear());
  }
  return {
    canLoop: w,
    clear: C,
    loop: _,
    loopPoints: m
  };
}
function fA(e, t, r) {
  let n, o = !1;
  function a(c) {
    if (!r) return;
    function l(d) {
      for (const p of d)
        if (p.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    n = new MutationObserver((d) => {
      o || (fa(r) || r(c, d)) && l(d);
    }), n.observe(e, {
      childList: !0
    });
  }
  function i() {
    n && n.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function pA(e, t, r, n) {
  const o = {};
  let a = null, i = null, s, c = !1;
  function l() {
    s = new IntersectionObserver((y) => {
      c || (y.forEach((h) => {
        const g = t.indexOf(h.target);
        o[g] = h;
      }), a = null, i = null, r.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: n
    }), t.forEach((y) => s.observe(y));
  }
  function d() {
    s && s.disconnect(), c = !0;
  }
  function p(y) {
    return gn(o).reduce((h, g) => {
      const b = parseInt(g), {
        isIntersecting: x
      } = o[b];
      return (y && x || !y && !x) && h.push(b), h;
    }, []);
  }
  function m(y = !0) {
    if (y && a) return a;
    if (!y && i) return i;
    const h = p(y);
    return y && (a = h), y || (i = h), h;
  }
  return {
    init: l,
    destroy: d,
    get: m
  };
}
function mA(e, t, r, n, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: c
  } = e, l = r[0] && o, d = y(), p = h(), m = r.map(i), v = g();
  function y() {
    if (!l) return 0;
    const x = r[0];
    return Ce(t[s] - x[s]);
  }
  function h() {
    if (!l) return 0;
    const x = a.getComputedStyle(nt(n));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return r.map((x, w, _) => {
      const C = !w, S = Qu(_, w);
      return C ? m[w] + d : S ? m[w] + p : _[w + 1][s] - x[s];
    }).map(Ce);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: v,
    startGap: d,
    endGap: p
  };
}
function hA(e, t, r, n, o, a, i, s, c) {
  const {
    startEdge: l,
    endEdge: d,
    direction: p
  } = e, m = Yu(r);
  function v(b, x) {
    return vn(b).filter((w) => w % x === 0).map((w) => b.slice(w, w + x));
  }
  function y(b) {
    return b.length ? vn(b).reduce((x, w, _) => {
      const C = nt(x) || 0, S = C === 0, P = w === Bn(b), R = o[l] - a[C][l], T = o[l] - a[w][d], I = !n && S ? p(i) : 0, O = !n && P ? p(s) : 0, W = Ce(T - O - (R + I));
      return _ && W > t + c && x.push(w), P && x.push(b.length), x;
    }, []).map((x, w, _) => {
      const C = Math.max(_[w - 1] || 0);
      return b.slice(C, x);
    }) : [];
  }
  function h(b) {
    return m ? v(b, r) : y(b);
  }
  return {
    groupSlides: h
  };
}
function vA(e, t, r, n, o, a, i) {
  const {
    align: s,
    axis: c,
    direction: l,
    startIndex: d,
    loop: p,
    duration: m,
    dragFree: v,
    dragThreshold: y,
    inViewThreshold: h,
    slidesToScroll: g,
    skipSnaps: b,
    containScroll: x,
    watchResize: w,
    watchSlides: _,
    watchDrag: C,
    watchFocus: S
  } = a, P = 2, R = QM(), T = R.measure(t), I = r.map(R.measure), O = KM(c, l), W = O.measureSize(T), F = ZM(W), N = GM(s, W), L = !p && !!x, D = p || !!x, {
    slideSizes: k,
    slideSizesWithGaps: A,
    startGap: $,
    endGap: re
  } = mA(O, T, I, r, D, o), ee = hA(O, W, g, p, T, I, $, re, P), {
    snaps: j,
    snapsAligned: G
  } = iA(O, N, T, I, ee), Y = -nt(j) + nt(A), {
    snapsContained: U,
    scrollContainLimit: oe
  } = rA(W, Y, G, x, P), B = L ? U : G, {
    limit: te
  } = nA(Y, B, p), se = ob(Bn(B), d, p), ae = se.clone(), ne = vn(r), H = ({
    dragHandler: Ee,
    scrollBody: Ze,
    scrollBounds: Nt,
    options: {
      loop: qe
    }
  }) => {
    qe || Nt.constrain(Ee.pointerDown()), Ze.seek();
  }, le = ({
    scrollBody: Ee,
    translate: Ze,
    location: Nt,
    offsetLocation: qe,
    previousLocation: yr,
    scrollLooper: Je,
    slideLooper: i0,
    dragHandler: s0,
    animation: c0,
    eventHandler: mf,
    scrollBounds: l0,
    options: {
      loop: hf
    }
  }, vf) => {
    const gf = Ee.settled(), u0 = !l0.shouldConstrain(), yf = hf ? gf : gf && u0;
    yf && !s0.pointerDown() && (c0.stop(), mf.emit("settle")), yf || mf.emit("scroll");
    const d0 = Nt.get() * vf + yr.get() * (1 - vf);
    qe.set(d0), hf && (Je.loop(Ee.direction()), i0.loop()), Ze.to(qe.get());
  }, z = UM(n, o, () => H(dt), (Ee) => le(dt, Ee)), ge = 0.68, Se = B[se.get()], Ne = on(Se), He = on(Se), De = on(Se), ut = on(Se), E = eA(Ne, De, He, ut, m, ge), X = cA(p, B, Y, te, ut), Q = lA(z, se, ae, E, X, ut, i), fe = aA(te), Me = yn(), xe = pA(t, r, i, h), {
    slideRegistry: ue
  } = sA(L, x, B, oe, ee, ne), Qe = uA(e, r, ue, Q, E, Me, i, S), dt = {
    ownerDocument: n,
    ownerWindow: o,
    eventHandler: i,
    containerRect: T,
    slideRects: I,
    animation: z,
    axis: O,
    dragHandler: YM(O, e, n, o, ut, XM(O, o), Ne, z, Q, E, X, se, i, F, v, y, b, ge, C),
    eventStore: Me,
    percentOfView: F,
    index: se,
    indexPrevious: ae,
    limit: te,
    location: Ne,
    offsetLocation: De,
    previousLocation: He,
    options: a,
    resizeHandler: JM(t, i, o, r, O, w, R),
    scrollBody: E,
    scrollBounds: tA(te, De, ut, E, F),
    scrollLooper: oA(Y, te, De, [Ne, De, He, ut]),
    scrollProgress: fe,
    scrollSnapList: B.map(fe.get),
    scrollSnaps: B,
    scrollTarget: X,
    scrollTo: Q,
    slideLooper: dA(O, W, Y, k, A, j, B, De, r),
    slideFocus: Qe,
    slidesHandler: fA(t, i, _),
    slidesInView: xe,
    slideIndexes: ne,
    slideRegistry: ue,
    slidesToScroll: ee,
    target: ut,
    translate: ab(O, t)
  };
  return dt;
}
function gA() {
  let e = {}, t;
  function r(l) {
    t = l;
  }
  function n(l) {
    return e[l] || [];
  }
  function o(l) {
    return n(l).forEach((d) => d(t, l)), c;
  }
  function a(l, d) {
    return e[l] = n(l).concat([d]), c;
  }
  function i(l, d) {
    return e[l] = n(l).filter((p) => p !== d), c;
  }
  function s() {
    e = {};
  }
  const c = {
    init: r,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return c;
}
const yA = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function bA(e) {
  function t(a, i) {
    return nb(a, i || {});
  }
  function r(a) {
    const i = a.breakpoints || {}, s = gn(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, l) => t(c, l), {});
    return t(a, s);
  }
  function n(a) {
    return a.map((i) => gn(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function xA(e) {
  let t = [];
  function r(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, c) => Object.assign(s, {
      [c.name]: c
    }), {});
  }
  function n() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: r,
    destroy: n
  };
}
function Oo(e, t, r) {
  const n = e.ownerDocument, o = n.defaultView, a = bA(o), i = xA(a), s = yn(), c = gA(), {
    mergeOptions: l,
    optionsAtMedia: d,
    optionsMediaQueries: p
  } = a, {
    on: m,
    off: v,
    emit: y
  } = c, h = O;
  let g = !1, b, x = l(yA, Oo.globalOptions), w = l(x), _ = [], C, S, P;
  function R() {
    const {
      container: ne,
      slides: H
    } = w;
    S = (Al(ne) ? e.querySelector(ne) : ne) || e.children[0];
    const z = Al(H) ? S.querySelectorAll(H) : H;
    P = [].slice.call(z || S.children);
  }
  function T(ne) {
    const H = vA(e, S, P, n, o, ne, c);
    if (ne.loop && !H.slideLooper.canLoop()) {
      const le = Object.assign({}, ne, {
        loop: !1
      });
      return T(le);
    }
    return H;
  }
  function I(ne, H) {
    g || (x = l(x, ne), w = d(x), _ = H || _, R(), b = T(w), p([x, ..._.map(({
      options: le
    }) => le)]).forEach((le) => s.add(le, "change", O)), w.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(ae), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), S.offsetParent && P.length && b.dragHandler.init(ae), C = i.init(ae, _)));
  }
  function O(ne, H) {
    const le = ee();
    W(), I(l({
      startIndex: le
    }, ne), H), c.emit("reInit");
  }
  function W() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), i.destroy(), s.clear();
  }
  function F() {
    g || (g = !0, s.clear(), W(), c.emit("destroy"), c.clear());
  }
  function N(ne, H, le) {
    !w.active || g || (b.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : w.duration), b.scrollTo.index(ne, le || 0));
  }
  function L(ne) {
    const H = b.index.add(1).get();
    N(H, ne, -1);
  }
  function D(ne) {
    const H = b.index.add(-1).get();
    N(H, ne, 1);
  }
  function k() {
    return b.index.add(1).get() !== ee();
  }
  function A() {
    return b.index.add(-1).get() !== ee();
  }
  function $() {
    return b.scrollSnapList;
  }
  function re() {
    return b.scrollProgress.get(b.location.get());
  }
  function ee() {
    return b.index.get();
  }
  function j() {
    return b.indexPrevious.get();
  }
  function G() {
    return b.slidesInView.get();
  }
  function Y() {
    return b.slidesInView.get(!1);
  }
  function U() {
    return C;
  }
  function oe() {
    return b;
  }
  function B() {
    return e;
  }
  function te() {
    return S;
  }
  function se() {
    return P;
  }
  const ae = {
    canScrollNext: k,
    canScrollPrev: A,
    containerNode: te,
    internalEngine: oe,
    destroy: F,
    off: v,
    on: m,
    emit: y,
    plugins: U,
    previousScrollSnap: j,
    reInit: h,
    rootNode: B,
    scrollNext: L,
    scrollPrev: D,
    scrollProgress: re,
    scrollSnapList: $,
    scrollTo: N,
    selectedScrollSnap: ee,
    slideNodes: se,
    slidesInView: G,
    slidesNotInView: Y
  };
  return I(t, r), setTimeout(() => c.emit("init"), 0), ae;
}
Oo.globalOptions = void 0;
function Zu(e = {}, t = []) {
  const r = Rr(e), n = Rr(t), [o, a] = yt(), [i, s] = yt(), c = Xv(() => {
    o && o.reInit(r.current, n.current);
  }, [o]);
  return Ge(() => {
    Ku(r.current, e) || (r.current = e, c());
  }, [e, c]), Ge(() => {
    HM(n.current, t) || (n.current = t, c());
  }, [t, c]), Ge(() => {
    if (WM() && i) {
      Oo.globalOptions = Zu.globalOptions;
      const l = Oo(i, r.current, n.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Zu.globalOptions = void 0;
const ib = f.createContext(null);
function pa() {
  const e = f.useContext(ib);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const wA = f.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: n,
    className: o,
    children: a,
    ...i
  }, s) => {
    const [c, l] = Zu(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      n
    ), [d, p] = f.useState(!1), [m, v] = f.useState(!1), y = f.useCallback((x) => {
      x && (p(x.canScrollPrev()), v(x.canScrollNext()));
    }, []), h = f.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = f.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), b = f.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), h()) : x.key === "ArrowRight" && (x.preventDefault(), g());
      },
      [h, g]
    );
    return f.useEffect(() => {
      !l || !r || r(l);
    }, [l, r]), f.useEffect(() => {
      if (l)
        return y(l), l.on("reInit", y), l.on("select", y), () => {
          l == null || l.off("select", y);
        };
    }, [l, y]), /* @__PURE__ */ u.jsx(
      ib.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: g,
          canScrollPrev: d,
          canScrollNext: m
        },
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: s,
            onKeyDownCapture: b,
            className: M("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...i,
            children: a
          }
        )
      }
    );
  }
);
wA.displayName = "Carousel";
const _A = f.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: n, orientation: o } = pa();
  return /* @__PURE__ */ u.jsx("div", { ref: n, className: "overflow-hidden", children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      className: M(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
_A.displayName = "CarouselContent";
const SA = f.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = pa();
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      role: "group",
      "aria-roledescription": "slide",
      className: M(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
SA.displayName = "CarouselItem";
const CA = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = pa();
  return /* @__PURE__ */ u.jsxs(
    Gr,
    {
      ref: o,
      variant: t,
      size: r,
      className: M(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(rP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CA.displayName = "CarouselPrevious";
const PA = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = pa();
  return /* @__PURE__ */ u.jsxs(
    Gr,
    {
      ref: o,
      variant: t,
      size: r,
      className: M(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(oP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
PA.displayName = "CarouselNext";
var si, rp;
function ct() {
  if (rp) return si;
  rp = 1;
  var e = Array.isArray;
  return si = e, si;
}
var ci, np;
function sb() {
  if (np) return ci;
  np = 1;
  var e = typeof ro == "object" && ro && ro.Object === Object && ro;
  return ci = e, ci;
}
var li, op;
function Pt() {
  if (op) return li;
  op = 1;
  var e = sb(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return li = r, li;
}
var ui, ap;
function Wn() {
  if (ap) return ui;
  ap = 1;
  var e = Pt(), t = e.Symbol;
  return ui = t, ui;
}
var di, ip;
function EA() {
  if (ip) return di;
  ip = 1;
  var e = Wn(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = e ? e.toStringTag : void 0;
  function a(i) {
    var s = r.call(i, o), c = i[o];
    try {
      i[o] = void 0;
      var l = !0;
    } catch {
    }
    var d = n.call(i);
    return l && (s ? i[o] = c : delete i[o]), d;
  }
  return di = a, di;
}
var fi, sp;
function TA() {
  if (sp) return fi;
  sp = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return fi = r, fi;
}
var pi, cp;
function mr() {
  if (cp) return pi;
  cp = 1;
  var e = Wn(), t = EA(), r = TA(), n = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : n : a && a in Object(s) ? t(s) : r(s);
  }
  return pi = i, pi;
}
var mi, lp;
function hr() {
  if (lp) return mi;
  lp = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return mi = e, mi;
}
var hi, up;
function Hn() {
  if (up) return hi;
  up = 1;
  var e = mr(), t = hr(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && e(o) == r;
  }
  return hi = n, hi;
}
var vi, dp;
function Ju() {
  if (dp) return vi;
  dp = 1;
  var e = ct(), t = Hn(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return vi = o, vi;
}
var gi, fp;
function Gt() {
  if (fp) return gi;
  fp = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return gi = e, gi;
}
var yi, pp;
function ed() {
  if (pp) return yi;
  pp = 1;
  var e = mr(), t = Gt(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == o || c == r || c == a;
  }
  return yi = i, yi;
}
var bi, mp;
function NA() {
  if (mp) return bi;
  mp = 1;
  var e = Pt(), t = e["__core-js_shared__"];
  return bi = t, bi;
}
var xi, hp;
function RA() {
  if (hp) return xi;
  hp = 1;
  var e = NA(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return xi = r, xi;
}
var wi, vp;
function cb() {
  if (vp) return wi;
  vp = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return wi = r, wi;
}
var _i, gp;
function MA() {
  if (gp) return _i;
  gp = 1;
  var e = ed(), t = RA(), r = Gt(), n = cb(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, d = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!r(m) || t(m))
      return !1;
    var v = e(m) ? d : a;
    return v.test(n(m));
  }
  return _i = p, _i;
}
var Si, yp;
function AA() {
  if (yp) return Si;
  yp = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return Si = e, Si;
}
var Ci, bp;
function vr() {
  if (bp) return Ci;
  bp = 1;
  var e = MA(), t = AA();
  function r(n, o) {
    var a = t(n, o);
    return e(a) ? a : void 0;
  }
  return Ci = r, Ci;
}
var Pi, xp;
function ma() {
  if (xp) return Pi;
  xp = 1;
  var e = vr(), t = e(Object, "create");
  return Pi = t, Pi;
}
var Ei, wp;
function OA() {
  if (wp) return Ei;
  wp = 1;
  var e = ma();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ei = t, Ei;
}
var Ti, _p;
function jA() {
  if (_p) return Ti;
  _p = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Ti = e, Ti;
}
var Ni, Sp;
function DA() {
  if (Sp) return Ni;
  Sp = 1;
  var e = ma(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return Ni = o, Ni;
}
var Ri, Cp;
function IA() {
  if (Cp) return Ri;
  Cp = 1;
  var e = ma(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : r.call(a, o);
  }
  return Ri = n, Ri;
}
var Mi, Pp;
function kA() {
  if (Pp) return Mi;
  Pp = 1;
  var e = ma(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && o === void 0 ? t : o, this;
  }
  return Mi = r, Mi;
}
var Ai, Ep;
function LA() {
  if (Ep) return Ai;
  Ep = 1;
  var e = OA(), t = jA(), r = DA(), n = IA(), o = kA();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Ai = a, Ai;
}
var Oi, Tp;
function $A() {
  if (Tp) return Oi;
  Tp = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Oi = e, Oi;
}
var ji, Np;
function td() {
  if (Np) return ji;
  Np = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ji = e, ji;
}
var Di, Rp;
function ha() {
  if (Rp) return Di;
  Rp = 1;
  var e = td();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (e(r[o][0], n))
        return o;
    return -1;
  }
  return Di = t, Di;
}
var Ii, Mp;
function FA() {
  if (Mp) return Ii;
  Mp = 1;
  var e = ha(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return Ii = n, Ii;
}
var ki, Ap;
function qA() {
  if (Ap) return ki;
  Ap = 1;
  var e = ha();
  function t(r) {
    var n = this.__data__, o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return ki = t, ki;
}
var Li, Op;
function BA() {
  if (Op) return Li;
  Op = 1;
  var e = ha();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Li = t, Li;
}
var $i, jp;
function WA() {
  if (jp) return $i;
  jp = 1;
  var e = ha();
  function t(r, n) {
    var o = this.__data__, a = e(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return $i = t, $i;
}
var Fi, Dp;
function va() {
  if (Dp) return Fi;
  Dp = 1;
  var e = $A(), t = FA(), r = qA(), n = BA(), o = WA();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Fi = a, Fi;
}
var qi, Ip;
function rd() {
  if (Ip) return qi;
  Ip = 1;
  var e = vr(), t = Pt(), r = e(t, "Map");
  return qi = r, qi;
}
var Bi, kp;
function HA() {
  if (kp) return Bi;
  kp = 1;
  var e = LA(), t = va(), r = rd();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Bi = n, Bi;
}
var Wi, Lp;
function VA() {
  if (Lp) return Wi;
  Lp = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Wi = e, Wi;
}
var Hi, $p;
function ga() {
  if ($p) return Hi;
  $p = 1;
  var e = VA();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return Hi = t, Hi;
}
var Vi, Fp;
function zA() {
  if (Fp) return Vi;
  Fp = 1;
  var e = ga();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Vi = t, Vi;
}
var zi, qp;
function GA() {
  if (qp) return zi;
  qp = 1;
  var e = ga();
  function t(r) {
    return e(this, r).get(r);
  }
  return zi = t, zi;
}
var Gi, Bp;
function UA() {
  if (Bp) return Gi;
  Bp = 1;
  var e = ga();
  function t(r) {
    return e(this, r).has(r);
  }
  return Gi = t, Gi;
}
var Ui, Wp;
function KA() {
  if (Wp) return Ui;
  Wp = 1;
  var e = ga();
  function t(r, n) {
    var o = e(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return Ui = t, Ui;
}
var Ki, Hp;
function nd() {
  if (Hp) return Ki;
  Hp = 1;
  var e = HA(), t = zA(), r = GA(), n = UA(), o = KA();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Ki = a, Ki;
}
var Yi, Vp;
function YA() {
  if (Vp) return Yi;
  Vp = 1;
  var e = nd(), t = "Expected a function";
  function r(n, o) {
    if (typeof n != "function" || o != null && typeof o != "function")
      throw new TypeError(t);
    var a = function() {
      var i = arguments, s = o ? o.apply(this, i) : i[0], c = a.cache;
      if (c.has(s))
        return c.get(s);
      var l = n.apply(this, i);
      return a.cache = c.set(s, l) || c, l;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, Yi = r, Yi;
}
var Xi, zp;
function XA() {
  if (zp) return Xi;
  zp = 1;
  var e = YA(), t = 500;
  function r(n) {
    var o = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return Xi = r, Xi;
}
var Qi, Gp;
function QA() {
  if (Gp) return Qi;
  Gp = 1;
  var e = XA(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(r, "$1") : s || i);
    }), a;
  });
  return Qi = n, Qi;
}
var Zi, Up;
function lb() {
  if (Up) return Zi;
  Up = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Zi = e, Zi;
}
var Ji, Kp;
function ZA() {
  if (Kp) return Ji;
  Kp = 1;
  var e = Wn(), t = lb(), r = ct(), n = Hn(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
  function i(s) {
    if (typeof s == "string")
      return s;
    if (r(s))
      return t(s, i) + "";
    if (n(s))
      return a ? a.call(s) : "";
    var c = s + "";
    return c == "0" && 1 / s == -1 / 0 ? "-0" : c;
  }
  return Ji = i, Ji;
}
var es, Yp;
function ub() {
  if (Yp) return es;
  Yp = 1;
  var e = ZA();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return es = t, es;
}
var ts, Xp;
function db() {
  if (Xp) return ts;
  Xp = 1;
  var e = ct(), t = Ju(), r = QA(), n = ub();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return ts = o, ts;
}
var rs, Qp;
function ya() {
  if (Qp) return rs;
  Qp = 1;
  var e = Hn();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return rs = t, rs;
}
var ns, Zp;
function od() {
  if (Zp) return ns;
  Zp = 1;
  var e = db(), t = ya();
  function r(n, o) {
    o = e(o, n);
    for (var a = 0, i = o.length; n != null && a < i; )
      n = n[t(o[a++])];
    return a && a == i ? n : void 0;
  }
  return ns = r, ns;
}
var os, Jp;
function fb() {
  if (Jp) return os;
  Jp = 1;
  var e = od();
  function t(r, n, o) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? o : a;
  }
  return os = t, os;
}
fb();
var as, em;
function JA() {
  if (em) return as;
  em = 1;
  function e(t) {
    return t == null;
  }
  return as = e, as;
}
var eO = JA();
const tO = /* @__PURE__ */ _t(eO);
var is, tm;
function rO() {
  if (tm) return is;
  tm = 1;
  var e = mr(), t = ct(), r = hr(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return is = o, is;
}
var nO = rO();
const pb = /* @__PURE__ */ _t(nO);
var oO = ed();
const jo = /* @__PURE__ */ _t(oO);
var aO = Gt();
const mb = /* @__PURE__ */ _t(aO);
var lo = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function iO() {
  if (rm) return me;
  rm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case l:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case i:
                case c:
                case m:
                case p:
                case a:
                  return g;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return me.ContextConsumer = i, me.ContextProvider = a, me.Element = e, me.ForwardRef = c, me.Fragment = r, me.Lazy = m, me.Memo = p, me.Portal = t, me.Profiler = o, me.StrictMode = n, me.Suspense = l, me.SuspenseList = d, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(g) {
    return h(g) === i;
  }, me.isContextProvider = function(g) {
    return h(g) === a;
  }, me.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, me.isForwardRef = function(g) {
    return h(g) === c;
  }, me.isFragment = function(g) {
    return h(g) === r;
  }, me.isLazy = function(g) {
    return h(g) === m;
  }, me.isMemo = function(g) {
    return h(g) === p;
  }, me.isPortal = function(g) {
    return h(g) === t;
  }, me.isProfiler = function(g) {
    return h(g) === o;
  }, me.isStrictMode = function(g) {
    return h(g) === n;
  }, me.isSuspense = function(g) {
    return h(g) === l;
  }, me.isSuspenseList = function(g) {
    return h(g) === d;
  }, me.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === l || g === d || g === v || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === a || g.$$typeof === i || g.$$typeof === c || g.$$typeof === y || g.getModuleId !== void 0);
  }, me.typeOf = h, me;
}
var he = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm;
function sO() {
  return nm || (nm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, h = !1, g = !1, b = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function _(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === o || x || z === n || z === l || z === d || b || z === v || y || h || g || typeof z == "object" && z !== null && (z.$$typeof === m || z.$$typeof === p || z.$$typeof === a || z.$$typeof === i || z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === w || z.getModuleId !== void 0));
    }
    function C(z) {
      if (typeof z == "object" && z !== null) {
        var ge = z.$$typeof;
        switch (ge) {
          case e:
            var Se = z.type;
            switch (Se) {
              case r:
              case o:
              case n:
              case l:
              case d:
                return Se;
              default:
                var Ne = Se && Se.$$typeof;
                switch (Ne) {
                  case s:
                  case i:
                  case c:
                  case m:
                  case p:
                  case a:
                    return Ne;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var S = i, P = a, R = e, T = c, I = r, O = m, W = p, F = t, N = o, L = n, D = l, k = d, A = !1, $ = !1;
    function re(z) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(z) {
      return $ || ($ = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(z) {
      return C(z) === i;
    }
    function G(z) {
      return C(z) === a;
    }
    function Y(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function U(z) {
      return C(z) === c;
    }
    function oe(z) {
      return C(z) === r;
    }
    function B(z) {
      return C(z) === m;
    }
    function te(z) {
      return C(z) === p;
    }
    function se(z) {
      return C(z) === t;
    }
    function ae(z) {
      return C(z) === o;
    }
    function ne(z) {
      return C(z) === n;
    }
    function H(z) {
      return C(z) === l;
    }
    function le(z) {
      return C(z) === d;
    }
    he.ContextConsumer = S, he.ContextProvider = P, he.Element = R, he.ForwardRef = T, he.Fragment = I, he.Lazy = O, he.Memo = W, he.Portal = F, he.Profiler = N, he.StrictMode = L, he.Suspense = D, he.SuspenseList = k, he.isAsyncMode = re, he.isConcurrentMode = ee, he.isContextConsumer = j, he.isContextProvider = G, he.isElement = Y, he.isForwardRef = U, he.isFragment = oe, he.isLazy = B, he.isMemo = te, he.isPortal = se, he.isProfiler = ae, he.isStrictMode = ne, he.isSuspense = H, he.isSuspenseList = le, he.isValidElementType = _, he.typeOf = C;
  }()), he;
}
var om;
function cO() {
  return om || (om = 1, process.env.NODE_ENV === "production" ? lo.exports = iO() : lo.exports = sO()), lo.exports;
}
cO();
var ss, am;
function hb() {
  if (am) return ss;
  am = 1;
  var e = mr(), t = hr(), r = "[object Number]";
  function n(o) {
    return typeof o == "number" || t(o) && e(o) == r;
  }
  return ss = n, ss;
}
var cs, im;
function lO() {
  if (im) return cs;
  im = 1;
  var e = hb();
  function t(r) {
    return e(r) && r != +r;
  }
  return cs = t, cs;
}
var uO = lO();
const dO = /* @__PURE__ */ _t(uO);
var fO = hb();
const pO = /* @__PURE__ */ _t(fO);
var uo = function(t) {
  return pb(t) && t.indexOf("%") === t.length - 1;
}, rt = function(t) {
  return pO(t) && !dO(t);
}, Do = function(t) {
  return rt(t) || pb(t);
};
function jl(e) {
  "@babel/helpers - typeof";
  return jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jl(e);
}
var mO = ["viewBox", "children"], hO = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], sm = ["points", "pathLength"], ls = {
  svg: mO,
  polygon: sm,
  polyline: sm
}, vb = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], vO = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, gO = function(t, r, n) {
  if (!mb(t) || jl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    vb.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = vO(i, r, n));
  }), o;
}, yO = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, bO = function(t, r, n, o) {
  var a, i = (a = ls == null ? void 0 : ls[o]) !== null && a !== void 0 ? a : [];
  return !jo(t) && (o && i.includes(r) || hO.includes(r)) || vb.includes(r);
}, gb = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ f0(t) && (o = t.props), !mb(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    bO((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, xO = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Dl() {
  return Dl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dl.apply(this, arguments);
}
function wO(e, t) {
  if (e == null) return {};
  var r = _O(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _O(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function SO(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, l = wO(e, xO), d = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, p = At("recharts-surface", a);
  return /* @__PURE__ */ K.createElement("svg", Dl({}, gb(l, !0, "svg"), {
    className: p,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ K.createElement("title", null, s), /* @__PURE__ */ K.createElement("desc", null, c), t);
}
var CO = process.env.NODE_ENV !== "production", wo = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (CO && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, us, cm;
function PO() {
  if (cm) return us;
  cm = 1;
  function e(t, r, n) {
    var o = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + r];
    return i;
  }
  return us = e, us;
}
var ds, lm;
function EO() {
  if (lm) return ds;
  lm = 1;
  var e = PO();
  function t(r, n, o) {
    var a = r.length;
    return o = o === void 0 ? a : o, !n && o >= a ? r : e(r, n, o);
  }
  return ds = t, ds;
}
var fs, um;
function yb() {
  if (um) return fs;
  um = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function c(l) {
    return s.test(l);
  }
  return fs = c, fs;
}
var ps, dm;
function TO() {
  if (dm) return ps;
  dm = 1;
  function e(t) {
    return t.split("");
  }
  return ps = e, ps;
}
var ms, fm;
function NO() {
  if (fm) return ms;
  fm = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", c = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + c + ")", d = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", y = l + "?", h = "[" + a + "]?", g = "(?:" + v + "(?:" + [d, p, m].join("|") + ")" + h + y + ")*", b = h + y + g, x = "(?:" + [d + s + "?", s, p, m, i].join("|") + ")", w = RegExp(c + "(?=" + c + ")|" + x + b, "g");
  function _(C) {
    return C.match(w) || [];
  }
  return ms = _, ms;
}
var hs, pm;
function RO() {
  if (pm) return hs;
  pm = 1;
  var e = TO(), t = yb(), r = NO();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return hs = n, hs;
}
var vs, mm;
function MO() {
  if (mm) return vs;
  mm = 1;
  var e = EO(), t = yb(), r = RO(), n = ub();
  function o(a) {
    return function(i) {
      i = n(i);
      var s = t(i) ? r(i) : void 0, c = s ? s[0] : i.charAt(0), l = s ? e(s, 1).join("") : i.slice(1);
      return c[a]() + l;
    };
  }
  return vs = o, vs;
}
var gs, hm;
function AO() {
  if (hm) return gs;
  hm = 1;
  var e = MO(), t = e("toUpperCase");
  return gs = t, gs;
}
var OO = AO();
const bb = /* @__PURE__ */ _t(OO);
function fo(e) {
  return function() {
    return e;
  };
}
const xb = Math.cos, Io = Math.sin, lt = Math.sqrt, ko = Math.PI, ba = 2 * ko, Il = Math.PI, kl = 2 * Il, tr = 1e-6, jO = kl - tr;
function wb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function DO(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return wb;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class IO {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? wb : DO(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, o) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, n, o, a, i) {
    this._append`C${+t},${+r},${+n},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, r, n, o, a) {
    if (t = +t, r = +r, n = +n, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, c = n - t, l = o - r, d = i - t, p = s - r, m = d * d + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > tr) if (!(Math.abs(p * c - l * d) > tr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - i, y = o - s, h = c * c + l * l, g = v * v + y * y, b = Math.sqrt(h), x = Math.sqrt(m), w = a * Math.tan((Il - Math.acos((h + m - g) / (2 * b * x))) / 2), _ = w / x, C = w / b;
      Math.abs(_ - 1) > tr && this._append`L${t + _ * d},${r + _ * p}`, this._append`A${a},${a},0,0,${+(p * v > d * y)},${this._x1 = t + C * c},${this._y1 = r + C * l}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), l = t + s, d = r + c, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${d}` : (Math.abs(this._x1 - l) > tr || Math.abs(this._y1 - d) > tr) && this._append`L${l},${d}`, n && (m < 0 && (m = m % kl + kl), m > jO ? this._append`A${n},${n},0,1,${p},${t - s},${r - c}A${n},${n},0,1,${p},${this._x1 = l},${this._y1 = d}` : m > tr && this._append`A${n},${n},0,${+(m >= Il)},${p},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function kO(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new IO(t);
}
const ad = {
  draw(e, t) {
    const r = lt(t / ko);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, ba);
  }
}, LO = {
  draw(e, t) {
    const r = lt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, _b = lt(1 / 3), $O = _b * 2, FO = {
  draw(e, t) {
    const r = lt(t / $O), n = r * _b;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, qO = {
  draw(e, t) {
    const r = lt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, BO = 0.8908130915292852, Sb = Io(ko / 10) / Io(7 * ko / 10), WO = Io(ba / 10) * Sb, HO = -xb(ba / 10) * Sb, VO = {
  draw(e, t) {
    const r = lt(t * BO), n = WO * r, o = HO * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = ba * a / 5, s = xb(i), c = Io(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, ys = lt(3), zO = {
  draw(e, t) {
    const r = -lt(t / (ys * 3));
    e.moveTo(0, r * 2), e.lineTo(-ys * r, -r), e.lineTo(ys * r, -r), e.closePath();
  }
}, Ve = -0.5, ze = lt(3) / 2, Ll = 1 / lt(12), GO = (Ll / 2 + 1) * 3, UO = {
  draw(e, t) {
    const r = lt(t / GO), n = r / 2, o = r * Ll, a = n, i = r * Ll + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(Ve * n - ze * o, ze * n + Ve * o), e.lineTo(Ve * a - ze * i, ze * a + Ve * i), e.lineTo(Ve * s - ze * c, ze * s + Ve * c), e.lineTo(Ve * n + ze * o, Ve * o - ze * n), e.lineTo(Ve * a + ze * i, Ve * i - ze * a), e.lineTo(Ve * s + ze * c, Ve * c - ze * s), e.closePath();
  }
};
function KO(e, t) {
  let r = null, n = kO(o);
  e = typeof e == "function" ? e : fo(e || ad), t = typeof t == "function" ? t : fo(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : fo(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : fo(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
}
var YO = ["type", "size", "sizeType"];
function $l() {
  return $l = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $l.apply(this, arguments);
}
function vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vm(Object(r), !0).forEach(function(n) {
      XO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XO(e, t, r) {
  return t = QO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QO(e) {
  var t = ZO(e, "string");
  return bn(t) == "symbol" ? t : t + "";
}
function ZO(e, t) {
  if (bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JO(e, t) {
  if (e == null) return {};
  var r = ej(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ej(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Cb = {
  symbolCircle: ad,
  symbolCross: LO,
  symbolDiamond: FO,
  symbolSquare: qO,
  symbolStar: VO,
  symbolTriangle: zO,
  symbolWye: UO
}, tj = Math.PI / 180, rj = function(t) {
  var r = "symbol".concat(bb(t));
  return Cb[r] || ad;
}, nj = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * tj;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, oj = function(t, r) {
  Cb["symbol".concat(bb(t))] = r;
}, Pb = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = JO(t, YO), l = gm(gm({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var g = rj(n), b = KO().type(g).size(nj(a, s, n));
    return b();
  }, p = l.className, m = l.cx, v = l.cy, y = gb(l, !0);
  return m === +m && v === +v && a === +a ? /* @__PURE__ */ K.createElement("path", $l({}, y, {
    className: At("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(v, ")"),
    d: d()
  })) : null;
};
Pb.registerSymbol = oj;
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function Fl() {
  return Fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fl.apply(this, arguments);
}
function ym(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function aj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ym(Object(r), !0).forEach(function(n) {
      xn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ij(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Tb(n.key), n);
  }
}
function cj(e, t, r) {
  return t && sj(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lj(e, t, r) {
  return t = Lo(t), uj(e, Eb() ? Reflect.construct(t, r || [], Lo(e).constructor) : t.apply(e, r));
}
function uj(e, t) {
  if (t && (Or(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dj(e);
}
function dj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Eb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Eb = function() {
    return !!e;
  })();
}
function Lo(e) {
  return Lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lo(e);
}
function fj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ql(e, t);
}
function ql(e, t) {
  return ql = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ql(e, t);
}
function xn(e, t, r) {
  return t = Tb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tb(e) {
  var t = pj(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function pj(e, t) {
  if (Or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var et = 32, id = /* @__PURE__ */ function(e) {
  function t() {
    return ij(this, t), lj(this, t, arguments);
  }
  return fj(t, e), cj(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var o = this.props.inactiveColor, a = et / 2, i = et / 6, s = et / 3, c = n.inactive ? o : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ K.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: et,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ K.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(et, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ K.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(et / 8, "h").concat(et, "v").concat(et * 3 / 4, "h").concat(-32, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ K.isValidElement(n.legendIcon)) {
          var l = aj({}, n);
          return delete l.legendIcon, /* @__PURE__ */ K.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ K.createElement(Pb, {
          fill: c,
          cx: a,
          cy: a,
          size: et,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, c = o.formatter, l = o.inactiveColor, d = {
        x: 0,
        y: 0,
        width: et,
        height: et
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(v, y) {
        var h = v.formatter || c, g = At(xn(xn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", v.inactive));
        if (v.type === "none")
          return null;
        var b = jo(v.value) ? null : v.value;
        wo(
          !jo(v.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = v.inactive ? l : v.color;
        return /* @__PURE__ */ K.createElement("li", Fl({
          className: g,
          style: p,
          key: "legend-item-".concat(y)
        }, gO(n.props, v, y)), /* @__PURE__ */ K.createElement(SO, {
          width: i,
          height: i,
          viewBox: d,
          style: m
        }, n.renderIcon(v)), /* @__PURE__ */ K.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, h ? h(b, v, y) : b));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, o = n.payload, a = n.layout, i = n.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ K.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(ra);
xn(id, "displayName", "Legend");
xn(id, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var bs, bm;
function mj() {
  if (bm) return bs;
  bm = 1;
  var e = va();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return bs = t, bs;
}
var xs, xm;
function hj() {
  if (xm) return xs;
  xm = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return xs = e, xs;
}
var ws, wm;
function vj() {
  if (wm) return ws;
  wm = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ws = e, ws;
}
var _s, _m;
function gj() {
  if (_m) return _s;
  _m = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return _s = e, _s;
}
var Ss, Sm;
function yj() {
  if (Sm) return Ss;
  Sm = 1;
  var e = va(), t = rd(), r = nd(), n = 200;
  function o(a, i) {
    var s = this.__data__;
    if (s instanceof e) {
      var c = s.__data__;
      if (!t || c.length < n - 1)
        return c.push([a, i]), this.size = ++s.size, this;
      s = this.__data__ = new r(c);
    }
    return s.set(a, i), this.size = s.size, this;
  }
  return Ss = o, Ss;
}
var Cs, Cm;
function Nb() {
  if (Cm) return Cs;
  Cm = 1;
  var e = va(), t = mj(), r = hj(), n = vj(), o = gj(), a = yj();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = r, i.prototype.get = n, i.prototype.has = o, i.prototype.set = a, Cs = i, Cs;
}
var Ps, Pm;
function bj() {
  if (Pm) return Ps;
  Pm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ps = t, Ps;
}
var Es, Em;
function xj() {
  if (Em) return Es;
  Em = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Es = e, Es;
}
var Ts, Tm;
function Rb() {
  if (Tm) return Ts;
  Tm = 1;
  var e = nd(), t = bj(), r = xj();
  function n(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Ts = n, Ts;
}
var Ns, Nm;
function wj() {
  if (Nm) return Ns;
  Nm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Ns = e, Ns;
}
var Rs, Rm;
function Mb() {
  if (Rm) return Rs;
  Rm = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Rs = e, Rs;
}
var Ms, Mm;
function Ab() {
  if (Mm) return Ms;
  Mm = 1;
  var e = Rb(), t = wj(), r = Mb(), n = 1, o = 2;
  function a(i, s, c, l, d, p) {
    var m = c & n, v = i.length, y = s.length;
    if (v != y && !(m && y > v))
      return !1;
    var h = p.get(i), g = p.get(s);
    if (h && g)
      return h == s && g == i;
    var b = -1, x = !0, w = c & o ? new e() : void 0;
    for (p.set(i, s), p.set(s, i); ++b < v; ) {
      var _ = i[b], C = s[b];
      if (l)
        var S = m ? l(C, _, b, s, i, p) : l(_, C, b, i, s, p);
      if (S !== void 0) {
        if (S)
          continue;
        x = !1;
        break;
      }
      if (w) {
        if (!t(s, function(P, R) {
          if (!r(w, R) && (_ === P || d(_, P, c, l, p)))
            return w.push(R);
        })) {
          x = !1;
          break;
        }
      } else if (!(_ === C || d(_, C, c, l, p))) {
        x = !1;
        break;
      }
    }
    return p.delete(i), p.delete(s), x;
  }
  return Ms = a, Ms;
}
var As, Am;
function _j() {
  if (Am) return As;
  Am = 1;
  var e = Pt(), t = e.Uint8Array;
  return As = t, As;
}
var Os, Om;
function Sj() {
  if (Om) return Os;
  Om = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return Os = e, Os;
}
var js, jm;
function sd() {
  if (jm) return js;
  jm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return js = e, js;
}
var Ds, Dm;
function Cj() {
  if (Dm) return Ds;
  Dm = 1;
  var e = Wn(), t = _j(), r = td(), n = Ab(), o = Sj(), a = sd(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", d = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", y = "[object Set]", h = "[object String]", g = "[object Symbol]", b = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, _ = w ? w.valueOf : void 0;
  function C(S, P, R, T, I, O, W) {
    switch (R) {
      case x:
        if (S.byteLength != P.byteLength || S.byteOffset != P.byteOffset)
          return !1;
        S = S.buffer, P = P.buffer;
      case b:
        return !(S.byteLength != P.byteLength || !O(new t(S), new t(P)));
      case c:
      case l:
      case m:
        return r(+S, +P);
      case d:
        return S.name == P.name && S.message == P.message;
      case v:
      case h:
        return S == P + "";
      case p:
        var F = o;
      case y:
        var N = T & i;
        if (F || (F = a), S.size != P.size && !N)
          return !1;
        var L = W.get(S);
        if (L)
          return L == P;
        T |= s, W.set(S, P);
        var D = n(F(S), F(P), T, I, O, W);
        return W.delete(S), D;
      case g:
        if (_)
          return _.call(S) == _.call(P);
    }
    return !1;
  }
  return Ds = C, Ds;
}
var Is, Im;
function Ob() {
  if (Im) return Is;
  Im = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return Is = e, Is;
}
var ks, km;
function Pj() {
  if (km) return ks;
  km = 1;
  var e = Ob(), t = ct();
  function r(n, o, a) {
    var i = o(n);
    return t(n) ? i : e(i, a(n));
  }
  return ks = r, ks;
}
var Ls, Lm;
function Ej() {
  if (Lm) return Ls;
  Lm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++n < o; ) {
      var s = t[n];
      r(s, n, t) && (i[a++] = s);
    }
    return i;
  }
  return Ls = e, Ls;
}
var $s, $m;
function Tj() {
  if ($m) return $s;
  $m = 1;
  function e() {
    return [];
  }
  return $s = e, $s;
}
var Fs, Fm;
function Nj() {
  if (Fm) return Fs;
  Fm = 1;
  var e = Ej(), t = Tj(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return n.call(i, s);
    }));
  } : t;
  return Fs = a, Fs;
}
var qs, qm;
function Rj() {
  if (qm) return qs;
  qm = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return qs = e, qs;
}
var Bs, Bm;
function Mj() {
  if (Bm) return Bs;
  Bm = 1;
  var e = mr(), t = hr(), r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return Bs = n, Bs;
}
var Ws, Wm;
function cd() {
  if (Wm) return Ws;
  Wm = 1;
  var e = Mj(), t = hr(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !o.call(i, "callee");
  };
  return Ws = a, Ws;
}
var an = { exports: {} }, Hs, Hm;
function Aj() {
  if (Hm) return Hs;
  Hm = 1;
  function e() {
    return !1;
  }
  return Hs = e, Hs;
}
an.exports;
var Vm;
function jb() {
  return Vm || (Vm = 1, function(e, t) {
    var r = Pt(), n = Aj(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
    e.exports = l;
  }(an, an.exports)), an.exports;
}
var Vs, zm;
function ld() {
  if (zm) return Vs;
  zm = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return Vs = r, Vs;
}
var zs, Gm;
function ud() {
  if (Gm) return zs;
  Gm = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return zs = t, zs;
}
var Gs, Um;
function Oj() {
  if (Um) return Gs;
  Um = 1;
  var e = mr(), t = ud(), r = hr(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", d = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", y = "[object String]", h = "[object WeakMap]", g = "[object ArrayBuffer]", b = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", _ = "[object Int8Array]", C = "[object Int16Array]", S = "[object Int32Array]", P = "[object Uint8Array]", R = "[object Uint8ClampedArray]", T = "[object Uint16Array]", I = "[object Uint32Array]", O = {};
  O[x] = O[w] = O[_] = O[C] = O[S] = O[P] = O[R] = O[T] = O[I] = !0, O[n] = O[o] = O[g] = O[a] = O[b] = O[i] = O[s] = O[c] = O[l] = O[d] = O[p] = O[m] = O[v] = O[y] = O[h] = !1;
  function W(F) {
    return r(F) && t(F.length) && !!O[e(F)];
  }
  return Gs = W, Gs;
}
var Us, Km;
function Db() {
  if (Km) return Us;
  Km = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Us = e, Us;
}
var sn = { exports: {} };
sn.exports;
var Ym;
function jj() {
  return Ym || (Ym = 1, function(e, t) {
    var r = sb(), n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(sn, sn.exports)), sn.exports;
}
var Ks, Xm;
function Ib() {
  if (Xm) return Ks;
  Xm = 1;
  var e = Oj(), t = Db(), r = jj(), n = r && r.isTypedArray, o = n ? t(n) : e;
  return Ks = o, Ks;
}
var Ys, Qm;
function Dj() {
  if (Qm) return Ys;
  Qm = 1;
  var e = Rj(), t = cd(), r = ct(), n = jb(), o = ld(), a = Ib(), i = Object.prototype, s = i.hasOwnProperty;
  function c(l, d) {
    var p = r(l), m = !p && t(l), v = !p && !m && n(l), y = !p && !m && !v && a(l), h = p || m || v || y, g = h ? e(l.length, String) : [], b = g.length;
    for (var x in l)
      (d || s.call(l, x)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
      o(x, b))) && g.push(x);
    return g;
  }
  return Ys = c, Ys;
}
var Xs, Zm;
function Ij() {
  if (Zm) return Xs;
  Zm = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || e;
    return r === o;
  }
  return Xs = t, Xs;
}
var Qs, Jm;
function kj() {
  if (Jm) return Qs;
  Jm = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Qs = e, Qs;
}
var Zs, eh;
function Lj() {
  if (eh) return Zs;
  eh = 1;
  var e = kj(), t = e(Object.keys, Object);
  return Zs = t, Zs;
}
var Js, th;
function $j() {
  if (th) return Js;
  th = 1;
  var e = Ij(), t = Lj(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return Js = o, Js;
}
var ec, rh;
function xa() {
  if (rh) return ec;
  rh = 1;
  var e = ed(), t = ud();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return ec = r, ec;
}
var tc, nh;
function dd() {
  if (nh) return tc;
  nh = 1;
  var e = Dj(), t = $j(), r = xa();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return tc = n, tc;
}
var rc, oh;
function Fj() {
  if (oh) return rc;
  oh = 1;
  var e = Pj(), t = Nj(), r = dd();
  function n(o) {
    return e(o, r, t);
  }
  return rc = n, rc;
}
var nc, ah;
function qj() {
  if (ah) return nc;
  ah = 1;
  var e = Fj(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function o(a, i, s, c, l, d) {
    var p = s & t, m = e(a), v = m.length, y = e(i), h = y.length;
    if (v != h && !p)
      return !1;
    for (var g = v; g--; ) {
      var b = m[g];
      if (!(p ? b in i : n.call(i, b)))
        return !1;
    }
    var x = d.get(a), w = d.get(i);
    if (x && w)
      return x == i && w == a;
    var _ = !0;
    d.set(a, i), d.set(i, a);
    for (var C = p; ++g < v; ) {
      b = m[g];
      var S = a[b], P = i[b];
      if (c)
        var R = p ? c(P, S, b, i, a, d) : c(S, P, b, a, i, d);
      if (!(R === void 0 ? S === P || l(S, P, s, c, d) : R)) {
        _ = !1;
        break;
      }
      C || (C = b == "constructor");
    }
    if (_ && !C) {
      var T = a.constructor, I = i.constructor;
      T != I && "constructor" in a && "constructor" in i && !(typeof T == "function" && T instanceof T && typeof I == "function" && I instanceof I) && (_ = !1);
    }
    return d.delete(a), d.delete(i), _;
  }
  return nc = o, nc;
}
var oc, ih;
function Bj() {
  if (ih) return oc;
  ih = 1;
  var e = vr(), t = Pt(), r = e(t, "DataView");
  return oc = r, oc;
}
var ac, sh;
function Wj() {
  if (sh) return ac;
  sh = 1;
  var e = vr(), t = Pt(), r = e(t, "Promise");
  return ac = r, ac;
}
var ic, ch;
function kb() {
  if (ch) return ic;
  ch = 1;
  var e = vr(), t = Pt(), r = e(t, "Set");
  return ic = r, ic;
}
var sc, lh;
function Hj() {
  if (lh) return sc;
  lh = 1;
  var e = vr(), t = Pt(), r = e(t, "WeakMap");
  return sc = r, sc;
}
var cc, uh;
function Vj() {
  if (uh) return cc;
  uh = 1;
  var e = Bj(), t = rd(), r = Wj(), n = kb(), o = Hj(), a = mr(), i = cb(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", d = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = i(e), y = i(t), h = i(r), g = i(n), b = i(o), x = a;
  return (e && x(new e(new ArrayBuffer(1))) != m || t && x(new t()) != s || r && x(r.resolve()) != l || n && x(new n()) != d || o && x(new o()) != p) && (x = function(w) {
    var _ = a(w), C = _ == c ? w.constructor : void 0, S = C ? i(C) : "";
    if (S)
      switch (S) {
        case v:
          return m;
        case y:
          return s;
        case h:
          return l;
        case g:
          return d;
        case b:
          return p;
      }
    return _;
  }), cc = x, cc;
}
var lc, dh;
function zj() {
  if (dh) return lc;
  dh = 1;
  var e = Nb(), t = Ab(), r = Cj(), n = qj(), o = Vj(), a = ct(), i = jb(), s = Ib(), c = 1, l = "[object Arguments]", d = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function y(h, g, b, x, w, _) {
    var C = a(h), S = a(g), P = C ? d : o(h), R = S ? d : o(g);
    P = P == l ? p : P, R = R == l ? p : R;
    var T = P == p, I = R == p, O = P == R;
    if (O && i(h)) {
      if (!i(g))
        return !1;
      C = !0, T = !1;
    }
    if (O && !T)
      return _ || (_ = new e()), C || s(h) ? t(h, g, b, x, w, _) : r(h, g, P, b, x, w, _);
    if (!(b & c)) {
      var W = T && v.call(h, "__wrapped__"), F = I && v.call(g, "__wrapped__");
      if (W || F) {
        var N = W ? h.value() : h, L = F ? g.value() : g;
        return _ || (_ = new e()), w(N, L, b, x, _);
      }
    }
    return O ? (_ || (_ = new e()), n(h, g, b, x, w, _)) : !1;
  }
  return lc = y, lc;
}
var uc, fh;
function Lb() {
  if (fh) return uc;
  fh = 1;
  var e = zj(), t = hr();
  function r(n, o, a, i, s) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : e(n, o, a, i, r, s);
  }
  return uc = r, uc;
}
var dc, ph;
function Gj() {
  if (ph) return dc;
  ph = 1;
  var e = Nb(), t = Lb(), r = 1, n = 2;
  function o(a, i, s, c) {
    var l = s.length, d = l, p = !c;
    if (a == null)
      return !d;
    for (a = Object(a); l--; ) {
      var m = s[l];
      if (p && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++l < d; ) {
      m = s[l];
      var v = m[0], y = a[v], h = m[1];
      if (p && m[2]) {
        if (y === void 0 && !(v in a))
          return !1;
      } else {
        var g = new e();
        if (c)
          var b = c(y, h, v, a, i, g);
        if (!(b === void 0 ? t(h, y, r | n, c, g) : b))
          return !1;
      }
    }
    return !0;
  }
  return dc = o, dc;
}
var fc, mh;
function $b() {
  if (mh) return fc;
  mh = 1;
  var e = Gt();
  function t(r) {
    return r === r && !e(r);
  }
  return fc = t, fc;
}
var pc, hh;
function Uj() {
  if (hh) return pc;
  hh = 1;
  var e = $b(), t = dd();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var i = o[a], s = n[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return pc = r, pc;
}
var mc, vh;
function Fb() {
  if (vh) return mc;
  vh = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return mc = e, mc;
}
var hc, gh;
function Kj() {
  if (gh) return hc;
  gh = 1;
  var e = Gj(), t = Uj(), r = Fb();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return hc = n, hc;
}
var vc, yh;
function Yj() {
  if (yh) return vc;
  yh = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return vc = e, vc;
}
var gc, bh;
function Xj() {
  if (bh) return gc;
  bh = 1;
  var e = db(), t = cd(), r = ct(), n = ld(), o = ud(), a = ya();
  function i(s, c, l) {
    c = e(c, s);
    for (var d = -1, p = c.length, m = !1; ++d < p; ) {
      var v = a(c[d]);
      if (!(m = s != null && l(s, v)))
        break;
      s = s[v];
    }
    return m || ++d != p ? m : (p = s == null ? 0 : s.length, !!p && o(p) && n(v, p) && (r(s) || t(s)));
  }
  return gc = i, gc;
}
var yc, xh;
function Qj() {
  if (xh) return yc;
  xh = 1;
  var e = Yj(), t = Xj();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return yc = r, yc;
}
var bc, wh;
function Zj() {
  if (wh) return bc;
  wh = 1;
  var e = Lb(), t = fb(), r = Qj(), n = Ju(), o = $b(), a = Fb(), i = ya(), s = 1, c = 2;
  function l(d, p) {
    return n(d) && o(p) ? a(i(d), p) : function(m) {
      var v = t(m, d);
      return v === void 0 && v === p ? r(m, d) : e(p, v, s | c);
    };
  }
  return bc = l, bc;
}
var xc, _h;
function wa() {
  if (_h) return xc;
  _h = 1;
  function e(t) {
    return t;
  }
  return xc = e, xc;
}
var wc, Sh;
function Jj() {
  if (Sh) return wc;
  Sh = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return wc = e, wc;
}
var _c, Ch;
function eD() {
  if (Ch) return _c;
  Ch = 1;
  var e = od();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return _c = t, _c;
}
var Sc, Ph;
function tD() {
  if (Ph) return Sc;
  Ph = 1;
  var e = Jj(), t = eD(), r = Ju(), n = ya();
  function o(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return Sc = o, Sc;
}
var Cc, Eh;
function qb() {
  if (Eh) return Cc;
  Eh = 1;
  var e = Kj(), t = Zj(), r = wa(), n = ct(), o = tD();
  function a(i) {
    return typeof i == "function" ? i : i == null ? r : typeof i == "object" ? n(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return Cc = a, Cc;
}
var Pc, Th;
function rD() {
  if (Th) return Pc;
  Th = 1;
  function e(t, r, n, o) {
    for (var a = t.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (r(t[i], i, t))
        return i;
    return -1;
  }
  return Pc = e, Pc;
}
var Ec, Nh;
function nD() {
  if (Nh) return Ec;
  Nh = 1;
  function e(t) {
    return t !== t;
  }
  return Ec = e, Ec;
}
var Tc, Rh;
function oD() {
  if (Rh) return Tc;
  Rh = 1;
  function e(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return Tc = e, Tc;
}
var Nc, Mh;
function aD() {
  if (Mh) return Nc;
  Mh = 1;
  var e = rD(), t = nD(), r = oD();
  function n(o, a, i) {
    return a === a ? r(o, a, i) : e(o, t, i);
  }
  return Nc = n, Nc;
}
var Rc, Ah;
function iD() {
  if (Ah) return Rc;
  Ah = 1;
  var e = aD();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return Rc = t, Rc;
}
var Mc, Oh;
function sD() {
  if (Oh) return Mc;
  Oh = 1;
  function e(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return Mc = e, Mc;
}
var Ac, jh;
function cD() {
  if (jh) return Ac;
  jh = 1;
  function e() {
  }
  return Ac = e, Ac;
}
var Oc, Dh;
function lD() {
  if (Dh) return Oc;
  Dh = 1;
  var e = kb(), t = cD(), r = sd(), n = 1 / 0, o = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return Oc = o, Oc;
}
var jc, Ih;
function uD() {
  if (Ih) return jc;
  Ih = 1;
  var e = Rb(), t = iD(), r = sD(), n = Mb(), o = lD(), a = sd(), i = 200;
  function s(c, l, d) {
    var p = -1, m = t, v = c.length, y = !0, h = [], g = h;
    if (d)
      y = !1, m = r;
    else if (v >= i) {
      var b = l ? null : o(c);
      if (b)
        return a(b);
      y = !1, m = n, g = new e();
    } else
      g = l ? [] : h;
    e:
      for (; ++p < v; ) {
        var x = c[p], w = l ? l(x) : x;
        if (x = d || x !== 0 ? x : 0, y && w === w) {
          for (var _ = g.length; _--; )
            if (g[_] === w)
              continue e;
          l && g.push(w), h.push(x);
        } else m(g, w, d) || (g !== h && g.push(w), h.push(x));
      }
    return h;
  }
  return jc = s, jc;
}
var Dc, kh;
function dD() {
  if (kh) return Dc;
  kh = 1;
  var e = qb(), t = uD();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return Dc = r, Dc;
}
var fD = dD();
const Lh = /* @__PURE__ */ _t(fD);
function Bb(e, t, r) {
  return t === !0 ? Lh(e, r) : jo(t) ? Lh(e, t) : e;
}
function jr(e) {
  "@babel/helpers - typeof";
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(e);
}
var pD = ["ref"];
function $h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $h(Object(r), !0).forEach(function(n) {
      _a(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Hb(n.key), n);
  }
}
function hD(e, t, r) {
  return t && Fh(e.prototype, t), r && Fh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vD(e, t, r) {
  return t = $o(t), gD(e, Wb() ? Reflect.construct(t, r || [], $o(e).constructor) : t.apply(e, r));
}
function gD(e, t) {
  if (t && (jr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yD(e);
}
function yD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wb = function() {
    return !!e;
  })();
}
function $o(e) {
  return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $o(e);
}
function bD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bl(e, t);
}
function Bl(e, t) {
  return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Bl(e, t);
}
function _a(e, t, r) {
  return t = Hb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hb(e) {
  var t = xD(e, "string");
  return jr(t) == "symbol" ? t : t + "";
}
function xD(e, t) {
  if (jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function wD(e, t) {
  if (e == null) return {};
  var r = _D(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _D(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function SD(e) {
  return e.value;
}
function CD(e, t) {
  if (/* @__PURE__ */ K.isValidElement(e))
    return /* @__PURE__ */ K.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ K.createElement(e, t);
  t.ref;
  var r = wD(t, pD);
  return /* @__PURE__ */ K.createElement(id, r);
}
var qh = 1, fd = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    mD(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = vD(this, t, [].concat(o)), _a(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return bD(t, e), hD(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > qh || Math.abs(o.height - this.lastBoundingBox.height) > qh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Mt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, c = o.margin, l = o.chartWidth, d = o.chartHeight, p, m;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (i === "center" && a === "vertical") {
          var v = this.getBBoxSnapshot();
          p = {
            left: ((l || 0) - v.width) / 2
          };
        } else
          p = i === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var y = this.getBBoxSnapshot();
          m = {
            top: ((d || 0) - y.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Mt(Mt({}, p), m);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.content, i = o.width, s = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, d = o.payload, p = Mt(Mt({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ K.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(v) {
          n.wrapperNode = v;
        }
      }, CD(a, Mt(Mt({}, this.props), {}, {
        payload: Bb(d, l, SD)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var a = Mt(Mt({}, this.defaultProps), n.props), i = a.layout;
      return i === "vertical" && rt(n.props.height) ? {
        height: n.props.height
      } : i === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
}(ra);
_a(fd, "displayName", "Legend");
_a(fd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Ic, Bh;
function PD() {
  if (Bh) return Ic;
  Bh = 1;
  var e = Wn(), t = cd(), r = ct(), n = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Ic = o, Ic;
}
var kc, Wh;
function ED() {
  if (Wh) return kc;
  Wh = 1;
  var e = Ob(), t = PD();
  function r(n, o, a, i, s) {
    var c = -1, l = n.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var d = n[c];
      o > 0 && a(d) ? o > 1 ? r(d, o - 1, a, i, s) : e(s, d) : i || (s[s.length] = d);
    }
    return s;
  }
  return kc = r, kc;
}
var Lc, Hh;
function TD() {
  if (Hh) return Lc;
  Hh = 1;
  function e(t) {
    return function(r, n, o) {
      for (var a = -1, i = Object(r), s = o(r), c = s.length; c--; ) {
        var l = s[t ? c : ++a];
        if (n(i[l], l, i) === !1)
          break;
      }
      return r;
    };
  }
  return Lc = e, Lc;
}
var $c, Vh;
function ND() {
  if (Vh) return $c;
  Vh = 1;
  var e = TD(), t = e();
  return $c = t, $c;
}
var Fc, zh;
function RD() {
  if (zh) return Fc;
  zh = 1;
  var e = ND(), t = dd();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return Fc = r, Fc;
}
var qc, Gh;
function MD() {
  if (Gh) return qc;
  Gh = 1;
  var e = xa();
  function t(r, n) {
    return function(o, a) {
      if (o == null)
        return o;
      if (!e(o))
        return r(o, a);
      for (var i = o.length, s = n ? i : -1, c = Object(o); (n ? s-- : ++s < i) && a(c[s], s, c) !== !1; )
        ;
      return o;
    };
  }
  return qc = t, qc;
}
var Bc, Uh;
function AD() {
  if (Uh) return Bc;
  Uh = 1;
  var e = RD(), t = MD(), r = t(e);
  return Bc = r, Bc;
}
var Wc, Kh;
function OD() {
  if (Kh) return Wc;
  Kh = 1;
  var e = AD(), t = xa();
  function r(n, o) {
    var a = -1, i = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return Wc = r, Wc;
}
var Hc, Yh;
function jD() {
  if (Yh) return Hc;
  Yh = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Hc = e, Hc;
}
var Vc, Xh;
function DD() {
  if (Xh) return Vc;
  Xh = 1;
  var e = Hn();
  function t(r, n) {
    if (r !== n) {
      var o = r !== void 0, a = r === null, i = r === r, s = e(r), c = n !== void 0, l = n === null, d = n === n, p = e(n);
      if (!l && !p && !s && r > n || s && c && d && !l && !p || a && c && d || !o && d || !i)
        return 1;
      if (!a && !s && !p && r < n || p && o && i && !a && !s || l && o && i || !c && i || !d)
        return -1;
    }
    return 0;
  }
  return Vc = t, Vc;
}
var zc, Qh;
function ID() {
  if (Qh) return zc;
  Qh = 1;
  var e = DD();
  function t(r, n, o) {
    for (var a = -1, i = r.criteria, s = n.criteria, c = i.length, l = o.length; ++a < c; ) {
      var d = e(i[a], s[a]);
      if (d) {
        if (a >= l)
          return d;
        var p = o[a];
        return d * (p == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return zc = t, zc;
}
var Gc, Zh;
function kD() {
  if (Zh) return Gc;
  Zh = 1;
  var e = lb(), t = od(), r = qb(), n = OD(), o = jD(), a = Db(), i = ID(), s = wa(), c = ct();
  function l(d, p, m) {
    p.length ? p = e(p, function(h) {
      return c(h) ? function(g) {
        return t(g, h.length === 1 ? h[0] : h);
      } : h;
    }) : p = [s];
    var v = -1;
    p = e(p, a(r));
    var y = n(d, function(h, g, b) {
      var x = e(p, function(w) {
        return w(h);
      });
      return { criteria: x, index: ++v, value: h };
    });
    return o(y, function(h, g) {
      return i(h, g, m);
    });
  }
  return Gc = l, Gc;
}
var Uc, Jh;
function LD() {
  if (Jh) return Uc;
  Jh = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return Uc = e, Uc;
}
var Kc, ev;
function $D() {
  if (ev) return Kc;
  ev = 1;
  var e = LD(), t = Math.max;
  function r(n, o, a) {
    return o = t(o === void 0 ? n.length - 1 : o, 0), function() {
      for (var i = arguments, s = -1, c = t(i.length - o, 0), l = Array(c); ++s < c; )
        l[s] = i[o + s];
      s = -1;
      for (var d = Array(o + 1); ++s < o; )
        d[s] = i[s];
      return d[o] = a(l), e(n, this, d);
    };
  }
  return Kc = r, Kc;
}
var Yc, tv;
function FD() {
  if (tv) return Yc;
  tv = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Yc = e, Yc;
}
var Xc, rv;
function qD() {
  if (rv) return Xc;
  rv = 1;
  var e = vr(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Xc = t, Xc;
}
var Qc, nv;
function BD() {
  if (nv) return Qc;
  nv = 1;
  var e = FD(), t = qD(), r = wa(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Qc = n, Qc;
}
var Zc, ov;
function WD() {
  if (ov) return Zc;
  ov = 1;
  var e = 800, t = 16, r = Date.now;
  function n(o) {
    var a = 0, i = 0;
    return function() {
      var s = r(), c = t - (s - i);
      if (i = s, c > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return o.apply(void 0, arguments);
    };
  }
  return Zc = n, Zc;
}
var Jc, av;
function HD() {
  if (av) return Jc;
  av = 1;
  var e = BD(), t = WD(), r = t(e);
  return Jc = r, Jc;
}
var el, iv;
function VD() {
  if (iv) return el;
  iv = 1;
  var e = wa(), t = $D(), r = HD();
  function n(o, a) {
    return r(t(o, a, e), o + "");
  }
  return el = n, el;
}
var tl, sv;
function zD() {
  if (sv) return tl;
  sv = 1;
  var e = td(), t = xa(), r = ld(), n = Gt();
  function o(a, i, s) {
    if (!n(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && r(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return tl = o, tl;
}
var rl, cv;
function GD() {
  if (cv) return rl;
  cv = 1;
  var e = ED(), t = kD(), r = VD(), n = zD(), o = r(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && n(a, i[0], i[1]) ? i = [] : s > 2 && n(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return rl = o, rl;
}
var UD = GD();
const KD = /* @__PURE__ */ _t(UD);
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e);
}
function Wl() {
  return Wl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wl.apply(this, arguments);
}
function YD(e, t) {
  return JD(e) || ZD(e, t) || QD(e, t) || XD();
}
function XD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QD(e, t) {
  if (e) {
    if (typeof e == "string") return lv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lv(e, t);
  }
}
function lv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZD(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (d) {
      l = !0, o = d;
    } finally {
      try {
        if (!c && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function JD(e) {
  if (Array.isArray(e)) return e;
}
function uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uv(Object(r), !0).forEach(function(n) {
      eI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eI(e, t, r) {
  return t = tI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tI(e) {
  var t = rI(e, "string");
  return wn(t) == "symbol" ? t : t + "";
}
function rI(e, t) {
  if (wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nI(e) {
  return Array.isArray(e) && Do(e[0]) && Do(e[1]) ? e.join(" ~ ") : e;
}
var oI = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, d = t.payload, p = t.formatter, m = t.itemSorter, v = t.wrapperClassName, y = t.labelClassName, h = t.label, g = t.labelFormatter, b = t.accessibilityLayer, x = b === void 0 ? !1 : b, w = function() {
    if (d && d.length) {
      var W = {
        padding: 0,
        margin: 0
      }, F = (m ? KD(d, m) : d).map(function(N, L) {
        if (N.type === "none")
          return null;
        var D = nl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: N.color || "#000"
        }, s), k = N.formatter || p || nI, A = N.value, $ = N.name, re = A, ee = $;
        if (k && re != null && ee != null) {
          var j = k(A, $, N, L, d);
          if (Array.isArray(j)) {
            var G = YD(j, 2);
            re = G[0], ee = G[1];
          } else
            re = j;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ K.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(L),
            style: D
          }, Do(ee) ? /* @__PURE__ */ K.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, ee) : null, Do(ee) ? /* @__PURE__ */ K.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ K.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, re), /* @__PURE__ */ K.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, N.unit || ""))
        );
      });
      return /* @__PURE__ */ K.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: W
      }, F);
    }
    return null;
  }, _ = nl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), C = nl({
    margin: 0
  }, l), S = !tO(h), P = S ? h : "", R = At("recharts-default-tooltip", v), T = At("recharts-tooltip-label", y);
  S && g && d !== void 0 && d !== null && (P = g(h, d));
  var I = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ K.createElement("div", Wl({
    className: R,
    style: _
  }, I), /* @__PURE__ */ K.createElement("p", {
    className: T,
    style: C
  }, /* @__PURE__ */ K.isValidElement(P) ? P : "".concat(P)), w());
};
function _n(e) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _n(e);
}
function po(e, t, r) {
  return t = aI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aI(e) {
  var t = iI(e, "string");
  return _n(t) == "symbol" ? t : t + "";
}
function iI(e, t) {
  if (_n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rn = "recharts-tooltip-wrapper", sI = {
  visibility: "hidden"
};
function cI(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return At(rn, po(po(po(po({}, "".concat(rn, "-right"), rt(r) && t && rt(t.x) && r >= t.x), "".concat(rn, "-left"), rt(r) && t && rt(t.x) && r < t.x), "".concat(rn, "-bottom"), rt(n) && t && rt(t.y) && n >= t.y), "".concat(rn, "-top"), rt(n) && t && rt(t.y) && n < t.y));
}
function dv(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && rt(a[n]))
    return a[n];
  var d = r[n] - s - o, p = r[n] + o;
  if (t[n])
    return i[n] ? d : p;
  if (i[n]) {
    var m = d, v = c[n];
    return m < v ? Math.max(p, c[n]) : Math.max(d, c[n]);
  }
  var y = p + s, h = c[n] + l;
  return y > h ? Math.max(d, c[n]) : Math.max(p, c[n]);
}
function lI(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function uI(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, d, p;
  return i.height > 0 && i.width > 0 && r ? (d = dv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = dv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = lI({
    translateX: d,
    translateY: p,
    useTranslate3d: s
  })) : l = sI, {
    cssProperties: l,
    cssClasses: cI({
      translateX: d,
      translateY: p,
      coordinate: r
    })
  };
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function fv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fv(Object(r), !0).forEach(function(n) {
      Vl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zb(n.key), n);
  }
}
function pI(e, t, r) {
  return t && fI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mI(e, t, r) {
  return t = Fo(t), hI(e, Vb() ? Reflect.construct(t, r || [], Fo(e).constructor) : t.apply(e, r));
}
function hI(e, t) {
  if (t && (Dr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return vI(e);
}
function vI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vb = function() {
    return !!e;
  })();
}
function Fo(e) {
  return Fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fo(e);
}
function gI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hl(e, t);
}
function Hl(e, t) {
  return Hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Hl(e, t);
}
function Vl(e, t, r) {
  return t = zb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zb(e) {
  var t = yI(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function yI(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var mv = 1, bI = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    dI(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = mI(this, t, [].concat(o)), Vl(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Vl(r, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, c, l, d;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (l = (d = r.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), r;
  }
  return gI(t, e), pI(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > mv || Math.abs(n.height - this.state.lastBoundingBox.height) > mv) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, d = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, v = o.offset, y = o.position, h = o.reverseDirection, g = o.useTranslate3d, b = o.viewBox, x = o.wrapperStyle, w = uI({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: v,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: b
      }), _ = w.cssClasses, C = w.cssProperties, S = pv(pv({
        transition: m && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, C), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ K.createElement("div", {
          tabIndex: -1,
          className: _,
          style: S,
          ref: function(R) {
            n.wrapperNode = R;
          }
        }, l)
      );
    }
  }]);
}(ra), xI = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wI = {
  isSsr: xI()
};
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function hv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hv(Object(r), !0).forEach(function(n) {
      pd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _I(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function SI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ub(n.key), n);
  }
}
function CI(e, t, r) {
  return t && SI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PI(e, t, r) {
  return t = qo(t), EI(e, Gb() ? Reflect.construct(t, r || [], qo(e).constructor) : t.apply(e, r));
}
function EI(e, t) {
  if (t && (Ir(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return TI(e);
}
function TI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gb = function() {
    return !!e;
  })();
}
function qo(e) {
  return qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qo(e);
}
function NI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zl(e, t);
}
function zl(e, t) {
  return zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, zl(e, t);
}
function pd(e, t, r) {
  return t = Ub(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ub(e) {
  var t = RI(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function RI(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function MI(e) {
  return e.dataKey;
}
function AI(e, t) {
  return /* @__PURE__ */ K.isValidElement(e) ? /* @__PURE__ */ K.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ K.createElement(e, t) : /* @__PURE__ */ K.createElement(oI, t);
}
var md = /* @__PURE__ */ function(e) {
  function t() {
    return _I(this, t), PI(this, t, arguments);
  }
  return NI(t, e), CI(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, d = o.coordinate, p = o.filterNull, m = o.isAnimationActive, v = o.offset, y = o.payload, h = o.payloadUniqBy, g = o.position, b = o.reverseDirection, x = o.useTranslate3d, w = o.viewBox, _ = o.wrapperStyle, C = y ?? [];
      p && C.length && (C = Bb(y.filter(function(P) {
        return P.value != null && (P.hide !== !0 || n.props.includeHidden);
      }), h, MI));
      var S = C.length > 0;
      return /* @__PURE__ */ K.createElement(bI, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: d,
        hasPayload: S,
        offset: v,
        position: g,
        reverseDirection: b,
        useTranslate3d: x,
        viewBox: w,
        wrapperStyle: _
      }, AI(l, vv(vv({}, this.props), {}, {
        payload: C
      })));
    }
  }]);
}(ra);
pd(md, "displayName", "Tooltip");
pd(md, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !wI.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var ol, gv;
function OI() {
  if (gv) return ol;
  gv = 1;
  var e = Pt(), t = function() {
    return e.Date.now();
  };
  return ol = t, ol;
}
var al, yv;
function jI() {
  if (yv) return al;
  yv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return al = t, al;
}
var il, bv;
function DI() {
  if (bv) return il;
  bv = 1;
  var e = jI(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return il = r, il;
}
var sl, xv;
function II() {
  if (xv) return sl;
  xv = 1;
  var e = DI(), t = Gt(), r = Hn(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function c(l) {
    if (typeof l == "number")
      return l;
    if (r(l))
      return n;
    if (t(l)) {
      var d = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = t(d) ? d + "" : d;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = e(l);
    var p = a.test(l);
    return p || i.test(l) ? s(l.slice(2), p ? 2 : 8) : o.test(l) ? n : +l;
  }
  return sl = c, sl;
}
var cl, wv;
function kI() {
  if (wv) return cl;
  wv = 1;
  var e = Gt(), t = OI(), r = II(), n = "Expected a function", o = Math.max, a = Math.min;
  function i(s, c, l) {
    var d, p, m, v, y, h, g = 0, b = !1, x = !1, w = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(l) && (b = !!l.leading, x = "maxWait" in l, m = x ? o(r(l.maxWait) || 0, c) : m, w = "trailing" in l ? !!l.trailing : w);
    function _(F) {
      var N = d, L = p;
      return d = p = void 0, g = F, v = s.apply(L, N), v;
    }
    function C(F) {
      return g = F, y = setTimeout(R, c), b ? _(F) : v;
    }
    function S(F) {
      var N = F - h, L = F - g, D = c - N;
      return x ? a(D, m - L) : D;
    }
    function P(F) {
      var N = F - h, L = F - g;
      return h === void 0 || N >= c || N < 0 || x && L >= m;
    }
    function R() {
      var F = t();
      if (P(F))
        return T(F);
      y = setTimeout(R, S(F));
    }
    function T(F) {
      return y = void 0, w && d ? _(F) : (d = p = void 0, v);
    }
    function I() {
      y !== void 0 && clearTimeout(y), g = 0, d = h = p = y = void 0;
    }
    function O() {
      return y === void 0 ? v : T(t());
    }
    function W() {
      var F = t(), N = P(F);
      if (d = arguments, p = this, h = F, N) {
        if (y === void 0)
          return C(h);
        if (x)
          return clearTimeout(y), y = setTimeout(R, c), _(h);
      }
      return y === void 0 && (y = setTimeout(R, c)), v;
    }
    return W.cancel = I, W.flush = O, W;
  }
  return cl = i, cl;
}
var ll, _v;
function LI() {
  if (_v) return ll;
  _v = 1;
  var e = kI(), t = Gt(), r = "Expected a function";
  function n(o, a, i) {
    var s = !0, c = !0;
    if (typeof o != "function")
      throw new TypeError(r);
    return t(i) && (s = "leading" in i ? !!i.leading : s, c = "trailing" in i ? !!i.trailing : c), e(o, a, {
      leading: s,
      maxWait: a,
      trailing: c
    });
  }
  return ll = n, ll;
}
var $I = LI();
const FI = /* @__PURE__ */ _t($I);
function Sn(e) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sn(e);
}
function Sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sv(Object(r), !0).forEach(function(n) {
      qI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qI(e, t, r) {
  return t = BI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BI(e) {
  var t = WI(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function WI(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function HI(e, t) {
  return UI(e) || GI(e, t) || zI(e, t) || VI();
}
function VI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zI(e, t) {
  if (e) {
    if (typeof e == "string") return Cv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cv(e, t);
  }
}
function Cv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (d) {
      l = !0, o = d;
    } finally {
      try {
        if (!c && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function UI(e) {
  if (Array.isArray(e)) return e;
}
var KI = /* @__PURE__ */ ta(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, d = l === void 0 ? 0 : l, p = e.minHeight, m = e.maxHeight, v = e.children, y = e.debounce, h = y === void 0 ? 0 : y, g = e.id, b = e.className, x = e.onResize, w = e.style, _ = w === void 0 ? {} : w, C = Rr(null), S = Rr();
  S.current = x, yu(t, function() {
    return Object.defineProperty(C.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), C.current;
      },
      configurable: !0
    });
  });
  var P = yt({
    containerWidth: o.width,
    containerHeight: o.height
  }), R = HI(P, 2), T = R[0], I = R[1], O = Xv(function(F, N) {
    I(function(L) {
      var D = Math.round(F), k = Math.round(N);
      return L.containerWidth === D && L.containerHeight === k ? L : {
        containerWidth: D,
        containerHeight: k
      };
    });
  }, []);
  Ge(function() {
    var F = function($) {
      var re, ee = $[0].contentRect, j = ee.width, G = ee.height;
      O(j, G), (re = S.current) === null || re === void 0 || re.call(S, j, G);
    };
    h > 0 && (F = FI(F, h, {
      trailing: !0,
      leading: !1
    }));
    var N = new ResizeObserver(F), L = C.current.getBoundingClientRect(), D = L.width, k = L.height;
    return O(D, k), N.observe(C.current), function() {
      N.disconnect();
    };
  }, [O, h]);
  var W = p0(function() {
    var F = T.containerWidth, N = T.containerHeight;
    if (F < 0 || N < 0)
      return null;
    wo(uo(i) || uo(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), wo(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var L = uo(i) ? F : i, D = uo(c) ? N : c;
    r && r > 0 && (L ? D = L / r : D && (L = D * r), m && D > m && (D = m)), wo(L > 0 || D > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, L, D, i, c, d, p, r);
    var k = !Array.isArray(v) && yO(v.type).endsWith("Chart");
    return K.Children.map(v, function(A) {
      return /* @__PURE__ */ K.isValidElement(A) ? /* @__PURE__ */ m0(A, mo({
        width: L,
        height: D
      }, k ? {
        style: mo({
          height: "100%",
          width: "100%",
          maxHeight: D,
          maxWidth: L
        }, A.props.style)
      } : {})) : A;
    });
  }, [r, v, c, m, p, d, T, i]);
  return /* @__PURE__ */ K.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: At("recharts-responsive-container", b),
    style: mo(mo({}, _), {}, {
      width: i,
      height: c,
      minWidth: d,
      minHeight: p,
      maxHeight: m
    }),
    ref: C
  }, W);
});
const YI = { light: "", dark: ".dark" }, Kb = f.createContext(null);
function Yb() {
  const e = f.useContext(Kb);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const XI = f.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = f.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ u.jsx(Kb.Provider, { value: { config: n }, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: M(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ u.jsx(QI, { id: s, config: n }),
        /* @__PURE__ */ u.jsx(KI, { children: r })
      ]
    }
  ) });
});
XI.displayName = "Chart";
const QI = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ u.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(YI).map(
          ([n, o]) => `
${o} [data-chart=${e}] {
${r.map(([a, i]) => {
            var c;
            const s = ((c = i.theme) == null ? void 0 : c[n]) || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, PW = md, ZI = f.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: i,
    labelFormatter: s,
    labelClassName: c,
    formatter: l,
    color: d,
    nameKey: p,
    labelKey: m
  }, v) => {
    const { config: y } = Yb(), h = f.useMemo(() => {
      var C;
      if (o || !(t != null && t.length))
        return null;
      const [b] = t;
      if (!b)
        return null;
      const x = `${m || b.dataKey || b.name || "value"}`, w = Gl(y, b, x), _ = !m && typeof i == "string" ? ((C = y[i]) == null ? void 0 : C.label) || i : w == null ? void 0 : w.label;
      return s ? /* @__PURE__ */ u.jsx("div", { className: M("font-medium", c), children: s(_, t) }) : _ ? /* @__PURE__ */ u.jsx("div", { className: M("font-medium", c), children: _ }) : null;
    }, [
      i,
      s,
      t,
      o,
      c,
      y,
      m
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const g = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: v,
        className: M(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          g ? null : h,
          /* @__PURE__ */ u.jsx("div", { className: "grid gap-1.5", children: t.map((b, x) => {
            if (!b)
              return null;
            const w = `${p || b.dataKey || b.name || "value"}`, _ = Gl(y, b, w), C = d || b.payload.fill || b.color;
            return /* @__PURE__ */ u.jsx(
              "div",
              {
                className: M(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: l && (b == null ? void 0 : b.value) !== void 0 && b.name ? l(b.value, b.name, b, x, b.payload) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  _ != null && _.icon ? /* @__PURE__ */ u.jsx(_.icon, {}) : !a && /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      className: M(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": g && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": C,
                        "--color-border": C
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: M(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? h : null,
                          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: (_ == null ? void 0 : _.label) || b.name })
                        ] }),
                        b.value && /* @__PURE__ */ u.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: b.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              b.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ZI.displayName = "ChartTooltip";
const EW = fd, JI = f.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
    const { config: i } = Yb();
    return r != null && r.length ? /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: a,
        className: M(
          "flex items-center justify-center gap-4",
          n === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((s) => {
          if (!s)
            return null;
          const c = `${o || s.dataKey || "value"}`, l = Gl(i, s, c);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: M(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l != null && l.icon && !t ? /* @__PURE__ */ u.jsx(l.icon, {}) : /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: s.color
                    }
                  }
                ),
                l == null ? void 0 : l.label
              ]
            },
            s.value
          );
        })
      }
    ) : null;
  }
);
JI.displayName = "ChartLegend";
function Gl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
function Vn(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Sa(e) {
  const [t, r] = f.useState(void 0);
  return Pe(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, s = l.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        r({ width: i, height: s });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var hd = "Checkbox", [ek, TW] = Te(hd), [tk, rk] = ek(hd), Xb = f.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c = "on",
      onCheckedChange: l,
      form: d,
      ...p
    } = e, [m, v] = f.useState(null), y = ie(t, (_) => v(_)), h = f.useRef(!1), g = m ? d || !!m.closest("form") : !0, [b = !1, x] = Re({
      prop: o,
      defaultProp: a,
      onChange: l
    }), w = f.useRef(b);
    return f.useEffect(() => {
      const _ = m == null ? void 0 : m.form;
      if (_) {
        const C = () => x(w.current);
        return _.addEventListener("reset", C), () => _.removeEventListener("reset", C);
      }
    }, [m, x]), /* @__PURE__ */ u.jsxs(tk, { scope: r, state: b, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        V.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": Bt(b) ? "mixed" : b,
          "aria-required": i,
          "data-state": Jb(b),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...p,
          ref: y,
          onKeyDown: q(e.onKeyDown, (_) => {
            _.key === "Enter" && _.preventDefault();
          }),
          onClick: q(e.onClick, (_) => {
            x((C) => Bt(C) ? !0 : !C), g && (h.current = _.isPropagationStopped(), h.current || _.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ u.jsx(
        nk,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: b,
          required: i,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" },
          defaultChecked: Bt(a) ? !1 : a
        }
      )
    ] });
  }
);
Xb.displayName = hd;
var Qb = "CheckboxIndicator", Zb = f.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = rk(Qb, r);
    return /* @__PURE__ */ u.jsx(we, { present: n || Bt(a.state) || a.state === !0, children: /* @__PURE__ */ u.jsx(
      V.span,
      {
        "data-state": Jb(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
Zb.displayName = Qb;
var nk = (e) => {
  const { control: t, checked: r, bubbles: n = !0, defaultChecked: o, ...a } = e, i = f.useRef(null), s = Vn(r), c = Sa(t);
  f.useEffect(() => {
    const d = i.current, p = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(p, "checked").set;
    if (s !== r && v) {
      const y = new Event("click", { bubbles: n });
      d.indeterminate = Bt(r), v.call(d, Bt(r) ? !1 : r), d.dispatchEvent(y);
    }
  }, [s, r, n]);
  const l = f.useRef(Bt(r) ? !1 : r);
  return /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o ?? l.current,
      ...a,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...c,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Bt(e) {
  return e === "indeterminate";
}
function Jb(e) {
  return Bt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var ex = Xb, ok = Zb;
const ak = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  ex,
  {
    ref: r,
    className: M(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(
      ok,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u.jsx(mn, { className: "size-4 h-full" })
      }
    )
  }
));
ak.displayName = ex.displayName;
var Pv = 1, ik = 0.9, sk = 0.8, ck = 0.17, ul = 0.1, dl = 0.999, lk = 0.9999, uk = 0.99, dk = /[\\\/_+.#"@\[\(\{&]/, fk = /[\\\/_+.#"@\[\(\{&]/g, pk = /[\s-]/, tx = /[\s-]/g;
function Ul(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? Pv : uk;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), l = r.indexOf(c, o), d = 0, p, m, v, y; l >= 0; ) p = Ul(e, t, r, n, l + 1, a + 1, i), p > d && (l === o ? p *= Pv : dk.test(e.charAt(l - 1)) ? (p *= sk, v = e.slice(o, l - 1).match(fk), v && o > 0 && (p *= Math.pow(dl, v.length))) : pk.test(e.charAt(l - 1)) ? (p *= ik, y = e.slice(o, l - 1).match(tx), y && o > 0 && (p *= Math.pow(dl, y.length))) : (p *= ck, o > 0 && (p *= Math.pow(dl, l - o))), e.charAt(l) !== t.charAt(a) && (p *= lk)), (p < ul && r.charAt(l - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a)) && (m = Ul(e, t, r, n, l + 1, a + 2, i), m * ul > p && (p = m * ul)), p > d && (d = p), l = r.indexOf(c, l + 1);
  return i[s] = d, d;
}
function Ev(e) {
  return e.toLowerCase().replace(tx, " ");
}
function mk(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, Ul(e, t, Ev(e), Ev(t), 0, 0, {});
}
var ho = { exports: {} }, fl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tv;
function hk() {
  if (Tv) return fl;
  Tv = 1;
  var e = K;
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(p, m) {
    var v = m(), y = n({ inst: { value: v, getSnapshot: m } }), h = y[0].inst, g = y[1];
    return a(
      function() {
        h.value = v, h.getSnapshot = m, c(h) && g({ inst: h });
      },
      [p, v, m]
    ), o(
      function() {
        return c(h) && g({ inst: h }), p(function() {
          c(h) && g({ inst: h });
        });
      },
      [p]
    ), i(v), v;
  }
  function c(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var v = m();
      return !r(p, v);
    } catch {
      return !0;
    }
  }
  function l(p, m) {
    return m();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return fl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, fl;
}
var pl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nv;
function vk() {
  return Nv || (Nv = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v, y) {
      return v === y && (v !== 0 || 1 / v === 1 / y) || v !== v && y !== y;
    }
    function t(v, y) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = y();
      if (!p) {
        var g = y();
        a(h, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      g = i({
        inst: { value: h, getSnapshot: y }
      });
      var b = g[0].inst, x = g[1];
      return c(
        function() {
          b.value = h, b.getSnapshot = y, r(b) && x({ inst: b });
        },
        [v, h, y]
      ), s(
        function() {
          return r(b) && x({ inst: b }), v(function() {
            r(b) && x({ inst: b });
          });
        },
        [v]
      ), l(h), h;
    }
    function r(v) {
      var y = v.getSnapshot;
      v = v.value;
      try {
        var h = y();
        return !a(v, h);
      } catch {
        return !0;
      }
    }
    function n(v, y) {
      return y();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = K, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, l = o.useDebugValue, d = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    pl.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), pl;
}
var Rv;
function gk() {
  return Rv || (Rv = 1, process.env.NODE_ENV === "production" ? ho.exports = hk() : ho.exports = vk()), ho.exports;
}
var yk = gk(), nn = '[cmdk-group=""]', ml = '[cmdk-group-items=""]', bk = '[cmdk-group-heading=""]', vd = '[cmdk-item=""]', Mv = `${vd}:not([aria-disabled="true"])`, Kl = "cmdk-item-select", rr = "data-value", xk = (e, t, r) => mk(e, t, r), rx = f.createContext(void 0), zn = () => f.useContext(rx), nx = f.createContext(void 0), gd = () => f.useContext(nx), ox = f.createContext(void 0), ax = f.forwardRef((e, t) => {
  let r = Cr(() => {
    var j, G;
    return { search: "", value: (G = (j = e.value) != null ? j : e.defaultValue) != null ? G : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = Cr(() => /* @__PURE__ */ new Set()), o = Cr(() => /* @__PURE__ */ new Map()), a = Cr(() => /* @__PURE__ */ new Map()), i = Cr(() => /* @__PURE__ */ new Set()), s = ix(e), { label: c, children: l, value: d, onValueChange: p, filter: m, shouldFilter: v, loop: y, disablePointerSelection: h = !1, vimBindings: g = !0, ...b } = e, x = _e(), w = _e(), _ = _e(), C = f.useRef(null), S = Ak();
  ir(() => {
    if (d !== void 0) {
      let j = d.trim();
      r.current.value = j, P.emit();
    }
  }, [d]), ir(() => {
    S(6, F);
  }, []);
  let P = f.useMemo(() => ({ subscribe: (j) => (i.current.add(j), () => i.current.delete(j)), snapshot: () => r.current, setState: (j, G, Y) => {
    var U, oe, B;
    if (!Object.is(r.current[j], G)) {
      if (r.current[j] = G, j === "search") W(), I(), S(1, O);
      else if (j === "value" && (Y || S(5, F), ((U = s.current) == null ? void 0 : U.value) !== void 0)) {
        let te = G ?? "";
        (B = (oe = s.current).onValueChange) == null || B.call(oe, te);
        return;
      }
      P.emit();
    }
  }, emit: () => {
    i.current.forEach((j) => j());
  } }), []), R = f.useMemo(() => ({ value: (j, G, Y) => {
    var U;
    G !== ((U = a.current.get(j)) == null ? void 0 : U.value) && (a.current.set(j, { value: G, keywords: Y }), r.current.filtered.items.set(j, T(G, Y)), S(2, () => {
      I(), P.emit();
    }));
  }, item: (j, G) => (n.current.add(j), G && (o.current.has(G) ? o.current.get(G).add(j) : o.current.set(G, /* @__PURE__ */ new Set([j]))), S(3, () => {
    W(), I(), r.current.value || O(), P.emit();
  }), () => {
    a.current.delete(j), n.current.delete(j), r.current.filtered.items.delete(j);
    let Y = N();
    S(4, () => {
      W(), (Y == null ? void 0 : Y.getAttribute("id")) === j && O(), P.emit();
    });
  }), group: (j) => (o.current.has(j) || o.current.set(j, /* @__PURE__ */ new Set()), () => {
    a.current.delete(j), o.current.delete(j);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: x, inputId: _, labelId: w, listInnerRef: C }), []);
  function T(j, G) {
    var Y, U;
    let oe = (U = (Y = s.current) == null ? void 0 : Y.filter) != null ? U : xk;
    return j ? oe(j, r.current.search, G) : 0;
  }
  function I() {
    if (!r.current.search || s.current.shouldFilter === !1) return;
    let j = r.current.filtered.items, G = [];
    r.current.filtered.groups.forEach((U) => {
      let oe = o.current.get(U), B = 0;
      oe.forEach((te) => {
        let se = j.get(te);
        B = Math.max(se, B);
      }), G.push([U, B]);
    });
    let Y = C.current;
    L().sort((U, oe) => {
      var B, te;
      let se = U.getAttribute("id"), ae = oe.getAttribute("id");
      return ((B = j.get(ae)) != null ? B : 0) - ((te = j.get(se)) != null ? te : 0);
    }).forEach((U) => {
      let oe = U.closest(ml);
      oe ? oe.appendChild(U.parentElement === oe ? U : U.closest(`${ml} > *`)) : Y.appendChild(U.parentElement === Y ? U : U.closest(`${ml} > *`));
    }), G.sort((U, oe) => oe[1] - U[1]).forEach((U) => {
      var oe;
      let B = (oe = C.current) == null ? void 0 : oe.querySelector(`${nn}[${rr}="${encodeURIComponent(U[0])}"]`);
      B == null || B.parentElement.appendChild(B);
    });
  }
  function O() {
    let j = L().find((Y) => Y.getAttribute("aria-disabled") !== "true"), G = j == null ? void 0 : j.getAttribute(rr);
    P.setState("value", G || void 0);
  }
  function W() {
    var j, G, Y, U;
    if (!r.current.search || s.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let oe = 0;
    for (let B of n.current) {
      let te = (G = (j = a.current.get(B)) == null ? void 0 : j.value) != null ? G : "", se = (U = (Y = a.current.get(B)) == null ? void 0 : Y.keywords) != null ? U : [], ae = T(te, se);
      r.current.filtered.items.set(B, ae), ae > 0 && oe++;
    }
    for (let [B, te] of o.current) for (let se of te) if (r.current.filtered.items.get(se) > 0) {
      r.current.filtered.groups.add(B);
      break;
    }
    r.current.filtered.count = oe;
  }
  function F() {
    var j, G, Y;
    let U = N();
    U && (((j = U.parentElement) == null ? void 0 : j.firstChild) === U && ((Y = (G = U.closest(nn)) == null ? void 0 : G.querySelector(bk)) == null || Y.scrollIntoView({ block: "nearest" })), U.scrollIntoView({ block: "nearest" }));
  }
  function N() {
    var j;
    return (j = C.current) == null ? void 0 : j.querySelector(`${vd}[aria-selected="true"]`);
  }
  function L() {
    var j;
    return Array.from(((j = C.current) == null ? void 0 : j.querySelectorAll(Mv)) || []);
  }
  function D(j) {
    let G = L()[j];
    G && P.setState("value", G.getAttribute(rr));
  }
  function k(j) {
    var G;
    let Y = N(), U = L(), oe = U.findIndex((te) => te === Y), B = U[oe + j];
    (G = s.current) != null && G.loop && (B = oe + j < 0 ? U[U.length - 1] : oe + j === U.length ? U[0] : U[oe + j]), B && P.setState("value", B.getAttribute(rr));
  }
  function A(j) {
    let G = N(), Y = G == null ? void 0 : G.closest(nn), U;
    for (; Y && !U; ) Y = j > 0 ? Rk(Y, nn) : Mk(Y, nn), U = Y == null ? void 0 : Y.querySelector(Mv);
    U ? P.setState("value", U.getAttribute(rr)) : k(j);
  }
  let $ = () => D(L().length - 1), re = (j) => {
    j.preventDefault(), j.metaKey ? $() : j.altKey ? A(1) : k(1);
  }, ee = (j) => {
    j.preventDefault(), j.metaKey ? D(0) : j.altKey ? A(-1) : k(-1);
  };
  return f.createElement(V.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (j) => {
    var G;
    if ((G = b.onKeyDown) == null || G.call(b, j), !j.defaultPrevented) switch (j.key) {
      case "n":
      case "j": {
        g && j.ctrlKey && re(j);
        break;
      }
      case "ArrowDown": {
        re(j);
        break;
      }
      case "p":
      case "k": {
        g && j.ctrlKey && ee(j);
        break;
      }
      case "ArrowUp": {
        ee(j);
        break;
      }
      case "Home": {
        j.preventDefault(), D(0);
        break;
      }
      case "End": {
        j.preventDefault(), $();
        break;
      }
      case "Enter":
        if (!j.nativeEvent.isComposing && j.keyCode !== 229) {
          j.preventDefault();
          let Y = N();
          if (Y) {
            let U = new Event(Kl);
            Y.dispatchEvent(U);
          }
        }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: jk }, c), Ca(e, (j) => f.createElement(nx.Provider, { value: P }, f.createElement(rx.Provider, { value: R }, j))));
}), wk = f.forwardRef((e, t) => {
  var r, n;
  let o = _e(), a = f.useRef(null), i = f.useContext(ox), s = zn(), c = ix(e), l = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i == null ? void 0 : i.forceMount;
  ir(() => {
    if (!l) return s.item(o, i == null ? void 0 : i.id);
  }, [l]);
  let d = sx(o, a, [e.value, e.children, a], e.keywords), p = gd(), m = sr((S) => S.value && S.value === d.current), v = sr((S) => l || s.filter() === !1 ? !0 : S.search ? S.filtered.items.get(o) > 0 : !0);
  f.useEffect(() => {
    let S = a.current;
    if (!(!S || e.disabled)) return S.addEventListener(Kl, y), () => S.removeEventListener(Kl, y);
  }, [v, e.onSelect, e.disabled]);
  function y() {
    var S, P;
    h(), (P = (S = c.current).onSelect) == null || P.call(S, d.current);
  }
  function h() {
    p.setState("value", d.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: b, onSelect: x, forceMount: w, keywords: _, ...C } = e;
  return f.createElement(V.div, { ref: Cn([a, t]), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!m, "data-disabled": !!g, "data-selected": !!m, onPointerMove: g || s.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : y }, e.children);
}), _k = f.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = _e(), s = f.useRef(null), c = f.useRef(null), l = _e(), d = zn(), p = sr((v) => o || d.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(i) : !0);
  ir(() => d.group(i), []), sx(i, s, [e.value, e.heading, c]);
  let m = f.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return f.createElement(V.div, { ref: Cn([s, t]), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && f.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), Ca(e, (v) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, f.createElement(ox.Provider, { value: m }, v))));
}), Sk = f.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = f.useRef(null), a = sr((i) => !i.search);
  return !r && !a ? null : f.createElement(V.div, { ref: Cn([o, t]), ...n, "cmdk-separator": "", role: "separator" });
}), Ck = f.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = gd(), i = sr((d) => d.search), s = sr((d) => d.value), c = zn(), l = f.useMemo(() => {
    var d;
    let p = (d = c.listInnerRef.current) == null ? void 0 : d.querySelector(`${vd}[${rr}="${encodeURIComponent(s)}"]`);
    return p == null ? void 0 : p.getAttribute("id");
  }, []);
  return f.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), f.createElement(V.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (d) => {
    o || a.setState("search", d.target.value), r == null || r(d.target.value);
  } });
}), Pk = f.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = f.useRef(null), i = f.useRef(null), s = zn();
  return f.useEffect(() => {
    if (i.current && a.current) {
      let c = i.current, l = a.current, d, p = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let m = c.offsetHeight;
          l.style.setProperty("--cmdk-list-height", m.toFixed(1) + "px");
        });
      });
      return p.observe(c), () => {
        cancelAnimationFrame(d), p.unobserve(c);
      };
    }
  }, []), f.createElement(V.div, { ref: Cn([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": n, id: s.listId }, Ca(e, (c) => f.createElement("div", { ref: Cn([i, s.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), Ek = f.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return f.createElement(la, { open: r, onOpenChange: n }, f.createElement(ua, { container: i }, f.createElement(Hr, { "cmdk-overlay": "", className: o }), f.createElement(Vr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, f.createElement(ax, { ref: t, ...s }))));
}), Tk = f.forwardRef((e, t) => sr((r) => r.filtered.count === 0) ? f.createElement(V.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Nk = f.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return f.createElement(V.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Ca(e, (i) => f.createElement("div", { "aria-hidden": !0 }, i)));
}), Fe = Object.assign(ax, { List: Pk, Item: wk, Input: Ck, Group: _k, Separator: Sk, Dialog: Ek, Empty: Tk, Loading: Nk });
function Rk(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function Mk(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function ix(e) {
  let t = f.useRef(e);
  return ir(() => {
    t.current = e;
  }), t;
}
var ir = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function Cr(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Cn(e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
function sr(e) {
  let t = gd(), r = () => e(t.snapshot());
  return yk.useSyncExternalStore(t.subscribe, r, r);
}
function sx(e, t, r, n = []) {
  let o = f.useRef(), a = zn();
  return ir(() => {
    var i;
    let s = (() => {
      var l;
      for (let d of r) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (l = d.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = n.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(rr, s), o.current = s;
  }), o;
}
var Ak = () => {
  let [e, t] = f.useState(), r = Cr(() => /* @__PURE__ */ new Map());
  return ir(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function Ok(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ca({ asChild: e, children: t }, r) {
  return e && f.isValidElement(t) ? f.cloneElement(Ok(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var jk = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const yd = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Fe,
  {
    ref: r,
    className: M(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
yd.displayName = Fe.displayName;
const NW = ({ children: e, ...t }) => /* @__PURE__ */ u.jsx(p$, { ...t, children: /* @__PURE__ */ u.jsx(Qx, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ u.jsx(yd, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), cx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ u.jsx(_P, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ u.jsx(
    Fe.Input,
    {
      ref: r,
      className: M(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
cx.displayName = Fe.Input.displayName;
const lx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Fe.List,
  {
    ref: r,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
lx.displayName = Fe.List.displayName;
const ux = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  Fe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
ux.displayName = Fe.Empty.displayName;
const dx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Fe.Group,
  {
    ref: r,
    className: M(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
dx.displayName = Fe.Group.displayName;
const fx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Fe.Separator,
  {
    ref: r,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
fx.displayName = Fe.Separator.displayName;
const _o = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Fe.Item,
  {
    ref: r,
    className: M(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
_o.displayName = Fe.Item.displayName;
const Dk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
Dk.displayName = "CommandShortcut";
const Ik = ["top", "right", "bottom", "left"], Wt = Math.min, Be = Math.max, Bo = Math.round, vo = Math.floor, gt = (e) => ({
  x: e,
  y: e
}), kk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Lk = {
  start: "end",
  end: "start"
};
function Yl(e, t, r) {
  return Be(e, Wt(t, r));
}
function Ot(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jt(e) {
  return e.split("-")[0];
}
function Kr(e) {
  return e.split("-")[1];
}
function bd(e) {
  return e === "x" ? "y" : "x";
}
function xd(e) {
  return e === "y" ? "height" : "width";
}
function Ht(e) {
  return ["top", "bottom"].includes(jt(e)) ? "y" : "x";
}
function wd(e) {
  return bd(Ht(e));
}
function $k(e, t, r) {
  r === void 0 && (r = !1);
  const n = Kr(e), o = wd(e), a = xd(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Wo(i)), [i, Wo(i)];
}
function Fk(e) {
  const t = Wo(e);
  return [Xl(e), t, Xl(t)];
}
function Xl(e) {
  return e.replace(/start|end/g, (t) => Lk[t]);
}
function qk(e, t, r) {
  const n = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function Bk(e, t, r, n) {
  const o = Kr(e);
  let a = qk(jt(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Xl)))), a;
}
function Wo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => kk[t]);
}
function Wk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function px(e) {
  return typeof e != "number" ? Wk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ho(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Av(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = Ht(t), i = wd(t), s = xd(i), c = jt(t), l = a === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Kr(t)) {
    case "start":
      v[i] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      v[i] += m * (r && l ? -1 : 1);
      break;
  }
  return v;
}
const Hk = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = r, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: p
  } = Av(l, n, c), m = n, v = {}, y = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: g,
      fn: b
    } = s[h], {
      x,
      y: w,
      data: _,
      reset: C
    } = await b({
      x: d,
      y: p,
      initialPlacement: n,
      placement: m,
      strategy: o,
      middlewareData: v,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, p = w ?? p, v = {
      ...v,
      [g]: {
        ...v[g],
        ..._
      }
    }, C && y <= 50 && (y++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (l = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: d,
      y: p
    } = Av(l, m, c)), h = -1);
  }
  return {
    x: d,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: v
  };
};
async function Pn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = Ot(t, e), y = px(v), g = s[m ? p === "floating" ? "reference" : "floating" : p], b = Ho(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), x = p === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ho(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: w,
    strategy: c
  }) : x);
  return {
    top: (b.top - C.top + y.top) / _.y,
    bottom: (C.bottom - b.bottom + y.bottom) / _.y,
    left: (b.left - C.left + y.left) / _.x,
    right: (C.right - b.right + y.right) / _.x
  };
}
const Vk = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: l,
      padding: d = 0
    } = Ot(e, t) || {};
    if (l == null)
      return {};
    const p = px(d), m = {
      x: r,
      y: n
    }, v = wd(o), y = xd(v), h = await i.getDimensions(l), g = v === "y", b = g ? "top" : "left", x = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", _ = a.reference[y] + a.reference[v] - m[v] - a.floating[y], C = m[v] - a.reference[v], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let P = S ? S[w] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(S))) && (P = s.floating[w] || a.floating[y]);
    const R = _ / 2 - C / 2, T = P / 2 - h[y] / 2 - 1, I = Wt(p[b], T), O = Wt(p[x], T), W = I, F = P - h[y] - O, N = P / 2 - h[y] / 2 + R, L = Yl(W, N, F), D = !c.arrow && Kr(o) != null && N !== L && a.reference[y] / 2 - (N < W ? I : O) - h[y] / 2 < 0, k = D ? N < W ? N - W : N - F : 0;
    return {
      [v]: m[v] + k,
      data: {
        [v]: L,
        centerOffset: N - L - k,
        ...D && {
          alignmentOffset: k
        }
      },
      reset: D
    };
  }
}), zk = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: h = !0,
        ...g
      } = Ot(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const b = jt(o), x = Ht(s), w = jt(s) === s, _ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), C = m || (w || !h ? [Wo(s)] : Fk(s)), S = y !== "none";
      !m && S && C.push(...Bk(s, h, y, _));
      const P = [s, ...C], R = await Pn(t, g), T = [];
      let I = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && T.push(R[b]), p) {
        const N = $k(o, i, _);
        T.push(R[N[0]], R[N[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: T
      }], !T.every((N) => N <= 0)) {
        var O, W;
        const N = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1, L = P[N];
        if (L)
          return {
            data: {
              index: N,
              overflows: I
            },
            reset: {
              placement: L
            }
          };
        let D = (W = I.filter((k) => k.overflows[0] <= 0).sort((k, A) => k.overflows[1] - A.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!D)
          switch (v) {
            case "bestFit": {
              var F;
              const k = (F = I.filter((A) => {
                if (S) {
                  const $ = Ht(A.placement);
                  return $ === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter(($) => $ > 0).reduce(($, re) => $ + re, 0)]).sort((A, $) => A[1] - $[1])[0]) == null ? void 0 : F[0];
              k && (D = k);
              break;
            }
            case "initialPlacement":
              D = s;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function Ov(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jv(e) {
  return Ik.some((t) => e[t] >= 0);
}
const Gk = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Ot(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await Pn(t, {
            ...o,
            elementContext: "reference"
          }), i = Ov(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: jv(i)
            }
          };
        }
        case "escaped": {
          const a = await Pn(t, {
            ...o,
            altBoundary: !0
          }), i = Ov(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: jv(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Uk(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = jt(r), s = Kr(r), c = Ht(r) === "y", l = ["left", "top"].includes(i) ? -1 : 1, d = a && c ? -1 : 1, p = Ot(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: y
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof y == "number" && (v = s === "end" ? y * -1 : y), c ? {
    x: v * d,
    y: m * l
  } : {
    x: m * l,
    y: v * d
  };
}
const Kk = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await Uk(t, e);
      return i === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, Yk = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: b,
              y: x
            } = g;
            return {
              x: b,
              y: x
            };
          }
        },
        ...c
      } = Ot(e, t), l = {
        x: r,
        y: n
      }, d = await Pn(t, c), p = Ht(jt(o)), m = bd(p);
      let v = l[m], y = l[p];
      if (a) {
        const g = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", x = v + d[g], w = v - d[b];
        v = Yl(x, v, w);
      }
      if (i) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = y + d[g], w = y - d[b];
        y = Yl(x, y, w);
      }
      const h = s.fn({
        ...t,
        [m]: v,
        [p]: y
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n,
          enabled: {
            [m]: a,
            [p]: i
          }
        }
      };
    }
  };
}, Xk = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Ot(e, t), d = {
        x: r,
        y: n
      }, p = Ht(o), m = bd(p);
      let v = d[m], y = d[p];
      const h = Ot(s, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const w = m === "y" ? "height" : "width", _ = a.reference[m] - a.floating[w] + g.mainAxis, C = a.reference[m] + a.reference[w] - g.mainAxis;
        v < _ ? v = _ : v > C && (v = C);
      }
      if (l) {
        var b, x;
        const w = m === "y" ? "width" : "height", _ = ["top", "left"].includes(jt(o)), C = a.reference[p] - a.floating[w] + (_ && ((b = i.offset) == null ? void 0 : b[p]) || 0) + (_ ? 0 : g.crossAxis), S = a.reference[p] + a.reference[w] + (_ ? 0 : ((x = i.offset) == null ? void 0 : x[p]) || 0) - (_ ? g.crossAxis : 0);
        y < C ? y = C : y > S && (y = S);
      }
      return {
        [m]: v,
        [p]: y
      };
    }
  };
}, Qk = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Ot(e, t), d = await Pn(t, l), p = jt(o), m = Kr(o), v = Ht(o) === "y", {
        width: y,
        height: h
      } = a.floating;
      let g, b;
      p === "top" || p === "bottom" ? (g = p, b = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, g = m === "end" ? "top" : "bottom");
      const x = h - d.top - d.bottom, w = y - d.left - d.right, _ = Wt(h - d[g], x), C = Wt(y - d[b], w), S = !t.middlewareData.shift;
      let P = _, R = C;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (R = w), (n = t.middlewareData.shift) != null && n.enabled.y && (P = x), S && !m) {
        const I = Be(d.left, 0), O = Be(d.right, 0), W = Be(d.top, 0), F = Be(d.bottom, 0);
        v ? R = y - 2 * (I !== 0 || O !== 0 ? I + O : Be(d.left, d.right)) : P = h - 2 * (W !== 0 || F !== 0 ? W + F : Be(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: R,
        availableHeight: P
      });
      const T = await i.getDimensions(s.floating);
      return y !== T.width || h !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pa() {
  return typeof window < "u";
}
function Yr(e) {
  return mx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function We(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Et(e) {
  var t;
  return (t = (mx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mx(e) {
  return Pa() ? e instanceof Node || e instanceof We(e).Node : !1;
}
function at(e) {
  return Pa() ? e instanceof Element || e instanceof We(e).Element : !1;
}
function wt(e) {
  return Pa() ? e instanceof HTMLElement || e instanceof We(e).HTMLElement : !1;
}
function Dv(e) {
  return !Pa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof We(e).ShadowRoot;
}
function Gn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = it(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function Zk(e) {
  return ["table", "td", "th"].includes(Yr(e));
}
function Ea(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function _d(e) {
  const t = Sd(), r = at(e) ? it(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Jk(e) {
  let t = Vt(e);
  for (; wt(t) && !kr(t); ) {
    if (_d(t))
      return t;
    if (Ea(t))
      return null;
    t = Vt(t);
  }
  return null;
}
function Sd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function kr(e) {
  return ["html", "body", "#document"].includes(Yr(e));
}
function it(e) {
  return We(e).getComputedStyle(e);
}
function Ta(e) {
  return at(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Vt(e) {
  if (Yr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Dv(e) && e.host || // Fallback.
    Et(e)
  );
  return Dv(t) ? t.host : t;
}
function hx(e) {
  const t = Vt(e);
  return kr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wt(t) && Gn(t) ? t : hx(t);
}
function En(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = hx(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = We(o);
  if (a) {
    const s = Ql(i);
    return t.concat(i, i.visualViewport || [], Gn(o) ? o : [], s && r ? En(s) : []);
  }
  return t.concat(o, En(o, [], r));
}
function Ql(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vx(e) {
  const t = it(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = wt(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Bo(r) !== a || Bo(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function Cd(e) {
  return at(e) ? e : e.contextElement;
}
function Nr(e) {
  const t = Cd(e);
  if (!wt(t))
    return gt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = vx(t);
  let i = (a ? Bo(r.width) : r.width) / n, s = (a ? Bo(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const eL = /* @__PURE__ */ gt(0);
function gx(e) {
  const t = We(e);
  return !Sd() || !t.visualViewport ? eL : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function tL(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== We(e) ? !1 : t;
}
function cr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = Cd(e);
  let i = gt(1);
  t && (n ? at(n) && (i = Nr(n)) : i = Nr(e));
  const s = tL(a, r, n) ? gx(a) : gt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, d = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = We(a), v = n && at(n) ? We(n) : n;
    let y = m, h = Ql(y);
    for (; h && n && v !== y; ) {
      const g = Nr(h), b = h.getBoundingClientRect(), x = it(h), w = b.left + (h.clientLeft + parseFloat(x.paddingLeft)) * g.x, _ = b.top + (h.clientTop + parseFloat(x.paddingTop)) * g.y;
      c *= g.x, l *= g.y, d *= g.x, p *= g.y, c += w, l += _, y = We(h), h = Ql(y);
    }
  }
  return Ho({
    width: d,
    height: p,
    x: c,
    y: l
  });
}
function Pd(e, t) {
  const r = Ta(e).scrollLeft;
  return t ? t.left + r : cr(Et(e)).left + r;
}
function yx(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Pd(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function rL(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = Et(n), s = t ? Ea(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = gt(1);
  const d = gt(0), p = wt(n);
  if ((p || !p && !a) && ((Yr(n) !== "body" || Gn(i)) && (c = Ta(n)), wt(n))) {
    const v = cr(n);
    l = Nr(n), d.x = v.x + n.clientLeft, d.y = v.y + n.clientTop;
  }
  const m = i && !p && !a ? yx(i, c, !0) : gt(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + d.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + d.y + m.y
  };
}
function nL(e) {
  return Array.from(e.getClientRects());
}
function oL(e) {
  const t = Et(e), r = Ta(e), n = e.ownerDocument.body, o = Be(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Be(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Pd(e);
  const s = -r.scrollTop;
  return it(n).direction === "rtl" && (i += Be(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function aL(e, t) {
  const r = We(e), n = Et(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Sd();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function iL(e, t) {
  const r = cr(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = wt(e) ? Nr(e) : gt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Iv(e, t, r) {
  let n;
  if (t === "viewport")
    n = aL(e, r);
  else if (t === "document")
    n = oL(Et(e));
  else if (at(t))
    n = iL(t, r);
  else {
    const o = gx(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ho(n);
}
function bx(e, t) {
  const r = Vt(e);
  return r === t || !at(r) || kr(r) ? !1 : it(r).position === "fixed" || bx(r, t);
}
function sL(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = En(e, [], !1).filter((s) => at(s) && Yr(s) !== "body"), o = null;
  const a = it(e).position === "fixed";
  let i = a ? Vt(e) : e;
  for (; at(i) && !kr(i); ) {
    const s = it(i), c = _d(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Gn(i) && !c && bx(e, i)) ? n = n.filter((d) => d !== i) : o = s, i = Vt(i);
  }
  return t.set(e, n), n;
}
function cL(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? Ea(t) ? [] : sL(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((l, d) => {
    const p = Iv(t, d, o);
    return l.top = Be(p.top, l.top), l.right = Wt(p.right, l.right), l.bottom = Wt(p.bottom, l.bottom), l.left = Be(p.left, l.left), l;
  }, Iv(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function lL(e) {
  const {
    width: t,
    height: r
  } = vx(e);
  return {
    width: t,
    height: r
  };
}
function uL(e, t, r) {
  const n = wt(t), o = Et(t), a = r === "fixed", i = cr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = gt(0);
  if (n || !n && !a)
    if ((Yr(t) !== "body" || Gn(o)) && (s = Ta(t)), n) {
      const m = cr(t, !0, a, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else o && (c.x = Pd(o));
  const l = o && !n && !a ? yx(o, s) : gt(0), d = i.left + s.scrollLeft - c.x - l.x, p = i.top + s.scrollTop - c.y - l.y;
  return {
    x: d,
    y: p,
    width: i.width,
    height: i.height
  };
}
function hl(e) {
  return it(e).position === "static";
}
function kv(e, t) {
  if (!wt(e) || it(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Et(e) === r && (r = r.ownerDocument.body), r;
}
function xx(e, t) {
  const r = We(e);
  if (Ea(e))
    return r;
  if (!wt(e)) {
    let o = Vt(e);
    for (; o && !kr(o); ) {
      if (at(o) && !hl(o))
        return o;
      o = Vt(o);
    }
    return r;
  }
  let n = kv(e, t);
  for (; n && Zk(n) && hl(n); )
    n = kv(n, t);
  return n && kr(n) && hl(n) && !_d(n) ? r : n || Jk(e) || r;
}
const dL = async function(e) {
  const t = this.getOffsetParent || xx, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: uL(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function fL(e) {
  return it(e).direction === "rtl";
}
const pL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rL,
  getDocumentElement: Et,
  getClippingRect: cL,
  getOffsetParent: xx,
  getElementRects: dL,
  getClientRects: nL,
  getDimensions: lL,
  getScale: Nr,
  isElement: at,
  isRTL: fL
};
function wx(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function mL(e, t) {
  let r = null, n;
  const o = Et(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: d,
      top: p,
      width: m,
      height: v
    } = l;
    if (s || t(), !m || !v)
      return;
    const y = vo(p), h = vo(o.clientWidth - (d + m)), g = vo(o.clientHeight - (p + v)), b = vo(d), w = {
      rootMargin: -y + "px " + -h + "px " + -g + "px " + -b + "px",
      threshold: Be(0, Wt(1, c)) || 1
    };
    let _ = !0;
    function C(S) {
      const P = S[0].intersectionRatio;
      if (P !== c) {
        if (!_)
          return i();
        P ? i(!1, P) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !wx(l, e.getBoundingClientRect()) && i(), _ = !1;
    }
    try {
      r = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(C, w);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function hL(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Cd(e), d = o || a ? [...l ? En(l) : [], ...En(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", r, {
      passive: !0
    }), a && b.addEventListener("resize", r);
  });
  const p = l && s ? mL(l, r) : null;
  let m = -1, v = null;
  i && (v = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), r();
  }), l && !c && v.observe(l), v.observe(t));
  let y, h = c ? cr(e) : null;
  c && g();
  function g() {
    const b = cr(e);
    h && !wx(h, b) && r(), h = b, y = requestAnimationFrame(g);
  }
  return r(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", r), a && x.removeEventListener("resize", r);
    }), p == null || p(), (b = v) == null || b.disconnect(), v = null, c && cancelAnimationFrame(y);
  };
}
const vL = Kk, gL = Yk, yL = zk, bL = Qk, xL = Gk, Lv = Vk, wL = Xk, _L = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: pL,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return Hk(e, t, {
    ...o,
    platform: a
  });
};
var So = typeof document < "u" ? Yv : Ge;
function Vo(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Vo(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && e.$$typeof) && !Vo(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _x(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $v(e, t) {
  const r = _x(e);
  return Math.round(t * r) / r;
}
function vl(e) {
  const t = f.useRef(e);
  return So(() => {
    t.current = e;
  }), t;
}
function SL(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [d, p] = f.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = f.useState(n);
  Vo(m, n) || v(n);
  const [y, h] = f.useState(null), [g, b] = f.useState(null), x = f.useCallback((A) => {
    A !== S.current && (S.current = A, h(A));
  }, []), w = f.useCallback((A) => {
    A !== P.current && (P.current = A, b(A));
  }, []), _ = a || y, C = i || g, S = f.useRef(null), P = f.useRef(null), R = f.useRef(d), T = c != null, I = vl(c), O = vl(o), W = vl(l), F = f.useCallback(() => {
    if (!S.current || !P.current)
      return;
    const A = {
      placement: t,
      strategy: r,
      middleware: m
    };
    O.current && (A.platform = O.current), _L(S.current, P.current, A).then(($) => {
      const re = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      N.current && !Vo(R.current, re) && (R.current = re, Mn.flushSync(() => {
        p(re);
      }));
    });
  }, [m, t, r, O, W]);
  So(() => {
    l === !1 && R.current.isPositioned && (R.current.isPositioned = !1, p((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const N = f.useRef(!1);
  So(() => (N.current = !0, () => {
    N.current = !1;
  }), []), So(() => {
    if (_ && (S.current = _), C && (P.current = C), _ && C) {
      if (I.current)
        return I.current(_, C, F);
      F();
    }
  }, [_, C, F, I, T]);
  const L = f.useMemo(() => ({
    reference: S,
    floating: P,
    setReference: x,
    setFloating: w
  }), [x, w]), D = f.useMemo(() => ({
    reference: _,
    floating: C
  }), [_, C]), k = f.useMemo(() => {
    const A = {
      position: r,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return A;
    const $ = $v(D.floating, d.x), re = $v(D.floating, d.y);
    return s ? {
      ...A,
      transform: "translate(" + $ + "px, " + re + "px)",
      ..._x(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: $,
      top: re
    };
  }, [r, s, D.floating, d.x, d.y]);
  return f.useMemo(() => ({
    ...d,
    update: F,
    refs: L,
    elements: D,
    floatingStyles: k
  }), [d, F, L, D, k]);
}
const CL = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? Lv({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Lv({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, PL = (e, t) => ({
  ...vL(e),
  options: [e, t]
}), EL = (e, t) => ({
  ...gL(e),
  options: [e, t]
}), TL = (e, t) => ({
  ...wL(e),
  options: [e, t]
}), NL = (e, t) => ({
  ...yL(e),
  options: [e, t]
}), RL = (e, t) => ({
  ...bL(e),
  options: [e, t]
}), ML = (e, t) => ({
  ...xL(e),
  options: [e, t]
}), AL = (e, t) => ({
  ...CL(e),
  options: [e, t]
});
var OL = "Arrow", Sx = f.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ u.jsx(
    V.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Sx.displayName = OL;
var jL = Sx, Ed = "Popper", [Cx, Ut] = Te(Ed), [DL, Px] = Cx(Ed), Ex = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = f.useState(null);
  return /* @__PURE__ */ u.jsx(DL, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Ex.displayName = Ed;
var Tx = "PopperAnchor", Nx = f.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = Px(Tx, r), i = f.useRef(null), s = ie(t, i);
    return f.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ u.jsx(V.div, { ...o, ref: s });
  }
);
Nx.displayName = Tx;
var Td = "PopperContent", [IL, kL] = Cx(Td), Rx = f.forwardRef(
  (e, t) => {
    var B, te, se, ae, ne, H;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: y,
      ...h
    } = e, g = Px(Td, r), [b, x] = f.useState(null), w = ie(t, (le) => x(le)), [_, C] = f.useState(null), S = Sa(_), P = (S == null ? void 0 : S.width) ?? 0, R = (S == null ? void 0 : S.height) ?? 0, T = n + (a !== "center" ? "-" + a : ""), I = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, O = Array.isArray(l) ? l : [l], W = O.length > 0, F = {
      padding: I,
      boundary: O.filter($L),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: N, floatingStyles: L, placement: D, isPositioned: k, middlewareData: A } = SL({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...le) => hL(...le, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        PL({ mainAxis: o + R, alignmentAxis: i }),
        c && EL({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? TL() : void 0,
          ...F
        }),
        c && NL({ ...F }),
        RL({
          ...F,
          apply: ({ elements: le, rects: z, availableWidth: ge, availableHeight: Se }) => {
            const { width: Ne, height: He } = z.reference, De = le.floating.style;
            De.setProperty("--radix-popper-available-width", `${ge}px`), De.setProperty("--radix-popper-available-height", `${Se}px`), De.setProperty("--radix-popper-anchor-width", `${Ne}px`), De.setProperty("--radix-popper-anchor-height", `${He}px`);
          }
        }),
        _ && AL({ element: _, padding: s }),
        FL({ arrowWidth: P, arrowHeight: R }),
        m && ML({ strategy: "referenceHidden", ...F })
      ]
    }), [$, re] = Ox(D), ee = pe(y);
    Pe(() => {
      k && (ee == null || ee());
    }, [k, ee]);
    const j = (B = A.arrow) == null ? void 0 : B.x, G = (te = A.arrow) == null ? void 0 : te.y, Y = ((se = A.arrow) == null ? void 0 : se.centerOffset) !== 0, [U, oe] = f.useState();
    return Pe(() => {
      b && oe(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...L,
          transform: k ? L.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U,
          "--radix-popper-transform-origin": [
            (ae = A.transformOrigin) == null ? void 0 : ae.x,
            (ne = A.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = A.hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          IL,
          {
            scope: r,
            placedSide: $,
            onArrowChange: C,
            arrowX: j,
            arrowY: G,
            shouldHideArrow: Y,
            children: /* @__PURE__ */ u.jsx(
              V.div,
              {
                "data-side": $,
                "data-align": re,
                ...h,
                ref: w,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: k ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Rx.displayName = Td;
var Mx = "PopperArrow", LL = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ax = f.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = kL(Mx, n), i = LL[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          jL,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Ax.displayName = Mx;
function $L(e) {
  return e !== null;
}
var FL = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, b, x;
    const { placement: r, rects: n, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, d] = Ox(r), p = { start: "0%", center: "50%", end: "100%" }[d], m = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + s / 2, v = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let y = "", h = "";
    return l === "bottom" ? (y = i ? p : `${m}px`, h = `${-c}px`) : l === "top" ? (y = i ? p : `${m}px`, h = `${n.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, h = i ? p : `${v}px`) : l === "left" && (y = `${n.floating.width + c}px`, h = i ? p : `${v}px`), { data: { x: y, y: h } };
  }
});
function Ox(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Un = Ex, Kn = Nx, Na = Rx, Ra = Ax, Nd = "Popover", [jx, RW] = Te(Nd, [
  Ut
]), Yn = Ut(), [qL, Kt] = jx(Nd), Dx = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Yn(t), c = f.useRef(null), [l, d] = f.useState(!1), [p = !1, m] = Re({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ u.jsx(Un, { ...s, children: /* @__PURE__ */ u.jsx(
    qL,
    {
      scope: t,
      contentId: _e(),
      triggerRef: c,
      open: p,
      onOpenChange: m,
      onOpenToggle: f.useCallback(() => m((v) => !v), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: f.useCallback(() => d(!0), []),
      onCustomAnchorRemove: f.useCallback(() => d(!1), []),
      modal: i,
      children: r
    }
  ) });
};
Dx.displayName = Nd;
var Ix = "PopoverAnchor", BL = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Kt(Ix, r), a = Yn(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return f.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ u.jsx(Kn, { ...a, ...n, ref: t });
  }
);
BL.displayName = Ix;
var kx = "PopoverTrigger", Lx = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Kt(kx, r), a = Yn(r), i = ie(t, o.triggerRef), s = /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Wx(o.open),
        ...n,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ u.jsx(Kn, { asChild: !0, ...a, children: s });
  }
);
Lx.displayName = kx;
var Rd = "PopoverPortal", [WL, HL] = jx(Rd, {
  forceMount: void 0
}), $x = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = Kt(Rd, t);
  return /* @__PURE__ */ u.jsx(WL, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(we, { present: r || a.open, children: /* @__PURE__ */ u.jsx(pr, { asChild: !0, container: o, children: n }) }) });
};
$x.displayName = Rd;
var Lr = "PopoverContent", Fx = f.forwardRef(
  (e, t) => {
    const r = HL(Lr, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = Kt(Lr, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(we, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(VL, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(zL, { ...o, ref: t }) });
  }
);
Fx.displayName = Lr;
var VL = f.forwardRef(
  (e, t) => {
    const r = Kt(Lr, e.__scopePopover), n = f.useRef(null), o = ie(t, n), a = f.useRef(!1);
    return f.useEffect(() => {
      const i = n.current;
      if (i) return ca(i);
    }, []), /* @__PURE__ */ u.jsx(Dn, { as: bt, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      qx,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = r.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: q(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), zL = f.forwardRef(
  (e, t) => {
    const r = Kt(Lr, e.__scopePopover), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      qx,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (n.current || (s = r.triggerRef.current) == null || s.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((l = r.triggerRef.current) == null ? void 0 : l.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), qx = f.forwardRef(
  (e, t) => {
    const {
      __scopePopover: r,
      trapFocus: n,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: d,
      ...p
    } = e, m = Kt(Lr, r), v = Yn(r);
    return ia(), /* @__PURE__ */ u.jsx(
      jn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ u.jsx(
          zt,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              Na,
              {
                "data-state": Wx(m.open),
                role: "dialog",
                id: m.contentId,
                ...v,
                ...p,
                ref: t,
                style: {
                  ...p.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Bx = "PopoverClose", GL = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Kt(Bx, r);
    return /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
GL.displayName = Bx;
var UL = "PopoverArrow", KL = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Yn(r);
    return /* @__PURE__ */ u.jsx(Ra, { ...o, ...n, ref: t });
  }
);
KL.displayName = UL;
function Wx(e) {
  return e ? "open" : "closed";
}
var YL = Dx, XL = Lx, QL = $x, Hx = Fx;
const Md = YL, Ad = XL, Ma = f.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ u.jsx(QL, { children: /* @__PURE__ */ u.jsx(
  Hx,
  {
    ref: o,
    align: t,
    sideOffset: r,
    className: M(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Ma.displayName = Hx.displayName;
function MW({ value: e, onChange: t }) {
  const [r, n] = f.useState(e);
  function o(a) {
    n(a), t == null || t(a);
  }
  return /* @__PURE__ */ u.jsxs(Md, { children: [
    /* @__PURE__ */ u.jsx(Ad, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      Gr,
      {
        variant: "outline",
        className: M(
          "w-full justify-start text-left font-normal",
          !r && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ u.jsx(yg, { className: "mr-2" }),
          r ? Ct(r, "PPP", { locale: un }) : /* @__PURE__ */ u.jsx("span", { children: "Selecione uma data" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(Ma, { className: "w-auto p-0", children: /* @__PURE__ */ u.jsx(
      rb,
      {
        required: !0,
        mode: "single",
        selected: r,
        onSelect: o,
        initialFocus: !0
      }
    ) })
  ] });
}
function ZL(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function JL(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function e$(e) {
  return /^[0-5][0-9]$/.test(e);
}
function Aa(e, { max: t, min: r = 0, loop: n = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (n ? (o > t && (o = r), o < r && (o = t)) : (o > t && (o = t), o < r && (o = r)), o.toString().padStart(2, "0"));
}
function Vx(e) {
  return ZL(e) ? e : Aa(e, { max: 23 });
}
function zx(e) {
  return JL(e) ? e : Aa(e, { min: 1, max: 12 });
}
function zo(e) {
  return e$(e) ? e : Aa(e, { max: 59 });
}
function Od(e, { min: t, max: r, step: n }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += n, Aa(String(o), { min: t, max: r, loop: !0 }));
}
function t$(e, t) {
  return Od(e, { min: 0, max: 23, step: t });
}
function r$(e, t) {
  return Od(e, { min: 1, max: 12, step: t });
}
function Fv(e, t) {
  return Od(e, { min: 0, max: 59, step: t });
}
function n$(e, t) {
  const r = zo(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function o$(e, t) {
  const r = zo(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function a$(e, t) {
  const r = Vx(t);
  return e.setHours(parseInt(r, 10)), e;
}
function i$(e, t, r) {
  const n = parseInt(zx(t), 10), o = l$(n, r);
  return e.setHours(o), e;
}
function Zl(e, t, r, n) {
  switch (r) {
    case "minutes":
      return n$(e, t);
    case "seconds":
      return o$(e, t);
    case "hours":
      return a$(e, t);
    case "12hours":
      return n ? i$(e, t, n) : e;
    default:
      return e;
  }
}
function s$(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return zo(String(e.getMinutes()));
    case "seconds":
      return zo(String(e.getSeconds()));
    case "hours":
      return Vx(String(e.getHours()));
    case "12hours":
      return zx(String(Gx(e.getHours())));
    default:
      return "00";
  }
}
function c$(e, t, r) {
  switch (r) {
    case "minutes":
      return Fv(e, t);
    case "seconds":
      return Fv(e, t);
    case "hours":
      return t$(e, t);
    case "12hours":
      return r$(e, t);
    default:
      return "00";
  }
}
function l$(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function Gx(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function u$(e) {
  return Array.from({ length: 12 }, (t, r) => ({
    value: r,
    label: Ct(new Date(2021, r), "MMMM", { locale: e })
  }));
}
function d$(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (r, n) => ({
    value: t.getFullYear() - e + n,
    label: (t.getFullYear() - e + n).toString()
  }));
}
function Ux({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  yearRange: n = 50,
  ...o
}) {
  const a = f.useMemo(() => {
    let l = un;
    const { options: d, localize: p, formatLong: m } = o.locale || {};
    return d && p && m && (l = {
      options: d,
      localize: p,
      formatLong: m
    }), u$(l);
  }, []), i = f.useMemo(() => d$(n), []), s = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() - n, 0, 1);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  }, c = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() + n, 11, 31);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  };
  return /* @__PURE__ */ u.jsx(
    eb,
    {
      showOutsideDays: r,
      className: M("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4  sm:space-y-0 justify-center",
        month: "flex flex-col items-center space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center ",
        button_previous: M(
          vt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-5 top-5",
          s() && "pointer-events-none"
        ),
        button_next: M(
          vt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-5 top-5",
          c() && "pointer-events-none"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: M("flex", o.showWeekNumber && "justify-end"),
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
        day_button: M(
          vt({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-l-md rounded-r-md"
        ),
        range_end: "day-range-end",
        selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-l-md rounded-r-md",
        today: "bg-accent text-accent-foreground",
        outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...t
      },
      components: {
        Chevron: ({ ...l }) => l.orientation === "left" ? /* @__PURE__ */ u.jsx(Tu, { className: "h-4 w-4" }) : /* @__PURE__ */ u.jsx(On, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: l }) => /* @__PURE__ */ u.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ u.jsxs(
            du,
            {
              defaultValue: l.date.getMonth().toString(),
              onValueChange: (d) => {
                var m;
                const p = new Date(l.date);
                p.setMonth(Number.parseInt(d, 10)), (m = o.onMonthChange) == null || m.call(o, p);
              },
              children: [
                /* @__PURE__ */ u.jsx(Zo, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(fu, {}) }),
                /* @__PURE__ */ u.jsx(Jo, { children: a.map((d) => /* @__PURE__ */ u.jsx(
                  Rn,
                  {
                    value: d.value.toString(),
                    children: d.label
                  },
                  d.value
                )) })
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs(
            du,
            {
              defaultValue: l.date.getFullYear().toString(),
              onValueChange: (d) => {
                var m;
                const p = new Date(l.date);
                p.setFullYear(Number.parseInt(d, 10)), (m = o.onMonthChange) == null || m.call(o, p);
              },
              children: [
                /* @__PURE__ */ u.jsx(Zo, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(fu, {}) }),
                /* @__PURE__ */ u.jsx(Jo, { children: i.map((d) => /* @__PURE__ */ u.jsx(
                  Rn,
                  {
                    value: d.value.toString(),
                    children: d.label
                  },
                  d.value
                )) })
              ]
            }
          )
        ] })
      },
      ...o
    }
  );
}
Ux.displayName = "Calendar";
const Kx = f.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: n, onLeftFocus: o, onRightFocus: a }, i) => {
    const s = (l) => {
      l.key === "ArrowRight" && (a == null || a()), l.key === "ArrowLeft" && (o == null || o());
    }, c = (l) => {
      if (t == null || t(l), r) {
        const d = new Date(r), p = Gx(r.getHours());
        n == null || n(
          Zl(
            d,
            p.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ u.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ u.jsxs(
      du,
      {
        defaultValue: e,
        onValueChange: (l) => c(l),
        children: [
          /* @__PURE__ */ u.jsx(
            Zo,
            {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: /* @__PURE__ */ u.jsx(fu, {})
            }
          ),
          /* @__PURE__ */ u.jsxs(Jo, { children: [
            /* @__PURE__ */ u.jsx(Rn, { value: "AM", children: "AM" }),
            /* @__PURE__ */ u.jsx(Rn, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Kx.displayName = "TimePeriodSelect";
const Co = f.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: r,
    id: n,
    name: o,
    date: a = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    onDateChange: i,
    onChange: s,
    onKeyDown: c,
    picker: l,
    period: d,
    onLeftFocus: p,
    onRightFocus: m,
    ...v
  }, y) => {
    const [h, g] = f.useState(!1), [b, x] = f.useState("0");
    f.useEffect(() => {
      if (h) {
        const S = setTimeout(() => {
          g(!1);
        }, 2e3);
        return () => clearTimeout(S);
      }
    }, [h]);
    const w = f.useMemo(() => s$(a, l), [a, l]), _ = (S) => l === "12hours" && h && w.slice(1, 2) === "1" && b === "0" ? `0${S}` : h ? w.slice(1, 2) + S : `0${S}`, C = (S) => {
      if (S.key !== "Tab") {
        if (S.preventDefault(), S.key === "ArrowRight" && (m == null || m()), S.key === "ArrowLeft" && (p == null || p()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const P = S.key === "ArrowUp" ? 1 : -1, R = c$(w, P, l);
          h && g(!1);
          const T = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(Zl(T, R, l, d));
        }
        if (S.key >= "0" && S.key <= "9") {
          l === "12hours" && x(S.key);
          const P = _(S.key);
          h && (m == null || m()), g((T) => !T);
          const R = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(Zl(R, P, l, d));
        }
      }
    };
    return /* @__PURE__ */ u.jsx(
      Wd,
      {
        ref: y,
        id: n || l,
        name: o || l,
        className: M(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: r || w,
        onChange: (S) => {
          S.preventDefault(), s == null || s(S);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (S) => {
          c == null || c(S), C(S);
        },
        ...v
      }
    );
  }
);
Co.displayName = "TimePickerInput";
const Yx = f.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: n = "second" }, o) => {
    const a = f.useRef(null), i = f.useRef(null), s = f.useRef(null), c = f.useRef(null), [l, d] = f.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return yu(
      o,
      () => ({
        minuteRef: a.current,
        hourRef: i.current,
        secondRef: s.current,
        periodRef: c.current
      }),
      [a, i, s]
    ), /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ u.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ u.jsx(hP, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ u.jsx(
        Co,
        {
          picker: r === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: i,
          period: l,
          onRightFocus: () => {
            var p;
            return (p = a == null ? void 0 : a.current) == null ? void 0 : p.focus();
          }
        }
      ),
      (n === "minute" || n === "second") && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        ":",
        /* @__PURE__ */ u.jsx(
          Co,
          {
            picker: "minutes",
            date: e,
            onDateChange: t,
            ref: a,
            onLeftFocus: () => {
              var p;
              return (p = i == null ? void 0 : i.current) == null ? void 0 : p.focus();
            },
            onRightFocus: () => {
              var p;
              return (p = s == null ? void 0 : s.current) == null ? void 0 : p.focus();
            }
          }
        )
      ] }),
      n === "second" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        ":",
        /* @__PURE__ */ u.jsx(
          Co,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: s,
            onLeftFocus: () => {
              var p;
              return (p = a == null ? void 0 : a.current) == null ? void 0 : p.focus();
            },
            onRightFocus: () => {
              var p;
              return (p = c == null ? void 0 : c.current) == null ? void 0 : p.focus();
            }
          }
        )
      ] }),
      r === 12 && /* @__PURE__ */ u.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ u.jsx(
        Kx,
        {
          period: l,
          setPeriod: d,
          date: e,
          onDateChange: (p) => {
            t == null || t(p), p && (p == null ? void 0 : p.getHours()) >= 12 ? d("PM") : d("AM");
          },
          ref: c,
          onLeftFocus: () => {
            var p;
            return (p = s == null ? void 0 : s.current) == null ? void 0 : p.focus();
          }
        }
      ) })
    ] });
  }
);
Yx.displayName = "TimePicker";
const f$ = f.forwardRef(
  ({
    locale: e = un,
    defaultPopupValue: t = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    value: r,
    onChange: n,
    hourCycle: o = 24,
    yearRange: a = 50,
    disabled: i = !1,
    displayFormat: s,
    granularity: c = "second",
    placeholder: l = "Selecione...",
    className: d,
    ...p
  }, m) => {
    const [v, y] = f.useState(r ?? t), h = Rr(null), [g, b] = f.useState(
      r
    ), x = (T) => {
      if (!T)
        return;
      if (!t) {
        T.setHours(
          (v == null ? void 0 : v.getHours()) ?? 0,
          (v == null ? void 0 : v.getMinutes()) ?? 0,
          (v == null ? void 0 : v.getSeconds()) ?? 0
        ), n == null || n(T), y(T);
        return;
      }
      const O = (T.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), W = fN(t, {
        days: Math.ceil(O)
      });
      W.setHours(
        (v == null ? void 0 : v.getHours()) ?? 0,
        (v == null ? void 0 : v.getMinutes()) ?? 0,
        (v == null ? void 0 : v.getSeconds()) ?? 0
      ), n == null || n(W), y(W);
    };
    Ge(() => {
      r || b(void 0);
    }, [r]);
    const w = (T) => {
      T && (n == null || n(T), y(T), b(T));
    };
    yu(
      m,
      () => ({
        ...h.current,
        value: g
      }),
      [g]
    );
    const _ = {
      hour24: (s == null ? void 0 : s.hour24) ?? `PPP HH:mm${!c || c === "second" ? ":ss" : ""}`,
      hour12: (s == null ? void 0 : s.hour12) ?? `PP hh:mm${!c || c === "second" ? ":ss" : ""} b`
    };
    let C = un;
    const { options: S, localize: P, formatLong: R } = e;
    return S && P && R && (C = {
      ...un,
      options: S,
      localize: P,
      formatLong: R
    }), /* @__PURE__ */ u.jsxs(Md, { children: [
      /* @__PURE__ */ u.jsx(Ad, { asChild: !0, disabled: i, children: /* @__PURE__ */ u.jsxs(
        Gr,
        {
          variant: "outline",
          className: M(
            "w-full justify-start text-left font-normal",
            !g && "text-muted-foreground",
            d
          ),
          ref: h,
          children: [
            /* @__PURE__ */ u.jsx(yg, { className: "mr-2 h-4 w-4" }),
            /* @__PURE__ */ u.jsx("span", { className: "truncate block", title: l, children: g ? Ct(
              g,
              o === 24 ? _.hour24 : _.hour12,
              {
                locale: C
              }
            ) : /* @__PURE__ */ u.jsx("span", { children: l }) })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsxs(Ma, { className: "w-auto p-0", children: [
        /* @__PURE__ */ u.jsx(
          Ux,
          {
            mode: "single",
            selected: g,
            month: v,
            onSelect: (T) => {
              T && (T.setHours(
                (v == null ? void 0 : v.getHours()) ?? 0,
                (v == null ? void 0 : v.getMinutes()) ?? 0,
                (v == null ? void 0 : v.getSeconds()) ?? 0
              ), w(T));
            },
            onMonthChange: x,
            yearRange: a,
            locale: e,
            ...p
          }
        ),
        c !== "day" && /* @__PURE__ */ u.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ u.jsx(
          Yx,
          {
            onChange: (T) => {
              n == null || n(T), b(T), T && y(T);
            },
            date: v,
            hourCycle: o,
            granularity: c
          }
        ) })
      ] })
    ] });
  }
);
f$.displayName = "DateTimePicker";
const p$ = la, AW = Du, m$ = ua, OW = zr, Xx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Hr,
  {
    ref: r,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Xx.displayName = Hr.displayName;
const Qx = f.forwardRef(({ className: e, onClose: t, ...r }, n) => /* @__PURE__ */ u.jsxs(m$, { children: [
  /* @__PURE__ */ u.jsx(Xx, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ u.jsxs(
    Vr,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          zr,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ u.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ u.jsx(aa, { className: "h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
Qx.displayName = Vr.displayName;
const h$ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
h$.displayName = "DialogHeader";
const v$ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
v$.displayName = "DialogFooter";
const g$ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  In,
  {
    ref: r,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
g$.displayName = In.displayName;
const y$ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  kn,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
y$.displayName = kn.displayName;
var gl = "rovingFocusGroup.onEntryFocus", b$ = { bubbles: !1, cancelable: !0 }, Oa = "RovingFocusGroup", [Jl, Zx, x$] = fr(Oa), [w$, Yt] = Te(
  Oa,
  [x$]
), [_$, S$] = w$(Oa), Jx = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(Jl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Jl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(C$, { ...e, ref: t }) }) })
);
Jx.displayName = Oa;
var C$ = f.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: d = !1,
    ...p
  } = e, m = f.useRef(null), v = ie(t, m), y = Dt(a), [h = null, g] = Re({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [b, x] = f.useState(!1), w = pe(l), _ = Zx(r), C = f.useRef(!1), [S, P] = f.useState(0);
  return f.useEffect(() => {
    const R = m.current;
    if (R)
      return R.addEventListener(gl, w), () => R.removeEventListener(gl, w);
  }, [w]), /* @__PURE__ */ u.jsx(
    _$,
    {
      scope: r,
      orientation: n,
      dir: y,
      loop: o,
      currentTabStopId: h,
      onItemFocus: f.useCallback(
        (R) => g(R),
        [g]
      ),
      onItemShiftTab: f.useCallback(() => x(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => P((R) => R + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => P((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        V.div,
        {
          tabIndex: b || S === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: q(e.onFocus, (R) => {
            const T = !C.current;
            if (R.target === R.currentTarget && T && !b) {
              const I = new CustomEvent(gl, b$);
              if (R.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const O = _().filter((D) => D.focusable), W = O.find((D) => D.active), F = O.find((D) => D.id === h), L = [W, F, ...O].filter(
                  Boolean
                ).map((D) => D.ref.current);
                rw(L, d);
              }
            }
            C.current = !1;
          }),
          onBlur: q(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), ew = "RovingFocusGroupItem", tw = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      ...i
    } = e, s = _e(), c = a || s, l = S$(ew, r), d = l.currentTabStopId === c, p = Zx(r), { onFocusableItemAdd: m, onFocusableItemRemove: v } = l;
    return f.useEffect(() => {
      if (n)
        return m(), () => v();
    }, [n, m, v]), /* @__PURE__ */ u.jsx(
      Jl.ItemSlot,
      {
        scope: r,
        id: c,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          V.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": l.orientation,
            ...i,
            ref: t,
            onMouseDown: q(e.onMouseDown, (y) => {
              n ? l.onItemFocus(c) : y.preventDefault();
            }),
            onFocus: q(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: q(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const h = T$(y, l.orientation, l.dir);
              if (h !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let b = p().filter((x) => x.focusable).map((x) => x.ref.current);
                if (h === "last") b.reverse();
                else if (h === "prev" || h === "next") {
                  h === "prev" && b.reverse();
                  const x = b.indexOf(y.currentTarget);
                  b = l.loop ? N$(b, x + 1) : b.slice(x + 1);
                }
                setTimeout(() => rw(b));
              }
            })
          }
        )
      }
    );
  }
);
tw.displayName = ew;
var P$ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function E$(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function T$(e, t, r) {
  const n = E$(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return P$[n];
}
function rw(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function N$(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var ja = Jx, Da = tw, eu = ["Enter", " "], R$ = ["ArrowDown", "PageUp", "Home"], nw = ["ArrowUp", "PageDown", "End"], M$ = [...R$, ...nw], A$ = {
  ltr: [...eu, "ArrowRight"],
  rtl: [...eu, "ArrowLeft"]
}, O$ = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Xn = "Menu", [Tn, j$, D$] = fr(Xn), [gr, ow] = Te(Xn, [
  D$,
  Ut,
  Yt
]), Qn = Ut(), aw = Yt(), [iw, Xt] = gr(Xn), [I$, Zn] = gr(Xn), sw = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Qn(t), [c, l] = f.useState(null), d = f.useRef(!1), p = pe(a), m = Dt(o);
  return f.useEffect(() => {
    const v = () => {
      d.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => d.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(Un, { ...s, children: /* @__PURE__ */ u.jsx(
    iw,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u.jsx(
        I$,
        {
          scope: t,
          onClose: f.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: d,
          dir: m,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
sw.displayName = Xn;
var k$ = "MenuAnchor", jd = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Qn(r);
    return /* @__PURE__ */ u.jsx(Kn, { ...o, ...n, ref: t });
  }
);
jd.displayName = k$;
var Dd = "MenuPortal", [L$, cw] = gr(Dd, {
  forceMount: void 0
}), lw = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = Xt(Dd, t);
  return /* @__PURE__ */ u.jsx(L$, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(we, { present: r || a.open, children: /* @__PURE__ */ u.jsx(pr, { asChild: !0, container: o, children: n }) }) });
};
lw.displayName = Dd;
var Ue = "MenuContent", [$$, Id] = gr(Ue), uw = f.forwardRef(
  (e, t) => {
    const r = cw(Ue, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Xt(Ue, e.__scopeMenu), i = Zn(Ue, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(Tn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(we, { present: n || a.open, children: /* @__PURE__ */ u.jsx(Tn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ u.jsx(F$, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(q$, { ...o, ref: t }) }) }) });
  }
), F$ = f.forwardRef(
  (e, t) => {
    const r = Xt(Ue, e.__scopeMenu), n = f.useRef(null), o = ie(t, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return ca(a);
    }, []), /* @__PURE__ */ u.jsx(
      kd,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), q$ = f.forwardRef((e, t) => {
  const r = Xt(Ue, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    kd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), kd = f.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: d,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: v,
      disableOutsideScroll: y,
      ...h
    } = e, g = Xt(Ue, r), b = Zn(Ue, r), x = Qn(r), w = aw(r), _ = j$(r), [C, S] = f.useState(null), P = f.useRef(null), R = ie(t, P, g.onContentChange), T = f.useRef(0), I = f.useRef(""), O = f.useRef(0), W = f.useRef(null), F = f.useRef("right"), N = f.useRef(0), L = y ? Dn : f.Fragment, D = y ? { as: bt, allowPinchZoom: !0 } : void 0, k = ($) => {
      var B, te;
      const re = I.current + $, ee = _().filter((se) => !se.disabled), j = document.activeElement, G = (B = ee.find((se) => se.ref.current === j)) == null ? void 0 : B.textValue, Y = ee.map((se) => se.textValue), U = Z$(Y, re, G), oe = (te = ee.find((se) => se.textValue === U)) == null ? void 0 : te.ref.current;
      (function se(ae) {
        I.current = ae, window.clearTimeout(T.current), ae !== "" && (T.current = window.setTimeout(() => se(""), 1e3));
      })(re), oe && setTimeout(() => oe.focus());
    };
    f.useEffect(() => () => window.clearTimeout(T.current), []), ia();
    const A = f.useCallback(($) => {
      var ee, j;
      return F.current === ((ee = W.current) == null ? void 0 : ee.side) && e2($, (j = W.current) == null ? void 0 : j.area);
    }, []);
    return /* @__PURE__ */ u.jsx(
      $$,
      {
        scope: r,
        searchRef: I,
        onItemEnter: f.useCallback(
          ($) => {
            A($) && $.preventDefault();
          },
          [A]
        ),
        onItemLeave: f.useCallback(
          ($) => {
            var re;
            A($) || ((re = P.current) == null || re.focus(), S(null));
          },
          [A]
        ),
        onTriggerLeave: f.useCallback(
          ($) => {
            A($) && $.preventDefault();
          },
          [A]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: f.useCallback(($) => {
          W.current = $;
        }, []),
        children: /* @__PURE__ */ u.jsx(L, { ...D, children: /* @__PURE__ */ u.jsx(
          jn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(a, ($) => {
              var re;
              $.preventDefault(), (re = P.current) == null || re.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ u.jsx(
              zt,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: v,
                children: /* @__PURE__ */ u.jsx(
                  ja,
                  {
                    asChild: !0,
                    ...w,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: q(c, ($) => {
                      b.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      Na,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Tw(g.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...x,
                        ...h,
                        ref: R,
                        style: { outline: "none", ...h.style },
                        onKeyDown: q(h.onKeyDown, ($) => {
                          const ee = $.target.closest("[data-radix-menu-content]") === $.currentTarget, j = $.ctrlKey || $.altKey || $.metaKey, G = $.key.length === 1;
                          ee && ($.key === "Tab" && $.preventDefault(), !j && G && k($.key));
                          const Y = P.current;
                          if ($.target !== Y || !M$.includes($.key)) return;
                          $.preventDefault();
                          const oe = _().filter((B) => !B.disabled).map((B) => B.ref.current);
                          nw.includes($.key) && oe.reverse(), X$(oe);
                        }),
                        onBlur: q(e.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(T.current), I.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          Nn(($) => {
                            const re = $.target, ee = N.current !== $.clientX;
                            if ($.currentTarget.contains(re) && ee) {
                              const j = $.clientX > N.current ? "right" : "left";
                              F.current = j, N.current = $.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
uw.displayName = Ue;
var B$ = "MenuGroup", Ld = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(V.div, { role: "group", ...n, ref: t });
  }
);
Ld.displayName = B$;
var W$ = "MenuLabel", dw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(V.div, { ...n, ref: t });
  }
);
dw.displayName = W$;
var Go = "MenuItem", qv = "menu.itemSelect", Ia = f.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = f.useRef(null), i = Zn(Go, e.__scopeMenu), s = Id(Go, e.__scopeMenu), c = ie(t, a), l = f.useRef(!1), d = () => {
      const p = a.current;
      if (!r && p) {
        const m = new CustomEvent(qv, { bubbles: !0, cancelable: !0 });
        p.addEventListener(qv, (v) => n == null ? void 0 : n(v), { once: !0 }), pn(p, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      fw,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: q(e.onClick, d),
        onPointerDown: (p) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, p), l.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (p) => {
          var m;
          l.current || (m = p.currentTarget) == null || m.click();
        }),
        onKeyDown: q(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          r || m && p.key === " " || eu.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
Ia.displayName = Go;
var fw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = Id(Go, r), s = aw(r), c = f.useRef(null), l = ie(t, c), [d, p] = f.useState(!1), [m, v] = f.useState("");
    return f.useEffect(() => {
      const y = c.current;
      y && v((y.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ u.jsx(
      Tn.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ u.jsx(Da, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ u.jsx(
          V.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: q(
              e.onPointerMove,
              Nn((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              Nn((y) => i.onItemLeave(y))
            ),
            onFocus: q(e.onFocus, () => p(!0)),
            onBlur: q(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), H$ = "MenuCheckboxItem", pw = f.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(yw, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ u.jsx(
      Ia,
      {
        role: "menuitemcheckbox",
        "aria-checked": Uo(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": qd(r),
        onSelect: q(
          o.onSelect,
          () => n == null ? void 0 : n(Uo(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
pw.displayName = H$;
var mw = "MenuRadioGroup", [V$, z$] = gr(
  mw,
  { value: void 0, onValueChange: () => {
  } }
), hw = f.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = pe(n);
    return /* @__PURE__ */ u.jsx(V$, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ u.jsx(Ld, { ...o, ref: t }) });
  }
);
hw.displayName = mw;
var vw = "MenuRadioItem", gw = f.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = z$(vw, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ u.jsx(yw, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ u.jsx(
      Ia,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": qd(a),
        onSelect: q(
          n.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, r);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
gw.displayName = vw;
var $d = "MenuItemIndicator", [yw, G$] = gr(
  $d,
  { checked: !1 }
), bw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = G$($d, r);
    return /* @__PURE__ */ u.jsx(
      we,
      {
        present: n || Uo(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          V.span,
          {
            ...o,
            ref: t,
            "data-state": qd(a.checked)
          }
        )
      }
    );
  }
);
bw.displayName = $d;
var U$ = "MenuSeparator", xw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(
      V.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
xw.displayName = U$;
var K$ = "MenuArrow", ww = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Qn(r);
    return /* @__PURE__ */ u.jsx(Ra, { ...o, ...n, ref: t });
  }
);
ww.displayName = K$;
var Fd = "MenuSub", [Y$, _w] = gr(Fd), Sw = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = Xt(Fd, t), i = Qn(t), [s, c] = f.useState(null), [l, d] = f.useState(null), p = pe(o);
  return f.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ u.jsx(Un, { ...i, children: /* @__PURE__ */ u.jsx(
    iw,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ u.jsx(
        Y$,
        {
          scope: t,
          contentId: _e(),
          triggerId: _e(),
          trigger: s,
          onTriggerChange: c,
          children: r
        }
      )
    }
  ) });
};
Sw.displayName = Fd;
var cn = "MenuSubTrigger", Cw = f.forwardRef(
  (e, t) => {
    const r = Xt(cn, e.__scopeMenu), n = Zn(cn, e.__scopeMenu), o = _w(cn, e.__scopeMenu), a = Id(cn, e.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, d = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ u.jsx(jd, { asChild: !0, ...l, children: /* @__PURE__ */ u.jsx(
      fw,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": Tw(r.open),
        ...e,
        ref: An(t, o.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          Nn((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          Nn((p) => {
            var v, y;
            d();
            const m = (v = r.content) == null ? void 0 : v.getBoundingClientRect();
            if (m) {
              const h = (y = r.content) == null ? void 0 : y.dataset.side, g = h === "right", b = g ? -5 : 5, x = m[g ? "left" : "right"], w = m[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + b, y: p.clientY },
                  { x, y: m.top },
                  { x: w, y: m.top },
                  { x: w, y: m.bottom },
                  { x, y: m.bottom }
                ],
                side: h
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: q(e.onKeyDown, (p) => {
          var v;
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || A$[n.dir].includes(p.key) && (r.onOpenChange(!0), (v = r.content) == null || v.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Cw.displayName = cn;
var Pw = "MenuSubContent", Ew = f.forwardRef(
  (e, t) => {
    const r = cw(Ue, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Xt(Ue, e.__scopeMenu), i = Zn(Ue, e.__scopeMenu), s = _w(Pw, e.__scopeMenu), c = f.useRef(null), l = ie(t, c);
    return /* @__PURE__ */ u.jsx(Tn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(we, { present: n || a.open, children: /* @__PURE__ */ u.jsx(Tn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      kd,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: l,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var p;
          i.isUsingKeyboardRef.current && ((p = c.current) == null || p.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: q(e.onFocusOutside, (d) => {
          d.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (d) => {
          var v;
          const p = d.currentTarget.contains(d.target), m = O$[i.dir].includes(d.key);
          p && m && (a.onOpenChange(!1), (v = s.trigger) == null || v.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ew.displayName = Pw;
function Tw(e) {
  return e ? "open" : "closed";
}
function Uo(e) {
  return e === "indeterminate";
}
function qd(e) {
  return Uo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function X$(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function Q$(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function Z$(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = Q$(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function J$(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, d = t[i].y;
    c > n != d > n && r < (l - s) * (n - c) / (d - c) + s && (o = !o);
  }
  return o;
}
function e2(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return J$(r, t);
}
function Nn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var t2 = sw, r2 = jd, n2 = lw, o2 = uw, a2 = Ld, i2 = dw, s2 = Ia, c2 = pw, l2 = hw, u2 = gw, d2 = bw, f2 = xw, p2 = ww, m2 = Sw, h2 = Cw, v2 = Ew, Bd = "DropdownMenu", [g2, jW] = Te(
  Bd,
  [ow]
), ke = ow(), [y2, Nw] = g2(Bd), Rw = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = ke(t), l = f.useRef(null), [d = !1, p] = Re({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ u.jsx(
    y2,
    {
      scope: t,
      triggerId: _e(),
      triggerRef: l,
      contentId: _e(),
      open: d,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ u.jsx(t2, { ...c, open: d, onOpenChange: p, dir: n, modal: s, children: r })
    }
  );
};
Rw.displayName = Bd;
var Mw = "DropdownMenuTrigger", Aw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = Nw(Mw, r), i = ke(r);
    return /* @__PURE__ */ u.jsx(r2, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...o,
        ref: An(t, a.triggerRef),
        onPointerDown: q(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Aw.displayName = Mw;
var b2 = "DropdownMenuPortal", Ow = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = ke(t);
  return /* @__PURE__ */ u.jsx(n2, { ...n, ...r });
};
Ow.displayName = b2;
var jw = "DropdownMenuContent", Dw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Nw(jw, r), a = ke(r), i = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      o2,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          var c;
          i.current || (c = o.triggerRef.current) == null || c.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || l;
          (!o.modal || d) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Dw.displayName = jw;
var x2 = "DropdownMenuGroup", Iw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
    return /* @__PURE__ */ u.jsx(a2, { ...o, ...n, ref: t });
  }
);
Iw.displayName = x2;
var w2 = "DropdownMenuLabel", kw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
    return /* @__PURE__ */ u.jsx(i2, { ...o, ...n, ref: t });
  }
);
kw.displayName = w2;
var _2 = "DropdownMenuItem", Lw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
    return /* @__PURE__ */ u.jsx(s2, { ...o, ...n, ref: t });
  }
);
Lw.displayName = _2;
var S2 = "DropdownMenuCheckboxItem", $w = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
  return /* @__PURE__ */ u.jsx(c2, { ...o, ...n, ref: t });
});
$w.displayName = S2;
var C2 = "DropdownMenuRadioGroup", Fw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
  return /* @__PURE__ */ u.jsx(l2, { ...o, ...n, ref: t });
});
Fw.displayName = C2;
var P2 = "DropdownMenuRadioItem", qw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
  return /* @__PURE__ */ u.jsx(u2, { ...o, ...n, ref: t });
});
qw.displayName = P2;
var E2 = "DropdownMenuItemIndicator", Bw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
  return /* @__PURE__ */ u.jsx(d2, { ...o, ...n, ref: t });
});
Bw.displayName = E2;
var T2 = "DropdownMenuSeparator", Ww = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
  return /* @__PURE__ */ u.jsx(f2, { ...o, ...n, ref: t });
});
Ww.displayName = T2;
var N2 = "DropdownMenuArrow", R2 = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
    return /* @__PURE__ */ u.jsx(p2, { ...o, ...n, ref: t });
  }
);
R2.displayName = N2;
var M2 = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = ke(t), [s = !1, c] = Re({
    prop: n,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ u.jsx(m2, { ...i, open: s, onOpenChange: c, children: r });
}, A2 = "DropdownMenuSubTrigger", Hw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
  return /* @__PURE__ */ u.jsx(h2, { ...o, ...n, ref: t });
});
Hw.displayName = A2;
var O2 = "DropdownMenuSubContent", Vw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ke(r);
  return /* @__PURE__ */ u.jsx(
    v2,
    {
      ...o,
      ...n,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Vw.displayName = O2;
var j2 = Rw, D2 = Aw, zw = Ow, Gw = Dw, I2 = Iw, Uw = kw, Kw = Lw, Yw = $w, k2 = Fw, Xw = qw, Qw = Bw, Zw = Ww, L2 = M2, Jw = Hw, e_ = Vw;
const DW = j2, IW = D2, kW = I2, LW = zw, $W = L2, FW = k2, $2 = f.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  Jw,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ u.jsx(On, { className: "ml-auto h-4 w-4" })
    ]
  }
));
$2.displayName = Jw.displayName;
const F2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  e_,
  {
    ref: r,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
F2.displayName = e_.displayName;
const q2 = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(zw, { children: /* @__PURE__ */ u.jsx(
  Gw,
  {
    ref: n,
    sideOffset: t,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
q2.displayName = Gw.displayName;
const B2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  Kw,
  {
    ref: n,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
B2.displayName = Kw.displayName;
const W2 = f.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  Yw,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Qw, { children: /* @__PURE__ */ u.jsx(mn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
W2.displayName = Yw.displayName;
const H2 = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  Xw,
  {
    ref: n,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Qw, { children: /* @__PURE__ */ u.jsx(bg, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
H2.displayName = Xw.displayName;
const V2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  Uw,
  {
    ref: n,
    className: M(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
V2.displayName = Uw.displayName;
const z2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Zw,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
z2.displayName = Zw.displayName;
const G2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
G2.displayName = "DropdownMenuShortcut";
var U2 = "Label", t_ = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  V.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var o;
      r.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
t_.displayName = U2;
var r_ = t_;
const K2 = St(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), n_ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  r_,
  {
    ref: r,
    className: M(K2(), e),
    ...t
  }
));
n_.displayName = r_.displayName;
const qW = v0, o_ = f.createContext(
  {}
), Y2 = ({
  ...e
}) => /* @__PURE__ */ u.jsx(o_.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u.jsx(g0, { ...e }) }), ka = () => {
  const e = f.useContext(o_), t = f.useContext(a_), { getFieldState: r, formState: n } = Zv(), o = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, a_ = f.createContext(
  {}
), i_ = f.forwardRef(({ className: e, ...t }, r) => {
  const n = f.useId();
  return /* @__PURE__ */ u.jsx(a_.Provider, { value: { id: n }, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      className: M("space-y-1 relative", e),
      ...t
    }
  ) });
});
i_.displayName = "FormItem";
const s_ = f.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = ka();
  return /* @__PURE__ */ u.jsx(
    n_,
    {
      ref: r,
      className: M(n && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
s_.displayName = "FormLabel";
const c_ = f.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = ka();
  return /* @__PURE__ */ u.jsx(
    bt,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
c_.displayName = "FormControl";
const X2 = f.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = ka();
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: M("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
X2.displayName = "FormDescription";
const l_ = f.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o, formMessageId: a } = ka(), i = o ? String(o == null ? void 0 : o.message) : t;
  return i ? /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: n,
      id: a,
      className: M(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...r,
      children: i
    }
  ) : null;
});
l_.displayName = "FormMessage";
const Q2 = St("font-bold tracking-tight", {
  variants: {
    variant: {
      h1: "mb-4 text-2xl sm:text-3xl lg:text-4xl",
      h2: "mb-4 text-xl sm:text-2xl lg:text-3xl",
      h3: "mb-3 text-lg sm:text-xl lg:text-2xl",
      h4: "mb-2 text-xl font-semibold",
      h5: "mb-2 uppercase font-bold",
      h6: "mb-2 text-base font-bold"
    }
  },
  defaultVariants: {
    variant: "h1"
  }
}), BW = K.forwardRef(
  ({ className: e, variant: t, children: r, ...n }, o) => {
    const a = t || "h1";
    return /* @__PURE__ */ u.jsx(
      a,
      {
        className: M(Q2({ variant: t }), e),
        ref: o,
        ...n,
        children: r
      }
    );
  }
), Wd = K.forwardRef(({ className: e, type: t, ...r }, n) => t === "textarea" ? /* @__PURE__ */ u.jsx(
  "textarea",
  {
    rows: 1,
    ref: n,
    className: M(
      "flex h-15 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
) : /* @__PURE__ */ u.jsx(
  "input",
  {
    ref: n,
    type: t,
    className: M(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
)), WW = ({
  name: e,
  label: t,
  placeholder: r,
  mask: n,
  ...o
}) => {
  const a = Zv();
  return /* @__PURE__ */ u.jsx(
    Y2,
    {
      control: a.control,
      name: e,
      render: ({ field: i }) => /* @__PURE__ */ u.jsxs(i_, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ u.jsx(s_, { children: t }),
        /* @__PURE__ */ u.jsx(c_, { children: n ? /* @__PURE__ */ u.jsx(
          PF,
          {
            mask: n,
            placeholder: r,
            ...o,
            ...i
          }
        ) : /* @__PURE__ */ u.jsx(Wd, { placeholder: r, ...o, ...i }) }),
        /* @__PURE__ */ u.jsx(l_, {})
      ] })
    }
  );
};
var Z2 = "VisuallyHidden", Jn = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    V.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Jn.displayName = Z2;
var u_ = Jn, Xr = "NavigationMenu", [Hd, d_, J2] = fr(Xr), [tu, eF, tF] = fr(Xr), [Vd, HW] = Te(
  Xr,
  [J2, tF]
), [rF, Ye] = Vd(Xr), [nF, oF] = Vd(Xr), f_ = f.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: c = "horizontal",
      dir: l,
      ...d
    } = e, [p, m] = f.useState(null), v = ie(t, (T) => m(T)), y = Dt(l), h = f.useRef(0), g = f.useRef(0), b = f.useRef(0), [x, w] = f.useState(!0), [_ = "", C] = Re({
      prop: n,
      onChange: (T) => {
        const I = T !== "", O = s > 0;
        I ? (window.clearTimeout(b.current), O && w(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
          () => w(!0),
          s
        )), o == null || o(T);
      },
      defaultProp: a
    }), S = f.useCallback(() => {
      window.clearTimeout(g.current), g.current = window.setTimeout(() => C(""), 150);
    }, [C]), P = f.useCallback(
      (T) => {
        window.clearTimeout(g.current), C(T);
      },
      [C]
    ), R = f.useCallback(
      (T) => {
        _ === T ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(g.current), C(T);
        }, i);
      },
      [_, C, i]
    );
    return f.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
    }, []), /* @__PURE__ */ u.jsx(
      m_,
      {
        scope: r,
        isRootMenu: !0,
        value: _,
        dir: y,
        orientation: c,
        rootNavigationMenu: p,
        onTriggerEnter: (T) => {
          window.clearTimeout(h.current), x ? R(T) : P(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), S();
        },
        onContentEnter: () => window.clearTimeout(g.current),
        onContentLeave: S,
        onItemSelect: (T) => {
          C((I) => I === T ? "" : T);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ u.jsx(
          V.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: y,
            ...d,
            ref: v
          }
        )
      }
    );
  }
);
f_.displayName = Xr;
var p_ = "NavigationMenuSub", aF = f.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = Ye(p_, r), [l = "", d] = Re({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ u.jsx(
      m_,
      {
        scope: r,
        isRootMenu: !1,
        value: l,
        dir: c.dir,
        orientation: i,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (p) => d(p),
        onItemSelect: (p) => d(p),
        onItemDismiss: () => d(""),
        children: /* @__PURE__ */ u.jsx(V.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
aF.displayName = p_;
var m_ = (e) => {
  const {
    scope: t,
    isRootMenu: r,
    rootNavigationMenu: n,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: c,
    onItemDismiss: l,
    onTriggerEnter: d,
    onTriggerLeave: p,
    onContentEnter: m,
    onContentLeave: v
  } = e, [y, h] = f.useState(null), [g, b] = f.useState(/* @__PURE__ */ new Map()), [x, w] = f.useState(null);
  return /* @__PURE__ */ u.jsx(
    rF,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: s,
      previousValue: Vn(s),
      baseId: _e(),
      dir: o,
      orientation: a,
      viewport: y,
      onViewportChange: h,
      indicatorTrack: x,
      onIndicatorTrackChange: w,
      onTriggerEnter: pe(d),
      onTriggerLeave: pe(p),
      onContentEnter: pe(m),
      onContentLeave: pe(v),
      onItemSelect: pe(c),
      onItemDismiss: pe(l),
      onViewportContentChange: f.useCallback((_, C) => {
        b((S) => (S.set(_, C), new Map(S)));
      }, []),
      onViewportContentRemove: f.useCallback((_) => {
        b((C) => C.has(_) ? (C.delete(_), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ u.jsx(Hd.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(nF, { scope: t, items: g, children: i }) })
    }
  );
}, h_ = "NavigationMenuList", v_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Ye(h_, r), a = /* @__PURE__ */ u.jsx(V.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ u.jsx(V.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ u.jsx(Hd.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ u.jsx(E_, { asChild: !0, children: a }) : a }) });
  }
);
v_.displayName = h_;
var g_ = "NavigationMenuItem", [iF, y_] = Vd(g_), b_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = _e(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = f.useRef(null), c = f.useRef(null), l = f.useRef(null), d = f.useRef(() => {
    }), p = f.useRef(!1), m = f.useCallback((y = "start") => {
      if (s.current) {
        d.current();
        const h = nu(s.current);
        h.length && Ud(y === "start" ? h : h.reverse());
      }
    }, []), v = f.useCallback(() => {
      if (s.current) {
        const y = nu(s.current);
        y.length && (d.current = pF(y));
      }
    }, []);
    return /* @__PURE__ */ u.jsx(
      iF,
      {
        scope: r,
        value: i,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: l,
        wasEscapeCloseRef: p,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: v,
        onContentFocusOutside: v,
        children: /* @__PURE__ */ u.jsx(V.li, { ...o, ref: t })
      }
    );
  }
);
b_.displayName = g_;
var ru = "NavigationMenuTrigger", x_ = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = Ye(ru, e.__scopeNavigationMenu), i = y_(ru, e.__scopeNavigationMenu), s = f.useRef(null), c = ie(s, i.triggerRef, t), l = N_(a.baseId, i.value), d = R_(a.baseId, i.value), p = f.useRef(!1), m = f.useRef(!1), v = i.value === a.value;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(Hd.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ u.jsx(T_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      V.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": Kd(v),
        "aria-expanded": v,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: q(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: q(
          e.onPointerMove,
          Ko(() => {
            n || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          Ko(() => {
            n || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: q(e.onClick, () => {
          a.onItemSelect(i.value), m.current = v;
        }),
        onKeyDown: q(e.onKeyDown, (y) => {
          const g = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          v && y.key === g && (i.onEntryKeyDown(), y.preventDefault());
        })
      }
    ) }) }),
    v && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        u_,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (y) => {
            const h = i.contentRef.current, g = y.relatedTarget, b = g === s.current, x = h == null ? void 0 : h.contains(g);
            (b || !x) && i.onFocusProxyEnter(b ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ u.jsx("span", { "aria-owns": d })
    ] })
  ] });
});
x_.displayName = ru;
var sF = "NavigationMenuLink", Bv = "navigationMenu.linkSelect", w_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ u.jsx(T_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      V.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: q(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(Bv, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Bv, (l) => o == null ? void 0 : o(l), { once: !0 }), pn(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(Po, {
                bubbles: !0,
                cancelable: !0
              });
              pn(s, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
w_.displayName = sF;
var zd = "NavigationMenuIndicator", __ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ye(zd, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Qv.createPortal(
    /* @__PURE__ */ u.jsx(we, { present: r || a, children: /* @__PURE__ */ u.jsx(cF, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
__.displayName = zd;
var cF = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = Ye(zd, r), a = d_(r), [i, s] = f.useState(
    null
  ), [c, l] = f.useState(null), d = o.orientation === "horizontal", p = !!o.value;
  f.useEffect(() => {
    var h;
    const y = (h = a().find((g) => g.value === o.value)) == null ? void 0 : h.ref.current;
    y && s(y);
  }, [a, o.value]);
  const m = () => {
    i && l({
      size: d ? i.offsetWidth : i.offsetHeight,
      offset: d ? i.offsetLeft : i.offsetTop
    });
  };
  return ou(i, m), ou(o.indicatorTrack, m), c ? /* @__PURE__ */ u.jsx(
    V.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...n,
      ref: t,
      style: {
        position: "absolute",
        ...d ? {
          left: 0,
          width: c.size + "px",
          transform: `translateX(${c.offset}px)`
        } : {
          top: 0,
          height: c.size + "px",
          transform: `translateY(${c.offset}px)`
        },
        ...n.style
      }
    }
  ) : null;
}), $r = "NavigationMenuContent", S_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ye($r, e.__scopeNavigationMenu), a = y_($r, e.__scopeNavigationMenu), i = ie(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ u.jsx(lF, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ u.jsx(we, { present: r || s, children: /* @__PURE__ */ u.jsx(
    C_,
    {
      "data-state": Kd(s),
      ...c,
      ref: i,
      onPointerEnter: q(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: q(
        e.onPointerLeave,
        Ko(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
S_.displayName = $r;
var lF = f.forwardRef((e, t) => {
  const r = Ye($r, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return Pe(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), Pe(() => () => o(e.value), [e.value, o]), null;
}), Po = "navigationMenu.rootContentDismiss", C_ = f.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, d = Ye($r, r), p = f.useRef(null), m = ie(p, t), v = N_(d.baseId, n), y = R_(d.baseId, n), h = d_(r), g = f.useRef(null), { onItemDismiss: b } = d;
  f.useEffect(() => {
    const w = p.current;
    if (d.isRootMenu && w) {
      const _ = () => {
        var C;
        b(), s(), w.contains(document.activeElement) && ((C = o.current) == null || C.focus());
      };
      return w.addEventListener(Po, _), () => w.removeEventListener(Po, _);
    }
  }, [d.isRootMenu, e.value, o, b, s]);
  const x = f.useMemo(() => {
    const _ = h().map((I) => I.value);
    d.dir === "rtl" && _.reverse();
    const C = _.indexOf(d.value), S = _.indexOf(d.previousValue), P = n === d.value, R = S === _.indexOf(n);
    if (!P && !R) return g.current;
    const T = (() => {
      if (C !== S) {
        if (P && S !== -1) return C > S ? "from-end" : "from-start";
        if (R && C !== -1) return C > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = T, T;
  }, [d.previousValue, d.value, d.dir, h, n]);
  return /* @__PURE__ */ u.jsx(E_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
    zt,
    {
      id: y,
      "aria-labelledby": v,
      "data-motion": x,
      "data-orientation": d.orientation,
      ...l,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var _;
        const w = new Event(Po, {
          bubbles: !0,
          cancelable: !0
        });
        (_ = p.current) == null || _.dispatchEvent(w);
      },
      onFocusOutside: q(e.onFocusOutside, (w) => {
        var C;
        c();
        const _ = w.target;
        (C = d.rootNavigationMenu) != null && C.contains(_) && w.preventDefault();
      }),
      onPointerDownOutside: q(e.onPointerDownOutside, (w) => {
        var P;
        const _ = w.target, C = h().some((R) => {
          var T;
          return (T = R.ref.current) == null ? void 0 : T.contains(_);
        }), S = d.isRootMenu && ((P = d.viewport) == null ? void 0 : P.contains(_));
        (C || S || !d.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: q(e.onKeyDown, (w) => {
        var S;
        const _ = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !_) {
          const P = nu(w.currentTarget), R = document.activeElement, T = P.findIndex((W) => W === R), O = w.shiftKey ? P.slice(0, T).reverse() : P.slice(T + 1, P.length);
          Ud(O) ? w.preventDefault() : (S = a.current) == null || S.focus();
        }
      }),
      onEscapeKeyDown: q(e.onEscapeKeyDown, (w) => {
        i.current = !0;
      })
    }
  ) });
}), Gd = "NavigationMenuViewport", P_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!Ye(Gd, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ u.jsx(we, { present: r || a, children: /* @__PURE__ */ u.jsx(uF, { ...n, ref: t }) });
});
P_.displayName = Gd;
var uF = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = Ye(Gd, r), i = ie(t, a.onViewportChange), s = oF(
    $r,
    e.__scopeNavigationMenu
  ), [c, l] = f.useState(null), [d, p] = f.useState(null), m = c ? (c == null ? void 0 : c.width) + "px" : void 0, v = c ? (c == null ? void 0 : c.height) + "px" : void 0, y = !!a.value, h = y ? a.value : a.previousValue;
  return ou(d, () => {
    d && l({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ u.jsx(
    V.div,
    {
      "data-state": Kd(y),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !y && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": v,
        ...o.style
      },
      onPointerEnter: q(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: q(e.onPointerLeave, Ko(a.onContentLeave)),
      children: Array.from(s.items).map(([b, { ref: x, forceMount: w, ..._ }]) => {
        const C = h === b;
        return /* @__PURE__ */ u.jsx(we, { present: w || C, children: /* @__PURE__ */ u.jsx(
          C_,
          {
            ..._,
            ref: An(x, (S) => {
              C && S && p(S);
            })
          }
        ) }, b);
      })
    }
  );
}), dF = "FocusGroup", E_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Ye(dF, r);
    return /* @__PURE__ */ u.jsx(tu.Provider, { scope: r, children: /* @__PURE__ */ u.jsx(tu.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(V.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), Wv = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], fF = "FocusGroupItem", T_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = eF(r), a = Ye(fF, r);
    return /* @__PURE__ */ u.jsx(tu.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      V.button,
      {
        ...n,
        ref: t,
        onKeyDown: q(e.onKeyDown, (i) => {
          if (["Home", "End", ...Wv].includes(i.key)) {
            let c = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), Wv.includes(i.key)) {
              const p = c.indexOf(i.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => Ud(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function nu(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Ud(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function pF(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function ou(e, t) {
  const r = pe(t);
  Pe(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [e, r]);
}
function Kd(e) {
  return e ? "open" : "closed";
}
function N_(e, t) {
  return `${e}-trigger-${t}`;
}
function R_(e, t) {
  return `${e}-content-${t}`;
}
function Ko(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var M_ = f_, A_ = v_, mF = b_, O_ = x_, hF = w_, j_ = __, D_ = S_, I_ = P_;
const vF = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  M_,
  {
    ref: n,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(k_, {})
    ]
  }
));
vF.displayName = M_.displayName;
const gF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  A_,
  {
    ref: r,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
gF.displayName = A_.displayName;
const VW = mF, yF = St(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), bF = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  O_,
  {
    ref: n,
    className: M(yF(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ u.jsx(
        Mr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
bF.displayName = O_.displayName;
const xF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  D_,
  {
    ref: r,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
xF.displayName = D_.displayName;
const wF = hF, k_ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ u.jsx(
  I_,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
k_.displayName = I_.displayName;
const _F = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  j_,
  {
    ref: r,
    className: M(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
_F.displayName = j_.displayName;
const SF = K.forwardRef(({ className: e, title: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(wF, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
  "a",
  {
    ref: o,
    className: M(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ u.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: r })
    ]
  }
) }) }));
SF.displayName = "ListItem";
function CF(e) {
  return /* @__PURE__ */ u.jsx(
    "img",
    {
      src: "./logo_aiqia_animation.svg",
      alt: "",
      ...e,
      style: { height: "140px" }
    }
  );
}
function zW() {
  return /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center flex-1 p-10", children: /* @__PURE__ */ u.jsx(CF, { className: "w-40" }) });
}
function PF({
  value: e,
  mask: t,
  onChange: r,
  ...n
}) {
  const o = t.split("#").length - 1, a = t.split("A").length - 1, i = o + a;
  function s(c) {
    const d = c.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, i);
    r(d);
  }
  return /* @__PURE__ */ u.jsx(
    Wd,
    {
      value: tb(e, t),
      onChange: s,
      ...n
    }
  );
}
const EF = (e, t = 300) => {
  const [r, n] = yt(e);
  return Ge(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, Hv = St(
  "m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
  {
    variants: {
      variant: {
        default: "border-foreground/10 text-foreground bg-card hover:bg-card/80",
        secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        inverted: "inverted"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), TF = f.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: r,
    defaultValue: n = [],
    placeholder: o = "Select options",
    animation: a = 0,
    maxCount: i = 3,
    modalPopover: s = !1,
    className: c,
    preventSelectAll: l = !1,
    onSearchChange: d,
    isLoading: p,
    onCreate: m,
    ...v
  }, y) => {
    const [h, g] = f.useState(n), [b, x] = f.useState(!1), [w, _] = f.useState(!1), [C, S] = f.useState(""), P = EF(C, 300);
    Ge(() => {
      d && d(P ?? "");
    }, [P]);
    const R = (N) => {
      if (N.key === "Enter")
        x(!0);
      else if (N.key === "Backspace" && !N.currentTarget.value) {
        const L = [...h];
        L.pop(), g(L), t(L);
      }
    }, T = (N) => {
      const L = h.includes(N) ? h.filter((D) => D !== N) : [...h, N];
      g(L), t(L);
    }, I = () => {
      g([]), t([]);
    }, O = () => {
      x((N) => !N);
    }, W = () => {
      const N = h.slice(0, i);
      g(N), t(N);
    }, F = () => {
      if (h.length === e.length)
        I();
      else {
        const N = e.map((L) => L.value);
        g(N), t(N);
      }
    };
    return /* @__PURE__ */ u.jsxs(
      Md,
      {
        open: b,
        onOpenChange: x,
        modal: s,
        children: [
          /* @__PURE__ */ u.jsx(Ad, { asChild: !0, children: /* @__PURE__ */ u.jsx(
            Gr,
            {
              ref: y,
              ...v,
              onClick: O,
              variant: "outline",
              className: M(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, i).map((N) => {
                    const L = e.find((k) => k.value === N), D = L == null ? void 0 : L.icon;
                    return /* @__PURE__ */ u.jsxs(
                      Bf,
                      {
                        className: M(
                          w ? "animate-bounce" : "",
                          Hv({ variant: r })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          D && /* @__PURE__ */ u.jsx(D, { className: "h-4 w-4 mr-2" }),
                          L == null ? void 0 : L.label,
                          /* @__PURE__ */ u.jsx(
                            Sf,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (k) => {
                                k.stopPropagation(), T(N);
                              }
                            }
                          )
                        ]
                      },
                      N
                    );
                  }),
                  h.length > i && /* @__PURE__ */ u.jsxs(
                    Bf,
                    {
                      className: M(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        Hv({ variant: r })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - i}`,
                        /* @__PURE__ */ u.jsx(
                          Sf,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (N) => {
                              N.stopPropagation(), W();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ u.jsx(
                    aa,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (N) => {
                        N.stopPropagation(), I();
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    XS,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ u.jsx(Mr, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ u.jsx(Mr, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ u.jsx(
            Ma,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => x(!1),
              children: /* @__PURE__ */ u.jsxs(yd, { shouldFilter: !d, children: [
                /* @__PURE__ */ u.jsx(
                  cx,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: R,
                    onValueChange: S
                  }
                ),
                /* @__PURE__ */ u.jsxs(lx, { children: [
                  !p && /* @__PURE__ */ u.jsx(ux, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ u.jsxs(dx, { children: [
                    !p && !e.length && !!C.length && m && /* @__PURE__ */ u.jsx(
                      _o,
                      {
                        onSelect: m,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ u.jsx(xP, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ u.jsx("b", { children: C })
                        ] })
                      },
                      "new"
                    ),
                    p && /* @__PURE__ */ u.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ u.jsx(yP, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !l && /* @__PURE__ */ u.jsxs(
                      _o,
                      {
                        onSelect: F,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              className: M(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ u.jsx(mn, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ u.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((N) => {
                      const L = h.includes(N.value);
                      return /* @__PURE__ */ u.jsxs(
                        _o,
                        {
                          onSelect: () => T(N.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ u.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  L ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ u.jsx(mn, { className: "h-4 w-4" })
                              }
                            ),
                            N.icon && /* @__PURE__ */ u.jsx(N.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ u.jsx("span", { children: N.label })
                          ]
                        },
                        N.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ u.jsx(fx, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ u.jsx(
            CP,
            {
              className: M(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                w ? "" : "text-muted-foreground"
              ),
              onClick: () => _(!w)
            }
          )
        ]
      }
    );
  }
);
TF.displayName = "MultiSelect";
const NF = ({ className: e, ...t }) => /* @__PURE__ */ u.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
NF.displayName = "Pagination";
const RF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "ul",
  {
    ref: r,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
RF.displayName = "PaginationContent";
const MF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("li", { ref: r, className: M("", e), ...t }));
MF.displayName = "PaginationItem";
const Yd = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...n
}) => /* @__PURE__ */ u.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      vt({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...n
  }
);
Yd.displayName = "PaginationLink";
const AF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  Yd,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(Tu, { className: "h-4 w-4" })
  }
);
AF.displayName = "PaginationPrevious";
const OF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  Yd,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(On, { className: "h-4 w-4" })
  }
);
OF.displayName = "PaginationNext";
const jF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(xg, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
jF.displayName = "PaginationEllipsis";
var Xd = "Radio", [DF, L_] = Te(Xd), [IF, kF] = DF(Xd), $_ = f.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: c,
      form: l,
      ...d
    } = e, [p, m] = f.useState(null), v = ie(t, (g) => m(g)), y = f.useRef(!1), h = p ? l || !!p.closest("form") : !0;
    return /* @__PURE__ */ u.jsxs(IF, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ u.jsx(
        V.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": B_(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...d,
          ref: v,
          onClick: q(e.onClick, (g) => {
            o || c == null || c(), h && (y.current = g.isPropagationStopped(), y.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ u.jsx(
        LF,
        {
          control: p,
          bubbles: !y.current,
          name: n,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
$_.displayName = Xd;
var F_ = "RadioIndicator", q_ = f.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = kF(F_, r);
    return /* @__PURE__ */ u.jsx(we, { present: n || a.checked, children: /* @__PURE__ */ u.jsx(
      V.span,
      {
        "data-state": B_(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
q_.displayName = F_;
var LF = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = f.useRef(null), i = Vn(r), s = Sa(t);
  return f.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && p) {
      const m = new Event("click", { bubbles: n });
      p.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: r,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function B_(e) {
  return e ? "checked" : "unchecked";
}
var $F = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Qd = "RadioGroup", [FF, GW] = Te(Qd, [
  Yt,
  L_
]), W_ = Yt(), H_ = L_(), [qF, BF] = FF(Qd), V_ = f.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: c,
      dir: l,
      loop: d = !0,
      onValueChange: p,
      ...m
    } = e, v = W_(r), y = Dt(l), [h, g] = Re({
      prop: a,
      defaultProp: o,
      onChange: p
    });
    return /* @__PURE__ */ u.jsx(
      qF,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ u.jsx(
          ja,
          {
            asChild: !0,
            ...v,
            orientation: c,
            dir: y,
            loop: d,
            children: /* @__PURE__ */ u.jsx(
              V.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": c,
                "data-disabled": s ? "" : void 0,
                dir: y,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
V_.displayName = Qd;
var z_ = "RadioGroupItem", G_ = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = BF(z_, r), i = a.disabled || n, s = W_(r), c = H_(r), l = f.useRef(null), d = ie(t, l), p = a.value === o.value, m = f.useRef(!1);
    return f.useEffect(() => {
      const v = (h) => {
        $F.includes(h.key) && (m.current = !0);
      }, y = () => m.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ u.jsx(
      Da,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ u.jsx(
          $_,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...c,
            ...o,
            name: a.name,
            ref: d,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: q((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: q(o.onFocus, () => {
              var v;
              m.current && ((v = l.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
G_.displayName = z_;
var WF = "RadioGroupIndicator", U_ = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = H_(r);
    return /* @__PURE__ */ u.jsx(q_, { ...o, ...n, ref: t });
  }
);
U_.displayName = WF;
var K_ = V_, Y_ = G_, HF = U_;
const VF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  K_,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: r
  }
));
VF.displayName = K_.displayName;
const zF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Y_,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(HF, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(bg, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
zF.displayName = Y_.displayName;
function au(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function GF(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var Zd = "ScrollArea", [X_, UW] = Te(Zd), [UF, Xe] = X_(Zd), Q_ = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = f.useState(null), [l, d] = f.useState(null), [p, m] = f.useState(null), [v, y] = f.useState(null), [h, g] = f.useState(null), [b, x] = f.useState(0), [w, _] = f.useState(0), [C, S] = f.useState(!1), [P, R] = f.useState(!1), T = ie(t, (O) => c(O)), I = Dt(o);
    return /* @__PURE__ */ u.jsx(
      UF,
      {
        scope: r,
        type: n,
        dir: I,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: l,
        onViewportChange: d,
        content: p,
        onContentChange: m,
        scrollbarX: v,
        onScrollbarXChange: y,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: S,
        scrollbarY: h,
        onScrollbarYChange: g,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: x,
        onCornerHeightChange: _,
        children: /* @__PURE__ */ u.jsx(
          V.div,
          {
            dir: I,
            ...i,
            ref: T,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": b + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Q_.displayName = Zd;
var Z_ = "ScrollAreaViewport", J_ = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = Xe(Z_, r), s = f.useRef(null), c = ie(t, s, i.onViewportChange);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ u.jsx(
        V.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ u.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
J_.displayName = Z_;
var Tt = "ScrollAreaScrollbar", Jd = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Xe(Tt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return f.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ u.jsx(KF, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ u.jsx(YF, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ u.jsx(eS, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ u.jsx(ef, { ...n, ref: t }) : null;
  }
);
Jd.displayName = Tt;
var KF = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Xe(Tt, e.__scopeScrollArea), [a, i] = f.useState(!1);
  return f.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const l = () => {
        window.clearTimeout(c), i(!0);
      }, d = () => {
        c = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ u.jsx(we, { present: r || a, children: /* @__PURE__ */ u.jsx(
    eS,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), YF = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Xe(Tt, e.__scopeScrollArea), a = e.orientation === "horizontal", i = $a(() => c("SCROLL_END"), 100), [s, c] = GF("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return f.useEffect(() => {
    if (s === "idle") {
      const l = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(l);
    }
  }, [s, o.scrollHideDelay, c]), f.useEffect(() => {
    const l = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let p = l[d];
      const m = () => {
        const v = l[d];
        p !== v && (c("SCROLL"), i()), p = v;
      };
      return l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ u.jsx(we, { present: r || s !== "hidden", children: /* @__PURE__ */ u.jsx(
    ef,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: q(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: q(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), eS = f.forwardRef((e, t) => {
  const r = Xe(Tt, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = f.useState(!1), s = e.orientation === "horizontal", c = $a(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? l : d);
    }
  }, 10);
  return Fr(r.viewport, c), Fr(r.content, c), /* @__PURE__ */ u.jsx(we, { present: n || a, children: /* @__PURE__ */ u.jsx(
    ef,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), ef = f.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = Xe(Tt, e.__scopeScrollArea), a = f.useRef(null), i = f.useRef(0), [s, c] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = aS(s.viewport, s.content), d = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, v) {
    return tq(m, i.current, s, v);
  }
  return r === "horizontal" ? /* @__PURE__ */ u.jsx(
    XF,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, v = Vv(m, s, o.dir);
          a.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = p(m, o.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ u.jsx(
    QF,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, v = Vv(m, s);
          a.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = p(m));
      }
    }
  ) : null;
}), XF = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Xe(Tt, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ie(t, c, a.onScrollbarXChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    rS,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": La(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), sS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Xo(i.paddingLeft),
            paddingEnd: Xo(i.paddingRight)
          }
        });
      }
    }
  );
}), QF = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Xe(Tt, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ie(t, c, a.onScrollbarYChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    rS,
    {
      "data-orientation": "vertical",
      ...o,
      ref: l,
      sizes: r,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": La(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), sS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Xo(i.paddingTop),
            paddingEnd: Xo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [ZF, tS] = X_(Tt), rS = f.forwardRef((e, t) => {
  const {
    __scopeScrollArea: r,
    sizes: n,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: d,
    onResize: p,
    ...m
  } = e, v = Xe(Tt, r), [y, h] = f.useState(null), g = ie(t, (T) => h(T)), b = f.useRef(null), x = f.useRef(""), w = v.viewport, _ = n.content - n.viewport, C = pe(d), S = pe(c), P = $a(p, 10);
  function R(T) {
    if (b.current) {
      const I = T.clientX - b.current.left, O = T.clientY - b.current.top;
      l({ x: I, y: O });
    }
  }
  return f.useEffect(() => {
    const T = (I) => {
      const O = I.target;
      (y == null ? void 0 : y.contains(O)) && C(I, _);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [w, y, _, C]), f.useEffect(S, [n, S]), Fr(y, P), Fr(v.content, P), /* @__PURE__ */ u.jsx(
    ZF,
    {
      scope: r,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: pe(a),
      onThumbPointerUp: pe(i),
      onThumbPositionChange: S,
      onThumbPointerDown: pe(s),
      children: /* @__PURE__ */ u.jsx(
        V.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: q(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), b.current = y.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), R(T));
          }),
          onPointerMove: q(e.onPointerMove, R),
          onPointerUp: q(e.onPointerUp, (T) => {
            const I = T.target;
            I.hasPointerCapture(T.pointerId) && I.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = x.current, v.viewport && (v.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), Yo = "ScrollAreaThumb", nS = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = tS(Yo, e.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(we, { present: r || o.hasThumb, children: /* @__PURE__ */ u.jsx(JF, { ref: t, ...n }) });
  }
), JF = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = Xe(Yo, r), i = tS(Yo, r), { onThumbPositionChange: s } = i, c = ie(
      t,
      (p) => i.onThumbChange(p)
    ), l = f.useRef(void 0), d = $a(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (d(), !l.current) {
            const v = rq(p, s);
            l.current = v, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, d, s]), /* @__PURE__ */ u.jsx(
      V.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: q(e.onPointerDownCapture, (p) => {
          const v = p.target.getBoundingClientRect(), y = p.clientX - v.left, h = p.clientY - v.top;
          i.onThumbPointerDown({ x: y, y: h });
        }),
        onPointerUp: q(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
nS.displayName = Yo;
var tf = "ScrollAreaCorner", oS = f.forwardRef(
  (e, t) => {
    const r = Xe(tf, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ u.jsx(eq, { ...e, ref: t }) : null;
  }
);
oS.displayName = tf;
var eq = f.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = Xe(tf, r), [a, i] = f.useState(0), [s, c] = f.useState(0), l = !!(a && s);
  return Fr(o.scrollbarX, () => {
    var p;
    const d = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Fr(o.scrollbarY, () => {
    var p;
    const d = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(d), i(d);
  }), l ? /* @__PURE__ */ u.jsx(
    V.div,
    {
      ...n,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Xo(e) {
  return e ? parseInt(e, 10) : 0;
}
function aS(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function La(e) {
  const t = aS(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function tq(e, t, r, n = "ltr") {
  const o = La(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, d = r.content - r.viewport, p = n === "ltr" ? [0, d] : [d * -1, 0];
  return iS([c, l], p)(e);
}
function Vv(e, t, r = "ltr") {
  const n = La(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], l = au(e, c);
  return iS([0, i], [0, s])(l);
}
function iS(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function sS(e, t) {
  return e > 0 && e < t;
}
var rq = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function $a(e, t) {
  const r = pe(e), n = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(n.current), []), f.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Fr(e, t) {
  const r = pe(t);
  Pe(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [e, r]);
}
var cS = Q_, nq = J_, oq = oS;
const aq = K.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  cS,
  {
    ref: n,
    className: M("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(nq, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(lS, {}),
      /* @__PURE__ */ u.jsx(oq, {})
    ]
  }
));
aq.displayName = cS.displayName;
const lS = K.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ u.jsx(
  Jd,
  {
    ref: n,
    orientation: t,
    className: M(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ u.jsx(nS, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
lS.displayName = Jd.displayName;
var iq = [" ", "Enter", "ArrowUp", "ArrowDown"], sq = [" ", "Enter"], eo = "Select", [Fa, qa, cq] = fr(eo), [Qr, KW] = Te(eo, [
  cq,
  Ut
]), Ba = Ut(), [lq, Qt] = Qr(eo), [uq, dq] = Qr(eo), uS = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: l,
    name: d,
    autoComplete: p,
    disabled: m,
    required: v,
    form: y
  } = e, h = Ba(t), [g, b] = f.useState(null), [x, w] = f.useState(null), [_, C] = f.useState(!1), S = Dt(l), [P = !1, R] = Re({
    prop: n,
    defaultProp: o,
    onChange: a
  }), [T, I] = Re({
    prop: i,
    defaultProp: s,
    onChange: c
  }), O = f.useRef(null), W = g ? y || !!g.closest("form") : !0, [F, N] = f.useState(/* @__PURE__ */ new Set()), L = Array.from(F).map((D) => D.props.value).join(";");
  return /* @__PURE__ */ u.jsx(Un, { ...h, children: /* @__PURE__ */ u.jsxs(
    lq,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: b,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: _,
      onValueNodeHasChildrenChange: C,
      contentId: _e(),
      value: T,
      onValueChange: I,
      open: P,
      onOpenChange: R,
      dir: S,
      triggerPointerDownPosRef: O,
      disabled: m,
      children: [
        /* @__PURE__ */ u.jsx(Fa.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          uq,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((D) => {
              N((k) => new Set(k).add(D));
            }, []),
            onNativeOptionRemove: f.useCallback((D) => {
              N((k) => {
                const A = new Set(k);
                return A.delete(D), A;
              });
            }, []),
            children: r
          }
        ) }),
        W ? /* @__PURE__ */ u.jsxs(
          kS,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: d,
            autoComplete: p,
            value: T,
            onChange: (D) => I(D.target.value),
            disabled: m,
            form: y,
            children: [
              T === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(F)
            ]
          },
          L
        ) : null
      ]
    }
  ) });
};
uS.displayName = eo;
var dS = "SelectTrigger", fS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = Ba(r), i = Qt(dS, r), s = i.disabled || n, c = ie(t, i.onTriggerChange), l = qa(r), d = f.useRef("touch"), [p, m, v] = LS((h) => {
      const g = l().filter((w) => !w.disabled), b = g.find((w) => w.value === i.value), x = $S(g, h, b);
      x !== void 0 && i.onValueChange(x.value);
    }), y = (h) => {
      s || (i.onOpenChange(!0), v()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(Kn, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": IS(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: q(o.onClick, (h) => {
          h.currentTarget.focus(), d.current !== "mouse" && y(h);
        }),
        onPointerDown: q(o.onPointerDown, (h) => {
          d.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (y(h), h.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (h) => {
          const g = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(g && h.key === " ") && iq.includes(h.key) && (y(), h.preventDefault());
        })
      }
    ) });
  }
);
fS.displayName = dS;
var pS = "SelectValue", mS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = Qt(pS, r), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, p = ie(t, c.onValueNodeChange);
    return Pe(() => {
      l(d);
    }, [l, d]), /* @__PURE__ */ u.jsx(
      V.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: IS(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: i }) : a
      }
    );
  }
);
mS.displayName = pS;
var fq = "SelectIcon", hS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(V.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
hS.displayName = fq;
var pq = "SelectPortal", vS = (e) => /* @__PURE__ */ u.jsx(pr, { asChild: !0, ...e });
vS.displayName = pq;
var lr = "SelectContent", gS = f.forwardRef(
  (e, t) => {
    const r = Qt(lr, e.__scopeSelect), [n, o] = f.useState();
    if (Pe(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? Mn.createPortal(
        /* @__PURE__ */ u.jsx(yS, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(Fa.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(bS, { ...e, ref: t });
  }
);
gS.displayName = lr;
var tt = 10, [yS, Zt] = Qr(lr), mq = "SelectContentImpl", bS = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: g,
      //
      ...b
    } = e, x = Qt(lr, r), [w, _] = f.useState(null), [C, S] = f.useState(null), P = ie(t, (B) => _(B)), [R, T] = f.useState(null), [I, O] = f.useState(
      null
    ), W = qa(r), [F, N] = f.useState(!1), L = f.useRef(!1);
    f.useEffect(() => {
      if (w) return ca(w);
    }, [w]), ia();
    const D = f.useCallback(
      (B) => {
        const [te, ...se] = W().map((H) => H.ref.current), [ae] = se.slice(-1), ne = document.activeElement;
        for (const H of B)
          if (H === ne || (H == null || H.scrollIntoView({ block: "nearest" }), H === te && C && (C.scrollTop = 0), H === ae && C && (C.scrollTop = C.scrollHeight), H == null || H.focus(), document.activeElement !== ne)) return;
      },
      [W, C]
    ), k = f.useCallback(
      () => D([R, w]),
      [D, R, w]
    );
    f.useEffect(() => {
      F && k();
    }, [F, k]);
    const { onOpenChange: A, triggerPointerDownPosRef: $ } = x;
    f.useEffect(() => {
      if (w) {
        let B = { x: 0, y: 0 };
        const te = (ae) => {
          var ne, H;
          B = {
            x: Math.abs(Math.round(ae.pageX) - (((ne = $.current) == null ? void 0 : ne.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((H = $.current) == null ? void 0 : H.y) ?? 0))
          };
        }, se = (ae) => {
          B.x <= 10 && B.y <= 10 ? ae.preventDefault() : w.contains(ae.target) || A(!1), document.removeEventListener("pointermove", te), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [w, A, $]), f.useEffect(() => {
      const B = () => A(!1);
      return window.addEventListener("blur", B), window.addEventListener("resize", B), () => {
        window.removeEventListener("blur", B), window.removeEventListener("resize", B);
      };
    }, [A]);
    const [re, ee] = LS((B) => {
      const te = W().filter((ne) => !ne.disabled), se = te.find((ne) => ne.ref.current === document.activeElement), ae = $S(te, B, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), j = f.useCallback(
      (B, te, se) => {
        const ae = !L.current && !se;
        (x.value !== void 0 && x.value === te || ae) && (T(B), ae && (L.current = !0));
      },
      [x.value]
    ), G = f.useCallback(() => w == null ? void 0 : w.focus(), [w]), Y = f.useCallback(
      (B, te, se) => {
        const ae = !L.current && !se;
        (x.value !== void 0 && x.value === te || ae) && O(B);
      },
      [x.value]
    ), U = n === "popper" ? iu : xS, oe = U === iu ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ u.jsx(
      yS,
      {
        scope: r,
        content: w,
        viewport: C,
        onViewportChange: S,
        itemRefCallback: j,
        selectedItem: R,
        onItemLeave: G,
        itemTextRefCallback: Y,
        focusSelectedItem: k,
        selectedItemText: I,
        position: n,
        isPositioned: F,
        searchRef: re,
        children: /* @__PURE__ */ u.jsx(Dn, { as: bt, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          jn,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: q(o, (B) => {
              var te;
              (te = x.trigger) == null || te.focus({ preventScroll: !0 }), B.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              zt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (B) => B.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  U,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (B) => B.preventDefault(),
                    ...b,
                    ...oe,
                    onPlaced: () => N(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: q(b.onKeyDown, (B) => {
                      const te = B.ctrlKey || B.altKey || B.metaKey;
                      if (B.key === "Tab" && B.preventDefault(), !te && B.key.length === 1 && ee(B.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key)) {
                        let ae = W().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(B.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(B.key)) {
                          const ne = B.target, H = ae.indexOf(ne);
                          ae = ae.slice(H + 1);
                        }
                        setTimeout(() => D(ae)), B.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
bS.displayName = mq;
var hq = "SelectItemAlignedPosition", xS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = Qt(lr, r), i = Zt(lr, r), [s, c] = f.useState(null), [l, d] = f.useState(null), p = ie(t, (P) => d(P)), m = qa(r), v = f.useRef(!1), y = f.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: b, focusSelectedItem: x } = i, w = f.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && g && b) {
      const P = a.trigger.getBoundingClientRect(), R = l.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), I = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ne = I.left - R.left, H = T.left - ne, le = P.left - H, z = P.width + le, ge = Math.max(z, R.width), Se = window.innerWidth - tt, Ne = au(H, [
          tt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(tt, Se - ge)
        ]);
        s.style.minWidth = z + "px", s.style.left = Ne + "px";
      } else {
        const ne = R.right - I.right, H = window.innerWidth - T.right - ne, le = window.innerWidth - P.right - H, z = P.width + le, ge = Math.max(z, R.width), Se = window.innerWidth - tt, Ne = au(H, [
          tt,
          Math.max(tt, Se - ge)
        ]);
        s.style.minWidth = z + "px", s.style.right = Ne + "px";
      }
      const O = m(), W = window.innerHeight - tt * 2, F = h.scrollHeight, N = window.getComputedStyle(l), L = parseInt(N.borderTopWidth, 10), D = parseInt(N.paddingTop, 10), k = parseInt(N.borderBottomWidth, 10), A = parseInt(N.paddingBottom, 10), $ = L + D + F + A + k, re = Math.min(g.offsetHeight * 5, $), ee = window.getComputedStyle(h), j = parseInt(ee.paddingTop, 10), G = parseInt(ee.paddingBottom, 10), Y = P.top + P.height / 2 - tt, U = W - Y, oe = g.offsetHeight / 2, B = g.offsetTop + oe, te = L + D + B, se = $ - te;
      if (te <= Y) {
        const ne = O.length > 0 && g === O[O.length - 1].ref.current;
        s.style.bottom = "0px";
        const H = l.clientHeight - h.offsetTop - h.offsetHeight, le = Math.max(
          U,
          oe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? G : 0) + H + k
        ), z = te + le;
        s.style.height = z + "px";
      } else {
        const ne = O.length > 0 && g === O[0].ref.current;
        s.style.top = "0px";
        const le = Math.max(
          Y,
          L + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? j : 0) + oe
        ) + se;
        s.style.height = le + "px", h.scrollTop = te - Y + h.offsetTop;
      }
      s.style.margin = `${tt}px 0`, s.style.minHeight = re + "px", s.style.maxHeight = W + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    l,
    h,
    g,
    b,
    a.dir,
    n
  ]);
  Pe(() => w(), [w]);
  const [_, C] = f.useState();
  Pe(() => {
    l && C(window.getComputedStyle(l).zIndex);
  }, [l]);
  const S = f.useCallback(
    (P) => {
      P && y.current === !0 && (w(), x == null || x(), y.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ u.jsx(
    gq,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: _
          },
          children: /* @__PURE__ */ u.jsx(
            V.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
xS.displayName = hq;
var vq = "SelectPopperPosition", iu = f.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = tt,
    ...a
  } = e, i = Ba(r);
  return /* @__PURE__ */ u.jsx(
    Na,
    {
      ...i,
      ...a,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
iu.displayName = vq;
var [gq, rf] = Qr(lr, {}), su = "SelectViewport", wS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = Zt(su, r), i = rf(su, r), s = ie(t, a.onViewportChange), c = f.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ u.jsx(Fa.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
        V.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: q(o.onScroll, (l) => {
            const d = l.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && p) {
              const v = Math.abs(c.current - d.scrollTop);
              if (v > 0) {
                const y = window.innerHeight - tt * 2, h = parseFloat(p.style.minHeight), g = parseFloat(p.style.height), b = Math.max(h, g);
                if (b < y) {
                  const x = b + v, w = Math.min(y, x), _ = x - w;
                  p.style.height = w + "px", p.style.bottom === "0px" && (d.scrollTop = _ > 0 ? _ : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
wS.displayName = su;
var _S = "SelectGroup", [yq, bq] = Qr(_S), SS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = _e();
    return /* @__PURE__ */ u.jsx(yq, { scope: r, id: o, children: /* @__PURE__ */ u.jsx(V.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
SS.displayName = _S;
var CS = "SelectLabel", PS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = bq(CS, r);
    return /* @__PURE__ */ u.jsx(V.div, { id: o.id, ...n, ref: t });
  }
);
PS.displayName = CS;
var Qo = "SelectItem", [xq, ES] = Qr(Qo), TS = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Qt(Qo, r), c = Zt(Qo, r), l = s.value === n, [d, p] = f.useState(a ?? ""), [m, v] = f.useState(!1), y = ie(
      t,
      (x) => {
        var w;
        return (w = c.itemRefCallback) == null ? void 0 : w.call(c, x, n, o);
      }
    ), h = _e(), g = f.useRef("touch"), b = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      xq,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: f.useCallback((x) => {
          p((w) => w || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          Fa.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ u.jsx(
              V.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": l && m,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: y,
                onFocus: q(i.onFocus, () => v(!0)),
                onBlur: q(i.onBlur, () => v(!1)),
                onClick: q(i.onClick, () => {
                  g.current !== "mouse" && b();
                }),
                onPointerUp: q(i.onPointerUp, () => {
                  g.current === "mouse" && b();
                }),
                onPointerDown: q(i.onPointerDown, (x) => {
                  g.current = x.pointerType;
                }),
                onPointerMove: q(i.onPointerMove, (x) => {
                  var w;
                  g.current = x.pointerType, o ? (w = c.onItemLeave) == null || w.call(c) : g.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(i.onPointerLeave, (x) => {
                  var w;
                  x.currentTarget === document.activeElement && ((w = c.onItemLeave) == null || w.call(c));
                }),
                onKeyDown: q(i.onKeyDown, (x) => {
                  var _;
                  ((_ = c.searchRef) == null ? void 0 : _.current) !== "" && x.key === " " || (sq.includes(x.key) && b(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
TS.displayName = Qo;
var ln = "SelectItemText", NS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = Qt(ln, r), s = Zt(ln, r), c = ES(ln, r), l = dq(ln, r), [d, p] = f.useState(null), m = ie(
      t,
      (b) => p(b),
      c.onItemTextChange,
      (b) => {
        var x;
        return (x = s.itemTextRefCallback) == null ? void 0 : x.call(s, b, c.value, c.disabled);
      }
    ), v = d == null ? void 0 : d.textContent, y = f.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
    return Pe(() => (h(y), () => g(y)), [h, g, y]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(V.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Mn.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
NS.displayName = ln;
var RS = "SelectItemIndicator", MS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return ES(RS, r).isSelected ? /* @__PURE__ */ u.jsx(V.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
MS.displayName = RS;
var cu = "SelectScrollUpButton", AS = f.forwardRef((e, t) => {
  const r = Zt(cu, e.__scopeSelect), n = rf(cu, e.__scopeSelect), [o, a] = f.useState(!1), i = ie(t, n.onScrollButtonChange);
  return Pe(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    jS,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
AS.displayName = cu;
var lu = "SelectScrollDownButton", OS = f.forwardRef((e, t) => {
  const r = Zt(lu, e.__scopeSelect), n = rf(lu, e.__scopeSelect), [o, a] = f.useState(!1), i = ie(t, n.onScrollButtonChange);
  return Pe(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < l;
        a(d);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    jS,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
OS.displayName = lu;
var jS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = Zt("SelectScrollButton", r), i = f.useRef(null), s = qa(r), c = f.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return f.useEffect(() => () => c(), [c]), Pe(() => {
    var d;
    const l = s().find((p) => p.ref.current === document.activeElement);
    (d = l == null ? void 0 : l.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ u.jsx(
    V.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        var l;
        (l = a.onItemLeave) == null || l.call(a), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), wq = "SelectSeparator", DS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(V.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
DS.displayName = wq;
var uu = "SelectArrow", _q = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Ba(r), a = Qt(uu, r), i = Zt(uu, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ u.jsx(Ra, { ...o, ...n, ref: t }) : null;
  }
);
_q.displayName = uu;
function IS(e) {
  return e === "" || e === void 0;
}
var kS = f.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = f.useRef(null), a = ie(t, o), i = Vn(r);
    return f.useEffect(() => {
      const s = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== r && d) {
        const p = new Event("change", { bubbles: !0 });
        d.call(s, r), s.dispatchEvent(p);
      }
    }, [i, r]), /* @__PURE__ */ u.jsx(Jn, { asChild: !0, children: /* @__PURE__ */ u.jsx("select", { ...n, ref: a, defaultValue: r }) });
  }
);
kS.displayName = "BubbleSelect";
function LS(e) {
  const t = pe(e), r = f.useRef(""), n = f.useRef(0), o = f.useCallback(
    (i) => {
      const s = r.current + i;
      t(s), function c(l) {
        r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(s);
    },
    [t]
  ), a = f.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a];
}
function $S(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = Sq(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function Sq(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Cq = uS, FS = fS, Pq = mS, Eq = hS, Tq = vS, qS = gS, Nq = wS, Rq = SS, BS = PS, WS = TS, Mq = NS, Aq = MS, HS = AS, VS = OS, zS = DS;
const du = Cq, YW = Rq, fu = Pq, Zo = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  FS,
  {
    ref: n,
    className: M(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background shadow-xs px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(Eq, { asChild: !0, children: /* @__PURE__ */ u.jsx(Mr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Zo.displayName = FS.displayName;
const GS = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  HS,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(dP, { className: "h-4 w-4" })
  }
));
GS.displayName = HS.displayName;
const US = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  VS,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Mr, { className: "h-4 w-4" })
  }
));
US.displayName = VS.displayName;
const Jo = f.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ u.jsx(Tq, { children: /* @__PURE__ */ u.jsxs(
  qS,
  {
    ref: o,
    className: M(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx(GS, {}),
      /* @__PURE__ */ u.jsx(
        Nq,
        {
          className: M(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(US, {})
    ]
  }
) }));
Jo.displayName = qS.displayName;
const Oq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  BS,
  {
    ref: r,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Oq.displayName = BS.displayName;
const Rn = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  WS,
  {
    ref: n,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Aq, { children: /* @__PURE__ */ u.jsx(mn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(Mq, { children: t })
    ]
  }
));
Rn.displayName = WS.displayName;
const jq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  zS,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
jq.displayName = zS.displayName;
var Dq = "Separator", zv = "horizontal", Iq = ["horizontal", "vertical"], KS = f.forwardRef((e, t) => {
  const { decorative: r, orientation: n = zv, ...o } = e, a = kq(n) ? n : zv, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ u.jsx(
    V.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
KS.displayName = Dq;
function kq(e) {
  return Iq.includes(e);
}
var YS = KS;
const XS = f.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ u.jsx(
    YS,
    {
      ref: o,
      decorative: r,
      orientation: t,
      className: M(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...n
    }
  )
);
XS.displayName = YS.displayName;
const XW = la, QW = Du, ZW = zr, Lq = ua, QS = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Hr,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
QS.displayName = Hr.displayName;
const $q = St(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Fq = f.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(Lq, { children: [
  /* @__PURE__ */ u.jsx(QS, {}),
  /* @__PURE__ */ u.jsxs(
    Vr,
    {
      ref: o,
      className: M($q({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ u.jsxs(zr, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ u.jsx(aa, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Fq.displayName = Vr.displayName;
const qq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
qq.displayName = "SheetHeader";
const Bq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Bq.displayName = "SheetFooter";
const Wq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  In,
  {
    ref: r,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Wq.displayName = In.displayName;
const Hq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  kn,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Hq.displayName = kn.displayName;
function JW({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: M("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var nf = "Switch", [Vq, e4] = Te(nf), [zq, Gq] = Vq(nf), ZS = f.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c = "on",
      onCheckedChange: l,
      form: d,
      ...p
    } = e, [m, v] = f.useState(null), y = ie(t, (w) => v(w)), h = f.useRef(!1), g = m ? d || !!m.closest("form") : !0, [b = !1, x] = Re({
      prop: o,
      defaultProp: a,
      onChange: l
    });
    return /* @__PURE__ */ u.jsxs(zq, { scope: r, checked: b, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        V.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": i,
          "data-state": tC(b),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...p,
          ref: y,
          onClick: q(e.onClick, (w) => {
            x((_) => !_), g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ u.jsx(
        Uq,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: b,
          required: i,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ZS.displayName = nf;
var JS = "SwitchThumb", eC = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = Gq(JS, r);
    return /* @__PURE__ */ u.jsx(
      V.span,
      {
        "data-state": tC(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
eC.displayName = JS;
var Uq = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = f.useRef(null), i = Vn(r), s = Sa(t);
  return f.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && p) {
      const m = new Event("click", { bubbles: n });
      p.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function tC(e) {
  return e ? "checked" : "unchecked";
}
var rC = ZS, Kq = eC;
const Yq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  rC,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ u.jsx(
      Kq,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Yq.displayName = rC.displayName;
const Xq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ u.jsx(
  "table",
  {
    ref: r,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Xq.displayName = "Table";
const Qq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "thead",
  {
    ref: r,
    className: M("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
Qq.displayName = "TableHeader";
const Zq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tbody",
  {
    ref: r,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Zq.displayName = "TableBody";
const Jq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tfoot",
  {
    ref: r,
    className: M(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
Jq.displayName = "TableFooter";
const eB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tr",
  {
    ref: r,
    className: M(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
eB.displayName = "TableRow";
const tB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "th",
  {
    ref: r,
    className: M(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
tB.displayName = "TableHead";
const rB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: r,
    className: M(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
rB.displayName = "TableCell";
const nB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: r,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
nB.displayName = "TableCaption";
var of = "Tabs", [oB, t4] = Te(of, [
  Yt
]), nC = Yt(), [aB, af] = oB(of), oC = f.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...l
    } = e, d = Dt(s), [p, m] = Re({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ u.jsx(
      aB,
      {
        scope: r,
        baseId: _e(),
        value: p,
        onValueChange: m,
        orientation: i,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ u.jsx(
          V.div,
          {
            dir: d,
            "data-orientation": i,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
oC.displayName = of;
var aC = "TabsList", iC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = af(aC, r), i = nC(r);
    return /* @__PURE__ */ u.jsx(
      ja,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ u.jsx(
          V.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
iC.displayName = aC;
var sC = "TabsTrigger", cC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = af(sC, r), s = nC(r), c = dC(i.baseId, n), l = fC(i.baseId, n), d = n === i.value;
    return /* @__PURE__ */ u.jsx(
      Da,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ u.jsx(
          V.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": l,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: q(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(n);
            }),
            onFocus: q(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !d && !o && p && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
cC.displayName = sC;
var lC = "TabsContent", uC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = af(lC, r), c = dC(s.baseId, n), l = fC(s.baseId, n), d = n === s.value, p = f.useRef(d);
    return f.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ u.jsx(we, { present: o || d, children: ({ present: m }) => /* @__PURE__ */ u.jsx(
      V.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !m,
        id: l,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
uC.displayName = lC;
function dC(e, t) {
  return `${e}-trigger-${t}`;
}
function fC(e, t) {
  return `${e}-content-${t}`;
}
var iB = oC, pC = iC, mC = cC, hC = uC;
const r4 = iB, sB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  pC,
  {
    ref: r,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
sB.displayName = pC.displayName;
const cB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  mC,
  {
    ref: r,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
cB.displayName = mC.displayName;
const lB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  hC,
  {
    ref: r,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
lB.displayName = hC.displayName;
const uB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "textarea",
  {
    className: M(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...t
  }
));
uB.displayName = "Textarea";
var sf = "ToastProvider", [cf, dB, fB] = fr("Toast"), [vC, n4] = Te("Toast", [fB]), [pB, Wa] = vC(sf), gC = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = f.useState(null), [l, d] = f.useState(0), p = f.useRef(!1), m = f.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${sf}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u.jsx(cf.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
    pB,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: l,
      viewport: s,
      onViewportChange: c,
      onToastAdd: f.useCallback(() => d((v) => v + 1), []),
      onToastRemove: f.useCallback(() => d((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
gC.displayName = sf;
var yC = "ToastViewport", mB = ["F8"], pu = "toast.viewportPause", mu = "toast.viewportResume", bC = f.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = mB,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Wa(yC, r), s = dB(r), c = f.useRef(null), l = f.useRef(null), d = f.useRef(null), p = f.useRef(null), m = ie(t, p, i.onViewportChange), v = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
    f.useEffect(() => {
      const g = (b) => {
        var w;
        n.length !== 0 && n.every((_) => b[_] || b.code === _) && ((w = p.current) == null || w.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), f.useEffect(() => {
      const g = c.current, b = p.current;
      if (y && g && b) {
        const x = () => {
          if (!i.isClosePausedRef.current) {
            const S = new CustomEvent(pu);
            b.dispatchEvent(S), i.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (i.isClosePausedRef.current) {
            const S = new CustomEvent(mu);
            b.dispatchEvent(S), i.isClosePausedRef.current = !1;
          }
        }, _ = (S) => {
          !g.contains(S.relatedTarget) && w();
        }, C = () => {
          g.contains(document.activeElement) || w();
        };
        return g.addEventListener("focusin", x), g.addEventListener("focusout", _), g.addEventListener("pointermove", x), g.addEventListener("pointerleave", C), window.addEventListener("blur", x), window.addEventListener("focus", w), () => {
          g.removeEventListener("focusin", x), g.removeEventListener("focusout", _), g.removeEventListener("pointermove", x), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", x), window.removeEventListener("focus", w);
        };
      }
    }, [y, i.isClosePausedRef]);
    const h = f.useCallback(
      ({ tabbingDirection: g }) => {
        const x = s().map((w) => {
          const _ = w.ref.current, C = [_, ...TB(_)];
          return g === "forwards" ? C : C.reverse();
        });
        return (g === "forwards" ? x.reverse() : x).flat();
      },
      [s]
    );
    return f.useEffect(() => {
      const g = p.current;
      if (g) {
        const b = (x) => {
          var C, S, P;
          const w = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !w) {
            const R = document.activeElement, T = x.shiftKey;
            if (x.target === g && T) {
              (C = l.current) == null || C.focus();
              return;
            }
            const W = h({ tabbingDirection: T ? "backwards" : "forwards" }), F = W.findIndex((N) => N === R);
            yl(W.slice(F + 1)) ? x.preventDefault() : T ? (S = l.current) == null || S.focus() : (P = d.current) == null || P.focus();
          }
        };
        return g.addEventListener("keydown", b), () => g.removeEventListener("keydown", b);
      }
    }, [s, h]), /* @__PURE__ */ u.jsxs(
      NE,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ u.jsx(
            hu,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                yl(g);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(cf.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(V.ol, { tabIndex: -1, ...a, ref: m }) }),
          y && /* @__PURE__ */ u.jsx(
            hu,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                yl(g);
              }
            }
          )
        ]
      }
    );
  }
);
bC.displayName = yC;
var xC = "ToastFocusProxy", hu = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = Wa(xC, r);
    return /* @__PURE__ */ u.jsx(
      Jn,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var l;
          const s = i.relatedTarget;
          !((l = a.viewport) != null && l.contains(s)) && n();
        }
      }
    );
  }
);
hu.displayName = xC;
var Ha = "Toast", hB = "toast.swipeStart", vB = "toast.swipeMove", gB = "toast.swipeCancel", yB = "toast.swipeEnd", wC = f.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s = !0, c] = Re({
      prop: n,
      defaultProp: o,
      onChange: a
    });
    return /* @__PURE__ */ u.jsx(we, { present: r || s, children: /* @__PURE__ */ u.jsx(
      wB,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: pe(e.onPause),
        onResume: pe(e.onResume),
        onSwipeStart: q(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: q(e.onSwipeMove, (l) => {
          const { x: d, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: q(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: q(e.onSwipeEnd, (l) => {
          const { x: d, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), c(!1);
        })
      }
    ) });
  }
);
wC.displayName = Ha;
var [bB, xB] = vC(Ha, {
  onClose() {
  }
}), wB = f.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      type: n = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: c,
      onResume: l,
      onSwipeStart: d,
      onSwipeMove: p,
      onSwipeCancel: m,
      onSwipeEnd: v,
      ...y
    } = e, h = Wa(Ha, r), [g, b] = f.useState(null), x = ie(t, (N) => b(N)), w = f.useRef(null), _ = f.useRef(null), C = o || h.duration, S = f.useRef(0), P = f.useRef(C), R = f.useRef(0), { onToastAdd: T, onToastRemove: I } = h, O = pe(() => {
      var L;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((L = h.viewport) == null || L.focus()), i();
    }), W = f.useCallback(
      (N) => {
        !N || N === 1 / 0 || (window.clearTimeout(R.current), S.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(O, N));
      },
      [O]
    );
    f.useEffect(() => {
      const N = h.viewport;
      if (N) {
        const L = () => {
          W(P.current), l == null || l();
        }, D = () => {
          const k = (/* @__PURE__ */ new Date()).getTime() - S.current;
          P.current = P.current - k, window.clearTimeout(R.current), c == null || c();
        };
        return N.addEventListener(pu, D), N.addEventListener(mu, L), () => {
          N.removeEventListener(pu, D), N.removeEventListener(mu, L);
        };
      }
    }, [h.viewport, C, c, l, W]), f.useEffect(() => {
      a && !h.isClosePausedRef.current && W(C);
    }, [a, C, h.isClosePausedRef, W]), f.useEffect(() => (T(), () => I()), [T, I]);
    const F = f.useMemo(() => g ? NC(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      F && /* @__PURE__ */ u.jsx(
        _B,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: F
        }
      ),
      /* @__PURE__ */ u.jsx(bB, { scope: r, onClose: O, children: Mn.createPortal(
        /* @__PURE__ */ u.jsx(cf.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
          TE,
          {
            asChild: !0,
            onEscapeKeyDown: q(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || O(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ u.jsx(
              V.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...y,
                ref: x,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: q(e.onKeyDown, (N) => {
                  N.key === "Escape" && (s == null || s(N.nativeEvent), N.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, O()));
                }),
                onPointerDown: q(e.onPointerDown, (N) => {
                  N.button === 0 && (w.current = { x: N.clientX, y: N.clientY });
                }),
                onPointerMove: q(e.onPointerMove, (N) => {
                  if (!w.current) return;
                  const L = N.clientX - w.current.x, D = N.clientY - w.current.y, k = !!_.current, A = ["left", "right"].includes(h.swipeDirection), $ = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, re = A ? $(0, L) : 0, ee = A ? 0 : $(0, D), j = N.pointerType === "touch" ? 10 : 2, G = { x: re, y: ee }, Y = { originalEvent: N, delta: G };
                  k ? (_.current = G, go(vB, p, Y, {
                    discrete: !1
                  })) : Gv(G, h.swipeDirection, j) ? (_.current = G, go(hB, d, Y, {
                    discrete: !1
                  }), N.target.setPointerCapture(N.pointerId)) : (Math.abs(L) > j || Math.abs(D) > j) && (w.current = null);
                }),
                onPointerUp: q(e.onPointerUp, (N) => {
                  const L = _.current, D = N.target;
                  if (D.hasPointerCapture(N.pointerId) && D.releasePointerCapture(N.pointerId), _.current = null, w.current = null, L) {
                    const k = N.currentTarget, A = { originalEvent: N, delta: L };
                    Gv(L, h.swipeDirection, h.swipeThreshold) ? go(yB, v, A, {
                      discrete: !0
                    }) : go(
                      gB,
                      m,
                      A,
                      {
                        discrete: !0
                      }
                    ), k.addEventListener("click", ($) => $.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        h.viewport
      ) })
    ] }) : null;
  }
), _B = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Wa(Ha, t), [a, i] = f.useState(!1), [s, c] = f.useState(!1);
  return PB(() => i(!0)), f.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ u.jsx(pr, { asChild: !0, children: /* @__PURE__ */ u.jsx(Jn, { ...n, children: a && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, SB = "ToastTitle", _C = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(V.div, { ...n, ref: t });
  }
);
_C.displayName = SB;
var CB = "ToastDescription", SC = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(V.div, { ...n, ref: t });
  }
);
SC.displayName = CB;
var CC = "ToastAction", PC = f.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ u.jsx(TC, { altText: r, asChild: !0, children: /* @__PURE__ */ u.jsx(lf, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${CC}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
PC.displayName = CC;
var EC = "ToastClose", lf = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = xB(EC, r);
    return /* @__PURE__ */ u.jsx(TC, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      V.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
lf.displayName = EC;
var TC = f.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ u.jsx(
    V.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function NC(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), EB(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...NC(n));
    }
  }), t;
}
function go(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? pn(o, a) : o.dispatchEvent(a);
}
var Gv = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function PB(e = () => {
}) {
  const t = pe(e);
  Pe(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function EB(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function TB(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function yl(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var NB = gC, RC = bC, MC = wC, AC = _C, OC = SC, jC = PC, DC = lf;
const RB = NB, MB = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, IC = f.forwardRef(({ className: e, position: t = "bottom-right", ...r }, n) => /* @__PURE__ */ u.jsx(
  RC,
  {
    ref: n,
    className: M(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${MB[t]}`,
      e
    ),
    ...r
  }
));
IC.displayName = RC.displayName;
const AB = St(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border-success bg-success text-success-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), kC = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  MC,
  {
    ref: n,
    className: M(AB({ variant: t }), e),
    ...r
  }
));
kC.displayName = MC.displayName;
const OB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  jC,
  {
    ref: r,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
OB.displayName = jC.displayName;
const LC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  DC,
  {
    ref: r,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ u.jsx(aa, { className: "h-4 w-4" })
  }
));
LC.displayName = DC.displayName;
const $C = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  AC,
  {
    ref: r,
    className: M("text-sm font-semibold", e),
    ...t
  }
));
$C.displayName = AC.displayName;
const FC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  OC,
  {
    ref: r,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
FC.displayName = OC.displayName;
const jB = 1, DB = 1e4;
let bl = 0;
function IB() {
  return bl = (bl + 1) % Number.MAX_SAFE_INTEGER, bl.toString();
}
const xl = /* @__PURE__ */ new Map(), Uv = (e) => {
  if (xl.has(e))
    return;
  const t = setTimeout(() => {
    xl.delete(e), fn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, DB);
  xl.set(e, t);
}, kB = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, jB)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === t.toast.id ? { ...r, ...t.toast } : r
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? Uv(r) : e.toasts.forEach((n) => {
        Uv(n.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}, Eo = [];
let To = { toasts: [] };
function fn(e) {
  To = kB(To, e), Eo.forEach((t) => {
    t(To);
  });
}
function LB({ ...e }) {
  const t = IB(), r = (o) => fn({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => fn({ type: "DISMISS_TOAST", toastId: t });
  return fn({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: r
  };
}
function $B() {
  const [e, t] = f.useState(To);
  return f.useEffect(() => (Eo.push(t), () => {
    const r = Eo.indexOf(t);
    r > -1 && Eo.splice(r, 1);
  }), [e]), {
    ...e,
    toast: LB,
    dismiss: (r) => fn({ type: "DISMISS_TOAST", toastId: r })
  };
}
function o4() {
  const { toasts: e } = $B();
  return /* @__PURE__ */ u.jsxs(RB, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ u.jsxs(kC, { ...a, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ u.jsx($C, { children: r }),
          n && /* @__PURE__ */ u.jsx(FC, { children: n })
        ] }),
        o,
        /* @__PURE__ */ u.jsx(LC, {})
      ] }, t);
    }),
    /* @__PURE__ */ u.jsx(IC, {})
  ] });
}
var FB = "Toggle", uf = f.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n = !1, onPressedChange: o, ...a } = e, [i = !1, s] = Re({
    prop: r,
    onChange: o,
    defaultProp: n
  });
  return /* @__PURE__ */ u.jsx(
    V.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: q(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
uf.displayName = FB;
var qC = uf;
const BC = St(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), qB = f.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ u.jsx(
  qC,
  {
    ref: o,
    className: M(BC({ variant: t, size: r, className: e })),
    ...n
  }
));
qB.displayName = qC.displayName;
var Zr = "ToggleGroup", [WC, a4] = Te(Zr, [
  Yt
]), HC = Yt(), df = K.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single") {
    const o = n;
    return /* @__PURE__ */ u.jsx(BB, { ...o, ref: t });
  }
  if (r === "multiple") {
    const o = n;
    return /* @__PURE__ */ u.jsx(WB, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Zr}\``);
});
df.displayName = Zr;
var [VC, zC] = WC(Zr), BB = K.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Re({
    prop: r,
    defaultProp: n,
    onChange: o
  });
  return /* @__PURE__ */ u.jsx(
    VC,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: s,
      onItemDeactivate: K.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ u.jsx(GC, { ...a, ref: t })
    }
  );
}), WB = K.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Re({
    prop: r,
    defaultProp: n,
    onChange: o
  }), c = K.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = K.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ u.jsx(
    VC,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ u.jsx(GC, { ...a, ref: t })
    }
  );
});
df.displayName = Zr;
var [HB, VB] = WC(Zr), GC = K.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = HC(r), d = Dt(i), p = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ u.jsx(HB, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ u.jsx(
      ja,
      {
        asChild: !0,
        ...l,
        orientation: a,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ u.jsx(V.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx(V.div, { ...p, ref: t }) });
  }
), ea = "ToggleGroupItem", UC = K.forwardRef(
  (e, t) => {
    const r = zC(ea, e.__scopeToggleGroup), n = VB(ea, e.__scopeToggleGroup), o = HC(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = K.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ u.jsx(
      Da,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ u.jsx(Kv, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx(Kv, { ...s, ref: t });
  }
);
UC.displayName = ea;
var Kv = K.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = zC(ea, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ u.jsx(
      uf,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? a.onItemActivate(n) : a.onItemDeactivate(n);
        }
      }
    );
  }
), KC = df, YC = UC;
const XC = f.createContext({
  size: "default",
  variant: "default"
}), zB = f.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ u.jsx(
  KC,
  {
    ref: a,
    className: M("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ u.jsx(XC.Provider, { value: { variant: t, size: r }, children: n })
  }
));
zB.displayName = KC.displayName;
const GB = f.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = f.useContext(XC);
  return /* @__PURE__ */ u.jsx(
    YC,
    {
      ref: a,
      className: M(
        BC({
          variant: i.variant || r,
          size: i.size || n
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
GB.displayName = YC.displayName;
var [Va, i4] = Te("Tooltip", [
  Ut
]), za = Ut(), QC = "TooltipProvider", UB = 700, vu = "tooltip.open", [KB, ff] = Va(QC), ZC = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = UB,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, [i, s] = f.useState(!0), c = f.useRef(!1), l = f.useRef(0);
  return f.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ u.jsx(
    KB,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: r,
      onOpen: f.useCallback(() => {
        window.clearTimeout(l.current), s(!1);
      }, []),
      onClose: f.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: f.useCallback((d) => {
        c.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
ZC.displayName = QC;
var Ga = "Tooltip", [YB, to] = Va(Ga), JC = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o = !1,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = ff(Ga, e.__scopeTooltip), l = za(t), [d, p] = f.useState(null), m = _e(), v = f.useRef(0), y = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = f.useRef(!1), [b = !1, x] = Re({
    prop: n,
    defaultProp: o,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(vu))) : c.onClose(), a == null || a(P);
    }
  }), w = f.useMemo(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [b]), _ = f.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, x(!0);
  }, [x]), C = f.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, x(!1);
  }, [x]), S = f.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, x(!0), v.current = 0;
    }, h);
  }, [h, x]);
  return f.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ u.jsx(Un, { ...l, children: /* @__PURE__ */ u.jsx(
    YB,
    {
      scope: t,
      contentId: m,
      open: b,
      stateAttribute: w,
      trigger: d,
      onTriggerChange: p,
      onTriggerEnter: f.useCallback(() => {
        c.isOpenDelayed ? S() : _();
      }, [c.isOpenDelayed, S, _]),
      onTriggerLeave: f.useCallback(() => {
        y ? C() : (window.clearTimeout(v.current), v.current = 0);
      }, [C, y]),
      onOpen: _,
      onClose: C,
      disableHoverableContent: y,
      children: r
    }
  ) });
};
JC.displayName = Ga;
var gu = "TooltipTrigger", e0 = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = to(gu, r), a = ff(gu, r), i = za(r), s = f.useRef(null), c = ie(t, s, o.onTriggerChange), l = f.useRef(!1), d = f.useRef(!1), p = f.useCallback(() => l.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ u.jsx(Kn, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      V.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: q(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          l.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: q(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: q(e.onBlur, o.onClose),
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
e0.displayName = gu;
var pf = "TooltipPortal", [XB, QB] = Va(pf, {
  forceMount: void 0
}), t0 = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = to(pf, t);
  return /* @__PURE__ */ u.jsx(XB, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(we, { present: r || a.open, children: /* @__PURE__ */ u.jsx(pr, { asChild: !0, container: o, children: n }) }) });
};
t0.displayName = pf;
var qr = "TooltipContent", r0 = f.forwardRef(
  (e, t) => {
    const r = QB(qr, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = to(qr, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(we, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ u.jsx(n0, { side: o, ...a, ref: t }) : /* @__PURE__ */ u.jsx(ZB, { side: o, ...a, ref: t }) });
  }
), ZB = f.forwardRef((e, t) => {
  const r = to(qr, e.__scopeTooltip), n = ff(qr, e.__scopeTooltip), o = f.useRef(null), a = ie(t, o), [i, s] = f.useState(null), { trigger: c, onClose: l } = r, d = o.current, { onPointerInTransitChange: p } = n, m = f.useCallback(() => {
    s(null), p(!1);
  }, [p]), v = f.useCallback(
    (y, h) => {
      const g = y.currentTarget, b = { x: y.clientX, y: y.clientY }, x = rW(b, g.getBoundingClientRect()), w = nW(b, x), _ = oW(h.getBoundingClientRect()), C = iW([...w, ..._]);
      s(C), p(!0);
    },
    [p]
  );
  return f.useEffect(() => () => m(), [m]), f.useEffect(() => {
    if (c && d) {
      const y = (g) => v(g, d), h = (g) => v(g, c);
      return c.addEventListener("pointerleave", y), d.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", y), d.removeEventListener("pointerleave", h);
      };
    }
  }, [c, d, v, m]), f.useEffect(() => {
    if (i) {
      const y = (h) => {
        const g = h.target, b = { x: h.clientX, y: h.clientY }, x = (c == null ? void 0 : c.contains(g)) || (d == null ? void 0 : d.contains(g)), w = !aW(b, i);
        x ? m() : w && (m(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, d, i, l, m]), /* @__PURE__ */ u.jsx(n0, { ...e, ref: a });
}), [JB, eW] = Va(Ga, { isInside: !1 }), n0 = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = to(qr, r), l = za(r), { onClose: d } = c;
    return f.useEffect(() => (document.addEventListener(vu, d), () => document.removeEventListener(vu, d)), [d]), f.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(c.trigger) && d();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, d]), /* @__PURE__ */ u.jsx(
      zt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ u.jsxs(
          Na,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u.jsx(bu, { children: n }),
              /* @__PURE__ */ u.jsx(JB, { scope: r, isInside: !0, children: /* @__PURE__ */ u.jsx(u_, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
r0.displayName = qr;
var o0 = "TooltipArrow", tW = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = za(r);
    return eW(
      o0,
      r
    ).isInside ? null : /* @__PURE__ */ u.jsx(Ra, { ...o, ...n, ref: t });
  }
);
tW.displayName = o0;
function rW(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function nW(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function oW(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function aW(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, d = t[i].y;
    c > n != d > n && r < (l - s) * (n - c) / (d - c) + s && (o = !o);
  }
  return o;
}
function iW(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), sW(t);
}
function sW(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], i = r[r.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var cW = ZC, lW = JC, uW = e0, dW = t0, a0 = r0;
const s4 = cW, c4 = lW, l4 = uW, fW = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(dW, { children: /* @__PURE__ */ u.jsx(
  a0,
  {
    ref: n,
    sideOffset: t,
    className: M(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
fW.displayName = a0.displayName;
export {
  yW as Accordion,
  hE as AccordionContent,
  pE as AccordionItem,
  mE as AccordionTrigger,
  CF as AiqiaSpinner,
  gE as Alert,
  bE as AlertDescription,
  xW as AlertDialog,
  KT as AlertDialogAction,
  YT as AlertDialogCancel,
  HT as AlertDialogContent,
  UT as AlertDialogDescription,
  zT as AlertDialogFooter,
  VT as AlertDialogHeader,
  Cy as AlertDialogOverlay,
  WT as AlertDialogPortal,
  GT as AlertDialogTitle,
  wW as AlertDialogTrigger,
  yE as AlertTitle,
  JT as Avatar,
  tN as AvatarFallback,
  eN as AvatarImage,
  Bf as Badge,
  nN as Breadcrumb,
  lN as BreadcrumbEllipsis,
  aN as BreadcrumbItem,
  iN as BreadcrumbLink,
  oN as BreadcrumbList,
  sN as BreadcrumbPage,
  cN as BreadcrumbSeparator,
  Gr as Button,
  rb as Calendar,
  IM as Card,
  FM as CardContent,
  $M as CardDescription,
  qM as CardFooter,
  kM as CardHeader,
  LM as CardTitle,
  wA as Carousel,
  _A as CarouselContent,
  SA as CarouselItem,
  PA as CarouselNext,
  CA as CarouselPrevious,
  XI as ChartContainer,
  EW as ChartLegend,
  JI as ChartLegendContent,
  QI as ChartStyle,
  PW as ChartTooltip,
  ZI as ChartTooltipContent,
  ak as Checkbox,
  yd as Command,
  NW as CommandDialog,
  ux as CommandEmpty,
  dx as CommandGroup,
  cx as CommandInput,
  _o as CommandItem,
  lx as CommandList,
  fx as CommandSeparator,
  Dk as CommandShortcut,
  MW as DatePicker,
  f$ as DateTimePicker,
  p$ as Dialog,
  OW as DialogClose,
  Qx as DialogContent,
  y$ as DialogDescription,
  v$ as DialogFooter,
  h$ as DialogHeader,
  Xx as DialogOverlay,
  m$ as DialogPortal,
  g$ as DialogTitle,
  AW as DialogTrigger,
  DW as DropdownMenu,
  W2 as DropdownMenuCheckboxItem,
  q2 as DropdownMenuContent,
  kW as DropdownMenuGroup,
  B2 as DropdownMenuItem,
  V2 as DropdownMenuLabel,
  LW as DropdownMenuPortal,
  FW as DropdownMenuRadioGroup,
  H2 as DropdownMenuRadioItem,
  z2 as DropdownMenuSeparator,
  G2 as DropdownMenuShortcut,
  $W as DropdownMenuSub,
  F2 as DropdownMenuSubContent,
  $2 as DropdownMenuSubTrigger,
  IW as DropdownMenuTrigger,
  qW as Form,
  c_ as FormControl,
  X2 as FormDescription,
  Y2 as FormField,
  i_ as FormItem,
  s_ as FormLabel,
  l_ as FormMessage,
  BW as Heading,
  Wd as Input,
  WW as InputForm,
  n_ as Label,
  SF as ListItem,
  zW as Loader,
  PF as MaskedInput,
  TF as MultiSelect,
  vF as NavigationMenu,
  xF as NavigationMenuContent,
  _F as NavigationMenuIndicator,
  VW as NavigationMenuItem,
  wF as NavigationMenuLink,
  gF as NavigationMenuList,
  bF as NavigationMenuTrigger,
  k_ as NavigationMenuViewport,
  NF as Pagination,
  RF as PaginationContent,
  jF as PaginationEllipsis,
  MF as PaginationItem,
  Yd as PaginationLink,
  OF as PaginationNext,
  AF as PaginationPrevious,
  Md as Popover,
  Ma as PopoverContent,
  Ad as PopoverTrigger,
  VF as RadioGroup,
  zF as RadioGroupItem,
  aq as ScrollArea,
  lS as ScrollBar,
  du as Select,
  Jo as SelectContent,
  YW as SelectGroup,
  Rn as SelectItem,
  Oq as SelectLabel,
  US as SelectScrollDownButton,
  GS as SelectScrollUpButton,
  jq as SelectSeparator,
  Zo as SelectTrigger,
  fu as SelectValue,
  XS as Separator,
  XW as Sheet,
  ZW as SheetClose,
  Fq as SheetContent,
  Hq as SheetDescription,
  Bq as SheetFooter,
  qq as SheetHeader,
  QS as SheetOverlay,
  Lq as SheetPortal,
  Wq as SheetTitle,
  QW as SheetTrigger,
  JW as Skeleton,
  Yq as Switch,
  Xq as Table,
  Zq as TableBody,
  nB as TableCaption,
  rB as TableCell,
  Jq as TableFooter,
  tB as TableHead,
  Qq as TableHeader,
  eB as TableRow,
  r4 as Tabs,
  lB as TabsContent,
  sB as TabsList,
  cB as TabsTrigger,
  uB as Textarea,
  Yx as TimePicker,
  Co as TimePickerInput,
  kC as Toast,
  OB as ToastAction,
  LC as ToastClose,
  FC as ToastDescription,
  RB as ToastProvider,
  $C as ToastTitle,
  IC as ToastViewport,
  o4 as Toaster,
  qB as Toggle,
  zB as ToggleGroup,
  GB as ToggleGroupItem,
  c4 as Tooltip,
  fW as TooltipContent,
  s4 as TooltipProvider,
  l4 as TooltipTrigger,
  rN as badgeVariants,
  CW as brazillianStates,
  vt as buttonVariants,
  M as cn,
  SW as mask,
  yF as navigationMenuTriggerStyle,
  kB as reducer,
  LB as toast,
  BC as toggleVariants,
  ka as useFormField,
  $B as useToast
};
