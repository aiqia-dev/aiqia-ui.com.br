import * as d from "react";
import A, { forwardRef as bu, createElement as Cl, useState as Yt, createContext as eE, useContext as tE, useCallback as He, useRef as Ot, useLayoutEffect as Lv, useEffect as At, useMemo as Eo, isValidElement as rE, PureComponent as ia, useImperativeHandle as wu, cloneElement as nE } from "react";
import * as Ln from "react-dom";
import Fv from "react-dom";
import { Link as oE } from "react-router-dom";
import { useFormContext as qv, FormProvider as aE, Controller as iE } from "react-hook-form";
var lo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ct(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uo = { exports: {} }, an = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function sE() {
  if (sf) return an;
  sf = 1;
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
  return an.Fragment = t, an.jsx = r, an.jsxs = r, an;
}
var sn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf;
function cE() {
  return cf || (cf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(P) {
      if (P == null) return null;
      if (typeof P == "function")
        return P.$$typeof === B ? null : P.displayName || P.name || null;
      if (typeof P == "string") return P;
      switch (P) {
        case S:
          return "Fragment";
        case _:
          return "Portal";
        case R:
          return "Profiler";
        case E:
          return "StrictMode";
        case F:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (typeof P.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), P.$$typeof) {
          case D:
            return (P.displayName || "Context") + ".Provider";
          case T:
            return (P._context.displayName || "Context") + ".Consumer";
          case O:
            var X = P.render;
            return P = P.displayName, P || (P = X.displayName || X.name || "", P = P !== "" ? "ForwardRef(" + P + ")" : "ForwardRef"), P;
          case N:
            return X = P.displayName || null, X !== null ? X : e(P.type) || "Memo";
          case I:
            X = P._payload, P = P._init;
            try {
              return e(P(X));
            } catch {
            }
        }
      return null;
    }
    function t(P) {
      return "" + P;
    }
    function r(P) {
      try {
        t(P);
        var X = !1;
      } catch {
        X = !0;
      }
      if (X) {
        X = console;
        var Z = X.error, pe = typeof Symbol == "function" && Symbol.toStringTag && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return Z.call(
          X,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          pe
        ), t(P);
      }
    }
    function n() {
    }
    function o() {
      if (K === 0) {
        U = console.log, ne = console.info, W = console.warn, Q = console.error, se = console.group, ae = console.groupCollapsed, oe = console.groupEnd;
        var P = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: P,
          log: P,
          warn: P,
          error: P,
          group: P,
          groupCollapsed: P,
          groupEnd: P
        });
      }
      K++;
    }
    function a() {
      if (K--, K === 0) {
        var P = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ee({}, P, { value: U }),
          info: ee({}, P, { value: ne }),
          warn: ee({}, P, { value: W }),
          error: ee({}, P, { value: Q }),
          group: ee({}, P, { value: se }),
          groupCollapsed: ee({}, P, { value: ae }),
          groupEnd: ee({}, P, { value: oe })
        });
      }
      0 > K && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function i(P) {
      if (H === void 0)
        try {
          throw Error();
        } catch (Z) {
          var X = Z.stack.trim().match(/\n( *(at )?)/);
          H = X && X[1] || "", ue = -1 < Z.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Z.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + H + P + ue;
    }
    function s(P, X) {
      if (!P || z) return "";
      var Z = ge.get(P);
      if (Z !== void 0) return Z;
      z = !0, Z = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var pe = null;
      pe = $.H, $.H = null, o();
      try {
        var De = {
          DetermineComponentFrameRoot: function() {
            try {
              if (X) {
                var le = function() {
                  throw Error();
                };
                if (Object.defineProperty(le.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(le, []);
                  } catch (fe) {
                    var Se = fe;
                  }
                  Reflect.construct(P, [], le);
                } else {
                  try {
                    le.call();
                  } catch (fe) {
                    Se = fe;
                  }
                  P.call(le.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (fe) {
                  Se = fe;
                }
                (le = P()) && typeof le.catch == "function" && le.catch(function() {
                });
              }
            } catch (fe) {
              if (fe && Se && typeof fe.stack == "string")
                return [fe.stack, Se.stack];
            }
            return [null, null];
          }
        };
        De.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var Ce = Object.getOwnPropertyDescriptor(
          De.DetermineComponentFrameRoot,
          "name"
        );
        Ce && Ce.configurable && Object.defineProperty(
          De.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var de = De.DetermineComponentFrameRoot(), ze = de[0], Ze = de[1];
        if (ze && Ze) {
          var Re = ze.split(`
`), We = Ze.split(`
`);
          for (de = Ce = 0; Ce < Re.length && !Re[Ce].includes(
            "DetermineComponentFrameRoot"
          ); )
            Ce++;
          for (; de < We.length && !We[de].includes(
            "DetermineComponentFrameRoot"
          ); )
            de++;
          if (Ce === Re.length || de === We.length)
            for (Ce = Re.length - 1, de = We.length - 1; 1 <= Ce && 0 <= de && Re[Ce] !== We[de]; )
              de--;
          for (; 1 <= Ce && 0 <= de; Ce--, de--)
            if (Re[Ce] !== We[de]) {
              if (Ce !== 1 || de !== 1)
                do
                  if (Ce--, de--, 0 > de || Re[Ce] !== We[de]) {
                    var ot = `
` + Re[Ce].replace(
                      " at new ",
                      " at "
                    );
                    return P.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", P.displayName)), typeof P == "function" && ge.set(P, ot), ot;
                  }
                while (1 <= Ce && 0 <= de);
              break;
            }
        }
      } finally {
        z = !1, $.H = pe, a(), Error.prepareStackTrace = Z;
      }
      return Re = (Re = P ? P.displayName || P.name : "") ? i(Re) : "", typeof P == "function" && ge.set(P, Re), Re;
    }
    function c(P) {
      if (P == null) return "";
      if (typeof P == "function") {
        var X = P.prototype;
        return s(
          P,
          !(!X || !X.isReactComponent)
        );
      }
      if (typeof P == "string") return i(P);
      switch (P) {
        case F:
          return i("Suspense");
        case L:
          return i("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case O:
            return P = s(P.render, !1), P;
          case N:
            return c(P.type);
          case I:
            X = P._payload, P = P._init;
            try {
              return c(P(X));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var P = $.A;
      return P === null ? null : P.getOwner();
    }
    function u(P) {
      if (J.call(P, "key")) {
        var X = Object.getOwnPropertyDescriptor(P, "key").get;
        if (X && X.isReactWarning) return !1;
      }
      return P.key !== void 0;
    }
    function f(P, X) {
      function Z() {
        Te || (Te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          X
        ));
      }
      Z.isReactWarning = !0, Object.defineProperty(P, "key", {
        get: Z,
        configurable: !0
      });
    }
    function m() {
      var P = e(this.type);
      return Be[P] || (Be[P] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), P = this.props.ref, P !== void 0 ? P : null;
    }
    function v(P, X, Z, pe, De, Ce) {
      return Z = Ce.ref, P = {
        $$typeof: C,
        type: P,
        key: X,
        props: Ce,
        _owner: De
      }, (Z !== void 0 ? Z : null) !== null ? Object.defineProperty(P, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(P, "ref", { enumerable: !1, value: null }), P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(P, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    }
    function y(P, X, Z, pe, De, Ce) {
      if (typeof P == "string" || typeof P == "function" || P === S || P === R || P === E || P === F || P === L || P === k || typeof P == "object" && P !== null && (P.$$typeof === I || P.$$typeof === N || P.$$typeof === D || P.$$typeof === T || P.$$typeof === O || P.$$typeof === j || P.getModuleId !== void 0)) {
        var de = X.children;
        if (de !== void 0)
          if (pe)
            if (Y(de)) {
              for (pe = 0; pe < de.length; pe++)
                h(de[pe], P);
              Object.freeze && Object.freeze(de);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else h(de, P);
      } else
        de = "", (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), P === null ? pe = "null" : Y(P) ? pe = "array" : P !== void 0 && P.$$typeof === C ? (pe = "<" + (e(P.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof P, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          pe,
          de
        );
      if (J.call(X, "key")) {
        de = e(P);
        var ze = Object.keys(X).filter(function(Re) {
          return Re !== "key";
        });
        pe = 0 < ze.length ? "{key: someKey, " + ze.join(": ..., ") + ": ...}" : "{key: someKey}", $e[de + pe] || (ze = 0 < ze.length ? "{" + ze.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          pe,
          de,
          ze,
          de
        ), $e[de + pe] = !0);
      }
      if (de = null, Z !== void 0 && (r(Z), de = "" + Z), u(X) && (r(X.key), de = "" + X.key), "key" in X) {
        Z = {};
        for (var Ze in X)
          Ze !== "key" && (Z[Ze] = X[Ze]);
      } else Z = X;
      return de && f(
        Z,
        typeof P == "function" ? P.displayName || P.name || "Unknown" : P
      ), v(P, de, Ce, De, l(), Z);
    }
    function h(P, X) {
      if (typeof P == "object" && P && P.$$typeof !== Ee) {
        if (Y(P))
          for (var Z = 0; Z < P.length; Z++) {
            var pe = P[Z];
            g(pe) && w(pe, X);
          }
        else if (g(P))
          P._store && (P._store.validated = 1);
        else if (P === null || typeof P != "object" ? Z = null : (Z = G && P[G] || P["@@iterator"], Z = typeof Z == "function" ? Z : null), typeof Z == "function" && Z !== P.entries && (Z = Z.call(P), Z !== P))
          for (; !(P = Z.next()).done; )
            g(P.value) && w(P.value, X);
      }
    }
    function g(P) {
      return typeof P == "object" && P !== null && P.$$typeof === C;
    }
    function w(P, X) {
      if (P._store && !P._store.validated && P.key == null && (P._store.validated = 1, X = b(X), !Xe[X])) {
        Xe[X] = !0;
        var Z = "";
        P && P._owner != null && P._owner !== l() && (Z = null, typeof P._owner.tag == "number" ? Z = e(P._owner.type) : typeof P._owner.name == "string" && (Z = P._owner.name), Z = " It was passed a child from " + Z + ".");
        var pe = $.getCurrentStack;
        $.getCurrentStack = function() {
          var De = c(P.type);
          return pe && (De += pe() || ""), De;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          X,
          Z
        ), $.getCurrentStack = pe;
      }
    }
    function b(P) {
      var X = "", Z = l();
      return Z && (Z = e(Z.type)) && (X = `

Check the render method of \`` + Z + "`."), X || (P = e(P)) && (X = `

Check the top-level render call using <` + P + ">."), X;
    }
    var x = A, C = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), D = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), G = Symbol.iterator, B = Symbol.for("react.client.reference"), $ = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, ee = Object.assign, j = Symbol.for("react.client.reference"), Y = Array.isArray, K = 0, U, ne, W, Q, se, ae, oe;
    n.__reactDisabledLog = !0;
    var H, ue, z = !1, ge = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ee = Symbol.for("react.client.reference"), Te, Be = {}, $e = {}, Xe = {};
    sn.Fragment = S, sn.jsx = function(P, X, Z, pe, De) {
      return y(P, X, Z, !1, pe, De);
    }, sn.jsxs = function(P, X, Z, pe, De) {
      return y(P, X, Z, !0, pe, De);
    };
  }()), sn;
}
var lf;
function lE() {
  return lf || (lf = 1, process.env.NODE_ENV === "production" ? uo.exports = sE() : uo.exports = cE()), uo.exports;
}
var p = lE();
function uE(e, t) {
  const r = d.createContext(t), n = (a) => {
    const { children: i, ...s } = a, c = d.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ p.jsx(r.Provider, { value: c, children: i });
  };
  n.displayName = e + "Provider";
  function o(a) {
    const i = d.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function Ae(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = d.createContext(i), c = r.length;
    r = [...r, i];
    const l = (f) => {
      var w;
      const { scope: m, children: v, ...y } = f, h = ((w = m == null ? void 0 : m[e]) == null ? void 0 : w[c]) || s, g = d.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ p.jsx(h.Provider, { value: g, children: v });
    };
    l.displayName = a + "Provider";
    function u(f, m) {
      var h;
      const v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[c]) || s, y = d.useContext(v);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [l, u];
  }
  const o = () => {
    const a = r.map((i) => d.createContext(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [n, dE(o, ...t)];
}
function dE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = n.reduce((s, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...s, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function uf(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Fn(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = uf(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : uf(e[o], null);
        }
      };
  };
}
function ie(...e) {
  return d.useCallback(Fn(...e), e);
}
var xt = d.forwardRef((e, t) => {
  const { children: r, ...n } = e, o = d.Children.toArray(r), a = o.find(fE);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? d.Children.count(i) > 1 ? d.Children.only(null) : d.isValidElement(i) ? i.props.children : null : c);
    return /* @__PURE__ */ p.jsx(_l, { ...n, ref: t, children: d.isValidElement(i) ? d.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ p.jsx(_l, { ...n, ref: t, children: r });
});
xt.displayName = "Slot";
var _l = d.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (d.isValidElement(r)) {
    const o = mE(r), a = pE(n, r.props);
    return r.type !== d.Fragment && (a.ref = t ? Fn(t, o) : o), d.cloneElement(r, a);
  }
  return d.Children.count(r) > 1 ? d.Children.only(null) : null;
});
_l.displayName = "SlotClone";
var xu = ({ children: e }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: e });
function fE(e) {
  return d.isValidElement(e) && e.type === xu;
}
function pE(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      a(...s), o(...s);
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function mE(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function vr(e) {
  const t = e + "CollectionProvider", [r, n] = Ae(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: y, children: h } = v, g = A.useRef(null), w = A.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: y, itemMap: w, collectionRef: g, children: h });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = A.forwardRef(
    (v, y) => {
      const { scope: h, children: g } = v, w = a(s, h), b = ie(y, w.collectionRef);
      return /* @__PURE__ */ p.jsx(xt, { ref: b, children: g });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", u = "data-radix-collection-item", f = A.forwardRef(
    (v, y) => {
      const { scope: h, children: g, ...w } = v, b = A.useRef(null), x = ie(y, b), C = a(l, h);
      return A.useEffect(() => (C.itemMap.set(b, { ref: b, ...w }), () => void C.itemMap.delete(b))), /* @__PURE__ */ p.jsx(xt, { [u]: "", ref: x, children: g });
    }
  );
  f.displayName = l;
  function m(v) {
    const y = a(e + "CollectionConsumer", v);
    return A.useCallback(() => {
      const g = y.collectionRef.current;
      if (!g) return [];
      const w = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (C, _) => w.indexOf(C.ref.current) - w.indexOf(_.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: f },
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
function ve(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function je({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, o] = hE({ defaultProp: t, onChange: r }), a = e !== void 0, i = a ? e : n, s = ve(r), c = d.useCallback(
    (l) => {
      if (a) {
        const f = typeof l == "function" ? l(e) : l;
        f !== e && s(f);
      } else
        o(l);
    },
    [a, e, o, s]
  );
  return [i, c];
}
function hE({
  defaultProp: e,
  onChange: t
}) {
  const r = d.useState(e), [n] = r, o = d.useRef(n), a = ve(t);
  return d.useEffect(() => {
    o.current !== n && (a(n), o.current = n);
  }, [n, o, a]), r;
}
var vE = [
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
], V = vE.reduce((e, t) => {
  const r = d.forwardRef((n, o) => {
    const { asChild: a, ...i } = n, s = a ? xt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(s, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function wn(e, t) {
  e && Ln.flushSync(() => e.dispatchEvent(t));
}
var Oe = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
};
function gE(e, t) {
  return d.useReducer((r, n) => t[r][n] ?? r, e);
}
var Pe = (e) => {
  const { present: t, children: r } = e, n = yE(t), o = typeof r == "function" ? r({ present: n.isPresent }) : d.Children.only(r), a = ie(n.ref, bE(o));
  return typeof r == "function" || n.isPresent ? d.cloneElement(o, { ref: a }) : null;
};
Pe.displayName = "Presence";
function yE(e) {
  const [t, r] = d.useState(), n = d.useRef({}), o = d.useRef(e), a = d.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = gE(i, {
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
  return d.useEffect(() => {
    const l = fo(n.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), Oe(() => {
    const l = n.current, u = o.current;
    if (u !== e) {
      const m = a.current, v = fo(l);
      e ? c("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Oe(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, f = (v) => {
        const h = fo(n.current).includes(v.animationName);
        if (v.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = fo(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: d.useCallback((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function fo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function bE(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var wE = d.useId || (() => {
}), xE = 0;
function Ne(e) {
  const [t, r] = d.useState(wE());
  return Oe(() => {
    r((n) => n ?? String(xE++));
  }, [e]), t ? `radix-${t}` : "";
}
var Su = "Collapsible", [SE, Bv] = Ae(Su), [CE, Cu] = SE(Su), Wv = d.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [c = !1, l] = je({
      prop: n,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ p.jsx(
      CE,
      {
        scope: r,
        disabled: a,
        contentId: Ne(),
        open: c,
        onOpenToggle: d.useCallback(() => l((u) => !u), [l]),
        children: /* @__PURE__ */ p.jsx(
          V.div,
          {
            "data-state": Eu(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Wv.displayName = Su;
var Hv = "CollapsibleTrigger", Vv = d.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = Cu(Hv, r);
    return /* @__PURE__ */ p.jsx(
      V.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Eu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Vv.displayName = Hv;
var _u = "CollapsibleContent", zv = d.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Cu(_u, e.__scopeCollapsible);
    return /* @__PURE__ */ p.jsx(Pe, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ p.jsx(_E, { ...n, ref: t, present: a }) });
  }
);
zv.displayName = _u;
var _E = d.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = Cu(_u, r), [s, c] = d.useState(n), l = d.useRef(null), u = ie(t, l), f = d.useRef(0), m = f.current, v = d.useRef(0), y = v.current, h = i.open || s, g = d.useRef(h), w = d.useRef(void 0);
  return d.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), Oe(() => {
    const b = l.current;
    if (b) {
      w.current = w.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const x = b.getBoundingClientRect();
      f.current = x.height, v.current = x.width, g.current || (b.style.transitionDuration = w.current.transitionDuration, b.style.animationName = w.current.animationName), c(n);
    }
  }, [i.open, n]), /* @__PURE__ */ p.jsx(
    V.div,
    {
      "data-state": Eu(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !h,
      ...a,
      ref: u,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": y ? `${y}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function Eu(e) {
  return e ? "open" : "closed";
}
var EE = Wv, PE = Vv, TE = zv, RE = d.createContext(void 0);
function It(e) {
  const t = d.useContext(RE);
  return e || t || "ltr";
}
var $t = "Accordion", NE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Pu, ME, OE] = vr($t), [sa, wW] = Ae($t, [
  OE,
  Bv
]), Tu = Bv(), Gv = A.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ p.jsx(Pu.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ p.jsx(kE, { ...a, ref: t }) : /* @__PURE__ */ p.jsx(jE, { ...o, ref: t }) });
  }
);
Gv.displayName = $t;
var [Yv, AE] = sa($t), [Uv, DE] = sa(
  $t,
  { collapsible: !1 }
), jE = A.forwardRef(
  (e, t) => {
    const {
      value: r,
      defaultValue: n,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, c] = je({
      prop: r,
      defaultProp: n,
      onChange: o
    });
    return /* @__PURE__ */ p.jsx(
      Yv,
      {
        scope: e.__scopeAccordion,
        value: s ? [s] : [],
        onItemOpen: c,
        onItemClose: A.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ p.jsx(Uv, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ p.jsx(Kv, { ...i, ref: t }) })
      }
    );
  }
), kE = A.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = je({
    prop: r,
    defaultProp: n,
    onChange: o
  }), c = A.useCallback(
    (u) => s((f = []) => [...f, u]),
    [s]
  ), l = A.useCallback(
    (u) => s((f = []) => f.filter((m) => m !== u)),
    [s]
  );
  return /* @__PURE__ */ p.jsx(
    Yv,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ p.jsx(Uv, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ p.jsx(Kv, { ...a, ref: t }) })
    }
  );
}), [IE, ca] = sa($t), Kv = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = A.useRef(null), c = ie(s, t), l = ME(r), f = It(o) === "ltr", m = q(e.onKeyDown, (v) => {
      var R;
      if (!NE.includes(v.key)) return;
      const y = v.target, h = l().filter((T) => {
        var D;
        return !((D = T.ref.current) != null && D.disabled);
      }), g = h.findIndex((T) => T.ref.current === y), w = h.length;
      if (g === -1) return;
      v.preventDefault();
      let b = g;
      const x = 0, C = w - 1, _ = () => {
        b = g + 1, b > C && (b = x);
      }, S = () => {
        b = g - 1, b < x && (b = C);
      };
      switch (v.key) {
        case "Home":
          b = x;
          break;
        case "End":
          b = C;
          break;
        case "ArrowRight":
          a === "horizontal" && (f ? _() : S());
          break;
        case "ArrowDown":
          a === "vertical" && _();
          break;
        case "ArrowLeft":
          a === "horizontal" && (f ? S() : _());
          break;
        case "ArrowUp":
          a === "vertical" && S();
          break;
      }
      const E = b % w;
      (R = h[E].ref.current) == null || R.focus();
    });
    return /* @__PURE__ */ p.jsx(
      IE,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ p.jsx(Pu.Slot, { scope: r, children: /* @__PURE__ */ p.jsx(
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
), ko = "AccordionItem", [$E, Ru] = sa(ko), Xv = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = ca(ko, r), i = AE(ko, r), s = Tu(r), c = Ne(), l = n && i.value.includes(n) || !1, u = a.disabled || e.disabled;
    return /* @__PURE__ */ p.jsx(
      $E,
      {
        scope: r,
        open: l,
        disabled: u,
        triggerId: c,
        children: /* @__PURE__ */ p.jsx(
          EE,
          {
            "data-orientation": a.orientation,
            "data-state": rg(l),
            ...s,
            ...o,
            ref: t,
            disabled: u,
            open: l,
            onOpenChange: (f) => {
              f ? i.onItemOpen(n) : i.onItemClose(n);
            }
          }
        )
      }
    );
  }
);
Xv.displayName = ko;
var Zv = "AccordionHeader", Qv = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = ca($t, r), a = Ru(Zv, r);
    return /* @__PURE__ */ p.jsx(
      V.h3,
      {
        "data-orientation": o.orientation,
        "data-state": rg(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Qv.displayName = Zv;
var El = "AccordionTrigger", Jv = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = ca($t, r), a = Ru(El, r), i = DE(El, r), s = Tu(r);
    return /* @__PURE__ */ p.jsx(Pu.ItemSlot, { scope: r, children: /* @__PURE__ */ p.jsx(
      PE,
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
Jv.displayName = El;
var eg = "AccordionContent", tg = A.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = ca($t, r), a = Ru(eg, r), i = Tu(r);
    return /* @__PURE__ */ p.jsx(
      TE,
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
tg.displayName = eg;
function rg(e) {
  return e ? "open" : "closed";
}
var LE = Gv, FE = Xv, qE = Qv, ng = Jv, og = tg;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ag = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var WE = {
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
const HE = bu(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => Cl(
    "svg",
    {
      ref: c,
      ...WE,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: ag("lucide", o),
      ...s
    },
    [
      ...i.map(([l, u]) => Cl(l, u)),
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
const Fe = (e, t) => {
  const r = bu(
    ({ className: n, ...o }, a) => Cl(HE, {
      ref: a,
      iconNode: t,
      className: ag(`lucide-${BE(e)}`, n),
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
const VE = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], zE = Fe("ArrowLeft", VE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GE = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], YE = Fe("ArrowRight", GE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UE = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], ig = Fe("Calendar", UE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], xn = Fe("Check", KE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], kr = Fe("ChevronDown", XE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZE = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], sg = Fe("ChevronLeft", ZE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], la = Fe("ChevronRight", QE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JE = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], e0 = Fe("ChevronUp", JE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], df = Fe("CircleX", t0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], cg = Fe("Circle", r0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], o0 = Fe("Clock", n0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a0 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], lg = Fe("Ellipsis", a0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], s0 = Fe("LoaderCircle", i0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], l0 = Fe("Plus", c0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], d0 = Fe("Search", u0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = [
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
], p0 = Fe("WandSparkles", f0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ua = Fe("X", m0);
function ug(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ug(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Dt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ug(e)) && (n && (n += " "), n += t);
  return n;
}
const Nu = "-", h0 = (e) => {
  const t = g0(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Nu);
      return s[0] === "" && s.length !== 1 && s.shift(), dg(s, t) || v0(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, dg = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? dg(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Nu);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, ff = /^\[(.+)\]$/, v0 = (e) => {
  if (ff.test(e)) {
    const t = ff.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, g0 = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Pl(r[o], n, o, t);
  return n;
}, Pl = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : pf(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (y0(o)) {
        Pl(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Pl(i, pf(t, a), r, n);
    });
  });
}, pf = (e, t) => {
  let r = e;
  return t.split(Nu).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, y0 = (e) => e.isThemeGetter, b0 = (e) => {
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
}, Tl = "!", Rl = ":", w0 = Rl.length, x0 = (e) => {
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
        if (h === Rl) {
          a.push(o.slice(c, y)), c = y + w0;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const u = a.length === 0 ? o : o.substring(c), f = S0(u), m = f !== u, v = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: f,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + Rl, a = n;
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
}, S0 = (e) => e.endsWith(Tl) ? e.substring(0, e.length - 1) : e.startsWith(Tl) ? e.substring(1) : e, C0 = (e) => {
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
}, _0 = (e) => ({
  cache: b0(e.cacheSize),
  parseClassName: x0(e),
  sortModifiers: C0(e),
  ...h0(e)
}), E0 = /\s+/, P0 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(E0);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: y,
      maybePostfixModifierPosition: h
    } = r(u);
    if (f) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!h, w = n(g ? y.substring(0, h) : y);
    if (!w) {
      if (!g) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = n(y), !w) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const b = a(m).join(":"), x = v ? b + Tl : b, C = x + w;
    if (i.includes(C))
      continue;
    i.push(C);
    const _ = o(w, g);
    for (let S = 0; S < _.length; ++S) {
      const E = _[S];
      i.push(x + E);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function T0() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = fg(t)) && (n && (n += " "), n += r);
  return n;
}
const fg = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = fg(e[n])) && (r && (r += " "), r += t);
  return r;
};
function R0(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const l = t.reduce((u, f) => f(u), e());
    return r = _0(l), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const u = P0(c, r);
    return o(c, u), u;
  }
  return function() {
    return a(T0.apply(null, arguments));
  };
}
const Le = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, pg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, N0 = /^\d+\/\d+$/, M0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, O0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, A0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, D0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, j0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _r = (e) => N0.test(e), me = (e) => !!e && !Number.isNaN(Number(e)), Bt = (e) => !!e && Number.isInteger(Number(e)), mf = (e) => e.endsWith("%") && me(e.slice(0, -1)), Wt = (e) => M0.test(e), k0 = () => !0, I0 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  O0.test(e) && !A0.test(e)
), Mu = () => !1, $0 = (e) => D0.test(e), L0 = (e) => j0.test(e), F0 = (e) => !te(e) && !re(e), q0 = (e) => Gr(e, gg, Mu), te = (e) => pg.test(e), ar = (e) => Gr(e, yg, I0), ei = (e) => Gr(e, Z0, me), B0 = (e) => Gr(e, hg, Mu), W0 = (e) => Gr(e, vg, L0), H0 = (e) => Gr(e, Mu, $0), re = (e) => mg.test(e), cn = (e) => Yr(e, yg), V0 = (e) => Yr(e, Q0), z0 = (e) => Yr(e, hg), G0 = (e) => Yr(e, gg), Y0 = (e) => Yr(e, vg), U0 = (e) => Yr(e, J0, !0), Gr = (e, t, r) => {
  const n = pg.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Yr = (e, t, r = !1) => {
  const n = mg.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, hg = (e) => e === "position", K0 = /* @__PURE__ */ new Set(["image", "url"]), vg = (e) => K0.has(e), X0 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), gg = (e) => X0.has(e), yg = (e) => e === "length", Z0 = (e) => e === "number", Q0 = (e) => e === "family-name", J0 = (e) => e === "shadow", eP = () => {
  const e = Le("color"), t = Le("font"), r = Le("text"), n = Le("font-weight"), o = Le("tracking"), a = Le("leading"), i = Le("breakpoint"), s = Le("container"), c = Le("spacing"), l = Le("radius"), u = Le("shadow"), f = Le("inset-shadow"), m = Le("drop-shadow"), v = Le("blur"), y = Le("perspective"), h = Le("aspect"), g = Le("ease"), w = Le("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], C = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], S = () => [re, te, c], E = () => [_r, "full", "auto", ...S()], R = () => [Bt, "none", "subgrid", re, te], T = () => ["auto", {
    span: ["full", Bt, re, te]
  }, Bt, re, te], D = () => [Bt, "auto", re, te], O = () => ["auto", "min", "max", "fr", re, te], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], L = () => ["start", "end", "center", "stretch"], N = () => ["auto", ...S()], I = () => [_r, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], k = () => [e, re, te], G = () => [mf, cn, ar], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    re,
    te
  ], $ = () => ["", me, cn, ar], J = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    re,
    te
  ], Y = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", re, te], K = () => ["none", me, re, te], U = () => ["none", me, re, te], ne = () => [me, re, te], W = () => [_r, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Wt],
      breakpoint: [Wt],
      color: [k0],
      container: [Wt],
      "drop-shadow": [Wt],
      ease: ["in", "out", "in-out"],
      font: [F0],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Wt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Wt],
      shadow: [Wt],
      spacing: ["px", me],
      text: [Wt],
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
        aspect: ["auto", "square", _r, te, re, h]
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
        columns: [me, te, re, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
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
        object: [...x(), te, re]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        inset: E()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: E()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
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
        z: [Bt, "auto", re, te]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [_r, "full", "auto", s, ...S()]
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
        flex: [me, _r, "auto", "initial", "none", te]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", me, re, te]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", me, re, te]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Bt, "first", "last", "none", re, te]
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
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
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
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...L(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...L()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...L(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...L(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...L(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...L()]
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
        size: I()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...I()]
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
          ...I()
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
          ...I()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...I()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...I()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...I()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, cn, ar]
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
        font: [n, re, ei]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mf, te]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [V0, te, t]
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
        tracking: [o, re, te]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [me, "none", re, ei]
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
        "list-image": ["none", re, te]
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
        list: ["disc", "decimal", "none", re, te]
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
        placeholder: k()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: k()
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
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [me, "from-font", "auto", re, ar]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: k()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [me, "auto", re, te]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, te]
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
        content: ["none", re, te]
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
        bg: [...x(), z0, B0]
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
        bg: ["auto", "cover", "contain", G0, q0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Bt, re, te],
          radial: ["", re, te],
          conic: [Bt, re, te]
        }, Y0, W0]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: k()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: G()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: k()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: B()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": B()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": B()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": B()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": B()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": B()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": B()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": B()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": B()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": B()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": B()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": B()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": B()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": B()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": B()
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
        border: [...J(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...J(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: k()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": k()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": k()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": k()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": k()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": k()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": k()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": k()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": k()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: k()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...J(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [me, re, te]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", me, cn, ar]
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
          u,
          U0,
          H0
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: k()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", re, te, f]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": k()
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
        ring: k()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [me, ar]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": k()
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
        "inset-ring": k()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [me, re, te]
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
          re,
          te
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
        brightness: [me, re, te]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [me, re, te]
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
          re,
          te
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", me, re, te]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [me, re, te]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", me, re, te]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [me, re, te]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", me, re, te]
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
          re,
          te
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
        "backdrop-brightness": [me, re, te]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [me, re, te]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", me, re, te]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [me, re, te]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", me, re, te]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [me, re, te]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [me, re, te]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", me, re, te]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, te]
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
        duration: [me, "initial", re, te]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", g, re, te]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [me, re, te]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, re, te]
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
        perspective: [y, re, te]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Y()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: K()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": K()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": K()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": K()
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
        skew: ne()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ne()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ne()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [re, te, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Y()
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
        translate: W()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": W()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": W()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": W()
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
        accent: k()
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
        caret: k()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, te]
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
        "will-change": ["auto", "scroll", "contents", "transform", re, te]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...k()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [me, cn, ar, ei]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...k()]
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
}, tP = /* @__PURE__ */ R0(eP);
function M(...e) {
  return tP(Dt(e));
}
const xW = LE, rP = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  FE,
  {
    ref: r,
    className: M("border-b", e),
    ...t
  }
));
rP.displayName = "AccordionItem";
const nP = d.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsx(qE, { className: "flex", children: /* @__PURE__ */ p.jsxs(
  ng,
  {
    ref: n,
    className: M(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ p.jsx(kr, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
nP.displayName = ng.displayName;
const oP = d.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsx(
  og,
  {
    ref: n,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ p.jsx("div", { className: M("pb-4 pt-0", e), children: t })
  }
));
oP.displayName = og.displayName;
const hf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, vf = Dt, _t = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return vf(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const u = r == null ? void 0 : r[l], f = a == null ? void 0 : a[l];
    if (u === null) return null;
    const m = hf(u) || hf(f);
    return o[l][m];
  }), s = r && Object.entries(r).reduce((l, u) => {
    let [f, m] = u;
    return m === void 0 || (l[f] = m), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: f, className: m, ...v } = u;
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
      f,
      m
    ] : l;
  }, []);
  return vf(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, aP = _t(
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
), iP = d.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: M(aP({ variant: t }), e),
    ...r
  }
));
iP.displayName = "Alert";
const sP = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "h5",
  {
    ref: r,
    className: M("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
sP.displayName = "AlertTitle";
const cP = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: r,
    className: M("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
cP.displayName = "AlertDescription";
function lP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ve(e);
  d.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var uP = "DismissableLayer", Nl = "dismissableLayer.update", dP = "dismissableLayer.pointerDownOutside", fP = "dismissableLayer.focusOutside", gf, bg = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zt = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = d.useContext(bg), [u, f] = d.useState(null), m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = d.useState({}), y = ie(t, (E) => f(E)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(g), b = u ? h.indexOf(u) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= w, _ = mP((E) => {
      const R = E.target, T = [...l.branches].some((D) => D.contains(R));
      !C || T || (o == null || o(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m), S = hP((E) => {
      const R = E.target;
      [...l.branches].some((D) => D.contains(R)) || (a == null || a(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m);
    return lP((E) => {
      b === l.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
    }, m), d.useEffect(() => {
      if (u)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (gf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), yf(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = gf);
        };
    }, [u, m, r, l]), d.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), yf());
    }, [u, l]), d.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(Nl, E), () => document.removeEventListener(Nl, E);
    }, []), /* @__PURE__ */ p.jsx(
      V.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
Zt.displayName = uP;
var pP = "DismissableLayerBranch", wg = d.forwardRef((e, t) => {
  const r = d.useContext(bg), n = d.useRef(null), o = ie(t, n);
  return d.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ p.jsx(V.div, { ...e, ref: o });
});
wg.displayName = pP;
function mP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ve(e), n = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          xg(
            dP,
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
function hP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ve(e), n = d.useRef(!1);
  return d.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && xg(fP, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function yf() {
  const e = new CustomEvent(Nl);
  document.dispatchEvent(e);
}
function xg(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? wn(o, a) : o.dispatchEvent(a);
}
var vP = Zt, gP = wg, ti = "focusScope.autoFocusOnMount", ri = "focusScope.autoFocusOnUnmount", bf = { bubbles: !1, cancelable: !0 }, yP = "FocusScope", qn = d.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = d.useState(null), l = ve(o), u = ve(a), f = d.useRef(null), m = ie(t, (h) => c(h)), v = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
    if (n) {
      let h = function(x) {
        if (v.paused || !s) return;
        const C = x.target;
        s.contains(C) ? f.current = C : Vt(f.current, { select: !0 });
      }, g = function(x) {
        if (v.paused || !s) return;
        const C = x.relatedTarget;
        C !== null && (s.contains(C) || Vt(f.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const _ of x)
            _.removedNodes.length > 0 && Vt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [n, s, v.paused]), d.useEffect(() => {
    if (s) {
      xf.add(v);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(ti, bf);
        s.addEventListener(ti, l), s.dispatchEvent(w), w.defaultPrevented || (bP(_P(Sg(s)), { select: !0 }), document.activeElement === h && Vt(s));
      }
      return () => {
        s.removeEventListener(ti, l), setTimeout(() => {
          const w = new CustomEvent(ri, bf);
          s.addEventListener(ri, u), s.dispatchEvent(w), w.defaultPrevented || Vt(h ?? document.body, { select: !0 }), s.removeEventListener(ri, u), xf.remove(v);
        }, 0);
      };
    }
  }, [s, l, u, v]);
  const y = d.useCallback(
    (h) => {
      if (!r && !n || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (g && w) {
        const b = h.currentTarget, [x, C] = wP(b);
        x && C ? !h.shiftKey && w === C ? (h.preventDefault(), r && Vt(x, { select: !0 })) : h.shiftKey && w === x && (h.preventDefault(), r && Vt(C, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ p.jsx(V.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
qn.displayName = yP;
function bP(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Vt(n, { select: t }), document.activeElement !== r) return;
}
function wP(e) {
  const t = Sg(e), r = wf(t, e), n = wf(t.reverse(), e);
  return [r, n];
}
function Sg(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function wf(e, t) {
  for (const r of e)
    if (!xP(r, { upTo: t })) return r;
}
function xP(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function SP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Vt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && SP(e) && t && e.select();
  }
}
var xf = CP();
function CP() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Sf(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Sf(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Sf(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function _P(e) {
  return e.filter((t) => t.tagName !== "A");
}
var EP = "Portal", gr = d.forwardRef((e, t) => {
  var s;
  const { container: r, ...n } = e, [o, a] = d.useState(!1);
  Oe(() => a(!0), []);
  const i = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Fv.createPortal(/* @__PURE__ */ p.jsx(V.div, { ...n, ref: t }), i) : null;
});
gr.displayName = EP;
var ni = 0;
function da() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Cf()), document.body.insertAdjacentElement("beforeend", e[1] ?? Cf()), ni++, () => {
      ni === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ni--;
    };
  }, []);
}
function Cf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var vt = function() {
  return vt = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, vt.apply(this, arguments);
};
function Cg(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function PP(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Po = "right-scroll-bar-position", To = "width-before-scroll-bar", TP = "with-scroll-bars-hidden", RP = "--removed-body-scroll-bar-size";
function oi(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function NP(e, t) {
  var r = Yt(function() {
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
var MP = typeof window < "u" ? d.useLayoutEffect : d.useEffect, _f = /* @__PURE__ */ new WeakMap();
function OP(e, t) {
  var r = NP(null, function(n) {
    return e.forEach(function(o) {
      return oi(o, n);
    });
  });
  return MP(function() {
    var n = _f.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || oi(s, null);
      }), a.forEach(function(s) {
        o.has(s) || oi(s, i);
      });
    }
    _f.set(r, e);
  }, [e]), r;
}
function AP(e) {
  return e;
}
function DP(e, t) {
  t === void 0 && (t = AP);
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
        var u = i;
        i = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(u) {
          i.push(u), l();
        },
        filter: function(u) {
          return i = i.filter(u), r;
        }
      };
    }
  };
  return o;
}
function jP(e) {
  e === void 0 && (e = {});
  var t = DP(null);
  return t.options = vt({ async: !0, ssr: !1 }, e), t;
}
var _g = function(e) {
  var t = e.sideCar, r = Cg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return d.createElement(n, vt({}, r));
};
_g.isSideCarExport = !0;
function kP(e, t) {
  return e.useMedium(t), _g;
}
var Eg = jP(), ai = function() {
}, fa = d.forwardRef(function(e, t) {
  var r = d.useRef(null), n = d.useState({
    onScrollCapture: ai,
    onWheelCapture: ai,
    onTouchMoveCapture: ai
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, m = e.sideCar, v = e.noIsolation, y = e.inert, h = e.allowPinchZoom, g = e.as, w = g === void 0 ? "div" : g, b = e.gapMode, x = Cg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, _ = OP([r, t]), S = vt(vt({}, x), o);
  return d.createElement(
    d.Fragment,
    null,
    u && d.createElement(C, { sideCar: Eg, removeScrollBar: l, shards: f, noIsolation: v, inert: y, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: b }),
    i ? d.cloneElement(d.Children.only(s), vt(vt({}, S), { ref: _ })) : d.createElement(w, vt({}, S, { className: c, ref: _ }), s)
  );
});
fa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fa.classNames = {
  fullWidth: To,
  zeroRight: Po
};
var IP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $P() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = IP();
  return t && e.setAttribute("nonce", t), e;
}
function LP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function FP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var qP = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = $P()) && (LP(t, r), FP(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, BP = function() {
  var e = qP();
  return function(t, r) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Pg = function() {
  var e = BP(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, WP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ii = function(e) {
  return parseInt(e || "", 10) || 0;
}, HP = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ii(r), ii(n), ii(o)];
}, VP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return WP;
  var t = HP(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, zP = Pg(), Mr = "data-scroll-locked", GP = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(TP, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(Mr, `] {
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
  
  .`).concat(Po, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(To, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Po, " .").concat(Po, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(To, " .").concat(To, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Mr, `] {
    `).concat(RP, ": ").concat(s, `px;
  }
`);
}, Ef = function() {
  var e = parseInt(document.body.getAttribute(Mr) || "0", 10);
  return isFinite(e) ? e : 0;
}, YP = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Mr, (Ef() + 1).toString()), function() {
      var e = Ef() - 1;
      e <= 0 ? document.body.removeAttribute(Mr) : document.body.setAttribute(Mr, e.toString());
    };
  }, []);
}, UP = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  YP();
  var a = d.useMemo(function() {
    return VP(o);
  }, [o]);
  return d.createElement(zP, { styles: GP(a, !t, o, r ? "" : "!important") });
}, Ml = !1;
if (typeof window < "u")
  try {
    var po = Object.defineProperty({}, "passive", {
      get: function() {
        return Ml = !0, !0;
      }
    });
    window.addEventListener("test", po, po), window.removeEventListener("test", po, po);
  } catch {
    Ml = !1;
  }
var Er = Ml ? { passive: !1 } : !1, KP = function(e) {
  return e.tagName === "TEXTAREA";
}, Tg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !KP(e) && r[t] === "visible")
  );
}, XP = function(e) {
  return Tg(e, "overflowY");
}, ZP = function(e) {
  return Tg(e, "overflowX");
}, Pf = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Rg(e, n);
    if (o) {
      var a = Ng(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, QP = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, JP = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Rg = function(e, t) {
  return e === "v" ? XP(t) : ZP(t);
}, Ng = function(e, t) {
  return e === "v" ? QP(t) : JP(t);
}, eT = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, tT = function(e, t, r, n, o) {
  var a = eT(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), l = !1, u = i > 0, f = 0, m = 0;
  do {
    var v = Ng(e, s), y = v[0], h = v[1], g = v[2], w = h - g - a * y;
    (y || w) && Rg(e, s) && (f += w, m += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(m) < 1) && (l = !0), l;
}, mo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Tf = function(e) {
  return [e.deltaX, e.deltaY];
}, Rf = function(e) {
  return e && "current" in e ? e.current : e;
}, rT = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, nT = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, oT = 0, Pr = [];
function aT(e) {
  var t = d.useRef([]), r = d.useRef([0, 0]), n = d.useRef(), o = d.useState(oT++)[0], a = d.useState(Pg)[0], i = d.useRef(e);
  d.useEffect(function() {
    i.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = PP([e.lockRef.current], (e.shards || []).map(Rf), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = d.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = mo(h), b = r.current, x = "deltaX" in h ? h.deltaX : b[0] - w[0], C = "deltaY" in h ? h.deltaY : b[1] - w[1], _, S = h.target, E = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && E === "h" && S.type === "range")
      return !1;
    var R = Pf(E, S);
    if (!R)
      return !0;
    if (R ? _ = E : (_ = E === "v" ? "h" : "v", R = Pf(E, S)), !R)
      return !1;
    if (!n.current && "changedTouches" in h && (x || C) && (n.current = _), !_)
      return !0;
    var T = n.current || _;
    return tT(T, g, h, T === "h" ? x : C);
  }, []), c = d.useCallback(function(h) {
    var g = h;
    if (!(!Pr.length || Pr[Pr.length - 1] !== a)) {
      var w = "deltaY" in g ? Tf(g) : mo(g), b = t.current.filter(function(_) {
        return _.name === g.type && (_.target === g.target || g.target === _.shadowParent) && rT(_.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var x = (i.current.shards || []).map(Rf).filter(Boolean).filter(function(_) {
          return _.contains(g.target);
        }), C = x.length > 0 ? s(g, x[0]) : !i.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = d.useCallback(function(h, g, w, b) {
    var x = { name: h, delta: g, target: w, should: b, shadowParent: iT(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), u = d.useCallback(function(h) {
    r.current = mo(h), n.current = void 0;
  }, []), f = d.useCallback(function(h) {
    l(h.type, Tf(h), h.target, s(h, e.lockRef.current));
  }, []), m = d.useCallback(function(h) {
    l(h.type, mo(h), h.target, s(h, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return Pr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, Er), document.addEventListener("touchmove", c, Er), document.addEventListener("touchstart", u, Er), function() {
      Pr = Pr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, Er), document.removeEventListener("touchmove", c, Er), document.removeEventListener("touchstart", u, Er);
    };
  }, []);
  var v = e.removeScrollBar, y = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    y ? d.createElement(a, { styles: nT(o) }) : null,
    v ? d.createElement(UP, { gapMode: e.gapMode }) : null
  );
}
function iT(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const sT = kP(Eg, aT);
var Bn = d.forwardRef(function(e, t) {
  return d.createElement(fa, vt({}, e, { ref: t, sideCar: sT }));
});
Bn.classNames = fa.classNames;
var cT = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Tr = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), vo = {}, si = 0, Mg = function(e) {
  return e && (e.host || Mg(e.parentNode));
}, lT = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Mg(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, uT = function(e, t, r, n) {
  var o = lT(t, Array.isArray(e) ? e : [e]);
  vo[r] || (vo[r] = /* @__PURE__ */ new WeakMap());
  var a = vo[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (s.has(m))
        u(m);
      else
        try {
          var v = m.getAttribute(n), y = v !== null && v !== "false", h = (Tr.get(m) || 0) + 1, g = (a.get(m) || 0) + 1;
          Tr.set(m, h), a.set(m, g), i.push(m), h === 1 && y && ho.set(m, !0), g === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return u(t), s.clear(), si++, function() {
    i.forEach(function(f) {
      var m = Tr.get(f) - 1, v = a.get(f) - 1;
      Tr.set(f, m), a.set(f, v), m || (ho.has(f) || f.removeAttribute(n), ho.delete(f)), v || f.removeAttribute(r);
    }), si--, si || (Tr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), vo = {});
  };
}, pa = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = cT(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), uT(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Ou = "Dialog", [Og, Ag] = Ae(Ou), [dT, ft] = Og(Ou), Dg = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = d.useRef(null), c = d.useRef(null), [l = !1, u] = je({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ p.jsx(
    dT,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: Ne(),
      titleId: Ne(),
      descriptionId: Ne(),
      open: l,
      onOpenChange: u,
      onOpenToggle: d.useCallback(() => u((f) => !f), [u]),
      modal: i,
      children: r
    }
  );
};
Dg.displayName = Ou;
var jg = "DialogTrigger", kg = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ft(jg, r), a = ie(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
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
kg.displayName = jg;
var Au = "DialogPortal", [fT, Ig] = Og(Au, {
  forceMount: void 0
}), $g = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = ft(Au, t);
  return /* @__PURE__ */ p.jsx(fT, { scope: t, forceMount: r, children: d.Children.map(n, (i) => /* @__PURE__ */ p.jsx(Pe, { present: r || a.open, children: /* @__PURE__ */ p.jsx(gr, { asChild: !0, container: o, children: i }) })) });
};
$g.displayName = Au;
var Io = "DialogOverlay", Lg = d.forwardRef(
  (e, t) => {
    const r = Ig(Io, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = ft(Io, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ p.jsx(Pe, { present: n || a.open, children: /* @__PURE__ */ p.jsx(pT, { ...o, ref: t }) }) : null;
  }
);
Lg.displayName = Io;
var pT = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ft(Io, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Bn, { as: xt, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
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
), ur = "DialogContent", Fg = d.forwardRef(
  (e, t) => {
    const r = Ig(ur, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = ft(ur, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Pe, { present: n || a.open, children: a.modal ? /* @__PURE__ */ p.jsx(mT, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(hT, { ...o, ref: t }) });
  }
);
Fg.displayName = ur;
var mT = d.forwardRef(
  (e, t) => {
    const r = ft(ur, e.__scopeDialog), n = d.useRef(null), o = ie(t, r.contentRef, n);
    return d.useEffect(() => {
      const a = n.current;
      if (a) return pa(a);
    }, []), /* @__PURE__ */ p.jsx(
      qg,
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
), hT = d.forwardRef(
  (e, t) => {
    const r = ft(ur, e.__scopeDialog), n = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      qg,
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
), qg = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = ft(ur, r), c = d.useRef(null), l = ie(t, c);
    return da(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        qn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ p.jsx(
            Zt,
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
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(gT, { titleId: s.titleId }),
        /* @__PURE__ */ p.jsx(bT, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Du = "DialogTitle", Bg = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ft(Du, r);
    return /* @__PURE__ */ p.jsx(V.h2, { id: o.titleId, ...n, ref: t });
  }
);
Bg.displayName = Du;
var Wg = "DialogDescription", Hg = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ft(Wg, r);
    return /* @__PURE__ */ p.jsx(V.p, { id: o.descriptionId, ...n, ref: t });
  }
);
Hg.displayName = Wg;
var Vg = "DialogClose", zg = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ft(Vg, r);
    return /* @__PURE__ */ p.jsx(
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
zg.displayName = Vg;
function ju(e) {
  return e ? "open" : "closed";
}
var Gg = "DialogTitleWarning", [vT, Yg] = uE(Gg, {
  contentName: ur,
  titleName: Du,
  docsSlug: "dialog"
}), gT = ({ titleId: e }) => {
  const t = Yg(Gg), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, yT = "DialogDescriptionWarning", bT = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Yg(yT).contentName}}.`;
  return d.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, ma = Dg, ku = kg, ha = $g, Ur = Lg, Kr = Fg, Wn = Bg, Hn = Hg, Xr = zg, Ug = "AlertDialog", [wT, SW] = Ae(Ug, [
  Ag
]), Lt = Ag(), Kg = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = Lt(t);
  return /* @__PURE__ */ p.jsx(ma, { ...n, ...r, modal: !0 });
};
Kg.displayName = Ug;
var xT = "AlertDialogTrigger", Xg = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Lt(r);
    return /* @__PURE__ */ p.jsx(ku, { ...o, ...n, ref: t });
  }
);
Xg.displayName = xT;
var ST = "AlertDialogPortal", Zg = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = Lt(t);
  return /* @__PURE__ */ p.jsx(ha, { ...n, ...r });
};
Zg.displayName = ST;
var CT = "AlertDialogOverlay", Qg = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Lt(r);
    return /* @__PURE__ */ p.jsx(Ur, { ...o, ...n, ref: t });
  }
);
Qg.displayName = CT;
var Or = "AlertDialogContent", [_T, ET] = wT(Or), Jg = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, a = Lt(r), i = d.useRef(null), s = ie(t, i), c = d.useRef(null);
    return /* @__PURE__ */ p.jsx(
      vT,
      {
        contentName: Or,
        titleName: ey,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ p.jsx(_T, { scope: r, cancelRef: c, children: /* @__PURE__ */ p.jsxs(
          Kr,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: q(o.onOpenAutoFocus, (l) => {
              var u;
              l.preventDefault(), (u = c.current) == null || u.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ p.jsx(xu, { children: n }),
              /* @__PURE__ */ p.jsx(TT, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
Jg.displayName = Or;
var ey = "AlertDialogTitle", ty = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Lt(r);
    return /* @__PURE__ */ p.jsx(Wn, { ...o, ...n, ref: t });
  }
);
ty.displayName = ey;
var ry = "AlertDialogDescription", ny = d.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = Lt(r);
  return /* @__PURE__ */ p.jsx(Hn, { ...o, ...n, ref: t });
});
ny.displayName = ry;
var PT = "AlertDialogAction", oy = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Lt(r);
    return /* @__PURE__ */ p.jsx(Xr, { ...o, ...n, ref: t });
  }
);
oy.displayName = PT;
var ay = "AlertDialogCancel", iy = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = ET(ay, r), a = Lt(r), i = ie(t, o);
    return /* @__PURE__ */ p.jsx(Xr, { ...a, ...n, ref: i });
  }
);
iy.displayName = ay;
var TT = ({ contentRef: e }) => {
  const t = `\`${Or}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Or}\` by passing a \`${ry}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Or}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    var n;
    document.getElementById(
      (n = e.current) == null ? void 0 : n.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, RT = Kg, NT = Xg, MT = Zg, sy = Qg, cy = Jg, ly = oy, uy = iy, dy = ty, fy = ny;
const CW = RT, _W = NT, OT = MT, py = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  sy,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
py.displayName = sy.displayName;
const AT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsxs(OT, { children: [
  /* @__PURE__ */ p.jsx(py, {}),
  /* @__PURE__ */ p.jsx(
    cy,
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
AT.displayName = cy.displayName;
const DT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
DT.displayName = "AlertDialogHeader";
const jT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
jT.displayName = "AlertDialogFooter";
const kT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  dy,
  {
    ref: r,
    className: M("text-lg font-semibold", e),
    ...t
  }
));
kT.displayName = dy.displayName;
const IT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  fy,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
IT.displayName = fy.displayName;
const $T = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  ly,
  {
    ref: r,
    className: M(zt(), e),
    ...t
  }
));
$T.displayName = ly.displayName;
const LT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  uy,
  {
    ref: r,
    className: M(
      zt({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
LT.displayName = uy.displayName;
var Iu = "Avatar", [FT, EW] = Ae(Iu), [qT, my] = FT(Iu), hy = d.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = d.useState("idle");
    return /* @__PURE__ */ p.jsx(
      qT,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ p.jsx(V.span, { ...n, ref: t })
      }
    );
  }
);
hy.displayName = Iu;
var vy = "AvatarImage", gy = d.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = my(vy, r), s = BT(n, a.referrerPolicy), c = ve((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return Oe(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ p.jsx(V.img, { ...a, ref: t, src: n }) : null;
  }
);
gy.displayName = vy;
var yy = "AvatarFallback", by = d.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = my(yy, r), [i, s] = d.useState(n === void 0);
    return d.useEffect(() => {
      if (n !== void 0) {
        const c = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(c);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ p.jsx(V.span, { ...o, ref: t }) : null;
  }
);
by.displayName = yy;
function BT(e, t) {
  const [r, n] = d.useState("idle");
  return Oe(() => {
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
var wy = hy, xy = gy, Sy = by;
const WT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  wy,
  {
    ref: r,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
WT.displayName = wy.displayName;
const HT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  xy,
  {
    ref: r,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
HT.displayName = xy.displayName;
const VT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Sy,
  {
    ref: r,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
VT.displayName = Sy.displayName;
const zT = _t(
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
function Nf({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ p.jsx("div", { className: M(zT({ variant: t }), e), ...r });
}
const GT = d.forwardRef(({ ...e }, t) => /* @__PURE__ */ p.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
GT.displayName = "Breadcrumb";
const YT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
YT.displayName = "BreadcrumbList";
const UT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "li",
  {
    ref: r,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
UT.displayName = "BreadcrumbItem";
const KT = d.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? xt : "a";
  return /* @__PURE__ */ p.jsx(
    o,
    {
      ref: n,
      className: M("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
KT.displayName = "BreadcrumbLink";
const XT = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
XT.displayName = "BreadcrumbPage";
const ZT = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ p.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ p.jsx(la, {})
  }
);
ZT.displayName = "BreadcrumbSeparator";
const QT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ p.jsx(lg, { className: "h-4 w-4" }),
      /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
QT.displayName = "BreadcrumbElipssis";
const JT = {
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
}, zt = _t(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: JT,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Zr = d.forwardRef(({ className: e, variant: t, size: r, disabled: n, href: o, ...a }, i) => /* @__PURE__ */ p.jsx(p.Fragment, { children: o ? /* @__PURE__ */ p.jsx(
  oE,
  {
    className: M(zt({ variant: t, size: r, className: e })),
    ref: i,
    to: o,
    ...a
  }
) : /* @__PURE__ */ p.jsx(
  "button",
  {
    className: M(zt({ variant: t, size: r, className: e })),
    ref: i,
    disabled: n,
    ...a
  }
) }));
Zr.displayName = "Button";
var ce;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(ce || (ce = {}));
var _e;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(_e || (_e = {}));
var ct;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(ct || (ct = {}));
var Ye;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ye || (Ye = {}));
const ci = {}, dn = {};
function gn(e, t) {
  try {
    const n = (ci[e] || (ci[e] = new Intl.DateTimeFormat("en-GB", {
      timeZone: e,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1] || "";
    return n in dn ? dn[n] : Mf(n, n.split(":"));
  } catch {
    if (e in dn) return dn[e];
    const r = e == null ? void 0 : e.match(eR);
    return r ? Mf(e, r.slice(1)) : NaN;
  }
}
const eR = /([+-]\d\d):?(\d\d)?/;
function Mf(e, t) {
  const r = +t[0], n = +(t[1] || 0);
  return dn[e] = r > 0 ? r * 60 + n : r * 60 - n;
}
class bt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(gn(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Cy(this), Ol(this)) : this.setTime(Date.now());
  }
  static tz(t, ...r) {
    return r.length ? new bt(...r, t) : new bt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new bt(+this, t);
  }
  getTimezoneOffset() {
    return -gn(this.timeZone, this);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Ol(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new bt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Of = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Of.test(e)) return;
  const t = e.replace(Of, "$1UTC");
  bt.prototype[t] && (e.startsWith("get") ? bt.prototype[e] = function() {
    return this.internal[t]();
  } : (bt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), tR(this), +this;
  }, bt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ol(this), +this;
  }));
});
function Ol(e) {
  e.internal.setTime(+e), e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset());
}
function tR(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Cy(e);
}
function Cy(e) {
  const t = gn(e.timeZone, e), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const n = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), o = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = n - o, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const s = n - t;
  s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
  const c = gn(e.timeZone, e), u = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - c, f = c !== t, m = u - s;
  if (f && m) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + m);
    const v = gn(e.timeZone, e), y = c - v;
    y && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + y), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y));
  }
}
class lr extends bt {
  //#region static
  static tz(t, ...r) {
    return r.length ? new lr(...r, t) : new lr(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, r, n] = this.tzComponents(), o = `${t}${r}:${n}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, r, n, o] = this.internal.toUTCString().split(" ");
    return `${t == null ? void 0 : t.slice(0, -1)} ${n} ${r} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [r, n, o] = this.tzComponents();
    return `${t} GMT${r}${n}${o} (${rR(this.timeZone, this)})`;
  }
  toLocaleString(t, r) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...r,
      timeZone: (r == null ? void 0 : r.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(t, r) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...r,
      timeZone: (r == null ? void 0 : r.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(t, r) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...r,
      timeZone: (r == null ? void 0 : r.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), r = t > 0 ? "-" : "+", n = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [r, n, o];
  }
  //#endregion
  withTimeZone(t) {
    return new lr(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new lr(+new Date(t), this.timeZone);
  }
  //#endregion
}
function rR(e, t) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: e,
    timeZoneName: "long"
  }).format(t).slice(12);
}
const _y = 6048e5, nR = 864e5, Af = Symbol.for("constructDateFrom");
function ke(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Af in e ? e[Af](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function xe(e, t) {
  return ke(t || e, e);
}
function $u(e, t, r) {
  const n = xe(e, r == null ? void 0 : r.in);
  return isNaN(t) ? ke(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Lu(e, t, r) {
  const n = xe(e, r == null ? void 0 : r.in);
  if (isNaN(t)) return ke(e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), a = ke(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), n);
}
function oR(e, t, r) {
  const {
    years: n = 0,
    months: o = 0,
    weeks: a = 0,
    days: i = 0,
    hours: s = 0,
    minutes: c = 0,
    seconds: l = 0
  } = t, u = xe(e, r == null ? void 0 : r.in), f = o || n ? Lu(u, o + n * 12) : u, m = i || a ? $u(f, i + a * 7) : f, v = c + s * 60, h = (l + v * 60) * 1e3;
  return ke(e, +m + h);
}
let aR = {};
function Vn() {
  return aR;
}
function Ir(e, t) {
  var s, c, l, u;
  const r = Vn(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((u = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = xe(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Sn(e, t) {
  return Ir(e, { ...t, weekStartsOn: 1 });
}
function Ey(e, t) {
  const r = xe(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = ke(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Sn(o), i = ke(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Sn(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Df(e) {
  const t = xe(e), r = new Date(
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
function Qr(e, ...t) {
  const r = ke.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function Cn(e, t) {
  const r = xe(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function Py(e, t, r) {
  const [n, o] = Qr(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = Cn(n), i = Cn(o), s = +a - Df(a), c = +i - Df(i);
  return Math.round((s - c) / nR);
}
function iR(e, t) {
  const r = Ey(e, t), n = ke(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Sn(n);
}
function sR(e, t, r) {
  return $u(e, t * 7, r);
}
function cR(e, t, r) {
  return Lu(e, t * 12, r);
}
function lR(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = ke.bind(null, o));
    const a = xe(o, n);
    (!r || r < a || isNaN(+a)) && (r = a);
  }), ke(n, r || NaN);
}
function uR(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = ke.bind(null, o));
    const a = xe(o, n);
    (!r || r > a || isNaN(+a)) && (r = a);
  }), ke(n, r || NaN);
}
function dR(e, t, r) {
  const [n, o] = Qr(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return +Cn(n) == +Cn(o);
}
function Ty(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function fR(e) {
  return !(!Ty(e) && typeof e != "number" || isNaN(+xe(e)));
}
function pR(e, t, r) {
  const [n, o] = Qr(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = n.getFullYear() - o.getFullYear(), i = n.getMonth() - o.getMonth();
  return a * 12 + i;
}
function mR(e, t) {
  const r = xe(e, t == null ? void 0 : t.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function hR(e, t) {
  const [r, n] = Qr(e, t.start, t.end);
  return { start: r, end: n };
}
function vR(e, t) {
  const { start: r, end: n } = hR(t == null ? void 0 : t.in, e);
  let o = +r > +n;
  const a = o ? +r : +n, i = o ? n : r;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(ke(r, i)), i.setMonth(i.getMonth() + s);
  return o ? c.reverse() : c;
}
function gR(e, t) {
  const r = xe(e, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function yR(e, t) {
  const r = xe(e, t == null ? void 0 : t.in), n = r.getFullYear();
  return r.setFullYear(n + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function Ry(e, t) {
  const r = xe(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function Ny(e, t) {
  var s, c, l, u;
  const r = Vn(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((u = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = xe(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function bR(e, t) {
  return Ny(e, { ...t, weekStartsOn: 1 });
}
const wR = {
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
}, xR = (e, t, r) => {
  let n;
  const o = wR[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Ar(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const SR = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, CR = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _R = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ER = {
  date: Ar({
    formats: SR,
    defaultWidth: "full"
  }),
  time: Ar({
    formats: CR,
    defaultWidth: "full"
  }),
  dateTime: Ar({
    formats: _R,
    defaultWidth: "full"
  })
}, PR = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, TR = (e, t, r, n) => PR[e];
function gt(e) {
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
const RR = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, NR = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, MR = {
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
}, OR = {
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
}, AR = {
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
}, DR = {
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
}, jR = (e, t) => {
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
}, kR = {
  ordinalNumber: jR,
  era: gt({
    values: RR,
    defaultWidth: "wide"
  }),
  quarter: gt({
    values: NR,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: gt({
    values: MR,
    defaultWidth: "wide"
  }),
  day: gt({
    values: OR,
    defaultWidth: "wide"
  }),
  dayPeriod: gt({
    values: AR,
    defaultWidth: "wide",
    formattingValues: DR,
    defaultFormattingWidth: "wide"
  })
};
function yt(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? $R(s, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      IR(s, (f) => f.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const u = t.slice(i.length);
    return { value: l, rest: u };
  };
}
function IR(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function $R(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function My(e) {
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
const LR = /^(\d+)(th|st|nd|rd)?/i, FR = /\d+/i, qR = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, BR = {
  any: [/^b/i, /^(a|c)/i]
}, WR = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, HR = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, VR = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zR = {
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
}, GR = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, YR = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, UR = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, KR = {
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
}, XR = {
  ordinalNumber: My({
    matchPattern: LR,
    parsePattern: FR,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yt({
    matchPatterns: qR,
    defaultMatchWidth: "wide",
    parsePatterns: BR,
    defaultParseWidth: "any"
  }),
  quarter: yt({
    matchPatterns: WR,
    defaultMatchWidth: "wide",
    parsePatterns: HR,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yt({
    matchPatterns: VR,
    defaultMatchWidth: "wide",
    parsePatterns: zR,
    defaultParseWidth: "any"
  }),
  day: yt({
    matchPatterns: GR,
    defaultMatchWidth: "wide",
    parsePatterns: YR,
    defaultParseWidth: "any"
  }),
  dayPeriod: yt({
    matchPatterns: UR,
    defaultMatchWidth: "any",
    parsePatterns: KR,
    defaultParseWidth: "any"
  })
}, Fu = {
  code: "en-US",
  formatDistance: xR,
  formatLong: ER,
  formatRelative: TR,
  localize: kR,
  match: XR,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ZR(e, t) {
  const r = xe(e, t == null ? void 0 : t.in);
  return Py(r, Ry(r)) + 1;
}
function Oy(e, t) {
  const r = xe(e, t == null ? void 0 : t.in), n = +Sn(r) - +iR(r);
  return Math.round(n / _y) + 1;
}
function Ay(e, t) {
  var u, f, m, v;
  const r = xe(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Vn(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = ke((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Ir(i, t), c = ke((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const l = Ir(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function QR(e, t) {
  var s, c, l, u;
  const r = Vn(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((u = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = Ay(e, t), a = ke((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), Ir(a, t);
}
function Dy(e, t) {
  const r = xe(e, t == null ? void 0 : t.in), n = +Ir(r, t) - +QR(r, t);
  return Math.round(n / _y) + 1;
}
function we(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Ht = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return we(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : we(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return we(e.getDate(), t.length);
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
    return we(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return we(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return we(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return we(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return we(o, t.length);
  }
}, Rr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, jf = {
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
    return Ht.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = Ay(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return we(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : we(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Ey(e);
    return we(r, t.length);
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
    return we(r, t.length);
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
        return we(n, 2);
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
        return we(n, 2);
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
        return Ht.M(e, t);
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
        return we(n + 1, 2);
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
    const o = Dy(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : we(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Oy(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : we(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Ht.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = ZR(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : we(n, t.length);
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
        return we(a, 2);
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
        return we(a, t.length);
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
        return we(o, t.length);
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
    switch (n === 12 ? o = Rr.noon : n === 0 ? o = Rr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = Rr.evening : n >= 12 ? o = Rr.afternoon : n >= 4 ? o = Rr.morning : o = Rr.night, t) {
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
    return Ht.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Ht.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : we(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : we(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ht.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ht.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ht.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return If(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return ir(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return ir(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return If(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return ir(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return ir(n, ":");
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
        return "GMT" + kf(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + ir(n, ":");
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
        return "GMT" + kf(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + ir(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return we(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return we(+e, t.length);
  }
};
function kf(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + we(a, 2);
}
function If(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + we(Math.abs(e) / 60, 2) : ir(e, t);
}
function ir(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = we(Math.trunc(n / 60), 2), a = we(n % 60, 2);
  return r + o + t + a;
}
const $f = (e, t) => {
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
}, jy = (e, t) => {
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
}, JR = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return $f(e, t);
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
  return a.replace("{{date}}", $f(n, t)).replace("{{time}}", jy(o, t));
}, eN = {
  p: jy,
  P: JR
}, tN = /^D+$/, rN = /^Y+$/, nN = ["D", "DD", "YY", "YYYY"];
function oN(e) {
  return tN.test(e);
}
function aN(e) {
  return rN.test(e);
}
function iN(e, t, r) {
  const n = sN(e, t, r);
  if (console.warn(n), nN.includes(e)) throw new RangeError(n);
}
function sN(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const cN = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, lN = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, uN = /^'([^]*?)'?$/, dN = /''/g, fN = /[a-zA-Z]/;
function va(e, t, r) {
  var u, f, m, v, y, h, g, w;
  const n = Vn(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? Fu, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((f = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((v = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((h = (y = r == null ? void 0 : r.locale) == null ? void 0 : y.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((w = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = xe(e, r == null ? void 0 : r.in);
  if (!fR(s))
    throw new RangeError("Invalid time value");
  let c = t.match(lN).map((b) => {
    const x = b[0];
    if (x === "p" || x === "P") {
      const C = eN[x];
      return C(b, o.formatLong);
    }
    return b;
  }).join("").match(cN).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const x = b[0];
    if (x === "'")
      return { isToken: !1, value: pN(b) };
    if (jf[x])
      return { isToken: !0, value: b };
    if (x.match(fN))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const x = b.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && aN(x) || !(r != null && r.useAdditionalDayOfYearTokens) && oN(x)) && iN(x, t, String(e));
    const C = jf[x[0]];
    return C(s, x, o.localize, l);
  }).join("");
}
function pN(e) {
  const t = e.match(uN);
  return t ? t[1].replace(dN, "'") : e;
}
function mN(e, t) {
  const r = xe(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = r.getMonth(), a = ke(r, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function hN(e, t) {
  return xe(e, t == null ? void 0 : t.in).getMonth();
}
function vN(e, t) {
  return xe(e, t == null ? void 0 : t.in).getFullYear();
}
function gN(e, t) {
  return +xe(e) > +xe(t);
}
function yN(e, t) {
  return +xe(e) < +xe(t);
}
function bN(e, t, r) {
  const [n, o] = Qr(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function wN(e, t, r) {
  const [n, o] = Qr(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear();
}
function xN(e, t, r) {
  const n = xe(e, r == null ? void 0 : r.in), o = n.getFullYear(), a = n.getDate(), i = ke(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = mN(i);
  return n.setMonth(t, Math.min(a, s)), n;
}
function SN(e, t, r) {
  const n = xe(e, r == null ? void 0 : r.in);
  return isNaN(+n) ? ke(e, NaN) : (n.setFullYear(t), n);
}
const CN = {
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
}, _N = (e, t, r) => {
  let n;
  const o = CN[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "em " + n : "há " + n : n;
}, EN = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, PN = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, TN = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, RN = {
  date: Ar({
    formats: EN,
    defaultWidth: "full"
  }),
  time: Ar({
    formats: PN,
    defaultWidth: "full"
  }),
  dateTime: Ar({
    formats: TN,
    defaultWidth: "full"
  })
}, NN = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, MN = (e, t, r, n) => {
  const o = NN[e];
  return typeof o == "function" ? o(t) : o;
}, ON = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, AN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, DN = {
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
}, jN = {
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
}, kN = {
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
}, IN = {
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
}, $N = (e, t) => {
  const r = Number(e);
  return (t == null ? void 0 : t.unit) === "week" ? r + "ª" : r + "º";
}, LN = {
  ordinalNumber: $N,
  era: gt({
    values: ON,
    defaultWidth: "wide"
  }),
  quarter: gt({
    values: AN,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: gt({
    values: DN,
    defaultWidth: "wide"
  }),
  day: gt({
    values: jN,
    defaultWidth: "wide"
  }),
  dayPeriod: gt({
    values: kN,
    defaultWidth: "wide",
    formattingValues: IN,
    defaultFormattingWidth: "wide"
  })
}, FN = /^(\d+)[ºªo]?/i, qN = /\d+/i, BN = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, WN = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, HN = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, VN = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, zN = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, GN = {
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
}, YN = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, UN = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, KN = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, XN = {
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
}, ZN = {
  ordinalNumber: My({
    matchPattern: FN,
    parsePattern: qN,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yt({
    matchPatterns: BN,
    defaultMatchWidth: "wide",
    parsePatterns: WN,
    defaultParseWidth: "any"
  }),
  quarter: yt({
    matchPatterns: HN,
    defaultMatchWidth: "wide",
    parsePatterns: VN,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yt({
    matchPatterns: zN,
    defaultMatchWidth: "wide",
    parsePatterns: GN,
    defaultParseWidth: "any"
  }),
  day: yt({
    matchPatterns: YN,
    defaultMatchWidth: "wide",
    parsePatterns: UN,
    defaultParseWidth: "any"
  }),
  dayPeriod: yt({
    matchPatterns: KN,
    defaultMatchWidth: "any",
    parsePatterns: XN,
    defaultParseWidth: "any"
  })
}, Dr = {
  code: "pt-BR",
  formatDistance: _N,
  formatLong: RN,
  formatRelative: MN,
  localize: LN,
  match: ZN,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Lf = 5, QN = 4;
function JN(e, t) {
  const r = t.startOfMonth(e), n = r.getDay() > 0 ? r.getDay() : 7, o = t.addDays(e, -n + 1), a = t.addDays(o, Lf * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Lf : QN;
}
function ky(e, t) {
  const r = t.startOfMonth(e), n = r.getDay();
  return n === 1 ? r : n === 0 ? t.addDays(r, -1 * 6) : t.addDays(r, -1 * (n - 1));
}
function eM(e, t) {
  const r = ky(e, t), n = JN(e, t);
  return t.addDays(r, n * 7 - 1);
}
class Ft {
  /**
   * Creates an instance of DateLib.
   *
   * @param options The options for the date library.
   * @param overrides Overrides for the date library functions.
   */
  constructor(t, r) {
    this.Date = Date, this.today = () => {
      var n;
      return (n = this.overrides) != null && n.today ? this.overrides.today() : this.options.timeZone ? lr.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (n, o, a) => {
      var i;
      return (i = this.overrides) != null && i.newDate ? this.overrides.newDate(n, o, a) : this.options.timeZone ? new lr(n, o, a, this.options.timeZone) : new Date(n, o, a);
    }, this.addDays = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addDays) == null ? void 0 : i.call(a, n, o)) ?? $u(n, o);
    }, this.addMonths = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addMonths) == null ? void 0 : i.call(a, n, o)) ?? Lu(n, o);
    }, this.addWeeks = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addWeeks) == null ? void 0 : i.call(a, n, o)) ?? sR(n, o);
    }, this.addYears = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addYears) == null ? void 0 : i.call(a, n, o)) ?? cR(n, o);
    }, this.differenceInCalendarDays = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.differenceInCalendarDays) == null ? void 0 : i.call(a, n, o)) ?? Py(n, o);
    }, this.differenceInCalendarMonths = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.differenceInCalendarMonths) == null ? void 0 : i.call(a, n, o)) ?? pR(n, o);
    }, this.eachMonthOfInterval = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.eachMonthOfInterval) == null ? void 0 : a.call(o, n)) ?? vR(n);
    }, this.endOfBroadcastWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.endOfBroadcastWeek) == null ? void 0 : i.call(a, n, o)) ?? eM(n, this);
    }, this.endOfISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfISOWeek) == null ? void 0 : a.call(o, n)) ?? bR(n);
    }, this.endOfMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfMonth) == null ? void 0 : a.call(o, n)) ?? mR(n);
    }, this.endOfWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.endOfWeek) == null ? void 0 : i.call(a, n, o ?? this.options)) ?? Ny(n, o ?? this.options);
    }, this.endOfYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfYear) == null ? void 0 : a.call(o, n)) ?? yR(n);
    }, this.format = (n, o, a) => {
      var s, c;
      const i = ((c = (s = this.overrides) == null ? void 0 : s.format) == null ? void 0 : c.call(s, n, o, a ?? this.options)) ?? va(n, o, a ?? this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getISOWeek) == null ? void 0 : a.call(o, n)) ?? Oy(n);
    }, this.getMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getMonth) == null ? void 0 : a.call(o, n)) ?? hN(n);
    }, this.getYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getYear) == null ? void 0 : a.call(o, n)) ?? vN(n);
    }, this.getWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.getWeek) == null ? void 0 : i.call(a, n, o ?? this.options)) ?? Dy(n, o ?? this.options);
    }, this.isAfter = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isAfter) == null ? void 0 : i.call(a, n, o)) ?? gN(n, o);
    }, this.isBefore = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isBefore) == null ? void 0 : i.call(a, n, o)) ?? yN(n, o);
    }, this.isDate = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.isDate) == null ? void 0 : a.call(o, n)) ?? Ty(n);
    }, this.isSameDay = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameDay) == null ? void 0 : i.call(a, n, o)) ?? dR(n, o);
    }, this.isSameMonth = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameMonth) == null ? void 0 : i.call(a, n, o)) ?? bN(n, o);
    }, this.isSameYear = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameYear) == null ? void 0 : i.call(a, n, o)) ?? wN(n, o);
    }, this.max = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.max) == null ? void 0 : a.call(o, n)) ?? lR(n);
    }, this.min = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.min) == null ? void 0 : a.call(o, n)) ?? uR(n);
    }, this.setMonth = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.setMonth) == null ? void 0 : i.call(a, n, o)) ?? xN(n, o);
    }, this.setYear = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.setYear) == null ? void 0 : i.call(a, n, o)) ?? SN(n, o);
    }, this.startOfBroadcastWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.startOfBroadcastWeek) == null ? void 0 : i.call(a, n, o ?? this)) ?? ky(n, o ?? this);
    }, this.startOfDay = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfDay) == null ? void 0 : a.call(o, n)) ?? Cn(n);
    }, this.startOfISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfISOWeek) == null ? void 0 : a.call(o, n)) ?? Sn(n);
    }, this.startOfMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfMonth) == null ? void 0 : a.call(o, n)) ?? gR(n);
    }, this.startOfWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfWeek) == null ? void 0 : a.call(o, n)) ?? Ir(n, this.options);
    }, this.startOfYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfYear) == null ? void 0 : a.call(o, n)) ?? Ry(n);
    }, this.options = { locale: Fu, ...t }, this.overrides = r;
  }
  /**
   * Generate digit map dynamically using Intl.NumberFormat.
   *
   * @since 9.5.0
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, r = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), n = {};
    for (let o = 0; o < 10; o++)
      n[o.toString()] = r.format(o);
    return n;
  }
  /**
   * Replace Arabic digits with the target numbering system digits.
   *
   * @since 9.5.0
   */
  replaceDigits(t) {
    const r = this.getDigitMap();
    return t.replace(/\d/g, (n) => r[n] || n);
  }
  /**
   * Format number using the custom numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
}
const qt = new Ft();
function tM(e, t, r = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (r[a] ? o.push(r[a]) : t[_e[a]] ? o.push(t[_e[a]]) : t[ct[a]] && o.push(t[ct[a]]), o), [t[ce.Day]]);
}
function rM(e) {
  return A.createElement("button", { ...e });
}
function nM(e) {
  return A.createElement("span", { ...e });
}
function oM(e) {
  const { size: t = 24, orientation: r = "left", className: n } = e;
  return A.createElement(
    "svg",
    { className: n, width: t, height: t, viewBox: "0 0 24 24" },
    r === "up" && A.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    r === "down" && A.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    r === "left" && A.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    r === "right" && A.createElement("polygon", { points: "8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5" })
  );
}
function aM(e) {
  const { day: t, modifiers: r, ...n } = e;
  return A.createElement("td", { ...n });
}
function iM(e) {
  const { day: t, modifiers: r, ...n } = e, o = A.useRef(null);
  return A.useEffect(() => {
    var a;
    r.focused && ((a = o.current) == null || a.focus());
  }, [r.focused]), A.createElement("button", { ref: o, ...n });
}
function sM(e) {
  const { options: t, className: r, components: n, classNames: o, ...a } = e, i = [o[ce.Dropdown], r].join(" "), s = t == null ? void 0 : t.find(({ value: c }) => c === a.value);
  return A.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[ce.DropdownRoot] },
    A.createElement(n.Select, { className: i, ...a }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: u }) => A.createElement(n.Option, { key: c, value: c, disabled: u }, l))),
    A.createElement(
      "span",
      { className: o[ce.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      A.createElement(n.Chevron, { orientation: "down", size: 18, className: o[ce.Chevron] })
    )
  );
}
function cM(e) {
  return A.createElement("div", { ...e });
}
function lM(e) {
  return A.createElement("div", { ...e });
}
function uM(e) {
  const { calendarMonth: t, displayIndex: r, ...n } = e;
  return A.createElement("div", { ...n }, e.children);
}
function dM(e) {
  const { calendarMonth: t, displayIndex: r, ...n } = e;
  return A.createElement("div", { ...n });
}
function fM(e) {
  return A.createElement("table", { ...e });
}
function pM(e) {
  return A.createElement("div", { ...e });
}
const Iy = eE(void 0);
function zn() {
  const e = tE(Iy);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function mM(e) {
  const { components: t } = zn();
  return A.createElement(t.Dropdown, { ...e });
}
function hM(e) {
  const { onPreviousClick: t, onNextClick: r, previousMonth: n, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: c, labelNext: l } } = zn(), u = He((m) => {
    o && (r == null || r(m));
  }, [o, r]), f = He((m) => {
    n && (t == null || t(m));
  }, [n, t]);
  return A.createElement(
    "nav",
    { ...a },
    A.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[ce.PreviousMonthButton], tabIndex: n ? void 0 : -1, "aria-disabled": n ? void 0 : !0, "aria-label": c(n), onClick: f },
      A.createElement(i.Chevron, { disabled: n ? void 0 : !0, className: s[ce.Chevron], orientation: "left" })
    ),
    A.createElement(
      i.NextMonthButton,
      { type: "button", className: s[ce.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: u },
      A.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[ce.Chevron] })
    )
  );
}
function vM(e) {
  const { components: t } = zn();
  return A.createElement(t.Button, { ...e });
}
function gM(e) {
  return A.createElement("option", { ...e });
}
function yM(e) {
  const { components: t } = zn();
  return A.createElement(t.Button, { ...e });
}
function bM(e) {
  const { rootRef: t, ...r } = e;
  return A.createElement("div", { ...r, ref: t });
}
function wM(e) {
  return A.createElement("select", { ...e });
}
function xM(e) {
  const { week: t, ...r } = e;
  return A.createElement("tr", { ...r });
}
function SM(e) {
  return A.createElement("th", { ...e });
}
function CM(e) {
  return A.createElement(
    "thead",
    { "aria-hidden": !0 },
    A.createElement("tr", { ...e })
  );
}
function _M(e) {
  const { week: t, ...r } = e;
  return A.createElement("th", { ...r });
}
function EM(e) {
  return A.createElement("th", { ...e });
}
function PM(e) {
  return A.createElement("tbody", { ...e });
}
function TM(e) {
  const { components: t } = zn();
  return A.createElement(t.Dropdown, { ...e });
}
const RM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: rM,
  CaptionLabel: nM,
  Chevron: oM,
  Day: aM,
  DayButton: iM,
  Dropdown: sM,
  DropdownNav: cM,
  Footer: lM,
  Month: uM,
  MonthCaption: dM,
  MonthGrid: fM,
  Months: pM,
  MonthsDropdown: mM,
  Nav: hM,
  NextMonthButton: vM,
  Option: gM,
  PreviousMonthButton: yM,
  Root: bM,
  Select: wM,
  Week: xM,
  WeekNumber: _M,
  WeekNumberHeader: EM,
  Weekday: SM,
  Weekdays: CM,
  Weeks: PM,
  YearsDropdown: TM
}, Symbol.toStringTag, { value: "Module" }));
function NM(e) {
  return {
    ...RM,
    ...e
  };
}
function MM(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0
  };
  return Object.entries(e).forEach(([r, n]) => {
    r.startsWith("data-") && (t[r] = n);
  }), t;
}
function OM() {
  const e = {};
  for (const t in ce)
    e[ce[t]] = `rdp-${ce[t]}`;
  for (const t in _e)
    e[_e[t]] = `rdp-${_e[t]}`;
  for (const t in ct)
    e[ct[t]] = `rdp-${ct[t]}`;
  for (const t in Ye)
    e[Ye[t]] = `rdp-${Ye[t]}`;
  return e;
}
function $y(e, t, r) {
  return (r ?? new Ft(t)).format(e, "LLLL y");
}
const AM = $y;
function DM(e, t, r) {
  return (r ?? new Ft(t)).format(e, "d");
}
function jM(e, t = qt) {
  return t.format(e, "LLLL");
}
function kM(e) {
  return e < 10 ? `0${e.toLocaleString()}` : `${e.toLocaleString()}`;
}
function IM() {
  return "";
}
function $M(e, t, r) {
  return (r ?? new Ft(t)).format(e, "cccccc");
}
function Ly(e, t = qt) {
  return t.format(e, "yyyy");
}
const LM = Ly, FM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: $y,
  formatDay: DM,
  formatMonthCaption: AM,
  formatMonthDropdown: jM,
  formatWeekNumber: kM,
  formatWeekNumberHeader: IM,
  formatWeekdayName: $M,
  formatYearCaption: LM,
  formatYearDropdown: Ly
}, Symbol.toStringTag, { value: "Module" }));
function qM(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...FM,
    ...e
  };
}
function BM(e, t, r, n, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: i(e),
    end: s(e)
  }).map((m) => {
    const v = n.formatMonthDropdown(m, o), y = l(m), h = t && m < a(t) || r && m > a(r) || !1;
    return { value: y, label: v, disabled: h };
  });
}
function WM(e, t = {}, r = {}) {
  let n = { ...t == null ? void 0 : t[ce.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    n = {
      ...n,
      ...r == null ? void 0 : r[o]
    };
  }), n;
}
function HM(e, t, r) {
  const n = e.today(), o = t ? e.startOfISOWeek(n) : e.startOfWeek(n), a = [];
  for (let i = 0; i < 7; i++) {
    const s = e.addDays(o, i);
    a.push(s);
  }
  return a;
}
function VM(e, t, r, n) {
  if (!e || !t)
    return;
  const { startOfYear: o, endOfYear: a, addYears: i, getYear: s, isBefore: c, isSameYear: l } = n, u = o(e), f = a(t), m = [];
  let v = u;
  for (; c(v, f) || l(v, f); )
    m.push(v), v = i(v, 1);
  return m.map((y) => {
    const h = r.formatYearDropdown(y, n);
    return {
      value: s(y),
      label: h,
      disabled: !1
    };
  });
}
function Fy(e, t, r) {
  return (r ?? new Ft(t)).format(e, "LLLL y");
}
const zM = Fy;
function GM(e, t, r, n) {
  let o = (n ?? new Ft(r)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function qy(e, t, r, n) {
  let o = (n ?? new Ft(r)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const YM = qy;
function UM() {
  return "";
}
function KM(e) {
  return "Choose the Month";
}
function XM(e) {
  return "Go to the Next Month";
}
function ZM(e) {
  return "Go to the Previous Month";
}
function QM(e, t, r) {
  return (r ?? new Ft(t)).format(e, "cccc");
}
function JM(e, t) {
  return `Week ${e}`;
}
function e1(e) {
  return "Week Number";
}
function t1(e) {
  return "Choose the Year";
}
const r1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: zM,
  labelDay: YM,
  labelDayButton: qy,
  labelGrid: Fy,
  labelGridcell: GM,
  labelMonthDropdown: KM,
  labelNav: UM,
  labelNext: XM,
  labelPrevious: ZM,
  labelWeekNumber: JM,
  labelWeekNumberHeader: e1,
  labelWeekday: QM,
  labelYearDropdown: t1
}, Symbol.toStringTag, { value: "Module" }));
function n1(e, t, { classNames: r, months: n, focused: o, dateLib: a }) {
  const i = Ot(null), s = Ot(n), c = Ot(!1);
  Lv(() => {
    const l = s.current;
    if (s.current = n, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement))
      return;
    const u = i.current, f = e.current.cloneNode(!0);
    if (f instanceof HTMLElement ? ([
      ...f.querySelectorAll("[data-animated-month]") ?? []
    ].forEach((g) => {
      const w = g.querySelector("[data-animated-month]");
      w && g.contains(w) && g.removeChild(w);
    }), i.current = f) : i.current = null, n.length === 0 || l.length === 0 || n.length !== l.length || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o || c.current || a.isSameMonth(n[0].date, l[0].date))
      return;
    const v = [
      ...(u == null ? void 0 : u.querySelectorAll("[data-animated-month]")) ?? []
    ], y = [
      ...e.current.querySelectorAll("[data-animated-month]") ?? []
    ];
    if (y && y.every((h) => h instanceof HTMLElement) && v && v.every((h) => h instanceof HTMLElement)) {
      c.current = !0;
      const h = a.isAfter(n[0].date, l[0].date);
      y.forEach((g, w) => {
        const b = v[w];
        if (!b)
          return;
        const x = h ? r[Ye.caption_after_enter] : r[Ye.caption_before_enter], C = h ? r[Ye.weeks_after_enter] : r[Ye.weeks_before_enter];
        g.style.position = "relative", g.style.overflow = "hidden";
        const _ = g.querySelector("[data-animated-caption]");
        _ && _ instanceof HTMLElement && _.classList.add(x);
        const S = g.querySelector("[data-animated-weeks]");
        S && S instanceof HTMLElement && S.classList.add(C);
        const E = () => {
          c.current = !1, _ && _ instanceof HTMLElement && _.classList.remove(x), S && S instanceof HTMLElement && S.classList.remove(C), g.style.position = "", g.style.overflow = "", g.contains(b) && g.removeChild(b);
        };
        b.style.pointerEvents = "none", b.style.position = "absolute", b.style.overflow = "hidden", b.setAttribute("aria-hidden", "true");
        const R = b.querySelector("[data-animated-weekdays]");
        R && R instanceof HTMLElement && (R.style.opacity = "0");
        const T = b.querySelector("[data-animated-caption]");
        T && T instanceof HTMLElement && (T.classList.add(h ? r[Ye.caption_before_exit] : r[Ye.caption_after_exit]), T.addEventListener("animationend", E));
        const D = b.querySelector("[data-animated-weeks]");
        D && D instanceof HTMLElement && D.classList.add(h ? r[Ye.weeks_before_exit] : r[Ye.weeks_after_exit]), g.insertBefore(b, g.firstChild);
      });
    }
  });
}
function o1(e, t, r, n) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: c } = r ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: m, endOfISOWeek: v, endOfMonth: y, endOfWeek: h, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: x } = n, C = c ? w(o, n) : i ? b(o) : x(o), _ = c ? m(a, n) : i ? v(y(a)) : h(y(a)), S = u(_, C), E = f(a, o) + 1, R = [];
  for (let O = 0; O <= S; O++) {
    const F = l(C, O);
    if (t && g(F, t))
      break;
    R.push(F);
  }
  const D = (c ? 35 : 42) * E;
  if (s && R.length < D) {
    const O = D - R.length;
    for (let F = 0; F < O; F++) {
      const L = l(R[R.length - 1], 1);
      R.push(L);
    }
  }
  return R;
}
function a1(e) {
  const t = [];
  return e.reduce((r, n) => {
    const o = [], a = n.weeks.reduce((i, s) => [...i, ...s.days], o);
    return [...r, ...a];
  }, t);
}
function i1(e, t, r, n) {
  const { numberOfMonths: o = 1 } = r, a = [];
  for (let i = 0; i < o; i++) {
    const s = n.addMonths(e, i);
    if (t && s > t)
      break;
    a.push(s);
  }
  return a;
}
function Ff(e, t) {
  const { month: r, defaultMonth: n, today: o = t.today(), numberOfMonths: a = 1, endMonth: i, startMonth: s } = e;
  let c = r || n || o;
  const { differenceInCalendarMonths: l, addMonths: u, startOfMonth: f } = t;
  if (i && l(i, c) < 0) {
    const m = -1 * (a - 1);
    c = u(i, m);
  }
  return s && l(c, s) < 0 && (c = s), f(c);
}
class By {
  constructor(t, r, n = qt) {
    this.date = t, this.displayMonth = r, this.outside = !!(r && !n.isSameMonth(t, r)), this.dateLib = n;
  }
  /**
   * Check if the day is the same as the given day: considering if it is in the
   * same display month.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class s1 {
  constructor(t, r) {
    this.date = t, this.weeks = r;
  }
}
class c1 {
  constructor(t, r) {
    this.days = r, this.weekNumber = t;
  }
}
function l1(e, t, r, n) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: m, startOfWeek: v } = n, y = e.reduce((h, g) => {
    const w = r.broadcastCalendar ? f(g, n) : r.ISOWeek ? m(g) : v(g), b = r.broadcastCalendar ? a(g, n) : r.ISOWeek ? i(s(g)) : c(s(g)), x = t.filter((E) => E >= w && E <= b), C = r.broadcastCalendar ? 35 : 42;
    if (r.fixedWeeks && x.length < C) {
      const E = t.filter((R) => {
        const T = C - x.length;
        return R > b && R <= o(b, T);
      });
      x.push(...E);
    }
    const _ = x.reduce((E, R) => {
      const T = r.ISOWeek ? l(R) : u(R), D = E.find((F) => F.weekNumber === T), O = new By(R, g, n);
      return D ? D.days.push(O) : E.push(new c1(T, [O])), E;
    }, []), S = new s1(g, _);
    return h.push(S), h;
  }, []);
  return r.reverseMonths ? y.reverse() : y;
}
function u1(e, t) {
  let { startMonth: r, endMonth: n } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: f } = t, { fromYear: m, toYear: v, fromMonth: y, toMonth: h } = e;
  !r && y && (r = y), !r && m && (r = t.newDate(m, 0, 1)), !n && h && (n = h), !n && v && (n = u(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return r ? r = i(r) : m ? r = u(m, 0, 1) : !r && g && (r = o(c(e.today ?? f(), -100))), n ? n = s(n) : v ? n = u(v, 11, 31) : !n && g && (n = l(e.today ?? f())), [
    r && a(r),
    n && a(n)
  ];
}
function d1(e, t, r, n) {
  if (r.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = r, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = n, l = o ? a : 1, u = i(e);
  if (!t)
    return s(u, l);
  if (!(c(t, e) < a))
    return s(u, l);
}
function f1(e, t, r, n) {
  if (r.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = r, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = n, l = o ? a ?? 1 : 1, u = i(e);
  if (!t)
    return s(u, -l);
  if (!(c(u, t) <= 0))
    return s(u, -l);
}
function p1(e) {
  const t = [];
  return e.reduce((r, n) => [...r, ...n.weeks], t);
}
function ga(e, t) {
  const [r, n] = Yt(e);
  return [t === void 0 ? r : t, n];
}
function m1(e, t) {
  const [r, n] = u1(e, t), { startOfMonth: o, endOfMonth: a } = t, i = Ff(e, t), [s, c] = ga(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  At(() => {
    const S = Ff(e, t);
    c(S);
  }, [e.timeZone]);
  const l = i1(s, n, e, t), u = o1(l, e.endMonth ? a(e.endMonth) : void 0, e, t), f = l1(l, u, e, t), m = p1(f), v = a1(f), y = f1(s, r, e, t), h = d1(s, n, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (S) => m.some((E) => E.days.some((R) => R.isEqualTo(S))), x = (S) => {
    if (g)
      return;
    let E = o(S);
    r && E < o(r) && (E = o(r)), n && E > o(n) && (E = o(n)), c(E), w == null || w(E);
  };
  return {
    months: f,
    weeks: m,
    days: v,
    navStart: r,
    navEnd: n,
    previousMonth: y,
    nextMonth: h,
    goToMonth: x,
    goToDay: (S) => {
      b(S) || x(S.date);
    }
  };
}
function h1(e, t, r, n) {
  let o, a = 0, i = !1;
  for (; a < e.length && !i; ) {
    const s = e[a], c = t(s);
    !c[_e.disabled] && !c[_e.hidden] && !c[_e.outside] && (c[_e.focused] || n != null && n.isEqualTo(s) || r(s.date) || c[_e.today]) && (o = s, i = !0), a++;
  }
  return o || (o = e.find((s) => {
    const c = t(s);
    return !c[_e.disabled] && !c[_e.hidden] && !c[_e.outside];
  })), o;
}
function Nt(e, t, r = !1, n = qt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = n;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(t, o) >= (r ? 1 : 0) && i(a, t) >= (r ? 1 : 0)) : !r && a ? s(a, t) : !r && o ? s(o, t) : !1;
}
function Wy(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function qu(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Hy(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Vy(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function zy(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Gy(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Mt(e, t, r = qt) {
  const n = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = r;
  return n.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (r.isDate(s))
      return o(e, s);
    if (Gy(s, r))
      return s.includes(e);
    if (qu(s))
      return Nt(s, e, !1, r);
    if (zy(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (Wy(s)) {
      const c = a(s.before, e), l = a(s.after, e), u = c > 0, f = l < 0;
      return i(s.before, s.after) ? f && u : u || f;
    }
    return Hy(s) ? a(e, s.after) > 0 : Vy(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function v1(e, t, r, n, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: f, addYears: m, endOfBroadcastWeek: v, endOfISOWeek: y, endOfWeek: h, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: x, startOfWeek: C } = i;
  let S = {
    day: l,
    week: f,
    month: u,
    year: m,
    startOfWeek: (E) => c ? b(E, i) : s ? x(E) : C(E),
    endOfWeek: (E) => c ? v(E, i) : s ? y(E) : h(E)
  }[e](r, t === "after" ? 1 : -1);
  return t === "before" && n ? S = g([n, S]) : t === "after" && o && (S = w([o, S])), S;
}
function Yy(e, t, r, n, o, a, i, s = 0) {
  if (s > 365)
    return;
  const c = v1(
    e,
    t,
    r.date,
    // should be refDay? or refDay.date?
    n,
    o,
    a,
    i
  ), l = !!(a.disabled && Mt(c, a.disabled, i)), u = !!(a.hidden && Mt(c, a.hidden, i)), f = c, m = new By(c, f, i);
  return !l && !u ? m : Yy(e, t, m, n, o, a, i, s + 1);
}
function g1(e, t, r, n, o) {
  const { autoFocus: a } = e, [i, s] = Yt(), c = h1(t.days, r, n || (() => !1), i), [l, u] = Yt(a ? c : void 0);
  return {
    isFocusTarget: (h) => !!(c != null && c.isEqualTo(h)),
    setFocused: u,
    focused: l,
    blur: () => {
      s(l), u(void 0);
    },
    moveFocus: (h, g) => {
      if (!l)
        return;
      const w = Yy(h, g, l, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), u(w));
    }
  };
}
function y1(e, t, r) {
  const { disabled: n, hidden: o, modifiers: a, showOutsideDays: i, broadcastCalendar: s, today: c } = t, { isSameDay: l, isSameMonth: u, startOfMonth: f, isBefore: m, endOfMonth: v, isAfter: y } = r, h = t.startMonth && f(t.startMonth), g = t.endMonth && v(t.endMonth), w = {
    [_e.focused]: [],
    [_e.outside]: [],
    [_e.disabled]: [],
    [_e.hidden]: [],
    [_e.today]: []
  }, b = {};
  for (const x of e) {
    const { date: C, displayMonth: _ } = x, S = !!(_ && !u(C, _)), E = !!(h && m(C, h)), R = !!(g && y(C, g)), T = !!(n && Mt(C, n, r)), D = !!(o && Mt(C, o, r)) || E || R || // Broadcast calendar will show outside days as default
    !s && !i && S || s && i === !1 && S, O = l(C, c ?? r.today());
    S && w.outside.push(x), T && w.disabled.push(x), D && w.hidden.push(x), O && w.today.push(x), a && Object.keys(a).forEach((F) => {
      const L = a == null ? void 0 : a[F];
      L && Mt(C, L, r) && (b[F] ? b[F].push(x) : b[F] = [x]);
    });
  }
  return (x) => {
    const C = {
      [_e.focused]: !1,
      [_e.disabled]: !1,
      [_e.hidden]: !1,
      [_e.outside]: !1,
      [_e.today]: !1
    }, _ = {};
    for (const S in w) {
      const E = w[S];
      C[S] = E.some((R) => R === x);
    }
    for (const S in b)
      _[S] = b[S].some((E) => E === x);
    return {
      ...C,
      // custom modifiers should override all the previous ones
      ..._
    };
  };
}
function b1(e, t) {
  const { selected: r, required: n, onSelect: o } = e, [a, i] = ga(r, o ? r : void 0), s = o ? r : a, { isSameDay: c } = t, l = (v) => (s == null ? void 0 : s.some((y) => c(y, v))) ?? !1, { min: u, max: f } = e;
  return {
    selected: s,
    select: (v, y, h) => {
      let g = [...s ?? []];
      if (l(v)) {
        if ((s == null ? void 0 : s.length) === u || n && (s == null ? void 0 : s.length) === 1)
          return;
        g = s == null ? void 0 : s.filter((w) => !c(w, v));
      } else
        (s == null ? void 0 : s.length) === f ? g = [v] : g = [...g, v];
      return o || i(g), o == null || o(g, v, y, h), g;
    },
    isSelected: l
  };
}
function w1(e, t, r = 0, n = 0, o = !1, a = qt) {
  const { from: i, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a;
  let f;
  if (!i && !s)
    f = { from: e, to: r > 0 ? void 0 : e };
  else if (i && !s)
    c(i, e) ? o ? f = { from: i, to: void 0 } : f = void 0 : u(e, i) ? f = { from: e, to: i } : f = { from: i, to: e };
  else if (i && s)
    if (c(i, e) && c(s, e))
      o ? f = { from: i, to: s } : f = void 0;
    else if (c(i, e))
      f = { from: i, to: r > 0 ? void 0 : e };
    else if (c(s, e))
      f = { from: e, to: r > 0 ? void 0 : e };
    else if (u(e, i))
      f = { from: e, to: s };
    else if (l(e, i))
      f = { from: i, to: e };
    else if (l(e, s))
      f = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (f != null && f.from && (f != null && f.to)) {
    const m = a.differenceInCalendarDays(f.to, f.from);
    n > 0 && m > n ? f = { from: e, to: void 0 } : r > 1 && m < r && (f = { from: e, to: void 0 });
  }
  return f;
}
function x1(e, t, r = qt) {
  const n = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = r.differenceInCalendarDays(e.to, e.from), i = Math.min(a, 6);
  for (let s = 0; s <= i; s++) {
    if (n.includes(o.getDay()))
      return !0;
    o = r.addDays(o, 1);
  }
  return !1;
}
function qf(e, t, r = qt) {
  return Nt(e, t.from, !1, r) || Nt(e, t.to, !1, r) || Nt(t, e.from, !1, r) || Nt(t, e.to, !1, r);
}
function S1(e, t, r = qt) {
  const n = Array.isArray(t) ? t : [t];
  if (n.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : r.isDate(s) ? Nt(e, s, !1, r) : Gy(s, r) ? s.some((c) => Nt(e, c, !1, r)) : qu(s) ? s.from && s.to ? qf(e, { from: s.from, to: s.to }, r) : !1 : zy(s) ? x1(e, s.dayOfWeek, r) : Wy(s) ? r.isAfter(s.before, s.after) ? qf(e, {
    from: r.addDays(s.after, 1),
    to: r.addDays(s.before, -1)
  }, r) : Mt(e.from, s, r) || Mt(e.to, s, r) : Hy(s) || Vy(s) ? Mt(e.from, s, r) || Mt(e.to, s, r) : !1))
    return !0;
  const i = n.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const c = r.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (i.some((u) => u(s)))
        return !0;
      s = r.addDays(s, 1);
    }
  }
  return !1;
}
function C1(e, t) {
  const { disabled: r, excludeDisabled: n, selected: o, required: a, onSelect: i } = e, [s, c] = ga(o, i ? o : void 0), l = i ? o : s;
  return {
    selected: l,
    select: (m, v, y) => {
      const { min: h, max: g } = e, w = m ? w1(m, l, h, g, a, t) : void 0;
      return n && r && (w != null && w.from) && w.to && S1({ from: w.from, to: w.to }, r, t) && (w.from = m, w.to = void 0), i || c(w), i == null || i(w, m, v, y), w;
    },
    isSelected: (m) => l && Nt(l, m, !1, t)
  };
}
function _1(e, t) {
  const { selected: r, required: n, onSelect: o } = e, [a, i] = ga(r, o ? r : void 0), s = o ? r : a, { isSameDay: c } = t;
  return {
    selected: s,
    select: (f, m, v) => {
      let y = f;
      return !n && s && s && c(f, s) && (y = void 0), o || i(y), o == null || o(y, f, m, v), y;
    },
    isSelected: (f) => s ? c(s, f) : !1
  };
}
function E1(e, t) {
  const r = _1(e, t), n = b1(e, t), o = C1(e, t);
  switch (e.mode) {
    case "single":
      return r;
    case "multiple":
      return n;
    case "range":
      return o;
    default:
      return;
  }
}
function Uy(e) {
  const { components: t, formatters: r, labels: n, dateLib: o, locale: a, classNames: i } = Eo(() => {
    const le = { ...Fu, ...e.locale };
    return {
      dateLib: new Ft({
        locale: le,
        weekStartsOn: e.broadcastCalendar ? 1 : e.weekStartsOn,
        firstWeekContainsDate: e.firstWeekContainsDate,
        useAdditionalWeekYearTokens: e.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: e.useAdditionalDayOfYearTokens,
        timeZone: e.timeZone,
        numerals: e.numerals
      }, e.dateLib),
      components: NM(e.components),
      formatters: qM(e.formatters),
      labels: { ...r1, ...e.labels },
      locale: le,
      classNames: { ...OM(), ...e.classNames }
    };
  }, [
    e.locale,
    e.broadcastCalendar,
    e.weekStartsOn,
    e.firstWeekContainsDate,
    e.useAdditionalWeekYearTokens,
    e.useAdditionalDayOfYearTokens,
    e.timeZone,
    e.numerals,
    e.dateLib,
    e.components,
    e.formatters,
    e.labels,
    e.classNames
  ]), { captionLayout: s, mode: c, onDayBlur: l, onDayClick: u, onDayFocus: f, onDayKeyDown: m, onDayMouseEnter: v, onDayMouseLeave: y, onNextClick: h, onPrevClick: g, showWeekNumber: w, styles: b } = e, { formatCaption: x, formatDay: C, formatMonthDropdown: _, formatWeekNumber: S, formatWeekNumberHeader: E, formatWeekdayName: R, formatYearDropdown: T } = r, D = m1(e, o), { days: O, months: F, navStart: L, navEnd: N, previousMonth: I, nextMonth: k, goToMonth: G } = D, B = y1(O, e, o), { isSelected: $, select: J, selected: ee } = E1(e, o) ?? {}, { blur: j, focused: Y, isFocusTarget: K, moveFocus: U, setFocused: ne } = g1(e, D, B, $ ?? (() => !1), o), { labelDayButton: W, labelGridcell: Q, labelGrid: se, labelMonthDropdown: ae, labelNav: oe, labelWeekday: H, labelWeekNumber: ue, labelWeekNumberHeader: z, labelYearDropdown: ge } = n, Ee = Eo(() => HM(o, e.ISOWeek), [o, e.ISOWeek]), Te = c !== void 0 || u !== void 0, Be = He(() => {
    I && (G(I), g == null || g(I));
  }, [I, G, g]), $e = He(() => {
    k && (G(k), h == null || h(k));
  }, [G, k, h]), Xe = He((le, Se) => (fe) => {
    fe.preventDefault(), fe.stopPropagation(), ne(le), J == null || J(le.date, Se, fe), u == null || u(le.date, Se, fe);
  }, [J, u, ne]), P = He((le, Se) => (fe) => {
    ne(le), f == null || f(le.date, Se, fe);
  }, [f, ne]), X = He((le, Se) => (fe) => {
    j(), l == null || l(le.date, Se, fe);
  }, [j, l]), Z = He((le, Se) => (fe) => {
    const ht = {
      ArrowLeft: ["day", e.dir === "rtl" ? "after" : "before"],
      ArrowRight: ["day", e.dir === "rtl" ? "before" : "after"],
      ArrowDown: ["week", "after"],
      ArrowUp: ["week", "before"],
      PageUp: [fe.shiftKey ? "year" : "month", "before"],
      PageDown: [fe.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ht[fe.key]) {
      fe.preventDefault(), fe.stopPropagation();
      const [Ge, Sr] = ht[fe.key];
      U(Ge, Sr);
    }
    m == null || m(le.date, Se, fe);
  }, [U, m, e.dir]), pe = He((le, Se) => (fe) => {
    v == null || v(le.date, Se, fe);
  }, [v]), De = He((le, Se) => (fe) => {
    y == null || y(le.date, Se, fe);
  }, [y]), Ce = He((le) => (Se) => {
    const fe = Number(Se.target.value), ht = o.setMonth(o.startOfMonth(le), fe);
    G(ht);
  }, [o, G]), de = He((le) => (Se) => {
    const fe = Number(Se.target.value), ht = o.setYear(o.startOfMonth(le), fe);
    G(ht);
  }, [o, G]), { className: ze, style: Ze } = Eo(() => ({
    className: [i[ce.Root], e.className].filter(Boolean).join(" "),
    style: { ...b == null ? void 0 : b[ce.Root], ...e.style }
  }), [i, e.className, e.style, b]), Re = MM(e), We = Ot(null);
  n1(We, !!e.animate, {
    classNames: i,
    months: F,
    focused: Y,
    dateLib: o
  });
  const ot = {
    dayPickerProps: e,
    selected: ee,
    select: J,
    isSelected: $,
    months: F,
    nextMonth: k,
    previousMonth: I,
    goToMonth: G,
    getModifiers: B,
    components: t,
    classNames: i,
    styles: b,
    labels: n,
    formatters: r
  };
  return A.createElement(
    Iy.Provider,
    { value: ot },
    A.createElement(
      t.Root,
      { rootRef: e.animate ? We : void 0, className: ze, style: Ze, dir: e.dir, id: e.id, lang: e.lang, nonce: e.nonce, title: e.title, role: e.role, "aria-label": e["aria-label"], ...Re },
      A.createElement(
        t.Months,
        { className: i[ce.Months], style: b == null ? void 0 : b[ce.Months] },
        !e.hideNavigation && A.createElement(t.Nav, { className: i[ce.Nav], style: b == null ? void 0 : b[ce.Nav], "aria-label": oe(), onPreviousClick: Be, onNextClick: $e, previousMonth: I, nextMonth: k }),
        F.map((le, Se) => {
          const fe = BM(le.date, L, N, r, o), ht = VM(L, N, r, o);
          return A.createElement(
            t.Month,
            { "data-animated-month": e.animate ? "true" : void 0, className: i[ce.Month], style: b == null ? void 0 : b[ce.Month], key: Se, displayIndex: Se, calendarMonth: le },
            A.createElement(t.MonthCaption, { "data-animated-caption": e.animate ? "true" : void 0, className: i[ce.MonthCaption], style: b == null ? void 0 : b[ce.MonthCaption], calendarMonth: le, displayIndex: Se }, s != null && s.startsWith("dropdown") ? A.createElement(
              t.DropdownNav,
              { className: i[ce.Dropdowns], style: b == null ? void 0 : b[ce.Dropdowns] },
              s === "dropdown" || s === "dropdown-months" ? A.createElement(t.MonthsDropdown, { className: i[ce.MonthsDropdown], "aria-label": ae(), classNames: i, components: t, disabled: !!e.disableNavigation, onChange: Ce(le.date), options: fe, style: b == null ? void 0 : b[ce.Dropdown], value: o.getMonth(le.date) }) : A.createElement("span", { role: "status", "aria-live": "polite" }, _(le.date, o)),
              s === "dropdown" || s === "dropdown-years" ? A.createElement(t.YearsDropdown, { className: i[ce.YearsDropdown], "aria-label": ge(o.options), classNames: i, components: t, disabled: !!e.disableNavigation, onChange: de(le.date), options: ht, style: b == null ? void 0 : b[ce.Dropdown], value: o.getYear(le.date) }) : A.createElement("span", { role: "status", "aria-live": "polite" }, T(le.date, o))
            ) : A.createElement(t.CaptionLabel, { className: i[ce.CaptionLabel], role: "status", "aria-live": "polite" }, x(le.date, o.options, o))),
            A.createElement(
              t.MonthGrid,
              { role: "grid", "aria-multiselectable": c === "multiple" || c === "range", "aria-label": se(le.date, o.options, o) || void 0, className: i[ce.MonthGrid], style: b == null ? void 0 : b[ce.MonthGrid] },
              !e.hideWeekdays && A.createElement(
                t.Weekdays,
                { "data-animated-weekdays": e.animate ? "true" : void 0, className: i[ce.Weekdays], style: b == null ? void 0 : b[ce.Weekdays] },
                w && A.createElement(t.WeekNumberHeader, { "aria-label": z(o.options), className: i[ce.WeekNumberHeader], style: b == null ? void 0 : b[ce.WeekNumberHeader], scope: "col" }, E()),
                Ee.map((Ge, Sr) => A.createElement(t.Weekday, { "aria-label": H(Ge, o.options, o), className: i[ce.Weekday], key: Sr, style: b == null ? void 0 : b[ce.Weekday], scope: "col" }, R(Ge, o.options, o)))
              ),
              A.createElement(t.Weeks, { "data-animated-weeks": e.animate ? "true" : void 0, className: i[ce.Weeks], style: b == null ? void 0 : b[ce.Weeks] }, le.weeks.map((Ge, Sr) => A.createElement(
                t.Week,
                { className: i[ce.Week], key: Ge.weekNumber, style: b == null ? void 0 : b[ce.Week], week: Ge },
                w && A.createElement(t.WeekNumber, { week: Ge, style: b == null ? void 0 : b[ce.WeekNumber], "aria-label": ue(Ge.weekNumber, {
                  locale: a
                }), className: i[ce.WeekNumber], scope: "row", role: "rowheader" }, S(Ge.weekNumber)),
                Ge.days.map((Ie) => {
                  const { date: Qe } = Ie, he = B(Ie);
                  if (he[_e.focused] = !he.hidden && !!(Y != null && Y.isEqualTo(Ie)), he[ct.selected] = ($ == null ? void 0 : $(Qe)) || he.selected, qu(ee)) {
                    const { from: Cr, to: on } = ee;
                    he[ct.range_start] = !!(Cr && on && o.isSameDay(Qe, Cr)), he[ct.range_end] = !!(Cr && on && o.isSameDay(Qe, on)), he[ct.range_middle] = Nt(ee, Qe, !0, o);
                  }
                  const so = WM(he, b, e.modifiersStyles), co = tM(he, i, e.modifiersClassNames), Ja = !Te && !he.hidden ? Q(Qe, he, o.options, o) : void 0;
                  return A.createElement(t.Day, { key: `${o.format(Qe, "yyyy-MM-dd")}_${o.format(Ie.displayMonth, "yyyy-MM")}`, day: Ie, modifiers: he, className: co.join(" "), style: so, role: "gridcell", "aria-selected": he.selected || void 0, "aria-label": Ja, "data-day": o.format(Qe, "yyyy-MM-dd"), "data-month": Ie.outside ? o.format(Qe, "yyyy-MM") : void 0, "data-selected": he.selected || void 0, "data-disabled": he.disabled || void 0, "data-hidden": he.hidden || void 0, "data-outside": Ie.outside || void 0, "data-focused": he.focused || void 0, "data-today": he.today || void 0 }, !he.hidden && Te ? A.createElement(t.DayButton, { className: i[ce.DayButton], style: b == null ? void 0 : b[ce.DayButton], type: "button", day: Ie, modifiers: he, disabled: he.disabled || void 0, tabIndex: K(Ie) ? 0 : -1, "aria-label": W(Qe, he, o.options, o), onClick: Xe(Ie, he), onBlur: X(Ie, he), onFocus: P(Ie, he), onKeyDown: Z(Ie, he), onMouseEnter: pe(Ie, he), onMouseLeave: De(Ie, he) }, C(Qe, o.options, o)) : !he.hidden && C(Ie.date, o.options, o));
                })
              )))
            )
          );
        })
      ),
      e.footer && A.createElement(t.Footer, { className: i[ce.Footer], style: b == null ? void 0 : b[ce.Footer], role: "status", "aria-live": "polite" }, e.footer)
    )
  );
}
function Ky({
  className: e,
  showOutsideDays: t = !0,
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    Uy,
    {
      locale: Dr,
      showOutsideDays: t,
      className: M("p-3", e),
      ...r
    }
  );
}
Ky.displayName = "Calendar";
const P1 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
P1.displayName = "Card";
const T1 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: r,
    className: M("flex flex-col space-y-1.5 p-2", e),
    ...t
  }
));
T1.displayName = "CardHeader";
const R1 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
R1.displayName = "CardTitle";
const N1 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "p",
  {
    ref: r,
    className: M("text-sm text-muted-foreground px-4", e),
    ...t
  }
));
N1.displayName = "CardDescription";
const M1 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx("div", { ref: r, className: M("p-4", e), ...t }));
M1.displayName = "CardContent";
const O1 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: r,
    className: M("flex items-center p-4 pt-0", e),
    ...t
  }
));
O1.displayName = "CardFooter";
function A1(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Bf(e) {
  return A1(e) || Array.isArray(e);
}
function D1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Bu(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : r.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !Bf(s) || !Bf(c) ? s === c : Bu(s, c);
  });
}
function Wf(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function j1(e, t) {
  if (e.length !== t.length) return !1;
  const r = Wf(e), n = Wf(t);
  return r.every((o, a) => {
    const i = n[a];
    return Bu(o, i);
  });
}
function Wu(e) {
  return typeof e == "number";
}
function Al(e) {
  return typeof e == "string";
}
function ya(e) {
  return typeof e == "boolean";
}
function Hf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Me(e) {
  return Math.abs(e);
}
function Hu(e) {
  return Math.sign(e);
}
function yn(e, t) {
  return Me(e - t);
}
function k1(e, t) {
  if (e === 0 || t === 0 || Me(e) <= Me(t)) return 0;
  const r = yn(Me(e), Me(t));
  return Me(r / e);
}
function I1(e) {
  return Math.round(e * 100) / 100;
}
function _n(e) {
  return En(e).map(Number);
}
function lt(e) {
  return e[Gn(e)];
}
function Gn(e) {
  return Math.max(0, e.length - 1);
}
function Vu(e, t) {
  return t === Gn(e);
}
function Vf(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function En(e) {
  return Object.keys(e);
}
function Xy(e, t) {
  return [e, t].reduce((r, n) => (En(n).forEach((o) => {
    const a = r[o], i = n[o], s = Hf(a) && Hf(i);
    r[o] = s ? Xy(a, i) : i;
  }), r), {});
}
function Dl(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function $1(e, t) {
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
function Pn() {
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
function L1(e, t, r, n) {
  const o = Pn(), a = 1e3 / 60;
  let i = null, s = 0, c = 0;
  function l() {
    o.add(e, "visibilitychange", () => {
      e.hidden && y();
    });
  }
  function u() {
    v(), o.clear();
  }
  function f(g) {
    if (!c) return;
    i || (i = g, r(), r());
    const w = g - i;
    for (i = g, s += w; s >= a; )
      r(), s -= a;
    const b = s / a;
    n(b), c && (c = t.requestAnimationFrame(f));
  }
  function m() {
    c || (c = t.requestAnimationFrame(f));
  }
  function v() {
    t.cancelAnimationFrame(c), i = null, s = 0, c = 0;
  }
  function y() {
    i = null, s = 0;
  }
  return {
    init: l,
    destroy: u,
    start: m,
    stop: v,
    update: r,
    render: n
  };
}
function F1(e, t) {
  const r = t === "rtl", n = e === "y", o = n ? "y" : "x", a = n ? "x" : "y", i = !n && r ? -1 : 1, s = u(), c = f();
  function l(y) {
    const {
      height: h,
      width: g
    } = y;
    return n ? h : g;
  }
  function u() {
    return n ? "top" : r ? "right" : "left";
  }
  function f() {
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
function dr(e = 0, t = 0) {
  const r = Me(e - t);
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
function Zy(e, t, r) {
  const {
    constrain: n
  } = dr(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return r ? Me((o + m) % o) : n(m);
  }
  function s() {
    return a;
  }
  function c(m) {
    return a = i(m), f;
  }
  function l(m) {
    return u().set(s() + m);
  }
  function u() {
    return Zy(e, s(), r);
  }
  const f = {
    get: s,
    set: c,
    add: l,
    clone: u
  };
  return f;
}
function q1(e, t, r, n, o, a, i, s, c, l, u, f, m, v, y, h, g, w, b) {
  const {
    cross: x,
    direction: C
  } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], S = {
    passive: !1
  }, E = Pn(), R = Pn(), T = dr(50, 225).constrain(v.measure(20)), D = {
    mouse: 300,
    touch: 400
  }, O = {
    mouse: 500,
    touch: 600
  }, F = y ? 43 : 25;
  let L = !1, N = 0, I = 0, k = !1, G = !1, B = !1, $ = !1;
  function J(H) {
    if (!b) return;
    function ue(ge) {
      (ya(b) || b(H, ge)) && ne(ge);
    }
    const z = t;
    E.add(z, "dragstart", (ge) => ge.preventDefault(), S).add(z, "touchmove", () => {
    }, S).add(z, "touchend", () => {
    }).add(z, "touchstart", ue).add(z, "mousedown", ue).add(z, "touchcancel", Q).add(z, "contextmenu", Q).add(z, "click", se, !0);
  }
  function ee() {
    E.clear(), R.clear();
  }
  function j() {
    const H = $ ? r : t;
    R.add(H, "touchmove", W, S).add(H, "touchend", Q).add(H, "mousemove", W, S).add(H, "mouseup", Q);
  }
  function Y(H) {
    const ue = H.nodeName || "";
    return _.includes(ue);
  }
  function K() {
    return (y ? O : D)[$ ? "mouse" : "touch"];
  }
  function U(H, ue) {
    const z = f.add(Hu(H) * -1), ge = u.byDistance(H, !y).distance;
    return y || Me(H) < T ? ge : g && ue ? ge * 0.5 : u.byIndex(z.get(), 0).distance;
  }
  function ne(H) {
    const ue = Dl(H, n);
    $ = ue, B = y && ue && !H.buttons && L, L = yn(o.get(), i.get()) >= 2, !(ue && H.button !== 0) && (Y(H.target) || (k = !0, a.pointerDown(H), l.useFriction(0).useDuration(0), o.set(i), j(), N = a.readPoint(H), I = a.readPoint(H, x), m.emit("pointerDown")));
  }
  function W(H) {
    if (!Dl(H, n) && H.touches.length >= 2) return Q(H);
    const z = a.readPoint(H), ge = a.readPoint(H, x), Ee = yn(z, N), Te = yn(ge, I);
    if (!G && !$ && (!H.cancelable || (G = Ee > Te, !G)))
      return Q(H);
    const Be = a.pointerMove(H);
    Ee > h && (B = !0), l.useFriction(0.3).useDuration(0.75), s.start(), o.add(C(Be)), H.preventDefault();
  }
  function Q(H) {
    const z = u.byDistance(0, !1).index !== f.get(), ge = a.pointerUp(H) * K(), Ee = U(C(ge), z), Te = k1(ge, Ee), Be = F - 10 * Te, $e = w + Te / 50;
    G = !1, k = !1, R.clear(), l.useDuration(Be).useFriction($e), c.distance(Ee, !y), $ = !1, m.emit("pointerUp");
  }
  function se(H) {
    B && (H.stopPropagation(), H.preventDefault(), B = !1);
  }
  function ae() {
    return k;
  }
  return {
    init: J,
    destroy: ee,
    pointerDown: ae
  };
}
function B1(e, t) {
  let n, o;
  function a(f) {
    return f.timeStamp;
  }
  function i(f, m) {
    const y = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Dl(f, t) ? f : f.touches[0])[y];
  }
  function s(f) {
    return n = f, o = f, i(f);
  }
  function c(f) {
    const m = i(f) - i(o), v = a(f) - a(n) > 170;
    return o = f, v && (n = f), m;
  }
  function l(f) {
    if (!n || !o) return 0;
    const m = i(o) - i(n), v = a(f) - a(n), y = a(f) - a(o) > 170, h = m / v;
    return v && !y && Me(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: l,
    readPoint: i
  };
}
function W1() {
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
function H1(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function V1(e, t, r, n, o, a, i) {
  const s = [e].concat(n);
  let c, l, u = [], f = !1;
  function m(g) {
    return o.measureSize(i.measure(g));
  }
  function v(g) {
    if (!a) return;
    l = m(e), u = n.map(m);
    function w(b) {
      for (const x of b) {
        if (f) return;
        const C = x.target === e, _ = n.indexOf(x.target), S = C ? l : u[_], E = m(C ? e : n[_]);
        if (Me(E - S) >= 0.5) {
          g.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((b) => {
      (ya(a) || a(g, b)) && w(b);
    }), r.requestAnimationFrame(() => {
      s.forEach((b) => c.observe(b));
    });
  }
  function y() {
    f = !0, c && c.disconnect();
  }
  return {
    init: v,
    destroy: y
  };
}
function z1(e, t, r, n, o, a) {
  let i = 0, s = 0, c = o, l = a, u = e.get(), f = 0;
  function m() {
    const S = n.get() - e.get(), E = !c;
    let R = 0;
    return E ? (i = 0, r.set(n), e.set(n), R = S) : (r.set(e), i += S / c, i *= l, u += i, e.add(i), R = u - f), s = Hu(R), f = u, _;
  }
  function v() {
    const S = n.get() - t.get();
    return Me(S) < 1e-3;
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
  function w() {
    return x(o);
  }
  function b() {
    return C(a);
  }
  function x(S) {
    return c = S, _;
  }
  function C(S) {
    return l = S, _;
  }
  const _ = {
    direction: h,
    duration: y,
    velocity: g,
    seek: m,
    settled: v,
    useBaseFriction: b,
    useBaseDuration: w,
    useFriction: C,
    useDuration: x
  };
  return _;
}
function G1(e, t, r, n, o) {
  const a = o.measure(10), i = o.measure(50), s = dr(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function u(v) {
    if (!l()) return;
    const y = e.reachedMin(t.get()) ? "min" : "max", h = Me(e[y] - t.get()), g = r.get() - t.get(), w = s.constrain(h / i);
    r.subtract(g * w), !v && Me(g) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
  }
  function f(v) {
    c = !v;
  }
  return {
    shouldConstrain: l,
    constrain: u,
    toggleActive: f
  };
}
function Y1(e, t, r, n, o) {
  const a = dr(-t + e, 0), i = f(), s = u(), c = m();
  function l(y, h) {
    return yn(y, h) <= 1;
  }
  function u() {
    const y = i[0], h = lt(i), g = i.lastIndexOf(y), w = i.indexOf(h) + 1;
    return dr(g, w);
  }
  function f() {
    return r.map((y, h) => {
      const {
        min: g,
        max: w
      } = a, b = a.constrain(y), x = !h, C = Vu(r, h);
      return x ? w : C || l(g, b) ? g : l(w, b) ? w : b;
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
function U1(e, t, r) {
  const n = t[0], o = r ? n - e : lt(t);
  return {
    limit: dr(o, n)
  };
}
function K1(e, t, r, n) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = dr(a, i);
  function l(m) {
    return m === 1 ? c(r.get()) : m === -1 ? s(r.get()) : !1;
  }
  function u(m) {
    if (!l(m)) return;
    const v = e * (m * -1);
    n.forEach((y) => y.add(v));
  }
  return {
    loop: u
  };
}
function X1(e) {
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
function Z1(e, t, r, n, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, c = f().map(t.measure), l = m(), u = v();
  function f() {
    return s(n).map((h) => lt(h)[i] - h[0][a]).map(Me);
  }
  function m() {
    return n.map((h) => r[a] - h[a]).map((h) => -Me(h));
  }
  function v() {
    return s(l).map((h) => h[0]).map((h, g) => h + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function Q1(e, t, r, n, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = n, l = u();
  function u() {
    const m = i(a), v = !e || t === "keepSnaps";
    return r.length === 1 ? [a] : v ? m : m.slice(s, c).map((y, h, g) => {
      const w = !h, b = Vu(g, h);
      if (w) {
        const x = lt(g[0]) + 1;
        return Vf(x);
      }
      if (b) {
        const x = Gn(a) - lt(g)[0] + 1;
        return Vf(x, lt(g)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: l
  };
}
function J1(e, t, r, n, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = n;
  function c(y) {
    return y.concat().sort((h, g) => Me(h) - Me(g))[0];
  }
  function l(y) {
    const h = e ? i(y) : s(y), g = t.map((b, x) => ({
      diff: u(b - h, 0),
      index: x
    })).sort((b, x) => Me(b.diff) - Me(x.diff)), {
      index: w
    } = g[0];
    return {
      index: w,
      distance: h
    };
  }
  function u(y, h) {
    const g = [y, y + r, y - r];
    if (!e) return y;
    if (!h) return c(g);
    const w = g.filter((b) => Hu(b) === h);
    return w.length ? c(w) : lt(g) - r;
  }
  function f(y, h) {
    const g = t[y] - o.get(), w = u(g, h);
    return {
      index: y,
      distance: w
    };
  }
  function m(y, h) {
    const g = o.get() + y, {
      index: w,
      distance: b
    } = l(g), x = !e && a(g);
    if (!h || x) return {
      index: w,
      distance: y
    };
    const C = t[w] - b, _ = y + u(C, 0);
    return {
      index: w,
      distance: _
    };
  }
  return {
    byDistance: m,
    byIndex: f,
    shortcut: u
  };
}
function eO(e, t, r, n, o, a, i) {
  function s(f) {
    const m = f.distance, v = f.index !== t.get();
    a.add(m), m && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (r.set(t.get()), t.set(f.index), i.emit("select"));
  }
  function c(f, m) {
    const v = o.byDistance(f, m);
    s(v);
  }
  function l(f, m) {
    const v = t.clone().set(f), y = o.byIndex(v.get(), m);
    s(y);
  }
  return {
    distance: c,
    index: l
  };
}
function tO(e, t, r, n, o, a, i, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let l = 0;
  function u(v) {
    if (!s) return;
    function y(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const b = r.findIndex((x) => x.includes(h));
      Wu(b) && (o.useDuration(0), n.index(b, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", f, !1), t.forEach((h, g) => {
      a.add(h, "focus", (w) => {
        (ya(s) || s(v, w)) && y(g);
      }, c);
    });
  }
  function f(v) {
    v.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: u
  };
}
function fn(e) {
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
    return Wu(c) ? c : c.get();
  }
  return {
    get: r,
    set: n,
    add: o,
    subtract: a
  };
}
function Qy(e, t) {
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
    const v = I1(e.direction(m));
    v !== o && (n.transform = r(v), o = v);
  }
  function l(m) {
    a = !m;
  }
  function u() {
    a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: u,
    to: c,
    toggleActive: l
  };
}
function rO(e, t, r, n, o, a, i, s, c) {
  const u = _n(o), f = _n(o).reverse(), m = w().concat(b());
  function v(E, R) {
    return E.reduce((T, D) => T - o[D], R);
  }
  function y(E, R) {
    return E.reduce((T, D) => v(T, R) > 0 ? T.concat([D]) : T, []);
  }
  function h(E) {
    return a.map((R, T) => ({
      start: R - n[T] + 0.5 + E,
      end: R + t - 0.5 + E
    }));
  }
  function g(E, R, T) {
    const D = h(R);
    return E.map((O) => {
      const F = T ? 0 : -r, L = T ? r : 0, N = T ? "end" : "start", I = D[O][N];
      return {
        index: O,
        loopPoint: I,
        slideLocation: fn(-1),
        translate: Qy(e, c[O]),
        target: () => s.get() > I ? F : L
      };
    });
  }
  function w() {
    const E = i[0], R = y(f, E);
    return g(R, r, !1);
  }
  function b() {
    const E = t - i[0] - 1, R = y(u, E);
    return g(R, -r, !0);
  }
  function x() {
    return m.every(({
      index: E
    }) => {
      const R = u.filter((T) => T !== E);
      return v(R, t) <= 0.1;
    });
  }
  function C() {
    m.forEach((E) => {
      const {
        target: R,
        translate: T,
        slideLocation: D
      } = E, O = R();
      O !== D.get() && (T.to(O), D.set(O));
    });
  }
  function _() {
    m.forEach((E) => E.translate.clear());
  }
  return {
    canLoop: x,
    clear: _,
    loop: C,
    loopPoints: m
  };
}
function nO(e, t, r) {
  let n, o = !1;
  function a(c) {
    if (!r) return;
    function l(u) {
      for (const f of u)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    n = new MutationObserver((u) => {
      o || (ya(r) || r(c, u)) && l(u);
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
function oO(e, t, r, n) {
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
  function u() {
    s && s.disconnect(), c = !0;
  }
  function f(y) {
    return En(o).reduce((h, g) => {
      const w = parseInt(g), {
        isIntersecting: b
      } = o[w];
      return (y && b || !y && !b) && h.push(w), h;
    }, []);
  }
  function m(y = !0) {
    if (y && a) return a;
    if (!y && i) return i;
    const h = f(y);
    return y && (a = h), y || (i = h), h;
  }
  return {
    init: l,
    destroy: u,
    get: m
  };
}
function aO(e, t, r, n, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: c
  } = e, l = r[0] && o, u = y(), f = h(), m = r.map(i), v = g();
  function y() {
    if (!l) return 0;
    const b = r[0];
    return Me(t[s] - b[s]);
  }
  function h() {
    if (!l) return 0;
    const b = a.getComputedStyle(lt(n));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return r.map((b, x, C) => {
      const _ = !x, S = Vu(C, x);
      return _ ? m[x] + u : S ? m[x] + f : C[x + 1][s] - b[s];
    }).map(Me);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: v,
    startGap: u,
    endGap: f
  };
}
function iO(e, t, r, n, o, a, i, s, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: f
  } = e, m = Wu(r);
  function v(w, b) {
    return _n(w).filter((x) => x % b === 0).map((x) => w.slice(x, x + b));
  }
  function y(w) {
    return w.length ? _n(w).reduce((b, x, C) => {
      const _ = lt(b) || 0, S = _ === 0, E = x === Gn(w), R = o[l] - a[_][l], T = o[l] - a[x][u], D = !n && S ? f(i) : 0, O = !n && E ? f(s) : 0, F = Me(T - O - (R + D));
      return C && F > t + c && b.push(x), E && b.push(w.length), b;
    }, []).map((b, x, C) => {
      const _ = Math.max(C[x - 1] || 0);
      return w.slice(_, b);
    }) : [];
  }
  function h(w) {
    return m ? v(w, r) : y(w);
  }
  return {
    groupSlides: h
  };
}
function sO(e, t, r, n, o, a, i) {
  const {
    align: s,
    axis: c,
    direction: l,
    startIndex: u,
    loop: f,
    duration: m,
    dragFree: v,
    dragThreshold: y,
    inViewThreshold: h,
    slidesToScroll: g,
    skipSnaps: w,
    containScroll: b,
    watchResize: x,
    watchSlides: C,
    watchDrag: _,
    watchFocus: S
  } = a, E = 2, R = W1(), T = R.measure(t), D = r.map(R.measure), O = F1(c, l), F = O.measureSize(T), L = H1(F), N = $1(s, F), I = !f && !!b, k = f || !!b, {
    slideSizes: G,
    slideSizesWithGaps: B,
    startGap: $,
    endGap: J
  } = aO(O, T, D, r, k, o), ee = iO(O, F, g, f, T, D, $, J, E), {
    snaps: j,
    snapsAligned: Y
  } = Z1(O, N, T, D, ee), K = -lt(j) + lt(B), {
    snapsContained: U,
    scrollContainLimit: ne
  } = Y1(F, K, Y, b, E), W = I ? U : Y, {
    limit: Q
  } = U1(K, W, f), se = Zy(Gn(W), u, f), ae = se.clone(), oe = _n(r), H = ({
    dragHandler: Re,
    scrollBody: We,
    scrollBounds: ot,
    options: {
      loop: le
    }
  }) => {
    le || ot.constrain(Re.pointerDown()), We.seek();
  }, ue = ({
    scrollBody: Re,
    translate: We,
    location: ot,
    offsetLocation: le,
    previousLocation: Se,
    scrollLooper: fe,
    slideLooper: ht,
    dragHandler: Ge,
    animation: Sr,
    eventHandler: Ie,
    scrollBounds: Qe,
    options: {
      loop: he
    }
  }, so) => {
    const co = Re.settled(), Ja = !Qe.shouldConstrain(), Cr = he ? co : co && Ja;
    Cr && !Ge.pointerDown() && (Sr.stop(), Ie.emit("settle")), Cr || Ie.emit("scroll");
    const on = ot.get() * so + Se.get() * (1 - so);
    le.set(on), he && (fe.loop(Re.direction()), ht.loop()), We.to(le.get());
  }, z = L1(n, o, () => H(Ze), (Re) => ue(Ze, Re)), ge = 0.68, Ee = W[se.get()], Te = fn(Ee), Be = fn(Ee), $e = fn(Ee), Xe = fn(Ee), P = z1(Te, $e, Be, Xe, m, ge), X = J1(f, W, K, Q, Xe), Z = eO(z, se, ae, P, X, Xe, i), pe = X1(Q), De = Pn(), Ce = oO(t, r, i, h), {
    slideRegistry: de
  } = Q1(I, b, W, ne, ee, oe), ze = tO(e, r, de, Z, P, De, i, S), Ze = {
    ownerDocument: n,
    ownerWindow: o,
    eventHandler: i,
    containerRect: T,
    slideRects: D,
    animation: z,
    axis: O,
    dragHandler: q1(O, e, n, o, Xe, B1(O, o), Te, z, Z, P, X, se, i, L, v, y, w, ge, _),
    eventStore: De,
    percentOfView: L,
    index: se,
    indexPrevious: ae,
    limit: Q,
    location: Te,
    offsetLocation: $e,
    previousLocation: Be,
    options: a,
    resizeHandler: V1(t, i, o, r, O, x, R),
    scrollBody: P,
    scrollBounds: G1(Q, $e, Xe, P, L),
    scrollLooper: K1(K, Q, $e, [Te, $e, Be, Xe]),
    scrollProgress: pe,
    scrollSnapList: W.map(pe.get),
    scrollSnaps: W,
    scrollTarget: X,
    scrollTo: Z,
    slideLooper: rO(O, F, K, G, B, j, W, $e, r),
    slideFocus: ze,
    slidesHandler: nO(t, i, C),
    slidesInView: Ce,
    slideIndexes: oe,
    slideRegistry: de,
    slidesToScroll: ee,
    target: Xe,
    translate: Qy(O, t)
  };
  return Ze;
}
function cO() {
  let e = {}, t;
  function r(l) {
    t = l;
  }
  function n(l) {
    return e[l] || [];
  }
  function o(l) {
    return n(l).forEach((u) => u(t, l)), c;
  }
  function a(l, u) {
    return e[l] = n(l).concat([u]), c;
  }
  function i(l, u) {
    return e[l] = n(l).filter((f) => f !== u), c;
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
const lO = {
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
function uO(e) {
  function t(a, i) {
    return Xy(a, i || {});
  }
  function r(a) {
    const i = a.breakpoints || {}, s = En(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, l) => t(c, l), {});
    return t(a, s);
  }
  function n(a) {
    return a.map((i) => En(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function dO(e) {
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
function $o(e, t, r) {
  const n = e.ownerDocument, o = n.defaultView, a = uO(o), i = dO(a), s = Pn(), c = cO(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: f
  } = a, {
    on: m,
    off: v,
    emit: y
  } = c, h = O;
  let g = !1, w, b = l(lO, $o.globalOptions), x = l(b), C = [], _, S, E;
  function R() {
    const {
      container: oe,
      slides: H
    } = x;
    S = (Al(oe) ? e.querySelector(oe) : oe) || e.children[0];
    const z = Al(H) ? S.querySelectorAll(H) : H;
    E = [].slice.call(z || S.children);
  }
  function T(oe) {
    const H = sO(e, S, E, n, o, oe, c);
    if (oe.loop && !H.slideLooper.canLoop()) {
      const ue = Object.assign({}, oe, {
        loop: !1
      });
      return T(ue);
    }
    return H;
  }
  function D(oe, H) {
    g || (b = l(b, oe), x = u(b), C = H || C, R(), w = T(x), f([b, ...C.map(({
      options: ue
    }) => ue)]).forEach((ue) => s.add(ue, "change", O)), x.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(ae), w.eventHandler.init(ae), w.resizeHandler.init(ae), w.slidesHandler.init(ae), w.options.loop && w.slideLooper.loop(), S.offsetParent && E.length && w.dragHandler.init(ae), _ = i.init(ae, C)));
  }
  function O(oe, H) {
    const ue = ee();
    F(), D(l({
      startIndex: ue
    }, oe), H), c.emit("reInit");
  }
  function F() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), i.destroy(), s.clear();
  }
  function L() {
    g || (g = !0, s.clear(), F(), c.emit("destroy"), c.clear());
  }
  function N(oe, H, ue) {
    !x.active || g || (w.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : x.duration), w.scrollTo.index(oe, ue || 0));
  }
  function I(oe) {
    const H = w.index.add(1).get();
    N(H, oe, -1);
  }
  function k(oe) {
    const H = w.index.add(-1).get();
    N(H, oe, 1);
  }
  function G() {
    return w.index.add(1).get() !== ee();
  }
  function B() {
    return w.index.add(-1).get() !== ee();
  }
  function $() {
    return w.scrollSnapList;
  }
  function J() {
    return w.scrollProgress.get(w.location.get());
  }
  function ee() {
    return w.index.get();
  }
  function j() {
    return w.indexPrevious.get();
  }
  function Y() {
    return w.slidesInView.get();
  }
  function K() {
    return w.slidesInView.get(!1);
  }
  function U() {
    return _;
  }
  function ne() {
    return w;
  }
  function W() {
    return e;
  }
  function Q() {
    return S;
  }
  function se() {
    return E;
  }
  const ae = {
    canScrollNext: G,
    canScrollPrev: B,
    containerNode: Q,
    internalEngine: ne,
    destroy: L,
    off: v,
    on: m,
    emit: y,
    plugins: U,
    previousScrollSnap: j,
    reInit: h,
    rootNode: W,
    scrollNext: I,
    scrollPrev: k,
    scrollProgress: J,
    scrollSnapList: $,
    scrollTo: N,
    selectedScrollSnap: ee,
    slideNodes: se,
    slidesInView: Y,
    slidesNotInView: K
  };
  return D(t, r), setTimeout(() => c.emit("init"), 0), ae;
}
$o.globalOptions = void 0;
function zu(e = {}, t = []) {
  const r = Ot(e), n = Ot(t), [o, a] = Yt(), [i, s] = Yt(), c = He(() => {
    o && o.reInit(r.current, n.current);
  }, [o]);
  return At(() => {
    Bu(r.current, e) || (r.current = e, c());
  }, [e, c]), At(() => {
    j1(n.current, t) || (n.current = t, c());
  }, [t, c]), At(() => {
    if (D1() && i) {
      $o.globalOptions = zu.globalOptions;
      const l = $o(i, r.current, n.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
zu.globalOptions = void 0;
const fO = "(##) ####-####", pO = "(##) #####-####", mO = "#####-###", hO = "###.###.###-##", vO = "##.###.###/####-##", gO = "###########", yO = "##.###.###-#", bO = "AAA#A##", wO = "###########", xO = "##############", Jy = (e, t) => {
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
}, PW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: pO,
  CNH_MASK: gO,
  CNPJ_MASK: vO,
  CPF_MASK: hO,
  PHONE_MASK: fO,
  PLATE_MASK: bO,
  RENAVAM_MASK: wO,
  RG_MASK: yO,
  RNTRC_MASK: xO,
  ZIP_CODE_MASK: mO,
  formatMask: Jy
}, Symbol.toStringTag, { value: "Module" })), TW = [
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
], eb = d.createContext(null);
function ba() {
  const e = d.useContext(eb);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const SO = d.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: n,
    className: o,
    children: a,
    ...i
  }, s) => {
    const [c, l] = zu(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      n
    ), [u, f] = d.useState(!1), [m, v] = d.useState(!1), y = d.useCallback((b) => {
      b && (f(b.canScrollPrev()), v(b.canScrollNext()));
    }, []), h = d.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = d.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), w = d.useCallback(
      (b) => {
        b.key === "ArrowLeft" ? (b.preventDefault(), h()) : b.key === "ArrowRight" && (b.preventDefault(), g());
      },
      [h, g]
    );
    return d.useEffect(() => {
      !l || !r || r(l);
    }, [l, r]), d.useEffect(() => {
      if (l)
        return y(l), l.on("reInit", y), l.on("select", y), () => {
          l == null || l.off("select", y);
        };
    }, [l, y]), /* @__PURE__ */ p.jsx(
      eb.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: m
        },
        children: /* @__PURE__ */ p.jsx(
          "div",
          {
            ref: s,
            onKeyDownCapture: w,
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
SO.displayName = "Carousel";
const CO = d.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: n, orientation: o } = ba();
  return /* @__PURE__ */ p.jsx("div", { ref: n, className: "overflow-hidden", children: /* @__PURE__ */ p.jsx(
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
CO.displayName = "CarouselContent";
const _O = d.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = ba();
  return /* @__PURE__ */ p.jsx(
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
_O.displayName = "CarouselItem";
const EO = d.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = ba();
  return /* @__PURE__ */ p.jsxs(
    Zr,
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
        /* @__PURE__ */ p.jsx(zE, { className: "h-4 w-4" }),
        /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
EO.displayName = "CarouselPrevious";
const PO = d.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = ba();
  return /* @__PURE__ */ p.jsxs(
    Zr,
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
        /* @__PURE__ */ p.jsx(YE, { className: "h-4 w-4" }),
        /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
PO.displayName = "CarouselNext";
var li, zf;
function pt() {
  if (zf) return li;
  zf = 1;
  var e = Array.isArray;
  return li = e, li;
}
var ui, Gf;
function tb() {
  if (Gf) return ui;
  Gf = 1;
  var e = typeof lo == "object" && lo && lo.Object === Object && lo;
  return ui = e, ui;
}
var di, Yf;
function Et() {
  if (Yf) return di;
  Yf = 1;
  var e = tb(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return di = r, di;
}
var fi, Uf;
function Yn() {
  if (Uf) return fi;
  Uf = 1;
  var e = Et(), t = e.Symbol;
  return fi = t, fi;
}
var pi, Kf;
function TO() {
  if (Kf) return pi;
  Kf = 1;
  var e = Yn(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = e ? e.toStringTag : void 0;
  function a(i) {
    var s = r.call(i, o), c = i[o];
    try {
      i[o] = void 0;
      var l = !0;
    } catch {
    }
    var u = n.call(i);
    return l && (s ? i[o] = c : delete i[o]), u;
  }
  return pi = a, pi;
}
var mi, Xf;
function RO() {
  if (Xf) return mi;
  Xf = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return mi = r, mi;
}
var hi, Zf;
function yr() {
  if (Zf) return hi;
  Zf = 1;
  var e = Yn(), t = TO(), r = RO(), n = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : n : a && a in Object(s) ? t(s) : r(s);
  }
  return hi = i, hi;
}
var vi, Qf;
function br() {
  if (Qf) return vi;
  Qf = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return vi = e, vi;
}
var gi, Jf;
function Un() {
  if (Jf) return gi;
  Jf = 1;
  var e = yr(), t = br(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && e(o) == r;
  }
  return gi = n, gi;
}
var yi, ep;
function Gu() {
  if (ep) return yi;
  ep = 1;
  var e = pt(), t = Un(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return yi = o, yi;
}
var bi, tp;
function Qt() {
  if (tp) return bi;
  tp = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return bi = e, bi;
}
var wi, rp;
function Yu() {
  if (rp) return wi;
  rp = 1;
  var e = yr(), t = Qt(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == o || c == r || c == a;
  }
  return wi = i, wi;
}
var xi, np;
function NO() {
  if (np) return xi;
  np = 1;
  var e = Et(), t = e["__core-js_shared__"];
  return xi = t, xi;
}
var Si, op;
function MO() {
  if (op) return Si;
  op = 1;
  var e = NO(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Si = r, Si;
}
var Ci, ap;
function rb() {
  if (ap) return Ci;
  ap = 1;
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
  return Ci = r, Ci;
}
var _i, ip;
function OO() {
  if (ip) return _i;
  ip = 1;
  var e = Yu(), t = MO(), r = Qt(), n = rb(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, u = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(m) {
    if (!r(m) || t(m))
      return !1;
    var v = e(m) ? u : a;
    return v.test(n(m));
  }
  return _i = f, _i;
}
var Ei, sp;
function AO() {
  if (sp) return Ei;
  sp = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return Ei = e, Ei;
}
var Pi, cp;
function wr() {
  if (cp) return Pi;
  cp = 1;
  var e = OO(), t = AO();
  function r(n, o) {
    var a = t(n, o);
    return e(a) ? a : void 0;
  }
  return Pi = r, Pi;
}
var Ti, lp;
function wa() {
  if (lp) return Ti;
  lp = 1;
  var e = wr(), t = e(Object, "create");
  return Ti = t, Ti;
}
var Ri, up;
function DO() {
  if (up) return Ri;
  up = 1;
  var e = wa();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ri = t, Ri;
}
var Ni, dp;
function jO() {
  if (dp) return Ni;
  dp = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Ni = e, Ni;
}
var Mi, fp;
function kO() {
  if (fp) return Mi;
  fp = 1;
  var e = wa(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return Mi = o, Mi;
}
var Oi, pp;
function IO() {
  if (pp) return Oi;
  pp = 1;
  var e = wa(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : r.call(a, o);
  }
  return Oi = n, Oi;
}
var Ai, mp;
function $O() {
  if (mp) return Ai;
  mp = 1;
  var e = wa(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && o === void 0 ? t : o, this;
  }
  return Ai = r, Ai;
}
var Di, hp;
function LO() {
  if (hp) return Di;
  hp = 1;
  var e = DO(), t = jO(), r = kO(), n = IO(), o = $O();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Di = a, Di;
}
var ji, vp;
function FO() {
  if (vp) return ji;
  vp = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ji = e, ji;
}
var ki, gp;
function Uu() {
  if (gp) return ki;
  gp = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ki = e, ki;
}
var Ii, yp;
function xa() {
  if (yp) return Ii;
  yp = 1;
  var e = Uu();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (e(r[o][0], n))
        return o;
    return -1;
  }
  return Ii = t, Ii;
}
var $i, bp;
function qO() {
  if (bp) return $i;
  bp = 1;
  var e = xa(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return $i = n, $i;
}
var Li, wp;
function BO() {
  if (wp) return Li;
  wp = 1;
  var e = xa();
  function t(r) {
    var n = this.__data__, o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return Li = t, Li;
}
var Fi, xp;
function WO() {
  if (xp) return Fi;
  xp = 1;
  var e = xa();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Fi = t, Fi;
}
var qi, Sp;
function HO() {
  if (Sp) return qi;
  Sp = 1;
  var e = xa();
  function t(r, n) {
    var o = this.__data__, a = e(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return qi = t, qi;
}
var Bi, Cp;
function Sa() {
  if (Cp) return Bi;
  Cp = 1;
  var e = FO(), t = qO(), r = BO(), n = WO(), o = HO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Bi = a, Bi;
}
var Wi, _p;
function Ku() {
  if (_p) return Wi;
  _p = 1;
  var e = wr(), t = Et(), r = e(t, "Map");
  return Wi = r, Wi;
}
var Hi, Ep;
function VO() {
  if (Ep) return Hi;
  Ep = 1;
  var e = LO(), t = Sa(), r = Ku();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Hi = n, Hi;
}
var Vi, Pp;
function zO() {
  if (Pp) return Vi;
  Pp = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Vi = e, Vi;
}
var zi, Tp;
function Ca() {
  if (Tp) return zi;
  Tp = 1;
  var e = zO();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return zi = t, zi;
}
var Gi, Rp;
function GO() {
  if (Rp) return Gi;
  Rp = 1;
  var e = Ca();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Gi = t, Gi;
}
var Yi, Np;
function YO() {
  if (Np) return Yi;
  Np = 1;
  var e = Ca();
  function t(r) {
    return e(this, r).get(r);
  }
  return Yi = t, Yi;
}
var Ui, Mp;
function UO() {
  if (Mp) return Ui;
  Mp = 1;
  var e = Ca();
  function t(r) {
    return e(this, r).has(r);
  }
  return Ui = t, Ui;
}
var Ki, Op;
function KO() {
  if (Op) return Ki;
  Op = 1;
  var e = Ca();
  function t(r, n) {
    var o = e(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return Ki = t, Ki;
}
var Xi, Ap;
function Xu() {
  if (Ap) return Xi;
  Ap = 1;
  var e = VO(), t = GO(), r = YO(), n = UO(), o = KO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Xi = a, Xi;
}
var Zi, Dp;
function XO() {
  if (Dp) return Zi;
  Dp = 1;
  var e = Xu(), t = "Expected a function";
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
  return r.Cache = e, Zi = r, Zi;
}
var Qi, jp;
function ZO() {
  if (jp) return Qi;
  jp = 1;
  var e = XO(), t = 500;
  function r(n) {
    var o = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return Qi = r, Qi;
}
var Ji, kp;
function QO() {
  if (kp) return Ji;
  kp = 1;
  var e = ZO(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(r, "$1") : s || i);
    }), a;
  });
  return Ji = n, Ji;
}
var es, Ip;
function nb() {
  if (Ip) return es;
  Ip = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return es = e, es;
}
var ts, $p;
function JO() {
  if ($p) return ts;
  $p = 1;
  var e = Yn(), t = nb(), r = pt(), n = Un(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
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
  return ts = i, ts;
}
var rs, Lp;
function ob() {
  if (Lp) return rs;
  Lp = 1;
  var e = JO();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return rs = t, rs;
}
var ns, Fp;
function ab() {
  if (Fp) return ns;
  Fp = 1;
  var e = pt(), t = Gu(), r = QO(), n = ob();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return ns = o, ns;
}
var os, qp;
function _a() {
  if (qp) return os;
  qp = 1;
  var e = Un();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return os = t, os;
}
var as, Bp;
function Zu() {
  if (Bp) return as;
  Bp = 1;
  var e = ab(), t = _a();
  function r(n, o) {
    o = e(o, n);
    for (var a = 0, i = o.length; n != null && a < i; )
      n = n[t(o[a++])];
    return a && a == i ? n : void 0;
  }
  return as = r, as;
}
var is, Wp;
function ib() {
  if (Wp) return is;
  Wp = 1;
  var e = Zu();
  function t(r, n, o) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? o : a;
  }
  return is = t, is;
}
ib();
var ss, Hp;
function eA() {
  if (Hp) return ss;
  Hp = 1;
  function e(t) {
    return t == null;
  }
  return ss = e, ss;
}
var tA = eA();
const rA = /* @__PURE__ */ Ct(tA);
var cs, Vp;
function nA() {
  if (Vp) return cs;
  Vp = 1;
  var e = yr(), t = pt(), r = br(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return cs = o, cs;
}
var oA = nA();
const sb = /* @__PURE__ */ Ct(oA);
var aA = Yu();
const Lo = /* @__PURE__ */ Ct(aA);
var iA = Qt();
const cb = /* @__PURE__ */ Ct(iA);
var go = { exports: {} }, ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zp;
function sA() {
  if (zp) return ye;
  zp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case i:
                case c:
                case m:
                case f:
                case a:
                  return g;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return ye.ContextConsumer = i, ye.ContextProvider = a, ye.Element = e, ye.ForwardRef = c, ye.Fragment = r, ye.Lazy = m, ye.Memo = f, ye.Portal = t, ye.Profiler = o, ye.StrictMode = n, ye.Suspense = l, ye.SuspenseList = u, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(g) {
    return h(g) === i;
  }, ye.isContextProvider = function(g) {
    return h(g) === a;
  }, ye.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ye.isForwardRef = function(g) {
    return h(g) === c;
  }, ye.isFragment = function(g) {
    return h(g) === r;
  }, ye.isLazy = function(g) {
    return h(g) === m;
  }, ye.isMemo = function(g) {
    return h(g) === f;
  }, ye.isPortal = function(g) {
    return h(g) === t;
  }, ye.isProfiler = function(g) {
    return h(g) === o;
  }, ye.isStrictMode = function(g) {
    return h(g) === n;
  }, ye.isSuspense = function(g) {
    return h(g) === l;
  }, ye.isSuspenseList = function(g) {
    return h(g) === u;
  }, ye.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === l || g === u || g === v || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === f || g.$$typeof === a || g.$$typeof === i || g.$$typeof === c || g.$$typeof === y || g.getModuleId !== void 0);
  }, ye.typeOf = h, ye;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gp;
function cA() {
  return Gp || (Gp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, h = !1, g = !1, w = !1, b = !1, x;
    x = Symbol.for("react.module.reference");
    function C(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === o || b || z === n || z === l || z === u || w || z === v || y || h || g || typeof z == "object" && z !== null && (z.$$typeof === m || z.$$typeof === f || z.$$typeof === a || z.$$typeof === i || z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === x || z.getModuleId !== void 0));
    }
    function _(z) {
      if (typeof z == "object" && z !== null) {
        var ge = z.$$typeof;
        switch (ge) {
          case e:
            var Ee = z.type;
            switch (Ee) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return Ee;
              default:
                var Te = Ee && Ee.$$typeof;
                switch (Te) {
                  case s:
                  case i:
                  case c:
                  case m:
                  case f:
                  case a:
                    return Te;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var S = i, E = a, R = e, T = c, D = r, O = m, F = f, L = t, N = o, I = n, k = l, G = u, B = !1, $ = !1;
    function J(z) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(z) {
      return $ || ($ = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(z) {
      return _(z) === i;
    }
    function Y(z) {
      return _(z) === a;
    }
    function K(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function U(z) {
      return _(z) === c;
    }
    function ne(z) {
      return _(z) === r;
    }
    function W(z) {
      return _(z) === m;
    }
    function Q(z) {
      return _(z) === f;
    }
    function se(z) {
      return _(z) === t;
    }
    function ae(z) {
      return _(z) === o;
    }
    function oe(z) {
      return _(z) === n;
    }
    function H(z) {
      return _(z) === l;
    }
    function ue(z) {
      return _(z) === u;
    }
    be.ContextConsumer = S, be.ContextProvider = E, be.Element = R, be.ForwardRef = T, be.Fragment = D, be.Lazy = O, be.Memo = F, be.Portal = L, be.Profiler = N, be.StrictMode = I, be.Suspense = k, be.SuspenseList = G, be.isAsyncMode = J, be.isConcurrentMode = ee, be.isContextConsumer = j, be.isContextProvider = Y, be.isElement = K, be.isForwardRef = U, be.isFragment = ne, be.isLazy = W, be.isMemo = Q, be.isPortal = se, be.isProfiler = ae, be.isStrictMode = oe, be.isSuspense = H, be.isSuspenseList = ue, be.isValidElementType = C, be.typeOf = _;
  }()), be;
}
var Yp;
function lA() {
  return Yp || (Yp = 1, process.env.NODE_ENV === "production" ? go.exports = sA() : go.exports = cA()), go.exports;
}
lA();
var ls, Up;
function lb() {
  if (Up) return ls;
  Up = 1;
  var e = yr(), t = br(), r = "[object Number]";
  function n(o) {
    return typeof o == "number" || t(o) && e(o) == r;
  }
  return ls = n, ls;
}
var us, Kp;
function uA() {
  if (Kp) return us;
  Kp = 1;
  var e = lb();
  function t(r) {
    return e(r) && r != +r;
  }
  return us = t, us;
}
var dA = uA();
const fA = /* @__PURE__ */ Ct(dA);
var pA = lb();
const mA = /* @__PURE__ */ Ct(pA);
var yo = function(t) {
  return sb(t) && t.indexOf("%") === t.length - 1;
}, st = function(t) {
  return mA(t) && !fA(t);
}, Fo = function(t) {
  return st(t) || sb(t);
};
function jl(e) {
  "@babel/helpers - typeof";
  return jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jl(e);
}
var hA = ["viewBox", "children"], vA = [
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
], Xp = ["points", "pathLength"], ds = {
  svg: hA,
  polygon: Xp,
  polyline: Xp
}, ub = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], gA = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, yA = function(t, r, n) {
  if (!cb(t) || jl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    ub.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = gA(i, r, n));
  }), o;
}, bA = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, wA = function(t, r, n, o) {
  var a, i = (a = ds == null ? void 0 : ds[o]) !== null && a !== void 0 ? a : [];
  return !Lo(t) && (o && i.includes(r) || vA.includes(r)) || ub.includes(r);
}, db = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ rE(t) && (o = t.props), !cb(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    wA((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, xA = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function kl() {
  return kl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kl.apply(this, arguments);
}
function SA(e, t) {
  if (e == null) return {};
  var r = CA(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _A(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, l = SA(e, xA), u = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = Dt("recharts-surface", a);
  return /* @__PURE__ */ A.createElement("svg", kl({}, db(l, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ A.createElement("title", null, s), /* @__PURE__ */ A.createElement("desc", null, c), t);
}
var EA = process.env.NODE_ENV !== "production", Ro = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (EA && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, fs, Zp;
function PA() {
  if (Zp) return fs;
  Zp = 1;
  function e(t, r, n) {
    var o = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + r];
    return i;
  }
  return fs = e, fs;
}
var ps, Qp;
function TA() {
  if (Qp) return ps;
  Qp = 1;
  var e = PA();
  function t(r, n, o) {
    var a = r.length;
    return o = o === void 0 ? a : o, !n && o >= a ? r : e(r, n, o);
  }
  return ps = t, ps;
}
var ms, Jp;
function fb() {
  if (Jp) return ms;
  Jp = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function c(l) {
    return s.test(l);
  }
  return ms = c, ms;
}
var hs, em;
function RA() {
  if (em) return hs;
  em = 1;
  function e(t) {
    return t.split("");
  }
  return hs = e, hs;
}
var vs, tm;
function NA() {
  if (tm) return vs;
  tm = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", c = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + c + ")", u = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", y = l + "?", h = "[" + a + "]?", g = "(?:" + v + "(?:" + [u, f, m].join("|") + ")" + h + y + ")*", w = h + y + g, b = "(?:" + [u + s + "?", s, f, m, i].join("|") + ")", x = RegExp(c + "(?=" + c + ")|" + b + w, "g");
  function C(_) {
    return _.match(x) || [];
  }
  return vs = C, vs;
}
var gs, rm;
function MA() {
  if (rm) return gs;
  rm = 1;
  var e = RA(), t = fb(), r = NA();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return gs = n, gs;
}
var ys, nm;
function OA() {
  if (nm) return ys;
  nm = 1;
  var e = TA(), t = fb(), r = MA(), n = ob();
  function o(a) {
    return function(i) {
      i = n(i);
      var s = t(i) ? r(i) : void 0, c = s ? s[0] : i.charAt(0), l = s ? e(s, 1).join("") : i.slice(1);
      return c[a]() + l;
    };
  }
  return ys = o, ys;
}
var bs, om;
function AA() {
  if (om) return bs;
  om = 1;
  var e = OA(), t = e("toUpperCase");
  return bs = t, bs;
}
var DA = AA();
const pb = /* @__PURE__ */ Ct(DA);
function bo(e) {
  return function() {
    return e;
  };
}
const mb = Math.cos, qo = Math.sin, mt = Math.sqrt, Bo = Math.PI, Ea = 2 * Bo, Il = Math.PI, $l = 2 * Il, sr = 1e-6, jA = $l - sr;
function hb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function kA(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return hb;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class IA {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? hb : kA(t);
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
    let i = this._x1, s = this._y1, c = n - t, l = o - r, u = i - t, f = s - r, m = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > sr) if (!(Math.abs(f * c - l * u) > sr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - i, y = o - s, h = c * c + l * l, g = v * v + y * y, w = Math.sqrt(h), b = Math.sqrt(m), x = a * Math.tan((Il - Math.acos((h + m - g) / (2 * w * b))) / 2), C = x / b, _ = x / w;
      Math.abs(C - 1) > sr && this._append`L${t + C * u},${r + C * f}`, this._append`A${a},${a},0,0,${+(f * v > u * y)},${this._x1 = t + _ * c},${this._y1 = r + _ * l}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), l = t + s, u = r + c, f = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${u}` : (Math.abs(this._x1 - l) > sr || Math.abs(this._y1 - u) > sr) && this._append`L${l},${u}`, n && (m < 0 && (m = m % $l + $l), m > jA ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = l},${this._y1 = u}` : m > sr && this._append`A${n},${n},0,${+(m >= Il)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function $A(e) {
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
  }, () => new IA(t);
}
const Qu = {
  draw(e, t) {
    const r = mt(t / Bo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ea);
  }
}, LA = {
  draw(e, t) {
    const r = mt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, vb = mt(1 / 3), FA = vb * 2, qA = {
  draw(e, t) {
    const r = mt(t / FA), n = r * vb;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, BA = {
  draw(e, t) {
    const r = mt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, WA = 0.8908130915292852, gb = qo(Bo / 10) / qo(7 * Bo / 10), HA = qo(Ea / 10) * gb, VA = -mb(Ea / 10) * gb, zA = {
  draw(e, t) {
    const r = mt(t * WA), n = HA * r, o = VA * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = Ea * a / 5, s = mb(i), c = qo(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, ws = mt(3), GA = {
  draw(e, t) {
    const r = -mt(t / (ws * 3));
    e.moveTo(0, r * 2), e.lineTo(-ws * r, -r), e.lineTo(ws * r, -r), e.closePath();
  }
}, Je = -0.5, et = mt(3) / 2, Ll = 1 / mt(12), YA = (Ll / 2 + 1) * 3, UA = {
  draw(e, t) {
    const r = mt(t / YA), n = r / 2, o = r * Ll, a = n, i = r * Ll + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(Je * n - et * o, et * n + Je * o), e.lineTo(Je * a - et * i, et * a + Je * i), e.lineTo(Je * s - et * c, et * s + Je * c), e.lineTo(Je * n + et * o, Je * o - et * n), e.lineTo(Je * a + et * i, Je * i - et * a), e.lineTo(Je * s + et * c, Je * c - et * s), e.closePath();
  }
};
function KA(e, t) {
  let r = null, n = $A(o);
  e = typeof e == "function" ? e : bo(e || Qu), t = typeof t == "function" ? t : bo(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : bo(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : bo(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function Tn(e) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e);
}
var XA = ["type", "size", "sizeType"];
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
function am(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function im(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? am(Object(r), !0).forEach(function(n) {
      ZA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : am(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZA(e, t, r) {
  return t = QA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QA(e) {
  var t = JA(e, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function JA(e, t) {
  if (Tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eD(e, t) {
  if (e == null) return {};
  var r = tD(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var yb = {
  symbolCircle: Qu,
  symbolCross: LA,
  symbolDiamond: qA,
  symbolSquare: BA,
  symbolStar: zA,
  symbolTriangle: GA,
  symbolWye: UA
}, rD = Math.PI / 180, nD = function(t) {
  var r = "symbol".concat(pb(t));
  return yb[r] || Qu;
}, oD = function(t, r, n) {
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
      var o = 18 * rD;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, aD = function(t, r) {
  yb["symbol".concat(pb(t))] = r;
}, bb = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = eD(t, XA), l = im(im({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), u = function() {
    var g = nD(n), w = KA().type(g).size(oD(a, s, n));
    return w();
  }, f = l.className, m = l.cx, v = l.cy, y = db(l, !0);
  return m === +m && v === +v && a === +a ? /* @__PURE__ */ A.createElement("path", Fl({}, y, {
    className: Dt("recharts-symbols", f),
    transform: "translate(".concat(m, ", ").concat(v, ")"),
    d: u()
  })) : null;
};
bb.registerSymbol = aD;
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function ql() {
  return ql = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ql.apply(this, arguments);
}
function sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sm(Object(r), !0).forEach(function(n) {
      Rn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xb(n.key), n);
  }
}
function lD(e, t, r) {
  return t && cD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function uD(e, t, r) {
  return t = Wo(t), dD(e, wb() ? Reflect.construct(t, r || [], Wo(e).constructor) : t.apply(e, r));
}
function dD(e, t) {
  if (t && ($r(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fD(e);
}
function fD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wb = function() {
    return !!e;
  })();
}
function Wo(e) {
  return Wo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wo(e);
}
function pD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bl(e, t);
}
function Bl(e, t) {
  return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Bl(e, t);
}
function Rn(e, t, r) {
  return t = xb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xb(e) {
  var t = mD(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function mD(e, t) {
  if ($r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var at = 32, Ju = /* @__PURE__ */ function(e) {
  function t() {
    return sD(this, t), uD(this, t, arguments);
  }
  return pD(t, e), lD(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var o = this.props.inactiveColor, a = at / 2, i = at / 6, s = at / 3, c = n.inactive ? o : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ A.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: at,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ A.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(at, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ A.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(at / 8, "h").concat(at, "v").concat(at * 3 / 4, "h").concat(-32, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ A.isValidElement(n.legendIcon)) {
          var l = iD({}, n);
          return delete l.legendIcon, /* @__PURE__ */ A.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ A.createElement(bb, {
          fill: c,
          cx: a,
          cy: a,
          size: at,
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
      var n = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, c = o.formatter, l = o.inactiveColor, u = {
        x: 0,
        y: 0,
        width: at,
        height: at
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(v, y) {
        var h = v.formatter || c, g = Dt(Rn(Rn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", v.inactive));
        if (v.type === "none")
          return null;
        var w = Lo(v.value) ? null : v.value;
        Ro(
          !Lo(v.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var b = v.inactive ? l : v.color;
        return /* @__PURE__ */ A.createElement("li", ql({
          className: g,
          style: f,
          key: "legend-item-".concat(y)
        }, yA(n.props, v, y)), /* @__PURE__ */ A.createElement(_A, {
          width: i,
          height: i,
          viewBox: u,
          style: m
        }, n.renderIcon(v)), /* @__PURE__ */ A.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: b
          }
        }, h ? h(w, v, y) : w));
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
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(ia);
Rn(Ju, "displayName", "Legend");
Rn(Ju, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var xs, cm;
function hD() {
  if (cm) return xs;
  cm = 1;
  var e = Sa();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return xs = t, xs;
}
var Ss, lm;
function vD() {
  if (lm) return Ss;
  lm = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Ss = e, Ss;
}
var Cs, um;
function gD() {
  if (um) return Cs;
  um = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Cs = e, Cs;
}
var _s, dm;
function yD() {
  if (dm) return _s;
  dm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return _s = e, _s;
}
var Es, fm;
function bD() {
  if (fm) return Es;
  fm = 1;
  var e = Sa(), t = Ku(), r = Xu(), n = 200;
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
  return Es = o, Es;
}
var Ps, pm;
function Sb() {
  if (pm) return Ps;
  pm = 1;
  var e = Sa(), t = hD(), r = vD(), n = gD(), o = yD(), a = bD();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = r, i.prototype.get = n, i.prototype.has = o, i.prototype.set = a, Ps = i, Ps;
}
var Ts, mm;
function wD() {
  if (mm) return Ts;
  mm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ts = t, Ts;
}
var Rs, hm;
function xD() {
  if (hm) return Rs;
  hm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Rs = e, Rs;
}
var Ns, vm;
function Cb() {
  if (vm) return Ns;
  vm = 1;
  var e = Xu(), t = wD(), r = xD();
  function n(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Ns = n, Ns;
}
var Ms, gm;
function SD() {
  if (gm) return Ms;
  gm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Ms = e, Ms;
}
var Os, ym;
function _b() {
  if (ym) return Os;
  ym = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Os = e, Os;
}
var As, bm;
function Eb() {
  if (bm) return As;
  bm = 1;
  var e = Cb(), t = SD(), r = _b(), n = 1, o = 2;
  function a(i, s, c, l, u, f) {
    var m = c & n, v = i.length, y = s.length;
    if (v != y && !(m && y > v))
      return !1;
    var h = f.get(i), g = f.get(s);
    if (h && g)
      return h == s && g == i;
    var w = -1, b = !0, x = c & o ? new e() : void 0;
    for (f.set(i, s), f.set(s, i); ++w < v; ) {
      var C = i[w], _ = s[w];
      if (l)
        var S = m ? l(_, C, w, s, i, f) : l(C, _, w, i, s, f);
      if (S !== void 0) {
        if (S)
          continue;
        b = !1;
        break;
      }
      if (x) {
        if (!t(s, function(E, R) {
          if (!r(x, R) && (C === E || u(C, E, c, l, f)))
            return x.push(R);
        })) {
          b = !1;
          break;
        }
      } else if (!(C === _ || u(C, _, c, l, f))) {
        b = !1;
        break;
      }
    }
    return f.delete(i), f.delete(s), b;
  }
  return As = a, As;
}
var Ds, wm;
function CD() {
  if (wm) return Ds;
  wm = 1;
  var e = Et(), t = e.Uint8Array;
  return Ds = t, Ds;
}
var js, xm;
function _D() {
  if (xm) return js;
  xm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return js = e, js;
}
var ks, Sm;
function ed() {
  if (Sm) return ks;
  Sm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return ks = e, ks;
}
var Is, Cm;
function ED() {
  if (Cm) return Is;
  Cm = 1;
  var e = Yn(), t = CD(), r = Uu(), n = Eb(), o = _D(), a = ed(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Map]", m = "[object Number]", v = "[object RegExp]", y = "[object Set]", h = "[object String]", g = "[object Symbol]", w = "[object ArrayBuffer]", b = "[object DataView]", x = e ? e.prototype : void 0, C = x ? x.valueOf : void 0;
  function _(S, E, R, T, D, O, F) {
    switch (R) {
      case b:
        if (S.byteLength != E.byteLength || S.byteOffset != E.byteOffset)
          return !1;
        S = S.buffer, E = E.buffer;
      case w:
        return !(S.byteLength != E.byteLength || !O(new t(S), new t(E)));
      case c:
      case l:
      case m:
        return r(+S, +E);
      case u:
        return S.name == E.name && S.message == E.message;
      case v:
      case h:
        return S == E + "";
      case f:
        var L = o;
      case y:
        var N = T & i;
        if (L || (L = a), S.size != E.size && !N)
          return !1;
        var I = F.get(S);
        if (I)
          return I == E;
        T |= s, F.set(S, E);
        var k = n(L(S), L(E), T, D, O, F);
        return F.delete(S), k;
      case g:
        if (C)
          return C.call(S) == C.call(E);
    }
    return !1;
  }
  return Is = _, Is;
}
var $s, _m;
function Pb() {
  if (_m) return $s;
  _m = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return $s = e, $s;
}
var Ls, Em;
function PD() {
  if (Em) return Ls;
  Em = 1;
  var e = Pb(), t = pt();
  function r(n, o, a) {
    var i = o(n);
    return t(n) ? i : e(i, a(n));
  }
  return Ls = r, Ls;
}
var Fs, Pm;
function TD() {
  if (Pm) return Fs;
  Pm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++n < o; ) {
      var s = t[n];
      r(s, n, t) && (i[a++] = s);
    }
    return i;
  }
  return Fs = e, Fs;
}
var qs, Tm;
function RD() {
  if (Tm) return qs;
  Tm = 1;
  function e() {
    return [];
  }
  return qs = e, qs;
}
var Bs, Rm;
function ND() {
  if (Rm) return Bs;
  Rm = 1;
  var e = TD(), t = RD(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return n.call(i, s);
    }));
  } : t;
  return Bs = a, Bs;
}
var Ws, Nm;
function MD() {
  if (Nm) return Ws;
  Nm = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return Ws = e, Ws;
}
var Hs, Mm;
function OD() {
  if (Mm) return Hs;
  Mm = 1;
  var e = yr(), t = br(), r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return Hs = n, Hs;
}
var Vs, Om;
function td() {
  if (Om) return Vs;
  Om = 1;
  var e = OD(), t = br(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !o.call(i, "callee");
  };
  return Vs = a, Vs;
}
var pn = { exports: {} }, zs, Am;
function AD() {
  if (Am) return zs;
  Am = 1;
  function e() {
    return !1;
  }
  return zs = e, zs;
}
pn.exports;
var Dm;
function Tb() {
  return Dm || (Dm = 1, function(e, t) {
    var r = Et(), n = AD(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
    e.exports = l;
  }(pn, pn.exports)), pn.exports;
}
var Gs, jm;
function rd() {
  if (jm) return Gs;
  jm = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return Gs = r, Gs;
}
var Ys, km;
function nd() {
  if (km) return Ys;
  km = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Ys = t, Ys;
}
var Us, Im;
function DD() {
  if (Im) return Us;
  Im = 1;
  var e = yr(), t = nd(), r = br(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", u = "[object Number]", f = "[object Object]", m = "[object RegExp]", v = "[object Set]", y = "[object String]", h = "[object WeakMap]", g = "[object ArrayBuffer]", w = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", C = "[object Int8Array]", _ = "[object Int16Array]", S = "[object Int32Array]", E = "[object Uint8Array]", R = "[object Uint8ClampedArray]", T = "[object Uint16Array]", D = "[object Uint32Array]", O = {};
  O[b] = O[x] = O[C] = O[_] = O[S] = O[E] = O[R] = O[T] = O[D] = !0, O[n] = O[o] = O[g] = O[a] = O[w] = O[i] = O[s] = O[c] = O[l] = O[u] = O[f] = O[m] = O[v] = O[y] = O[h] = !1;
  function F(L) {
    return r(L) && t(L.length) && !!O[e(L)];
  }
  return Us = F, Us;
}
var Ks, $m;
function Rb() {
  if ($m) return Ks;
  $m = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Ks = e, Ks;
}
var mn = { exports: {} };
mn.exports;
var Lm;
function jD() {
  return Lm || (Lm = 1, function(e, t) {
    var r = tb(), n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(mn, mn.exports)), mn.exports;
}
var Xs, Fm;
function Nb() {
  if (Fm) return Xs;
  Fm = 1;
  var e = DD(), t = Rb(), r = jD(), n = r && r.isTypedArray, o = n ? t(n) : e;
  return Xs = o, Xs;
}
var Zs, qm;
function kD() {
  if (qm) return Zs;
  qm = 1;
  var e = MD(), t = td(), r = pt(), n = Tb(), o = rd(), a = Nb(), i = Object.prototype, s = i.hasOwnProperty;
  function c(l, u) {
    var f = r(l), m = !f && t(l), v = !f && !m && n(l), y = !f && !m && !v && a(l), h = f || m || v || y, g = h ? e(l.length, String) : [], w = g.length;
    for (var b in l)
      (u || s.call(l, b)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      o(b, w))) && g.push(b);
    return g;
  }
  return Zs = c, Zs;
}
var Qs, Bm;
function ID() {
  if (Bm) return Qs;
  Bm = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || e;
    return r === o;
  }
  return Qs = t, Qs;
}
var Js, Wm;
function $D() {
  if (Wm) return Js;
  Wm = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Js = e, Js;
}
var ec, Hm;
function LD() {
  if (Hm) return ec;
  Hm = 1;
  var e = $D(), t = e(Object.keys, Object);
  return ec = t, ec;
}
var tc, Vm;
function FD() {
  if (Vm) return tc;
  Vm = 1;
  var e = ID(), t = LD(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return tc = o, tc;
}
var rc, zm;
function Pa() {
  if (zm) return rc;
  zm = 1;
  var e = Yu(), t = nd();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return rc = r, rc;
}
var nc, Gm;
function od() {
  if (Gm) return nc;
  Gm = 1;
  var e = kD(), t = FD(), r = Pa();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return nc = n, nc;
}
var oc, Ym;
function qD() {
  if (Ym) return oc;
  Ym = 1;
  var e = PD(), t = ND(), r = od();
  function n(o) {
    return e(o, r, t);
  }
  return oc = n, oc;
}
var ac, Um;
function BD() {
  if (Um) return ac;
  Um = 1;
  var e = qD(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function o(a, i, s, c, l, u) {
    var f = s & t, m = e(a), v = m.length, y = e(i), h = y.length;
    if (v != h && !f)
      return !1;
    for (var g = v; g--; ) {
      var w = m[g];
      if (!(f ? w in i : n.call(i, w)))
        return !1;
    }
    var b = u.get(a), x = u.get(i);
    if (b && x)
      return b == i && x == a;
    var C = !0;
    u.set(a, i), u.set(i, a);
    for (var _ = f; ++g < v; ) {
      w = m[g];
      var S = a[w], E = i[w];
      if (c)
        var R = f ? c(E, S, w, i, a, u) : c(S, E, w, a, i, u);
      if (!(R === void 0 ? S === E || l(S, E, s, c, u) : R)) {
        C = !1;
        break;
      }
      _ || (_ = w == "constructor");
    }
    if (C && !_) {
      var T = a.constructor, D = i.constructor;
      T != D && "constructor" in a && "constructor" in i && !(typeof T == "function" && T instanceof T && typeof D == "function" && D instanceof D) && (C = !1);
    }
    return u.delete(a), u.delete(i), C;
  }
  return ac = o, ac;
}
var ic, Km;
function WD() {
  if (Km) return ic;
  Km = 1;
  var e = wr(), t = Et(), r = e(t, "DataView");
  return ic = r, ic;
}
var sc, Xm;
function HD() {
  if (Xm) return sc;
  Xm = 1;
  var e = wr(), t = Et(), r = e(t, "Promise");
  return sc = r, sc;
}
var cc, Zm;
function Mb() {
  if (Zm) return cc;
  Zm = 1;
  var e = wr(), t = Et(), r = e(t, "Set");
  return cc = r, cc;
}
var lc, Qm;
function VD() {
  if (Qm) return lc;
  Qm = 1;
  var e = wr(), t = Et(), r = e(t, "WeakMap");
  return lc = r, lc;
}
var uc, Jm;
function zD() {
  if (Jm) return uc;
  Jm = 1;
  var e = WD(), t = Ku(), r = HD(), n = Mb(), o = VD(), a = yr(), i = rb(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", u = "[object Set]", f = "[object WeakMap]", m = "[object DataView]", v = i(e), y = i(t), h = i(r), g = i(n), w = i(o), b = a;
  return (e && b(new e(new ArrayBuffer(1))) != m || t && b(new t()) != s || r && b(r.resolve()) != l || n && b(new n()) != u || o && b(new o()) != f) && (b = function(x) {
    var C = a(x), _ = C == c ? x.constructor : void 0, S = _ ? i(_) : "";
    if (S)
      switch (S) {
        case v:
          return m;
        case y:
          return s;
        case h:
          return l;
        case g:
          return u;
        case w:
          return f;
      }
    return C;
  }), uc = b, uc;
}
var dc, eh;
function GD() {
  if (eh) return dc;
  eh = 1;
  var e = Sb(), t = Eb(), r = ED(), n = BD(), o = zD(), a = pt(), i = Tb(), s = Nb(), c = 1, l = "[object Arguments]", u = "[object Array]", f = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function y(h, g, w, b, x, C) {
    var _ = a(h), S = a(g), E = _ ? u : o(h), R = S ? u : o(g);
    E = E == l ? f : E, R = R == l ? f : R;
    var T = E == f, D = R == f, O = E == R;
    if (O && i(h)) {
      if (!i(g))
        return !1;
      _ = !0, T = !1;
    }
    if (O && !T)
      return C || (C = new e()), _ || s(h) ? t(h, g, w, b, x, C) : r(h, g, E, w, b, x, C);
    if (!(w & c)) {
      var F = T && v.call(h, "__wrapped__"), L = D && v.call(g, "__wrapped__");
      if (F || L) {
        var N = F ? h.value() : h, I = L ? g.value() : g;
        return C || (C = new e()), x(N, I, w, b, C);
      }
    }
    return O ? (C || (C = new e()), n(h, g, w, b, x, C)) : !1;
  }
  return dc = y, dc;
}
var fc, th;
function Ob() {
  if (th) return fc;
  th = 1;
  var e = GD(), t = br();
  function r(n, o, a, i, s) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : e(n, o, a, i, r, s);
  }
  return fc = r, fc;
}
var pc, rh;
function YD() {
  if (rh) return pc;
  rh = 1;
  var e = Sb(), t = Ob(), r = 1, n = 2;
  function o(a, i, s, c) {
    var l = s.length, u = l, f = !c;
    if (a == null)
      return !u;
    for (a = Object(a); l--; ) {
      var m = s[l];
      if (f && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++l < u; ) {
      m = s[l];
      var v = m[0], y = a[v], h = m[1];
      if (f && m[2]) {
        if (y === void 0 && !(v in a))
          return !1;
      } else {
        var g = new e();
        if (c)
          var w = c(y, h, v, a, i, g);
        if (!(w === void 0 ? t(h, y, r | n, c, g) : w))
          return !1;
      }
    }
    return !0;
  }
  return pc = o, pc;
}
var mc, nh;
function Ab() {
  if (nh) return mc;
  nh = 1;
  var e = Qt();
  function t(r) {
    return r === r && !e(r);
  }
  return mc = t, mc;
}
var hc, oh;
function UD() {
  if (oh) return hc;
  oh = 1;
  var e = Ab(), t = od();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var i = o[a], s = n[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return hc = r, hc;
}
var vc, ah;
function Db() {
  if (ah) return vc;
  ah = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return vc = e, vc;
}
var gc, ih;
function KD() {
  if (ih) return gc;
  ih = 1;
  var e = YD(), t = UD(), r = Db();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return gc = n, gc;
}
var yc, sh;
function XD() {
  if (sh) return yc;
  sh = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return yc = e, yc;
}
var bc, ch;
function ZD() {
  if (ch) return bc;
  ch = 1;
  var e = ab(), t = td(), r = pt(), n = rd(), o = nd(), a = _a();
  function i(s, c, l) {
    c = e(c, s);
    for (var u = -1, f = c.length, m = !1; ++u < f; ) {
      var v = a(c[u]);
      if (!(m = s != null && l(s, v)))
        break;
      s = s[v];
    }
    return m || ++u != f ? m : (f = s == null ? 0 : s.length, !!f && o(f) && n(v, f) && (r(s) || t(s)));
  }
  return bc = i, bc;
}
var wc, lh;
function QD() {
  if (lh) return wc;
  lh = 1;
  var e = XD(), t = ZD();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return wc = r, wc;
}
var xc, uh;
function JD() {
  if (uh) return xc;
  uh = 1;
  var e = Ob(), t = ib(), r = QD(), n = Gu(), o = Ab(), a = Db(), i = _a(), s = 1, c = 2;
  function l(u, f) {
    return n(u) && o(f) ? a(i(u), f) : function(m) {
      var v = t(m, u);
      return v === void 0 && v === f ? r(m, u) : e(f, v, s | c);
    };
  }
  return xc = l, xc;
}
var Sc, dh;
function Ta() {
  if (dh) return Sc;
  dh = 1;
  function e(t) {
    return t;
  }
  return Sc = e, Sc;
}
var Cc, fh;
function ej() {
  if (fh) return Cc;
  fh = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return Cc = e, Cc;
}
var _c, ph;
function tj() {
  if (ph) return _c;
  ph = 1;
  var e = Zu();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return _c = t, _c;
}
var Ec, mh;
function rj() {
  if (mh) return Ec;
  mh = 1;
  var e = ej(), t = tj(), r = Gu(), n = _a();
  function o(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return Ec = o, Ec;
}
var Pc, hh;
function jb() {
  if (hh) return Pc;
  hh = 1;
  var e = KD(), t = JD(), r = Ta(), n = pt(), o = rj();
  function a(i) {
    return typeof i == "function" ? i : i == null ? r : typeof i == "object" ? n(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return Pc = a, Pc;
}
var Tc, vh;
function nj() {
  if (vh) return Tc;
  vh = 1;
  function e(t, r, n, o) {
    for (var a = t.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (r(t[i], i, t))
        return i;
    return -1;
  }
  return Tc = e, Tc;
}
var Rc, gh;
function oj() {
  if (gh) return Rc;
  gh = 1;
  function e(t) {
    return t !== t;
  }
  return Rc = e, Rc;
}
var Nc, yh;
function aj() {
  if (yh) return Nc;
  yh = 1;
  function e(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return Nc = e, Nc;
}
var Mc, bh;
function ij() {
  if (bh) return Mc;
  bh = 1;
  var e = nj(), t = oj(), r = aj();
  function n(o, a, i) {
    return a === a ? r(o, a, i) : e(o, t, i);
  }
  return Mc = n, Mc;
}
var Oc, wh;
function sj() {
  if (wh) return Oc;
  wh = 1;
  var e = ij();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return Oc = t, Oc;
}
var Ac, xh;
function cj() {
  if (xh) return Ac;
  xh = 1;
  function e(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return Ac = e, Ac;
}
var Dc, Sh;
function lj() {
  if (Sh) return Dc;
  Sh = 1;
  function e() {
  }
  return Dc = e, Dc;
}
var jc, Ch;
function uj() {
  if (Ch) return jc;
  Ch = 1;
  var e = Mb(), t = lj(), r = ed(), n = 1 / 0, o = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return jc = o, jc;
}
var kc, _h;
function dj() {
  if (_h) return kc;
  _h = 1;
  var e = Cb(), t = sj(), r = cj(), n = _b(), o = uj(), a = ed(), i = 200;
  function s(c, l, u) {
    var f = -1, m = t, v = c.length, y = !0, h = [], g = h;
    if (u)
      y = !1, m = r;
    else if (v >= i) {
      var w = l ? null : o(c);
      if (w)
        return a(w);
      y = !1, m = n, g = new e();
    } else
      g = l ? [] : h;
    e:
      for (; ++f < v; ) {
        var b = c[f], x = l ? l(b) : b;
        if (b = u || b !== 0 ? b : 0, y && x === x) {
          for (var C = g.length; C--; )
            if (g[C] === x)
              continue e;
          l && g.push(x), h.push(b);
        } else m(g, x, u) || (g !== h && g.push(x), h.push(b));
      }
    return h;
  }
  return kc = s, kc;
}
var Ic, Eh;
function fj() {
  if (Eh) return Ic;
  Eh = 1;
  var e = jb(), t = dj();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return Ic = r, Ic;
}
var pj = fj();
const Ph = /* @__PURE__ */ Ct(pj);
function kb(e, t, r) {
  return t === !0 ? Ph(e, r) : Lo(t) ? Ph(e, t) : e;
}
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
var mj = ["ref"];
function Th(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Th(Object(r), !0).forEach(function(n) {
      Ra(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Th(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $b(n.key), n);
  }
}
function vj(e, t, r) {
  return t && Rh(e.prototype, t), r && Rh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gj(e, t, r) {
  return t = Ho(t), yj(e, Ib() ? Reflect.construct(t, r || [], Ho(e).constructor) : t.apply(e, r));
}
function yj(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bj(e);
}
function bj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ib() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ib = function() {
    return !!e;
  })();
}
function Ho(e) {
  return Ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ho(e);
}
function wj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wl(e, t);
}
function Wl(e, t) {
  return Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Wl(e, t);
}
function Ra(e, t, r) {
  return t = $b(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $b(e) {
  var t = xj(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function xj(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Sj(e, t) {
  if (e == null) return {};
  var r = Cj(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Cj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _j(e) {
  return e.value;
}
function Ej(e, t) {
  if (/* @__PURE__ */ A.isValidElement(e))
    return /* @__PURE__ */ A.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ A.createElement(e, t);
  t.ref;
  var r = Sj(t, mj);
  return /* @__PURE__ */ A.createElement(Ju, r);
}
var Nh = 1, ad = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    hj(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = gj(this, t, [].concat(o)), Ra(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return wj(t, e), vj(t, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > Nh || Math.abs(o.height - this.lastBoundingBox.height) > Nh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Rt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, c = o.margin, l = o.chartWidth, u = o.chartHeight, f, m;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (i === "center" && a === "vertical") {
          var v = this.getBBoxSnapshot();
          f = {
            left: ((l || 0) - v.width) / 2
          };
        } else
          f = i === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var y = this.getBBoxSnapshot();
          m = {
            top: ((u || 0) - y.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Rt(Rt({}, f), m);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.content, i = o.width, s = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, u = o.payload, f = Rt(Rt({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(v) {
          n.wrapperNode = v;
        }
      }, Ej(a, Rt(Rt({}, this.props), {}, {
        payload: kb(u, l, _j)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var a = Rt(Rt({}, this.defaultProps), n.props), i = a.layout;
      return i === "vertical" && st(n.props.height) ? {
        height: n.props.height
      } : i === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
}(ia);
Ra(ad, "displayName", "Legend");
Ra(ad, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var $c, Mh;
function Pj() {
  if (Mh) return $c;
  Mh = 1;
  var e = Yn(), t = td(), r = pt(), n = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return $c = o, $c;
}
var Lc, Oh;
function Tj() {
  if (Oh) return Lc;
  Oh = 1;
  var e = Pb(), t = Pj();
  function r(n, o, a, i, s) {
    var c = -1, l = n.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var u = n[c];
      o > 0 && a(u) ? o > 1 ? r(u, o - 1, a, i, s) : e(s, u) : i || (s[s.length] = u);
    }
    return s;
  }
  return Lc = r, Lc;
}
var Fc, Ah;
function Rj() {
  if (Ah) return Fc;
  Ah = 1;
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
  return Fc = e, Fc;
}
var qc, Dh;
function Nj() {
  if (Dh) return qc;
  Dh = 1;
  var e = Rj(), t = e();
  return qc = t, qc;
}
var Bc, jh;
function Mj() {
  if (jh) return Bc;
  jh = 1;
  var e = Nj(), t = od();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return Bc = r, Bc;
}
var Wc, kh;
function Oj() {
  if (kh) return Wc;
  kh = 1;
  var e = Pa();
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
  return Wc = t, Wc;
}
var Hc, Ih;
function Aj() {
  if (Ih) return Hc;
  Ih = 1;
  var e = Mj(), t = Oj(), r = t(e);
  return Hc = r, Hc;
}
var Vc, $h;
function Dj() {
  if ($h) return Vc;
  $h = 1;
  var e = Aj(), t = Pa();
  function r(n, o) {
    var a = -1, i = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return Vc = r, Vc;
}
var zc, Lh;
function jj() {
  if (Lh) return zc;
  Lh = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return zc = e, zc;
}
var Gc, Fh;
function kj() {
  if (Fh) return Gc;
  Fh = 1;
  var e = Un();
  function t(r, n) {
    if (r !== n) {
      var o = r !== void 0, a = r === null, i = r === r, s = e(r), c = n !== void 0, l = n === null, u = n === n, f = e(n);
      if (!l && !f && !s && r > n || s && c && u && !l && !f || a && c && u || !o && u || !i)
        return 1;
      if (!a && !s && !f && r < n || f && o && i && !a && !s || l && o && i || !c && i || !u)
        return -1;
    }
    return 0;
  }
  return Gc = t, Gc;
}
var Yc, qh;
function Ij() {
  if (qh) return Yc;
  qh = 1;
  var e = kj();
  function t(r, n, o) {
    for (var a = -1, i = r.criteria, s = n.criteria, c = i.length, l = o.length; ++a < c; ) {
      var u = e(i[a], s[a]);
      if (u) {
        if (a >= l)
          return u;
        var f = o[a];
        return u * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Yc = t, Yc;
}
var Uc, Bh;
function $j() {
  if (Bh) return Uc;
  Bh = 1;
  var e = nb(), t = Zu(), r = jb(), n = Dj(), o = jj(), a = Rb(), i = Ij(), s = Ta(), c = pt();
  function l(u, f, m) {
    f.length ? f = e(f, function(h) {
      return c(h) ? function(g) {
        return t(g, h.length === 1 ? h[0] : h);
      } : h;
    }) : f = [s];
    var v = -1;
    f = e(f, a(r));
    var y = n(u, function(h, g, w) {
      var b = e(f, function(x) {
        return x(h);
      });
      return { criteria: b, index: ++v, value: h };
    });
    return o(y, function(h, g) {
      return i(h, g, m);
    });
  }
  return Uc = l, Uc;
}
var Kc, Wh;
function Lj() {
  if (Wh) return Kc;
  Wh = 1;
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
  return Kc = e, Kc;
}
var Xc, Hh;
function Fj() {
  if (Hh) return Xc;
  Hh = 1;
  var e = Lj(), t = Math.max;
  function r(n, o, a) {
    return o = t(o === void 0 ? n.length - 1 : o, 0), function() {
      for (var i = arguments, s = -1, c = t(i.length - o, 0), l = Array(c); ++s < c; )
        l[s] = i[o + s];
      s = -1;
      for (var u = Array(o + 1); ++s < o; )
        u[s] = i[s];
      return u[o] = a(l), e(n, this, u);
    };
  }
  return Xc = r, Xc;
}
var Zc, Vh;
function qj() {
  if (Vh) return Zc;
  Vh = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Zc = e, Zc;
}
var Qc, zh;
function Bj() {
  if (zh) return Qc;
  zh = 1;
  var e = wr(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Qc = t, Qc;
}
var Jc, Gh;
function Wj() {
  if (Gh) return Jc;
  Gh = 1;
  var e = qj(), t = Bj(), r = Ta(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Jc = n, Jc;
}
var el, Yh;
function Hj() {
  if (Yh) return el;
  Yh = 1;
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
  return el = n, el;
}
var tl, Uh;
function Vj() {
  if (Uh) return tl;
  Uh = 1;
  var e = Wj(), t = Hj(), r = t(e);
  return tl = r, tl;
}
var rl, Kh;
function zj() {
  if (Kh) return rl;
  Kh = 1;
  var e = Ta(), t = Fj(), r = Vj();
  function n(o, a) {
    return r(t(o, a, e), o + "");
  }
  return rl = n, rl;
}
var nl, Xh;
function Gj() {
  if (Xh) return nl;
  Xh = 1;
  var e = Uu(), t = Pa(), r = rd(), n = Qt();
  function o(a, i, s) {
    if (!n(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && r(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return nl = o, nl;
}
var ol, Zh;
function Yj() {
  if (Zh) return ol;
  Zh = 1;
  var e = Tj(), t = $j(), r = zj(), n = Gj(), o = r(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && n(a, i[0], i[1]) ? i = [] : s > 2 && n(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return ol = o, ol;
}
var Uj = Yj();
const Kj = /* @__PURE__ */ Ct(Uj);
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
function Hl() {
  return Hl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hl.apply(this, arguments);
}
function Xj(e, t) {
  return ek(e) || Jj(e, t) || Qj(e, t) || Zj();
}
function Zj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qj(e, t) {
  if (e) {
    if (typeof e == "string") return Qh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qh(e, t);
  }
}
function Qh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Jj(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
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
function ek(e) {
  if (Array.isArray(e)) return e;
}
function Jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      tk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tk(e, t, r) {
  return t = rk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rk(e) {
  var t = nk(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function nk(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ok(e) {
  return Array.isArray(e) && Fo(e[0]) && Fo(e[1]) ? e.join(" ~ ") : e;
}
var ak = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, u = t.payload, f = t.formatter, m = t.itemSorter, v = t.wrapperClassName, y = t.labelClassName, h = t.label, g = t.labelFormatter, w = t.accessibilityLayer, b = w === void 0 ? !1 : w, x = function() {
    if (u && u.length) {
      var F = {
        padding: 0,
        margin: 0
      }, L = (m ? Kj(u, m) : u).map(function(N, I) {
        if (N.type === "none")
          return null;
        var k = al({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: N.color || "#000"
        }, s), G = N.formatter || f || ok, B = N.value, $ = N.name, J = B, ee = $;
        if (G && J != null && ee != null) {
          var j = G(B, $, N, I, u);
          if (Array.isArray(j)) {
            var Y = Xj(j, 2);
            J = Y[0], ee = Y[1];
          } else
            J = j;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ A.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: k
          }, Fo(ee) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, ee) : null, Fo(ee) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, J), /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, N.unit || ""))
        );
      });
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: F
      }, L);
    }
    return null;
  }, C = al({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), _ = al({
    margin: 0
  }, l), S = !rA(h), E = S ? h : "", R = Dt("recharts-default-tooltip", v), T = Dt("recharts-tooltip-label", y);
  S && g && u !== void 0 && u !== null && (E = g(h, u));
  var D = b ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ A.createElement("div", Hl({
    className: R,
    style: C
  }, D), /* @__PURE__ */ A.createElement("p", {
    className: T,
    style: _
  }, /* @__PURE__ */ A.isValidElement(E) ? E : "".concat(E)), x());
};
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
function wo(e, t, r) {
  return t = ik(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ik(e) {
  var t = sk(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function sk(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ln = "recharts-tooltip-wrapper", ck = {
  visibility: "hidden"
};
function lk(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Dt(ln, wo(wo(wo(wo({}, "".concat(ln, "-right"), st(r) && t && st(t.x) && r >= t.x), "".concat(ln, "-left"), st(r) && t && st(t.x) && r < t.x), "".concat(ln, "-bottom"), st(n) && t && st(t.y) && n >= t.y), "".concat(ln, "-top"), st(n) && t && st(t.y) && n < t.y));
}
function ev(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && st(a[n]))
    return a[n];
  var u = r[n] - s - o, f = r[n] + o;
  if (t[n])
    return i[n] ? u : f;
  if (i[n]) {
    var m = u, v = c[n];
    return m < v ? Math.max(f, c[n]) : Math.max(u, c[n]);
  }
  var y = f + s, h = c[n] + l;
  return y > h ? Math.max(u, c[n]) : Math.max(f, c[n]);
}
function uk(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function dk(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, u, f;
  return i.height > 0 && i.width > 0 && r ? (u = ev({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = ev({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = uk({
    translateX: u,
    translateY: f,
    useTranslate3d: s
  })) : l = ck, {
    cssProperties: l,
    cssClasses: lk({
      translateX: u,
      translateY: f,
      coordinate: r
    })
  };
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
function tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(r), !0).forEach(function(n) {
      zl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Fb(n.key), n);
  }
}
function mk(e, t, r) {
  return t && pk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function hk(e, t, r) {
  return t = Vo(t), vk(e, Lb() ? Reflect.construct(t, r || [], Vo(e).constructor) : t.apply(e, r));
}
function vk(e, t) {
  if (t && (Fr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gk(e);
}
function gk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lb = function() {
    return !!e;
  })();
}
function Vo(e) {
  return Vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vo(e);
}
function yk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vl(e, t);
}
function Vl(e, t) {
  return Vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Vl(e, t);
}
function zl(e, t, r) {
  return t = Fb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fb(e) {
  var t = bk(e, "string");
  return Fr(t) == "symbol" ? t : t + "";
}
function bk(e, t) {
  if (Fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nv = 1, wk = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    fk(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = hk(this, t, [].concat(o)), zl(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), zl(r, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, c, l, u;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (l = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), r;
  }
  return yk(t, e), mk(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > nv || Math.abs(n.height - this.state.lastBoundingBox.height) > nv) && this.setState({
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
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, u = o.coordinate, f = o.hasPayload, m = o.isAnimationActive, v = o.offset, y = o.position, h = o.reverseDirection, g = o.useTranslate3d, w = o.viewBox, b = o.wrapperStyle, x = dk({
        allowEscapeViewBox: i,
        coordinate: u,
        offsetTopLeft: v,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: w
      }), C = x.cssClasses, _ = x.cssProperties, S = rv(rv({
        transition: m && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, _), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, b);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ A.createElement("div", {
          tabIndex: -1,
          className: C,
          style: S,
          ref: function(R) {
            n.wrapperNode = R;
          }
        }, l)
      );
    }
  }]);
}(ia), xk = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Sk = {
  isSsr: xk()
};
function qr(e) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(e);
}
function ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function av(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ov(Object(r), !0).forEach(function(n) {
      id(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ov(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _k(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Bb(n.key), n);
  }
}
function Ek(e, t, r) {
  return t && _k(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Pk(e, t, r) {
  return t = zo(t), Tk(e, qb() ? Reflect.construct(t, r || [], zo(e).constructor) : t.apply(e, r));
}
function Tk(e, t) {
  if (t && (qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Rk(e);
}
function Rk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qb = function() {
    return !!e;
  })();
}
function zo(e) {
  return zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zo(e);
}
function Nk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gl(e, t);
}
function Gl(e, t) {
  return Gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Gl(e, t);
}
function id(e, t, r) {
  return t = Bb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bb(e) {
  var t = Mk(e, "string");
  return qr(t) == "symbol" ? t : t + "";
}
function Mk(e, t) {
  if (qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Ok(e) {
  return e.dataKey;
}
function Ak(e, t) {
  return /* @__PURE__ */ A.isValidElement(e) ? /* @__PURE__ */ A.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ A.createElement(e, t) : /* @__PURE__ */ A.createElement(ak, t);
}
var sd = /* @__PURE__ */ function(e) {
  function t() {
    return Ck(this, t), Pk(this, t, arguments);
  }
  return Nk(t, e), Ek(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, u = o.coordinate, f = o.filterNull, m = o.isAnimationActive, v = o.offset, y = o.payload, h = o.payloadUniqBy, g = o.position, w = o.reverseDirection, b = o.useTranslate3d, x = o.viewBox, C = o.wrapperStyle, _ = y ?? [];
      f && _.length && (_ = kb(y.filter(function(E) {
        return E.value != null && (E.hide !== !0 || n.props.includeHidden);
      }), h, Ok));
      var S = _.length > 0;
      return /* @__PURE__ */ A.createElement(wk, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: u,
        hasPayload: S,
        offset: v,
        position: g,
        reverseDirection: w,
        useTranslate3d: b,
        viewBox: x,
        wrapperStyle: C
      }, Ak(l, av(av({}, this.props), {}, {
        payload: _
      })));
    }
  }]);
}(ia);
id(sd, "displayName", "Tooltip");
id(sd, "defaultProps", {
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
  isAnimationActive: !Sk.isSsr,
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
var il, iv;
function Dk() {
  if (iv) return il;
  iv = 1;
  var e = Et(), t = function() {
    return e.Date.now();
  };
  return il = t, il;
}
var sl, sv;
function jk() {
  if (sv) return sl;
  sv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return sl = t, sl;
}
var cl, cv;
function kk() {
  if (cv) return cl;
  cv = 1;
  var e = jk(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return cl = r, cl;
}
var ll, lv;
function Ik() {
  if (lv) return ll;
  lv = 1;
  var e = kk(), t = Qt(), r = Un(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function c(l) {
    if (typeof l == "number")
      return l;
    if (r(l))
      return n;
    if (t(l)) {
      var u = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = t(u) ? u + "" : u;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = e(l);
    var f = a.test(l);
    return f || i.test(l) ? s(l.slice(2), f ? 2 : 8) : o.test(l) ? n : +l;
  }
  return ll = c, ll;
}
var ul, uv;
function $k() {
  if (uv) return ul;
  uv = 1;
  var e = Qt(), t = Dk(), r = Ik(), n = "Expected a function", o = Math.max, a = Math.min;
  function i(s, c, l) {
    var u, f, m, v, y, h, g = 0, w = !1, b = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(l) && (w = !!l.leading, b = "maxWait" in l, m = b ? o(r(l.maxWait) || 0, c) : m, x = "trailing" in l ? !!l.trailing : x);
    function C(L) {
      var N = u, I = f;
      return u = f = void 0, g = L, v = s.apply(I, N), v;
    }
    function _(L) {
      return g = L, y = setTimeout(R, c), w ? C(L) : v;
    }
    function S(L) {
      var N = L - h, I = L - g, k = c - N;
      return b ? a(k, m - I) : k;
    }
    function E(L) {
      var N = L - h, I = L - g;
      return h === void 0 || N >= c || N < 0 || b && I >= m;
    }
    function R() {
      var L = t();
      if (E(L))
        return T(L);
      y = setTimeout(R, S(L));
    }
    function T(L) {
      return y = void 0, x && u ? C(L) : (u = f = void 0, v);
    }
    function D() {
      y !== void 0 && clearTimeout(y), g = 0, u = h = f = y = void 0;
    }
    function O() {
      return y === void 0 ? v : T(t());
    }
    function F() {
      var L = t(), N = E(L);
      if (u = arguments, f = this, h = L, N) {
        if (y === void 0)
          return _(h);
        if (b)
          return clearTimeout(y), y = setTimeout(R, c), C(h);
      }
      return y === void 0 && (y = setTimeout(R, c)), v;
    }
    return F.cancel = D, F.flush = O, F;
  }
  return ul = i, ul;
}
var dl, dv;
function Lk() {
  if (dv) return dl;
  dv = 1;
  var e = $k(), t = Qt(), r = "Expected a function";
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
  return dl = n, dl;
}
var Fk = Lk();
const qk = /* @__PURE__ */ Ct(Fk);
function On(e) {
  "@babel/helpers - typeof";
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
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
function xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fv(Object(r), !0).forEach(function(n) {
      Bk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bk(e, t, r) {
  return t = Wk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wk(e) {
  var t = Hk(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function Hk(e, t) {
  if (On(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (On(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vk(e, t) {
  return Uk(e) || Yk(e, t) || Gk(e, t) || zk();
}
function zk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gk(e, t) {
  if (e) {
    if (typeof e == "string") return pv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pv(e, t);
  }
}
function pv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Yk(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
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
function Uk(e) {
  if (Array.isArray(e)) return e;
}
var Kk = /* @__PURE__ */ bu(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, u = l === void 0 ? 0 : l, f = e.minHeight, m = e.maxHeight, v = e.children, y = e.debounce, h = y === void 0 ? 0 : y, g = e.id, w = e.className, b = e.onResize, x = e.style, C = x === void 0 ? {} : x, _ = Ot(null), S = Ot();
  S.current = b, wu(t, function() {
    return Object.defineProperty(_.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), _.current;
      },
      configurable: !0
    });
  });
  var E = Yt({
    containerWidth: o.width,
    containerHeight: o.height
  }), R = Vk(E, 2), T = R[0], D = R[1], O = He(function(L, N) {
    D(function(I) {
      var k = Math.round(L), G = Math.round(N);
      return I.containerWidth === k && I.containerHeight === G ? I : {
        containerWidth: k,
        containerHeight: G
      };
    });
  }, []);
  At(function() {
    var L = function($) {
      var J, ee = $[0].contentRect, j = ee.width, Y = ee.height;
      O(j, Y), (J = S.current) === null || J === void 0 || J.call(S, j, Y);
    };
    h > 0 && (L = qk(L, h, {
      trailing: !0,
      leading: !1
    }));
    var N = new ResizeObserver(L), I = _.current.getBoundingClientRect(), k = I.width, G = I.height;
    return O(k, G), N.observe(_.current), function() {
      N.disconnect();
    };
  }, [O, h]);
  var F = Eo(function() {
    var L = T.containerWidth, N = T.containerHeight;
    if (L < 0 || N < 0)
      return null;
    Ro(yo(i) || yo(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), Ro(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = yo(i) ? L : i, k = yo(c) ? N : c;
    r && r > 0 && (I ? k = I / r : k && (I = k * r), m && k > m && (k = m)), Ro(I > 0 || k > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, k, i, c, u, f, r);
    var G = !Array.isArray(v) && bA(v.type).endsWith("Chart");
    return A.Children.map(v, function(B) {
      return /* @__PURE__ */ A.isValidElement(B) ? /* @__PURE__ */ nE(B, xo({
        width: I,
        height: k
      }, G ? {
        style: xo({
          height: "100%",
          width: "100%",
          maxHeight: k,
          maxWidth: I
        }, B.props.style)
      } : {})) : B;
    });
  }, [r, v, c, m, f, u, T, i]);
  return /* @__PURE__ */ A.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: Dt("recharts-responsive-container", w),
    style: xo(xo({}, C), {}, {
      width: i,
      height: c,
      minWidth: u,
      minHeight: f,
      maxHeight: m
    }),
    ref: _
  }, F);
});
const Xk = { light: "", dark: ".dark" }, Wb = d.createContext(null);
function Hb() {
  const e = d.useContext(Wb);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const Zk = d.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = d.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ p.jsx(Wb.Provider, { value: { config: n }, children: /* @__PURE__ */ p.jsxs(
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
        /* @__PURE__ */ p.jsx(Qk, { id: s, config: n }),
        /* @__PURE__ */ p.jsx(Kk, { children: r })
      ]
    }
  ) });
});
Zk.displayName = "Chart";
const Qk = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ p.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Xk).map(
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
}, RW = sd, Jk = d.forwardRef(
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
    color: u,
    nameKey: f,
    labelKey: m
  }, v) => {
    const { config: y } = Hb(), h = d.useMemo(() => {
      var _;
      if (o || !(t != null && t.length))
        return null;
      const [w] = t;
      if (!w)
        return null;
      const b = `${m || w.dataKey || w.name || "value"}`, x = Yl(y, w, b), C = !m && typeof i == "string" ? ((_ = y[i]) == null ? void 0 : _.label) || i : x == null ? void 0 : x.label;
      return s ? /* @__PURE__ */ p.jsx("div", { className: M("font-medium", c), children: s(C, t) }) : C ? /* @__PURE__ */ p.jsx("div", { className: M("font-medium", c), children: C }) : null;
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
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: v,
        className: M(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          g ? null : h,
          /* @__PURE__ */ p.jsx("div", { className: "grid gap-1.5", children: t.map((w, b) => {
            if (!w)
              return null;
            const x = `${f || w.dataKey || w.name || "value"}`, C = Yl(y, w, x), _ = u || w.payload.fill || w.color;
            return /* @__PURE__ */ p.jsx(
              "div",
              {
                className: M(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: l && (w == null ? void 0 : w.value) !== void 0 && w.name ? l(w.value, w.name, w, b, w.payload) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                  C != null && C.icon ? /* @__PURE__ */ p.jsx(C.icon, {}) : !a && /* @__PURE__ */ p.jsx(
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
                        "--color-bg": _,
                        "--color-border": _
                      }
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: M(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? h : null,
                          /* @__PURE__ */ p.jsx("span", { className: "text-muted-foreground", children: (C == null ? void 0 : C.label) || w.name })
                        ] }),
                        w.value && /* @__PURE__ */ p.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: w.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              w.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Jk.displayName = "ChartTooltip";
const NW = ad, eI = d.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
    const { config: i } = Hb();
    return r != null && r.length ? /* @__PURE__ */ p.jsx(
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
          const c = `${o || s.dataKey || "value"}`, l = Yl(i, s, c);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: M(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l != null && l.icon && !t ? /* @__PURE__ */ p.jsx(l.icon, {}) : /* @__PURE__ */ p.jsx(
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
eI.displayName = "ChartLegend";
function Yl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
function Kn(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Na(e) {
  const [t, r] = d.useState(void 0);
  return Oe(() => {
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
var cd = "Checkbox", [tI, MW] = Ae(cd), [rI, nI] = tI(cd), Vb = d.forwardRef(
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
      form: u,
      ...f
    } = e, [m, v] = d.useState(null), y = ie(t, (C) => v(C)), h = d.useRef(!1), g = m ? u || !!m.closest("form") : !0, [w = !1, b] = je({
      prop: o,
      defaultProp: a,
      onChange: l
    }), x = d.useRef(w);
    return d.useEffect(() => {
      const C = m == null ? void 0 : m.form;
      if (C) {
        const _ = () => b(x.current);
        return C.addEventListener("reset", _), () => C.removeEventListener("reset", _);
      }
    }, [m, b]), /* @__PURE__ */ p.jsxs(rI, { scope: r, state: w, disabled: s, children: [
      /* @__PURE__ */ p.jsx(
        V.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": Gt(w) ? "mixed" : w,
          "aria-required": i,
          "data-state": Yb(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...f,
          ref: y,
          onKeyDown: q(e.onKeyDown, (C) => {
            C.key === "Enter" && C.preventDefault();
          }),
          onClick: q(e.onClick, (C) => {
            b((_) => Gt(_) ? !0 : !_), g && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ p.jsx(
        oI,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: w,
          required: i,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" },
          defaultChecked: Gt(a) ? !1 : a
        }
      )
    ] });
  }
);
Vb.displayName = cd;
var zb = "CheckboxIndicator", Gb = d.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = nI(zb, r);
    return /* @__PURE__ */ p.jsx(Pe, { present: n || Gt(a.state) || a.state === !0, children: /* @__PURE__ */ p.jsx(
      V.span,
      {
        "data-state": Yb(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
Gb.displayName = zb;
var oI = (e) => {
  const { control: t, checked: r, bubbles: n = !0, defaultChecked: o, ...a } = e, i = d.useRef(null), s = Kn(r), c = Na(t);
  d.useEffect(() => {
    const u = i.current, f = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(f, "checked").set;
    if (s !== r && v) {
      const y = new Event("click", { bubbles: n });
      u.indeterminate = Gt(r), v.call(u, Gt(r) ? !1 : r), u.dispatchEvent(y);
    }
  }, [s, r, n]);
  const l = d.useRef(Gt(r) ? !1 : r);
  return /* @__PURE__ */ p.jsx(
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
function Gt(e) {
  return e === "indeterminate";
}
function Yb(e) {
  return Gt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Ub = Vb, aI = Gb;
const iI = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ub,
  {
    ref: r,
    className: M(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx(
      aI,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ p.jsx(xn, { className: "size-4 h-full" })
      }
    )
  }
));
iI.displayName = Ub.displayName;
var mv = 1, sI = 0.9, cI = 0.8, lI = 0.17, fl = 0.1, pl = 0.999, uI = 0.9999, dI = 0.99, fI = /[\\\/_+.#"@\[\(\{&]/, pI = /[\\\/_+.#"@\[\(\{&]/g, mI = /[\s-]/, Kb = /[\s-]/g;
function Ul(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? mv : dI;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), l = r.indexOf(c, o), u = 0, f, m, v, y; l >= 0; ) f = Ul(e, t, r, n, l + 1, a + 1, i), f > u && (l === o ? f *= mv : fI.test(e.charAt(l - 1)) ? (f *= cI, v = e.slice(o, l - 1).match(pI), v && o > 0 && (f *= Math.pow(pl, v.length))) : mI.test(e.charAt(l - 1)) ? (f *= sI, y = e.slice(o, l - 1).match(Kb), y && o > 0 && (f *= Math.pow(pl, y.length))) : (f *= lI, o > 0 && (f *= Math.pow(pl, l - o))), e.charAt(l) !== t.charAt(a) && (f *= uI)), (f < fl && r.charAt(l - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a)) && (m = Ul(e, t, r, n, l + 1, a + 2, i), m * fl > f && (f = m * fl)), f > u && (u = f), l = r.indexOf(c, l + 1);
  return i[s] = u, u;
}
function hv(e) {
  return e.toLowerCase().replace(Kb, " ");
}
function hI(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, Ul(e, t, hv(e), hv(t), 0, 0, {});
}
var So = { exports: {} }, ml = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function vI() {
  if (vv) return ml;
  vv = 1;
  var e = A;
  function t(f, m) {
    return f === m && (f !== 0 || 1 / f === 1 / m) || f !== f && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(f, m) {
    var v = m(), y = n({ inst: { value: v, getSnapshot: m } }), h = y[0].inst, g = y[1];
    return a(
      function() {
        h.value = v, h.getSnapshot = m, c(h) && g({ inst: h });
      },
      [f, v, m]
    ), o(
      function() {
        return c(h) && g({ inst: h }), f(function() {
          c(h) && g({ inst: h });
        });
      },
      [f]
    ), i(v), v;
  }
  function c(f) {
    var m = f.getSnapshot;
    f = f.value;
    try {
      var v = m();
      return !r(f, v);
    } catch {
      return !0;
    }
  }
  function l(f, m) {
    return m();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return ml.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, ml;
}
var hl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gv;
function gI() {
  return gv || (gv = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v, y) {
      return v === y && (v !== 0 || 1 / v === 1 / y) || v !== v && y !== y;
    }
    function t(v, y) {
      u || o.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = y();
      if (!f) {
        var g = y();
        a(h, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      g = i({
        inst: { value: h, getSnapshot: y }
      });
      var w = g[0].inst, b = g[1];
      return c(
        function() {
          w.value = h, w.getSnapshot = y, r(w) && b({ inst: w });
        },
        [v, h, y]
      ), s(
        function() {
          return r(w) && b({ inst: w }), v(function() {
            r(w) && b({ inst: w });
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
    var o = A, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, l = o.useDebugValue, u = !1, f = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    hl.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), hl;
}
var yv;
function yI() {
  return yv || (yv = 1, process.env.NODE_ENV === "production" ? So.exports = vI() : So.exports = gI()), So.exports;
}
var bI = yI(), un = '[cmdk-group=""]', vl = '[cmdk-group-items=""]', wI = '[cmdk-group-heading=""]', ld = '[cmdk-item=""]', bv = `${ld}:not([aria-disabled="true"])`, Kl = "cmdk-item-select", cr = "data-value", xI = (e, t, r) => hI(e, t, r), Xb = d.createContext(void 0), Xn = () => d.useContext(Xb), Zb = d.createContext(void 0), ud = () => d.useContext(Zb), Qb = d.createContext(void 0), Jb = d.forwardRef((e, t) => {
  let r = Nr(() => {
    var j, Y;
    return { search: "", value: (Y = (j = e.value) != null ? j : e.defaultValue) != null ? Y : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = Nr(() => /* @__PURE__ */ new Set()), o = Nr(() => /* @__PURE__ */ new Map()), a = Nr(() => /* @__PURE__ */ new Map()), i = Nr(() => /* @__PURE__ */ new Set()), s = ew(e), { label: c, children: l, value: u, onValueChange: f, filter: m, shouldFilter: v, loop: y, disablePointerSelection: h = !1, vimBindings: g = !0, ...w } = e, b = Ne(), x = Ne(), C = Ne(), _ = d.useRef(null), S = AI();
  fr(() => {
    if (u !== void 0) {
      let j = u.trim();
      r.current.value = j, E.emit();
    }
  }, [u]), fr(() => {
    S(6, L);
  }, []);
  let E = d.useMemo(() => ({ subscribe: (j) => (i.current.add(j), () => i.current.delete(j)), snapshot: () => r.current, setState: (j, Y, K) => {
    var U, ne, W;
    if (!Object.is(r.current[j], Y)) {
      if (r.current[j] = Y, j === "search") F(), D(), S(1, O);
      else if (j === "value" && (K || S(5, L), ((U = s.current) == null ? void 0 : U.value) !== void 0)) {
        let Q = Y ?? "";
        (W = (ne = s.current).onValueChange) == null || W.call(ne, Q);
        return;
      }
      E.emit();
    }
  }, emit: () => {
    i.current.forEach((j) => j());
  } }), []), R = d.useMemo(() => ({ value: (j, Y, K) => {
    var U;
    Y !== ((U = a.current.get(j)) == null ? void 0 : U.value) && (a.current.set(j, { value: Y, keywords: K }), r.current.filtered.items.set(j, T(Y, K)), S(2, () => {
      D(), E.emit();
    }));
  }, item: (j, Y) => (n.current.add(j), Y && (o.current.has(Y) ? o.current.get(Y).add(j) : o.current.set(Y, /* @__PURE__ */ new Set([j]))), S(3, () => {
    F(), D(), r.current.value || O(), E.emit();
  }), () => {
    a.current.delete(j), n.current.delete(j), r.current.filtered.items.delete(j);
    let K = N();
    S(4, () => {
      F(), (K == null ? void 0 : K.getAttribute("id")) === j && O(), E.emit();
    });
  }), group: (j) => (o.current.has(j) || o.current.set(j, /* @__PURE__ */ new Set()), () => {
    a.current.delete(j), o.current.delete(j);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: b, inputId: C, labelId: x, listInnerRef: _ }), []);
  function T(j, Y) {
    var K, U;
    let ne = (U = (K = s.current) == null ? void 0 : K.filter) != null ? U : xI;
    return j ? ne(j, r.current.search, Y) : 0;
  }
  function D() {
    if (!r.current.search || s.current.shouldFilter === !1) return;
    let j = r.current.filtered.items, Y = [];
    r.current.filtered.groups.forEach((U) => {
      let ne = o.current.get(U), W = 0;
      ne.forEach((Q) => {
        let se = j.get(Q);
        W = Math.max(se, W);
      }), Y.push([U, W]);
    });
    let K = _.current;
    I().sort((U, ne) => {
      var W, Q;
      let se = U.getAttribute("id"), ae = ne.getAttribute("id");
      return ((W = j.get(ae)) != null ? W : 0) - ((Q = j.get(se)) != null ? Q : 0);
    }).forEach((U) => {
      let ne = U.closest(vl);
      ne ? ne.appendChild(U.parentElement === ne ? U : U.closest(`${vl} > *`)) : K.appendChild(U.parentElement === K ? U : U.closest(`${vl} > *`));
    }), Y.sort((U, ne) => ne[1] - U[1]).forEach((U) => {
      var ne;
      let W = (ne = _.current) == null ? void 0 : ne.querySelector(`${un}[${cr}="${encodeURIComponent(U[0])}"]`);
      W == null || W.parentElement.appendChild(W);
    });
  }
  function O() {
    let j = I().find((K) => K.getAttribute("aria-disabled") !== "true"), Y = j == null ? void 0 : j.getAttribute(cr);
    E.setState("value", Y || void 0);
  }
  function F() {
    var j, Y, K, U;
    if (!r.current.search || s.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let ne = 0;
    for (let W of n.current) {
      let Q = (Y = (j = a.current.get(W)) == null ? void 0 : j.value) != null ? Y : "", se = (U = (K = a.current.get(W)) == null ? void 0 : K.keywords) != null ? U : [], ae = T(Q, se);
      r.current.filtered.items.set(W, ae), ae > 0 && ne++;
    }
    for (let [W, Q] of o.current) for (let se of Q) if (r.current.filtered.items.get(se) > 0) {
      r.current.filtered.groups.add(W);
      break;
    }
    r.current.filtered.count = ne;
  }
  function L() {
    var j, Y, K;
    let U = N();
    U && (((j = U.parentElement) == null ? void 0 : j.firstChild) === U && ((K = (Y = U.closest(un)) == null ? void 0 : Y.querySelector(wI)) == null || K.scrollIntoView({ block: "nearest" })), U.scrollIntoView({ block: "nearest" }));
  }
  function N() {
    var j;
    return (j = _.current) == null ? void 0 : j.querySelector(`${ld}[aria-selected="true"]`);
  }
  function I() {
    var j;
    return Array.from(((j = _.current) == null ? void 0 : j.querySelectorAll(bv)) || []);
  }
  function k(j) {
    let Y = I()[j];
    Y && E.setState("value", Y.getAttribute(cr));
  }
  function G(j) {
    var Y;
    let K = N(), U = I(), ne = U.findIndex((Q) => Q === K), W = U[ne + j];
    (Y = s.current) != null && Y.loop && (W = ne + j < 0 ? U[U.length - 1] : ne + j === U.length ? U[0] : U[ne + j]), W && E.setState("value", W.getAttribute(cr));
  }
  function B(j) {
    let Y = N(), K = Y == null ? void 0 : Y.closest(un), U;
    for (; K && !U; ) K = j > 0 ? MI(K, un) : OI(K, un), U = K == null ? void 0 : K.querySelector(bv);
    U ? E.setState("value", U.getAttribute(cr)) : G(j);
  }
  let $ = () => k(I().length - 1), J = (j) => {
    j.preventDefault(), j.metaKey ? $() : j.altKey ? B(1) : G(1);
  }, ee = (j) => {
    j.preventDefault(), j.metaKey ? k(0) : j.altKey ? B(-1) : G(-1);
  };
  return d.createElement(V.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (j) => {
    var Y;
    if ((Y = w.onKeyDown) == null || Y.call(w, j), !j.defaultPrevented) switch (j.key) {
      case "n":
      case "j": {
        g && j.ctrlKey && J(j);
        break;
      }
      case "ArrowDown": {
        J(j);
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
        j.preventDefault(), k(0);
        break;
      }
      case "End": {
        j.preventDefault(), $();
        break;
      }
      case "Enter":
        if (!j.nativeEvent.isComposing && j.keyCode !== 229) {
          j.preventDefault();
          let K = N();
          if (K) {
            let U = new Event(Kl);
            K.dispatchEvent(U);
          }
        }
    }
  } }, d.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: jI }, c), Ma(e, (j) => d.createElement(Zb.Provider, { value: E }, d.createElement(Xb.Provider, { value: R }, j))));
}), SI = d.forwardRef((e, t) => {
  var r, n;
  let o = Ne(), a = d.useRef(null), i = d.useContext(Qb), s = Xn(), c = ew(e), l = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i == null ? void 0 : i.forceMount;
  fr(() => {
    if (!l) return s.item(o, i == null ? void 0 : i.id);
  }, [l]);
  let u = tw(o, a, [e.value, e.children, a], e.keywords), f = ud(), m = pr((S) => S.value && S.value === u.current), v = pr((S) => l || s.filter() === !1 ? !0 : S.search ? S.filtered.items.get(o) > 0 : !0);
  d.useEffect(() => {
    let S = a.current;
    if (!(!S || e.disabled)) return S.addEventListener(Kl, y), () => S.removeEventListener(Kl, y);
  }, [v, e.onSelect, e.disabled]);
  function y() {
    var S, E;
    h(), (E = (S = c.current).onSelect) == null || E.call(S, u.current);
  }
  function h() {
    f.setState("value", u.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: x, keywords: C, ..._ } = e;
  return d.createElement(V.div, { ref: An([a, t]), ..._, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!m, "data-disabled": !!g, "data-selected": !!m, onPointerMove: g || s.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : y }, e.children);
}), CI = d.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = Ne(), s = d.useRef(null), c = d.useRef(null), l = Ne(), u = Xn(), f = pr((v) => o || u.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(i) : !0);
  fr(() => u.group(i), []), tw(i, s, [e.value, e.heading, c]);
  let m = d.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return d.createElement(V.div, { ref: An([s, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, r && d.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), Ma(e, (v) => d.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, d.createElement(Qb.Provider, { value: m }, v))));
}), _I = d.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = d.useRef(null), a = pr((i) => !i.search);
  return !r && !a ? null : d.createElement(V.div, { ref: An([o, t]), ...n, "cmdk-separator": "", role: "separator" });
}), EI = d.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = ud(), i = pr((u) => u.search), s = pr((u) => u.value), c = Xn(), l = d.useMemo(() => {
    var u;
    let f = (u = c.listInnerRef.current) == null ? void 0 : u.querySelector(`${ld}[${cr}="${encodeURIComponent(s)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return d.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), d.createElement(V.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (u) => {
    o || a.setState("search", u.target.value), r == null || r(u.target.value);
  } });
}), PI = d.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = d.useRef(null), i = d.useRef(null), s = Xn();
  return d.useEffect(() => {
    if (i.current && a.current) {
      let c = i.current, l = a.current, u, f = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let m = c.offsetHeight;
          l.style.setProperty("--cmdk-list-height", m.toFixed(1) + "px");
        });
      });
      return f.observe(c), () => {
        cancelAnimationFrame(u), f.unobserve(c);
      };
    }
  }, []), d.createElement(V.div, { ref: An([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": n, id: s.listId }, Ma(e, (c) => d.createElement("div", { ref: An([i, s.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), TI = d.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return d.createElement(ma, { open: r, onOpenChange: n }, d.createElement(ha, { container: i }, d.createElement(Ur, { "cmdk-overlay": "", className: o }), d.createElement(Kr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, d.createElement(Jb, { ref: t, ...s }))));
}), RI = d.forwardRef((e, t) => pr((r) => r.filtered.count === 0) ? d.createElement(V.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), NI = d.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return d.createElement(V.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Ma(e, (i) => d.createElement("div", { "aria-hidden": !0 }, i)));
}), Ve = Object.assign(Jb, { List: PI, Item: SI, Input: EI, Group: CI, Separator: _I, Dialog: TI, Empty: RI, Loading: NI });
function MI(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function OI(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function ew(e) {
  let t = d.useRef(e);
  return fr(() => {
    t.current = e;
  }), t;
}
var fr = typeof window > "u" ? d.useEffect : d.useLayoutEffect;
function Nr(e) {
  let t = d.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function An(e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
function pr(e) {
  let t = ud(), r = () => e(t.snapshot());
  return bI.useSyncExternalStore(t.subscribe, r, r);
}
function tw(e, t, r, n = []) {
  let o = d.useRef(), a = Xn();
  return fr(() => {
    var i;
    let s = (() => {
      var l;
      for (let u of r) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (l = u.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = n.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(cr, s), o.current = s;
  }), o;
}
var AI = () => {
  let [e, t] = d.useState(), r = Nr(() => /* @__PURE__ */ new Map());
  return fr(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function DI(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ma({ asChild: e, children: t }, r) {
  return e && d.isValidElement(t) ? d.cloneElement(DI(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var jI = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const dd = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ve,
  {
    ref: r,
    className: M(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
dd.displayName = Ve.displayName;
const OW = ({ children: e, ...t }) => /* @__PURE__ */ p.jsx(mL, { ...t, children: /* @__PURE__ */ p.jsx(zw, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ p.jsx(dd, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), rw = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ p.jsx(d0, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ p.jsx(
    Ve.Input,
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
rw.displayName = Ve.Input.displayName;
const nw = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ve.List,
  {
    ref: r,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
nw.displayName = Ve.List.displayName;
const ow = d.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
  Ve.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
ow.displayName = Ve.Empty.displayName;
const aw = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ve.Group,
  {
    ref: r,
    className: M(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
aw.displayName = Ve.Group.displayName;
const iw = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ve.Separator,
  {
    ref: r,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
iw.displayName = Ve.Separator.displayName;
const No = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ve.Item,
  {
    ref: r,
    className: M(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
No.displayName = Ve.Item.displayName;
const kI = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
kI.displayName = "CommandShortcut";
const II = ["top", "right", "bottom", "left"], Ut = Math.min, Ue = Math.max, Go = Math.round, Co = Math.floor, wt = (e) => ({
  x: e,
  y: e
}), $I = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, LI = {
  start: "end",
  end: "start"
};
function Xl(e, t, r) {
  return Ue(e, Ut(t, r));
}
function jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e) {
  return e.split("-")[0];
}
function Jr(e) {
  return e.split("-")[1];
}
function fd(e) {
  return e === "x" ? "y" : "x";
}
function pd(e) {
  return e === "y" ? "height" : "width";
}
function Kt(e) {
  return ["top", "bottom"].includes(kt(e)) ? "y" : "x";
}
function md(e) {
  return fd(Kt(e));
}
function FI(e, t, r) {
  r === void 0 && (r = !1);
  const n = Jr(e), o = md(e), a = pd(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Yo(i)), [i, Yo(i)];
}
function qI(e) {
  const t = Yo(e);
  return [Zl(e), t, Zl(t)];
}
function Zl(e) {
  return e.replace(/start|end/g, (t) => LI[t]);
}
function BI(e, t, r) {
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
function WI(e, t, r, n) {
  const o = Jr(e);
  let a = BI(kt(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Zl)))), a;
}
function Yo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $I[t]);
}
function HI(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sw(e) {
  return typeof e != "number" ? HI(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Uo(e) {
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
function wv(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = Kt(t), i = md(t), s = pd(i), c = kt(t), l = a === "y", u = n.x + n.width / 2 - o.width / 2, f = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: n.x - o.width,
        y: f
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Jr(t)) {
    case "start":
      v[i] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      v[i] += m * (r && l ? -1 : 1);
      break;
  }
  return v;
}
const VI = async (e, t, r) => {
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
    x: u,
    y: f
  } = wv(l, n, c), m = n, v = {}, y = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: g,
      fn: w
    } = s[h], {
      x: b,
      y: x,
      data: C,
      reset: _
    } = await w({
      x: u,
      y: f,
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
    u = b ?? u, f = x ?? f, v = {
      ...v,
      [g]: {
        ...v[g],
        ...C
      }
    }, _ && y <= 50 && (y++, typeof _ == "object" && (_.placement && (m = _.placement), _.rects && (l = _.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: u,
      y: f
    } = wv(l, m, c)), h = -1);
  }
  return {
    x: u,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: v
  };
};
async function Dn(e, t) {
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
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = jt(t, e), y = sw(v), g = s[m ? f === "floating" ? "reference" : "floating" : f], w = Uo(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = f === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Uo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: x,
    strategy: c
  }) : b);
  return {
    top: (w.top - _.top + y.top) / C.y,
    bottom: (_.bottom - w.bottom + y.bottom) / C.y,
    left: (w.left - _.left + y.left) / C.x,
    right: (_.right - w.right + y.right) / C.x
  };
}
const zI = (e) => ({
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
      padding: u = 0
    } = jt(e, t) || {};
    if (l == null)
      return {};
    const f = sw(u), m = {
      x: r,
      y: n
    }, v = md(o), y = pd(v), h = await i.getDimensions(l), g = v === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", C = a.reference[y] + a.reference[v] - m[v] - a.floating[y], _ = m[v] - a.reference[v], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let E = S ? S[x] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(S))) && (E = s.floating[x] || a.floating[y]);
    const R = C / 2 - _ / 2, T = E / 2 - h[y] / 2 - 1, D = Ut(f[w], T), O = Ut(f[b], T), F = D, L = E - h[y] - O, N = E / 2 - h[y] / 2 + R, I = Xl(F, N, L), k = !c.arrow && Jr(o) != null && N !== I && a.reference[y] / 2 - (N < F ? D : O) - h[y] / 2 < 0, G = k ? N < F ? N - F : N - L : 0;
    return {
      [v]: m[v] + G,
      data: {
        [v]: I,
        centerOffset: N - I - G,
        ...k && {
          alignmentOffset: G
        }
      },
      reset: k
    };
  }
}), GI = function(e) {
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
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: h = !0,
        ...g
      } = jt(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const w = kt(o), b = Kt(s), x = kt(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = m || (x || !h ? [Yo(s)] : qI(s)), S = y !== "none";
      !m && S && _.push(...WI(s, h, y, C));
      const E = [s, ..._], R = await Dn(t, g), T = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (u && T.push(R[w]), f) {
        const N = FI(o, i, C);
        T.push(R[N[0]], R[N[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: T
      }], !T.every((N) => N <= 0)) {
        var O, F;
        const N = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1, I = E[N];
        if (I)
          return {
            data: {
              index: N,
              overflows: D
            },
            reset: {
              placement: I
            }
          };
        let k = (F = D.filter((G) => G.overflows[0] <= 0).sort((G, B) => G.overflows[1] - B.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!k)
          switch (v) {
            case "bestFit": {
              var L;
              const G = (L = D.filter((B) => {
                if (S) {
                  const $ = Kt(B.placement);
                  return $ === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter(($) => $ > 0).reduce(($, J) => $ + J, 0)]).sort((B, $) => B[1] - $[1])[0]) == null ? void 0 : L[0];
              G && (k = G);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
function xv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Sv(e) {
  return II.some((t) => e[t] >= 0);
}
const YI = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = jt(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await Dn(t, {
            ...o,
            elementContext: "reference"
          }), i = xv(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Sv(i)
            }
          };
        }
        case "escaped": {
          const a = await Dn(t, {
            ...o,
            altBoundary: !0
          }), i = xv(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Sv(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function UI(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = kt(r), s = Jr(r), c = Kt(r) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, f = jt(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: y
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof y == "number" && (v = s === "end" ? y * -1 : y), c ? {
    x: v * u,
    y: m * l
  } : {
    x: m * l,
    y: v * u
  };
}
const KI = function(e) {
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
      } = t, c = await UI(t, e);
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
}, XI = function(e) {
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
              x: w,
              y: b
            } = g;
            return {
              x: w,
              y: b
            };
          }
        },
        ...c
      } = jt(e, t), l = {
        x: r,
        y: n
      }, u = await Dn(t, c), f = Kt(kt(o)), m = fd(f);
      let v = l[m], y = l[f];
      if (a) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = v + u[g], x = v - u[w];
        v = Xl(b, v, x);
      }
      if (i) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = y + u[g], x = y - u[w];
        y = Xl(b, y, x);
      }
      const h = s.fn({
        ...t,
        [m]: v,
        [f]: y
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n,
          enabled: {
            [m]: a,
            [f]: i
          }
        }
      };
    }
  };
}, ZI = function(e) {
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
      } = jt(e, t), u = {
        x: r,
        y: n
      }, f = Kt(o), m = fd(f);
      let v = u[m], y = u[f];
      const h = jt(s, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const x = m === "y" ? "height" : "width", C = a.reference[m] - a.floating[x] + g.mainAxis, _ = a.reference[m] + a.reference[x] - g.mainAxis;
        v < C ? v = C : v > _ && (v = _);
      }
      if (l) {
        var w, b;
        const x = m === "y" ? "width" : "height", C = ["top", "left"].includes(kt(o)), _ = a.reference[f] - a.floating[x] + (C && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (C ? 0 : g.crossAxis), S = a.reference[f] + a.reference[x] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) - (C ? g.crossAxis : 0);
        y < _ ? y = _ : y > S && (y = S);
      }
      return {
        [m]: v,
        [f]: y
      };
    }
  };
}, QI = function(e) {
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
      } = jt(e, t), u = await Dn(t, l), f = kt(o), m = Jr(o), v = Kt(o) === "y", {
        width: y,
        height: h
      } = a.floating;
      let g, w;
      f === "top" || f === "bottom" ? (g = f, w = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = f, g = m === "end" ? "top" : "bottom");
      const b = h - u.top - u.bottom, x = y - u.left - u.right, C = Ut(h - u[g], b), _ = Ut(y - u[w], x), S = !t.middlewareData.shift;
      let E = C, R = _;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (R = x), (n = t.middlewareData.shift) != null && n.enabled.y && (E = b), S && !m) {
        const D = Ue(u.left, 0), O = Ue(u.right, 0), F = Ue(u.top, 0), L = Ue(u.bottom, 0);
        v ? R = y - 2 * (D !== 0 || O !== 0 ? D + O : Ue(u.left, u.right)) : E = h - 2 * (F !== 0 || L !== 0 ? F + L : Ue(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: R,
        availableHeight: E
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
function Oa() {
  return typeof window < "u";
}
function en(e) {
  return cw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ke(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pt(e) {
  var t;
  return (t = (cw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cw(e) {
  return Oa() ? e instanceof Node || e instanceof Ke(e).Node : !1;
}
function ut(e) {
  return Oa() ? e instanceof Element || e instanceof Ke(e).Element : !1;
}
function St(e) {
  return Oa() ? e instanceof HTMLElement || e instanceof Ke(e).HTMLElement : !1;
}
function Cv(e) {
  return !Oa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ke(e).ShadowRoot;
}
function Zn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function JI(e) {
  return ["table", "td", "th"].includes(en(e));
}
function Aa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function hd(e) {
  const t = vd(), r = ut(e) ? dt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function e$(e) {
  let t = Xt(e);
  for (; St(t) && !Br(t); ) {
    if (hd(t))
      return t;
    if (Aa(t))
      return null;
    t = Xt(t);
  }
  return null;
}
function vd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Br(e) {
  return ["html", "body", "#document"].includes(en(e));
}
function dt(e) {
  return Ke(e).getComputedStyle(e);
}
function Da(e) {
  return ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Xt(e) {
  if (en(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Cv(e) && e.host || // Fallback.
    Pt(e)
  );
  return Cv(t) ? t.host : t;
}
function lw(e) {
  const t = Xt(e);
  return Br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : St(t) && Zn(t) ? t : lw(t);
}
function jn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = lw(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ke(o);
  if (a) {
    const s = Ql(i);
    return t.concat(i, i.visualViewport || [], Zn(o) ? o : [], s && r ? jn(s) : []);
  }
  return t.concat(o, jn(o, [], r));
}
function Ql(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function uw(e) {
  const t = dt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = St(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Go(r) !== a || Go(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function gd(e) {
  return ut(e) ? e : e.contextElement;
}
function jr(e) {
  const t = gd(e);
  if (!St(t))
    return wt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = uw(t);
  let i = (a ? Go(r.width) : r.width) / n, s = (a ? Go(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const t$ = /* @__PURE__ */ wt(0);
function dw(e) {
  const t = Ke(e);
  return !vd() || !t.visualViewport ? t$ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function r$(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ke(e) ? !1 : t;
}
function mr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = gd(e);
  let i = wt(1);
  t && (n ? ut(n) && (i = jr(n)) : i = jr(e));
  const s = r$(a, r, n) ? dw(a) : wt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (a) {
    const m = Ke(a), v = n && ut(n) ? Ke(n) : n;
    let y = m, h = Ql(y);
    for (; h && n && v !== y; ) {
      const g = jr(h), w = h.getBoundingClientRect(), b = dt(h), x = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, C = w.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, f *= g.y, c += x, l += C, y = Ke(h), h = Ql(y);
    }
  }
  return Uo({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function yd(e, t) {
  const r = Da(e).scrollLeft;
  return t ? t.left + r : mr(Pt(e)).left + r;
}
function fw(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    yd(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function n$(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = Pt(n), s = t ? Aa(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = wt(1);
  const u = wt(0), f = St(n);
  if ((f || !f && !a) && ((en(n) !== "body" || Zn(i)) && (c = Da(n)), St(n))) {
    const v = mr(n);
    l = jr(n), u.x = v.x + n.clientLeft, u.y = v.y + n.clientTop;
  }
  const m = i && !f && !a ? fw(i, c, !0) : wt(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y + m.y
  };
}
function o$(e) {
  return Array.from(e.getClientRects());
}
function a$(e) {
  const t = Pt(e), r = Da(e), n = e.ownerDocument.body, o = Ue(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Ue(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + yd(e);
  const s = -r.scrollTop;
  return dt(n).direction === "rtl" && (i += Ue(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function i$(e, t) {
  const r = Ke(e), n = Pt(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = vd();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function s$(e, t) {
  const r = mr(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = St(e) ? jr(e) : wt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function _v(e, t, r) {
  let n;
  if (t === "viewport")
    n = i$(e, r);
  else if (t === "document")
    n = a$(Pt(e));
  else if (ut(t))
    n = s$(t, r);
  else {
    const o = dw(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Uo(n);
}
function pw(e, t) {
  const r = Xt(e);
  return r === t || !ut(r) || Br(r) ? !1 : dt(r).position === "fixed" || pw(r, t);
}
function c$(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = jn(e, [], !1).filter((s) => ut(s) && en(s) !== "body"), o = null;
  const a = dt(e).position === "fixed";
  let i = a ? Xt(e) : e;
  for (; ut(i) && !Br(i); ) {
    const s = dt(i), c = hd(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Zn(i) && !c && pw(e, i)) ? n = n.filter((u) => u !== i) : o = s, i = Xt(i);
  }
  return t.set(e, n), n;
}
function l$(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? Aa(t) ? [] : c$(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((l, u) => {
    const f = _v(t, u, o);
    return l.top = Ue(f.top, l.top), l.right = Ut(f.right, l.right), l.bottom = Ut(f.bottom, l.bottom), l.left = Ue(f.left, l.left), l;
  }, _v(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function u$(e) {
  const {
    width: t,
    height: r
  } = uw(e);
  return {
    width: t,
    height: r
  };
}
function d$(e, t, r) {
  const n = St(t), o = Pt(t), a = r === "fixed", i = mr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = wt(0);
  if (n || !n && !a)
    if ((en(t) !== "body" || Zn(o)) && (s = Da(t)), n) {
      const m = mr(t, !0, a, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else o && (c.x = yd(o));
  const l = o && !n && !a ? fw(o, s) : wt(0), u = i.left + s.scrollLeft - c.x - l.x, f = i.top + s.scrollTop - c.y - l.y;
  return {
    x: u,
    y: f,
    width: i.width,
    height: i.height
  };
}
function gl(e) {
  return dt(e).position === "static";
}
function Ev(e, t) {
  if (!St(e) || dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Pt(e) === r && (r = r.ownerDocument.body), r;
}
function mw(e, t) {
  const r = Ke(e);
  if (Aa(e))
    return r;
  if (!St(e)) {
    let o = Xt(e);
    for (; o && !Br(o); ) {
      if (ut(o) && !gl(o))
        return o;
      o = Xt(o);
    }
    return r;
  }
  let n = Ev(e, t);
  for (; n && JI(n) && gl(n); )
    n = Ev(n, t);
  return n && Br(n) && gl(n) && !hd(n) ? r : n || e$(e) || r;
}
const f$ = async function(e) {
  const t = this.getOffsetParent || mw, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: d$(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function p$(e) {
  return dt(e).direction === "rtl";
}
const m$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: n$,
  getDocumentElement: Pt,
  getClippingRect: l$,
  getOffsetParent: mw,
  getElementRects: f$,
  getClientRects: o$,
  getDimensions: u$,
  getScale: jr,
  isElement: ut,
  isRTL: p$
};
function hw(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function h$(e, t) {
  let r = null, n;
  const o = Pt(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: m,
      height: v
    } = l;
    if (s || t(), !m || !v)
      return;
    const y = Co(f), h = Co(o.clientWidth - (u + m)), g = Co(o.clientHeight - (f + v)), w = Co(u), x = {
      rootMargin: -y + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: Ue(0, Ut(1, c)) || 1
    };
    let C = !0;
    function _(S) {
      const E = S[0].intersectionRatio;
      if (E !== c) {
        if (!C)
          return i();
        E ? i(!1, E) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !hw(l, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      r = new IntersectionObserver(_, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(_, x);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function v$(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = gd(e), u = o || a ? [...l ? jn(l) : [], ...jn(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", r, {
      passive: !0
    }), a && w.addEventListener("resize", r);
  });
  const f = l && s ? h$(l, r) : null;
  let m = -1, v = null;
  i && (v = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = v) == null || x.observe(t);
    })), r();
  }), l && !c && v.observe(l), v.observe(t));
  let y, h = c ? mr(e) : null;
  c && g();
  function g() {
    const w = mr(e);
    h && !hw(h, w) && r(), h = w, y = requestAnimationFrame(g);
  }
  return r(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", r), a && b.removeEventListener("resize", r);
    }), f == null || f(), (w = v) == null || w.disconnect(), v = null, c && cancelAnimationFrame(y);
  };
}
const g$ = KI, y$ = XI, b$ = GI, w$ = QI, x$ = YI, Pv = zI, S$ = ZI, C$ = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: m$,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return VI(e, t, {
    ...o,
    platform: a
  });
};
var Mo = typeof document < "u" ? Lv : At;
function Ko(e, t) {
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
        if (!Ko(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ko(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vw(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tv(e, t) {
  const r = vw(e);
  return Math.round(t * r) / r;
}
function yl(e) {
  const t = d.useRef(e);
  return Mo(() => {
    t.current = e;
  }), t;
}
function _$(e) {
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
  } = e, [u, f] = d.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = d.useState(n);
  Ko(m, n) || v(n);
  const [y, h] = d.useState(null), [g, w] = d.useState(null), b = d.useCallback((B) => {
    B !== S.current && (S.current = B, h(B));
  }, []), x = d.useCallback((B) => {
    B !== E.current && (E.current = B, w(B));
  }, []), C = a || y, _ = i || g, S = d.useRef(null), E = d.useRef(null), R = d.useRef(u), T = c != null, D = yl(c), O = yl(o), F = yl(l), L = d.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const B = {
      placement: t,
      strategy: r,
      middleware: m
    };
    O.current && (B.platform = O.current), C$(S.current, E.current, B).then(($) => {
      const J = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      N.current && !Ko(R.current, J) && (R.current = J, Ln.flushSync(() => {
        f(J);
      }));
    });
  }, [m, t, r, O, F]);
  Mo(() => {
    l === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [l]);
  const N = d.useRef(!1);
  Mo(() => (N.current = !0, () => {
    N.current = !1;
  }), []), Mo(() => {
    if (C && (S.current = C), _ && (E.current = _), C && _) {
      if (D.current)
        return D.current(C, _, L);
      L();
    }
  }, [C, _, L, D, T]);
  const I = d.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: b,
    setFloating: x
  }), [b, x]), k = d.useMemo(() => ({
    reference: C,
    floating: _
  }), [C, _]), G = d.useMemo(() => {
    const B = {
      position: r,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return B;
    const $ = Tv(k.floating, u.x), J = Tv(k.floating, u.y);
    return s ? {
      ...B,
      transform: "translate(" + $ + "px, " + J + "px)",
      ...vw(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: $,
      top: J
    };
  }, [r, s, k.floating, u.x, u.y]);
  return d.useMemo(() => ({
    ...u,
    update: L,
    refs: I,
    elements: k,
    floatingStyles: G
  }), [u, L, I, k, G]);
}
const E$ = (e) => {
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
      return n && t(n) ? n.current != null ? Pv({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Pv({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, P$ = (e, t) => ({
  ...g$(e),
  options: [e, t]
}), T$ = (e, t) => ({
  ...y$(e),
  options: [e, t]
}), R$ = (e, t) => ({
  ...S$(e),
  options: [e, t]
}), N$ = (e, t) => ({
  ...b$(e),
  options: [e, t]
}), M$ = (e, t) => ({
  ...w$(e),
  options: [e, t]
}), O$ = (e, t) => ({
  ...x$(e),
  options: [e, t]
}), A$ = (e, t) => ({
  ...E$(e),
  options: [e, t]
});
var D$ = "Arrow", gw = d.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ p.jsx(
    V.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
gw.displayName = D$;
var j$ = gw, bd = "Popper", [yw, Jt] = Ae(bd), [k$, bw] = yw(bd), ww = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = d.useState(null);
  return /* @__PURE__ */ p.jsx(k$, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
ww.displayName = bd;
var xw = "PopperAnchor", Sw = d.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = bw(xw, r), i = d.useRef(null), s = ie(t, i);
    return d.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ p.jsx(V.div, { ...o, ref: s });
  }
);
Sw.displayName = xw;
var wd = "PopperContent", [I$, $$] = yw(wd), Cw = d.forwardRef(
  (e, t) => {
    var W, Q, se, ae, oe, H;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: y,
      ...h
    } = e, g = bw(wd, r), [w, b] = d.useState(null), x = ie(t, (ue) => b(ue)), [C, _] = d.useState(null), S = Na(C), E = (S == null ? void 0 : S.width) ?? 0, R = (S == null ? void 0 : S.height) ?? 0, T = n + (a !== "center" ? "-" + a : ""), D = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, O = Array.isArray(l) ? l : [l], F = O.length > 0, L = {
      padding: D,
      boundary: O.filter(F$),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: F
    }, { refs: N, floatingStyles: I, placement: k, isPositioned: G, middlewareData: B } = _$({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...ue) => v$(...ue, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        P$({ mainAxis: o + R, alignmentAxis: i }),
        c && T$({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? R$() : void 0,
          ...L
        }),
        c && N$({ ...L }),
        M$({
          ...L,
          apply: ({ elements: ue, rects: z, availableWidth: ge, availableHeight: Ee }) => {
            const { width: Te, height: Be } = z.reference, $e = ue.floating.style;
            $e.setProperty("--radix-popper-available-width", `${ge}px`), $e.setProperty("--radix-popper-available-height", `${Ee}px`), $e.setProperty("--radix-popper-anchor-width", `${Te}px`), $e.setProperty("--radix-popper-anchor-height", `${Be}px`);
          }
        }),
        C && A$({ element: C, padding: s }),
        q$({ arrowWidth: E, arrowHeight: R }),
        m && O$({ strategy: "referenceHidden", ...L })
      ]
    }), [$, J] = Pw(k), ee = ve(y);
    Oe(() => {
      G && (ee == null || ee());
    }, [G, ee]);
    const j = (W = B.arrow) == null ? void 0 : W.x, Y = (Q = B.arrow) == null ? void 0 : Q.y, K = ((se = B.arrow) == null ? void 0 : se.centerOffset) !== 0, [U, ne] = d.useState();
    return Oe(() => {
      w && ne(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...I,
          transform: G ? I.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U,
          "--radix-popper-transform-origin": [
            (ae = B.transformOrigin) == null ? void 0 : ae.x,
            (oe = B.transformOrigin) == null ? void 0 : oe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = B.hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          I$,
          {
            scope: r,
            placedSide: $,
            onArrowChange: _,
            arrowX: j,
            arrowY: Y,
            shouldHideArrow: K,
            children: /* @__PURE__ */ p.jsx(
              V.div,
              {
                "data-side": $,
                "data-align": J,
                ...h,
                ref: x,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Cw.displayName = wd;
var _w = "PopperArrow", L$ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ew = d.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = $$(_w, n), i = L$[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
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
        children: /* @__PURE__ */ p.jsx(
          j$,
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
Ew.displayName = _w;
function F$(e) {
  return e !== null;
}
var q$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: r, rects: n, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = Pw(r), f = { start: "0%", center: "50%", end: "100%" }[u], m = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + s / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let y = "", h = "";
    return l === "bottom" ? (y = i ? f : `${m}px`, h = `${-c}px`) : l === "top" ? (y = i ? f : `${m}px`, h = `${n.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, h = i ? f : `${v}px`) : l === "left" && (y = `${n.floating.width + c}px`, h = i ? f : `${v}px`), { data: { x: y, y: h } };
  }
});
function Pw(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Qn = ww, Jn = Sw, ja = Cw, ka = Ew, xd = "Popover", [Tw, AW] = Ae(xd, [
  Jt
]), eo = Jt(), [B$, er] = Tw(xd), Rw = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = eo(t), c = d.useRef(null), [l, u] = d.useState(!1), [f = !1, m] = je({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ p.jsx(Qn, { ...s, children: /* @__PURE__ */ p.jsx(
    B$,
    {
      scope: t,
      contentId: Ne(),
      triggerRef: c,
      open: f,
      onOpenChange: m,
      onOpenToggle: d.useCallback(() => m((v) => !v), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: d.useCallback(() => u(!0), []),
      onCustomAnchorRemove: d.useCallback(() => u(!1), []),
      modal: i,
      children: r
    }
  ) });
};
Rw.displayName = xd;
var Nw = "PopoverAnchor", W$ = d.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = er(Nw, r), a = eo(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return d.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ p.jsx(Jn, { ...a, ...n, ref: t });
  }
);
W$.displayName = Nw;
var Mw = "PopoverTrigger", Ow = d.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = er(Mw, r), a = eo(r), i = ie(t, o.triggerRef), s = /* @__PURE__ */ p.jsx(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Iw(o.open),
        ...n,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ p.jsx(Jn, { asChild: !0, ...a, children: s });
  }
);
Ow.displayName = Mw;
var Sd = "PopoverPortal", [H$, V$] = Tw(Sd, {
  forceMount: void 0
}), Aw = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = er(Sd, t);
  return /* @__PURE__ */ p.jsx(H$, { scope: t, forceMount: r, children: /* @__PURE__ */ p.jsx(Pe, { present: r || a.open, children: /* @__PURE__ */ p.jsx(gr, { asChild: !0, container: o, children: n }) }) });
};
Aw.displayName = Sd;
var Wr = "PopoverContent", Dw = d.forwardRef(
  (e, t) => {
    const r = V$(Wr, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = er(Wr, e.__scopePopover);
    return /* @__PURE__ */ p.jsx(Pe, { present: n || a.open, children: a.modal ? /* @__PURE__ */ p.jsx(z$, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(G$, { ...o, ref: t }) });
  }
);
Dw.displayName = Wr;
var z$ = d.forwardRef(
  (e, t) => {
    const r = er(Wr, e.__scopePopover), n = d.useRef(null), o = ie(t, n), a = d.useRef(!1);
    return d.useEffect(() => {
      const i = n.current;
      if (i) return pa(i);
    }, []), /* @__PURE__ */ p.jsx(Bn, { as: xt, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
      jw,
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
), G$ = d.forwardRef(
  (e, t) => {
    const r = er(Wr, e.__scopePopover), n = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      jw,
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
), jw = d.forwardRef(
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
      onInteractOutside: u,
      ...f
    } = e, m = er(Wr, r), v = eo(r);
    return da(), /* @__PURE__ */ p.jsx(
      qn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p.jsx(
          Zt,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: u,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ p.jsx(
              ja,
              {
                "data-state": Iw(m.open),
                role: "dialog",
                id: m.contentId,
                ...v,
                ...f,
                ref: t,
                style: {
                  ...f.style,
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
), kw = "PopoverClose", Y$ = d.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = er(kw, r);
    return /* @__PURE__ */ p.jsx(
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
Y$.displayName = kw;
var U$ = "PopoverArrow", K$ = d.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = eo(r);
    return /* @__PURE__ */ p.jsx(ka, { ...o, ...n, ref: t });
  }
);
K$.displayName = U$;
function Iw(e) {
  return e ? "open" : "closed";
}
var X$ = Rw, Z$ = Ow, Q$ = Aw, $w = Dw;
const Cd = X$, _d = Z$, Ia = d.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ p.jsx(Q$, { children: /* @__PURE__ */ p.jsx(
  $w,
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
Ia.displayName = $w.displayName;
function DW({ value: e, onChange: t }) {
  const [r, n] = d.useState(e);
  function o(a) {
    n(a), t == null || t(a);
  }
  return /* @__PURE__ */ p.jsxs(Cd, { children: [
    /* @__PURE__ */ p.jsx(_d, { asChild: !0, children: /* @__PURE__ */ p.jsxs(
      Zr,
      {
        variant: "outline",
        className: M(
          "w-full justify-start text-left font-normal",
          !r && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ p.jsx(ig, { className: "mr-2" }),
          r ? va(r, "PPP", { locale: Dr }) : /* @__PURE__ */ p.jsx("span", { children: "Selecione uma data" })
        ]
      }
    ) }),
    /* @__PURE__ */ p.jsx(Ia, { className: "w-auto p-0", children: /* @__PURE__ */ p.jsx(
      Ky,
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
function J$(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function eL(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function tL(e) {
  return /^[0-5][0-9]$/.test(e);
}
function $a(e, { max: t, min: r = 0, loop: n = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (n ? (o > t && (o = r), o < r && (o = t)) : (o > t && (o = t), o < r && (o = r)), o.toString().padStart(2, "0"));
}
function Lw(e) {
  return J$(e) ? e : $a(e, { max: 23 });
}
function Fw(e) {
  return eL(e) ? e : $a(e, { min: 1, max: 12 });
}
function Xo(e) {
  return tL(e) ? e : $a(e, { max: 59 });
}
function Ed(e, { min: t, max: r, step: n }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += n, $a(String(o), { min: t, max: r, loop: !0 }));
}
function rL(e, t) {
  return Ed(e, { min: 0, max: 23, step: t });
}
function nL(e, t) {
  return Ed(e, { min: 1, max: 12, step: t });
}
function Rv(e, t) {
  return Ed(e, { min: 0, max: 59, step: t });
}
function oL(e, t) {
  const r = Xo(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function aL(e, t) {
  const r = Xo(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function iL(e, t) {
  const r = Lw(t);
  return e.setHours(parseInt(r, 10)), e;
}
function sL(e, t, r) {
  const n = parseInt(Fw(t), 10), o = uL(n, r);
  return e.setHours(o), e;
}
function Jl(e, t, r, n) {
  switch (r) {
    case "minutes":
      return oL(e, t);
    case "seconds":
      return aL(e, t);
    case "hours":
      return iL(e, t);
    case "12hours":
      return n ? sL(e, t, n) : e;
    default:
      return e;
  }
}
function cL(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Xo(String(e.getMinutes()));
    case "seconds":
      return Xo(String(e.getSeconds()));
    case "hours":
      return Lw(String(e.getHours()));
    case "12hours":
      return Fw(String(qw(e.getHours())));
    default:
      return "00";
  }
}
function lL(e, t, r) {
  switch (r) {
    case "minutes":
      return Rv(e, t);
    case "seconds":
      return Rv(e, t);
    case "hours":
      return rL(e, t);
    case "12hours":
      return nL(e, t);
    default:
      return "00";
  }
}
function uL(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function qw(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function dL(e) {
  return Array.from({ length: 12 }, (t, r) => ({
    value: r,
    label: va(new Date(2021, r), "MMMM", { locale: e })
  }));
}
function fL(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (r, n) => ({
    value: t.getFullYear() - e + n,
    label: (t.getFullYear() - e + n).toString()
  }));
}
function Bw({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  yearRange: n = 50,
  ...o
}) {
  const a = d.useMemo(() => {
    let l = Dr;
    const { options: u, localize: f, formatLong: m } = o.locale || {};
    return u && f && m && (l = {
      options: u,
      localize: f,
      formatLong: m
    }), dL(l);
  }, []), i = d.useMemo(() => fL(n), []), s = () => {
    const l = /* @__PURE__ */ new Date(), u = new Date(l.getFullYear() - n, 0, 1);
    return o.month ? o.month.getMonth() === u.getMonth() && o.month.getFullYear() === u.getFullYear() : !1;
  }, c = () => {
    const l = /* @__PURE__ */ new Date(), u = new Date(l.getFullYear() + n, 11, 31);
    return o.month ? o.month.getMonth() === u.getMonth() && o.month.getFullYear() === u.getFullYear() : !1;
  };
  return /* @__PURE__ */ p.jsx(
    Uy,
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
          zt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-5 top-5",
          s() && "pointer-events-none"
        ),
        button_next: M(
          zt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-5 top-5",
          c() && "pointer-events-none"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: M("flex", o.showWeekNumber && "justify-end"),
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
        day_button: M(
          zt({ variant: "ghost" }),
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
        Chevron: ({ ...l }) => l.orientation === "left" ? /* @__PURE__ */ p.jsx(sg, { className: "h-4 w-4" }) : /* @__PURE__ */ p.jsx(la, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: l }) => /* @__PURE__ */ p.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ p.jsxs(
            fu,
            {
              defaultValue: l.date.getMonth().toString(),
              onValueChange: (u) => {
                var m;
                const f = new Date(l.date);
                f.setMonth(Number.parseInt(u, 10)), (m = o.onMonthChange) == null || m.call(o, f);
              },
              children: [
                /* @__PURE__ */ p.jsx(na, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ p.jsx(pu, {}) }),
                /* @__PURE__ */ p.jsx(oa, { children: a.map((u) => /* @__PURE__ */ p.jsx(
                  $n,
                  {
                    value: u.value.toString(),
                    children: u.label
                  },
                  u.value
                )) })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            fu,
            {
              defaultValue: l.date.getFullYear().toString(),
              onValueChange: (u) => {
                var m;
                const f = new Date(l.date);
                f.setFullYear(Number.parseInt(u, 10)), (m = o.onMonthChange) == null || m.call(o, f);
              },
              children: [
                /* @__PURE__ */ p.jsx(na, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ p.jsx(pu, {}) }),
                /* @__PURE__ */ p.jsx(oa, { children: i.map((u) => /* @__PURE__ */ p.jsx($n, { value: u.value.toString(), children: u.label }, u.value)) })
              ]
            }
          )
        ] })
      },
      ...o
    }
  );
}
Bw.displayName = "Calendar";
const Ww = d.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: n, onLeftFocus: o, onRightFocus: a }, i) => {
    const s = (l) => {
      l.key === "ArrowRight" && (a == null || a()), l.key === "ArrowLeft" && (o == null || o());
    }, c = (l) => {
      if (t == null || t(l), r) {
        const u = new Date(r), f = qw(r.getHours());
        n == null || n(
          Jl(
            u,
            f.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ p.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ p.jsxs(
      fu,
      {
        defaultValue: e,
        onValueChange: (l) => c(l),
        children: [
          /* @__PURE__ */ p.jsx(
            na,
            {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: /* @__PURE__ */ p.jsx(pu, {})
            }
          ),
          /* @__PURE__ */ p.jsxs(oa, { children: [
            /* @__PURE__ */ p.jsx($n, { value: "AM", children: "AM" }),
            /* @__PURE__ */ p.jsx($n, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Ww.displayName = "TimePeriodSelect";
const Oo = d.forwardRef(
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
    period: u,
    onLeftFocus: f,
    onRightFocus: m,
    ...v
  }, y) => {
    const [h, g] = d.useState(!1), [w, b] = d.useState("0");
    d.useEffect(() => {
      if (h) {
        const S = setTimeout(() => {
          g(!1);
        }, 2e3);
        return () => clearTimeout(S);
      }
    }, [h]);
    const x = d.useMemo(() => cL(a, l), [a, l]), C = (S) => l === "12hours" && h && x.slice(1, 2) === "1" && w === "0" ? `0${S}` : h ? x.slice(1, 2) + S : `0${S}`, _ = (S) => {
      if (S.key !== "Tab") {
        if (S.preventDefault(), S.key === "ArrowRight" && (m == null || m()), S.key === "ArrowLeft" && (f == null || f()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const E = S.key === "ArrowUp" ? 1 : -1, R = lL(x, E, l);
          h && g(!1);
          const T = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(Jl(T, R, l, u));
        }
        if (S.key >= "0" && S.key <= "9") {
          l === "12hours" && b(S.key);
          const E = C(S.key);
          h && (m == null || m()), g((T) => !T);
          const R = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(Jl(R, E, l, u));
        }
      }
    };
    return /* @__PURE__ */ p.jsx(
      kd,
      {
        ref: y,
        id: n || l,
        name: o || l,
        className: M(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: r || x,
        onChange: (S) => {
          S.preventDefault(), s == null || s(S);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (S) => {
          c == null || c(S), _(S);
        },
        ...v
      }
    );
  }
);
Oo.displayName = "TimePickerInput";
const Hw = d.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: n = "second" }, o) => {
    const a = d.useRef(null), i = d.useRef(null), s = d.useRef(null), c = d.useRef(null), [l, u] = d.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return wu(
      o,
      () => ({
        minuteRef: a.current,
        hourRef: i.current,
        secondRef: s.current,
        periodRef: c.current
      }),
      [a, i, s]
    ), /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ p.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ p.jsx(o0, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ p.jsx(
        Oo,
        {
          picker: r === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: i,
          period: l,
          onRightFocus: () => {
            var f;
            return (f = a == null ? void 0 : a.current) == null ? void 0 : f.focus();
          }
        }
      ),
      (n === "minute" || n === "second") && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        ":",
        /* @__PURE__ */ p.jsx(
          Oo,
          {
            picker: "minutes",
            date: e,
            onDateChange: t,
            ref: a,
            onLeftFocus: () => {
              var f;
              return (f = i == null ? void 0 : i.current) == null ? void 0 : f.focus();
            },
            onRightFocus: () => {
              var f;
              return (f = s == null ? void 0 : s.current) == null ? void 0 : f.focus();
            }
          }
        )
      ] }),
      n === "second" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        ":",
        /* @__PURE__ */ p.jsx(
          Oo,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: s,
            onLeftFocus: () => {
              var f;
              return (f = a == null ? void 0 : a.current) == null ? void 0 : f.focus();
            },
            onRightFocus: () => {
              var f;
              return (f = c == null ? void 0 : c.current) == null ? void 0 : f.focus();
            }
          }
        )
      ] }),
      r === 12 && /* @__PURE__ */ p.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ p.jsx(
        Ww,
        {
          period: l,
          setPeriod: u,
          date: e,
          onDateChange: (f) => {
            t == null || t(f), f && (f == null ? void 0 : f.getHours()) >= 12 ? u("PM") : u("AM");
          },
          ref: c,
          onLeftFocus: () => {
            var f;
            return (f = s == null ? void 0 : s.current) == null ? void 0 : f.focus();
          }
        }
      ) })
    ] });
  }
);
Hw.displayName = "TimePicker";
const pL = d.forwardRef(
  ({
    locale: e = Dr,
    defaultPopupValue: t = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    value: r,
    onChange: n,
    hourCycle: o = 24,
    yearRange: a = 50,
    disabled: i = !1,
    displayFormat: s,
    granularity: c = "second",
    placeholder: l = "Selecione...",
    className: u,
    ...f
  }, m) => {
    const [v, y] = d.useState(r ?? t), h = Ot(null), [g, w] = d.useState(
      r
    ), b = (T) => {
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
      const O = (T.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), F = oR(t, {
        days: Math.ceil(O)
      });
      F.setHours(
        (v == null ? void 0 : v.getHours()) ?? 0,
        (v == null ? void 0 : v.getMinutes()) ?? 0,
        (v == null ? void 0 : v.getSeconds()) ?? 0
      ), n == null || n(F), y(F);
    };
    At(() => {
      r || w(void 0);
    }, [r]);
    const x = (T) => {
      T && (n == null || n(T), y(T), w(T));
    };
    wu(
      m,
      () => ({
        ...h.current,
        value: g
      }),
      [g]
    );
    const C = {
      hour24: (s == null ? void 0 : s.hour24) ?? `PPP HH:mm${!c || c === "second" ? ":ss" : ""}`,
      hour12: (s == null ? void 0 : s.hour12) ?? `PP hh:mm${!c || c === "second" ? ":ss" : ""} b`
    };
    let _ = Dr;
    const { options: S, localize: E, formatLong: R } = e;
    return S && E && R && (_ = {
      ...Dr,
      options: S,
      localize: E,
      formatLong: R
    }), /* @__PURE__ */ p.jsxs(Cd, { children: [
      /* @__PURE__ */ p.jsx(_d, { asChild: !0, disabled: i, children: /* @__PURE__ */ p.jsxs(
        Zr,
        {
          variant: "outline",
          className: M(
            "w-full justify-start text-left font-normal",
            !g && "text-muted-foreground",
            u
          ),
          ref: h,
          children: [
            /* @__PURE__ */ p.jsx(ig, { className: "mr-2 h-4 w-4" }),
            /* @__PURE__ */ p.jsx("span", { className: "truncate block", title: l, children: g ? va(
              g,
              o === 24 ? C.hour24 : C.hour12,
              {
                locale: _
              }
            ) : /* @__PURE__ */ p.jsx("span", { children: l }) })
          ]
        }
      ) }),
      /* @__PURE__ */ p.jsxs(Ia, { className: "w-auto p-0", children: [
        /* @__PURE__ */ p.jsx(
          Bw,
          {
            mode: "single",
            selected: g,
            month: v,
            onSelect: (T) => {
              T && (T.setHours(
                (v == null ? void 0 : v.getHours()) ?? 0,
                (v == null ? void 0 : v.getMinutes()) ?? 0,
                (v == null ? void 0 : v.getSeconds()) ?? 0
              ), x(T));
            },
            onMonthChange: b,
            yearRange: a,
            locale: e,
            ...f
          }
        ),
        c !== "day" && /* @__PURE__ */ p.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ p.jsx(
          Hw,
          {
            onChange: (T) => {
              n == null || n(T), w(T), T && y(T);
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
pL.displayName = "DateTimePicker";
const mL = ma, jW = ku, hL = ha, kW = Xr, Vw = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ur,
  {
    ref: r,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Vw.displayName = Ur.displayName;
const zw = d.forwardRef(({ className: e, onClose: t, ...r }, n) => /* @__PURE__ */ p.jsxs(hL, { children: [
  /* @__PURE__ */ p.jsx(Vw, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ p.jsxs(
    Kr,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(
          Xr,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ p.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ p.jsx(ua, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
zw.displayName = Kr.displayName;
const vL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
vL.displayName = "DialogHeader";
const gL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
gL.displayName = "DialogFooter";
const yL = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Wn,
  {
    ref: r,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
yL.displayName = Wn.displayName;
const bL = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Hn,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
bL.displayName = Hn.displayName;
var bl = "rovingFocusGroup.onEntryFocus", wL = { bubbles: !1, cancelable: !0 }, La = "RovingFocusGroup", [eu, Gw, xL] = vr(La), [SL, tr] = Ae(
  La,
  [xL]
), [CL, _L] = SL(La), Yw = d.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(eu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(eu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(EL, { ...e, ref: t }) }) })
);
Yw.displayName = La;
var EL = d.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...f
  } = e, m = d.useRef(null), v = ie(t, m), y = It(a), [h = null, g] = je({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [w, b] = d.useState(!1), x = ve(l), C = Gw(r), _ = d.useRef(!1), [S, E] = d.useState(0);
  return d.useEffect(() => {
    const R = m.current;
    if (R)
      return R.addEventListener(bl, x), () => R.removeEventListener(bl, x);
  }, [x]), /* @__PURE__ */ p.jsx(
    CL,
    {
      scope: r,
      orientation: n,
      dir: y,
      loop: o,
      currentTabStopId: h,
      onItemFocus: d.useCallback(
        (R) => g(R),
        [g]
      ),
      onItemShiftTab: d.useCallback(() => b(!0), []),
      onFocusableItemAdd: d.useCallback(
        () => E((R) => R + 1),
        []
      ),
      onFocusableItemRemove: d.useCallback(
        () => E((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        V.div,
        {
          tabIndex: w || S === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: q(e.onFocus, (R) => {
            const T = !_.current;
            if (R.target === R.currentTarget && T && !w) {
              const D = new CustomEvent(bl, wL);
              if (R.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const O = C().filter((k) => k.focusable), F = O.find((k) => k.active), L = O.find((k) => k.id === h), I = [F, L, ...O].filter(
                  Boolean
                ).map((k) => k.ref.current);
                Xw(I, u);
              }
            }
            _.current = !1;
          }),
          onBlur: q(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Uw = "RovingFocusGroupItem", Kw = d.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      ...i
    } = e, s = Ne(), c = a || s, l = _L(Uw, r), u = l.currentTabStopId === c, f = Gw(r), { onFocusableItemAdd: m, onFocusableItemRemove: v } = l;
    return d.useEffect(() => {
      if (n)
        return m(), () => v();
    }, [n, m, v]), /* @__PURE__ */ p.jsx(
      eu.ItemSlot,
      {
        scope: r,
        id: c,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          V.span,
          {
            tabIndex: u ? 0 : -1,
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
              const h = RL(y, l.orientation, l.dir);
              if (h !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let w = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (h === "last") w.reverse();
                else if (h === "prev" || h === "next") {
                  h === "prev" && w.reverse();
                  const b = w.indexOf(y.currentTarget);
                  w = l.loop ? NL(w, b + 1) : w.slice(b + 1);
                }
                setTimeout(() => Xw(w));
              }
            })
          }
        )
      }
    );
  }
);
Kw.displayName = Uw;
var PL = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function TL(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function RL(e, t, r) {
  const n = TL(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return PL[n];
}
function Xw(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function NL(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Fa = Yw, qa = Kw, tu = ["Enter", " "], ML = ["ArrowDown", "PageUp", "Home"], Zw = ["ArrowUp", "PageDown", "End"], OL = [...ML, ...Zw], AL = {
  ltr: [...tu, "ArrowRight"],
  rtl: [...tu, "ArrowLeft"]
}, DL = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, to = "Menu", [kn, jL, kL] = vr(to), [xr, Qw] = Ae(to, [
  kL,
  Jt,
  tr
]), ro = Jt(), Jw = tr(), [ex, rr] = xr(to), [IL, no] = xr(to), tx = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = ro(t), [c, l] = d.useState(null), u = d.useRef(!1), f = ve(a), m = It(o);
  return d.useEffect(() => {
    const v = () => {
      u.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => u.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p.jsx(Qn, { ...s, children: /* @__PURE__ */ p.jsx(
    ex,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ p.jsx(
        IL,
        {
          scope: t,
          onClose: d.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: u,
          dir: m,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
tx.displayName = to;
var $L = "MenuAnchor", Pd = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = ro(r);
    return /* @__PURE__ */ p.jsx(Jn, { ...o, ...n, ref: t });
  }
);
Pd.displayName = $L;
var Td = "MenuPortal", [LL, rx] = xr(Td, {
  forceMount: void 0
}), nx = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = rr(Td, t);
  return /* @__PURE__ */ p.jsx(LL, { scope: t, forceMount: r, children: /* @__PURE__ */ p.jsx(Pe, { present: r || a.open, children: /* @__PURE__ */ p.jsx(gr, { asChild: !0, container: o, children: n }) }) });
};
nx.displayName = Td;
var tt = "MenuContent", [FL, Rd] = xr(tt), ox = d.forwardRef(
  (e, t) => {
    const r = rx(tt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = rr(tt, e.__scopeMenu), i = no(tt, e.__scopeMenu);
    return /* @__PURE__ */ p.jsx(kn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(Pe, { present: n || a.open, children: /* @__PURE__ */ p.jsx(kn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ p.jsx(qL, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(BL, { ...o, ref: t }) }) }) });
  }
), qL = d.forwardRef(
  (e, t) => {
    const r = rr(tt, e.__scopeMenu), n = d.useRef(null), o = ie(t, n);
    return d.useEffect(() => {
      const a = n.current;
      if (a) return pa(a);
    }, []), /* @__PURE__ */ p.jsx(
      Nd,
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
), BL = d.forwardRef((e, t) => {
  const r = rr(tt, e.__scopeMenu);
  return /* @__PURE__ */ p.jsx(
    Nd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), Nd = d.forwardRef(
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
      onPointerDownOutside: u,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: v,
      disableOutsideScroll: y,
      ...h
    } = e, g = rr(tt, r), w = no(tt, r), b = ro(r), x = Jw(r), C = jL(r), [_, S] = d.useState(null), E = d.useRef(null), R = ie(t, E, g.onContentChange), T = d.useRef(0), D = d.useRef(""), O = d.useRef(0), F = d.useRef(null), L = d.useRef("right"), N = d.useRef(0), I = y ? Bn : d.Fragment, k = y ? { as: xt, allowPinchZoom: !0 } : void 0, G = ($) => {
      var W, Q;
      const J = D.current + $, ee = C().filter((se) => !se.disabled), j = document.activeElement, Y = (W = ee.find((se) => se.ref.current === j)) == null ? void 0 : W.textValue, K = ee.map((se) => se.textValue), U = JL(K, J, Y), ne = (Q = ee.find((se) => se.textValue === U)) == null ? void 0 : Q.ref.current;
      (function se(ae) {
        D.current = ae, window.clearTimeout(T.current), ae !== "" && (T.current = window.setTimeout(() => se(""), 1e3));
      })(J), ne && setTimeout(() => ne.focus());
    };
    d.useEffect(() => () => window.clearTimeout(T.current), []), da();
    const B = d.useCallback(($) => {
      var ee, j;
      return L.current === ((ee = F.current) == null ? void 0 : ee.side) && tF($, (j = F.current) == null ? void 0 : j.area);
    }, []);
    return /* @__PURE__ */ p.jsx(
      FL,
      {
        scope: r,
        searchRef: D,
        onItemEnter: d.useCallback(
          ($) => {
            B($) && $.preventDefault();
          },
          [B]
        ),
        onItemLeave: d.useCallback(
          ($) => {
            var J;
            B($) || ((J = E.current) == null || J.focus(), S(null));
          },
          [B]
        ),
        onTriggerLeave: d.useCallback(
          ($) => {
            B($) && $.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: d.useCallback(($) => {
          F.current = $;
        }, []),
        children: /* @__PURE__ */ p.jsx(I, { ...k, children: /* @__PURE__ */ p.jsx(
          qn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(a, ($) => {
              var J;
              $.preventDefault(), (J = E.current) == null || J.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ p.jsx(
              Zt,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: v,
                children: /* @__PURE__ */ p.jsx(
                  Fa,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: q(c, ($) => {
                      w.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p.jsx(
                      ja,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": xx(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...h,
                        ref: R,
                        style: { outline: "none", ...h.style },
                        onKeyDown: q(h.onKeyDown, ($) => {
                          const ee = $.target.closest("[data-radix-menu-content]") === $.currentTarget, j = $.ctrlKey || $.altKey || $.metaKey, Y = $.key.length === 1;
                          ee && ($.key === "Tab" && $.preventDefault(), !j && Y && G($.key));
                          const K = E.current;
                          if ($.target !== K || !OL.includes($.key)) return;
                          $.preventDefault();
                          const ne = C().filter((W) => !W.disabled).map((W) => W.ref.current);
                          Zw.includes($.key) && ne.reverse(), ZL(ne);
                        }),
                        onBlur: q(e.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(T.current), D.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          In(($) => {
                            const J = $.target, ee = N.current !== $.clientX;
                            if ($.currentTarget.contains(J) && ee) {
                              const j = $.clientX > N.current ? "right" : "left";
                              L.current = j, N.current = $.clientX;
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
ox.displayName = tt;
var WL = "MenuGroup", Md = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ p.jsx(V.div, { role: "group", ...n, ref: t });
  }
);
Md.displayName = WL;
var HL = "MenuLabel", ax = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ p.jsx(V.div, { ...n, ref: t });
  }
);
ax.displayName = HL;
var Zo = "MenuItem", Nv = "menu.itemSelect", Ba = d.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = d.useRef(null), i = no(Zo, e.__scopeMenu), s = Rd(Zo, e.__scopeMenu), c = ie(t, a), l = d.useRef(!1), u = () => {
      const f = a.current;
      if (!r && f) {
        const m = new CustomEvent(Nv, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Nv, (v) => n == null ? void 0 : n(v), { once: !0 }), wn(f, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ p.jsx(
      ix,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: q(e.onClick, u),
        onPointerDown: (f) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, f), l.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (f) => {
          var m;
          l.current || (m = f.currentTarget) == null || m.click();
        }),
        onKeyDown: q(e.onKeyDown, (f) => {
          const m = s.searchRef.current !== "";
          r || m && f.key === " " || tu.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Ba.displayName = Zo;
var ix = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = Rd(Zo, r), s = Jw(r), c = d.useRef(null), l = ie(t, c), [u, f] = d.useState(!1), [m, v] = d.useState("");
    return d.useEffect(() => {
      const y = c.current;
      y && v((y.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ p.jsx(
      kn.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ p.jsx(qa, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ p.jsx(
          V.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: q(
              e.onPointerMove,
              In((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              In((y) => i.onItemLeave(y))
            ),
            onFocus: q(e.onFocus, () => f(!0)),
            onBlur: q(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), VL = "MenuCheckboxItem", sx = d.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(fx, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ p.jsx(
      Ba,
      {
        role: "menuitemcheckbox",
        "aria-checked": Qo(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": Dd(r),
        onSelect: q(
          o.onSelect,
          () => n == null ? void 0 : n(Qo(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
sx.displayName = VL;
var cx = "MenuRadioGroup", [zL, GL] = xr(
  cx,
  { value: void 0, onValueChange: () => {
  } }
), lx = d.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = ve(n);
    return /* @__PURE__ */ p.jsx(zL, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ p.jsx(Md, { ...o, ref: t }) });
  }
);
lx.displayName = cx;
var ux = "MenuRadioItem", dx = d.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = GL(ux, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ p.jsx(fx, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ p.jsx(
      Ba,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": Dd(a),
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
dx.displayName = ux;
var Od = "MenuItemIndicator", [fx, YL] = xr(
  Od,
  { checked: !1 }
), px = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = YL(Od, r);
    return /* @__PURE__ */ p.jsx(
      Pe,
      {
        present: n || Qo(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p.jsx(
          V.span,
          {
            ...o,
            ref: t,
            "data-state": Dd(a.checked)
          }
        )
      }
    );
  }
);
px.displayName = Od;
var UL = "MenuSeparator", mx = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ p.jsx(
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
mx.displayName = UL;
var KL = "MenuArrow", hx = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = ro(r);
    return /* @__PURE__ */ p.jsx(ka, { ...o, ...n, ref: t });
  }
);
hx.displayName = KL;
var Ad = "MenuSub", [XL, vx] = xr(Ad), gx = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = rr(Ad, t), i = ro(t), [s, c] = d.useState(null), [l, u] = d.useState(null), f = ve(o);
  return d.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ p.jsx(Qn, { ...i, children: /* @__PURE__ */ p.jsx(
    ex,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ p.jsx(
        XL,
        {
          scope: t,
          contentId: Ne(),
          triggerId: Ne(),
          trigger: s,
          onTriggerChange: c,
          children: r
        }
      )
    }
  ) });
};
gx.displayName = Ad;
var hn = "MenuSubTrigger", yx = d.forwardRef(
  (e, t) => {
    const r = rr(hn, e.__scopeMenu), n = no(hn, e.__scopeMenu), o = vx(hn, e.__scopeMenu), a = Rd(hn, e.__scopeMenu), i = d.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = d.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return d.useEffect(() => u, [u]), d.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ p.jsx(Pd, { asChild: !0, ...l, children: /* @__PURE__ */ p.jsx(
      ix,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": xx(r.open),
        ...e,
        ref: Fn(t, o.onTriggerChange),
        onClick: (f) => {
          var m;
          (m = e.onClick) == null || m.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          In((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          In((f) => {
            var v, y;
            u();
            const m = (v = r.content) == null ? void 0 : v.getBoundingClientRect();
            if (m) {
              const h = (y = r.content) == null ? void 0 : y.dataset.side, g = h === "right", w = g ? -5 : 5, b = m[g ? "left" : "right"], x = m[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + w, y: f.clientY },
                  { x: b, y: m.top },
                  { x, y: m.top },
                  { x, y: m.bottom },
                  { x: b, y: m.bottom }
                ],
                side: h
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: q(e.onKeyDown, (f) => {
          var v;
          const m = a.searchRef.current !== "";
          e.disabled || m && f.key === " " || AL[n.dir].includes(f.key) && (r.onOpenChange(!0), (v = r.content) == null || v.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
yx.displayName = hn;
var bx = "MenuSubContent", wx = d.forwardRef(
  (e, t) => {
    const r = rx(tt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = rr(tt, e.__scopeMenu), i = no(tt, e.__scopeMenu), s = vx(bx, e.__scopeMenu), c = d.useRef(null), l = ie(t, c);
    return /* @__PURE__ */ p.jsx(kn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(Pe, { present: n || a.open, children: /* @__PURE__ */ p.jsx(kn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(
      Nd,
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
        onOpenAutoFocus: (u) => {
          var f;
          i.isUsingKeyboardRef.current && ((f = c.current) == null || f.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: q(e.onFocusOutside, (u) => {
          u.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (u) => {
          i.onClose(), u.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (u) => {
          var v;
          const f = u.currentTarget.contains(u.target), m = DL[i.dir].includes(u.key);
          f && m && (a.onOpenChange(!1), (v = s.trigger) == null || v.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
wx.displayName = bx;
function xx(e) {
  return e ? "open" : "closed";
}
function Qo(e) {
  return e === "indeterminate";
}
function Dd(e) {
  return Qo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ZL(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function QL(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function JL(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = QL(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function eF(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > n != u > n && r < (l - s) * (n - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function tF(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return eF(r, t);
}
function In(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var rF = tx, nF = Pd, oF = nx, aF = ox, iF = Md, sF = ax, cF = Ba, lF = sx, uF = lx, dF = dx, fF = px, pF = mx, mF = hx, hF = gx, vF = yx, gF = wx, jd = "DropdownMenu", [yF, IW] = Ae(
  jd,
  [Qw]
), qe = Qw(), [bF, Sx] = yF(jd), Cx = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = qe(t), l = d.useRef(null), [u = !1, f] = je({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ p.jsx(
    bF,
    {
      scope: t,
      triggerId: Ne(),
      triggerRef: l,
      contentId: Ne(),
      open: u,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: /* @__PURE__ */ p.jsx(rF, { ...c, open: u, onOpenChange: f, dir: n, modal: s, children: r })
    }
  );
};
Cx.displayName = jd;
var _x = "DropdownMenuTrigger", Ex = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = Sx(_x, r), i = qe(r);
    return /* @__PURE__ */ p.jsx(nF, { asChild: !0, ...i, children: /* @__PURE__ */ p.jsx(
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
        ref: Fn(t, a.triggerRef),
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
Ex.displayName = _x;
var wF = "DropdownMenuPortal", Px = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = qe(t);
  return /* @__PURE__ */ p.jsx(oF, { ...n, ...r });
};
Px.displayName = wF;
var Tx = "DropdownMenuContent", Rx = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Sx(Tx, r), a = qe(r), i = d.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      aF,
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
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
          (!o.modal || u) && (i.current = !0);
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
Rx.displayName = Tx;
var xF = "DropdownMenuGroup", Nx = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
    return /* @__PURE__ */ p.jsx(iF, { ...o, ...n, ref: t });
  }
);
Nx.displayName = xF;
var SF = "DropdownMenuLabel", Mx = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
    return /* @__PURE__ */ p.jsx(sF, { ...o, ...n, ref: t });
  }
);
Mx.displayName = SF;
var CF = "DropdownMenuItem", Ox = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
    return /* @__PURE__ */ p.jsx(cF, { ...o, ...n, ref: t });
  }
);
Ox.displayName = CF;
var _F = "DropdownMenuCheckboxItem", Ax = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
  return /* @__PURE__ */ p.jsx(lF, { ...o, ...n, ref: t });
});
Ax.displayName = _F;
var EF = "DropdownMenuRadioGroup", Dx = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
  return /* @__PURE__ */ p.jsx(uF, { ...o, ...n, ref: t });
});
Dx.displayName = EF;
var PF = "DropdownMenuRadioItem", jx = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
  return /* @__PURE__ */ p.jsx(dF, { ...o, ...n, ref: t });
});
jx.displayName = PF;
var TF = "DropdownMenuItemIndicator", kx = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
  return /* @__PURE__ */ p.jsx(fF, { ...o, ...n, ref: t });
});
kx.displayName = TF;
var RF = "DropdownMenuSeparator", Ix = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
  return /* @__PURE__ */ p.jsx(pF, { ...o, ...n, ref: t });
});
Ix.displayName = RF;
var NF = "DropdownMenuArrow", MF = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
    return /* @__PURE__ */ p.jsx(mF, { ...o, ...n, ref: t });
  }
);
MF.displayName = NF;
var OF = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = qe(t), [s = !1, c] = je({
    prop: n,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ p.jsx(hF, { ...i, open: s, onOpenChange: c, children: r });
}, AF = "DropdownMenuSubTrigger", $x = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
  return /* @__PURE__ */ p.jsx(vF, { ...o, ...n, ref: t });
});
$x.displayName = AF;
var DF = "DropdownMenuSubContent", Lx = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = qe(r);
  return /* @__PURE__ */ p.jsx(
    gF,
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
Lx.displayName = DF;
var jF = Cx, kF = Ex, Fx = Px, qx = Rx, IF = Nx, Bx = Mx, Wx = Ox, Hx = Ax, $F = Dx, Vx = jx, zx = kx, Gx = Ix, LF = OF, Yx = $x, Ux = Lx;
const $W = jF, LW = kF, FW = IF, qW = Fx, BW = LF, WW = $F, FF = d.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ p.jsxs(
  Yx,
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
      /* @__PURE__ */ p.jsx(la, { className: "ml-auto h-4 w-4" })
    ]
  }
));
FF.displayName = Yx.displayName;
const qF = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ux,
  {
    ref: r,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
qF.displayName = Ux.displayName;
const BF = d.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ p.jsx(Fx, { children: /* @__PURE__ */ p.jsx(
  qx,
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
BF.displayName = qx.displayName;
const WF = d.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ p.jsx(
  Wx,
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
WF.displayName = Wx.displayName;
const HF = d.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ p.jsxs(
  Hx,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(zx, { children: /* @__PURE__ */ p.jsx(xn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
HF.displayName = Hx.displayName;
const VF = d.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsxs(
  Vx,
  {
    ref: n,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(zx, { children: /* @__PURE__ */ p.jsx(cg, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
VF.displayName = Vx.displayName;
const zF = d.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ p.jsx(
  Bx,
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
zF.displayName = Bx.displayName;
const GF = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Gx,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
GF.displayName = Gx.displayName;
const YF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
YF.displayName = "DropdownMenuShortcut";
var UF = "Label", Kx = d.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
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
Kx.displayName = UF;
var Xx = Kx;
const KF = _t(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Zx = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Xx,
  {
    ref: r,
    className: M(KF(), e),
    ...t
  }
));
Zx.displayName = Xx.displayName;
const HW = aE, Qx = d.createContext(
  {}
), XF = ({
  ...e
}) => /* @__PURE__ */ p.jsx(Qx.Provider, { value: { name: e.name }, children: /* @__PURE__ */ p.jsx(iE, { ...e }) }), Wa = () => {
  const e = d.useContext(Qx), t = d.useContext(Jx), { getFieldState: r, formState: n } = qv(), o = r(e.name, n);
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
}, Jx = d.createContext(
  {}
), eS = d.forwardRef(({ className: e, ...t }, r) => {
  const n = d.useId();
  return /* @__PURE__ */ p.jsx(Jx.Provider, { value: { id: n }, children: /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: r,
      className: M("space-y-1 relative", e),
      ...t
    }
  ) });
});
eS.displayName = "FormItem";
const tS = d.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = Wa();
  return /* @__PURE__ */ p.jsx(
    Zx,
    {
      ref: r,
      className: M(n && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
tS.displayName = "FormLabel";
const rS = d.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = Wa();
  return /* @__PURE__ */ p.jsx(
    xt,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
rS.displayName = "FormControl";
const ZF = d.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = Wa();
  return /* @__PURE__ */ p.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: M("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ZF.displayName = "FormDescription";
const nS = d.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o, formMessageId: a } = Wa(), i = o ? String(o == null ? void 0 : o.message) : t;
  return i ? /* @__PURE__ */ p.jsx(
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
nS.displayName = "FormMessage";
const QF = _t("font-bold tracking-tight", {
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
}), JF = A.forwardRef(
  ({ className: e, variant: t, children: r, ...n }, o) => {
    const a = t || "h1";
    return /* @__PURE__ */ p.jsx(
      a,
      {
        className: M(QF({ variant: t }), e),
        ref: o,
        ...n,
        children: r
      }
    );
  }
);
JF.displayName = "Heading";
const kd = A.forwardRef(({ className: e, type: t, ...r }, n) => t === "textarea" ? /* @__PURE__ */ p.jsx(
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
) : /* @__PURE__ */ p.jsx(
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
)), e2 = ({
  name: e,
  label: t,
  placeholder: r,
  mask: n,
  ...o
}) => {
  const a = qv();
  return /* @__PURE__ */ p.jsx(
    XF,
    {
      control: a.control,
      name: e,
      render: ({ field: i }) => /* @__PURE__ */ p.jsxs(eS, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ p.jsx(tS, { children: t }),
        /* @__PURE__ */ p.jsx(rS, { children: n ? /* @__PURE__ */ p.jsx(
          R2,
          {
            mask: n,
            placeholder: r,
            ...o,
            ...i
          }
        ) : /* @__PURE__ */ p.jsx(kd, { placeholder: r, ...o, ...i }) }),
        /* @__PURE__ */ p.jsx(nS, {})
      ] })
    }
  );
};
e2.displayName = "InputForm";
var t2 = "VisuallyHidden", oo = d.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
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
oo.displayName = t2;
var oS = oo, tn = "NavigationMenu", [Id, aS, r2] = vr(tn), [ru, n2, o2] = vr(tn), [$d, VW] = Ae(
  tn,
  [r2, o2]
), [a2, rt] = $d(tn), [i2, s2] = $d(tn), iS = d.forwardRef(
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
      ...u
    } = e, [f, m] = d.useState(null), v = ie(t, (T) => m(T)), y = It(l), h = d.useRef(0), g = d.useRef(0), w = d.useRef(0), [b, x] = d.useState(!0), [C = "", _] = je({
      prop: n,
      onChange: (T) => {
        const D = T !== "", O = s > 0;
        D ? (window.clearTimeout(w.current), O && x(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(T);
      },
      defaultProp: a
    }), S = d.useCallback(() => {
      window.clearTimeout(g.current), g.current = window.setTimeout(() => _(""), 150);
    }, [_]), E = d.useCallback(
      (T) => {
        window.clearTimeout(g.current), _(T);
      },
      [_]
    ), R = d.useCallback(
      (T) => {
        C === T ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(g.current), _(T);
        }, i);
      },
      [C, _, i]
    );
    return d.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ p.jsx(
      cS,
      {
        scope: r,
        isRootMenu: !0,
        value: C,
        dir: y,
        orientation: c,
        rootNavigationMenu: f,
        onTriggerEnter: (T) => {
          window.clearTimeout(h.current), b ? R(T) : E(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), S();
        },
        onContentEnter: () => window.clearTimeout(g.current),
        onContentLeave: S,
        onItemSelect: (T) => {
          _((D) => D === T ? "" : T);
        },
        onItemDismiss: () => _(""),
        children: /* @__PURE__ */ p.jsx(
          V.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: y,
            ...u,
            ref: v
          }
        )
      }
    );
  }
);
iS.displayName = tn;
var sS = "NavigationMenuSub", c2 = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = rt(sS, r), [l = "", u] = je({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ p.jsx(
      cS,
      {
        scope: r,
        isRootMenu: !1,
        value: l,
        dir: c.dir,
        orientation: i,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (f) => u(f),
        onItemSelect: (f) => u(f),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ p.jsx(V.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
c2.displayName = sS;
var cS = (e) => {
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
    onTriggerEnter: u,
    onTriggerLeave: f,
    onContentEnter: m,
    onContentLeave: v
  } = e, [y, h] = d.useState(null), [g, w] = d.useState(/* @__PURE__ */ new Map()), [b, x] = d.useState(null);
  return /* @__PURE__ */ p.jsx(
    a2,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: s,
      previousValue: Kn(s),
      baseId: Ne(),
      dir: o,
      orientation: a,
      viewport: y,
      onViewportChange: h,
      indicatorTrack: b,
      onIndicatorTrackChange: x,
      onTriggerEnter: ve(u),
      onTriggerLeave: ve(f),
      onContentEnter: ve(m),
      onContentLeave: ve(v),
      onItemSelect: ve(c),
      onItemDismiss: ve(l),
      onViewportContentChange: d.useCallback((C, _) => {
        w((S) => (S.set(C, _), new Map(S)));
      }, []),
      onViewportContentRemove: d.useCallback((C) => {
        w((_) => _.has(C) ? (_.delete(C), new Map(_)) : _);
      }, []),
      children: /* @__PURE__ */ p.jsx(Id.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(i2, { scope: t, items: g, children: i }) })
    }
  );
}, lS = "NavigationMenuList", uS = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = rt(lS, r), a = /* @__PURE__ */ p.jsx(V.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ p.jsx(V.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ p.jsx(Id.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ p.jsx(wS, { asChild: !0, children: a }) : a }) });
  }
);
uS.displayName = lS;
var dS = "NavigationMenuItem", [l2, fS] = $d(dS), pS = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = Ne(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = d.useRef(null), c = d.useRef(null), l = d.useRef(null), u = d.useRef(() => {
    }), f = d.useRef(!1), m = d.useCallback((y = "start") => {
      if (s.current) {
        u.current();
        const h = ou(s.current);
        h.length && qd(y === "start" ? h : h.reverse());
      }
    }, []), v = d.useCallback(() => {
      if (s.current) {
        const y = ou(s.current);
        y.length && (u.current = v2(y));
      }
    }, []);
    return /* @__PURE__ */ p.jsx(
      l2,
      {
        scope: r,
        value: i,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: l,
        wasEscapeCloseRef: f,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: v,
        onContentFocusOutside: v,
        children: /* @__PURE__ */ p.jsx(V.li, { ...o, ref: t })
      }
    );
  }
);
pS.displayName = dS;
var nu = "NavigationMenuTrigger", mS = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = rt(nu, e.__scopeNavigationMenu), i = fS(nu, e.__scopeNavigationMenu), s = d.useRef(null), c = ie(s, i.triggerRef, t), l = SS(a.baseId, i.value), u = CS(a.baseId, i.value), f = d.useRef(!1), m = d.useRef(!1), v = i.value === a.value;
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Id.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ p.jsx(xS, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      V.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": Bd(v),
        "aria-expanded": v,
        "aria-controls": u,
        ...o,
        ref: c,
        onPointerEnter: q(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: q(
          e.onPointerMove,
          Jo(() => {
            n || m.current || i.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(i.value), f.current = !0);
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          Jo(() => {
            n || (a.onTriggerLeave(), f.current = !1);
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
    v && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        oS,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (y) => {
            const h = i.contentRef.current, g = y.relatedTarget, w = g === s.current, b = h == null ? void 0 : h.contains(g);
            (w || !b) && i.onFocusProxyEnter(w ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ p.jsx("span", { "aria-owns": u })
    ] })
  ] });
});
mS.displayName = nu;
var u2 = "NavigationMenuLink", Mv = "navigationMenu.linkSelect", hS = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ p.jsx(xS, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      V.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: q(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(Mv, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Mv, (l) => o == null ? void 0 : o(l), { once: !0 }), wn(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(Ao, {
                bubbles: !0,
                cancelable: !0
              });
              wn(s, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
hS.displayName = u2;
var Ld = "NavigationMenuIndicator", vS = d.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = rt(Ld, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Fv.createPortal(
    /* @__PURE__ */ p.jsx(Pe, { present: r || a, children: /* @__PURE__ */ p.jsx(d2, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
vS.displayName = Ld;
var d2 = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = rt(Ld, r), a = aS(r), [i, s] = d.useState(
    null
  ), [c, l] = d.useState(null), u = o.orientation === "horizontal", f = !!o.value;
  d.useEffect(() => {
    var h;
    const y = (h = a().find((g) => g.value === o.value)) == null ? void 0 : h.ref.current;
    y && s(y);
  }, [a, o.value]);
  const m = () => {
    i && l({
      size: u ? i.offsetWidth : i.offsetHeight,
      offset: u ? i.offsetLeft : i.offsetTop
    });
  };
  return au(i, m), au(o.indicatorTrack, m), c ? /* @__PURE__ */ p.jsx(
    V.div,
    {
      "aria-hidden": !0,
      "data-state": f ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...n,
      ref: t,
      style: {
        position: "absolute",
        ...u ? {
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
}), Hr = "NavigationMenuContent", gS = d.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = rt(Hr, e.__scopeNavigationMenu), a = fS(Hr, e.__scopeNavigationMenu), i = ie(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ p.jsx(f2, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ p.jsx(Pe, { present: r || s, children: /* @__PURE__ */ p.jsx(
    yS,
    {
      "data-state": Bd(s),
      ...c,
      ref: i,
      onPointerEnter: q(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: q(
        e.onPointerLeave,
        Jo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
gS.displayName = Hr;
var f2 = d.forwardRef((e, t) => {
  const r = rt(Hr, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return Oe(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), Oe(() => () => o(e.value), [e.value, o]), null;
}), Ao = "navigationMenu.rootContentDismiss", yS = d.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, u = rt(Hr, r), f = d.useRef(null), m = ie(f, t), v = SS(u.baseId, n), y = CS(u.baseId, n), h = aS(r), g = d.useRef(null), { onItemDismiss: w } = u;
  d.useEffect(() => {
    const x = f.current;
    if (u.isRootMenu && x) {
      const C = () => {
        var _;
        w(), s(), x.contains(document.activeElement) && ((_ = o.current) == null || _.focus());
      };
      return x.addEventListener(Ao, C), () => x.removeEventListener(Ao, C);
    }
  }, [u.isRootMenu, e.value, o, w, s]);
  const b = d.useMemo(() => {
    const C = h().map((D) => D.value);
    u.dir === "rtl" && C.reverse();
    const _ = C.indexOf(u.value), S = C.indexOf(u.previousValue), E = n === u.value, R = S === C.indexOf(n);
    if (!E && !R) return g.current;
    const T = (() => {
      if (_ !== S) {
        if (E && S !== -1) return _ > S ? "from-end" : "from-start";
        if (R && _ !== -1) return _ > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = T, T;
  }, [u.previousValue, u.value, u.dir, h, n]);
  return /* @__PURE__ */ p.jsx(wS, { asChild: !0, children: /* @__PURE__ */ p.jsx(
    Zt,
    {
      id: y,
      "aria-labelledby": v,
      "data-motion": b,
      "data-orientation": u.orientation,
      ...l,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var C;
        const x = new Event(Ao, {
          bubbles: !0,
          cancelable: !0
        });
        (C = f.current) == null || C.dispatchEvent(x);
      },
      onFocusOutside: q(e.onFocusOutside, (x) => {
        var _;
        c();
        const C = x.target;
        (_ = u.rootNavigationMenu) != null && _.contains(C) && x.preventDefault();
      }),
      onPointerDownOutside: q(e.onPointerDownOutside, (x) => {
        var E;
        const C = x.target, _ = h().some((R) => {
          var T;
          return (T = R.ref.current) == null ? void 0 : T.contains(C);
        }), S = u.isRootMenu && ((E = u.viewport) == null ? void 0 : E.contains(C));
        (_ || S || !u.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: q(e.onKeyDown, (x) => {
        var S;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const E = ou(x.currentTarget), R = document.activeElement, T = E.findIndex((F) => F === R), O = x.shiftKey ? E.slice(0, T).reverse() : E.slice(T + 1, E.length);
          qd(O) ? x.preventDefault() : (S = a.current) == null || S.focus();
        }
      }),
      onEscapeKeyDown: q(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), Fd = "NavigationMenuViewport", bS = d.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!rt(Fd, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ p.jsx(Pe, { present: r || a, children: /* @__PURE__ */ p.jsx(p2, { ...n, ref: t }) });
});
bS.displayName = Fd;
var p2 = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = rt(Fd, r), i = ie(t, a.onViewportChange), s = s2(
    Hr,
    e.__scopeNavigationMenu
  ), [c, l] = d.useState(null), [u, f] = d.useState(null), m = c ? (c == null ? void 0 : c.width) + "px" : void 0, v = c ? (c == null ? void 0 : c.height) + "px" : void 0, y = !!a.value, h = y ? a.value : a.previousValue;
  return au(u, () => {
    u && l({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ p.jsx(
    V.div,
    {
      "data-state": Bd(y),
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
      onPointerLeave: q(e.onPointerLeave, Jo(a.onContentLeave)),
      children: Array.from(s.items).map(([w, { ref: b, forceMount: x, ...C }]) => {
        const _ = h === w;
        return /* @__PURE__ */ p.jsx(Pe, { present: x || _, children: /* @__PURE__ */ p.jsx(
          yS,
          {
            ...C,
            ref: Fn(b, (S) => {
              _ && S && f(S);
            })
          }
        ) }, w);
      })
    }
  );
}), m2 = "FocusGroup", wS = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = rt(m2, r);
    return /* @__PURE__ */ p.jsx(ru.Provider, { scope: r, children: /* @__PURE__ */ p.jsx(ru.Slot, { scope: r, children: /* @__PURE__ */ p.jsx(V.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), Ov = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], h2 = "FocusGroupItem", xS = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = n2(r), a = rt(h2, r);
    return /* @__PURE__ */ p.jsx(ru.ItemSlot, { scope: r, children: /* @__PURE__ */ p.jsx(
      V.button,
      {
        ...n,
        ref: t,
        onKeyDown: q(e.onKeyDown, (i) => {
          if (["Home", "End", ...Ov].includes(i.key)) {
            let c = o().map((f) => f.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), Ov.includes(i.key)) {
              const f = c.indexOf(i.currentTarget);
              c = c.slice(f + 1);
            }
            setTimeout(() => qd(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function ou(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function qd(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function v2(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function au(e, t) {
  const r = ve(t);
  Oe(() => {
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
function Bd(e) {
  return e ? "open" : "closed";
}
function SS(e, t) {
  return `${e}-trigger-${t}`;
}
function CS(e, t) {
  return `${e}-content-${t}`;
}
function Jo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var _S = iS, ES = uS, g2 = pS, PS = mS, y2 = hS, TS = vS, RS = gS, NS = bS;
const b2 = d.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsxs(
  _S,
  {
    ref: n,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ p.jsx(MS, {})
    ]
  }
));
b2.displayName = _S.displayName;
const w2 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  ES,
  {
    ref: r,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
w2.displayName = ES.displayName;
const zW = g2, x2 = _t(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), S2 = d.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsxs(
  PS,
  {
    ref: n,
    className: M(x2(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ p.jsx(
        kr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
S2.displayName = PS.displayName;
const C2 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  RS,
  {
    ref: r,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
C2.displayName = RS.displayName;
const _2 = y2, MS = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ p.jsx(
  NS,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
MS.displayName = NS.displayName;
const E2 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  TS,
  {
    ref: r,
    className: M(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
E2.displayName = TS.displayName;
const P2 = A.forwardRef(({ className: e, title: t, children: r, ...n }, o) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(_2, { asChild: !0, children: /* @__PURE__ */ p.jsxs(
  "a",
  {
    ref: o,
    className: M(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ p.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: r })
    ]
  }
) }) }));
P2.displayName = "ListItem";
function T2(e) {
  return /* @__PURE__ */ p.jsx(
    "img",
    {
      src: "./logo_aiqia_animation.svg",
      alt: "",
      ...e,
      style: { height: "140px" }
    }
  );
}
function GW() {
  return /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-center flex-1 p-10", children: /* @__PURE__ */ p.jsx(T2, { className: "w-40" }) });
}
function R2({
  value: e,
  mask: t,
  onChange: r,
  ...n
}) {
  const o = t.split("#").length - 1, a = t.split("A").length - 1, i = o + a;
  function s(c) {
    const u = c.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, i);
    r(u);
  }
  return /* @__PURE__ */ p.jsx(
    kd,
    {
      value: Jy(e, t),
      onChange: s,
      ...n
    }
  );
}
const N2 = (e, t = 300) => {
  const [r, n] = Yt(e);
  return At(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, Av = _t(
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
), M2 = d.forwardRef(
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
    onSearchChange: u,
    isLoading: f,
    onCreate: m,
    ...v
  }, y) => {
    const [h, g] = d.useState(n), [w, b] = d.useState(!1), [x, C] = d.useState(!1), [_, S] = d.useState(""), E = N2(_, 300);
    At(() => {
      u && u(E ?? "");
    }, [E]);
    const R = (N) => {
      if (N.key === "Enter")
        b(!0);
      else if (N.key === "Backspace" && !N.currentTarget.value) {
        const I = [...h];
        I.pop(), g(I), t(I);
      }
    }, T = (N) => {
      const I = h.includes(N) ? h.filter((k) => k !== N) : [...h, N];
      g(I), t(I);
    }, D = () => {
      g([]), t([]);
    }, O = () => {
      b((N) => !N);
    }, F = () => {
      const N = h.slice(0, i);
      g(N), t(N);
    }, L = () => {
      if (h.length === e.length)
        D();
      else {
        const N = e.map((I) => I.value);
        g(N), t(N);
      }
    };
    return /* @__PURE__ */ p.jsxs(
      Cd,
      {
        open: w,
        onOpenChange: b,
        modal: s,
        children: [
          /* @__PURE__ */ p.jsx(_d, { asChild: !0, children: /* @__PURE__ */ p.jsx(
            Zr,
            {
              ref: y,
              ...v,
              onClick: O,
              variant: "outline",
              className: M(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, i).map((N) => {
                    const I = e.find((G) => G.value === N), k = I == null ? void 0 : I.icon;
                    return /* @__PURE__ */ p.jsxs(
                      Nf,
                      {
                        className: M(
                          x ? "animate-bounce" : "",
                          Av({ variant: r })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          k && /* @__PURE__ */ p.jsx(k, { className: "h-4 w-4 mr-2" }),
                          I == null ? void 0 : I.label,
                          /* @__PURE__ */ p.jsx(
                            df,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (G) => {
                                G.stopPropagation(), T(N);
                              }
                            }
                          )
                        ]
                      },
                      N
                    );
                  }),
                  h.length > i && /* @__PURE__ */ p.jsxs(
                    Nf,
                    {
                      className: M(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        x ? "animate-bounce" : "",
                        Av({ variant: r })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - i}`,
                        /* @__PURE__ */ p.jsx(
                          df,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (N) => {
                              N.stopPropagation(), F();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ p.jsx(
                    ua,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (N) => {
                        N.stopPropagation(), D();
                      }
                    }
                  ),
                  /* @__PURE__ */ p.jsx(
                    VC,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ p.jsx(kr, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ p.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ p.jsx(kr, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ p.jsx(
            Ia,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => b(!1),
              children: /* @__PURE__ */ p.jsxs(dd, { shouldFilter: !u, children: [
                /* @__PURE__ */ p.jsx(
                  rw,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: R,
                    onValueChange: S
                  }
                ),
                /* @__PURE__ */ p.jsxs(nw, { children: [
                  !f && /* @__PURE__ */ p.jsx(ow, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ p.jsxs(aw, { children: [
                    !f && !e.length && !!_.length && m && /* @__PURE__ */ p.jsx(
                      No,
                      {
                        onSelect: m,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ p.jsx(l0, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ p.jsx("b", { children: _ })
                        ] })
                      },
                      "new"
                    ),
                    f && /* @__PURE__ */ p.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ p.jsx(s0, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !l && /* @__PURE__ */ p.jsxs(
                      No,
                      {
                        onSelect: L,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ p.jsx(
                            "div",
                            {
                              className: M(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ p.jsx(xn, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ p.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((N) => {
                      const I = h.includes(N.value);
                      return /* @__PURE__ */ p.jsxs(
                        No,
                        {
                          onSelect: () => T(N.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ p.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  I ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ p.jsx(xn, { className: "h-4 w-4" })
                              }
                            ),
                            N.icon && /* @__PURE__ */ p.jsx(N.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ p.jsx("span", { children: N.label })
                          ]
                        },
                        N.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ p.jsx(iw, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ p.jsx(
            p0,
            {
              className: M(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                x ? "" : "text-muted-foreground"
              ),
              onClick: () => C(!x)
            }
          )
        ]
      }
    );
  }
);
M2.displayName = "MultiSelect";
const O2 = ({ className: e, ...t }) => /* @__PURE__ */ p.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
O2.displayName = "Pagination";
const A2 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "ul",
  {
    ref: r,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
A2.displayName = "PaginationContent";
const D2 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx("li", { ref: r, className: M("", e), ...t }));
D2.displayName = "PaginationItem";
const Wd = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...n
}) => /* @__PURE__ */ p.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      zt({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...n
  }
);
Wd.displayName = "PaginationLink";
const j2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  Wd,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ p.jsx(sg, { className: "h-4 w-4" })
  }
);
j2.displayName = "PaginationPrevious";
const k2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  Wd,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ p.jsx(la, { className: "h-4 w-4" })
  }
);
k2.displayName = "PaginationNext";
const I2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ p.jsx(lg, { className: "h-4 w-4" }),
      /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
I2.displayName = "PaginationEllipsis";
var Hd = "Radio", [$2, OS] = Ae(Hd), [L2, F2] = $2(Hd), AS = d.forwardRef(
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
      ...u
    } = e, [f, m] = d.useState(null), v = ie(t, (g) => m(g)), y = d.useRef(!1), h = f ? l || !!f.closest("form") : !0;
    return /* @__PURE__ */ p.jsxs(L2, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ p.jsx(
        V.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": kS(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...u,
          ref: v,
          onClick: q(e.onClick, (g) => {
            o || c == null || c(), h && (y.current = g.isPropagationStopped(), y.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ p.jsx(
        q2,
        {
          control: f,
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
AS.displayName = Hd;
var DS = "RadioIndicator", jS = d.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = F2(DS, r);
    return /* @__PURE__ */ p.jsx(Pe, { present: n || a.checked, children: /* @__PURE__ */ p.jsx(
      V.span,
      {
        "data-state": kS(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
jS.displayName = DS;
var q2 = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = d.useRef(null), i = Kn(r), s = Na(t);
  return d.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && f) {
      const m = new Event("click", { bubbles: n });
      f.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ p.jsx(
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
function kS(e) {
  return e ? "checked" : "unchecked";
}
var B2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Vd = "RadioGroup", [W2, YW] = Ae(Vd, [
  tr,
  OS
]), IS = tr(), $S = OS(), [H2, V2] = W2(Vd), LS = d.forwardRef(
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
      loop: u = !0,
      onValueChange: f,
      ...m
    } = e, v = IS(r), y = It(l), [h, g] = je({
      prop: a,
      defaultProp: o,
      onChange: f
    });
    return /* @__PURE__ */ p.jsx(
      H2,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ p.jsx(
          Fa,
          {
            asChild: !0,
            ...v,
            orientation: c,
            dir: y,
            loop: u,
            children: /* @__PURE__ */ p.jsx(
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
LS.displayName = Vd;
var FS = "RadioGroupItem", qS = d.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = V2(FS, r), i = a.disabled || n, s = IS(r), c = $S(r), l = d.useRef(null), u = ie(t, l), f = a.value === o.value, m = d.useRef(!1);
    return d.useEffect(() => {
      const v = (h) => {
        B2.includes(h.key) && (m.current = !0);
      }, y = () => m.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ p.jsx(
      qa,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: f,
        children: /* @__PURE__ */ p.jsx(
          AS,
          {
            disabled: i,
            required: a.required,
            checked: f,
            ...c,
            ...o,
            name: a.name,
            ref: u,
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
qS.displayName = FS;
var z2 = "RadioGroupIndicator", BS = d.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = $S(r);
    return /* @__PURE__ */ p.jsx(jS, { ...o, ...n, ref: t });
  }
);
BS.displayName = z2;
var WS = LS, HS = qS, G2 = BS;
const Y2 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  WS,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: r
  }
));
Y2.displayName = WS.displayName;
const U2 = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  HS,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx(G2, { className: "flex items-center justify-center", children: /* @__PURE__ */ p.jsx(cg, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
U2.displayName = HS.displayName;
function iu(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function K2(e, t) {
  return d.useReducer((r, n) => t[r][n] ?? r, e);
}
var zd = "ScrollArea", [VS, UW] = Ae(zd), [X2, nt] = VS(zd), zS = d.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = d.useState(null), [l, u] = d.useState(null), [f, m] = d.useState(null), [v, y] = d.useState(null), [h, g] = d.useState(null), [w, b] = d.useState(0), [x, C] = d.useState(0), [_, S] = d.useState(!1), [E, R] = d.useState(!1), T = ie(t, (O) => c(O)), D = It(o);
    return /* @__PURE__ */ p.jsx(
      X2,
      {
        scope: r,
        type: n,
        dir: D,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: l,
        onViewportChange: u,
        content: f,
        onContentChange: m,
        scrollbarX: v,
        onScrollbarXChange: y,
        scrollbarXEnabled: _,
        onScrollbarXEnabledChange: S,
        scrollbarY: h,
        onScrollbarYChange: g,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: b,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ p.jsx(
          V.div,
          {
            dir: D,
            ...i,
            ref: T,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": w + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
zS.displayName = zd;
var GS = "ScrollAreaViewport", YS = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = nt(GS, r), s = d.useRef(null), c = ie(t, s, i.onViewportChange);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ p.jsx(
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
          children: /* @__PURE__ */ p.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
YS.displayName = GS;
var Tt = "ScrollAreaScrollbar", Gd = d.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = nt(Tt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return d.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ p.jsx(Z2, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ p.jsx(Q2, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ p.jsx(US, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ p.jsx(Yd, { ...n, ref: t }) : null;
  }
);
Gd.displayName = Tt;
var Z2 = d.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = nt(Tt, e.__scopeScrollArea), [a, i] = d.useState(!1);
  return d.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const l = () => {
        window.clearTimeout(c), i(!0);
      }, u = () => {
        c = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", u);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ p.jsx(Pe, { present: r || a, children: /* @__PURE__ */ p.jsx(
    US,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), Q2 = d.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = nt(Tt, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Va(() => c("SCROLL_END"), 100), [s, c] = K2("hidden", {
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
  return d.useEffect(() => {
    if (s === "idle") {
      const l = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(l);
    }
  }, [s, o.scrollHideDelay, c]), d.useEffect(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let f = l[u];
      const m = () => {
        const v = l[u];
        f !== v && (c("SCROLL"), i()), f = v;
      };
      return l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ p.jsx(Pe, { present: r || s !== "hidden", children: /* @__PURE__ */ p.jsx(
    Yd,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: q(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: q(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), US = d.forwardRef((e, t) => {
  const r = nt(Tt, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = d.useState(!1), s = e.orientation === "horizontal", c = Va(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? l : u);
    }
  }, 10);
  return Vr(r.viewport, c), Vr(r.content, c), /* @__PURE__ */ p.jsx(Pe, { present: n || a, children: /* @__PURE__ */ p.jsx(
    Yd,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Yd = d.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = nt(Tt, e.__scopeScrollArea), a = d.useRef(null), i = d.useRef(0), [s, c] = d.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = JS(s.viewport, s.content), u = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function f(m, v) {
    return oq(m, i.current, s, v);
  }
  return r === "horizontal" ? /* @__PURE__ */ p.jsx(
    J2,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, v = Dv(m, s, o.dir);
          a.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = f(m, o.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ p.jsx(
    eq,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, v = Dv(m, s);
          a.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = f(m));
      }
    }
  ) : null;
}), J2 = d.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = nt(Tt, e.__scopeScrollArea), [i, s] = d.useState(), c = d.useRef(null), l = ie(t, c, a.onScrollbarXChange);
  return d.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ p.jsx(
    XS,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ha(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
      onDragScroll: (u) => e.onDragScroll(u.x),
      onWheelScroll: (u, f) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + u.deltaX;
          e.onWheelScroll(m), tC(m, f) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: ta(i.paddingLeft),
            paddingEnd: ta(i.paddingRight)
          }
        });
      }
    }
  );
}), eq = d.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = nt(Tt, e.__scopeScrollArea), [i, s] = d.useState(), c = d.useRef(null), l = ie(t, c, a.onScrollbarYChange);
  return d.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ p.jsx(
    XS,
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
        "--radix-scroll-area-thumb-height": Ha(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
      onDragScroll: (u) => e.onDragScroll(u.y),
      onWheelScroll: (u, f) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + u.deltaY;
          e.onWheelScroll(m), tC(m, f) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: ta(i.paddingTop),
            paddingEnd: ta(i.paddingBottom)
          }
        });
      }
    }
  );
}), [tq, KS] = VS(Tt), XS = d.forwardRef((e, t) => {
  const {
    __scopeScrollArea: r,
    sizes: n,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: u,
    onResize: f,
    ...m
  } = e, v = nt(Tt, r), [y, h] = d.useState(null), g = ie(t, (T) => h(T)), w = d.useRef(null), b = d.useRef(""), x = v.viewport, C = n.content - n.viewport, _ = ve(u), S = ve(c), E = Va(f, 10);
  function R(T) {
    if (w.current) {
      const D = T.clientX - w.current.left, O = T.clientY - w.current.top;
      l({ x: D, y: O });
    }
  }
  return d.useEffect(() => {
    const T = (D) => {
      const O = D.target;
      (y == null ? void 0 : y.contains(O)) && _(D, C);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [x, y, C, _]), d.useEffect(S, [n, S]), Vr(y, E), Vr(v.content, E), /* @__PURE__ */ p.jsx(
    tq,
    {
      scope: r,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: ve(a),
      onThumbPointerUp: ve(i),
      onThumbPositionChange: S,
      onThumbPointerDown: ve(s),
      children: /* @__PURE__ */ p.jsx(
        V.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: q(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), w.current = y.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), R(T));
          }),
          onPointerMove: q(e.onPointerMove, R),
          onPointerUp: q(e.onPointerUp, (T) => {
            const D = T.target;
            D.hasPointerCapture(T.pointerId) && D.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = b.current, v.viewport && (v.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), ea = "ScrollAreaThumb", ZS = d.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = KS(ea, e.__scopeScrollArea);
    return /* @__PURE__ */ p.jsx(Pe, { present: r || o.hasThumb, children: /* @__PURE__ */ p.jsx(rq, { ref: t, ...n }) });
  }
), rq = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = nt(ea, r), i = KS(ea, r), { onThumbPositionChange: s } = i, c = ie(
      t,
      (f) => i.onThumbChange(f)
    ), l = d.useRef(void 0), u = Va(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return d.useEffect(() => {
      const f = a.viewport;
      if (f) {
        const m = () => {
          if (u(), !l.current) {
            const v = aq(f, s);
            l.current = v, s();
          }
        };
        return s(), f.addEventListener("scroll", m), () => f.removeEventListener("scroll", m);
      }
    }, [a.viewport, u, s]), /* @__PURE__ */ p.jsx(
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
        onPointerDownCapture: q(e.onPointerDownCapture, (f) => {
          const v = f.target.getBoundingClientRect(), y = f.clientX - v.left, h = f.clientY - v.top;
          i.onThumbPointerDown({ x: y, y: h });
        }),
        onPointerUp: q(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
ZS.displayName = ea;
var Ud = "ScrollAreaCorner", QS = d.forwardRef(
  (e, t) => {
    const r = nt(Ud, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ p.jsx(nq, { ...e, ref: t }) : null;
  }
);
QS.displayName = Ud;
var nq = d.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = nt(Ud, r), [a, i] = d.useState(0), [s, c] = d.useState(0), l = !!(a && s);
  return Vr(o.scrollbarX, () => {
    var f;
    const u = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), Vr(o.scrollbarY, () => {
    var f;
    const u = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(u), i(u);
  }), l ? /* @__PURE__ */ p.jsx(
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
function ta(e) {
  return e ? parseInt(e, 10) : 0;
}
function JS(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Ha(e) {
  const t = JS(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function oq(e, t, r, n = "ltr") {
  const o = Ha(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, u = r.content - r.viewport, f = n === "ltr" ? [0, u] : [u * -1, 0];
  return eC([c, l], f)(e);
}
function Dv(e, t, r = "ltr") {
  const n = Ha(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], l = iu(e, c);
  return eC([0, i], [0, s])(l);
}
function eC(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function tC(e, t) {
  return e > 0 && e < t;
}
var aq = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function Va(e, t) {
  const r = ve(e), n = d.useRef(0);
  return d.useEffect(() => () => window.clearTimeout(n.current), []), d.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Vr(e, t) {
  const r = ve(t);
  Oe(() => {
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
var rC = zS, iq = YS, sq = QS;
const cq = A.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsxs(
  rC,
  {
    ref: n,
    className: M("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ p.jsx(iq, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ p.jsx(nC, {}),
      /* @__PURE__ */ p.jsx(sq, {})
    ]
  }
));
cq.displayName = rC.displayName;
const nC = A.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ p.jsx(
  Gd,
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
    children: /* @__PURE__ */ p.jsx(ZS, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
nC.displayName = Gd.displayName;
var lq = [" ", "Enter", "ArrowUp", "ArrowDown"], uq = [" ", "Enter"], ao = "Select", [za, Ga, dq] = vr(ao), [rn, KW] = Ae(ao, [
  dq,
  Jt
]), Ya = Jt(), [fq, nr] = rn(ao), [pq, mq] = rn(ao), oC = (e) => {
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
    name: u,
    autoComplete: f,
    disabled: m,
    required: v,
    form: y
  } = e, h = Ya(t), [g, w] = d.useState(null), [b, x] = d.useState(null), [C, _] = d.useState(!1), S = It(l), [E = !1, R] = je({
    prop: n,
    defaultProp: o,
    onChange: a
  }), [T, D] = je({
    prop: i,
    defaultProp: s,
    onChange: c
  }), O = d.useRef(null), F = g ? y || !!g.closest("form") : !0, [L, N] = d.useState(/* @__PURE__ */ new Set()), I = Array.from(L).map((k) => k.props.value).join(";");
  return /* @__PURE__ */ p.jsx(Qn, { ...h, children: /* @__PURE__ */ p.jsxs(
    fq,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: _,
      contentId: Ne(),
      value: T,
      onValueChange: D,
      open: E,
      onOpenChange: R,
      dir: S,
      triggerPointerDownPosRef: O,
      disabled: m,
      children: [
        /* @__PURE__ */ p.jsx(za.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          pq,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback((k) => {
              N((G) => new Set(G).add(k));
            }, []),
            onNativeOptionRemove: d.useCallback((k) => {
              N((G) => {
                const B = new Set(G);
                return B.delete(k), B;
              });
            }, []),
            children: r
          }
        ) }),
        F ? /* @__PURE__ */ p.jsxs(
          MC,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: T,
            onChange: (k) => D(k.target.value),
            disabled: m,
            form: y,
            children: [
              T === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(L)
            ]
          },
          I
        ) : null
      ]
    }
  ) });
};
oC.displayName = ao;
var aC = "SelectTrigger", iC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = Ya(r), i = nr(aC, r), s = i.disabled || n, c = ie(t, i.onTriggerChange), l = Ga(r), u = d.useRef("touch"), [f, m, v] = OC((h) => {
      const g = l().filter((x) => !x.disabled), w = g.find((x) => x.value === i.value), b = AC(g, h, w);
      b !== void 0 && i.onValueChange(b.value);
    }), y = (h) => {
      s || (i.onOpenChange(!0), v()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(Jn, { asChild: !0, ...a, children: /* @__PURE__ */ p.jsx(
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
        "data-placeholder": NC(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: q(o.onClick, (h) => {
          h.currentTarget.focus(), u.current !== "mouse" && y(h);
        }),
        onPointerDown: q(o.onPointerDown, (h) => {
          u.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (y(h), h.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (h) => {
          const g = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(g && h.key === " ") && lq.includes(h.key) && (y(), h.preventDefault());
        })
      }
    ) });
  }
);
iC.displayName = aC;
var sC = "SelectValue", cC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = nr(sC, r), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, f = ie(t, c.onValueNodeChange);
    return Oe(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ p.jsx(
      V.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: NC(c.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : a
      }
    );
  }
);
cC.displayName = sC;
var hq = "SelectIcon", lC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(V.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
lC.displayName = hq;
var vq = "SelectPortal", uC = (e) => /* @__PURE__ */ p.jsx(gr, { asChild: !0, ...e });
uC.displayName = vq;
var hr = "SelectContent", dC = d.forwardRef(
  (e, t) => {
    const r = nr(hr, e.__scopeSelect), [n, o] = d.useState();
    if (Oe(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? Ln.createPortal(
        /* @__PURE__ */ p.jsx(fC, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(za.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(pC, { ...e, ref: t });
  }
);
dC.displayName = hr;
var it = 10, [fC, or] = rn(hr), gq = "SelectContentImpl", pC = d.forwardRef(
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
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: g,
      //
      ...w
    } = e, b = nr(hr, r), [x, C] = d.useState(null), [_, S] = d.useState(null), E = ie(t, (W) => C(W)), [R, T] = d.useState(null), [D, O] = d.useState(
      null
    ), F = Ga(r), [L, N] = d.useState(!1), I = d.useRef(!1);
    d.useEffect(() => {
      if (x) return pa(x);
    }, [x]), da();
    const k = d.useCallback(
      (W) => {
        const [Q, ...se] = F().map((H) => H.ref.current), [ae] = se.slice(-1), oe = document.activeElement;
        for (const H of W)
          if (H === oe || (H == null || H.scrollIntoView({ block: "nearest" }), H === Q && _ && (_.scrollTop = 0), H === ae && _ && (_.scrollTop = _.scrollHeight), H == null || H.focus(), document.activeElement !== oe)) return;
      },
      [F, _]
    ), G = d.useCallback(
      () => k([R, x]),
      [k, R, x]
    );
    d.useEffect(() => {
      L && G();
    }, [L, G]);
    const { onOpenChange: B, triggerPointerDownPosRef: $ } = b;
    d.useEffect(() => {
      if (x) {
        let W = { x: 0, y: 0 };
        const Q = (ae) => {
          var oe, H;
          W = {
            x: Math.abs(Math.round(ae.pageX) - (((oe = $.current) == null ? void 0 : oe.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((H = $.current) == null ? void 0 : H.y) ?? 0))
          };
        }, se = (ae) => {
          W.x <= 10 && W.y <= 10 ? ae.preventDefault() : x.contains(ae.target) || B(!1), document.removeEventListener("pointermove", Q), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", Q), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [x, B, $]), d.useEffect(() => {
      const W = () => B(!1);
      return window.addEventListener("blur", W), window.addEventListener("resize", W), () => {
        window.removeEventListener("blur", W), window.removeEventListener("resize", W);
      };
    }, [B]);
    const [J, ee] = OC((W) => {
      const Q = F().filter((oe) => !oe.disabled), se = Q.find((oe) => oe.ref.current === document.activeElement), ae = AC(Q, W, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), j = d.useCallback(
      (W, Q, se) => {
        const ae = !I.current && !se;
        (b.value !== void 0 && b.value === Q || ae) && (T(W), ae && (I.current = !0));
      },
      [b.value]
    ), Y = d.useCallback(() => x == null ? void 0 : x.focus(), [x]), K = d.useCallback(
      (W, Q, se) => {
        const ae = !I.current && !se;
        (b.value !== void 0 && b.value === Q || ae) && O(W);
      },
      [b.value]
    ), U = n === "popper" ? su : mC, ne = U === su ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ p.jsx(
      fC,
      {
        scope: r,
        content: x,
        viewport: _,
        onViewportChange: S,
        itemRefCallback: j,
        selectedItem: R,
        onItemLeave: Y,
        itemTextRefCallback: K,
        focusSelectedItem: G,
        selectedItemText: D,
        position: n,
        isPositioned: L,
        searchRef: J,
        children: /* @__PURE__ */ p.jsx(Bn, { as: xt, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          qn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (W) => {
              W.preventDefault();
            },
            onUnmountAutoFocus: q(o, (W) => {
              var Q;
              (Q = b.trigger) == null || Q.focus({ preventScroll: !0 }), W.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              Zt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (W) => W.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  U,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (W) => W.preventDefault(),
                    ...w,
                    ...ne,
                    onPlaced: () => N(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: q(w.onKeyDown, (W) => {
                      const Q = W.ctrlKey || W.altKey || W.metaKey;
                      if (W.key === "Tab" && W.preventDefault(), !Q && W.key.length === 1 && ee(W.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(W.key)) {
                        let ae = F().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                        if (["ArrowUp", "End"].includes(W.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(W.key)) {
                          const oe = W.target, H = ae.indexOf(oe);
                          ae = ae.slice(H + 1);
                        }
                        setTimeout(() => k(ae)), W.preventDefault();
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
pC.displayName = gq;
var yq = "SelectItemAlignedPosition", mC = d.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = nr(hr, r), i = or(hr, r), [s, c] = d.useState(null), [l, u] = d.useState(null), f = ie(t, (E) => u(E)), m = Ga(r), v = d.useRef(!1), y = d.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = i, x = d.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && g && w) {
      const E = a.trigger.getBoundingClientRect(), R = l.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), D = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const oe = D.left - R.left, H = T.left - oe, ue = E.left - H, z = E.width + ue, ge = Math.max(z, R.width), Ee = window.innerWidth - it, Te = iu(H, [
          it,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(it, Ee - ge)
        ]);
        s.style.minWidth = z + "px", s.style.left = Te + "px";
      } else {
        const oe = R.right - D.right, H = window.innerWidth - T.right - oe, ue = window.innerWidth - E.right - H, z = E.width + ue, ge = Math.max(z, R.width), Ee = window.innerWidth - it, Te = iu(H, [
          it,
          Math.max(it, Ee - ge)
        ]);
        s.style.minWidth = z + "px", s.style.right = Te + "px";
      }
      const O = m(), F = window.innerHeight - it * 2, L = h.scrollHeight, N = window.getComputedStyle(l), I = parseInt(N.borderTopWidth, 10), k = parseInt(N.paddingTop, 10), G = parseInt(N.borderBottomWidth, 10), B = parseInt(N.paddingBottom, 10), $ = I + k + L + B + G, J = Math.min(g.offsetHeight * 5, $), ee = window.getComputedStyle(h), j = parseInt(ee.paddingTop, 10), Y = parseInt(ee.paddingBottom, 10), K = E.top + E.height / 2 - it, U = F - K, ne = g.offsetHeight / 2, W = g.offsetTop + ne, Q = I + k + W, se = $ - Q;
      if (Q <= K) {
        const oe = O.length > 0 && g === O[O.length - 1].ref.current;
        s.style.bottom = "0px";
        const H = l.clientHeight - h.offsetTop - h.offsetHeight, ue = Math.max(
          U,
          ne + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (oe ? Y : 0) + H + G
        ), z = Q + ue;
        s.style.height = z + "px";
      } else {
        const oe = O.length > 0 && g === O[0].ref.current;
        s.style.top = "0px";
        const ue = Math.max(
          K,
          I + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (oe ? j : 0) + ne
        ) + se;
        s.style.height = ue + "px", h.scrollTop = Q - K + h.offsetTop;
      }
      s.style.margin = `${it}px 0`, s.style.minHeight = J + "px", s.style.maxHeight = F + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    l,
    h,
    g,
    w,
    a.dir,
    n
  ]);
  Oe(() => x(), [x]);
  const [C, _] = d.useState();
  Oe(() => {
    l && _(window.getComputedStyle(l).zIndex);
  }, [l]);
  const S = d.useCallback(
    (E) => {
      E && y.current === !0 && (x(), b == null || b(), y.current = !1);
    },
    [x, b]
  );
  return /* @__PURE__ */ p.jsx(
    wq,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ p.jsx(
            V.div,
            {
              ...o,
              ref: f,
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
mC.displayName = yq;
var bq = "SelectPopperPosition", su = d.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = it,
    ...a
  } = e, i = Ya(r);
  return /* @__PURE__ */ p.jsx(
    ja,
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
su.displayName = bq;
var [wq, Kd] = rn(hr, {}), cu = "SelectViewport", hC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = or(cu, r), i = Kd(cu, r), s = ie(t, a.onViewportChange), c = d.useRef(0);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ p.jsx(za.Slot, { scope: r, children: /* @__PURE__ */ p.jsx(
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
            const u = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && f) {
              const v = Math.abs(c.current - u.scrollTop);
              if (v > 0) {
                const y = window.innerHeight - it * 2, h = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), w = Math.max(h, g);
                if (w < y) {
                  const b = w + v, x = Math.min(y, b), C = b - x;
                  f.style.height = x + "px", f.style.bottom === "0px" && (u.scrollTop = C > 0 ? C : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
hC.displayName = cu;
var vC = "SelectGroup", [xq, Sq] = rn(vC), gC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Ne();
    return /* @__PURE__ */ p.jsx(xq, { scope: r, id: o, children: /* @__PURE__ */ p.jsx(V.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
gC.displayName = vC;
var yC = "SelectLabel", bC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Sq(yC, r);
    return /* @__PURE__ */ p.jsx(V.div, { id: o.id, ...n, ref: t });
  }
);
bC.displayName = yC;
var ra = "SelectItem", [Cq, wC] = rn(ra), xC = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = nr(ra, r), c = or(ra, r), l = s.value === n, [u, f] = d.useState(a ?? ""), [m, v] = d.useState(!1), y = ie(
      t,
      (b) => {
        var x;
        return (x = c.itemRefCallback) == null ? void 0 : x.call(c, b, n, o);
      }
    ), h = Ne(), g = d.useRef("touch"), w = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      Cq,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: d.useCallback((b) => {
          f((x) => x || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          za.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ p.jsx(
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
                  g.current !== "mouse" && w();
                }),
                onPointerUp: q(i.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: q(i.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: q(i.onPointerMove, (b) => {
                  var x;
                  g.current = b.pointerType, o ? (x = c.onItemLeave) == null || x.call(c) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(i.onPointerLeave, (b) => {
                  var x;
                  b.currentTarget === document.activeElement && ((x = c.onItemLeave) == null || x.call(c));
                }),
                onKeyDown: q(i.onKeyDown, (b) => {
                  var C;
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && b.key === " " || (uq.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
xC.displayName = ra;
var vn = "SelectItemText", SC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = nr(vn, r), s = or(vn, r), c = wC(vn, r), l = mq(vn, r), [u, f] = d.useState(null), m = ie(
      t,
      (w) => f(w),
      c.onItemTextChange,
      (w) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, w, c.value, c.disabled);
      }
    ), v = u == null ? void 0 : u.textContent, y = d.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
    return Oe(() => (h(y), () => g(y)), [h, g, y]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(V.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ln.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
SC.displayName = vn;
var CC = "SelectItemIndicator", _C = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return wC(CC, r).isSelected ? /* @__PURE__ */ p.jsx(V.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
_C.displayName = CC;
var lu = "SelectScrollUpButton", EC = d.forwardRef((e, t) => {
  const r = or(lu, e.__scopeSelect), n = Kd(lu, e.__scopeSelect), [o, a] = d.useState(!1), i = ie(t, n.onScrollButtonChange);
  return Oe(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    TC,
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
EC.displayName = lu;
var uu = "SelectScrollDownButton", PC = d.forwardRef((e, t) => {
  const r = or(uu, e.__scopeSelect), n = Kd(uu, e.__scopeSelect), [o, a] = d.useState(!1), i = ie(t, n.onScrollButtonChange);
  return Oe(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        a(u);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    TC,
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
PC.displayName = uu;
var TC = d.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = or("SelectScrollButton", r), i = d.useRef(null), s = Ga(r), c = d.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return d.useEffect(() => () => c(), [c]), Oe(() => {
    var u;
    const l = s().find((f) => f.ref.current === document.activeElement);
    (u = l == null ? void 0 : l.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ p.jsx(
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
}), _q = "SelectSeparator", RC = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ p.jsx(V.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
RC.displayName = _q;
var du = "SelectArrow", Eq = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Ya(r), a = nr(du, r), i = or(du, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(ka, { ...o, ...n, ref: t }) : null;
  }
);
Eq.displayName = du;
function NC(e) {
  return e === "" || e === void 0;
}
var MC = d.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = d.useRef(null), a = ie(t, o), i = Kn(r);
    return d.useEffect(() => {
      const s = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== r && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(s, r), s.dispatchEvent(f);
      }
    }, [i, r]), /* @__PURE__ */ p.jsx(oo, { asChild: !0, children: /* @__PURE__ */ p.jsx("select", { ...n, ref: a, defaultValue: r }) });
  }
);
MC.displayName = "BubbleSelect";
function OC(e) {
  const t = ve(e), r = d.useRef(""), n = d.useRef(0), o = d.useCallback(
    (i) => {
      const s = r.current + i;
      t(s), function c(l) {
        r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(s);
    },
    [t]
  ), a = d.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a];
}
function AC(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = Pq(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function Pq(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Tq = oC, DC = iC, Rq = cC, Nq = lC, Mq = uC, jC = dC, Oq = hC, Aq = gC, kC = bC, IC = xC, Dq = SC, jq = _C, $C = EC, LC = PC, FC = RC;
const fu = Tq, XW = Aq, pu = Rq, na = d.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsxs(
  DC,
  {
    ref: n,
    className: M(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background shadow-xs px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ p.jsx(Nq, { asChild: !0, children: /* @__PURE__ */ p.jsx(kr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
na.displayName = DC.displayName;
const qC = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  $C,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx(e0, { className: "h-4 w-4" })
  }
));
qC.displayName = $C.displayName;
const BC = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  LC,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx(kr, { className: "h-4 w-4" })
  }
));
BC.displayName = LC.displayName;
const oa = d.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ p.jsx(Mq, { children: /* @__PURE__ */ p.jsxs(
  jC,
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
      /* @__PURE__ */ p.jsx(qC, {}),
      /* @__PURE__ */ p.jsx(
        Oq,
        {
          className: M(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ p.jsx(BC, {})
    ]
  }
) }));
oa.displayName = jC.displayName;
const kq = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  kC,
  {
    ref: r,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
kq.displayName = kC.displayName;
const $n = d.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsxs(
  IC,
  {
    ref: n,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(jq, { children: /* @__PURE__ */ p.jsx(xn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ p.jsx(Dq, { children: t })
    ]
  }
));
$n.displayName = IC.displayName;
const Iq = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  FC,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Iq.displayName = FC.displayName;
var $q = "Separator", jv = "horizontal", Lq = ["horizontal", "vertical"], WC = d.forwardRef((e, t) => {
  const { decorative: r, orientation: n = jv, ...o } = e, a = Fq(n) ? n : jv, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ p.jsx(
    V.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
WC.displayName = $q;
function Fq(e) {
  return Lq.includes(e);
}
var HC = WC;
const VC = d.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ p.jsx(
    HC,
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
VC.displayName = HC.displayName;
const ZW = ma, QW = ku, JW = Xr, qq = ha, zC = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ur,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
zC.displayName = Ur.displayName;
const Bq = _t(
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
), Wq = d.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ p.jsxs(qq, { children: [
  /* @__PURE__ */ p.jsx(zC, {}),
  /* @__PURE__ */ p.jsxs(
    Kr,
    {
      ref: o,
      className: M(Bq({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ p.jsxs(Xr, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ p.jsx(ua, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Wq.displayName = Kr.displayName;
const Hq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Hq.displayName = "SheetHeader";
const Vq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Vq.displayName = "SheetFooter";
const zq = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Wn,
  {
    ref: r,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
zq.displayName = Wn.displayName;
const Gq = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Hn,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Gq.displayName = Hn.displayName;
function eH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: M("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var Xd = "Switch", [Yq, tH] = Ae(Xd), [Uq, Kq] = Yq(Xd), GC = d.forwardRef(
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
      form: u,
      ...f
    } = e, [m, v] = d.useState(null), y = ie(t, (x) => v(x)), h = d.useRef(!1), g = m ? u || !!m.closest("form") : !0, [w = !1, b] = je({
      prop: o,
      defaultProp: a,
      onChange: l
    });
    return /* @__PURE__ */ p.jsxs(Uq, { scope: r, checked: w, disabled: s, children: [
      /* @__PURE__ */ p.jsx(
        V.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": KC(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...f,
          ref: y,
          onClick: q(e.onClick, (x) => {
            b((C) => !C), g && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ p.jsx(
        Xq,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: w,
          required: i,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
GC.displayName = Xd;
var YC = "SwitchThumb", UC = d.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = Kq(YC, r);
    return /* @__PURE__ */ p.jsx(
      V.span,
      {
        "data-state": KC(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
UC.displayName = YC;
var Xq = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = d.useRef(null), i = Kn(r), s = Na(t);
  return d.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && f) {
      const m = new Event("click", { bubbles: n });
      f.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ p.jsx(
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
function KC(e) {
  return e ? "checked" : "unchecked";
}
var XC = GC, Zq = UC;
const Qq = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  XC,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ p.jsx(
      Zq,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Qq.displayName = XC.displayName;
const Jq = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ p.jsx(
  "table",
  {
    ref: r,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Jq.displayName = "Table";
const eB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "thead",
  {
    ref: r,
    className: M("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
eB.displayName = "TableHeader";
const tB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "tbody",
  {
    ref: r,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
tB.displayName = "TableBody";
const rB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
rB.displayName = "TableFooter";
const nB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
nB.displayName = "TableRow";
const oB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
oB.displayName = "TableHead";
const aB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
aB.displayName = "TableCell";
const iB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "caption",
  {
    ref: r,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
iB.displayName = "TableCaption";
var Zd = "Tabs", [sB, rH] = Ae(Zd, [
  tr
]), ZC = tr(), [cB, Qd] = sB(Zd), QC = d.forwardRef(
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
    } = e, u = It(s), [f, m] = je({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ p.jsx(
      cB,
      {
        scope: r,
        baseId: Ne(),
        value: f,
        onValueChange: m,
        orientation: i,
        dir: u,
        activationMode: c,
        children: /* @__PURE__ */ p.jsx(
          V.div,
          {
            dir: u,
            "data-orientation": i,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
QC.displayName = Zd;
var JC = "TabsList", e_ = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = Qd(JC, r), i = ZC(r);
    return /* @__PURE__ */ p.jsx(
      Fa,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ p.jsx(
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
e_.displayName = JC;
var t_ = "TabsTrigger", r_ = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = Qd(t_, r), s = ZC(r), c = a_(i.baseId, n), l = i_(i.baseId, n), u = n === i.value;
    return /* @__PURE__ */ p.jsx(
      qa,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ p.jsx(
          V.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": l,
            "data-state": u ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: q(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(n) : f.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && i.onValueChange(n);
            }),
            onFocus: q(e.onFocus, () => {
              const f = i.activationMode !== "manual";
              !u && !o && f && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
r_.displayName = t_;
var n_ = "TabsContent", o_ = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = Qd(n_, r), c = a_(s.baseId, n), l = i_(s.baseId, n), u = n === s.value, f = d.useRef(u);
    return d.useEffect(() => {
      const m = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ p.jsx(Pe, { present: o || u, children: ({ present: m }) => /* @__PURE__ */ p.jsx(
      V.div,
      {
        "data-state": u ? "active" : "inactive",
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
          animationDuration: f.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
o_.displayName = n_;
function a_(e, t) {
  return `${e}-trigger-${t}`;
}
function i_(e, t) {
  return `${e}-content-${t}`;
}
var lB = QC, s_ = e_, c_ = r_, l_ = o_;
const nH = lB, uB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  s_,
  {
    ref: r,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
uB.displayName = s_.displayName;
const dB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  c_,
  {
    ref: r,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
dB.displayName = c_.displayName;
const fB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  l_,
  {
    ref: r,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
fB.displayName = l_.displayName;
const pB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
pB.displayName = "Textarea";
var Jd = "ToastProvider", [ef, mB, hB] = vr("Toast"), [u_, oH] = Ae("Toast", [hB]), [vB, Ua] = u_(Jd), d_ = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = d.useState(null), [l, u] = d.useState(0), f = d.useRef(!1), m = d.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Jd}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ p.jsx(ef.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
    vB,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: l,
      viewport: s,
      onViewportChange: c,
      onToastAdd: d.useCallback(() => u((v) => v + 1), []),
      onToastRemove: d.useCallback(() => u((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
d_.displayName = Jd;
var f_ = "ToastViewport", gB = ["F8"], mu = "toast.viewportPause", hu = "toast.viewportResume", p_ = d.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = gB,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Ua(f_, r), s = mB(r), c = d.useRef(null), l = d.useRef(null), u = d.useRef(null), f = d.useRef(null), m = ie(t, f, i.onViewportChange), v = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
    d.useEffect(() => {
      const g = (w) => {
        var x;
        n.length !== 0 && n.every((C) => w[C] || w.code === C) && ((x = f.current) == null || x.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), d.useEffect(() => {
      const g = c.current, w = f.current;
      if (y && g && w) {
        const b = () => {
          if (!i.isClosePausedRef.current) {
            const S = new CustomEvent(mu);
            w.dispatchEvent(S), i.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (i.isClosePausedRef.current) {
            const S = new CustomEvent(hu);
            w.dispatchEvent(S), i.isClosePausedRef.current = !1;
          }
        }, C = (S) => {
          !g.contains(S.relatedTarget) && x();
        }, _ = () => {
          g.contains(document.activeElement) || x();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", C), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", _), window.addEventListener("blur", b), window.addEventListener("focus", x), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", C), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", _), window.removeEventListener("blur", b), window.removeEventListener("focus", x);
        };
      }
    }, [y, i.isClosePausedRef]);
    const h = d.useCallback(
      ({ tabbingDirection: g }) => {
        const b = s().map((x) => {
          const C = x.ref.current, _ = [C, ...MB(C)];
          return g === "forwards" ? _ : _.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [s]
    );
    return d.useEffect(() => {
      const g = f.current;
      if (g) {
        const w = (b) => {
          var _, S, E;
          const x = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !x) {
            const R = document.activeElement, T = b.shiftKey;
            if (b.target === g && T) {
              (_ = l.current) == null || _.focus();
              return;
            }
            const F = h({ tabbingDirection: T ? "backwards" : "forwards" }), L = F.findIndex((N) => N === R);
            wl(F.slice(L + 1)) ? b.preventDefault() : T ? (S = l.current) == null || S.focus() : (E = u.current) == null || E.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [s, h]), /* @__PURE__ */ p.jsxs(
      gP,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ p.jsx(
            vu,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                wl(g);
              }
            }
          ),
          /* @__PURE__ */ p.jsx(ef.Slot, { scope: r, children: /* @__PURE__ */ p.jsx(V.ol, { tabIndex: -1, ...a, ref: m }) }),
          y && /* @__PURE__ */ p.jsx(
            vu,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                wl(g);
              }
            }
          )
        ]
      }
    );
  }
);
p_.displayName = f_;
var m_ = "ToastFocusProxy", vu = d.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = Ua(m_, r);
    return /* @__PURE__ */ p.jsx(
      oo,
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
vu.displayName = m_;
var Ka = "Toast", yB = "toast.swipeStart", bB = "toast.swipeMove", wB = "toast.swipeCancel", xB = "toast.swipeEnd", h_ = d.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s = !0, c] = je({
      prop: n,
      defaultProp: o,
      onChange: a
    });
    return /* @__PURE__ */ p.jsx(Pe, { present: r || s, children: /* @__PURE__ */ p.jsx(
      _B,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: ve(e.onPause),
        onResume: ve(e.onResume),
        onSwipeStart: q(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: q(e.onSwipeMove, (l) => {
          const { x: u, y: f } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: q(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: q(e.onSwipeEnd, (l) => {
          const { x: u, y: f } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), c(!1);
        })
      }
    ) });
  }
);
h_.displayName = Ka;
var [SB, CB] = u_(Ka, {
  onClose() {
  }
}), _B = d.forwardRef(
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
      onSwipeStart: u,
      onSwipeMove: f,
      onSwipeCancel: m,
      onSwipeEnd: v,
      ...y
    } = e, h = Ua(Ka, r), [g, w] = d.useState(null), b = ie(t, (N) => w(N)), x = d.useRef(null), C = d.useRef(null), _ = o || h.duration, S = d.useRef(0), E = d.useRef(_), R = d.useRef(0), { onToastAdd: T, onToastRemove: D } = h, O = ve(() => {
      var I;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((I = h.viewport) == null || I.focus()), i();
    }), F = d.useCallback(
      (N) => {
        !N || N === 1 / 0 || (window.clearTimeout(R.current), S.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(O, N));
      },
      [O]
    );
    d.useEffect(() => {
      const N = h.viewport;
      if (N) {
        const I = () => {
          F(E.current), l == null || l();
        }, k = () => {
          const G = (/* @__PURE__ */ new Date()).getTime() - S.current;
          E.current = E.current - G, window.clearTimeout(R.current), c == null || c();
        };
        return N.addEventListener(mu, k), N.addEventListener(hu, I), () => {
          N.removeEventListener(mu, k), N.removeEventListener(hu, I);
        };
      }
    }, [h.viewport, _, c, l, F]), d.useEffect(() => {
      a && !h.isClosePausedRef.current && F(_);
    }, [a, _, h.isClosePausedRef, F]), d.useEffect(() => (T(), () => D()), [T, D]);
    const L = d.useMemo(() => g ? S_(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      L && /* @__PURE__ */ p.jsx(
        EB,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: L
        }
      ),
      /* @__PURE__ */ p.jsx(SB, { scope: r, onClose: O, children: Ln.createPortal(
        /* @__PURE__ */ p.jsx(ef.ItemSlot, { scope: r, children: /* @__PURE__ */ p.jsx(
          vP,
          {
            asChild: !0,
            onEscapeKeyDown: q(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || O(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ p.jsx(
              V.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...y,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: q(e.onKeyDown, (N) => {
                  N.key === "Escape" && (s == null || s(N.nativeEvent), N.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, O()));
                }),
                onPointerDown: q(e.onPointerDown, (N) => {
                  N.button === 0 && (x.current = { x: N.clientX, y: N.clientY });
                }),
                onPointerMove: q(e.onPointerMove, (N) => {
                  if (!x.current) return;
                  const I = N.clientX - x.current.x, k = N.clientY - x.current.y, G = !!C.current, B = ["left", "right"].includes(h.swipeDirection), $ = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, J = B ? $(0, I) : 0, ee = B ? 0 : $(0, k), j = N.pointerType === "touch" ? 10 : 2, Y = { x: J, y: ee }, K = { originalEvent: N, delta: Y };
                  G ? (C.current = Y, _o(bB, f, K, {
                    discrete: !1
                  })) : kv(Y, h.swipeDirection, j) ? (C.current = Y, _o(yB, u, K, {
                    discrete: !1
                  }), N.target.setPointerCapture(N.pointerId)) : (Math.abs(I) > j || Math.abs(k) > j) && (x.current = null);
                }),
                onPointerUp: q(e.onPointerUp, (N) => {
                  const I = C.current, k = N.target;
                  if (k.hasPointerCapture(N.pointerId) && k.releasePointerCapture(N.pointerId), C.current = null, x.current = null, I) {
                    const G = N.currentTarget, B = { originalEvent: N, delta: I };
                    kv(I, h.swipeDirection, h.swipeThreshold) ? _o(xB, v, B, {
                      discrete: !0
                    }) : _o(
                      wB,
                      m,
                      B,
                      {
                        discrete: !0
                      }
                    ), G.addEventListener("click", ($) => $.preventDefault(), {
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
), EB = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Ua(Ka, t), [a, i] = d.useState(!1), [s, c] = d.useState(!1);
  return RB(() => i(!0)), d.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ p.jsx(gr, { asChild: !0, children: /* @__PURE__ */ p.jsx(oo, { ...n, children: a && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, PB = "ToastTitle", v_ = d.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ p.jsx(V.div, { ...n, ref: t });
  }
);
v_.displayName = PB;
var TB = "ToastDescription", g_ = d.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ p.jsx(V.div, { ...n, ref: t });
  }
);
g_.displayName = TB;
var y_ = "ToastAction", b_ = d.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ p.jsx(x_, { altText: r, asChild: !0, children: /* @__PURE__ */ p.jsx(tf, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${y_}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
b_.displayName = y_;
var w_ = "ToastClose", tf = d.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = CB(w_, r);
    return /* @__PURE__ */ p.jsx(x_, { asChild: !0, children: /* @__PURE__ */ p.jsx(
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
tf.displayName = w_;
var x_ = d.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ p.jsx(
    V.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function S_(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), NB(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...S_(n));
    }
  }), t;
}
function _o(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? wn(o, a) : o.dispatchEvent(a);
}
var kv = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function RB(e = () => {
}) {
  const t = ve(e);
  Oe(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function NB(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function MB(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function wl(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var OB = d_, C_ = p_, __ = h_, E_ = v_, P_ = g_, T_ = b_, R_ = tf;
const AB = OB, DB = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, N_ = d.forwardRef(({ className: e, position: t = "bottom-right", ...r }, n) => /* @__PURE__ */ p.jsx(
  C_,
  {
    ref: n,
    className: M(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${DB[t]}`,
      e
    ),
    ...r
  }
));
N_.displayName = C_.displayName;
const jB = _t(
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
), M_ = d.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ p.jsx(
  __,
  {
    ref: n,
    className: M(jB({ variant: t }), e),
    ...r
  }
));
M_.displayName = __.displayName;
const kB = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  T_,
  {
    ref: r,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
kB.displayName = T_.displayName;
const O_ = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  R_,
  {
    ref: r,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ p.jsx(ua, { className: "h-4 w-4" })
  }
));
O_.displayName = R_.displayName;
const A_ = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  E_,
  {
    ref: r,
    className: M("text-sm font-semibold", e),
    ...t
  }
));
A_.displayName = E_.displayName;
const D_ = d.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  P_,
  {
    ref: r,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
D_.displayName = P_.displayName;
const IB = 1, $B = 1e4;
let xl = 0;
function LB() {
  return xl = (xl + 1) % Number.MAX_SAFE_INTEGER, xl.toString();
}
const Sl = /* @__PURE__ */ new Map(), Iv = (e) => {
  if (Sl.has(e))
    return;
  const t = setTimeout(() => {
    Sl.delete(e), bn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, $B);
  Sl.set(e, t);
}, FB = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, IB)
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
      return r ? Iv(r) : e.toasts.forEach((n) => {
        Iv(n.id);
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
}, Do = [];
let jo = { toasts: [] };
function bn(e) {
  jo = FB(jo, e), Do.forEach((t) => {
    t(jo);
  });
}
function qB({ ...e }) {
  const t = LB(), r = (o) => bn({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => bn({ type: "DISMISS_TOAST", toastId: t });
  return bn({
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
function BB() {
  const [e, t] = d.useState(jo);
  return d.useEffect(() => (Do.push(t), () => {
    const r = Do.indexOf(t);
    r > -1 && Do.splice(r, 1);
  }), [e]), {
    ...e,
    toast: qB,
    dismiss: (r) => bn({ type: "DISMISS_TOAST", toastId: r })
  };
}
function aH() {
  const { toasts: e } = BB();
  return /* @__PURE__ */ p.jsxs(AB, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ p.jsxs(M_, { ...a, children: [
        /* @__PURE__ */ p.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ p.jsx(A_, { children: r }),
          n && /* @__PURE__ */ p.jsx(D_, { children: n })
        ] }),
        o,
        /* @__PURE__ */ p.jsx(O_, {})
      ] }, t);
    }),
    /* @__PURE__ */ p.jsx(N_, {})
  ] });
}
var WB = "Toggle", rf = d.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n = !1, onPressedChange: o, ...a } = e, [i = !1, s] = je({
    prop: r,
    onChange: o,
    defaultProp: n
  });
  return /* @__PURE__ */ p.jsx(
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
rf.displayName = WB;
var j_ = rf;
const k_ = _t(
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
), HB = d.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ p.jsx(
  j_,
  {
    ref: o,
    className: M(k_({ variant: t, size: r, className: e })),
    ...n
  }
));
HB.displayName = j_.displayName;
var nn = "ToggleGroup", [I_, iH] = Ae(nn, [
  tr
]), $_ = tr(), nf = A.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single") {
    const o = n;
    return /* @__PURE__ */ p.jsx(VB, { ...o, ref: t });
  }
  if (r === "multiple") {
    const o = n;
    return /* @__PURE__ */ p.jsx(zB, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${nn}\``);
});
nf.displayName = nn;
var [L_, F_] = I_(nn), VB = A.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = je({
    prop: r,
    defaultProp: n,
    onChange: o
  });
  return /* @__PURE__ */ p.jsx(
    L_,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: s,
      onItemDeactivate: A.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ p.jsx(q_, { ...a, ref: t })
    }
  );
}), zB = A.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = je({
    prop: r,
    defaultProp: n,
    onChange: o
  }), c = A.useCallback(
    (u) => s((f = []) => [...f, u]),
    [s]
  ), l = A.useCallback(
    (u) => s((f = []) => f.filter((m) => m !== u)),
    [s]
  );
  return /* @__PURE__ */ p.jsx(
    L_,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ p.jsx(q_, { ...a, ref: t })
    }
  );
});
nf.displayName = nn;
var [GB, YB] = I_(nn), q_ = A.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = $_(r), u = It(i), f = { role: "group", dir: u, ...c };
    return /* @__PURE__ */ p.jsx(GB, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ p.jsx(
      Fa,
      {
        asChild: !0,
        ...l,
        orientation: a,
        dir: u,
        loop: s,
        children: /* @__PURE__ */ p.jsx(V.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ p.jsx(V.div, { ...f, ref: t }) });
  }
), aa = "ToggleGroupItem", B_ = A.forwardRef(
  (e, t) => {
    const r = F_(aa, e.__scopeToggleGroup), n = YB(aa, e.__scopeToggleGroup), o = $_(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = A.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ p.jsx(
      qa,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ p.jsx($v, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ p.jsx($v, { ...s, ref: t });
  }
);
B_.displayName = aa;
var $v = A.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = F_(aa, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ p.jsx(
      rf,
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
), W_ = nf, H_ = B_;
const V_ = d.createContext({
  size: "default",
  variant: "default"
}), UB = d.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ p.jsx(
  W_,
  {
    ref: a,
    className: M("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ p.jsx(V_.Provider, { value: { variant: t, size: r }, children: n })
  }
));
UB.displayName = W_.displayName;
const KB = d.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = d.useContext(V_);
  return /* @__PURE__ */ p.jsx(
    H_,
    {
      ref: a,
      className: M(
        k_({
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
KB.displayName = H_.displayName;
var [Xa, sH] = Ae("Tooltip", [
  Jt
]), Za = Jt(), z_ = "TooltipProvider", XB = 700, gu = "tooltip.open", [ZB, of] = Xa(z_), G_ = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = XB,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, [i, s] = d.useState(!0), c = d.useRef(!1), l = d.useRef(0);
  return d.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ p.jsx(
    ZB,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: r,
      onOpen: d.useCallback(() => {
        window.clearTimeout(l.current), s(!1);
      }, []),
      onClose: d.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: d.useCallback((u) => {
        c.current = u;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
G_.displayName = z_;
var Qa = "Tooltip", [QB, io] = Xa(Qa), Y_ = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o = !1,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = of(Qa, e.__scopeTooltip), l = Za(t), [u, f] = d.useState(null), m = Ne(), v = d.useRef(0), y = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = d.useRef(!1), [w = !1, b] = je({
    prop: n,
    defaultProp: o,
    onChange: (E) => {
      E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(gu))) : c.onClose(), a == null || a(E);
    }
  }), x = d.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), C = d.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, b(!0);
  }, [b]), _ = d.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, b(!1);
  }, [b]), S = d.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, b(!0), v.current = 0;
    }, h);
  }, [h, b]);
  return d.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ p.jsx(Qn, { ...l, children: /* @__PURE__ */ p.jsx(
    QB,
    {
      scope: t,
      contentId: m,
      open: w,
      stateAttribute: x,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: d.useCallback(() => {
        c.isOpenDelayed ? S() : C();
      }, [c.isOpenDelayed, S, C]),
      onTriggerLeave: d.useCallback(() => {
        y ? _() : (window.clearTimeout(v.current), v.current = 0);
      }, [_, y]),
      onOpen: C,
      onClose: _,
      disableHoverableContent: y,
      children: r
    }
  ) });
};
Y_.displayName = Qa;
var yu = "TooltipTrigger", U_ = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = io(yu, r), a = of(yu, r), i = Za(r), s = d.useRef(null), c = ie(t, s, o.onTriggerChange), l = d.useRef(!1), u = d.useRef(!1), f = d.useCallback(() => l.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p.jsx(Jn, { asChild: !0, ...i, children: /* @__PURE__ */ p.jsx(
      V.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: q(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          l.current = !0, document.addEventListener("pointerup", f, { once: !0 });
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
U_.displayName = yu;
var af = "TooltipPortal", [JB, eW] = Xa(af, {
  forceMount: void 0
}), K_ = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = io(af, t);
  return /* @__PURE__ */ p.jsx(JB, { scope: t, forceMount: r, children: /* @__PURE__ */ p.jsx(Pe, { present: r || a.open, children: /* @__PURE__ */ p.jsx(gr, { asChild: !0, container: o, children: n }) }) });
};
K_.displayName = af;
var zr = "TooltipContent", X_ = d.forwardRef(
  (e, t) => {
    const r = eW(zr, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = io(zr, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx(Pe, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ p.jsx(Z_, { side: o, ...a, ref: t }) : /* @__PURE__ */ p.jsx(tW, { side: o, ...a, ref: t }) });
  }
), tW = d.forwardRef((e, t) => {
  const r = io(zr, e.__scopeTooltip), n = of(zr, e.__scopeTooltip), o = d.useRef(null), a = ie(t, o), [i, s] = d.useState(null), { trigger: c, onClose: l } = r, u = o.current, { onPointerInTransitChange: f } = n, m = d.useCallback(() => {
    s(null), f(!1);
  }, [f]), v = d.useCallback(
    (y, h) => {
      const g = y.currentTarget, w = { x: y.clientX, y: y.clientY }, b = aW(w, g.getBoundingClientRect()), x = iW(w, b), C = sW(h.getBoundingClientRect()), _ = lW([...x, ...C]);
      s(_), f(!0);
    },
    [f]
  );
  return d.useEffect(() => () => m(), [m]), d.useEffect(() => {
    if (c && u) {
      const y = (g) => v(g, u), h = (g) => v(g, c);
      return c.addEventListener("pointerleave", y), u.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", y), u.removeEventListener("pointerleave", h);
      };
    }
  }, [c, u, v, m]), d.useEffect(() => {
    if (i) {
      const y = (h) => {
        const g = h.target, w = { x: h.clientX, y: h.clientY }, b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), x = !cW(w, i);
        b ? m() : x && (m(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, u, i, l, m]), /* @__PURE__ */ p.jsx(Z_, { ...e, ref: a });
}), [rW, nW] = Xa(Qa, { isInside: !1 }), Z_ = d.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = io(zr, r), l = Za(r), { onClose: u } = c;
    return d.useEffect(() => (document.addEventListener(gu, u), () => document.removeEventListener(gu, u)), [u]), d.useEffect(() => {
      if (c.trigger) {
        const f = (m) => {
          const v = m.target;
          v != null && v.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ p.jsx(
      Zt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ p.jsxs(
          ja,
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
              /* @__PURE__ */ p.jsx(xu, { children: n }),
              /* @__PURE__ */ p.jsx(rW, { scope: r, isInside: !0, children: /* @__PURE__ */ p.jsx(oS, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
X_.displayName = zr;
var Q_ = "TooltipArrow", oW = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Za(r);
    return nW(
      Q_,
      r
    ).isInside ? null : /* @__PURE__ */ p.jsx(ka, { ...o, ...n, ref: t });
  }
);
oW.displayName = Q_;
function aW(e, t) {
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
function iW(e, t, r = 5) {
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
function sW(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function cW(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, u = t[i].y;
    c > n != u > n && r < (l - s) * (n - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function lW(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), uW(t);
}
function uW(e) {
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
var dW = G_, fW = Y_, pW = U_, mW = K_, J_ = X_;
const cH = dW, lH = fW, uH = pW, hW = d.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ p.jsx(mW, { children: /* @__PURE__ */ p.jsx(
  J_,
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
hW.displayName = J_.displayName;
export {
  xW as Accordion,
  oP as AccordionContent,
  rP as AccordionItem,
  nP as AccordionTrigger,
  T2 as AiqiaSpinner,
  iP as Alert,
  cP as AlertDescription,
  CW as AlertDialog,
  $T as AlertDialogAction,
  LT as AlertDialogCancel,
  AT as AlertDialogContent,
  IT as AlertDialogDescription,
  jT as AlertDialogFooter,
  DT as AlertDialogHeader,
  py as AlertDialogOverlay,
  OT as AlertDialogPortal,
  kT as AlertDialogTitle,
  _W as AlertDialogTrigger,
  sP as AlertTitle,
  WT as Avatar,
  VT as AvatarFallback,
  HT as AvatarImage,
  Nf as Badge,
  GT as Breadcrumb,
  QT as BreadcrumbEllipsis,
  UT as BreadcrumbItem,
  KT as BreadcrumbLink,
  YT as BreadcrumbList,
  XT as BreadcrumbPage,
  ZT as BreadcrumbSeparator,
  Zr as Button,
  Ky as Calendar,
  P1 as Card,
  M1 as CardContent,
  N1 as CardDescription,
  O1 as CardFooter,
  T1 as CardHeader,
  R1 as CardTitle,
  SO as Carousel,
  CO as CarouselContent,
  _O as CarouselItem,
  PO as CarouselNext,
  EO as CarouselPrevious,
  Zk as ChartContainer,
  NW as ChartLegend,
  eI as ChartLegendContent,
  Qk as ChartStyle,
  RW as ChartTooltip,
  Jk as ChartTooltipContent,
  iI as Checkbox,
  dd as Command,
  OW as CommandDialog,
  ow as CommandEmpty,
  aw as CommandGroup,
  rw as CommandInput,
  No as CommandItem,
  nw as CommandList,
  iw as CommandSeparator,
  kI as CommandShortcut,
  DW as DatePicker,
  pL as DateTimePicker,
  mL as Dialog,
  kW as DialogClose,
  zw as DialogContent,
  bL as DialogDescription,
  gL as DialogFooter,
  vL as DialogHeader,
  Vw as DialogOverlay,
  hL as DialogPortal,
  yL as DialogTitle,
  jW as DialogTrigger,
  $W as DropdownMenu,
  HF as DropdownMenuCheckboxItem,
  BF as DropdownMenuContent,
  FW as DropdownMenuGroup,
  WF as DropdownMenuItem,
  zF as DropdownMenuLabel,
  qW as DropdownMenuPortal,
  WW as DropdownMenuRadioGroup,
  VF as DropdownMenuRadioItem,
  GF as DropdownMenuSeparator,
  YF as DropdownMenuShortcut,
  BW as DropdownMenuSub,
  qF as DropdownMenuSubContent,
  FF as DropdownMenuSubTrigger,
  LW as DropdownMenuTrigger,
  HW as Form,
  rS as FormControl,
  ZF as FormDescription,
  XF as FormField,
  eS as FormItem,
  tS as FormLabel,
  nS as FormMessage,
  JF as Heading,
  kd as Input,
  e2 as InputForm,
  Zx as Label,
  P2 as ListItem,
  GW as Loader,
  R2 as MaskedInput,
  M2 as MultiSelect,
  b2 as NavigationMenu,
  C2 as NavigationMenuContent,
  E2 as NavigationMenuIndicator,
  zW as NavigationMenuItem,
  _2 as NavigationMenuLink,
  w2 as NavigationMenuList,
  S2 as NavigationMenuTrigger,
  MS as NavigationMenuViewport,
  O2 as Pagination,
  A2 as PaginationContent,
  I2 as PaginationEllipsis,
  D2 as PaginationItem,
  Wd as PaginationLink,
  k2 as PaginationNext,
  j2 as PaginationPrevious,
  Cd as Popover,
  Ia as PopoverContent,
  _d as PopoverTrigger,
  Y2 as RadioGroup,
  U2 as RadioGroupItem,
  cq as ScrollArea,
  nC as ScrollBar,
  fu as Select,
  oa as SelectContent,
  XW as SelectGroup,
  $n as SelectItem,
  kq as SelectLabel,
  BC as SelectScrollDownButton,
  qC as SelectScrollUpButton,
  Iq as SelectSeparator,
  na as SelectTrigger,
  pu as SelectValue,
  VC as Separator,
  ZW as Sheet,
  JW as SheetClose,
  Wq as SheetContent,
  Gq as SheetDescription,
  Vq as SheetFooter,
  Hq as SheetHeader,
  zC as SheetOverlay,
  qq as SheetPortal,
  zq as SheetTitle,
  QW as SheetTrigger,
  eH as Skeleton,
  Qq as Switch,
  Jq as Table,
  tB as TableBody,
  iB as TableCaption,
  aB as TableCell,
  rB as TableFooter,
  oB as TableHead,
  eB as TableHeader,
  nB as TableRow,
  nH as Tabs,
  fB as TabsContent,
  uB as TabsList,
  dB as TabsTrigger,
  pB as Textarea,
  Hw as TimePicker,
  Oo as TimePickerInput,
  M_ as Toast,
  kB as ToastAction,
  O_ as ToastClose,
  D_ as ToastDescription,
  AB as ToastProvider,
  A_ as ToastTitle,
  N_ as ToastViewport,
  aH as Toaster,
  HB as Toggle,
  UB as ToggleGroup,
  KB as ToggleGroupItem,
  lH as Tooltip,
  hW as TooltipContent,
  cH as TooltipProvider,
  uH as TooltipTrigger,
  zT as badgeVariants,
  TW as brazillianStates,
  zt as buttonVariants,
  M as cn,
  PW as mask,
  x2 as navigationMenuTriggerStyle,
  FB as reducer,
  qB as toast,
  k_ as toggleVariants,
  Wa as useFormField,
  BB as useToast
};
