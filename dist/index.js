import * as f from "react";
import Q, { forwardRef as Go, createElement as Cl, useState as nt, createContext as Zt, useContext as Jt, useEffect as We, useLayoutEffect as Qv, useRef as br, useCallback as Zv, isValidElement as M0, PureComponent as Uo, useImperativeHandle as wu, useMemo as A0, cloneElement as O0 } from "react";
import * as bn from "react-dom";
import Jv from "react-dom";
import { Link as j0 } from "react-router-dom";
import { useFormContext as eg, FormProvider as D0, Controller as k0 } from "react-hook-form";
var zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function st(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gn = { exports: {} }, Wr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function I0() {
  if (gf) return Wr;
  gf = 1;
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
  return Wr.Fragment = t, Wr.jsx = r, Wr.jsxs = r, Wr;
}
var Hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function L0() {
  return yf || (yf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(O) {
      if (O == null) return null;
      if (typeof O == "function")
        return O.$$typeof === I ? null : O.displayName || O.name || null;
      if (typeof O == "string") return O;
      switch (O) {
        case h:
          return "Fragment";
        case b:
          return "Profiler";
        case v:
          return "StrictMode";
        case S:
          return "Suspense";
        case C:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof O == "object")
        switch (typeof O.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), O.$$typeof) {
          case y:
            return "Portal";
          case w:
            return (O.displayName || "Context") + ".Provider";
          case x:
            return (O._context.displayName || "Context") + ".Consumer";
          case _:
            var z = O.render;
            return O = O.displayName, O || (O = z.displayName || z.name || "", O = O !== "" ? "ForwardRef(" + O + ")" : "ForwardRef"), O;
          case P:
            return z = O.displayName || null, z !== null ? z : e(O.type) || "Memo";
          case E:
            z = O._payload, O = O._init;
            try {
              return e(O(z));
            } catch {
            }
        }
      return null;
    }
    function t(O) {
      return "" + O;
    }
    function r(O) {
      try {
        t(O);
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var A = z.error, B = typeof Symbol == "function" && Symbol.toStringTag && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return A.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(O);
      }
    }
    function n(O) {
      if (O === h) return "<>";
      if (typeof O == "object" && O !== null && O.$$typeof === E)
        return "<...>";
      try {
        var z = e(O);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var O = j.A;
      return O === null ? null : O.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(O) {
      if (V.call(O, "key")) {
        var z = Object.getOwnPropertyDescriptor(O, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return O.key !== void 0;
    }
    function s(O, z) {
      function A() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: A,
        configurable: !0
      });
    }
    function c() {
      var O = e(this.type);
      return F[O] || (F[O] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), O = this.props.ref, O !== void 0 ? O : null;
    }
    function l(O, z, A, B, K, G, ee, k) {
      return A = G.ref, O = {
        $$typeof: g,
        type: O,
        key: z,
        props: G,
        _owner: K
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(O, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(O, "ref", { enumerable: !1, value: null }), O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(O, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(O, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(O, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    }
    function d(O, z, A, B, K, G, ee, k) {
      var X = z.children;
      if (X !== void 0)
        if (B)
          if (q(X)) {
            for (B = 0; B < X.length; B++)
              p(X[B]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(X);
      if (V.call(z, "key")) {
        X = e(O);
        var re = Object.keys(z).filter(function(te) {
          return te !== "key";
        });
        B = 0 < re.length ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}", W[X + B] || (re = 0 < re.length ? "{" + re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          X,
          re,
          X
        ), W[X + B] = !0);
      }
      if (X = null, A !== void 0 && (r(A), X = "" + A), i(z) && (r(z.key), X = "" + z.key), "key" in z) {
        A = {};
        for (var oe in z)
          oe !== "key" && (A[oe] = z[oe]);
      } else A = z;
      return X && s(
        A,
        typeof O == "function" ? O.displayName || O.name || "Unknown" : O
      ), l(
        O,
        X,
        G,
        K,
        o(),
        A,
        ee,
        k
      );
    }
    function p(O) {
      typeof O == "object" && O !== null && O.$$typeof === g && O._store && (O._store.validated = 1);
    }
    var m = Q, g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), w = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), j = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, q = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(O) {
        return O();
      }
    };
    var $, F = {}, D = m["react-stack-bottom-frame"].bind(
      m,
      a
    )(), R = N(n(a)), W = {};
    Hr.Fragment = h, Hr.jsx = function(O, z, A, B, K) {
      var G = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        O,
        z,
        A,
        !1,
        B,
        K,
        G ? Error("react-stack-top-frame") : D,
        G ? N(n(O)) : R
      );
    }, Hr.jsxs = function(O, z, A, B, K) {
      var G = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        O,
        z,
        A,
        !0,
        B,
        K,
        G ? Error("react-stack-top-frame") : D,
        G ? N(n(O)) : R
      );
    };
  }()), Hr;
}
var bf;
function $0() {
  return bf || (bf = 1, process.env.NODE_ENV === "production" ? Gn.exports = I0() : Gn.exports = L0()), Gn.exports;
}
var u = $0();
function F0(e, t) {
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
function be(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = f.createContext(i), c = r.length;
    r = [...r, i];
    const l = (p) => {
      const { scope: m, children: g, ...y } = p, h = m?.[e]?.[c] || s, v = f.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ u.jsx(h.Provider, { value: v, children: g });
    };
    l.displayName = a + "Provider";
    function d(p, m) {
      const g = m?.[e]?.[c] || s, y = f.useContext(g);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [l, d];
  }
  const o = () => {
    const a = r.map((i) => f.createContext(i));
    return function(s) {
      const c = s?.[e] || a;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [n, q0(o, ...t)];
}
function q0(...e) {
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
function xf(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ot(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = xf(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : xf(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return f.useCallback(ot(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  const t = /* @__PURE__ */ B0(e), r = f.forwardRef((n, o) => {
    const { children: a, ...i } = n, s = f.Children.toArray(a), c = s.find(W0);
    if (c) {
      const l = c.props.children, d = s.map((p) => p === c ? f.Children.count(l) > 1 ? f.Children.only(null) : f.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ u.jsx(t, { ...i, ref: o, children: f.isValidElement(l) ? f.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var tg = /* @__PURE__ */ Rt("Slot");
// @__NO_SIDE_EFFECTS__
function B0(e) {
  const t = f.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (f.isValidElement(o)) {
      const i = V0(o), s = H0(a, o.props);
      return o.type !== f.Fragment && (s.ref = n ? ot(n, i) : i), f.cloneElement(o, s);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var rg = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ng(e) {
  const t = ({ children: r }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = rg, t;
}
function W0(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rg;
}
function H0(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function V0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function er(e) {
  const t = e + "CollectionProvider", [r, n] = be(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: v, children: b } = h, x = Q.useRef(null), w = Q.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: v, itemMap: w, collectionRef: x, children: b });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ Rt(s), l = Q.forwardRef(
    (h, v) => {
      const { scope: b, children: x } = h, w = a(s, b), _ = ne(v, w.collectionRef);
      return /* @__PURE__ */ u.jsx(c, { ref: _, children: x });
    }
  );
  l.displayName = s;
  const d = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Rt(d), g = Q.forwardRef(
    (h, v) => {
      const { scope: b, children: x, ...w } = h, _ = Q.useRef(null), S = ne(v, _), C = a(d, b);
      return Q.useEffect(() => (C.itemMap.set(_, { ref: _, ...w }), () => void C.itemMap.delete(_))), /* @__PURE__ */ u.jsx(m, { [p]: "", ref: S, children: x });
    }
  );
  g.displayName = d;
  function y(h) {
    const v = a(e + "CollectionConsumer", h);
    return Q.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        (C, P) => w.indexOf(C.ref.current) - w.indexOf(P.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: g },
    y,
    n
  ];
}
function L(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var me = globalThis?.document ? f.useLayoutEffect : () => {
}, z0 = f[" useInsertionEffect ".trim().toString()] || me;
function xe({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = G0({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, c = s ? e : o;
  {
    const d = f.useRef(e !== void 0);
    f.useEffect(() => {
      const p = d.current;
      p !== s && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = s;
    }, [s, n]);
  }
  const l = f.useCallback(
    (d) => {
      if (s) {
        const p = U0(d) ? d(e) : d;
        p !== e && i.current?.(p);
      } else
        a(d);
    },
    [s, e, a, i]
  );
  return [c, l];
}
function G0({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = f.useState(e), o = f.useRef(r), a = f.useRef(t);
  return z0(() => {
    a.current = t;
  }, [t]), f.useEffect(() => {
    o.current !== r && (a.current?.(r), o.current = r);
  }, [r, o]), [r, n, a];
}
function U0(e) {
  return typeof e == "function";
}
var K0 = [
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
  "select",
  "span",
  "svg",
  "ul"
], H = K0.reduce((e, t) => {
  const r = /* @__PURE__ */ Rt(`Primitive.${t}`), n = f.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function tn(e, t) {
  e && bn.flushSync(() => e.dispatchEvent(t));
}
function Y0(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var he = (e) => {
  const { present: t, children: r } = e, n = X0(t), o = typeof r == "function" ? r({ present: n.isPresent }) : f.Children.only(r), a = ne(n.ref, Q0(o));
  return typeof r == "function" || n.isPresent ? f.cloneElement(o, { ref: a }) : null;
};
he.displayName = "Presence";
function X0(e) {
  const [t, r] = f.useState(), n = f.useRef(null), o = f.useRef(e), a = f.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = Y0(i, {
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
    const l = Un(n.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), me(() => {
    const l = n.current, d = o.current;
    if (d !== e) {
      const m = a.current, g = Un(l);
      e ? c("MOUNT") : g === "none" || l?.display === "none" ? c("UNMOUNT") : c(d && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), me(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, p = (g) => {
        const h = Un(n.current).includes(g.animationName);
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === t && (a.current = Un(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: f.useCallback((l) => {
      n.current = l ? getComputedStyle(l) : null, r(l);
    }, [])
  };
}
function Un(e) {
  return e?.animationName || "none";
}
function Q0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Z0 = f[" useId ".trim().toString()] || (() => {
}), J0 = 0;
function ve(e) {
  const [t, r] = f.useState(Z0());
  return me(() => {
    r((n) => n ?? String(J0++));
  }, [e]), t ? `radix-${t}` : "";
}
var Ko = "Collapsible", [eP, og] = be(Ko), [tP, _u] = eP(Ko), ag = f.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [c, l] = xe({
      prop: n,
      defaultProp: o ?? !1,
      onChange: i,
      caller: Ko
    });
    return /* @__PURE__ */ u.jsx(
      tP,
      {
        scope: r,
        disabled: a,
        contentId: ve(),
        open: c,
        onOpenToggle: f.useCallback(() => l((d) => !d), [l]),
        children: /* @__PURE__ */ u.jsx(
          H.div,
          {
            "data-state": Cu(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
ag.displayName = Ko;
var ig = "CollapsibleTrigger", sg = f.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = _u(ig, r);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Cu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
  }
);
sg.displayName = ig;
var Su = "CollapsibleContent", cg = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = _u(Su, e.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(he, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ u.jsx(rP, { ...n, ref: t, present: a }) });
  }
);
cg.displayName = Su;
var rP = f.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = _u(Su, r), [s, c] = f.useState(n), l = f.useRef(null), d = ne(t, l), p = f.useRef(0), m = p.current, g = f.useRef(0), y = g.current, h = i.open || s, v = f.useRef(h), b = f.useRef(void 0);
  return f.useEffect(() => {
    const x = requestAnimationFrame(() => v.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), me(() => {
    const x = l.current;
    if (x) {
      b.current = b.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const w = x.getBoundingClientRect();
      p.current = w.height, g.current = w.width, v.current || (x.style.transitionDuration = b.current.transitionDuration, x.style.animationName = b.current.animationName), c(n);
    }
  }, [i.open, n]), /* @__PURE__ */ u.jsx(
    H.div,
    {
      "data-state": Cu(i.open),
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
function Cu(e) {
  return e ? "open" : "closed";
}
var nP = ag, oP = sg, aP = cg, iP = f.createContext(void 0);
function xt(e) {
  const t = f.useContext(iP);
  return e || t || "ltr";
}
var Ue = "Accordion", sP = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Pu, cP, lP] = er(Ue), [Yo, QW] = be(Ue, [
  lP,
  og
]), Eu = og(), lg = Q.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ u.jsx(Pu.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ u.jsx(pP, { ...a, ref: t }) : /* @__PURE__ */ u.jsx(fP, { ...o, ref: t }) });
  }
);
lg.displayName = Ue;
var [ug, uP] = Yo(Ue), [dg, dP] = Yo(
  Ue,
  { collapsible: !1 }
), fP = Q.forwardRef(
  (e, t) => {
    const {
      value: r,
      defaultValue: n,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, c] = xe({
      prop: r,
      defaultProp: n ?? "",
      onChange: o,
      caller: Ue
    });
    return /* @__PURE__ */ u.jsx(
      ug,
      {
        scope: e.__scopeAccordion,
        value: Q.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: c,
        onItemClose: Q.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ u.jsx(dg, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ u.jsx(fg, { ...i, ref: t }) })
      }
    );
  }
), pP = Q.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = xe({
    prop: r,
    defaultProp: n ?? [],
    onChange: o,
    caller: Ue
  }), c = Q.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = Q.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ u.jsx(
    ug,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ u.jsx(dg, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(fg, { ...a, ref: t }) })
    }
  );
}), [mP, Xo] = Yo(Ue), fg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = Q.useRef(null), c = ne(s, t), l = cP(r), p = xt(o) === "ltr", m = L(e.onKeyDown, (g) => {
      if (!sP.includes(g.key)) return;
      const y = g.target, h = l().filter((E) => !E.ref.current?.disabled), v = h.findIndex((E) => E.ref.current === y), b = h.length;
      if (v === -1) return;
      g.preventDefault();
      let x = v;
      const w = 0, _ = b - 1, S = () => {
        x = v + 1, x > _ && (x = w);
      }, C = () => {
        x = v - 1, x < w && (x = _);
      };
      switch (g.key) {
        case "Home":
          x = w;
          break;
        case "End":
          x = _;
          break;
        case "ArrowRight":
          a === "horizontal" && (p ? S() : C());
          break;
        case "ArrowDown":
          a === "vertical" && S();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? C() : S());
          break;
        case "ArrowUp":
          a === "vertical" && C();
          break;
      }
      const P = x % b;
      h[P].ref.current?.focus();
    });
    return /* @__PURE__ */ u.jsx(
      mP,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ u.jsx(Pu.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
          H.div,
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
), bo = "AccordionItem", [hP, Ru] = Yo(bo), pg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = Xo(bo, r), i = uP(bo, r), s = Eu(r), c = ve(), l = n && i.value.includes(n) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ u.jsx(
      hP,
      {
        scope: r,
        open: l,
        disabled: d,
        triggerId: c,
        children: /* @__PURE__ */ u.jsx(
          nP,
          {
            "data-orientation": a.orientation,
            "data-state": bg(l),
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
pg.displayName = bo;
var mg = "AccordionHeader", hg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Xo(Ue, r), a = Ru(mg, r);
    return /* @__PURE__ */ u.jsx(
      H.h3,
      {
        "data-orientation": o.orientation,
        "data-state": bg(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
hg.displayName = mg;
var Pl = "AccordionTrigger", vg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Xo(Ue, r), a = Ru(Pl, r), i = dP(Pl, r), s = Eu(r);
    return /* @__PURE__ */ u.jsx(Pu.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      oP,
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
vg.displayName = Pl;
var gg = "AccordionContent", yg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Xo(Ue, r), a = Ru(gg, r), i = Eu(r);
    return /* @__PURE__ */ u.jsx(
      aP,
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
yg.displayName = gg;
function bg(e) {
  return e ? "open" : "closed";
}
var vP = lg, gP = pg, yP = hg, xg = vg, wg = yg;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _g = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xP = {
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
const wP = Go(
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
      ...xP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: _g("lucide", o),
      ...s
    },
    [
      ...i.map(([l, d]) => Cl(l, d)),
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
const Ce = (e, t) => {
  const r = Go(
    ({ className: n, ...o }, a) => Cl(wP, {
      ref: a,
      iconNode: t,
      className: _g(`lucide-${bP(e)}`, n),
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
const _P = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], SP = Ce("ArrowLeft", _P);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], PP = Ce("ArrowRight", CP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EP = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Sg = Ce("Calendar", EP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RP = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], rn = Ce("Check", RP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], xr = Ce("ChevronDown", TP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NP = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Tu = Ce("ChevronLeft", NP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MP = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], xn = Ce("ChevronRight", MP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], OP = Ce("ChevronUp", AP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], wf = Ce("CircleX", jP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DP = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Cg = Ce("Circle", DP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], IP = Ce("Clock", kP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LP = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Pg = Ce("Ellipsis", LP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $P = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], FP = Ce("LoaderCircle", $P);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], BP = Ce("Plus", qP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WP = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], HP = Ce("Search", WP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = [
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
], zP = Ce("WandSparkles", VP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Qo = Ce("X", GP);
function Eg(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Eg(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function vt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Eg(e)) && (n && (n += " "), n += t);
  return n;
}
const Nu = "-", UP = (e) => {
  const t = YP(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Nu);
      return s[0] === "" && s.length !== 1 && s.shift(), Rg(s, t) || KP(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, Rg = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Rg(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Nu);
  return t.validators.find(({
    validator: i
  }) => i(a))?.classGroupId;
}, _f = /^\[(.+)\]$/, KP = (e) => {
  if (_f.test(e)) {
    const t = _f.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, YP = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    El(r[o], n, o, t);
  return n;
}, El = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Sf(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (XP(o)) {
        El(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      El(i, Sf(t, a), r, n);
    });
  });
}, Sf = (e, t) => {
  let r = e;
  return t.split(Nu).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, XP = (e) => e.isThemeGetter, QP = (e) => {
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
}, Rl = "!", Tl = ":", ZP = Tl.length, JP = (e) => {
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
        if (h === Tl) {
          a.push(o.slice(c, y)), c = y + ZP;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const d = a.length === 0 ? o : o.substring(c), p = eE(d), m = p !== d, g = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + Tl, a = n;
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
}, eE = (e) => e.endsWith(Rl) ? e.substring(0, e.length - 1) : e.startsWith(Rl) ? e.substring(1) : e, tE = (e) => {
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
}, rE = (e) => ({
  cache: QP(e.cacheSize),
  parseClassName: JP(e),
  sortModifiers: tE(e),
  ...UP(e)
}), nE = /\s+/, oE = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(nE);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const d = s[l], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: y,
      maybePostfixModifierPosition: h
    } = r(d);
    if (p) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let v = !!h, b = n(v ? y.substring(0, h) : y);
    if (!b) {
      if (!v) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (b = n(y), !b) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      v = !1;
    }
    const x = a(m).join(":"), w = g ? x + Rl : x, _ = w + b;
    if (i.includes(_))
      continue;
    i.push(_);
    const S = o(b, v);
    for (let C = 0; C < S.length; ++C) {
      const P = S[C];
      i.push(w + P);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function aE() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Tg(t)) && (n && (n += " "), n += r);
  return n;
}
const Tg = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Tg(e[n])) && (r && (r += " "), r += t);
  return r;
};
function iE(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const l = t.reduce((d, p) => p(d), e());
    return r = rE(l), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const d = oE(c, r);
    return o(c, d), d;
  }
  return function() {
    return a(aE.apply(null, arguments));
  };
}
const _e = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ng = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Mg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, sE = /^\d+\/\d+$/, cE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, uE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, dE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, cr = (e) => sE.test(e), se = (e) => !!e && !Number.isNaN(Number(e)), St = (e) => !!e && Number.isInteger(Number(e)), Ya = (e) => e.endsWith("%") && se(e.slice(0, -1)), pt = (e) => cE.test(e), pE = () => !0, mE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lE.test(e) && !uE.test(e)
), Ag = () => !1, hE = (e) => dE.test(e), vE = (e) => fE.test(e), gE = (e) => !Z(e) && !J(e), yE = (e) => Ar(e, Dg, Ag), Z = (e) => Ng.test(e), Wt = (e) => Ar(e, kg, mE), Xa = (e) => Ar(e, SE, se), Cf = (e) => Ar(e, Og, Ag), bE = (e) => Ar(e, jg, vE), Kn = (e) => Ar(e, Ig, hE), J = (e) => Mg.test(e), Vr = (e) => Or(e, kg), xE = (e) => Or(e, CE), Pf = (e) => Or(e, Og), wE = (e) => Or(e, Dg), _E = (e) => Or(e, jg), Yn = (e) => Or(e, Ig, !0), Ar = (e, t, r) => {
  const n = Ng.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Or = (e, t, r = !1) => {
  const n = Mg.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Og = (e) => e === "position" || e === "percentage", jg = (e) => e === "image" || e === "url", Dg = (e) => e === "length" || e === "size" || e === "bg-size", kg = (e) => e === "length", SE = (e) => e === "number", CE = (e) => e === "family-name", Ig = (e) => e === "shadow", PE = () => {
  const e = _e("color"), t = _e("font"), r = _e("text"), n = _e("font-weight"), o = _e("tracking"), a = _e("leading"), i = _e("breakpoint"), s = _e("container"), c = _e("spacing"), l = _e("radius"), d = _e("shadow"), p = _e("inset-shadow"), m = _e("text-shadow"), g = _e("drop-shadow"), y = _e("blur"), h = _e("perspective"), v = _e("aspect"), b = _e("ease"), x = _e("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], S = () => [..._(), J, Z], C = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], E = () => [J, Z, c], T = () => [cr, "full", "auto", ...E()], I = () => [St, "none", "subgrid", J, Z], j = () => ["auto", {
    span: ["full", St, J, Z]
  }, St, J, Z], V = () => [St, "auto", J, Z], q = () => ["auto", "min", "max", "fr", J, Z], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...E()], D = () => [cr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], R = () => [e, J, Z], W = () => [..._(), Pf, Cf, {
    position: [J, Z]
  }], O = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", wE, yE, {
    size: [J, Z]
  }], A = () => [Ya, Vr, Wt], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    J,
    Z
  ], K = () => ["", se, Vr, Wt], G = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [se, Ya, Pf, Cf], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    J,
    Z
  ], re = () => ["none", se, J, Z], oe = () => ["none", se, J, Z], te = () => [se, J, Z], U = () => [cr, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pt],
      breakpoint: [pt],
      color: [pE],
      container: [pt],
      "drop-shadow": [pt],
      ease: ["in", "out", "in-out"],
      font: [gE],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [pt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [pt],
      shadow: [pt],
      spacing: ["px", se],
      text: [pt],
      "text-shadow": [pt],
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
        aspect: ["auto", "square", cr, Z, J, v]
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
        columns: [se, Z, J, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        object: S()
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
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
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
        z: [St, "auto", J, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [cr, "full", "auto", s, ...E()]
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
        flex: [se, cr, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", se, J, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", se, J, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [St, "first", "last", "none", J, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        "auto-cols": q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...N(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...N()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": N()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: F()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: F()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: F()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: F()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: F()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: F()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: F()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: F()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: F()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
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
        "space-y": E()
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
        size: D()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...D()]
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
          ...D()
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
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Vr, Wt]
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
        font: [n, J, Xa]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ya, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xE, Z, t]
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
        "line-clamp": [se, "none", J, Xa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...E()
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
        placeholder: R()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: R()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [se, "from-font", "auto", J, Wt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: R()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [se, "auto", J, Z]
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
        indent: E()
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
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
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
        bg: W()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: O()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, St, J, Z],
          radial: ["", J, Z],
          conic: [St, J, Z]
        }, _E, bE]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: R()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: A()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: R()
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
        border: K()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": K()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": K()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": K()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": K()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": K()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": K()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": K()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": K()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": K()
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
        "divide-y": K()
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
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: R()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": R()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": R()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": R()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": R()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": R()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": R()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": R()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": R()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: R()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [se, J, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", se, Vr, Wt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: R()
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
          Yn,
          Kn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: R()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, Yn, Kn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": R()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: K()
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
        ring: R()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [se, Wt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": R()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": K()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": R()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Yn, Kn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [se, J, Z]
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
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [se]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": k()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": k()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": k()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": k()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": k()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": k()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": k()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [J, Z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": k()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": R()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": k()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": R()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: W()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: O()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: z()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", J, Z]
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
        blur: X()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [se, J, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [se, J, Z]
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
          g,
          Yn,
          Kn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": R()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", se, J, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [se, J, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", se, J, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [se, J, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", se, J, Z]
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
        "backdrop-blur": X()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [se, J, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [se, J, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", se, J, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [se, J, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", se, J, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [se, J, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [se, J, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", se, J, Z]
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
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
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
        duration: [se, "initial", J, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, J, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [se, J, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, J, Z]
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
        perspective: [h, J, Z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": oe()
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
        skew: te()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": te()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": te()
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
        origin: S()
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
        translate: U()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": U()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": U()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": U()
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
        accent: R()
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
        caret: R()
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
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
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
        fill: ["none", ...R()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [se, Vr, Wt, Xa]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...R()]
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, EE = /* @__PURE__ */ iE(PE);
function M(...e) {
  return EE(vt(e));
}
const ZW = vP, RE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  gP,
  {
    ref: r,
    className: M("border-b", e),
    ...t
  }
));
RE.displayName = "AccordionItem";
const TE = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(yP, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  xg,
  {
    ref: n,
    className: M(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(xr, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
TE.displayName = xg.displayName;
const NE = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  wg,
  {
    ref: n,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ u.jsx("div", { className: M("pb-4 pt-0", e), children: t })
  }
));
NE.displayName = wg.displayName;
const Ef = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Rf = vt, ct = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return Rf(e, r?.class, r?.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const d = r?.[l], p = a?.[l];
    if (d === null) return null;
    const m = Ef(d) || Ef(p);
    return o[l][m];
  }), s = r && Object.entries(r).reduce((l, d) => {
    let [p, m] = d;
    return m === void 0 || (l[p] = m), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, d) => {
    let { class: p, className: m, ...g } = d;
    return Object.entries(g).every((y) => {
      let [h, v] = y;
      return Array.isArray(v) ? v.includes({
        ...a,
        ...s
      }[h]) : {
        ...a,
        ...s
      }[h] === v;
    }) ? [
      ...l,
      p,
      m
    ] : l;
  }, []);
  return Rf(e, i, c, r?.class, r?.className);
}, ME = ct(
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
), AE = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: M(ME({ variant: t }), e),
    ...r
  }
));
AE.displayName = "Alert";
const OE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "h5",
  {
    ref: r,
    className: M("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
OE.displayName = "AlertTitle";
const jE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
jE.displayName = "AlertDescription";
function ue(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...r) => t.current?.(...r), []);
}
function DE(e, t = globalThis?.document) {
  const r = ue(e);
  f.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var kE = "DismissableLayer", Nl = "dismissableLayer.update", IE = "dismissableLayer.pointerDownOutside", LE = "dismissableLayer.focusOutside", Tf, Lg = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), At = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = f.useContext(Lg), [d, p] = f.useState(null), m = d?.ownerDocument ?? globalThis?.document, [, g] = f.useState({}), y = ne(t, (P) => p(P)), h = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = h.indexOf(v), x = d ? h.indexOf(d) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, _ = x >= b, S = FE((P) => {
      const E = P.target, T = [...l.branches].some((I) => I.contains(E));
      !_ || T || (o?.(P), i?.(P), P.defaultPrevented || s?.());
    }, m), C = qE((P) => {
      const E = P.target;
      [...l.branches].some((I) => I.contains(E)) || (a?.(P), i?.(P), P.defaultPrevented || s?.());
    }, m);
    return DE((P) => {
      x === l.layers.size - 1 && (n?.(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, m), f.useEffect(() => {
      if (d)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Tf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Nf(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Tf);
        };
    }, [d, m, r, l]), f.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Nf());
    }, [d, l]), f.useEffect(() => {
      const P = () => g({});
      return document.addEventListener(Nl, P), () => document.removeEventListener(Nl, P);
    }, []), /* @__PURE__ */ u.jsx(
      H.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: w ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: L(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: L(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: L(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
At.displayName = kE;
var $E = "DismissableLayerBranch", $g = f.forwardRef((e, t) => {
  const r = f.useContext(Lg), n = f.useRef(null), o = ne(t, n);
  return f.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ u.jsx(H.div, { ...e, ref: o });
});
$g.displayName = $E;
function FE(e, t = globalThis?.document) {
  const r = ue(e), n = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Fg(
            IE,
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
function qE(e, t = globalThis?.document) {
  const r = ue(e), n = f.useRef(!1);
  return f.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && Fg(LE, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Nf() {
  const e = new CustomEvent(Nl);
  document.dispatchEvent(e);
}
function Fg(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? tn(o, a) : o.dispatchEvent(a);
}
var BE = At, WE = $g, Qa = "focusScope.autoFocusOnMount", Za = "focusScope.autoFocusOnUnmount", Mf = { bubbles: !1, cancelable: !0 }, HE = "FocusScope", wn = f.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = f.useState(null), l = ue(o), d = ue(a), p = f.useRef(null), m = ne(t, (h) => c(h)), g = f.useRef({
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
        if (g.paused || !s) return;
        const _ = w.target;
        s.contains(_) ? p.current = _ : Pt(p.current, { select: !0 });
      }, v = function(w) {
        if (g.paused || !s) return;
        const _ = w.relatedTarget;
        _ !== null && (s.contains(_) || Pt(p.current, { select: !0 }));
      }, b = function(w) {
        if (document.activeElement === document.body)
          for (const S of w)
            S.removedNodes.length > 0 && Pt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const x = new MutationObserver(b);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), x.disconnect();
      };
    }
  }, [n, s, g.paused]), f.useEffect(() => {
    if (s) {
      Of.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const b = new CustomEvent(Qa, Mf);
        s.addEventListener(Qa, l), s.dispatchEvent(b), b.defaultPrevented || (VE(YE(qg(s)), { select: !0 }), document.activeElement === h && Pt(s));
      }
      return () => {
        s.removeEventListener(Qa, l), setTimeout(() => {
          const b = new CustomEvent(Za, Mf);
          s.addEventListener(Za, d), s.dispatchEvent(b), b.defaultPrevented || Pt(h ?? document.body, { select: !0 }), s.removeEventListener(Za, d), Of.remove(g);
        }, 0);
      };
    }
  }, [s, l, d, g]);
  const y = f.useCallback(
    (h) => {
      if (!r && !n || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, b = document.activeElement;
      if (v && b) {
        const x = h.currentTarget, [w, _] = zE(x);
        w && _ ? !h.shiftKey && b === _ ? (h.preventDefault(), r && Pt(w, { select: !0 })) : h.shiftKey && b === w && (h.preventDefault(), r && Pt(_, { select: !0 })) : b === x && h.preventDefault();
      }
    },
    [r, n, g.paused]
  );
  return /* @__PURE__ */ u.jsx(H.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
wn.displayName = HE;
function VE(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Pt(n, { select: t }), document.activeElement !== r) return;
}
function zE(e) {
  const t = qg(e), r = Af(t, e), n = Af(t.reverse(), e);
  return [r, n];
}
function qg(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Af(e, t) {
  for (const r of e)
    if (!GE(r, { upTo: t })) return r;
}
function GE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function UE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && UE(e) && t && e.select();
  }
}
var Of = KE();
function KE() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = jf(e, t), e.unshift(t);
    },
    remove(t) {
      e = jf(e, t), e[0]?.resume();
    }
  };
}
function jf(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function YE(e) {
  return e.filter((t) => t.tagName !== "A");
}
var XE = "Portal", tr = f.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, a] = f.useState(!1);
  me(() => a(!0), []);
  const i = r || o && globalThis?.document?.body;
  return i ? Jv.createPortal(/* @__PURE__ */ u.jsx(H.div, { ...n, ref: t }), i) : null;
});
tr.displayName = XE;
var Ja = 0;
function Zo() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Df()), document.body.insertAdjacentElement("beforeend", e[1] ?? Df()), Ja++, () => {
      Ja === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ja--;
    };
  }, []);
}
function Df() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Qe = function() {
  return Qe = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Qe.apply(this, arguments);
};
function Bg(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function QE(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var co = "right-scroll-bar-position", lo = "width-before-scroll-bar", ZE = "with-scroll-bars-hidden", JE = "--removed-body-scroll-bar-size";
function ei(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function eR(e, t) {
  var r = nt(function() {
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
var tR = typeof window < "u" ? f.useLayoutEffect : f.useEffect, kf = /* @__PURE__ */ new WeakMap();
function rR(e, t) {
  var r = eR(null, function(n) {
    return e.forEach(function(o) {
      return ei(o, n);
    });
  });
  return tR(function() {
    var n = kf.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || ei(s, null);
      }), a.forEach(function(s) {
        o.has(s) || ei(s, i);
      });
    }
    kf.set(r, e);
  }, [e]), r;
}
function nR(e) {
  return e;
}
function oR(e, t) {
  t === void 0 && (t = nR);
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
function aR(e) {
  e === void 0 && (e = {});
  var t = oR(null);
  return t.options = Qe({ async: !0, ssr: !1 }, e), t;
}
var Wg = function(e) {
  var t = e.sideCar, r = Bg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return f.createElement(n, Qe({}, r));
};
Wg.isSideCarExport = !0;
function iR(e, t) {
  return e.useMedium(t), Wg;
}
var Hg = aR(), ti = function() {
}, Jo = f.forwardRef(function(e, t) {
  var r = f.useRef(null), n = f.useState({
    onScrollCapture: ti,
    onWheelCapture: ti,
    onTouchMoveCapture: ti
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, y = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = e.gapMode, _ = Bg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = m, C = rR([r, t]), P = Qe(Qe({}, _), o);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(S, { sideCar: Hg, removeScrollBar: l, shards: p, noRelative: g, noIsolation: y, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: r, gapMode: w }),
    i ? f.cloneElement(f.Children.only(s), Qe(Qe({}, P), { ref: C })) : f.createElement(x, Qe({}, P, { className: c, ref: C }), s)
  );
});
Jo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Jo.classNames = {
  fullWidth: lo,
  zeroRight: co
};
var sR = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function cR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sR();
  return t && e.setAttribute("nonce", t), e;
}
function lR(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function uR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var dR = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = cR()) && (lR(t, r), uR(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fR = function() {
  var e = dR();
  return function(t, r) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Vg = function() {
  var e = fR(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, pR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ri = function(e) {
  return parseInt(e || "", 10) || 0;
}, mR = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ri(r), ri(n), ri(o)];
}, hR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return pR;
  var t = mR(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, vR = Vg(), hr = "data-scroll-locked", gR = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(ZE, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(hr, `] {
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
  
  .`).concat(co, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(lo, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(co, " .").concat(co, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(lo, " .").concat(lo, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(hr, `] {
    `).concat(JE, ": ").concat(s, `px;
  }
`);
}, If = function() {
  var e = parseInt(document.body.getAttribute(hr) || "0", 10);
  return isFinite(e) ? e : 0;
}, yR = function() {
  f.useEffect(function() {
    return document.body.setAttribute(hr, (If() + 1).toString()), function() {
      var e = If() - 1;
      e <= 0 ? document.body.removeAttribute(hr) : document.body.setAttribute(hr, e.toString());
    };
  }, []);
}, bR = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  yR();
  var a = f.useMemo(function() {
    return hR(o);
  }, [o]);
  return f.createElement(vR, { styles: gR(a, !t, o, r ? "" : "!important") });
}, Ml = !1;
if (typeof window < "u")
  try {
    var Xn = Object.defineProperty({}, "passive", {
      get: function() {
        return Ml = !0, !0;
      }
    });
    window.addEventListener("test", Xn, Xn), window.removeEventListener("test", Xn, Xn);
  } catch {
    Ml = !1;
  }
var lr = Ml ? { passive: !1 } : !1, xR = function(e) {
  return e.tagName === "TEXTAREA";
}, zg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !xR(e) && r[t] === "visible")
  );
}, wR = function(e) {
  return zg(e, "overflowY");
}, _R = function(e) {
  return zg(e, "overflowX");
}, Lf = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Gg(e, n);
    if (o) {
      var a = Ug(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, SR = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, CR = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Gg = function(e, t) {
  return e === "v" ? wR(t) : _R(t);
}, Ug = function(e, t) {
  return e === "v" ? SR(t) : CR(t);
}, PR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ER = function(e, t, r, n, o) {
  var a = PR(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), l = !1, d = i > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var g = Ug(e, s), y = g[0], h = g[1], v = g[2], b = h - v - a * y;
    (y || b) && Gg(e, s) && (p += b, m += y);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(m) < 1) && (l = !0), l;
}, Qn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $f = function(e) {
  return [e.deltaX, e.deltaY];
}, Ff = function(e) {
  return e && "current" in e ? e.current : e;
}, RR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, TR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, NR = 0, ur = [];
function MR(e) {
  var t = f.useRef([]), r = f.useRef([0, 0]), n = f.useRef(), o = f.useState(NR++)[0], a = f.useState(Vg)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = QE([e.lockRef.current], (e.shards || []).map(Ff), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = f.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var b = Qn(h), x = r.current, w = "deltaX" in h ? h.deltaX : x[0] - b[0], _ = "deltaY" in h ? h.deltaY : x[1] - b[1], S, C = h.target, P = Math.abs(w) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && C.type === "range")
      return !1;
    var E = Lf(P, C);
    if (!E)
      return !0;
    if (E ? S = P : (S = P === "v" ? "h" : "v", E = Lf(P, C)), !E)
      return !1;
    if (!n.current && "changedTouches" in h && (w || _) && (n.current = S), !S)
      return !0;
    var T = n.current || S;
    return ER(T, v, h, T === "h" ? w : _);
  }, []), c = f.useCallback(function(h) {
    var v = h;
    if (!(!ur.length || ur[ur.length - 1] !== a)) {
      var b = "deltaY" in v ? $f(v) : Qn(v), x = t.current.filter(function(S) {
        return S.name === v.type && (S.target === v.target || v.target === S.shadowParent) && RR(S.delta, b);
      })[0];
      if (x && x.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(Ff).filter(Boolean).filter(function(S) {
          return S.contains(v.target);
        }), _ = w.length > 0 ? s(v, w[0]) : !i.current.noIsolation;
        _ && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = f.useCallback(function(h, v, b, x) {
    var w = { name: h, delta: v, target: b, should: x, shadowParent: AR(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== w;
      });
    }, 1);
  }, []), d = f.useCallback(function(h) {
    r.current = Qn(h), n.current = void 0;
  }, []), p = f.useCallback(function(h) {
    l(h.type, $f(h), h.target, s(h, e.lockRef.current));
  }, []), m = f.useCallback(function(h) {
    l(h.type, Qn(h), h.target, s(h, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return ur.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, lr), document.addEventListener("touchmove", c, lr), document.addEventListener("touchstart", d, lr), function() {
      ur = ur.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, lr), document.removeEventListener("touchmove", c, lr), document.removeEventListener("touchstart", d, lr);
    };
  }, []);
  var g = e.removeScrollBar, y = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    y ? f.createElement(a, { styles: TR(o) }) : null,
    g ? f.createElement(bR, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function AR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const OR = iR(Hg, MR);
var _n = f.forwardRef(function(e, t) {
  return f.createElement(Jo, Qe({}, e, { ref: t, sideCar: OR }));
});
_n.classNames = Jo.classNames;
var jR = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dr = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), Jn = {}, ni = 0, Kg = function(e) {
  return e && (e.host || Kg(e.parentNode));
}, DR = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Kg(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, kR = function(e, t, r, n) {
  var o = DR(t, Array.isArray(e) ? e : [e]);
  Jn[r] || (Jn[r] = /* @__PURE__ */ new WeakMap());
  var a = Jn[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(p) {
    !p || s.has(p) || (s.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var d = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        d(m);
      else
        try {
          var g = m.getAttribute(n), y = g !== null && g !== "false", h = (dr.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          dr.set(m, h), a.set(m, v), i.push(m), h === 1 && y && Zn.set(m, !0), v === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return d(t), s.clear(), ni++, function() {
    i.forEach(function(p) {
      var m = dr.get(p) - 1, g = a.get(p) - 1;
      dr.set(p, m), a.set(p, g), m || (Zn.has(p) || p.removeAttribute(n), Zn.delete(p)), g || p.removeAttribute(r);
    }), ni--, ni || (dr = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), Jn = {});
  };
}, ea = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = jR(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), kR(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, ta = "Dialog", [Yg, Xg] = be(ta), [IR, Ke] = Yg(ta), Qg = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = f.useRef(null), c = f.useRef(null), [l, d] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ta
  });
  return /* @__PURE__ */ u.jsx(
    IR,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: ve(),
      titleId: ve(),
      descriptionId: ve(),
      open: l,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((p) => !p), [d]),
      modal: i,
      children: r
    }
  );
};
Qg.displayName = ta;
var Zg = "DialogTrigger", Jg = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ke(Zg, r), a = ne(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ou(o.open),
        ...n,
        ref: a,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Jg.displayName = Zg;
var Mu = "DialogPortal", [LR, ey] = Yg(Mu, {
  forceMount: void 0
}), ty = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = Ke(Mu, t);
  return /* @__PURE__ */ u.jsx(LR, { scope: t, forceMount: r, children: f.Children.map(n, (i) => /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: i }) })) });
};
ty.displayName = Mu;
var xo = "DialogOverlay", ry = f.forwardRef(
  (e, t) => {
    const r = ey(xo, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ke(xo, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(FR, { ...o, ref: t }) }) : null;
  }
);
ry.displayName = xo;
var $R = /* @__PURE__ */ Rt("DialogOverlay.RemoveScroll"), FR = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ke(xo, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(_n, { as: $R, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        H.div,
        {
          "data-state": Ou(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), zt = "DialogContent", ny = f.forwardRef(
  (e, t) => {
    const r = ey(zt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ke(zt, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(qR, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(BR, { ...o, ref: t }) });
  }
);
ny.displayName = zt;
var qR = f.forwardRef(
  (e, t) => {
    const r = Ke(zt, e.__scopeDialog), n = f.useRef(null), o = ne(t, r.contentRef, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return ea(a);
    }, []), /* @__PURE__ */ u.jsx(
      oy,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: L(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: L(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: L(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), BR = f.forwardRef(
  (e, t) => {
    const r = Ke(zt, e.__scopeDialog), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      oy,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (n.current || r.triggerRef.current?.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          r.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), oy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Ke(zt, r), c = f.useRef(null), l = ne(t, c);
    return Zo(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        wn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ u.jsx(
            At,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Ou(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(HR, { titleId: s.titleId }),
        /* @__PURE__ */ u.jsx(zR, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Au = "DialogTitle", ay = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ke(Au, r);
    return /* @__PURE__ */ u.jsx(H.h2, { id: o.titleId, ...n, ref: t });
  }
);
ay.displayName = Au;
var iy = "DialogDescription", sy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ke(iy, r);
    return /* @__PURE__ */ u.jsx(H.p, { id: o.descriptionId, ...n, ref: t });
  }
);
sy.displayName = iy;
var cy = "DialogClose", ly = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ke(cy, r);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: L(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ly.displayName = cy;
function Ou(e) {
  return e ? "open" : "closed";
}
var uy = "DialogTitleWarning", [WR, dy] = F0(uy, {
  contentName: zt,
  titleName: Au,
  docsSlug: "dialog"
}), HR = ({ titleId: e }) => {
  const t = dy(uy), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, VR = "DialogDescriptionWarning", zR = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dy(VR).contentName}}.`;
  return f.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, ra = Qg, ju = Jg, na = ty, jr = ry, Dr = ny, Sn = ay, Cn = sy, kr = ly, fy = "AlertDialog", [GR, JW] = be(fy, [
  Xg
]), wt = Xg(), py = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = wt(t);
  return /* @__PURE__ */ u.jsx(ra, { ...n, ...r, modal: !0 });
};
py.displayName = fy;
var UR = "AlertDialogTrigger", my = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(ju, { ...o, ...n, ref: t });
  }
);
my.displayName = UR;
var KR = "AlertDialogPortal", hy = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = wt(t);
  return /* @__PURE__ */ u.jsx(na, { ...n, ...r });
};
hy.displayName = KR;
var YR = "AlertDialogOverlay", vy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(jr, { ...o, ...n, ref: t });
  }
);
vy.displayName = YR;
var vr = "AlertDialogContent", [XR, QR] = GR(vr), ZR = /* @__PURE__ */ ng("AlertDialogContent"), gy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, a = wt(r), i = f.useRef(null), s = ne(t, i), c = f.useRef(null);
    return /* @__PURE__ */ u.jsx(
      WR,
      {
        contentName: vr,
        titleName: yy,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u.jsx(XR, { scope: r, cancelRef: c, children: /* @__PURE__ */ u.jsxs(
          Dr,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: L(o.onOpenAutoFocus, (l) => {
              l.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ u.jsx(ZR, { children: n }),
              /* @__PURE__ */ u.jsx(eT, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
gy.displayName = vr;
var yy = "AlertDialogTitle", by = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(Sn, { ...o, ...n, ref: t });
  }
);
by.displayName = yy;
var xy = "AlertDialogDescription", wy = f.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
  return /* @__PURE__ */ u.jsx(Cn, { ...o, ...n, ref: t });
});
wy.displayName = xy;
var JR = "AlertDialogAction", _y = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(kr, { ...o, ...n, ref: t });
  }
);
_y.displayName = JR;
var Sy = "AlertDialogCancel", Cy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = QR(Sy, r), a = wt(r), i = ne(t, o);
    return /* @__PURE__ */ u.jsx(kr, { ...a, ...n, ref: i });
  }
);
Cy.displayName = Sy;
var eT = ({ contentRef: e }) => {
  const t = `\`${vr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${vr}\` by passing a \`${xy}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${vr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return f.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, tT = py, rT = my, nT = hy, Py = vy, Ey = gy, Ry = _y, Ty = Cy, Ny = by, My = wy;
const e4 = tT, t4 = rT, oT = nT, Ay = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Py,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Ay.displayName = Py.displayName;
const aT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs(oT, { children: [
  /* @__PURE__ */ u.jsx(Ay, {}),
  /* @__PURE__ */ u.jsx(
    Ey,
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
aT.displayName = Ey.displayName;
const iT = ({
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
iT.displayName = "AlertDialogHeader";
const sT = ({
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
sT.displayName = "AlertDialogFooter";
const cT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ny,
  {
    ref: r,
    className: M("text-lg font-semibold", e),
    ...t
  }
));
cT.displayName = Ny.displayName;
const lT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  My,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
lT.displayName = My.displayName;
const uT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ry,
  {
    ref: r,
    className: M(gt(), e),
    ...t
  }
));
uT.displayName = Ry.displayName;
const dT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ty,
  {
    ref: r,
    className: M(
      gt({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
dT.displayName = Ty.displayName;
var eo = { exports: {} }, oi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qf;
function fT() {
  if (qf) return oi;
  qf = 1;
  var e = Q;
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(p, m) {
    var g = m(), y = n({ inst: { value: g, getSnapshot: m } }), h = y[0].inst, v = y[1];
    return a(
      function() {
        h.value = g, h.getSnapshot = m, c(h) && v({ inst: h });
      },
      [p, g, m]
    ), o(
      function() {
        return c(h) && v({ inst: h }), p(function() {
          c(h) && v({ inst: h });
        });
      },
      [p]
    ), i(g), g;
  }
  function c(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var g = m();
      return !r(p, g);
    } catch {
      return !0;
    }
  }
  function l(p, m) {
    return m();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return oi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, oi;
}
var ai = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bf;
function pT() {
  return Bf || (Bf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, y) {
      return g === y && (g !== 0 || 1 / g === 1 / y) || g !== g && y !== y;
    }
    function t(g, y) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = y();
      if (!p) {
        var v = y();
        a(h, v) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      v = i({
        inst: { value: h, getSnapshot: y }
      });
      var b = v[0].inst, x = v[1];
      return c(
        function() {
          b.value = h, b.getSnapshot = y, r(b) && x({ inst: b });
        },
        [g, h, y]
      ), s(
        function() {
          return r(b) && x({ inst: b }), g(function() {
            r(b) && x({ inst: b });
          });
        },
        [g]
      ), l(h), h;
    }
    function r(g) {
      var y = g.getSnapshot;
      g = g.value;
      try {
        var h = y();
        return !a(g, h);
      } catch {
        return !0;
      }
    }
    function n(g, y) {
      return y();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Q, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, l = o.useDebugValue, d = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    ai.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ai;
}
var Wf;
function mT() {
  return Wf || (Wf = 1, process.env.NODE_ENV === "production" ? eo.exports = fT() : eo.exports = pT()), eo.exports;
}
var hT = mT();
function vT() {
  return hT.useSyncExternalStore(
    gT,
    () => !0,
    () => !1
  );
}
function gT() {
  return () => {
  };
}
var Du = "Avatar", [yT, r4] = be(Du), [bT, Oy] = yT(Du), jy = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = f.useState("idle");
    return /* @__PURE__ */ u.jsx(
      bT,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ u.jsx(H.span, { ...n, ref: t })
      }
    );
  }
);
jy.displayName = Du;
var Dy = "AvatarImage", ky = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = Oy(Dy, r), s = xT(n, a), c = ue((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return me(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ u.jsx(H.img, { ...a, ref: t, src: n }) : null;
  }
);
ky.displayName = Dy;
var Iy = "AvatarFallback", Ly = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = Oy(Iy, r), [i, s] = f.useState(n === void 0);
    return f.useEffect(() => {
      if (n !== void 0) {
        const c = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(c);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u.jsx(H.span, { ...o, ref: t }) : null;
  }
);
Ly.displayName = Iy;
function Hf(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function xT(e, { referrerPolicy: t, crossOrigin: r }) {
  const n = vT(), o = f.useRef(null), a = n ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = f.useState(
    () => Hf(a, e)
  );
  return me(() => {
    s(Hf(a, e));
  }, [a, e]), me(() => {
    const c = (p) => () => {
      s(p);
    };
    if (!a) return;
    const l = c("loaded"), d = c("error");
    return a.addEventListener("load", l), a.addEventListener("error", d), t && (a.referrerPolicy = t), typeof r == "string" && (a.crossOrigin = r), () => {
      a.removeEventListener("load", l), a.removeEventListener("error", d);
    };
  }, [a, r, t]), i;
}
var $y = jy, Fy = ky, qy = Ly;
const wT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  $y,
  {
    ref: r,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
wT.displayName = $y.displayName;
const _T = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Fy,
  {
    ref: r,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
_T.displayName = Fy.displayName;
const ST = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  qy,
  {
    ref: r,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
ST.displayName = qy.displayName;
const CT = ct(
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
function Vf({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ u.jsx("div", { className: M(CT({ variant: t }), e), ...r });
}
const PT = f.forwardRef(({ ...e }, t) => /* @__PURE__ */ u.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
PT.displayName = "Breadcrumb";
const ET = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
ET.displayName = "BreadcrumbList";
const RT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "li",
  {
    ref: r,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
RT.displayName = "BreadcrumbItem";
const TT = f.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? tg : "a";
  return /* @__PURE__ */ u.jsx(
    o,
    {
      ref: n,
      className: M("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
TT.displayName = "BreadcrumbLink";
const NT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
NT.displayName = "BreadcrumbPage";
const MT = ({
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
    children: e ?? /* @__PURE__ */ u.jsx(xn, {})
  }
);
MT.displayName = "BreadcrumbSeparator";
const AT = ({
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
      /* @__PURE__ */ u.jsx(Pg, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
AT.displayName = "BreadcrumbElipssis";
const OT = {
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
}, gt = ct(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: OT,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ir = f.forwardRef(({ className: e, variant: t, size: r, disabled: n, href: o, ...a }, i) => /* @__PURE__ */ u.jsx(u.Fragment, { children: o ? /* @__PURE__ */ u.jsx(
  j0,
  {
    className: M(gt({ variant: t, size: r, className: e })),
    ref: i,
    to: o,
    ...a
  }
) : /* @__PURE__ */ u.jsx(
  "button",
  {
    className: M(gt({ variant: t, size: r, className: e })),
    ref: i,
    disabled: n,
    ...a
  }
) }));
Ir.displayName = "Button";
const ku = 6048e5, jT = 864e5, zf = Symbol.for("constructDateFrom");
function Se(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && zf in e ? e[zf](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function de(e, t) {
  return Se(t || e, e);
}
function Ee(e, t, r) {
  const n = de(e, r?.in);
  return isNaN(t) ? Se(r?.in || e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Le(e, t, r) {
  const n = de(e, r?.in);
  if (isNaN(t)) return Se(r?.in || e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), a = Se(r?.in || e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), n);
}
function DT(e, t, r) {
  const {
    years: n = 0,
    months: o = 0,
    weeks: a = 0,
    days: i = 0,
    hours: s = 0,
    minutes: c = 0,
    seconds: l = 0
  } = t, d = de(e, r?.in), p = o || n ? Le(d, o + n * 12) : d, m = i || a ? Ee(p, i + a * 7) : p, g = c + s * 60, h = (l + g * 60) * 1e3;
  return Se(e, +m + h);
}
let kT = {};
function Pn() {
  return kT;
}
function at(e, t) {
  const r = Pn(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, o = de(e, t?.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Gt(e, t) {
  return at(e, { ...t, weekStartsOn: 1 });
}
function By(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = Se(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Gt(o), i = Se(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Gt(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function wo(e) {
  const t = de(e), r = new Date(
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
function Lr(e, ...t) {
  const r = Se.bind(
    null,
    e || t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function wr(e, t) {
  const r = de(e, t?.in);
  return r.setHours(0, 0, 0, 0), r;
}
function et(e, t, r) {
  const [n, o] = Lr(
    r?.in,
    e,
    t
  ), a = wr(n), i = wr(o), s = +a - wo(a), c = +i - wo(i);
  return Math.round((s - c) / jT);
}
function IT(e, t) {
  const r = By(e, t), n = Se(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Gt(n);
}
function Al(e, t, r) {
  return Ee(e, t * 7, r);
}
function LT(e, t, r) {
  return Le(e, t * 12, r);
}
function $T(e, t) {
  let r, n = t?.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Se.bind(null, o));
    const a = de(o, n);
    (!r || r < a || isNaN(+a)) && (r = a);
  }), Se(n, r || NaN);
}
function FT(e, t) {
  let r, n = t?.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Se.bind(null, o));
    const a = de(o, n);
    (!r || r > a || isNaN(+a)) && (r = a);
  }), Se(n, r || NaN);
}
function Te(e, t, r) {
  const [n, o] = Lr(
    r?.in,
    e,
    t
  );
  return +wr(n) == +wr(o);
}
function Iu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function qT(e) {
  return !(!Iu(e) && typeof e != "number" || isNaN(+de(e)));
}
function nn(e, t, r) {
  const [n, o] = Lr(
    r?.in,
    e,
    t
  ), a = n.getFullYear() - o.getFullYear(), i = n.getMonth() - o.getMonth();
  return a * 12 + i;
}
function BT(e, t, r) {
  const [n, o] = Lr(
    r?.in,
    e,
    t
  ), a = at(n, r), i = at(o, r), s = +a - wo(a), c = +i - wo(i);
  return Math.round((s - c) / ku);
}
function Lu(e, t) {
  const r = de(e, t?.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function Ne(e, t) {
  const r = de(e, t?.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function Wy(e, t) {
  const r = de(e, t?.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function $u(e, t) {
  const r = Pn(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, o = de(e, t?.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Hy(e, t) {
  return $u(e, { ...t, weekStartsOn: 1 });
}
const WT = {
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
}, HT = (e, t, r) => {
  let n;
  const o = WT[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function gr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const VT = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, zT = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, GT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, UT = {
  date: gr({
    formats: VT,
    defaultWidth: "full"
  }),
  time: gr({
    formats: zT,
    defaultWidth: "full"
  }),
  dateTime: gr({
    formats: GT,
    defaultWidth: "full"
  })
}, KT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, YT = (e, t, r, n) => KT[e];
function Ze(e) {
  return (t, r) => {
    const n = r?.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = r?.width ? String(r.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = r?.width ? String(r.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const XT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, QT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ZT = {
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
}, JT = {
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
}, eN = {
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
}, tN = {
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
}, rN = (e, t) => {
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
}, nN = {
  ordinalNumber: rN,
  era: Ze({
    values: XT,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: QT,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ze({
    values: ZT,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: JT,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: eN,
    defaultWidth: "wide",
    formattingValues: tN,
    defaultFormattingWidth: "wide"
  })
};
function Je(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? aN(s, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      oN(s, (p) => p.test(i))
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
function oN(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function aN(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Vy(e) {
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
const iN = /^(\d+)(th|st|nd|rd)?/i, sN = /\d+/i, cN = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, lN = {
  any: [/^b/i, /^(a|c)/i]
}, uN = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, dN = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, fN = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, pN = {
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
}, mN = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, hN = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, vN = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gN = {
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
}, yN = {
  ordinalNumber: Vy({
    matchPattern: iN,
    parsePattern: sN,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Je({
    matchPatterns: cN,
    defaultMatchWidth: "wide",
    parsePatterns: lN,
    defaultParseWidth: "any"
  }),
  quarter: Je({
    matchPatterns: uN,
    defaultMatchWidth: "wide",
    parsePatterns: dN,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Je({
    matchPatterns: fN,
    defaultMatchWidth: "wide",
    parsePatterns: pN,
    defaultParseWidth: "any"
  }),
  day: Je({
    matchPatterns: mN,
    defaultMatchWidth: "wide",
    parsePatterns: hN,
    defaultParseWidth: "any"
  }),
  dayPeriod: Je({
    matchPatterns: vN,
    defaultMatchWidth: "any",
    parsePatterns: gN,
    defaultParseWidth: "any"
  })
}, zy = {
  code: "en-US",
  formatDistance: HT,
  formatLong: UT,
  formatRelative: YT,
  localize: nN,
  match: yN,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function bN(e, t) {
  const r = de(e, t?.in);
  return et(r, Wy(r)) + 1;
}
function Gy(e, t) {
  const r = de(e, t?.in), n = +Gt(r) - +IT(r);
  return Math.round(n / ku) + 1;
}
function Uy(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = Pn(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = Se(t?.in || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = at(i, t), c = Se(t?.in || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const l = at(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function xN(e, t) {
  const r = Pn(), n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = Uy(e, t), a = Se(t?.in || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), at(a, t);
}
function Ky(e, t) {
  const r = de(e, t?.in), n = +at(r, t) - +xN(r, t);
  return Math.round(n / ku) + 1;
}
function fe(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Ct = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return fe(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : fe(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return fe(e.getDate(), t.length);
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
    return fe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return fe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return fe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return fe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return fe(o, t.length);
  }
}, fr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Gf = {
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
    return Ct.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = Uy(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return fe(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : fe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = By(e);
    return fe(r, t.length);
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
    return fe(r, t.length);
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
        return fe(n, 2);
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
        return fe(n, 2);
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
        return Ct.M(e, t);
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
        return fe(n + 1, 2);
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
    const o = Ky(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : fe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Gy(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : fe(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Ct.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = bN(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : fe(n, t.length);
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
        return fe(a, 2);
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
        return fe(a, t.length);
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
        return fe(o, t.length);
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
    switch (n === 12 ? o = fr.noon : n === 0 ? o = fr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = fr.evening : n >= 12 ? o = fr.afternoon : n >= 4 ? o = fr.morning : o = fr.night, t) {
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
    return Ct.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Ct.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : fe(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : fe(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ct.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ct.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ct.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Kf(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ht(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ht(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Kf(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ht(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ht(n, ":");
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
        return "GMT" + Uf(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Ht(n, ":");
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
        return "GMT" + Uf(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Ht(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return fe(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return fe(+e, t.length);
  }
};
function Uf(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + fe(a, 2);
}
function Kf(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2) : Ht(e, t);
}
function Ht(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = fe(Math.trunc(n / 60), 2), a = fe(n % 60, 2);
  return r + o + t + a;
}
const Yf = (e, t) => {
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
}, Yy = (e, t) => {
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
}, wN = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return Yf(e, t);
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
  return a.replace("{{date}}", Yf(n, t)).replace("{{time}}", Yy(o, t));
}, _N = {
  p: Yy,
  P: wN
}, SN = /^D+$/, CN = /^Y+$/, PN = ["D", "DD", "YY", "YYYY"];
function EN(e) {
  return SN.test(e);
}
function RN(e) {
  return CN.test(e);
}
function TN(e, t, r) {
  const n = NN(e, t, r);
  if (console.warn(n), PN.includes(e)) throw new RangeError(n);
}
function NN(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const MN = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, AN = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ON = /^'([^]*?)'?$/, jN = /''/g, DN = /[a-zA-Z]/;
function lt(e, t, r) {
  const n = Pn(), o = r?.locale ?? n.locale ?? zy, a = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, s = de(e, r?.in);
  if (!qT(s))
    throw new RangeError("Invalid time value");
  let c = t.match(AN).map((d) => {
    const p = d[0];
    if (p === "p" || p === "P") {
      const m = _N[p];
      return m(d, o.formatLong);
    }
    return d;
  }).join("").match(MN).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const p = d[0];
    if (p === "'")
      return { isToken: !1, value: kN(d) };
    if (Gf[p])
      return { isToken: !0, value: d };
    if (p.match(DN))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: d };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((d) => {
    if (!d.isToken) return d.value;
    const p = d.value;
    (!r?.useAdditionalWeekYearTokens && RN(p) || !r?.useAdditionalDayOfYearTokens && EN(p)) && TN(p, t, String(e));
    const m = Gf[p[0]];
    return m(s, p, o.localize, l);
  }).join("");
}
function kN(e) {
  const t = e.match(ON);
  return t ? t[1].replace(jN, "'") : e;
}
function IN(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = r.getMonth(), a = Se(r, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function LN(e) {
  return Math.trunc(+de(e) / 1e3);
}
function $N(e, t) {
  const r = de(e, t?.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(0, 0, 0, 0), de(r, t?.in);
}
function FN(e, t) {
  const r = de(e, t?.in);
  return BT(
    $N(r, t),
    Ne(r, t),
    t
  ) + 1;
}
function Ol(e, t) {
  return +de(e) > +de(t);
}
function Xy(e, t) {
  return +de(e) < +de(t);
}
function Fu(e, t, r) {
  const [n, o] = Lr(
    r?.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function qN(e, t, r) {
  const [n, o] = Lr(
    r?.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear();
}
function ii(e, t, r) {
  return Ee(e, -t, r);
}
function si(e, t, r) {
  const n = de(e, r?.in), o = n.getFullYear(), a = n.getDate(), i = Se(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = IN(i);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Xf(e, t, r) {
  const n = de(e, r?.in);
  return isNaN(+n) ? Se(e, NaN) : (n.setFullYear(t), n);
}
const BN = {
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
}, WN = (e, t, r) => {
  let n;
  const o = BN[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", String(t)), r?.addSuffix ? r.comparison && r.comparison > 0 ? "em " + n : "há " + n : n;
}, HN = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, VN = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, zN = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, GN = {
  date: gr({
    formats: HN,
    defaultWidth: "full"
  }),
  time: gr({
    formats: VN,
    defaultWidth: "full"
  }),
  dateTime: gr({
    formats: zN,
    defaultWidth: "full"
  })
}, UN = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, KN = (e, t, r, n) => {
  const o = UN[e];
  return typeof o == "function" ? o(t) : o;
}, YN = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, XN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, QN = {
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
}, ZN = {
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
}, JN = {
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
}, e1 = {
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
}, t1 = (e, t) => {
  const r = Number(e);
  return t?.unit === "week" ? r + "ª" : r + "º";
}, r1 = {
  ordinalNumber: t1,
  era: Ze({
    values: YN,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: XN,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ze({
    values: QN,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: ZN,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: JN,
    defaultWidth: "wide",
    formattingValues: e1,
    defaultFormattingWidth: "wide"
  })
}, n1 = /^(\d+)[ºªo]?/i, o1 = /\d+/i, a1 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, i1 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, s1 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, c1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, l1 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, u1 = {
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
}, d1 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, f1 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, p1 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, m1 = {
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
}, h1 = {
  ordinalNumber: Vy({
    matchPattern: n1,
    parsePattern: o1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Je({
    matchPatterns: a1,
    defaultMatchWidth: "wide",
    parsePatterns: i1,
    defaultParseWidth: "any"
  }),
  quarter: Je({
    matchPatterns: s1,
    defaultMatchWidth: "wide",
    parsePatterns: c1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Je({
    matchPatterns: l1,
    defaultMatchWidth: "wide",
    parsePatterns: u1,
    defaultParseWidth: "any"
  }),
  day: Je({
    matchPatterns: d1,
    defaultMatchWidth: "wide",
    parsePatterns: f1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Je({
    matchPatterns: p1,
    defaultMatchWidth: "any",
    parsePatterns: m1,
    defaultParseWidth: "any"
  })
}, Zr = {
  code: "pt-BR",
  formatDistance: WN,
  formatLong: GN,
  formatRelative: KN,
  localize: r1,
  match: h1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var ae = function() {
  return ae = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ae.apply(this, arguments);
};
function v1(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Qy(e, t, r) {
  for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function En(e) {
  return e.mode === "multiple";
}
function Rn(e) {
  return e.mode === "range";
}
function oa(e) {
  return e.mode === "single";
}
var g1 = {
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
function y1(e, t) {
  return lt(e, "LLLL y", t);
}
function b1(e, t) {
  return lt(e, "d", t);
}
function x1(e, t) {
  return lt(e, "LLLL", t);
}
function w1(e) {
  return "".concat(e);
}
function _1(e, t) {
  return lt(e, "cccccc", t);
}
function S1(e, t) {
  return lt(e, "yyyy", t);
}
var C1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: y1,
  formatDay: b1,
  formatMonthCaption: x1,
  formatWeekNumber: w1,
  formatWeekdayName: _1,
  formatYearCaption: S1
}), P1 = function(e, t, r) {
  return lt(e, "do MMMM (EEEE)", r);
}, E1 = function() {
  return "Month: ";
}, R1 = function() {
  return "Go to next month";
}, T1 = function() {
  return "Go to previous month";
}, N1 = function(e, t) {
  return lt(e, "cccc", t);
}, M1 = function(e) {
  return "Week n. ".concat(e);
}, A1 = function() {
  return "Year: ";
}, O1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: P1,
  labelMonthDropdown: E1,
  labelNext: R1,
  labelPrevious: T1,
  labelWeekNumber: M1,
  labelWeekday: N1,
  labelYearDropdown: A1
});
function j1() {
  var e = "buttons", t = g1, r = zy, n = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: C1,
    labels: O1,
    locale: r,
    modifiersClassNames: n,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function D1(e) {
  var t = e.fromYear, r = e.toYear, n = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return n ? a = Ne(n) : t && (a = new Date(t, 0, 1)), o ? i = Lu(o) : r && (i = new Date(r, 11, 31)), {
    fromDate: a ? wr(a) : void 0,
    toDate: i ? wr(i) : void 0
  };
}
var Zy = Zt(void 0);
function k1(e) {
  var t, r = e.initialProps, n = j1(), o = D1(r), a = o.fromDate, i = o.toDate, s = (t = r.captionLayout) !== null && t !== void 0 ? t : n.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (oa(r) || En(r) || Rn(r)) && (c = r.onSelect);
  var l = ae(ae(ae({}, n), r), { captionLayout: s, classNames: ae(ae({}, n.classNames), r.classNames), components: ae({}, r.components), formatters: ae(ae({}, n.formatters), r.formatters), fromDate: a, labels: ae(ae({}, n.labels), r.labels), mode: r.mode || n.mode, modifiers: ae(ae({}, n.modifiers), r.modifiers), modifiersClassNames: ae(ae({}, n.modifiersClassNames), r.modifiersClassNames), onSelect: c, styles: ae(ae({}, n.styles), r.styles), toDate: i });
  return u.jsx(Zy.Provider, { value: l, children: e.children });
}
function pe() {
  var e = Jt(Zy);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Jy(e) {
  var t = pe(), r = t.locale, n = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: n.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: r }) });
}
function I1(e) {
  return u.jsx("svg", ae({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function eb(e) {
  var t, r, n = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = pe(), d = (r = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && r !== void 0 ? r : I1;
  return u.jsxs("div", { className: s, style: c, children: [u.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: n, children: a }), u.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [i, u.jsx(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function L1(e) {
  var t, r = pe(), n = r.fromDate, o = r.toDate, a = r.styles, i = r.locale, s = r.formatters.formatMonthCaption, c = r.classNames, l = r.components, d = r.labels.labelMonthDropdown;
  if (!n)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var p = [];
  if (qN(n, o))
    for (var m = Ne(n), g = n.getMonth(); g <= o.getMonth(); g++)
      p.push(si(m, g));
  else
    for (var m = Ne(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      p.push(si(m, g));
  var y = function(v) {
    var b = Number(v.target.value), x = si(Ne(e.displayMonth), b);
    e.onChange(x);
  }, h = (t = l?.Dropdown) !== null && t !== void 0 ? t : eb;
  return u.jsx(h, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: y, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(v) {
    return u.jsx("option", { value: v.getMonth(), children: s(v, { locale: i }) }, v.getMonth());
  }) });
}
function $1(e) {
  var t, r = e.displayMonth, n = pe(), o = n.fromDate, a = n.toDate, i = n.locale, s = n.styles, c = n.classNames, l = n.components, d = n.formatters.formatYearCaption, p = n.labels.labelYearDropdown, m = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var g = o.getFullYear(), y = a.getFullYear(), h = g; h <= y; h++)
    m.push(Xf(Wy(/* @__PURE__ */ new Date()), h));
  var v = function(x) {
    var w = Xf(Ne(r), Number(x.target.value));
    e.onChange(w);
  }, b = (t = l?.Dropdown) !== null && t !== void 0 ? t : eb;
  return u.jsx(b, { name: "years", "aria-label": p(), className: c.dropdown_year, style: s.dropdown_year, onChange: v, value: r.getFullYear(), caption: d(r, { locale: i }), children: m.map(function(x) {
    return u.jsx("option", { value: x.getFullYear(), children: d(x, { locale: i }) }, x.getFullYear());
  }) });
}
function F1(e, t) {
  var r = nt(e), n = r[0], o = r[1], a = t === void 0 ? n : t;
  return [a, o];
}
function q1(e) {
  var t = e.month, r = e.defaultMonth, n = e.today, o = t || r || n || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && nn(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Le(a, l);
  }
  return i && nn(o, i) < 0 && (o = i), Ne(o);
}
function B1() {
  var e = pe(), t = q1(e), r = F1(t, e.month), n = r[0], o = r[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = Ne(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [n, a];
}
function W1(e, t) {
  for (var r = t.reverseMonths, n = t.numberOfMonths, o = Ne(e), a = Ne(Le(o, n)), i = nn(a, o), s = [], c = 0; c < i; c++) {
    var l = Le(o, c);
    s.push(l);
  }
  return r && (s = s.reverse()), s;
}
function H1(e, t) {
  if (!t.disableNavigation) {
    var r = t.toDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = Ne(e);
    if (!r)
      return Le(s, i);
    var c = nn(r, e);
    if (!(c < a))
      return Le(s, i);
  }
}
function V1(e, t) {
  if (!t.disableNavigation) {
    var r = t.fromDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = Ne(e);
    if (!r)
      return Le(s, -i);
    var c = nn(s, r);
    if (!(c <= 0))
      return Le(s, -i);
  }
}
var tb = Zt(void 0);
function z1(e) {
  var t = pe(), r = B1(), n = r[0], o = r[1], a = W1(n, t), i = H1(n, t), s = V1(n, t), c = function(p) {
    return a.some(function(m) {
      return Fu(p, m);
    });
  }, l = function(p, m) {
    c(p) || (m && Xy(p, m) ? o(Le(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, d = {
    currentMonth: n,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return u.jsx(tb.Provider, { value: d, children: e.children });
}
function Tn() {
  var e = Jt(tb);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Qf(e) {
  var t, r = pe(), n = r.classNames, o = r.styles, a = r.components, i = Tn().goToMonth, s = function(d) {
    i(Le(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a?.CaptionLabel) !== null && t !== void 0 ? t : Jy, l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: n.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: n.vhidden, children: l }), u.jsx(L1, { onChange: s, displayMonth: e.displayMonth }), u.jsx($1, { onChange: s, displayMonth: e.displayMonth })] });
}
function G1(e) {
  return u.jsx("svg", ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function U1(e) {
  return u.jsx("svg", ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var _o = Go(function(e, t) {
  var r = pe(), n = r.classNames, o = r.styles, a = [n.button_reset, n.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ae(ae({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), u.jsx("button", ae({}, e, { ref: t, type: "button", className: i, style: s }));
});
function K1(e) {
  var t, r, n = pe(), o = n.dir, a = n.locale, i = n.classNames, s = n.styles, c = n.labels, l = c.labelPrevious, d = c.labelNext, p = n.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var m = l(e.previousMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), y = d(e.nextMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), v = (t = p?.IconRight) !== null && t !== void 0 ? t : U1, b = (r = p?.IconLeft) !== null && r !== void 0 ? r : G1;
  return u.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && u.jsx(_o, { name: "previous-month", "aria-label": m, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(v, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && u.jsx(_o, { name: "next-month", "aria-label": y, className: h, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(v, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function Zf(e) {
  var t = pe().numberOfMonths, r = Tn(), n = r.previousMonth, o = r.nextMonth, a = r.goToMonth, i = r.displayMonths, s = i.findIndex(function(y) {
    return Fu(e.displayMonth, y);
  }), c = s === 0, l = s === i.length - 1, d = t > 1 && (c || !l), p = t > 1 && (l || !c), m = function() {
    n && a(n);
  }, g = function() {
    o && a(o);
  };
  return u.jsx(K1, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: p, nextMonth: o, previousMonth: n, onPreviousClick: m, onNextClick: g });
}
function Y1(e) {
  var t, r = pe(), n = r.classNames, o = r.disableNavigation, a = r.styles, i = r.captionLayout, s = r.components, c = (t = s?.CaptionLabel) !== null && t !== void 0 ? t : Jy, l;
  return o ? l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = u.jsx(Qf, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = u.jsxs(u.Fragment, { children: [u.jsx(Qf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(Zf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = u.jsxs(u.Fragment, { children: [u.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Zf, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: n.caption, style: a.caption, children: l });
}
function X1(e) {
  var t = pe(), r = t.footer, n = t.styles, o = t.classNames.tfoot;
  return r ? u.jsx("tfoot", { className: o, style: n.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: r }) }) }) : u.jsx(u.Fragment, {});
}
function Q1(e, t, r) {
  for (var n = r ? Gt(/* @__PURE__ */ new Date()) : at(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ee(n, a);
    o.push(i);
  }
  return o;
}
function Z1() {
  var e = pe(), t = e.classNames, r = e.styles, n = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Q1(o, a, i);
  return u.jsxs("tr", { style: r.head_row, className: t.head_row, children: [n && u.jsx("td", { style: r.head_cell, className: t.head_cell }), l.map(function(d, p) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: r.head_cell, "aria-label": c(d, { locale: o }), children: s(d, { locale: o }) }, p);
  })] });
}
function J1() {
  var e, t = pe(), r = t.classNames, n = t.styles, o = t.components, a = (e = o?.HeadRow) !== null && e !== void 0 ? e : Z1;
  return u.jsx("thead", { style: n.head, className: r.head, children: u.jsx(a, {}) });
}
function eM(e) {
  var t = pe(), r = t.locale, n = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: n(e.date, { locale: r }) });
}
var qu = Zt(void 0);
function tM(e) {
  if (!En(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(qu.Provider, { value: t, children: e.children });
  }
  return u.jsx(rM, { initialProps: e.initialProps, children: e.children });
}
function rM(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = t.min, a = t.max, i = function(l, d, p) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, l, d, p);
    var y = !!(d.selected && o && n?.length === o);
    if (!y) {
      var h = !!(!d.selected && a && n?.length === a);
      if (!h) {
        var v = n ? Qy([], n) : [];
        if (d.selected) {
          var b = v.findIndex(function(x) {
            return Te(l, x);
          });
          v.splice(b, 1);
        } else
          v.push(l);
        (g = t.onSelect) === null || g === void 0 || g.call(t, v, l, d, p);
      }
    }
  }, s = {
    disabled: []
  };
  n && s.disabled.push(function(l) {
    var d = a && n.length > a - 1, p = n.some(function(m) {
      return Te(m, l);
    });
    return !!(d && !p);
  });
  var c = {
    selected: n,
    onDayClick: i,
    modifiers: s
  };
  return u.jsx(qu.Provider, { value: c, children: r });
}
function Bu() {
  var e = Jt(qu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function nM(e, t) {
  var r = t || {}, n = r.from, o = r.to;
  return n && o ? Te(o, e) && Te(n, e) ? void 0 : Te(o, e) ? { from: o, to: void 0 } : Te(n, e) ? void 0 : Ol(n, e) ? { from: e, to: o } : { from: n, to: e } : o ? Ol(e, o) ? { from: o, to: e } : { from: e, to: o } : n ? Xy(e, n) ? { from: e, to: n } : { from: n, to: e } : { from: e, to: void 0 };
}
var Wu = Zt(void 0);
function oM(e) {
  if (!Rn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(Wu.Provider, { value: t, children: e.children });
  }
  return u.jsx(aM, { initialProps: e.initialProps, children: e.children });
}
function aM(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = n || {}, a = o.from, i = o.to, s = t.min, c = t.max, l = function(g, y, h) {
    var v, b;
    (v = t.onDayClick) === null || v === void 0 || v.call(t, g, y, h);
    var x = nM(g, n);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, g, y, h);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], i ? (d.range_end = [i], Te(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]) : i && (d.range_start = [i], d.range_end = [i]), s && (a && !i && d.disabled.push({
    after: ii(a, s - 1),
    before: Ee(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: Ee(a, s - 1)
  }), !a && i && d.disabled.push({
    after: ii(i, s - 1),
    before: Ee(i, s - 1)
  })), c) {
    if (a && !i && (d.disabled.push({
      before: Ee(a, -c + 1)
    }), d.disabled.push({
      after: Ee(a, c - 1)
    })), a && i) {
      var p = et(i, a) + 1, m = c - p;
      d.disabled.push({
        before: ii(a, m)
      }), d.disabled.push({
        after: Ee(i, m)
      });
    }
    !a && i && (d.disabled.push({
      before: Ee(i, -c + 1)
    }), d.disabled.push({
      after: Ee(i, c - 1)
    }));
  }
  return u.jsx(Wu.Provider, { value: { selected: n, onDayClick: l, modifiers: d }, children: r });
}
function Hu() {
  var e = Jt(Wu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function uo(e) {
  return Array.isArray(e) ? Qy([], e) : e !== void 0 ? [e] : [];
}
function iM(e) {
  var t = {};
  return Object.entries(e).forEach(function(r) {
    var n = r[0], o = r[1];
    t[n] = uo(o);
  }), t;
}
var Ve;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Ve || (Ve = {}));
var sM = Ve.Selected, mt = Ve.Disabled, cM = Ve.Hidden, lM = Ve.Today, ci = Ve.RangeEnd, li = Ve.RangeMiddle, ui = Ve.RangeStart, uM = Ve.Outside;
function dM(e, t, r) {
  var n, o = (n = {}, n[sM] = uo(e.selected), n[mt] = uo(e.disabled), n[cM] = uo(e.hidden), n[lM] = [e.today], n[ci] = [], n[li] = [], n[ui] = [], n[uM] = [], n);
  return e.fromDate && o[mt].push({ before: e.fromDate }), e.toDate && o[mt].push({ after: e.toDate }), En(e) ? o[mt] = o[mt].concat(t.modifiers[mt]) : Rn(e) && (o[mt] = o[mt].concat(r.modifiers[mt]), o[ui] = r.modifiers[ui], o[li] = r.modifiers[li], o[ci] = r.modifiers[ci]), o;
}
var rb = Zt(void 0);
function fM(e) {
  var t = pe(), r = Bu(), n = Hu(), o = dM(t, r, n), a = iM(t.modifiers), i = ae(ae({}, o), a);
  return u.jsx(rb.Provider, { value: i, children: e.children });
}
function nb() {
  var e = Jt(rb);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function pM(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function mM(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function hM(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function vM(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function gM(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function yM(e, t) {
  var r, n = t.from, o = t.to;
  if (n && o) {
    var a = et(o, n) < 0;
    a && (r = [o, n], n = r[0], o = r[1]);
    var i = et(e, n) >= 0 && et(o, e) >= 0;
    return i;
  }
  return o ? Te(o, e) : n ? Te(n, e) : !1;
}
function bM(e) {
  return Iu(e);
}
function xM(e) {
  return Array.isArray(e) && e.every(Iu);
}
function wM(e, t) {
  return t.some(function(r) {
    if (typeof r == "boolean")
      return r;
    if (bM(r))
      return Te(e, r);
    if (xM(r))
      return r.includes(e);
    if (mM(r))
      return yM(e, r);
    if (gM(r))
      return r.dayOfWeek.includes(e.getDay());
    if (pM(r)) {
      var n = et(r.before, e), o = et(r.after, e), a = n > 0, i = o < 0, s = Ol(r.before, r.after);
      return s ? i && a : a || i;
    }
    return hM(r) ? et(e, r.after) > 0 : vM(r) ? et(r.before, e) > 0 : typeof r == "function" ? r(e) : !1;
  });
}
function Vu(e, t, r) {
  var n = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return wM(e, s) && a.push(i), a;
  }, []), o = {};
  return n.forEach(function(a) {
    return o[a] = !0;
  }), r && !Fu(e, r) && (o.outside = !0), o;
}
function _M(e, t) {
  for (var r = Ne(e[0]), n = Lu(e[e.length - 1]), o, a, i = r; i <= n; ) {
    var s = Vu(i, t), c = !s.disabled && !s.hidden;
    if (!c) {
      i = Ee(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = Ee(i, 1);
  }
  return a || o;
}
var SM = 365;
function ob(e, t) {
  var r = t.moveBy, n = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, p = o.locale, m = {
    day: Ee,
    week: Al,
    month: Le,
    year: LT,
    startOfWeek: function(v) {
      return o.ISOWeek ? Gt(v) : at(v, { locale: p, weekStartsOn: c });
    },
    endOfWeek: function(v) {
      return o.ISOWeek ? Hy(v) : $u(v, { locale: p, weekStartsOn: c });
    }
  }, g = m[r](e, n === "after" ? 1 : -1);
  n === "before" && l ? g = $T([l, g]) : n === "after" && d && (g = FT([d, g]));
  var y = !0;
  if (a) {
    var h = Vu(g, a);
    y = !h.disabled && !h.hidden;
  }
  return y ? g : s.count > SM ? s.lastFocused : ob(g, {
    moveBy: r,
    direction: n,
    context: o,
    modifiers: a,
    retry: ae(ae({}, s), { count: s.count + 1 })
  });
}
var ab = Zt(void 0);
function CM(e) {
  var t = Tn(), r = nb(), n = nt(), o = n[0], a = n[1], i = nt(), s = i[0], c = i[1], l = _M(t.displayMonths, r), d = o ?? (s && t.isDateDisplayed(s)) ? s : l, p = function() {
    c(o), a(void 0);
  }, m = function(v) {
    a(v);
  }, g = pe(), y = function(v, b) {
    if (o) {
      var x = ob(o, {
        moveBy: v,
        direction: b,
        context: g,
        modifiers: r
      });
      Te(o, x) || (t.goToDate(x, o), m(x));
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
  return u.jsx(ab.Provider, { value: h, children: e.children });
}
function zu() {
  var e = Jt(ab);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function PM(e, t) {
  var r = nb(), n = Vu(e, r, t);
  return n;
}
var Gu = Zt(void 0);
function EM(e) {
  if (!oa(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(Gu.Provider, { value: t, children: e.children });
  }
  return u.jsx(RM, { initialProps: e.initialProps, children: e.children });
}
function RM(e) {
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
  return u.jsx(Gu.Provider, { value: o, children: r });
}
function ib() {
  var e = Jt(Gu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function TM(e, t) {
  var r = pe(), n = ib(), o = Bu(), a = Hu(), i = zu(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, d = i.focusWeekBefore, p = i.blur, m = i.focus, g = i.focusMonthBefore, y = i.focusMonthAfter, h = i.focusYearBefore, v = i.focusYearAfter, b = i.focusStartOfWeek, x = i.focusEndOfWeek, w = function(D) {
    var R, W, O, z;
    oa(r) ? (R = n.onDayClick) === null || R === void 0 || R.call(n, e, t, D) : En(r) ? (W = o.onDayClick) === null || W === void 0 || W.call(o, e, t, D) : Rn(r) ? (O = a.onDayClick) === null || O === void 0 || O.call(a, e, t, D) : (z = r.onDayClick) === null || z === void 0 || z.call(r, e, t, D);
  }, _ = function(D) {
    var R;
    m(e), (R = r.onDayFocus) === null || R === void 0 || R.call(r, e, t, D);
  }, S = function(D) {
    var R;
    p(), (R = r.onDayBlur) === null || R === void 0 || R.call(r, e, t, D);
  }, C = function(D) {
    var R;
    (R = r.onDayMouseEnter) === null || R === void 0 || R.call(r, e, t, D);
  }, P = function(D) {
    var R;
    (R = r.onDayMouseLeave) === null || R === void 0 || R.call(r, e, t, D);
  }, E = function(D) {
    var R;
    (R = r.onDayPointerEnter) === null || R === void 0 || R.call(r, e, t, D);
  }, T = function(D) {
    var R;
    (R = r.onDayPointerLeave) === null || R === void 0 || R.call(r, e, t, D);
  }, I = function(D) {
    var R;
    (R = r.onDayTouchCancel) === null || R === void 0 || R.call(r, e, t, D);
  }, j = function(D) {
    var R;
    (R = r.onDayTouchEnd) === null || R === void 0 || R.call(r, e, t, D);
  }, V = function(D) {
    var R;
    (R = r.onDayTouchMove) === null || R === void 0 || R.call(r, e, t, D);
  }, q = function(D) {
    var R;
    (R = r.onDayTouchStart) === null || R === void 0 || R.call(r, e, t, D);
  }, N = function(D) {
    var R;
    (R = r.onDayKeyUp) === null || R === void 0 || R.call(r, e, t, D);
  }, $ = function(D) {
    var R;
    switch (D.key) {
      case "ArrowLeft":
        D.preventDefault(), D.stopPropagation(), r.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        D.preventDefault(), D.stopPropagation(), r.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        D.preventDefault(), D.stopPropagation(), l();
        break;
      case "ArrowUp":
        D.preventDefault(), D.stopPropagation(), d();
        break;
      case "PageUp":
        D.preventDefault(), D.stopPropagation(), D.shiftKey ? h() : g();
        break;
      case "PageDown":
        D.preventDefault(), D.stopPropagation(), D.shiftKey ? v() : y();
        break;
      case "Home":
        D.preventDefault(), D.stopPropagation(), b();
        break;
      case "End":
        D.preventDefault(), D.stopPropagation(), x();
        break;
    }
    (R = r.onDayKeyDown) === null || R === void 0 || R.call(r, e, t, D);
  }, F = {
    onClick: w,
    onFocus: _,
    onBlur: S,
    onKeyDown: $,
    onKeyUp: N,
    onMouseEnter: C,
    onMouseLeave: P,
    onPointerEnter: E,
    onPointerLeave: T,
    onTouchCancel: I,
    onTouchEnd: j,
    onTouchMove: V,
    onTouchStart: q
  };
  return F;
}
function NM() {
  var e = pe(), t = ib(), r = Bu(), n = Hu(), o = oa(e) ? t.selected : En(e) ? r.selected : Rn(e) ? n.selected : void 0;
  return o;
}
function MM(e) {
  return Object.values(Ve).includes(e);
}
function AM(e, t) {
  var r = [e.classNames.day];
  return Object.keys(t).forEach(function(n) {
    var o = e.modifiersClassNames[n];
    if (o)
      r.push(o);
    else if (MM(n)) {
      var a = e.classNames["day_".concat(n)];
      a && r.push(a);
    }
  }), r;
}
function OM(e, t) {
  var r = ae({}, e.styles.day);
  return Object.keys(t).forEach(function(n) {
    var o;
    r = ae(ae({}, r), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[n]);
  }), r;
}
function jM(e, t, r) {
  var n, o, a, i = pe(), s = zu(), c = PM(e, t), l = TM(e, c), d = NM(), p = !!(i.onDayClick || i.mode !== "default");
  We(function() {
    var C;
    c.outside || s.focusedDay && p && Te(s.focusedDay, e) && ((C = r.current) === null || C === void 0 || C.focus());
  }, [
    s.focusedDay,
    e,
    r,
    p,
    c.outside
  ]);
  var m = AM(i, c).join(" "), g = OM(i, c), y = !!(c.outside && !i.showOutsideDays || c.hidden), h = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : eM, v = u.jsx(h, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: g,
    className: m,
    children: v,
    role: "gridcell"
  }, x = s.focusTarget && Te(s.focusTarget, e) && !c.outside, w = s.focusedDay && Te(s.focusedDay, e), _ = ae(ae(ae({}, b), (n = { disabled: c.disabled, role: "gridcell" }, n["aria-selected"] = c.selected, n.tabIndex = w || x ? 0 : -1, n)), l), S = {
    isButton: p,
    isHidden: y,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: _,
    divProps: b
  };
  return S;
}
function DM(e) {
  var t = br(null), r = jM(e.date, e.displayMonth, t);
  return r.isHidden ? u.jsx("div", { role: "gridcell" }) : r.isButton ? u.jsx(_o, ae({ name: "day", ref: t }, r.buttonProps)) : u.jsx("div", ae({}, r.divProps));
}
function kM(e) {
  var t = e.number, r = e.dates, n = pe(), o = n.onWeekNumberClick, a = n.styles, i = n.classNames, s = n.locale, c = n.labels.labelWeekNumber, l = n.formatters.formatWeekNumber, d = l(Number(t), { locale: s });
  if (!o)
    return u.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var p = c(Number(t), { locale: s }), m = function(g) {
    o(t, r, g);
  };
  return u.jsx(_o, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: m, children: d });
}
function IM(e) {
  var t, r, n = pe(), o = n.styles, a = n.classNames, i = n.showWeekNumber, s = n.components, c = (t = s?.Day) !== null && t !== void 0 ? t : DM, l = (r = s?.WeekNumber) !== null && r !== void 0 ? r : kM, d;
  return i && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(l, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(p) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(c, { displayMonth: e.displayMonth, date: p }) }, LN(p));
  })] });
}
function Jf(e, t, r) {
  for (var n = r?.ISOWeek ? Hy(t) : $u(t, r), o = r?.ISOWeek ? Gt(e) : at(e, r), a = et(n, o), i = [], s = 0; s <= a; s++)
    i.push(Ee(o, s));
  var c = i.reduce(function(l, d) {
    var p = r?.ISOWeek ? Gy(d) : Ky(d, r), m = l.find(function(g) {
      return g.weekNumber === p;
    });
    return m ? (m.dates.push(d), l) : (l.push({
      weekNumber: p,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function LM(e, t) {
  var r = Jf(Ne(e), Lu(e), t);
  if (t?.useFixedWeeks) {
    var n = FN(e, t);
    if (n < 6) {
      var o = r[r.length - 1], a = o.dates[o.dates.length - 1], i = Al(a, 6 - n), s = Jf(Al(a, 1), i, t);
      r.push.apply(r, s);
    }
  }
  return r;
}
function $M(e) {
  var t, r, n, o = pe(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, p = o.weekStartsOn, m = o.firstWeekContainsDate, g = o.ISOWeek, y = LM(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: g,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: m
  }), h = (t = d?.Head) !== null && t !== void 0 ? t : J1, v = (r = d?.Row) !== null && r !== void 0 ? r : IM, b = (n = d?.Footer) !== null && n !== void 0 ? n : X1;
  return u.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && u.jsx(h, {}), u.jsx("tbody", { className: i.tbody, style: s.tbody, children: y.map(function(x) {
    return u.jsx(v, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), u.jsx(b, { displayMonth: e.displayMonth })] });
}
function FM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var qM = FM() ? Qv : We, di = !1, BM = 0;
function ep() {
  return "react-day-picker-".concat(++BM);
}
function WM(e) {
  var t, r = e ?? (di ? ep() : null), n = nt(r), o = n[0], a = n[1];
  return qM(function() {
    o === null && a(ep());
  }, []), We(function() {
    di === !1 && (di = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function HM(e) {
  var t, r, n = pe(), o = n.dir, a = n.classNames, i = n.styles, s = n.components, c = Tn().displayMonths, l = WM(n.id ? "".concat(n.id, "-").concat(e.displayIndex) : void 0), d = n.id ? "".concat(n.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], m = i.month, g = e.displayIndex === 0, y = e.displayIndex === c.length - 1, h = !g && !y;
  o === "rtl" && (t = [g, y], y = t[0], g = t[1]), g && (p.push(a.caption_start), m = ae(ae({}, m), i.caption_start)), y && (p.push(a.caption_end), m = ae(ae({}, m), i.caption_end)), h && (p.push(a.caption_between), m = ae(ae({}, m), i.caption_between));
  var v = (r = s?.Caption) !== null && r !== void 0 ? r : Y1;
  return u.jsxs("div", { className: p.join(" "), style: m, children: [u.jsx(v, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx($M, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function VM(e) {
  var t = pe(), r = t.classNames, n = t.styles;
  return u.jsx("div", { className: r.months, style: n.months, children: e.children });
}
function zM(e) {
  var t, r, n = e.initialProps, o = pe(), a = zu(), i = Tn(), s = nt(!1), c = s[0], l = s[1];
  We(function() {
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
  var p = ae(ae({}, o.styles.root), o.style), m = Object.keys(n).filter(function(y) {
    return y.startsWith("data-");
  }).reduce(function(y, h) {
    var v;
    return ae(ae({}, y), (v = {}, v[h] = n[h], v));
  }, {}), g = (r = (t = n.components) === null || t === void 0 ? void 0 : t.Months) !== null && r !== void 0 ? r : VM;
  return u.jsx("div", ae({ className: d.join(" "), style: p, dir: o.dir, id: o.id, nonce: n.nonce, title: n.title, lang: n.lang }, m, { children: u.jsx(g, { children: i.displayMonths.map(function(y, h) {
    return u.jsx(HM, { displayIndex: h, displayMonth: y }, h);
  }) }) }));
}
function GM(e) {
  var t = e.children, r = v1(e, ["children"]);
  return u.jsx(k1, { initialProps: r, children: u.jsx(z1, { children: u.jsx(EM, { initialProps: r, children: u.jsx(tM, { initialProps: r, children: u.jsx(oM, { initialProps: r, children: u.jsx(fM, { children: u.jsx(CM, { children: t }) }) }) }) }) }) });
}
function sb(e) {
  return u.jsx(GM, ae({}, e, { children: u.jsx(zM, { initialProps: e }) }));
}
const UM = "(##) ####-####", KM = "(##) #####-####", YM = "#####-###", XM = "###.###.###-##", QM = "##.###.###/####-##", ZM = "###########", JM = "##.###.###-#", eA = "AAA#A##", tA = "###########", rA = "##############", cb = (e, t) => {
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
}, n4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: KM,
  CNH_MASK: ZM,
  CNPJ_MASK: QM,
  CPF_MASK: XM,
  PHONE_MASK: UM,
  PLATE_MASK: eA,
  RENAVAM_MASK: tA,
  RG_MASK: JM,
  RNTRC_MASK: rA,
  ZIP_CODE_MASK: YM,
  formatMask: cb
}, Symbol.toStringTag, { value: "Module" })), o4 = [
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
function lb({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    sb,
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
          gt({ variant: "outline" }),
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
          gt({ variant: "ghost" }),
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
        IconRight: ({ className: o, ...a }) => /* @__PURE__ */ u.jsx(xn, { className: M("h-4 w-4", o), ...a })
      },
      ...n
    }
  );
}
lb.displayName = "Calendar";
const nA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
nA.displayName = "Card";
const oA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M("flex flex-col space-y-1.5 p-2", e),
    ...t
  }
));
oA.displayName = "CardHeader";
const aA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
aA.displayName = "CardTitle";
const iA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: r,
    className: M("text-sm text-muted-foreground px-4", e),
    ...t
  }
));
iA.displayName = "CardDescription";
const sA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { ref: r, className: M("p-4", e), ...t }));
sA.displayName = "CardContent";
const cA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: M("flex items-center p-4 pt-0", e),
    ...t
  }
));
cA.displayName = "CardFooter";
function lA(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function tp(e) {
  return lA(e) || Array.isArray(e);
}
function uA() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Uu(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : r.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !tp(s) || !tp(c) ? s === c : Uu(s, c);
  });
}
function rp(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function dA(e, t) {
  if (e.length !== t.length) return !1;
  const r = rp(e), n = rp(t);
  return r.every((o, a) => {
    const i = n[a];
    return Uu(o, i);
  });
}
function Ku(e) {
  return typeof e == "number";
}
function jl(e) {
  return typeof e == "string";
}
function aa(e) {
  return typeof e == "boolean";
}
function np(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ye(e) {
  return Math.abs(e);
}
function Yu(e) {
  return Math.sign(e);
}
function Jr(e, t) {
  return ye(e - t);
}
function fA(e, t) {
  if (e === 0 || t === 0 || ye(e) <= ye(t)) return 0;
  const r = Jr(ye(e), ye(t));
  return ye(r / e);
}
function pA(e) {
  return Math.round(e * 100) / 100;
}
function on(e) {
  return an(e).map(Number);
}
function He(e) {
  return e[Nn(e)];
}
function Nn(e) {
  return Math.max(0, e.length - 1);
}
function Xu(e, t) {
  return t === Nn(e);
}
function op(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function an(e) {
  return Object.keys(e);
}
function ub(e, t) {
  return [e, t].reduce((r, n) => (an(n).forEach((o) => {
    const a = r[o], i = n[o], s = np(a) && np(i);
    r[o] = s ? ub(a, i) : i;
  }), r), {});
}
function Dl(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function mA(e, t) {
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
    return jl(e) ? r[e](c) : e(t, c, l);
  }
  return {
    measure: i
  };
}
function sn() {
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
function hA(e, t, r, n) {
  const o = sn(), a = 1e3 / 60;
  let i = null, s = 0, c = 0;
  function l() {
    o.add(e, "visibilitychange", () => {
      e.hidden && y();
    });
  }
  function d() {
    g(), o.clear();
  }
  function p(v) {
    if (!c) return;
    i || (i = v, r(), r());
    const b = v - i;
    for (i = v, s += b; s >= a; )
      r(), s -= a;
    const x = s / a;
    n(x), c && (c = t.requestAnimationFrame(p));
  }
  function m() {
    c || (c = t.requestAnimationFrame(p));
  }
  function g() {
    t.cancelAnimationFrame(c), i = null, s = 0, c = 0;
  }
  function y() {
    i = null, s = 0;
  }
  return {
    init: l,
    destroy: d,
    start: m,
    stop: g,
    update: r,
    render: n
  };
}
function vA(e, t) {
  const r = t === "rtl", n = e === "y", o = n ? "y" : "x", a = n ? "x" : "y", i = !n && r ? -1 : 1, s = d(), c = p();
  function l(y) {
    const {
      height: h,
      width: v
    } = y;
    return n ? h : v;
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
function Ut(e = 0, t = 0) {
  const r = ye(e - t);
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
function db(e, t, r) {
  const {
    constrain: n
  } = Ut(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return r ? ye((o + m) % o) : n(m);
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
    return db(e, s(), r);
  }
  const p = {
    get: s,
    set: c,
    add: l,
    clone: d
  };
  return p;
}
function gA(e, t, r, n, o, a, i, s, c, l, d, p, m, g, y, h, v, b, x) {
  const {
    cross: w,
    direction: _
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], C = {
    passive: !1
  }, P = sn(), E = sn(), T = Ut(50, 225).constrain(g.measure(20)), I = {
    mouse: 300,
    touch: 400
  }, j = {
    mouse: 500,
    touch: 600
  }, V = y ? 43 : 25;
  let q = !1, N = 0, $ = 0, F = !1, D = !1, R = !1, W = !1;
  function O(U) {
    if (!x) return;
    function ie(ge) {
      (aa(x) || x(U, ge)) && ee(ge);
    }
    const Y = t;
    P.add(Y, "dragstart", (ge) => ge.preventDefault(), C).add(Y, "touchmove", () => {
    }, C).add(Y, "touchend", () => {
    }).add(Y, "touchstart", ie).add(Y, "mousedown", ie).add(Y, "touchcancel", X).add(Y, "contextmenu", X).add(Y, "click", re, !0);
  }
  function z() {
    P.clear(), E.clear();
  }
  function A() {
    const U = W ? r : t;
    E.add(U, "touchmove", k, C).add(U, "touchend", X).add(U, "mousemove", k, C).add(U, "mouseup", X);
  }
  function B(U) {
    const ie = U.nodeName || "";
    return S.includes(ie);
  }
  function K() {
    return (y ? j : I)[W ? "mouse" : "touch"];
  }
  function G(U, ie) {
    const Y = p.add(Yu(U) * -1), ge = d.byDistance(U, !y).distance;
    return y || ye(U) < T ? ge : v && ie ? ge * 0.5 : d.byIndex(Y.get(), 0).distance;
  }
  function ee(U) {
    const ie = Dl(U, n);
    W = ie, R = y && ie && !U.buttons && q, q = Jr(o.get(), i.get()) >= 2, !(ie && U.button !== 0) && (B(U.target) || (F = !0, a.pointerDown(U), l.useFriction(0).useDuration(0), o.set(i), A(), N = a.readPoint(U), $ = a.readPoint(U, w), m.emit("pointerDown")));
  }
  function k(U) {
    if (!Dl(U, n) && U.touches.length >= 2) return X(U);
    const Y = a.readPoint(U), ge = a.readPoint(U, w), we = Jr(Y, N), Pe = Jr(ge, $);
    if (!D && !W && (!U.cancelable || (D = we > Pe, !D)))
      return X(U);
    const qt = a.pointerMove(U);
    we > h && (R = !0), l.useFriction(0.3).useDuration(0.75), s.start(), o.add(_(qt)), U.preventDefault();
  }
  function X(U) {
    const Y = d.byDistance(0, !1).index !== p.get(), ge = a.pointerUp(U) * K(), we = G(_(ge), Y), Pe = fA(ge, we), qt = V - 10 * Pe, _t = b + Pe / 50;
    D = !1, F = !1, E.clear(), l.useDuration(qt).useFriction(_t), c.distance(we, !y), W = !1, m.emit("pointerUp");
  }
  function re(U) {
    R && (U.stopPropagation(), U.preventDefault(), R = !1);
  }
  function oe() {
    return F;
  }
  return {
    init: O,
    destroy: z,
    pointerDown: oe
  };
}
function yA(e, t) {
  let n, o;
  function a(p) {
    return p.timeStamp;
  }
  function i(p, m) {
    const y = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Dl(p, t) ? p : p.touches[0])[y];
  }
  function s(p) {
    return n = p, o = p, i(p);
  }
  function c(p) {
    const m = i(p) - i(o), g = a(p) - a(n) > 170;
    return o = p, g && (n = p), m;
  }
  function l(p) {
    if (!n || !o) return 0;
    const m = i(o) - i(n), g = a(p) - a(n), y = a(p) - a(o) > 170, h = m / g;
    return g && !y && ye(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: l,
    readPoint: i
  };
}
function bA() {
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
function xA(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function wA(e, t, r, n, o, a, i) {
  const s = [e].concat(n);
  let c, l, d = [], p = !1;
  function m(v) {
    return o.measureSize(i.measure(v));
  }
  function g(v) {
    if (!a) return;
    l = m(e), d = n.map(m);
    function b(x) {
      for (const w of x) {
        if (p) return;
        const _ = w.target === e, S = n.indexOf(w.target), C = _ ? l : d[S], P = m(_ ? e : n[S]);
        if (ye(P - C) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((x) => {
      (aa(a) || a(v, x)) && b(x);
    }), r.requestAnimationFrame(() => {
      s.forEach((x) => c.observe(x));
    });
  }
  function y() {
    p = !0, c && c.disconnect();
  }
  return {
    init: g,
    destroy: y
  };
}
function _A(e, t, r, n, o, a) {
  let i = 0, s = 0, c = o, l = a, d = e.get(), p = 0;
  function m() {
    const C = n.get() - e.get(), P = !c;
    let E = 0;
    return P ? (i = 0, r.set(n), e.set(n), E = C) : (r.set(e), i += C / c, i *= l, d += i, e.add(i), E = d - p), s = Yu(E), p = d, S;
  }
  function g() {
    const C = n.get() - t.get();
    return ye(C) < 1e-3;
  }
  function y() {
    return c;
  }
  function h() {
    return s;
  }
  function v() {
    return i;
  }
  function b() {
    return w(o);
  }
  function x() {
    return _(a);
  }
  function w(C) {
    return c = C, S;
  }
  function _(C) {
    return l = C, S;
  }
  const S = {
    direction: h,
    duration: y,
    velocity: v,
    seek: m,
    settled: g,
    useBaseFriction: x,
    useBaseDuration: b,
    useFriction: _,
    useDuration: w
  };
  return S;
}
function SA(e, t, r, n, o) {
  const a = o.measure(10), i = o.measure(50), s = Ut(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function d(g) {
    if (!l()) return;
    const y = e.reachedMin(t.get()) ? "min" : "max", h = ye(e[y] - t.get()), v = r.get() - t.get(), b = s.constrain(h / i);
    r.subtract(v * b), !g && ye(v) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
  }
  function p(g) {
    c = !g;
  }
  return {
    shouldConstrain: l,
    constrain: d,
    toggleActive: p
  };
}
function CA(e, t, r, n, o) {
  const a = Ut(-t + e, 0), i = p(), s = d(), c = m();
  function l(y, h) {
    return Jr(y, h) <= 1;
  }
  function d() {
    const y = i[0], h = He(i), v = i.lastIndexOf(y), b = i.indexOf(h) + 1;
    return Ut(v, b);
  }
  function p() {
    return r.map((y, h) => {
      const {
        min: v,
        max: b
      } = a, x = a.constrain(y), w = !h, _ = Xu(r, h);
      return w ? b : _ || l(v, x) ? v : l(b, x) ? b : x;
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
function PA(e, t, r) {
  const n = t[0], o = r ? n - e : He(t);
  return {
    limit: Ut(o, n)
  };
}
function EA(e, t, r, n) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = Ut(a, i);
  function l(m) {
    return m === 1 ? c(r.get()) : m === -1 ? s(r.get()) : !1;
  }
  function d(m) {
    if (!l(m)) return;
    const g = e * (m * -1);
    n.forEach((y) => y.add(g));
  }
  return {
    loop: d
  };
}
function RA(e) {
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
function TA(e, t, r, n, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, c = p().map(t.measure), l = m(), d = g();
  function p() {
    return s(n).map((h) => He(h)[i] - h[0][a]).map(ye);
  }
  function m() {
    return n.map((h) => r[a] - h[a]).map((h) => -ye(h));
  }
  function g() {
    return s(l).map((h) => h[0]).map((h, v) => h + c[v]);
  }
  return {
    snaps: l,
    snapsAligned: d
  };
}
function NA(e, t, r, n, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = n, l = d();
  function d() {
    const m = i(a), g = !e || t === "keepSnaps";
    return r.length === 1 ? [a] : g ? m : m.slice(s, c).map((y, h, v) => {
      const b = !h, x = Xu(v, h);
      if (b) {
        const w = He(v[0]) + 1;
        return op(w);
      }
      if (x) {
        const w = Nn(a) - He(v)[0] + 1;
        return op(w, He(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: l
  };
}
function MA(e, t, r, n, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = n;
  function c(y) {
    return y.concat().sort((h, v) => ye(h) - ye(v))[0];
  }
  function l(y) {
    const h = e ? i(y) : s(y), v = t.map((x, w) => ({
      diff: d(x - h, 0),
      index: w
    })).sort((x, w) => ye(x.diff) - ye(w.diff)), {
      index: b
    } = v[0];
    return {
      index: b,
      distance: h
    };
  }
  function d(y, h) {
    const v = [y, y + r, y - r];
    if (!e) return y;
    if (!h) return c(v);
    const b = v.filter((x) => Yu(x) === h);
    return b.length ? c(b) : He(v) - r;
  }
  function p(y, h) {
    const v = t[y] - o.get(), b = d(v, h);
    return {
      index: y,
      distance: b
    };
  }
  function m(y, h) {
    const v = o.get() + y, {
      index: b,
      distance: x
    } = l(v), w = !e && a(v);
    if (!h || w) return {
      index: b,
      distance: y
    };
    const _ = t[b] - x, S = y + d(_, 0);
    return {
      index: b,
      distance: S
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: d
  };
}
function AA(e, t, r, n, o, a, i) {
  function s(p) {
    const m = p.distance, g = p.index !== t.get();
    a.add(m), m && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (r.set(t.get()), t.set(p.index), i.emit("select"));
  }
  function c(p, m) {
    const g = o.byDistance(p, m);
    s(g);
  }
  function l(p, m) {
    const g = t.clone().set(p), y = o.byIndex(g.get(), m);
    s(y);
  }
  return {
    distance: c,
    index: l
  };
}
function OA(e, t, r, n, o, a, i, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let l = 0;
  function d(g) {
    if (!s) return;
    function y(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const x = r.findIndex((w) => w.includes(h));
      Ku(x) && (o.useDuration(0), n.index(x, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((h, v) => {
      a.add(h, "focus", (b) => {
        (aa(s) || s(g, b)) && y(v);
      }, c);
    });
  }
  function p(g) {
    g.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function Ur(e) {
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
    return Ku(c) ? c : c.get();
  }
  return {
    get: r,
    set: n,
    add: o,
    subtract: a
  };
}
function fb(e, t) {
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
    const g = pA(e.direction(m));
    g !== o && (n.transform = r(g), o = g);
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
function jA(e, t, r, n, o, a, i, s, c) {
  const d = on(o), p = on(o).reverse(), m = b().concat(x());
  function g(P, E) {
    return P.reduce((T, I) => T - o[I], E);
  }
  function y(P, E) {
    return P.reduce((T, I) => g(T, E) > 0 ? T.concat([I]) : T, []);
  }
  function h(P) {
    return a.map((E, T) => ({
      start: E - n[T] + 0.5 + P,
      end: E + t - 0.5 + P
    }));
  }
  function v(P, E, T) {
    const I = h(E);
    return P.map((j) => {
      const V = T ? 0 : -r, q = T ? r : 0, N = T ? "end" : "start", $ = I[j][N];
      return {
        index: j,
        loopPoint: $,
        slideLocation: Ur(-1),
        translate: fb(e, c[j]),
        target: () => s.get() > $ ? V : q
      };
    });
  }
  function b() {
    const P = i[0], E = y(p, P);
    return v(E, r, !1);
  }
  function x() {
    const P = t - i[0] - 1, E = y(d, P);
    return v(E, -r, !0);
  }
  function w() {
    return m.every(({
      index: P
    }) => {
      const E = d.filter((T) => T !== P);
      return g(E, t) <= 0.1;
    });
  }
  function _() {
    m.forEach((P) => {
      const {
        target: E,
        translate: T,
        slideLocation: I
      } = P, j = E();
      j !== I.get() && (T.to(j), I.set(j));
    });
  }
  function S() {
    m.forEach((P) => P.translate.clear());
  }
  return {
    canLoop: w,
    clear: S,
    loop: _,
    loopPoints: m
  };
}
function DA(e, t, r) {
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
      o || (aa(r) || r(c, d)) && l(d);
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
function kA(e, t, r, n) {
  const o = {};
  let a = null, i = null, s, c = !1;
  function l() {
    s = new IntersectionObserver((y) => {
      c || (y.forEach((h) => {
        const v = t.indexOf(h.target);
        o[v] = h;
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
    return an(o).reduce((h, v) => {
      const b = parseInt(v), {
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
function IA(e, t, r, n, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: c
  } = e, l = r[0] && o, d = y(), p = h(), m = r.map(i), g = v();
  function y() {
    if (!l) return 0;
    const x = r[0];
    return ye(t[s] - x[s]);
  }
  function h() {
    if (!l) return 0;
    const x = a.getComputedStyle(He(n));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function v() {
    return r.map((x, w, _) => {
      const S = !w, C = Xu(_, w);
      return S ? m[w] + d : C ? m[w] + p : _[w + 1][s] - x[s];
    }).map(ye);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: g,
    startGap: d,
    endGap: p
  };
}
function LA(e, t, r, n, o, a, i, s, c) {
  const {
    startEdge: l,
    endEdge: d,
    direction: p
  } = e, m = Ku(r);
  function g(b, x) {
    return on(b).filter((w) => w % x === 0).map((w) => b.slice(w, w + x));
  }
  function y(b) {
    return b.length ? on(b).reduce((x, w, _) => {
      const S = He(x) || 0, C = S === 0, P = w === Nn(b), E = o[l] - a[S][l], T = o[l] - a[w][d], I = !n && C ? p(i) : 0, j = !n && P ? p(s) : 0, V = ye(T - j - (E + I));
      return _ && V > t + c && x.push(w), P && x.push(b.length), x;
    }, []).map((x, w, _) => {
      const S = Math.max(_[w - 1] || 0);
      return b.slice(S, x);
    }) : [];
  }
  function h(b) {
    return m ? g(b, r) : y(b);
  }
  return {
    groupSlides: h
  };
}
function $A(e, t, r, n, o, a, i) {
  const {
    align: s,
    axis: c,
    direction: l,
    startIndex: d,
    loop: p,
    duration: m,
    dragFree: g,
    dragThreshold: y,
    inViewThreshold: h,
    slidesToScroll: v,
    skipSnaps: b,
    containScroll: x,
    watchResize: w,
    watchSlides: _,
    watchDrag: S,
    watchFocus: C
  } = a, P = 2, E = bA(), T = E.measure(t), I = r.map(E.measure), j = vA(c, l), V = j.measureSize(T), q = xA(V), N = mA(s, V), $ = !p && !!x, F = p || !!x, {
    slideSizes: D,
    slideSizesWithGaps: R,
    startGap: W,
    endGap: O
  } = IA(j, T, I, r, F, o), z = LA(j, V, v, p, T, I, W, O, P), {
    snaps: A,
    snapsAligned: B
  } = TA(j, N, T, I, z), K = -He(A) + He(R), {
    snapsContained: G,
    scrollContainLimit: ee
  } = CA(V, K, B, x, P), k = $ ? G : B, {
    limit: X
  } = PA(K, k, p), re = db(Nn(k), d, p), oe = re.clone(), te = on(r), U = ({
    dragHandler: sr,
    scrollBody: Ua,
    scrollBounds: Ka,
    options: {
      loop: Vn
    }
  }) => {
    Vn || Ka.constrain(sr.pointerDown()), Ua.seek();
  }, ie = ({
    scrollBody: sr,
    translate: Ua,
    location: Ka,
    offsetLocation: Vn,
    previousLocation: _0,
    scrollLooper: S0,
    slideLooper: C0,
    dragHandler: P0,
    animation: E0,
    eventHandler: df,
    scrollBounds: R0,
    options: {
      loop: ff
    }
  }, pf) => {
    const mf = sr.settled(), T0 = !R0.shouldConstrain(), hf = ff ? mf : mf && T0, vf = hf && !P0.pointerDown();
    vf && E0.stop();
    const N0 = Ka.get() * pf + _0.get() * (1 - pf);
    Vn.set(N0), ff && (S0.loop(sr.direction()), C0.loop()), Ua.to(Vn.get()), vf && df.emit("settle"), hf || df.emit("scroll");
  }, Y = hA(n, o, () => U(Ga), (sr) => ie(Ga, sr)), ge = 0.68, we = k[re.get()], Pe = Ur(we), qt = Ur(we), _t = Ur(we), Bt = Ur(we), Br = _A(Pe, _t, qt, Bt, m, ge), Va = MA(p, k, K, X, Bt), za = AA(Y, re, oe, Br, Va, Bt, i), cf = RA(X), lf = sn(), x0 = kA(t, r, i, h), {
    slideRegistry: uf
  } = NA($, x, k, ee, z, te), w0 = OA(e, r, uf, za, Br, lf, i, C), Ga = {
    ownerDocument: n,
    ownerWindow: o,
    eventHandler: i,
    containerRect: T,
    slideRects: I,
    animation: Y,
    axis: j,
    dragHandler: gA(j, e, n, o, Bt, yA(j, o), Pe, Y, za, Br, Va, re, i, q, g, y, b, ge, S),
    eventStore: lf,
    percentOfView: q,
    index: re,
    indexPrevious: oe,
    limit: X,
    location: Pe,
    offsetLocation: _t,
    previousLocation: qt,
    options: a,
    resizeHandler: wA(t, i, o, r, j, w, E),
    scrollBody: Br,
    scrollBounds: SA(X, _t, Bt, Br, q),
    scrollLooper: EA(K, X, _t, [Pe, _t, qt, Bt]),
    scrollProgress: cf,
    scrollSnapList: k.map(cf.get),
    scrollSnaps: k,
    scrollTarget: Va,
    scrollTo: za,
    slideLooper: jA(j, V, K, D, R, A, k, _t, r),
    slideFocus: w0,
    slidesHandler: DA(t, i, _),
    slidesInView: x0,
    slideIndexes: te,
    slideRegistry: uf,
    slidesToScroll: z,
    target: Bt,
    translate: fb(j, t)
  };
  return Ga;
}
function FA() {
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
const qA = {
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
function BA(e) {
  function t(a, i) {
    return ub(a, i || {});
  }
  function r(a) {
    const i = a.breakpoints || {}, s = an(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, l) => t(c, l), {});
    return t(a, s);
  }
  function n(a) {
    return a.map((i) => an(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function WA(e) {
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
function So(e, t, r) {
  const n = e.ownerDocument, o = n.defaultView, a = BA(o), i = WA(a), s = sn(), c = FA(), {
    mergeOptions: l,
    optionsAtMedia: d,
    optionsMediaQueries: p
  } = a, {
    on: m,
    off: g,
    emit: y
  } = c, h = j;
  let v = !1, b, x = l(qA, So.globalOptions), w = l(x), _ = [], S, C, P;
  function E() {
    const {
      container: te,
      slides: U
    } = w;
    C = (jl(te) ? e.querySelector(te) : te) || e.children[0];
    const Y = jl(U) ? C.querySelectorAll(U) : U;
    P = [].slice.call(Y || C.children);
  }
  function T(te) {
    const U = $A(e, C, P, n, o, te, c);
    if (te.loop && !U.slideLooper.canLoop()) {
      const ie = Object.assign({}, te, {
        loop: !1
      });
      return T(ie);
    }
    return U;
  }
  function I(te, U) {
    v || (x = l(x, te), w = d(x), _ = U || _, E(), b = T(w), p([x, ..._.map(({
      options: ie
    }) => ie)]).forEach((ie) => s.add(ie, "change", j)), w.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(oe), b.eventHandler.init(oe), b.resizeHandler.init(oe), b.slidesHandler.init(oe), b.options.loop && b.slideLooper.loop(), C.offsetParent && P.length && b.dragHandler.init(oe), S = i.init(oe, _)));
  }
  function j(te, U) {
    const ie = z();
    V(), I(l({
      startIndex: ie
    }, te), U), c.emit("reInit");
  }
  function V() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), i.destroy(), s.clear();
  }
  function q() {
    v || (v = !0, s.clear(), V(), c.emit("destroy"), c.clear());
  }
  function N(te, U, ie) {
    !w.active || v || (b.scrollBody.useBaseFriction().useDuration(U === !0 ? 0 : w.duration), b.scrollTo.index(te, ie || 0));
  }
  function $(te) {
    const U = b.index.add(1).get();
    N(U, te, -1);
  }
  function F(te) {
    const U = b.index.add(-1).get();
    N(U, te, 1);
  }
  function D() {
    return b.index.add(1).get() !== z();
  }
  function R() {
    return b.index.add(-1).get() !== z();
  }
  function W() {
    return b.scrollSnapList;
  }
  function O() {
    return b.scrollProgress.get(b.offsetLocation.get());
  }
  function z() {
    return b.index.get();
  }
  function A() {
    return b.indexPrevious.get();
  }
  function B() {
    return b.slidesInView.get();
  }
  function K() {
    return b.slidesInView.get(!1);
  }
  function G() {
    return S;
  }
  function ee() {
    return b;
  }
  function k() {
    return e;
  }
  function X() {
    return C;
  }
  function re() {
    return P;
  }
  const oe = {
    canScrollNext: D,
    canScrollPrev: R,
    containerNode: X,
    internalEngine: ee,
    destroy: q,
    off: g,
    on: m,
    emit: y,
    plugins: G,
    previousScrollSnap: A,
    reInit: h,
    rootNode: k,
    scrollNext: $,
    scrollPrev: F,
    scrollProgress: O,
    scrollSnapList: W,
    scrollTo: N,
    selectedScrollSnap: z,
    slideNodes: re,
    slidesInView: B,
    slidesNotInView: K
  };
  return I(t, r), setTimeout(() => c.emit("init"), 0), oe;
}
So.globalOptions = void 0;
function Qu(e = {}, t = []) {
  const r = br(e), n = br(t), [o, a] = nt(), [i, s] = nt(), c = Zv(() => {
    o && o.reInit(r.current, n.current);
  }, [o]);
  return We(() => {
    Uu(r.current, e) || (r.current = e, c());
  }, [e, c]), We(() => {
    dA(n.current, t) || (n.current = t, c());
  }, [t, c]), We(() => {
    if (uA() && i) {
      So.globalOptions = Qu.globalOptions;
      const l = So(i, r.current, n.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Qu.globalOptions = void 0;
const pb = f.createContext(null);
function ia() {
  const e = f.useContext(pb);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const HA = f.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: n,
    className: o,
    children: a,
    ...i
  }, s) => {
    const [c, l] = Qu(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      n
    ), [d, p] = f.useState(!1), [m, g] = f.useState(!1), y = f.useCallback((x) => {
      x && (p(x.canScrollPrev()), g(x.canScrollNext()));
    }, []), h = f.useCallback(() => {
      l?.scrollPrev();
    }, [l]), v = f.useCallback(() => {
      l?.scrollNext();
    }, [l]), b = f.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), h()) : x.key === "ArrowRight" && (x.preventDefault(), v());
      },
      [h, v]
    );
    return f.useEffect(() => {
      !l || !r || r(l);
    }, [l, r]), f.useEffect(() => {
      if (l)
        return y(l), l.on("reInit", y), l.on("select", y), () => {
          l?.off("select", y);
        };
    }, [l, y]), /* @__PURE__ */ u.jsx(
      pb.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: v,
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
HA.displayName = "Carousel";
const VA = f.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: n, orientation: o } = ia();
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
VA.displayName = "CarouselContent";
const zA = f.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = ia();
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
zA.displayName = "CarouselItem";
const GA = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = ia();
  return /* @__PURE__ */ u.jsxs(
    Ir,
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
        /* @__PURE__ */ u.jsx(SP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
GA.displayName = "CarouselPrevious";
const UA = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = ia();
  return /* @__PURE__ */ u.jsxs(
    Ir,
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
        /* @__PURE__ */ u.jsx(PP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
UA.displayName = "CarouselNext";
var fi, ap;
function Ye() {
  if (ap) return fi;
  ap = 1;
  var e = Array.isArray;
  return fi = e, fi;
}
var pi, ip;
function mb() {
  if (ip) return pi;
  ip = 1;
  var e = typeof zn == "object" && zn && zn.Object === Object && zn;
  return pi = e, pi;
}
var mi, sp;
function ut() {
  if (sp) return mi;
  sp = 1;
  var e = mb(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return mi = r, mi;
}
var hi, cp;
function Mn() {
  if (cp) return hi;
  cp = 1;
  var e = ut(), t = e.Symbol;
  return hi = t, hi;
}
var vi, lp;
function KA() {
  if (lp) return vi;
  lp = 1;
  var e = Mn(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = e ? e.toStringTag : void 0;
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
  return vi = a, vi;
}
var gi, up;
function YA() {
  if (up) return gi;
  up = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return gi = r, gi;
}
var yi, dp;
function rr() {
  if (dp) return yi;
  dp = 1;
  var e = Mn(), t = KA(), r = YA(), n = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : n : a && a in Object(s) ? t(s) : r(s);
  }
  return yi = i, yi;
}
var bi, fp;
function nr() {
  if (fp) return bi;
  fp = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return bi = e, bi;
}
var xi, pp;
function An() {
  if (pp) return xi;
  pp = 1;
  var e = rr(), t = nr(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && e(o) == r;
  }
  return xi = n, xi;
}
var wi, mp;
function Zu() {
  if (mp) return wi;
  mp = 1;
  var e = Ye(), t = An(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return wi = o, wi;
}
var _i, hp;
function Ot() {
  if (hp) return _i;
  hp = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return _i = e, _i;
}
var Si, vp;
function Ju() {
  if (vp) return Si;
  vp = 1;
  var e = rr(), t = Ot(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == o || c == r || c == a;
  }
  return Si = i, Si;
}
var Ci, gp;
function XA() {
  if (gp) return Ci;
  gp = 1;
  var e = ut(), t = e["__core-js_shared__"];
  return Ci = t, Ci;
}
var Pi, yp;
function QA() {
  if (yp) return Pi;
  yp = 1;
  var e = XA(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Pi = r, Pi;
}
var Ei, bp;
function hb() {
  if (bp) return Ei;
  bp = 1;
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
  return Ei = r, Ei;
}
var Ri, xp;
function ZA() {
  if (xp) return Ri;
  xp = 1;
  var e = Ju(), t = QA(), r = Ot(), n = hb(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, d = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!r(m) || t(m))
      return !1;
    var g = e(m) ? d : a;
    return g.test(n(m));
  }
  return Ri = p, Ri;
}
var Ti, wp;
function JA() {
  if (wp) return Ti;
  wp = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Ti = e, Ti;
}
var Ni, _p;
function or() {
  if (_p) return Ni;
  _p = 1;
  var e = ZA(), t = JA();
  function r(n, o) {
    var a = t(n, o);
    return e(a) ? a : void 0;
  }
  return Ni = r, Ni;
}
var Mi, Sp;
function sa() {
  if (Sp) return Mi;
  Sp = 1;
  var e = or(), t = e(Object, "create");
  return Mi = t, Mi;
}
var Ai, Cp;
function eO() {
  if (Cp) return Ai;
  Cp = 1;
  var e = sa();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ai = t, Ai;
}
var Oi, Pp;
function tO() {
  if (Pp) return Oi;
  Pp = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Oi = e, Oi;
}
var ji, Ep;
function rO() {
  if (Ep) return ji;
  Ep = 1;
  var e = sa(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return ji = o, ji;
}
var Di, Rp;
function nO() {
  if (Rp) return Di;
  Rp = 1;
  var e = sa(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : r.call(a, o);
  }
  return Di = n, Di;
}
var ki, Tp;
function oO() {
  if (Tp) return ki;
  Tp = 1;
  var e = sa(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && o === void 0 ? t : o, this;
  }
  return ki = r, ki;
}
var Ii, Np;
function aO() {
  if (Np) return Ii;
  Np = 1;
  var e = eO(), t = tO(), r = rO(), n = nO(), o = oO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Ii = a, Ii;
}
var Li, Mp;
function iO() {
  if (Mp) return Li;
  Mp = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Li = e, Li;
}
var $i, Ap;
function ed() {
  if (Ap) return $i;
  Ap = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return $i = e, $i;
}
var Fi, Op;
function ca() {
  if (Op) return Fi;
  Op = 1;
  var e = ed();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (e(r[o][0], n))
        return o;
    return -1;
  }
  return Fi = t, Fi;
}
var qi, jp;
function sO() {
  if (jp) return qi;
  jp = 1;
  var e = ca(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return qi = n, qi;
}
var Bi, Dp;
function cO() {
  if (Dp) return Bi;
  Dp = 1;
  var e = ca();
  function t(r) {
    var n = this.__data__, o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return Bi = t, Bi;
}
var Wi, kp;
function lO() {
  if (kp) return Wi;
  kp = 1;
  var e = ca();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Wi = t, Wi;
}
var Hi, Ip;
function uO() {
  if (Ip) return Hi;
  Ip = 1;
  var e = ca();
  function t(r, n) {
    var o = this.__data__, a = e(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return Hi = t, Hi;
}
var Vi, Lp;
function la() {
  if (Lp) return Vi;
  Lp = 1;
  var e = iO(), t = sO(), r = cO(), n = lO(), o = uO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Vi = a, Vi;
}
var zi, $p;
function td() {
  if ($p) return zi;
  $p = 1;
  var e = or(), t = ut(), r = e(t, "Map");
  return zi = r, zi;
}
var Gi, Fp;
function dO() {
  if (Fp) return Gi;
  Fp = 1;
  var e = aO(), t = la(), r = td();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Gi = n, Gi;
}
var Ui, qp;
function fO() {
  if (qp) return Ui;
  qp = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Ui = e, Ui;
}
var Ki, Bp;
function ua() {
  if (Bp) return Ki;
  Bp = 1;
  var e = fO();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return Ki = t, Ki;
}
var Yi, Wp;
function pO() {
  if (Wp) return Yi;
  Wp = 1;
  var e = ua();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Yi = t, Yi;
}
var Xi, Hp;
function mO() {
  if (Hp) return Xi;
  Hp = 1;
  var e = ua();
  function t(r) {
    return e(this, r).get(r);
  }
  return Xi = t, Xi;
}
var Qi, Vp;
function hO() {
  if (Vp) return Qi;
  Vp = 1;
  var e = ua();
  function t(r) {
    return e(this, r).has(r);
  }
  return Qi = t, Qi;
}
var Zi, zp;
function vO() {
  if (zp) return Zi;
  zp = 1;
  var e = ua();
  function t(r, n) {
    var o = e(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return Zi = t, Zi;
}
var Ji, Gp;
function rd() {
  if (Gp) return Ji;
  Gp = 1;
  var e = dO(), t = pO(), r = mO(), n = hO(), o = vO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Ji = a, Ji;
}
var es, Up;
function gO() {
  if (Up) return es;
  Up = 1;
  var e = rd(), t = "Expected a function";
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
  return r.Cache = e, es = r, es;
}
var ts, Kp;
function yO() {
  if (Kp) return ts;
  Kp = 1;
  var e = gO(), t = 500;
  function r(n) {
    var o = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return ts = r, ts;
}
var rs, Yp;
function bO() {
  if (Yp) return rs;
  Yp = 1;
  var e = yO(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(r, "$1") : s || i);
    }), a;
  });
  return rs = n, rs;
}
var ns, Xp;
function vb() {
  if (Xp) return ns;
  Xp = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return ns = e, ns;
}
var os, Qp;
function xO() {
  if (Qp) return os;
  Qp = 1;
  var e = Mn(), t = vb(), r = Ye(), n = An(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
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
  return os = i, os;
}
var as, Zp;
function gb() {
  if (Zp) return as;
  Zp = 1;
  var e = xO();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return as = t, as;
}
var is, Jp;
function yb() {
  if (Jp) return is;
  Jp = 1;
  var e = Ye(), t = Zu(), r = bO(), n = gb();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return is = o, is;
}
var ss, em;
function da() {
  if (em) return ss;
  em = 1;
  var e = An();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ss = t, ss;
}
var cs, tm;
function nd() {
  if (tm) return cs;
  tm = 1;
  var e = yb(), t = da();
  function r(n, o) {
    o = e(o, n);
    for (var a = 0, i = o.length; n != null && a < i; )
      n = n[t(o[a++])];
    return a && a == i ? n : void 0;
  }
  return cs = r, cs;
}
var ls, rm;
function bb() {
  if (rm) return ls;
  rm = 1;
  var e = nd();
  function t(r, n, o) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? o : a;
  }
  return ls = t, ls;
}
bb();
var us, nm;
function wO() {
  if (nm) return us;
  nm = 1;
  function e(t) {
    return t == null;
  }
  return us = e, us;
}
var _O = wO();
const SO = /* @__PURE__ */ st(_O);
var ds, om;
function CO() {
  if (om) return ds;
  om = 1;
  var e = rr(), t = Ye(), r = nr(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return ds = o, ds;
}
var PO = CO();
const xb = /* @__PURE__ */ st(PO);
var EO = Ju();
const Co = /* @__PURE__ */ st(EO);
var RO = Ot();
const wb = /* @__PURE__ */ st(RO);
var to = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var am;
function TO() {
  if (am) return ce;
  am = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var b = v.$$typeof;
      switch (b) {
        case e:
          switch (v = v.type, v) {
            case r:
            case o:
            case n:
            case l:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case i:
                case c:
                case m:
                case p:
                case a:
                  return v;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return ce.ContextConsumer = i, ce.ContextProvider = a, ce.Element = e, ce.ForwardRef = c, ce.Fragment = r, ce.Lazy = m, ce.Memo = p, ce.Portal = t, ce.Profiler = o, ce.StrictMode = n, ce.Suspense = l, ce.SuspenseList = d, ce.isAsyncMode = function() {
    return !1;
  }, ce.isConcurrentMode = function() {
    return !1;
  }, ce.isContextConsumer = function(v) {
    return h(v) === i;
  }, ce.isContextProvider = function(v) {
    return h(v) === a;
  }, ce.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ce.isForwardRef = function(v) {
    return h(v) === c;
  }, ce.isFragment = function(v) {
    return h(v) === r;
  }, ce.isLazy = function(v) {
    return h(v) === m;
  }, ce.isMemo = function(v) {
    return h(v) === p;
  }, ce.isPortal = function(v) {
    return h(v) === t;
  }, ce.isProfiler = function(v) {
    return h(v) === o;
  }, ce.isStrictMode = function(v) {
    return h(v) === n;
  }, ce.isSuspense = function(v) {
    return h(v) === l;
  }, ce.isSuspenseList = function(v) {
    return h(v) === d;
  }, ce.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === l || v === d || v === g || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === p || v.$$typeof === a || v.$$typeof === i || v.$$typeof === c || v.$$typeof === y || v.getModuleId !== void 0);
  }, ce.typeOf = h, ce;
}
var le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var im;
function NO() {
  return im || (im = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, h = !1, v = !1, b = !1, x = !1, w;
    w = Symbol.for("react.module.reference");
    function _(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === o || x || Y === n || Y === l || Y === d || b || Y === g || y || h || v || typeof Y == "object" && Y !== null && (Y.$$typeof === m || Y.$$typeof === p || Y.$$typeof === a || Y.$$typeof === i || Y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === w || Y.getModuleId !== void 0));
    }
    function S(Y) {
      if (typeof Y == "object" && Y !== null) {
        var ge = Y.$$typeof;
        switch (ge) {
          case e:
            var we = Y.type;
            switch (we) {
              case r:
              case o:
              case n:
              case l:
              case d:
                return we;
              default:
                var Pe = we && we.$$typeof;
                switch (Pe) {
                  case s:
                  case i:
                  case c:
                  case m:
                  case p:
                  case a:
                    return Pe;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var C = i, P = a, E = e, T = c, I = r, j = m, V = p, q = t, N = o, $ = n, F = l, D = d, R = !1, W = !1;
    function O(Y) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(Y) {
      return W || (W = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A(Y) {
      return S(Y) === i;
    }
    function B(Y) {
      return S(Y) === a;
    }
    function K(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function G(Y) {
      return S(Y) === c;
    }
    function ee(Y) {
      return S(Y) === r;
    }
    function k(Y) {
      return S(Y) === m;
    }
    function X(Y) {
      return S(Y) === p;
    }
    function re(Y) {
      return S(Y) === t;
    }
    function oe(Y) {
      return S(Y) === o;
    }
    function te(Y) {
      return S(Y) === n;
    }
    function U(Y) {
      return S(Y) === l;
    }
    function ie(Y) {
      return S(Y) === d;
    }
    le.ContextConsumer = C, le.ContextProvider = P, le.Element = E, le.ForwardRef = T, le.Fragment = I, le.Lazy = j, le.Memo = V, le.Portal = q, le.Profiler = N, le.StrictMode = $, le.Suspense = F, le.SuspenseList = D, le.isAsyncMode = O, le.isConcurrentMode = z, le.isContextConsumer = A, le.isContextProvider = B, le.isElement = K, le.isForwardRef = G, le.isFragment = ee, le.isLazy = k, le.isMemo = X, le.isPortal = re, le.isProfiler = oe, le.isStrictMode = te, le.isSuspense = U, le.isSuspenseList = ie, le.isValidElementType = _, le.typeOf = S;
  }()), le;
}
var sm;
function MO() {
  return sm || (sm = 1, process.env.NODE_ENV === "production" ? to.exports = TO() : to.exports = NO()), to.exports;
}
MO();
var fs, cm;
function _b() {
  if (cm) return fs;
  cm = 1;
  var e = rr(), t = nr(), r = "[object Number]";
  function n(o) {
    return typeof o == "number" || t(o) && e(o) == r;
  }
  return fs = n, fs;
}
var ps, lm;
function AO() {
  if (lm) return ps;
  lm = 1;
  var e = _b();
  function t(r) {
    return e(r) && r != +r;
  }
  return ps = t, ps;
}
var OO = AO();
const jO = /* @__PURE__ */ st(OO);
var DO = _b();
const kO = /* @__PURE__ */ st(DO);
var ro = function(t) {
  return xb(t) && t.indexOf("%") === t.length - 1;
}, Be = function(t) {
  return kO(t) && !jO(t);
}, Po = function(t) {
  return Be(t) || xb(t);
};
function kl(e) {
  "@babel/helpers - typeof";
  return kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kl(e);
}
var IO = ["viewBox", "children"], LO = [
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
], um = ["points", "pathLength"], ms = {
  svg: IO,
  polygon: um,
  polyline: um
}, Sb = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], $O = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, FO = function(t, r, n) {
  if (!wb(t) || kl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    Sb.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = $O(i, r, n));
  }), o;
}, qO = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, BO = function(t, r, n, o) {
  var a, i = (a = ms?.[o]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !Co(t) && (o && i.includes(r) || LO.includes(r)) || Sb.includes(r);
}, Cb = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ M0(t) && (o = t.props), !wb(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    BO((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, WO = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Il() {
  return Il = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Il.apply(this, arguments);
}
function HO(e, t) {
  if (e == null) return {};
  var r = VO(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function VO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zO(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, l = HO(e, WO), d = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, p = vt("recharts-surface", a);
  return /* @__PURE__ */ Q.createElement("svg", Il({}, Cb(l, !0, "svg"), {
    className: p,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ Q.createElement("title", null, s), /* @__PURE__ */ Q.createElement("desc", null, c), t);
}
var GO = process.env.NODE_ENV !== "production", fo = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (GO && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, hs, dm;
function UO() {
  if (dm) return hs;
  dm = 1;
  function e(t, r, n) {
    var o = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + r];
    return i;
  }
  return hs = e, hs;
}
var vs, fm;
function KO() {
  if (fm) return vs;
  fm = 1;
  var e = UO();
  function t(r, n, o) {
    var a = r.length;
    return o = o === void 0 ? a : o, !n && o >= a ? r : e(r, n, o);
  }
  return vs = t, vs;
}
var gs, pm;
function Pb() {
  if (pm) return gs;
  pm = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function c(l) {
    return s.test(l);
  }
  return gs = c, gs;
}
var ys, mm;
function YO() {
  if (mm) return ys;
  mm = 1;
  function e(t) {
    return t.split("");
  }
  return ys = e, ys;
}
var bs, hm;
function XO() {
  if (hm) return bs;
  hm = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", c = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + c + ")", d = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", y = l + "?", h = "[" + a + "]?", v = "(?:" + g + "(?:" + [d, p, m].join("|") + ")" + h + y + ")*", b = h + y + v, x = "(?:" + [d + s + "?", s, p, m, i].join("|") + ")", w = RegExp(c + "(?=" + c + ")|" + x + b, "g");
  function _(S) {
    return S.match(w) || [];
  }
  return bs = _, bs;
}
var xs, vm;
function QO() {
  if (vm) return xs;
  vm = 1;
  var e = YO(), t = Pb(), r = XO();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return xs = n, xs;
}
var ws, gm;
function ZO() {
  if (gm) return ws;
  gm = 1;
  var e = KO(), t = Pb(), r = QO(), n = gb();
  function o(a) {
    return function(i) {
      i = n(i);
      var s = t(i) ? r(i) : void 0, c = s ? s[0] : i.charAt(0), l = s ? e(s, 1).join("") : i.slice(1);
      return c[a]() + l;
    };
  }
  return ws = o, ws;
}
var _s, ym;
function JO() {
  if (ym) return _s;
  ym = 1;
  var e = ZO(), t = e("toUpperCase");
  return _s = t, _s;
}
var ej = JO();
const Eb = /* @__PURE__ */ st(ej);
function no(e) {
  return function() {
    return e;
  };
}
const Rb = Math.cos, Eo = Math.sin, Xe = Math.sqrt, Ro = Math.PI, fa = 2 * Ro, Ll = Math.PI, $l = 2 * Ll, Vt = 1e-6, tj = $l - Vt;
function Tb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function rj(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Tb;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class nj {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Tb : rj(t);
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
    else if (m > Vt) if (!(Math.abs(p * c - l * d) > Vt) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - i, y = o - s, h = c * c + l * l, v = g * g + y * y, b = Math.sqrt(h), x = Math.sqrt(m), w = a * Math.tan((Ll - Math.acos((h + m - v) / (2 * b * x))) / 2), _ = w / x, S = w / b;
      Math.abs(_ - 1) > Vt && this._append`L${t + _ * d},${r + _ * p}`, this._append`A${a},${a},0,0,${+(p * g > d * y)},${this._x1 = t + S * c},${this._y1 = r + S * l}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), l = t + s, d = r + c, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${d}` : (Math.abs(this._x1 - l) > Vt || Math.abs(this._y1 - d) > Vt) && this._append`L${l},${d}`, n && (m < 0 && (m = m % $l + $l), m > tj ? this._append`A${n},${n},0,1,${p},${t - s},${r - c}A${n},${n},0,1,${p},${this._x1 = l},${this._y1 = d}` : m > Vt && this._append`A${n},${n},0,${+(m >= Ll)},${p},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function oj(e) {
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
  }, () => new nj(t);
}
const od = {
  draw(e, t) {
    const r = Xe(t / Ro);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, fa);
  }
}, aj = {
  draw(e, t) {
    const r = Xe(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Nb = Xe(1 / 3), ij = Nb * 2, sj = {
  draw(e, t) {
    const r = Xe(t / ij), n = r * Nb;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, cj = {
  draw(e, t) {
    const r = Xe(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, lj = 0.8908130915292852, Mb = Eo(Ro / 10) / Eo(7 * Ro / 10), uj = Eo(fa / 10) * Mb, dj = -Rb(fa / 10) * Mb, fj = {
  draw(e, t) {
    const r = Xe(t * lj), n = uj * r, o = dj * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = fa * a / 5, s = Rb(i), c = Eo(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, Ss = Xe(3), pj = {
  draw(e, t) {
    const r = -Xe(t / (Ss * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ss * r, -r), e.lineTo(Ss * r, -r), e.closePath();
  }
}, je = -0.5, De = Xe(3) / 2, Fl = 1 / Xe(12), mj = (Fl / 2 + 1) * 3, hj = {
  draw(e, t) {
    const r = Xe(t / mj), n = r / 2, o = r * Fl, a = n, i = r * Fl + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(je * n - De * o, De * n + je * o), e.lineTo(je * a - De * i, De * a + je * i), e.lineTo(je * s - De * c, De * s + je * c), e.lineTo(je * n + De * o, je * o - De * n), e.lineTo(je * a + De * i, je * i - De * a), e.lineTo(je * s + De * c, je * c - De * s), e.closePath();
  }
};
function vj(e, t) {
  let r = null, n = oj(o);
  e = typeof e == "function" ? e : no(e || od), t = typeof t == "function" ? t : no(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : no(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : no(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
var gj = ["type", "size", "sizeType"];
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
function bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(r), !0).forEach(function(n) {
      yj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yj(e, t, r) {
  return t = bj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bj(e) {
  var t = xj(e, "string");
  return cn(t) == "symbol" ? t : t + "";
}
function xj(e, t) {
  if (cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wj(e, t) {
  if (e == null) return {};
  var r = _j(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _j(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ab = {
  symbolCircle: od,
  symbolCross: aj,
  symbolDiamond: sj,
  symbolSquare: cj,
  symbolStar: fj,
  symbolTriangle: pj,
  symbolWye: hj
}, Sj = Math.PI / 180, Cj = function(t) {
  var r = "symbol".concat(Eb(t));
  return Ab[r] || od;
}, Pj = function(t, r, n) {
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
      var o = 18 * Sj;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Ej = function(t, r) {
  Ab["symbol".concat(Eb(t))] = r;
}, Ob = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = wj(t, gj), l = xm(xm({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var v = Cj(n), b = vj().type(v).size(Pj(a, s, n));
    return b();
  }, p = l.className, m = l.cx, g = l.cy, y = Cb(l, !0);
  return m === +m && g === +g && a === +a ? /* @__PURE__ */ Q.createElement("path", ql({}, y, {
    className: vt("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Ob.registerSymbol = Ej;
function _r(e) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e);
}
function Bl() {
  return Bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bl.apply(this, arguments);
}
function wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(r), !0).forEach(function(n) {
      ln(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Db(n.key), n);
  }
}
function Mj(e, t, r) {
  return t && Nj(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Aj(e, t, r) {
  return t = To(t), Oj(e, jb() ? Reflect.construct(t, r || [], To(e).constructor) : t.apply(e, r));
}
function Oj(e, t) {
  if (t && (_r(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jj(e);
}
function jj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jb = function() {
    return !!e;
  })();
}
function To(e) {
  return To = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, To(e);
}
function Dj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wl(e, t);
}
function Wl(e, t) {
  return Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Wl(e, t);
}
function ln(e, t, r) {
  return t = Db(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Db(e) {
  var t = kj(e, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function kj(e, t) {
  if (_r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ke = 32, ad = /* @__PURE__ */ function(e) {
  function t() {
    return Tj(this, t), Aj(this, t, arguments);
  }
  return Dj(t, e), Mj(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var o = this.props.inactiveColor, a = ke / 2, i = ke / 6, s = ke / 3, c = n.inactive ? o : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ Q.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: ke,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ Q.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(ke, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ Q.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(ke / 8, "h").concat(ke, "v").concat(ke * 3 / 4, "h").concat(-ke, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ Q.isValidElement(n.legendIcon)) {
          var l = Rj({}, n);
          return delete l.legendIcon, /* @__PURE__ */ Q.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ Q.createElement(Ob, {
          fill: c,
          cx: a,
          cy: a,
          size: ke,
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
        width: ke,
        height: ke
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, y) {
        var h = g.formatter || c, v = vt(ln(ln({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var b = Co(g.value) ? null : g.value;
        fo(
          !Co(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = g.inactive ? l : g.color;
        return /* @__PURE__ */ Q.createElement("li", Bl({
          className: v,
          style: p,
          key: "legend-item-".concat(y)
        }, FO(n.props, g, y)), /* @__PURE__ */ Q.createElement(zO, {
          width: i,
          height: i,
          viewBox: d,
          style: m
        }, n.renderIcon(g)), /* @__PURE__ */ Q.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, h ? h(b, g, y) : b));
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
      return /* @__PURE__ */ Q.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(Uo);
ln(ad, "displayName", "Legend");
ln(ad, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Cs, _m;
function Ij() {
  if (_m) return Cs;
  _m = 1;
  var e = la();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Cs = t, Cs;
}
var Ps, Sm;
function Lj() {
  if (Sm) return Ps;
  Sm = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Ps = e, Ps;
}
var Es, Cm;
function $j() {
  if (Cm) return Es;
  Cm = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Es = e, Es;
}
var Rs, Pm;
function Fj() {
  if (Pm) return Rs;
  Pm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Rs = e, Rs;
}
var Ts, Em;
function qj() {
  if (Em) return Ts;
  Em = 1;
  var e = la(), t = td(), r = rd(), n = 200;
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
  return Ts = o, Ts;
}
var Ns, Rm;
function kb() {
  if (Rm) return Ns;
  Rm = 1;
  var e = la(), t = Ij(), r = Lj(), n = $j(), o = Fj(), a = qj();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = r, i.prototype.get = n, i.prototype.has = o, i.prototype.set = a, Ns = i, Ns;
}
var Ms, Tm;
function Bj() {
  if (Tm) return Ms;
  Tm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ms = t, Ms;
}
var As, Nm;
function Wj() {
  if (Nm) return As;
  Nm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return As = e, As;
}
var Os, Mm;
function Ib() {
  if (Mm) return Os;
  Mm = 1;
  var e = rd(), t = Bj(), r = Wj();
  function n(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Os = n, Os;
}
var js, Am;
function Hj() {
  if (Am) return js;
  Am = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return js = e, js;
}
var Ds, Om;
function Lb() {
  if (Om) return Ds;
  Om = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Ds = e, Ds;
}
var ks, jm;
function $b() {
  if (jm) return ks;
  jm = 1;
  var e = Ib(), t = Hj(), r = Lb(), n = 1, o = 2;
  function a(i, s, c, l, d, p) {
    var m = c & n, g = i.length, y = s.length;
    if (g != y && !(m && y > g))
      return !1;
    var h = p.get(i), v = p.get(s);
    if (h && v)
      return h == s && v == i;
    var b = -1, x = !0, w = c & o ? new e() : void 0;
    for (p.set(i, s), p.set(s, i); ++b < g; ) {
      var _ = i[b], S = s[b];
      if (l)
        var C = m ? l(S, _, b, s, i, p) : l(_, S, b, i, s, p);
      if (C !== void 0) {
        if (C)
          continue;
        x = !1;
        break;
      }
      if (w) {
        if (!t(s, function(P, E) {
          if (!r(w, E) && (_ === P || d(_, P, c, l, p)))
            return w.push(E);
        })) {
          x = !1;
          break;
        }
      } else if (!(_ === S || d(_, S, c, l, p))) {
        x = !1;
        break;
      }
    }
    return p.delete(i), p.delete(s), x;
  }
  return ks = a, ks;
}
var Is, Dm;
function Vj() {
  if (Dm) return Is;
  Dm = 1;
  var e = ut(), t = e.Uint8Array;
  return Is = t, Is;
}
var Ls, km;
function zj() {
  if (km) return Ls;
  km = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return Ls = e, Ls;
}
var $s, Im;
function id() {
  if (Im) return $s;
  Im = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return $s = e, $s;
}
var Fs, Lm;
function Gj() {
  if (Lm) return Fs;
  Lm = 1;
  var e = Mn(), t = Vj(), r = ed(), n = $b(), o = zj(), a = id(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", d = "[object Error]", p = "[object Map]", m = "[object Number]", g = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, _ = w ? w.valueOf : void 0;
  function S(C, P, E, T, I, j, V) {
    switch (E) {
      case x:
        if (C.byteLength != P.byteLength || C.byteOffset != P.byteOffset)
          return !1;
        C = C.buffer, P = P.buffer;
      case b:
        return !(C.byteLength != P.byteLength || !j(new t(C), new t(P)));
      case c:
      case l:
      case m:
        return r(+C, +P);
      case d:
        return C.name == P.name && C.message == P.message;
      case g:
      case h:
        return C == P + "";
      case p:
        var q = o;
      case y:
        var N = T & i;
        if (q || (q = a), C.size != P.size && !N)
          return !1;
        var $ = V.get(C);
        if ($)
          return $ == P;
        T |= s, V.set(C, P);
        var F = n(q(C), q(P), T, I, j, V);
        return V.delete(C), F;
      case v:
        if (_)
          return _.call(C) == _.call(P);
    }
    return !1;
  }
  return Fs = S, Fs;
}
var qs, $m;
function Fb() {
  if ($m) return qs;
  $m = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return qs = e, qs;
}
var Bs, Fm;
function Uj() {
  if (Fm) return Bs;
  Fm = 1;
  var e = Fb(), t = Ye();
  function r(n, o, a) {
    var i = o(n);
    return t(n) ? i : e(i, a(n));
  }
  return Bs = r, Bs;
}
var Ws, qm;
function Kj() {
  if (qm) return Ws;
  qm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++n < o; ) {
      var s = t[n];
      r(s, n, t) && (i[a++] = s);
    }
    return i;
  }
  return Ws = e, Ws;
}
var Hs, Bm;
function Yj() {
  if (Bm) return Hs;
  Bm = 1;
  function e() {
    return [];
  }
  return Hs = e, Hs;
}
var Vs, Wm;
function Xj() {
  if (Wm) return Vs;
  Wm = 1;
  var e = Kj(), t = Yj(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return n.call(i, s);
    }));
  } : t;
  return Vs = a, Vs;
}
var zs, Hm;
function Qj() {
  if (Hm) return zs;
  Hm = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return zs = e, zs;
}
var Gs, Vm;
function Zj() {
  if (Vm) return Gs;
  Vm = 1;
  var e = rr(), t = nr(), r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return Gs = n, Gs;
}
var Us, zm;
function sd() {
  if (zm) return Us;
  zm = 1;
  var e = Zj(), t = nr(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !o.call(i, "callee");
  };
  return Us = a, Us;
}
var Kr = { exports: {} }, Ks, Gm;
function Jj() {
  if (Gm) return Ks;
  Gm = 1;
  function e() {
    return !1;
  }
  return Ks = e, Ks;
}
Kr.exports;
var Um;
function qb() {
  return Um || (Um = 1, function(e, t) {
    var r = ut(), n = Jj(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
    e.exports = l;
  }(Kr, Kr.exports)), Kr.exports;
}
var Ys, Km;
function cd() {
  if (Km) return Ys;
  Km = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return Ys = r, Ys;
}
var Xs, Ym;
function ld() {
  if (Ym) return Xs;
  Ym = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Xs = t, Xs;
}
var Qs, Xm;
function eD() {
  if (Xm) return Qs;
  Xm = 1;
  var e = rr(), t = ld(), r = nr(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", d = "[object Number]", p = "[object Object]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", _ = "[object Int8Array]", S = "[object Int16Array]", C = "[object Int32Array]", P = "[object Uint8Array]", E = "[object Uint8ClampedArray]", T = "[object Uint16Array]", I = "[object Uint32Array]", j = {};
  j[x] = j[w] = j[_] = j[S] = j[C] = j[P] = j[E] = j[T] = j[I] = !0, j[n] = j[o] = j[v] = j[a] = j[b] = j[i] = j[s] = j[c] = j[l] = j[d] = j[p] = j[m] = j[g] = j[y] = j[h] = !1;
  function V(q) {
    return r(q) && t(q.length) && !!j[e(q)];
  }
  return Qs = V, Qs;
}
var Zs, Qm;
function Bb() {
  if (Qm) return Zs;
  Qm = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Zs = e, Zs;
}
var Yr = { exports: {} };
Yr.exports;
var Zm;
function tD() {
  return Zm || (Zm = 1, function(e, t) {
    var r = mb(), n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Yr, Yr.exports)), Yr.exports;
}
var Js, Jm;
function Wb() {
  if (Jm) return Js;
  Jm = 1;
  var e = eD(), t = Bb(), r = tD(), n = r && r.isTypedArray, o = n ? t(n) : e;
  return Js = o, Js;
}
var ec, eh;
function rD() {
  if (eh) return ec;
  eh = 1;
  var e = Qj(), t = sd(), r = Ye(), n = qb(), o = cd(), a = Wb(), i = Object.prototype, s = i.hasOwnProperty;
  function c(l, d) {
    var p = r(l), m = !p && t(l), g = !p && !m && n(l), y = !p && !m && !g && a(l), h = p || m || g || y, v = h ? e(l.length, String) : [], b = v.length;
    for (var x in l)
      (d || s.call(l, x)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
      o(x, b))) && v.push(x);
    return v;
  }
  return ec = c, ec;
}
var tc, th;
function nD() {
  if (th) return tc;
  th = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || e;
    return r === o;
  }
  return tc = t, tc;
}
var rc, rh;
function oD() {
  if (rh) return rc;
  rh = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return rc = e, rc;
}
var nc, nh;
function aD() {
  if (nh) return nc;
  nh = 1;
  var e = oD(), t = e(Object.keys, Object);
  return nc = t, nc;
}
var oc, oh;
function iD() {
  if (oh) return oc;
  oh = 1;
  var e = nD(), t = aD(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return oc = o, oc;
}
var ac, ah;
function pa() {
  if (ah) return ac;
  ah = 1;
  var e = Ju(), t = ld();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return ac = r, ac;
}
var ic, ih;
function ud() {
  if (ih) return ic;
  ih = 1;
  var e = rD(), t = iD(), r = pa();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return ic = n, ic;
}
var sc, sh;
function sD() {
  if (sh) return sc;
  sh = 1;
  var e = Uj(), t = Xj(), r = ud();
  function n(o) {
    return e(o, r, t);
  }
  return sc = n, sc;
}
var cc, ch;
function cD() {
  if (ch) return cc;
  ch = 1;
  var e = sD(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function o(a, i, s, c, l, d) {
    var p = s & t, m = e(a), g = m.length, y = e(i), h = y.length;
    if (g != h && !p)
      return !1;
    for (var v = g; v--; ) {
      var b = m[v];
      if (!(p ? b in i : n.call(i, b)))
        return !1;
    }
    var x = d.get(a), w = d.get(i);
    if (x && w)
      return x == i && w == a;
    var _ = !0;
    d.set(a, i), d.set(i, a);
    for (var S = p; ++v < g; ) {
      b = m[v];
      var C = a[b], P = i[b];
      if (c)
        var E = p ? c(P, C, b, i, a, d) : c(C, P, b, a, i, d);
      if (!(E === void 0 ? C === P || l(C, P, s, c, d) : E)) {
        _ = !1;
        break;
      }
      S || (S = b == "constructor");
    }
    if (_ && !S) {
      var T = a.constructor, I = i.constructor;
      T != I && "constructor" in a && "constructor" in i && !(typeof T == "function" && T instanceof T && typeof I == "function" && I instanceof I) && (_ = !1);
    }
    return d.delete(a), d.delete(i), _;
  }
  return cc = o, cc;
}
var lc, lh;
function lD() {
  if (lh) return lc;
  lh = 1;
  var e = or(), t = ut(), r = e(t, "DataView");
  return lc = r, lc;
}
var uc, uh;
function uD() {
  if (uh) return uc;
  uh = 1;
  var e = or(), t = ut(), r = e(t, "Promise");
  return uc = r, uc;
}
var dc, dh;
function Hb() {
  if (dh) return dc;
  dh = 1;
  var e = or(), t = ut(), r = e(t, "Set");
  return dc = r, dc;
}
var fc, fh;
function dD() {
  if (fh) return fc;
  fh = 1;
  var e = or(), t = ut(), r = e(t, "WeakMap");
  return fc = r, fc;
}
var pc, ph;
function fD() {
  if (ph) return pc;
  ph = 1;
  var e = lD(), t = td(), r = uD(), n = Hb(), o = dD(), a = rr(), i = hb(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", d = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", g = i(e), y = i(t), h = i(r), v = i(n), b = i(o), x = a;
  return (e && x(new e(new ArrayBuffer(1))) != m || t && x(new t()) != s || r && x(r.resolve()) != l || n && x(new n()) != d || o && x(new o()) != p) && (x = function(w) {
    var _ = a(w), S = _ == c ? w.constructor : void 0, C = S ? i(S) : "";
    if (C)
      switch (C) {
        case g:
          return m;
        case y:
          return s;
        case h:
          return l;
        case v:
          return d;
        case b:
          return p;
      }
    return _;
  }), pc = x, pc;
}
var mc, mh;
function pD() {
  if (mh) return mc;
  mh = 1;
  var e = kb(), t = $b(), r = Gj(), n = cD(), o = fD(), a = Ye(), i = qb(), s = Wb(), c = 1, l = "[object Arguments]", d = "[object Array]", p = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function y(h, v, b, x, w, _) {
    var S = a(h), C = a(v), P = S ? d : o(h), E = C ? d : o(v);
    P = P == l ? p : P, E = E == l ? p : E;
    var T = P == p, I = E == p, j = P == E;
    if (j && i(h)) {
      if (!i(v))
        return !1;
      S = !0, T = !1;
    }
    if (j && !T)
      return _ || (_ = new e()), S || s(h) ? t(h, v, b, x, w, _) : r(h, v, P, b, x, w, _);
    if (!(b & c)) {
      var V = T && g.call(h, "__wrapped__"), q = I && g.call(v, "__wrapped__");
      if (V || q) {
        var N = V ? h.value() : h, $ = q ? v.value() : v;
        return _ || (_ = new e()), w(N, $, b, x, _);
      }
    }
    return j ? (_ || (_ = new e()), n(h, v, b, x, w, _)) : !1;
  }
  return mc = y, mc;
}
var hc, hh;
function Vb() {
  if (hh) return hc;
  hh = 1;
  var e = pD(), t = nr();
  function r(n, o, a, i, s) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : e(n, o, a, i, r, s);
  }
  return hc = r, hc;
}
var vc, vh;
function mD() {
  if (vh) return vc;
  vh = 1;
  var e = kb(), t = Vb(), r = 1, n = 2;
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
      var g = m[0], y = a[g], h = m[1];
      if (p && m[2]) {
        if (y === void 0 && !(g in a))
          return !1;
      } else {
        var v = new e();
        if (c)
          var b = c(y, h, g, a, i, v);
        if (!(b === void 0 ? t(h, y, r | n, c, v) : b))
          return !1;
      }
    }
    return !0;
  }
  return vc = o, vc;
}
var gc, gh;
function zb() {
  if (gh) return gc;
  gh = 1;
  var e = Ot();
  function t(r) {
    return r === r && !e(r);
  }
  return gc = t, gc;
}
var yc, yh;
function hD() {
  if (yh) return yc;
  yh = 1;
  var e = zb(), t = ud();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var i = o[a], s = n[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return yc = r, yc;
}
var bc, bh;
function Gb() {
  if (bh) return bc;
  bh = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return bc = e, bc;
}
var xc, xh;
function vD() {
  if (xh) return xc;
  xh = 1;
  var e = mD(), t = hD(), r = Gb();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return xc = n, xc;
}
var wc, wh;
function gD() {
  if (wh) return wc;
  wh = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return wc = e, wc;
}
var _c, _h;
function yD() {
  if (_h) return _c;
  _h = 1;
  var e = yb(), t = sd(), r = Ye(), n = cd(), o = ld(), a = da();
  function i(s, c, l) {
    c = e(c, s);
    for (var d = -1, p = c.length, m = !1; ++d < p; ) {
      var g = a(c[d]);
      if (!(m = s != null && l(s, g)))
        break;
      s = s[g];
    }
    return m || ++d != p ? m : (p = s == null ? 0 : s.length, !!p && o(p) && n(g, p) && (r(s) || t(s)));
  }
  return _c = i, _c;
}
var Sc, Sh;
function bD() {
  if (Sh) return Sc;
  Sh = 1;
  var e = gD(), t = yD();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return Sc = r, Sc;
}
var Cc, Ch;
function xD() {
  if (Ch) return Cc;
  Ch = 1;
  var e = Vb(), t = bb(), r = bD(), n = Zu(), o = zb(), a = Gb(), i = da(), s = 1, c = 2;
  function l(d, p) {
    return n(d) && o(p) ? a(i(d), p) : function(m) {
      var g = t(m, d);
      return g === void 0 && g === p ? r(m, d) : e(p, g, s | c);
    };
  }
  return Cc = l, Cc;
}
var Pc, Ph;
function ma() {
  if (Ph) return Pc;
  Ph = 1;
  function e(t) {
    return t;
  }
  return Pc = e, Pc;
}
var Ec, Eh;
function wD() {
  if (Eh) return Ec;
  Eh = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Ec = e, Ec;
}
var Rc, Rh;
function _D() {
  if (Rh) return Rc;
  Rh = 1;
  var e = nd();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Rc = t, Rc;
}
var Tc, Th;
function SD() {
  if (Th) return Tc;
  Th = 1;
  var e = wD(), t = _D(), r = Zu(), n = da();
  function o(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return Tc = o, Tc;
}
var Nc, Nh;
function Ub() {
  if (Nh) return Nc;
  Nh = 1;
  var e = vD(), t = xD(), r = ma(), n = Ye(), o = SD();
  function a(i) {
    return typeof i == "function" ? i : i == null ? r : typeof i == "object" ? n(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return Nc = a, Nc;
}
var Mc, Mh;
function CD() {
  if (Mh) return Mc;
  Mh = 1;
  function e(t, r, n, o) {
    for (var a = t.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (r(t[i], i, t))
        return i;
    return -1;
  }
  return Mc = e, Mc;
}
var Ac, Ah;
function PD() {
  if (Ah) return Ac;
  Ah = 1;
  function e(t) {
    return t !== t;
  }
  return Ac = e, Ac;
}
var Oc, Oh;
function ED() {
  if (Oh) return Oc;
  Oh = 1;
  function e(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return Oc = e, Oc;
}
var jc, jh;
function RD() {
  if (jh) return jc;
  jh = 1;
  var e = CD(), t = PD(), r = ED();
  function n(o, a, i) {
    return a === a ? r(o, a, i) : e(o, t, i);
  }
  return jc = n, jc;
}
var Dc, Dh;
function TD() {
  if (Dh) return Dc;
  Dh = 1;
  var e = RD();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return Dc = t, Dc;
}
var kc, kh;
function ND() {
  if (kh) return kc;
  kh = 1;
  function e(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return kc = e, kc;
}
var Ic, Ih;
function MD() {
  if (Ih) return Ic;
  Ih = 1;
  function e() {
  }
  return Ic = e, Ic;
}
var Lc, Lh;
function AD() {
  if (Lh) return Lc;
  Lh = 1;
  var e = Hb(), t = MD(), r = id(), n = 1 / 0, o = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return Lc = o, Lc;
}
var $c, $h;
function OD() {
  if ($h) return $c;
  $h = 1;
  var e = Ib(), t = TD(), r = ND(), n = Lb(), o = AD(), a = id(), i = 200;
  function s(c, l, d) {
    var p = -1, m = t, g = c.length, y = !0, h = [], v = h;
    if (d)
      y = !1, m = r;
    else if (g >= i) {
      var b = l ? null : o(c);
      if (b)
        return a(b);
      y = !1, m = n, v = new e();
    } else
      v = l ? [] : h;
    e:
      for (; ++p < g; ) {
        var x = c[p], w = l ? l(x) : x;
        if (x = d || x !== 0 ? x : 0, y && w === w) {
          for (var _ = v.length; _--; )
            if (v[_] === w)
              continue e;
          l && v.push(w), h.push(x);
        } else m(v, w, d) || (v !== h && v.push(w), h.push(x));
      }
    return h;
  }
  return $c = s, $c;
}
var Fc, Fh;
function jD() {
  if (Fh) return Fc;
  Fh = 1;
  var e = Ub(), t = OD();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return Fc = r, Fc;
}
var DD = jD();
const qh = /* @__PURE__ */ st(DD);
function Kb(e, t, r) {
  return t === !0 ? qh(e, r) : Co(t) ? qh(e, t) : e;
}
function Sr(e) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sr(e);
}
var kD = ["ref"];
function Bh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bh(Object(r), !0).forEach(function(n) {
      ha(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ID(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Xb(n.key), n);
  }
}
function LD(e, t, r) {
  return t && Wh(e.prototype, t), r && Wh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $D(e, t, r) {
  return t = No(t), FD(e, Yb() ? Reflect.construct(t, r || [], No(e).constructor) : t.apply(e, r));
}
function FD(e, t) {
  if (t && (Sr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qD(e);
}
function qD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Yb = function() {
    return !!e;
  })();
}
function No(e) {
  return No = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, No(e);
}
function BD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hl(e, t);
}
function Hl(e, t) {
  return Hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Hl(e, t);
}
function ha(e, t, r) {
  return t = Xb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xb(e) {
  var t = WD(e, "string");
  return Sr(t) == "symbol" ? t : t + "";
}
function WD(e, t) {
  if (Sr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function HD(e, t) {
  if (e == null) return {};
  var r = VD(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function VD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zD(e) {
  return e.value;
}
function GD(e, t) {
  if (/* @__PURE__ */ Q.isValidElement(e))
    return /* @__PURE__ */ Q.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ Q.createElement(e, t);
  t.ref;
  var r = HD(t, kD);
  return /* @__PURE__ */ Q.createElement(ad, r);
}
var Hh = 1, dd = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    ID(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = $D(this, t, [].concat(o)), ha(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return BD(t, e), LD(t, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > Hh || Math.abs(o.height - this.lastBoundingBox.height) > Hh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? ht({}, this.lastBoundingBox) : {
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
          var g = this.getBBoxSnapshot();
          p = {
            left: ((l || 0) - g.width) / 2
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
      return ht(ht({}, p), m);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.content, i = o.width, s = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, d = o.payload, p = ht(ht({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ Q.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(g) {
          n.wrapperNode = g;
        }
      }, GD(a, ht(ht({}, this.props), {}, {
        payload: Kb(d, l, zD)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var a = ht(ht({}, this.defaultProps), n.props), i = a.layout;
      return i === "vertical" && Be(n.props.height) ? {
        height: n.props.height
      } : i === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
}(Uo);
ha(dd, "displayName", "Legend");
ha(dd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var qc, Vh;
function UD() {
  if (Vh) return qc;
  Vh = 1;
  var e = Mn(), t = sd(), r = Ye(), n = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return qc = o, qc;
}
var Bc, zh;
function KD() {
  if (zh) return Bc;
  zh = 1;
  var e = Fb(), t = UD();
  function r(n, o, a, i, s) {
    var c = -1, l = n.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var d = n[c];
      o > 0 && a(d) ? o > 1 ? r(d, o - 1, a, i, s) : e(s, d) : i || (s[s.length] = d);
    }
    return s;
  }
  return Bc = r, Bc;
}
var Wc, Gh;
function YD() {
  if (Gh) return Wc;
  Gh = 1;
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
  return Wc = e, Wc;
}
var Hc, Uh;
function XD() {
  if (Uh) return Hc;
  Uh = 1;
  var e = YD(), t = e();
  return Hc = t, Hc;
}
var Vc, Kh;
function QD() {
  if (Kh) return Vc;
  Kh = 1;
  var e = XD(), t = ud();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return Vc = r, Vc;
}
var zc, Yh;
function ZD() {
  if (Yh) return zc;
  Yh = 1;
  var e = pa();
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
  return zc = t, zc;
}
var Gc, Xh;
function JD() {
  if (Xh) return Gc;
  Xh = 1;
  var e = QD(), t = ZD(), r = t(e);
  return Gc = r, Gc;
}
var Uc, Qh;
function ek() {
  if (Qh) return Uc;
  Qh = 1;
  var e = JD(), t = pa();
  function r(n, o) {
    var a = -1, i = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return Uc = r, Uc;
}
var Kc, Zh;
function tk() {
  if (Zh) return Kc;
  Zh = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Kc = e, Kc;
}
var Yc, Jh;
function rk() {
  if (Jh) return Yc;
  Jh = 1;
  var e = An();
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
  return Yc = t, Yc;
}
var Xc, ev;
function nk() {
  if (ev) return Xc;
  ev = 1;
  var e = rk();
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
  return Xc = t, Xc;
}
var Qc, tv;
function ok() {
  if (tv) return Qc;
  tv = 1;
  var e = vb(), t = nd(), r = Ub(), n = ek(), o = tk(), a = Bb(), i = nk(), s = ma(), c = Ye();
  function l(d, p, m) {
    p.length ? p = e(p, function(h) {
      return c(h) ? function(v) {
        return t(v, h.length === 1 ? h[0] : h);
      } : h;
    }) : p = [s];
    var g = -1;
    p = e(p, a(r));
    var y = n(d, function(h, v, b) {
      var x = e(p, function(w) {
        return w(h);
      });
      return { criteria: x, index: ++g, value: h };
    });
    return o(y, function(h, v) {
      return i(h, v, m);
    });
  }
  return Qc = l, Qc;
}
var Zc, rv;
function ak() {
  if (rv) return Zc;
  rv = 1;
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
  return Zc = e, Zc;
}
var Jc, nv;
function ik() {
  if (nv) return Jc;
  nv = 1;
  var e = ak(), t = Math.max;
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
  return Jc = r, Jc;
}
var el, ov;
function sk() {
  if (ov) return el;
  ov = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return el = e, el;
}
var tl, av;
function ck() {
  if (av) return tl;
  av = 1;
  var e = or(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return tl = t, tl;
}
var rl, iv;
function lk() {
  if (iv) return rl;
  iv = 1;
  var e = sk(), t = ck(), r = ma(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return rl = n, rl;
}
var nl, sv;
function uk() {
  if (sv) return nl;
  sv = 1;
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
  return nl = n, nl;
}
var ol, cv;
function dk() {
  if (cv) return ol;
  cv = 1;
  var e = lk(), t = uk(), r = t(e);
  return ol = r, ol;
}
var al, lv;
function fk() {
  if (lv) return al;
  lv = 1;
  var e = ma(), t = ik(), r = dk();
  function n(o, a) {
    return r(t(o, a, e), o + "");
  }
  return al = n, al;
}
var il, uv;
function pk() {
  if (uv) return il;
  uv = 1;
  var e = ed(), t = pa(), r = cd(), n = Ot();
  function o(a, i, s) {
    if (!n(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && r(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return il = o, il;
}
var sl, dv;
function mk() {
  if (dv) return sl;
  dv = 1;
  var e = KD(), t = ok(), r = fk(), n = pk(), o = r(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && n(a, i[0], i[1]) ? i = [] : s > 2 && n(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return sl = o, sl;
}
var hk = mk();
const vk = /* @__PURE__ */ st(hk);
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function Vl() {
  return Vl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vl.apply(this, arguments);
}
function gk(e, t) {
  return wk(e) || xk(e, t) || bk(e, t) || yk();
}
function yk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bk(e, t) {
  if (e) {
    if (typeof e == "string") return fv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fv(e, t);
  }
}
function fv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xk(e, t) {
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
function wk(e) {
  if (Array.isArray(e)) return e;
}
function pv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pv(Object(r), !0).forEach(function(n) {
      _k(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _k(e, t, r) {
  return t = Sk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sk(e) {
  var t = Ck(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function Ck(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pk(e) {
  return Array.isArray(e) && Po(e[0]) && Po(e[1]) ? e.join(" ~ ") : e;
}
var Ek = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, d = t.payload, p = t.formatter, m = t.itemSorter, g = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, x = b === void 0 ? !1 : b, w = function() {
    if (d && d.length) {
      var V = {
        padding: 0,
        margin: 0
      }, q = (m ? vk(d, m) : d).map(function(N, $) {
        if (N.type === "none")
          return null;
        var F = cl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: N.color || "#000"
        }, s), D = N.formatter || p || Pk, R = N.value, W = N.name, O = R, z = W;
        if (D && O != null && z != null) {
          var A = D(R, W, N, $, d);
          if (Array.isArray(A)) {
            var B = gk(A, 2);
            O = B[0], z = B[1];
          } else
            O = A;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ Q.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat($),
            style: F
          }, Po(z) ? /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, z) : null, Po(z) ? /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, O), /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, N.unit || ""))
        );
      });
      return /* @__PURE__ */ Q.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: V
      }, q);
    }
    return null;
  }, _ = cl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), S = cl({
    margin: 0
  }, l), C = !SO(h), P = C ? h : "", E = vt("recharts-default-tooltip", g), T = vt("recharts-tooltip-label", y);
  C && v && d !== void 0 && d !== null && (P = v(h, d));
  var I = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ Q.createElement("div", Vl({
    className: E,
    style: _
  }, I), /* @__PURE__ */ Q.createElement("p", {
    className: T,
    style: S
  }, /* @__PURE__ */ Q.isValidElement(P) ? P : "".concat(P)), w());
};
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
function oo(e, t, r) {
  return t = Rk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rk(e) {
  var t = Tk(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function Tk(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zr = "recharts-tooltip-wrapper", Nk = {
  visibility: "hidden"
};
function Mk(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return vt(zr, oo(oo(oo(oo({}, "".concat(zr, "-right"), Be(r) && t && Be(t.x) && r >= t.x), "".concat(zr, "-left"), Be(r) && t && Be(t.x) && r < t.x), "".concat(zr, "-bottom"), Be(n) && t && Be(t.y) && n >= t.y), "".concat(zr, "-top"), Be(n) && t && Be(t.y) && n < t.y));
}
function mv(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && Be(a[n]))
    return a[n];
  var d = r[n] - s - o, p = r[n] + o;
  if (t[n])
    return i[n] ? d : p;
  if (i[n]) {
    var m = d, g = c[n];
    return m < g ? Math.max(p, c[n]) : Math.max(d, c[n]);
  }
  var y = p + s, h = c[n] + l;
  return y > h ? Math.max(d, c[n]) : Math.max(p, c[n]);
}
function Ak(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function Ok(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, d, p;
  return i.height > 0 && i.width > 0 && r ? (d = mv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = mv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = Ak({
    translateX: d,
    translateY: p,
    useTranslate3d: s
  })) : l = Nk, {
    cssProperties: l,
    cssClasses: Mk({
      translateX: d,
      translateY: p,
      coordinate: r
    })
  };
}
function Cr(e) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
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
      Gl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Zb(n.key), n);
  }
}
function kk(e, t, r) {
  return t && Dk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ik(e, t, r) {
  return t = Mo(t), Lk(e, Qb() ? Reflect.construct(t, r || [], Mo(e).constructor) : t.apply(e, r));
}
function Lk(e, t) {
  if (t && (Cr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $k(e);
}
function $k(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qb = function() {
    return !!e;
  })();
}
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function Fk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zl(e, t);
}
function zl(e, t) {
  return zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, zl(e, t);
}
function Gl(e, t, r) {
  return t = Zb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Zb(e) {
  var t = qk(e, "string");
  return Cr(t) == "symbol" ? t : t + "";
}
function qk(e, t) {
  if (Cr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var gv = 1, Bk = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    jk(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = Ik(this, t, [].concat(o)), Gl(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Gl(r, "handleKeyDown", function(i) {
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
  return Fk(t, e), kk(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > gv || Math.abs(n.height - this.state.lastBoundingBox.height) > gv) && this.setState({
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
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, d = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, g = o.offset, y = o.position, h = o.reverseDirection, v = o.useTranslate3d, b = o.viewBox, x = o.wrapperStyle, w = Ok({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: g,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), _ = w.cssClasses, S = w.cssProperties, C = vv(vv({
        transition: m && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, S), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ Q.createElement("div", {
          tabIndex: -1,
          className: _,
          style: C,
          ref: function(E) {
            n.wrapperNode = E;
          }
        }, l)
      );
    }
  }]);
}(Uo), Wk = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Hk = {
  isSsr: Wk()
};
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function yv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yv(Object(r), !0).forEach(function(n) {
      fd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ex(n.key), n);
  }
}
function Gk(e, t, r) {
  return t && zk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Uk(e, t, r) {
  return t = Ao(t), Kk(e, Jb() ? Reflect.construct(t, r || [], Ao(e).constructor) : t.apply(e, r));
}
function Kk(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Yk(e);
}
function Yk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Jb = function() {
    return !!e;
  })();
}
function Ao(e) {
  return Ao = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ao(e);
}
function Xk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ul(e, t);
}
function Ul(e, t) {
  return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ul(e, t);
}
function fd(e, t, r) {
  return t = ex(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ex(e) {
  var t = Qk(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function Qk(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Zk(e) {
  return e.dataKey;
}
function Jk(e, t) {
  return /* @__PURE__ */ Q.isValidElement(e) ? /* @__PURE__ */ Q.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ Q.createElement(e, t) : /* @__PURE__ */ Q.createElement(Ek, t);
}
var pd = /* @__PURE__ */ function(e) {
  function t() {
    return Vk(this, t), Uk(this, t, arguments);
  }
  return Xk(t, e), Gk(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, d = o.coordinate, p = o.filterNull, m = o.isAnimationActive, g = o.offset, y = o.payload, h = o.payloadUniqBy, v = o.position, b = o.reverseDirection, x = o.useTranslate3d, w = o.viewBox, _ = o.wrapperStyle, S = y ?? [];
      p && S.length && (S = Kb(y.filter(function(P) {
        return P.value != null && (P.hide !== !0 || n.props.includeHidden);
      }), h, Zk));
      var C = S.length > 0;
      return /* @__PURE__ */ Q.createElement(Bk, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: d,
        hasPayload: C,
        offset: g,
        position: v,
        reverseDirection: b,
        useTranslate3d: x,
        viewBox: w,
        wrapperStyle: _
      }, Jk(l, bv(bv({}, this.props), {}, {
        payload: S
      })));
    }
  }]);
}(Uo);
fd(pd, "displayName", "Tooltip");
fd(pd, "defaultProps", {
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
  isAnimationActive: !Hk.isSsr,
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
var ll, xv;
function eI() {
  if (xv) return ll;
  xv = 1;
  var e = ut(), t = function() {
    return e.Date.now();
  };
  return ll = t, ll;
}
var ul, wv;
function tI() {
  if (wv) return ul;
  wv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return ul = t, ul;
}
var dl, _v;
function rI() {
  if (_v) return dl;
  _v = 1;
  var e = tI(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return dl = r, dl;
}
var fl, Sv;
function nI() {
  if (Sv) return fl;
  Sv = 1;
  var e = rI(), t = Ot(), r = An(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
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
  return fl = c, fl;
}
var pl, Cv;
function oI() {
  if (Cv) return pl;
  Cv = 1;
  var e = Ot(), t = eI(), r = nI(), n = "Expected a function", o = Math.max, a = Math.min;
  function i(s, c, l) {
    var d, p, m, g, y, h, v = 0, b = !1, x = !1, w = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(l) && (b = !!l.leading, x = "maxWait" in l, m = x ? o(r(l.maxWait) || 0, c) : m, w = "trailing" in l ? !!l.trailing : w);
    function _(q) {
      var N = d, $ = p;
      return d = p = void 0, v = q, g = s.apply($, N), g;
    }
    function S(q) {
      return v = q, y = setTimeout(E, c), b ? _(q) : g;
    }
    function C(q) {
      var N = q - h, $ = q - v, F = c - N;
      return x ? a(F, m - $) : F;
    }
    function P(q) {
      var N = q - h, $ = q - v;
      return h === void 0 || N >= c || N < 0 || x && $ >= m;
    }
    function E() {
      var q = t();
      if (P(q))
        return T(q);
      y = setTimeout(E, C(q));
    }
    function T(q) {
      return y = void 0, w && d ? _(q) : (d = p = void 0, g);
    }
    function I() {
      y !== void 0 && clearTimeout(y), v = 0, d = h = p = y = void 0;
    }
    function j() {
      return y === void 0 ? g : T(t());
    }
    function V() {
      var q = t(), N = P(q);
      if (d = arguments, p = this, h = q, N) {
        if (y === void 0)
          return S(h);
        if (x)
          return clearTimeout(y), y = setTimeout(E, c), _(h);
      }
      return y === void 0 && (y = setTimeout(E, c)), g;
    }
    return V.cancel = I, V.flush = j, V;
  }
  return pl = i, pl;
}
var ml, Pv;
function aI() {
  if (Pv) return ml;
  Pv = 1;
  var e = oI(), t = Ot(), r = "Expected a function";
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
  return ml = n, ml;
}
var iI = aI();
const sI = /* @__PURE__ */ st(iI);
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function Ev(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ev(Object(r), !0).forEach(function(n) {
      cI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cI(e, t, r) {
  return t = lI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lI(e) {
  var t = uI(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function uI(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dI(e, t) {
  return hI(e) || mI(e, t) || pI(e, t) || fI();
}
function fI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pI(e, t) {
  if (e) {
    if (typeof e == "string") return Rv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rv(e, t);
  }
}
function Rv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mI(e, t) {
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
function hI(e) {
  if (Array.isArray(e)) return e;
}
var vI = /* @__PURE__ */ Go(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, d = l === void 0 ? 0 : l, p = e.minHeight, m = e.maxHeight, g = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, x = e.onResize, w = e.style, _ = w === void 0 ? {} : w, S = br(null), C = br();
  C.current = x, wu(t, function() {
    return Object.defineProperty(S.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), S.current;
      },
      configurable: !0
    });
  });
  var P = nt({
    containerWidth: o.width,
    containerHeight: o.height
  }), E = dI(P, 2), T = E[0], I = E[1], j = Zv(function(q, N) {
    I(function($) {
      var F = Math.round(q), D = Math.round(N);
      return $.containerWidth === F && $.containerHeight === D ? $ : {
        containerWidth: F,
        containerHeight: D
      };
    });
  }, []);
  We(function() {
    var q = function(W) {
      var O, z = W[0].contentRect, A = z.width, B = z.height;
      j(A, B), (O = C.current) === null || O === void 0 || O.call(C, A, B);
    };
    h > 0 && (q = sI(q, h, {
      trailing: !0,
      leading: !1
    }));
    var N = new ResizeObserver(q), $ = S.current.getBoundingClientRect(), F = $.width, D = $.height;
    return j(F, D), N.observe(S.current), function() {
      N.disconnect();
    };
  }, [j, h]);
  var V = A0(function() {
    var q = T.containerWidth, N = T.containerHeight;
    if (q < 0 || N < 0)
      return null;
    fo(ro(i) || ro(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), fo(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var $ = ro(i) ? q : i, F = ro(c) ? N : c;
    r && r > 0 && ($ ? F = $ / r : F && ($ = F * r), m && F > m && (F = m)), fo($ > 0 || F > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, $, F, i, c, d, p, r);
    var D = !Array.isArray(g) && qO(g.type).endsWith("Chart");
    return Q.Children.map(g, function(R) {
      return /* @__PURE__ */ Q.isValidElement(R) ? /* @__PURE__ */ O0(R, ao({
        width: $,
        height: F
      }, D ? {
        style: ao({
          height: "100%",
          width: "100%",
          maxHeight: F,
          maxWidth: $
        }, R.props.style)
      } : {})) : R;
    });
  }, [r, g, c, m, p, d, T, i]);
  return /* @__PURE__ */ Q.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: vt("recharts-responsive-container", b),
    style: ao(ao({}, _), {}, {
      width: i,
      height: c,
      minWidth: d,
      minHeight: p,
      maxHeight: m
    }),
    ref: S
  }, V);
});
const gI = { light: "", dark: ".dark" }, tx = f.createContext(null);
function rx() {
  const e = f.useContext(tx);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const yI = f.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = f.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ u.jsx(tx.Provider, { value: { config: n }, children: /* @__PURE__ */ u.jsxs(
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
        /* @__PURE__ */ u.jsx(bI, { id: s, config: n }),
        /* @__PURE__ */ u.jsx(vI, { children: r })
      ]
    }
  ) });
});
yI.displayName = "Chart";
const bI = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ u.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(gI).map(
          ([n, o]) => `
${o} [data-chart=${e}] {
${r.map(([a, i]) => {
            const s = i.theme?.[n] || i.color;
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
}, a4 = pd, xI = f.forwardRef(
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
  }, g) => {
    const { config: y } = rx(), h = f.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [b] = t;
      if (!b)
        return null;
      const x = `${m || b.dataKey || b.name || "value"}`, w = Kl(y, b, x), _ = !m && typeof i == "string" ? y[i]?.label || i : w?.label;
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
    if (!e || !t?.length)
      return null;
    const v = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: g,
        className: M(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          v ? null : h,
          /* @__PURE__ */ u.jsx("div", { className: "grid gap-1.5", children: t.map((b, x) => {
            if (!b)
              return null;
            const w = `${p || b.dataKey || b.name || "value"}`, _ = Kl(y, b, w), S = d || b.payload.fill || b.color;
            return /* @__PURE__ */ u.jsx(
              "div",
              {
                className: M(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: l && b?.value !== void 0 && b.name ? l(b.value, b.name, b, x, b.payload) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  _?.icon ? /* @__PURE__ */ u.jsx(_.icon, {}) : !a && /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      className: M(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": v && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": S,
                        "--color-border": S
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: M(
                        "flex flex-1 justify-between leading-none",
                        v ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1.5", children: [
                          v ? h : null,
                          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: _?.label || b.name })
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
xI.displayName = "ChartTooltip";
const i4 = dd, wI = f.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
    const { config: i } = rx();
    return r?.length ? /* @__PURE__ */ u.jsx(
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
          const c = `${o || s.dataKey || "value"}`, l = Kl(i, s, c);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: M(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l?.icon && !t ? /* @__PURE__ */ u.jsx(l.icon, {}) : /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: s.color
                    }
                  }
                ),
                l?.label
              ]
            },
            s.value
          );
        })
      }
    ) : null;
  }
);
wI.displayName = "ChartLegend";
function Kl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
function On(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function va(e) {
  const [t, r] = f.useState(void 0);
  return me(() => {
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
var ga = "Checkbox", [_I, s4] = be(ga), [SI, md] = _I(ga);
function CI(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: c,
    required: l,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, g] = xe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: ga
  }), [y, h] = f.useState(null), [v, b] = f.useState(null), x = f.useRef(!1), w = y ? !!i || !!y.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), _ = {
    checked: m,
    disabled: a,
    setChecked: g,
    control: y,
    setControl: h,
    name: s,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: x,
    required: l,
    defaultChecked: Et(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: v,
    setBubbleInput: b
  };
  return /* @__PURE__ */ u.jsx(
    SI,
    {
      scope: t,
      ..._,
      children: PI(p) ? p(_) : n
    }
  );
}
var nx = "CheckboxTrigger", ox = f.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: c,
      required: l,
      setControl: d,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: g,
      bubbleInput: y
    } = md(nx, e), h = ne(o, d), v = f.useRef(c);
    return f.useEffect(() => {
      const b = a?.form;
      if (b) {
        const x = () => p(v.current);
        return b.addEventListener("reset", x), () => b.removeEventListener("reset", x);
      }
    }, [a, p]), /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Et(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": lx(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...n,
        ref: h,
        onKeyDown: L(t, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: L(r, (b) => {
          p((x) => Et(x) ? !0 : !x), y && g && (m.current = b.isPropagationStopped(), m.current || b.stopPropagation());
        })
      }
    );
  }
);
ox.displayName = nx;
var hd = f.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c,
      onCheckedChange: l,
      form: d,
      ...p
    } = e;
    return /* @__PURE__ */ u.jsx(
      CI,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: l,
        name: n,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(
            ox,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ u.jsx(
            cx,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
hd.displayName = ga;
var ax = "CheckboxIndicator", ix = f.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = md(ax, r);
    return /* @__PURE__ */ u.jsx(
      he,
      {
        present: n || Et(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          H.span,
          {
            "data-state": lx(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
ix.displayName = ax;
var sx = "CheckboxBubbleInput", cx = f.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: c,
      name: l,
      value: d,
      form: p,
      bubbleInput: m,
      setBubbleInput: g
    } = md(sx, e), y = ne(r, g), h = On(a), v = va(n);
    f.useEffect(() => {
      const x = m;
      if (!x) return;
      const w = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, C = !o.current;
      if (h !== a && S) {
        const P = new Event("click", { bubbles: C });
        x.indeterminate = Et(a), S.call(x, Et(a) ? !1 : a), x.dispatchEvent(P);
      }
    }, [m, h, a, o]);
    const b = f.useRef(Et(a) ? !1 : a);
    return /* @__PURE__ */ u.jsx(
      H.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? b.current,
        required: s,
        disabled: c,
        name: l,
        value: d,
        form: p,
        ...t,
        tabIndex: -1,
        ref: y,
        style: {
          ...t.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
cx.displayName = sx;
function PI(e) {
  return typeof e == "function";
}
function Et(e) {
  return e === "indeterminate";
}
function lx(e) {
  return Et(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const EI = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  hd,
  {
    ref: r,
    className: M(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(
      ix,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u.jsx(rn, { className: "size-4 h-full" })
      }
    )
  }
));
EI.displayName = hd.displayName;
var Tv = 1, RI = 0.9, TI = 0.8, NI = 0.17, hl = 0.1, vl = 0.999, MI = 0.9999, AI = 0.99, OI = /[\\\/_+.#"@\[\(\{&]/, jI = /[\\\/_+.#"@\[\(\{&]/g, DI = /[\s-]/, ux = /[\s-]/g;
function Yl(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? Tv : AI;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), l = r.indexOf(c, o), d = 0, p, m, g, y; l >= 0; ) p = Yl(e, t, r, n, l + 1, a + 1, i), p > d && (l === o ? p *= Tv : OI.test(e.charAt(l - 1)) ? (p *= TI, g = e.slice(o, l - 1).match(jI), g && o > 0 && (p *= Math.pow(vl, g.length))) : DI.test(e.charAt(l - 1)) ? (p *= RI, y = e.slice(o, l - 1).match(ux), y && o > 0 && (p *= Math.pow(vl, y.length))) : (p *= NI, o > 0 && (p *= Math.pow(vl, l - o))), e.charAt(l) !== t.charAt(a) && (p *= MI)), (p < hl && r.charAt(l - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a)) && (m = Yl(e, t, r, n, l + 1, a + 2, i), m * hl > p && (p = m * hl)), p > d && (d = p), l = r.indexOf(c, l + 1);
  return i[s] = d, d;
}
function Nv(e) {
  return e.toLowerCase().replace(ux, " ");
}
function kI(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, Yl(e, t, Nv(e), Nv(t), 0, 0, {});
}
var Gr = '[cmdk-group=""]', gl = '[cmdk-group-items=""]', II = '[cmdk-group-heading=""]', dx = '[cmdk-item=""]', Mv = `${dx}:not([aria-disabled="true"])`, Xl = "cmdk-item-select", pr = "data-value", LI = (e, t, r) => kI(e, t, r), fx = f.createContext(void 0), jn = () => f.useContext(fx), px = f.createContext(void 0), vd = () => f.useContext(px), mx = f.createContext(void 0), hx = f.forwardRef((e, t) => {
  let r = mr(() => {
    var A, B;
    return { search: "", value: (B = (A = e.value) != null ? A : e.defaultValue) != null ? B : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = mr(() => /* @__PURE__ */ new Set()), o = mr(() => /* @__PURE__ */ new Map()), a = mr(() => /* @__PURE__ */ new Map()), i = mr(() => /* @__PURE__ */ new Set()), s = vx(e), { label: c, children: l, value: d, onValueChange: p, filter: m, shouldFilter: g, loop: y, disablePointerSelection: h = !1, vimBindings: v = !0, ...b } = e, x = ve(), w = ve(), _ = ve(), S = f.useRef(null), C = KI();
  Kt(() => {
    if (d !== void 0) {
      let A = d.trim();
      r.current.value = A, P.emit();
    }
  }, [d]), Kt(() => {
    C(6, q);
  }, []);
  let P = f.useMemo(() => ({ subscribe: (A) => (i.current.add(A), () => i.current.delete(A)), snapshot: () => r.current, setState: (A, B, K) => {
    var G, ee, k, X;
    if (!Object.is(r.current[A], B)) {
      if (r.current[A] = B, A === "search") V(), I(), C(1, j);
      else if (A === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let re = document.getElementById(_);
          re ? re.focus() : (G = document.getElementById(x)) == null || G.focus();
        }
        if (C(7, () => {
          var re;
          r.current.selectedItemId = (re = N()) == null ? void 0 : re.id, P.emit();
        }), K || C(5, q), ((ee = s.current) == null ? void 0 : ee.value) !== void 0) {
          let re = B ?? "";
          (X = (k = s.current).onValueChange) == null || X.call(k, re);
          return;
        }
      }
      P.emit();
    }
  }, emit: () => {
    i.current.forEach((A) => A());
  } }), []), E = f.useMemo(() => ({ value: (A, B, K) => {
    var G;
    B !== ((G = a.current.get(A)) == null ? void 0 : G.value) && (a.current.set(A, { value: B, keywords: K }), r.current.filtered.items.set(A, T(B, K)), C(2, () => {
      I(), P.emit();
    }));
  }, item: (A, B) => (n.current.add(A), B && (o.current.has(B) ? o.current.get(B).add(A) : o.current.set(B, /* @__PURE__ */ new Set([A]))), C(3, () => {
    V(), I(), r.current.value || j(), P.emit();
  }), () => {
    a.current.delete(A), n.current.delete(A), r.current.filtered.items.delete(A);
    let K = N();
    C(4, () => {
      V(), K?.getAttribute("id") === A && j(), P.emit();
    });
  }), group: (A) => (o.current.has(A) || o.current.set(A, /* @__PURE__ */ new Set()), () => {
    a.current.delete(A), o.current.delete(A);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: x, inputId: _, labelId: w, listInnerRef: S }), []);
  function T(A, B) {
    var K, G;
    let ee = (G = (K = s.current) == null ? void 0 : K.filter) != null ? G : LI;
    return A ? ee(A, r.current.search, B) : 0;
  }
  function I() {
    if (!r.current.search || s.current.shouldFilter === !1) return;
    let A = r.current.filtered.items, B = [];
    r.current.filtered.groups.forEach((G) => {
      let ee = o.current.get(G), k = 0;
      ee.forEach((X) => {
        let re = A.get(X);
        k = Math.max(re, k);
      }), B.push([G, k]);
    });
    let K = S.current;
    $().sort((G, ee) => {
      var k, X;
      let re = G.getAttribute("id"), oe = ee.getAttribute("id");
      return ((k = A.get(oe)) != null ? k : 0) - ((X = A.get(re)) != null ? X : 0);
    }).forEach((G) => {
      let ee = G.closest(gl);
      ee ? ee.appendChild(G.parentElement === ee ? G : G.closest(`${gl} > *`)) : K.appendChild(G.parentElement === K ? G : G.closest(`${gl} > *`));
    }), B.sort((G, ee) => ee[1] - G[1]).forEach((G) => {
      var ee;
      let k = (ee = S.current) == null ? void 0 : ee.querySelector(`${Gr}[${pr}="${encodeURIComponent(G[0])}"]`);
      k?.parentElement.appendChild(k);
    });
  }
  function j() {
    let A = $().find((K) => K.getAttribute("aria-disabled") !== "true"), B = A?.getAttribute(pr);
    P.setState("value", B || void 0);
  }
  function V() {
    var A, B, K, G;
    if (!r.current.search || s.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let ee = 0;
    for (let k of n.current) {
      let X = (B = (A = a.current.get(k)) == null ? void 0 : A.value) != null ? B : "", re = (G = (K = a.current.get(k)) == null ? void 0 : K.keywords) != null ? G : [], oe = T(X, re);
      r.current.filtered.items.set(k, oe), oe > 0 && ee++;
    }
    for (let [k, X] of o.current) for (let re of X) if (r.current.filtered.items.get(re) > 0) {
      r.current.filtered.groups.add(k);
      break;
    }
    r.current.filtered.count = ee;
  }
  function q() {
    var A, B, K;
    let G = N();
    G && (((A = G.parentElement) == null ? void 0 : A.firstChild) === G && ((K = (B = G.closest(Gr)) == null ? void 0 : B.querySelector(II)) == null || K.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function N() {
    var A;
    return (A = S.current) == null ? void 0 : A.querySelector(`${dx}[aria-selected="true"]`);
  }
  function $() {
    var A;
    return Array.from(((A = S.current) == null ? void 0 : A.querySelectorAll(Mv)) || []);
  }
  function F(A) {
    let B = $()[A];
    B && P.setState("value", B.getAttribute(pr));
  }
  function D(A) {
    var B;
    let K = N(), G = $(), ee = G.findIndex((X) => X === K), k = G[ee + A];
    (B = s.current) != null && B.loop && (k = ee + A < 0 ? G[G.length - 1] : ee + A === G.length ? G[0] : G[ee + A]), k && P.setState("value", k.getAttribute(pr));
  }
  function R(A) {
    let B = N(), K = B?.closest(Gr), G;
    for (; K && !G; ) K = A > 0 ? GI(K, Gr) : UI(K, Gr), G = K?.querySelector(Mv);
    G ? P.setState("value", G.getAttribute(pr)) : D(A);
  }
  let W = () => F($().length - 1), O = (A) => {
    A.preventDefault(), A.metaKey ? W() : A.altKey ? R(1) : D(1);
  }, z = (A) => {
    A.preventDefault(), A.metaKey ? F(0) : A.altKey ? R(-1) : D(-1);
  };
  return f.createElement(H.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (A) => {
    var B;
    (B = b.onKeyDown) == null || B.call(b, A);
    let K = A.nativeEvent.isComposing || A.keyCode === 229;
    if (!(A.defaultPrevented || K)) switch (A.key) {
      case "n":
      case "j": {
        v && A.ctrlKey && O(A);
        break;
      }
      case "ArrowDown": {
        O(A);
        break;
      }
      case "p":
      case "k": {
        v && A.ctrlKey && z(A);
        break;
      }
      case "ArrowUp": {
        z(A);
        break;
      }
      case "Home": {
        A.preventDefault(), F(0);
        break;
      }
      case "End": {
        A.preventDefault(), W();
        break;
      }
      case "Enter": {
        A.preventDefault();
        let G = N();
        if (G) {
          let ee = new Event(Xl);
          G.dispatchEvent(ee);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: XI }, c), ya(e, (A) => f.createElement(px.Provider, { value: P }, f.createElement(fx.Provider, { value: E }, A))));
}), $I = f.forwardRef((e, t) => {
  var r, n;
  let o = ve(), a = f.useRef(null), i = f.useContext(mx), s = jn(), c = vx(e), l = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i?.forceMount;
  Kt(() => {
    if (!l) return s.item(o, i?.id);
  }, [l]);
  let d = gx(o, a, [e.value, e.children, a], e.keywords), p = vd(), m = Tt((C) => C.value && C.value === d.current), g = Tt((C) => l || s.filter() === !1 ? !0 : C.search ? C.filtered.items.get(o) > 0 : !0);
  f.useEffect(() => {
    let C = a.current;
    if (!(!C || e.disabled)) return C.addEventListener(Xl, y), () => C.removeEventListener(Xl, y);
  }, [g, e.onSelect, e.disabled]);
  function y() {
    var C, P;
    h(), (P = (C = c.current).onSelect) == null || P.call(C, d.current);
  }
  function h() {
    p.setState("value", d.current, !0);
  }
  if (!g) return null;
  let { disabled: v, value: b, onSelect: x, forceMount: w, keywords: _, ...S } = e;
  return f.createElement(H.div, { ref: ot(a, t), ...S, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!v, "aria-selected": !!m, "data-disabled": !!v, "data-selected": !!m, onPointerMove: v || s.getDisablePointerSelection() ? void 0 : h, onClick: v ? void 0 : y }, e.children);
}), FI = f.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = ve(), s = f.useRef(null), c = f.useRef(null), l = ve(), d = jn(), p = Tt((g) => o || d.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  Kt(() => d.group(i), []), gx(i, s, [e.value, e.heading, c]);
  let m = f.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return f.createElement(H.div, { ref: ot(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && f.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), ya(e, (g) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, f.createElement(mx.Provider, { value: m }, g))));
}), qI = f.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = f.useRef(null), a = Tt((i) => !i.search);
  return !r && !a ? null : f.createElement(H.div, { ref: ot(o, t), ...n, "cmdk-separator": "", role: "separator" });
}), BI = f.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = vd(), i = Tt((l) => l.search), s = Tt((l) => l.selectedItemId), c = jn();
  return f.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), f.createElement(H.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": s, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (l) => {
    o || a.setState("search", l.target.value), r?.(l.target.value);
  } });
}), WI = f.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = f.useRef(null), i = f.useRef(null), s = Tt((l) => l.selectedItemId), c = jn();
  return f.useEffect(() => {
    if (i.current && a.current) {
      let l = i.current, d = a.current, p, m = new ResizeObserver(() => {
        p = requestAnimationFrame(() => {
          let g = l.offsetHeight;
          d.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return m.observe(l), () => {
        cancelAnimationFrame(p), m.unobserve(l);
      };
    }
  }, []), f.createElement(H.div, { ref: ot(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": n, id: c.listId }, ya(e, (l) => f.createElement("div", { ref: ot(i, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), HI = f.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return f.createElement(ra, { open: r, onOpenChange: n }, f.createElement(na, { container: i }, f.createElement(jr, { "cmdk-overlay": "", className: o }), f.createElement(Dr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, f.createElement(hx, { ref: t, ...s }))));
}), VI = f.forwardRef((e, t) => Tt((r) => r.filtered.count === 0) ? f.createElement(H.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), zI = f.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return f.createElement(H.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, ya(e, (i) => f.createElement("div", { "aria-hidden": !0 }, i)));
}), Me = Object.assign(hx, { List: WI, Item: $I, Input: BI, Group: FI, Separator: qI, Dialog: HI, Empty: VI, Loading: zI });
function GI(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function UI(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function vx(e) {
  let t = f.useRef(e);
  return Kt(() => {
    t.current = e;
  }), t;
}
var Kt = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function mr(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Tt(e) {
  let t = vd(), r = () => e(t.snapshot());
  return f.useSyncExternalStore(t.subscribe, r, r);
}
function gx(e, t, r, n = []) {
  let o = f.useRef(), a = jn();
  return Kt(() => {
    var i;
    let s = (() => {
      var l;
      for (let d of r) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (l = d.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = n.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(pr, s), o.current = s;
  }), o;
}
var KI = () => {
  let [e, t] = f.useState(), r = mr(() => /* @__PURE__ */ new Map());
  return Kt(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function YI(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ya({ asChild: e, children: t }, r) {
  return e && f.isValidElement(t) ? f.cloneElement(YI(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var XI = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const gd = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Me,
  {
    ref: r,
    className: M(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
gd.displayName = Me.displayName;
const c4 = ({ children: e, ...t }) => /* @__PURE__ */ u.jsx(V$, { ...t, children: /* @__PURE__ */ u.jsx(cw, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ u.jsx(gd, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), yx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ u.jsx(HP, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ u.jsx(
    Me.Input,
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
yx.displayName = Me.Input.displayName;
const bx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Me.List,
  {
    ref: r,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
bx.displayName = Me.List.displayName;
const xx = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  Me.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
xx.displayName = Me.Empty.displayName;
const wx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Me.Group,
  {
    ref: r,
    className: M(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
wx.displayName = Me.Group.displayName;
const _x = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Me.Separator,
  {
    ref: r,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
_x.displayName = Me.Separator.displayName;
const po = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Me.Item,
  {
    ref: r,
    className: M(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
po.displayName = Me.Item.displayName;
const QI = ({
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
QI.displayName = "CommandShortcut";
const ZI = ["top", "right", "bottom", "left"], Nt = Math.min, Ae = Math.max, Oo = Math.round, io = Math.floor, rt = (e) => ({
  x: e,
  y: e
}), JI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, eL = {
  start: "end",
  end: "start"
};
function Ql(e, t, r) {
  return Ae(e, Nt(t, r));
}
function yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function $r(e) {
  return e.split("-")[1];
}
function yd(e) {
  return e === "x" ? "y" : "x";
}
function bd(e) {
  return e === "y" ? "height" : "width";
}
const tL = /* @__PURE__ */ new Set(["top", "bottom"]);
function tt(e) {
  return tL.has(bt(e)) ? "y" : "x";
}
function xd(e) {
  return yd(tt(e));
}
function rL(e, t, r) {
  r === void 0 && (r = !1);
  const n = $r(e), o = xd(e), a = bd(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = jo(i)), [i, jo(i)];
}
function nL(e) {
  const t = jo(e);
  return [Zl(e), t, Zl(t)];
}
function Zl(e) {
  return e.replace(/start|end/g, (t) => eL[t]);
}
const Av = ["left", "right"], Ov = ["right", "left"], oL = ["top", "bottom"], aL = ["bottom", "top"];
function iL(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Ov : Av : t ? Av : Ov;
    case "left":
    case "right":
      return t ? oL : aL;
    default:
      return [];
  }
}
function sL(e, t, r, n) {
  const o = $r(e);
  let a = iL(bt(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Zl)))), a;
}
function jo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => JI[t]);
}
function cL(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Sx(e) {
  return typeof e != "number" ? cL(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Do(e) {
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
function jv(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = tt(t), i = xd(t), s = bd(i), c = bt(t), l = a === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch ($r(t)) {
    case "start":
      g[i] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      g[i] += m * (r && l ? -1 : 1);
      break;
  }
  return g;
}
const lL = async (e, t, r) => {
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
  } = jv(l, n, c), m = n, g = {}, y = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: v,
      fn: b
    } = s[h], {
      x,
      y: w,
      data: _,
      reset: S
    } = await b({
      x: d,
      y: p,
      initialPlacement: n,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, p = w ?? p, g = {
      ...g,
      [v]: {
        ...g[v],
        ..._
      }
    }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (l = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: p
    } = jv(l, m, c)), h = -1);
  }
  return {
    x: d,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: g
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
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = yt(t, e), y = Sx(g), v = s[m ? p === "floating" ? "reference" : "floating" : p], b = Do(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(v))) == null || r ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
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
  }, S = Do(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: w,
    strategy: c
  }) : x);
  return {
    top: (b.top - S.top + y.top) / _.y,
    bottom: (S.bottom - b.bottom + y.bottom) / _.y,
    left: (b.left - S.left + y.left) / _.x,
    right: (S.right - b.right + y.right) / _.x
  };
}
const uL = (e) => ({
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
    } = yt(e, t) || {};
    if (l == null)
      return {};
    const p = Sx(d), m = {
      x: r,
      y: n
    }, g = xd(o), y = bd(g), h = await i.getDimensions(l), v = g === "y", b = v ? "top" : "left", x = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", _ = a.reference[y] + a.reference[g] - m[g] - a.floating[y], S = m[g] - a.reference[g], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let P = C ? C[w] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(C))) && (P = s.floating[w] || a.floating[y]);
    const E = _ / 2 - S / 2, T = P / 2 - h[y] / 2 - 1, I = Nt(p[b], T), j = Nt(p[x], T), V = I, q = P - h[y] - j, N = P / 2 - h[y] / 2 + E, $ = Ql(V, N, q), F = !c.arrow && $r(o) != null && N !== $ && a.reference[y] / 2 - (N < V ? I : j) - h[y] / 2 < 0, D = F ? N < V ? N - V : N - q : 0;
    return {
      [g]: m[g] + D,
      data: {
        [g]: $,
        centerOffset: N - $ - D,
        ...F && {
          alignmentOffset: D
        }
      },
      reset: F
    };
  }
}), dL = function(e) {
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: h = !0,
        ...v
      } = yt(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const b = bt(o), x = tt(s), w = bt(s) === s, _ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = m || (w || !h ? [jo(s)] : nL(s)), C = y !== "none";
      !m && C && S.push(...sL(s, h, y, _));
      const P = [s, ...S], E = await pn(t, v), T = [];
      let I = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && T.push(E[b]), p) {
        const N = rL(o, i, _);
        T.push(E[N[0]], E[N[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: T
      }], !T.every((N) => N <= 0)) {
        var j, V;
        const N = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, $ = P[N];
        if ($ && (!(p === "alignment" ? x !== tt($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((R) => R.overflows[0] > 0 && tt(R.placement) === x)))
          return {
            data: {
              index: N,
              overflows: I
            },
            reset: {
              placement: $
            }
          };
        let F = (V = I.filter((D) => D.overflows[0] <= 0).sort((D, R) => D.overflows[1] - R.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!F)
          switch (g) {
            case "bestFit": {
              var q;
              const D = (q = I.filter((R) => {
                if (C) {
                  const W = tt(R.placement);
                  return W === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((W) => W > 0).reduce((W, O) => W + O, 0)]).sort((R, W) => R[1] - W[1])[0]) == null ? void 0 : q[0];
              D && (F = D);
              break;
            }
            case "initialPlacement":
              F = s;
              break;
          }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function Dv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function kv(e) {
  return ZI.some((t) => e[t] >= 0);
}
const fL = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = yt(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await pn(t, {
            ...o,
            elementContext: "reference"
          }), i = Dv(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: kv(i)
            }
          };
        }
        case "escaped": {
          const a = await pn(t, {
            ...o,
            altBoundary: !0
          }), i = Dv(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: kv(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Cx = /* @__PURE__ */ new Set(["left", "top"]);
async function pL(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = bt(r), s = $r(r), c = tt(r) === "y", l = Cx.has(i) ? -1 : 1, d = a && c ? -1 : 1, p = yt(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
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
  return s && typeof y == "number" && (g = s === "end" ? y * -1 : y), c ? {
    x: g * d,
    y: m * l
  } : {
    x: m * l,
    y: g * d
  };
}
const mL = function(e) {
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
      } = t, c = await pL(t, e);
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
}, hL = function(e) {
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
          fn: (v) => {
            let {
              x: b,
              y: x
            } = v;
            return {
              x: b,
              y: x
            };
          }
        },
        ...c
      } = yt(e, t), l = {
        x: r,
        y: n
      }, d = await pn(t, c), p = tt(bt(o)), m = yd(p);
      let g = l[m], y = l[p];
      if (a) {
        const v = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", x = g + d[v], w = g - d[b];
        g = Ql(x, g, w);
      }
      if (i) {
        const v = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = y + d[v], w = y - d[b];
        y = Ql(x, y, w);
      }
      const h = s.fn({
        ...t,
        [m]: g,
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
}, vL = function(e) {
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
      } = yt(e, t), d = {
        x: r,
        y: n
      }, p = tt(o), m = yd(p);
      let g = d[m], y = d[p];
      const h = yt(s, t), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const w = m === "y" ? "height" : "width", _ = a.reference[m] - a.floating[w] + v.mainAxis, S = a.reference[m] + a.reference[w] - v.mainAxis;
        g < _ ? g = _ : g > S && (g = S);
      }
      if (l) {
        var b, x;
        const w = m === "y" ? "width" : "height", _ = Cx.has(bt(o)), S = a.reference[p] - a.floating[w] + (_ && ((b = i.offset) == null ? void 0 : b[p]) || 0) + (_ ? 0 : v.crossAxis), C = a.reference[p] + a.reference[w] + (_ ? 0 : ((x = i.offset) == null ? void 0 : x[p]) || 0) - (_ ? v.crossAxis : 0);
        y < S ? y = S : y > C && (y = C);
      }
      return {
        [m]: g,
        [p]: y
      };
    }
  };
}, gL = function(e) {
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
      } = yt(e, t), d = await pn(t, l), p = bt(o), m = $r(o), g = tt(o) === "y", {
        width: y,
        height: h
      } = a.floating;
      let v, b;
      p === "top" || p === "bottom" ? (v = p, b = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, v = m === "end" ? "top" : "bottom");
      const x = h - d.top - d.bottom, w = y - d.left - d.right, _ = Nt(h - d[v], x), S = Nt(y - d[b], w), C = !t.middlewareData.shift;
      let P = _, E = S;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (E = w), (n = t.middlewareData.shift) != null && n.enabled.y && (P = x), C && !m) {
        const I = Ae(d.left, 0), j = Ae(d.right, 0), V = Ae(d.top, 0), q = Ae(d.bottom, 0);
        g ? E = y - 2 * (I !== 0 || j !== 0 ? I + j : Ae(d.left, d.right)) : P = h - 2 * (V !== 0 || q !== 0 ? V + q : Ae(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
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
function ba() {
  return typeof window < "u";
}
function Fr(e) {
  return Px(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Oe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function dt(e) {
  var t;
  return (t = (Px(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Px(e) {
  return ba() ? e instanceof Node || e instanceof Oe(e).Node : !1;
}
function ze(e) {
  return ba() ? e instanceof Element || e instanceof Oe(e).Element : !1;
}
function it(e) {
  return ba() ? e instanceof HTMLElement || e instanceof Oe(e).HTMLElement : !1;
}
function Iv(e) {
  return !ba() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Oe(e).ShadowRoot;
}
const yL = /* @__PURE__ */ new Set(["inline", "contents"]);
function Dn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !yL.has(o);
}
const bL = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xL(e) {
  return bL.has(Fr(e));
}
const wL = [":popover-open", ":modal"];
function xa(e) {
  return wL.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const _L = ["transform", "translate", "scale", "rotate", "perspective"], SL = ["transform", "translate", "scale", "rotate", "perspective", "filter"], CL = ["paint", "layout", "strict", "content"];
function wd(e) {
  const t = _d(), r = ze(e) ? Ge(e) : e;
  return _L.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || SL.some((n) => (r.willChange || "").includes(n)) || CL.some((n) => (r.contain || "").includes(n));
}
function PL(e) {
  let t = Mt(e);
  for (; it(t) && !Er(t); ) {
    if (wd(t))
      return t;
    if (xa(t))
      return null;
    t = Mt(t);
  }
  return null;
}
function _d() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const EL = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Er(e) {
  return EL.has(Fr(e));
}
function Ge(e) {
  return Oe(e).getComputedStyle(e);
}
function wa(e) {
  return ze(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mt(e) {
  if (Fr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Iv(e) && e.host || // Fallback.
    dt(e)
  );
  return Iv(t) ? t.host : t;
}
function Ex(e) {
  const t = Mt(e);
  return Er(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : it(t) && Dn(t) ? t : Ex(t);
}
function mn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Ex(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Oe(o);
  if (a) {
    const s = Jl(i);
    return t.concat(i, i.visualViewport || [], Dn(o) ? o : [], s && r ? mn(s) : []);
  }
  return t.concat(o, mn(o, [], r));
}
function Jl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Rx(e) {
  const t = Ge(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = it(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Oo(r) !== a || Oo(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function Sd(e) {
  return ze(e) ? e : e.contextElement;
}
function yr(e) {
  const t = Sd(e);
  if (!it(t))
    return rt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Rx(t);
  let i = (a ? Oo(r.width) : r.width) / n, s = (a ? Oo(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const RL = /* @__PURE__ */ rt(0);
function Tx(e) {
  const t = Oe(e);
  return !_d() || !t.visualViewport ? RL : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function TL(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Oe(e) ? !1 : t;
}
function Yt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = Sd(e);
  let i = rt(1);
  t && (n ? ze(n) && (i = yr(n)) : i = yr(e));
  const s = TL(a, r, n) ? Tx(a) : rt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, d = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = Oe(a), g = n && ze(n) ? Oe(n) : n;
    let y = m, h = Jl(y);
    for (; h && n && g !== y; ) {
      const v = yr(h), b = h.getBoundingClientRect(), x = Ge(h), w = b.left + (h.clientLeft + parseFloat(x.paddingLeft)) * v.x, _ = b.top + (h.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, l *= v.y, d *= v.x, p *= v.y, c += w, l += _, y = Oe(h), h = Jl(y);
    }
  }
  return Do({
    width: d,
    height: p,
    x: c,
    y: l
  });
}
function Cd(e, t) {
  const r = wa(e).scrollLeft;
  return t ? t.left + r : Yt(dt(e)).left + r;
}
function Nx(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Cd(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function NL(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = dt(n), s = t ? xa(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = rt(1);
  const d = rt(0), p = it(n);
  if ((p || !p && !a) && ((Fr(n) !== "body" || Dn(i)) && (c = wa(n)), it(n))) {
    const g = Yt(n);
    l = yr(n), d.x = g.x + n.clientLeft, d.y = g.y + n.clientTop;
  }
  const m = i && !p && !a ? Nx(i, c, !0) : rt(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + d.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + d.y + m.y
  };
}
function ML(e) {
  return Array.from(e.getClientRects());
}
function AL(e) {
  const t = dt(e), r = wa(e), n = e.ownerDocument.body, o = Ae(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Ae(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Cd(e);
  const s = -r.scrollTop;
  return Ge(n).direction === "rtl" && (i += Ae(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function OL(e, t) {
  const r = Oe(e), n = dt(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = _d();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const jL = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function DL(e, t) {
  const r = Yt(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = it(e) ? yr(e) : rt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Lv(e, t, r) {
  let n;
  if (t === "viewport")
    n = OL(e, r);
  else if (t === "document")
    n = AL(dt(e));
  else if (ze(t))
    n = DL(t, r);
  else {
    const o = Tx(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Do(n);
}
function Mx(e, t) {
  const r = Mt(e);
  return r === t || !ze(r) || Er(r) ? !1 : Ge(r).position === "fixed" || Mx(r, t);
}
function kL(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = mn(e, [], !1).filter((s) => ze(s) && Fr(s) !== "body"), o = null;
  const a = Ge(e).position === "fixed";
  let i = a ? Mt(e) : e;
  for (; ze(i) && !Er(i); ) {
    const s = Ge(i), c = wd(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && jL.has(o.position) || Dn(i) && !c && Mx(e, i)) ? n = n.filter((d) => d !== i) : o = s, i = Mt(i);
  }
  return t.set(e, n), n;
}
function IL(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? xa(t) ? [] : kL(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((l, d) => {
    const p = Lv(t, d, o);
    return l.top = Ae(p.top, l.top), l.right = Nt(p.right, l.right), l.bottom = Nt(p.bottom, l.bottom), l.left = Ae(p.left, l.left), l;
  }, Lv(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function LL(e) {
  const {
    width: t,
    height: r
  } = Rx(e);
  return {
    width: t,
    height: r
  };
}
function $L(e, t, r) {
  const n = it(t), o = dt(t), a = r === "fixed", i = Yt(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = rt(0);
  function l() {
    c.x = Cd(o);
  }
  if (n || !n && !a)
    if ((Fr(t) !== "body" || Dn(o)) && (s = wa(t)), n) {
      const g = Yt(t, !0, a, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && l();
  a && !n && o && l();
  const d = o && !n && !a ? Nx(o, s) : rt(0), p = i.left + s.scrollLeft - c.x - d.x, m = i.top + s.scrollTop - c.y - d.y;
  return {
    x: p,
    y: m,
    width: i.width,
    height: i.height
  };
}
function yl(e) {
  return Ge(e).position === "static";
}
function $v(e, t) {
  if (!it(e) || Ge(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return dt(e) === r && (r = r.ownerDocument.body), r;
}
function Ax(e, t) {
  const r = Oe(e);
  if (xa(e))
    return r;
  if (!it(e)) {
    let o = Mt(e);
    for (; o && !Er(o); ) {
      if (ze(o) && !yl(o))
        return o;
      o = Mt(o);
    }
    return r;
  }
  let n = $v(e, t);
  for (; n && xL(n) && yl(n); )
    n = $v(n, t);
  return n && Er(n) && yl(n) && !wd(n) ? r : n || PL(e) || r;
}
const FL = async function(e) {
  const t = this.getOffsetParent || Ax, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: $L(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function qL(e) {
  return Ge(e).direction === "rtl";
}
const BL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NL,
  getDocumentElement: dt,
  getClippingRect: IL,
  getOffsetParent: Ax,
  getElementRects: FL,
  getClientRects: ML,
  getDimensions: LL,
  getScale: yr,
  isElement: ze,
  isRTL: qL
};
function Ox(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function WL(e, t) {
  let r = null, n;
  const o = dt(e);
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
      height: g
    } = l;
    if (s || t(), !m || !g)
      return;
    const y = io(p), h = io(o.clientWidth - (d + m)), v = io(o.clientHeight - (p + g)), b = io(d), w = {
      rootMargin: -y + "px " + -h + "px " + -v + "px " + -b + "px",
      threshold: Ae(0, Nt(1, c)) || 1
    };
    let _ = !0;
    function S(C) {
      const P = C[0].intersectionRatio;
      if (P !== c) {
        if (!_)
          return i();
        P ? i(!1, P) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Ox(l, e.getBoundingClientRect()) && i(), _ = !1;
    }
    try {
      r = new IntersectionObserver(S, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(S, w);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function HL(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Sd(e), d = o || a ? [...l ? mn(l) : [], ...mn(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", r, {
      passive: !0
    }), a && b.addEventListener("resize", r);
  });
  const p = l && s ? WL(l, r) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var w;
      (w = g) == null || w.observe(t);
    })), r();
  }), l && !c && g.observe(l), g.observe(t));
  let y, h = c ? Yt(e) : null;
  c && v();
  function v() {
    const b = Yt(e);
    h && !Ox(h, b) && r(), h = b, y = requestAnimationFrame(v);
  }
  return r(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", r), a && x.removeEventListener("resize", r);
    }), p?.(), (b = g) == null || b.disconnect(), g = null, c && cancelAnimationFrame(y);
  };
}
const VL = mL, zL = hL, GL = dL, UL = gL, KL = fL, Fv = uL, YL = vL, XL = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: BL,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return lL(e, t, {
    ...o,
    platform: a
  });
};
var QL = typeof document < "u", ZL = function() {
}, mo = QL ? Qv : ZL;
function ko(e, t) {
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
        if (!ko(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !ko(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function jx(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qv(e, t) {
  const r = jx(e);
  return Math.round(t * r) / r;
}
function bl(e) {
  const t = f.useRef(e);
  return mo(() => {
    t.current = e;
  }), t;
}
function JL(e) {
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
  }), [m, g] = f.useState(n);
  ko(m, n) || g(n);
  const [y, h] = f.useState(null), [v, b] = f.useState(null), x = f.useCallback((R) => {
    R !== C.current && (C.current = R, h(R));
  }, []), w = f.useCallback((R) => {
    R !== P.current && (P.current = R, b(R));
  }, []), _ = a || y, S = i || v, C = f.useRef(null), P = f.useRef(null), E = f.useRef(d), T = c != null, I = bl(c), j = bl(o), V = bl(l), q = f.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: r,
      middleware: m
    };
    j.current && (R.platform = j.current), XL(C.current, P.current, R).then((W) => {
      const O = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      N.current && !ko(E.current, O) && (E.current = O, bn.flushSync(() => {
        p(O);
      }));
    });
  }, [m, t, r, j, V]);
  mo(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const N = f.useRef(!1);
  mo(() => (N.current = !0, () => {
    N.current = !1;
  }), []), mo(() => {
    if (_ && (C.current = _), S && (P.current = S), _ && S) {
      if (I.current)
        return I.current(_, S, q);
      q();
    }
  }, [_, S, q, I, T]);
  const $ = f.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: x,
    setFloating: w
  }), [x, w]), F = f.useMemo(() => ({
    reference: _,
    floating: S
  }), [_, S]), D = f.useMemo(() => {
    const R = {
      position: r,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return R;
    const W = qv(F.floating, d.x), O = qv(F.floating, d.y);
    return s ? {
      ...R,
      transform: "translate(" + W + "px, " + O + "px)",
      ...jx(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: W,
      top: O
    };
  }, [r, s, F.floating, d.x, d.y]);
  return f.useMemo(() => ({
    ...d,
    update: q,
    refs: $,
    elements: F,
    floatingStyles: D
  }), [d, q, $, F, D]);
}
const e$ = (e) => {
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
      return n && t(n) ? n.current != null ? Fv({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Fv({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, t$ = (e, t) => ({
  ...VL(e),
  options: [e, t]
}), r$ = (e, t) => ({
  ...zL(e),
  options: [e, t]
}), n$ = (e, t) => ({
  ...YL(e),
  options: [e, t]
}), o$ = (e, t) => ({
  ...GL(e),
  options: [e, t]
}), a$ = (e, t) => ({
  ...UL(e),
  options: [e, t]
}), i$ = (e, t) => ({
  ...KL(e),
  options: [e, t]
}), s$ = (e, t) => ({
  ...e$(e),
  options: [e, t]
});
var c$ = "Arrow", Dx = f.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ u.jsx(
    H.svg,
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
Dx.displayName = c$;
var l$ = Dx, Pd = "Popper", [kx, jt] = be(Pd), [u$, Ix] = kx(Pd), Lx = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = f.useState(null);
  return /* @__PURE__ */ u.jsx(u$, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Lx.displayName = Pd;
var $x = "PopperAnchor", Fx = f.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = Ix($x, r), i = f.useRef(null), s = ne(t, i);
    return f.useEffect(() => {
      a.onAnchorChange(n?.current || i.current);
    }), n ? null : /* @__PURE__ */ u.jsx(H.div, { ...o, ref: s });
  }
);
Fx.displayName = $x;
var Ed = "PopperContent", [d$, f$] = kx(Ed), qx = f.forwardRef(
  (e, t) => {
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
      updatePositionStrategy: g = "optimized",
      onPlaced: y,
      ...h
    } = e, v = Ix(Ed, r), [b, x] = f.useState(null), w = ne(t, (k) => x(k)), [_, S] = f.useState(null), C = va(_), P = C?.width ?? 0, E = C?.height ?? 0, T = n + (a !== "center" ? "-" + a : ""), I = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, j = Array.isArray(l) ? l : [l], V = j.length > 0, q = {
      padding: I,
      boundary: j.filter(m$),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: N, floatingStyles: $, placement: F, isPositioned: D, middlewareData: R } = JL({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...k) => HL(...k, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        t$({ mainAxis: o + E, alignmentAxis: i }),
        c && r$({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? n$() : void 0,
          ...q
        }),
        c && o$({ ...q }),
        a$({
          ...q,
          apply: ({ elements: k, rects: X, availableWidth: re, availableHeight: oe }) => {
            const { width: te, height: U } = X.reference, ie = k.floating.style;
            ie.setProperty("--radix-popper-available-width", `${re}px`), ie.setProperty("--radix-popper-available-height", `${oe}px`), ie.setProperty("--radix-popper-anchor-width", `${te}px`), ie.setProperty("--radix-popper-anchor-height", `${U}px`);
          }
        }),
        _ && s$({ element: _, padding: s }),
        h$({ arrowWidth: P, arrowHeight: E }),
        m && i$({ strategy: "referenceHidden", ...q })
      ]
    }), [W, O] = Hx(F), z = ue(y);
    me(() => {
      D && z?.();
    }, [D, z]);
    const A = R.arrow?.x, B = R.arrow?.y, K = R.arrow?.centerOffset !== 0, [G, ee] = f.useState();
    return me(() => {
      b && ee(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: D ? $.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            R.transformOrigin?.x,
            R.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...R.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          d$,
          {
            scope: r,
            placedSide: W,
            onArrowChange: S,
            arrowX: A,
            arrowY: B,
            shouldHideArrow: K,
            children: /* @__PURE__ */ u.jsx(
              H.div,
              {
                "data-side": W,
                "data-align": O,
                ...h,
                ref: w,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: D ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
qx.displayName = Ed;
var Bx = "PopperArrow", p$ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Wx = f.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = f$(Bx, n), i = p$[a.placedSide];
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
          l$,
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
Wx.displayName = Bx;
function m$(e) {
  return e !== null;
}
var h$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, d] = Hx(r), p = { start: "0%", center: "50%", end: "100%" }[d], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let y = "", h = "";
    return l === "bottom" ? (y = i ? p : `${m}px`, h = `${-c}px`) : l === "top" ? (y = i ? p : `${m}px`, h = `${n.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, h = i ? p : `${g}px`) : l === "left" && (y = `${n.floating.width + c}px`, h = i ? p : `${g}px`), { data: { x: y, y: h } };
  }
});
function Hx(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var kn = Lx, In = Fx, _a = qx, Sa = Wx, Ca = "Popover", [Vx, l4] = be(Ca, [
  jt
]), Ln = jt(), [v$, Dt] = Vx(Ca), zx = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Ln(t), c = f.useRef(null), [l, d] = f.useState(!1), [p, m] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ca
  });
  return /* @__PURE__ */ u.jsx(kn, { ...s, children: /* @__PURE__ */ u.jsx(
    v$,
    {
      scope: t,
      contentId: ve(),
      triggerRef: c,
      open: p,
      onOpenChange: m,
      onOpenToggle: f.useCallback(() => m((g) => !g), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: f.useCallback(() => d(!0), []),
      onCustomAnchorRemove: f.useCallback(() => d(!1), []),
      modal: i,
      children: r
    }
  ) });
};
zx.displayName = Ca;
var Gx = "PopoverAnchor", g$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Dt(Gx, r), a = Ln(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return f.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ u.jsx(In, { ...a, ...n, ref: t });
  }
);
g$.displayName = Gx;
var Ux = "PopoverTrigger", Kx = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Dt(Ux, r), a = Ln(r), i = ne(t, o.triggerRef), s = /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Jx(o.open),
        ...n,
        ref: i,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ u.jsx(In, { asChild: !0, ...a, children: s });
  }
);
Kx.displayName = Ux;
var Rd = "PopoverPortal", [y$, b$] = Vx(Rd, {
  forceMount: void 0
}), Yx = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = Dt(Rd, t);
  return /* @__PURE__ */ u.jsx(y$, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: n }) }) });
};
Yx.displayName = Rd;
var Rr = "PopoverContent", Xx = f.forwardRef(
  (e, t) => {
    const r = b$(Rr, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = Dt(Rr, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(w$, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(_$, { ...o, ref: t }) });
  }
);
Xx.displayName = Rr;
var x$ = /* @__PURE__ */ Rt("PopoverContent.RemoveScroll"), w$ = f.forwardRef(
  (e, t) => {
    const r = Dt(Rr, e.__scopePopover), n = f.useRef(null), o = ne(t, n), a = f.useRef(!1);
    return f.useEffect(() => {
      const i = n.current;
      if (i) return ea(i);
    }, []), /* @__PURE__ */ u.jsx(_n, { as: x$, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      Qx,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: L(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), a.current || r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: L(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: L(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), _$ = f.forwardRef(
  (e, t) => {
    const r = Dt(Rr, e.__scopePopover), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Qx,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (n.current || r.triggerRef.current?.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          r.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Qx = f.forwardRef(
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
    } = e, m = Dt(Rr, r), g = Ln(r);
    return Zo(), /* @__PURE__ */ u.jsx(
      wn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ u.jsx(
          At,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              _a,
              {
                "data-state": Jx(m.open),
                role: "dialog",
                id: m.contentId,
                ...g,
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
), Zx = "PopoverClose", S$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Dt(Zx, r);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: L(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
S$.displayName = Zx;
var C$ = "PopoverArrow", P$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Ln(r);
    return /* @__PURE__ */ u.jsx(Sa, { ...o, ...n, ref: t });
  }
);
P$.displayName = C$;
function Jx(e) {
  return e ? "open" : "closed";
}
var E$ = zx, R$ = Kx, T$ = Yx, ew = Xx;
const Td = E$, Nd = R$, Pa = f.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ u.jsx(T$, { children: /* @__PURE__ */ u.jsx(
  ew,
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
Pa.displayName = ew.displayName;
function u4({ value: e, onChange: t }) {
  const [r, n] = f.useState(e);
  function o(a) {
    n(a), t?.(a);
  }
  return /* @__PURE__ */ u.jsxs(Td, { children: [
    /* @__PURE__ */ u.jsx(Nd, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      Ir,
      {
        variant: "outline",
        className: M(
          "w-full justify-start text-left font-normal",
          !r && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ u.jsx(Sg, { className: "mr-2" }),
          r ? lt(r, "PPP", { locale: Zr }) : /* @__PURE__ */ u.jsx("span", { children: "Selecione uma data" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(Pa, { className: "w-auto p-0", children: /* @__PURE__ */ u.jsx(
      lb,
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
function N$(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function M$(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function A$(e) {
  return /^[0-5][0-9]$/.test(e);
}
function Ea(e, { max: t, min: r = 0, loop: n = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (n ? (o > t && (o = r), o < r && (o = t)) : (o > t && (o = t), o < r && (o = r)), o.toString().padStart(2, "0"));
}
function tw(e) {
  return N$(e) ? e : Ea(e, { max: 23 });
}
function rw(e) {
  return M$(e) ? e : Ea(e, { min: 1, max: 12 });
}
function Io(e) {
  return A$(e) ? e : Ea(e, { max: 59 });
}
function Md(e, { min: t, max: r, step: n }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += n, Ea(String(o), { min: t, max: r, loop: !0 }));
}
function O$(e, t) {
  return Md(e, { min: 0, max: 23, step: t });
}
function j$(e, t) {
  return Md(e, { min: 1, max: 12, step: t });
}
function Bv(e, t) {
  return Md(e, { min: 0, max: 59, step: t });
}
function D$(e, t) {
  const r = Io(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function k$(e, t) {
  const r = Io(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function I$(e, t) {
  const r = tw(t);
  return e.setHours(parseInt(r, 10)), e;
}
function L$(e, t, r) {
  const n = parseInt(rw(t), 10), o = q$(n, r);
  return e.setHours(o), e;
}
function eu(e, t, r, n) {
  switch (r) {
    case "minutes":
      return D$(e, t);
    case "seconds":
      return k$(e, t);
    case "hours":
      return I$(e, t);
    case "12hours":
      return n ? L$(e, t, n) : e;
    default:
      return e;
  }
}
function $$(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Io(String(e.getMinutes()));
    case "seconds":
      return Io(String(e.getSeconds()));
    case "hours":
      return tw(String(e.getHours()));
    case "12hours":
      return rw(String(nw(e.getHours())));
    default:
      return "00";
  }
}
function F$(e, t, r) {
  switch (r) {
    case "minutes":
      return Bv(e, t);
    case "seconds":
      return Bv(e, t);
    case "hours":
      return O$(e, t);
    case "12hours":
      return j$(e, t);
    default:
      return "00";
  }
}
function q$(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function nw(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function B$(e) {
  return Array.from({ length: 12 }, (t, r) => ({
    value: r,
    label: lt(new Date(2021, r), "MMMM", { locale: e })
  }));
}
function W$(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (r, n) => ({
    value: t.getFullYear() - e + n,
    label: (t.getFullYear() - e + n).toString()
  }));
}
function ow({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  yearRange: n = 50,
  ...o
}) {
  const a = f.useMemo(() => {
    let l = Zr;
    const { options: d, localize: p, formatLong: m } = o.locale || {};
    return d && p && m && (l = {
      options: d,
      localize: p,
      formatLong: m
    }), B$(l);
  }, []), i = f.useMemo(() => W$(n), []), s = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() - n, 0, 1);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  }, c = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() + n, 11, 31);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  };
  return /* @__PURE__ */ u.jsx(
    sb,
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
          gt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&_svg]:size-3"
        ),
        nav_button_previous: M(
          "absolute left-1",
          s() && "pointer-events-none"
        ),
        nav_button_next: M(
          "absolute right-1",
          c() && "pointer-events-none"
        ),
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: M(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          o.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: M(
          gt({ variant: "ghost" }),
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
        Chevron: ({ ...l }) => l.orientation === "left" ? /* @__PURE__ */ u.jsx(Tu, { className: "h-4 w-4" }) : /* @__PURE__ */ u.jsx(xn, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: l }) => /* @__PURE__ */ u.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ u.jsxs(
            mu,
            {
              defaultValue: l.date.getMonth().toString(),
              onValueChange: (d) => {
                const p = new Date(l.date);
                p.setMonth(Number.parseInt(d, 10)), o.onMonthChange?.(p);
              },
              children: [
                /* @__PURE__ */ u.jsx(Ho, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(hu, {}) }),
                /* @__PURE__ */ u.jsx(Vo, { children: a.map((d) => /* @__PURE__ */ u.jsx(
                  gn,
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
            mu,
            {
              defaultValue: l.date.getFullYear().toString(),
              onValueChange: (d) => {
                const p = new Date(l.date);
                p.setFullYear(Number.parseInt(d, 10)), o.onMonthChange?.(p);
              },
              children: [
                /* @__PURE__ */ u.jsx(Ho, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(hu, {}) }),
                /* @__PURE__ */ u.jsx(Vo, { children: i.map((d) => /* @__PURE__ */ u.jsx(
                  gn,
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
ow.displayName = "Calendar";
const aw = f.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: n, onLeftFocus: o, onRightFocus: a }, i) => {
    const s = (l) => {
      l.key === "ArrowRight" && a?.(), l.key === "ArrowLeft" && o?.();
    }, c = (l) => {
      if (t?.(l), r) {
        const d = new Date(r), p = nw(r.getHours());
        n?.(
          eu(
            d,
            p.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ u.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ u.jsxs(
      mu,
      {
        defaultValue: e,
        onValueChange: (l) => c(l),
        children: [
          /* @__PURE__ */ u.jsx(
            Ho,
            {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: /* @__PURE__ */ u.jsx(hu, {})
            }
          ),
          /* @__PURE__ */ u.jsxs(Vo, { children: [
            /* @__PURE__ */ u.jsx(gn, { value: "AM", children: "AM" }),
            /* @__PURE__ */ u.jsx(gn, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
aw.displayName = "TimePeriodSelect";
const ho = f.forwardRef(
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
    ...g
  }, y) => {
    const [h, v] = f.useState(!1), [b, x] = f.useState("0");
    f.useEffect(() => {
      if (h) {
        const C = setTimeout(() => {
          v(!1);
        }, 2e3);
        return () => clearTimeout(C);
      }
    }, [h]);
    const w = f.useMemo(() => $$(a, l), [a, l]), _ = (C) => l === "12hours" && h && w.slice(1, 2) === "1" && b === "0" ? `0${C}` : h ? w.slice(1, 2) + C : `0${C}`, S = (C) => {
      if (C.key !== "Tab") {
        if (C.preventDefault(), C.key === "ArrowRight" && m?.(), C.key === "ArrowLeft" && p?.(), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const P = C.key === "ArrowUp" ? 1 : -1, E = F$(w, P, l);
          h && v(!1);
          const T = a ? new Date(a) : /* @__PURE__ */ new Date();
          i?.(eu(T, E, l, d));
        }
        if (C.key >= "0" && C.key <= "9") {
          l === "12hours" && x(C.key);
          const P = _(C.key);
          h && m?.(), v((T) => !T);
          const E = a ? new Date(a) : /* @__PURE__ */ new Date();
          i?.(eu(E, P, l, d));
        }
      }
    };
    return /* @__PURE__ */ u.jsx(
      Fd,
      {
        ref: y,
        id: n || l,
        name: o || l,
        className: M(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: r || w,
        onChange: (C) => {
          C.preventDefault(), s?.(C);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (C) => {
          c?.(C), S(C);
        },
        ...g
      }
    );
  }
);
ho.displayName = "TimePickerInput";
const iw = f.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: n = "second" }, o) => {
    const a = f.useRef(null), i = f.useRef(null), s = f.useRef(null), c = f.useRef(null), [l, d] = f.useState(
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
    ), /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ u.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ u.jsx(IP, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ u.jsx(
        ho,
        {
          picker: r === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: i,
          period: l,
          onRightFocus: () => a?.current?.focus()
        }
      ),
      (n === "minute" || n === "second") && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        ":",
        /* @__PURE__ */ u.jsx(
          ho,
          {
            picker: "minutes",
            date: e,
            onDateChange: t,
            ref: a,
            onLeftFocus: () => i?.current?.focus(),
            onRightFocus: () => s?.current?.focus()
          }
        )
      ] }),
      n === "second" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        ":",
        /* @__PURE__ */ u.jsx(
          ho,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: s,
            onLeftFocus: () => a?.current?.focus(),
            onRightFocus: () => c?.current?.focus()
          }
        )
      ] }),
      r === 12 && /* @__PURE__ */ u.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ u.jsx(
        aw,
        {
          period: l,
          setPeriod: d,
          date: e,
          onDateChange: (p) => {
            t?.(p), p && p?.getHours() >= 12 ? d("PM") : d("AM");
          },
          ref: c,
          onLeftFocus: () => s?.current?.focus()
        }
      ) })
    ] });
  }
);
iw.displayName = "TimePicker";
const H$ = f.forwardRef(
  ({
    locale: e = Zr,
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
    const [g, y] = f.useState(r ?? t), h = br(null), [v, b] = f.useState(
      r
    ), x = (T) => {
      if (!T)
        return;
      if (!t) {
        T.setHours(
          g?.getHours() ?? 0,
          g?.getMinutes() ?? 0,
          g?.getSeconds() ?? 0
        ), n?.(T), y(T);
        return;
      }
      const j = (T.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), V = DT(t, {
        days: Math.ceil(j)
      });
      V.setHours(
        g?.getHours() ?? 0,
        g?.getMinutes() ?? 0,
        g?.getSeconds() ?? 0
      ), n?.(V), y(V);
    };
    We(() => {
      r || b(void 0);
    }, [r]);
    const w = (T) => {
      T && (n?.(T), y(T), b(T));
    };
    wu(
      m,
      () => ({
        ...h.current,
        value: v
      }),
      [v]
    );
    const _ = {
      hour24: s?.hour24 ?? `PPP HH:mm${!c || c === "second" ? ":ss" : ""}`,
      hour12: s?.hour12 ?? `PP hh:mm${!c || c === "second" ? ":ss" : ""} b`
    };
    let S = Zr;
    const { options: C, localize: P, formatLong: E } = e;
    return C && P && E && (S = {
      ...Zr,
      options: C,
      localize: P,
      formatLong: E
    }), /* @__PURE__ */ u.jsxs(Td, { children: [
      /* @__PURE__ */ u.jsx(Nd, { asChild: !0, disabled: i, children: /* @__PURE__ */ u.jsxs(
        Ir,
        {
          variant: "outline",
          className: M(
            "w-full justify-start text-left font-normal",
            !v && "text-muted-foreground",
            d
          ),
          ref: h,
          children: [
            /* @__PURE__ */ u.jsx(Sg, { className: "mr-2 h-4 w-4" }),
            /* @__PURE__ */ u.jsx("span", { className: "truncate block", title: l, children: v ? lt(
              v,
              o === 24 ? _.hour24 : _.hour12,
              {
                locale: S
              }
            ) : /* @__PURE__ */ u.jsx("span", { children: l }) })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsxs(Pa, { className: "w-auto p-0", children: [
        /* @__PURE__ */ u.jsx(
          ow,
          {
            mode: "single",
            selected: v,
            month: g,
            onSelect: (T) => {
              T && (T.setHours(
                g?.getHours() ?? 0,
                g?.getMinutes() ?? 0,
                g?.getSeconds() ?? 0
              ), w(T));
            },
            onMonthChange: x,
            yearRange: a,
            locale: e,
            ...p
          }
        ),
        c !== "day" && /* @__PURE__ */ u.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ u.jsx(
          iw,
          {
            onChange: (T) => {
              n?.(T), b(T), T && y(T);
            },
            date: g,
            hourCycle: o,
            granularity: c
          }
        ) })
      ] })
    ] });
  }
);
H$.displayName = "DateTimePicker";
const V$ = ra, d4 = ju, z$ = na, f4 = kr, sw = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  jr,
  {
    ref: r,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
sw.displayName = jr.displayName;
const cw = f.forwardRef(({ className: e, onClose: t, ...r }, n) => /* @__PURE__ */ u.jsxs(z$, { children: [
  /* @__PURE__ */ u.jsx(sw, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ u.jsxs(
    Dr,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          kr,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ u.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ u.jsx(Qo, { className: "h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
cw.displayName = Dr.displayName;
const G$ = ({
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
G$.displayName = "DialogHeader";
const U$ = ({
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
U$.displayName = "DialogFooter";
const K$ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Sn,
  {
    ref: r,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
K$.displayName = Sn.displayName;
const Y$ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Cn,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Y$.displayName = Cn.displayName;
var xl = "rovingFocusGroup.onEntryFocus", X$ = { bubbles: !1, cancelable: !0 }, $n = "RovingFocusGroup", [tu, lw, Q$] = er($n), [Z$, kt] = be(
  $n,
  [Q$]
), [J$, eF] = Z$($n), uw = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(tu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(tu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(tF, { ...e, ref: t }) }) })
);
uw.displayName = $n;
var tF = f.forwardRef((e, t) => {
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
  } = e, m = f.useRef(null), g = ne(t, m), y = xt(a), [h, v] = xe({
    prop: i,
    defaultProp: s ?? null,
    onChange: c,
    caller: $n
  }), [b, x] = f.useState(!1), w = ue(l), _ = lw(r), S = f.useRef(!1), [C, P] = f.useState(0);
  return f.useEffect(() => {
    const E = m.current;
    if (E)
      return E.addEventListener(xl, w), () => E.removeEventListener(xl, w);
  }, [w]), /* @__PURE__ */ u.jsx(
    J$,
    {
      scope: r,
      orientation: n,
      dir: y,
      loop: o,
      currentTabStopId: h,
      onItemFocus: f.useCallback(
        (E) => v(E),
        [v]
      ),
      onItemShiftTab: f.useCallback(() => x(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => P((E) => E + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => P((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        H.div,
        {
          tabIndex: b || C === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: L(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: L(e.onFocus, (E) => {
            const T = !S.current;
            if (E.target === E.currentTarget && T && !b) {
              const I = new CustomEvent(xl, X$);
              if (E.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const j = _().filter((F) => F.focusable), V = j.find((F) => F.active), q = j.find((F) => F.id === h), $ = [V, q, ...j].filter(
                  Boolean
                ).map((F) => F.ref.current);
                pw($, d);
              }
            }
            S.current = !1;
          }),
          onBlur: L(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), dw = "RovingFocusGroupItem", fw = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = ve(), l = a || c, d = eF(dw, r), p = d.currentTabStopId === l, m = lw(r), { onFocusableItemAdd: g, onFocusableItemRemove: y, currentTabStopId: h } = d;
    return f.useEffect(() => {
      if (n)
        return g(), () => y();
    }, [n, g, y]), /* @__PURE__ */ u.jsx(
      tu.ItemSlot,
      {
        scope: r,
        id: l,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          H.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...s,
            ref: t,
            onMouseDown: L(e.onMouseDown, (v) => {
              n ? d.onItemFocus(l) : v.preventDefault();
            }),
            onFocus: L(e.onFocus, () => d.onItemFocus(l)),
            onKeyDown: L(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const b = oF(v, d.orientation, d.dir);
              if (b !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = m().filter((_) => _.focusable).map((_) => _.ref.current);
                if (b === "last") w.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && w.reverse();
                  const _ = w.indexOf(v.currentTarget);
                  w = d.loop ? aF(w, _ + 1) : w.slice(_ + 1);
                }
                setTimeout(() => pw(w));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
fw.displayName = dw;
var rF = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function nF(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function oF(e, t, r) {
  const n = nF(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return rF[n];
}
function pw(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function aF(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Ra = uw, Ta = fw, ru = ["Enter", " "], iF = ["ArrowDown", "PageUp", "Home"], mw = ["ArrowUp", "PageDown", "End"], sF = [...iF, ...mw], cF = {
  ltr: [...ru, "ArrowRight"],
  rtl: [...ru, "ArrowLeft"]
}, lF = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Fn = "Menu", [hn, uF, dF] = er(Fn), [ar, hw] = be(Fn, [
  dF,
  jt,
  kt
]), qn = jt(), vw = kt(), [gw, It] = ar(Fn), [fF, Bn] = ar(Fn), yw = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = qn(t), [c, l] = f.useState(null), d = f.useRef(!1), p = ue(a), m = xt(o);
  return f.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(kn, { ...s, children: /* @__PURE__ */ u.jsx(
    gw,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u.jsx(
        fF,
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
yw.displayName = Fn;
var pF = "MenuAnchor", Ad = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = qn(r);
    return /* @__PURE__ */ u.jsx(In, { ...o, ...n, ref: t });
  }
);
Ad.displayName = pF;
var Od = "MenuPortal", [mF, bw] = ar(Od, {
  forceMount: void 0
}), xw = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = It(Od, t);
  return /* @__PURE__ */ u.jsx(mF, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: n }) }) });
};
xw.displayName = Od;
var Ie = "MenuContent", [hF, jd] = ar(Ie), ww = f.forwardRef(
  (e, t) => {
    const r = bw(Ie, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = It(Ie, e.__scopeMenu), i = Bn(Ie, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(hn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(hn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ u.jsx(vF, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(gF, { ...o, ref: t }) }) }) });
  }
), vF = f.forwardRef(
  (e, t) => {
    const r = It(Ie, e.__scopeMenu), n = f.useRef(null), o = ne(t, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return ea(a);
    }, []), /* @__PURE__ */ u.jsx(
      Dd,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: L(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), gF = f.forwardRef((e, t) => {
  const r = It(Ie, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    Dd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), yF = /* @__PURE__ */ Rt("MenuContent.ScrollLock"), Dd = f.forwardRef(
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
      onDismiss: g,
      disableOutsideScroll: y,
      ...h
    } = e, v = It(Ie, r), b = Bn(Ie, r), x = qn(r), w = vw(r), _ = uF(r), [S, C] = f.useState(null), P = f.useRef(null), E = ne(t, P, v.onContentChange), T = f.useRef(0), I = f.useRef(""), j = f.useRef(0), V = f.useRef(null), q = f.useRef("right"), N = f.useRef(0), $ = y ? _n : f.Fragment, F = y ? { as: yF, allowPinchZoom: !0 } : void 0, D = (W) => {
      const O = I.current + W, z = _().filter((k) => !k.disabled), A = document.activeElement, B = z.find((k) => k.ref.current === A)?.textValue, K = z.map((k) => k.textValue), G = MF(K, O, B), ee = z.find((k) => k.textValue === G)?.ref.current;
      (function k(X) {
        I.current = X, window.clearTimeout(T.current), X !== "" && (T.current = window.setTimeout(() => k(""), 1e3));
      })(O), ee && setTimeout(() => ee.focus());
    };
    f.useEffect(() => () => window.clearTimeout(T.current), []), Zo();
    const R = f.useCallback((W) => q.current === V.current?.side && OF(W, V.current?.area), []);
    return /* @__PURE__ */ u.jsx(
      hF,
      {
        scope: r,
        searchRef: I,
        onItemEnter: f.useCallback(
          (W) => {
            R(W) && W.preventDefault();
          },
          [R]
        ),
        onItemLeave: f.useCallback(
          (W) => {
            R(W) || (P.current?.focus(), C(null));
          },
          [R]
        ),
        onTriggerLeave: f.useCallback(
          (W) => {
            R(W) && W.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: f.useCallback((W) => {
          V.current = W;
        }, []),
        children: /* @__PURE__ */ u.jsx($, { ...F, children: /* @__PURE__ */ u.jsx(
          wn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: L(a, (W) => {
              W.preventDefault(), P.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ u.jsx(
              At,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ u.jsx(
                  Ra,
                  {
                    asChild: !0,
                    ...w,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: C,
                    onEntryFocus: L(c, (W) => {
                      b.isUsingKeyboardRef.current || W.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      _a,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": $w(v.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...x,
                        ...h,
                        ref: E,
                        style: { outline: "none", ...h.style },
                        onKeyDown: L(h.onKeyDown, (W) => {
                          const z = W.target.closest("[data-radix-menu-content]") === W.currentTarget, A = W.ctrlKey || W.altKey || W.metaKey, B = W.key.length === 1;
                          z && (W.key === "Tab" && W.preventDefault(), !A && B && D(W.key));
                          const K = P.current;
                          if (W.target !== K || !sF.includes(W.key)) return;
                          W.preventDefault();
                          const ee = _().filter((k) => !k.disabled).map((k) => k.ref.current);
                          mw.includes(W.key) && ee.reverse(), TF(ee);
                        }),
                        onBlur: L(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(T.current), I.current = "");
                        }),
                        onPointerMove: L(
                          e.onPointerMove,
                          vn((W) => {
                            const O = W.target, z = N.current !== W.clientX;
                            if (W.currentTarget.contains(O) && z) {
                              const A = W.clientX > N.current ? "right" : "left";
                              q.current = A, N.current = W.clientX;
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
ww.displayName = Ie;
var bF = "MenuGroup", kd = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { role: "group", ...n, ref: t });
  }
);
kd.displayName = bF;
var xF = "MenuLabel", _w = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
_w.displayName = xF;
var Lo = "MenuItem", Wv = "menu.itemSelect", Na = f.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = f.useRef(null), i = Bn(Lo, e.__scopeMenu), s = jd(Lo, e.__scopeMenu), c = ne(t, a), l = f.useRef(!1), d = () => {
      const p = a.current;
      if (!r && p) {
        const m = new CustomEvent(Wv, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Wv, (g) => n?.(g), { once: !0 }), tn(p, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      Sw,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: L(e.onClick, d),
        onPointerDown: (p) => {
          e.onPointerDown?.(p), l.current = !0;
        },
        onPointerUp: L(e.onPointerUp, (p) => {
          l.current || p.currentTarget?.click();
        }),
        onKeyDown: L(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          r || m && p.key === " " || ru.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
Na.displayName = Lo;
var Sw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = jd(Lo, r), s = vw(r), c = f.useRef(null), l = ne(t, c), [d, p] = f.useState(!1), [m, g] = f.useState("");
    return f.useEffect(() => {
      const y = c.current;
      y && g((y.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ u.jsx(
      hn.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ u.jsx(Ta, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ u.jsx(
          H.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: L(
              e.onPointerMove,
              vn((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: L(
              e.onPointerLeave,
              vn((y) => i.onItemLeave(y))
            ),
            onFocus: L(e.onFocus, () => p(!0)),
            onBlur: L(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), wF = "MenuCheckboxItem", Cw = f.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(Nw, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ u.jsx(
      Na,
      {
        role: "menuitemcheckbox",
        "aria-checked": $o(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": $d(r),
        onSelect: L(
          o.onSelect,
          () => n?.($o(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Cw.displayName = wF;
var Pw = "MenuRadioGroup", [_F, SF] = ar(
  Pw,
  { value: void 0, onValueChange: () => {
  } }
), Ew = f.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = ue(n);
    return /* @__PURE__ */ u.jsx(_F, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ u.jsx(kd, { ...o, ref: t }) });
  }
);
Ew.displayName = Pw;
var Rw = "MenuRadioItem", Tw = f.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = SF(Rw, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ u.jsx(Nw, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ u.jsx(
      Na,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": $d(a),
        onSelect: L(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Tw.displayName = Rw;
var Id = "MenuItemIndicator", [Nw, CF] = ar(
  Id,
  { checked: !1 }
), Mw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = CF(Id, r);
    return /* @__PURE__ */ u.jsx(
      he,
      {
        present: n || $o(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          H.span,
          {
            ...o,
            ref: t,
            "data-state": $d(a.checked)
          }
        )
      }
    );
  }
);
Mw.displayName = Id;
var PF = "MenuSeparator", Aw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(
      H.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Aw.displayName = PF;
var EF = "MenuArrow", Ow = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = qn(r);
    return /* @__PURE__ */ u.jsx(Sa, { ...o, ...n, ref: t });
  }
);
Ow.displayName = EF;
var Ld = "MenuSub", [RF, jw] = ar(Ld), Dw = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = It(Ld, t), i = qn(t), [s, c] = f.useState(null), [l, d] = f.useState(null), p = ue(o);
  return f.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ u.jsx(kn, { ...i, children: /* @__PURE__ */ u.jsx(
    gw,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ u.jsx(
        RF,
        {
          scope: t,
          contentId: ve(),
          triggerId: ve(),
          trigger: s,
          onTriggerChange: c,
          children: r
        }
      )
    }
  ) });
};
Dw.displayName = Ld;
var Xr = "MenuSubTrigger", kw = f.forwardRef(
  (e, t) => {
    const r = It(Xr, e.__scopeMenu), n = Bn(Xr, e.__scopeMenu), o = jw(Xr, e.__scopeMenu), a = jd(Xr, e.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, d = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ u.jsx(Ad, { asChild: !0, ...l, children: /* @__PURE__ */ u.jsx(
      Sw,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": $w(r.open),
        ...e,
        ref: ot(t, o.onTriggerChange),
        onClick: (p) => {
          e.onClick?.(p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: L(
          e.onPointerMove,
          vn((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: L(
          e.onPointerLeave,
          vn((p) => {
            d();
            const m = r.content?.getBoundingClientRect();
            if (m) {
              const g = r.content?.dataset.side, y = g === "right", h = y ? -5 : 5, v = m[y ? "left" : "right"], b = m[y ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + h, y: p.clientY },
                  { x: v, y: m.top },
                  { x: b, y: m.top },
                  { x: b, y: m.bottom },
                  { x: v, y: m.bottom }
                ],
                side: g
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
        onKeyDown: L(e.onKeyDown, (p) => {
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || cF[n.dir].includes(p.key) && (r.onOpenChange(!0), r.content?.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
kw.displayName = Xr;
var Iw = "MenuSubContent", Lw = f.forwardRef(
  (e, t) => {
    const r = bw(Ie, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = It(Ie, e.__scopeMenu), i = Bn(Ie, e.__scopeMenu), s = jw(Iw, e.__scopeMenu), c = f.useRef(null), l = ne(t, c);
    return /* @__PURE__ */ u.jsx(hn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(hn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      Dd,
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
          i.isUsingKeyboardRef.current && c.current?.focus(), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: L(e.onFocusOutside, (d) => {
          d.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: L(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: L(e.onKeyDown, (d) => {
          const p = d.currentTarget.contains(d.target), m = lF[i.dir].includes(d.key);
          p && m && (a.onOpenChange(!1), s.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Lw.displayName = Iw;
function $w(e) {
  return e ? "open" : "closed";
}
function $o(e) {
  return e === "indeterminate";
}
function $d(e) {
  return $o(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function TF(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function NF(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function MF(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = NF(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function AF(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, d = s.y, p = c.x, m = c.y;
    d > n != m > n && r < (p - l) * (n - d) / (m - d) + l && (o = !o);
  }
  return o;
}
function OF(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return AF(r, t);
}
function vn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var jF = yw, DF = Ad, kF = xw, IF = ww, LF = kd, $F = _w, FF = Na, qF = Cw, BF = Ew, WF = Tw, HF = Mw, VF = Aw, zF = Ow, GF = Dw, UF = kw, KF = Lw, Ma = "DropdownMenu", [YF, p4] = be(
  Ma,
  [hw]
), Re = hw(), [XF, Fw] = YF(Ma), qw = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = Re(t), l = f.useRef(null), [d, p] = xe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Ma
  });
  return /* @__PURE__ */ u.jsx(
    XF,
    {
      scope: t,
      triggerId: ve(),
      triggerRef: l,
      contentId: ve(),
      open: d,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ u.jsx(jF, { ...c, open: d, onOpenChange: p, dir: n, modal: s, children: r })
    }
  );
};
qw.displayName = Ma;
var Bw = "DropdownMenuTrigger", Ww = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = Fw(Bw, r), i = Re(r);
    return /* @__PURE__ */ u.jsx(DF, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      H.button,
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
        ref: ot(t, a.triggerRef),
        onPointerDown: L(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: L(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Ww.displayName = Bw;
var QF = "DropdownMenuPortal", Hw = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = Re(t);
  return /* @__PURE__ */ u.jsx(kF, { ...n, ...r });
};
Hw.displayName = QF;
var Vw = "DropdownMenuContent", zw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Fw(Vw, r), a = Re(r), i = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      IF,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: L(e.onCloseAutoFocus, (s) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: L(e.onInteractOutside, (s) => {
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
zw.displayName = Vw;
var ZF = "DropdownMenuGroup", Gw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(LF, { ...o, ...n, ref: t });
  }
);
Gw.displayName = ZF;
var JF = "DropdownMenuLabel", Uw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx($F, { ...o, ...n, ref: t });
  }
);
Uw.displayName = JF;
var e2 = "DropdownMenuItem", Kw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(FF, { ...o, ...n, ref: t });
  }
);
Kw.displayName = e2;
var t2 = "DropdownMenuCheckboxItem", Yw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(qF, { ...o, ...n, ref: t });
});
Yw.displayName = t2;
var r2 = "DropdownMenuRadioGroup", Xw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(BF, { ...o, ...n, ref: t });
});
Xw.displayName = r2;
var n2 = "DropdownMenuRadioItem", Qw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(WF, { ...o, ...n, ref: t });
});
Qw.displayName = n2;
var o2 = "DropdownMenuItemIndicator", Zw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(HF, { ...o, ...n, ref: t });
});
Zw.displayName = o2;
var a2 = "DropdownMenuSeparator", Jw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(VF, { ...o, ...n, ref: t });
});
Jw.displayName = a2;
var i2 = "DropdownMenuArrow", s2 = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(zF, { ...o, ...n, ref: t });
  }
);
s2.displayName = i2;
var c2 = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = Re(t), [s, c] = xe({
    prop: n,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ u.jsx(GF, { ...i, open: s, onOpenChange: c, children: r });
}, l2 = "DropdownMenuSubTrigger", e_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(UF, { ...o, ...n, ref: t });
});
e_.displayName = l2;
var u2 = "DropdownMenuSubContent", t_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(
    KF,
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
t_.displayName = u2;
var d2 = qw, f2 = Ww, r_ = Hw, n_ = zw, p2 = Gw, o_ = Uw, a_ = Kw, i_ = Yw, m2 = Xw, s_ = Qw, c_ = Zw, l_ = Jw, h2 = c2, u_ = e_, d_ = t_;
const m4 = d2, h4 = f2, v4 = p2, g4 = r_, y4 = h2, b4 = m2, v2 = f.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  u_,
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
      /* @__PURE__ */ u.jsx(xn, { className: "ml-auto h-4 w-4" })
    ]
  }
));
v2.displayName = u_.displayName;
const g2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  d_,
  {
    ref: r,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
g2.displayName = d_.displayName;
const y2 = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(r_, { children: /* @__PURE__ */ u.jsx(
  n_,
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
y2.displayName = n_.displayName;
const b2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  a_,
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
b2.displayName = a_.displayName;
const x2 = f.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  i_,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(c_, { children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
x2.displayName = i_.displayName;
const w2 = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  s_,
  {
    ref: n,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(c_, { children: /* @__PURE__ */ u.jsx(Cg, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
w2.displayName = s_.displayName;
const _2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  o_,
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
_2.displayName = o_.displayName;
const S2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  l_,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
S2.displayName = l_.displayName;
const C2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
C2.displayName = "DropdownMenuShortcut";
var P2 = "Label", f_ = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  H.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
f_.displayName = P2;
var p_ = f_;
const E2 = ct(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), m_ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  p_,
  {
    ref: r,
    className: M(E2(), e),
    ...t
  }
));
m_.displayName = p_.displayName;
const x4 = D0, h_ = f.createContext(
  {}
), R2 = ({
  ...e
}) => /* @__PURE__ */ u.jsx(h_.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u.jsx(k0, { ...e }) }), Aa = () => {
  const e = f.useContext(h_), t = f.useContext(v_), { getFieldState: r, formState: n } = eg(), o = r(e.name, n);
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
}, v_ = f.createContext(
  {}
), g_ = f.forwardRef(({ className: e, ...t }, r) => {
  const n = f.useId();
  return /* @__PURE__ */ u.jsx(v_.Provider, { value: { id: n }, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      className: M("space-y-1 relative", e),
      ...t
    }
  ) });
});
g_.displayName = "FormItem";
const y_ = f.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = Aa();
  return /* @__PURE__ */ u.jsx(
    m_,
    {
      ref: r,
      className: M(n && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
y_.displayName = "FormLabel";
const b_ = f.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = Aa();
  return /* @__PURE__ */ u.jsx(
    tg,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
b_.displayName = "FormControl";
const T2 = f.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = Aa();
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
T2.displayName = "FormDescription";
const x_ = f.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o, formMessageId: a } = Aa(), i = o ? String(o?.message) : t;
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
x_.displayName = "FormMessage";
const N2 = ct("font-bold tracking-tight", {
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
}), w4 = Q.forwardRef(
  ({ className: e, variant: t, children: r, ...n }, o) => {
    const a = t || "h1";
    return /* @__PURE__ */ u.jsx(
      a,
      {
        className: M(N2({ variant: t }), e),
        ref: o,
        ...n,
        children: r
      }
    );
  }
), Fd = Q.forwardRef(({ className: e, type: t, ...r }, n) => t === "textarea" ? /* @__PURE__ */ u.jsx(
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
)), _4 = ({
  name: e,
  label: t,
  placeholder: r,
  mask: n,
  ...o
}) => {
  const a = eg();
  return /* @__PURE__ */ u.jsx(
    R2,
    {
      control: a.control,
      name: e,
      render: ({ field: i }) => /* @__PURE__ */ u.jsxs(g_, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ u.jsx(y_, { children: t }),
        /* @__PURE__ */ u.jsx(b_, { children: n ? /* @__PURE__ */ u.jsx(
          nq,
          {
            mask: n,
            placeholder: r,
            ...o,
            ...i
          }
        ) : /* @__PURE__ */ u.jsx(Fd, { placeholder: r, ...o, ...i }) }),
        /* @__PURE__ */ u.jsx(x_, {})
      ] })
    }
  );
};
var w_ = Object.freeze({
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
  wordWrap: "normal"
}), M2 = "VisuallyHidden", Oa = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    H.span,
    {
      ...e,
      ref: t,
      style: { ...w_, ...e.style }
    }
  )
);
Oa.displayName = M2;
var __ = Oa, ir = "NavigationMenu", [qd, S_, A2] = er(ir), [nu, O2, j2] = er(ir), [Bd, S4] = be(
  ir,
  [A2, j2]
), [D2, $e] = Bd(ir), [k2, I2] = Bd(ir), C_ = f.forwardRef(
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
    } = e, [p, m] = f.useState(null), g = ne(t, (T) => m(T)), y = xt(l), h = f.useRef(0), v = f.useRef(0), b = f.useRef(0), [x, w] = f.useState(!0), [_, S] = xe({
      prop: n,
      onChange: (T) => {
        const I = T !== "", j = s > 0;
        I ? (window.clearTimeout(b.current), j && w(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
          () => w(!0),
          s
        )), o?.(T);
      },
      defaultProp: a ?? "",
      caller: ir
    }), C = f.useCallback(() => {
      window.clearTimeout(v.current), v.current = window.setTimeout(() => S(""), 150);
    }, [S]), P = f.useCallback(
      (T) => {
        window.clearTimeout(v.current), S(T);
      },
      [S]
    ), E = f.useCallback(
      (T) => {
        _ === T ? window.clearTimeout(v.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(v.current), S(T);
        }, i);
      },
      [_, S, i]
    );
    return f.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(v.current), window.clearTimeout(b.current);
    }, []), /* @__PURE__ */ u.jsx(
      P_,
      {
        scope: r,
        isRootMenu: !0,
        value: _,
        dir: y,
        orientation: c,
        rootNavigationMenu: p,
        onTriggerEnter: (T) => {
          window.clearTimeout(h.current), x ? E(T) : P(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), C();
        },
        onContentEnter: () => window.clearTimeout(v.current),
        onContentLeave: C,
        onItemSelect: (T) => {
          S((I) => I === T ? "" : T);
        },
        onItemDismiss: () => S(""),
        children: /* @__PURE__ */ u.jsx(
          H.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: y,
            ...d,
            ref: g
          }
        )
      }
    );
  }
);
C_.displayName = ir;
var ou = "NavigationMenuSub", L2 = f.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = $e(ou, r), [l, d] = xe({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: ou
    });
    return /* @__PURE__ */ u.jsx(
      P_,
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
        children: /* @__PURE__ */ u.jsx(H.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
L2.displayName = ou;
var P_ = (e) => {
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
    onContentLeave: g
  } = e, [y, h] = f.useState(null), [v, b] = f.useState(/* @__PURE__ */ new Map()), [x, w] = f.useState(null);
  return /* @__PURE__ */ u.jsx(
    D2,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: s,
      previousValue: On(s),
      baseId: ve(),
      dir: o,
      orientation: a,
      viewport: y,
      onViewportChange: h,
      indicatorTrack: x,
      onIndicatorTrackChange: w,
      onTriggerEnter: ue(d),
      onTriggerLeave: ue(p),
      onContentEnter: ue(m),
      onContentLeave: ue(g),
      onItemSelect: ue(c),
      onItemDismiss: ue(l),
      onViewportContentChange: f.useCallback((_, S) => {
        b((C) => (C.set(_, S), new Map(C)));
      }, []),
      onViewportContentRemove: f.useCallback((_) => {
        b((S) => S.has(_) ? (S.delete(_), new Map(S)) : S);
      }, []),
      children: /* @__PURE__ */ u.jsx(qd.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(k2, { scope: t, items: v, children: i }) })
    }
  );
}, E_ = "NavigationMenuList", R_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = $e(E_, r), a = /* @__PURE__ */ u.jsx(H.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ u.jsx(H.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ u.jsx(qd.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ u.jsx(L_, { asChild: !0, children: a }) : a }) });
  }
);
R_.displayName = E_;
var T_ = "NavigationMenuItem", [$2, N_] = Bd(T_), M_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = ve(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = f.useRef(null), c = f.useRef(null), l = f.useRef(null), d = f.useRef(() => {
    }), p = f.useRef(!1), m = f.useCallback((y = "start") => {
      if (s.current) {
        d.current();
        const h = iu(s.current);
        h.length && Vd(y === "start" ? h : h.reverse());
      }
    }, []), g = f.useCallback(() => {
      if (s.current) {
        const y = iu(s.current);
        y.length && (d.current = z2(y));
      }
    }, []);
    return /* @__PURE__ */ u.jsx(
      $2,
      {
        scope: r,
        value: i,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: l,
        wasEscapeCloseRef: p,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ u.jsx(H.li, { ...o, ref: t })
      }
    );
  }
);
M_.displayName = T_;
var au = "NavigationMenuTrigger", A_ = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = $e(au, e.__scopeNavigationMenu), i = N_(au, e.__scopeNavigationMenu), s = f.useRef(null), c = ne(s, i.triggerRef, t), l = F_(a.baseId, i.value), d = q_(a.baseId, i.value), p = f.useRef(!1), m = f.useRef(!1), g = i.value === a.value;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(qd.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ u.jsx($_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": zd(g),
        "aria-expanded": g,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: L(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: L(
          e.onPointerMove,
          Fo(() => {
            n || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: L(
          e.onPointerLeave,
          Fo(() => {
            n || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: L(e.onClick, () => {
          a.onItemSelect(i.value), m.current = g;
        }),
        onKeyDown: L(e.onKeyDown, (y) => {
          const v = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          g && y.key === v && (i.onEntryKeyDown(), y.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        __,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (y) => {
            const h = i.contentRef.current, v = y.relatedTarget, b = v === s.current, x = h?.contains(v);
            (b || !x) && i.onFocusProxyEnter(b ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ u.jsx("span", { "aria-owns": d })
    ] })
  ] });
});
A_.displayName = au;
var F2 = "NavigationMenuLink", Hv = "navigationMenu.linkSelect", O_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ u.jsx($_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      H.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: L(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(Hv, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Hv, (l) => o?.(l), { once: !0 }), tn(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(vo, {
                bubbles: !0,
                cancelable: !0
              });
              tn(s, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
O_.displayName = F2;
var Wd = "NavigationMenuIndicator", j_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = $e(Wd, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Jv.createPortal(
    /* @__PURE__ */ u.jsx(he, { present: r || a, children: /* @__PURE__ */ u.jsx(q2, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
j_.displayName = Wd;
var q2 = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = $e(Wd, r), a = S_(r), [i, s] = f.useState(
    null
  ), [c, l] = f.useState(null), d = o.orientation === "horizontal", p = !!o.value;
  f.useEffect(() => {
    const y = a().find((h) => h.value === o.value)?.ref.current;
    y && s(y);
  }, [a, o.value]);
  const m = () => {
    i && l({
      size: d ? i.offsetWidth : i.offsetHeight,
      offset: d ? i.offsetLeft : i.offsetTop
    });
  };
  return su(i, m), su(o.indicatorTrack, m), c ? /* @__PURE__ */ u.jsx(
    H.div,
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
}), Tr = "NavigationMenuContent", D_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = $e(Tr, e.__scopeNavigationMenu), a = N_(Tr, e.__scopeNavigationMenu), i = ne(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ u.jsx(B2, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ u.jsx(he, { present: r || s, children: /* @__PURE__ */ u.jsx(
    k_,
    {
      "data-state": zd(s),
      ...c,
      ref: i,
      onPointerEnter: L(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: L(
        e.onPointerLeave,
        Fo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
D_.displayName = Tr;
var B2 = f.forwardRef((e, t) => {
  const r = $e(Tr, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return me(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), me(() => () => o(e.value), [e.value, o]), null;
}), vo = "navigationMenu.rootContentDismiss", k_ = f.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, d = $e(Tr, r), p = f.useRef(null), m = ne(p, t), g = F_(d.baseId, n), y = q_(d.baseId, n), h = S_(r), v = f.useRef(null), { onItemDismiss: b } = d;
  f.useEffect(() => {
    const w = p.current;
    if (d.isRootMenu && w) {
      const _ = () => {
        b(), s(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(vo, _), () => w.removeEventListener(vo, _);
    }
  }, [d.isRootMenu, e.value, o, b, s]);
  const x = f.useMemo(() => {
    const _ = h().map((I) => I.value);
    d.dir === "rtl" && _.reverse();
    const S = _.indexOf(d.value), C = _.indexOf(d.previousValue), P = n === d.value, E = C === _.indexOf(n);
    if (!P && !E) return v.current;
    const T = (() => {
      if (S !== C) {
        if (P && C !== -1) return S > C ? "from-end" : "from-start";
        if (E && S !== -1) return S > C ? "to-start" : "to-end";
      }
      return null;
    })();
    return v.current = T, T;
  }, [d.previousValue, d.value, d.dir, h, n]);
  return /* @__PURE__ */ u.jsx(L_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
    At,
    {
      id: y,
      "aria-labelledby": g,
      "data-motion": x,
      "data-orientation": d.orientation,
      ...l,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const w = new Event(vo, {
          bubbles: !0,
          cancelable: !0
        });
        p.current?.dispatchEvent(w);
      },
      onFocusOutside: L(e.onFocusOutside, (w) => {
        c();
        const _ = w.target;
        d.rootNavigationMenu?.contains(_) && w.preventDefault();
      }),
      onPointerDownOutside: L(e.onPointerDownOutside, (w) => {
        const _ = w.target, S = h().some((P) => P.ref.current?.contains(_)), C = d.isRootMenu && d.viewport?.contains(_);
        (S || C || !d.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: L(e.onKeyDown, (w) => {
        const _ = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !_) {
          const C = iu(w.currentTarget), P = document.activeElement, E = C.findIndex((j) => j === P), I = w.shiftKey ? C.slice(0, E).reverse() : C.slice(E + 1, C.length);
          Vd(I) ? w.preventDefault() : a.current?.focus();
        }
      }),
      onEscapeKeyDown: L(e.onEscapeKeyDown, (w) => {
        i.current = !0;
      })
    }
  ) });
}), Hd = "NavigationMenuViewport", I_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!$e(Hd, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ u.jsx(he, { present: r || a, children: /* @__PURE__ */ u.jsx(W2, { ...n, ref: t }) });
});
I_.displayName = Hd;
var W2 = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = $e(Hd, r), i = ne(t, a.onViewportChange), s = I2(
    Tr,
    e.__scopeNavigationMenu
  ), [c, l] = f.useState(null), [d, p] = f.useState(null), m = c ? c?.width + "px" : void 0, g = c ? c?.height + "px" : void 0, y = !!a.value, h = y ? a.value : a.previousValue;
  return su(d, () => {
    d && l({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ u.jsx(
    H.div,
    {
      "data-state": zd(y),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !y && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: L(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: L(e.onPointerLeave, Fo(a.onContentLeave)),
      children: Array.from(s.items).map(([b, { ref: x, forceMount: w, ..._ }]) => {
        const S = h === b;
        return /* @__PURE__ */ u.jsx(he, { present: w || S, children: /* @__PURE__ */ u.jsx(
          k_,
          {
            ..._,
            ref: ot(x, (C) => {
              S && C && p(C);
            })
          }
        ) }, b);
      })
    }
  );
}), H2 = "FocusGroup", L_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = $e(H2, r);
    return /* @__PURE__ */ u.jsx(nu.Provider, { scope: r, children: /* @__PURE__ */ u.jsx(nu.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(H.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), Vv = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], V2 = "FocusGroupItem", $_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = O2(r), a = $e(V2, r);
    return /* @__PURE__ */ u.jsx(nu.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        ...n,
        ref: t,
        onKeyDown: L(e.onKeyDown, (i) => {
          if (["Home", "End", ...Vv].includes(i.key)) {
            let c = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), Vv.includes(i.key)) {
              const p = c.indexOf(i.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => Vd(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function iu(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Vd(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function z2(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function su(e, t) {
  const r = ue(t);
  me(() => {
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
function zd(e) {
  return e ? "open" : "closed";
}
function F_(e, t) {
  return `${e}-trigger-${t}`;
}
function q_(e, t) {
  return `${e}-content-${t}`;
}
function Fo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var B_ = C_, W_ = R_, G2 = M_, H_ = A_, U2 = O_, V_ = j_, z_ = D_, G_ = I_;
const K2 = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  B_,
  {
    ref: n,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(U_, {})
    ]
  }
));
K2.displayName = B_.displayName;
const Y2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  W_,
  {
    ref: r,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Y2.displayName = W_.displayName;
const C4 = G2, X2 = ct(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), Q2 = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  H_,
  {
    ref: n,
    className: M(X2(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ u.jsx(
        xr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
Q2.displayName = H_.displayName;
const Z2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  z_,
  {
    ref: r,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
Z2.displayName = z_.displayName;
const J2 = U2, U_ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ u.jsx(
  G_,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
U_.displayName = G_.displayName;
const eq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  V_,
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
eq.displayName = V_.displayName;
const tq = Q.forwardRef(({ className: e, title: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(J2, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
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
tq.displayName = "ListItem";
function rq(e) {
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
function P4() {
  return /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center flex-1 p-10", children: /* @__PURE__ */ u.jsx(rq, { className: "w-40" }) });
}
function nq({
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
    Fd,
    {
      value: cb(e, t),
      onChange: s,
      ...n
    }
  );
}
const oq = (e, t = 300) => {
  const [r, n] = nt(e);
  return We(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, zv = ct(
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
), aq = f.forwardRef(
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
    ...g
  }, y) => {
    const [h, v] = f.useState(n), [b, x] = f.useState(!1), [w, _] = f.useState(!1), [S, C] = f.useState(""), P = oq(S, 300);
    We(() => {
      d && d(P ?? "");
    }, [P]);
    const E = (N) => {
      if (N.key === "Enter")
        x(!0);
      else if (N.key === "Backspace" && !N.currentTarget.value) {
        const $ = [...h];
        $.pop(), v($), t($);
      }
    }, T = (N) => {
      const $ = h.includes(N) ? h.filter((F) => F !== N) : [...h, N];
      v($), t($);
    }, I = () => {
      v([]), t([]);
    }, j = () => {
      x((N) => !N);
    }, V = () => {
      const N = h.slice(0, i);
      v(N), t(N);
    }, q = () => {
      if (h.length === e.length)
        I();
      else {
        const N = e.map(($) => $.value);
        v(N), t(N);
      }
    };
    return /* @__PURE__ */ u.jsxs(
      Td,
      {
        open: b,
        onOpenChange: x,
        modal: s,
        children: [
          /* @__PURE__ */ u.jsx(Nd, { asChild: !0, children: /* @__PURE__ */ u.jsx(
            Ir,
            {
              ref: y,
              ...g,
              onClick: j,
              variant: "outline",
              className: M(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, i).map((N) => {
                    const $ = e.find((D) => D.value === N), F = $?.icon;
                    return /* @__PURE__ */ u.jsxs(
                      Vf,
                      {
                        className: M(
                          w ? "animate-bounce" : "",
                          zv({ variant: r })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          F && /* @__PURE__ */ u.jsx(F, { className: "h-4 w-4 mr-2" }),
                          $?.label,
                          /* @__PURE__ */ u.jsx(
                            wf,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (D) => {
                                D.stopPropagation(), T(N);
                              }
                            }
                          )
                        ]
                      },
                      N
                    );
                  }),
                  h.length > i && /* @__PURE__ */ u.jsxs(
                    Vf,
                    {
                      className: M(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        zv({ variant: r })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - i}`,
                        /* @__PURE__ */ u.jsx(
                          wf,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (N) => {
                              N.stopPropagation(), V();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ u.jsx(
                    Qo,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (N) => {
                        N.stopPropagation(), I();
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    cC,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ u.jsx(xr, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ u.jsx(xr, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ u.jsx(
            Pa,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => x(!1),
              children: /* @__PURE__ */ u.jsxs(gd, { shouldFilter: !d, children: [
                /* @__PURE__ */ u.jsx(
                  yx,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: E,
                    onValueChange: C
                  }
                ),
                /* @__PURE__ */ u.jsxs(bx, { children: [
                  !p && /* @__PURE__ */ u.jsx(xx, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ u.jsxs(wx, { children: [
                    !p && !e.length && !!S.length && m && /* @__PURE__ */ u.jsx(
                      po,
                      {
                        onSelect: m,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ u.jsx(BP, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ u.jsx("b", { children: S })
                        ] })
                      },
                      "new"
                    ),
                    p && /* @__PURE__ */ u.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ u.jsx(FP, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !l && /* @__PURE__ */ u.jsxs(
                      po,
                      {
                        onSelect: q,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              className: M(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ u.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((N) => {
                      const $ = h.includes(N.value);
                      return /* @__PURE__ */ u.jsxs(
                        po,
                        {
                          onSelect: () => T(N.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ u.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  $ ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" })
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
                  /* @__PURE__ */ u.jsx(_x, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ u.jsx(
            zP,
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
aq.displayName = "MultiSelect";
const iq = ({ className: e, ...t }) => /* @__PURE__ */ u.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
iq.displayName = "Pagination";
const sq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "ul",
  {
    ref: r,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
sq.displayName = "PaginationContent";
const cq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("li", { ref: r, className: M("", e), ...t }));
cq.displayName = "PaginationItem";
const Gd = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...n
}) => /* @__PURE__ */ u.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      gt({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...n
  }
);
Gd.displayName = "PaginationLink";
const lq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  Gd,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(Tu, { className: "h-4 w-4" })
  }
);
lq.displayName = "PaginationPrevious";
const uq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  Gd,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(xn, { className: "h-4 w-4" })
  }
);
uq.displayName = "PaginationNext";
const dq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(Pg, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
dq.displayName = "PaginationEllipsis";
var Ud = "Radio", [fq, K_] = be(Ud), [pq, mq] = fq(Ud), Y_ = f.forwardRef(
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
    } = e, [p, m] = f.useState(null), g = ne(t, (v) => m(v)), y = f.useRef(!1), h = p ? l || !!p.closest("form") : !0;
    return /* @__PURE__ */ u.jsxs(pq, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ u.jsx(
        H.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": J_(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...d,
          ref: g,
          onClick: L(e.onClick, (v) => {
            o || c?.(), h && (y.current = v.isPropagationStopped(), y.current || v.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ u.jsx(
        Z_,
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
Y_.displayName = Ud;
var X_ = "RadioIndicator", Q_ = f.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = mq(X_, r);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.checked, children: /* @__PURE__ */ u.jsx(
      H.span,
      {
        "data-state": J_(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Q_.displayName = X_;
var hq = "RadioBubbleInput", Z_ = f.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = f.useRef(null), s = ne(i, a), c = On(r), l = va(t);
    return f.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const p = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (c !== r && g) {
        const y = new Event("click", { bubbles: n });
        g.call(d, r), d.dispatchEvent(y);
      }
    }, [c, r, n]), /* @__PURE__ */ u.jsx(
      H.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Z_.displayName = hq;
function J_(e) {
  return e ? "checked" : "unchecked";
}
var vq = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ja = "RadioGroup", [gq, E4] = be(ja, [
  kt,
  K_
]), eS = kt(), tS = K_(), [yq, bq] = gq(ja), rS = f.forwardRef(
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
    } = e, g = eS(r), y = xt(l), [h, v] = xe({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: ja
    });
    return /* @__PURE__ */ u.jsx(
      yq,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: h,
        onValueChange: v,
        children: /* @__PURE__ */ u.jsx(
          Ra,
          {
            asChild: !0,
            ...g,
            orientation: c,
            dir: y,
            loop: d,
            children: /* @__PURE__ */ u.jsx(
              H.div,
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
rS.displayName = ja;
var nS = "RadioGroupItem", oS = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = bq(nS, r), i = a.disabled || n, s = eS(r), c = tS(r), l = f.useRef(null), d = ne(t, l), p = a.value === o.value, m = f.useRef(!1);
    return f.useEffect(() => {
      const g = (h) => {
        vq.includes(h.key) && (m.current = !0);
      }, y = () => m.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ u.jsx(
      Ta,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ u.jsx(
          Y_,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...c,
            ...o,
            name: a.name,
            ref: d,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: L((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: L(o.onFocus, () => {
              m.current && l.current?.click();
            })
          }
        )
      }
    );
  }
);
oS.displayName = nS;
var xq = "RadioGroupIndicator", aS = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = tS(r);
    return /* @__PURE__ */ u.jsx(Q_, { ...o, ...n, ref: t });
  }
);
aS.displayName = xq;
var iS = rS, sS = oS, wq = aS;
const _q = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  iS,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: r
  }
));
_q.displayName = iS.displayName;
const Sq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  sS,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(wq, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(Cg, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Sq.displayName = sS.displayName;
function cu(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Cq(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var Kd = "ScrollArea", [cS, R4] = be(Kd), [Pq, Fe] = cS(Kd), lS = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = f.useState(null), [l, d] = f.useState(null), [p, m] = f.useState(null), [g, y] = f.useState(null), [h, v] = f.useState(null), [b, x] = f.useState(0), [w, _] = f.useState(0), [S, C] = f.useState(!1), [P, E] = f.useState(!1), T = ne(t, (j) => c(j)), I = xt(o);
    return /* @__PURE__ */ u.jsx(
      Pq,
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
        scrollbarX: g,
        onScrollbarXChange: y,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: C,
        scrollbarY: h,
        onScrollbarYChange: v,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: x,
        onCornerHeightChange: _,
        children: /* @__PURE__ */ u.jsx(
          H.div,
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
lS.displayName = Kd;
var uS = "ScrollAreaViewport", dS = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = Fe(uS, r), s = f.useRef(null), c = ne(t, s, i.onViewportChange);
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
        H.div,
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
dS.displayName = uS;
var ft = "ScrollAreaScrollbar", Yd = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Fe(ft, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return f.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ u.jsx(Eq, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ u.jsx(Rq, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ u.jsx(fS, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ u.jsx(Xd, { ...n, ref: t }) : null;
  }
);
Yd.displayName = ft;
var Eq = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Fe(ft, e.__scopeScrollArea), [a, i] = f.useState(!1);
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ u.jsx(he, { present: r || a, children: /* @__PURE__ */ u.jsx(
    fS,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), Rq = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Fe(ft, e.__scopeScrollArea), a = e.orientation === "horizontal", i = ka(() => c("SCROLL_END"), 100), [s, c] = Cq("hidden", {
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
        const g = l[d];
        p !== g && (c("SCROLL"), i()), p = g;
      };
      return l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ u.jsx(he, { present: r || s !== "hidden", children: /* @__PURE__ */ u.jsx(
    Xd,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: L(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: L(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), fS = f.forwardRef((e, t) => {
  const r = Fe(ft, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = f.useState(!1), s = e.orientation === "horizontal", c = ka(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? l : d);
    }
  }, 10);
  return Nr(r.viewport, c), Nr(r.content, c), /* @__PURE__ */ u.jsx(he, { present: n || a, children: /* @__PURE__ */ u.jsx(
    Xd,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Xd = f.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = Fe(ft, e.__scopeScrollArea), a = f.useRef(null), i = f.useRef(0), [s, c] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = gS(s.viewport, s.content), d = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, g) {
    return jq(m, i.current, s, g);
  }
  return r === "horizontal" ? /* @__PURE__ */ u.jsx(
    Tq,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, g = Gv(m, s, o.dir);
          a.current.style.transform = `translate3d(${g}px, 0, 0)`;
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
    Nq,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, g = Gv(m, s);
          a.current.style.transform = `translate3d(0, ${g}px, 0)`;
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
}), Tq = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Fe(ft, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ne(t, c, a.onScrollbarXChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    mS,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Da(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), bS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Bo(i.paddingLeft),
            paddingEnd: Bo(i.paddingRight)
          }
        });
      }
    }
  );
}), Nq = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Fe(ft, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ne(t, c, a.onScrollbarYChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    mS,
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
        "--radix-scroll-area-thumb-height": Da(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), bS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Bo(i.paddingTop),
            paddingEnd: Bo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [Mq, pS] = cS(ft), mS = f.forwardRef((e, t) => {
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
  } = e, g = Fe(ft, r), [y, h] = f.useState(null), v = ne(t, (T) => h(T)), b = f.useRef(null), x = f.useRef(""), w = g.viewport, _ = n.content - n.viewport, S = ue(d), C = ue(c), P = ka(p, 10);
  function E(T) {
    if (b.current) {
      const I = T.clientX - b.current.left, j = T.clientY - b.current.top;
      l({ x: I, y: j });
    }
  }
  return f.useEffect(() => {
    const T = (I) => {
      const j = I.target;
      y?.contains(j) && S(I, _);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [w, y, _, S]), f.useEffect(C, [n, C]), Nr(y, P), Nr(g.content, P), /* @__PURE__ */ u.jsx(
    Mq,
    {
      scope: r,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: ue(a),
      onThumbPointerUp: ue(i),
      onThumbPositionChange: C,
      onThumbPointerDown: ue(s),
      children: /* @__PURE__ */ u.jsx(
        H.div,
        {
          ...m,
          ref: v,
          style: { position: "absolute", ...m.style },
          onPointerDown: L(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), b.current = y.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), E(T));
          }),
          onPointerMove: L(e.onPointerMove, E),
          onPointerUp: L(e.onPointerUp, (T) => {
            const I = T.target;
            I.hasPointerCapture(T.pointerId) && I.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = x.current, g.viewport && (g.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), qo = "ScrollAreaThumb", hS = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = pS(qo, e.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(he, { present: r || o.hasThumb, children: /* @__PURE__ */ u.jsx(Aq, { ref: t, ...n }) });
  }
), Aq = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = Fe(qo, r), i = pS(qo, r), { onThumbPositionChange: s } = i, c = ne(
      t,
      (p) => i.onThumbChange(p)
    ), l = f.useRef(void 0), d = ka(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (d(), !l.current) {
            const g = Dq(p, s);
            l.current = g, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, d, s]), /* @__PURE__ */ u.jsx(
      H.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: L(e.onPointerDownCapture, (p) => {
          const g = p.target.getBoundingClientRect(), y = p.clientX - g.left, h = p.clientY - g.top;
          i.onThumbPointerDown({ x: y, y: h });
        }),
        onPointerUp: L(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
hS.displayName = qo;
var Qd = "ScrollAreaCorner", vS = f.forwardRef(
  (e, t) => {
    const r = Fe(Qd, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ u.jsx(Oq, { ...e, ref: t }) : null;
  }
);
vS.displayName = Qd;
var Oq = f.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = Fe(Qd, r), [a, i] = f.useState(0), [s, c] = f.useState(0), l = !!(a && s);
  return Nr(o.scrollbarX, () => {
    const d = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(d), c(d);
  }), Nr(o.scrollbarY, () => {
    const d = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(d), i(d);
  }), l ? /* @__PURE__ */ u.jsx(
    H.div,
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
function Bo(e) {
  return e ? parseInt(e, 10) : 0;
}
function gS(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Da(e) {
  const t = gS(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function jq(e, t, r, n = "ltr") {
  const o = Da(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, d = r.content - r.viewport, p = n === "ltr" ? [0, d] : [d * -1, 0];
  return yS([c, l], p)(e);
}
function Gv(e, t, r = "ltr") {
  const n = Da(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], l = cu(e, c);
  return yS([0, i], [0, s])(l);
}
function yS(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function bS(e, t) {
  return e > 0 && e < t;
}
var Dq = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function ka(e, t) {
  const r = ue(e), n = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(n.current), []), f.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Nr(e, t) {
  const r = ue(t);
  me(() => {
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
var xS = lS, kq = dS, Iq = vS;
const Lq = Q.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  xS,
  {
    ref: n,
    className: M("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(kq, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(wS, {}),
      /* @__PURE__ */ u.jsx(Iq, {})
    ]
  }
));
Lq.displayName = xS.displayName;
const wS = Q.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ u.jsx(
  Yd,
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
    children: /* @__PURE__ */ u.jsx(hS, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
wS.displayName = Yd.displayName;
var $q = [" ", "Enter", "ArrowUp", "ArrowDown"], Fq = [" ", "Enter"], Xt = "Select", [Ia, La, qq] = er(Xt), [qr, T4] = be(Xt, [
  qq,
  jt
]), $a = jt(), [Bq, Lt] = qr(Xt), [Wq, Hq] = qr(Xt), _S = (e) => {
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
    required: g,
    form: y
  } = e, h = $a(t), [v, b] = f.useState(null), [x, w] = f.useState(null), [_, S] = f.useState(!1), C = xt(l), [P, E] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Xt
  }), [T, I] = xe({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: Xt
  }), j = f.useRef(null), V = v ? y || !!v.closest("form") : !0, [q, N] = f.useState(/* @__PURE__ */ new Set()), $ = Array.from(q).map((F) => F.props.value).join(";");
  return /* @__PURE__ */ u.jsx(kn, { ...h, children: /* @__PURE__ */ u.jsxs(
    Bq,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: b,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: _,
      onValueNodeHasChildrenChange: S,
      contentId: ve(),
      value: T,
      onValueChange: I,
      open: P,
      onOpenChange: E,
      dir: C,
      triggerPointerDownPosRef: j,
      disabled: m,
      children: [
        /* @__PURE__ */ u.jsx(Ia.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          Wq,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((F) => {
              N((D) => new Set(D).add(F));
            }, []),
            onNativeOptionRemove: f.useCallback((F) => {
              N((D) => {
                const R = new Set(D);
                return R.delete(F), R;
              });
            }, []),
            children: r
          }
        ) }),
        V ? /* @__PURE__ */ u.jsxs(
          US,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: d,
            autoComplete: p,
            value: T,
            onChange: (F) => I(F.target.value),
            disabled: m,
            form: y,
            children: [
              T === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(q)
            ]
          },
          $
        ) : null
      ]
    }
  ) });
};
_S.displayName = Xt;
var SS = "SelectTrigger", CS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = $a(r), i = Lt(SS, r), s = i.disabled || n, c = ne(t, i.onTriggerChange), l = La(r), d = f.useRef("touch"), [p, m, g] = YS((h) => {
      const v = l().filter((w) => !w.disabled), b = v.find((w) => w.value === i.value), x = XS(v, h, b);
      x !== void 0 && i.onValueChange(x.value);
    }), y = (h) => {
      s || (i.onOpenChange(!0), g()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(In, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      H.button,
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
        "data-placeholder": KS(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: L(o.onClick, (h) => {
          h.currentTarget.focus(), d.current !== "mouse" && y(h);
        }),
        onPointerDown: L(o.onPointerDown, (h) => {
          d.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (y(h), h.preventDefault());
        }),
        onKeyDown: L(o.onKeyDown, (h) => {
          const v = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && $q.includes(h.key) && (y(), h.preventDefault());
        })
      }
    ) });
  }
);
CS.displayName = SS;
var PS = "SelectValue", ES = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = Lt(PS, r), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, p = ne(t, c.onValueNodeChange);
    return me(() => {
      l(d);
    }, [l, d]), /* @__PURE__ */ u.jsx(
      H.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: KS(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: i }) : a
      }
    );
  }
);
ES.displayName = PS;
var Vq = "SelectIcon", RS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(H.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
RS.displayName = Vq;
var zq = "SelectPortal", TS = (e) => /* @__PURE__ */ u.jsx(tr, { asChild: !0, ...e });
TS.displayName = zq;
var Qt = "SelectContent", NS = f.forwardRef(
  (e, t) => {
    const r = Lt(Qt, e.__scopeSelect), [n, o] = f.useState();
    if (me(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? bn.createPortal(
        /* @__PURE__ */ u.jsx(MS, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(Ia.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(AS, { ...e, ref: t });
  }
);
NS.displayName = Qt;
var qe = 10, [MS, $t] = qr(Qt), Gq = "SelectContentImpl", Uq = /* @__PURE__ */ Rt("SelectContent.RemoveScroll"), AS = f.forwardRef(
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
      collisionPadding: g,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...b
    } = e, x = Lt(Qt, r), [w, _] = f.useState(null), [S, C] = f.useState(null), P = ne(t, (k) => _(k)), [E, T] = f.useState(null), [I, j] = f.useState(
      null
    ), V = La(r), [q, N] = f.useState(!1), $ = f.useRef(!1);
    f.useEffect(() => {
      if (w) return ea(w);
    }, [w]), Zo();
    const F = f.useCallback(
      (k) => {
        const [X, ...re] = V().map((U) => U.ref.current), [oe] = re.slice(-1), te = document.activeElement;
        for (const U of k)
          if (U === te || (U?.scrollIntoView({ block: "nearest" }), U === X && S && (S.scrollTop = 0), U === oe && S && (S.scrollTop = S.scrollHeight), U?.focus(), document.activeElement !== te)) return;
      },
      [V, S]
    ), D = f.useCallback(
      () => F([E, w]),
      [F, E, w]
    );
    f.useEffect(() => {
      q && D();
    }, [q, D]);
    const { onOpenChange: R, triggerPointerDownPosRef: W } = x;
    f.useEffect(() => {
      if (w) {
        let k = { x: 0, y: 0 };
        const X = (oe) => {
          k = {
            x: Math.abs(Math.round(oe.pageX) - (W.current?.x ?? 0)),
            y: Math.abs(Math.round(oe.pageY) - (W.current?.y ?? 0))
          };
        }, re = (oe) => {
          k.x <= 10 && k.y <= 10 ? oe.preventDefault() : w.contains(oe.target) || R(!1), document.removeEventListener("pointermove", X), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [w, R, W]), f.useEffect(() => {
      const k = () => R(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [R]);
    const [O, z] = YS((k) => {
      const X = V().filter((te) => !te.disabled), re = X.find((te) => te.ref.current === document.activeElement), oe = XS(X, k, re);
      oe && setTimeout(() => oe.ref.current.focus());
    }), A = f.useCallback(
      (k, X, re) => {
        const oe = !$.current && !re;
        (x.value !== void 0 && x.value === X || oe) && (T(k), oe && ($.current = !0));
      },
      [x.value]
    ), B = f.useCallback(() => w?.focus(), [w]), K = f.useCallback(
      (k, X, re) => {
        const oe = !$.current && !re;
        (x.value !== void 0 && x.value === X || oe) && j(k);
      },
      [x.value]
    ), G = n === "popper" ? lu : OS, ee = G === lu ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: y,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ u.jsx(
      MS,
      {
        scope: r,
        content: w,
        viewport: S,
        onViewportChange: C,
        itemRefCallback: A,
        selectedItem: E,
        onItemLeave: B,
        itemTextRefCallback: K,
        focusSelectedItem: D,
        selectedItemText: I,
        position: n,
        isPositioned: q,
        searchRef: O,
        children: /* @__PURE__ */ u.jsx(_n, { as: Uq, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          wn,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: L(o, (k) => {
              x.trigger?.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              At,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  G,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...b,
                    ...ee,
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
                    onKeyDown: L(b.onKeyDown, (k) => {
                      const X = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !X && k.key.length === 1 && z(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let oe = V().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (oe = oe.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const te = k.target, U = oe.indexOf(te);
                          oe = oe.slice(U + 1);
                        }
                        setTimeout(() => F(oe)), k.preventDefault();
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
AS.displayName = Gq;
var Kq = "SelectItemAlignedPosition", OS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = Lt(Qt, r), i = $t(Qt, r), [s, c] = f.useState(null), [l, d] = f.useState(null), p = ne(t, (P) => d(P)), m = La(r), g = f.useRef(!1), y = f.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: b, focusSelectedItem: x } = i, w = f.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && v && b) {
      const P = a.trigger.getBoundingClientRect(), E = l.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), I = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const te = I.left - E.left, U = T.left - te, ie = P.left - U, Y = P.width + ie, ge = Math.max(Y, E.width), we = window.innerWidth - qe, Pe = cu(U, [
          qe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(qe, we - ge)
        ]);
        s.style.minWidth = Y + "px", s.style.left = Pe + "px";
      } else {
        const te = E.right - I.right, U = window.innerWidth - T.right - te, ie = window.innerWidth - P.right - U, Y = P.width + ie, ge = Math.max(Y, E.width), we = window.innerWidth - qe, Pe = cu(U, [
          qe,
          Math.max(qe, we - ge)
        ]);
        s.style.minWidth = Y + "px", s.style.right = Pe + "px";
      }
      const j = m(), V = window.innerHeight - qe * 2, q = h.scrollHeight, N = window.getComputedStyle(l), $ = parseInt(N.borderTopWidth, 10), F = parseInt(N.paddingTop, 10), D = parseInt(N.borderBottomWidth, 10), R = parseInt(N.paddingBottom, 10), W = $ + F + q + R + D, O = Math.min(v.offsetHeight * 5, W), z = window.getComputedStyle(h), A = parseInt(z.paddingTop, 10), B = parseInt(z.paddingBottom, 10), K = P.top + P.height / 2 - qe, G = V - K, ee = v.offsetHeight / 2, k = v.offsetTop + ee, X = $ + F + k, re = W - X;
      if (X <= K) {
        const te = j.length > 0 && v === j[j.length - 1].ref.current;
        s.style.bottom = "0px";
        const U = l.clientHeight - h.offsetTop - h.offsetHeight, ie = Math.max(
          G,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? B : 0) + U + D
        ), Y = X + ie;
        s.style.height = Y + "px";
      } else {
        const te = j.length > 0 && v === j[0].ref.current;
        s.style.top = "0px";
        const ie = Math.max(
          K,
          $ + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? A : 0) + ee
        ) + re;
        s.style.height = ie + "px", h.scrollTop = X - K + h.offsetTop;
      }
      s.style.margin = `${qe}px 0`, s.style.minHeight = O + "px", s.style.maxHeight = V + "px", n?.(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    l,
    h,
    v,
    b,
    a.dir,
    n
  ]);
  me(() => w(), [w]);
  const [_, S] = f.useState();
  me(() => {
    l && S(window.getComputedStyle(l).zIndex);
  }, [l]);
  const C = f.useCallback(
    (P) => {
      P && y.current === !0 && (w(), x?.(), y.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ u.jsx(
    Xq,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: C,
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
            H.div,
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
OS.displayName = Kq;
var Yq = "SelectPopperPosition", lu = f.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = qe,
    ...a
  } = e, i = $a(r);
  return /* @__PURE__ */ u.jsx(
    _a,
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
lu.displayName = Yq;
var [Xq, Zd] = qr(Qt, {}), uu = "SelectViewport", jS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = $t(uu, r), i = Zd(uu, r), s = ne(t, a.onViewportChange), c = f.useRef(0);
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
      /* @__PURE__ */ u.jsx(Ia.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
        H.div,
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
          onScroll: L(o.onScroll, (l) => {
            const d = l.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m?.current && p) {
              const g = Math.abs(c.current - d.scrollTop);
              if (g > 0) {
                const y = window.innerHeight - qe * 2, h = parseFloat(p.style.minHeight), v = parseFloat(p.style.height), b = Math.max(h, v);
                if (b < y) {
                  const x = b + g, w = Math.min(y, x), _ = x - w;
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
jS.displayName = uu;
var DS = "SelectGroup", [Qq, Zq] = qr(DS), kS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ve();
    return /* @__PURE__ */ u.jsx(Qq, { scope: r, id: o, children: /* @__PURE__ */ u.jsx(H.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
kS.displayName = DS;
var IS = "SelectLabel", LS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Zq(IS, r);
    return /* @__PURE__ */ u.jsx(H.div, { id: o.id, ...n, ref: t });
  }
);
LS.displayName = IS;
var Wo = "SelectItem", [Jq, $S] = qr(Wo), FS = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Lt(Wo, r), c = $t(Wo, r), l = s.value === n, [d, p] = f.useState(a ?? ""), [m, g] = f.useState(!1), y = ne(
      t,
      (x) => c.itemRefCallback?.(x, n, o)
    ), h = ve(), v = f.useRef("touch"), b = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      Jq,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: f.useCallback((x) => {
          p((w) => w || (x?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          Ia.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ u.jsx(
              H.div,
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
                onFocus: L(i.onFocus, () => g(!0)),
                onBlur: L(i.onBlur, () => g(!1)),
                onClick: L(i.onClick, () => {
                  v.current !== "mouse" && b();
                }),
                onPointerUp: L(i.onPointerUp, () => {
                  v.current === "mouse" && b();
                }),
                onPointerDown: L(i.onPointerDown, (x) => {
                  v.current = x.pointerType;
                }),
                onPointerMove: L(i.onPointerMove, (x) => {
                  v.current = x.pointerType, o ? c.onItemLeave?.() : v.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: L(i.onPointerLeave, (x) => {
                  x.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: L(i.onKeyDown, (x) => {
                  c.searchRef?.current !== "" && x.key === " " || (Fq.includes(x.key) && b(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
FS.displayName = Wo;
var Qr = "SelectItemText", qS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = Lt(Qr, r), s = $t(Qr, r), c = $S(Qr, r), l = Hq(Qr, r), [d, p] = f.useState(null), m = ne(
      t,
      (b) => p(b),
      c.onItemTextChange,
      (b) => s.itemTextRefCallback?.(b, c.value, c.disabled)
    ), g = d?.textContent, y = f.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = l;
    return me(() => (h(y), () => v(y)), [h, v, y]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(H.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? bn.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
qS.displayName = Qr;
var BS = "SelectItemIndicator", WS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return $S(BS, r).isSelected ? /* @__PURE__ */ u.jsx(H.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
WS.displayName = BS;
var du = "SelectScrollUpButton", HS = f.forwardRef((e, t) => {
  const r = $t(du, e.__scopeSelect), n = Zd(du, e.__scopeSelect), [o, a] = f.useState(!1), i = ne(t, n.onScrollButtonChange);
  return me(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    zS,
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
HS.displayName = du;
var fu = "SelectScrollDownButton", VS = f.forwardRef((e, t) => {
  const r = $t(fu, e.__scopeSelect), n = Zd(fu, e.__scopeSelect), [o, a] = f.useState(!1), i = ne(t, n.onScrollButtonChange);
  return me(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < l;
        a(d);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    zS,
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
VS.displayName = fu;
var zS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = $t("SelectScrollButton", r), i = f.useRef(null), s = La(r), c = f.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return f.useEffect(() => () => c(), [c]), me(() => {
    s().find((d) => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ u.jsx(
    H.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: L(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: L(o.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: L(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), eB = "SelectSeparator", GS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
GS.displayName = eB;
var pu = "SelectArrow", tB = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = $a(r), a = Lt(pu, r), i = $t(pu, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ u.jsx(Sa, { ...o, ...n, ref: t }) : null;
  }
);
tB.displayName = pu;
var rB = "SelectBubbleInput", US = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = f.useRef(null), a = ne(n, o), i = On(t);
    return f.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== t && d) {
        const p = new Event("change", { bubbles: !0 });
        d.call(s, t), s.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ u.jsx(
      H.select,
      {
        ...r,
        style: { ...w_, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
US.displayName = rB;
function KS(e) {
  return e === "" || e === void 0;
}
function YS(e) {
  const t = ue(e), r = f.useRef(""), n = f.useRef(0), o = f.useCallback(
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
function XS(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = nB(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function nB(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var oB = _S, QS = CS, aB = ES, iB = RS, sB = TS, ZS = NS, cB = jS, lB = kS, JS = LS, eC = FS, uB = qS, dB = WS, tC = HS, rC = VS, nC = GS;
const mu = oB, N4 = lB, hu = aB, Ho = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  QS,
  {
    ref: n,
    className: M(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background shadow-xs px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(iB, { asChild: !0, children: /* @__PURE__ */ u.jsx(xr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ho.displayName = QS.displayName;
const oC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  tC,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(OP, { className: "h-4 w-4" })
  }
));
oC.displayName = tC.displayName;
const aC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  rC,
  {
    ref: r,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(xr, { className: "h-4 w-4" })
  }
));
aC.displayName = rC.displayName;
const Vo = f.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ u.jsx(sB, { children: /* @__PURE__ */ u.jsxs(
  ZS,
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
      /* @__PURE__ */ u.jsx(oC, {}),
      /* @__PURE__ */ u.jsx(
        cB,
        {
          className: M(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(aC, {})
    ]
  }
) }));
Vo.displayName = ZS.displayName;
const fB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  JS,
  {
    ref: r,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
fB.displayName = JS.displayName;
const gn = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  eC,
  {
    ref: n,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(dB, { children: /* @__PURE__ */ u.jsx(rn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(uB, { children: t })
    ]
  }
));
gn.displayName = eC.displayName;
const pB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  nC,
  {
    ref: r,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
pB.displayName = nC.displayName;
var mB = "Separator", Uv = "horizontal", hB = ["horizontal", "vertical"], iC = f.forwardRef((e, t) => {
  const { decorative: r, orientation: n = Uv, ...o } = e, a = vB(n) ? n : Uv, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ u.jsx(
    H.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
iC.displayName = mB;
function vB(e) {
  return hB.includes(e);
}
var sC = iC;
const cC = f.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ u.jsx(
    sC,
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
cC.displayName = sC.displayName;
const M4 = ra, A4 = ju, O4 = kr, gB = na, lC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  jr,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
lC.displayName = jr.displayName;
const yB = ct(
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
), bB = f.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(gB, { children: [
  /* @__PURE__ */ u.jsx(lC, {}),
  /* @__PURE__ */ u.jsxs(
    Dr,
    {
      ref: o,
      className: M(yB({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ u.jsxs(kr, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ u.jsx(Qo, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
bB.displayName = Dr.displayName;
const xB = ({
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
xB.displayName = "SheetHeader";
const wB = ({
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
wB.displayName = "SheetFooter";
const _B = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Sn,
  {
    ref: r,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
_B.displayName = Sn.displayName;
const SB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Cn,
  {
    ref: r,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
SB.displayName = Cn.displayName;
function j4({
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
var Fa = "Switch", [CB, D4] = be(Fa), [PB, EB] = CB(Fa), uC = f.forwardRef(
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
    } = e, [m, g] = f.useState(null), y = ne(t, (w) => g(w)), h = f.useRef(!1), v = m ? d || !!m.closest("form") : !0, [b, x] = xe({
      prop: o,
      defaultProp: a ?? !1,
      onChange: l,
      caller: Fa
    });
    return /* @__PURE__ */ u.jsxs(PB, { scope: r, checked: b, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        H.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": i,
          "data-state": mC(b),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...p,
          ref: y,
          onClick: L(e.onClick, (w) => {
            x((_) => !_), v && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ u.jsx(
        pC,
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
uC.displayName = Fa;
var dC = "SwitchThumb", fC = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = EB(dC, r);
    return /* @__PURE__ */ u.jsx(
      H.span,
      {
        "data-state": mC(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
fC.displayName = dC;
var RB = "SwitchBubbleInput", pC = f.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = f.useRef(null), s = ne(i, a), c = On(r), l = va(t);
    return f.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const p = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (c !== r && g) {
        const y = new Event("click", { bubbles: n });
        g.call(d, r), d.dispatchEvent(y);
      }
    }, [c, r, n]), /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
pC.displayName = RB;
function mC(e) {
  return e ? "checked" : "unchecked";
}
var hC = uC, TB = fC;
const NB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  hC,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ u.jsx(
      TB,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
NB.displayName = hC.displayName;
const MB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ u.jsx(
  "table",
  {
    ref: r,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
MB.displayName = "Table";
const AB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "thead",
  {
    ref: r,
    className: M("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
AB.displayName = "TableHeader";
const OB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tbody",
  {
    ref: r,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
OB.displayName = "TableBody";
const jB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
jB.displayName = "TableFooter";
const DB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
DB.displayName = "TableRow";
const kB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
kB.displayName = "TableHead";
const IB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
IB.displayName = "TableCell";
const LB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: r,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
LB.displayName = "TableCaption";
var qa = "Tabs", [$B, k4] = be(qa, [
  kt
]), vC = kt(), [FB, Jd] = $B(qa), gC = f.forwardRef(
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
    } = e, d = xt(s), [p, m] = xe({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: qa
    });
    return /* @__PURE__ */ u.jsx(
      FB,
      {
        scope: r,
        baseId: ve(),
        value: p,
        onValueChange: m,
        orientation: i,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ u.jsx(
          H.div,
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
gC.displayName = qa;
var yC = "TabsList", bC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = Jd(yC, r), i = vC(r);
    return /* @__PURE__ */ u.jsx(
      Ra,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ u.jsx(
          H.div,
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
bC.displayName = yC;
var xC = "TabsTrigger", wC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = Jd(xC, r), s = vC(r), c = CC(i.baseId, n), l = PC(i.baseId, n), d = n === i.value;
    return /* @__PURE__ */ u.jsx(
      Ta,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ u.jsx(
          H.button,
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
            onMouseDown: L(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: L(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(n);
            }),
            onFocus: L(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !d && !o && p && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
wC.displayName = xC;
var _C = "TabsContent", SC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = Jd(_C, r), c = CC(s.baseId, n), l = PC(s.baseId, n), d = n === s.value, p = f.useRef(d);
    return f.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ u.jsx(he, { present: o || d, children: ({ present: m }) => /* @__PURE__ */ u.jsx(
      H.div,
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
SC.displayName = _C;
function CC(e, t) {
  return `${e}-trigger-${t}`;
}
function PC(e, t) {
  return `${e}-content-${t}`;
}
var qB = gC, EC = bC, RC = wC, TC = SC;
const I4 = qB, BB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  EC,
  {
    ref: r,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
BB.displayName = EC.displayName;
const WB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  RC,
  {
    ref: r,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
WB.displayName = RC.displayName;
const HB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  TC,
  {
    ref: r,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
HB.displayName = TC.displayName;
const VB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
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
VB.displayName = "Textarea";
var ef = "ToastProvider", [tf, zB, GB] = er("Toast"), [NC, L4] = be("Toast", [GB]), [UB, Ba] = NC(ef), MC = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = f.useState(null), [l, d] = f.useState(0), p = f.useRef(!1), m = f.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${ef}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u.jsx(tf.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
    UB,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: l,
      viewport: s,
      onViewportChange: c,
      onToastAdd: f.useCallback(() => d((g) => g + 1), []),
      onToastRemove: f.useCallback(() => d((g) => g - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
MC.displayName = ef;
var AC = "ToastViewport", KB = ["F8"], vu = "toast.viewportPause", gu = "toast.viewportResume", OC = f.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = KB,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Ba(AC, r), s = zB(r), c = f.useRef(null), l = f.useRef(null), d = f.useRef(null), p = f.useRef(null), m = ne(t, p, i.onViewportChange), g = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
    f.useEffect(() => {
      const v = (b) => {
        n.length !== 0 && n.every((w) => b[w] || b.code === w) && p.current?.focus();
      };
      return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
    }, [n]), f.useEffect(() => {
      const v = c.current, b = p.current;
      if (y && v && b) {
        const x = () => {
          if (!i.isClosePausedRef.current) {
            const C = new CustomEvent(vu);
            b.dispatchEvent(C), i.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (i.isClosePausedRef.current) {
            const C = new CustomEvent(gu);
            b.dispatchEvent(C), i.isClosePausedRef.current = !1;
          }
        }, _ = (C) => {
          !v.contains(C.relatedTarget) && w();
        }, S = () => {
          v.contains(document.activeElement) || w();
        };
        return v.addEventListener("focusin", x), v.addEventListener("focusout", _), v.addEventListener("pointermove", x), v.addEventListener("pointerleave", S), window.addEventListener("blur", x), window.addEventListener("focus", w), () => {
          v.removeEventListener("focusin", x), v.removeEventListener("focusout", _), v.removeEventListener("pointermove", x), v.removeEventListener("pointerleave", S), window.removeEventListener("blur", x), window.removeEventListener("focus", w);
        };
      }
    }, [y, i.isClosePausedRef]);
    const h = f.useCallback(
      ({ tabbingDirection: v }) => {
        const x = s().map((w) => {
          const _ = w.ref.current, S = [_, ...sW(_)];
          return v === "forwards" ? S : S.reverse();
        });
        return (v === "forwards" ? x.reverse() : x).flat();
      },
      [s]
    );
    return f.useEffect(() => {
      const v = p.current;
      if (v) {
        const b = (x) => {
          const w = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !w) {
            const S = document.activeElement, C = x.shiftKey;
            if (x.target === v && C) {
              l.current?.focus();
              return;
            }
            const T = h({ tabbingDirection: C ? "backwards" : "forwards" }), I = T.findIndex((j) => j === S);
            wl(T.slice(I + 1)) ? x.preventDefault() : C ? l.current?.focus() : d.current?.focus();
          }
        };
        return v.addEventListener("keydown", b), () => v.removeEventListener("keydown", b);
      }
    }, [s, h]), /* @__PURE__ */ u.jsxs(
      WE,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ u.jsx(
            yu,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "forwards"
                });
                wl(v);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(tf.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(H.ol, { tabIndex: -1, ...a, ref: m }) }),
          y && /* @__PURE__ */ u.jsx(
            yu,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "backwards"
                });
                wl(v);
              }
            }
          )
        ]
      }
    );
  }
);
OC.displayName = AC;
var jC = "ToastFocusProxy", yu = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = Ba(jC, r);
    return /* @__PURE__ */ u.jsx(
      Oa,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          const s = i.relatedTarget;
          !a.viewport?.contains(s) && n();
        }
      }
    );
  }
);
yu.displayName = jC;
var Wn = "Toast", YB = "toast.swipeStart", XB = "toast.swipeMove", QB = "toast.swipeCancel", ZB = "toast.swipeEnd", DC = f.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s, c] = xe({
      prop: n,
      defaultProp: o ?? !0,
      onChange: a,
      caller: Wn
    });
    return /* @__PURE__ */ u.jsx(he, { present: r || s, children: /* @__PURE__ */ u.jsx(
      tW,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: ue(e.onPause),
        onResume: ue(e.onResume),
        onSwipeStart: L(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: L(e.onSwipeMove, (l) => {
          const { x: d, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: L(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: L(e.onSwipeEnd, (l) => {
          const { x: d, y: p } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), c(!1);
        })
      }
    ) });
  }
);
DC.displayName = Wn;
var [JB, eW] = NC(Wn, {
  onClose() {
  }
}), tW = f.forwardRef(
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
      onSwipeEnd: g,
      ...y
    } = e, h = Ba(Wn, r), [v, b] = f.useState(null), x = ne(t, (N) => b(N)), w = f.useRef(null), _ = f.useRef(null), S = o || h.duration, C = f.useRef(0), P = f.useRef(S), E = f.useRef(0), { onToastAdd: T, onToastRemove: I } = h, j = ue(() => {
      v?.contains(document.activeElement) && h.viewport?.focus(), i();
    }), V = f.useCallback(
      (N) => {
        !N || N === 1 / 0 || (window.clearTimeout(E.current), C.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(j, N));
      },
      [j]
    );
    f.useEffect(() => {
      const N = h.viewport;
      if (N) {
        const $ = () => {
          V(P.current), l?.();
        }, F = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - C.current;
          P.current = P.current - D, window.clearTimeout(E.current), c?.();
        };
        return N.addEventListener(vu, F), N.addEventListener(gu, $), () => {
          N.removeEventListener(vu, F), N.removeEventListener(gu, $);
        };
      }
    }, [h.viewport, S, c, l, V]), f.useEffect(() => {
      a && !h.isClosePausedRef.current && V(S);
    }, [a, S, h.isClosePausedRef, V]), f.useEffect(() => (T(), () => I()), [T, I]);
    const q = f.useMemo(() => v ? BC(v) : null, [v]);
    return h.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      q && /* @__PURE__ */ u.jsx(
        rW,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: q
        }
      ),
      /* @__PURE__ */ u.jsx(JB, { scope: r, onClose: j, children: bn.createPortal(
        /* @__PURE__ */ u.jsx(tf.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
          BE,
          {
            asChild: !0,
            onEscapeKeyDown: L(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || j(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ u.jsx(
              H.li,
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
                onKeyDown: L(e.onKeyDown, (N) => {
                  N.key === "Escape" && (s?.(N.nativeEvent), N.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, j()));
                }),
                onPointerDown: L(e.onPointerDown, (N) => {
                  N.button === 0 && (w.current = { x: N.clientX, y: N.clientY });
                }),
                onPointerMove: L(e.onPointerMove, (N) => {
                  if (!w.current) return;
                  const $ = N.clientX - w.current.x, F = N.clientY - w.current.y, D = !!_.current, R = ["left", "right"].includes(h.swipeDirection), W = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, O = R ? W(0, $) : 0, z = R ? 0 : W(0, F), A = N.pointerType === "touch" ? 10 : 2, B = { x: O, y: z }, K = { originalEvent: N, delta: B };
                  D ? (_.current = B, so(XB, p, K, {
                    discrete: !1
                  })) : Kv(B, h.swipeDirection, A) ? (_.current = B, so(YB, d, K, {
                    discrete: !1
                  }), N.target.setPointerCapture(N.pointerId)) : (Math.abs($) > A || Math.abs(F) > A) && (w.current = null);
                }),
                onPointerUp: L(e.onPointerUp, (N) => {
                  const $ = _.current, F = N.target;
                  if (F.hasPointerCapture(N.pointerId) && F.releasePointerCapture(N.pointerId), _.current = null, w.current = null, $) {
                    const D = N.currentTarget, R = { originalEvent: N, delta: $ };
                    Kv($, h.swipeDirection, h.swipeThreshold) ? so(ZB, g, R, {
                      discrete: !0
                    }) : so(
                      QB,
                      m,
                      R,
                      {
                        discrete: !0
                      }
                    ), D.addEventListener("click", (W) => W.preventDefault(), {
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
), rW = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Ba(Wn, t), [a, i] = f.useState(!1), [s, c] = f.useState(!1);
  return aW(() => i(!0)), f.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ u.jsx(tr, { asChild: !0, children: /* @__PURE__ */ u.jsx(Oa, { ...n, children: a && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, nW = "ToastTitle", kC = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
kC.displayName = nW;
var oW = "ToastDescription", IC = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
IC.displayName = oW;
var LC = "ToastAction", $C = f.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ u.jsx(qC, { altText: r, asChild: !0, children: /* @__PURE__ */ u.jsx(rf, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${LC}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
$C.displayName = LC;
var FC = "ToastClose", rf = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = eW(FC, r);
    return /* @__PURE__ */ u.jsx(qC, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: L(e.onClick, o.onClose)
      }
    ) });
  }
);
rf.displayName = FC;
var qC = f.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ u.jsx(
    H.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function BC(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), iW(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...BC(n));
    }
  }), t;
}
function so(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? tn(o, a) : o.dispatchEvent(a);
}
var Kv = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function aW(e = () => {
}) {
  const t = ue(e);
  me(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function iW(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function sW(e) {
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
var cW = MC, WC = OC, HC = DC, VC = kC, zC = IC, GC = $C, UC = rf;
const lW = cW, uW = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, KC = f.forwardRef(({ className: e, position: t = "bottom-right", ...r }, n) => /* @__PURE__ */ u.jsx(
  WC,
  {
    ref: n,
    className: M(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${uW[t]}`,
      e
    ),
    ...r
  }
));
KC.displayName = WC.displayName;
const dW = ct(
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
), YC = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  HC,
  {
    ref: n,
    className: M(dW({ variant: t }), e),
    ...r
  }
));
YC.displayName = HC.displayName;
const fW = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  GC,
  {
    ref: r,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
fW.displayName = GC.displayName;
const XC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  UC,
  {
    ref: r,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ u.jsx(Qo, { className: "h-4 w-4" })
  }
));
XC.displayName = UC.displayName;
const QC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  VC,
  {
    ref: r,
    className: M("text-sm font-semibold", e),
    ...t
  }
));
QC.displayName = VC.displayName;
const ZC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  zC,
  {
    ref: r,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
ZC.displayName = zC.displayName;
const pW = 1, mW = 1e4;
let _l = 0;
function hW() {
  return _l = (_l + 1) % Number.MAX_SAFE_INTEGER, _l.toString();
}
const Sl = /* @__PURE__ */ new Map(), Yv = (e) => {
  if (Sl.has(e))
    return;
  const t = setTimeout(() => {
    Sl.delete(e), en({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, mW);
  Sl.set(e, t);
}, vW = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, pW)
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
      return r ? Yv(r) : e.toasts.forEach((n) => {
        Yv(n.id);
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
function en(e) {
  yo = vW(yo, e), go.forEach((t) => {
    t(yo);
  });
}
function gW({ ...e }) {
  const t = hW(), r = (o) => en({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => en({ type: "DISMISS_TOAST", toastId: t });
  return en({
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
function yW() {
  const [e, t] = f.useState(yo);
  return f.useEffect(() => (go.push(t), () => {
    const r = go.indexOf(t);
    r > -1 && go.splice(r, 1);
  }), [e]), {
    ...e,
    toast: gW,
    dismiss: (r) => en({ type: "DISMISS_TOAST", toastId: r })
  };
}
function $4() {
  const { toasts: e } = yW();
  return /* @__PURE__ */ u.jsxs(lW, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ u.jsxs(YC, { ...a, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ u.jsx(QC, { children: r }),
          n && /* @__PURE__ */ u.jsx(ZC, { children: n })
        ] }),
        o,
        /* @__PURE__ */ u.jsx(XC, {})
      ] }, t);
    }),
    /* @__PURE__ */ u.jsx(KC, {})
  ] });
}
var JC = "Toggle", nf = f.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n, onPressedChange: o, ...a } = e, [i, s] = xe({
    prop: r,
    onChange: o,
    defaultProp: n ?? !1,
    caller: JC
  });
  return /* @__PURE__ */ u.jsx(
    H.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: L(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
nf.displayName = JC;
var e0 = nf;
const t0 = ct(
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
), bW = f.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ u.jsx(
  e0,
  {
    ref: o,
    className: M(t0({ variant: t, size: r, className: e })),
    ...n
  }
));
bW.displayName = e0.displayName;
var Ft = "ToggleGroup", [r0, F4] = be(Ft, [
  kt
]), n0 = kt(), of = Q.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single") {
    const o = n;
    return /* @__PURE__ */ u.jsx(xW, { ...o, ref: t });
  }
  if (r === "multiple") {
    const o = n;
    return /* @__PURE__ */ u.jsx(wW, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Ft}\``);
});
of.displayName = Ft;
var [o0, a0] = r0(Ft), xW = Q.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = xe({
    prop: r,
    defaultProp: n ?? "",
    onChange: o,
    caller: Ft
  });
  return /* @__PURE__ */ u.jsx(
    o0,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: Q.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: Q.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ u.jsx(i0, { ...a, ref: t })
    }
  );
}), wW = Q.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = xe({
    prop: r,
    defaultProp: n ?? [],
    onChange: o,
    caller: Ft
  }), c = Q.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = Q.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ u.jsx(
    o0,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ u.jsx(i0, { ...a, ref: t })
    }
  );
});
of.displayName = Ft;
var [_W, SW] = r0(Ft), i0 = Q.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = n0(r), d = xt(i), p = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ u.jsx(_W, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ u.jsx(
      Ra,
      {
        asChild: !0,
        ...l,
        orientation: a,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ u.jsx(H.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx(H.div, { ...p, ref: t }) });
  }
), zo = "ToggleGroupItem", s0 = Q.forwardRef(
  (e, t) => {
    const r = a0(zo, e.__scopeToggleGroup), n = SW(zo, e.__scopeToggleGroup), o = n0(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = Q.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ u.jsx(
      Ta,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ u.jsx(Xv, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx(Xv, { ...s, ref: t });
  }
);
s0.displayName = zo;
var Xv = Q.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = a0(zo, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ u.jsx(
      nf,
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
), c0 = of, l0 = s0;
const u0 = f.createContext({
  size: "default",
  variant: "default"
}), CW = f.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ u.jsx(
  c0,
  {
    ref: a,
    className: M("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ u.jsx(u0.Provider, { value: { variant: t, size: r }, children: n })
  }
));
CW.displayName = c0.displayName;
const PW = f.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = f.useContext(u0);
  return /* @__PURE__ */ u.jsx(
    l0,
    {
      ref: a,
      className: M(
        t0({
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
PW.displayName = l0.displayName;
var [Wa, q4] = be("Tooltip", [
  jt
]), Ha = jt(), d0 = "TooltipProvider", EW = 700, bu = "tooltip.open", [RW, af] = Wa(d0), f0 = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = EW,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = f.useRef(!0), s = f.useRef(!1), c = f.useRef(0);
  return f.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u.jsx(
    RW,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: r,
      onOpen: f.useCallback(() => {
        window.clearTimeout(c.current), i.current = !1;
      }, []),
      onClose: f.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: f.useCallback((l) => {
        s.current = l;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
f0.displayName = d0;
var yn = "Tooltip", [TW, Hn] = Wa(yn), p0 = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = af(yn, e.__scopeTooltip), l = Ha(t), [d, p] = f.useState(null), m = ve(), g = f.useRef(0), y = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, v = f.useRef(!1), [b, x] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(bu))) : c.onClose(), a?.(P);
    },
    caller: yn
  }), w = f.useMemo(() => b ? v.current ? "delayed-open" : "instant-open" : "closed", [b]), _ = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, v.current = !1, x(!0);
  }, [x]), S = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, x(!1);
  }, [x]), C = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, x(!0), g.current = 0;
    }, h);
  }, [h, x]);
  return f.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ u.jsx(kn, { ...l, children: /* @__PURE__ */ u.jsx(
    TW,
    {
      scope: t,
      contentId: m,
      open: b,
      stateAttribute: w,
      trigger: d,
      onTriggerChange: p,
      onTriggerEnter: f.useCallback(() => {
        c.isOpenDelayedRef.current ? C() : _();
      }, [c.isOpenDelayedRef, C, _]),
      onTriggerLeave: f.useCallback(() => {
        y ? S() : (window.clearTimeout(g.current), g.current = 0);
      }, [S, y]),
      onOpen: _,
      onClose: S,
      disableHoverableContent: y,
      children: r
    }
  ) });
};
p0.displayName = yn;
var xu = "TooltipTrigger", m0 = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Hn(xu, r), a = af(xu, r), i = Ha(r), s = f.useRef(null), c = ne(t, s, o.onTriggerChange), l = f.useRef(!1), d = f.useRef(!1), p = f.useCallback(() => l.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ u.jsx(In, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: L(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: L(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: L(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: L(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: L(e.onBlur, o.onClose),
        onClick: L(e.onClick, o.onClose)
      }
    ) });
  }
);
m0.displayName = xu;
var sf = "TooltipPortal", [NW, MW] = Wa(sf, {
  forceMount: void 0
}), h0 = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = Hn(sf, t);
  return /* @__PURE__ */ u.jsx(NW, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: n }) }) });
};
h0.displayName = sf;
var Mr = "TooltipContent", v0 = f.forwardRef(
  (e, t) => {
    const r = MW(Mr, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = Hn(Mr, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(he, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ u.jsx(g0, { side: o, ...a, ref: t }) : /* @__PURE__ */ u.jsx(AW, { side: o, ...a, ref: t }) });
  }
), AW = f.forwardRef((e, t) => {
  const r = Hn(Mr, e.__scopeTooltip), n = af(Mr, e.__scopeTooltip), o = f.useRef(null), a = ne(t, o), [i, s] = f.useState(null), { trigger: c, onClose: l } = r, d = o.current, { onPointerInTransitChange: p } = n, m = f.useCallback(() => {
    s(null), p(!1);
  }, [p]), g = f.useCallback(
    (y, h) => {
      const v = y.currentTarget, b = { x: y.clientX, y: y.clientY }, x = IW(b, v.getBoundingClientRect()), w = LW(b, x), _ = $W(h.getBoundingClientRect()), S = qW([...w, ..._]);
      s(S), p(!0);
    },
    [p]
  );
  return f.useEffect(() => () => m(), [m]), f.useEffect(() => {
    if (c && d) {
      const y = (v) => g(v, d), h = (v) => g(v, c);
      return c.addEventListener("pointerleave", y), d.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", y), d.removeEventListener("pointerleave", h);
      };
    }
  }, [c, d, g, m]), f.useEffect(() => {
    if (i) {
      const y = (h) => {
        const v = h.target, b = { x: h.clientX, y: h.clientY }, x = c?.contains(v) || d?.contains(v), w = !FW(b, i);
        x ? m() : w && (m(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, d, i, l, m]), /* @__PURE__ */ u.jsx(g0, { ...e, ref: a });
}), [OW, jW] = Wa(yn, { isInside: !1 }), DW = /* @__PURE__ */ ng("TooltipContent"), g0 = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = Hn(Mr, r), l = Ha(r), { onClose: d } = c;
    return f.useEffect(() => (document.addEventListener(bu, d), () => document.removeEventListener(bu, d)), [d]), f.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          m.target?.contains(c.trigger) && d();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, d]), /* @__PURE__ */ u.jsx(
      At,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ u.jsxs(
          _a,
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
              /* @__PURE__ */ u.jsx(DW, { children: n }),
              /* @__PURE__ */ u.jsx(OW, { scope: r, isInside: !0, children: /* @__PURE__ */ u.jsx(__, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
v0.displayName = Mr;
var y0 = "TooltipArrow", kW = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Ha(r);
    return jW(
      y0,
      r
    ).isInside ? null : /* @__PURE__ */ u.jsx(Sa, { ...o, ...n, ref: t });
  }
);
kW.displayName = y0;
function IW(e, t) {
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
function LW(e, t, r = 5) {
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
function $W(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function FW(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, d = s.y, p = c.x, m = c.y;
    d > n != m > n && r < (p - l) * (n - d) / (m - d) + l && (o = !o);
  }
  return o;
}
function qW(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), BW(t);
}
function BW(e) {
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
var WW = f0, HW = p0, VW = m0, zW = h0, b0 = v0;
const B4 = WW, W4 = HW, H4 = VW, GW = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(zW, { children: /* @__PURE__ */ u.jsx(
  b0,
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
GW.displayName = b0.displayName;
export {
  ZW as Accordion,
  NE as AccordionContent,
  RE as AccordionItem,
  TE as AccordionTrigger,
  rq as AiqiaSpinner,
  AE as Alert,
  jE as AlertDescription,
  e4 as AlertDialog,
  uT as AlertDialogAction,
  dT as AlertDialogCancel,
  aT as AlertDialogContent,
  lT as AlertDialogDescription,
  sT as AlertDialogFooter,
  iT as AlertDialogHeader,
  Ay as AlertDialogOverlay,
  oT as AlertDialogPortal,
  cT as AlertDialogTitle,
  t4 as AlertDialogTrigger,
  OE as AlertTitle,
  wT as Avatar,
  ST as AvatarFallback,
  _T as AvatarImage,
  Vf as Badge,
  PT as Breadcrumb,
  AT as BreadcrumbEllipsis,
  RT as BreadcrumbItem,
  TT as BreadcrumbLink,
  ET as BreadcrumbList,
  NT as BreadcrumbPage,
  MT as BreadcrumbSeparator,
  Ir as Button,
  lb as Calendar,
  nA as Card,
  sA as CardContent,
  iA as CardDescription,
  cA as CardFooter,
  oA as CardHeader,
  aA as CardTitle,
  HA as Carousel,
  VA as CarouselContent,
  zA as CarouselItem,
  UA as CarouselNext,
  GA as CarouselPrevious,
  yI as ChartContainer,
  i4 as ChartLegend,
  wI as ChartLegendContent,
  bI as ChartStyle,
  a4 as ChartTooltip,
  xI as ChartTooltipContent,
  EI as Checkbox,
  gd as Command,
  c4 as CommandDialog,
  xx as CommandEmpty,
  wx as CommandGroup,
  yx as CommandInput,
  po as CommandItem,
  bx as CommandList,
  _x as CommandSeparator,
  QI as CommandShortcut,
  u4 as DatePicker,
  H$ as DateTimePicker,
  V$ as Dialog,
  f4 as DialogClose,
  cw as DialogContent,
  Y$ as DialogDescription,
  U$ as DialogFooter,
  G$ as DialogHeader,
  sw as DialogOverlay,
  z$ as DialogPortal,
  K$ as DialogTitle,
  d4 as DialogTrigger,
  m4 as DropdownMenu,
  x2 as DropdownMenuCheckboxItem,
  y2 as DropdownMenuContent,
  v4 as DropdownMenuGroup,
  b2 as DropdownMenuItem,
  _2 as DropdownMenuLabel,
  g4 as DropdownMenuPortal,
  b4 as DropdownMenuRadioGroup,
  w2 as DropdownMenuRadioItem,
  S2 as DropdownMenuSeparator,
  C2 as DropdownMenuShortcut,
  y4 as DropdownMenuSub,
  g2 as DropdownMenuSubContent,
  v2 as DropdownMenuSubTrigger,
  h4 as DropdownMenuTrigger,
  x4 as Form,
  b_ as FormControl,
  T2 as FormDescription,
  R2 as FormField,
  g_ as FormItem,
  y_ as FormLabel,
  x_ as FormMessage,
  w4 as Heading,
  Fd as Input,
  _4 as InputForm,
  m_ as Label,
  tq as ListItem,
  P4 as Loader,
  nq as MaskedInput,
  aq as MultiSelect,
  K2 as NavigationMenu,
  Z2 as NavigationMenuContent,
  eq as NavigationMenuIndicator,
  C4 as NavigationMenuItem,
  J2 as NavigationMenuLink,
  Y2 as NavigationMenuList,
  Q2 as NavigationMenuTrigger,
  U_ as NavigationMenuViewport,
  iq as Pagination,
  sq as PaginationContent,
  dq as PaginationEllipsis,
  cq as PaginationItem,
  Gd as PaginationLink,
  uq as PaginationNext,
  lq as PaginationPrevious,
  Td as Popover,
  Pa as PopoverContent,
  Nd as PopoverTrigger,
  _q as RadioGroup,
  Sq as RadioGroupItem,
  Lq as ScrollArea,
  wS as ScrollBar,
  mu as Select,
  Vo as SelectContent,
  N4 as SelectGroup,
  gn as SelectItem,
  fB as SelectLabel,
  aC as SelectScrollDownButton,
  oC as SelectScrollUpButton,
  pB as SelectSeparator,
  Ho as SelectTrigger,
  hu as SelectValue,
  cC as Separator,
  M4 as Sheet,
  O4 as SheetClose,
  bB as SheetContent,
  SB as SheetDescription,
  wB as SheetFooter,
  xB as SheetHeader,
  lC as SheetOverlay,
  gB as SheetPortal,
  _B as SheetTitle,
  A4 as SheetTrigger,
  j4 as Skeleton,
  NB as Switch,
  MB as Table,
  OB as TableBody,
  LB as TableCaption,
  IB as TableCell,
  jB as TableFooter,
  kB as TableHead,
  AB as TableHeader,
  DB as TableRow,
  I4 as Tabs,
  HB as TabsContent,
  BB as TabsList,
  WB as TabsTrigger,
  VB as Textarea,
  iw as TimePicker,
  ho as TimePickerInput,
  YC as Toast,
  fW as ToastAction,
  XC as ToastClose,
  ZC as ToastDescription,
  lW as ToastProvider,
  QC as ToastTitle,
  KC as ToastViewport,
  $4 as Toaster,
  bW as Toggle,
  CW as ToggleGroup,
  PW as ToggleGroupItem,
  W4 as Tooltip,
  GW as TooltipContent,
  B4 as TooltipProvider,
  H4 as TooltipTrigger,
  CT as badgeVariants,
  o4 as brazillianStates,
  gt as buttonVariants,
  M as cn,
  n4 as mask,
  X2 as navigationMenuTriggerStyle,
  vW as reducer,
  gW as toast,
  t0 as toggleVariants,
  Aa as useFormField,
  yW as useToast
};
