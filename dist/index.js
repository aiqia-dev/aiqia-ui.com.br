import * as f from "react";
import Q, { forwardRef as na, createElement as Wl, useState as Ne, useEffect as je, useCallback as Lu, createContext as rr, useContext as nr, useLayoutEffect as dg, useRef as Sr, isValidElement as I0, PureComponent as oa, useImperativeHandle as $u, useMemo as L0, cloneElement as $0 } from "react";
import * as Cn from "react-dom";
import fg from "react-dom";
import { Link as F0 } from "react-router-dom";
import { useFormContext as Pn, FormProvider as q0, Controller as B0 } from "react-hook-form";
var no = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function st(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oo = { exports: {} }, Gr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mf;
function W0() {
  if (Mf) return Gr;
  Mf = 1;
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
  return Gr.Fragment = t, Gr.jsx = r, Gr.jsxs = r, Gr;
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
var Af;
function H0() {
  return Af || (Af = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case R:
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
    var m = Q, g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), w = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), j = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, q = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(O) {
        return O();
      }
    };
    var $, F = {}, D = m.react_stack_bottom_frame.bind(
      m,
      a
    )(), N = M(n(a)), W = {};
    Ur.Fragment = h, Ur.jsx = function(O, z, A, B, K) {
      var G = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        O,
        z,
        A,
        !1,
        B,
        K,
        G ? Error("react-stack-top-frame") : D,
        G ? M(n(O)) : N
      );
    }, Ur.jsxs = function(O, z, A, B, K) {
      var G = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        O,
        z,
        A,
        !0,
        B,
        K,
        G ? Error("react-stack-top-frame") : D,
        G ? M(n(O)) : N
      );
    };
  })()), Ur;
}
var Of;
function V0() {
  return Of || (Of = 1, process.env.NODE_ENV === "production" ? oo.exports = W0() : oo.exports = H0()), oo.exports;
}
var u = V0();
function z0(e, t) {
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
  return o.scopeName = e, [n, G0(o, ...t)];
}
function G0(...e) {
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
function jf(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ot(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = jf(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : jf(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return f.useCallback(ot(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  const t = /* @__PURE__ */ U0(e), r = f.forwardRef((n, o) => {
    const { children: a, ...i } = n, s = f.Children.toArray(a), c = s.find(K0);
    if (c) {
      const l = c.props.children, d = s.map((p) => p === c ? f.Children.count(l) > 1 ? f.Children.only(null) : f.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ u.jsx(t, { ...i, ref: o, children: f.isValidElement(l) ? f.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var pg = /* @__PURE__ */ Rt("Slot");
// @__NO_SIDE_EFFECTS__
function U0(e) {
  const t = f.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (f.isValidElement(o)) {
      const i = X0(o), s = Y0(a, o.props);
      return o.type !== f.Fragment && (s.ref = n ? ot(n, i) : i), f.cloneElement(o, s);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var mg = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function hg(e) {
  const t = ({ children: r }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = mg, t;
}
function K0(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mg;
}
function Y0(e, t) {
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
function X0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function or(e) {
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
}, Q0 = f[" useInsertionEffect ".trim().toString()] || me;
function xe({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = Z0({
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
        const p = J0(d) ? d(e) : d;
        p !== e && i.current?.(p);
      } else
        a(d);
    },
    [s, e, a, i]
  );
  return [c, l];
}
function Z0({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = f.useState(e), o = f.useRef(r), a = f.useRef(t);
  return Q0(() => {
    a.current = t;
  }, [t]), f.useEffect(() => {
    o.current !== r && (a.current?.(r), o.current = r);
  }, [r, o]), [r, n, a];
}
function J0(e) {
  return typeof e == "function";
}
var eP = [
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
], H = eP.reduce((e, t) => {
  const r = /* @__PURE__ */ Rt(`Primitive.${t}`), n = f.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function an(e, t) {
  e && Cn.flushSync(() => e.dispatchEvent(t));
}
function tP(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var he = (e) => {
  const { present: t, children: r } = e, n = rP(t), o = typeof r == "function" ? r({ present: n.isPresent }) : f.Children.only(r), a = ne(n.ref, nP(o));
  return typeof r == "function" || n.isPresent ? f.cloneElement(o, { ref: a }) : null;
};
he.displayName = "Presence";
function rP(e) {
  const [t, r] = f.useState(), n = f.useRef(null), o = f.useRef(e), a = f.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = tP(i, {
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
    const l = ao(n.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), me(() => {
    const l = n.current, d = o.current;
    if (d !== e) {
      const m = a.current, g = ao(l);
      e ? c("MOUNT") : g === "none" || l?.display === "none" ? c("UNMOUNT") : c(d && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), me(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, p = (g) => {
        const h = ao(n.current).includes(CSS.escape(g.animationName));
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === t && (a.current = ao(n.current));
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
function ao(e) {
  return e?.animationName || "none";
}
function nP(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var oP = f[" useId ".trim().toString()] || (() => {
}), aP = 0;
function ve(e) {
  const [t, r] = f.useState(oP());
  return me(() => {
    r((n) => n ?? String(aP++));
  }, [e]), t ? `radix-${t}` : "";
}
var aa = "Collapsible", [iP, vg] = be(aa), [sP, Fu] = iP(aa), gg = f.forwardRef(
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
      caller: aa
    });
    return /* @__PURE__ */ u.jsx(
      sP,
      {
        scope: r,
        disabled: a,
        contentId: ve(),
        open: c,
        onOpenToggle: f.useCallback(() => l((d) => !d), [l]),
        children: /* @__PURE__ */ u.jsx(
          H.div,
          {
            "data-state": Bu(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
gg.displayName = aa;
var yg = "CollapsibleTrigger", bg = f.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = Fu(yg, r);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Bu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
  }
);
bg.displayName = yg;
var qu = "CollapsibleContent", xg = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Fu(qu, e.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(he, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ u.jsx(cP, { ...n, ref: t, present: a }) });
  }
);
xg.displayName = qu;
var cP = f.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = Fu(qu, r), [s, c] = f.useState(n), l = f.useRef(null), d = ne(t, l), p = f.useRef(0), m = p.current, g = f.useRef(0), y = g.current, h = i.open || s, v = f.useRef(h), b = f.useRef(void 0);
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
      "data-state": Bu(i.open),
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
function Bu(e) {
  return e ? "open" : "closed";
}
var lP = gg, uP = bg, dP = xg, fP = f.createContext(void 0);
function xt(e) {
  const t = f.useContext(fP);
  return e || t || "ltr";
}
var Ke = "Accordion", pP = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Wu, mP, hP] = or(Ke), [ia, n4] = be(Ke, [
  hP,
  vg
]), Hu = vg(), wg = Q.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ u.jsx(Wu.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ u.jsx(bP, { ...a, ref: t }) : /* @__PURE__ */ u.jsx(yP, { ...o, ref: t }) });
  }
);
wg.displayName = Ke;
var [_g, vP] = ia(Ke), [Sg, gP] = ia(
  Ke,
  { collapsible: !1 }
), yP = Q.forwardRef(
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
      caller: Ke
    });
    return /* @__PURE__ */ u.jsx(
      _g,
      {
        scope: e.__scopeAccordion,
        value: Q.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: c,
        onItemClose: Q.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ u.jsx(Sg, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ u.jsx(Cg, { ...i, ref: t }) })
      }
    );
  }
), bP = Q.forwardRef((e, t) => {
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
    caller: Ke
  }), c = Q.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = Q.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ u.jsx(
    _g,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ u.jsx(Sg, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(Cg, { ...a, ref: t }) })
    }
  );
}), [xP, sa] = ia(Ke), Cg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = Q.useRef(null), c = ne(s, t), l = mP(r), p = xt(o) === "ltr", m = L(e.onKeyDown, (g) => {
      if (!pP.includes(g.key)) return;
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
      xP,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ u.jsx(Wu.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
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
), Mo = "AccordionItem", [wP, Vu] = ia(Mo), Pg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = sa(Mo, r), i = vP(Mo, r), s = Hu(r), c = ve(), l = n && i.value.includes(n) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ u.jsx(
      wP,
      {
        scope: r,
        open: l,
        disabled: d,
        triggerId: c,
        children: /* @__PURE__ */ u.jsx(
          lP,
          {
            "data-orientation": a.orientation,
            "data-state": Ag(l),
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
Pg.displayName = Mo;
var Eg = "AccordionHeader", Rg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = sa(Ke, r), a = Vu(Eg, r);
    return /* @__PURE__ */ u.jsx(
      H.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Ag(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Rg.displayName = Eg;
var Hl = "AccordionTrigger", Ng = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = sa(Ke, r), a = Vu(Hl, r), i = gP(Hl, r), s = Hu(r);
    return /* @__PURE__ */ u.jsx(Wu.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      uP,
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
Ng.displayName = Hl;
var Tg = "AccordionContent", Mg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = sa(Ke, r), a = Vu(Tg, r), i = Hu(r);
    return /* @__PURE__ */ u.jsx(
      dP,
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
Mg.displayName = Tg;
function Ag(e) {
  return e ? "open" : "closed";
}
var _P = wg, SP = Pg, CP = Rg, Og = Ng, jg = Mg;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Dg = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var EP = {
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
const RP = na(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => Wl(
    "svg",
    {
      ref: c,
      ...EP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Dg("lucide", o),
      ...s
    },
    [
      ...i.map(([l, d]) => Wl(l, d)),
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
  const r = na(
    ({ className: n, ...o }, a) => Wl(RP, {
      ref: a,
      iconNode: t,
      className: Dg(`lucide-${PP(e)}`, n),
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
const NP = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], TP = Ce("ArrowLeft", NP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], AP = Ce("ArrowRight", MP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OP = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], kg = Ce("Calendar", OP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jP = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Kt = Ce("Check", jP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Nt = Ce("ChevronDown", DP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kP = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], zu = Ce("ChevronLeft", kP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IP = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], En = Ce("ChevronRight", IP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], $P = Ce("ChevronUp", LP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FP = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], Ig = Ce("ChevronsUpDown", FP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Df = Ce("CircleX", qP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BP = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Lg = Ce("Circle", BP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], HP = Ce("Clock", WP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], $g = Ce("Ellipsis", VP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zP = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], sn = Ce("LoaderCircle", zP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], UP = Ce("Plus", GP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KP = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], YP = Ce("Search", KP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XP = [
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
], QP = Ce("WandSparkles", XP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ca = Ce("X", ZP);
function Fg(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Fg(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function vt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Fg(e)) && (n && (n += " "), n += t);
  return n;
}
const Gu = "-", JP = (e) => {
  const t = tE(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Gu);
      return s[0] === "" && s.length !== 1 && s.shift(), qg(s, t) || eE(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, qg = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? qg(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Gu);
  return t.validators.find(({
    validator: i
  }) => i(a))?.classGroupId;
}, kf = /^\[(.+)\]$/, eE = (e) => {
  if (kf.test(e)) {
    const t = kf.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, tE = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Vl(r[o], n, o, t);
  return n;
}, Vl = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : If(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (rE(o)) {
        Vl(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Vl(i, If(t, a), r, n);
    });
  });
}, If = (e, t) => {
  let r = e;
  return t.split(Gu).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, rE = (e) => e.isThemeGetter, nE = (e) => {
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
}, zl = "!", Gl = ":", oE = Gl.length, aE = (e) => {
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
        if (h === Gl) {
          a.push(o.slice(c, y)), c = y + oE;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const d = a.length === 0 ? o : o.substring(c), p = iE(d), m = p !== d, g = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + Gl, a = n;
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
}, iE = (e) => e.endsWith(zl) ? e.substring(0, e.length - 1) : e.startsWith(zl) ? e.substring(1) : e, sE = (e) => {
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
}, cE = (e) => ({
  cache: nE(e.cacheSize),
  parseClassName: aE(e),
  sortModifiers: sE(e),
  ...JP(e)
}), lE = /\s+/, uE = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(lE);
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
    const x = a(m).join(":"), w = g ? x + zl : x, _ = w + b;
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
function dE() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Bg(t)) && (n && (n += " "), n += r);
  return n;
}
const Bg = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Bg(e[n])) && (r && (r += " "), r += t);
  return r;
};
function fE(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const l = t.reduce((d, p) => p(d), e());
    return r = cE(l), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const d = uE(c, r);
    return o(c, d), d;
  }
  return function() {
    return a(dE.apply(null, arguments));
  };
}
const _e = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Wg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Hg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, pE = /^\d+\/\d+$/, mE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, gE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fr = (e) => pE.test(e), se = (e) => !!e && !Number.isNaN(Number(e)), St = (e) => !!e && Number.isInteger(Number(e)), pi = (e) => e.endsWith("%") && se(e.slice(0, -1)), pt = (e) => mE.test(e), bE = () => !0, xE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hE.test(e) && !vE.test(e)
), Vg = () => !1, wE = (e) => gE.test(e), _E = (e) => yE.test(e), SE = (e) => !Z(e) && !J(e), CE = (e) => kr(e, Ug, Vg), Z = (e) => Wg.test(e), Vt = (e) => kr(e, Kg, xE), mi = (e) => kr(e, TE, se), Lf = (e) => kr(e, zg, Vg), PE = (e) => kr(e, Gg, _E), io = (e) => kr(e, Yg, wE), J = (e) => Hg.test(e), Kr = (e) => Ir(e, Kg), EE = (e) => Ir(e, ME), $f = (e) => Ir(e, zg), RE = (e) => Ir(e, Ug), NE = (e) => Ir(e, Gg), so = (e) => Ir(e, Yg, !0), kr = (e, t, r) => {
  const n = Wg.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ir = (e, t, r = !1) => {
  const n = Hg.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, zg = (e) => e === "position" || e === "percentage", Gg = (e) => e === "image" || e === "url", Ug = (e) => e === "length" || e === "size" || e === "bg-size", Kg = (e) => e === "length", TE = (e) => e === "number", ME = (e) => e === "family-name", Yg = (e) => e === "shadow", AE = () => {
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
  ], S = () => [..._(), J, Z], C = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], E = () => [J, Z, c], R = () => [fr, "full", "auto", ...E()], I = () => [St, "none", "subgrid", J, Z], j = () => ["auto", {
    span: ["full", St, J, Z]
  }, St, J, Z], V = () => [St, "auto", J, Z], q = () => ["auto", "min", "max", "fr", J, Z], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...E()], D = () => [fr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], N = () => [e, J, Z], W = () => [..._(), $f, Lf, {
    position: [J, Z]
  }], O = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", RE, CE, {
    size: [J, Z]
  }], A = () => [pi, Kr, Vt], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    J,
    Z
  ], K = () => ["", se, Kr, Vt], G = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [se, pi, $f, Lf], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    J,
    Z
  ], re = () => ["none", se, J, Z], oe = () => ["none", se, J, Z], te = () => [se, J, Z], U = () => [fr, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pt],
      breakpoint: [pt],
      color: [bE],
      container: [pt],
      "drop-shadow": [pt],
      ease: ["in", "out", "in-out"],
      font: [SE],
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
        aspect: ["auto", "square", fr, Z, J, v]
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
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
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
        basis: [fr, "full", "auto", s, ...E()]
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
        flex: [se, fr, "auto", "initial", "none", Z]
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
        justify: [...M(), "normal"]
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
        content: ["normal", ...M()]
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
        "place-content": M()
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
        text: ["base", r, Kr, Vt]
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
        font: [n, J, mi]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", pi, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [EE, Z, t]
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
        "line-clamp": [se, "none", J, mi]
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
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
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
        decoration: [se, "from-font", "auto", J, Vt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
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
        }, NE, PE]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
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
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
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
        border: N()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
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
        outline: ["", se, Kr, Vt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
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
          so,
          io
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, so, io]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
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
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [se, Vt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
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
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, so, io]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
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
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": k()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": k()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": k()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": k()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": k()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": k()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
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
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
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
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
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
          so,
          io
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
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
        accent: N()
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
        caret: N()
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
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [se, Kr, Vt, mi]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
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
}, OE = /* @__PURE__ */ fE(AE);
function T(...e) {
  return OE(vt(e));
}
const o4 = _P, jE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  SP,
  {
    ref: r,
    className: T("border-b", e),
    ...t
  }
));
jE.displayName = "AccordionItem";
const DE = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(CP, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  Og,
  {
    ref: n,
    className: T(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(Nt, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
DE.displayName = Og.displayName;
const kE = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  jg,
  {
    ref: n,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ u.jsx("div", { className: T("pb-4 pt-0", e), children: t })
  }
));
kE.displayName = jg.displayName;
const Ff = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, qf = vt, ct = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return qf(e, r?.class, r?.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const d = r?.[l], p = a?.[l];
    if (d === null) return null;
    const m = Ff(d) || Ff(p);
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
  return qf(e, i, c, r?.class, r?.className);
}, IE = ct(
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
), LE = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: T(IE({ variant: t }), e),
    ...r
  }
));
LE.displayName = "Alert";
const $E = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "h5",
  {
    ref: r,
    className: T("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
$E.displayName = "AlertTitle";
const FE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: T("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
FE.displayName = "AlertDescription";
function ue(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...r) => t.current?.(...r), []);
}
function qE(e, t = globalThis?.document) {
  const r = ue(e);
  f.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var BE = "DismissableLayer", Ul = "dismissableLayer.update", WE = "dismissableLayer.pointerDownOutside", HE = "dismissableLayer.focusOutside", Bf, Xg = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ot = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = f.useContext(Xg), [d, p] = f.useState(null), m = d?.ownerDocument ?? globalThis?.document, [, g] = f.useState({}), y = ne(t, (P) => p(P)), h = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = h.indexOf(v), x = d ? h.indexOf(d) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, _ = x >= b, S = zE((P) => {
      const E = P.target, R = [...l.branches].some((I) => I.contains(E));
      !_ || R || (o?.(P), i?.(P), P.defaultPrevented || s?.());
    }, m), C = GE((P) => {
      const E = P.target;
      [...l.branches].some((I) => I.contains(E)) || (a?.(P), i?.(P), P.defaultPrevented || s?.());
    }, m);
    return qE((P) => {
      x === l.layers.size - 1 && (n?.(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, m), f.useEffect(() => {
      if (d)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Bf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Wf(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Bf);
        };
    }, [d, m, r, l]), f.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Wf());
    }, [d, l]), f.useEffect(() => {
      const P = () => g({});
      return document.addEventListener(Ul, P), () => document.removeEventListener(Ul, P);
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
Ot.displayName = BE;
var VE = "DismissableLayerBranch", Qg = f.forwardRef((e, t) => {
  const r = f.useContext(Xg), n = f.useRef(null), o = ne(t, n);
  return f.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ u.jsx(H.div, { ...e, ref: o });
});
Qg.displayName = VE;
function zE(e, t = globalThis?.document) {
  const r = ue(e), n = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Zg(
            WE,
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
function GE(e, t = globalThis?.document) {
  const r = ue(e), n = f.useRef(!1);
  return f.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && Zg(HE, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Wf() {
  const e = new CustomEvent(Ul);
  document.dispatchEvent(e);
}
function Zg(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? an(o, a) : o.dispatchEvent(a);
}
var UE = Ot, KE = Qg, hi = "focusScope.autoFocusOnMount", vi = "focusScope.autoFocusOnUnmount", Hf = { bubbles: !1, cancelable: !0 }, YE = "FocusScope", Rn = f.forwardRef((e, t) => {
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
      zf.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const b = new CustomEvent(hi, Hf);
        s.addEventListener(hi, l), s.dispatchEvent(b), b.defaultPrevented || (XE(tR(Jg(s)), { select: !0 }), document.activeElement === h && Pt(s));
      }
      return () => {
        s.removeEventListener(hi, l), setTimeout(() => {
          const b = new CustomEvent(vi, Hf);
          s.addEventListener(vi, d), s.dispatchEvent(b), b.defaultPrevented || Pt(h ?? document.body, { select: !0 }), s.removeEventListener(vi, d), zf.remove(g);
        }, 0);
      };
    }
  }, [s, l, d, g]);
  const y = f.useCallback(
    (h) => {
      if (!r && !n || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, b = document.activeElement;
      if (v && b) {
        const x = h.currentTarget, [w, _] = QE(x);
        w && _ ? !h.shiftKey && b === _ ? (h.preventDefault(), r && Pt(w, { select: !0 })) : h.shiftKey && b === w && (h.preventDefault(), r && Pt(_, { select: !0 })) : b === x && h.preventDefault();
      }
    },
    [r, n, g.paused]
  );
  return /* @__PURE__ */ u.jsx(H.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
Rn.displayName = YE;
function XE(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Pt(n, { select: t }), document.activeElement !== r) return;
}
function QE(e) {
  const t = Jg(e), r = Vf(t, e), n = Vf(t.reverse(), e);
  return [r, n];
}
function Jg(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Vf(e, t) {
  for (const r of e)
    if (!ZE(r, { upTo: t })) return r;
}
function ZE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function JE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && JE(e) && t && e.select();
  }
}
var zf = eR();
function eR() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Gf(e, t), e.unshift(t);
    },
    remove(t) {
      e = Gf(e, t), e[0]?.resume();
    }
  };
}
function Gf(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function tR(e) {
  return e.filter((t) => t.tagName !== "A");
}
var rR = "Portal", ar = f.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, a] = f.useState(!1);
  me(() => a(!0), []);
  const i = r || o && globalThis?.document?.body;
  return i ? fg.createPortal(/* @__PURE__ */ u.jsx(H.div, { ...n, ref: t }), i) : null;
});
ar.displayName = rR;
var gi = 0;
function la() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Uf()), document.body.insertAdjacentElement("beforeend", e[1] ?? Uf()), gi++, () => {
      gi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), gi--;
    };
  }, []);
}
function Uf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ze = function() {
  return Ze = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Ze.apply(this, arguments);
};
function ey(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function nR(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var wo = "right-scroll-bar-position", _o = "width-before-scroll-bar", oR = "with-scroll-bars-hidden", aR = "--removed-body-scroll-bar-size";
function yi(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function iR(e, t) {
  var r = Ne(function() {
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
var sR = typeof window < "u" ? f.useLayoutEffect : f.useEffect, Kf = /* @__PURE__ */ new WeakMap();
function cR(e, t) {
  var r = iR(null, function(n) {
    return e.forEach(function(o) {
      return yi(o, n);
    });
  });
  return sR(function() {
    var n = Kf.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || yi(s, null);
      }), a.forEach(function(s) {
        o.has(s) || yi(s, i);
      });
    }
    Kf.set(r, e);
  }, [e]), r;
}
function lR(e) {
  return e;
}
function uR(e, t) {
  t === void 0 && (t = lR);
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
function dR(e) {
  e === void 0 && (e = {});
  var t = uR(null);
  return t.options = Ze({ async: !0, ssr: !1 }, e), t;
}
var ty = function(e) {
  var t = e.sideCar, r = ey(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return f.createElement(n, Ze({}, r));
};
ty.isSideCarExport = !0;
function fR(e, t) {
  return e.useMedium(t), ty;
}
var ry = dR(), bi = function() {
}, ua = f.forwardRef(function(e, t) {
  var r = f.useRef(null), n = f.useState({
    onScrollCapture: bi,
    onWheelCapture: bi,
    onTouchMoveCapture: bi
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, y = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = e.gapMode, _ = ey(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = m, C = cR([r, t]), P = Ze(Ze({}, _), o);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(S, { sideCar: ry, removeScrollBar: l, shards: p, noRelative: g, noIsolation: y, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: r, gapMode: w }),
    i ? f.cloneElement(f.Children.only(s), Ze(Ze({}, P), { ref: C })) : f.createElement(x, Ze({}, P, { className: c, ref: C }), s)
  );
});
ua.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ua.classNames = {
  fullWidth: _o,
  zeroRight: wo
};
var pR = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function mR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = pR();
  return t && e.setAttribute("nonce", t), e;
}
function hR(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function vR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var gR = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = mR()) && (hR(t, r), vR(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, yR = function() {
  var e = gR();
  return function(t, r) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, ny = function() {
  var e = yR(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, bR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, xi = function(e) {
  return parseInt(e || "", 10) || 0;
}, xR = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [xi(r), xi(n), xi(o)];
}, wR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return bR;
  var t = xR(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, _R = ny(), br = "data-scroll-locked", SR = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(oR, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(br, `] {
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
  
  .`).concat(wo, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(_o, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(wo, " .").concat(wo, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(_o, " .").concat(_o, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(br, `] {
    `).concat(aR, ": ").concat(s, `px;
  }
`);
}, Yf = function() {
  var e = parseInt(document.body.getAttribute(br) || "0", 10);
  return isFinite(e) ? e : 0;
}, CR = function() {
  f.useEffect(function() {
    return document.body.setAttribute(br, (Yf() + 1).toString()), function() {
      var e = Yf() - 1;
      e <= 0 ? document.body.removeAttribute(br) : document.body.setAttribute(br, e.toString());
    };
  }, []);
}, PR = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  CR();
  var a = f.useMemo(function() {
    return wR(o);
  }, [o]);
  return f.createElement(_R, { styles: SR(a, !t, o, r ? "" : "!important") });
}, Kl = !1;
if (typeof window < "u")
  try {
    var co = Object.defineProperty({}, "passive", {
      get: function() {
        return Kl = !0, !0;
      }
    });
    window.addEventListener("test", co, co), window.removeEventListener("test", co, co);
  } catch {
    Kl = !1;
  }
var pr = Kl ? { passive: !1 } : !1, ER = function(e) {
  return e.tagName === "TEXTAREA";
}, oy = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !ER(e) && r[t] === "visible")
  );
}, RR = function(e) {
  return oy(e, "overflowY");
}, NR = function(e) {
  return oy(e, "overflowX");
}, Xf = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = ay(e, n);
    if (o) {
      var a = iy(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, TR = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, MR = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, ay = function(e, t) {
  return e === "v" ? RR(t) : NR(t);
}, iy = function(e, t) {
  return e === "v" ? TR(t) : MR(t);
}, AR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, OR = function(e, t, r, n, o) {
  var a = AR(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), l = !1, d = i > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var g = iy(e, s), y = g[0], h = g[1], v = g[2], b = h - v - a * y;
    (y || b) && ay(e, s) && (p += b, m += y);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(m) < 1) && (l = !0), l;
}, lo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Qf = function(e) {
  return [e.deltaX, e.deltaY];
}, Zf = function(e) {
  return e && "current" in e ? e.current : e;
}, jR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, DR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, kR = 0, mr = [];
function IR(e) {
  var t = f.useRef([]), r = f.useRef([0, 0]), n = f.useRef(), o = f.useState(kR++)[0], a = f.useState(ny)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = nR([e.lockRef.current], (e.shards || []).map(Zf), !0).filter(Boolean);
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
    var b = lo(h), x = r.current, w = "deltaX" in h ? h.deltaX : x[0] - b[0], _ = "deltaY" in h ? h.deltaY : x[1] - b[1], S, C = h.target, P = Math.abs(w) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && C.type === "range")
      return !1;
    var E = Xf(P, C);
    if (!E)
      return !0;
    if (E ? S = P : (S = P === "v" ? "h" : "v", E = Xf(P, C)), !E)
      return !1;
    if (!n.current && "changedTouches" in h && (w || _) && (n.current = S), !S)
      return !0;
    var R = n.current || S;
    return OR(R, v, h, R === "h" ? w : _);
  }, []), c = f.useCallback(function(h) {
    var v = h;
    if (!(!mr.length || mr[mr.length - 1] !== a)) {
      var b = "deltaY" in v ? Qf(v) : lo(v), x = t.current.filter(function(S) {
        return S.name === v.type && (S.target === v.target || v.target === S.shadowParent) && jR(S.delta, b);
      })[0];
      if (x && x.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(Zf).filter(Boolean).filter(function(S) {
          return S.contains(v.target);
        }), _ = w.length > 0 ? s(v, w[0]) : !i.current.noIsolation;
        _ && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = f.useCallback(function(h, v, b, x) {
    var w = { name: h, delta: v, target: b, should: x, shadowParent: LR(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== w;
      });
    }, 1);
  }, []), d = f.useCallback(function(h) {
    r.current = lo(h), n.current = void 0;
  }, []), p = f.useCallback(function(h) {
    l(h.type, Qf(h), h.target, s(h, e.lockRef.current));
  }, []), m = f.useCallback(function(h) {
    l(h.type, lo(h), h.target, s(h, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return mr.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, pr), document.addEventListener("touchmove", c, pr), document.addEventListener("touchstart", d, pr), function() {
      mr = mr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, pr), document.removeEventListener("touchmove", c, pr), document.removeEventListener("touchstart", d, pr);
    };
  }, []);
  var g = e.removeScrollBar, y = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    y ? f.createElement(a, { styles: DR(o) }) : null,
    g ? f.createElement(PR, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function LR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const $R = fR(ry, IR);
var Nn = f.forwardRef(function(e, t) {
  return f.createElement(ua, Ze({}, e, { ref: t, sideCar: $R }));
});
Nn.classNames = ua.classNames;
var FR = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, hr = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), fo = {}, wi = 0, sy = function(e) {
  return e && (e.host || sy(e.parentNode));
}, qR = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = sy(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, BR = function(e, t, r, n) {
  var o = qR(t, Array.isArray(e) ? e : [e]);
  fo[r] || (fo[r] = /* @__PURE__ */ new WeakMap());
  var a = fo[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(p) {
    !p || s.has(p) || (s.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var d = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        d(m);
      else
        try {
          var g = m.getAttribute(n), y = g !== null && g !== "false", h = (hr.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          hr.set(m, h), a.set(m, v), i.push(m), h === 1 && y && uo.set(m, !0), v === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return d(t), s.clear(), wi++, function() {
    i.forEach(function(p) {
      var m = hr.get(p) - 1, g = a.get(p) - 1;
      hr.set(p, m), a.set(p, g), m || (uo.has(p) || p.removeAttribute(n), uo.delete(p)), g || p.removeAttribute(r);
    }), wi--, wi || (hr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), fo = {});
  };
}, da = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = FR(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), BR(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, fa = "Dialog", [cy, ly] = be(fa), [WR, Ye] = cy(fa), uy = (e) => {
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
    caller: fa
  });
  return /* @__PURE__ */ u.jsx(
    WR,
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
uy.displayName = fa;
var dy = "DialogTrigger", fy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(dy, r), a = ne(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yu(o.open),
        ...n,
        ref: a,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
  }
);
fy.displayName = dy;
var Uu = "DialogPortal", [HR, py] = cy(Uu, {
  forceMount: void 0
}), my = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = Ye(Uu, t);
  return /* @__PURE__ */ u.jsx(HR, { scope: t, forceMount: r, children: f.Children.map(n, (i) => /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(ar, { asChild: !0, container: o, children: i }) })) });
};
my.displayName = Uu;
var Ao = "DialogOverlay", hy = f.forwardRef(
  (e, t) => {
    const r = py(Ao, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ye(Ao, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(zR, { ...o, ref: t }) }) : null;
  }
);
hy.displayName = Ao;
var VR = /* @__PURE__ */ Rt("DialogOverlay.RemoveScroll"), zR = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(Ao, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Nn, { as: VR, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        H.div,
        {
          "data-state": Yu(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Yt = "DialogContent", vy = f.forwardRef(
  (e, t) => {
    const r = py(Yt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ye(Yt, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(GR, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(UR, { ...o, ref: t }) });
  }
);
vy.displayName = Yt;
var GR = f.forwardRef(
  (e, t) => {
    const r = Ye(Yt, e.__scopeDialog), n = f.useRef(null), o = ne(t, r.contentRef, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return da(a);
    }, []), /* @__PURE__ */ u.jsx(
      gy,
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
), UR = f.forwardRef(
  (e, t) => {
    const r = Ye(Yt, e.__scopeDialog), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      gy,
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
), gy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Ye(Yt, r), c = f.useRef(null), l = ne(t, c);
    return la(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        Rn,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ u.jsx(
            Ot,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Yu(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(YR, { titleId: s.titleId }),
        /* @__PURE__ */ u.jsx(QR, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Ku = "DialogTitle", yy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(Ku, r);
    return /* @__PURE__ */ u.jsx(H.h2, { id: o.titleId, ...n, ref: t });
  }
);
yy.displayName = Ku;
var by = "DialogDescription", xy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(by, r);
    return /* @__PURE__ */ u.jsx(H.p, { id: o.descriptionId, ...n, ref: t });
  }
);
xy.displayName = by;
var wy = "DialogClose", _y = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(wy, r);
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
_y.displayName = wy;
function Yu(e) {
  return e ? "open" : "closed";
}
var Sy = "DialogTitleWarning", [KR, Cy] = z0(Sy, {
  contentName: Yt,
  titleName: Ku,
  docsSlug: "dialog"
}), YR = ({ titleId: e }) => {
  const t = Cy(Sy), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, XR = "DialogDescriptionWarning", QR = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Cy(XR).contentName}}.`;
  return f.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, pa = uy, Xu = fy, ma = my, Lr = hy, $r = vy, Tn = yy, Mn = xy, Fr = _y, Py = "AlertDialog", [ZR, a4] = be(Py, [
  ly
]), wt = ly(), Ey = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = wt(t);
  return /* @__PURE__ */ u.jsx(pa, { ...n, ...r, modal: !0 });
};
Ey.displayName = Py;
var JR = "AlertDialogTrigger", Ry = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(Xu, { ...o, ...n, ref: t });
  }
);
Ry.displayName = JR;
var eN = "AlertDialogPortal", Ny = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = wt(t);
  return /* @__PURE__ */ u.jsx(ma, { ...n, ...r });
};
Ny.displayName = eN;
var tN = "AlertDialogOverlay", Ty = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(Lr, { ...o, ...n, ref: t });
  }
);
Ty.displayName = tN;
var xr = "AlertDialogContent", [rN, nN] = ZR(xr), oN = /* @__PURE__ */ hg("AlertDialogContent"), My = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, a = wt(r), i = f.useRef(null), s = ne(t, i), c = f.useRef(null);
    return /* @__PURE__ */ u.jsx(
      KR,
      {
        contentName: xr,
        titleName: Ay,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u.jsx(rN, { scope: r, cancelRef: c, children: /* @__PURE__ */ u.jsxs(
          $r,
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
              /* @__PURE__ */ u.jsx(oN, { children: n }),
              /* @__PURE__ */ u.jsx(iN, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
My.displayName = xr;
var Ay = "AlertDialogTitle", Oy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(Tn, { ...o, ...n, ref: t });
  }
);
Oy.displayName = Ay;
var jy = "AlertDialogDescription", Dy = f.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
  return /* @__PURE__ */ u.jsx(Mn, { ...o, ...n, ref: t });
});
Dy.displayName = jy;
var aN = "AlertDialogAction", ky = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(Fr, { ...o, ...n, ref: t });
  }
);
ky.displayName = aN;
var Iy = "AlertDialogCancel", Ly = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = nN(Iy, r), a = wt(r), i = ne(t, o);
    return /* @__PURE__ */ u.jsx(Fr, { ...a, ...n, ref: i });
  }
);
Ly.displayName = Iy;
var iN = ({ contentRef: e }) => {
  const t = `\`${xr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${xr}\` by passing a \`${jy}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${xr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return f.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, sN = Ey, cN = Ry, lN = Ny, $y = Ty, Fy = My, qy = ky, By = Ly, Wy = Oy, Hy = Dy;
const i4 = sN, s4 = cN, uN = lN, Vy = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  $y,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Vy.displayName = $y.displayName;
const dN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs(uN, { children: [
  /* @__PURE__ */ u.jsx(Vy, {}),
  /* @__PURE__ */ u.jsx(
    Fy,
    {
      ref: r,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
dN.displayName = Fy.displayName;
const fN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
fN.displayName = "AlertDialogHeader";
const pN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
pN.displayName = "AlertDialogFooter";
const mN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Wy,
  {
    ref: r,
    className: T("text-lg font-semibold", e),
    ...t
  }
));
mN.displayName = Wy.displayName;
const hN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Hy,
  {
    ref: r,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
hN.displayName = Hy.displayName;
const vN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  qy,
  {
    ref: r,
    className: T(gt(), e),
    ...t
  }
));
vN.displayName = qy.displayName;
const gN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  By,
  {
    ref: r,
    className: T(
      gt({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
gN.displayName = By.displayName;
function c4({
  options: e,
  isLoading: t,
  renderOption: r,
  getOptionValue: n,
  getDisplayValue: o,
  label: a,
  placeholder: i = "Selecione...",
  value: s,
  onChange: c,
  onSearchChange: l,
  disabled: d = !1,
  triggerClassName: p,
  noResultsMessage: m,
  clearable: g = !0,
  error: y
}) {
  const [h, v] = Ne(!1), [b, x] = Ne(s), [w, _] = Ne(null), [S, C] = Ne("");
  je(() => {
    x(s);
  }, [s]), je(() => {
    if (s && e.length > 0) {
      const E = e.find((R) => n(R) === s);
      E && _(E);
    }
  }, [s, e, n]);
  const P = Lu(
    (E) => {
      const R = g && E === b ? "" : E;
      s && x(R), _(
        e.find((I) => n(I) === R) || null
      ), c(R), v(!1);
    },
    [b, c, g, e, n, s]
  );
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-1", children: [
    !!a && /* @__PURE__ */ u.jsx(za, { className: T(y && "text-destructive"), children: a }),
    /* @__PURE__ */ u.jsxs(Gn, { open: h, onOpenChange: v, children: [
      /* @__PURE__ */ u.jsx(Un, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
        jt,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": h,
          className: T(
            "justify-between w-full",
            d && "opacity-50 cursor-not-allowed",
            !s && "text-muted-foreground",
            p
          ),
          disabled: d,
          children: [
            s && w ? o(w) : i,
            /* @__PURE__ */ u.jsx(Ig, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsx(Hr, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ u.jsxs(qn, { shouldFilter: !1, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "relative border-b", children: [
          /* @__PURE__ */ u.jsx(
            Ma,
            {
              placeholder: "Buscar",
              value: S,
              onValueChange: (E) => {
                C(E), l(E);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ u.jsx(sn, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ u.jsxs(Aa, { children: [
          t && e.length === 0 && /* @__PURE__ */ u.jsx(yN, {}),
          !t && e.length === 0 && /* @__PURE__ */ u.jsx(Oa, { children: /* @__PURE__ */ u.jsx("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: m ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ u.jsx(Bn, { children: e.map((E) => /* @__PURE__ */ u.jsxs(
            Ut,
            {
              value: n(E),
              onSelect: P,
              children: [
                /* @__PURE__ */ u.jsx(
                  Kt,
                  {
                    className: T(
                      "mr-2 size-4",
                      b === n(E) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                r(E)
              ]
            },
            n(E)
          )) })
        ] })
      ] }) })
    ] }),
    !!y && /* @__PURE__ */ u.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: y })
  ] });
}
function yN() {
  return /* @__PURE__ */ u.jsx(Bn, { children: [1, 2, 3].map((e) => /* @__PURE__ */ u.jsx(Ut, { disabled: !0, className: "p-0", children: /* @__PURE__ */ u.jsx(TB, { className: "w-full h-8 my-0.5" }) }, e)) });
}
var po = { exports: {} }, _i = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jf;
function bN() {
  if (Jf) return _i;
  Jf = 1;
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
  return _i.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, _i;
}
var Si = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep;
function xN() {
  return ep || (ep = 1, process.env.NODE_ENV !== "production" && (function() {
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
    Si.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Si;
}
var tp;
function wN() {
  return tp || (tp = 1, process.env.NODE_ENV === "production" ? po.exports = bN() : po.exports = xN()), po.exports;
}
var _N = wN();
function SN() {
  return _N.useSyncExternalStore(
    CN,
    () => !0,
    () => !1
  );
}
function CN() {
  return () => {
  };
}
var Qu = "Avatar", [PN, l4] = be(Qu), [EN, zy] = PN(Qu), Gy = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = f.useState("idle");
    return /* @__PURE__ */ u.jsx(
      EN,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ u.jsx(H.span, { ...n, ref: t })
      }
    );
  }
);
Gy.displayName = Qu;
var Uy = "AvatarImage", Ky = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = zy(Uy, r), s = RN(n, a), c = ue((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return me(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ u.jsx(H.img, { ...a, ref: t, src: n }) : null;
  }
);
Ky.displayName = Uy;
var Yy = "AvatarFallback", Xy = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = zy(Yy, r), [i, s] = f.useState(n === void 0);
    return f.useEffect(() => {
      if (n !== void 0) {
        const c = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(c);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u.jsx(H.span, { ...o, ref: t }) : null;
  }
);
Xy.displayName = Yy;
function rp(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function RN(e, { referrerPolicy: t, crossOrigin: r }) {
  const n = SN(), o = f.useRef(null), a = n ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = f.useState(
    () => rp(a, e)
  );
  return me(() => {
    s(rp(a, e));
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
var Qy = Gy, Zy = Ky, Jy = Xy;
const NN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Qy,
  {
    ref: r,
    className: T(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
NN.displayName = Qy.displayName;
const TN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Zy,
  {
    ref: r,
    className: T("aspect-square h-full w-full", e),
    ...t
  }
));
TN.displayName = Zy.displayName;
const MN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Jy,
  {
    ref: r,
    className: T(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
MN.displayName = Jy.displayName;
const AN = ct(
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
function np({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ u.jsx("div", { className: T(AN({ variant: t }), e), ...r });
}
const ON = f.forwardRef(({ ...e }, t) => /* @__PURE__ */ u.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
ON.displayName = "Breadcrumb";
const jN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "ol",
  {
    ref: r,
    className: T(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
jN.displayName = "BreadcrumbList";
const DN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "li",
  {
    ref: r,
    className: T("inline-flex items-center gap-1.5", e),
    ...t
  }
));
DN.displayName = "BreadcrumbItem";
const kN = f.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? pg : "a";
  return /* @__PURE__ */ u.jsx(
    o,
    {
      ref: n,
      className: T("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
kN.displayName = "BreadcrumbLink";
const IN = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: T("font-normal text-foreground", e),
    ...t
  }
));
IN.displayName = "BreadcrumbPage";
const LN = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ u.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ u.jsx(En, {})
  }
);
LN.displayName = "BreadcrumbSeparator";
const $N = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx($g, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
$N.displayName = "BreadcrumbElipssis";
const FN = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border bg-background hover:bg-accent hover:text-accent-foreground",
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
    variants: FN,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), jt = f.forwardRef(({ className: e, variant: t, size: r, disabled: n, href: o, ...a }, i) => /* @__PURE__ */ u.jsx(u.Fragment, { children: o ? /* @__PURE__ */ u.jsx(
  F0,
  {
    className: T(gt({ variant: t, size: r, className: e })),
    ref: i,
    to: o,
    ...a
  }
) : /* @__PURE__ */ u.jsx(
  "button",
  {
    className: T(gt({ variant: t, size: r, className: e })),
    ref: i,
    disabled: n,
    ...a
  }
) }));
jt.displayName = "Button";
const Zu = 6048e5, qN = 864e5, op = Symbol.for("constructDateFrom");
function Se(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && op in e ? e[op](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function de(e, t) {
  return Se(t || e, e);
}
function Ee(e, t, r) {
  const n = de(e, r?.in);
  return isNaN(t) ? Se(r?.in || e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Fe(e, t, r) {
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
function BN(e, t, r) {
  const {
    years: n = 0,
    months: o = 0,
    weeks: a = 0,
    days: i = 0,
    hours: s = 0,
    minutes: c = 0,
    seconds: l = 0
  } = t, d = de(e, r?.in), p = o || n ? Fe(d, o + n * 12) : d, m = i || a ? Ee(p, i + a * 7) : p, g = c + s * 60, h = (l + g * 60) * 1e3;
  return Se(e, +m + h);
}
let WN = {};
function An() {
  return WN;
}
function at(e, t) {
  const r = An(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, o = de(e, t?.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Xt(e, t) {
  return at(e, { ...t, weekStartsOn: 1 });
}
function eb(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = Se(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Xt(o), i = Se(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Xt(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Oo(e) {
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
function qr(e, ...t) {
  const r = Se.bind(
    null,
    e || t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function Cr(e, t) {
  const r = de(e, t?.in);
  return r.setHours(0, 0, 0, 0), r;
}
function tt(e, t, r) {
  const [n, o] = qr(
    r?.in,
    e,
    t
  ), a = Cr(n), i = Cr(o), s = +a - Oo(a), c = +i - Oo(i);
  return Math.round((s - c) / qN);
}
function HN(e, t) {
  const r = eb(e, t), n = Se(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Xt(n);
}
function Yl(e, t, r) {
  return Ee(e, t * 7, r);
}
function VN(e, t, r) {
  return Fe(e, t * 12, r);
}
function zN(e, t) {
  let r, n = t?.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Se.bind(null, o));
    const a = de(o, n);
    (!r || r < a || isNaN(+a)) && (r = a);
  }), Se(n, r || NaN);
}
function GN(e, t) {
  let r, n = t?.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Se.bind(null, o));
    const a = de(o, n);
    (!r || r > a || isNaN(+a)) && (r = a);
  }), Se(n, r || NaN);
}
function Te(e, t, r) {
  const [n, o] = qr(
    r?.in,
    e,
    t
  );
  return +Cr(n) == +Cr(o);
}
function Ju(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function UN(e) {
  return !(!Ju(e) && typeof e != "number" || isNaN(+de(e)));
}
function cn(e, t, r) {
  const [n, o] = qr(
    r?.in,
    e,
    t
  ), a = n.getFullYear() - o.getFullYear(), i = n.getMonth() - o.getMonth();
  return a * 12 + i;
}
function KN(e, t, r) {
  const [n, o] = qr(
    r?.in,
    e,
    t
  ), a = at(n, r), i = at(o, r), s = +a - Oo(a), c = +i - Oo(i);
  return Math.round((s - c) / Zu);
}
function ed(e, t) {
  const r = de(e, t?.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function Me(e, t) {
  const r = de(e, t?.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function tb(e, t) {
  const r = de(e, t?.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function td(e, t) {
  const r = An(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, o = de(e, t?.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function rb(e, t) {
  return td(e, { ...t, weekStartsOn: 1 });
}
const YN = {
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
}, XN = (e, t, r) => {
  let n;
  const o = YN[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function wr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const QN = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ZN = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, JN = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, eT = {
  date: wr({
    formats: QN,
    defaultWidth: "full"
  }),
  time: wr({
    formats: ZN,
    defaultWidth: "full"
  }),
  dateTime: wr({
    formats: JN,
    defaultWidth: "full"
  })
}, tT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rT = (e, t, r, n) => tT[e];
function Je(e) {
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
const nT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, oT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, aT = {
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
}, iT = {
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
}, sT = {
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
}, cT = {
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
}, lT = (e, t) => {
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
}, uT = {
  ordinalNumber: lT,
  era: Je({
    values: nT,
    defaultWidth: "wide"
  }),
  quarter: Je({
    values: oT,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Je({
    values: aT,
    defaultWidth: "wide"
  }),
  day: Je({
    values: iT,
    defaultWidth: "wide"
  }),
  dayPeriod: Je({
    values: sT,
    defaultWidth: "wide",
    formattingValues: cT,
    defaultFormattingWidth: "wide"
  })
};
function et(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? fT(s, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      dT(s, (p) => p.test(i))
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
function dT(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function fT(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function nb(e) {
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
const pT = /^(\d+)(th|st|nd|rd)?/i, mT = /\d+/i, hT = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, vT = {
  any: [/^b/i, /^(a|c)/i]
}, gT = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, xT = {
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
}, wT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, _T = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ST = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, CT = {
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
}, PT = {
  ordinalNumber: nb({
    matchPattern: pT,
    parsePattern: mT,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: et({
    matchPatterns: hT,
    defaultMatchWidth: "wide",
    parsePatterns: vT,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: gT,
    defaultMatchWidth: "wide",
    parsePatterns: yT,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: et({
    matchPatterns: bT,
    defaultMatchWidth: "wide",
    parsePatterns: xT,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: wT,
    defaultMatchWidth: "wide",
    parsePatterns: _T,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: ST,
    defaultMatchWidth: "any",
    parsePatterns: CT,
    defaultParseWidth: "any"
  })
}, ob = {
  code: "en-US",
  formatDistance: XN,
  formatLong: eT,
  formatRelative: rT,
  localize: uT,
  match: PT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ET(e, t) {
  const r = de(e, t?.in);
  return tt(r, tb(r)) + 1;
}
function ab(e, t) {
  const r = de(e, t?.in), n = +Xt(r) - +HN(r);
  return Math.round(n / Zu) + 1;
}
function ib(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = An(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = Se(t?.in || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = at(i, t), c = Se(t?.in || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const l = at(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function RT(e, t) {
  const r = An(), n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = ib(e, t), a = Se(t?.in || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), at(a, t);
}
function sb(e, t) {
  const r = de(e, t?.in), n = +at(r, t) - +RT(r, t);
  return Math.round(n / Zu) + 1;
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
}, vr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ap = {
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
    const o = ib(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return fe(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : fe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = eb(e);
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
    const o = sb(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : fe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = ab(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : fe(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Ct.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = ET(e);
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
        return sp(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return zt(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return zt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return sp(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return zt(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return zt(n, ":");
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
        return "GMT" + ip(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + zt(n, ":");
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
        return "GMT" + ip(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + zt(n, ":");
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
function ip(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + fe(a, 2);
}
function sp(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2) : zt(e, t);
}
function zt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = fe(Math.trunc(n / 60), 2), a = fe(n % 60, 2);
  return r + o + t + a;
}
const cp = (e, t) => {
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
}, cb = (e, t) => {
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
}, NT = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return cp(e, t);
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
  return a.replace("{{date}}", cp(n, t)).replace("{{time}}", cb(o, t));
}, TT = {
  p: cb,
  P: NT
}, MT = /^D+$/, AT = /^Y+$/, OT = ["D", "DD", "YY", "YYYY"];
function jT(e) {
  return MT.test(e);
}
function DT(e) {
  return AT.test(e);
}
function kT(e, t, r) {
  const n = IT(e, t, r);
  if (console.warn(n), OT.includes(e)) throw new RangeError(n);
}
function IT(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const LT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $T = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, FT = /^'([^]*?)'?$/, qT = /''/g, BT = /[a-zA-Z]/;
function lt(e, t, r) {
  const n = An(), o = r?.locale ?? n.locale ?? ob, a = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, s = de(e, r?.in);
  if (!UN(s))
    throw new RangeError("Invalid time value");
  let c = t.match($T).map((d) => {
    const p = d[0];
    if (p === "p" || p === "P") {
      const m = TT[p];
      return m(d, o.formatLong);
    }
    return d;
  }).join("").match(LT).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const p = d[0];
    if (p === "'")
      return { isToken: !1, value: WT(d) };
    if (ap[p])
      return { isToken: !0, value: d };
    if (p.match(BT))
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
    (!r?.useAdditionalWeekYearTokens && DT(p) || !r?.useAdditionalDayOfYearTokens && jT(p)) && kT(p, t, String(e));
    const m = ap[p[0]];
    return m(s, p, o.localize, l);
  }).join("");
}
function WT(e) {
  const t = e.match(FT);
  return t ? t[1].replace(qT, "'") : e;
}
function HT(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = r.getMonth(), a = Se(r, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function VT(e) {
  return Math.trunc(+de(e) / 1e3);
}
function zT(e, t) {
  const r = de(e, t?.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(0, 0, 0, 0), de(r, t?.in);
}
function GT(e, t) {
  const r = de(e, t?.in);
  return KN(
    zT(r, t),
    Me(r, t),
    t
  ) + 1;
}
function Xl(e, t) {
  return +de(e) > +de(t);
}
function lb(e, t) {
  return +de(e) < +de(t);
}
function rd(e, t, r) {
  const [n, o] = qr(
    r?.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function UT(e, t, r) {
  const [n, o] = qr(
    r?.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear();
}
function Ci(e, t, r) {
  return Ee(e, -t, r);
}
function Pi(e, t, r) {
  const n = de(e, r?.in), o = n.getFullYear(), a = n.getDate(), i = Se(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = HT(i);
  return n.setMonth(t, Math.min(a, s)), n;
}
function lp(e, t, r) {
  const n = de(e, r?.in);
  return isNaN(+n) ? Se(e, NaN) : (n.setFullYear(t), n);
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
}, YT = (e, t, r) => {
  let n;
  const o = KT[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", String(t)), r?.addSuffix ? r.comparison && r.comparison > 0 ? "em " + n : "há " + n : n;
}, XT = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, QT = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, ZT = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, JT = {
  date: wr({
    formats: XT,
    defaultWidth: "full"
  }),
  time: wr({
    formats: QT,
    defaultWidth: "full"
  }),
  dateTime: wr({
    formats: ZT,
    defaultWidth: "full"
  })
}, e1 = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, t1 = (e, t, r, n) => {
  const o = e1[e];
  return typeof o == "function" ? o(t) : o;
}, r1 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, n1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, o1 = {
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
}, a1 = {
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
}, i1 = {
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
}, s1 = {
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
}, c1 = (e, t) => {
  const r = Number(e);
  return t?.unit === "week" ? r + "ª" : r + "º";
}, l1 = {
  ordinalNumber: c1,
  era: Je({
    values: r1,
    defaultWidth: "wide"
  }),
  quarter: Je({
    values: n1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Je({
    values: o1,
    defaultWidth: "wide"
  }),
  day: Je({
    values: a1,
    defaultWidth: "wide"
  }),
  dayPeriod: Je({
    values: i1,
    defaultWidth: "wide",
    formattingValues: s1,
    defaultFormattingWidth: "wide"
  })
}, u1 = /^(\d+)[ºªo]?/i, d1 = /\d+/i, f1 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, p1 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, m1 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, h1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, v1 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, g1 = {
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
}, y1 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, b1 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, x1 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, w1 = {
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
}, _1 = {
  ordinalNumber: nb({
    matchPattern: u1,
    parsePattern: d1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: et({
    matchPatterns: f1,
    defaultMatchWidth: "wide",
    parsePatterns: p1,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: m1,
    defaultMatchWidth: "wide",
    parsePatterns: h1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: et({
    matchPatterns: v1,
    defaultMatchWidth: "wide",
    parsePatterns: g1,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: y1,
    defaultMatchWidth: "wide",
    parsePatterns: b1,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: x1,
    defaultMatchWidth: "any",
    parsePatterns: w1,
    defaultParseWidth: "any"
  })
}, rn = {
  code: "pt-BR",
  formatDistance: YT,
  formatLong: JT,
  formatRelative: t1,
  localize: l1,
  match: _1,
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
function S1(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function ub(e, t, r) {
  for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function On(e) {
  return e.mode === "multiple";
}
function jn(e) {
  return e.mode === "range";
}
function ha(e) {
  return e.mode === "single";
}
var C1 = {
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
function P1(e, t) {
  return lt(e, "LLLL y", t);
}
function E1(e, t) {
  return lt(e, "d", t);
}
function R1(e, t) {
  return lt(e, "LLLL", t);
}
function N1(e) {
  return "".concat(e);
}
function T1(e, t) {
  return lt(e, "cccccc", t);
}
function M1(e, t) {
  return lt(e, "yyyy", t);
}
var A1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: P1,
  formatDay: E1,
  formatMonthCaption: R1,
  formatWeekNumber: N1,
  formatWeekdayName: T1,
  formatYearCaption: M1
}), O1 = function(e, t, r) {
  return lt(e, "do MMMM (EEEE)", r);
}, j1 = function() {
  return "Month: ";
}, D1 = function() {
  return "Go to next month";
}, k1 = function() {
  return "Go to previous month";
}, I1 = function(e, t) {
  return lt(e, "cccc", t);
}, L1 = function(e) {
  return "Week n. ".concat(e);
}, $1 = function() {
  return "Year: ";
}, F1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: O1,
  labelMonthDropdown: j1,
  labelNext: D1,
  labelPrevious: k1,
  labelWeekNumber: L1,
  labelWeekday: I1,
  labelYearDropdown: $1
});
function q1() {
  var e = "buttons", t = C1, r = ob, n = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: A1,
    labels: F1,
    locale: r,
    modifiersClassNames: n,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function B1(e) {
  var t = e.fromYear, r = e.toYear, n = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return n ? a = Me(n) : t && (a = new Date(t, 0, 1)), o ? i = ed(o) : r && (i = new Date(r, 11, 31)), {
    fromDate: a ? Cr(a) : void 0,
    toDate: i ? Cr(i) : void 0
  };
}
var db = rr(void 0);
function W1(e) {
  var t, r = e.initialProps, n = q1(), o = B1(r), a = o.fromDate, i = o.toDate, s = (t = r.captionLayout) !== null && t !== void 0 ? t : n.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (ha(r) || On(r) || jn(r)) && (c = r.onSelect);
  var l = ae(ae(ae({}, n), r), { captionLayout: s, classNames: ae(ae({}, n.classNames), r.classNames), components: ae({}, r.components), formatters: ae(ae({}, n.formatters), r.formatters), fromDate: a, labels: ae(ae({}, n.labels), r.labels), mode: r.mode || n.mode, modifiers: ae(ae({}, n.modifiers), r.modifiers), modifiersClassNames: ae(ae({}, n.modifiersClassNames), r.modifiersClassNames), onSelect: c, styles: ae(ae({}, n.styles), r.styles), toDate: i });
  return u.jsx(db.Provider, { value: l, children: e.children });
}
function pe() {
  var e = nr(db);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function fb(e) {
  var t = pe(), r = t.locale, n = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: n.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: r }) });
}
function H1(e) {
  return u.jsx("svg", ae({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function pb(e) {
  var t, r, n = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = pe(), d = (r = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && r !== void 0 ? r : H1;
  return u.jsxs("div", { className: s, style: c, children: [u.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: n, children: a }), u.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [i, u.jsx(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function V1(e) {
  var t, r = pe(), n = r.fromDate, o = r.toDate, a = r.styles, i = r.locale, s = r.formatters.formatMonthCaption, c = r.classNames, l = r.components, d = r.labels.labelMonthDropdown;
  if (!n)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var p = [];
  if (UT(n, o))
    for (var m = Me(n), g = n.getMonth(); g <= o.getMonth(); g++)
      p.push(Pi(m, g));
  else
    for (var m = Me(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      p.push(Pi(m, g));
  var y = function(v) {
    var b = Number(v.target.value), x = Pi(Me(e.displayMonth), b);
    e.onChange(x);
  }, h = (t = l?.Dropdown) !== null && t !== void 0 ? t : pb;
  return u.jsx(h, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: y, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(v) {
    return u.jsx("option", { value: v.getMonth(), children: s(v, { locale: i }) }, v.getMonth());
  }) });
}
function z1(e) {
  var t, r = e.displayMonth, n = pe(), o = n.fromDate, a = n.toDate, i = n.locale, s = n.styles, c = n.classNames, l = n.components, d = n.formatters.formatYearCaption, p = n.labels.labelYearDropdown, m = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var g = o.getFullYear(), y = a.getFullYear(), h = g; h <= y; h++)
    m.push(lp(tb(/* @__PURE__ */ new Date()), h));
  var v = function(x) {
    var w = lp(Me(r), Number(x.target.value));
    e.onChange(w);
  }, b = (t = l?.Dropdown) !== null && t !== void 0 ? t : pb;
  return u.jsx(b, { name: "years", "aria-label": p(), className: c.dropdown_year, style: s.dropdown_year, onChange: v, value: r.getFullYear(), caption: d(r, { locale: i }), children: m.map(function(x) {
    return u.jsx("option", { value: x.getFullYear(), children: d(x, { locale: i }) }, x.getFullYear());
  }) });
}
function G1(e, t) {
  var r = Ne(e), n = r[0], o = r[1], a = t === void 0 ? n : t;
  return [a, o];
}
function U1(e) {
  var t = e.month, r = e.defaultMonth, n = e.today, o = t || r || n || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && cn(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Fe(a, l);
  }
  return i && cn(o, i) < 0 && (o = i), Me(o);
}
function K1() {
  var e = pe(), t = U1(e), r = G1(t, e.month), n = r[0], o = r[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = Me(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [n, a];
}
function Y1(e, t) {
  for (var r = t.reverseMonths, n = t.numberOfMonths, o = Me(e), a = Me(Fe(o, n)), i = cn(a, o), s = [], c = 0; c < i; c++) {
    var l = Fe(o, c);
    s.push(l);
  }
  return r && (s = s.reverse()), s;
}
function X1(e, t) {
  if (!t.disableNavigation) {
    var r = t.toDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = Me(e);
    if (!r)
      return Fe(s, i);
    var c = cn(r, e);
    if (!(c < a))
      return Fe(s, i);
  }
}
function Q1(e, t) {
  if (!t.disableNavigation) {
    var r = t.fromDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = Me(e);
    if (!r)
      return Fe(s, -i);
    var c = cn(s, r);
    if (!(c <= 0))
      return Fe(s, -i);
  }
}
var mb = rr(void 0);
function Z1(e) {
  var t = pe(), r = K1(), n = r[0], o = r[1], a = Y1(n, t), i = X1(n, t), s = Q1(n, t), c = function(p) {
    return a.some(function(m) {
      return rd(p, m);
    });
  }, l = function(p, m) {
    c(p) || (m && lb(p, m) ? o(Fe(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, d = {
    currentMonth: n,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return u.jsx(mb.Provider, { value: d, children: e.children });
}
function Dn() {
  var e = nr(mb);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function up(e) {
  var t, r = pe(), n = r.classNames, o = r.styles, a = r.components, i = Dn().goToMonth, s = function(d) {
    i(Fe(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a?.CaptionLabel) !== null && t !== void 0 ? t : fb, l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: n.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: n.vhidden, children: l }), u.jsx(V1, { onChange: s, displayMonth: e.displayMonth }), u.jsx(z1, { onChange: s, displayMonth: e.displayMonth })] });
}
function J1(e) {
  return u.jsx("svg", ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function eM(e) {
  return u.jsx("svg", ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var jo = na(function(e, t) {
  var r = pe(), n = r.classNames, o = r.styles, a = [n.button_reset, n.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ae(ae({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), u.jsx("button", ae({}, e, { ref: t, type: "button", className: i, style: s }));
});
function tM(e) {
  var t, r, n = pe(), o = n.dir, a = n.locale, i = n.classNames, s = n.styles, c = n.labels, l = c.labelPrevious, d = c.labelNext, p = n.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var m = l(e.previousMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), y = d(e.nextMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), v = (t = p?.IconRight) !== null && t !== void 0 ? t : eM, b = (r = p?.IconLeft) !== null && r !== void 0 ? r : J1;
  return u.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && u.jsx(jo, { name: "previous-month", "aria-label": m, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(v, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && u.jsx(jo, { name: "next-month", "aria-label": y, className: h, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(v, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function dp(e) {
  var t = pe().numberOfMonths, r = Dn(), n = r.previousMonth, o = r.nextMonth, a = r.goToMonth, i = r.displayMonths, s = i.findIndex(function(y) {
    return rd(e.displayMonth, y);
  }), c = s === 0, l = s === i.length - 1, d = t > 1 && (c || !l), p = t > 1 && (l || !c), m = function() {
    n && a(n);
  }, g = function() {
    o && a(o);
  };
  return u.jsx(tM, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: p, nextMonth: o, previousMonth: n, onPreviousClick: m, onNextClick: g });
}
function rM(e) {
  var t, r = pe(), n = r.classNames, o = r.disableNavigation, a = r.styles, i = r.captionLayout, s = r.components, c = (t = s?.CaptionLabel) !== null && t !== void 0 ? t : fb, l;
  return o ? l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = u.jsx(up, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = u.jsxs(u.Fragment, { children: [u.jsx(up, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(dp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = u.jsxs(u.Fragment, { children: [u.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(dp, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: n.caption, style: a.caption, children: l });
}
function nM(e) {
  var t = pe(), r = t.footer, n = t.styles, o = t.classNames.tfoot;
  return r ? u.jsx("tfoot", { className: o, style: n.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: r }) }) }) : u.jsx(u.Fragment, {});
}
function oM(e, t, r) {
  for (var n = r ? Xt(/* @__PURE__ */ new Date()) : at(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ee(n, a);
    o.push(i);
  }
  return o;
}
function aM() {
  var e = pe(), t = e.classNames, r = e.styles, n = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = oM(o, a, i);
  return u.jsxs("tr", { style: r.head_row, className: t.head_row, children: [n && u.jsx("td", { style: r.head_cell, className: t.head_cell }), l.map(function(d, p) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: r.head_cell, "aria-label": c(d, { locale: o }), children: s(d, { locale: o }) }, p);
  })] });
}
function iM() {
  var e, t = pe(), r = t.classNames, n = t.styles, o = t.components, a = (e = o?.HeadRow) !== null && e !== void 0 ? e : aM;
  return u.jsx("thead", { style: n.head, className: r.head, children: u.jsx(a, {}) });
}
function sM(e) {
  var t = pe(), r = t.locale, n = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: n(e.date, { locale: r }) });
}
var nd = rr(void 0);
function cM(e) {
  if (!On(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(nd.Provider, { value: t, children: e.children });
  }
  return u.jsx(lM, { initialProps: e.initialProps, children: e.children });
}
function lM(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = t.min, a = t.max, i = function(l, d, p) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, l, d, p);
    var y = !!(d.selected && o && n?.length === o);
    if (!y) {
      var h = !!(!d.selected && a && n?.length === a);
      if (!h) {
        var v = n ? ub([], n) : [];
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
  return u.jsx(nd.Provider, { value: c, children: r });
}
function od() {
  var e = nr(nd);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function uM(e, t) {
  var r = t || {}, n = r.from, o = r.to;
  return n && o ? Te(o, e) && Te(n, e) ? void 0 : Te(o, e) ? { from: o, to: void 0 } : Te(n, e) ? void 0 : Xl(n, e) ? { from: e, to: o } : { from: n, to: e } : o ? Xl(e, o) ? { from: o, to: e } : { from: e, to: o } : n ? lb(e, n) ? { from: e, to: n } : { from: n, to: e } : { from: e, to: void 0 };
}
var ad = rr(void 0);
function dM(e) {
  if (!jn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(ad.Provider, { value: t, children: e.children });
  }
  return u.jsx(fM, { initialProps: e.initialProps, children: e.children });
}
function fM(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = n || {}, a = o.from, i = o.to, s = t.min, c = t.max, l = function(g, y, h) {
    var v, b;
    (v = t.onDayClick) === null || v === void 0 || v.call(t, g, y, h);
    var x = uM(g, n);
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
    after: Ci(a, s - 1),
    before: Ee(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: Ee(a, s - 1)
  }), !a && i && d.disabled.push({
    after: Ci(i, s - 1),
    before: Ee(i, s - 1)
  })), c) {
    if (a && !i && (d.disabled.push({
      before: Ee(a, -c + 1)
    }), d.disabled.push({
      after: Ee(a, c - 1)
    })), a && i) {
      var p = tt(i, a) + 1, m = c - p;
      d.disabled.push({
        before: Ci(a, m)
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
  return u.jsx(ad.Provider, { value: { selected: n, onDayClick: l, modifiers: d }, children: r });
}
function id() {
  var e = nr(ad);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function So(e) {
  return Array.isArray(e) ? ub([], e) : e !== void 0 ? [e] : [];
}
function pM(e) {
  var t = {};
  return Object.entries(e).forEach(function(r) {
    var n = r[0], o = r[1];
    t[n] = So(o);
  }), t;
}
var ze;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ze || (ze = {}));
var mM = ze.Selected, mt = ze.Disabled, hM = ze.Hidden, vM = ze.Today, Ei = ze.RangeEnd, Ri = ze.RangeMiddle, Ni = ze.RangeStart, gM = ze.Outside;
function yM(e, t, r) {
  var n, o = (n = {}, n[mM] = So(e.selected), n[mt] = So(e.disabled), n[hM] = So(e.hidden), n[vM] = [e.today], n[Ei] = [], n[Ri] = [], n[Ni] = [], n[gM] = [], n);
  return e.fromDate && o[mt].push({ before: e.fromDate }), e.toDate && o[mt].push({ after: e.toDate }), On(e) ? o[mt] = o[mt].concat(t.modifiers[mt]) : jn(e) && (o[mt] = o[mt].concat(r.modifiers[mt]), o[Ni] = r.modifiers[Ni], o[Ri] = r.modifiers[Ri], o[Ei] = r.modifiers[Ei]), o;
}
var hb = rr(void 0);
function bM(e) {
  var t = pe(), r = od(), n = id(), o = yM(t, r, n), a = pM(t.modifiers), i = ae(ae({}, o), a);
  return u.jsx(hb.Provider, { value: i, children: e.children });
}
function vb() {
  var e = nr(hb);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function xM(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function wM(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function _M(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function SM(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function CM(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function PM(e, t) {
  var r, n = t.from, o = t.to;
  if (n && o) {
    var a = tt(o, n) < 0;
    a && (r = [o, n], n = r[0], o = r[1]);
    var i = tt(e, n) >= 0 && tt(o, e) >= 0;
    return i;
  }
  return o ? Te(o, e) : n ? Te(n, e) : !1;
}
function EM(e) {
  return Ju(e);
}
function RM(e) {
  return Array.isArray(e) && e.every(Ju);
}
function NM(e, t) {
  return t.some(function(r) {
    if (typeof r == "boolean")
      return r;
    if (EM(r))
      return Te(e, r);
    if (RM(r))
      return r.includes(e);
    if (wM(r))
      return PM(e, r);
    if (CM(r))
      return r.dayOfWeek.includes(e.getDay());
    if (xM(r)) {
      var n = tt(r.before, e), o = tt(r.after, e), a = n > 0, i = o < 0, s = Xl(r.before, r.after);
      return s ? i && a : a || i;
    }
    return _M(r) ? tt(e, r.after) > 0 : SM(r) ? tt(r.before, e) > 0 : typeof r == "function" ? r(e) : !1;
  });
}
function sd(e, t, r) {
  var n = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return NM(e, s) && a.push(i), a;
  }, []), o = {};
  return n.forEach(function(a) {
    return o[a] = !0;
  }), r && !rd(e, r) && (o.outside = !0), o;
}
function TM(e, t) {
  for (var r = Me(e[0]), n = ed(e[e.length - 1]), o, a, i = r; i <= n; ) {
    var s = sd(i, t), c = !s.disabled && !s.hidden;
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
var MM = 365;
function gb(e, t) {
  var r = t.moveBy, n = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, p = o.locale, m = {
    day: Ee,
    week: Yl,
    month: Fe,
    year: VN,
    startOfWeek: function(v) {
      return o.ISOWeek ? Xt(v) : at(v, { locale: p, weekStartsOn: c });
    },
    endOfWeek: function(v) {
      return o.ISOWeek ? rb(v) : td(v, { locale: p, weekStartsOn: c });
    }
  }, g = m[r](e, n === "after" ? 1 : -1);
  n === "before" && l ? g = zN([l, g]) : n === "after" && d && (g = GN([d, g]));
  var y = !0;
  if (a) {
    var h = sd(g, a);
    y = !h.disabled && !h.hidden;
  }
  return y ? g : s.count > MM ? s.lastFocused : gb(g, {
    moveBy: r,
    direction: n,
    context: o,
    modifiers: a,
    retry: ae(ae({}, s), { count: s.count + 1 })
  });
}
var yb = rr(void 0);
function AM(e) {
  var t = Dn(), r = vb(), n = Ne(), o = n[0], a = n[1], i = Ne(), s = i[0], c = i[1], l = TM(t.displayMonths, r), d = o ?? (s && t.isDateDisplayed(s)) ? s : l, p = function() {
    c(o), a(void 0);
  }, m = function(v) {
    a(v);
  }, g = pe(), y = function(v, b) {
    if (o) {
      var x = gb(o, {
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
  return u.jsx(yb.Provider, { value: h, children: e.children });
}
function cd() {
  var e = nr(yb);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function OM(e, t) {
  var r = vb(), n = sd(e, r, t);
  return n;
}
var ld = rr(void 0);
function jM(e) {
  if (!ha(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(ld.Provider, { value: t, children: e.children });
  }
  return u.jsx(DM, { initialProps: e.initialProps, children: e.children });
}
function DM(e) {
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
  return u.jsx(ld.Provider, { value: o, children: r });
}
function bb() {
  var e = nr(ld);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function kM(e, t) {
  var r = pe(), n = bb(), o = od(), a = id(), i = cd(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, d = i.focusWeekBefore, p = i.blur, m = i.focus, g = i.focusMonthBefore, y = i.focusMonthAfter, h = i.focusYearBefore, v = i.focusYearAfter, b = i.focusStartOfWeek, x = i.focusEndOfWeek, w = function(D) {
    var N, W, O, z;
    ha(r) ? (N = n.onDayClick) === null || N === void 0 || N.call(n, e, t, D) : On(r) ? (W = o.onDayClick) === null || W === void 0 || W.call(o, e, t, D) : jn(r) ? (O = a.onDayClick) === null || O === void 0 || O.call(a, e, t, D) : (z = r.onDayClick) === null || z === void 0 || z.call(r, e, t, D);
  }, _ = function(D) {
    var N;
    m(e), (N = r.onDayFocus) === null || N === void 0 || N.call(r, e, t, D);
  }, S = function(D) {
    var N;
    p(), (N = r.onDayBlur) === null || N === void 0 || N.call(r, e, t, D);
  }, C = function(D) {
    var N;
    (N = r.onDayMouseEnter) === null || N === void 0 || N.call(r, e, t, D);
  }, P = function(D) {
    var N;
    (N = r.onDayMouseLeave) === null || N === void 0 || N.call(r, e, t, D);
  }, E = function(D) {
    var N;
    (N = r.onDayPointerEnter) === null || N === void 0 || N.call(r, e, t, D);
  }, R = function(D) {
    var N;
    (N = r.onDayPointerLeave) === null || N === void 0 || N.call(r, e, t, D);
  }, I = function(D) {
    var N;
    (N = r.onDayTouchCancel) === null || N === void 0 || N.call(r, e, t, D);
  }, j = function(D) {
    var N;
    (N = r.onDayTouchEnd) === null || N === void 0 || N.call(r, e, t, D);
  }, V = function(D) {
    var N;
    (N = r.onDayTouchMove) === null || N === void 0 || N.call(r, e, t, D);
  }, q = function(D) {
    var N;
    (N = r.onDayTouchStart) === null || N === void 0 || N.call(r, e, t, D);
  }, M = function(D) {
    var N;
    (N = r.onDayKeyUp) === null || N === void 0 || N.call(r, e, t, D);
  }, $ = function(D) {
    var N;
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
    (N = r.onDayKeyDown) === null || N === void 0 || N.call(r, e, t, D);
  }, F = {
    onClick: w,
    onFocus: _,
    onBlur: S,
    onKeyDown: $,
    onKeyUp: M,
    onMouseEnter: C,
    onMouseLeave: P,
    onPointerEnter: E,
    onPointerLeave: R,
    onTouchCancel: I,
    onTouchEnd: j,
    onTouchMove: V,
    onTouchStart: q
  };
  return F;
}
function IM() {
  var e = pe(), t = bb(), r = od(), n = id(), o = ha(e) ? t.selected : On(e) ? r.selected : jn(e) ? n.selected : void 0;
  return o;
}
function LM(e) {
  return Object.values(ze).includes(e);
}
function $M(e, t) {
  var r = [e.classNames.day];
  return Object.keys(t).forEach(function(n) {
    var o = e.modifiersClassNames[n];
    if (o)
      r.push(o);
    else if (LM(n)) {
      var a = e.classNames["day_".concat(n)];
      a && r.push(a);
    }
  }), r;
}
function FM(e, t) {
  var r = ae({}, e.styles.day);
  return Object.keys(t).forEach(function(n) {
    var o;
    r = ae(ae({}, r), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[n]);
  }), r;
}
function qM(e, t, r) {
  var n, o, a, i = pe(), s = cd(), c = OM(e, t), l = kM(e, c), d = IM(), p = !!(i.onDayClick || i.mode !== "default");
  je(function() {
    var C;
    c.outside || s.focusedDay && p && Te(s.focusedDay, e) && ((C = r.current) === null || C === void 0 || C.focus());
  }, [
    s.focusedDay,
    e,
    r,
    p,
    c.outside
  ]);
  var m = $M(i, c).join(" "), g = FM(i, c), y = !!(c.outside && !i.showOutsideDays || c.hidden), h = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : sM, v = u.jsx(h, { date: e, displayMonth: t, activeModifiers: c }), b = {
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
function BM(e) {
  var t = Sr(null), r = qM(e.date, e.displayMonth, t);
  return r.isHidden ? u.jsx("div", { role: "gridcell" }) : r.isButton ? u.jsx(jo, ae({ name: "day", ref: t }, r.buttonProps)) : u.jsx("div", ae({}, r.divProps));
}
function WM(e) {
  var t = e.number, r = e.dates, n = pe(), o = n.onWeekNumberClick, a = n.styles, i = n.classNames, s = n.locale, c = n.labels.labelWeekNumber, l = n.formatters.formatWeekNumber, d = l(Number(t), { locale: s });
  if (!o)
    return u.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var p = c(Number(t), { locale: s }), m = function(g) {
    o(t, r, g);
  };
  return u.jsx(jo, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: m, children: d });
}
function HM(e) {
  var t, r, n = pe(), o = n.styles, a = n.classNames, i = n.showWeekNumber, s = n.components, c = (t = s?.Day) !== null && t !== void 0 ? t : BM, l = (r = s?.WeekNumber) !== null && r !== void 0 ? r : WM, d;
  return i && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(l, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(p) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(c, { displayMonth: e.displayMonth, date: p }) }, VT(p));
  })] });
}
function fp(e, t, r) {
  for (var n = r?.ISOWeek ? rb(t) : td(t, r), o = r?.ISOWeek ? Xt(e) : at(e, r), a = tt(n, o), i = [], s = 0; s <= a; s++)
    i.push(Ee(o, s));
  var c = i.reduce(function(l, d) {
    var p = r?.ISOWeek ? ab(d) : sb(d, r), m = l.find(function(g) {
      return g.weekNumber === p;
    });
    return m ? (m.dates.push(d), l) : (l.push({
      weekNumber: p,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function VM(e, t) {
  var r = fp(Me(e), ed(e), t);
  if (t?.useFixedWeeks) {
    var n = GT(e, t);
    if (n < 6) {
      var o = r[r.length - 1], a = o.dates[o.dates.length - 1], i = Yl(a, 6 - n), s = fp(Yl(a, 1), i, t);
      r.push.apply(r, s);
    }
  }
  return r;
}
function zM(e) {
  var t, r, n, o = pe(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, p = o.weekStartsOn, m = o.firstWeekContainsDate, g = o.ISOWeek, y = VM(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: g,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: m
  }), h = (t = d?.Head) !== null && t !== void 0 ? t : iM, v = (r = d?.Row) !== null && r !== void 0 ? r : HM, b = (n = d?.Footer) !== null && n !== void 0 ? n : nM;
  return u.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && u.jsx(h, {}), u.jsx("tbody", { className: i.tbody, style: s.tbody, children: y.map(function(x) {
    return u.jsx(v, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), u.jsx(b, { displayMonth: e.displayMonth })] });
}
function GM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var UM = GM() ? dg : je, Ti = !1, KM = 0;
function pp() {
  return "react-day-picker-".concat(++KM);
}
function YM(e) {
  var t, r = e ?? (Ti ? pp() : null), n = Ne(r), o = n[0], a = n[1];
  return UM(function() {
    o === null && a(pp());
  }, []), je(function() {
    Ti === !1 && (Ti = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function XM(e) {
  var t, r, n = pe(), o = n.dir, a = n.classNames, i = n.styles, s = n.components, c = Dn().displayMonths, l = YM(n.id ? "".concat(n.id, "-").concat(e.displayIndex) : void 0), d = n.id ? "".concat(n.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], m = i.month, g = e.displayIndex === 0, y = e.displayIndex === c.length - 1, h = !g && !y;
  o === "rtl" && (t = [g, y], y = t[0], g = t[1]), g && (p.push(a.caption_start), m = ae(ae({}, m), i.caption_start)), y && (p.push(a.caption_end), m = ae(ae({}, m), i.caption_end)), h && (p.push(a.caption_between), m = ae(ae({}, m), i.caption_between));
  var v = (r = s?.Caption) !== null && r !== void 0 ? r : rM;
  return u.jsxs("div", { className: p.join(" "), style: m, children: [u.jsx(v, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(zM, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function QM(e) {
  var t = pe(), r = t.classNames, n = t.styles;
  return u.jsx("div", { className: r.months, style: n.months, children: e.children });
}
function ZM(e) {
  var t, r, n = e.initialProps, o = pe(), a = cd(), i = Dn(), s = Ne(!1), c = s[0], l = s[1];
  je(function() {
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
  }, {}), g = (r = (t = n.components) === null || t === void 0 ? void 0 : t.Months) !== null && r !== void 0 ? r : QM;
  return u.jsx("div", ae({ className: d.join(" "), style: p, dir: o.dir, id: o.id, nonce: n.nonce, title: n.title, lang: n.lang }, m, { children: u.jsx(g, { children: i.displayMonths.map(function(y, h) {
    return u.jsx(XM, { displayIndex: h, displayMonth: y }, h);
  }) }) }));
}
function JM(e) {
  var t = e.children, r = S1(e, ["children"]);
  return u.jsx(W1, { initialProps: r, children: u.jsx(Z1, { children: u.jsx(jM, { initialProps: r, children: u.jsx(cM, { initialProps: r, children: u.jsx(dM, { initialProps: r, children: u.jsx(bM, { children: u.jsx(AM, { children: t }) }) }) }) }) }) });
}
function xb(e) {
  return u.jsx(JM, ae({}, e, { children: u.jsx(ZM, { initialProps: e }) }));
}
const eA = "(##) ####-####", tA = "(##) #####-####", rA = "#####-###", nA = "###.###.###-##", oA = "##.###.###/####-##", aA = "###########", iA = "##.###.###-#", sA = "AAA#A##", cA = "###########", lA = "##############", wb = (e, t) => {
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
}, u4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: tA,
  CNH_MASK: aA,
  CNPJ_MASK: oA,
  CPF_MASK: nA,
  PHONE_MASK: eA,
  PLATE_MASK: sA,
  RENAVAM_MASK: cA,
  RG_MASK: iA,
  RNTRC_MASK: lA,
  ZIP_CODE_MASK: rA,
  formatMask: wb
}, Symbol.toStringTag, { value: "Module" })), d4 = [
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
function _b({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    xb,
    {
      showOutsideDays: r,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          gt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: T(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          n.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: T(
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
        IconLeft: ({ className: o, ...a }) => /* @__PURE__ */ u.jsx(zu, { className: T("h-4 w-4", o), ...a }),
        IconRight: ({ className: o, ...a }) => /* @__PURE__ */ u.jsx(En, { className: T("h-4 w-4", o), ...a })
      },
      ...n
    }
  );
}
_b.displayName = "Calendar";
const uA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: T(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
uA.displayName = "Card";
const dA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: T("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
dA.displayName = "CardHeader";
const fA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    ref: r,
    className: T(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
fA.displayName = "CardTitle";
const pA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: r,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
pA.displayName = "CardDescription";
const mA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { ref: r, className: T("p-4", e), ...t }));
mA.displayName = "CardContent";
const hA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: T("flex items-center p-4 pt-0", e),
    ...t
  }
));
hA.displayName = "CardFooter";
function vA(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function mp(e) {
  return vA(e) || Array.isArray(e);
}
function gA() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ud(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : r.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !mp(s) || !mp(c) ? s === c : ud(s, c);
  });
}
function hp(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function yA(e, t) {
  if (e.length !== t.length) return !1;
  const r = hp(e), n = hp(t);
  return r.every((o, a) => {
    const i = n[a];
    return ud(o, i);
  });
}
function dd(e) {
  return typeof e == "number";
}
function Ql(e) {
  return typeof e == "string";
}
function va(e) {
  return typeof e == "boolean";
}
function vp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ye(e) {
  return Math.abs(e);
}
function fd(e) {
  return Math.sign(e);
}
function nn(e, t) {
  return ye(e - t);
}
function bA(e, t) {
  if (e === 0 || t === 0 || ye(e) <= ye(t)) return 0;
  const r = nn(ye(e), ye(t));
  return ye(r / e);
}
function xA(e) {
  return Math.round(e * 100) / 100;
}
function ln(e) {
  return un(e).map(Number);
}
function Ve(e) {
  return e[kn(e)];
}
function kn(e) {
  return Math.max(0, e.length - 1);
}
function pd(e, t) {
  return t === kn(e);
}
function gp(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function un(e) {
  return Object.keys(e);
}
function Sb(e, t) {
  return [e, t].reduce((r, n) => (un(n).forEach((o) => {
    const a = r[o], i = n[o], s = vp(a) && vp(i);
    r[o] = s ? Sb(a, i) : i;
  }), r), {});
}
function Zl(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function wA(e, t) {
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
    return Ql(e) ? r[e](c) : e(t, c, l);
  }
  return {
    measure: i
  };
}
function dn() {
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
function _A(e, t, r, n) {
  const o = dn(), a = 1e3 / 60;
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
function SA(e, t) {
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
function Qt(e = 0, t = 0) {
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
function Cb(e, t, r) {
  const {
    constrain: n
  } = Qt(0, e), o = e + 1;
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
    return Cb(e, s(), r);
  }
  const p = {
    get: s,
    set: c,
    add: l,
    clone: d
  };
  return p;
}
function CA(e, t, r, n, o, a, i, s, c, l, d, p, m, g, y, h, v, b, x) {
  const {
    cross: w,
    direction: _
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], C = {
    passive: !1
  }, P = dn(), E = dn(), R = Qt(50, 225).constrain(g.measure(20)), I = {
    mouse: 300,
    touch: 400
  }, j = {
    mouse: 500,
    touch: 600
  }, V = y ? 43 : 25;
  let q = !1, M = 0, $ = 0, F = !1, D = !1, N = !1, W = !1;
  function O(U) {
    if (!x) return;
    function ie(ge) {
      (va(x) || x(U, ge)) && ee(ge);
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
    const Y = p.add(fd(U) * -1), ge = d.byDistance(U, !y).distance;
    return y || ye(U) < R ? ge : v && ie ? ge * 0.5 : d.byIndex(Y.get(), 0).distance;
  }
  function ee(U) {
    const ie = Zl(U, n);
    W = ie, N = y && ie && !U.buttons && q, q = nn(o.get(), i.get()) >= 2, !(ie && U.button !== 0) && (B(U.target) || (F = !0, a.pointerDown(U), l.useFriction(0).useDuration(0), o.set(i), A(), M = a.readPoint(U), $ = a.readPoint(U, w), m.emit("pointerDown")));
  }
  function k(U) {
    if (!Zl(U, n) && U.touches.length >= 2) return X(U);
    const Y = a.readPoint(U), ge = a.readPoint(U, w), we = nn(Y, M), Pe = nn(ge, $);
    if (!D && !W && (!U.cancelable || (D = we > Pe, !D)))
      return X(U);
    const Wt = a.pointerMove(U);
    we > h && (N = !0), l.useFriction(0.3).useDuration(0.75), s.start(), o.add(_(Wt)), U.preventDefault();
  }
  function X(U) {
    const Y = d.byDistance(0, !1).index !== p.get(), ge = a.pointerUp(U) * K(), we = G(_(ge), Y), Pe = bA(ge, we), Wt = V - 10 * Pe, _t = b + Pe / 50;
    D = !1, F = !1, E.clear(), l.useDuration(Wt).useFriction(_t), c.distance(we, !y), W = !1, m.emit("pointerUp");
  }
  function re(U) {
    N && (U.stopPropagation(), U.preventDefault(), N = !1);
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
function PA(e, t) {
  let n, o;
  function a(p) {
    return p.timeStamp;
  }
  function i(p, m) {
    const y = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Zl(p, t) ? p : p.touches[0])[y];
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
function EA() {
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
function RA(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function NA(e, t, r, n, o, a, i) {
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
      (va(a) || a(v, x)) && b(x);
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
function TA(e, t, r, n, o, a) {
  let i = 0, s = 0, c = o, l = a, d = e.get(), p = 0;
  function m() {
    const C = n.get() - e.get(), P = !c;
    let E = 0;
    return P ? (i = 0, r.set(n), e.set(n), E = C) : (r.set(e), i += C / c, i *= l, d += i, e.add(i), E = d - p), s = fd(E), p = d, S;
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
function MA(e, t, r, n, o) {
  const a = o.measure(10), i = o.measure(50), s = Qt(0.1, 0.99);
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
function AA(e, t, r, n, o) {
  const a = Qt(-t + e, 0), i = p(), s = d(), c = m();
  function l(y, h) {
    return nn(y, h) <= 1;
  }
  function d() {
    const y = i[0], h = Ve(i), v = i.lastIndexOf(y), b = i.indexOf(h) + 1;
    return Qt(v, b);
  }
  function p() {
    return r.map((y, h) => {
      const {
        min: v,
        max: b
      } = a, x = a.constrain(y), w = !h, _ = pd(r, h);
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
function OA(e, t, r) {
  const n = t[0], o = r ? n - e : Ve(t);
  return {
    limit: Qt(o, n)
  };
}
function jA(e, t, r, n) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = Qt(a, i);
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
function DA(e) {
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
function kA(e, t, r, n, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, c = p().map(t.measure), l = m(), d = g();
  function p() {
    return s(n).map((h) => Ve(h)[i] - h[0][a]).map(ye);
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
function IA(e, t, r, n, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = n, l = d();
  function d() {
    const m = i(a), g = !e || t === "keepSnaps";
    return r.length === 1 ? [a] : g ? m : m.slice(s, c).map((y, h, v) => {
      const b = !h, x = pd(v, h);
      if (b) {
        const w = Ve(v[0]) + 1;
        return gp(w);
      }
      if (x) {
        const w = kn(a) - Ve(v)[0] + 1;
        return gp(w, Ve(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: l
  };
}
function LA(e, t, r, n, o) {
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
    const b = v.filter((x) => fd(x) === h);
    return b.length ? c(b) : Ve(v) - r;
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
function $A(e, t, r, n, o, a, i) {
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
function FA(e, t, r, n, o, a, i, s) {
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
      dd(x) && (o.useDuration(0), n.index(x, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((h, v) => {
      a.add(h, "focus", (b) => {
        (va(s) || s(g, b)) && y(v);
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
function Qr(e) {
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
    return dd(c) ? c : c.get();
  }
  return {
    get: r,
    set: n,
    add: o,
    subtract: a
  };
}
function Pb(e, t) {
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
    const g = xA(e.direction(m));
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
function qA(e, t, r, n, o, a, i, s, c) {
  const d = ln(o), p = ln(o).reverse(), m = b().concat(x());
  function g(P, E) {
    return P.reduce((R, I) => R - o[I], E);
  }
  function y(P, E) {
    return P.reduce((R, I) => g(R, E) > 0 ? R.concat([I]) : R, []);
  }
  function h(P) {
    return a.map((E, R) => ({
      start: E - n[R] + 0.5 + P,
      end: E + t - 0.5 + P
    }));
  }
  function v(P, E, R) {
    const I = h(E);
    return P.map((j) => {
      const V = R ? 0 : -r, q = R ? r : 0, M = R ? "end" : "start", $ = I[j][M];
      return {
        index: j,
        loopPoint: $,
        slideLocation: Qr(-1),
        translate: Pb(e, c[j]),
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
      const E = d.filter((R) => R !== P);
      return g(E, t) <= 0.1;
    });
  }
  function _() {
    m.forEach((P) => {
      const {
        target: E,
        translate: R,
        slideLocation: I
      } = P, j = E();
      j !== I.get() && (R.to(j), I.set(j));
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
function BA(e, t, r) {
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
      o || (va(r) || r(c, d)) && l(d);
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
function WA(e, t, r, n) {
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
    return un(o).reduce((h, v) => {
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
function HA(e, t, r, n, o, a) {
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
    const x = a.getComputedStyle(Ve(n));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function v() {
    return r.map((x, w, _) => {
      const S = !w, C = pd(_, w);
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
function VA(e, t, r, n, o, a, i, s, c) {
  const {
    startEdge: l,
    endEdge: d,
    direction: p
  } = e, m = dd(r);
  function g(b, x) {
    return ln(b).filter((w) => w % x === 0).map((w) => b.slice(w, w + x));
  }
  function y(b) {
    return b.length ? ln(b).reduce((x, w, _) => {
      const S = Ve(x) || 0, C = S === 0, P = w === kn(b), E = o[l] - a[S][l], R = o[l] - a[w][d], I = !n && C ? p(i) : 0, j = !n && P ? p(s) : 0, V = ye(R - j - (E + I));
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
function zA(e, t, r, n, o, a, i) {
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
  } = a, P = 2, E = EA(), R = E.measure(t), I = r.map(E.measure), j = SA(c, l), V = j.measureSize(R), q = RA(V), M = wA(s, V), $ = !p && !!x, F = p || !!x, {
    slideSizes: D,
    slideSizesWithGaps: N,
    startGap: W,
    endGap: O
  } = HA(j, R, I, r, F, o), z = VA(j, V, v, p, R, I, W, O, P), {
    snaps: A,
    snapsAligned: B
  } = kA(j, M, R, I, z), K = -Ve(A) + Ve(N), {
    snapsContained: G,
    scrollContainLimit: ee
  } = AA(V, K, B, x, P), k = $ ? G : B, {
    limit: X
  } = OA(K, k, p), re = Cb(kn(k), d, p), oe = re.clone(), te = ln(r), U = ({
    dragHandler: dr,
    scrollBody: di,
    scrollBounds: fi,
    options: {
      loop: ro
    }
  }) => {
    ro || fi.constrain(dr.pointerDown()), di.seek();
  }, ie = ({
    scrollBody: dr,
    translate: di,
    location: fi,
    offsetLocation: ro,
    previousLocation: N0,
    scrollLooper: T0,
    slideLooper: M0,
    dragHandler: A0,
    animation: O0,
    eventHandler: Cf,
    scrollBounds: j0,
    options: {
      loop: Pf
    }
  }, Ef) => {
    const Rf = dr.settled(), D0 = !j0.shouldConstrain(), Nf = Pf ? Rf : Rf && D0, Tf = Nf && !A0.pointerDown();
    Tf && O0.stop();
    const k0 = fi.get() * Ef + N0.get() * (1 - Ef);
    ro.set(k0), Pf && (T0.loop(dr.direction()), M0.loop()), di.to(ro.get()), Tf && Cf.emit("settle"), Nf || Cf.emit("scroll");
  }, Y = _A(n, o, () => U(ui), (dr) => ie(ui, dr)), ge = 0.68, we = k[re.get()], Pe = Qr(we), Wt = Qr(we), _t = Qr(we), Ht = Qr(we), zr = TA(Pe, _t, Wt, Ht, m, ge), ci = LA(p, k, K, X, Ht), li = $A(Y, re, oe, zr, ci, Ht, i), wf = DA(X), _f = dn(), E0 = WA(t, r, i, h), {
    slideRegistry: Sf
  } = IA($, x, k, ee, z, te), R0 = FA(e, r, Sf, li, zr, _f, i, C), ui = {
    ownerDocument: n,
    ownerWindow: o,
    eventHandler: i,
    containerRect: R,
    slideRects: I,
    animation: Y,
    axis: j,
    dragHandler: CA(j, e, n, o, Ht, PA(j, o), Pe, Y, li, zr, ci, re, i, q, g, y, b, ge, S),
    eventStore: _f,
    percentOfView: q,
    index: re,
    indexPrevious: oe,
    limit: X,
    location: Pe,
    offsetLocation: _t,
    previousLocation: Wt,
    options: a,
    resizeHandler: NA(t, i, o, r, j, w, E),
    scrollBody: zr,
    scrollBounds: MA(X, _t, Ht, zr, q),
    scrollLooper: jA(K, X, _t, [Pe, _t, Wt, Ht]),
    scrollProgress: wf,
    scrollSnapList: k.map(wf.get),
    scrollSnaps: k,
    scrollTarget: ci,
    scrollTo: li,
    slideLooper: qA(j, V, K, D, N, A, k, _t, r),
    slideFocus: R0,
    slidesHandler: BA(t, i, _),
    slidesInView: E0,
    slideIndexes: te,
    slideRegistry: Sf,
    slidesToScroll: z,
    target: Ht,
    translate: Pb(j, t)
  };
  return ui;
}
function GA() {
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
const UA = {
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
function KA(e) {
  function t(a, i) {
    return Sb(a, i || {});
  }
  function r(a) {
    const i = a.breakpoints || {}, s = un(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, l) => t(c, l), {});
    return t(a, s);
  }
  function n(a) {
    return a.map((i) => un(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function YA(e) {
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
function Do(e, t, r) {
  const n = e.ownerDocument, o = n.defaultView, a = KA(o), i = YA(a), s = dn(), c = GA(), {
    mergeOptions: l,
    optionsAtMedia: d,
    optionsMediaQueries: p
  } = a, {
    on: m,
    off: g,
    emit: y
  } = c, h = j;
  let v = !1, b, x = l(UA, Do.globalOptions), w = l(x), _ = [], S, C, P;
  function E() {
    const {
      container: te,
      slides: U
    } = w;
    C = (Ql(te) ? e.querySelector(te) : te) || e.children[0];
    const Y = Ql(U) ? C.querySelectorAll(U) : U;
    P = [].slice.call(Y || C.children);
  }
  function R(te) {
    const U = zA(e, C, P, n, o, te, c);
    if (te.loop && !U.slideLooper.canLoop()) {
      const ie = Object.assign({}, te, {
        loop: !1
      });
      return R(ie);
    }
    return U;
  }
  function I(te, U) {
    v || (x = l(x, te), w = d(x), _ = U || _, E(), b = R(w), p([x, ..._.map(({
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
  function M(te, U, ie) {
    !w.active || v || (b.scrollBody.useBaseFriction().useDuration(U === !0 ? 0 : w.duration), b.scrollTo.index(te, ie || 0));
  }
  function $(te) {
    const U = b.index.add(1).get();
    M(U, te, -1);
  }
  function F(te) {
    const U = b.index.add(-1).get();
    M(U, te, 1);
  }
  function D() {
    return b.index.add(1).get() !== z();
  }
  function N() {
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
    canScrollPrev: N,
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
    scrollTo: M,
    selectedScrollSnap: z,
    slideNodes: re,
    slidesInView: B,
    slidesNotInView: K
  };
  return I(t, r), setTimeout(() => c.emit("init"), 0), oe;
}
Do.globalOptions = void 0;
function md(e = {}, t = []) {
  const r = Sr(e), n = Sr(t), [o, a] = Ne(), [i, s] = Ne(), c = Lu(() => {
    o && o.reInit(r.current, n.current);
  }, [o]);
  return je(() => {
    ud(r.current, e) || (r.current = e, c());
  }, [e, c]), je(() => {
    yA(n.current, t) || (n.current = t, c());
  }, [t, c]), je(() => {
    if (gA() && i) {
      Do.globalOptions = md.globalOptions;
      const l = Do(i, r.current, n.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
md.globalOptions = void 0;
const Eb = f.createContext(null);
function ga() {
  const e = f.useContext(Eb);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const XA = f.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: n,
    className: o,
    children: a,
    ...i
  }, s) => {
    const [c, l] = md(
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
      Eb.Provider,
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
            className: T("relative", o),
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
XA.displayName = "Carousel";
const QA = f.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: n, orientation: o } = ga();
  return /* @__PURE__ */ u.jsx("div", { ref: n, className: "overflow-hidden", children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      className: T(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
QA.displayName = "CarouselContent";
const ZA = f.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = ga();
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      role: "group",
      "aria-roledescription": "slide",
      className: T(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
ZA.displayName = "CarouselItem";
const JA = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = ga();
  return /* @__PURE__ */ u.jsxs(
    jt,
    {
      ref: o,
      variant: t,
      size: r,
      className: T(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(TP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
JA.displayName = "CarouselPrevious";
const eO = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = ga();
  return /* @__PURE__ */ u.jsxs(
    jt,
    {
      ref: o,
      variant: t,
      size: r,
      className: T(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(AP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
eO.displayName = "CarouselNext";
var Mi, yp;
function Xe() {
  if (yp) return Mi;
  yp = 1;
  var e = Array.isArray;
  return Mi = e, Mi;
}
var Ai, bp;
function Rb() {
  if (bp) return Ai;
  bp = 1;
  var e = typeof no == "object" && no && no.Object === Object && no;
  return Ai = e, Ai;
}
var Oi, xp;
function ut() {
  if (xp) return Oi;
  xp = 1;
  var e = Rb(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Oi = r, Oi;
}
var ji, wp;
function In() {
  if (wp) return ji;
  wp = 1;
  var e = ut(), t = e.Symbol;
  return ji = t, ji;
}
var Di, _p;
function tO() {
  if (_p) return Di;
  _p = 1;
  var e = In(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = e ? e.toStringTag : void 0;
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
  return Di = a, Di;
}
var ki, Sp;
function rO() {
  if (Sp) return ki;
  Sp = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return ki = r, ki;
}
var Ii, Cp;
function ir() {
  if (Cp) return Ii;
  Cp = 1;
  var e = In(), t = tO(), r = rO(), n = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : n : a && a in Object(s) ? t(s) : r(s);
  }
  return Ii = i, Ii;
}
var Li, Pp;
function sr() {
  if (Pp) return Li;
  Pp = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Li = e, Li;
}
var $i, Ep;
function Ln() {
  if (Ep) return $i;
  Ep = 1;
  var e = ir(), t = sr(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && e(o) == r;
  }
  return $i = n, $i;
}
var Fi, Rp;
function hd() {
  if (Rp) return Fi;
  Rp = 1;
  var e = Xe(), t = Ln(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return Fi = o, Fi;
}
var qi, Np;
function Dt() {
  if (Np) return qi;
  Np = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return qi = e, qi;
}
var Bi, Tp;
function vd() {
  if (Tp) return Bi;
  Tp = 1;
  var e = ir(), t = Dt(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == o || c == r || c == a;
  }
  return Bi = i, Bi;
}
var Wi, Mp;
function nO() {
  if (Mp) return Wi;
  Mp = 1;
  var e = ut(), t = e["__core-js_shared__"];
  return Wi = t, Wi;
}
var Hi, Ap;
function oO() {
  if (Ap) return Hi;
  Ap = 1;
  var e = nO(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Hi = r, Hi;
}
var Vi, Op;
function Nb() {
  if (Op) return Vi;
  Op = 1;
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
  return Vi = r, Vi;
}
var zi, jp;
function aO() {
  if (jp) return zi;
  jp = 1;
  var e = vd(), t = oO(), r = Dt(), n = Nb(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, d = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!r(m) || t(m))
      return !1;
    var g = e(m) ? d : a;
    return g.test(n(m));
  }
  return zi = p, zi;
}
var Gi, Dp;
function iO() {
  if (Dp) return Gi;
  Dp = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Gi = e, Gi;
}
var Ui, kp;
function cr() {
  if (kp) return Ui;
  kp = 1;
  var e = aO(), t = iO();
  function r(n, o) {
    var a = t(n, o);
    return e(a) ? a : void 0;
  }
  return Ui = r, Ui;
}
var Ki, Ip;
function ya() {
  if (Ip) return Ki;
  Ip = 1;
  var e = cr(), t = e(Object, "create");
  return Ki = t, Ki;
}
var Yi, Lp;
function sO() {
  if (Lp) return Yi;
  Lp = 1;
  var e = ya();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Yi = t, Yi;
}
var Xi, $p;
function cO() {
  if ($p) return Xi;
  $p = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Xi = e, Xi;
}
var Qi, Fp;
function lO() {
  if (Fp) return Qi;
  Fp = 1;
  var e = ya(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return Qi = o, Qi;
}
var Zi, qp;
function uO() {
  if (qp) return Zi;
  qp = 1;
  var e = ya(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : r.call(a, o);
  }
  return Zi = n, Zi;
}
var Ji, Bp;
function dO() {
  if (Bp) return Ji;
  Bp = 1;
  var e = ya(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && o === void 0 ? t : o, this;
  }
  return Ji = r, Ji;
}
var es, Wp;
function fO() {
  if (Wp) return es;
  Wp = 1;
  var e = sO(), t = cO(), r = lO(), n = uO(), o = dO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, es = a, es;
}
var ts, Hp;
function pO() {
  if (Hp) return ts;
  Hp = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ts = e, ts;
}
var rs, Vp;
function gd() {
  if (Vp) return rs;
  Vp = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return rs = e, rs;
}
var ns, zp;
function ba() {
  if (zp) return ns;
  zp = 1;
  var e = gd();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (e(r[o][0], n))
        return o;
    return -1;
  }
  return ns = t, ns;
}
var os, Gp;
function mO() {
  if (Gp) return os;
  Gp = 1;
  var e = ba(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return os = n, os;
}
var as, Up;
function hO() {
  if (Up) return as;
  Up = 1;
  var e = ba();
  function t(r) {
    var n = this.__data__, o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return as = t, as;
}
var is, Kp;
function vO() {
  if (Kp) return is;
  Kp = 1;
  var e = ba();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return is = t, is;
}
var ss, Yp;
function gO() {
  if (Yp) return ss;
  Yp = 1;
  var e = ba();
  function t(r, n) {
    var o = this.__data__, a = e(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return ss = t, ss;
}
var cs, Xp;
function xa() {
  if (Xp) return cs;
  Xp = 1;
  var e = pO(), t = mO(), r = hO(), n = vO(), o = gO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, cs = a, cs;
}
var ls, Qp;
function yd() {
  if (Qp) return ls;
  Qp = 1;
  var e = cr(), t = ut(), r = e(t, "Map");
  return ls = r, ls;
}
var us, Zp;
function yO() {
  if (Zp) return us;
  Zp = 1;
  var e = fO(), t = xa(), r = yd();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return us = n, us;
}
var ds, Jp;
function bO() {
  if (Jp) return ds;
  Jp = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return ds = e, ds;
}
var fs, em;
function wa() {
  if (em) return fs;
  em = 1;
  var e = bO();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return fs = t, fs;
}
var ps, tm;
function xO() {
  if (tm) return ps;
  tm = 1;
  var e = wa();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return ps = t, ps;
}
var ms, rm;
function wO() {
  if (rm) return ms;
  rm = 1;
  var e = wa();
  function t(r) {
    return e(this, r).get(r);
  }
  return ms = t, ms;
}
var hs, nm;
function _O() {
  if (nm) return hs;
  nm = 1;
  var e = wa();
  function t(r) {
    return e(this, r).has(r);
  }
  return hs = t, hs;
}
var vs, om;
function SO() {
  if (om) return vs;
  om = 1;
  var e = wa();
  function t(r, n) {
    var o = e(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return vs = t, vs;
}
var gs, am;
function bd() {
  if (am) return gs;
  am = 1;
  var e = yO(), t = xO(), r = wO(), n = _O(), o = SO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, gs = a, gs;
}
var ys, im;
function CO() {
  if (im) return ys;
  im = 1;
  var e = bd(), t = "Expected a function";
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
  return r.Cache = e, ys = r, ys;
}
var bs, sm;
function PO() {
  if (sm) return bs;
  sm = 1;
  var e = CO(), t = 500;
  function r(n) {
    var o = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return bs = r, bs;
}
var xs, cm;
function EO() {
  if (cm) return xs;
  cm = 1;
  var e = PO(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(r, "$1") : s || i);
    }), a;
  });
  return xs = n, xs;
}
var ws, lm;
function Tb() {
  if (lm) return ws;
  lm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return ws = e, ws;
}
var _s, um;
function RO() {
  if (um) return _s;
  um = 1;
  var e = In(), t = Tb(), r = Xe(), n = Ln(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
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
  return _s = i, _s;
}
var Ss, dm;
function Mb() {
  if (dm) return Ss;
  dm = 1;
  var e = RO();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Ss = t, Ss;
}
var Cs, fm;
function Ab() {
  if (fm) return Cs;
  fm = 1;
  var e = Xe(), t = hd(), r = EO(), n = Mb();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return Cs = o, Cs;
}
var Ps, pm;
function _a() {
  if (pm) return Ps;
  pm = 1;
  var e = Ln();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Ps = t, Ps;
}
var Es, mm;
function xd() {
  if (mm) return Es;
  mm = 1;
  var e = Ab(), t = _a();
  function r(n, o) {
    o = e(o, n);
    for (var a = 0, i = o.length; n != null && a < i; )
      n = n[t(o[a++])];
    return a && a == i ? n : void 0;
  }
  return Es = r, Es;
}
var Rs, hm;
function Ob() {
  if (hm) return Rs;
  hm = 1;
  var e = xd();
  function t(r, n, o) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? o : a;
  }
  return Rs = t, Rs;
}
Ob();
var Ns, vm;
function NO() {
  if (vm) return Ns;
  vm = 1;
  function e(t) {
    return t == null;
  }
  return Ns = e, Ns;
}
var TO = NO();
const MO = /* @__PURE__ */ st(TO);
var Ts, gm;
function AO() {
  if (gm) return Ts;
  gm = 1;
  var e = ir(), t = Xe(), r = sr(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return Ts = o, Ts;
}
var OO = AO();
const jb = /* @__PURE__ */ st(OO);
var jO = vd();
const ko = /* @__PURE__ */ st(jO);
var DO = Dt();
const Db = /* @__PURE__ */ st(DO);
var mo = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ym;
function kO() {
  if (ym) return ce;
  ym = 1;
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
var bm;
function IO() {
  return bm || (bm = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var C = i, P = a, E = e, R = c, I = r, j = m, V = p, q = t, M = o, $ = n, F = l, D = d, N = !1, W = !1;
    function O(Y) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
    le.ContextConsumer = C, le.ContextProvider = P, le.Element = E, le.ForwardRef = R, le.Fragment = I, le.Lazy = j, le.Memo = V, le.Portal = q, le.Profiler = M, le.StrictMode = $, le.Suspense = F, le.SuspenseList = D, le.isAsyncMode = O, le.isConcurrentMode = z, le.isContextConsumer = A, le.isContextProvider = B, le.isElement = K, le.isForwardRef = G, le.isFragment = ee, le.isLazy = k, le.isMemo = X, le.isPortal = re, le.isProfiler = oe, le.isStrictMode = te, le.isSuspense = U, le.isSuspenseList = ie, le.isValidElementType = _, le.typeOf = S;
  })()), le;
}
var xm;
function LO() {
  return xm || (xm = 1, process.env.NODE_ENV === "production" ? mo.exports = kO() : mo.exports = IO()), mo.exports;
}
LO();
var Ms, wm;
function kb() {
  if (wm) return Ms;
  wm = 1;
  var e = ir(), t = sr(), r = "[object Number]";
  function n(o) {
    return typeof o == "number" || t(o) && e(o) == r;
  }
  return Ms = n, Ms;
}
var As, _m;
function $O() {
  if (_m) return As;
  _m = 1;
  var e = kb();
  function t(r) {
    return e(r) && r != +r;
  }
  return As = t, As;
}
var FO = $O();
const qO = /* @__PURE__ */ st(FO);
var BO = kb();
const WO = /* @__PURE__ */ st(BO);
var ho = function(t) {
  return jb(t) && t.indexOf("%") === t.length - 1;
}, He = function(t) {
  return WO(t) && !qO(t);
}, Io = function(t) {
  return He(t) || jb(t);
};
function Jl(e) {
  "@babel/helpers - typeof";
  return Jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jl(e);
}
var HO = ["viewBox", "children"], VO = [
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
], Sm = ["points", "pathLength"], Os = {
  svg: HO,
  polygon: Sm,
  polyline: Sm
}, Ib = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], zO = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, GO = function(t, r, n) {
  if (!Db(t) || Jl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    Ib.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = zO(i, r, n));
  }), o;
}, UO = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, KO = function(t, r, n, o) {
  var a, i = (a = Os?.[o]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !ko(t) && (o && i.includes(r) || VO.includes(r)) || Ib.includes(r);
}, Lb = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ I0(t) && (o = t.props), !Db(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    KO((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, YO = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function eu() {
  return eu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, eu.apply(this, arguments);
}
function XO(e, t) {
  if (e == null) return {};
  var r = QO(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ZO(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, l = XO(e, YO), d = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, p = vt("recharts-surface", a);
  return /* @__PURE__ */ Q.createElement("svg", eu({}, Lb(l, !0, "svg"), {
    className: p,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ Q.createElement("title", null, s), /* @__PURE__ */ Q.createElement("desc", null, c), t);
}
var JO = process.env.NODE_ENV !== "production", Co = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (JO && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, js, Cm;
function ej() {
  if (Cm) return js;
  Cm = 1;
  function e(t, r, n) {
    var o = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + r];
    return i;
  }
  return js = e, js;
}
var Ds, Pm;
function tj() {
  if (Pm) return Ds;
  Pm = 1;
  var e = ej();
  function t(r, n, o) {
    var a = r.length;
    return o = o === void 0 ? a : o, !n && o >= a ? r : e(r, n, o);
  }
  return Ds = t, Ds;
}
var ks, Em;
function $b() {
  if (Em) return ks;
  Em = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function c(l) {
    return s.test(l);
  }
  return ks = c, ks;
}
var Is, Rm;
function rj() {
  if (Rm) return Is;
  Rm = 1;
  function e(t) {
    return t.split("");
  }
  return Is = e, Is;
}
var Ls, Nm;
function nj() {
  if (Nm) return Ls;
  Nm = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", c = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + c + ")", d = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", y = l + "?", h = "[" + a + "]?", v = "(?:" + g + "(?:" + [d, p, m].join("|") + ")" + h + y + ")*", b = h + y + v, x = "(?:" + [d + s + "?", s, p, m, i].join("|") + ")", w = RegExp(c + "(?=" + c + ")|" + x + b, "g");
  function _(S) {
    return S.match(w) || [];
  }
  return Ls = _, Ls;
}
var $s, Tm;
function oj() {
  if (Tm) return $s;
  Tm = 1;
  var e = rj(), t = $b(), r = nj();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return $s = n, $s;
}
var Fs, Mm;
function aj() {
  if (Mm) return Fs;
  Mm = 1;
  var e = tj(), t = $b(), r = oj(), n = Mb();
  function o(a) {
    return function(i) {
      i = n(i);
      var s = t(i) ? r(i) : void 0, c = s ? s[0] : i.charAt(0), l = s ? e(s, 1).join("") : i.slice(1);
      return c[a]() + l;
    };
  }
  return Fs = o, Fs;
}
var qs, Am;
function ij() {
  if (Am) return qs;
  Am = 1;
  var e = aj(), t = e("toUpperCase");
  return qs = t, qs;
}
var sj = ij();
const Fb = /* @__PURE__ */ st(sj);
function vo(e) {
  return function() {
    return e;
  };
}
const qb = Math.cos, Lo = Math.sin, Qe = Math.sqrt, $o = Math.PI, Sa = 2 * $o, tu = Math.PI, ru = 2 * tu, Gt = 1e-6, cj = ru - Gt;
function Bb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function lj(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Bb;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class uj {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Bb : lj(t);
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
    else if (m > Gt) if (!(Math.abs(p * c - l * d) > Gt) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - i, y = o - s, h = c * c + l * l, v = g * g + y * y, b = Math.sqrt(h), x = Math.sqrt(m), w = a * Math.tan((tu - Math.acos((h + m - v) / (2 * b * x))) / 2), _ = w / x, S = w / b;
      Math.abs(_ - 1) > Gt && this._append`L${t + _ * d},${r + _ * p}`, this._append`A${a},${a},0,0,${+(p * g > d * y)},${this._x1 = t + S * c},${this._y1 = r + S * l}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), l = t + s, d = r + c, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${d}` : (Math.abs(this._x1 - l) > Gt || Math.abs(this._y1 - d) > Gt) && this._append`L${l},${d}`, n && (m < 0 && (m = m % ru + ru), m > cj ? this._append`A${n},${n},0,1,${p},${t - s},${r - c}A${n},${n},0,1,${p},${this._x1 = l},${this._y1 = d}` : m > Gt && this._append`A${n},${n},0,${+(m >= tu)},${p},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function dj(e) {
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
  }, () => new uj(t);
}
const wd = {
  draw(e, t) {
    const r = Qe(t / $o);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Sa);
  }
}, fj = {
  draw(e, t) {
    const r = Qe(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Wb = Qe(1 / 3), pj = Wb * 2, mj = {
  draw(e, t) {
    const r = Qe(t / pj), n = r * Wb;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, hj = {
  draw(e, t) {
    const r = Qe(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, vj = 0.8908130915292852, Hb = Lo($o / 10) / Lo(7 * $o / 10), gj = Lo(Sa / 10) * Hb, yj = -qb(Sa / 10) * Hb, bj = {
  draw(e, t) {
    const r = Qe(t * vj), n = gj * r, o = yj * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = Sa * a / 5, s = qb(i), c = Lo(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, Bs = Qe(3), xj = {
  draw(e, t) {
    const r = -Qe(t / (Bs * 3));
    e.moveTo(0, r * 2), e.lineTo(-Bs * r, -r), e.lineTo(Bs * r, -r), e.closePath();
  }
}, ke = -0.5, Ie = Qe(3) / 2, nu = 1 / Qe(12), wj = (nu / 2 + 1) * 3, _j = {
  draw(e, t) {
    const r = Qe(t / wj), n = r / 2, o = r * nu, a = n, i = r * nu + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(ke * n - Ie * o, Ie * n + ke * o), e.lineTo(ke * a - Ie * i, Ie * a + ke * i), e.lineTo(ke * s - Ie * c, Ie * s + ke * c), e.lineTo(ke * n + Ie * o, ke * o - Ie * n), e.lineTo(ke * a + Ie * i, ke * i - Ie * a), e.lineTo(ke * s + Ie * c, ke * c - Ie * s), e.closePath();
  }
};
function Sj(e, t) {
  let r = null, n = dj(o);
  e = typeof e == "function" ? e : vo(e || wd), t = typeof t == "function" ? t : vo(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : vo(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : vo(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
var Cj = ["type", "size", "sizeType"];
function ou() {
  return ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ou.apply(this, arguments);
}
function Om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), !0).forEach(function(n) {
      Pj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pj(e, t, r) {
  return t = Ej(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ej(e) {
  var t = Rj(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function Rj(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nj(e, t) {
  if (e == null) return {};
  var r = Tj(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Vb = {
  symbolCircle: wd,
  symbolCross: fj,
  symbolDiamond: mj,
  symbolSquare: hj,
  symbolStar: bj,
  symbolTriangle: xj,
  symbolWye: _j
}, Mj = Math.PI / 180, Aj = function(t) {
  var r = "symbol".concat(Fb(t));
  return Vb[r] || wd;
}, Oj = function(t, r, n) {
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
      var o = 18 * Mj;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, jj = function(t, r) {
  Vb["symbol".concat(Fb(t))] = r;
}, zb = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = Nj(t, Cj), l = jm(jm({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var v = Aj(n), b = Sj().type(v).size(Oj(a, s, n));
    return b();
  }, p = l.className, m = l.cx, g = l.cy, y = Lb(l, !0);
  return m === +m && g === +g && a === +a ? /* @__PURE__ */ Q.createElement("path", ou({}, y, {
    className: vt("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
zb.registerSymbol = jj;
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function au() {
  return au = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, au.apply(this, arguments);
}
function Dm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dm(Object(r), !0).forEach(function(n) {
      pn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ij(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ub(n.key), n);
  }
}
function Lj(e, t, r) {
  return t && Ij(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $j(e, t, r) {
  return t = Fo(t), Fj(e, Gb() ? Reflect.construct(t, r || [], Fo(e).constructor) : t.apply(e, r));
}
function Fj(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qj(e);
}
function qj(e) {
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
function Fo(e) {
  return Fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fo(e);
}
function Bj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && iu(e, t);
}
function iu(e, t) {
  return iu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, iu(e, t);
}
function pn(e, t, r) {
  return t = Ub(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ub(e) {
  var t = Wj(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function Wj(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Le = 32, _d = /* @__PURE__ */ (function(e) {
  function t() {
    return kj(this, t), $j(this, t, arguments);
  }
  return Bj(t, e), Lj(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var o = this.props.inactiveColor, a = Le / 2, i = Le / 6, s = Le / 3, c = n.inactive ? o : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ Q.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Le,
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
            H`).concat(Le, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ Q.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Le / 8, "h").concat(Le, "v").concat(Le * 3 / 4, "h").concat(-Le, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ Q.isValidElement(n.legendIcon)) {
          var l = Dj({}, n);
          return delete l.legendIcon, /* @__PURE__ */ Q.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ Q.createElement(zb, {
          fill: c,
          cx: a,
          cy: a,
          size: Le,
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
        width: Le,
        height: Le
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, y) {
        var h = g.formatter || c, v = vt(pn(pn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var b = ko(g.value) ? null : g.value;
        Co(
          !ko(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = g.inactive ? l : g.color;
        return /* @__PURE__ */ Q.createElement("li", au({
          className: v,
          style: p,
          key: "legend-item-".concat(y)
        }, GO(n.props, g, y)), /* @__PURE__ */ Q.createElement(ZO, {
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
})(oa);
pn(_d, "displayName", "Legend");
pn(_d, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Ws, km;
function Hj() {
  if (km) return Ws;
  km = 1;
  var e = xa();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Ws = t, Ws;
}
var Hs, Im;
function Vj() {
  if (Im) return Hs;
  Im = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Hs = e, Hs;
}
var Vs, Lm;
function zj() {
  if (Lm) return Vs;
  Lm = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Vs = e, Vs;
}
var zs, $m;
function Gj() {
  if ($m) return zs;
  $m = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return zs = e, zs;
}
var Gs, Fm;
function Uj() {
  if (Fm) return Gs;
  Fm = 1;
  var e = xa(), t = yd(), r = bd(), n = 200;
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
  return Gs = o, Gs;
}
var Us, qm;
function Kb() {
  if (qm) return Us;
  qm = 1;
  var e = xa(), t = Hj(), r = Vj(), n = zj(), o = Gj(), a = Uj();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = r, i.prototype.get = n, i.prototype.has = o, i.prototype.set = a, Us = i, Us;
}
var Ks, Bm;
function Kj() {
  if (Bm) return Ks;
  Bm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ks = t, Ks;
}
var Ys, Wm;
function Yj() {
  if (Wm) return Ys;
  Wm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ys = e, Ys;
}
var Xs, Hm;
function Yb() {
  if (Hm) return Xs;
  Hm = 1;
  var e = bd(), t = Kj(), r = Yj();
  function n(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Xs = n, Xs;
}
var Qs, Vm;
function Xj() {
  if (Vm) return Qs;
  Vm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Qs = e, Qs;
}
var Zs, zm;
function Xb() {
  if (zm) return Zs;
  zm = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Zs = e, Zs;
}
var Js, Gm;
function Qb() {
  if (Gm) return Js;
  Gm = 1;
  var e = Yb(), t = Xj(), r = Xb(), n = 1, o = 2;
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
  return Js = a, Js;
}
var ec, Um;
function Qj() {
  if (Um) return ec;
  Um = 1;
  var e = ut(), t = e.Uint8Array;
  return ec = t, ec;
}
var tc, Km;
function Zj() {
  if (Km) return tc;
  Km = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return tc = e, tc;
}
var rc, Ym;
function Sd() {
  if (Ym) return rc;
  Ym = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return rc = e, rc;
}
var nc, Xm;
function Jj() {
  if (Xm) return nc;
  Xm = 1;
  var e = In(), t = Qj(), r = gd(), n = Qb(), o = Zj(), a = Sd(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", d = "[object Error]", p = "[object Map]", m = "[object Number]", g = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, _ = w ? w.valueOf : void 0;
  function S(C, P, E, R, I, j, V) {
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
        var M = R & i;
        if (q || (q = a), C.size != P.size && !M)
          return !1;
        var $ = V.get(C);
        if ($)
          return $ == P;
        R |= s, V.set(C, P);
        var F = n(q(C), q(P), R, I, j, V);
        return V.delete(C), F;
      case v:
        if (_)
          return _.call(C) == _.call(P);
    }
    return !1;
  }
  return nc = S, nc;
}
var oc, Qm;
function Zb() {
  if (Qm) return oc;
  Qm = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return oc = e, oc;
}
var ac, Zm;
function eD() {
  if (Zm) return ac;
  Zm = 1;
  var e = Zb(), t = Xe();
  function r(n, o, a) {
    var i = o(n);
    return t(n) ? i : e(i, a(n));
  }
  return ac = r, ac;
}
var ic, Jm;
function tD() {
  if (Jm) return ic;
  Jm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++n < o; ) {
      var s = t[n];
      r(s, n, t) && (i[a++] = s);
    }
    return i;
  }
  return ic = e, ic;
}
var sc, eh;
function rD() {
  if (eh) return sc;
  eh = 1;
  function e() {
    return [];
  }
  return sc = e, sc;
}
var cc, th;
function nD() {
  if (th) return cc;
  th = 1;
  var e = tD(), t = rD(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return n.call(i, s);
    }));
  } : t;
  return cc = a, cc;
}
var lc, rh;
function oD() {
  if (rh) return lc;
  rh = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return lc = e, lc;
}
var uc, nh;
function aD() {
  if (nh) return uc;
  nh = 1;
  var e = ir(), t = sr(), r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return uc = n, uc;
}
var dc, oh;
function Cd() {
  if (oh) return dc;
  oh = 1;
  var e = aD(), t = sr(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !o.call(i, "callee");
  };
  return dc = a, dc;
}
var Zr = { exports: {} }, fc, ah;
function iD() {
  if (ah) return fc;
  ah = 1;
  function e() {
    return !1;
  }
  return fc = e, fc;
}
Zr.exports;
var ih;
function Jb() {
  return ih || (ih = 1, (function(e, t) {
    var r = ut(), n = iD(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
    e.exports = l;
  })(Zr, Zr.exports)), Zr.exports;
}
var pc, sh;
function Pd() {
  if (sh) return pc;
  sh = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return pc = r, pc;
}
var mc, ch;
function Ed() {
  if (ch) return mc;
  ch = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return mc = t, mc;
}
var hc, lh;
function sD() {
  if (lh) return hc;
  lh = 1;
  var e = ir(), t = Ed(), r = sr(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", d = "[object Number]", p = "[object Object]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", _ = "[object Int8Array]", S = "[object Int16Array]", C = "[object Int32Array]", P = "[object Uint8Array]", E = "[object Uint8ClampedArray]", R = "[object Uint16Array]", I = "[object Uint32Array]", j = {};
  j[x] = j[w] = j[_] = j[S] = j[C] = j[P] = j[E] = j[R] = j[I] = !0, j[n] = j[o] = j[v] = j[a] = j[b] = j[i] = j[s] = j[c] = j[l] = j[d] = j[p] = j[m] = j[g] = j[y] = j[h] = !1;
  function V(q) {
    return r(q) && t(q.length) && !!j[e(q)];
  }
  return hc = V, hc;
}
var vc, uh;
function ex() {
  if (uh) return vc;
  uh = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return vc = e, vc;
}
var Jr = { exports: {} };
Jr.exports;
var dh;
function cD() {
  return dh || (dh = 1, (function(e, t) {
    var r = Rb(), n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = (function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Jr, Jr.exports)), Jr.exports;
}
var gc, fh;
function tx() {
  if (fh) return gc;
  fh = 1;
  var e = sD(), t = ex(), r = cD(), n = r && r.isTypedArray, o = n ? t(n) : e;
  return gc = o, gc;
}
var yc, ph;
function lD() {
  if (ph) return yc;
  ph = 1;
  var e = oD(), t = Cd(), r = Xe(), n = Jb(), o = Pd(), a = tx(), i = Object.prototype, s = i.hasOwnProperty;
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
  return yc = c, yc;
}
var bc, mh;
function uD() {
  if (mh) return bc;
  mh = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || e;
    return r === o;
  }
  return bc = t, bc;
}
var xc, hh;
function dD() {
  if (hh) return xc;
  hh = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return xc = e, xc;
}
var wc, vh;
function fD() {
  if (vh) return wc;
  vh = 1;
  var e = dD(), t = e(Object.keys, Object);
  return wc = t, wc;
}
var _c, gh;
function pD() {
  if (gh) return _c;
  gh = 1;
  var e = uD(), t = fD(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return _c = o, _c;
}
var Sc, yh;
function Ca() {
  if (yh) return Sc;
  yh = 1;
  var e = vd(), t = Ed();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Sc = r, Sc;
}
var Cc, bh;
function Rd() {
  if (bh) return Cc;
  bh = 1;
  var e = lD(), t = pD(), r = Ca();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return Cc = n, Cc;
}
var Pc, xh;
function mD() {
  if (xh) return Pc;
  xh = 1;
  var e = eD(), t = nD(), r = Rd();
  function n(o) {
    return e(o, r, t);
  }
  return Pc = n, Pc;
}
var Ec, wh;
function hD() {
  if (wh) return Ec;
  wh = 1;
  var e = mD(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
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
      var R = a.constructor, I = i.constructor;
      R != I && "constructor" in a && "constructor" in i && !(typeof R == "function" && R instanceof R && typeof I == "function" && I instanceof I) && (_ = !1);
    }
    return d.delete(a), d.delete(i), _;
  }
  return Ec = o, Ec;
}
var Rc, _h;
function vD() {
  if (_h) return Rc;
  _h = 1;
  var e = cr(), t = ut(), r = e(t, "DataView");
  return Rc = r, Rc;
}
var Nc, Sh;
function gD() {
  if (Sh) return Nc;
  Sh = 1;
  var e = cr(), t = ut(), r = e(t, "Promise");
  return Nc = r, Nc;
}
var Tc, Ch;
function rx() {
  if (Ch) return Tc;
  Ch = 1;
  var e = cr(), t = ut(), r = e(t, "Set");
  return Tc = r, Tc;
}
var Mc, Ph;
function yD() {
  if (Ph) return Mc;
  Ph = 1;
  var e = cr(), t = ut(), r = e(t, "WeakMap");
  return Mc = r, Mc;
}
var Ac, Eh;
function bD() {
  if (Eh) return Ac;
  Eh = 1;
  var e = vD(), t = yd(), r = gD(), n = rx(), o = yD(), a = ir(), i = Nb(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", d = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", g = i(e), y = i(t), h = i(r), v = i(n), b = i(o), x = a;
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
  }), Ac = x, Ac;
}
var Oc, Rh;
function xD() {
  if (Rh) return Oc;
  Rh = 1;
  var e = Kb(), t = Qb(), r = Jj(), n = hD(), o = bD(), a = Xe(), i = Jb(), s = tx(), c = 1, l = "[object Arguments]", d = "[object Array]", p = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function y(h, v, b, x, w, _) {
    var S = a(h), C = a(v), P = S ? d : o(h), E = C ? d : o(v);
    P = P == l ? p : P, E = E == l ? p : E;
    var R = P == p, I = E == p, j = P == E;
    if (j && i(h)) {
      if (!i(v))
        return !1;
      S = !0, R = !1;
    }
    if (j && !R)
      return _ || (_ = new e()), S || s(h) ? t(h, v, b, x, w, _) : r(h, v, P, b, x, w, _);
    if (!(b & c)) {
      var V = R && g.call(h, "__wrapped__"), q = I && g.call(v, "__wrapped__");
      if (V || q) {
        var M = V ? h.value() : h, $ = q ? v.value() : v;
        return _ || (_ = new e()), w(M, $, b, x, _);
      }
    }
    return j ? (_ || (_ = new e()), n(h, v, b, x, w, _)) : !1;
  }
  return Oc = y, Oc;
}
var jc, Nh;
function nx() {
  if (Nh) return jc;
  Nh = 1;
  var e = xD(), t = sr();
  function r(n, o, a, i, s) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : e(n, o, a, i, r, s);
  }
  return jc = r, jc;
}
var Dc, Th;
function wD() {
  if (Th) return Dc;
  Th = 1;
  var e = Kb(), t = nx(), r = 1, n = 2;
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
  return Dc = o, Dc;
}
var kc, Mh;
function ox() {
  if (Mh) return kc;
  Mh = 1;
  var e = Dt();
  function t(r) {
    return r === r && !e(r);
  }
  return kc = t, kc;
}
var Ic, Ah;
function _D() {
  if (Ah) return Ic;
  Ah = 1;
  var e = ox(), t = Rd();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var i = o[a], s = n[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return Ic = r, Ic;
}
var Lc, Oh;
function ax() {
  if (Oh) return Lc;
  Oh = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Lc = e, Lc;
}
var $c, jh;
function SD() {
  if (jh) return $c;
  jh = 1;
  var e = wD(), t = _D(), r = ax();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return $c = n, $c;
}
var Fc, Dh;
function CD() {
  if (Dh) return Fc;
  Dh = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Fc = e, Fc;
}
var qc, kh;
function PD() {
  if (kh) return qc;
  kh = 1;
  var e = Ab(), t = Cd(), r = Xe(), n = Pd(), o = Ed(), a = _a();
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
  return qc = i, qc;
}
var Bc, Ih;
function ED() {
  if (Ih) return Bc;
  Ih = 1;
  var e = CD(), t = PD();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return Bc = r, Bc;
}
var Wc, Lh;
function RD() {
  if (Lh) return Wc;
  Lh = 1;
  var e = nx(), t = Ob(), r = ED(), n = hd(), o = ox(), a = ax(), i = _a(), s = 1, c = 2;
  function l(d, p) {
    return n(d) && o(p) ? a(i(d), p) : function(m) {
      var g = t(m, d);
      return g === void 0 && g === p ? r(m, d) : e(p, g, s | c);
    };
  }
  return Wc = l, Wc;
}
var Hc, $h;
function Pa() {
  if ($h) return Hc;
  $h = 1;
  function e(t) {
    return t;
  }
  return Hc = e, Hc;
}
var Vc, Fh;
function ND() {
  if (Fh) return Vc;
  Fh = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Vc = e, Vc;
}
var zc, qh;
function TD() {
  if (qh) return zc;
  qh = 1;
  var e = xd();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return zc = t, zc;
}
var Gc, Bh;
function MD() {
  if (Bh) return Gc;
  Bh = 1;
  var e = ND(), t = TD(), r = hd(), n = _a();
  function o(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return Gc = o, Gc;
}
var Uc, Wh;
function ix() {
  if (Wh) return Uc;
  Wh = 1;
  var e = SD(), t = RD(), r = Pa(), n = Xe(), o = MD();
  function a(i) {
    return typeof i == "function" ? i : i == null ? r : typeof i == "object" ? n(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return Uc = a, Uc;
}
var Kc, Hh;
function AD() {
  if (Hh) return Kc;
  Hh = 1;
  function e(t, r, n, o) {
    for (var a = t.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (r(t[i], i, t))
        return i;
    return -1;
  }
  return Kc = e, Kc;
}
var Yc, Vh;
function OD() {
  if (Vh) return Yc;
  Vh = 1;
  function e(t) {
    return t !== t;
  }
  return Yc = e, Yc;
}
var Xc, zh;
function jD() {
  if (zh) return Xc;
  zh = 1;
  function e(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return Xc = e, Xc;
}
var Qc, Gh;
function DD() {
  if (Gh) return Qc;
  Gh = 1;
  var e = AD(), t = OD(), r = jD();
  function n(o, a, i) {
    return a === a ? r(o, a, i) : e(o, t, i);
  }
  return Qc = n, Qc;
}
var Zc, Uh;
function kD() {
  if (Uh) return Zc;
  Uh = 1;
  var e = DD();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return Zc = t, Zc;
}
var Jc, Kh;
function ID() {
  if (Kh) return Jc;
  Kh = 1;
  function e(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return Jc = e, Jc;
}
var el, Yh;
function LD() {
  if (Yh) return el;
  Yh = 1;
  function e() {
  }
  return el = e, el;
}
var tl, Xh;
function $D() {
  if (Xh) return tl;
  Xh = 1;
  var e = rx(), t = LD(), r = Sd(), n = 1 / 0, o = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return tl = o, tl;
}
var rl, Qh;
function FD() {
  if (Qh) return rl;
  Qh = 1;
  var e = Yb(), t = kD(), r = ID(), n = Xb(), o = $D(), a = Sd(), i = 200;
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
  return rl = s, rl;
}
var nl, Zh;
function qD() {
  if (Zh) return nl;
  Zh = 1;
  var e = ix(), t = FD();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return nl = r, nl;
}
var BD = qD();
const Jh = /* @__PURE__ */ st(BD);
function sx(e, t, r) {
  return t === !0 ? Jh(e, r) : ko(t) ? Jh(e, t) : e;
}
function Er(e) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
var WD = ["ref"];
function ev(e, t) {
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
    t % 2 ? ev(Object(r), !0).forEach(function(n) {
      Ea(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lx(n.key), n);
  }
}
function VD(e, t, r) {
  return t && tv(e.prototype, t), r && tv(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zD(e, t, r) {
  return t = qo(t), GD(e, cx() ? Reflect.construct(t, r || [], qo(e).constructor) : t.apply(e, r));
}
function GD(e, t) {
  if (t && (Er(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UD(e);
}
function UD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cx = function() {
    return !!e;
  })();
}
function qo(e) {
  return qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qo(e);
}
function KD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && su(e, t);
}
function su(e, t) {
  return su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, su(e, t);
}
function Ea(e, t, r) {
  return t = lx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lx(e) {
  var t = YD(e, "string");
  return Er(t) == "symbol" ? t : t + "";
}
function YD(e, t) {
  if (Er(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function XD(e, t) {
  if (e == null) return {};
  var r = QD(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ZD(e) {
  return e.value;
}
function JD(e, t) {
  if (/* @__PURE__ */ Q.isValidElement(e))
    return /* @__PURE__ */ Q.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ Q.createElement(e, t);
  t.ref;
  var r = XD(t, WD);
  return /* @__PURE__ */ Q.createElement(_d, r);
}
var rv = 1, Nd = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    HD(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = zD(this, t, [].concat(o)), Ea(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return KD(t, e), VD(t, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > rv || Math.abs(o.height - this.lastBoundingBox.height) > rv) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      }, JD(a, ht(ht({}, this.props), {}, {
        payload: sx(d, l, ZD)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var a = ht(ht({}, this.defaultProps), n.props), i = a.layout;
      return i === "vertical" && He(n.props.height) ? {
        height: n.props.height
      } : i === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
})(oa);
Ea(Nd, "displayName", "Legend");
Ea(Nd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var ol, nv;
function ek() {
  if (nv) return ol;
  nv = 1;
  var e = In(), t = Cd(), r = Xe(), n = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return ol = o, ol;
}
var al, ov;
function tk() {
  if (ov) return al;
  ov = 1;
  var e = Zb(), t = ek();
  function r(n, o, a, i, s) {
    var c = -1, l = n.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var d = n[c];
      o > 0 && a(d) ? o > 1 ? r(d, o - 1, a, i, s) : e(s, d) : i || (s[s.length] = d);
    }
    return s;
  }
  return al = r, al;
}
var il, av;
function rk() {
  if (av) return il;
  av = 1;
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
  return il = e, il;
}
var sl, iv;
function nk() {
  if (iv) return sl;
  iv = 1;
  var e = rk(), t = e();
  return sl = t, sl;
}
var cl, sv;
function ok() {
  if (sv) return cl;
  sv = 1;
  var e = nk(), t = Rd();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return cl = r, cl;
}
var ll, cv;
function ak() {
  if (cv) return ll;
  cv = 1;
  var e = Ca();
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
  return ll = t, ll;
}
var ul, lv;
function ik() {
  if (lv) return ul;
  lv = 1;
  var e = ok(), t = ak(), r = t(e);
  return ul = r, ul;
}
var dl, uv;
function sk() {
  if (uv) return dl;
  uv = 1;
  var e = ik(), t = Ca();
  function r(n, o) {
    var a = -1, i = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return dl = r, dl;
}
var fl, dv;
function ck() {
  if (dv) return fl;
  dv = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return fl = e, fl;
}
var pl, fv;
function lk() {
  if (fv) return pl;
  fv = 1;
  var e = Ln();
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
  return pl = t, pl;
}
var ml, pv;
function uk() {
  if (pv) return ml;
  pv = 1;
  var e = lk();
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
  return ml = t, ml;
}
var hl, mv;
function dk() {
  if (mv) return hl;
  mv = 1;
  var e = Tb(), t = xd(), r = ix(), n = sk(), o = ck(), a = ex(), i = uk(), s = Pa(), c = Xe();
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
  return hl = l, hl;
}
var vl, hv;
function fk() {
  if (hv) return vl;
  hv = 1;
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
  return vl = e, vl;
}
var gl, vv;
function pk() {
  if (vv) return gl;
  vv = 1;
  var e = fk(), t = Math.max;
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
  return gl = r, gl;
}
var yl, gv;
function mk() {
  if (gv) return yl;
  gv = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return yl = e, yl;
}
var bl, yv;
function hk() {
  if (yv) return bl;
  yv = 1;
  var e = cr(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return bl = t, bl;
}
var xl, bv;
function vk() {
  if (bv) return xl;
  bv = 1;
  var e = mk(), t = hk(), r = Pa(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return xl = n, xl;
}
var wl, xv;
function gk() {
  if (xv) return wl;
  xv = 1;
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
  return wl = n, wl;
}
var _l, wv;
function yk() {
  if (wv) return _l;
  wv = 1;
  var e = vk(), t = gk(), r = t(e);
  return _l = r, _l;
}
var Sl, _v;
function bk() {
  if (_v) return Sl;
  _v = 1;
  var e = Pa(), t = pk(), r = yk();
  function n(o, a) {
    return r(t(o, a, e), o + "");
  }
  return Sl = n, Sl;
}
var Cl, Sv;
function xk() {
  if (Sv) return Cl;
  Sv = 1;
  var e = gd(), t = Ca(), r = Pd(), n = Dt();
  function o(a, i, s) {
    if (!n(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && r(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return Cl = o, Cl;
}
var Pl, Cv;
function wk() {
  if (Cv) return Pl;
  Cv = 1;
  var e = tk(), t = dk(), r = bk(), n = xk(), o = r(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && n(a, i[0], i[1]) ? i = [] : s > 2 && n(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return Pl = o, Pl;
}
var _k = wk();
const Sk = /* @__PURE__ */ st(_k);
function mn(e) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function cu() {
  return cu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cu.apply(this, arguments);
}
function Ck(e, t) {
  return Nk(e) || Rk(e, t) || Ek(e, t) || Pk();
}
function Pk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ek(e, t) {
  if (e) {
    if (typeof e == "string") return Pv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pv(e, t);
  }
}
function Pv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rk(e, t) {
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
function Nk(e) {
  if (Array.isArray(e)) return e;
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
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ev(Object(r), !0).forEach(function(n) {
      Tk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tk(e, t, r) {
  return t = Mk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mk(e) {
  var t = Ak(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function Ak(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ok(e) {
  return Array.isArray(e) && Io(e[0]) && Io(e[1]) ? e.join(" ~ ") : e;
}
var jk = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, d = t.payload, p = t.formatter, m = t.itemSorter, g = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, x = b === void 0 ? !1 : b, w = function() {
    if (d && d.length) {
      var V = {
        padding: 0,
        margin: 0
      }, q = (m ? Sk(d, m) : d).map(function(M, $) {
        if (M.type === "none")
          return null;
        var F = El({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: M.color || "#000"
        }, s), D = M.formatter || p || Ok, N = M.value, W = M.name, O = N, z = W;
        if (D && O != null && z != null) {
          var A = D(N, W, M, $, d);
          if (Array.isArray(A)) {
            var B = Ck(A, 2);
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
          }, Io(z) ? /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, z) : null, Io(z) ? /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, O), /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, M.unit || ""))
        );
      });
      return /* @__PURE__ */ Q.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: V
      }, q);
    }
    return null;
  }, _ = El({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), S = El({
    margin: 0
  }, l), C = !MO(h), P = C ? h : "", E = vt("recharts-default-tooltip", g), R = vt("recharts-tooltip-label", y);
  C && v && d !== void 0 && d !== null && (P = v(h, d));
  var I = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ Q.createElement("div", cu({
    className: E,
    style: _
  }, I), /* @__PURE__ */ Q.createElement("p", {
    className: R,
    style: S
  }, /* @__PURE__ */ Q.isValidElement(P) ? P : "".concat(P)), w());
};
function hn(e) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function go(e, t, r) {
  return t = Dk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Dk(e) {
  var t = kk(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function kk(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yr = "recharts-tooltip-wrapper", Ik = {
  visibility: "hidden"
};
function Lk(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return vt(Yr, go(go(go(go({}, "".concat(Yr, "-right"), He(r) && t && He(t.x) && r >= t.x), "".concat(Yr, "-left"), He(r) && t && He(t.x) && r < t.x), "".concat(Yr, "-bottom"), He(n) && t && He(t.y) && n >= t.y), "".concat(Yr, "-top"), He(n) && t && He(t.y) && n < t.y));
}
function Rv(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && He(a[n]))
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
function $k(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function Fk(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, d, p;
  return i.height > 0 && i.width > 0 && r ? (d = Rv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = Rv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = $k({
    translateX: d,
    translateY: p,
    useTranslate3d: s
  })) : l = Ik, {
    cssProperties: l,
    cssClasses: Lk({
      translateX: d,
      translateY: p,
      coordinate: r
    })
  };
}
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function Nv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nv(Object(r), !0).forEach(function(n) {
      uu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dx(n.key), n);
  }
}
function Wk(e, t, r) {
  return t && Bk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Hk(e, t, r) {
  return t = Bo(t), Vk(e, ux() ? Reflect.construct(t, r || [], Bo(e).constructor) : t.apply(e, r));
}
function Vk(e, t) {
  if (t && (Rr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zk(e);
}
function zk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ux() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ux = function() {
    return !!e;
  })();
}
function Bo(e) {
  return Bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bo(e);
}
function Gk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lu(e, t);
}
function lu(e, t) {
  return lu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, lu(e, t);
}
function uu(e, t, r) {
  return t = dx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dx(e) {
  var t = Uk(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function Uk(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Mv = 1, Kk = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    qk(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = Hk(this, t, [].concat(o)), uu(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), uu(r, "handleKeyDown", function(i) {
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
  return Gk(t, e), Wk(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Mv || Math.abs(n.height - this.state.lastBoundingBox.height) > Mv) && this.setState({
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
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, d = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, g = o.offset, y = o.position, h = o.reverseDirection, v = o.useTranslate3d, b = o.viewBox, x = o.wrapperStyle, w = Fk({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: g,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), _ = w.cssClasses, S = w.cssProperties, C = Tv(Tv({
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
})(oa), Yk = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Xk = {
  isSsr: Yk()
};
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function Av(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ov(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Av(Object(r), !0).forEach(function(n) {
      Td(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Av(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, px(n.key), n);
  }
}
function Jk(e, t, r) {
  return t && Zk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eI(e, t, r) {
  return t = Wo(t), tI(e, fx() ? Reflect.construct(t, r || [], Wo(e).constructor) : t.apply(e, r));
}
function tI(e, t) {
  if (t && (Nr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rI(e);
}
function rI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fx = function() {
    return !!e;
  })();
}
function Wo(e) {
  return Wo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wo(e);
}
function nI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && du(e, t);
}
function du(e, t) {
  return du = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, du(e, t);
}
function Td(e, t, r) {
  return t = px(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function px(e) {
  var t = oI(e, "string");
  return Nr(t) == "symbol" ? t : t + "";
}
function oI(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function aI(e) {
  return e.dataKey;
}
function iI(e, t) {
  return /* @__PURE__ */ Q.isValidElement(e) ? /* @__PURE__ */ Q.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ Q.createElement(e, t) : /* @__PURE__ */ Q.createElement(jk, t);
}
var Md = /* @__PURE__ */ (function(e) {
  function t() {
    return Qk(this, t), eI(this, t, arguments);
  }
  return nI(t, e), Jk(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, d = o.coordinate, p = o.filterNull, m = o.isAnimationActive, g = o.offset, y = o.payload, h = o.payloadUniqBy, v = o.position, b = o.reverseDirection, x = o.useTranslate3d, w = o.viewBox, _ = o.wrapperStyle, S = y ?? [];
      p && S.length && (S = sx(y.filter(function(P) {
        return P.value != null && (P.hide !== !0 || n.props.includeHidden);
      }), h, aI));
      var C = S.length > 0;
      return /* @__PURE__ */ Q.createElement(Kk, {
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
      }, iI(l, Ov(Ov({}, this.props), {}, {
        payload: S
      })));
    }
  }]);
})(oa);
Td(Md, "displayName", "Tooltip");
Td(Md, "defaultProps", {
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
  isAnimationActive: !Xk.isSsr,
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
var Rl, jv;
function sI() {
  if (jv) return Rl;
  jv = 1;
  var e = ut(), t = function() {
    return e.Date.now();
  };
  return Rl = t, Rl;
}
var Nl, Dv;
function cI() {
  if (Dv) return Nl;
  Dv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Nl = t, Nl;
}
var Tl, kv;
function lI() {
  if (kv) return Tl;
  kv = 1;
  var e = cI(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Tl = r, Tl;
}
var Ml, Iv;
function uI() {
  if (Iv) return Ml;
  Iv = 1;
  var e = lI(), t = Dt(), r = Ln(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
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
  return Ml = c, Ml;
}
var Al, Lv;
function dI() {
  if (Lv) return Al;
  Lv = 1;
  var e = Dt(), t = sI(), r = uI(), n = "Expected a function", o = Math.max, a = Math.min;
  function i(s, c, l) {
    var d, p, m, g, y, h, v = 0, b = !1, x = !1, w = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(l) && (b = !!l.leading, x = "maxWait" in l, m = x ? o(r(l.maxWait) || 0, c) : m, w = "trailing" in l ? !!l.trailing : w);
    function _(q) {
      var M = d, $ = p;
      return d = p = void 0, v = q, g = s.apply($, M), g;
    }
    function S(q) {
      return v = q, y = setTimeout(E, c), b ? _(q) : g;
    }
    function C(q) {
      var M = q - h, $ = q - v, F = c - M;
      return x ? a(F, m - $) : F;
    }
    function P(q) {
      var M = q - h, $ = q - v;
      return h === void 0 || M >= c || M < 0 || x && $ >= m;
    }
    function E() {
      var q = t();
      if (P(q))
        return R(q);
      y = setTimeout(E, C(q));
    }
    function R(q) {
      return y = void 0, w && d ? _(q) : (d = p = void 0, g);
    }
    function I() {
      y !== void 0 && clearTimeout(y), v = 0, d = h = p = y = void 0;
    }
    function j() {
      return y === void 0 ? g : R(t());
    }
    function V() {
      var q = t(), M = P(q);
      if (d = arguments, p = this, h = q, M) {
        if (y === void 0)
          return S(h);
        if (x)
          return clearTimeout(y), y = setTimeout(E, c), _(h);
      }
      return y === void 0 && (y = setTimeout(E, c)), g;
    }
    return V.cancel = I, V.flush = j, V;
  }
  return Al = i, Al;
}
var Ol, $v;
function fI() {
  if ($v) return Ol;
  $v = 1;
  var e = dI(), t = Dt(), r = "Expected a function";
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
  return Ol = n, Ol;
}
var pI = fI();
const mI = /* @__PURE__ */ st(pI);
function vn(e) {
  "@babel/helpers - typeof";
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vn(e);
}
function Fv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fv(Object(r), !0).forEach(function(n) {
      hI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hI(e, t, r) {
  return t = vI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vI(e) {
  var t = gI(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function gI(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yI(e, t) {
  return _I(e) || wI(e, t) || xI(e, t) || bI();
}
function bI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xI(e, t) {
  if (e) {
    if (typeof e == "string") return qv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qv(e, t);
  }
}
function qv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wI(e, t) {
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
function _I(e) {
  if (Array.isArray(e)) return e;
}
var SI = /* @__PURE__ */ na(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, d = l === void 0 ? 0 : l, p = e.minHeight, m = e.maxHeight, g = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, x = e.onResize, w = e.style, _ = w === void 0 ? {} : w, S = Sr(null), C = Sr();
  C.current = x, $u(t, function() {
    return Object.defineProperty(S.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), S.current;
      },
      configurable: !0
    });
  });
  var P = Ne({
    containerWidth: o.width,
    containerHeight: o.height
  }), E = yI(P, 2), R = E[0], I = E[1], j = Lu(function(q, M) {
    I(function($) {
      var F = Math.round(q), D = Math.round(M);
      return $.containerWidth === F && $.containerHeight === D ? $ : {
        containerWidth: F,
        containerHeight: D
      };
    });
  }, []);
  je(function() {
    var q = function(W) {
      var O, z = W[0].contentRect, A = z.width, B = z.height;
      j(A, B), (O = C.current) === null || O === void 0 || O.call(C, A, B);
    };
    h > 0 && (q = mI(q, h, {
      trailing: !0,
      leading: !1
    }));
    var M = new ResizeObserver(q), $ = S.current.getBoundingClientRect(), F = $.width, D = $.height;
    return j(F, D), M.observe(S.current), function() {
      M.disconnect();
    };
  }, [j, h]);
  var V = L0(function() {
    var q = R.containerWidth, M = R.containerHeight;
    if (q < 0 || M < 0)
      return null;
    Co(ho(i) || ho(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), Co(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var $ = ho(i) ? q : i, F = ho(c) ? M : c;
    r && r > 0 && ($ ? F = $ / r : F && ($ = F * r), m && F > m && (F = m)), Co($ > 0 || F > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, $, F, i, c, d, p, r);
    var D = !Array.isArray(g) && UO(g.type).endsWith("Chart");
    return Q.Children.map(g, function(N) {
      return /* @__PURE__ */ Q.isValidElement(N) ? /* @__PURE__ */ $0(N, yo({
        width: $,
        height: F
      }, D ? {
        style: yo({
          height: "100%",
          width: "100%",
          maxHeight: F,
          maxWidth: $
        }, N.props.style)
      } : {})) : N;
    });
  }, [r, g, c, m, p, d, R, i]);
  return /* @__PURE__ */ Q.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: vt("recharts-responsive-container", b),
    style: yo(yo({}, _), {}, {
      width: i,
      height: c,
      minWidth: d,
      minHeight: p,
      maxHeight: m
    }),
    ref: S
  }, V);
});
const CI = { light: "", dark: ".dark" }, mx = f.createContext(null);
function hx() {
  const e = f.useContext(mx);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const PI = f.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = f.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ u.jsx(mx.Provider, { value: { config: n }, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: T(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ u.jsx(EI, { id: s, config: n }),
        /* @__PURE__ */ u.jsx(SI, { children: r })
      ]
    }
  ) });
});
PI.displayName = "Chart";
const EI = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ u.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(CI).map(
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
}, f4 = Md, RI = f.forwardRef(
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
    const { config: y } = hx(), h = f.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [b] = t;
      if (!b)
        return null;
      const x = `${m || b.dataKey || b.name || "value"}`, w = fu(y, b, x), _ = !m && typeof i == "string" ? y[i]?.label || i : w?.label;
      return s ? /* @__PURE__ */ u.jsx("div", { className: T("font-medium", c), children: s(_, t) }) : _ ? /* @__PURE__ */ u.jsx("div", { className: T("font-medium", c), children: _ }) : null;
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
        className: T(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          v ? null : h,
          /* @__PURE__ */ u.jsx("div", { className: "grid gap-1.5", children: t.map((b, x) => {
            if (!b)
              return null;
            const w = `${p || b.dataKey || b.name || "value"}`, _ = fu(y, b, w), S = d || b.payload.fill || b.color;
            return /* @__PURE__ */ u.jsx(
              "div",
              {
                className: T(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: l && b?.value !== void 0 && b.name ? l(b.value, b.name, b, x, b.payload) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  _?.icon ? /* @__PURE__ */ u.jsx(_.icon, {}) : !a && /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      className: T(
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
                      className: T(
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
RI.displayName = "ChartTooltip";
const p4 = Nd, NI = f.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
    const { config: i } = hx();
    return r?.length ? /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: a,
        className: T(
          "flex items-center justify-center gap-4",
          n === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((s) => {
          if (!s)
            return null;
          const c = `${o || s.dataKey || "value"}`, l = fu(i, s, c);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: T(
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
NI.displayName = "ChartLegend";
function fu(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
function $n(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Ra(e) {
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
var Na = "Checkbox", [TI, m4] = be(Na), [MI, Ad] = TI(Na);
function AI(e) {
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
    caller: Na
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
    MI,
    {
      scope: t,
      ..._,
      children: OI(p) ? p(_) : n
    }
  );
}
var vx = "CheckboxTrigger", gx = f.forwardRef(
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
    } = Ad(vx, e), h = ne(o, d), v = f.useRef(c);
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
        "data-state": _x(c),
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
gx.displayName = vx;
var Od = f.forwardRef(
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
      AI,
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
            gx,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ u.jsx(
            wx,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Od.displayName = Na;
var yx = "CheckboxIndicator", bx = f.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = Ad(yx, r);
    return /* @__PURE__ */ u.jsx(
      he,
      {
        present: n || Et(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          H.span,
          {
            "data-state": _x(a.checked),
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
bx.displayName = yx;
var xx = "CheckboxBubbleInput", wx = f.forwardRef(
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
    } = Ad(xx, e), y = ne(r, g), h = $n(a), v = Ra(n);
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
wx.displayName = xx;
function OI(e) {
  return typeof e == "function";
}
function Et(e) {
  return e === "indeterminate";
}
function _x(e) {
  return Et(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const jI = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Od,
  {
    ref: r,
    className: T(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(
      bx,
      {
        className: T("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u.jsx(Kt, { className: "size-4 h-full" })
      }
    )
  }
));
jI.displayName = Od.displayName;
function h4({
  name: e,
  label: t,
  options: r,
  placeholder: n = "Selecione uma opção",
  searchPlaceholder: o = "Buscar...",
  emptyMessage: a = "Nenhum resultado encontrado.",
  isDisabled: i = !1,
  isLoading: s = !1
}) {
  const { control: c, setValue: l } = Pn();
  return /* @__PURE__ */ u.jsx(
    Ga,
    {
      control: c,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ u.jsxs(Zn, { children: [
        /* @__PURE__ */ u.jsx(
          DI,
          {
            label: t,
            placeholder: n,
            searchPlaceholder: o,
            emptyMessage: a,
            options: r,
            selected: d.value,
            onSelect: (p) => l(e, p, { shouldValidate: !0 }),
            isDisabled: i,
            isLoading: s
          }
        ),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
}
function DI({
  label: e,
  options: t,
  selected: r,
  onSelect: n,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: a = "Buscar...",
  emptyMessage: i = "Nenhum resultado encontrado.",
  error: s,
  isDisabled: c = !1,
  isLoading: l = !1
}) {
  const [d, p] = Ne(!1);
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ u.jsx(za, { children: e }),
    /* @__PURE__ */ u.jsxs(Gn, { open: d, onOpenChange: p, children: [
      /* @__PURE__ */ u.jsx(Un, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
        jt,
        {
          variant: "outline",
          disabled: t.length === 0 || c,
          className: T(
            "relative w-full justify-between",
            !r && "text-muted-foreground"
          ),
          children: [
            r ? t.find((m) => m.value === r)?.label : o,
            /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
              l && /* @__PURE__ */ u.jsx(sn, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ u.jsx(Ig, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsx(Hr, { className: "min-w-[var(--radix-popover-trigger-width)] p-0", children: /* @__PURE__ */ u.jsxs(qn, { children: [
        /* @__PURE__ */ u.jsx(Ma, { placeholder: a }),
        /* @__PURE__ */ u.jsxs(Aa, { children: [
          /* @__PURE__ */ u.jsx(Oa, { children: i }),
          /* @__PURE__ */ u.jsx(Bn, { children: t.map((m) => /* @__PURE__ */ u.jsxs(
            Ut,
            {
              value: m.label,
              onSelect: () => {
                r === m.value ? n(void 0) : n(m.value), p(!1);
              },
              children: [
                /* @__PURE__ */ u.jsx(
                  Kt,
                  {
                    className: T(
                      "mr-2 size-4",
                      r === m.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                m.label
              ]
            },
            m.value
          )) })
        ] })
      ] }) })
    ] }),
    !!s && /* @__PURE__ */ u.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: s })
  ] });
}
var Bv = 1, kI = 0.9, II = 0.8, LI = 0.17, jl = 0.1, Dl = 0.999, $I = 0.9999, FI = 0.99, qI = /[\\\/_+.#"@\[\(\{&]/, BI = /[\\\/_+.#"@\[\(\{&]/g, WI = /[\s-]/, Sx = /[\s-]/g;
function pu(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? Bv : FI;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), l = r.indexOf(c, o), d = 0, p, m, g, y; l >= 0; ) p = pu(e, t, r, n, l + 1, a + 1, i), p > d && (l === o ? p *= Bv : qI.test(e.charAt(l - 1)) ? (p *= II, g = e.slice(o, l - 1).match(BI), g && o > 0 && (p *= Math.pow(Dl, g.length))) : WI.test(e.charAt(l - 1)) ? (p *= kI, y = e.slice(o, l - 1).match(Sx), y && o > 0 && (p *= Math.pow(Dl, y.length))) : (p *= LI, o > 0 && (p *= Math.pow(Dl, l - o))), e.charAt(l) !== t.charAt(a) && (p *= $I)), (p < jl && r.charAt(l - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a)) && (m = pu(e, t, r, n, l + 1, a + 2, i), m * jl > p && (p = m * jl)), p > d && (d = p), l = r.indexOf(c, l + 1);
  return i[s] = d, d;
}
function Wv(e) {
  return e.toLowerCase().replace(Sx, " ");
}
function HI(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, pu(e, t, Wv(e), Wv(t), 0, 0, {});
}
var Xr = '[cmdk-group=""]', kl = '[cmdk-group-items=""]', VI = '[cmdk-group-heading=""]', Cx = '[cmdk-item=""]', Hv = `${Cx}:not([aria-disabled="true"])`, mu = "cmdk-item-select", gr = "data-value", zI = (e, t, r) => HI(e, t, r), Px = f.createContext(void 0), Fn = () => f.useContext(Px), Ex = f.createContext(void 0), jd = () => f.useContext(Ex), Rx = f.createContext(void 0), Nx = f.forwardRef((e, t) => {
  let r = yr(() => {
    var A, B;
    return { search: "", value: (B = (A = e.value) != null ? A : e.defaultValue) != null ? B : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = yr(() => /* @__PURE__ */ new Set()), o = yr(() => /* @__PURE__ */ new Map()), a = yr(() => /* @__PURE__ */ new Map()), i = yr(() => /* @__PURE__ */ new Set()), s = Tx(e), { label: c, children: l, value: d, onValueChange: p, filter: m, shouldFilter: g, loop: y, disablePointerSelection: h = !1, vimBindings: v = !0, ...b } = e, x = ve(), w = ve(), _ = ve(), S = f.useRef(null), C = rL();
  Zt(() => {
    if (d !== void 0) {
      let A = d.trim();
      r.current.value = A, P.emit();
    }
  }, [d]), Zt(() => {
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
          r.current.selectedItemId = (re = M()) == null ? void 0 : re.id, P.emit();
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
    B !== ((G = a.current.get(A)) == null ? void 0 : G.value) && (a.current.set(A, { value: B, keywords: K }), r.current.filtered.items.set(A, R(B, K)), C(2, () => {
      I(), P.emit();
    }));
  }, item: (A, B) => (n.current.add(A), B && (o.current.has(B) ? o.current.get(B).add(A) : o.current.set(B, /* @__PURE__ */ new Set([A]))), C(3, () => {
    V(), I(), r.current.value || j(), P.emit();
  }), () => {
    a.current.delete(A), n.current.delete(A), r.current.filtered.items.delete(A);
    let K = M();
    C(4, () => {
      V(), K?.getAttribute("id") === A && j(), P.emit();
    });
  }), group: (A) => (o.current.has(A) || o.current.set(A, /* @__PURE__ */ new Set()), () => {
    a.current.delete(A), o.current.delete(A);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: x, inputId: _, labelId: w, listInnerRef: S }), []);
  function R(A, B) {
    var K, G;
    let ee = (G = (K = s.current) == null ? void 0 : K.filter) != null ? G : zI;
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
      let ee = G.closest(kl);
      ee ? ee.appendChild(G.parentElement === ee ? G : G.closest(`${kl} > *`)) : K.appendChild(G.parentElement === K ? G : G.closest(`${kl} > *`));
    }), B.sort((G, ee) => ee[1] - G[1]).forEach((G) => {
      var ee;
      let k = (ee = S.current) == null ? void 0 : ee.querySelector(`${Xr}[${gr}="${encodeURIComponent(G[0])}"]`);
      k?.parentElement.appendChild(k);
    });
  }
  function j() {
    let A = $().find((K) => K.getAttribute("aria-disabled") !== "true"), B = A?.getAttribute(gr);
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
      let X = (B = (A = a.current.get(k)) == null ? void 0 : A.value) != null ? B : "", re = (G = (K = a.current.get(k)) == null ? void 0 : K.keywords) != null ? G : [], oe = R(X, re);
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
    let G = M();
    G && (((A = G.parentElement) == null ? void 0 : A.firstChild) === G && ((K = (B = G.closest(Xr)) == null ? void 0 : B.querySelector(VI)) == null || K.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function M() {
    var A;
    return (A = S.current) == null ? void 0 : A.querySelector(`${Cx}[aria-selected="true"]`);
  }
  function $() {
    var A;
    return Array.from(((A = S.current) == null ? void 0 : A.querySelectorAll(Hv)) || []);
  }
  function F(A) {
    let B = $()[A];
    B && P.setState("value", B.getAttribute(gr));
  }
  function D(A) {
    var B;
    let K = M(), G = $(), ee = G.findIndex((X) => X === K), k = G[ee + A];
    (B = s.current) != null && B.loop && (k = ee + A < 0 ? G[G.length - 1] : ee + A === G.length ? G[0] : G[ee + A]), k && P.setState("value", k.getAttribute(gr));
  }
  function N(A) {
    let B = M(), K = B?.closest(Xr), G;
    for (; K && !G; ) K = A > 0 ? eL(K, Xr) : tL(K, Xr), G = K?.querySelector(Hv);
    G ? P.setState("value", G.getAttribute(gr)) : D(A);
  }
  let W = () => F($().length - 1), O = (A) => {
    A.preventDefault(), A.metaKey ? W() : A.altKey ? N(1) : D(1);
  }, z = (A) => {
    A.preventDefault(), A.metaKey ? F(0) : A.altKey ? N(-1) : D(-1);
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
        let G = M();
        if (G) {
          let ee = new Event(mu);
          G.dispatchEvent(ee);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: oL }, c), Ta(e, (A) => f.createElement(Ex.Provider, { value: P }, f.createElement(Px.Provider, { value: E }, A))));
}), GI = f.forwardRef((e, t) => {
  var r, n;
  let o = ve(), a = f.useRef(null), i = f.useContext(Rx), s = Fn(), c = Tx(e), l = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i?.forceMount;
  Zt(() => {
    if (!l) return s.item(o, i?.id);
  }, [l]);
  let d = Mx(o, a, [e.value, e.children, a], e.keywords), p = jd(), m = Tt((C) => C.value && C.value === d.current), g = Tt((C) => l || s.filter() === !1 ? !0 : C.search ? C.filtered.items.get(o) > 0 : !0);
  f.useEffect(() => {
    let C = a.current;
    if (!(!C || e.disabled)) return C.addEventListener(mu, y), () => C.removeEventListener(mu, y);
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
}), UI = f.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = ve(), s = f.useRef(null), c = f.useRef(null), l = ve(), d = Fn(), p = Tt((g) => o || d.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  Zt(() => d.group(i), []), Mx(i, s, [e.value, e.heading, c]);
  let m = f.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return f.createElement(H.div, { ref: ot(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && f.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), Ta(e, (g) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, f.createElement(Rx.Provider, { value: m }, g))));
}), KI = f.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = f.useRef(null), a = Tt((i) => !i.search);
  return !r && !a ? null : f.createElement(H.div, { ref: ot(o, t), ...n, "cmdk-separator": "", role: "separator" });
}), YI = f.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = jd(), i = Tt((l) => l.search), s = Tt((l) => l.selectedItemId), c = Fn();
  return f.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), f.createElement(H.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": s, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (l) => {
    o || a.setState("search", l.target.value), r?.(l.target.value);
  } });
}), XI = f.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = f.useRef(null), i = f.useRef(null), s = Tt((l) => l.selectedItemId), c = Fn();
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
  }, []), f.createElement(H.div, { ref: ot(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": n, id: c.listId }, Ta(e, (l) => f.createElement("div", { ref: ot(i, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), QI = f.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return f.createElement(pa, { open: r, onOpenChange: n }, f.createElement(ma, { container: i }, f.createElement(Lr, { "cmdk-overlay": "", className: o }), f.createElement($r, { "aria-label": e.label, "cmdk-dialog": "", className: a }, f.createElement(Nx, { ref: t, ...s }))));
}), ZI = f.forwardRef((e, t) => Tt((r) => r.filtered.count === 0) ? f.createElement(H.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), JI = f.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return f.createElement(H.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Ta(e, (i) => f.createElement("div", { "aria-hidden": !0 }, i)));
}), Ae = Object.assign(Nx, { List: XI, Item: GI, Input: YI, Group: UI, Separator: KI, Dialog: QI, Empty: ZI, Loading: JI });
function eL(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function tL(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function Tx(e) {
  let t = f.useRef(e);
  return Zt(() => {
    t.current = e;
  }), t;
}
var Zt = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function yr(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Tt(e) {
  let t = jd(), r = () => e(t.snapshot());
  return f.useSyncExternalStore(t.subscribe, r, r);
}
function Mx(e, t, r, n = []) {
  let o = f.useRef(), a = Fn();
  return Zt(() => {
    var i;
    let s = (() => {
      var l;
      for (let d of r) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (l = d.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = n.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(gr, s), o.current = s;
  }), o;
}
var rL = () => {
  let [e, t] = f.useState(), r = yr(() => /* @__PURE__ */ new Map());
  return Zt(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function nL(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ta({ asChild: e, children: t }, r) {
  return e && f.isValidElement(t) ? f.cloneElement(nL(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var oL = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const qn = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae,
  {
    ref: r,
    className: T(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
qn.displayName = Ae.displayName;
const v4 = ({ children: e, ...t }) => /* @__PURE__ */ u.jsx(Z$, { ...t, children: /* @__PURE__ */ u.jsx(gw, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ u.jsx(qn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Ma = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ u.jsx(YP, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ u.jsx(
    Ae.Input,
    {
      ref: r,
      className: T(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
Ma.displayName = Ae.Input.displayName;
const Aa = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.List,
  {
    ref: r,
    className: T("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Aa.displayName = Ae.List.displayName;
const Oa = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  Ae.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Oa.displayName = Ae.Empty.displayName;
const Bn = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.Group,
  {
    ref: r,
    className: T(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Bn.displayName = Ae.Group.displayName;
const Ax = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.Separator,
  {
    ref: r,
    className: T("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ax.displayName = Ae.Separator.displayName;
const Ut = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.Item,
  {
    ref: r,
    className: T(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Ut.displayName = Ae.Item.displayName;
const aL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
aL.displayName = "CommandShortcut";
const iL = ["top", "right", "bottom", "left"], Mt = Math.min, Oe = Math.max, Ho = Math.round, bo = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), sL = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cL = {
  start: "end",
  end: "start"
};
function hu(e, t, r) {
  return Oe(e, Mt(t, r));
}
function yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function Br(e) {
  return e.split("-")[1];
}
function Dd(e) {
  return e === "x" ? "y" : "x";
}
function kd(e) {
  return e === "y" ? "height" : "width";
}
const lL = /* @__PURE__ */ new Set(["top", "bottom"]);
function rt(e) {
  return lL.has(bt(e)) ? "y" : "x";
}
function Id(e) {
  return Dd(rt(e));
}
function uL(e, t, r) {
  r === void 0 && (r = !1);
  const n = Br(e), o = Id(e), a = kd(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Vo(i)), [i, Vo(i)];
}
function dL(e) {
  const t = Vo(e);
  return [vu(e), t, vu(t)];
}
function vu(e) {
  return e.replace(/start|end/g, (t) => cL[t]);
}
const Vv = ["left", "right"], zv = ["right", "left"], fL = ["top", "bottom"], pL = ["bottom", "top"];
function mL(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? zv : Vv : t ? Vv : zv;
    case "left":
    case "right":
      return t ? fL : pL;
    default:
      return [];
  }
}
function hL(e, t, r, n) {
  const o = Br(e);
  let a = mL(bt(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(vu)))), a;
}
function Vo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sL[t]);
}
function vL(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ox(e) {
  return typeof e != "number" ? vL(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zo(e) {
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
function Gv(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = rt(t), i = Id(t), s = kd(i), c = bt(t), l = a === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
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
  switch (Br(t)) {
    case "start":
      g[i] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      g[i] += m * (r && l ? -1 : 1);
      break;
  }
  return g;
}
const gL = async (e, t, r) => {
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
  } = Gv(l, n, c), m = n, g = {}, y = 0;
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
    } = Gv(l, m, c)), h = -1);
  }
  return {
    x: d,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function gn(e, t) {
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
  } = yt(t, e), y = Ox(g), v = s[m ? p === "floating" ? "reference" : "floating" : p], b = zo(await a.getClippingRect({
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
  }, S = zo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const yL = (e) => ({
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
    const p = Ox(d), m = {
      x: r,
      y: n
    }, g = Id(o), y = kd(g), h = await i.getDimensions(l), v = g === "y", b = v ? "top" : "left", x = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", _ = a.reference[y] + a.reference[g] - m[g] - a.floating[y], S = m[g] - a.reference[g], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let P = C ? C[w] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(C))) && (P = s.floating[w] || a.floating[y]);
    const E = _ / 2 - S / 2, R = P / 2 - h[y] / 2 - 1, I = Mt(p[b], R), j = Mt(p[x], R), V = I, q = P - h[y] - j, M = P / 2 - h[y] / 2 + E, $ = hu(V, M, q), F = !c.arrow && Br(o) != null && M !== $ && a.reference[y] / 2 - (M < V ? I : j) - h[y] / 2 < 0, D = F ? M < V ? M - V : M - q : 0;
    return {
      [g]: m[g] + D,
      data: {
        [g]: $,
        centerOffset: M - $ - D,
        ...F && {
          alignmentOffset: D
        }
      },
      reset: F
    };
  }
}), bL = function(e) {
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
      const b = bt(o), x = rt(s), w = bt(s) === s, _ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = m || (w || !h ? [Vo(s)] : dL(s)), C = y !== "none";
      !m && C && S.push(...hL(s, h, y, _));
      const P = [s, ...S], E = await gn(t, v), R = [];
      let I = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && R.push(E[b]), p) {
        const M = uL(o, i, _);
        R.push(E[M[0]], E[M[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: R
      }], !R.every((M) => M <= 0)) {
        var j, V;
        const M = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, $ = P[M];
        if ($ && (!(p === "alignment" ? x !== rt($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((N) => rt(N.placement) === x ? N.overflows[0] > 0 : !0)))
          return {
            data: {
              index: M,
              overflows: I
            },
            reset: {
              placement: $
            }
          };
        let F = (V = I.filter((D) => D.overflows[0] <= 0).sort((D, N) => D.overflows[1] - N.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!F)
          switch (g) {
            case "bestFit": {
              var q;
              const D = (q = I.filter((N) => {
                if (C) {
                  const W = rt(N.placement);
                  return W === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((W) => W > 0).reduce((W, O) => W + O, 0)]).sort((N, W) => N[1] - W[1])[0]) == null ? void 0 : q[0];
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
function Uv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Kv(e) {
  return iL.some((t) => e[t] >= 0);
}
const xL = function(e) {
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
          const a = await gn(t, {
            ...o,
            elementContext: "reference"
          }), i = Uv(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Kv(i)
            }
          };
        }
        case "escaped": {
          const a = await gn(t, {
            ...o,
            altBoundary: !0
          }), i = Uv(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Kv(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, jx = /* @__PURE__ */ new Set(["left", "top"]);
async function wL(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = bt(r), s = Br(r), c = rt(r) === "y", l = jx.has(i) ? -1 : 1, d = a && c ? -1 : 1, p = yt(t, e);
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
const _L = function(e) {
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
      } = t, c = await wL(t, e);
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
}, SL = function(e) {
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
      }, d = await gn(t, c), p = rt(bt(o)), m = Dd(p);
      let g = l[m], y = l[p];
      if (a) {
        const v = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", x = g + d[v], w = g - d[b];
        g = hu(x, g, w);
      }
      if (i) {
        const v = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = y + d[v], w = y - d[b];
        y = hu(x, y, w);
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
}, CL = function(e) {
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
      }, p = rt(o), m = Dd(p);
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
        const w = m === "y" ? "width" : "height", _ = jx.has(bt(o)), S = a.reference[p] - a.floating[w] + (_ && ((b = i.offset) == null ? void 0 : b[p]) || 0) + (_ ? 0 : v.crossAxis), C = a.reference[p] + a.reference[w] + (_ ? 0 : ((x = i.offset) == null ? void 0 : x[p]) || 0) - (_ ? v.crossAxis : 0);
        y < S ? y = S : y > C && (y = C);
      }
      return {
        [m]: g,
        [p]: y
      };
    }
  };
}, PL = function(e) {
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
      } = yt(e, t), d = await gn(t, l), p = bt(o), m = Br(o), g = rt(o) === "y", {
        width: y,
        height: h
      } = a.floating;
      let v, b;
      p === "top" || p === "bottom" ? (v = p, b = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, v = m === "end" ? "top" : "bottom");
      const x = h - d.top - d.bottom, w = y - d.left - d.right, _ = Mt(h - d[v], x), S = Mt(y - d[b], w), C = !t.middlewareData.shift;
      let P = _, E = S;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (E = w), (n = t.middlewareData.shift) != null && n.enabled.y && (P = x), C && !m) {
        const I = Oe(d.left, 0), j = Oe(d.right, 0), V = Oe(d.top, 0), q = Oe(d.bottom, 0);
        g ? E = y - 2 * (I !== 0 || j !== 0 ? I + j : Oe(d.left, d.right)) : P = h - 2 * (V !== 0 || q !== 0 ? V + q : Oe(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: P
      });
      const R = await i.getDimensions(s.floating);
      return y !== R.width || h !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ja() {
  return typeof window < "u";
}
function Wr(e) {
  return Dx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function De(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function dt(e) {
  var t;
  return (t = (Dx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Dx(e) {
  return ja() ? e instanceof Node || e instanceof De(e).Node : !1;
}
function Ge(e) {
  return ja() ? e instanceof Element || e instanceof De(e).Element : !1;
}
function it(e) {
  return ja() ? e instanceof HTMLElement || e instanceof De(e).HTMLElement : !1;
}
function Yv(e) {
  return !ja() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof De(e).ShadowRoot;
}
const EL = /* @__PURE__ */ new Set(["inline", "contents"]);
function Wn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !EL.has(o);
}
const RL = /* @__PURE__ */ new Set(["table", "td", "th"]);
function NL(e) {
  return RL.has(Wr(e));
}
const TL = [":popover-open", ":modal"];
function Da(e) {
  return TL.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const ML = ["transform", "translate", "scale", "rotate", "perspective"], AL = ["transform", "translate", "scale", "rotate", "perspective", "filter"], OL = ["paint", "layout", "strict", "content"];
function Ld(e) {
  const t = $d(), r = Ge(e) ? Ue(e) : e;
  return ML.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || AL.some((n) => (r.willChange || "").includes(n)) || OL.some((n) => (r.contain || "").includes(n));
}
function jL(e) {
  let t = At(e);
  for (; it(t) && !Tr(t); ) {
    if (Ld(t))
      return t;
    if (Da(t))
      return null;
    t = At(t);
  }
  return null;
}
function $d() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const DL = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Tr(e) {
  return DL.has(Wr(e));
}
function Ue(e) {
  return De(e).getComputedStyle(e);
}
function ka(e) {
  return Ge(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function At(e) {
  if (Wr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yv(e) && e.host || // Fallback.
    dt(e)
  );
  return Yv(t) ? t.host : t;
}
function kx(e) {
  const t = At(e);
  return Tr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : it(t) && Wn(t) ? t : kx(t);
}
function yn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = kx(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = De(o);
  if (a) {
    const s = gu(i);
    return t.concat(i, i.visualViewport || [], Wn(o) ? o : [], s && r ? yn(s) : []);
  }
  return t.concat(o, yn(o, [], r));
}
function gu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ix(e) {
  const t = Ue(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = it(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Ho(r) !== a || Ho(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function Fd(e) {
  return Ge(e) ? e : e.contextElement;
}
function _r(e) {
  const t = Fd(e);
  if (!it(t))
    return nt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Ix(t);
  let i = (a ? Ho(r.width) : r.width) / n, s = (a ? Ho(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const kL = /* @__PURE__ */ nt(0);
function Lx(e) {
  const t = De(e);
  return !$d() || !t.visualViewport ? kL : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function IL(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== De(e) ? !1 : t;
}
function Jt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = Fd(e);
  let i = nt(1);
  t && (n ? Ge(n) && (i = _r(n)) : i = _r(e));
  const s = IL(a, r, n) ? Lx(a) : nt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, d = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = De(a), g = n && Ge(n) ? De(n) : n;
    let y = m, h = gu(y);
    for (; h && n && g !== y; ) {
      const v = _r(h), b = h.getBoundingClientRect(), x = Ue(h), w = b.left + (h.clientLeft + parseFloat(x.paddingLeft)) * v.x, _ = b.top + (h.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, l *= v.y, d *= v.x, p *= v.y, c += w, l += _, y = De(h), h = gu(y);
    }
  }
  return zo({
    width: d,
    height: p,
    x: c,
    y: l
  });
}
function Ia(e, t) {
  const r = ka(e).scrollLeft;
  return t ? t.left + r : Jt(dt(e)).left + r;
}
function $x(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - Ia(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function LL(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = dt(n), s = t ? Da(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = nt(1);
  const d = nt(0), p = it(n);
  if ((p || !p && !a) && ((Wr(n) !== "body" || Wn(i)) && (c = ka(n)), it(n))) {
    const g = Jt(n);
    l = _r(n), d.x = g.x + n.clientLeft, d.y = g.y + n.clientTop;
  }
  const m = i && !p && !a ? $x(i, c) : nt(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + d.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + d.y + m.y
  };
}
function $L(e) {
  return Array.from(e.getClientRects());
}
function FL(e) {
  const t = dt(e), r = ka(e), n = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Oe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Ia(e);
  const s = -r.scrollTop;
  return Ue(n).direction === "rtl" && (i += Oe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const Xv = 25;
function qL(e, t) {
  const r = De(e), n = dt(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const d = $d();
    (!d || d && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const l = Ia(n);
  if (l <= 0) {
    const d = n.ownerDocument, p = d.body, m = getComputedStyle(p), g = d.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, y = Math.abs(n.clientWidth - p.clientWidth - g);
    y <= Xv && (a -= y);
  } else l <= Xv && (a += l);
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const BL = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function WL(e, t) {
  const r = Jt(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = it(e) ? _r(e) : nt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Qv(e, t, r) {
  let n;
  if (t === "viewport")
    n = qL(e, r);
  else if (t === "document")
    n = FL(dt(e));
  else if (Ge(t))
    n = WL(t, r);
  else {
    const o = Lx(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return zo(n);
}
function Fx(e, t) {
  const r = At(e);
  return r === t || !Ge(r) || Tr(r) ? !1 : Ue(r).position === "fixed" || Fx(r, t);
}
function HL(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = yn(e, [], !1).filter((s) => Ge(s) && Wr(s) !== "body"), o = null;
  const a = Ue(e).position === "fixed";
  let i = a ? At(e) : e;
  for (; Ge(i) && !Tr(i); ) {
    const s = Ue(i), c = Ld(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && BL.has(o.position) || Wn(i) && !c && Fx(e, i)) ? n = n.filter((d) => d !== i) : o = s, i = At(i);
  }
  return t.set(e, n), n;
}
function VL(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? Da(t) ? [] : HL(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((l, d) => {
    const p = Qv(t, d, o);
    return l.top = Oe(p.top, l.top), l.right = Mt(p.right, l.right), l.bottom = Mt(p.bottom, l.bottom), l.left = Oe(p.left, l.left), l;
  }, Qv(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function zL(e) {
  const {
    width: t,
    height: r
  } = Ix(e);
  return {
    width: t,
    height: r
  };
}
function GL(e, t, r) {
  const n = it(t), o = dt(t), a = r === "fixed", i = Jt(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = nt(0);
  function l() {
    c.x = Ia(o);
  }
  if (n || !n && !a)
    if ((Wr(t) !== "body" || Wn(o)) && (s = ka(t)), n) {
      const g = Jt(t, !0, a, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && l();
  a && !n && o && l();
  const d = o && !n && !a ? $x(o, s) : nt(0), p = i.left + s.scrollLeft - c.x - d.x, m = i.top + s.scrollTop - c.y - d.y;
  return {
    x: p,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Il(e) {
  return Ue(e).position === "static";
}
function Zv(e, t) {
  if (!it(e) || Ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return dt(e) === r && (r = r.ownerDocument.body), r;
}
function qx(e, t) {
  const r = De(e);
  if (Da(e))
    return r;
  if (!it(e)) {
    let o = At(e);
    for (; o && !Tr(o); ) {
      if (Ge(o) && !Il(o))
        return o;
      o = At(o);
    }
    return r;
  }
  let n = Zv(e, t);
  for (; n && NL(n) && Il(n); )
    n = Zv(n, t);
  return n && Tr(n) && Il(n) && !Ld(n) ? r : n || jL(e) || r;
}
const UL = async function(e) {
  const t = this.getOffsetParent || qx, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: GL(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function KL(e) {
  return Ue(e).direction === "rtl";
}
const YL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: LL,
  getDocumentElement: dt,
  getClippingRect: VL,
  getOffsetParent: qx,
  getElementRects: UL,
  getClientRects: $L,
  getDimensions: zL,
  getScale: _r,
  isElement: Ge,
  isRTL: KL
};
function Bx(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function XL(e, t) {
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
    const y = bo(p), h = bo(o.clientWidth - (d + m)), v = bo(o.clientHeight - (p + g)), b = bo(d), w = {
      rootMargin: -y + "px " + -h + "px " + -v + "px " + -b + "px",
      threshold: Oe(0, Mt(1, c)) || 1
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
      P === 1 && !Bx(l, e.getBoundingClientRect()) && i(), _ = !1;
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
function QL(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Fd(e), d = o || a ? [...l ? yn(l) : [], ...yn(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", r, {
      passive: !0
    }), a && b.addEventListener("resize", r);
  });
  const p = l && s ? XL(l, r) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var w;
      (w = g) == null || w.observe(t);
    })), r();
  }), l && !c && g.observe(l), g.observe(t));
  let y, h = c ? Jt(e) : null;
  c && v();
  function v() {
    const b = Jt(e);
    h && !Bx(h, b) && r(), h = b, y = requestAnimationFrame(v);
  }
  return r(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", r), a && x.removeEventListener("resize", r);
    }), p?.(), (b = g) == null || b.disconnect(), g = null, c && cancelAnimationFrame(y);
  };
}
const ZL = _L, JL = SL, e$ = bL, t$ = PL, r$ = xL, Jv = yL, n$ = CL, o$ = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: YL,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return gL(e, t, {
    ...o,
    platform: a
  });
};
var a$ = typeof document < "u", i$ = function() {
}, Po = a$ ? dg : i$;
function Go(e, t) {
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
        if (!Go(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Go(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Wx(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function eg(e, t) {
  const r = Wx(e);
  return Math.round(t * r) / r;
}
function Ll(e) {
  const t = f.useRef(e);
  return Po(() => {
    t.current = e;
  }), t;
}
function s$(e) {
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
  Go(m, n) || g(n);
  const [y, h] = f.useState(null), [v, b] = f.useState(null), x = f.useCallback((N) => {
    N !== C.current && (C.current = N, h(N));
  }, []), w = f.useCallback((N) => {
    N !== P.current && (P.current = N, b(N));
  }, []), _ = a || y, S = i || v, C = f.useRef(null), P = f.useRef(null), E = f.useRef(d), R = c != null, I = Ll(c), j = Ll(o), V = Ll(l), q = f.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const N = {
      placement: t,
      strategy: r,
      middleware: m
    };
    j.current && (N.platform = j.current), o$(C.current, P.current, N).then((W) => {
      const O = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      M.current && !Go(E.current, O) && (E.current = O, Cn.flushSync(() => {
        p(O);
      }));
    });
  }, [m, t, r, j, V]);
  Po(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [l]);
  const M = f.useRef(!1);
  Po(() => (M.current = !0, () => {
    M.current = !1;
  }), []), Po(() => {
    if (_ && (C.current = _), S && (P.current = S), _ && S) {
      if (I.current)
        return I.current(_, S, q);
      q();
    }
  }, [_, S, q, I, R]);
  const $ = f.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: x,
    setFloating: w
  }), [x, w]), F = f.useMemo(() => ({
    reference: _,
    floating: S
  }), [_, S]), D = f.useMemo(() => {
    const N = {
      position: r,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return N;
    const W = eg(F.floating, d.x), O = eg(F.floating, d.y);
    return s ? {
      ...N,
      transform: "translate(" + W + "px, " + O + "px)",
      ...Wx(F.floating) >= 1.5 && {
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
const c$ = (e) => {
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
      return n && t(n) ? n.current != null ? Jv({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Jv({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, l$ = (e, t) => ({
  ...ZL(e),
  options: [e, t]
}), u$ = (e, t) => ({
  ...JL(e),
  options: [e, t]
}), d$ = (e, t) => ({
  ...n$(e),
  options: [e, t]
}), f$ = (e, t) => ({
  ...e$(e),
  options: [e, t]
}), p$ = (e, t) => ({
  ...t$(e),
  options: [e, t]
}), m$ = (e, t) => ({
  ...r$(e),
  options: [e, t]
}), h$ = (e, t) => ({
  ...c$(e),
  options: [e, t]
});
var v$ = "Arrow", Hx = f.forwardRef((e, t) => {
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
Hx.displayName = v$;
var g$ = Hx, qd = "Popper", [Vx, kt] = be(qd), [y$, zx] = Vx(qd), Gx = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = f.useState(null);
  return /* @__PURE__ */ u.jsx(y$, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Gx.displayName = qd;
var Ux = "PopperAnchor", Kx = f.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = zx(Ux, r), i = f.useRef(null), s = ne(t, i), c = f.useRef(null);
    return f.useEffect(() => {
      const l = c.current;
      c.current = n?.current || i.current, l !== c.current && a.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ u.jsx(H.div, { ...o, ref: s });
  }
);
Kx.displayName = Ux;
var Bd = "PopperContent", [b$, x$] = Vx(Bd), Yx = f.forwardRef(
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
    } = e, v = zx(Bd, r), [b, x] = f.useState(null), w = ne(t, (k) => x(k)), [_, S] = f.useState(null), C = Ra(_), P = C?.width ?? 0, E = C?.height ?? 0, R = n + (a !== "center" ? "-" + a : ""), I = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, j = Array.isArray(l) ? l : [l], V = j.length > 0, q = {
      padding: I,
      boundary: j.filter(_$),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: M, floatingStyles: $, placement: F, isPositioned: D, middlewareData: N } = s$({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...k) => QL(...k, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        l$({ mainAxis: o + E, alignmentAxis: i }),
        c && u$({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? d$() : void 0,
          ...q
        }),
        c && f$({ ...q }),
        p$({
          ...q,
          apply: ({ elements: k, rects: X, availableWidth: re, availableHeight: oe }) => {
            const { width: te, height: U } = X.reference, ie = k.floating.style;
            ie.setProperty("--radix-popper-available-width", `${re}px`), ie.setProperty("--radix-popper-available-height", `${oe}px`), ie.setProperty("--radix-popper-anchor-width", `${te}px`), ie.setProperty("--radix-popper-anchor-height", `${U}px`);
          }
        }),
        _ && h$({ element: _, padding: s }),
        S$({ arrowWidth: P, arrowHeight: E }),
        m && m$({ strategy: "referenceHidden", ...q })
      ]
    }), [W, O] = Zx(F), z = ue(y);
    me(() => {
      D && z?.();
    }, [D, z]);
    const A = N.arrow?.x, B = N.arrow?.y, K = N.arrow?.centerOffset !== 0, [G, ee] = f.useState();
    return me(() => {
      b && ee(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: D ? $.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            N.transformOrigin?.x,
            N.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...N.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          b$,
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
Yx.displayName = Bd;
var Xx = "PopperArrow", w$ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Qx = f.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = x$(Xx, n), i = w$[a.placedSide];
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
          g$,
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
Qx.displayName = Xx;
function _$(e) {
  return e !== null;
}
var S$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, d] = Zx(r), p = { start: "0%", center: "50%", end: "100%" }[d], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let y = "", h = "";
    return l === "bottom" ? (y = i ? p : `${m}px`, h = `${-c}px`) : l === "top" ? (y = i ? p : `${m}px`, h = `${n.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, h = i ? p : `${g}px`) : l === "left" && (y = `${n.floating.width + c}px`, h = i ? p : `${g}px`), { data: { x: y, y: h } };
  }
});
function Zx(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Hn = Gx, Vn = Kx, La = Yx, $a = Qx, Fa = "Popover", [Jx, g4] = be(Fa, [
  kt
]), zn = kt(), [C$, It] = Jx(Fa), ew = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = zn(t), c = f.useRef(null), [l, d] = f.useState(!1), [p, m] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Fa
  });
  return /* @__PURE__ */ u.jsx(Hn, { ...s, children: /* @__PURE__ */ u.jsx(
    C$,
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
ew.displayName = Fa;
var tw = "PopoverAnchor", P$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = It(tw, r), a = zn(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return f.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ u.jsx(Vn, { ...a, ...n, ref: t });
  }
);
P$.displayName = tw;
var rw = "PopoverTrigger", nw = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = It(rw, r), a = zn(r), i = ne(t, o.triggerRef), s = /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": cw(o.open),
        ...n,
        ref: i,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ u.jsx(Vn, { asChild: !0, ...a, children: s });
  }
);
nw.displayName = rw;
var Wd = "PopoverPortal", [E$, R$] = Jx(Wd, {
  forceMount: void 0
}), ow = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = It(Wd, t);
  return /* @__PURE__ */ u.jsx(E$, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(ar, { asChild: !0, container: o, children: n }) }) });
};
ow.displayName = Wd;
var Mr = "PopoverContent", aw = f.forwardRef(
  (e, t) => {
    const r = R$(Mr, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = It(Mr, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(T$, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(M$, { ...o, ref: t }) });
  }
);
aw.displayName = Mr;
var N$ = /* @__PURE__ */ Rt("PopoverContent.RemoveScroll"), T$ = f.forwardRef(
  (e, t) => {
    const r = It(Mr, e.__scopePopover), n = f.useRef(null), o = ne(t, n), a = f.useRef(!1);
    return f.useEffect(() => {
      const i = n.current;
      if (i) return da(i);
    }, []), /* @__PURE__ */ u.jsx(Nn, { as: N$, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      iw,
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
), M$ = f.forwardRef(
  (e, t) => {
    const r = It(Mr, e.__scopePopover), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      iw,
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
), iw = f.forwardRef(
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
    } = e, m = It(Mr, r), g = zn(r);
    return la(), /* @__PURE__ */ u.jsx(
      Rn,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ u.jsx(
          Ot,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              La,
              {
                "data-state": cw(m.open),
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
), sw = "PopoverClose", A$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = It(sw, r);
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
A$.displayName = sw;
var O$ = "PopoverArrow", j$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = zn(r);
    return /* @__PURE__ */ u.jsx($a, { ...o, ...n, ref: t });
  }
);
j$.displayName = O$;
function cw(e) {
  return e ? "open" : "closed";
}
var D$ = ew, k$ = nw, I$ = ow, lw = aw;
const Gn = D$, Un = k$, Hr = f.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ u.jsx(I$, { children: /* @__PURE__ */ u.jsx(
  lw,
  {
    ref: o,
    align: t,
    sideOffset: r,
    className: T(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Hr.displayName = lw.displayName;
function y4({ value: e, onChange: t }) {
  const [r, n] = f.useState(e);
  function o(a) {
    n(a), t?.(a);
  }
  return /* @__PURE__ */ u.jsxs(Gn, { children: [
    /* @__PURE__ */ u.jsx(Un, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      jt,
      {
        variant: "outline",
        className: T(
          "w-full justify-between text-left font-normal",
          !r && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ u.jsx(kg, { className: "mr-2" }),
            r ? lt(r, "PPP", { locale: rn }) : /* @__PURE__ */ u.jsx("span", { children: "Selecione uma data" })
          ] }),
          /* @__PURE__ */ u.jsx(Nt, { className: "shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(Hr, { className: "w-auto p-0", children: /* @__PURE__ */ u.jsx(
      _b,
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
function L$(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function $$(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function F$(e) {
  return /^[0-5][0-9]$/.test(e);
}
function qa(e, { max: t, min: r = 0, loop: n = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (n ? (o > t && (o = r), o < r && (o = t)) : (o > t && (o = t), o < r && (o = r)), o.toString().padStart(2, "0"));
}
function uw(e) {
  return L$(e) ? e : qa(e, { max: 23 });
}
function dw(e) {
  return $$(e) ? e : qa(e, { min: 1, max: 12 });
}
function Uo(e) {
  return F$(e) ? e : qa(e, { max: 59 });
}
function Hd(e, { min: t, max: r, step: n }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += n, qa(String(o), { min: t, max: r, loop: !0 }));
}
function q$(e, t) {
  return Hd(e, { min: 0, max: 23, step: t });
}
function B$(e, t) {
  return Hd(e, { min: 1, max: 12, step: t });
}
function tg(e, t) {
  return Hd(e, { min: 0, max: 59, step: t });
}
function W$(e, t) {
  const r = Uo(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function H$(e, t) {
  const r = Uo(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function V$(e, t) {
  const r = uw(t);
  return e.setHours(parseInt(r, 10)), e;
}
function z$(e, t, r) {
  const n = parseInt(dw(t), 10), o = K$(n, r);
  return e.setHours(o), e;
}
function yu(e, t, r, n) {
  switch (r) {
    case "minutes":
      return W$(e, t);
    case "seconds":
      return H$(e, t);
    case "hours":
      return V$(e, t);
    case "12hours":
      return n ? z$(e, t, n) : e;
    default:
      return e;
  }
}
function G$(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Uo(String(e.getMinutes()));
    case "seconds":
      return Uo(String(e.getSeconds()));
    case "hours":
      return uw(String(e.getHours()));
    case "12hours":
      return dw(String(fw(e.getHours())));
    default:
      return "00";
  }
}
function U$(e, t, r) {
  switch (r) {
    case "minutes":
      return tg(e, t);
    case "seconds":
      return tg(e, t);
    case "hours":
      return q$(e, t);
    case "12hours":
      return B$(e, t);
    default:
      return "00";
  }
}
function K$(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function fw(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function Y$(e) {
  return Array.from({ length: 12 }, (t, r) => ({
    value: r,
    label: lt(new Date(2021, r), "MMMM", { locale: e })
  }));
}
function X$(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (r, n) => ({
    value: t.getFullYear() - e + n,
    label: (t.getFullYear() - e + n).toString()
  }));
}
function pw({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  yearRange: n = 50,
  ...o
}) {
  const a = f.useMemo(() => {
    let l = rn;
    const { options: d, localize: p, formatLong: m } = o.locale || {};
    return d && p && m && (l = {
      options: d,
      localize: p,
      formatLong: m
    }), Y$(l);
  }, []), i = f.useMemo(() => X$(n), []), s = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() - n, 0, 1);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  }, c = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() + n, 11, 31);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  };
  return /* @__PURE__ */ u.jsx(
    xb,
    {
      showOutsideDays: r,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          gt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&_svg]:size-3"
        ),
        nav_button_previous: T(
          "absolute left-1",
          s() && "pointer-events-none"
        ),
        nav_button_next: T(
          "absolute right-1",
          c() && "pointer-events-none"
        ),
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: T(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          o.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: T(
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
        Chevron: ({ ...l }) => l.orientation === "left" ? /* @__PURE__ */ u.jsx(zu, { className: "h-4 w-4" }) : /* @__PURE__ */ u.jsx(En, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: l }) => /* @__PURE__ */ u.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ u.jsxs(
            ea,
            {
              defaultValue: l.date.getMonth().toString(),
              onValueChange: (d) => {
                const p = new Date(l.date);
                p.setMonth(Number.parseInt(d, 10)), o.onMonthChange?.(p);
              },
              children: [
                /* @__PURE__ */ u.jsx(wn, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(ta, {}) }),
                /* @__PURE__ */ u.jsx(_n, { children: a.map((d) => /* @__PURE__ */ u.jsx(
                  jr,
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
            ea,
            {
              defaultValue: l.date.getFullYear().toString(),
              onValueChange: (d) => {
                const p = new Date(l.date);
                p.setFullYear(Number.parseInt(d, 10)), o.onMonthChange?.(p);
              },
              children: [
                /* @__PURE__ */ u.jsx(wn, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(ta, {}) }),
                /* @__PURE__ */ u.jsx(_n, { children: i.map((d) => /* @__PURE__ */ u.jsx(
                  jr,
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
pw.displayName = "Calendar";
const mw = f.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: n, onLeftFocus: o, onRightFocus: a }, i) => {
    const s = (l) => {
      l.key === "ArrowRight" && a?.(), l.key === "ArrowLeft" && o?.();
    }, c = (l) => {
      if (t?.(l), r) {
        const d = new Date(r), p = fw(r.getHours());
        n?.(
          yu(
            d,
            p.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ u.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ u.jsxs(
      ea,
      {
        defaultValue: e,
        onValueChange: (l) => c(l),
        children: [
          /* @__PURE__ */ u.jsx(
            wn,
            {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: /* @__PURE__ */ u.jsx(ta, {})
            }
          ),
          /* @__PURE__ */ u.jsxs(_n, { children: [
            /* @__PURE__ */ u.jsx(jr, { value: "AM", children: "AM" }),
            /* @__PURE__ */ u.jsx(jr, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
mw.displayName = "TimePeriodSelect";
const Eo = f.forwardRef(
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
    const w = f.useMemo(() => G$(a, l), [a, l]), _ = (C) => l === "12hours" && h && w.slice(1, 2) === "1" && b === "0" ? `0${C}` : h ? w.slice(1, 2) + C : `0${C}`, S = (C) => {
      if (C.key !== "Tab") {
        if (C.preventDefault(), C.key === "ArrowRight" && m?.(), C.key === "ArrowLeft" && p?.(), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const P = C.key === "ArrowUp" ? 1 : -1, E = U$(w, P, l);
          h && v(!1);
          const R = a ? new Date(a) : /* @__PURE__ */ new Date();
          i?.(yu(R, E, l, d));
        }
        if (C.key >= "0" && C.key <= "9") {
          l === "12hours" && x(C.key);
          const P = _(C.key);
          h && m?.(), v((R) => !R);
          const E = a ? new Date(a) : /* @__PURE__ */ new Date();
          i?.(yu(E, P, l, d));
        }
      }
    };
    return /* @__PURE__ */ u.jsx(
      Zd,
      {
        ref: y,
        id: n || l,
        name: o || l,
        className: T(
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
Eo.displayName = "TimePickerInput";
const hw = f.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: n = "second" }, o) => {
    const a = f.useRef(null), i = f.useRef(null), s = f.useRef(null), c = f.useRef(null), [l, d] = f.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return $u(
      o,
      () => ({
        minuteRef: a.current,
        hourRef: i.current,
        secondRef: s.current,
        periodRef: c.current
      }),
      [a, i, s]
    ), /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ u.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ u.jsx(HP, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ u.jsx(
        Eo,
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
          Eo,
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
          Eo,
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
        mw,
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
hw.displayName = "TimePicker";
const Q$ = f.forwardRef(
  ({
    locale: e = rn,
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
    const [g, y] = f.useState(r ?? t), h = Sr(null), [v, b] = f.useState(
      r
    ), x = (R) => {
      if (!R)
        return;
      if (!t) {
        R.setHours(
          g?.getHours() ?? 0,
          g?.getMinutes() ?? 0,
          g?.getSeconds() ?? 0
        ), n?.(R), y(R);
        return;
      }
      const j = (R.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), V = BN(t, {
        days: Math.ceil(j)
      });
      V.setHours(
        g?.getHours() ?? 0,
        g?.getMinutes() ?? 0,
        g?.getSeconds() ?? 0
      ), n?.(V), y(V);
    };
    je(() => {
      r || b(void 0);
    }, [r]);
    const w = (R) => {
      R && (n?.(R), y(R), b(R));
    };
    $u(
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
    let S = rn;
    const { options: C, localize: P, formatLong: E } = e;
    return C && P && E && (S = {
      ...rn,
      options: C,
      localize: P,
      formatLong: E
    }), /* @__PURE__ */ u.jsxs(Gn, { children: [
      /* @__PURE__ */ u.jsx(Un, { asChild: !0, disabled: i, children: /* @__PURE__ */ u.jsxs(
        jt,
        {
          variant: "outline",
          className: T(
            "w-full justify-between text-left font-normal",
            !v && "text-muted-foreground",
            d
          ),
          ref: h,
          children: [
            /* @__PURE__ */ u.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ u.jsx(kg, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "truncate block", title: l, children: v ? lt(
                v,
                o === 24 ? _.hour24 : _.hour12,
                {
                  locale: S
                }
              ) : /* @__PURE__ */ u.jsx("span", { children: l }) })
            ] }),
            /* @__PURE__ */ u.jsx(Nt, { className: "shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsxs(Hr, { className: "w-auto p-0", children: [
        /* @__PURE__ */ u.jsx(
          pw,
          {
            mode: "single",
            selected: v,
            month: g,
            onSelect: (R) => {
              R && (R.setHours(
                g?.getHours() ?? 0,
                g?.getMinutes() ?? 0,
                g?.getSeconds() ?? 0
              ), w(R));
            },
            onMonthChange: x,
            yearRange: a,
            locale: e,
            ...p
          }
        ),
        c !== "day" && /* @__PURE__ */ u.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ u.jsx(
          hw,
          {
            onChange: (R) => {
              n?.(R), b(R), R && y(R);
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
Q$.displayName = "DateTimePicker";
const Z$ = pa, b4 = Xu, J$ = ma, x4 = Fr, vw = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Lr,
  {
    ref: r,
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
vw.displayName = Lr.displayName;
const gw = f.forwardRef(({ className: e, onClose: t, ...r }, n) => /* @__PURE__ */ u.jsxs(J$, { children: [
  /* @__PURE__ */ u.jsx(vw, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ u.jsxs(
    $r,
    {
      ref: n,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          Fr,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ u.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ u.jsx(ca, { className: "h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
gw.displayName = $r.displayName;
const eF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
eF.displayName = "DialogHeader";
const tF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
tF.displayName = "DialogFooter";
const rF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Tn,
  {
    ref: r,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
rF.displayName = Tn.displayName;
const nF = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Mn,
  {
    ref: r,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
nF.displayName = Mn.displayName;
var $l = "rovingFocusGroup.onEntryFocus", oF = { bubbles: !1, cancelable: !0 }, Kn = "RovingFocusGroup", [bu, yw, aF] = or(Kn), [iF, Lt] = be(
  Kn,
  [aF]
), [sF, cF] = iF(Kn), bw = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(bu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(bu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(lF, { ...e, ref: t }) }) })
);
bw.displayName = Kn;
var lF = f.forwardRef((e, t) => {
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
    caller: Kn
  }), [b, x] = f.useState(!1), w = ue(l), _ = yw(r), S = f.useRef(!1), [C, P] = f.useState(0);
  return f.useEffect(() => {
    const E = m.current;
    if (E)
      return E.addEventListener($l, w), () => E.removeEventListener($l, w);
  }, [w]), /* @__PURE__ */ u.jsx(
    sF,
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
            const R = !S.current;
            if (E.target === E.currentTarget && R && !b) {
              const I = new CustomEvent($l, oF);
              if (E.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const j = _().filter((F) => F.focusable), V = j.find((F) => F.active), q = j.find((F) => F.id === h), $ = [V, q, ...j].filter(
                  Boolean
                ).map((F) => F.ref.current);
                _w($, d);
              }
            }
            S.current = !1;
          }),
          onBlur: L(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), xw = "RovingFocusGroupItem", ww = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = ve(), l = a || c, d = cF(xw, r), p = d.currentTabStopId === l, m = yw(r), { onFocusableItemAdd: g, onFocusableItemRemove: y, currentTabStopId: h } = d;
    return f.useEffect(() => {
      if (n)
        return g(), () => y();
    }, [n, g, y]), /* @__PURE__ */ u.jsx(
      bu.ItemSlot,
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
              const b = fF(v, d.orientation, d.dir);
              if (b !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = m().filter((_) => _.focusable).map((_) => _.ref.current);
                if (b === "last") w.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && w.reverse();
                  const _ = w.indexOf(v.currentTarget);
                  w = d.loop ? pF(w, _ + 1) : w.slice(_ + 1);
                }
                setTimeout(() => _w(w));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
ww.displayName = xw;
var uF = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function dF(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function fF(e, t, r) {
  const n = dF(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return uF[n];
}
function _w(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function pF(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Ba = bw, Wa = ww, xu = ["Enter", " "], mF = ["ArrowDown", "PageUp", "Home"], Sw = ["ArrowUp", "PageDown", "End"], hF = [...mF, ...Sw], vF = {
  ltr: [...xu, "ArrowRight"],
  rtl: [...xu, "ArrowLeft"]
}, gF = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Yn = "Menu", [bn, yF, bF] = or(Yn), [lr, Cw] = be(Yn, [
  bF,
  kt,
  Lt
]), Xn = kt(), Pw = Lt(), [Ew, $t] = lr(Yn), [xF, Qn] = lr(Yn), Rw = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Xn(t), [c, l] = f.useState(null), d = f.useRef(!1), p = ue(a), m = xt(o);
  return f.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(Hn, { ...s, children: /* @__PURE__ */ u.jsx(
    Ew,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u.jsx(
        xF,
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
Rw.displayName = Yn;
var wF = "MenuAnchor", Vd = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Xn(r);
    return /* @__PURE__ */ u.jsx(Vn, { ...o, ...n, ref: t });
  }
);
Vd.displayName = wF;
var zd = "MenuPortal", [_F, Nw] = lr(zd, {
  forceMount: void 0
}), Tw = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = $t(zd, t);
  return /* @__PURE__ */ u.jsx(_F, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(ar, { asChild: !0, container: o, children: n }) }) });
};
Tw.displayName = zd;
var $e = "MenuContent", [SF, Gd] = lr($e), Mw = f.forwardRef(
  (e, t) => {
    const r = Nw($e, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = $t($e, e.__scopeMenu), i = Qn($e, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(bn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ u.jsx(CF, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(PF, { ...o, ref: t }) }) }) });
  }
), CF = f.forwardRef(
  (e, t) => {
    const r = $t($e, e.__scopeMenu), n = f.useRef(null), o = ne(t, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return da(a);
    }, []), /* @__PURE__ */ u.jsx(
      Ud,
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
), PF = f.forwardRef((e, t) => {
  const r = $t($e, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    Ud,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), EF = /* @__PURE__ */ Rt("MenuContent.ScrollLock"), Ud = f.forwardRef(
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
    } = e, v = $t($e, r), b = Qn($e, r), x = Xn(r), w = Pw(r), _ = yF(r), [S, C] = f.useState(null), P = f.useRef(null), E = ne(t, P, v.onContentChange), R = f.useRef(0), I = f.useRef(""), j = f.useRef(0), V = f.useRef(null), q = f.useRef("right"), M = f.useRef(0), $ = y ? Nn : f.Fragment, F = y ? { as: EF, allowPinchZoom: !0 } : void 0, D = (W) => {
      const O = I.current + W, z = _().filter((k) => !k.disabled), A = document.activeElement, B = z.find((k) => k.ref.current === A)?.textValue, K = z.map((k) => k.textValue), G = $F(K, O, B), ee = z.find((k) => k.textValue === G)?.ref.current;
      (function k(X) {
        I.current = X, window.clearTimeout(R.current), X !== "" && (R.current = window.setTimeout(() => k(""), 1e3));
      })(O), ee && setTimeout(() => ee.focus());
    };
    f.useEffect(() => () => window.clearTimeout(R.current), []), la();
    const N = f.useCallback((W) => q.current === V.current?.side && qF(W, V.current?.area), []);
    return /* @__PURE__ */ u.jsx(
      SF,
      {
        scope: r,
        searchRef: I,
        onItemEnter: f.useCallback(
          (W) => {
            N(W) && W.preventDefault();
          },
          [N]
        ),
        onItemLeave: f.useCallback(
          (W) => {
            N(W) || (P.current?.focus(), C(null));
          },
          [N]
        ),
        onTriggerLeave: f.useCallback(
          (W) => {
            N(W) && W.preventDefault();
          },
          [N]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: f.useCallback((W) => {
          V.current = W;
        }, []),
        children: /* @__PURE__ */ u.jsx($, { ...F, children: /* @__PURE__ */ u.jsx(
          Rn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: L(a, (W) => {
              W.preventDefault(), P.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ u.jsx(
              Ot,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ u.jsx(
                  Ba,
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
                      La,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Uw(v.open),
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
                          if (W.target !== K || !hF.includes(W.key)) return;
                          W.preventDefault();
                          const ee = _().filter((k) => !k.disabled).map((k) => k.ref.current);
                          Sw.includes(W.key) && ee.reverse(), IF(ee);
                        }),
                        onBlur: L(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(R.current), I.current = "");
                        }),
                        onPointerMove: L(
                          e.onPointerMove,
                          xn((W) => {
                            const O = W.target, z = M.current !== W.clientX;
                            if (W.currentTarget.contains(O) && z) {
                              const A = W.clientX > M.current ? "right" : "left";
                              q.current = A, M.current = W.clientX;
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
Mw.displayName = $e;
var RF = "MenuGroup", Kd = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { role: "group", ...n, ref: t });
  }
);
Kd.displayName = RF;
var NF = "MenuLabel", Aw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
Aw.displayName = NF;
var Ko = "MenuItem", rg = "menu.itemSelect", Ha = f.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = f.useRef(null), i = Qn(Ko, e.__scopeMenu), s = Gd(Ko, e.__scopeMenu), c = ne(t, a), l = f.useRef(!1), d = () => {
      const p = a.current;
      if (!r && p) {
        const m = new CustomEvent(rg, { bubbles: !0, cancelable: !0 });
        p.addEventListener(rg, (g) => n?.(g), { once: !0 }), an(p, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      Ow,
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
          r || m && p.key === " " || xu.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
Ha.displayName = Ko;
var Ow = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = Gd(Ko, r), s = Pw(r), c = f.useRef(null), l = ne(t, c), [d, p] = f.useState(!1), [m, g] = f.useState("");
    return f.useEffect(() => {
      const y = c.current;
      y && g((y.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ u.jsx(
      bn.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ u.jsx(Wa, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ u.jsx(
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
              xn((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: L(
              e.onPointerLeave,
              xn((y) => i.onItemLeave(y))
            ),
            onFocus: L(e.onFocus, () => p(!0)),
            onBlur: L(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), TF = "MenuCheckboxItem", jw = f.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ u.jsx($w, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ u.jsx(
      Ha,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yo(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": Qd(r),
        onSelect: L(
          o.onSelect,
          () => n?.(Yo(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
jw.displayName = TF;
var Dw = "MenuRadioGroup", [MF, AF] = lr(
  Dw,
  { value: void 0, onValueChange: () => {
  } }
), kw = f.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = ue(n);
    return /* @__PURE__ */ u.jsx(MF, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ u.jsx(Kd, { ...o, ref: t }) });
  }
);
kw.displayName = Dw;
var Iw = "MenuRadioItem", Lw = f.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = AF(Iw, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ u.jsx($w, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ u.jsx(
      Ha,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": Qd(a),
        onSelect: L(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Lw.displayName = Iw;
var Yd = "MenuItemIndicator", [$w, OF] = lr(
  Yd,
  { checked: !1 }
), Fw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = OF(Yd, r);
    return /* @__PURE__ */ u.jsx(
      he,
      {
        present: n || Yo(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          H.span,
          {
            ...o,
            ref: t,
            "data-state": Qd(a.checked)
          }
        )
      }
    );
  }
);
Fw.displayName = Yd;
var jF = "MenuSeparator", qw = f.forwardRef(
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
qw.displayName = jF;
var DF = "MenuArrow", Bw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Xn(r);
    return /* @__PURE__ */ u.jsx($a, { ...o, ...n, ref: t });
  }
);
Bw.displayName = DF;
var Xd = "MenuSub", [kF, Ww] = lr(Xd), Hw = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = $t(Xd, t), i = Xn(t), [s, c] = f.useState(null), [l, d] = f.useState(null), p = ue(o);
  return f.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ u.jsx(Hn, { ...i, children: /* @__PURE__ */ u.jsx(
    Ew,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ u.jsx(
        kF,
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
Hw.displayName = Xd;
var en = "MenuSubTrigger", Vw = f.forwardRef(
  (e, t) => {
    const r = $t(en, e.__scopeMenu), n = Qn(en, e.__scopeMenu), o = Ww(en, e.__scopeMenu), a = Gd(en, e.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, d = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ u.jsx(Vd, { asChild: !0, ...l, children: /* @__PURE__ */ u.jsx(
      Ow,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": Uw(r.open),
        ...e,
        ref: ot(t, o.onTriggerChange),
        onClick: (p) => {
          e.onClick?.(p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: L(
          e.onPointerMove,
          xn((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: L(
          e.onPointerLeave,
          xn((p) => {
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
          e.disabled || m && p.key === " " || vF[n.dir].includes(p.key) && (r.onOpenChange(!0), r.content?.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Vw.displayName = en;
var zw = "MenuSubContent", Gw = f.forwardRef(
  (e, t) => {
    const r = Nw($e, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = $t($e, e.__scopeMenu), i = Qn($e, e.__scopeMenu), s = Ww(zw, e.__scopeMenu), c = f.useRef(null), l = ne(t, c);
    return /* @__PURE__ */ u.jsx(bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(bn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      Ud,
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
          const p = d.currentTarget.contains(d.target), m = gF[i.dir].includes(d.key);
          p && m && (a.onOpenChange(!1), s.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Gw.displayName = zw;
function Uw(e) {
  return e ? "open" : "closed";
}
function Yo(e) {
  return e === "indeterminate";
}
function Qd(e) {
  return Yo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function IF(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function LF(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function $F(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = LF(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function FF(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, d = s.y, p = c.x, m = c.y;
    d > n != m > n && r < (p - l) * (n - d) / (m - d) + l && (o = !o);
  }
  return o;
}
function qF(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return FF(r, t);
}
function xn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var BF = Rw, WF = Vd, HF = Tw, VF = Mw, zF = Kd, GF = Aw, UF = Ha, KF = jw, YF = kw, XF = Lw, QF = Fw, ZF = qw, JF = Bw, e2 = Hw, t2 = Vw, r2 = Gw, Va = "DropdownMenu", [n2, w4] = be(
  Va,
  [Cw]
), Re = Cw(), [o2, Kw] = n2(Va), Yw = (e) => {
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
    caller: Va
  });
  return /* @__PURE__ */ u.jsx(
    o2,
    {
      scope: t,
      triggerId: ve(),
      triggerRef: l,
      contentId: ve(),
      open: d,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ u.jsx(BF, { ...c, open: d, onOpenChange: p, dir: n, modal: s, children: r })
    }
  );
};
Yw.displayName = Va;
var Xw = "DropdownMenuTrigger", Qw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = Kw(Xw, r), i = Re(r);
    return /* @__PURE__ */ u.jsx(WF, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
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
Qw.displayName = Xw;
var a2 = "DropdownMenuPortal", Zw = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = Re(t);
  return /* @__PURE__ */ u.jsx(HF, { ...n, ...r });
};
Zw.displayName = a2;
var Jw = "DropdownMenuContent", e_ = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Kw(Jw, r), a = Re(r), i = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      VF,
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
e_.displayName = Jw;
var i2 = "DropdownMenuGroup", t_ = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(zF, { ...o, ...n, ref: t });
  }
);
t_.displayName = i2;
var s2 = "DropdownMenuLabel", r_ = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(GF, { ...o, ...n, ref: t });
  }
);
r_.displayName = s2;
var c2 = "DropdownMenuItem", n_ = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(UF, { ...o, ...n, ref: t });
  }
);
n_.displayName = c2;
var l2 = "DropdownMenuCheckboxItem", o_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(KF, { ...o, ...n, ref: t });
});
o_.displayName = l2;
var u2 = "DropdownMenuRadioGroup", a_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(YF, { ...o, ...n, ref: t });
});
a_.displayName = u2;
var d2 = "DropdownMenuRadioItem", i_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(XF, { ...o, ...n, ref: t });
});
i_.displayName = d2;
var f2 = "DropdownMenuItemIndicator", s_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(QF, { ...o, ...n, ref: t });
});
s_.displayName = f2;
var p2 = "DropdownMenuSeparator", c_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(ZF, { ...o, ...n, ref: t });
});
c_.displayName = p2;
var m2 = "DropdownMenuArrow", h2 = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(JF, { ...o, ...n, ref: t });
  }
);
h2.displayName = m2;
var v2 = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = Re(t), [s, c] = xe({
    prop: n,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ u.jsx(e2, { ...i, open: s, onOpenChange: c, children: r });
}, g2 = "DropdownMenuSubTrigger", l_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(t2, { ...o, ...n, ref: t });
});
l_.displayName = g2;
var y2 = "DropdownMenuSubContent", u_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(
    r2,
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
u_.displayName = y2;
var b2 = Yw, x2 = Qw, d_ = Zw, f_ = e_, w2 = t_, p_ = r_, m_ = n_, h_ = o_, _2 = a_, v_ = i_, g_ = s_, y_ = c_, S2 = v2, b_ = l_, x_ = u_;
const _4 = b2, S4 = x2, C4 = w2, P4 = d_, E4 = S2, R4 = _2, C2 = f.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  b_,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ u.jsx(En, { className: "ml-auto h-4 w-4" })
    ]
  }
));
C2.displayName = b_.displayName;
const P2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  x_,
  {
    ref: r,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
P2.displayName = x_.displayName;
const E2 = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(d_, { children: /* @__PURE__ */ u.jsx(
  f_,
  {
    ref: n,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
E2.displayName = f_.displayName;
const R2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  m_,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
R2.displayName = m_.displayName;
const N2 = f.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  h_,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(g_, { children: /* @__PURE__ */ u.jsx(Kt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
N2.displayName = h_.displayName;
const T2 = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  v_,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(g_, { children: /* @__PURE__ */ u.jsx(Lg, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
T2.displayName = v_.displayName;
const M2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  p_,
  {
    ref: n,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
M2.displayName = p_.displayName;
const A2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  y_,
  {
    ref: r,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
A2.displayName = y_.displayName;
const O2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: T("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
O2.displayName = "DropdownMenuShortcut";
var j2 = "Label", w_ = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  H.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
w_.displayName = j2;
var __ = w_;
const D2 = ct(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), za = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  __,
  {
    ref: r,
    className: T(D2(), e),
    ...t
  }
));
za.displayName = __.displayName;
const N4 = q0, S_ = f.createContext(
  {}
), Ga = ({
  ...e
}) => /* @__PURE__ */ u.jsx(S_.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u.jsx(B0, { ...e }) }), Ua = () => {
  const e = f.useContext(S_), t = f.useContext(C_), { getFieldState: r, formState: n } = Pn(), o = r(e.name, n);
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
}, C_ = f.createContext(
  {}
), Zn = f.forwardRef(({ className: e, ...t }, r) => {
  const n = f.useId();
  return /* @__PURE__ */ u.jsx(C_.Provider, { value: { id: n }, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      className: T("space-y-1 relative", e),
      ...t
    }
  ) });
});
Zn.displayName = "FormItem";
const Ka = f.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = Ua();
  return /* @__PURE__ */ u.jsx(
    za,
    {
      ref: r,
      className: T(n && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
Ka.displayName = "FormLabel";
const Ya = f.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = Ua();
  return /* @__PURE__ */ u.jsx(
    pg,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
Ya.displayName = "FormControl";
const P_ = f.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = Ua();
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: T("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
P_.displayName = "FormDescription";
const Jn = f.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o, formMessageId: a } = Ua(), i = o ? String(o?.message) : t;
  return i ? /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: n,
      id: a,
      className: T(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...r,
      children: i
    }
  ) : null;
});
Jn.displayName = "FormMessage";
const k2 = ct("font-bold tracking-tight", {
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
}), T4 = Q.forwardRef(
  ({ className: e, variant: t, children: r, ...n }, o) => {
    const a = t || "h1";
    return /* @__PURE__ */ u.jsx(
      a,
      {
        className: T(k2({ variant: t }), e),
        ref: o,
        ...n,
        children: r
      }
    );
  }
), Zd = Q.forwardRef(({ className: e, type: t, ...r }, n) => t === "textarea" ? /* @__PURE__ */ u.jsx(
  "textarea",
  {
    rows: 1,
    ref: n,
    className: T(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
) : /* @__PURE__ */ u.jsx(
  "input",
  {
    ref: n,
    type: t,
    className: T(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
)), M4 = ({
  name: e,
  label: t,
  placeholder: r,
  mask: n,
  ...o
}) => {
  const a = Pn();
  return /* @__PURE__ */ u.jsx(
    Ga,
    {
      control: a.control,
      name: e,
      render: ({ field: i }) => /* @__PURE__ */ u.jsxs(Zn, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ u.jsx(Ka, { children: t }),
        /* @__PURE__ */ u.jsx(Ya, { children: n ? /* @__PURE__ */ u.jsx(
          cq,
          {
            mask: n,
            placeholder: r,
            ...o,
            ...i
          }
        ) : /* @__PURE__ */ u.jsx(Zd, { placeholder: r, ...o, ...i }) }),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
};
var E_ = Object.freeze({
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
}), I2 = "VisuallyHidden", Xa = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    H.span,
    {
      ...e,
      ref: t,
      style: { ...E_, ...e.style }
    }
  )
);
Xa.displayName = I2;
var R_ = Xa, ur = "NavigationMenu", [Jd, N_, L2] = or(ur), [wu, $2, F2] = or(ur), [ef, A4] = be(
  ur,
  [L2, F2]
), [q2, qe] = ef(ur), [B2, W2] = ef(ur), T_ = f.forwardRef(
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
    } = e, [p, m] = f.useState(null), g = ne(t, (R) => m(R)), y = xt(l), h = f.useRef(0), v = f.useRef(0), b = f.useRef(0), [x, w] = f.useState(!0), [_, S] = xe({
      prop: n,
      onChange: (R) => {
        const I = R !== "", j = s > 0;
        I ? (window.clearTimeout(b.current), j && w(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
          () => w(!0),
          s
        )), o?.(R);
      },
      defaultProp: a ?? "",
      caller: ur
    }), C = f.useCallback(() => {
      window.clearTimeout(v.current), v.current = window.setTimeout(() => S(""), 150);
    }, [S]), P = f.useCallback(
      (R) => {
        window.clearTimeout(v.current), S(R);
      },
      [S]
    ), E = f.useCallback(
      (R) => {
        _ === R ? window.clearTimeout(v.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(v.current), S(R);
        }, i);
      },
      [_, S, i]
    );
    return f.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(v.current), window.clearTimeout(b.current);
    }, []), /* @__PURE__ */ u.jsx(
      M_,
      {
        scope: r,
        isRootMenu: !0,
        value: _,
        dir: y,
        orientation: c,
        rootNavigationMenu: p,
        onTriggerEnter: (R) => {
          window.clearTimeout(h.current), x ? E(R) : P(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), C();
        },
        onContentEnter: () => window.clearTimeout(v.current),
        onContentLeave: C,
        onItemSelect: (R) => {
          S((I) => I === R ? "" : R);
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
T_.displayName = ur;
var _u = "NavigationMenuSub", H2 = f.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = qe(_u, r), [l, d] = xe({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: _u
    });
    return /* @__PURE__ */ u.jsx(
      M_,
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
H2.displayName = _u;
var M_ = (e) => {
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
    q2,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: s,
      previousValue: $n(s),
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
      children: /* @__PURE__ */ u.jsx(Jd.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(B2, { scope: t, items: v, children: i }) })
    }
  );
}, A_ = "NavigationMenuList", O_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = qe(A_, r), a = /* @__PURE__ */ u.jsx(H.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ u.jsx(H.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ u.jsx(Jd.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ u.jsx(W_, { asChild: !0, children: a }) : a }) });
  }
);
O_.displayName = A_;
var j_ = "NavigationMenuItem", [V2, D_] = ef(j_), k_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = ve(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = f.useRef(null), c = f.useRef(null), l = f.useRef(null), d = f.useRef(() => {
    }), p = f.useRef(!1), m = f.useCallback((y = "start") => {
      if (s.current) {
        d.current();
        const h = Cu(s.current);
        h.length && nf(y === "start" ? h : h.reverse());
      }
    }, []), g = f.useCallback(() => {
      if (s.current) {
        const y = Cu(s.current);
        y.length && (d.current = Q2(y));
      }
    }, []);
    return /* @__PURE__ */ u.jsx(
      V2,
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
k_.displayName = j_;
var Su = "NavigationMenuTrigger", I_ = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = qe(Su, e.__scopeNavigationMenu), i = D_(Su, e.__scopeNavigationMenu), s = f.useRef(null), c = ne(s, i.triggerRef, t), l = V_(a.baseId, i.value), d = z_(a.baseId, i.value), p = f.useRef(!1), m = f.useRef(!1), g = i.value === a.value;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(Jd.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ u.jsx(H_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": of(g),
        "aria-expanded": g,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: L(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: L(
          e.onPointerMove,
          Xo(() => {
            n || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: L(
          e.onPointerLeave,
          Xo(() => {
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
        R_,
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
I_.displayName = Su;
var z2 = "NavigationMenuLink", ng = "navigationMenu.linkSelect", L_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ u.jsx(H_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      H.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: L(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(ng, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(ng, (l) => o?.(l), { once: !0 }), an(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(Ro, {
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
L_.displayName = z2;
var tf = "NavigationMenuIndicator", $_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = qe(tf, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? fg.createPortal(
    /* @__PURE__ */ u.jsx(he, { present: r || a, children: /* @__PURE__ */ u.jsx(G2, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
$_.displayName = tf;
var G2 = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = qe(tf, r), a = N_(r), [i, s] = f.useState(
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
  return Pu(i, m), Pu(o.indicatorTrack, m), c ? /* @__PURE__ */ u.jsx(
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
}), Ar = "NavigationMenuContent", F_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = qe(Ar, e.__scopeNavigationMenu), a = D_(Ar, e.__scopeNavigationMenu), i = ne(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ u.jsx(U2, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ u.jsx(he, { present: r || s, children: /* @__PURE__ */ u.jsx(
    q_,
    {
      "data-state": of(s),
      ...c,
      ref: i,
      onPointerEnter: L(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: L(
        e.onPointerLeave,
        Xo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
F_.displayName = Ar;
var U2 = f.forwardRef((e, t) => {
  const r = qe(Ar, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return me(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), me(() => () => o(e.value), [e.value, o]), null;
}), Ro = "navigationMenu.rootContentDismiss", q_ = f.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, d = qe(Ar, r), p = f.useRef(null), m = ne(p, t), g = V_(d.baseId, n), y = z_(d.baseId, n), h = N_(r), v = f.useRef(null), { onItemDismiss: b } = d;
  f.useEffect(() => {
    const w = p.current;
    if (d.isRootMenu && w) {
      const _ = () => {
        b(), s(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(Ro, _), () => w.removeEventListener(Ro, _);
    }
  }, [d.isRootMenu, e.value, o, b, s]);
  const x = f.useMemo(() => {
    const _ = h().map((I) => I.value);
    d.dir === "rtl" && _.reverse();
    const S = _.indexOf(d.value), C = _.indexOf(d.previousValue), P = n === d.value, E = C === _.indexOf(n);
    if (!P && !E) return v.current;
    const R = (() => {
      if (S !== C) {
        if (P && C !== -1) return S > C ? "from-end" : "from-start";
        if (E && S !== -1) return S > C ? "to-start" : "to-end";
      }
      return null;
    })();
    return v.current = R, R;
  }, [d.previousValue, d.value, d.dir, h, n]);
  return /* @__PURE__ */ u.jsx(W_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
    Ot,
    {
      id: y,
      "aria-labelledby": g,
      "data-motion": x,
      "data-orientation": d.orientation,
      ...l,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const w = new Event(Ro, {
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
          const C = Cu(w.currentTarget), P = document.activeElement, E = C.findIndex((j) => j === P), I = w.shiftKey ? C.slice(0, E).reverse() : C.slice(E + 1, C.length);
          nf(I) ? w.preventDefault() : a.current?.focus();
        }
      }),
      onEscapeKeyDown: L(e.onEscapeKeyDown, (w) => {
        i.current = !0;
      })
    }
  ) });
}), rf = "NavigationMenuViewport", B_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!qe(rf, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ u.jsx(he, { present: r || a, children: /* @__PURE__ */ u.jsx(K2, { ...n, ref: t }) });
});
B_.displayName = rf;
var K2 = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = qe(rf, r), i = ne(t, a.onViewportChange), s = W2(
    Ar,
    e.__scopeNavigationMenu
  ), [c, l] = f.useState(null), [d, p] = f.useState(null), m = c ? c?.width + "px" : void 0, g = c ? c?.height + "px" : void 0, y = !!a.value, h = y ? a.value : a.previousValue;
  return Pu(d, () => {
    d && l({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ u.jsx(
    H.div,
    {
      "data-state": of(y),
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
      onPointerLeave: L(e.onPointerLeave, Xo(a.onContentLeave)),
      children: Array.from(s.items).map(([b, { ref: x, forceMount: w, ..._ }]) => {
        const S = h === b;
        return /* @__PURE__ */ u.jsx(he, { present: w || S, children: /* @__PURE__ */ u.jsx(
          q_,
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
}), Y2 = "FocusGroup", W_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = qe(Y2, r);
    return /* @__PURE__ */ u.jsx(wu.Provider, { scope: r, children: /* @__PURE__ */ u.jsx(wu.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(H.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), og = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], X2 = "FocusGroupItem", H_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = $2(r), a = qe(X2, r);
    return /* @__PURE__ */ u.jsx(wu.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        ...n,
        ref: t,
        onKeyDown: L(e.onKeyDown, (i) => {
          if (["Home", "End", ...og].includes(i.key)) {
            let c = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), og.includes(i.key)) {
              const p = c.indexOf(i.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => nf(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function Cu(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function nf(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function Q2(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function Pu(e, t) {
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
function of(e) {
  return e ? "open" : "closed";
}
function V_(e, t) {
  return `${e}-trigger-${t}`;
}
function z_(e, t) {
  return `${e}-content-${t}`;
}
function Xo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var G_ = T_, U_ = O_, Z2 = k_, K_ = I_, J2 = L_, Y_ = $_, X_ = F_, Q_ = B_;
const eq = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  G_,
  {
    ref: n,
    className: T(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(Z_, {})
    ]
  }
));
eq.displayName = G_.displayName;
const tq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  U_,
  {
    ref: r,
    className: T(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
tq.displayName = U_.displayName;
const O4 = Z2, rq = ct(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), nq = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  K_,
  {
    ref: n,
    className: T(rq(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ u.jsx(
        Nt,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
nq.displayName = K_.displayName;
const oq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  X_,
  {
    ref: r,
    className: T(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
oq.displayName = X_.displayName;
const aq = J2, Z_ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: T("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ u.jsx(
  Q_,
  {
    className: T(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
Z_.displayName = Q_.displayName;
const iq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Y_,
  {
    ref: r,
    className: T(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
iq.displayName = Y_.displayName;
const sq = Q.forwardRef(({ className: e, title: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(aq, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
  "a",
  {
    ref: o,
    className: T(
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
sq.displayName = "ListItem";
function cq({
  value: e,
  mask: t,
  onChange: r,
  ...n
}) {
  const o = t.split("#").length - 1, a = t.split("A").length - 1, i = t.split("*").length - 1, s = o + a + i;
  function c(l) {
    const p = l.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, s);
    r(p);
  }
  return /* @__PURE__ */ u.jsx(
    Zd,
    {
      value: wb(e, t),
      onChange: c,
      ...n
    }
  );
}
const lq = (e, t = 300) => {
  const [r, n] = Ne(e);
  return je(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, ag = ct(
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
), uq = f.forwardRef(
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
    const [h, v] = f.useState(n), [b, x] = f.useState(!1), [w, _] = f.useState(!1), [S, C] = f.useState(""), P = lq(S, 300);
    je(() => {
      d && d(P ?? "");
    }, [P]);
    const E = (M) => {
      if (M.key === "Enter")
        x(!0);
      else if (M.key === "Backspace" && !M.currentTarget.value) {
        const $ = [...h];
        $.pop(), v($), t($);
      }
    }, R = (M) => {
      const $ = h.includes(M) ? h.filter((F) => F !== M) : [...h, M];
      v($), t($);
    }, I = () => {
      v([]), t([]);
    }, j = () => {
      x((M) => !M);
    }, V = () => {
      const M = h.slice(0, i);
      v(M), t(M);
    }, q = () => {
      if (h.length === e.length)
        I();
      else {
        const M = e.map(($) => $.value);
        v(M), t(M);
      }
    };
    return /* @__PURE__ */ u.jsxs(
      Gn,
      {
        open: b,
        onOpenChange: x,
        modal: s,
        children: [
          /* @__PURE__ */ u.jsx(Un, { asChild: !0, children: /* @__PURE__ */ u.jsx(
            jt,
            {
              ref: y,
              ...g,
              onClick: j,
              variant: "outline",
              className: T(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, i).map((M) => {
                    const $ = e.find((D) => D.value === M), F = $?.icon;
                    return /* @__PURE__ */ u.jsxs(
                      np,
                      {
                        className: T(
                          w ? "animate-bounce" : "",
                          ag({ variant: r })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          F && /* @__PURE__ */ u.jsx(F, { className: "h-4 w-4 mr-2" }),
                          $?.label,
                          /* @__PURE__ */ u.jsx(
                            Df,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (D) => {
                                D.stopPropagation(), R(M);
                              }
                            }
                          )
                        ]
                      },
                      M
                    );
                  }),
                  h.length > i && /* @__PURE__ */ u.jsxs(
                    np,
                    {
                      className: T(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        ag({ variant: r })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - i}`,
                        /* @__PURE__ */ u.jsx(
                          Df,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (M) => {
                              M.stopPropagation(), V();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
                  p && /* @__PURE__ */ u.jsx(sn, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ u.jsx(
                    ca,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (M) => {
                        M.stopPropagation(), I();
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    pC,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ u.jsx(Nt, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ u.jsx(Nt, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ u.jsx(
            Hr,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => x(!1),
              children: /* @__PURE__ */ u.jsxs(qn, { shouldFilter: !d, children: [
                /* @__PURE__ */ u.jsx(
                  Ma,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: E,
                    onValueChange: C
                  }
                ),
                /* @__PURE__ */ u.jsxs(Aa, { children: [
                  !p && /* @__PURE__ */ u.jsx(Oa, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ u.jsxs(Bn, { children: [
                    !p && !e.length && !!S.length && m && /* @__PURE__ */ u.jsx(
                      Ut,
                      {
                        onSelect: m,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ u.jsx(UP, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ u.jsx("b", { children: S })
                        ] })
                      },
                      "new"
                    ),
                    p && /* @__PURE__ */ u.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ u.jsx(sn, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !l && /* @__PURE__ */ u.jsxs(
                      Ut,
                      {
                        onSelect: q,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              className: T(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ u.jsx(Kt, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ u.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((M) => {
                      const $ = h.includes(M.value);
                      return /* @__PURE__ */ u.jsxs(
                        Ut,
                        {
                          onSelect: () => R(M.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ u.jsx(
                              "div",
                              {
                                className: T(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  $ ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ u.jsx(Kt, { className: "h-4 w-4" })
                              }
                            ),
                            M.icon && /* @__PURE__ */ u.jsx(M.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ u.jsx("span", { children: M.label })
                          ]
                        },
                        M.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ u.jsx(Ax, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ u.jsx(
            QP,
            {
              className: T(
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
uq.displayName = "MultiSelect";
const dq = ({ className: e, ...t }) => /* @__PURE__ */ u.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: T("mx-auto flex w-full justify-center", e),
    ...t
  }
);
dq.displayName = "Pagination";
const fq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "ul",
  {
    ref: r,
    className: T("flex flex-row items-center gap-1", e),
    ...t
  }
));
fq.displayName = "PaginationContent";
const pq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("li", { ref: r, className: T("", e), ...t }));
pq.displayName = "PaginationItem";
const af = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...n
}) => /* @__PURE__ */ u.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: T(
      gt({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...n
  }
);
af.displayName = "PaginationLink";
const mq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  af,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: T("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(zu, { className: "h-4 w-4" })
  }
);
mq.displayName = "PaginationPrevious";
const hq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  af,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: T("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(En, { className: "h-4 w-4" })
  }
);
hq.displayName = "PaginationNext";
const vq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: T("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx($g, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
vq.displayName = "PaginationEllipsis";
var sf = "Radio", [gq, J_] = be(sf), [yq, bq] = gq(sf), eS = f.forwardRef(
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
    return /* @__PURE__ */ u.jsxs(yq, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ u.jsx(
        H.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": oS(o),
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
        nS,
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
eS.displayName = sf;
var tS = "RadioIndicator", rS = f.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = bq(tS, r);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.checked, children: /* @__PURE__ */ u.jsx(
      H.span,
      {
        "data-state": oS(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
rS.displayName = tS;
var xq = "RadioBubbleInput", nS = f.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = f.useRef(null), s = ne(i, a), c = $n(r), l = Ra(t);
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
nS.displayName = xq;
function oS(e) {
  return e ? "checked" : "unchecked";
}
var wq = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Qa = "RadioGroup", [_q, j4] = be(Qa, [
  Lt,
  J_
]), aS = Lt(), iS = J_(), [Sq, Cq] = _q(Qa), sS = f.forwardRef(
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
    } = e, g = aS(r), y = xt(l), [h, v] = xe({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: Qa
    });
    return /* @__PURE__ */ u.jsx(
      Sq,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: h,
        onValueChange: v,
        children: /* @__PURE__ */ u.jsx(
          Ba,
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
sS.displayName = Qa;
var cS = "RadioGroupItem", lS = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = Cq(cS, r), i = a.disabled || n, s = aS(r), c = iS(r), l = f.useRef(null), d = ne(t, l), p = a.value === o.value, m = f.useRef(!1);
    return f.useEffect(() => {
      const g = (h) => {
        wq.includes(h.key) && (m.current = !0);
      }, y = () => m.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ u.jsx(
      Wa,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ u.jsx(
          eS,
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
lS.displayName = cS;
var Pq = "RadioGroupIndicator", uS = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = iS(r);
    return /* @__PURE__ */ u.jsx(rS, { ...o, ...n, ref: t });
  }
);
uS.displayName = Pq;
var dS = sS, fS = lS, Eq = uS;
const Rq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  dS,
  {
    className: T("grid gap-2", e),
    ...t,
    ref: r
  }
));
Rq.displayName = dS.displayName;
const Nq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  fS,
  {
    ref: r,
    className: T(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Eq, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(Lg, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Nq.displayName = fS.displayName;
function Eu(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Tq(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var cf = "ScrollArea", [pS, D4] = be(cf), [Mq, Be] = pS(cf), mS = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = f.useState(null), [l, d] = f.useState(null), [p, m] = f.useState(null), [g, y] = f.useState(null), [h, v] = f.useState(null), [b, x] = f.useState(0), [w, _] = f.useState(0), [S, C] = f.useState(!1), [P, E] = f.useState(!1), R = ne(t, (j) => c(j)), I = xt(o);
    return /* @__PURE__ */ u.jsx(
      Mq,
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
            ref: R,
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
mS.displayName = cf;
var hS = "ScrollAreaViewport", vS = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = Be(hS, r), s = f.useRef(null), c = ne(t, s, i.onViewportChange);
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
vS.displayName = hS;
var ft = "ScrollAreaScrollbar", lf = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Be(ft, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return f.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ u.jsx(Aq, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ u.jsx(Oq, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ u.jsx(gS, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ u.jsx(uf, { ...n, ref: t }) : null;
  }
);
lf.displayName = ft;
var Aq = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Be(ft, e.__scopeScrollArea), [a, i] = f.useState(!1);
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
    gS,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), Oq = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Be(ft, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Ja(() => c("SCROLL_END"), 100), [s, c] = Tq("hidden", {
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
    uf,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: L(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: L(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), gS = f.forwardRef((e, t) => {
  const r = Be(ft, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = f.useState(!1), s = e.orientation === "horizontal", c = Ja(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? l : d);
    }
  }, 10);
  return Or(r.viewport, c), Or(r.content, c), /* @__PURE__ */ u.jsx(he, { present: n || a, children: /* @__PURE__ */ u.jsx(
    uf,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), uf = f.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = Be(ft, e.__scopeScrollArea), a = f.useRef(null), i = f.useRef(0), [s, c] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = _S(s.viewport, s.content), d = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, g) {
    return $q(m, i.current, s, g);
  }
  return r === "horizontal" ? /* @__PURE__ */ u.jsx(
    jq,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, g = ig(m, s, o.dir);
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
    Dq,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, g = ig(m, s);
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
}), jq = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Be(ft, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ne(t, c, a.onScrollbarXChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    bS,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Za(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), CS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Zo(i.paddingLeft),
            paddingEnd: Zo(i.paddingRight)
          }
        });
      }
    }
  );
}), Dq = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Be(ft, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ne(t, c, a.onScrollbarYChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    bS,
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
        "--radix-scroll-area-thumb-height": Za(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), CS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Zo(i.paddingTop),
            paddingEnd: Zo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [kq, yS] = pS(ft), bS = f.forwardRef((e, t) => {
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
  } = e, g = Be(ft, r), [y, h] = f.useState(null), v = ne(t, (R) => h(R)), b = f.useRef(null), x = f.useRef(""), w = g.viewport, _ = n.content - n.viewport, S = ue(d), C = ue(c), P = Ja(p, 10);
  function E(R) {
    if (b.current) {
      const I = R.clientX - b.current.left, j = R.clientY - b.current.top;
      l({ x: I, y: j });
    }
  }
  return f.useEffect(() => {
    const R = (I) => {
      const j = I.target;
      y?.contains(j) && S(I, _);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [w, y, _, S]), f.useEffect(C, [n, C]), Or(y, P), Or(g.content, P), /* @__PURE__ */ u.jsx(
    kq,
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
          onPointerDown: L(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), b.current = y.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), E(R));
          }),
          onPointerMove: L(e.onPointerMove, E),
          onPointerUp: L(e.onPointerUp, (R) => {
            const I = R.target;
            I.hasPointerCapture(R.pointerId) && I.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = x.current, g.viewport && (g.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), Qo = "ScrollAreaThumb", xS = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = yS(Qo, e.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(he, { present: r || o.hasThumb, children: /* @__PURE__ */ u.jsx(Iq, { ref: t, ...n }) });
  }
), Iq = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = Be(Qo, r), i = yS(Qo, r), { onThumbPositionChange: s } = i, c = ne(
      t,
      (p) => i.onThumbChange(p)
    ), l = f.useRef(void 0), d = Ja(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (d(), !l.current) {
            const g = Fq(p, s);
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
xS.displayName = Qo;
var df = "ScrollAreaCorner", wS = f.forwardRef(
  (e, t) => {
    const r = Be(df, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ u.jsx(Lq, { ...e, ref: t }) : null;
  }
);
wS.displayName = df;
var Lq = f.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = Be(df, r), [a, i] = f.useState(0), [s, c] = f.useState(0), l = !!(a && s);
  return Or(o.scrollbarX, () => {
    const d = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(d), c(d);
  }), Or(o.scrollbarY, () => {
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
function Zo(e) {
  return e ? parseInt(e, 10) : 0;
}
function _S(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Za(e) {
  const t = _S(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function $q(e, t, r, n = "ltr") {
  const o = Za(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, d = r.content - r.viewport, p = n === "ltr" ? [0, d] : [d * -1, 0];
  return SS([c, l], p)(e);
}
function ig(e, t, r = "ltr") {
  const n = Za(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], l = Eu(e, c);
  return SS([0, i], [0, s])(l);
}
function SS(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function CS(e, t) {
  return e > 0 && e < t;
}
var Fq = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(n);
};
function Ja(e, t) {
  const r = ue(e), n = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(n.current), []), f.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Or(e, t) {
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
var PS = mS, qq = vS, Bq = wS;
const Wq = Q.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  PS,
  {
    ref: n,
    className: T("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(qq, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(ES, {}),
      /* @__PURE__ */ u.jsx(Bq, {})
    ]
  }
));
Wq.displayName = PS.displayName;
const ES = Q.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ u.jsx(
  lf,
  {
    ref: n,
    orientation: t,
    className: T(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ u.jsx(xS, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
ES.displayName = lf.displayName;
var Hq = [" ", "Enter", "ArrowUp", "ArrowDown"], Vq = [" ", "Enter"], er = "Select", [ei, ti, zq] = or(er), [Vr, k4] = be(er, [
  zq,
  kt
]), ri = kt(), [Gq, Ft] = Vr(er), [Uq, Kq] = Vr(er), RS = (e) => {
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
  } = e, h = ri(t), [v, b] = f.useState(null), [x, w] = f.useState(null), [_, S] = f.useState(!1), C = xt(l), [P, E] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: er
  }), [R, I] = xe({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: er
  }), j = f.useRef(null), V = v ? y || !!v.closest("form") : !0, [q, M] = f.useState(/* @__PURE__ */ new Set()), $ = Array.from(q).map((F) => F.props.value).join(";");
  return /* @__PURE__ */ u.jsx(Hn, { ...h, children: /* @__PURE__ */ u.jsxs(
    Gq,
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
      value: R,
      onValueChange: I,
      open: P,
      onOpenChange: E,
      dir: C,
      triggerPointerDownPosRef: j,
      disabled: m,
      children: [
        /* @__PURE__ */ u.jsx(ei.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          Uq,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((F) => {
              M((D) => new Set(D).add(F));
            }, []),
            onNativeOptionRemove: f.useCallback((F) => {
              M((D) => {
                const N = new Set(D);
                return N.delete(F), N;
              });
            }, []),
            children: r
          }
        ) }),
        V ? /* @__PURE__ */ u.jsxs(
          ZS,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: d,
            autoComplete: p,
            value: R,
            onChange: (F) => I(F.target.value),
            disabled: m,
            form: y,
            children: [
              R === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(q)
            ]
          },
          $
        ) : null
      ]
    }
  ) });
};
RS.displayName = er;
var NS = "SelectTrigger", TS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = ri(r), i = Ft(NS, r), s = i.disabled || n, c = ne(t, i.onTriggerChange), l = ti(r), d = f.useRef("touch"), [p, m, g] = eC((h) => {
      const v = l().filter((w) => !w.disabled), b = v.find((w) => w.value === i.value), x = tC(v, h, b);
      x !== void 0 && i.onValueChange(x.value);
    }), y = (h) => {
      s || (i.onOpenChange(!0), g()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(Vn, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
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
        "data-placeholder": JS(i.value) ? "" : void 0,
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
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && Hq.includes(h.key) && (y(), h.preventDefault());
        })
      }
    ) });
  }
);
TS.displayName = NS;
var MS = "SelectValue", AS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = Ft(MS, r), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, p = ne(t, c.onValueNodeChange);
    return me(() => {
      l(d);
    }, [l, d]), /* @__PURE__ */ u.jsx(
      H.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: JS(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: i }) : a
      }
    );
  }
);
AS.displayName = MS;
var Yq = "SelectIcon", OS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(H.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
OS.displayName = Yq;
var Xq = "SelectPortal", jS = (e) => /* @__PURE__ */ u.jsx(ar, { asChild: !0, ...e });
jS.displayName = Xq;
var tr = "SelectContent", DS = f.forwardRef(
  (e, t) => {
    const r = Ft(tr, e.__scopeSelect), [n, o] = f.useState();
    if (me(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? Cn.createPortal(
        /* @__PURE__ */ u.jsx(kS, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(ei.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(IS, { ...e, ref: t });
  }
);
DS.displayName = tr;
var We = 10, [kS, qt] = Vr(tr), Qq = "SelectContentImpl", Zq = /* @__PURE__ */ Rt("SelectContent.RemoveScroll"), IS = f.forwardRef(
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
    } = e, x = Ft(tr, r), [w, _] = f.useState(null), [S, C] = f.useState(null), P = ne(t, (k) => _(k)), [E, R] = f.useState(null), [I, j] = f.useState(
      null
    ), V = ti(r), [q, M] = f.useState(!1), $ = f.useRef(!1);
    f.useEffect(() => {
      if (w) return da(w);
    }, [w]), la();
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
    const { onOpenChange: N, triggerPointerDownPosRef: W } = x;
    f.useEffect(() => {
      if (w) {
        let k = { x: 0, y: 0 };
        const X = (oe) => {
          k = {
            x: Math.abs(Math.round(oe.pageX) - (W.current?.x ?? 0)),
            y: Math.abs(Math.round(oe.pageY) - (W.current?.y ?? 0))
          };
        }, re = (oe) => {
          k.x <= 10 && k.y <= 10 ? oe.preventDefault() : w.contains(oe.target) || N(!1), document.removeEventListener("pointermove", X), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [w, N, W]), f.useEffect(() => {
      const k = () => N(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [N]);
    const [O, z] = eC((k) => {
      const X = V().filter((te) => !te.disabled), re = X.find((te) => te.ref.current === document.activeElement), oe = tC(X, k, re);
      oe && setTimeout(() => oe.ref.current.focus());
    }), A = f.useCallback(
      (k, X, re) => {
        const oe = !$.current && !re;
        (x.value !== void 0 && x.value === X || oe) && (R(k), oe && ($.current = !0));
      },
      [x.value]
    ), B = f.useCallback(() => w?.focus(), [w]), K = f.useCallback(
      (k, X, re) => {
        const oe = !$.current && !re;
        (x.value !== void 0 && x.value === X || oe) && j(k);
      },
      [x.value]
    ), G = n === "popper" ? Ru : LS, ee = G === Ru ? {
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
      kS,
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
        children: /* @__PURE__ */ u.jsx(Nn, { as: Zq, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          Rn,
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
              Ot,
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
                    onPlaced: () => M(!0),
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
IS.displayName = Qq;
var Jq = "SelectItemAlignedPosition", LS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = Ft(tr, r), i = qt(tr, r), [s, c] = f.useState(null), [l, d] = f.useState(null), p = ne(t, (P) => d(P)), m = ti(r), g = f.useRef(!1), y = f.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: b, focusSelectedItem: x } = i, w = f.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && v && b) {
      const P = a.trigger.getBoundingClientRect(), E = l.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), I = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const te = I.left - E.left, U = R.left - te, ie = P.left - U, Y = P.width + ie, ge = Math.max(Y, E.width), we = window.innerWidth - We, Pe = Eu(U, [
          We,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(We, we - ge)
        ]);
        s.style.minWidth = Y + "px", s.style.left = Pe + "px";
      } else {
        const te = E.right - I.right, U = window.innerWidth - R.right - te, ie = window.innerWidth - P.right - U, Y = P.width + ie, ge = Math.max(Y, E.width), we = window.innerWidth - We, Pe = Eu(U, [
          We,
          Math.max(We, we - ge)
        ]);
        s.style.minWidth = Y + "px", s.style.right = Pe + "px";
      }
      const j = m(), V = window.innerHeight - We * 2, q = h.scrollHeight, M = window.getComputedStyle(l), $ = parseInt(M.borderTopWidth, 10), F = parseInt(M.paddingTop, 10), D = parseInt(M.borderBottomWidth, 10), N = parseInt(M.paddingBottom, 10), W = $ + F + q + N + D, O = Math.min(v.offsetHeight * 5, W), z = window.getComputedStyle(h), A = parseInt(z.paddingTop, 10), B = parseInt(z.paddingBottom, 10), K = P.top + P.height / 2 - We, G = V - K, ee = v.offsetHeight / 2, k = v.offsetTop + ee, X = $ + F + k, re = W - X;
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
      s.style.margin = `${We}px 0`, s.style.minHeight = O + "px", s.style.maxHeight = V + "px", n?.(), requestAnimationFrame(() => g.current = !0);
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
    tB,
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
LS.displayName = Jq;
var eB = "SelectPopperPosition", Ru = f.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = We,
    ...a
  } = e, i = ri(r);
  return /* @__PURE__ */ u.jsx(
    La,
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
Ru.displayName = eB;
var [tB, ff] = Vr(tr, {}), Nu = "SelectViewport", $S = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = qt(Nu, r), i = ff(Nu, r), s = ne(t, a.onViewportChange), c = f.useRef(0);
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
      /* @__PURE__ */ u.jsx(ei.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
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
                const y = window.innerHeight - We * 2, h = parseFloat(p.style.minHeight), v = parseFloat(p.style.height), b = Math.max(h, v);
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
$S.displayName = Nu;
var FS = "SelectGroup", [rB, nB] = Vr(FS), qS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ve();
    return /* @__PURE__ */ u.jsx(rB, { scope: r, id: o, children: /* @__PURE__ */ u.jsx(H.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
qS.displayName = FS;
var BS = "SelectLabel", WS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = nB(BS, r);
    return /* @__PURE__ */ u.jsx(H.div, { id: o.id, ...n, ref: t });
  }
);
WS.displayName = BS;
var Jo = "SelectItem", [oB, HS] = Vr(Jo), VS = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Ft(Jo, r), c = qt(Jo, r), l = s.value === n, [d, p] = f.useState(a ?? ""), [m, g] = f.useState(!1), y = ne(
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
      oB,
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
          ei.ItemSlot,
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
                  c.searchRef?.current !== "" && x.key === " " || (Vq.includes(x.key) && b(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
VS.displayName = Jo;
var tn = "SelectItemText", zS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = Ft(tn, r), s = qt(tn, r), c = HS(tn, r), l = Kq(tn, r), [d, p] = f.useState(null), m = ne(
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
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Cn.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
zS.displayName = tn;
var GS = "SelectItemIndicator", US = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return HS(GS, r).isSelected ? /* @__PURE__ */ u.jsx(H.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
US.displayName = GS;
var Tu = "SelectScrollUpButton", KS = f.forwardRef((e, t) => {
  const r = qt(Tu, e.__scopeSelect), n = ff(Tu, e.__scopeSelect), [o, a] = f.useState(!1), i = ne(t, n.onScrollButtonChange);
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
    XS,
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
KS.displayName = Tu;
var Mu = "SelectScrollDownButton", YS = f.forwardRef((e, t) => {
  const r = qt(Mu, e.__scopeSelect), n = ff(Mu, e.__scopeSelect), [o, a] = f.useState(!1), i = ne(t, n.onScrollButtonChange);
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
    XS,
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
YS.displayName = Mu;
var XS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = qt("SelectScrollButton", r), i = f.useRef(null), s = ti(r), c = f.useCallback(() => {
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
}), aB = "SelectSeparator", QS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
QS.displayName = aB;
var Au = "SelectArrow", iB = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ri(r), a = Ft(Au, r), i = qt(Au, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ u.jsx($a, { ...o, ...n, ref: t }) : null;
  }
);
iB.displayName = Au;
var sB = "SelectBubbleInput", ZS = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = f.useRef(null), a = ne(n, o), i = $n(t);
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
        style: { ...E_, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
ZS.displayName = sB;
function JS(e) {
  return e === "" || e === void 0;
}
function eC(e) {
  const t = ue(e), r = f.useRef(""), n = f.useRef(0), o = f.useCallback(
    (i) => {
      const s = r.current + i;
      t(s), (function c(l) {
        r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [t]
  ), a = f.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a];
}
function tC(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = cB(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function cB(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var lB = RS, rC = TS, uB = AS, dB = OS, fB = jS, nC = DS, pB = $S, mB = qS, oC = WS, aC = VS, hB = zS, vB = US, iC = KS, sC = YS, cC = QS;
const ea = lB, I4 = mB, ta = uB, wn = f.forwardRef(({ className: e, children: t, isLoading: r = !1, ...n }, o) => /* @__PURE__ */ u.jsxs(
  rC,
  {
    ref: o,
    className: T(
      "flex h-9 w-full items-center justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
        r && /* @__PURE__ */ u.jsx(sn, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ u.jsx(dB, { asChild: !0, children: /* @__PURE__ */ u.jsx(Nt, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
wn.displayName = rC.displayName;
const lC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  iC,
  {
    ref: r,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx($P, { className: "h-4 w-4" })
  }
));
lC.displayName = iC.displayName;
const uC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  sC,
  {
    ref: r,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Nt, { className: "h-4 w-4" })
  }
));
uC.displayName = sC.displayName;
const _n = f.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ u.jsx(fB, { children: /* @__PURE__ */ u.jsxs(
  nC,
  {
    ref: o,
    className: T(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx(lC, {}),
      /* @__PURE__ */ u.jsx(
        pB,
        {
          className: T(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(uC, {})
    ]
  }
) }));
_n.displayName = nC.displayName;
const gB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  oC,
  {
    ref: r,
    className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
gB.displayName = oC.displayName;
const jr = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  aC,
  {
    ref: n,
    className: T(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(vB, { children: /* @__PURE__ */ u.jsx(Kt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(hB, { children: t })
    ]
  }
));
jr.displayName = aC.displayName;
const yB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  cC,
  {
    ref: r,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
yB.displayName = cC.displayName;
const L4 = ({
  name: e,
  label: t,
  placeholder: r,
  options: n,
  helpText: o,
  isLoading: a,
  ...i
}) => {
  const s = Pn();
  return /* @__PURE__ */ u.jsx(
    Ga,
    {
      control: s.control,
      name: e,
      render: ({ field: c }) => /* @__PURE__ */ u.jsxs(Zn, { children: [
        !!t && /* @__PURE__ */ u.jsx(Ka, { children: t }),
        /* @__PURE__ */ u.jsxs(
          ea,
          {
            onValueChange: c.onChange,
            value: c.value,
            defaultValue: c.value,
            ...i,
            children: [
              /* @__PURE__ */ u.jsx(Ya, { children: /* @__PURE__ */ u.jsx(wn, { isLoading: a, children: /* @__PURE__ */ u.jsx(ta, { placeholder: r }) }) }),
              /* @__PURE__ */ u.jsx(_n, { children: n.map((l) => /* @__PURE__ */ u.jsx(jr, { value: l.value, children: l.label }, l.value)) })
            ]
          }
        ),
        !!o && /* @__PURE__ */ u.jsx(P_, { children: o }),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
};
var bB = "Separator", sg = "horizontal", xB = ["horizontal", "vertical"], dC = f.forwardRef((e, t) => {
  const { decorative: r, orientation: n = sg, ...o } = e, a = wB(n) ? n : sg, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
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
dC.displayName = bB;
function wB(e) {
  return xB.includes(e);
}
var fC = dC;
const pC = f.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ u.jsx(
    fC,
    {
      ref: o,
      decorative: r,
      orientation: t,
      className: T(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...n
    }
  )
);
pC.displayName = fC.displayName;
const $4 = pa, F4 = Xu, q4 = Fr, _B = ma, mC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Lr,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
mC.displayName = Lr.displayName;
const SB = ct(
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
), CB = f.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(_B, { children: [
  /* @__PURE__ */ u.jsx(mC, {}),
  /* @__PURE__ */ u.jsxs(
    $r,
    {
      ref: o,
      className: T(SB({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ u.jsxs(Fr, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ u.jsx(ca, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
CB.displayName = $r.displayName;
const PB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
PB.displayName = "SheetHeader";
const EB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
EB.displayName = "SheetFooter";
const RB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Tn,
  {
    ref: r,
    className: T("text-lg font-semibold text-foreground", e),
    ...t
  }
));
RB.displayName = Tn.displayName;
const NB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Mn,
  {
    ref: r,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
NB.displayName = Mn.displayName;
function TB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: T("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var ni = "Switch", [MB, B4] = be(ni), [AB, OB] = MB(ni), hC = f.forwardRef(
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
      caller: ni
    });
    return /* @__PURE__ */ u.jsxs(AB, { scope: r, checked: b, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        H.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": i,
          "data-state": bC(b),
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
        yC,
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
hC.displayName = ni;
var vC = "SwitchThumb", gC = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = OB(vC, r);
    return /* @__PURE__ */ u.jsx(
      H.span,
      {
        "data-state": bC(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
gC.displayName = vC;
var jB = "SwitchBubbleInput", yC = f.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = f.useRef(null), s = ne(i, a), c = $n(r), l = Ra(t);
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
yC.displayName = jB;
function bC(e) {
  return e ? "checked" : "unchecked";
}
var xC = hC, DB = gC;
const kB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  xC,
  {
    className: T(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ u.jsx(
      DB,
      {
        className: T(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
kB.displayName = xC.displayName;
const IB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ u.jsx(
  "table",
  {
    ref: r,
    className: T("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
IB.displayName = "Table";
const LB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "thead",
  {
    ref: r,
    className: T("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
LB.displayName = "TableHeader";
const $B = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tbody",
  {
    ref: r,
    className: T("[&_tr:last-child]:border-0", e),
    ...t
  }
));
$B.displayName = "TableBody";
const FB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tfoot",
  {
    ref: r,
    className: T(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
FB.displayName = "TableFooter";
const qB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tr",
  {
    ref: r,
    className: T(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
qB.displayName = "TableRow";
const BB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "th",
  {
    ref: r,
    className: T(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
BB.displayName = "TableHead";
const WB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: r,
    className: T(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
WB.displayName = "TableCell";
const HB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: r,
    className: T("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
HB.displayName = "TableCaption";
var oi = "Tabs", [VB, W4] = be(oi, [
  Lt
]), wC = Lt(), [zB, pf] = VB(oi), _C = f.forwardRef(
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
      caller: oi
    });
    return /* @__PURE__ */ u.jsx(
      zB,
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
_C.displayName = oi;
var SC = "TabsList", CC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = pf(SC, r), i = wC(r);
    return /* @__PURE__ */ u.jsx(
      Ba,
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
CC.displayName = SC;
var PC = "TabsTrigger", EC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = pf(PC, r), s = wC(r), c = TC(i.baseId, n), l = MC(i.baseId, n), d = n === i.value;
    return /* @__PURE__ */ u.jsx(
      Wa,
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
EC.displayName = PC;
var RC = "TabsContent", NC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = pf(RC, r), c = TC(s.baseId, n), l = MC(s.baseId, n), d = n === s.value, p = f.useRef(d);
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
NC.displayName = RC;
function TC(e, t) {
  return `${e}-trigger-${t}`;
}
function MC(e, t) {
  return `${e}-content-${t}`;
}
var GB = _C, AC = CC, OC = EC, jC = NC;
const H4 = GB, UB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  AC,
  {
    ref: r,
    className: T(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
UB.displayName = AC.displayName;
const KB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  OC,
  {
    ref: r,
    className: T(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
KB.displayName = OC.displayName;
const YB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  jC,
  {
    ref: r,
    className: T(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
YB.displayName = jC.displayName;
const DC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "textarea",
  {
    className: T(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...t
  }
));
DC.displayName = "Textarea";
const XB = ({
  name: e,
  label: t,
  placeholder: r,
  ...n
}) => {
  const o = Pn();
  return /* @__PURE__ */ u.jsx(
    Ga,
    {
      control: o.control,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ u.jsxs(Zn, { children: [
        !!t && /* @__PURE__ */ u.jsx(Ka, { children: t }),
        /* @__PURE__ */ u.jsx(Ya, { children: /* @__PURE__ */ u.jsx(DC, { placeholder: r, ...n, ...a }) }),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
};
XB.displayName = "TextareaForm";
var mf = "ToastProvider", [hf, QB, ZB] = or("Toast"), [kC, V4] = be("Toast", [ZB]), [JB, ai] = kC(mf), IC = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = f.useState(null), [l, d] = f.useState(0), p = f.useRef(!1), m = f.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${mf}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u.jsx(hf.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
    JB,
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
IC.displayName = mf;
var LC = "ToastViewport", eW = ["F8"], Ou = "toast.viewportPause", ju = "toast.viewportResume", $C = f.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = eW,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = ai(LC, r), s = QB(r), c = f.useRef(null), l = f.useRef(null), d = f.useRef(null), p = f.useRef(null), m = ne(t, p, i.onViewportChange), g = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
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
            const C = new CustomEvent(Ou);
            b.dispatchEvent(C), i.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (i.isClosePausedRef.current) {
            const C = new CustomEvent(ju);
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
          const _ = w.ref.current, S = [_, ...pW(_)];
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
            const R = h({ tabbingDirection: C ? "backwards" : "forwards" }), I = R.findIndex((j) => j === S);
            Fl(R.slice(I + 1)) ? x.preventDefault() : C ? l.current?.focus() : d.current?.focus();
          }
        };
        return v.addEventListener("keydown", b), () => v.removeEventListener("keydown", b);
      }
    }, [s, h]), /* @__PURE__ */ u.jsxs(
      KE,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ u.jsx(
            Du,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "forwards"
                });
                Fl(v);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(hf.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(H.ol, { tabIndex: -1, ...a, ref: m }) }),
          y && /* @__PURE__ */ u.jsx(
            Du,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "backwards"
                });
                Fl(v);
              }
            }
          )
        ]
      }
    );
  }
);
$C.displayName = LC;
var FC = "ToastFocusProxy", Du = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = ai(FC, r);
    return /* @__PURE__ */ u.jsx(
      Xa,
      {
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
Du.displayName = FC;
var eo = "Toast", tW = "toast.swipeStart", rW = "toast.swipeMove", nW = "toast.swipeCancel", oW = "toast.swipeEnd", qC = f.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s, c] = xe({
      prop: n,
      defaultProp: o ?? !0,
      onChange: a,
      caller: eo
    });
    return /* @__PURE__ */ u.jsx(he, { present: r || s, children: /* @__PURE__ */ u.jsx(
      sW,
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
qC.displayName = eo;
var [aW, iW] = kC(eo, {
  onClose() {
  }
}), sW = f.forwardRef(
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
    } = e, h = ai(eo, r), [v, b] = f.useState(null), x = ne(t, (M) => b(M)), w = f.useRef(null), _ = f.useRef(null), S = o || h.duration, C = f.useRef(0), P = f.useRef(S), E = f.useRef(0), { onToastAdd: R, onToastRemove: I } = h, j = ue(() => {
      v?.contains(document.activeElement) && h.viewport?.focus(), i();
    }), V = f.useCallback(
      (M) => {
        !M || M === 1 / 0 || (window.clearTimeout(E.current), C.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(j, M));
      },
      [j]
    );
    f.useEffect(() => {
      const M = h.viewport;
      if (M) {
        const $ = () => {
          V(P.current), l?.();
        }, F = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - C.current;
          P.current = P.current - D, window.clearTimeout(E.current), c?.();
        };
        return M.addEventListener(Ou, F), M.addEventListener(ju, $), () => {
          M.removeEventListener(Ou, F), M.removeEventListener(ju, $);
        };
      }
    }, [h.viewport, S, c, l, V]), f.useEffect(() => {
      a && !h.isClosePausedRef.current && V(S);
    }, [a, S, h.isClosePausedRef, V]), f.useEffect(() => (R(), () => I()), [R, I]);
    const q = f.useMemo(() => v ? UC(v) : null, [v]);
    return h.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      q && /* @__PURE__ */ u.jsx(
        cW,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          children: q
        }
      ),
      /* @__PURE__ */ u.jsx(aW, { scope: r, onClose: j, children: Cn.createPortal(
        /* @__PURE__ */ u.jsx(hf.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
          UE,
          {
            asChild: !0,
            onEscapeKeyDown: L(s, () => {
              h.isFocusedToastEscapeKeyDownRef.current || j(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ u.jsx(
              H.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...y,
                ref: x,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: L(e.onKeyDown, (M) => {
                  M.key === "Escape" && (s?.(M.nativeEvent), M.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, j()));
                }),
                onPointerDown: L(e.onPointerDown, (M) => {
                  M.button === 0 && (w.current = { x: M.clientX, y: M.clientY });
                }),
                onPointerMove: L(e.onPointerMove, (M) => {
                  if (!w.current) return;
                  const $ = M.clientX - w.current.x, F = M.clientY - w.current.y, D = !!_.current, N = ["left", "right"].includes(h.swipeDirection), W = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, O = N ? W(0, $) : 0, z = N ? 0 : W(0, F), A = M.pointerType === "touch" ? 10 : 2, B = { x: O, y: z }, K = { originalEvent: M, delta: B };
                  D ? (_.current = B, xo(rW, p, K, {
                    discrete: !1
                  })) : cg(B, h.swipeDirection, A) ? (_.current = B, xo(tW, d, K, {
                    discrete: !1
                  }), M.target.setPointerCapture(M.pointerId)) : (Math.abs($) > A || Math.abs(F) > A) && (w.current = null);
                }),
                onPointerUp: L(e.onPointerUp, (M) => {
                  const $ = _.current, F = M.target;
                  if (F.hasPointerCapture(M.pointerId) && F.releasePointerCapture(M.pointerId), _.current = null, w.current = null, $) {
                    const D = M.currentTarget, N = { originalEvent: M, delta: $ };
                    cg($, h.swipeDirection, h.swipeThreshold) ? xo(oW, g, N, {
                      discrete: !0
                    }) : xo(
                      nW,
                      m,
                      N,
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
), cW = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = ai(eo, t), [a, i] = f.useState(!1), [s, c] = f.useState(!1);
  return dW(() => i(!0)), f.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ u.jsx(ar, { asChild: !0, children: /* @__PURE__ */ u.jsx(Xa, { ...n, children: a && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, lW = "ToastTitle", BC = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
BC.displayName = lW;
var uW = "ToastDescription", WC = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
WC.displayName = uW;
var HC = "ToastAction", VC = f.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ u.jsx(GC, { altText: r, asChild: !0, children: /* @__PURE__ */ u.jsx(vf, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${HC}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
VC.displayName = HC;
var zC = "ToastClose", vf = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = iW(zC, r);
    return /* @__PURE__ */ u.jsx(GC, { asChild: !0, children: /* @__PURE__ */ u.jsx(
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
vf.displayName = zC;
var GC = f.forwardRef((e, t) => {
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
function UC(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), fW(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...UC(n));
    }
  }), t;
}
function xo(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? an(o, a) : o.dispatchEvent(a);
}
var cg = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function dW(e = () => {
}) {
  const t = ue(e);
  me(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function fW(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function pW(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Fl(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var mW = IC, KC = $C, YC = qC, XC = BC, QC = WC, ZC = VC, JC = vf;
const hW = mW, vW = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, e0 = f.forwardRef(({ className: e, position: t = "bottom-right", ...r }, n) => /* @__PURE__ */ u.jsx(
  KC,
  {
    ref: n,
    className: T(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${vW[t]}`,
      e
    ),
    ...r
  }
));
e0.displayName = KC.displayName;
const gW = ct(
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
), t0 = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  YC,
  {
    ref: n,
    className: T(gW({ variant: t }), e),
    ...r
  }
));
t0.displayName = YC.displayName;
const yW = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  ZC,
  {
    ref: r,
    className: T(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
yW.displayName = ZC.displayName;
const r0 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  JC,
  {
    ref: r,
    className: T(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ u.jsx(ca, { className: "h-4 w-4" })
  }
));
r0.displayName = JC.displayName;
const n0 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  XC,
  {
    ref: r,
    className: T("text-sm font-semibold", e),
    ...t
  }
));
n0.displayName = XC.displayName;
const o0 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  QC,
  {
    ref: r,
    className: T("text-sm opacity-90", e),
    ...t
  }
));
o0.displayName = QC.displayName;
const bW = 1, xW = 1e4;
let ql = 0;
function wW() {
  return ql = (ql + 1) % Number.MAX_SAFE_INTEGER, ql.toString();
}
const Bl = /* @__PURE__ */ new Map(), lg = (e) => {
  if (Bl.has(e))
    return;
  const t = setTimeout(() => {
    Bl.delete(e), on({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, xW);
  Bl.set(e, t);
}, _W = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, bW)
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
      return r ? lg(r) : e.toasts.forEach((n) => {
        lg(n.id);
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
}, No = [];
let To = { toasts: [] };
function on(e) {
  To = _W(To, e), No.forEach((t) => {
    t(To);
  });
}
function SW({ ...e }) {
  const t = wW(), r = (o) => on({
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
function CW() {
  const [e, t] = f.useState(To);
  return f.useEffect(() => (No.push(t), () => {
    const r = No.indexOf(t);
    r > -1 && No.splice(r, 1);
  }), [e]), {
    ...e,
    toast: SW,
    dismiss: (r) => on({ type: "DISMISS_TOAST", toastId: r })
  };
}
function z4() {
  const { toasts: e } = CW();
  return /* @__PURE__ */ u.jsxs(hW, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ u.jsxs(t0, { ...a, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ u.jsx(n0, { children: r }),
          n && /* @__PURE__ */ u.jsx(o0, { children: n })
        ] }),
        o,
        /* @__PURE__ */ u.jsx(r0, {})
      ] }, t);
    }),
    /* @__PURE__ */ u.jsx(e0, {})
  ] });
}
var a0 = "Toggle", gf = f.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n, onPressedChange: o, ...a } = e, [i, s] = xe({
    prop: r,
    onChange: o,
    defaultProp: n ?? !1,
    caller: a0
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
gf.displayName = a0;
var i0 = gf;
const s0 = ct(
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
), PW = f.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ u.jsx(
  i0,
  {
    ref: o,
    className: T(s0({ variant: t, size: r, className: e })),
    ...n
  }
));
PW.displayName = i0.displayName;
var Bt = "ToggleGroup", [c0, G4] = be(Bt, [
  Lt
]), l0 = Lt(), yf = Q.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single") {
    const o = n;
    return /* @__PURE__ */ u.jsx(EW, { ...o, ref: t });
  }
  if (r === "multiple") {
    const o = n;
    return /* @__PURE__ */ u.jsx(RW, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Bt}\``);
});
yf.displayName = Bt;
var [u0, d0] = c0(Bt), EW = Q.forwardRef((e, t) => {
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
    caller: Bt
  });
  return /* @__PURE__ */ u.jsx(
    u0,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: Q.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: Q.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ u.jsx(f0, { ...a, ref: t })
    }
  );
}), RW = Q.forwardRef((e, t) => {
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
    caller: Bt
  }), c = Q.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), l = Q.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ u.jsx(
    u0,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ u.jsx(f0, { ...a, ref: t })
    }
  );
});
yf.displayName = Bt;
var [NW, TW] = c0(Bt), f0 = Q.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = l0(r), d = xt(i), p = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ u.jsx(NW, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ u.jsx(
      Ba,
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
), ra = "ToggleGroupItem", p0 = Q.forwardRef(
  (e, t) => {
    const r = d0(ra, e.__scopeToggleGroup), n = TW(ra, e.__scopeToggleGroup), o = l0(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = Q.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ u.jsx(
      Wa,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ u.jsx(ug, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx(ug, { ...s, ref: t });
  }
);
p0.displayName = ra;
var ug = Q.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = d0(ra, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ u.jsx(
      gf,
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
), m0 = yf, h0 = p0;
const v0 = f.createContext({
  size: "default",
  variant: "default"
}), MW = f.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ u.jsx(
  m0,
  {
    ref: a,
    className: T("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ u.jsx(v0.Provider, { value: { variant: t, size: r }, children: n })
  }
));
MW.displayName = m0.displayName;
const AW = f.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = f.useContext(v0);
  return /* @__PURE__ */ u.jsx(
    h0,
    {
      ref: a,
      className: T(
        s0({
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
AW.displayName = h0.displayName;
var [ii, U4] = be("Tooltip", [
  kt
]), si = kt(), g0 = "TooltipProvider", OW = 700, ku = "tooltip.open", [jW, bf] = ii(g0), y0 = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = OW,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = f.useRef(!0), s = f.useRef(!1), c = f.useRef(0);
  return f.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u.jsx(
    jW,
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
y0.displayName = g0;
var Sn = "Tooltip", [DW, to] = ii(Sn), b0 = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = bf(Sn, e.__scopeTooltip), l = si(t), [d, p] = f.useState(null), m = ve(), g = f.useRef(0), y = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, v = f.useRef(!1), [b, x] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ku))) : c.onClose(), a?.(P);
    },
    caller: Sn
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
  }, []), /* @__PURE__ */ u.jsx(Hn, { ...l, children: /* @__PURE__ */ u.jsx(
    DW,
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
b0.displayName = Sn;
var Iu = "TooltipTrigger", x0 = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = to(Iu, r), a = bf(Iu, r), i = si(r), s = f.useRef(null), c = ne(t, s, o.onTriggerChange), l = f.useRef(!1), d = f.useRef(!1), p = f.useCallback(() => l.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ u.jsx(Vn, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
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
x0.displayName = Iu;
var xf = "TooltipPortal", [kW, IW] = ii(xf, {
  forceMount: void 0
}), w0 = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = to(xf, t);
  return /* @__PURE__ */ u.jsx(kW, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(ar, { asChild: !0, container: o, children: n }) }) });
};
w0.displayName = xf;
var Dr = "TooltipContent", _0 = f.forwardRef(
  (e, t) => {
    const r = IW(Dr, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = to(Dr, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(he, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ u.jsx(S0, { side: o, ...a, ref: t }) : /* @__PURE__ */ u.jsx(LW, { side: o, ...a, ref: t }) });
  }
), LW = f.forwardRef((e, t) => {
  const r = to(Dr, e.__scopeTooltip), n = bf(Dr, e.__scopeTooltip), o = f.useRef(null), a = ne(t, o), [i, s] = f.useState(null), { trigger: c, onClose: l } = r, d = o.current, { onPointerInTransitChange: p } = n, m = f.useCallback(() => {
    s(null), p(!1);
  }, [p]), g = f.useCallback(
    (y, h) => {
      const v = y.currentTarget, b = { x: y.clientX, y: y.clientY }, x = WW(b, v.getBoundingClientRect()), w = HW(b, x), _ = VW(h.getBoundingClientRect()), S = GW([...w, ..._]);
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
        const v = h.target, b = { x: h.clientX, y: h.clientY }, x = c?.contains(v) || d?.contains(v), w = !zW(b, i);
        x ? m() : w && (m(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, d, i, l, m]), /* @__PURE__ */ u.jsx(S0, { ...e, ref: a });
}), [$W, FW] = ii(Sn, { isInside: !1 }), qW = /* @__PURE__ */ hg("TooltipContent"), S0 = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = to(Dr, r), l = si(r), { onClose: d } = c;
    return f.useEffect(() => (document.addEventListener(ku, d), () => document.removeEventListener(ku, d)), [d]), f.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          m.target?.contains(c.trigger) && d();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, d]), /* @__PURE__ */ u.jsx(
      Ot,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ u.jsxs(
          La,
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
              /* @__PURE__ */ u.jsx(qW, { children: n }),
              /* @__PURE__ */ u.jsx($W, { scope: r, isInside: !0, children: /* @__PURE__ */ u.jsx(R_, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
_0.displayName = Dr;
var C0 = "TooltipArrow", BW = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = si(r);
    return FW(
      C0,
      r
    ).isInside ? null : /* @__PURE__ */ u.jsx($a, { ...o, ...n, ref: t });
  }
);
BW.displayName = C0;
function WW(e, t) {
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
function HW(e, t, r = 5) {
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
function VW(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function zW(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, d = s.y, p = c.x, m = c.y;
    d > n != m > n && r < (p - l) * (n - d) / (m - d) + l && (o = !o);
  }
  return o;
}
function GW(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), UW(t);
}
function UW(e) {
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
var KW = y0, YW = b0, XW = x0, QW = w0, P0 = _0;
const K4 = KW, Y4 = YW, X4 = XW, ZW = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(QW, { children: /* @__PURE__ */ u.jsx(
  P0,
  {
    ref: n,
    sideOffset: t,
    className: T(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
ZW.displayName = P0.displayName;
export {
  o4 as Accordion,
  kE as AccordionContent,
  jE as AccordionItem,
  DE as AccordionTrigger,
  LE as Alert,
  FE as AlertDescription,
  i4 as AlertDialog,
  vN as AlertDialogAction,
  gN as AlertDialogCancel,
  dN as AlertDialogContent,
  hN as AlertDialogDescription,
  pN as AlertDialogFooter,
  fN as AlertDialogHeader,
  Vy as AlertDialogOverlay,
  uN as AlertDialogPortal,
  mN as AlertDialogTitle,
  s4 as AlertDialogTrigger,
  $E as AlertTitle,
  c4 as AsyncSelect,
  NN as Avatar,
  MN as AvatarFallback,
  TN as AvatarImage,
  np as Badge,
  ON as Breadcrumb,
  $N as BreadcrumbEllipsis,
  DN as BreadcrumbItem,
  kN as BreadcrumbLink,
  jN as BreadcrumbList,
  IN as BreadcrumbPage,
  LN as BreadcrumbSeparator,
  jt as Button,
  _b as Calendar,
  uA as Card,
  mA as CardContent,
  pA as CardDescription,
  hA as CardFooter,
  dA as CardHeader,
  fA as CardTitle,
  XA as Carousel,
  QA as CarouselContent,
  ZA as CarouselItem,
  eO as CarouselNext,
  JA as CarouselPrevious,
  PI as ChartContainer,
  p4 as ChartLegend,
  NI as ChartLegendContent,
  EI as ChartStyle,
  f4 as ChartTooltip,
  RI as ChartTooltipContent,
  jI as Checkbox,
  DI as Combobox,
  h4 as ComboboxForm,
  qn as Command,
  v4 as CommandDialog,
  Oa as CommandEmpty,
  Bn as CommandGroup,
  Ma as CommandInput,
  Ut as CommandItem,
  Aa as CommandList,
  Ax as CommandSeparator,
  aL as CommandShortcut,
  y4 as DatePicker,
  Q$ as DateTimePicker,
  Z$ as Dialog,
  x4 as DialogClose,
  gw as DialogContent,
  nF as DialogDescription,
  tF as DialogFooter,
  eF as DialogHeader,
  vw as DialogOverlay,
  J$ as DialogPortal,
  rF as DialogTitle,
  b4 as DialogTrigger,
  _4 as DropdownMenu,
  N2 as DropdownMenuCheckboxItem,
  E2 as DropdownMenuContent,
  C4 as DropdownMenuGroup,
  R2 as DropdownMenuItem,
  M2 as DropdownMenuLabel,
  P4 as DropdownMenuPortal,
  R4 as DropdownMenuRadioGroup,
  T2 as DropdownMenuRadioItem,
  A2 as DropdownMenuSeparator,
  O2 as DropdownMenuShortcut,
  E4 as DropdownMenuSub,
  P2 as DropdownMenuSubContent,
  C2 as DropdownMenuSubTrigger,
  S4 as DropdownMenuTrigger,
  N4 as Form,
  Ya as FormControl,
  P_ as FormDescription,
  Ga as FormField,
  Zn as FormItem,
  Ka as FormLabel,
  Jn as FormMessage,
  T4 as Heading,
  Zd as Input,
  M4 as InputForm,
  za as Label,
  sq as ListItem,
  cq as MaskedInput,
  uq as MultiSelect,
  eq as NavigationMenu,
  oq as NavigationMenuContent,
  iq as NavigationMenuIndicator,
  O4 as NavigationMenuItem,
  aq as NavigationMenuLink,
  tq as NavigationMenuList,
  nq as NavigationMenuTrigger,
  Z_ as NavigationMenuViewport,
  dq as Pagination,
  fq as PaginationContent,
  vq as PaginationEllipsis,
  pq as PaginationItem,
  af as PaginationLink,
  hq as PaginationNext,
  mq as PaginationPrevious,
  Gn as Popover,
  Hr as PopoverContent,
  Un as PopoverTrigger,
  Rq as RadioGroup,
  Nq as RadioGroupItem,
  Wq as ScrollArea,
  ES as ScrollBar,
  ea as Select,
  _n as SelectContent,
  L4 as SelectForm,
  I4 as SelectGroup,
  jr as SelectItem,
  gB as SelectLabel,
  uC as SelectScrollDownButton,
  lC as SelectScrollUpButton,
  yB as SelectSeparator,
  wn as SelectTrigger,
  ta as SelectValue,
  pC as Separator,
  $4 as Sheet,
  q4 as SheetClose,
  CB as SheetContent,
  NB as SheetDescription,
  EB as SheetFooter,
  PB as SheetHeader,
  mC as SheetOverlay,
  _B as SheetPortal,
  RB as SheetTitle,
  F4 as SheetTrigger,
  TB as Skeleton,
  kB as Switch,
  IB as Table,
  $B as TableBody,
  HB as TableCaption,
  WB as TableCell,
  FB as TableFooter,
  BB as TableHead,
  LB as TableHeader,
  qB as TableRow,
  H4 as Tabs,
  YB as TabsContent,
  UB as TabsList,
  KB as TabsTrigger,
  DC as Textarea,
  XB as TextareaForm,
  hw as TimePicker,
  Eo as TimePickerInput,
  t0 as Toast,
  yW as ToastAction,
  r0 as ToastClose,
  o0 as ToastDescription,
  hW as ToastProvider,
  n0 as ToastTitle,
  e0 as ToastViewport,
  z4 as Toaster,
  PW as Toggle,
  MW as ToggleGroup,
  AW as ToggleGroupItem,
  Y4 as Tooltip,
  ZW as TooltipContent,
  K4 as TooltipProvider,
  X4 as TooltipTrigger,
  AN as badgeVariants,
  d4 as brazillianStates,
  gt as buttonVariants,
  T as cn,
  u4 as mask,
  rq as navigationMenuTriggerStyle,
  _W as reducer,
  SW as toast,
  s0 as toggleVariants,
  Ua as useFormField,
  CW as useToast
};
