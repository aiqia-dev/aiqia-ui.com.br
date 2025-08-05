import * as f from "react";
import Q, { forwardRef as Uo, createElement as Tl, useState as Te, useEffect as je, useCallback as Pu, createContext as Zt, useContext as Jt, useLayoutEffect as ng, useRef as wr, isValidElement as A0, PureComponent as Ko, useImperativeHandle as Eu, useMemo as O0, cloneElement as j0 } from "react";
import * as xn from "react-dom";
import og from "react-dom";
import { Link as D0 } from "react-router-dom";
import { useFormContext as ag, FormProvider as k0, Controller as I0 } from "react-hook-form";
var Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function st(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kn = { exports: {} }, Vr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function L0() {
  if (Sf) return Vr;
  Sf = 1;
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
  return Vr.Fragment = t, Vr.jsx = r, Vr.jsxs = r, Vr;
}
var zr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;
function $0() {
  return Cf || (Cf = 1, process.env.NODE_ENV !== "production" && function() {
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
    var m = Q, g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), w = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), j = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, q = Array.isArray, M = console.createTask ? console.createTask : function() {
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
    )(), R = M(n(a)), W = {};
    zr.Fragment = h, zr.jsx = function(O, z, A, B, K) {
      var G = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        O,
        z,
        A,
        !1,
        B,
        K,
        G ? Error("react-stack-top-frame") : D,
        G ? M(n(O)) : R
      );
    }, zr.jsxs = function(O, z, A, B, K) {
      var G = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        O,
        z,
        A,
        !0,
        B,
        K,
        G ? Error("react-stack-top-frame") : D,
        G ? M(n(O)) : R
      );
    };
  }()), zr;
}
var Pf;
function F0() {
  return Pf || (Pf = 1, process.env.NODE_ENV === "production" ? Kn.exports = L0() : Kn.exports = $0()), Kn.exports;
}
var u = F0();
function q0(e, t) {
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
  return o.scopeName = e, [n, B0(o, ...t)];
}
function B0(...e) {
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
function Ef(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ot(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = Ef(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : Ef(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return f.useCallback(ot(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  const t = /* @__PURE__ */ W0(e), r = f.forwardRef((n, o) => {
    const { children: a, ...i } = n, s = f.Children.toArray(a), c = s.find(H0);
    if (c) {
      const l = c.props.children, d = s.map((p) => p === c ? f.Children.count(l) > 1 ? f.Children.only(null) : f.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ u.jsx(t, { ...i, ref: o, children: f.isValidElement(l) ? f.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var ig = /* @__PURE__ */ Rt("Slot");
// @__NO_SIDE_EFFECTS__
function W0(e) {
  const t = f.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (f.isValidElement(o)) {
      const i = z0(o), s = V0(a, o.props);
      return o.type !== f.Fragment && (s.ref = n ? ot(n, i) : i), f.cloneElement(o, s);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sg = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function cg(e) {
  const t = ({ children: r }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = sg, t;
}
function H0(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sg;
}
function V0(e, t) {
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
function z0(e) {
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
}, G0 = f[" useInsertionEffect ".trim().toString()] || me;
function xe({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = U0({
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
        const p = K0(d) ? d(e) : d;
        p !== e && i.current?.(p);
      } else
        a(d);
    },
    [s, e, a, i]
  );
  return [c, l];
}
function U0({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = f.useState(e), o = f.useRef(r), a = f.useRef(t);
  return G0(() => {
    a.current = t;
  }, [t]), f.useEffect(() => {
    o.current !== r && (a.current?.(r), o.current = r);
  }, [r, o]), [r, n, a];
}
function K0(e) {
  return typeof e == "function";
}
var Y0 = [
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
], H = Y0.reduce((e, t) => {
  const r = /* @__PURE__ */ Rt(`Primitive.${t}`), n = f.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function nn(e, t) {
  e && xn.flushSync(() => e.dispatchEvent(t));
}
function X0(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var he = (e) => {
  const { present: t, children: r } = e, n = Q0(t), o = typeof r == "function" ? r({ present: n.isPresent }) : f.Children.only(r), a = ne(n.ref, Z0(o));
  return typeof r == "function" || n.isPresent ? f.cloneElement(o, { ref: a }) : null;
};
he.displayName = "Presence";
function Q0(e) {
  const [t, r] = f.useState(), n = f.useRef(null), o = f.useRef(e), a = f.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = X0(i, {
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
    const l = Yn(n.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), me(() => {
    const l = n.current, d = o.current;
    if (d !== e) {
      const m = a.current, g = Yn(l);
      e ? c("MOUNT") : g === "none" || l?.display === "none" ? c("UNMOUNT") : c(d && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), me(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, p = (g) => {
        const h = Yn(n.current).includes(g.animationName);
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === t && (a.current = Yn(n.current));
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
function Yn(e) {
  return e?.animationName || "none";
}
function Z0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var J0 = f[" useId ".trim().toString()] || (() => {
}), eP = 0;
function ve(e) {
  const [t, r] = f.useState(J0());
  return me(() => {
    r((n) => n ?? String(eP++));
  }, [e]), t ? `radix-${t}` : "";
}
var Yo = "Collapsible", [tP, lg] = be(Yo), [rP, Ru] = tP(Yo), ug = f.forwardRef(
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
      caller: Yo
    });
    return /* @__PURE__ */ u.jsx(
      rP,
      {
        scope: r,
        disabled: a,
        contentId: ve(),
        open: c,
        onOpenToggle: f.useCallback(() => l((d) => !d), [l]),
        children: /* @__PURE__ */ u.jsx(
          H.div,
          {
            "data-state": Nu(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
ug.displayName = Yo;
var dg = "CollapsibleTrigger", fg = f.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = Ru(dg, r);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Nu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
  }
);
fg.displayName = dg;
var Tu = "CollapsibleContent", pg = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Ru(Tu, e.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(he, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ u.jsx(nP, { ...n, ref: t, present: a }) });
  }
);
pg.displayName = Tu;
var nP = f.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = Ru(Tu, r), [s, c] = f.useState(n), l = f.useRef(null), d = ne(t, l), p = f.useRef(0), m = p.current, g = f.useRef(0), y = g.current, h = i.open || s, v = f.useRef(h), b = f.useRef(void 0);
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
      "data-state": Nu(i.open),
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
function Nu(e) {
  return e ? "open" : "closed";
}
var oP = ug, aP = fg, iP = pg, sP = f.createContext(void 0);
function xt(e) {
  const t = f.useContext(sP);
  return e || t || "ltr";
}
var Ke = "Accordion", cP = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Mu, lP, uP] = er(Ke), [Xo, t4] = be(Ke, [
  uP,
  lg
]), Au = lg(), mg = Q.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ u.jsx(Mu.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ u.jsx(mP, { ...a, ref: t }) : /* @__PURE__ */ u.jsx(pP, { ...o, ref: t }) });
  }
);
mg.displayName = Ke;
var [hg, dP] = Xo(Ke), [vg, fP] = Xo(
  Ke,
  { collapsible: !1 }
), pP = Q.forwardRef(
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
      hg,
      {
        scope: e.__scopeAccordion,
        value: Q.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: c,
        onItemClose: Q.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ u.jsx(vg, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ u.jsx(gg, { ...i, ref: t }) })
      }
    );
  }
), mP = Q.forwardRef((e, t) => {
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
    hg,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ u.jsx(vg, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(gg, { ...a, ref: t }) })
    }
  );
}), [hP, Qo] = Xo(Ke), gg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = Q.useRef(null), c = ne(s, t), l = lP(r), p = xt(o) === "ltr", m = L(e.onKeyDown, (g) => {
      if (!cP.includes(g.key)) return;
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
      hP,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ u.jsx(Mu.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
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
), xo = "AccordionItem", [vP, Ou] = Xo(xo), yg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = Qo(xo, r), i = dP(xo, r), s = Au(r), c = ve(), l = n && i.value.includes(n) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ u.jsx(
      vP,
      {
        scope: r,
        open: l,
        disabled: d,
        triggerId: c,
        children: /* @__PURE__ */ u.jsx(
          oP,
          {
            "data-orientation": a.orientation,
            "data-state": Cg(l),
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
yg.displayName = xo;
var bg = "AccordionHeader", xg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Qo(Ke, r), a = Ou(bg, r);
    return /* @__PURE__ */ u.jsx(
      H.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Cg(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
xg.displayName = bg;
var Nl = "AccordionTrigger", wg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Qo(Ke, r), a = Ou(Nl, r), i = fP(Nl, r), s = Au(r);
    return /* @__PURE__ */ u.jsx(Mu.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      aP,
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
wg.displayName = Nl;
var _g = "AccordionContent", Sg = Q.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = Qo(Ke, r), a = Ou(_g, r), i = Au(r);
    return /* @__PURE__ */ u.jsx(
      iP,
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
Sg.displayName = _g;
function Cg(e) {
  return e ? "open" : "closed";
}
var gP = mg, yP = yg, bP = xg, Pg = wg, Eg = Sg;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rg = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wP = {
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
const _P = Uo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => Tl(
    "svg",
    {
      ref: c,
      ...wP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Rg("lucide", o),
      ...s
    },
    [
      ...i.map(([l, d]) => Tl(l, d)),
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
  const r = Uo(
    ({ className: n, ...o }, a) => Tl(_P, {
      ref: a,
      iconNode: t,
      className: Rg(`lucide-${xP(e)}`, n),
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
const SP = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], CP = Ce("ArrowLeft", SP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], EP = Ce("ArrowRight", PP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RP = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Tg = Ce("Calendar", RP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TP = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], _r = Ce("Check", TP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Sr = Ce("ChevronDown", NP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MP = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ju = Ce("ChevronLeft", MP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AP = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], wn = Ce("ChevronRight", AP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], jP = Ce("ChevronUp", OP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DP = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], kP = Ce("ChevronsUpDown", DP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IP = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Rf = Ce("CircleX", IP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LP = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ng = Ce("Circle", LP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $P = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], FP = Ce("Clock", $P);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qP = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Mg = Ce("Ellipsis", qP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BP = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Ag = Ce("LoaderCircle", BP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WP = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], HP = Ce("Plus", WP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], zP = Ce("Search", VP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = [
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
], UP = Ce("WandSparkles", GP);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KP = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Zo = Ce("X", KP);
function Og(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Og(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function vt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Og(e)) && (n && (n += " "), n += t);
  return n;
}
const Du = "-", YP = (e) => {
  const t = QP(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Du);
      return s[0] === "" && s.length !== 1 && s.shift(), jg(s, t) || XP(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, jg = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? jg(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Du);
  return t.validators.find(({
    validator: i
  }) => i(a))?.classGroupId;
}, Tf = /^\[(.+)\]$/, XP = (e) => {
  if (Tf.test(e)) {
    const t = Tf.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, QP = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Ml(r[o], n, o, t);
  return n;
}, Ml = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Nf(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ZP(o)) {
        Ml(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Ml(i, Nf(t, a), r, n);
    });
  });
}, Nf = (e, t) => {
  let r = e;
  return t.split(Du).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ZP = (e) => e.isThemeGetter, JP = (e) => {
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
}, Al = "!", Ol = ":", eE = Ol.length, tE = (e) => {
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
        if (h === Ol) {
          a.push(o.slice(c, y)), c = y + eE;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const d = a.length === 0 ? o : o.substring(c), p = rE(d), m = p !== d, g = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + Ol, a = n;
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
}, rE = (e) => e.endsWith(Al) ? e.substring(0, e.length - 1) : e.startsWith(Al) ? e.substring(1) : e, nE = (e) => {
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
}, oE = (e) => ({
  cache: JP(e.cacheSize),
  parseClassName: tE(e),
  sortModifiers: nE(e),
  ...YP(e)
}), aE = /\s+/, iE = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(aE);
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
    const x = a(m).join(":"), w = g ? x + Al : x, _ = w + b;
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
function sE() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Dg(t)) && (n && (n += " "), n += r);
  return n;
}
const Dg = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Dg(e[n])) && (r && (r += " "), r += t);
  return r;
};
function cE(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const l = t.reduce((d, p) => p(d), e());
    return r = oE(l), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const d = iE(c, r);
    return o(c, d), d;
  }
  return function() {
    return a(sE.apply(null, arguments));
  };
}
const _e = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, kg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ig = /^\((?:(\w[\w-]*):)?(.+)\)$/i, lE = /^\d+\/\d+$/, uE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, pE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, lr = (e) => lE.test(e), se = (e) => !!e && !Number.isNaN(Number(e)), St = (e) => !!e && Number.isInteger(Number(e)), Ja = (e) => e.endsWith("%") && se(e.slice(0, -1)), pt = (e) => uE.test(e), hE = () => !0, vE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  dE.test(e) && !fE.test(e)
), Lg = () => !1, gE = (e) => pE.test(e), yE = (e) => mE.test(e), bE = (e) => !Z(e) && !J(e), xE = (e) => Dr(e, qg, Lg), Z = (e) => kg.test(e), Wt = (e) => Dr(e, Bg, vE), ei = (e) => Dr(e, PE, se), Mf = (e) => Dr(e, $g, Lg), wE = (e) => Dr(e, Fg, yE), Xn = (e) => Dr(e, Wg, gE), J = (e) => Ig.test(e), Gr = (e) => kr(e, Bg), _E = (e) => kr(e, EE), Af = (e) => kr(e, $g), SE = (e) => kr(e, qg), CE = (e) => kr(e, Fg), Qn = (e) => kr(e, Wg, !0), Dr = (e, t, r) => {
  const n = kg.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, kr = (e, t, r = !1) => {
  const n = Ig.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, $g = (e) => e === "position" || e === "percentage", Fg = (e) => e === "image" || e === "url", qg = (e) => e === "length" || e === "size" || e === "bg-size", Bg = (e) => e === "length", PE = (e) => e === "number", EE = (e) => e === "family-name", Wg = (e) => e === "shadow", RE = () => {
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
  ], S = () => [..._(), J, Z], C = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], E = () => [J, Z, c], T = () => [lr, "full", "auto", ...E()], I = () => [St, "none", "subgrid", J, Z], j = () => ["auto", {
    span: ["full", St, J, Z]
  }, St, J, Z], V = () => [St, "auto", J, Z], q = () => ["auto", "min", "max", "fr", J, Z], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...E()], D = () => [lr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], R = () => [e, J, Z], W = () => [..._(), Af, Mf, {
    position: [J, Z]
  }], O = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", SE, xE, {
    size: [J, Z]
  }], A = () => [Ja, Gr, Wt], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    J,
    Z
  ], K = () => ["", se, Gr, Wt], G = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [se, Ja, Af, Mf], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    J,
    Z
  ], re = () => ["none", se, J, Z], oe = () => ["none", se, J, Z], te = () => [se, J, Z], U = () => [lr, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pt],
      breakpoint: [pt],
      color: [hE],
      container: [pt],
      "drop-shadow": [pt],
      ease: ["in", "out", "in-out"],
      font: [bE],
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
        aspect: ["auto", "square", lr, Z, J, v]
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
        basis: [lr, "full", "auto", s, ...E()]
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
        flex: [se, lr, "auto", "initial", "none", Z]
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
        text: ["base", r, Gr, Wt]
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
        font: [n, J, ei]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ja, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_E, Z, t]
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
        "line-clamp": [se, "none", J, ei]
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
        }, CE, wE]
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
        outline: ["", se, Gr, Wt]
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
          Qn,
          Xn
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
        "inset-shadow": ["none", p, Qn, Xn]
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
        "text-shadow": ["none", m, Qn, Xn]
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
          Qn,
          Xn
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
        stroke: [se, Gr, Wt, ei]
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
}, TE = /* @__PURE__ */ cE(RE);
function N(...e) {
  return TE(vt(e));
}
const r4 = gP, NE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  yP,
  {
    ref: r,
    className: N("border-b", e),
    ...t
  }
));
NE.displayName = "AccordionItem";
const ME = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(bP, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  Pg,
  {
    ref: n,
    className: N(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(Sr, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
ME.displayName = Pg.displayName;
const AE = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  Eg,
  {
    ref: n,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ u.jsx("div", { className: N("pb-4 pt-0", e), children: t })
  }
));
AE.displayName = Eg.displayName;
const Of = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, jf = vt, ct = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return jf(e, r?.class, r?.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const d = r?.[l], p = a?.[l];
    if (d === null) return null;
    const m = Of(d) || Of(p);
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
  return jf(e, i, c, r?.class, r?.className);
}, OE = ct(
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
), jE = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: N(OE({ variant: t }), e),
    ...r
  }
));
jE.displayName = "Alert";
const DE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "h5",
  {
    ref: r,
    className: N("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
DE.displayName = "AlertTitle";
const kE = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: N("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
kE.displayName = "AlertDescription";
function ue(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...r) => t.current?.(...r), []);
}
function IE(e, t = globalThis?.document) {
  const r = ue(e);
  f.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var LE = "DismissableLayer", jl = "dismissableLayer.update", $E = "dismissableLayer.pointerDownOutside", FE = "dismissableLayer.focusOutside", Df, Hg = f.createContext({
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
    } = e, l = f.useContext(Hg), [d, p] = f.useState(null), m = d?.ownerDocument ?? globalThis?.document, [, g] = f.useState({}), y = ne(t, (P) => p(P)), h = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = h.indexOf(v), x = d ? h.indexOf(d) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, _ = x >= b, S = BE((P) => {
      const E = P.target, T = [...l.branches].some((I) => I.contains(E));
      !_ || T || (o?.(P), i?.(P), P.defaultPrevented || s?.());
    }, m), C = WE((P) => {
      const E = P.target;
      [...l.branches].some((I) => I.contains(E)) || (a?.(P), i?.(P), P.defaultPrevented || s?.());
    }, m);
    return IE((P) => {
      x === l.layers.size - 1 && (n?.(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, m), f.useEffect(() => {
      if (d)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Df = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), kf(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Df);
        };
    }, [d, m, r, l]), f.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), kf());
    }, [d, l]), f.useEffect(() => {
      const P = () => g({});
      return document.addEventListener(jl, P), () => document.removeEventListener(jl, P);
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
At.displayName = LE;
var qE = "DismissableLayerBranch", Vg = f.forwardRef((e, t) => {
  const r = f.useContext(Hg), n = f.useRef(null), o = ne(t, n);
  return f.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ u.jsx(H.div, { ...e, ref: o });
});
Vg.displayName = qE;
function BE(e, t = globalThis?.document) {
  const r = ue(e), n = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          zg(
            $E,
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
function WE(e, t = globalThis?.document) {
  const r = ue(e), n = f.useRef(!1);
  return f.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && zg(FE, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function kf() {
  const e = new CustomEvent(jl);
  document.dispatchEvent(e);
}
function zg(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? nn(o, a) : o.dispatchEvent(a);
}
var HE = At, VE = Vg, ti = "focusScope.autoFocusOnMount", ri = "focusScope.autoFocusOnUnmount", If = { bubbles: !1, cancelable: !0 }, zE = "FocusScope", _n = f.forwardRef((e, t) => {
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
      $f.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const b = new CustomEvent(ti, If);
        s.addEventListener(ti, l), s.dispatchEvent(b), b.defaultPrevented || (GE(QE(Gg(s)), { select: !0 }), document.activeElement === h && Pt(s));
      }
      return () => {
        s.removeEventListener(ti, l), setTimeout(() => {
          const b = new CustomEvent(ri, If);
          s.addEventListener(ri, d), s.dispatchEvent(b), b.defaultPrevented || Pt(h ?? document.body, { select: !0 }), s.removeEventListener(ri, d), $f.remove(g);
        }, 0);
      };
    }
  }, [s, l, d, g]);
  const y = f.useCallback(
    (h) => {
      if (!r && !n || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, b = document.activeElement;
      if (v && b) {
        const x = h.currentTarget, [w, _] = UE(x);
        w && _ ? !h.shiftKey && b === _ ? (h.preventDefault(), r && Pt(w, { select: !0 })) : h.shiftKey && b === w && (h.preventDefault(), r && Pt(_, { select: !0 })) : b === x && h.preventDefault();
      }
    },
    [r, n, g.paused]
  );
  return /* @__PURE__ */ u.jsx(H.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
_n.displayName = zE;
function GE(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Pt(n, { select: t }), document.activeElement !== r) return;
}
function UE(e) {
  const t = Gg(e), r = Lf(t, e), n = Lf(t.reverse(), e);
  return [r, n];
}
function Gg(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Lf(e, t) {
  for (const r of e)
    if (!KE(r, { upTo: t })) return r;
}
function KE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function YE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && YE(e) && t && e.select();
  }
}
var $f = XE();
function XE() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Ff(e, t), e.unshift(t);
    },
    remove(t) {
      e = Ff(e, t), e[0]?.resume();
    }
  };
}
function Ff(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function QE(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ZE = "Portal", tr = f.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, a] = f.useState(!1);
  me(() => a(!0), []);
  const i = r || o && globalThis?.document?.body;
  return i ? og.createPortal(/* @__PURE__ */ u.jsx(H.div, { ...n, ref: t }), i) : null;
});
tr.displayName = ZE;
var ni = 0;
function Jo() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? qf()), document.body.insertAdjacentElement("beforeend", e[1] ?? qf()), ni++, () => {
      ni === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ni--;
    };
  }, []);
}
function qf() {
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
function Ug(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function JE(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var uo = "right-scroll-bar-position", fo = "width-before-scroll-bar", eR = "with-scroll-bars-hidden", tR = "--removed-body-scroll-bar-size";
function oi(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rR(e, t) {
  var r = Te(function() {
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
var nR = typeof window < "u" ? f.useLayoutEffect : f.useEffect, Bf = /* @__PURE__ */ new WeakMap();
function oR(e, t) {
  var r = rR(null, function(n) {
    return e.forEach(function(o) {
      return oi(o, n);
    });
  });
  return nR(function() {
    var n = Bf.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || oi(s, null);
      }), a.forEach(function(s) {
        o.has(s) || oi(s, i);
      });
    }
    Bf.set(r, e);
  }, [e]), r;
}
function aR(e) {
  return e;
}
function iR(e, t) {
  t === void 0 && (t = aR);
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
function sR(e) {
  e === void 0 && (e = {});
  var t = iR(null);
  return t.options = Ze({ async: !0, ssr: !1 }, e), t;
}
var Kg = function(e) {
  var t = e.sideCar, r = Ug(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return f.createElement(n, Ze({}, r));
};
Kg.isSideCarExport = !0;
function cR(e, t) {
  return e.useMedium(t), Kg;
}
var Yg = sR(), ai = function() {
}, ea = f.forwardRef(function(e, t) {
  var r = f.useRef(null), n = f.useState({
    onScrollCapture: ai,
    onWheelCapture: ai,
    onTouchMoveCapture: ai
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, y = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = e.gapMode, _ = Ug(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = m, C = oR([r, t]), P = Ze(Ze({}, _), o);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(S, { sideCar: Yg, removeScrollBar: l, shards: p, noRelative: g, noIsolation: y, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: r, gapMode: w }),
    i ? f.cloneElement(f.Children.only(s), Ze(Ze({}, P), { ref: C })) : f.createElement(x, Ze({}, P, { className: c, ref: C }), s)
  );
});
ea.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ea.classNames = {
  fullWidth: fo,
  zeroRight: uo
};
var lR = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function uR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = lR();
  return t && e.setAttribute("nonce", t), e;
}
function dR(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var pR = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = uR()) && (dR(t, r), fR(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mR = function() {
  var e = pR();
  return function(t, r) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Xg = function() {
  var e = mR(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, hR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ii = function(e) {
  return parseInt(e || "", 10) || 0;
}, vR = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ii(r), ii(n), ii(o)];
}, gR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return hR;
  var t = vR(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, yR = Xg(), vr = "data-scroll-locked", bR = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(eR, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(vr, `] {
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
  
  body[`).concat(vr, `] {
    `).concat(tR, ": ").concat(s, `px;
  }
`);
}, Wf = function() {
  var e = parseInt(document.body.getAttribute(vr) || "0", 10);
  return isFinite(e) ? e : 0;
}, xR = function() {
  f.useEffect(function() {
    return document.body.setAttribute(vr, (Wf() + 1).toString()), function() {
      var e = Wf() - 1;
      e <= 0 ? document.body.removeAttribute(vr) : document.body.setAttribute(vr, e.toString());
    };
  }, []);
}, wR = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  xR();
  var a = f.useMemo(function() {
    return gR(o);
  }, [o]);
  return f.createElement(yR, { styles: bR(a, !t, o, r ? "" : "!important") });
}, Dl = !1;
if (typeof window < "u")
  try {
    var Zn = Object.defineProperty({}, "passive", {
      get: function() {
        return Dl = !0, !0;
      }
    });
    window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
  } catch {
    Dl = !1;
  }
var ur = Dl ? { passive: !1 } : !1, _R = function(e) {
  return e.tagName === "TEXTAREA";
}, Qg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !_R(e) && r[t] === "visible")
  );
}, SR = function(e) {
  return Qg(e, "overflowY");
}, CR = function(e) {
  return Qg(e, "overflowX");
}, Hf = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Zg(e, n);
    if (o) {
      var a = Jg(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, PR = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, ER = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Zg = function(e, t) {
  return e === "v" ? SR(t) : CR(t);
}, Jg = function(e, t) {
  return e === "v" ? PR(t) : ER(t);
}, RR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, TR = function(e, t, r, n, o) {
  var a = RR(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), l = !1, d = i > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var g = Jg(e, s), y = g[0], h = g[1], v = g[2], b = h - v - a * y;
    (y || b) && Zg(e, s) && (p += b, m += y);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(m) < 1) && (l = !0), l;
}, Jn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Vf = function(e) {
  return [e.deltaX, e.deltaY];
}, zf = function(e) {
  return e && "current" in e ? e.current : e;
}, NR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, MR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, AR = 0, dr = [];
function OR(e) {
  var t = f.useRef([]), r = f.useRef([0, 0]), n = f.useRef(), o = f.useState(AR++)[0], a = f.useState(Xg)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = JE([e.lockRef.current], (e.shards || []).map(zf), !0).filter(Boolean);
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
    var b = Jn(h), x = r.current, w = "deltaX" in h ? h.deltaX : x[0] - b[0], _ = "deltaY" in h ? h.deltaY : x[1] - b[1], S, C = h.target, P = Math.abs(w) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && C.type === "range")
      return !1;
    var E = Hf(P, C);
    if (!E)
      return !0;
    if (E ? S = P : (S = P === "v" ? "h" : "v", E = Hf(P, C)), !E)
      return !1;
    if (!n.current && "changedTouches" in h && (w || _) && (n.current = S), !S)
      return !0;
    var T = n.current || S;
    return TR(T, v, h, T === "h" ? w : _);
  }, []), c = f.useCallback(function(h) {
    var v = h;
    if (!(!dr.length || dr[dr.length - 1] !== a)) {
      var b = "deltaY" in v ? Vf(v) : Jn(v), x = t.current.filter(function(S) {
        return S.name === v.type && (S.target === v.target || v.target === S.shadowParent) && NR(S.delta, b);
      })[0];
      if (x && x.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(zf).filter(Boolean).filter(function(S) {
          return S.contains(v.target);
        }), _ = w.length > 0 ? s(v, w[0]) : !i.current.noIsolation;
        _ && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = f.useCallback(function(h, v, b, x) {
    var w = { name: h, delta: v, target: b, should: x, shadowParent: jR(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== w;
      });
    }, 1);
  }, []), d = f.useCallback(function(h) {
    r.current = Jn(h), n.current = void 0;
  }, []), p = f.useCallback(function(h) {
    l(h.type, Vf(h), h.target, s(h, e.lockRef.current));
  }, []), m = f.useCallback(function(h) {
    l(h.type, Jn(h), h.target, s(h, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return dr.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, ur), document.addEventListener("touchmove", c, ur), document.addEventListener("touchstart", d, ur), function() {
      dr = dr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, ur), document.removeEventListener("touchmove", c, ur), document.removeEventListener("touchstart", d, ur);
    };
  }, []);
  var g = e.removeScrollBar, y = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    y ? f.createElement(a, { styles: MR(o) }) : null,
    g ? f.createElement(wR, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function jR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const DR = cR(Yg, OR);
var Sn = f.forwardRef(function(e, t) {
  return f.createElement(ea, Ze({}, e, { ref: t, sideCar: DR }));
});
Sn.classNames = ea.classNames;
var kR = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fr = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), to = {}, si = 0, ey = function(e) {
  return e && (e.host || ey(e.parentNode));
}, IR = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = ey(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, LR = function(e, t, r, n) {
  var o = IR(t, Array.isArray(e) ? e : [e]);
  to[r] || (to[r] = /* @__PURE__ */ new WeakMap());
  var a = to[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(p) {
    !p || s.has(p) || (s.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var d = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        d(m);
      else
        try {
          var g = m.getAttribute(n), y = g !== null && g !== "false", h = (fr.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          fr.set(m, h), a.set(m, v), i.push(m), h === 1 && y && eo.set(m, !0), v === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return d(t), s.clear(), si++, function() {
    i.forEach(function(p) {
      var m = fr.get(p) - 1, g = a.get(p) - 1;
      fr.set(p, m), a.set(p, g), m || (eo.has(p) || p.removeAttribute(n), eo.delete(p)), g || p.removeAttribute(r);
    }), si--, si || (fr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), to = {});
  };
}, ta = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = kR(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), LR(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, ra = "Dialog", [ty, ry] = be(ra), [$R, Ye] = ty(ra), ny = (e) => {
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
    caller: ra
  });
  return /* @__PURE__ */ u.jsx(
    $R,
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
ny.displayName = ra;
var oy = "DialogTrigger", ay = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(oy, r), a = ne(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Lu(o.open),
        ...n,
        ref: a,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ay.displayName = oy;
var ku = "DialogPortal", [FR, iy] = ty(ku, {
  forceMount: void 0
}), sy = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = Ye(ku, t);
  return /* @__PURE__ */ u.jsx(FR, { scope: t, forceMount: r, children: f.Children.map(n, (i) => /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: i }) })) });
};
sy.displayName = ku;
var wo = "DialogOverlay", cy = f.forwardRef(
  (e, t) => {
    const r = iy(wo, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ye(wo, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(BR, { ...o, ref: t }) }) : null;
  }
);
cy.displayName = wo;
var qR = /* @__PURE__ */ Rt("DialogOverlay.RemoveScroll"), BR = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(wo, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Sn, { as: qR, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        H.div,
        {
          "data-state": Lu(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), zt = "DialogContent", ly = f.forwardRef(
  (e, t) => {
    const r = iy(zt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ye(zt, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(WR, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(HR, { ...o, ref: t }) });
  }
);
ly.displayName = zt;
var WR = f.forwardRef(
  (e, t) => {
    const r = Ye(zt, e.__scopeDialog), n = f.useRef(null), o = ne(t, r.contentRef, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return ta(a);
    }, []), /* @__PURE__ */ u.jsx(
      uy,
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
), HR = f.forwardRef(
  (e, t) => {
    const r = Ye(zt, e.__scopeDialog), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      uy,
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
), uy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Ye(zt, r), c = f.useRef(null), l = ne(t, c);
    return Jo(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        _n,
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
              "data-state": Lu(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(zR, { titleId: s.titleId }),
        /* @__PURE__ */ u.jsx(UR, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Iu = "DialogTitle", dy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(Iu, r);
    return /* @__PURE__ */ u.jsx(H.h2, { id: o.titleId, ...n, ref: t });
  }
);
dy.displayName = Iu;
var fy = "DialogDescription", py = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(fy, r);
    return /* @__PURE__ */ u.jsx(H.p, { id: o.descriptionId, ...n, ref: t });
  }
);
py.displayName = fy;
var my = "DialogClose", hy = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ye(my, r);
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
hy.displayName = my;
function Lu(e) {
  return e ? "open" : "closed";
}
var vy = "DialogTitleWarning", [VR, gy] = q0(vy, {
  contentName: zt,
  titleName: Iu,
  docsSlug: "dialog"
}), zR = ({ titleId: e }) => {
  const t = gy(vy), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, GR = "DialogDescriptionWarning", UR = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gy(GR).contentName}}.`;
  return f.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, na = ny, $u = ay, oa = sy, Ir = cy, Lr = ly, Cn = dy, Pn = py, $r = hy, yy = "AlertDialog", [KR, n4] = be(yy, [
  ry
]), wt = ry(), by = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = wt(t);
  return /* @__PURE__ */ u.jsx(na, { ...n, ...r, modal: !0 });
};
by.displayName = yy;
var YR = "AlertDialogTrigger", xy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx($u, { ...o, ...n, ref: t });
  }
);
xy.displayName = YR;
var XR = "AlertDialogPortal", wy = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = wt(t);
  return /* @__PURE__ */ u.jsx(oa, { ...n, ...r });
};
wy.displayName = XR;
var QR = "AlertDialogOverlay", _y = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(Ir, { ...o, ...n, ref: t });
  }
);
_y.displayName = QR;
var gr = "AlertDialogContent", [ZR, JR] = KR(gr), eT = /* @__PURE__ */ cg("AlertDialogContent"), Sy = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, a = wt(r), i = f.useRef(null), s = ne(t, i), c = f.useRef(null);
    return /* @__PURE__ */ u.jsx(
      VR,
      {
        contentName: gr,
        titleName: Cy,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u.jsx(ZR, { scope: r, cancelRef: c, children: /* @__PURE__ */ u.jsxs(
          Lr,
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
              /* @__PURE__ */ u.jsx(eT, { children: n }),
              /* @__PURE__ */ u.jsx(rT, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
Sy.displayName = gr;
var Cy = "AlertDialogTitle", Py = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx(Cn, { ...o, ...n, ref: t });
  }
);
Py.displayName = Cy;
var Ey = "AlertDialogDescription", Ry = f.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
  return /* @__PURE__ */ u.jsx(Pn, { ...o, ...n, ref: t });
});
Ry.displayName = Ey;
var tT = "AlertDialogAction", Ty = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = wt(r);
    return /* @__PURE__ */ u.jsx($r, { ...o, ...n, ref: t });
  }
);
Ty.displayName = tT;
var Ny = "AlertDialogCancel", My = f.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = JR(Ny, r), a = wt(r), i = ne(t, o);
    return /* @__PURE__ */ u.jsx($r, { ...a, ...n, ref: i });
  }
);
My.displayName = Ny;
var rT = ({ contentRef: e }) => {
  const t = `\`${gr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${gr}\` by passing a \`${Ey}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${gr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return f.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, nT = by, oT = xy, aT = wy, Ay = _y, Oy = Sy, jy = Ty, Dy = My, ky = Py, Iy = Ry;
const o4 = nT, a4 = oT, iT = aT, Ly = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ay,
  {
    className: N(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Ly.displayName = Ay.displayName;
const sT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs(iT, { children: [
  /* @__PURE__ */ u.jsx(Ly, {}),
  /* @__PURE__ */ u.jsx(
    Oy,
    {
      ref: r,
      className: N(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
sT.displayName = Oy.displayName;
const cT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: N(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
cT.displayName = "AlertDialogHeader";
const lT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: N(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
lT.displayName = "AlertDialogFooter";
const uT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  ky,
  {
    ref: r,
    className: N("text-lg font-semibold", e),
    ...t
  }
));
uT.displayName = ky.displayName;
const dT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Iy,
  {
    ref: r,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
dT.displayName = Iy.displayName;
const fT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  jy,
  {
    ref: r,
    className: N(gt(), e),
    ...t
  }
));
fT.displayName = jy.displayName;
const pT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Dy,
  {
    ref: r,
    className: N(
      gt({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
pT.displayName = Dy.displayName;
function i4({
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
  clearable: g = !0
}) {
  const [y, h] = Te(!1), [v, b] = Te(s), [x, w] = Te(null), [_, S] = Te("");
  je(() => {
    b(s);
  }, [s]), je(() => {
    if (s && e.length > 0) {
      const P = e.find((E) => n(E) === s);
      P && w(P);
    }
  }, [s, e, n]);
  const C = Pu(
    (P) => {
      const E = g && P === v ? "" : P;
      s && b(E), w(
        e.find((T) => n(T) === E) || null
      ), c(E), h(!1);
    },
    [v, c, g, e, n, s]
  );
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-1", children: [
    !!a && /* @__PURE__ */ u.jsx(Vd, { children: a }),
    /* @__PURE__ */ u.jsxs(Ta, { open: y, onOpenChange: h, children: [
      /* @__PURE__ */ u.jsx(Na, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
        rr,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": y,
          className: N(
            "justify-between w-full",
            d && "opacity-50 cursor-not-allowed",
            p
          ),
          disabled: d,
          children: [
            s && x ? o(x) : i,
            /* @__PURE__ */ u.jsx(kP, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsx(Fn, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ u.jsxs(xa, { shouldFilter: !1, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "relative border-b", children: [
          /* @__PURE__ */ u.jsx(
            _d,
            {
              placeholder: "Buscar",
              value: _,
              onValueChange: (P) => {
                S(P), l(P);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ u.jsx(Ag, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ u.jsxs(Sd, { children: [
          t && e.length === 0 && /* @__PURE__ */ u.jsx(mT, {}),
          !t && e.length === 0 && /* @__PURE__ */ u.jsx(Cd, { children: /* @__PURE__ */ u.jsx("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: m ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ u.jsx(wa, { children: e.map((P) => /* @__PURE__ */ u.jsxs(
            br,
            {
              value: n(P),
              onSelect: C,
              children: [
                r(P),
                /* @__PURE__ */ u.jsx(
                  _r,
                  {
                    className: N(
                      "ml-auto h-3 w-3",
                      v === n(P) ? "opacity-100" : "opacity-0"
                    )
                  }
                )
              ]
            },
            n(P)
          )) })
        ] })
      ] }) })
    ] })
  ] });
}
function mT() {
  return /* @__PURE__ */ u.jsx(wa, { children: [1, 2, 3].map((e) => /* @__PURE__ */ u.jsx(br, { disabled: !0, className: "p-0", children: /* @__PURE__ */ u.jsx(RB, { className: "w-full h-8 my-0.5" }) }, e)) });
}
var ro = { exports: {} }, ci = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gf;
function hT() {
  if (Gf) return ci;
  Gf = 1;
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
  return ci.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, ci;
}
var li = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uf;
function vT() {
  return Uf || (Uf = 1, process.env.NODE_ENV !== "production" && function() {
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
    li.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), li;
}
var Kf;
function gT() {
  return Kf || (Kf = 1, process.env.NODE_ENV === "production" ? ro.exports = hT() : ro.exports = vT()), ro.exports;
}
var yT = gT();
function bT() {
  return yT.useSyncExternalStore(
    xT,
    () => !0,
    () => !1
  );
}
function xT() {
  return () => {
  };
}
var Fu = "Avatar", [wT, s4] = be(Fu), [_T, $y] = wT(Fu), Fy = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = f.useState("idle");
    return /* @__PURE__ */ u.jsx(
      _T,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ u.jsx(H.span, { ...n, ref: t })
      }
    );
  }
);
Fy.displayName = Fu;
var qy = "AvatarImage", By = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = $y(qy, r), s = ST(n, a), c = ue((l) => {
      o(l), i.onImageLoadingStatusChange(l);
    });
    return me(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ u.jsx(H.img, { ...a, ref: t, src: n }) : null;
  }
);
By.displayName = qy;
var Wy = "AvatarFallback", Hy = f.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = $y(Wy, r), [i, s] = f.useState(n === void 0);
    return f.useEffect(() => {
      if (n !== void 0) {
        const c = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(c);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u.jsx(H.span, { ...o, ref: t }) : null;
  }
);
Hy.displayName = Wy;
function Yf(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function ST(e, { referrerPolicy: t, crossOrigin: r }) {
  const n = bT(), o = f.useRef(null), a = n ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = f.useState(
    () => Yf(a, e)
  );
  return me(() => {
    s(Yf(a, e));
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
var Vy = Fy, zy = By, Gy = Hy;
const CT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Vy,
  {
    ref: r,
    className: N(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
CT.displayName = Vy.displayName;
const PT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  zy,
  {
    ref: r,
    className: N("aspect-square h-full w-full", e),
    ...t
  }
));
PT.displayName = zy.displayName;
const ET = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Gy,
  {
    ref: r,
    className: N(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
ET.displayName = Gy.displayName;
const RT = ct(
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
function Xf({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ u.jsx("div", { className: N(RT({ variant: t }), e), ...r });
}
const TT = f.forwardRef(({ ...e }, t) => /* @__PURE__ */ u.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
TT.displayName = "Breadcrumb";
const NT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "ol",
  {
    ref: r,
    className: N(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
NT.displayName = "BreadcrumbList";
const MT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "li",
  {
    ref: r,
    className: N("inline-flex items-center gap-1.5", e),
    ...t
  }
));
MT.displayName = "BreadcrumbItem";
const AT = f.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? ig : "a";
  return /* @__PURE__ */ u.jsx(
    o,
    {
      ref: n,
      className: N("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
AT.displayName = "BreadcrumbLink";
const OT = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: N("font-normal text-foreground", e),
    ...t
  }
));
OT.displayName = "BreadcrumbPage";
const jT = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ u.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: N("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ u.jsx(wn, {})
  }
);
jT.displayName = "BreadcrumbSeparator";
const DT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: N("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(Mg, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
DT.displayName = "BreadcrumbElipssis";
const kT = {
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
    variants: kT,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), rr = f.forwardRef(({ className: e, variant: t, size: r, disabled: n, href: o, ...a }, i) => /* @__PURE__ */ u.jsx(u.Fragment, { children: o ? /* @__PURE__ */ u.jsx(
  D0,
  {
    className: N(gt({ variant: t, size: r, className: e })),
    ref: i,
    to: o,
    ...a
  }
) : /* @__PURE__ */ u.jsx(
  "button",
  {
    className: N(gt({ variant: t, size: r, className: e })),
    ref: i,
    disabled: n,
    ...a
  }
) }));
rr.displayName = "Button";
const qu = 6048e5, IT = 864e5, Qf = Symbol.for("constructDateFrom");
function Se(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Qf in e ? e[Qf](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
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
function LT(e, t, r) {
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
let $T = {};
function En() {
  return $T;
}
function at(e, t) {
  const r = En(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, o = de(e, t?.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Gt(e, t) {
  return at(e, { ...t, weekStartsOn: 1 });
}
function Uy(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = Se(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Gt(o), i = Se(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Gt(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function _o(e) {
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
function Fr(e, ...t) {
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
  const [n, o] = Fr(
    r?.in,
    e,
    t
  ), a = Cr(n), i = Cr(o), s = +a - _o(a), c = +i - _o(i);
  return Math.round((s - c) / IT);
}
function FT(e, t) {
  const r = Uy(e, t), n = Se(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Gt(n);
}
function kl(e, t, r) {
  return Ee(e, t * 7, r);
}
function qT(e, t, r) {
  return Fe(e, t * 12, r);
}
function BT(e, t) {
  let r, n = t?.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Se.bind(null, o));
    const a = de(o, n);
    (!r || r < a || isNaN(+a)) && (r = a);
  }), Se(n, r || NaN);
}
function WT(e, t) {
  let r, n = t?.in;
  return e.forEach((o) => {
    !n && typeof o == "object" && (n = Se.bind(null, o));
    const a = de(o, n);
    (!r || r > a || isNaN(+a)) && (r = a);
  }), Se(n, r || NaN);
}
function Ne(e, t, r) {
  const [n, o] = Fr(
    r?.in,
    e,
    t
  );
  return +Cr(n) == +Cr(o);
}
function Bu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function HT(e) {
  return !(!Bu(e) && typeof e != "number" || isNaN(+de(e)));
}
function on(e, t, r) {
  const [n, o] = Fr(
    r?.in,
    e,
    t
  ), a = n.getFullYear() - o.getFullYear(), i = n.getMonth() - o.getMonth();
  return a * 12 + i;
}
function VT(e, t, r) {
  const [n, o] = Fr(
    r?.in,
    e,
    t
  ), a = at(n, r), i = at(o, r), s = +a - _o(a), c = +i - _o(i);
  return Math.round((s - c) / qu);
}
function Wu(e, t) {
  const r = de(e, t?.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function Me(e, t) {
  const r = de(e, t?.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function Ky(e, t) {
  const r = de(e, t?.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function Hu(e, t) {
  const r = En(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, o = de(e, t?.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Yy(e, t) {
  return Hu(e, { ...t, weekStartsOn: 1 });
}
const zT = {
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
}, GT = (e, t, r) => {
  let n;
  const o = zT[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function yr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const UT = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, KT = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, YT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, XT = {
  date: yr({
    formats: UT,
    defaultWidth: "full"
  }),
  time: yr({
    formats: KT,
    defaultWidth: "full"
  }),
  dateTime: yr({
    formats: YT,
    defaultWidth: "full"
  })
}, QT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ZT = (e, t, r, n) => QT[e];
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
const JT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, eN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tN = {
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
}, rN = {
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
}, nN = {
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
}, oN = {
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
}, aN = (e, t) => {
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
}, iN = {
  ordinalNumber: aN,
  era: Je({
    values: JT,
    defaultWidth: "wide"
  }),
  quarter: Je({
    values: eN,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Je({
    values: tN,
    defaultWidth: "wide"
  }),
  day: Je({
    values: rN,
    defaultWidth: "wide"
  }),
  dayPeriod: Je({
    values: nN,
    defaultWidth: "wide",
    formattingValues: oN,
    defaultFormattingWidth: "wide"
  })
};
function et(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? cN(s, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      sN(s, (p) => p.test(i))
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
function sN(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function cN(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Xy(e) {
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
const lN = /^(\d+)(th|st|nd|rd)?/i, uN = /\d+/i, dN = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fN = {
  any: [/^b/i, /^(a|c)/i]
}, pN = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, mN = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, hN = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vN = {
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
}, gN = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, yN = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, bN = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xN = {
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
}, wN = {
  ordinalNumber: Xy({
    matchPattern: lN,
    parsePattern: uN,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: et({
    matchPatterns: dN,
    defaultMatchWidth: "wide",
    parsePatterns: fN,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: pN,
    defaultMatchWidth: "wide",
    parsePatterns: mN,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: et({
    matchPatterns: hN,
    defaultMatchWidth: "wide",
    parsePatterns: vN,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: gN,
    defaultMatchWidth: "wide",
    parsePatterns: yN,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: bN,
    defaultMatchWidth: "any",
    parsePatterns: xN,
    defaultParseWidth: "any"
  })
}, Qy = {
  code: "en-US",
  formatDistance: GT,
  formatLong: XT,
  formatRelative: ZT,
  localize: iN,
  match: wN,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function _N(e, t) {
  const r = de(e, t?.in);
  return tt(r, Ky(r)) + 1;
}
function Zy(e, t) {
  const r = de(e, t?.in), n = +Gt(r) - +FT(r);
  return Math.round(n / qu) + 1;
}
function Jy(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = En(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = Se(t?.in || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = at(i, t), c = Se(t?.in || e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const l = at(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function SN(e, t) {
  const r = En(), n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = Jy(e, t), a = Se(t?.in || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), at(a, t);
}
function eb(e, t) {
  const r = de(e, t?.in), n = +at(r, t) - +SN(r, t);
  return Math.round(n / qu) + 1;
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
}, pr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Zf = {
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
    const o = Jy(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return fe(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : fe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Uy(e);
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
    const o = eb(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : fe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Zy(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : fe(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Ct.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = _N(e);
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
    switch (n === 12 ? o = pr.noon : n === 0 ? o = pr.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
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
    switch (n >= 17 ? o = pr.evening : n >= 12 ? o = pr.afternoon : n >= 4 ? o = pr.morning : o = pr.night, t) {
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
        return ep(n);
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
        return ep(n);
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
        return "GMT" + Jf(n, ":");
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
        return "GMT" + Jf(n, ":");
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
function Jf(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + fe(a, 2);
}
function ep(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2) : Ht(e, t);
}
function Ht(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = fe(Math.trunc(n / 60), 2), a = fe(n % 60, 2);
  return r + o + t + a;
}
const tp = (e, t) => {
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
}, tb = (e, t) => {
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
}, CN = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return tp(e, t);
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
  return a.replace("{{date}}", tp(n, t)).replace("{{time}}", tb(o, t));
}, PN = {
  p: tb,
  P: CN
}, EN = /^D+$/, RN = /^Y+$/, TN = ["D", "DD", "YY", "YYYY"];
function NN(e) {
  return EN.test(e);
}
function MN(e) {
  return RN.test(e);
}
function AN(e, t, r) {
  const n = ON(e, t, r);
  if (console.warn(n), TN.includes(e)) throw new RangeError(n);
}
function ON(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const jN = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, DN = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kN = /^'([^]*?)'?$/, IN = /''/g, LN = /[a-zA-Z]/;
function lt(e, t, r) {
  const n = En(), o = r?.locale ?? n.locale ?? Qy, a = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, s = de(e, r?.in);
  if (!HT(s))
    throw new RangeError("Invalid time value");
  let c = t.match(DN).map((d) => {
    const p = d[0];
    if (p === "p" || p === "P") {
      const m = PN[p];
      return m(d, o.formatLong);
    }
    return d;
  }).join("").match(jN).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const p = d[0];
    if (p === "'")
      return { isToken: !1, value: $N(d) };
    if (Zf[p])
      return { isToken: !0, value: d };
    if (p.match(LN))
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
    (!r?.useAdditionalWeekYearTokens && MN(p) || !r?.useAdditionalDayOfYearTokens && NN(p)) && AN(p, t, String(e));
    const m = Zf[p[0]];
    return m(s, p, o.localize, l);
  }).join("");
}
function $N(e) {
  const t = e.match(kN);
  return t ? t[1].replace(IN, "'") : e;
}
function FN(e, t) {
  const r = de(e, t?.in), n = r.getFullYear(), o = r.getMonth(), a = Se(r, 0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function qN(e) {
  return Math.trunc(+de(e) / 1e3);
}
function BN(e, t) {
  const r = de(e, t?.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(0, 0, 0, 0), de(r, t?.in);
}
function WN(e, t) {
  const r = de(e, t?.in);
  return VT(
    BN(r, t),
    Me(r, t),
    t
  ) + 1;
}
function Il(e, t) {
  return +de(e) > +de(t);
}
function rb(e, t) {
  return +de(e) < +de(t);
}
function Vu(e, t, r) {
  const [n, o] = Fr(
    r?.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function HN(e, t, r) {
  const [n, o] = Fr(
    r?.in,
    e,
    t
  );
  return n.getFullYear() === o.getFullYear();
}
function ui(e, t, r) {
  return Ee(e, -t, r);
}
function di(e, t, r) {
  const n = de(e, r?.in), o = n.getFullYear(), a = n.getDate(), i = Se(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = FN(i);
  return n.setMonth(t, Math.min(a, s)), n;
}
function rp(e, t, r) {
  const n = de(e, r?.in);
  return isNaN(+n) ? Se(e, NaN) : (n.setFullYear(t), n);
}
const VN = {
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
}, zN = (e, t, r) => {
  let n;
  const o = VN[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", String(t)), r?.addSuffix ? r.comparison && r.comparison > 0 ? "em " + n : "há " + n : n;
}, GN = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, UN = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, KN = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, YN = {
  date: yr({
    formats: GN,
    defaultWidth: "full"
  }),
  time: yr({
    formats: UN,
    defaultWidth: "full"
  }),
  dateTime: yr({
    formats: KN,
    defaultWidth: "full"
  })
}, XN = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, QN = (e, t, r, n) => {
  const o = XN[e];
  return typeof o == "function" ? o(t) : o;
}, ZN = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, JN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, e1 = {
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
}, t1 = {
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
}, r1 = {
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
}, n1 = {
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
}, o1 = (e, t) => {
  const r = Number(e);
  return t?.unit === "week" ? r + "ª" : r + "º";
}, a1 = {
  ordinalNumber: o1,
  era: Je({
    values: ZN,
    defaultWidth: "wide"
  }),
  quarter: Je({
    values: JN,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Je({
    values: e1,
    defaultWidth: "wide"
  }),
  day: Je({
    values: t1,
    defaultWidth: "wide"
  }),
  dayPeriod: Je({
    values: r1,
    defaultWidth: "wide",
    formattingValues: n1,
    defaultFormattingWidth: "wide"
  })
}, i1 = /^(\d+)[ºªo]?/i, s1 = /\d+/i, c1 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, l1 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, u1 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, d1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, f1 = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, p1 = {
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
}, m1 = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, h1 = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, v1 = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, g1 = {
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
}, y1 = {
  ordinalNumber: Xy({
    matchPattern: i1,
    parsePattern: s1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: et({
    matchPatterns: c1,
    defaultMatchWidth: "wide",
    parsePatterns: l1,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: u1,
    defaultMatchWidth: "wide",
    parsePatterns: d1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: et({
    matchPatterns: f1,
    defaultMatchWidth: "wide",
    parsePatterns: p1,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: m1,
    defaultMatchWidth: "wide",
    parsePatterns: h1,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: v1,
    defaultMatchWidth: "any",
    parsePatterns: g1,
    defaultParseWidth: "any"
  })
}, en = {
  code: "pt-BR",
  formatDistance: zN,
  formatLong: YN,
  formatRelative: QN,
  localize: a1,
  match: y1,
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
function b1(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function nb(e, t, r) {
  for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Rn(e) {
  return e.mode === "multiple";
}
function Tn(e) {
  return e.mode === "range";
}
function aa(e) {
  return e.mode === "single";
}
var x1 = {
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
function w1(e, t) {
  return lt(e, "LLLL y", t);
}
function _1(e, t) {
  return lt(e, "d", t);
}
function S1(e, t) {
  return lt(e, "LLLL", t);
}
function C1(e) {
  return "".concat(e);
}
function P1(e, t) {
  return lt(e, "cccccc", t);
}
function E1(e, t) {
  return lt(e, "yyyy", t);
}
var R1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: w1,
  formatDay: _1,
  formatMonthCaption: S1,
  formatWeekNumber: C1,
  formatWeekdayName: P1,
  formatYearCaption: E1
}), T1 = function(e, t, r) {
  return lt(e, "do MMMM (EEEE)", r);
}, N1 = function() {
  return "Month: ";
}, M1 = function() {
  return "Go to next month";
}, A1 = function() {
  return "Go to previous month";
}, O1 = function(e, t) {
  return lt(e, "cccc", t);
}, j1 = function(e) {
  return "Week n. ".concat(e);
}, D1 = function() {
  return "Year: ";
}, k1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: T1,
  labelMonthDropdown: N1,
  labelNext: M1,
  labelPrevious: A1,
  labelWeekNumber: j1,
  labelWeekday: O1,
  labelYearDropdown: D1
});
function I1() {
  var e = "buttons", t = x1, r = Qy, n = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: R1,
    labels: k1,
    locale: r,
    modifiersClassNames: n,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function L1(e) {
  var t = e.fromYear, r = e.toYear, n = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return n ? a = Me(n) : t && (a = new Date(t, 0, 1)), o ? i = Wu(o) : r && (i = new Date(r, 11, 31)), {
    fromDate: a ? Cr(a) : void 0,
    toDate: i ? Cr(i) : void 0
  };
}
var ob = Zt(void 0);
function $1(e) {
  var t, r = e.initialProps, n = I1(), o = L1(r), a = o.fromDate, i = o.toDate, s = (t = r.captionLayout) !== null && t !== void 0 ? t : n.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (aa(r) || Rn(r) || Tn(r)) && (c = r.onSelect);
  var l = ae(ae(ae({}, n), r), { captionLayout: s, classNames: ae(ae({}, n.classNames), r.classNames), components: ae({}, r.components), formatters: ae(ae({}, n.formatters), r.formatters), fromDate: a, labels: ae(ae({}, n.labels), r.labels), mode: r.mode || n.mode, modifiers: ae(ae({}, n.modifiers), r.modifiers), modifiersClassNames: ae(ae({}, n.modifiersClassNames), r.modifiersClassNames), onSelect: c, styles: ae(ae({}, n.styles), r.styles), toDate: i });
  return u.jsx(ob.Provider, { value: l, children: e.children });
}
function pe() {
  var e = Jt(ob);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function ab(e) {
  var t = pe(), r = t.locale, n = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: n.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: r }) });
}
function F1(e) {
  return u.jsx("svg", ae({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function ib(e) {
  var t, r, n = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, l = pe(), d = (r = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && r !== void 0 ? r : F1;
  return u.jsxs("div", { className: s, style: c, children: [u.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: n, children: a }), u.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [i, u.jsx(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function q1(e) {
  var t, r = pe(), n = r.fromDate, o = r.toDate, a = r.styles, i = r.locale, s = r.formatters.formatMonthCaption, c = r.classNames, l = r.components, d = r.labels.labelMonthDropdown;
  if (!n)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var p = [];
  if (HN(n, o))
    for (var m = Me(n), g = n.getMonth(); g <= o.getMonth(); g++)
      p.push(di(m, g));
  else
    for (var m = Me(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      p.push(di(m, g));
  var y = function(v) {
    var b = Number(v.target.value), x = di(Me(e.displayMonth), b);
    e.onChange(x);
  }, h = (t = l?.Dropdown) !== null && t !== void 0 ? t : ib;
  return u.jsx(h, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: y, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(v) {
    return u.jsx("option", { value: v.getMonth(), children: s(v, { locale: i }) }, v.getMonth());
  }) });
}
function B1(e) {
  var t, r = e.displayMonth, n = pe(), o = n.fromDate, a = n.toDate, i = n.locale, s = n.styles, c = n.classNames, l = n.components, d = n.formatters.formatYearCaption, p = n.labels.labelYearDropdown, m = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var g = o.getFullYear(), y = a.getFullYear(), h = g; h <= y; h++)
    m.push(rp(Ky(/* @__PURE__ */ new Date()), h));
  var v = function(x) {
    var w = rp(Me(r), Number(x.target.value));
    e.onChange(w);
  }, b = (t = l?.Dropdown) !== null && t !== void 0 ? t : ib;
  return u.jsx(b, { name: "years", "aria-label": p(), className: c.dropdown_year, style: s.dropdown_year, onChange: v, value: r.getFullYear(), caption: d(r, { locale: i }), children: m.map(function(x) {
    return u.jsx("option", { value: x.getFullYear(), children: d(x, { locale: i }) }, x.getFullYear());
  }) });
}
function W1(e, t) {
  var r = Te(e), n = r[0], o = r[1], a = t === void 0 ? n : t;
  return [a, o];
}
function H1(e) {
  var t = e.month, r = e.defaultMonth, n = e.today, o = t || r || n || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && on(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Fe(a, l);
  }
  return i && on(o, i) < 0 && (o = i), Me(o);
}
function V1() {
  var e = pe(), t = H1(e), r = W1(t, e.month), n = r[0], o = r[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = Me(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [n, a];
}
function z1(e, t) {
  for (var r = t.reverseMonths, n = t.numberOfMonths, o = Me(e), a = Me(Fe(o, n)), i = on(a, o), s = [], c = 0; c < i; c++) {
    var l = Fe(o, c);
    s.push(l);
  }
  return r && (s = s.reverse()), s;
}
function G1(e, t) {
  if (!t.disableNavigation) {
    var r = t.toDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = Me(e);
    if (!r)
      return Fe(s, i);
    var c = on(r, e);
    if (!(c < a))
      return Fe(s, i);
  }
}
function U1(e, t) {
  if (!t.disableNavigation) {
    var r = t.fromDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = Me(e);
    if (!r)
      return Fe(s, -i);
    var c = on(s, r);
    if (!(c <= 0))
      return Fe(s, -i);
  }
}
var sb = Zt(void 0);
function K1(e) {
  var t = pe(), r = V1(), n = r[0], o = r[1], a = z1(n, t), i = G1(n, t), s = U1(n, t), c = function(p) {
    return a.some(function(m) {
      return Vu(p, m);
    });
  }, l = function(p, m) {
    c(p) || (m && rb(p, m) ? o(Fe(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, d = {
    currentMonth: n,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return u.jsx(sb.Provider, { value: d, children: e.children });
}
function Nn() {
  var e = Jt(sb);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function np(e) {
  var t, r = pe(), n = r.classNames, o = r.styles, a = r.components, i = Nn().goToMonth, s = function(d) {
    i(Fe(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a?.CaptionLabel) !== null && t !== void 0 ? t : ab, l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: n.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: n.vhidden, children: l }), u.jsx(q1, { onChange: s, displayMonth: e.displayMonth }), u.jsx(B1, { onChange: s, displayMonth: e.displayMonth })] });
}
function Y1(e) {
  return u.jsx("svg", ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function X1(e) {
  return u.jsx("svg", ae({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var So = Uo(function(e, t) {
  var r = pe(), n = r.classNames, o = r.styles, a = [n.button_reset, n.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ae(ae({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), u.jsx("button", ae({}, e, { ref: t, type: "button", className: i, style: s }));
});
function Q1(e) {
  var t, r, n = pe(), o = n.dir, a = n.locale, i = n.classNames, s = n.styles, c = n.labels, l = c.labelPrevious, d = c.labelNext, p = n.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var m = l(e.previousMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), y = d(e.nextMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), v = (t = p?.IconRight) !== null && t !== void 0 ? t : X1, b = (r = p?.IconLeft) !== null && r !== void 0 ? r : Y1;
  return u.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && u.jsx(So, { name: "previous-month", "aria-label": m, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(v, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && u.jsx(So, { name: "next-month", "aria-label": y, className: h, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(b, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(v, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function op(e) {
  var t = pe().numberOfMonths, r = Nn(), n = r.previousMonth, o = r.nextMonth, a = r.goToMonth, i = r.displayMonths, s = i.findIndex(function(y) {
    return Vu(e.displayMonth, y);
  }), c = s === 0, l = s === i.length - 1, d = t > 1 && (c || !l), p = t > 1 && (l || !c), m = function() {
    n && a(n);
  }, g = function() {
    o && a(o);
  };
  return u.jsx(Q1, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: p, nextMonth: o, previousMonth: n, onPreviousClick: m, onNextClick: g });
}
function Z1(e) {
  var t, r = pe(), n = r.classNames, o = r.disableNavigation, a = r.styles, i = r.captionLayout, s = r.components, c = (t = s?.CaptionLabel) !== null && t !== void 0 ? t : ab, l;
  return o ? l = u.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? l = u.jsx(np, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? l = u.jsxs(u.Fragment, { children: [u.jsx(np, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(op, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = u.jsxs(u.Fragment, { children: [u.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(op, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: n.caption, style: a.caption, children: l });
}
function J1(e) {
  var t = pe(), r = t.footer, n = t.styles, o = t.classNames.tfoot;
  return r ? u.jsx("tfoot", { className: o, style: n.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: r }) }) }) : u.jsx(u.Fragment, {});
}
function eM(e, t, r) {
  for (var n = r ? Gt(/* @__PURE__ */ new Date()) : at(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ee(n, a);
    o.push(i);
  }
  return o;
}
function tM() {
  var e = pe(), t = e.classNames, r = e.styles, n = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = eM(o, a, i);
  return u.jsxs("tr", { style: r.head_row, className: t.head_row, children: [n && u.jsx("td", { style: r.head_cell, className: t.head_cell }), l.map(function(d, p) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: r.head_cell, "aria-label": c(d, { locale: o }), children: s(d, { locale: o }) }, p);
  })] });
}
function rM() {
  var e, t = pe(), r = t.classNames, n = t.styles, o = t.components, a = (e = o?.HeadRow) !== null && e !== void 0 ? e : tM;
  return u.jsx("thead", { style: n.head, className: r.head, children: u.jsx(a, {}) });
}
function nM(e) {
  var t = pe(), r = t.locale, n = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: n(e.date, { locale: r }) });
}
var zu = Zt(void 0);
function oM(e) {
  if (!Rn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(zu.Provider, { value: t, children: e.children });
  }
  return u.jsx(aM, { initialProps: e.initialProps, children: e.children });
}
function aM(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = t.min, a = t.max, i = function(l, d, p) {
    var m, g;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, l, d, p);
    var y = !!(d.selected && o && n?.length === o);
    if (!y) {
      var h = !!(!d.selected && a && n?.length === a);
      if (!h) {
        var v = n ? nb([], n) : [];
        if (d.selected) {
          var b = v.findIndex(function(x) {
            return Ne(l, x);
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
      return Ne(m, l);
    });
    return !!(d && !p);
  });
  var c = {
    selected: n,
    onDayClick: i,
    modifiers: s
  };
  return u.jsx(zu.Provider, { value: c, children: r });
}
function Gu() {
  var e = Jt(zu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function iM(e, t) {
  var r = t || {}, n = r.from, o = r.to;
  return n && o ? Ne(o, e) && Ne(n, e) ? void 0 : Ne(o, e) ? { from: o, to: void 0 } : Ne(n, e) ? void 0 : Il(n, e) ? { from: e, to: o } : { from: n, to: e } : o ? Il(e, o) ? { from: o, to: e } : { from: e, to: o } : n ? rb(e, n) ? { from: e, to: n } : { from: n, to: e } : { from: e, to: void 0 };
}
var Uu = Zt(void 0);
function sM(e) {
  if (!Tn(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(Uu.Provider, { value: t, children: e.children });
  }
  return u.jsx(cM, { initialProps: e.initialProps, children: e.children });
}
function cM(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = n || {}, a = o.from, i = o.to, s = t.min, c = t.max, l = function(g, y, h) {
    var v, b;
    (v = t.onDayClick) === null || v === void 0 || v.call(t, g, y, h);
    var x = iM(g, n);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, g, y, h);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], i ? (d.range_end = [i], Ne(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]) : i && (d.range_start = [i], d.range_end = [i]), s && (a && !i && d.disabled.push({
    after: ui(a, s - 1),
    before: Ee(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: Ee(a, s - 1)
  }), !a && i && d.disabled.push({
    after: ui(i, s - 1),
    before: Ee(i, s - 1)
  })), c) {
    if (a && !i && (d.disabled.push({
      before: Ee(a, -c + 1)
    }), d.disabled.push({
      after: Ee(a, c - 1)
    })), a && i) {
      var p = tt(i, a) + 1, m = c - p;
      d.disabled.push({
        before: ui(a, m)
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
  return u.jsx(Uu.Provider, { value: { selected: n, onDayClick: l, modifiers: d }, children: r });
}
function Ku() {
  var e = Jt(Uu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function po(e) {
  return Array.isArray(e) ? nb([], e) : e !== void 0 ? [e] : [];
}
function lM(e) {
  var t = {};
  return Object.entries(e).forEach(function(r) {
    var n = r[0], o = r[1];
    t[n] = po(o);
  }), t;
}
var ze;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ze || (ze = {}));
var uM = ze.Selected, mt = ze.Disabled, dM = ze.Hidden, fM = ze.Today, fi = ze.RangeEnd, pi = ze.RangeMiddle, mi = ze.RangeStart, pM = ze.Outside;
function mM(e, t, r) {
  var n, o = (n = {}, n[uM] = po(e.selected), n[mt] = po(e.disabled), n[dM] = po(e.hidden), n[fM] = [e.today], n[fi] = [], n[pi] = [], n[mi] = [], n[pM] = [], n);
  return e.fromDate && o[mt].push({ before: e.fromDate }), e.toDate && o[mt].push({ after: e.toDate }), Rn(e) ? o[mt] = o[mt].concat(t.modifiers[mt]) : Tn(e) && (o[mt] = o[mt].concat(r.modifiers[mt]), o[mi] = r.modifiers[mi], o[pi] = r.modifiers[pi], o[fi] = r.modifiers[fi]), o;
}
var cb = Zt(void 0);
function hM(e) {
  var t = pe(), r = Gu(), n = Ku(), o = mM(t, r, n), a = lM(t.modifiers), i = ae(ae({}, o), a);
  return u.jsx(cb.Provider, { value: i, children: e.children });
}
function lb() {
  var e = Jt(cb);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function vM(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function gM(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function yM(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function bM(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function xM(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function wM(e, t) {
  var r, n = t.from, o = t.to;
  if (n && o) {
    var a = tt(o, n) < 0;
    a && (r = [o, n], n = r[0], o = r[1]);
    var i = tt(e, n) >= 0 && tt(o, e) >= 0;
    return i;
  }
  return o ? Ne(o, e) : n ? Ne(n, e) : !1;
}
function _M(e) {
  return Bu(e);
}
function SM(e) {
  return Array.isArray(e) && e.every(Bu);
}
function CM(e, t) {
  return t.some(function(r) {
    if (typeof r == "boolean")
      return r;
    if (_M(r))
      return Ne(e, r);
    if (SM(r))
      return r.includes(e);
    if (gM(r))
      return wM(e, r);
    if (xM(r))
      return r.dayOfWeek.includes(e.getDay());
    if (vM(r)) {
      var n = tt(r.before, e), o = tt(r.after, e), a = n > 0, i = o < 0, s = Il(r.before, r.after);
      return s ? i && a : a || i;
    }
    return yM(r) ? tt(e, r.after) > 0 : bM(r) ? tt(r.before, e) > 0 : typeof r == "function" ? r(e) : !1;
  });
}
function Yu(e, t, r) {
  var n = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return CM(e, s) && a.push(i), a;
  }, []), o = {};
  return n.forEach(function(a) {
    return o[a] = !0;
  }), r && !Vu(e, r) && (o.outside = !0), o;
}
function PM(e, t) {
  for (var r = Me(e[0]), n = Wu(e[e.length - 1]), o, a, i = r; i <= n; ) {
    var s = Yu(i, t), c = !s.disabled && !s.hidden;
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
var EM = 365;
function ub(e, t) {
  var r = t.moveBy, n = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, p = o.locale, m = {
    day: Ee,
    week: kl,
    month: Fe,
    year: qT,
    startOfWeek: function(v) {
      return o.ISOWeek ? Gt(v) : at(v, { locale: p, weekStartsOn: c });
    },
    endOfWeek: function(v) {
      return o.ISOWeek ? Yy(v) : Hu(v, { locale: p, weekStartsOn: c });
    }
  }, g = m[r](e, n === "after" ? 1 : -1);
  n === "before" && l ? g = BT([l, g]) : n === "after" && d && (g = WT([d, g]));
  var y = !0;
  if (a) {
    var h = Yu(g, a);
    y = !h.disabled && !h.hidden;
  }
  return y ? g : s.count > EM ? s.lastFocused : ub(g, {
    moveBy: r,
    direction: n,
    context: o,
    modifiers: a,
    retry: ae(ae({}, s), { count: s.count + 1 })
  });
}
var db = Zt(void 0);
function RM(e) {
  var t = Nn(), r = lb(), n = Te(), o = n[0], a = n[1], i = Te(), s = i[0], c = i[1], l = PM(t.displayMonths, r), d = o ?? (s && t.isDateDisplayed(s)) ? s : l, p = function() {
    c(o), a(void 0);
  }, m = function(v) {
    a(v);
  }, g = pe(), y = function(v, b) {
    if (o) {
      var x = ub(o, {
        moveBy: v,
        direction: b,
        context: g,
        modifiers: r
      });
      Ne(o, x) || (t.goToDate(x, o), m(x));
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
  return u.jsx(db.Provider, { value: h, children: e.children });
}
function Xu() {
  var e = Jt(db);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function TM(e, t) {
  var r = lb(), n = Yu(e, r, t);
  return n;
}
var Qu = Zt(void 0);
function NM(e) {
  if (!aa(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(Qu.Provider, { value: t, children: e.children });
  }
  return u.jsx(MM, { initialProps: e.initialProps, children: e.children });
}
function MM(e) {
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
  return u.jsx(Qu.Provider, { value: o, children: r });
}
function fb() {
  var e = Jt(Qu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function AM(e, t) {
  var r = pe(), n = fb(), o = Gu(), a = Ku(), i = Xu(), s = i.focusDayAfter, c = i.focusDayBefore, l = i.focusWeekAfter, d = i.focusWeekBefore, p = i.blur, m = i.focus, g = i.focusMonthBefore, y = i.focusMonthAfter, h = i.focusYearBefore, v = i.focusYearAfter, b = i.focusStartOfWeek, x = i.focusEndOfWeek, w = function(D) {
    var R, W, O, z;
    aa(r) ? (R = n.onDayClick) === null || R === void 0 || R.call(n, e, t, D) : Rn(r) ? (W = o.onDayClick) === null || W === void 0 || W.call(o, e, t, D) : Tn(r) ? (O = a.onDayClick) === null || O === void 0 || O.call(a, e, t, D) : (z = r.onDayClick) === null || z === void 0 || z.call(r, e, t, D);
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
  }, M = function(D) {
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
    onKeyUp: M,
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
function OM() {
  var e = pe(), t = fb(), r = Gu(), n = Ku(), o = aa(e) ? t.selected : Rn(e) ? r.selected : Tn(e) ? n.selected : void 0;
  return o;
}
function jM(e) {
  return Object.values(ze).includes(e);
}
function DM(e, t) {
  var r = [e.classNames.day];
  return Object.keys(t).forEach(function(n) {
    var o = e.modifiersClassNames[n];
    if (o)
      r.push(o);
    else if (jM(n)) {
      var a = e.classNames["day_".concat(n)];
      a && r.push(a);
    }
  }), r;
}
function kM(e, t) {
  var r = ae({}, e.styles.day);
  return Object.keys(t).forEach(function(n) {
    var o;
    r = ae(ae({}, r), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[n]);
  }), r;
}
function IM(e, t, r) {
  var n, o, a, i = pe(), s = Xu(), c = TM(e, t), l = AM(e, c), d = OM(), p = !!(i.onDayClick || i.mode !== "default");
  je(function() {
    var C;
    c.outside || s.focusedDay && p && Ne(s.focusedDay, e) && ((C = r.current) === null || C === void 0 || C.focus());
  }, [
    s.focusedDay,
    e,
    r,
    p,
    c.outside
  ]);
  var m = DM(i, c).join(" "), g = kM(i, c), y = !!(c.outside && !i.showOutsideDays || c.hidden), h = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : nM, v = u.jsx(h, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: g,
    className: m,
    children: v,
    role: "gridcell"
  }, x = s.focusTarget && Ne(s.focusTarget, e) && !c.outside, w = s.focusedDay && Ne(s.focusedDay, e), _ = ae(ae(ae({}, b), (n = { disabled: c.disabled, role: "gridcell" }, n["aria-selected"] = c.selected, n.tabIndex = w || x ? 0 : -1, n)), l), S = {
    isButton: p,
    isHidden: y,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: _,
    divProps: b
  };
  return S;
}
function LM(e) {
  var t = wr(null), r = IM(e.date, e.displayMonth, t);
  return r.isHidden ? u.jsx("div", { role: "gridcell" }) : r.isButton ? u.jsx(So, ae({ name: "day", ref: t }, r.buttonProps)) : u.jsx("div", ae({}, r.divProps));
}
function $M(e) {
  var t = e.number, r = e.dates, n = pe(), o = n.onWeekNumberClick, a = n.styles, i = n.classNames, s = n.locale, c = n.labels.labelWeekNumber, l = n.formatters.formatWeekNumber, d = l(Number(t), { locale: s });
  if (!o)
    return u.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var p = c(Number(t), { locale: s }), m = function(g) {
    o(t, r, g);
  };
  return u.jsx(So, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: m, children: d });
}
function FM(e) {
  var t, r, n = pe(), o = n.styles, a = n.classNames, i = n.showWeekNumber, s = n.components, c = (t = s?.Day) !== null && t !== void 0 ? t : LM, l = (r = s?.WeekNumber) !== null && r !== void 0 ? r : $M, d;
  return i && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(l, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(p) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(c, { displayMonth: e.displayMonth, date: p }) }, qN(p));
  })] });
}
function ap(e, t, r) {
  for (var n = r?.ISOWeek ? Yy(t) : Hu(t, r), o = r?.ISOWeek ? Gt(e) : at(e, r), a = tt(n, o), i = [], s = 0; s <= a; s++)
    i.push(Ee(o, s));
  var c = i.reduce(function(l, d) {
    var p = r?.ISOWeek ? Zy(d) : eb(d, r), m = l.find(function(g) {
      return g.weekNumber === p;
    });
    return m ? (m.dates.push(d), l) : (l.push({
      weekNumber: p,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function qM(e, t) {
  var r = ap(Me(e), Wu(e), t);
  if (t?.useFixedWeeks) {
    var n = WN(e, t);
    if (n < 6) {
      var o = r[r.length - 1], a = o.dates[o.dates.length - 1], i = kl(a, 6 - n), s = ap(kl(a, 1), i, t);
      r.push.apply(r, s);
    }
  }
  return r;
}
function BM(e) {
  var t, r, n, o = pe(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, p = o.weekStartsOn, m = o.firstWeekContainsDate, g = o.ISOWeek, y = qM(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: g,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: m
  }), h = (t = d?.Head) !== null && t !== void 0 ? t : rM, v = (r = d?.Row) !== null && r !== void 0 ? r : FM, b = (n = d?.Footer) !== null && n !== void 0 ? n : J1;
  return u.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && u.jsx(h, {}), u.jsx("tbody", { className: i.tbody, style: s.tbody, children: y.map(function(x) {
    return u.jsx(v, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), u.jsx(b, { displayMonth: e.displayMonth })] });
}
function WM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var HM = WM() ? ng : je, hi = !1, VM = 0;
function ip() {
  return "react-day-picker-".concat(++VM);
}
function zM(e) {
  var t, r = e ?? (hi ? ip() : null), n = Te(r), o = n[0], a = n[1];
  return HM(function() {
    o === null && a(ip());
  }, []), je(function() {
    hi === !1 && (hi = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function GM(e) {
  var t, r, n = pe(), o = n.dir, a = n.classNames, i = n.styles, s = n.components, c = Nn().displayMonths, l = zM(n.id ? "".concat(n.id, "-").concat(e.displayIndex) : void 0), d = n.id ? "".concat(n.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], m = i.month, g = e.displayIndex === 0, y = e.displayIndex === c.length - 1, h = !g && !y;
  o === "rtl" && (t = [g, y], y = t[0], g = t[1]), g && (p.push(a.caption_start), m = ae(ae({}, m), i.caption_start)), y && (p.push(a.caption_end), m = ae(ae({}, m), i.caption_end)), h && (p.push(a.caption_between), m = ae(ae({}, m), i.caption_between));
  var v = (r = s?.Caption) !== null && r !== void 0 ? r : Z1;
  return u.jsxs("div", { className: p.join(" "), style: m, children: [u.jsx(v, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(BM, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function UM(e) {
  var t = pe(), r = t.classNames, n = t.styles;
  return u.jsx("div", { className: r.months, style: n.months, children: e.children });
}
function KM(e) {
  var t, r, n = e.initialProps, o = pe(), a = Xu(), i = Nn(), s = Te(!1), c = s[0], l = s[1];
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
  }, {}), g = (r = (t = n.components) === null || t === void 0 ? void 0 : t.Months) !== null && r !== void 0 ? r : UM;
  return u.jsx("div", ae({ className: d.join(" "), style: p, dir: o.dir, id: o.id, nonce: n.nonce, title: n.title, lang: n.lang }, m, { children: u.jsx(g, { children: i.displayMonths.map(function(y, h) {
    return u.jsx(GM, { displayIndex: h, displayMonth: y }, h);
  }) }) }));
}
function YM(e) {
  var t = e.children, r = b1(e, ["children"]);
  return u.jsx($1, { initialProps: r, children: u.jsx(K1, { children: u.jsx(NM, { initialProps: r, children: u.jsx(oM, { initialProps: r, children: u.jsx(sM, { initialProps: r, children: u.jsx(hM, { children: u.jsx(RM, { children: t }) }) }) }) }) }) });
}
function pb(e) {
  return u.jsx(YM, ae({}, e, { children: u.jsx(KM, { initialProps: e }) }));
}
const XM = "(##) ####-####", QM = "(##) #####-####", ZM = "#####-###", JM = "###.###.###-##", eA = "##.###.###/####-##", tA = "###########", rA = "##.###.###-#", nA = "AAA#A##", oA = "###########", aA = "##############", mb = (e, t) => {
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
}, c4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: QM,
  CNH_MASK: tA,
  CNPJ_MASK: eA,
  CPF_MASK: JM,
  PHONE_MASK: XM,
  PLATE_MASK: nA,
  RENAVAM_MASK: oA,
  RG_MASK: rA,
  RNTRC_MASK: aA,
  ZIP_CODE_MASK: ZM,
  formatMask: mb
}, Symbol.toStringTag, { value: "Module" })), l4 = [
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
function hb({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    pb,
    {
      showOutsideDays: r,
      className: N("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: N(
          gt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: N(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          n.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: N(
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
        IconLeft: ({ className: o, ...a }) => /* @__PURE__ */ u.jsx(ju, { className: N("h-4 w-4", o), ...a }),
        IconRight: ({ className: o, ...a }) => /* @__PURE__ */ u.jsx(wn, { className: N("h-4 w-4", o), ...a })
      },
      ...n
    }
  );
}
hb.displayName = "Calendar";
const iA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: N(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
iA.displayName = "Card";
const sA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: N("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
sA.displayName = "CardHeader";
const cA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    ref: r,
    className: N(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
cA.displayName = "CardTitle";
const lA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: r,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
lA.displayName = "CardDescription";
const uA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { ref: r, className: N("p-4", e), ...t }));
uA.displayName = "CardContent";
const dA = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: N("flex items-center p-4 pt-0", e),
    ...t
  }
));
dA.displayName = "CardFooter";
function fA(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function sp(e) {
  return fA(e) || Array.isArray(e);
}
function pA() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zu(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : r.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !sp(s) || !sp(c) ? s === c : Zu(s, c);
  });
}
function cp(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function mA(e, t) {
  if (e.length !== t.length) return !1;
  const r = cp(e), n = cp(t);
  return r.every((o, a) => {
    const i = n[a];
    return Zu(o, i);
  });
}
function Ju(e) {
  return typeof e == "number";
}
function Ll(e) {
  return typeof e == "string";
}
function ia(e) {
  return typeof e == "boolean";
}
function lp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ye(e) {
  return Math.abs(e);
}
function ed(e) {
  return Math.sign(e);
}
function tn(e, t) {
  return ye(e - t);
}
function hA(e, t) {
  if (e === 0 || t === 0 || ye(e) <= ye(t)) return 0;
  const r = tn(ye(e), ye(t));
  return ye(r / e);
}
function vA(e) {
  return Math.round(e * 100) / 100;
}
function an(e) {
  return sn(e).map(Number);
}
function Ve(e) {
  return e[Mn(e)];
}
function Mn(e) {
  return Math.max(0, e.length - 1);
}
function td(e, t) {
  return t === Mn(e);
}
function up(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function sn(e) {
  return Object.keys(e);
}
function vb(e, t) {
  return [e, t].reduce((r, n) => (sn(n).forEach((o) => {
    const a = r[o], i = n[o], s = lp(a) && lp(i);
    r[o] = s ? vb(a, i) : i;
  }), r), {});
}
function $l(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function gA(e, t) {
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
    return Ll(e) ? r[e](c) : e(t, c, l);
  }
  return {
    measure: i
  };
}
function cn() {
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
function yA(e, t, r, n) {
  const o = cn(), a = 1e3 / 60;
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
function bA(e, t) {
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
function gb(e, t, r) {
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
    return gb(e, s(), r);
  }
  const p = {
    get: s,
    set: c,
    add: l,
    clone: d
  };
  return p;
}
function xA(e, t, r, n, o, a, i, s, c, l, d, p, m, g, y, h, v, b, x) {
  const {
    cross: w,
    direction: _
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], C = {
    passive: !1
  }, P = cn(), E = cn(), T = Ut(50, 225).constrain(g.measure(20)), I = {
    mouse: 300,
    touch: 400
  }, j = {
    mouse: 500,
    touch: 600
  }, V = y ? 43 : 25;
  let q = !1, M = 0, $ = 0, F = !1, D = !1, R = !1, W = !1;
  function O(U) {
    if (!x) return;
    function ie(ge) {
      (ia(x) || x(U, ge)) && ee(ge);
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
    const Y = p.add(ed(U) * -1), ge = d.byDistance(U, !y).distance;
    return y || ye(U) < T ? ge : v && ie ? ge * 0.5 : d.byIndex(Y.get(), 0).distance;
  }
  function ee(U) {
    const ie = $l(U, n);
    W = ie, R = y && ie && !U.buttons && q, q = tn(o.get(), i.get()) >= 2, !(ie && U.button !== 0) && (B(U.target) || (F = !0, a.pointerDown(U), l.useFriction(0).useDuration(0), o.set(i), A(), M = a.readPoint(U), $ = a.readPoint(U, w), m.emit("pointerDown")));
  }
  function k(U) {
    if (!$l(U, n) && U.touches.length >= 2) return X(U);
    const Y = a.readPoint(U), ge = a.readPoint(U, w), we = tn(Y, M), Pe = tn(ge, $);
    if (!D && !W && (!U.cancelable || (D = we > Pe, !D)))
      return X(U);
    const qt = a.pointerMove(U);
    we > h && (R = !0), l.useFriction(0.3).useDuration(0.75), s.start(), o.add(_(qt)), U.preventDefault();
  }
  function X(U) {
    const Y = d.byDistance(0, !1).index !== p.get(), ge = a.pointerUp(U) * K(), we = G(_(ge), Y), Pe = hA(ge, we), qt = V - 10 * Pe, _t = b + Pe / 50;
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
function wA(e, t) {
  let n, o;
  function a(p) {
    return p.timeStamp;
  }
  function i(p, m) {
    const y = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return ($l(p, t) ? p : p.touches[0])[y];
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
function _A() {
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
function SA(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function CA(e, t, r, n, o, a, i) {
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
      (ia(a) || a(v, x)) && b(x);
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
function PA(e, t, r, n, o, a) {
  let i = 0, s = 0, c = o, l = a, d = e.get(), p = 0;
  function m() {
    const C = n.get() - e.get(), P = !c;
    let E = 0;
    return P ? (i = 0, r.set(n), e.set(n), E = C) : (r.set(e), i += C / c, i *= l, d += i, e.add(i), E = d - p), s = ed(E), p = d, S;
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
function EA(e, t, r, n, o) {
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
function RA(e, t, r, n, o) {
  const a = Ut(-t + e, 0), i = p(), s = d(), c = m();
  function l(y, h) {
    return tn(y, h) <= 1;
  }
  function d() {
    const y = i[0], h = Ve(i), v = i.lastIndexOf(y), b = i.indexOf(h) + 1;
    return Ut(v, b);
  }
  function p() {
    return r.map((y, h) => {
      const {
        min: v,
        max: b
      } = a, x = a.constrain(y), w = !h, _ = td(r, h);
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
function TA(e, t, r) {
  const n = t[0], o = r ? n - e : Ve(t);
  return {
    limit: Ut(o, n)
  };
}
function NA(e, t, r, n) {
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
function MA(e) {
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
function AA(e, t, r, n, o) {
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
function OA(e, t, r, n, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = n, l = d();
  function d() {
    const m = i(a), g = !e || t === "keepSnaps";
    return r.length === 1 ? [a] : g ? m : m.slice(s, c).map((y, h, v) => {
      const b = !h, x = td(v, h);
      if (b) {
        const w = Ve(v[0]) + 1;
        return up(w);
      }
      if (x) {
        const w = Mn(a) - Ve(v)[0] + 1;
        return up(w, Ve(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: l
  };
}
function jA(e, t, r, n, o) {
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
    const b = v.filter((x) => ed(x) === h);
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
function DA(e, t, r, n, o, a, i) {
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
function kA(e, t, r, n, o, a, i, s) {
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
      Ju(x) && (o.useDuration(0), n.index(x, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((h, v) => {
      a.add(h, "focus", (b) => {
        (ia(s) || s(g, b)) && y(v);
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
function Yr(e) {
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
    return Ju(c) ? c : c.get();
  }
  return {
    get: r,
    set: n,
    add: o,
    subtract: a
  };
}
function yb(e, t) {
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
    const g = vA(e.direction(m));
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
function IA(e, t, r, n, o, a, i, s, c) {
  const d = an(o), p = an(o).reverse(), m = b().concat(x());
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
      const V = T ? 0 : -r, q = T ? r : 0, M = T ? "end" : "start", $ = I[j][M];
      return {
        index: j,
        loopPoint: $,
        slideLocation: Yr(-1),
        translate: yb(e, c[j]),
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
function LA(e, t, r) {
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
      o || (ia(r) || r(c, d)) && l(d);
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
function $A(e, t, r, n) {
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
    return sn(o).reduce((h, v) => {
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
function FA(e, t, r, n, o, a) {
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
      const S = !w, C = td(_, w);
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
function qA(e, t, r, n, o, a, i, s, c) {
  const {
    startEdge: l,
    endEdge: d,
    direction: p
  } = e, m = Ju(r);
  function g(b, x) {
    return an(b).filter((w) => w % x === 0).map((w) => b.slice(w, w + x));
  }
  function y(b) {
    return b.length ? an(b).reduce((x, w, _) => {
      const S = Ve(x) || 0, C = S === 0, P = w === Mn(b), E = o[l] - a[S][l], T = o[l] - a[w][d], I = !n && C ? p(i) : 0, j = !n && P ? p(s) : 0, V = ye(T - j - (E + I));
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
function BA(e, t, r, n, o, a, i) {
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
  } = a, P = 2, E = _A(), T = E.measure(t), I = r.map(E.measure), j = bA(c, l), V = j.measureSize(T), q = SA(V), M = gA(s, V), $ = !p && !!x, F = p || !!x, {
    slideSizes: D,
    slideSizesWithGaps: R,
    startGap: W,
    endGap: O
  } = FA(j, T, I, r, F, o), z = qA(j, V, v, p, T, I, W, O, P), {
    snaps: A,
    snapsAligned: B
  } = AA(j, M, T, I, z), K = -Ve(A) + Ve(R), {
    snapsContained: G,
    scrollContainLimit: ee
  } = RA(V, K, B, x, P), k = $ ? G : B, {
    limit: X
  } = TA(K, k, p), re = gb(Mn(k), d, p), oe = re.clone(), te = an(r), U = ({
    dragHandler: cr,
    scrollBody: Qa,
    scrollBounds: Za,
    options: {
      loop: Gn
    }
  }) => {
    Gn || Za.constrain(cr.pointerDown()), Qa.seek();
  }, ie = ({
    scrollBody: cr,
    translate: Qa,
    location: Za,
    offsetLocation: Gn,
    previousLocation: S0,
    scrollLooper: C0,
    slideLooper: P0,
    dragHandler: E0,
    animation: R0,
    eventHandler: gf,
    scrollBounds: T0,
    options: {
      loop: yf
    }
  }, bf) => {
    const xf = cr.settled(), N0 = !T0.shouldConstrain(), wf = yf ? xf : xf && N0, _f = wf && !E0.pointerDown();
    _f && R0.stop();
    const M0 = Za.get() * bf + S0.get() * (1 - bf);
    Gn.set(M0), yf && (C0.loop(cr.direction()), P0.loop()), Qa.to(Gn.get()), _f && gf.emit("settle"), wf || gf.emit("scroll");
  }, Y = yA(n, o, () => U(Xa), (cr) => ie(Xa, cr)), ge = 0.68, we = k[re.get()], Pe = Yr(we), qt = Yr(we), _t = Yr(we), Bt = Yr(we), Hr = PA(Pe, _t, qt, Bt, m, ge), Ka = jA(p, k, K, X, Bt), Ya = DA(Y, re, oe, Hr, Ka, Bt, i), mf = MA(X), hf = cn(), w0 = $A(t, r, i, h), {
    slideRegistry: vf
  } = OA($, x, k, ee, z, te), _0 = kA(e, r, vf, Ya, Hr, hf, i, C), Xa = {
    ownerDocument: n,
    ownerWindow: o,
    eventHandler: i,
    containerRect: T,
    slideRects: I,
    animation: Y,
    axis: j,
    dragHandler: xA(j, e, n, o, Bt, wA(j, o), Pe, Y, Ya, Hr, Ka, re, i, q, g, y, b, ge, S),
    eventStore: hf,
    percentOfView: q,
    index: re,
    indexPrevious: oe,
    limit: X,
    location: Pe,
    offsetLocation: _t,
    previousLocation: qt,
    options: a,
    resizeHandler: CA(t, i, o, r, j, w, E),
    scrollBody: Hr,
    scrollBounds: EA(X, _t, Bt, Hr, q),
    scrollLooper: NA(K, X, _t, [Pe, _t, qt, Bt]),
    scrollProgress: mf,
    scrollSnapList: k.map(mf.get),
    scrollSnaps: k,
    scrollTarget: Ka,
    scrollTo: Ya,
    slideLooper: IA(j, V, K, D, R, A, k, _t, r),
    slideFocus: _0,
    slidesHandler: LA(t, i, _),
    slidesInView: w0,
    slideIndexes: te,
    slideRegistry: vf,
    slidesToScroll: z,
    target: Bt,
    translate: yb(j, t)
  };
  return Xa;
}
function WA() {
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
const HA = {
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
function VA(e) {
  function t(a, i) {
    return vb(a, i || {});
  }
  function r(a) {
    const i = a.breakpoints || {}, s = sn(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, l) => t(c, l), {});
    return t(a, s);
  }
  function n(a) {
    return a.map((i) => sn(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function zA(e) {
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
function Co(e, t, r) {
  const n = e.ownerDocument, o = n.defaultView, a = VA(o), i = zA(a), s = cn(), c = WA(), {
    mergeOptions: l,
    optionsAtMedia: d,
    optionsMediaQueries: p
  } = a, {
    on: m,
    off: g,
    emit: y
  } = c, h = j;
  let v = !1, b, x = l(HA, Co.globalOptions), w = l(x), _ = [], S, C, P;
  function E() {
    const {
      container: te,
      slides: U
    } = w;
    C = (Ll(te) ? e.querySelector(te) : te) || e.children[0];
    const Y = Ll(U) ? C.querySelectorAll(U) : U;
    P = [].slice.call(Y || C.children);
  }
  function T(te) {
    const U = BA(e, C, P, n, o, te, c);
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
    scrollTo: M,
    selectedScrollSnap: z,
    slideNodes: re,
    slidesInView: B,
    slidesNotInView: K
  };
  return I(t, r), setTimeout(() => c.emit("init"), 0), oe;
}
Co.globalOptions = void 0;
function rd(e = {}, t = []) {
  const r = wr(e), n = wr(t), [o, a] = Te(), [i, s] = Te(), c = Pu(() => {
    o && o.reInit(r.current, n.current);
  }, [o]);
  return je(() => {
    Zu(r.current, e) || (r.current = e, c());
  }, [e, c]), je(() => {
    mA(n.current, t) || (n.current = t, c());
  }, [t, c]), je(() => {
    if (pA() && i) {
      Co.globalOptions = rd.globalOptions;
      const l = Co(i, r.current, n.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
rd.globalOptions = void 0;
const bb = f.createContext(null);
function sa() {
  const e = f.useContext(bb);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const GA = f.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: n,
    className: o,
    children: a,
    ...i
  }, s) => {
    const [c, l] = rd(
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
      bb.Provider,
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
            className: N("relative", o),
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
GA.displayName = "Carousel";
const UA = f.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: n, orientation: o } = sa();
  return /* @__PURE__ */ u.jsx("div", { ref: n, className: "overflow-hidden", children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      className: N(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
UA.displayName = "CarouselContent";
const KA = f.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = sa();
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      role: "group",
      "aria-roledescription": "slide",
      className: N(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
KA.displayName = "CarouselItem";
const YA = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = sa();
  return /* @__PURE__ */ u.jsxs(
    rr,
    {
      ref: o,
      variant: t,
      size: r,
      className: N(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(CP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
YA.displayName = "CarouselPrevious";
const XA = f.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = sa();
  return /* @__PURE__ */ u.jsxs(
    rr,
    {
      ref: o,
      variant: t,
      size: r,
      className: N(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(EP, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
XA.displayName = "CarouselNext";
var vi, dp;
function Xe() {
  if (dp) return vi;
  dp = 1;
  var e = Array.isArray;
  return vi = e, vi;
}
var gi, fp;
function xb() {
  if (fp) return gi;
  fp = 1;
  var e = typeof Un == "object" && Un && Un.Object === Object && Un;
  return gi = e, gi;
}
var yi, pp;
function ut() {
  if (pp) return yi;
  pp = 1;
  var e = xb(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return yi = r, yi;
}
var bi, mp;
function An() {
  if (mp) return bi;
  mp = 1;
  var e = ut(), t = e.Symbol;
  return bi = t, bi;
}
var xi, hp;
function QA() {
  if (hp) return xi;
  hp = 1;
  var e = An(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = e ? e.toStringTag : void 0;
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
  return xi = a, xi;
}
var wi, vp;
function ZA() {
  if (vp) return wi;
  vp = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return wi = r, wi;
}
var _i, gp;
function nr() {
  if (gp) return _i;
  gp = 1;
  var e = An(), t = QA(), r = ZA(), n = "[object Null]", o = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(s) {
    return s == null ? s === void 0 ? o : n : a && a in Object(s) ? t(s) : r(s);
  }
  return _i = i, _i;
}
var Si, yp;
function or() {
  if (yp) return Si;
  yp = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Si = e, Si;
}
var Ci, bp;
function On() {
  if (bp) return Ci;
  bp = 1;
  var e = nr(), t = or(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && e(o) == r;
  }
  return Ci = n, Ci;
}
var Pi, xp;
function nd() {
  if (xp) return Pi;
  xp = 1;
  var e = Xe(), t = On(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, i) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return Pi = o, Pi;
}
var Ei, wp;
function Ot() {
  if (wp) return Ei;
  wp = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ei = e, Ei;
}
var Ri, _p;
function od() {
  if (_p) return Ri;
  _p = 1;
  var e = nr(), t = Ot(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == o || c == r || c == a;
  }
  return Ri = i, Ri;
}
var Ti, Sp;
function JA() {
  if (Sp) return Ti;
  Sp = 1;
  var e = ut(), t = e["__core-js_shared__"];
  return Ti = t, Ti;
}
var Ni, Cp;
function eO() {
  if (Cp) return Ni;
  Cp = 1;
  var e = JA(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Ni = r, Ni;
}
var Mi, Pp;
function wb() {
  if (Pp) return Mi;
  Pp = 1;
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
  return Mi = r, Mi;
}
var Ai, Ep;
function tO() {
  if (Ep) return Ai;
  Ep = 1;
  var e = od(), t = eO(), r = Ot(), n = wb(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, s = Object.prototype, c = i.toString, l = s.hasOwnProperty, d = RegExp(
    "^" + c.call(l).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!r(m) || t(m))
      return !1;
    var g = e(m) ? d : a;
    return g.test(n(m));
  }
  return Ai = p, Ai;
}
var Oi, Rp;
function rO() {
  if (Rp) return Oi;
  Rp = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Oi = e, Oi;
}
var ji, Tp;
function ar() {
  if (Tp) return ji;
  Tp = 1;
  var e = tO(), t = rO();
  function r(n, o) {
    var a = t(n, o);
    return e(a) ? a : void 0;
  }
  return ji = r, ji;
}
var Di, Np;
function ca() {
  if (Np) return Di;
  Np = 1;
  var e = ar(), t = e(Object, "create");
  return Di = t, Di;
}
var ki, Mp;
function nO() {
  if (Mp) return ki;
  Mp = 1;
  var e = ca();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return ki = t, ki;
}
var Ii, Ap;
function oO() {
  if (Ap) return Ii;
  Ap = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Ii = e, Ii;
}
var Li, Op;
function aO() {
  if (Op) return Li;
  Op = 1;
  var e = ca(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var i = this.__data__;
    if (e) {
      var s = i[a];
      return s === t ? void 0 : s;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return Li = o, Li;
}
var $i, jp;
function iO() {
  if (jp) return $i;
  jp = 1;
  var e = ca(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return e ? a[o] !== void 0 : r.call(a, o);
  }
  return $i = n, $i;
}
var Fi, Dp;
function sO() {
  if (Dp) return Fi;
  Dp = 1;
  var e = ca(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && o === void 0 ? t : o, this;
  }
  return Fi = r, Fi;
}
var qi, kp;
function cO() {
  if (kp) return qi;
  kp = 1;
  var e = nO(), t = oO(), r = aO(), n = iO(), o = sO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, qi = a, qi;
}
var Bi, Ip;
function lO() {
  if (Ip) return Bi;
  Ip = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Bi = e, Bi;
}
var Wi, Lp;
function ad() {
  if (Lp) return Wi;
  Lp = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Wi = e, Wi;
}
var Hi, $p;
function la() {
  if ($p) return Hi;
  $p = 1;
  var e = ad();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (e(r[o][0], n))
        return o;
    return -1;
  }
  return Hi = t, Hi;
}
var Vi, Fp;
function uO() {
  if (Fp) return Vi;
  Fp = 1;
  var e = la(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, i = e(a, o);
    if (i < 0)
      return !1;
    var s = a.length - 1;
    return i == s ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return Vi = n, Vi;
}
var zi, qp;
function dO() {
  if (qp) return zi;
  qp = 1;
  var e = la();
  function t(r) {
    var n = this.__data__, o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return zi = t, zi;
}
var Gi, Bp;
function fO() {
  if (Bp) return Gi;
  Bp = 1;
  var e = la();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Gi = t, Gi;
}
var Ui, Wp;
function pO() {
  if (Wp) return Ui;
  Wp = 1;
  var e = la();
  function t(r, n) {
    var o = this.__data__, a = e(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return Ui = t, Ui;
}
var Ki, Hp;
function ua() {
  if (Hp) return Ki;
  Hp = 1;
  var e = lO(), t = uO(), r = dO(), n = fO(), o = pO();
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
function id() {
  if (Vp) return Yi;
  Vp = 1;
  var e = ar(), t = ut(), r = e(t, "Map");
  return Yi = r, Yi;
}
var Xi, zp;
function mO() {
  if (zp) return Xi;
  zp = 1;
  var e = cO(), t = ua(), r = id();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Xi = n, Xi;
}
var Qi, Gp;
function hO() {
  if (Gp) return Qi;
  Gp = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Qi = e, Qi;
}
var Zi, Up;
function da() {
  if (Up) return Zi;
  Up = 1;
  var e = hO();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return Zi = t, Zi;
}
var Ji, Kp;
function vO() {
  if (Kp) return Ji;
  Kp = 1;
  var e = da();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Ji = t, Ji;
}
var es, Yp;
function gO() {
  if (Yp) return es;
  Yp = 1;
  var e = da();
  function t(r) {
    return e(this, r).get(r);
  }
  return es = t, es;
}
var ts, Xp;
function yO() {
  if (Xp) return ts;
  Xp = 1;
  var e = da();
  function t(r) {
    return e(this, r).has(r);
  }
  return ts = t, ts;
}
var rs, Qp;
function bO() {
  if (Qp) return rs;
  Qp = 1;
  var e = da();
  function t(r, n) {
    var o = e(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return rs = t, rs;
}
var ns, Zp;
function sd() {
  if (Zp) return ns;
  Zp = 1;
  var e = mO(), t = vO(), r = gO(), n = yO(), o = bO();
  function a(i) {
    var s = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++s < c; ) {
      var l = i[s];
      this.set(l[0], l[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, ns = a, ns;
}
var os, Jp;
function xO() {
  if (Jp) return os;
  Jp = 1;
  var e = sd(), t = "Expected a function";
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
  return r.Cache = e, os = r, os;
}
var as, em;
function wO() {
  if (em) return as;
  em = 1;
  var e = xO(), t = 500;
  function r(n) {
    var o = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = o.cache;
    return o;
  }
  return as = r, as;
}
var is, tm;
function _O() {
  if (tm) return is;
  tm = 1;
  var e = wO(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(i, s, c, l) {
      a.push(c ? l.replace(r, "$1") : s || i);
    }), a;
  });
  return is = n, is;
}
var ss, rm;
function _b() {
  if (rm) return ss;
  rm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return ss = e, ss;
}
var cs, nm;
function SO() {
  if (nm) return cs;
  nm = 1;
  var e = An(), t = _b(), r = Xe(), n = On(), o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
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
  return cs = i, cs;
}
var ls, om;
function Sb() {
  if (om) return ls;
  om = 1;
  var e = SO();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return ls = t, ls;
}
var us, am;
function Cb() {
  if (am) return us;
  am = 1;
  var e = Xe(), t = nd(), r = _O(), n = Sb();
  function o(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return us = o, us;
}
var ds, im;
function fa() {
  if (im) return ds;
  im = 1;
  var e = On();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ds = t, ds;
}
var fs, sm;
function cd() {
  if (sm) return fs;
  sm = 1;
  var e = Cb(), t = fa();
  function r(n, o) {
    o = e(o, n);
    for (var a = 0, i = o.length; n != null && a < i; )
      n = n[t(o[a++])];
    return a && a == i ? n : void 0;
  }
  return fs = r, fs;
}
var ps, cm;
function Pb() {
  if (cm) return ps;
  cm = 1;
  var e = cd();
  function t(r, n, o) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? o : a;
  }
  return ps = t, ps;
}
Pb();
var ms, lm;
function CO() {
  if (lm) return ms;
  lm = 1;
  function e(t) {
    return t == null;
  }
  return ms = e, ms;
}
var PO = CO();
const EO = /* @__PURE__ */ st(PO);
var hs, um;
function RO() {
  if (um) return hs;
  um = 1;
  var e = nr(), t = Xe(), r = or(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return hs = o, hs;
}
var TO = RO();
const Eb = /* @__PURE__ */ st(TO);
var NO = od();
const Po = /* @__PURE__ */ st(NO);
var MO = Ot();
const Rb = /* @__PURE__ */ st(MO);
var no = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dm;
function AO() {
  if (dm) return ce;
  dm = 1;
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
var fm;
function OO() {
  return fm || (fm = 1, process.env.NODE_ENV !== "production" && function() {
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
    var C = i, P = a, E = e, T = c, I = r, j = m, V = p, q = t, M = o, $ = n, F = l, D = d, R = !1, W = !1;
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
    le.ContextConsumer = C, le.ContextProvider = P, le.Element = E, le.ForwardRef = T, le.Fragment = I, le.Lazy = j, le.Memo = V, le.Portal = q, le.Profiler = M, le.StrictMode = $, le.Suspense = F, le.SuspenseList = D, le.isAsyncMode = O, le.isConcurrentMode = z, le.isContextConsumer = A, le.isContextProvider = B, le.isElement = K, le.isForwardRef = G, le.isFragment = ee, le.isLazy = k, le.isMemo = X, le.isPortal = re, le.isProfiler = oe, le.isStrictMode = te, le.isSuspense = U, le.isSuspenseList = ie, le.isValidElementType = _, le.typeOf = S;
  }()), le;
}
var pm;
function jO() {
  return pm || (pm = 1, process.env.NODE_ENV === "production" ? no.exports = AO() : no.exports = OO()), no.exports;
}
jO();
var vs, mm;
function Tb() {
  if (mm) return vs;
  mm = 1;
  var e = nr(), t = or(), r = "[object Number]";
  function n(o) {
    return typeof o == "number" || t(o) && e(o) == r;
  }
  return vs = n, vs;
}
var gs, hm;
function DO() {
  if (hm) return gs;
  hm = 1;
  var e = Tb();
  function t(r) {
    return e(r) && r != +r;
  }
  return gs = t, gs;
}
var kO = DO();
const IO = /* @__PURE__ */ st(kO);
var LO = Tb();
const $O = /* @__PURE__ */ st(LO);
var oo = function(t) {
  return Eb(t) && t.indexOf("%") === t.length - 1;
}, He = function(t) {
  return $O(t) && !IO(t);
}, Eo = function(t) {
  return He(t) || Eb(t);
};
function Fl(e) {
  "@babel/helpers - typeof";
  return Fl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fl(e);
}
var FO = ["viewBox", "children"], qO = [
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
], vm = ["points", "pathLength"], ys = {
  svg: FO,
  polygon: vm,
  polyline: vm
}, Nb = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], BO = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, WO = function(t, r, n) {
  if (!Rb(t) || Fl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    Nb.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = BO(i, r, n));
  }), o;
}, HO = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, VO = function(t, r, n, o) {
  var a, i = (a = ys?.[o]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !Po(t) && (o && i.includes(r) || qO.includes(r)) || Nb.includes(r);
}, Mb = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ A0(t) && (o = t.props), !Rb(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    VO((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, zO = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function GO(e, t) {
  if (e == null) return {};
  var r = UO(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function UO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function KO(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, l = GO(e, zO), d = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, p = vt("recharts-surface", a);
  return /* @__PURE__ */ Q.createElement("svg", ql({}, Mb(l, !0, "svg"), {
    className: p,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ Q.createElement("title", null, s), /* @__PURE__ */ Q.createElement("desc", null, c), t);
}
var YO = process.env.NODE_ENV !== "production", mo = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (YO && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
}, bs, gm;
function XO() {
  if (gm) return bs;
  gm = 1;
  function e(t, r, n) {
    var o = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var i = Array(a); ++o < a; )
      i[o] = t[o + r];
    return i;
  }
  return bs = e, bs;
}
var xs, ym;
function QO() {
  if (ym) return xs;
  ym = 1;
  var e = XO();
  function t(r, n, o) {
    var a = r.length;
    return o = o === void 0 ? a : o, !n && o >= a ? r : e(r, n, o);
  }
  return xs = t, xs;
}
var ws, bm;
function Ab() {
  if (bm) return ws;
  bm = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "\\u200d", s = RegExp("[" + i + e + o + a + "]");
  function c(l) {
    return s.test(l);
  }
  return ws = c, ws;
}
var _s, xm;
function ZO() {
  if (xm) return _s;
  xm = 1;
  function e(t) {
    return t.split("");
  }
  return _s = e, _s;
}
var Ss, wm;
function JO() {
  if (wm) return Ss;
  wm = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", i = "[" + e + "]", s = "[" + o + "]", c = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + c + ")", d = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", y = l + "?", h = "[" + a + "]?", v = "(?:" + g + "(?:" + [d, p, m].join("|") + ")" + h + y + ")*", b = h + y + v, x = "(?:" + [d + s + "?", s, p, m, i].join("|") + ")", w = RegExp(c + "(?=" + c + ")|" + x + b, "g");
  function _(S) {
    return S.match(w) || [];
  }
  return Ss = _, Ss;
}
var Cs, _m;
function ej() {
  if (_m) return Cs;
  _m = 1;
  var e = ZO(), t = Ab(), r = JO();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return Cs = n, Cs;
}
var Ps, Sm;
function tj() {
  if (Sm) return Ps;
  Sm = 1;
  var e = QO(), t = Ab(), r = ej(), n = Sb();
  function o(a) {
    return function(i) {
      i = n(i);
      var s = t(i) ? r(i) : void 0, c = s ? s[0] : i.charAt(0), l = s ? e(s, 1).join("") : i.slice(1);
      return c[a]() + l;
    };
  }
  return Ps = o, Ps;
}
var Es, Cm;
function rj() {
  if (Cm) return Es;
  Cm = 1;
  var e = tj(), t = e("toUpperCase");
  return Es = t, Es;
}
var nj = rj();
const Ob = /* @__PURE__ */ st(nj);
function ao(e) {
  return function() {
    return e;
  };
}
const jb = Math.cos, Ro = Math.sin, Qe = Math.sqrt, To = Math.PI, pa = 2 * To, Bl = Math.PI, Wl = 2 * Bl, Vt = 1e-6, oj = Wl - Vt;
function Db(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function aj(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Db;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class ij {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Db : aj(t);
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
      let g = n - i, y = o - s, h = c * c + l * l, v = g * g + y * y, b = Math.sqrt(h), x = Math.sqrt(m), w = a * Math.tan((Bl - Math.acos((h + m - v) / (2 * b * x))) / 2), _ = w / x, S = w / b;
      Math.abs(_ - 1) > Vt && this._append`L${t + _ * d},${r + _ * p}`, this._append`A${a},${a},0,0,${+(p * g > d * y)},${this._x1 = t + S * c},${this._y1 = r + S * l}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), l = t + s, d = r + c, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${d}` : (Math.abs(this._x1 - l) > Vt || Math.abs(this._y1 - d) > Vt) && this._append`L${l},${d}`, n && (m < 0 && (m = m % Wl + Wl), m > oj ? this._append`A${n},${n},0,1,${p},${t - s},${r - c}A${n},${n},0,1,${p},${this._x1 = l},${this._y1 = d}` : m > Vt && this._append`A${n},${n},0,${+(m >= Bl)},${p},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function sj(e) {
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
  }, () => new ij(t);
}
const ld = {
  draw(e, t) {
    const r = Qe(t / To);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, pa);
  }
}, cj = {
  draw(e, t) {
    const r = Qe(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, kb = Qe(1 / 3), lj = kb * 2, uj = {
  draw(e, t) {
    const r = Qe(t / lj), n = r * kb;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, dj = {
  draw(e, t) {
    const r = Qe(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, fj = 0.8908130915292852, Ib = Ro(To / 10) / Ro(7 * To / 10), pj = Ro(pa / 10) * Ib, mj = -jb(pa / 10) * Ib, hj = {
  draw(e, t) {
    const r = Qe(t * fj), n = pj * r, o = mj * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = pa * a / 5, s = jb(i), c = Ro(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, Rs = Qe(3), vj = {
  draw(e, t) {
    const r = -Qe(t / (Rs * 3));
    e.moveTo(0, r * 2), e.lineTo(-Rs * r, -r), e.lineTo(Rs * r, -r), e.closePath();
  }
}, ke = -0.5, Ie = Qe(3) / 2, Hl = 1 / Qe(12), gj = (Hl / 2 + 1) * 3, yj = {
  draw(e, t) {
    const r = Qe(t / gj), n = r / 2, o = r * Hl, a = n, i = r * Hl + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(ke * n - Ie * o, Ie * n + ke * o), e.lineTo(ke * a - Ie * i, Ie * a + ke * i), e.lineTo(ke * s - Ie * c, Ie * s + ke * c), e.lineTo(ke * n + Ie * o, ke * o - Ie * n), e.lineTo(ke * a + Ie * i, ke * i - Ie * a), e.lineTo(ke * s + Ie * c, ke * c - Ie * s), e.closePath();
  }
};
function bj(e, t) {
  let r = null, n = sj(o);
  e = typeof e == "function" ? e : ao(e || ld), t = typeof t == "function" ? t : ao(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ao(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : ao(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function ln(e) {
  "@babel/helpers - typeof";
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
var xj = ["type", "size", "sizeType"];
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
function Pm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pm(Object(r), !0).forEach(function(n) {
      wj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wj(e, t, r) {
  return t = _j(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _j(e) {
  var t = Sj(e, "string");
  return ln(t) == "symbol" ? t : t + "";
}
function Sj(e, t) {
  if (ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cj(e, t) {
  if (e == null) return {};
  var r = Pj(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Pj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Lb = {
  symbolCircle: ld,
  symbolCross: cj,
  symbolDiamond: uj,
  symbolSquare: dj,
  symbolStar: hj,
  symbolTriangle: vj,
  symbolWye: yj
}, Ej = Math.PI / 180, Rj = function(t) {
  var r = "symbol".concat(Ob(t));
  return Lb[r] || ld;
}, Tj = function(t, r, n) {
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
      var o = 18 * Ej;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Nj = function(t, r) {
  Lb["symbol".concat(Ob(t))] = r;
}, $b = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = Cj(t, xj), l = Em(Em({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), d = function() {
    var v = Rj(n), b = bj().type(v).size(Tj(a, s, n));
    return b();
  }, p = l.className, m = l.cx, g = l.cy, y = Mb(l, !0);
  return m === +m && g === +g && a === +a ? /* @__PURE__ */ Q.createElement("path", Vl({}, y, {
    className: vt("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
$b.registerSymbol = Nj;
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
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
function Rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rm(Object(r), !0).forEach(function(n) {
      un(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Aj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qb(n.key), n);
  }
}
function jj(e, t, r) {
  return t && Oj(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Dj(e, t, r) {
  return t = No(t), kj(e, Fb() ? Reflect.construct(t, r || [], No(e).constructor) : t.apply(e, r));
}
function kj(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ij(e);
}
function Ij(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fb = function() {
    return !!e;
  })();
}
function No(e) {
  return No = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, No(e);
}
function Lj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gl(e, t);
}
function Gl(e, t) {
  return Gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Gl(e, t);
}
function un(e, t, r) {
  return t = qb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qb(e) {
  var t = $j(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function $j(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Le = 32, ud = /* @__PURE__ */ function(e) {
  function t() {
    return Aj(this, t), Dj(this, t, arguments);
  }
  return Lj(t, e), jj(t, [{
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
          var l = Mj({}, n);
          return delete l.legendIcon, /* @__PURE__ */ Q.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ Q.createElement($b, {
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
        var h = g.formatter || c, v = vt(un(un({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var b = Po(g.value) ? null : g.value;
        mo(
          !Po(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = g.inactive ? l : g.color;
        return /* @__PURE__ */ Q.createElement("li", zl({
          className: v,
          style: p,
          key: "legend-item-".concat(y)
        }, WO(n.props, g, y)), /* @__PURE__ */ Q.createElement(KO, {
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
}(Ko);
un(ud, "displayName", "Legend");
un(ud, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Ts, Tm;
function Fj() {
  if (Tm) return Ts;
  Tm = 1;
  var e = ua();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Ts = t, Ts;
}
var Ns, Nm;
function qj() {
  if (Nm) return Ns;
  Nm = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Ns = e, Ns;
}
var Ms, Mm;
function Bj() {
  if (Mm) return Ms;
  Mm = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Ms = e, Ms;
}
var As, Am;
function Wj() {
  if (Am) return As;
  Am = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return As = e, As;
}
var Os, Om;
function Hj() {
  if (Om) return Os;
  Om = 1;
  var e = ua(), t = id(), r = sd(), n = 200;
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
  return Os = o, Os;
}
var js, jm;
function Bb() {
  if (jm) return js;
  jm = 1;
  var e = ua(), t = Fj(), r = qj(), n = Bj(), o = Wj(), a = Hj();
  function i(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return i.prototype.clear = t, i.prototype.delete = r, i.prototype.get = n, i.prototype.has = o, i.prototype.set = a, js = i, js;
}
var Ds, Dm;
function Vj() {
  if (Dm) return Ds;
  Dm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ds = t, Ds;
}
var ks, km;
function zj() {
  if (km) return ks;
  km = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ks = e, ks;
}
var Is, Im;
function Wb() {
  if (Im) return Is;
  Im = 1;
  var e = sd(), t = Vj(), r = zj();
  function n(o) {
    var a = -1, i = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++a < i; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Is = n, Is;
}
var Ls, Lm;
function Gj() {
  if (Lm) return Ls;
  Lm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Ls = e, Ls;
}
var $s, $m;
function Hb() {
  if ($m) return $s;
  $m = 1;
  function e(t, r) {
    return t.has(r);
  }
  return $s = e, $s;
}
var Fs, Fm;
function Vb() {
  if (Fm) return Fs;
  Fm = 1;
  var e = Wb(), t = Gj(), r = Hb(), n = 1, o = 2;
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
  return Fs = a, Fs;
}
var qs, qm;
function Uj() {
  if (qm) return qs;
  qm = 1;
  var e = ut(), t = e.Uint8Array;
  return qs = t, qs;
}
var Bs, Bm;
function Kj() {
  if (Bm) return Bs;
  Bm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return Bs = e, Bs;
}
var Ws, Wm;
function dd() {
  if (Wm) return Ws;
  Wm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return Ws = e, Ws;
}
var Hs, Hm;
function Yj() {
  if (Hm) return Hs;
  Hm = 1;
  var e = An(), t = Uj(), r = ad(), n = Vb(), o = Kj(), a = dd(), i = 1, s = 2, c = "[object Boolean]", l = "[object Date]", d = "[object Error]", p = "[object Map]", m = "[object Number]", g = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, _ = w ? w.valueOf : void 0;
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
        var M = T & i;
        if (q || (q = a), C.size != P.size && !M)
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
  return Hs = S, Hs;
}
var Vs, Vm;
function zb() {
  if (Vm) return Vs;
  Vm = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return Vs = e, Vs;
}
var zs, zm;
function Xj() {
  if (zm) return zs;
  zm = 1;
  var e = zb(), t = Xe();
  function r(n, o, a) {
    var i = o(n);
    return t(n) ? i : e(i, a(n));
  }
  return zs = r, zs;
}
var Gs, Gm;
function Qj() {
  if (Gm) return Gs;
  Gm = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, i = []; ++n < o; ) {
      var s = t[n];
      r(s, n, t) && (i[a++] = s);
    }
    return i;
  }
  return Gs = e, Gs;
}
var Us, Um;
function Zj() {
  if (Um) return Us;
  Um = 1;
  function e() {
    return [];
  }
  return Us = e, Us;
}
var Ks, Km;
function Jj() {
  if (Km) return Ks;
  Km = 1;
  var e = Qj(), t = Zj(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(i) {
    return i == null ? [] : (i = Object(i), e(o(i), function(s) {
      return n.call(i, s);
    }));
  } : t;
  return Ks = a, Ks;
}
var Ys, Ym;
function eD() {
  if (Ym) return Ys;
  Ym = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return Ys = e, Ys;
}
var Xs, Xm;
function tD() {
  if (Xm) return Xs;
  Xm = 1;
  var e = nr(), t = or(), r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return Xs = n, Xs;
}
var Qs, Qm;
function fd() {
  if (Qm) return Qs;
  Qm = 1;
  var e = tD(), t = or(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !o.call(i, "callee");
  };
  return Qs = a, Qs;
}
var Xr = { exports: {} }, Zs, Zm;
function rD() {
  if (Zm) return Zs;
  Zm = 1;
  function e() {
    return !1;
  }
  return Zs = e, Zs;
}
Xr.exports;
var Jm;
function Gb() {
  return Jm || (Jm = 1, function(e, t) {
    var r = ut(), n = rD(), o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
    e.exports = l;
  }(Xr, Xr.exports)), Xr.exports;
}
var Js, eh;
function pd() {
  if (eh) return Js;
  eh = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? e, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return Js = r, Js;
}
var ec, th;
function md() {
  if (th) return ec;
  th = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return ec = t, ec;
}
var tc, rh;
function nD() {
  if (rh) return tc;
  rh = 1;
  var e = nr(), t = md(), r = or(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", i = "[object Date]", s = "[object Error]", c = "[object Function]", l = "[object Map]", d = "[object Number]", p = "[object Object]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", _ = "[object Int8Array]", S = "[object Int16Array]", C = "[object Int32Array]", P = "[object Uint8Array]", E = "[object Uint8ClampedArray]", T = "[object Uint16Array]", I = "[object Uint32Array]", j = {};
  j[x] = j[w] = j[_] = j[S] = j[C] = j[P] = j[E] = j[T] = j[I] = !0, j[n] = j[o] = j[v] = j[a] = j[b] = j[i] = j[s] = j[c] = j[l] = j[d] = j[p] = j[m] = j[g] = j[y] = j[h] = !1;
  function V(q) {
    return r(q) && t(q.length) && !!j[e(q)];
  }
  return tc = V, tc;
}
var rc, nh;
function Ub() {
  if (nh) return rc;
  nh = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return rc = e, rc;
}
var Qr = { exports: {} };
Qr.exports;
var oh;
function oD() {
  return oh || (oh = 1, function(e, t) {
    var r = xb(), n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
      try {
        var c = o && o.require && o.require("util").types;
        return c || i && i.binding && i.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Qr, Qr.exports)), Qr.exports;
}
var nc, ah;
function Kb() {
  if (ah) return nc;
  ah = 1;
  var e = nD(), t = Ub(), r = oD(), n = r && r.isTypedArray, o = n ? t(n) : e;
  return nc = o, nc;
}
var oc, ih;
function aD() {
  if (ih) return oc;
  ih = 1;
  var e = eD(), t = fd(), r = Xe(), n = Gb(), o = pd(), a = Kb(), i = Object.prototype, s = i.hasOwnProperty;
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
  return oc = c, oc;
}
var ac, sh;
function iD() {
  if (sh) return ac;
  sh = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || e;
    return r === o;
  }
  return ac = t, ac;
}
var ic, ch;
function sD() {
  if (ch) return ic;
  ch = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return ic = e, ic;
}
var sc, lh;
function cD() {
  if (lh) return sc;
  lh = 1;
  var e = sD(), t = e(Object.keys, Object);
  return sc = t, sc;
}
var cc, uh;
function lD() {
  if (uh) return cc;
  uh = 1;
  var e = iD(), t = cD(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && i.push(s);
    return i;
  }
  return cc = o, cc;
}
var lc, dh;
function ma() {
  if (dh) return lc;
  dh = 1;
  var e = od(), t = md();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return lc = r, lc;
}
var uc, fh;
function hd() {
  if (fh) return uc;
  fh = 1;
  var e = aD(), t = lD(), r = ma();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return uc = n, uc;
}
var dc, ph;
function uD() {
  if (ph) return dc;
  ph = 1;
  var e = Xj(), t = Jj(), r = hd();
  function n(o) {
    return e(o, r, t);
  }
  return dc = n, dc;
}
var fc, mh;
function dD() {
  if (mh) return fc;
  mh = 1;
  var e = uD(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
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
  return fc = o, fc;
}
var pc, hh;
function fD() {
  if (hh) return pc;
  hh = 1;
  var e = ar(), t = ut(), r = e(t, "DataView");
  return pc = r, pc;
}
var mc, vh;
function pD() {
  if (vh) return mc;
  vh = 1;
  var e = ar(), t = ut(), r = e(t, "Promise");
  return mc = r, mc;
}
var hc, gh;
function Yb() {
  if (gh) return hc;
  gh = 1;
  var e = ar(), t = ut(), r = e(t, "Set");
  return hc = r, hc;
}
var vc, yh;
function mD() {
  if (yh) return vc;
  yh = 1;
  var e = ar(), t = ut(), r = e(t, "WeakMap");
  return vc = r, vc;
}
var gc, bh;
function hD() {
  if (bh) return gc;
  bh = 1;
  var e = fD(), t = id(), r = pD(), n = Yb(), o = mD(), a = nr(), i = wb(), s = "[object Map]", c = "[object Object]", l = "[object Promise]", d = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", g = i(e), y = i(t), h = i(r), v = i(n), b = i(o), x = a;
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
  }), gc = x, gc;
}
var yc, xh;
function vD() {
  if (xh) return yc;
  xh = 1;
  var e = Bb(), t = Vb(), r = Yj(), n = dD(), o = hD(), a = Xe(), i = Gb(), s = Kb(), c = 1, l = "[object Arguments]", d = "[object Array]", p = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
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
        var M = V ? h.value() : h, $ = q ? v.value() : v;
        return _ || (_ = new e()), w(M, $, b, x, _);
      }
    }
    return j ? (_ || (_ = new e()), n(h, v, b, x, w, _)) : !1;
  }
  return yc = y, yc;
}
var bc, wh;
function Xb() {
  if (wh) return bc;
  wh = 1;
  var e = vD(), t = or();
  function r(n, o, a, i, s) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : e(n, o, a, i, r, s);
  }
  return bc = r, bc;
}
var xc, _h;
function gD() {
  if (_h) return xc;
  _h = 1;
  var e = Bb(), t = Xb(), r = 1, n = 2;
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
  return xc = o, xc;
}
var wc, Sh;
function Qb() {
  if (Sh) return wc;
  Sh = 1;
  var e = Ot();
  function t(r) {
    return r === r && !e(r);
  }
  return wc = t, wc;
}
var _c, Ch;
function yD() {
  if (Ch) return _c;
  Ch = 1;
  var e = Qb(), t = hd();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var i = o[a], s = n[i];
      o[a] = [i, s, e(s)];
    }
    return o;
  }
  return _c = r, _c;
}
var Sc, Ph;
function Zb() {
  if (Ph) return Sc;
  Ph = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Sc = e, Sc;
}
var Cc, Eh;
function bD() {
  if (Eh) return Cc;
  Eh = 1;
  var e = gD(), t = yD(), r = Zb();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(i) {
      return i === o || e(i, o, a);
    };
  }
  return Cc = n, Cc;
}
var Pc, Rh;
function xD() {
  if (Rh) return Pc;
  Rh = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Pc = e, Pc;
}
var Ec, Th;
function wD() {
  if (Th) return Ec;
  Th = 1;
  var e = Cb(), t = fd(), r = Xe(), n = pd(), o = md(), a = fa();
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
  return Ec = i, Ec;
}
var Rc, Nh;
function _D() {
  if (Nh) return Rc;
  Nh = 1;
  var e = xD(), t = wD();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return Rc = r, Rc;
}
var Tc, Mh;
function SD() {
  if (Mh) return Tc;
  Mh = 1;
  var e = Xb(), t = Pb(), r = _D(), n = nd(), o = Qb(), a = Zb(), i = fa(), s = 1, c = 2;
  function l(d, p) {
    return n(d) && o(p) ? a(i(d), p) : function(m) {
      var g = t(m, d);
      return g === void 0 && g === p ? r(m, d) : e(p, g, s | c);
    };
  }
  return Tc = l, Tc;
}
var Nc, Ah;
function ha() {
  if (Ah) return Nc;
  Ah = 1;
  function e(t) {
    return t;
  }
  return Nc = e, Nc;
}
var Mc, Oh;
function CD() {
  if (Oh) return Mc;
  Oh = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Mc = e, Mc;
}
var Ac, jh;
function PD() {
  if (jh) return Ac;
  jh = 1;
  var e = cd();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Ac = t, Ac;
}
var Oc, Dh;
function ED() {
  if (Dh) return Oc;
  Dh = 1;
  var e = CD(), t = PD(), r = nd(), n = fa();
  function o(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return Oc = o, Oc;
}
var jc, kh;
function Jb() {
  if (kh) return jc;
  kh = 1;
  var e = bD(), t = SD(), r = ha(), n = Xe(), o = ED();
  function a(i) {
    return typeof i == "function" ? i : i == null ? r : typeof i == "object" ? n(i) ? t(i[0], i[1]) : e(i) : o(i);
  }
  return jc = a, jc;
}
var Dc, Ih;
function RD() {
  if (Ih) return Dc;
  Ih = 1;
  function e(t, r, n, o) {
    for (var a = t.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
      if (r(t[i], i, t))
        return i;
    return -1;
  }
  return Dc = e, Dc;
}
var kc, Lh;
function TD() {
  if (Lh) return kc;
  Lh = 1;
  function e(t) {
    return t !== t;
  }
  return kc = e, kc;
}
var Ic, $h;
function ND() {
  if ($h) return Ic;
  $h = 1;
  function e(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return Ic = e, Ic;
}
var Lc, Fh;
function MD() {
  if (Fh) return Lc;
  Fh = 1;
  var e = RD(), t = TD(), r = ND();
  function n(o, a, i) {
    return a === a ? r(o, a, i) : e(o, t, i);
  }
  return Lc = n, Lc;
}
var $c, qh;
function AD() {
  if (qh) return $c;
  qh = 1;
  var e = MD();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return $c = t, $c;
}
var Fc, Bh;
function OD() {
  if (Bh) return Fc;
  Bh = 1;
  function e(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return Fc = e, Fc;
}
var qc, Wh;
function jD() {
  if (Wh) return qc;
  Wh = 1;
  function e() {
  }
  return qc = e, qc;
}
var Bc, Hh;
function DD() {
  if (Hh) return Bc;
  Hh = 1;
  var e = Yb(), t = jD(), r = dd(), n = 1 / 0, o = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return Bc = o, Bc;
}
var Wc, Vh;
function kD() {
  if (Vh) return Wc;
  Vh = 1;
  var e = Wb(), t = AD(), r = OD(), n = Hb(), o = DD(), a = dd(), i = 200;
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
  return Wc = s, Wc;
}
var Hc, zh;
function ID() {
  if (zh) return Hc;
  zh = 1;
  var e = Jb(), t = kD();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return Hc = r, Hc;
}
var LD = ID();
const Gh = /* @__PURE__ */ st(LD);
function ex(e, t, r) {
  return t === !0 ? Gh(e, r) : Po(t) ? Gh(e, t) : e;
}
function Er(e) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
var $D = ["ref"];
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
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uh(Object(r), !0).forEach(function(n) {
      va(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rx(n.key), n);
  }
}
function qD(e, t, r) {
  return t && Kh(e.prototype, t), r && Kh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BD(e, t, r) {
  return t = Mo(t), WD(e, tx() ? Reflect.construct(t, r || [], Mo(e).constructor) : t.apply(e, r));
}
function WD(e, t) {
  if (t && (Er(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return HD(e);
}
function HD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tx = function() {
    return !!e;
  })();
}
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function VD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ul(e, t);
}
function Ul(e, t) {
  return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ul(e, t);
}
function va(e, t, r) {
  return t = rx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rx(e) {
  var t = zD(e, "string");
  return Er(t) == "symbol" ? t : t + "";
}
function zD(e, t) {
  if (Er(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function GD(e, t) {
  if (e == null) return {};
  var r = UD(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function UD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function KD(e) {
  return e.value;
}
function YD(e, t) {
  if (/* @__PURE__ */ Q.isValidElement(e))
    return /* @__PURE__ */ Q.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ Q.createElement(e, t);
  t.ref;
  var r = GD(t, $D);
  return /* @__PURE__ */ Q.createElement(ud, r);
}
var Yh = 1, vd = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    FD(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = BD(this, t, [].concat(o)), va(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return VD(t, e), qD(t, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > Yh || Math.abs(o.height - this.lastBoundingBox.height) > Yh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      }, YD(a, ht(ht({}, this.props), {}, {
        payload: ex(d, l, KD)
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
}(Ko);
va(vd, "displayName", "Legend");
va(vd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Vc, Xh;
function XD() {
  if (Xh) return Vc;
  Xh = 1;
  var e = An(), t = fd(), r = Xe(), n = e ? e.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Vc = o, Vc;
}
var zc, Qh;
function QD() {
  if (Qh) return zc;
  Qh = 1;
  var e = zb(), t = XD();
  function r(n, o, a, i, s) {
    var c = -1, l = n.length;
    for (a || (a = t), s || (s = []); ++c < l; ) {
      var d = n[c];
      o > 0 && a(d) ? o > 1 ? r(d, o - 1, a, i, s) : e(s, d) : i || (s[s.length] = d);
    }
    return s;
  }
  return zc = r, zc;
}
var Gc, Zh;
function ZD() {
  if (Zh) return Gc;
  Zh = 1;
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
  return Gc = e, Gc;
}
var Uc, Jh;
function JD() {
  if (Jh) return Uc;
  Jh = 1;
  var e = ZD(), t = e();
  return Uc = t, Uc;
}
var Kc, ev;
function ek() {
  if (ev) return Kc;
  ev = 1;
  var e = JD(), t = hd();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return Kc = r, Kc;
}
var Yc, tv;
function tk() {
  if (tv) return Yc;
  tv = 1;
  var e = ma();
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
  return Yc = t, Yc;
}
var Xc, rv;
function rk() {
  if (rv) return Xc;
  rv = 1;
  var e = ek(), t = tk(), r = t(e);
  return Xc = r, Xc;
}
var Qc, nv;
function nk() {
  if (nv) return Qc;
  nv = 1;
  var e = rk(), t = ma();
  function r(n, o) {
    var a = -1, i = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, l) {
      i[++a] = o(s, c, l);
    }), i;
  }
  return Qc = r, Qc;
}
var Zc, ov;
function ok() {
  if (ov) return Zc;
  ov = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Zc = e, Zc;
}
var Jc, av;
function ak() {
  if (av) return Jc;
  av = 1;
  var e = On();
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
  return Jc = t, Jc;
}
var el, iv;
function ik() {
  if (iv) return el;
  iv = 1;
  var e = ak();
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
  return el = t, el;
}
var tl, sv;
function sk() {
  if (sv) return tl;
  sv = 1;
  var e = _b(), t = cd(), r = Jb(), n = nk(), o = ok(), a = Ub(), i = ik(), s = ha(), c = Xe();
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
  return tl = l, tl;
}
var rl, cv;
function ck() {
  if (cv) return rl;
  cv = 1;
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
  return rl = e, rl;
}
var nl, lv;
function lk() {
  if (lv) return nl;
  lv = 1;
  var e = ck(), t = Math.max;
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
  return nl = r, nl;
}
var ol, uv;
function uk() {
  if (uv) return ol;
  uv = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return ol = e, ol;
}
var al, dv;
function dk() {
  if (dv) return al;
  dv = 1;
  var e = ar(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return al = t, al;
}
var il, fv;
function fk() {
  if (fv) return il;
  fv = 1;
  var e = uk(), t = dk(), r = ha(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return il = n, il;
}
var sl, pv;
function pk() {
  if (pv) return sl;
  pv = 1;
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
  return sl = n, sl;
}
var cl, mv;
function mk() {
  if (mv) return cl;
  mv = 1;
  var e = fk(), t = pk(), r = t(e);
  return cl = r, cl;
}
var ll, hv;
function hk() {
  if (hv) return ll;
  hv = 1;
  var e = ha(), t = lk(), r = mk();
  function n(o, a) {
    return r(t(o, a, e), o + "");
  }
  return ll = n, ll;
}
var ul, vv;
function vk() {
  if (vv) return ul;
  vv = 1;
  var e = ad(), t = ma(), r = pd(), n = Ot();
  function o(a, i, s) {
    if (!n(s))
      return !1;
    var c = typeof i;
    return (c == "number" ? t(s) && r(i, s.length) : c == "string" && i in s) ? e(s[i], a) : !1;
  }
  return ul = o, ul;
}
var dl, gv;
function gk() {
  if (gv) return dl;
  gv = 1;
  var e = QD(), t = sk(), r = hk(), n = vk(), o = r(function(a, i) {
    if (a == null)
      return [];
    var s = i.length;
    return s > 1 && n(a, i[0], i[1]) ? i = [] : s > 2 && n(i[0], i[1], i[2]) && (i = [i[0]]), t(a, e(i, 1), []);
  });
  return dl = o, dl;
}
var yk = gk();
const bk = /* @__PURE__ */ st(yk);
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
function Kl() {
  return Kl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kl.apply(this, arguments);
}
function xk(e, t) {
  return Ck(e) || Sk(e, t) || _k(e, t) || wk();
}
function wk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _k(e, t) {
  if (e) {
    if (typeof e == "string") return yv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yv(e, t);
  }
}
function yv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sk(e, t) {
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
function Ck(e) {
  if (Array.isArray(e)) return e;
}
function bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bv(Object(r), !0).forEach(function(n) {
      Pk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pk(e, t, r) {
  return t = Ek(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ek(e) {
  var t = Rk(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function Rk(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tk(e) {
  return Array.isArray(e) && Eo(e[0]) && Eo(e[1]) ? e.join(" ~ ") : e;
}
var Nk = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, l = c === void 0 ? {} : c, d = t.payload, p = t.formatter, m = t.itemSorter, g = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, x = b === void 0 ? !1 : b, w = function() {
    if (d && d.length) {
      var V = {
        padding: 0,
        margin: 0
      }, q = (m ? bk(d, m) : d).map(function(M, $) {
        if (M.type === "none")
          return null;
        var F = fl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: M.color || "#000"
        }, s), D = M.formatter || p || Tk, R = M.value, W = M.name, O = R, z = W;
        if (D && O != null && z != null) {
          var A = D(R, W, M, $, d);
          if (Array.isArray(A)) {
            var B = xk(A, 2);
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
          }, Eo(z) ? /* @__PURE__ */ Q.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, z) : null, Eo(z) ? /* @__PURE__ */ Q.createElement("span", {
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
  }, _ = fl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), S = fl({
    margin: 0
  }, l), C = !EO(h), P = C ? h : "", E = vt("recharts-default-tooltip", g), T = vt("recharts-tooltip-label", y);
  C && v && d !== void 0 && d !== null && (P = v(h, d));
  var I = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ Q.createElement("div", Kl({
    className: E,
    style: _
  }, I), /* @__PURE__ */ Q.createElement("p", {
    className: T,
    style: S
  }, /* @__PURE__ */ Q.isValidElement(P) ? P : "".concat(P)), w());
};
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function io(e, t, r) {
  return t = Mk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mk(e) {
  var t = Ak(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function Ak(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ur = "recharts-tooltip-wrapper", Ok = {
  visibility: "hidden"
};
function jk(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return vt(Ur, io(io(io(io({}, "".concat(Ur, "-right"), He(r) && t && He(t.x) && r >= t.x), "".concat(Ur, "-left"), He(r) && t && He(t.x) && r < t.x), "".concat(Ur, "-bottom"), He(n) && t && He(t.y) && n >= t.y), "".concat(Ur, "-top"), He(n) && t && He(t.y) && n < t.y));
}
function xv(e) {
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
function Dk(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function kk(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, d, p;
  return i.height > 0 && i.width > 0 && r ? (d = xv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = xv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = Dk({
    translateX: d,
    translateY: p,
    useTranslate3d: s
  })) : l = Ok, {
    cssProperties: l,
    cssClasses: jk({
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
function wv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wv(Object(r), !0).forEach(function(n) {
      Xl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ik(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ox(n.key), n);
  }
}
function $k(e, t, r) {
  return t && Lk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fk(e, t, r) {
  return t = Ao(t), qk(e, nx() ? Reflect.construct(t, r || [], Ao(e).constructor) : t.apply(e, r));
}
function qk(e, t) {
  if (t && (Rr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Bk(e);
}
function Bk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nx = function() {
    return !!e;
  })();
}
function Ao(e) {
  return Ao = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ao(e);
}
function Wk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Yl(e, t);
}
function Yl(e, t) {
  return Yl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Yl(e, t);
}
function Xl(e, t, r) {
  return t = ox(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ox(e) {
  var t = Hk(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function Hk(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Sv = 1, Vk = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Ik(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = Fk(this, t, [].concat(o)), Xl(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Xl(r, "handleKeyDown", function(i) {
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
  return Wk(t, e), $k(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Sv || Math.abs(n.height - this.state.lastBoundingBox.height) > Sv) && this.setState({
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
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.children, d = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, g = o.offset, y = o.position, h = o.reverseDirection, v = o.useTranslate3d, b = o.viewBox, x = o.wrapperStyle, w = kk({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: g,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), _ = w.cssClasses, S = w.cssProperties, C = _v(_v({
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
}(Ko), zk = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Gk = {
  isSsr: zk()
};
function Tr(e) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function Cv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cv(Object(r), !0).forEach(function(n) {
      gd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Uk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ix(n.key), n);
  }
}
function Yk(e, t, r) {
  return t && Kk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xk(e, t, r) {
  return t = Oo(t), Qk(e, ax() ? Reflect.construct(t, r || [], Oo(e).constructor) : t.apply(e, r));
}
function Qk(e, t) {
  if (t && (Tr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Zk(e);
}
function Zk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ax() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ax = function() {
    return !!e;
  })();
}
function Oo(e) {
  return Oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oo(e);
}
function Jk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ql(e, t);
}
function Ql(e, t) {
  return Ql = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ql(e, t);
}
function gd(e, t, r) {
  return t = ix(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ix(e) {
  var t = eI(e, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function eI(e, t) {
  if (Tr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function tI(e) {
  return e.dataKey;
}
function rI(e, t) {
  return /* @__PURE__ */ Q.isValidElement(e) ? /* @__PURE__ */ Q.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ Q.createElement(e, t) : /* @__PURE__ */ Q.createElement(Nk, t);
}
var yd = /* @__PURE__ */ function(e) {
  function t() {
    return Uk(this, t), Xk(this, t, arguments);
  }
  return Jk(t, e), Yk(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, l = o.content, d = o.coordinate, p = o.filterNull, m = o.isAnimationActive, g = o.offset, y = o.payload, h = o.payloadUniqBy, v = o.position, b = o.reverseDirection, x = o.useTranslate3d, w = o.viewBox, _ = o.wrapperStyle, S = y ?? [];
      p && S.length && (S = ex(y.filter(function(P) {
        return P.value != null && (P.hide !== !0 || n.props.includeHidden);
      }), h, tI));
      var C = S.length > 0;
      return /* @__PURE__ */ Q.createElement(Vk, {
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
      }, rI(l, Pv(Pv({}, this.props), {}, {
        payload: S
      })));
    }
  }]);
}(Ko);
gd(yd, "displayName", "Tooltip");
gd(yd, "defaultProps", {
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
  isAnimationActive: !Gk.isSsr,
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
var pl, Ev;
function nI() {
  if (Ev) return pl;
  Ev = 1;
  var e = ut(), t = function() {
    return e.Date.now();
  };
  return pl = t, pl;
}
var ml, Rv;
function oI() {
  if (Rv) return ml;
  Rv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return ml = t, ml;
}
var hl, Tv;
function aI() {
  if (Tv) return hl;
  Tv = 1;
  var e = oI(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return hl = r, hl;
}
var vl, Nv;
function iI() {
  if (Nv) return vl;
  Nv = 1;
  var e = aI(), t = Ot(), r = On(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, i = /^0o[0-7]+$/i, s = parseInt;
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
  return vl = c, vl;
}
var gl, Mv;
function sI() {
  if (Mv) return gl;
  Mv = 1;
  var e = Ot(), t = nI(), r = iI(), n = "Expected a function", o = Math.max, a = Math.min;
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
  return gl = i, gl;
}
var yl, Av;
function cI() {
  if (Av) return yl;
  Av = 1;
  var e = sI(), t = Ot(), r = "Expected a function";
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
  return yl = n, yl;
}
var lI = cI();
const uI = /* @__PURE__ */ st(lI);
function pn(e) {
  "@babel/helpers - typeof";
  return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pn(e);
}
function Ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function so(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ov(Object(r), !0).forEach(function(n) {
      dI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ov(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dI(e, t, r) {
  return t = fI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fI(e) {
  var t = pI(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function pI(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mI(e, t) {
  return yI(e) || gI(e, t) || vI(e, t) || hI();
}
function hI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vI(e, t) {
  if (e) {
    if (typeof e == "string") return jv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jv(e, t);
  }
}
function jv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gI(e, t) {
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
function yI(e) {
  if (Array.isArray(e)) return e;
}
var bI = /* @__PURE__ */ Uo(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, d = l === void 0 ? 0 : l, p = e.minHeight, m = e.maxHeight, g = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, x = e.onResize, w = e.style, _ = w === void 0 ? {} : w, S = wr(null), C = wr();
  C.current = x, Eu(t, function() {
    return Object.defineProperty(S.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), S.current;
      },
      configurable: !0
    });
  });
  var P = Te({
    containerWidth: o.width,
    containerHeight: o.height
  }), E = mI(P, 2), T = E[0], I = E[1], j = Pu(function(q, M) {
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
    h > 0 && (q = uI(q, h, {
      trailing: !0,
      leading: !1
    }));
    var M = new ResizeObserver(q), $ = S.current.getBoundingClientRect(), F = $.width, D = $.height;
    return j(F, D), M.observe(S.current), function() {
      M.disconnect();
    };
  }, [j, h]);
  var V = O0(function() {
    var q = T.containerWidth, M = T.containerHeight;
    if (q < 0 || M < 0)
      return null;
    mo(oo(i) || oo(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), mo(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var $ = oo(i) ? q : i, F = oo(c) ? M : c;
    r && r > 0 && ($ ? F = $ / r : F && ($ = F * r), m && F > m && (F = m)), mo($ > 0 || F > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, $, F, i, c, d, p, r);
    var D = !Array.isArray(g) && HO(g.type).endsWith("Chart");
    return Q.Children.map(g, function(R) {
      return /* @__PURE__ */ Q.isValidElement(R) ? /* @__PURE__ */ j0(R, so({
        width: $,
        height: F
      }, D ? {
        style: so({
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
    style: so(so({}, _), {}, {
      width: i,
      height: c,
      minWidth: d,
      minHeight: p,
      maxHeight: m
    }),
    ref: S
  }, V);
});
const xI = { light: "", dark: ".dark" }, sx = f.createContext(null);
function cx() {
  const e = f.useContext(sx);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const wI = f.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = f.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ u.jsx(sx.Provider, { value: { config: n }, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: N(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ u.jsx(_I, { id: s, config: n }),
        /* @__PURE__ */ u.jsx(bI, { children: r })
      ]
    }
  ) });
});
wI.displayName = "Chart";
const _I = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ u.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(xI).map(
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
}, u4 = yd, SI = f.forwardRef(
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
    const { config: y } = cx(), h = f.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [b] = t;
      if (!b)
        return null;
      const x = `${m || b.dataKey || b.name || "value"}`, w = Zl(y, b, x), _ = !m && typeof i == "string" ? y[i]?.label || i : w?.label;
      return s ? /* @__PURE__ */ u.jsx("div", { className: N("font-medium", c), children: s(_, t) }) : _ ? /* @__PURE__ */ u.jsx("div", { className: N("font-medium", c), children: _ }) : null;
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
        className: N(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          v ? null : h,
          /* @__PURE__ */ u.jsx("div", { className: "grid gap-1.5", children: t.map((b, x) => {
            if (!b)
              return null;
            const w = `${p || b.dataKey || b.name || "value"}`, _ = Zl(y, b, w), S = d || b.payload.fill || b.color;
            return /* @__PURE__ */ u.jsx(
              "div",
              {
                className: N(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: l && b?.value !== void 0 && b.name ? l(b.value, b.name, b, x, b.payload) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  _?.icon ? /* @__PURE__ */ u.jsx(_.icon, {}) : !a && /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      className: N(
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
                      className: N(
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
SI.displayName = "ChartTooltip";
const d4 = vd, CI = f.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
    const { config: i } = cx();
    return r?.length ? /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: a,
        className: N(
          "flex items-center justify-center gap-4",
          n === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((s) => {
          if (!s)
            return null;
          const c = `${o || s.dataKey || "value"}`, l = Zl(i, s, c);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: N(
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
CI.displayName = "ChartLegend";
function Zl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
function jn(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ga(e) {
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
var ya = "Checkbox", [PI, f4] = be(ya), [EI, bd] = PI(ya);
function RI(e) {
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
    caller: ya
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
    EI,
    {
      scope: t,
      ..._,
      children: TI(p) ? p(_) : n
    }
  );
}
var lx = "CheckboxTrigger", ux = f.forwardRef(
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
    } = bd(lx, e), h = ne(o, d), v = f.useRef(c);
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
        "data-state": hx(c),
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
ux.displayName = lx;
var xd = f.forwardRef(
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
      RI,
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
            ux,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ u.jsx(
            mx,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
xd.displayName = ya;
var dx = "CheckboxIndicator", fx = f.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = bd(dx, r);
    return /* @__PURE__ */ u.jsx(
      he,
      {
        present: n || Et(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          H.span,
          {
            "data-state": hx(a.checked),
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
fx.displayName = dx;
var px = "CheckboxBubbleInput", mx = f.forwardRef(
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
    } = bd(px, e), y = ne(r, g), h = jn(a), v = ga(n);
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
mx.displayName = px;
function TI(e) {
  return typeof e == "function";
}
function Et(e) {
  return e === "indeterminate";
}
function hx(e) {
  return Et(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const NI = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  xd,
  {
    ref: r,
    className: N(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(
      fx,
      {
        className: N("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u.jsx(_r, { className: "size-4 h-full" })
      }
    )
  }
));
NI.displayName = xd.displayName;
var Dv = 1, MI = 0.9, AI = 0.8, OI = 0.17, bl = 0.1, xl = 0.999, jI = 0.9999, DI = 0.99, kI = /[\\\/_+.#"@\[\(\{&]/, II = /[\\\/_+.#"@\[\(\{&]/g, LI = /[\s-]/, vx = /[\s-]/g;
function Jl(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? Dv : DI;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), l = r.indexOf(c, o), d = 0, p, m, g, y; l >= 0; ) p = Jl(e, t, r, n, l + 1, a + 1, i), p > d && (l === o ? p *= Dv : kI.test(e.charAt(l - 1)) ? (p *= AI, g = e.slice(o, l - 1).match(II), g && o > 0 && (p *= Math.pow(xl, g.length))) : LI.test(e.charAt(l - 1)) ? (p *= MI, y = e.slice(o, l - 1).match(vx), y && o > 0 && (p *= Math.pow(xl, y.length))) : (p *= OI, o > 0 && (p *= Math.pow(xl, l - o))), e.charAt(l) !== t.charAt(a) && (p *= jI)), (p < bl && r.charAt(l - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a)) && (m = Jl(e, t, r, n, l + 1, a + 2, i), m * bl > p && (p = m * bl)), p > d && (d = p), l = r.indexOf(c, l + 1);
  return i[s] = d, d;
}
function kv(e) {
  return e.toLowerCase().replace(vx, " ");
}
function $I(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, Jl(e, t, kv(e), kv(t), 0, 0, {});
}
var Kr = '[cmdk-group=""]', wl = '[cmdk-group-items=""]', FI = '[cmdk-group-heading=""]', gx = '[cmdk-item=""]', Iv = `${gx}:not([aria-disabled="true"])`, eu = "cmdk-item-select", mr = "data-value", qI = (e, t, r) => $I(e, t, r), yx = f.createContext(void 0), Dn = () => f.useContext(yx), bx = f.createContext(void 0), wd = () => f.useContext(bx), xx = f.createContext(void 0), wx = f.forwardRef((e, t) => {
  let r = hr(() => {
    var A, B;
    return { search: "", value: (B = (A = e.value) != null ? A : e.defaultValue) != null ? B : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = hr(() => /* @__PURE__ */ new Set()), o = hr(() => /* @__PURE__ */ new Map()), a = hr(() => /* @__PURE__ */ new Map()), i = hr(() => /* @__PURE__ */ new Set()), s = _x(e), { label: c, children: l, value: d, onValueChange: p, filter: m, shouldFilter: g, loop: y, disablePointerSelection: h = !1, vimBindings: v = !0, ...b } = e, x = ve(), w = ve(), _ = ve(), S = f.useRef(null), C = QI();
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
    B !== ((G = a.current.get(A)) == null ? void 0 : G.value) && (a.current.set(A, { value: B, keywords: K }), r.current.filtered.items.set(A, T(B, K)), C(2, () => {
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
  function T(A, B) {
    var K, G;
    let ee = (G = (K = s.current) == null ? void 0 : K.filter) != null ? G : qI;
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
      let ee = G.closest(wl);
      ee ? ee.appendChild(G.parentElement === ee ? G : G.closest(`${wl} > *`)) : K.appendChild(G.parentElement === K ? G : G.closest(`${wl} > *`));
    }), B.sort((G, ee) => ee[1] - G[1]).forEach((G) => {
      var ee;
      let k = (ee = S.current) == null ? void 0 : ee.querySelector(`${Kr}[${mr}="${encodeURIComponent(G[0])}"]`);
      k?.parentElement.appendChild(k);
    });
  }
  function j() {
    let A = $().find((K) => K.getAttribute("aria-disabled") !== "true"), B = A?.getAttribute(mr);
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
    let G = M();
    G && (((A = G.parentElement) == null ? void 0 : A.firstChild) === G && ((K = (B = G.closest(Kr)) == null ? void 0 : B.querySelector(FI)) == null || K.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function M() {
    var A;
    return (A = S.current) == null ? void 0 : A.querySelector(`${gx}[aria-selected="true"]`);
  }
  function $() {
    var A;
    return Array.from(((A = S.current) == null ? void 0 : A.querySelectorAll(Iv)) || []);
  }
  function F(A) {
    let B = $()[A];
    B && P.setState("value", B.getAttribute(mr));
  }
  function D(A) {
    var B;
    let K = M(), G = $(), ee = G.findIndex((X) => X === K), k = G[ee + A];
    (B = s.current) != null && B.loop && (k = ee + A < 0 ? G[G.length - 1] : ee + A === G.length ? G[0] : G[ee + A]), k && P.setState("value", k.getAttribute(mr));
  }
  function R(A) {
    let B = M(), K = B?.closest(Kr), G;
    for (; K && !G; ) K = A > 0 ? YI(K, Kr) : XI(K, Kr), G = K?.querySelector(Iv);
    G ? P.setState("value", G.getAttribute(mr)) : D(A);
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
        let G = M();
        if (G) {
          let ee = new Event(eu);
          G.dispatchEvent(ee);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: JI }, c), ba(e, (A) => f.createElement(bx.Provider, { value: P }, f.createElement(yx.Provider, { value: E }, A))));
}), BI = f.forwardRef((e, t) => {
  var r, n;
  let o = ve(), a = f.useRef(null), i = f.useContext(xx), s = Dn(), c = _x(e), l = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i?.forceMount;
  Kt(() => {
    if (!l) return s.item(o, i?.id);
  }, [l]);
  let d = Sx(o, a, [e.value, e.children, a], e.keywords), p = wd(), m = Tt((C) => C.value && C.value === d.current), g = Tt((C) => l || s.filter() === !1 ? !0 : C.search ? C.filtered.items.get(o) > 0 : !0);
  f.useEffect(() => {
    let C = a.current;
    if (!(!C || e.disabled)) return C.addEventListener(eu, y), () => C.removeEventListener(eu, y);
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
}), WI = f.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = ve(), s = f.useRef(null), c = f.useRef(null), l = ve(), d = Dn(), p = Tt((g) => o || d.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  Kt(() => d.group(i), []), Sx(i, s, [e.value, e.heading, c]);
  let m = f.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return f.createElement(H.div, { ref: ot(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && f.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, r), ba(e, (g) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? l : void 0 }, f.createElement(xx.Provider, { value: m }, g))));
}), HI = f.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = f.useRef(null), a = Tt((i) => !i.search);
  return !r && !a ? null : f.createElement(H.div, { ref: ot(o, t), ...n, "cmdk-separator": "", role: "separator" });
}), VI = f.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = wd(), i = Tt((l) => l.search), s = Tt((l) => l.selectedItemId), c = Dn();
  return f.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), f.createElement(H.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": s, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (l) => {
    o || a.setState("search", l.target.value), r?.(l.target.value);
  } });
}), zI = f.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = f.useRef(null), i = f.useRef(null), s = Tt((l) => l.selectedItemId), c = Dn();
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
  }, []), f.createElement(H.div, { ref: ot(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": n, id: c.listId }, ba(e, (l) => f.createElement("div", { ref: ot(i, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), GI = f.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return f.createElement(na, { open: r, onOpenChange: n }, f.createElement(oa, { container: i }, f.createElement(Ir, { "cmdk-overlay": "", className: o }), f.createElement(Lr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, f.createElement(wx, { ref: t, ...s }))));
}), UI = f.forwardRef((e, t) => Tt((r) => r.filtered.count === 0) ? f.createElement(H.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), KI = f.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return f.createElement(H.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, ba(e, (i) => f.createElement("div", { "aria-hidden": !0 }, i)));
}), Ae = Object.assign(wx, { List: zI, Item: BI, Input: VI, Group: WI, Separator: HI, Dialog: GI, Empty: UI, Loading: KI });
function YI(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function XI(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function _x(e) {
  let t = f.useRef(e);
  return Kt(() => {
    t.current = e;
  }), t;
}
var Kt = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function hr(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Tt(e) {
  let t = wd(), r = () => e(t.snapshot());
  return f.useSyncExternalStore(t.subscribe, r, r);
}
function Sx(e, t, r, n = []) {
  let o = f.useRef(), a = Dn();
  return Kt(() => {
    var i;
    let s = (() => {
      var l;
      for (let d of r) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (l = d.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = n.map((l) => l.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(mr, s), o.current = s;
  }), o;
}
var QI = () => {
  let [e, t] = f.useState(), r = hr(() => /* @__PURE__ */ new Map());
  return Kt(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function ZI(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ba({ asChild: e, children: t }, r) {
  return e && f.isValidElement(t) ? f.cloneElement(ZI(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var JI = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const xa = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae,
  {
    ref: r,
    className: N(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
xa.displayName = Ae.displayName;
const p4 = ({ children: e, ...t }) => /* @__PURE__ */ u.jsx(U$, { ...t, children: /* @__PURE__ */ u.jsx(uw, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ u.jsx(xa, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), _d = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ u.jsx(zP, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ u.jsx(
    Ae.Input,
    {
      ref: r,
      className: N(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
_d.displayName = Ae.Input.displayName;
const Sd = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.List,
  {
    ref: r,
    className: N("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Sd.displayName = Ae.List.displayName;
const Cd = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  Ae.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Cd.displayName = Ae.Empty.displayName;
const wa = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.Group,
  {
    ref: r,
    className: N(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
wa.displayName = Ae.Group.displayName;
const Cx = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.Separator,
  {
    ref: r,
    className: N("-mx-1 h-px bg-border", e),
    ...t
  }
));
Cx.displayName = Ae.Separator.displayName;
const br = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ae.Item,
  {
    ref: r,
    className: N(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
br.displayName = Ae.Item.displayName;
const eL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: N(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
eL.displayName = "CommandShortcut";
const tL = ["top", "right", "bottom", "left"], Nt = Math.min, Oe = Math.max, jo = Math.round, co = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), rL = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nL = {
  start: "end",
  end: "start"
};
function tu(e, t, r) {
  return Oe(e, Nt(t, r));
}
function yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function qr(e) {
  return e.split("-")[1];
}
function Pd(e) {
  return e === "x" ? "y" : "x";
}
function Ed(e) {
  return e === "y" ? "height" : "width";
}
const oL = /* @__PURE__ */ new Set(["top", "bottom"]);
function rt(e) {
  return oL.has(bt(e)) ? "y" : "x";
}
function Rd(e) {
  return Pd(rt(e));
}
function aL(e, t, r) {
  r === void 0 && (r = !1);
  const n = qr(e), o = Rd(e), a = Ed(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Do(i)), [i, Do(i)];
}
function iL(e) {
  const t = Do(e);
  return [ru(e), t, ru(t)];
}
function ru(e) {
  return e.replace(/start|end/g, (t) => nL[t]);
}
const Lv = ["left", "right"], $v = ["right", "left"], sL = ["top", "bottom"], cL = ["bottom", "top"];
function lL(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? $v : Lv : t ? Lv : $v;
    case "left":
    case "right":
      return t ? sL : cL;
    default:
      return [];
  }
}
function uL(e, t, r, n) {
  const o = qr(e);
  let a = lL(bt(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(ru)))), a;
}
function Do(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rL[t]);
}
function dL(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Px(e) {
  return typeof e != "number" ? dL(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ko(e) {
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
function Fv(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = rt(t), i = Rd(t), s = Ed(i), c = bt(t), l = a === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
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
  switch (qr(t)) {
    case "start":
      g[i] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      g[i] += m * (r && l ? -1 : 1);
      break;
  }
  return g;
}
const fL = async (e, t, r) => {
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
  } = Fv(l, n, c), m = n, g = {}, y = 0;
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
    } = Fv(l, m, c)), h = -1);
  }
  return {
    x: d,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function mn(e, t) {
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
  } = yt(t, e), y = Px(g), v = s[m ? p === "floating" ? "reference" : "floating" : p], b = ko(await a.getClippingRect({
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
  }, S = ko(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const pL = (e) => ({
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
    const p = Px(d), m = {
      x: r,
      y: n
    }, g = Rd(o), y = Ed(g), h = await i.getDimensions(l), v = g === "y", b = v ? "top" : "left", x = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", _ = a.reference[y] + a.reference[g] - m[g] - a.floating[y], S = m[g] - a.reference[g], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let P = C ? C[w] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(C))) && (P = s.floating[w] || a.floating[y]);
    const E = _ / 2 - S / 2, T = P / 2 - h[y] / 2 - 1, I = Nt(p[b], T), j = Nt(p[x], T), V = I, q = P - h[y] - j, M = P / 2 - h[y] / 2 + E, $ = tu(V, M, q), F = !c.arrow && qr(o) != null && M !== $ && a.reference[y] / 2 - (M < V ? I : j) - h[y] / 2 < 0, D = F ? M < V ? M - V : M - q : 0;
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
}), mL = function(e) {
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
      const b = bt(o), x = rt(s), w = bt(s) === s, _ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = m || (w || !h ? [Do(s)] : iL(s)), C = y !== "none";
      !m && C && S.push(...uL(s, h, y, _));
      const P = [s, ...S], E = await mn(t, v), T = [];
      let I = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && T.push(E[b]), p) {
        const M = aL(o, i, _);
        T.push(E[M[0]], E[M[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: T
      }], !T.every((M) => M <= 0)) {
        var j, V;
        const M = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, $ = P[M];
        if ($ && (!(p === "alignment" ? x !== rt($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((R) => R.overflows[0] > 0 && rt(R.placement) === x)))
          return {
            data: {
              index: M,
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
                  const W = rt(R.placement);
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
function qv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Bv(e) {
  return tL.some((t) => e[t] >= 0);
}
const hL = function(e) {
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
          const a = await mn(t, {
            ...o,
            elementContext: "reference"
          }), i = qv(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Bv(i)
            }
          };
        }
        case "escaped": {
          const a = await mn(t, {
            ...o,
            altBoundary: !0
          }), i = qv(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Bv(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ex = /* @__PURE__ */ new Set(["left", "top"]);
async function vL(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = bt(r), s = qr(r), c = rt(r) === "y", l = Ex.has(i) ? -1 : 1, d = a && c ? -1 : 1, p = yt(t, e);
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
const gL = function(e) {
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
      } = t, c = await vL(t, e);
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
}, yL = function(e) {
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
      }, d = await mn(t, c), p = rt(bt(o)), m = Pd(p);
      let g = l[m], y = l[p];
      if (a) {
        const v = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", x = g + d[v], w = g - d[b];
        g = tu(x, g, w);
      }
      if (i) {
        const v = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = y + d[v], w = y - d[b];
        y = tu(x, y, w);
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
}, bL = function(e) {
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
      }, p = rt(o), m = Pd(p);
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
        const w = m === "y" ? "width" : "height", _ = Ex.has(bt(o)), S = a.reference[p] - a.floating[w] + (_ && ((b = i.offset) == null ? void 0 : b[p]) || 0) + (_ ? 0 : v.crossAxis), C = a.reference[p] + a.reference[w] + (_ ? 0 : ((x = i.offset) == null ? void 0 : x[p]) || 0) - (_ ? v.crossAxis : 0);
        y < S ? y = S : y > C && (y = C);
      }
      return {
        [m]: g,
        [p]: y
      };
    }
  };
}, xL = function(e) {
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
      } = yt(e, t), d = await mn(t, l), p = bt(o), m = qr(o), g = rt(o) === "y", {
        width: y,
        height: h
      } = a.floating;
      let v, b;
      p === "top" || p === "bottom" ? (v = p, b = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = p, v = m === "end" ? "top" : "bottom");
      const x = h - d.top - d.bottom, w = y - d.left - d.right, _ = Nt(h - d[v], x), S = Nt(y - d[b], w), C = !t.middlewareData.shift;
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
      const T = await i.getDimensions(s.floating);
      return y !== T.width || h !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function _a() {
  return typeof window < "u";
}
function Br(e) {
  return Rx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function De(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function dt(e) {
  var t;
  return (t = (Rx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rx(e) {
  return _a() ? e instanceof Node || e instanceof De(e).Node : !1;
}
function Ge(e) {
  return _a() ? e instanceof Element || e instanceof De(e).Element : !1;
}
function it(e) {
  return _a() ? e instanceof HTMLElement || e instanceof De(e).HTMLElement : !1;
}
function Wv(e) {
  return !_a() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof De(e).ShadowRoot;
}
const wL = /* @__PURE__ */ new Set(["inline", "contents"]);
function kn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !wL.has(o);
}
const _L = /* @__PURE__ */ new Set(["table", "td", "th"]);
function SL(e) {
  return _L.has(Br(e));
}
const CL = [":popover-open", ":modal"];
function Sa(e) {
  return CL.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const PL = ["transform", "translate", "scale", "rotate", "perspective"], EL = ["transform", "translate", "scale", "rotate", "perspective", "filter"], RL = ["paint", "layout", "strict", "content"];
function Td(e) {
  const t = Nd(), r = Ge(e) ? Ue(e) : e;
  return PL.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || EL.some((n) => (r.willChange || "").includes(n)) || RL.some((n) => (r.contain || "").includes(n));
}
function TL(e) {
  let t = Mt(e);
  for (; it(t) && !Nr(t); ) {
    if (Td(t))
      return t;
    if (Sa(t))
      return null;
    t = Mt(t);
  }
  return null;
}
function Nd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const NL = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Nr(e) {
  return NL.has(Br(e));
}
function Ue(e) {
  return De(e).getComputedStyle(e);
}
function Ca(e) {
  return Ge(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mt(e) {
  if (Br(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Wv(e) && e.host || // Fallback.
    dt(e)
  );
  return Wv(t) ? t.host : t;
}
function Tx(e) {
  const t = Mt(e);
  return Nr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : it(t) && kn(t) ? t : Tx(t);
}
function hn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Tx(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = De(o);
  if (a) {
    const s = nu(i);
    return t.concat(i, i.visualViewport || [], kn(o) ? o : [], s && r ? hn(s) : []);
  }
  return t.concat(o, hn(o, [], r));
}
function nu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Nx(e) {
  const t = Ue(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = it(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = jo(r) !== a || jo(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function Md(e) {
  return Ge(e) ? e : e.contextElement;
}
function xr(e) {
  const t = Md(e);
  if (!it(t))
    return nt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Nx(t);
  let i = (a ? jo(r.width) : r.width) / n, s = (a ? jo(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const ML = /* @__PURE__ */ nt(0);
function Mx(e) {
  const t = De(e);
  return !Nd() || !t.visualViewport ? ML : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function AL(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== De(e) ? !1 : t;
}
function Yt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = Md(e);
  let i = nt(1);
  t && (n ? Ge(n) && (i = xr(n)) : i = xr(e));
  const s = AL(a, r, n) ? Mx(a) : nt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, d = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = De(a), g = n && Ge(n) ? De(n) : n;
    let y = m, h = nu(y);
    for (; h && n && g !== y; ) {
      const v = xr(h), b = h.getBoundingClientRect(), x = Ue(h), w = b.left + (h.clientLeft + parseFloat(x.paddingLeft)) * v.x, _ = b.top + (h.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, l *= v.y, d *= v.x, p *= v.y, c += w, l += _, y = De(h), h = nu(y);
    }
  }
  return ko({
    width: d,
    height: p,
    x: c,
    y: l
  });
}
function Ad(e, t) {
  const r = Ca(e).scrollLeft;
  return t ? t.left + r : Yt(dt(e)).left + r;
}
function Ax(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Ad(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function OL(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = dt(n), s = t ? Sa(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = nt(1);
  const d = nt(0), p = it(n);
  if ((p || !p && !a) && ((Br(n) !== "body" || kn(i)) && (c = Ca(n)), it(n))) {
    const g = Yt(n);
    l = xr(n), d.x = g.x + n.clientLeft, d.y = g.y + n.clientTop;
  }
  const m = i && !p && !a ? Ax(i, c, !0) : nt(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + d.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + d.y + m.y
  };
}
function jL(e) {
  return Array.from(e.getClientRects());
}
function DL(e) {
  const t = dt(e), r = Ca(e), n = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Oe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Ad(e);
  const s = -r.scrollTop;
  return Ue(n).direction === "rtl" && (i += Oe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function kL(e, t) {
  const r = De(e), n = dt(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Nd();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const IL = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function LL(e, t) {
  const r = Yt(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = it(e) ? xr(e) : nt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Hv(e, t, r) {
  let n;
  if (t === "viewport")
    n = kL(e, r);
  else if (t === "document")
    n = DL(dt(e));
  else if (Ge(t))
    n = LL(t, r);
  else {
    const o = Mx(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ko(n);
}
function Ox(e, t) {
  const r = Mt(e);
  return r === t || !Ge(r) || Nr(r) ? !1 : Ue(r).position === "fixed" || Ox(r, t);
}
function $L(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = hn(e, [], !1).filter((s) => Ge(s) && Br(s) !== "body"), o = null;
  const a = Ue(e).position === "fixed";
  let i = a ? Mt(e) : e;
  for (; Ge(i) && !Nr(i); ) {
    const s = Ue(i), c = Td(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && IL.has(o.position) || kn(i) && !c && Ox(e, i)) ? n = n.filter((d) => d !== i) : o = s, i = Mt(i);
  }
  return t.set(e, n), n;
}
function FL(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? Sa(t) ? [] : $L(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((l, d) => {
    const p = Hv(t, d, o);
    return l.top = Oe(p.top, l.top), l.right = Nt(p.right, l.right), l.bottom = Nt(p.bottom, l.bottom), l.left = Oe(p.left, l.left), l;
  }, Hv(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function qL(e) {
  const {
    width: t,
    height: r
  } = Nx(e);
  return {
    width: t,
    height: r
  };
}
function BL(e, t, r) {
  const n = it(t), o = dt(t), a = r === "fixed", i = Yt(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = nt(0);
  function l() {
    c.x = Ad(o);
  }
  if (n || !n && !a)
    if ((Br(t) !== "body" || kn(o)) && (s = Ca(t)), n) {
      const g = Yt(t, !0, a, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && l();
  a && !n && o && l();
  const d = o && !n && !a ? Ax(o, s) : nt(0), p = i.left + s.scrollLeft - c.x - d.x, m = i.top + s.scrollTop - c.y - d.y;
  return {
    x: p,
    y: m,
    width: i.width,
    height: i.height
  };
}
function _l(e) {
  return Ue(e).position === "static";
}
function Vv(e, t) {
  if (!it(e) || Ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return dt(e) === r && (r = r.ownerDocument.body), r;
}
function jx(e, t) {
  const r = De(e);
  if (Sa(e))
    return r;
  if (!it(e)) {
    let o = Mt(e);
    for (; o && !Nr(o); ) {
      if (Ge(o) && !_l(o))
        return o;
      o = Mt(o);
    }
    return r;
  }
  let n = Vv(e, t);
  for (; n && SL(n) && _l(n); )
    n = Vv(n, t);
  return n && Nr(n) && _l(n) && !Td(n) ? r : n || TL(e) || r;
}
const WL = async function(e) {
  const t = this.getOffsetParent || jx, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: BL(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function HL(e) {
  return Ue(e).direction === "rtl";
}
const VL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: OL,
  getDocumentElement: dt,
  getClippingRect: FL,
  getOffsetParent: jx,
  getElementRects: WL,
  getClientRects: jL,
  getDimensions: qL,
  getScale: xr,
  isElement: Ge,
  isRTL: HL
};
function Dx(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zL(e, t) {
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
    const y = co(p), h = co(o.clientWidth - (d + m)), v = co(o.clientHeight - (p + g)), b = co(d), w = {
      rootMargin: -y + "px " + -h + "px " + -v + "px " + -b + "px",
      threshold: Oe(0, Nt(1, c)) || 1
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
      P === 1 && !Dx(l, e.getBoundingClientRect()) && i(), _ = !1;
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
function GL(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Md(e), d = o || a ? [...l ? hn(l) : [], ...hn(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", r, {
      passive: !0
    }), a && b.addEventListener("resize", r);
  });
  const p = l && s ? zL(l, r) : null;
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
    h && !Dx(h, b) && r(), h = b, y = requestAnimationFrame(v);
  }
  return r(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", r), a && x.removeEventListener("resize", r);
    }), p?.(), (b = g) == null || b.disconnect(), g = null, c && cancelAnimationFrame(y);
  };
}
const UL = gL, KL = yL, YL = mL, XL = xL, QL = hL, zv = pL, ZL = bL, JL = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: VL,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return fL(e, t, {
    ...o,
    platform: a
  });
};
var e$ = typeof document < "u", t$ = function() {
}, ho = e$ ? ng : t$;
function Io(e, t) {
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
        if (!Io(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !Io(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function kx(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gv(e, t) {
  const r = kx(e);
  return Math.round(t * r) / r;
}
function Sl(e) {
  const t = f.useRef(e);
  return ho(() => {
    t.current = e;
  }), t;
}
function r$(e) {
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
  Io(m, n) || g(n);
  const [y, h] = f.useState(null), [v, b] = f.useState(null), x = f.useCallback((R) => {
    R !== C.current && (C.current = R, h(R));
  }, []), w = f.useCallback((R) => {
    R !== P.current && (P.current = R, b(R));
  }, []), _ = a || y, S = i || v, C = f.useRef(null), P = f.useRef(null), E = f.useRef(d), T = c != null, I = Sl(c), j = Sl(o), V = Sl(l), q = f.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: r,
      middleware: m
    };
    j.current && (R.platform = j.current), JL(C.current, P.current, R).then((W) => {
      const O = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      M.current && !Io(E.current, O) && (E.current = O, xn.flushSync(() => {
        p(O);
      }));
    });
  }, [m, t, r, j, V]);
  ho(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const M = f.useRef(!1);
  ho(() => (M.current = !0, () => {
    M.current = !1;
  }), []), ho(() => {
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
    const W = Gv(F.floating, d.x), O = Gv(F.floating, d.y);
    return s ? {
      ...R,
      transform: "translate(" + W + "px, " + O + "px)",
      ...kx(F.floating) >= 1.5 && {
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
const n$ = (e) => {
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
      return n && t(n) ? n.current != null ? zv({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? zv({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, o$ = (e, t) => ({
  ...UL(e),
  options: [e, t]
}), a$ = (e, t) => ({
  ...KL(e),
  options: [e, t]
}), i$ = (e, t) => ({
  ...ZL(e),
  options: [e, t]
}), s$ = (e, t) => ({
  ...YL(e),
  options: [e, t]
}), c$ = (e, t) => ({
  ...XL(e),
  options: [e, t]
}), l$ = (e, t) => ({
  ...QL(e),
  options: [e, t]
}), u$ = (e, t) => ({
  ...n$(e),
  options: [e, t]
});
var d$ = "Arrow", Ix = f.forwardRef((e, t) => {
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
Ix.displayName = d$;
var f$ = Ix, Od = "Popper", [Lx, jt] = be(Od), [p$, $x] = Lx(Od), Fx = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = f.useState(null);
  return /* @__PURE__ */ u.jsx(p$, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Fx.displayName = Od;
var qx = "PopperAnchor", Bx = f.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = $x(qx, r), i = f.useRef(null), s = ne(t, i);
    return f.useEffect(() => {
      a.onAnchorChange(n?.current || i.current);
    }), n ? null : /* @__PURE__ */ u.jsx(H.div, { ...o, ref: s });
  }
);
Bx.displayName = qx;
var jd = "PopperContent", [m$, h$] = Lx(jd), Wx = f.forwardRef(
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
    } = e, v = $x(jd, r), [b, x] = f.useState(null), w = ne(t, (k) => x(k)), [_, S] = f.useState(null), C = ga(_), P = C?.width ?? 0, E = C?.height ?? 0, T = n + (a !== "center" ? "-" + a : ""), I = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, j = Array.isArray(l) ? l : [l], V = j.length > 0, q = {
      padding: I,
      boundary: j.filter(g$),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: M, floatingStyles: $, placement: F, isPositioned: D, middlewareData: R } = r$({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...k) => GL(...k, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        o$({ mainAxis: o + E, alignmentAxis: i }),
        c && a$({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? i$() : void 0,
          ...q
        }),
        c && s$({ ...q }),
        c$({
          ...q,
          apply: ({ elements: k, rects: X, availableWidth: re, availableHeight: oe }) => {
            const { width: te, height: U } = X.reference, ie = k.floating.style;
            ie.setProperty("--radix-popper-available-width", `${re}px`), ie.setProperty("--radix-popper-available-height", `${oe}px`), ie.setProperty("--radix-popper-anchor-width", `${te}px`), ie.setProperty("--radix-popper-anchor-height", `${U}px`);
          }
        }),
        _ && u$({ element: _, padding: s }),
        y$({ arrowWidth: P, arrowHeight: E }),
        m && l$({ strategy: "referenceHidden", ...q })
      ]
    }), [W, O] = zx(F), z = ue(y);
    me(() => {
      D && z?.();
    }, [D, z]);
    const A = R.arrow?.x, B = R.arrow?.y, K = R.arrow?.centerOffset !== 0, [G, ee] = f.useState();
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
          m$,
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
Wx.displayName = jd;
var Hx = "PopperArrow", v$ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Vx = f.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = h$(Hx, n), i = v$[a.placedSide];
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
          f$,
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
Vx.displayName = Hx;
function g$(e) {
  return e !== null;
}
var y$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, d] = zx(r), p = { start: "0%", center: "50%", end: "100%" }[d], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let y = "", h = "";
    return l === "bottom" ? (y = i ? p : `${m}px`, h = `${-c}px`) : l === "top" ? (y = i ? p : `${m}px`, h = `${n.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, h = i ? p : `${g}px`) : l === "left" && (y = `${n.floating.width + c}px`, h = i ? p : `${g}px`), { data: { x: y, y: h } };
  }
});
function zx(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var In = Fx, Ln = Bx, Pa = Wx, Ea = Vx, Ra = "Popover", [Gx, m4] = be(Ra, [
  jt
]), $n = jt(), [b$, Dt] = Gx(Ra), Ux = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = $n(t), c = f.useRef(null), [l, d] = f.useState(!1), [p, m] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ra
  });
  return /* @__PURE__ */ u.jsx(In, { ...s, children: /* @__PURE__ */ u.jsx(
    b$,
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
Ux.displayName = Ra;
var Kx = "PopoverAnchor", x$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Dt(Kx, r), a = $n(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return f.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ u.jsx(Ln, { ...a, ...n, ref: t });
  }
);
x$.displayName = Kx;
var Yx = "PopoverTrigger", Xx = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Dt(Yx, r), a = $n(r), i = ne(t, o.triggerRef), s = /* @__PURE__ */ u.jsx(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": tw(o.open),
        ...n,
        ref: i,
        onClick: L(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ u.jsx(Ln, { asChild: !0, ...a, children: s });
  }
);
Xx.displayName = Yx;
var Dd = "PopoverPortal", [w$, _$] = Gx(Dd, {
  forceMount: void 0
}), Qx = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = Dt(Dd, t);
  return /* @__PURE__ */ u.jsx(w$, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: n }) }) });
};
Qx.displayName = Dd;
var Mr = "PopoverContent", Zx = f.forwardRef(
  (e, t) => {
    const r = _$(Mr, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = Dt(Mr, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(C$, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(P$, { ...o, ref: t }) });
  }
);
Zx.displayName = Mr;
var S$ = /* @__PURE__ */ Rt("PopoverContent.RemoveScroll"), C$ = f.forwardRef(
  (e, t) => {
    const r = Dt(Mr, e.__scopePopover), n = f.useRef(null), o = ne(t, n), a = f.useRef(!1);
    return f.useEffect(() => {
      const i = n.current;
      if (i) return ta(i);
    }, []), /* @__PURE__ */ u.jsx(Sn, { as: S$, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      Jx,
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
), P$ = f.forwardRef(
  (e, t) => {
    const r = Dt(Mr, e.__scopePopover), n = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Jx,
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
), Jx = f.forwardRef(
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
    } = e, m = Dt(Mr, r), g = $n(r);
    return Jo(), /* @__PURE__ */ u.jsx(
      _n,
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
              Pa,
              {
                "data-state": tw(m.open),
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
), ew = "PopoverClose", E$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = Dt(ew, r);
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
E$.displayName = ew;
var R$ = "PopoverArrow", T$ = f.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = $n(r);
    return /* @__PURE__ */ u.jsx(Ea, { ...o, ...n, ref: t });
  }
);
T$.displayName = R$;
function tw(e) {
  return e ? "open" : "closed";
}
var N$ = Ux, M$ = Xx, A$ = Qx, rw = Zx;
const Ta = N$, Na = M$, Fn = f.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ u.jsx(A$, { children: /* @__PURE__ */ u.jsx(
  rw,
  {
    ref: o,
    align: t,
    sideOffset: r,
    className: N(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Fn.displayName = rw.displayName;
function h4({ value: e, onChange: t }) {
  const [r, n] = f.useState(e);
  function o(a) {
    n(a), t?.(a);
  }
  return /* @__PURE__ */ u.jsxs(Ta, { children: [
    /* @__PURE__ */ u.jsx(Na, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      rr,
      {
        variant: "outline",
        className: N(
          "w-full justify-start text-left font-normal",
          !r && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ u.jsx(Tg, { className: "mr-2" }),
          r ? lt(r, "PPP", { locale: en }) : /* @__PURE__ */ u.jsx("span", { children: "Selecione uma data" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(Fn, { className: "w-auto p-0", children: /* @__PURE__ */ u.jsx(
      hb,
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
function O$(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function j$(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function D$(e) {
  return /^[0-5][0-9]$/.test(e);
}
function Ma(e, { max: t, min: r = 0, loop: n = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (n ? (o > t && (o = r), o < r && (o = t)) : (o > t && (o = t), o < r && (o = r)), o.toString().padStart(2, "0"));
}
function nw(e) {
  return O$(e) ? e : Ma(e, { max: 23 });
}
function ow(e) {
  return j$(e) ? e : Ma(e, { min: 1, max: 12 });
}
function Lo(e) {
  return D$(e) ? e : Ma(e, { max: 59 });
}
function kd(e, { min: t, max: r, step: n }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += n, Ma(String(o), { min: t, max: r, loop: !0 }));
}
function k$(e, t) {
  return kd(e, { min: 0, max: 23, step: t });
}
function I$(e, t) {
  return kd(e, { min: 1, max: 12, step: t });
}
function Uv(e, t) {
  return kd(e, { min: 0, max: 59, step: t });
}
function L$(e, t) {
  const r = Lo(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function $$(e, t) {
  const r = Lo(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function F$(e, t) {
  const r = nw(t);
  return e.setHours(parseInt(r, 10)), e;
}
function q$(e, t, r) {
  const n = parseInt(ow(t), 10), o = H$(n, r);
  return e.setHours(o), e;
}
function ou(e, t, r, n) {
  switch (r) {
    case "minutes":
      return L$(e, t);
    case "seconds":
      return $$(e, t);
    case "hours":
      return F$(e, t);
    case "12hours":
      return n ? q$(e, t, n) : e;
    default:
      return e;
  }
}
function B$(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Lo(String(e.getMinutes()));
    case "seconds":
      return Lo(String(e.getSeconds()));
    case "hours":
      return nw(String(e.getHours()));
    case "12hours":
      return ow(String(aw(e.getHours())));
    default:
      return "00";
  }
}
function W$(e, t, r) {
  switch (r) {
    case "minutes":
      return Uv(e, t);
    case "seconds":
      return Uv(e, t);
    case "hours":
      return k$(e, t);
    case "12hours":
      return I$(e, t);
    default:
      return "00";
  }
}
function H$(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function aw(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function V$(e) {
  return Array.from({ length: 12 }, (t, r) => ({
    value: r,
    label: lt(new Date(2021, r), "MMMM", { locale: e })
  }));
}
function z$(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (r, n) => ({
    value: t.getFullYear() - e + n,
    label: (t.getFullYear() - e + n).toString()
  }));
}
function iw({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  yearRange: n = 50,
  ...o
}) {
  const a = f.useMemo(() => {
    let l = en;
    const { options: d, localize: p, formatLong: m } = o.locale || {};
    return d && p && m && (l = {
      options: d,
      localize: p,
      formatLong: m
    }), V$(l);
  }, []), i = f.useMemo(() => z$(n), []), s = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() - n, 0, 1);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  }, c = () => {
    const l = /* @__PURE__ */ new Date(), d = new Date(l.getFullYear() + n, 11, 31);
    return o.month ? o.month.getMonth() === d.getMonth() && o.month.getFullYear() === d.getFullYear() : !1;
  };
  return /* @__PURE__ */ u.jsx(
    pb,
    {
      showOutsideDays: r,
      className: N("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: N(
          gt({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&_svg]:size-3"
        ),
        nav_button_previous: N(
          "absolute left-1",
          s() && "pointer-events-none"
        ),
        nav_button_next: N(
          "absolute right-1",
          c() && "pointer-events-none"
        ),
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: N(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          o.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: N(
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
        Chevron: ({ ...l }) => l.orientation === "left" ? /* @__PURE__ */ u.jsx(ju, { className: "h-4 w-4" }) : /* @__PURE__ */ u.jsx(wn, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: l }) => /* @__PURE__ */ u.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ u.jsxs(
            yu,
            {
              defaultValue: l.date.getMonth().toString(),
              onValueChange: (d) => {
                const p = new Date(l.date);
                p.setMonth(Number.parseInt(d, 10)), o.onMonthChange?.(p);
              },
              children: [
                /* @__PURE__ */ u.jsx(Vo, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(bu, {}) }),
                /* @__PURE__ */ u.jsx(zo, { children: a.map((d) => /* @__PURE__ */ u.jsx(
                  yn,
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
            yu,
            {
              defaultValue: l.date.getFullYear().toString(),
              onValueChange: (d) => {
                const p = new Date(l.date);
                p.setFullYear(Number.parseInt(d, 10)), o.onMonthChange?.(p);
              },
              children: [
                /* @__PURE__ */ u.jsx(Vo, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ u.jsx(bu, {}) }),
                /* @__PURE__ */ u.jsx(zo, { children: i.map((d) => /* @__PURE__ */ u.jsx(
                  yn,
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
iw.displayName = "Calendar";
const sw = f.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: n, onLeftFocus: o, onRightFocus: a }, i) => {
    const s = (l) => {
      l.key === "ArrowRight" && a?.(), l.key === "ArrowLeft" && o?.();
    }, c = (l) => {
      if (t?.(l), r) {
        const d = new Date(r), p = aw(r.getHours());
        n?.(
          ou(
            d,
            p.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ u.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ u.jsxs(
      yu,
      {
        defaultValue: e,
        onValueChange: (l) => c(l),
        children: [
          /* @__PURE__ */ u.jsx(
            Vo,
            {
              ref: i,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: s,
              children: /* @__PURE__ */ u.jsx(bu, {})
            }
          ),
          /* @__PURE__ */ u.jsxs(zo, { children: [
            /* @__PURE__ */ u.jsx(yn, { value: "AM", children: "AM" }),
            /* @__PURE__ */ u.jsx(yn, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
sw.displayName = "TimePeriodSelect";
const vo = f.forwardRef(
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
    const w = f.useMemo(() => B$(a, l), [a, l]), _ = (C) => l === "12hours" && h && w.slice(1, 2) === "1" && b === "0" ? `0${C}` : h ? w.slice(1, 2) + C : `0${C}`, S = (C) => {
      if (C.key !== "Tab") {
        if (C.preventDefault(), C.key === "ArrowRight" && m?.(), C.key === "ArrowLeft" && p?.(), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const P = C.key === "ArrowUp" ? 1 : -1, E = W$(w, P, l);
          h && v(!1);
          const T = a ? new Date(a) : /* @__PURE__ */ new Date();
          i?.(ou(T, E, l, d));
        }
        if (C.key >= "0" && C.key <= "9") {
          l === "12hours" && x(C.key);
          const P = _(C.key);
          h && m?.(), v((T) => !T);
          const E = a ? new Date(a) : /* @__PURE__ */ new Date();
          i?.(ou(E, P, l, d));
        }
      }
    };
    return /* @__PURE__ */ u.jsx(
      zd,
      {
        ref: y,
        id: n || l,
        name: o || l,
        className: N(
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
vo.displayName = "TimePickerInput";
const cw = f.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: n = "second" }, o) => {
    const a = f.useRef(null), i = f.useRef(null), s = f.useRef(null), c = f.useRef(null), [l, d] = f.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return Eu(
      o,
      () => ({
        minuteRef: a.current,
        hourRef: i.current,
        secondRef: s.current,
        periodRef: c.current
      }),
      [a, i, s]
    ), /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ u.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ u.jsx(FP, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ u.jsx(
        vo,
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
          vo,
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
          vo,
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
        sw,
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
cw.displayName = "TimePicker";
const G$ = f.forwardRef(
  ({
    locale: e = en,
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
    const [g, y] = f.useState(r ?? t), h = wr(null), [v, b] = f.useState(
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
      const j = (T.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), V = LT(t, {
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
    const w = (T) => {
      T && (n?.(T), y(T), b(T));
    };
    Eu(
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
    let S = en;
    const { options: C, localize: P, formatLong: E } = e;
    return C && P && E && (S = {
      ...en,
      options: C,
      localize: P,
      formatLong: E
    }), /* @__PURE__ */ u.jsxs(Ta, { children: [
      /* @__PURE__ */ u.jsx(Na, { asChild: !0, disabled: i, children: /* @__PURE__ */ u.jsxs(
        rr,
        {
          variant: "outline",
          className: N(
            "w-full justify-start text-left font-normal",
            !v && "text-muted-foreground",
            d
          ),
          ref: h,
          children: [
            /* @__PURE__ */ u.jsx(Tg, { className: "mr-2 h-4 w-4" }),
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
      /* @__PURE__ */ u.jsxs(Fn, { className: "w-auto p-0", children: [
        /* @__PURE__ */ u.jsx(
          iw,
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
          cw,
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
G$.displayName = "DateTimePicker";
const U$ = na, v4 = $u, K$ = oa, g4 = $r, lw = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ir,
  {
    ref: r,
    className: N(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
lw.displayName = Ir.displayName;
const uw = f.forwardRef(({ className: e, onClose: t, ...r }, n) => /* @__PURE__ */ u.jsxs(K$, { children: [
  /* @__PURE__ */ u.jsx(lw, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ u.jsxs(
    Lr,
    {
      ref: n,
      className: N(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          $r,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ u.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ u.jsx(Zo, { className: "h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
uw.displayName = Lr.displayName;
const Y$ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: N(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Y$.displayName = "DialogHeader";
const X$ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: N(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
X$.displayName = "DialogFooter";
const Q$ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Cn,
  {
    ref: r,
    className: N(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Q$.displayName = Cn.displayName;
const Z$ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Pn,
  {
    ref: r,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
Z$.displayName = Pn.displayName;
var Cl = "rovingFocusGroup.onEntryFocus", J$ = { bubbles: !1, cancelable: !0 }, qn = "RovingFocusGroup", [au, dw, eF] = er(qn), [tF, kt] = be(
  qn,
  [eF]
), [rF, nF] = tF(qn), fw = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(au.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(au.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(oF, { ...e, ref: t }) }) })
);
fw.displayName = qn;
var oF = f.forwardRef((e, t) => {
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
    caller: qn
  }), [b, x] = f.useState(!1), w = ue(l), _ = dw(r), S = f.useRef(!1), [C, P] = f.useState(0);
  return f.useEffect(() => {
    const E = m.current;
    if (E)
      return E.addEventListener(Cl, w), () => E.removeEventListener(Cl, w);
  }, [w]), /* @__PURE__ */ u.jsx(
    rF,
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
              const I = new CustomEvent(Cl, J$);
              if (E.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const j = _().filter((F) => F.focusable), V = j.find((F) => F.active), q = j.find((F) => F.id === h), $ = [V, q, ...j].filter(
                  Boolean
                ).map((F) => F.ref.current);
                hw($, d);
              }
            }
            S.current = !1;
          }),
          onBlur: L(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), pw = "RovingFocusGroupItem", mw = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = ve(), l = a || c, d = nF(pw, r), p = d.currentTabStopId === l, m = dw(r), { onFocusableItemAdd: g, onFocusableItemRemove: y, currentTabStopId: h } = d;
    return f.useEffect(() => {
      if (n)
        return g(), () => y();
    }, [n, g, y]), /* @__PURE__ */ u.jsx(
      au.ItemSlot,
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
              const b = sF(v, d.orientation, d.dir);
              if (b !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = m().filter((_) => _.focusable).map((_) => _.ref.current);
                if (b === "last") w.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && w.reverse();
                  const _ = w.indexOf(v.currentTarget);
                  w = d.loop ? cF(w, _ + 1) : w.slice(_ + 1);
                }
                setTimeout(() => hw(w));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
mw.displayName = pw;
var aF = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function iF(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function sF(e, t, r) {
  const n = iF(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return aF[n];
}
function hw(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function cF(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Aa = fw, Oa = mw, iu = ["Enter", " "], lF = ["ArrowDown", "PageUp", "Home"], vw = ["ArrowUp", "PageDown", "End"], uF = [...lF, ...vw], dF = {
  ltr: [...iu, "ArrowRight"],
  rtl: [...iu, "ArrowLeft"]
}, fF = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Bn = "Menu", [vn, pF, mF] = er(Bn), [ir, gw] = be(Bn, [
  mF,
  jt,
  kt
]), Wn = jt(), yw = kt(), [bw, It] = ir(Bn), [hF, Hn] = ir(Bn), xw = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Wn(t), [c, l] = f.useState(null), d = f.useRef(!1), p = ue(a), m = xt(o);
  return f.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(In, { ...s, children: /* @__PURE__ */ u.jsx(
    bw,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u.jsx(
        hF,
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
xw.displayName = Bn;
var vF = "MenuAnchor", Id = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Wn(r);
    return /* @__PURE__ */ u.jsx(Ln, { ...o, ...n, ref: t });
  }
);
Id.displayName = vF;
var Ld = "MenuPortal", [gF, ww] = ir(Ld, {
  forceMount: void 0
}), _w = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = It(Ld, t);
  return /* @__PURE__ */ u.jsx(gF, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: n }) }) });
};
_w.displayName = Ld;
var $e = "MenuContent", [yF, $d] = ir($e), Sw = f.forwardRef(
  (e, t) => {
    const r = ww($e, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = It($e, e.__scopeMenu), i = Hn($e, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(vn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ u.jsx(bF, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(xF, { ...o, ref: t }) }) }) });
  }
), bF = f.forwardRef(
  (e, t) => {
    const r = It($e, e.__scopeMenu), n = f.useRef(null), o = ne(t, n);
    return f.useEffect(() => {
      const a = n.current;
      if (a) return ta(a);
    }, []), /* @__PURE__ */ u.jsx(
      Fd,
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
), xF = f.forwardRef((e, t) => {
  const r = It($e, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    Fd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), wF = /* @__PURE__ */ Rt("MenuContent.ScrollLock"), Fd = f.forwardRef(
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
    } = e, v = It($e, r), b = Hn($e, r), x = Wn(r), w = yw(r), _ = pF(r), [S, C] = f.useState(null), P = f.useRef(null), E = ne(t, P, v.onContentChange), T = f.useRef(0), I = f.useRef(""), j = f.useRef(0), V = f.useRef(null), q = f.useRef("right"), M = f.useRef(0), $ = y ? Sn : f.Fragment, F = y ? { as: wF, allowPinchZoom: !0 } : void 0, D = (W) => {
      const O = I.current + W, z = _().filter((k) => !k.disabled), A = document.activeElement, B = z.find((k) => k.ref.current === A)?.textValue, K = z.map((k) => k.textValue), G = jF(K, O, B), ee = z.find((k) => k.textValue === G)?.ref.current;
      (function k(X) {
        I.current = X, window.clearTimeout(T.current), X !== "" && (T.current = window.setTimeout(() => k(""), 1e3));
      })(O), ee && setTimeout(() => ee.focus());
    };
    f.useEffect(() => () => window.clearTimeout(T.current), []), Jo();
    const R = f.useCallback((W) => q.current === V.current?.side && kF(W, V.current?.area), []);
    return /* @__PURE__ */ u.jsx(
      yF,
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
          _n,
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
                  Aa,
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
                      Pa,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": qw(v.open),
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
                          if (W.target !== K || !uF.includes(W.key)) return;
                          W.preventDefault();
                          const ee = _().filter((k) => !k.disabled).map((k) => k.ref.current);
                          vw.includes(W.key) && ee.reverse(), AF(ee);
                        }),
                        onBlur: L(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(T.current), I.current = "");
                        }),
                        onPointerMove: L(
                          e.onPointerMove,
                          gn((W) => {
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
Sw.displayName = $e;
var _F = "MenuGroup", qd = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { role: "group", ...n, ref: t });
  }
);
qd.displayName = _F;
var SF = "MenuLabel", Cw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
Cw.displayName = SF;
var $o = "MenuItem", Kv = "menu.itemSelect", ja = f.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = f.useRef(null), i = Hn($o, e.__scopeMenu), s = $d($o, e.__scopeMenu), c = ne(t, a), l = f.useRef(!1), d = () => {
      const p = a.current;
      if (!r && p) {
        const m = new CustomEvent(Kv, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Kv, (g) => n?.(g), { once: !0 }), nn(p, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      Pw,
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
          r || m && p.key === " " || iu.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
ja.displayName = $o;
var Pw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = $d($o, r), s = yw(r), c = f.useRef(null), l = ne(t, c), [d, p] = f.useState(!1), [m, g] = f.useState("");
    return f.useEffect(() => {
      const y = c.current;
      y && g((y.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ u.jsx(
      vn.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ u.jsx(Oa, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ u.jsx(
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
              gn((y) => {
                n ? i.onItemLeave(y) : (i.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: L(
              e.onPointerLeave,
              gn((y) => i.onItemLeave(y))
            ),
            onFocus: L(e.onFocus, () => p(!0)),
            onBlur: L(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), CF = "MenuCheckboxItem", Ew = f.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(Aw, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ u.jsx(
      ja,
      {
        role: "menuitemcheckbox",
        "aria-checked": Fo(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": Hd(r),
        onSelect: L(
          o.onSelect,
          () => n?.(Fo(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ew.displayName = CF;
var Rw = "MenuRadioGroup", [PF, EF] = ir(
  Rw,
  { value: void 0, onValueChange: () => {
  } }
), Tw = f.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = ue(n);
    return /* @__PURE__ */ u.jsx(PF, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ u.jsx(qd, { ...o, ref: t }) });
  }
);
Tw.displayName = Rw;
var Nw = "MenuRadioItem", Mw = f.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = EF(Nw, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ u.jsx(Aw, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ u.jsx(
      ja,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": Hd(a),
        onSelect: L(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Mw.displayName = Nw;
var Bd = "MenuItemIndicator", [Aw, RF] = ir(
  Bd,
  { checked: !1 }
), Ow = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = RF(Bd, r);
    return /* @__PURE__ */ u.jsx(
      he,
      {
        present: n || Fo(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          H.span,
          {
            ...o,
            ref: t,
            "data-state": Hd(a.checked)
          }
        )
      }
    );
  }
);
Ow.displayName = Bd;
var TF = "MenuSeparator", jw = f.forwardRef(
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
jw.displayName = TF;
var NF = "MenuArrow", Dw = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Wn(r);
    return /* @__PURE__ */ u.jsx(Ea, { ...o, ...n, ref: t });
  }
);
Dw.displayName = NF;
var Wd = "MenuSub", [MF, kw] = ir(Wd), Iw = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = It(Wd, t), i = Wn(t), [s, c] = f.useState(null), [l, d] = f.useState(null), p = ue(o);
  return f.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ u.jsx(In, { ...i, children: /* @__PURE__ */ u.jsx(
    bw,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ u.jsx(
        MF,
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
Iw.displayName = Wd;
var Zr = "MenuSubTrigger", Lw = f.forwardRef(
  (e, t) => {
    const r = It(Zr, e.__scopeMenu), n = Hn(Zr, e.__scopeMenu), o = kw(Zr, e.__scopeMenu), a = $d(Zr, e.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, d = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ u.jsx(Id, { asChild: !0, ...l, children: /* @__PURE__ */ u.jsx(
      Pw,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": qw(r.open),
        ...e,
        ref: ot(t, o.onTriggerChange),
        onClick: (p) => {
          e.onClick?.(p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: L(
          e.onPointerMove,
          gn((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: L(
          e.onPointerLeave,
          gn((p) => {
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
          e.disabled || m && p.key === " " || dF[n.dir].includes(p.key) && (r.onOpenChange(!0), r.content?.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Lw.displayName = Zr;
var $w = "MenuSubContent", Fw = f.forwardRef(
  (e, t) => {
    const r = ww($e, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = It($e, e.__scopeMenu), i = Hn($e, e.__scopeMenu), s = kw($w, e.__scopeMenu), c = f.useRef(null), l = ne(t, c);
    return /* @__PURE__ */ u.jsx(vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(he, { present: n || a.open, children: /* @__PURE__ */ u.jsx(vn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      Fd,
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
          const p = d.currentTarget.contains(d.target), m = fF[i.dir].includes(d.key);
          p && m && (a.onOpenChange(!1), s.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Fw.displayName = $w;
function qw(e) {
  return e ? "open" : "closed";
}
function Fo(e) {
  return e === "indeterminate";
}
function Hd(e) {
  return Fo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function AF(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function OF(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function jF(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = OF(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function DF(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, d = s.y, p = c.x, m = c.y;
    d > n != m > n && r < (p - l) * (n - d) / (m - d) + l && (o = !o);
  }
  return o;
}
function kF(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return DF(r, t);
}
function gn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var IF = xw, LF = Id, $F = _w, FF = Sw, qF = qd, BF = Cw, WF = ja, HF = Ew, VF = Tw, zF = Mw, GF = Ow, UF = jw, KF = Dw, YF = Iw, XF = Lw, QF = Fw, Da = "DropdownMenu", [ZF, y4] = be(
  Da,
  [gw]
), Re = gw(), [JF, Bw] = ZF(Da), Ww = (e) => {
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
    caller: Da
  });
  return /* @__PURE__ */ u.jsx(
    JF,
    {
      scope: t,
      triggerId: ve(),
      triggerRef: l,
      contentId: ve(),
      open: d,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ u.jsx(IF, { ...c, open: d, onOpenChange: p, dir: n, modal: s, children: r })
    }
  );
};
Ww.displayName = Da;
var Hw = "DropdownMenuTrigger", Vw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = Bw(Hw, r), i = Re(r);
    return /* @__PURE__ */ u.jsx(LF, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
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
Vw.displayName = Hw;
var e2 = "DropdownMenuPortal", zw = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = Re(t);
  return /* @__PURE__ */ u.jsx($F, { ...n, ...r });
};
zw.displayName = e2;
var Gw = "DropdownMenuContent", Uw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Bw(Gw, r), a = Re(r), i = f.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      FF,
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
Uw.displayName = Gw;
var t2 = "DropdownMenuGroup", Kw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(qF, { ...o, ...n, ref: t });
  }
);
Kw.displayName = t2;
var r2 = "DropdownMenuLabel", Yw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(BF, { ...o, ...n, ref: t });
  }
);
Yw.displayName = r2;
var n2 = "DropdownMenuItem", Xw = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(WF, { ...o, ...n, ref: t });
  }
);
Xw.displayName = n2;
var o2 = "DropdownMenuCheckboxItem", Qw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(HF, { ...o, ...n, ref: t });
});
Qw.displayName = o2;
var a2 = "DropdownMenuRadioGroup", Zw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(VF, { ...o, ...n, ref: t });
});
Zw.displayName = a2;
var i2 = "DropdownMenuRadioItem", Jw = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(zF, { ...o, ...n, ref: t });
});
Jw.displayName = i2;
var s2 = "DropdownMenuItemIndicator", e_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(GF, { ...o, ...n, ref: t });
});
e_.displayName = s2;
var c2 = "DropdownMenuSeparator", t_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(UF, { ...o, ...n, ref: t });
});
t_.displayName = c2;
var l2 = "DropdownMenuArrow", u2 = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
    return /* @__PURE__ */ u.jsx(KF, { ...o, ...n, ref: t });
  }
);
u2.displayName = l2;
var d2 = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = Re(t), [s, c] = xe({
    prop: n,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ u.jsx(YF, { ...i, open: s, onOpenChange: c, children: r });
}, f2 = "DropdownMenuSubTrigger", r_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(XF, { ...o, ...n, ref: t });
});
r_.displayName = f2;
var p2 = "DropdownMenuSubContent", n_ = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = Re(r);
  return /* @__PURE__ */ u.jsx(
    QF,
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
n_.displayName = p2;
var m2 = Ww, h2 = Vw, o_ = zw, a_ = Uw, v2 = Kw, i_ = Yw, s_ = Xw, c_ = Qw, g2 = Zw, l_ = Jw, u_ = e_, d_ = t_, y2 = d2, f_ = r_, p_ = n_;
const b4 = m2, x4 = h2, w4 = v2, _4 = o_, S4 = y2, C4 = g2, b2 = f.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  f_,
  {
    ref: o,
    className: N(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ u.jsx(wn, { className: "ml-auto h-4 w-4" })
    ]
  }
));
b2.displayName = f_.displayName;
const x2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  p_,
  {
    ref: r,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
x2.displayName = p_.displayName;
const w2 = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(o_, { children: /* @__PURE__ */ u.jsx(
  a_,
  {
    ref: n,
    sideOffset: t,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
w2.displayName = a_.displayName;
const _2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  s_,
  {
    ref: n,
    className: N(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
_2.displayName = s_.displayName;
const S2 = f.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ u.jsxs(
  c_,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(u_, { children: /* @__PURE__ */ u.jsx(_r, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
S2.displayName = c_.displayName;
const C2 = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  l_,
  {
    ref: n,
    className: N(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(u_, { children: /* @__PURE__ */ u.jsx(Ng, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
C2.displayName = l_.displayName;
const P2 = f.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  i_,
  {
    ref: n,
    className: N(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
P2.displayName = i_.displayName;
const E2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  d_,
  {
    ref: r,
    className: N("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
E2.displayName = d_.displayName;
const R2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: N("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
R2.displayName = "DropdownMenuShortcut";
var T2 = "Label", m_ = f.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  H.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
m_.displayName = T2;
var h_ = m_;
const N2 = ct(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Vd = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  h_,
  {
    ref: r,
    className: N(N2(), e),
    ...t
  }
));
Vd.displayName = h_.displayName;
const P4 = k0, v_ = f.createContext(
  {}
), M2 = ({
  ...e
}) => /* @__PURE__ */ u.jsx(v_.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u.jsx(I0, { ...e }) }), ka = () => {
  const e = f.useContext(v_), t = f.useContext(g_), { getFieldState: r, formState: n } = ag(), o = r(e.name, n);
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
}, g_ = f.createContext(
  {}
), y_ = f.forwardRef(({ className: e, ...t }, r) => {
  const n = f.useId();
  return /* @__PURE__ */ u.jsx(g_.Provider, { value: { id: n }, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: r,
      className: N("space-y-1 relative", e),
      ...t
    }
  ) });
});
y_.displayName = "FormItem";
const b_ = f.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = ka();
  return /* @__PURE__ */ u.jsx(
    Vd,
    {
      ref: r,
      className: N(n && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
b_.displayName = "FormLabel";
const x_ = f.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = ka();
  return /* @__PURE__ */ u.jsx(
    ig,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
x_.displayName = "FormControl";
const A2 = f.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = ka();
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: N("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
A2.displayName = "FormDescription";
const w_ = f.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: o, formMessageId: a } = ka(), i = o ? String(o?.message) : t;
  return i ? /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: n,
      id: a,
      className: N(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...r,
      children: i
    }
  ) : null;
});
w_.displayName = "FormMessage";
const O2 = ct("font-bold tracking-tight", {
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
}), E4 = Q.forwardRef(
  ({ className: e, variant: t, children: r, ...n }, o) => {
    const a = t || "h1";
    return /* @__PURE__ */ u.jsx(
      a,
      {
        className: N(O2({ variant: t }), e),
        ref: o,
        ...n,
        children: r
      }
    );
  }
), zd = Q.forwardRef(({ className: e, type: t, ...r }, n) => t === "textarea" ? /* @__PURE__ */ u.jsx(
  "textarea",
  {
    rows: 1,
    ref: n,
    className: N(
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
    className: N(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
)), R4 = ({
  name: e,
  label: t,
  placeholder: r,
  mask: n,
  ...o
}) => {
  const a = ag();
  return /* @__PURE__ */ u.jsx(
    M2,
    {
      control: a.control,
      name: e,
      render: ({ field: i }) => /* @__PURE__ */ u.jsxs(y_, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ u.jsx(b_, { children: t }),
        /* @__PURE__ */ u.jsx(x_, { children: n ? /* @__PURE__ */ u.jsx(
          iq,
          {
            mask: n,
            placeholder: r,
            ...o,
            ...i
          }
        ) : /* @__PURE__ */ u.jsx(zd, { placeholder: r, ...o, ...i }) }),
        /* @__PURE__ */ u.jsx(w_, {})
      ] })
    }
  );
};
var __ = Object.freeze({
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
}), j2 = "VisuallyHidden", Ia = f.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    H.span,
    {
      ...e,
      ref: t,
      style: { ...__, ...e.style }
    }
  )
);
Ia.displayName = j2;
var S_ = Ia, sr = "NavigationMenu", [Gd, C_, D2] = er(sr), [su, k2, I2] = er(sr), [Ud, T4] = be(
  sr,
  [D2, I2]
), [L2, qe] = Ud(sr), [$2, F2] = Ud(sr), P_ = f.forwardRef(
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
      caller: sr
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
      E_,
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
P_.displayName = sr;
var cu = "NavigationMenuSub", q2 = f.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = qe(cu, r), [l, d] = xe({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: cu
    });
    return /* @__PURE__ */ u.jsx(
      E_,
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
q2.displayName = cu;
var E_ = (e) => {
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
    L2,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: s,
      previousValue: jn(s),
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
      children: /* @__PURE__ */ u.jsx(Gd.Provider, { scope: t, children: /* @__PURE__ */ u.jsx($2, { scope: t, items: v, children: i }) })
    }
  );
}, R_ = "NavigationMenuList", T_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = qe(R_, r), a = /* @__PURE__ */ u.jsx(H.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ u.jsx(H.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ u.jsx(Gd.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ u.jsx($_, { asChild: !0, children: a }) : a }) });
  }
);
T_.displayName = R_;
var N_ = "NavigationMenuItem", [B2, M_] = Ud(N_), A_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = ve(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = f.useRef(null), c = f.useRef(null), l = f.useRef(null), d = f.useRef(() => {
    }), p = f.useRef(!1), m = f.useCallback((y = "start") => {
      if (s.current) {
        d.current();
        const h = uu(s.current);
        h.length && Xd(y === "start" ? h : h.reverse());
      }
    }, []), g = f.useCallback(() => {
      if (s.current) {
        const y = uu(s.current);
        y.length && (d.current = K2(y));
      }
    }, []);
    return /* @__PURE__ */ u.jsx(
      B2,
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
A_.displayName = N_;
var lu = "NavigationMenuTrigger", O_ = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = qe(lu, e.__scopeNavigationMenu), i = M_(lu, e.__scopeNavigationMenu), s = f.useRef(null), c = ne(s, i.triggerRef, t), l = q_(a.baseId, i.value), d = B_(a.baseId, i.value), p = f.useRef(!1), m = f.useRef(!1), g = i.value === a.value;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(Gd.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ u.jsx(F_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": Qd(g),
        "aria-expanded": g,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: L(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: L(
          e.onPointerMove,
          qo(() => {
            n || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: L(
          e.onPointerLeave,
          qo(() => {
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
        S_,
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
O_.displayName = lu;
var W2 = "NavigationMenuLink", Yv = "navigationMenu.linkSelect", j_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ u.jsx(F_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      H.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: L(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(Yv, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Yv, (l) => o?.(l), { once: !0 }), nn(s, c), !c.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(go, {
                bubbles: !0,
                cancelable: !0
              });
              nn(s, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
j_.displayName = W2;
var Kd = "NavigationMenuIndicator", D_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = qe(Kd, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? og.createPortal(
    /* @__PURE__ */ u.jsx(he, { present: r || a, children: /* @__PURE__ */ u.jsx(H2, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
D_.displayName = Kd;
var H2 = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = qe(Kd, r), a = C_(r), [i, s] = f.useState(
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
  return du(i, m), du(o.indicatorTrack, m), c ? /* @__PURE__ */ u.jsx(
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
}), Ar = "NavigationMenuContent", k_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = qe(Ar, e.__scopeNavigationMenu), a = M_(Ar, e.__scopeNavigationMenu), i = ne(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ u.jsx(V2, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ u.jsx(he, { present: r || s, children: /* @__PURE__ */ u.jsx(
    I_,
    {
      "data-state": Qd(s),
      ...c,
      ref: i,
      onPointerEnter: L(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: L(
        e.onPointerLeave,
        qo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
k_.displayName = Ar;
var V2 = f.forwardRef((e, t) => {
  const r = qe(Ar, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return me(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), me(() => () => o(e.value), [e.value, o]), null;
}), go = "navigationMenu.rootContentDismiss", I_ = f.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...l
  } = e, d = qe(Ar, r), p = f.useRef(null), m = ne(p, t), g = q_(d.baseId, n), y = B_(d.baseId, n), h = C_(r), v = f.useRef(null), { onItemDismiss: b } = d;
  f.useEffect(() => {
    const w = p.current;
    if (d.isRootMenu && w) {
      const _ = () => {
        b(), s(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(go, _), () => w.removeEventListener(go, _);
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
  return /* @__PURE__ */ u.jsx($_, { asChild: !0, children: /* @__PURE__ */ u.jsx(
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
        const w = new Event(go, {
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
          const C = uu(w.currentTarget), P = document.activeElement, E = C.findIndex((j) => j === P), I = w.shiftKey ? C.slice(0, E).reverse() : C.slice(E + 1, C.length);
          Xd(I) ? w.preventDefault() : a.current?.focus();
        }
      }),
      onEscapeKeyDown: L(e.onEscapeKeyDown, (w) => {
        i.current = !0;
      })
    }
  ) });
}), Yd = "NavigationMenuViewport", L_ = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!qe(Yd, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ u.jsx(he, { present: r || a, children: /* @__PURE__ */ u.jsx(z2, { ...n, ref: t }) });
});
L_.displayName = Yd;
var z2 = f.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = qe(Yd, r), i = ne(t, a.onViewportChange), s = F2(
    Ar,
    e.__scopeNavigationMenu
  ), [c, l] = f.useState(null), [d, p] = f.useState(null), m = c ? c?.width + "px" : void 0, g = c ? c?.height + "px" : void 0, y = !!a.value, h = y ? a.value : a.previousValue;
  return du(d, () => {
    d && l({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ u.jsx(
    H.div,
    {
      "data-state": Qd(y),
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
      onPointerLeave: L(e.onPointerLeave, qo(a.onContentLeave)),
      children: Array.from(s.items).map(([b, { ref: x, forceMount: w, ..._ }]) => {
        const S = h === b;
        return /* @__PURE__ */ u.jsx(he, { present: w || S, children: /* @__PURE__ */ u.jsx(
          I_,
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
}), G2 = "FocusGroup", $_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = qe(G2, r);
    return /* @__PURE__ */ u.jsx(su.Provider, { scope: r, children: /* @__PURE__ */ u.jsx(su.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(H.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), Xv = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], U2 = "FocusGroupItem", F_ = f.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = k2(r), a = qe(U2, r);
    return /* @__PURE__ */ u.jsx(su.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
      H.button,
      {
        ...n,
        ref: t,
        onKeyDown: L(e.onKeyDown, (i) => {
          if (["Home", "End", ...Xv].includes(i.key)) {
            let c = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), Xv.includes(i.key)) {
              const p = c.indexOf(i.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => Xd(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function uu(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Xd(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function K2(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function du(e, t) {
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
function Qd(e) {
  return e ? "open" : "closed";
}
function q_(e, t) {
  return `${e}-trigger-${t}`;
}
function B_(e, t) {
  return `${e}-content-${t}`;
}
function qo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var W_ = P_, H_ = T_, Y2 = A_, V_ = O_, X2 = j_, z_ = D_, G_ = k_, U_ = L_;
const Q2 = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  W_,
  {
    ref: n,
    className: N(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(K_, {})
    ]
  }
));
Q2.displayName = W_.displayName;
const Z2 = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  H_,
  {
    ref: r,
    className: N(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Z2.displayName = H_.displayName;
const N4 = Y2, J2 = ct(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), eq = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  V_,
  {
    ref: n,
    className: N(J2(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ u.jsx(
        Sr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
eq.displayName = V_.displayName;
const tq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  G_,
  {
    ref: r,
    className: N(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
tq.displayName = G_.displayName;
const rq = X2, K_ = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: N("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ u.jsx(
  U_,
  {
    className: N(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
K_.displayName = U_.displayName;
const nq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  z_,
  {
    ref: r,
    className: N(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
nq.displayName = z_.displayName;
const oq = Q.forwardRef(({ className: e, title: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(rq, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
  "a",
  {
    ref: o,
    className: N(
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
oq.displayName = "ListItem";
function aq(e) {
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
function M4() {
  return /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center flex-1 p-10", children: /* @__PURE__ */ u.jsx(aq, { className: "w-40" }) });
}
function iq({
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
    zd,
    {
      value: mb(e, t),
      onChange: s,
      ...n
    }
  );
}
const sq = (e, t = 300) => {
  const [r, n] = Te(e);
  return je(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, Qv = ct(
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
), cq = f.forwardRef(
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
    const [h, v] = f.useState(n), [b, x] = f.useState(!1), [w, _] = f.useState(!1), [S, C] = f.useState(""), P = sq(S, 300);
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
    }, T = (M) => {
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
      Ta,
      {
        open: b,
        onOpenChange: x,
        modal: s,
        children: [
          /* @__PURE__ */ u.jsx(Na, { asChild: !0, children: /* @__PURE__ */ u.jsx(
            rr,
            {
              ref: y,
              ...g,
              onClick: j,
              variant: "outline",
              className: N(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, i).map((M) => {
                    const $ = e.find((D) => D.value === M), F = $?.icon;
                    return /* @__PURE__ */ u.jsxs(
                      Xf,
                      {
                        className: N(
                          w ? "animate-bounce" : "",
                          Qv({ variant: r })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          F && /* @__PURE__ */ u.jsx(F, { className: "h-4 w-4 mr-2" }),
                          $?.label,
                          /* @__PURE__ */ u.jsx(
                            Rf,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (D) => {
                                D.stopPropagation(), T(M);
                              }
                            }
                          )
                        ]
                      },
                      M
                    );
                  }),
                  h.length > i && /* @__PURE__ */ u.jsxs(
                    Xf,
                    {
                      className: N(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        Qv({ variant: r })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - i}`,
                        /* @__PURE__ */ u.jsx(
                          Rf,
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
                  /* @__PURE__ */ u.jsx(
                    Zo,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (M) => {
                        M.stopPropagation(), I();
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    lC,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ u.jsx(Sr, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ u.jsx(Sr, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ u.jsx(
            Fn,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => x(!1),
              children: /* @__PURE__ */ u.jsxs(xa, { shouldFilter: !d, children: [
                /* @__PURE__ */ u.jsx(
                  _d,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: E,
                    onValueChange: C
                  }
                ),
                /* @__PURE__ */ u.jsxs(Sd, { children: [
                  !p && /* @__PURE__ */ u.jsx(Cd, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ u.jsxs(wa, { children: [
                    !p && !e.length && !!S.length && m && /* @__PURE__ */ u.jsx(
                      br,
                      {
                        onSelect: m,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ u.jsx(HP, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ u.jsx("b", { children: S })
                        ] })
                      },
                      "new"
                    ),
                    p && /* @__PURE__ */ u.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ u.jsx(Ag, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !l && /* @__PURE__ */ u.jsxs(
                      br,
                      {
                        onSelect: q,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              className: N(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ u.jsx(_r, { className: "h-4 w-4" })
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
                        br,
                        {
                          onSelect: () => T(M.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ u.jsx(
                              "div",
                              {
                                className: N(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  $ ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ u.jsx(_r, { className: "h-4 w-4" })
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
                  /* @__PURE__ */ u.jsx(Cx, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ u.jsx(
            UP,
            {
              className: N(
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
cq.displayName = "MultiSelect";
const lq = ({ className: e, ...t }) => /* @__PURE__ */ u.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: N("mx-auto flex w-full justify-center", e),
    ...t
  }
);
lq.displayName = "Pagination";
const uq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "ul",
  {
    ref: r,
    className: N("flex flex-row items-center gap-1", e),
    ...t
  }
));
uq.displayName = "PaginationContent";
const dq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("li", { ref: r, className: N("", e), ...t }));
dq.displayName = "PaginationItem";
const Zd = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...n
}) => /* @__PURE__ */ u.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: N(
      gt({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...n
  }
);
Zd.displayName = "PaginationLink";
const fq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  Zd,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: N("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(ju, { className: "h-4 w-4" })
  }
);
fq.displayName = "PaginationPrevious";
const pq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  Zd,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: N("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(wn, { className: "h-4 w-4" })
  }
);
pq.displayName = "PaginationNext";
const mq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: N("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(Mg, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
mq.displayName = "PaginationEllipsis";
var Jd = "Radio", [hq, Y_] = be(Jd), [vq, gq] = hq(Jd), X_ = f.forwardRef(
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
    return /* @__PURE__ */ u.jsxs(vq, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ u.jsx(
        H.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": eS(o),
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
        J_,
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
X_.displayName = Jd;
var Q_ = "RadioIndicator", Z_ = f.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = gq(Q_, r);
    return /* @__PURE__ */ u.jsx(he, { present: n || a.checked, children: /* @__PURE__ */ u.jsx(
      H.span,
      {
        "data-state": eS(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Z_.displayName = Q_;
var yq = "RadioBubbleInput", J_ = f.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = f.useRef(null), s = ne(i, a), c = jn(r), l = ga(t);
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
J_.displayName = yq;
function eS(e) {
  return e ? "checked" : "unchecked";
}
var bq = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], La = "RadioGroup", [xq, A4] = be(La, [
  kt,
  Y_
]), tS = kt(), rS = Y_(), [wq, _q] = xq(La), nS = f.forwardRef(
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
    } = e, g = tS(r), y = xt(l), [h, v] = xe({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: La
    });
    return /* @__PURE__ */ u.jsx(
      wq,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: h,
        onValueChange: v,
        children: /* @__PURE__ */ u.jsx(
          Aa,
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
nS.displayName = La;
var oS = "RadioGroupItem", aS = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = _q(oS, r), i = a.disabled || n, s = tS(r), c = rS(r), l = f.useRef(null), d = ne(t, l), p = a.value === o.value, m = f.useRef(!1);
    return f.useEffect(() => {
      const g = (h) => {
        bq.includes(h.key) && (m.current = !0);
      }, y = () => m.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ u.jsx(
      Oa,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ u.jsx(
          X_,
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
aS.displayName = oS;
var Sq = "RadioGroupIndicator", iS = f.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = rS(r);
    return /* @__PURE__ */ u.jsx(Z_, { ...o, ...n, ref: t });
  }
);
iS.displayName = Sq;
var sS = nS, cS = aS, Cq = iS;
const Pq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  sS,
  {
    className: N("grid gap-2", e),
    ...t,
    ref: r
  }
));
Pq.displayName = sS.displayName;
const Eq = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  cS,
  {
    ref: r,
    className: N(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Cq, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(Ng, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Eq.displayName = cS.displayName;
function fu(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Rq(e, t) {
  return f.useReducer((r, n) => t[r][n] ?? r, e);
}
var ef = "ScrollArea", [lS, O4] = be(ef), [Tq, Be] = lS(ef), uS = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = f.useState(null), [l, d] = f.useState(null), [p, m] = f.useState(null), [g, y] = f.useState(null), [h, v] = f.useState(null), [b, x] = f.useState(0), [w, _] = f.useState(0), [S, C] = f.useState(!1), [P, E] = f.useState(!1), T = ne(t, (j) => c(j)), I = xt(o);
    return /* @__PURE__ */ u.jsx(
      Tq,
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
uS.displayName = ef;
var dS = "ScrollAreaViewport", fS = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = Be(dS, r), s = f.useRef(null), c = ne(t, s, i.onViewportChange);
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
fS.displayName = dS;
var ft = "ScrollAreaScrollbar", tf = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Be(ft, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return f.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ u.jsx(Nq, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ u.jsx(Mq, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ u.jsx(pS, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ u.jsx(rf, { ...n, ref: t }) : null;
  }
);
tf.displayName = ft;
var Nq = f.forwardRef((e, t) => {
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
    pS,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), Mq = f.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Be(ft, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Fa(() => c("SCROLL_END"), 100), [s, c] = Rq("hidden", {
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
    rf,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: L(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: L(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), pS = f.forwardRef((e, t) => {
  const r = Be(ft, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = f.useState(!1), s = e.orientation === "horizontal", c = Fa(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? l : d);
    }
  }, 10);
  return Or(r.viewport, c), Or(r.content, c), /* @__PURE__ */ u.jsx(he, { present: n || a, children: /* @__PURE__ */ u.jsx(
    rf,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), rf = f.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = Be(ft, e.__scopeScrollArea), a = f.useRef(null), i = f.useRef(0), [s, c] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = yS(s.viewport, s.content), d = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, g) {
    return Iq(m, i.current, s, g);
  }
  return r === "horizontal" ? /* @__PURE__ */ u.jsx(
    Aq,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, g = Zv(m, s, o.dir);
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
    Oq,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, g = Zv(m, s);
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
}), Aq = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Be(ft, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ne(t, c, a.onScrollbarXChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    hS,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": $a(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), xS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Wo(i.paddingLeft),
            paddingEnd: Wo(i.paddingRight)
          }
        });
      }
    }
  );
}), Oq = f.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Be(ft, e.__scopeScrollArea), [i, s] = f.useState(), c = f.useRef(null), l = ne(t, c, a.onScrollbarYChange);
  return f.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    hS,
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
        "--radix-scroll-area-thumb-height": $a(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), xS(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Wo(i.paddingTop),
            paddingEnd: Wo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [jq, mS] = lS(ft), hS = f.forwardRef((e, t) => {
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
  } = e, g = Be(ft, r), [y, h] = f.useState(null), v = ne(t, (T) => h(T)), b = f.useRef(null), x = f.useRef(""), w = g.viewport, _ = n.content - n.viewport, S = ue(d), C = ue(c), P = Fa(p, 10);
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
  }, [w, y, _, S]), f.useEffect(C, [n, C]), Or(y, P), Or(g.content, P), /* @__PURE__ */ u.jsx(
    jq,
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
}), Bo = "ScrollAreaThumb", vS = f.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = mS(Bo, e.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(he, { present: r || o.hasThumb, children: /* @__PURE__ */ u.jsx(Dq, { ref: t, ...n }) });
  }
), Dq = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = Be(Bo, r), i = mS(Bo, r), { onThumbPositionChange: s } = i, c = ne(
      t,
      (p) => i.onThumbChange(p)
    ), l = f.useRef(void 0), d = Fa(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (d(), !l.current) {
            const g = Lq(p, s);
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
vS.displayName = Bo;
var nf = "ScrollAreaCorner", gS = f.forwardRef(
  (e, t) => {
    const r = Be(nf, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ u.jsx(kq, { ...e, ref: t }) : null;
  }
);
gS.displayName = nf;
var kq = f.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = Be(nf, r), [a, i] = f.useState(0), [s, c] = f.useState(0), l = !!(a && s);
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
function Wo(e) {
  return e ? parseInt(e, 10) : 0;
}
function yS(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function $a(e) {
  const t = yS(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function Iq(e, t, r, n = "ltr") {
  const o = $a(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, d = r.content - r.viewport, p = n === "ltr" ? [0, d] : [d * -1, 0];
  return bS([c, l], p)(e);
}
function Zv(e, t, r = "ltr") {
  const n = $a(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], l = fu(e, c);
  return bS([0, i], [0, s])(l);
}
function bS(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function xS(e, t) {
  return e > 0 && e < t;
}
var Lq = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function Fa(e, t) {
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
var wS = uS, $q = fS, Fq = gS;
const qq = Q.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  wS,
  {
    ref: n,
    className: N("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx($q, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(_S, {}),
      /* @__PURE__ */ u.jsx(Fq, {})
    ]
  }
));
qq.displayName = wS.displayName;
const _S = Q.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ u.jsx(
  tf,
  {
    ref: n,
    orientation: t,
    className: N(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ u.jsx(vS, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
_S.displayName = tf.displayName;
var Bq = [" ", "Enter", "ArrowUp", "ArrowDown"], Wq = [" ", "Enter"], Xt = "Select", [qa, Ba, Hq] = er(Xt), [Wr, j4] = be(Xt, [
  Hq,
  jt
]), Wa = jt(), [Vq, Lt] = Wr(Xt), [zq, Gq] = Wr(Xt), SS = (e) => {
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
  } = e, h = Wa(t), [v, b] = f.useState(null), [x, w] = f.useState(null), [_, S] = f.useState(!1), C = xt(l), [P, E] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Xt
  }), [T, I] = xe({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: Xt
  }), j = f.useRef(null), V = v ? y || !!v.closest("form") : !0, [q, M] = f.useState(/* @__PURE__ */ new Set()), $ = Array.from(q).map((F) => F.props.value).join(";");
  return /* @__PURE__ */ u.jsx(In, { ...h, children: /* @__PURE__ */ u.jsxs(
    Vq,
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
        /* @__PURE__ */ u.jsx(qa.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          zq,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((F) => {
              M((D) => new Set(D).add(F));
            }, []),
            onNativeOptionRemove: f.useCallback((F) => {
              M((D) => {
                const R = new Set(D);
                return R.delete(F), R;
              });
            }, []),
            children: r
          }
        ) }),
        V ? /* @__PURE__ */ u.jsxs(
          KS,
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
SS.displayName = Xt;
var CS = "SelectTrigger", PS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = Wa(r), i = Lt(CS, r), s = i.disabled || n, c = ne(t, i.onTriggerChange), l = Ba(r), d = f.useRef("touch"), [p, m, g] = XS((h) => {
      const v = l().filter((w) => !w.disabled), b = v.find((w) => w.value === i.value), x = QS(v, h, b);
      x !== void 0 && i.onValueChange(x.value);
    }), y = (h) => {
      s || (i.onOpenChange(!0), g()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(Ln, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
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
        "data-placeholder": YS(i.value) ? "" : void 0,
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
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && Bq.includes(h.key) && (y(), h.preventDefault());
        })
      }
    ) });
  }
);
PS.displayName = CS;
var ES = "SelectValue", RS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = Lt(ES, r), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, p = ne(t, c.onValueNodeChange);
    return me(() => {
      l(d);
    }, [l, d]), /* @__PURE__ */ u.jsx(
      H.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: YS(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: i }) : a
      }
    );
  }
);
RS.displayName = ES;
var Uq = "SelectIcon", TS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(H.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
TS.displayName = Uq;
var Kq = "SelectPortal", NS = (e) => /* @__PURE__ */ u.jsx(tr, { asChild: !0, ...e });
NS.displayName = Kq;
var Qt = "SelectContent", MS = f.forwardRef(
  (e, t) => {
    const r = Lt(Qt, e.__scopeSelect), [n, o] = f.useState();
    if (me(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? xn.createPortal(
        /* @__PURE__ */ u.jsx(AS, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(qa.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(OS, { ...e, ref: t });
  }
);
MS.displayName = Qt;
var We = 10, [AS, $t] = Wr(Qt), Yq = "SelectContentImpl", Xq = /* @__PURE__ */ Rt("SelectContent.RemoveScroll"), OS = f.forwardRef(
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
    ), V = Ba(r), [q, M] = f.useState(!1), $ = f.useRef(!1);
    f.useEffect(() => {
      if (w) return ta(w);
    }, [w]), Jo();
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
    const [O, z] = XS((k) => {
      const X = V().filter((te) => !te.disabled), re = X.find((te) => te.ref.current === document.activeElement), oe = QS(X, k, re);
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
    ), G = n === "popper" ? pu : jS, ee = G === pu ? {
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
      AS,
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
        children: /* @__PURE__ */ u.jsx(Sn, { as: Xq, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          _n,
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
OS.displayName = Yq;
var Qq = "SelectItemAlignedPosition", jS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = Lt(Qt, r), i = $t(Qt, r), [s, c] = f.useState(null), [l, d] = f.useState(null), p = ne(t, (P) => d(P)), m = Ba(r), g = f.useRef(!1), y = f.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: b, focusSelectedItem: x } = i, w = f.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && v && b) {
      const P = a.trigger.getBoundingClientRect(), E = l.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), I = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const te = I.left - E.left, U = T.left - te, ie = P.left - U, Y = P.width + ie, ge = Math.max(Y, E.width), we = window.innerWidth - We, Pe = fu(U, [
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
        const te = E.right - I.right, U = window.innerWidth - T.right - te, ie = window.innerWidth - P.right - U, Y = P.width + ie, ge = Math.max(Y, E.width), we = window.innerWidth - We, Pe = fu(U, [
          We,
          Math.max(We, we - ge)
        ]);
        s.style.minWidth = Y + "px", s.style.right = Pe + "px";
      }
      const j = m(), V = window.innerHeight - We * 2, q = h.scrollHeight, M = window.getComputedStyle(l), $ = parseInt(M.borderTopWidth, 10), F = parseInt(M.paddingTop, 10), D = parseInt(M.borderBottomWidth, 10), R = parseInt(M.paddingBottom, 10), W = $ + F + q + R + D, O = Math.min(v.offsetHeight * 5, W), z = window.getComputedStyle(h), A = parseInt(z.paddingTop, 10), B = parseInt(z.paddingBottom, 10), K = P.top + P.height / 2 - We, G = V - K, ee = v.offsetHeight / 2, k = v.offsetTop + ee, X = $ + F + k, re = W - X;
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
    Jq,
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
jS.displayName = Qq;
var Zq = "SelectPopperPosition", pu = f.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = We,
    ...a
  } = e, i = Wa(r);
  return /* @__PURE__ */ u.jsx(
    Pa,
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
pu.displayName = Zq;
var [Jq, of] = Wr(Qt, {}), mu = "SelectViewport", DS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = $t(mu, r), i = of(mu, r), s = ne(t, a.onViewportChange), c = f.useRef(0);
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
      /* @__PURE__ */ u.jsx(qa.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(
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
DS.displayName = mu;
var kS = "SelectGroup", [eB, tB] = Wr(kS), IS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ve();
    return /* @__PURE__ */ u.jsx(eB, { scope: r, id: o, children: /* @__PURE__ */ u.jsx(H.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
IS.displayName = kS;
var LS = "SelectLabel", $S = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = tB(LS, r);
    return /* @__PURE__ */ u.jsx(H.div, { id: o.id, ...n, ref: t });
  }
);
$S.displayName = LS;
var Ho = "SelectItem", [rB, FS] = Wr(Ho), qS = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Lt(Ho, r), c = $t(Ho, r), l = s.value === n, [d, p] = f.useState(a ?? ""), [m, g] = f.useState(!1), y = ne(
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
      rB,
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
          qa.ItemSlot,
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
                  c.searchRef?.current !== "" && x.key === " " || (Wq.includes(x.key) && b(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
qS.displayName = Ho;
var Jr = "SelectItemText", BS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = Lt(Jr, r), s = $t(Jr, r), c = FS(Jr, r), l = Gq(Jr, r), [d, p] = f.useState(null), m = ne(
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
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? xn.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
BS.displayName = Jr;
var WS = "SelectItemIndicator", HS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return FS(WS, r).isSelected ? /* @__PURE__ */ u.jsx(H.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
HS.displayName = WS;
var hu = "SelectScrollUpButton", VS = f.forwardRef((e, t) => {
  const r = $t(hu, e.__scopeSelect), n = of(hu, e.__scopeSelect), [o, a] = f.useState(!1), i = ne(t, n.onScrollButtonChange);
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
    GS,
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
VS.displayName = hu;
var vu = "SelectScrollDownButton", zS = f.forwardRef((e, t) => {
  const r = $t(vu, e.__scopeSelect), n = of(vu, e.__scopeSelect), [o, a] = f.useState(!1), i = ne(t, n.onScrollButtonChange);
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
    GS,
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
zS.displayName = vu;
var GS = f.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = $t("SelectScrollButton", r), i = f.useRef(null), s = Ba(r), c = f.useCallback(() => {
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
}), nB = "SelectSeparator", US = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
US.displayName = nB;
var gu = "SelectArrow", oB = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Wa(r), a = Lt(gu, r), i = $t(gu, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ u.jsx(Ea, { ...o, ...n, ref: t }) : null;
  }
);
oB.displayName = gu;
var aB = "SelectBubbleInput", KS = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = f.useRef(null), a = ne(n, o), i = jn(t);
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
        style: { ...__, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
KS.displayName = aB;
function YS(e) {
  return e === "" || e === void 0;
}
function XS(e) {
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
function QS(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = iB(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== r));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function iB(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var sB = SS, ZS = PS, cB = RS, lB = TS, uB = NS, JS = MS, dB = DS, fB = IS, eC = $S, tC = qS, pB = BS, mB = HS, rC = VS, nC = zS, oC = US;
const yu = sB, D4 = fB, bu = cB, Vo = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  ZS,
  {
    ref: n,
    className: N(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background shadow-xs px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsx(lB, { asChild: !0, children: /* @__PURE__ */ u.jsx(Sr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Vo.displayName = ZS.displayName;
const aC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  rC,
  {
    ref: r,
    className: N(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(jP, { className: "h-4 w-4" })
  }
));
aC.displayName = rC.displayName;
const iC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  nC,
  {
    ref: r,
    className: N(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Sr, { className: "h-4 w-4" })
  }
));
iC.displayName = nC.displayName;
const zo = f.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ u.jsx(uB, { children: /* @__PURE__ */ u.jsxs(
  JS,
  {
    ref: o,
    className: N(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx(aC, {}),
      /* @__PURE__ */ u.jsx(
        dB,
        {
          className: N(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(iC, {})
    ]
  }
) }));
zo.displayName = JS.displayName;
const hB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  eC,
  {
    ref: r,
    className: N("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
hB.displayName = eC.displayName;
const yn = f.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(
  tC,
  {
    ref: n,
    className: N(
      "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(mB, { children: /* @__PURE__ */ u.jsx(_r, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(pB, { children: t })
    ]
  }
));
yn.displayName = tC.displayName;
const vB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  oC,
  {
    ref: r,
    className: N("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
vB.displayName = oC.displayName;
var gB = "Separator", Jv = "horizontal", yB = ["horizontal", "vertical"], sC = f.forwardRef((e, t) => {
  const { decorative: r, orientation: n = Jv, ...o } = e, a = bB(n) ? n : Jv, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
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
sC.displayName = gB;
function bB(e) {
  return yB.includes(e);
}
var cC = sC;
const lC = f.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ u.jsx(
    cC,
    {
      ref: o,
      decorative: r,
      orientation: t,
      className: N(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...n
    }
  )
);
lC.displayName = cC.displayName;
const k4 = na, I4 = $u, L4 = $r, xB = oa, uC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Ir,
  {
    className: N(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
uC.displayName = Ir.displayName;
const wB = ct(
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
), _B = f.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ u.jsxs(xB, { children: [
  /* @__PURE__ */ u.jsx(uC, {}),
  /* @__PURE__ */ u.jsxs(
    Lr,
    {
      ref: o,
      className: N(wB({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ u.jsxs($r, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ u.jsx(Zo, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
_B.displayName = Lr.displayName;
const SB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: N(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
SB.displayName = "SheetHeader";
const CB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: N(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
CB.displayName = "SheetFooter";
const PB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Cn,
  {
    ref: r,
    className: N("text-lg font-semibold text-foreground", e),
    ...t
  }
));
PB.displayName = Cn.displayName;
const EB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  Pn,
  {
    ref: r,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
EB.displayName = Pn.displayName;
function RB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: N("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var Ha = "Switch", [TB, $4] = be(Ha), [NB, MB] = TB(Ha), dC = f.forwardRef(
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
      caller: Ha
    });
    return /* @__PURE__ */ u.jsxs(NB, { scope: r, checked: b, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        H.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": i,
          "data-state": hC(b),
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
        mC,
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
dC.displayName = Ha;
var fC = "SwitchThumb", pC = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = MB(fC, r);
    return /* @__PURE__ */ u.jsx(
      H.span,
      {
        "data-state": hC(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
pC.displayName = fC;
var AB = "SwitchBubbleInput", mC = f.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = f.useRef(null), s = ne(i, a), c = jn(r), l = ga(t);
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
mC.displayName = AB;
function hC(e) {
  return e ? "checked" : "unchecked";
}
var vC = dC, OB = pC;
const jB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  vC,
  {
    className: N(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ u.jsx(
      OB,
      {
        className: N(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
jB.displayName = vC.displayName;
const DB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ u.jsx(
  "table",
  {
    ref: r,
    className: N("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
DB.displayName = "Table";
const kB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "thead",
  {
    ref: r,
    className: N("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
kB.displayName = "TableHeader";
const IB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tbody",
  {
    ref: r,
    className: N("[&_tr:last-child]:border-0", e),
    ...t
  }
));
IB.displayName = "TableBody";
const LB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tfoot",
  {
    ref: r,
    className: N(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
LB.displayName = "TableFooter";
const $B = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "tr",
  {
    ref: r,
    className: N(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
$B.displayName = "TableRow";
const FB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "th",
  {
    ref: r,
    className: N(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
FB.displayName = "TableHead";
const qB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: r,
    className: N(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
qB.displayName = "TableCell";
const BB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: r,
    className: N("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
BB.displayName = "TableCaption";
var Va = "Tabs", [WB, F4] = be(Va, [
  kt
]), gC = kt(), [HB, af] = WB(Va), yC = f.forwardRef(
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
      caller: Va
    });
    return /* @__PURE__ */ u.jsx(
      HB,
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
yC.displayName = Va;
var bC = "TabsList", xC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = af(bC, r), i = gC(r);
    return /* @__PURE__ */ u.jsx(
      Aa,
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
xC.displayName = bC;
var wC = "TabsTrigger", _C = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = af(wC, r), s = gC(r), c = PC(i.baseId, n), l = EC(i.baseId, n), d = n === i.value;
    return /* @__PURE__ */ u.jsx(
      Oa,
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
_C.displayName = wC;
var SC = "TabsContent", CC = f.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = af(SC, r), c = PC(s.baseId, n), l = EC(s.baseId, n), d = n === s.value, p = f.useRef(d);
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
CC.displayName = SC;
function PC(e, t) {
  return `${e}-trigger-${t}`;
}
function EC(e, t) {
  return `${e}-content-${t}`;
}
var VB = yC, RC = xC, TC = _C, NC = CC;
const q4 = VB, zB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  RC,
  {
    ref: r,
    className: N(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
zB.displayName = RC.displayName;
const GB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  TC,
  {
    ref: r,
    className: N(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
GB.displayName = TC.displayName;
const UB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  NC,
  {
    ref: r,
    className: N(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
UB.displayName = NC.displayName;
const KB = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "textarea",
  {
    className: N(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...t
  }
));
KB.displayName = "Textarea";
var sf = "ToastProvider", [cf, YB, XB] = er("Toast"), [MC, B4] = be("Toast", [XB]), [QB, za] = MC(sf), AC = (e) => {
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
    QB,
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
AC.displayName = sf;
var OC = "ToastViewport", ZB = ["F8"], xu = "toast.viewportPause", wu = "toast.viewportResume", jC = f.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = ZB,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = za(OC, r), s = YB(r), c = f.useRef(null), l = f.useRef(null), d = f.useRef(null), p = f.useRef(null), m = ne(t, p, i.onViewportChange), g = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = i.toastCount > 0;
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
            const C = new CustomEvent(xu);
            b.dispatchEvent(C), i.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (i.isClosePausedRef.current) {
            const C = new CustomEvent(wu);
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
          const _ = w.ref.current, S = [_, ...dW(_)];
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
            Pl(T.slice(I + 1)) ? x.preventDefault() : C ? l.current?.focus() : d.current?.focus();
          }
        };
        return v.addEventListener("keydown", b), () => v.removeEventListener("keydown", b);
      }
    }, [s, h]), /* @__PURE__ */ u.jsxs(
      VE,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ u.jsx(
            _u,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "forwards"
                });
                Pl(v);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(cf.Slot, { scope: r, children: /* @__PURE__ */ u.jsx(H.ol, { tabIndex: -1, ...a, ref: m }) }),
          y && /* @__PURE__ */ u.jsx(
            _u,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "backwards"
                });
                Pl(v);
              }
            }
          )
        ]
      }
    );
  }
);
jC.displayName = OC;
var DC = "ToastFocusProxy", _u = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = za(DC, r);
    return /* @__PURE__ */ u.jsx(
      Ia,
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
_u.displayName = DC;
var Vn = "Toast", JB = "toast.swipeStart", eW = "toast.swipeMove", tW = "toast.swipeCancel", rW = "toast.swipeEnd", kC = f.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s, c] = xe({
      prop: n,
      defaultProp: o ?? !0,
      onChange: a,
      caller: Vn
    });
    return /* @__PURE__ */ u.jsx(he, { present: r || s, children: /* @__PURE__ */ u.jsx(
      aW,
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
kC.displayName = Vn;
var [nW, oW] = MC(Vn, {
  onClose() {
  }
}), aW = f.forwardRef(
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
    } = e, h = za(Vn, r), [v, b] = f.useState(null), x = ne(t, (M) => b(M)), w = f.useRef(null), _ = f.useRef(null), S = o || h.duration, C = f.useRef(0), P = f.useRef(S), E = f.useRef(0), { onToastAdd: T, onToastRemove: I } = h, j = ue(() => {
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
        return M.addEventListener(xu, F), M.addEventListener(wu, $), () => {
          M.removeEventListener(xu, F), M.removeEventListener(wu, $);
        };
      }
    }, [h.viewport, S, c, l, V]), f.useEffect(() => {
      a && !h.isClosePausedRef.current && V(S);
    }, [a, S, h.isClosePausedRef, V]), f.useEffect(() => (T(), () => I()), [T, I]);
    const q = f.useMemo(() => v ? WC(v) : null, [v]);
    return h.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      q && /* @__PURE__ */ u.jsx(
        iW,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: q
        }
      ),
      /* @__PURE__ */ u.jsx(nW, { scope: r, onClose: j, children: xn.createPortal(
        /* @__PURE__ */ u.jsx(cf.ItemSlot, { scope: r, children: /* @__PURE__ */ u.jsx(
          HE,
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
                onKeyDown: L(e.onKeyDown, (M) => {
                  M.key === "Escape" && (s?.(M.nativeEvent), M.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, j()));
                }),
                onPointerDown: L(e.onPointerDown, (M) => {
                  M.button === 0 && (w.current = { x: M.clientX, y: M.clientY });
                }),
                onPointerMove: L(e.onPointerMove, (M) => {
                  if (!w.current) return;
                  const $ = M.clientX - w.current.x, F = M.clientY - w.current.y, D = !!_.current, R = ["left", "right"].includes(h.swipeDirection), W = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, O = R ? W(0, $) : 0, z = R ? 0 : W(0, F), A = M.pointerType === "touch" ? 10 : 2, B = { x: O, y: z }, K = { originalEvent: M, delta: B };
                  D ? (_.current = B, lo(eW, p, K, {
                    discrete: !1
                  })) : eg(B, h.swipeDirection, A) ? (_.current = B, lo(JB, d, K, {
                    discrete: !1
                  }), M.target.setPointerCapture(M.pointerId)) : (Math.abs($) > A || Math.abs(F) > A) && (w.current = null);
                }),
                onPointerUp: L(e.onPointerUp, (M) => {
                  const $ = _.current, F = M.target;
                  if (F.hasPointerCapture(M.pointerId) && F.releasePointerCapture(M.pointerId), _.current = null, w.current = null, $) {
                    const D = M.currentTarget, R = { originalEvent: M, delta: $ };
                    eg($, h.swipeDirection, h.swipeThreshold) ? lo(rW, g, R, {
                      discrete: !0
                    }) : lo(
                      tW,
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
), iW = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = za(Vn, t), [a, i] = f.useState(!1), [s, c] = f.useState(!1);
  return lW(() => i(!0)), f.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ u.jsx(tr, { asChild: !0, children: /* @__PURE__ */ u.jsx(Ia, { ...n, children: a && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, sW = "ToastTitle", IC = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
IC.displayName = sW;
var cW = "ToastDescription", LC = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ u.jsx(H.div, { ...n, ref: t });
  }
);
LC.displayName = cW;
var $C = "ToastAction", FC = f.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ u.jsx(BC, { altText: r, asChild: !0, children: /* @__PURE__ */ u.jsx(lf, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${$C}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
FC.displayName = $C;
var qC = "ToastClose", lf = f.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = oW(qC, r);
    return /* @__PURE__ */ u.jsx(BC, { asChild: !0, children: /* @__PURE__ */ u.jsx(
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
lf.displayName = qC;
var BC = f.forwardRef((e, t) => {
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
function WC(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), uW(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...WC(n));
    }
  }), t;
}
function lo(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? nn(o, a) : o.dispatchEvent(a);
}
var eg = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function lW(e = () => {
}) {
  const t = ue(e);
  me(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function uW(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function dW(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Pl(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var fW = AC, HC = jC, VC = kC, zC = IC, GC = LC, UC = FC, KC = lf;
const pW = fW, mW = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, YC = f.forwardRef(({ className: e, position: t = "bottom-right", ...r }, n) => /* @__PURE__ */ u.jsx(
  HC,
  {
    ref: n,
    className: N(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${mW[t]}`,
      e
    ),
    ...r
  }
));
YC.displayName = HC.displayName;
const hW = ct(
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
), XC = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ u.jsx(
  VC,
  {
    ref: n,
    className: N(hW({ variant: t }), e),
    ...r
  }
));
XC.displayName = VC.displayName;
const vW = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  UC,
  {
    ref: r,
    className: N(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
vW.displayName = UC.displayName;
const QC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  KC,
  {
    ref: r,
    className: N(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ u.jsx(Zo, { className: "h-4 w-4" })
  }
));
QC.displayName = KC.displayName;
const ZC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  zC,
  {
    ref: r,
    className: N("text-sm font-semibold", e),
    ...t
  }
));
ZC.displayName = zC.displayName;
const JC = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  GC,
  {
    ref: r,
    className: N("text-sm opacity-90", e),
    ...t
  }
));
JC.displayName = GC.displayName;
const gW = 1, yW = 1e4;
let El = 0;
function bW() {
  return El = (El + 1) % Number.MAX_SAFE_INTEGER, El.toString();
}
const Rl = /* @__PURE__ */ new Map(), tg = (e) => {
  if (Rl.has(e))
    return;
  const t = setTimeout(() => {
    Rl.delete(e), rn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, yW);
  Rl.set(e, t);
}, xW = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, gW)
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
      return r ? tg(r) : e.toasts.forEach((n) => {
        tg(n.id);
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
function rn(e) {
  bo = xW(bo, e), yo.forEach((t) => {
    t(bo);
  });
}
function wW({ ...e }) {
  const t = bW(), r = (o) => rn({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => rn({ type: "DISMISS_TOAST", toastId: t });
  return rn({
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
function _W() {
  const [e, t] = f.useState(bo);
  return f.useEffect(() => (yo.push(t), () => {
    const r = yo.indexOf(t);
    r > -1 && yo.splice(r, 1);
  }), [e]), {
    ...e,
    toast: wW,
    dismiss: (r) => rn({ type: "DISMISS_TOAST", toastId: r })
  };
}
function W4() {
  const { toasts: e } = _W();
  return /* @__PURE__ */ u.jsxs(pW, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ u.jsxs(XC, { ...a, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ u.jsx(ZC, { children: r }),
          n && /* @__PURE__ */ u.jsx(JC, { children: n })
        ] }),
        o,
        /* @__PURE__ */ u.jsx(QC, {})
      ] }, t);
    }),
    /* @__PURE__ */ u.jsx(YC, {})
  ] });
}
var e0 = "Toggle", uf = f.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n, onPressedChange: o, ...a } = e, [i, s] = xe({
    prop: r,
    onChange: o,
    defaultProp: n ?? !1,
    caller: e0
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
uf.displayName = e0;
var t0 = uf;
const r0 = ct(
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
), SW = f.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ u.jsx(
  t0,
  {
    ref: o,
    className: N(r0({ variant: t, size: r, className: e })),
    ...n
  }
));
SW.displayName = t0.displayName;
var Ft = "ToggleGroup", [n0, H4] = be(Ft, [
  kt
]), o0 = kt(), df = Q.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single") {
    const o = n;
    return /* @__PURE__ */ u.jsx(CW, { ...o, ref: t });
  }
  if (r === "multiple") {
    const o = n;
    return /* @__PURE__ */ u.jsx(PW, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Ft}\``);
});
df.displayName = Ft;
var [a0, i0] = n0(Ft), CW = Q.forwardRef((e, t) => {
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
    a0,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: Q.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: Q.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ u.jsx(s0, { ...a, ref: t })
    }
  );
}), PW = Q.forwardRef((e, t) => {
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
    a0,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: l,
      children: /* @__PURE__ */ u.jsx(s0, { ...a, ref: t })
    }
  );
});
df.displayName = Ft;
var [EW, RW] = n0(Ft), s0 = Q.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, l = o0(r), d = xt(i), p = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ u.jsx(EW, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ u.jsx(
      Aa,
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
), Go = "ToggleGroupItem", c0 = Q.forwardRef(
  (e, t) => {
    const r = i0(Go, e.__scopeToggleGroup), n = RW(Go, e.__scopeToggleGroup), o = o0(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = Q.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ u.jsx(
      Oa,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ u.jsx(rg, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx(rg, { ...s, ref: t });
  }
);
c0.displayName = Go;
var rg = Q.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = i0(Go, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
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
), l0 = df, u0 = c0;
const d0 = f.createContext({
  size: "default",
  variant: "default"
}), TW = f.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ u.jsx(
  l0,
  {
    ref: a,
    className: N("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ u.jsx(d0.Provider, { value: { variant: t, size: r }, children: n })
  }
));
TW.displayName = l0.displayName;
const NW = f.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = f.useContext(d0);
  return /* @__PURE__ */ u.jsx(
    u0,
    {
      ref: a,
      className: N(
        r0({
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
NW.displayName = u0.displayName;
var [Ga, V4] = be("Tooltip", [
  jt
]), Ua = jt(), f0 = "TooltipProvider", MW = 700, Su = "tooltip.open", [AW, ff] = Ga(f0), p0 = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = MW,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = f.useRef(!0), s = f.useRef(!1), c = f.useRef(0);
  return f.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u.jsx(
    AW,
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
p0.displayName = f0;
var bn = "Tooltip", [OW, zn] = Ga(bn), m0 = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = ff(bn, e.__scopeTooltip), l = Ua(t), [d, p] = f.useState(null), m = ve(), g = f.useRef(0), y = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, v = f.useRef(!1), [b, x] = xe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Su))) : c.onClose(), a?.(P);
    },
    caller: bn
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
  }, []), /* @__PURE__ */ u.jsx(In, { ...l, children: /* @__PURE__ */ u.jsx(
    OW,
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
m0.displayName = bn;
var Cu = "TooltipTrigger", h0 = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = zn(Cu, r), a = ff(Cu, r), i = Ua(r), s = f.useRef(null), c = ne(t, s, o.onTriggerChange), l = f.useRef(!1), d = f.useRef(!1), p = f.useCallback(() => l.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ u.jsx(Ln, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
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
h0.displayName = Cu;
var pf = "TooltipPortal", [jW, DW] = Ga(pf, {
  forceMount: void 0
}), v0 = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = zn(pf, t);
  return /* @__PURE__ */ u.jsx(jW, { scope: t, forceMount: r, children: /* @__PURE__ */ u.jsx(he, { present: r || a.open, children: /* @__PURE__ */ u.jsx(tr, { asChild: !0, container: o, children: n }) }) });
};
v0.displayName = pf;
var jr = "TooltipContent", g0 = f.forwardRef(
  (e, t) => {
    const r = DW(jr, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = zn(jr, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(he, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ u.jsx(y0, { side: o, ...a, ref: t }) : /* @__PURE__ */ u.jsx(kW, { side: o, ...a, ref: t }) });
  }
), kW = f.forwardRef((e, t) => {
  const r = zn(jr, e.__scopeTooltip), n = ff(jr, e.__scopeTooltip), o = f.useRef(null), a = ne(t, o), [i, s] = f.useState(null), { trigger: c, onClose: l } = r, d = o.current, { onPointerInTransitChange: p } = n, m = f.useCallback(() => {
    s(null), p(!1);
  }, [p]), g = f.useCallback(
    (y, h) => {
      const v = y.currentTarget, b = { x: y.clientX, y: y.clientY }, x = qW(b, v.getBoundingClientRect()), w = BW(b, x), _ = WW(h.getBoundingClientRect()), S = VW([...w, ..._]);
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
        const v = h.target, b = { x: h.clientX, y: h.clientY }, x = c?.contains(v) || d?.contains(v), w = !HW(b, i);
        x ? m() : w && (m(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, d, i, l, m]), /* @__PURE__ */ u.jsx(y0, { ...e, ref: a });
}), [IW, LW] = Ga(bn, { isInside: !1 }), $W = /* @__PURE__ */ cg("TooltipContent"), y0 = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = zn(jr, r), l = Ua(r), { onClose: d } = c;
    return f.useEffect(() => (document.addEventListener(Su, d), () => document.removeEventListener(Su, d)), [d]), f.useEffect(() => {
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
          Pa,
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
              /* @__PURE__ */ u.jsx($W, { children: n }),
              /* @__PURE__ */ u.jsx(IW, { scope: r, isInside: !0, children: /* @__PURE__ */ u.jsx(S_, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
g0.displayName = jr;
var b0 = "TooltipArrow", FW = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Ua(r);
    return LW(
      b0,
      r
    ).isInside ? null : /* @__PURE__ */ u.jsx(Ea, { ...o, ...n, ref: t });
  }
);
FW.displayName = b0;
function qW(e, t) {
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
function BW(e, t, r = 5) {
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
function WW(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function HW(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, d = s.y, p = c.x, m = c.y;
    d > n != m > n && r < (p - l) * (n - d) / (m - d) + l && (o = !o);
  }
  return o;
}
function VW(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), zW(t);
}
function zW(e) {
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
var GW = p0, UW = m0, KW = h0, YW = v0, x0 = g0;
const z4 = GW, G4 = UW, U4 = KW, XW = f.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ u.jsx(YW, { children: /* @__PURE__ */ u.jsx(
  x0,
  {
    ref: n,
    sideOffset: t,
    className: N(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
XW.displayName = x0.displayName;
export {
  r4 as Accordion,
  AE as AccordionContent,
  NE as AccordionItem,
  ME as AccordionTrigger,
  aq as AiqiaSpinner,
  jE as Alert,
  kE as AlertDescription,
  o4 as AlertDialog,
  fT as AlertDialogAction,
  pT as AlertDialogCancel,
  sT as AlertDialogContent,
  dT as AlertDialogDescription,
  lT as AlertDialogFooter,
  cT as AlertDialogHeader,
  Ly as AlertDialogOverlay,
  iT as AlertDialogPortal,
  uT as AlertDialogTitle,
  a4 as AlertDialogTrigger,
  DE as AlertTitle,
  i4 as AsyncSelect,
  CT as Avatar,
  ET as AvatarFallback,
  PT as AvatarImage,
  Xf as Badge,
  TT as Breadcrumb,
  DT as BreadcrumbEllipsis,
  MT as BreadcrumbItem,
  AT as BreadcrumbLink,
  NT as BreadcrumbList,
  OT as BreadcrumbPage,
  jT as BreadcrumbSeparator,
  rr as Button,
  hb as Calendar,
  iA as Card,
  uA as CardContent,
  lA as CardDescription,
  dA as CardFooter,
  sA as CardHeader,
  cA as CardTitle,
  GA as Carousel,
  UA as CarouselContent,
  KA as CarouselItem,
  XA as CarouselNext,
  YA as CarouselPrevious,
  wI as ChartContainer,
  d4 as ChartLegend,
  CI as ChartLegendContent,
  _I as ChartStyle,
  u4 as ChartTooltip,
  SI as ChartTooltipContent,
  NI as Checkbox,
  xa as Command,
  p4 as CommandDialog,
  Cd as CommandEmpty,
  wa as CommandGroup,
  _d as CommandInput,
  br as CommandItem,
  Sd as CommandList,
  Cx as CommandSeparator,
  eL as CommandShortcut,
  h4 as DatePicker,
  G$ as DateTimePicker,
  U$ as Dialog,
  g4 as DialogClose,
  uw as DialogContent,
  Z$ as DialogDescription,
  X$ as DialogFooter,
  Y$ as DialogHeader,
  lw as DialogOverlay,
  K$ as DialogPortal,
  Q$ as DialogTitle,
  v4 as DialogTrigger,
  b4 as DropdownMenu,
  S2 as DropdownMenuCheckboxItem,
  w2 as DropdownMenuContent,
  w4 as DropdownMenuGroup,
  _2 as DropdownMenuItem,
  P2 as DropdownMenuLabel,
  _4 as DropdownMenuPortal,
  C4 as DropdownMenuRadioGroup,
  C2 as DropdownMenuRadioItem,
  E2 as DropdownMenuSeparator,
  R2 as DropdownMenuShortcut,
  S4 as DropdownMenuSub,
  x2 as DropdownMenuSubContent,
  b2 as DropdownMenuSubTrigger,
  x4 as DropdownMenuTrigger,
  P4 as Form,
  x_ as FormControl,
  A2 as FormDescription,
  M2 as FormField,
  y_ as FormItem,
  b_ as FormLabel,
  w_ as FormMessage,
  E4 as Heading,
  zd as Input,
  R4 as InputForm,
  Vd as Label,
  oq as ListItem,
  M4 as Loader,
  iq as MaskedInput,
  cq as MultiSelect,
  Q2 as NavigationMenu,
  tq as NavigationMenuContent,
  nq as NavigationMenuIndicator,
  N4 as NavigationMenuItem,
  rq as NavigationMenuLink,
  Z2 as NavigationMenuList,
  eq as NavigationMenuTrigger,
  K_ as NavigationMenuViewport,
  lq as Pagination,
  uq as PaginationContent,
  mq as PaginationEllipsis,
  dq as PaginationItem,
  Zd as PaginationLink,
  pq as PaginationNext,
  fq as PaginationPrevious,
  Ta as Popover,
  Fn as PopoverContent,
  Na as PopoverTrigger,
  Pq as RadioGroup,
  Eq as RadioGroupItem,
  qq as ScrollArea,
  _S as ScrollBar,
  yu as Select,
  zo as SelectContent,
  D4 as SelectGroup,
  yn as SelectItem,
  hB as SelectLabel,
  iC as SelectScrollDownButton,
  aC as SelectScrollUpButton,
  vB as SelectSeparator,
  Vo as SelectTrigger,
  bu as SelectValue,
  lC as Separator,
  k4 as Sheet,
  L4 as SheetClose,
  _B as SheetContent,
  EB as SheetDescription,
  CB as SheetFooter,
  SB as SheetHeader,
  uC as SheetOverlay,
  xB as SheetPortal,
  PB as SheetTitle,
  I4 as SheetTrigger,
  RB as Skeleton,
  jB as Switch,
  DB as Table,
  IB as TableBody,
  BB as TableCaption,
  qB as TableCell,
  LB as TableFooter,
  FB as TableHead,
  kB as TableHeader,
  $B as TableRow,
  q4 as Tabs,
  UB as TabsContent,
  zB as TabsList,
  GB as TabsTrigger,
  KB as Textarea,
  cw as TimePicker,
  vo as TimePickerInput,
  XC as Toast,
  vW as ToastAction,
  QC as ToastClose,
  JC as ToastDescription,
  pW as ToastProvider,
  ZC as ToastTitle,
  YC as ToastViewport,
  W4 as Toaster,
  SW as Toggle,
  TW as ToggleGroup,
  NW as ToggleGroupItem,
  G4 as Tooltip,
  XW as TooltipContent,
  z4 as TooltipProvider,
  U4 as TooltipTrigger,
  RT as badgeVariants,
  l4 as brazillianStates,
  gt as buttonVariants,
  N as cn,
  c4 as mask,
  J2 as navigationMenuTriggerStyle,
  xW as reducer,
  wW as toast,
  r0 as toggleVariants,
  ka as useFormField,
  _W as useToast
};
