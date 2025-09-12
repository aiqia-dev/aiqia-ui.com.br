import * as l from "react";
import se, { useState as Ne, useEffect as je, useCallback as ol, createContext as Wt, forwardRef as zv, useContext as Vt, useLayoutEffect as al, useRef as Hr, useImperativeHandle as sl } from "react";
import * as Yn from "react-dom";
import il from "react-dom";
import { ChevronDown as pt, ChevronsUpDown as cl, Loader2 as An, Check as Kn, ChevronRight as Un, MoreHorizontal as ll, ChevronLeft as hs, ArrowLeft as Gv, ArrowRight as Yv, Search as Kv, CalendarIcon as Uv, Clock as qv, Calendar as Xv, X as vs, Circle as ul, XCircle as Gi, XIcon as Qv, Plus as Jv, CheckIcon as Yi, WandSparkles as Zv, ChevronUp as eg } from "lucide-react";
import { Link as tg } from "react-router-dom";
import * as gs from "recharts";
import { useFormContext as qn, FormProvider as ng, Controller as rg } from "react-hook-form";
var Nr = { exports: {} }, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function og() {
  if (Ki) return Sn;
  Ki = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      a = {};
      for (var c in o)
        c !== "key" && (a[c] = o[c]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Sn.Fragment = t, Sn.jsx = n, Sn.jsxs = n, Sn;
}
var Nn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function ag() {
  return Ui || (Ui = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === O ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case h:
          return "Fragment";
        case b:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case N:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case g:
            return "Portal";
          case w:
            return (j.displayName || "Context") + ".Provider";
          case y:
            return (j._context.displayName || "Context") + ".Consumer";
          case C:
            var Y = j.render;
            return j = j.displayName, j || (j = Y.displayName || Y.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case R:
            return Y = j.displayName || null, Y !== null ? Y : e(j.type) || "Memo";
          case E:
            Y = j._payload, j = j._init;
            try {
              return e(j(Y));
            } catch {
            }
        }
      return null;
    }
    function t(j) {
      return "" + j;
    }
    function n(j) {
      try {
        t(j);
        var Y = !1;
      } catch {
        Y = !0;
      }
      if (Y) {
        Y = console;
        var M = Y.error, L = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return M.call(
          Y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(j);
      }
    }
    function r(j) {
      if (j === h) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === E)
        return "<...>";
      try {
        var Y = e(j);
        return Y ? "<" + Y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var j = F.A;
      return j === null ? null : j.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(j) {
      if (U.call(j, "key")) {
        var Y = Object.getOwnPropertyDescriptor(j, "key").get;
        if (Y && Y.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function c(j, Y) {
      function M() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Y
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: M,
        configurable: !0
      });
    }
    function u() {
      var j = e(this.type);
      return V[j] || (V[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function d(j, Y, M, L, z, B, Z, A) {
      return M = B.ref, j = {
        $$typeof: v,
        type: j,
        key: Y,
        props: B,
        _owner: z
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function f(j, Y, M, L, z, B, Z, A) {
      var K = Y.children;
      if (K !== void 0)
        if (L)
          if (Q(K)) {
            for (L = 0; L < K.length; L++)
              m(K[L]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(K);
      if (U.call(Y, "key")) {
        K = e(j);
        var te = Object.keys(Y).filter(function(ee) {
          return ee !== "key";
        });
        L = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", $[K + L] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          K,
          te,
          K
        ), $[K + L] = !0);
      }
      if (K = null, M !== void 0 && (n(M), K = "" + M), s(Y) && (n(Y.key), K = "" + Y.key), "key" in Y) {
        M = {};
        for (var ne in Y)
          ne !== "key" && (M[ne] = Y[ne]);
      } else M = Y;
      return K && c(
        M,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), d(
        j,
        K,
        B,
        z,
        o(),
        M,
        Z,
        A
      );
    }
    function m(j) {
      typeof j == "object" && j !== null && j.$$typeof === v && j._store && (j._store.validated = 1);
    }
    var p = se, v = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), w = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), F = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, Q = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(j) {
        return j();
      }
    };
    var G, V = {}, D = p["react-stack-bottom-frame"].bind(
      p,
      a
    )(), P = k(r(a)), $ = {};
    Nn.Fragment = h, Nn.jsx = function(j, Y, M, L, z) {
      var B = 1e4 > F.recentlyCreatedOwnerStacks++;
      return f(
        j,
        Y,
        M,
        !1,
        L,
        z,
        B ? Error("react-stack-top-frame") : D,
        B ? k(r(j)) : P
      );
    }, Nn.jsxs = function(j, Y, M, L, z) {
      var B = 1e4 > F.recentlyCreatedOwnerStacks++;
      return f(
        j,
        Y,
        M,
        !0,
        L,
        z,
        B ? Error("react-stack-top-frame") : D,
        B ? k(r(j)) : P
      );
    };
  })()), Nn;
}
var qi;
function sg() {
  return qi || (qi = 1, process.env.NODE_ENV === "production" ? Nr.exports = og() : Nr.exports = ag()), Nr.exports;
}
var i = sg();
function ig(e, t) {
  const n = l.createContext(t), r = (a) => {
    const { children: s, ...c } = a, u = l.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ i.jsx(n.Provider, { value: u, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = l.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function ve(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = l.createContext(s), u = n.length;
    n = [...n, s];
    const d = (m) => {
      const { scope: p, children: v, ...g } = m, h = p?.[e]?.[u] || c, x = l.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ i.jsx(h.Provider, { value: x, children: v });
    };
    d.displayName = a + "Provider";
    function f(m, p) {
      const v = p?.[e]?.[u] || c, g = l.useContext(v);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [d, f];
  }
  const o = () => {
    const a = n.map((s) => l.createContext(s));
    return function(c) {
      const u = c?.[e] || a;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: u } }),
        [c, u]
      );
    };
  };
  return o.scopeName = e, [r, cg(o, ...t)];
}
function cg(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((c, { useScope: u, scopeName: d }) => {
        const m = u(a)[`__scope${d}`];
        return { ...c, ...m };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Xi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function qe(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Xi(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Xi(e[o], null);
        }
      };
  };
}
function J(...e) {
  return l.useCallback(qe(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  const t = /* @__PURE__ */ lg(e), n = l.forwardRef((r, o) => {
    const { children: a, ...s } = r, c = l.Children.toArray(a), u = c.find(ug);
    if (u) {
      const d = u.props.children, f = c.map((m) => m === u ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ i.jsx(t, { ...s, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ i.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var dl = /* @__PURE__ */ ht("Slot");
// @__NO_SIDE_EFFECTS__
function lg(e) {
  const t = l.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (l.isValidElement(o)) {
      const s = fg(o), c = dg(a, o.props);
      return o.type !== l.Fragment && (c.ref = r ? qe(r, s) : s), l.cloneElement(o, c);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var fl = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ml(e) {
  const t = ({ children: n }) => /* @__PURE__ */ i.jsx(i.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = fl, t;
}
function ug(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fl;
}
function dg(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...c) => {
      const u = a(...c);
      return o(...c), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function fg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Bt(e) {
  const t = e + "CollectionProvider", [n, r] = ve(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: x, children: b } = h, y = se.useRef(null), w = se.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ i.jsx(o, { scope: x, itemMap: w, collectionRef: y, children: b });
  };
  s.displayName = t;
  const c = e + "CollectionSlot", u = /* @__PURE__ */ ht(c), d = se.forwardRef(
    (h, x) => {
      const { scope: b, children: y } = h, w = a(c, b), C = J(x, w.collectionRef);
      return /* @__PURE__ */ i.jsx(u, { ref: C, children: y });
    }
  );
  d.displayName = c;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ ht(f), v = se.forwardRef(
    (h, x) => {
      const { scope: b, children: y, ...w } = h, C = se.useRef(null), S = J(x, C), N = a(f, b);
      return se.useEffect(() => (N.itemMap.set(C, { ref: C, ...w }), () => void N.itemMap.delete(C))), /* @__PURE__ */ i.jsx(p, { [m]: "", ref: S, children: y });
    }
  );
  v.displayName = f;
  function g(h) {
    const x = a(e + "CollectionConsumer", h);
    return se.useCallback(() => {
      const y = x.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${m}]`));
      return Array.from(x.itemMap.values()).sort(
        (N, R) => w.indexOf(N.ref.current) - w.indexOf(R.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: s, Slot: d, ItemSlot: v },
    g,
    r
  ];
}
function I(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var fe = globalThis?.document ? l.useLayoutEffect : () => {
}, mg = l[" useInsertionEffect ".trim().toString()] || fe;
function ge({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = pg({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, u = c ? e : o;
  {
    const f = l.useRef(e !== void 0);
    l.useEffect(() => {
      const m = f.current;
      m !== c && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = c;
    }, [c, r]);
  }
  const d = l.useCallback(
    (f) => {
      if (c) {
        const m = hg(f) ? f(e) : f;
        m !== e && s.current?.(m);
      } else
        a(f);
    },
    [c, e, a, s]
  );
  return [u, d];
}
function pg({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = l.useState(e), o = l.useRef(n), a = l.useRef(t);
  return mg(() => {
    a.current = t;
  }, [t]), l.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function hg(e) {
  return typeof e == "function";
}
var vg = [
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
], W = vg.reduce((e, t) => {
  const n = /* @__PURE__ */ ht(`Primitive.${t}`), r = l.forwardRef((o, a) => {
    const { asChild: s, ...c } = o, u = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i.jsx(u, { ...c, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Dn(e, t) {
  e && Yn.flushSync(() => e.dispatchEvent(t));
}
function gg(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var me = (e) => {
  const { present: t, children: n } = e, r = xg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), a = J(r.ref, bg(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: a }) : null;
};
me.displayName = "Presence";
function xg(e) {
  const [t, n] = l.useState(), r = l.useRef(null), o = l.useRef(e), a = l.useRef("none"), s = e ? "mounted" : "unmounted", [c, u] = gg(s, {
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
  return l.useEffect(() => {
    const d = Er(r.current);
    a.current = c === "mounted" ? d : "none";
  }, [c]), fe(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, v = Er(d);
      e ? u("MOUNT") : v === "none" || d?.display === "none" ? u("UNMOUNT") : u(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), fe(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (v) => {
        const h = Er(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (u("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = Er(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: l.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Er(e) {
  return e?.animationName || "none";
}
function bg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var yg = l[" useId ".trim().toString()] || (() => {
}), wg = 0;
function pe(e) {
  const [t, n] = l.useState(yg());
  return fe(() => {
    n((r) => r ?? String(wg++));
  }, [e]), t ? `radix-${t}` : "";
}
var lo = "Collapsible", [Cg, pl] = ve(lo), [Sg, xs] = Cg(lo), hl = l.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...c
    } = e, [u, d] = ge({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: lo
    });
    return /* @__PURE__ */ i.jsx(
      Sg,
      {
        scope: n,
        disabled: a,
        contentId: pe(),
        open: u,
        onOpenToggle: l.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ i.jsx(
          W.div,
          {
            "data-state": ys(u),
            "data-disabled": a ? "" : void 0,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
hl.displayName = lo;
var vl = "CollapsibleTrigger", gl = l.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = xs(vl, n);
    return /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": ys(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: I(e.onClick, o.onOpenToggle)
      }
    );
  }
);
gl.displayName = vl;
var bs = "CollapsibleContent", xl = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = xs(bs, e.__scopeCollapsible);
    return /* @__PURE__ */ i.jsx(me, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ i.jsx(Ng, { ...r, ref: t, present: a }) });
  }
);
xl.displayName = bs;
var Ng = l.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = xs(bs, n), [c, u] = l.useState(r), d = l.useRef(null), f = J(t, d), m = l.useRef(0), p = m.current, v = l.useRef(0), g = v.current, h = s.open || c, x = l.useRef(h), b = l.useRef(void 0);
  return l.useEffect(() => {
    const y = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), fe(() => {
    const y = d.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const w = y.getBoundingClientRect();
      m.current = w.height, v.current = w.width, x.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), u(r);
    }
  }, [s.open, r]), /* @__PURE__ */ i.jsx(
    W.div,
    {
      "data-state": ys(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !h,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function ys(e) {
  return e ? "open" : "closed";
}
var Eg = hl, Rg = gl, Pg = xl, Tg = l.createContext(void 0);
function it(e) {
  const t = l.useContext(Tg);
  return e || t || "ltr";
}
var Ve = "Accordion", _g = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [ws, Mg, jg] = Bt(Ve), [uo, Sj] = ve(Ve, [
  jg,
  pl
]), Cs = pl(), bl = se.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ i.jsx(ws.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ i.jsx(Ig, { ...a, ref: t }) : /* @__PURE__ */ i.jsx(Dg, { ...o, ref: t }) });
  }
);
bl.displayName = Ve;
var [yl, kg] = uo(Ve), [wl, Ag] = uo(
  Ve,
  { collapsible: !1 }
), Dg = se.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [c, u] = ge({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Ve
    });
    return /* @__PURE__ */ i.jsx(
      yl,
      {
        scope: e.__scopeAccordion,
        value: se.useMemo(() => c ? [c] : [], [c]),
        onItemOpen: u,
        onItemClose: se.useCallback(() => a && u(""), [a, u]),
        children: /* @__PURE__ */ i.jsx(wl, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ i.jsx(Cl, { ...s, ref: t }) })
      }
    );
  }
), Ig = se.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, c] = ge({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Ve
  }), u = se.useCallback(
    (f) => c((m = []) => [...m, f]),
    [c]
  ), d = se.useCallback(
    (f) => c((m = []) => m.filter((p) => p !== f)),
    [c]
  );
  return /* @__PURE__ */ i.jsx(
    yl,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: u,
      onItemClose: d,
      children: /* @__PURE__ */ i.jsx(wl, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ i.jsx(Cl, { ...a, ref: t }) })
    }
  );
}), [Og, fo] = uo(Ve), Cl = se.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, c = se.useRef(null), u = J(c, t), d = Mg(n), m = it(o) === "ltr", p = I(e.onKeyDown, (v) => {
      if (!_g.includes(v.key)) return;
      const g = v.target, h = d().filter((E) => !E.ref.current?.disabled), x = h.findIndex((E) => E.ref.current === g), b = h.length;
      if (x === -1) return;
      v.preventDefault();
      let y = x;
      const w = 0, C = b - 1, S = () => {
        y = x + 1, y > C && (y = w);
      }, N = () => {
        y = x - 1, y < w && (y = C);
      };
      switch (v.key) {
        case "Home":
          y = w;
          break;
        case "End":
          y = C;
          break;
        case "ArrowRight":
          a === "horizontal" && (m ? S() : N());
          break;
        case "ArrowDown":
          a === "vertical" && S();
          break;
        case "ArrowLeft":
          a === "horizontal" && (m ? N() : S());
          break;
        case "ArrowUp":
          a === "vertical" && N();
          break;
      }
      const R = y % b;
      h[R].ref.current?.focus();
    });
    return /* @__PURE__ */ i.jsx(
      Og,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ i.jsx(ws.Slot, { scope: n, children: /* @__PURE__ */ i.jsx(
          W.div,
          {
            ...s,
            "data-orientation": a,
            ref: u,
            onKeyDown: r ? void 0 : p
          }
        ) })
      }
    );
  }
), zr = "AccordionItem", [Lg, Ss] = uo(zr), Sl = se.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = fo(zr, n), s = kg(zr, n), c = Cs(n), u = pe(), d = r && s.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ i.jsx(
      Lg,
      {
        scope: n,
        open: d,
        disabled: f,
        triggerId: u,
        children: /* @__PURE__ */ i.jsx(
          Eg,
          {
            "data-orientation": a.orientation,
            "data-state": _l(d),
            ...c,
            ...o,
            ref: t,
            disabled: f,
            open: d,
            onOpenChange: (m) => {
              m ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
Sl.displayName = zr;
var Nl = "AccordionHeader", El = se.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = fo(Ve, n), a = Ss(Nl, n);
    return /* @__PURE__ */ i.jsx(
      W.h3,
      {
        "data-orientation": o.orientation,
        "data-state": _l(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
El.displayName = Nl;
var Da = "AccordionTrigger", Rl = se.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = fo(Ve, n), a = Ss(Da, n), s = Ag(Da, n), c = Cs(n);
    return /* @__PURE__ */ i.jsx(ws.ItemSlot, { scope: n, children: /* @__PURE__ */ i.jsx(
      Rg,
      {
        "aria-disabled": a.open && !s.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...c,
        ...r,
        ref: t
      }
    ) });
  }
);
Rl.displayName = Da;
var Pl = "AccordionContent", Tl = se.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = fo(Ve, n), a = Ss(Pl, n), s = Cs(n);
    return /* @__PURE__ */ i.jsx(
      Pg,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...s,
        ...r,
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
Tl.displayName = Pl;
function _l(e) {
  return e ? "open" : "closed";
}
var Fg = bl, $g = Sl, Wg = El, Ml = Rl, jl = Tl;
function kl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = kl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Al() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = kl(e)) && (r && (r += " "), r += t);
  return r;
}
const Ns = "-", Vg = (e) => {
  const t = Hg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const c = s.split(Ns);
      return c[0] === "" && c.length !== 1 && c.shift(), Dl(c, t) || Bg(s);
    },
    getConflictingClassGroupIds: (s, c) => {
      const u = n[s] || [];
      return c && r[s] ? [...u, ...r[s]] : u;
    }
  };
}, Dl = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Dl(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Ns);
  return t.validators.find(({
    validator: s
  }) => s(a))?.classGroupId;
}, Qi = /^\[(.+)\]$/, Bg = (e) => {
  if (Qi.test(e)) {
    const t = Qi.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Hg = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Ia(n[o], r, o, t);
  return r;
}, Ia = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Ji(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (zg(o)) {
        Ia(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Ia(s, Ji(t, a), n, r);
    });
  });
}, Ji = (e, t) => {
  let n = e;
  return t.split(Ns).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, zg = (e) => e.isThemeGetter, Gg = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}, Oa = "!", La = ":", Yg = La.length, Kg = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let s = 0, c = 0, u = 0, d;
    for (let g = 0; g < o.length; g++) {
      let h = o[g];
      if (s === 0 && c === 0) {
        if (h === La) {
          a.push(o.slice(u, g)), u = g + Yg;
          continue;
        }
        if (h === "/") {
          d = g;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? c++ : h === ")" && c--;
    }
    const f = a.length === 0 ? o : o.substring(u), m = Ug(f), p = m !== f, v = d && d > u ? d - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + La, a = r;
    r = (s) => s.startsWith(o) ? a(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, Ug = (e) => e.endsWith(Oa) ? e.substring(0, e.length - 1) : e.startsWith(Oa) ? e.substring(1) : e, qg = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let a = [];
    return r.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...a.sort(), s), a = []) : a.push(s);
    }), o.push(...a.sort()), o;
  };
}, Xg = (e) => ({
  cache: Gg(e.cacheSize),
  parseClassName: Kg(e),
  sortModifiers: qg(e),
  ...Vg(e)
}), Qg = /\s+/, Jg = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], c = e.trim().split(Qg);
  let u = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const f = c[d], {
      isExternal: m,
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: h
    } = n(f);
    if (m) {
      u = f + (u.length > 0 ? " " + u : u);
      continue;
    }
    let x = !!h, b = r(x ? g.substring(0, h) : g);
    if (!b) {
      if (!x) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (b = r(g), !b) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      x = !1;
    }
    const y = a(p).join(":"), w = v ? y + Oa : y, C = w + b;
    if (s.includes(C))
      continue;
    s.push(C);
    const S = o(b, x);
    for (let N = 0; N < S.length; ++N) {
      const R = S[N];
      s.push(w + R);
    }
    u = f + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Zg() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Il(t)) && (r && (r += " "), r += n);
  return r;
}
const Il = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Il(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ex(e, ...t) {
  let n, r, o, a = s;
  function s(u) {
    const d = t.reduce((f, m) => m(f), e());
    return n = Xg(d), r = n.cache.get, o = n.cache.set, a = c, c(u);
  }
  function c(u) {
    const d = r(u);
    if (d)
      return d;
    const f = Jg(u, n);
    return o(u, f), f;
  }
  return function() {
    return a(Zg.apply(null, arguments));
  };
}
const be = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ol = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ll = /^\((?:(\w[\w-]*):)?(.+)\)$/i, tx = /^\d+\/\d+$/, nx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ox = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ax = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Kt = (e) => tx.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), ut = (e) => !!e && Number.isInteger(Number(e)), ca = (e) => e.endsWith("%") && ae(e.slice(0, -1)), nt = (e) => nx.test(e), ix = () => !0, cx = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rx.test(e) && !ox.test(e)
), Fl = () => !1, lx = (e) => ax.test(e), ux = (e) => sx.test(e), dx = (e) => !q(e) && !X(e), fx = (e) => fn(e, Vl, Fl), q = (e) => Ol.test(e), Mt = (e) => fn(e, Bl, cx), la = (e) => fn(e, gx, ae), Zi = (e) => fn(e, $l, Fl), mx = (e) => fn(e, Wl, ux), Rr = (e) => fn(e, Hl, lx), X = (e) => Ll.test(e), En = (e) => mn(e, Bl), px = (e) => mn(e, xx), ec = (e) => mn(e, $l), hx = (e) => mn(e, Vl), vx = (e) => mn(e, Wl), Pr = (e) => mn(e, Hl, !0), fn = (e, t, n) => {
  const r = Ol.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, mn = (e, t, n = !1) => {
  const r = Ll.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, $l = (e) => e === "position" || e === "percentage", Wl = (e) => e === "image" || e === "url", Vl = (e) => e === "length" || e === "size" || e === "bg-size", Bl = (e) => e === "length", gx = (e) => e === "number", xx = (e) => e === "family-name", Hl = (e) => e === "shadow", bx = () => {
  const e = be("color"), t = be("font"), n = be("text"), r = be("font-weight"), o = be("tracking"), a = be("leading"), s = be("breakpoint"), c = be("container"), u = be("spacing"), d = be("radius"), f = be("shadow"), m = be("inset-shadow"), p = be("text-shadow"), v = be("drop-shadow"), g = be("blur"), h = be("perspective"), x = be("aspect"), b = be("ease"), y = be("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], S = () => [...C(), X, q], N = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], E = () => [X, q, u], _ = () => [Kt, "full", "auto", ...E()], O = () => [ut, "none", "subgrid", X, q], F = () => ["auto", {
    span: ["full", ut, X, q]
  }, ut, X, q], U = () => [ut, "auto", X, q], Q = () => ["auto", "min", "max", "fr", X, q], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...E()], D = () => [Kt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], P = () => [e, X, q], $ = () => [...C(), ec, Zi, {
    position: [X, q]
  }], j = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Y = () => ["auto", "cover", "contain", hx, fx, {
    size: [X, q]
  }], M = () => [ca, En, Mt], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    X,
    q
  ], z = () => ["", ae, En, Mt], B = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => [ae, ca, ec, Zi], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    X,
    q
  ], te = () => ["none", ae, X, q], ne = () => ["none", ae, X, q], ee = () => [ae, X, q], H = () => [Kt, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [nt],
      breakpoint: [nt],
      color: [ix],
      container: [nt],
      "drop-shadow": [nt],
      ease: ["in", "out", "in-out"],
      font: [dx],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [nt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [nt],
      shadow: [nt],
      spacing: ["px", ae],
      text: [nt],
      "text-shadow": [nt],
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
        aspect: ["auto", "square", Kt, q, X, x]
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
        columns: [ae, q, X, c]
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
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: _()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: _()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
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
        z: [ut, "auto", X, q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Kt, "full", "auto", c, ...E()]
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
        flex: [ae, Kt, "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, X, q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, X, q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ut, "first", "last", "none", X, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": O()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": O()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        "auto-cols": Q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Q()
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
        justify: [...k(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...k()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": k()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
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
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
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
        w: [c, "screen", ...D()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
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
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
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
        text: ["base", n, En, Mt]
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
        font: [r, X, la]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ca, q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [px, q, t]
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
        tracking: [o, X, q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", X, la]
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
        "list-image": ["none", X, q]
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
        list: ["disc", "decimal", "none", X, q]
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
        placeholder: P()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: P()
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", X, Mt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: P()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", X, q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, q]
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
        content: ["none", X, q]
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
        bg: $()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: j()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Y()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ut, X, q],
          radial: ["", X, q],
          conic: [ut, X, q]
        }, vx, mx]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: P()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: P()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: P()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: L()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": L()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": L()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": L()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": L()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": L()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": L()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": L()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": L()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": L()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": L()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": L()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": L()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": L()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": L()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
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
        "divide-y": z()
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
        border: [...B(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...B(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: P()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": P()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": P()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": P()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": P()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": P()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": P()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": P()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": P()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: P()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...B(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, X, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, En, Mt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: P()
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
          Pr,
          Rr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: P()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, Pr, Rr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": P()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
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
        ring: P()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, Mt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": P()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": P()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Pr, Rr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": P()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, X, q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
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
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": A()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": P()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": P()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": A()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": P()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": P()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": A()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": P()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": P()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": A()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": P()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": P()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": A()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": P()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": P()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": A()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": P()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": P()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": A()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": P()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": P()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": A()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": P()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": P()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": A()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": P()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": P()
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
        mask: $()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: j()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Y()
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
        mask: ["none", X, q]
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
          q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, X, q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, X, q]
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
          v,
          Pr,
          Rr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": P()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, X, q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, X, q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, X, q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, X, q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, X, q]
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
          q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, X, q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, X, q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, X, q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, X, q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, X, q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, X, q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, X, q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, X, q]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, q]
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
        duration: [ae, "initial", X, q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, X, q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, X, q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, X, q]
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
        perspective: [h, X, q]
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
        rotate: te()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": te()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": te()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": te()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
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
        transform: [X, q, "", "none", "gpu", "cpu"]
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
        accent: P()
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
        caret: P()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, q]
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
        "will-change": ["auto", "scroll", "contents", "transform", X, q]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...P()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, En, Mt, la]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...P()]
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
}, yx = /* @__PURE__ */ ex(bx);
function T(...e) {
  return yx(Al(e));
}
const Nj = Fg, wx = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  $g,
  {
    ref: n,
    className: T("border-b", e),
    ...t
  }
));
wx.displayName = "AccordionItem";
const Cx = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsx(Wg, { className: "flex", children: /* @__PURE__ */ i.jsxs(
  Ml,
  {
    ref: r,
    className: T(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ i.jsx(pt, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Cx.displayName = Ml.displayName;
const Sx = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsx(
  jl,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ i.jsx("div", { className: T("pb-4 pt-0", e), children: t })
  }
));
Sx.displayName = jl.displayName;
const tc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, nc = Al, Je = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return nc(e, n?.class, n?.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const f = n?.[d], m = a?.[d];
    if (f === null) return null;
    const p = tc(f) || tc(m);
    return o[d][p];
  }), c = n && Object.entries(n).reduce((d, f) => {
    let [m, p] = f;
    return p === void 0 || (d[m] = p), d;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: m, className: p, ...v } = f;
    return Object.entries(v).every((g) => {
      let [h, x] = g;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...c
      }[h]) : {
        ...a,
        ...c
      }[h] === x;
    }) ? [
      ...d,
      m,
      p
    ] : d;
  }, []);
  return nc(e, s, u, n?.class, n?.className);
}, Nx = Je(
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
), Ex = l.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: r,
    role: "alert",
    className: T(Nx({ variant: t }), e),
    ...n
  }
));
Ex.displayName = "Alert";
const Rx = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "h5",
  {
    ref: n,
    className: T("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Rx.displayName = "AlertTitle";
const Px = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: T("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Px.displayName = "AlertDescription";
function ie(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...n) => t.current?.(...n), []);
}
function Tx(e, t = globalThis?.document) {
  const n = ie(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var _x = "DismissableLayer", Fa = "dismissableLayer.update", Mx = "dismissableLayer.pointerDownOutside", jx = "dismissableLayer.focusOutside", rc, zl = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bt = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: c,
      ...u
    } = e, d = l.useContext(zl), [f, m] = l.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, v] = l.useState({}), g = J(t, (R) => m(R)), h = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = h.indexOf(x), y = f ? h.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= b, S = Ax((R) => {
      const E = R.target, _ = [...d.branches].some((O) => O.contains(E));
      !C || _ || (o?.(R), s?.(R), R.defaultPrevented || c?.());
    }, p), N = Dx((R) => {
      const E = R.target;
      [...d.branches].some((O) => O.contains(E)) || (a?.(R), s?.(R), R.defaultPrevented || c?.());
    }, p);
    return Tx((R) => {
      y === d.layers.size - 1 && (r?.(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
    }, p), l.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (rc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), oc(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = rc);
        };
    }, [f, p, n, d]), l.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), oc());
    }, [f, d]), l.useEffect(() => {
      const R = () => v({});
      return document.addEventListener(Fa, R), () => document.removeEventListener(Fa, R);
    }, []), /* @__PURE__ */ i.jsx(
      W.div,
      {
        ...u,
        ref: g,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
bt.displayName = _x;
var kx = "DismissableLayerBranch", Gl = l.forwardRef((e, t) => {
  const n = l.useContext(zl), r = l.useRef(null), o = J(t, r);
  return l.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ i.jsx(W.div, { ...e, ref: o });
});
Gl.displayName = kx;
function Ax(e, t = globalThis?.document) {
  const n = ie(e), r = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const a = (c) => {
      if (c.target && !r.current) {
        let u = function() {
          Yl(
            Mx,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Dx(e, t = globalThis?.document) {
  const n = ie(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Yl(jx, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function oc() {
  const e = new CustomEvent(Fa);
  document.dispatchEvent(e);
}
function Yl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Dn(o, a) : o.dispatchEvent(a);
}
var Ix = bt, Ox = Gl, ua = "focusScope.autoFocusOnMount", da = "focusScope.autoFocusOnUnmount", ac = { bubbles: !1, cancelable: !0 }, Lx = "FocusScope", Xn = l.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [c, u] = l.useState(null), d = ie(o), f = ie(a), m = l.useRef(null), p = J(t, (h) => u(h)), v = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (r) {
      let h = function(w) {
        if (v.paused || !c) return;
        const C = w.target;
        c.contains(C) ? m.current = C : ft(m.current, { select: !0 });
      }, x = function(w) {
        if (v.paused || !c) return;
        const C = w.relatedTarget;
        C !== null && (c.contains(C) || ft(m.current, { select: !0 }));
      }, b = function(w) {
        if (document.activeElement === document.body)
          for (const S of w)
            S.removedNodes.length > 0 && ft(c);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", x);
      const y = new MutationObserver(b);
      return c && y.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, c, v.paused]), l.useEffect(() => {
    if (c) {
      ic.add(v);
      const h = document.activeElement;
      if (!c.contains(h)) {
        const b = new CustomEvent(ua, ac);
        c.addEventListener(ua, d), c.dispatchEvent(b), b.defaultPrevented || (Fx(Hx(Kl(c)), { select: !0 }), document.activeElement === h && ft(c));
      }
      return () => {
        c.removeEventListener(ua, d), setTimeout(() => {
          const b = new CustomEvent(da, ac);
          c.addEventListener(da, f), c.dispatchEvent(b), b.defaultPrevented || ft(h ?? document.body, { select: !0 }), c.removeEventListener(da, f), ic.remove(v);
        }, 0);
      };
    }
  }, [c, d, f, v]);
  const g = l.useCallback(
    (h) => {
      if (!n && !r || v.paused) return;
      const x = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, b = document.activeElement;
      if (x && b) {
        const y = h.currentTarget, [w, C] = $x(y);
        w && C ? !h.shiftKey && b === C ? (h.preventDefault(), n && ft(w, { select: !0 })) : h.shiftKey && b === w && (h.preventDefault(), n && ft(C, { select: !0 })) : b === y && h.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ i.jsx(W.div, { tabIndex: -1, ...s, ref: p, onKeyDown: g });
});
Xn.displayName = Lx;
function Fx(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ft(r, { select: t }), document.activeElement !== n) return;
}
function $x(e) {
  const t = Kl(e), n = sc(t, e), r = sc(t.reverse(), e);
  return [n, r];
}
function Kl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function sc(e, t) {
  for (const n of e)
    if (!Wx(n, { upTo: t })) return n;
}
function Wx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Vx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ft(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Vx(e) && t && e.select();
  }
}
var ic = Bx();
function Bx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = cc(e, t), e.unshift(t);
    },
    remove(t) {
      e = cc(e, t), e[0]?.resume();
    }
  };
}
function cc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Hx(e) {
  return e.filter((t) => t.tagName !== "A");
}
var zx = "Portal", Ht = l.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = l.useState(!1);
  fe(() => a(!0), []);
  const s = n || o && globalThis?.document?.body;
  return s ? il.createPortal(/* @__PURE__ */ i.jsx(W.div, { ...r, ref: t }), s) : null;
});
Ht.displayName = zx;
var fa = 0;
function mo() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? lc()), document.body.insertAdjacentElement("beforeend", e[1] ?? lc()), fa++, () => {
      fa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), fa--;
    };
  }, []);
}
function lc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var He = function() {
  return He = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, He.apply(this, arguments);
};
function Ul(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Gx(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ir = "right-scroll-bar-position", Or = "width-before-scroll-bar", Yx = "with-scroll-bars-hidden", Kx = "--removed-body-scroll-bar-size";
function ma(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ux(e, t) {
  var n = Ne(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var qx = typeof window < "u" ? l.useLayoutEffect : l.useEffect, uc = /* @__PURE__ */ new WeakMap();
function Xx(e, t) {
  var n = Ux(null, function(r) {
    return e.forEach(function(o) {
      return ma(o, r);
    });
  });
  return qx(function() {
    var r = uc.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(c) {
        a.has(c) || ma(c, null);
      }), a.forEach(function(c) {
        o.has(c) || ma(c, s);
      });
    }
    uc.set(n, e);
  }, [e]), n;
}
function Qx(e) {
  return e;
}
function Jx(e, t) {
  t === void 0 && (t = Qx);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(a), s = n;
      }
      var u = function() {
        var f = s;
        s = [], f.forEach(a);
      }, d = function() {
        return Promise.resolve().then(u);
      };
      d(), n = {
        push: function(f) {
          s.push(f), d();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function Zx(e) {
  e === void 0 && (e = {});
  var t = Jx(null);
  return t.options = He({ async: !0, ssr: !1 }, e), t;
}
var ql = function(e) {
  var t = e.sideCar, n = Ul(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, He({}, n));
};
ql.isSideCarExport = !0;
function eb(e, t) {
  return e.useMedium(t), ql;
}
var Xl = Zx(), pa = function() {
}, po = l.forwardRef(function(e, t) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: pa,
    onWheelCapture: pa,
    onTouchMoveCapture: pa
  }), o = r[0], a = r[1], s = e.forwardProps, c = e.children, u = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, v = e.noRelative, g = e.noIsolation, h = e.inert, x = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = e.gapMode, C = Ul(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = p, N = Xx([n, t]), R = He(He({}, C), o);
  return l.createElement(
    l.Fragment,
    null,
    f && l.createElement(S, { sideCar: Xl, removeScrollBar: d, shards: m, noRelative: v, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!x, lockRef: n, gapMode: w }),
    s ? l.cloneElement(l.Children.only(c), He(He({}, R), { ref: N })) : l.createElement(y, He({}, R, { className: u, ref: N }), c)
  );
});
po.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
po.classNames = {
  fullWidth: Or,
  zeroRight: Ir
};
var tb = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function nb() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = tb();
  return t && e.setAttribute("nonce", t), e;
}
function rb(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ob(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ab = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = nb()) && (rb(t, n), ob(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, sb = function() {
  var e = ab();
  return function(t, n) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ql = function() {
  var e = sb(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ib = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ha = function(e) {
  return parseInt(e || "", 10) || 0;
}, cb = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ha(n), ha(r), ha(o)];
}, lb = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ib;
  var t = cb(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ub = Ql(), en = "data-scroll-locked", db = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Yx, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(en, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ir, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Or, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Ir, " .").concat(Ir, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Or, " .").concat(Or, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(en, `] {
    `).concat(Kx, ": ").concat(c, `px;
  }
`);
}, dc = function() {
  var e = parseInt(document.body.getAttribute(en) || "0", 10);
  return isFinite(e) ? e : 0;
}, fb = function() {
  l.useEffect(function() {
    return document.body.setAttribute(en, (dc() + 1).toString()), function() {
      var e = dc() - 1;
      e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString());
    };
  }, []);
}, mb = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  fb();
  var a = l.useMemo(function() {
    return lb(o);
  }, [o]);
  return l.createElement(ub, { styles: db(a, !t, o, n ? "" : "!important") });
}, $a = !1;
if (typeof window < "u")
  try {
    var Tr = Object.defineProperty({}, "passive", {
      get: function() {
        return $a = !0, !0;
      }
    });
    window.addEventListener("test", Tr, Tr), window.removeEventListener("test", Tr, Tr);
  } catch {
    $a = !1;
  }
var Ut = $a ? { passive: !1 } : !1, pb = function(e) {
  return e.tagName === "TEXTAREA";
}, Jl = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !pb(e) && n[t] === "visible")
  );
}, hb = function(e) {
  return Jl(e, "overflowY");
}, vb = function(e) {
  return Jl(e, "overflowX");
}, fc = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Zl(e, r);
    if (o) {
      var a = eu(e, r), s = a[1], c = a[2];
      if (s > c)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, gb = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, xb = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Zl = function(e, t) {
  return e === "v" ? hb(t) : vb(t);
}, eu = function(e, t) {
  return e === "v" ? gb(t) : xb(t);
}, bb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, yb = function(e, t, n, r, o) {
  var a = bb(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, u = t.contains(c), d = !1, f = s > 0, m = 0, p = 0;
  do {
    if (!c)
      break;
    var v = eu(e, c), g = v[0], h = v[1], x = v[2], b = h - x - a * g;
    (g || b) && Zl(e, c) && (m += b, p += g);
    var y = c.parentNode;
    c = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !u && c !== document.body || // self content
    u && (t.contains(c) || t === c)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, _r = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mc = function(e) {
  return [e.deltaX, e.deltaY];
}, pc = function(e) {
  return e && "current" in e ? e.current : e;
}, wb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Cb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Sb = 0, qt = [];
function Nb(e) {
  var t = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(Sb++)[0], a = l.useState(Ql)[0], s = l.useRef(e);
  l.useEffect(function() {
    s.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Gx([e.lockRef.current], (e.shards || []).map(pc), !0).filter(Boolean);
      return h.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = l.useCallback(function(h, x) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var b = _r(h), y = n.current, w = "deltaX" in h ? h.deltaX : y[0] - b[0], C = "deltaY" in h ? h.deltaY : y[1] - b[1], S, N = h.target, R = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && R === "h" && N.type === "range")
      return !1;
    var E = fc(R, N);
    if (!E)
      return !0;
    if (E ? S = R : (S = R === "v" ? "h" : "v", E = fc(R, N)), !E)
      return !1;
    if (!r.current && "changedTouches" in h && (w || C) && (r.current = S), !S)
      return !0;
    var _ = r.current || S;
    return yb(_, x, h, _ === "h" ? w : C);
  }, []), u = l.useCallback(function(h) {
    var x = h;
    if (!(!qt.length || qt[qt.length - 1] !== a)) {
      var b = "deltaY" in x ? mc(x) : _r(x), y = t.current.filter(function(S) {
        return S.name === x.type && (S.target === x.target || x.target === S.shadowParent) && wb(S.delta, b);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var w = (s.current.shards || []).map(pc).filter(Boolean).filter(function(S) {
          return S.contains(x.target);
        }), C = w.length > 0 ? c(x, w[0]) : !s.current.noIsolation;
        C && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = l.useCallback(function(h, x, b, y) {
    var w = { name: h, delta: x, target: b, should: y, shadowParent: Eb(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), f = l.useCallback(function(h) {
    n.current = _r(h), r.current = void 0;
  }, []), m = l.useCallback(function(h) {
    d(h.type, mc(h), h.target, c(h, e.lockRef.current));
  }, []), p = l.useCallback(function(h) {
    d(h.type, _r(h), h.target, c(h, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return qt.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", u, Ut), document.addEventListener("touchmove", u, Ut), document.addEventListener("touchstart", f, Ut), function() {
      qt = qt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", u, Ut), document.removeEventListener("touchmove", u, Ut), document.removeEventListener("touchstart", f, Ut);
    };
  }, []);
  var v = e.removeScrollBar, g = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    g ? l.createElement(a, { styles: Cb(o) }) : null,
    v ? l.createElement(mb, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Eb(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Rb = eb(Xl, Nb);
var Qn = l.forwardRef(function(e, t) {
  return l.createElement(po, He({}, e, { ref: t, sideCar: Rb }));
});
Qn.classNames = po.classNames;
var Pb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xt = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), jr = {}, va = 0, tu = function(e) {
  return e && (e.host || tu(e.parentNode));
}, Tb = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = tu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, _b = function(e, t, n, r) {
  var o = Tb(t, Array.isArray(e) ? e : [e]);
  jr[n] || (jr[n] = /* @__PURE__ */ new WeakMap());
  var a = jr[n], s = [], c = /* @__PURE__ */ new Set(), u = new Set(o), d = function(m) {
    !m || c.has(m) || (c.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || u.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (c.has(p))
        f(p);
      else
        try {
          var v = p.getAttribute(r), g = v !== null && v !== "false", h = (Xt.get(p) || 0) + 1, x = (a.get(p) || 0) + 1;
          Xt.set(p, h), a.set(p, x), s.push(p), h === 1 && g && Mr.set(p, !0), x === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return f(t), c.clear(), va++, function() {
    s.forEach(function(m) {
      var p = Xt.get(m) - 1, v = a.get(m) - 1;
      Xt.set(m, p), a.set(m, v), p || (Mr.has(m) || m.removeAttribute(r), Mr.delete(m)), v || m.removeAttribute(n);
    }), va--, va || (Xt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), jr = {});
  };
}, ho = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Pb(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), _b(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, vo = "Dialog", [nu, ru] = ve(vo), [Mb, Be] = nu(vo), ou = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, c = l.useRef(null), u = l.useRef(null), [d, f] = ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: vo
  });
  return /* @__PURE__ */ i.jsx(
    Mb,
    {
      scope: t,
      triggerRef: c,
      contentRef: u,
      contentId: pe(),
      titleId: pe(),
      descriptionId: pe(),
      open: d,
      onOpenChange: f,
      onOpenToggle: l.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
ou.displayName = vo;
var au = "DialogTrigger", su = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(au, n), a = J(t, o.triggerRef);
    return /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ps(o.open),
        ...r,
        ref: a,
        onClick: I(e.onClick, o.onOpenToggle)
      }
    );
  }
);
su.displayName = au;
var Es = "DialogPortal", [jb, iu] = nu(Es, {
  forceMount: void 0
}), cu = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Be(Es, t);
  return /* @__PURE__ */ i.jsx(jb, { scope: t, forceMount: n, children: l.Children.map(r, (s) => /* @__PURE__ */ i.jsx(me, { present: n || a.open, children: /* @__PURE__ */ i.jsx(Ht, { asChild: !0, container: o, children: s }) })) });
};
cu.displayName = Es;
var Gr = "DialogOverlay", lu = l.forwardRef(
  (e, t) => {
    const n = iu(Gr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Be(Gr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ i.jsx(me, { present: r || a.open, children: /* @__PURE__ */ i.jsx(Ab, { ...o, ref: t }) }) : null;
  }
);
lu.displayName = Gr;
var kb = /* @__PURE__ */ ht("DialogOverlay.RemoveScroll"), Ab = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(Gr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i.jsx(Qn, { as: kb, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ i.jsx(
        W.div,
        {
          "data-state": Ps(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), At = "DialogContent", uu = l.forwardRef(
  (e, t) => {
    const n = iu(At, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Be(At, e.__scopeDialog);
    return /* @__PURE__ */ i.jsx(me, { present: r || a.open, children: a.modal ? /* @__PURE__ */ i.jsx(Db, { ...o, ref: t }) : /* @__PURE__ */ i.jsx(Ib, { ...o, ref: t }) });
  }
);
uu.displayName = At;
var Db = l.forwardRef(
  (e, t) => {
    const n = Be(At, e.__scopeDialog), r = l.useRef(null), o = J(t, n.contentRef, r);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return ho(a);
    }, []), /* @__PURE__ */ i.jsx(
      du,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: I(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || c) && a.preventDefault();
        }),
        onFocusOutside: I(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Ib = l.forwardRef(
  (e, t) => {
    const n = Be(At, e.__scopeDialog), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ i.jsx(
      du,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          n.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), du = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, c = Be(At, n), u = l.useRef(null), d = J(t, u);
    return mo(), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        Xn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ i.jsx(
            bt,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": Ps(c.open),
              ...s,
              ref: d,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(Lb, { titleId: c.titleId }),
        /* @__PURE__ */ i.jsx($b, { contentRef: u, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), Rs = "DialogTitle", fu = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(Rs, n);
    return /* @__PURE__ */ i.jsx(W.h2, { id: o.titleId, ...r, ref: t });
  }
);
fu.displayName = Rs;
var mu = "DialogDescription", pu = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(mu, n);
    return /* @__PURE__ */ i.jsx(W.p, { id: o.descriptionId, ...r, ref: t });
  }
);
pu.displayName = mu;
var hu = "DialogClose", vu = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Be(hu, n);
    return /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: I(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
vu.displayName = hu;
function Ps(e) {
  return e ? "open" : "closed";
}
var gu = "DialogTitleWarning", [Ob, xu] = ig(gu, {
  contentName: At,
  titleName: Rs,
  docsSlug: "dialog"
}), Lb = ({ titleId: e }) => {
  const t = xu(gu), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return l.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Fb = "DialogDescriptionWarning", $b = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xu(Fb).contentName}}.`;
  return l.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, go = ou, Ts = su, xo = cu, pn = lu, hn = uu, Jn = fu, Zn = pu, vn = vu, bu = "AlertDialog", [Wb, Ej] = ve(bu, [
  ru
]), ct = ru(), yu = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ct(t);
  return /* @__PURE__ */ i.jsx(go, { ...r, ...n, modal: !0 });
};
yu.displayName = bu;
var Vb = "AlertDialogTrigger", wu = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ct(n);
    return /* @__PURE__ */ i.jsx(Ts, { ...o, ...r, ref: t });
  }
);
wu.displayName = Vb;
var Bb = "AlertDialogPortal", Cu = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ct(t);
  return /* @__PURE__ */ i.jsx(xo, { ...r, ...n });
};
Cu.displayName = Bb;
var Hb = "AlertDialogOverlay", Su = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ct(n);
    return /* @__PURE__ */ i.jsx(pn, { ...o, ...r, ref: t });
  }
);
Su.displayName = Hb;
var tn = "AlertDialogContent", [zb, Gb] = Wb(tn), Yb = /* @__PURE__ */ ml("AlertDialogContent"), Nu = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = ct(n), s = l.useRef(null), c = J(t, s), u = l.useRef(null);
    return /* @__PURE__ */ i.jsx(
      Ob,
      {
        contentName: tn,
        titleName: Eu,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ i.jsx(zb, { scope: n, cancelRef: u, children: /* @__PURE__ */ i.jsxs(
          hn,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: c,
            onOpenAutoFocus: I(o.onOpenAutoFocus, (d) => {
              d.preventDefault(), u.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ i.jsx(Yb, { children: r }),
              /* @__PURE__ */ i.jsx(Ub, { contentRef: s })
            ]
          }
        ) })
      }
    );
  }
);
Nu.displayName = tn;
var Eu = "AlertDialogTitle", Ru = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ct(n);
    return /* @__PURE__ */ i.jsx(Jn, { ...o, ...r, ref: t });
  }
);
Ru.displayName = Eu;
var Pu = "AlertDialogDescription", Tu = l.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ct(n);
  return /* @__PURE__ */ i.jsx(Zn, { ...o, ...r, ref: t });
});
Tu.displayName = Pu;
var Kb = "AlertDialogAction", _u = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = ct(n);
    return /* @__PURE__ */ i.jsx(vn, { ...o, ...r, ref: t });
  }
);
_u.displayName = Kb;
var Mu = "AlertDialogCancel", ju = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = Gb(Mu, n), a = ct(n), s = J(t, o);
    return /* @__PURE__ */ i.jsx(vn, { ...a, ...r, ref: s });
  }
);
ju.displayName = Mu;
var Ub = ({ contentRef: e }) => {
  const t = `\`${tn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${tn}\` by passing a \`${Pu}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${tn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return l.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, qb = yu, Xb = wu, Qb = Cu, ku = Su, Au = Nu, Du = _u, Iu = ju, Ou = Ru, Lu = Tu;
const Rj = qb, Pj = Xb, Jb = Qb, Fu = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  ku,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Fu.displayName = ku.displayName;
const Zb = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsxs(Jb, { children: [
  /* @__PURE__ */ i.jsx(Fu, {}),
  /* @__PURE__ */ i.jsx(
    Au,
    {
      ref: n,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
Zb.displayName = Au.displayName;
const ey = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
ey.displayName = "AlertDialogHeader";
const ty = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ty.displayName = "AlertDialogFooter";
const ny = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Ou,
  {
    ref: n,
    className: T("text-lg font-semibold", e),
    ...t
  }
));
ny.displayName = Ou.displayName;
const ry = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Lu,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
ry.displayName = Lu.displayName;
const oy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Du,
  {
    ref: n,
    className: T(ot(), e),
    ...t
  }
));
oy.displayName = Du.displayName;
const ay = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Iu,
  {
    ref: n,
    className: T(
      ot({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
ay.displayName = Iu.displayName;
function Tj({
  options: e,
  isLoading: t,
  renderOption: n,
  getOptionValue: r,
  getDisplayValue: o,
  label: a,
  placeholder: s = "Selecione...",
  value: c,
  onChange: u,
  onSearchChange: d,
  disabled: f = !1,
  triggerClassName: m,
  noResultsMessage: p,
  clearable: v = !0,
  error: g
}) {
  const [h, x] = Ne(!1), [b, y] = Ne(c), [w, C] = Ne(null), [S, N] = Ne("");
  je(() => {
    y(c);
  }, [c]), je(() => {
    if (c && e.length > 0) {
      const E = e.find((_) => r(_) === c);
      E && C(E);
    }
  }, [c, e, r]);
  const R = ol(
    (E) => {
      const _ = v && E === b ? "" : E;
      c && y(_), C(
        e.find((O) => r(O) === _) || null
      ), u(_), x(!1);
    },
    [b, u, v, e, r, c]
  );
  return /* @__PURE__ */ i.jsxs("div", { className: "space-y-1", children: [
    !!a && /* @__PURE__ */ i.jsx(Wo, { className: T(g && "text-destructive"), children: a }),
    /* @__PURE__ */ i.jsxs(mr, { open: h, onOpenChange: x, children: [
      /* @__PURE__ */ i.jsx(pr, { asChild: !0, children: /* @__PURE__ */ i.jsxs(
        yt,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": h,
          className: T(
            "justify-between w-full hover:bg-input bg-input",
            f && "opacity-50 cursor-not-allowed",
            !c && "text-muted-foreground",
            m
          ),
          disabled: f,
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "truncate", children: c && w ? o(w) : s }),
            /* @__PURE__ */ i.jsx(cl, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsx(yn, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ i.jsxs(ir, { shouldFilter: !1, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "relative border-b", children: [
          /* @__PURE__ */ i.jsx(
            Eo,
            {
              placeholder: "Buscar",
              value: S,
              onValueChange: (E) => {
                N(E), d(E);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ i.jsx(An, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ i.jsxs(Ro, { children: [
          t && e.length === 0 && /* @__PURE__ */ i.jsx(sy, {}),
          !t && e.length === 0 && /* @__PURE__ */ i.jsx(Po, { children: /* @__PURE__ */ i.jsx("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: p ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ i.jsx(cr, { children: e.map((E) => /* @__PURE__ */ i.jsxs(
            kt,
            {
              value: r(E),
              onSelect: R,
              children: [
                /* @__PURE__ */ i.jsx(
                  Kn,
                  {
                    className: T(
                      "mr-2 size-4 shrink-0",
                      b === r(E) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "w-0 flex-1", children: n(E) })
              ]
            },
            r(E)
          )) })
        ] })
      ] }) })
    ] }),
    !!g && /* @__PURE__ */ i.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: g })
  ] });
}
function sy() {
  return /* @__PURE__ */ i.jsx(cr, { children: [1, 2, 3].map((e) => /* @__PURE__ */ i.jsx(kt, { disabled: !0, className: "p-0", children: /* @__PURE__ */ i.jsx(U_, { className: "w-full h-8 my-0.5" }) }, e)) });
}
var kr = { exports: {} }, ga = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function iy() {
  if (hc) return ga;
  hc = 1;
  var e = se;
  function t(m, p) {
    return m === p && (m !== 0 || 1 / m === 1 / p) || m !== m && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function c(m, p) {
    var v = p(), g = r({ inst: { value: v, getSnapshot: p } }), h = g[0].inst, x = g[1];
    return a(
      function() {
        h.value = v, h.getSnapshot = p, u(h) && x({ inst: h });
      },
      [m, v, p]
    ), o(
      function() {
        return u(h) && x({ inst: h }), m(function() {
          u(h) && x({ inst: h });
        });
      },
      [m]
    ), s(v), v;
  }
  function u(m) {
    var p = m.getSnapshot;
    m = m.value;
    try {
      var v = p();
      return !n(m, v);
    } catch {
      return !0;
    }
  }
  function d(m, p) {
    return p();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : c;
  return ga.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ga;
}
var xa = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function cy() {
  return vc || (vc = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v, g) {
      return v === g && (v !== 0 || 1 / v === 1 / g) || v !== v && g !== g;
    }
    function t(v, g) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = g();
      if (!m) {
        var x = g();
        a(h, x) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), m = !0);
      }
      x = s({
        inst: { value: h, getSnapshot: g }
      });
      var b = x[0].inst, y = x[1];
      return u(
        function() {
          b.value = h, b.getSnapshot = g, n(b) && y({ inst: b });
        },
        [v, h, g]
      ), c(
        function() {
          return n(b) && y({ inst: b }), v(function() {
            n(b) && y({ inst: b });
          });
        },
        [v]
      ), d(h), h;
    }
    function n(v) {
      var g = v.getSnapshot;
      v = v.value;
      try {
        var h = g();
        return !a(v, h);
      } catch {
        return !0;
      }
    }
    function r(v, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = se, a = typeof Object.is == "function" ? Object.is : e, s = o.useState, c = o.useEffect, u = o.useLayoutEffect, d = o.useDebugValue, f = !1, m = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    xa.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), xa;
}
var gc;
function ly() {
  return gc || (gc = 1, process.env.NODE_ENV === "production" ? kr.exports = iy() : kr.exports = cy()), kr.exports;
}
var uy = ly();
function dy() {
  return uy.useSyncExternalStore(
    fy,
    () => !0,
    () => !1
  );
}
function fy() {
  return () => {
  };
}
var _s = "Avatar", [my, _j] = ve(_s), [py, $u] = my(_s), Wu = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = l.useState("idle");
    return /* @__PURE__ */ i.jsx(
      py,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ i.jsx(W.span, { ...r, ref: t })
      }
    );
  }
);
Wu.displayName = _s;
var Vu = "AvatarImage", Bu = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, s = $u(Vu, n), c = hy(r, a), u = ie((d) => {
      o(d), s.onImageLoadingStatusChange(d);
    });
    return fe(() => {
      c !== "idle" && u(c);
    }, [c, u]), c === "loaded" ? /* @__PURE__ */ i.jsx(W.img, { ...a, ref: t, src: r }) : null;
  }
);
Bu.displayName = Vu;
var Hu = "AvatarFallback", zu = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = $u(Hu, n), [s, c] = l.useState(r === void 0);
    return l.useEffect(() => {
      if (r !== void 0) {
        const u = window.setTimeout(() => c(!0), r);
        return () => window.clearTimeout(u);
      }
    }, [r]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ i.jsx(W.span, { ...o, ref: t }) : null;
  }
);
zu.displayName = Hu;
function xc(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function hy(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = dy(), o = l.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [s, c] = l.useState(
    () => xc(a, e)
  );
  return fe(() => {
    c(xc(a, e));
  }, [a, e]), fe(() => {
    const u = (m) => () => {
      c(m);
    };
    if (!a) return;
    const d = u("loaded"), f = u("error");
    return a.addEventListener("load", d), a.addEventListener("error", f), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", d), a.removeEventListener("error", f);
    };
  }, [a, n, t]), s;
}
var Gu = Wu, Yu = Bu, Ku = zu;
const vy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Gu,
  {
    ref: n,
    className: T(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
vy.displayName = Gu.displayName;
const gy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Yu,
  {
    ref: n,
    className: T("aspect-square h-full w-full", e),
    ...t
  }
));
gy.displayName = Yu.displayName;
const xy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Ku,
  {
    ref: n,
    className: T(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
xy.displayName = Ku.displayName;
const by = Je(
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
function bc({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ i.jsx("div", { className: T(by({ variant: t }), e), ...n });
}
const yy = l.forwardRef(({ ...e }, t) => /* @__PURE__ */ i.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
yy.displayName = "Breadcrumb";
const wy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "ol",
  {
    ref: n,
    className: T(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
wy.displayName = "BreadcrumbList";
const Cy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "li",
  {
    ref: n,
    className: T("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Cy.displayName = "BreadcrumbItem";
const Sy = l.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? dl : "a";
  return /* @__PURE__ */ i.jsx(
    o,
    {
      ref: r,
      className: T("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
Sy.displayName = "BreadcrumbLink";
const Ny = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: T("font-normal text-foreground", e),
    ...t
  }
));
Ny.displayName = "BreadcrumbPage";
const Ey = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ i.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ i.jsx(Un, {})
  }
);
Ey.displayName = "BreadcrumbSeparator";
const Ry = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ i.jsx(ll, { className: "h-4 w-4" }),
      /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Ry.displayName = "BreadcrumbElipssis";
const Py = {
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
}, ot = Je(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: Py,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), yt = l.forwardRef(({ className: e, variant: t, size: n, disabled: r, href: o, ...a }, s) => /* @__PURE__ */ i.jsx(i.Fragment, { children: o ? /* @__PURE__ */ i.jsx(
  tg,
  {
    className: T(ot({ variant: t, size: n, className: e })),
    ref: s,
    to: o,
    ...a
  }
) : /* @__PURE__ */ i.jsx(
  "button",
  {
    className: T(ot({ variant: t, size: n, className: e })),
    ref: s,
    disabled: r,
    ...a
  }
) }));
yt.displayName = "Button";
const Ms = 6048e5, Ty = 864e5, yc = Symbol.for("constructDateFrom");
function ye(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && yc in e ? e[yc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ce(e, t) {
  return ye(t || e, e);
}
function we(e, t, n) {
  const r = ce(e, n?.in);
  return isNaN(t) ? ye(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ae(e, t, n) {
  const r = ce(e, n?.in);
  if (isNaN(t)) return ye(n?.in || e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = ye(n?.in || e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
function _y(e, t, n) {
  const {
    years: r = 0,
    months: o = 0,
    weeks: a = 0,
    days: s = 0,
    hours: c = 0,
    minutes: u = 0,
    seconds: d = 0
  } = t, f = ce(e, n?.in), m = o || r ? Ae(f, o + r * 12) : f, p = s || a ? we(m, s + a * 7) : m, v = u + c * 60, h = (d + v * 60) * 1e3;
  return ye(e, +p + h);
}
let My = {};
function er() {
  return My;
}
function Xe(e, t) {
  const n = er(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ce(e, t?.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Dt(e, t) {
  return Xe(e, { ...t, weekStartsOn: 1 });
}
function Uu(e, t) {
  const n = ce(e, t?.in), r = n.getFullYear(), o = ye(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Dt(o), s = ye(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const c = Dt(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Yr(e) {
  const t = ce(e), n = new Date(
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
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function gn(e, ...t) {
  const n = ye.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function on(e, t) {
  const n = ce(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Ye(e, t, n) {
  const [r, o] = gn(
    n?.in,
    e,
    t
  ), a = on(r), s = on(o), c = +a - Yr(a), u = +s - Yr(s);
  return Math.round((c - u) / Ty);
}
function jy(e, t) {
  const n = Uu(e, t), r = ye(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Dt(r);
}
function Wa(e, t, n) {
  return we(e, t * 7, n);
}
function ky(e, t, n) {
  return Ae(e, t * 12, n);
}
function Ay(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ye.bind(null, o));
    const a = ce(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), ye(r, n || NaN);
}
function Dy(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ye.bind(null, o));
    const a = ce(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), ye(r, n || NaN);
}
function Ee(e, t, n) {
  const [r, o] = gn(
    n?.in,
    e,
    t
  );
  return +on(r) == +on(o);
}
function js(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Iy(e) {
  return !(!js(e) && typeof e != "number" || isNaN(+ce(e)));
}
function In(e, t, n) {
  const [r, o] = gn(
    n?.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Oy(e, t, n) {
  const [r, o] = gn(
    n?.in,
    e,
    t
  ), a = Xe(r, n), s = Xe(o, n), c = +a - Yr(a), u = +s - Yr(s);
  return Math.round((c - u) / Ms);
}
function ks(e, t) {
  const n = ce(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Re(e, t) {
  const n = ce(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function qu(e, t) {
  const n = ce(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function As(e, t) {
  const n = er(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ce(e, t?.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Xu(e, t) {
  return As(e, { ...t, weekStartsOn: 1 });
}
const Ly = {
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
}, Fy = (e, t, n) => {
  let r;
  const o = Ly[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function nn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const $y = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Wy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Vy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, By = {
  date: nn({
    formats: $y,
    defaultWidth: "full"
  }),
  time: nn({
    formats: Wy,
    defaultWidth: "full"
  }),
  dateTime: nn({
    formats: Vy,
    defaultWidth: "full"
  })
}, Hy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zy = (e, t, n, r) => Hy[e];
function ze(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, c = n?.width ? String(n.width) : s;
      o = e.formattingValues[c] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, c = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const Gy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Yy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ky = {
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
}, Uy = {
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
}, qy = {
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
}, Xy = {
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
}, Qy = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Jy = {
  ordinalNumber: Qy,
  era: ze({
    values: Gy,
    defaultWidth: "wide"
  }),
  quarter: ze({
    values: Yy,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ze({
    values: Ky,
    defaultWidth: "wide"
  }),
  day: ze({
    values: Uy,
    defaultWidth: "wide"
  }),
  dayPeriod: ze({
    values: qy,
    defaultWidth: "wide",
    formattingValues: Xy,
    defaultFormattingWidth: "wide"
  })
};
function Ge(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(c) ? ew(c, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Zy(c, (m) => m.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(s.length);
    return { value: d, rest: f };
  };
}
function Zy(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function ew(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Qu(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const c = t.slice(o.length);
    return { value: s, rest: c };
  };
}
const tw = /^(\d+)(th|st|nd|rd)?/i, nw = /\d+/i, rw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ow = {
  any: [/^b/i, /^(a|c)/i]
}, aw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, sw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, iw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, cw = {
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
}, lw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, uw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, dw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, fw = {
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
}, mw = {
  ordinalNumber: Qu({
    matchPattern: tw,
    parsePattern: nw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ge({
    matchPatterns: rw,
    defaultMatchWidth: "wide",
    parsePatterns: ow,
    defaultParseWidth: "any"
  }),
  quarter: Ge({
    matchPatterns: aw,
    defaultMatchWidth: "wide",
    parsePatterns: sw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ge({
    matchPatterns: iw,
    defaultMatchWidth: "wide",
    parsePatterns: cw,
    defaultParseWidth: "any"
  }),
  day: Ge({
    matchPatterns: lw,
    defaultMatchWidth: "wide",
    parsePatterns: uw,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ge({
    matchPatterns: dw,
    defaultMatchWidth: "any",
    parsePatterns: fw,
    defaultParseWidth: "any"
  })
}, Ju = {
  code: "en-US",
  formatDistance: Fy,
  formatLong: By,
  formatRelative: zy,
  localize: Jy,
  match: mw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function pw(e, t) {
  const n = ce(e, t?.in);
  return Ye(n, qu(n)) + 1;
}
function Zu(e, t) {
  const n = ce(e, t?.in), r = +Dt(n) - +jy(n);
  return Math.round(r / Ms) + 1;
}
function ed(e, t) {
  const n = ce(e, t?.in), r = n.getFullYear(), o = er(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = ye(t?.in || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const c = Xe(s, t), u = ye(t?.in || e, 0);
  u.setFullYear(r, 0, a), u.setHours(0, 0, 0, 0);
  const d = Xe(u, t);
  return +n >= +c ? r + 1 : +n >= +d ? r : r - 1;
}
function hw(e, t) {
  const n = er(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = ed(e, t), a = ye(t?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Xe(a, t);
}
function td(e, t) {
  const n = ce(e, t?.in), r = +Xe(n, t) - +hw(n, t);
  return Math.round(r / Ms) + 1;
}
function le(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const dt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return le(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : le(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return le(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return le(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return le(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return le(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return le(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return le(o, t.length);
  }
}, Qt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, wc = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return dt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ed(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return le(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : le(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Uu(e);
    return le(n, t.length);
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
    const n = e.getFullYear();
    return le(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return le(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return le(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return dt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return le(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = td(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : le(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Zu(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : le(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : dt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = pw(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : le(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return le(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return le(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return le(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Qt.noon : r === 0 ? o = Qt.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Qt.evening : r >= 12 ? o = Qt.afternoon : r >= 4 ? o = Qt.morning : o = Qt.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return dt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : dt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : le(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : le(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : dt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : dt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return dt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Sc(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return jt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return jt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Sc(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return jt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return jt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Cc(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + jt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Cc(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + jt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return le(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return le(+e, t.length);
  }
};
function Cc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + le(a, 2);
}
function Sc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + le(Math.abs(e) / 60, 2) : jt(e, t);
}
function jt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = le(Math.trunc(r / 60), 2), a = le(r % 60, 2);
  return n + o + t + a;
}
const Nc = (e, t) => {
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
}, nd = (e, t) => {
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
}, vw = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Nc(e, t);
  let a;
  switch (r) {
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
  return a.replace("{{date}}", Nc(r, t)).replace("{{time}}", nd(o, t));
}, gw = {
  p: nd,
  P: vw
}, xw = /^D+$/, bw = /^Y+$/, yw = ["D", "DD", "YY", "YYYY"];
function ww(e) {
  return xw.test(e);
}
function Cw(e) {
  return bw.test(e);
}
function Sw(e, t, n) {
  const r = Nw(e, t, n);
  if (console.warn(r), yw.includes(e)) throw new RangeError(r);
}
function Nw(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ew = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Rw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Pw = /^'([^]*?)'?$/, Tw = /''/g, _w = /[a-zA-Z]/;
function Ze(e, t, n) {
  const r = er(), o = n?.locale ?? r.locale ?? Ju, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, c = ce(e, n?.in);
  if (!Iy(c))
    throw new RangeError("Invalid time value");
  let u = t.match(Rw).map((f) => {
    const m = f[0];
    if (m === "p" || m === "P") {
      const p = gw[m];
      return p(f, o.formatLong);
    }
    return f;
  }).join("").match(Ew).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const m = f[0];
    if (m === "'")
      return { isToken: !1, value: Mw(f) };
    if (wc[m])
      return { isToken: !0, value: f };
    if (m.match(_w))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: f };
  });
  o.localize.preprocessor && (u = o.localize.preprocessor(c, u));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return u.map((f) => {
    if (!f.isToken) return f.value;
    const m = f.value;
    (!n?.useAdditionalWeekYearTokens && Cw(m) || !n?.useAdditionalDayOfYearTokens && ww(m)) && Sw(m, t, String(e));
    const p = wc[m[0]];
    return p(c, m, o.localize, d);
  }).join("");
}
function Mw(e) {
  const t = e.match(Pw);
  return t ? t[1].replace(Tw, "'") : e;
}
function jw(e, t) {
  const n = ce(e, t?.in), r = n.getFullYear(), o = n.getMonth(), a = ye(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function kw(e) {
  return Math.trunc(+ce(e) / 1e3);
}
function Aw(e, t) {
  const n = ce(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(0, 0, 0, 0), ce(n, t?.in);
}
function Dw(e, t) {
  const n = ce(e, t?.in);
  return Oy(
    Aw(n, t),
    Re(n, t),
    t
  ) + 1;
}
function Va(e, t) {
  return +ce(e) > +ce(t);
}
function rd(e, t) {
  return +ce(e) < +ce(t);
}
function Ds(e, t, n) {
  const [r, o] = gn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Iw(e, t, n) {
  const [r, o] = gn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function ba(e, t, n) {
  return we(e, -t, n);
}
function ya(e, t, n) {
  const r = ce(e, n?.in), o = r.getFullYear(), a = r.getDate(), s = ye(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const c = jw(s);
  return r.setMonth(t, Math.min(a, c)), r;
}
function Ec(e, t, n) {
  const r = ce(e, n?.in);
  return isNaN(+r) ? ye(e, NaN) : (r.setFullYear(t), r);
}
const Ow = {
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
}, Lw = (e, t, n) => {
  let r;
  const o = Ow[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r;
}, Fw = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, $w = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Ww = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Vw = {
  date: nn({
    formats: Fw,
    defaultWidth: "full"
  }),
  time: nn({
    formats: $w,
    defaultWidth: "full"
  }),
  dateTime: nn({
    formats: Ww,
    defaultWidth: "full"
  })
}, Bw = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, Hw = (e, t, n, r) => {
  const o = Bw[e];
  return typeof o == "function" ? o(t) : o;
}, zw = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, Gw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Yw = {
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
}, Kw = {
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
}, Uw = {
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
}, qw = {
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
}, Xw = (e, t) => {
  const n = Number(e);
  return t?.unit === "week" ? n + "ª" : n + "º";
}, Qw = {
  ordinalNumber: Xw,
  era: ze({
    values: zw,
    defaultWidth: "wide"
  }),
  quarter: ze({
    values: Gw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ze({
    values: Yw,
    defaultWidth: "wide"
  }),
  day: ze({
    values: Kw,
    defaultWidth: "wide"
  }),
  dayPeriod: ze({
    values: Uw,
    defaultWidth: "wide",
    formattingValues: qw,
    defaultFormattingWidth: "wide"
  })
}, Jw = /^(\d+)[ºªo]?/i, Zw = /\d+/i, eC = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, tC = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, nC = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, rC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, oC = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, aC = {
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
}, sC = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, iC = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, cC = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, lC = {
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
}, uC = {
  ordinalNumber: Qu({
    matchPattern: Jw,
    parsePattern: Zw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ge({
    matchPatterns: eC,
    defaultMatchWidth: "wide",
    parsePatterns: tC,
    defaultParseWidth: "any"
  }),
  quarter: Ge({
    matchPatterns: nC,
    defaultMatchWidth: "wide",
    parsePatterns: rC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ge({
    matchPatterns: oC,
    defaultMatchWidth: "wide",
    parsePatterns: aC,
    defaultParseWidth: "any"
  }),
  day: Ge({
    matchPatterns: sC,
    defaultMatchWidth: "wide",
    parsePatterns: iC,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ge({
    matchPatterns: cC,
    defaultMatchWidth: "any",
    parsePatterns: lC,
    defaultParseWidth: "any"
  })
}, Mn = {
  code: "pt-BR",
  formatDistance: Lw,
  formatLong: Vw,
  formatRelative: Hw,
  localize: Qw,
  match: uC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var re = function() {
  return re = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, re.apply(this, arguments);
};
function dC(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function od(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function tr(e) {
  return e.mode === "multiple";
}
function nr(e) {
  return e.mode === "range";
}
function bo(e) {
  return e.mode === "single";
}
var fC = {
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
function mC(e, t) {
  return Ze(e, "LLLL y", t);
}
function pC(e, t) {
  return Ze(e, "d", t);
}
function hC(e, t) {
  return Ze(e, "LLLL", t);
}
function vC(e) {
  return "".concat(e);
}
function gC(e, t) {
  return Ze(e, "cccccc", t);
}
function xC(e, t) {
  return Ze(e, "yyyy", t);
}
var bC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: mC,
  formatDay: pC,
  formatMonthCaption: hC,
  formatWeekNumber: vC,
  formatWeekdayName: gC,
  formatYearCaption: xC
}), yC = function(e, t, n) {
  return Ze(e, "do MMMM (EEEE)", n);
}, wC = function() {
  return "Month: ";
}, CC = function() {
  return "Go to next month";
}, SC = function() {
  return "Go to previous month";
}, NC = function(e, t) {
  return Ze(e, "cccc", t);
}, EC = function(e) {
  return "Week n. ".concat(e);
}, RC = function() {
  return "Year: ";
}, PC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: yC,
  labelMonthDropdown: wC,
  labelNext: CC,
  labelPrevious: SC,
  labelWeekNumber: EC,
  labelWeekday: NC,
  labelYearDropdown: RC
});
function TC() {
  var e = "buttons", t = fC, n = Ju, r = {}, o = {}, a = 1, s = {}, c = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: bC,
    labels: PC,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: c,
    mode: "default"
  };
}
function _C(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Re(r) : t && (a = new Date(t, 0, 1)), o ? s = ks(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? on(a) : void 0,
    toDate: s ? on(s) : void 0
  };
}
var ad = Wt(void 0);
function MC(e) {
  var t, n = e.initialProps, r = TC(), o = _C(n), a = o.fromDate, s = o.toDate, c = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  c !== "buttons" && (!a || !s) && (c = "buttons");
  var u;
  (bo(n) || tr(n) || nr(n)) && (u = n.onSelect);
  var d = re(re(re({}, r), n), { captionLayout: c, classNames: re(re({}, r.classNames), n.classNames), components: re({}, n.components), formatters: re(re({}, r.formatters), n.formatters), fromDate: a, labels: re(re({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: re(re({}, r.modifiers), n.modifiers), modifiersClassNames: re(re({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: u, styles: re(re({}, r.styles), n.styles), toDate: s });
  return i.jsx(ad.Provider, { value: d, children: e.children });
}
function de() {
  var e = Vt(ad);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function sd(e) {
  var t = de(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return i.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function jC(e) {
  return i.jsx("svg", re({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: i.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function id(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, c = e.className, u = e.style, d = de(), f = (n = (t = d.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : jC;
  return i.jsxs("div", { className: c, style: u, children: [i.jsx("span", { className: d.classNames.vhidden, children: e["aria-label"] }), i.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: d.classNames.dropdown, style: d.styles.dropdown, value: o, onChange: r, children: a }), i.jsxs("div", { className: d.classNames.caption_label, style: d.styles.caption_label, "aria-hidden": "true", children: [s, i.jsx(f, { className: d.classNames.dropdown_icon, style: d.styles.dropdown_icon })] })] });
}
function kC(e) {
  var t, n = de(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, c = n.formatters.formatMonthCaption, u = n.classNames, d = n.components, f = n.labels.labelMonthDropdown;
  if (!r)
    return i.jsx(i.Fragment, {});
  if (!o)
    return i.jsx(i.Fragment, {});
  var m = [];
  if (Iw(r, o))
    for (var p = Re(r), v = r.getMonth(); v <= o.getMonth(); v++)
      m.push(ya(p, v));
  else
    for (var p = Re(/* @__PURE__ */ new Date()), v = 0; v <= 11; v++)
      m.push(ya(p, v));
  var g = function(x) {
    var b = Number(x.target.value), y = ya(Re(e.displayMonth), b);
    e.onChange(y);
  }, h = (t = d?.Dropdown) !== null && t !== void 0 ? t : id;
  return i.jsx(h, { name: "months", "aria-label": f(), className: u.dropdown_month, style: a.dropdown_month, onChange: g, value: e.displayMonth.getMonth(), caption: c(e.displayMonth, { locale: s }), children: m.map(function(x) {
    return i.jsx("option", { value: x.getMonth(), children: c(x, { locale: s }) }, x.getMonth());
  }) });
}
function AC(e) {
  var t, n = e.displayMonth, r = de(), o = r.fromDate, a = r.toDate, s = r.locale, c = r.styles, u = r.classNames, d = r.components, f = r.formatters.formatYearCaption, m = r.labels.labelYearDropdown, p = [];
  if (!o)
    return i.jsx(i.Fragment, {});
  if (!a)
    return i.jsx(i.Fragment, {});
  for (var v = o.getFullYear(), g = a.getFullYear(), h = v; h <= g; h++)
    p.push(Ec(qu(/* @__PURE__ */ new Date()), h));
  var x = function(y) {
    var w = Ec(Re(n), Number(y.target.value));
    e.onChange(w);
  }, b = (t = d?.Dropdown) !== null && t !== void 0 ? t : id;
  return i.jsx(b, { name: "years", "aria-label": m(), className: u.dropdown_year, style: c.dropdown_year, onChange: x, value: n.getFullYear(), caption: f(n, { locale: s }), children: p.map(function(y) {
    return i.jsx("option", { value: y.getFullYear(), children: f(y, { locale: s }) }, y.getFullYear());
  }) });
}
function DC(e, t) {
  var n = Ne(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function IC(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, c = e.numberOfMonths, u = c === void 0 ? 1 : c;
  if (a && In(a, o) < 0) {
    var d = -1 * (u - 1);
    o = Ae(a, d);
  }
  return s && In(o, s) < 0 && (o = s), Re(o);
}
function OC() {
  var e = de(), t = IC(e), n = DC(t, e.month), r = n[0], o = n[1], a = function(s) {
    var c;
    if (!e.disableNavigation) {
      var u = Re(s);
      o(u), (c = e.onMonthChange) === null || c === void 0 || c.call(e, u);
    }
  };
  return [r, a];
}
function LC(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Re(e), a = Re(Ae(o, r)), s = In(a, o), c = [], u = 0; u < s; u++) {
    var d = Ae(o, u);
    c.push(d);
  }
  return n && (c = c.reverse()), c;
}
function FC(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = Re(e);
    if (!n)
      return Ae(c, s);
    var u = In(n, e);
    if (!(u < a))
      return Ae(c, s);
  }
}
function $C(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, c = Re(e);
    if (!n)
      return Ae(c, -s);
    var u = In(c, n);
    if (!(u <= 0))
      return Ae(c, -s);
  }
}
var cd = Wt(void 0);
function WC(e) {
  var t = de(), n = OC(), r = n[0], o = n[1], a = LC(r, t), s = FC(r, t), c = $C(r, t), u = function(m) {
    return a.some(function(p) {
      return Ds(m, p);
    });
  }, d = function(m, p) {
    u(m) || (p && rd(m, p) ? o(Ae(m, 1 + t.numberOfMonths * -1)) : o(m));
  }, f = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: d,
    previousMonth: c,
    nextMonth: s,
    isDateDisplayed: u
  };
  return i.jsx(cd.Provider, { value: f, children: e.children });
}
function rr() {
  var e = Vt(cd);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Rc(e) {
  var t, n = de(), r = n.classNames, o = n.styles, a = n.components, s = rr().goToMonth, c = function(f) {
    s(Ae(f, e.displayIndex ? -e.displayIndex : 0));
  }, u = (t = a?.CaptionLabel) !== null && t !== void 0 ? t : sd, d = i.jsx(u, { id: e.id, displayMonth: e.displayMonth });
  return i.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [i.jsx("div", { className: r.vhidden, children: d }), i.jsx(kC, { onChange: c, displayMonth: e.displayMonth }), i.jsx(AC, { onChange: c, displayMonth: e.displayMonth })] });
}
function VC(e) {
  return i.jsx("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: i.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function BC(e) {
  return i.jsx("svg", re({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: i.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Kr = zv(function(e, t) {
  var n = de(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), c = re(re({}, o.button_reset), o.button);
  return e.style && Object.assign(c, e.style), i.jsx("button", re({}, e, { ref: t, type: "button", className: s, style: c }));
});
function HC(e) {
  var t, n, r = de(), o = r.dir, a = r.locale, s = r.classNames, c = r.styles, u = r.labels, d = u.labelPrevious, f = u.labelNext, m = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return i.jsx(i.Fragment, {});
  var p = d(e.previousMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), g = f(e.nextMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), x = (t = m?.IconRight) !== null && t !== void 0 ? t : BC, b = (n = m?.IconLeft) !== null && n !== void 0 ? n : VC;
  return i.jsxs("div", { className: s.nav, style: c.nav, children: [!e.hidePrevious && i.jsx(Kr, { name: "previous-month", "aria-label": p, className: v, style: c.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? i.jsx(x, { className: s.nav_icon, style: c.nav_icon }) : i.jsx(b, { className: s.nav_icon, style: c.nav_icon }) }), !e.hideNext && i.jsx(Kr, { name: "next-month", "aria-label": g, className: h, style: c.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? i.jsx(b, { className: s.nav_icon, style: c.nav_icon }) : i.jsx(x, { className: s.nav_icon, style: c.nav_icon }) })] });
}
function Pc(e) {
  var t = de().numberOfMonths, n = rr(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, c = s.findIndex(function(g) {
    return Ds(e.displayMonth, g);
  }), u = c === 0, d = c === s.length - 1, f = t > 1 && (u || !d), m = t > 1 && (d || !u), p = function() {
    r && a(r);
  }, v = function() {
    o && a(o);
  };
  return i.jsx(HC, { displayMonth: e.displayMonth, hideNext: f, hidePrevious: m, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: v });
}
function zC(e) {
  var t, n = de(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, c = n.components, u = (t = c?.CaptionLabel) !== null && t !== void 0 ? t : sd, d;
  return o ? d = i.jsx(u, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? d = i.jsx(Rc, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? d = i.jsxs(i.Fragment, { children: [i.jsx(Rc, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), i.jsx(Pc, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : d = i.jsxs(i.Fragment, { children: [i.jsx(u, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), i.jsx(Pc, { displayMonth: e.displayMonth, id: e.id })] }), i.jsx("div", { className: r.caption, style: a.caption, children: d });
}
function GC(e) {
  var t = de(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? i.jsx("tfoot", { className: o, style: r.tfoot, children: i.jsx("tr", { children: i.jsx("td", { colSpan: 8, children: n }) }) }) : i.jsx(i.Fragment, {});
}
function YC(e, t, n) {
  for (var r = n ? Dt(/* @__PURE__ */ new Date()) : Xe(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = we(r, a);
    o.push(s);
  }
  return o;
}
function KC() {
  var e = de(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, c = e.formatters.formatWeekdayName, u = e.labels.labelWeekday, d = YC(o, a, s);
  return i.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && i.jsx("td", { style: n.head_cell, className: t.head_cell }), d.map(function(f, m) {
    return i.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": u(f, { locale: o }), children: c(f, { locale: o }) }, m);
  })] });
}
function UC() {
  var e, t = de(), n = t.classNames, r = t.styles, o = t.components, a = (e = o?.HeadRow) !== null && e !== void 0 ? e : KC;
  return i.jsx("thead", { style: r.head, className: n.head, children: i.jsx(a, {}) });
}
function qC(e) {
  var t = de(), n = t.locale, r = t.formatters.formatDay;
  return i.jsx(i.Fragment, { children: r(e.date, { locale: n }) });
}
var Is = Wt(void 0);
function XC(e) {
  if (!tr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return i.jsx(Is.Provider, { value: t, children: e.children });
  }
  return i.jsx(QC, { initialProps: e.initialProps, children: e.children });
}
function QC(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(d, f, m) {
    var p, v;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, d, f, m);
    var g = !!(f.selected && o && r?.length === o);
    if (!g) {
      var h = !!(!f.selected && a && r?.length === a);
      if (!h) {
        var x = r ? od([], r) : [];
        if (f.selected) {
          var b = x.findIndex(function(y) {
            return Ee(d, y);
          });
          x.splice(b, 1);
        } else
          x.push(d);
        (v = t.onSelect) === null || v === void 0 || v.call(t, x, d, f, m);
      }
    }
  }, c = {
    disabled: []
  };
  r && c.disabled.push(function(d) {
    var f = a && r.length > a - 1, m = r.some(function(p) {
      return Ee(p, d);
    });
    return !!(f && !m);
  });
  var u = {
    selected: r,
    onDayClick: s,
    modifiers: c
  };
  return i.jsx(Is.Provider, { value: u, children: n });
}
function Os() {
  var e = Vt(Is);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function JC(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Ee(o, e) && Ee(r, e) ? void 0 : Ee(o, e) ? { from: o, to: void 0 } : Ee(r, e) ? void 0 : Va(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Va(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? rd(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Ls = Wt(void 0);
function ZC(e) {
  if (!nr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return i.jsx(Ls.Provider, { value: t, children: e.children });
  }
  return i.jsx(eS, { initialProps: e.initialProps, children: e.children });
}
function eS(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, c = t.min, u = t.max, d = function(v, g, h) {
    var x, b;
    (x = t.onDayClick) === null || x === void 0 || x.call(t, v, g, h);
    var y = JC(v, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, v, g, h);
  }, f = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (f.range_start = [a], s ? (f.range_end = [s], Ee(a, s) || (f.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : f.range_end = [a]) : s && (f.range_start = [s], f.range_end = [s]), c && (a && !s && f.disabled.push({
    after: ba(a, c - 1),
    before: we(a, c - 1)
  }), a && s && f.disabled.push({
    after: a,
    before: we(a, c - 1)
  }), !a && s && f.disabled.push({
    after: ba(s, c - 1),
    before: we(s, c - 1)
  })), u) {
    if (a && !s && (f.disabled.push({
      before: we(a, -u + 1)
    }), f.disabled.push({
      after: we(a, u - 1)
    })), a && s) {
      var m = Ye(s, a) + 1, p = u - m;
      f.disabled.push({
        before: ba(a, p)
      }), f.disabled.push({
        after: we(s, p)
      });
    }
    !a && s && (f.disabled.push({
      before: we(s, -u + 1)
    }), f.disabled.push({
      after: we(s, u - 1)
    }));
  }
  return i.jsx(Ls.Provider, { value: { selected: r, onDayClick: d, modifiers: f }, children: n });
}
function Fs() {
  var e = Vt(Ls);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Lr(e) {
  return Array.isArray(e) ? od([], e) : e !== void 0 ? [e] : [];
}
function tS(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Lr(o);
  }), t;
}
var Fe;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Fe || (Fe = {}));
var nS = Fe.Selected, rt = Fe.Disabled, rS = Fe.Hidden, oS = Fe.Today, wa = Fe.RangeEnd, Ca = Fe.RangeMiddle, Sa = Fe.RangeStart, aS = Fe.Outside;
function sS(e, t, n) {
  var r, o = (r = {}, r[nS] = Lr(e.selected), r[rt] = Lr(e.disabled), r[rS] = Lr(e.hidden), r[oS] = [e.today], r[wa] = [], r[Ca] = [], r[Sa] = [], r[aS] = [], r);
  return e.fromDate && o[rt].push({ before: e.fromDate }), e.toDate && o[rt].push({ after: e.toDate }), tr(e) ? o[rt] = o[rt].concat(t.modifiers[rt]) : nr(e) && (o[rt] = o[rt].concat(n.modifiers[rt]), o[Sa] = n.modifiers[Sa], o[Ca] = n.modifiers[Ca], o[wa] = n.modifiers[wa]), o;
}
var ld = Wt(void 0);
function iS(e) {
  var t = de(), n = Os(), r = Fs(), o = sS(t, n, r), a = tS(t.modifiers), s = re(re({}, o), a);
  return i.jsx(ld.Provider, { value: s, children: e.children });
}
function ud() {
  var e = Vt(ld);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function cS(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function lS(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function uS(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function dS(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function fS(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function mS(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = Ye(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = Ye(e, r) >= 0 && Ye(o, e) >= 0;
    return s;
  }
  return o ? Ee(o, e) : r ? Ee(r, e) : !1;
}
function pS(e) {
  return js(e);
}
function hS(e) {
  return Array.isArray(e) && e.every(js);
}
function vS(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (pS(n))
      return Ee(e, n);
    if (hS(n))
      return n.includes(e);
    if (lS(n))
      return mS(e, n);
    if (fS(n))
      return n.dayOfWeek.includes(e.getDay());
    if (cS(n)) {
      var r = Ye(n.before, e), o = Ye(n.after, e), a = r > 0, s = o < 0, c = Va(n.before, n.after);
      return c ? s && a : a || s;
    }
    return uS(n) ? Ye(e, n.after) > 0 : dS(n) ? Ye(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function $s(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var c = t[s];
    return vS(e, c) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Ds(e, n) && (o.outside = !0), o;
}
function gS(e, t) {
  for (var n = Re(e[0]), r = ks(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var c = $s(s, t), u = !c.disabled && !c.hidden;
    if (!u) {
      s = we(s, 1);
      continue;
    }
    if (c.selected)
      return s;
    c.today && !a && (a = s), o || (o = s), s = we(s, 1);
  }
  return a || o;
}
var xS = 365;
function dd(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, c = s === void 0 ? { count: 0, lastFocused: e } : s, u = o.weekStartsOn, d = o.fromDate, f = o.toDate, m = o.locale, p = {
    day: we,
    week: Wa,
    month: Ae,
    year: ky,
    startOfWeek: function(x) {
      return o.ISOWeek ? Dt(x) : Xe(x, { locale: m, weekStartsOn: u });
    },
    endOfWeek: function(x) {
      return o.ISOWeek ? Xu(x) : As(x, { locale: m, weekStartsOn: u });
    }
  }, v = p[n](e, r === "after" ? 1 : -1);
  r === "before" && d ? v = Ay([d, v]) : r === "after" && f && (v = Dy([f, v]));
  var g = !0;
  if (a) {
    var h = $s(v, a);
    g = !h.disabled && !h.hidden;
  }
  return g ? v : c.count > xS ? c.lastFocused : dd(v, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: re(re({}, c), { count: c.count + 1 })
  });
}
var fd = Wt(void 0);
function bS(e) {
  var t = rr(), n = ud(), r = Ne(), o = r[0], a = r[1], s = Ne(), c = s[0], u = s[1], d = gS(t.displayMonths, n), f = o ?? (c && t.isDateDisplayed(c)) ? c : d, m = function() {
    u(o), a(void 0);
  }, p = function(x) {
    a(x);
  }, v = de(), g = function(x, b) {
    if (o) {
      var y = dd(o, {
        moveBy: x,
        direction: b,
        context: v,
        modifiers: n
      });
      Ee(o, y) || (t.goToDate(y, o), p(y));
    }
  }, h = {
    focusedDay: o,
    focusTarget: f,
    blur: m,
    focus: p,
    focusDayAfter: function() {
      return g("day", "after");
    },
    focusDayBefore: function() {
      return g("day", "before");
    },
    focusWeekAfter: function() {
      return g("week", "after");
    },
    focusWeekBefore: function() {
      return g("week", "before");
    },
    focusMonthBefore: function() {
      return g("month", "before");
    },
    focusMonthAfter: function() {
      return g("month", "after");
    },
    focusYearBefore: function() {
      return g("year", "before");
    },
    focusYearAfter: function() {
      return g("year", "after");
    },
    focusStartOfWeek: function() {
      return g("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return g("endOfWeek", "after");
    }
  };
  return i.jsx(fd.Provider, { value: h, children: e.children });
}
function Ws() {
  var e = Vt(fd);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function yS(e, t) {
  var n = ud(), r = $s(e, n, t);
  return r;
}
var Vs = Wt(void 0);
function wS(e) {
  if (!bo(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return i.jsx(Vs.Provider, { value: t, children: e.children });
  }
  return i.jsx(CS, { initialProps: e.initialProps, children: e.children });
}
function CS(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, c) {
    var u, d, f;
    if ((u = t.onDayClick) === null || u === void 0 || u.call(t, a, s, c), s.selected && !t.required) {
      (d = t.onSelect) === null || d === void 0 || d.call(t, void 0, a, s, c);
      return;
    }
    (f = t.onSelect) === null || f === void 0 || f.call(t, a, a, s, c);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return i.jsx(Vs.Provider, { value: o, children: n });
}
function md() {
  var e = Vt(Vs);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function SS(e, t) {
  var n = de(), r = md(), o = Os(), a = Fs(), s = Ws(), c = s.focusDayAfter, u = s.focusDayBefore, d = s.focusWeekAfter, f = s.focusWeekBefore, m = s.blur, p = s.focus, v = s.focusMonthBefore, g = s.focusMonthAfter, h = s.focusYearBefore, x = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, w = function(D) {
    var P, $, j, Y;
    bo(n) ? (P = r.onDayClick) === null || P === void 0 || P.call(r, e, t, D) : tr(n) ? ($ = o.onDayClick) === null || $ === void 0 || $.call(o, e, t, D) : nr(n) ? (j = a.onDayClick) === null || j === void 0 || j.call(a, e, t, D) : (Y = n.onDayClick) === null || Y === void 0 || Y.call(n, e, t, D);
  }, C = function(D) {
    var P;
    p(e), (P = n.onDayFocus) === null || P === void 0 || P.call(n, e, t, D);
  }, S = function(D) {
    var P;
    m(), (P = n.onDayBlur) === null || P === void 0 || P.call(n, e, t, D);
  }, N = function(D) {
    var P;
    (P = n.onDayMouseEnter) === null || P === void 0 || P.call(n, e, t, D);
  }, R = function(D) {
    var P;
    (P = n.onDayMouseLeave) === null || P === void 0 || P.call(n, e, t, D);
  }, E = function(D) {
    var P;
    (P = n.onDayPointerEnter) === null || P === void 0 || P.call(n, e, t, D);
  }, _ = function(D) {
    var P;
    (P = n.onDayPointerLeave) === null || P === void 0 || P.call(n, e, t, D);
  }, O = function(D) {
    var P;
    (P = n.onDayTouchCancel) === null || P === void 0 || P.call(n, e, t, D);
  }, F = function(D) {
    var P;
    (P = n.onDayTouchEnd) === null || P === void 0 || P.call(n, e, t, D);
  }, U = function(D) {
    var P;
    (P = n.onDayTouchMove) === null || P === void 0 || P.call(n, e, t, D);
  }, Q = function(D) {
    var P;
    (P = n.onDayTouchStart) === null || P === void 0 || P.call(n, e, t, D);
  }, k = function(D) {
    var P;
    (P = n.onDayKeyUp) === null || P === void 0 || P.call(n, e, t, D);
  }, G = function(D) {
    var P;
    switch (D.key) {
      case "ArrowLeft":
        D.preventDefault(), D.stopPropagation(), n.dir === "rtl" ? c() : u();
        break;
      case "ArrowRight":
        D.preventDefault(), D.stopPropagation(), n.dir === "rtl" ? u() : c();
        break;
      case "ArrowDown":
        D.preventDefault(), D.stopPropagation(), d();
        break;
      case "ArrowUp":
        D.preventDefault(), D.stopPropagation(), f();
        break;
      case "PageUp":
        D.preventDefault(), D.stopPropagation(), D.shiftKey ? h() : v();
        break;
      case "PageDown":
        D.preventDefault(), D.stopPropagation(), D.shiftKey ? x() : g();
        break;
      case "Home":
        D.preventDefault(), D.stopPropagation(), b();
        break;
      case "End":
        D.preventDefault(), D.stopPropagation(), y();
        break;
    }
    (P = n.onDayKeyDown) === null || P === void 0 || P.call(n, e, t, D);
  }, V = {
    onClick: w,
    onFocus: C,
    onBlur: S,
    onKeyDown: G,
    onKeyUp: k,
    onMouseEnter: N,
    onMouseLeave: R,
    onPointerEnter: E,
    onPointerLeave: _,
    onTouchCancel: O,
    onTouchEnd: F,
    onTouchMove: U,
    onTouchStart: Q
  };
  return V;
}
function NS() {
  var e = de(), t = md(), n = Os(), r = Fs(), o = bo(e) ? t.selected : tr(e) ? n.selected : nr(e) ? r.selected : void 0;
  return o;
}
function ES(e) {
  return Object.values(Fe).includes(e);
}
function RS(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (ES(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function PS(e, t) {
  var n = re({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = re(re({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function TS(e, t, n) {
  var r, o, a, s = de(), c = Ws(), u = yS(e, t), d = SS(e, u), f = NS(), m = !!(s.onDayClick || s.mode !== "default");
  je(function() {
    var N;
    u.outside || c.focusedDay && m && Ee(c.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    c.focusedDay,
    e,
    n,
    m,
    u.outside
  ]);
  var p = RS(s, u).join(" "), v = PS(s, u), g = !!(u.outside && !s.showOutsideDays || u.hidden), h = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : qC, x = i.jsx(h, { date: e, displayMonth: t, activeModifiers: u }), b = {
    style: v,
    className: p,
    children: x,
    role: "gridcell"
  }, y = c.focusTarget && Ee(c.focusTarget, e) && !u.outside, w = c.focusedDay && Ee(c.focusedDay, e), C = re(re(re({}, b), (r = { disabled: u.disabled, role: "gridcell" }, r["aria-selected"] = u.selected, r.tabIndex = w || y ? 0 : -1, r)), d), S = {
    isButton: m,
    isHidden: g,
    activeModifiers: u,
    selectedDays: f,
    buttonProps: C,
    divProps: b
  };
  return S;
}
function _S(e) {
  var t = Hr(null), n = TS(e.date, e.displayMonth, t);
  return n.isHidden ? i.jsx("div", { role: "gridcell" }) : n.isButton ? i.jsx(Kr, re({ name: "day", ref: t }, n.buttonProps)) : i.jsx("div", re({}, n.divProps));
}
function MS(e) {
  var t = e.number, n = e.dates, r = de(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, c = r.locale, u = r.labels.labelWeekNumber, d = r.formatters.formatWeekNumber, f = d(Number(t), { locale: c });
  if (!o)
    return i.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: f });
  var m = u(Number(t), { locale: c }), p = function(v) {
    o(t, n, v);
  };
  return i.jsx(Kr, { name: "week-number", "aria-label": m, className: s.weeknumber, style: a.weeknumber, onClick: p, children: f });
}
function jS(e) {
  var t, n, r = de(), o = r.styles, a = r.classNames, s = r.showWeekNumber, c = r.components, u = (t = c?.Day) !== null && t !== void 0 ? t : _S, d = (n = c?.WeekNumber) !== null && n !== void 0 ? n : MS, f;
  return s && (f = i.jsx("td", { className: a.cell, style: o.cell, children: i.jsx(d, { number: e.weekNumber, dates: e.dates }) })), i.jsxs("tr", { className: a.row, style: o.row, children: [f, e.dates.map(function(m) {
    return i.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: i.jsx(u, { displayMonth: e.displayMonth, date: m }) }, kw(m));
  })] });
}
function Tc(e, t, n) {
  for (var r = n?.ISOWeek ? Xu(t) : As(t, n), o = n?.ISOWeek ? Dt(e) : Xe(e, n), a = Ye(r, o), s = [], c = 0; c <= a; c++)
    s.push(we(o, c));
  var u = s.reduce(function(d, f) {
    var m = n?.ISOWeek ? Zu(f) : td(f, n), p = d.find(function(v) {
      return v.weekNumber === m;
    });
    return p ? (p.dates.push(f), d) : (d.push({
      weekNumber: m,
      dates: [f]
    }), d);
  }, []);
  return u;
}
function kS(e, t) {
  var n = Tc(Re(e), ks(e), t);
  if (t?.useFixedWeeks) {
    var r = Dw(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Wa(a, 6 - r), c = Tc(Wa(a, 1), s, t);
      n.push.apply(n, c);
    }
  }
  return n;
}
function AS(e) {
  var t, n, r, o = de(), a = o.locale, s = o.classNames, c = o.styles, u = o.hideHead, d = o.fixedWeeks, f = o.components, m = o.weekStartsOn, p = o.firstWeekContainsDate, v = o.ISOWeek, g = kS(e.displayMonth, {
    useFixedWeeks: !!d,
    ISOWeek: v,
    locale: a,
    weekStartsOn: m,
    firstWeekContainsDate: p
  }), h = (t = f?.Head) !== null && t !== void 0 ? t : UC, x = (n = f?.Row) !== null && n !== void 0 ? n : jS, b = (r = f?.Footer) !== null && r !== void 0 ? r : GC;
  return i.jsxs("table", { id: e.id, className: s.table, style: c.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!u && i.jsx(h, {}), i.jsx("tbody", { className: s.tbody, style: c.tbody, children: g.map(function(y) {
    return i.jsx(x, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), i.jsx(b, { displayMonth: e.displayMonth })] });
}
function DS() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var IS = DS() ? al : je, Na = !1, OS = 0;
function _c() {
  return "react-day-picker-".concat(++OS);
}
function LS(e) {
  var t, n = e ?? (Na ? _c() : null), r = Ne(n), o = r[0], a = r[1];
  return IS(function() {
    o === null && a(_c());
  }, []), je(function() {
    Na === !1 && (Na = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function FS(e) {
  var t, n, r = de(), o = r.dir, a = r.classNames, s = r.styles, c = r.components, u = rr().displayMonths, d = LS(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), f = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, m = [a.month], p = s.month, v = e.displayIndex === 0, g = e.displayIndex === u.length - 1, h = !v && !g;
  o === "rtl" && (t = [v, g], g = t[0], v = t[1]), v && (m.push(a.caption_start), p = re(re({}, p), s.caption_start)), g && (m.push(a.caption_end), p = re(re({}, p), s.caption_end)), h && (m.push(a.caption_between), p = re(re({}, p), s.caption_between));
  var x = (n = c?.Caption) !== null && n !== void 0 ? n : zC;
  return i.jsxs("div", { className: m.join(" "), style: p, children: [i.jsx(x, { id: d, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), i.jsx(AS, { id: f, "aria-labelledby": d, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function $S(e) {
  var t = de(), n = t.classNames, r = t.styles;
  return i.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function WS(e) {
  var t, n, r = e.initialProps, o = de(), a = Ws(), s = rr(), c = Ne(!1), u = c[0], d = c[1];
  je(function() {
    o.initialFocus && a.focusTarget && (u || (a.focus(a.focusTarget), d(!0)));
  }, [
    o.initialFocus,
    u,
    a.focus,
    a.focusTarget,
    a
  ]);
  var f = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && f.push(o.classNames.multiple_months), o.showWeekNumber && f.push(o.classNames.with_weeknumber);
  var m = re(re({}, o.styles.root), o.style), p = Object.keys(r).filter(function(g) {
    return g.startsWith("data-");
  }).reduce(function(g, h) {
    var x;
    return re(re({}, g), (x = {}, x[h] = r[h], x));
  }, {}), v = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : $S;
  return i.jsx("div", re({ className: f.join(" "), style: m, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: i.jsx(v, { children: s.displayMonths.map(function(g, h) {
    return i.jsx(FS, { displayIndex: h, displayMonth: g }, h);
  }) }) }));
}
function VS(e) {
  var t = e.children, n = dC(e, ["children"]);
  return i.jsx(MC, { initialProps: n, children: i.jsx(WC, { children: i.jsx(wS, { initialProps: n, children: i.jsx(XC, { initialProps: n, children: i.jsx(ZC, { initialProps: n, children: i.jsx(iS, { children: i.jsx(bS, { children: t }) }) }) }) }) }) });
}
function pd(e) {
  return i.jsx(VS, re({}, e, { children: i.jsx(WS, { initialProps: e }) }));
}
const BS = "(##) ####-####", HS = "(##) #####-####", zS = "#####-###", GS = "###.###.###-##", YS = "##.###.###/####-##", KS = "###########", US = "##.###.###-#", qS = "AAA#A##", XS = "###########", QS = "##############", hd = (e, t) => {
  let n = "", r = 0;
  for (let o = 0; o < t.length; o++) {
    const a = e[r];
    if (a === void 0)
      break;
    switch (t[o]) {
      case "#":
        if (!/\d/.test(a))
          return n;
        n += a, r++;
        break;
      case "A":
        if (!/[a-zA-Z]/.test(a))
          return n;
        n += a, r++;
        break;
      case "*":
        /[a-zA-Z0-9]/.test(a) && (n += e[r]), r++;
        break;
      default:
        n += t[o], t[o] === a && r++;
    }
  }
  return n;
}, Mj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: HS,
  CNH_MASK: KS,
  CNPJ_MASK: YS,
  CPF_MASK: GS,
  PHONE_MASK: BS,
  PLATE_MASK: qS,
  RENAVAM_MASK: XS,
  RG_MASK: US,
  RNTRC_MASK: QS,
  ZIP_CODE_MASK: zS,
  formatMask: hd
}, Symbol.toStringTag, { value: "Module" })), jj = [
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
function vd({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ i.jsx(
    pd,
    {
      showOutsideDays: n,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          ot({ variant: "outline" }),
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
          r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: T(
          ot({ variant: "ghost" }),
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
        IconLeft: ({ className: o, ...a }) => /* @__PURE__ */ i.jsx(hs, { className: T("h-4 w-4", o), ...a }),
        IconRight: ({ className: o, ...a }) => /* @__PURE__ */ i.jsx(Un, { className: T("h-4 w-4", o), ...a })
      },
      ...r
    }
  );
}
vd.displayName = "Calendar";
const JS = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: T(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
JS.displayName = "Card";
const ZS = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: T("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
ZS.displayName = "CardHeader";
const e0 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "h3",
  {
    ref: n,
    className: T(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
e0.displayName = "CardTitle";
const t0 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "p",
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
t0.displayName = "CardDescription";
const n0 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx("div", { ref: n, className: T("p-4", e), ...t }));
n0.displayName = "CardContent";
const r0 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ref: n,
    className: T("flex items-center p-4 pt-0", e),
    ...t
  }
));
r0.displayName = "CardFooter";
function o0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Mc(e) {
  return o0(e) || Array.isArray(e);
}
function a0() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Bs(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const c = e[s], u = t[s];
    return typeof c == "function" ? `${c}` == `${u}` : !Mc(c) || !Mc(u) ? c === u : Bs(c, u);
  });
}
function jc(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function s0(e, t) {
  if (e.length !== t.length) return !1;
  const n = jc(e), r = jc(t);
  return n.every((o, a) => {
    const s = r[a];
    return Bs(o, s);
  });
}
function Hs(e) {
  return typeof e == "number";
}
function Ba(e) {
  return typeof e == "string";
}
function yo(e) {
  return typeof e == "boolean";
}
function kc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function he(e) {
  return Math.abs(e);
}
function zs(e) {
  return Math.sign(e);
}
function jn(e, t) {
  return he(e - t);
}
function i0(e, t) {
  if (e === 0 || t === 0 || he(e) <= he(t)) return 0;
  const n = jn(he(e), he(t));
  return he(n / e);
}
function c0(e) {
  return Math.round(e * 100) / 100;
}
function On(e) {
  return Ln(e).map(Number);
}
function Le(e) {
  return e[or(e)];
}
function or(e) {
  return Math.max(0, e.length - 1);
}
function Gs(e, t) {
  return t === or(e);
}
function Ac(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ln(e) {
  return Object.keys(e);
}
function gd(e, t) {
  return [e, t].reduce((n, r) => (Ln(r).forEach((o) => {
    const a = n[o], s = r[o], c = kc(a) && kc(s);
    n[o] = c ? gd(a, s) : s;
  }), n), {});
}
function Ha(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function l0(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(u) {
    return a(u) / 2;
  }
  function a(u) {
    return t - u;
  }
  function s(u, d) {
    return Ba(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: s
  };
}
function Fn() {
  let e = [];
  function t(o, a, s, c = {
    passive: !0
  }) {
    let u;
    if ("addEventListener" in o)
      o.addEventListener(a, s, c), u = () => o.removeEventListener(a, s, c);
    else {
      const d = o;
      d.addListener(s), u = () => d.removeListener(s);
    }
    return e.push(u), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function u0(e, t, n, r) {
  const o = Fn(), a = 1e3 / 60;
  let s = null, c = 0, u = 0;
  function d() {
    o.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function f() {
    v(), o.clear();
  }
  function m(x) {
    if (!u) return;
    s || (s = x, n(), n());
    const b = x - s;
    for (s = x, c += b; c >= a; )
      n(), c -= a;
    const y = c / a;
    r(y), u && (u = t.requestAnimationFrame(m));
  }
  function p() {
    u || (u = t.requestAnimationFrame(m));
  }
  function v() {
    t.cancelAnimationFrame(u), s = null, c = 0, u = 0;
  }
  function g() {
    s = null, c = 0;
  }
  return {
    init: d,
    destroy: f,
    start: p,
    stop: v,
    update: n,
    render: r
  };
}
function d0(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", s = !r && n ? -1 : 1, c = f(), u = m();
  function d(g) {
    const {
      height: h,
      width: x
    } = g;
    return r ? h : x;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function m() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(g) {
    return g * s;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: c,
    endEdge: u,
    measureSize: d,
    direction: p
  };
}
function It(e = 0, t = 0) {
  const n = he(e - t);
  function r(d) {
    return d < e;
  }
  function o(d) {
    return d > t;
  }
  function a(d) {
    return r(d) || o(d);
  }
  function s(d) {
    return a(d) ? r(d) ? e : t : d;
  }
  function c(d) {
    return n ? d - n * Math.ceil((d - t) / n) : d;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: c
  };
}
function xd(e, t, n) {
  const {
    constrain: r
  } = It(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? he((o + p) % o) : r(p);
  }
  function c() {
    return a;
  }
  function u(p) {
    return a = s(p), m;
  }
  function d(p) {
    return f().set(c() + p);
  }
  function f() {
    return xd(e, c(), n);
  }
  const m = {
    get: c,
    set: u,
    add: d,
    clone: f
  };
  return m;
}
function f0(e, t, n, r, o, a, s, c, u, d, f, m, p, v, g, h, x, b, y) {
  const {
    cross: w,
    direction: C
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, R = Fn(), E = Fn(), _ = It(50, 225).constrain(v.measure(20)), O = {
    mouse: 300,
    touch: 400
  }, F = {
    mouse: 500,
    touch: 600
  }, U = g ? 43 : 25;
  let Q = !1, k = 0, G = 0, V = !1, D = !1, P = !1, $ = !1;
  function j(H) {
    if (!y) return;
    function oe(xe) {
      (yo(y) || y(H, xe)) && Z(xe);
    }
    const ue = t;
    R.add(ue, "dragstart", (xe) => xe.preventDefault(), N).add(ue, "touchmove", () => {
    }, N).add(ue, "touchend", () => {
    }).add(ue, "touchstart", oe).add(ue, "mousedown", oe).add(ue, "touchcancel", K).add(ue, "contextmenu", K).add(ue, "click", te, !0);
  }
  function Y() {
    R.clear(), E.clear();
  }
  function M() {
    const H = $ ? n : t;
    E.add(H, "touchmove", A, N).add(H, "touchend", K).add(H, "mousemove", A, N).add(H, "mouseup", K);
  }
  function L(H) {
    const oe = H.nodeName || "";
    return S.includes(oe);
  }
  function z() {
    return (g ? F : O)[$ ? "mouse" : "touch"];
  }
  function B(H, oe) {
    const ue = m.add(zs(H) * -1), xe = f.byDistance(H, !g).distance;
    return g || he(H) < _ ? xe : x && oe ? xe * 0.5 : f.byIndex(ue.get(), 0).distance;
  }
  function Z(H) {
    const oe = Ha(H, r);
    $ = oe, P = g && oe && !H.buttons && Q, Q = jn(o.get(), s.get()) >= 2, !(oe && H.button !== 0) && (L(H.target) || (V = !0, a.pointerDown(H), d.useFriction(0).useDuration(0), o.set(s), M(), k = a.readPoint(H), G = a.readPoint(H, w), p.emit("pointerDown")));
  }
  function A(H) {
    if (!Ha(H, r) && H.touches.length >= 2) return K(H);
    const ue = a.readPoint(H), xe = a.readPoint(H, w), Se = jn(ue, k), Te = jn(xe, G);
    if (!D && !$ && (!H.cancelable || (D = Se > Te, !D)))
      return K(H);
    const Tt = a.pointerMove(H);
    Se > h && (P = !0), d.useFriction(0.3).useDuration(0.75), c.start(), o.add(C(Tt)), H.preventDefault();
  }
  function K(H) {
    const ue = f.byDistance(0, !1).index !== m.get(), xe = a.pointerUp(H) * z(), Se = B(C(xe), ue), Te = i0(xe, Se), Tt = U - 10 * Te, lt = b + Te / 50;
    D = !1, V = !1, E.clear(), d.useDuration(Tt).useFriction(lt), u.distance(Se, !g), $ = !1, p.emit("pointerUp");
  }
  function te(H) {
    P && (H.stopPropagation(), H.preventDefault(), P = !1);
  }
  function ne() {
    return V;
  }
  return {
    init: j,
    destroy: Y,
    pointerDown: ne
  };
}
function m0(e, t) {
  let r, o;
  function a(m) {
    return m.timeStamp;
  }
  function s(m, p) {
    const g = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ha(m, t) ? m : m.touches[0])[g];
  }
  function c(m) {
    return r = m, o = m, s(m);
  }
  function u(m) {
    const p = s(m) - s(o), v = a(m) - a(r) > 170;
    return o = m, v && (r = m), p;
  }
  function d(m) {
    if (!r || !o) return 0;
    const p = s(o) - s(r), v = a(m) - a(r), g = a(m) - a(o) > 170, h = p / v;
    return v && !g && he(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: c,
    pointerMove: u,
    pointerUp: d,
    readPoint: s
  };
}
function p0() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: s
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + s,
      left: o,
      width: a,
      height: s
    };
  }
  return {
    measure: e
  };
}
function h0(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function v0(e, t, n, r, o, a, s) {
  const c = [e].concat(r);
  let u, d, f = [], m = !1;
  function p(x) {
    return o.measureSize(s.measure(x));
  }
  function v(x) {
    if (!a) return;
    d = p(e), f = r.map(p);
    function b(y) {
      for (const w of y) {
        if (m) return;
        const C = w.target === e, S = r.indexOf(w.target), N = C ? d : f[S], R = p(C ? e : r[S]);
        if (he(R - N) >= 0.5) {
          x.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((y) => {
      (yo(a) || a(x, y)) && b(y);
    }), n.requestAnimationFrame(() => {
      c.forEach((y) => u.observe(y));
    });
  }
  function g() {
    m = !0, u && u.disconnect();
  }
  return {
    init: v,
    destroy: g
  };
}
function g0(e, t, n, r, o, a) {
  let s = 0, c = 0, u = o, d = a, f = e.get(), m = 0;
  function p() {
    const N = r.get() - e.get(), R = !u;
    let E = 0;
    return R ? (s = 0, n.set(r), e.set(r), E = N) : (n.set(e), s += N / u, s *= d, f += s, e.add(s), E = f - m), c = zs(E), m = f, S;
  }
  function v() {
    const N = r.get() - t.get();
    return he(N) < 1e-3;
  }
  function g() {
    return u;
  }
  function h() {
    return c;
  }
  function x() {
    return s;
  }
  function b() {
    return w(o);
  }
  function y() {
    return C(a);
  }
  function w(N) {
    return u = N, S;
  }
  function C(N) {
    return d = N, S;
  }
  const S = {
    direction: h,
    duration: g,
    velocity: x,
    seek: p,
    settled: v,
    useBaseFriction: y,
    useBaseDuration: b,
    useFriction: C,
    useDuration: w
  };
  return S;
}
function x0(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), c = It(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(v) {
    if (!d()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max", h = he(e[g] - t.get()), x = n.get() - t.get(), b = c.constrain(h / s);
    n.subtract(x * b), !v && he(x) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function m(v) {
    u = !v;
  }
  return {
    shouldConstrain: d,
    constrain: f,
    toggleActive: m
  };
}
function b0(e, t, n, r, o) {
  const a = It(-t + e, 0), s = m(), c = f(), u = p();
  function d(g, h) {
    return jn(g, h) <= 1;
  }
  function f() {
    const g = s[0], h = Le(s), x = s.lastIndexOf(g), b = s.indexOf(h) + 1;
    return It(x, b);
  }
  function m() {
    return n.map((g, h) => {
      const {
        min: x,
        max: b
      } = a, y = a.constrain(g), w = !h, C = Gs(n, h);
      return w ? b : C || d(x, y) ? x : d(b, y) ? b : y;
    }).map((g) => parseFloat(g.toFixed(3)));
  }
  function p() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return s;
    const {
      min: g,
      max: h
    } = c;
    return s.slice(g, h);
  }
  return {
    snapsContained: u,
    scrollContainLimit: c
  };
}
function y0(e, t, n) {
  const r = t[0], o = n ? r - e : Le(t);
  return {
    limit: It(o, r)
  };
}
function w0(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: c,
    reachedMax: u
  } = It(a, s);
  function d(p) {
    return p === 1 ? u(n.get()) : p === -1 ? c(n.get()) : !1;
  }
  function f(p) {
    if (!d(p)) return;
    const v = e * (p * -1);
    r.forEach((g) => g.add(v));
  }
  return {
    loop: f
  };
}
function C0(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const s = a - t;
    return n ? s / -n : 0;
  }
  return {
    get: r
  };
}
function S0(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: c
  } = o, u = m().map(t.measure), d = p(), f = v();
  function m() {
    return c(r).map((h) => Le(h)[s] - h[0][a]).map(he);
  }
  function p() {
    return r.map((h) => n[a] - h[a]).map((h) => -he(h));
  }
  function v() {
    return c(d).map((h) => h[0]).map((h, x) => h + u[x]);
  }
  return {
    snaps: d,
    snapsAligned: f
  };
}
function N0(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: c,
    max: u
  } = r, d = f();
  function f() {
    const p = s(a), v = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : v ? p : p.slice(c, u).map((g, h, x) => {
      const b = !h, y = Gs(x, h);
      if (b) {
        const w = Le(x[0]) + 1;
        return Ac(w);
      }
      if (y) {
        const w = or(a) - Le(x)[0] + 1;
        return Ac(w, Le(x)[0]);
      }
      return g;
    });
  }
  return {
    slideRegistry: d
  };
}
function E0(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: c
  } = r;
  function u(g) {
    return g.concat().sort((h, x) => he(h) - he(x))[0];
  }
  function d(g) {
    const h = e ? s(g) : c(g), x = t.map((y, w) => ({
      diff: f(y - h, 0),
      index: w
    })).sort((y, w) => he(y.diff) - he(w.diff)), {
      index: b
    } = x[0];
    return {
      index: b,
      distance: h
    };
  }
  function f(g, h) {
    const x = [g, g + n, g - n];
    if (!e) return g;
    if (!h) return u(x);
    const b = x.filter((y) => zs(y) === h);
    return b.length ? u(b) : Le(x) - n;
  }
  function m(g, h) {
    const x = t[g] - o.get(), b = f(x, h);
    return {
      index: g,
      distance: b
    };
  }
  function p(g, h) {
    const x = o.get() + g, {
      index: b,
      distance: y
    } = d(x), w = !e && a(x);
    if (!h || w) return {
      index: b,
      distance: g
    };
    const C = t[b] - y, S = g + f(C, 0);
    return {
      index: b,
      distance: S
    };
  }
  return {
    byDistance: p,
    byIndex: m,
    shortcut: f
  };
}
function R0(e, t, n, r, o, a, s) {
  function c(m) {
    const p = m.distance, v = m.index !== t.get();
    a.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (n.set(t.get()), t.set(m.index), s.emit("select"));
  }
  function u(m, p) {
    const v = o.byDistance(m, p);
    c(v);
  }
  function d(m, p) {
    const v = t.clone().set(m), g = o.byIndex(v.get(), p);
    c(g);
  }
  return {
    distance: u,
    index: d
  };
}
function P0(e, t, n, r, o, a, s, c) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function f(v) {
    if (!c) return;
    function g(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      s.emit("slideFocusStart"), e.scrollLeft = 0;
      const y = n.findIndex((w) => w.includes(h));
      Hs(y) && (o.useDuration(0), r.index(y, 0), s.emit("slideFocus"));
    }
    a.add(document, "keydown", m, !1), t.forEach((h, x) => {
      a.add(h, "focus", (b) => {
        (yo(c) || c(v, b)) && g(x);
      }, u);
    });
  }
  function m(v) {
    v.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function Pn(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(u) {
    t = s(u);
  }
  function o(u) {
    t += s(u);
  }
  function a(u) {
    t -= s(u);
  }
  function s(u) {
    return Hs(u) ? u : u.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function bd(e, t) {
  const n = e.scroll === "x" ? s : c, r = t.style;
  let o = null, a = !1;
  function s(p) {
    return `translate3d(${p}px,0px,0px)`;
  }
  function c(p) {
    return `translate3d(0px,${p}px,0px)`;
  }
  function u(p) {
    if (a) return;
    const v = c0(e.direction(p));
    v !== o && (r.transform = n(v), o = v);
  }
  function d(p) {
    a = !p;
  }
  function f() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: u,
    toggleActive: d
  };
}
function T0(e, t, n, r, o, a, s, c, u) {
  const f = On(o), m = On(o).reverse(), p = b().concat(y());
  function v(R, E) {
    return R.reduce((_, O) => _ - o[O], E);
  }
  function g(R, E) {
    return R.reduce((_, O) => v(_, E) > 0 ? _.concat([O]) : _, []);
  }
  function h(R) {
    return a.map((E, _) => ({
      start: E - r[_] + 0.5 + R,
      end: E + t - 0.5 + R
    }));
  }
  function x(R, E, _) {
    const O = h(E);
    return R.map((F) => {
      const U = _ ? 0 : -n, Q = _ ? n : 0, k = _ ? "end" : "start", G = O[F][k];
      return {
        index: F,
        loopPoint: G,
        slideLocation: Pn(-1),
        translate: bd(e, u[F]),
        target: () => c.get() > G ? U : Q
      };
    });
  }
  function b() {
    const R = s[0], E = g(m, R);
    return x(E, n, !1);
  }
  function y() {
    const R = t - s[0] - 1, E = g(f, R);
    return x(E, -n, !0);
  }
  function w() {
    return p.every(({
      index: R
    }) => {
      const E = f.filter((_) => _ !== R);
      return v(E, t) <= 0.1;
    });
  }
  function C() {
    p.forEach((R) => {
      const {
        target: E,
        translate: _,
        slideLocation: O
      } = R, F = E();
      F !== O.get() && (_.to(F), O.set(F));
    });
  }
  function S() {
    p.forEach((R) => R.translate.clear());
  }
  return {
    canLoop: w,
    clear: S,
    loop: C,
    loopPoints: p
  };
}
function _0(e, t, n) {
  let r, o = !1;
  function a(u) {
    if (!n) return;
    function d(f) {
      for (const m of f)
        if (m.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      o || (yo(n) || n(u, f)) && d(f);
    }), r.observe(e, {
      childList: !0
    });
  }
  function s() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: s
  };
}
function M0(e, t, n, r) {
  const o = {};
  let a = null, s = null, c, u = !1;
  function d() {
    c = new IntersectionObserver((g) => {
      u || (g.forEach((h) => {
        const x = t.indexOf(h.target);
        o[x] = h;
      }), a = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((g) => c.observe(g));
  }
  function f() {
    c && c.disconnect(), u = !0;
  }
  function m(g) {
    return Ln(o).reduce((h, x) => {
      const b = parseInt(x), {
        isIntersecting: y
      } = o[b];
      return (g && y || !g && !y) && h.push(b), h;
    }, []);
  }
  function p(g = !0) {
    if (g && a) return a;
    if (!g && s) return s;
    const h = m(g);
    return g && (a = h), g || (s = h), h;
  }
  return {
    init: d,
    destroy: f,
    get: p
  };
}
function j0(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: c,
    endEdge: u
  } = e, d = n[0] && o, f = g(), m = h(), p = n.map(s), v = x();
  function g() {
    if (!d) return 0;
    const y = n[0];
    return he(t[c] - y[c]);
  }
  function h() {
    if (!d) return 0;
    const y = a.getComputedStyle(Le(r));
    return parseFloat(y.getPropertyValue(`margin-${u}`));
  }
  function x() {
    return n.map((y, w, C) => {
      const S = !w, N = Gs(C, w);
      return S ? p[w] + f : N ? p[w] + m : C[w + 1][c] - y[c];
    }).map(he);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: v,
    startGap: f,
    endGap: m
  };
}
function k0(e, t, n, r, o, a, s, c, u) {
  const {
    startEdge: d,
    endEdge: f,
    direction: m
  } = e, p = Hs(n);
  function v(b, y) {
    return On(b).filter((w) => w % y === 0).map((w) => b.slice(w, w + y));
  }
  function g(b) {
    return b.length ? On(b).reduce((y, w, C) => {
      const S = Le(y) || 0, N = S === 0, R = w === or(b), E = o[d] - a[S][d], _ = o[d] - a[w][f], O = !r && N ? m(s) : 0, F = !r && R ? m(c) : 0, U = he(_ - F - (E + O));
      return C && U > t + u && y.push(w), R && y.push(b.length), y;
    }, []).map((y, w, C) => {
      const S = Math.max(C[w - 1] || 0);
      return b.slice(S, y);
    }) : [];
  }
  function h(b) {
    return p ? v(b, n) : g(b);
  }
  return {
    groupSlides: h
  };
}
function A0(e, t, n, r, o, a, s) {
  const {
    align: c,
    axis: u,
    direction: d,
    startIndex: f,
    loop: m,
    duration: p,
    dragFree: v,
    dragThreshold: g,
    inViewThreshold: h,
    slidesToScroll: x,
    skipSnaps: b,
    containScroll: y,
    watchResize: w,
    watchSlides: C,
    watchDrag: S,
    watchFocus: N
  } = a, R = 2, E = p0(), _ = E.measure(t), O = n.map(E.measure), F = d0(u, d), U = F.measureSize(_), Q = h0(U), k = l0(c, U), G = !m && !!y, V = m || !!y, {
    slideSizes: D,
    slideSizesWithGaps: P,
    startGap: $,
    endGap: j
  } = j0(F, _, O, n, V, o), Y = k0(F, U, x, m, _, O, $, j, R), {
    snaps: M,
    snapsAligned: L
  } = S0(F, k, _, O, Y), z = -Le(M) + Le(P), {
    snapsContained: B,
    scrollContainLimit: Z
  } = b0(U, z, L, y, R), A = G ? B : L, {
    limit: K
  } = y0(z, A, m), te = xd(or(A), f, m), ne = te.clone(), ee = On(n), H = ({
    dragHandler: Yt,
    scrollBody: sa,
    scrollBounds: ia,
    options: {
      loop: Sr
    }
  }) => {
    Sr || ia.constrain(Yt.pointerDown()), sa.seek();
  }, oe = ({
    scrollBody: Yt,
    translate: sa,
    location: ia,
    offsetLocation: Sr,
    previousLocation: Ov,
    scrollLooper: Lv,
    slideLooper: Fv,
    dragHandler: $v,
    animation: Wv,
    eventHandler: $i,
    scrollBounds: Vv,
    options: {
      loop: Wi
    }
  }, Vi) => {
    const Bi = Yt.settled(), Bv = !Vv.shouldConstrain(), Hi = Wi ? Bi : Bi && Bv, zi = Hi && !$v.pointerDown();
    zi && Wv.stop();
    const Hv = ia.get() * Vi + Ov.get() * (1 - Vi);
    Sr.set(Hv), Wi && (Lv.loop(Yt.direction()), Fv.loop()), sa.to(Sr.get()), zi && $i.emit("settle"), Hi || $i.emit("scroll");
  }, ue = u0(r, o, () => H(aa), (Yt) => oe(aa, Yt)), xe = 0.68, Se = A[te.get()], Te = Pn(Se), Tt = Pn(Se), lt = Pn(Se), _t = Pn(Se), Cn = g0(Te, lt, Tt, _t, p, xe), ra = E0(m, A, z, K, _t), oa = R0(ue, te, ne, Cn, ra, _t, s), Oi = C0(K), Li = Fn(), Dv = M0(t, n, s, h), {
    slideRegistry: Fi
  } = N0(G, y, A, Z, Y, ee), Iv = P0(e, n, Fi, oa, Cn, Li, s, N), aa = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: _,
    slideRects: O,
    animation: ue,
    axis: F,
    dragHandler: f0(F, e, r, o, _t, m0(F, o), Te, ue, oa, Cn, ra, te, s, Q, v, g, b, xe, S),
    eventStore: Li,
    percentOfView: Q,
    index: te,
    indexPrevious: ne,
    limit: K,
    location: Te,
    offsetLocation: lt,
    previousLocation: Tt,
    options: a,
    resizeHandler: v0(t, s, o, n, F, w, E),
    scrollBody: Cn,
    scrollBounds: x0(K, lt, _t, Cn, Q),
    scrollLooper: w0(z, K, lt, [Te, lt, Tt, _t]),
    scrollProgress: Oi,
    scrollSnapList: A.map(Oi.get),
    scrollSnaps: A,
    scrollTarget: ra,
    scrollTo: oa,
    slideLooper: T0(F, U, z, D, P, M, A, lt, n),
    slideFocus: Iv,
    slidesHandler: _0(t, s, C),
    slidesInView: Dv,
    slideIndexes: ee,
    slideRegistry: Fi,
    slidesToScroll: Y,
    target: _t,
    translate: bd(F, t)
  };
  return aa;
}
function D0() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function r(d) {
    return e[d] || [];
  }
  function o(d) {
    return r(d).forEach((f) => f(t, d)), u;
  }
  function a(d, f) {
    return e[d] = r(d).concat([f]), u;
  }
  function s(d, f) {
    return e[d] = r(d).filter((m) => m !== f), u;
  }
  function c() {
    e = {};
  }
  const u = {
    init: n,
    emit: o,
    off: s,
    on: a,
    clear: c
  };
  return u;
}
const I0 = {
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
function O0(e) {
  function t(a, s) {
    return gd(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, c = Ln(s).filter((u) => e.matchMedia(u).matches).map((u) => s[u]).reduce((u, d) => t(u, d), {});
    return t(a, c);
  }
  function r(a) {
    return a.map((s) => Ln(s.breakpoints || {})).reduce((s, c) => s.concat(c), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function L0(e) {
  let t = [];
  function n(a, s) {
    return t = s.filter(({
      options: c
    }) => e.optionsAtMedia(c).active !== !1), t.forEach((c) => c.init(a, e)), s.reduce((c, u) => Object.assign(c, {
      [u.name]: u
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function Ur(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = O0(o), s = L0(a), c = Fn(), u = D0(), {
    mergeOptions: d,
    optionsAtMedia: f,
    optionsMediaQueries: m
  } = a, {
    on: p,
    off: v,
    emit: g
  } = u, h = F;
  let x = !1, b, y = d(I0, Ur.globalOptions), w = d(y), C = [], S, N, R;
  function E() {
    const {
      container: ee,
      slides: H
    } = w;
    N = (Ba(ee) ? e.querySelector(ee) : ee) || e.children[0];
    const ue = Ba(H) ? N.querySelectorAll(H) : H;
    R = [].slice.call(ue || N.children);
  }
  function _(ee) {
    const H = A0(e, N, R, r, o, ee, u);
    if (ee.loop && !H.slideLooper.canLoop()) {
      const oe = Object.assign({}, ee, {
        loop: !1
      });
      return _(oe);
    }
    return H;
  }
  function O(ee, H) {
    x || (y = d(y, ee), w = f(y), C = H || C, E(), b = _(w), m([y, ...C.map(({
      options: oe
    }) => oe)]).forEach((oe) => c.add(oe, "change", F)), w.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(ne), b.eventHandler.init(ne), b.resizeHandler.init(ne), b.slidesHandler.init(ne), b.options.loop && b.slideLooper.loop(), N.offsetParent && R.length && b.dragHandler.init(ne), S = s.init(ne, C)));
  }
  function F(ee, H) {
    const oe = Y();
    U(), O(d({
      startIndex: oe
    }, ee), H), u.emit("reInit");
  }
  function U() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), c.clear();
  }
  function Q() {
    x || (x = !0, c.clear(), U(), u.emit("destroy"), u.clear());
  }
  function k(ee, H, oe) {
    !w.active || x || (b.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : w.duration), b.scrollTo.index(ee, oe || 0));
  }
  function G(ee) {
    const H = b.index.add(1).get();
    k(H, ee, -1);
  }
  function V(ee) {
    const H = b.index.add(-1).get();
    k(H, ee, 1);
  }
  function D() {
    return b.index.add(1).get() !== Y();
  }
  function P() {
    return b.index.add(-1).get() !== Y();
  }
  function $() {
    return b.scrollSnapList;
  }
  function j() {
    return b.scrollProgress.get(b.offsetLocation.get());
  }
  function Y() {
    return b.index.get();
  }
  function M() {
    return b.indexPrevious.get();
  }
  function L() {
    return b.slidesInView.get();
  }
  function z() {
    return b.slidesInView.get(!1);
  }
  function B() {
    return S;
  }
  function Z() {
    return b;
  }
  function A() {
    return e;
  }
  function K() {
    return N;
  }
  function te() {
    return R;
  }
  const ne = {
    canScrollNext: D,
    canScrollPrev: P,
    containerNode: K,
    internalEngine: Z,
    destroy: Q,
    off: v,
    on: p,
    emit: g,
    plugins: B,
    previousScrollSnap: M,
    reInit: h,
    rootNode: A,
    scrollNext: G,
    scrollPrev: V,
    scrollProgress: j,
    scrollSnapList: $,
    scrollTo: k,
    selectedScrollSnap: Y,
    slideNodes: te,
    slidesInView: L,
    slidesNotInView: z
  };
  return O(t, n), setTimeout(() => u.emit("init"), 0), ne;
}
Ur.globalOptions = void 0;
function Ys(e = {}, t = []) {
  const n = Hr(e), r = Hr(t), [o, a] = Ne(), [s, c] = Ne(), u = ol(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return je(() => {
    Bs(n.current, e) || (n.current = e, u());
  }, [e, u]), je(() => {
    s0(r.current, t) || (r.current = t, u());
  }, [t, u]), je(() => {
    if (a0() && s) {
      Ur.globalOptions = Ys.globalOptions;
      const d = Ur(s, n.current, r.current);
      return a(d), () => d.destroy();
    } else
      a(void 0);
  }, [s, a]), [c, o];
}
Ys.globalOptions = void 0;
const yd = l.createContext(null);
function wo() {
  const e = l.useContext(yd);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const F0 = l.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, c) => {
    const [u, d] = Ys(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [f, m] = l.useState(!1), [p, v] = l.useState(!1), g = l.useCallback((y) => {
      y && (m(y.canScrollPrev()), v(y.canScrollNext()));
    }, []), h = l.useCallback(() => {
      d?.scrollPrev();
    }, [d]), x = l.useCallback(() => {
      d?.scrollNext();
    }, [d]), b = l.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), h()) : y.key === "ArrowRight" && (y.preventDefault(), x());
      },
      [h, x]
    );
    return l.useEffect(() => {
      !d || !n || n(d);
    }, [d, n]), l.useEffect(() => {
      if (d)
        return g(d), d.on("reInit", g), d.on("select", g), () => {
          d?.off("select", g);
        };
    }, [d, g]), /* @__PURE__ */ i.jsx(
      yd.Provider,
      {
        value: {
          carouselRef: u,
          api: d,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: x,
          canScrollPrev: f,
          canScrollNext: p
        },
        children: /* @__PURE__ */ i.jsx(
          "div",
          {
            ref: c,
            onKeyDownCapture: b,
            className: T("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...s,
            children: a
          }
        )
      }
    );
  }
);
F0.displayName = "Carousel";
const $0 = l.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = wo();
  return /* @__PURE__ */ i.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: T(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
$0.displayName = "CarouselContent";
const W0 = l.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = wo();
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: T(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
W0.displayName = "CarouselItem";
const V0 = l.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: c } = wo();
  return /* @__PURE__ */ i.jsxs(
    yt,
    {
      ref: o,
      variant: t,
      size: n,
      className: T(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ i.jsx(Gv, { className: "h-4 w-4" }),
        /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
V0.displayName = "CarouselPrevious";
const B0 = l.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: c } = wo();
  return /* @__PURE__ */ i.jsxs(
    yt,
    {
      ref: o,
      variant: t,
      size: n,
      className: T(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ i.jsx(Yv, { className: "h-4 w-4" }),
        /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
B0.displayName = "CarouselNext";
const H0 = { light: "", dark: ".dark" }, wd = l.createContext(null);
function Cd() {
  const e = l.useContext(wd);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const z0 = l.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const s = l.useId(), c = `chart-${e || s.replace(/:/g, "")}`;
  return /* @__PURE__ */ i.jsx(wd.Provider, { value: { config: r }, children: /* @__PURE__ */ i.jsxs(
    "div",
    {
      "data-chart": c,
      ref: a,
      className: T(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ i.jsx(G0, { id: c, config: r }),
        /* @__PURE__ */ i.jsx(gs.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
z0.displayName = "Chart";
const G0 = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ i.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(H0).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, s]) => {
            const c = s.theme?.[r] || s.color;
            return c ? `  --color-${a}: ${c};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, kj = gs.Tooltip, Y0 = l.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: s,
    labelFormatter: c,
    labelClassName: u,
    formatter: d,
    color: f,
    nameKey: m,
    labelKey: p
  }, v) => {
    const { config: g } = Cd(), h = l.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [b] = t;
      if (!b)
        return null;
      const y = `${p || b.dataKey || b.name || "value"}`, w = za(g, b, y), C = !p && typeof s == "string" ? g[s]?.label || s : w?.label;
      return c ? /* @__PURE__ */ i.jsx("div", { className: T("font-medium", u), children: c(C, t) }) : C ? /* @__PURE__ */ i.jsx("div", { className: T("font-medium", u), children: C }) : null;
    }, [
      s,
      c,
      t,
      o,
      u,
      g,
      p
    ]);
    if (!e || !t?.length)
      return null;
    const x = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: v,
        className: T(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          x ? null : h,
          /* @__PURE__ */ i.jsx("div", { className: "grid gap-1.5", children: t.map((b, y) => {
            if (!b)
              return null;
            const w = `${m || b.dataKey || b.name || "value"}`, C = za(g, b, w), S = f || b.payload.fill || b.color;
            return /* @__PURE__ */ i.jsx(
              "div",
              {
                className: T(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: d && b?.value !== void 0 && b.name ? d(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  C?.icon ? /* @__PURE__ */ i.jsx(C.icon, {}) : !a && /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: T(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": x && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": S,
                        "--color-border": S
                      }
                    }
                  ),
                  /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: T(
                        "flex flex-1 justify-between leading-none",
                        x ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1.5", children: [
                          x ? h : null,
                          /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground", children: C?.label || b.name })
                        ] }),
                        b.value && /* @__PURE__ */ i.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: b.value.toLocaleString() })
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
Y0.displayName = "ChartTooltip";
const Aj = gs.Legend, K0 = l.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
    const { config: s } = Cd();
    return n?.length ? /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: a,
        className: T(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((c) => {
          if (!c)
            return null;
          const u = `${o || c.dataKey || "value"}`, d = za(s, c, u);
          return /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: T(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                d?.icon && !t ? /* @__PURE__ */ i.jsx(d.icon, {}) : /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: c.color
                    }
                  }
                ),
                d?.label
              ]
            },
            c.value
          );
        })
      }
    ) : null;
  }
);
K0.displayName = "ChartLegend";
function za(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function ar(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Co(e) {
  const [t, n] = l.useState(void 0);
  return fe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, c;
        if ("borderBoxSize" in a) {
          const u = a.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          s = d.inlineSize, c = d.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({ width: s, height: c });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var So = "Checkbox", [U0, Dj] = ve(So), [q0, Ks] = U0(So);
function X0(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: s,
    name: c,
    onCheckedChange: u,
    required: d,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [p, v] = ge({
    prop: n,
    defaultProp: o ?? !1,
    onChange: u,
    caller: So
  }), [g, h] = l.useState(null), [x, b] = l.useState(null), y = l.useRef(!1), w = g ? !!s || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: p,
    disabled: a,
    setChecked: v,
    control: g,
    setControl: h,
    name: c,
    form: s,
    value: f,
    hasConsumerStoppedPropagationRef: y,
    required: d,
    defaultChecked: mt(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: x,
    setBubbleInput: b
  };
  return /* @__PURE__ */ i.jsx(
    q0,
    {
      scope: t,
      ...C,
      children: Q0(m) ? m(C) : r
    }
  );
}
var Sd = "CheckboxTrigger", Nd = l.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: s,
      disabled: c,
      checked: u,
      required: d,
      setControl: f,
      setChecked: m,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: v,
      bubbleInput: g
    } = Ks(Sd, e), h = J(o, f), x = l.useRef(u);
    return l.useEffect(() => {
      const b = a?.form;
      if (b) {
        const y = () => m(x.current);
        return b.addEventListener("reset", y), () => b.removeEventListener("reset", y);
      }
    }, [a, m]), /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": mt(u) ? "mixed" : u,
        "aria-required": d,
        "data-state": _d(u),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: s,
        ...r,
        ref: h,
        onKeyDown: I(t, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: I(n, (b) => {
          m((y) => mt(y) ? !0 : !y), g && v && (p.current = b.isPropagationStopped(), p.current || b.stopPropagation());
        })
      }
    );
  }
);
Nd.displayName = Sd;
var Us = l.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: c,
      value: u,
      onCheckedChange: d,
      form: f,
      ...m
    } = e;
    return /* @__PURE__ */ i.jsx(
      X0,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: c,
        required: s,
        onCheckedChange: d,
        name: r,
        form: f,
        value: u,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            Nd,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ i.jsx(
            Td,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Us.displayName = So;
var Ed = "CheckboxIndicator", Rd = l.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Ks(Ed, n);
    return /* @__PURE__ */ i.jsx(
      me,
      {
        present: r || mt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ i.jsx(
          W.span,
          {
            "data-state": _d(a.checked),
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
Rd.displayName = Ed;
var Pd = "CheckboxBubbleInput", Td = l.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: c,
      disabled: u,
      name: d,
      value: f,
      form: m,
      bubbleInput: p,
      setBubbleInput: v
    } = Ks(Pd, e), g = J(n, v), h = ar(a), x = Co(r);
    l.useEffect(() => {
      const y = p;
      if (!y) return;
      const w = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, N = !o.current;
      if (h !== a && S) {
        const R = new Event("click", { bubbles: N });
        y.indeterminate = mt(a), S.call(y, mt(a) ? !1 : a), y.dispatchEvent(R);
      }
    }, [p, h, a, o]);
    const b = l.useRef(mt(a) ? !1 : a);
    return /* @__PURE__ */ i.jsx(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? b.current,
        required: c,
        disabled: u,
        name: d,
        value: f,
        form: m,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...x,
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
Td.displayName = Pd;
function Q0(e) {
  return typeof e == "function";
}
function mt(e) {
  return e === "indeterminate";
}
function _d(e) {
  return mt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const J0 = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Us,
  {
    ref: n,
    className: T(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i.jsx(
      Rd,
      {
        className: T("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ i.jsx(Kn, { className: "size-4 h-full" })
      }
    )
  }
));
J0.displayName = Us.displayName;
function Ij({
  name: e,
  label: t,
  options: n,
  placeholder: r = "Selecione uma opção",
  searchPlaceholder: o = "Buscar...",
  emptyMessage: a = "Nenhum resultado encontrado.",
  isDisabled: s = !1,
  isLoading: c = !1
}) {
  const { control: u, setValue: d } = qn();
  return /* @__PURE__ */ i.jsx(
    Vo,
    {
      control: u,
      name: e,
      render: ({ field: f }) => /* @__PURE__ */ i.jsxs(br, { children: [
        /* @__PURE__ */ i.jsx(
          Z0,
          {
            label: t,
            placeholder: r,
            searchPlaceholder: o,
            emptyMessage: a,
            options: n,
            selected: f.value,
            onSelect: (m) => d(e, m, { shouldValidate: !0 }),
            isDisabled: s,
            isLoading: c
          }
        ),
        /* @__PURE__ */ i.jsx(yr, {})
      ] })
    }
  );
}
function Z0({
  label: e,
  options: t,
  selected: n,
  onSelect: r,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: a = "Buscar...",
  emptyMessage: s = "Nenhum resultado encontrado.",
  error: c,
  isDisabled: u = !1,
  isLoading: d = !1
}) {
  const [f, m] = Ne(!1);
  return /* @__PURE__ */ i.jsxs("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ i.jsx(Wo, { children: e }),
    /* @__PURE__ */ i.jsxs(mr, { open: f, onOpenChange: m, children: [
      /* @__PURE__ */ i.jsx(pr, { asChild: !0, children: /* @__PURE__ */ i.jsxs(
        yt,
        {
          variant: "outline",
          disabled: t.length === 0 || u,
          className: T(
            "relative w-full justify-between hover:bg-input bg-input",
            !n && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "truncate", children: n ? t.find((p) => p.value === n)?.label : o }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1", children: [
              d && /* @__PURE__ */ i.jsx(An, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ i.jsx(cl, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsx(yn, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ i.jsxs(ir, { children: [
        /* @__PURE__ */ i.jsx(Eo, { placeholder: a }),
        /* @__PURE__ */ i.jsxs(Ro, { children: [
          /* @__PURE__ */ i.jsx(Po, { children: s }),
          /* @__PURE__ */ i.jsx(cr, { children: t.map((p) => /* @__PURE__ */ i.jsxs(
            kt,
            {
              value: p.label,
              onSelect: () => {
                n === p.value ? r(void 0) : r(p.value), m(!1);
              },
              children: [
                /* @__PURE__ */ i.jsx(
                  Kn,
                  {
                    className: T(
                      "mr-2 size-4",
                      n === p.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ i.jsx("div", { className: "w-0 flex-1", children: p.label })
              ]
            },
            p.value
          )) })
        ] })
      ] }) })
    ] }),
    !!c && /* @__PURE__ */ i.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: c })
  ] });
}
var Dc = 1, eN = 0.9, tN = 0.8, nN = 0.17, Ea = 0.1, Ra = 0.999, rN = 0.9999, oN = 0.99, aN = /[\\\/_+.#"@\[\(\{&]/, sN = /[\\\/_+.#"@\[\(\{&]/g, iN = /[\s-]/, Md = /[\s-]/g;
function Ga(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? Dc : oN;
  var c = `${o},${a}`;
  if (s[c] !== void 0) return s[c];
  for (var u = r.charAt(a), d = n.indexOf(u, o), f = 0, m, p, v, g; d >= 0; ) m = Ga(e, t, n, r, d + 1, a + 1, s), m > f && (d === o ? m *= Dc : aN.test(e.charAt(d - 1)) ? (m *= tN, v = e.slice(o, d - 1).match(sN), v && o > 0 && (m *= Math.pow(Ra, v.length))) : iN.test(e.charAt(d - 1)) ? (m *= eN, g = e.slice(o, d - 1).match(Md), g && o > 0 && (m *= Math.pow(Ra, g.length))) : (m *= nN, o > 0 && (m *= Math.pow(Ra, d - o))), e.charAt(d) !== t.charAt(a) && (m *= rN)), (m < Ea && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Ga(e, t, n, r, d + 1, a + 2, s), p * Ea > m && (m = p * Ea)), m > f && (f = m), d = n.indexOf(u, d + 1);
  return s[c] = f, f;
}
function Ic(e) {
  return e.toLowerCase().replace(Md, " ");
}
function cN(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ga(e, t, Ic(e), Ic(t), 0, 0, {});
}
var Rn = '[cmdk-group=""]', Pa = '[cmdk-group-items=""]', lN = '[cmdk-group-heading=""]', jd = '[cmdk-item=""]', Oc = `${jd}:not([aria-disabled="true"])`, Ya = "cmdk-item-select", Jt = "data-value", uN = (e, t, n) => cN(e, t, n), kd = l.createContext(void 0), sr = () => l.useContext(kd), Ad = l.createContext(void 0), qs = () => l.useContext(Ad), Dd = l.createContext(void 0), Id = l.forwardRef((e, t) => {
  let n = Zt(() => {
    var M, L;
    return { search: "", value: (L = (M = e.value) != null ? M : e.defaultValue) != null ? L : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Zt(() => /* @__PURE__ */ new Set()), o = Zt(() => /* @__PURE__ */ new Map()), a = Zt(() => /* @__PURE__ */ new Map()), s = Zt(() => /* @__PURE__ */ new Set()), c = Od(e), { label: u, children: d, value: f, onValueChange: m, filter: p, shouldFilter: v, loop: g, disablePointerSelection: h = !1, vimBindings: x = !0, ...b } = e, y = pe(), w = pe(), C = pe(), S = l.useRef(null), N = wN();
  Ot(() => {
    if (f !== void 0) {
      let M = f.trim();
      n.current.value = M, R.emit();
    }
  }, [f]), Ot(() => {
    N(6, Q);
  }, []);
  let R = l.useMemo(() => ({ subscribe: (M) => (s.current.add(M), () => s.current.delete(M)), snapshot: () => n.current, setState: (M, L, z) => {
    var B, Z, A, K;
    if (!Object.is(n.current[M], L)) {
      if (n.current[M] = L, M === "search") U(), O(), N(1, F);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let te = document.getElementById(C);
          te ? te.focus() : (B = document.getElementById(y)) == null || B.focus();
        }
        if (N(7, () => {
          var te;
          n.current.selectedItemId = (te = k()) == null ? void 0 : te.id, R.emit();
        }), z || N(5, Q), ((Z = c.current) == null ? void 0 : Z.value) !== void 0) {
          let te = L ?? "";
          (K = (A = c.current).onValueChange) == null || K.call(A, te);
          return;
        }
      }
      R.emit();
    }
  }, emit: () => {
    s.current.forEach((M) => M());
  } }), []), E = l.useMemo(() => ({ value: (M, L, z) => {
    var B;
    L !== ((B = a.current.get(M)) == null ? void 0 : B.value) && (a.current.set(M, { value: L, keywords: z }), n.current.filtered.items.set(M, _(L, z)), N(2, () => {
      O(), R.emit();
    }));
  }, item: (M, L) => (r.current.add(M), L && (o.current.has(L) ? o.current.get(L).add(M) : o.current.set(L, /* @__PURE__ */ new Set([M]))), N(3, () => {
    U(), O(), n.current.value || F(), R.emit();
  }), () => {
    a.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let z = k();
    N(4, () => {
      U(), z?.getAttribute("id") === M && F(), R.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    a.current.delete(M), o.current.delete(M);
  }), filter: () => c.current.shouldFilter, label: u || e["aria-label"], getDisablePointerSelection: () => c.current.disablePointerSelection, listId: y, inputId: C, labelId: w, listInnerRef: S }), []);
  function _(M, L) {
    var z, B;
    let Z = (B = (z = c.current) == null ? void 0 : z.filter) != null ? B : uN;
    return M ? Z(M, n.current.search, L) : 0;
  }
  function O() {
    if (!n.current.search || c.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, L = [];
    n.current.filtered.groups.forEach((B) => {
      let Z = o.current.get(B), A = 0;
      Z.forEach((K) => {
        let te = M.get(K);
        A = Math.max(te, A);
      }), L.push([B, A]);
    });
    let z = S.current;
    G().sort((B, Z) => {
      var A, K;
      let te = B.getAttribute("id"), ne = Z.getAttribute("id");
      return ((A = M.get(ne)) != null ? A : 0) - ((K = M.get(te)) != null ? K : 0);
    }).forEach((B) => {
      let Z = B.closest(Pa);
      Z ? Z.appendChild(B.parentElement === Z ? B : B.closest(`${Pa} > *`)) : z.appendChild(B.parentElement === z ? B : B.closest(`${Pa} > *`));
    }), L.sort((B, Z) => Z[1] - B[1]).forEach((B) => {
      var Z;
      let A = (Z = S.current) == null ? void 0 : Z.querySelector(`${Rn}[${Jt}="${encodeURIComponent(B[0])}"]`);
      A?.parentElement.appendChild(A);
    });
  }
  function F() {
    let M = G().find((z) => z.getAttribute("aria-disabled") !== "true"), L = M?.getAttribute(Jt);
    R.setState("value", L || void 0);
  }
  function U() {
    var M, L, z, B;
    if (!n.current.search || c.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Z = 0;
    for (let A of r.current) {
      let K = (L = (M = a.current.get(A)) == null ? void 0 : M.value) != null ? L : "", te = (B = (z = a.current.get(A)) == null ? void 0 : z.keywords) != null ? B : [], ne = _(K, te);
      n.current.filtered.items.set(A, ne), ne > 0 && Z++;
    }
    for (let [A, K] of o.current) for (let te of K) if (n.current.filtered.items.get(te) > 0) {
      n.current.filtered.groups.add(A);
      break;
    }
    n.current.filtered.count = Z;
  }
  function Q() {
    var M, L, z;
    let B = k();
    B && (((M = B.parentElement) == null ? void 0 : M.firstChild) === B && ((z = (L = B.closest(Rn)) == null ? void 0 : L.querySelector(lN)) == null || z.scrollIntoView({ block: "nearest" })), B.scrollIntoView({ block: "nearest" }));
  }
  function k() {
    var M;
    return (M = S.current) == null ? void 0 : M.querySelector(`${jd}[aria-selected="true"]`);
  }
  function G() {
    var M;
    return Array.from(((M = S.current) == null ? void 0 : M.querySelectorAll(Oc)) || []);
  }
  function V(M) {
    let L = G()[M];
    L && R.setState("value", L.getAttribute(Jt));
  }
  function D(M) {
    var L;
    let z = k(), B = G(), Z = B.findIndex((K) => K === z), A = B[Z + M];
    (L = c.current) != null && L.loop && (A = Z + M < 0 ? B[B.length - 1] : Z + M === B.length ? B[0] : B[Z + M]), A && R.setState("value", A.getAttribute(Jt));
  }
  function P(M) {
    let L = k(), z = L?.closest(Rn), B;
    for (; z && !B; ) z = M > 0 ? bN(z, Rn) : yN(z, Rn), B = z?.querySelector(Oc);
    B ? R.setState("value", B.getAttribute(Jt)) : D(M);
  }
  let $ = () => V(G().length - 1), j = (M) => {
    M.preventDefault(), M.metaKey ? $() : M.altKey ? P(1) : D(1);
  }, Y = (M) => {
    M.preventDefault(), M.metaKey ? V(0) : M.altKey ? P(-1) : D(-1);
  };
  return l.createElement(W.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (M) => {
    var L;
    (L = b.onKeyDown) == null || L.call(b, M);
    let z = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || z)) switch (M.key) {
      case "n":
      case "j": {
        x && M.ctrlKey && j(M);
        break;
      }
      case "ArrowDown": {
        j(M);
        break;
      }
      case "p":
      case "k": {
        x && M.ctrlKey && Y(M);
        break;
      }
      case "ArrowUp": {
        Y(M);
        break;
      }
      case "Home": {
        M.preventDefault(), V(0);
        break;
      }
      case "End": {
        M.preventDefault(), $();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let B = k();
        if (B) {
          let Z = new Event(Ya);
          B.dispatchEvent(Z);
        }
      }
    }
  } }, l.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: SN }, u), No(e, (M) => l.createElement(Ad.Provider, { value: R }, l.createElement(kd.Provider, { value: E }, M))));
}), dN = l.forwardRef((e, t) => {
  var n, r;
  let o = pe(), a = l.useRef(null), s = l.useContext(Dd), c = sr(), u = Od(e), d = (r = (n = u.current) == null ? void 0 : n.forceMount) != null ? r : s?.forceMount;
  Ot(() => {
    if (!d) return c.item(o, s?.id);
  }, [d]);
  let f = Ld(o, a, [e.value, e.children, a], e.keywords), m = qs(), p = vt((N) => N.value && N.value === f.current), v = vt((N) => d || c.filter() === !1 ? !0 : N.search ? N.filtered.items.get(o) > 0 : !0);
  l.useEffect(() => {
    let N = a.current;
    if (!(!N || e.disabled)) return N.addEventListener(Ya, g), () => N.removeEventListener(Ya, g);
  }, [v, e.onSelect, e.disabled]);
  function g() {
    var N, R;
    h(), (R = (N = u.current).onSelect) == null || R.call(N, f.current);
  }
  function h() {
    m.setState("value", f.current, !0);
  }
  if (!v) return null;
  let { disabled: x, value: b, onSelect: y, forceMount: w, keywords: C, ...S } = e;
  return l.createElement(W.div, { ref: qe(a, t), ...S, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!x, "aria-selected": !!p, "data-disabled": !!x, "data-selected": !!p, onPointerMove: x || c.getDisablePointerSelection() ? void 0 : h, onClick: x ? void 0 : g }, e.children);
}), fN = l.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = pe(), c = l.useRef(null), u = l.useRef(null), d = pe(), f = sr(), m = vt((v) => o || f.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(s) : !0);
  Ot(() => f.group(s), []), Ld(s, c, [e.value, e.heading, u]);
  let p = l.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return l.createElement(W.div, { ref: qe(c, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && l.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), No(e, (v) => l.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, l.createElement(Dd.Provider, { value: p }, v))));
}), mN = l.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = l.useRef(null), a = vt((s) => !s.search);
  return !n && !a ? null : l.createElement(W.div, { ref: qe(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), pN = l.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = qs(), s = vt((d) => d.search), c = vt((d) => d.selectedItemId), u = sr();
  return l.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), l.createElement(W.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": u.listId, "aria-labelledby": u.labelId, "aria-activedescendant": c, id: u.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n?.(d.target.value);
  } });
}), hN = l.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = l.useRef(null), s = l.useRef(null), c = vt((d) => d.selectedItemId), u = sr();
  return l.useEffect(() => {
    if (s.current && a.current) {
      let d = s.current, f = a.current, m, p = new ResizeObserver(() => {
        m = requestAnimationFrame(() => {
          let v = d.offsetHeight;
          f.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(m), p.unobserve(d);
      };
    }
  }, []), l.createElement(W.div, { ref: qe(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": c, "aria-label": r, id: u.listId }, No(e, (d) => l.createElement("div", { ref: qe(s, u.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), vN = l.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...c } = e;
  return l.createElement(go, { open: n, onOpenChange: r }, l.createElement(xo, { container: s }, l.createElement(pn, { "cmdk-overlay": "", className: o }), l.createElement(hn, { "aria-label": e.label, "cmdk-dialog": "", className: a }, l.createElement(Id, { ref: t, ...c }))));
}), gN = l.forwardRef((e, t) => vt((n) => n.filtered.count === 0) ? l.createElement(W.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), xN = l.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return l.createElement(W.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, No(e, (s) => l.createElement("div", { "aria-hidden": !0 }, s)));
}), Pe = Object.assign(Id, { List: hN, Item: dN, Input: pN, Group: fN, Separator: mN, Dialog: vN, Empty: gN, Loading: xN });
function bN(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function yN(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Od(e) {
  let t = l.useRef(e);
  return Ot(() => {
    t.current = e;
  }), t;
}
var Ot = typeof window > "u" ? l.useEffect : l.useLayoutEffect;
function Zt(e) {
  let t = l.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function vt(e) {
  let t = qs(), n = () => e(t.snapshot());
  return l.useSyncExternalStore(t.subscribe, n, n);
}
function Ld(e, t, n, r = []) {
  let o = l.useRef(), a = sr();
  return Ot(() => {
    var s;
    let c = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), u = r.map((d) => d.trim());
    a.value(e, c, u), (s = t.current) == null || s.setAttribute(Jt, c), o.current = c;
  }), o;
}
var wN = () => {
  let [e, t] = l.useState(), n = Zt(() => /* @__PURE__ */ new Map());
  return Ot(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function CN(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function No({ asChild: e, children: t }, n) {
  return e && l.isValidElement(t) ? l.cloneElement(CN(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var SN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const ir = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Pe,
  {
    ref: n,
    className: T(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
ir.displayName = Pe.displayName;
const Oj = ({ children: e, ...t }) => /* @__PURE__ */ i.jsx(gR, { ...t, children: /* @__PURE__ */ i.jsx(Ef, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ i.jsx(ir, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Eo = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ i.jsx(Kv, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ i.jsx(
    Pe.Input,
    {
      ref: n,
      className: T(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
Eo.displayName = Pe.Input.displayName;
const Ro = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Pe.List,
  {
    ref: n,
    className: T("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Ro.displayName = Pe.List.displayName;
const Po = l.forwardRef((e, t) => /* @__PURE__ */ i.jsx(
  Pe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Po.displayName = Pe.Empty.displayName;
const cr = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Pe.Group,
  {
    ref: n,
    className: T(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
cr.displayName = Pe.Group.displayName;
const Fd = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Pe.Separator,
  {
    ref: n,
    className: T("-mx-1 h-px bg-border", e),
    ...t
  }
));
Fd.displayName = Pe.Separator.displayName;
const kt = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Pe.Item,
  {
    ref: n,
    className: T(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
kt.displayName = Pe.Item.displayName;
const NN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
NN.displayName = "CommandShortcut";
const EN = ["top", "right", "bottom", "left"], gt = Math.min, _e = Math.max, qr = Math.round, Ar = Math.floor, Ue = (e) => ({
  x: e,
  y: e
}), RN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, PN = {
  start: "end",
  end: "start"
};
function Ka(e, t, n) {
  return _e(e, gt(t, n));
}
function at(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function Xs(e) {
  return e === "x" ? "y" : "x";
}
function Qs(e) {
  return e === "y" ? "height" : "width";
}
const TN = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ke(e) {
  return TN.has(st(e)) ? "y" : "x";
}
function Js(e) {
  return Xs(Ke(e));
}
function _N(e, t, n) {
  n === void 0 && (n = !1);
  const r = xn(e), o = Js(e), a = Qs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Xr(s)), [s, Xr(s)];
}
function MN(e) {
  const t = Xr(e);
  return [Ua(e), t, Ua(t)];
}
function Ua(e) {
  return e.replace(/start|end/g, (t) => PN[t]);
}
const Lc = ["left", "right"], Fc = ["right", "left"], jN = ["top", "bottom"], kN = ["bottom", "top"];
function AN(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Fc : Lc : t ? Lc : Fc;
    case "left":
    case "right":
      return t ? jN : kN;
    default:
      return [];
  }
}
function DN(e, t, n, r) {
  const o = xn(e);
  let a = AN(st(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Ua)))), a;
}
function Xr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => RN[t]);
}
function IN(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $d(e) {
  return typeof e != "number" ? IN(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Qr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function $c(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Ke(t), s = Js(t), c = Qs(s), u = st(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[c] / 2 - o[c] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (xn(t)) {
    case "start":
      v[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const ON = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, c = a.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = $c(d, r, u), p = r, v = {}, g = 0;
  for (let h = 0; h < c.length; h++) {
    const {
      name: x,
      fn: b
    } = c[h], {
      x: y,
      y: w,
      data: C,
      reset: S
    } = await b({
      x: f,
      y: m,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, m = w ?? m, v = {
      ...v,
      [x]: {
        ...v[x],
        ...C
      }
    }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (d = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: f,
      y: m
    } = $c(d, p, u)), h = -1);
  }
  return {
    x: f,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function $n(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: c,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = at(t, e), g = $d(v), x = c[p ? m === "floating" ? "reference" : "floating" : m], b = Qr(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: u
  })), y = m === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), C = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Qr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: y,
    offsetParent: w,
    strategy: u
  }) : y);
  return {
    top: (b.top - S.top + g.top) / C.y,
    bottom: (S.bottom - b.bottom + g.bottom) / C.y,
    left: (b.left - S.left + g.left) / C.x,
    right: (S.right - b.right + g.right) / C.x
  };
}
const LN = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: c,
      middlewareData: u
    } = t, {
      element: d,
      padding: f = 0
    } = at(e, t) || {};
    if (d == null)
      return {};
    const m = $d(f), p = {
      x: n,
      y: r
    }, v = Js(o), g = Qs(v), h = await s.getDimensions(d), x = v === "y", b = x ? "top" : "left", y = x ? "bottom" : "right", w = x ? "clientHeight" : "clientWidth", C = a.reference[g] + a.reference[v] - p[v] - a.floating[g], S = p[v] - a.reference[v], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let R = N ? N[w] : 0;
    (!R || !await (s.isElement == null ? void 0 : s.isElement(N))) && (R = c.floating[w] || a.floating[g]);
    const E = C / 2 - S / 2, _ = R / 2 - h[g] / 2 - 1, O = gt(m[b], _), F = gt(m[y], _), U = O, Q = R - h[g] - F, k = R / 2 - h[g] / 2 + E, G = Ka(U, k, Q), V = !u.arrow && xn(o) != null && k !== G && a.reference[g] / 2 - (k < U ? O : F) - h[g] / 2 < 0, D = V ? k < U ? k - U : k - Q : 0;
    return {
      [v]: p[v] + D,
      data: {
        [v]: G,
        centerOffset: k - G - D,
        ...V && {
          alignmentOffset: D
        }
      },
      reset: V
    };
  }
}), FN = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: c,
        platform: u,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: m = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ...x
      } = at(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = st(o), y = Ke(c), w = st(c) === c, C = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), S = p || (w || !h ? [Xr(c)] : MN(c)), N = g !== "none";
      !p && N && S.push(...DN(c, h, g, C));
      const R = [c, ...S], E = await $n(t, x), _ = [];
      let O = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && _.push(E[b]), m) {
        const k = _N(o, s, C);
        _.push(E[k[0]], E[k[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: _
      }], !_.every((k) => k <= 0)) {
        var F, U;
        const k = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1, G = R[k];
        if (G && (!(m === "alignment" ? y !== Ke(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((P) => Ke(P.placement) === y ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: k,
              overflows: O
            },
            reset: {
              placement: G
            }
          };
        let V = (U = O.filter((D) => D.overflows[0] <= 0).sort((D, P) => D.overflows[1] - P.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!V)
          switch (v) {
            case "bestFit": {
              var Q;
              const D = (Q = O.filter((P) => {
                if (N) {
                  const $ = Ke(P.placement);
                  return $ === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter(($) => $ > 0).reduce(($, j) => $ + j, 0)]).sort((P, $) => P[1] - $[1])[0]) == null ? void 0 : Q[0];
              D && (V = D);
              break;
            }
            case "initialPlacement":
              V = c;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Wc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Vc(e) {
  return EN.some((t) => e[t] >= 0);
}
const $N = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = at(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await $n(t, {
            ...o,
            elementContext: "reference"
          }), s = Wc(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Vc(s)
            }
          };
        }
        case "escaped": {
          const a = await $n(t, {
            ...o,
            altBoundary: !0
          }), s = Wc(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Vc(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wd = /* @__PURE__ */ new Set(["left", "top"]);
async function WN(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = st(n), c = xn(n), u = Ke(n) === "y", d = Wd.has(s) ? -1 : 1, f = a && u ? -1 : 1, m = at(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: g
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return c && typeof g == "number" && (v = c === "end" ? g * -1 : g), u ? {
    x: v * f,
    y: p * d
  } : {
    x: p * d,
    y: v * f
  };
}
const VN = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: c
      } = t, u = await WN(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: a + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, BN = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: b,
              y
            } = x;
            return {
              x: b,
              y
            };
          }
        },
        ...u
      } = at(e, t), d = {
        x: n,
        y: r
      }, f = await $n(t, u), m = Ke(st(o)), p = Xs(m);
      let v = d[p], g = d[m];
      if (a) {
        const x = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = v + f[x], w = v - f[b];
        v = Ka(y, v, w);
      }
      if (s) {
        const x = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", y = g + f[x], w = g - f[b];
        g = Ka(y, g, w);
      }
      const h = c.fn({
        ...t,
        [p]: v,
        [m]: g
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [p]: a,
            [m]: s
          }
        }
      };
    }
  };
}, HN = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: c = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = at(e, t), f = {
        x: n,
        y: r
      }, m = Ke(o), p = Xs(m);
      let v = f[p], g = f[m];
      const h = at(c, t), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (u) {
        const w = p === "y" ? "height" : "width", C = a.reference[p] - a.floating[w] + x.mainAxis, S = a.reference[p] + a.reference[w] - x.mainAxis;
        v < C ? v = C : v > S && (v = S);
      }
      if (d) {
        var b, y;
        const w = p === "y" ? "width" : "height", C = Wd.has(st(o)), S = a.reference[m] - a.floating[w] + (C && ((b = s.offset) == null ? void 0 : b[m]) || 0) + (C ? 0 : x.crossAxis), N = a.reference[m] + a.reference[w] + (C ? 0 : ((y = s.offset) == null ? void 0 : y[m]) || 0) - (C ? x.crossAxis : 0);
        g < S ? g = S : g > N && (g = N);
      }
      return {
        [p]: v,
        [m]: g
      };
    }
  };
}, zN = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: c
      } = t, {
        apply: u = () => {
        },
        ...d
      } = at(e, t), f = await $n(t, d), m = st(o), p = xn(o), v = Ke(o) === "y", {
        width: g,
        height: h
      } = a.floating;
      let x, b;
      m === "top" || m === "bottom" ? (x = m, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (b = m, x = p === "end" ? "top" : "bottom");
      const y = h - f.top - f.bottom, w = g - f.left - f.right, C = gt(h - f[x], y), S = gt(g - f[b], w), N = !t.middlewareData.shift;
      let R = C, E = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = w), (r = t.middlewareData.shift) != null && r.enabled.y && (R = y), N && !p) {
        const O = _e(f.left, 0), F = _e(f.right, 0), U = _e(f.top, 0), Q = _e(f.bottom, 0);
        v ? E = g - 2 * (O !== 0 || F !== 0 ? O + F : _e(f.left, f.right)) : R = h - 2 * (U !== 0 || Q !== 0 ? U + Q : _e(f.top, f.bottom));
      }
      await u({
        ...t,
        availableWidth: E,
        availableHeight: R
      });
      const _ = await s.getDimensions(c.floating);
      return g !== _.width || h !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function To() {
  return typeof window < "u";
}
function bn(e) {
  return Vd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function et(e) {
  var t;
  return (t = (Vd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vd(e) {
  return To() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function $e(e) {
  return To() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function Qe(e) {
  return To() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function Bc(e) {
  return !To() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
const GN = /* @__PURE__ */ new Set(["inline", "contents"]);
function lr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = We(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !GN.has(o);
}
const YN = /* @__PURE__ */ new Set(["table", "td", "th"]);
function KN(e) {
  return YN.has(bn(e));
}
const UN = [":popover-open", ":modal"];
function _o(e) {
  return UN.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const qN = ["transform", "translate", "scale", "rotate", "perspective"], XN = ["transform", "translate", "scale", "rotate", "perspective", "filter"], QN = ["paint", "layout", "strict", "content"];
function Zs(e) {
  const t = ei(), n = $e(e) ? We(e) : e;
  return qN.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || XN.some((r) => (n.willChange || "").includes(r)) || QN.some((r) => (n.contain || "").includes(r));
}
function JN(e) {
  let t = xt(e);
  for (; Qe(t) && !an(t); ) {
    if (Zs(t))
      return t;
    if (_o(t))
      return null;
    t = xt(t);
  }
  return null;
}
function ei() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ZN = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function an(e) {
  return ZN.has(bn(e));
}
function We(e) {
  return Me(e).getComputedStyle(e);
}
function Mo(e) {
  return $e(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function xt(e) {
  if (bn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Bc(e) && e.host || // Fallback.
    et(e)
  );
  return Bc(t) ? t.host : t;
}
function Bd(e) {
  const t = xt(e);
  return an(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qe(t) && lr(t) ? t : Bd(t);
}
function Wn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Bd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Me(o);
  if (a) {
    const c = qa(s);
    return t.concat(s, s.visualViewport || [], lr(o) ? o : [], c && n ? Wn(c) : []);
  }
  return t.concat(o, Wn(o, [], n));
}
function qa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hd(e) {
  const t = We(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Qe(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = qr(n) !== a || qr(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function ti(e) {
  return $e(e) ? e : e.contextElement;
}
function rn(e) {
  const t = ti(e);
  if (!Qe(t))
    return Ue(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Hd(t);
  let s = (a ? qr(n.width) : n.width) / r, c = (a ? qr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const eE = /* @__PURE__ */ Ue(0);
function zd(e) {
  const t = Me(e);
  return !ei() || !t.visualViewport ? eE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function tE(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Me(e) ? !1 : t;
}
function Lt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ti(e);
  let s = Ue(1);
  t && (r ? $e(r) && (s = rn(r)) : s = rn(e));
  const c = tE(a, n, r) ? zd(a) : Ue(0);
  let u = (o.left + c.x) / s.x, d = (o.top + c.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const p = Me(a), v = r && $e(r) ? Me(r) : r;
    let g = p, h = qa(g);
    for (; h && r && v !== g; ) {
      const x = rn(h), b = h.getBoundingClientRect(), y = We(h), w = b.left + (h.clientLeft + parseFloat(y.paddingLeft)) * x.x, C = b.top + (h.clientTop + parseFloat(y.paddingTop)) * x.y;
      u *= x.x, d *= x.y, f *= x.x, m *= x.y, u += w, d += C, g = Me(h), h = qa(g);
    }
  }
  return Qr({
    width: f,
    height: m,
    x: u,
    y: d
  });
}
function jo(e, t) {
  const n = Mo(e).scrollLeft;
  return t ? t.left + n : Lt(et(e)).left + n;
}
function Gd(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - jo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function nE(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = et(r), c = t ? _o(t.floating) : !1;
  if (r === s || c && a)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ue(1);
  const f = Ue(0), m = Qe(r);
  if ((m || !m && !a) && ((bn(r) !== "body" || lr(s)) && (u = Mo(r)), Qe(r))) {
    const v = Lt(r);
    d = rn(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const p = s && !m && !a ? Gd(s, u) : Ue(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - u.scrollTop * d.y + f.y + p.y
  };
}
function rE(e) {
  return Array.from(e.getClientRects());
}
function oE(e) {
  const t = et(e), n = Mo(e), r = e.ownerDocument.body, o = _e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = _e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + jo(e);
  const c = -n.scrollTop;
  return We(r).direction === "rtl" && (s += _e(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
const Hc = 25;
function aE(e, t) {
  const n = Me(e), r = et(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = ei();
    (!f || f && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  const d = jo(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), v = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - m.clientWidth - v);
    g <= Hc && (a -= g);
  } else d <= Hc && (a += d);
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
const sE = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function iE(e, t) {
  const n = Lt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Qe(e) ? rn(e) : Ue(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, d = r * a.y;
  return {
    width: s,
    height: c,
    x: u,
    y: d
  };
}
function zc(e, t, n) {
  let r;
  if (t === "viewport")
    r = aE(e, n);
  else if (t === "document")
    r = oE(et(e));
  else if ($e(t))
    r = iE(t, n);
  else {
    const o = zd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Qr(r);
}
function Yd(e, t) {
  const n = xt(e);
  return n === t || !$e(n) || an(n) ? !1 : We(n).position === "fixed" || Yd(n, t);
}
function cE(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wn(e, [], !1).filter((c) => $e(c) && bn(c) !== "body"), o = null;
  const a = We(e).position === "fixed";
  let s = a ? xt(e) : e;
  for (; $e(s) && !an(s); ) {
    const c = We(s), u = Zs(s);
    !u && c.position === "fixed" && (o = null), (a ? !u && !o : !u && c.position === "static" && !!o && sE.has(o.position) || lr(s) && !u && Yd(e, s)) ? r = r.filter((f) => f !== s) : o = c, s = xt(s);
  }
  return t.set(e, r), r;
}
function lE(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? _o(t) ? [] : cE(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((d, f) => {
    const m = zc(t, f, o);
    return d.top = _e(m.top, d.top), d.right = gt(m.right, d.right), d.bottom = gt(m.bottom, d.bottom), d.left = _e(m.left, d.left), d;
  }, zc(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function uE(e) {
  const {
    width: t,
    height: n
  } = Hd(e);
  return {
    width: t,
    height: n
  };
}
function dE(e, t, n) {
  const r = Qe(t), o = et(t), a = n === "fixed", s = Lt(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ue(0);
  function d() {
    u.x = jo(o);
  }
  if (r || !r && !a)
    if ((bn(t) !== "body" || lr(o)) && (c = Mo(t)), r) {
      const v = Lt(t, !0, a, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const f = o && !r && !a ? Gd(o, c) : Ue(0), m = s.left + c.scrollLeft - u.x - f.x, p = s.top + c.scrollTop - u.y - f.y;
  return {
    x: m,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ta(e) {
  return We(e).position === "static";
}
function Gc(e, t) {
  if (!Qe(e) || We(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return et(e) === n && (n = n.ownerDocument.body), n;
}
function Kd(e, t) {
  const n = Me(e);
  if (_o(e))
    return n;
  if (!Qe(e)) {
    let o = xt(e);
    for (; o && !an(o); ) {
      if ($e(o) && !Ta(o))
        return o;
      o = xt(o);
    }
    return n;
  }
  let r = Gc(e, t);
  for (; r && KN(r) && Ta(r); )
    r = Gc(r, t);
  return r && an(r) && Ta(r) && !Zs(r) ? n : r || JN(e) || n;
}
const fE = async function(e) {
  const t = this.getOffsetParent || Kd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: dE(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function mE(e) {
  return We(e).direction === "rtl";
}
const pE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nE,
  getDocumentElement: et,
  getClippingRect: lE,
  getOffsetParent: Kd,
  getElementRects: fE,
  getClientRects: rE,
  getDimensions: uE,
  getScale: rn,
  isElement: $e,
  isRTL: mE
};
function Ud(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function hE(e, t) {
  let n = null, r;
  const o = et(e);
  function a() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), a();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: p,
      height: v
    } = d;
    if (c || t(), !p || !v)
      return;
    const g = Ar(m), h = Ar(o.clientWidth - (f + p)), x = Ar(o.clientHeight - (m + v)), b = Ar(f), w = {
      rootMargin: -g + "px " + -h + "px " + -x + "px " + -b + "px",
      threshold: _e(0, gt(1, u)) || 1
    };
    let C = !0;
    function S(N) {
      const R = N[0].intersectionRatio;
      if (R !== u) {
        if (!C)
          return s();
        R ? s(!1, R) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !Ud(d, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function vE(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, d = ti(e), f = o || a ? [...d ? Wn(d) : [], ...Wn(t)] : [];
  f.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const m = d && c ? hE(d, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let g, h = u ? Lt(e) : null;
  u && x();
  function x() {
    const b = Lt(e);
    h && !Ud(h, b) && n(), h = b, g = requestAnimationFrame(x);
  }
  return n(), () => {
    var b;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), m?.(), (b = v) == null || b.disconnect(), v = null, u && cancelAnimationFrame(g);
  };
}
const gE = VN, xE = BN, bE = FN, yE = zN, wE = $N, Yc = LN, CE = HN, SE = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: pE,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return ON(e, t, {
    ...o,
    platform: a
  });
};
var NE = typeof document < "u", EE = function() {
}, Fr = NE ? al : EE;
function Jr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Jr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Jr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kc(e, t) {
  const n = qd(e);
  return Math.round(t * n) / n;
}
function _a(e) {
  const t = l.useRef(e);
  return Fr(() => {
    t.current = e;
  }), t;
}
function RE(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: d
  } = e, [f, m] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = l.useState(r);
  Jr(p, r) || v(r);
  const [g, h] = l.useState(null), [x, b] = l.useState(null), y = l.useCallback((P) => {
    P !== N.current && (N.current = P, h(P));
  }, []), w = l.useCallback((P) => {
    P !== R.current && (R.current = P, b(P));
  }, []), C = a || g, S = s || x, N = l.useRef(null), R = l.useRef(null), E = l.useRef(f), _ = u != null, O = _a(u), F = _a(o), U = _a(d), Q = l.useCallback(() => {
    if (!N.current || !R.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: p
    };
    F.current && (P.platform = F.current), SE(N.current, R.current, P).then(($) => {
      const j = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: U.current !== !1
      };
      k.current && !Jr(E.current, j) && (E.current = j, Yn.flushSync(() => {
        m(j);
      }));
    });
  }, [p, t, n, F, U]);
  Fr(() => {
    d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, m((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [d]);
  const k = l.useRef(!1);
  Fr(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Fr(() => {
    if (C && (N.current = C), S && (R.current = S), C && S) {
      if (O.current)
        return O.current(C, S, Q);
      Q();
    }
  }, [C, S, Q, O, _]);
  const G = l.useMemo(() => ({
    reference: N,
    floating: R,
    setReference: y,
    setFloating: w
  }), [y, w]), V = l.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), D = l.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return P;
    const $ = Kc(V.floating, f.x), j = Kc(V.floating, f.y);
    return c ? {
      ...P,
      transform: "translate(" + $ + "px, " + j + "px)",
      ...qd(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: j
    };
  }, [n, c, V.floating, f.x, f.y]);
  return l.useMemo(() => ({
    ...f,
    update: Q,
    refs: G,
    elements: V,
    floatingStyles: D
  }), [f, Q, G, V, D]);
}
const PE = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Yc({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Yc({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, TE = (e, t) => ({
  ...gE(e),
  options: [e, t]
}), _E = (e, t) => ({
  ...xE(e),
  options: [e, t]
}), ME = (e, t) => ({
  ...CE(e),
  options: [e, t]
}), jE = (e, t) => ({
  ...bE(e),
  options: [e, t]
}), kE = (e, t) => ({
  ...yE(e),
  options: [e, t]
}), AE = (e, t) => ({
  ...wE(e),
  options: [e, t]
}), DE = (e, t) => ({
  ...PE(e),
  options: [e, t]
});
var IE = "Arrow", Xd = l.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ i.jsx(
    W.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ i.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Xd.displayName = IE;
var OE = Xd, ni = "Popper", [Qd, wt] = ve(ni), [LE, Jd] = Qd(ni), Zd = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = l.useState(null);
  return /* @__PURE__ */ i.jsx(LE, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Zd.displayName = ni;
var ef = "PopperAnchor", tf = l.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Jd(ef, n), s = l.useRef(null), c = J(t, s), u = l.useRef(null);
    return l.useEffect(() => {
      const d = u.current;
      u.current = r?.current || s.current, d !== u.current && a.onAnchorChange(u.current);
    }), r ? null : /* @__PURE__ */ i.jsx(W.div, { ...o, ref: c });
  }
);
tf.displayName = ef;
var ri = "PopperContent", [FE, $E] = Qd(ri), nf = l.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: u = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: g,
      ...h
    } = e, x = Jd(ri, n), [b, y] = l.useState(null), w = J(t, (A) => y(A)), [C, S] = l.useState(null), N = Co(C), R = N?.width ?? 0, E = N?.height ?? 0, _ = r + (a !== "center" ? "-" + a : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, F = Array.isArray(d) ? d : [d], U = F.length > 0, Q = {
      padding: O,
      boundary: F.filter(VE),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: U
    }, { refs: k, floatingStyles: G, placement: V, isPositioned: D, middlewareData: P } = RE({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...A) => vE(...A, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        TE({ mainAxis: o + E, alignmentAxis: s }),
        u && _E({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? ME() : void 0,
          ...Q
        }),
        u && jE({ ...Q }),
        kE({
          ...Q,
          apply: ({ elements: A, rects: K, availableWidth: te, availableHeight: ne }) => {
            const { width: ee, height: H } = K.reference, oe = A.floating.style;
            oe.setProperty("--radix-popper-available-width", `${te}px`), oe.setProperty("--radix-popper-available-height", `${ne}px`), oe.setProperty("--radix-popper-anchor-width", `${ee}px`), oe.setProperty("--radix-popper-anchor-height", `${H}px`);
          }
        }),
        C && DE({ element: C, padding: c }),
        BE({ arrowWidth: R, arrowHeight: E }),
        p && AE({ strategy: "referenceHidden", ...Q })
      ]
    }), [$, j] = af(V), Y = ie(g);
    fe(() => {
      D && Y?.();
    }, [D, Y]);
    const M = P.arrow?.x, L = P.arrow?.y, z = P.arrow?.centerOffset !== 0, [B, Z] = l.useState();
    return fe(() => {
      b && Z(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ i.jsx(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: D ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B,
          "--radix-popper-transform-origin": [
            P.transformOrigin?.x,
            P.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...P.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ i.jsx(
          FE,
          {
            scope: n,
            placedSide: $,
            onArrowChange: S,
            arrowX: M,
            arrowY: L,
            shouldHideArrow: z,
            children: /* @__PURE__ */ i.jsx(
              W.div,
              {
                "data-side": $,
                "data-align": j,
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
nf.displayName = ri;
var rf = "PopperArrow", WE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, of = l.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = $E(rf, r), s = WE[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ i.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
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
        children: /* @__PURE__ */ i.jsx(
          OE,
          {
            ...o,
            ref: n,
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
of.displayName = rf;
function VE(e) {
  return e !== null;
}
var BE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, c = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [d, f] = af(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (o.arrow?.x ?? 0) + c / 2, v = (o.arrow?.y ?? 0) + u / 2;
    let g = "", h = "";
    return d === "bottom" ? (g = s ? m : `${p}px`, h = `${-u}px`) : d === "top" ? (g = s ? m : `${p}px`, h = `${r.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, h = s ? m : `${v}px`) : d === "left" && (g = `${r.floating.width + u}px`, h = s ? m : `${v}px`), { data: { x: g, y: h } };
  }
});
function af(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ur = Zd, dr = tf, ko = nf, Ao = of, Do = "Popover", [sf, Lj] = ve(Do, [
  wt
]), fr = wt(), [HE, Ct] = sf(Do), cf = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, c = fr(t), u = l.useRef(null), [d, f] = l.useState(!1), [m, p] = ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Do
  });
  return /* @__PURE__ */ i.jsx(ur, { ...c, children: /* @__PURE__ */ i.jsx(
    HE,
    {
      scope: t,
      contentId: pe(),
      triggerRef: u,
      open: m,
      onOpenChange: p,
      onOpenToggle: l.useCallback(() => p((v) => !v), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: l.useCallback(() => f(!0), []),
      onCustomAnchorRemove: l.useCallback(() => f(!1), []),
      modal: s,
      children: n
    }
  ) });
};
cf.displayName = Do;
var lf = "PopoverAnchor", zE = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ct(lf, n), a = fr(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: c } = o;
    return l.useEffect(() => (s(), () => c()), [s, c]), /* @__PURE__ */ i.jsx(dr, { ...a, ...r, ref: t });
  }
);
zE.displayName = lf;
var uf = "PopoverTrigger", df = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ct(uf, n), a = fr(n), s = J(t, o.triggerRef), c = /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": vf(o.open),
        ...r,
        ref: s,
        onClick: I(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? c : /* @__PURE__ */ i.jsx(dr, { asChild: !0, ...a, children: c });
  }
);
df.displayName = uf;
var oi = "PopoverPortal", [GE, YE] = sf(oi, {
  forceMount: void 0
}), ff = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Ct(oi, t);
  return /* @__PURE__ */ i.jsx(GE, { scope: t, forceMount: n, children: /* @__PURE__ */ i.jsx(me, { present: n || a.open, children: /* @__PURE__ */ i.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
ff.displayName = oi;
var sn = "PopoverContent", mf = l.forwardRef(
  (e, t) => {
    const n = YE(sn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Ct(sn, e.__scopePopover);
    return /* @__PURE__ */ i.jsx(me, { present: r || a.open, children: a.modal ? /* @__PURE__ */ i.jsx(UE, { ...o, ref: t }) : /* @__PURE__ */ i.jsx(qE, { ...o, ref: t }) });
  }
);
mf.displayName = sn;
var KE = /* @__PURE__ */ ht("PopoverContent.RemoveScroll"), UE = l.forwardRef(
  (e, t) => {
    const n = Ct(sn, e.__scopePopover), r = l.useRef(null), o = J(t, r), a = l.useRef(!1);
    return l.useEffect(() => {
      const s = r.current;
      if (s) return ho(s);
    }, []), /* @__PURE__ */ i.jsx(Qn, { as: KE, allowPinchZoom: !0, children: /* @__PURE__ */ i.jsx(
      pf,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: I(
          e.onPointerDownOutside,
          (s) => {
            const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: I(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), qE = l.forwardRef(
  (e, t) => {
    const n = Ct(sn, e.__scopePopover), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ i.jsx(
      pf,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          n.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), pf = l.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: f,
      ...m
    } = e, p = Ct(sn, n), v = fr(n);
    return mo(), /* @__PURE__ */ i.jsx(
      Xn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ i.jsx(
          bt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ i.jsx(
              ko,
              {
                "data-state": vf(p.open),
                role: "dialog",
                id: p.contentId,
                ...v,
                ...m,
                ref: t,
                style: {
                  ...m.style,
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
), hf = "PopoverClose", XE = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ct(hf, n);
    return /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: I(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
XE.displayName = hf;
var QE = "PopoverArrow", JE = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fr(n);
    return /* @__PURE__ */ i.jsx(Ao, { ...o, ...r, ref: t });
  }
);
JE.displayName = QE;
function vf(e) {
  return e ? "open" : "closed";
}
var ZE = cf, eR = df, tR = ff, gf = mf;
const mr = ZE, pr = eR, yn = l.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ i.jsx(tR, { children: /* @__PURE__ */ i.jsx(
  gf,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
yn.displayName = gf.displayName;
function Fj({ value: e, onChange: t }) {
  const [n, r] = l.useState(e);
  function o(a) {
    r(a), t?.(a);
  }
  return /* @__PURE__ */ i.jsxs(mr, { children: [
    /* @__PURE__ */ i.jsx(pr, { asChild: !0, children: /* @__PURE__ */ i.jsxs(
      yt,
      {
        variant: "outline",
        className: T(
          "w-full justify-between text-left font-normal hover:bg-input bg-input",
          !n && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ i.jsx(Uv, { className: "mr-2" }),
            n ? Ze(n, "PPP", { locale: Mn }) : /* @__PURE__ */ i.jsx("span", { children: "Selecione uma data" })
          ] }),
          /* @__PURE__ */ i.jsx(pt, { className: "shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ i.jsx(yn, { className: "w-auto p-0", children: /* @__PURE__ */ i.jsx(
      vd,
      {
        required: !0,
        mode: "single",
        selected: n,
        onSelect: o,
        initialFocus: !0
      }
    ) })
  ] });
}
function nR(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function rR(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function oR(e) {
  return /^[0-5][0-9]$/.test(e);
}
function Io(e, { max: t, min: n = 0, loop: r = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (r ? (o > t && (o = n), o < n && (o = t)) : (o > t && (o = t), o < n && (o = n)), o.toString().padStart(2, "0"));
}
function xf(e) {
  return nR(e) ? e : Io(e, { max: 23 });
}
function bf(e) {
  return rR(e) ? e : Io(e, { min: 1, max: 12 });
}
function Zr(e) {
  return oR(e) ? e : Io(e, { max: 59 });
}
function ai(e, { min: t, max: n, step: r }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += r, Io(String(o), { min: t, max: n, loop: !0 }));
}
function aR(e, t) {
  return ai(e, { min: 0, max: 23, step: t });
}
function sR(e, t) {
  return ai(e, { min: 1, max: 12, step: t });
}
function Uc(e, t) {
  return ai(e, { min: 0, max: 59, step: t });
}
function iR(e, t) {
  const n = Zr(t);
  return e.setMinutes(parseInt(n, 10)), e;
}
function cR(e, t) {
  const n = Zr(t);
  return e.setSeconds(parseInt(n, 10)), e;
}
function lR(e, t) {
  const n = xf(t);
  return e.setHours(parseInt(n, 10)), e;
}
function uR(e, t, n) {
  const r = parseInt(bf(t), 10), o = mR(r, n);
  return e.setHours(o), e;
}
function Xa(e, t, n, r) {
  switch (n) {
    case "minutes":
      return iR(e, t);
    case "seconds":
      return cR(e, t);
    case "hours":
      return lR(e, t);
    case "12hours":
      return r ? uR(e, t, r) : e;
    default:
      return e;
  }
}
function dR(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Zr(String(e.getMinutes()));
    case "seconds":
      return Zr(String(e.getSeconds()));
    case "hours":
      return xf(String(e.getHours()));
    case "12hours":
      return bf(String(yf(e.getHours())));
    default:
      return "00";
  }
}
function fR(e, t, n) {
  switch (n) {
    case "minutes":
      return Uc(e, t);
    case "seconds":
      return Uc(e, t);
    case "hours":
      return aR(e, t);
    case "12hours":
      return sR(e, t);
    default:
      return "00";
  }
}
function mR(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function yf(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function pR(e) {
  return Array.from({ length: 12 }, (t, n) => ({
    value: n,
    label: Ze(new Date(2021, n), "MMMM", { locale: e })
  }));
}
function hR(e = 50) {
  const t = /* @__PURE__ */ new Date();
  return Array.from({ length: e * 2 + 1 }, (n, r) => ({
    value: t.getFullYear() - e + r,
    label: (t.getFullYear() - e + r).toString()
  }));
}
function wf({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  yearRange: r = 50,
  ...o
}) {
  const a = l.useMemo(() => {
    let d = Mn;
    const { options: f, localize: m, formatLong: p } = o.locale || {};
    return f && m && p && (d = {
      options: f,
      localize: m,
      formatLong: p
    }), pR(d);
  }, []), s = l.useMemo(() => hR(r), []), c = () => {
    const d = /* @__PURE__ */ new Date(), f = new Date(d.getFullYear() - r, 0, 1);
    return o.month ? o.month.getMonth() === f.getMonth() && o.month.getFullYear() === f.getFullYear() : !1;
  }, u = () => {
    const d = /* @__PURE__ */ new Date(), f = new Date(d.getFullYear() + r, 11, 31);
    return o.month ? o.month.getMonth() === f.getMonth() && o.month.getFullYear() === f.getFullYear() : !1;
  };
  return /* @__PURE__ */ i.jsx(
    pd,
    {
      showOutsideDays: n,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          ot({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&_svg]:size-3"
        ),
        nav_button_previous: T(
          "absolute left-1",
          c() && "pointer-events-none"
        ),
        nav_button_next: T(
          "absolute right-1",
          u() && "pointer-events-none"
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
          ot({ variant: "ghost" }),
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
        Chevron: ({ ...d }) => d.orientation === "left" ? /* @__PURE__ */ i.jsx(hs, { className: "h-4 w-4" }) : /* @__PURE__ */ i.jsx(Un, { className: "h-4 w-4" }),
        MonthCaption: ({ calendarMonth: d }) => /* @__PURE__ */ i.jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ i.jsxs(
            so,
            {
              defaultValue: d.date.getMonth().toString(),
              onValueChange: (f) => {
                const m = new Date(d.date);
                m.setMonth(Number.parseInt(f, 10)), o.onMonthChange?.(m);
              },
              children: [
                /* @__PURE__ */ i.jsx(Hn, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ i.jsx(io, {}) }),
                /* @__PURE__ */ i.jsx(zn, { children: a.map((f) => /* @__PURE__ */ i.jsx(
                  un,
                  {
                    value: f.value.toString(),
                    children: f.label
                  },
                  f.value
                )) })
              ]
            }
          ),
          /* @__PURE__ */ i.jsxs(
            so,
            {
              defaultValue: d.date.getFullYear().toString(),
              onValueChange: (f) => {
                const m = new Date(d.date);
                m.setFullYear(Number.parseInt(f, 10)), o.onMonthChange?.(m);
              },
              children: [
                /* @__PURE__ */ i.jsx(Hn, { className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground", children: /* @__PURE__ */ i.jsx(io, {}) }),
                /* @__PURE__ */ i.jsx(zn, { children: s.map((f) => /* @__PURE__ */ i.jsx(
                  un,
                  {
                    value: f.value.toString(),
                    children: f.label
                  },
                  f.value
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
wf.displayName = "Calendar";
const Cf = l.forwardRef(
  ({ period: e, setPeriod: t, date: n, onDateChange: r, onLeftFocus: o, onRightFocus: a }, s) => {
    const c = (d) => {
      d.key === "ArrowRight" && a?.(), d.key === "ArrowLeft" && o?.();
    }, u = (d) => {
      if (t?.(d), n) {
        const f = new Date(n), m = yf(n.getHours());
        r?.(
          Xa(
            f,
            m.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ i.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ i.jsxs(
      so,
      {
        defaultValue: e,
        onValueChange: (d) => u(d),
        children: [
          /* @__PURE__ */ i.jsx(
            Hn,
            {
              ref: s,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: c,
              children: /* @__PURE__ */ i.jsx(io, {})
            }
          ),
          /* @__PURE__ */ i.jsxs(zn, { children: [
            /* @__PURE__ */ i.jsx(un, { value: "AM", children: "AM" }),
            /* @__PURE__ */ i.jsx(un, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Cf.displayName = "TimePeriodSelect";
const $r = l.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: n,
    id: r,
    name: o,
    date: a = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    onDateChange: s,
    onChange: c,
    onKeyDown: u,
    picker: d,
    period: f,
    onLeftFocus: m,
    onRightFocus: p,
    ...v
  }, g) => {
    const [h, x] = l.useState(!1), [b, y] = l.useState("0");
    l.useEffect(() => {
      if (h) {
        const N = setTimeout(() => {
          x(!1);
        }, 2e3);
        return () => clearTimeout(N);
      }
    }, [h]);
    const w = l.useMemo(() => dR(a, d), [a, d]), C = (N) => d === "12hours" && h && w.slice(1, 2) === "1" && b === "0" ? `0${N}` : h ? w.slice(1, 2) + N : `0${N}`, S = (N) => {
      if (N.key !== "Tab") {
        if (N.preventDefault(), N.key === "ArrowRight" && p?.(), N.key === "ArrowLeft" && m?.(), ["ArrowUp", "ArrowDown"].includes(N.key)) {
          const R = N.key === "ArrowUp" ? 1 : -1, E = fR(w, R, d);
          h && x(!1);
          const _ = a ? new Date(a) : /* @__PURE__ */ new Date();
          s?.(Xa(_, E, d, f));
        }
        if (N.key >= "0" && N.key <= "9") {
          d === "12hours" && y(N.key);
          const R = C(N.key);
          h && p?.(), x((_) => !_);
          const E = a ? new Date(a) : /* @__PURE__ */ new Date();
          s?.(Xa(E, R, d, f));
        }
      }
    };
    return /* @__PURE__ */ i.jsx(
      pi,
      {
        ref: g,
        id: r || d,
        name: o || d,
        className: T(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: n || w,
        onChange: (N) => {
          N.preventDefault(), c?.(N);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (N) => {
          u?.(N), S(N);
        },
        ...v
      }
    );
  }
);
$r.displayName = "TimePickerInput";
const Sf = l.forwardRef(
  ({ date: e, onChange: t, hourCycle: n = 24, granularity: r = "second" }, o) => {
    const a = l.useRef(null), s = l.useRef(null), c = l.useRef(null), u = l.useRef(null), [d, f] = l.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return sl(
      o,
      () => ({
        minuteRef: a.current,
        hourRef: s.current,
        secondRef: c.current,
        periodRef: u.current
      }),
      [a, s, c]
    ), /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ i.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ i.jsx(qv, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ i.jsx(
        $r,
        {
          picker: n === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: s,
          period: d,
          onRightFocus: () => a?.current?.focus()
        }
      ),
      (r === "minute" || r === "second") && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        ":",
        /* @__PURE__ */ i.jsx(
          $r,
          {
            picker: "minutes",
            date: e,
            onDateChange: t,
            ref: a,
            onLeftFocus: () => s?.current?.focus(),
            onRightFocus: () => c?.current?.focus()
          }
        )
      ] }),
      r === "second" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        ":",
        /* @__PURE__ */ i.jsx(
          $r,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: c,
            onLeftFocus: () => a?.current?.focus(),
            onRightFocus: () => u?.current?.focus()
          }
        )
      ] }),
      n === 12 && /* @__PURE__ */ i.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ i.jsx(
        Cf,
        {
          period: d,
          setPeriod: f,
          date: e,
          onDateChange: (m) => {
            t?.(m), m && m?.getHours() >= 12 ? f("PM") : f("AM");
          },
          ref: u,
          onLeftFocus: () => c?.current?.focus()
        }
      ) })
    ] });
  }
);
Sf.displayName = "TimePicker";
const vR = l.forwardRef(
  ({
    locale: e = Mn,
    defaultPopupValue: t = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    value: n,
    onChange: r,
    hourCycle: o = 24,
    yearRange: a = 50,
    disabled: s = !1,
    displayFormat: c,
    granularity: u = "second",
    placeholder: d = "Selecione...",
    className: f,
    ...m
  }, p) => {
    const [v, g] = l.useState(n ?? t), h = Hr(null), [x, b] = l.useState(
      n
    ), y = (_) => {
      if (!_)
        return;
      if (!t) {
        _.setHours(
          v?.getHours() ?? 0,
          v?.getMinutes() ?? 0,
          v?.getSeconds() ?? 0
        ), r?.(_), g(_);
        return;
      }
      const F = (_.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), U = _y(t, {
        days: Math.ceil(F)
      });
      U.setHours(
        v?.getHours() ?? 0,
        v?.getMinutes() ?? 0,
        v?.getSeconds() ?? 0
      ), r?.(U), g(U);
    };
    je(() => {
      n || b(void 0);
    }, [n]);
    const w = (_) => {
      _ && (r?.(_), g(_), b(_));
    };
    sl(
      p,
      () => ({
        ...h.current,
        value: x
      }),
      [x]
    );
    const C = {
      hour24: c?.hour24 ?? `PPP HH:mm${!u || u === "second" ? ":ss" : ""}`,
      hour12: c?.hour12 ?? `PP hh:mm${!u || u === "second" ? ":ss" : ""} b`
    };
    let S = Mn;
    const { options: N, localize: R, formatLong: E } = e;
    return N && R && E && (S = {
      ...Mn,
      options: N,
      localize: R,
      formatLong: E
    }), /* @__PURE__ */ i.jsxs(mr, { children: [
      /* @__PURE__ */ i.jsx(pr, { asChild: !0, disabled: s, children: /* @__PURE__ */ i.jsxs(
        yt,
        {
          variant: "outline",
          className: T(
            "w-full justify-between text-left font-normal hover:bg-input bg-input",
            !x && "text-muted-foreground",
            f
          ),
          ref: h,
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ i.jsx(Xv, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ i.jsx("span", { className: "truncate block", title: d, children: x ? Ze(
                x,
                o === 24 ? C.hour24 : C.hour12,
                {
                  locale: S
                }
              ) : /* @__PURE__ */ i.jsx("span", { children: d }) })
            ] }),
            /* @__PURE__ */ i.jsx(pt, { className: "shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsxs(yn, { className: "w-auto p-0", children: [
        /* @__PURE__ */ i.jsx(
          wf,
          {
            mode: "single",
            selected: x,
            month: v,
            onSelect: (_) => {
              _ && (_.setHours(
                v?.getHours() ?? 0,
                v?.getMinutes() ?? 0,
                v?.getSeconds() ?? 0
              ), w(_));
            },
            onMonthChange: y,
            yearRange: a,
            locale: e,
            ...m
          }
        ),
        u !== "day" && /* @__PURE__ */ i.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ i.jsx(
          Sf,
          {
            onChange: (_) => {
              r?.(_), b(_), _ && g(_);
            },
            date: v,
            hourCycle: o,
            granularity: u
          }
        ) })
      ] })
    ] });
  }
);
vR.displayName = "DateTimePicker";
const gR = go, $j = Ts, xR = xo, Wj = vn, Nf = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  pn,
  {
    ref: n,
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Nf.displayName = pn.displayName;
const Ef = l.forwardRef(({ className: e, onClose: t, ...n }, r) => /* @__PURE__ */ i.jsxs(xR, { children: [
  /* @__PURE__ */ i.jsx(Nf, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ i.jsxs(
    hn,
    {
      ref: r,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ i.jsx(
          vn,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ i.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ i.jsx(vs, { className: "h-4 w-4" }),
              /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
Ef.displayName = hn.displayName;
const bR = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
bR.displayName = "DialogHeader";
const yR = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
yR.displayName = "DialogFooter";
const wR = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Jn,
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
wR.displayName = Jn.displayName;
const CR = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Zn,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
CR.displayName = Zn.displayName;
var Ma = "rovingFocusGroup.onEntryFocus", SR = { bubbles: !1, cancelable: !0 }, hr = "RovingFocusGroup", [Qa, Rf, NR] = Bt(hr), [ER, St] = ve(
  hr,
  [NR]
), [RR, PR] = ER(hr), Pf = l.forwardRef(
  (e, t) => /* @__PURE__ */ i.jsx(Qa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ i.jsx(Qa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ i.jsx(TR, { ...e, ref: t }) }) })
);
Pf.displayName = hr;
var TR = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: u,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, p = l.useRef(null), v = J(t, p), g = it(a), [h, x] = ge({
    prop: s,
    defaultProp: c ?? null,
    onChange: u,
    caller: hr
  }), [b, y] = l.useState(!1), w = ie(d), C = Rf(n), S = l.useRef(!1), [N, R] = l.useState(0);
  return l.useEffect(() => {
    const E = p.current;
    if (E)
      return E.addEventListener(Ma, w), () => E.removeEventListener(Ma, w);
  }, [w]), /* @__PURE__ */ i.jsx(
    RR,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: h,
      onItemFocus: l.useCallback(
        (E) => x(E),
        [x]
      ),
      onItemShiftTab: l.useCallback(() => y(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => R((E) => E + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => R((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ i.jsx(
        W.div,
        {
          tabIndex: b || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: I(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: I(e.onFocus, (E) => {
            const _ = !S.current;
            if (E.target === E.currentTarget && _ && !b) {
              const O = new CustomEvent(Ma, SR);
              if (E.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const F = C().filter((V) => V.focusable), U = F.find((V) => V.active), Q = F.find((V) => V.id === h), G = [U, Q, ...F].filter(
                  Boolean
                ).map((V) => V.ref.current);
                Mf(G, f);
              }
            }
            S.current = !1;
          }),
          onBlur: I(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Tf = "RovingFocusGroupItem", _f = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...c
    } = e, u = pe(), d = a || u, f = PR(Tf, n), m = f.currentTabStopId === d, p = Rf(n), { onFocusableItemAdd: v, onFocusableItemRemove: g, currentTabStopId: h } = f;
    return l.useEffect(() => {
      if (r)
        return v(), () => g();
    }, [r, v, g]), /* @__PURE__ */ i.jsx(
      Qa.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ i.jsx(
          W.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...c,
            ref: t,
            onMouseDown: I(e.onMouseDown, (x) => {
              r ? f.onItemFocus(d) : x.preventDefault();
            }),
            onFocus: I(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: I(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const b = jR(x, f.orientation, f.dir);
              if (b !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let w = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (b === "last") w.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && w.reverse();
                  const C = w.indexOf(x.currentTarget);
                  w = f.loop ? kR(w, C + 1) : w.slice(C + 1);
                }
                setTimeout(() => Mf(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
_f.displayName = Tf;
var _R = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function MR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function jR(e, t, n) {
  const r = MR(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return _R[r];
}
function Mf(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function kR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Oo = Pf, Lo = _f, Ja = ["Enter", " "], AR = ["ArrowDown", "PageUp", "Home"], jf = ["ArrowUp", "PageDown", "End"], DR = [...AR, ...jf], IR = {
  ltr: [...Ja, "ArrowRight"],
  rtl: [...Ja, "ArrowLeft"]
}, OR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, vr = "Menu", [Vn, LR, FR] = Bt(vr), [zt, kf] = ve(vr, [
  FR,
  wt,
  St
]), gr = wt(), Af = St(), [Df, Nt] = zt(vr), [$R, xr] = zt(vr), If = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, c = gr(t), [u, d] = l.useState(null), f = l.useRef(!1), m = ie(a), p = it(o);
  return l.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ i.jsx(ur, { ...c, children: /* @__PURE__ */ i.jsx(
    Df,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ i.jsx(
        $R,
        {
          scope: t,
          onClose: l.useCallback(() => m(!1), [m]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
If.displayName = vr;
var WR = "MenuAnchor", si = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = gr(n);
    return /* @__PURE__ */ i.jsx(dr, { ...o, ...r, ref: t });
  }
);
si.displayName = WR;
var ii = "MenuPortal", [VR, Of] = zt(ii, {
  forceMount: void 0
}), Lf = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Nt(ii, t);
  return /* @__PURE__ */ i.jsx(VR, { scope: t, forceMount: n, children: /* @__PURE__ */ i.jsx(me, { present: n || a.open, children: /* @__PURE__ */ i.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
Lf.displayName = ii;
var ke = "MenuContent", [BR, ci] = zt(ke), Ff = l.forwardRef(
  (e, t) => {
    const n = Of(ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Nt(ke, e.__scopeMenu), s = xr(ke, e.__scopeMenu);
    return /* @__PURE__ */ i.jsx(Vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ i.jsx(me, { present: r || a.open, children: /* @__PURE__ */ i.jsx(Vn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ i.jsx(HR, { ...o, ref: t }) : /* @__PURE__ */ i.jsx(zR, { ...o, ref: t }) }) }) });
  }
), HR = l.forwardRef(
  (e, t) => {
    const n = Nt(ke, e.__scopeMenu), r = l.useRef(null), o = J(t, r);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return ho(a);
    }, []), /* @__PURE__ */ i.jsx(
      li,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: I(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), zR = l.forwardRef((e, t) => {
  const n = Nt(ke, e.__scopeMenu);
  return /* @__PURE__ */ i.jsx(
    li,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), GR = /* @__PURE__ */ ht("MenuContent.ScrollLock"), li = l.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: c,
      onEntryFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: m,
      onInteractOutside: p,
      onDismiss: v,
      disableOutsideScroll: g,
      ...h
    } = e, x = Nt(ke, n), b = xr(ke, n), y = gr(n), w = Af(n), C = LR(n), [S, N] = l.useState(null), R = l.useRef(null), E = J(t, R, x.onContentChange), _ = l.useRef(0), O = l.useRef(""), F = l.useRef(0), U = l.useRef(null), Q = l.useRef("right"), k = l.useRef(0), G = g ? Qn : l.Fragment, V = g ? { as: GR, allowPinchZoom: !0 } : void 0, D = ($) => {
      const j = O.current + $, Y = C().filter((A) => !A.disabled), M = document.activeElement, L = Y.find((A) => A.ref.current === M)?.textValue, z = Y.map((A) => A.textValue), B = rP(z, j, L), Z = Y.find((A) => A.textValue === B)?.ref.current;
      (function A(K) {
        O.current = K, window.clearTimeout(_.current), K !== "" && (_.current = window.setTimeout(() => A(""), 1e3));
      })(j), Z && setTimeout(() => Z.focus());
    };
    l.useEffect(() => () => window.clearTimeout(_.current), []), mo();
    const P = l.useCallback(($) => Q.current === U.current?.side && aP($, U.current?.area), []);
    return /* @__PURE__ */ i.jsx(
      BR,
      {
        scope: n,
        searchRef: O,
        onItemEnter: l.useCallback(
          ($) => {
            P($) && $.preventDefault();
          },
          [P]
        ),
        onItemLeave: l.useCallback(
          ($) => {
            P($) || (R.current?.focus(), N(null));
          },
          [P]
        ),
        onTriggerLeave: l.useCallback(
          ($) => {
            P($) && $.preventDefault();
          },
          [P]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: l.useCallback(($) => {
          U.current = $;
        }, []),
        children: /* @__PURE__ */ i.jsx(G, { ...V, children: /* @__PURE__ */ i.jsx(
          Xn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: I(a, ($) => {
              $.preventDefault(), R.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ i.jsx(
              bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: v,
                children: /* @__PURE__ */ i.jsx(
                  Oo,
                  {
                    asChild: !0,
                    ...w,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: I(u, ($) => {
                      b.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ i.jsx(
                      ko,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": tm(x.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...y,
                        ...h,
                        ref: E,
                        style: { outline: "none", ...h.style },
                        onKeyDown: I(h.onKeyDown, ($) => {
                          const Y = $.target.closest("[data-radix-menu-content]") === $.currentTarget, M = $.ctrlKey || $.altKey || $.metaKey, L = $.key.length === 1;
                          Y && ($.key === "Tab" && $.preventDefault(), !M && L && D($.key));
                          const z = R.current;
                          if ($.target !== z || !DR.includes($.key)) return;
                          $.preventDefault();
                          const Z = C().filter((A) => !A.disabled).map((A) => A.ref.current);
                          jf.includes($.key) && Z.reverse(), tP(Z);
                        }),
                        onBlur: I(e.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(_.current), O.current = "");
                        }),
                        onPointerMove: I(
                          e.onPointerMove,
                          Bn(($) => {
                            const j = $.target, Y = k.current !== $.clientX;
                            if ($.currentTarget.contains(j) && Y) {
                              const M = $.clientX > k.current ? "right" : "left";
                              Q.current = M, k.current = $.clientX;
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
Ff.displayName = ke;
var YR = "MenuGroup", ui = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(W.div, { role: "group", ...r, ref: t });
  }
);
ui.displayName = YR;
var KR = "MenuLabel", $f = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(W.div, { ...r, ref: t });
  }
);
$f.displayName = KR;
var eo = "MenuItem", qc = "menu.itemSelect", Fo = l.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = l.useRef(null), s = xr(eo, e.__scopeMenu), c = ci(eo, e.__scopeMenu), u = J(t, a), d = l.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent(qc, { bubbles: !0, cancelable: !0 });
        m.addEventListener(qc, (v) => r?.(v), { once: !0 }), Dn(m, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ i.jsx(
      Wf,
      {
        ...o,
        ref: u,
        disabled: n,
        onClick: I(e.onClick, f),
        onPointerDown: (m) => {
          e.onPointerDown?.(m), d.current = !0;
        },
        onPointerUp: I(e.onPointerUp, (m) => {
          d.current || m.currentTarget?.click();
        }),
        onKeyDown: I(e.onKeyDown, (m) => {
          const p = c.searchRef.current !== "";
          n || p && m.key === " " || Ja.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
Fo.displayName = eo;
var Wf = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = ci(eo, n), c = Af(n), u = l.useRef(null), d = J(t, u), [f, m] = l.useState(!1), [p, v] = l.useState("");
    return l.useEffect(() => {
      const g = u.current;
      g && v((g.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ i.jsx(
      Vn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ i.jsx(Lo, { asChild: !0, ...c, focusable: !r, children: /* @__PURE__ */ i.jsx(
          W.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: I(
              e.onPointerMove,
              Bn((g) => {
                r ? s.onItemLeave(g) : (s.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: I(
              e.onPointerLeave,
              Bn((g) => s.onItemLeave(g))
            ),
            onFocus: I(e.onFocus, () => m(!0)),
            onBlur: I(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), UR = "MenuCheckboxItem", Vf = l.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ i.jsx(Yf, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ i.jsx(
      Fo,
      {
        role: "menuitemcheckbox",
        "aria-checked": to(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": mi(n),
        onSelect: I(
          o.onSelect,
          () => r?.(to(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Vf.displayName = UR;
var Bf = "MenuRadioGroup", [qR, XR] = zt(
  Bf,
  { value: void 0, onValueChange: () => {
  } }
), Hf = l.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = ie(r);
    return /* @__PURE__ */ i.jsx(qR, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ i.jsx(ui, { ...o, ref: t }) });
  }
);
Hf.displayName = Bf;
var zf = "MenuRadioItem", Gf = l.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = XR(zf, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ i.jsx(Yf, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ i.jsx(
      Fo,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": mi(a),
        onSelect: I(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Gf.displayName = zf;
var di = "MenuItemIndicator", [Yf, QR] = zt(
  di,
  { checked: !1 }
), Kf = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = QR(di, n);
    return /* @__PURE__ */ i.jsx(
      me,
      {
        present: r || to(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ i.jsx(
          W.span,
          {
            ...o,
            ref: t,
            "data-state": mi(a.checked)
          }
        )
      }
    );
  }
);
Kf.displayName = di;
var JR = "MenuSeparator", Uf = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(
      W.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Uf.displayName = JR;
var ZR = "MenuArrow", qf = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = gr(n);
    return /* @__PURE__ */ i.jsx(Ao, { ...o, ...r, ref: t });
  }
);
qf.displayName = ZR;
var fi = "MenuSub", [eP, Xf] = zt(fi), Qf = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Nt(fi, t), s = gr(t), [c, u] = l.useState(null), [d, f] = l.useState(null), m = ie(o);
  return l.useEffect(() => (a.open === !1 && m(!1), () => m(!1)), [a.open, m]), /* @__PURE__ */ i.jsx(ur, { ...s, children: /* @__PURE__ */ i.jsx(
    Df,
    {
      scope: t,
      open: r,
      onOpenChange: m,
      content: d,
      onContentChange: f,
      children: /* @__PURE__ */ i.jsx(
        eP,
        {
          scope: t,
          contentId: pe(),
          triggerId: pe(),
          trigger: c,
          onTriggerChange: u,
          children: n
        }
      )
    }
  ) });
};
Qf.displayName = fi;
var Tn = "MenuSubTrigger", Jf = l.forwardRef(
  (e, t) => {
    const n = Nt(Tn, e.__scopeMenu), r = xr(Tn, e.__scopeMenu), o = Xf(Tn, e.__scopeMenu), a = ci(Tn, e.__scopeMenu), s = l.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: u } = a, d = { __scopeMenu: e.__scopeMenu }, f = l.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return l.useEffect(() => f, [f]), l.useEffect(() => {
      const m = c.current;
      return () => {
        window.clearTimeout(m), u(null);
      };
    }, [c, u]), /* @__PURE__ */ i.jsx(si, { asChild: !0, ...d, children: /* @__PURE__ */ i.jsx(
      Wf,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": tm(n.open),
        ...e,
        ref: qe(t, o.onTriggerChange),
        onClick: (m) => {
          e.onClick?.(m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: I(
          e.onPointerMove,
          Bn((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: I(
          e.onPointerLeave,
          Bn((m) => {
            f();
            const p = n.content?.getBoundingClientRect();
            if (p) {
              const v = n.content?.dataset.side, g = v === "right", h = g ? -5 : 5, x = p[g ? "left" : "right"], b = p[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: m.clientX + h, y: m.clientY },
                  { x, y: p.top },
                  { x: b, y: p.top },
                  { x: b, y: p.bottom },
                  { x, y: p.bottom }
                ],
                side: v
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(m), m.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: I(e.onKeyDown, (m) => {
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || IR[r.dir].includes(m.key) && (n.onOpenChange(!0), n.content?.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
Jf.displayName = Tn;
var Zf = "MenuSubContent", em = l.forwardRef(
  (e, t) => {
    const n = Of(ke, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Nt(ke, e.__scopeMenu), s = xr(ke, e.__scopeMenu), c = Xf(Zf, e.__scopeMenu), u = l.useRef(null), d = J(t, u);
    return /* @__PURE__ */ i.jsx(Vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ i.jsx(me, { present: r || a.open, children: /* @__PURE__ */ i.jsx(Vn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ i.jsx(
      li,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          s.isUsingKeyboardRef.current && u.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: I(e.onFocusOutside, (f) => {
          f.target !== c.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: I(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: I(e.onKeyDown, (f) => {
          const m = f.currentTarget.contains(f.target), p = OR[s.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), c.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
em.displayName = Zf;
function tm(e) {
  return e ? "open" : "closed";
}
function to(e) {
  return e === "indeterminate";
}
function mi(e) {
  return to(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function tP(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function nP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function rP(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = nP(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const u = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function oP(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a], u = t[s], d = c.x, f = c.y, m = u.x, p = u.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function aP(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return oP(n, t);
}
function Bn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var sP = If, iP = si, cP = Lf, lP = Ff, uP = ui, dP = $f, fP = Fo, mP = Vf, pP = Hf, hP = Gf, vP = Kf, gP = Uf, xP = qf, bP = Qf, yP = Jf, wP = em, $o = "DropdownMenu", [CP, Vj] = ve(
  $o,
  [kf]
), Ce = kf(), [SP, nm] = CP($o), rm = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: c = !0
  } = e, u = Ce(t), d = l.useRef(null), [f, m] = ge({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: $o
  });
  return /* @__PURE__ */ i.jsx(
    SP,
    {
      scope: t,
      triggerId: pe(),
      triggerRef: d,
      contentId: pe(),
      open: f,
      onOpenChange: m,
      onOpenToggle: l.useCallback(() => m((p) => !p), [m]),
      modal: c,
      children: /* @__PURE__ */ i.jsx(sP, { ...u, open: f, onOpenChange: m, dir: r, modal: c, children: n })
    }
  );
};
rm.displayName = $o;
var om = "DropdownMenuTrigger", am = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = nm(om, n), s = Ce(n);
    return /* @__PURE__ */ i.jsx(iP, { asChild: !0, ...s, children: /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: qe(t, a.triggerRef),
        onPointerDown: I(e.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault());
        }),
        onKeyDown: I(e.onKeyDown, (c) => {
          r || (["Enter", " "].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
am.displayName = om;
var NP = "DropdownMenuPortal", sm = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ce(t);
  return /* @__PURE__ */ i.jsx(cP, { ...r, ...n });
};
sm.displayName = NP;
var im = "DropdownMenuContent", cm = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = nm(im, n), a = Ce(n), s = l.useRef(!1);
    return /* @__PURE__ */ i.jsx(
      lP,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (c) => {
          s.current || o.triggerRef.current?.focus(), s.current = !1, c.preventDefault();
        }),
        onInteractOutside: I(e.onInteractOutside, (c) => {
          const u = c.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, f = u.button === 2 || d;
          (!o.modal || f) && (s.current = !0);
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
cm.displayName = im;
var EP = "DropdownMenuGroup", lm = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
    return /* @__PURE__ */ i.jsx(uP, { ...o, ...r, ref: t });
  }
);
lm.displayName = EP;
var RP = "DropdownMenuLabel", um = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
    return /* @__PURE__ */ i.jsx(dP, { ...o, ...r, ref: t });
  }
);
um.displayName = RP;
var PP = "DropdownMenuItem", dm = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
    return /* @__PURE__ */ i.jsx(fP, { ...o, ...r, ref: t });
  }
);
dm.displayName = PP;
var TP = "DropdownMenuCheckboxItem", fm = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
  return /* @__PURE__ */ i.jsx(mP, { ...o, ...r, ref: t });
});
fm.displayName = TP;
var _P = "DropdownMenuRadioGroup", mm = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
  return /* @__PURE__ */ i.jsx(pP, { ...o, ...r, ref: t });
});
mm.displayName = _P;
var MP = "DropdownMenuRadioItem", pm = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
  return /* @__PURE__ */ i.jsx(hP, { ...o, ...r, ref: t });
});
pm.displayName = MP;
var jP = "DropdownMenuItemIndicator", hm = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
  return /* @__PURE__ */ i.jsx(vP, { ...o, ...r, ref: t });
});
hm.displayName = jP;
var kP = "DropdownMenuSeparator", vm = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
  return /* @__PURE__ */ i.jsx(gP, { ...o, ...r, ref: t });
});
vm.displayName = kP;
var AP = "DropdownMenuArrow", DP = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
    return /* @__PURE__ */ i.jsx(xP, { ...o, ...r, ref: t });
  }
);
DP.displayName = AP;
var IP = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ce(t), [c, u] = ge({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ i.jsx(bP, { ...s, open: c, onOpenChange: u, children: n });
}, OP = "DropdownMenuSubTrigger", gm = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
  return /* @__PURE__ */ i.jsx(yP, { ...o, ...r, ref: t });
});
gm.displayName = OP;
var LP = "DropdownMenuSubContent", xm = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ce(n);
  return /* @__PURE__ */ i.jsx(
    wP,
    {
      ...o,
      ...r,
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
xm.displayName = LP;
var FP = rm, $P = am, bm = sm, ym = cm, WP = lm, wm = um, Cm = dm, Sm = fm, VP = mm, Nm = pm, Em = hm, Rm = vm, BP = IP, Pm = gm, Tm = xm;
const Bj = FP, Hj = $P, zj = WP, Gj = bm, Yj = BP, Kj = VP, HP = l.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ i.jsxs(
  Pm,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ i.jsx(Un, { className: "ml-auto h-4 w-4" })
    ]
  }
));
HP.displayName = Pm.displayName;
const zP = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Tm,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
zP.displayName = Tm.displayName;
const GP = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ i.jsx(bm, { children: /* @__PURE__ */ i.jsx(
  ym,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
GP.displayName = ym.displayName;
const YP = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ i.jsx(
  Cm,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
YP.displayName = Cm.displayName;
const KP = l.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ i.jsxs(
  Sm,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ i.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ i.jsx(Em, { children: /* @__PURE__ */ i.jsx(Kn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
KP.displayName = Sm.displayName;
const UP = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(
  Nm,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ i.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ i.jsx(Em, { children: /* @__PURE__ */ i.jsx(ul, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
UP.displayName = Nm.displayName;
const qP = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ i.jsx(
  wm,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
qP.displayName = wm.displayName;
const XP = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Rm,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
XP.displayName = Rm.displayName;
const QP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "span",
  {
    className: T("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
QP.displayName = "DropdownMenuShortcut";
var JP = "Label", _m = l.forwardRef((e, t) => /* @__PURE__ */ i.jsx(
  W.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
_m.displayName = JP;
var Mm = _m;
const ZP = Je(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Wo = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Mm,
  {
    ref: n,
    className: T(ZP(), e),
    ...t
  }
));
Wo.displayName = Mm.displayName;
const Uj = ng, jm = l.createContext(
  {}
), Vo = ({
  ...e
}) => /* @__PURE__ */ i.jsx(jm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ i.jsx(rg, { ...e }) }), Bo = () => {
  const e = l.useContext(jm), t = l.useContext(km), { getFieldState: n, formState: r } = qn(), o = n(e.name, r);
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
}, km = l.createContext(
  {}
), br = l.forwardRef(({ className: e, ...t }, n) => {
  const r = l.useId();
  return /* @__PURE__ */ i.jsx(km.Provider, { value: { id: r }, children: /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: T("space-y-1 relative", e),
      ...t
    }
  ) });
});
br.displayName = "FormItem";
const Ho = l.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Bo();
  return /* @__PURE__ */ i.jsx(
    Wo,
    {
      ref: n,
      className: T(r && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
Ho.displayName = "FormLabel";
const zo = l.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Bo();
  return /* @__PURE__ */ i.jsx(
    dl,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
zo.displayName = "FormControl";
const Am = l.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Bo();
  return /* @__PURE__ */ i.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: T("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Am.displayName = "FormDescription";
const yr = l.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Bo(), s = o ? String(o?.message) : t;
  return s ? /* @__PURE__ */ i.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: T(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...n,
      children: s
    }
  ) : null;
});
yr.displayName = "FormMessage";
const eT = Je("font-bold tracking-tight", {
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
}), qj = se.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => {
    const a = t || "h1";
    return /* @__PURE__ */ i.jsx(
      a,
      {
        className: T(eT({ variant: t }), e),
        ref: o,
        ...r,
        children: n
      }
    );
  }
), pi = se.forwardRef(({ className: e, type: t, ...n }, r) => t === "textarea" ? /* @__PURE__ */ i.jsx(
  "textarea",
  {
    rows: 1,
    ref: r,
    className: T(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...n
  }
) : /* @__PURE__ */ i.jsx(
  "input",
  {
    ref: r,
    type: t,
    className: T(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...n
  }
)), Xj = ({
  name: e,
  label: t,
  placeholder: n,
  mask: r,
  ...o
}) => {
  const a = qn();
  return /* @__PURE__ */ i.jsx(
    Vo,
    {
      control: a.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ i.jsxs(br, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ i.jsx(Ho, { children: t }),
        /* @__PURE__ */ i.jsx(zo, { children: r ? /* @__PURE__ */ i.jsx(
          PT,
          {
            mask: r,
            placeholder: n,
            ...o,
            ...s
          }
        ) : /* @__PURE__ */ i.jsx(pi, { placeholder: n, ...o, ...s }) }),
        /* @__PURE__ */ i.jsx(yr, {})
      ] })
    }
  );
};
var Dm = Object.freeze({
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
}), tT = "VisuallyHidden", Go = l.forwardRef(
  (e, t) => /* @__PURE__ */ i.jsx(
    W.span,
    {
      ...e,
      ref: t,
      style: { ...Dm, ...e.style }
    }
  )
);
Go.displayName = tT;
var Im = Go, Gt = "NavigationMenu", [hi, Om, nT] = Bt(Gt), [Za, rT, oT] = Bt(Gt), [vi, Qj] = ve(
  Gt,
  [nT, oT]
), [aT, De] = vi(Gt), [sT, iT] = vi(Gt), Lm = l.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: s = 200,
      skipDelayDuration: c = 300,
      orientation: u = "horizontal",
      dir: d,
      ...f
    } = e, [m, p] = l.useState(null), v = J(t, (_) => p(_)), g = it(d), h = l.useRef(0), x = l.useRef(0), b = l.useRef(0), [y, w] = l.useState(!0), [C, S] = ge({
      prop: r,
      onChange: (_) => {
        const O = _ !== "", F = c > 0;
        O ? (window.clearTimeout(b.current), F && w(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
          () => w(!0),
          c
        )), o?.(_);
      },
      defaultProp: a ?? "",
      caller: Gt
    }), N = l.useCallback(() => {
      window.clearTimeout(x.current), x.current = window.setTimeout(() => S(""), 150);
    }, [S]), R = l.useCallback(
      (_) => {
        window.clearTimeout(x.current), S(_);
      },
      [S]
    ), E = l.useCallback(
      (_) => {
        C === _ ? window.clearTimeout(x.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(x.current), S(_);
        }, s);
      },
      [C, S, s]
    );
    return l.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(x.current), window.clearTimeout(b.current);
    }, []), /* @__PURE__ */ i.jsx(
      Fm,
      {
        scope: n,
        isRootMenu: !0,
        value: C,
        dir: g,
        orientation: u,
        rootNavigationMenu: m,
        onTriggerEnter: (_) => {
          window.clearTimeout(h.current), y ? E(_) : R(_);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), N();
        },
        onContentEnter: () => window.clearTimeout(x.current),
        onContentLeave: N,
        onItemSelect: (_) => {
          S((O) => O === _ ? "" : _);
        },
        onItemDismiss: () => S(""),
        children: /* @__PURE__ */ i.jsx(
          W.nav,
          {
            "aria-label": "Main",
            "data-orientation": u,
            dir: g,
            ...f,
            ref: v
          }
        )
      }
    );
  }
);
Lm.displayName = Gt;
var es = "NavigationMenuSub", cT = l.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      ...c
    } = e, u = De(es, n), [d, f] = ge({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: es
    });
    return /* @__PURE__ */ i.jsx(
      Fm,
      {
        scope: n,
        isRootMenu: !1,
        value: d,
        dir: u.dir,
        orientation: s,
        rootNavigationMenu: u.rootNavigationMenu,
        onTriggerEnter: (m) => f(m),
        onItemSelect: (m) => f(m),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ i.jsx(W.div, { "data-orientation": s, ...c, ref: t })
      }
    );
  }
);
cT.displayName = es;
var Fm = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: s,
    value: c,
    onItemSelect: u,
    onItemDismiss: d,
    onTriggerEnter: f,
    onTriggerLeave: m,
    onContentEnter: p,
    onContentLeave: v
  } = e, [g, h] = l.useState(null), [x, b] = l.useState(/* @__PURE__ */ new Map()), [y, w] = l.useState(null);
  return /* @__PURE__ */ i.jsx(
    aT,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: c,
      previousValue: ar(c),
      baseId: pe(),
      dir: o,
      orientation: a,
      viewport: g,
      onViewportChange: h,
      indicatorTrack: y,
      onIndicatorTrackChange: w,
      onTriggerEnter: ie(f),
      onTriggerLeave: ie(m),
      onContentEnter: ie(p),
      onContentLeave: ie(v),
      onItemSelect: ie(u),
      onItemDismiss: ie(d),
      onViewportContentChange: l.useCallback((C, S) => {
        b((N) => (N.set(C, S), new Map(N)));
      }, []),
      onViewportContentRemove: l.useCallback((C) => {
        b((S) => S.has(C) ? (S.delete(C), new Map(S)) : S);
      }, []),
      children: /* @__PURE__ */ i.jsx(hi.Provider, { scope: t, children: /* @__PURE__ */ i.jsx(sT, { scope: t, items: x, children: s }) })
    }
  );
}, $m = "NavigationMenuList", Wm = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = De($m, n), a = /* @__PURE__ */ i.jsx(W.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ i.jsx(W.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ i.jsx(hi.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ i.jsx(Xm, { asChild: !0, children: a }) : a }) });
  }
);
Wm.displayName = $m;
var Vm = "NavigationMenuItem", [lT, Bm] = vi(Vm), Hm = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = pe(), s = r || a || "LEGACY_REACT_AUTO_VALUE", c = l.useRef(null), u = l.useRef(null), d = l.useRef(null), f = l.useRef(() => {
    }), m = l.useRef(!1), p = l.useCallback((g = "start") => {
      if (c.current) {
        f.current();
        const h = ns(c.current);
        h.length && bi(g === "start" ? h : h.reverse());
      }
    }, []), v = l.useCallback(() => {
      if (c.current) {
        const g = ns(c.current);
        g.length && (f.current = vT(g));
      }
    }, []);
    return /* @__PURE__ */ i.jsx(
      lT,
      {
        scope: n,
        value: s,
        triggerRef: u,
        contentRef: c,
        focusProxyRef: d,
        wasEscapeCloseRef: m,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: v,
        onContentFocusOutside: v,
        children: /* @__PURE__ */ i.jsx(W.li, { ...o, ref: t })
      }
    );
  }
);
Hm.displayName = Vm;
var ts = "NavigationMenuTrigger", zm = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = De(ts, e.__scopeNavigationMenu), s = Bm(ts, e.__scopeNavigationMenu), c = l.useRef(null), u = J(c, s.triggerRef, t), d = Jm(a.baseId, s.value), f = Zm(a.baseId, s.value), m = l.useRef(!1), p = l.useRef(!1), v = s.value === a.value;
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(hi.ItemSlot, { scope: n, value: s.value, children: /* @__PURE__ */ i.jsx(Qm, { asChild: !0, children: /* @__PURE__ */ i.jsx(
      W.button,
      {
        id: d,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": yi(v),
        "aria-expanded": v,
        "aria-controls": f,
        ...o,
        ref: u,
        onPointerEnter: I(e.onPointerEnter, () => {
          p.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: I(
          e.onPointerMove,
          no(() => {
            r || p.current || s.wasEscapeCloseRef.current || m.current || (a.onTriggerEnter(s.value), m.current = !0);
          })
        ),
        onPointerLeave: I(
          e.onPointerLeave,
          no(() => {
            r || (a.onTriggerLeave(), m.current = !1);
          })
        ),
        onClick: I(e.onClick, () => {
          a.onItemSelect(s.value), p.current = v;
        }),
        onKeyDown: I(e.onKeyDown, (g) => {
          const x = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          v && g.key === x && (s.onEntryKeyDown(), g.preventDefault());
        })
      }
    ) }) }),
    v && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        Im,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (g) => {
            const h = s.contentRef.current, x = g.relatedTarget, b = x === c.current, y = h?.contains(x);
            (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ i.jsx("span", { "aria-owns": f })
    ] })
  ] });
});
zm.displayName = ts;
var uT = "NavigationMenuLink", Xc = "navigationMenu.linkSelect", Gm = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ i.jsx(Qm, { asChild: !0, children: /* @__PURE__ */ i.jsx(
      W.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: I(
          e.onClick,
          (s) => {
            const c = s.target, u = new CustomEvent(Xc, {
              bubbles: !0,
              cancelable: !0
            });
            if (c.addEventListener(Xc, (d) => o?.(d), { once: !0 }), Dn(c, u), !u.defaultPrevented && !s.metaKey) {
              const d = new CustomEvent(Wr, {
                bubbles: !0,
                cancelable: !0
              });
              Dn(c, d);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Gm.displayName = uT;
var gi = "NavigationMenuIndicator", Ym = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = De(gi, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? il.createPortal(
    /* @__PURE__ */ i.jsx(me, { present: n || a, children: /* @__PURE__ */ i.jsx(dT, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Ym.displayName = gi;
var dT = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = De(gi, n), a = Om(n), [s, c] = l.useState(
    null
  ), [u, d] = l.useState(null), f = o.orientation === "horizontal", m = !!o.value;
  l.useEffect(() => {
    const g = a().find((h) => h.value === o.value)?.ref.current;
    g && c(g);
  }, [a, o.value]);
  const p = () => {
    s && d({
      size: f ? s.offsetWidth : s.offsetHeight,
      offset: f ? s.offsetLeft : s.offsetTop
    });
  };
  return rs(s, p), rs(o.indicatorTrack, p), u ? /* @__PURE__ */ i.jsx(
    W.div,
    {
      "aria-hidden": !0,
      "data-state": m ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: u.size + "px",
          transform: `translateX(${u.offset}px)`
        } : {
          top: 0,
          height: u.size + "px",
          transform: `translateY(${u.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), cn = "NavigationMenuContent", Km = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = De(cn, e.__scopeNavigationMenu), a = Bm(cn, e.__scopeNavigationMenu), s = J(a.contentRef, t), c = a.value === o.value, u = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ i.jsx(fT, { forceMount: n, ...u, ref: s }) : /* @__PURE__ */ i.jsx(me, { present: n || c, children: /* @__PURE__ */ i.jsx(
    Um,
    {
      "data-state": yi(c),
      ...u,
      ref: s,
      onPointerEnter: I(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: I(
        e.onPointerLeave,
        no(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !c && o.isRootMenu ? "none" : void 0,
        ...u.style
      }
    }
  ) });
});
Km.displayName = cn;
var fT = l.forwardRef((e, t) => {
  const n = De(cn, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return fe(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), fe(() => () => o(e.value), [e.value, o]), null;
}), Wr = "navigationMenu.rootContentDismiss", Um = l.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: s,
    onRootContentClose: c,
    onContentFocusOutside: u,
    ...d
  } = e, f = De(cn, n), m = l.useRef(null), p = J(m, t), v = Jm(f.baseId, r), g = Zm(f.baseId, r), h = Om(n), x = l.useRef(null), { onItemDismiss: b } = f;
  l.useEffect(() => {
    const w = m.current;
    if (f.isRootMenu && w) {
      const C = () => {
        b(), c(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(Wr, C), () => w.removeEventListener(Wr, C);
    }
  }, [f.isRootMenu, e.value, o, b, c]);
  const y = l.useMemo(() => {
    const C = h().map((O) => O.value);
    f.dir === "rtl" && C.reverse();
    const S = C.indexOf(f.value), N = C.indexOf(f.previousValue), R = r === f.value, E = N === C.indexOf(r);
    if (!R && !E) return x.current;
    const _ = (() => {
      if (S !== N) {
        if (R && N !== -1) return S > N ? "from-end" : "from-start";
        if (E && S !== -1) return S > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return x.current = _, _;
  }, [f.previousValue, f.value, f.dir, h, r]);
  return /* @__PURE__ */ i.jsx(Xm, { asChild: !0, children: /* @__PURE__ */ i.jsx(
    bt,
    {
      id: g,
      "aria-labelledby": v,
      "data-motion": y,
      "data-orientation": f.orientation,
      ...d,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const w = new Event(Wr, {
          bubbles: !0,
          cancelable: !0
        });
        m.current?.dispatchEvent(w);
      },
      onFocusOutside: I(e.onFocusOutside, (w) => {
        u();
        const C = w.target;
        f.rootNavigationMenu?.contains(C) && w.preventDefault();
      }),
      onPointerDownOutside: I(e.onPointerDownOutside, (w) => {
        const C = w.target, S = h().some((R) => R.ref.current?.contains(C)), N = f.isRootMenu && f.viewport?.contains(C);
        (S || N || !f.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: I(e.onKeyDown, (w) => {
        const C = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !C) {
          const N = ns(w.currentTarget), R = document.activeElement, E = N.findIndex((F) => F === R), O = w.shiftKey ? N.slice(0, E).reverse() : N.slice(E + 1, N.length);
          bi(O) ? w.preventDefault() : a.current?.focus();
        }
      }),
      onEscapeKeyDown: I(e.onEscapeKeyDown, (w) => {
        s.current = !0;
      })
    }
  ) });
}), xi = "NavigationMenuViewport", qm = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!De(xi, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ i.jsx(me, { present: n || a, children: /* @__PURE__ */ i.jsx(mT, { ...r, ref: t }) });
});
qm.displayName = xi;
var mT = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = De(xi, n), s = J(t, a.onViewportChange), c = iT(
    cn,
    e.__scopeNavigationMenu
  ), [u, d] = l.useState(null), [f, m] = l.useState(null), p = u ? u?.width + "px" : void 0, v = u ? u?.height + "px" : void 0, g = !!a.value, h = g ? a.value : a.previousValue;
  return rs(f, () => {
    f && d({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ i.jsx(
    W.div,
    {
      "data-state": yi(g),
      "data-orientation": a.orientation,
      ...o,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !g && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": v,
        ...o.style
      },
      onPointerEnter: I(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: I(e.onPointerLeave, no(a.onContentLeave)),
      children: Array.from(c.items).map(([b, { ref: y, forceMount: w, ...C }]) => {
        const S = h === b;
        return /* @__PURE__ */ i.jsx(me, { present: w || S, children: /* @__PURE__ */ i.jsx(
          Um,
          {
            ...C,
            ref: qe(y, (N) => {
              S && N && m(N);
            })
          }
        ) }, b);
      })
    }
  );
}), pT = "FocusGroup", Xm = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = De(pT, n);
    return /* @__PURE__ */ i.jsx(Za.Provider, { scope: n, children: /* @__PURE__ */ i.jsx(Za.Slot, { scope: n, children: /* @__PURE__ */ i.jsx(W.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Qc = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], hT = "FocusGroupItem", Qm = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = rT(n), a = De(hT, n);
    return /* @__PURE__ */ i.jsx(Za.ItemSlot, { scope: n, children: /* @__PURE__ */ i.jsx(
      W.button,
      {
        ...r,
        ref: t,
        onKeyDown: I(e.onKeyDown, (s) => {
          if (["Home", "End", ...Qc].includes(s.key)) {
            let u = o().map((m) => m.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && u.reverse(), Qc.includes(s.key)) {
              const m = u.indexOf(s.currentTarget);
              u = u.slice(m + 1);
            }
            setTimeout(() => bi(u)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function ns(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function bi(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function vT(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function rs(e, t) {
  const n = ie(t);
  fe(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function yi(e) {
  return e ? "open" : "closed";
}
function Jm(e, t) {
  return `${e}-trigger-${t}`;
}
function Zm(e, t) {
  return `${e}-content-${t}`;
}
function no(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ep = Lm, tp = Wm, gT = Hm, np = zm, xT = Gm, rp = Ym, op = Km, ap = qm;
const bT = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(
  ep,
  {
    ref: r,
    className: T(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ i.jsx(sp, {})
    ]
  }
));
bT.displayName = ep.displayName;
const yT = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  tp,
  {
    ref: n,
    className: T(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
yT.displayName = tp.displayName;
const Jj = gT, wT = Je(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), CT = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(
  np,
  {
    ref: r,
    className: T(wT(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ i.jsx(
        pt,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
CT.displayName = np.displayName;
const ST = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  op,
  {
    ref: n,
    className: T(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
ST.displayName = op.displayName;
const NT = xT, sp = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx("div", { className: T("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ i.jsx(
  ap,
  {
    className: T(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
sp.displayName = ap.displayName;
const ET = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  rp,
  {
    ref: n,
    className: T(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
ET.displayName = rp.displayName;
const RT = se.forwardRef(({ className: e, title: t, children: n, ...r }, o) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx(NT, { asChild: !0, children: /* @__PURE__ */ i.jsxs(
  "a",
  {
    ref: o,
    className: T(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ i.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: n })
    ]
  }
) }) }));
RT.displayName = "ListItem";
function PT({
  value: e,
  mask: t,
  onChange: n,
  ...r
}) {
  const o = t.split("#").length - 1, a = t.split("A").length - 1, s = t.split("*").length - 1, c = o + a + s;
  function u(d) {
    const m = d.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, c);
    n(m);
  }
  return /* @__PURE__ */ i.jsx(
    pi,
    {
      value: hd(e, t),
      onChange: u,
      ...r
    }
  );
}
const TT = (e, t = 300) => {
  const [n, r] = Ne(e);
  return je(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, Jc = Je(
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
), _T = l.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: n,
    defaultValue: r = [],
    placeholder: o = "Select options",
    animation: a = 0,
    maxCount: s = 3,
    modalPopover: c = !1,
    className: u,
    preventSelectAll: d = !1,
    onSearchChange: f,
    isLoading: m,
    onCreate: p,
    ...v
  }, g) => {
    const [h, x] = l.useState(r), [b, y] = l.useState(!1), [w, C] = l.useState(!1), [S, N] = l.useState(""), R = TT(S, 300);
    je(() => {
      f && f(R ?? "");
    }, [R]);
    const E = (k) => {
      if (k.key === "Enter")
        y(!0);
      else if (k.key === "Backspace" && !k.currentTarget.value) {
        const G = [...h];
        G.pop(), x(G), t(G);
      }
    }, _ = (k) => {
      const G = h.includes(k) ? h.filter((V) => V !== k) : [...h, k];
      x(G), t(G);
    }, O = () => {
      x([]), t([]);
    }, F = () => {
      y((k) => !k);
    }, U = () => {
      const k = h.slice(0, s);
      x(k), t(k);
    }, Q = () => {
      if (h.length === e.length)
        O();
      else {
        const k = e.map((G) => G.value);
        x(k), t(k);
      }
    };
    return /* @__PURE__ */ i.jsxs(
      mr,
      {
        open: b,
        onOpenChange: y,
        modal: c,
        children: [
          /* @__PURE__ */ i.jsx(pr, { asChild: !0, children: /* @__PURE__ */ i.jsx(
            yt,
            {
              ref: g,
              ...v,
              onClick: F,
              variant: "outline",
              className: T(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                u
              ),
              children: h.length > 0 ? /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, s).map((k) => {
                    const G = e.find((D) => D.value === k), V = G?.icon;
                    return /* @__PURE__ */ i.jsxs(
                      bc,
                      {
                        className: T(
                          w ? "animate-bounce" : "",
                          Jc({ variant: n })
                        ),
                        style: { animationDuration: `${a}s` },
                        children: [
                          V && /* @__PURE__ */ i.jsx(V, { className: "h-4 w-4 mr-2" }),
                          G?.label,
                          /* @__PURE__ */ i.jsx(
                            Gi,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (D) => {
                                D.stopPropagation(), _(k);
                              }
                            }
                          )
                        ]
                      },
                      k
                    );
                  }),
                  h.length > s && /* @__PURE__ */ i.jsxs(
                    bc,
                    {
                      className: T(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        Jc({ variant: n })
                      ),
                      style: { animationDuration: `${a}s` },
                      children: [
                        `+ ${h.length - s}`,
                        /* @__PURE__ */ i.jsx(
                          Gi,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (k) => {
                              k.stopPropagation(), U();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
                  m && /* @__PURE__ */ i.jsx(An, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ i.jsx(
                    Qv,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (k) => {
                        k.stopPropagation(), O();
                      }
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    wh,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ i.jsx(pt, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ i.jsx(pt, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ i.jsx(
            yn,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => y(!1),
              children: /* @__PURE__ */ i.jsxs(ir, { shouldFilter: !f, children: [
                /* @__PURE__ */ i.jsx(
                  Eo,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: E,
                    onValueChange: N
                  }
                ),
                /* @__PURE__ */ i.jsxs(Ro, { children: [
                  !m && /* @__PURE__ */ i.jsx(Po, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ i.jsxs(cr, { children: [
                    !m && !e.length && !!S.length && p && /* @__PURE__ */ i.jsx(
                      kt,
                      {
                        onSelect: p,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ i.jsx(Jv, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ i.jsx("b", { children: S })
                        ] })
                      },
                      "new"
                    ),
                    m && /* @__PURE__ */ i.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ i.jsx(An, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !d && /* @__PURE__ */ i.jsxs(
                      kt,
                      {
                        onSelect: Q,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ i.jsx(
                            "div",
                            {
                              className: T(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ i.jsx(Yi, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ i.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((k) => {
                      const G = h.includes(k.value);
                      return /* @__PURE__ */ i.jsxs(
                        kt,
                        {
                          onSelect: () => _(k.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ i.jsx(
                              "div",
                              {
                                className: T(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  G ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ i.jsx(Yi, { className: "h-4 w-4" })
                              }
                            ),
                            k.icon && /* @__PURE__ */ i.jsx(k.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ i.jsx("span", { children: k.label })
                          ]
                        },
                        k.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ i.jsx(Fd, {})
                ] })
              ] })
            }
          ),
          a > 0 && h.length > 0 && /* @__PURE__ */ i.jsx(
            Zv,
            {
              className: T(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                w ? "" : "text-muted-foreground"
              ),
              onClick: () => C(!w)
            }
          )
        ]
      }
    );
  }
);
_T.displayName = "MultiSelect";
const MT = ({ className: e, ...t }) => /* @__PURE__ */ i.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: T("mx-auto flex w-full justify-center", e),
    ...t
  }
);
MT.displayName = "Pagination";
const jT = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "ul",
  {
    ref: n,
    className: T("flex flex-row items-center gap-1", e),
    ...t
  }
));
jT.displayName = "PaginationContent";
const kT = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx("li", { ref: n, className: T("", e), ...t }));
kT.displayName = "PaginationItem";
const wi = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ i.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: T(
      ot({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
wi.displayName = "PaginationLink";
const AT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  wi,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: T("gap-1", e),
    ...t,
    children: /* @__PURE__ */ i.jsx(hs, { className: "h-4 w-4" })
  }
);
AT.displayName = "PaginationPrevious";
const DT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  wi,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: T("gap-1", e),
    ...t,
    children: /* @__PURE__ */ i.jsx(Un, { className: "h-4 w-4" })
  }
);
DT.displayName = "PaginationNext";
const IT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: T("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ i.jsx(ll, { className: "h-4 w-4" }),
      /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
IT.displayName = "PaginationEllipsis";
var Ci = "Radio", [OT, ip] = ve(Ci), [LT, FT] = OT(Ci), cp = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: s,
      value: c = "on",
      onCheck: u,
      form: d,
      ...f
    } = e, [m, p] = l.useState(null), v = J(t, (x) => p(x)), g = l.useRef(!1), h = m ? d || !!m.closest("form") : !0;
    return /* @__PURE__ */ i.jsxs(LT, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ i.jsx(
        W.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": fp(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...f,
          ref: v,
          onClick: I(e.onClick, (x) => {
            o || u?.(), h && (g.current = x.isPropagationStopped(), g.current || x.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ i.jsx(
        dp,
        {
          control: m,
          bubbles: !g.current,
          name: r,
          value: c,
          checked: o,
          required: a,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
cp.displayName = Ci;
var lp = "RadioIndicator", up = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = FT(lp, n);
    return /* @__PURE__ */ i.jsx(me, { present: r || a.checked, children: /* @__PURE__ */ i.jsx(
      W.span,
      {
        "data-state": fp(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
up.displayName = lp;
var $T = "RadioBubbleInput", dp = l.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = l.useRef(null), c = J(s, a), u = ar(n), d = Co(t);
    return l.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (u !== n && v) {
        const g = new Event("click", { bubbles: r });
        v.call(f, n), f.dispatchEvent(g);
      }
    }, [u, n, r]), /* @__PURE__ */ i.jsx(
      W.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: c,
        style: {
          ...o.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
dp.displayName = $T;
function fp(e) {
  return e ? "checked" : "unchecked";
}
var WT = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Yo = "RadioGroup", [VT, Zj] = ve(Yo, [
  St,
  ip
]), mp = St(), pp = ip(), [BT, HT] = VT(Yo), hp = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: s = !1,
      disabled: c = !1,
      orientation: u,
      dir: d,
      loop: f = !0,
      onValueChange: m,
      ...p
    } = e, v = mp(n), g = it(d), [h, x] = ge({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: Yo
    });
    return /* @__PURE__ */ i.jsx(
      BT,
      {
        scope: n,
        name: r,
        required: s,
        disabled: c,
        value: h,
        onValueChange: x,
        children: /* @__PURE__ */ i.jsx(
          Oo,
          {
            asChild: !0,
            ...v,
            orientation: u,
            dir: g,
            loop: f,
            children: /* @__PURE__ */ i.jsx(
              W.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": u,
                "data-disabled": c ? "" : void 0,
                dir: g,
                ...p,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
hp.displayName = Yo;
var vp = "RadioGroupItem", gp = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = HT(vp, n), s = a.disabled || r, c = mp(n), u = pp(n), d = l.useRef(null), f = J(t, d), m = a.value === o.value, p = l.useRef(!1);
    return l.useEffect(() => {
      const v = (h) => {
        WT.includes(h.key) && (p.current = !0);
      }, g = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ i.jsx(
      Lo,
      {
        asChild: !0,
        ...c,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ i.jsx(
          cp,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...u,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: I((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: I(o.onFocus, () => {
              p.current && d.current?.click();
            })
          }
        )
      }
    );
  }
);
gp.displayName = vp;
var zT = "RadioGroupIndicator", xp = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = pp(n);
    return /* @__PURE__ */ i.jsx(up, { ...o, ...r, ref: t });
  }
);
xp.displayName = zT;
var bp = hp, yp = gp, GT = xp;
const YT = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  bp,
  {
    className: T("grid gap-2", e),
    ...t,
    ref: n
  }
));
YT.displayName = bp.displayName;
const KT = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  yp,
  {
    ref: n,
    className: T(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i.jsx(GT, { className: "flex items-center justify-center", children: /* @__PURE__ */ i.jsx(ul, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
KT.displayName = yp.displayName;
function os(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function UT(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var Si = "ScrollArea", [wp, ek] = ve(Si), [qT, Ie] = wp(Si), Cp = l.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [c, u] = l.useState(null), [d, f] = l.useState(null), [m, p] = l.useState(null), [v, g] = l.useState(null), [h, x] = l.useState(null), [b, y] = l.useState(0), [w, C] = l.useState(0), [S, N] = l.useState(!1), [R, E] = l.useState(!1), _ = J(t, (F) => u(F)), O = it(o);
    return /* @__PURE__ */ i.jsx(
      qT,
      {
        scope: n,
        type: r,
        dir: O,
        scrollHideDelay: a,
        scrollArea: c,
        viewport: d,
        onViewportChange: f,
        content: m,
        onContentChange: p,
        scrollbarX: v,
        onScrollbarXChange: g,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: N,
        scrollbarY: h,
        onScrollbarYChange: x,
        scrollbarYEnabled: R,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: y,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ i.jsx(
          W.div,
          {
            dir: O,
            ...s,
            ref: _,
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
Cp.displayName = Si;
var Sp = "ScrollAreaViewport", Np = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = Ie(Sp, n), c = l.useRef(null), u = J(t, c, s.onViewportChange);
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ i.jsx(
        W.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: u,
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
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ i.jsx("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Np.displayName = Sp;
var tt = "ScrollAreaScrollbar", Ni = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ie(tt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, c = e.orientation === "horizontal";
    return l.useEffect(() => (c ? a(!0) : s(!0), () => {
      c ? a(!1) : s(!1);
    }), [c, a, s]), o.type === "hover" ? /* @__PURE__ */ i.jsx(XT, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ i.jsx(QT, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ i.jsx(Ep, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ i.jsx(Ei, { ...r, ref: t }) : null;
  }
);
Ni.displayName = tt;
var XT = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ie(tt, e.__scopeScrollArea), [a, s] = l.useState(!1);
  return l.useEffect(() => {
    const c = o.scrollArea;
    let u = 0;
    if (c) {
      const d = () => {
        window.clearTimeout(u), s(!0);
      }, f = () => {
        u = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return c.addEventListener("pointerenter", d), c.addEventListener("pointerleave", f), () => {
        window.clearTimeout(u), c.removeEventListener("pointerenter", d), c.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ i.jsx(me, { present: n || a, children: /* @__PURE__ */ i.jsx(
    Ep,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), QT = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ie(tt, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Uo(() => u("SCROLL_END"), 100), [c, u] = UT("hidden", {
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
  return l.useEffect(() => {
    if (c === "idle") {
      const d = window.setTimeout(() => u("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [c, o.scrollHideDelay, u]), l.useEffect(() => {
    const d = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (d) {
      let m = d[f];
      const p = () => {
        const v = d[f];
        m !== v && (u("SCROLL"), s()), m = v;
      };
      return d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [o.viewport, a, u, s]), /* @__PURE__ */ i.jsx(me, { present: n || c !== "hidden", children: /* @__PURE__ */ i.jsx(
    Ei,
    {
      "data-state": c === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: I(e.onPointerEnter, () => u("POINTER_ENTER")),
      onPointerLeave: I(e.onPointerLeave, () => u("POINTER_LEAVE"))
    }
  ) });
}), Ep = l.forwardRef((e, t) => {
  const n = Ie(tt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = l.useState(!1), c = e.orientation === "horizontal", u = Uo(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(c ? d : f);
    }
  }, 10);
  return ln(n.viewport, u), ln(n.content, u), /* @__PURE__ */ i.jsx(me, { present: r || a, children: /* @__PURE__ */ i.jsx(
    Ei,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Ei = l.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Ie(tt, e.__scopeScrollArea), a = l.useRef(null), s = l.useRef(0), [c, u] = l.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = Mp(c.viewport, c.content), f = {
    ...r,
    sizes: c,
    onSizesChange: u,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function m(p, v) {
    return r_(p, s.current, c, v);
  }
  return n === "horizontal" ? /* @__PURE__ */ i.jsx(
    JT,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const p = o.viewport.scrollLeft, v = Zc(p, c, o.dir);
          a.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = m(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ i.jsx(
    ZT,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const p = o.viewport.scrollTop, v = Zc(p, c);
          a.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = m(p));
      }
    }
  ) : null;
}), JT = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Ie(tt, e.__scopeScrollArea), [s, c] = l.useState(), u = l.useRef(null), d = J(t, u, a.onScrollbarXChange);
  return l.useEffect(() => {
    u.current && c(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ i.jsx(
    Pp,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ko(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, m) => {
        if (a.viewport) {
          const p = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(p), kp(p, m) && f.preventDefault();
        }
      },
      onResize: () => {
        u.current && a.viewport && s && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: u.current.clientWidth,
            paddingStart: oo(s.paddingLeft),
            paddingEnd: oo(s.paddingRight)
          }
        });
      }
    }
  );
}), ZT = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Ie(tt, e.__scopeScrollArea), [s, c] = l.useState(), u = l.useRef(null), d = J(t, u, a.onScrollbarYChange);
  return l.useEffect(() => {
    u.current && c(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ i.jsx(
    Pp,
    {
      "data-orientation": "vertical",
      ...o,
      ref: d,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ko(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, m) => {
        if (a.viewport) {
          const p = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(p), kp(p, m) && f.preventDefault();
        }
      },
      onResize: () => {
        u.current && a.viewport && s && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: u.current.clientHeight,
            paddingStart: oo(s.paddingTop),
            paddingEnd: oo(s.paddingBottom)
          }
        });
      }
    }
  );
}), [e_, Rp] = wp(tt), Pp = l.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: s,
    onThumbPointerDown: c,
    onThumbPositionChange: u,
    onDragScroll: d,
    onWheelScroll: f,
    onResize: m,
    ...p
  } = e, v = Ie(tt, n), [g, h] = l.useState(null), x = J(t, (_) => h(_)), b = l.useRef(null), y = l.useRef(""), w = v.viewport, C = r.content - r.viewport, S = ie(f), N = ie(u), R = Uo(m, 10);
  function E(_) {
    if (b.current) {
      const O = _.clientX - b.current.left, F = _.clientY - b.current.top;
      d({ x: O, y: F });
    }
  }
  return l.useEffect(() => {
    const _ = (O) => {
      const F = O.target;
      g?.contains(F) && S(O, C);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [w, g, C, S]), l.useEffect(N, [r, N]), ln(g, R), ln(v.content, R), /* @__PURE__ */ i.jsx(
    e_,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: ie(a),
      onThumbPointerUp: ie(s),
      onThumbPositionChange: N,
      onThumbPointerDown: ie(c),
      children: /* @__PURE__ */ i.jsx(
        W.div,
        {
          ...p,
          ref: x,
          style: { position: "absolute", ...p.style },
          onPointerDown: I(e.onPointerDown, (_) => {
            _.button === 0 && (_.target.setPointerCapture(_.pointerId), b.current = g.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), E(_));
          }),
          onPointerMove: I(e.onPointerMove, E),
          onPointerUp: I(e.onPointerUp, (_) => {
            const O = _.target;
            O.hasPointerCapture(_.pointerId) && O.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = y.current, v.viewport && (v.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), ro = "ScrollAreaThumb", Tp = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Rp(ro, e.__scopeScrollArea);
    return /* @__PURE__ */ i.jsx(me, { present: n || o.hasThumb, children: /* @__PURE__ */ i.jsx(t_, { ref: t, ...r }) });
  }
), t_ = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Ie(ro, n), s = Rp(ro, n), { onThumbPositionChange: c } = s, u = J(
      t,
      (m) => s.onThumbChange(m)
    ), d = l.useRef(void 0), f = Uo(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return l.useEffect(() => {
      const m = a.viewport;
      if (m) {
        const p = () => {
          if (f(), !d.current) {
            const v = o_(m, c);
            d.current = v, c();
          }
        };
        return c(), m.addEventListener("scroll", p), () => m.removeEventListener("scroll", p);
      }
    }, [a.viewport, f, c]), /* @__PURE__ */ i.jsx(
      W.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: u,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: I(e.onPointerDownCapture, (m) => {
          const v = m.target.getBoundingClientRect(), g = m.clientX - v.left, h = m.clientY - v.top;
          s.onThumbPointerDown({ x: g, y: h });
        }),
        onPointerUp: I(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
Tp.displayName = ro;
var Ri = "ScrollAreaCorner", _p = l.forwardRef(
  (e, t) => {
    const n = Ie(Ri, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ i.jsx(n_, { ...e, ref: t }) : null;
  }
);
_p.displayName = Ri;
var n_ = l.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Ie(Ri, n), [a, s] = l.useState(0), [c, u] = l.useState(0), d = !!(a && c);
  return ln(o.scrollbarX, () => {
    const f = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(f), u(f);
  }), ln(o.scrollbarY, () => {
    const f = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(f), s(f);
  }), d ? /* @__PURE__ */ i.jsx(
    W.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: c,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function oo(e) {
  return e ? parseInt(e, 10) : 0;
}
function Mp(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ko(e) {
  const t = Mp(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function r_(e, t, n, r = "ltr") {
  const o = Ko(n), a = o / 2, s = t || a, c = o - s, u = n.scrollbar.paddingStart + s, d = n.scrollbar.size - n.scrollbar.paddingEnd - c, f = n.content - n.viewport, m = r === "ltr" ? [0, f] : [f * -1, 0];
  return jp([u, d], m)(e);
}
function Zc(e, t, n = "ltr") {
  const r = Ko(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, c = a - r, u = n === "ltr" ? [0, s] : [s * -1, 0], d = os(e, u);
  return jp([0, s], [0, c])(d);
}
function jp(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function kp(e, t) {
  return e > 0 && e < t;
}
var o_ = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== a.left, c = n.top !== a.top;
    (s || c) && t(), n = a, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function Uo(e, t) {
  const n = ie(e), r = l.useRef(0);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), l.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function ln(e, t) {
  const n = ie(t);
  fe(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Ap = Cp, a_ = Np, s_ = _p;
const i_ = se.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(
  Ap,
  {
    ref: r,
    className: T("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ i.jsx(a_, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ i.jsx(Dp, {}),
      /* @__PURE__ */ i.jsx(s_, {})
    ]
  }
));
i_.displayName = Ap.displayName;
const Dp = se.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ i.jsx(
  Ni,
  {
    ref: r,
    orientation: t,
    className: T(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ i.jsx(Tp, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Dp.displayName = Ni.displayName;
var c_ = [" ", "Enter", "ArrowUp", "ArrowDown"], l_ = [" ", "Enter"], Ft = "Select", [qo, Xo, u_] = Bt(Ft), [wn, tk] = ve(Ft, [
  u_,
  wt
]), Qo = wt(), [d_, Et] = wn(Ft), [f_, m_] = wn(Ft), Ip = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: s,
    defaultValue: c,
    onValueChange: u,
    dir: d,
    name: f,
    autoComplete: m,
    disabled: p,
    required: v,
    form: g
  } = e, h = Qo(t), [x, b] = l.useState(null), [y, w] = l.useState(null), [C, S] = l.useState(!1), N = it(d), [R, E] = ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ft
  }), [_, O] = ge({
    prop: s,
    defaultProp: c,
    onChange: u,
    caller: Ft
  }), F = l.useRef(null), U = x ? g || !!x.closest("form") : !0, [Q, k] = l.useState(/* @__PURE__ */ new Set()), G = Array.from(Q).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ i.jsx(ur, { ...h, children: /* @__PURE__ */ i.jsxs(
    d_,
    {
      required: v,
      scope: t,
      trigger: x,
      onTriggerChange: b,
      valueNode: y,
      onValueNodeChange: w,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: S,
      contentId: pe(),
      value: _,
      onValueChange: O,
      open: R,
      onOpenChange: E,
      dir: N,
      triggerPointerDownPosRef: F,
      disabled: p,
      children: [
        /* @__PURE__ */ i.jsx(qo.Provider, { scope: t, children: /* @__PURE__ */ i.jsx(
          f_,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: l.useCallback((V) => {
              k((D) => new Set(D).add(V));
            }, []),
            onNativeOptionRemove: l.useCallback((V) => {
              k((D) => {
                const P = new Set(D);
                return P.delete(V), P;
              });
            }, []),
            children: n
          }
        ) }),
        U ? /* @__PURE__ */ i.jsxs(
          sh,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: _,
            onChange: (V) => O(V.target.value),
            disabled: p,
            form: g,
            children: [
              _ === void 0 ? /* @__PURE__ */ i.jsx("option", { value: "" }) : null,
              Array.from(Q)
            ]
          },
          G
        ) : null
      ]
    }
  ) });
};
Ip.displayName = Ft;
var Op = "SelectTrigger", Lp = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Qo(n), s = Et(Op, n), c = s.disabled || r, u = J(t, s.onTriggerChange), d = Xo(n), f = l.useRef("touch"), [m, p, v] = ch((h) => {
      const x = d().filter((w) => !w.disabled), b = x.find((w) => w.value === s.value), y = lh(x, h, b);
      y !== void 0 && s.onValueChange(y.value);
    }), g = (h) => {
      c || (s.onOpenChange(!0), v()), h && (s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ i.jsx(dr, { asChild: !0, ...a, children: /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": ih(s.value) ? "" : void 0,
        ...o,
        ref: u,
        onClick: I(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && g(h);
        }),
        onPointerDown: I(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const x = h.target;
          x.hasPointerCapture(h.pointerId) && x.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (g(h), h.preventDefault());
        }),
        onKeyDown: I(o.onKeyDown, (h) => {
          const x = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(x && h.key === " ") && c_.includes(h.key) && (g(), h.preventDefault());
        })
      }
    ) });
  }
);
Lp.displayName = Op;
var Fp = "SelectValue", $p = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...c } = e, u = Et(Fp, n), { onValueNodeHasChildrenChange: d } = u, f = a !== void 0, m = J(t, u.onValueNodeChange);
    return fe(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ i.jsx(
      W.span,
      {
        ...c,
        ref: m,
        style: { pointerEvents: "none" },
        children: ih(u.value) ? /* @__PURE__ */ i.jsx(i.Fragment, { children: s }) : a
      }
    );
  }
);
$p.displayName = Fp;
var p_ = "SelectIcon", Wp = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ i.jsx(W.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Wp.displayName = p_;
var h_ = "SelectPortal", Vp = (e) => /* @__PURE__ */ i.jsx(Ht, { asChild: !0, ...e });
Vp.displayName = h_;
var $t = "SelectContent", Bp = l.forwardRef(
  (e, t) => {
    const n = Et($t, e.__scopeSelect), [r, o] = l.useState();
    if (fe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Yn.createPortal(
        /* @__PURE__ */ i.jsx(Hp, { scope: e.__scopeSelect, children: /* @__PURE__ */ i.jsx(qo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ i.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ i.jsx(zp, { ...e, ref: t });
  }
);
Bp.displayName = $t;
var Oe = 10, [Hp, Rt] = wn($t), v_ = "SelectContentImpl", g_ = /* @__PURE__ */ ht("SelectContent.RemoveScroll"), zp = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: c,
      sideOffset: u,
      align: d,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: x,
      //
      ...b
    } = e, y = Et($t, n), [w, C] = l.useState(null), [S, N] = l.useState(null), R = J(t, (A) => C(A)), [E, _] = l.useState(null), [O, F] = l.useState(
      null
    ), U = Xo(n), [Q, k] = l.useState(!1), G = l.useRef(!1);
    l.useEffect(() => {
      if (w) return ho(w);
    }, [w]), mo();
    const V = l.useCallback(
      (A) => {
        const [K, ...te] = U().map((H) => H.ref.current), [ne] = te.slice(-1), ee = document.activeElement;
        for (const H of A)
          if (H === ee || (H?.scrollIntoView({ block: "nearest" }), H === K && S && (S.scrollTop = 0), H === ne && S && (S.scrollTop = S.scrollHeight), H?.focus(), document.activeElement !== ee)) return;
      },
      [U, S]
    ), D = l.useCallback(
      () => V([E, w]),
      [V, E, w]
    );
    l.useEffect(() => {
      Q && D();
    }, [Q, D]);
    const { onOpenChange: P, triggerPointerDownPosRef: $ } = y;
    l.useEffect(() => {
      if (w) {
        let A = { x: 0, y: 0 };
        const K = (ne) => {
          A = {
            x: Math.abs(Math.round(ne.pageX) - ($.current?.x ?? 0)),
            y: Math.abs(Math.round(ne.pageY) - ($.current?.y ?? 0))
          };
        }, te = (ne) => {
          A.x <= 10 && A.y <= 10 ? ne.preventDefault() : w.contains(ne.target) || P(!1), document.removeEventListener("pointermove", K), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", te, { capture: !0 });
        };
      }
    }, [w, P, $]), l.useEffect(() => {
      const A = () => P(!1);
      return window.addEventListener("blur", A), window.addEventListener("resize", A), () => {
        window.removeEventListener("blur", A), window.removeEventListener("resize", A);
      };
    }, [P]);
    const [j, Y] = ch((A) => {
      const K = U().filter((ee) => !ee.disabled), te = K.find((ee) => ee.ref.current === document.activeElement), ne = lh(K, A, te);
      ne && setTimeout(() => ne.ref.current.focus());
    }), M = l.useCallback(
      (A, K, te) => {
        const ne = !G.current && !te;
        (y.value !== void 0 && y.value === K || ne) && (_(A), ne && (G.current = !0));
      },
      [y.value]
    ), L = l.useCallback(() => w?.focus(), [w]), z = l.useCallback(
      (A, K, te) => {
        const ne = !G.current && !te;
        (y.value !== void 0 && y.value === K || ne) && F(A);
      },
      [y.value]
    ), B = r === "popper" ? as : Gp, Z = B === as ? {
      side: c,
      sideOffset: u,
      align: d,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ i.jsx(
      Hp,
      {
        scope: n,
        content: w,
        viewport: S,
        onViewportChange: N,
        itemRefCallback: M,
        selectedItem: E,
        onItemLeave: L,
        itemTextRefCallback: z,
        focusSelectedItem: D,
        selectedItemText: O,
        position: r,
        isPositioned: Q,
        searchRef: j,
        children: /* @__PURE__ */ i.jsx(Qn, { as: g_, allowPinchZoom: !0, children: /* @__PURE__ */ i.jsx(
          Xn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (A) => {
              A.preventDefault();
            },
            onUnmountAutoFocus: I(o, (A) => {
              y.trigger?.focus({ preventScroll: !0 }), A.preventDefault();
            }),
            children: /* @__PURE__ */ i.jsx(
              bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (A) => A.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ i.jsx(
                  B,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (A) => A.preventDefault(),
                    ...b,
                    ...Z,
                    onPlaced: () => k(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: I(b.onKeyDown, (A) => {
                      const K = A.ctrlKey || A.altKey || A.metaKey;
                      if (A.key === "Tab" && A.preventDefault(), !K && A.key.length === 1 && Y(A.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key)) {
                        let ne = U().filter((ee) => !ee.disabled).map((ee) => ee.ref.current);
                        if (["ArrowUp", "End"].includes(A.key) && (ne = ne.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
                          const ee = A.target, H = ne.indexOf(ee);
                          ne = ne.slice(H + 1);
                        }
                        setTimeout(() => V(ne)), A.preventDefault();
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
zp.displayName = v_;
var x_ = "SelectItemAlignedPosition", Gp = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Et($t, n), s = Rt($t, n), [c, u] = l.useState(null), [d, f] = l.useState(null), m = J(t, (R) => f(R)), p = Xo(n), v = l.useRef(!1), g = l.useRef(!0), { viewport: h, selectedItem: x, selectedItemText: b, focusSelectedItem: y } = s, w = l.useCallback(() => {
    if (a.trigger && a.valueNode && c && d && h && x && b) {
      const R = a.trigger.getBoundingClientRect(), E = d.getBoundingClientRect(), _ = a.valueNode.getBoundingClientRect(), O = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ee = O.left - E.left, H = _.left - ee, oe = R.left - H, ue = R.width + oe, xe = Math.max(ue, E.width), Se = window.innerWidth - Oe, Te = os(H, [
          Oe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Oe, Se - xe)
        ]);
        c.style.minWidth = ue + "px", c.style.left = Te + "px";
      } else {
        const ee = E.right - O.right, H = window.innerWidth - _.right - ee, oe = window.innerWidth - R.right - H, ue = R.width + oe, xe = Math.max(ue, E.width), Se = window.innerWidth - Oe, Te = os(H, [
          Oe,
          Math.max(Oe, Se - xe)
        ]);
        c.style.minWidth = ue + "px", c.style.right = Te + "px";
      }
      const F = p(), U = window.innerHeight - Oe * 2, Q = h.scrollHeight, k = window.getComputedStyle(d), G = parseInt(k.borderTopWidth, 10), V = parseInt(k.paddingTop, 10), D = parseInt(k.borderBottomWidth, 10), P = parseInt(k.paddingBottom, 10), $ = G + V + Q + P + D, j = Math.min(x.offsetHeight * 5, $), Y = window.getComputedStyle(h), M = parseInt(Y.paddingTop, 10), L = parseInt(Y.paddingBottom, 10), z = R.top + R.height / 2 - Oe, B = U - z, Z = x.offsetHeight / 2, A = x.offsetTop + Z, K = G + V + A, te = $ - K;
      if (K <= z) {
        const ee = F.length > 0 && x === F[F.length - 1].ref.current;
        c.style.bottom = "0px";
        const H = d.clientHeight - h.offsetTop - h.offsetHeight, oe = Math.max(
          B,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ee ? L : 0) + H + D
        ), ue = K + oe;
        c.style.height = ue + "px";
      } else {
        const ee = F.length > 0 && x === F[0].ref.current;
        c.style.top = "0px";
        const oe = Math.max(
          z,
          G + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ee ? M : 0) + Z
        ) + te;
        c.style.height = oe + "px", h.scrollTop = K - z + h.offsetTop;
      }
      c.style.margin = `${Oe}px 0`, c.style.minHeight = j + "px", c.style.maxHeight = U + "px", r?.(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    c,
    d,
    h,
    x,
    b,
    a.dir,
    r
  ]);
  fe(() => w(), [w]);
  const [C, S] = l.useState();
  fe(() => {
    d && S(window.getComputedStyle(d).zIndex);
  }, [d]);
  const N = l.useCallback(
    (R) => {
      R && g.current === !0 && (w(), y?.(), g.current = !1);
    },
    [w, y]
  );
  return /* @__PURE__ */ i.jsx(
    y_,
    {
      scope: n,
      contentWrapper: c,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: u,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ i.jsx(
            W.div,
            {
              ...o,
              ref: m,
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
Gp.displayName = x_;
var b_ = "SelectPopperPosition", as = l.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Oe,
    ...a
  } = e, s = Qo(n);
  return /* @__PURE__ */ i.jsx(
    ko,
    {
      ...s,
      ...a,
      ref: t,
      align: r,
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
as.displayName = b_;
var [y_, Pi] = wn($t, {}), ss = "SelectViewport", Yp = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Rt(ss, n), s = Pi(ss, n), c = J(t, a.onViewportChange), u = l.useRef(0);
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ i.jsx(qo.Slot, { scope: n, children: /* @__PURE__ */ i.jsx(
        W.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: c,
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
          onScroll: I(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = s;
            if (p?.current && m) {
              const v = Math.abs(u.current - f.scrollTop);
              if (v > 0) {
                const g = window.innerHeight - Oe * 2, h = parseFloat(m.style.minHeight), x = parseFloat(m.style.height), b = Math.max(h, x);
                if (b < g) {
                  const y = b + v, w = Math.min(g, y), C = y - w;
                  m.style.height = w + "px", m.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, m.style.justifyContent = "flex-end");
                }
              }
            }
            u.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Yp.displayName = ss;
var Kp = "SelectGroup", [w_, C_] = wn(Kp), Up = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = pe();
    return /* @__PURE__ */ i.jsx(w_, { scope: n, id: o, children: /* @__PURE__ */ i.jsx(W.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Up.displayName = Kp;
var qp = "SelectLabel", Xp = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = C_(qp, n);
    return /* @__PURE__ */ i.jsx(W.div, { id: o.id, ...r, ref: t });
  }
);
Xp.displayName = qp;
var ao = "SelectItem", [S_, Qp] = wn(ao), Jp = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, c = Et(ao, n), u = Rt(ao, n), d = c.value === r, [f, m] = l.useState(a ?? ""), [p, v] = l.useState(!1), g = J(
      t,
      (y) => u.itemRefCallback?.(y, r, o)
    ), h = pe(), x = l.useRef("touch"), b = () => {
      o || (c.onValueChange(r), c.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ i.jsx(
      S_,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: l.useCallback((y) => {
          m((w) => w || (y?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ i.jsx(
          qo.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ i.jsx(
              W.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: g,
                onFocus: I(s.onFocus, () => v(!0)),
                onBlur: I(s.onBlur, () => v(!1)),
                onClick: I(s.onClick, () => {
                  x.current !== "mouse" && b();
                }),
                onPointerUp: I(s.onPointerUp, () => {
                  x.current === "mouse" && b();
                }),
                onPointerDown: I(s.onPointerDown, (y) => {
                  x.current = y.pointerType;
                }),
                onPointerMove: I(s.onPointerMove, (y) => {
                  x.current = y.pointerType, o ? u.onItemLeave?.() : x.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: I(s.onPointerLeave, (y) => {
                  y.currentTarget === document.activeElement && u.onItemLeave?.();
                }),
                onKeyDown: I(s.onKeyDown, (y) => {
                  u.searchRef?.current !== "" && y.key === " " || (l_.includes(y.key) && b(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Jp.displayName = ao;
var _n = "SelectItemText", Zp = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Et(_n, n), c = Rt(_n, n), u = Qp(_n, n), d = m_(_n, n), [f, m] = l.useState(null), p = J(
      t,
      (b) => m(b),
      u.onItemTextChange,
      (b) => c.itemTextRefCallback?.(b, u.value, u.disabled)
    ), v = f?.textContent, g = l.useMemo(
      () => /* @__PURE__ */ i.jsx("option", { value: u.value, disabled: u.disabled, children: v }, u.value),
      [u.disabled, u.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: x } = d;
    return fe(() => (h(g), () => x(g)), [h, x, g]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(W.span, { id: u.textId, ...a, ref: p }),
      u.isSelected && s.valueNode && !s.valueNodeHasChildren ? Yn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Zp.displayName = _n;
var eh = "SelectItemIndicator", th = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Qp(eh, n).isSelected ? /* @__PURE__ */ i.jsx(W.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
th.displayName = eh;
var is = "SelectScrollUpButton", nh = l.forwardRef((e, t) => {
  const n = Rt(is, e.__scopeSelect), r = Pi(is, e.__scopeSelect), [o, a] = l.useState(!1), s = J(t, r.onScrollButtonChange);
  return fe(() => {
    if (n.viewport && n.isPositioned) {
      let c = function() {
        const d = u.scrollTop > 0;
        a(d);
      };
      const u = n.viewport;
      return c(), u.addEventListener("scroll", c), () => u.removeEventListener("scroll", c);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ i.jsx(
    oh,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: u } = n;
        c && u && (c.scrollTop = c.scrollTop - u.offsetHeight);
      }
    }
  ) : null;
});
nh.displayName = is;
var cs = "SelectScrollDownButton", rh = l.forwardRef((e, t) => {
  const n = Rt(cs, e.__scopeSelect), r = Pi(cs, e.__scopeSelect), [o, a] = l.useState(!1), s = J(t, r.onScrollButtonChange);
  return fe(() => {
    if (n.viewport && n.isPositioned) {
      let c = function() {
        const d = u.scrollHeight - u.clientHeight, f = Math.ceil(u.scrollTop) < d;
        a(f);
      };
      const u = n.viewport;
      return c(), u.addEventListener("scroll", c), () => u.removeEventListener("scroll", c);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ i.jsx(
    oh,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: u } = n;
        c && u && (c.scrollTop = c.scrollTop + u.offsetHeight);
      }
    }
  ) : null;
});
rh.displayName = cs;
var oh = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Rt("SelectScrollButton", n), s = l.useRef(null), c = Xo(n), u = l.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return l.useEffect(() => () => u(), [u]), fe(() => {
    c().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ i.jsx(
    W.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: I(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: I(o.onPointerMove, () => {
        a.onItemLeave?.(), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: I(o.onPointerLeave, () => {
        u();
      })
    }
  );
}), N_ = "SelectSeparator", ah = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(W.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
ah.displayName = N_;
var ls = "SelectArrow", E_ = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Qo(n), a = Et(ls, n), s = Rt(ls, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ i.jsx(Ao, { ...o, ...r, ref: t }) : null;
  }
);
E_.displayName = ls;
var R_ = "SelectBubbleInput", sh = l.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = l.useRef(null), a = J(r, o), s = ar(t);
    return l.useEffect(() => {
      const c = o.current;
      if (!c) return;
      const u = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        u,
        "value"
      ).set;
      if (s !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(c, t), c.dispatchEvent(m);
      }
    }, [s, t]), /* @__PURE__ */ i.jsx(
      W.select,
      {
        ...n,
        style: { ...Dm, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
sh.displayName = R_;
function ih(e) {
  return e === "" || e === void 0;
}
function ch(e) {
  const t = ie(e), n = l.useRef(""), r = l.useRef(0), o = l.useCallback(
    (s) => {
      const c = n.current + s;
      t(c), (function u(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => u(""), 1e3));
      })(c);
    },
    [t]
  ), a = l.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function lh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = P_(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const u = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function P_(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var T_ = Ip, uh = Lp, __ = $p, M_ = Wp, j_ = Vp, dh = Bp, k_ = Yp, A_ = Up, fh = Xp, mh = Jp, D_ = Zp, I_ = th, ph = nh, hh = rh, vh = ah;
const so = T_, nk = A_, io = __, Hn = l.forwardRef(({ className: e, children: t, isLoading: n = !1, ...r }, o) => /* @__PURE__ */ i.jsxs(
  uh,
  {
    ref: o,
    className: T(
      "flex h-9 w-full items-center text-left justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1", children: [
        n && /* @__PURE__ */ i.jsx(An, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ i.jsx(M_, { asChild: !0, children: /* @__PURE__ */ i.jsx(pt, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Hn.displayName = uh.displayName;
const gh = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  ph,
  {
    ref: n,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i.jsx(eg, { className: "h-4 w-4" })
  }
));
gh.displayName = ph.displayName;
const xh = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  hh,
  {
    ref: n,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i.jsx(pt, { className: "h-4 w-4" })
  }
));
xh.displayName = hh.displayName;
const zn = l.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ i.jsx(j_, { children: /* @__PURE__ */ i.jsxs(
  dh,
  {
    ref: o,
    className: T(
      "relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ i.jsx(gh, {}),
      /* @__PURE__ */ i.jsx(
        k_,
        {
          className: T(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ i.jsx(xh, {})
    ]
  }
) }));
zn.displayName = dh.displayName;
const O_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  fh,
  {
    ref: n,
    className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
O_.displayName = fh.displayName;
const un = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ i.jsxs(
  mh,
  {
    ref: r,
    className: T(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ i.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ i.jsx(I_, { children: /* @__PURE__ */ i.jsx(Kn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ i.jsx(D_, { children: t })
    ]
  }
));
un.displayName = mh.displayName;
const L_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  vh,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
L_.displayName = vh.displayName;
const rk = ({
  name: e,
  label: t,
  placeholder: n,
  options: r,
  helpText: o,
  isLoading: a,
  ...s
}) => {
  const c = qn();
  return /* @__PURE__ */ i.jsx(
    Vo,
    {
      control: c.control,
      name: e,
      render: ({ field: u }) => /* @__PURE__ */ i.jsxs(br, { children: [
        !!t && /* @__PURE__ */ i.jsx(Ho, { children: t }),
        /* @__PURE__ */ i.jsxs(
          so,
          {
            onValueChange: u.onChange,
            value: u.value,
            defaultValue: u.value,
            ...s,
            children: [
              /* @__PURE__ */ i.jsx(zo, { children: /* @__PURE__ */ i.jsx(Hn, { isLoading: a, children: /* @__PURE__ */ i.jsx(io, { placeholder: n }) }) }),
              /* @__PURE__ */ i.jsx(zn, { children: r.map((d) => /* @__PURE__ */ i.jsx(un, { value: d.value, children: d.label }, d.value)) })
            ]
          }
        ),
        !!o && /* @__PURE__ */ i.jsx(Am, { children: o }),
        /* @__PURE__ */ i.jsx(yr, {})
      ] })
    }
  );
};
var F_ = "Separator", el = "horizontal", $_ = ["horizontal", "vertical"], bh = l.forwardRef((e, t) => {
  const { decorative: n, orientation: r = el, ...o } = e, a = W_(r) ? r : el, c = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ i.jsx(
    W.div,
    {
      "data-orientation": a,
      ...c,
      ...o,
      ref: t
    }
  );
});
bh.displayName = F_;
function W_(e) {
  return $_.includes(e);
}
var yh = bh;
const wh = l.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ i.jsx(
    yh,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: T(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
wh.displayName = yh.displayName;
const ok = go, ak = Ts, sk = vn, V_ = xo, Ch = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  pn,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Ch.displayName = pn.displayName;
const B_ = Je(
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
), H_ = l.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ i.jsxs(V_, { children: [
  /* @__PURE__ */ i.jsx(Ch, {}),
  /* @__PURE__ */ i.jsxs(
    hn,
    {
      ref: o,
      className: T(B_({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ i.jsxs(vn, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ i.jsx(vs, { className: "h-4 w-4" }),
          /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
H_.displayName = hn.displayName;
const z_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
z_.displayName = "SheetHeader";
const G_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
G_.displayName = "SheetFooter";
const Y_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Jn,
  {
    ref: n,
    className: T("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Y_.displayName = Jn.displayName;
const K_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Zn,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
K_.displayName = Zn.displayName;
function U_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: T("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var Jo = "Switch", [q_, ik] = ve(Jo), [X_, Q_] = q_(Jo), Sh = l.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: c,
      value: u = "on",
      onCheckedChange: d,
      form: f,
      ...m
    } = e, [p, v] = l.useState(null), g = J(t, (w) => v(w)), h = l.useRef(!1), x = p ? f || !!p.closest("form") : !0, [b, y] = ge({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: Jo
    });
    return /* @__PURE__ */ i.jsxs(X_, { scope: n, checked: b, disabled: c, children: [
      /* @__PURE__ */ i.jsx(
        W.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": s,
          "data-state": Ph(b),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: u,
          ...m,
          ref: g,
          onClick: I(e.onClick, (w) => {
            y((C) => !C), x && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ i.jsx(
        Rh,
        {
          control: p,
          bubbles: !h.current,
          name: r,
          value: u,
          checked: b,
          required: s,
          disabled: c,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Sh.displayName = Jo;
var Nh = "SwitchThumb", Eh = l.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Q_(Nh, n);
    return /* @__PURE__ */ i.jsx(
      W.span,
      {
        "data-state": Ph(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Eh.displayName = Nh;
var J_ = "SwitchBubbleInput", Rh = l.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = l.useRef(null), c = J(s, a), u = ar(n), d = Co(t);
    return l.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (u !== n && v) {
        const g = new Event("click", { bubbles: r });
        v.call(f, n), f.dispatchEvent(g);
      }
    }, [u, n, r]), /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: c,
        style: {
          ...o.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Rh.displayName = J_;
function Ph(e) {
  return e ? "checked" : "unchecked";
}
var Th = Sh, Z_ = Eh;
const eM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Th,
  {
    className: T(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ i.jsx(
      Z_,
      {
        className: T(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
eM.displayName = Th.displayName;
const tM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ i.jsx(
  "table",
  {
    ref: n,
    className: T("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
tM.displayName = "Table";
const nM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "thead",
  {
    ref: n,
    className: T("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
nM.displayName = "TableHeader";
const rM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "tbody",
  {
    ref: n,
    className: T("[&_tr:last-child]:border-0", e),
    ...t
  }
));
rM.displayName = "TableBody";
const oM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "tfoot",
  {
    ref: n,
    className: T(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
oM.displayName = "TableFooter";
const aM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "tr",
  {
    ref: n,
    className: T(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
aM.displayName = "TableRow";
const sM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "th",
  {
    ref: n,
    className: T(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
sM.displayName = "TableHead";
const iM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "td",
  {
    ref: n,
    className: T(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
iM.displayName = "TableCell";
const cM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "caption",
  {
    ref: n,
    className: T("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
cM.displayName = "TableCaption";
var Zo = "Tabs", [lM, ck] = ve(Zo, [
  St
]), _h = St(), [uM, Ti] = lM(Zo), Mh = l.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: c,
      activationMode: u = "automatic",
      ...d
    } = e, f = it(c), [m, p] = ge({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Zo
    });
    return /* @__PURE__ */ i.jsx(
      uM,
      {
        scope: n,
        baseId: pe(),
        value: m,
        onValueChange: p,
        orientation: s,
        dir: f,
        activationMode: u,
        children: /* @__PURE__ */ i.jsx(
          W.div,
          {
            dir: f,
            "data-orientation": s,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
Mh.displayName = Zo;
var jh = "TabsList", kh = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Ti(jh, n), s = _h(n);
    return /* @__PURE__ */ i.jsx(
      Oo,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ i.jsx(
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
kh.displayName = jh;
var Ah = "TabsTrigger", Dh = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Ti(Ah, n), c = _h(n), u = Lh(s.baseId, r), d = Fh(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ i.jsx(
      Lo,
      {
        asChild: !0,
        ...c,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ i.jsx(
          W.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: u,
            ...a,
            ref: t,
            onMouseDown: I(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? s.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: I(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && s.onValueChange(r);
            }),
            onFocus: I(e.onFocus, () => {
              const m = s.activationMode !== "manual";
              !f && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Dh.displayName = Ah;
var Ih = "TabsContent", Oh = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, c = Ti(Ih, n), u = Lh(c.baseId, r), d = Fh(c.baseId, r), f = r === c.value, m = l.useRef(f);
    return l.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ i.jsx(me, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ i.jsx(
      W.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": u,
        hidden: !p,
        id: d,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: m.current ? "0s" : void 0
        },
        children: p && a
      }
    ) });
  }
);
Oh.displayName = Ih;
function Lh(e, t) {
  return `${e}-trigger-${t}`;
}
function Fh(e, t) {
  return `${e}-content-${t}`;
}
var dM = Mh, $h = kh, Wh = Dh, Vh = Oh;
const lk = dM, fM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  $h,
  {
    ref: n,
    className: T(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
fM.displayName = $h.displayName;
const mM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Wh,
  {
    ref: n,
    className: T(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
mM.displayName = Wh.displayName;
const pM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  Vh,
  {
    ref: n,
    className: T(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
pM.displayName = Vh.displayName;
const Bh = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  "textarea",
  {
    className: T(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: n,
    ...t
  }
));
Bh.displayName = "Textarea";
const hM = ({
  name: e,
  label: t,
  placeholder: n,
  ...r
}) => {
  const o = qn();
  return /* @__PURE__ */ i.jsx(
    Vo,
    {
      control: o.control,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ i.jsxs(br, { children: [
        !!t && /* @__PURE__ */ i.jsx(Ho, { children: t }),
        /* @__PURE__ */ i.jsx(zo, { children: /* @__PURE__ */ i.jsx(Bh, { placeholder: n, ...r, ...a }) }),
        /* @__PURE__ */ i.jsx(yr, {})
      ] })
    }
  );
};
hM.displayName = "TextareaForm";
var _i = "ToastProvider", [Mi, vM, gM] = Bt("Toast"), [Hh, uk] = ve("Toast", [gM]), [xM, ea] = Hh(_i), zh = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [c, u] = l.useState(null), [d, f] = l.useState(0), m = l.useRef(!1), p = l.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${_i}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ i.jsx(Mi.Provider, { scope: t, children: /* @__PURE__ */ i.jsx(
    xM,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: c,
      onViewportChange: u,
      onToastAdd: l.useCallback(() => f((v) => v + 1), []),
      onToastRemove: l.useCallback(() => f((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: p,
      children: s
    }
  ) });
};
zh.displayName = _i;
var Gh = "ToastViewport", bM = ["F8"], us = "toast.viewportPause", ds = "toast.viewportResume", Yh = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = bM,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = ea(Gh, n), c = vM(n), u = l.useRef(null), d = l.useRef(null), f = l.useRef(null), m = l.useRef(null), p = J(t, m, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = s.toastCount > 0;
    l.useEffect(() => {
      const x = (b) => {
        r.length !== 0 && r.every((w) => b[w] || b.code === w) && m.current?.focus();
      };
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [r]), l.useEffect(() => {
      const x = u.current, b = m.current;
      if (g && x && b) {
        const y = () => {
          if (!s.isClosePausedRef.current) {
            const N = new CustomEvent(us);
            b.dispatchEvent(N), s.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (s.isClosePausedRef.current) {
            const N = new CustomEvent(ds);
            b.dispatchEvent(N), s.isClosePausedRef.current = !1;
          }
        }, C = (N) => {
          !x.contains(N.relatedTarget) && w();
        }, S = () => {
          x.contains(document.activeElement) || w();
        };
        return x.addEventListener("focusin", y), x.addEventListener("focusout", C), x.addEventListener("pointermove", y), x.addEventListener("pointerleave", S), window.addEventListener("blur", y), window.addEventListener("focus", w), () => {
          x.removeEventListener("focusin", y), x.removeEventListener("focusout", C), x.removeEventListener("pointermove", y), x.removeEventListener("pointerleave", S), window.removeEventListener("blur", y), window.removeEventListener("focus", w);
        };
      }
    }, [g, s.isClosePausedRef]);
    const h = l.useCallback(
      ({ tabbingDirection: x }) => {
        const y = c().map((w) => {
          const C = w.ref.current, S = [C, ...kM(C)];
          return x === "forwards" ? S : S.reverse();
        });
        return (x === "forwards" ? y.reverse() : y).flat();
      },
      [c]
    );
    return l.useEffect(() => {
      const x = m.current;
      if (x) {
        const b = (y) => {
          const w = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !w) {
            const S = document.activeElement, N = y.shiftKey;
            if (y.target === x && N) {
              d.current?.focus();
              return;
            }
            const _ = h({ tabbingDirection: N ? "backwards" : "forwards" }), O = _.findIndex((F) => F === S);
            ja(_.slice(O + 1)) ? y.preventDefault() : N ? d.current?.focus() : f.current?.focus();
          }
        };
        return x.addEventListener("keydown", b), () => x.removeEventListener("keydown", b);
      }
    }, [c, h]), /* @__PURE__ */ i.jsxs(
      Ox,
      {
        ref: u,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ i.jsx(
            fs,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const x = h({
                  tabbingDirection: "forwards"
                });
                ja(x);
              }
            }
          ),
          /* @__PURE__ */ i.jsx(Mi.Slot, { scope: n, children: /* @__PURE__ */ i.jsx(W.ol, { tabIndex: -1, ...a, ref: p }) }),
          g && /* @__PURE__ */ i.jsx(
            fs,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const x = h({
                  tabbingDirection: "backwards"
                });
                ja(x);
              }
            }
          )
        ]
      }
    );
  }
);
Yh.displayName = Gh;
var Kh = "ToastFocusProxy", fs = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = ea(Kh, n);
    return /* @__PURE__ */ i.jsx(
      Go,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (s) => {
          const c = s.relatedTarget;
          !a.viewport?.contains(c) && r();
        }
      }
    );
  }
);
fs.displayName = Kh;
var wr = "Toast", yM = "toast.swipeStart", wM = "toast.swipeMove", CM = "toast.swipeCancel", SM = "toast.swipeEnd", Uh = l.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [c, u] = ge({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: wr
    });
    return /* @__PURE__ */ i.jsx(me, { present: n || c, children: /* @__PURE__ */ i.jsx(
      RM,
      {
        open: c,
        ...s,
        ref: t,
        onClose: () => u(!1),
        onPause: ie(e.onPause),
        onResume: ie(e.onResume),
        onSwipeStart: I(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: I(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: I(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: I(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), u(!1);
        })
      }
    ) });
  }
);
Uh.displayName = wr;
var [NM, EM] = Hh(wr, {
  onClose() {
  }
}), RM = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: s,
      onEscapeKeyDown: c,
      onPause: u,
      onResume: d,
      onSwipeStart: f,
      onSwipeMove: m,
      onSwipeCancel: p,
      onSwipeEnd: v,
      ...g
    } = e, h = ea(wr, n), [x, b] = l.useState(null), y = J(t, (k) => b(k)), w = l.useRef(null), C = l.useRef(null), S = o || h.duration, N = l.useRef(0), R = l.useRef(S), E = l.useRef(0), { onToastAdd: _, onToastRemove: O } = h, F = ie(() => {
      x?.contains(document.activeElement) && h.viewport?.focus(), s();
    }), U = l.useCallback(
      (k) => {
        !k || k === 1 / 0 || (window.clearTimeout(E.current), N.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(F, k));
      },
      [F]
    );
    l.useEffect(() => {
      const k = h.viewport;
      if (k) {
        const G = () => {
          U(R.current), d?.();
        }, V = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - N.current;
          R.current = R.current - D, window.clearTimeout(E.current), u?.();
        };
        return k.addEventListener(us, V), k.addEventListener(ds, G), () => {
          k.removeEventListener(us, V), k.removeEventListener(ds, G);
        };
      }
    }, [h.viewport, S, u, d, U]), l.useEffect(() => {
      a && !h.isClosePausedRef.current && U(S);
    }, [a, S, h.isClosePausedRef, U]), l.useEffect(() => (_(), () => O()), [_, O]);
    const Q = l.useMemo(() => x ? tv(x) : null, [x]);
    return h.viewport ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      Q && /* @__PURE__ */ i.jsx(
        PM,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: Q
        }
      ),
      /* @__PURE__ */ i.jsx(NM, { scope: n, onClose: F, children: Yn.createPortal(
        /* @__PURE__ */ i.jsx(Mi.ItemSlot, { scope: n, children: /* @__PURE__ */ i.jsx(
          Ix,
          {
            asChild: !0,
            onEscapeKeyDown: I(c, () => {
              h.isFocusedToastEscapeKeyDownRef.current || F(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ i.jsx(
              W.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...g,
                ref: y,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: I(e.onKeyDown, (k) => {
                  k.key === "Escape" && (c?.(k.nativeEvent), k.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, F()));
                }),
                onPointerDown: I(e.onPointerDown, (k) => {
                  k.button === 0 && (w.current = { x: k.clientX, y: k.clientY });
                }),
                onPointerMove: I(e.onPointerMove, (k) => {
                  if (!w.current) return;
                  const G = k.clientX - w.current.x, V = k.clientY - w.current.y, D = !!C.current, P = ["left", "right"].includes(h.swipeDirection), $ = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, j = P ? $(0, G) : 0, Y = P ? 0 : $(0, V), M = k.pointerType === "touch" ? 10 : 2, L = { x: j, y: Y }, z = { originalEvent: k, delta: L };
                  D ? (C.current = L, Dr(wM, m, z, {
                    discrete: !1
                  })) : tl(L, h.swipeDirection, M) ? (C.current = L, Dr(yM, f, z, {
                    discrete: !1
                  }), k.target.setPointerCapture(k.pointerId)) : (Math.abs(G) > M || Math.abs(V) > M) && (w.current = null);
                }),
                onPointerUp: I(e.onPointerUp, (k) => {
                  const G = C.current, V = k.target;
                  if (V.hasPointerCapture(k.pointerId) && V.releasePointerCapture(k.pointerId), C.current = null, w.current = null, G) {
                    const D = k.currentTarget, P = { originalEvent: k, delta: G };
                    tl(G, h.swipeDirection, h.swipeThreshold) ? Dr(SM, v, P, {
                      discrete: !0
                    }) : Dr(
                      CM,
                      p,
                      P,
                      {
                        discrete: !0
                      }
                    ), D.addEventListener("click", ($) => $.preventDefault(), {
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
), PM = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ea(wr, t), [a, s] = l.useState(!1), [c, u] = l.useState(!1);
  return MM(() => s(!0)), l.useEffect(() => {
    const d = window.setTimeout(() => u(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), c ? null : /* @__PURE__ */ i.jsx(Ht, { asChild: !0, children: /* @__PURE__ */ i.jsx(Go, { ...r, children: a && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, TM = "ToastTitle", qh = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(W.div, { ...r, ref: t });
  }
);
qh.displayName = TM;
var _M = "ToastDescription", Xh = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ i.jsx(W.div, { ...r, ref: t });
  }
);
Xh.displayName = _M;
var Qh = "ToastAction", Jh = l.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ i.jsx(ev, { altText: n, asChild: !0, children: /* @__PURE__ */ i.jsx(ji, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Qh}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Jh.displayName = Qh;
var Zh = "ToastClose", ji = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = EM(Zh, n);
    return /* @__PURE__ */ i.jsx(ev, { asChild: !0, children: /* @__PURE__ */ i.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: I(e.onClick, o.onClose)
      }
    ) });
  }
);
ji.displayName = Zh;
var ev = l.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ i.jsx(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function tv(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), jM(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...tv(r));
    }
  }), t;
}
function Dr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Dn(o, a) : o.dispatchEvent(a);
}
var tl = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function MM(e = () => {
}) {
  const t = ie(e);
  fe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function jM(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function kM(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ja(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var AM = zh, nv = Yh, rv = Uh, ov = qh, av = Xh, sv = Jh, iv = ji;
const DM = AM, IM = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, cv = l.forwardRef(({ className: e, position: t = "bottom-right", ...n }, r) => /* @__PURE__ */ i.jsx(
  nv,
  {
    ref: r,
    className: T(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${IM[t]}`,
      e
    ),
    ...n
  }
));
cv.displayName = nv.displayName;
const OM = Je(
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
), lv = l.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ i.jsx(
  rv,
  {
    ref: r,
    className: T(OM({ variant: t }), e),
    ...n
  }
));
lv.displayName = rv.displayName;
const LM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  sv,
  {
    ref: n,
    className: T(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
LM.displayName = sv.displayName;
const uv = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  iv,
  {
    ref: n,
    className: T(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ i.jsx(vs, { className: "h-4 w-4" })
  }
));
uv.displayName = iv.displayName;
const dv = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  ov,
  {
    ref: n,
    className: T("text-sm font-semibold", e),
    ...t
  }
));
dv.displayName = ov.displayName;
const fv = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ i.jsx(
  av,
  {
    ref: n,
    className: T("text-sm opacity-90", e),
    ...t
  }
));
fv.displayName = av.displayName;
const FM = 1, $M = 1e4;
let ka = 0;
function WM() {
  return ka = (ka + 1) % Number.MAX_SAFE_INTEGER, ka.toString();
}
const Aa = /* @__PURE__ */ new Map(), nl = (e) => {
  if (Aa.has(e))
    return;
  const t = setTimeout(() => {
    Aa.delete(e), kn({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, $M);
  Aa.set(e, t);
}, VM = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, FM)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === t.toast.id ? { ...n, ...t.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? nl(n) : e.toasts.forEach((r) => {
        nl(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, Vr = [];
let Br = { toasts: [] };
function kn(e) {
  Br = VM(Br, e), Vr.forEach((t) => {
    t(Br);
  });
}
function BM({ ...e }) {
  const t = WM(), n = (o) => kn({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => kn({ type: "DISMISS_TOAST", toastId: t });
  return kn({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function HM() {
  const [e, t] = l.useState(Br);
  return l.useEffect(() => (Vr.push(t), () => {
    const n = Vr.indexOf(t);
    n > -1 && Vr.splice(n, 1);
  }), [e]), {
    ...e,
    toast: BM,
    dismiss: (n) => kn({ type: "DISMISS_TOAST", toastId: n })
  };
}
function dk() {
  const { toasts: e } = HM();
  return /* @__PURE__ */ i.jsxs(DM, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...a }) {
      return /* @__PURE__ */ i.jsxs(lv, { ...a, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ i.jsx(dv, { children: n }),
          r && /* @__PURE__ */ i.jsx(fv, { children: r })
        ] }),
        o,
        /* @__PURE__ */ i.jsx(uv, {})
      ] }, t);
    }),
    /* @__PURE__ */ i.jsx(cv, {})
  ] });
}
var mv = "Toggle", ki = l.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...a } = e, [s, c] = ge({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: mv
  });
  return /* @__PURE__ */ i.jsx(
    W.button,
    {
      type: "button",
      "aria-pressed": s,
      "data-state": s ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: I(e.onClick, () => {
        e.disabled || c(!s);
      })
    }
  );
});
ki.displayName = mv;
var pv = ki;
const hv = Je(
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
), zM = l.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ i.jsx(
  pv,
  {
    ref: o,
    className: T(hv({ variant: t, size: n, className: e })),
    ...r
  }
));
zM.displayName = pv.displayName;
var Pt = "ToggleGroup", [vv, fk] = ve(Pt, [
  St
]), gv = St(), Ai = se.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single") {
    const o = r;
    return /* @__PURE__ */ i.jsx(GM, { ...o, ref: t });
  }
  if (n === "multiple") {
    const o = r;
    return /* @__PURE__ */ i.jsx(YM, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Pt}\``);
});
Ai.displayName = Pt;
var [xv, bv] = vv(Pt), GM = se.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, c] = ge({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: Pt
  });
  return /* @__PURE__ */ i.jsx(
    xv,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: se.useMemo(() => s ? [s] : [], [s]),
      onItemActivate: c,
      onItemDeactivate: se.useCallback(() => c(""), [c]),
      children: /* @__PURE__ */ i.jsx(yv, { ...a, ref: t })
    }
  );
}), YM = se.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, c] = ge({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Pt
  }), u = se.useCallback(
    (f) => c((m = []) => [...m, f]),
    [c]
  ), d = se.useCallback(
    (f) => c((m = []) => m.filter((p) => p !== f)),
    [c]
  );
  return /* @__PURE__ */ i.jsx(
    xv,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: u,
      onItemDeactivate: d,
      children: /* @__PURE__ */ i.jsx(yv, { ...a, ref: t })
    }
  );
});
Ai.displayName = Pt;
var [KM, UM] = vv(Pt), yv = se.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: s,
      loop: c = !0,
      ...u
    } = e, d = gv(n), f = it(s), m = { role: "group", dir: f, ...u };
    return /* @__PURE__ */ i.jsx(KM, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ i.jsx(
      Oo,
      {
        asChild: !0,
        ...d,
        orientation: a,
        dir: f,
        loop: c,
        children: /* @__PURE__ */ i.jsx(W.div, { ...m, ref: t })
      }
    ) : /* @__PURE__ */ i.jsx(W.div, { ...m, ref: t }) });
  }
), co = "ToggleGroupItem", wv = se.forwardRef(
  (e, t) => {
    const n = bv(co, e.__scopeToggleGroup), r = UM(co, e.__scopeToggleGroup), o = gv(e.__scopeToggleGroup), a = n.value.includes(e.value), s = r.disabled || e.disabled, c = { ...e, pressed: a, disabled: s }, u = se.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ i.jsx(
      Lo,
      {
        asChild: !0,
        ...o,
        focusable: !s,
        active: a,
        ref: u,
        children: /* @__PURE__ */ i.jsx(rl, { ...c, ref: t })
      }
    ) : /* @__PURE__ */ i.jsx(rl, { ...c, ref: t });
  }
);
wv.displayName = co;
var rl = se.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = bv(co, n), s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, c = a.type === "single" ? s : void 0;
    return /* @__PURE__ */ i.jsx(
      ki,
      {
        ...c,
        ...o,
        ref: t,
        onPressedChange: (u) => {
          u ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), Cv = Ai, Sv = wv;
const Nv = l.createContext({
  size: "default",
  variant: "default"
}), qM = l.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, a) => /* @__PURE__ */ i.jsx(
  Cv,
  {
    ref: a,
    className: T("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ i.jsx(Nv.Provider, { value: { variant: t, size: n }, children: r })
  }
));
qM.displayName = Cv.displayName;
const XM = l.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, a) => {
  const s = l.useContext(Nv);
  return /* @__PURE__ */ i.jsx(
    Sv,
    {
      ref: a,
      className: T(
        hv({
          variant: s.variant || n,
          size: s.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
XM.displayName = Sv.displayName;
var [ta, mk] = ve("Tooltip", [
  wt
]), na = wt(), Ev = "TooltipProvider", QM = 700, ms = "tooltip.open", [JM, Di] = ta(Ev), Rv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = QM,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = l.useRef(!0), c = l.useRef(!1), u = l.useRef(0);
  return l.useEffect(() => {
    const d = u.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ i.jsx(
    JM,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: l.useCallback(() => {
        window.clearTimeout(u.current), s.current = !1;
      }, []),
      onClose: l.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => s.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: l.useCallback((d) => {
        c.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
Rv.displayName = Ev;
var Gn = "Tooltip", [ZM, Cr] = ta(Gn), Pv = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: c
  } = e, u = Di(Gn, e.__scopeTooltip), d = na(t), [f, m] = l.useState(null), p = pe(), v = l.useRef(0), g = s ?? u.disableHoverableContent, h = c ?? u.delayDuration, x = l.useRef(!1), [b, y] = ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (R) => {
      R ? (u.onOpen(), document.dispatchEvent(new CustomEvent(ms))) : u.onClose(), a?.(R);
    },
    caller: Gn
  }), w = l.useMemo(() => b ? x.current ? "delayed-open" : "instant-open" : "closed", [b]), C = l.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, x.current = !1, y(!0);
  }, [y]), S = l.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, y(!1);
  }, [y]), N = l.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      x.current = !0, y(!0), v.current = 0;
    }, h);
  }, [h, y]);
  return l.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ i.jsx(ur, { ...d, children: /* @__PURE__ */ i.jsx(
    ZM,
    {
      scope: t,
      contentId: p,
      open: b,
      stateAttribute: w,
      trigger: f,
      onTriggerChange: m,
      onTriggerEnter: l.useCallback(() => {
        u.isOpenDelayedRef.current ? N() : C();
      }, [u.isOpenDelayedRef, N, C]),
      onTriggerLeave: l.useCallback(() => {
        g ? S() : (window.clearTimeout(v.current), v.current = 0);
      }, [S, g]),
      onOpen: C,
      onClose: S,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
Pv.displayName = Gn;
var ps = "TooltipTrigger", Tv = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Cr(ps, n), a = Di(ps, n), s = na(n), c = l.useRef(null), u = J(t, c, o.onTriggerChange), d = l.useRef(!1), f = l.useRef(!1), m = l.useCallback(() => d.current = !1, []);
    return l.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ i.jsx(dr, { asChild: !0, ...s, children: /* @__PURE__ */ i.jsx(
      W.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: u,
        onPointerMove: I(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: I(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: I(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: I(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: I(e.onBlur, o.onClose),
        onClick: I(e.onClick, o.onClose)
      }
    ) });
  }
);
Tv.displayName = ps;
var Ii = "TooltipPortal", [ej, tj] = ta(Ii, {
  forceMount: void 0
}), _v = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = Cr(Ii, t);
  return /* @__PURE__ */ i.jsx(ej, { scope: t, forceMount: n, children: /* @__PURE__ */ i.jsx(me, { present: n || a.open, children: /* @__PURE__ */ i.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
_v.displayName = Ii;
var dn = "TooltipContent", Mv = l.forwardRef(
  (e, t) => {
    const n = tj(dn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Cr(dn, e.__scopeTooltip);
    return /* @__PURE__ */ i.jsx(me, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ i.jsx(jv, { side: o, ...a, ref: t }) : /* @__PURE__ */ i.jsx(nj, { side: o, ...a, ref: t }) });
  }
), nj = l.forwardRef((e, t) => {
  const n = Cr(dn, e.__scopeTooltip), r = Di(dn, e.__scopeTooltip), o = l.useRef(null), a = J(t, o), [s, c] = l.useState(null), { trigger: u, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = l.useCallback(() => {
    c(null), m(!1);
  }, [m]), v = l.useCallback(
    (g, h) => {
      const x = g.currentTarget, b = { x: g.clientX, y: g.clientY }, y = ij(b, x.getBoundingClientRect()), w = cj(b, y), C = lj(h.getBoundingClientRect()), S = dj([...w, ...C]);
      c(S), m(!0);
    },
    [m]
  );
  return l.useEffect(() => () => p(), [p]), l.useEffect(() => {
    if (u && f) {
      const g = (x) => v(x, f), h = (x) => v(x, u);
      return u.addEventListener("pointerleave", g), f.addEventListener("pointerleave", h), () => {
        u.removeEventListener("pointerleave", g), f.removeEventListener("pointerleave", h);
      };
    }
  }, [u, f, v, p]), l.useEffect(() => {
    if (s) {
      const g = (h) => {
        const x = h.target, b = { x: h.clientX, y: h.clientY }, y = u?.contains(x) || f?.contains(x), w = !uj(b, s);
        y ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [u, f, s, d, p]), /* @__PURE__ */ i.jsx(jv, { ...e, ref: a });
}), [rj, oj] = ta(Gn, { isInside: !1 }), aj = /* @__PURE__ */ ml("TooltipContent"), jv = l.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...c
    } = e, u = Cr(dn, n), d = na(n), { onClose: f } = u;
    return l.useEffect(() => (document.addEventListener(ms, f), () => document.removeEventListener(ms, f)), [f]), l.useEffect(() => {
      if (u.trigger) {
        const m = (p) => {
          p.target?.contains(u.trigger) && f();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [u.trigger, f]), /* @__PURE__ */ i.jsx(
      bt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ i.jsxs(
          ko,
          {
            "data-state": u.stateAttribute,
            ...d,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ i.jsx(aj, { children: r }),
              /* @__PURE__ */ i.jsx(rj, { scope: n, isInside: !0, children: /* @__PURE__ */ i.jsx(Im, { id: u.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Mv.displayName = dn;
var kv = "TooltipArrow", sj = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = na(n);
    return oj(
      kv,
      n
    ).isInside ? null : /* @__PURE__ */ i.jsx(Ao, { ...o, ...r, ref: t });
  }
);
sj.displayName = kv;
function ij(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function cj(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function lj(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function uj(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a], u = t[s], d = c.x, f = c.y, m = u.x, p = u.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function dj(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), fj(t);
}
function fj(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var mj = Rv, pj = Pv, hj = Tv, vj = _v, Av = Mv;
const pk = mj, hk = pj, vk = hj, gj = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ i.jsx(vj, { children: /* @__PURE__ */ i.jsx(
  Av,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
gj.displayName = Av.displayName;
export {
  Nj as Accordion,
  Sx as AccordionContent,
  wx as AccordionItem,
  Cx as AccordionTrigger,
  Ex as Alert,
  Px as AlertDescription,
  Rj as AlertDialog,
  oy as AlertDialogAction,
  ay as AlertDialogCancel,
  Zb as AlertDialogContent,
  ry as AlertDialogDescription,
  ty as AlertDialogFooter,
  ey as AlertDialogHeader,
  Fu as AlertDialogOverlay,
  Jb as AlertDialogPortal,
  ny as AlertDialogTitle,
  Pj as AlertDialogTrigger,
  Rx as AlertTitle,
  Tj as AsyncSelect,
  vy as Avatar,
  xy as AvatarFallback,
  gy as AvatarImage,
  bc as Badge,
  yy as Breadcrumb,
  Ry as BreadcrumbEllipsis,
  Cy as BreadcrumbItem,
  Sy as BreadcrumbLink,
  wy as BreadcrumbList,
  Ny as BreadcrumbPage,
  Ey as BreadcrumbSeparator,
  yt as Button,
  vd as Calendar,
  JS as Card,
  n0 as CardContent,
  t0 as CardDescription,
  r0 as CardFooter,
  ZS as CardHeader,
  e0 as CardTitle,
  F0 as Carousel,
  $0 as CarouselContent,
  W0 as CarouselItem,
  B0 as CarouselNext,
  V0 as CarouselPrevious,
  z0 as ChartContainer,
  Aj as ChartLegend,
  K0 as ChartLegendContent,
  G0 as ChartStyle,
  kj as ChartTooltip,
  Y0 as ChartTooltipContent,
  J0 as Checkbox,
  Z0 as Combobox,
  Ij as ComboboxForm,
  ir as Command,
  Oj as CommandDialog,
  Po as CommandEmpty,
  cr as CommandGroup,
  Eo as CommandInput,
  kt as CommandItem,
  Ro as CommandList,
  Fd as CommandSeparator,
  NN as CommandShortcut,
  Fj as DatePicker,
  vR as DateTimePicker,
  gR as Dialog,
  Wj as DialogClose,
  Ef as DialogContent,
  CR as DialogDescription,
  yR as DialogFooter,
  bR as DialogHeader,
  Nf as DialogOverlay,
  xR as DialogPortal,
  wR as DialogTitle,
  $j as DialogTrigger,
  Bj as DropdownMenu,
  KP as DropdownMenuCheckboxItem,
  GP as DropdownMenuContent,
  zj as DropdownMenuGroup,
  YP as DropdownMenuItem,
  qP as DropdownMenuLabel,
  Gj as DropdownMenuPortal,
  Kj as DropdownMenuRadioGroup,
  UP as DropdownMenuRadioItem,
  XP as DropdownMenuSeparator,
  QP as DropdownMenuShortcut,
  Yj as DropdownMenuSub,
  zP as DropdownMenuSubContent,
  HP as DropdownMenuSubTrigger,
  Hj as DropdownMenuTrigger,
  Uj as Form,
  zo as FormControl,
  Am as FormDescription,
  Vo as FormField,
  br as FormItem,
  Ho as FormLabel,
  yr as FormMessage,
  qj as Heading,
  pi as Input,
  Xj as InputForm,
  Wo as Label,
  RT as ListItem,
  PT as MaskedInput,
  _T as MultiSelect,
  bT as NavigationMenu,
  ST as NavigationMenuContent,
  ET as NavigationMenuIndicator,
  Jj as NavigationMenuItem,
  NT as NavigationMenuLink,
  yT as NavigationMenuList,
  CT as NavigationMenuTrigger,
  sp as NavigationMenuViewport,
  MT as Pagination,
  jT as PaginationContent,
  IT as PaginationEllipsis,
  kT as PaginationItem,
  wi as PaginationLink,
  DT as PaginationNext,
  AT as PaginationPrevious,
  mr as Popover,
  yn as PopoverContent,
  pr as PopoverTrigger,
  YT as RadioGroup,
  KT as RadioGroupItem,
  i_ as ScrollArea,
  Dp as ScrollBar,
  so as Select,
  zn as SelectContent,
  rk as SelectForm,
  nk as SelectGroup,
  un as SelectItem,
  O_ as SelectLabel,
  xh as SelectScrollDownButton,
  gh as SelectScrollUpButton,
  L_ as SelectSeparator,
  Hn as SelectTrigger,
  io as SelectValue,
  wh as Separator,
  ok as Sheet,
  sk as SheetClose,
  H_ as SheetContent,
  K_ as SheetDescription,
  G_ as SheetFooter,
  z_ as SheetHeader,
  Ch as SheetOverlay,
  V_ as SheetPortal,
  Y_ as SheetTitle,
  ak as SheetTrigger,
  U_ as Skeleton,
  eM as Switch,
  tM as Table,
  rM as TableBody,
  cM as TableCaption,
  iM as TableCell,
  oM as TableFooter,
  sM as TableHead,
  nM as TableHeader,
  aM as TableRow,
  lk as Tabs,
  pM as TabsContent,
  fM as TabsList,
  mM as TabsTrigger,
  Bh as Textarea,
  hM as TextareaForm,
  Sf as TimePicker,
  $r as TimePickerInput,
  lv as Toast,
  LM as ToastAction,
  uv as ToastClose,
  fv as ToastDescription,
  DM as ToastProvider,
  dv as ToastTitle,
  cv as ToastViewport,
  dk as Toaster,
  zM as Toggle,
  qM as ToggleGroup,
  XM as ToggleGroupItem,
  hk as Tooltip,
  gj as TooltipContent,
  pk as TooltipProvider,
  vk as TooltipTrigger,
  by as badgeVariants,
  jj as brazillianStates,
  ot as buttonVariants,
  T as cn,
  Mj as mask,
  wT as navigationMenuTriggerStyle,
  VM as reducer,
  BM as toast,
  hv as toggleVariants,
  Bo as useFormField,
  HM as useToast
};
