import * as u from "react";
import O, { forwardRef as tu, createElement as sl, createContext as iC, useContext as sC, useCallback as qe, useRef as nr, useLayoutEffect as lv, useState as pt, useEffect as Lr, useMemo as uo, useImperativeHandle as ru, isValidElement as cC, PureComponent as Go, cloneElement as lC } from "react";
import * as Cn from "react-dom";
import uv from "react-dom";
import { Link as uC } from "react-router-dom";
import { useFormContext as dC, FormProvider as fC, Controller as pC } from "react-hook-form";
var Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kn = { exports: {} }, Kr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function mC() {
  if (kd) return Kr;
  kd = 1;
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
  return Kr.Fragment = t, Kr.jsx = r, Kr.jsxs = r, Kr;
}
var Xr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id;
function hC() {
  return Id || (Id = 1, process.env.NODE_ENV !== "production" && function() {
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
        case N:
          return "Profiler";
        case E:
          return "StrictMode";
        case q:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (typeof P.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), P.$$typeof) {
          case k:
            return (P.displayName || "Context") + ".Provider";
          case T:
            return (P._context.displayName || "Context") + ".Consumer";
          case D:
            var Z = P.render;
            return P = P.displayName, P || (P = Z.displayName || Z.name || "", P = P !== "" ? "ForwardRef(" + P + ")" : "ForwardRef"), P;
          case R:
            return Z = P.displayName || null, Z !== null ? Z : e(P.type) || "Memo";
          case I:
            Z = P._payload, P = P._init;
            try {
              return e(P(Z));
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
        var Z = !1;
      } catch {
        Z = !0;
      }
      if (Z) {
        Z = console;
        var Q = Z.error, pe = typeof Symbol == "function" && Symbol.toStringTag && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return Q.call(
          Z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          pe
        ), t(P);
      }
    }
    function n() {
    }
    function o() {
      if (U === 0) {
        z = console.log, ee = console.info, H = console.warn, oe = console.error, se = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
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
      U++;
    }
    function a() {
      if (U--, U === 0) {
        var P = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: te({}, P, { value: z }),
          info: te({}, P, { value: ee }),
          warn: te({}, P, { value: H }),
          error: te({}, P, { value: oe }),
          group: te({}, P, { value: se }),
          groupCollapsed: te({}, P, { value: ce }),
          groupEnd: te({}, P, { value: fe })
        });
      }
      0 > U && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function i(P) {
      if (le === void 0)
        try {
          throw Error();
        } catch (Q) {
          var Z = Q.stack.trim().match(/\n( *(at )?)/);
          le = Z && Z[1] || "", Re = -1 < Q.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Q.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + le + P + Re;
    }
    function s(P, Z) {
      if (!P || Y) return "";
      var Q = ke.get(P);
      if (Q !== void 0) return Q;
      Y = !0, Q = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var pe = null;
      pe = L.H, L.H = null, o();
      try {
        var Me = {
          DetermineComponentFrameRoot: function() {
            try {
              if (Z) {
                var ae = function() {
                  throw Error();
                };
                if (Object.defineProperty(ae.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ae, []);
                  } catch (ue) {
                    var we = ue;
                  }
                  Reflect.construct(P, [], ae);
                } else {
                  try {
                    ae.call();
                  } catch (ue) {
                    we = ue;
                  }
                  P.call(ae.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ue) {
                  we = ue;
                }
                (ae = P()) && typeof ae.catch == "function" && ae.catch(function() {
                });
              }
            } catch (ue) {
              if (ue && we && typeof ue.stack == "string")
                return [ue.stack, we.stack];
            }
            return [null, null];
          }
        };
        Me.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var Se = Object.getOwnPropertyDescriptor(
          Me.DetermineComponentFrameRoot,
          "name"
        );
        Se && Se.configurable && Object.defineProperty(
          Me.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var ie = Me.DetermineComponentFrameRoot(), Ke = ie[0], At = ie[1];
        if (Ke && At) {
          var Ae = Ke.split(`
`), it = At.split(`
`);
          for (ie = Se = 0; Se < Ae.length && !Ae[Se].includes(
            "DetermineComponentFrameRoot"
          ); )
            Se++;
          for (; ie < it.length && !it[ie].includes(
            "DetermineComponentFrameRoot"
          ); )
            ie++;
          if (Se === Ae.length || ie === it.length)
            for (Se = Ae.length - 1, ie = it.length - 1; 1 <= Se && 0 <= ie && Ae[Se] !== it[ie]; )
              ie--;
          for (; 1 <= Se && 0 <= ie; Se--, ie--)
            if (Ae[Se] !== it[ie]) {
              if (Se !== 1 || ie !== 1)
                do
                  if (Se--, ie--, 0 > ie || Ae[Se] !== it[ie]) {
                    var Kt = `
` + Ae[Se].replace(
                      " at new ",
                      " at "
                    );
                    return P.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", P.displayName)), typeof P == "function" && ke.set(P, Kt), Kt;
                  }
                while (1 <= Se && 0 <= ie);
              break;
            }
        }
      } finally {
        Y = !1, L.H = pe, a(), Error.prepareStackTrace = Q;
      }
      return Ae = (Ae = P ? P.displayName || P.name : "") ? i(Ae) : "", typeof P == "function" && ke.set(P, Ae), Ae;
    }
    function c(P) {
      if (P == null) return "";
      if (typeof P == "function") {
        var Z = P.prototype;
        return s(
          P,
          !(!Z || !Z.isReactComponent)
        );
      }
      if (typeof P == "string") return i(P);
      switch (P) {
        case q:
          return i("Suspense");
        case F:
          return i("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case D:
            return P = s(P.render, !1), P;
          case R:
            return c(P.type);
          case I:
            Z = P._payload, P = P._init;
            try {
              return c(P(Z));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var P = L.A;
      return P === null ? null : P.getOwner();
    }
    function f(P) {
      if (J.call(P, "key")) {
        var Z = Object.getOwnPropertyDescriptor(P, "key").get;
        if (Z && Z.isReactWarning) return !1;
      }
      return P.key !== void 0;
    }
    function p(P, Z) {
      function Q() {
        Le || (Le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Z
        ));
      }
      Q.isReactWarning = !0, Object.defineProperty(P, "key", {
        get: Q,
        configurable: !0
      });
    }
    function m() {
      var P = e(this.type);
      return hr[P] || (hr[P] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), P = this.props.ref, P !== void 0 ? P : null;
    }
    function v(P, Z, Q, pe, Me, Se) {
      return Q = Se.ref, P = {
        $$typeof: C,
        type: P,
        key: Z,
        props: Se,
        _owner: Me
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(P, "ref", {
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
    function y(P, Z, Q, pe, Me, Se) {
      if (typeof P == "string" || typeof P == "function" || P === S || P === N || P === E || P === q || P === F || P === j || typeof P == "object" && P !== null && (P.$$typeof === I || P.$$typeof === R || P.$$typeof === k || P.$$typeof === T || P.$$typeof === D || P.$$typeof === A || P.getModuleId !== void 0)) {
        var ie = Z.children;
        if (ie !== void 0)
          if (pe)
            if (V(ie)) {
              for (pe = 0; pe < ie.length; pe++)
                h(ie[pe], P);
              Object.freeze && Object.freeze(ie);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else h(ie, P);
      } else
        ie = "", (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), P === null ? pe = "null" : V(P) ? pe = "array" : P !== void 0 && P.$$typeof === C ? (pe = "<" + (e(P.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof P, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          pe,
          ie
        );
      if (J.call(Z, "key")) {
        ie = e(P);
        var Ke = Object.keys(Z).filter(function(Ae) {
          return Ae !== "key";
        });
        pe = 0 < Ke.length ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}", wt[ie + pe] || (Ke = 0 < Ke.length ? "{" + Ke.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          pe,
          ie,
          Ke,
          ie
        ), wt[ie + pe] = !0);
      }
      if (ie = null, Q !== void 0 && (r(Q), ie = "" + Q), f(Z) && (r(Z.key), ie = "" + Z.key), "key" in Z) {
        Q = {};
        for (var At in Z)
          At !== "key" && (Q[At] = Z[At]);
      } else Q = Z;
      return ie && p(
        Q,
        typeof P == "function" ? P.displayName || P.name || "Unknown" : P
      ), v(P, ie, Se, Me, l(), Q);
    }
    function h(P, Z) {
      if (typeof P == "object" && P && P.$$typeof !== $e) {
        if (V(P))
          for (var Q = 0; Q < P.length; Q++) {
            var pe = P[Q];
            g(pe) && w(pe, Z);
          }
        else if (g(P))
          P._store && (P._store.validated = 1);
        else if (P === null || typeof P != "object" ? Q = null : (Q = G && P[G] || P["@@iterator"], Q = typeof Q == "function" ? Q : null), typeof Q == "function" && Q !== P.entries && (Q = Q.call(P), Q !== P))
          for (; !(P = Q.next()).done; )
            g(P.value) && w(P.value, Z);
      }
    }
    function g(P) {
      return typeof P == "object" && P !== null && P.$$typeof === C;
    }
    function w(P, Z) {
      if (P._store && !P._store.validated && P.key == null && (P._store.validated = 1, Z = b(Z), !zn[Z])) {
        zn[Z] = !0;
        var Q = "";
        P && P._owner != null && P._owner !== l() && (Q = null, typeof P._owner.tag == "number" ? Q = e(P._owner.type) : typeof P._owner.name == "string" && (Q = P._owner.name), Q = " It was passed a child from " + Q + ".");
        var pe = L.getCurrentStack;
        L.getCurrentStack = function() {
          var Me = c(P.type);
          return pe && (Me += pe() || ""), Me;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          Z,
          Q
        ), L.getCurrentStack = pe;
      }
    }
    function b(P) {
      var Z = "", Q = l();
      return Q && (Q = e(Q.type)) && (Z = `

Check the render method of \`` + Q + "`."), Z || (P = e(P)) && (Z = `

Check the top-level render call using <` + P + ">."), Z;
    }
    var x = O, C = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), k = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), G = Symbol.iterator, B = Symbol.for("react.client.reference"), L = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, te = Object.assign, A = Symbol.for("react.client.reference"), V = Array.isArray, U = 0, z, ee, H, oe, se, ce, fe;
    n.__reactDisabledLog = !0;
    var le, Re, Y = !1, ke = new (typeof WeakMap == "function" ? WeakMap : Map)(), $e = Symbol.for("react.client.reference"), Le, hr = {}, wt = {}, zn = {};
    Xr.Fragment = S, Xr.jsx = function(P, Z, Q, pe, Me) {
      return y(P, Z, Q, !1, pe, Me);
    }, Xr.jsxs = function(P, Z, Q, pe, Me) {
      return y(P, Z, Q, !0, pe, Me);
    };
  }()), Xr;
}
var $d;
function vC() {
  return $d || ($d = 1, process.env.NODE_ENV === "production" ? Kn.exports = mC() : Kn.exports = hC()), Kn.exports;
}
var d = vC();
function gC(e, t) {
  const r = u.createContext(t), n = (a) => {
    const { children: i, ...s } = a, c = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ d.jsx(r.Provider, { value: c, children: i });
  };
  n.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function Te(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = u.createContext(i), c = r.length;
    r = [...r, i];
    const l = (p) => {
      var w;
      const { scope: m, children: v, ...y } = p, h = ((w = m == null ? void 0 : m[e]) == null ? void 0 : w[c]) || s, g = u.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ d.jsx(h.Provider, { value: g, children: v });
    };
    l.displayName = a + "Provider";
    function f(p, m) {
      var h;
      const v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[c]) || s, y = u.useContext(v);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [l, f];
  }
  const o = () => {
    const a = r.map((i) => u.createContext(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [n, yC(o, ...t)];
}
function yC(...e) {
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
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Ld(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function _n(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = Ld(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : Ld(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return u.useCallback(_n(...e), e);
}
var mt = u.forwardRef((e, t) => {
  const { children: r, ...n } = e, o = u.Children.toArray(r), a = o.find(bC);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? u.Children.count(i) > 1 ? u.Children.only(null) : u.isValidElement(i) ? i.props.children : null : c);
    return /* @__PURE__ */ d.jsx(cl, { ...n, ref: t, children: u.isValidElement(i) ? u.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ d.jsx(cl, { ...n, ref: t, children: r });
});
mt.displayName = "Slot";
var cl = u.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (u.isValidElement(r)) {
    const o = xC(r), a = wC(n, r.props);
    return r.type !== u.Fragment && (a.ref = t ? _n(t, o) : o), u.cloneElement(r, a);
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
cl.displayName = "SlotClone";
var dv = ({ children: e }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: e });
function bC(e) {
  return u.isValidElement(e) && e.type === dv;
}
function wC(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      a(...s), o(...s);
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function xC(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function lr(e) {
  const t = e + "CollectionProvider", [r, n] = Te(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: y, children: h } = v, g = O.useRef(null), w = O.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: y, itemMap: w, collectionRef: g, children: h });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = O.forwardRef(
    (v, y) => {
      const { scope: h, children: g } = v, w = a(s, h), b = ne(y, w.collectionRef);
      return /* @__PURE__ */ d.jsx(mt, { ref: b, children: g });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", f = "data-radix-collection-item", p = O.forwardRef(
    (v, y) => {
      const { scope: h, children: g, ...w } = v, b = O.useRef(null), x = ne(y, b), C = a(l, h);
      return O.useEffect(() => (C.itemMap.set(b, { ref: b, ...w }), () => void C.itemMap.delete(b))), /* @__PURE__ */ d.jsx(mt, { [f]: "", ref: x, children: g });
    }
  );
  p.displayName = l;
  function m(v) {
    const y = a(e + "CollectionConsumer", v);
    return O.useCallback(() => {
      const g = y.collectionRef.current;
      if (!g) return [];
      const w = Array.from(g.querySelectorAll(`[${f}]`));
      return Array.from(y.itemMap.values()).sort(
        (C, _) => w.indexOf(C.ref.current) - w.indexOf(_.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: p },
    m,
    n
  ];
}
function $(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function me(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Pe({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, o] = SC({ defaultProp: t, onChange: r }), a = e !== void 0, i = a ? e : n, s = me(r), c = u.useCallback(
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
function SC({
  defaultProp: e,
  onChange: t
}) {
  const r = u.useState(e), [n] = r, o = u.useRef(n), a = me(t);
  return u.useEffect(() => {
    o.current !== n && (a(n), o.current = n);
  }, [n, o, a]), r;
}
var CC = [
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
], W = CC.reduce((e, t) => {
  const r = u.forwardRef((n, o) => {
    const { asChild: a, ...i } = n, s = a ? mt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(s, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function cn(e, t) {
  e && Cn.flushSync(() => e.dispatchEvent(t));
}
var Ee = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
};
function _C(e, t) {
  return u.useReducer((r, n) => t[r][n] ?? r, e);
}
var Ce = (e) => {
  const { present: t, children: r } = e, n = EC(t), o = typeof r == "function" ? r({ present: n.isPresent }) : u.Children.only(r), a = ne(n.ref, PC(o));
  return typeof r == "function" || n.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Ce.displayName = "Presence";
function EC(e) {
  const [t, r] = u.useState(), n = u.useRef({}), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = _C(i, {
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
  return u.useEffect(() => {
    const l = Xn(n.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), Ee(() => {
    const l = n.current, f = o.current;
    if (f !== e) {
      const m = a.current, v = Xn(l);
      e ? c("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Ee(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, p = (v) => {
        const h = Xn(n.current).includes(v.animationName);
        if (v.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = Xn(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function Xn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function PC(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var TC = u.useId || (() => {
}), RC = 0;
function _e(e) {
  const [t, r] = u.useState(TC());
  return Ee(() => {
    r((n) => n ?? String(RC++));
  }, [e]), t ? `radix-${t}` : "";
}
var nu = "Collapsible", [NC, fv] = Te(nu), [MC, ou] = NC(nu), pv = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [c = !1, l] = Pe({
      prop: n,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ d.jsx(
      MC,
      {
        scope: r,
        disabled: a,
        contentId: _e(),
        open: c,
        onOpenToggle: u.useCallback(() => l((f) => !f), [l]),
        children: /* @__PURE__ */ d.jsx(
          W.div,
          {
            "data-state": iu(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
pv.displayName = nu;
var mv = "CollapsibleTrigger", hv = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = ou(mv, r);
    return /* @__PURE__ */ d.jsx(
      W.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": iu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
  }
);
hv.displayName = mv;
var au = "CollapsibleContent", vv = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = ou(au, e.__scopeCollapsible);
    return /* @__PURE__ */ d.jsx(Ce, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ d.jsx(OC, { ...n, ref: t, present: a }) });
  }
);
vv.displayName = au;
var OC = u.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = ou(au, r), [s, c] = u.useState(n), l = u.useRef(null), f = ne(t, l), p = u.useRef(0), m = p.current, v = u.useRef(0), y = v.current, h = i.open || s, g = u.useRef(h), w = u.useRef(void 0);
  return u.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), Ee(() => {
    const b = l.current;
    if (b) {
      w.current = w.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const x = b.getBoundingClientRect();
      p.current = x.height, v.current = x.width, g.current || (b.style.transitionDuration = w.current.transitionDuration, b.style.animationName = w.current.animationName), c(n);
    }
  }, [i.open, n]), /* @__PURE__ */ d.jsx(
    W.div,
    {
      "data-state": iu(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !h,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": y ? `${y}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function iu(e) {
  return e ? "open" : "closed";
}
var AC = pv, jC = hv, DC = vv, kC = u.createContext(void 0);
function Tt(e) {
  const t = u.useContext(kC);
  return e || t || "ltr";
}
var Rt = "Accordion", IC = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [su, $C, LC] = lr(Rt), [zo, tF] = Te(Rt, [
  LC,
  fv
]), cu = fv(), gv = O.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ d.jsx(su.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ d.jsx(WC, { ...a, ref: t }) : /* @__PURE__ */ d.jsx(BC, { ...o, ref: t }) });
  }
);
gv.displayName = Rt;
var [yv, FC] = zo(Rt), [bv, qC] = zo(
  Rt,
  { collapsible: !1 }
), BC = O.forwardRef(
  (e, t) => {
    const {
      value: r,
      defaultValue: n,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, c] = Pe({
      prop: r,
      defaultProp: n,
      onChange: o
    });
    return /* @__PURE__ */ d.jsx(
      yv,
      {
        scope: e.__scopeAccordion,
        value: s ? [s] : [],
        onItemOpen: c,
        onItemClose: O.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ d.jsx(bv, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ d.jsx(wv, { ...i, ref: t }) })
      }
    );
  }
), WC = O.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Pe({
    prop: r,
    defaultProp: n,
    onChange: o
  }), c = O.useCallback(
    (f) => s((p = []) => [...p, f]),
    [s]
  ), l = O.useCallback(
    (f) => s((p = []) => p.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ d.jsx(
    yv,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ d.jsx(bv, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ d.jsx(wv, { ...a, ref: t }) })
    }
  );
}), [HC, Yo] = zo(Rt), wv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = O.useRef(null), c = ne(s, t), l = $C(r), p = Tt(o) === "ltr", m = $(e.onKeyDown, (v) => {
      var N;
      if (!IC.includes(v.key)) return;
      const y = v.target, h = l().filter((T) => {
        var k;
        return !((k = T.ref.current) != null && k.disabled);
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
          a === "horizontal" && (p ? _() : S());
          break;
        case "ArrowDown":
          a === "vertical" && _();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? S() : _());
          break;
        case "ArrowUp":
          a === "vertical" && S();
          break;
      }
      const E = b % w;
      (N = h[E].ref.current) == null || N.focus();
    });
    return /* @__PURE__ */ d.jsx(
      HC,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ d.jsx(su.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(
          W.div,
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
), xo = "AccordionItem", [VC, lu] = zo(xo), xv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = Yo(xo, r), i = FC(xo, r), s = cu(r), c = _e(), l = n && i.value.includes(n) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ d.jsx(
      VC,
      {
        scope: r,
        open: l,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ d.jsx(
          AC,
          {
            "data-orientation": a.orientation,
            "data-state": Tv(l),
            ...s,
            ...o,
            ref: t,
            disabled: f,
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
xv.displayName = xo;
var Sv = "AccordionHeader", Cv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Yo(Rt, r), a = lu(Sv, r);
    return /* @__PURE__ */ d.jsx(
      W.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Tv(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Cv.displayName = Sv;
var ll = "AccordionTrigger", _v = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Yo(Rt, r), a = lu(ll, r), i = qC(ll, r), s = cu(r);
    return /* @__PURE__ */ d.jsx(su.ItemSlot, { scope: r, children: /* @__PURE__ */ d.jsx(
      jC,
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
_v.displayName = ll;
var Ev = "AccordionContent", Pv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Yo(Rt, r), a = lu(Ev, r), i = cu(r);
    return /* @__PURE__ */ d.jsx(
      DC,
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
Pv.displayName = Ev;
function Tv(e) {
  return e ? "open" : "closed";
}
var GC = gv, zC = xv, YC = Cv, Rv = _v, Nv = Pv;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mv = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KC = {
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
const XC = tu(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => sl(
    "svg",
    {
      ref: c,
      ...KC,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Mv("lucide", o),
      ...s
    },
    [
      ...i.map(([l, f]) => sl(l, f)),
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
const Ie = (e, t) => {
  const r = tu(
    ({ className: n, ...o }, a) => sl(XC, {
      ref: a,
      iconNode: t,
      className: Mv(`lucide-${UC(e)}`, n),
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
const ZC = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Ov = Ie("Calendar", ZC);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QC = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ln = Ie("Check", QC);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JC = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Tr = Ie("ChevronDown", JC);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Uo = Ie("ChevronLeft", e0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Fr = Ie("ChevronRight", t0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], n0 = Ie("ChevronUp", r0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Fd = Ie("CircleX", o0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a0 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Av = Ie("Circle", a0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], s0 = Ie("Clock", i0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], jv = Ie("Ellipsis", c0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], u0 = Ie("LoaderCircle", l0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], f0 = Ie("Plus", d0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], m0 = Ie("Search", p0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = [
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
], v0 = Ie("WandSparkles", h0);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ko = Ie("X", g0);
function Dv(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Dv(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function _t() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Dv(e)) && (n && (n += " "), n += t);
  return n;
}
const uu = "-", y0 = (e) => {
  const t = w0(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(uu);
      return s[0] === "" && s.length !== 1 && s.shift(), kv(s, t) || b0(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, kv = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? kv(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(uu);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, qd = /^\[(.+)\]$/, b0 = (e) => {
  if (qd.test(e)) {
    const t = qd.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, w0 = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    ul(r[o], n, o, t);
  return n;
}, ul = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Bd(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (x0(o)) {
        ul(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      ul(i, Bd(t, a), r, n);
    });
  });
}, Bd = (e, t) => {
  let r = e;
  return t.split(uu).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, x0 = (e) => e.isThemeGetter, S0 = (e) => {
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
}, dl = "!", fl = ":", C0 = fl.length, _0 = (e) => {
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
        if (h === fl) {
          a.push(o.slice(c, y)), c = y + C0;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const f = a.length === 0 ? o : o.substring(c), p = E0(f), m = p !== f, v = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + fl, a = n;
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
}, E0 = (e) => e.endsWith(dl) ? e.substring(0, e.length - 1) : e.startsWith(dl) ? e.substring(1) : e, P0 = (e) => {
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
}, T0 = (e) => ({
  cache: S0(e.cacheSize),
  parseClassName: _0(e),
  sortModifiers: P0(e),
  ...y0(e)
}), R0 = /\s+/, N0 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(R0);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const f = s[l], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: y,
      maybePostfixModifierPosition: h
    } = r(f);
    if (p) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!h, w = n(g ? y.substring(0, h) : y);
    if (!w) {
      if (!g) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = n(y), !w) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const b = a(m).join(":"), x = v ? b + dl : b, C = x + w;
    if (i.includes(C))
      continue;
    i.push(C);
    const _ = o(w, g);
    for (let S = 0; S < _.length; ++S) {
      const E = _[S];
      i.push(x + E);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function M0() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Iv(t)) && (n && (n += " "), n += r);
  return n;
}
const Iv = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Iv(e[n])) && (r && (r += " "), r += t);
  return r;
};
function O0(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const l = t.reduce((f, p) => p(f), e());
    return r = T0(l), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const f = N0(c, r);
    return o(c, f), f;
  }
  return function() {
    return a(M0.apply(null, arguments));
  };
}
const Oe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, $v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Lv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, A0 = /^\d+\/\d+$/, j0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, D0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, k0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, I0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vr = (e) => A0.test(e), de = (e) => !!e && !Number.isNaN(Number(e)), Xt = (e) => !!e && Number.isInteger(Number(e)), Wd = (e) => e.endsWith("%") && de(e.slice(0, -1)), Dt = (e) => j0.test(e), L0 = () => !0, F0 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  D0.test(e) && !k0.test(e)
), du = () => !1, q0 = (e) => I0.test(e), B0 = (e) => $0.test(e), W0 = (e) => !K(e) && !X(e), H0 = (e) => qr(e, Bv, du), K = (e) => $v.test(e), Zt = (e) => qr(e, Wv, F0), La = (e) => qr(e, e_, de), V0 = (e) => qr(e, Fv, du), G0 = (e) => qr(e, qv, B0), z0 = (e) => qr(e, du, q0), X = (e) => Lv.test(e), Zn = (e) => Br(e, Wv), Y0 = (e) => Br(e, t_), U0 = (e) => Br(e, Fv), K0 = (e) => Br(e, Bv), X0 = (e) => Br(e, qv), Z0 = (e) => Br(e, r_, !0), qr = (e, t, r) => {
  const n = $v.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Br = (e, t, r = !1) => {
  const n = Lv.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Fv = (e) => e === "position", Q0 = /* @__PURE__ */ new Set(["image", "url"]), qv = (e) => Q0.has(e), J0 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Bv = (e) => J0.has(e), Wv = (e) => e === "length", e_ = (e) => e === "number", t_ = (e) => e === "family-name", r_ = (e) => e === "shadow", n_ = () => {
  const e = Oe("color"), t = Oe("font"), r = Oe("text"), n = Oe("font-weight"), o = Oe("tracking"), a = Oe("leading"), i = Oe("breakpoint"), s = Oe("container"), c = Oe("spacing"), l = Oe("radius"), f = Oe("shadow"), p = Oe("inset-shadow"), m = Oe("drop-shadow"), v = Oe("blur"), y = Oe("perspective"), h = Oe("aspect"), g = Oe("ease"), w = Oe("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], C = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], S = () => [X, K, c], E = () => [vr, "full", "auto", ...S()], N = () => [Xt, "none", "subgrid", X, K], T = () => ["auto", {
    span: ["full", Xt, X, K]
  }, X, K], k = () => [Xt, "auto", X, K], D = () => ["auto", "min", "max", "fr", X, K], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], R = () => ["auto", ...S()], I = () => [vr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], j = () => [e, X, K], G = () => [Wd, Zt], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    X,
    K
  ], L = () => ["", de, Zn, Zt], J = () => ["solid", "dashed", "dotted", "double"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    X,
    K
  ], V = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X, K], U = () => ["none", de, X, K], z = () => ["none", de, X, K], ee = () => [de, X, K], H = () => [vr, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Dt],
      breakpoint: [Dt],
      color: [L0],
      container: [Dt],
      "drop-shadow": [Dt],
      ease: ["in", "out", "in-out"],
      font: [W0],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Dt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Dt],
      shadow: [Dt],
      spacing: ["px", de],
      text: [Dt],
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
        aspect: ["auto", "square", vr, K, X, h]
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
        columns: [de, K, X, s]
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
        object: [...x(), K, X]
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
        z: [Xt, "auto", X, K]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [vr, "full", "auto", s, ...S()]
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
        flex: [de, vr, "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", de, X, K]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", de, X, K]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Xt, "first", "last", "none", X, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": N()
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
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": N()
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
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
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
        "auto-cols": D()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": D()
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
        justify: [...q(), "normal"]
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
        content: ["normal", ...q()]
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
        "place-content": q()
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
        m: R()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: R()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: R()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: R()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: R()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: R()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: R()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: R()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: R()
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
        text: ["base", r, Zn, Zt]
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
        font: [n, X, La]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wd, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Y0, K, t]
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
        tracking: [o, X, K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [de, "none", X, La]
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
        "list-image": ["none", X, K]
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
        list: ["disc", "decimal", "none", X, K]
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
        placeholder: j()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: j()
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
        decoration: [de, "from-font", "auto", X, Zt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: j()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [de, "auto", X, K]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, K]
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
        content: ["none", X, K]
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
        bg: [...x(), U0, V0]
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
        bg: ["auto", "cover", "contain", K0, H0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Xt, X, K],
          radial: ["", X, K],
          conic: [Xt, X, K]
        }, X0, G0]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: j()
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
        from: j()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: j()
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
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
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
        "divide-y": L()
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
        border: j()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": j()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": j()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": j()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": j()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": j()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": j()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": j()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": j()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: j()
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
        "outline-offset": [de, X, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", de, Zn, Zt]
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
          f,
          Z0,
          z0
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: j()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", X, K, p]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": j()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
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
        ring: j()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [de, Zt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": j()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": j()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [de, X, K]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...te(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
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
          X,
          K
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: A()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [de, X, K]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [de, X, K]
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
          X,
          K
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", de, X, K]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [de, X, K]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", de, X, K]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [de, X, K]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", de, X, K]
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
          X,
          K
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": A()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [de, X, K]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [de, X, K]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", de, X, K]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [de, X, K]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", de, X, K]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [de, X, K]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [de, X, K]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", de, X, K]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, K]
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
        duration: [de, "initial", X, K]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", g, X, K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [de, X, K]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, X, K]
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
        perspective: [y, X, K]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": V()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: U()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": U()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": U()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": U()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: z()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": z()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": z()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": z()
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
        skew: ee()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ee()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ee()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, K, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: V()
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
        translate: H()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": H()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": H()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": H()
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
        accent: j()
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
        caret: j()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, K]
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
        "will-change": ["auto", "scroll", "contents", "transform", X, K]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [de, Zn, Zt, La]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...j()]
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
}, o_ = /* @__PURE__ */ O0(n_);
function M(...e) {
  return o_(_t(e));
}
const rF = GC, a_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  zC,
  {
    ref: r,
    className: M("border-b", e),
    ...t
  }
));
a_.displayName = "AccordionItem";
const i_ = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsx(YC, { className: "flex", children: /* @__PURE__ */ d.jsxs(
  Rv,
  {
    ref: n,
    className: M(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ d.jsx(Tr, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
i_.displayName = Rv.displayName;
const s_ = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsx(
  Nv,
  {
    ref: n,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ d.jsx("div", { className: M("pb-4 pt-0", e), children: t })
  }
));
s_.displayName = Nv.displayName;
const Hd = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Vd = _t, Nt = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Vd(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const f = r == null ? void 0 : r[l], p = a == null ? void 0 : a[l];
    if (f === null) return null;
    const m = Hd(f) || Hd(p);
    return o[l][m];
  }), s = r && Object.entries(r).reduce((l, f) => {
    let [p, m] = f;
    return m === void 0 || (l[p] = m), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, f) => {
    let { class: p, className: m, ...v } = f;
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
  return Vd(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, c_ = Nt(
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
), l_ = u.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: M(c_({ variant: t }), e),
    ...r
  }
));
l_.displayName = "Alert";
const u_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "h5",
  {
    ref: r,
    className: M("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
u_.displayName = "AlertTitle";
const d_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: r,
    className: M("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
d_.displayName = "AlertDescription";
var fu = "Avatar", [f_, nF] = Te(fu), [p_, Hv] = f_(fu), Vv = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = u.useState("idle");
    return /* @__PURE__ */ d.jsx(
      p_,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ d.jsx(W.span, { ...n, ref: t })
      }
    );
  }
);
Vv.displayName = fu;
var Gv = "AvatarImage", zv = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = Hv(Gv, r), s = m_(n, a.referrerPolicy), c = me((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return Ee(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ d.jsx(W.img, { ...a, ref: t, src: n }) : null;
  }
);
zv.displayName = Gv;
var Yv = "AvatarFallback", Uv = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = Hv(Yv, r), [i, s] = u.useState(n === void 0);
    return u.useEffect(() => {
      if (n !== void 0) {
        const c = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(c);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ d.jsx(W.span, { ...o, ref: t }) : null;
  }
);
Uv.displayName = Yv;
function m_(e, t) {
  const [r, n] = u.useState("idle");
  return Ee(() => {
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
var Kv = Vv, Xv = zv, Zv = Uv;
const h_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Kv,
  {
    ref: r,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
h_.displayName = Kv.displayName;
const v_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Xv,
  {
    ref: r,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
v_.displayName = Xv.displayName;
const g_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Zv,
  {
    ref: r,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
g_.displayName = Zv.displayName;
const y_ = Nt(
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
function Gd({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ d.jsx("div", { className: M(y_({ variant: t }), e), ...r });
}
const b_ = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ d.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
b_.displayName = "Breadcrumb";
const w_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
w_.displayName = "BreadcrumbList";
const x_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "li",
  {
    ref: r,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
x_.displayName = "BreadcrumbItem";
const S_ = u.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? mt : "a";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      ref: n,
      className: M("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
S_.displayName = "BreadcrumbLink";
const C_ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
C_.displayName = "BreadcrumbPage";
const __ = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ d.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ d.jsx(Fr, {})
  }
);
__.displayName = "BreadcrumbSeparator";
const E_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(jv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
E_.displayName = "BreadcrumbElipssis";
const P_ = {
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
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  }
}, Sr = Nt(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: P_,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Wr = u.forwardRef(({ className: e, variant: t, size: r, disabled: n, href: o, ...a }, i) => /* @__PURE__ */ d.jsx(d.Fragment, { children: o ? /* @__PURE__ */ d.jsx(
  uC,
  {
    className: M(Sr({ variant: t, size: r, className: e })),
    ref: i,
    to: o,
    ...a
  }
) : /* @__PURE__ */ d.jsx(
  "button",
  {
    className: M(Sr({ variant: t, size: r, className: e })),
    ref: i,
    disabled: n,
    ...a
  }
) }));
Wr.displayName = "Button";
var re;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(re || (re = {}));
var xe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(xe || (xe = {}));
var et;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(et || (et = {}));
var Be;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Be || (Be = {}));
const Fa = {}, Jr = {};
function an(e, t) {
  try {
    const n = (Fa[e] || (Fa[e] = new Intl.DateTimeFormat("en-GB", {
      timeZone: e,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1] || "";
    return n in Jr ? Jr[n] : zd(n, n.split(":"));
  } catch {
    if (e in Jr) return Jr[e];
    const r = e == null ? void 0 : e.match(T_);
    return r ? zd(e, r.slice(1)) : NaN;
  }
}
const T_ = /([+-]\d\d):?(\d\d)?/;
function zd(e, t) {
  const r = +t[0], n = +(t[1] || 0);
  return Jr[e] = r > 0 ? r * 60 + n : r * 60 - n;
}
class dt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(an(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Qv(this), pl(this)) : this.setTime(Date.now());
  }
  static tz(t, ...r) {
    return r.length ? new dt(...r, t) : new dt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new dt(+this, t);
  }
  getTimezoneOffset() {
    return -an(this.timeZone, this);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), pl(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new dt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Yd = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Yd.test(e)) return;
  const t = e.replace(Yd, "$1UTC");
  dt.prototype[t] && (e.startsWith("get") ? dt.prototype[e] = function() {
    return this.internal[t]();
  } : (dt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), R_(this), +this;
  }, dt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), pl(this), +this;
  }));
});
function pl(e) {
  e.internal.setTime(+e), e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset());
}
function R_(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Qv(e);
}
function Qv(e) {
  const t = an(e.timeZone, e), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const n = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), o = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = n - o, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const s = n - t;
  s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
  const c = an(e.timeZone, e), f = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - c, p = c !== t, m = f - s;
  if (p && m) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + m);
    const v = an(e.timeZone, e), y = c - v;
    y && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + y), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y));
  }
}
class tr extends dt {
  //#region static
  static tz(t, ...r) {
    return r.length ? new tr(...r, t) : new tr(Date.now(), t);
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
    return `${t} GMT${r}${n}${o} (${N_(this.timeZone, this)})`;
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
    return new tr(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new tr(+new Date(t), this.timeZone);
  }
  //#endregion
}
function N_(e, t) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: e,
    timeZoneName: "long"
  }).format(t).slice(12);
}
const Jv = 6048e5, M_ = 864e5, Ud = Symbol.for("constructDateFrom");
function Ne(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Ud in e ? e[Ud](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function be(e, t) {
  return Ne(t || e, e);
}
function pu(e, t, r) {
  const n = be(e, r == null ? void 0 : r.in);
  return isNaN(t) ? Ne(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function mu(e, t, r) {
  const n = be(e, r == null ? void 0 : r.in);
  if (isNaN(t)) return Ne(e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), a = Ne(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), n);
}
function O_(e, t, r) {
  const {
    years: n = 0,
    months: o = 0,
    weeks: a = 0,
    days: i = 0,
    hours: s = 0,
    minutes: c = 0,
    seconds: l = 0
  } = t, f = be(e, r == null ? void 0 : r.in), p = o || n ? mu(f, o + n * 12) : f, m = i || a ? pu(p, i + a * 7) : p, v = c + s * 60, h = (l + v * 60) * 1e3;
  return Ne(e, +m + h);
}
let A_ = {};
function En() {
  return A_;
}
function Rr(e, t) {
  var s, c, l, f;
  const r = En(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((f = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = be(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function un(e, t) {
  return Rr(e, { ...t, weekStartsOn: 1 });
}
function eg(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Ne(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = un(o), i = Ne(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = un(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Kd(e) {
  const t = be(e), r = new Date(
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
function Hr(e, ...t) {
  const r = Ne.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function dn(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function tg(e, t, r) {
  const [n, o] = Hr(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = dn(n), i = dn(o), s = +a - Kd(a), c = +i - Kd(i);
  return Math.round((s - c) / M_);
}
function j_(e, t) {
  const r = eg(e, t), n = Ne(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), un(n);
}
function D_(e, t, r) {
  return pu(e, t * 7, r);
}
function k_(e, t, r) {
  return mu(e, t * 12, r);
}
function I_(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Ne.bind(null, o));
    const a = be(o, n);
    (!r || r < a || isNaN(+a)) && (r = a);
  }), Ne(n, r || NaN);
}
function $_(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Ne.bind(null, o));
    const a = be(o, n);
    (!r || r > a || isNaN(+a)) && (r = a);
  }), Ne(n, r || NaN);
}
function L_(e, t, r) {
  const [n, o] = Hr(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return +dn(n) == +dn(o);
}
function rg(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function F_(e) {
  return !(!rg(e) && typeof e != "number" || isNaN(+be(e)));
}
function q_(e, t, r) {
  const [n, o] = Hr(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = n.getFullYear() - o.getFullYear(), i = n.getMonth() - o.getMonth();
  return a * 12 + i;
}
function B_(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function W_(e, t) {
  const [r, n] = Hr(e, t.start, t.end);
  return { start: r, end: n };
}
function H_(e, t) {
  const { start: r, end: n } = W_(t == null ? void 0 : t.in, e);
  let o = +r > +n;
  const a = o ? +r : +n, i = o ? n : r;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(Ne(r, i)), i.setMonth(i.getMonth() + s);
  return o ? c.reverse() : c;
}
function V_(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function G_(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear();
  return r.setFullYear(n + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function ng(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function og(e, t) {
  var s, c, l, f;
  const r = En(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((f = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = be(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function z_(e, t) {
  return og(e, { ...t, weekStartsOn: 1 });
}
const Y_ = {
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
}, U_ = (e, t, r) => {
  let n;
  const o = Y_[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Cr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const K_ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, X_ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Z_ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Q_ = {
  date: Cr({
    formats: K_,
    defaultWidth: "full"
  }),
  time: Cr({
    formats: X_,
    defaultWidth: "full"
  }),
  dateTime: Cr({
    formats: Z_,
    defaultWidth: "full"
  })
}, J_ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, eE = (e, t, r, n) => J_[e];
function ct(e) {
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
const tE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, rE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, nE = {
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
}, oE = {
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
}, aE = {
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
}, iE = {
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
}, sE = (e, t) => {
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
}, cE = {
  ordinalNumber: sE,
  era: ct({
    values: tE,
    defaultWidth: "wide"
  }),
  quarter: ct({
    values: rE,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ct({
    values: nE,
    defaultWidth: "wide"
  }),
  day: ct({
    values: oE,
    defaultWidth: "wide"
  }),
  dayPeriod: ct({
    values: aE,
    defaultWidth: "wide",
    formattingValues: iE,
    defaultFormattingWidth: "wide"
  })
};
function lt(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? uE(s, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      lE(s, (p) => p.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const f = t.slice(i.length);
    return { value: l, rest: f };
  };
}
function lE(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function uE(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function ag(e) {
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
const dE = /^(\d+)(th|st|nd|rd)?/i, fE = /\d+/i, pE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, mE = {
  any: [/^b/i, /^(a|c)/i]
}, hE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, vE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yE = {
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
}, bE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, wE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, SE = {
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
}, CE = {
  ordinalNumber: ag({
    matchPattern: dE,
    parsePattern: fE,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: lt({
    matchPatterns: pE,
    defaultMatchWidth: "wide",
    parsePatterns: mE,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: hE,
    defaultMatchWidth: "wide",
    parsePatterns: vE,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lt({
    matchPatterns: gE,
    defaultMatchWidth: "wide",
    parsePatterns: yE,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: bE,
    defaultMatchWidth: "wide",
    parsePatterns: wE,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: xE,
    defaultMatchWidth: "any",
    parsePatterns: SE,
    defaultParseWidth: "any"
  })
}, hu = {
  code: "en-US",
  formatDistance: U_,
  formatLong: Q_,
  formatRelative: eE,
  localize: cE,
  match: CE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function _E(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return tg(r, ng(r)) + 1;
}
function ig(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = +un(r) - +j_(r);
  return Math.round(n / Jv) + 1;
}
function sg(e, t) {
  var f, p, m, v;
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = En(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = Ne((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Rr(i, t), c = Ne((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const l = Rr(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function EE(e, t) {
  var s, c, l, f;
  const r = En(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = sg(e, t), a = Ne((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), Rr(a, t);
}
function cg(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = +Rr(r, t) - +EE(r, t);
  return Math.round(n / Jv) + 1;
}
function ye(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const kt = {
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
}, gr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Xd = {
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
    return kt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = sg(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return ye(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : ye(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = eg(e);
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
        return kt.M(e, t);
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
    const o = cg(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : ye(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = ig(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : ye(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : kt.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = _E(e);
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
    switch (n === 12 ? o = gr.noon : n === 0 ? o = gr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = gr.evening : n >= 12 ? o = gr.afternoon : n >= 4 ? o = gr.morning : o = gr.night, t) {
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
    return kt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : kt.H(e, t);
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
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : kt.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : kt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return kt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Qd(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Qt(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Qt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Qd(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Qt(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Qt(n, ":");
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
        return "GMT" + Zd(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Qt(n, ":");
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
        return "GMT" + Zd(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Qt(n, ":");
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
function Zd(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + ye(a, 2);
}
function Qd(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ye(Math.abs(e) / 60, 2) : Qt(e, t);
}
function Qt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = ye(Math.trunc(n / 60), 2), a = ye(n % 60, 2);
  return r + o + t + a;
}
const Jd = (e, t) => {
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
}, lg = (e, t) => {
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
}, PE = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Jd(e, t);
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
  return a.replace("{{date}}", Jd(n, t)).replace("{{time}}", lg(o, t));
}, TE = {
  p: lg,
  P: PE
}, RE = /^D+$/, NE = /^Y+$/, ME = ["D", "DD", "YY", "YYYY"];
function OE(e) {
  return RE.test(e);
}
function AE(e) {
  return NE.test(e);
}
function jE(e, t, r) {
  const n = DE(e, t, r);
  if (console.warn(n), ME.includes(e)) throw new RangeError(n);
}
function DE(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const kE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, IE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $E = /^'([^]*?)'?$/, LE = /''/g, FE = /[a-zA-Z]/;
function Xo(e, t, r) {
  var f, p, m, v, y, h, g, w;
  const n = En(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? hu, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((p = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((v = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((h = (y = r == null ? void 0 : r.locale) == null ? void 0 : y.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((w = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = be(e, r == null ? void 0 : r.in);
  if (!F_(s))
    throw new RangeError("Invalid time value");
  let c = t.match(IE).map((b) => {
    const x = b[0];
    if (x === "p" || x === "P") {
      const C = TE[x];
      return C(b, o.formatLong);
    }
    return b;
  }).join("").match(kE).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const x = b[0];
    if (x === "'")
      return { isToken: !1, value: qE(b) };
    if (Xd[x])
      return { isToken: !0, value: b };
    if (x.match(FE))
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
    (!(r != null && r.useAdditionalWeekYearTokens) && AE(x) || !(r != null && r.useAdditionalDayOfYearTokens) && OE(x)) && jE(x, t, String(e));
    const C = Xd[x[0]];
    return C(s, x, o.localize, l);
  }).join("");
}
function qE(e) {
  const t = e.match($E);
  return t ? t[1].replace(LE, "'") : e;
}
function BE(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = r.getMonth(), a = Ne(r, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function WE(e, t) {
  return be(e, t == null ? void 0 : t.in).getMonth();
}
function HE(e, t) {
  return be(e, t == null ? void 0 : t.in).getFullYear();
}
function VE(e, t) {
  return +be(e) > +be(t);
}
function GE(e, t) {
  return +be(e) < +be(t);
}
function zE(e, t, r) {
  const [n, o] = Hr(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function YE(e, t, r) {
  const [n, o] = Hr(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear();
}
function UE(e, t, r) {
  const n = be(e, r == null ? void 0 : r.in), o = n.getFullYear(), a = n.getDate(), i = Ne(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = BE(i);
  return n.setMonth(t, Math.min(a, s)), n;
}
function KE(e, t, r) {
  const n = be(e, r == null ? void 0 : r.in);
  return isNaN(+n) ? Ne(e, NaN) : (n.setFullYear(t), n);
}
const XE = {
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
}, ZE = (e, t, r) => {
  let n;
  const o = XE[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "em " + n : "há " + n : n;
}, QE = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, JE = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, eP = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tP = {
  date: Cr({
    formats: QE,
    defaultWidth: "full"
  }),
  time: Cr({
    formats: JE,
    defaultWidth: "full"
  }),
  dateTime: Cr({
    formats: eP,
    defaultWidth: "full"
  })
}, rP = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, nP = (e, t, r, n) => {
  const o = rP[e];
  return typeof o == "function" ? o(t) : o;
}, oP = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, aP = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, iP = {
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
}, sP = {
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
}, cP = {
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
}, lP = {
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
}, uP = (e, t) => {
  const r = Number(e);
  return (t == null ? void 0 : t.unit) === "week" ? r + "ª" : r + "º";
}, dP = {
  ordinalNumber: uP,
  era: ct({
    values: oP,
    defaultWidth: "wide"
  }),
  quarter: ct({
    values: aP,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ct({
    values: iP,
    defaultWidth: "wide"
  }),
  day: ct({
    values: sP,
    defaultWidth: "wide"
  }),
  dayPeriod: ct({
    values: cP,
    defaultWidth: "wide",
    formattingValues: lP,
    defaultFormattingWidth: "wide"
  })
}, fP = /^(\d+)[ºªo]?/i, pP = /\d+/i, mP = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, hP = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, vP = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, gP = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, yP = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, bP = {
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
}, wP = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, xP = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, SP = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, CP = {
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
}, _P = {
  ordinalNumber: ag({
    matchPattern: fP,
    parsePattern: pP,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: lt({
    matchPatterns: mP,
    defaultMatchWidth: "wide",
    parsePatterns: hP,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: vP,
    defaultMatchWidth: "wide",
    parsePatterns: gP,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lt({
    matchPatterns: yP,
    defaultMatchWidth: "wide",
    parsePatterns: bP,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: wP,
    defaultMatchWidth: "wide",
    parsePatterns: xP,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: SP,
    defaultMatchWidth: "any",
    parsePatterns: CP,
    defaultParseWidth: "any"
  })
}, _r = {
  code: "pt-BR",
  formatDistance: ZE,
  formatLong: tP,
  formatRelative: nP,
  localize: dP,
  match: _P,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, ef = 5, EP = 4;
function PP(e, t) {
  const r = t.startOfMonth(e), n = r.getDay() > 0 ? r.getDay() : 7, o = t.addDays(e, -n + 1), a = t.addDays(o, ef * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? ef : EP;
}
function ug(e, t) {
  const r = t.startOfMonth(e), n = r.getDay();
  return n === 1 ? r : n === 0 ? t.addDays(r, -1 * 6) : t.addDays(r, -1 * (n - 1));
}
function TP(e, t) {
  const r = ug(e, t), n = PP(e, t);
  return t.addDays(r, n * 7 - 1);
}
class Mt {
  /**
   * Creates an instance of DateLib.
   *
   * @param options The options for the date library.
   * @param overrides Overrides for the date library functions.
   */
  constructor(t, r) {
    this.Date = Date, this.today = () => {
      var n;
      return (n = this.overrides) != null && n.today ? this.overrides.today() : this.options.timeZone ? tr.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (n, o, a) => {
      var i;
      return (i = this.overrides) != null && i.newDate ? this.overrides.newDate(n, o, a) : this.options.timeZone ? new tr(n, o, a, this.options.timeZone) : new Date(n, o, a);
    }, this.addDays = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addDays) == null ? void 0 : i.call(a, n, o)) ?? pu(n, o);
    }, this.addMonths = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addMonths) == null ? void 0 : i.call(a, n, o)) ?? mu(n, o);
    }, this.addWeeks = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addWeeks) == null ? void 0 : i.call(a, n, o)) ?? D_(n, o);
    }, this.addYears = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addYears) == null ? void 0 : i.call(a, n, o)) ?? k_(n, o);
    }, this.differenceInCalendarDays = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.differenceInCalendarDays) == null ? void 0 : i.call(a, n, o)) ?? tg(n, o);
    }, this.differenceInCalendarMonths = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.differenceInCalendarMonths) == null ? void 0 : i.call(a, n, o)) ?? q_(n, o);
    }, this.eachMonthOfInterval = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.eachMonthOfInterval) == null ? void 0 : a.call(o, n)) ?? H_(n);
    }, this.endOfBroadcastWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.endOfBroadcastWeek) == null ? void 0 : i.call(a, n, o)) ?? TP(n, this);
    }, this.endOfISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfISOWeek) == null ? void 0 : a.call(o, n)) ?? z_(n);
    }, this.endOfMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfMonth) == null ? void 0 : a.call(o, n)) ?? B_(n);
    }, this.endOfWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.endOfWeek) == null ? void 0 : i.call(a, n, o ?? this.options)) ?? og(n, o ?? this.options);
    }, this.endOfYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfYear) == null ? void 0 : a.call(o, n)) ?? G_(n);
    }, this.format = (n, o, a) => {
      var s, c;
      const i = ((c = (s = this.overrides) == null ? void 0 : s.format) == null ? void 0 : c.call(s, n, o, a ?? this.options)) ?? Xo(n, o, a ?? this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getISOWeek) == null ? void 0 : a.call(o, n)) ?? ig(n);
    }, this.getMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getMonth) == null ? void 0 : a.call(o, n)) ?? WE(n);
    }, this.getYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getYear) == null ? void 0 : a.call(o, n)) ?? HE(n);
    }, this.getWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.getWeek) == null ? void 0 : i.call(a, n, o ?? this.options)) ?? cg(n, o ?? this.options);
    }, this.isAfter = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isAfter) == null ? void 0 : i.call(a, n, o)) ?? VE(n, o);
    }, this.isBefore = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isBefore) == null ? void 0 : i.call(a, n, o)) ?? GE(n, o);
    }, this.isDate = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.isDate) == null ? void 0 : a.call(o, n)) ?? rg(n);
    }, this.isSameDay = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameDay) == null ? void 0 : i.call(a, n, o)) ?? L_(n, o);
    }, this.isSameMonth = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameMonth) == null ? void 0 : i.call(a, n, o)) ?? zE(n, o);
    }, this.isSameYear = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameYear) == null ? void 0 : i.call(a, n, o)) ?? YE(n, o);
    }, this.max = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.max) == null ? void 0 : a.call(o, n)) ?? I_(n);
    }, this.min = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.min) == null ? void 0 : a.call(o, n)) ?? $_(n);
    }, this.setMonth = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.setMonth) == null ? void 0 : i.call(a, n, o)) ?? UE(n, o);
    }, this.setYear = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.setYear) == null ? void 0 : i.call(a, n, o)) ?? KE(n, o);
    }, this.startOfBroadcastWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.startOfBroadcastWeek) == null ? void 0 : i.call(a, n, o ?? this)) ?? ug(n, o ?? this);
    }, this.startOfDay = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfDay) == null ? void 0 : a.call(o, n)) ?? dn(n);
    }, this.startOfISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfISOWeek) == null ? void 0 : a.call(o, n)) ?? un(n);
    }, this.startOfMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfMonth) == null ? void 0 : a.call(o, n)) ?? V_(n);
    }, this.startOfWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfWeek) == null ? void 0 : a.call(o, n)) ?? Rr(n, this.options);
    }, this.startOfYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfYear) == null ? void 0 : a.call(o, n)) ?? ng(n);
    }, this.options = { locale: hu, ...t }, this.overrides = r;
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
const Ot = new Mt();
function RP(e, t, r = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (r[a] ? o.push(r[a]) : t[xe[a]] ? o.push(t[xe[a]]) : t[et[a]] && o.push(t[et[a]]), o), [t[re.Day]]);
}
function NP(e) {
  return O.createElement("button", { ...e });
}
function MP(e) {
  return O.createElement("span", { ...e });
}
function OP(e) {
  const { size: t = 24, orientation: r = "left", className: n } = e;
  return O.createElement(
    "svg",
    { className: n, width: t, height: t, viewBox: "0 0 24 24" },
    r === "up" && O.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    r === "down" && O.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    r === "left" && O.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    r === "right" && O.createElement("polygon", { points: "8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5" })
  );
}
function AP(e) {
  const { day: t, modifiers: r, ...n } = e;
  return O.createElement("td", { ...n });
}
function jP(e) {
  const { day: t, modifiers: r, ...n } = e, o = O.useRef(null);
  return O.useEffect(() => {
    var a;
    r.focused && ((a = o.current) == null || a.focus());
  }, [r.focused]), O.createElement("button", { ref: o, ...n });
}
function DP(e) {
  const { options: t, className: r, components: n, classNames: o, ...a } = e, i = [o[re.Dropdown], r].join(" "), s = t == null ? void 0 : t.find(({ value: c }) => c === a.value);
  return O.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[re.DropdownRoot] },
    O.createElement(n.Select, { className: i, ...a }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: f }) => O.createElement(n.Option, { key: c, value: c, disabled: f }, l))),
    O.createElement(
      "span",
      { className: o[re.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      O.createElement(n.Chevron, { orientation: "down", size: 18, className: o[re.Chevron] })
    )
  );
}
function kP(e) {
  return O.createElement("div", { ...e });
}
function IP(e) {
  return O.createElement("div", { ...e });
}
function $P(e) {
  const { calendarMonth: t, displayIndex: r, ...n } = e;
  return O.createElement("div", { ...n }, e.children);
}
function LP(e) {
  const { calendarMonth: t, displayIndex: r, ...n } = e;
  return O.createElement("div", { ...n });
}
function FP(e) {
  return O.createElement("table", { ...e });
}
function qP(e) {
  return O.createElement("div", { ...e });
}
const dg = iC(void 0);
function Pn() {
  const e = sC(dg);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function BP(e) {
  const { components: t } = Pn();
  return O.createElement(t.Dropdown, { ...e });
}
function WP(e) {
  const { onPreviousClick: t, onNextClick: r, previousMonth: n, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: c, labelNext: l } } = Pn(), f = qe((m) => {
    o && (r == null || r(m));
  }, [o, r]), p = qe((m) => {
    n && (t == null || t(m));
  }, [n, t]);
  return O.createElement(
    "nav",
    { ...a },
    O.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[re.PreviousMonthButton], tabIndex: n ? void 0 : -1, "aria-disabled": n ? void 0 : !0, "aria-label": c(n), onClick: p },
      O.createElement(i.Chevron, { disabled: n ? void 0 : !0, className: s[re.Chevron], orientation: "left" })
    ),
    O.createElement(
      i.NextMonthButton,
      { type: "button", className: s[re.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: f },
      O.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[re.Chevron] })
    )
  );
}
function HP(e) {
  const { components: t } = Pn();
  return O.createElement(t.Button, { ...e });
}
function VP(e) {
  return O.createElement("option", { ...e });
}
function GP(e) {
  const { components: t } = Pn();
  return O.createElement(t.Button, { ...e });
}
function zP(e) {
  const { rootRef: t, ...r } = e;
  return O.createElement("div", { ...r, ref: t });
}
function YP(e) {
  return O.createElement("select", { ...e });
}
function UP(e) {
  const { week: t, ...r } = e;
  return O.createElement("tr", { ...r });
}
function KP(e) {
  return O.createElement("th", { ...e });
}
function XP(e) {
  return O.createElement(
    "thead",
    { "aria-hidden": !0 },
    O.createElement("tr", { ...e })
  );
}
function ZP(e) {
  const { week: t, ...r } = e;
  return O.createElement("th", { ...r });
}
function QP(e) {
  return O.createElement("th", { ...e });
}
function JP(e) {
  return O.createElement("tbody", { ...e });
}
function eT(e) {
  const { components: t } = Pn();
  return O.createElement(t.Dropdown, { ...e });
}
const tT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: NP,
  CaptionLabel: MP,
  Chevron: OP,
  Day: AP,
  DayButton: jP,
  Dropdown: DP,
  DropdownNav: kP,
  Footer: IP,
  Month: $P,
  MonthCaption: LP,
  MonthGrid: FP,
  Months: qP,
  MonthsDropdown: BP,
  Nav: WP,
  NextMonthButton: HP,
  Option: VP,
  PreviousMonthButton: GP,
  Root: zP,
  Select: YP,
  Week: UP,
  WeekNumber: ZP,
  WeekNumberHeader: QP,
  Weekday: KP,
  Weekdays: XP,
  Weeks: JP,
  YearsDropdown: eT
}, Symbol.toStringTag, { value: "Module" }));
function rT(e) {
  return {
    ...tT,
    ...e
  };
}
function nT(e) {
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
function oT() {
  const e = {};
  for (const t in re)
    e[re[t]] = `rdp-${re[t]}`;
  for (const t in xe)
    e[xe[t]] = `rdp-${xe[t]}`;
  for (const t in et)
    e[et[t]] = `rdp-${et[t]}`;
  for (const t in Be)
    e[Be[t]] = `rdp-${Be[t]}`;
  return e;
}
function fg(e, t, r) {
  return (r ?? new Mt(t)).format(e, "LLLL y");
}
const aT = fg;
function iT(e, t, r) {
  return (r ?? new Mt(t)).format(e, "d");
}
function sT(e, t = Ot) {
  return t.format(e, "LLLL");
}
function cT(e) {
  return e < 10 ? `0${e.toLocaleString()}` : `${e.toLocaleString()}`;
}
function lT() {
  return "";
}
function uT(e, t, r) {
  return (r ?? new Mt(t)).format(e, "cccccc");
}
function pg(e, t = Ot) {
  return t.format(e, "yyyy");
}
const dT = pg, fT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: fg,
  formatDay: iT,
  formatMonthCaption: aT,
  formatMonthDropdown: sT,
  formatWeekNumber: cT,
  formatWeekNumberHeader: lT,
  formatWeekdayName: uT,
  formatYearCaption: dT,
  formatYearDropdown: pg
}, Symbol.toStringTag, { value: "Module" }));
function pT(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...fT,
    ...e
  };
}
function mT(e, t, r, n, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: i(e),
    end: s(e)
  }).map((m) => {
    const v = n.formatMonthDropdown(m, o), y = l(m), h = t && m < a(t) || r && m > a(r) || !1;
    return { value: y, label: v, disabled: h };
  });
}
function hT(e, t = {}, r = {}) {
  let n = { ...t == null ? void 0 : t[re.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    n = {
      ...n,
      ...r == null ? void 0 : r[o]
    };
  }), n;
}
function vT(e, t, r) {
  const n = e.today(), o = t ? e.startOfISOWeek(n) : e.startOfWeek(n), a = [];
  for (let i = 0; i < 7; i++) {
    const s = e.addDays(o, i);
    a.push(s);
  }
  return a;
}
function gT(e, t, r, n) {
  if (!e || !t)
    return;
  const { startOfYear: o, endOfYear: a, addYears: i, getYear: s, isBefore: c, isSameYear: l } = n, f = o(e), p = a(t), m = [];
  let v = f;
  for (; c(v, p) || l(v, p); )
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
function mg(e, t, r) {
  return (r ?? new Mt(t)).format(e, "LLLL y");
}
const yT = mg;
function bT(e, t, r, n) {
  let o = (n ?? new Mt(r)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function hg(e, t, r, n) {
  let o = (n ?? new Mt(r)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const wT = hg;
function xT() {
  return "";
}
function ST(e) {
  return "Choose the Month";
}
function CT(e) {
  return "Go to the Next Month";
}
function _T(e) {
  return "Go to the Previous Month";
}
function ET(e, t, r) {
  return (r ?? new Mt(t)).format(e, "cccc");
}
function PT(e, t) {
  return `Week ${e}`;
}
function TT(e) {
  return "Week Number";
}
function RT(e) {
  return "Choose the Year";
}
const NT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: yT,
  labelDay: wT,
  labelDayButton: hg,
  labelGrid: mg,
  labelGridcell: bT,
  labelMonthDropdown: ST,
  labelNav: xT,
  labelNext: CT,
  labelPrevious: _T,
  labelWeekNumber: PT,
  labelWeekNumberHeader: TT,
  labelWeekday: ET,
  labelYearDropdown: RT
}, Symbol.toStringTag, { value: "Module" }));
function MT(e, t, { classNames: r, months: n, focused: o, dateLib: a }) {
  const i = nr(null), s = nr(n), c = nr(!1);
  lv(() => {
    const l = s.current;
    if (s.current = n, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement))
      return;
    const f = i.current, p = e.current.cloneNode(!0);
    if (p instanceof HTMLElement ? ([
      ...p.querySelectorAll("[data-animated-month]") ?? []
    ].forEach((g) => {
      const w = g.querySelector("[data-animated-month]");
      w && g.contains(w) && g.removeChild(w);
    }), i.current = p) : i.current = null, n.length === 0 || l.length === 0 || n.length !== l.length || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o || c.current || a.isSameMonth(n[0].date, l[0].date))
      return;
    const v = [
      ...(f == null ? void 0 : f.querySelectorAll("[data-animated-month]")) ?? []
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
        const x = h ? r[Be.caption_after_enter] : r[Be.caption_before_enter], C = h ? r[Be.weeks_after_enter] : r[Be.weeks_before_enter];
        g.style.position = "relative", g.style.overflow = "hidden";
        const _ = g.querySelector("[data-animated-caption]");
        _ && _ instanceof HTMLElement && _.classList.add(x);
        const S = g.querySelector("[data-animated-weeks]");
        S && S instanceof HTMLElement && S.classList.add(C);
        const E = () => {
          c.current = !1, _ && _ instanceof HTMLElement && _.classList.remove(x), S && S instanceof HTMLElement && S.classList.remove(C), g.style.position = "", g.style.overflow = "", g.contains(b) && g.removeChild(b);
        };
        b.style.pointerEvents = "none", b.style.position = "absolute", b.style.overflow = "hidden", b.setAttribute("aria-hidden", "true");
        const N = b.querySelector("[data-animated-weekdays]");
        N && N instanceof HTMLElement && (N.style.opacity = "0");
        const T = b.querySelector("[data-animated-caption]");
        T && T instanceof HTMLElement && (T.classList.add(h ? r[Be.caption_before_exit] : r[Be.caption_after_exit]), T.addEventListener("animationend", E));
        const k = b.querySelector("[data-animated-weeks]");
        k && k instanceof HTMLElement && k.classList.add(h ? r[Be.weeks_before_exit] : r[Be.weeks_after_exit]), g.insertBefore(b, g.firstChild);
      });
    }
  });
}
function OT(e, t, r, n) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: c } = r ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: p, endOfBroadcastWeek: m, endOfISOWeek: v, endOfMonth: y, endOfWeek: h, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: x } = n, C = c ? w(o, n) : i ? b(o) : x(o), _ = c ? m(a, n) : i ? v(y(a)) : h(y(a)), S = f(_, C), E = p(a, o) + 1, N = [];
  for (let D = 0; D <= S; D++) {
    const q = l(C, D);
    if (t && g(q, t))
      break;
    N.push(q);
  }
  const k = (c ? 35 : 42) * E;
  if (s && N.length < k) {
    const D = k - N.length;
    for (let q = 0; q < D; q++) {
      const F = l(N[N.length - 1], 1);
      N.push(F);
    }
  }
  return N;
}
function AT(e) {
  const t = [];
  return e.reduce((r, n) => {
    const o = [], a = n.weeks.reduce((i, s) => [...i, ...s.days], o);
    return [...r, ...a];
  }, t);
}
function jT(e, t, r, n) {
  const { numberOfMonths: o = 1 } = r, a = [];
  for (let i = 0; i < o; i++) {
    const s = n.addMonths(e, i);
    if (t && s > t)
      break;
    a.push(s);
  }
  return a;
}
function tf(e, t) {
  const { month: r, defaultMonth: n, today: o = t.today(), numberOfMonths: a = 1, endMonth: i, startMonth: s } = e;
  let c = r || n || o;
  const { differenceInCalendarMonths: l, addMonths: f, startOfMonth: p } = t;
  if (i && l(i, c) < 0) {
    const m = -1 * (a - 1);
    c = f(i, m);
  }
  return s && l(c, s) < 0 && (c = s), p(c);
}
class vg {
  constructor(t, r, n = Ot) {
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
class DT {
  constructor(t, r) {
    this.date = t, this.weeks = r;
  }
}
class kT {
  constructor(t, r) {
    this.days = r, this.weekNumber = t;
  }
}
function IT(e, t, r, n) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: p, startOfISOWeek: m, startOfWeek: v } = n, y = e.reduce((h, g) => {
    const w = r.broadcastCalendar ? p(g, n) : r.ISOWeek ? m(g) : v(g), b = r.broadcastCalendar ? a(g, n) : r.ISOWeek ? i(s(g)) : c(s(g)), x = t.filter((E) => E >= w && E <= b), C = r.broadcastCalendar ? 35 : 42;
    if (r.fixedWeeks && x.length < C) {
      const E = t.filter((N) => {
        const T = C - x.length;
        return N > b && N <= o(b, T);
      });
      x.push(...E);
    }
    const _ = x.reduce((E, N) => {
      const T = r.ISOWeek ? l(N) : f(N), k = E.find((q) => q.weekNumber === T), D = new vg(N, g, n);
      return k ? k.days.push(D) : E.push(new kT(T, [D])), E;
    }, []), S = new DT(g, _);
    return h.push(S), h;
  }, []);
  return r.reverseMonths ? y.reverse() : y;
}
function $T(e, t) {
  let { startMonth: r, endMonth: n } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: c, endOfYear: l, newDate: f, today: p } = t, { fromYear: m, toYear: v, fromMonth: y, toMonth: h } = e;
  !r && y && (r = y), !r && m && (r = t.newDate(m, 0, 1)), !n && h && (n = h), !n && v && (n = f(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return r ? r = i(r) : m ? r = f(m, 0, 1) : !r && g && (r = o(c(e.today ?? p(), -100))), n ? n = s(n) : v ? n = f(v, 11, 31) : !n && g && (n = l(e.today ?? p())), [
    r && a(r),
    n && a(n)
  ];
}
function LT(e, t, r, n) {
  if (r.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = r, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = n, l = o ? a : 1, f = i(e);
  if (!t)
    return s(f, l);
  if (!(c(t, e) < a))
    return s(f, l);
}
function FT(e, t, r, n) {
  if (r.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = r, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = n, l = o ? a ?? 1 : 1, f = i(e);
  if (!t)
    return s(f, -l);
  if (!(c(f, t) <= 0))
    return s(f, -l);
}
function qT(e) {
  const t = [];
  return e.reduce((r, n) => [...r, ...n.weeks], t);
}
function Zo(e, t) {
  const [r, n] = pt(e);
  return [t === void 0 ? r : t, n];
}
function BT(e, t) {
  const [r, n] = $T(e, t), { startOfMonth: o, endOfMonth: a } = t, i = tf(e, t), [s, c] = Zo(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  Lr(() => {
    const S = tf(e, t);
    c(S);
  }, [e.timeZone]);
  const l = jT(s, n, e, t), f = OT(l, e.endMonth ? a(e.endMonth) : void 0, e, t), p = IT(l, f, e, t), m = qT(p), v = AT(p), y = FT(s, r, e, t), h = LT(s, n, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (S) => m.some((E) => E.days.some((N) => N.isEqualTo(S))), x = (S) => {
    if (g)
      return;
    let E = o(S);
    r && E < o(r) && (E = o(r)), n && E > o(n) && (E = o(n)), c(E), w == null || w(E);
  };
  return {
    months: p,
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
function WT(e, t, r, n) {
  let o, a = 0, i = !1;
  for (; a < e.length && !i; ) {
    const s = e[a], c = t(s);
    !c[xe.disabled] && !c[xe.hidden] && !c[xe.outside] && (c[xe.focused] || n != null && n.isEqualTo(s) || r(s.date) || c[xe.today]) && (o = s, i = !0), a++;
  }
  return o || (o = e.find((s) => {
    const c = t(s);
    return !c[xe.disabled] && !c[xe.hidden] && !c[xe.outside];
  })), o;
}
function St(e, t, r = !1, n = Ot) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = n;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(t, o) >= (r ? 1 : 0) && i(a, t) >= (r ? 1 : 0)) : !r && a ? s(a, t) : !r && o ? s(o, t) : !1;
}
function gg(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function vu(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function yg(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function bg(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function wg(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function xg(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Ct(e, t, r = Ot) {
  const n = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = r;
  return n.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (r.isDate(s))
      return o(e, s);
    if (xg(s, r))
      return s.includes(e);
    if (vu(s))
      return St(s, e, !1, r);
    if (wg(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (gg(s)) {
      const c = a(s.before, e), l = a(s.after, e), f = c > 0, p = l < 0;
      return i(s.before, s.after) ? p && f : f || p;
    }
    return yg(s) ? a(e, s.after) > 0 : bg(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function HT(e, t, r, n, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: f, addWeeks: p, addYears: m, endOfBroadcastWeek: v, endOfISOWeek: y, endOfWeek: h, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: x, startOfWeek: C } = i;
  let S = {
    day: l,
    week: p,
    month: f,
    year: m,
    startOfWeek: (E) => c ? b(E, i) : s ? x(E) : C(E),
    endOfWeek: (E) => c ? v(E, i) : s ? y(E) : h(E)
  }[e](r, t === "after" ? 1 : -1);
  return t === "before" && n ? S = g([n, S]) : t === "after" && o && (S = w([o, S])), S;
}
function Sg(e, t, r, n, o, a, i, s = 0) {
  if (s > 365)
    return;
  const c = HT(
    e,
    t,
    r.date,
    // should be refDay? or refDay.date?
    n,
    o,
    a,
    i
  ), l = !!(a.disabled && Ct(c, a.disabled, i)), f = !!(a.hidden && Ct(c, a.hidden, i)), p = c, m = new vg(c, p, i);
  return !l && !f ? m : Sg(e, t, m, n, o, a, i, s + 1);
}
function VT(e, t, r, n, o) {
  const { autoFocus: a } = e, [i, s] = pt(), c = WT(t.days, r, n || (() => !1), i), [l, f] = pt(a ? c : void 0);
  return {
    isFocusTarget: (h) => !!(c != null && c.isEqualTo(h)),
    setFocused: f,
    focused: l,
    blur: () => {
      s(l), f(void 0);
    },
    moveFocus: (h, g) => {
      if (!l)
        return;
      const w = Sg(h, g, l, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), f(w));
    }
  };
}
function GT(e, t, r) {
  const { disabled: n, hidden: o, modifiers: a, showOutsideDays: i, broadcastCalendar: s, today: c } = t, { isSameDay: l, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: v, isAfter: y } = r, h = t.startMonth && p(t.startMonth), g = t.endMonth && v(t.endMonth), w = {
    [xe.focused]: [],
    [xe.outside]: [],
    [xe.disabled]: [],
    [xe.hidden]: [],
    [xe.today]: []
  }, b = {};
  for (const x of e) {
    const { date: C, displayMonth: _ } = x, S = !!(_ && !f(C, _)), E = !!(h && m(C, h)), N = !!(g && y(C, g)), T = !!(n && Ct(C, n, r)), k = !!(o && Ct(C, o, r)) || E || N || // Broadcast calendar will show outside days as default
    !s && !i && S || s && i === !1 && S, D = l(C, c ?? r.today());
    S && w.outside.push(x), T && w.disabled.push(x), k && w.hidden.push(x), D && w.today.push(x), a && Object.keys(a).forEach((q) => {
      const F = a == null ? void 0 : a[q];
      F && Ct(C, F, r) && (b[q] ? b[q].push(x) : b[q] = [x]);
    });
  }
  return (x) => {
    const C = {
      [xe.focused]: !1,
      [xe.disabled]: !1,
      [xe.hidden]: !1,
      [xe.outside]: !1,
      [xe.today]: !1
    }, _ = {};
    for (const S in w) {
      const E = w[S];
      C[S] = E.some((N) => N === x);
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
function zT(e, t) {
  const { selected: r, required: n, onSelect: o } = e, [a, i] = Zo(r, o ? r : void 0), s = o ? r : a, { isSameDay: c } = t, l = (v) => (s == null ? void 0 : s.some((y) => c(y, v))) ?? !1, { min: f, max: p } = e;
  return {
    selected: s,
    select: (v, y, h) => {
      let g = [...s ?? []];
      if (l(v)) {
        if ((s == null ? void 0 : s.length) === f || n && (s == null ? void 0 : s.length) === 1)
          return;
        g = s == null ? void 0 : s.filter((w) => !c(w, v));
      } else
        (s == null ? void 0 : s.length) === p ? g = [v] : g = [...g, v];
      return o || i(g), o == null || o(g, v, y, h), g;
    },
    isSelected: l
  };
}
function YT(e, t, r = 0, n = 0, o = !1, a = Ot) {
  const { from: i, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: f } = a;
  let p;
  if (!i && !s)
    p = { from: e, to: r > 0 ? void 0 : e };
  else if (i && !s)
    c(i, e) ? o ? p = { from: i, to: void 0 } : p = void 0 : f(e, i) ? p = { from: e, to: i } : p = { from: i, to: e };
  else if (i && s)
    if (c(i, e) && c(s, e))
      o ? p = { from: i, to: s } : p = void 0;
    else if (c(i, e))
      p = { from: i, to: r > 0 ? void 0 : e };
    else if (c(s, e))
      p = { from: e, to: r > 0 ? void 0 : e };
    else if (f(e, i))
      p = { from: e, to: s };
    else if (l(e, i))
      p = { from: i, to: e };
    else if (l(e, s))
      p = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (p != null && p.from && (p != null && p.to)) {
    const m = a.differenceInCalendarDays(p.to, p.from);
    n > 0 && m > n ? p = { from: e, to: void 0 } : r > 1 && m < r && (p = { from: e, to: void 0 });
  }
  return p;
}
function UT(e, t, r = Ot) {
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
function rf(e, t, r = Ot) {
  return St(e, t.from, !1, r) || St(e, t.to, !1, r) || St(t, e.from, !1, r) || St(t, e.to, !1, r);
}
function KT(e, t, r = Ot) {
  const n = Array.isArray(t) ? t : [t];
  if (n.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : r.isDate(s) ? St(e, s, !1, r) : xg(s, r) ? s.some((c) => St(e, c, !1, r)) : vu(s) ? s.from && s.to ? rf(e, { from: s.from, to: s.to }, r) : !1 : wg(s) ? UT(e, s.dayOfWeek, r) : gg(s) ? r.isAfter(s.before, s.after) ? rf(e, {
    from: r.addDays(s.after, 1),
    to: r.addDays(s.before, -1)
  }, r) : Ct(e.from, s, r) || Ct(e.to, s, r) : yg(s) || bg(s) ? Ct(e.from, s, r) || Ct(e.to, s, r) : !1))
    return !0;
  const i = n.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const c = r.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (i.some((f) => f(s)))
        return !0;
      s = r.addDays(s, 1);
    }
  }
  return !1;
}
function XT(e, t) {
  const { disabled: r, excludeDisabled: n, selected: o, required: a, onSelect: i } = e, [s, c] = Zo(o, i ? o : void 0), l = i ? o : s;
  return {
    selected: l,
    select: (m, v, y) => {
      const { min: h, max: g } = e, w = m ? YT(m, l, h, g, a, t) : void 0;
      return n && r && (w != null && w.from) && w.to && KT({ from: w.from, to: w.to }, r, t) && (w.from = m, w.to = void 0), i || c(w), i == null || i(w, m, v, y), w;
    },
    isSelected: (m) => l && St(l, m, !1, t)
  };
}
function ZT(e, t) {
  const { selected: r, required: n, onSelect: o } = e, [a, i] = Zo(r, o ? r : void 0), s = o ? r : a, { isSameDay: c } = t;
  return {
    selected: s,
    select: (p, m, v) => {
      let y = p;
      return !n && s && s && c(p, s) && (y = void 0), o || i(y), o == null || o(y, p, m, v), y;
    },
    isSelected: (p) => s ? c(s, p) : !1
  };
}
function QT(e, t) {
  const r = ZT(e, t), n = zT(e, t), o = XT(e, t);
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
function Cg(e) {
  const { components: t, formatters: r, labels: n, dateLib: o, locale: a, classNames: i } = uo(() => {
    const ae = { ...hu, ...e.locale };
    return {
      dateLib: new Mt({
        locale: ae,
        weekStartsOn: e.broadcastCalendar ? 1 : e.weekStartsOn,
        firstWeekContainsDate: e.firstWeekContainsDate,
        useAdditionalWeekYearTokens: e.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: e.useAdditionalDayOfYearTokens,
        timeZone: e.timeZone,
        numerals: e.numerals
      }, e.dateLib),
      components: rT(e.components),
      formatters: pT(e.formatters),
      labels: { ...NT, ...e.labels },
      locale: ae,
      classNames: { ...oT(), ...e.classNames }
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
  ]), { captionLayout: s, mode: c, onDayBlur: l, onDayClick: f, onDayFocus: p, onDayKeyDown: m, onDayMouseEnter: v, onDayMouseLeave: y, onNextClick: h, onPrevClick: g, showWeekNumber: w, styles: b } = e, { formatCaption: x, formatDay: C, formatMonthDropdown: _, formatWeekNumber: S, formatWeekNumberHeader: E, formatWeekdayName: N, formatYearDropdown: T } = r, k = BT(e, o), { days: D, months: q, navStart: F, navEnd: R, previousMonth: I, nextMonth: j, goToMonth: G } = k, B = GT(D, e, o), { isSelected: L, select: J, selected: te } = QT(e, o) ?? {}, { blur: A, focused: V, isFocusTarget: U, moveFocus: z, setFocused: ee } = VT(e, k, B, L ?? (() => !1), o), { labelDayButton: H, labelGridcell: oe, labelGrid: se, labelMonthDropdown: ce, labelNav: fe, labelWeekday: le, labelWeekNumber: Re, labelWeekNumberHeader: Y, labelYearDropdown: ke } = n, $e = uo(() => vT(o, e.ISOWeek), [o, e.ISOWeek]), Le = c !== void 0 || f !== void 0, hr = qe(() => {
    I && (G(I), g == null || g(I));
  }, [I, G, g]), wt = qe(() => {
    j && (G(j), h == null || h(j));
  }, [G, j, h]), zn = qe((ae, we) => (ue) => {
    ue.preventDefault(), ue.stopPropagation(), ee(ae), J == null || J(ae.date, we, ue), f == null || f(ae.date, we, ue);
  }, [J, f, ee]), P = qe((ae, we) => (ue) => {
    ee(ae), p == null || p(ae.date, we, ue);
  }, [p, ee]), Z = qe((ae, we) => (ue) => {
    A(), l == null || l(ae.date, we, ue);
  }, [A, l]), Q = qe((ae, we) => (ue) => {
    const jt = {
      ArrowLeft: ["day", e.dir === "rtl" ? "after" : "before"],
      ArrowRight: ["day", e.dir === "rtl" ? "before" : "after"],
      ArrowDown: ["week", "after"],
      ArrowUp: ["week", "before"],
      PageUp: [ue.shiftKey ? "year" : "month", "before"],
      PageDown: [ue.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (jt[ue.key]) {
      ue.preventDefault(), ue.stopPropagation();
      const [Xe, Yn] = jt[ue.key];
      z(Xe, Yn);
    }
    m == null || m(ae.date, we, ue);
  }, [z, m, e.dir]), pe = qe((ae, we) => (ue) => {
    v == null || v(ae.date, we, ue);
  }, [v]), Me = qe((ae, we) => (ue) => {
    y == null || y(ae.date, we, ue);
  }, [y]), Se = qe((ae) => (we) => {
    const ue = Number(we.target.value), jt = o.setMonth(o.startOfMonth(ae), ue);
    G(jt);
  }, [o, G]), ie = qe((ae) => (we) => {
    const ue = Number(we.target.value), jt = o.setYear(o.startOfMonth(ae), ue);
    G(jt);
  }, [o, G]), { className: Ke, style: At } = uo(() => ({
    className: [i[re.Root], e.className].filter(Boolean).join(" "),
    style: { ...b == null ? void 0 : b[re.Root], ...e.style }
  }), [i, e.className, e.style, b]), Ae = nT(e), it = nr(null);
  MT(it, !!e.animate, {
    classNames: i,
    months: q,
    focused: V,
    dateLib: o
  });
  const Kt = {
    dayPickerProps: e,
    selected: te,
    select: J,
    isSelected: L,
    months: q,
    nextMonth: j,
    previousMonth: I,
    goToMonth: G,
    getModifiers: B,
    components: t,
    classNames: i,
    styles: b,
    labels: n,
    formatters: r
  };
  return O.createElement(
    dg.Provider,
    { value: Kt },
    O.createElement(
      t.Root,
      { rootRef: e.animate ? it : void 0, className: Ke, style: At, dir: e.dir, id: e.id, lang: e.lang, nonce: e.nonce, title: e.title, role: e.role, "aria-label": e["aria-label"], ...Ae },
      O.createElement(
        t.Months,
        { className: i[re.Months], style: b == null ? void 0 : b[re.Months] },
        !e.hideNavigation && O.createElement(t.Nav, { className: i[re.Nav], style: b == null ? void 0 : b[re.Nav], "aria-label": fe(), onPreviousClick: hr, onNextClick: wt, previousMonth: I, nextMonth: j }),
        q.map((ae, we) => {
          const ue = mT(ae.date, F, R, r, o), jt = gT(F, R, r, o);
          return O.createElement(
            t.Month,
            { "data-animated-month": e.animate ? "true" : void 0, className: i[re.Month], style: b == null ? void 0 : b[re.Month], key: we, displayIndex: we, calendarMonth: ae },
            O.createElement(t.MonthCaption, { "data-animated-caption": e.animate ? "true" : void 0, className: i[re.MonthCaption], style: b == null ? void 0 : b[re.MonthCaption], calendarMonth: ae, displayIndex: we }, s != null && s.startsWith("dropdown") ? O.createElement(
              t.DropdownNav,
              { className: i[re.Dropdowns], style: b == null ? void 0 : b[re.Dropdowns] },
              s === "dropdown" || s === "dropdown-months" ? O.createElement(t.MonthsDropdown, { className: i[re.MonthsDropdown], "aria-label": ce(), classNames: i, components: t, disabled: !!e.disableNavigation, onChange: Se(ae.date), options: ue, style: b == null ? void 0 : b[re.Dropdown], value: o.getMonth(ae.date) }) : O.createElement("span", { role: "status", "aria-live": "polite" }, _(ae.date, o)),
              s === "dropdown" || s === "dropdown-years" ? O.createElement(t.YearsDropdown, { className: i[re.YearsDropdown], "aria-label": ke(o.options), classNames: i, components: t, disabled: !!e.disableNavigation, onChange: ie(ae.date), options: jt, style: b == null ? void 0 : b[re.Dropdown], value: o.getYear(ae.date) }) : O.createElement("span", { role: "status", "aria-live": "polite" }, T(ae.date, o))
            ) : O.createElement(t.CaptionLabel, { className: i[re.CaptionLabel], role: "status", "aria-live": "polite" }, x(ae.date, o.options, o))),
            O.createElement(
              t.MonthGrid,
              { role: "grid", "aria-multiselectable": c === "multiple" || c === "range", "aria-label": se(ae.date, o.options, o) || void 0, className: i[re.MonthGrid], style: b == null ? void 0 : b[re.MonthGrid] },
              !e.hideWeekdays && O.createElement(
                t.Weekdays,
                { "data-animated-weekdays": e.animate ? "true" : void 0, className: i[re.Weekdays], style: b == null ? void 0 : b[re.Weekdays] },
                w && O.createElement(t.WeekNumberHeader, { "aria-label": Y(o.options), className: i[re.WeekNumberHeader], style: b == null ? void 0 : b[re.WeekNumberHeader], scope: "col" }, E()),
                $e.map((Xe, Yn) => O.createElement(t.Weekday, { "aria-label": le(Xe, o.options, o), className: i[re.Weekday], key: Yn, style: b == null ? void 0 : b[re.Weekday], scope: "col" }, N(Xe, o.options, o)))
              ),
              O.createElement(t.Weeks, { "data-animated-weeks": e.animate ? "true" : void 0, className: i[re.Weeks], style: b == null ? void 0 : b[re.Weeks] }, ae.weeks.map((Xe, Yn) => O.createElement(
                t.Week,
                { className: i[re.Week], key: Xe.weekNumber, style: b == null ? void 0 : b[re.Week], week: Xe },
                w && O.createElement(t.WeekNumber, { week: Xe, style: b == null ? void 0 : b[re.WeekNumber], "aria-label": Re(Xe.weekNumber, {
                  locale: a
                }), className: i[re.WeekNumber], scope: "row", role: "rowheader" }, S(Xe.weekNumber)),
                Xe.days.map((je) => {
                  const { date: st } = je, ge = B(je);
                  if (ge[xe.focused] = !ge.hidden && !!(V != null && V.isEqualTo(je)), ge[et.selected] = (L == null ? void 0 : L(st)) || ge.selected, vu(te)) {
                    const { from: Ia, to: $a } = te;
                    ge[et.range_start] = !!(Ia && $a && o.isSameDay(st, Ia)), ge[et.range_end] = !!(Ia && $a && o.isSameDay(st, $a)), ge[et.range_middle] = St(te, st, !0, o);
                  }
                  const nC = hT(ge, b, e.modifiersStyles), oC = RP(ge, i, e.modifiersClassNames), aC = !Le && !ge.hidden ? oe(st, ge, o.options, o) : void 0;
                  return O.createElement(t.Day, { key: `${o.format(st, "yyyy-MM-dd")}_${o.format(je.displayMonth, "yyyy-MM")}`, day: je, modifiers: ge, className: oC.join(" "), style: nC, role: "gridcell", "aria-selected": ge.selected || void 0, "aria-label": aC, "data-day": o.format(st, "yyyy-MM-dd"), "data-month": je.outside ? o.format(st, "yyyy-MM") : void 0, "data-selected": ge.selected || void 0, "data-disabled": ge.disabled || void 0, "data-hidden": ge.hidden || void 0, "data-outside": je.outside || void 0, "data-focused": ge.focused || void 0, "data-today": ge.today || void 0 }, !ge.hidden && Le ? O.createElement(t.DayButton, { className: i[re.DayButton], style: b == null ? void 0 : b[re.DayButton], type: "button", day: je, modifiers: ge, disabled: ge.disabled || void 0, tabIndex: U(je) ? 0 : -1, "aria-label": H(st, ge, o.options, o), onClick: zn(je, ge), onBlur: Z(je, ge), onFocus: P(je, ge), onKeyDown: Q(je, ge), onMouseEnter: pe(je, ge), onMouseLeave: Me(je, ge) }, C(st, o.options, o)) : !ge.hidden && C(je.date, o.options, o));
                })
              )))
            )
          );
        })
      ),
      e.footer && O.createElement(t.Footer, { className: i[re.Footer], style: b == null ? void 0 : b[re.Footer], role: "status", "aria-live": "polite" }, e.footer)
    )
  );
}
function _g({
  className: e,
  showOutsideDays: t = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    Cg,
    {
      locale: _r,
      showOutsideDays: t,
      className: M("p-3", e),
      ...r
    }
  );
}
_g.displayName = "Calendar";
const JT = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
JT.displayName = "Card";
const eR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: r,
    className: M("flex flex-col space-y-1.5 p-2", e),
    ...t
  }
));
eR.displayName = "CardHeader";
const tR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
tR.displayName = "CardTitle";
const rR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "p",
  {
    ref: r,
    className: M("text-sm text-muted-foreground px-4", e),
    ...t
  }
));
rR.displayName = "CardDescription";
const nR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx("div", { ref: r, className: M("p-4", e), ...t }));
nR.displayName = "CardContent";
const oR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: r,
    className: M("flex items-center p-4 pt-0", e),
    ...t
  }
));
oR.displayName = "CardFooter";
function Tn(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Qo(e) {
  const [t, r] = u.useState(void 0);
  return Ee(() => {
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
var gu = "Checkbox", [aR, oF] = Te(gu), [iR, sR] = aR(gu), Eg = u.forwardRef(
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
      form: f,
      ...p
    } = e, [m, v] = u.useState(null), y = ne(t, (C) => v(C)), h = u.useRef(!1), g = m ? f || !!m.closest("form") : !0, [w = !1, b] = Pe({
      prop: o,
      defaultProp: a,
      onChange: l
    }), x = u.useRef(w);
    return u.useEffect(() => {
      const C = m == null ? void 0 : m.form;
      if (C) {
        const _ = () => b(x.current);
        return C.addEventListener("reset", _), () => C.removeEventListener("reset", _);
      }
    }, [m, b]), /* @__PURE__ */ d.jsxs(iR, { scope: r, state: w, disabled: s, children: [
      /* @__PURE__ */ d.jsx(
        W.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": $t(w) ? "mixed" : w,
          "aria-required": i,
          "data-state": Rg(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...p,
          ref: y,
          onKeyDown: $(e.onKeyDown, (C) => {
            C.key === "Enter" && C.preventDefault();
          }),
          onClick: $(e.onClick, (C) => {
            b((_) => $t(_) ? !0 : !_), g && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ d.jsx(
        cR,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: w,
          required: i,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" },
          defaultChecked: $t(a) ? !1 : a
        }
      )
    ] });
  }
);
Eg.displayName = gu;
var Pg = "CheckboxIndicator", Tg = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = sR(Pg, r);
    return /* @__PURE__ */ d.jsx(Ce, { present: n || $t(a.state) || a.state === !0, children: /* @__PURE__ */ d.jsx(
      W.span,
      {
        "data-state": Rg(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
Tg.displayName = Pg;
var cR = (e) => {
  const { control: t, checked: r, bubbles: n = !0, defaultChecked: o, ...a } = e, i = u.useRef(null), s = Tn(r), c = Qo(t);
  u.useEffect(() => {
    const f = i.current, p = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(p, "checked").set;
    if (s !== r && v) {
      const y = new Event("click", { bubbles: n });
      f.indeterminate = $t(r), v.call(f, $t(r) ? !1 : r), f.dispatchEvent(y);
    }
  }, [s, r, n]);
  const l = u.useRef($t(r) ? !1 : r);
  return /* @__PURE__ */ d.jsx(
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
function $t(e) {
  return e === "indeterminate";
}
function Rg(e) {
  return $t(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Ng = Eg, lR = Tg;
const uR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Ng,
  {
    ref: r,
    className: M(
      "peer h-4 w-4 shrink-0 rounded-xs border border-primary ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx(
      lR,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ d.jsx(ln, { className: "h-4 w-4" })
      }
    )
  }
));
uR.displayName = Ng.displayName;
var nf = 1, dR = 0.9, fR = 0.8, pR = 0.17, qa = 0.1, Ba = 0.999, mR = 0.9999, hR = 0.99, vR = /[\\\/_+.#"@\[\(\{&]/, gR = /[\\\/_+.#"@\[\(\{&]/g, yR = /[\s-]/, Mg = /[\s-]/g;
function ml(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? nf : hR;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), l = r.indexOf(c, o), f = 0, p, m, v, y; l >= 0; ) p = ml(e, t, r, n, l + 1, a + 1, i), p > f && (l === o ? p *= nf : vR.test(e.charAt(l - 1)) ? (p *= fR, v = e.slice(o, l - 1).match(gR), v && o > 0 && (p *= Math.pow(Ba, v.length))) : yR.test(e.charAt(l - 1)) ? (p *= dR, y = e.slice(o, l - 1).match(Mg), y && o > 0 && (p *= Math.pow(Ba, y.length))) : (p *= pR, o > 0 && (p *= Math.pow(Ba, l - o))), e.charAt(l) !== t.charAt(a) && (p *= mR)), (p < qa && r.charAt(l - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a)) && (m = ml(e, t, r, n, l + 1, a + 2, i), m * qa > p && (p = m * qa)), p > f && (f = p), l = r.indexOf(c, l + 1);
  return i[s] = f, f;
}
function of(e) {
  return e.toLowerCase().replace(Mg, " ");
}
function bR(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, ml(e, t, of(e), of(t), 0, 0, {});
}
function wR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e);
  u.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var xR = "DismissableLayer", hl = "dismissableLayer.update", SR = "dismissableLayer.pointerDownOutside", CR = "dismissableLayer.focusOutside", af, Og = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bt = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = u.useContext(Og), [f, p] = u.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), y = ne(t, (E) => p(E)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(g), b = f ? h.indexOf(f) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= w, _ = ER((E) => {
      const N = E.target, T = [...l.branches].some((k) => k.contains(N));
      !C || T || (o == null || o(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m), S = PR((E) => {
      const N = E.target;
      [...l.branches].some((k) => k.contains(N)) || (a == null || a(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m);
    return wR((E) => {
      b === l.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (f)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (af = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), sf(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = af);
        };
    }, [f, m, r, l]), u.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), sf());
    }, [f, l]), u.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(hl, E), () => document.removeEventListener(hl, E);
    }, []), /* @__PURE__ */ d.jsx(
      W.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: $(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: $(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: $(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
Bt.displayName = xR;
var _R = "DismissableLayerBranch", Ag = u.forwardRef((e, t) => {
  const r = u.useContext(Og), n = u.useRef(null), o = ne(t, n);
  return u.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ d.jsx(W.div, { ...e, ref: o });
});
Ag.displayName = _R;
function ER(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e), n = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          jg(
            SR,
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
function PR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e), n = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && jg(CR, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function sf() {
  const e = new CustomEvent(hl);
  document.dispatchEvent(e);
}
function jg(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? cn(o, a) : o.dispatchEvent(a);
}
var TR = Bt, RR = Ag, Wa = "focusScope.autoFocusOnMount", Ha = "focusScope.autoFocusOnUnmount", cf = { bubbles: !1, cancelable: !0 }, NR = "FocusScope", Rn = u.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = u.useState(null), l = me(o), f = me(a), p = u.useRef(null), m = ne(t, (h) => c(h)), v = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (n) {
      let h = function(x) {
        if (v.paused || !s) return;
        const C = x.target;
        s.contains(C) ? p.current = C : It(p.current, { select: !0 });
      }, g = function(x) {
        if (v.paused || !s) return;
        const C = x.relatedTarget;
        C !== null && (s.contains(C) || It(p.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const _ of x)
            _.removedNodes.length > 0 && It(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [n, s, v.paused]), u.useEffect(() => {
    if (s) {
      uf.add(v);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(Wa, cf);
        s.addEventListener(Wa, l), s.dispatchEvent(w), w.defaultPrevented || (MR(kR(Dg(s)), { select: !0 }), document.activeElement === h && It(s));
      }
      return () => {
        s.removeEventListener(Wa, l), setTimeout(() => {
          const w = new CustomEvent(Ha, cf);
          s.addEventListener(Ha, f), s.dispatchEvent(w), w.defaultPrevented || It(h ?? document.body, { select: !0 }), s.removeEventListener(Ha, f), uf.remove(v);
        }, 0);
      };
    }
  }, [s, l, f, v]);
  const y = u.useCallback(
    (h) => {
      if (!r && !n || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (g && w) {
        const b = h.currentTarget, [x, C] = OR(b);
        x && C ? !h.shiftKey && w === C ? (h.preventDefault(), r && It(x, { select: !0 })) : h.shiftKey && w === x && (h.preventDefault(), r && It(C, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ d.jsx(W.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
Rn.displayName = NR;
function MR(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (It(n, { select: t }), document.activeElement !== r) return;
}
function OR(e) {
  const t = Dg(e), r = lf(t, e), n = lf(t.reverse(), e);
  return [r, n];
}
function Dg(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function lf(e, t) {
  for (const r of e)
    if (!AR(r, { upTo: t })) return r;
}
function AR(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function jR(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function It(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && jR(e) && t && e.select();
  }
}
var uf = DR();
function DR() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = df(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = df(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function df(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function kR(e) {
  return e.filter((t) => t.tagName !== "A");
}
var IR = "Portal", ur = u.forwardRef((e, t) => {
  var s;
  const { container: r, ...n } = e, [o, a] = u.useState(!1);
  Ee(() => a(!0), []);
  const i = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? uv.createPortal(/* @__PURE__ */ d.jsx(W.div, { ...n, ref: t }), i) : null;
});
ur.displayName = IR;
var Va = 0;
function Jo() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ff()), document.body.insertAdjacentElement("beforeend", e[1] ?? ff()), Va++, () => {
      Va === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Va--;
    };
  }, []);
}
function ff() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ut = function() {
  return ut = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ut.apply(this, arguments);
};
function kg(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function $R(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var fo = "right-scroll-bar-position", po = "width-before-scroll-bar", LR = "with-scroll-bars-hidden", FR = "--removed-body-scroll-bar-size";
function Ga(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function qR(e, t) {
  var r = pt(function() {
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
var BR = typeof window < "u" ? u.useLayoutEffect : u.useEffect, pf = /* @__PURE__ */ new WeakMap();
function WR(e, t) {
  var r = qR(null, function(n) {
    return e.forEach(function(o) {
      return Ga(o, n);
    });
  });
  return BR(function() {
    var n = pf.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || Ga(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Ga(s, i);
      });
    }
    pf.set(r, e);
  }, [e]), r;
}
function HR(e) {
  return e;
}
function VR(e, t) {
  t === void 0 && (t = HR);
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
        var f = i;
        i = [], f.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(f) {
          i.push(f), l();
        },
        filter: function(f) {
          return i = i.filter(f), r;
        }
      };
    }
  };
  return o;
}
function GR(e) {
  e === void 0 && (e = {});
  var t = VR(null);
  return t.options = ut({ async: !0, ssr: !1 }, e), t;
}
var Ig = function(e) {
  var t = e.sideCar, r = kg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return u.createElement(n, ut({}, r));
};
Ig.isSideCarExport = !0;
function zR(e, t) {
  return e.useMedium(t), Ig;
}
var $g = GR(), za = function() {
}, ea = u.forwardRef(function(e, t) {
  var r = u.useRef(null), n = u.useState({
    onScrollCapture: za,
    onWheelCapture: za,
    onTouchMoveCapture: za
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, v = e.noIsolation, y = e.inert, h = e.allowPinchZoom, g = e.as, w = g === void 0 ? "div" : g, b = e.gapMode, x = kg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, _ = WR([r, t]), S = ut(ut({}, x), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: $g, removeScrollBar: l, shards: p, noIsolation: v, inert: y, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: b }),
    i ? u.cloneElement(u.Children.only(s), ut(ut({}, S), { ref: _ })) : u.createElement(w, ut({}, S, { className: c, ref: _ }), s)
  );
});
ea.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ea.classNames = {
  fullWidth: po,
  zeroRight: fo
};
var YR = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function UR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = YR();
  return t && e.setAttribute("nonce", t), e;
}
function KR(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function XR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ZR = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = UR()) && (KR(t, r), XR(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, QR = function() {
  var e = ZR();
  return function(t, r) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Lg = function() {
  var e = QR(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, JR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ya = function(e) {
  return parseInt(e || "", 10) || 0;
}, eN = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ya(r), Ya(n), Ya(o)];
}, tN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return JR;
  var t = eN(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, rN = Lg(), Er = "data-scroll-locked", nN = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(LR, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(Er, `] {
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
  
  .`).concat(fo, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(po, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(fo, " .").concat(fo, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(po, " .").concat(po, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Er, `] {
    `).concat(FR, ": ").concat(s, `px;
  }
`);
}, mf = function() {
  var e = parseInt(document.body.getAttribute(Er) || "0", 10);
  return isFinite(e) ? e : 0;
}, oN = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Er, (mf() + 1).toString()), function() {
      var e = mf() - 1;
      e <= 0 ? document.body.removeAttribute(Er) : document.body.setAttribute(Er, e.toString());
    };
  }, []);
}, aN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  oN();
  var a = u.useMemo(function() {
    return tN(o);
  }, [o]);
  return u.createElement(rN, { styles: nN(a, !t, o, r ? "" : "!important") });
}, vl = !1;
if (typeof window < "u")
  try {
    var Qn = Object.defineProperty({}, "passive", {
      get: function() {
        return vl = !0, !0;
      }
    });
    window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
  } catch {
    vl = !1;
  }
var yr = vl ? { passive: !1 } : !1, iN = function(e) {
  return e.tagName === "TEXTAREA";
}, Fg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !iN(e) && r[t] === "visible")
  );
}, sN = function(e) {
  return Fg(e, "overflowY");
}, cN = function(e) {
  return Fg(e, "overflowX");
}, hf = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = qg(e, n);
    if (o) {
      var a = Bg(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, lN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, uN = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, qg = function(e, t) {
  return e === "v" ? sN(t) : cN(t);
}, Bg = function(e, t) {
  return e === "v" ? lN(t) : uN(t);
}, dN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, fN = function(e, t, r, n, o) {
  var a = dN(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), l = !1, f = i > 0, p = 0, m = 0;
  do {
    var v = Bg(e, s), y = v[0], h = v[1], g = v[2], w = h - g - a * y;
    (y || w) && qg(e, s) && (p += w, m += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(m) < 1) && (l = !0), l;
}, Jn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vf = function(e) {
  return [e.deltaX, e.deltaY];
}, gf = function(e) {
  return e && "current" in e ? e.current : e;
}, pN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, mN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, hN = 0, br = [];
function vN(e) {
  var t = u.useRef([]), r = u.useRef([0, 0]), n = u.useRef(), o = u.useState(hN++)[0], a = u.useState(Lg)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = $R([e.lockRef.current], (e.shards || []).map(gf), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = Jn(h), b = r.current, x = "deltaX" in h ? h.deltaX : b[0] - w[0], C = "deltaY" in h ? h.deltaY : b[1] - w[1], _, S = h.target, E = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && E === "h" && S.type === "range")
      return !1;
    var N = hf(E, S);
    if (!N)
      return !0;
    if (N ? _ = E : (_ = E === "v" ? "h" : "v", N = hf(E, S)), !N)
      return !1;
    if (!n.current && "changedTouches" in h && (x || C) && (n.current = _), !_)
      return !0;
    var T = n.current || _;
    return fN(T, g, h, T === "h" ? x : C);
  }, []), c = u.useCallback(function(h) {
    var g = h;
    if (!(!br.length || br[br.length - 1] !== a)) {
      var w = "deltaY" in g ? vf(g) : Jn(g), b = t.current.filter(function(_) {
        return _.name === g.type && (_.target === g.target || g.target === _.shadowParent) && pN(_.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var x = (i.current.shards || []).map(gf).filter(Boolean).filter(function(_) {
          return _.contains(g.target);
        }), C = x.length > 0 ? s(g, x[0]) : !i.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = u.useCallback(function(h, g, w, b) {
    var x = { name: h, delta: g, target: w, should: b, shadowParent: gN(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    r.current = Jn(h), n.current = void 0;
  }, []), p = u.useCallback(function(h) {
    l(h.type, vf(h), h.target, s(h, e.lockRef.current));
  }, []), m = u.useCallback(function(h) {
    l(h.type, Jn(h), h.target, s(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return br.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, yr), document.addEventListener("touchmove", c, yr), document.addEventListener("touchstart", f, yr), function() {
      br = br.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, yr), document.removeEventListener("touchmove", c, yr), document.removeEventListener("touchstart", f, yr);
    };
  }, []);
  var v = e.removeScrollBar, y = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    y ? u.createElement(a, { styles: mN(o) }) : null,
    v ? u.createElement(aN, { gapMode: e.gapMode }) : null
  );
}
function gN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const yN = zR($g, vN);
var Nn = u.forwardRef(function(e, t) {
  return u.createElement(ea, ut({}, e, { ref: t, sideCar: yN }));
});
Nn.classNames = ea.classNames;
var bN = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wr = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), to = {}, Ua = 0, Wg = function(e) {
  return e && (e.host || Wg(e.parentNode));
}, wN = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Wg(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, xN = function(e, t, r, n) {
  var o = wN(t, Array.isArray(e) ? e : [e]);
  to[r] || (to[r] = /* @__PURE__ */ new WeakMap());
  var a = to[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(p) {
    !p || s.has(p) || (s.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var f = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var v = m.getAttribute(n), y = v !== null && v !== "false", h = (wr.get(m) || 0) + 1, g = (a.get(m) || 0) + 1;
          wr.set(m, h), a.set(m, g), i.push(m), h === 1 && y && eo.set(m, !0), g === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return f(t), s.clear(), Ua++, function() {
    i.forEach(function(p) {
      var m = wr.get(p) - 1, v = a.get(p) - 1;
      wr.set(p, m), a.set(p, v), m || (eo.has(p) || p.removeAttribute(n), eo.delete(p)), v || p.removeAttribute(r);
    }), Ua--, Ua || (wr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), to = {});
  };
}, ta = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = bN(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), xN(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, yu = "Dialog", [Hg, aF] = Te(yu), [SN, nt] = Hg(yu), Vg = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), c = u.useRef(null), [l = !1, f] = Pe({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ d.jsx(
    SN,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: _e(),
      titleId: _e(),
      descriptionId: _e(),
      open: l,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: r
    }
  );
};
Vg.displayName = yu;
var Gg = "DialogTrigger", zg = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nt(Gg, r), a = ne(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": xu(o.open),
        ...n,
        ref: a,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
  }
);
zg.displayName = Gg;
var bu = "DialogPortal", [CN, Yg] = Hg(bu, {
  forceMount: void 0
}), Ug = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = nt(bu, t);
  return /* @__PURE__ */ d.jsx(CN, { scope: t, forceMount: r, children: u.Children.map(n, (i) => /* @__PURE__ */ d.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ d.jsx(ur, { asChild: !0, container: o, children: i }) })) });
};
Ug.displayName = bu;
var So = "DialogOverlay", Kg = u.forwardRef(
  (e, t) => {
    const r = Yg(So, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = nt(So, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ d.jsx(_N, { ...o, ref: t }) }) : null;
  }
);
Kg.displayName = So;
var _N = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nt(So, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(Nn, { as: mt, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        W.div,
        {
          "data-state": xu(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), or = "DialogContent", Xg = u.forwardRef(
  (e, t) => {
    const r = Yg(or, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = nt(or, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(Ce, { present: n || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(EN, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(PN, { ...o, ref: t }) });
  }
);
Xg.displayName = or;
var EN = u.forwardRef(
  (e, t) => {
    const r = nt(or, e.__scopeDialog), n = u.useRef(null), o = ne(t, r.contentRef, n);
    return u.useEffect(() => {
      const a = n.current;
      if (a) return ta(a);
    }, []), /* @__PURE__ */ d.jsx(
      Zg,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: $(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: $(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), PN = u.forwardRef(
  (e, t) => {
    const r = nt(or, e.__scopeDialog), n = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Zg,
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
), Zg = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = nt(or, r), c = u.useRef(null), l = ne(t, c);
    return Jo(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        Rn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ d.jsx(
            Bt,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": xu(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(TN, { titleId: s.titleId }),
        /* @__PURE__ */ d.jsx(NN, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), wu = "DialogTitle", Qg = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nt(wu, r);
    return /* @__PURE__ */ d.jsx(W.h2, { id: o.titleId, ...n, ref: t });
  }
);
Qg.displayName = wu;
var Jg = "DialogDescription", ey = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nt(Jg, r);
    return /* @__PURE__ */ d.jsx(W.p, { id: o.descriptionId, ...n, ref: t });
  }
);
ey.displayName = Jg;
var ty = "DialogClose", ry = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = nt(ty, r);
    return /* @__PURE__ */ d.jsx(
      W.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: $(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ry.displayName = ty;
function xu(e) {
  return e ? "open" : "closed";
}
var ny = "DialogTitleWarning", [iF, oy] = gC(ny, {
  contentName: or,
  titleName: wu,
  docsSlug: "dialog"
}), TN = ({ titleId: e }) => {
  const t = oy(ny), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, RN = "DialogDescriptionWarning", NN = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${oy(RN).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Su = Vg, ay = zg, Cu = Ug, Mn = Kg, On = Xg, ra = Qg, na = ey, oa = ry, ro = { exports: {} }, Ka = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function MN() {
  if (yf) return Ka;
  yf = 1;
  var e = O;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return Ka.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Ka;
}
var Xa = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function ON() {
  return bf || (bf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v, y) {
      return v === y && (v !== 0 || 1 / v === 1 / y) || v !== v && y !== y;
    }
    function t(v, y) {
      f || o.startTransition === void 0 || (f = !0, console.error(
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
    var o = O, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, l = o.useDebugValue, f = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Xa.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Xa;
}
var wf;
function AN() {
  return wf || (wf = 1, process.env.NODE_ENV === "production" ? ro.exports = MN() : ro.exports = ON()), ro.exports;
}
var jN = AN(), Zr = '[cmdk-group=""]', Za = '[cmdk-group-items=""]', DN = '[cmdk-group-heading=""]', _u = '[cmdk-item=""]', xf = `${_u}:not([aria-disabled="true"])`, gl = "cmdk-item-select", er = "data-value", kN = (e, t, r) => bR(e, t, r), iy = u.createContext(void 0), An = () => u.useContext(iy), sy = u.createContext(void 0), Eu = () => u.useContext(sy), cy = u.createContext(void 0), ly = u.forwardRef((e, t) => {
  let r = xr(() => {
    var A, V;
    return { search: "", value: (V = (A = e.value) != null ? A : e.defaultValue) != null ? V : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = xr(() => /* @__PURE__ */ new Set()), o = xr(() => /* @__PURE__ */ new Map()), a = xr(() => /* @__PURE__ */ new Map()), i = xr(() => /* @__PURE__ */ new Set()), s = uy(e), { label: c, children: l, value: f, onValueChange: p, filter: m, shouldFilter: v, loop: y, disablePointerSelection: h = !1, vimBindings: g = !0, ...w } = e, b = _e(), x = _e(), C = _e(), _ = u.useRef(null), S = zN();
  ar(() => {
    if (f !== void 0) {
      let A = f.trim();
      r.current.value = A, E.emit();
    }
  }, [f]), ar(() => {
    S(6, F);
  }, []);
  let E = u.useMemo(() => ({ subscribe: (A) => (i.current.add(A), () => i.current.delete(A)), snapshot: () => r.current, setState: (A, V, U) => {
    var z, ee, H;
    if (!Object.is(r.current[A], V)) {
      if (r.current[A] = V, A === "search") q(), k(), S(1, D);
      else if (A === "value" && (U || S(5, F), ((z = s.current) == null ? void 0 : z.value) !== void 0)) {
        let oe = V ?? "";
        (H = (ee = s.current).onValueChange) == null || H.call(ee, oe);
        return;
      }
      E.emit();
    }
  }, emit: () => {
    i.current.forEach((A) => A());
  } }), []), N = u.useMemo(() => ({ value: (A, V, U) => {
    var z;
    V !== ((z = a.current.get(A)) == null ? void 0 : z.value) && (a.current.set(A, { value: V, keywords: U }), r.current.filtered.items.set(A, T(V, U)), S(2, () => {
      k(), E.emit();
    }));
  }, item: (A, V) => (n.current.add(A), V && (o.current.has(V) ? o.current.get(V).add(A) : o.current.set(V, /* @__PURE__ */ new Set([A]))), S(3, () => {
    q(), k(), r.current.value || D(), E.emit();
  }), () => {
    a.current.delete(A), n.current.delete(A), r.current.filtered.items.delete(A);
    let U = R();
    S(4, () => {
      q(), (U == null ? void 0 : U.getAttribute("id")) === A && D(), E.emit();
    });
  }), group: (A) => (o.current.has(A) || o.current.set(A, /* @__PURE__ */ new Set()), () => {
    a.current.delete(A), o.current.delete(A);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: b, inputId: C, labelId: x, listInnerRef: _ }), []);
  function T(A, V) {
    var U, z;
    let ee = (z = (U = s.current) == null ? void 0 : U.filter) != null ? z : kN;
    return A ? ee(A, r.current.search, V) : 0;
  }
  function k() {
    if (!r.current.search || s.current.shouldFilter === !1) return;
    let A = r.current.filtered.items, V = [];
    r.current.filtered.groups.forEach((z) => {
      let ee = o.current.get(z), H = 0;
      ee.forEach((oe) => {
        let se = A.get(oe);
        H = Math.max(se, H);
      }), V.push([z, H]);
    });
    let U = _.current;
    I().sort((z, ee) => {
      var H, oe;
      let se = z.getAttribute("id"), ce = ee.getAttribute("id");
      return ((H = A.get(ce)) != null ? H : 0) - ((oe = A.get(se)) != null ? oe : 0);
    }).forEach((z) => {
      let ee = z.closest(Za);
      ee ? ee.appendChild(z.parentElement === ee ? z : z.closest(`${Za} > *`)) : U.appendChild(z.parentElement === U ? z : z.closest(`${Za} > *`));
    }), V.sort((z, ee) => ee[1] - z[1]).forEach((z) => {
      var ee;
      let H = (ee = _.current) == null ? void 0 : ee.querySelector(`${Zr}[${er}="${encodeURIComponent(z[0])}"]`);
      H == null || H.parentElement.appendChild(H);
    });
  }
  function D() {
    let A = I().find((U) => U.getAttribute("aria-disabled") !== "true"), V = A == null ? void 0 : A.getAttribute(er);
    E.setState("value", V || void 0);
  }
  function q() {
    var A, V, U, z;
    if (!r.current.search || s.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let ee = 0;
    for (let H of n.current) {
      let oe = (V = (A = a.current.get(H)) == null ? void 0 : A.value) != null ? V : "", se = (z = (U = a.current.get(H)) == null ? void 0 : U.keywords) != null ? z : [], ce = T(oe, se);
      r.current.filtered.items.set(H, ce), ce > 0 && ee++;
    }
    for (let [H, oe] of o.current) for (let se of oe) if (r.current.filtered.items.get(se) > 0) {
      r.current.filtered.groups.add(H);
      break;
    }
    r.current.filtered.count = ee;
  }
  function F() {
    var A, V, U;
    let z = R();
    z && (((A = z.parentElement) == null ? void 0 : A.firstChild) === z && ((U = (V = z.closest(Zr)) == null ? void 0 : V.querySelector(DN)) == null || U.scrollIntoView({ block: "nearest" })), z.scrollIntoView({ block: "nearest" }));
  }
  function R() {
    var A;
    return (A = _.current) == null ? void 0 : A.querySelector(`${_u}[aria-selected="true"]`);
  }
  function I() {
    var A;
    return Array.from(((A = _.current) == null ? void 0 : A.querySelectorAll(xf)) || []);
  }
  function j(A) {
    let V = I()[A];
    V && E.setState("value", V.getAttribute(er));
  }
  function G(A) {
    var V;
    let U = R(), z = I(), ee = z.findIndex((oe) => oe === U), H = z[ee + A];
    (V = s.current) != null && V.loop && (H = ee + A < 0 ? z[z.length - 1] : ee + A === z.length ? z[0] : z[ee + A]), H && E.setState("value", H.getAttribute(er));
  }
  function B(A) {
    let V = R(), U = V == null ? void 0 : V.closest(Zr), z;
    for (; U && !z; ) U = A > 0 ? VN(U, Zr) : GN(U, Zr), z = U == null ? void 0 : U.querySelector(xf);
    z ? E.setState("value", z.getAttribute(er)) : G(A);
  }
  let L = () => j(I().length - 1), J = (A) => {
    A.preventDefault(), A.metaKey ? L() : A.altKey ? B(1) : G(1);
  }, te = (A) => {
    A.preventDefault(), A.metaKey ? j(0) : A.altKey ? B(-1) : G(-1);
  };
  return u.createElement(W.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (A) => {
    var V;
    if ((V = w.onKeyDown) == null || V.call(w, A), !A.defaultPrevented) switch (A.key) {
      case "n":
      case "j": {
        g && A.ctrlKey && J(A);
        break;
      }
      case "ArrowDown": {
        J(A);
        break;
      }
      case "p":
      case "k": {
        g && A.ctrlKey && te(A);
        break;
      }
      case "ArrowUp": {
        te(A);
        break;
      }
      case "Home": {
        A.preventDefault(), j(0);
        break;
      }
      case "End": {
        A.preventDefault(), L();
        break;
      }
      case "Enter":
        if (!A.nativeEvent.isComposing && A.keyCode !== 229) {
          A.preventDefault();
          let U = R();
          if (U) {
            let z = new Event(gl);
            U.dispatchEvent(z);
          }
        }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: UN }, c), aa(e, (A) => u.createElement(sy.Provider, { value: E }, u.createElement(iy.Provider, { value: N }, A))));
}), IN = u.forwardRef((e, t) => {
  var r, n;
  let o = _e(), a = u.useRef(null), i = u.useContext(cy), s = An(), c = uy(e), l = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i == null ? void 0 : i.forceMount;
  ar(() => {
    if (!l) return s.item(o, i == null ? void 0 : i.id);
  }, [l]);
  let f = dy(o, a, [e.value, e.children, a], e.keywords), p = Eu(), m = ir((S) => S.value && S.value === f.current), v = ir((S) => l || s.filter() === !1 ? !0 : S.search ? S.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let S = a.current;
    if (!(!S || e.disabled)) return S.addEventListener(gl, y), () => S.removeEventListener(gl, y);
  }, [v, e.onSelect, e.disabled]);
  function y() {
    var S, E;
    h(), (E = (S = c.current).onSelect) == null || E.call(S, f.current);
  }
  function h() {
    p.setState("value", f.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: x, keywords: C, ..._ } = e;
  return u.createElement(W.div, { ref: fn([a, t]), ..._, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!m, "data-disabled": !!g, "data-selected": !!m, onPointerMove: g || s.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : y }, e.children);
}), $N = u.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = _e(), s = u.useRef(null), c = u.useRef(null), l = _e(), f = An(), p = ir((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(i) : !0);
  ar(() => f.group(i), []), dy(i, s, [e.value, e.heading, c]);
  let m = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(W.div, { ref: fn([s, t]), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && u.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), aa(e, (v) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, u.createElement(cy.Provider, { value: m }, v))));
}), LN = u.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = u.useRef(null), a = ir((i) => !i.search);
  return !r && !a ? null : u.createElement(W.div, { ref: fn([o, t]), ...n, "cmdk-separator": "", role: "separator" });
}), FN = u.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = Eu(), i = ir((f) => f.search), s = ir((f) => f.value), c = An(), l = u.useMemo(() => {
    var f;
    let p = (f = c.listInnerRef.current) == null ? void 0 : f.querySelector(`${_u}[${er}="${encodeURIComponent(s)}"]`);
    return p == null ? void 0 : p.getAttribute("id");
  }, []);
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(W.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (f) => {
    o || a.setState("search", f.target.value), r == null || r(f.target.value);
  } });
}), qN = u.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = u.useRef(null), i = u.useRef(null), s = An();
  return u.useEffect(() => {
    if (i.current && a.current) {
      let c = i.current, l = a.current, f, p = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let m = c.offsetHeight;
          l.style.setProperty("--cmdk-list-height", m.toFixed(1) + "px");
        });
      });
      return p.observe(c), () => {
        cancelAnimationFrame(f), p.unobserve(c);
      };
    }
  }, []), u.createElement(W.div, { ref: fn([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": n, id: s.listId }, aa(e, (c) => u.createElement("div", { ref: fn([i, s.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), BN = u.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return u.createElement(Su, { open: r, onOpenChange: n }, u.createElement(Cu, { container: i }, u.createElement(Mn, { "cmdk-overlay": "", className: o }), u.createElement(On, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(ly, { ref: t, ...s }))));
}), WN = u.forwardRef((e, t) => ir((r) => r.filtered.count === 0) ? u.createElement(W.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), HN = u.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return u.createElement(W.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, aa(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), Fe = Object.assign(ly, { List: qN, Item: IN, Input: FN, Group: $N, Separator: LN, Dialog: BN, Empty: WN, Loading: HN });
function VN(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function GN(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function uy(e) {
  let t = u.useRef(e);
  return ar(() => {
    t.current = e;
  }), t;
}
var ar = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function xr(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function fn(e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
function ir(e) {
  let t = Eu(), r = () => e(t.snapshot());
  return jN.useSyncExternalStore(t.subscribe, r, r);
}
function dy(e, t, r, n = []) {
  let o = u.useRef(), a = An();
  return ar(() => {
    var i;
    let s = (() => {
      var l;
      for (let f of r) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (l = f.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = n.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(er, s), o.current = s;
  }), o;
}
var zN = () => {
  let [e, t] = u.useState(), r = xr(() => /* @__PURE__ */ new Map());
  return ar(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function YN(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function aa({ asChild: e, children: t }, r) {
  return e && u.isValidElement(t) ? u.cloneElement(YN(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var UN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Pu = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
Pu.displayName = Fe.displayName;
const sF = ({ children: e, ...t }) => /* @__PURE__ */ d.jsx(RO, { ...t, children: /* @__PURE__ */ d.jsx(tb, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ d.jsx(Pu, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), fy = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ d.jsx(m0, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ d.jsx(
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
fy.displayName = Fe.Input.displayName;
const py = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Fe.List,
  {
    ref: r,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
py.displayName = Fe.List.displayName;
const my = u.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  Fe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
my.displayName = Fe.Empty.displayName;
const hy = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
hy.displayName = Fe.Group.displayName;
const vy = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Fe.Separator,
  {
    ref: r,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
vy.displayName = Fe.Separator.displayName;
const mo = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
mo.displayName = Fe.Item.displayName;
const KN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
KN.displayName = "CommandShortcut";
const XN = ["top", "right", "bottom", "left"], Lt = Math.min, We = Math.max, Co = Math.round, no = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), ZN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, QN = {
  start: "end",
  end: "start"
};
function yl(e, t, r) {
  return We(e, Lt(t, r));
}
function Et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pt(e) {
  return e.split("-")[0];
}
function Vr(e) {
  return e.split("-")[1];
}
function Tu(e) {
  return e === "x" ? "y" : "x";
}
function Ru(e) {
  return e === "y" ? "height" : "width";
}
function Ft(e) {
  return ["top", "bottom"].includes(Pt(e)) ? "y" : "x";
}
function Nu(e) {
  return Tu(Ft(e));
}
function JN(e, t, r) {
  r === void 0 && (r = !1);
  const n = Vr(e), o = Nu(e), a = Ru(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = _o(i)), [i, _o(i)];
}
function eM(e) {
  const t = _o(e);
  return [bl(e), t, bl(t)];
}
function bl(e) {
  return e.replace(/start|end/g, (t) => QN[t]);
}
function tM(e, t, r) {
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
function rM(e, t, r, n) {
  const o = Vr(e);
  let a = tM(Pt(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(bl)))), a;
}
function _o(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ZN[t]);
}
function nM(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gy(e) {
  return typeof e != "number" ? nM(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Eo(e) {
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
function Sf(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = Ft(t), i = Nu(t), s = Ru(i), c = Pt(t), l = a === "y", f = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: f,
        y: n.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: f,
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
  switch (Vr(t)) {
    case "start":
      v[i] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      v[i] += m * (r && l ? -1 : 1);
      break;
  }
  return v;
}
const oM = async (e, t, r) => {
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
    x: f,
    y: p
  } = Sf(l, n, c), m = n, v = {}, y = 0;
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
      x: f,
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
    f = b ?? f, p = x ?? p, v = {
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
      x: f,
      y: p
    } = Sf(l, m, c)), h = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: v
  };
};
async function pn(e, t) {
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
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = Et(t, e), y = gy(v), g = s[m ? p === "floating" ? "reference" : "floating" : p], w = Eo(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), b = p === "floating" ? {
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
  }, _ = Eo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const aM = (e) => ({
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
      padding: f = 0
    } = Et(e, t) || {};
    if (l == null)
      return {};
    const p = gy(f), m = {
      x: r,
      y: n
    }, v = Nu(o), y = Ru(v), h = await i.getDimensions(l), g = v === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", C = a.reference[y] + a.reference[v] - m[v] - a.floating[y], _ = m[v] - a.reference[v], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let E = S ? S[x] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(S))) && (E = s.floating[x] || a.floating[y]);
    const N = C / 2 - _ / 2, T = E / 2 - h[y] / 2 - 1, k = Lt(p[w], T), D = Lt(p[b], T), q = k, F = E - h[y] - D, R = E / 2 - h[y] / 2 + N, I = yl(q, R, F), j = !c.arrow && Vr(o) != null && R !== I && a.reference[y] / 2 - (R < q ? k : D) - h[y] / 2 < 0, G = j ? R < q ? R - q : R - F : 0;
    return {
      [v]: m[v] + G,
      data: {
        [v]: I,
        centerOffset: R - I - G,
        ...j && {
          alignmentOffset: G
        }
      },
      reset: j
    };
  }
}), iM = function(e) {
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
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: h = !0,
        ...g
      } = Et(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const w = Pt(o), b = Ft(s), x = Pt(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = m || (x || !h ? [_o(s)] : eM(s)), S = y !== "none";
      !m && S && _.push(...rM(s, h, y, C));
      const E = [s, ..._], N = await pn(t, g), T = [];
      let k = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (f && T.push(N[w]), p) {
        const R = JN(o, i, C);
        T.push(N[R[0]], N[R[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var D, q;
        const R = (((D = a.flip) == null ? void 0 : D.index) || 0) + 1, I = E[R];
        if (I)
          return {
            data: {
              index: R,
              overflows: k
            },
            reset: {
              placement: I
            }
          };
        let j = (q = k.filter((G) => G.overflows[0] <= 0).sort((G, B) => G.overflows[1] - B.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!j)
          switch (v) {
            case "bestFit": {
              var F;
              const G = (F = k.filter((B) => {
                if (S) {
                  const L = Ft(B.placement);
                  return L === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((L) => L > 0).reduce((L, J) => L + J, 0)]).sort((B, L) => B[1] - L[1])[0]) == null ? void 0 : F[0];
              G && (j = G);
              break;
            }
            case "initialPlacement":
              j = s;
              break;
          }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function Cf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _f(e) {
  return XN.some((t) => e[t] >= 0);
}
const sM = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Et(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await pn(t, {
            ...o,
            elementContext: "reference"
          }), i = Cf(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: _f(i)
            }
          };
        }
        case "escaped": {
          const a = await pn(t, {
            ...o,
            altBoundary: !0
          }), i = Cf(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: _f(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function cM(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = Pt(r), s = Vr(r), c = Ft(r) === "y", l = ["left", "top"].includes(i) ? -1 : 1, f = a && c ? -1 : 1, p = Et(t, e);
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
    x: v * f,
    y: m * l
  } : {
    x: m * l,
    y: v * f
  };
}
const lM = function(e) {
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
      } = t, c = await cM(t, e);
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
}, uM = function(e) {
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
      } = Et(e, t), l = {
        x: r,
        y: n
      }, f = await pn(t, c), p = Ft(Pt(o)), m = Tu(p);
      let v = l[m], y = l[p];
      if (a) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = v + f[g], x = v - f[w];
        v = yl(b, v, x);
      }
      if (i) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = y + f[g], x = y - f[w];
        y = yl(b, y, x);
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
}, dM = function(e) {
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
      } = Et(e, t), f = {
        x: r,
        y: n
      }, p = Ft(o), m = Tu(p);
      let v = f[m], y = f[p];
      const h = Et(s, t), g = typeof h == "number" ? {
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
        const x = m === "y" ? "width" : "height", C = ["top", "left"].includes(Pt(o)), _ = a.reference[p] - a.floating[x] + (C && ((w = i.offset) == null ? void 0 : w[p]) || 0) + (C ? 0 : g.crossAxis), S = a.reference[p] + a.reference[x] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[p]) || 0) - (C ? g.crossAxis : 0);
        y < _ ? y = _ : y > S && (y = S);
      }
      return {
        [m]: v,
        [p]: y
      };
    }
  };
}, fM = function(e) {
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
      } = Et(e, t), f = await pn(t, l), p = Pt(o), m = Vr(o), v = Ft(o) === "y", {
        width: y,
        height: h
      } = a.floating;
      let g, w;
      p === "top" || p === "bottom" ? (g = p, w = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = p, g = m === "end" ? "top" : "bottom");
      const b = h - f.top - f.bottom, x = y - f.left - f.right, C = Lt(h - f[g], b), _ = Lt(y - f[w], x), S = !t.middlewareData.shift;
      let E = C, N = _;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (N = x), (n = t.middlewareData.shift) != null && n.enabled.y && (E = b), S && !m) {
        const k = We(f.left, 0), D = We(f.right, 0), q = We(f.top, 0), F = We(f.bottom, 0);
        v ? N = y - 2 * (k !== 0 || D !== 0 ? k + D : We(f.left, f.right)) : E = h - 2 * (q !== 0 || F !== 0 ? q + F : We(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
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
function ia() {
  return typeof window < "u";
}
function Gr(e) {
  return yy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function He(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gt(e) {
  var t;
  return (t = (yy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yy(e) {
  return ia() ? e instanceof Node || e instanceof He(e).Node : !1;
}
function tt(e) {
  return ia() ? e instanceof Element || e instanceof He(e).Element : !1;
}
function ht(e) {
  return ia() ? e instanceof HTMLElement || e instanceof He(e).HTMLElement : !1;
}
function Ef(e) {
  return !ia() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof He(e).ShadowRoot;
}
function jn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function pM(e) {
  return ["table", "td", "th"].includes(Gr(e));
}
function sa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Mu(e) {
  const t = Ou(), r = tt(e) ? rt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function mM(e) {
  let t = qt(e);
  for (; ht(t) && !Nr(t); ) {
    if (Mu(t))
      return t;
    if (sa(t))
      return null;
    t = qt(t);
  }
  return null;
}
function Ou() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nr(e) {
  return ["html", "body", "#document"].includes(Gr(e));
}
function rt(e) {
  return He(e).getComputedStyle(e);
}
function ca(e) {
  return tt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function qt(e) {
  if (Gr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ef(e) && e.host || // Fallback.
    gt(e)
  );
  return Ef(t) ? t.host : t;
}
function by(e) {
  const t = qt(e);
  return Nr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && jn(t) ? t : by(t);
}
function mn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = by(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = He(o);
  if (a) {
    const s = wl(i);
    return t.concat(i, i.visualViewport || [], jn(o) ? o : [], s && r ? mn(s) : []);
  }
  return t.concat(o, mn(o, [], r));
}
function wl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wy(e) {
  const t = rt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = ht(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Co(r) !== a || Co(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function Au(e) {
  return tt(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Au(e);
  if (!ht(t))
    return ft(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = wy(t);
  let i = (a ? Co(r.width) : r.width) / n, s = (a ? Co(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const hM = /* @__PURE__ */ ft(0);
function xy(e) {
  const t = He(e);
  return !Ou() || !t.visualViewport ? hM : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function vM(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== He(e) ? !1 : t;
}
function sr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = Au(e);
  let i = ft(1);
  t && (n ? tt(n) && (i = Pr(n)) : i = Pr(e));
  const s = vM(a, r, n) ? xy(a) : ft(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, f = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = He(a), v = n && tt(n) ? He(n) : n;
    let y = m, h = wl(y);
    for (; h && n && v !== y; ) {
      const g = Pr(h), w = h.getBoundingClientRect(), b = rt(h), x = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, C = w.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      c *= g.x, l *= g.y, f *= g.x, p *= g.y, c += x, l += C, y = He(h), h = wl(y);
    }
  }
  return Eo({
    width: f,
    height: p,
    x: c,
    y: l
  });
}
function ju(e, t) {
  const r = ca(e).scrollLeft;
  return t ? t.left + r : sr(gt(e)).left + r;
}
function Sy(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    ju(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function gM(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = gt(n), s = t ? sa(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ft(1);
  const f = ft(0), p = ht(n);
  if ((p || !p && !a) && ((Gr(n) !== "body" || jn(i)) && (c = ca(n)), ht(n))) {
    const v = sr(n);
    l = Pr(n), f.x = v.x + n.clientLeft, f.y = v.y + n.clientTop;
  }
  const m = i && !p && !a ? Sy(i, c, !0) : ft(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + f.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + f.y + m.y
  };
}
function yM(e) {
  return Array.from(e.getClientRects());
}
function bM(e) {
  const t = gt(e), r = ca(e), n = e.ownerDocument.body, o = We(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = We(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + ju(e);
  const s = -r.scrollTop;
  return rt(n).direction === "rtl" && (i += We(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function wM(e, t) {
  const r = He(e), n = gt(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Ou();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function xM(e, t) {
  const r = sr(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = ht(e) ? Pr(e) : ft(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Pf(e, t, r) {
  let n;
  if (t === "viewport")
    n = wM(e, r);
  else if (t === "document")
    n = bM(gt(e));
  else if (tt(t))
    n = xM(t, r);
  else {
    const o = xy(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Eo(n);
}
function Cy(e, t) {
  const r = qt(e);
  return r === t || !tt(r) || Nr(r) ? !1 : rt(r).position === "fixed" || Cy(r, t);
}
function SM(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = mn(e, [], !1).filter((s) => tt(s) && Gr(s) !== "body"), o = null;
  const a = rt(e).position === "fixed";
  let i = a ? qt(e) : e;
  for (; tt(i) && !Nr(i); ) {
    const s = rt(i), c = Mu(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || jn(i) && !c && Cy(e, i)) ? n = n.filter((f) => f !== i) : o = s, i = qt(i);
  }
  return t.set(e, n), n;
}
function CM(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? sa(t) ? [] : SM(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((l, f) => {
    const p = Pf(t, f, o);
    return l.top = We(p.top, l.top), l.right = Lt(p.right, l.right), l.bottom = Lt(p.bottom, l.bottom), l.left = We(p.left, l.left), l;
  }, Pf(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function _M(e) {
  const {
    width: t,
    height: r
  } = wy(e);
  return {
    width: t,
    height: r
  };
}
function EM(e, t, r) {
  const n = ht(t), o = gt(t), a = r === "fixed", i = sr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ft(0);
  if (n || !n && !a)
    if ((Gr(t) !== "body" || jn(o)) && (s = ca(t)), n) {
      const m = sr(t, !0, a, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else o && (c.x = ju(o));
  const l = o && !n && !a ? Sy(o, s) : ft(0), f = i.left + s.scrollLeft - c.x - l.x, p = i.top + s.scrollTop - c.y - l.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Qa(e) {
  return rt(e).position === "static";
}
function Tf(e, t) {
  if (!ht(e) || rt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return gt(e) === r && (r = r.ownerDocument.body), r;
}
function _y(e, t) {
  const r = He(e);
  if (sa(e))
    return r;
  if (!ht(e)) {
    let o = qt(e);
    for (; o && !Nr(o); ) {
      if (tt(o) && !Qa(o))
        return o;
      o = qt(o);
    }
    return r;
  }
  let n = Tf(e, t);
  for (; n && pM(n) && Qa(n); )
    n = Tf(n, t);
  return n && Nr(n) && Qa(n) && !Mu(n) ? r : n || mM(e) || r;
}
const PM = async function(e) {
  const t = this.getOffsetParent || _y, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: EM(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function TM(e) {
  return rt(e).direction === "rtl";
}
const RM = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gM,
  getDocumentElement: gt,
  getClippingRect: CM,
  getOffsetParent: _y,
  getElementRects: PM,
  getClientRects: yM,
  getDimensions: _M,
  getScale: Pr,
  isElement: tt,
  isRTL: TM
};
function Ey(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function NM(e, t) {
  let r = null, n;
  const o = gt(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: m,
      height: v
    } = l;
    if (s || t(), !m || !v)
      return;
    const y = no(p), h = no(o.clientWidth - (f + m)), g = no(o.clientHeight - (p + v)), w = no(f), x = {
      rootMargin: -y + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: We(0, Lt(1, c)) || 1
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
      E === 1 && !Ey(l, e.getBoundingClientRect()) && i(), C = !1;
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
function MM(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Au(e), f = o || a ? [...l ? mn(l) : [], ...mn(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", r, {
      passive: !0
    }), a && w.addEventListener("resize", r);
  });
  const p = l && s ? NM(l, r) : null;
  let m = -1, v = null;
  i && (v = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = v) == null || x.observe(t);
    })), r();
  }), l && !c && v.observe(l), v.observe(t));
  let y, h = c ? sr(e) : null;
  c && g();
  function g() {
    const w = sr(e);
    h && !Ey(h, w) && r(), h = w, y = requestAnimationFrame(g);
  }
  return r(), () => {
    var w;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", r), a && b.removeEventListener("resize", r);
    }), p == null || p(), (w = v) == null || w.disconnect(), v = null, c && cancelAnimationFrame(y);
  };
}
const OM = lM, AM = uM, jM = iM, DM = fM, kM = sM, Rf = aM, IM = dM, $M = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: RM,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return oM(e, t, {
    ...o,
    platform: a
  });
};
var ho = typeof document < "u" ? lv : Lr;
function Po(e, t) {
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
        if (!Po(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Po(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Py(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nf(e, t) {
  const r = Py(e);
  return Math.round(t * r) / r;
}
function Ja(e) {
  const t = u.useRef(e);
  return ho(() => {
    t.current = e;
  }), t;
}
function LM(e) {
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
  } = e, [f, p] = u.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = u.useState(n);
  Po(m, n) || v(n);
  const [y, h] = u.useState(null), [g, w] = u.useState(null), b = u.useCallback((B) => {
    B !== S.current && (S.current = B, h(B));
  }, []), x = u.useCallback((B) => {
    B !== E.current && (E.current = B, w(B));
  }, []), C = a || y, _ = i || g, S = u.useRef(null), E = u.useRef(null), N = u.useRef(f), T = c != null, k = Ja(c), D = Ja(o), q = Ja(l), F = u.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const B = {
      placement: t,
      strategy: r,
      middleware: m
    };
    D.current && (B.platform = D.current), $M(S.current, E.current, B).then((L) => {
      const J = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      R.current && !Po(N.current, J) && (N.current = J, Cn.flushSync(() => {
        p(J);
      }));
    });
  }, [m, t, r, D, q]);
  ho(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, p((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [l]);
  const R = u.useRef(!1);
  ho(() => (R.current = !0, () => {
    R.current = !1;
  }), []), ho(() => {
    if (C && (S.current = C), _ && (E.current = _), C && _) {
      if (k.current)
        return k.current(C, _, F);
      F();
    }
  }, [C, _, F, k, T]);
  const I = u.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: b,
    setFloating: x
  }), [b, x]), j = u.useMemo(() => ({
    reference: C,
    floating: _
  }), [C, _]), G = u.useMemo(() => {
    const B = {
      position: r,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return B;
    const L = Nf(j.floating, f.x), J = Nf(j.floating, f.y);
    return s ? {
      ...B,
      transform: "translate(" + L + "px, " + J + "px)",
      ...Py(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: L,
      top: J
    };
  }, [r, s, j.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: F,
    refs: I,
    elements: j,
    floatingStyles: G
  }), [f, F, I, j, G]);
}
const FM = (e) => {
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
      return n && t(n) ? n.current != null ? Rf({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Rf({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, qM = (e, t) => ({
  ...OM(e),
  options: [e, t]
}), BM = (e, t) => ({
  ...AM(e),
  options: [e, t]
}), WM = (e, t) => ({
  ...IM(e),
  options: [e, t]
}), HM = (e, t) => ({
  ...jM(e),
  options: [e, t]
}), VM = (e, t) => ({
  ...DM(e),
  options: [e, t]
}), GM = (e, t) => ({
  ...kM(e),
  options: [e, t]
}), zM = (e, t) => ({
  ...FM(e),
  options: [e, t]
});
var YM = "Arrow", Ty = u.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ d.jsx(
    W.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ty.displayName = YM;
var UM = Ty, Du = "Popper", [Ry, Wt] = Te(Du), [KM, Ny] = Ry(Du), My = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = u.useState(null);
  return /* @__PURE__ */ d.jsx(KM, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
My.displayName = Du;
var Oy = "PopperAnchor", Ay = u.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = Ny(Oy, r), i = u.useRef(null), s = ne(t, i);
    return u.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ d.jsx(W.div, { ...o, ref: s });
  }
);
Ay.displayName = Oy;
var ku = "PopperContent", [XM, ZM] = Ry(ku), jy = u.forwardRef(
  (e, t) => {
    var H, oe, se, ce, fe, le;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: y,
      ...h
    } = e, g = Ny(ku, r), [w, b] = u.useState(null), x = ne(t, (Re) => b(Re)), [C, _] = u.useState(null), S = Qo(C), E = (S == null ? void 0 : S.width) ?? 0, N = (S == null ? void 0 : S.height) ?? 0, T = n + (a !== "center" ? "-" + a : ""), k = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, D = Array.isArray(l) ? l : [l], q = D.length > 0, F = {
      padding: k,
      boundary: D.filter(JM),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: R, floatingStyles: I, placement: j, isPositioned: G, middlewareData: B } = LM({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...Re) => MM(...Re, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        qM({ mainAxis: o + N, alignmentAxis: i }),
        c && BM({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? WM() : void 0,
          ...F
        }),
        c && HM({ ...F }),
        VM({
          ...F,
          apply: ({ elements: Re, rects: Y, availableWidth: ke, availableHeight: $e }) => {
            const { width: Le, height: hr } = Y.reference, wt = Re.floating.style;
            wt.setProperty("--radix-popper-available-width", `${ke}px`), wt.setProperty("--radix-popper-available-height", `${$e}px`), wt.setProperty("--radix-popper-anchor-width", `${Le}px`), wt.setProperty("--radix-popper-anchor-height", `${hr}px`);
          }
        }),
        C && zM({ element: C, padding: s }),
        eO({ arrowWidth: E, arrowHeight: N }),
        m && GM({ strategy: "referenceHidden", ...F })
      ]
    }), [L, J] = Iy(j), te = me(y);
    Ee(() => {
      G && (te == null || te());
    }, [G, te]);
    const A = (H = B.arrow) == null ? void 0 : H.x, V = (oe = B.arrow) == null ? void 0 : oe.y, U = ((se = B.arrow) == null ? void 0 : se.centerOffset) !== 0, [z, ee] = u.useState();
    return Ee(() => {
      w && ee(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: R.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...I,
          transform: G ? I.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: z,
          "--radix-popper-transform-origin": [
            (ce = B.transformOrigin) == null ? void 0 : ce.x,
            (fe = B.transformOrigin) == null ? void 0 : fe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((le = B.hide) == null ? void 0 : le.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          XM,
          {
            scope: r,
            placedSide: L,
            onArrowChange: _,
            arrowX: A,
            arrowY: V,
            shouldHideArrow: U,
            children: /* @__PURE__ */ d.jsx(
              W.div,
              {
                "data-side": L,
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
jy.displayName = ku;
var Dy = "PopperArrow", QM = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ky = u.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = ZM(Dy, n), i = QM[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
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
        children: /* @__PURE__ */ d.jsx(
          UM,
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
ky.displayName = Dy;
function JM(e) {
  return e !== null;
}
var eO = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: r, rects: n, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, f] = Iy(r), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + s / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let y = "", h = "";
    return l === "bottom" ? (y = i ? p : `${m}px`, h = `${-c}px`) : l === "top" ? (y = i ? p : `${m}px`, h = `${n.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, h = i ? p : `${v}px`) : l === "left" && (y = `${n.floating.width + c}px`, h = i ? p : `${v}px`), { data: { x: y, y: h } };
  }
});
function Iy(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Dn = My, kn = Ay, la = jy, ua = ky, Iu = "Popover", [$y, cF] = Te(Iu, [
  Wt
]), In = Wt(), [tO, Ht] = $y(Iu), Ly = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = In(t), c = u.useRef(null), [l, f] = u.useState(!1), [p = !1, m] = Pe({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ d.jsx(Dn, { ...s, children: /* @__PURE__ */ d.jsx(
    tO,
    {
      scope: t,
      contentId: _e(),
      triggerRef: c,
      open: p,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((v) => !v), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: i,
      children: r
    }
  ) });
};
Ly.displayName = Iu;
var Fy = "PopoverAnchor", rO = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ht(Fy, r), a = In(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ d.jsx(kn, { ...a, ...n, ref: t });
  }
);
rO.displayName = Fy;
var qy = "PopoverTrigger", By = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ht(qy, r), a = In(r), i = ne(t, o.triggerRef), s = /* @__PURE__ */ d.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": zy(o.open),
        ...n,
        ref: i,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ d.jsx(kn, { asChild: !0, ...a, children: s });
  }
);
By.displayName = qy;
var $u = "PopoverPortal", [nO, oO] = $y($u, {
  forceMount: void 0
}), Wy = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = Ht($u, t);
  return /* @__PURE__ */ d.jsx(nO, { scope: t, forceMount: r, children: /* @__PURE__ */ d.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ d.jsx(ur, { asChild: !0, container: o, children: n }) }) });
};
Wy.displayName = $u;
var Mr = "PopoverContent", Hy = u.forwardRef(
  (e, t) => {
    const r = oO(Mr, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = Ht(Mr, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(Ce, { present: n || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(aO, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(iO, { ...o, ref: t }) });
  }
);
Hy.displayName = Mr;
var aO = u.forwardRef(
  (e, t) => {
    const r = Ht(Mr, e.__scopePopover), n = u.useRef(null), o = ne(t, n), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = n.current;
      if (i) return ta(i);
    }, []), /* @__PURE__ */ d.jsx(Nn, { as: mt, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      Vy,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = r.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: $(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: $(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), iO = u.forwardRef(
  (e, t) => {
    const r = Ht(Mr, e.__scopePopover), n = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Vy,
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
), Vy = u.forwardRef(
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
      onInteractOutside: f,
      ...p
    } = e, m = Ht(Mr, r), v = In(r);
    return Jo(), /* @__PURE__ */ d.jsx(
      Rn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d.jsx(
          Bt,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ d.jsx(
              la,
              {
                "data-state": zy(m.open),
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
), Gy = "PopoverClose", sO = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ht(Gy, r);
    return /* @__PURE__ */ d.jsx(
      W.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: $(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
sO.displayName = Gy;
var cO = "PopoverArrow", lO = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = In(r);
    return /* @__PURE__ */ d.jsx(ua, { ...o, ...n, ref: t });
  }
);
lO.displayName = cO;
function zy(e) {
  return e ? "open" : "closed";
}
var uO = Ly, dO = By, fO = Wy, Yy = Hy;
const Lu = uO, Fu = dO, da = u.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ d.jsx(fO, { children: /* @__PURE__ */ d.jsx(
  Yy,
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
da.displayName = Yy.displayName;
function lF({ value: e, onChange: t }) {
  const [r, n] = u.useState(e);
  function o(a) {
    n(a), t == null || t(a);
  }
  return /* @__PURE__ */ d.jsxs(Lu, { children: [
    /* @__PURE__ */ d.jsx(Fu, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      Wr,
      {
        variant: "outline",
        className: M(
          "w-full justify-start text-left font-normal",
          !r && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ d.jsx(Ov, { className: "mr-2" }),
          r ? Xo(r, "PPP", { locale: _r }) : /* @__PURE__ */ d.jsx("span", { children: "Selecione uma data" })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx(da, { className: "w-auto p-0", children: /* @__PURE__ */ d.jsx(
      _g,
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
function pO(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function mO(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function hO(e) {
  return /^[0-5][0-9]$/.test(e);
}
function fa(e, { max: t, min: r = 0, loop: n = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (n ? (o > t && (o = r), o < r && (o = t)) : (o > t && (o = t), o < r && (o = r)), o.toString().padStart(2, "0"));
}
function Uy(e) {
  return pO(e) ? e : fa(e, { max: 23 });
}
function Ky(e) {
  return mO(e) ? e : fa(e, { min: 1, max: 12 });
}
function To(e) {
  return hO(e) ? e : fa(e, { max: 59 });
}
function qu(e, { min: t, max: r, step: n }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += n, fa(String(o), { min: t, max: r, loop: !0 }));
}
function vO(e, t) {
  return qu(e, { min: 0, max: 23, step: t });
}
function gO(e, t) {
  return qu(e, { min: 1, max: 12, step: t });
}
function Mf(e, t) {
  return qu(e, { min: 0, max: 59, step: t });
}
function yO(e, t) {
  const r = To(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function bO(e, t) {
  const r = To(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function wO(e, t) {
  const r = Uy(t);
  return e.setHours(parseInt(r, 10)), e;
}
function xO(e, t, r) {
  const n = parseInt(Ky(t), 10), o = _O(n, r);
  return e.setHours(o), e;
}
function xl(e, t, r, n) {
  switch (r) {
    case "minutes":
      return yO(e, t);
    case "seconds":
      return bO(e, t);
    case "hours":
      return wO(e, t);
    case "12hours":
      return n ? xO(e, t, n) : e;
    default:
      return e;
  }
}
function SO(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return To(String(e.getMinutes()));
    case "seconds":
      return To(String(e.getSeconds()));
    case "hours":
      return Uy(String(e.getHours()));
    case "12hours":
      return Ky(String(Xy(e.getHours())));
    default:
      return "00";
  }
}
function CO(e, t, r) {
  switch (r) {
    case "minutes":
      return Mf(e, t);
    case "seconds":
      return Mf(e, t);
    case "hours":
      return vO(e, t);
    case "12hours":
      return gO(e, t);
    default:
      return "00";
  }
}
function _O(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function Xy(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function EO(e) {
  return Array.from({ length: 12 }, (t, r) => ({
    value: r,
    label: Xo(new Date(2021, r), "MMMM", { locale: e })
  }));
}
function PO(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (r, n) => ({
    value: t.getFullYear() - e + n,
    label: (t.getFullYear() - e + n).toString()
  }));
}
function Zy({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  yearRange: n = 50,
  ...o
}) {
  const a = u.useMemo(() => {
    let l = _r;
    const { options: f, localize: p, formatLong: m } = o.locale || {};
    return f && p && m && (l = {
      options: f,
      localize: p,
      formatLong: m
    }), EO(l);
  }, []), i = u.useMemo(() => PO(n), []), s = () => {
    const l = /* @__PURE__ */ new Date(), f = new Date(l.getFullYear() - n, 0, 1);
    return o.month ? o.month.getMonth() === f.getMonth() && o.month.getFullYear() === f.getFullYear() : !1;
  }, c = () => {
    const l = /* @__PURE__ */ new Date(), f = new Date(l.getFullYear() + n, 11, 31);
    return o.month ? o.month.getMonth() === f.getMonth() && o.month.getFullYear() === f.getFullYear() : !1;
  };
  return /* @__PURE__ */ d.jsx(
    Cg,
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
          Sr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-5 top-5",
          s() && "pointer-events-none"
        ),
        button_next: M(
          Sr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-5 top-5",
          c() && "pointer-events-none"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: M("flex", o.showWeekNumber && "justify-end"),
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
        day_button: M(
          Sr({ variant: "ghost" }),
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
        Chevron: ({ ...l }) => l.orientation === "left" ? /* @__PURE__ */ d.jsx(Uo, { className: "h-4 w-4" }) : /* @__PURE__ */ d.jsx(Fr, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: l }) => /* @__PURE__ */ d.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ d.jsxs(
            Dl,
            {
              defaultValue: l.date.getMonth().toString(),
              onValueChange: (f) => {
                var m;
                const p = new Date(l.date);
                p.setMonth(Number.parseInt(f, 10)), (m = o.onMonthChange) == null || m.call(o, p);
              },
              children: [
                /* @__PURE__ */ d.jsx(Do, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ d.jsx(kl, {}) }),
                /* @__PURE__ */ d.jsx(ko, { children: a.map((f) => /* @__PURE__ */ d.jsx(
                  gn,
                  {
                    value: f.value.toString(),
                    children: f.label
                  },
                  f.value
                )) })
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs(
            Dl,
            {
              defaultValue: l.date.getFullYear().toString(),
              onValueChange: (f) => {
                var m;
                const p = new Date(l.date);
                p.setFullYear(Number.parseInt(f, 10)), (m = o.onMonthChange) == null || m.call(o, p);
              },
              children: [
                /* @__PURE__ */ d.jsx(Do, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ d.jsx(kl, {}) }),
                /* @__PURE__ */ d.jsx(ko, { children: i.map((f) => /* @__PURE__ */ d.jsx(gn, { value: f.value.toString(), children: f.label }, f.value)) })
              ]
            }
          )
        ] })
      },
      ...o
    }
  );
}
Zy.displayName = "Calendar";
const Qy = u.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: n, onLeftFocus: o, onRightFocus: a }, i) => {
    const s = (l) => {
      l.key === "ArrowRight" && (a == null || a()), l.key === "ArrowLeft" && (o == null || o());
    }, c = (l) => {
      if (t == null || t(l), r) {
        const f = new Date(r), p = Xy(r.getHours());
        n == null || n(
          xl(
            f,
            p.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ d.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ d.jsxs(
      Dl,
      {
        defaultValue: e,
        onValueChange: (l) => c(l),
        children: [
          /* @__PURE__ */ d.jsx(
            Do,
            {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: /* @__PURE__ */ d.jsx(kl, {})
            }
          ),
          /* @__PURE__ */ d.jsxs(ko, { children: [
            /* @__PURE__ */ d.jsx(gn, { value: "AM", children: "AM" }),
            /* @__PURE__ */ d.jsx(gn, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Qy.displayName = "TimePeriodSelect";
const vo = u.forwardRef(
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
    period: f,
    onLeftFocus: p,
    onRightFocus: m,
    ...v
  }, y) => {
    const [h, g] = u.useState(!1), [w, b] = u.useState("0");
    u.useEffect(() => {
      if (h) {
        const S = setTimeout(() => {
          g(!1);
        }, 2e3);
        return () => clearTimeout(S);
      }
    }, [h]);
    const x = u.useMemo(() => SO(a, l), [a, l]), C = (S) => l === "12hours" && h && x.slice(1, 2) === "1" && w === "0" ? `0${S}` : h ? x.slice(1, 2) + S : `0${S}`, _ = (S) => {
      if (S.key !== "Tab") {
        if (S.preventDefault(), S.key === "ArrowRight" && (m == null || m()), S.key === "ArrowLeft" && (p == null || p()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const E = S.key === "ArrowUp" ? 1 : -1, N = CO(x, E, l);
          h && g(!1);
          const T = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(xl(T, N, l, f));
        }
        if (S.key >= "0" && S.key <= "9") {
          l === "12hours" && b(S.key);
          const E = C(S.key);
          h && (m == null || m()), g((T) => !T);
          const N = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(xl(N, E, l, f));
        }
      }
    };
    return /* @__PURE__ */ d.jsx(
      uw,
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
vo.displayName = "TimePickerInput";
const Jy = u.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: n = "second" }, o) => {
    const a = u.useRef(null), i = u.useRef(null), s = u.useRef(null), c = u.useRef(null), [l, f] = u.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return ru(
      o,
      () => ({
        minuteRef: a.current,
        hourRef: i.current,
        secondRef: s.current,
        periodRef: c.current
      }),
      [a, i, s]
    ), /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ d.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ d.jsx(s0, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ d.jsx(
        vo,
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
      (n === "minute" || n === "second") && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        ":",
        /* @__PURE__ */ d.jsx(
          vo,
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
      n === "second" && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        ":",
        /* @__PURE__ */ d.jsx(
          vo,
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
      r === 12 && /* @__PURE__ */ d.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ d.jsx(
        Qy,
        {
          period: l,
          setPeriod: f,
          date: e,
          onDateChange: (p) => {
            t == null || t(p), p && (p == null ? void 0 : p.getHours()) >= 12 ? f("PM") : f("AM");
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
Jy.displayName = "TimePicker";
const TO = u.forwardRef(
  ({
    locale: e = _r,
    defaultPopupValue: t = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    value: r,
    onChange: n,
    hourCycle: o = 24,
    yearRange: a = 50,
    disabled: i = !1,
    displayFormat: s,
    granularity: c = "second",
    placeholder: l = "Selecione...",
    className: f,
    ...p
  }, m) => {
    const [v, y] = u.useState(r ?? t), h = nr(null), [g, w] = u.useState(
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
      const D = (T.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), q = O_(t, {
        days: Math.ceil(D)
      });
      q.setHours(
        (v == null ? void 0 : v.getHours()) ?? 0,
        (v == null ? void 0 : v.getMinutes()) ?? 0,
        (v == null ? void 0 : v.getSeconds()) ?? 0
      ), n == null || n(q), y(q);
    };
    Lr(() => {
      r || w(void 0);
    }, [r]);
    const x = (T) => {
      T && (n == null || n(T), y(T), w(T));
    };
    ru(
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
    let _ = _r;
    const { options: S, localize: E, formatLong: N } = e;
    return S && E && N && (_ = {
      ..._r,
      options: S,
      localize: E,
      formatLong: N
    }), /* @__PURE__ */ d.jsxs(Lu, { children: [
      /* @__PURE__ */ d.jsx(Fu, { asChild: !0, disabled: i, children: /* @__PURE__ */ d.jsxs(
        Wr,
        {
          variant: "outline",
          className: M(
            "w-full justify-start text-left font-normal",
            !g && "text-muted-foreground",
            f
          ),
          ref: h,
          children: [
            /* @__PURE__ */ d.jsx(Ov, { className: "mr-2 h-4 w-4" }),
            /* @__PURE__ */ d.jsx("span", { className: "truncate block", title: l, children: g ? Xo(
              g,
              o === 24 ? C.hour24 : C.hour12,
              {
                locale: _
              }
            ) : /* @__PURE__ */ d.jsx("span", { children: l }) })
          ]
        }
      ) }),
      /* @__PURE__ */ d.jsxs(da, { className: "w-auto p-0", children: [
        /* @__PURE__ */ d.jsx(
          Zy,
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
            ...p
          }
        ),
        c !== "day" && /* @__PURE__ */ d.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ d.jsx(
          Jy,
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
TO.displayName = "DateTimePicker";
const RO = Su, uF = ay, NO = Cu, dF = oa, eb = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Mn,
  {
    ref: r,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
eb.displayName = Mn.displayName;
const tb = u.forwardRef(({ className: e, onClose: t, ...r }, n) => /* @__PURE__ */ d.jsxs(NO, { children: [
  /* @__PURE__ */ d.jsx(eb, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ d.jsxs(
    On,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          oa,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ d.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ d.jsx(Ko, { className: "h-4 w-4" }),
              /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
tb.displayName = On.displayName;
const MO = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
MO.displayName = "DialogHeader";
const OO = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
OO.displayName = "DialogFooter";
const AO = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  ra,
  {
    ref: r,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
AO.displayName = ra.displayName;
const jO = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  na,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
jO.displayName = na.displayName;
var ei = "rovingFocusGroup.onEntryFocus", DO = { bubbles: !1, cancelable: !0 }, pa = "RovingFocusGroup", [Sl, rb, kO] = lr(pa), [IO, Vt] = Te(
  pa,
  [kO]
), [$O, LO] = IO(pa), nb = u.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(Sl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(Sl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(FO, { ...e, ref: t }) }) })
);
nb.displayName = pa;
var FO = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, m = u.useRef(null), v = ne(t, m), y = Tt(a), [h = null, g] = Pe({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [w, b] = u.useState(!1), x = me(l), C = rb(r), _ = u.useRef(!1), [S, E] = u.useState(0);
  return u.useEffect(() => {
    const N = m.current;
    if (N)
      return N.addEventListener(ei, x), () => N.removeEventListener(ei, x);
  }, [x]), /* @__PURE__ */ d.jsx(
    $O,
    {
      scope: r,
      orientation: n,
      dir: y,
      loop: o,
      currentTabStopId: h,
      onItemFocus: u.useCallback(
        (N) => g(N),
        [g]
      ),
      onItemShiftTab: u.useCallback(() => b(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => E((N) => N + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => E((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        W.div,
        {
          tabIndex: w || S === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: $(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: $(e.onFocus, (N) => {
            const T = !_.current;
            if (N.target === N.currentTarget && T && !w) {
              const k = new CustomEvent(ei, DO);
              if (N.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const D = C().filter((j) => j.focusable), q = D.find((j) => j.active), F = D.find((j) => j.id === h), I = [q, F, ...D].filter(
                  Boolean
                ).map((j) => j.ref.current);
                ib(I, f);
              }
            }
            _.current = !1;
          }),
          onBlur: $(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), ob = "RovingFocusGroupItem", ab = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      ...i
    } = e, s = _e(), c = a || s, l = LO(ob, r), f = l.currentTabStopId === c, p = rb(r), { onFocusableItemAdd: m, onFocusableItemRemove: v } = l;
    return u.useEffect(() => {
      if (n)
        return m(), () => v();
    }, [n, m, v]), /* @__PURE__ */ d.jsx(
      Sl.ItemSlot,
      {
        scope: r,
        id: c,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          W.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": l.orientation,
            ...i,
            ref: t,
            onMouseDown: $(e.onMouseDown, (y) => {
              n ? l.onItemFocus(c) : y.preventDefault();
            }),
            onFocus: $(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: $(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const h = WO(y, l.orientation, l.dir);
              if (h !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let w = p().filter((b) => b.focusable).map((b) => b.ref.current);
                if (h === "last") w.reverse();
                else if (h === "prev" || h === "next") {
                  h === "prev" && w.reverse();
                  const b = w.indexOf(y.currentTarget);
                  w = l.loop ? HO(w, b + 1) : w.slice(b + 1);
                }
                setTimeout(() => ib(w));
              }
            })
          }
        )
      }
    );
  }
);
ab.displayName = ob;
var qO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function BO(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function WO(e, t, r) {
  const n = BO(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return qO[n];
}
function ib(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function HO(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var ma = nb, ha = ab, Cl = ["Enter", " "], VO = ["ArrowDown", "PageUp", "Home"], sb = ["ArrowUp", "PageDown", "End"], GO = [...VO, ...sb], zO = {
  ltr: [...Cl, "ArrowRight"],
  rtl: [...Cl, "ArrowLeft"]
}, YO = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, $n = "Menu", [hn, UO, KO] = lr($n), [dr, cb] = Te($n, [
  KO,
  Wt,
  Vt
]), Ln = Wt(), lb = Vt(), [ub, Gt] = dr($n), [XO, Fn] = dr($n), db = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Ln(t), [c, l] = u.useState(null), f = u.useRef(!1), p = me(a), m = Tt(o);
  return u.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(Dn, { ...s, children: /* @__PURE__ */ d.jsx(
    ub,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ d.jsx(
        XO,
        {
          scope: t,
          onClose: u.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
db.displayName = $n;
var ZO = "MenuAnchor", Bu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ln(r);
    return /* @__PURE__ */ d.jsx(kn, { ...o, ...n, ref: t });
  }
);
Bu.displayName = ZO;
var Wu = "MenuPortal", [QO, fb] = dr(Wu, {
  forceMount: void 0
}), pb = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = Gt(Wu, t);
  return /* @__PURE__ */ d.jsx(QO, { scope: t, forceMount: r, children: /* @__PURE__ */ d.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ d.jsx(ur, { asChild: !0, container: o, children: n }) }) });
};
pb.displayName = Wu;
var ze = "MenuContent", [JO, Hu] = dr(ze), mb = u.forwardRef(
  (e, t) => {
    const r = fb(ze, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Gt(ze, e.__scopeMenu), i = Fn(ze, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx(hn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ d.jsx(hn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d.jsx(eA, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(tA, { ...o, ref: t }) }) }) });
  }
), eA = u.forwardRef(
  (e, t) => {
    const r = Gt(ze, e.__scopeMenu), n = u.useRef(null), o = ne(t, n);
    return u.useEffect(() => {
      const a = n.current;
      if (a) return ta(a);
    }, []), /* @__PURE__ */ d.jsx(
      Vu,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: $(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), tA = u.forwardRef((e, t) => {
  const r = Gt(ze, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    Vu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), Vu = u.forwardRef(
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
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: v,
      disableOutsideScroll: y,
      ...h
    } = e, g = Gt(ze, r), w = Fn(ze, r), b = Ln(r), x = lb(r), C = UO(r), [_, S] = u.useState(null), E = u.useRef(null), N = ne(t, E, g.onContentChange), T = u.useRef(0), k = u.useRef(""), D = u.useRef(0), q = u.useRef(null), F = u.useRef("right"), R = u.useRef(0), I = y ? Nn : u.Fragment, j = y ? { as: mt, allowPinchZoom: !0 } : void 0, G = (L) => {
      var H, oe;
      const J = k.current + L, te = C().filter((se) => !se.disabled), A = document.activeElement, V = (H = te.find((se) => se.ref.current === A)) == null ? void 0 : H.textValue, U = te.map((se) => se.textValue), z = pA(U, J, V), ee = (oe = te.find((se) => se.textValue === z)) == null ? void 0 : oe.ref.current;
      (function se(ce) {
        k.current = ce, window.clearTimeout(T.current), ce !== "" && (T.current = window.setTimeout(() => se(""), 1e3));
      })(J), ee && setTimeout(() => ee.focus());
    };
    u.useEffect(() => () => window.clearTimeout(T.current), []), Jo();
    const B = u.useCallback((L) => {
      var te, A;
      return F.current === ((te = q.current) == null ? void 0 : te.side) && hA(L, (A = q.current) == null ? void 0 : A.area);
    }, []);
    return /* @__PURE__ */ d.jsx(
      JO,
      {
        scope: r,
        searchRef: k,
        onItemEnter: u.useCallback(
          (L) => {
            B(L) && L.preventDefault();
          },
          [B]
        ),
        onItemLeave: u.useCallback(
          (L) => {
            var J;
            B(L) || ((J = E.current) == null || J.focus(), S(null));
          },
          [B]
        ),
        onTriggerLeave: u.useCallback(
          (L) => {
            B(L) && L.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: D,
        onPointerGraceIntentChange: u.useCallback((L) => {
          q.current = L;
        }, []),
        children: /* @__PURE__ */ d.jsx(I, { ...j, children: /* @__PURE__ */ d.jsx(
          Rn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: $(a, (L) => {
              var J;
              L.preventDefault(), (J = E.current) == null || J.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d.jsx(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: v,
                children: /* @__PURE__ */ d.jsx(
                  ma,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: $(c, (L) => {
                      w.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      la,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ob(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...h,
                        ref: N,
                        style: { outline: "none", ...h.style },
                        onKeyDown: $(h.onKeyDown, (L) => {
                          const te = L.target.closest("[data-radix-menu-content]") === L.currentTarget, A = L.ctrlKey || L.altKey || L.metaKey, V = L.key.length === 1;
                          te && (L.key === "Tab" && L.preventDefault(), !A && V && G(L.key));
                          const U = E.current;
                          if (L.target !== U || !GO.includes(L.key)) return;
                          L.preventDefault();
                          const ee = C().filter((H) => !H.disabled).map((H) => H.ref.current);
                          sb.includes(L.key) && ee.reverse(), dA(ee);
                        }),
                        onBlur: $(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(T.current), k.current = "");
                        }),
                        onPointerMove: $(
                          e.onPointerMove,
                          vn((L) => {
                            const J = L.target, te = R.current !== L.clientX;
                            if (L.currentTarget.contains(J) && te) {
                              const A = L.clientX > R.current ? "right" : "left";
                              F.current = A, R.current = L.clientX;
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
mb.displayName = ze;
var rA = "MenuGroup", Gu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(W.div, { role: "group", ...n, ref: t });
  }
);
Gu.displayName = rA;
var nA = "MenuLabel", hb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(W.div, { ...n, ref: t });
  }
);
hb.displayName = nA;
var Ro = "MenuItem", Of = "menu.itemSelect", va = u.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = u.useRef(null), i = Fn(Ro, e.__scopeMenu), s = Hu(Ro, e.__scopeMenu), c = ne(t, a), l = u.useRef(!1), f = () => {
      const p = a.current;
      if (!r && p) {
        const m = new CustomEvent(Of, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Of, (v) => n == null ? void 0 : n(v), { once: !0 }), cn(p, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      vb,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: $(e.onClick, f),
        onPointerDown: (p) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, p), l.current = !0;
        },
        onPointerUp: $(e.onPointerUp, (p) => {
          var m;
          l.current || (m = p.currentTarget) == null || m.click();
        }),
        onKeyDown: $(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          r || m && p.key === " " || Cl.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
va.displayName = Ro;
var vb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = Hu(Ro, r), s = lb(r), c = u.useRef(null), l = ne(t, c), [f, p] = u.useState(!1), [m, v] = u.useState("");
    return u.useEffect(() => {
      const y = c.current;
      y && v((y.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ d.jsx(
      hn.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ d.jsx(ha, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ d.jsx(
          W.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: $(
              e.onPointerMove,
              vn((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: $(
              e.onPointerLeave,
              vn((y) => i.onItemLeave(y))
            ),
            onFocus: $(e.onFocus, () => p(!0)),
            onBlur: $(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), oA = "MenuCheckboxItem", gb = u.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ d.jsx(Sb, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ d.jsx(
      va,
      {
        role: "menuitemcheckbox",
        "aria-checked": No(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": Uu(r),
        onSelect: $(
          o.onSelect,
          () => n == null ? void 0 : n(No(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
gb.displayName = oA;
var yb = "MenuRadioGroup", [aA, iA] = dr(
  yb,
  { value: void 0, onValueChange: () => {
  } }
), bb = u.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = me(n);
    return /* @__PURE__ */ d.jsx(aA, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ d.jsx(Gu, { ...o, ref: t }) });
  }
);
bb.displayName = yb;
var wb = "MenuRadioItem", xb = u.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = iA(wb, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ d.jsx(Sb, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ d.jsx(
      va,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": Uu(a),
        onSelect: $(
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
xb.displayName = wb;
var zu = "MenuItemIndicator", [Sb, sA] = dr(
  zu,
  { checked: !1 }
), Cb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = sA(zu, r);
    return /* @__PURE__ */ d.jsx(
      Ce,
      {
        present: n || No(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          W.span,
          {
            ...o,
            ref: t,
            "data-state": Uu(a.checked)
          }
        )
      }
    );
  }
);
Cb.displayName = zu;
var cA = "MenuSeparator", _b = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(
      W.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
_b.displayName = cA;
var lA = "MenuArrow", Eb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ln(r);
    return /* @__PURE__ */ d.jsx(ua, { ...o, ...n, ref: t });
  }
);
Eb.displayName = lA;
var Yu = "MenuSub", [uA, Pb] = dr(Yu), Tb = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = Gt(Yu, t), i = Ln(t), [s, c] = u.useState(null), [l, f] = u.useState(null), p = me(o);
  return u.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ d.jsx(Dn, { ...i, children: /* @__PURE__ */ d.jsx(
    ub,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: f,
      children: /* @__PURE__ */ d.jsx(
        uA,
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
Tb.displayName = Yu;
var en = "MenuSubTrigger", Rb = u.forwardRef(
  (e, t) => {
    const r = Gt(en, e.__scopeMenu), n = Fn(en, e.__scopeMenu), o = Pb(en, e.__scopeMenu), a = Hu(en, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ d.jsx(Bu, { asChild: !0, ...l, children: /* @__PURE__ */ d.jsx(
      vb,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": Ob(r.open),
        ...e,
        ref: _n(t, o.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: $(
          e.onPointerMove,
          vn((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: $(
          e.onPointerLeave,
          vn((p) => {
            var v, y;
            f();
            const m = (v = r.content) == null ? void 0 : v.getBoundingClientRect();
            if (m) {
              const h = (y = r.content) == null ? void 0 : y.dataset.side, g = h === "right", w = g ? -5 : 5, b = m[g ? "left" : "right"], x = m[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + w, y: p.clientY },
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
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: $(e.onKeyDown, (p) => {
          var v;
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || zO[n.dir].includes(p.key) && (r.onOpenChange(!0), (v = r.content) == null || v.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Rb.displayName = en;
var Nb = "MenuSubContent", Mb = u.forwardRef(
  (e, t) => {
    const r = fb(ze, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Gt(ze, e.__scopeMenu), i = Fn(ze, e.__scopeMenu), s = Pb(Nb, e.__scopeMenu), c = u.useRef(null), l = ne(t, c);
    return /* @__PURE__ */ d.jsx(hn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ d.jsx(hn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      Vu,
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
        onOpenAutoFocus: (f) => {
          var p;
          i.isUsingKeyboardRef.current && ((p = c.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: $(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: $(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: $(e.onKeyDown, (f) => {
          var v;
          const p = f.currentTarget.contains(f.target), m = YO[i.dir].includes(f.key);
          p && m && (a.onOpenChange(!1), (v = s.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Mb.displayName = Nb;
function Ob(e) {
  return e ? "open" : "closed";
}
function No(e) {
  return e === "indeterminate";
}
function Uu(e) {
  return No(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function dA(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function fA(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function pA(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = fA(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function mA(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, f = t[i].y;
    c > n != f > n && r < (l - s) * (n - c) / (f - c) + s && (o = !o);
  }
  return o;
}
function hA(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return mA(r, t);
}
function vn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var vA = db, gA = Bu, yA = pb, bA = mb, wA = Gu, xA = hb, SA = va, CA = gb, _A = bb, EA = xb, PA = Cb, TA = _b, RA = Eb, NA = Tb, MA = Rb, OA = Mb, Ku = "DropdownMenu", [AA, fF] = Te(
  Ku,
  [cb]
), De = cb(), [jA, Ab] = AA(Ku), jb = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = De(t), l = u.useRef(null), [f = !1, p] = Pe({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ d.jsx(
    jA,
    {
      scope: t,
      triggerId: _e(),
      triggerRef: l,
      contentId: _e(),
      open: f,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ d.jsx(vA, { ...c, open: f, onOpenChange: p, dir: n, modal: s, children: r })
    }
  );
};
jb.displayName = Ku;
var Db = "DropdownMenuTrigger", kb = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = Ab(Db, r), i = De(r);
    return /* @__PURE__ */ d.jsx(gA, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      W.button,
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
        ref: _n(t, a.triggerRef),
        onPointerDown: $(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: $(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
kb.displayName = Db;
var DA = "DropdownMenuPortal", Ib = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = De(t);
  return /* @__PURE__ */ d.jsx(yA, { ...n, ...r });
};
Ib.displayName = DA;
var $b = "DropdownMenuContent", Lb = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Ab($b, r), a = De(r), i = u.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      bA,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (s) => {
          var c;
          i.current || (c = o.triggerRef.current) == null || c.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: $(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, f = c.button === 2 || l;
          (!o.modal || f) && (i.current = !0);
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
Lb.displayName = $b;
var kA = "DropdownMenuGroup", Fb = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
    return /* @__PURE__ */ d.jsx(wA, { ...o, ...n, ref: t });
  }
);
Fb.displayName = kA;
var IA = "DropdownMenuLabel", qb = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
    return /* @__PURE__ */ d.jsx(xA, { ...o, ...n, ref: t });
  }
);
qb.displayName = IA;
var $A = "DropdownMenuItem", Bb = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
    return /* @__PURE__ */ d.jsx(SA, { ...o, ...n, ref: t });
  }
);
Bb.displayName = $A;
var LA = "DropdownMenuCheckboxItem", Wb = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
  return /* @__PURE__ */ d.jsx(CA, { ...o, ...n, ref: t });
});
Wb.displayName = LA;
var FA = "DropdownMenuRadioGroup", Hb = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
  return /* @__PURE__ */ d.jsx(_A, { ...o, ...n, ref: t });
});
Hb.displayName = FA;
var qA = "DropdownMenuRadioItem", Vb = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
  return /* @__PURE__ */ d.jsx(EA, { ...o, ...n, ref: t });
});
Vb.displayName = qA;
var BA = "DropdownMenuItemIndicator", Gb = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
  return /* @__PURE__ */ d.jsx(PA, { ...o, ...n, ref: t });
});
Gb.displayName = BA;
var WA = "DropdownMenuSeparator", zb = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
  return /* @__PURE__ */ d.jsx(TA, { ...o, ...n, ref: t });
});
zb.displayName = WA;
var HA = "DropdownMenuArrow", VA = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
    return /* @__PURE__ */ d.jsx(RA, { ...o, ...n, ref: t });
  }
);
VA.displayName = HA;
var GA = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = De(t), [s = !1, c] = Pe({
    prop: n,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ d.jsx(NA, { ...i, open: s, onOpenChange: c, children: r });
}, zA = "DropdownMenuSubTrigger", Yb = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
  return /* @__PURE__ */ d.jsx(MA, { ...o, ...n, ref: t });
});
Yb.displayName = zA;
var YA = "DropdownMenuSubContent", Ub = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = De(r);
  return /* @__PURE__ */ d.jsx(
    OA,
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
Ub.displayName = YA;
var UA = jb, KA = kb, Kb = Ib, Xb = Lb, XA = Fb, Zb = qb, Qb = Bb, Jb = Wb, ZA = Hb, ew = Vb, tw = Gb, rw = zb, QA = GA, nw = Yb, ow = Ub;
const pF = UA, mF = KA, hF = XA, vF = Kb, gF = QA, yF = ZA, JA = u.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ d.jsxs(
  nw,
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
      /* @__PURE__ */ d.jsx(Fr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
JA.displayName = nw.displayName;
const ej = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  ow,
  {
    ref: r,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
ej.displayName = ow.displayName;
const tj = u.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ d.jsx(Kb, { children: /* @__PURE__ */ d.jsx(
  Xb,
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
tj.displayName = Xb.displayName;
const rj = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ d.jsx(
  Qb,
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
rj.displayName = Qb.displayName;
const nj = u.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ d.jsxs(
  Jb,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(tw, { children: /* @__PURE__ */ d.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
nj.displayName = Jb.displayName;
const oj = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsxs(
  ew,
  {
    ref: n,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(tw, { children: /* @__PURE__ */ d.jsx(Av, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
oj.displayName = ew.displayName;
const aj = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ d.jsx(
  Zb,
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
aj.displayName = Zb.displayName;
const ij = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  rw,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
ij.displayName = rw.displayName;
const sj = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
sj.displayName = "DropdownMenuShortcut";
const bF = ({ width: e = 263, ...t }) => {
  const r = e ? e * 50 / 263 : 50;
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      width: e,
      height: r,
      viewBox: "0 0 1683.83 317.58",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: [
        /* @__PURE__ */ d.jsxs("defs", { children: [
          /* @__PURE__ */ d.jsx("style", { children: `\r
      .cls-1 {\r
        fill: #08dcdd;\r
      }\r
\r
      .cls-2 {\r
        fill: #47bffb;\r
      }\r
\r
      .cls-3 {\r
        fill: url(#Gradiente_sem_nome_11);\r
      }\r
\r
      .cls-4 {\r
        fill: #61efc6;\r
      }\r
\r
      .cls-5 {\r
        fill: #5be7cf;\r
      }\r
\r
      .cls-6 {\r
        fill: #878787;\r
      }\r
\r
      .cls-7 {\r
        fill: #4ccfea;\r
      }\r
\r
      .cls-8 {\r
        fill: #49c5f4;\r
      }\r
    ` }),
          /* @__PURE__ */ d.jsxs(
            "linearGradient",
            {
              id: "Gradiente_sem_nome_11",
              "data-name": "Gradiente sem nome 11",
              x1: 71.37,
              y1: 153.45,
              x2: 640.03,
              y2: 153.45,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ d.jsx("stop", { offset: 0, stopColor: "#00bfff" }),
                /* @__PURE__ */ d.jsx("stop", { offset: 1, stopColor: "#0dffb8" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-3",
            d: "M280.11,242.64c8.08-2.91,15.11-5.3,22.03-7.98,8.69-3.37,16.56-2.39,24.29,2.98,18.53,12.86,39.35,18.88,61.8,18.98,32.53.13,65.06-.19,97.58-.1,14.56.04,28.87-1.88,42.16-7.5,31.88-13.48,54.3-36.4,63.81-70.03,17.24-60.97-21.1-121.6-83.79-133.73-6.35-1.23-12.71-1.79-19.16-1.79-119.37-.04-238.75-.1-358.12-.16-13.58,0-22.49-6.98-24.25-18.94-1.69-11.5,6.68-22.56,18.23-24,1.67-.21,3.37-.21,5.05-.21C249.89.09,370.03-.09,490.17.06c31.63.04,60.53,9.69,86.27,28.04,5.97,4.25,11.41,9.39,16.88,14.39,23.5,21.49,38.1,47.93,43.87,79.01,8.39,45.19-1.83,86.03-30.52,122.07-6.38,8.01-14.33,14.48-21.99,21.27-22.75,20.21-49.92,29.82-79.41,34.11-5.14.75-10.39.96-15.59.97-33.91.07-67.82.09-101.73-.02-24.39-.08-47.8-5.16-69.3-16.6-7.59-4.04-13.41-4.16-21.01-.94-17.6,7.47-35.56,14.06-52.95,22.07-10.97,5.06-23.64,2.14-31.39-6.88-7.24-8.41-7.7-20.48-1.09-30.67,11.41-17.6,22.81-35.2,34.34-52.71,1.61-2.45,1.76-4.32.65-7.08-5.29-13.21-10.23-26.56-9.73-41.15.06-1.67-.68-2.16-2.16-2.13-1.23.02-2.45-.01-3.68-.01-45.72-.03-91.45-.02-137.17-.09-16.11-.02-26.76-13.91-21.92-28.41,2.89-8.66,10.82-14.48,20.25-14.57,12.27-.12,24.55-.04,36.82-.04,56.77-.02,113.54-.05,170.32-.04,13.08,0,22.73,8.68,23.05,20.58.33,12.57-9.18,22.33-22.14,22.58-5.67.11-11.36.13-17.03-.04-2.75-.08-3.48.83-2.97,3.48,2.21,11.48,5.59,22.57,11.43,32.74,5.41,9.42,5.05,18.16-1.65,26.86-3.61,4.69-6.6,9.85-10.52,15.79Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-6",
            d: "M1344.43,257.7c-19.63-.01-29.88-7.03-34.83-23.4-1.5-4.98-2.45-10.09-3.15-15.25-3.31-24.39-6.68-48.77-10.05-73.15-.17-1.21-.48-2.39-.77-3.58-.74-3.05-2.58-4.79-5.85-4.76-3.29.03-4.66,2.37-5.15,4.97-1.21,6.46-2.08,12.98-3.07,19.48-3.47,22.66-5.76,45.5-9.98,68.05-.17.9-.41,1.79-.66,2.67-4.74,16.77-12.5,23.24-29.91,24.79-6.93.62-13.81-.09-20.51-1.84-11.91-3.1-18.41-11.55-21.64-22.86-3.03-10.63-3.93-21.65-5.6-32.52-3.66-23.87-7.16-47.77-10.72-71.66-.18-1.21-.32-2.42-.45-3.64-1.13-10.8.77-12.89,11.85-13.03.92-.01,1.84-.01,2.76,0,10.89.12,13.99,2.61,15.55,13.24,4.47,30.55,8.81,61.13,13.21,91.69.26,1.82.56,3.63.95,5.42,1.38,6.45,4.82,9.58,10.48,9.6,5.5.02,9.33-3.19,10.51-9.62,1.52-8.27,2.59-16.61,3.82-24.93,3.02-20.41,5.66-40.89,9.14-61.23,3.72-21.68,15.46-23.83,31.44-24.12,2.73-.05,5.51.39,8.21.88,11.08,1.99,16.91,9.34,19.23,19.72,3.04,13.59,4.36,27.47,6.43,41.22,2.32,15.42,4.33,30.88,6.68,46.3,1.47,9.59,6.39,13.26,14.14,11.22,4.12-1.09,5.99-4.09,6.91-7.8,2.29-9.22,3.09-18.69,4.49-28.06,3.58-23.89,6.91-47.81,10.39-71.71,1.19-8.19,3.57-10.45,11.66-11.53,3.82-.51,7.62-.46,11.44.15,5.81.92,7.7,2.61,7.07,8.51-1.26,11.69-3.01,23.34-4.74,34.98-3.25,21.92-6.57,43.84-10,65.74-.66,4.21-1.79,8.37-3.03,12.46-4.81,15.76-16.3,22.53-32.06,23.41-1.68.09-3.37.16-4.22.2Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-6",
            d: "M1620.19,255.74c-4.56.58-9.1,1.21-13.73,1.07-12.61-.39-21.5-6.12-26.49-17.82-5.44-12.75-7.98-26.32-11.41-39.63-6.56-25.47-13.01-50.96-19.36-76.48-1.85-7.43-.13-9.51,7.57-10.64,4.62-.68,9.22-.34,13.72.53,6.07,1.18,8,6.16,9.31,11.36,2.55,10.08,4.99,20.19,7.47,30.29,5.24,21.38,10.47,42.77,15.71,64.15,1.54,6.27,4.05,11.63,11.52,12.53,8.85,1.06,13.72-1.95,15.99-10.69,2.65-10.21,4.95-20.51,7.35-30.78,4.94-21.14,9.86-42.28,14.76-63.43,2.75-11.84,5.54-14.13,17.58-14.23,13.88-.12,15.47,2.01,12.18,15.7-10.25,42.66-20.34,85.37-30.7,128-4.31,17.76-10.79,34.53-25.04,47.08-10.93,9.63-24.03,13.76-38.3,14.8-3.27.24-6.25-.85-7.96-3.69-3.14-5.23-4.54-11.04-4.15-17.12.23-3.62,3.37-4.46,6.31-4.94,7.78-1.28,15.37-3.04,21.69-8.11,8.85-7.1,13.82-16.56,16.53-27.37.34-.31.58-.65.06-.97-.1-.06-.42.25-.63.4Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-6",
            d: "M721.75,169.5c0-24.21-.21-48.41.07-72.62.21-18.21,9.54-27.68,27.76-28.52,27.14-1.25,54.3-.26,81.45-.49,1.98-.02,3.97.32,5.94.57,4.43.56,6.9,3.11,7.23,7.54.19,2.59.14,5.2.14,7.81,0,10.47-2.37,12.96-13.01,13.01-19.79.09-39.59.03-59.39.03-3.22,0-6.45-.06-9.67.01-6.6.15-10.1,3.36-10.19,9.84-.16,11.95.07,23.9-.13,35.85-.06,3.75,2.15,3.27,4.46,3.27,20.56,0,41.13,0,61.69,0,1.23,0,2.46-.04,3.68.02,8.49.43,11.03,3.05,11.37,11.63.7,17.58-3.85,17-15.98,16.9-19.95-.16-39.9.06-59.85-.13-4.06-.04-5.47.82-5.42,5.21.25,20.53.12,41.06.11,61.59,0,10.8-2.46,13.24-13.29,13.26-2.45,0-4.91.04-7.36-.08-6.59-.33-9.51-3.08-9.56-9.77-.16-23.29-.13-46.57-.17-69.86,0-1.69,0-3.37,0-5.06.04,0,.08,0,.12,0Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-6",
            d: "M1451.93,141.77c0-25.11,0-50.23,0-75.34,0-10.14,2.56-12.68,12.85-12.67,3.36,0,6.73-.3,10.08.48,3.97.92,6.05,3.42,6.47,7.33.21,1.97.18,3.98.18,5.96,0,46.4,0,92.8.01,139.2,0,4.44.27,8.89,1.53,13.16,1.78,6.08,5.05,8.45,11.39,8.63,1.07.03,2.15-.03,3.22.06,6.39.52,7.97,2.11,8.43,8.5.1,1.37,0,2.76.04,4.13.29,10.92-1.76,14.79-15.41,15.41-23.68,1.07-38.57-14.39-38.75-39.52-.18-25.11-.04-50.23-.04-75.34Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-6",
            d: "M899.46,141.49c0-25.11,0-50.22,0-75.32,0-9.7,2.59-12.35,12.17-12.41,3.06-.02,6.16-.13,9.19.22,5.24.61,7.55,3.12,8.07,8.37.19,1.97.16,3.98.16,5.96,0,46.54,0,93.08,0,139.62,0,4.29.34,8.57,1.68,12.67,1.71,5.24,5.03,7.66,10.55,7.91,11.5.52,12.37,1.46,12.39,13.03.01,10.89-1.91,14.4-15.32,15.07-23.54,1.18-38.72-14.35-38.86-38.89-.15-25.41-.03-50.83-.03-76.24Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-1",
            d: "M396.72,142.06c1.26,11.47-9.89,24.16-24.08,23.89-13.53-.26-23.91-10.36-23.94-23.76-.02-13.41,10.76-24.09,24.26-24.02,13.24.06,23.75,10.64,23.76,23.89Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-5",
            d: "M475.33,142.07c0,13.36-10.73,23.85-24.38,23.83-13.49-.02-24-10.42-23.98-23.71.02-13.39,10.88-24.12,24.32-24.02,13.13.1,24.04,10.95,24.04,23.9Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-4",
            d: "M529.53,165.89c-13.76.03-24.33-10.37-24.29-23.89.04-13.09,10.84-23.78,24.08-23.83,13.23-.05,24.49,11.06,24.4,24.08-.09,13.07-10.87,23.61-24.19,23.64Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-2",
            d: "M22.25,119c12.23.03,21.87,9.67,21.82,21.81-.05,12.02-9.86,21.43-22.25,21.35C9.87,162.08,0,152.34,0,140.62c0-11.94,9.99-21.64,22.25-21.61Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            className: "cls-6",
            d: "M1127.4,151.4c-3.58-20.15-15.64-33.53-35.74-38.94-18.28-4.91-36.67-4.94-54.95-.04-19.88,5.32-32.04,18.2-36.9,38.16-2.65,10.88-1.73,21.92-1.99,33.57.33,8.82-.49,18.32,1.08,27.77,3.6,21.69,15.2,36.39,36.84,42.24,16.24,4.39,32.76,4.84,49.18,1.35,25.14-5.34,39.2-19.55,43.01-45.12,2.92-19.55,2.94-39.46-.53-58.98ZM1099.2,202.59c-.7,15.47-7.84,23.45-23.18,26-8.98,1.49-18.03,1.39-26.95-.36-13.13-2.57-19.9-9.88-21.13-25.1-1.13-13.99-1.44-28.14.34-42.14,1.77-13.97,7.83-20.28,21.57-23.09,9.24-1.89,18.59-1.89,27.84-.01,13.78,2.79,20.66,10.84,21.45,25.24.37,6.71.06,13.46.06,20.19h.05c0,6.43.24,12.86-.05,19.27Z"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "rect",
          {
            className: "cls-7",
            x: 119.69,
            y: 181.7,
            width: 99.56,
            height: 43.52,
            rx: 21.76,
            ry: 21.76
          }
        ),
        /* @__PURE__ */ d.jsx(
          "rect",
          {
            className: "cls-8",
            x: 33,
            y: 59.96,
            width: 121.12,
            height: 43.52,
            rx: 21.76,
            ry: 21.76
          }
        )
      ]
    }
  );
};
var cj = "Label", aw = u.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  W.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var o;
      r.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
aw.displayName = cj;
var iw = aw;
const lj = Nt(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), sw = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  iw,
  {
    ref: r,
    className: M(lj(), e),
    ...t
  }
));
sw.displayName = iw.displayName;
const wF = fC, cw = u.createContext(
  {}
), xF = ({
  ...e
}) => /* @__PURE__ */ d.jsx(cw.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(pC, { ...e }) }), qn = () => {
  const e = u.useContext(cw), t = u.useContext(lw), { getFieldState: r, formState: n } = dC(), o = r(e.name, n);
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
}, lw = u.createContext(
  {}
), uj = u.forwardRef(({ className: e, ...t }, r) => {
  const n = u.useId();
  return /* @__PURE__ */ d.jsx(lw.Provider, { value: { id: n }, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: r,
      className: M("space-y-1 relative", e),
      ...t
    }
  ) });
});
uj.displayName = "FormItem";
const dj = u.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = qn();
  return /* @__PURE__ */ d.jsx(
    sw,
    {
      ref: r,
      className: M(n && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
dj.displayName = "FormLabel";
const fj = u.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = qn();
  return /* @__PURE__ */ d.jsx(
    mt,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
fj.displayName = "FormControl";
const pj = u.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = qn();
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: M("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
pj.displayName = "FormDescription";
const mj = u.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o, formMessageId: a } = qn(), i = o ? String(o == null ? void 0 : o.message) : t;
  return i ? /* @__PURE__ */ d.jsx(
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
mj.displayName = "FormMessage";
const uw = O.forwardRef(({ className: e, type: t, ...r }, n) => t === "textarea" ? /* @__PURE__ */ d.jsx(
  "textarea",
  {
    rows: 1,
    ref: n,
    className: M(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
) : /* @__PURE__ */ d.jsx(
  "input",
  {
    ref: n,
    type: t,
    className: M(
      "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
));
function SF({
  children: e
}) {
  const [t, r] = pt(!1), [n, o] = pt(!1), a = () => {
    r(!t), localStorage.setItem("leftDrawerIsExpanded", (!t).toString());
  };
  return O.useEffect(() => {
    const i = localStorage.getItem("leftDrawerIsExpanded");
    i !== null && r(i === "true"), o(!0);
  }, []), n ? /* @__PURE__ */ d.jsx("aside", { className: "border-r p-2 bg-gray-50", children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `
      flex flex-col h-full transition-all duration-300
      relative pt-[4px]
      ${t ? "w-64" : "w-16"}
    `,
      children: [
        /* @__PURE__ */ d.jsx(
          Wr,
          {
            variant: "ghost",
            size: "icon",
            className: "m-2 bg-accent absolute right-[-37px] top-[-4px]",
            onClick: a,
            children: t ? /* @__PURE__ */ d.jsx(Uo, {}) : /* @__PURE__ */ d.jsx(Fr, {})
          }
        ),
        /* @__PURE__ */ d.jsx("nav", { className: "flex flex-col space-y-2", children: e(t) })
      ]
    }
  ) }) : /* @__PURE__ */ d.jsx(a1, {});
}
var hj = "VisuallyHidden", Bn = u.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    W.span,
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
Bn.displayName = hj;
var dw = Bn, zr = "NavigationMenu", [Xu, fw, vj] = lr(zr), [_l, gj, yj] = lr(zr), [Zu, CF] = Te(
  zr,
  [vj, yj]
), [bj, Ye] = Zu(zr), [wj, xj] = Zu(zr), pw = u.forwardRef(
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
      ...f
    } = e, [p, m] = u.useState(null), v = ne(t, (T) => m(T)), y = Tt(l), h = u.useRef(0), g = u.useRef(0), w = u.useRef(0), [b, x] = u.useState(!0), [C = "", _] = Pe({
      prop: n,
      onChange: (T) => {
        const k = T !== "", D = s > 0;
        k ? (window.clearTimeout(w.current), D && x(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(T);
      },
      defaultProp: a
    }), S = u.useCallback(() => {
      window.clearTimeout(g.current), g.current = window.setTimeout(() => _(""), 150);
    }, [_]), E = u.useCallback(
      (T) => {
        window.clearTimeout(g.current), _(T);
      },
      [_]
    ), N = u.useCallback(
      (T) => {
        C === T ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(g.current), _(T);
        }, i);
      },
      [C, _, i]
    );
    return u.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ d.jsx(
      hw,
      {
        scope: r,
        isRootMenu: !0,
        value: C,
        dir: y,
        orientation: c,
        rootNavigationMenu: p,
        onTriggerEnter: (T) => {
          window.clearTimeout(h.current), b ? N(T) : E(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), S();
        },
        onContentEnter: () => window.clearTimeout(g.current),
        onContentLeave: S,
        onItemSelect: (T) => {
          _((k) => k === T ? "" : T);
        },
        onItemDismiss: () => _(""),
        children: /* @__PURE__ */ d.jsx(
          W.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: y,
            ...f,
            ref: v
          }
        )
      }
    );
  }
);
pw.displayName = zr;
var mw = "NavigationMenuSub", Sj = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = Ye(mw, r), [l = "", f] = Pe({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ d.jsx(
      hw,
      {
        scope: r,
        isRootMenu: !1,
        value: l,
        dir: c.dir,
        orientation: i,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (p) => f(p),
        onItemSelect: (p) => f(p),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ d.jsx(W.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
Sj.displayName = mw;
var hw = (e) => {
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
    onTriggerEnter: f,
    onTriggerLeave: p,
    onContentEnter: m,
    onContentLeave: v
  } = e, [y, h] = u.useState(null), [g, w] = u.useState(/* @__PURE__ */ new Map()), [b, x] = u.useState(null);
  return /* @__PURE__ */ d.jsx(
    bj,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: s,
      previousValue: Tn(s),
      baseId: _e(),
      dir: o,
      orientation: a,
      viewport: y,
      onViewportChange: h,
      indicatorTrack: b,
      onIndicatorTrackChange: x,
      onTriggerEnter: me(f),
      onTriggerLeave: me(p),
      onContentEnter: me(m),
      onContentLeave: me(v),
      onItemSelect: me(c),
      onItemDismiss: me(l),
      onViewportContentChange: u.useCallback((C, _) => {
        w((S) => (S.set(C, _), new Map(S)));
      }, []),
      onViewportContentRemove: u.useCallback((C) => {
        w((_) => _.has(C) ? (_.delete(C), new Map(_)) : _);
      }, []),
      children: /* @__PURE__ */ d.jsx(Xu.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(wj, { scope: t, items: g, children: i }) })
    }
  );
}, vw = "NavigationMenuList", gw = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Ye(vw, r), a = /* @__PURE__ */ d.jsx(W.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ d.jsx(W.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ d.jsx(Xu.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ d.jsx(Tw, { asChild: !0, children: a }) : a }) });
  }
);
gw.displayName = vw;
var yw = "NavigationMenuItem", [Cj, bw] = Zu(yw), ww = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = _e(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = u.useRef(null), c = u.useRef(null), l = u.useRef(null), f = u.useRef(() => {
    }), p = u.useRef(!1), m = u.useCallback((y = "start") => {
      if (s.current) {
        f.current();
        const h = Pl(s.current);
        h.length && ed(y === "start" ? h : h.reverse());
      }
    }, []), v = u.useCallback(() => {
      if (s.current) {
        const y = Pl(s.current);
        y.length && (f.current = Mj(y));
      }
    }, []);
    return /* @__PURE__ */ d.jsx(
      Cj,
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
        children: /* @__PURE__ */ d.jsx(W.li, { ...o, ref: t })
      }
    );
  }
);
ww.displayName = yw;
var El = "NavigationMenuTrigger", xw = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = Ye(El, e.__scopeNavigationMenu), i = bw(El, e.__scopeNavigationMenu), s = u.useRef(null), c = ne(s, i.triggerRef, t), l = Nw(a.baseId, i.value), f = Mw(a.baseId, i.value), p = u.useRef(!1), m = u.useRef(!1), v = i.value === a.value;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Xu.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ d.jsx(Rw, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      W.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": td(v),
        "aria-expanded": v,
        "aria-controls": f,
        ...o,
        ref: c,
        onPointerEnter: $(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: $(
          e.onPointerMove,
          Mo(() => {
            n || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: $(
          e.onPointerLeave,
          Mo(() => {
            n || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: $(e.onClick, () => {
          a.onItemSelect(i.value), m.current = v;
        }),
        onKeyDown: $(e.onKeyDown, (y) => {
          const g = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          v && y.key === g && (i.onEntryKeyDown(), y.preventDefault());
        })
      }
    ) }) }),
    v && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        dw,
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
      a.viewport && /* @__PURE__ */ d.jsx("span", { "aria-owns": f })
    ] })
  ] });
});
xw.displayName = El;
var _j = "NavigationMenuLink", Af = "navigationMenu.linkSelect", Sw = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ d.jsx(Rw, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      W.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: $(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(Af, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Af, (l) => o == null ? void 0 : o(l), { once: !0 }), cn(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(go, {
                bubbles: !0,
                cancelable: !0
              });
              cn(s, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Sw.displayName = _j;
var Qu = "NavigationMenuIndicator", Cw = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ye(Qu, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? uv.createPortal(
    /* @__PURE__ */ d.jsx(Ce, { present: r || a, children: /* @__PURE__ */ d.jsx(Ej, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Cw.displayName = Qu;
var Ej = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = Ye(Qu, r), a = fw(r), [i, s] = u.useState(
    null
  ), [c, l] = u.useState(null), f = o.orientation === "horizontal", p = !!o.value;
  u.useEffect(() => {
    var h;
    const y = (h = a().find((g) => g.value === o.value)) == null ? void 0 : h.ref.current;
    y && s(y);
  }, [a, o.value]);
  const m = () => {
    i && l({
      size: f ? i.offsetWidth : i.offsetHeight,
      offset: f ? i.offsetLeft : i.offsetTop
    });
  };
  return Tl(i, m), Tl(o.indicatorTrack, m), c ? /* @__PURE__ */ d.jsx(
    W.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...n,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
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
}), Or = "NavigationMenuContent", _w = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ye(Or, e.__scopeNavigationMenu), a = bw(Or, e.__scopeNavigationMenu), i = ne(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ d.jsx(Pj, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ d.jsx(Ce, { present: r || s, children: /* @__PURE__ */ d.jsx(
    Ew,
    {
      "data-state": td(s),
      ...c,
      ref: i,
      onPointerEnter: $(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: $(
        e.onPointerLeave,
        Mo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
_w.displayName = Or;
var Pj = u.forwardRef((e, t) => {
  const r = Ye(Or, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return Ee(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), Ee(() => () => o(e.value), [e.value, o]), null;
}), go = "navigationMenu.rootContentDismiss", Ew = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, f = Ye(Or, r), p = u.useRef(null), m = ne(p, t), v = Nw(f.baseId, n), y = Mw(f.baseId, n), h = fw(r), g = u.useRef(null), { onItemDismiss: w } = f;
  u.useEffect(() => {
    const x = p.current;
    if (f.isRootMenu && x) {
      const C = () => {
        var _;
        w(), s(), x.contains(document.activeElement) && ((_ = o.current) == null || _.focus());
      };
      return x.addEventListener(go, C), () => x.removeEventListener(go, C);
    }
  }, [f.isRootMenu, e.value, o, w, s]);
  const b = u.useMemo(() => {
    const C = h().map((k) => k.value);
    f.dir === "rtl" && C.reverse();
    const _ = C.indexOf(f.value), S = C.indexOf(f.previousValue), E = n === f.value, N = S === C.indexOf(n);
    if (!E && !N) return g.current;
    const T = (() => {
      if (_ !== S) {
        if (E && S !== -1) return _ > S ? "from-end" : "from-start";
        if (N && _ !== -1) return _ > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = T, T;
  }, [f.previousValue, f.value, f.dir, h, n]);
  return /* @__PURE__ */ d.jsx(Tw, { asChild: !0, children: /* @__PURE__ */ d.jsx(
    Bt,
    {
      id: y,
      "aria-labelledby": v,
      "data-motion": b,
      "data-orientation": f.orientation,
      ...l,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var C;
        const x = new Event(go, {
          bubbles: !0,
          cancelable: !0
        });
        (C = p.current) == null || C.dispatchEvent(x);
      },
      onFocusOutside: $(e.onFocusOutside, (x) => {
        var _;
        c();
        const C = x.target;
        (_ = f.rootNavigationMenu) != null && _.contains(C) && x.preventDefault();
      }),
      onPointerDownOutside: $(e.onPointerDownOutside, (x) => {
        var E;
        const C = x.target, _ = h().some((N) => {
          var T;
          return (T = N.ref.current) == null ? void 0 : T.contains(C);
        }), S = f.isRootMenu && ((E = f.viewport) == null ? void 0 : E.contains(C));
        (_ || S || !f.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: $(e.onKeyDown, (x) => {
        var S;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const E = Pl(x.currentTarget), N = document.activeElement, T = E.findIndex((q) => q === N), D = x.shiftKey ? E.slice(0, T).reverse() : E.slice(T + 1, E.length);
          ed(D) ? x.preventDefault() : (S = a.current) == null || S.focus();
        }
      }),
      onEscapeKeyDown: $(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), Ju = "NavigationMenuViewport", Pw = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!Ye(Ju, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ d.jsx(Ce, { present: r || a, children: /* @__PURE__ */ d.jsx(Tj, { ...n, ref: t }) });
});
Pw.displayName = Ju;
var Tj = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = Ye(Ju, r), i = ne(t, a.onViewportChange), s = xj(
    Or,
    e.__scopeNavigationMenu
  ), [c, l] = u.useState(null), [f, p] = u.useState(null), m = c ? (c == null ? void 0 : c.width) + "px" : void 0, v = c ? (c == null ? void 0 : c.height) + "px" : void 0, y = !!a.value, h = y ? a.value : a.previousValue;
  return Tl(f, () => {
    f && l({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ d.jsx(
    W.div,
    {
      "data-state": td(y),
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
      onPointerEnter: $(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: $(e.onPointerLeave, Mo(a.onContentLeave)),
      children: Array.from(s.items).map(([w, { ref: b, forceMount: x, ...C }]) => {
        const _ = h === w;
        return /* @__PURE__ */ d.jsx(Ce, { present: x || _, children: /* @__PURE__ */ d.jsx(
          Ew,
          {
            ...C,
            ref: _n(b, (S) => {
              _ && S && p(S);
            })
          }
        ) }, w);
      })
    }
  );
}), Rj = "FocusGroup", Tw = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Ye(Rj, r);
    return /* @__PURE__ */ d.jsx(_l.Provider, { scope: r, children: /* @__PURE__ */ d.jsx(_l.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(W.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), jf = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Nj = "FocusGroupItem", Rw = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = gj(r), a = Ye(Nj, r);
    return /* @__PURE__ */ d.jsx(_l.ItemSlot, { scope: r, children: /* @__PURE__ */ d.jsx(
      W.button,
      {
        ...n,
        ref: t,
        onKeyDown: $(e.onKeyDown, (i) => {
          if (["Home", "End", ...jf].includes(i.key)) {
            let c = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), jf.includes(i.key)) {
              const p = c.indexOf(i.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => ed(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function Pl(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function ed(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function Mj(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function Tl(e, t) {
  const r = me(t);
  Ee(() => {
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
function td(e) {
  return e ? "open" : "closed";
}
function Nw(e, t) {
  return `${e}-trigger-${t}`;
}
function Mw(e, t) {
  return `${e}-content-${t}`;
}
function Mo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ow = pw, Aw = gw, Oj = ww, jw = xw, Aj = Sw, Dw = Cw, kw = _w, Iw = Pw;
const jj = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsxs(
  Ow,
  {
    ref: n,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ d.jsx($w, {})
    ]
  }
));
jj.displayName = Ow.displayName;
const Dj = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Aw,
  {
    ref: r,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Dj.displayName = Aw.displayName;
const _F = Oj, kj = Nt(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), Ij = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsxs(
  jw,
  {
    ref: n,
    className: M(kj(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ d.jsx(
        Tr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
Ij.displayName = jw.displayName;
const $j = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  kw,
  {
    ref: r,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
$j.displayName = kw.displayName;
const Lj = Aj, $w = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ d.jsx(
  Iw,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
$w.displayName = Iw.displayName;
const Fj = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Dw,
  {
    ref: r,
    className: M(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
Fj.displayName = Dw.displayName;
const qj = O.forwardRef(({ className: e, title: t, children: r, ...n }, o) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(Lj, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
  "a",
  {
    ref: o,
    className: M(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ d.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: r })
    ]
  }
) }) }));
qj.displayName = "ListItem";
function Lw(e) {
  return /* @__PURE__ */ d.jsx(
    "img",
    {
      src: "./logo_aiqia_animation.svg",
      alt: "",
      ...e,
      style: { height: "140px" }
    }
  );
}
function EF() {
  return /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-center flex-1 p-10", children: /* @__PURE__ */ d.jsx(Lw, { className: "w-40" }) });
}
const Bj = (e, t) => {
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
};
function PF({
  value: e,
  mask: t,
  onChange: r,
  ...n
}) {
  const o = t.split("#").length - 1, a = t.split("A").length - 1, i = o + a;
  function s(c) {
    const f = c.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, i);
    r(f);
  }
  return /* @__PURE__ */ d.jsx(
    uw,
    {
      value: Bj(e, t),
      onChange: s,
      ...n
    }
  );
}
const Wj = (e, t = 300) => {
  const [r, n] = pt(e);
  return Lr(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, Df = Nt(
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
), Hj = u.forwardRef(
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
    onSearchChange: f,
    isLoading: p,
    onCreate: m,
    ...v
  }, y) => {
    const [h, g] = u.useState(n), [w, b] = u.useState(!1), [x, C] = u.useState(!1), [_, S] = u.useState(""), E = Wj(_, 300);
    Lr(() => {
      f && f(E ?? "");
    }, [E]);
    const N = (R) => {
      if (R.key === "Enter")
        b(!0);
      else if (R.key === "Backspace" && !R.currentTarget.value) {
        const I = [...h];
        I.pop(), g(I), t(I);
      }
    }, T = (R) => {
      const I = h.includes(R) ? h.filter((j) => j !== R) : [...h, R];
      g(I), t(I);
    }, k = () => {
      g([]), t([]);
    }, D = () => {
      b((R) => !R);
    }, q = () => {
      const R = h.slice(0, i);
      g(R), t(R);
    }, F = () => {
      if (h.length === e.length)
        k();
      else {
        const R = e.map((I) => I.value);
        g(R), t(R);
      }
    };
    return /* @__PURE__ */ d.jsxs(
      Lu,
      {
        open: w,
        onOpenChange: b,
        modal: s,
        children: [
          /* @__PURE__ */ d.jsx(Fu, { asChild: !0, children: /* @__PURE__ */ d.jsx(
            Wr,
            {
              ref: y,
              ...v,
              onClick: D,
              variant: "outline",
              className: M(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, i).map((R) => {
                    const I = e.find((G) => G.value === R), j = I == null ? void 0 : I.icon;
                    return /* @__PURE__ */ d.jsxs(
                      Gd,
                      {
                        className: M(
                          x ? "animate-bounce" : "",
                          Df({ variant: r })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          j && /* @__PURE__ */ d.jsx(j, { className: "h-4 w-4 mr-2" }),
                          I == null ? void 0 : I.label,
                          /* @__PURE__ */ d.jsx(
                            Fd,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (G) => {
                                G.stopPropagation(), T(R);
                              }
                            }
                          )
                        ]
                      },
                      R
                    );
                  }),
                  h.length > i && /* @__PURE__ */ d.jsxs(
                    Gd,
                    {
                      className: M(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        x ? "animate-bounce" : "",
                        Df({ variant: r })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - i}`,
                        /* @__PURE__ */ d.jsx(
                          Fd,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (R) => {
                              R.stopPropagation(), q();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ d.jsx(
                    Ko,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (R) => {
                        R.stopPropagation(), k();
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsx(
                    n1,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ d.jsx(Tr, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ d.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ d.jsx(Tr, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ d.jsx(
            da,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => b(!1),
              children: /* @__PURE__ */ d.jsxs(Pu, { shouldFilter: !f, children: [
                /* @__PURE__ */ d.jsx(
                  fy,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: N,
                    onValueChange: S
                  }
                ),
                /* @__PURE__ */ d.jsxs(py, { children: [
                  !p && /* @__PURE__ */ d.jsx(my, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ d.jsxs(hy, { children: [
                    !p && !e.length && !!_.length && m && /* @__PURE__ */ d.jsx(
                      mo,
                      {
                        onSelect: m,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ d.jsx(f0, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ d.jsx("b", { children: _ })
                        ] })
                      },
                      "new"
                    ),
                    p && /* @__PURE__ */ d.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ d.jsx(u0, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !l && /* @__PURE__ */ d.jsxs(
                      mo,
                      {
                        onSelect: F,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              className: M(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ d.jsx(ln, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ d.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((R) => {
                      const I = h.includes(R.value);
                      return /* @__PURE__ */ d.jsxs(
                        mo,
                        {
                          onSelect: () => T(R.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ d.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  I ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ d.jsx(ln, { className: "h-4 w-4" })
                              }
                            ),
                            R.icon && /* @__PURE__ */ d.jsx(R.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ d.jsx("span", { children: R.label })
                          ]
                        },
                        R.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ d.jsx(vy, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ d.jsx(
            v0,
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
Hj.displayName = "MultiSelect";
const Fw = ({ className: e, ...t }) => /* @__PURE__ */ d.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Fw.displayName = "Pagination";
const qw = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "ul",
  {
    ref: r,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
qw.displayName = "PaginationContent";
const tn = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx("li", { ref: r, className: M("", e), ...t }));
tn.displayName = "PaginationItem";
const rr = ({
  className: e,
  isActive: t,
  size: r = "icon",
  onClick: n,
  ...o
}) => /* @__PURE__ */ d.jsx(
  "button",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      Sr({ variant: t ? "outline" : "ghost", size: r }),
      e
    ),
    onClick: n,
    ...o
  }
);
rr.displayName = "PaginationButton";
const Bw = ({
  className: e,
  onClick: t,
  ...r
}) => /* @__PURE__ */ d.jsx(
  rr,
  {
    "aria-label": "Go to previous page",
    className: M("gap-1", e),
    onClick: t,
    ...r,
    children: /* @__PURE__ */ d.jsx(Uo, { className: "h-4 w-4" })
  }
);
Bw.displayName = "PaginationPrevious";
const Ww = ({
  className: e,
  onClick: t,
  ...r
}) => /* @__PURE__ */ d.jsx(
  rr,
  {
    "aria-label": "Go to next page",
    className: M("gap-1", e),
    onClick: t,
    ...r,
    children: /* @__PURE__ */ d.jsx(Fr, { className: "h-4 w-4" })
  }
);
Ww.displayName = "PaginationNext";
const Hw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(jv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Hw.displayName = "PaginationEllipsis";
const TF = () => {
  const [e, t] = u.useState(1), r = () => {
    e > 1 && t(e - 1);
  }, n = () => {
    t(e + 1);
  };
  return /* @__PURE__ */ d.jsx(Fw, { children: /* @__PURE__ */ d.jsxs(qw, { children: [
    /* @__PURE__ */ d.jsx(Bw, { onClick: r }),
    /* @__PURE__ */ d.jsx(tn, { children: /* @__PURE__ */ d.jsx(
      rr,
      {
        isActive: e === 1,
        onClick: () => t(1),
        children: "1"
      }
    ) }),
    /* @__PURE__ */ d.jsx(tn, { children: /* @__PURE__ */ d.jsx(
      rr,
      {
        isActive: e === 2,
        onClick: () => t(2),
        children: "2"
      }
    ) }),
    /* @__PURE__ */ d.jsx(tn, { children: /* @__PURE__ */ d.jsx(
      rr,
      {
        isActive: e === 3,
        onClick: () => t(3),
        children: "3"
      }
    ) }),
    /* @__PURE__ */ d.jsx(Hw, {}),
    /* @__PURE__ */ d.jsx(tn, { children: /* @__PURE__ */ d.jsx(
      rr,
      {
        isActive: e === 5,
        onClick: () => t(5),
        children: "5"
      }
    ) }),
    /* @__PURE__ */ d.jsx(Ww, { onClick: n })
  ] }) });
};
var rd = "Radio", [Vj, Vw] = Te(rd), [Gj, zj] = Vj(rd), Gw = u.forwardRef(
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
      ...f
    } = e, [p, m] = u.useState(null), v = ne(t, (g) => m(g)), y = u.useRef(!1), h = p ? l || !!p.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(Gj, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ d.jsx(
        W.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Uw(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...f,
          ref: v,
          onClick: $(e.onClick, (g) => {
            o || c == null || c(), h && (y.current = g.isPropagationStopped(), y.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ d.jsx(
        Yj,
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
Gw.displayName = rd;
var zw = "RadioIndicator", Yw = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = zj(zw, r);
    return /* @__PURE__ */ d.jsx(Ce, { present: n || a.checked, children: /* @__PURE__ */ d.jsx(
      W.span,
      {
        "data-state": Uw(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Yw.displayName = zw;
var Yj = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = u.useRef(null), i = Tn(r), s = Qo(t);
  return u.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && p) {
      const m = new Event("click", { bubbles: n });
      p.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ d.jsx(
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
function Uw(e) {
  return e ? "checked" : "unchecked";
}
var Uj = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], nd = "RadioGroup", [Kj, RF] = Te(nd, [
  Vt,
  Vw
]), Kw = Vt(), Xw = Vw(), [Xj, Zj] = Kj(nd), Zw = u.forwardRef(
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
      loop: f = !0,
      onValueChange: p,
      ...m
    } = e, v = Kw(r), y = Tt(l), [h, g] = Pe({
      prop: a,
      defaultProp: o,
      onChange: p
    });
    return /* @__PURE__ */ d.jsx(
      Xj,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ d.jsx(
          ma,
          {
            asChild: !0,
            ...v,
            orientation: c,
            dir: y,
            loop: f,
            children: /* @__PURE__ */ d.jsx(
              W.div,
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
Zw.displayName = nd;
var Qw = "RadioGroupItem", Jw = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = Zj(Qw, r), i = a.disabled || n, s = Kw(r), c = Xw(r), l = u.useRef(null), f = ne(t, l), p = a.value === o.value, m = u.useRef(!1);
    return u.useEffect(() => {
      const v = (h) => {
        Uj.includes(h.key) && (m.current = !0);
      }, y = () => m.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ d.jsx(
      ha,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ d.jsx(
          Gw,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...c,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: $((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: $(o.onFocus, () => {
              var v;
              m.current && ((v = l.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
Jw.displayName = Qw;
var Qj = "RadioGroupIndicator", ex = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = Xw(r);
    return /* @__PURE__ */ d.jsx(Yw, { ...o, ...n, ref: t });
  }
);
ex.displayName = Qj;
var tx = Zw, rx = Jw, Jj = ex;
const eD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  tx,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: r
  }
));
eD.displayName = tx.displayName;
const tD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  rx,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow-smfocus:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx(Jj, { className: "flex items-center justify-center", children: /* @__PURE__ */ d.jsx(Av, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
tD.displayName = rx.displayName;
function NF({ children: e }) {
  const [t, r] = pt(!1), [n, o] = pt(!1), a = () => {
    r(!t), localStorage.setItem("RightDrawerIsExpanded", (!t).toString());
  };
  return O.useEffect(() => {
    const i = localStorage.getItem("RightDrawerIsExpanded");
    i !== null && r(i === "true"), o(!0);
  }, []), n ? /* @__PURE__ */ d.jsx("aside", { className: "border-l", children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `
      flex flex-col h-full p-3 transition-all duration-300
      relative pt-[80px]
      ${t ? "w-64" : "w-16"}
      "items-end"
    `,
      children: [
        /* @__PURE__ */ d.jsx(
          Wr,
          {
            variant: "ghost",
            size: "icon",
            className: "mb-4 bg-accent absolute left-[-20px] top-[12px]",
            onClick: a,
            children: t ? /* @__PURE__ */ d.jsx(Fr, {}) : /* @__PURE__ */ d.jsx(Uo, {})
          }
        ),
        t && /* @__PURE__ */ d.jsx("div", { className: "opacity-100 visible", children: e })
      ]
    }
  ) }) : /* @__PURE__ */ d.jsx(a1, {});
}
function Rl(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function rD(e, t) {
  return u.useReducer((r, n) => t[r][n] ?? r, e);
}
var od = "ScrollArea", [nx, MF] = Te(od), [nD, Ue] = nx(od), ox = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = u.useState(null), [l, f] = u.useState(null), [p, m] = u.useState(null), [v, y] = u.useState(null), [h, g] = u.useState(null), [w, b] = u.useState(0), [x, C] = u.useState(0), [_, S] = u.useState(!1), [E, N] = u.useState(!1), T = ne(t, (D) => c(D)), k = Tt(o);
    return /* @__PURE__ */ d.jsx(
      nD,
      {
        scope: r,
        type: n,
        dir: k,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: l,
        onViewportChange: f,
        content: p,
        onContentChange: m,
        scrollbarX: v,
        onScrollbarXChange: y,
        scrollbarXEnabled: _,
        onScrollbarXEnabledChange: S,
        scrollbarY: h,
        onScrollbarYChange: g,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: b,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ d.jsx(
          W.div,
          {
            dir: k,
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
ox.displayName = od;
var ax = "ScrollAreaViewport", ix = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = Ue(ax, r), s = u.useRef(null), c = ne(t, s, i.onViewportChange);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ d.jsx(
        W.div,
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
          children: /* @__PURE__ */ d.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
ix.displayName = ax;
var yt = "ScrollAreaScrollbar", ad = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Ue(yt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return u.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ d.jsx(oD, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ d.jsx(aD, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ d.jsx(sx, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ d.jsx(id, { ...n, ref: t }) : null;
  }
);
ad.displayName = yt;
var oD = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ue(yt, e.__scopeScrollArea), [a, i] = u.useState(!1);
  return u.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const l = () => {
        window.clearTimeout(c), i(!0);
      }, f = () => {
        c = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ d.jsx(Ce, { present: r || a, children: /* @__PURE__ */ d.jsx(
    sx,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), aD = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ue(yt, e.__scopeScrollArea), a = e.orientation === "horizontal", i = ya(() => c("SCROLL_END"), 100), [s, c] = rD("hidden", {
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
  return u.useEffect(() => {
    if (s === "idle") {
      const l = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(l);
    }
  }, [s, o.scrollHideDelay, c]), u.useEffect(() => {
    const l = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let p = l[f];
      const m = () => {
        const v = l[f];
        p !== v && (c("SCROLL"), i()), p = v;
      };
      return l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ d.jsx(Ce, { present: r || s !== "hidden", children: /* @__PURE__ */ d.jsx(
    id,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: $(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: $(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), sx = u.forwardRef((e, t) => {
  const r = Ue(yt, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = u.useState(!1), s = e.orientation === "horizontal", c = ya(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, f = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? l : f);
    }
  }, 10);
  return Ar(r.viewport, c), Ar(r.content, c), /* @__PURE__ */ d.jsx(Ce, { present: n || a, children: /* @__PURE__ */ d.jsx(
    id,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), id = u.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = Ue(yt, e.__scopeScrollArea), a = u.useRef(null), i = u.useRef(0), [s, c] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = fx(s.viewport, s.content), f = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, v) {
    return dD(m, i.current, s, v);
  }
  return r === "horizontal" ? /* @__PURE__ */ d.jsx(
    iD,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, v = kf(m, s, o.dir);
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
  ) : r === "vertical" ? /* @__PURE__ */ d.jsx(
    sD,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, v = kf(m, s);
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
}), iD = u.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Ue(yt, e.__scopeScrollArea), [i, s] = u.useState(), c = u.useRef(null), l = ne(t, c, a.onScrollbarXChange);
  return u.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ d.jsx(
    lx,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ga(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(m), mx(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Ao(i.paddingLeft),
            paddingEnd: Ao(i.paddingRight)
          }
        });
      }
    }
  );
}), sD = u.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Ue(yt, e.__scopeScrollArea), [i, s] = u.useState(), c = u.useRef(null), l = ne(t, c, a.onScrollbarYChange);
  return u.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ d.jsx(
    lx,
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
        "--radix-scroll-area-thumb-height": ga(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(m), mx(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Ao(i.paddingTop),
            paddingEnd: Ao(i.paddingBottom)
          }
        });
      }
    }
  );
}), [cD, cx] = nx(yt), lx = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: r,
    sizes: n,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: f,
    onResize: p,
    ...m
  } = e, v = Ue(yt, r), [y, h] = u.useState(null), g = ne(t, (T) => h(T)), w = u.useRef(null), b = u.useRef(""), x = v.viewport, C = n.content - n.viewport, _ = me(f), S = me(c), E = ya(p, 10);
  function N(T) {
    if (w.current) {
      const k = T.clientX - w.current.left, D = T.clientY - w.current.top;
      l({ x: k, y: D });
    }
  }
  return u.useEffect(() => {
    const T = (k) => {
      const D = k.target;
      (y == null ? void 0 : y.contains(D)) && _(k, C);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [x, y, C, _]), u.useEffect(S, [n, S]), Ar(y, E), Ar(v.content, E), /* @__PURE__ */ d.jsx(
    cD,
    {
      scope: r,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: me(a),
      onThumbPointerUp: me(i),
      onThumbPositionChange: S,
      onThumbPointerDown: me(s),
      children: /* @__PURE__ */ d.jsx(
        W.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: $(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), w.current = y.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), N(T));
          }),
          onPointerMove: $(e.onPointerMove, N),
          onPointerUp: $(e.onPointerUp, (T) => {
            const k = T.target;
            k.hasPointerCapture(T.pointerId) && k.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = b.current, v.viewport && (v.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), Oo = "ScrollAreaThumb", ux = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = cx(Oo, e.__scopeScrollArea);
    return /* @__PURE__ */ d.jsx(Ce, { present: r || o.hasThumb, children: /* @__PURE__ */ d.jsx(lD, { ref: t, ...n }) });
  }
), lD = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = Ue(Oo, r), i = cx(Oo, r), { onThumbPositionChange: s } = i, c = ne(
      t,
      (p) => i.onThumbChange(p)
    ), l = u.useRef(void 0), f = ya(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (f(), !l.current) {
            const v = fD(p, s);
            l.current = v, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, f, s]), /* @__PURE__ */ d.jsx(
      W.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: $(e.onPointerDownCapture, (p) => {
          const v = p.target.getBoundingClientRect(), y = p.clientX - v.left, h = p.clientY - v.top;
          i.onThumbPointerDown({ x: y, y: h });
        }),
        onPointerUp: $(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
ux.displayName = Oo;
var sd = "ScrollAreaCorner", dx = u.forwardRef(
  (e, t) => {
    const r = Ue(sd, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ d.jsx(uD, { ...e, ref: t }) : null;
  }
);
dx.displayName = sd;
var uD = u.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = Ue(sd, r), [a, i] = u.useState(0), [s, c] = u.useState(0), l = !!(a && s);
  return Ar(o.scrollbarX, () => {
    var p;
    const f = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), Ar(o.scrollbarY, () => {
    var p;
    const f = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(f), i(f);
  }), l ? /* @__PURE__ */ d.jsx(
    W.div,
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
function Ao(e) {
  return e ? parseInt(e, 10) : 0;
}
function fx(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function ga(e) {
  const t = fx(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function dD(e, t, r, n = "ltr") {
  const o = ga(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, f = r.content - r.viewport, p = n === "ltr" ? [0, f] : [f * -1, 0];
  return px([c, l], p)(e);
}
function kf(e, t, r = "ltr") {
  const n = ga(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], l = Rl(e, c);
  return px([0, i], [0, s])(l);
}
function px(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function mx(e, t) {
  return e > 0 && e < t;
}
var fD = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function ya(e, t) {
  const r = me(e), n = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(n.current), []), u.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Ar(e, t) {
  const r = me(t);
  Ee(() => {
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
var hx = ox, pD = ix, mD = dx;
const hD = O.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsxs(
  hx,
  {
    ref: n,
    className: M("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ d.jsx(pD, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ d.jsx(vx, {}),
      /* @__PURE__ */ d.jsx(mD, {})
    ]
  }
));
hD.displayName = hx.displayName;
const vx = O.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ d.jsx(
  ad,
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
    children: /* @__PURE__ */ d.jsx(ux, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
vx.displayName = ad.displayName;
var vD = [" ", "Enter", "ArrowUp", "ArrowDown"], gD = [" ", "Enter"], Wn = "Select", [ba, wa, yD] = lr(Wn), [Yr, OF] = Te(Wn, [
  yD,
  Wt
]), xa = Wt(), [bD, zt] = Yr(Wn), [wD, xD] = Yr(Wn), gx = (e) => {
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
    name: f,
    autoComplete: p,
    disabled: m,
    required: v,
    form: y
  } = e, h = xa(t), [g, w] = u.useState(null), [b, x] = u.useState(null), [C, _] = u.useState(!1), S = Tt(l), [E = !1, N] = Pe({
    prop: n,
    defaultProp: o,
    onChange: a
  }), [T, k] = Pe({
    prop: i,
    defaultProp: s,
    onChange: c
  }), D = u.useRef(null), q = g ? y || !!g.closest("form") : !0, [F, R] = u.useState(/* @__PURE__ */ new Set()), I = Array.from(F).map((j) => j.props.value).join(";");
  return /* @__PURE__ */ d.jsx(Dn, { ...h, children: /* @__PURE__ */ d.jsxs(
    bD,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: _,
      contentId: _e(),
      value: T,
      onValueChange: k,
      open: E,
      onOpenChange: N,
      dir: S,
      triggerPointerDownPosRef: D,
      disabled: m,
      children: [
        /* @__PURE__ */ d.jsx(ba.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          wD,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((j) => {
              R((G) => new Set(G).add(j));
            }, []),
            onNativeOptionRemove: u.useCallback((j) => {
              R((G) => {
                const B = new Set(G);
                return B.delete(j), B;
              });
            }, []),
            children: r
          }
        ) }),
        q ? /* @__PURE__ */ d.jsxs(
          Hx,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: T,
            onChange: (j) => k(j.target.value),
            disabled: m,
            form: y,
            children: [
              T === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(F)
            ]
          },
          I
        ) : null
      ]
    }
  ) });
};
gx.displayName = Wn;
var yx = "SelectTrigger", bx = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = xa(r), i = zt(yx, r), s = i.disabled || n, c = ne(t, i.onTriggerChange), l = wa(r), f = u.useRef("touch"), [p, m, v] = Vx((h) => {
      const g = l().filter((x) => !x.disabled), w = g.find((x) => x.value === i.value), b = Gx(g, h, w);
      b !== void 0 && i.onValueChange(b.value);
    }), y = (h) => {
      s || (i.onOpenChange(!0), v()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(kn, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      W.button,
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
        "data-placeholder": Wx(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: $(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && y(h);
        }),
        onPointerDown: $(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (y(h), h.preventDefault());
        }),
        onKeyDown: $(o.onKeyDown, (h) => {
          const g = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(g && h.key === " ") && vD.includes(h.key) && (y(), h.preventDefault());
        })
      }
    ) });
  }
);
bx.displayName = yx;
var wx = "SelectValue", xx = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = zt(wx, r), { onValueNodeHasChildrenChange: l } = c, f = a !== void 0, p = ne(t, c.onValueNodeChange);
    return Ee(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ d.jsx(
      W.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: Wx(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: i }) : a
      }
    );
  }
);
xx.displayName = wx;
var SD = "SelectIcon", Sx = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ d.jsx(W.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
Sx.displayName = SD;
var CD = "SelectPortal", Cx = (e) => /* @__PURE__ */ d.jsx(ur, { asChild: !0, ...e });
Cx.displayName = CD;
var cr = "SelectContent", _x = u.forwardRef(
  (e, t) => {
    const r = zt(cr, e.__scopeSelect), [n, o] = u.useState();
    if (Ee(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? Cn.createPortal(
        /* @__PURE__ */ d.jsx(Ex, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(ba.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Px, { ...e, ref: t });
  }
);
_x.displayName = cr;
var Qe = 10, [Ex, Yt] = Yr(cr), _D = "SelectContentImpl", Px = u.forwardRef(
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
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: g,
      //
      ...w
    } = e, b = zt(cr, r), [x, C] = u.useState(null), [_, S] = u.useState(null), E = ne(t, (H) => C(H)), [N, T] = u.useState(null), [k, D] = u.useState(
      null
    ), q = wa(r), [F, R] = u.useState(!1), I = u.useRef(!1);
    u.useEffect(() => {
      if (x) return ta(x);
    }, [x]), Jo();
    const j = u.useCallback(
      (H) => {
        const [oe, ...se] = q().map((le) => le.ref.current), [ce] = se.slice(-1), fe = document.activeElement;
        for (const le of H)
          if (le === fe || (le == null || le.scrollIntoView({ block: "nearest" }), le === oe && _ && (_.scrollTop = 0), le === ce && _ && (_.scrollTop = _.scrollHeight), le == null || le.focus(), document.activeElement !== fe)) return;
      },
      [q, _]
    ), G = u.useCallback(
      () => j([N, x]),
      [j, N, x]
    );
    u.useEffect(() => {
      F && G();
    }, [F, G]);
    const { onOpenChange: B, triggerPointerDownPosRef: L } = b;
    u.useEffect(() => {
      if (x) {
        let H = { x: 0, y: 0 };
        const oe = (ce) => {
          var fe, le;
          H = {
            x: Math.abs(Math.round(ce.pageX) - (((fe = L.current) == null ? void 0 : fe.x) ?? 0)),
            y: Math.abs(Math.round(ce.pageY) - (((le = L.current) == null ? void 0 : le.y) ?? 0))
          };
        }, se = (ce) => {
          H.x <= 10 && H.y <= 10 ? ce.preventDefault() : x.contains(ce.target) || B(!1), document.removeEventListener("pointermove", oe), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", oe), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", oe), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [x, B, L]), u.useEffect(() => {
      const H = () => B(!1);
      return window.addEventListener("blur", H), window.addEventListener("resize", H), () => {
        window.removeEventListener("blur", H), window.removeEventListener("resize", H);
      };
    }, [B]);
    const [J, te] = Vx((H) => {
      const oe = q().filter((fe) => !fe.disabled), se = oe.find((fe) => fe.ref.current === document.activeElement), ce = Gx(oe, H, se);
      ce && setTimeout(() => ce.ref.current.focus());
    }), A = u.useCallback(
      (H, oe, se) => {
        const ce = !I.current && !se;
        (b.value !== void 0 && b.value === oe || ce) && (T(H), ce && (I.current = !0));
      },
      [b.value]
    ), V = u.useCallback(() => x == null ? void 0 : x.focus(), [x]), U = u.useCallback(
      (H, oe, se) => {
        const ce = !I.current && !se;
        (b.value !== void 0 && b.value === oe || ce) && D(H);
      },
      [b.value]
    ), z = n === "popper" ? Nl : Tx, ee = z === Nl ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ d.jsx(
      Ex,
      {
        scope: r,
        content: x,
        viewport: _,
        onViewportChange: S,
        itemRefCallback: A,
        selectedItem: N,
        onItemLeave: V,
        itemTextRefCallback: U,
        focusSelectedItem: G,
        selectedItemText: k,
        position: n,
        isPositioned: F,
        searchRef: J,
        children: /* @__PURE__ */ d.jsx(Nn, { as: mt, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          Rn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (H) => {
              H.preventDefault();
            },
            onUnmountAutoFocus: $(o, (H) => {
              var oe;
              (oe = b.trigger) == null || oe.focus({ preventScroll: !0 }), H.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (H) => H.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  z,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (H) => H.preventDefault(),
                    ...w,
                    ...ee,
                    onPlaced: () => R(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: $(w.onKeyDown, (H) => {
                      const oe = H.ctrlKey || H.altKey || H.metaKey;
                      if (H.key === "Tab" && H.preventDefault(), !oe && H.key.length === 1 && te(H.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(H.key)) {
                        let ce = q().filter((fe) => !fe.disabled).map((fe) => fe.ref.current);
                        if (["ArrowUp", "End"].includes(H.key) && (ce = ce.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(H.key)) {
                          const fe = H.target, le = ce.indexOf(fe);
                          ce = ce.slice(le + 1);
                        }
                        setTimeout(() => j(ce)), H.preventDefault();
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
Px.displayName = _D;
var ED = "SelectItemAlignedPosition", Tx = u.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = zt(cr, r), i = Yt(cr, r), [s, c] = u.useState(null), [l, f] = u.useState(null), p = ne(t, (E) => f(E)), m = wa(r), v = u.useRef(!1), y = u.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = i, x = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && g && w) {
      const E = a.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), k = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const fe = k.left - N.left, le = T.left - fe, Re = E.left - le, Y = E.width + Re, ke = Math.max(Y, N.width), $e = window.innerWidth - Qe, Le = Rl(le, [
          Qe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Qe, $e - ke)
        ]);
        s.style.minWidth = Y + "px", s.style.left = Le + "px";
      } else {
        const fe = N.right - k.right, le = window.innerWidth - T.right - fe, Re = window.innerWidth - E.right - le, Y = E.width + Re, ke = Math.max(Y, N.width), $e = window.innerWidth - Qe, Le = Rl(le, [
          Qe,
          Math.max(Qe, $e - ke)
        ]);
        s.style.minWidth = Y + "px", s.style.right = Le + "px";
      }
      const D = m(), q = window.innerHeight - Qe * 2, F = h.scrollHeight, R = window.getComputedStyle(l), I = parseInt(R.borderTopWidth, 10), j = parseInt(R.paddingTop, 10), G = parseInt(R.borderBottomWidth, 10), B = parseInt(R.paddingBottom, 10), L = I + j + F + B + G, J = Math.min(g.offsetHeight * 5, L), te = window.getComputedStyle(h), A = parseInt(te.paddingTop, 10), V = parseInt(te.paddingBottom, 10), U = E.top + E.height / 2 - Qe, z = q - U, ee = g.offsetHeight / 2, H = g.offsetTop + ee, oe = I + j + H, se = L - oe;
      if (oe <= U) {
        const fe = D.length > 0 && g === D[D.length - 1].ref.current;
        s.style.bottom = "0px";
        const le = l.clientHeight - h.offsetTop - h.offsetHeight, Re = Math.max(
          z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (fe ? V : 0) + le + G
        ), Y = oe + Re;
        s.style.height = Y + "px";
      } else {
        const fe = D.length > 0 && g === D[0].ref.current;
        s.style.top = "0px";
        const Re = Math.max(
          U,
          I + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (fe ? A : 0) + ee
        ) + se;
        s.style.height = Re + "px", h.scrollTop = oe - U + h.offsetTop;
      }
      s.style.margin = `${Qe}px 0`, s.style.minHeight = J + "px", s.style.maxHeight = q + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
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
  Ee(() => x(), [x]);
  const [C, _] = u.useState();
  Ee(() => {
    l && _(window.getComputedStyle(l).zIndex);
  }, [l]);
  const S = u.useCallback(
    (E) => {
      E && y.current === !0 && (x(), b == null || b(), y.current = !1);
    },
    [x, b]
  );
  return /* @__PURE__ */ d.jsx(
    TD,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ d.jsx(
            W.div,
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
Tx.displayName = ED;
var PD = "SelectPopperPosition", Nl = u.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Qe,
    ...a
  } = e, i = xa(r);
  return /* @__PURE__ */ d.jsx(
    la,
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
Nl.displayName = PD;
var [TD, cd] = Yr(cr, {}), Ml = "SelectViewport", Rx = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = Yt(Ml, r), i = cd(Ml, r), s = ne(t, a.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ d.jsx(ba.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(
        W.div,
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
          onScroll: $(o.onScroll, (l) => {
            const f = l.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && p) {
              const v = Math.abs(c.current - f.scrollTop);
              if (v > 0) {
                const y = window.innerHeight - Qe * 2, h = parseFloat(p.style.minHeight), g = parseFloat(p.style.height), w = Math.max(h, g);
                if (w < y) {
                  const b = w + v, x = Math.min(y, b), C = b - x;
                  p.style.height = x + "px", p.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Rx.displayName = Ml;
var Nx = "SelectGroup", [RD, ND] = Yr(Nx), Mx = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = _e();
    return /* @__PURE__ */ d.jsx(RD, { scope: r, id: o, children: /* @__PURE__ */ d.jsx(W.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
Mx.displayName = Nx;
var Ox = "SelectLabel", Ax = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ND(Ox, r);
    return /* @__PURE__ */ d.jsx(W.div, { id: o.id, ...n, ref: t });
  }
);
Ax.displayName = Ox;
var jo = "SelectItem", [MD, jx] = Yr(jo), Dx = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = zt(jo, r), c = Yt(jo, r), l = s.value === n, [f, p] = u.useState(a ?? ""), [m, v] = u.useState(!1), y = ne(
      t,
      (b) => {
        var x;
        return (x = c.itemRefCallback) == null ? void 0 : x.call(c, b, n, o);
      }
    ), h = _e(), g = u.useRef("touch"), w = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      MD,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: u.useCallback((b) => {
          p((x) => x || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          ba.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d.jsx(
              W.div,
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
                onFocus: $(i.onFocus, () => v(!0)),
                onBlur: $(i.onBlur, () => v(!1)),
                onClick: $(i.onClick, () => {
                  g.current !== "mouse" && w();
                }),
                onPointerUp: $(i.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: $(i.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: $(i.onPointerMove, (b) => {
                  var x;
                  g.current = b.pointerType, o ? (x = c.onItemLeave) == null || x.call(c) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: $(i.onPointerLeave, (b) => {
                  var x;
                  b.currentTarget === document.activeElement && ((x = c.onItemLeave) == null || x.call(c));
                }),
                onKeyDown: $(i.onKeyDown, (b) => {
                  var C;
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && b.key === " " || (gD.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Dx.displayName = jo;
var rn = "SelectItemText", kx = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = zt(rn, r), s = Yt(rn, r), c = jx(rn, r), l = xD(rn, r), [f, p] = u.useState(null), m = ne(
      t,
      (w) => p(w),
      c.onItemTextChange,
      (w) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, w, c.value, c.disabled);
      }
    ), v = f == null ? void 0 : f.textContent, y = u.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
    return Ee(() => (h(y), () => g(y)), [h, g, y]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(W.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Cn.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
kx.displayName = rn;
var Ix = "SelectItemIndicator", $x = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return jx(Ix, r).isSelected ? /* @__PURE__ */ d.jsx(W.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
$x.displayName = Ix;
var Ol = "SelectScrollUpButton", Lx = u.forwardRef((e, t) => {
  const r = Yt(Ol, e.__scopeSelect), n = cd(Ol, e.__scopeSelect), [o, a] = u.useState(!1), i = ne(t, n.onScrollButtonChange);
  return Ee(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    qx,
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
Lx.displayName = Ol;
var Al = "SelectScrollDownButton", Fx = u.forwardRef((e, t) => {
  const r = Yt(Al, e.__scopeSelect), n = cd(Al, e.__scopeSelect), [o, a] = u.useState(!1), i = ne(t, n.onScrollButtonChange);
  return Ee(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        a(f);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    qx,
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
Fx.displayName = Al;
var qx = u.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = Yt("SelectScrollButton", r), i = u.useRef(null), s = wa(r), c = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), Ee(() => {
    var f;
    const l = s().find((p) => p.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ d.jsx(
    W.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: $(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: $(o.onPointerMove, () => {
        var l;
        (l = a.onItemLeave) == null || l.call(a), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: $(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), OD = "SelectSeparator", Bx = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(W.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Bx.displayName = OD;
var jl = "SelectArrow", AD = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = xa(r), a = zt(jl, r), i = Yt(jl, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ d.jsx(ua, { ...o, ...n, ref: t }) : null;
  }
);
AD.displayName = jl;
function Wx(e) {
  return e === "" || e === void 0;
}
var Hx = u.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = u.useRef(null), a = ne(t, o), i = Tn(r);
    return u.useEffect(() => {
      const s = o.current, c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== r && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(s, r), s.dispatchEvent(p);
      }
    }, [i, r]), /* @__PURE__ */ d.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ d.jsx("select", { ...n, ref: a, defaultValue: r }) });
  }
);
Hx.displayName = "BubbleSelect";
function Vx(e) {
  const t = me(e), r = u.useRef(""), n = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = r.current + i;
      t(s), function c(l) {
        r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(s);
    },
    [t]
  ), a = u.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a];
}
function Gx(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = jD(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function jD(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var DD = gx, zx = bx, kD = xx, ID = Sx, $D = Cx, Yx = _x, LD = Rx, FD = Mx, Ux = Ax, Kx = Dx, qD = kx, BD = $x, Xx = Lx, Zx = Fx, Qx = Bx;
const Dl = DD, AF = FD, kl = kD, Do = u.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o } = qn();
  return /* @__PURE__ */ d.jsxs(
    zx,
    {
      ref: n,
      className: M(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...r,
      children: [
        t,
        !(o != null && o.message) && /* @__PURE__ */ d.jsx(ID, { asChild: !0, children: /* @__PURE__ */ d.jsx(Tr, { className: "h-4 w-4 opacity-50" }) })
      ]
    }
  );
});
Do.displayName = zx.displayName;
const Jx = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Xx,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx(n0, { className: "h-4 w-4" })
  }
));
Jx.displayName = Xx.displayName;
const e1 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Zx,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx(Tr, { className: "h-4 w-4" })
  }
));
e1.displayName = Zx.displayName;
const ko = u.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ d.jsx($D, { children: /* @__PURE__ */ d.jsxs(
  Yx,
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
      /* @__PURE__ */ d.jsx(Jx, {}),
      /* @__PURE__ */ d.jsx(
        LD,
        {
          className: M(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ d.jsx(e1, {})
    ]
  }
) }));
ko.displayName = Yx.displayName;
const WD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Ux,
  {
    ref: r,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
WD.displayName = Ux.displayName;
const gn = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsxs(
  Kx,
  {
    ref: n,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(BD, { children: /* @__PURE__ */ d.jsx(ln, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d.jsx(qD, { children: t })
    ]
  }
));
gn.displayName = Kx.displayName;
const HD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Qx,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
HD.displayName = Qx.displayName;
var VD = "Separator", If = "horizontal", GD = ["horizontal", "vertical"], t1 = u.forwardRef((e, t) => {
  const { decorative: r, orientation: n = If, ...o } = e, a = zD(n) ? n : If, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ d.jsx(
    W.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
t1.displayName = VD;
function zD(e) {
  return GD.includes(e);
}
var r1 = t1;
const n1 = u.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ d.jsx(
    r1,
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
n1.displayName = r1.displayName;
const jF = Su, DF = ay, kF = oa, YD = Cu, o1 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  Mn,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
o1.displayName = Mn.displayName;
const UD = Nt(
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
), KD = u.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ d.jsxs(YD, { children: [
  /* @__PURE__ */ d.jsx(o1, {}),
  /* @__PURE__ */ d.jsxs(
    On,
    {
      ref: o,
      className: M(UD({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ d.jsxs(oa, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ d.jsx(Ko, { className: "h-4 w-4" }),
          /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
KD.displayName = On.displayName;
const XD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
XD.displayName = "SheetHeader";
const ZD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ZD.displayName = "SheetFooter";
const QD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  ra,
  {
    ref: r,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
QD.displayName = ra.displayName;
const JD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  na,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
JD.displayName = na.displayName;
function IF({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: M("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
function a1() {
  return /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-center h-screen fixed w-screen top-0 left-0 bg-background z-50", children: /* @__PURE__ */ d.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ d.jsx(Lw, { className: "w-40" }) }) });
}
var ld = "Switch", [ek, $F] = Te(ld), [tk, rk] = ek(ld), i1 = u.forwardRef(
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
      form: f,
      ...p
    } = e, [m, v] = u.useState(null), y = ne(t, (x) => v(x)), h = u.useRef(!1), g = m ? f || !!m.closest("form") : !0, [w = !1, b] = Pe({
      prop: o,
      defaultProp: a,
      onChange: l
    });
    return /* @__PURE__ */ d.jsxs(tk, { scope: r, checked: w, disabled: s, children: [
      /* @__PURE__ */ d.jsx(
        W.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": l1(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...p,
          ref: y,
          onClick: $(e.onClick, (x) => {
            b((C) => !C), g && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ d.jsx(
        nk,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: w,
          required: i,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
i1.displayName = ld;
var s1 = "SwitchThumb", c1 = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = rk(s1, r);
    return /* @__PURE__ */ d.jsx(
      W.span,
      {
        "data-state": l1(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
c1.displayName = s1;
var nk = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = u.useRef(null), i = Tn(r), s = Qo(t);
  return u.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && p) {
      const m = new Event("click", { bubbles: n });
      p.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ d.jsx(
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
function l1(e) {
  return e ? "checked" : "unchecked";
}
var u1 = i1, ok = c1;
const ak = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  u1,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ d.jsx(
      ok,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
ak.displayName = u1.displayName;
const ik = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx("div", { className: "relative w-full overflow-auto table-container", children: /* @__PURE__ */ d.jsx(
  "table",
  {
    ref: r,
    className: M("w-full caption-bottom text-sm", e),
    style: { borderCollapse: "collapse" },
    ...t
  }
) }));
ik.displayName = "Table";
const sk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx("thead", { ref: r, className: M("[&_tr]:border-b", e), ...t }));
sk.displayName = "TableHeader";
const ck = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "tbody",
  {
    ref: r,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
ck.displayName = "TableBody";
const lk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: r,
    className: M(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
lk.displayName = "TableFooter";
const uk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
uk.displayName = "TableRow";
const dk = u.forwardRef(({ className: e, sticky: t, ...r }, n) => /* @__PURE__ */ d.jsx(
  "th",
  {
    ref: n,
    className: M(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      t === "left" && "sticky sticky-left",
      t === "right" && "sticky sticky-right",
      e
    ),
    ...r
  }
));
dk.displayName = "TableHead";
const fk = u.forwardRef(({ className: e, sticky: t, ...r }, n) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: n,
    className: M(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0",
      t === "left" && "sticky sticky-left",
      t === "right" && "sticky sticky-right",
      e
    ),
    ...r
  }
));
fk.displayName = "TableCell";
const pk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: r,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
pk.displayName = "TableCaption";
var ud = "Tabs", [mk, LF] = Te(ud, [
  Vt
]), d1 = Vt(), [hk, dd] = mk(ud), f1 = u.forwardRef(
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
    } = e, f = Tt(s), [p, m] = Pe({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ d.jsx(
      hk,
      {
        scope: r,
        baseId: _e(),
        value: p,
        onValueChange: m,
        orientation: i,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ d.jsx(
          W.div,
          {
            dir: f,
            "data-orientation": i,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
f1.displayName = ud;
var p1 = "TabsList", m1 = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = dd(p1, r), i = d1(r);
    return /* @__PURE__ */ d.jsx(
      ma,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ d.jsx(
          W.div,
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
m1.displayName = p1;
var h1 = "TabsTrigger", v1 = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = dd(h1, r), s = d1(r), c = b1(i.baseId, n), l = w1(i.baseId, n), f = n === i.value;
    return /* @__PURE__ */ d.jsx(
      ha,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ d.jsx(
          W.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": l,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: $(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: $(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(n);
            }),
            onFocus: $(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !f && !o && p && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
v1.displayName = h1;
var g1 = "TabsContent", y1 = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = dd(g1, r), c = b1(s.baseId, n), l = w1(s.baseId, n), f = n === s.value, p = u.useRef(f);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ d.jsx(Ce, { present: o || f, children: ({ present: m }) => /* @__PURE__ */ d.jsx(
      W.div,
      {
        "data-state": f ? "active" : "inactive",
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
y1.displayName = g1;
function b1(e, t) {
  return `${e}-trigger-${t}`;
}
function w1(e, t) {
  return `${e}-content-${t}`;
}
var vk = f1, x1 = m1, S1 = v1, C1 = y1;
const FF = vk, gk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  x1,
  {
    ref: r,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
gk.displayName = x1.displayName;
const yk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  S1,
  {
    ref: r,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
yk.displayName = S1.displayName;
const bk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  C1,
  {
    ref: r,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
bk.displayName = C1.displayName;
const wk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
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
wk.displayName = "Textarea";
var fd = "ToastProvider", [pd, xk, Sk] = lr("Toast"), [_1, qF] = Te("Toast", [Sk]), [Ck, Sa] = _1(fd), E1 = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = u.useState(null), [l, f] = u.useState(0), p = u.useRef(!1), m = u.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${fd}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d.jsx(pd.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
    Ck,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: l,
      viewport: s,
      onViewportChange: c,
      onToastAdd: u.useCallback(() => f((v) => v + 1), []),
      onToastRemove: u.useCallback(() => f((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
E1.displayName = fd;
var P1 = "ToastViewport", _k = ["F8"], Il = "toast.viewportPause", $l = "toast.viewportResume", T1 = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = _k,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Sa(P1, r), s = xk(r), c = u.useRef(null), l = u.useRef(null), f = u.useRef(null), p = u.useRef(null), m = ne(t, p, i.onViewportChange), v = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
    u.useEffect(() => {
      const g = (w) => {
        var x;
        n.length !== 0 && n.every((C) => w[C] || w.code === C) && ((x = p.current) == null || x.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [n]), u.useEffect(() => {
      const g = c.current, w = p.current;
      if (y && g && w) {
        const b = () => {
          if (!i.isClosePausedRef.current) {
            const S = new CustomEvent(Il);
            w.dispatchEvent(S), i.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (i.isClosePausedRef.current) {
            const S = new CustomEvent($l);
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
    const h = u.useCallback(
      ({ tabbingDirection: g }) => {
        const b = s().map((x) => {
          const C = x.ref.current, _ = [C, ...$k(C)];
          return g === "forwards" ? _ : _.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [s]
    );
    return u.useEffect(() => {
      const g = p.current;
      if (g) {
        const w = (b) => {
          var _, S, E;
          const x = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !x) {
            const N = document.activeElement, T = b.shiftKey;
            if (b.target === g && T) {
              (_ = l.current) == null || _.focus();
              return;
            }
            const q = h({ tabbingDirection: T ? "backwards" : "forwards" }), F = q.findIndex((R) => R === N);
            ti(q.slice(F + 1)) ? b.preventDefault() : T ? (S = l.current) == null || S.focus() : (E = f.current) == null || E.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [s, h]), /* @__PURE__ */ d.jsxs(
      RR,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ d.jsx(
            Ll,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                ti(g);
              }
            }
          ),
          /* @__PURE__ */ d.jsx(pd.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(W.ol, { tabIndex: -1, ...a, ref: m }) }),
          y && /* @__PURE__ */ d.jsx(
            Ll,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                ti(g);
              }
            }
          )
        ]
      }
    );
  }
);
T1.displayName = P1;
var R1 = "ToastFocusProxy", Ll = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = Sa(R1, r);
    return /* @__PURE__ */ d.jsx(
      Bn,
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
Ll.displayName = R1;
var Ca = "Toast", Ek = "toast.swipeStart", Pk = "toast.swipeMove", Tk = "toast.swipeCancel", Rk = "toast.swipeEnd", N1 = u.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s = !0, c] = Pe({
      prop: n,
      defaultProp: o,
      onChange: a
    });
    return /* @__PURE__ */ d.jsx(Ce, { present: r || s, children: /* @__PURE__ */ d.jsx(
      Ok,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: me(e.onPause),
        onResume: me(e.onResume),
        onSwipeStart: $(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: $(e.onSwipeMove, (l) => {
          const { x: f, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: $(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: $(e.onSwipeEnd, (l) => {
          const { x: f, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), c(!1);
        })
      }
    ) });
  }
);
N1.displayName = Ca;
var [Nk, Mk] = _1(Ca, {
  onClose() {
  }
}), Ok = u.forwardRef(
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
      onSwipeStart: f,
      onSwipeMove: p,
      onSwipeCancel: m,
      onSwipeEnd: v,
      ...y
    } = e, h = Sa(Ca, r), [g, w] = u.useState(null), b = ne(t, (R) => w(R)), x = u.useRef(null), C = u.useRef(null), _ = o || h.duration, S = u.useRef(0), E = u.useRef(_), N = u.useRef(0), { onToastAdd: T, onToastRemove: k } = h, D = me(() => {
      var I;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((I = h.viewport) == null || I.focus()), i();
    }), q = u.useCallback(
      (R) => {
        !R || R === 1 / 0 || (window.clearTimeout(N.current), S.current = (/* @__PURE__ */ new Date()).getTime(), N.current = window.setTimeout(D, R));
      },
      [D]
    );
    u.useEffect(() => {
      const R = h.viewport;
      if (R) {
        const I = () => {
          q(E.current), l == null || l();
        }, j = () => {
          const G = (/* @__PURE__ */ new Date()).getTime() - S.current;
          E.current = E.current - G, window.clearTimeout(N.current), c == null || c();
        };
        return R.addEventListener(Il, j), R.addEventListener($l, I), () => {
          R.removeEventListener(Il, j), R.removeEventListener($l, I);
        };
      }
    }, [h.viewport, _, c, l, q]), u.useEffect(() => {
      a && !h.isClosePausedRef.current && q(_);
    }, [a, _, h.isClosePausedRef, q]), u.useEffect(() => (T(), () => k()), [T, k]);
    const F = u.useMemo(() => g ? I1(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      F && /* @__PURE__ */ d.jsx(
        Ak,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: F
        }
      ),
      /* @__PURE__ */ d.jsx(Nk, { scope: r, onClose: D, children: Cn.createPortal(
        /* @__PURE__ */ d.jsx(pd.ItemSlot, { scope: r, children: /* @__PURE__ */ d.jsx(
          TR,
          {
            asChild: !0,
            onEscapeKeyDown: $(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || D(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ d.jsx(
              W.li,
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
                onKeyDown: $(e.onKeyDown, (R) => {
                  R.key === "Escape" && (s == null || s(R.nativeEvent), R.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, D()));
                }),
                onPointerDown: $(e.onPointerDown, (R) => {
                  R.button === 0 && (x.current = { x: R.clientX, y: R.clientY });
                }),
                onPointerMove: $(e.onPointerMove, (R) => {
                  if (!x.current) return;
                  const I = R.clientX - x.current.x, j = R.clientY - x.current.y, G = !!C.current, B = ["left", "right"].includes(h.swipeDirection), L = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, J = B ? L(0, I) : 0, te = B ? 0 : L(0, j), A = R.pointerType === "touch" ? 10 : 2, V = { x: J, y: te }, U = { originalEvent: R, delta: V };
                  G ? (C.current = V, oo(Pk, p, U, {
                    discrete: !1
                  })) : $f(V, h.swipeDirection, A) ? (C.current = V, oo(Ek, f, U, {
                    discrete: !1
                  }), R.target.setPointerCapture(R.pointerId)) : (Math.abs(I) > A || Math.abs(j) > A) && (x.current = null);
                }),
                onPointerUp: $(e.onPointerUp, (R) => {
                  const I = C.current, j = R.target;
                  if (j.hasPointerCapture(R.pointerId) && j.releasePointerCapture(R.pointerId), C.current = null, x.current = null, I) {
                    const G = R.currentTarget, B = { originalEvent: R, delta: I };
                    $f(I, h.swipeDirection, h.swipeThreshold) ? oo(Rk, v, B, {
                      discrete: !0
                    }) : oo(
                      Tk,
                      m,
                      B,
                      {
                        discrete: !0
                      }
                    ), G.addEventListener("click", (L) => L.preventDefault(), {
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
), Ak = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Sa(Ca, t), [a, i] = u.useState(!1), [s, c] = u.useState(!1);
  return kk(() => i(!0)), u.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ d.jsx(ur, { asChild: !0, children: /* @__PURE__ */ d.jsx(Bn, { ...n, children: a && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, jk = "ToastTitle", M1 = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(W.div, { ...n, ref: t });
  }
);
M1.displayName = jk;
var Dk = "ToastDescription", O1 = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(W.div, { ...n, ref: t });
  }
);
O1.displayName = Dk;
var A1 = "ToastAction", j1 = u.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ d.jsx(k1, { altText: r, asChild: !0, children: /* @__PURE__ */ d.jsx(md, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${A1}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
j1.displayName = A1;
var D1 = "ToastClose", md = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = Mk(D1, r);
    return /* @__PURE__ */ d.jsx(k1, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      W.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: $(e.onClick, o.onClose)
      }
    ) });
  }
);
md.displayName = D1;
var k1 = u.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ d.jsx(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function I1(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Ik(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...I1(n));
    }
  }), t;
}
function oo(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? cn(o, a) : o.dispatchEvent(a);
}
var $f = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function kk(e = () => {
}) {
  const t = me(e);
  Ee(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function Ik(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function $k(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function ti(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var Lk = E1, $1 = T1, L1 = N1, F1 = M1, q1 = O1, B1 = j1, W1 = md;
const Fk = Lk, qk = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, H1 = u.forwardRef(({ className: e, position: t = "bottom-right", ...r }, n) => /* @__PURE__ */ d.jsx(
  $1,
  {
    ref: n,
    className: M(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${qk[t]}`,
      e
    ),
    ...r
  }
));
H1.displayName = $1.displayName;
const Bk = Nt(
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
), V1 = u.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ d.jsx(
  L1,
  {
    ref: n,
    className: M(Bk({ variant: t }), e),
    ...r
  }
));
V1.displayName = L1.displayName;
const Wk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  B1,
  {
    ref: r,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Wk.displayName = B1.displayName;
const G1 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  W1,
  {
    ref: r,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ d.jsx(Ko, { className: "h-4 w-4" })
  }
));
G1.displayName = W1.displayName;
const z1 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  F1,
  {
    ref: r,
    className: M("text-sm font-semibold", e),
    ...t
  }
));
z1.displayName = F1.displayName;
const Y1 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  q1,
  {
    ref: r,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
Y1.displayName = q1.displayName;
const Hk = 1, Vk = 1e4;
let ri = 0;
function Gk() {
  return ri = (ri + 1) % Number.MAX_SAFE_INTEGER, ri.toString();
}
const ni = /* @__PURE__ */ new Map(), Lf = (e) => {
  if (ni.has(e))
    return;
  const t = setTimeout(() => {
    ni.delete(e), sn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Vk);
  ni.set(e, t);
}, zk = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Hk)
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
      return r ? Lf(r) : e.toasts.forEach((n) => {
        Lf(n.id);
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
}, yo = [];
let bo = { toasts: [] };
function sn(e) {
  bo = zk(bo, e), yo.forEach((t) => {
    t(bo);
  });
}
function Yk({ ...e }) {
  const t = Gk(), r = (o) => sn({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => sn({ type: "DISMISS_TOAST", toastId: t });
  return sn({
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
function Uk() {
  const [e, t] = u.useState(bo);
  return u.useEffect(() => (yo.push(t), () => {
    const r = yo.indexOf(t);
    r > -1 && yo.splice(r, 1);
  }), [e]), {
    ...e,
    toast: Yk,
    dismiss: (r) => sn({ type: "DISMISS_TOAST", toastId: r })
  };
}
function BF() {
  const { toasts: e } = Uk();
  return /* @__PURE__ */ d.jsxs(Fk, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ d.jsxs(V1, { ...a, children: [
        /* @__PURE__ */ d.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ d.jsx(z1, { children: r }),
          n && /* @__PURE__ */ d.jsx(Y1, { children: n })
        ] }),
        o,
        /* @__PURE__ */ d.jsx(G1, {})
      ] }, t);
    }),
    /* @__PURE__ */ d.jsx(H1, {})
  ] });
}
var Kk = "Toggle", hd = u.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n = !1, onPressedChange: o, ...a } = e, [i = !1, s] = Pe({
    prop: r,
    onChange: o,
    defaultProp: n
  });
  return /* @__PURE__ */ d.jsx(
    W.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: $(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
hd.displayName = Kk;
var U1 = hd;
const K1 = Nt(
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
), Xk = u.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ d.jsx(
  U1,
  {
    ref: o,
    className: M(K1({ variant: t, size: r, className: e })),
    ...n
  }
));
Xk.displayName = U1.displayName;
var Ur = "ToggleGroup", [X1, WF] = Te(Ur, [
  Vt
]), Z1 = Vt(), vd = O.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single") {
    const o = n;
    return /* @__PURE__ */ d.jsx(Zk, { ...o, ref: t });
  }
  if (r === "multiple") {
    const o = n;
    return /* @__PURE__ */ d.jsx(Qk, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Ur}\``);
});
vd.displayName = Ur;
var [Q1, J1] = X1(Ur), Zk = O.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Pe({
    prop: r,
    defaultProp: n,
    onChange: o
  });
  return /* @__PURE__ */ d.jsx(
    Q1,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: s,
      onItemDeactivate: O.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ d.jsx(eS, { ...a, ref: t })
    }
  );
}), Qk = O.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Pe({
    prop: r,
    defaultProp: n,
    onChange: o
  }), c = O.useCallback(
    (f) => s((p = []) => [...p, f]),
    [s]
  ), l = O.useCallback(
    (f) => s((p = []) => p.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ d.jsx(
    Q1,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ d.jsx(eS, { ...a, ref: t })
    }
  );
});
vd.displayName = Ur;
var [Jk, eI] = X1(Ur), eS = O.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = Z1(r), f = Tt(i), p = { role: "group", dir: f, ...c };
    return /* @__PURE__ */ d.jsx(Jk, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ d.jsx(
      ma,
      {
        asChild: !0,
        ...l,
        orientation: a,
        dir: f,
        loop: s,
        children: /* @__PURE__ */ d.jsx(W.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ d.jsx(W.div, { ...p, ref: t }) });
  }
), Io = "ToggleGroupItem", tS = O.forwardRef(
  (e, t) => {
    const r = J1(Io, e.__scopeToggleGroup), n = eI(Io, e.__scopeToggleGroup), o = Z1(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = O.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ d.jsx(
      ha,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ d.jsx(Ff, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ d.jsx(Ff, { ...s, ref: t });
  }
);
tS.displayName = Io;
var Ff = O.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = J1(Io, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ d.jsx(
      hd,
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
), rS = vd, nS = tS;
const oS = u.createContext({
  size: "default",
  variant: "default"
}), tI = u.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ d.jsx(
  rS,
  {
    ref: a,
    className: M("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ d.jsx(oS.Provider, { value: { variant: t, size: r }, children: n })
  }
));
tI.displayName = rS.displayName;
const rI = u.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = u.useContext(oS);
  return /* @__PURE__ */ d.jsx(
    nS,
    {
      ref: a,
      className: M(
        K1({
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
rI.displayName = nS.displayName;
var [_a, HF] = Te("Tooltip", [
  Wt
]), Ea = Wt(), aS = "TooltipProvider", nI = 700, Fl = "tooltip.open", [oI, gd] = _a(aS), iS = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = nI,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, [i, s] = u.useState(!0), c = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const f = l.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ d.jsx(
    oI,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: r,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), s(!1);
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: u.useCallback((f) => {
        c.current = f;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
iS.displayName = aS;
var Pa = "Tooltip", [aI, Hn] = _a(Pa), sS = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o = !1,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = gd(Pa, e.__scopeTooltip), l = Ea(t), [f, p] = u.useState(null), m = _e(), v = u.useRef(0), y = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = u.useRef(!1), [w = !1, b] = Pe({
    prop: n,
    defaultProp: o,
    onChange: (E) => {
      E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Fl))) : c.onClose(), a == null || a(E);
    }
  }), x = u.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), C = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, b(!0);
  }, [b]), _ = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, b(!1);
  }, [b]), S = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, b(!0), v.current = 0;
    }, h);
  }, [h, b]);
  return u.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ d.jsx(Dn, { ...l, children: /* @__PURE__ */ d.jsx(
    aI,
    {
      scope: t,
      contentId: m,
      open: w,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: u.useCallback(() => {
        c.isOpenDelayed ? S() : C();
      }, [c.isOpenDelayed, S, C]),
      onTriggerLeave: u.useCallback(() => {
        y ? _() : (window.clearTimeout(v.current), v.current = 0);
      }, [_, y]),
      onOpen: C,
      onClose: _,
      disableHoverableContent: y,
      children: r
    }
  ) });
};
sS.displayName = Pa;
var ql = "TooltipTrigger", cS = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Hn(ql, r), a = gd(ql, r), i = Ea(r), s = u.useRef(null), c = ne(t, s, o.onTriggerChange), l = u.useRef(!1), f = u.useRef(!1), p = u.useCallback(() => l.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ d.jsx(kn, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      W.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: $(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: $(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: $(e.onPointerDown, () => {
          l.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: $(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: $(e.onBlur, o.onClose),
        onClick: $(e.onClick, o.onClose)
      }
    ) });
  }
);
cS.displayName = ql;
var yd = "TooltipPortal", [iI, sI] = _a(yd, {
  forceMount: void 0
}), lS = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = Hn(yd, t);
  return /* @__PURE__ */ d.jsx(iI, { scope: t, forceMount: r, children: /* @__PURE__ */ d.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ d.jsx(ur, { asChild: !0, container: o, children: n }) }) });
};
lS.displayName = yd;
var jr = "TooltipContent", uS = u.forwardRef(
  (e, t) => {
    const r = sI(jr, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = Hn(jr, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(Ce, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ d.jsx(dS, { side: o, ...a, ref: t }) : /* @__PURE__ */ d.jsx(cI, { side: o, ...a, ref: t }) });
  }
), cI = u.forwardRef((e, t) => {
  const r = Hn(jr, e.__scopeTooltip), n = gd(jr, e.__scopeTooltip), o = u.useRef(null), a = ne(t, o), [i, s] = u.useState(null), { trigger: c, onClose: l } = r, f = o.current, { onPointerInTransitChange: p } = n, m = u.useCallback(() => {
    s(null), p(!1);
  }, [p]), v = u.useCallback(
    (y, h) => {
      const g = y.currentTarget, w = { x: y.clientX, y: y.clientY }, b = fI(w, g.getBoundingClientRect()), x = pI(w, b), C = mI(h.getBoundingClientRect()), _ = vI([...x, ...C]);
      s(_), p(!0);
    },
    [p]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (c && f) {
      const y = (g) => v(g, f), h = (g) => v(g, c);
      return c.addEventListener("pointerleave", y), f.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", y), f.removeEventListener("pointerleave", h);
      };
    }
  }, [c, f, v, m]), u.useEffect(() => {
    if (i) {
      const y = (h) => {
        const g = h.target, w = { x: h.clientX, y: h.clientY }, b = (c == null ? void 0 : c.contains(g)) || (f == null ? void 0 : f.contains(g)), x = !hI(w, i);
        b ? m() : x && (m(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, f, i, l, m]), /* @__PURE__ */ d.jsx(dS, { ...e, ref: a });
}), [lI, uI] = _a(Pa, { isInside: !1 }), dS = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = Hn(jr, r), l = Ea(r), { onClose: f } = c;
    return u.useEffect(() => (document.addEventListener(Fl, f), () => document.removeEventListener(Fl, f)), [f]), u.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(c.trigger) && f();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, f]), /* @__PURE__ */ d.jsx(
      Bt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ d.jsxs(
          la,
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
              /* @__PURE__ */ d.jsx(dv, { children: n }),
              /* @__PURE__ */ d.jsx(lI, { scope: r, isInside: !0, children: /* @__PURE__ */ d.jsx(dw, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
uS.displayName = jr;
var fS = "TooltipArrow", dI = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Ea(r);
    return uI(
      fS,
      r
    ).isInside ? null : /* @__PURE__ */ d.jsx(ua, { ...o, ...n, ref: t });
  }
);
dI.displayName = fS;
function fI(e, t) {
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
function pI(e, t, r = 5) {
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
function mI(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function hI(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, f = t[i].y;
    c > n != f > n && r < (l - s) * (n - c) / (f - c) + s && (o = !o);
  }
  return o;
}
function vI(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), gI(t);
}
function gI(e) {
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
var yI = iS, bI = sS, wI = cS, xI = lS, pS = uS;
const VF = yI, GF = bI, zF = wI, SI = u.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ d.jsx(xI, { children: /* @__PURE__ */ d.jsx(
  pS,
  {
    ref: n,
    sideOffset: t,
    className: M(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
SI.displayName = pS.displayName;
var oi, qf;
function ot() {
  if (qf) return oi;
  qf = 1;
  var e = Array.isArray;
  return oi = e, oi;
}
var ai, Bf;
function mS() {
  if (Bf) return ai;
  Bf = 1;
  var e = typeof Un == "object" && Un && Un.Object === Object && Un;
  return ai = e, ai;
}
var ii, Wf;
function bt() {
  if (Wf) return ii;
  Wf = 1;
  var e = mS(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return ii = r, ii;
}
var si, Hf;
function Vn() {
  if (Hf) return si;
  Hf = 1;
  var e = bt(), t = e.Symbol;
  return si = t, si;
}
var ci, Vf;
function CI() {
  if (Vf) return ci;
  Vf = 1;
  var e = Vn(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = e ? e.toStringTag : void 0;
  function a(i) {
    var s = r.call(i, o), c = i[o];
    try {
      i[o] = void 0;
      var l = !0;
    } catch {
    }
    var f = n.call(i);
    return l && (s ? i[o] = c : delete i[o]), f;
  }
  return ci = a, ci;
}
var li, Gf;
function _I() {
  if (Gf) return li;
  Gf = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return li = r, li;
}
var ui, zf;
function fr() {
  if (zf) return ui;
  zf = 1;
  var e = Vn(), t = CI(), r = _I(), n = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : n : a && a in Object(s) ? t(s) : r(s);
  }
  return ui = i, ui;
}
var di, Yf;
function pr() {
  if (Yf) return di;
  Yf = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return di = e, di;
}
var fi, Uf;
function Gn() {
  if (Uf) return fi;
  Uf = 1;
  var e = fr(), t = pr(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && e(o) == r;
  }
  return fi = n, fi;
}
var pi, Kf;
function bd() {
  if (Kf) return pi;
  Kf = 1;
  var e = ot(), t = Gn(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return pi = o, pi;
}
var mi, Xf;
function Ut() {
  if (Xf) return mi;
  Xf = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return mi = e, mi;
}
var hi, Zf;
function wd() {
  if (Zf) return hi;
  Zf = 1;
  var e = fr(), t = Ut(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == o || c == r || c == a;
  }
  return hi = i, hi;
}
var vi, Qf;
function EI() {
  if (Qf) return vi;
  Qf = 1;
  var e = bt(), t = e["__core-js_shared__"];
  return vi = t, vi;
}
var gi, Jf;
function PI() {
  if (Jf) return gi;
  Jf = 1;
  var e = EI(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return gi = r, gi;
}
var yi, ep;
function hS() {
  if (ep) return yi;
  ep = 1;
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
  return yi = r, yi;
}
var bi, tp;
function TI() {
  if (tp) return bi;
  tp = 1;
  var e = wd(), t = PI(), r = Ut(), n = hS(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, f = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!r(m) || t(m))
      return !1;
    var v = e(m) ? f : a;
    return v.test(n(m));
  }
  return bi = p, bi;
}
var wi, rp;
function RI() {
  if (rp) return wi;
  rp = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return wi = e, wi;
}
var xi, np;
function mr() {
  if (np) return xi;
  np = 1;
  var e = TI(), t = RI();
  function r(n, o) {
    var a = t(n, o);
    return e(a) ? a : void 0;
  }
  return xi = r, xi;
}
var Si, op;
function Ta() {
  if (op) return Si;
  op = 1;
  var e = mr(), t = e(Object, "create");
  return Si = t, Si;
}
var Ci, ap;
function NI() {
  if (ap) return Ci;
  ap = 1;
  var e = Ta();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ci = t, Ci;
}
var _i, ip;
function MI() {
  if (ip) return _i;
  ip = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return _i = e, _i;
}
var Ei, sp;
function OI() {
  if (sp) return Ei;
  sp = 1;
  var e = Ta(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return Ei = o, Ei;
}
var Pi, cp;
function AI() {
  if (cp) return Pi;
  cp = 1;
  var e = Ta(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : r.call(a, o);
  }
  return Pi = n, Pi;
}
var Ti, lp;
function jI() {
  if (lp) return Ti;
  lp = 1;
  var e = Ta(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && o === void 0 ? t : o, this;
  }
  return Ti = r, Ti;
}
var Ri, up;
function DI() {
  if (up) return Ri;
  up = 1;
  var e = NI(), t = MI(), r = OI(), n = AI(), o = jI();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Ri = a, Ri;
}
var Ni, dp;
function kI() {
  if (dp) return Ni;
  dp = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ni = e, Ni;
}
var Mi, fp;
function xd() {
  if (fp) return Mi;
  fp = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Mi = e, Mi;
}
var Oi, pp;
function Ra() {
  if (pp) return Oi;
  pp = 1;
  var e = xd();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (e(r[o][0], n))
        return o;
    return -1;
  }
  return Oi = t, Oi;
}
var Ai, mp;
function II() {
  if (mp) return Ai;
  mp = 1;
  var e = Ra(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return Ai = n, Ai;
}
var ji, hp;
function $I() {
  if (hp) return ji;
  hp = 1;
  var e = Ra();
  function t(r) {
    var n = this.__data__, o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return ji = t, ji;
}
var Di, vp;
function LI() {
  if (vp) return Di;
  vp = 1;
  var e = Ra();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Di = t, Di;
}
var ki, gp;
function FI() {
  if (gp) return ki;
  gp = 1;
  var e = Ra();
  function t(r, n) {
    var o = this.__data__, a = e(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return ki = t, ki;
}
var Ii, yp;
function Na() {
  if (yp) return Ii;
  yp = 1;
  var e = kI(), t = II(), r = $I(), n = LI(), o = FI();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Ii = a, Ii;
}
var $i, bp;
function Sd() {
  if (bp) return $i;
  bp = 1;
  var e = mr(), t = bt(), r = e(t, "Map");
  return $i = r, $i;
}
var Li, wp;
function qI() {
  if (wp) return Li;
  wp = 1;
  var e = DI(), t = Na(), r = Sd();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Li = n, Li;
}
var Fi, xp;
function BI() {
  if (xp) return Fi;
  xp = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Fi = e, Fi;
}
var qi, Sp;
function Ma() {
  if (Sp) return qi;
  Sp = 1;
  var e = BI();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return qi = t, qi;
}
var Bi, Cp;
function WI() {
  if (Cp) return Bi;
  Cp = 1;
  var e = Ma();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Bi = t, Bi;
}
var Wi, _p;
function HI() {
  if (_p) return Wi;
  _p = 1;
  var e = Ma();
  function t(r) {
    return e(this, r).get(r);
  }
  return Wi = t, Wi;
}
var Hi, Ep;
function VI() {
  if (Ep) return Hi;
  Ep = 1;
  var e = Ma();
  function t(r) {
    return e(this, r).has(r);
  }
  return Hi = t, Hi;
}
var Vi, Pp;
function GI() {
  if (Pp) return Vi;
  Pp = 1;
  var e = Ma();
  function t(r, n) {
    var o = e(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return Vi = t, Vi;
}
var Gi, Tp;
function Cd() {
  if (Tp) return Gi;
  Tp = 1;
  var e = qI(), t = WI(), r = HI(), n = VI(), o = GI();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Gi = a, Gi;
}
var zi, Rp;
function zI() {
  if (Rp) return zi;
  Rp = 1;
  var e = Cd(), t = "Expected a function";
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
  return r.Cache = e, zi = r, zi;
}
var Yi, Np;
function YI() {
  if (Np) return Yi;
  Np = 1;
  var e = zI(), t = 500;
  function r(n) {
    var o = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return Yi = r, Yi;
}
var Ui, Mp;
function UI() {
  if (Mp) return Ui;
  Mp = 1;
  var e = YI(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(r, "$1") : s || i);
    }), a;
  });
  return Ui = n, Ui;
}
var Ki, Op;
function vS() {
  if (Op) return Ki;
  Op = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Ki = e, Ki;
}
var Xi, Ap;
function KI() {
  if (Ap) return Xi;
  Ap = 1;
  var e = Vn(), t = vS(), r = ot(), n = Gn(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
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
  return Xi = i, Xi;
}
var Zi, jp;
function gS() {
  if (jp) return Zi;
  jp = 1;
  var e = KI();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Zi = t, Zi;
}
var Qi, Dp;
function yS() {
  if (Dp) return Qi;
  Dp = 1;
  var e = ot(), t = bd(), r = UI(), n = gS();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return Qi = o, Qi;
}
var Ji, kp;
function Oa() {
  if (kp) return Ji;
  kp = 1;
  var e = Gn();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Ji = t, Ji;
}
var es, Ip;
function _d() {
  if (Ip) return es;
  Ip = 1;
  var e = yS(), t = Oa();
  function r(n, o) {
    o = e(o, n);
    for (var a = 0, i = o.length; n != null && a < i; )
      n = n[t(o[a++])];
    return a && a == i ? n : void 0;
  }
  return es = r, es;
}
var ts, $p;
function bS() {
  if ($p) return ts;
  $p = 1;
  var e = _d();
  function t(r, n, o) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? o : a;
  }
  return ts = t, ts;
}
bS();
var rs, Lp;
function XI() {
  if (Lp) return rs;
  Lp = 1;
  function e(t) {
    return t == null;
  }
  return rs = e, rs;
}
var ZI = XI();
const QI = /* @__PURE__ */ vt(ZI);
var ns, Fp;
function JI() {
  if (Fp) return ns;
  Fp = 1;
  var e = fr(), t = ot(), r = pr(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return ns = o, ns;
}
var e2 = JI();
const wS = /* @__PURE__ */ vt(e2);
var t2 = wd();
const $o = /* @__PURE__ */ vt(t2);
var r2 = Ut();
const xS = /* @__PURE__ */ vt(r2);
var ao = { exports: {} }, he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qp;
function n2() {
  if (qp) return he;
  qp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
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
            case f:
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
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return he.ContextConsumer = i, he.ContextProvider = a, he.Element = e, he.ForwardRef = c, he.Fragment = r, he.Lazy = m, he.Memo = p, he.Portal = t, he.Profiler = o, he.StrictMode = n, he.Suspense = l, he.SuspenseList = f, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(g) {
    return h(g) === i;
  }, he.isContextProvider = function(g) {
    return h(g) === a;
  }, he.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, he.isForwardRef = function(g) {
    return h(g) === c;
  }, he.isFragment = function(g) {
    return h(g) === r;
  }, he.isLazy = function(g) {
    return h(g) === m;
  }, he.isMemo = function(g) {
    return h(g) === p;
  }, he.isPortal = function(g) {
    return h(g) === t;
  }, he.isProfiler = function(g) {
    return h(g) === o;
  }, he.isStrictMode = function(g) {
    return h(g) === n;
  }, he.isSuspense = function(g) {
    return h(g) === l;
  }, he.isSuspenseList = function(g) {
    return h(g) === f;
  }, he.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === l || g === f || g === v || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === a || g.$$typeof === i || g.$$typeof === c || g.$$typeof === y || g.getModuleId !== void 0);
  }, he.typeOf = h, he;
}
var ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bp;
function o2() {
  return Bp || (Bp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, h = !1, g = !1, w = !1, b = !1, x;
    x = Symbol.for("react.module.reference");
    function C(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === o || b || Y === n || Y === l || Y === f || w || Y === v || y || h || g || typeof Y == "object" && Y !== null && (Y.$$typeof === m || Y.$$typeof === p || Y.$$typeof === a || Y.$$typeof === i || Y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === x || Y.getModuleId !== void 0));
    }
    function _(Y) {
      if (typeof Y == "object" && Y !== null) {
        var ke = Y.$$typeof;
        switch (ke) {
          case e:
            var $e = Y.type;
            switch ($e) {
              case r:
              case o:
              case n:
              case l:
              case f:
                return $e;
              default:
                var Le = $e && $e.$$typeof;
                switch (Le) {
                  case s:
                  case i:
                  case c:
                  case m:
                  case p:
                  case a:
                    return Le;
                  default:
                    return ke;
                }
            }
          case t:
            return ke;
        }
      }
    }
    var S = i, E = a, N = e, T = c, k = r, D = m, q = p, F = t, R = o, I = n, j = l, G = f, B = !1, L = !1;
    function J(Y) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(Y) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A(Y) {
      return _(Y) === i;
    }
    function V(Y) {
      return _(Y) === a;
    }
    function U(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function z(Y) {
      return _(Y) === c;
    }
    function ee(Y) {
      return _(Y) === r;
    }
    function H(Y) {
      return _(Y) === m;
    }
    function oe(Y) {
      return _(Y) === p;
    }
    function se(Y) {
      return _(Y) === t;
    }
    function ce(Y) {
      return _(Y) === o;
    }
    function fe(Y) {
      return _(Y) === n;
    }
    function le(Y) {
      return _(Y) === l;
    }
    function Re(Y) {
      return _(Y) === f;
    }
    ve.ContextConsumer = S, ve.ContextProvider = E, ve.Element = N, ve.ForwardRef = T, ve.Fragment = k, ve.Lazy = D, ve.Memo = q, ve.Portal = F, ve.Profiler = R, ve.StrictMode = I, ve.Suspense = j, ve.SuspenseList = G, ve.isAsyncMode = J, ve.isConcurrentMode = te, ve.isContextConsumer = A, ve.isContextProvider = V, ve.isElement = U, ve.isForwardRef = z, ve.isFragment = ee, ve.isLazy = H, ve.isMemo = oe, ve.isPortal = se, ve.isProfiler = ce, ve.isStrictMode = fe, ve.isSuspense = le, ve.isSuspenseList = Re, ve.isValidElementType = C, ve.typeOf = _;
  }()), ve;
}
var Wp;
function a2() {
  return Wp || (Wp = 1, process.env.NODE_ENV === "production" ? ao.exports = n2() : ao.exports = o2()), ao.exports;
}
a2();
var os, Hp;
function SS() {
  if (Hp) return os;
  Hp = 1;
  var e = fr(), t = pr(), r = "[object Number]";
  function n(o) {
    return typeof o == "number" || t(o) && e(o) == r;
  }
  return os = n, os;
}
var as, Vp;
function i2() {
  if (Vp) return as;
  Vp = 1;
  var e = SS();
  function t(r) {
    return e(r) && r != +r;
  }
  return as = t, as;
}
var s2 = i2();
const c2 = /* @__PURE__ */ vt(s2);
var l2 = SS();
const u2 = /* @__PURE__ */ vt(l2);
var io = function(t) {
  return wS(t) && t.indexOf("%") === t.length - 1;
}, Je = function(t) {
  return u2(t) && !c2(t);
}, Lo = function(t) {
  return Je(t) || wS(t);
};
function Bl(e) {
  "@babel/helpers - typeof";
  return Bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bl(e);
}
var d2 = ["viewBox", "children"], f2 = [
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
], Gp = ["points", "pathLength"], is = {
  svg: d2,
  polygon: Gp,
  polyline: Gp
}, CS = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], p2 = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, m2 = function(t, r, n) {
  if (!xS(t) || Bl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    CS.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = p2(i, r, n));
  }), o;
}, h2 = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, v2 = function(t, r, n, o) {
  var a, i = (a = is == null ? void 0 : is[o]) !== null && a !== void 0 ? a : [];
  return !$o(t) && (o && i.includes(r) || f2.includes(r)) || CS.includes(r);
}, _S = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ cC(t) && (o = t.props), !xS(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    v2((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, g2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function y2(e, t) {
  if (e == null) return {};
  var r = b2(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function b2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function w2(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, l = y2(e, g2), f = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, p = _t("recharts-surface", a);
  return /* @__PURE__ */ O.createElement("svg", Wl({}, _S(l, !0, "svg"), {
    className: p,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ O.createElement("title", null, s), /* @__PURE__ */ O.createElement("desc", null, c), t);
}
var x2 = process.env.NODE_ENV !== "production", wo = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (x2 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, ss, zp;
function S2() {
  if (zp) return ss;
  zp = 1;
  function e(t, r, n) {
    var o = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + r];
    return i;
  }
  return ss = e, ss;
}
var cs, Yp;
function C2() {
  if (Yp) return cs;
  Yp = 1;
  var e = S2();
  function t(r, n, o) {
    var a = r.length;
    return o = o === void 0 ? a : o, !n && o >= a ? r : e(r, n, o);
  }
  return cs = t, cs;
}
var ls, Up;
function ES() {
  if (Up) return ls;
  Up = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function c(l) {
    return s.test(l);
  }
  return ls = c, ls;
}
var us, Kp;
function _2() {
  if (Kp) return us;
  Kp = 1;
  function e(t) {
    return t.split("");
  }
  return us = e, us;
}
var ds, Xp;
function E2() {
  if (Xp) return ds;
  Xp = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", c = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + c + ")", f = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", y = l + "?", h = "[" + a + "]?", g = "(?:" + v + "(?:" + [f, p, m].join("|") + ")" + h + y + ")*", w = h + y + g, b = "(?:" + [f + s + "?", s, p, m, i].join("|") + ")", x = RegExp(c + "(?=" + c + ")|" + b + w, "g");
  function C(_) {
    return _.match(x) || [];
  }
  return ds = C, ds;
}
var fs, Zp;
function P2() {
  if (Zp) return fs;
  Zp = 1;
  var e = _2(), t = ES(), r = E2();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return fs = n, fs;
}
var ps, Qp;
function T2() {
  if (Qp) return ps;
  Qp = 1;
  var e = C2(), t = ES(), r = P2(), n = gS();
  function o(a) {
    return function(i) {
      i = n(i);
      var s = t(i) ? r(i) : void 0, c = s ? s[0] : i.charAt(0), l = s ? e(s, 1).join("") : i.slice(1);
      return c[a]() + l;
    };
  }
  return ps = o, ps;
}
var ms, Jp;
function R2() {
  if (Jp) return ms;
  Jp = 1;
  var e = T2(), t = e("toUpperCase");
  return ms = t, ms;
}
var N2 = R2();
const PS = /* @__PURE__ */ vt(N2);
function so(e) {
  return function() {
    return e;
  };
}
const TS = Math.cos, Fo = Math.sin, at = Math.sqrt, qo = Math.PI, Aa = 2 * qo, Hl = Math.PI, Vl = 2 * Hl, Jt = 1e-6, M2 = Vl - Jt;
function RS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function O2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return RS;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class A2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? RS : O2(t);
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
    let i = this._x1, s = this._y1, c = n - t, l = o - r, f = i - t, p = s - r, m = f * f + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > Jt) if (!(Math.abs(p * c - l * f) > Jt) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - i, y = o - s, h = c * c + l * l, g = v * v + y * y, w = Math.sqrt(h), b = Math.sqrt(m), x = a * Math.tan((Hl - Math.acos((h + m - g) / (2 * w * b))) / 2), C = x / b, _ = x / w;
      Math.abs(C - 1) > Jt && this._append`L${t + C * f},${r + C * p}`, this._append`A${a},${a},0,0,${+(p * v > f * y)},${this._x1 = t + _ * c},${this._y1 = r + _ * l}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), l = t + s, f = r + c, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${f}` : (Math.abs(this._x1 - l) > Jt || Math.abs(this._y1 - f) > Jt) && this._append`L${l},${f}`, n && (m < 0 && (m = m % Vl + Vl), m > M2 ? this._append`A${n},${n},0,1,${p},${t - s},${r - c}A${n},${n},0,1,${p},${this._x1 = l},${this._y1 = f}` : m > Jt && this._append`A${n},${n},0,${+(m >= Hl)},${p},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function j2(e) {
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
  }, () => new A2(t);
}
const Ed = {
  draw(e, t) {
    const r = at(t / qo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Aa);
  }
}, D2 = {
  draw(e, t) {
    const r = at(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, NS = at(1 / 3), k2 = NS * 2, I2 = {
  draw(e, t) {
    const r = at(t / k2), n = r * NS;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, $2 = {
  draw(e, t) {
    const r = at(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, L2 = 0.8908130915292852, MS = Fo(qo / 10) / Fo(7 * qo / 10), F2 = Fo(Aa / 10) * MS, q2 = -TS(Aa / 10) * MS, B2 = {
  draw(e, t) {
    const r = at(t * L2), n = F2 * r, o = q2 * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = Aa * a / 5, s = TS(i), c = Fo(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, hs = at(3), W2 = {
  draw(e, t) {
    const r = -at(t / (hs * 3));
    e.moveTo(0, r * 2), e.lineTo(-hs * r, -r), e.lineTo(hs * r, -r), e.closePath();
  }
}, Ve = -0.5, Ge = at(3) / 2, Gl = 1 / at(12), H2 = (Gl / 2 + 1) * 3, V2 = {
  draw(e, t) {
    const r = at(t / H2), n = r / 2, o = r * Gl, a = n, i = r * Gl + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(Ve * n - Ge * o, Ge * n + Ve * o), e.lineTo(Ve * a - Ge * i, Ge * a + Ve * i), e.lineTo(Ve * s - Ge * c, Ge * s + Ve * c), e.lineTo(Ve * n + Ge * o, Ve * o - Ge * n), e.lineTo(Ve * a + Ge * i, Ve * i - Ge * a), e.lineTo(Ve * s + Ge * c, Ve * c - Ge * s), e.closePath();
  }
};
function G2(e, t) {
  let r = null, n = j2(o);
  e = typeof e == "function" ? e : so(e || Ed), t = typeof t == "function" ? t : so(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : so(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : so(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
var z2 = ["type", "size", "sizeType"];
function zl() {
  return zl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zl.apply(this, arguments);
}
function em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? em(Object(r), !0).forEach(function(n) {
      Y2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y2(e, t, r) {
  return t = U2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U2(e) {
  var t = K2(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function K2(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function X2(e, t) {
  if (e == null) return {};
  var r = Z2(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var OS = {
  symbolCircle: Ed,
  symbolCross: D2,
  symbolDiamond: I2,
  symbolSquare: $2,
  symbolStar: B2,
  symbolTriangle: W2,
  symbolWye: V2
}, Q2 = Math.PI / 180, J2 = function(t) {
  var r = "symbol".concat(PS(t));
  return OS[r] || Ed;
}, e$ = function(t, r, n) {
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
      var o = 18 * Q2;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, t$ = function(t, r) {
  OS["symbol".concat(PS(t))] = r;
}, AS = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = X2(t, z2), l = tm(tm({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), f = function() {
    var g = J2(n), w = G2().type(g).size(e$(a, s, n));
    return w();
  }, p = l.className, m = l.cx, v = l.cy, y = _S(l, !0);
  return m === +m && v === +v && a === +a ? /* @__PURE__ */ O.createElement("path", zl({}, y, {
    className: _t("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(v, ")"),
    d: f()
  })) : null;
};
AS.registerSymbol = t$;
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function Yl() {
  return Yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yl.apply(this, arguments);
}
function rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function r$(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rm(Object(r), !0).forEach(function(n) {
      bn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, DS(n.key), n);
  }
}
function a$(e, t, r) {
  return t && o$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function i$(e, t, r) {
  return t = Bo(t), s$(e, jS() ? Reflect.construct(t, r || [], Bo(e).constructor) : t.apply(e, r));
}
function s$(e, t) {
  if (t && (Dr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return c$(e);
}
function c$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jS = function() {
    return !!e;
  })();
}
function Bo(e) {
  return Bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bo(e);
}
function l$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ul(e, t);
}
function Ul(e, t) {
  return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ul(e, t);
}
function bn(e, t, r) {
  return t = DS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DS(e) {
  var t = u$(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function u$(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ze = 32, Pd = /* @__PURE__ */ function(e) {
  function t() {
    return n$(this, t), i$(this, t, arguments);
  }
  return l$(t, e), a$(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var o = this.props.inactiveColor, a = Ze / 2, i = Ze / 6, s = Ze / 3, c = n.inactive ? o : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ O.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Ze,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ O.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Ze, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ O.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Ze / 8, "h").concat(Ze, "v").concat(Ze * 3 / 4, "h").concat(-32, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ O.isValidElement(n.legendIcon)) {
          var l = r$({}, n);
          return delete l.legendIcon, /* @__PURE__ */ O.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ O.createElement(AS, {
          fill: c,
          cx: a,
          cy: a,
          size: Ze,
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
      var n = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, c = o.formatter, l = o.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Ze,
        height: Ze
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(v, y) {
        var h = v.formatter || c, g = _t(bn(bn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", v.inactive));
        if (v.type === "none")
          return null;
        var w = $o(v.value) ? null : v.value;
        wo(
          !$o(v.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var b = v.inactive ? l : v.color;
        return /* @__PURE__ */ O.createElement("li", Yl({
          className: g,
          style: p,
          key: "legend-item-".concat(y)
        }, m2(n.props, v, y)), /* @__PURE__ */ O.createElement(w2, {
          width: i,
          height: i,
          viewBox: f,
          style: m
        }, n.renderIcon(v)), /* @__PURE__ */ O.createElement("span", {
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
      return /* @__PURE__ */ O.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(Go);
bn(Pd, "displayName", "Legend");
bn(Pd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var vs, nm;
function d$() {
  if (nm) return vs;
  nm = 1;
  var e = Na();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return vs = t, vs;
}
var gs, om;
function f$() {
  if (om) return gs;
  om = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return gs = e, gs;
}
var ys, am;
function p$() {
  if (am) return ys;
  am = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ys = e, ys;
}
var bs, im;
function m$() {
  if (im) return bs;
  im = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return bs = e, bs;
}
var ws, sm;
function h$() {
  if (sm) return ws;
  sm = 1;
  var e = Na(), t = Sd(), r = Cd(), n = 200;
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
  return ws = o, ws;
}
var xs, cm;
function kS() {
  if (cm) return xs;
  cm = 1;
  var e = Na(), t = d$(), r = f$(), n = p$(), o = m$(), a = h$();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = r, i.prototype.get = n, i.prototype.has = o, i.prototype.set = a, xs = i, xs;
}
var Ss, lm;
function v$() {
  if (lm) return Ss;
  lm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ss = t, Ss;
}
var Cs, um;
function g$() {
  if (um) return Cs;
  um = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Cs = e, Cs;
}
var _s, dm;
function IS() {
  if (dm) return _s;
  dm = 1;
  var e = Cd(), t = v$(), r = g$();
  function n(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, _s = n, _s;
}
var Es, fm;
function y$() {
  if (fm) return Es;
  fm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Es = e, Es;
}
var Ps, pm;
function $S() {
  if (pm) return Ps;
  pm = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Ps = e, Ps;
}
var Ts, mm;
function LS() {
  if (mm) return Ts;
  mm = 1;
  var e = IS(), t = y$(), r = $S(), n = 1, o = 2;
  function a(i, s, c, l, f, p) {
    var m = c & n, v = i.length, y = s.length;
    if (v != y && !(m && y > v))
      return !1;
    var h = p.get(i), g = p.get(s);
    if (h && g)
      return h == s && g == i;
    var w = -1, b = !0, x = c & o ? new e() : void 0;
    for (p.set(i, s), p.set(s, i); ++w < v; ) {
      var C = i[w], _ = s[w];
      if (l)
        var S = m ? l(_, C, w, s, i, p) : l(C, _, w, i, s, p);
      if (S !== void 0) {
        if (S)
          continue;
        b = !1;
        break;
      }
      if (x) {
        if (!t(s, function(E, N) {
          if (!r(x, N) && (C === E || f(C, E, c, l, p)))
            return x.push(N);
        })) {
          b = !1;
          break;
        }
      } else if (!(C === _ || f(C, _, c, l, p))) {
        b = !1;
        break;
      }
    }
    return p.delete(i), p.delete(s), b;
  }
  return Ts = a, Ts;
}
var Rs, hm;
function b$() {
  if (hm) return Rs;
  hm = 1;
  var e = bt(), t = e.Uint8Array;
  return Rs = t, Rs;
}
var Ns, vm;
function w$() {
  if (vm) return Ns;
  vm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return Ns = e, Ns;
}
var Ms, gm;
function Td() {
  if (gm) return Ms;
  gm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return Ms = e, Ms;
}
var Os, ym;
function x$() {
  if (ym) return Os;
  ym = 1;
  var e = Vn(), t = b$(), r = xd(), n = LS(), o = w$(), a = Td(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", y = "[object Set]", h = "[object String]", g = "[object Symbol]", w = "[object ArrayBuffer]", b = "[object DataView]", x = e ? e.prototype : void 0, C = x ? x.valueOf : void 0;
  function _(S, E, N, T, k, D, q) {
    switch (N) {
      case b:
        if (S.byteLength != E.byteLength || S.byteOffset != E.byteOffset)
          return !1;
        S = S.buffer, E = E.buffer;
      case w:
        return !(S.byteLength != E.byteLength || !D(new t(S), new t(E)));
      case c:
      case l:
      case m:
        return r(+S, +E);
      case f:
        return S.name == E.name && S.message == E.message;
      case v:
      case h:
        return S == E + "";
      case p:
        var F = o;
      case y:
        var R = T & i;
        if (F || (F = a), S.size != E.size && !R)
          return !1;
        var I = q.get(S);
        if (I)
          return I == E;
        T |= s, q.set(S, E);
        var j = n(F(S), F(E), T, k, D, q);
        return q.delete(S), j;
      case g:
        if (C)
          return C.call(S) == C.call(E);
    }
    return !1;
  }
  return Os = _, Os;
}
var As, bm;
function FS() {
  if (bm) return As;
  bm = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return As = e, As;
}
var js, wm;
function S$() {
  if (wm) return js;
  wm = 1;
  var e = FS(), t = ot();
  function r(n, o, a) {
    var i = o(n);
    return t(n) ? i : e(i, a(n));
  }
  return js = r, js;
}
var Ds, xm;
function C$() {
  if (xm) return Ds;
  xm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++n < o; ) {
      var s = t[n];
      r(s, n, t) && (i[a++] = s);
    }
    return i;
  }
  return Ds = e, Ds;
}
var ks, Sm;
function _$() {
  if (Sm) return ks;
  Sm = 1;
  function e() {
    return [];
  }
  return ks = e, ks;
}
var Is, Cm;
function E$() {
  if (Cm) return Is;
  Cm = 1;
  var e = C$(), t = _$(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return n.call(i, s);
    }));
  } : t;
  return Is = a, Is;
}
var $s, _m;
function P$() {
  if (_m) return $s;
  _m = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return $s = e, $s;
}
var Ls, Em;
function T$() {
  if (Em) return Ls;
  Em = 1;
  var e = fr(), t = pr(), r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return Ls = n, Ls;
}
var Fs, Pm;
function Rd() {
  if (Pm) return Fs;
  Pm = 1;
  var e = T$(), t = pr(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !o.call(i, "callee");
  };
  return Fs = a, Fs;
}
var nn = { exports: {} }, qs, Tm;
function R$() {
  if (Tm) return qs;
  Tm = 1;
  function e() {
    return !1;
  }
  return qs = e, qs;
}
nn.exports;
var Rm;
function qS() {
  return Rm || (Rm = 1, function(e, t) {
    var r = bt(), n = R$(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
    e.exports = l;
  }(nn, nn.exports)), nn.exports;
}
var Bs, Nm;
function Nd() {
  if (Nm) return Bs;
  Nm = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return Bs = r, Bs;
}
var Ws, Mm;
function Md() {
  if (Mm) return Ws;
  Mm = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Ws = t, Ws;
}
var Hs, Om;
function N$() {
  if (Om) return Hs;
  Om = 1;
  var e = fr(), t = Md(), r = pr(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", y = "[object String]", h = "[object WeakMap]", g = "[object ArrayBuffer]", w = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", C = "[object Int8Array]", _ = "[object Int16Array]", S = "[object Int32Array]", E = "[object Uint8Array]", N = "[object Uint8ClampedArray]", T = "[object Uint16Array]", k = "[object Uint32Array]", D = {};
  D[b] = D[x] = D[C] = D[_] = D[S] = D[E] = D[N] = D[T] = D[k] = !0, D[n] = D[o] = D[g] = D[a] = D[w] = D[i] = D[s] = D[c] = D[l] = D[f] = D[p] = D[m] = D[v] = D[y] = D[h] = !1;
  function q(F) {
    return r(F) && t(F.length) && !!D[e(F)];
  }
  return Hs = q, Hs;
}
var Vs, Am;
function BS() {
  if (Am) return Vs;
  Am = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Vs = e, Vs;
}
var on = { exports: {} };
on.exports;
var jm;
function M$() {
  return jm || (jm = 1, function(e, t) {
    var r = mS(), n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(on, on.exports)), on.exports;
}
var Gs, Dm;
function WS() {
  if (Dm) return Gs;
  Dm = 1;
  var e = N$(), t = BS(), r = M$(), n = r && r.isTypedArray, o = n ? t(n) : e;
  return Gs = o, Gs;
}
var zs, km;
function O$() {
  if (km) return zs;
  km = 1;
  var e = P$(), t = Rd(), r = ot(), n = qS(), o = Nd(), a = WS(), i = Object.prototype, s = i.hasOwnProperty;
  function c(l, f) {
    var p = r(l), m = !p && t(l), v = !p && !m && n(l), y = !p && !m && !v && a(l), h = p || m || v || y, g = h ? e(l.length, String) : [], w = g.length;
    for (var b in l)
      (f || s.call(l, b)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      o(b, w))) && g.push(b);
    return g;
  }
  return zs = c, zs;
}
var Ys, Im;
function A$() {
  if (Im) return Ys;
  Im = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || e;
    return r === o;
  }
  return Ys = t, Ys;
}
var Us, $m;
function j$() {
  if ($m) return Us;
  $m = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Us = e, Us;
}
var Ks, Lm;
function D$() {
  if (Lm) return Ks;
  Lm = 1;
  var e = j$(), t = e(Object.keys, Object);
  return Ks = t, Ks;
}
var Xs, Fm;
function k$() {
  if (Fm) return Xs;
  Fm = 1;
  var e = A$(), t = D$(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return Xs = o, Xs;
}
var Zs, qm;
function ja() {
  if (qm) return Zs;
  qm = 1;
  var e = wd(), t = Md();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Zs = r, Zs;
}
var Qs, Bm;
function Od() {
  if (Bm) return Qs;
  Bm = 1;
  var e = O$(), t = k$(), r = ja();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return Qs = n, Qs;
}
var Js, Wm;
function I$() {
  if (Wm) return Js;
  Wm = 1;
  var e = S$(), t = E$(), r = Od();
  function n(o) {
    return e(o, r, t);
  }
  return Js = n, Js;
}
var ec, Hm;
function $$() {
  if (Hm) return ec;
  Hm = 1;
  var e = I$(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function o(a, i, s, c, l, f) {
    var p = s & t, m = e(a), v = m.length, y = e(i), h = y.length;
    if (v != h && !p)
      return !1;
    for (var g = v; g--; ) {
      var w = m[g];
      if (!(p ? w in i : n.call(i, w)))
        return !1;
    }
    var b = f.get(a), x = f.get(i);
    if (b && x)
      return b == i && x == a;
    var C = !0;
    f.set(a, i), f.set(i, a);
    for (var _ = p; ++g < v; ) {
      w = m[g];
      var S = a[w], E = i[w];
      if (c)
        var N = p ? c(E, S, w, i, a, f) : c(S, E, w, a, i, f);
      if (!(N === void 0 ? S === E || l(S, E, s, c, f) : N)) {
        C = !1;
        break;
      }
      _ || (_ = w == "constructor");
    }
    if (C && !_) {
      var T = a.constructor, k = i.constructor;
      T != k && "constructor" in a && "constructor" in i && !(typeof T == "function" && T instanceof T && typeof k == "function" && k instanceof k) && (C = !1);
    }
    return f.delete(a), f.delete(i), C;
  }
  return ec = o, ec;
}
var tc, Vm;
function L$() {
  if (Vm) return tc;
  Vm = 1;
  var e = mr(), t = bt(), r = e(t, "DataView");
  return tc = r, tc;
}
var rc, Gm;
function F$() {
  if (Gm) return rc;
  Gm = 1;
  var e = mr(), t = bt(), r = e(t, "Promise");
  return rc = r, rc;
}
var nc, zm;
function HS() {
  if (zm) return nc;
  zm = 1;
  var e = mr(), t = bt(), r = e(t, "Set");
  return nc = r, nc;
}
var oc, Ym;
function q$() {
  if (Ym) return oc;
  Ym = 1;
  var e = mr(), t = bt(), r = e(t, "WeakMap");
  return oc = r, oc;
}
var ac, Um;
function B$() {
  if (Um) return ac;
  Um = 1;
  var e = L$(), t = Sd(), r = F$(), n = HS(), o = q$(), a = fr(), i = hS(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = i(e), y = i(t), h = i(r), g = i(n), w = i(o), b = a;
  return (e && b(new e(new ArrayBuffer(1))) != m || t && b(new t()) != s || r && b(r.resolve()) != l || n && b(new n()) != f || o && b(new o()) != p) && (b = function(x) {
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
          return f;
        case w:
          return p;
      }
    return C;
  }), ac = b, ac;
}
var ic, Km;
function W$() {
  if (Km) return ic;
  Km = 1;
  var e = kS(), t = LS(), r = x$(), n = $$(), o = B$(), a = ot(), i = qS(), s = WS(), c = 1, l = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function y(h, g, w, b, x, C) {
    var _ = a(h), S = a(g), E = _ ? f : o(h), N = S ? f : o(g);
    E = E == l ? p : E, N = N == l ? p : N;
    var T = E == p, k = N == p, D = E == N;
    if (D && i(h)) {
      if (!i(g))
        return !1;
      _ = !0, T = !1;
    }
    if (D && !T)
      return C || (C = new e()), _ || s(h) ? t(h, g, w, b, x, C) : r(h, g, E, w, b, x, C);
    if (!(w & c)) {
      var q = T && v.call(h, "__wrapped__"), F = k && v.call(g, "__wrapped__");
      if (q || F) {
        var R = q ? h.value() : h, I = F ? g.value() : g;
        return C || (C = new e()), x(R, I, w, b, C);
      }
    }
    return D ? (C || (C = new e()), n(h, g, w, b, x, C)) : !1;
  }
  return ic = y, ic;
}
var sc, Xm;
function VS() {
  if (Xm) return sc;
  Xm = 1;
  var e = W$(), t = pr();
  function r(n, o, a, i, s) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : e(n, o, a, i, r, s);
  }
  return sc = r, sc;
}
var cc, Zm;
function H$() {
  if (Zm) return cc;
  Zm = 1;
  var e = kS(), t = VS(), r = 1, n = 2;
  function o(a, i, s, c) {
    var l = s.length, f = l, p = !c;
    if (a == null)
      return !f;
    for (a = Object(a); l--; ) {
      var m = s[l];
      if (p && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++l < f; ) {
      m = s[l];
      var v = m[0], y = a[v], h = m[1];
      if (p && m[2]) {
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
  return cc = o, cc;
}
var lc, Qm;
function GS() {
  if (Qm) return lc;
  Qm = 1;
  var e = Ut();
  function t(r) {
    return r === r && !e(r);
  }
  return lc = t, lc;
}
var uc, Jm;
function V$() {
  if (Jm) return uc;
  Jm = 1;
  var e = GS(), t = Od();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var i = o[a], s = n[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return uc = r, uc;
}
var dc, eh;
function zS() {
  if (eh) return dc;
  eh = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return dc = e, dc;
}
var fc, th;
function G$() {
  if (th) return fc;
  th = 1;
  var e = H$(), t = V$(), r = zS();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return fc = n, fc;
}
var pc, rh;
function z$() {
  if (rh) return pc;
  rh = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return pc = e, pc;
}
var mc, nh;
function Y$() {
  if (nh) return mc;
  nh = 1;
  var e = yS(), t = Rd(), r = ot(), n = Nd(), o = Md(), a = Oa();
  function i(s, c, l) {
    c = e(c, s);
    for (var f = -1, p = c.length, m = !1; ++f < p; ) {
      var v = a(c[f]);
      if (!(m = s != null && l(s, v)))
        break;
      s = s[v];
    }
    return m || ++f != p ? m : (p = s == null ? 0 : s.length, !!p && o(p) && n(v, p) && (r(s) || t(s)));
  }
  return mc = i, mc;
}
var hc, oh;
function U$() {
  if (oh) return hc;
  oh = 1;
  var e = z$(), t = Y$();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return hc = r, hc;
}
var vc, ah;
function K$() {
  if (ah) return vc;
  ah = 1;
  var e = VS(), t = bS(), r = U$(), n = bd(), o = GS(), a = zS(), i = Oa(), s = 1, c = 2;
  function l(f, p) {
    return n(f) && o(p) ? a(i(f), p) : function(m) {
      var v = t(m, f);
      return v === void 0 && v === p ? r(m, f) : e(p, v, s | c);
    };
  }
  return vc = l, vc;
}
var gc, ih;
function Da() {
  if (ih) return gc;
  ih = 1;
  function e(t) {
    return t;
  }
  return gc = e, gc;
}
var yc, sh;
function X$() {
  if (sh) return yc;
  sh = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return yc = e, yc;
}
var bc, ch;
function Z$() {
  if (ch) return bc;
  ch = 1;
  var e = _d();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return bc = t, bc;
}
var wc, lh;
function Q$() {
  if (lh) return wc;
  lh = 1;
  var e = X$(), t = Z$(), r = bd(), n = Oa();
  function o(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return wc = o, wc;
}
var xc, uh;
function YS() {
  if (uh) return xc;
  uh = 1;
  var e = G$(), t = K$(), r = Da(), n = ot(), o = Q$();
  function a(i) {
    return typeof i == "function" ? i : i == null ? r : typeof i == "object" ? n(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return xc = a, xc;
}
var Sc, dh;
function J$() {
  if (dh) return Sc;
  dh = 1;
  function e(t, r, n, o) {
    for (var a = t.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (r(t[i], i, t))
        return i;
    return -1;
  }
  return Sc = e, Sc;
}
var Cc, fh;
function e3() {
  if (fh) return Cc;
  fh = 1;
  function e(t) {
    return t !== t;
  }
  return Cc = e, Cc;
}
var _c, ph;
function t3() {
  if (ph) return _c;
  ph = 1;
  function e(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return _c = e, _c;
}
var Ec, mh;
function r3() {
  if (mh) return Ec;
  mh = 1;
  var e = J$(), t = e3(), r = t3();
  function n(o, a, i) {
    return a === a ? r(o, a, i) : e(o, t, i);
  }
  return Ec = n, Ec;
}
var Pc, hh;
function n3() {
  if (hh) return Pc;
  hh = 1;
  var e = r3();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return Pc = t, Pc;
}
var Tc, vh;
function o3() {
  if (vh) return Tc;
  vh = 1;
  function e(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return Tc = e, Tc;
}
var Rc, gh;
function a3() {
  if (gh) return Rc;
  gh = 1;
  function e() {
  }
  return Rc = e, Rc;
}
var Nc, yh;
function i3() {
  if (yh) return Nc;
  yh = 1;
  var e = HS(), t = a3(), r = Td(), n = 1 / 0, o = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return Nc = o, Nc;
}
var Mc, bh;
function s3() {
  if (bh) return Mc;
  bh = 1;
  var e = IS(), t = n3(), r = o3(), n = $S(), o = i3(), a = Td(), i = 200;
  function s(c, l, f) {
    var p = -1, m = t, v = c.length, y = !0, h = [], g = h;
    if (f)
      y = !1, m = r;
    else if (v >= i) {
      var w = l ? null : o(c);
      if (w)
        return a(w);
      y = !1, m = n, g = new e();
    } else
      g = l ? [] : h;
    e:
      for (; ++p < v; ) {
        var b = c[p], x = l ? l(b) : b;
        if (b = f || b !== 0 ? b : 0, y && x === x) {
          for (var C = g.length; C--; )
            if (g[C] === x)
              continue e;
          l && g.push(x), h.push(b);
        } else m(g, x, f) || (g !== h && g.push(x), h.push(b));
      }
    return h;
  }
  return Mc = s, Mc;
}
var Oc, wh;
function c3() {
  if (wh) return Oc;
  wh = 1;
  var e = YS(), t = s3();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return Oc = r, Oc;
}
var l3 = c3();
const xh = /* @__PURE__ */ vt(l3);
function US(e, t, r) {
  return t === !0 ? xh(e, r) : $o(t) ? xh(e, t) : e;
}
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
var u3 = ["ref"];
function Sh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sh(Object(r), !0).forEach(function(n) {
      ka(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ch(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, XS(n.key), n);
  }
}
function f3(e, t, r) {
  return t && Ch(e.prototype, t), r && Ch(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p3(e, t, r) {
  return t = Wo(t), m3(e, KS() ? Reflect.construct(t, r || [], Wo(e).constructor) : t.apply(e, r));
}
function m3(e, t) {
  if (t && (kr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return h3(e);
}
function h3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KS = function() {
    return !!e;
  })();
}
function Wo(e) {
  return Wo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wo(e);
}
function v3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kl(e, t);
}
function Kl(e, t) {
  return Kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Kl(e, t);
}
function ka(e, t, r) {
  return t = XS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XS(e) {
  var t = g3(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function g3(e, t) {
  if (kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function y3(e, t) {
  if (e == null) return {};
  var r = b3(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function b3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function w3(e) {
  return e.value;
}
function x3(e, t) {
  if (/* @__PURE__ */ O.isValidElement(e))
    return /* @__PURE__ */ O.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ O.createElement(e, t);
  t.ref;
  var r = y3(t, u3);
  return /* @__PURE__ */ O.createElement(Pd, r);
}
var _h = 1, Ad = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    d3(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = p3(this, t, [].concat(o)), ka(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return v3(t, e), f3(t, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > _h || Math.abs(o.height - this.lastBoundingBox.height) > _h) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? xt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, c = o.margin, l = o.chartWidth, f = o.chartHeight, p, m;
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
            top: ((f || 0) - y.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return xt(xt({}, p), m);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.content, i = o.width, s = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, f = o.payload, p = xt(xt({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ O.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(v) {
          n.wrapperNode = v;
        }
      }, x3(a, xt(xt({}, this.props), {}, {
        payload: US(f, l, w3)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var a = xt(xt({}, this.defaultProps), n.props), i = a.layout;
      return i === "vertical" && Je(n.props.height) ? {
        height: n.props.height
      } : i === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
}(Go);
ka(Ad, "displayName", "Legend");
ka(Ad, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Ac, Eh;
function S3() {
  if (Eh) return Ac;
  Eh = 1;
  var e = Vn(), t = Rd(), r = ot(), n = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Ac = o, Ac;
}
var jc, Ph;
function C3() {
  if (Ph) return jc;
  Ph = 1;
  var e = FS(), t = S3();
  function r(n, o, a, i, s) {
    var c = -1, l = n.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var f = n[c];
      o > 0 && a(f) ? o > 1 ? r(f, o - 1, a, i, s) : e(s, f) : i || (s[s.length] = f);
    }
    return s;
  }
  return jc = r, jc;
}
var Dc, Th;
function _3() {
  if (Th) return Dc;
  Th = 1;
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
  return Dc = e, Dc;
}
var kc, Rh;
function E3() {
  if (Rh) return kc;
  Rh = 1;
  var e = _3(), t = e();
  return kc = t, kc;
}
var Ic, Nh;
function P3() {
  if (Nh) return Ic;
  Nh = 1;
  var e = E3(), t = Od();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return Ic = r, Ic;
}
var $c, Mh;
function T3() {
  if (Mh) return $c;
  Mh = 1;
  var e = ja();
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
  return $c = t, $c;
}
var Lc, Oh;
function R3() {
  if (Oh) return Lc;
  Oh = 1;
  var e = P3(), t = T3(), r = t(e);
  return Lc = r, Lc;
}
var Fc, Ah;
function N3() {
  if (Ah) return Fc;
  Ah = 1;
  var e = R3(), t = ja();
  function r(n, o) {
    var a = -1, i = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return Fc = r, Fc;
}
var qc, jh;
function M3() {
  if (jh) return qc;
  jh = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return qc = e, qc;
}
var Bc, Dh;
function O3() {
  if (Dh) return Bc;
  Dh = 1;
  var e = Gn();
  function t(r, n) {
    if (r !== n) {
      var o = r !== void 0, a = r === null, i = r === r, s = e(r), c = n !== void 0, l = n === null, f = n === n, p = e(n);
      if (!l && !p && !s && r > n || s && c && f && !l && !p || a && c && f || !o && f || !i)
        return 1;
      if (!a && !s && !p && r < n || p && o && i && !a && !s || l && o && i || !c && i || !f)
        return -1;
    }
    return 0;
  }
  return Bc = t, Bc;
}
var Wc, kh;
function A3() {
  if (kh) return Wc;
  kh = 1;
  var e = O3();
  function t(r, n, o) {
    for (var a = -1, i = r.criteria, s = n.criteria, c = i.length, l = o.length; ++a < c; ) {
      var f = e(i[a], s[a]);
      if (f) {
        if (a >= l)
          return f;
        var p = o[a];
        return f * (p == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Wc = t, Wc;
}
var Hc, Ih;
function j3() {
  if (Ih) return Hc;
  Ih = 1;
  var e = vS(), t = _d(), r = YS(), n = N3(), o = M3(), a = BS(), i = A3(), s = Da(), c = ot();
  function l(f, p, m) {
    p.length ? p = e(p, function(h) {
      return c(h) ? function(g) {
        return t(g, h.length === 1 ? h[0] : h);
      } : h;
    }) : p = [s];
    var v = -1;
    p = e(p, a(r));
    var y = n(f, function(h, g, w) {
      var b = e(p, function(x) {
        return x(h);
      });
      return { criteria: b, index: ++v, value: h };
    });
    return o(y, function(h, g) {
      return i(h, g, m);
    });
  }
  return Hc = l, Hc;
}
var Vc, $h;
function D3() {
  if ($h) return Vc;
  $h = 1;
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
  return Vc = e, Vc;
}
var Gc, Lh;
function k3() {
  if (Lh) return Gc;
  Lh = 1;
  var e = D3(), t = Math.max;
  function r(n, o, a) {
    return o = t(o === void 0 ? n.length - 1 : o, 0), function() {
      for (var i = arguments, s = -1, c = t(i.length - o, 0), l = Array(c); ++s < c; )
        l[s] = i[o + s];
      s = -1;
      for (var f = Array(o + 1); ++s < o; )
        f[s] = i[s];
      return f[o] = a(l), e(n, this, f);
    };
  }
  return Gc = r, Gc;
}
var zc, Fh;
function I3() {
  if (Fh) return zc;
  Fh = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return zc = e, zc;
}
var Yc, qh;
function $3() {
  if (qh) return Yc;
  qh = 1;
  var e = mr(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Yc = t, Yc;
}
var Uc, Bh;
function L3() {
  if (Bh) return Uc;
  Bh = 1;
  var e = I3(), t = $3(), r = Da(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Uc = n, Uc;
}
var Kc, Wh;
function F3() {
  if (Wh) return Kc;
  Wh = 1;
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
  return Kc = n, Kc;
}
var Xc, Hh;
function q3() {
  if (Hh) return Xc;
  Hh = 1;
  var e = L3(), t = F3(), r = t(e);
  return Xc = r, Xc;
}
var Zc, Vh;
function B3() {
  if (Vh) return Zc;
  Vh = 1;
  var e = Da(), t = k3(), r = q3();
  function n(o, a) {
    return r(t(o, a, e), o + "");
  }
  return Zc = n, Zc;
}
var Qc, Gh;
function W3() {
  if (Gh) return Qc;
  Gh = 1;
  var e = xd(), t = ja(), r = Nd(), n = Ut();
  function o(a, i, s) {
    if (!n(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && r(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return Qc = o, Qc;
}
var Jc, zh;
function H3() {
  if (zh) return Jc;
  zh = 1;
  var e = C3(), t = j3(), r = B3(), n = W3(), o = r(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && n(a, i[0], i[1]) ? i = [] : s > 2 && n(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return Jc = o, Jc;
}
var V3 = H3();
const G3 = /* @__PURE__ */ vt(V3);
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e);
}
function Xl() {
  return Xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xl.apply(this, arguments);
}
function z3(e, t) {
  return X3(e) || K3(e, t) || U3(e, t) || Y3();
}
function Y3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U3(e, t) {
  if (e) {
    if (typeof e == "string") return Yh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yh(e, t);
  }
}
function Yh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function K3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (f) {
      l = !0, o = f;
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
function X3(e) {
  if (Array.isArray(e)) return e;
}
function Uh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uh(Object(r), !0).forEach(function(n) {
      Z3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z3(e, t, r) {
  return t = Q3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q3(e) {
  var t = J3(e, "string");
  return wn(t) == "symbol" ? t : t + "";
}
function J3(e, t) {
  if (wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eL(e) {
  return Array.isArray(e) && Lo(e[0]) && Lo(e[1]) ? e.join(" ~ ") : e;
}
var tL = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, f = t.payload, p = t.formatter, m = t.itemSorter, v = t.wrapperClassName, y = t.labelClassName, h = t.label, g = t.labelFormatter, w = t.accessibilityLayer, b = w === void 0 ? !1 : w, x = function() {
    if (f && f.length) {
      var q = {
        padding: 0,
        margin: 0
      }, F = (m ? G3(f, m) : f).map(function(R, I) {
        if (R.type === "none")
          return null;
        var j = el({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: R.color || "#000"
        }, s), G = R.formatter || p || eL, B = R.value, L = R.name, J = B, te = L;
        if (G && J != null && te != null) {
          var A = G(B, L, R, I, f);
          if (Array.isArray(A)) {
            var V = z3(A, 2);
            J = V[0], te = V[1];
          } else
            J = A;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ O.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: j
          }, Lo(te) ? /* @__PURE__ */ O.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, te) : null, Lo(te) ? /* @__PURE__ */ O.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ O.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, J), /* @__PURE__ */ O.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, R.unit || ""))
        );
      });
      return /* @__PURE__ */ O.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: q
      }, F);
    }
    return null;
  }, C = el({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), _ = el({
    margin: 0
  }, l), S = !QI(h), E = S ? h : "", N = _t("recharts-default-tooltip", v), T = _t("recharts-tooltip-label", y);
  S && g && f !== void 0 && f !== null && (E = g(h, f));
  var k = b ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ O.createElement("div", Xl({
    className: N,
    style: C
  }, k), /* @__PURE__ */ O.createElement("p", {
    className: T,
    style: _
  }, /* @__PURE__ */ O.isValidElement(E) ? E : "".concat(E)), x());
};
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function co(e, t, r) {
  return t = rL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rL(e) {
  var t = nL(e, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function nL(e, t) {
  if (xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qr = "recharts-tooltip-wrapper", oL = {
  visibility: "hidden"
};
function aL(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return _t(Qr, co(co(co(co({}, "".concat(Qr, "-right"), Je(r) && t && Je(t.x) && r >= t.x), "".concat(Qr, "-left"), Je(r) && t && Je(t.x) && r < t.x), "".concat(Qr, "-bottom"), Je(n) && t && Je(t.y) && n >= t.y), "".concat(Qr, "-top"), Je(n) && t && Je(t.y) && n < t.y));
}
function Kh(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && Je(a[n]))
    return a[n];
  var f = r[n] - s - o, p = r[n] + o;
  if (t[n])
    return i[n] ? f : p;
  if (i[n]) {
    var m = f, v = c[n];
    return m < v ? Math.max(p, c[n]) : Math.max(f, c[n]);
  }
  var y = p + s, h = c[n] + l;
  return y > h ? Math.max(f, c[n]) : Math.max(p, c[n]);
}
function iL(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function sL(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, f, p;
  return i.height > 0 && i.width > 0 && r ? (f = Kh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = Kh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = iL({
    translateX: f,
    translateY: p,
    useTranslate3d: s
  })) : l = oL, {
    cssProperties: l,
    cssClasses: aL({
      translateX: f,
      translateY: p,
      coordinate: r
    })
  };
}
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function Xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(r), !0).forEach(function(n) {
      Ql(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, QS(n.key), n);
  }
}
function uL(e, t, r) {
  return t && lL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dL(e, t, r) {
  return t = Ho(t), fL(e, ZS() ? Reflect.construct(t, r || [], Ho(e).constructor) : t.apply(e, r));
}
function fL(e, t) {
  if (t && (Ir(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pL(e);
}
function pL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ZS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ZS = function() {
    return !!e;
  })();
}
function Ho(e) {
  return Ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ho(e);
}
function mL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zl(e, t);
}
function Zl(e, t) {
  return Zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Zl(e, t);
}
function Ql(e, t, r) {
  return t = QS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QS(e) {
  var t = hL(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function hL(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Qh = 1, vL = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    cL(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = dL(this, t, [].concat(o)), Ql(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Ql(r, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, c, l, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (l = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), r;
  }
  return mL(t, e), uL(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Qh || Math.abs(n.height - this.state.lastBoundingBox.height) > Qh) && this.setState({
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
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, f = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, v = o.offset, y = o.position, h = o.reverseDirection, g = o.useTranslate3d, w = o.viewBox, b = o.wrapperStyle, x = sL({
        allowEscapeViewBox: i,
        coordinate: f,
        offsetTopLeft: v,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: w
      }), C = x.cssClasses, _ = x.cssProperties, S = Zh(Zh({
        transition: m && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, _), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, b);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ O.createElement("div", {
          tabIndex: -1,
          className: C,
          style: S,
          ref: function(N) {
            n.wrapperNode = N;
          }
        }, l)
      );
    }
  }]);
}(Go), gL = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, yL = {
  isSsr: gL()
};
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
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
function ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      jd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eC(n.key), n);
  }
}
function xL(e, t, r) {
  return t && wL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SL(e, t, r) {
  return t = Vo(t), CL(e, JS() ? Reflect.construct(t, r || [], Vo(e).constructor) : t.apply(e, r));
}
function CL(e, t) {
  if (t && ($r(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _L(e);
}
function _L(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function JS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (JS = function() {
    return !!e;
  })();
}
function Vo(e) {
  return Vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vo(e);
}
function EL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jl(e, t);
}
function Jl(e, t) {
  return Jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Jl(e, t);
}
function jd(e, t, r) {
  return t = eC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eC(e) {
  var t = PL(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function PL(e, t) {
  if ($r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function TL(e) {
  return e.dataKey;
}
function RL(e, t) {
  return /* @__PURE__ */ O.isValidElement(e) ? /* @__PURE__ */ O.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ O.createElement(e, t) : /* @__PURE__ */ O.createElement(tL, t);
}
var Dd = /* @__PURE__ */ function(e) {
  function t() {
    return bL(this, t), SL(this, t, arguments);
  }
  return EL(t, e), xL(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, f = o.coordinate, p = o.filterNull, m = o.isAnimationActive, v = o.offset, y = o.payload, h = o.payloadUniqBy, g = o.position, w = o.reverseDirection, b = o.useTranslate3d, x = o.viewBox, C = o.wrapperStyle, _ = y ?? [];
      p && _.length && (_ = US(y.filter(function(E) {
        return E.value != null && (E.hide !== !0 || n.props.includeHidden);
      }), h, TL));
      var S = _.length > 0;
      return /* @__PURE__ */ O.createElement(vL, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: f,
        hasPayload: S,
        offset: v,
        position: g,
        reverseDirection: w,
        useTranslate3d: b,
        viewBox: x,
        wrapperStyle: C
      }, RL(l, ev(ev({}, this.props), {}, {
        payload: _
      })));
    }
  }]);
}(Go);
jd(Dd, "displayName", "Tooltip");
jd(Dd, "defaultProps", {
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
  isAnimationActive: !yL.isSsr,
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
var tl, tv;
function NL() {
  if (tv) return tl;
  tv = 1;
  var e = bt(), t = function() {
    return e.Date.now();
  };
  return tl = t, tl;
}
var rl, rv;
function ML() {
  if (rv) return rl;
  rv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return rl = t, rl;
}
var nl, nv;
function OL() {
  if (nv) return nl;
  nv = 1;
  var e = ML(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return nl = r, nl;
}
var ol, ov;
function AL() {
  if (ov) return ol;
  ov = 1;
  var e = OL(), t = Ut(), r = Gn(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
  function c(l) {
    if (typeof l == "number")
      return l;
    if (r(l))
      return n;
    if (t(l)) {
      var f = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = t(f) ? f + "" : f;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = e(l);
    var p = a.test(l);
    return p || i.test(l) ? s(l.slice(2), p ? 2 : 8) : o.test(l) ? n : +l;
  }
  return ol = c, ol;
}
var al, av;
function jL() {
  if (av) return al;
  av = 1;
  var e = Ut(), t = NL(), r = AL(), n = "Expected a function", o = Math.max, a = Math.min;
  function i(s, c, l) {
    var f, p, m, v, y, h, g = 0, w = !1, b = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(l) && (w = !!l.leading, b = "maxWait" in l, m = b ? o(r(l.maxWait) || 0, c) : m, x = "trailing" in l ? !!l.trailing : x);
    function C(F) {
      var R = f, I = p;
      return f = p = void 0, g = F, v = s.apply(I, R), v;
    }
    function _(F) {
      return g = F, y = setTimeout(N, c), w ? C(F) : v;
    }
    function S(F) {
      var R = F - h, I = F - g, j = c - R;
      return b ? a(j, m - I) : j;
    }
    function E(F) {
      var R = F - h, I = F - g;
      return h === void 0 || R >= c || R < 0 || b && I >= m;
    }
    function N() {
      var F = t();
      if (E(F))
        return T(F);
      y = setTimeout(N, S(F));
    }
    function T(F) {
      return y = void 0, x && f ? C(F) : (f = p = void 0, v);
    }
    function k() {
      y !== void 0 && clearTimeout(y), g = 0, f = h = p = y = void 0;
    }
    function D() {
      return y === void 0 ? v : T(t());
    }
    function q() {
      var F = t(), R = E(F);
      if (f = arguments, p = this, h = F, R) {
        if (y === void 0)
          return _(h);
        if (b)
          return clearTimeout(y), y = setTimeout(N, c), C(h);
      }
      return y === void 0 && (y = setTimeout(N, c)), v;
    }
    return q.cancel = k, q.flush = D, q;
  }
  return al = i, al;
}
var il, iv;
function DL() {
  if (iv) return il;
  iv = 1;
  var e = jL(), t = Ut(), r = "Expected a function";
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
  return il = n, il;
}
var kL = DL();
const IL = /* @__PURE__ */ vt(kL);
function Sn(e) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sn(e);
}
function sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sv(Object(r), !0).forEach(function(n) {
      $L(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $L(e, t, r) {
  return t = LL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LL(e) {
  var t = FL(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function FL(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qL(e, t) {
  return VL(e) || HL(e, t) || WL(e, t) || BL();
}
function BL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WL(e, t) {
  if (e) {
    if (typeof e == "string") return cv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cv(e, t);
  }
}
function cv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function HL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (f) {
      l = !0, o = f;
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
function VL(e) {
  if (Array.isArray(e)) return e;
}
var GL = /* @__PURE__ */ tu(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, f = l === void 0 ? 0 : l, p = e.minHeight, m = e.maxHeight, v = e.children, y = e.debounce, h = y === void 0 ? 0 : y, g = e.id, w = e.className, b = e.onResize, x = e.style, C = x === void 0 ? {} : x, _ = nr(null), S = nr();
  S.current = b, ru(t, function() {
    return Object.defineProperty(_.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), _.current;
      },
      configurable: !0
    });
  });
  var E = pt({
    containerWidth: o.width,
    containerHeight: o.height
  }), N = qL(E, 2), T = N[0], k = N[1], D = qe(function(F, R) {
    k(function(I) {
      var j = Math.round(F), G = Math.round(R);
      return I.containerWidth === j && I.containerHeight === G ? I : {
        containerWidth: j,
        containerHeight: G
      };
    });
  }, []);
  Lr(function() {
    var F = function(L) {
      var J, te = L[0].contentRect, A = te.width, V = te.height;
      D(A, V), (J = S.current) === null || J === void 0 || J.call(S, A, V);
    };
    h > 0 && (F = IL(F, h, {
      trailing: !0,
      leading: !1
    }));
    var R = new ResizeObserver(F), I = _.current.getBoundingClientRect(), j = I.width, G = I.height;
    return D(j, G), R.observe(_.current), function() {
      R.disconnect();
    };
  }, [D, h]);
  var q = uo(function() {
    var F = T.containerWidth, R = T.containerHeight;
    if (F < 0 || R < 0)
      return null;
    wo(io(i) || io(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), wo(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = io(i) ? F : i, j = io(c) ? R : c;
    r && r > 0 && (I ? j = I / r : j && (I = j * r), m && j > m && (j = m)), wo(I > 0 || j > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, j, i, c, f, p, r);
    var G = !Array.isArray(v) && h2(v.type).endsWith("Chart");
    return O.Children.map(v, function(B) {
      return /* @__PURE__ */ O.isValidElement(B) ? /* @__PURE__ */ lC(B, lo({
        width: I,
        height: j
      }, G ? {
        style: lo({
          height: "100%",
          width: "100%",
          maxHeight: j,
          maxWidth: I
        }, B.props.style)
      } : {})) : B;
    });
  }, [r, v, c, m, p, f, T, i]);
  return /* @__PURE__ */ O.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: _t("recharts-responsive-container", w),
    style: lo(lo({}, C), {}, {
      width: i,
      height: c,
      minWidth: f,
      minHeight: p,
      maxHeight: m
    }),
    ref: _
  }, q);
});
const zL = { light: "", dark: ".dark" }, tC = u.createContext(null);
function rC() {
  const e = u.useContext(tC);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const YL = u.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = u.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ d.jsx(tC.Provider, { value: { config: n }, children: /* @__PURE__ */ d.jsxs(
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
        /* @__PURE__ */ d.jsx(UL, { id: s, config: n }),
        /* @__PURE__ */ d.jsx(GL, { children: r })
      ]
    }
  ) });
});
YL.displayName = "Chart";
const UL = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ d.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(zL).map(
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
}, YF = Dd, KL = u.forwardRef(
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
    color: f,
    nameKey: p,
    labelKey: m
  }, v) => {
    const { config: y } = rC(), h = u.useMemo(() => {
      var _;
      if (o || !(t != null && t.length))
        return null;
      const [w] = t;
      if (!w)
        return null;
      const b = `${m || w.dataKey || w.name || "value"}`, x = eu(y, w, b), C = !m && typeof i == "string" ? ((_ = y[i]) == null ? void 0 : _.label) || i : x == null ? void 0 : x.label;
      return s ? /* @__PURE__ */ d.jsx("div", { className: M("font-medium", c), children: s(C, t) }) : C ? /* @__PURE__ */ d.jsx("div", { className: M("font-medium", c), children: C }) : null;
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
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: v,
        className: M(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          g ? null : h,
          /* @__PURE__ */ d.jsx("div", { className: "grid gap-1.5", children: t.map((w, b) => {
            if (!w)
              return null;
            const x = `${p || w.dataKey || w.name || "value"}`, C = eu(y, w, x), _ = f || w.payload.fill || w.color;
            return /* @__PURE__ */ d.jsx(
              "div",
              {
                className: M(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: l && (w == null ? void 0 : w.value) !== void 0 && w.name ? l(w.value, w.name, w, b, w.payload) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  C != null && C.icon ? /* @__PURE__ */ d.jsx(C.icon, {}) : !a && /* @__PURE__ */ d.jsx(
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
                  /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: M(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ d.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? h : null,
                          /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground", children: (C == null ? void 0 : C.label) || w.name })
                        ] }),
                        w.value && /* @__PURE__ */ d.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: w.value.toLocaleString() })
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
KL.displayName = "ChartTooltip";
const UF = Ad, XL = u.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
    const { config: i } = rC();
    return r != null && r.length ? /* @__PURE__ */ d.jsx(
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
          const c = `${o || s.dataKey || "value"}`, l = eu(i, s, c);
          return /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: M(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l != null && l.icon && !t ? /* @__PURE__ */ d.jsx(l.icon, {}) : /* @__PURE__ */ d.jsx(
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
XL.displayName = "ChartLegend";
function eu(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
export {
  rF as Accordion,
  s_ as AccordionContent,
  a_ as AccordionItem,
  i_ as AccordionTrigger,
  Lw as AiqiaSpinner,
  l_ as Alert,
  d_ as AlertDescription,
  u_ as AlertTitle,
  h_ as Avatar,
  g_ as AvatarFallback,
  v_ as AvatarImage,
  Gd as Badge,
  b_ as Breadcrumb,
  E_ as BreadcrumbEllipsis,
  x_ as BreadcrumbItem,
  S_ as BreadcrumbLink,
  w_ as BreadcrumbList,
  C_ as BreadcrumbPage,
  __ as BreadcrumbSeparator,
  Wr as Button,
  _g as Calendar,
  JT as Card,
  nR as CardContent,
  rR as CardDescription,
  oR as CardFooter,
  eR as CardHeader,
  tR as CardTitle,
  YL as ChartContainer,
  UF as ChartLegend,
  XL as ChartLegendContent,
  UL as ChartStyle,
  YF as ChartTooltip,
  KL as ChartTooltipContent,
  uR as Checkbox,
  Pu as Command,
  sF as CommandDialog,
  my as CommandEmpty,
  hy as CommandGroup,
  fy as CommandInput,
  mo as CommandItem,
  py as CommandList,
  vy as CommandSeparator,
  KN as CommandShortcut,
  lF as DatePicker,
  TO as DateTimePicker,
  RO as Dialog,
  dF as DialogClose,
  tb as DialogContent,
  jO as DialogDescription,
  OO as DialogFooter,
  MO as DialogHeader,
  eb as DialogOverlay,
  NO as DialogPortal,
  AO as DialogTitle,
  uF as DialogTrigger,
  pF as DropdownMenu,
  nj as DropdownMenuCheckboxItem,
  tj as DropdownMenuContent,
  hF as DropdownMenuGroup,
  rj as DropdownMenuItem,
  aj as DropdownMenuLabel,
  vF as DropdownMenuPortal,
  yF as DropdownMenuRadioGroup,
  oj as DropdownMenuRadioItem,
  ij as DropdownMenuSeparator,
  sj as DropdownMenuShortcut,
  gF as DropdownMenuSub,
  ej as DropdownMenuSubContent,
  JA as DropdownMenuSubTrigger,
  mF as DropdownMenuTrigger,
  bF as FlowlyLogo,
  wF as Form,
  fj as FormControl,
  pj as FormDescription,
  xF as FormField,
  uj as FormItem,
  dj as FormLabel,
  mj as FormMessage,
  uw as Input,
  sw as Label,
  SF as LeftDrawer,
  qj as ListItem,
  EF as Loader,
  PF as MaskedInput,
  Hj as MultiSelect,
  jj as NavigationMenu,
  $j as NavigationMenuContent,
  Fj as NavigationMenuIndicator,
  _F as NavigationMenuItem,
  Lj as NavigationMenuLink,
  Dj as NavigationMenuList,
  Ij as NavigationMenuTrigger,
  $w as NavigationMenuViewport,
  Fw as Pagination,
  TF as PaginationComponent,
  qw as PaginationContent,
  Hw as PaginationEllipsis,
  tn as PaginationItem,
  rr as PaginationLink,
  Ww as PaginationNext,
  Bw as PaginationPrevious,
  Lu as Popover,
  da as PopoverContent,
  Fu as PopoverTrigger,
  eD as RadioGroup,
  tD as RadioGroupItem,
  NF as RightDrawer,
  hD as ScrollArea,
  vx as ScrollBar,
  Dl as Select,
  ko as SelectContent,
  AF as SelectGroup,
  gn as SelectItem,
  WD as SelectLabel,
  e1 as SelectScrollDownButton,
  Jx as SelectScrollUpButton,
  HD as SelectSeparator,
  Do as SelectTrigger,
  kl as SelectValue,
  n1 as Separator,
  jF as Sheet,
  kF as SheetClose,
  KD as SheetContent,
  JD as SheetDescription,
  ZD as SheetFooter,
  XD as SheetHeader,
  o1 as SheetOverlay,
  YD as SheetPortal,
  QD as SheetTitle,
  DF as SheetTrigger,
  IF as Skeleton,
  a1 as SplashScreen,
  ak as Switch,
  ik as Table,
  ck as TableBody,
  pk as TableCaption,
  fk as TableCell,
  lk as TableFooter,
  dk as TableHead,
  sk as TableHeader,
  uk as TableRow,
  FF as Tabs,
  bk as TabsContent,
  gk as TabsList,
  yk as TabsTrigger,
  wk as Textarea,
  Jy as TimePicker,
  vo as TimePickerInput,
  V1 as Toast,
  Wk as ToastAction,
  G1 as ToastClose,
  Y1 as ToastDescription,
  Fk as ToastProvider,
  z1 as ToastTitle,
  H1 as ToastViewport,
  BF as Toaster,
  Xk as Toggle,
  tI as ToggleGroup,
  rI as ToggleGroupItem,
  GF as Tooltip,
  SI as TooltipContent,
  VF as TooltipProvider,
  zF as TooltipTrigger,
  y_ as badgeVariants,
  Sr as buttonVariants,
  kj as navigationMenuTriggerStyle,
  K1 as toggleVariants,
  qn as useFormField
};
