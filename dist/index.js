import * as u from "react";
import O, { forwardRef as eu, createElement as il, createContext as a_, useContext as i_, useCallback as qe, useRef as rr, useLayoutEffect as cv, useState as Pr, useEffect as Lr, useMemo as co, isValidElement as s_, PureComponent as Ho, useImperativeHandle as tu, cloneElement as c_ } from "react";
import * as xn from "react-dom";
import lv from "react-dom";
import { Link as l_ } from "react-router-dom";
import { useFormContext as u_, FormProvider as d_, Controller as f_ } from "react-hook-form";
var zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yn = { exports: {} }, Yr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function p_() {
  if (jd) return Yr;
  jd = 1;
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
  return Yr.Fragment = t, Yr.jsx = r, Yr.jsxs = r, Yr;
}
var Ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function m_() {
  return kd || (kd = 1, process.env.NODE_ENV !== "production" && function() {
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
          case j:
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
        var ie = Me.DetermineComponentFrameRoot(), Ke = ie[0], Ot = ie[1];
        if (Ke && Ot) {
          var Ae = Ke.split(`
`), it = Ot.split(`
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
                    var Ut = `
` + Ae[Se].replace(
                      " at new ",
                      " at "
                    );
                    return P.displayName && Ut.includes("<anonymous>") && (Ut = Ut.replace("<anonymous>", P.displayName)), typeof P == "function" && ke.set(P, Ut), Ut;
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
          case j:
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
    function d(P) {
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
      return mr[P] || (mr[P] = !0, console.error(
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
      if (typeof P == "string" || typeof P == "function" || P === S || P === N || P === E || P === q || P === F || P === D || typeof P == "object" && P !== null && (P.$$typeof === I || P.$$typeof === R || P.$$typeof === k || P.$$typeof === T || P.$$typeof === j || P.$$typeof === A || P.getModuleId !== void 0)) {
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
        pe = 0 < Ke.length ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}", bt[ie + pe] || (Ke = 0 < Ke.length ? "{" + Ke.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), bt[ie + pe] = !0);
      }
      if (ie = null, Q !== void 0 && (r(Q), ie = "" + Q), d(Z) && (r(Z.key), ie = "" + Z.key), "key" in Z) {
        Q = {};
        for (var Ot in Z)
          Ot !== "key" && (Q[Ot] = Z[Ot]);
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
      if (P._store && !P._store.validated && P.key == null && (P._store.validated = 1, Z = b(Z), !Vn[Z])) {
        Vn[Z] = !0;
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
    var x = O, C = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), k = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), G = Symbol.iterator, B = Symbol.for("react.client.reference"), L = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, te = Object.assign, A = Symbol.for("react.client.reference"), V = Array.isArray, U = 0, z, ee, H, oe, se, ce, fe;
    n.__reactDisabledLog = !0;
    var le, Re, Y = !1, ke = new (typeof WeakMap == "function" ? WeakMap : Map)(), $e = Symbol.for("react.client.reference"), Le, mr = {}, bt = {}, Vn = {};
    Ur.Fragment = S, Ur.jsx = function(P, Z, Q, pe, Me) {
      return y(P, Z, Q, !1, pe, Me);
    }, Ur.jsxs = function(P, Z, Q, pe, Me) {
      return y(P, Z, Q, !0, pe, Me);
    };
  }()), Ur;
}
var Id;
function h_() {
  return Id || (Id = 1, process.env.NODE_ENV === "production" ? Yn.exports = p_() : Yn.exports = m_()), Yn.exports;
}
var f = h_();
function v_(e, t) {
  const r = u.createContext(t), n = (a) => {
    const { children: i, ...s } = a, c = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ f.jsx(r.Provider, { value: c, children: i });
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
      return /* @__PURE__ */ f.jsx(h.Provider, { value: g, children: v });
    };
    l.displayName = a + "Provider";
    function d(p, m) {
      var h;
      const v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[c]) || s, y = u.useContext(v);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [l, d];
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
  return o.scopeName = e, [n, g_(o, ...t)];
}
function g_(...e) {
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
function $d(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Sn(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = $d(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : $d(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return u.useCallback(Sn(...e), e);
}
var pt = u.forwardRef((e, t) => {
  const { children: r, ...n } = e, o = u.Children.toArray(r), a = o.find(y_);
  if (a) {
    const i = a.props.children, s = o.map((c) => c === a ? u.Children.count(i) > 1 ? u.Children.only(null) : u.isValidElement(i) ? i.props.children : null : c);
    return /* @__PURE__ */ f.jsx(sl, { ...n, ref: t, children: u.isValidElement(i) ? u.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ f.jsx(sl, { ...n, ref: t, children: r });
});
pt.displayName = "Slot";
var sl = u.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (u.isValidElement(r)) {
    const o = w_(r), a = b_(n, r.props);
    return r.type !== u.Fragment && (a.ref = t ? Sn(t, o) : o), u.cloneElement(r, a);
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
sl.displayName = "SlotClone";
var uv = ({ children: e }) => /* @__PURE__ */ f.jsx(f.Fragment, { children: e });
function y_(e) {
  return u.isValidElement(e) && e.type === uv;
}
function b_(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      a(...s), o(...s);
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function w_(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function cr(e) {
  const t = e + "CollectionProvider", [r, n] = Te(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: y, children: h } = v, g = O.useRef(null), w = O.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f.jsx(o, { scope: y, itemMap: w, collectionRef: g, children: h });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = O.forwardRef(
    (v, y) => {
      const { scope: h, children: g } = v, w = a(s, h), b = ne(y, w.collectionRef);
      return /* @__PURE__ */ f.jsx(pt, { ref: b, children: g });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", d = "data-radix-collection-item", p = O.forwardRef(
    (v, y) => {
      const { scope: h, children: g, ...w } = v, b = O.useRef(null), x = ne(y, b), C = a(l, h);
      return O.useEffect(() => (C.itemMap.set(b, { ref: b, ...w }), () => void C.itemMap.delete(b))), /* @__PURE__ */ f.jsx(pt, { [d]: "", ref: x, children: g });
    }
  );
  p.displayName = l;
  function m(v) {
    const y = a(e + "CollectionConsumer", v);
    return O.useCallback(() => {
      const g = y.collectionRef.current;
      if (!g) return [];
      const w = Array.from(g.querySelectorAll(`[${d}]`));
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
  const [n, o] = x_({ defaultProp: t, onChange: r }), a = e !== void 0, i = a ? e : n, s = me(r), c = u.useCallback(
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
function x_({
  defaultProp: e,
  onChange: t
}) {
  const r = u.useState(e), [n] = r, o = u.useRef(n), a = me(t);
  return u.useEffect(() => {
    o.current !== n && (a(n), o.current = n);
  }, [n, o, a]), r;
}
var S_ = [
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
], W = S_.reduce((e, t) => {
  const r = u.forwardRef((n, o) => {
    const { asChild: a, ...i } = n, s = a ? pt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f.jsx(s, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function an(e, t) {
  e && xn.flushSync(() => e.dispatchEvent(t));
}
var Ee = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
};
function C_(e, t) {
  return u.useReducer((r, n) => t[r][n] ?? r, e);
}
var Ce = (e) => {
  const { present: t, children: r } = e, n = __(t), o = typeof r == "function" ? r({ present: n.isPresent }) : u.Children.only(r), a = ne(n.ref, E_(o));
  return typeof r == "function" || n.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Ce.displayName = "Presence";
function __(e) {
  const [t, r] = u.useState(), n = u.useRef({}), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = C_(i, {
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
    const l = Un(n.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), Ee(() => {
    const l = n.current, d = o.current;
    if (d !== e) {
      const m = a.current, v = Un(l);
      e ? c("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Ee(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, p = (v) => {
        const h = Un(n.current).includes(v.animationName);
        if (v.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = Un(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
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
function Un(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function E_(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var P_ = u.useId || (() => {
}), T_ = 0;
function _e(e) {
  const [t, r] = u.useState(P_());
  return Ee(() => {
    r((n) => n ?? String(T_++));
  }, [e]), t ? `radix-${t}` : "";
}
var ru = "Collapsible", [R_, dv] = Te(ru), [N_, nu] = R_(ru), fv = u.forwardRef(
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
    return /* @__PURE__ */ f.jsx(
      N_,
      {
        scope: r,
        disabled: a,
        contentId: _e(),
        open: c,
        onOpenToggle: u.useCallback(() => l((d) => !d), [l]),
        children: /* @__PURE__ */ f.jsx(
          W.div,
          {
            "data-state": au(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
fv.displayName = ru;
var pv = "CollapsibleTrigger", mv = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = nu(pv, r);
    return /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": au(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
  }
);
mv.displayName = pv;
var ou = "CollapsibleContent", hv = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = nu(ou, e.__scopeCollapsible);
    return /* @__PURE__ */ f.jsx(Ce, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ f.jsx(M_, { ...n, ref: t, present: a }) });
  }
);
hv.displayName = ou;
var M_ = u.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = nu(ou, r), [s, c] = u.useState(n), l = u.useRef(null), d = ne(t, l), p = u.useRef(0), m = p.current, v = u.useRef(0), y = v.current, h = i.open || s, g = u.useRef(h), w = u.useRef(void 0);
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
  }, [i.open, n]), /* @__PURE__ */ f.jsx(
    W.div,
    {
      "data-state": au(i.open),
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
function au(e) {
  return e ? "open" : "closed";
}
var O_ = fv, A_ = mv, D_ = hv, j_ = u.createContext(void 0);
function Pt(e) {
  const t = u.useContext(j_);
  return e || t || "ltr";
}
var Tt = "Accordion", k_ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [iu, I_, $_] = cr(Tt), [Vo, uq] = Te(Tt, [
  $_,
  dv
]), su = dv(), vv = O.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ f.jsx(iu.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ f.jsx(B_, { ...a, ref: t }) : /* @__PURE__ */ f.jsx(q_, { ...o, ref: t }) });
  }
);
vv.displayName = Tt;
var [gv, L_] = Vo(Tt), [yv, F_] = Vo(
  Tt,
  { collapsible: !1 }
), q_ = O.forwardRef(
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
    return /* @__PURE__ */ f.jsx(
      gv,
      {
        scope: e.__scopeAccordion,
        value: s ? [s] : [],
        onItemOpen: c,
        onItemClose: O.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ f.jsx(yv, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ f.jsx(bv, { ...i, ref: t }) })
      }
    );
  }
), B_ = O.forwardRef((e, t) => {
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
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = O.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ f.jsx(
    gv,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ f.jsx(yv, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ f.jsx(bv, { ...a, ref: t }) })
    }
  );
}), [W_, Go] = Vo(Tt), bv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = O.useRef(null), c = ne(s, t), l = I_(r), p = Pt(o) === "ltr", m = $(e.onKeyDown, (v) => {
      var N;
      if (!k_.includes(v.key)) return;
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
    return /* @__PURE__ */ f.jsx(
      W_,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ f.jsx(iu.Slot, { scope: r, children: /* @__PURE__ */ f.jsx(
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
), bo = "AccordionItem", [H_, cu] = Vo(bo), wv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = Go(bo, r), i = L_(bo, r), s = su(r), c = _e(), l = n && i.value.includes(n) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ f.jsx(
      H_,
      {
        scope: r,
        open: l,
        disabled: d,
        triggerId: c,
        children: /* @__PURE__ */ f.jsx(
          O_,
          {
            "data-orientation": a.orientation,
            "data-state": Pv(l),
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
wv.displayName = bo;
var xv = "AccordionHeader", Sv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Go(Tt, r), a = cu(xv, r);
    return /* @__PURE__ */ f.jsx(
      W.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Pv(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Sv.displayName = xv;
var cl = "AccordionTrigger", Cv = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Go(Tt, r), a = cu(cl, r), i = F_(cl, r), s = su(r);
    return /* @__PURE__ */ f.jsx(iu.ItemSlot, { scope: r, children: /* @__PURE__ */ f.jsx(
      A_,
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
Cv.displayName = cl;
var _v = "AccordionContent", Ev = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Go(Tt, r), a = cu(_v, r), i = su(r);
    return /* @__PURE__ */ f.jsx(
      D_,
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
Ev.displayName = _v;
function Pv(e) {
  return e ? "open" : "closed";
}
var V_ = vv, G_ = wv, z_ = Sv, Tv = Cv, Rv = Ev;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nv = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var U_ = {
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
const K_ = eu(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => il(
    "svg",
    {
      ref: c,
      ...U_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Nv("lucide", o),
      ...s
    },
    [
      ...i.map(([l, d]) => il(l, d)),
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
  const r = eu(
    ({ className: n, ...o }, a) => il(K_, {
      ref: a,
      iconNode: t,
      className: Nv(`lucide-${Y_(e)}`, n),
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
const X_ = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Mv = Ie("Calendar", X_);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], sn = Ie("Check", Z_);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Tr = Ie("ChevronDown", Q_);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J_ = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ov = Ie("ChevronLeft", J_);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], zo = Ie("ChevronRight", eE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], rE = Ie("ChevronUp", tE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Ld = Ie("CircleX", nE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Av = Ie("Circle", oE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], iE = Ie("Clock", aE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sE = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Dv = Ie("Ellipsis", sE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cE = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], lE = Ie("LoaderCircle", cE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], dE = Ie("Plus", uE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], pE = Ie("Search", fE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mE = [
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
], hE = Ie("WandSparkles", mE);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Yo = Ie("X", vE);
function jv(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = jv(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ct() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = jv(e)) && (n && (n += " "), n += t);
  return n;
}
const lu = "-", gE = (e) => {
  const t = bE(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(lu);
      return s[0] === "" && s.length !== 1 && s.shift(), kv(s, t) || yE(i);
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
  const a = e.join(lu);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Fd = /^\[(.+)\]$/, yE = (e) => {
  if (Fd.test(e)) {
    const t = Fd.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, bE = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    ll(r[o], n, o, t);
  return n;
}, ll = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : qd(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (wE(o)) {
        ll(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      ll(i, qd(t, a), r, n);
    });
  });
}, qd = (e, t) => {
  let r = e;
  return t.split(lu).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, wE = (e) => e.isThemeGetter, xE = (e) => {
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
}, ul = "!", dl = ":", SE = dl.length, CE = (e) => {
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
        if (h === dl) {
          a.push(o.slice(c, y)), c = y + SE;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const d = a.length === 0 ? o : o.substring(c), p = _E(d), m = p !== d, v = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + dl, a = n;
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
}, _E = (e) => e.endsWith(ul) ? e.substring(0, e.length - 1) : e.startsWith(ul) ? e.substring(1) : e, EE = (e) => {
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
}, PE = (e) => ({
  cache: xE(e.cacheSize),
  parseClassName: CE(e),
  sortModifiers: EE(e),
  ...gE(e)
}), TE = /\s+/, RE = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(TE);
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
    let g = !!h, w = n(g ? y.substring(0, h) : y);
    if (!w) {
      if (!g) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = n(y), !w) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const b = a(m).join(":"), x = v ? b + ul : b, C = x + w;
    if (i.includes(C))
      continue;
    i.push(C);
    const _ = o(w, g);
    for (let S = 0; S < _.length; ++S) {
      const E = _[S];
      i.push(x + E);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function NE() {
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
function ME(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const l = t.reduce((d, p) => p(d), e());
    return r = PE(l), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const d = RE(c, r);
    return o(c, d), d;
  }
  return function() {
    return a(NE.apply(null, arguments));
  };
}
const Oe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, $v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Lv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, OE = /^\d+\/\d+$/, AE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, DE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, kE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, IE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, hr = (e) => OE.test(e), de = (e) => !!e && !Number.isNaN(Number(e)), Kt = (e) => !!e && Number.isInteger(Number(e)), Bd = (e) => e.endsWith("%") && de(e.slice(0, -1)), Dt = (e) => AE.test(e), $E = () => !0, LE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  DE.test(e) && !jE.test(e)
), uu = () => !1, FE = (e) => kE.test(e), qE = (e) => IE.test(e), BE = (e) => !K(e) && !X(e), WE = (e) => Fr(e, Bv, uu), K = (e) => $v.test(e), Xt = (e) => Fr(e, Wv, LE), $a = (e) => Fr(e, JE, de), HE = (e) => Fr(e, Fv, uu), VE = (e) => Fr(e, qv, qE), GE = (e) => Fr(e, uu, FE), X = (e) => Lv.test(e), Kn = (e) => qr(e, Wv), zE = (e) => qr(e, eP), YE = (e) => qr(e, Fv), UE = (e) => qr(e, Bv), KE = (e) => qr(e, qv), XE = (e) => qr(e, tP, !0), Fr = (e, t, r) => {
  const n = $v.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, qr = (e, t, r = !1) => {
  const n = Lv.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Fv = (e) => e === "position", ZE = /* @__PURE__ */ new Set(["image", "url"]), qv = (e) => ZE.has(e), QE = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Bv = (e) => QE.has(e), Wv = (e) => e === "length", JE = (e) => e === "number", eP = (e) => e === "family-name", tP = (e) => e === "shadow", rP = () => {
  const e = Oe("color"), t = Oe("font"), r = Oe("text"), n = Oe("font-weight"), o = Oe("tracking"), a = Oe("leading"), i = Oe("breakpoint"), s = Oe("container"), c = Oe("spacing"), l = Oe("radius"), d = Oe("shadow"), p = Oe("inset-shadow"), m = Oe("drop-shadow"), v = Oe("blur"), y = Oe("perspective"), h = Oe("aspect"), g = Oe("ease"), w = Oe("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], C = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], S = () => [X, K, c], E = () => [hr, "full", "auto", ...S()], N = () => [Kt, "none", "subgrid", X, K], T = () => ["auto", {
    span: ["full", Kt, X, K]
  }, X, K], k = () => [Kt, "auto", X, K], j = () => ["auto", "min", "max", "fr", X, K], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], F = () => ["start", "end", "center", "stretch"], R = () => ["auto", ...S()], I = () => [hr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], D = () => [e, X, K], G = () => [Bd, Xt], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    X,
    K
  ], L = () => ["", de, Kn, Xt], J = () => ["solid", "dashed", "dotted", "double"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    X,
    K
  ], V = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X, K], U = () => ["none", de, X, K], z = () => ["none", de, X, K], ee = () => [de, X, K], H = () => [hr, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Dt],
      breakpoint: [Dt],
      color: [$E],
      container: [Dt],
      "drop-shadow": [Dt],
      ease: ["in", "out", "in-out"],
      font: [BE],
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
        aspect: ["auto", "square", hr, K, X, h]
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
        z: [Kt, "auto", X, K]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [hr, "full", "auto", s, ...S()]
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
        flex: [de, hr, "auto", "initial", "none", K]
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
        order: [Kt, "first", "last", "none", X, K]
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
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
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
        text: ["base", r, Kn, Xt]
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
        font: [n, X, $a]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Bd, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zE, K, t]
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
        "line-clamp": [de, "none", X, $a]
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
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [de, "from-font", "auto", X, Xt]
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
        bg: [...x(), YE, HE]
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
        bg: ["auto", "cover", "contain", UE, WE]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Kt, X, K],
          radial: ["", X, K],
          conic: [Kt, X, K]
        }, KE, VE]
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
        outline: ["", de, Kn, Xt]
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
          XE,
          GE
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
        "inset-shadow": ["none", X, K, p]
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
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [de, Xt]
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
        "inset-ring": L()
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
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [de, Kn, Xt, $a]
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
}, nP = /* @__PURE__ */ ME(rP);
function M(...e) {
  return nP(Ct(e));
}
const dq = V_, oP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  G_,
  {
    ref: r,
    className: M("border-b", e),
    ...t
  }
));
oP.displayName = "AccordionItem";
const aP = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsx(z_, { className: "flex", children: /* @__PURE__ */ f.jsxs(
  Tv,
  {
    ref: n,
    className: M(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ f.jsx(Tr, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
aP.displayName = Tv.displayName;
const iP = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsx(
  Rv,
  {
    ref: n,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ f.jsx("div", { className: M("pb-4 pt-0", e), children: t })
  }
));
iP.displayName = Rv.displayName;
const Wd = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Hd = Ct, Rt = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Hd(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const d = r == null ? void 0 : r[l], p = a == null ? void 0 : a[l];
    if (d === null) return null;
    const m = Wd(d) || Wd(p);
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
  return Hd(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, sP = Rt(
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
), cP = u.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: M(sP({ variant: t }), e),
    ...r
  }
));
cP.displayName = "Alert";
const lP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "h5",
  {
    ref: r,
    className: M("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
lP.displayName = "AlertTitle";
const uP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: M("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
uP.displayName = "AlertDescription";
var du = "Avatar", [dP, fq] = Te(du), [fP, Hv] = dP(du), Vv = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = u.useState("idle");
    return /* @__PURE__ */ f.jsx(
      fP,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ f.jsx(W.span, { ...n, ref: t })
      }
    );
  }
);
Vv.displayName = du;
var Gv = "AvatarImage", zv = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = Hv(Gv, r), s = pP(n, a.referrerPolicy), c = me((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return Ee(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ f.jsx(W.img, { ...a, ref: t, src: n }) : null;
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
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ f.jsx(W.span, { ...o, ref: t }) : null;
  }
);
Uv.displayName = Yv;
function pP(e, t) {
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
const mP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
mP.displayName = Kv.displayName;
const hP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Xv,
  {
    ref: r,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
hP.displayName = Xv.displayName;
const vP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
vP.displayName = Zv.displayName;
const gP = Rt(
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
function Vd({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ f.jsx("div", { className: M(gP({ variant: t }), e), ...r });
}
const yP = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
yP.displayName = "Breadcrumb";
const bP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
bP.displayName = "BreadcrumbList";
const wP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "li",
  {
    ref: r,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
wP.displayName = "BreadcrumbItem";
const xP = u.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? pt : "a";
  return /* @__PURE__ */ f.jsx(
    o,
    {
      ref: n,
      className: M("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
xP.displayName = "BreadcrumbLink";
const SP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
SP.displayName = "BreadcrumbPage";
const CP = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ f.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ f.jsx(zo, {})
  }
);
CP.displayName = "BreadcrumbSeparator";
const _P = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.jsx(Dv, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
_P.displayName = "BreadcrumbElipssis";
const EP = {
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
}, xr = Rt(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: EP,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Uo = u.forwardRef(({ className: e, variant: t, size: r, disabled: n, href: o, ...a }, i) => /* @__PURE__ */ f.jsx(f.Fragment, { children: o ? /* @__PURE__ */ f.jsx(
  l_,
  {
    className: M(xr({ variant: t, size: r, className: e })),
    ref: i,
    to: o,
    ...a
  }
) : /* @__PURE__ */ f.jsx(
  "button",
  {
    className: M(xr({ variant: t, size: r, className: e })),
    ref: i,
    disabled: n,
    ...a
  }
) }));
Uo.displayName = "Button";
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
const La = {}, Zr = {};
function nn(e, t) {
  try {
    const n = (La[e] || (La[e] = new Intl.DateTimeFormat("en-GB", {
      timeZone: e,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1] || "";
    return n in Zr ? Zr[n] : Gd(n, n.split(":"));
  } catch {
    if (e in Zr) return Zr[e];
    const r = e == null ? void 0 : e.match(PP);
    return r ? Gd(e, r.slice(1)) : NaN;
  }
}
const PP = /([+-]\d\d):?(\d\d)?/;
function Gd(e, t) {
  const r = +t[0], n = +(t[1] || 0);
  return Zr[e] = r > 0 ? r * 60 + n : r * 60 - n;
}
class dt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(nn(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Qv(this), fl(this)) : this.setTime(Date.now());
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
    return -nn(this.timeZone, this);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), fl(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new dt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const zd = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!zd.test(e)) return;
  const t = e.replace(zd, "$1UTC");
  dt.prototype[t] && (e.startsWith("get") ? dt.prototype[e] = function() {
    return this.internal[t]();
  } : (dt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), TP(this), +this;
  }, dt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), fl(this), +this;
  }));
});
function fl(e) {
  e.internal.setTime(+e), e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset());
}
function TP(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Qv(e);
}
function Qv(e) {
  const t = nn(e.timeZone, e), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const n = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), o = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = n - o, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const s = n - t;
  s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
  const c = nn(e.timeZone, e), d = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - c, p = c !== t, m = d - s;
  if (p && m) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + m);
    const v = nn(e.timeZone, e), y = c - v;
    y && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + y), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y));
  }
}
class er extends dt {
  //#region static
  static tz(t, ...r) {
    return r.length ? new er(...r, t) : new er(Date.now(), t);
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
    return `${t} GMT${r}${n}${o} (${RP(this.timeZone, this)})`;
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
    return new er(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new er(+new Date(t), this.timeZone);
  }
  //#endregion
}
function RP(e, t) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: e,
    timeZoneName: "long"
  }).format(t).slice(12);
}
const Jv = 6048e5, NP = 864e5, Yd = Symbol.for("constructDateFrom");
function Ne(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Yd in e ? e[Yd](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function be(e, t) {
  return Ne(t || e, e);
}
function fu(e, t, r) {
  const n = be(e, r == null ? void 0 : r.in);
  return isNaN(t) ? Ne(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function pu(e, t, r) {
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
function MP(e, t, r) {
  const {
    years: n = 0,
    months: o = 0,
    weeks: a = 0,
    days: i = 0,
    hours: s = 0,
    minutes: c = 0,
    seconds: l = 0
  } = t, d = be(e, r == null ? void 0 : r.in), p = o || n ? pu(d, o + n * 12) : d, m = i || a ? fu(p, i + a * 7) : p, v = c + s * 60, h = (l + v * 60) * 1e3;
  return Ne(e, +m + h);
}
let OP = {};
function Cn() {
  return OP;
}
function Rr(e, t) {
  var s, c, l, d;
  const r = Cn(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((d = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = be(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function cn(e, t) {
  return Rr(e, { ...t, weekStartsOn: 1 });
}
function eg(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Ne(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = cn(o), i = Ne(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = cn(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Ud(e) {
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
function Br(e, ...t) {
  const r = Ne.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function ln(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function tg(e, t, r) {
  const [n, o] = Br(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = ln(n), i = ln(o), s = +a - Ud(a), c = +i - Ud(i);
  return Math.round((s - c) / NP);
}
function AP(e, t) {
  const r = eg(e, t), n = Ne(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), cn(n);
}
function DP(e, t, r) {
  return fu(e, t * 7, r);
}
function jP(e, t, r) {
  return pu(e, t * 12, r);
}
function kP(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Ne.bind(null, o));
    const a = be(o, n);
    (!r || r < a || isNaN(+a)) && (r = a);
  }), Ne(n, r || NaN);
}
function IP(e, t) {
  let r, n = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Ne.bind(null, o));
    const a = be(o, n);
    (!r || r > a || isNaN(+a)) && (r = a);
  }), Ne(n, r || NaN);
}
function $P(e, t, r) {
  const [n, o] = Br(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return +ln(n) == +ln(o);
}
function rg(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function LP(e) {
  return !(!rg(e) && typeof e != "number" || isNaN(+be(e)));
}
function FP(e, t, r) {
  const [n, o] = Br(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = n.getFullYear() - o.getFullYear(), i = n.getMonth() - o.getMonth();
  return a * 12 + i;
}
function qP(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function BP(e, t) {
  const [r, n] = Br(e, t.start, t.end);
  return { start: r, end: n };
}
function WP(e, t) {
  const { start: r, end: n } = BP(t == null ? void 0 : t.in, e);
  let o = +r > +n;
  const a = o ? +r : +n, i = o ? n : r;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(Ne(r, i)), i.setMonth(i.getMonth() + s);
  return o ? c.reverse() : c;
}
function HP(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function VP(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear();
  return r.setFullYear(n + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function ng(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function og(e, t) {
  var s, c, l, d;
  const r = Cn(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((d = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = be(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function GP(e, t) {
  return og(e, { ...t, weekStartsOn: 1 });
}
const zP = {
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
}, YP = (e, t, r) => {
  let n;
  const o = zP[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Sr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const UP = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, KP = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, XP = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ZP = {
  date: Sr({
    formats: UP,
    defaultWidth: "full"
  }),
  time: Sr({
    formats: KP,
    defaultWidth: "full"
  }),
  dateTime: Sr({
    formats: XP,
    defaultWidth: "full"
  })
}, QP = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, JP = (e, t, r, n) => QP[e];
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
const eT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, tT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, rT = {
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
}, nT = {
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
}, oT = {
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
}, aT = {
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
}, iT = (e, t) => {
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
}, sT = {
  ordinalNumber: iT,
  era: ct({
    values: eT,
    defaultWidth: "wide"
  }),
  quarter: ct({
    values: tT,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ct({
    values: rT,
    defaultWidth: "wide"
  }),
  day: ct({
    values: nT,
    defaultWidth: "wide"
  }),
  dayPeriod: ct({
    values: oT,
    defaultWidth: "wide",
    formattingValues: aT,
    defaultFormattingWidth: "wide"
  })
};
function lt(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? lT(s, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      cT(s, (p) => p.test(i))
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
function cT(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function lT(e, t) {
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
const uT = /^(\d+)(th|st|nd|rd)?/i, dT = /\d+/i, fT = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, pT = {
  any: [/^b/i, /^(a|c)/i]
}, mT = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, vT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gT = {
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
}, yT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bT = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, wT = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xT = {
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
}, ST = {
  ordinalNumber: ag({
    matchPattern: uT,
    parsePattern: dT,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: lt({
    matchPatterns: fT,
    defaultMatchWidth: "wide",
    parsePatterns: pT,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: mT,
    defaultMatchWidth: "wide",
    parsePatterns: hT,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lt({
    matchPatterns: vT,
    defaultMatchWidth: "wide",
    parsePatterns: gT,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: yT,
    defaultMatchWidth: "wide",
    parsePatterns: bT,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: wT,
    defaultMatchWidth: "any",
    parsePatterns: xT,
    defaultParseWidth: "any"
  })
}, mu = {
  code: "en-US",
  formatDistance: YP,
  formatLong: ZP,
  formatRelative: JP,
  localize: sT,
  match: ST,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function CT(e, t) {
  const r = be(e, t == null ? void 0 : t.in);
  return tg(r, ng(r)) + 1;
}
function ig(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = +cn(r) - +AP(r);
  return Math.round(n / Jv) + 1;
}
function sg(e, t) {
  var d, p, m, v;
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Cn(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = Ne((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Rr(i, t), c = Ne((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const l = Rr(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function _T(e, t) {
  var s, c, l, d;
  const r = Cn(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = sg(e, t), a = Ne((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), Rr(a, t);
}
function cg(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = +Rr(r, t) - +_T(r, t);
  return Math.round(n / Jv) + 1;
}
function ye(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const jt = {
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
}, vr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Kd = {
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
    return jt.y(e, t);
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
        return jt.M(e, t);
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
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : jt.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = CT(e);
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
    switch (n === 12 ? o = vr.noon : n === 0 ? o = vr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = vr.evening : n >= 12 ? o = vr.afternoon : n >= 4 ? o = vr.morning : o = vr.night, t) {
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
    return jt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : jt.H(e, t);
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
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : jt.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : jt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return jt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Zd(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Zt(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Zt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Zd(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Zt(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Zt(n, ":");
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
        return "GMT" + Xd(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Zt(n, ":");
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
        return "GMT" + Xd(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Zt(n, ":");
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
function Xd(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + ye(a, 2);
}
function Zd(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ye(Math.abs(e) / 60, 2) : Zt(e, t);
}
function Zt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = ye(Math.trunc(n / 60), 2), a = ye(n % 60, 2);
  return r + o + t + a;
}
const Qd = (e, t) => {
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
}, ET = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Qd(e, t);
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
  return a.replace("{{date}}", Qd(n, t)).replace("{{time}}", lg(o, t));
}, PT = {
  p: lg,
  P: ET
}, TT = /^D+$/, RT = /^Y+$/, NT = ["D", "DD", "YY", "YYYY"];
function MT(e) {
  return TT.test(e);
}
function OT(e) {
  return RT.test(e);
}
function AT(e, t, r) {
  const n = DT(e, t, r);
  if (console.warn(n), NT.includes(e)) throw new RangeError(n);
}
function DT(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const jT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, kT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, IT = /^'([^]*?)'?$/, $T = /''/g, LT = /[a-zA-Z]/;
function Ko(e, t, r) {
  var d, p, m, v, y, h, g, w;
  const n = Cn(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? mu, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((p = (d = r == null ? void 0 : r.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((v = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((h = (y = r == null ? void 0 : r.locale) == null ? void 0 : y.options) == null ? void 0 : h.weekStartsOn) ?? n.weekStartsOn ?? ((w = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = be(e, r == null ? void 0 : r.in);
  if (!LP(s))
    throw new RangeError("Invalid time value");
  let c = t.match(kT).map((b) => {
    const x = b[0];
    if (x === "p" || x === "P") {
      const C = PT[x];
      return C(b, o.formatLong);
    }
    return b;
  }).join("").match(jT).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const x = b[0];
    if (x === "'")
      return { isToken: !1, value: FT(b) };
    if (Kd[x])
      return { isToken: !0, value: b };
    if (x.match(LT))
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
    (!(r != null && r.useAdditionalWeekYearTokens) && OT(x) || !(r != null && r.useAdditionalDayOfYearTokens) && MT(x)) && AT(x, t, String(e));
    const C = Kd[x[0]];
    return C(s, x, o.localize, l);
  }).join("");
}
function FT(e) {
  const t = e.match(IT);
  return t ? t[1].replace($T, "'") : e;
}
function qT(e, t) {
  const r = be(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = r.getMonth(), a = Ne(r, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function BT(e, t) {
  return be(e, t == null ? void 0 : t.in).getMonth();
}
function WT(e, t) {
  return be(e, t == null ? void 0 : t.in).getFullYear();
}
function HT(e, t) {
  return +be(e) > +be(t);
}
function VT(e, t) {
  return +be(e) < +be(t);
}
function GT(e, t, r) {
  const [n, o] = Br(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function zT(e, t, r) {
  const [n, o] = Br(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear();
}
function YT(e, t, r) {
  const n = be(e, r == null ? void 0 : r.in), o = n.getFullYear(), a = n.getDate(), i = Ne(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = qT(i);
  return n.setMonth(t, Math.min(a, s)), n;
}
function UT(e, t, r) {
  const n = be(e, r == null ? void 0 : r.in);
  return isNaN(+n) ? Ne(e, NaN) : (n.setFullYear(t), n);
}
const KT = {
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
}, XT = (e, t, r) => {
  let n;
  const o = KT[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "em " + n : "há " + n : n;
}, ZT = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, QT = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, JT = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, e0 = {
  date: Sr({
    formats: ZT,
    defaultWidth: "full"
  }),
  time: Sr({
    formats: QT,
    defaultWidth: "full"
  }),
  dateTime: Sr({
    formats: JT,
    defaultWidth: "full"
  })
}, t0 = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, r0 = (e, t, r, n) => {
  const o = t0[e];
  return typeof o == "function" ? o(t) : o;
}, n0 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, o0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, a0 = {
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
}, i0 = {
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
}, s0 = {
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
}, c0 = {
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
}, l0 = (e, t) => {
  const r = Number(e);
  return (t == null ? void 0 : t.unit) === "week" ? r + "ª" : r + "º";
}, u0 = {
  ordinalNumber: l0,
  era: ct({
    values: n0,
    defaultWidth: "wide"
  }),
  quarter: ct({
    values: o0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ct({
    values: a0,
    defaultWidth: "wide"
  }),
  day: ct({
    values: i0,
    defaultWidth: "wide"
  }),
  dayPeriod: ct({
    values: s0,
    defaultWidth: "wide",
    formattingValues: c0,
    defaultFormattingWidth: "wide"
  })
}, d0 = /^(\d+)[ºªo]?/i, f0 = /\d+/i, p0 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, m0 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, h0 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, v0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, g0 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, y0 = {
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
}, b0 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, w0 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, x0 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, S0 = {
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
}, C0 = {
  ordinalNumber: ag({
    matchPattern: d0,
    parsePattern: f0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: lt({
    matchPatterns: p0,
    defaultMatchWidth: "wide",
    parsePatterns: m0,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: h0,
    defaultMatchWidth: "wide",
    parsePatterns: v0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lt({
    matchPatterns: g0,
    defaultMatchWidth: "wide",
    parsePatterns: y0,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: b0,
    defaultMatchWidth: "wide",
    parsePatterns: w0,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: x0,
    defaultMatchWidth: "any",
    parsePatterns: S0,
    defaultParseWidth: "any"
  })
}, Cr = {
  code: "pt-BR",
  formatDistance: XT,
  formatLong: e0,
  formatRelative: r0,
  localize: u0,
  match: C0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Jd = 5, _0 = 4;
function E0(e, t) {
  const r = t.startOfMonth(e), n = r.getDay() > 0 ? r.getDay() : 7, o = t.addDays(e, -n + 1), a = t.addDays(o, Jd * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Jd : _0;
}
function ug(e, t) {
  const r = t.startOfMonth(e), n = r.getDay();
  return n === 1 ? r : n === 0 ? t.addDays(r, -1 * 6) : t.addDays(r, -1 * (n - 1));
}
function P0(e, t) {
  const r = ug(e, t), n = E0(e, t);
  return t.addDays(r, n * 7 - 1);
}
class Nt {
  /**
   * Creates an instance of DateLib.
   *
   * @param options The options for the date library.
   * @param overrides Overrides for the date library functions.
   */
  constructor(t, r) {
    this.Date = Date, this.today = () => {
      var n;
      return (n = this.overrides) != null && n.today ? this.overrides.today() : this.options.timeZone ? er.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (n, o, a) => {
      var i;
      return (i = this.overrides) != null && i.newDate ? this.overrides.newDate(n, o, a) : this.options.timeZone ? new er(n, o, a, this.options.timeZone) : new Date(n, o, a);
    }, this.addDays = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addDays) == null ? void 0 : i.call(a, n, o)) ?? fu(n, o);
    }, this.addMonths = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addMonths) == null ? void 0 : i.call(a, n, o)) ?? pu(n, o);
    }, this.addWeeks = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addWeeks) == null ? void 0 : i.call(a, n, o)) ?? DP(n, o);
    }, this.addYears = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.addYears) == null ? void 0 : i.call(a, n, o)) ?? jP(n, o);
    }, this.differenceInCalendarDays = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.differenceInCalendarDays) == null ? void 0 : i.call(a, n, o)) ?? tg(n, o);
    }, this.differenceInCalendarMonths = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.differenceInCalendarMonths) == null ? void 0 : i.call(a, n, o)) ?? FP(n, o);
    }, this.eachMonthOfInterval = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.eachMonthOfInterval) == null ? void 0 : a.call(o, n)) ?? WP(n);
    }, this.endOfBroadcastWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.endOfBroadcastWeek) == null ? void 0 : i.call(a, n, o)) ?? P0(n, this);
    }, this.endOfISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfISOWeek) == null ? void 0 : a.call(o, n)) ?? GP(n);
    }, this.endOfMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfMonth) == null ? void 0 : a.call(o, n)) ?? qP(n);
    }, this.endOfWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.endOfWeek) == null ? void 0 : i.call(a, n, o ?? this.options)) ?? og(n, o ?? this.options);
    }, this.endOfYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.endOfYear) == null ? void 0 : a.call(o, n)) ?? VP(n);
    }, this.format = (n, o, a) => {
      var s, c;
      const i = ((c = (s = this.overrides) == null ? void 0 : s.format) == null ? void 0 : c.call(s, n, o, a ?? this.options)) ?? Ko(n, o, a ?? this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getISOWeek) == null ? void 0 : a.call(o, n)) ?? ig(n);
    }, this.getMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getMonth) == null ? void 0 : a.call(o, n)) ?? BT(n);
    }, this.getYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.getYear) == null ? void 0 : a.call(o, n)) ?? WT(n);
    }, this.getWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.getWeek) == null ? void 0 : i.call(a, n, o ?? this.options)) ?? cg(n, o ?? this.options);
    }, this.isAfter = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isAfter) == null ? void 0 : i.call(a, n, o)) ?? HT(n, o);
    }, this.isBefore = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isBefore) == null ? void 0 : i.call(a, n, o)) ?? VT(n, o);
    }, this.isDate = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.isDate) == null ? void 0 : a.call(o, n)) ?? rg(n);
    }, this.isSameDay = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameDay) == null ? void 0 : i.call(a, n, o)) ?? $P(n, o);
    }, this.isSameMonth = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameMonth) == null ? void 0 : i.call(a, n, o)) ?? GT(n, o);
    }, this.isSameYear = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.isSameYear) == null ? void 0 : i.call(a, n, o)) ?? zT(n, o);
    }, this.max = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.max) == null ? void 0 : a.call(o, n)) ?? kP(n);
    }, this.min = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.min) == null ? void 0 : a.call(o, n)) ?? IP(n);
    }, this.setMonth = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.setMonth) == null ? void 0 : i.call(a, n, o)) ?? YT(n, o);
    }, this.setYear = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.setYear) == null ? void 0 : i.call(a, n, o)) ?? UT(n, o);
    }, this.startOfBroadcastWeek = (n, o) => {
      var a, i;
      return ((i = (a = this.overrides) == null ? void 0 : a.startOfBroadcastWeek) == null ? void 0 : i.call(a, n, o ?? this)) ?? ug(n, o ?? this);
    }, this.startOfDay = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfDay) == null ? void 0 : a.call(o, n)) ?? ln(n);
    }, this.startOfISOWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfISOWeek) == null ? void 0 : a.call(o, n)) ?? cn(n);
    }, this.startOfMonth = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfMonth) == null ? void 0 : a.call(o, n)) ?? HP(n);
    }, this.startOfWeek = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfWeek) == null ? void 0 : a.call(o, n)) ?? Rr(n, this.options);
    }, this.startOfYear = (n) => {
      var o, a;
      return ((a = (o = this.overrides) == null ? void 0 : o.startOfYear) == null ? void 0 : a.call(o, n)) ?? ng(n);
    }, this.options = { locale: mu, ...t }, this.overrides = r;
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
const Mt = new Nt();
function T0(e, t, r = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (r[a] ? o.push(r[a]) : t[xe[a]] ? o.push(t[xe[a]]) : t[et[a]] && o.push(t[et[a]]), o), [t[re.Day]]);
}
function R0(e) {
  return O.createElement("button", { ...e });
}
function N0(e) {
  return O.createElement("span", { ...e });
}
function M0(e) {
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
function O0(e) {
  const { day: t, modifiers: r, ...n } = e;
  return O.createElement("td", { ...n });
}
function A0(e) {
  const { day: t, modifiers: r, ...n } = e, o = O.useRef(null);
  return O.useEffect(() => {
    var a;
    r.focused && ((a = o.current) == null || a.focus());
  }, [r.focused]), O.createElement("button", { ref: o, ...n });
}
function D0(e) {
  const { options: t, className: r, components: n, classNames: o, ...a } = e, i = [o[re.Dropdown], r].join(" "), s = t == null ? void 0 : t.find(({ value: c }) => c === a.value);
  return O.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[re.DropdownRoot] },
    O.createElement(n.Select, { className: i, ...a }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: d }) => O.createElement(n.Option, { key: c, value: c, disabled: d }, l))),
    O.createElement(
      "span",
      { className: o[re.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      O.createElement(n.Chevron, { orientation: "down", size: 18, className: o[re.Chevron] })
    )
  );
}
function j0(e) {
  return O.createElement("div", { ...e });
}
function k0(e) {
  return O.createElement("div", { ...e });
}
function I0(e) {
  const { calendarMonth: t, displayIndex: r, ...n } = e;
  return O.createElement("div", { ...n }, e.children);
}
function $0(e) {
  const { calendarMonth: t, displayIndex: r, ...n } = e;
  return O.createElement("div", { ...n });
}
function L0(e) {
  return O.createElement("table", { ...e });
}
function F0(e) {
  return O.createElement("div", { ...e });
}
const dg = a_(void 0);
function _n() {
  const e = i_(dg);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function q0(e) {
  const { components: t } = _n();
  return O.createElement(t.Dropdown, { ...e });
}
function B0(e) {
  const { onPreviousClick: t, onNextClick: r, previousMonth: n, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: c, labelNext: l } } = _n(), d = qe((m) => {
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
      { type: "button", className: s[re.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: d },
      O.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[re.Chevron] })
    )
  );
}
function W0(e) {
  const { components: t } = _n();
  return O.createElement(t.Button, { ...e });
}
function H0(e) {
  return O.createElement("option", { ...e });
}
function V0(e) {
  const { components: t } = _n();
  return O.createElement(t.Button, { ...e });
}
function G0(e) {
  const { rootRef: t, ...r } = e;
  return O.createElement("div", { ...r, ref: t });
}
function z0(e) {
  return O.createElement("select", { ...e });
}
function Y0(e) {
  const { week: t, ...r } = e;
  return O.createElement("tr", { ...r });
}
function U0(e) {
  return O.createElement("th", { ...e });
}
function K0(e) {
  return O.createElement(
    "thead",
    { "aria-hidden": !0 },
    O.createElement("tr", { ...e })
  );
}
function X0(e) {
  const { week: t, ...r } = e;
  return O.createElement("th", { ...r });
}
function Z0(e) {
  return O.createElement("th", { ...e });
}
function Q0(e) {
  return O.createElement("tbody", { ...e });
}
function J0(e) {
  const { components: t } = _n();
  return O.createElement(t.Dropdown, { ...e });
}
const eR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: R0,
  CaptionLabel: N0,
  Chevron: M0,
  Day: O0,
  DayButton: A0,
  Dropdown: D0,
  DropdownNav: j0,
  Footer: k0,
  Month: I0,
  MonthCaption: $0,
  MonthGrid: L0,
  Months: F0,
  MonthsDropdown: q0,
  Nav: B0,
  NextMonthButton: W0,
  Option: H0,
  PreviousMonthButton: V0,
  Root: G0,
  Select: z0,
  Week: Y0,
  WeekNumber: X0,
  WeekNumberHeader: Z0,
  Weekday: U0,
  Weekdays: K0,
  Weeks: Q0,
  YearsDropdown: J0
}, Symbol.toStringTag, { value: "Module" }));
function tR(e) {
  return {
    ...eR,
    ...e
  };
}
function rR(e) {
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
function nR() {
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
  return (r ?? new Nt(t)).format(e, "LLLL y");
}
const oR = fg;
function aR(e, t, r) {
  return (r ?? new Nt(t)).format(e, "d");
}
function iR(e, t = Mt) {
  return t.format(e, "LLLL");
}
function sR(e) {
  return e < 10 ? `0${e.toLocaleString()}` : `${e.toLocaleString()}`;
}
function cR() {
  return "";
}
function lR(e, t, r) {
  return (r ?? new Nt(t)).format(e, "cccccc");
}
function pg(e, t = Mt) {
  return t.format(e, "yyyy");
}
const uR = pg, dR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: fg,
  formatDay: aR,
  formatMonthCaption: oR,
  formatMonthDropdown: iR,
  formatWeekNumber: sR,
  formatWeekNumberHeader: cR,
  formatWeekdayName: lR,
  formatYearCaption: uR,
  formatYearDropdown: pg
}, Symbol.toStringTag, { value: "Module" }));
function fR(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...dR,
    ...e
  };
}
function pR(e, t, r, n, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: i(e),
    end: s(e)
  }).map((m) => {
    const v = n.formatMonthDropdown(m, o), y = l(m), h = t && m < a(t) || r && m > a(r) || !1;
    return { value: y, label: v, disabled: h };
  });
}
function mR(e, t = {}, r = {}) {
  let n = { ...t == null ? void 0 : t[re.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    n = {
      ...n,
      ...r == null ? void 0 : r[o]
    };
  }), n;
}
function hR(e, t, r) {
  const n = e.today(), o = t ? e.startOfISOWeek(n) : e.startOfWeek(n), a = [];
  for (let i = 0; i < 7; i++) {
    const s = e.addDays(o, i);
    a.push(s);
  }
  return a;
}
function vR(e, t, r, n) {
  if (!e || !t)
    return;
  const { startOfYear: o, endOfYear: a, addYears: i, getYear: s, isBefore: c, isSameYear: l } = n, d = o(e), p = a(t), m = [];
  let v = d;
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
  return (r ?? new Nt(t)).format(e, "LLLL y");
}
const gR = mg;
function yR(e, t, r, n) {
  let o = (n ?? new Nt(r)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function hg(e, t, r, n) {
  let o = (n ?? new Nt(r)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const bR = hg;
function wR() {
  return "";
}
function xR(e) {
  return "Choose the Month";
}
function SR(e) {
  return "Go to the Next Month";
}
function CR(e) {
  return "Go to the Previous Month";
}
function _R(e, t, r) {
  return (r ?? new Nt(t)).format(e, "cccc");
}
function ER(e, t) {
  return `Week ${e}`;
}
function PR(e) {
  return "Week Number";
}
function TR(e) {
  return "Choose the Year";
}
const RR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: gR,
  labelDay: bR,
  labelDayButton: hg,
  labelGrid: mg,
  labelGridcell: yR,
  labelMonthDropdown: xR,
  labelNav: wR,
  labelNext: SR,
  labelPrevious: CR,
  labelWeekNumber: ER,
  labelWeekNumberHeader: PR,
  labelWeekday: _R,
  labelYearDropdown: TR
}, Symbol.toStringTag, { value: "Module" }));
function NR(e, t, { classNames: r, months: n, focused: o, dateLib: a }) {
  const i = rr(null), s = rr(n), c = rr(!1);
  cv(() => {
    const l = s.current;
    if (s.current = n, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement))
      return;
    const d = i.current, p = e.current.cloneNode(!0);
    if (p instanceof HTMLElement ? ([
      ...p.querySelectorAll("[data-animated-month]") ?? []
    ].forEach((g) => {
      const w = g.querySelector("[data-animated-month]");
      w && g.contains(w) && g.removeChild(w);
    }), i.current = p) : i.current = null, n.length === 0 || l.length === 0 || n.length !== l.length || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o || c.current || a.isSameMonth(n[0].date, l[0].date))
      return;
    const v = [
      ...(d == null ? void 0 : d.querySelectorAll("[data-animated-month]")) ?? []
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
function MR(e, t, r, n) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: c } = r ?? {}, { addDays: l, differenceInCalendarDays: d, differenceInCalendarMonths: p, endOfBroadcastWeek: m, endOfISOWeek: v, endOfMonth: y, endOfWeek: h, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: x } = n, C = c ? w(o, n) : i ? b(o) : x(o), _ = c ? m(a, n) : i ? v(y(a)) : h(y(a)), S = d(_, C), E = p(a, o) + 1, N = [];
  for (let j = 0; j <= S; j++) {
    const q = l(C, j);
    if (t && g(q, t))
      break;
    N.push(q);
  }
  const k = (c ? 35 : 42) * E;
  if (s && N.length < k) {
    const j = k - N.length;
    for (let q = 0; q < j; q++) {
      const F = l(N[N.length - 1], 1);
      N.push(F);
    }
  }
  return N;
}
function OR(e) {
  const t = [];
  return e.reduce((r, n) => {
    const o = [], a = n.weeks.reduce((i, s) => [...i, ...s.days], o);
    return [...r, ...a];
  }, t);
}
function AR(e, t, r, n) {
  const { numberOfMonths: o = 1 } = r, a = [];
  for (let i = 0; i < o; i++) {
    const s = n.addMonths(e, i);
    if (t && s > t)
      break;
    a.push(s);
  }
  return a;
}
function ef(e, t) {
  const { month: r, defaultMonth: n, today: o = t.today(), numberOfMonths: a = 1, endMonth: i, startMonth: s } = e;
  let c = r || n || o;
  const { differenceInCalendarMonths: l, addMonths: d, startOfMonth: p } = t;
  if (i && l(i, c) < 0) {
    const m = -1 * (a - 1);
    c = d(i, m);
  }
  return s && l(c, s) < 0 && (c = s), p(c);
}
class vg {
  constructor(t, r, n = Mt) {
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
class DR {
  constructor(t, r) {
    this.date = t, this.weeks = r;
  }
}
class jR {
  constructor(t, r) {
    this.days = r, this.weekNumber = t;
  }
}
function kR(e, t, r, n) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: d, startOfBroadcastWeek: p, startOfISOWeek: m, startOfWeek: v } = n, y = e.reduce((h, g) => {
    const w = r.broadcastCalendar ? p(g, n) : r.ISOWeek ? m(g) : v(g), b = r.broadcastCalendar ? a(g, n) : r.ISOWeek ? i(s(g)) : c(s(g)), x = t.filter((E) => E >= w && E <= b), C = r.broadcastCalendar ? 35 : 42;
    if (r.fixedWeeks && x.length < C) {
      const E = t.filter((N) => {
        const T = C - x.length;
        return N > b && N <= o(b, T);
      });
      x.push(...E);
    }
    const _ = x.reduce((E, N) => {
      const T = r.ISOWeek ? l(N) : d(N), k = E.find((q) => q.weekNumber === T), j = new vg(N, g, n);
      return k ? k.days.push(j) : E.push(new jR(T, [j])), E;
    }, []), S = new DR(g, _);
    return h.push(S), h;
  }, []);
  return r.reverseMonths ? y.reverse() : y;
}
function IR(e, t) {
  let { startMonth: r, endMonth: n } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: c, endOfYear: l, newDate: d, today: p } = t, { fromYear: m, toYear: v, fromMonth: y, toMonth: h } = e;
  !r && y && (r = y), !r && m && (r = t.newDate(m, 0, 1)), !n && h && (n = h), !n && v && (n = d(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return r ? r = i(r) : m ? r = d(m, 0, 1) : !r && g && (r = o(c(e.today ?? p(), -100))), n ? n = s(n) : v ? n = d(v, 11, 31) : !n && g && (n = l(e.today ?? p())), [
    r && a(r),
    n && a(n)
  ];
}
function $R(e, t, r, n) {
  if (r.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = r, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = n, l = o ? a : 1, d = i(e);
  if (!t)
    return s(d, l);
  if (!(c(t, e) < a))
    return s(d, l);
}
function LR(e, t, r, n) {
  if (r.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = r, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = n, l = o ? a ?? 1 : 1, d = i(e);
  if (!t)
    return s(d, -l);
  if (!(c(d, t) <= 0))
    return s(d, -l);
}
function FR(e) {
  const t = [];
  return e.reduce((r, n) => [...r, ...n.weeks], t);
}
function Xo(e, t) {
  const [r, n] = Pr(e);
  return [t === void 0 ? r : t, n];
}
function qR(e, t) {
  const [r, n] = IR(e, t), { startOfMonth: o, endOfMonth: a } = t, i = ef(e, t), [s, c] = Xo(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  Lr(() => {
    const S = ef(e, t);
    c(S);
  }, [e.timeZone]);
  const l = AR(s, n, e, t), d = MR(l, e.endMonth ? a(e.endMonth) : void 0, e, t), p = kR(l, d, e, t), m = FR(p), v = OR(p), y = LR(s, r, e, t), h = $R(s, n, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (S) => m.some((E) => E.days.some((N) => N.isEqualTo(S))), x = (S) => {
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
function BR(e, t, r, n) {
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
function xt(e, t, r = !1, n = Mt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = n;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(t, o) >= (r ? 1 : 0) && i(a, t) >= (r ? 1 : 0)) : !r && a ? s(a, t) : !r && o ? s(o, t) : !1;
}
function gg(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function hu(e) {
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
function St(e, t, r = Mt) {
  const n = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = r;
  return n.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (r.isDate(s))
      return o(e, s);
    if (xg(s, r))
      return s.includes(e);
    if (hu(s))
      return xt(s, e, !1, r);
    if (wg(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (gg(s)) {
      const c = a(s.before, e), l = a(s.after, e), d = c > 0, p = l < 0;
      return i(s.before, s.after) ? p && d : d || p;
    }
    return yg(s) ? a(e, s.after) > 0 : bg(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function WR(e, t, r, n, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: d, addWeeks: p, addYears: m, endOfBroadcastWeek: v, endOfISOWeek: y, endOfWeek: h, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: x, startOfWeek: C } = i;
  let S = {
    day: l,
    week: p,
    month: d,
    year: m,
    startOfWeek: (E) => c ? b(E, i) : s ? x(E) : C(E),
    endOfWeek: (E) => c ? v(E, i) : s ? y(E) : h(E)
  }[e](r, t === "after" ? 1 : -1);
  return t === "before" && n ? S = g([n, S]) : t === "after" && o && (S = w([o, S])), S;
}
function Sg(e, t, r, n, o, a, i, s = 0) {
  if (s > 365)
    return;
  const c = WR(
    e,
    t,
    r.date,
    // should be refDay? or refDay.date?
    n,
    o,
    a,
    i
  ), l = !!(a.disabled && St(c, a.disabled, i)), d = !!(a.hidden && St(c, a.hidden, i)), p = c, m = new vg(c, p, i);
  return !l && !d ? m : Sg(e, t, m, n, o, a, i, s + 1);
}
function HR(e, t, r, n, o) {
  const { autoFocus: a } = e, [i, s] = Pr(), c = BR(t.days, r, n || (() => !1), i), [l, d] = Pr(a ? c : void 0);
  return {
    isFocusTarget: (h) => !!(c != null && c.isEqualTo(h)),
    setFocused: d,
    focused: l,
    blur: () => {
      s(l), d(void 0);
    },
    moveFocus: (h, g) => {
      if (!l)
        return;
      const w = Sg(h, g, l, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), d(w));
    }
  };
}
function VR(e, t, r) {
  const { disabled: n, hidden: o, modifiers: a, showOutsideDays: i, broadcastCalendar: s, today: c } = t, { isSameDay: l, isSameMonth: d, startOfMonth: p, isBefore: m, endOfMonth: v, isAfter: y } = r, h = t.startMonth && p(t.startMonth), g = t.endMonth && v(t.endMonth), w = {
    [xe.focused]: [],
    [xe.outside]: [],
    [xe.disabled]: [],
    [xe.hidden]: [],
    [xe.today]: []
  }, b = {};
  for (const x of e) {
    const { date: C, displayMonth: _ } = x, S = !!(_ && !d(C, _)), E = !!(h && m(C, h)), N = !!(g && y(C, g)), T = !!(n && St(C, n, r)), k = !!(o && St(C, o, r)) || E || N || // Broadcast calendar will show outside days as default
    !s && !i && S || s && i === !1 && S, j = l(C, c ?? r.today());
    S && w.outside.push(x), T && w.disabled.push(x), k && w.hidden.push(x), j && w.today.push(x), a && Object.keys(a).forEach((q) => {
      const F = a == null ? void 0 : a[q];
      F && St(C, F, r) && (b[q] ? b[q].push(x) : b[q] = [x]);
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
function GR(e, t) {
  const { selected: r, required: n, onSelect: o } = e, [a, i] = Xo(r, o ? r : void 0), s = o ? r : a, { isSameDay: c } = t, l = (v) => (s == null ? void 0 : s.some((y) => c(y, v))) ?? !1, { min: d, max: p } = e;
  return {
    selected: s,
    select: (v, y, h) => {
      let g = [...s ?? []];
      if (l(v)) {
        if ((s == null ? void 0 : s.length) === d || n && (s == null ? void 0 : s.length) === 1)
          return;
        g = s == null ? void 0 : s.filter((w) => !c(w, v));
      } else
        (s == null ? void 0 : s.length) === p ? g = [v] : g = [...g, v];
      return o || i(g), o == null || o(g, v, y, h), g;
    },
    isSelected: l
  };
}
function zR(e, t, r = 0, n = 0, o = !1, a = Mt) {
  const { from: i, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: d } = a;
  let p;
  if (!i && !s)
    p = { from: e, to: r > 0 ? void 0 : e };
  else if (i && !s)
    c(i, e) ? o ? p = { from: i, to: void 0 } : p = void 0 : d(e, i) ? p = { from: e, to: i } : p = { from: i, to: e };
  else if (i && s)
    if (c(i, e) && c(s, e))
      o ? p = { from: i, to: s } : p = void 0;
    else if (c(i, e))
      p = { from: i, to: r > 0 ? void 0 : e };
    else if (c(s, e))
      p = { from: e, to: r > 0 ? void 0 : e };
    else if (d(e, i))
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
function YR(e, t, r = Mt) {
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
function tf(e, t, r = Mt) {
  return xt(e, t.from, !1, r) || xt(e, t.to, !1, r) || xt(t, e.from, !1, r) || xt(t, e.to, !1, r);
}
function UR(e, t, r = Mt) {
  const n = Array.isArray(t) ? t : [t];
  if (n.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : r.isDate(s) ? xt(e, s, !1, r) : xg(s, r) ? s.some((c) => xt(e, c, !1, r)) : hu(s) ? s.from && s.to ? tf(e, { from: s.from, to: s.to }, r) : !1 : wg(s) ? YR(e, s.dayOfWeek, r) : gg(s) ? r.isAfter(s.before, s.after) ? tf(e, {
    from: r.addDays(s.after, 1),
    to: r.addDays(s.before, -1)
  }, r) : St(e.from, s, r) || St(e.to, s, r) : yg(s) || bg(s) ? St(e.from, s, r) || St(e.to, s, r) : !1))
    return !0;
  const i = n.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const c = r.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (i.some((d) => d(s)))
        return !0;
      s = r.addDays(s, 1);
    }
  }
  return !1;
}
function KR(e, t) {
  const { disabled: r, excludeDisabled: n, selected: o, required: a, onSelect: i } = e, [s, c] = Xo(o, i ? o : void 0), l = i ? o : s;
  return {
    selected: l,
    select: (m, v, y) => {
      const { min: h, max: g } = e, w = m ? zR(m, l, h, g, a, t) : void 0;
      return n && r && (w != null && w.from) && w.to && UR({ from: w.from, to: w.to }, r, t) && (w.from = m, w.to = void 0), i || c(w), i == null || i(w, m, v, y), w;
    },
    isSelected: (m) => l && xt(l, m, !1, t)
  };
}
function XR(e, t) {
  const { selected: r, required: n, onSelect: o } = e, [a, i] = Xo(r, o ? r : void 0), s = o ? r : a, { isSameDay: c } = t;
  return {
    selected: s,
    select: (p, m, v) => {
      let y = p;
      return !n && s && s && c(p, s) && (y = void 0), o || i(y), o == null || o(y, p, m, v), y;
    },
    isSelected: (p) => s ? c(s, p) : !1
  };
}
function ZR(e, t) {
  const r = XR(e, t), n = GR(e, t), o = KR(e, t);
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
  const { components: t, formatters: r, labels: n, dateLib: o, locale: a, classNames: i } = co(() => {
    const ae = { ...mu, ...e.locale };
    return {
      dateLib: new Nt({
        locale: ae,
        weekStartsOn: e.broadcastCalendar ? 1 : e.weekStartsOn,
        firstWeekContainsDate: e.firstWeekContainsDate,
        useAdditionalWeekYearTokens: e.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: e.useAdditionalDayOfYearTokens,
        timeZone: e.timeZone,
        numerals: e.numerals
      }, e.dateLib),
      components: tR(e.components),
      formatters: fR(e.formatters),
      labels: { ...RR, ...e.labels },
      locale: ae,
      classNames: { ...nR(), ...e.classNames }
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
  ]), { captionLayout: s, mode: c, onDayBlur: l, onDayClick: d, onDayFocus: p, onDayKeyDown: m, onDayMouseEnter: v, onDayMouseLeave: y, onNextClick: h, onPrevClick: g, showWeekNumber: w, styles: b } = e, { formatCaption: x, formatDay: C, formatMonthDropdown: _, formatWeekNumber: S, formatWeekNumberHeader: E, formatWeekdayName: N, formatYearDropdown: T } = r, k = qR(e, o), { days: j, months: q, navStart: F, navEnd: R, previousMonth: I, nextMonth: D, goToMonth: G } = k, B = VR(j, e, o), { isSelected: L, select: J, selected: te } = ZR(e, o) ?? {}, { blur: A, focused: V, isFocusTarget: U, moveFocus: z, setFocused: ee } = HR(e, k, B, L ?? (() => !1), o), { labelDayButton: H, labelGridcell: oe, labelGrid: se, labelMonthDropdown: ce, labelNav: fe, labelWeekday: le, labelWeekNumber: Re, labelWeekNumberHeader: Y, labelYearDropdown: ke } = n, $e = co(() => hR(o, e.ISOWeek), [o, e.ISOWeek]), Le = c !== void 0 || d !== void 0, mr = qe(() => {
    I && (G(I), g == null || g(I));
  }, [I, G, g]), bt = qe(() => {
    D && (G(D), h == null || h(D));
  }, [G, D, h]), Vn = qe((ae, we) => (ue) => {
    ue.preventDefault(), ue.stopPropagation(), ee(ae), J == null || J(ae.date, we, ue), d == null || d(ae.date, we, ue);
  }, [J, d, ee]), P = qe((ae, we) => (ue) => {
    ee(ae), p == null || p(ae.date, we, ue);
  }, [p, ee]), Z = qe((ae, we) => (ue) => {
    A(), l == null || l(ae.date, we, ue);
  }, [A, l]), Q = qe((ae, we) => (ue) => {
    const At = {
      ArrowLeft: ["day", e.dir === "rtl" ? "after" : "before"],
      ArrowRight: ["day", e.dir === "rtl" ? "before" : "after"],
      ArrowDown: ["week", "after"],
      ArrowUp: ["week", "before"],
      PageUp: [ue.shiftKey ? "year" : "month", "before"],
      PageDown: [ue.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (At[ue.key]) {
      ue.preventDefault(), ue.stopPropagation();
      const [Xe, Gn] = At[ue.key];
      z(Xe, Gn);
    }
    m == null || m(ae.date, we, ue);
  }, [z, m, e.dir]), pe = qe((ae, we) => (ue) => {
    v == null || v(ae.date, we, ue);
  }, [v]), Me = qe((ae, we) => (ue) => {
    y == null || y(ae.date, we, ue);
  }, [y]), Se = qe((ae) => (we) => {
    const ue = Number(we.target.value), At = o.setMonth(o.startOfMonth(ae), ue);
    G(At);
  }, [o, G]), ie = qe((ae) => (we) => {
    const ue = Number(we.target.value), At = o.setYear(o.startOfMonth(ae), ue);
    G(At);
  }, [o, G]), { className: Ke, style: Ot } = co(() => ({
    className: [i[re.Root], e.className].filter(Boolean).join(" "),
    style: { ...b == null ? void 0 : b[re.Root], ...e.style }
  }), [i, e.className, e.style, b]), Ae = rR(e), it = rr(null);
  NR(it, !!e.animate, {
    classNames: i,
    months: q,
    focused: V,
    dateLib: o
  });
  const Ut = {
    dayPickerProps: e,
    selected: te,
    select: J,
    isSelected: L,
    months: q,
    nextMonth: D,
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
    { value: Ut },
    O.createElement(
      t.Root,
      { rootRef: e.animate ? it : void 0, className: Ke, style: Ot, dir: e.dir, id: e.id, lang: e.lang, nonce: e.nonce, title: e.title, role: e.role, "aria-label": e["aria-label"], ...Ae },
      O.createElement(
        t.Months,
        { className: i[re.Months], style: b == null ? void 0 : b[re.Months] },
        !e.hideNavigation && O.createElement(t.Nav, { className: i[re.Nav], style: b == null ? void 0 : b[re.Nav], "aria-label": fe(), onPreviousClick: mr, onNextClick: bt, previousMonth: I, nextMonth: D }),
        q.map((ae, we) => {
          const ue = pR(ae.date, F, R, r, o), At = vR(F, R, r, o);
          return O.createElement(
            t.Month,
            { "data-animated-month": e.animate ? "true" : void 0, className: i[re.Month], style: b == null ? void 0 : b[re.Month], key: we, displayIndex: we, calendarMonth: ae },
            O.createElement(t.MonthCaption, { "data-animated-caption": e.animate ? "true" : void 0, className: i[re.MonthCaption], style: b == null ? void 0 : b[re.MonthCaption], calendarMonth: ae, displayIndex: we }, s != null && s.startsWith("dropdown") ? O.createElement(
              t.DropdownNav,
              { className: i[re.Dropdowns], style: b == null ? void 0 : b[re.Dropdowns] },
              s === "dropdown" || s === "dropdown-months" ? O.createElement(t.MonthsDropdown, { className: i[re.MonthsDropdown], "aria-label": ce(), classNames: i, components: t, disabled: !!e.disableNavigation, onChange: Se(ae.date), options: ue, style: b == null ? void 0 : b[re.Dropdown], value: o.getMonth(ae.date) }) : O.createElement("span", { role: "status", "aria-live": "polite" }, _(ae.date, o)),
              s === "dropdown" || s === "dropdown-years" ? O.createElement(t.YearsDropdown, { className: i[re.YearsDropdown], "aria-label": ke(o.options), classNames: i, components: t, disabled: !!e.disableNavigation, onChange: ie(ae.date), options: At, style: b == null ? void 0 : b[re.Dropdown], value: o.getYear(ae.date) }) : O.createElement("span", { role: "status", "aria-live": "polite" }, T(ae.date, o))
            ) : O.createElement(t.CaptionLabel, { className: i[re.CaptionLabel], role: "status", "aria-live": "polite" }, x(ae.date, o.options, o))),
            O.createElement(
              t.MonthGrid,
              { role: "grid", "aria-multiselectable": c === "multiple" || c === "range", "aria-label": se(ae.date, o.options, o) || void 0, className: i[re.MonthGrid], style: b == null ? void 0 : b[re.MonthGrid] },
              !e.hideWeekdays && O.createElement(
                t.Weekdays,
                { "data-animated-weekdays": e.animate ? "true" : void 0, className: i[re.Weekdays], style: b == null ? void 0 : b[re.Weekdays] },
                w && O.createElement(t.WeekNumberHeader, { "aria-label": Y(o.options), className: i[re.WeekNumberHeader], style: b == null ? void 0 : b[re.WeekNumberHeader], scope: "col" }, E()),
                $e.map((Xe, Gn) => O.createElement(t.Weekday, { "aria-label": le(Xe, o.options, o), className: i[re.Weekday], key: Gn, style: b == null ? void 0 : b[re.Weekday], scope: "col" }, N(Xe, o.options, o)))
              ),
              O.createElement(t.Weeks, { "data-animated-weeks": e.animate ? "true" : void 0, className: i[re.Weeks], style: b == null ? void 0 : b[re.Weeks] }, ae.weeks.map((Xe, Gn) => O.createElement(
                t.Week,
                { className: i[re.Week], key: Xe.weekNumber, style: b == null ? void 0 : b[re.Week], week: Xe },
                w && O.createElement(t.WeekNumber, { week: Xe, style: b == null ? void 0 : b[re.WeekNumber], "aria-label": Re(Xe.weekNumber, {
                  locale: a
                }), className: i[re.WeekNumber], scope: "row", role: "rowheader" }, S(Xe.weekNumber)),
                Xe.days.map((De) => {
                  const { date: st } = De, ge = B(De);
                  if (ge[xe.focused] = !ge.hidden && !!(V != null && V.isEqualTo(De)), ge[et.selected] = (L == null ? void 0 : L(st)) || ge.selected, hu(te)) {
                    const { from: ka, to: Ia } = te;
                    ge[et.range_start] = !!(ka && Ia && o.isSameDay(st, ka)), ge[et.range_end] = !!(ka && Ia && o.isSameDay(st, Ia)), ge[et.range_middle] = xt(te, st, !0, o);
                  }
                  const r_ = mR(ge, b, e.modifiersStyles), n_ = T0(ge, i, e.modifiersClassNames), o_ = !Le && !ge.hidden ? oe(st, ge, o.options, o) : void 0;
                  return O.createElement(t.Day, { key: `${o.format(st, "yyyy-MM-dd")}_${o.format(De.displayMonth, "yyyy-MM")}`, day: De, modifiers: ge, className: n_.join(" "), style: r_, role: "gridcell", "aria-selected": ge.selected || void 0, "aria-label": o_, "data-day": o.format(st, "yyyy-MM-dd"), "data-month": De.outside ? o.format(st, "yyyy-MM") : void 0, "data-selected": ge.selected || void 0, "data-disabled": ge.disabled || void 0, "data-hidden": ge.hidden || void 0, "data-outside": De.outside || void 0, "data-focused": ge.focused || void 0, "data-today": ge.today || void 0 }, !ge.hidden && Le ? O.createElement(t.DayButton, { className: i[re.DayButton], style: b == null ? void 0 : b[re.DayButton], type: "button", day: De, modifiers: ge, disabled: ge.disabled || void 0, tabIndex: U(De) ? 0 : -1, "aria-label": H(st, ge, o.options, o), onClick: Vn(De, ge), onBlur: Z(De, ge), onFocus: P(De, ge), onKeyDown: Q(De, ge), onMouseEnter: pe(De, ge), onMouseLeave: Me(De, ge) }, C(st, o.options, o)) : !ge.hidden && C(De.date, o.options, o));
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
  return /* @__PURE__ */ f.jsx(
    Cg,
    {
      locale: Cr,
      showOutsideDays: t,
      className: M("p-3", e),
      ...r
    }
  );
}
_g.displayName = "Calendar";
const QR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
QR.displayName = "Card";
const JR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: M("flex flex-col space-y-1.5 p-2", e),
    ...t
  }
));
JR.displayName = "CardHeader";
const eN = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
eN.displayName = "CardTitle";
const tN = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "p",
  {
    ref: r,
    className: M("text-sm text-muted-foreground px-4", e),
    ...t
  }
));
tN.displayName = "CardDescription";
const rN = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, className: M("p-4", e), ...t }));
rN.displayName = "CardContent";
const nN = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: M("flex items-center p-4 pt-0", e),
    ...t
  }
));
nN.displayName = "CardFooter";
var Fa, rf;
function nt() {
  if (rf) return Fa;
  rf = 1;
  var e = Array.isArray;
  return Fa = e, Fa;
}
var qa, nf;
function Eg() {
  if (nf) return qa;
  nf = 1;
  var e = typeof zn == "object" && zn && zn.Object === Object && zn;
  return qa = e, qa;
}
var Ba, of;
function vt() {
  if (of) return Ba;
  of = 1;
  var e = Eg(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Ba = r, Ba;
}
var Wa, af;
function En() {
  if (af) return Wa;
  af = 1;
  var e = vt(), t = e.Symbol;
  return Wa = t, Wa;
}
var Ha, sf;
function oN() {
  if (sf) return Ha;
  sf = 1;
  var e = En(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = e ? e.toStringTag : void 0;
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
  return Ha = a, Ha;
}
var Va, cf;
function aN() {
  if (cf) return Va;
  cf = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Va = r, Va;
}
var Ga, lf;
function lr() {
  if (lf) return Ga;
  lf = 1;
  var e = En(), t = oN(), r = aN(), n = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : n : a && a in Object(s) ? t(s) : r(s);
  }
  return Ga = i, Ga;
}
var za, uf;
function ur() {
  if (uf) return za;
  uf = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return za = e, za;
}
var Ya, df;
function Pn() {
  if (df) return Ya;
  df = 1;
  var e = lr(), t = ur(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && e(o) == r;
  }
  return Ya = n, Ya;
}
var Ua, ff;
function vu() {
  if (ff) return Ua;
  ff = 1;
  var e = nt(), t = Pn(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return Ua = o, Ua;
}
var Ka, pf;
function qt() {
  if (pf) return Ka;
  pf = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ka = e, Ka;
}
var Xa, mf;
function gu() {
  if (mf) return Xa;
  mf = 1;
  var e = lr(), t = qt(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == o || c == r || c == a;
  }
  return Xa = i, Xa;
}
var Za, hf;
function iN() {
  if (hf) return Za;
  hf = 1;
  var e = vt(), t = e["__core-js_shared__"];
  return Za = t, Za;
}
var Qa, vf;
function sN() {
  if (vf) return Qa;
  vf = 1;
  var e = iN(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Qa = r, Qa;
}
var Ja, gf;
function Pg() {
  if (gf) return Ja;
  gf = 1;
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
  return Ja = r, Ja;
}
var ei, yf;
function cN() {
  if (yf) return ei;
  yf = 1;
  var e = gu(), t = sN(), r = qt(), n = Pg(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, d = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!r(m) || t(m))
      return !1;
    var v = e(m) ? d : a;
    return v.test(n(m));
  }
  return ei = p, ei;
}
var ti, bf;
function lN() {
  if (bf) return ti;
  bf = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return ti = e, ti;
}
var ri, wf;
function dr() {
  if (wf) return ri;
  wf = 1;
  var e = cN(), t = lN();
  function r(n, o) {
    var a = t(n, o);
    return e(a) ? a : void 0;
  }
  return ri = r, ri;
}
var ni, xf;
function Zo() {
  if (xf) return ni;
  xf = 1;
  var e = dr(), t = e(Object, "create");
  return ni = t, ni;
}
var oi, Sf;
function uN() {
  if (Sf) return oi;
  Sf = 1;
  var e = Zo();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return oi = t, oi;
}
var ai, Cf;
function dN() {
  if (Cf) return ai;
  Cf = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return ai = e, ai;
}
var ii, _f;
function fN() {
  if (_f) return ii;
  _f = 1;
  var e = Zo(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return ii = o, ii;
}
var si, Ef;
function pN() {
  if (Ef) return si;
  Ef = 1;
  var e = Zo(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : r.call(a, o);
  }
  return si = n, si;
}
var ci, Pf;
function mN() {
  if (Pf) return ci;
  Pf = 1;
  var e = Zo(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && o === void 0 ? t : o, this;
  }
  return ci = r, ci;
}
var li, Tf;
function hN() {
  if (Tf) return li;
  Tf = 1;
  var e = uN(), t = dN(), r = fN(), n = pN(), o = mN();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, li = a, li;
}
var ui, Rf;
function vN() {
  if (Rf) return ui;
  Rf = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ui = e, ui;
}
var di, Nf;
function yu() {
  if (Nf) return di;
  Nf = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return di = e, di;
}
var fi, Mf;
function Qo() {
  if (Mf) return fi;
  Mf = 1;
  var e = yu();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (e(r[o][0], n))
        return o;
    return -1;
  }
  return fi = t, fi;
}
var pi, Of;
function gN() {
  if (Of) return pi;
  Of = 1;
  var e = Qo(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return pi = n, pi;
}
var mi, Af;
function yN() {
  if (Af) return mi;
  Af = 1;
  var e = Qo();
  function t(r) {
    var n = this.__data__, o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return mi = t, mi;
}
var hi, Df;
function bN() {
  if (Df) return hi;
  Df = 1;
  var e = Qo();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return hi = t, hi;
}
var vi, jf;
function wN() {
  if (jf) return vi;
  jf = 1;
  var e = Qo();
  function t(r, n) {
    var o = this.__data__, a = e(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return vi = t, vi;
}
var gi, kf;
function Jo() {
  if (kf) return gi;
  kf = 1;
  var e = vN(), t = gN(), r = yN(), n = bN(), o = wN();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, gi = a, gi;
}
var yi, If;
function bu() {
  if (If) return yi;
  If = 1;
  var e = dr(), t = vt(), r = e(t, "Map");
  return yi = r, yi;
}
var bi, $f;
function xN() {
  if ($f) return bi;
  $f = 1;
  var e = hN(), t = Jo(), r = bu();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return bi = n, bi;
}
var wi, Lf;
function SN() {
  if (Lf) return wi;
  Lf = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return wi = e, wi;
}
var xi, Ff;
function ea() {
  if (Ff) return xi;
  Ff = 1;
  var e = SN();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return xi = t, xi;
}
var Si, qf;
function CN() {
  if (qf) return Si;
  qf = 1;
  var e = ea();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Si = t, Si;
}
var Ci, Bf;
function _N() {
  if (Bf) return Ci;
  Bf = 1;
  var e = ea();
  function t(r) {
    return e(this, r).get(r);
  }
  return Ci = t, Ci;
}
var _i, Wf;
function EN() {
  if (Wf) return _i;
  Wf = 1;
  var e = ea();
  function t(r) {
    return e(this, r).has(r);
  }
  return _i = t, _i;
}
var Ei, Hf;
function PN() {
  if (Hf) return Ei;
  Hf = 1;
  var e = ea();
  function t(r, n) {
    var o = e(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return Ei = t, Ei;
}
var Pi, Vf;
function wu() {
  if (Vf) return Pi;
  Vf = 1;
  var e = xN(), t = CN(), r = _N(), n = EN(), o = PN();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Pi = a, Pi;
}
var Ti, Gf;
function TN() {
  if (Gf) return Ti;
  Gf = 1;
  var e = wu(), t = "Expected a function";
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
  return r.Cache = e, Ti = r, Ti;
}
var Ri, zf;
function RN() {
  if (zf) return Ri;
  zf = 1;
  var e = TN(), t = 500;
  function r(n) {
    var o = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return Ri = r, Ri;
}
var Ni, Yf;
function NN() {
  if (Yf) return Ni;
  Yf = 1;
  var e = RN(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(r, "$1") : s || i);
    }), a;
  });
  return Ni = n, Ni;
}
var Mi, Uf;
function Tg() {
  if (Uf) return Mi;
  Uf = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Mi = e, Mi;
}
var Oi, Kf;
function MN() {
  if (Kf) return Oi;
  Kf = 1;
  var e = En(), t = Tg(), r = nt(), n = Pn(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
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
  return Oi = i, Oi;
}
var Ai, Xf;
function Rg() {
  if (Xf) return Ai;
  Xf = 1;
  var e = MN();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Ai = t, Ai;
}
var Di, Zf;
function Ng() {
  if (Zf) return Di;
  Zf = 1;
  var e = nt(), t = vu(), r = NN(), n = Rg();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return Di = o, Di;
}
var ji, Qf;
function ta() {
  if (Qf) return ji;
  Qf = 1;
  var e = Pn();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ji = t, ji;
}
var ki, Jf;
function xu() {
  if (Jf) return ki;
  Jf = 1;
  var e = Ng(), t = ta();
  function r(n, o) {
    o = e(o, n);
    for (var a = 0, i = o.length; n != null && a < i; )
      n = n[t(o[a++])];
    return a && a == i ? n : void 0;
  }
  return ki = r, ki;
}
var Ii, ep;
function Mg() {
  if (ep) return Ii;
  ep = 1;
  var e = xu();
  function t(r, n, o) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? o : a;
  }
  return Ii = t, Ii;
}
Mg();
var $i, tp;
function ON() {
  if (tp) return $i;
  tp = 1;
  function e(t) {
    return t == null;
  }
  return $i = e, $i;
}
var AN = ON();
const DN = /* @__PURE__ */ ht(AN);
var Li, rp;
function jN() {
  if (rp) return Li;
  rp = 1;
  var e = lr(), t = nt(), r = ur(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return Li = o, Li;
}
var kN = jN();
const Og = /* @__PURE__ */ ht(kN);
var IN = gu();
const wo = /* @__PURE__ */ ht(IN);
var $N = qt();
const Ag = /* @__PURE__ */ ht($N);
var Xn = { exports: {} }, he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np;
function LN() {
  if (np) return he;
  np = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
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
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return he.ContextConsumer = i, he.ContextProvider = a, he.Element = e, he.ForwardRef = c, he.Fragment = r, he.Lazy = m, he.Memo = p, he.Portal = t, he.Profiler = o, he.StrictMode = n, he.Suspense = l, he.SuspenseList = d, he.isAsyncMode = function() {
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
    return h(g) === d;
  }, he.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === l || g === d || g === v || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === a || g.$$typeof === i || g.$$typeof === c || g.$$typeof === y || g.getModuleId !== void 0);
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
var op;
function FN() {
  return op || (op = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, h = !1, g = !1, w = !1, b = !1, x;
    x = Symbol.for("react.module.reference");
    function C(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === o || b || Y === n || Y === l || Y === d || w || Y === v || y || h || g || typeof Y == "object" && Y !== null && (Y.$$typeof === m || Y.$$typeof === p || Y.$$typeof === a || Y.$$typeof === i || Y.$$typeof === c || // This needs to include all possible module reference object
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
              case d:
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
    var S = i, E = a, N = e, T = c, k = r, j = m, q = p, F = t, R = o, I = n, D = l, G = d, B = !1, L = !1;
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
      return _(Y) === d;
    }
    ve.ContextConsumer = S, ve.ContextProvider = E, ve.Element = N, ve.ForwardRef = T, ve.Fragment = k, ve.Lazy = j, ve.Memo = q, ve.Portal = F, ve.Profiler = R, ve.StrictMode = I, ve.Suspense = D, ve.SuspenseList = G, ve.isAsyncMode = J, ve.isConcurrentMode = te, ve.isContextConsumer = A, ve.isContextProvider = V, ve.isElement = U, ve.isForwardRef = z, ve.isFragment = ee, ve.isLazy = H, ve.isMemo = oe, ve.isPortal = se, ve.isProfiler = ce, ve.isStrictMode = fe, ve.isSuspense = le, ve.isSuspenseList = Re, ve.isValidElementType = C, ve.typeOf = _;
  }()), ve;
}
var ap;
function qN() {
  return ap || (ap = 1, process.env.NODE_ENV === "production" ? Xn.exports = LN() : Xn.exports = FN()), Xn.exports;
}
qN();
var Fi, ip;
function Dg() {
  if (ip) return Fi;
  ip = 1;
  var e = lr(), t = ur(), r = "[object Number]";
  function n(o) {
    return typeof o == "number" || t(o) && e(o) == r;
  }
  return Fi = n, Fi;
}
var qi, sp;
function BN() {
  if (sp) return qi;
  sp = 1;
  var e = Dg();
  function t(r) {
    return e(r) && r != +r;
  }
  return qi = t, qi;
}
var WN = BN();
const HN = /* @__PURE__ */ ht(WN);
var VN = Dg();
const GN = /* @__PURE__ */ ht(VN);
var Zn = function(t) {
  return Og(t) && t.indexOf("%") === t.length - 1;
}, Je = function(t) {
  return GN(t) && !HN(t);
}, xo = function(t) {
  return Je(t) || Og(t);
};
function pl(e) {
  "@babel/helpers - typeof";
  return pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pl(e);
}
var zN = ["viewBox", "children"], YN = [
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
], cp = ["points", "pathLength"], Bi = {
  svg: zN,
  polygon: cp,
  polyline: cp
}, jg = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], UN = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, KN = function(t, r, n) {
  if (!Ag(t) || pl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    jg.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = UN(i, r, n));
  }), o;
}, XN = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, ZN = function(t, r, n, o) {
  var a, i = (a = Bi == null ? void 0 : Bi[o]) !== null && a !== void 0 ? a : [];
  return !wo(t) && (o && i.includes(r) || YN.includes(r)) || jg.includes(r);
}, kg = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ s_(t) && (o = t.props), !Ag(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    ZN((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, QN = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function ml() {
  return ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ml.apply(this, arguments);
}
function JN(e, t) {
  if (e == null) return {};
  var r = eM(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function tM(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, l = JN(e, QN), d = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, p = Ct("recharts-surface", a);
  return /* @__PURE__ */ O.createElement("svg", ml({}, kg(l, !0, "svg"), {
    className: p,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ O.createElement("title", null, s), /* @__PURE__ */ O.createElement("desc", null, c), t);
}
var rM = process.env.NODE_ENV !== "production", lo = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (rM && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, Wi, lp;
function nM() {
  if (lp) return Wi;
  lp = 1;
  function e(t, r, n) {
    var o = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + r];
    return i;
  }
  return Wi = e, Wi;
}
var Hi, up;
function oM() {
  if (up) return Hi;
  up = 1;
  var e = nM();
  function t(r, n, o) {
    var a = r.length;
    return o = o === void 0 ? a : o, !n && o >= a ? r : e(r, n, o);
  }
  return Hi = t, Hi;
}
var Vi, dp;
function Ig() {
  if (dp) return Vi;
  dp = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function c(l) {
    return s.test(l);
  }
  return Vi = c, Vi;
}
var Gi, fp;
function aM() {
  if (fp) return Gi;
  fp = 1;
  function e(t) {
    return t.split("");
  }
  return Gi = e, Gi;
}
var zi, pp;
function iM() {
  if (pp) return zi;
  pp = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", c = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + c + ")", d = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", y = l + "?", h = "[" + a + "]?", g = "(?:" + v + "(?:" + [d, p, m].join("|") + ")" + h + y + ")*", w = h + y + g, b = "(?:" + [d + s + "?", s, p, m, i].join("|") + ")", x = RegExp(c + "(?=" + c + ")|" + b + w, "g");
  function C(_) {
    return _.match(x) || [];
  }
  return zi = C, zi;
}
var Yi, mp;
function sM() {
  if (mp) return Yi;
  mp = 1;
  var e = aM(), t = Ig(), r = iM();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return Yi = n, Yi;
}
var Ui, hp;
function cM() {
  if (hp) return Ui;
  hp = 1;
  var e = oM(), t = Ig(), r = sM(), n = Rg();
  function o(a) {
    return function(i) {
      i = n(i);
      var s = t(i) ? r(i) : void 0, c = s ? s[0] : i.charAt(0), l = s ? e(s, 1).join("") : i.slice(1);
      return c[a]() + l;
    };
  }
  return Ui = o, Ui;
}
var Ki, vp;
function lM() {
  if (vp) return Ki;
  vp = 1;
  var e = cM(), t = e("toUpperCase");
  return Ki = t, Ki;
}
var uM = lM();
const $g = /* @__PURE__ */ ht(uM);
function Qn(e) {
  return function() {
    return e;
  };
}
const Lg = Math.cos, So = Math.sin, ot = Math.sqrt, Co = Math.PI, ra = 2 * Co, hl = Math.PI, vl = 2 * hl, Qt = 1e-6, dM = vl - Qt;
function Fg(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function fM(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Fg;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class pM {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Fg : fM(t);
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
    else if (m > Qt) if (!(Math.abs(p * c - l * d) > Qt) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - i, y = o - s, h = c * c + l * l, g = v * v + y * y, w = Math.sqrt(h), b = Math.sqrt(m), x = a * Math.tan((hl - Math.acos((h + m - g) / (2 * w * b))) / 2), C = x / b, _ = x / w;
      Math.abs(C - 1) > Qt && this._append`L${t + C * d},${r + C * p}`, this._append`A${a},${a},0,0,${+(p * v > d * y)},${this._x1 = t + _ * c},${this._y1 = r + _ * l}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), l = t + s, d = r + c, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${d}` : (Math.abs(this._x1 - l) > Qt || Math.abs(this._y1 - d) > Qt) && this._append`L${l},${d}`, n && (m < 0 && (m = m % vl + vl), m > dM ? this._append`A${n},${n},0,1,${p},${t - s},${r - c}A${n},${n},0,1,${p},${this._x1 = l},${this._y1 = d}` : m > Qt && this._append`A${n},${n},0,${+(m >= hl)},${p},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function mM(e) {
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
  }, () => new pM(t);
}
const Su = {
  draw(e, t) {
    const r = ot(t / Co);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, ra);
  }
}, hM = {
  draw(e, t) {
    const r = ot(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, qg = ot(1 / 3), vM = qg * 2, gM = {
  draw(e, t) {
    const r = ot(t / vM), n = r * qg;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, yM = {
  draw(e, t) {
    const r = ot(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, bM = 0.8908130915292852, Bg = So(Co / 10) / So(7 * Co / 10), wM = So(ra / 10) * Bg, xM = -Lg(ra / 10) * Bg, SM = {
  draw(e, t) {
    const r = ot(t * bM), n = wM * r, o = xM * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = ra * a / 5, s = Lg(i), c = So(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, Xi = ot(3), CM = {
  draw(e, t) {
    const r = -ot(t / (Xi * 3));
    e.moveTo(0, r * 2), e.lineTo(-Xi * r, -r), e.lineTo(Xi * r, -r), e.closePath();
  }
}, Ve = -0.5, Ge = ot(3) / 2, gl = 1 / ot(12), _M = (gl / 2 + 1) * 3, EM = {
  draw(e, t) {
    const r = ot(t / _M), n = r / 2, o = r * gl, a = n, i = r * gl + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(Ve * n - Ge * o, Ge * n + Ve * o), e.lineTo(Ve * a - Ge * i, Ge * a + Ve * i), e.lineTo(Ve * s - Ge * c, Ge * s + Ve * c), e.lineTo(Ve * n + Ge * o, Ve * o - Ge * n), e.lineTo(Ve * a + Ge * i, Ve * i - Ge * a), e.lineTo(Ve * s + Ge * c, Ve * c - Ge * s), e.closePath();
  }
};
function PM(e, t) {
  let r = null, n = mM(o);
  e = typeof e == "function" ? e : Qn(e || Su), t = typeof t == "function" ? t : Qn(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Qn(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Qn(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
var TM = ["type", "size", "sizeType"];
function yl() {
  return yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yl.apply(this, arguments);
}
function gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gp(Object(r), !0).forEach(function(n) {
      RM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RM(e, t, r) {
  return t = NM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NM(e) {
  var t = MM(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function MM(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OM(e, t) {
  if (e == null) return {};
  var r = AM(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function AM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Wg = {
  symbolCircle: Su,
  symbolCross: hM,
  symbolDiamond: gM,
  symbolSquare: yM,
  symbolStar: SM,
  symbolTriangle: CM,
  symbolWye: EM
}, DM = Math.PI / 180, jM = function(t) {
  var r = "symbol".concat($g(t));
  return Wg[r] || Su;
}, kM = function(t, r, n) {
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
      var o = 18 * DM;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, IM = function(t, r) {
  Wg["symbol".concat($g(t))] = r;
}, Hg = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = OM(t, TM), l = yp(yp({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var g = jM(n), w = PM().type(g).size(kM(a, s, n));
    return w();
  }, p = l.className, m = l.cx, v = l.cy, y = kg(l, !0);
  return m === +m && v === +v && a === +a ? /* @__PURE__ */ O.createElement("path", yl({}, y, {
    className: Ct("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(v, ")"),
    d: d()
  })) : null;
};
Hg.registerSymbol = IM;
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bl.apply(this, arguments);
}
function bp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bp(Object(r), !0).forEach(function(n) {
      dn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function FM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Gg(n.key), n);
  }
}
function qM(e, t, r) {
  return t && FM(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BM(e, t, r) {
  return t = _o(t), WM(e, Vg() ? Reflect.construct(t, r || [], _o(e).constructor) : t.apply(e, r));
}
function WM(e, t) {
  if (t && (Nr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return HM(e);
}
function HM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vg = function() {
    return !!e;
  })();
}
function _o(e) {
  return _o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _o(e);
}
function VM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wl(e, t);
}
function wl(e, t) {
  return wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, wl(e, t);
}
function dn(e, t, r) {
  return t = Gg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gg(e) {
  var t = GM(e, "string");
  return Nr(t) == "symbol" ? t : t + "";
}
function GM(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ze = 32, Cu = /* @__PURE__ */ function(e) {
  function t() {
    return LM(this, t), BM(this, t, arguments);
  }
  return VM(t, e), qM(t, [{
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
          var l = $M({}, n);
          return delete l.legendIcon, /* @__PURE__ */ O.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ O.createElement(Hg, {
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
      var n = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, c = o.formatter, l = o.inactiveColor, d = {
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
        var h = v.formatter || c, g = Ct(dn(dn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", v.inactive));
        if (v.type === "none")
          return null;
        var w = wo(v.value) ? null : v.value;
        lo(
          !wo(v.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var b = v.inactive ? l : v.color;
        return /* @__PURE__ */ O.createElement("li", bl({
          className: g,
          style: p,
          key: "legend-item-".concat(y)
        }, KN(n.props, v, y)), /* @__PURE__ */ O.createElement(tM, {
          width: i,
          height: i,
          viewBox: d,
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
}(Ho);
dn(Cu, "displayName", "Legend");
dn(Cu, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Zi, wp;
function zM() {
  if (wp) return Zi;
  wp = 1;
  var e = Jo();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Zi = t, Zi;
}
var Qi, xp;
function YM() {
  if (xp) return Qi;
  xp = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Qi = e, Qi;
}
var Ji, Sp;
function UM() {
  if (Sp) return Ji;
  Sp = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Ji = e, Ji;
}
var es, Cp;
function KM() {
  if (Cp) return es;
  Cp = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return es = e, es;
}
var ts, _p;
function XM() {
  if (_p) return ts;
  _p = 1;
  var e = Jo(), t = bu(), r = wu(), n = 200;
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
  return ts = o, ts;
}
var rs, Ep;
function zg() {
  if (Ep) return rs;
  Ep = 1;
  var e = Jo(), t = zM(), r = YM(), n = UM(), o = KM(), a = XM();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = r, i.prototype.get = n, i.prototype.has = o, i.prototype.set = a, rs = i, rs;
}
var ns, Pp;
function ZM() {
  if (Pp) return ns;
  Pp = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return ns = t, ns;
}
var os, Tp;
function QM() {
  if (Tp) return os;
  Tp = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return os = e, os;
}
var as, Rp;
function Yg() {
  if (Rp) return as;
  Rp = 1;
  var e = wu(), t = ZM(), r = QM();
  function n(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, as = n, as;
}
var is, Np;
function JM() {
  if (Np) return is;
  Np = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return is = e, is;
}
var ss, Mp;
function Ug() {
  if (Mp) return ss;
  Mp = 1;
  function e(t, r) {
    return t.has(r);
  }
  return ss = e, ss;
}
var cs, Op;
function Kg() {
  if (Op) return cs;
  Op = 1;
  var e = Yg(), t = JM(), r = Ug(), n = 1, o = 2;
  function a(i, s, c, l, d, p) {
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
          if (!r(x, N) && (C === E || d(C, E, c, l, p)))
            return x.push(N);
        })) {
          b = !1;
          break;
        }
      } else if (!(C === _ || d(C, _, c, l, p))) {
        b = !1;
        break;
      }
    }
    return p.delete(i), p.delete(s), b;
  }
  return cs = a, cs;
}
var ls, Ap;
function eO() {
  if (Ap) return ls;
  Ap = 1;
  var e = vt(), t = e.Uint8Array;
  return ls = t, ls;
}
var us, Dp;
function tO() {
  if (Dp) return us;
  Dp = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return us = e, us;
}
var ds, jp;
function _u() {
  if (jp) return ds;
  jp = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return ds = e, ds;
}
var fs, kp;
function rO() {
  if (kp) return fs;
  kp = 1;
  var e = En(), t = eO(), r = yu(), n = Kg(), o = tO(), a = _u(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", d = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", y = "[object Set]", h = "[object String]", g = "[object Symbol]", w = "[object ArrayBuffer]", b = "[object DataView]", x = e ? e.prototype : void 0, C = x ? x.valueOf : void 0;
  function _(S, E, N, T, k, j, q) {
    switch (N) {
      case b:
        if (S.byteLength != E.byteLength || S.byteOffset != E.byteOffset)
          return !1;
        S = S.buffer, E = E.buffer;
      case w:
        return !(S.byteLength != E.byteLength || !j(new t(S), new t(E)));
      case c:
      case l:
      case m:
        return r(+S, +E);
      case d:
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
        var D = n(F(S), F(E), T, k, j, q);
        return q.delete(S), D;
      case g:
        if (C)
          return C.call(S) == C.call(E);
    }
    return !1;
  }
  return fs = _, fs;
}
var ps, Ip;
function Xg() {
  if (Ip) return ps;
  Ip = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return ps = e, ps;
}
var ms, $p;
function nO() {
  if ($p) return ms;
  $p = 1;
  var e = Xg(), t = nt();
  function r(n, o, a) {
    var i = o(n);
    return t(n) ? i : e(i, a(n));
  }
  return ms = r, ms;
}
var hs, Lp;
function oO() {
  if (Lp) return hs;
  Lp = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++n < o; ) {
      var s = t[n];
      r(s, n, t) && (i[a++] = s);
    }
    return i;
  }
  return hs = e, hs;
}
var vs, Fp;
function aO() {
  if (Fp) return vs;
  Fp = 1;
  function e() {
    return [];
  }
  return vs = e, vs;
}
var gs, qp;
function iO() {
  if (qp) return gs;
  qp = 1;
  var e = oO(), t = aO(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return n.call(i, s);
    }));
  } : t;
  return gs = a, gs;
}
var ys, Bp;
function sO() {
  if (Bp) return ys;
  Bp = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return ys = e, ys;
}
var bs, Wp;
function cO() {
  if (Wp) return bs;
  Wp = 1;
  var e = lr(), t = ur(), r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return bs = n, bs;
}
var ws, Hp;
function Eu() {
  if (Hp) return ws;
  Hp = 1;
  var e = cO(), t = ur(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !o.call(i, "callee");
  };
  return ws = a, ws;
}
var Qr = { exports: {} }, xs, Vp;
function lO() {
  if (Vp) return xs;
  Vp = 1;
  function e() {
    return !1;
  }
  return xs = e, xs;
}
Qr.exports;
var Gp;
function Zg() {
  return Gp || (Gp = 1, function(e, t) {
    var r = vt(), n = lO(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
    e.exports = l;
  }(Qr, Qr.exports)), Qr.exports;
}
var Ss, zp;
function Pu() {
  if (zp) return Ss;
  zp = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return Ss = r, Ss;
}
var Cs, Yp;
function Tu() {
  if (Yp) return Cs;
  Yp = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Cs = t, Cs;
}
var _s, Up;
function uO() {
  if (Up) return _s;
  Up = 1;
  var e = lr(), t = Tu(), r = ur(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", d = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", y = "[object String]", h = "[object WeakMap]", g = "[object ArrayBuffer]", w = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", C = "[object Int8Array]", _ = "[object Int16Array]", S = "[object Int32Array]", E = "[object Uint8Array]", N = "[object Uint8ClampedArray]", T = "[object Uint16Array]", k = "[object Uint32Array]", j = {};
  j[b] = j[x] = j[C] = j[_] = j[S] = j[E] = j[N] = j[T] = j[k] = !0, j[n] = j[o] = j[g] = j[a] = j[w] = j[i] = j[s] = j[c] = j[l] = j[d] = j[p] = j[m] = j[v] = j[y] = j[h] = !1;
  function q(F) {
    return r(F) && t(F.length) && !!j[e(F)];
  }
  return _s = q, _s;
}
var Es, Kp;
function Qg() {
  if (Kp) return Es;
  Kp = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Es = e, Es;
}
var Jr = { exports: {} };
Jr.exports;
var Xp;
function dO() {
  return Xp || (Xp = 1, function(e, t) {
    var r = Eg(), n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Jr, Jr.exports)), Jr.exports;
}
var Ps, Zp;
function Jg() {
  if (Zp) return Ps;
  Zp = 1;
  var e = uO(), t = Qg(), r = dO(), n = r && r.isTypedArray, o = n ? t(n) : e;
  return Ps = o, Ps;
}
var Ts, Qp;
function fO() {
  if (Qp) return Ts;
  Qp = 1;
  var e = sO(), t = Eu(), r = nt(), n = Zg(), o = Pu(), a = Jg(), i = Object.prototype, s = i.hasOwnProperty;
  function c(l, d) {
    var p = r(l), m = !p && t(l), v = !p && !m && n(l), y = !p && !m && !v && a(l), h = p || m || v || y, g = h ? e(l.length, String) : [], w = g.length;
    for (var b in l)
      (d || s.call(l, b)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      o(b, w))) && g.push(b);
    return g;
  }
  return Ts = c, Ts;
}
var Rs, Jp;
function pO() {
  if (Jp) return Rs;
  Jp = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || e;
    return r === o;
  }
  return Rs = t, Rs;
}
var Ns, em;
function mO() {
  if (em) return Ns;
  em = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Ns = e, Ns;
}
var Ms, tm;
function hO() {
  if (tm) return Ms;
  tm = 1;
  var e = mO(), t = e(Object.keys, Object);
  return Ms = t, Ms;
}
var Os, rm;
function vO() {
  if (rm) return Os;
  rm = 1;
  var e = pO(), t = hO(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return Os = o, Os;
}
var As, nm;
function na() {
  if (nm) return As;
  nm = 1;
  var e = gu(), t = Tu();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return As = r, As;
}
var Ds, om;
function Ru() {
  if (om) return Ds;
  om = 1;
  var e = fO(), t = vO(), r = na();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return Ds = n, Ds;
}
var js, am;
function gO() {
  if (am) return js;
  am = 1;
  var e = nO(), t = iO(), r = Ru();
  function n(o) {
    return e(o, r, t);
  }
  return js = n, js;
}
var ks, im;
function yO() {
  if (im) return ks;
  im = 1;
  var e = gO(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function o(a, i, s, c, l, d) {
    var p = s & t, m = e(a), v = m.length, y = e(i), h = y.length;
    if (v != h && !p)
      return !1;
    for (var g = v; g--; ) {
      var w = m[g];
      if (!(p ? w in i : n.call(i, w)))
        return !1;
    }
    var b = d.get(a), x = d.get(i);
    if (b && x)
      return b == i && x == a;
    var C = !0;
    d.set(a, i), d.set(i, a);
    for (var _ = p; ++g < v; ) {
      w = m[g];
      var S = a[w], E = i[w];
      if (c)
        var N = p ? c(E, S, w, i, a, d) : c(S, E, w, a, i, d);
      if (!(N === void 0 ? S === E || l(S, E, s, c, d) : N)) {
        C = !1;
        break;
      }
      _ || (_ = w == "constructor");
    }
    if (C && !_) {
      var T = a.constructor, k = i.constructor;
      T != k && "constructor" in a && "constructor" in i && !(typeof T == "function" && T instanceof T && typeof k == "function" && k instanceof k) && (C = !1);
    }
    return d.delete(a), d.delete(i), C;
  }
  return ks = o, ks;
}
var Is, sm;
function bO() {
  if (sm) return Is;
  sm = 1;
  var e = dr(), t = vt(), r = e(t, "DataView");
  return Is = r, Is;
}
var $s, cm;
function wO() {
  if (cm) return $s;
  cm = 1;
  var e = dr(), t = vt(), r = e(t, "Promise");
  return $s = r, $s;
}
var Ls, lm;
function ey() {
  if (lm) return Ls;
  lm = 1;
  var e = dr(), t = vt(), r = e(t, "Set");
  return Ls = r, Ls;
}
var Fs, um;
function xO() {
  if (um) return Fs;
  um = 1;
  var e = dr(), t = vt(), r = e(t, "WeakMap");
  return Fs = r, Fs;
}
var qs, dm;
function SO() {
  if (dm) return qs;
  dm = 1;
  var e = bO(), t = bu(), r = wO(), n = ey(), o = xO(), a = lr(), i = Pg(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", d = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = i(e), y = i(t), h = i(r), g = i(n), w = i(o), b = a;
  return (e && b(new e(new ArrayBuffer(1))) != m || t && b(new t()) != s || r && b(r.resolve()) != l || n && b(new n()) != d || o && b(new o()) != p) && (b = function(x) {
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
          return d;
        case w:
          return p;
      }
    return C;
  }), qs = b, qs;
}
var Bs, fm;
function CO() {
  if (fm) return Bs;
  fm = 1;
  var e = zg(), t = Kg(), r = rO(), n = yO(), o = SO(), a = nt(), i = Zg(), s = Jg(), c = 1, l = "[object Arguments]", d = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function y(h, g, w, b, x, C) {
    var _ = a(h), S = a(g), E = _ ? d : o(h), N = S ? d : o(g);
    E = E == l ? p : E, N = N == l ? p : N;
    var T = E == p, k = N == p, j = E == N;
    if (j && i(h)) {
      if (!i(g))
        return !1;
      _ = !0, T = !1;
    }
    if (j && !T)
      return C || (C = new e()), _ || s(h) ? t(h, g, w, b, x, C) : r(h, g, E, w, b, x, C);
    if (!(w & c)) {
      var q = T && v.call(h, "__wrapped__"), F = k && v.call(g, "__wrapped__");
      if (q || F) {
        var R = q ? h.value() : h, I = F ? g.value() : g;
        return C || (C = new e()), x(R, I, w, b, C);
      }
    }
    return j ? (C || (C = new e()), n(h, g, w, b, x, C)) : !1;
  }
  return Bs = y, Bs;
}
var Ws, pm;
function ty() {
  if (pm) return Ws;
  pm = 1;
  var e = CO(), t = ur();
  function r(n, o, a, i, s) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : e(n, o, a, i, r, s);
  }
  return Ws = r, Ws;
}
var Hs, mm;
function _O() {
  if (mm) return Hs;
  mm = 1;
  var e = zg(), t = ty(), r = 1, n = 2;
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
          var w = c(y, h, v, a, i, g);
        if (!(w === void 0 ? t(h, y, r | n, c, g) : w))
          return !1;
      }
    }
    return !0;
  }
  return Hs = o, Hs;
}
var Vs, hm;
function ry() {
  if (hm) return Vs;
  hm = 1;
  var e = qt();
  function t(r) {
    return r === r && !e(r);
  }
  return Vs = t, Vs;
}
var Gs, vm;
function EO() {
  if (vm) return Gs;
  vm = 1;
  var e = ry(), t = Ru();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var i = o[a], s = n[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return Gs = r, Gs;
}
var zs, gm;
function ny() {
  if (gm) return zs;
  gm = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return zs = e, zs;
}
var Ys, ym;
function PO() {
  if (ym) return Ys;
  ym = 1;
  var e = _O(), t = EO(), r = ny();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return Ys = n, Ys;
}
var Us, bm;
function TO() {
  if (bm) return Us;
  bm = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Us = e, Us;
}
var Ks, wm;
function RO() {
  if (wm) return Ks;
  wm = 1;
  var e = Ng(), t = Eu(), r = nt(), n = Pu(), o = Tu(), a = ta();
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
  return Ks = i, Ks;
}
var Xs, xm;
function NO() {
  if (xm) return Xs;
  xm = 1;
  var e = TO(), t = RO();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return Xs = r, Xs;
}
var Zs, Sm;
function MO() {
  if (Sm) return Zs;
  Sm = 1;
  var e = ty(), t = Mg(), r = NO(), n = vu(), o = ry(), a = ny(), i = ta(), s = 1, c = 2;
  function l(d, p) {
    return n(d) && o(p) ? a(i(d), p) : function(m) {
      var v = t(m, d);
      return v === void 0 && v === p ? r(m, d) : e(p, v, s | c);
    };
  }
  return Zs = l, Zs;
}
var Qs, Cm;
function oa() {
  if (Cm) return Qs;
  Cm = 1;
  function e(t) {
    return t;
  }
  return Qs = e, Qs;
}
var Js, _m;
function OO() {
  if (_m) return Js;
  _m = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return Js = e, Js;
}
var ec, Em;
function AO() {
  if (Em) return ec;
  Em = 1;
  var e = xu();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return ec = t, ec;
}
var tc, Pm;
function DO() {
  if (Pm) return tc;
  Pm = 1;
  var e = OO(), t = AO(), r = vu(), n = ta();
  function o(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return tc = o, tc;
}
var rc, Tm;
function oy() {
  if (Tm) return rc;
  Tm = 1;
  var e = PO(), t = MO(), r = oa(), n = nt(), o = DO();
  function a(i) {
    return typeof i == "function" ? i : i == null ? r : typeof i == "object" ? n(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return rc = a, rc;
}
var nc, Rm;
function jO() {
  if (Rm) return nc;
  Rm = 1;
  function e(t, r, n, o) {
    for (var a = t.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (r(t[i], i, t))
        return i;
    return -1;
  }
  return nc = e, nc;
}
var oc, Nm;
function kO() {
  if (Nm) return oc;
  Nm = 1;
  function e(t) {
    return t !== t;
  }
  return oc = e, oc;
}
var ac, Mm;
function IO() {
  if (Mm) return ac;
  Mm = 1;
  function e(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return ac = e, ac;
}
var ic, Om;
function $O() {
  if (Om) return ic;
  Om = 1;
  var e = jO(), t = kO(), r = IO();
  function n(o, a, i) {
    return a === a ? r(o, a, i) : e(o, t, i);
  }
  return ic = n, ic;
}
var sc, Am;
function LO() {
  if (Am) return sc;
  Am = 1;
  var e = $O();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return sc = t, sc;
}
var cc, Dm;
function FO() {
  if (Dm) return cc;
  Dm = 1;
  function e(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return cc = e, cc;
}
var lc, jm;
function qO() {
  if (jm) return lc;
  jm = 1;
  function e() {
  }
  return lc = e, lc;
}
var uc, km;
function BO() {
  if (km) return uc;
  km = 1;
  var e = ey(), t = qO(), r = _u(), n = 1 / 0, o = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return uc = o, uc;
}
var dc, Im;
function WO() {
  if (Im) return dc;
  Im = 1;
  var e = Yg(), t = LO(), r = FO(), n = Ug(), o = BO(), a = _u(), i = 200;
  function s(c, l, d) {
    var p = -1, m = t, v = c.length, y = !0, h = [], g = h;
    if (d)
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
        if (b = d || b !== 0 ? b : 0, y && x === x) {
          for (var C = g.length; C--; )
            if (g[C] === x)
              continue e;
          l && g.push(x), h.push(b);
        } else m(g, x, d) || (g !== h && g.push(x), h.push(b));
      }
    return h;
  }
  return dc = s, dc;
}
var fc, $m;
function HO() {
  if ($m) return fc;
  $m = 1;
  var e = oy(), t = WO();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return fc = r, fc;
}
var VO = HO();
const Lm = /* @__PURE__ */ ht(VO);
function ay(e, t, r) {
  return t === !0 ? Lm(e, r) : wo(t) ? Lm(e, t) : e;
}
function Mr(e) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(e);
}
var GO = ["ref"];
function Fm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fm(Object(r), !0).forEach(function(n) {
      aa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sy(n.key), n);
  }
}
function YO(e, t, r) {
  return t && qm(e.prototype, t), r && qm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function UO(e, t, r) {
  return t = Eo(t), KO(e, iy() ? Reflect.construct(t, r || [], Eo(e).constructor) : t.apply(e, r));
}
function KO(e, t) {
  if (t && (Mr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return XO(e);
}
function XO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iy = function() {
    return !!e;
  })();
}
function Eo(e) {
  return Eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Eo(e);
}
function ZO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xl(e, t);
}
function xl(e, t) {
  return xl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, xl(e, t);
}
function aa(e, t, r) {
  return t = sy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sy(e) {
  var t = QO(e, "string");
  return Mr(t) == "symbol" ? t : t + "";
}
function QO(e, t) {
  if (Mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function JO(e, t) {
  if (e == null) return {};
  var r = e1(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function e1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function t1(e) {
  return e.value;
}
function r1(e, t) {
  if (/* @__PURE__ */ O.isValidElement(e))
    return /* @__PURE__ */ O.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ O.createElement(e, t);
  t.ref;
  var r = JO(t, GO);
  return /* @__PURE__ */ O.createElement(Cu, r);
}
var Bm = 1, Nu = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    zO(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = UO(this, t, [].concat(o)), aa(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return ZO(t, e), YO(t, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > Bm || Math.abs(o.height - this.lastBoundingBox.height) > Bm) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? wt({}, this.lastBoundingBox) : {
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
      return wt(wt({}, p), m);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.content, i = o.width, s = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, d = o.payload, p = wt(wt({
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
      }, r1(a, wt(wt({}, this.props), {}, {
        payload: ay(d, l, t1)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var a = wt(wt({}, this.defaultProps), n.props), i = a.layout;
      return i === "vertical" && Je(n.props.height) ? {
        height: n.props.height
      } : i === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
}(Ho);
aa(Nu, "displayName", "Legend");
aa(Nu, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var pc, Wm;
function n1() {
  if (Wm) return pc;
  Wm = 1;
  var e = En(), t = Eu(), r = nt(), n = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return pc = o, pc;
}
var mc, Hm;
function o1() {
  if (Hm) return mc;
  Hm = 1;
  var e = Xg(), t = n1();
  function r(n, o, a, i, s) {
    var c = -1, l = n.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var d = n[c];
      o > 0 && a(d) ? o > 1 ? r(d, o - 1, a, i, s) : e(s, d) : i || (s[s.length] = d);
    }
    return s;
  }
  return mc = r, mc;
}
var hc, Vm;
function a1() {
  if (Vm) return hc;
  Vm = 1;
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
  return hc = e, hc;
}
var vc, Gm;
function i1() {
  if (Gm) return vc;
  Gm = 1;
  var e = a1(), t = e();
  return vc = t, vc;
}
var gc, zm;
function s1() {
  if (zm) return gc;
  zm = 1;
  var e = i1(), t = Ru();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return gc = r, gc;
}
var yc, Ym;
function c1() {
  if (Ym) return yc;
  Ym = 1;
  var e = na();
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
  return yc = t, yc;
}
var bc, Um;
function l1() {
  if (Um) return bc;
  Um = 1;
  var e = s1(), t = c1(), r = t(e);
  return bc = r, bc;
}
var wc, Km;
function u1() {
  if (Km) return wc;
  Km = 1;
  var e = l1(), t = na();
  function r(n, o) {
    var a = -1, i = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return wc = r, wc;
}
var xc, Xm;
function d1() {
  if (Xm) return xc;
  Xm = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return xc = e, xc;
}
var Sc, Zm;
function f1() {
  if (Zm) return Sc;
  Zm = 1;
  var e = Pn();
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
  return Sc = t, Sc;
}
var Cc, Qm;
function p1() {
  if (Qm) return Cc;
  Qm = 1;
  var e = f1();
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
  return Cc = t, Cc;
}
var _c, Jm;
function m1() {
  if (Jm) return _c;
  Jm = 1;
  var e = Tg(), t = xu(), r = oy(), n = u1(), o = d1(), a = Qg(), i = p1(), s = oa(), c = nt();
  function l(d, p, m) {
    p.length ? p = e(p, function(h) {
      return c(h) ? function(g) {
        return t(g, h.length === 1 ? h[0] : h);
      } : h;
    }) : p = [s];
    var v = -1;
    p = e(p, a(r));
    var y = n(d, function(h, g, w) {
      var b = e(p, function(x) {
        return x(h);
      });
      return { criteria: b, index: ++v, value: h };
    });
    return o(y, function(h, g) {
      return i(h, g, m);
    });
  }
  return _c = l, _c;
}
var Ec, eh;
function h1() {
  if (eh) return Ec;
  eh = 1;
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
  return Ec = e, Ec;
}
var Pc, th;
function v1() {
  if (th) return Pc;
  th = 1;
  var e = h1(), t = Math.max;
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
  return Pc = r, Pc;
}
var Tc, rh;
function g1() {
  if (rh) return Tc;
  rh = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Tc = e, Tc;
}
var Rc, nh;
function y1() {
  if (nh) return Rc;
  nh = 1;
  var e = dr(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Rc = t, Rc;
}
var Nc, oh;
function b1() {
  if (oh) return Nc;
  oh = 1;
  var e = g1(), t = y1(), r = oa(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Nc = n, Nc;
}
var Mc, ah;
function w1() {
  if (ah) return Mc;
  ah = 1;
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
  return Mc = n, Mc;
}
var Oc, ih;
function x1() {
  if (ih) return Oc;
  ih = 1;
  var e = b1(), t = w1(), r = t(e);
  return Oc = r, Oc;
}
var Ac, sh;
function S1() {
  if (sh) return Ac;
  sh = 1;
  var e = oa(), t = v1(), r = x1();
  function n(o, a) {
    return r(t(o, a, e), o + "");
  }
  return Ac = n, Ac;
}
var Dc, ch;
function C1() {
  if (ch) return Dc;
  ch = 1;
  var e = yu(), t = na(), r = Pu(), n = qt();
  function o(a, i, s) {
    if (!n(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && r(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return Dc = o, Dc;
}
var jc, lh;
function _1() {
  if (lh) return jc;
  lh = 1;
  var e = o1(), t = m1(), r = S1(), n = C1(), o = r(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && n(a, i[0], i[1]) ? i = [] : s > 2 && n(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return jc = o, jc;
}
var E1 = _1();
const P1 = /* @__PURE__ */ ht(E1);
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function Sl() {
  return Sl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sl.apply(this, arguments);
}
function T1(e, t) {
  return O1(e) || M1(e, t) || N1(e, t) || R1();
}
function R1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N1(e, t) {
  if (e) {
    if (typeof e == "string") return uh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e, t);
  }
}
function uh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function M1(e, t) {
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
function O1(e) {
  if (Array.isArray(e)) return e;
}
function dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dh(Object(r), !0).forEach(function(n) {
      A1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A1(e, t, r) {
  return t = D1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function D1(e) {
  var t = j1(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function j1(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k1(e) {
  return Array.isArray(e) && xo(e[0]) && xo(e[1]) ? e.join(" ~ ") : e;
}
var I1 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, d = t.payload, p = t.formatter, m = t.itemSorter, v = t.wrapperClassName, y = t.labelClassName, h = t.label, g = t.labelFormatter, w = t.accessibilityLayer, b = w === void 0 ? !1 : w, x = function() {
    if (d && d.length) {
      var q = {
        padding: 0,
        margin: 0
      }, F = (m ? P1(d, m) : d).map(function(R, I) {
        if (R.type === "none")
          return null;
        var D = kc({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: R.color || "#000"
        }, s), G = R.formatter || p || k1, B = R.value, L = R.name, J = B, te = L;
        if (G && J != null && te != null) {
          var A = G(B, L, R, I, d);
          if (Array.isArray(A)) {
            var V = T1(A, 2);
            J = V[0], te = V[1];
          } else
            J = A;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ O.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: D
          }, xo(te) ? /* @__PURE__ */ O.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, te) : null, xo(te) ? /* @__PURE__ */ O.createElement("span", {
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
  }, C = kc({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), _ = kc({
    margin: 0
  }, l), S = !DN(h), E = S ? h : "", N = Ct("recharts-default-tooltip", v), T = Ct("recharts-tooltip-label", y);
  S && g && d !== void 0 && d !== null && (E = g(h, d));
  var k = b ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ O.createElement("div", Sl({
    className: N,
    style: C
  }, k), /* @__PURE__ */ O.createElement("p", {
    className: T,
    style: _
  }, /* @__PURE__ */ O.isValidElement(E) ? E : "".concat(E)), x());
};
function pn(e) {
  "@babel/helpers - typeof";
  return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pn(e);
}
function Jn(e, t, r) {
  return t = $1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $1(e) {
  var t = L1(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function L1(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kr = "recharts-tooltip-wrapper", F1 = {
  visibility: "hidden"
};
function q1(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Ct(Kr, Jn(Jn(Jn(Jn({}, "".concat(Kr, "-right"), Je(r) && t && Je(t.x) && r >= t.x), "".concat(Kr, "-left"), Je(r) && t && Je(t.x) && r < t.x), "".concat(Kr, "-bottom"), Je(n) && t && Je(t.y) && n >= t.y), "".concat(Kr, "-top"), Je(n) && t && Je(t.y) && n < t.y));
}
function fh(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && Je(a[n]))
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
function B1(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function W1(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, d, p;
  return i.height > 0 && i.width > 0 && r ? (d = fh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = fh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = B1({
    translateX: d,
    translateY: p,
    useTranslate3d: s
  })) : l = F1, {
    cssProperties: l,
    cssClasses: q1({
      translateX: d,
      translateY: p,
      coordinate: r
    })
  };
}
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function ph(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ph(Object(r), !0).forEach(function(n) {
      _l(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function V1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ly(n.key), n);
  }
}
function G1(e, t, r) {
  return t && V1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z1(e, t, r) {
  return t = Po(t), Y1(e, cy() ? Reflect.construct(t, r || [], Po(e).constructor) : t.apply(e, r));
}
function Y1(e, t) {
  if (t && (Or(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return U1(e);
}
function U1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cy = function() {
    return !!e;
  })();
}
function Po(e) {
  return Po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Po(e);
}
function K1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cl(e, t);
}
function Cl(e, t) {
  return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Cl(e, t);
}
function _l(e, t, r) {
  return t = ly(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ly(e) {
  var t = X1(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function X1(e, t) {
  if (Or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hh = 1, Z1 = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    H1(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = z1(this, t, [].concat(o)), _l(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), _l(r, "handleKeyDown", function(i) {
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
  return K1(t, e), G1(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > hh || Math.abs(n.height - this.state.lastBoundingBox.height) > hh) && this.setState({
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
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, d = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, v = o.offset, y = o.position, h = o.reverseDirection, g = o.useTranslate3d, w = o.viewBox, b = o.wrapperStyle, x = W1({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: v,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: w
      }), C = x.cssClasses, _ = x.cssProperties, S = mh(mh({
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
}(Ho), Q1 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, J1 = {
  isSsr: Q1()
};
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
function vh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vh(Object(r), !0).forEach(function(n) {
      Mu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dy(n.key), n);
  }
}
function rA(e, t, r) {
  return t && tA(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nA(e, t, r) {
  return t = To(t), oA(e, uy() ? Reflect.construct(t, r || [], To(e).constructor) : t.apply(e, r));
}
function oA(e, t) {
  if (t && (Ar(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return aA(e);
}
function aA(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uy = function() {
    return !!e;
  })();
}
function To(e) {
  return To = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, To(e);
}
function iA(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && El(e, t);
}
function El(e, t) {
  return El = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, El(e, t);
}
function Mu(e, t, r) {
  return t = dy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dy(e) {
  var t = sA(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function sA(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function cA(e) {
  return e.dataKey;
}
function lA(e, t) {
  return /* @__PURE__ */ O.isValidElement(e) ? /* @__PURE__ */ O.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ O.createElement(e, t) : /* @__PURE__ */ O.createElement(I1, t);
}
var Ou = /* @__PURE__ */ function(e) {
  function t() {
    return eA(this, t), nA(this, t, arguments);
  }
  return iA(t, e), rA(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, d = o.coordinate, p = o.filterNull, m = o.isAnimationActive, v = o.offset, y = o.payload, h = o.payloadUniqBy, g = o.position, w = o.reverseDirection, b = o.useTranslate3d, x = o.viewBox, C = o.wrapperStyle, _ = y ?? [];
      p && _.length && (_ = ay(y.filter(function(E) {
        return E.value != null && (E.hide !== !0 || n.props.includeHidden);
      }), h, cA));
      var S = _.length > 0;
      return /* @__PURE__ */ O.createElement(Z1, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: d,
        hasPayload: S,
        offset: v,
        position: g,
        reverseDirection: w,
        useTranslate3d: b,
        viewBox: x,
        wrapperStyle: C
      }, lA(l, gh(gh({}, this.props), {}, {
        payload: _
      })));
    }
  }]);
}(Ho);
Mu(Ou, "displayName", "Tooltip");
Mu(Ou, "defaultProps", {
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
  isAnimationActive: !J1.isSsr,
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
var Ic, yh;
function uA() {
  if (yh) return Ic;
  yh = 1;
  var e = vt(), t = function() {
    return e.Date.now();
  };
  return Ic = t, Ic;
}
var $c, bh;
function dA() {
  if (bh) return $c;
  bh = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return $c = t, $c;
}
var Lc, wh;
function fA() {
  if (wh) return Lc;
  wh = 1;
  var e = dA(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Lc = r, Lc;
}
var Fc, xh;
function pA() {
  if (xh) return Fc;
  xh = 1;
  var e = fA(), t = qt(), r = Pn(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
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
  return Fc = c, Fc;
}
var qc, Sh;
function mA() {
  if (Sh) return qc;
  Sh = 1;
  var e = qt(), t = uA(), r = pA(), n = "Expected a function", o = Math.max, a = Math.min;
  function i(s, c, l) {
    var d, p, m, v, y, h, g = 0, w = !1, b = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(l) && (w = !!l.leading, b = "maxWait" in l, m = b ? o(r(l.maxWait) || 0, c) : m, x = "trailing" in l ? !!l.trailing : x);
    function C(F) {
      var R = d, I = p;
      return d = p = void 0, g = F, v = s.apply(I, R), v;
    }
    function _(F) {
      return g = F, y = setTimeout(N, c), w ? C(F) : v;
    }
    function S(F) {
      var R = F - h, I = F - g, D = c - R;
      return b ? a(D, m - I) : D;
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
      return y = void 0, x && d ? C(F) : (d = p = void 0, v);
    }
    function k() {
      y !== void 0 && clearTimeout(y), g = 0, d = h = p = y = void 0;
    }
    function j() {
      return y === void 0 ? v : T(t());
    }
    function q() {
      var F = t(), R = E(F);
      if (d = arguments, p = this, h = F, R) {
        if (y === void 0)
          return _(h);
        if (b)
          return clearTimeout(y), y = setTimeout(N, c), C(h);
      }
      return y === void 0 && (y = setTimeout(N, c)), v;
    }
    return q.cancel = k, q.flush = j, q;
  }
  return qc = i, qc;
}
var Bc, Ch;
function hA() {
  if (Ch) return Bc;
  Ch = 1;
  var e = mA(), t = qt(), r = "Expected a function";
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
  return Bc = n, Bc;
}
var vA = hA();
const gA = /* @__PURE__ */ ht(vA);
function mn(e) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function _h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _h(Object(r), !0).forEach(function(n) {
      yA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yA(e, t, r) {
  return t = bA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bA(e) {
  var t = wA(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function wA(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xA(e, t) {
  return EA(e) || _A(e, t) || CA(e, t) || SA();
}
function SA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CA(e, t) {
  if (e) {
    if (typeof e == "string") return Eh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Eh(e, t);
  }
}
function Eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _A(e, t) {
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
function EA(e) {
  if (Array.isArray(e)) return e;
}
var PA = /* @__PURE__ */ eu(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, d = l === void 0 ? 0 : l, p = e.minHeight, m = e.maxHeight, v = e.children, y = e.debounce, h = y === void 0 ? 0 : y, g = e.id, w = e.className, b = e.onResize, x = e.style, C = x === void 0 ? {} : x, _ = rr(null), S = rr();
  S.current = b, tu(t, function() {
    return Object.defineProperty(_.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), _.current;
      },
      configurable: !0
    });
  });
  var E = Pr({
    containerWidth: o.width,
    containerHeight: o.height
  }), N = xA(E, 2), T = N[0], k = N[1], j = qe(function(F, R) {
    k(function(I) {
      var D = Math.round(F), G = Math.round(R);
      return I.containerWidth === D && I.containerHeight === G ? I : {
        containerWidth: D,
        containerHeight: G
      };
    });
  }, []);
  Lr(function() {
    var F = function(L) {
      var J, te = L[0].contentRect, A = te.width, V = te.height;
      j(A, V), (J = S.current) === null || J === void 0 || J.call(S, A, V);
    };
    h > 0 && (F = gA(F, h, {
      trailing: !0,
      leading: !1
    }));
    var R = new ResizeObserver(F), I = _.current.getBoundingClientRect(), D = I.width, G = I.height;
    return j(D, G), R.observe(_.current), function() {
      R.disconnect();
    };
  }, [j, h]);
  var q = co(function() {
    var F = T.containerWidth, R = T.containerHeight;
    if (F < 0 || R < 0)
      return null;
    lo(Zn(i) || Zn(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), lo(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = Zn(i) ? F : i, D = Zn(c) ? R : c;
    r && r > 0 && (I ? D = I / r : D && (I = D * r), m && D > m && (D = m)), lo(I > 0 || D > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, D, i, c, d, p, r);
    var G = !Array.isArray(v) && XN(v.type).endsWith("Chart");
    return O.Children.map(v, function(B) {
      return /* @__PURE__ */ O.isValidElement(B) ? /* @__PURE__ */ c_(B, eo({
        width: I,
        height: D
      }, G ? {
        style: eo({
          height: "100%",
          width: "100%",
          maxHeight: D,
          maxWidth: I
        }, B.props.style)
      } : {})) : B;
    });
  }, [r, v, c, m, p, d, T, i]);
  return /* @__PURE__ */ O.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: Ct("recharts-responsive-container", w),
    style: eo(eo({}, C), {}, {
      width: i,
      height: c,
      minWidth: d,
      minHeight: p,
      maxHeight: m
    }),
    ref: _
  }, q);
});
const TA = { light: "", dark: ".dark" }, fy = u.createContext(null);
function py() {
  const e = u.useContext(fy);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const RA = u.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = u.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ f.jsx(fy.Provider, { value: { config: n }, children: /* @__PURE__ */ f.jsxs(
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
        /* @__PURE__ */ f.jsx(NA, { id: s, config: n }),
        /* @__PURE__ */ f.jsx(PA, { children: r })
      ]
    }
  ) });
});
RA.displayName = "Chart";
const NA = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ f.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(TA).map(
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
}, pq = Ou, MA = u.forwardRef(
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
    const { config: y } = py(), h = u.useMemo(() => {
      var _;
      if (o || !(t != null && t.length))
        return null;
      const [w] = t;
      if (!w)
        return null;
      const b = `${m || w.dataKey || w.name || "value"}`, x = Pl(y, w, b), C = !m && typeof i == "string" ? ((_ = y[i]) == null ? void 0 : _.label) || i : x == null ? void 0 : x.label;
      return s ? /* @__PURE__ */ f.jsx("div", { className: M("font-medium", c), children: s(C, t) }) : C ? /* @__PURE__ */ f.jsx("div", { className: M("font-medium", c), children: C }) : null;
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
    return /* @__PURE__ */ f.jsxs(
      "div",
      {
        ref: v,
        className: M(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          g ? null : h,
          /* @__PURE__ */ f.jsx("div", { className: "grid gap-1.5", children: t.map((w, b) => {
            if (!w)
              return null;
            const x = `${p || w.dataKey || w.name || "value"}`, C = Pl(y, w, x), _ = d || w.payload.fill || w.color;
            return /* @__PURE__ */ f.jsx(
              "div",
              {
                className: M(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: l && (w == null ? void 0 : w.value) !== void 0 && w.name ? l(w.value, w.name, w, b, w.payload) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                  C != null && C.icon ? /* @__PURE__ */ f.jsx(C.icon, {}) : !a && /* @__PURE__ */ f.jsx(
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
                  /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: M(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? h : null,
                          /* @__PURE__ */ f.jsx("span", { className: "text-muted-foreground", children: (C == null ? void 0 : C.label) || w.name })
                        ] }),
                        w.value && /* @__PURE__ */ f.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: w.value.toLocaleString() })
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
MA.displayName = "ChartTooltip";
const mq = Nu, OA = u.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
    const { config: i } = py();
    return r != null && r.length ? /* @__PURE__ */ f.jsx(
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
          const c = `${o || s.dataKey || "value"}`, l = Pl(i, s, c);
          return /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: M(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l != null && l.icon && !t ? /* @__PURE__ */ f.jsx(l.icon, {}) : /* @__PURE__ */ f.jsx(
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
OA.displayName = "ChartLegend";
function Pl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
function Tn(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ia(e) {
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
var Au = "Checkbox", [AA, hq] = Te(Au), [DA, jA] = AA(Au), my = u.forwardRef(
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
    } = e, [m, v] = u.useState(null), y = ne(t, (C) => v(C)), h = u.useRef(!1), g = m ? d || !!m.closest("form") : !0, [w = !1, b] = Pe({
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
    }, [m, b]), /* @__PURE__ */ f.jsxs(DA, { scope: r, state: w, disabled: s, children: [
      /* @__PURE__ */ f.jsx(
        W.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": It(w) ? "mixed" : w,
          "aria-required": i,
          "data-state": gy(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...p,
          ref: y,
          onKeyDown: $(e.onKeyDown, (C) => {
            C.key === "Enter" && C.preventDefault();
          }),
          onClick: $(e.onClick, (C) => {
            b((_) => It(_) ? !0 : !_), g && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ f.jsx(
        kA,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: w,
          required: i,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" },
          defaultChecked: It(a) ? !1 : a
        }
      )
    ] });
  }
);
my.displayName = Au;
var hy = "CheckboxIndicator", vy = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = jA(hy, r);
    return /* @__PURE__ */ f.jsx(Ce, { present: n || It(a.state) || a.state === !0, children: /* @__PURE__ */ f.jsx(
      W.span,
      {
        "data-state": gy(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
vy.displayName = hy;
var kA = (e) => {
  const { control: t, checked: r, bubbles: n = !0, defaultChecked: o, ...a } = e, i = u.useRef(null), s = Tn(r), c = ia(t);
  u.useEffect(() => {
    const d = i.current, p = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(p, "checked").set;
    if (s !== r && v) {
      const y = new Event("click", { bubbles: n });
      d.indeterminate = It(r), v.call(d, It(r) ? !1 : r), d.dispatchEvent(y);
    }
  }, [s, r, n]);
  const l = u.useRef(It(r) ? !1 : r);
  return /* @__PURE__ */ f.jsx(
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
function It(e) {
  return e === "indeterminate";
}
function gy(e) {
  return It(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var yy = my, IA = vy;
const $A = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  yy,
  {
    ref: r,
    className: M(
      "peer h-4 w-4 shrink-0 rounded-xs border border-primary ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx(
      IA,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.jsx(sn, { className: "h-4 w-4" })
      }
    )
  }
));
$A.displayName = yy.displayName;
var Ph = 1, LA = 0.9, FA = 0.8, qA = 0.17, Wc = 0.1, Hc = 0.999, BA = 0.9999, WA = 0.99, HA = /[\\\/_+.#"@\[\(\{&]/, VA = /[\\\/_+.#"@\[\(\{&]/g, GA = /[\s-]/, by = /[\s-]/g;
function Tl(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? Ph : WA;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), l = r.indexOf(c, o), d = 0, p, m, v, y; l >= 0; ) p = Tl(e, t, r, n, l + 1, a + 1, i), p > d && (l === o ? p *= Ph : HA.test(e.charAt(l - 1)) ? (p *= FA, v = e.slice(o, l - 1).match(VA), v && o > 0 && (p *= Math.pow(Hc, v.length))) : GA.test(e.charAt(l - 1)) ? (p *= LA, y = e.slice(o, l - 1).match(by), y && o > 0 && (p *= Math.pow(Hc, y.length))) : (p *= qA, o > 0 && (p *= Math.pow(Hc, l - o))), e.charAt(l) !== t.charAt(a) && (p *= BA)), (p < Wc && r.charAt(l - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a)) && (m = Tl(e, t, r, n, l + 1, a + 2, i), m * Wc > p && (p = m * Wc)), p > d && (d = p), l = r.indexOf(c, l + 1);
  return i[s] = d, d;
}
function Th(e) {
  return e.toLowerCase().replace(by, " ");
}
function zA(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, Tl(e, t, Th(e), Th(t), 0, 0, {});
}
function YA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e);
  u.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var UA = "DismissableLayer", Rl = "dismissableLayer.update", KA = "dismissableLayer.pointerDownOutside", XA = "dismissableLayer.focusOutside", Rh, wy = u.createContext({
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
    } = e, l = u.useContext(wy), [d, p] = u.useState(null), m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = u.useState({}), y = ne(t, (E) => p(E)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(g), b = d ? h.indexOf(d) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= w, _ = QA((E) => {
      const N = E.target, T = [...l.branches].some((k) => k.contains(N));
      !C || T || (o == null || o(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m), S = JA((E) => {
      const N = E.target;
      [...l.branches].some((k) => k.contains(N)) || (a == null || a(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m);
    return YA((E) => {
      b === l.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (d)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Rh = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Nh(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Rh);
        };
    }, [d, m, r, l]), u.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Nh());
    }, [d, l]), u.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(Rl, E), () => document.removeEventListener(Rl, E);
    }, []), /* @__PURE__ */ f.jsx(
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
Bt.displayName = UA;
var ZA = "DismissableLayerBranch", xy = u.forwardRef((e, t) => {
  const r = u.useContext(wy), n = u.useRef(null), o = ne(t, n);
  return u.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ f.jsx(W.div, { ...e, ref: o });
});
xy.displayName = ZA;
function QA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e), n = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Sy(
            KA,
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
function JA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e), n = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && Sy(XA, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Nh() {
  const e = new CustomEvent(Rl);
  document.dispatchEvent(e);
}
function Sy(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? an(o, a) : o.dispatchEvent(a);
}
var eD = Bt, tD = xy, Vc = "focusScope.autoFocusOnMount", Gc = "focusScope.autoFocusOnUnmount", Mh = { bubbles: !1, cancelable: !0 }, rD = "FocusScope", Rn = u.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = u.useState(null), l = me(o), d = me(a), p = u.useRef(null), m = ne(t, (h) => c(h)), v = u.useRef({
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
        s.contains(C) ? p.current = C : kt(p.current, { select: !0 });
      }, g = function(x) {
        if (v.paused || !s) return;
        const C = x.relatedTarget;
        C !== null && (s.contains(C) || kt(p.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const _ of x)
            _.removedNodes.length > 0 && kt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [n, s, v.paused]), u.useEffect(() => {
    if (s) {
      Ah.add(v);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(Vc, Mh);
        s.addEventListener(Vc, l), s.dispatchEvent(w), w.defaultPrevented || (nD(cD(Cy(s)), { select: !0 }), document.activeElement === h && kt(s));
      }
      return () => {
        s.removeEventListener(Vc, l), setTimeout(() => {
          const w = new CustomEvent(Gc, Mh);
          s.addEventListener(Gc, d), s.dispatchEvent(w), w.defaultPrevented || kt(h ?? document.body, { select: !0 }), s.removeEventListener(Gc, d), Ah.remove(v);
        }, 0);
      };
    }
  }, [s, l, d, v]);
  const y = u.useCallback(
    (h) => {
      if (!r && !n || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (g && w) {
        const b = h.currentTarget, [x, C] = oD(b);
        x && C ? !h.shiftKey && w === C ? (h.preventDefault(), r && kt(x, { select: !0 })) : h.shiftKey && w === x && (h.preventDefault(), r && kt(C, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ f.jsx(W.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
Rn.displayName = rD;
function nD(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (kt(n, { select: t }), document.activeElement !== r) return;
}
function oD(e) {
  const t = Cy(e), r = Oh(t, e), n = Oh(t.reverse(), e);
  return [r, n];
}
function Cy(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Oh(e, t) {
  for (const r of e)
    if (!aD(r, { upTo: t })) return r;
}
function aD(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function iD(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && iD(e) && t && e.select();
  }
}
var Ah = sD();
function sD() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Dh(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Dh(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Dh(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function cD(e) {
  return e.filter((t) => t.tagName !== "A");
}
var lD = "Portal", fr = u.forwardRef((e, t) => {
  var s;
  const { container: r, ...n } = e, [o, a] = u.useState(!1);
  Ee(() => a(!0), []);
  const i = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? lv.createPortal(/* @__PURE__ */ f.jsx(W.div, { ...n, ref: t }), i) : null;
});
fr.displayName = lD;
var zc = 0;
function sa() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? jh()), document.body.insertAdjacentElement("beforeend", e[1] ?? jh()), zc++, () => {
      zc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), zc--;
    };
  }, []);
}
function jh() {
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
function _y(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function uD(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var uo = "right-scroll-bar-position", fo = "width-before-scroll-bar", dD = "with-scroll-bars-hidden", fD = "--removed-body-scroll-bar-size";
function Yc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pD(e, t) {
  var r = Pr(function() {
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
var mD = typeof window < "u" ? u.useLayoutEffect : u.useEffect, kh = /* @__PURE__ */ new WeakMap();
function hD(e, t) {
  var r = pD(null, function(n) {
    return e.forEach(function(o) {
      return Yc(o, n);
    });
  });
  return mD(function() {
    var n = kh.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || Yc(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Yc(s, i);
      });
    }
    kh.set(r, e);
  }, [e]), r;
}
function vD(e) {
  return e;
}
function gD(e, t) {
  t === void 0 && (t = vD);
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
function yD(e) {
  e === void 0 && (e = {});
  var t = gD(null);
  return t.options = ut({ async: !0, ssr: !1 }, e), t;
}
var Ey = function(e) {
  var t = e.sideCar, r = _y(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return u.createElement(n, ut({}, r));
};
Ey.isSideCarExport = !0;
function bD(e, t) {
  return e.useMedium(t), Ey;
}
var Py = yD(), Uc = function() {
}, ca = u.forwardRef(function(e, t) {
  var r = u.useRef(null), n = u.useState({
    onScrollCapture: Uc,
    onWheelCapture: Uc,
    onTouchMoveCapture: Uc
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, p = e.shards, m = e.sideCar, v = e.noIsolation, y = e.inert, h = e.allowPinchZoom, g = e.as, w = g === void 0 ? "div" : g, b = e.gapMode, x = _y(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, _ = hD([r, t]), S = ut(ut({}, x), o);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(C, { sideCar: Py, removeScrollBar: l, shards: p, noIsolation: v, inert: y, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: b }),
    i ? u.cloneElement(u.Children.only(s), ut(ut({}, S), { ref: _ })) : u.createElement(w, ut({}, S, { className: c, ref: _ }), s)
  );
});
ca.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ca.classNames = {
  fullWidth: fo,
  zeroRight: uo
};
var wD = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xD() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = wD();
  return t && e.setAttribute("nonce", t), e;
}
function SD(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function CD(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var _D = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = xD()) && (SD(t, r), CD(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ED = function() {
  var e = _D();
  return function(t, r) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Ty = function() {
  var e = ED(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, PD = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Kc = function(e) {
  return parseInt(e || "", 10) || 0;
}, TD = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Kc(r), Kc(n), Kc(o)];
}, RD = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return PD;
  var t = TD(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, ND = Ty(), _r = "data-scroll-locked", MD = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(dD, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(_r, `] {
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
  
  .`).concat(uo, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(fo, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(uo, " .").concat(uo, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(fo, " .").concat(fo, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(_r, `] {
    `).concat(fD, ": ").concat(s, `px;
  }
`);
}, Ih = function() {
  var e = parseInt(document.body.getAttribute(_r) || "0", 10);
  return isFinite(e) ? e : 0;
}, OD = function() {
  u.useEffect(function() {
    return document.body.setAttribute(_r, (Ih() + 1).toString()), function() {
      var e = Ih() - 1;
      e <= 0 ? document.body.removeAttribute(_r) : document.body.setAttribute(_r, e.toString());
    };
  }, []);
}, AD = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  OD();
  var a = u.useMemo(function() {
    return RD(o);
  }, [o]);
  return u.createElement(ND, { styles: MD(a, !t, o, r ? "" : "!important") });
}, Nl = !1;
if (typeof window < "u")
  try {
    var to = Object.defineProperty({}, "passive", {
      get: function() {
        return Nl = !0, !0;
      }
    });
    window.addEventListener("test", to, to), window.removeEventListener("test", to, to);
  } catch {
    Nl = !1;
  }
var gr = Nl ? { passive: !1 } : !1, DD = function(e) {
  return e.tagName === "TEXTAREA";
}, Ry = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !DD(e) && r[t] === "visible")
  );
}, jD = function(e) {
  return Ry(e, "overflowY");
}, kD = function(e) {
  return Ry(e, "overflowX");
}, $h = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Ny(e, n);
    if (o) {
      var a = My(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, ID = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, $D = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Ny = function(e, t) {
  return e === "v" ? jD(t) : kD(t);
}, My = function(e, t) {
  return e === "v" ? ID(t) : $D(t);
}, LD = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, FD = function(e, t, r, n, o) {
  var a = LD(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), l = !1, d = i > 0, p = 0, m = 0;
  do {
    var v = My(e, s), y = v[0], h = v[1], g = v[2], w = h - g - a * y;
    (y || w) && Ny(e, s) && (p += w, m += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(m) < 1) && (l = !0), l;
}, ro = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Lh = function(e) {
  return [e.deltaX, e.deltaY];
}, Fh = function(e) {
  return e && "current" in e ? e.current : e;
}, qD = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, BD = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, WD = 0, yr = [];
function HD(e) {
  var t = u.useRef([]), r = u.useRef([0, 0]), n = u.useRef(), o = u.useState(WD++)[0], a = u.useState(Ty)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = uD([e.lockRef.current], (e.shards || []).map(Fh), !0).filter(Boolean);
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
    var w = ro(h), b = r.current, x = "deltaX" in h ? h.deltaX : b[0] - w[0], C = "deltaY" in h ? h.deltaY : b[1] - w[1], _, S = h.target, E = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && E === "h" && S.type === "range")
      return !1;
    var N = $h(E, S);
    if (!N)
      return !0;
    if (N ? _ = E : (_ = E === "v" ? "h" : "v", N = $h(E, S)), !N)
      return !1;
    if (!n.current && "changedTouches" in h && (x || C) && (n.current = _), !_)
      return !0;
    var T = n.current || _;
    return FD(T, g, h, T === "h" ? x : C);
  }, []), c = u.useCallback(function(h) {
    var g = h;
    if (!(!yr.length || yr[yr.length - 1] !== a)) {
      var w = "deltaY" in g ? Lh(g) : ro(g), b = t.current.filter(function(_) {
        return _.name === g.type && (_.target === g.target || g.target === _.shadowParent) && qD(_.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var x = (i.current.shards || []).map(Fh).filter(Boolean).filter(function(_) {
          return _.contains(g.target);
        }), C = x.length > 0 ? s(g, x[0]) : !i.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = u.useCallback(function(h, g, w, b) {
    var x = { name: h, delta: g, target: w, should: b, shadowParent: VD(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), d = u.useCallback(function(h) {
    r.current = ro(h), n.current = void 0;
  }, []), p = u.useCallback(function(h) {
    l(h.type, Lh(h), h.target, s(h, e.lockRef.current));
  }, []), m = u.useCallback(function(h) {
    l(h.type, ro(h), h.target, s(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return yr.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, gr), document.addEventListener("touchmove", c, gr), document.addEventListener("touchstart", d, gr), function() {
      yr = yr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, gr), document.removeEventListener("touchmove", c, gr), document.removeEventListener("touchstart", d, gr);
    };
  }, []);
  var v = e.removeScrollBar, y = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    y ? u.createElement(a, { styles: BD(o) }) : null,
    v ? u.createElement(AD, { gapMode: e.gapMode }) : null
  );
}
function VD(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const GD = bD(Py, HD);
var Nn = u.forwardRef(function(e, t) {
  return u.createElement(ca, ut({}, e, { ref: t, sideCar: GD }));
});
Nn.classNames = ca.classNames;
var zD = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, br = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), oo = {}, Xc = 0, Oy = function(e) {
  return e && (e.host || Oy(e.parentNode));
}, YD = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Oy(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, UD = function(e, t, r, n) {
  var o = YD(t, Array.isArray(e) ? e : [e]);
  oo[r] || (oo[r] = /* @__PURE__ */ new WeakMap());
  var a = oo[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(p) {
    !p || s.has(p) || (s.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var d = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        d(m);
      else
        try {
          var v = m.getAttribute(n), y = v !== null && v !== "false", h = (br.get(m) || 0) + 1, g = (a.get(m) || 0) + 1;
          br.set(m, h), a.set(m, g), i.push(m), h === 1 && y && no.set(m, !0), g === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return d(t), s.clear(), Xc++, function() {
    i.forEach(function(p) {
      var m = br.get(p) - 1, v = a.get(p) - 1;
      br.set(p, m), a.set(p, v), m || (no.has(p) || p.removeAttribute(n), no.delete(p)), v || p.removeAttribute(r);
    }), Xc--, Xc || (br = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), oo = {});
  };
}, la = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = zD(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), UD(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Du = "Dialog", [Ay, vq] = Te(Du), [KD, at] = Ay(Du), Dy = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), c = u.useRef(null), [l = !1, d] = Pe({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ f.jsx(
    KD,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: _e(),
      titleId: _e(),
      descriptionId: _e(),
      open: l,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((p) => !p), [d]),
      modal: i,
      children: r
    }
  );
};
Dy.displayName = Du;
var jy = "DialogTrigger", ky = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = at(jy, r), a = ne(t, o.triggerRef);
    return /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Iu(o.open),
        ...n,
        ref: a,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ky.displayName = jy;
var ju = "DialogPortal", [XD, Iy] = Ay(ju, {
  forceMount: void 0
}), $y = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = at(ju, t);
  return /* @__PURE__ */ f.jsx(XD, { scope: t, forceMount: r, children: u.Children.map(n, (i) => /* @__PURE__ */ f.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ f.jsx(fr, { asChild: !0, container: o, children: i }) })) });
};
$y.displayName = ju;
var Ro = "DialogOverlay", Ly = u.forwardRef(
  (e, t) => {
    const r = Iy(Ro, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = at(Ro, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ f.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ f.jsx(ZD, { ...o, ref: t }) }) : null;
  }
);
Ly.displayName = Ro;
var ZD = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = at(Ro, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f.jsx(Nn, { as: pt, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f.jsx(
        W.div,
        {
          "data-state": Iu(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), nr = "DialogContent", Fy = u.forwardRef(
  (e, t) => {
    const r = Iy(nr, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = at(nr, e.__scopeDialog);
    return /* @__PURE__ */ f.jsx(Ce, { present: n || a.open, children: a.modal ? /* @__PURE__ */ f.jsx(QD, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(JD, { ...o, ref: t }) });
  }
);
Fy.displayName = nr;
var QD = u.forwardRef(
  (e, t) => {
    const r = at(nr, e.__scopeDialog), n = u.useRef(null), o = ne(t, r.contentRef, n);
    return u.useEffect(() => {
      const a = n.current;
      if (a) return la(a);
    }, []), /* @__PURE__ */ f.jsx(
      qy,
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
), JD = u.forwardRef(
  (e, t) => {
    const r = at(nr, e.__scopeDialog), n = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      qy,
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
), qy = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = at(nr, r), c = u.useRef(null), l = ne(t, c);
    return sa(), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        Rn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ f.jsx(
            Bt,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Iu(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx(ej, { titleId: s.titleId }),
        /* @__PURE__ */ f.jsx(rj, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), ku = "DialogTitle", By = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = at(ku, r);
    return /* @__PURE__ */ f.jsx(W.h2, { id: o.titleId, ...n, ref: t });
  }
);
By.displayName = ku;
var Wy = "DialogDescription", Hy = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = at(Wy, r);
    return /* @__PURE__ */ f.jsx(W.p, { id: o.descriptionId, ...n, ref: t });
  }
);
Hy.displayName = Wy;
var Vy = "DialogClose", Gy = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = at(Vy, r);
    return /* @__PURE__ */ f.jsx(
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
Gy.displayName = Vy;
function Iu(e) {
  return e ? "open" : "closed";
}
var zy = "DialogTitleWarning", [gq, Yy] = v_(zy, {
  contentName: nr,
  titleName: ku,
  docsSlug: "dialog"
}), ej = ({ titleId: e }) => {
  const t = Yy(zy), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, tj = "DialogDescriptionWarning", rj = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Yy(tj).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, $u = Dy, Uy = ky, Lu = $y, Mn = Ly, On = Fy, ua = By, da = Hy, fa = Gy, ao = { exports: {} }, Zc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh;
function nj() {
  if (qh) return Zc;
  qh = 1;
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
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return Zc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Zc;
}
var Qc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bh;
function oj() {
  return Bh || (Bh = 1, process.env.NODE_ENV !== "production" && function() {
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
    var o = O, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, l = o.useDebugValue, d = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Qc.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Qc;
}
var Wh;
function aj() {
  return Wh || (Wh = 1, process.env.NODE_ENV === "production" ? ao.exports = nj() : ao.exports = oj()), ao.exports;
}
var ij = aj(), Xr = '[cmdk-group=""]', Jc = '[cmdk-group-items=""]', sj = '[cmdk-group-heading=""]', Fu = '[cmdk-item=""]', Hh = `${Fu}:not([aria-disabled="true"])`, Ml = "cmdk-item-select", Jt = "data-value", cj = (e, t, r) => zA(e, t, r), Ky = u.createContext(void 0), An = () => u.useContext(Ky), Xy = u.createContext(void 0), qu = () => u.useContext(Xy), Zy = u.createContext(void 0), Qy = u.forwardRef((e, t) => {
  let r = wr(() => {
    var A, V;
    return { search: "", value: (V = (A = e.value) != null ? A : e.defaultValue) != null ? V : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = wr(() => /* @__PURE__ */ new Set()), o = wr(() => /* @__PURE__ */ new Map()), a = wr(() => /* @__PURE__ */ new Map()), i = wr(() => /* @__PURE__ */ new Set()), s = Jy(e), { label: c, children: l, value: d, onValueChange: p, filter: m, shouldFilter: v, loop: y, disablePointerSelection: h = !1, vimBindings: g = !0, ...w } = e, b = _e(), x = _e(), C = _e(), _ = u.useRef(null), S = bj();
  or(() => {
    if (d !== void 0) {
      let A = d.trim();
      r.current.value = A, E.emit();
    }
  }, [d]), or(() => {
    S(6, F);
  }, []);
  let E = u.useMemo(() => ({ subscribe: (A) => (i.current.add(A), () => i.current.delete(A)), snapshot: () => r.current, setState: (A, V, U) => {
    var z, ee, H;
    if (!Object.is(r.current[A], V)) {
      if (r.current[A] = V, A === "search") q(), k(), S(1, j);
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
    q(), k(), r.current.value || j(), E.emit();
  }), () => {
    a.current.delete(A), n.current.delete(A), r.current.filtered.items.delete(A);
    let U = R();
    S(4, () => {
      q(), (U == null ? void 0 : U.getAttribute("id")) === A && j(), E.emit();
    });
  }), group: (A) => (o.current.has(A) || o.current.set(A, /* @__PURE__ */ new Set()), () => {
    a.current.delete(A), o.current.delete(A);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: b, inputId: C, labelId: x, listInnerRef: _ }), []);
  function T(A, V) {
    var U, z;
    let ee = (z = (U = s.current) == null ? void 0 : U.filter) != null ? z : cj;
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
      let ee = z.closest(Jc);
      ee ? ee.appendChild(z.parentElement === ee ? z : z.closest(`${Jc} > *`)) : U.appendChild(z.parentElement === U ? z : z.closest(`${Jc} > *`));
    }), V.sort((z, ee) => ee[1] - z[1]).forEach((z) => {
      var ee;
      let H = (ee = _.current) == null ? void 0 : ee.querySelector(`${Xr}[${Jt}="${encodeURIComponent(z[0])}"]`);
      H == null || H.parentElement.appendChild(H);
    });
  }
  function j() {
    let A = I().find((U) => U.getAttribute("aria-disabled") !== "true"), V = A == null ? void 0 : A.getAttribute(Jt);
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
    z && (((A = z.parentElement) == null ? void 0 : A.firstChild) === z && ((U = (V = z.closest(Xr)) == null ? void 0 : V.querySelector(sj)) == null || U.scrollIntoView({ block: "nearest" })), z.scrollIntoView({ block: "nearest" }));
  }
  function R() {
    var A;
    return (A = _.current) == null ? void 0 : A.querySelector(`${Fu}[aria-selected="true"]`);
  }
  function I() {
    var A;
    return Array.from(((A = _.current) == null ? void 0 : A.querySelectorAll(Hh)) || []);
  }
  function D(A) {
    let V = I()[A];
    V && E.setState("value", V.getAttribute(Jt));
  }
  function G(A) {
    var V;
    let U = R(), z = I(), ee = z.findIndex((oe) => oe === U), H = z[ee + A];
    (V = s.current) != null && V.loop && (H = ee + A < 0 ? z[z.length - 1] : ee + A === z.length ? z[0] : z[ee + A]), H && E.setState("value", H.getAttribute(Jt));
  }
  function B(A) {
    let V = R(), U = V == null ? void 0 : V.closest(Xr), z;
    for (; U && !z; ) U = A > 0 ? gj(U, Xr) : yj(U, Xr), z = U == null ? void 0 : U.querySelector(Hh);
    z ? E.setState("value", z.getAttribute(Jt)) : G(A);
  }
  let L = () => D(I().length - 1), J = (A) => {
    A.preventDefault(), A.metaKey ? L() : A.altKey ? B(1) : G(1);
  }, te = (A) => {
    A.preventDefault(), A.metaKey ? D(0) : A.altKey ? B(-1) : G(-1);
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
        A.preventDefault(), D(0);
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
            let z = new Event(Ml);
            U.dispatchEvent(z);
          }
        }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: xj }, c), pa(e, (A) => u.createElement(Xy.Provider, { value: E }, u.createElement(Ky.Provider, { value: N }, A))));
}), lj = u.forwardRef((e, t) => {
  var r, n;
  let o = _e(), a = u.useRef(null), i = u.useContext(Zy), s = An(), c = Jy(e), l = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i == null ? void 0 : i.forceMount;
  or(() => {
    if (!l) return s.item(o, i == null ? void 0 : i.id);
  }, [l]);
  let d = eb(o, a, [e.value, e.children, a], e.keywords), p = qu(), m = ar((S) => S.value && S.value === d.current), v = ar((S) => l || s.filter() === !1 ? !0 : S.search ? S.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let S = a.current;
    if (!(!S || e.disabled)) return S.addEventListener(Ml, y), () => S.removeEventListener(Ml, y);
  }, [v, e.onSelect, e.disabled]);
  function y() {
    var S, E;
    h(), (E = (S = c.current).onSelect) == null || E.call(S, d.current);
  }
  function h() {
    p.setState("value", d.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: x, keywords: C, ..._ } = e;
  return u.createElement(W.div, { ref: hn([a, t]), ..._, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!m, "data-disabled": !!g, "data-selected": !!m, onPointerMove: g || s.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : y }, e.children);
}), uj = u.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = _e(), s = u.useRef(null), c = u.useRef(null), l = _e(), d = An(), p = ar((v) => o || d.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(i) : !0);
  or(() => d.group(i), []), eb(i, s, [e.value, e.heading, c]);
  let m = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(W.div, { ref: hn([s, t]), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && u.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), pa(e, (v) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, u.createElement(Zy.Provider, { value: m }, v))));
}), dj = u.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = u.useRef(null), a = ar((i) => !i.search);
  return !r && !a ? null : u.createElement(W.div, { ref: hn([o, t]), ...n, "cmdk-separator": "", role: "separator" });
}), fj = u.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = qu(), i = ar((d) => d.search), s = ar((d) => d.value), c = An(), l = u.useMemo(() => {
    var d;
    let p = (d = c.listInnerRef.current) == null ? void 0 : d.querySelector(`${Fu}[${Jt}="${encodeURIComponent(s)}"]`);
    return p == null ? void 0 : p.getAttribute("id");
  }, []);
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(W.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (d) => {
    o || a.setState("search", d.target.value), r == null || r(d.target.value);
  } });
}), pj = u.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = u.useRef(null), i = u.useRef(null), s = An();
  return u.useEffect(() => {
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
  }, []), u.createElement(W.div, { ref: hn([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": n, id: s.listId }, pa(e, (c) => u.createElement("div", { ref: hn([i, s.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), mj = u.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return u.createElement($u, { open: r, onOpenChange: n }, u.createElement(Lu, { container: i }, u.createElement(Mn, { "cmdk-overlay": "", className: o }), u.createElement(On, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(Qy, { ref: t, ...s }))));
}), hj = u.forwardRef((e, t) => ar((r) => r.filtered.count === 0) ? u.createElement(W.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), vj = u.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return u.createElement(W.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, pa(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), Fe = Object.assign(Qy, { List: pj, Item: lj, Input: fj, Group: uj, Separator: dj, Dialog: mj, Empty: hj, Loading: vj });
function gj(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function yj(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function Jy(e) {
  let t = u.useRef(e);
  return or(() => {
    t.current = e;
  }), t;
}
var or = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function wr(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function hn(e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
function ar(e) {
  let t = qu(), r = () => e(t.snapshot());
  return ij.useSyncExternalStore(t.subscribe, r, r);
}
function eb(e, t, r, n = []) {
  let o = u.useRef(), a = An();
  return or(() => {
    var i;
    let s = (() => {
      var l;
      for (let d of r) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (l = d.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = n.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(Jt, s), o.current = s;
  }), o;
}
var bj = () => {
  let [e, t] = u.useState(), r = wr(() => /* @__PURE__ */ new Map());
  return or(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function wj(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function pa({ asChild: e, children: t }, r) {
  return e && u.isValidElement(t) ? u.cloneElement(wj(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var xj = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Bu = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
Bu.displayName = Fe.displayName;
const yq = ({ children: e, ...t }) => /* @__PURE__ */ f.jsx(tI, { ...t, children: /* @__PURE__ */ f.jsx(Vb, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ f.jsx(Bu, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), tb = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.jsx(pE, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.jsx(
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
tb.displayName = Fe.Input.displayName;
const rb = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Fe.List,
  {
    ref: r,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
rb.displayName = Fe.List.displayName;
const nb = u.forwardRef((e, t) => /* @__PURE__ */ f.jsx(
  Fe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
nb.displayName = Fe.Empty.displayName;
const ob = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
ob.displayName = Fe.Group.displayName;
const ab = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Fe.Separator,
  {
    ref: r,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
ab.displayName = Fe.Separator.displayName;
const po = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
po.displayName = Fe.Item.displayName;
const Sj = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
Sj.displayName = "CommandShortcut";
const Cj = ["top", "right", "bottom", "left"], $t = Math.min, We = Math.max, No = Math.round, io = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), _j = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ej = {
  start: "end",
  end: "start"
};
function Ol(e, t, r) {
  return We(e, $t(t, r));
}
function _t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Et(e) {
  return e.split("-")[0];
}
function Wr(e) {
  return e.split("-")[1];
}
function Wu(e) {
  return e === "x" ? "y" : "x";
}
function Hu(e) {
  return e === "y" ? "height" : "width";
}
function Lt(e) {
  return ["top", "bottom"].includes(Et(e)) ? "y" : "x";
}
function Vu(e) {
  return Wu(Lt(e));
}
function Pj(e, t, r) {
  r === void 0 && (r = !1);
  const n = Wr(e), o = Vu(e), a = Hu(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Mo(i)), [i, Mo(i)];
}
function Tj(e) {
  const t = Mo(e);
  return [Al(e), t, Al(t)];
}
function Al(e) {
  return e.replace(/start|end/g, (t) => Ej[t]);
}
function Rj(e, t, r) {
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
function Nj(e, t, r, n) {
  const o = Wr(e);
  let a = Rj(Et(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Al)))), a;
}
function Mo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _j[t]);
}
function Mj(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ib(e) {
  return typeof e != "number" ? Mj(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Oo(e) {
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
function Vh(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = Lt(t), i = Vu(t), s = Hu(i), c = Et(t), l = a === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
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
  switch (Wr(t)) {
    case "start":
      v[i] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      v[i] += m * (r && l ? -1 : 1);
      break;
  }
  return v;
}
const Oj = async (e, t, r) => {
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
  } = Vh(l, n, c), m = n, v = {}, y = 0;
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
    d = b ?? d, p = x ?? p, v = {
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
      x: d,
      y: p
    } = Vh(l, m, c)), h = -1);
  }
  return {
    x: d,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: v
  };
};
async function vn(e, t) {
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
  } = _t(t, e), y = ib(v), g = s[m ? p === "floating" ? "reference" : "floating" : p], w = Oo(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: d,
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
  }, _ = Oo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Aj = (e) => ({
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
    } = _t(e, t) || {};
    if (l == null)
      return {};
    const p = ib(d), m = {
      x: r,
      y: n
    }, v = Vu(o), y = Hu(v), h = await i.getDimensions(l), g = v === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", C = a.reference[y] + a.reference[v] - m[v] - a.floating[y], _ = m[v] - a.reference[v], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let E = S ? S[x] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(S))) && (E = s.floating[x] || a.floating[y]);
    const N = C / 2 - _ / 2, T = E / 2 - h[y] / 2 - 1, k = $t(p[w], T), j = $t(p[b], T), q = k, F = E - h[y] - j, R = E / 2 - h[y] / 2 + N, I = Ol(q, R, F), D = !c.arrow && Wr(o) != null && R !== I && a.reference[y] / 2 - (R < q ? k : j) - h[y] / 2 < 0, G = D ? R < q ? R - q : R - F : 0;
    return {
      [v]: m[v] + G,
      data: {
        [v]: I,
        centerOffset: R - I - G,
        ...D && {
          alignmentOffset: G
        }
      },
      reset: D
    };
  }
}), Dj = function(e) {
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
      } = _t(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const w = Et(o), b = Lt(s), x = Et(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = m || (x || !h ? [Mo(s)] : Tj(s)), S = y !== "none";
      !m && S && _.push(...Nj(s, h, y, C));
      const E = [s, ..._], N = await vn(t, g), T = [];
      let k = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && T.push(N[w]), p) {
        const R = Pj(o, i, C);
        T.push(N[R[0]], N[R[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var j, q;
        const R = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, I = E[R];
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
        let D = (q = k.filter((G) => G.overflows[0] <= 0).sort((G, B) => G.overflows[1] - B.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!D)
          switch (v) {
            case "bestFit": {
              var F;
              const G = (F = k.filter((B) => {
                if (S) {
                  const L = Lt(B.placement);
                  return L === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((L) => L > 0).reduce((L, J) => L + J, 0)]).sort((B, L) => B[1] - L[1])[0]) == null ? void 0 : F[0];
              G && (D = G);
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
function Gh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function zh(e) {
  return Cj.some((t) => e[t] >= 0);
}
const jj = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = _t(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await vn(t, {
            ...o,
            elementContext: "reference"
          }), i = Gh(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: zh(i)
            }
          };
        }
        case "escaped": {
          const a = await vn(t, {
            ...o,
            altBoundary: !0
          }), i = Gh(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: zh(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function kj(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = Et(r), s = Wr(r), c = Lt(r) === "y", l = ["left", "top"].includes(i) ? -1 : 1, d = a && c ? -1 : 1, p = _t(t, e);
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
const Ij = function(e) {
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
      } = t, c = await kj(t, e);
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
}, $j = function(e) {
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
      } = _t(e, t), l = {
        x: r,
        y: n
      }, d = await vn(t, c), p = Lt(Et(o)), m = Wu(p);
      let v = l[m], y = l[p];
      if (a) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = v + d[g], x = v - d[w];
        v = Ol(b, v, x);
      }
      if (i) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = y + d[g], x = y - d[w];
        y = Ol(b, y, x);
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
}, Lj = function(e) {
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
      } = _t(e, t), d = {
        x: r,
        y: n
      }, p = Lt(o), m = Wu(p);
      let v = d[m], y = d[p];
      const h = _t(s, t), g = typeof h == "number" ? {
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
        const x = m === "y" ? "width" : "height", C = ["top", "left"].includes(Et(o)), _ = a.reference[p] - a.floating[x] + (C && ((w = i.offset) == null ? void 0 : w[p]) || 0) + (C ? 0 : g.crossAxis), S = a.reference[p] + a.reference[x] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[p]) || 0) - (C ? g.crossAxis : 0);
        y < _ ? y = _ : y > S && (y = S);
      }
      return {
        [m]: v,
        [p]: y
      };
    }
  };
}, Fj = function(e) {
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
      } = _t(e, t), d = await vn(t, l), p = Et(o), m = Wr(o), v = Lt(o) === "y", {
        width: y,
        height: h
      } = a.floating;
      let g, w;
      p === "top" || p === "bottom" ? (g = p, w = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = p, g = m === "end" ? "top" : "bottom");
      const b = h - d.top - d.bottom, x = y - d.left - d.right, C = $t(h - d[g], b), _ = $t(y - d[w], x), S = !t.middlewareData.shift;
      let E = C, N = _;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (N = x), (n = t.middlewareData.shift) != null && n.enabled.y && (E = b), S && !m) {
        const k = We(d.left, 0), j = We(d.right, 0), q = We(d.top, 0), F = We(d.bottom, 0);
        v ? N = y - 2 * (k !== 0 || j !== 0 ? k + j : We(d.left, d.right)) : E = h - 2 * (q !== 0 || F !== 0 ? q + F : We(d.top, d.bottom));
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
function ma() {
  return typeof window < "u";
}
function Hr(e) {
  return sb(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function He(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gt(e) {
  var t;
  return (t = (sb(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sb(e) {
  return ma() ? e instanceof Node || e instanceof He(e).Node : !1;
}
function tt(e) {
  return ma() ? e instanceof Element || e instanceof He(e).Element : !1;
}
function mt(e) {
  return ma() ? e instanceof HTMLElement || e instanceof He(e).HTMLElement : !1;
}
function Yh(e) {
  return !ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof He(e).ShadowRoot;
}
function Dn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function qj(e) {
  return ["table", "td", "th"].includes(Hr(e));
}
function ha(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Gu(e) {
  const t = zu(), r = tt(e) ? rt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Bj(e) {
  let t = Ft(e);
  for (; mt(t) && !Dr(t); ) {
    if (Gu(t))
      return t;
    if (ha(t))
      return null;
    t = Ft(t);
  }
  return null;
}
function zu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Dr(e) {
  return ["html", "body", "#document"].includes(Hr(e));
}
function rt(e) {
  return He(e).getComputedStyle(e);
}
function va(e) {
  return tt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ft(e) {
  if (Hr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yh(e) && e.host || // Fallback.
    gt(e)
  );
  return Yh(t) ? t.host : t;
}
function cb(e) {
  const t = Ft(e);
  return Dr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mt(t) && Dn(t) ? t : cb(t);
}
function gn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = cb(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = He(o);
  if (a) {
    const s = Dl(i);
    return t.concat(i, i.visualViewport || [], Dn(o) ? o : [], s && r ? gn(s) : []);
  }
  return t.concat(o, gn(o, [], r));
}
function Dl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lb(e) {
  const t = rt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = mt(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = No(r) !== a || No(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function Yu(e) {
  return tt(e) ? e : e.contextElement;
}
function Er(e) {
  const t = Yu(e);
  if (!mt(t))
    return ft(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = lb(t);
  let i = (a ? No(r.width) : r.width) / n, s = (a ? No(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Wj = /* @__PURE__ */ ft(0);
function ub(e) {
  const t = He(e);
  return !zu() || !t.visualViewport ? Wj : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hj(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== He(e) ? !1 : t;
}
function ir(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = Yu(e);
  let i = ft(1);
  t && (n ? tt(n) && (i = Er(n)) : i = Er(e));
  const s = Hj(a, r, n) ? ub(a) : ft(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, d = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = He(a), v = n && tt(n) ? He(n) : n;
    let y = m, h = Dl(y);
    for (; h && n && v !== y; ) {
      const g = Er(h), w = h.getBoundingClientRect(), b = rt(h), x = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, C = w.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      c *= g.x, l *= g.y, d *= g.x, p *= g.y, c += x, l += C, y = He(h), h = Dl(y);
    }
  }
  return Oo({
    width: d,
    height: p,
    x: c,
    y: l
  });
}
function Uu(e, t) {
  const r = va(e).scrollLeft;
  return t ? t.left + r : ir(gt(e)).left + r;
}
function db(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Uu(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Vj(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = gt(n), s = t ? ha(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ft(1);
  const d = ft(0), p = mt(n);
  if ((p || !p && !a) && ((Hr(n) !== "body" || Dn(i)) && (c = va(n)), mt(n))) {
    const v = ir(n);
    l = Er(n), d.x = v.x + n.clientLeft, d.y = v.y + n.clientTop;
  }
  const m = i && !p && !a ? db(i, c, !0) : ft(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + d.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + d.y + m.y
  };
}
function Gj(e) {
  return Array.from(e.getClientRects());
}
function zj(e) {
  const t = gt(e), r = va(e), n = e.ownerDocument.body, o = We(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = We(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Uu(e);
  const s = -r.scrollTop;
  return rt(n).direction === "rtl" && (i += We(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function Yj(e, t) {
  const r = He(e), n = gt(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = zu();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function Uj(e, t) {
  const r = ir(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = mt(e) ? Er(e) : ft(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Uh(e, t, r) {
  let n;
  if (t === "viewport")
    n = Yj(e, r);
  else if (t === "document")
    n = zj(gt(e));
  else if (tt(t))
    n = Uj(t, r);
  else {
    const o = ub(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Oo(n);
}
function fb(e, t) {
  const r = Ft(e);
  return r === t || !tt(r) || Dr(r) ? !1 : rt(r).position === "fixed" || fb(r, t);
}
function Kj(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = gn(e, [], !1).filter((s) => tt(s) && Hr(s) !== "body"), o = null;
  const a = rt(e).position === "fixed";
  let i = a ? Ft(e) : e;
  for (; tt(i) && !Dr(i); ) {
    const s = rt(i), c = Gu(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Dn(i) && !c && fb(e, i)) ? n = n.filter((d) => d !== i) : o = s, i = Ft(i);
  }
  return t.set(e, n), n;
}
function Xj(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? ha(t) ? [] : Kj(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((l, d) => {
    const p = Uh(t, d, o);
    return l.top = We(p.top, l.top), l.right = $t(p.right, l.right), l.bottom = $t(p.bottom, l.bottom), l.left = We(p.left, l.left), l;
  }, Uh(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Zj(e) {
  const {
    width: t,
    height: r
  } = lb(e);
  return {
    width: t,
    height: r
  };
}
function Qj(e, t, r) {
  const n = mt(t), o = gt(t), a = r === "fixed", i = ir(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ft(0);
  if (n || !n && !a)
    if ((Hr(t) !== "body" || Dn(o)) && (s = va(t)), n) {
      const m = ir(t, !0, a, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else o && (c.x = Uu(o));
  const l = o && !n && !a ? db(o, s) : ft(0), d = i.left + s.scrollLeft - c.x - l.x, p = i.top + s.scrollTop - c.y - l.y;
  return {
    x: d,
    y: p,
    width: i.width,
    height: i.height
  };
}
function el(e) {
  return rt(e).position === "static";
}
function Kh(e, t) {
  if (!mt(e) || rt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return gt(e) === r && (r = r.ownerDocument.body), r;
}
function pb(e, t) {
  const r = He(e);
  if (ha(e))
    return r;
  if (!mt(e)) {
    let o = Ft(e);
    for (; o && !Dr(o); ) {
      if (tt(o) && !el(o))
        return o;
      o = Ft(o);
    }
    return r;
  }
  let n = Kh(e, t);
  for (; n && qj(n) && el(n); )
    n = Kh(n, t);
  return n && Dr(n) && el(n) && !Gu(n) ? r : n || Bj(e) || r;
}
const Jj = async function(e) {
  const t = this.getOffsetParent || pb, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Qj(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ek(e) {
  return rt(e).direction === "rtl";
}
const tk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vj,
  getDocumentElement: gt,
  getClippingRect: Xj,
  getOffsetParent: pb,
  getElementRects: Jj,
  getClientRects: Gj,
  getDimensions: Zj,
  getScale: Er,
  isElement: tt,
  isRTL: ek
};
function mb(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function rk(e, t) {
  let r = null, n;
  const o = gt(e);
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
    const y = io(p), h = io(o.clientWidth - (d + m)), g = io(o.clientHeight - (p + v)), w = io(d), x = {
      rootMargin: -y + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: We(0, $t(1, c)) || 1
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
      E === 1 && !mb(l, e.getBoundingClientRect()) && i(), C = !1;
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
function nk(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Yu(e), d = o || a ? [...l ? gn(l) : [], ...gn(t)] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", r, {
      passive: !0
    }), a && w.addEventListener("resize", r);
  });
  const p = l && s ? rk(l, r) : null;
  let m = -1, v = null;
  i && (v = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = v) == null || x.observe(t);
    })), r();
  }), l && !c && v.observe(l), v.observe(t));
  let y, h = c ? ir(e) : null;
  c && g();
  function g() {
    const w = ir(e);
    h && !mb(h, w) && r(), h = w, y = requestAnimationFrame(g);
  }
  return r(), () => {
    var w;
    d.forEach((b) => {
      o && b.removeEventListener("scroll", r), a && b.removeEventListener("resize", r);
    }), p == null || p(), (w = v) == null || w.disconnect(), v = null, c && cancelAnimationFrame(y);
  };
}
const ok = Ij, ak = $j, ik = Dj, sk = Fj, ck = jj, Xh = Aj, lk = Lj, uk = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: tk,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return Oj(e, t, {
    ...o,
    platform: a
  });
};
var mo = typeof document < "u" ? cv : Lr;
function Ao(e, t) {
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
        if (!Ao(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ao(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hb(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zh(e, t) {
  const r = hb(e);
  return Math.round(t * r) / r;
}
function tl(e) {
  const t = u.useRef(e);
  return mo(() => {
    t.current = e;
  }), t;
}
function dk(e) {
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
  } = e, [d, p] = u.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = u.useState(n);
  Ao(m, n) || v(n);
  const [y, h] = u.useState(null), [g, w] = u.useState(null), b = u.useCallback((B) => {
    B !== S.current && (S.current = B, h(B));
  }, []), x = u.useCallback((B) => {
    B !== E.current && (E.current = B, w(B));
  }, []), C = a || y, _ = i || g, S = u.useRef(null), E = u.useRef(null), N = u.useRef(d), T = c != null, k = tl(c), j = tl(o), q = tl(l), F = u.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const B = {
      placement: t,
      strategy: r,
      middleware: m
    };
    j.current && (B.platform = j.current), uk(S.current, E.current, B).then((L) => {
      const J = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      R.current && !Ao(N.current, J) && (N.current = J, xn.flushSync(() => {
        p(J);
      }));
    });
  }, [m, t, r, j, q]);
  mo(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, p((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [l]);
  const R = u.useRef(!1);
  mo(() => (R.current = !0, () => {
    R.current = !1;
  }), []), mo(() => {
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
  }), [b, x]), D = u.useMemo(() => ({
    reference: C,
    floating: _
  }), [C, _]), G = u.useMemo(() => {
    const B = {
      position: r,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return B;
    const L = Zh(D.floating, d.x), J = Zh(D.floating, d.y);
    return s ? {
      ...B,
      transform: "translate(" + L + "px, " + J + "px)",
      ...hb(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: L,
      top: J
    };
  }, [r, s, D.floating, d.x, d.y]);
  return u.useMemo(() => ({
    ...d,
    update: F,
    refs: I,
    elements: D,
    floatingStyles: G
  }), [d, F, I, D, G]);
}
const fk = (e) => {
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
      return n && t(n) ? n.current != null ? Xh({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Xh({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, pk = (e, t) => ({
  ...ok(e),
  options: [e, t]
}), mk = (e, t) => ({
  ...ak(e),
  options: [e, t]
}), hk = (e, t) => ({
  ...lk(e),
  options: [e, t]
}), vk = (e, t) => ({
  ...ik(e),
  options: [e, t]
}), gk = (e, t) => ({
  ...sk(e),
  options: [e, t]
}), yk = (e, t) => ({
  ...ck(e),
  options: [e, t]
}), bk = (e, t) => ({
  ...fk(e),
  options: [e, t]
});
var wk = "Arrow", vb = u.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ f.jsx(
    W.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ f.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
vb.displayName = wk;
var xk = vb, Ku = "Popper", [gb, Wt] = Te(Ku), [Sk, yb] = gb(Ku), bb = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = u.useState(null);
  return /* @__PURE__ */ f.jsx(Sk, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
bb.displayName = Ku;
var wb = "PopperAnchor", xb = u.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = yb(wb, r), i = u.useRef(null), s = ne(t, i);
    return u.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ f.jsx(W.div, { ...o, ref: s });
  }
);
xb.displayName = wb;
var Xu = "PopperContent", [Ck, _k] = gb(Xu), Sb = u.forwardRef(
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
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: y,
      ...h
    } = e, g = yb(Xu, r), [w, b] = u.useState(null), x = ne(t, (Re) => b(Re)), [C, _] = u.useState(null), S = ia(C), E = (S == null ? void 0 : S.width) ?? 0, N = (S == null ? void 0 : S.height) ?? 0, T = n + (a !== "center" ? "-" + a : ""), k = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, j = Array.isArray(l) ? l : [l], q = j.length > 0, F = {
      padding: k,
      boundary: j.filter(Pk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: R, floatingStyles: I, placement: D, isPositioned: G, middlewareData: B } = dk({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...Re) => nk(...Re, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        pk({ mainAxis: o + N, alignmentAxis: i }),
        c && mk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? hk() : void 0,
          ...F
        }),
        c && vk({ ...F }),
        gk({
          ...F,
          apply: ({ elements: Re, rects: Y, availableWidth: ke, availableHeight: $e }) => {
            const { width: Le, height: mr } = Y.reference, bt = Re.floating.style;
            bt.setProperty("--radix-popper-available-width", `${ke}px`), bt.setProperty("--radix-popper-available-height", `${$e}px`), bt.setProperty("--radix-popper-anchor-width", `${Le}px`), bt.setProperty("--radix-popper-anchor-height", `${mr}px`);
          }
        }),
        C && bk({ element: C, padding: s }),
        Tk({ arrowWidth: E, arrowHeight: N }),
        m && yk({ strategy: "referenceHidden", ...F })
      ]
    }), [L, J] = Eb(D), te = me(y);
    Ee(() => {
      G && (te == null || te());
    }, [G, te]);
    const A = (H = B.arrow) == null ? void 0 : H.x, V = (oe = B.arrow) == null ? void 0 : oe.y, U = ((se = B.arrow) == null ? void 0 : se.centerOffset) !== 0, [z, ee] = u.useState();
    return Ee(() => {
      w && ee(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ f.jsx(
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
        children: /* @__PURE__ */ f.jsx(
          Ck,
          {
            scope: r,
            placedSide: L,
            onArrowChange: _,
            arrowX: A,
            arrowY: V,
            shouldHideArrow: U,
            children: /* @__PURE__ */ f.jsx(
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
Sb.displayName = Xu;
var Cb = "PopperArrow", Ek = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, _b = u.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = _k(Cb, n), i = Ek[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f.jsx(
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
        children: /* @__PURE__ */ f.jsx(
          xk,
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
_b.displayName = Cb;
function Pk(e) {
  return e !== null;
}
var Tk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: r, rects: n, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, d] = Eb(r), p = { start: "0%", center: "50%", end: "100%" }[d], m = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + s / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let y = "", h = "";
    return l === "bottom" ? (y = i ? p : `${m}px`, h = `${-c}px`) : l === "top" ? (y = i ? p : `${m}px`, h = `${n.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, h = i ? p : `${v}px`) : l === "left" && (y = `${n.floating.width + c}px`, h = i ? p : `${v}px`), { data: { x: y, y: h } };
  }
});
function Eb(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var jn = bb, kn = xb, ga = Sb, ya = _b, Zu = "Popover", [Pb, bq] = Te(Zu, [
  Wt
]), In = Wt(), [Rk, Ht] = Pb(Zu), Tb = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = In(t), c = u.useRef(null), [l, d] = u.useState(!1), [p = !1, m] = Pe({
    prop: n,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ f.jsx(jn, { ...s, children: /* @__PURE__ */ f.jsx(
    Rk,
    {
      scope: t,
      contentId: _e(),
      triggerRef: c,
      open: p,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((v) => !v), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: u.useCallback(() => d(!0), []),
      onCustomAnchorRemove: u.useCallback(() => d(!1), []),
      modal: i,
      children: r
    }
  ) });
};
Tb.displayName = Zu;
var Rb = "PopoverAnchor", Nk = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ht(Rb, r), a = In(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ f.jsx(kn, { ...a, ...n, ref: t });
  }
);
Nk.displayName = Rb;
var Nb = "PopoverTrigger", Mb = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ht(Nb, r), a = In(r), i = ne(t, o.triggerRef), s = /* @__PURE__ */ f.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": kb(o.open),
        ...n,
        ref: i,
        onClick: $(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ f.jsx(kn, { asChild: !0, ...a, children: s });
  }
);
Mb.displayName = Nb;
var Qu = "PopoverPortal", [Mk, Ok] = Pb(Qu, {
  forceMount: void 0
}), Ob = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = Ht(Qu, t);
  return /* @__PURE__ */ f.jsx(Mk, { scope: t, forceMount: r, children: /* @__PURE__ */ f.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ f.jsx(fr, { asChild: !0, container: o, children: n }) }) });
};
Ob.displayName = Qu;
var jr = "PopoverContent", Ab = u.forwardRef(
  (e, t) => {
    const r = Ok(jr, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = Ht(jr, e.__scopePopover);
    return /* @__PURE__ */ f.jsx(Ce, { present: n || a.open, children: a.modal ? /* @__PURE__ */ f.jsx(Ak, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(Dk, { ...o, ref: t }) });
  }
);
Ab.displayName = jr;
var Ak = u.forwardRef(
  (e, t) => {
    const r = Ht(jr, e.__scopePopover), n = u.useRef(null), o = ne(t, n), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = n.current;
      if (i) return la(i);
    }, []), /* @__PURE__ */ f.jsx(Nn, { as: pt, allowPinchZoom: !0, children: /* @__PURE__ */ f.jsx(
      Db,
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
), Dk = u.forwardRef(
  (e, t) => {
    const r = Ht(jr, e.__scopePopover), n = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      Db,
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
), Db = u.forwardRef(
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
    } = e, m = Ht(jr, r), v = In(r);
    return sa(), /* @__PURE__ */ f.jsx(
      Rn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ f.jsx(
          Bt,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ f.jsx(
              ga,
              {
                "data-state": kb(m.open),
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
), jb = "PopoverClose", jk = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ht(jb, r);
    return /* @__PURE__ */ f.jsx(
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
jk.displayName = jb;
var kk = "PopoverArrow", Ik = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = In(r);
    return /* @__PURE__ */ f.jsx(ya, { ...o, ...n, ref: t });
  }
);
Ik.displayName = kk;
function kb(e) {
  return e ? "open" : "closed";
}
var $k = Tb, Lk = Mb, Fk = Ob, Ib = Ab;
const Ju = $k, ed = Lk, ba = u.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ f.jsx(Fk, { children: /* @__PURE__ */ f.jsx(
  Ib,
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
ba.displayName = Ib.displayName;
function wq({ value: e, onChange: t }) {
  const [r, n] = u.useState(e);
  function o(a) {
    n(a), t == null || t(a);
  }
  return /* @__PURE__ */ f.jsxs(Ju, { children: [
    /* @__PURE__ */ f.jsx(ed, { asChild: !0, children: /* @__PURE__ */ f.jsxs(
      Uo,
      {
        variant: "outline",
        className: M(
          "w-full justify-start text-left font-normal",
          !r && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ f.jsx(Mv, { className: "mr-2" }),
          r ? Ko(r, "PPP", { locale: Cr }) : /* @__PURE__ */ f.jsx("span", { children: "Selecione uma data" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.jsx(ba, { className: "w-auto p-0", children: /* @__PURE__ */ f.jsx(
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
function qk(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function Bk(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function Wk(e) {
  return /^[0-5][0-9]$/.test(e);
}
function wa(e, { max: t, min: r = 0, loop: n = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (n ? (o > t && (o = r), o < r && (o = t)) : (o > t && (o = t), o < r && (o = r)), o.toString().padStart(2, "0"));
}
function $b(e) {
  return qk(e) ? e : wa(e, { max: 23 });
}
function Lb(e) {
  return Bk(e) ? e : wa(e, { min: 1, max: 12 });
}
function Do(e) {
  return Wk(e) ? e : wa(e, { max: 59 });
}
function td(e, { min: t, max: r, step: n }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += n, wa(String(o), { min: t, max: r, loop: !0 }));
}
function Hk(e, t) {
  return td(e, { min: 0, max: 23, step: t });
}
function Vk(e, t) {
  return td(e, { min: 1, max: 12, step: t });
}
function Qh(e, t) {
  return td(e, { min: 0, max: 59, step: t });
}
function Gk(e, t) {
  const r = Do(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function zk(e, t) {
  const r = Do(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function Yk(e, t) {
  const r = $b(t);
  return e.setHours(parseInt(r, 10)), e;
}
function Uk(e, t, r) {
  const n = parseInt(Lb(t), 10), o = Zk(n, r);
  return e.setHours(o), e;
}
function jl(e, t, r, n) {
  switch (r) {
    case "minutes":
      return Gk(e, t);
    case "seconds":
      return zk(e, t);
    case "hours":
      return Yk(e, t);
    case "12hours":
      return n ? Uk(e, t, n) : e;
    default:
      return e;
  }
}
function Kk(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Do(String(e.getMinutes()));
    case "seconds":
      return Do(String(e.getSeconds()));
    case "hours":
      return $b(String(e.getHours()));
    case "12hours":
      return Lb(String(Fb(e.getHours())));
    default:
      return "00";
  }
}
function Xk(e, t, r) {
  switch (r) {
    case "minutes":
      return Qh(e, t);
    case "seconds":
      return Qh(e, t);
    case "hours":
      return Hk(e, t);
    case "12hours":
      return Vk(e, t);
    default:
      return "00";
  }
}
function Zk(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function Fb(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function Qk(e) {
  return Array.from({ length: 12 }, (t, r) => ({
    value: r,
    label: Ko(new Date(2021, r), "MMMM", { locale: e })
  }));
}
function Jk(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (r, n) => ({
    value: t.getFullYear() - e + n,
    label: (t.getFullYear() - e + n).toString()
  }));
}
function qb({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  yearRange: n = 50,
  ...o
}) {
  const a = u.useMemo(() => {
    let l = Cr;
    const { options: d, localize: p, formatLong: m } = o.locale || {};
    return d && p && m && (l = {
      options: d,
      localize: p,
      formatLong: m
    }), Qk(l);
  }, []), i = u.useMemo(() => Jk(n), []), s = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() - n, 0, 1);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  }, c = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() + n, 11, 31);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  };
  return /* @__PURE__ */ f.jsx(
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
          xr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-5 top-5",
          s() && "pointer-events-none"
        ),
        button_next: M(
          xr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-5 top-5",
          c() && "pointer-events-none"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: M("flex", o.showWeekNumber && "justify-end"),
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
        day_button: M(
          xr({ variant: "ghost" }),
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
        Chevron: ({ ...l }) => l.orientation === "left" ? /* @__PURE__ */ f.jsx(Ov, { className: "h-4 w-4" }) : /* @__PURE__ */ f.jsx(zo, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: l }) => /* @__PURE__ */ f.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ f.jsxs(
            Yl,
            {
              defaultValue: l.date.getMonth().toString(),
              onValueChange: (d) => {
                var m;
                const p = new Date(l.date);
                p.setMonth(Number.parseInt(d, 10)), (m = o.onMonthChange) == null || m.call(o, p);
              },
              children: [
                /* @__PURE__ */ f.jsx(qo, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ f.jsx(Ul, {}) }),
                /* @__PURE__ */ f.jsx(Bo, { children: a.map((d) => /* @__PURE__ */ f.jsx(
                  wn,
                  {
                    value: d.value.toString(),
                    children: d.label
                  },
                  d.value
                )) })
              ]
            }
          ),
          /* @__PURE__ */ f.jsxs(
            Yl,
            {
              defaultValue: l.date.getFullYear().toString(),
              onValueChange: (d) => {
                var m;
                const p = new Date(l.date);
                p.setFullYear(Number.parseInt(d, 10)), (m = o.onMonthChange) == null || m.call(o, p);
              },
              children: [
                /* @__PURE__ */ f.jsx(qo, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ f.jsx(Ul, {}) }),
                /* @__PURE__ */ f.jsx(Bo, { children: i.map((d) => /* @__PURE__ */ f.jsx(wn, { value: d.value.toString(), children: d.label }, d.value)) })
              ]
            }
          )
        ] })
      },
      ...o
    }
  );
}
qb.displayName = "Calendar";
const Bb = u.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: n, onLeftFocus: o, onRightFocus: a }, i) => {
    const s = (l) => {
      l.key === "ArrowRight" && (a == null || a()), l.key === "ArrowLeft" && (o == null || o());
    }, c = (l) => {
      if (t == null || t(l), r) {
        const d = new Date(r), p = Fb(r.getHours());
        n == null || n(
          jl(
            d,
            p.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ f.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ f.jsxs(
      Yl,
      {
        defaultValue: e,
        onValueChange: (l) => c(l),
        children: [
          /* @__PURE__ */ f.jsx(
            qo,
            {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: /* @__PURE__ */ f.jsx(Ul, {})
            }
          ),
          /* @__PURE__ */ f.jsxs(Bo, { children: [
            /* @__PURE__ */ f.jsx(wn, { value: "AM", children: "AM" }),
            /* @__PURE__ */ f.jsx(wn, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Bb.displayName = "TimePeriodSelect";
const ho = u.forwardRef(
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
    const [h, g] = u.useState(!1), [w, b] = u.useState("0");
    u.useEffect(() => {
      if (h) {
        const S = setTimeout(() => {
          g(!1);
        }, 2e3);
        return () => clearTimeout(S);
      }
    }, [h]);
    const x = u.useMemo(() => Kk(a, l), [a, l]), C = (S) => l === "12hours" && h && x.slice(1, 2) === "1" && w === "0" ? `0${S}` : h ? x.slice(1, 2) + S : `0${S}`, _ = (S) => {
      if (S.key !== "Tab") {
        if (S.preventDefault(), S.key === "ArrowRight" && (m == null || m()), S.key === "ArrowLeft" && (p == null || p()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const E = S.key === "ArrowUp" ? 1 : -1, N = Xk(x, E, l);
          h && g(!1);
          const T = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(jl(T, N, l, d));
        }
        if (S.key >= "0" && S.key <= "9") {
          l === "12hours" && b(S.key);
          const E = C(S.key);
          h && (m == null || m()), g((T) => !T);
          const N = a ? new Date(a) : /* @__PURE__ */ new Date();
          i == null || i(jl(N, E, l, d));
        }
      }
    };
    return /* @__PURE__ */ f.jsx(
      Jw,
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
ho.displayName = "TimePickerInput";
const Wb = u.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: n = "second" }, o) => {
    const a = u.useRef(null), i = u.useRef(null), s = u.useRef(null), c = u.useRef(null), [l, d] = u.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return tu(
      o,
      () => ({
        minuteRef: a.current,
        hourRef: i.current,
        secondRef: s.current,
        periodRef: c.current
      }),
      [a, i, s]
    ), /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ f.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ f.jsx(iE, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ f.jsx(
        ho,
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
      (n === "minute" || n === "second") && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        ":",
        /* @__PURE__ */ f.jsx(
          ho,
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
      n === "second" && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        ":",
        /* @__PURE__ */ f.jsx(
          ho,
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
      r === 12 && /* @__PURE__ */ f.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ f.jsx(
        Bb,
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
Wb.displayName = "TimePicker";
const eI = u.forwardRef(
  ({
    locale: e = Cr,
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
    const [v, y] = u.useState(r ?? t), h = rr(null), [g, w] = u.useState(
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
      const j = (T.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), q = MP(t, {
        days: Math.ceil(j)
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
    tu(
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
    let _ = Cr;
    const { options: S, localize: E, formatLong: N } = e;
    return S && E && N && (_ = {
      ...Cr,
      options: S,
      localize: E,
      formatLong: N
    }), /* @__PURE__ */ f.jsxs(Ju, { children: [
      /* @__PURE__ */ f.jsx(ed, { asChild: !0, disabled: i, children: /* @__PURE__ */ f.jsxs(
        Uo,
        {
          variant: "outline",
          className: M(
            "w-full justify-start text-left font-normal",
            !g && "text-muted-foreground",
            d
          ),
          ref: h,
          children: [
            /* @__PURE__ */ f.jsx(Mv, { className: "mr-2 h-4 w-4" }),
            /* @__PURE__ */ f.jsx("span", { className: "truncate block", title: l, children: g ? Ko(
              g,
              o === 24 ? C.hour24 : C.hour12,
              {
                locale: _
              }
            ) : /* @__PURE__ */ f.jsx("span", { children: l }) })
          ]
        }
      ) }),
      /* @__PURE__ */ f.jsxs(ba, { className: "w-auto p-0", children: [
        /* @__PURE__ */ f.jsx(
          qb,
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
        c !== "day" && /* @__PURE__ */ f.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ f.jsx(
          Wb,
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
eI.displayName = "DateTimePicker";
const tI = $u, xq = Uy, rI = Lu, Sq = fa, Hb = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
Hb.displayName = Mn.displayName;
const Vb = u.forwardRef(({ className: e, onClose: t, ...r }, n) => /* @__PURE__ */ f.jsxs(rI, { children: [
  /* @__PURE__ */ f.jsx(Hb, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ f.jsxs(
    On,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ f.jsx(
          fa,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ f.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ f.jsx(Yo, { className: "h-4 w-4" }),
              /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
Vb.displayName = On.displayName;
const nI = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
nI.displayName = "DialogHeader";
const oI = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
oI.displayName = "DialogFooter";
const aI = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  ua,
  {
    ref: r,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
aI.displayName = ua.displayName;
const iI = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  da,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
iI.displayName = da.displayName;
var rl = "rovingFocusGroup.onEntryFocus", sI = { bubbles: !1, cancelable: !0 }, xa = "RovingFocusGroup", [kl, Gb, cI] = cr(xa), [lI, Vt] = Te(
  xa,
  [cI]
), [uI, dI] = lI(xa), zb = u.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(kl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(kl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(fI, { ...e, ref: t }) }) })
);
zb.displayName = xa;
var fI = u.forwardRef((e, t) => {
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
  } = e, m = u.useRef(null), v = ne(t, m), y = Pt(a), [h = null, g] = Pe({
    prop: i,
    defaultProp: s,
    onChange: c
  }), [w, b] = u.useState(!1), x = me(l), C = Gb(r), _ = u.useRef(!1), [S, E] = u.useState(0);
  return u.useEffect(() => {
    const N = m.current;
    if (N)
      return N.addEventListener(rl, x), () => N.removeEventListener(rl, x);
  }, [x]), /* @__PURE__ */ f.jsx(
    uI,
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
      children: /* @__PURE__ */ f.jsx(
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
              const k = new CustomEvent(rl, sI);
              if (N.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const j = C().filter((D) => D.focusable), q = j.find((D) => D.active), F = j.find((D) => D.id === h), I = [q, F, ...j].filter(
                  Boolean
                ).map((D) => D.ref.current);
                Kb(I, d);
              }
            }
            _.current = !1;
          }),
          onBlur: $(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Yb = "RovingFocusGroupItem", Ub = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      ...i
    } = e, s = _e(), c = a || s, l = dI(Yb, r), d = l.currentTabStopId === c, p = Gb(r), { onFocusableItemAdd: m, onFocusableItemRemove: v } = l;
    return u.useEffect(() => {
      if (n)
        return m(), () => v();
    }, [n, m, v]), /* @__PURE__ */ f.jsx(
      kl.ItemSlot,
      {
        scope: r,
        id: c,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ f.jsx(
          W.span,
          {
            tabIndex: d ? 0 : -1,
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
              const h = hI(y, l.orientation, l.dir);
              if (h !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let w = p().filter((b) => b.focusable).map((b) => b.ref.current);
                if (h === "last") w.reverse();
                else if (h === "prev" || h === "next") {
                  h === "prev" && w.reverse();
                  const b = w.indexOf(y.currentTarget);
                  w = l.loop ? vI(w, b + 1) : w.slice(b + 1);
                }
                setTimeout(() => Kb(w));
              }
            })
          }
        )
      }
    );
  }
);
Ub.displayName = Yb;
var pI = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function mI(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function hI(e, t, r) {
  const n = mI(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return pI[n];
}
function Kb(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function vI(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Sa = zb, Ca = Ub, Il = ["Enter", " "], gI = ["ArrowDown", "PageUp", "Home"], Xb = ["ArrowUp", "PageDown", "End"], yI = [...gI, ...Xb], bI = {
  ltr: [...Il, "ArrowRight"],
  rtl: [...Il, "ArrowLeft"]
}, wI = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, $n = "Menu", [yn, xI, SI] = cr($n), [pr, Zb] = Te($n, [
  SI,
  Wt,
  Vt
]), Ln = Wt(), Qb = Vt(), [Jb, Gt] = pr($n), [CI, Fn] = pr($n), ew = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Ln(t), [c, l] = u.useState(null), d = u.useRef(!1), p = me(a), m = Pt(o);
  return u.useEffect(() => {
    const v = () => {
      d.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => d.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ f.jsx(jn, { ...s, children: /* @__PURE__ */ f.jsx(
    Jb,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ f.jsx(
        CI,
        {
          scope: t,
          onClose: u.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: d,
          dir: m,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
ew.displayName = $n;
var _I = "MenuAnchor", rd = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ln(r);
    return /* @__PURE__ */ f.jsx(kn, { ...o, ...n, ref: t });
  }
);
rd.displayName = _I;
var nd = "MenuPortal", [EI, tw] = pr(nd, {
  forceMount: void 0
}), rw = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = Gt(nd, t);
  return /* @__PURE__ */ f.jsx(EI, { scope: t, forceMount: r, children: /* @__PURE__ */ f.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ f.jsx(fr, { asChild: !0, container: o, children: n }) }) });
};
rw.displayName = nd;
var ze = "MenuContent", [PI, od] = pr(ze), nw = u.forwardRef(
  (e, t) => {
    const r = tw(ze, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Gt(ze, e.__scopeMenu), i = Fn(ze, e.__scopeMenu);
    return /* @__PURE__ */ f.jsx(yn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ f.jsx(yn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ f.jsx(TI, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(RI, { ...o, ref: t }) }) }) });
  }
), TI = u.forwardRef(
  (e, t) => {
    const r = Gt(ze, e.__scopeMenu), n = u.useRef(null), o = ne(t, n);
    return u.useEffect(() => {
      const a = n.current;
      if (a) return la(a);
    }, []), /* @__PURE__ */ f.jsx(
      ad,
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
), RI = u.forwardRef((e, t) => {
  const r = Gt(ze, e.__scopeMenu);
  return /* @__PURE__ */ f.jsx(
    ad,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), ad = u.forwardRef(
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
    } = e, g = Gt(ze, r), w = Fn(ze, r), b = Ln(r), x = Qb(r), C = xI(r), [_, S] = u.useState(null), E = u.useRef(null), N = ne(t, E, g.onContentChange), T = u.useRef(0), k = u.useRef(""), j = u.useRef(0), q = u.useRef(null), F = u.useRef("right"), R = u.useRef(0), I = y ? Nn : u.Fragment, D = y ? { as: pt, allowPinchZoom: !0 } : void 0, G = (L) => {
      var H, oe;
      const J = k.current + L, te = C().filter((se) => !se.disabled), A = document.activeElement, V = (H = te.find((se) => se.ref.current === A)) == null ? void 0 : H.textValue, U = te.map((se) => se.textValue), z = qI(U, J, V), ee = (oe = te.find((se) => se.textValue === z)) == null ? void 0 : oe.ref.current;
      (function se(ce) {
        k.current = ce, window.clearTimeout(T.current), ce !== "" && (T.current = window.setTimeout(() => se(""), 1e3));
      })(J), ee && setTimeout(() => ee.focus());
    };
    u.useEffect(() => () => window.clearTimeout(T.current), []), sa();
    const B = u.useCallback((L) => {
      var te, A;
      return F.current === ((te = q.current) == null ? void 0 : te.side) && WI(L, (A = q.current) == null ? void 0 : A.area);
    }, []);
    return /* @__PURE__ */ f.jsx(
      PI,
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
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: u.useCallback((L) => {
          q.current = L;
        }, []),
        children: /* @__PURE__ */ f.jsx(I, { ...D, children: /* @__PURE__ */ f.jsx(
          Rn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: $(a, (L) => {
              var J;
              L.preventDefault(), (J = E.current) == null || J.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ f.jsx(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: v,
                children: /* @__PURE__ */ f.jsx(
                  Sa,
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
                    children: /* @__PURE__ */ f.jsx(
                      ga,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ww(g.open),
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
                          if (L.target !== U || !yI.includes(L.key)) return;
                          L.preventDefault();
                          const ee = C().filter((H) => !H.disabled).map((H) => H.ref.current);
                          Xb.includes(L.key) && ee.reverse(), LI(ee);
                        }),
                        onBlur: $(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(T.current), k.current = "");
                        }),
                        onPointerMove: $(
                          e.onPointerMove,
                          bn((L) => {
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
nw.displayName = ze;
var NI = "MenuGroup", id = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { role: "group", ...n, ref: t });
  }
);
id.displayName = NI;
var MI = "MenuLabel", ow = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { ...n, ref: t });
  }
);
ow.displayName = MI;
var jo = "MenuItem", Jh = "menu.itemSelect", _a = u.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = u.useRef(null), i = Fn(jo, e.__scopeMenu), s = od(jo, e.__scopeMenu), c = ne(t, a), l = u.useRef(!1), d = () => {
      const p = a.current;
      if (!r && p) {
        const m = new CustomEvent(Jh, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Jh, (v) => n == null ? void 0 : n(v), { once: !0 }), an(p, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ f.jsx(
      aw,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: $(e.onClick, d),
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
          r || m && p.key === " " || Il.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
_a.displayName = jo;
var aw = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = od(jo, r), s = Qb(r), c = u.useRef(null), l = ne(t, c), [d, p] = u.useState(!1), [m, v] = u.useState("");
    return u.useEffect(() => {
      const y = c.current;
      y && v((y.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ f.jsx(
      yn.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ f.jsx(Ca, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ f.jsx(
          W.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: $(
              e.onPointerMove,
              bn((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: $(
              e.onPointerLeave,
              bn((y) => i.onItemLeave(y))
            ),
            onFocus: $(e.onFocus, () => p(!0)),
            onBlur: $(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), OI = "MenuCheckboxItem", iw = u.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ f.jsx(dw, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ f.jsx(
      _a,
      {
        role: "menuitemcheckbox",
        "aria-checked": ko(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": ld(r),
        onSelect: $(
          o.onSelect,
          () => n == null ? void 0 : n(ko(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
iw.displayName = OI;
var sw = "MenuRadioGroup", [AI, DI] = pr(
  sw,
  { value: void 0, onValueChange: () => {
  } }
), cw = u.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = me(n);
    return /* @__PURE__ */ f.jsx(AI, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ f.jsx(id, { ...o, ref: t }) });
  }
);
cw.displayName = sw;
var lw = "MenuRadioItem", uw = u.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = DI(lw, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ f.jsx(dw, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ f.jsx(
      _a,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": ld(a),
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
uw.displayName = lw;
var sd = "MenuItemIndicator", [dw, jI] = pr(
  sd,
  { checked: !1 }
), fw = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = jI(sd, r);
    return /* @__PURE__ */ f.jsx(
      Ce,
      {
        present: n || ko(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ f.jsx(
          W.span,
          {
            ...o,
            ref: t,
            "data-state": ld(a.checked)
          }
        )
      }
    );
  }
);
fw.displayName = sd;
var kI = "MenuSeparator", pw = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(
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
pw.displayName = kI;
var II = "MenuArrow", mw = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Ln(r);
    return /* @__PURE__ */ f.jsx(ya, { ...o, ...n, ref: t });
  }
);
mw.displayName = II;
var cd = "MenuSub", [$I, hw] = pr(cd), vw = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = Gt(cd, t), i = Ln(t), [s, c] = u.useState(null), [l, d] = u.useState(null), p = me(o);
  return u.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ f.jsx(jn, { ...i, children: /* @__PURE__ */ f.jsx(
    Jb,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ f.jsx(
        $I,
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
vw.displayName = cd;
var en = "MenuSubTrigger", gw = u.forwardRef(
  (e, t) => {
    const r = Gt(en, e.__scopeMenu), n = Fn(en, e.__scopeMenu), o = hw(en, e.__scopeMenu), a = od(en, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, d = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => d, [d]), u.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ f.jsx(rd, { asChild: !0, ...l, children: /* @__PURE__ */ f.jsx(
      aw,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": ww(r.open),
        ...e,
        ref: Sn(t, o.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: $(
          e.onPointerMove,
          bn((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: $(
          e.onPointerLeave,
          bn((p) => {
            var v, y;
            d();
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
          e.disabled || m && p.key === " " || bI[n.dir].includes(p.key) && (r.onOpenChange(!0), (v = r.content) == null || v.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
gw.displayName = en;
var yw = "MenuSubContent", bw = u.forwardRef(
  (e, t) => {
    const r = tw(ze, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Gt(ze, e.__scopeMenu), i = Fn(ze, e.__scopeMenu), s = hw(yw, e.__scopeMenu), c = u.useRef(null), l = ne(t, c);
    return /* @__PURE__ */ f.jsx(yn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ f.jsx(yn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(
      ad,
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
        onFocusOutside: $(e.onFocusOutside, (d) => {
          d.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: $(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: $(e.onKeyDown, (d) => {
          var v;
          const p = d.currentTarget.contains(d.target), m = wI[i.dir].includes(d.key);
          p && m && (a.onOpenChange(!1), (v = s.trigger) == null || v.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
bw.displayName = yw;
function ww(e) {
  return e ? "open" : "closed";
}
function ko(e) {
  return e === "indeterminate";
}
function ld(e) {
  return ko(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function LI(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function FI(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function qI(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = FI(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function BI(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, d = t[i].y;
    c > n != d > n && r < (l - s) * (n - c) / (d - c) + s && (o = !o);
  }
  return o;
}
function WI(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return BI(r, t);
}
function bn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var HI = ew, VI = rd, GI = rw, zI = nw, YI = id, UI = ow, KI = _a, XI = iw, ZI = cw, QI = uw, JI = fw, e$ = pw, t$ = mw, r$ = vw, n$ = gw, o$ = bw, ud = "DropdownMenu", [a$, Cq] = Te(
  ud,
  [Zb]
), je = Zb(), [i$, xw] = a$(ud), Sw = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = je(t), l = u.useRef(null), [d = !1, p] = Pe({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ f.jsx(
    i$,
    {
      scope: t,
      triggerId: _e(),
      triggerRef: l,
      contentId: _e(),
      open: d,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ f.jsx(HI, { ...c, open: d, onOpenChange: p, dir: n, modal: s, children: r })
    }
  );
};
Sw.displayName = ud;
var Cw = "DropdownMenuTrigger", _w = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = xw(Cw, r), i = je(r);
    return /* @__PURE__ */ f.jsx(VI, { asChild: !0, ...i, children: /* @__PURE__ */ f.jsx(
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
        ref: Sn(t, a.triggerRef),
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
_w.displayName = Cw;
var s$ = "DropdownMenuPortal", Ew = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = je(t);
  return /* @__PURE__ */ f.jsx(GI, { ...n, ...r });
};
Ew.displayName = s$;
var Pw = "DropdownMenuContent", Tw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = xw(Pw, r), a = je(r), i = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      zI,
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
Tw.displayName = Pw;
var c$ = "DropdownMenuGroup", Rw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
    return /* @__PURE__ */ f.jsx(YI, { ...o, ...n, ref: t });
  }
);
Rw.displayName = c$;
var l$ = "DropdownMenuLabel", Nw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
    return /* @__PURE__ */ f.jsx(UI, { ...o, ...n, ref: t });
  }
);
Nw.displayName = l$;
var u$ = "DropdownMenuItem", Mw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
    return /* @__PURE__ */ f.jsx(KI, { ...o, ...n, ref: t });
  }
);
Mw.displayName = u$;
var d$ = "DropdownMenuCheckboxItem", Ow = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
  return /* @__PURE__ */ f.jsx(XI, { ...o, ...n, ref: t });
});
Ow.displayName = d$;
var f$ = "DropdownMenuRadioGroup", Aw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
  return /* @__PURE__ */ f.jsx(ZI, { ...o, ...n, ref: t });
});
Aw.displayName = f$;
var p$ = "DropdownMenuRadioItem", Dw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
  return /* @__PURE__ */ f.jsx(QI, { ...o, ...n, ref: t });
});
Dw.displayName = p$;
var m$ = "DropdownMenuItemIndicator", jw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
  return /* @__PURE__ */ f.jsx(JI, { ...o, ...n, ref: t });
});
jw.displayName = m$;
var h$ = "DropdownMenuSeparator", kw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
  return /* @__PURE__ */ f.jsx(e$, { ...o, ...n, ref: t });
});
kw.displayName = h$;
var v$ = "DropdownMenuArrow", g$ = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
    return /* @__PURE__ */ f.jsx(t$, { ...o, ...n, ref: t });
  }
);
g$.displayName = v$;
var y$ = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = je(t), [s = !1, c] = Pe({
    prop: n,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ f.jsx(r$, { ...i, open: s, onOpenChange: c, children: r });
}, b$ = "DropdownMenuSubTrigger", Iw = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
  return /* @__PURE__ */ f.jsx(n$, { ...o, ...n, ref: t });
});
Iw.displayName = b$;
var w$ = "DropdownMenuSubContent", $w = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = je(r);
  return /* @__PURE__ */ f.jsx(
    o$,
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
$w.displayName = w$;
var x$ = Sw, S$ = _w, Lw = Ew, Fw = Tw, C$ = Rw, qw = Nw, Bw = Mw, Ww = Ow, _$ = Aw, Hw = Dw, Vw = jw, Gw = kw, E$ = y$, zw = Iw, Yw = $w;
const _q = x$, Eq = S$, Pq = C$, Tq = Lw, Rq = E$, Nq = _$, P$ = u.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ f.jsxs(
  zw,
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
      /* @__PURE__ */ f.jsx(zo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
P$.displayName = zw.displayName;
const T$ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Yw,
  {
    ref: r,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
T$.displayName = Yw.displayName;
const R$ = u.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ f.jsx(Lw, { children: /* @__PURE__ */ f.jsx(
  Fw,
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
R$.displayName = Fw.displayName;
const N$ = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ f.jsx(
  Bw,
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
N$.displayName = Bw.displayName;
const M$ = u.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ f.jsxs(
  Ww,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(Vw, { children: /* @__PURE__ */ f.jsx(sn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
M$.displayName = Ww.displayName;
const O$ = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  Hw,
  {
    ref: n,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(Vw, { children: /* @__PURE__ */ f.jsx(Av, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
O$.displayName = Hw.displayName;
const A$ = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ f.jsx(
  qw,
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
A$.displayName = qw.displayName;
const D$ = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Gw,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
D$.displayName = Gw.displayName;
const j$ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
j$.displayName = "DropdownMenuShortcut";
var k$ = "Label", Uw = u.forwardRef((e, t) => /* @__PURE__ */ f.jsx(
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
Uw.displayName = k$;
var Kw = Uw;
const I$ = Rt(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Xw = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Kw,
  {
    ref: r,
    className: M(I$(), e),
    ...t
  }
));
Xw.displayName = Kw.displayName;
const Mq = d_, Zw = u.createContext(
  {}
), Oq = ({
  ...e
}) => /* @__PURE__ */ f.jsx(Zw.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.jsx(f_, { ...e }) }), qn = () => {
  const e = u.useContext(Zw), t = u.useContext(Qw), { getFieldState: r, formState: n } = u_(), o = r(e.name, n);
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
}, Qw = u.createContext(
  {}
), $$ = u.forwardRef(({ className: e, ...t }, r) => {
  const n = u.useId();
  return /* @__PURE__ */ f.jsx(Qw.Provider, { value: { id: n }, children: /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: r,
      className: M("space-y-1 relative", e),
      ...t
    }
  ) });
});
$$.displayName = "FormItem";
const L$ = u.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = qn();
  return /* @__PURE__ */ f.jsx(
    Xw,
    {
      ref: r,
      className: M(n && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
L$.displayName = "FormLabel";
const F$ = u.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = qn();
  return /* @__PURE__ */ f.jsx(
    pt,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
F$.displayName = "FormControl";
const q$ = u.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = qn();
  return /* @__PURE__ */ f.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: M("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
q$.displayName = "FormDescription";
const B$ = u.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o, formMessageId: a } = qn(), i = o ? String(o == null ? void 0 : o.message) : t;
  return i ? /* @__PURE__ */ f.jsx(
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
B$.displayName = "FormMessage";
const Jw = O.forwardRef(({ className: e, type: t, ...r }, n) => t === "textarea" ? /* @__PURE__ */ f.jsx(
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
) : /* @__PURE__ */ f.jsx(
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
var W$ = "VisuallyHidden", Bn = u.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(
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
Bn.displayName = W$;
var ex = Bn, Vr = "NavigationMenu", [dd, tx, H$] = cr(Vr), [$l, V$, G$] = cr(Vr), [fd, Aq] = Te(
  Vr,
  [H$, G$]
), [z$, Ye] = fd(Vr), [Y$, U$] = fd(Vr), rx = u.forwardRef(
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
    } = e, [p, m] = u.useState(null), v = ne(t, (T) => m(T)), y = Pt(l), h = u.useRef(0), g = u.useRef(0), w = u.useRef(0), [b, x] = u.useState(!0), [C = "", _] = Pe({
      prop: n,
      onChange: (T) => {
        const k = T !== "", j = s > 0;
        k ? (window.clearTimeout(w.current), j && x(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
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
    }, []), /* @__PURE__ */ f.jsx(
      ox,
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
        children: /* @__PURE__ */ f.jsx(
          W.nav,
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
rx.displayName = Vr;
var nx = "NavigationMenuSub", K$ = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = Ye(nx, r), [l = "", d] = Pe({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ f.jsx(
      ox,
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
        children: /* @__PURE__ */ f.jsx(W.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
K$.displayName = nx;
var ox = (e) => {
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
  } = e, [y, h] = u.useState(null), [g, w] = u.useState(/* @__PURE__ */ new Map()), [b, x] = u.useState(null);
  return /* @__PURE__ */ f.jsx(
    z$,
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
      onTriggerEnter: me(d),
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
      children: /* @__PURE__ */ f.jsx(dd.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(Y$, { scope: t, items: g, children: i }) })
    }
  );
}, ax = "NavigationMenuList", ix = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Ye(ax, r), a = /* @__PURE__ */ f.jsx(W.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ f.jsx(W.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ f.jsx(dd.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ f.jsx(vx, { asChild: !0, children: a }) : a }) });
  }
);
ix.displayName = ax;
var sx = "NavigationMenuItem", [X$, cx] = fd(sx), lx = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = _e(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = u.useRef(null), c = u.useRef(null), l = u.useRef(null), d = u.useRef(() => {
    }), p = u.useRef(!1), m = u.useCallback((y = "start") => {
      if (s.current) {
        d.current();
        const h = Fl(s.current);
        h.length && hd(y === "start" ? h : h.reverse());
      }
    }, []), v = u.useCallback(() => {
      if (s.current) {
        const y = Fl(s.current);
        y.length && (d.current = nL(y));
      }
    }, []);
    return /* @__PURE__ */ f.jsx(
      X$,
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
        children: /* @__PURE__ */ f.jsx(W.li, { ...o, ref: t })
      }
    );
  }
);
lx.displayName = sx;
var Ll = "NavigationMenuTrigger", ux = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = Ye(Ll, e.__scopeNavigationMenu), i = cx(Ll, e.__scopeNavigationMenu), s = u.useRef(null), c = ne(s, i.triggerRef, t), l = yx(a.baseId, i.value), d = bx(a.baseId, i.value), p = u.useRef(!1), m = u.useRef(!1), v = i.value === a.value;
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(dd.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ f.jsx(gx, { asChild: !0, children: /* @__PURE__ */ f.jsx(
      W.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": vd(v),
        "aria-expanded": v,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: $(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: $(
          e.onPointerMove,
          Io(() => {
            n || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: $(
          e.onPointerLeave,
          Io(() => {
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
    v && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        ex,
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
      a.viewport && /* @__PURE__ */ f.jsx("span", { "aria-owns": d })
    ] })
  ] });
});
ux.displayName = Ll;
var Z$ = "NavigationMenuLink", ev = "navigationMenu.linkSelect", dx = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ f.jsx(gx, { asChild: !0, children: /* @__PURE__ */ f.jsx(
      W.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: $(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(ev, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(ev, (l) => o == null ? void 0 : o(l), { once: !0 }), an(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(vo, {
                bubbles: !0,
                cancelable: !0
              });
              an(s, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
dx.displayName = Z$;
var pd = "NavigationMenuIndicator", fx = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ye(pd, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? lv.createPortal(
    /* @__PURE__ */ f.jsx(Ce, { present: r || a, children: /* @__PURE__ */ f.jsx(Q$, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
fx.displayName = pd;
var Q$ = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = Ye(pd, r), a = tx(r), [i, s] = u.useState(
    null
  ), [c, l] = u.useState(null), d = o.orientation === "horizontal", p = !!o.value;
  u.useEffect(() => {
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
  return ql(i, m), ql(o.indicatorTrack, m), c ? /* @__PURE__ */ f.jsx(
    W.div,
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
}), kr = "NavigationMenuContent", px = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ye(kr, e.__scopeNavigationMenu), a = cx(kr, e.__scopeNavigationMenu), i = ne(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ f.jsx(J$, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ f.jsx(Ce, { present: r || s, children: /* @__PURE__ */ f.jsx(
    mx,
    {
      "data-state": vd(s),
      ...c,
      ref: i,
      onPointerEnter: $(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: $(
        e.onPointerLeave,
        Io(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
px.displayName = kr;
var J$ = u.forwardRef((e, t) => {
  const r = Ye(kr, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return Ee(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), Ee(() => () => o(e.value), [e.value, o]), null;
}), vo = "navigationMenu.rootContentDismiss", mx = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, d = Ye(kr, r), p = u.useRef(null), m = ne(p, t), v = yx(d.baseId, n), y = bx(d.baseId, n), h = tx(r), g = u.useRef(null), { onItemDismiss: w } = d;
  u.useEffect(() => {
    const x = p.current;
    if (d.isRootMenu && x) {
      const C = () => {
        var _;
        w(), s(), x.contains(document.activeElement) && ((_ = o.current) == null || _.focus());
      };
      return x.addEventListener(vo, C), () => x.removeEventListener(vo, C);
    }
  }, [d.isRootMenu, e.value, o, w, s]);
  const b = u.useMemo(() => {
    const C = h().map((k) => k.value);
    d.dir === "rtl" && C.reverse();
    const _ = C.indexOf(d.value), S = C.indexOf(d.previousValue), E = n === d.value, N = S === C.indexOf(n);
    if (!E && !N) return g.current;
    const T = (() => {
      if (_ !== S) {
        if (E && S !== -1) return _ > S ? "from-end" : "from-start";
        if (N && _ !== -1) return _ > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = T, T;
  }, [d.previousValue, d.value, d.dir, h, n]);
  return /* @__PURE__ */ f.jsx(vx, { asChild: !0, children: /* @__PURE__ */ f.jsx(
    Bt,
    {
      id: y,
      "aria-labelledby": v,
      "data-motion": b,
      "data-orientation": d.orientation,
      ...l,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var C;
        const x = new Event(vo, {
          bubbles: !0,
          cancelable: !0
        });
        (C = p.current) == null || C.dispatchEvent(x);
      },
      onFocusOutside: $(e.onFocusOutside, (x) => {
        var _;
        c();
        const C = x.target;
        (_ = d.rootNavigationMenu) != null && _.contains(C) && x.preventDefault();
      }),
      onPointerDownOutside: $(e.onPointerDownOutside, (x) => {
        var E;
        const C = x.target, _ = h().some((N) => {
          var T;
          return (T = N.ref.current) == null ? void 0 : T.contains(C);
        }), S = d.isRootMenu && ((E = d.viewport) == null ? void 0 : E.contains(C));
        (_ || S || !d.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: $(e.onKeyDown, (x) => {
        var S;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const E = Fl(x.currentTarget), N = document.activeElement, T = E.findIndex((q) => q === N), j = x.shiftKey ? E.slice(0, T).reverse() : E.slice(T + 1, E.length);
          hd(j) ? x.preventDefault() : (S = a.current) == null || S.focus();
        }
      }),
      onEscapeKeyDown: $(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), md = "NavigationMenuViewport", hx = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!Ye(md, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ f.jsx(Ce, { present: r || a, children: /* @__PURE__ */ f.jsx(eL, { ...n, ref: t }) });
});
hx.displayName = md;
var eL = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = Ye(md, r), i = ne(t, a.onViewportChange), s = U$(
    kr,
    e.__scopeNavigationMenu
  ), [c, l] = u.useState(null), [d, p] = u.useState(null), m = c ? (c == null ? void 0 : c.width) + "px" : void 0, v = c ? (c == null ? void 0 : c.height) + "px" : void 0, y = !!a.value, h = y ? a.value : a.previousValue;
  return ql(d, () => {
    d && l({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ f.jsx(
    W.div,
    {
      "data-state": vd(y),
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
      onPointerLeave: $(e.onPointerLeave, Io(a.onContentLeave)),
      children: Array.from(s.items).map(([w, { ref: b, forceMount: x, ...C }]) => {
        const _ = h === w;
        return /* @__PURE__ */ f.jsx(Ce, { present: x || _, children: /* @__PURE__ */ f.jsx(
          mx,
          {
            ...C,
            ref: Sn(b, (S) => {
              _ && S && p(S);
            })
          }
        ) }, w);
      })
    }
  );
}), tL = "FocusGroup", vx = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Ye(tL, r);
    return /* @__PURE__ */ f.jsx($l.Provider, { scope: r, children: /* @__PURE__ */ f.jsx($l.Slot, { scope: r, children: /* @__PURE__ */ f.jsx(W.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), tv = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], rL = "FocusGroupItem", gx = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = V$(r), a = Ye(rL, r);
    return /* @__PURE__ */ f.jsx($l.ItemSlot, { scope: r, children: /* @__PURE__ */ f.jsx(
      W.button,
      {
        ...n,
        ref: t,
        onKeyDown: $(e.onKeyDown, (i) => {
          if (["Home", "End", ...tv].includes(i.key)) {
            let c = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), tv.includes(i.key)) {
              const p = c.indexOf(i.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => hd(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function Fl(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function hd(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function nL(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function ql(e, t) {
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
function vd(e) {
  return e ? "open" : "closed";
}
function yx(e, t) {
  return `${e}-trigger-${t}`;
}
function bx(e, t) {
  return `${e}-content-${t}`;
}
function Io(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var wx = rx, xx = ix, oL = lx, Sx = ux, aL = dx, Cx = fx, _x = px, Ex = hx;
const iL = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  wx,
  {
    ref: n,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ f.jsx(Px, {})
    ]
  }
));
iL.displayName = wx.displayName;
const sL = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  xx,
  {
    ref: r,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
sL.displayName = xx.displayName;
const Dq = oL, cL = Rt(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), lL = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  Sx,
  {
    ref: n,
    className: M(cL(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.jsx(
        Tr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
lL.displayName = Sx.displayName;
const uL = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  _x,
  {
    ref: r,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
uL.displayName = _x.displayName;
const dL = aL, Px = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.jsx(
  Ex,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
Px.displayName = Ex.displayName;
const fL = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Cx,
  {
    ref: r,
    className: M(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
fL.displayName = Cx.displayName;
const pL = O.forwardRef(({ className: e, title: t, children: r, ...n }, o) => /* @__PURE__ */ f.jsx("li", { children: /* @__PURE__ */ f.jsx(dL, { asChild: !0, children: /* @__PURE__ */ f.jsxs(
  "a",
  {
    ref: o,
    className: M(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ f.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: r })
    ]
  }
) }) }));
pL.displayName = "ListItem";
function mL(e) {
  return /* @__PURE__ */ f.jsx(
    "img",
    {
      src: "./logo_aiqia_animation.svg",
      alt: "",
      ...e,
      style: { height: "140px" }
    }
  );
}
function jq() {
  return /* @__PURE__ */ f.jsx("div", { className: "flex items-center justify-center flex-1 p-10", children: /* @__PURE__ */ f.jsx(mL, { className: "w-40" }) });
}
const hL = "(##) ####-####", vL = "(##) #####-####", gL = "#####-###", yL = "###.###.###-##", bL = "##.###.###/####-##", wL = "###########", xL = "##.###.###-#", SL = "AAA#A##", CL = "###########", _L = "##############", Tx = (e, t) => {
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
}, kq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: vL,
  CNH_MASK: wL,
  CNPJ_MASK: bL,
  CPF_MASK: yL,
  PHONE_MASK: hL,
  PLATE_MASK: SL,
  RENAVAM_MASK: CL,
  RG_MASK: xL,
  RNTRC_MASK: _L,
  ZIP_CODE_MASK: gL,
  formatMask: Tx
}, Symbol.toStringTag, { value: "Module" }));
function Iq({
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
  return /* @__PURE__ */ f.jsx(
    Jw,
    {
      value: Tx(e, t),
      onChange: s,
      ...n
    }
  );
}
const EL = (e, t = 300) => {
  const [r, n] = Pr(e);
  return Lr(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, rv = Rt(
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
), PL = u.forwardRef(
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
    const [h, g] = u.useState(n), [w, b] = u.useState(!1), [x, C] = u.useState(!1), [_, S] = u.useState(""), E = EL(_, 300);
    Lr(() => {
      d && d(E ?? "");
    }, [E]);
    const N = (R) => {
      if (R.key === "Enter")
        b(!0);
      else if (R.key === "Backspace" && !R.currentTarget.value) {
        const I = [...h];
        I.pop(), g(I), t(I);
      }
    }, T = (R) => {
      const I = h.includes(R) ? h.filter((D) => D !== R) : [...h, R];
      g(I), t(I);
    }, k = () => {
      g([]), t([]);
    }, j = () => {
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
    return /* @__PURE__ */ f.jsxs(
      Ju,
      {
        open: w,
        onOpenChange: b,
        modal: s,
        children: [
          /* @__PURE__ */ f.jsx(ed, { asChild: !0, children: /* @__PURE__ */ f.jsx(
            Uo,
            {
              ref: y,
              ...v,
              onClick: j,
              variant: "outline",
              className: M(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, i).map((R) => {
                    const I = e.find((G) => G.value === R), D = I == null ? void 0 : I.icon;
                    return /* @__PURE__ */ f.jsxs(
                      Vd,
                      {
                        className: M(
                          x ? "animate-bounce" : "",
                          rv({ variant: r })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          D && /* @__PURE__ */ f.jsx(D, { className: "h-4 w-4 mr-2" }),
                          I == null ? void 0 : I.label,
                          /* @__PURE__ */ f.jsx(
                            Ld,
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
                  h.length > i && /* @__PURE__ */ f.jsxs(
                    Vd,
                    {
                      className: M(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        x ? "animate-bounce" : "",
                        rv({ variant: r })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - i}`,
                        /* @__PURE__ */ f.jsx(
                          Ld,
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
                /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ f.jsx(
                    Yo,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (R) => {
                        R.stopPropagation(), k();
                      }
                    }
                  ),
                  /* @__PURE__ */ f.jsx(
                    zS,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ f.jsx(Tr, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ f.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ f.jsx(Tr, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ f.jsx(
            ba,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => b(!1),
              children: /* @__PURE__ */ f.jsxs(Bu, { shouldFilter: !d, children: [
                /* @__PURE__ */ f.jsx(
                  tb,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: N,
                    onValueChange: S
                  }
                ),
                /* @__PURE__ */ f.jsxs(rb, { children: [
                  !p && /* @__PURE__ */ f.jsx(nb, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ f.jsxs(ob, { children: [
                    !p && !e.length && !!_.length && m && /* @__PURE__ */ f.jsx(
                      po,
                      {
                        onSelect: m,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ f.jsx(dE, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ f.jsx("b", { children: _ })
                        ] })
                      },
                      "new"
                    ),
                    p && /* @__PURE__ */ f.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ f.jsx(lE, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !l && /* @__PURE__ */ f.jsxs(
                      po,
                      {
                        onSelect: F,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ f.jsx(
                            "div",
                            {
                              className: M(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ f.jsx(sn, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ f.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((R) => {
                      const I = h.includes(R.value);
                      return /* @__PURE__ */ f.jsxs(
                        po,
                        {
                          onSelect: () => T(R.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ f.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  I ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ f.jsx(sn, { className: "h-4 w-4" })
                              }
                            ),
                            R.icon && /* @__PURE__ */ f.jsx(R.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ f.jsx("span", { children: R.label })
                          ]
                        },
                        R.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ f.jsx(ab, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ f.jsx(
            hE,
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
PL.displayName = "MultiSelect";
const Rx = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Rx.displayName = "Pagination";
const Nx = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "ul",
  {
    ref: r,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
Nx.displayName = "PaginationContent";
const tn = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("li", { ref: r, className: M("", e), ...t }));
tn.displayName = "PaginationItem";
const tr = ({
  className: e,
  isActive: t,
  size: r = "icon",
  onClick: n,
  ...o
}) => /* @__PURE__ */ f.jsx(
  "button",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      xr({ variant: t ? "outline" : "ghost", size: r }),
      e
    ),
    onClick: n,
    ...o
  }
);
tr.displayName = "PaginationButton";
const Mx = ({
  className: e,
  onClick: t,
  ...r
}) => /* @__PURE__ */ f.jsx(
  tr,
  {
    "aria-label": "Go to previous page",
    className: M("gap-1", e),
    onClick: t,
    ...r,
    children: /* @__PURE__ */ f.jsx(Ov, { className: "h-4 w-4" })
  }
);
Mx.displayName = "PaginationPrevious";
const Ox = ({
  className: e,
  onClick: t,
  ...r
}) => /* @__PURE__ */ f.jsx(
  tr,
  {
    "aria-label": "Go to next page",
    className: M("gap-1", e),
    onClick: t,
    ...r,
    children: /* @__PURE__ */ f.jsx(zo, { className: "h-4 w-4" })
  }
);
Ox.displayName = "PaginationNext";
const Ax = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.jsx(Dv, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Ax.displayName = "PaginationEllipsis";
const $q = () => {
  const [e, t] = u.useState(1), r = () => {
    e > 1 && t(e - 1);
  }, n = () => {
    t(e + 1);
  };
  return /* @__PURE__ */ f.jsx(Rx, { children: /* @__PURE__ */ f.jsxs(Nx, { children: [
    /* @__PURE__ */ f.jsx(Mx, { onClick: r }),
    /* @__PURE__ */ f.jsx(tn, { children: /* @__PURE__ */ f.jsx(
      tr,
      {
        isActive: e === 1,
        onClick: () => t(1),
        children: "1"
      }
    ) }),
    /* @__PURE__ */ f.jsx(tn, { children: /* @__PURE__ */ f.jsx(
      tr,
      {
        isActive: e === 2,
        onClick: () => t(2),
        children: "2"
      }
    ) }),
    /* @__PURE__ */ f.jsx(tn, { children: /* @__PURE__ */ f.jsx(
      tr,
      {
        isActive: e === 3,
        onClick: () => t(3),
        children: "3"
      }
    ) }),
    /* @__PURE__ */ f.jsx(Ax, {}),
    /* @__PURE__ */ f.jsx(tn, { children: /* @__PURE__ */ f.jsx(
      tr,
      {
        isActive: e === 5,
        onClick: () => t(5),
        children: "5"
      }
    ) }),
    /* @__PURE__ */ f.jsx(Ox, { onClick: n })
  ] }) });
};
var gd = "Radio", [TL, Dx] = Te(gd), [RL, NL] = TL(gd), jx = u.forwardRef(
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
    } = e, [p, m] = u.useState(null), v = ne(t, (g) => m(g)), y = u.useRef(!1), h = p ? l || !!p.closest("form") : !0;
    return /* @__PURE__ */ f.jsxs(RL, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ f.jsx(
        W.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": $x(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...d,
          ref: v,
          onClick: $(e.onClick, (g) => {
            o || c == null || c(), h && (y.current = g.isPropagationStopped(), y.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ f.jsx(
        ML,
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
jx.displayName = gd;
var kx = "RadioIndicator", Ix = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = NL(kx, r);
    return /* @__PURE__ */ f.jsx(Ce, { present: n || a.checked, children: /* @__PURE__ */ f.jsx(
      W.span,
      {
        "data-state": $x(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Ix.displayName = kx;
var ML = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = u.useRef(null), i = Tn(r), s = ia(t);
  return u.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && p) {
      const m = new Event("click", { bubbles: n });
      p.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ f.jsx(
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
function $x(e) {
  return e ? "checked" : "unchecked";
}
var OL = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yd = "RadioGroup", [AL, Lq] = Te(yd, [
  Vt,
  Dx
]), Lx = Vt(), Fx = Dx(), [DL, jL] = AL(yd), qx = u.forwardRef(
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
    } = e, v = Lx(r), y = Pt(l), [h, g] = Pe({
      prop: a,
      defaultProp: o,
      onChange: p
    });
    return /* @__PURE__ */ f.jsx(
      DL,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ f.jsx(
          Sa,
          {
            asChild: !0,
            ...v,
            orientation: c,
            dir: y,
            loop: d,
            children: /* @__PURE__ */ f.jsx(
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
qx.displayName = yd;
var Bx = "RadioGroupItem", Wx = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = jL(Bx, r), i = a.disabled || n, s = Lx(r), c = Fx(r), l = u.useRef(null), d = ne(t, l), p = a.value === o.value, m = u.useRef(!1);
    return u.useEffect(() => {
      const v = (h) => {
        OL.includes(h.key) && (m.current = !0);
      }, y = () => m.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ f.jsx(
      Ca,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ f.jsx(
          jx,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...c,
            ...o,
            name: a.name,
            ref: d,
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
Wx.displayName = Bx;
var kL = "RadioGroupIndicator", Hx = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = Fx(r);
    return /* @__PURE__ */ f.jsx(Ix, { ...o, ...n, ref: t });
  }
);
Hx.displayName = kL;
var Vx = qx, Gx = Wx, IL = Hx;
const $L = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Vx,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: r
  }
));
$L.displayName = Vx.displayName;
const LL = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Gx,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow-smfocus:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx(IL, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.jsx(Av, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
LL.displayName = Gx.displayName;
function Bl(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function FL(e, t) {
  return u.useReducer((r, n) => t[r][n] ?? r, e);
}
var bd = "ScrollArea", [zx, Fq] = Te(bd), [qL, Ue] = zx(bd), Yx = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = u.useState(null), [l, d] = u.useState(null), [p, m] = u.useState(null), [v, y] = u.useState(null), [h, g] = u.useState(null), [w, b] = u.useState(0), [x, C] = u.useState(0), [_, S] = u.useState(!1), [E, N] = u.useState(!1), T = ne(t, (j) => c(j)), k = Pt(o);
    return /* @__PURE__ */ f.jsx(
      qL,
      {
        scope: r,
        type: n,
        dir: k,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: l,
        onViewportChange: d,
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
        children: /* @__PURE__ */ f.jsx(
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
Yx.displayName = bd;
var Ux = "ScrollAreaViewport", Kx = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = Ue(Ux, r), s = u.useRef(null), c = ne(t, s, i.onViewportChange);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ f.jsx(
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
          children: /* @__PURE__ */ f.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
Kx.displayName = Ux;
var yt = "ScrollAreaScrollbar", wd = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Ue(yt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return u.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ f.jsx(BL, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ f.jsx(WL, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ f.jsx(Xx, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ f.jsx(xd, { ...n, ref: t }) : null;
  }
);
wd.displayName = yt;
var BL = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ue(yt, e.__scopeScrollArea), [a, i] = u.useState(!1);
  return u.useEffect(() => {
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f.jsx(Ce, { present: r || a, children: /* @__PURE__ */ f.jsx(
    Xx,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), WL = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Ue(yt, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Pa(() => c("SCROLL_END"), 100), [s, c] = FL("hidden", {
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
    const l = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let p = l[d];
      const m = () => {
        const v = l[d];
        p !== v && (c("SCROLL"), i()), p = v;
      };
      return l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ f.jsx(Ce, { present: r || s !== "hidden", children: /* @__PURE__ */ f.jsx(
    xd,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: $(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: $(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Xx = u.forwardRef((e, t) => {
  const r = Ue(yt, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = u.useState(!1), s = e.orientation === "horizontal", c = Pa(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? l : d);
    }
  }, 10);
  return Ir(r.viewport, c), Ir(r.content, c), /* @__PURE__ */ f.jsx(Ce, { present: n || a, children: /* @__PURE__ */ f.jsx(
    xd,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), xd = u.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = Ue(yt, e.__scopeScrollArea), a = u.useRef(null), i = u.useRef(0), [s, c] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = tS(s.viewport, s.content), d = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, v) {
    return UL(m, i.current, s, v);
  }
  return r === "horizontal" ? /* @__PURE__ */ f.jsx(
    HL,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, v = nv(m, s, o.dir);
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
  ) : r === "vertical" ? /* @__PURE__ */ f.jsx(
    VL,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, v = nv(m, s);
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
}), HL = u.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Ue(yt, e.__scopeScrollArea), [i, s] = u.useState(), c = u.useRef(null), l = ne(t, c, a.onScrollbarXChange);
  return u.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f.jsx(
    Qx,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ea(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), nS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Lo(i.paddingLeft),
            paddingEnd: Lo(i.paddingRight)
          }
        });
      }
    }
  );
}), VL = u.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Ue(yt, e.__scopeScrollArea), [i, s] = u.useState(), c = u.useRef(null), l = ne(t, c, a.onScrollbarYChange);
  return u.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f.jsx(
    Qx,
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
        "--radix-scroll-area-thumb-height": Ea(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), nS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Lo(i.paddingTop),
            paddingEnd: Lo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [GL, Zx] = zx(yt), Qx = u.forwardRef((e, t) => {
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
  } = e, v = Ue(yt, r), [y, h] = u.useState(null), g = ne(t, (T) => h(T)), w = u.useRef(null), b = u.useRef(""), x = v.viewport, C = n.content - n.viewport, _ = me(d), S = me(c), E = Pa(p, 10);
  function N(T) {
    if (w.current) {
      const k = T.clientX - w.current.left, j = T.clientY - w.current.top;
      l({ x: k, y: j });
    }
  }
  return u.useEffect(() => {
    const T = (k) => {
      const j = k.target;
      (y == null ? void 0 : y.contains(j)) && _(k, C);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [x, y, C, _]), u.useEffect(S, [n, S]), Ir(y, E), Ir(v.content, E), /* @__PURE__ */ f.jsx(
    GL,
    {
      scope: r,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: me(a),
      onThumbPointerUp: me(i),
      onThumbPositionChange: S,
      onThumbPointerDown: me(s),
      children: /* @__PURE__ */ f.jsx(
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
}), $o = "ScrollAreaThumb", Jx = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Zx($o, e.__scopeScrollArea);
    return /* @__PURE__ */ f.jsx(Ce, { present: r || o.hasThumb, children: /* @__PURE__ */ f.jsx(zL, { ref: t, ...n }) });
  }
), zL = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = Ue($o, r), i = Zx($o, r), { onThumbPositionChange: s } = i, c = ne(
      t,
      (p) => i.onThumbChange(p)
    ), l = u.useRef(void 0), d = Pa(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (d(), !l.current) {
            const v = KL(p, s);
            l.current = v, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, d, s]), /* @__PURE__ */ f.jsx(
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
Jx.displayName = $o;
var Sd = "ScrollAreaCorner", eS = u.forwardRef(
  (e, t) => {
    const r = Ue(Sd, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ f.jsx(YL, { ...e, ref: t }) : null;
  }
);
eS.displayName = Sd;
var YL = u.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = Ue(Sd, r), [a, i] = u.useState(0), [s, c] = u.useState(0), l = !!(a && s);
  return Ir(o.scrollbarX, () => {
    var p;
    const d = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Ir(o.scrollbarY, () => {
    var p;
    const d = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(d), i(d);
  }), l ? /* @__PURE__ */ f.jsx(
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
function Lo(e) {
  return e ? parseInt(e, 10) : 0;
}
function tS(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Ea(e) {
  const t = tS(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function UL(e, t, r, n = "ltr") {
  const o = Ea(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, d = r.content - r.viewport, p = n === "ltr" ? [0, d] : [d * -1, 0];
  return rS([c, l], p)(e);
}
function nv(e, t, r = "ltr") {
  const n = Ea(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], l = Bl(e, c);
  return rS([0, i], [0, s])(l);
}
function rS(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function nS(e, t) {
  return e > 0 && e < t;
}
var KL = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function Pa(e, t) {
  const r = me(e), n = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(n.current), []), u.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Ir(e, t) {
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
var oS = Yx, XL = Kx, ZL = eS;
const QL = O.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  oS,
  {
    ref: n,
    className: M("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ f.jsx(XL, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.jsx(aS, {}),
      /* @__PURE__ */ f.jsx(ZL, {})
    ]
  }
));
QL.displayName = oS.displayName;
const aS = O.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ f.jsx(
  wd,
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
    children: /* @__PURE__ */ f.jsx(Jx, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
aS.displayName = wd.displayName;
var JL = [" ", "Enter", "ArrowUp", "ArrowDown"], eF = [" ", "Enter"], Wn = "Select", [Ta, Ra, tF] = cr(Wn), [Gr, qq] = Te(Wn, [
  tF,
  Wt
]), Na = Wt(), [rF, zt] = Gr(Wn), [nF, oF] = Gr(Wn), iS = (e) => {
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
  } = e, h = Na(t), [g, w] = u.useState(null), [b, x] = u.useState(null), [C, _] = u.useState(!1), S = Pt(l), [E = !1, N] = Pe({
    prop: n,
    defaultProp: o,
    onChange: a
  }), [T, k] = Pe({
    prop: i,
    defaultProp: s,
    onChange: c
  }), j = u.useRef(null), q = g ? y || !!g.closest("form") : !0, [F, R] = u.useState(/* @__PURE__ */ new Set()), I = Array.from(F).map((D) => D.props.value).join(";");
  return /* @__PURE__ */ f.jsx(jn, { ...h, children: /* @__PURE__ */ f.jsxs(
    rF,
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
      triggerPointerDownPosRef: j,
      disabled: m,
      children: [
        /* @__PURE__ */ f.jsx(Ta.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(
          nF,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((D) => {
              R((G) => new Set(G).add(D));
            }, []),
            onNativeOptionRemove: u.useCallback((D) => {
              R((G) => {
                const B = new Set(G);
                return B.delete(D), B;
              });
            }, []),
            children: r
          }
        ) }),
        q ? /* @__PURE__ */ f.jsxs(
          AS,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: d,
            autoComplete: p,
            value: T,
            onChange: (D) => k(D.target.value),
            disabled: m,
            form: y,
            children: [
              T === void 0 ? /* @__PURE__ */ f.jsx("option", { value: "" }) : null,
              Array.from(F)
            ]
          },
          I
        ) : null
      ]
    }
  ) });
};
iS.displayName = Wn;
var sS = "SelectTrigger", cS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = Na(r), i = zt(sS, r), s = i.disabled || n, c = ne(t, i.onTriggerChange), l = Ra(r), d = u.useRef("touch"), [p, m, v] = DS((h) => {
      const g = l().filter((x) => !x.disabled), w = g.find((x) => x.value === i.value), b = jS(g, h, w);
      b !== void 0 && i.onValueChange(b.value);
    }), y = (h) => {
      s || (i.onOpenChange(!0), v()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ f.jsx(kn, { asChild: !0, ...a, children: /* @__PURE__ */ f.jsx(
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
        "data-placeholder": OS(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: $(o.onClick, (h) => {
          h.currentTarget.focus(), d.current !== "mouse" && y(h);
        }),
        onPointerDown: $(o.onPointerDown, (h) => {
          d.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (y(h), h.preventDefault());
        }),
        onKeyDown: $(o.onKeyDown, (h) => {
          const g = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(g && h.key === " ") && JL.includes(h.key) && (y(), h.preventDefault());
        })
      }
    ) });
  }
);
cS.displayName = sS;
var lS = "SelectValue", uS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = zt(lS, r), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, p = ne(t, c.onValueNodeChange);
    return Ee(() => {
      l(d);
    }, [l, d]), /* @__PURE__ */ f.jsx(
      W.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: OS(c.value) ? /* @__PURE__ */ f.jsx(f.Fragment, { children: i }) : a
      }
    );
  }
);
uS.displayName = lS;
var aF = "SelectIcon", dS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ f.jsx(W.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
dS.displayName = aF;
var iF = "SelectPortal", fS = (e) => /* @__PURE__ */ f.jsx(fr, { asChild: !0, ...e });
fS.displayName = iF;
var sr = "SelectContent", pS = u.forwardRef(
  (e, t) => {
    const r = zt(sr, e.__scopeSelect), [n, o] = u.useState();
    if (Ee(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? xn.createPortal(
        /* @__PURE__ */ f.jsx(mS, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx(Ta.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ f.jsx(hS, { ...e, ref: t });
  }
);
pS.displayName = sr;
var Qe = 10, [mS, Yt] = Gr(sr), sF = "SelectContentImpl", hS = u.forwardRef(
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
      ...w
    } = e, b = zt(sr, r), [x, C] = u.useState(null), [_, S] = u.useState(null), E = ne(t, (H) => C(H)), [N, T] = u.useState(null), [k, j] = u.useState(
      null
    ), q = Ra(r), [F, R] = u.useState(!1), I = u.useRef(!1);
    u.useEffect(() => {
      if (x) return la(x);
    }, [x]), sa();
    const D = u.useCallback(
      (H) => {
        const [oe, ...se] = q().map((le) => le.ref.current), [ce] = se.slice(-1), fe = document.activeElement;
        for (const le of H)
          if (le === fe || (le == null || le.scrollIntoView({ block: "nearest" }), le === oe && _ && (_.scrollTop = 0), le === ce && _ && (_.scrollTop = _.scrollHeight), le == null || le.focus(), document.activeElement !== fe)) return;
      },
      [q, _]
    ), G = u.useCallback(
      () => D([N, x]),
      [D, N, x]
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
    const [J, te] = DS((H) => {
      const oe = q().filter((fe) => !fe.disabled), se = oe.find((fe) => fe.ref.current === document.activeElement), ce = jS(oe, H, se);
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
        (b.value !== void 0 && b.value === oe || ce) && j(H);
      },
      [b.value]
    ), z = n === "popper" ? Wl : vS, ee = z === Wl ? {
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
    return /* @__PURE__ */ f.jsx(
      mS,
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
        children: /* @__PURE__ */ f.jsx(Nn, { as: pt, allowPinchZoom: !0, children: /* @__PURE__ */ f.jsx(
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
            children: /* @__PURE__ */ f.jsx(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (H) => H.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ f.jsx(
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
                        setTimeout(() => D(ce)), H.preventDefault();
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
hS.displayName = sF;
var cF = "SelectItemAlignedPosition", vS = u.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = zt(sr, r), i = Yt(sr, r), [s, c] = u.useState(null), [l, d] = u.useState(null), p = ne(t, (E) => d(E)), m = Ra(r), v = u.useRef(!1), y = u.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = i, x = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && g && w) {
      const E = a.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), k = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const fe = k.left - N.left, le = T.left - fe, Re = E.left - le, Y = E.width + Re, ke = Math.max(Y, N.width), $e = window.innerWidth - Qe, Le = Bl(le, [
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
        const fe = N.right - k.right, le = window.innerWidth - T.right - fe, Re = window.innerWidth - E.right - le, Y = E.width + Re, ke = Math.max(Y, N.width), $e = window.innerWidth - Qe, Le = Bl(le, [
          Qe,
          Math.max(Qe, $e - ke)
        ]);
        s.style.minWidth = Y + "px", s.style.right = Le + "px";
      }
      const j = m(), q = window.innerHeight - Qe * 2, F = h.scrollHeight, R = window.getComputedStyle(l), I = parseInt(R.borderTopWidth, 10), D = parseInt(R.paddingTop, 10), G = parseInt(R.borderBottomWidth, 10), B = parseInt(R.paddingBottom, 10), L = I + D + F + B + G, J = Math.min(g.offsetHeight * 5, L), te = window.getComputedStyle(h), A = parseInt(te.paddingTop, 10), V = parseInt(te.paddingBottom, 10), U = E.top + E.height / 2 - Qe, z = q - U, ee = g.offsetHeight / 2, H = g.offsetTop + ee, oe = I + D + H, se = L - oe;
      if (oe <= U) {
        const fe = j.length > 0 && g === j[j.length - 1].ref.current;
        s.style.bottom = "0px";
        const le = l.clientHeight - h.offsetTop - h.offsetHeight, Re = Math.max(
          z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (fe ? V : 0) + le + G
        ), Y = oe + Re;
        s.style.height = Y + "px";
      } else {
        const fe = j.length > 0 && g === j[0].ref.current;
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
  return /* @__PURE__ */ f.jsx(
    uF,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ f.jsx(
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
vS.displayName = cF;
var lF = "SelectPopperPosition", Wl = u.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Qe,
    ...a
  } = e, i = Na(r);
  return /* @__PURE__ */ f.jsx(
    ga,
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
Wl.displayName = lF;
var [uF, Cd] = Gr(sr, {}), Hl = "SelectViewport", gS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = Yt(Hl, r), i = Cd(Hl, r), s = ne(t, a.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ f.jsx(Ta.Slot, { scope: r, children: /* @__PURE__ */ f.jsx(
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
            const d = l.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && p) {
              const v = Math.abs(c.current - d.scrollTop);
              if (v > 0) {
                const y = window.innerHeight - Qe * 2, h = parseFloat(p.style.minHeight), g = parseFloat(p.style.height), w = Math.max(h, g);
                if (w < y) {
                  const b = w + v, x = Math.min(y, b), C = b - x;
                  p.style.height = x + "px", p.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
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
gS.displayName = Hl;
var yS = "SelectGroup", [dF, fF] = Gr(yS), bS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = _e();
    return /* @__PURE__ */ f.jsx(dF, { scope: r, id: o, children: /* @__PURE__ */ f.jsx(W.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
bS.displayName = yS;
var wS = "SelectLabel", xS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = fF(wS, r);
    return /* @__PURE__ */ f.jsx(W.div, { id: o.id, ...n, ref: t });
  }
);
xS.displayName = wS;
var Fo = "SelectItem", [pF, SS] = Gr(Fo), CS = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = zt(Fo, r), c = Yt(Fo, r), l = s.value === n, [d, p] = u.useState(a ?? ""), [m, v] = u.useState(!1), y = ne(
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
    return /* @__PURE__ */ f.jsx(
      pF,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: u.useCallback((b) => {
          p((x) => x || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f.jsx(
          Ta.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ f.jsx(
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
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && b.key === " " || (eF.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
CS.displayName = Fo;
var rn = "SelectItemText", _S = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = zt(rn, r), s = Yt(rn, r), c = SS(rn, r), l = oF(rn, r), [d, p] = u.useState(null), m = ne(
      t,
      (w) => p(w),
      c.onItemTextChange,
      (w) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, w, c.value, c.disabled);
      }
    ), v = d == null ? void 0 : d.textContent, y = u.useMemo(
      () => /* @__PURE__ */ f.jsx("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
    return Ee(() => (h(y), () => g(y)), [h, g, y]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(W.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? xn.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
_S.displayName = rn;
var ES = "SelectItemIndicator", PS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return SS(ES, r).isSelected ? /* @__PURE__ */ f.jsx(W.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
PS.displayName = ES;
var Vl = "SelectScrollUpButton", TS = u.forwardRef((e, t) => {
  const r = Yt(Vl, e.__scopeSelect), n = Cd(Vl, e.__scopeSelect), [o, a] = u.useState(!1), i = ne(t, n.onScrollButtonChange);
  return Ee(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    NS,
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
TS.displayName = Vl;
var Gl = "SelectScrollDownButton", RS = u.forwardRef((e, t) => {
  const r = Yt(Gl, e.__scopeSelect), n = Cd(Gl, e.__scopeSelect), [o, a] = u.useState(!1), i = ne(t, n.onScrollButtonChange);
  return Ee(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < l;
        a(d);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    NS,
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
RS.displayName = Gl;
var NS = u.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = Yt("SelectScrollButton", r), i = u.useRef(null), s = Ra(r), c = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), Ee(() => {
    var d;
    const l = s().find((p) => p.ref.current === document.activeElement);
    (d = l == null ? void 0 : l.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ f.jsx(
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
}), mF = "SelectSeparator", MS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
MS.displayName = mF;
var zl = "SelectArrow", hF = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Na(r), a = zt(zl, r), i = Yt(zl, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ f.jsx(ya, { ...o, ...n, ref: t }) : null;
  }
);
hF.displayName = zl;
function OS(e) {
  return e === "" || e === void 0;
}
var AS = u.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = u.useRef(null), a = ne(t, o), i = Tn(r);
    return u.useEffect(() => {
      const s = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== r && d) {
        const p = new Event("change", { bubbles: !0 });
        d.call(s, r), s.dispatchEvent(p);
      }
    }, [i, r]), /* @__PURE__ */ f.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.jsx("select", { ...n, ref: a, defaultValue: r }) });
  }
);
AS.displayName = "BubbleSelect";
function DS(e) {
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
function jS(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = vF(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function vF(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var gF = iS, kS = cS, yF = uS, bF = dS, wF = fS, IS = pS, xF = gS, SF = bS, $S = xS, LS = CS, CF = _S, _F = PS, FS = TS, qS = RS, BS = MS;
const Yl = gF, Bq = SF, Ul = yF, qo = u.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o } = qn();
  return /* @__PURE__ */ f.jsxs(
    kS,
    {
      ref: n,
      className: M(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...r,
      children: [
        t,
        !(o != null && o.message) && /* @__PURE__ */ f.jsx(bF, { asChild: !0, children: /* @__PURE__ */ f.jsx(Tr, { className: "h-4 w-4 opacity-50" }) })
      ]
    }
  );
});
qo.displayName = kS.displayName;
const WS = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  FS,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx(rE, { className: "h-4 w-4" })
  }
));
WS.displayName = FS.displayName;
const HS = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  qS,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx(Tr, { className: "h-4 w-4" })
  }
));
HS.displayName = qS.displayName;
const Bo = u.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ f.jsx(wF, { children: /* @__PURE__ */ f.jsxs(
  IS,
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
      /* @__PURE__ */ f.jsx(WS, {}),
      /* @__PURE__ */ f.jsx(
        xF,
        {
          className: M(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ f.jsx(HS, {})
    ]
  }
) }));
Bo.displayName = IS.displayName;
const EF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  $S,
  {
    ref: r,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
EF.displayName = $S.displayName;
const wn = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  LS,
  {
    ref: n,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(_F, { children: /* @__PURE__ */ f.jsx(sn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.jsx(CF, { children: t })
    ]
  }
));
wn.displayName = LS.displayName;
const PF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  BS,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
PF.displayName = BS.displayName;
var TF = "Separator", ov = "horizontal", RF = ["horizontal", "vertical"], VS = u.forwardRef((e, t) => {
  const { decorative: r, orientation: n = ov, ...o } = e, a = NF(n) ? n : ov, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ f.jsx(
    W.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
VS.displayName = TF;
function NF(e) {
  return RF.includes(e);
}
var GS = VS;
const zS = u.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ f.jsx(
    GS,
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
zS.displayName = GS.displayName;
const Wq = $u, Hq = Uy, Vq = fa, MF = Lu, YS = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
YS.displayName = Mn.displayName;
const OF = Rt(
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
), AF = u.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ f.jsxs(MF, { children: [
  /* @__PURE__ */ f.jsx(YS, {}),
  /* @__PURE__ */ f.jsxs(
    On,
    {
      ref: o,
      className: M(OF({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ f.jsxs(fa, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.jsx(Yo, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
AF.displayName = On.displayName;
const DF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
DF.displayName = "SheetHeader";
const jF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
jF.displayName = "SheetFooter";
const kF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  ua,
  {
    ref: r,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
kF.displayName = ua.displayName;
const IF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  da,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
IF.displayName = da.displayName;
function Gq({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: M("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var _d = "Switch", [$F, zq] = Te(_d), [LF, FF] = $F(_d), US = u.forwardRef(
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
    } = e, [m, v] = u.useState(null), y = ne(t, (x) => v(x)), h = u.useRef(!1), g = m ? d || !!m.closest("form") : !0, [w = !1, b] = Pe({
      prop: o,
      defaultProp: a,
      onChange: l
    });
    return /* @__PURE__ */ f.jsxs(LF, { scope: r, checked: w, disabled: s, children: [
      /* @__PURE__ */ f.jsx(
        W.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": ZS(w),
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
      g && /* @__PURE__ */ f.jsx(
        qF,
        {
          control: m,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: w,
          required: i,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
US.displayName = _d;
var KS = "SwitchThumb", XS = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = FF(KS, r);
    return /* @__PURE__ */ f.jsx(
      W.span,
      {
        "data-state": ZS(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
XS.displayName = KS;
var qF = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, a = u.useRef(null), i = Tn(r), s = ia(t);
  return u.useEffect(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && p) {
      const m = new Event("click", { bubbles: n });
      p.call(c, r), c.dispatchEvent(m);
    }
  }, [i, r, n]), /* @__PURE__ */ f.jsx(
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
function ZS(e) {
  return e ? "checked" : "unchecked";
}
var QS = US, BF = XS;
const WF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  QS,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ f.jsx(
      BF,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
WF.displayName = QS.displayName;
const HF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { className: "relative w-full overflow-auto table-container", children: /* @__PURE__ */ f.jsx(
  "table",
  {
    ref: r,
    className: M("w-full caption-bottom text-sm", e),
    style: { borderCollapse: "collapse" },
    ...t
  }
) }));
HF.displayName = "Table";
const VF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("thead", { ref: r, className: M("[&_tr]:border-b", e), ...t }));
VF.displayName = "TableHeader";
const GF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "tbody",
  {
    ref: r,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
GF.displayName = "TableBody";
const zF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
zF.displayName = "TableFooter";
const YF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
YF.displayName = "TableRow";
const UF = u.forwardRef(({ className: e, sticky: t, ...r }, n) => /* @__PURE__ */ f.jsx(
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
UF.displayName = "TableHead";
const KF = u.forwardRef(({ className: e, sticky: t, ...r }, n) => /* @__PURE__ */ f.jsx(
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
KF.displayName = "TableCell";
const XF = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "caption",
  {
    ref: r,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
XF.displayName = "TableCaption";
var Ed = "Tabs", [ZF, Yq] = Te(Ed, [
  Vt
]), JS = Vt(), [QF, Pd] = ZF(Ed), eC = u.forwardRef(
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
    } = e, d = Pt(s), [p, m] = Pe({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ f.jsx(
      QF,
      {
        scope: r,
        baseId: _e(),
        value: p,
        onValueChange: m,
        orientation: i,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ f.jsx(
          W.div,
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
eC.displayName = Ed;
var tC = "TabsList", rC = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = Pd(tC, r), i = JS(r);
    return /* @__PURE__ */ f.jsx(
      Sa,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ f.jsx(
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
rC.displayName = tC;
var nC = "TabsTrigger", oC = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = Pd(nC, r), s = JS(r), c = sC(i.baseId, n), l = cC(i.baseId, n), d = n === i.value;
    return /* @__PURE__ */ f.jsx(
      Ca,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ f.jsx(
          W.button,
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
            onMouseDown: $(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: $(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(n);
            }),
            onFocus: $(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !d && !o && p && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
oC.displayName = nC;
var aC = "TabsContent", iC = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = Pd(aC, r), c = sC(s.baseId, n), l = cC(s.baseId, n), d = n === s.value, p = u.useRef(d);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ f.jsx(Ce, { present: o || d, children: ({ present: m }) => /* @__PURE__ */ f.jsx(
      W.div,
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
iC.displayName = aC;
function sC(e, t) {
  return `${e}-trigger-${t}`;
}
function cC(e, t) {
  return `${e}-content-${t}`;
}
var JF = eC, lC = rC, uC = oC, dC = iC;
const Uq = JF, e2 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  lC,
  {
    ref: r,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
e2.displayName = lC.displayName;
const t2 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  uC,
  {
    ref: r,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
t2.displayName = uC.displayName;
const r2 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  dC,
  {
    ref: r,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
r2.displayName = dC.displayName;
const n2 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
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
n2.displayName = "Textarea";
var Td = "ToastProvider", [Rd, o2, a2] = cr("Toast"), [fC, Kq] = Te("Toast", [a2]), [i2, Ma] = fC(Td), pC = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = u.useState(null), [l, d] = u.useState(0), p = u.useRef(!1), m = u.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Td}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ f.jsx(Rd.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(
    i2,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: l,
      viewport: s,
      onViewportChange: c,
      onToastAdd: u.useCallback(() => d((v) => v + 1), []),
      onToastRemove: u.useCallback(() => d((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
pC.displayName = Td;
var mC = "ToastViewport", s2 = ["F8"], Kl = "toast.viewportPause", Xl = "toast.viewportResume", hC = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = s2,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Ma(mC, r), s = o2(r), c = u.useRef(null), l = u.useRef(null), d = u.useRef(null), p = u.useRef(null), m = ne(t, p, i.onViewportChange), v = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
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
            const S = new CustomEvent(Kl);
            w.dispatchEvent(S), i.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (i.isClosePausedRef.current) {
            const S = new CustomEvent(Xl);
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
          const C = x.ref.current, _ = [C, ...w2(C)];
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
            nl(q.slice(F + 1)) ? b.preventDefault() : T ? (S = l.current) == null || S.focus() : (E = d.current) == null || E.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [s, h]), /* @__PURE__ */ f.jsxs(
      tD,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ f.jsx(
            Zl,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                nl(g);
              }
            }
          ),
          /* @__PURE__ */ f.jsx(Rd.Slot, { scope: r, children: /* @__PURE__ */ f.jsx(W.ol, { tabIndex: -1, ...a, ref: m }) }),
          y && /* @__PURE__ */ f.jsx(
            Zl,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                nl(g);
              }
            }
          )
        ]
      }
    );
  }
);
hC.displayName = mC;
var vC = "ToastFocusProxy", Zl = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = Ma(vC, r);
    return /* @__PURE__ */ f.jsx(
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
Zl.displayName = vC;
var Oa = "Toast", c2 = "toast.swipeStart", l2 = "toast.swipeMove", u2 = "toast.swipeCancel", d2 = "toast.swipeEnd", gC = u.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s = !0, c] = Pe({
      prop: n,
      defaultProp: o,
      onChange: a
    });
    return /* @__PURE__ */ f.jsx(Ce, { present: r || s, children: /* @__PURE__ */ f.jsx(
      m2,
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
          const { x: d, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: $(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: $(e.onSwipeEnd, (l) => {
          const { x: d, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), c(!1);
        })
      }
    ) });
  }
);
gC.displayName = Oa;
var [f2, p2] = fC(Oa, {
  onClose() {
  }
}), m2 = u.forwardRef(
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
    } = e, h = Ma(Oa, r), [g, w] = u.useState(null), b = ne(t, (R) => w(R)), x = u.useRef(null), C = u.useRef(null), _ = o || h.duration, S = u.useRef(0), E = u.useRef(_), N = u.useRef(0), { onToastAdd: T, onToastRemove: k } = h, j = me(() => {
      var I;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((I = h.viewport) == null || I.focus()), i();
    }), q = u.useCallback(
      (R) => {
        !R || R === 1 / 0 || (window.clearTimeout(N.current), S.current = (/* @__PURE__ */ new Date()).getTime(), N.current = window.setTimeout(j, R));
      },
      [j]
    );
    u.useEffect(() => {
      const R = h.viewport;
      if (R) {
        const I = () => {
          q(E.current), l == null || l();
        }, D = () => {
          const G = (/* @__PURE__ */ new Date()).getTime() - S.current;
          E.current = E.current - G, window.clearTimeout(N.current), c == null || c();
        };
        return R.addEventListener(Kl, D), R.addEventListener(Xl, I), () => {
          R.removeEventListener(Kl, D), R.removeEventListener(Xl, I);
        };
      }
    }, [h.viewport, _, c, l, q]), u.useEffect(() => {
      a && !h.isClosePausedRef.current && q(_);
    }, [a, _, h.isClosePausedRef, q]), u.useEffect(() => (T(), () => k()), [T, k]);
    const F = u.useMemo(() => g ? _C(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      F && /* @__PURE__ */ f.jsx(
        h2,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: F
        }
      ),
      /* @__PURE__ */ f.jsx(f2, { scope: r, onClose: j, children: xn.createPortal(
        /* @__PURE__ */ f.jsx(Rd.ItemSlot, { scope: r, children: /* @__PURE__ */ f.jsx(
          eD,
          {
            asChild: !0,
            onEscapeKeyDown: $(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || j(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ f.jsx(
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
                  R.key === "Escape" && (s == null || s(R.nativeEvent), R.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, j()));
                }),
                onPointerDown: $(e.onPointerDown, (R) => {
                  R.button === 0 && (x.current = { x: R.clientX, y: R.clientY });
                }),
                onPointerMove: $(e.onPointerMove, (R) => {
                  if (!x.current) return;
                  const I = R.clientX - x.current.x, D = R.clientY - x.current.y, G = !!C.current, B = ["left", "right"].includes(h.swipeDirection), L = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, J = B ? L(0, I) : 0, te = B ? 0 : L(0, D), A = R.pointerType === "touch" ? 10 : 2, V = { x: J, y: te }, U = { originalEvent: R, delta: V };
                  G ? (C.current = V, so(l2, p, U, {
                    discrete: !1
                  })) : av(V, h.swipeDirection, A) ? (C.current = V, so(c2, d, U, {
                    discrete: !1
                  }), R.target.setPointerCapture(R.pointerId)) : (Math.abs(I) > A || Math.abs(D) > A) && (x.current = null);
                }),
                onPointerUp: $(e.onPointerUp, (R) => {
                  const I = C.current, D = R.target;
                  if (D.hasPointerCapture(R.pointerId) && D.releasePointerCapture(R.pointerId), C.current = null, x.current = null, I) {
                    const G = R.currentTarget, B = { originalEvent: R, delta: I };
                    av(I, h.swipeDirection, h.swipeThreshold) ? so(d2, v, B, {
                      discrete: !0
                    }) : so(
                      u2,
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
), h2 = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Ma(Oa, t), [a, i] = u.useState(!1), [s, c] = u.useState(!1);
  return y2(() => i(!0)), u.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ f.jsx(fr, { asChild: !0, children: /* @__PURE__ */ f.jsx(Bn, { ...n, children: a && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, v2 = "ToastTitle", yC = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { ...n, ref: t });
  }
);
yC.displayName = v2;
var g2 = "ToastDescription", bC = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ f.jsx(W.div, { ...n, ref: t });
  }
);
bC.displayName = g2;
var wC = "ToastAction", xC = u.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ f.jsx(CC, { altText: r, asChild: !0, children: /* @__PURE__ */ f.jsx(Nd, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${wC}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
xC.displayName = wC;
var SC = "ToastClose", Nd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = p2(SC, r);
    return /* @__PURE__ */ f.jsx(CC, { asChild: !0, children: /* @__PURE__ */ f.jsx(
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
Nd.displayName = SC;
var CC = u.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ f.jsx(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function _C(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), b2(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(..._C(n));
    }
  }), t;
}
function so(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? an(o, a) : o.dispatchEvent(a);
}
var av = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function y2(e = () => {
}) {
  const t = me(e);
  Ee(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function b2(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function w2(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function nl(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var x2 = pC, EC = hC, PC = gC, TC = yC, RC = bC, NC = xC, MC = Nd;
const S2 = x2, C2 = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, OC = u.forwardRef(({ className: e, position: t = "bottom-right", ...r }, n) => /* @__PURE__ */ f.jsx(
  EC,
  {
    ref: n,
    className: M(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${C2[t]}`,
      e
    ),
    ...r
  }
));
OC.displayName = EC.displayName;
const _2 = Rt(
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
), AC = u.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ f.jsx(
  PC,
  {
    ref: n,
    className: M(_2({ variant: t }), e),
    ...r
  }
));
AC.displayName = PC.displayName;
const E2 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  NC,
  {
    ref: r,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
E2.displayName = NC.displayName;
const DC = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  MC,
  {
    ref: r,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ f.jsx(Yo, { className: "h-4 w-4" })
  }
));
DC.displayName = MC.displayName;
const jC = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  TC,
  {
    ref: r,
    className: M("text-sm font-semibold", e),
    ...t
  }
));
jC.displayName = TC.displayName;
const kC = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  RC,
  {
    ref: r,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
kC.displayName = RC.displayName;
const P2 = 1, T2 = 1e4;
let ol = 0;
function R2() {
  return ol = (ol + 1) % Number.MAX_SAFE_INTEGER, ol.toString();
}
const al = /* @__PURE__ */ new Map(), iv = (e) => {
  if (al.has(e))
    return;
  const t = setTimeout(() => {
    al.delete(e), on({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, T2);
  al.set(e, t);
}, N2 = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, P2)
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
      return r ? iv(r) : e.toasts.forEach((n) => {
        iv(n.id);
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
}, go = [];
let yo = { toasts: [] };
function on(e) {
  yo = N2(yo, e), go.forEach((t) => {
    t(yo);
  });
}
function M2({ ...e }) {
  const t = R2(), r = (o) => on({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => on({ type: "DISMISS_TOAST", toastId: t });
  return on({
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
function O2() {
  const [e, t] = u.useState(yo);
  return u.useEffect(() => (go.push(t), () => {
    const r = go.indexOf(t);
    r > -1 && go.splice(r, 1);
  }), [e]), {
    ...e,
    toast: M2,
    dismiss: (r) => on({ type: "DISMISS_TOAST", toastId: r })
  };
}
function Xq() {
  const { toasts: e } = O2();
  return /* @__PURE__ */ f.jsxs(S2, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ f.jsxs(AC, { ...a, children: [
        /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ f.jsx(jC, { children: r }),
          n && /* @__PURE__ */ f.jsx(kC, { children: n })
        ] }),
        o,
        /* @__PURE__ */ f.jsx(DC, {})
      ] }, t);
    }),
    /* @__PURE__ */ f.jsx(OC, {})
  ] });
}
var A2 = "Toggle", Md = u.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n = !1, onPressedChange: o, ...a } = e, [i = !1, s] = Pe({
    prop: r,
    onChange: o,
    defaultProp: n
  });
  return /* @__PURE__ */ f.jsx(
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
Md.displayName = A2;
var IC = Md;
const $C = Rt(
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
), D2 = u.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ f.jsx(
  IC,
  {
    ref: o,
    className: M($C({ variant: t, size: r, className: e })),
    ...n
  }
));
D2.displayName = IC.displayName;
var zr = "ToggleGroup", [LC, Zq] = Te(zr, [
  Vt
]), FC = Vt(), Od = O.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single") {
    const o = n;
    return /* @__PURE__ */ f.jsx(j2, { ...o, ref: t });
  }
  if (r === "multiple") {
    const o = n;
    return /* @__PURE__ */ f.jsx(k2, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${zr}\``);
});
Od.displayName = zr;
var [qC, BC] = LC(zr), j2 = O.forwardRef((e, t) => {
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
  return /* @__PURE__ */ f.jsx(
    qC,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: s,
      onItemDeactivate: O.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ f.jsx(WC, { ...a, ref: t })
    }
  );
}), k2 = O.forwardRef((e, t) => {
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
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = O.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ f.jsx(
    qC,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ f.jsx(WC, { ...a, ref: t })
    }
  );
});
Od.displayName = zr;
var [I2, $2] = LC(zr), WC = O.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = FC(r), d = Pt(i), p = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ f.jsx(I2, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ f.jsx(
      Sa,
      {
        asChild: !0,
        ...l,
        orientation: a,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ f.jsx(W.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ f.jsx(W.div, { ...p, ref: t }) });
  }
), Wo = "ToggleGroupItem", HC = O.forwardRef(
  (e, t) => {
    const r = BC(Wo, e.__scopeToggleGroup), n = $2(Wo, e.__scopeToggleGroup), o = FC(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = O.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ f.jsx(
      Ca,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ f.jsx(sv, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ f.jsx(sv, { ...s, ref: t });
  }
);
HC.displayName = Wo;
var sv = O.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = BC(Wo, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ f.jsx(
      Md,
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
), VC = Od, GC = HC;
const zC = u.createContext({
  size: "default",
  variant: "default"
}), L2 = u.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ f.jsx(
  VC,
  {
    ref: a,
    className: M("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ f.jsx(zC.Provider, { value: { variant: t, size: r }, children: n })
  }
));
L2.displayName = VC.displayName;
const F2 = u.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = u.useContext(zC);
  return /* @__PURE__ */ f.jsx(
    GC,
    {
      ref: a,
      className: M(
        $C({
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
F2.displayName = GC.displayName;
var [Aa, Qq] = Te("Tooltip", [
  Wt
]), Da = Wt(), YC = "TooltipProvider", q2 = 700, Ql = "tooltip.open", [B2, Ad] = Aa(YC), UC = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = q2,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, [i, s] = u.useState(!0), c = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ f.jsx(
    B2,
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
      onPointerInTransitChange: u.useCallback((d) => {
        c.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
UC.displayName = YC;
var ja = "Tooltip", [W2, Hn] = Aa(ja), KC = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o = !1,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = Ad(ja, e.__scopeTooltip), l = Da(t), [d, p] = u.useState(null), m = _e(), v = u.useRef(0), y = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = u.useRef(!1), [w = !1, b] = Pe({
    prop: n,
    defaultProp: o,
    onChange: (E) => {
      E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ql))) : c.onClose(), a == null || a(E);
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
  }, []), /* @__PURE__ */ f.jsx(jn, { ...l, children: /* @__PURE__ */ f.jsx(
    W2,
    {
      scope: t,
      contentId: m,
      open: w,
      stateAttribute: x,
      trigger: d,
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
KC.displayName = ja;
var Jl = "TooltipTrigger", XC = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Hn(Jl, r), a = Ad(Jl, r), i = Da(r), s = u.useRef(null), c = ne(t, s, o.onTriggerChange), l = u.useRef(!1), d = u.useRef(!1), p = u.useCallback(() => l.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ f.jsx(kn, { asChild: !0, ...i, children: /* @__PURE__ */ f.jsx(
      W.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: $(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: $(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
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
XC.displayName = Jl;
var Dd = "TooltipPortal", [H2, V2] = Aa(Dd, {
  forceMount: void 0
}), ZC = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = Hn(Dd, t);
  return /* @__PURE__ */ f.jsx(H2, { scope: t, forceMount: r, children: /* @__PURE__ */ f.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ f.jsx(fr, { asChild: !0, container: o, children: n }) }) });
};
ZC.displayName = Dd;
var $r = "TooltipContent", QC = u.forwardRef(
  (e, t) => {
    const r = V2($r, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = Hn($r, e.__scopeTooltip);
    return /* @__PURE__ */ f.jsx(Ce, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ f.jsx(JC, { side: o, ...a, ref: t }) : /* @__PURE__ */ f.jsx(G2, { side: o, ...a, ref: t }) });
  }
), G2 = u.forwardRef((e, t) => {
  const r = Hn($r, e.__scopeTooltip), n = Ad($r, e.__scopeTooltip), o = u.useRef(null), a = ne(t, o), [i, s] = u.useState(null), { trigger: c, onClose: l } = r, d = o.current, { onPointerInTransitChange: p } = n, m = u.useCallback(() => {
    s(null), p(!1);
  }, [p]), v = u.useCallback(
    (y, h) => {
      const g = y.currentTarget, w = { x: y.clientX, y: y.clientY }, b = K2(w, g.getBoundingClientRect()), x = X2(w, b), C = Z2(h.getBoundingClientRect()), _ = J2([...x, ...C]);
      s(_), p(!0);
    },
    [p]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (c && d) {
      const y = (g) => v(g, d), h = (g) => v(g, c);
      return c.addEventListener("pointerleave", y), d.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", y), d.removeEventListener("pointerleave", h);
      };
    }
  }, [c, d, v, m]), u.useEffect(() => {
    if (i) {
      const y = (h) => {
        const g = h.target, w = { x: h.clientX, y: h.clientY }, b = (c == null ? void 0 : c.contains(g)) || (d == null ? void 0 : d.contains(g)), x = !Q2(w, i);
        b ? m() : x && (m(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, d, i, l, m]), /* @__PURE__ */ f.jsx(JC, { ...e, ref: a });
}), [z2, Y2] = Aa(ja, { isInside: !1 }), JC = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = Hn($r, r), l = Da(r), { onClose: d } = c;
    return u.useEffect(() => (document.addEventListener(Ql, d), () => document.removeEventListener(Ql, d)), [d]), u.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(c.trigger) && d();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, d]), /* @__PURE__ */ f.jsx(
      Bt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ f.jsxs(
          ga,
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
              /* @__PURE__ */ f.jsx(uv, { children: n }),
              /* @__PURE__ */ f.jsx(z2, { scope: r, isInside: !0, children: /* @__PURE__ */ f.jsx(ex, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
QC.displayName = $r;
var e_ = "TooltipArrow", U2 = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Da(r);
    return Y2(
      e_,
      r
    ).isInside ? null : /* @__PURE__ */ f.jsx(ya, { ...o, ...n, ref: t });
  }
);
U2.displayName = e_;
function K2(e, t) {
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
function X2(e, t, r = 5) {
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
function Z2(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function Q2(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, l = t[i].x, d = t[i].y;
    c > n != d > n && r < (l - s) * (n - c) / (d - c) + s && (o = !o);
  }
  return o;
}
function J2(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), eq(t);
}
function eq(e) {
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
var tq = UC, rq = KC, nq = XC, oq = ZC, t_ = QC;
const Jq = tq, eB = rq, tB = nq, aq = u.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ f.jsx(oq, { children: /* @__PURE__ */ f.jsx(
  t_,
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
aq.displayName = t_.displayName;
const rB = [
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
export {
  dq as Accordion,
  iP as AccordionContent,
  oP as AccordionItem,
  aP as AccordionTrigger,
  mL as AiqiaSpinner,
  cP as Alert,
  uP as AlertDescription,
  lP as AlertTitle,
  mP as Avatar,
  vP as AvatarFallback,
  hP as AvatarImage,
  Vd as Badge,
  yP as Breadcrumb,
  _P as BreadcrumbEllipsis,
  wP as BreadcrumbItem,
  xP as BreadcrumbLink,
  bP as BreadcrumbList,
  SP as BreadcrumbPage,
  CP as BreadcrumbSeparator,
  Uo as Button,
  _g as Calendar,
  QR as Card,
  rN as CardContent,
  tN as CardDescription,
  nN as CardFooter,
  JR as CardHeader,
  eN as CardTitle,
  RA as ChartContainer,
  mq as ChartLegend,
  OA as ChartLegendContent,
  NA as ChartStyle,
  pq as ChartTooltip,
  MA as ChartTooltipContent,
  $A as Checkbox,
  Bu as Command,
  yq as CommandDialog,
  nb as CommandEmpty,
  ob as CommandGroup,
  tb as CommandInput,
  po as CommandItem,
  rb as CommandList,
  ab as CommandSeparator,
  Sj as CommandShortcut,
  wq as DatePicker,
  eI as DateTimePicker,
  tI as Dialog,
  Sq as DialogClose,
  Vb as DialogContent,
  iI as DialogDescription,
  oI as DialogFooter,
  nI as DialogHeader,
  Hb as DialogOverlay,
  rI as DialogPortal,
  aI as DialogTitle,
  xq as DialogTrigger,
  _q as DropdownMenu,
  M$ as DropdownMenuCheckboxItem,
  R$ as DropdownMenuContent,
  Pq as DropdownMenuGroup,
  N$ as DropdownMenuItem,
  A$ as DropdownMenuLabel,
  Tq as DropdownMenuPortal,
  Nq as DropdownMenuRadioGroup,
  O$ as DropdownMenuRadioItem,
  D$ as DropdownMenuSeparator,
  j$ as DropdownMenuShortcut,
  Rq as DropdownMenuSub,
  T$ as DropdownMenuSubContent,
  P$ as DropdownMenuSubTrigger,
  Eq as DropdownMenuTrigger,
  Mq as Form,
  F$ as FormControl,
  q$ as FormDescription,
  Oq as FormField,
  $$ as FormItem,
  L$ as FormLabel,
  B$ as FormMessage,
  Jw as Input,
  Xw as Label,
  pL as ListItem,
  jq as Loader,
  Iq as MaskedInput,
  PL as MultiSelect,
  iL as NavigationMenu,
  uL as NavigationMenuContent,
  fL as NavigationMenuIndicator,
  Dq as NavigationMenuItem,
  dL as NavigationMenuLink,
  sL as NavigationMenuList,
  lL as NavigationMenuTrigger,
  Px as NavigationMenuViewport,
  Rx as Pagination,
  $q as PaginationComponent,
  Nx as PaginationContent,
  Ax as PaginationEllipsis,
  tn as PaginationItem,
  tr as PaginationLink,
  Ox as PaginationNext,
  Mx as PaginationPrevious,
  Ju as Popover,
  ba as PopoverContent,
  ed as PopoverTrigger,
  $L as RadioGroup,
  LL as RadioGroupItem,
  QL as ScrollArea,
  aS as ScrollBar,
  Yl as Select,
  Bo as SelectContent,
  Bq as SelectGroup,
  wn as SelectItem,
  EF as SelectLabel,
  HS as SelectScrollDownButton,
  WS as SelectScrollUpButton,
  PF as SelectSeparator,
  qo as SelectTrigger,
  Ul as SelectValue,
  zS as Separator,
  Wq as Sheet,
  Vq as SheetClose,
  AF as SheetContent,
  IF as SheetDescription,
  jF as SheetFooter,
  DF as SheetHeader,
  YS as SheetOverlay,
  MF as SheetPortal,
  kF as SheetTitle,
  Hq as SheetTrigger,
  Gq as Skeleton,
  WF as Switch,
  HF as Table,
  GF as TableBody,
  XF as TableCaption,
  KF as TableCell,
  zF as TableFooter,
  UF as TableHead,
  VF as TableHeader,
  YF as TableRow,
  Uq as Tabs,
  r2 as TabsContent,
  e2 as TabsList,
  t2 as TabsTrigger,
  n2 as Textarea,
  Wb as TimePicker,
  ho as TimePickerInput,
  AC as Toast,
  E2 as ToastAction,
  DC as ToastClose,
  kC as ToastDescription,
  S2 as ToastProvider,
  jC as ToastTitle,
  OC as ToastViewport,
  Xq as Toaster,
  D2 as Toggle,
  L2 as ToggleGroup,
  F2 as ToggleGroupItem,
  eB as Tooltip,
  aq as TooltipContent,
  Jq as TooltipProvider,
  tB as TooltipTrigger,
  gP as badgeVariants,
  rB as brazillianStates,
  xr as buttonVariants,
  M as cn,
  kq as mask,
  cL as navigationMenuTriggerStyle,
  N2 as reducer,
  M2 as toast,
  $C as toggleVariants,
  qn as useFormField,
  O2 as useToast
};
