import * as u from "react";
import I, { useState as Le, useEffect as gt, useCallback as De, createContext as ev, useContext as tv, useRef as Yt, useLayoutEffect as gl, useMemo as no, useImperativeHandle as vl } from "react";
import * as pr from "react-dom";
import bl from "react-dom";
import { ChevronDown as Mt, ChevronsUpDown as xl, Loader2 as nr, Check as hr, ChevronRight as Aa, MoreHorizontal as yl, ChevronLeftIcon as nv, ChevronRightIcon as rv, ChevronDownIcon as ov, ArrowLeft as sv, ArrowRight as av, Search as iv, CalendarIcon as cv, Clock as lv, Calendar as uv, X as _a, Circle as wl, XCircle as ec, XIcon as dv, Plus as fv, CheckIcon as tc, WandSparkles as mv, ChevronLeft as pv, ChevronUp as hv } from "lucide-react";
import { useFormContext as Tn, FormProvider as gv, Controller as vv } from "react-hook-form";
import { Link as bv } from "react-router-dom";
import * as Oa from "recharts";
var Yr = { exports: {} }, Gn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function xv() {
  if (nc) return Gn;
  nc = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Gn.Fragment = t, Gn.jsx = n, Gn.jsxs = n, Gn;
}
var Kn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function yv() {
  return rc || (rc = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === k ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case h:
          return "Fragment";
        case x:
          return "Profiler";
        case b:
          return "StrictMode";
        case N:
          return "Suspense";
        case C:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case v:
            return "Portal";
          case w:
            return (A.displayName || "Context") + ".Provider";
          case y:
            return (A._context.displayName || "Context") + ".Consumer";
          case S:
            var G = A.render;
            return A = A.displayName, A || (A = G.displayName || G.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case E:
            return G = A.displayName || null, G !== null ? G : e(A.type) || "Memo";
          case R:
            G = A._payload, A = A._init;
            try {
              return e(A(G));
            } catch {
            }
        }
      return null;
    }
    function t(A) {
      return "" + A;
    }
    function n(A) {
      try {
        t(A);
        var G = !1;
      } catch {
        G = !0;
      }
      if (G) {
        G = console;
        var P = G.error, $ = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return P.call(
          G,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(A);
      }
    }
    function r(A) {
      if (A === h) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === R)
        return "<...>";
      try {
        var G = e(A);
        return G ? "<" + G + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var A = F.A;
      return A === null ? null : A.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(A) {
      if (K.call(A, "key")) {
        var G = Object.getOwnPropertyDescriptor(A, "key").get;
        if (G && G.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function i(A, G) {
      function P() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          G
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: P,
        configurable: !0
      });
    }
    function c() {
      var A = e(this.type);
      return B[A] || (B[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function d(A, G, P, $, z, V, J, O) {
      return P = V.ref, A = {
        $$typeof: g,
        type: A,
        key: G,
        props: V,
        _owner: z
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function f(A, G, P, $, z, V, J, O) {
      var U = G.children;
      if (U !== void 0)
        if ($)
          if (q(U)) {
            for ($ = 0; $ < U.length; $++)
              m(U[$]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(U);
      if (K.call(G, "key")) {
        U = e(A);
        var te = Object.keys(G).filter(function(ne) {
          return ne !== "key";
        });
        $ = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", L[U + $] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          U,
          te,
          U
        ), L[U + $] = !0);
      }
      if (U = null, P !== void 0 && (n(P), U = "" + P), a(G) && (n(G.key), U = "" + G.key), "key" in G) {
        P = {};
        for (var ee in G)
          ee !== "key" && (P[ee] = G[ee]);
      } else P = G;
      return U && i(
        P,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), d(
        A,
        U,
        V,
        z,
        o(),
        P,
        J,
        O
      );
    }
    function m(A) {
      typeof A == "object" && A !== null && A.$$typeof === g && A._store && (A._store.validated = 1);
    }
    var p = I, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), w = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), F = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, q = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(A) {
        return A();
      }
    };
    var H, B = {}, X = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), _ = D(r(s)), L = {};
    Kn.Fragment = h, Kn.jsx = function(A, G, P, $, z) {
      var V = 1e4 > F.recentlyCreatedOwnerStacks++;
      return f(
        A,
        G,
        P,
        !1,
        $,
        z,
        V ? Error("react-stack-top-frame") : X,
        V ? D(r(A)) : _
      );
    }, Kn.jsxs = function(A, G, P, $, z) {
      var V = 1e4 > F.recentlyCreatedOwnerStacks++;
      return f(
        A,
        G,
        P,
        !0,
        $,
        z,
        V ? Error("react-stack-top-frame") : X,
        V ? D(r(A)) : _
      );
    };
  })()), Kn;
}
var oc;
function wv() {
  return oc || (oc = 1, process.env.NODE_ENV === "production" ? Yr.exports = xv() : Yr.exports = yv()), Yr.exports;
}
var l = wv();
function Cv(e, t) {
  const n = u.createContext(t), r = (s) => {
    const { children: a, ...i } = s, c = u.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ l.jsx(n.Provider, { value: c, children: a });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const a = u.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Ce(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = u.createContext(a), c = n.length;
    n = [...n, a];
    const d = (m) => {
      const { scope: p, children: g, ...v } = m, h = p?.[e]?.[c] || i, b = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ l.jsx(h.Provider, { value: b, children: g });
    };
    d.displayName = s + "Provider";
    function f(m, p) {
      const g = p?.[e]?.[c] || i, v = u.useContext(g);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [d, f];
  }
  const o = () => {
    const s = n.map((a) => u.createContext(a));
    return function(i) {
      const c = i?.[e] || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, Sv(o, ...t)];
}
function Sv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: c, scopeName: d }) => {
        const m = c(s)[`__scope${d}`];
        return { ...i, ...m };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function sc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function st(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = sc(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : sc(e[o], null);
        }
      };
  };
}
function oe(...e) {
  return u.useCallback(st(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  const t = /* @__PURE__ */ Nv(e), n = u.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = u.Children.toArray(s), c = i.find(Ev);
    if (c) {
      const d = c.props.children, f = i.map((m) => m === c ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ l.jsx(t, { ...a, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ l.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Cl = /* @__PURE__ */ Tt("Slot");
// @__NO_SIDE_EFFECTS__
function Nv(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const a = Mv(o), i = Rv(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? st(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Sl = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Nl(e) {
  const t = ({ children: n }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Sl, t;
}
function Ev(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sl;
}
function Rv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Mv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function en(e) {
  const t = e + "CollectionProvider", [n, r] = Ce(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: b, children: x } = h, y = I.useRef(null), w = I.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: b, itemMap: w, collectionRef: y, children: x });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Tt(i), d = I.forwardRef(
    (h, b) => {
      const { scope: x, children: y } = h, w = s(i, x), S = oe(b, w.collectionRef);
      return /* @__PURE__ */ l.jsx(c, { ref: S, children: y });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ Tt(f), g = I.forwardRef(
    (h, b) => {
      const { scope: x, children: y, ...w } = h, S = I.useRef(null), N = oe(b, S), C = s(f, x);
      return I.useEffect(() => (C.itemMap.set(S, { ref: S, ...w }), () => void C.itemMap.delete(S))), /* @__PURE__ */ l.jsx(p, { [m]: "", ref: N, children: y });
    }
  );
  g.displayName = f;
  function v(h) {
    const b = s(e + "CollectionConsumer", h);
    return I.useCallback(() => {
      const y = b.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${m}]`));
      return Array.from(b.itemMap.values()).sort(
        (C, E) => w.indexOf(C.ref.current) - w.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: g },
    v,
    r
  ];
}
function j(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var ge = globalThis?.document ? u.useLayoutEffect : () => {
}, Tv = u[" useInsertionEffect ".trim().toString()] || ge;
function Se({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = Pv({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const m = f.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const d = u.useCallback(
    (f) => {
      if (i) {
        const m = kv(f) ? f(e) : f;
        m !== e && a.current?.(m);
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [c, d];
}
function Pv({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return Tv(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function kv(e) {
  return typeof e == "function";
}
var Dv = [
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
], W = Dv.reduce((e, t) => {
  const n = /* @__PURE__ */ Tt(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function rr(e, t) {
  e && pr.flushSync(() => e.dispatchEvent(t));
}
function Av(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var ve = (e) => {
  const { present: t, children: n } = e, r = _v(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = oe(r.ref, Ov(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
ve.displayName = "Presence";
function _v(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = Av(a, {
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
    const d = Gr(r.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), ge(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = s.current, g = Gr(d);
      e ? c("MOUNT") : g === "none" || d?.display === "none" ? c("UNMOUNT") : c(f && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ge(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (g) => {
        const h = Gr(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, p = (g) => {
        g.target === t && (s.current = Gr(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Gr(e) {
  return e?.animationName || "none";
}
function Ov(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var jv = u[" useId ".trim().toString()] || (() => {
}), Iv = 0;
function be(e) {
  const [t, n] = u.useState(jv());
  return ge(() => {
    n((r) => r ?? String(Iv++));
  }, [e]), t ? `radix-${t}` : "";
}
var Mo = "Collapsible", [Fv, El] = Ce(Mo), [Lv, ja] = Fv(Mo), Rl = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [c, d] = Se({
      prop: r,
      defaultProp: o ?? !1,
      onChange: a,
      caller: Mo
    });
    return /* @__PURE__ */ l.jsx(
      Lv,
      {
        scope: n,
        disabled: s,
        contentId: be(),
        open: c,
        onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ l.jsx(
          W.div,
          {
            "data-state": Fa(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Rl.displayName = Mo;
var Ml = "CollapsibleTrigger", Tl = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ja(Ml, n);
    return /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Fa(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: j(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Tl.displayName = Ml;
var Ia = "CollapsibleContent", Pl = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ja(Ia, e.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(ve, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ l.jsx($v, { ...r, ref: t, present: s }) });
  }
);
Pl.displayName = Ia;
var $v = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = ja(Ia, n), [i, c] = u.useState(r), d = u.useRef(null), f = oe(t, d), m = u.useRef(0), p = m.current, g = u.useRef(0), v = g.current, h = a.open || i, b = u.useRef(h), x = u.useRef(void 0);
  return u.useEffect(() => {
    const y = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), ge(() => {
    const y = d.current;
    if (y) {
      x.current = x.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const w = y.getBoundingClientRect();
      m.current = w.height, g.current = w.width, b.current || (y.style.transitionDuration = x.current.transitionDuration, y.style.animationName = x.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ l.jsx(
    W.div,
    {
      "data-state": Fa(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !h,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function Fa(e) {
  return e ? "open" : "closed";
}
var Wv = Rl, Bv = Tl, Vv = Pl, Hv = u.createContext(void 0);
function xt(e) {
  const t = u.useContext(Hv);
  return e || t || "ltr";
}
var Ue = "Accordion", zv = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [La, Yv, Gv] = en(Ue), [To, KD] = Ce(Ue, [
  Gv,
  El
]), $a = El(), kl = I.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ l.jsx(La.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ l.jsx(Xv, { ...s, ref: t }) : /* @__PURE__ */ l.jsx(qv, { ...o, ref: t }) });
  }
);
kl.displayName = Ue;
var [Dl, Kv] = To(Ue), [Al, Uv] = To(
  Ue,
  { collapsible: !1 }
), qv = I.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, c] = Se({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Ue
    });
    return /* @__PURE__ */ l.jsx(
      Dl,
      {
        scope: e.__scopeAccordion,
        value: I.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: I.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ l.jsx(Al, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ l.jsx(_l, { ...a, ref: t }) })
      }
    );
  }
), Xv = I.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Se({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Ue
  }), c = I.useCallback(
    (f) => i((m = []) => [...m, f]),
    [i]
  ), d = I.useCallback(
    (f) => i((m = []) => m.filter((p) => p !== f)),
    [i]
  );
  return /* @__PURE__ */ l.jsx(
    Dl,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: d,
      children: /* @__PURE__ */ l.jsx(Al, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l.jsx(_l, { ...s, ref: t }) })
    }
  );
}), [Zv, Po] = To(Ue), _l = I.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = I.useRef(null), c = oe(i, t), d = Yv(n), m = xt(o) === "ltr", p = j(e.onKeyDown, (g) => {
      if (!zv.includes(g.key)) return;
      const v = g.target, h = d().filter((R) => !R.ref.current?.disabled), b = h.findIndex((R) => R.ref.current === v), x = h.length;
      if (b === -1) return;
      g.preventDefault();
      let y = b;
      const w = 0, S = x - 1, N = () => {
        y = b + 1, y > S && (y = w);
      }, C = () => {
        y = b - 1, y < w && (y = S);
      };
      switch (g.key) {
        case "Home":
          y = w;
          break;
        case "End":
          y = S;
          break;
        case "ArrowRight":
          s === "horizontal" && (m ? N() : C());
          break;
        case "ArrowDown":
          s === "vertical" && N();
          break;
        case "ArrowLeft":
          s === "horizontal" && (m ? C() : N());
          break;
        case "ArrowUp":
          s === "vertical" && C();
          break;
      }
      const E = y % x;
      h[E].ref.current?.focus();
    });
    return /* @__PURE__ */ l.jsx(
      Zv,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ l.jsx(La.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
          W.div,
          {
            ...a,
            "data-orientation": s,
            ref: c,
            onKeyDown: r ? void 0 : p
          }
        ) })
      }
    );
  }
), uo = "AccordionItem", [Qv, Wa] = To(uo), Ol = I.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = Po(uo, n), a = Kv(uo, n), i = $a(n), c = be(), d = r && a.value.includes(r) || !1, f = s.disabled || e.disabled;
    return /* @__PURE__ */ l.jsx(
      Qv,
      {
        scope: n,
        open: d,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ l.jsx(
          Wv,
          {
            "data-orientation": s.orientation,
            "data-state": Wl(d),
            ...i,
            ...o,
            ref: t,
            disabled: f,
            open: d,
            onOpenChange: (m) => {
              m ? a.onItemOpen(r) : a.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
Ol.displayName = uo;
var jl = "AccordionHeader", Il = I.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Po(Ue, n), s = Wa(jl, n);
    return /* @__PURE__ */ l.jsx(
      W.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Wl(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Il.displayName = jl;
var Qs = "AccordionTrigger", Fl = I.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Po(Ue, n), s = Wa(Qs, n), a = Uv(Qs, n), i = $a(n);
    return /* @__PURE__ */ l.jsx(La.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      Bv,
      {
        "aria-disabled": s.open && !a.collapsible || void 0,
        "data-orientation": o.orientation,
        id: s.triggerId,
        ...i,
        ...r,
        ref: t
      }
    ) });
  }
);
Fl.displayName = Qs;
var Ll = "AccordionContent", $l = I.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Po(Ue, n), s = Wa(Ll, n), a = $a(n);
    return /* @__PURE__ */ l.jsx(
      Vv,
      {
        role: "region",
        "aria-labelledby": s.triggerId,
        "data-orientation": o.orientation,
        ...a,
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
$l.displayName = Ll;
function Wl(e) {
  return e ? "open" : "closed";
}
var Jv = kl, eb = Ol, tb = Il, Bl = Fl, Vl = $l;
function Hl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Hl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function zl() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hl(e)) && (r && (r += " "), r += t);
  return r;
}
const Ba = "-", nb = (e) => {
  const t = ob(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Ba);
      return i[0] === "" && i.length !== 1 && i.shift(), Yl(i, t) || rb(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const c = n[a] || [];
      return i && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, Yl = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Yl(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ba);
  return t.validators.find(({
    validator: a
  }) => a(s))?.classGroupId;
}, ac = /^\[(.+)\]$/, rb = (e) => {
  if (ac.test(e)) {
    const t = ac.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ob = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Js(n[o], r, o, t);
  return r;
}, Js = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : ic(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (sb(o)) {
        Js(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Js(a, ic(t, s), n, r);
    });
  });
}, ic = (e, t) => {
  let n = e;
  return t.split(Ba).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, sb = (e) => e.isThemeGetter, ab = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = r.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : o(s, a);
    }
  };
}, ea = "!", ta = ":", ib = ta.length, cb = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, d;
    for (let v = 0; v < o.length; v++) {
      let h = o[v];
      if (a === 0 && i === 0) {
        if (h === ta) {
          s.push(o.slice(c, v)), c = v + ib;
          continue;
        }
        if (h === "/") {
          d = v;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? i++ : h === ")" && i--;
    }
    const f = s.length === 0 ? o : o.substring(c), m = lb(f), p = m !== f, g = d && d > c ? d - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + ta, s = r;
    r = (a) => a.startsWith(o) ? s(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, lb = (e) => e.endsWith(ea) ? e.substring(0, e.length - 1) : e.startsWith(ea) ? e.substring(1) : e, ub = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let s = [];
    return r.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...s.sort(), a), s = []) : s.push(a);
    }), o.push(...s.sort()), o;
  };
}, db = (e) => ({
  cache: ab(e.cacheSize),
  parseClassName: cb(e),
  sortModifiers: ub(e),
  ...nb(e)
}), fb = /\s+/, mb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(fb);
  let c = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const f = i[d], {
      isExternal: m,
      modifiers: p,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: h
    } = n(f);
    if (m) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!h, x = r(b ? v.substring(0, h) : v);
    if (!x) {
      if (!b) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (x = r(v), !x) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const y = s(p).join(":"), w = g ? y + ea : y, S = w + x;
    if (a.includes(S))
      continue;
    a.push(S);
    const N = o(x, b);
    for (let C = 0; C < N.length; ++C) {
      const E = N[C];
      a.push(w + E);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function pb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Gl(t)) && (r && (r += " "), r += n);
  return r;
}
const Gl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Gl(e[r])) && (n && (n += " "), n += t);
  return n;
};
function hb(e, ...t) {
  let n, r, o, s = a;
  function a(c) {
    const d = t.reduce((f, m) => m(f), e());
    return n = db(d), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }
  function i(c) {
    const d = r(c);
    if (d)
      return d;
    const f = mb(c, n);
    return o(c, f), f;
  }
  return function() {
    return s(pb.apply(null, arguments));
  };
}
const Ee = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Kl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ul = /^\((?:(\w[\w-]*):)?(.+)\)$/i, gb = /^\d+\/\d+$/, vb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, xb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, yb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, wb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ln = (e) => gb.test(e), ce = (e) => !!e && !Number.isNaN(Number(e)), St = (e) => !!e && Number.isInteger(Number(e)), Ts = (e) => e.endsWith("%") && ce(e.slice(0, -1)), mt = (e) => vb.test(e), Cb = () => !0, Sb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bb.test(e) && !xb.test(e)
), ql = () => !1, Nb = (e) => yb.test(e), Eb = (e) => wb.test(e), Rb = (e) => !Z(e) && !Q(e), Mb = (e) => Pn(e, Ql, ql), Z = (e) => Kl.test(e), Bt = (e) => Pn(e, Jl, Sb), Ps = (e) => Pn(e, Ab, ce), cc = (e) => Pn(e, Xl, ql), Tb = (e) => Pn(e, Zl, Eb), Kr = (e) => Pn(e, eu, Nb), Q = (e) => Ul.test(e), Un = (e) => kn(e, Jl), Pb = (e) => kn(e, _b), lc = (e) => kn(e, Xl), kb = (e) => kn(e, Ql), Db = (e) => kn(e, Zl), Ur = (e) => kn(e, eu, !0), Pn = (e, t, n) => {
  const r = Kl.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, kn = (e, t, n = !1) => {
  const r = Ul.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Xl = (e) => e === "position" || e === "percentage", Zl = (e) => e === "image" || e === "url", Ql = (e) => e === "length" || e === "size" || e === "bg-size", Jl = (e) => e === "length", Ab = (e) => e === "number", _b = (e) => e === "family-name", eu = (e) => e === "shadow", Ob = () => {
  const e = Ee("color"), t = Ee("font"), n = Ee("text"), r = Ee("font-weight"), o = Ee("tracking"), s = Ee("leading"), a = Ee("breakpoint"), i = Ee("container"), c = Ee("spacing"), d = Ee("radius"), f = Ee("shadow"), m = Ee("inset-shadow"), p = Ee("text-shadow"), g = Ee("drop-shadow"), v = Ee("blur"), h = Ee("perspective"), b = Ee("aspect"), x = Ee("ease"), y = Ee("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], N = () => [...S(), Q, Z], C = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], R = () => [Q, Z, c], T = () => [ln, "full", "auto", ...R()], k = () => [St, "none", "subgrid", Q, Z], F = () => ["auto", {
    span: ["full", St, Q, Z]
  }, St, Q, Z], K = () => [St, "auto", Q, Z], q = () => ["auto", "min", "max", "fr", Q, Z], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...R()], X = () => [ln, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], _ = () => [e, Q, Z], L = () => [...S(), lc, cc, {
    position: [Q, Z]
  }], A = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], G = () => ["auto", "cover", "contain", kb, Mb, {
    size: [Q, Z]
  }], P = () => [Ts, Un, Bt], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    Q,
    Z
  ], z = () => ["", ce, Un, Bt], V = () => ["solid", "dashed", "dotted", "double"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [ce, Ts, lc, cc], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    Q,
    Z
  ], te = () => ["none", ce, Q, Z], ee = () => ["none", ce, Q, Z], ne = () => [ce, Q, Z], Y = () => [ln, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [mt],
      breakpoint: [mt],
      color: [Cb],
      container: [mt],
      "drop-shadow": [mt],
      ease: ["in", "out", "in-out"],
      font: [Rb],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [mt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [mt],
      shadow: [mt],
      spacing: ["px", ce],
      text: [mt],
      "text-shadow": [mt],
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
        aspect: ["auto", "square", ln, Z, Q, b]
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
        columns: [ce, Z, Q, i]
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
        object: N()
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
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        z: [St, "auto", Q, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ln, "full", "auto", i, ...R()]
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
        flex: [ce, ln, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, Q, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, Q, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [St, "first", "last", "none", Q, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": k()
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
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": k()
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
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        gap: R()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": R()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": R()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...D(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": D()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: R()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: R()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: R()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: R()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: R()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": R()
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
        "space-y": R()
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
        size: X()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...X()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...X()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Un, Bt]
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
        font: [r, Q, Ps]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ts, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Pb, Z, t]
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
        tracking: [o, Q, Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ce, "none", Q, Ps]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...R()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q, Z]
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
        list: ["disc", "decimal", "none", Q, Z]
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
        placeholder: _()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: _()
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", Q, Bt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: _()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ce, "auto", Q, Z]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q, Z]
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
        content: ["none", Q, Z]
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
        bg: L()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: A()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: G()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, St, Q, Z],
          radial: ["", Q, Z],
          conic: [St, Q, Z]
        }, Db, Tb]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: _()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: P()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: P()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: _()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: $()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": $()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": $()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": $()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": $()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": $()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": $()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": $()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": $()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": $()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": $()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": $()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": $()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": $()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": $()
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
        border: [...V(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...V(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: _()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": _()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": _()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": _()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": _()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": _()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": _()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": _()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": _()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: _()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...V(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, Q, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, Un, Bt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: _()
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
          Ur,
          Kr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: _()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, Ur, Kr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": _()
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
        ring: _()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ce, Bt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": _()
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
        "inset-ring": _()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Ur, Kr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": _()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ce, Q, Z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
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
        "mask-linear": [ce]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": O()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": O()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": O()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": O()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": O()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": O()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": O()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [Q, Z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": _()
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
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": O()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": _()
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
        mask: L()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: A()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: G()
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
        mask: ["none", Q, Z]
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
          Q,
          Z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: U()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ce, Q, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, Q, Z]
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
          Ur,
          Kr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": _()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ce, Q, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, Q, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, Q, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, Q, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, Q, Z]
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
          Q,
          Z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": U()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ce, Q, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, Q, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, Q, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, Q, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, Q, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, Q, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, Q, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, Q, Z]
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
        "border-spacing": R()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": R()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": R()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Q, Z]
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
        duration: [ce, "initial", Q, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, Q, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, Q, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, Q, Z]
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
        perspective: [h, Q, Z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
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
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
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
        transform: [Q, Z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
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
        translate: Y()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Y()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Y()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Y()
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
        accent: _()
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
        caret: _()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q, Z]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        "will-change": ["auto", "scroll", "contents", "transform", Q, Z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ..._()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ce, Un, Bt, Ps]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ..._()]
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
}, jb = /* @__PURE__ */ hb(Ob);
function M(...e) {
  return jb(zl(e));
}
const UD = Jv, Ib = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  eb,
  {
    ref: n,
    className: M("border-b", e),
    ...t
  }
));
Ib.displayName = "AccordionItem";
const Fb = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(tb, { className: "flex", children: /* @__PURE__ */ l.jsxs(
  Bl,
  {
    ref: r,
    className: M(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Mt, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Fb.displayName = Bl.displayName;
const Lb = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Vl,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ l.jsx("div", { className: M("pb-4 pt-0", e), children: t })
  }
));
Lb.displayName = Vl.displayName;
const uc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, dc = zl, it = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return dc(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((d) => {
    const f = n?.[d], m = s?.[d];
    if (f === null) return null;
    const p = uc(f) || uc(m);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, f) => {
    let [m, p] = f;
    return p === void 0 || (d[m] = p), d;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: m, className: p, ...g } = f;
    return Object.entries(g).every((v) => {
      let [h, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === b;
    }) ? [
      ...d,
      m,
      p
    ] : d;
  }, []);
  return dc(e, a, c, n?.class, n?.className);
}, $b = it(
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
), Wb = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    role: "alert",
    className: M($b({ variant: t }), e),
    ...n
  }
));
Wb.displayName = "Alert";
const Bb = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "h5",
  {
    ref: n,
    className: M("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Bb.displayName = "AlertTitle";
const Vb = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Vb.displayName = "AlertDescription";
function me(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function Hb(e, t = globalThis?.document) {
  const n = me(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var zb = "DismissableLayer", na = "dismissableLayer.update", Yb = "dismissableLayer.pointerDownOutside", Gb = "dismissableLayer.focusOutside", fc, tu = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), At = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, d = u.useContext(tu), [f, m] = u.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, g] = u.useState({}), v = oe(t, (E) => m(E)), h = Array.from(d.layers), [b] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(b), y = f ? h.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= x, N = Ub((E) => {
      const R = E.target, T = [...d.branches].some((k) => k.contains(R));
      !S || T || (o?.(E), a?.(E), E.defaultPrevented || i?.());
    }, p), C = qb((E) => {
      const R = E.target;
      [...d.branches].some((k) => k.contains(R)) || (s?.(E), a?.(E), E.defaultPrevented || i?.());
    }, p);
    return Hb((E) => {
      y === d.layers.size - 1 && (r?.(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (fc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), mc(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = fc);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), mc());
    }, [f, d]), u.useEffect(() => {
      const E = () => g({});
      return document.addEventListener(na, E), () => document.removeEventListener(na, E);
    }, []), /* @__PURE__ */ l.jsx(
      W.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: j(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: j(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: j(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
At.displayName = zb;
var Kb = "DismissableLayerBranch", nu = u.forwardRef((e, t) => {
  const n = u.useContext(tu), r = u.useRef(null), o = oe(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(W.div, { ...e, ref: o });
});
nu.displayName = Kb;
function Ub(e, t = globalThis?.document) {
  const n = me(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          ru(
            Yb,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function qb(e, t = globalThis?.document) {
  const n = me(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && ru(Gb, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function mc() {
  const e = new CustomEvent(na);
  document.dispatchEvent(e);
}
function ru(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? rr(o, s) : o.dispatchEvent(s);
}
var Xb = At, Zb = nu, ks = "focusScope.autoFocusOnMount", Ds = "focusScope.autoFocusOnUnmount", pc = { bubbles: !1, cancelable: !0 }, Qb = "FocusScope", gr = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = u.useState(null), d = me(o), f = me(s), m = u.useRef(null), p = oe(t, (h) => c(h)), g = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let h = function(w) {
        if (g.paused || !i) return;
        const S = w.target;
        i.contains(S) ? m.current = S : Et(m.current, { select: !0 });
      }, b = function(w) {
        if (g.paused || !i) return;
        const S = w.relatedTarget;
        S !== null && (i.contains(S) || Et(m.current, { select: !0 }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const N of w)
            N.removedNodes.length > 0 && Et(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", b);
      const y = new MutationObserver(x);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [r, i, g.paused]), u.useEffect(() => {
    if (i) {
      gc.add(g);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const x = new CustomEvent(ks, pc);
        i.addEventListener(ks, d), i.dispatchEvent(x), x.defaultPrevented || (Jb(ox(ou(i)), { select: !0 }), document.activeElement === h && Et(i));
      }
      return () => {
        i.removeEventListener(ks, d), setTimeout(() => {
          const x = new CustomEvent(Ds, pc);
          i.addEventListener(Ds, f), i.dispatchEvent(x), x.defaultPrevented || Et(h ?? document.body, { select: !0 }), i.removeEventListener(Ds, f), gc.remove(g);
        }, 0);
      };
    }
  }, [i, d, f, g]);
  const v = u.useCallback(
    (h) => {
      if (!n && !r || g.paused) return;
      const b = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, x = document.activeElement;
      if (b && x) {
        const y = h.currentTarget, [w, S] = ex(y);
        w && S ? !h.shiftKey && x === S ? (h.preventDefault(), n && Et(w, { select: !0 })) : h.shiftKey && x === w && (h.preventDefault(), n && Et(S, { select: !0 })) : x === y && h.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ l.jsx(W.div, { tabIndex: -1, ...a, ref: p, onKeyDown: v });
});
gr.displayName = Qb;
function Jb(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Et(r, { select: t }), document.activeElement !== n) return;
}
function ex(e) {
  const t = ou(e), n = hc(t, e), r = hc(t.reverse(), e);
  return [n, r];
}
function ou(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function hc(e, t) {
  for (const n of e)
    if (!tx(n, { upTo: t })) return n;
}
function tx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function nx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Et(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && nx(e) && t && e.select();
  }
}
var gc = rx();
function rx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = vc(e, t), e.unshift(t);
    },
    remove(t) {
      e = vc(e, t), e[0]?.resume();
    }
  };
}
function vc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ox(e) {
  return e.filter((t) => t.tagName !== "A");
}
var sx = "Portal", tn = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  ge(() => s(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? bl.createPortal(/* @__PURE__ */ l.jsx(W.div, { ...r, ref: t }), a) : null;
});
tn.displayName = sx;
var As = 0;
function ko() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? bc()), document.body.insertAdjacentElement("beforeend", e[1] ?? bc()), As++, () => {
      As === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), As--;
    };
  }, []);
}
function bc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Qe = function() {
  return Qe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Qe.apply(this, arguments);
};
function su(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ax(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ro = "right-scroll-bar-position", oo = "width-before-scroll-bar", ix = "with-scroll-bars-hidden", cx = "--removed-body-scroll-bar-size";
function _s(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function lx(e, t) {
  var n = Le(function() {
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
var ux = typeof window < "u" ? u.useLayoutEffect : u.useEffect, xc = /* @__PURE__ */ new WeakMap();
function dx(e, t) {
  var n = lx(null, function(r) {
    return e.forEach(function(o) {
      return _s(o, r);
    });
  });
  return ux(function() {
    var r = xc.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || _s(i, null);
      }), s.forEach(function(i) {
        o.has(i) || _s(i, a);
      });
    }
    xc.set(n, e);
  }, [e]), n;
}
function fx(e) {
  return e;
}
function mx(e, t) {
  t === void 0 && (t = fx);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, r);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var c = function() {
        var f = a;
        a = [], f.forEach(s);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(f) {
          a.push(f), d();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return o;
}
function px(e) {
  e === void 0 && (e = {});
  var t = mx(null);
  return t.options = Qe({ async: !0, ssr: !1 }, e), t;
}
var au = function(e) {
  var t = e.sideCar, n = su(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Qe({}, n));
};
au.isSideCarExport = !0;
function hx(e, t) {
  return e.useMedium(t), au;
}
var iu = px(), Os = function() {
}, Do = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Os,
    onWheelCapture: Os,
    onTouchMoveCapture: Os
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, g = e.noRelative, v = e.noIsolation, h = e.inert, b = e.allowPinchZoom, x = e.as, y = x === void 0 ? "div" : x, w = e.gapMode, S = su(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = p, C = dx([n, t]), E = Qe(Qe({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(N, { sideCar: iu, removeScrollBar: d, shards: m, noRelative: g, noIsolation: v, inert: h, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: w }),
    a ? u.cloneElement(u.Children.only(i), Qe(Qe({}, E), { ref: C })) : u.createElement(y, Qe({}, E, { className: c, ref: C }), i)
  );
});
Do.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Do.classNames = {
  fullWidth: oo,
  zeroRight: ro
};
var gx = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function vx() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gx();
  return t && e.setAttribute("nonce", t), e;
}
function bx(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function xx(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yx = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = vx()) && (bx(t, n), xx(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, wx = function() {
  var e = yx();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, cu = function() {
  var e = wx(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Cx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, js = function(e) {
  return parseInt(e || "", 10) || 0;
}, Sx = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [js(n), js(r), js(o)];
}, Nx = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Cx;
  var t = Sx(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ex = cu(), bn = "data-scroll-locked", Rx = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ix, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(bn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ro, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(oo, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ro, " .").concat(ro, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(oo, " .").concat(oo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(bn, `] {
    `).concat(cx, ": ").concat(i, `px;
  }
`);
}, yc = function() {
  var e = parseInt(document.body.getAttribute(bn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Mx = function() {
  u.useEffect(function() {
    return document.body.setAttribute(bn, (yc() + 1).toString()), function() {
      var e = yc() - 1;
      e <= 0 ? document.body.removeAttribute(bn) : document.body.setAttribute(bn, e.toString());
    };
  }, []);
}, Tx = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Mx();
  var s = u.useMemo(function() {
    return Nx(o);
  }, [o]);
  return u.createElement(Ex, { styles: Rx(s, !t, o, n ? "" : "!important") });
}, ra = !1;
if (typeof window < "u")
  try {
    var qr = Object.defineProperty({}, "passive", {
      get: function() {
        return ra = !0, !0;
      }
    });
    window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    ra = !1;
  }
var un = ra ? { passive: !1 } : !1, Px = function(e) {
  return e.tagName === "TEXTAREA";
}, lu = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Px(e) && n[t] === "visible")
  );
}, kx = function(e) {
  return lu(e, "overflowY");
}, Dx = function(e) {
  return lu(e, "overflowX");
}, wc = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = uu(e, r);
    if (o) {
      var s = du(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ax = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, _x = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, uu = function(e, t) {
  return e === "v" ? kx(t) : Dx(t);
}, du = function(e, t) {
  return e === "v" ? Ax(t) : _x(t);
}, Ox = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, jx = function(e, t, n, r, o) {
  var s = Ox(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), d = !1, f = a > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var g = du(e, i), v = g[0], h = g[1], b = g[2], x = h - b - s * v;
    (v || x) && uu(e, i) && (m += x, p += v);
    var y = i.parentNode;
    i = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, Xr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Cc = function(e) {
  return [e.deltaX, e.deltaY];
}, Sc = function(e) {
  return e && "current" in e ? e.current : e;
}, Ix = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Fx = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Lx = 0, dn = [];
function $x(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Lx++)[0], s = u.useState(cu)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = ax([e.lockRef.current], (e.shards || []).map(Sc), !0).filter(Boolean);
      return h.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(h, b) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var x = Xr(h), y = n.current, w = "deltaX" in h ? h.deltaX : y[0] - x[0], S = "deltaY" in h ? h.deltaY : y[1] - x[1], N, C = h.target, E = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && E === "h" && C.type === "range")
      return !1;
    var R = wc(E, C);
    if (!R)
      return !0;
    if (R ? N = E : (N = E === "v" ? "h" : "v", R = wc(E, C)), !R)
      return !1;
    if (!r.current && "changedTouches" in h && (w || S) && (r.current = N), !N)
      return !0;
    var T = r.current || N;
    return jx(T, b, h, T === "h" ? w : S);
  }, []), c = u.useCallback(function(h) {
    var b = h;
    if (!(!dn.length || dn[dn.length - 1] !== s)) {
      var x = "deltaY" in b ? Cc(b) : Xr(b), y = t.current.filter(function(N) {
        return N.name === b.type && (N.target === b.target || b.target === N.shadowParent) && Ix(N.delta, x);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var w = (a.current.shards || []).map(Sc).filter(Boolean).filter(function(N) {
          return N.contains(b.target);
        }), S = w.length > 0 ? i(b, w[0]) : !a.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, b, x, y) {
    var w = { name: h, delta: b, target: x, should: y, shadowParent: Wx(x) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    n.current = Xr(h), r.current = void 0;
  }, []), m = u.useCallback(function(h) {
    d(h.type, Cc(h), h.target, i(h, e.lockRef.current));
  }, []), p = u.useCallback(function(h) {
    d(h.type, Xr(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return dn.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, un), document.addEventListener("touchmove", c, un), document.addEventListener("touchstart", f, un), function() {
      dn = dn.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", c, un), document.removeEventListener("touchmove", c, un), document.removeEventListener("touchstart", f, un);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(s, { styles: Fx(o) }) : null,
    g ? u.createElement(Tx, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Wx(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Bx = hx(iu, $x);
var vr = u.forwardRef(function(e, t) {
  return u.createElement(Do, Qe({}, e, { ref: t, sideCar: Bx }));
});
vr.classNames = Do.classNames;
var Vx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fn = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Qr = {}, Is = 0, fu = function(e) {
  return e && (e.host || fu(e.parentNode));
}, Hx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, zx = function(e, t, n, r) {
  var o = Hx(t, Array.isArray(e) ? e : [e]);
  Qr[n] || (Qr[n] = /* @__PURE__ */ new WeakMap());
  var s = Qr[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(m) {
    !m || i.has(m) || (i.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var g = p.getAttribute(r), v = g !== null && g !== "false", h = (fn.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          fn.set(p, h), s.set(p, b), a.push(p), h === 1 && v && Zr.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return f(t), i.clear(), Is++, function() {
    a.forEach(function(m) {
      var p = fn.get(m) - 1, g = s.get(m) - 1;
      fn.set(m, p), s.set(m, g), p || (Zr.has(m) || m.removeAttribute(r), Zr.delete(m)), g || m.removeAttribute(n);
    }), Is--, Is || (fn = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Qr = {});
  };
}, Ao = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Vx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), zx(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, _o = "Dialog", [mu, pu] = Ce(_o), [Yx, qe] = mu(_o), hu = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = u.useRef(null), c = u.useRef(null), [d, f] = Se({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: _o
  });
  return /* @__PURE__ */ l.jsx(
    Yx,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: be(),
      titleId: be(),
      descriptionId: be(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: a,
      children: n
    }
  );
};
hu.displayName = _o;
var gu = "DialogTrigger", vu = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qe(gu, n), s = oe(t, o.triggerRef);
    return /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": za(o.open),
        ...r,
        ref: s,
        onClick: j(e.onClick, o.onOpenToggle)
      }
    );
  }
);
vu.displayName = gu;
var Va = "DialogPortal", [Gx, bu] = mu(Va, {
  forceMount: void 0
}), xu = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = qe(Va, t);
  return /* @__PURE__ */ l.jsx(Gx, { scope: t, forceMount: n, children: u.Children.map(r, (a) => /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(tn, { asChild: !0, container: o, children: a }) })) });
};
xu.displayName = Va;
var fo = "DialogOverlay", yu = u.forwardRef(
  (e, t) => {
    const n = bu(fo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = qe(fo, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: /* @__PURE__ */ l.jsx(Ux, { ...o, ref: t }) }) : null;
  }
);
yu.displayName = fo;
var Kx = /* @__PURE__ */ Tt("DialogOverlay.RemoveScroll"), Ux = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qe(fo, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(vr, { as: Kx, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l.jsx(
        W.div,
        {
          "data-state": za(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Kt = "DialogContent", wu = u.forwardRef(
  (e, t) => {
    const n = bu(Kt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = qe(Kt, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: s.modal ? /* @__PURE__ */ l.jsx(qx, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(Xx, { ...o, ref: t }) });
  }
);
wu.displayName = Kt;
var qx = u.forwardRef(
  (e, t) => {
    const n = qe(Kt, e.__scopeDialog), r = u.useRef(null), o = oe(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Ao(s);
    }, []), /* @__PURE__ */ l.jsx(
      Cu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: j(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: j(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Xx = u.forwardRef(
  (e, t) => {
    const n = qe(Kt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Cu,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Cu = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = qe(Kt, n), c = u.useRef(null), d = oe(t, c);
    return ko(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        gr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ l.jsx(
            At,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": za(i.open),
              ...a,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Qx, { titleId: i.titleId }),
        /* @__PURE__ */ l.jsx(ey, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ha = "DialogTitle", Su = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qe(Ha, n);
    return /* @__PURE__ */ l.jsx(W.h2, { id: o.titleId, ...r, ref: t });
  }
);
Su.displayName = Ha;
var Nu = "DialogDescription", Eu = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qe(Nu, n);
    return /* @__PURE__ */ l.jsx(W.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Eu.displayName = Nu;
var Ru = "DialogClose", Mu = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = qe(Ru, n);
    return /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: j(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Mu.displayName = Ru;
function za(e) {
  return e ? "open" : "closed";
}
var Tu = "DialogTitleWarning", [Zx, Pu] = Cv(Tu, {
  contentName: Kt,
  titleName: Ha,
  docsSlug: "dialog"
}), Qx = ({ titleId: e }) => {
  const t = Pu(Tu), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Jx = "DialogDescriptionWarning", ey = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Pu(Jx).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Oo = hu, Ya = vu, jo = xu, Dn = yu, An = wu, br = Su, xr = Eu, _n = Mu, ku = "AlertDialog", [ty, qD] = Ce(ku, [
  pu
]), yt = pu(), Du = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = yt(t);
  return /* @__PURE__ */ l.jsx(Oo, { ...r, ...n, modal: !0 });
};
Du.displayName = ku;
var ny = "AlertDialogTrigger", Au = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(Ya, { ...o, ...r, ref: t });
  }
);
Au.displayName = ny;
var ry = "AlertDialogPortal", _u = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = yt(t);
  return /* @__PURE__ */ l.jsx(jo, { ...r, ...n });
};
_u.displayName = ry;
var oy = "AlertDialogOverlay", Ou = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(Dn, { ...o, ...r, ref: t });
  }
);
Ou.displayName = oy;
var xn = "AlertDialogContent", [sy, ay] = ty(xn), iy = /* @__PURE__ */ Nl("AlertDialogContent"), ju = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, s = yt(n), a = u.useRef(null), i = oe(t, a), c = u.useRef(null);
    return /* @__PURE__ */ l.jsx(
      Zx,
      {
        contentName: xn,
        titleName: Iu,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ l.jsx(sy, { scope: n, cancelRef: c, children: /* @__PURE__ */ l.jsxs(
          An,
          {
            role: "alertdialog",
            ...s,
            ...o,
            ref: i,
            onOpenAutoFocus: j(o.onOpenAutoFocus, (d) => {
              d.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ l.jsx(iy, { children: r }),
              /* @__PURE__ */ l.jsx(ly, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
ju.displayName = xn;
var Iu = "AlertDialogTitle", Fu = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(br, { ...o, ...r, ref: t });
  }
);
Fu.displayName = Iu;
var Lu = "AlertDialogDescription", $u = u.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
  return /* @__PURE__ */ l.jsx(xr, { ...o, ...r, ref: t });
});
$u.displayName = Lu;
var cy = "AlertDialogAction", Wu = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(_n, { ...o, ...r, ref: t });
  }
);
Wu.displayName = cy;
var Bu = "AlertDialogCancel", Vu = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = ay(Bu, n), s = yt(n), a = oe(t, o);
    return /* @__PURE__ */ l.jsx(_n, { ...s, ...r, ref: a });
  }
);
Vu.displayName = Bu;
var ly = ({ contentRef: e }) => {
  const t = `\`${xn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${xn}\` by passing a \`${Lu}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${xn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, uy = Du, dy = Au, fy = _u, Hu = Ou, zu = ju, Yu = Wu, Gu = Vu, Ku = Fu, Uu = $u;
const XD = uy, ZD = dy, my = fy, qu = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Hu,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
qu.displayName = Hu.displayName;
const py = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(my, { children: [
  /* @__PURE__ */ l.jsx(qu, {}),
  /* @__PURE__ */ l.jsx(
    zu,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
py.displayName = zu.displayName;
const hy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
hy.displayName = "AlertDialogHeader";
const gy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
gy.displayName = "AlertDialogFooter";
const vy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ku,
  {
    ref: n,
    className: M("text-lg font-semibold", e),
    ...t
  }
));
vy.displayName = Ku.displayName;
const by = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Uu,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
by.displayName = Uu.displayName;
const xy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Yu,
  {
    ref: n,
    className: M(Ut(), e),
    ...t
  }
));
xy.displayName = Yu.displayName;
const yy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Gu,
  {
    ref: n,
    className: M(
      Ut({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
yy.displayName = Gu.displayName;
function wy({
  options: e,
  isLoading: t,
  renderOption: n,
  getOptionValue: r,
  getDisplayValue: o,
  label: s,
  placeholder: a = "Selecione...",
  value: i,
  onChange: c,
  onSearchChange: d,
  disabled: f = !1,
  triggerClassName: m,
  noResultsMessage: p,
  clearable: g = !0,
  error: v
}) {
  const [h, b] = Le(!1), [x, y] = Le(i), [w, S] = Le(null), [N, C] = Le("");
  gt(() => {
    y(i);
  }, [i]), gt(() => {
    if (i && e.length > 0) {
      const R = e.find((T) => r(T) === i);
      R && S(R);
    }
  }, [i, e, r]);
  const E = De(
    (R) => {
      const T = g && R === x ? "" : R;
      i && y(T), S(
        e.find((k) => r(k) === T) || null
      ), c(T), b(!1);
    },
    [x, c, g, e, r, i]
  );
  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-1", children: [
    !!s && /* @__PURE__ */ l.jsx(os, { className: M(v && "text-destructive"), children: s }),
    /* @__PURE__ */ l.jsxs(Ar, { open: h, onOpenChange: b, children: [
      /* @__PURE__ */ l.jsx(_r, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
        wt,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": h,
          className: M(
            "justify-between w-full hover:bg-input bg-input font-normal",
            f && "opacity-50 cursor-not-allowed",
            !i && "text-muted-foreground",
            m
          ),
          disabled: f,
          children: [
            /* @__PURE__ */ l.jsx("div", { className: "truncate", children: i && w ? o(w) : a }),
            /* @__PURE__ */ l.jsx(xl, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx(Fn, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ l.jsxs(Rr, { shouldFilter: !1, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative border-b", children: [
          /* @__PURE__ */ l.jsx(
            Ho,
            {
              placeholder: "Buscar",
              value: N,
              onValueChange: (R) => {
                C(R), d(R);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ l.jsx(nr, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ l.jsxs(zo, { children: [
          t && e.length === 0 && /* @__PURE__ */ l.jsx(Cy, {}),
          !t && e.length === 0 && /* @__PURE__ */ l.jsx(Yo, { children: /* @__PURE__ */ l.jsx("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: p ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ l.jsx(Mr, { children: e.map((R) => /* @__PURE__ */ l.jsxs(
            Gt,
            {
              value: r(R),
              onSelect: E,
              children: [
                /* @__PURE__ */ l.jsx(
                  hr,
                  {
                    className: M(
                      "mr-2 size-4 shrink-0",
                      x === r(R) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "w-0 flex-1", children: n(R) })
              ]
            },
            r(R)
          )) })
        ] })
      ] }) })
    ] }),
    !!v && /* @__PURE__ */ l.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: v })
  ] });
}
function Cy() {
  return /* @__PURE__ */ l.jsx(Mr, { children: [1, 2, 3].map((e) => /* @__PURE__ */ l.jsx(Gt, { disabled: !0, className: "p-0", children: /* @__PURE__ */ l.jsx(bk, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const QD = ({
  name: e,
  label: t,
  disabled: n,
  isLoading: r,
  options: o,
  placeholder: s = "Selecione",
  onSearchChange: a,
  getDisplayValue: i,
  getOptionValue: c,
  renderOption: d
}) => {
  const { control: f } = Tn();
  return /* @__PURE__ */ l.jsx(
    Lr,
    {
      name: e,
      control: f,
      render: ({ field: m }) => /* @__PURE__ */ l.jsxs(Ln, { children: [
        !!t && /* @__PURE__ */ l.jsx($n, { children: t }),
        /* @__PURE__ */ l.jsx(
          wy,
          {
            options: o,
            value: m.value,
            placeholder: s,
            onSearchChange: a,
            getDisplayValue: i,
            getOptionValue: c,
            renderOption: d,
            onChange: (p) => m.onChange(p),
            isLoading: r,
            disabled: n
          }
        ),
        /* @__PURE__ */ l.jsx(Wn, {})
      ] })
    }
  );
};
var Jr = { exports: {} }, Fs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc;
function Sy() {
  if (Nc) return Fs;
  Nc = 1;
  var e = I;
  function t(m, p) {
    return m === p && (m !== 0 || 1 / m === 1 / p) || m !== m && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, s = e.useLayoutEffect, a = e.useDebugValue;
  function i(m, p) {
    var g = p(), v = r({ inst: { value: g, getSnapshot: p } }), h = v[0].inst, b = v[1];
    return s(
      function() {
        h.value = g, h.getSnapshot = p, c(h) && b({ inst: h });
      },
      [m, g, p]
    ), o(
      function() {
        return c(h) && b({ inst: h }), m(function() {
          c(h) && b({ inst: h });
        });
      },
      [m]
    ), a(g), g;
  }
  function c(m) {
    var p = m.getSnapshot;
    m = m.value;
    try {
      var g = p();
      return !n(m, g);
    } catch {
      return !0;
    }
  }
  function d(m, p) {
    return p();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : i;
  return Fs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Fs;
}
var Ls = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec;
function Ny() {
  return Ec || (Ec = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g, v) {
      return g === v && (g !== 0 || 1 / g === 1 / v) || g !== g && v !== v;
    }
    function t(g, v) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = v();
      if (!m) {
        var b = v();
        s(h, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), m = !0);
      }
      b = a({
        inst: { value: h, getSnapshot: v }
      });
      var x = b[0].inst, y = b[1];
      return c(
        function() {
          x.value = h, x.getSnapshot = v, n(x) && y({ inst: x });
        },
        [g, h, v]
      ), i(
        function() {
          return n(x) && y({ inst: x }), g(function() {
            n(x) && y({ inst: x });
          });
        },
        [g]
      ), d(h), h;
    }
    function n(g) {
      var v = g.getSnapshot;
      g = g.value;
      try {
        var h = v();
        return !s(g, h);
      } catch {
        return !0;
      }
    }
    function r(g, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, s = typeof Object.is == "function" ? Object.is : e, a = o.useState, i = o.useEffect, c = o.useLayoutEffect, d = o.useDebugValue, f = !1, m = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Ls.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ls;
}
var Rc;
function Ey() {
  return Rc || (Rc = 1, process.env.NODE_ENV === "production" ? Jr.exports = Sy() : Jr.exports = Ny()), Jr.exports;
}
var Ry = Ey();
function My() {
  return Ry.useSyncExternalStore(
    Ty,
    () => !0,
    () => !1
  );
}
function Ty() {
  return () => {
  };
}
var Ga = "Avatar", [Py, JD] = Ce(Ga), [ky, Xu] = Py(Ga), Zu = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, s] = u.useState("idle");
    return /* @__PURE__ */ l.jsx(
      ky,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ l.jsx(W.span, { ...r, ref: t })
      }
    );
  }
);
Zu.displayName = Ga;
var Qu = "AvatarImage", Ju = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...s } = e, a = Xu(Qu, n), i = Dy(r, s), c = me((d) => {
      o(d), a.onImageLoadingStatusChange(d);
    });
    return ge(() => {
      i !== "idle" && c(i);
    }, [i, c]), i === "loaded" ? /* @__PURE__ */ l.jsx(W.img, { ...s, ref: t, src: r }) : null;
  }
);
Ju.displayName = Qu;
var ed = "AvatarFallback", td = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, s = Xu(ed, n), [a, i] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), a && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l.jsx(W.span, { ...o, ref: t }) : null;
  }
);
td.displayName = ed;
function Mc(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Dy(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = My(), o = u.useRef(null), s = r ? (o.current || (o.current = new window.Image()), o.current) : null, [a, i] = u.useState(
    () => Mc(s, e)
  );
  return ge(() => {
    i(Mc(s, e));
  }, [s, e]), ge(() => {
    const c = (m) => () => {
      i(m);
    };
    if (!s) return;
    const d = c("loaded"), f = c("error");
    return s.addEventListener("load", d), s.addEventListener("error", f), t && (s.referrerPolicy = t), typeof n == "string" && (s.crossOrigin = n), () => {
      s.removeEventListener("load", d), s.removeEventListener("error", f);
    };
  }, [s, n, t]), a;
}
var nd = Zu, rd = Ju, od = td;
const Ay = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  nd,
  {
    ref: n,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Ay.displayName = nd.displayName;
const _y = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  rd,
  {
    ref: n,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
_y.displayName = rd.displayName;
const Oy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  od,
  {
    ref: n,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Oy.displayName = od.displayName;
const jy = it(
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
function Tc({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { className: M(jy({ variant: t }), e), ...n });
}
const Iy = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Iy.displayName = "Breadcrumb";
const Fy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ol",
  {
    ref: n,
    className: M(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
Fy.displayName = "BreadcrumbList";
const Ly = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "li",
  {
    ref: n,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Ly.displayName = "BreadcrumbItem";
const $y = u.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? Cl : "a";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: r,
      className: M("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
$y.displayName = "BreadcrumbLink";
const Wy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: M("font-normal text-foreground", e),
    ...t
  }
));
Wy.displayName = "BreadcrumbPage";
const By = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ l.jsx(Aa, {})
  }
);
By.displayName = "BreadcrumbSeparator";
const Vy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(yl, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Vy.displayName = "BreadcrumbElipssis";
const Hy = {
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
}, Ut = it(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: Hy,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), wt = u.forwardRef(({ className: e, variant: t, size: n, disabled: r, href: o, ...s }, a) => /* @__PURE__ */ l.jsx(l.Fragment, { children: o ? /* @__PURE__ */ l.jsx(
  bv,
  {
    className: M(Ut({ variant: t, size: n, className: e })),
    ref: a,
    to: o,
    ...s
  }
) : /* @__PURE__ */ l.jsx(
  "button",
  {
    className: M(Ut({ variant: t, size: n, className: e })),
    ref: a,
    disabled: r,
    ...s
  }
) }));
wt.displayName = "Button";
function zy(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Yy = {}, Xn = {};
function Ht(e, t) {
  try {
    const r = (Yy[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Xn ? Xn[r] : Pc(r, r.split(":"));
  } catch {
    if (e in Xn) return Xn[e];
    const n = e?.match(Gy);
    return n ? Pc(e, n.slice(1)) : NaN;
  }
}
const Gy = /([+-]\d\d):?(\d\d)?/;
function Pc(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Xn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class tt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Ht(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), sd(this), oa(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new tt(...n, t) : new tt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new tt(+this, t);
  }
  getTimezoneOffset() {
    const t = -Ht(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), oa(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new tt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const kc = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!kc.test(e)) return;
  const t = e.replace(kc, "$1UTC");
  tt.prototype[t] && (e.startsWith("get") ? tt.prototype[e] = function() {
    return this.internal[t]();
  } : (tt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Ky(this), +this;
  }, tt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), oa(this), +this;
  }));
});
function oa(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Ht(e.timeZone, e) * 60));
}
function Ky(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), sd(e);
}
function sd(e) {
  const t = Ht(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - s, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, m = Math.round(-(Ht(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const p = Ht(e.timeZone, e), g = p > 0 ? Math.floor(p) : Math.ceil(p), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - g, b = g !== n, x = h - c;
  if (b && x) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + x);
    const y = Ht(e.timeZone, e), w = y > 0 ? Math.floor(y) : Math.ceil(y), S = g - w;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class Te extends tt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Te(...n, t) : new Te(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${zy(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new Te(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Te(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ad = 6048e5, Uy = 864e5, Dc = Symbol.for("constructDateFrom");
function Ne(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Dc in e ? e[Dc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function he(e, t) {
  return Ne(t || e, e);
}
function Ka(e, t, n) {
  const r = he(e, n?.in);
  return isNaN(t) ? Ne(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ua(e, t, n) {
  const r = he(e, n?.in);
  if (isNaN(t)) return Ne(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = Ne(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
function qy(e, t, n) {
  const {
    years: r = 0,
    months: o = 0,
    weeks: s = 0,
    days: a = 0,
    hours: i = 0,
    minutes: c = 0,
    seconds: d = 0
  } = t, f = he(e, n?.in), m = o || r ? Ua(f, o + r * 12) : f, p = a || s ? Ka(m, a + s * 7) : m, g = c + i * 60, h = (d + g * 60) * 1e3;
  return Ne(e, +p + h);
}
let Xy = {};
function yr() {
  return Xy;
}
function Cn(e, t) {
  const n = yr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = he(e, t?.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function or(e, t) {
  return Cn(e, { ...t, weekStartsOn: 1 });
}
function id(e, t) {
  const n = he(e, t?.in), r = n.getFullYear(), o = Ne(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = or(o), a = Ne(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = or(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Ac(e) {
  const t = he(e), n = new Date(
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
function On(e, ...t) {
  const n = Ne.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function sr(e, t) {
  const n = he(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function qa(e, t, n) {
  const [r, o] = On(
    n?.in,
    e,
    t
  ), s = sr(r), a = sr(o), i = +s - Ac(s), c = +a - Ac(a);
  return Math.round((i - c) / Uy);
}
function Zy(e, t) {
  const n = id(e, t), r = Ne(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), or(r);
}
function Qy(e, t, n) {
  return Ka(e, t * 7, n);
}
function Jy(e, t, n) {
  return Ua(e, t * 12, n);
}
function ew(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ne.bind(null, o));
    const s = he(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), Ne(r, n || NaN);
}
function tw(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ne.bind(null, o));
    const s = he(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), Ne(r, n || NaN);
}
function nw(e, t, n) {
  const [r, o] = On(
    n?.in,
    e,
    t
  );
  return +sr(r) == +sr(o);
}
function cd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function rw(e) {
  return !(!cd(e) && typeof e != "number" || isNaN(+he(e)));
}
function ld(e, t, n) {
  const [r, o] = On(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function ow(e, t) {
  const n = he(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function ud(e, t) {
  const [n, r] = On(e, t.start, t.end);
  return { start: n, end: r };
}
function sw(e, t) {
  const { start: n, end: r } = ud(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(Ne(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function aw(e, t) {
  const n = he(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function iw(e, t) {
  const n = he(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function dd(e, t) {
  const n = he(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function cw(e, t) {
  const { start: n, end: r } = ud(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(Ne(n, a)), a.setFullYear(a.getFullYear() + i);
  return o ? c.reverse() : c;
}
function fd(e, t) {
  const n = yr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = he(e, t?.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function lw(e, t) {
  return fd(e, { ...t, weekStartsOn: 1 });
}
const uw = {
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
}, dw = (e, t, n) => {
  let r;
  const o = uw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function yn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const fw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, mw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, pw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hw = {
  date: yn({
    formats: fw,
    defaultWidth: "full"
  }),
  time: yn({
    formats: mw,
    defaultWidth: "full"
  }),
  dateTime: yn({
    formats: pw,
    defaultWidth: "full"
  })
}, gw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, vw = (e, t, n, r) => gw[e];
function Je(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, i = n?.width ? String(n.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, i = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const bw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, xw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, yw = {
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
}, ww = {
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
}, Cw = {
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
}, Sw = {
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
}, Nw = (e, t) => {
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
}, Ew = {
  ordinalNumber: Nw,
  era: Je({
    values: bw,
    defaultWidth: "wide"
  }),
  quarter: Je({
    values: xw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Je({
    values: yw,
    defaultWidth: "wide"
  }),
  day: Je({
    values: ww,
    defaultWidth: "wide"
  }),
  dayPeriod: Je({
    values: Cw,
    defaultWidth: "wide",
    formattingValues: Sw,
    defaultFormattingWidth: "wide"
  })
};
function et(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Mw(i, (m) => m.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Rw(i, (m) => m.test(a))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(a.length);
    return { value: d, rest: f };
  };
}
function Rw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Mw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function md(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const i = t.slice(o.length);
    return { value: a, rest: i };
  };
}
const Tw = /^(\d+)(th|st|nd|rd)?/i, Pw = /\d+/i, kw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Dw = {
  any: [/^b/i, /^(a|c)/i]
}, Aw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _w = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ow = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, jw = {
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
}, Iw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Fw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Lw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, $w = {
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
}, Ww = {
  ordinalNumber: md({
    matchPattern: Tw,
    parsePattern: Pw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: et({
    matchPatterns: kw,
    defaultMatchWidth: "wide",
    parsePatterns: Dw,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: Aw,
    defaultMatchWidth: "wide",
    parsePatterns: _w,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: et({
    matchPatterns: Ow,
    defaultMatchWidth: "wide",
    parsePatterns: jw,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: Iw,
    defaultMatchWidth: "wide",
    parsePatterns: Fw,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: Lw,
    defaultMatchWidth: "any",
    parsePatterns: $w,
    defaultParseWidth: "any"
  })
}, hn = {
  code: "en-US",
  formatDistance: dw,
  formatLong: hw,
  formatRelative: vw,
  localize: Ew,
  match: Ww,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Bw(e, t) {
  const n = he(e, t?.in);
  return qa(n, dd(n)) + 1;
}
function Xa(e, t) {
  const n = he(e, t?.in), r = +or(n) - +Zy(n);
  return Math.round(r / ad) + 1;
}
function pd(e, t) {
  const n = he(e, t?.in), r = n.getFullYear(), o = yr(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, a = Ne(t?.in || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = Cn(a, t), c = Ne(t?.in || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const d = Cn(c, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function Vw(e, t) {
  const n = yr(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = pd(e, t), s = Ne(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), Cn(s, t);
}
function Za(e, t) {
  const n = he(e, t?.in), r = +Cn(n, t) - +Vw(n, t);
  return Math.round(r / ad) + 1;
}
function pe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Nt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return pe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : pe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return pe(e.getDate(), t.length);
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
    return pe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return pe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return pe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return pe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return pe(o, t.length);
  }
}, mn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _c = {
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
    return Nt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = pd(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return pe(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : pe(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = id(e);
    return pe(n, t.length);
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
    return pe(n, t.length);
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
        return pe(r, 2);
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
        return pe(r, 2);
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
        return Nt.M(e, t);
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
        return pe(r + 1, 2);
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
    const o = Za(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : pe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Xa(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : pe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Nt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Bw(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : pe(r, t.length);
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
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return pe(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
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
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return pe(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
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
        return pe(o, t.length);
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
    switch (r === 12 ? o = mn.noon : r === 0 ? o = mn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = mn.evening : r >= 12 ? o = mn.afternoon : r >= 4 ? o = mn.morning : o = mn.night, t) {
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
    return Nt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Nt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : pe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : pe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Nt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Nt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Nt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return jc(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Vt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Vt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return jc(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Vt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Vt(r, ":");
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
        return "GMT" + Oc(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Vt(r, ":");
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
        return "GMT" + Oc(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Vt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return pe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return pe(+e, t.length);
  }
};
function Oc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + pe(s, 2);
}
function jc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + pe(Math.abs(e) / 60, 2) : Vt(e, t);
}
function Vt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = pe(Math.trunc(r / 60), 2), s = pe(r % 60, 2);
  return n + o + t + s;
}
const Ic = (e, t) => {
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
}, hd = (e, t) => {
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
}, Hw = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ic(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Ic(r, t)).replace("{{time}}", hd(o, t));
}, zw = {
  p: hd,
  P: Hw
}, Yw = /^D+$/, Gw = /^Y+$/, Kw = ["D", "DD", "YY", "YYYY"];
function Uw(e) {
  return Yw.test(e);
}
function qw(e) {
  return Gw.test(e);
}
function Xw(e, t, n) {
  const r = Zw(e, t, n);
  if (console.warn(r), Kw.includes(e)) throw new RangeError(r);
}
function Zw(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Qw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Jw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, eC = /^'([^]*?)'?$/, tC = /''/g, nC = /[a-zA-Z]/;
function nt(e, t, n) {
  const r = yr(), o = n?.locale ?? r.locale ?? hn, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = he(e, n?.in);
  if (!rw(i))
    throw new RangeError("Invalid time value");
  let c = t.match(Jw).map((f) => {
    const m = f[0];
    if (m === "p" || m === "P") {
      const p = zw[m];
      return p(f, o.formatLong);
    }
    return f;
  }).join("").match(Qw).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const m = f[0];
    if (m === "'")
      return { isToken: !1, value: rC(f) };
    if (_c[m])
      return { isToken: !0, value: f };
    if (m.match(nC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: f };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const d = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: o
  };
  return c.map((f) => {
    if (!f.isToken) return f.value;
    const m = f.value;
    (!n?.useAdditionalWeekYearTokens && qw(m) || !n?.useAdditionalDayOfYearTokens && Uw(m)) && Xw(m, t, String(e));
    const p = _c[m[0]];
    return p(i, m, o.localize, d);
  }).join("");
}
function rC(e) {
  const t = e.match(eC);
  return t ? t[1].replace(tC, "'") : e;
}
function oC(e, t) {
  const n = he(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = Ne(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function sC(e, t) {
  return he(e, t?.in).getMonth();
}
function aC(e, t) {
  return he(e, t?.in).getFullYear();
}
function iC(e, t) {
  return +he(e) > +he(t);
}
function cC(e, t) {
  return +he(e) < +he(t);
}
function lC(e, t, n) {
  const [r, o] = On(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function uC(e, t, n) {
  const [r, o] = On(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function dC(e, t, n) {
  const r = he(e, n?.in), o = r.getFullYear(), s = r.getDate(), a = Ne(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = oC(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function fC(e, t, n) {
  const r = he(e, n?.in);
  return isNaN(+r) ? Ne(e, NaN) : (r.setFullYear(t), r);
}
const Fc = 5, mC = 4;
function pC(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Fc * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Fc : mC;
}
function gd(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function hC(e, t) {
  const n = gd(e, t), r = pC(e, t);
  return t.addDays(n, r * 7 - 1);
}
const gC = {
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
}, vC = (e, t, n) => {
  let r;
  const o = gC[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r;
}, bC = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, xC = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, yC = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wC = {
  date: yn({
    formats: bC,
    defaultWidth: "full"
  }),
  time: yn({
    formats: xC,
    defaultWidth: "full"
  }),
  dateTime: yn({
    formats: yC,
    defaultWidth: "full"
  })
}, CC = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, SC = (e, t, n, r) => {
  const o = CC[e];
  return typeof o == "function" ? o(t) : o;
}, NC = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, EC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, RC = {
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
}, MC = {
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
}, TC = {
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
}, PC = {
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
}, kC = (e, t) => {
  const n = Number(e);
  return t?.unit === "week" ? n + "ª" : n + "º";
}, DC = {
  ordinalNumber: kC,
  era: Je({
    values: NC,
    defaultWidth: "wide"
  }),
  quarter: Je({
    values: EC,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Je({
    values: RC,
    defaultWidth: "wide"
  }),
  day: Je({
    values: MC,
    defaultWidth: "wide"
  }),
  dayPeriod: Je({
    values: TC,
    defaultWidth: "wide",
    formattingValues: PC,
    defaultFormattingWidth: "wide"
  })
}, AC = /^(\d+)[ºªo]?/i, _C = /\d+/i, OC = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, jC = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, IC = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, FC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, LC = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, $C = {
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
}, WC = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, BC = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, VC = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, HC = {
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
}, zC = {
  ordinalNumber: md({
    matchPattern: AC,
    parsePattern: _C,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: et({
    matchPatterns: OC,
    defaultMatchWidth: "wide",
    parsePatterns: jC,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: IC,
    defaultMatchWidth: "wide",
    parsePatterns: FC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: et({
    matchPatterns: LC,
    defaultMatchWidth: "wide",
    parsePatterns: $C,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: WC,
    defaultMatchWidth: "wide",
    parsePatterns: BC,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: VC,
    defaultMatchWidth: "any",
    parsePatterns: HC,
    defaultParseWidth: "any"
  })
}, zt = {
  code: "pt-BR",
  formatDistance: vC,
  formatLong: wC,
  formatRelative: SC,
  localize: DC,
  match: zC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, vd = {
  ...hn,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => nt(a, i, { locale: hn, ...n });
      let s = o(e, "PPPP");
      return t.today && (s = `Today, ${s}`), t.selected && (s = `${s}, selected`), s;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => nt(o, s, { locale: hn, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => nt(a, i, { locale: hn, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => nt(o, s, { locale: hn, ...t }), r(e, "cccc");
    }
  }
};
class Ie {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Te.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new Te(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : Ka(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Ua(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : Qy(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : Jy(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : qa(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : ld(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : sw(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : cw(r), s = new Set(o.map((i) => this.getYear(i)));
      if (s.size === o.length)
        return o;
      const a = [];
      return s.forEach((i) => {
        a.push(new Date(i, 0, 1));
      }), a;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : hC(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : lw(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : ow(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : fd(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : iw(r), this.format = (r, o, s) => {
      const a = this.overrides?.format ? this.overrides.format(r, o, this.options) : nt(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Xa(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : sC(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : aC(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Za(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : iC(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : cC(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : cd(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : nw(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : lC(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : uC(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : ew(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : tw(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : dC(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : fC(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : gd(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : sr(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : or(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : aw(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Cn(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : dd(r), this.options = { locale: vd, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && Ie.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && Ie.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const a = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, a);
  }
}
Ie.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const ct = new Ie();
class bd {
  constructor(t, n, r = ct) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class YC {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class GC {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function KC(e) {
  return I.createElement("button", { ...e });
}
function UC(e) {
  return I.createElement("span", { ...e });
}
function qC(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    I.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && I.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && I.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && I.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && I.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function XC(e) {
  const { day: t, modifiers: n, ...r } = e;
  return I.createElement("td", { ...r });
}
function ZC(e) {
  const { day: t, modifiers: n, ...r } = e, o = I.useRef(null);
  return I.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), I.createElement("button", { ref: o, ...r });
}
var re;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(re || (re = {}));
var xe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(xe || (xe = {}));
var ze;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(ze || (ze = {}));
var _e;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(_e || (_e = {}));
function QC(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, a = [o[re.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === s.value);
  return I.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[re.DropdownRoot] },
    I.createElement(r.Select, { className: a, ...s }, t?.map(({ value: c, label: d, disabled: f }) => I.createElement(r.Option, { key: c, value: c, disabled: f }, d))),
    I.createElement(
      "span",
      { className: o[re.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      I.createElement(r.Chevron, { orientation: "down", size: 18, className: o[re.Chevron] })
    )
  );
}
function JC(e) {
  return I.createElement("div", { ...e });
}
function eS(e) {
  return I.createElement("div", { ...e });
}
function tS(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return I.createElement("div", { ...r }, e.children);
}
function nS(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return I.createElement("div", { ...r });
}
function rS(e) {
  return I.createElement("table", { ...e });
}
function oS(e) {
  return I.createElement("div", { ...e });
}
const xd = ev(void 0);
function wr() {
  const e = tv(xd);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function sS(e) {
  const { components: t } = wr();
  return I.createElement(t.Dropdown, { ...e });
}
function aS(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: d } } = wr(), f = De((p) => {
    o && n?.(p);
  }, [o, n]), m = De((p) => {
    r && t?.(p);
  }, [r, t]);
  return I.createElement(
    "nav",
    { ...s },
    I.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[re.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: m },
      I.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[re.Chevron], orientation: "left" })
    ),
    I.createElement(
      a.NextMonthButton,
      { type: "button", className: i[re.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      I.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[re.Chevron] })
    )
  );
}
function iS(e) {
  const { components: t } = wr();
  return I.createElement(t.Button, { ...e });
}
function cS(e) {
  return I.createElement("option", { ...e });
}
function lS(e) {
  const { components: t } = wr();
  return I.createElement(t.Button, { ...e });
}
function uS(e) {
  const { rootRef: t, ...n } = e;
  return I.createElement("div", { ...n, ref: t });
}
function dS(e) {
  return I.createElement("select", { ...e });
}
function fS(e) {
  const { week: t, ...n } = e;
  return I.createElement("tr", { ...n });
}
function mS(e) {
  return I.createElement("th", { ...e });
}
function pS(e) {
  return I.createElement(
    "thead",
    { "aria-hidden": !0 },
    I.createElement("tr", { ...e })
  );
}
function hS(e) {
  const { week: t, ...n } = e;
  return I.createElement("th", { ...n });
}
function gS(e) {
  return I.createElement("th", { ...e });
}
function vS(e) {
  return I.createElement("tbody", { ...e });
}
function bS(e) {
  const { components: t } = wr();
  return I.createElement(t.Dropdown, { ...e });
}
const xS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: KC,
  CaptionLabel: UC,
  Chevron: qC,
  Day: XC,
  DayButton: ZC,
  Dropdown: QC,
  DropdownNav: JC,
  Footer: eS,
  Month: tS,
  MonthCaption: nS,
  MonthGrid: rS,
  Months: oS,
  MonthsDropdown: sS,
  Nav: aS,
  NextMonthButton: iS,
  Option: cS,
  PreviousMonthButton: lS,
  Root: uS,
  Select: dS,
  Week: fS,
  WeekNumber: hS,
  WeekNumberHeader: gS,
  Weekday: mS,
  Weekdays: pS,
  Weeks: vS,
  YearsDropdown: bS
}, Symbol.toStringTag, { value: "Module" }));
function pt(e, t, n = !1, r = ct) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function Qa(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Io(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ja(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function ei(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function yd(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function wd(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function ht(e, t, n = ct) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (wd(i, n))
      return i.some((c) => o(e, c));
    if (Io(i))
      return pt(i, e, !1, n);
    if (yd(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Qa(i)) {
      const c = s(i.before, e), d = s(i.after, e), f = c > 0, m = d < 0;
      return a(i.before, i.after) ? m && f : f || m;
    }
    return Ja(i) ? s(e, i.after) > 0 : ei(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function yS(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: d, today: f = o.today() } = t, { isSameDay: m, isSameMonth: p, startOfMonth: g, isBefore: v, endOfMonth: h, isAfter: b } = o, x = n && g(n), y = r && h(r), w = {
    [xe.focused]: [],
    [xe.outside]: [],
    [xe.disabled]: [],
    [xe.hidden]: [],
    [xe.today]: []
  }, S = {};
  for (const N of e) {
    const { date: C, displayMonth: E } = N, R = !!(E && !p(C, E)), T = !!(x && v(C, x)), k = !!(y && b(C, y)), F = !!(s && ht(C, s, o)), K = !!(a && ht(C, a, o)) || T || k || // Broadcast calendar will show outside days as default
    !d && !c && R || d && c === !1 && R, q = m(C, f);
    R && w.outside.push(N), F && w.disabled.push(N), K && w.hidden.push(N), q && w.today.push(N), i && Object.keys(i).forEach((D) => {
      const H = i?.[D];
      H && ht(C, H, o) && (S[D] ? S[D].push(N) : S[D] = [N]);
    });
  }
  return (N) => {
    const C = {
      [xe.focused]: !1,
      [xe.disabled]: !1,
      [xe.hidden]: !1,
      [xe.outside]: !1,
      [xe.today]: !1
    }, E = {};
    for (const R in w) {
      const T = w[R];
      C[R] = T.some((k) => k === N);
    }
    for (const R in S)
      E[R] = S[R].some((T) => T === N);
    return {
      ...C,
      // custom modifiers should override all the previous ones
      ...E
    };
  };
}
function wS(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[xe[s]] ? o.push(t[xe[s]]) : t[ze[s]] && o.push(t[ze[s]]), o), [t[re.Day]]);
}
function CS(e) {
  return {
    ...xS,
    ...e
  };
}
function SS(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function ti() {
  const e = {};
  for (const t in re)
    e[re[t]] = `rdp-${re[t]}`;
  for (const t in xe)
    e[xe[t]] = `rdp-${xe[t]}`;
  for (const t in ze)
    e[ze[t]] = `rdp-${ze[t]}`;
  for (const t in _e)
    e[_e[t]] = `rdp-${_e[t]}`;
  return e;
}
function Cd(e, t, n) {
  return (n ?? new Ie(t)).formatMonthYear(e);
}
const NS = Cd;
function ES(e, t, n) {
  return (n ?? new Ie(t)).format(e, "d");
}
function RS(e, t = ct) {
  return t.format(e, "LLLL");
}
function MS(e, t, n) {
  return (n ?? new Ie(t)).format(e, "cccccc");
}
function TS(e, t = ct) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function PS() {
  return "";
}
function Sd(e, t = ct) {
  return t.format(e, "yyyy");
}
const kS = Sd, DS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Cd,
  formatDay: ES,
  formatMonthCaption: NS,
  formatMonthDropdown: RS,
  formatWeekNumber: TS,
  formatWeekNumberHeader: PS,
  formatWeekdayName: MS,
  formatYearCaption: kS,
  formatYearDropdown: Sd
}, Symbol.toStringTag, { value: "Module" }));
function AS(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...DS,
    ...e
  };
}
function ni(e, t, n, r) {
  let o = (r ?? new Ie(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const _S = ni;
function ri(e, t, n) {
  return (n ?? new Ie(t)).formatMonthYear(e);
}
const OS = ri;
function Nd(e, t, n, r) {
  let o = (r ?? new Ie(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Ed(e) {
  return "Choose the Month";
}
function Rd() {
  return "";
}
const jS = "Go to the Next Month";
function Md(e, t) {
  return jS;
}
function Td(e) {
  return "Go to the Previous Month";
}
function Pd(e, t, n) {
  return (n ?? new Ie(t)).format(e, "cccc");
}
function kd(e, t) {
  return `Week ${e}`;
}
function Dd(e) {
  return "Week Number";
}
function Ad(e) {
  return "Choose the Year";
}
const IS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: OS,
  labelDay: _S,
  labelDayButton: ni,
  labelGrid: ri,
  labelGridcell: Nd,
  labelMonthDropdown: Ed,
  labelNav: Rd,
  labelNext: Md,
  labelPrevious: Td,
  labelWeekNumber: kd,
  labelWeekNumberHeader: Dd,
  labelWeekday: Pd,
  labelYearDropdown: Ad
}, Symbol.toStringTag, { value: "Module" })), Ve = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function FS(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...IS,
    ...e ?? {},
    labelDayButton: Ve(ni, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Ve(Ed, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Ve(Md, e?.labelNext, n.labelNext),
    labelPrevious: Ve(Td, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: Ve(kd, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Ve(Ad, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Ve(ri, e?.labelGrid, n.labelGrid),
    labelGridcell: Ve(Nd, e?.labelGridcell, n.labelGridcell),
    labelNav: Ve(Rd, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: Ve(Dd, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Ve(Pd, e?.labelWeekday, n.labelWeekday)
  };
}
function LS(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: d } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((p) => {
    const g = r.formatMonthDropdown(p, o), v = d(p), h = t && p < s(t) || n && p > s(n) || !1;
    return { value: v, label: g, disabled: h };
  });
}
function $S(e, t = {}, n = {}) {
  let r = { ...t?.[re.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function WS(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), a = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(s, i);
    a.push(c);
  }
  return a;
}
function BS(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: a, eachYearOfInterval: i, getYear: c } = r, d = s(e), f = a(t), m = i({ start: d, end: f });
  return o && m.reverse(), m.map((p) => {
    const g = n.formatYearDropdown(p, r);
    return {
      value: c(p),
      label: g,
      disabled: !1
    };
  });
}
function VS(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, s = (i) => {
    const c = typeof i == "number" || typeof i == "string" ? new Date(i) : i;
    return new Te(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, a = (i) => {
    const c = s(i);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(Te.tz(e)),
    newDate: (i, c, d) => new Te(i, c, d, 12, 0, 0, e),
    startOfDay: (i) => s(i),
    startOfWeek: (i, c) => {
      const d = s(i), f = c?.weekStartsOn ?? o, m = (d.getDay() - f + 7) % 7;
      return d.setDate(d.getDate() - m), d;
    },
    startOfISOWeek: (i) => {
      const c = s(i), d = (c.getDay() - 1 + 7) % 7;
      return c.setDate(c.getDate() - d), c;
    },
    startOfMonth: (i) => {
      const c = s(i);
      return c.setDate(1), c;
    },
    startOfYear: (i) => {
      const c = s(i);
      return c.setMonth(0, 1), c;
    },
    endOfWeek: (i, c) => {
      const d = s(i), p = (((c?.weekStartsOn ?? o) + 6) % 7 - d.getDay() + 7) % 7;
      return d.setDate(d.getDate() + p), d;
    },
    endOfISOWeek: (i) => {
      const c = s(i), d = (7 - c.getDay()) % 7;
      return c.setDate(c.getDate() + d), c;
    },
    endOfMonth: (i) => {
      const c = s(i);
      return c.setMonth(c.getMonth() + 1, 0), c;
    },
    endOfYear: (i) => {
      const c = s(i);
      return c.setMonth(11, 31), c;
    },
    eachMonthOfInterval: (i) => {
      const c = s(i.start), d = s(i.end), f = [], m = new Te(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), p = d.getFullYear() * 12 + d.getMonth();
      for (; m.getFullYear() * 12 + m.getMonth() <= p; )
        f.push(new Te(m, e)), m.setMonth(m.getMonth() + 1, 1);
      return f;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (i, c) => {
      const d = s(i);
      return d.setDate(d.getDate() + c), d;
    },
    addWeeks: (i, c) => {
      const d = s(i);
      return d.setDate(d.getDate() + c * 7), d;
    },
    addMonths: (i, c) => {
      const d = s(i);
      return d.setMonth(d.getMonth() + c), d;
    },
    addYears: (i, c) => {
      const d = s(i);
      return d.setFullYear(d.getFullYear() + c), d;
    },
    eachYearOfInterval: (i) => {
      const c = s(i.start), d = s(i.end), f = [], m = new Te(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; m.getFullYear() <= d.getFullYear(); )
        f.push(new Te(m, e)), m.setFullYear(m.getFullYear() + 1, 0, 1);
      return f;
    },
    getWeek: (i, c) => {
      const d = a(i);
      return Za(d, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (i) => {
      const c = a(i);
      return Xa(c);
    },
    differenceInCalendarDays: (i, c) => {
      const d = a(i), f = a(c);
      return qa(d, f);
    },
    differenceInCalendarMonths: (i, c) => {
      const d = a(i), f = a(c);
      return ld(d, f);
    }
  };
}
const Cr = (e) => e instanceof HTMLElement ? e : null, $s = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], HS = (e) => Cr(e.querySelector("[data-animated-month]")), Ws = (e) => Cr(e.querySelector("[data-animated-caption]")), Bs = (e) => Cr(e.querySelector("[data-animated-weeks]")), zS = (e) => Cr(e.querySelector("[data-animated-nav]")), YS = (e) => Cr(e.querySelector("[data-animated-weekdays]"));
function GS(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = Yt(null), i = Yt(r), c = Yt(!1);
  gl(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = s.isSameMonth(r[0].date, d[0].date), m = s.isAfter(r[0].date, d[0].date), p = m ? n[_e.caption_after_enter] : n[_e.caption_before_enter], g = m ? n[_e.weeks_after_enter] : n[_e.weeks_before_enter], v = a.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? ($s(h).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const S = HS(w);
      S && w.contains(S) && w.removeChild(S);
      const N = Ws(w);
      N && N.classList.remove(p);
      const C = Bs(w);
      C && C.classList.remove(g);
    }), a.current = h) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = v instanceof HTMLElement ? $s(v) : [], x = $s(e.current);
    if (x?.every((y) => y instanceof HTMLElement) && b && b.every((y) => y instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const y = zS(e.current);
      y && (y.style.zIndex = "1"), x.forEach((w, S) => {
        const N = b[S];
        if (!N)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const C = Ws(w);
        C && C.classList.add(p);
        const E = Bs(w);
        E && E.classList.add(g);
        const R = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), y && (y.style.zIndex = ""), C && C.classList.remove(p), E && E.classList.remove(g), w.style.position = "", w.style.overflow = "", w.contains(N) && w.removeChild(N);
        };
        N.style.pointerEvents = "none", N.style.position = "absolute", N.style.overflow = "hidden", N.setAttribute("aria-hidden", "true");
        const T = YS(N);
        T && (T.style.opacity = "0");
        const k = Ws(N);
        k && (k.classList.add(m ? n[_e.caption_before_exit] : n[_e.caption_after_exit]), k.addEventListener("animationend", R));
        const F = Bs(N);
        F && F.classList.add(m ? n[_e.weeks_before_exit] : n[_e.weeks_after_exit]), w.insertBefore(N, w.firstChild);
      });
    }
  });
}
function KS(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: g, endOfMonth: v, endOfWeek: h, isAfter: b, startOfBroadcastWeek: x, startOfISOWeek: y, startOfWeek: w } = r, S = c ? x(o, r) : a ? y(o) : w(o), N = c ? p(s) : a ? g(v(s)) : h(v(s)), C = t && (c ? p(t) : a ? g(t) : h(t)), E = C && b(N, C) ? C : N, R = f(E, S), T = m(s, o) + 1, k = [];
  for (let q = 0; q <= R; q++) {
    const D = d(S, q);
    k.push(D);
  }
  const K = (c ? 35 : 42) * T;
  if (i && k.length < K) {
    const q = K - k.length;
    for (let D = 0; D < q; D++) {
      const H = d(k[k.length - 1], 1);
      k.push(H);
    }
  }
  return k;
}
function US(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function qS(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function Lc(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, c) < i - 1) {
    const p = -1 * (i - 1);
    c = f(n, p);
  }
  return t && d(c, t) < 0 && (c = t), m(c);
}
function XS(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: g } = r, v = e.reduce((h, b) => {
    const x = n.broadcastCalendar ? m(b, r) : n.ISOWeek ? p(b) : g(b), y = n.broadcastCalendar ? s(b) : n.ISOWeek ? a(i(b)) : c(i(b)), w = t.filter((E) => E >= x && E <= y), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < S) {
      const E = t.filter((R) => {
        const T = S - w.length;
        return R > y && R <= o(y, T);
      });
      w.push(...E);
    }
    const N = w.reduce((E, R) => {
      const T = n.ISOWeek ? d(R) : f(R), k = E.find((K) => K.weekNumber === T), F = new bd(R, b, r);
      return k ? k.days.push(F) : E.push(new GC(T, [F])), E;
    }, []), C = new YC(b, N);
    return h.push(C), h;
  }, []);
  return n.reverseMonths ? v.reverse() : v;
}
function ZS(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: g, fromMonth: v, toMonth: h } = e;
  !n && v && (n = v), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && g && (r = f(g, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : p ? n = f(p, 0, 1) : !n && b && (n = o(c(e.today ?? m(), -100))), r ? r = i(r) : g ? r = f(g, 11, 31) : !r && b && (r = d(e.today ?? m())), [
    n && s(n),
    r && s(r)
  ];
}
function QS(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, d = o ? s : 1, f = a(e);
  if (!t)
    return i(f, d);
  if (!(c(t, e) < s))
    return i(f, d);
}
function JS(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, d = o ? s ?? 1 : 1, f = a(e);
  if (!t)
    return i(f, -d);
  if (!(c(f, t) <= 0))
    return i(f, -d);
}
function eN(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Fo(e, t) {
  const [n, r] = Le(e);
  return [t === void 0 ? n : t, r];
}
function tN(e, t) {
  const [n, r] = ZS(e, t), { startOfMonth: o, endOfMonth: s } = t, a = Lc(e, n, r, t), [i, c] = Fo(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  gt(() => {
    const S = Lc(e, n, r, t);
    c(S);
  }, [e.timeZone]);
  const { months: d, weeks: f, days: m, previousMonth: p, nextMonth: g } = no(() => {
    const S = qS(i, r, { numberOfMonths: e.numberOfMonths }, t), N = KS(S, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), C = XS(S, N, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), E = eN(C), R = US(C), T = JS(i, n, e, t), k = QS(i, r, e, t);
    return {
      months: C,
      weeks: E,
      days: R,
      previousMonth: T,
      nextMonth: k
    };
  }, [
    t,
    i.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: v, onMonthChange: h } = e, b = (S) => f.some((N) => N.days.some((C) => C.isEqualTo(S))), x = (S) => {
    if (v)
      return;
    let N = o(S);
    n && N < o(n) && (N = o(n)), r && N > o(r) && (N = o(r)), c(N), h?.(N);
  };
  return {
    months: d,
    weeks: f,
    days: m,
    navStart: n,
    navEnd: r,
    previousMonth: p,
    nextMonth: g,
    goToMonth: x,
    goToDay: (S) => {
      b(S) || x(S.date);
    }
  };
}
var Ze;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Ze || (Ze = {}));
function $c(e) {
  return !e[xe.disabled] && !e[xe.hidden] && !e[xe.outside];
}
function nN(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    $c(i) && (i[xe.focused] && s < Ze.FocusedModifier ? (o = a, s = Ze.FocusedModifier) : r?.isEqualTo(a) && s < Ze.LastFocused ? (o = a, s = Ze.LastFocused) : n(a.date) && s < Ze.Selected ? (o = a, s = Ze.Selected) : i[xe.today] && s < Ze.Today && (o = a, s = Ze.Today));
  }
  return o || (o = e.find((a) => $c(t(a)))), o;
}
function rN(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: g, endOfISOWeek: v, endOfWeek: h, max: b, min: x, startOfBroadcastWeek: y, startOfISOWeek: w, startOfWeek: S } = a;
  let C = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (E) => c ? y(E, a) : i ? w(E) : S(E),
    endOfWeek: (E) => c ? g(E) : i ? v(E) : h(E)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? C = b([r, C]) : t === "after" && o && (C = x([o, C])), C;
}
function _d(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = rN(e, t, n.date, r, o, s, a), d = !!(s.disabled && ht(c, s.disabled, a)), f = !!(s.hidden && ht(c, s.hidden, a)), m = c, p = new bd(c, m, a);
  return !d && !f ? p : _d(e, t, p, r, o, s, a, i + 1);
}
function oN(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = Le(), c = nN(t.days, n, r || (() => !1), a), [d, f] = Le(s ? c : void 0);
  return {
    isFocusTarget: (h) => !!c?.isEqualTo(h),
    setFocused: f,
    focused: d,
    blur: () => {
      i(d), f(void 0);
    },
    moveFocus: (h, b) => {
      if (!d)
        return;
      const x = _d(h, b, d, t.navStart, t.navEnd, e, o);
      x && (e.disableNavigation && !t.days.some((w) => w.isEqualTo(x)) || (t.goToDay(x), f(x)));
    }
  };
}
function sN(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Fo(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, d = (g) => i?.some((v) => c(v, g)) ?? !1, { min: f, max: m } = e;
  return {
    selected: i,
    select: (g, v, h) => {
      let b = [...i ?? []];
      if (d(g)) {
        if (i?.length === f || r && i?.length === 1)
          return;
        b = i?.filter((x) => !c(x, g));
      } else
        i?.length === m ? b = [g] : b = [...b, g];
      return o || a(b), o?.(b, g, v, h), b;
    },
    isSelected: d
  };
}
function aN(e, t, n = 0, r = 0, o = !1, s = ct) {
  const { from: a, to: i } = t || {}, { isSameDay: c, isAfter: d, isBefore: f } = s;
  let m;
  if (!a && !i)
    m = { from: e, to: n > 0 ? void 0 : e };
  else if (a && !i)
    c(a, e) ? n === 0 ? m = { from: a, to: e } : o ? m = { from: a, to: void 0 } : m = void 0 : f(e, a) ? m = { from: e, to: a } : m = { from: a, to: e };
  else if (a && i)
    if (c(a, e) && c(i, e))
      o ? m = { from: a, to: i } : m = void 0;
    else if (c(a, e))
      m = { from: a, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      m = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, a))
      m = { from: e, to: i };
    else if (d(e, a))
      m = { from: a, to: e };
    else if (d(e, i))
      m = { from: a, to: e };
    else
      throw new Error("Invalid range");
  if (m?.from && m?.to) {
    const p = s.differenceInCalendarDays(m.to, m.from);
    r > 0 && p > r ? m = { from: e, to: void 0 } : n > 1 && p < n && (m = { from: e, to: void 0 });
  }
  return m;
}
function iN(e, t, n = ct) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const s = n.differenceInCalendarDays(e.to, e.from), a = Math.min(s, 6);
  for (let i = 0; i <= a; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Wc(e, t, n = ct) {
  return pt(e, t.from, !1, n) || pt(e, t.to, !1, n) || pt(t, e.from, !1, n) || pt(t, e.to, !1, n);
}
function cN(e, t, n = ct) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? pt(e, i, !1, n) : wd(i, n) ? i.some((c) => pt(e, c, !1, n)) : Io(i) ? i.from && i.to ? Wc(e, { from: i.from, to: i.to }, n) : !1 : yd(i) ? iN(e, i.dayOfWeek, n) : Qa(i) ? n.isAfter(i.before, i.after) ? Wc(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : ht(e.from, i, n) || ht(e.to, i, n) : Ja(i) || ei(i) ? ht(e.from, i, n) || ht(e.to, i, n) : !1))
    return !0;
  const a = r.filter((i) => typeof i == "function");
  if (a.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let d = 0; d <= c; d++) {
      if (a.some((f) => f(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function lN(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = Fo(o, a ? o : void 0), d = a ? o : i;
  return {
    selected: d,
    select: (p, g, v) => {
      const { min: h, max: b } = e, x = p ? aN(p, d, h, b, s, t) : void 0;
      return r && n && x?.from && x.to && cN({ from: x.from, to: x.to }, n, t) && (x.from = p, x.to = void 0), a || c(x), a?.(x, p, g, v), x;
    },
    isSelected: (p) => d && pt(d, p, !1, t)
  };
}
function uN(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Fo(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (m, p, g) => {
      let v = m;
      return !r && i && i && c(m, i) && (v = void 0), o || a(v), o?.(v, m, p, g), v;
    },
    isSelected: (m) => i ? c(i, m) : !1
  };
}
function dN(e, t) {
  const n = uN(e, t), r = sN(e, t), o = lN(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function Fe(e, t) {
  return e instanceof Te && e.timeZone === t ? e : new Te(e, t);
}
function pn(e, t, n) {
  return Fe(e, t);
}
function Bc(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? pn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? pn(r, t) : r) : Io(e) ? {
    ...e,
    from: e.from ? Fe(e.from, t) : e.from,
    to: e.to ? Fe(e.to, t) : e.to
  } : Qa(e) ? {
    before: pn(e.before, t),
    after: pn(e.after, t)
  } : Ja(e) ? {
    after: pn(e.after, t)
  } : ei(e) ? {
    before: pn(e.before, t)
  } : e;
}
function Vs(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Bc(r, t)) : Bc(e, t));
}
function fN(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Fe(t.today, n)), t.month && (t.month = Fe(t.month, n)), t.defaultMonth && (t.defaultMonth = Fe(t.defaultMonth, n)), t.startMonth && (t.startMonth = Fe(t.startMonth, n)), t.endMonth && (t.endMonth = Fe(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Fe(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((ae) => Fe(ae, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Fe(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Fe(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Vs(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Vs(t.hidden, n)), t.modifiers)) {
    const ae = {};
    Object.keys(t.modifiers).forEach((de) => {
      ae[de] = Vs(t.modifiers?.[de], n);
    }), t.modifiers = ae;
  }
  const { components: r, formatters: o, labels: s, dateLib: a, locale: i, classNames: c } = no(() => {
    const ae = { ...vd, ...t.locale }, de = t.broadcastCalendar ? 1 : t.weekStartsOn, se = t.noonSafe && t.timeZone ? VS(t.timeZone, {
      weekStartsOn: de,
      locale: ae
    }) : void 0, ue = t.dateLib && se ? { ...se, ...t.dateLib } : t.dateLib ?? se, Me = new Ie({
      locale: ae,
      weekStartsOn: de,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, ue);
    return {
      dateLib: Me,
      components: CS(t.components),
      formatters: AS(t.formatters),
      labels: FS(t.labels, Me.options),
      locale: ae,
      classNames: { ...ti(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: a.today() });
  const { captionLayout: d, mode: f, navLayout: m, numberOfMonths: p = 1, onDayBlur: g, onDayClick: v, onDayFocus: h, onDayKeyDown: b, onDayMouseEnter: x, onDayMouseLeave: y, onNextClick: w, onPrevClick: S, showWeekNumber: N, styles: C } = t, { formatCaption: E, formatDay: R, formatMonthDropdown: T, formatWeekNumber: k, formatWeekNumberHeader: F, formatWeekdayName: K, formatYearDropdown: q } = o, D = tN(t, a), { days: H, months: B, navStart: X, navEnd: _, previousMonth: L, nextMonth: A, goToMonth: G } = D, P = yS(H, t, X, _, a), { isSelected: $, select: z, selected: V } = dN(t, a) ?? {}, { blur: J, focused: O, isFocusTarget: U, moveFocus: te, setFocused: ee } = oN(t, D, P, $ ?? (() => !1), a), { labelDayButton: ne, labelGridcell: Y, labelGrid: ie, labelMonthDropdown: fe, labelNav: we, labelPrevious: Re, labelNext: ke, labelWeekday: dt, labelWeekNumber: Xe, labelWeekNumberHeader: ft, labelYearDropdown: Wt } = s, Vn = no(() => WS(a, t.ISOWeek, t.broadcastCalendar, t.today), [a, t.ISOWeek, t.broadcastCalendar, t.today]), on = f !== void 0 || v !== void 0, sn = De(() => {
    L && (G(L), S?.(L));
  }, [L, G, S]), an = De(() => {
    A && (G(A), w?.(A));
  }, [G, A, w]), xs = De((ae, de) => (se) => {
    se.preventDefault(), se.stopPropagation(), ee(ae), !de.disabled && (z?.(ae.date, de, se), v?.(ae.date, de, se));
  }, [z, v, ee]), Br = De((ae, de) => (se) => {
    ee(ae), h?.(ae.date, de, se);
  }, [h, ee]), ys = De((ae, de) => (se) => {
    J(), g?.(ae.date, de, se);
  }, [J, g]), Hn = De((ae, de) => (se) => {
    const ue = {
      ArrowLeft: [
        se.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        se.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [se.shiftKey ? "year" : "week", "after"],
      ArrowUp: [se.shiftKey ? "year" : "week", "before"],
      PageUp: [se.shiftKey ? "year" : "month", "before"],
      PageDown: [se.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ue[se.key]) {
      se.preventDefault(), se.stopPropagation();
      const [Me, le] = ue[se.key];
      te(Me, le);
    }
    b?.(ae.date, de, se);
  }, [te, b, t.dir]), Ct = De((ae, de) => (se) => {
    x?.(ae.date, de, se);
  }, [x]), zn = De((ae, de) => (se) => {
    y?.(ae.date, de, se);
  }, [y]), Yn = De((ae) => (de) => {
    const se = Number(de.target.value), ue = a.setMonth(a.startOfMonth(ae), se);
    G(ue);
  }, [a, G]), cn = De((ae) => (de) => {
    const se = Number(de.target.value), ue = a.setYear(a.startOfMonth(ae), se);
    G(ue);
  }, [a, G]), { className: ws, style: Cs } = no(() => ({
    className: [c[re.Root], t.className].filter(Boolean).join(" "),
    style: { ...C?.[re.Root], ...t.style }
  }), [c, t.className, t.style, C]), Ss = SS(t), Vr = Yt(null);
  GS(Vr, !!t.animate, {
    classNames: c,
    months: B,
    focused: O,
    dateLib: a
  });
  const Ns = {
    dayPickerProps: t,
    selected: V,
    select: z,
    isSelected: $,
    months: B,
    nextMonth: A,
    previousMonth: L,
    goToMonth: G,
    getModifiers: P,
    components: r,
    classNames: c,
    styles: C,
    labels: s,
    formatters: o
  };
  return I.createElement(
    xd.Provider,
    { value: Ns },
    I.createElement(
      r.Root,
      { rootRef: t.animate ? Vr : void 0, className: ws, style: Cs, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ss },
      I.createElement(
        r.Months,
        { className: c[re.Months], style: C?.[re.Months] },
        !t.hideNavigation && !m && I.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[re.Nav], style: C?.[re.Nav], "aria-label": we(), onPreviousClick: sn, onNextClick: an, previousMonth: L, nextMonth: A }),
        B.map((ae, de) => I.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[re.Month],
            style: C?.[re.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: de,
            displayIndex: de,
            calendarMonth: ae
          },
          m === "around" && !t.hideNavigation && de === 0 && I.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[re.PreviousMonthButton], tabIndex: L ? void 0 : -1, "aria-disabled": L ? void 0 : !0, "aria-label": Re(L), onClick: sn, "data-animated-button": t.animate ? "true" : void 0 },
            I.createElement(r.Chevron, { disabled: L ? void 0 : !0, className: c[re.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          I.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[re.MonthCaption], style: C?.[re.MonthCaption], calendarMonth: ae, displayIndex: de }, d?.startsWith("dropdown") ? I.createElement(
            r.DropdownNav,
            { className: c[re.Dropdowns], style: C?.[re.Dropdowns] },
            (() => {
              const se = d === "dropdown" || d === "dropdown-months" ? I.createElement(r.MonthsDropdown, { key: "month", className: c[re.MonthsDropdown], "aria-label": fe(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: Yn(ae.date), options: LS(ae.date, X, _, o, a), style: C?.[re.Dropdown], value: a.getMonth(ae.date) }) : I.createElement("span", { key: "month" }, T(ae.date, a)), ue = d === "dropdown" || d === "dropdown-years" ? I.createElement(r.YearsDropdown, { key: "year", className: c[re.YearsDropdown], "aria-label": Wt(a.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: cn(ae.date), options: BS(X, _, o, a, !!t.reverseYears), style: C?.[re.Dropdown], value: a.getYear(ae.date) }) : I.createElement("span", { key: "year" }, q(ae.date, a));
              return a.getMonthYearOrder() === "year-first" ? [ue, se] : [se, ue];
            })(),
            I.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, E(ae.date, a.options, a))
          ) : I.createElement(r.CaptionLabel, { className: c[re.CaptionLabel], role: "status", "aria-live": "polite" }, E(ae.date, a.options, a))),
          m === "around" && !t.hideNavigation && de === p - 1 && I.createElement(
            r.NextMonthButton,
            { type: "button", className: c[re.NextMonthButton], tabIndex: A ? void 0 : -1, "aria-disabled": A ? void 0 : !0, "aria-label": ke(A), onClick: an, "data-animated-button": t.animate ? "true" : void 0 },
            I.createElement(r.Chevron, { disabled: A ? void 0 : !0, className: c[re.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          de === p - 1 && m === "after" && !t.hideNavigation && I.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[re.Nav], style: C?.[re.Nav], "aria-label": we(), onPreviousClick: sn, onNextClick: an, previousMonth: L, nextMonth: A }),
          I.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": f === "multiple" || f === "range", "aria-label": ie(ae.date, a.options, a) || void 0, className: c[re.MonthGrid], style: C?.[re.MonthGrid] },
            !t.hideWeekdays && I.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[re.Weekdays], style: C?.[re.Weekdays] },
              N && I.createElement(r.WeekNumberHeader, { "aria-label": ft(a.options), className: c[re.WeekNumberHeader], style: C?.[re.WeekNumberHeader], scope: "col" }, F()),
              Vn.map((se) => I.createElement(r.Weekday, { "aria-label": dt(se, a.options, a), className: c[re.Weekday], key: String(se), style: C?.[re.Weekday], scope: "col" }, K(se, a.options, a)))
            ),
            I.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[re.Weeks], style: C?.[re.Weeks] }, ae.weeks.map((se) => I.createElement(
              r.Week,
              { className: c[re.Week], key: se.weekNumber, style: C?.[re.Week], week: se },
              N && I.createElement(r.WeekNumber, { week: se, style: C?.[re.WeekNumber], "aria-label": Xe(se.weekNumber, {
                locale: i
              }), className: c[re.WeekNumber], scope: "row", role: "rowheader" }, k(se.weekNumber, a)),
              se.days.map((ue) => {
                const { date: Me } = ue, le = P(ue);
                if (le[xe.focused] = !le.hidden && !!O?.isEqualTo(ue), le[ze.selected] = $?.(Me) || le.selected, Io(V)) {
                  const { from: Rs, to: Ms } = V;
                  le[ze.range_start] = !!(Rs && Ms && a.isSameDay(Me, Rs)), le[ze.range_end] = !!(Rs && Ms && a.isSameDay(Me, Ms)), le[ze.range_middle] = pt(V, Me, !0, a);
                }
                const Hr = $S(le, C, t.modifiersStyles), zr = wS(le, c, t.modifiersClassNames), Es = !on && !le.hidden ? Y(Me, le, a.options, a) : void 0;
                return I.createElement(r.Day, { key: `${ue.isoDate}_${ue.displayMonthId}`, day: ue, modifiers: le, className: zr.join(" "), style: Hr, role: "gridcell", "aria-selected": le.selected || void 0, "aria-label": Es, "data-day": ue.isoDate, "data-month": ue.outside ? ue.dateMonthId : void 0, "data-selected": le.selected || void 0, "data-disabled": le.disabled || void 0, "data-hidden": le.hidden || void 0, "data-outside": ue.outside || void 0, "data-focused": le.focused || void 0, "data-today": le.today || void 0 }, !le.hidden && on ? I.createElement(r.DayButton, { className: c[re.DayButton], style: C?.[re.DayButton], type: "button", day: ue, modifiers: le, disabled: !le.focused && le.disabled || void 0, "aria-disabled": le.focused && le.disabled || void 0, tabIndex: U(ue) ? 0 : -1, "aria-label": ne(Me, le, a.options, a), onClick: xs(ue, le), onBlur: ys(ue, le), onFocus: Br(ue, le), onKeyDown: Hn(ue, le), onMouseEnter: Ct(ue, le), onMouseLeave: zn(ue, le) }, R(Me, a.options, a)) : !le.hidden && R(ue.date, a.options, a));
              })
            )))
          )
        ))
      ),
      t.footer && I.createElement(r.Footer, { className: c[re.Footer], style: C?.[re.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const mN = "(##) ####-####", pN = "(##) #####-####", hN = "#####-###", gN = "###.###.###-##", vN = "##.###.###/####-##", bN = "###########", xN = "##.###.###-#", yN = "AAA#A##", wN = "###########", CN = "##############", Od = (e, t) => {
  let n = "", r = 0;
  for (let o = 0; o < t.length; o++) {
    const s = e[r];
    if (s === void 0)
      break;
    switch (t[o]) {
      case "#":
        if (!/\d/.test(s))
          return n;
        n += s, r++;
        break;
      case "A":
        if (!/[a-zA-Z]/.test(s))
          return n;
        n += s, r++;
        break;
      case "*":
        /[a-zA-Z0-9]/.test(s) && (n += e[r]), r++;
        break;
      default:
        n += t[o], t[o] === s && r++;
    }
  }
  return n;
}, eA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: pN,
  CNH_MASK: bN,
  CNPJ_MASK: vN,
  CPF_MASK: gN,
  PHONE_MASK: mN,
  PLATE_MASK: yN,
  RENAVAM_MASK: wN,
  RG_MASK: xN,
  RNTRC_MASK: CN,
  ZIP_CODE_MASK: hN,
  formatMask: Od
}, Symbol.toStringTag, { value: "Module" })), tA = [
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
function jd({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "ghost",
  locale: s,
  formatters: a,
  components: i,
  ...c
}) {
  const d = ti();
  return /* @__PURE__ */ l.jsx(
    fN,
    {
      showOutsideDays: n,
      className: M(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      locale: s,
      formatters: {
        formatMonthDropdown: (f) => f.toLocaleString(s?.code, { month: "short" }),
        ...a
      },
      classNames: {
        root: M("w-fit", d.root),
        months: M(
          "flex gap-4 flex-col md:flex-row relative",
          d.months
        ),
        month: M("flex flex-col w-full gap-4", d.month),
        nav: M(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          d.nav
        ),
        button_previous: M(
          Ut({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_previous
        ),
        button_next: M(
          Ut({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_next
        ),
        month_caption: M(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          d.month_caption
        ),
        dropdowns: M(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          d.dropdowns
        ),
        dropdown_root: M(
          "relative cn-calendar-dropdown-root rounded-(--cell-radius)",
          d.dropdown_root
        ),
        dropdown: M(
          "absolute bg-popover inset-0 opacity-0",
          d.dropdown
        ),
        caption_label: M(
          "select-none font-medium",
          r === "label" ? "text-sm" : "cn-calendar-caption-label rounded-(--cell-radius) flex items-center gap-1 text-sm  [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          d.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: M("flex", d.weekdays),
        weekday: M(
          "text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none",
          d.weekday
        ),
        week: M("flex w-full mt-2", d.week),
        week_number_header: M(
          "select-none w-(--cell-size)",
          d.week_number_header
        ),
        week_number: M(
          "text-[0.8rem] select-none text-muted-foreground",
          d.week_number
        ),
        day: M(
          "relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none",
          c.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          d.day
        ),
        range_start: M(
          "rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate",
          d.range_start
        ),
        range_middle: M("rounded-none", d.range_middle),
        range_end: M(
          "rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate",
          d.range_end
        ),
        today: M(
          "bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none",
          d.today
        ),
        outside: M(
          "text-muted-foreground aria-selected:text-muted-foreground",
          d.outside
        ),
        disabled: M(
          "text-muted-foreground opacity-50",
          d.disabled
        ),
        hidden: M("invisible", d.hidden),
        ...t
      },
      components: {
        Root: ({ className: f, rootRef: m, ...p }) => /* @__PURE__ */ l.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: m,
            className: M(f),
            ...p
          }
        ),
        Chevron: ({ className: f, orientation: m, ...p }) => m === "left" ? /* @__PURE__ */ l.jsx(nv, { className: M("cn-rtl-flip size-4", f), ...p }) : m === "right" ? /* @__PURE__ */ l.jsx(rv, { className: M("cn-rtl-flip size-4", f), ...p }) : /* @__PURE__ */ l.jsx(ov, { className: M("size-4", f), ...p }),
        DayButton: ({ ...f }) => /* @__PURE__ */ l.jsx(SN, { locale: s, ...f }),
        WeekNumber: ({ children: f, ...m }) => /* @__PURE__ */ l.jsx("td", { ...m, children: /* @__PURE__ */ l.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: f }) }),
        ...i
      },
      ...c
    }
  );
}
function SN({
  className: e,
  day: t,
  modifiers: n,
  locale: r,
  ...o
}) {
  const s = ti(), a = u.useRef(null);
  return u.useEffect(() => {
    n.focused && a.current?.focus();
  }, [n.focused]), /* @__PURE__ */ l.jsx(
    wt,
    {
      ref: a,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(r?.code),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: M(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        s.day,
        e
      ),
      ...o
    }
  );
}
const NN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
NN.displayName = "Card";
const EN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
EN.displayName = "CardHeader";
const RN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "h3",
  {
    ref: n,
    className: M(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
RN.displayName = "CardTitle";
const MN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "p",
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
MN.displayName = "CardDescription";
const TN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: M("p-4", e), ...t }));
TN.displayName = "CardContent";
const PN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex items-center p-4 pt-0", e),
    ...t
  }
));
PN.displayName = "CardFooter";
function kN(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Vc(e) {
  return kN(e) || Array.isArray(e);
}
function DN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function oi(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), s = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== s ? !1 : n.every((a) => {
    const i = e[a], c = t[a];
    return typeof i == "function" ? `${i}` == `${c}` : !Vc(i) || !Vc(c) ? i === c : oi(i, c);
  });
}
function Hc(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function AN(e, t) {
  if (e.length !== t.length) return !1;
  const n = Hc(e), r = Hc(t);
  return n.every((o, s) => {
    const a = r[s];
    return oi(o, a);
  });
}
function si(e) {
  return typeof e == "number";
}
function sa(e) {
  return typeof e == "string";
}
function Lo(e) {
  return typeof e == "boolean";
}
function zc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ye(e) {
  return Math.abs(e);
}
function ai(e) {
  return Math.sign(e);
}
function er(e, t) {
  return ye(e - t);
}
function _N(e, t) {
  if (e === 0 || t === 0 || ye(e) <= ye(t)) return 0;
  const n = er(ye(e), ye(t));
  return ye(n / e);
}
function ON(e) {
  return Math.round(e * 100) / 100;
}
function ar(e) {
  return ir(e).map(Number);
}
function Ye(e) {
  return e[Sr(e)];
}
function Sr(e) {
  return Math.max(0, e.length - 1);
}
function ii(e, t) {
  return t === Sr(e);
}
function Yc(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function ir(e) {
  return Object.keys(e);
}
function Id(e, t) {
  return [e, t].reduce((n, r) => (ir(r).forEach((o) => {
    const s = n[o], a = r[o], i = zc(s) && zc(a);
    n[o] = i ? Id(s, a) : a;
  }), n), {});
}
function aa(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function jN(e, t) {
  const n = {
    start: r,
    center: o,
    end: s
  };
  function r() {
    return 0;
  }
  function o(c) {
    return s(c) / 2;
  }
  function s(c) {
    return t - c;
  }
  function a(c, d) {
    return sa(e) ? n[e](c) : e(t, c, d);
  }
  return {
    measure: a
  };
}
function cr() {
  let e = [];
  function t(o, s, a, i = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(s, a, i), c = () => o.removeEventListener(s, a, i);
    else {
      const d = o;
      d.addListener(a), c = () => d.removeListener(a);
    }
    return e.push(c), r;
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
function IN(e, t, n, r) {
  const o = cr(), s = 1e3 / 60;
  let a = null, i = 0, c = 0;
  function d() {
    o.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function f() {
    g(), o.clear();
  }
  function m(b) {
    if (!c) return;
    a || (a = b, n(), n());
    const x = b - a;
    for (a = b, i += x; i >= s; )
      n(), i -= s;
    const y = i / s;
    r(y), c && (c = t.requestAnimationFrame(m));
  }
  function p() {
    c || (c = t.requestAnimationFrame(m));
  }
  function g() {
    t.cancelAnimationFrame(c), a = null, i = 0, c = 0;
  }
  function v() {
    a = null, i = 0;
  }
  return {
    init: d,
    destroy: f,
    start: p,
    stop: g,
    update: n,
    render: r
  };
}
function FN(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", s = r ? "x" : "y", a = !r && n ? -1 : 1, i = f(), c = m();
  function d(v) {
    const {
      height: h,
      width: b
    } = v;
    return r ? h : b;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function m() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(v) {
    return v * a;
  }
  return {
    scroll: o,
    cross: s,
    startEdge: i,
    endEdge: c,
    measureSize: d,
    direction: p
  };
}
function qt(e = 0, t = 0) {
  const n = ye(e - t);
  function r(d) {
    return d < e;
  }
  function o(d) {
    return d > t;
  }
  function s(d) {
    return r(d) || o(d);
  }
  function a(d) {
    return s(d) ? r(d) ? e : t : d;
  }
  function i(d) {
    return n ? d - n * Math.ceil((d - t) / n) : d;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: a,
    reachedAny: s,
    reachedMax: o,
    reachedMin: r,
    removeOffset: i
  };
}
function Fd(e, t, n) {
  const {
    constrain: r
  } = qt(0, e), o = e + 1;
  let s = a(t);
  function a(p) {
    return n ? ye((o + p) % o) : r(p);
  }
  function i() {
    return s;
  }
  function c(p) {
    return s = a(p), m;
  }
  function d(p) {
    return f().set(i() + p);
  }
  function f() {
    return Fd(e, i(), n);
  }
  const m = {
    get: i,
    set: c,
    add: d,
    clone: f
  };
  return m;
}
function LN(e, t, n, r, o, s, a, i, c, d, f, m, p, g, v, h, b, x, y) {
  const {
    cross: w,
    direction: S
  } = e, N = ["INPUT", "SELECT", "TEXTAREA"], C = {
    passive: !1
  }, E = cr(), R = cr(), T = qt(50, 225).constrain(g.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, F = {
    mouse: 500,
    touch: 600
  }, K = v ? 43 : 25;
  let q = !1, D = 0, H = 0, B = !1, X = !1, _ = !1, L = !1;
  function A(Y) {
    if (!y) return;
    function ie(we) {
      (Lo(y) || y(Y, we)) && J(we);
    }
    const fe = t;
    E.add(fe, "dragstart", (we) => we.preventDefault(), C).add(fe, "touchmove", () => {
    }, C).add(fe, "touchend", () => {
    }).add(fe, "touchstart", ie).add(fe, "mousedown", ie).add(fe, "touchcancel", U).add(fe, "contextmenu", U).add(fe, "click", te, !0);
  }
  function G() {
    E.clear(), R.clear();
  }
  function P() {
    const Y = L ? n : t;
    R.add(Y, "touchmove", O, C).add(Y, "touchend", U).add(Y, "mousemove", O, C).add(Y, "mouseup", U);
  }
  function $(Y) {
    const ie = Y.nodeName || "";
    return N.includes(ie);
  }
  function z() {
    return (v ? F : k)[L ? "mouse" : "touch"];
  }
  function V(Y, ie) {
    const fe = m.add(ai(Y) * -1), we = f.byDistance(Y, !v).distance;
    return v || ye(Y) < T ? we : b && ie ? we * 0.5 : f.byIndex(fe.get(), 0).distance;
  }
  function J(Y) {
    const ie = aa(Y, r);
    L = ie, _ = v && ie && !Y.buttons && q, q = er(o.get(), a.get()) >= 2, !(ie && Y.button !== 0) && ($(Y.target) || (B = !0, s.pointerDown(Y), d.useFriction(0).useDuration(0), o.set(a), P(), D = s.readPoint(Y), H = s.readPoint(Y, w), p.emit("pointerDown")));
  }
  function O(Y) {
    if (!aa(Y, r) && Y.touches.length >= 2) return U(Y);
    const fe = s.readPoint(Y), we = s.readPoint(Y, w), Re = er(fe, D), ke = er(we, H);
    if (!X && !L && (!Y.cancelable || (X = Re > ke, !X)))
      return U(Y);
    const dt = s.pointerMove(Y);
    Re > h && (_ = !0), d.useFriction(0.3).useDuration(0.75), i.start(), o.add(S(dt)), Y.preventDefault();
  }
  function U(Y) {
    const fe = f.byDistance(0, !1).index !== m.get(), we = s.pointerUp(Y) * z(), Re = V(S(we), fe), ke = _N(we, Re), dt = K - 10 * ke, Xe = x + ke / 50;
    X = !1, B = !1, R.clear(), d.useDuration(dt).useFriction(Xe), c.distance(Re, !v), L = !1, p.emit("pointerUp");
  }
  function te(Y) {
    _ && (Y.stopPropagation(), Y.preventDefault(), _ = !1);
  }
  function ee() {
    return B;
  }
  return {
    init: A,
    destroy: G,
    pointerDown: ee
  };
}
function $N(e, t) {
  let r, o;
  function s(m) {
    return m.timeStamp;
  }
  function a(m, p) {
    const v = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (aa(m, t) ? m : m.touches[0])[v];
  }
  function i(m) {
    return r = m, o = m, a(m);
  }
  function c(m) {
    const p = a(m) - a(o), g = s(m) - s(r) > 170;
    return o = m, g && (r = m), p;
  }
  function d(m) {
    if (!r || !o) return 0;
    const p = a(o) - a(r), g = s(m) - s(r), v = s(m) - s(o) > 170, h = p / g;
    return g && !v && ye(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: d,
    readPoint: a
  };
}
function WN() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: s,
      offsetHeight: a
    } = n;
    return {
      top: r,
      right: o + s,
      bottom: r + a,
      left: o,
      width: s,
      height: a
    };
  }
  return {
    measure: e
  };
}
function BN(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function VN(e, t, n, r, o, s, a) {
  const i = [e].concat(r);
  let c, d, f = [], m = !1;
  function p(b) {
    return o.measureSize(a.measure(b));
  }
  function g(b) {
    if (!s) return;
    d = p(e), f = r.map(p);
    function x(y) {
      for (const w of y) {
        if (m) return;
        const S = w.target === e, N = r.indexOf(w.target), C = S ? d : f[N], E = p(S ? e : r[N]);
        if (ye(E - C) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((y) => {
      (Lo(s) || s(b, y)) && x(y);
    }), n.requestAnimationFrame(() => {
      i.forEach((y) => c.observe(y));
    });
  }
  function v() {
    m = !0, c && c.disconnect();
  }
  return {
    init: g,
    destroy: v
  };
}
function HN(e, t, n, r, o, s) {
  let a = 0, i = 0, c = o, d = s, f = e.get(), m = 0;
  function p() {
    const C = r.get() - e.get(), E = !c;
    let R = 0;
    return E ? (a = 0, n.set(r), e.set(r), R = C) : (n.set(e), a += C / c, a *= d, f += a, e.add(a), R = f - m), i = ai(R), m = f, N;
  }
  function g() {
    const C = r.get() - t.get();
    return ye(C) < 1e-3;
  }
  function v() {
    return c;
  }
  function h() {
    return i;
  }
  function b() {
    return a;
  }
  function x() {
    return w(o);
  }
  function y() {
    return S(s);
  }
  function w(C) {
    return c = C, N;
  }
  function S(C) {
    return d = C, N;
  }
  const N = {
    direction: h,
    duration: v,
    velocity: b,
    seek: p,
    settled: g,
    useBaseFriction: y,
    useBaseDuration: x,
    useFriction: S,
    useDuration: w
  };
  return N;
}
function zN(e, t, n, r, o) {
  const s = o.measure(10), a = o.measure(50), i = qt(0.1, 0.99);
  let c = !1;
  function d() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(g) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", h = ye(e[v] - t.get()), b = n.get() - t.get(), x = i.constrain(h / a);
    n.subtract(b * x), !g && ye(b) < s && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function m(g) {
    c = !g;
  }
  return {
    shouldConstrain: d,
    constrain: f,
    toggleActive: m
  };
}
function YN(e, t, n, r, o) {
  const s = qt(-t + e, 0), a = m(), i = f(), c = p();
  function d(v, h) {
    return er(v, h) <= 1;
  }
  function f() {
    const v = a[0], h = Ye(a), b = a.lastIndexOf(v), x = a.indexOf(h) + 1;
    return qt(b, x);
  }
  function m() {
    return n.map((v, h) => {
      const {
        min: b,
        max: x
      } = s, y = s.constrain(v), w = !h, S = ii(n, h);
      return w ? x : S || d(b, y) ? b : d(x, y) ? x : y;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function p() {
    if (t <= e + o) return [s.max];
    if (r === "keepSnaps") return a;
    const {
      min: v,
      max: h
    } = i;
    return a.slice(v, h);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function GN(e, t, n) {
  const r = t[0], o = n ? r - e : Ye(t);
  return {
    limit: qt(o, r)
  };
}
function KN(e, t, n, r) {
  const s = t.min + 0.1, a = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = qt(s, a);
  function d(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function f(p) {
    if (!d(p)) return;
    const g = e * (p * -1);
    r.forEach((v) => v.add(g));
  }
  return {
    loop: f
  };
}
function UN(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(s) {
    const a = s - t;
    return n ? a / -n : 0;
  }
  return {
    get: r
  };
}
function qN(e, t, n, r, o) {
  const {
    startEdge: s,
    endEdge: a
  } = e, {
    groupSlides: i
  } = o, c = m().map(t.measure), d = p(), f = g();
  function m() {
    return i(r).map((h) => Ye(h)[a] - h[0][s]).map(ye);
  }
  function p() {
    return r.map((h) => n[s] - h[s]).map((h) => -ye(h));
  }
  function g() {
    return i(d).map((h) => h[0]).map((h, b) => h + c[b]);
  }
  return {
    snaps: d,
    snapsAligned: f
  };
}
function XN(e, t, n, r, o, s) {
  const {
    groupSlides: a
  } = o, {
    min: i,
    max: c
  } = r, d = f();
  function f() {
    const p = a(s), g = !e || t === "keepSnaps";
    return n.length === 1 ? [s] : g ? p : p.slice(i, c).map((v, h, b) => {
      const x = !h, y = ii(b, h);
      if (x) {
        const w = Ye(b[0]) + 1;
        return Yc(w);
      }
      if (y) {
        const w = Sr(s) - Ye(b)[0] + 1;
        return Yc(w, Ye(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function ZN(e, t, n, r, o) {
  const {
    reachedAny: s,
    removeOffset: a,
    constrain: i
  } = r;
  function c(v) {
    return v.concat().sort((h, b) => ye(h) - ye(b))[0];
  }
  function d(v) {
    const h = e ? a(v) : i(v), b = t.map((y, w) => ({
      diff: f(y - h, 0),
      index: w
    })).sort((y, w) => ye(y.diff) - ye(w.diff)), {
      index: x
    } = b[0];
    return {
      index: x,
      distance: h
    };
  }
  function f(v, h) {
    const b = [v, v + n, v - n];
    if (!e) return v;
    if (!h) return c(b);
    const x = b.filter((y) => ai(y) === h);
    return x.length ? c(x) : Ye(b) - n;
  }
  function m(v, h) {
    const b = t[v] - o.get(), x = f(b, h);
    return {
      index: v,
      distance: x
    };
  }
  function p(v, h) {
    const b = o.get() + v, {
      index: x,
      distance: y
    } = d(b), w = !e && s(b);
    if (!h || w) return {
      index: x,
      distance: v
    };
    const S = t[x] - y, N = v + f(S, 0);
    return {
      index: x,
      distance: N
    };
  }
  return {
    byDistance: p,
    byIndex: m,
    shortcut: f
  };
}
function QN(e, t, n, r, o, s, a) {
  function i(m) {
    const p = m.distance, g = m.index !== t.get();
    s.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (n.set(t.get()), t.set(m.index), a.emit("select"));
  }
  function c(m, p) {
    const g = o.byDistance(m, p);
    i(g);
  }
  function d(m, p) {
    const g = t.clone().set(m), v = o.byIndex(g.get(), p);
    i(v);
  }
  return {
    distance: c,
    index: d
  };
}
function JN(e, t, n, r, o, s, a, i) {
  const c = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function f(g) {
    if (!i) return;
    function v(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      a.emit("slideFocusStart"), e.scrollLeft = 0;
      const y = n.findIndex((w) => w.includes(h));
      si(y) && (o.useDuration(0), r.index(y, 0), a.emit("slideFocus"));
    }
    s.add(document, "keydown", m, !1), t.forEach((h, b) => {
      s.add(h, "focus", (x) => {
        (Lo(i) || i(g, x)) && v(b);
      }, c);
    });
  }
  function m(g) {
    g.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function Zn(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = a(c);
  }
  function o(c) {
    t += a(c);
  }
  function s(c) {
    t -= a(c);
  }
  function a(c) {
    return si(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: s
  };
}
function Ld(e, t) {
  const n = e.scroll === "x" ? a : i, r = t.style;
  let o = null, s = !1;
  function a(p) {
    return `translate3d(${p}px,0px,0px)`;
  }
  function i(p) {
    return `translate3d(0px,${p}px,0px)`;
  }
  function c(p) {
    if (s) return;
    const g = ON(e.direction(p));
    g !== o && (r.transform = n(g), o = g);
  }
  function d(p) {
    s = !p;
  }
  function f() {
    s || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: c,
    toggleActive: d
  };
}
function eE(e, t, n, r, o, s, a, i, c) {
  const f = ar(o), m = ar(o).reverse(), p = x().concat(y());
  function g(E, R) {
    return E.reduce((T, k) => T - o[k], R);
  }
  function v(E, R) {
    return E.reduce((T, k) => g(T, R) > 0 ? T.concat([k]) : T, []);
  }
  function h(E) {
    return s.map((R, T) => ({
      start: R - r[T] + 0.5 + E,
      end: R + t - 0.5 + E
    }));
  }
  function b(E, R, T) {
    const k = h(R);
    return E.map((F) => {
      const K = T ? 0 : -n, q = T ? n : 0, D = T ? "end" : "start", H = k[F][D];
      return {
        index: F,
        loopPoint: H,
        slideLocation: Zn(-1),
        translate: Ld(e, c[F]),
        target: () => i.get() > H ? K : q
      };
    });
  }
  function x() {
    const E = a[0], R = v(m, E);
    return b(R, n, !1);
  }
  function y() {
    const E = t - a[0] - 1, R = v(f, E);
    return b(R, -n, !0);
  }
  function w() {
    return p.every(({
      index: E
    }) => {
      const R = f.filter((T) => T !== E);
      return g(R, t) <= 0.1;
    });
  }
  function S() {
    p.forEach((E) => {
      const {
        target: R,
        translate: T,
        slideLocation: k
      } = E, F = R();
      F !== k.get() && (T.to(F), k.set(F));
    });
  }
  function N() {
    p.forEach((E) => E.translate.clear());
  }
  return {
    canLoop: w,
    clear: N,
    loop: S,
    loopPoints: p
  };
}
function tE(e, t, n) {
  let r, o = !1;
  function s(c) {
    if (!n) return;
    function d(f) {
      for (const m of f)
        if (m.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      o || (Lo(n) || n(c, f)) && d(f);
    }), r.observe(e, {
      childList: !0
    });
  }
  function a() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: s,
    destroy: a
  };
}
function nE(e, t, n, r) {
  const o = {};
  let s = null, a = null, i, c = !1;
  function d() {
    i = new IntersectionObserver((v) => {
      c || (v.forEach((h) => {
        const b = t.indexOf(h.target);
        o[b] = h;
      }), s = null, a = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((v) => i.observe(v));
  }
  function f() {
    i && i.disconnect(), c = !0;
  }
  function m(v) {
    return ir(o).reduce((h, b) => {
      const x = parseInt(b), {
        isIntersecting: y
      } = o[x];
      return (v && y || !v && !y) && h.push(x), h;
    }, []);
  }
  function p(v = !0) {
    if (v && s) return s;
    if (!v && a) return a;
    const h = m(v);
    return v && (s = h), v || (a = h), h;
  }
  return {
    init: d,
    destroy: f,
    get: p
  };
}
function rE(e, t, n, r, o, s) {
  const {
    measureSize: a,
    startEdge: i,
    endEdge: c
  } = e, d = n[0] && o, f = v(), m = h(), p = n.map(a), g = b();
  function v() {
    if (!d) return 0;
    const y = n[0];
    return ye(t[i] - y[i]);
  }
  function h() {
    if (!d) return 0;
    const y = s.getComputedStyle(Ye(r));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function b() {
    return n.map((y, w, S) => {
      const N = !w, C = ii(S, w);
      return N ? p[w] + f : C ? p[w] + m : S[w + 1][i] - y[i];
    }).map(ye);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: g,
    startGap: f,
    endGap: m
  };
}
function oE(e, t, n, r, o, s, a, i, c) {
  const {
    startEdge: d,
    endEdge: f,
    direction: m
  } = e, p = si(n);
  function g(x, y) {
    return ar(x).filter((w) => w % y === 0).map((w) => x.slice(w, w + y));
  }
  function v(x) {
    return x.length ? ar(x).reduce((y, w, S) => {
      const N = Ye(y) || 0, C = N === 0, E = w === Sr(x), R = o[d] - s[N][d], T = o[d] - s[w][f], k = !r && C ? m(a) : 0, F = !r && E ? m(i) : 0, K = ye(T - F - (R + k));
      return S && K > t + c && y.push(w), E && y.push(x.length), y;
    }, []).map((y, w, S) => {
      const N = Math.max(S[w - 1] || 0);
      return x.slice(N, y);
    }) : [];
  }
  function h(x) {
    return p ? g(x, n) : v(x);
  }
  return {
    groupSlides: h
  };
}
function sE(e, t, n, r, o, s, a) {
  const {
    align: i,
    axis: c,
    direction: d,
    startIndex: f,
    loop: m,
    duration: p,
    dragFree: g,
    dragThreshold: v,
    inViewThreshold: h,
    slidesToScroll: b,
    skipSnaps: x,
    containScroll: y,
    watchResize: w,
    watchSlides: S,
    watchDrag: N,
    watchFocus: C
  } = s, E = 2, R = WN(), T = R.measure(t), k = n.map(R.measure), F = FN(c, d), K = F.measureSize(T), q = BN(K), D = jN(i, K), H = !m && !!y, B = m || !!y, {
    slideSizes: X,
    slideSizesWithGaps: _,
    startGap: L,
    endGap: A
  } = rE(F, T, k, n, B, o), G = oE(F, K, b, m, T, k, L, A, E), {
    snaps: P,
    snapsAligned: $
  } = qN(F, D, T, k, G), z = -Ye(P) + Ye(_), {
    snapsContained: V,
    scrollContainLimit: J
  } = YN(K, z, $, y, E), O = H ? V : $, {
    limit: U
  } = GN(z, O, m), te = Fd(Sr(O), f, m), ee = te.clone(), ne = ar(n), Y = ({
    dragHandler: Ct,
    scrollBody: zn,
    scrollBounds: Yn,
    options: {
      loop: cn
    }
  }) => {
    cn || Yn.constrain(Ct.pointerDown()), zn.seek();
  }, ie = ({
    scrollBody: Ct,
    translate: zn,
    location: Yn,
    offsetLocation: cn,
    previousLocation: ws,
    scrollLooper: Cs,
    slideLooper: Ss,
    dragHandler: Vr,
    animation: Ns,
    eventHandler: ae,
    scrollBounds: de,
    options: {
      loop: se
    }
  }, ue) => {
    const Me = Ct.settled(), le = !de.shouldConstrain(), Hr = se ? Me : Me && le, zr = Hr && !Vr.pointerDown();
    zr && Ns.stop();
    const Es = Yn.get() * ue + ws.get() * (1 - ue);
    cn.set(Es), se && (Cs.loop(Ct.direction()), Ss.loop()), zn.to(cn.get()), zr && ae.emit("settle"), Hr || ae.emit("scroll");
  }, fe = IN(r, o, () => Y(Hn), (Ct) => ie(Hn, Ct)), we = 0.68, Re = O[te.get()], ke = Zn(Re), dt = Zn(Re), Xe = Zn(Re), ft = Zn(Re), Wt = HN(ke, Xe, dt, ft, p, we), Vn = ZN(m, O, z, U, ft), on = QN(fe, te, ee, Wt, Vn, ft, a), sn = UN(U), an = cr(), xs = nE(t, n, a, h), {
    slideRegistry: Br
  } = XN(H, y, O, J, G, ne), ys = JN(e, n, Br, on, Wt, an, a, C), Hn = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: a,
    containerRect: T,
    slideRects: k,
    animation: fe,
    axis: F,
    dragHandler: LN(F, e, r, o, ft, $N(F, o), ke, fe, on, Wt, Vn, te, a, q, g, v, x, we, N),
    eventStore: an,
    percentOfView: q,
    index: te,
    indexPrevious: ee,
    limit: U,
    location: ke,
    offsetLocation: Xe,
    previousLocation: dt,
    options: s,
    resizeHandler: VN(t, a, o, n, F, w, R),
    scrollBody: Wt,
    scrollBounds: zN(U, Xe, ft, Wt, q),
    scrollLooper: KN(z, U, Xe, [ke, Xe, dt, ft]),
    scrollProgress: sn,
    scrollSnapList: O.map(sn.get),
    scrollSnaps: O,
    scrollTarget: Vn,
    scrollTo: on,
    slideLooper: eE(F, K, z, X, _, P, O, Xe, n),
    slideFocus: ys,
    slidesHandler: tE(t, a, S),
    slidesInView: xs,
    slideIndexes: ne,
    slideRegistry: Br,
    slidesToScroll: G,
    target: ft,
    translate: Ld(F, t)
  };
  return Hn;
}
function aE() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function r(d) {
    return e[d] || [];
  }
  function o(d) {
    return r(d).forEach((f) => f(t, d)), c;
  }
  function s(d, f) {
    return e[d] = r(d).concat([f]), c;
  }
  function a(d, f) {
    return e[d] = r(d).filter((m) => m !== f), c;
  }
  function i() {
    e = {};
  }
  const c = {
    init: n,
    emit: o,
    off: a,
    on: s,
    clear: i
  };
  return c;
}
const iE = {
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
function cE(e) {
  function t(s, a) {
    return Id(s, a || {});
  }
  function n(s) {
    const a = s.breakpoints || {}, i = ir(a).filter((c) => e.matchMedia(c).matches).map((c) => a[c]).reduce((c, d) => t(c, d), {});
    return t(s, i);
  }
  function r(s) {
    return s.map((a) => ir(a.breakpoints || {})).reduce((a, i) => a.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function lE(e) {
  let t = [];
  function n(s, a) {
    return t = a.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(s, e)), a.reduce((i, c) => Object.assign(i, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((s) => s.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function mo(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, s = cE(o), a = lE(s), i = cr(), c = aE(), {
    mergeOptions: d,
    optionsAtMedia: f,
    optionsMediaQueries: m
  } = s, {
    on: p,
    off: g,
    emit: v
  } = c, h = F;
  let b = !1, x, y = d(iE, mo.globalOptions), w = d(y), S = [], N, C, E;
  function R() {
    const {
      container: ne,
      slides: Y
    } = w;
    C = (sa(ne) ? e.querySelector(ne) : ne) || e.children[0];
    const fe = sa(Y) ? C.querySelectorAll(Y) : Y;
    E = [].slice.call(fe || C.children);
  }
  function T(ne) {
    const Y = sE(e, C, E, r, o, ne, c);
    if (ne.loop && !Y.slideLooper.canLoop()) {
      const ie = Object.assign({}, ne, {
        loop: !1
      });
      return T(ie);
    }
    return Y;
  }
  function k(ne, Y) {
    b || (y = d(y, ne), w = f(y), S = Y || S, R(), x = T(w), m([y, ...S.map(({
      options: ie
    }) => ie)]).forEach((ie) => i.add(ie, "change", F)), w.active && (x.translate.to(x.location.get()), x.animation.init(), x.slidesInView.init(), x.slideFocus.init(ee), x.eventHandler.init(ee), x.resizeHandler.init(ee), x.slidesHandler.init(ee), x.options.loop && x.slideLooper.loop(), C.offsetParent && E.length && x.dragHandler.init(ee), N = a.init(ee, S)));
  }
  function F(ne, Y) {
    const ie = G();
    K(), k(d({
      startIndex: ie
    }, ne), Y), c.emit("reInit");
  }
  function K() {
    x.dragHandler.destroy(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), x.animation.destroy(), a.destroy(), i.clear();
  }
  function q() {
    b || (b = !0, i.clear(), K(), c.emit("destroy"), c.clear());
  }
  function D(ne, Y, ie) {
    !w.active || b || (x.scrollBody.useBaseFriction().useDuration(Y === !0 ? 0 : w.duration), x.scrollTo.index(ne, ie || 0));
  }
  function H(ne) {
    const Y = x.index.add(1).get();
    D(Y, ne, -1);
  }
  function B(ne) {
    const Y = x.index.add(-1).get();
    D(Y, ne, 1);
  }
  function X() {
    return x.index.add(1).get() !== G();
  }
  function _() {
    return x.index.add(-1).get() !== G();
  }
  function L() {
    return x.scrollSnapList;
  }
  function A() {
    return x.scrollProgress.get(x.offsetLocation.get());
  }
  function G() {
    return x.index.get();
  }
  function P() {
    return x.indexPrevious.get();
  }
  function $() {
    return x.slidesInView.get();
  }
  function z() {
    return x.slidesInView.get(!1);
  }
  function V() {
    return N;
  }
  function J() {
    return x;
  }
  function O() {
    return e;
  }
  function U() {
    return C;
  }
  function te() {
    return E;
  }
  const ee = {
    canScrollNext: X,
    canScrollPrev: _,
    containerNode: U,
    internalEngine: J,
    destroy: q,
    off: g,
    on: p,
    emit: v,
    plugins: V,
    previousScrollSnap: P,
    reInit: h,
    rootNode: O,
    scrollNext: H,
    scrollPrev: B,
    scrollProgress: A,
    scrollSnapList: L,
    scrollTo: D,
    selectedScrollSnap: G,
    slideNodes: te,
    slidesInView: $,
    slidesNotInView: z
  };
  return k(t, n), setTimeout(() => c.emit("init"), 0), ee;
}
mo.globalOptions = void 0;
function ci(e = {}, t = []) {
  const n = Yt(e), r = Yt(t), [o, s] = Le(), [a, i] = Le(), c = De(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return gt(() => {
    oi(n.current, e) || (n.current = e, c());
  }, [e, c]), gt(() => {
    AN(r.current, t) || (r.current = t, c());
  }, [t, c]), gt(() => {
    if (DN() && a) {
      mo.globalOptions = ci.globalOptions;
      const d = mo(a, n.current, r.current);
      return s(d), () => d.destroy();
    } else
      s(void 0);
  }, [a, s]), [i, o];
}
ci.globalOptions = void 0;
const $d = u.createContext(null);
function $o() {
  const e = u.useContext($d);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const uE = u.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: s,
    ...a
  }, i) => {
    const [c, d] = ci(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [f, m] = u.useState(!1), [p, g] = u.useState(!1), v = u.useCallback((y) => {
      y && (m(y.canScrollPrev()), g(y.canScrollNext()));
    }, []), h = u.useCallback(() => {
      d?.scrollPrev();
    }, [d]), b = u.useCallback(() => {
      d?.scrollNext();
    }, [d]), x = u.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), h()) : y.key === "ArrowRight" && (y.preventDefault(), b());
      },
      [h, b]
    );
    return u.useEffect(() => {
      !d || !n || n(d);
    }, [d, n]), u.useEffect(() => {
      if (d)
        return v(d), d.on("reInit", v), d.on("select", v), () => {
          d?.off("select", v);
        };
    }, [d, v]), /* @__PURE__ */ l.jsx(
      $d.Provider,
      {
        value: {
          carouselRef: c,
          api: d,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: b,
          canScrollPrev: f,
          canScrollNext: p
        },
        children: /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: x,
            className: M("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...a,
            children: s
          }
        )
      }
    );
  }
);
uE.displayName = "Carousel";
const dE = u.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = $o();
  return /* @__PURE__ */ l.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: M(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
dE.displayName = "CarouselContent";
const fE = u.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = $o();
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: M(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
fE.displayName = "CarouselItem";
const mE = u.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollPrev: a, canScrollPrev: i } = $o();
  return /* @__PURE__ */ l.jsxs(
    wt,
    {
      ref: o,
      variant: t,
      size: n,
      className: M(
        "absolute  h-8 w-8 rounded-full",
        s === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(sv, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
mE.displayName = "CarouselPrevious";
const pE = u.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollNext: a, canScrollNext: i } = $o();
  return /* @__PURE__ */ l.jsxs(
    wt,
    {
      ref: o,
      variant: t,
      size: n,
      className: M(
        "absolute h-8 w-8 rounded-full",
        s === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(av, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
pE.displayName = "CarouselNext";
const hE = { light: "", dark: ".dark" }, Wd = u.createContext(null);
function Bd() {
  const e = u.useContext(Wd);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const gE = u.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, s) => {
  const a = u.useId(), i = `chart-${e || a.replace(/:/g, "")}`;
  return /* @__PURE__ */ l.jsx(Wd.Provider, { value: { config: r }, children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-chart": i,
      ref: s,
      className: M(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ l.jsx(vE, { id: i, config: r }),
        /* @__PURE__ */ l.jsx(Oa.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
gE.displayName = "Chart";
const vE = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ l.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(hE).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([s, a]) => {
            const i = a.theme?.[r] || a.color;
            return i ? `  --color-${s}: ${i};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, nA = Oa.Tooltip, bE = u.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: s = !1,
    label: a,
    labelFormatter: i,
    labelClassName: c,
    formatter: d,
    color: f,
    nameKey: m,
    labelKey: p
  }, g) => {
    const { config: v } = Bd(), h = u.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [x] = t;
      if (!x)
        return null;
      const y = `${p || x.dataKey || x.name || "value"}`, w = ia(v, x, y), S = !p && typeof a == "string" ? v[a]?.label || a : w?.label;
      return i ? /* @__PURE__ */ l.jsx("div", { className: M("font-medium", c), children: i(S, t) }) : S ? /* @__PURE__ */ l.jsx("div", { className: M("font-medium", c), children: S }) : null;
    }, [
      a,
      i,
      t,
      o,
      c,
      v,
      p
    ]);
    if (!e || !t?.length)
      return null;
    const b = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: g,
        className: M(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          b ? null : h,
          /* @__PURE__ */ l.jsx("div", { className: "grid gap-1.5", children: t.map((x, y) => {
            if (!x)
              return null;
            const w = `${m || x.dataKey || x.name || "value"}`, S = ia(v, x, w), N = f || x.payload.fill || x.color;
            return /* @__PURE__ */ l.jsx(
              "div",
              {
                className: M(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: d && x?.value !== void 0 && x.name ? d(x.value, x.name, x, y, x.payload) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  S?.icon ? /* @__PURE__ */ l.jsx(S.icon, {}) : !s && /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: M(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": b && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": N,
                        "--color-border": N
                      }
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: M(
                        "flex flex-1 justify-between leading-none",
                        b ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ l.jsxs("div", { className: "grid gap-1.5", children: [
                          b ? h : null,
                          /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: S?.label || x.name })
                        ] }),
                        x.value && /* @__PURE__ */ l.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: x.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              x.dataKey
            );
          }) })
        ]
      }
    );
  }
);
bE.displayName = "ChartTooltip";
const rA = Oa.Legend, xE = u.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, s) => {
    const { config: a } = Bd();
    return n?.length ? /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: s,
        className: M(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((i) => {
          if (!i)
            return null;
          const c = `${o || i.dataKey || "value"}`, d = ia(a, i, c);
          return /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: M(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                d?.icon && !t ? /* @__PURE__ */ l.jsx(d.icon, {}) : /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: i.color
                    }
                  }
                ),
                d?.label
              ]
            },
            i.value
          );
        })
      }
    ) : null;
  }
);
xE.displayName = "ChartLegend";
function ia(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function Nr(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Wo(e) {
  const [t, n] = u.useState(void 0);
  return ge(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          a = d.inlineSize, i = d.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Bo = "Checkbox", [yE, oA] = Ce(Bo), [wE, li] = yE(Bo);
function CE(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: s,
    form: a,
    name: i,
    onCheckedChange: c,
    required: d,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [p, g] = Se({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Bo
  }), [v, h] = u.useState(null), [b, x] = u.useState(null), y = u.useRef(!1), w = v ? !!a || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: p,
    disabled: s,
    setChecked: g,
    control: v,
    setControl: h,
    name: i,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: y,
    required: d,
    defaultChecked: Rt(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: b,
    setBubbleInput: x
  };
  return /* @__PURE__ */ l.jsx(
    wE,
    {
      scope: t,
      ...S,
      children: SE(m) ? m(S) : r
    }
  );
}
var Vd = "CheckboxTrigger", Hd = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: s,
      value: a,
      disabled: i,
      checked: c,
      required: d,
      setControl: f,
      setChecked: m,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: g,
      bubbleInput: v
    } = li(Vd, e), h = oe(o, f), b = u.useRef(c);
    return u.useEffect(() => {
      const x = s?.form;
      if (x) {
        const y = () => m(b.current);
        return x.addEventListener("reset", y), () => x.removeEventListener("reset", y);
      }
    }, [s, m]), /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Rt(c) ? "mixed" : c,
        "aria-required": d,
        "data-state": Ud(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: h,
        onKeyDown: j(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: j(n, (x) => {
          m((y) => Rt(y) ? !0 : !y), v && g && (p.current = x.isPropagationStopped(), p.current || x.stopPropagation());
        })
      }
    );
  }
);
Hd.displayName = Vd;
var ui = u.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: c,
      onCheckedChange: d,
      form: f,
      ...m
    } = e;
    return /* @__PURE__ */ l.jsx(
      CE,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: s,
        disabled: i,
        required: a,
        onCheckedChange: d,
        name: r,
        form: f,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Hd,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ l.jsx(
            Kd,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
ui.displayName = Bo;
var zd = "CheckboxIndicator", Yd = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = li(zd, n);
    return /* @__PURE__ */ l.jsx(
      ve,
      {
        present: r || Rt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          W.span,
          {
            "data-state": Ud(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Yd.displayName = zd;
var Gd = "CheckboxBubbleInput", Kd = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      name: d,
      value: f,
      form: m,
      bubbleInput: p,
      setBubbleInput: g
    } = li(Gd, e), v = oe(n, g), h = Nr(s), b = Wo(r);
    u.useEffect(() => {
      const y = p;
      if (!y) return;
      const w = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, C = !o.current;
      if (h !== s && N) {
        const E = new Event("click", { bubbles: C });
        y.indeterminate = Rt(s), N.call(y, Rt(s) ? !1 : s), y.dispatchEvent(E);
      }
    }, [p, h, s, o]);
    const x = u.useRef(Rt(s) ? !1 : s);
    return /* @__PURE__ */ l.jsx(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? x.current,
        required: i,
        disabled: c,
        name: d,
        value: f,
        form: m,
        ...t,
        tabIndex: -1,
        ref: v,
        style: {
          ...t.style,
          ...b,
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
Kd.displayName = Gd;
function SE(e) {
  return typeof e == "function";
}
function Rt(e) {
  return e === "indeterminate";
}
function Ud(e) {
  return Rt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const NE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  ui,
  {
    ref: n,
    className: M(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      Yd,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ l.jsx(hr, { className: "size-4 h-full" })
      }
    )
  }
));
NE.displayName = ui.displayName;
function sA({
  name: e,
  label: t,
  options: n,
  placeholder: r = "Selecione uma opção",
  searchPlaceholder: o = "Buscar...",
  emptyMessage: s = "Nenhum resultado encontrado.",
  disabled: a = !1,
  isLoading: i = !1
}) {
  const { control: c, setValue: d } = Tn();
  return /* @__PURE__ */ l.jsx(
    Lr,
    {
      control: c,
      name: e,
      render: ({ field: f }) => /* @__PURE__ */ l.jsxs(Ln, { children: [
        !!t && /* @__PURE__ */ l.jsx($n, { children: t }),
        /* @__PURE__ */ l.jsx(
          EE,
          {
            placeholder: r,
            searchPlaceholder: o,
            emptyMessage: s,
            options: n,
            selected: f.value,
            onSelect: (m) => d(e, m, { shouldValidate: !0 }),
            disabled: a,
            isLoading: i
          }
        ),
        /* @__PURE__ */ l.jsx(Wn, {})
      ] })
    }
  );
}
function EE({
  label: e,
  options: t,
  selected: n,
  onSelect: r,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: a = "Nenhum resultado encontrado.",
  error: i,
  disabled: c = !1,
  isLoading: d = !1
}) {
  const [f, m] = Le(!1);
  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ l.jsx(os, { children: e }),
    /* @__PURE__ */ l.jsxs(Ar, { open: f, onOpenChange: m, children: [
      /* @__PURE__ */ l.jsx(_r, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
        wt,
        {
          variant: "outline",
          disabled: c,
          className: M(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !n && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ l.jsx("div", { className: "truncate", children: n ? t.find((p) => p.value === n)?.label : o }),
            /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-1", children: [
              d && /* @__PURE__ */ l.jsx(nr, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ l.jsx(xl, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx(Fn, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ l.jsxs(Rr, { children: [
        /* @__PURE__ */ l.jsx(Ho, { placeholder: s }),
        /* @__PURE__ */ l.jsxs(zo, { children: [
          /* @__PURE__ */ l.jsx(Yo, { children: a }),
          /* @__PURE__ */ l.jsx(Mr, { children: t.map((p) => /* @__PURE__ */ l.jsxs(
            Gt,
            {
              value: p.label,
              onSelect: () => {
                n === p.value ? r(void 0) : r(p.value), m(!1);
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  hr,
                  {
                    className: M(
                      "mr-2 size-4",
                      n === p.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "w-0 flex-1", children: p.label })
              ]
            },
            p.value
          )) })
        ] })
      ] }) })
    ] }),
    !!i && /* @__PURE__ */ l.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: i })
  ] });
}
var Gc = 1, RE = 0.9, ME = 0.8, TE = 0.17, Hs = 0.1, zs = 0.999, PE = 0.9999, kE = 0.99, DE = /[\\\/_+.#"@\[\(\{&]/, AE = /[\\\/_+.#"@\[\(\{&]/g, _E = /[\s-]/, qd = /[\s-]/g;
function ca(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? Gc : kE;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), d = n.indexOf(c, o), f = 0, m, p, g, v; d >= 0; ) m = ca(e, t, n, r, d + 1, s + 1, a), m > f && (d === o ? m *= Gc : DE.test(e.charAt(d - 1)) ? (m *= ME, g = e.slice(o, d - 1).match(AE), g && o > 0 && (m *= Math.pow(zs, g.length))) : _E.test(e.charAt(d - 1)) ? (m *= RE, v = e.slice(o, d - 1).match(qd), v && o > 0 && (m *= Math.pow(zs, v.length))) : (m *= TE, o > 0 && (m *= Math.pow(zs, d - o))), e.charAt(d) !== t.charAt(s) && (m *= PE)), (m < Hs && n.charAt(d - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(d - 1) !== r.charAt(s)) && (p = ca(e, t, n, r, d + 1, s + 2, a), p * Hs > m && (m = p * Hs)), m > f && (f = m), d = n.indexOf(c, d + 1);
  return a[i] = f, f;
}
function Kc(e) {
  return e.toLowerCase().replace(qd, " ");
}
function OE(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ca(e, t, Kc(e), Kc(t), 0, 0, {});
}
var qn = '[cmdk-group=""]', Ys = '[cmdk-group-items=""]', jE = '[cmdk-group-heading=""]', Xd = '[cmdk-item=""]', Uc = `${Xd}:not([aria-disabled="true"])`, la = "cmdk-item-select", gn = "data-value", IE = (e, t, n) => OE(e, t, n), Zd = u.createContext(void 0), Er = () => u.useContext(Zd), Qd = u.createContext(void 0), di = () => u.useContext(Qd), Jd = u.createContext(void 0), ef = u.forwardRef((e, t) => {
  let n = vn(() => {
    var P, $;
    return { search: "", value: ($ = (P = e.value) != null ? P : e.defaultValue) != null ? $ : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = vn(() => /* @__PURE__ */ new Set()), o = vn(() => /* @__PURE__ */ new Map()), s = vn(() => /* @__PURE__ */ new Map()), a = vn(() => /* @__PURE__ */ new Set()), i = tf(e), { label: c, children: d, value: f, onValueChange: m, filter: p, shouldFilter: g, loop: v, disablePointerSelection: h = !1, vimBindings: b = !0, ...x } = e, y = be(), w = be(), S = be(), N = u.useRef(null), C = KE();
  Xt(() => {
    if (f !== void 0) {
      let P = f.trim();
      n.current.value = P, E.emit();
    }
  }, [f]), Xt(() => {
    C(6, q);
  }, []);
  let E = u.useMemo(() => ({ subscribe: (P) => (a.current.add(P), () => a.current.delete(P)), snapshot: () => n.current, setState: (P, $, z) => {
    var V, J, O, U;
    if (!Object.is(n.current[P], $)) {
      if (n.current[P] = $, P === "search") K(), k(), C(1, F);
      else if (P === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let te = document.getElementById(S);
          te ? te.focus() : (V = document.getElementById(y)) == null || V.focus();
        }
        if (C(7, () => {
          var te;
          n.current.selectedItemId = (te = D()) == null ? void 0 : te.id, E.emit();
        }), z || C(5, q), ((J = i.current) == null ? void 0 : J.value) !== void 0) {
          let te = $ ?? "";
          (U = (O = i.current).onValueChange) == null || U.call(O, te);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    a.current.forEach((P) => P());
  } }), []), R = u.useMemo(() => ({ value: (P, $, z) => {
    var V;
    $ !== ((V = s.current.get(P)) == null ? void 0 : V.value) && (s.current.set(P, { value: $, keywords: z }), n.current.filtered.items.set(P, T($, z)), C(2, () => {
      k(), E.emit();
    }));
  }, item: (P, $) => (r.current.add(P), $ && (o.current.has($) ? o.current.get($).add(P) : o.current.set($, /* @__PURE__ */ new Set([P]))), C(3, () => {
    K(), k(), n.current.value || F(), E.emit();
  }), () => {
    s.current.delete(P), r.current.delete(P), n.current.filtered.items.delete(P);
    let z = D();
    C(4, () => {
      K(), z?.getAttribute("id") === P && F(), E.emit();
    });
  }), group: (P) => (o.current.has(P) || o.current.set(P, /* @__PURE__ */ new Set()), () => {
    s.current.delete(P), o.current.delete(P);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: y, inputId: S, labelId: w, listInnerRef: N }), []);
  function T(P, $) {
    var z, V;
    let J = (V = (z = i.current) == null ? void 0 : z.filter) != null ? V : IE;
    return P ? J(P, n.current.search, $) : 0;
  }
  function k() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let P = n.current.filtered.items, $ = [];
    n.current.filtered.groups.forEach((V) => {
      let J = o.current.get(V), O = 0;
      J.forEach((U) => {
        let te = P.get(U);
        O = Math.max(te, O);
      }), $.push([V, O]);
    });
    let z = N.current;
    H().sort((V, J) => {
      var O, U;
      let te = V.getAttribute("id"), ee = J.getAttribute("id");
      return ((O = P.get(ee)) != null ? O : 0) - ((U = P.get(te)) != null ? U : 0);
    }).forEach((V) => {
      let J = V.closest(Ys);
      J ? J.appendChild(V.parentElement === J ? V : V.closest(`${Ys} > *`)) : z.appendChild(V.parentElement === z ? V : V.closest(`${Ys} > *`));
    }), $.sort((V, J) => J[1] - V[1]).forEach((V) => {
      var J;
      let O = (J = N.current) == null ? void 0 : J.querySelector(`${qn}[${gn}="${encodeURIComponent(V[0])}"]`);
      O?.parentElement.appendChild(O);
    });
  }
  function F() {
    let P = H().find((z) => z.getAttribute("aria-disabled") !== "true"), $ = P?.getAttribute(gn);
    E.setState("value", $ || void 0);
  }
  function K() {
    var P, $, z, V;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let J = 0;
    for (let O of r.current) {
      let U = ($ = (P = s.current.get(O)) == null ? void 0 : P.value) != null ? $ : "", te = (V = (z = s.current.get(O)) == null ? void 0 : z.keywords) != null ? V : [], ee = T(U, te);
      n.current.filtered.items.set(O, ee), ee > 0 && J++;
    }
    for (let [O, U] of o.current) for (let te of U) if (n.current.filtered.items.get(te) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = J;
  }
  function q() {
    var P, $, z;
    let V = D();
    V && (((P = V.parentElement) == null ? void 0 : P.firstChild) === V && ((z = ($ = V.closest(qn)) == null ? void 0 : $.querySelector(jE)) == null || z.scrollIntoView({ block: "nearest" })), V.scrollIntoView({ block: "nearest" }));
  }
  function D() {
    var P;
    return (P = N.current) == null ? void 0 : P.querySelector(`${Xd}[aria-selected="true"]`);
  }
  function H() {
    var P;
    return Array.from(((P = N.current) == null ? void 0 : P.querySelectorAll(Uc)) || []);
  }
  function B(P) {
    let $ = H()[P];
    $ && E.setState("value", $.getAttribute(gn));
  }
  function X(P) {
    var $;
    let z = D(), V = H(), J = V.findIndex((U) => U === z), O = V[J + P];
    ($ = i.current) != null && $.loop && (O = J + P < 0 ? V[V.length - 1] : J + P === V.length ? V[0] : V[J + P]), O && E.setState("value", O.getAttribute(gn));
  }
  function _(P) {
    let $ = D(), z = $?.closest(qn), V;
    for (; z && !V; ) z = P > 0 ? YE(z, qn) : GE(z, qn), V = z?.querySelector(Uc);
    V ? E.setState("value", V.getAttribute(gn)) : X(P);
  }
  let L = () => B(H().length - 1), A = (P) => {
    P.preventDefault(), P.metaKey ? L() : P.altKey ? _(1) : X(1);
  }, G = (P) => {
    P.preventDefault(), P.metaKey ? B(0) : P.altKey ? _(-1) : X(-1);
  };
  return u.createElement(W.div, { ref: t, tabIndex: -1, ...x, "cmdk-root": "", onKeyDown: (P) => {
    var $;
    ($ = x.onKeyDown) == null || $.call(x, P);
    let z = P.nativeEvent.isComposing || P.keyCode === 229;
    if (!(P.defaultPrevented || z)) switch (P.key) {
      case "n":
      case "j": {
        b && P.ctrlKey && A(P);
        break;
      }
      case "ArrowDown": {
        A(P);
        break;
      }
      case "p":
      case "k": {
        b && P.ctrlKey && G(P);
        break;
      }
      case "ArrowUp": {
        G(P);
        break;
      }
      case "Home": {
        P.preventDefault(), B(0);
        break;
      }
      case "End": {
        P.preventDefault(), L();
        break;
      }
      case "Enter": {
        P.preventDefault();
        let V = D();
        if (V) {
          let J = new Event(la);
          V.dispatchEvent(J);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: qE }, c), Vo(e, (P) => u.createElement(Qd.Provider, { value: E }, u.createElement(Zd.Provider, { value: R }, P))));
}), FE = u.forwardRef((e, t) => {
  var n, r;
  let o = be(), s = u.useRef(null), a = u.useContext(Jd), i = Er(), c = tf(e), d = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a?.forceMount;
  Xt(() => {
    if (!d) return i.item(o, a?.id);
  }, [d]);
  let f = nf(o, s, [e.value, e.children, s], e.keywords), m = di(), p = Pt((C) => C.value && C.value === f.current), g = Pt((C) => d || i.filter() === !1 ? !0 : C.search ? C.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let C = s.current;
    if (!(!C || e.disabled)) return C.addEventListener(la, v), () => C.removeEventListener(la, v);
  }, [g, e.onSelect, e.disabled]);
  function v() {
    var C, E;
    h(), (E = (C = c.current).onSelect) == null || E.call(C, f.current);
  }
  function h() {
    m.setState("value", f.current, !0);
  }
  if (!g) return null;
  let { disabled: b, value: x, onSelect: y, forceMount: w, keywords: S, ...N } = e;
  return u.createElement(W.div, { ref: st(s, t), ...N, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!p, "data-disabled": !!b, "data-selected": !!p, onPointerMove: b || i.getDisablePointerSelection() ? void 0 : h, onClick: b ? void 0 : v }, e.children);
}), LE = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = be(), i = u.useRef(null), c = u.useRef(null), d = be(), f = Er(), m = Pt((g) => o || f.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(a) : !0);
  Xt(() => f.group(a), []), nf(a, i, [e.value, e.heading, c]);
  let p = u.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return u.createElement(W.div, { ref: st(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Vo(e, (g) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(Jd.Provider, { value: p }, g))));
}), $E = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), s = Pt((a) => !a.search);
  return !n && !s ? null : u.createElement(W.div, { ref: st(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), WE = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = di(), a = Pt((d) => d.search), i = Pt((d) => d.selectedItemId), c = Er();
  return u.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), u.createElement(W.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (d) => {
    o || s.setState("search", d.target.value), n?.(d.target.value);
  } });
}), BE = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = u.useRef(null), a = u.useRef(null), i = Pt((d) => d.selectedItemId), c = Er();
  return u.useEffect(() => {
    if (a.current && s.current) {
      let d = a.current, f = s.current, m, p = new ResizeObserver(() => {
        m = requestAnimationFrame(() => {
          let g = d.offsetHeight;
          f.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(m), p.unobserve(d);
      };
    }
  }, []), u.createElement(W.div, { ref: st(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, Vo(e, (d) => u.createElement("div", { ref: st(a, c.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), VE = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return u.createElement(Oo, { open: n, onOpenChange: r }, u.createElement(jo, { container: a }, u.createElement(Dn, { "cmdk-overlay": "", className: o }), u.createElement(An, { "aria-label": e.label, "cmdk-dialog": "", className: s }, u.createElement(ef, { ref: t, ...i }))));
}), HE = u.forwardRef((e, t) => Pt((n) => n.filtered.count === 0) ? u.createElement(W.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), zE = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return u.createElement(W.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Vo(e, (a) => u.createElement("div", { "aria-hidden": !0 }, a)));
}), Ae = Object.assign(ef, { List: BE, Item: FE, Input: WE, Group: LE, Separator: $E, Dialog: VE, Empty: HE, Loading: zE });
function YE(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function GE(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function tf(e) {
  let t = u.useRef(e);
  return Xt(() => {
    t.current = e;
  }), t;
}
var Xt = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function vn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Pt(e) {
  let t = di(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function nf(e, t, n, r = []) {
  let o = u.useRef(), s = Er();
  return Xt(() => {
    var a;
    let i = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), c = r.map((d) => d.trim());
    s.value(e, i, c), (a = t.current) == null || a.setAttribute(gn, i), o.current = i;
  }), o;
}
var KE = () => {
  let [e, t] = u.useState(), n = vn(() => /* @__PURE__ */ new Map());
  return Xt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function UE(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Vo({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(UE(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var qE = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Rr = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ae,
  {
    ref: n,
    className: M(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Rr.displayName = Ae.displayName;
const aA = ({ children: e, ...t }) => /* @__PURE__ */ l.jsx(BR, { ...t, children: /* @__PURE__ */ l.jsx(Hf, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ l.jsx(Rr, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Ho = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l.jsx(iv, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ l.jsx(
    Ae.Input,
    {
      ref: n,
      className: M(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
Ho.displayName = Ae.Input.displayName;
const zo = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ae.List,
  {
    ref: n,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
zo.displayName = Ae.List.displayName;
const Yo = u.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  Ae.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Yo.displayName = Ae.Empty.displayName;
const Mr = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ae.Group,
  {
    ref: n,
    className: M(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Mr.displayName = Ae.Group.displayName;
const rf = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ae.Separator,
  {
    ref: n,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
rf.displayName = Ae.Separator.displayName;
const Gt = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ae.Item,
  {
    ref: n,
    className: M(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Gt.displayName = Ae.Item.displayName;
const XE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
XE.displayName = "CommandShortcut";
const ZE = ["top", "right", "bottom", "left"], kt = Math.min, Oe = Math.max, po = Math.round, eo = Math.floor, ot = (e) => ({
  x: e,
  y: e
}), QE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, JE = {
  start: "end",
  end: "start"
};
function ua(e, t, n) {
  return Oe(e, kt(t, n));
}
function vt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function jn(e) {
  return e.split("-")[1];
}
function fi(e) {
  return e === "x" ? "y" : "x";
}
function mi(e) {
  return e === "y" ? "height" : "width";
}
const e0 = /* @__PURE__ */ new Set(["top", "bottom"]);
function rt(e) {
  return e0.has(bt(e)) ? "y" : "x";
}
function pi(e) {
  return fi(rt(e));
}
function t0(e, t, n) {
  n === void 0 && (n = !1);
  const r = jn(e), o = pi(e), s = mi(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = ho(a)), [a, ho(a)];
}
function n0(e) {
  const t = ho(e);
  return [da(e), t, da(t)];
}
function da(e) {
  return e.replace(/start|end/g, (t) => JE[t]);
}
const qc = ["left", "right"], Xc = ["right", "left"], r0 = ["top", "bottom"], o0 = ["bottom", "top"];
function s0(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Xc : qc : t ? qc : Xc;
    case "left":
    case "right":
      return t ? r0 : o0;
    default:
      return [];
  }
}
function a0(e, t, n, r) {
  const o = jn(e);
  let s = s0(bt(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(da)))), s;
}
function ho(e) {
  return e.replace(/left|right|bottom|top/g, (t) => QE[t]);
}
function i0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function of(e) {
  return typeof e != "number" ? i0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function go(e) {
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
function Zc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = rt(t), a = pi(t), i = mi(a), c = bt(t), d = s === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (jn(t)) {
    case "start":
      g[a] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      g[a] += p * (n && d ? -1 : 1);
      break;
  }
  return g;
}
const c0 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = Zc(d, r, c), p = r, g = {}, v = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: b,
      fn: x
    } = i[h], {
      x: y,
      y: w,
      data: S,
      reset: N
    } = await x({
      x: f,
      y: m,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: g,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, m = w ?? m, g = {
      ...g,
      [b]: {
        ...g[b],
        ...S
      }
    }, N && v <= 50 && (v++, typeof N == "object" && (N.placement && (p = N.placement), N.rects && (d = N.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: f,
      y: m
    } = Zc(d, p, c)), h = -1);
  }
  return {
    x: f,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: g
  };
};
async function lr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: g = 0
  } = vt(t, e), v = of(g), b = i[p ? m === "floating" ? "reference" : "floating" : m], x = go(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: c
  })), y = m === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = go(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: w,
    strategy: c
  }) : y);
  return {
    top: (x.top - N.top + v.top) / S.y,
    bottom: (N.bottom - x.bottom + v.bottom) / S.y,
    left: (x.left - N.left + v.left) / S.x,
    right: (N.right - x.right + v.right) / S.x
  };
}
const l0 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: c
    } = t, {
      element: d,
      padding: f = 0
    } = vt(e, t) || {};
    if (d == null)
      return {};
    const m = of(f), p = {
      x: n,
      y: r
    }, g = pi(o), v = mi(g), h = await a.getDimensions(d), b = g === "y", x = b ? "top" : "left", y = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[g] - p[g] - s.floating[v], N = p[g] - s.reference[g], C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let E = C ? C[w] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(C))) && (E = i.floating[w] || s.floating[v]);
    const R = S / 2 - N / 2, T = E / 2 - h[v] / 2 - 1, k = kt(m[x], T), F = kt(m[y], T), K = k, q = E - h[v] - F, D = E / 2 - h[v] / 2 + R, H = ua(K, D, q), B = !c.arrow && jn(o) != null && D !== H && s.reference[v] / 2 - (D < K ? k : F) - h[v] / 2 < 0, X = B ? D < K ? D - K : D - q : 0;
    return {
      [g]: p[g] + X,
      data: {
        [g]: H,
        centerOffset: D - H - X,
        ...B && {
          alignmentOffset: X
        }
      },
      reset: B
    };
  }
}), u0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: c,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: m = !0,
        fallbackPlacements: p,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: h = !0,
        ...b
      } = vt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = bt(o), y = rt(i), w = bt(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), N = p || (w || !h ? [ho(i)] : n0(i)), C = v !== "none";
      !p && C && N.push(...a0(i, h, v, S));
      const E = [i, ...N], R = await lr(t, b), T = [];
      let k = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && T.push(R[x]), m) {
        const D = t0(o, a, S);
        T.push(R[D[0]], R[D[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: T
      }], !T.every((D) => D <= 0)) {
        var F, K;
        const D = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1, H = E[D];
        if (H && (!(m === "alignment" ? y !== rt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((_) => rt(_.placement) === y ? _.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: k
            },
            reset: {
              placement: H
            }
          };
        let B = (K = k.filter((X) => X.overflows[0] <= 0).sort((X, _) => X.overflows[1] - _.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!B)
          switch (g) {
            case "bestFit": {
              var q;
              const X = (q = k.filter((_) => {
                if (C) {
                  const L = rt(_.placement);
                  return L === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((L) => L > 0).reduce((L, A) => L + A, 0)]).sort((_, L) => _[1] - L[1])[0]) == null ? void 0 : q[0];
              X && (B = X);
              break;
            }
            case "initialPlacement":
              B = i;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Qc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Jc(e) {
  return ZE.some((t) => e[t] >= 0);
}
const d0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = vt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await lr(t, {
            ...o,
            elementContext: "reference"
          }), a = Qc(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Jc(a)
            }
          };
        }
        case "escaped": {
          const s = await lr(t, {
            ...o,
            altBoundary: !0
          }), a = Qc(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Jc(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, sf = /* @__PURE__ */ new Set(["left", "top"]);
async function f0(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = bt(n), i = jn(n), c = rt(n) === "y", d = sf.has(a) ? -1 : 1, f = s && c ? -1 : 1, m = vt(t, e);
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: v
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return i && typeof v == "number" && (g = i === "end" ? v * -1 : v), c ? {
    x: g * f,
    y: p * d
  } : {
    x: p * d,
    y: g * f
  };
}
const m0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, c = await f0(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, p0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x,
              y
            } = b;
            return {
              x,
              y
            };
          }
        },
        ...c
      } = vt(e, t), d = {
        x: n,
        y: r
      }, f = await lr(t, c), m = rt(bt(o)), p = fi(m);
      let g = d[p], v = d[m];
      if (s) {
        const b = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", y = g + f[b], w = g - f[x];
        g = ua(y, g, w);
      }
      if (a) {
        const b = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", y = v + f[b], w = v - f[x];
        v = ua(y, v, w);
      }
      const h = i.fn({
        ...t,
        [p]: g,
        [m]: v
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [p]: s,
            [m]: a
          }
        }
      };
    }
  };
}, h0 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = vt(e, t), f = {
        x: n,
        y: r
      }, m = rt(o), p = fi(m);
      let g = f[p], v = f[m];
      const h = vt(i, t), b = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const w = p === "y" ? "height" : "width", S = s.reference[p] - s.floating[w] + b.mainAxis, N = s.reference[p] + s.reference[w] - b.mainAxis;
        g < S ? g = S : g > N && (g = N);
      }
      if (d) {
        var x, y;
        const w = p === "y" ? "width" : "height", S = sf.has(bt(o)), N = s.reference[m] - s.floating[w] + (S && ((x = a.offset) == null ? void 0 : x[m]) || 0) + (S ? 0 : b.crossAxis), C = s.reference[m] + s.reference[w] + (S ? 0 : ((y = a.offset) == null ? void 0 : y[m]) || 0) - (S ? b.crossAxis : 0);
        v < N ? v = N : v > C && (v = C);
      }
      return {
        [p]: g,
        [m]: v
      };
    }
  };
}, g0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...d
      } = vt(e, t), f = await lr(t, d), m = bt(o), p = jn(o), g = rt(o) === "y", {
        width: v,
        height: h
      } = s.floating;
      let b, x;
      m === "top" || m === "bottom" ? (b = m, x = p === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = m, b = p === "end" ? "top" : "bottom");
      const y = h - f.top - f.bottom, w = v - f.left - f.right, S = kt(h - f[b], y), N = kt(v - f[x], w), C = !t.middlewareData.shift;
      let E = S, R = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = w), (r = t.middlewareData.shift) != null && r.enabled.y && (E = y), C && !p) {
        const k = Oe(f.left, 0), F = Oe(f.right, 0), K = Oe(f.top, 0), q = Oe(f.bottom, 0);
        g ? R = v - 2 * (k !== 0 || F !== 0 ? k + F : Oe(f.left, f.right)) : E = h - 2 * (K !== 0 || q !== 0 ? K + q : Oe(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: R,
        availableHeight: E
      });
      const T = await a.getDimensions(i.floating);
      return v !== T.width || h !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Go() {
  return typeof window < "u";
}
function In(e) {
  return af(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lt(e) {
  var t;
  return (t = (af(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function af(e) {
  return Go() ? e instanceof Node || e instanceof je(e).Node : !1;
}
function Ge(e) {
  return Go() ? e instanceof Element || e instanceof je(e).Element : !1;
}
function at(e) {
  return Go() ? e instanceof HTMLElement || e instanceof je(e).HTMLElement : !1;
}
function el(e) {
  return !Go() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof je(e).ShadowRoot;
}
const v0 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Tr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ke(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !v0.has(o);
}
const b0 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function x0(e) {
  return b0.has(In(e));
}
const y0 = [":popover-open", ":modal"];
function Ko(e) {
  return y0.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const w0 = ["transform", "translate", "scale", "rotate", "perspective"], C0 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], S0 = ["paint", "layout", "strict", "content"];
function hi(e) {
  const t = gi(), n = Ge(e) ? Ke(e) : e;
  return w0.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || C0.some((r) => (n.willChange || "").includes(r)) || S0.some((r) => (n.contain || "").includes(r));
}
function N0(e) {
  let t = Dt(e);
  for (; at(t) && !Sn(t); ) {
    if (hi(t))
      return t;
    if (Ko(t))
      return null;
    t = Dt(t);
  }
  return null;
}
function gi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const E0 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Sn(e) {
  return E0.has(In(e));
}
function Ke(e) {
  return je(e).getComputedStyle(e);
}
function Uo(e) {
  return Ge(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Dt(e) {
  if (In(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    el(e) && e.host || // Fallback.
    lt(e)
  );
  return el(t) ? t.host : t;
}
function cf(e) {
  const t = Dt(e);
  return Sn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : at(t) && Tr(t) ? t : cf(t);
}
function ur(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = cf(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = je(o);
  if (s) {
    const i = fa(a);
    return t.concat(a, a.visualViewport || [], Tr(o) ? o : [], i && n ? ur(i) : []);
  }
  return t.concat(o, ur(o, [], n));
}
function fa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lf(e) {
  const t = Ke(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = at(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = po(n) !== s || po(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function vi(e) {
  return Ge(e) ? e : e.contextElement;
}
function wn(e) {
  const t = vi(e);
  if (!at(t))
    return ot(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = lf(t);
  let a = (s ? po(n.width) : n.width) / r, i = (s ? po(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const R0 = /* @__PURE__ */ ot(0);
function uf(e) {
  const t = je(e);
  return !gi() || !t.visualViewport ? R0 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function M0(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== je(e) ? !1 : t;
}
function Zt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = vi(e);
  let a = ot(1);
  t && (r ? Ge(r) && (a = wn(r)) : a = wn(e));
  const i = M0(s, n, r) ? uf(s) : ot(0);
  let c = (o.left + i.x) / a.x, d = (o.top + i.y) / a.y, f = o.width / a.x, m = o.height / a.y;
  if (s) {
    const p = je(s), g = r && Ge(r) ? je(r) : r;
    let v = p, h = fa(v);
    for (; h && r && g !== v; ) {
      const b = wn(h), x = h.getBoundingClientRect(), y = Ke(h), w = x.left + (h.clientLeft + parseFloat(y.paddingLeft)) * b.x, S = x.top + (h.clientTop + parseFloat(y.paddingTop)) * b.y;
      c *= b.x, d *= b.y, f *= b.x, m *= b.y, c += w, d += S, v = je(h), h = fa(v);
    }
  }
  return go({
    width: f,
    height: m,
    x: c,
    y: d
  });
}
function qo(e, t) {
  const n = Uo(e).scrollLeft;
  return t ? t.left + n : Zt(lt(e)).left + n;
}
function df(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - qo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function T0(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = lt(r), i = t ? Ko(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ot(1);
  const f = ot(0), m = at(r);
  if ((m || !m && !s) && ((In(r) !== "body" || Tr(a)) && (c = Uo(r)), at(r))) {
    const g = Zt(r);
    d = wn(r), f.x = g.x + r.clientLeft, f.y = g.y + r.clientTop;
  }
  const p = a && !m && !s ? df(a, c) : ot(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - c.scrollTop * d.y + f.y + p.y
  };
}
function P0(e) {
  return Array.from(e.getClientRects());
}
function k0(e) {
  const t = lt(e), n = Uo(e), r = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + qo(e);
  const i = -n.scrollTop;
  return Ke(r).direction === "rtl" && (a += Oe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const tl = 25;
function D0(e, t) {
  const n = je(e), r = lt(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = gi();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const d = qo(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), g = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(r.clientWidth - m.clientWidth - g);
    v <= tl && (s -= v);
  } else d <= tl && (s += d);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const A0 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function _0(e, t) {
  const n = Zt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = at(e) ? wn(e) : ot(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, d = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: d
  };
}
function nl(e, t, n) {
  let r;
  if (t === "viewport")
    r = D0(e, n);
  else if (t === "document")
    r = k0(lt(e));
  else if (Ge(t))
    r = _0(t, n);
  else {
    const o = uf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return go(r);
}
function ff(e, t) {
  const n = Dt(e);
  return n === t || !Ge(n) || Sn(n) ? !1 : Ke(n).position === "fixed" || ff(n, t);
}
function O0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ur(e, [], !1).filter((i) => Ge(i) && In(i) !== "body"), o = null;
  const s = Ke(e).position === "fixed";
  let a = s ? Dt(e) : e;
  for (; Ge(a) && !Sn(a); ) {
    const i = Ke(a), c = hi(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && A0.has(o.position) || Tr(a) && !c && ff(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = Dt(a);
  }
  return t.set(e, r), r;
}
function j0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Ko(t) ? [] : O0(t, this._c) : [].concat(n), r], i = a[0], c = a.reduce((d, f) => {
    const m = nl(t, f, o);
    return d.top = Oe(m.top, d.top), d.right = kt(m.right, d.right), d.bottom = kt(m.bottom, d.bottom), d.left = Oe(m.left, d.left), d;
  }, nl(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function I0(e) {
  const {
    width: t,
    height: n
  } = lf(e);
  return {
    width: t,
    height: n
  };
}
function F0(e, t, n) {
  const r = at(t), o = lt(t), s = n === "fixed", a = Zt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ot(0);
  function d() {
    c.x = qo(o);
  }
  if (r || !r && !s)
    if ((In(t) !== "body" || Tr(o)) && (i = Uo(t)), r) {
      const g = Zt(t, !0, s, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && d();
  s && !r && o && d();
  const f = o && !r && !s ? df(o, i) : ot(0), m = a.left + i.scrollLeft - c.x - f.x, p = a.top + i.scrollTop - c.y - f.y;
  return {
    x: m,
    y: p,
    width: a.width,
    height: a.height
  };
}
function Gs(e) {
  return Ke(e).position === "static";
}
function rl(e, t) {
  if (!at(e) || Ke(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return lt(e) === n && (n = n.ownerDocument.body), n;
}
function mf(e, t) {
  const n = je(e);
  if (Ko(e))
    return n;
  if (!at(e)) {
    let o = Dt(e);
    for (; o && !Sn(o); ) {
      if (Ge(o) && !Gs(o))
        return o;
      o = Dt(o);
    }
    return n;
  }
  let r = rl(e, t);
  for (; r && x0(r) && Gs(r); )
    r = rl(r, t);
  return r && Sn(r) && Gs(r) && !hi(r) ? n : r || N0(e) || n;
}
const L0 = async function(e) {
  const t = this.getOffsetParent || mf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: F0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function $0(e) {
  return Ke(e).direction === "rtl";
}
const W0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: T0,
  getDocumentElement: lt,
  getClippingRect: j0,
  getOffsetParent: mf,
  getElementRects: L0,
  getClientRects: P0,
  getDimensions: I0,
  getScale: wn,
  isElement: Ge,
  isRTL: $0
};
function pf(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function B0(e, t) {
  let n = null, r;
  const o = lt(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: p,
      height: g
    } = d;
    if (i || t(), !p || !g)
      return;
    const v = eo(m), h = eo(o.clientWidth - (f + p)), b = eo(o.clientHeight - (m + g)), x = eo(f), w = {
      rootMargin: -v + "px " + -h + "px " + -b + "px " + -x + "px",
      threshold: Oe(0, kt(1, c)) || 1
    };
    let S = !0;
    function N(C) {
      const E = C[0].intersectionRatio;
      if (E !== c) {
        if (!S)
          return a();
        E ? a(!1, E) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !pf(d, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, w);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function V0(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = vi(e), f = o || s ? [...d ? ur(d) : [], ...ur(t)] : [];
  f.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const m = d && i ? B0(d, n) : null;
  let p = -1, g = null;
  a && (g = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === d && g && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = g) == null || w.observe(t);
    })), n();
  }), d && !c && g.observe(d), g.observe(t));
  let v, h = c ? Zt(e) : null;
  c && b();
  function b() {
    const x = Zt(e);
    h && !pf(h, x) && n(), h = x, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), m?.(), (x = g) == null || x.disconnect(), g = null, c && cancelAnimationFrame(v);
  };
}
const H0 = m0, z0 = p0, Y0 = u0, G0 = g0, K0 = d0, ol = l0, U0 = h0, q0 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: W0,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return c0(e, t, {
    ...o,
    platform: s
  });
};
var X0 = typeof document < "u", Z0 = function() {
}, so = X0 ? gl : Z0;
function vo(e, t) {
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
        if (!vo(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !vo(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sl(e, t) {
  const n = hf(e);
  return Math.round(t * n) / n;
}
function Ks(e) {
  const t = u.useRef(e);
  return so(() => {
    t.current = e;
  }), t;
}
function Q0(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: d
  } = e, [f, m] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, g] = u.useState(r);
  vo(p, r) || g(r);
  const [v, h] = u.useState(null), [b, x] = u.useState(null), y = u.useCallback((_) => {
    _ !== C.current && (C.current = _, h(_));
  }, []), w = u.useCallback((_) => {
    _ !== E.current && (E.current = _, x(_));
  }, []), S = s || v, N = a || b, C = u.useRef(null), E = u.useRef(null), R = u.useRef(f), T = c != null, k = Ks(c), F = Ks(o), K = Ks(d), q = u.useCallback(() => {
    if (!C.current || !E.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: p
    };
    F.current && (_.platform = F.current), q0(C.current, E.current, _).then((L) => {
      const A = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: K.current !== !1
      };
      D.current && !vo(R.current, A) && (R.current = A, pr.flushSync(() => {
        m(A);
      }));
    });
  }, [p, t, n, F, K]);
  so(() => {
    d === !1 && R.current.isPositioned && (R.current.isPositioned = !1, m((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [d]);
  const D = u.useRef(!1);
  so(() => (D.current = !0, () => {
    D.current = !1;
  }), []), so(() => {
    if (S && (C.current = S), N && (E.current = N), S && N) {
      if (k.current)
        return k.current(S, N, q);
      q();
    }
  }, [S, N, q, k, T]);
  const H = u.useMemo(() => ({
    reference: C,
    floating: E,
    setReference: y,
    setFloating: w
  }), [y, w]), B = u.useMemo(() => ({
    reference: S,
    floating: N
  }), [S, N]), X = u.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return _;
    const L = sl(B.floating, f.x), A = sl(B.floating, f.y);
    return i ? {
      ..._,
      transform: "translate(" + L + "px, " + A + "px)",
      ...hf(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: A
    };
  }, [n, i, B.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: q,
    refs: H,
    elements: B,
    floatingStyles: X
  }), [f, q, H, B, X]);
}
const J0 = (e) => {
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
      return r && t(r) ? r.current != null ? ol({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ol({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, eR = (e, t) => ({
  ...H0(e),
  options: [e, t]
}), tR = (e, t) => ({
  ...z0(e),
  options: [e, t]
}), nR = (e, t) => ({
  ...U0(e),
  options: [e, t]
}), rR = (e, t) => ({
  ...Y0(e),
  options: [e, t]
}), oR = (e, t) => ({
  ...G0(e),
  options: [e, t]
}), sR = (e, t) => ({
  ...K0(e),
  options: [e, t]
}), aR = (e, t) => ({
  ...J0(e),
  options: [e, t]
});
var iR = "Arrow", gf = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ l.jsx(
    W.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ l.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
gf.displayName = iR;
var cR = gf, bi = "Popper", [vf, _t] = Ce(bi), [lR, bf] = vf(bi), xf = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ l.jsx(lR, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
xf.displayName = bi;
var yf = "PopperAnchor", wf = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = bf(yf, n), a = u.useRef(null), i = oe(t, a), c = u.useRef(null);
    return u.useEffect(() => {
      const d = c.current;
      c.current = r?.current || a.current, d !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ l.jsx(W.div, { ...o, ref: i });
  }
);
wf.displayName = yf;
var xi = "PopperContent", [uR, dR] = vf(xi), Cf = u.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...h
    } = e, b = bf(xi, n), [x, y] = u.useState(null), w = oe(t, (O) => y(O)), [S, N] = u.useState(null), C = Wo(S), E = C?.width ?? 0, R = C?.height ?? 0, T = r + (s !== "center" ? "-" + s : ""), k = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, F = Array.isArray(d) ? d : [d], K = F.length > 0, q = {
      padding: k,
      boundary: F.filter(mR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: K
    }, { refs: D, floatingStyles: H, placement: B, isPositioned: X, middlewareData: _ } = Q0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...O) => V0(...O, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        eR({ mainAxis: o + R, alignmentAxis: a }),
        c && tR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? nR() : void 0,
          ...q
        }),
        c && rR({ ...q }),
        oR({
          ...q,
          apply: ({ elements: O, rects: U, availableWidth: te, availableHeight: ee }) => {
            const { width: ne, height: Y } = U.reference, ie = O.floating.style;
            ie.setProperty("--radix-popper-available-width", `${te}px`), ie.setProperty("--radix-popper-available-height", `${ee}px`), ie.setProperty("--radix-popper-anchor-width", `${ne}px`), ie.setProperty("--radix-popper-anchor-height", `${Y}px`);
          }
        }),
        S && aR({ element: S, padding: i }),
        pR({ arrowWidth: E, arrowHeight: R }),
        p && sR({ strategy: "referenceHidden", ...q })
      ]
    }), [L, A] = Ef(B), G = me(v);
    ge(() => {
      X && G?.();
    }, [X, G]);
    const P = _.arrow?.x, $ = _.arrow?.y, z = _.arrow?.centerOffset !== 0, [V, J] = u.useState();
    return ge(() => {
      x && J(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: X ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: V,
          "--radix-popper-transform-origin": [
            _.transformOrigin?.x,
            _.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ..._.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l.jsx(
          uR,
          {
            scope: n,
            placedSide: L,
            onArrowChange: N,
            arrowX: P,
            arrowY: $,
            shouldHideArrow: z,
            children: /* @__PURE__ */ l.jsx(
              W.div,
              {
                "data-side": L,
                "data-align": A,
                ...h,
                ref: w,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Cf.displayName = xi;
var Sf = "PopperArrow", fR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Nf = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = dR(Sf, r), a = fR[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ l.jsx(
          cR,
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
Nf.displayName = Sf;
function mR(e) {
  return e !== null;
}
var pR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [d, f] = Ef(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (o.arrow?.x ?? 0) + i / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let v = "", h = "";
    return d === "bottom" ? (v = a ? m : `${p}px`, h = `${-c}px`) : d === "top" ? (v = a ? m : `${p}px`, h = `${r.floating.height + c}px`) : d === "right" ? (v = `${-c}px`, h = a ? m : `${g}px`) : d === "left" && (v = `${r.floating.width + c}px`, h = a ? m : `${g}px`), { data: { x: v, y: h } };
  }
});
function Ef(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Pr = xf, kr = wf, Xo = Cf, Zo = Nf, Qo = "Popover", [Rf, iA] = Ce(Qo, [
  _t
]), Dr = _t(), [hR, Ot] = Rf(Qo), Mf = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = Dr(t), c = u.useRef(null), [d, f] = u.useState(!1), [m, p] = Se({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Qo
  });
  return /* @__PURE__ */ l.jsx(Pr, { ...i, children: /* @__PURE__ */ l.jsx(
    hR,
    {
      scope: t,
      contentId: be(),
      triggerRef: c,
      open: m,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((g) => !g), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: a,
      children: n
    }
  ) });
};
Mf.displayName = Qo;
var Tf = "PopoverAnchor", gR = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ot(Tf, n), s = Dr(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ l.jsx(kr, { ...s, ...r, ref: t });
  }
);
gR.displayName = Tf;
var Pf = "PopoverTrigger", kf = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ot(Pf, n), s = Dr(n), a = oe(t, o.triggerRef), i = /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": jf(o.open),
        ...r,
        ref: a,
        onClick: j(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ l.jsx(kr, { asChild: !0, ...s, children: i });
  }
);
kf.displayName = Pf;
var yi = "PopoverPortal", [vR, bR] = Rf(yi, {
  forceMount: void 0
}), Df = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = Ot(yi, t);
  return /* @__PURE__ */ l.jsx(vR, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(tn, { asChild: !0, container: o, children: r }) }) });
};
Df.displayName = yi;
var Nn = "PopoverContent", Af = u.forwardRef(
  (e, t) => {
    const n = bR(Nn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = Ot(Nn, e.__scopePopover);
    return /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: s.modal ? /* @__PURE__ */ l.jsx(yR, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(wR, { ...o, ref: t }) });
  }
);
Af.displayName = Nn;
var xR = /* @__PURE__ */ Tt("PopoverContent.RemoveScroll"), yR = u.forwardRef(
  (e, t) => {
    const n = Ot(Nn, e.__scopePopover), r = u.useRef(null), o = oe(t, r), s = u.useRef(!1);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Ao(a);
    }, []), /* @__PURE__ */ l.jsx(vr, { as: xR, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
      _f,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: j(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || c;
            s.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: j(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), wR = u.forwardRef(
  (e, t) => {
    const n = Ot(Nn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      _f,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), _f = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: d,
      onInteractOutside: f,
      ...m
    } = e, p = Ot(Nn, n), g = Dr(n);
    return ko(), /* @__PURE__ */ l.jsx(
      gr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ l.jsx(
          At,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ l.jsx(
              Xo,
              {
                "data-state": jf(p.open),
                role: "dialog",
                id: p.contentId,
                ...g,
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
), Of = "PopoverClose", CR = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ot(Of, n);
    return /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: j(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
CR.displayName = Of;
var SR = "PopoverArrow", NR = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Dr(n);
    return /* @__PURE__ */ l.jsx(Zo, { ...o, ...r, ref: t });
  }
);
NR.displayName = SR;
function jf(e) {
  return e ? "open" : "closed";
}
var ER = Mf, RR = kf, MR = Df, If = Af;
const Ar = ER, _r = RR, Fn = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(MR, { children: /* @__PURE__ */ l.jsx(
  If,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: M(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Fn.displayName = If.displayName;
function cA({
  value: e,
  onChange: t,
  disabled: n,
  disabledDates: r,
  mode: o = "single",
  ...s
}) {
  const [a, i] = u.useState(e);
  function c(f) {
    i(f), t?.(f);
  }
  const d = () => {
    if (!a) return /* @__PURE__ */ l.jsx("span", { children: "Selecione uma data" });
    if (o === "range") {
      const f = a;
      return f.from ? f.to ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        nt(f.from, "dd/MM/yyyy", { locale: zt }),
        " -",
        " ",
        nt(f.to, "dd/MM/yyyy", { locale: zt })
      ] }) : nt(f.from, "dd/MM/yyyy", { locale: zt }) : /* @__PURE__ */ l.jsx("span", { children: "Selecione uma data" });
    }
    return nt(a, "PPP", { locale: zt });
  };
  return /* @__PURE__ */ l.jsxs(Ar, { children: [
    /* @__PURE__ */ l.jsx(_r, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
      wt,
      {
        variant: "outline",
        className: M(
          "w-full justify-between text-left font-normal hover:bg-input bg-input",
          !a && "text-muted-foreground"
        ),
        disabled: n,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ l.jsx(cv, { className: "mr-2" }),
            d()
          ] }),
          /* @__PURE__ */ l.jsx(Mt, { className: "shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(Fn, { className: "w-auto p-0", children: /* @__PURE__ */ l.jsx(
      jd,
      {
        mode: o,
        selected: a,
        onSelect: c,
        disabled: r,
        defaultMonth: a?.from,
        ...s
      }
    ) })
  ] });
}
function TR(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function PR(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function kR(e) {
  return /^[0-5][0-9]$/.test(e);
}
function Jo(e, { max: t, min: n = 0, loop: r = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (r ? (o > t && (o = n), o < n && (o = t)) : (o > t && (o = t), o < n && (o = n)), o.toString().padStart(2, "0"));
}
function Ff(e) {
  return TR(e) ? e : Jo(e, { max: 23 });
}
function Lf(e) {
  return PR(e) ? e : Jo(e, { min: 1, max: 12 });
}
function bo(e) {
  return kR(e) ? e : Jo(e, { max: 59 });
}
function wi(e, { min: t, max: n, step: r }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += r, Jo(String(o), { min: t, max: n, loop: !0 }));
}
function DR(e, t) {
  return wi(e, { min: 0, max: 23, step: t });
}
function AR(e, t) {
  return wi(e, { min: 1, max: 12, step: t });
}
function al(e, t) {
  return wi(e, { min: 0, max: 59, step: t });
}
function _R(e, t) {
  const n = bo(t);
  return e.setMinutes(parseInt(n, 10)), e;
}
function OR(e, t) {
  const n = bo(t);
  return e.setSeconds(parseInt(n, 10)), e;
}
function jR(e, t) {
  const n = Ff(t);
  return e.setHours(parseInt(n, 10)), e;
}
function IR(e, t, n) {
  const r = parseInt(Lf(t), 10), o = $R(r, n);
  return e.setHours(o), e;
}
function ma(e, t, n, r) {
  switch (n) {
    case "minutes":
      return _R(e, t);
    case "seconds":
      return OR(e, t);
    case "hours":
      return jR(e, t);
    case "12hours":
      return r ? IR(e, t, r) : e;
    default:
      return e;
  }
}
function FR(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return bo(String(e.getMinutes()));
    case "seconds":
      return bo(String(e.getSeconds()));
    case "hours":
      return Ff(String(e.getHours()));
    case "12hours":
      return Lf(String($f(e.getHours())));
    default:
      return "00";
  }
}
function LR(e, t, n) {
  switch (n) {
    case "minutes":
      return al(e, t);
    case "seconds":
      return al(e, t);
    case "hours":
      return DR(e, t);
    case "12hours":
      return AR(e, t);
    default:
      return "00";
  }
}
function $R(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function $f(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
const Wf = u.forwardRef(
  ({ period: e, setPeriod: t, date: n, onDateChange: r, onLeftFocus: o, onRightFocus: s }, a) => {
    const i = (d) => {
      d.key === "ArrowRight" && s?.(), d.key === "ArrowLeft" && o?.();
    }, c = (d) => {
      if (t?.(d), n) {
        const f = new Date(n), m = $f(n.getHours());
        r?.(
          ma(
            f,
            m.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ l.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ l.jsxs(
      jh,
      {
        defaultValue: e,
        onValueChange: (d) => c(d),
        children: [
          /* @__PURE__ */ l.jsx(
            zi,
            {
              ref: a,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: i,
              children: /* @__PURE__ */ l.jsx(Ih, {})
            }
          ),
          /* @__PURE__ */ l.jsxs(Yi, { children: [
            /* @__PURE__ */ l.jsx(Eo, { value: "AM", children: "AM" }),
            /* @__PURE__ */ l.jsx(Eo, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Wf.displayName = "TimePeriodSelect";
const ao = u.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: n,
    id: r,
    name: o,
    date: s = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    onDateChange: a,
    onChange: i,
    onKeyDown: c,
    picker: d,
    period: f,
    onLeftFocus: m,
    onRightFocus: p,
    ...g
  }, v) => {
    const [h, b] = u.useState(!1), [x, y] = u.useState("0");
    u.useEffect(() => {
      if (h) {
        const C = setTimeout(() => {
          b(!1);
        }, 2e3);
        return () => clearTimeout(C);
      }
    }, [h]);
    const w = u.useMemo(() => FR(s, d), [s, d]), S = (C) => d === "12hours" && h && w.slice(1, 2) === "1" && x === "0" ? `0${C}` : h ? w.slice(1, 2) + C : `0${C}`, N = (C) => {
      if (C.key !== "Tab") {
        if (C.preventDefault(), C.key === "ArrowRight" && p?.(), C.key === "ArrowLeft" && m?.(), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const E = C.key === "ArrowUp" ? 1 : -1, R = LR(w, E, d);
          h && b(!1);
          const T = s ? new Date(s) : /* @__PURE__ */ new Date();
          a?.(ma(T, R, d, f));
        }
        if (C.key >= "0" && C.key <= "9") {
          d === "12hours" && y(C.key);
          const E = S(C.key);
          h && p?.(), b((T) => !T);
          const R = s ? new Date(s) : /* @__PURE__ */ new Date();
          a?.(ma(R, E, d, f));
        }
      }
    };
    return /* @__PURE__ */ l.jsx(
      ki,
      {
        ref: v,
        id: r || d,
        name: o || d,
        className: M(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: n || w,
        onChange: (C) => {
          C.preventDefault(), i?.(C);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (C) => {
          c?.(C), N(C);
        },
        ...g
      }
    );
  }
);
ao.displayName = "TimePickerInput";
const Bf = u.forwardRef(
  ({ date: e, onChange: t, hourCycle: n = 24, granularity: r = "second" }, o) => {
    const s = u.useRef(null), a = u.useRef(null), i = u.useRef(null), c = u.useRef(null), [d, f] = u.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return vl(
      o,
      () => ({
        minuteRef: s.current,
        hourRef: a.current,
        secondRef: i.current,
        periodRef: c.current
      }),
      [s, a, i]
    ), /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ l.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ l.jsx(lv, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ l.jsx(
        ao,
        {
          picker: n === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: a,
          period: d,
          onRightFocus: () => s?.current?.focus()
        }
      ),
      (r === "minute" || r === "second") && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        ":",
        /* @__PURE__ */ l.jsx(
          ao,
          {
            picker: "minutes",
            date: e,
            onDateChange: t,
            ref: s,
            onLeftFocus: () => a?.current?.focus(),
            onRightFocus: () => i?.current?.focus()
          }
        )
      ] }),
      r === "second" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        ":",
        /* @__PURE__ */ l.jsx(
          ao,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: i,
            onLeftFocus: () => s?.current?.focus(),
            onRightFocus: () => c?.current?.focus()
          }
        )
      ] }),
      n === 12 && /* @__PURE__ */ l.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ l.jsx(
        Wf,
        {
          period: d,
          setPeriod: f,
          date: e,
          onDateChange: (m) => {
            t?.(m), m && m?.getHours() >= 12 ? f("PM") : f("AM");
          },
          ref: c,
          onLeftFocus: () => i?.current?.focus()
        }
      ) })
    ] });
  }
);
Bf.displayName = "TimePicker";
const WR = u.forwardRef(
  ({
    locale: e = zt,
    defaultPopupValue: t = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    value: n,
    onChange: r,
    hourCycle: o = 24,
    yearRange: s = 50,
    disabled: a = !1,
    displayFormat: i,
    granularity: c = "second",
    placeholder: d = "Selecione...",
    className: f,
    disabledDates: m,
    ...p
  }, g) => {
    const [v, h] = u.useState(n ?? t), b = Yt(null), [x, y] = u.useState(
      n
    ), w = (k) => {
      if (!k)
        return;
      if (!t) {
        k.setHours(
          v?.getHours() ?? 0,
          v?.getMinutes() ?? 0,
          v?.getSeconds() ?? 0
        ), r?.(k), h(k);
        return;
      }
      const K = (k.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), q = qy(t, {
        days: Math.ceil(K)
      });
      q.setHours(
        v?.getHours() ?? 0,
        v?.getMinutes() ?? 0,
        v?.getSeconds() ?? 0
      ), r?.(q), h(q);
    };
    gt(() => {
      n || y(void 0);
    }, [n]);
    const S = (k) => {
      k && (r?.(k), h(k), y(k));
    };
    vl(
      g,
      () => ({
        ...b.current,
        value: x
      }),
      [x]
    );
    const N = {
      hour24: i?.hour24 ?? `PPP HH:mm${!c || c === "second" ? ":ss" : ""}`,
      hour12: i?.hour12 ?? `PP hh:mm${!c || c === "second" ? ":ss" : ""} b`
    };
    let C = zt;
    const { options: E, localize: R, formatLong: T } = e;
    return E && R && T && (C = {
      ...zt,
      options: E,
      localize: R,
      formatLong: T
    }), /* @__PURE__ */ l.jsxs(Ar, { children: [
      /* @__PURE__ */ l.jsx(_r, { asChild: !0, disabled: a, children: /* @__PURE__ */ l.jsxs(
        wt,
        {
          variant: "outline",
          className: M(
            "w-full justify-between text-left font-normal hover:bg-input bg-input",
            !x && "text-muted-foreground",
            f
          ),
          ref: b,
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ l.jsx(uv, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ l.jsx("span", { className: "truncate block", title: d, children: x ? nt(
                x,
                o === 24 ? N.hour24 : N.hour12,
                {
                  locale: C
                }
              ) : /* @__PURE__ */ l.jsx("span", { children: d }) })
            ] }),
            /* @__PURE__ */ l.jsx(Mt, { className: "shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsxs(Fn, { className: "w-auto p-0", children: [
        /* @__PURE__ */ l.jsx(
          jd,
          {
            selected: x,
            onSelect: (k) => {
              k && (k.setHours(
                v?.getHours() ?? 0,
                v?.getMinutes() ?? 0,
                v?.getSeconds() ?? 0
              ), S(k));
            },
            onMonthChange: w,
            locale: e,
            disabled: m,
            className: "w-full",
            ...p,
            mode: "single"
          }
        ),
        c !== "day" && /* @__PURE__ */ l.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ l.jsx(
          Bf,
          {
            onChange: (k) => {
              r?.(k), y(k), k && h(k);
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
WR.displayName = "DateTimePicker";
const BR = Oo, lA = Ya, VR = jo, uA = _n, Vf = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Dn,
  {
    ref: n,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Vf.displayName = Dn.displayName;
const Hf = u.forwardRef(({ className: e, onClose: t, ...n }, r) => /* @__PURE__ */ l.jsxs(VR, { children: [
  /* @__PURE__ */ l.jsx(Vf, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ l.jsxs(
    An,
    {
      ref: r,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx(
          _n,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ l.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ l.jsx(_a, { className: "h-4 w-4" }),
              /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
Hf.displayName = An.displayName;
const HR = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
HR.displayName = "DialogHeader";
const zR = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
zR.displayName = "DialogFooter";
const YR = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  br,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
YR.displayName = br.displayName;
const GR = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xr,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
GR.displayName = xr.displayName;
var Us = "rovingFocusGroup.onEntryFocus", KR = { bubbles: !1, cancelable: !0 }, Or = "RovingFocusGroup", [pa, zf, UR] = en(Or), [qR, jt] = Ce(
  Or,
  [UR]
), [XR, ZR] = qR(Or), Yf = u.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(pa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(pa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(QR, { ...e, ref: t }) }) })
);
Yf.displayName = Or;
var QR = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, p = u.useRef(null), g = oe(t, p), v = xt(s), [h, b] = Se({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: Or
  }), [x, y] = u.useState(!1), w = me(d), S = zf(n), N = u.useRef(!1), [C, E] = u.useState(0);
  return u.useEffect(() => {
    const R = p.current;
    if (R)
      return R.addEventListener(Us, w), () => R.removeEventListener(Us, w);
  }, [w]), /* @__PURE__ */ l.jsx(
    XR,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: h,
      onItemFocus: u.useCallback(
        (R) => b(R),
        [b]
      ),
      onItemShiftTab: u.useCallback(() => y(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => E((R) => R + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => E((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        W.div,
        {
          tabIndex: x || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: j(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: j(e.onFocus, (R) => {
            const T = !N.current;
            if (R.target === R.currentTarget && T && !x) {
              const k = new CustomEvent(Us, KR);
              if (R.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const F = S().filter((B) => B.focusable), K = F.find((B) => B.active), q = F.find((B) => B.id === h), H = [K, q, ...F].filter(
                  Boolean
                ).map((B) => B.ref.current);
                Uf(H, f);
              }
            }
            N.current = !1;
          }),
          onBlur: j(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Gf = "RovingFocusGroupItem", Kf = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = be(), d = s || c, f = ZR(Gf, n), m = f.currentTabStopId === d, p = zf(n), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: h } = f;
    return u.useEffect(() => {
      if (r)
        return g(), () => v();
    }, [r, g, v]), /* @__PURE__ */ l.jsx(
      pa.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l.jsx(
          W.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: j(e.onMouseDown, (b) => {
              r ? f.onItemFocus(d) : b.preventDefault();
            }),
            onFocus: j(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: j(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const x = tM(b, f.orientation, f.dir);
              if (x !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let w = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (x === "last") w.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && w.reverse();
                  const S = w.indexOf(b.currentTarget);
                  w = f.loop ? nM(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => Uf(w));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: m, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
Kf.displayName = Gf;
var JR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function eM(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function tM(e, t, n) {
  const r = eM(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return JR[r];
}
function Uf(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function nM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var es = Yf, ts = Kf, ha = ["Enter", " "], rM = ["ArrowDown", "PageUp", "Home"], qf = ["ArrowUp", "PageDown", "End"], oM = [...rM, ...qf], sM = {
  ltr: [...ha, "ArrowRight"],
  rtl: [...ha, "ArrowLeft"]
}, aM = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, jr = "Menu", [dr, iM, cM] = en(jr), [nn, Xf] = Ce(jr, [
  cM,
  _t,
  jt
]), Ir = _t(), Zf = jt(), [Qf, It] = nn(jr), [lM, Fr] = nn(jr), Jf = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = Ir(t), [c, d] = u.useState(null), f = u.useRef(!1), m = me(s), p = xt(o);
  return u.useEffect(() => {
    const g = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(Pr, { ...i, children: /* @__PURE__ */ l.jsx(
    Qf,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ l.jsx(
        lM,
        {
          scope: t,
          onClose: u.useCallback(() => m(!1), [m]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Jf.displayName = jr;
var uM = "MenuAnchor", Ci = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ir(n);
    return /* @__PURE__ */ l.jsx(kr, { ...o, ...r, ref: t });
  }
);
Ci.displayName = uM;
var Si = "MenuPortal", [dM, em] = nn(Si, {
  forceMount: void 0
}), tm = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = It(Si, t);
  return /* @__PURE__ */ l.jsx(dM, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(tn, { asChild: !0, container: o, children: r }) }) });
};
tm.displayName = Si;
var $e = "MenuContent", [fM, Ni] = nn($e), nm = u.forwardRef(
  (e, t) => {
    const n = em($e, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = It($e, e.__scopeMenu), a = Fr($e, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(dr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: /* @__PURE__ */ l.jsx(dr.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l.jsx(mM, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(pM, { ...o, ref: t }) }) }) });
  }
), mM = u.forwardRef(
  (e, t) => {
    const n = It($e, e.__scopeMenu), r = u.useRef(null), o = oe(t, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Ao(s);
    }, []), /* @__PURE__ */ l.jsx(
      Ei,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: j(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), pM = u.forwardRef((e, t) => {
  const n = It($e, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    Ei,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), hM = /* @__PURE__ */ Tt("MenuContent.ScrollLock"), Ei = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEntryFocus: c,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: m,
      onInteractOutside: p,
      onDismiss: g,
      disableOutsideScroll: v,
      ...h
    } = e, b = It($e, n), x = Fr($e, n), y = Ir(n), w = Zf(n), S = iM(n), [N, C] = u.useState(null), E = u.useRef(null), R = oe(t, E, b.onContentChange), T = u.useRef(0), k = u.useRef(""), F = u.useRef(0), K = u.useRef(null), q = u.useRef("right"), D = u.useRef(0), H = v ? vr : u.Fragment, B = v ? { as: hM, allowPinchZoom: !0 } : void 0, X = (L) => {
      const A = k.current + L, G = S().filter((O) => !O.disabled), P = document.activeElement, $ = G.find((O) => O.ref.current === P)?.textValue, z = G.map((O) => O.textValue), V = MM(z, A, $), J = G.find((O) => O.textValue === V)?.ref.current;
      (function O(U) {
        k.current = U, window.clearTimeout(T.current), U !== "" && (T.current = window.setTimeout(() => O(""), 1e3));
      })(A), J && setTimeout(() => J.focus());
    };
    u.useEffect(() => () => window.clearTimeout(T.current), []), ko();
    const _ = u.useCallback((L) => q.current === K.current?.side && PM(L, K.current?.area), []);
    return /* @__PURE__ */ l.jsx(
      fM,
      {
        scope: n,
        searchRef: k,
        onItemEnter: u.useCallback(
          (L) => {
            _(L) && L.preventDefault();
          },
          [_]
        ),
        onItemLeave: u.useCallback(
          (L) => {
            _(L) || (E.current?.focus(), C(null));
          },
          [_]
        ),
        onTriggerLeave: u.useCallback(
          (L) => {
            _(L) && L.preventDefault();
          },
          [_]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: u.useCallback((L) => {
          K.current = L;
        }, []),
        children: /* @__PURE__ */ l.jsx(H, { ...B, children: /* @__PURE__ */ l.jsx(
          gr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: j(s, (L) => {
              L.preventDefault(), E.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l.jsx(
              At,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: g,
                children: /* @__PURE__ */ l.jsx(
                  es,
                  {
                    asChild: !0,
                    ...w,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: C,
                    onEntryFocus: j(c, (L) => {
                      x.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      Xo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": xm(b.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...y,
                        ...h,
                        ref: R,
                        style: { outline: "none", ...h.style },
                        onKeyDown: j(h.onKeyDown, (L) => {
                          const G = L.target.closest("[data-radix-menu-content]") === L.currentTarget, P = L.ctrlKey || L.altKey || L.metaKey, $ = L.key.length === 1;
                          G && (L.key === "Tab" && L.preventDefault(), !P && $ && X(L.key));
                          const z = E.current;
                          if (L.target !== z || !oM.includes(L.key)) return;
                          L.preventDefault();
                          const J = S().filter((O) => !O.disabled).map((O) => O.ref.current);
                          qf.includes(L.key) && J.reverse(), EM(J);
                        }),
                        onBlur: j(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(T.current), k.current = "");
                        }),
                        onPointerMove: j(
                          e.onPointerMove,
                          fr((L) => {
                            const A = L.target, G = D.current !== L.clientX;
                            if (L.currentTarget.contains(A) && G) {
                              const P = L.clientX > D.current ? "right" : "left";
                              q.current = P, D.current = L.clientX;
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
nm.displayName = $e;
var gM = "MenuGroup", Ri = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(W.div, { role: "group", ...r, ref: t });
  }
);
Ri.displayName = gM;
var vM = "MenuLabel", rm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(W.div, { ...r, ref: t });
  }
);
rm.displayName = vM;
var xo = "MenuItem", il = "menu.itemSelect", ns = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = u.useRef(null), a = Fr(xo, e.__scopeMenu), i = Ni(xo, e.__scopeMenu), c = oe(t, s), d = u.useRef(!1), f = () => {
      const m = s.current;
      if (!n && m) {
        const p = new CustomEvent(il, { bubbles: !0, cancelable: !0 });
        m.addEventListener(il, (g) => r?.(g), { once: !0 }), rr(m, p), p.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      om,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: j(e.onClick, f),
        onPointerDown: (m) => {
          e.onPointerDown?.(m), d.current = !0;
        },
        onPointerUp: j(e.onPointerUp, (m) => {
          d.current || m.currentTarget?.click();
        }),
        onKeyDown: j(e.onKeyDown, (m) => {
          const p = i.searchRef.current !== "";
          n || p && m.key === " " || ha.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
ns.displayName = xo;
var om = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = Ni(xo, n), i = Zf(n), c = u.useRef(null), d = oe(t, c), [f, m] = u.useState(!1), [p, g] = u.useState("");
    return u.useEffect(() => {
      const v = c.current;
      v && g((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ l.jsx(
      dr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ l.jsx(ts, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ l.jsx(
          W.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: j(
              e.onPointerMove,
              fr((v) => {
                r ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: j(
              e.onPointerLeave,
              fr((v) => a.onItemLeave(v))
            ),
            onFocus: j(e.onFocus, () => m(!0)),
            onBlur: j(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), bM = "MenuCheckboxItem", sm = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(um, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l.jsx(
      ns,
      {
        role: "menuitemcheckbox",
        "aria-checked": yo(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Pi(n),
        onSelect: j(
          o.onSelect,
          () => r?.(yo(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
sm.displayName = bM;
var am = "MenuRadioGroup", [xM, yM] = nn(
  am,
  { value: void 0, onValueChange: () => {
  } }
), im = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = me(r);
    return /* @__PURE__ */ l.jsx(xM, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ l.jsx(Ri, { ...o, ref: t }) });
  }
);
im.displayName = am;
var cm = "MenuRadioItem", lm = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = yM(cm, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ l.jsx(um, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ l.jsx(
      ns,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Pi(s),
        onSelect: j(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
lm.displayName = cm;
var Mi = "MenuItemIndicator", [um, wM] = nn(
  Mi,
  { checked: !1 }
), dm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = wM(Mi, n);
    return /* @__PURE__ */ l.jsx(
      ve,
      {
        present: r || yo(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          W.span,
          {
            ...o,
            ref: t,
            "data-state": Pi(s.checked)
          }
        )
      }
    );
  }
);
dm.displayName = Mi;
var CM = "MenuSeparator", fm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(
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
fm.displayName = CM;
var SM = "MenuArrow", mm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ir(n);
    return /* @__PURE__ */ l.jsx(Zo, { ...o, ...r, ref: t });
  }
);
mm.displayName = SM;
var Ti = "MenuSub", [NM, pm] = nn(Ti), hm = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = It(Ti, t), a = Ir(t), [i, c] = u.useState(null), [d, f] = u.useState(null), m = me(o);
  return u.useEffect(() => (s.open === !1 && m(!1), () => m(!1)), [s.open, m]), /* @__PURE__ */ l.jsx(Pr, { ...a, children: /* @__PURE__ */ l.jsx(
    Qf,
    {
      scope: t,
      open: r,
      onOpenChange: m,
      content: d,
      onContentChange: f,
      children: /* @__PURE__ */ l.jsx(
        NM,
        {
          scope: t,
          contentId: be(),
          triggerId: be(),
          trigger: i,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
hm.displayName = Ti;
var Qn = "MenuSubTrigger", gm = u.forwardRef(
  (e, t) => {
    const n = It(Qn, e.__scopeMenu), r = Fr(Qn, e.__scopeMenu), o = pm(Qn, e.__scopeMenu), s = Ni(Qn, e.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), c(null);
      };
    }, [i, c]), /* @__PURE__ */ l.jsx(Ci, { asChild: !0, ...d, children: /* @__PURE__ */ l.jsx(
      om,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": xm(n.open),
        ...e,
        ref: st(t, o.onTriggerChange),
        onClick: (m) => {
          e.onClick?.(m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: j(
          e.onPointerMove,
          fr((m) => {
            s.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: j(
          e.onPointerLeave,
          fr((m) => {
            f();
            const p = n.content?.getBoundingClientRect();
            if (p) {
              const g = n.content?.dataset.side, v = g === "right", h = v ? -5 : 5, b = p[v ? "left" : "right"], x = p[v ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: m.clientX + h, y: m.clientY },
                  { x: b, y: p.top },
                  { x, y: p.top },
                  { x, y: p.bottom },
                  { x: b, y: p.bottom }
                ],
                side: g
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(m), m.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: j(e.onKeyDown, (m) => {
          const p = s.searchRef.current !== "";
          e.disabled || p && m.key === " " || sM[r.dir].includes(m.key) && (n.onOpenChange(!0), n.content?.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
gm.displayName = Qn;
var vm = "MenuSubContent", bm = u.forwardRef(
  (e, t) => {
    const n = em($e, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = It($e, e.__scopeMenu), a = Fr($e, e.__scopeMenu), i = pm(vm, e.__scopeMenu), c = u.useRef(null), d = oe(t, c);
    return /* @__PURE__ */ l.jsx(dr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: /* @__PURE__ */ l.jsx(dr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      Ei,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          a.isUsingKeyboardRef.current && c.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: j(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: j(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: j(e.onKeyDown, (f) => {
          const m = f.currentTarget.contains(f.target), p = aM[a.dir].includes(f.key);
          m && p && (s.onOpenChange(!1), i.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
bm.displayName = vm;
function xm(e) {
  return e ? "open" : "closed";
}
function yo(e) {
  return e === "indeterminate";
}
function Pi(e) {
  return yo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function EM(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function RM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function MM(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = RM(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function TM(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], d = i.x, f = i.y, m = c.x, p = c.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function PM(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return TM(n, t);
}
function fr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var kM = Jf, DM = Ci, AM = tm, _M = nm, OM = Ri, jM = rm, IM = ns, FM = sm, LM = im, $M = lm, WM = dm, BM = fm, VM = mm, HM = hm, zM = gm, YM = bm, rs = "DropdownMenu", [GM, dA] = Ce(
  rs,
  [Xf]
), Pe = Xf(), [KM, ym] = GM(rs), wm = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = Pe(t), d = u.useRef(null), [f, m] = Se({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: rs
  });
  return /* @__PURE__ */ l.jsx(
    KM,
    {
      scope: t,
      triggerId: be(),
      triggerRef: d,
      contentId: be(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ l.jsx(kM, { ...c, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
wm.displayName = rs;
var Cm = "DropdownMenuTrigger", Sm = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = ym(Cm, n), a = Pe(n);
    return /* @__PURE__ */ l.jsx(DM, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: st(t, s.triggerRef),
        onPointerDown: j(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: j(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Sm.displayName = Cm;
var UM = "DropdownMenuPortal", Nm = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Pe(t);
  return /* @__PURE__ */ l.jsx(AM, { ...r, ...n });
};
Nm.displayName = UM;
var Em = "DropdownMenuContent", Rm = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ym(Em, n), s = Pe(n), a = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      _M,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (i) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: j(e.onInteractOutside, (i) => {
          const c = i.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0, f = c.button === 2 || d;
          (!o.modal || f) && (a.current = !0);
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
Rm.displayName = Em;
var qM = "DropdownMenuGroup", Mm = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(OM, { ...o, ...r, ref: t });
  }
);
Mm.displayName = qM;
var XM = "DropdownMenuLabel", Tm = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(jM, { ...o, ...r, ref: t });
  }
);
Tm.displayName = XM;
var ZM = "DropdownMenuItem", Pm = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(IM, { ...o, ...r, ref: t });
  }
);
Pm.displayName = ZM;
var QM = "DropdownMenuCheckboxItem", km = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(FM, { ...o, ...r, ref: t });
});
km.displayName = QM;
var JM = "DropdownMenuRadioGroup", Dm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(LM, { ...o, ...r, ref: t });
});
Dm.displayName = JM;
var eT = "DropdownMenuRadioItem", Am = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx($M, { ...o, ...r, ref: t });
});
Am.displayName = eT;
var tT = "DropdownMenuItemIndicator", _m = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(WM, { ...o, ...r, ref: t });
});
_m.displayName = tT;
var nT = "DropdownMenuSeparator", Om = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(BM, { ...o, ...r, ref: t });
});
Om.displayName = nT;
var rT = "DropdownMenuArrow", oT = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(VM, { ...o, ...r, ref: t });
  }
);
oT.displayName = rT;
var sT = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, a = Pe(t), [i, c] = Se({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ l.jsx(HM, { ...a, open: i, onOpenChange: c, children: n });
}, aT = "DropdownMenuSubTrigger", jm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(zM, { ...o, ...r, ref: t });
});
jm.displayName = aT;
var iT = "DropdownMenuSubContent", Im = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(
    YM,
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
Im.displayName = iT;
var cT = wm, lT = Sm, Fm = Nm, Lm = Rm, uT = Mm, $m = Tm, Wm = Pm, Bm = km, dT = Dm, Vm = Am, Hm = _m, zm = Om, fT = sT, Ym = jm, Gm = Im;
const fA = cT, mA = lT, pA = uT, hA = Fm, gA = fT, vA = dT, mT = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Ym,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l.jsx(Aa, { className: "ml-auto h-4 w-4" })
    ]
  }
));
mT.displayName = Ym.displayName;
const pT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Gm,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
pT.displayName = Gm.displayName;
const hT = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(Fm, { children: /* @__PURE__ */ l.jsx(
  Lm,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
hT.displayName = Lm.displayName;
const gT = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Wm,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
gT.displayName = Wm.displayName;
const vT = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Bm,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Hm, { children: /* @__PURE__ */ l.jsx(hr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
vT.displayName = Bm.displayName;
const bT = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Vm,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Hm, { children: /* @__PURE__ */ l.jsx(wl, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
bT.displayName = Vm.displayName;
const xT = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  $m,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
xT.displayName = $m.displayName;
const yT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zm,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
yT.displayName = zm.displayName;
const wT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
wT.displayName = "DropdownMenuShortcut";
var CT = "Label", Km = u.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  W.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Km.displayName = CT;
var Um = Km;
const ST = it(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), os = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Um,
  {
    ref: n,
    className: M(ST(), e),
    ...t
  }
));
os.displayName = Um.displayName;
const bA = gv, qm = u.createContext(
  {}
), Lr = ({
  ...e
}) => /* @__PURE__ */ l.jsx(qm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l.jsx(vv, { ...e }) }), ss = () => {
  const e = u.useContext(qm), t = u.useContext(Xm), { getFieldState: n, formState: r } = Tn(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = t;
  return {
    id: s,
    name: e.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...o
  };
}, Xm = u.createContext(
  {}
), Ln = u.forwardRef(({ className: e, ...t }, n) => {
  const r = u.useId();
  return /* @__PURE__ */ l.jsx(Xm.Provider, { value: { id: r }, children: /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: M("space-y-1 relative", e),
      ...t
    }
  ) });
});
Ln.displayName = "FormItem";
const $n = u.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = ss();
  return /* @__PURE__ */ l.jsx(
    os,
    {
      ref: n,
      className: M(r && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
$n.displayName = "FormLabel";
const as = u.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: s } = ss();
  return /* @__PURE__ */ l.jsx(
    Cl,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${s}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
as.displayName = "FormControl";
const Zm = u.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ss();
  return /* @__PURE__ */ l.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: M("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Zm.displayName = "FormDescription";
const Wn = u.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: s } = ss(), a = o ? String(o?.message) : t;
  return a ? /* @__PURE__ */ l.jsx(
    "p",
    {
      ref: r,
      id: s,
      className: M(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...n,
      children: a
    }
  ) : null;
});
Wn.displayName = "FormMessage";
const NT = it("font-bold tracking-tight", {
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
}), xA = I.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => {
    const s = t || "h1";
    return /* @__PURE__ */ l.jsx(
      s,
      {
        className: M(NT({ variant: t }), e),
        ref: o,
        ...r,
        children: n
      }
    );
  }
), ki = I.forwardRef(({ className: e, type: t, ...n }, r) => t === "textarea" ? /* @__PURE__ */ l.jsx(
  "textarea",
  {
    rows: 1,
    ref: r,
    className: M(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...n
  }
) : /* @__PURE__ */ l.jsx(
  "input",
  {
    ref: r,
    type: t,
    className: M(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:bg-accent file:px-2 file:h-6.5 file:text-accent-foreground file:rounded-md file:cursor-pointer",
      e
    ),
    ...n
  }
)), yA = ({
  name: e,
  label: t,
  placeholder: n,
  mask: r,
  ...o
}) => {
  const s = Tn();
  return /* @__PURE__ */ l.jsx(
    Lr,
    {
      control: s.control,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ l.jsxs(Ln, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ l.jsx($n, { children: t }),
        /* @__PURE__ */ l.jsx(as, { children: r ? /* @__PURE__ */ l.jsx(
          ZT,
          {
            mask: r,
            placeholder: n,
            ...o,
            ...a
          }
        ) : /* @__PURE__ */ l.jsx(ki, { placeholder: n, ...o, ...a }) }),
        /* @__PURE__ */ l.jsx(Wn, {})
      ] })
    }
  );
};
var Qm = Object.freeze({
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
}), ET = "VisuallyHidden", is = u.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(
    W.span,
    {
      ...e,
      ref: t,
      style: { ...Qm, ...e.style }
    }
  )
);
is.displayName = ET;
var Jm = is, rn = "NavigationMenu", [Di, ep, RT] = en(rn), [ga, MT, TT] = en(rn), [Ai, wA] = Ce(
  rn,
  [RT, TT]
), [PT, We] = Ai(rn), [kT, DT] = Ai(rn), tp = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      delayDuration: a = 200,
      skipDelayDuration: i = 300,
      orientation: c = "horizontal",
      dir: d,
      ...f
    } = e, [m, p] = u.useState(null), g = oe(t, (T) => p(T)), v = xt(d), h = u.useRef(0), b = u.useRef(0), x = u.useRef(0), [y, w] = u.useState(!0), [S, N] = Se({
      prop: r,
      onChange: (T) => {
        const k = T !== "", F = i > 0;
        k ? (window.clearTimeout(x.current), F && w(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
          () => w(!0),
          i
        )), o?.(T);
      },
      defaultProp: s ?? "",
      caller: rn
    }), C = u.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => N(""), 150);
    }, [N]), E = u.useCallback(
      (T) => {
        window.clearTimeout(b.current), N(T);
      },
      [N]
    ), R = u.useCallback(
      (T) => {
        S === T ? window.clearTimeout(b.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(b.current), N(T);
        }, a);
      },
      [S, N, a]
    );
    return u.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(b.current), window.clearTimeout(x.current);
    }, []), /* @__PURE__ */ l.jsx(
      np,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: v,
        orientation: c,
        rootNavigationMenu: m,
        onTriggerEnter: (T) => {
          window.clearTimeout(h.current), y ? R(T) : E(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), C();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: C,
        onItemSelect: (T) => {
          N((k) => k === T ? "" : T);
        },
        onItemDismiss: () => N(""),
        children: /* @__PURE__ */ l.jsx(
          W.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: v,
            ...f,
            ref: g
          }
        )
      }
    );
  }
);
tp.displayName = rn;
var va = "NavigationMenuSub", AT = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      ...i
    } = e, c = We(va, n), [d, f] = Se({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: va
    });
    return /* @__PURE__ */ l.jsx(
      np,
      {
        scope: n,
        isRootMenu: !1,
        value: d,
        dir: c.dir,
        orientation: a,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (m) => f(m),
        onItemSelect: (m) => f(m),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ l.jsx(W.div, { "data-orientation": a, ...i, ref: t })
      }
    );
  }
);
AT.displayName = va;
var np = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: s,
    children: a,
    value: i,
    onItemSelect: c,
    onItemDismiss: d,
    onTriggerEnter: f,
    onTriggerLeave: m,
    onContentEnter: p,
    onContentLeave: g
  } = e, [v, h] = u.useState(null), [b, x] = u.useState(/* @__PURE__ */ new Map()), [y, w] = u.useState(null);
  return /* @__PURE__ */ l.jsx(
    PT,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: i,
      previousValue: Nr(i),
      baseId: be(),
      dir: o,
      orientation: s,
      viewport: v,
      onViewportChange: h,
      indicatorTrack: y,
      onIndicatorTrackChange: w,
      onTriggerEnter: me(f),
      onTriggerLeave: me(m),
      onContentEnter: me(p),
      onContentLeave: me(g),
      onItemSelect: me(c),
      onItemDismiss: me(d),
      onViewportContentChange: u.useCallback((S, N) => {
        x((C) => (C.set(S, N), new Map(C)));
      }, []),
      onViewportContentRemove: u.useCallback((S) => {
        x((N) => N.has(S) ? (N.delete(S), new Map(N)) : N);
      }, []),
      children: /* @__PURE__ */ l.jsx(Di.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(kT, { scope: t, items: b, children: a }) })
    }
  );
}, rp = "NavigationMenuList", op = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = We(rp, n), s = /* @__PURE__ */ l.jsx(W.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ l.jsx(W.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ l.jsx(Di.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ l.jsx(pp, { asChild: !0, children: s }) : s }) });
  }
);
op.displayName = rp;
var sp = "NavigationMenuItem", [_T, ap] = Ai(sp), ip = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, s = be(), a = r || s || "LEGACY_REACT_AUTO_VALUE", i = u.useRef(null), c = u.useRef(null), d = u.useRef(null), f = u.useRef(() => {
    }), m = u.useRef(!1), p = u.useCallback((v = "start") => {
      if (i.current) {
        f.current();
        const h = xa(i.current);
        h.length && ji(v === "start" ? h : h.reverse());
      }
    }, []), g = u.useCallback(() => {
      if (i.current) {
        const v = xa(i.current);
        v.length && (f.current = WT(v));
      }
    }, []);
    return /* @__PURE__ */ l.jsx(
      _T,
      {
        scope: n,
        value: a,
        triggerRef: c,
        contentRef: i,
        focusProxyRef: d,
        wasEscapeCloseRef: m,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ l.jsx(W.li, { ...o, ref: t })
      }
    );
  }
);
ip.displayName = sp;
var ba = "NavigationMenuTrigger", cp = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, s = We(ba, e.__scopeNavigationMenu), a = ap(ba, e.__scopeNavigationMenu), i = u.useRef(null), c = oe(i, a.triggerRef, t), d = gp(s.baseId, a.value), f = vp(s.baseId, a.value), m = u.useRef(!1), p = u.useRef(!1), g = a.value === s.value;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Di.ItemSlot, { scope: n, value: a.value, children: /* @__PURE__ */ l.jsx(hp, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      W.button,
      {
        id: d,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Ii(g),
        "aria-expanded": g,
        "aria-controls": f,
        ...o,
        ref: c,
        onPointerEnter: j(e.onPointerEnter, () => {
          p.current = !1, a.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: j(
          e.onPointerMove,
          wo(() => {
            r || p.current || a.wasEscapeCloseRef.current || m.current || (s.onTriggerEnter(a.value), m.current = !0);
          })
        ),
        onPointerLeave: j(
          e.onPointerLeave,
          wo(() => {
            r || (s.onTriggerLeave(), m.current = !1);
          })
        ),
        onClick: j(e.onClick, () => {
          s.onItemSelect(a.value), p.current = g;
        }),
        onKeyDown: j(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[s.orientation];
          g && v.key === b && (a.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Jm,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: a.focusProxyRef,
          onFocus: (v) => {
            const h = a.contentRef.current, b = v.relatedTarget, x = b === i.current, y = h?.contains(b);
            (x || !y) && a.onFocusProxyEnter(x ? "start" : "end");
          }
        }
      ),
      s.viewport && /* @__PURE__ */ l.jsx("span", { "aria-owns": f })
    ] })
  ] });
});
cp.displayName = ba;
var OT = "NavigationMenuLink", cl = "navigationMenu.linkSelect", lp = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...s } = e;
    return /* @__PURE__ */ l.jsx(hp, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      W.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...s,
        ref: t,
        onClick: j(
          e.onClick,
          (a) => {
            const i = a.target, c = new CustomEvent(cl, {
              bubbles: !0,
              cancelable: !0
            });
            if (i.addEventListener(cl, (d) => o?.(d), { once: !0 }), rr(i, c), !c.defaultPrevented && !a.metaKey) {
              const d = new CustomEvent(io, {
                bubbles: !0,
                cancelable: !0
              });
              rr(i, d);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
lp.displayName = OT;
var _i = "NavigationMenuIndicator", up = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = We(_i, e.__scopeNavigationMenu), s = !!o.value;
  return o.indicatorTrack ? bl.createPortal(
    /* @__PURE__ */ l.jsx(ve, { present: n || s, children: /* @__PURE__ */ l.jsx(jT, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
up.displayName = _i;
var jT = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = We(_i, n), s = ep(n), [a, i] = u.useState(
    null
  ), [c, d] = u.useState(null), f = o.orientation === "horizontal", m = !!o.value;
  u.useEffect(() => {
    const v = s().find((h) => h.value === o.value)?.ref.current;
    v && i(v);
  }, [s, o.value]);
  const p = () => {
    a && d({
      size: f ? a.offsetWidth : a.offsetHeight,
      offset: f ? a.offsetLeft : a.offsetTop
    });
  };
  return ya(a, p), ya(o.indicatorTrack, p), c ? /* @__PURE__ */ l.jsx(
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
          width: c.size + "px",
          transform: `translateX(${c.offset}px)`
        } : {
          top: 0,
          height: c.size + "px",
          transform: `translateY(${c.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), En = "NavigationMenuContent", dp = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = We(En, e.__scopeNavigationMenu), s = ap(En, e.__scopeNavigationMenu), a = oe(s.contentRef, t), i = s.value === o.value, c = {
    value: s.value,
    triggerRef: s.triggerRef,
    focusProxyRef: s.focusProxyRef,
    wasEscapeCloseRef: s.wasEscapeCloseRef,
    onContentFocusOutside: s.onContentFocusOutside,
    onRootContentClose: s.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ l.jsx(IT, { forceMount: n, ...c, ref: a }) : /* @__PURE__ */ l.jsx(ve, { present: n || i, children: /* @__PURE__ */ l.jsx(
    fp,
    {
      "data-state": Ii(i),
      ...c,
      ref: a,
      onPointerEnter: j(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: j(
        e.onPointerLeave,
        wo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !i && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
dp.displayName = En;
var IT = u.forwardRef((e, t) => {
  const n = We(En, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return ge(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), ge(() => () => o(e.value), [e.value, o]), null;
}), io = "navigationMenu.rootContentDismiss", fp = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: s,
    wasEscapeCloseRef: a,
    onRootContentClose: i,
    onContentFocusOutside: c,
    ...d
  } = e, f = We(En, n), m = u.useRef(null), p = oe(m, t), g = gp(f.baseId, r), v = vp(f.baseId, r), h = ep(n), b = u.useRef(null), { onItemDismiss: x } = f;
  u.useEffect(() => {
    const w = m.current;
    if (f.isRootMenu && w) {
      const S = () => {
        x(), i(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(io, S), () => w.removeEventListener(io, S);
    }
  }, [f.isRootMenu, e.value, o, x, i]);
  const y = u.useMemo(() => {
    const S = h().map((k) => k.value);
    f.dir === "rtl" && S.reverse();
    const N = S.indexOf(f.value), C = S.indexOf(f.previousValue), E = r === f.value, R = C === S.indexOf(r);
    if (!E && !R) return b.current;
    const T = (() => {
      if (N !== C) {
        if (E && C !== -1) return N > C ? "from-end" : "from-start";
        if (R && N !== -1) return N > C ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = T, T;
  }, [f.previousValue, f.value, f.dir, h, r]);
  return /* @__PURE__ */ l.jsx(pp, { asChild: !0, children: /* @__PURE__ */ l.jsx(
    At,
    {
      id: v,
      "aria-labelledby": g,
      "data-motion": y,
      "data-orientation": f.orientation,
      ...d,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const w = new Event(io, {
          bubbles: !0,
          cancelable: !0
        });
        m.current?.dispatchEvent(w);
      },
      onFocusOutside: j(e.onFocusOutside, (w) => {
        c();
        const S = w.target;
        f.rootNavigationMenu?.contains(S) && w.preventDefault();
      }),
      onPointerDownOutside: j(e.onPointerDownOutside, (w) => {
        const S = w.target, N = h().some((E) => E.ref.current?.contains(S)), C = f.isRootMenu && f.viewport?.contains(S);
        (N || C || !f.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: j(e.onKeyDown, (w) => {
        const S = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !S) {
          const C = xa(w.currentTarget), E = document.activeElement, R = C.findIndex((F) => F === E), k = w.shiftKey ? C.slice(0, R).reverse() : C.slice(R + 1, C.length);
          ji(k) ? w.preventDefault() : s.current?.focus();
        }
      }),
      onEscapeKeyDown: j(e.onEscapeKeyDown, (w) => {
        a.current = !0;
      })
    }
  ) });
}), Oi = "NavigationMenuViewport", mp = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, s = !!We(Oi, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ l.jsx(ve, { present: n || s, children: /* @__PURE__ */ l.jsx(FT, { ...r, ref: t }) });
});
mp.displayName = Oi;
var FT = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, s = We(Oi, n), a = oe(t, s.onViewportChange), i = DT(
    En,
    e.__scopeNavigationMenu
  ), [c, d] = u.useState(null), [f, m] = u.useState(null), p = c ? c?.width + "px" : void 0, g = c ? c?.height + "px" : void 0, v = !!s.value, h = v ? s.value : s.previousValue;
  return ya(f, () => {
    f && d({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ l.jsx(
    W.div,
    {
      "data-state": Ii(v),
      "data-orientation": s.orientation,
      ...o,
      ref: a,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && s.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: j(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: j(e.onPointerLeave, wo(s.onContentLeave)),
      children: Array.from(i.items).map(([x, { ref: y, forceMount: w, ...S }]) => {
        const N = h === x;
        return /* @__PURE__ */ l.jsx(ve, { present: w || N, children: /* @__PURE__ */ l.jsx(
          fp,
          {
            ...S,
            ref: st(y, (C) => {
              N && C && m(C);
            })
          }
        ) }, x);
      })
    }
  );
}), LT = "FocusGroup", pp = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = We(LT, n);
    return /* @__PURE__ */ l.jsx(ga.Provider, { scope: n, children: /* @__PURE__ */ l.jsx(ga.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(W.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), ll = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], $T = "FocusGroupItem", hp = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = MT(n), s = We($T, n);
    return /* @__PURE__ */ l.jsx(ga.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      W.button,
      {
        ...r,
        ref: t,
        onKeyDown: j(e.onKeyDown, (a) => {
          if (["Home", "End", ...ll].includes(a.key)) {
            let c = o().map((m) => m.ref.current);
            if ([s.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && c.reverse(), ll.includes(a.key)) {
              const m = c.indexOf(a.currentTarget);
              c = c.slice(m + 1);
            }
            setTimeout(() => ji(c)), a.preventDefault();
          }
        })
      }
    ) });
  }
);
function xa(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ji(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function WT(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function ya(e, t) {
  const n = me(t);
  ge(() => {
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
function Ii(e) {
  return e ? "open" : "closed";
}
function gp(e, t) {
  return `${e}-trigger-${t}`;
}
function vp(e, t) {
  return `${e}-content-${t}`;
}
function wo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var bp = tp, xp = op, BT = ip, yp = cp, VT = lp, wp = up, Cp = dp, Sp = mp;
const HT = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  bp,
  {
    ref: r,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Np, {})
    ]
  }
));
HT.displayName = bp.displayName;
const zT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xp,
  {
    ref: n,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
zT.displayName = xp.displayName;
const CA = BT, YT = it(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), GT = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  yp,
  {
    ref: r,
    className: M(YT(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ l.jsx(
        Mt,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
GT.displayName = yp.displayName;
const KT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Cp,
  {
    ref: n,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
KT.displayName = Cp.displayName;
const UT = VT, Np = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ l.jsx(
  Sp,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Np.displayName = Sp.displayName;
const qT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  wp,
  {
    ref: n,
    className: M(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
qT.displayName = wp.displayName;
const XT = I.forwardRef(({ className: e, title: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(UT, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
  "a",
  {
    ref: o,
    className: M(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ l.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: n })
    ]
  }
) }) }));
XT.displayName = "ListItem";
function ZT({
  value: e,
  mask: t,
  onChange: n,
  ...r
}) {
  const o = t.split("#").length - 1, s = t.split("A").length - 1, a = t.split("*").length - 1, i = o + s + a;
  function c(d) {
    const m = d.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, i);
    n(m);
  }
  return /* @__PURE__ */ l.jsx(
    ki,
    {
      value: Od(e, t),
      onChange: c,
      ...r
    }
  );
}
const QT = (e, t = 300) => {
  const [n, r] = Le(e);
  return gt(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, ul = it(
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
), JT = u.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: n,
    defaultValue: r = [],
    placeholder: o = "Select options",
    animation: s = 0,
    maxCount: a = 3,
    modalPopover: i = !1,
    className: c,
    preventSelectAll: d = !1,
    onSearchChange: f,
    isLoading: m,
    onCreate: p,
    ...g
  }, v) => {
    const [h, b] = u.useState(r), [x, y] = u.useState(!1), [w, S] = u.useState(!1), [N, C] = u.useState(""), E = QT(N, 300);
    gt(() => {
      f && f(E ?? "");
    }, [E]);
    const R = (D) => {
      if (D.key === "Enter")
        y(!0);
      else if (D.key === "Backspace" && !D.currentTarget.value) {
        const H = [...h];
        H.pop(), b(H), t(H);
      }
    }, T = (D) => {
      const H = h.includes(D) ? h.filter((B) => B !== D) : [...h, D];
      b(H), t(H);
    }, k = () => {
      b([]), t([]);
    }, F = () => {
      y((D) => !D);
    }, K = () => {
      const D = h.slice(0, a);
      b(D), t(D);
    }, q = () => {
      if (h.length === e.length)
        k();
      else {
        const D = e.map((H) => H.value);
        b(D), t(D);
      }
    };
    return /* @__PURE__ */ l.jsxs(
      Ar,
      {
        open: x,
        onOpenChange: y,
        modal: i,
        children: [
          /* @__PURE__ */ l.jsx(_r, { asChild: !0, children: /* @__PURE__ */ l.jsx(
            wt,
            {
              ref: v,
              ...g,
              onClick: F,
              variant: "outline",
              className: M(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ l.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, a).map((D) => {
                    const H = e.find((X) => X.value === D), B = H?.icon;
                    return /* @__PURE__ */ l.jsxs(
                      Tc,
                      {
                        className: M(
                          w ? "animate-bounce" : "",
                          ul({ variant: n })
                        ),
                        style: { animationDuration: `${s}s` },
                        children: [
                          B && /* @__PURE__ */ l.jsx(B, { className: "h-4 w-4 mr-2" }),
                          H?.label,
                          /* @__PURE__ */ l.jsx(
                            ec,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (X) => {
                                X.stopPropagation(), T(D);
                              }
                            }
                          )
                        ]
                      },
                      D
                    );
                  }),
                  h.length > a && /* @__PURE__ */ l.jsxs(
                    Tc,
                    {
                      className: M(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        ul({ variant: n })
                      ),
                      style: { animationDuration: `${s}s` },
                      children: [
                        `+ ${h.length - a}`,
                        /* @__PURE__ */ l.jsx(
                          ec,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (D) => {
                              D.stopPropagation(), K();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between", children: [
                  m && /* @__PURE__ */ l.jsx(nr, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ l.jsx(
                    dv,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (D) => {
                        D.stopPropagation(), k();
                      }
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Bh,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(Mt, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ l.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ l.jsx(Mt, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ l.jsx(
            Fn,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => y(!1),
              children: /* @__PURE__ */ l.jsxs(Rr, { shouldFilter: !f, children: [
                /* @__PURE__ */ l.jsx(
                  Ho,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: R,
                    onValueChange: C
                  }
                ),
                /* @__PURE__ */ l.jsxs(zo, { children: [
                  !m && /* @__PURE__ */ l.jsx(Yo, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ l.jsxs(Mr, { children: [
                    !m && !e.length && !!N.length && p && /* @__PURE__ */ l.jsx(
                      Gt,
                      {
                        onSelect: p,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ l.jsx(fv, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ l.jsx("b", { children: N })
                        ] })
                      },
                      "new"
                    ),
                    m && /* @__PURE__ */ l.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ l.jsx(nr, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !d && /* @__PURE__ */ l.jsxs(
                      Gt,
                      {
                        onSelect: q,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "div",
                            {
                              className: M(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ l.jsx(tc, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ l.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((D) => {
                      const H = h.includes(D.value);
                      return /* @__PURE__ */ l.jsxs(
                        Gt,
                        {
                          onSelect: () => T(D.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  H ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ l.jsx(tc, { className: "h-4 w-4" })
                              }
                            ),
                            D.icon && /* @__PURE__ */ l.jsx(D.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ l.jsx("span", { children: D.label })
                          ]
                        },
                        D.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ l.jsx(rf, {})
                ] })
              ] })
            }
          ),
          s > 0 && h.length > 0 && /* @__PURE__ */ l.jsx(
            mv,
            {
              className: M(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                w ? "" : "text-muted-foreground"
              ),
              onClick: () => S(!w)
            }
          )
        ]
      }
    );
  }
);
JT.displayName = "MultiSelect";
const eP = ({ className: e, ...t }) => /* @__PURE__ */ l.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
eP.displayName = "Pagination";
const tP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ul",
  {
    ref: n,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
tP.displayName = "PaginationContent";
const nP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("li", { ref: n, className: M("", e), ...t }));
nP.displayName = "PaginationItem";
const Fi = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ l.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      Ut({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
Fi.displayName = "PaginationLink";
const rP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Fi,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(pv, { className: "h-4 w-4" })
  }
);
rP.displayName = "PaginationPrevious";
const oP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Fi,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(Aa, { className: "h-4 w-4" })
  }
);
oP.displayName = "PaginationNext";
const sP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(yl, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
sP.displayName = "PaginationEllipsis";
var Li = "Radio", [aP, Ep] = Ce(Li), [iP, cP] = aP(Li), Rp = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: s,
      disabled: a,
      value: i = "on",
      onCheck: c,
      form: d,
      ...f
    } = e, [m, p] = u.useState(null), g = oe(t, (b) => p(b)), v = u.useRef(!1), h = m ? d || !!m.closest("form") : !0;
    return /* @__PURE__ */ l.jsxs(iP, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ l.jsx(
        W.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": kp(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: g,
          onClick: j(e.onClick, (b) => {
            o || c?.(), h && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ l.jsx(
        Pp,
        {
          control: m,
          bubbles: !v.current,
          name: r,
          value: i,
          checked: o,
          required: s,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Rp.displayName = Li;
var Mp = "RadioIndicator", Tp = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = cP(Mp, n);
    return /* @__PURE__ */ l.jsx(ve, { present: r || s.checked, children: /* @__PURE__ */ l.jsx(
      W.span,
      {
        "data-state": kp(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Tp.displayName = Mp;
var lP = "RadioBubbleInput", Pp = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = u.useRef(null), i = oe(a, s), c = Nr(n), d = Wo(t);
    return u.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (c !== n && g) {
        const v = new Event("click", { bubbles: r });
        g.call(f, n), f.dispatchEvent(v);
      }
    }, [c, n, r]), /* @__PURE__ */ l.jsx(
      W.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
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
Pp.displayName = lP;
function kp(e) {
  return e ? "checked" : "unchecked";
}
var uP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], cs = "RadioGroup", [dP, SA] = Ce(cs, [
  jt,
  Ep
]), Dp = jt(), Ap = Ep(), [fP, mP] = dP(cs), _p = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: s,
      required: a = !1,
      disabled: i = !1,
      orientation: c,
      dir: d,
      loop: f = !0,
      onValueChange: m,
      ...p
    } = e, g = Dp(n), v = xt(d), [h, b] = Se({
      prop: s,
      defaultProp: o ?? null,
      onChange: m,
      caller: cs
    });
    return /* @__PURE__ */ l.jsx(
      fP,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: h,
        onValueChange: b,
        children: /* @__PURE__ */ l.jsx(
          es,
          {
            asChild: !0,
            ...g,
            orientation: c,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ l.jsx(
              W.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: v,
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
_p.displayName = cs;
var Op = "RadioGroupItem", jp = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = mP(Op, n), a = s.disabled || r, i = Dp(n), c = Ap(n), d = u.useRef(null), f = oe(t, d), m = s.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const g = (h) => {
        uP.includes(h.key) && (p.current = !0);
      }, v = () => p.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ l.jsx(
      ts,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: m,
        children: /* @__PURE__ */ l.jsx(
          Rp,
          {
            disabled: a,
            required: s.required,
            checked: m,
            ...c,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: j((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: j(o.onFocus, () => {
              p.current && d.current?.click();
            })
          }
        )
      }
    );
  }
);
jp.displayName = Op;
var pP = "RadioGroupIndicator", Ip = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Ap(n);
    return /* @__PURE__ */ l.jsx(Tp, { ...o, ...r, ref: t });
  }
);
Ip.displayName = pP;
var Fp = _p, Lp = jp, hP = Ip;
const gP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Fp,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: n
  }
));
gP.displayName = Fp.displayName;
const vP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Lp,
  {
    ref: n,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(hP, { className: "flex items-center justify-center", children: /* @__PURE__ */ l.jsx(wl, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
vP.displayName = Lp.displayName;
function wa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function bP(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var $i = "ScrollArea", [$p, NA] = Ce($i), [xP, Be] = $p($i), Wp = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...a
    } = e, [i, c] = u.useState(null), [d, f] = u.useState(null), [m, p] = u.useState(null), [g, v] = u.useState(null), [h, b] = u.useState(null), [x, y] = u.useState(0), [w, S] = u.useState(0), [N, C] = u.useState(!1), [E, R] = u.useState(!1), T = oe(t, (F) => c(F)), k = xt(o);
    return /* @__PURE__ */ l.jsx(
      xP,
      {
        scope: n,
        type: r,
        dir: k,
        scrollHideDelay: s,
        scrollArea: i,
        viewport: d,
        onViewportChange: f,
        content: m,
        onContentChange: p,
        scrollbarX: g,
        onScrollbarXChange: v,
        scrollbarXEnabled: N,
        onScrollbarXEnabledChange: C,
        scrollbarY: h,
        onScrollbarYChange: b,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: y,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ l.jsx(
          W.div,
          {
            dir: k,
            ...a,
            ref: T,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": x + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Wp.displayName = $i;
var Bp = "ScrollAreaViewport", Vp = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, a = Be(Bp, n), i = u.useRef(null), c = oe(t, i, a.onViewportChange);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ l.jsx(
        W.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
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
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ l.jsx("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Vp.displayName = Bp;
var ut = "ScrollAreaScrollbar", Wi = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Be(ut, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = o, i = e.orientation === "horizontal";
    return u.useEffect(() => (i ? s(!0) : a(!0), () => {
      i ? s(!1) : a(!1);
    }), [i, s, a]), o.type === "hover" ? /* @__PURE__ */ l.jsx(yP, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ l.jsx(wP, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ l.jsx(Hp, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ l.jsx(Bi, { ...r, ref: t }) : null;
  }
);
Wi.displayName = ut;
var yP = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Be(ut, e.__scopeScrollArea), [s, a] = u.useState(!1);
  return u.useEffect(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const d = () => {
        window.clearTimeout(c), a(!0);
      }, f = () => {
        c = window.setTimeout(() => a(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", d), i.addEventListener("pointerleave", f), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", d), i.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ l.jsx(ve, { present: n || s, children: /* @__PURE__ */ l.jsx(
    Hp,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), wP = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Be(ut, e.__scopeScrollArea), s = e.orientation === "horizontal", a = us(() => c("SCROLL_END"), 100), [i, c] = bP("hidden", {
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
    if (i === "idle") {
      const d = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [i, o.scrollHideDelay, c]), u.useEffect(() => {
    const d = o.viewport, f = s ? "scrollLeft" : "scrollTop";
    if (d) {
      let m = d[f];
      const p = () => {
        const g = d[f];
        m !== g && (c("SCROLL"), a()), m = g;
      };
      return d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [o.viewport, s, c, a]), /* @__PURE__ */ l.jsx(ve, { present: n || i !== "hidden", children: /* @__PURE__ */ l.jsx(
    Bi,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: j(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: j(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Hp = u.forwardRef((e, t) => {
  const n = Be(ut, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, a] = u.useState(!1), i = e.orientation === "horizontal", c = us(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(i ? d : f);
    }
  }, 10);
  return Rn(n.viewport, c), Rn(n.content, c), /* @__PURE__ */ l.jsx(ve, { present: r || s, children: /* @__PURE__ */ l.jsx(
    Bi,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Bi = u.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Be(ut, e.__scopeScrollArea), s = u.useRef(null), a = u.useRef(0), [i, c] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = Up(i.viewport, i.content), f = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (p) => a.current = p
  };
  function m(p, g) {
    return MP(p, a.current, i, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ l.jsx(
    CP,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollLeft, g = dl(p, i, o.dir);
          s.current.style.transform = `translate3d(${g}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = m(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ l.jsx(
    SP,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollTop, g = dl(p, i);
          s.current.style.transform = `translate3d(0, ${g}px, 0)`;
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
}), CP = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Be(ut, e.__scopeScrollArea), [a, i] = u.useState(), c = u.useRef(null), d = oe(t, c, s.onScrollbarXChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l.jsx(
    Yp,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ls(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, m) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(p), Xp(p, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: So(a.paddingLeft),
            paddingEnd: So(a.paddingRight)
          }
        });
      }
    }
  );
}), SP = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Be(ut, e.__scopeScrollArea), [a, i] = u.useState(), c = u.useRef(null), d = oe(t, c, s.onScrollbarYChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l.jsx(
    Yp,
    {
      "data-orientation": "vertical",
      ...o,
      ref: d,
      sizes: n,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ls(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, m) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(p), Xp(p, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: So(a.paddingTop),
            paddingEnd: So(a.paddingBottom)
          }
        });
      }
    }
  );
}), [NP, zp] = $p(ut), Yp = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: s,
    onThumbPointerUp: a,
    onThumbPointerDown: i,
    onThumbPositionChange: c,
    onDragScroll: d,
    onWheelScroll: f,
    onResize: m,
    ...p
  } = e, g = Be(ut, n), [v, h] = u.useState(null), b = oe(t, (T) => h(T)), x = u.useRef(null), y = u.useRef(""), w = g.viewport, S = r.content - r.viewport, N = me(f), C = me(c), E = us(m, 10);
  function R(T) {
    if (x.current) {
      const k = T.clientX - x.current.left, F = T.clientY - x.current.top;
      d({ x: k, y: F });
    }
  }
  return u.useEffect(() => {
    const T = (k) => {
      const F = k.target;
      v?.contains(F) && N(k, S);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [w, v, S, N]), u.useEffect(C, [r, C]), Rn(v, E), Rn(g.content, E), /* @__PURE__ */ l.jsx(
    NP,
    {
      scope: n,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: me(s),
      onThumbPointerUp: me(a),
      onThumbPositionChange: C,
      onThumbPointerDown: me(i),
      children: /* @__PURE__ */ l.jsx(
        W.div,
        {
          ...p,
          ref: b,
          style: { position: "absolute", ...p.style },
          onPointerDown: j(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), x.current = v.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), R(T));
          }),
          onPointerMove: j(e.onPointerMove, R),
          onPointerUp: j(e.onPointerUp, (T) => {
            const k = T.target;
            k.hasPointerCapture(T.pointerId) && k.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = y.current, g.viewport && (g.viewport.style.scrollBehavior = ""), x.current = null;
          })
        }
      )
    }
  );
}), Co = "ScrollAreaThumb", Gp = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = zp(Co, e.__scopeScrollArea);
    return /* @__PURE__ */ l.jsx(ve, { present: n || o.hasThumb, children: /* @__PURE__ */ l.jsx(EP, { ref: t, ...r }) });
  }
), EP = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = Be(Co, n), a = zp(Co, n), { onThumbPositionChange: i } = a, c = oe(
      t,
      (m) => a.onThumbChange(m)
    ), d = u.useRef(void 0), f = us(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const m = s.viewport;
      if (m) {
        const p = () => {
          if (f(), !d.current) {
            const g = TP(m, i);
            d.current = g, i();
          }
        };
        return i(), m.addEventListener("scroll", p), () => m.removeEventListener("scroll", p);
      }
    }, [s.viewport, f, i]), /* @__PURE__ */ l.jsx(
      W.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: j(e.onPointerDownCapture, (m) => {
          const g = m.target.getBoundingClientRect(), v = m.clientX - g.left, h = m.clientY - g.top;
          a.onThumbPointerDown({ x: v, y: h });
        }),
        onPointerUp: j(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
Gp.displayName = Co;
var Vi = "ScrollAreaCorner", Kp = u.forwardRef(
  (e, t) => {
    const n = Be(Vi, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ l.jsx(RP, { ...e, ref: t }) : null;
  }
);
Kp.displayName = Vi;
var RP = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Be(Vi, n), [s, a] = u.useState(0), [i, c] = u.useState(0), d = !!(s && i);
  return Rn(o.scrollbarX, () => {
    const f = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(f), c(f);
  }), Rn(o.scrollbarY, () => {
    const f = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(f), a(f);
  }), d ? /* @__PURE__ */ l.jsx(
    W.div,
    {
      ...r,
      ref: t,
      style: {
        width: s,
        height: i,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function So(e) {
  return e ? parseInt(e, 10) : 0;
}
function Up(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ls(e) {
  const t = Up(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function MP(e, t, n, r = "ltr") {
  const o = ls(n), s = o / 2, a = t || s, i = o - a, c = n.scrollbar.paddingStart + a, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, f = n.content - n.viewport, m = r === "ltr" ? [0, f] : [f * -1, 0];
  return qp([c, d], m)(e);
}
function dl(e, t, n = "ltr") {
  const r = ls(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, a = t.content - t.viewport, i = s - r, c = n === "ltr" ? [0, a] : [a * -1, 0], d = wa(e, c);
  return qp([0, a], [0, i])(d);
}
function qp(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Xp(e, t) {
  return e > 0 && e < t;
}
var TP = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== s.left, i = n.top !== s.top;
    (a || i) && t(), n = s, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function us(e, t) {
  const n = me(e), r = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Rn(e, t) {
  const n = me(t);
  ge(() => {
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
var Zp = Wp, PP = Vp, kP = Kp;
const DP = I.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Zp,
  {
    ref: r,
    className: M("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(PP, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ l.jsx(Qp, {}),
      /* @__PURE__ */ l.jsx(kP, {})
    ]
  }
));
DP.displayName = Zp.displayName;
const Qp = I.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ l.jsx(
  Wi,
  {
    ref: r,
    orientation: t,
    className: M(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(Gp, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Qp.displayName = Wi.displayName;
var AP = [" ", "Enter", "ArrowUp", "ArrowDown"], _P = [" ", "Enter"], Qt = "Select", [ds, fs, OP] = en(Qt), [Bn, EA] = Ce(Qt, [
  OP,
  _t
]), ms = _t(), [jP, Ft] = Bn(Qt), [IP, FP] = Bn(Qt), Jp = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: d,
    name: f,
    autoComplete: m,
    disabled: p,
    required: g,
    form: v
  } = e, h = ms(t), [b, x] = u.useState(null), [y, w] = u.useState(null), [S, N] = u.useState(!1), C = xt(d), [E, R] = Se({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Qt
  }), [T, k] = Se({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Qt
  }), F = u.useRef(null), K = b ? v || !!b.closest("form") : !0, [q, D] = u.useState(/* @__PURE__ */ new Set()), H = Array.from(q).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ l.jsx(Pr, { ...h, children: /* @__PURE__ */ l.jsxs(
    jP,
    {
      required: g,
      scope: t,
      trigger: b,
      onTriggerChange: x,
      valueNode: y,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: N,
      contentId: be(),
      value: T,
      onValueChange: k,
      open: E,
      onOpenChange: R,
      dir: C,
      triggerPointerDownPosRef: F,
      disabled: p,
      children: [
        /* @__PURE__ */ l.jsx(ds.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
          IP,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((B) => {
              D((X) => new Set(X).add(B));
            }, []),
            onNativeOptionRemove: u.useCallback((B) => {
              D((X) => {
                const _ = new Set(X);
                return _.delete(B), _;
              });
            }, []),
            children: n
          }
        ) }),
        K ? /* @__PURE__ */ l.jsxs(
          Nh,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: T,
            onChange: (B) => k(B.target.value),
            disabled: p,
            form: v,
            children: [
              T === void 0 ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
              Array.from(q)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Jp.displayName = Qt;
var eh = "SelectTrigger", th = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = ms(n), a = Ft(eh, n), i = a.disabled || r, c = oe(t, a.onTriggerChange), d = fs(n), f = u.useRef("touch"), [m, p, g] = Rh((h) => {
      const b = d().filter((w) => !w.disabled), x = b.find((w) => w.value === a.value), y = Mh(b, h, x);
      y !== void 0 && a.onValueChange(y.value);
    }), v = (h) => {
      i || (a.onOpenChange(!0), g()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(kr, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Eh(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: j(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && v(h);
        }),
        onPointerDown: j(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const b = h.target;
          b.hasPointerCapture(h.pointerId) && b.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (v(h), h.preventDefault());
        }),
        onKeyDown: j(o.onKeyDown, (h) => {
          const b = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(b && h.key === " ") && AP.includes(h.key) && (v(), h.preventDefault());
        })
      }
    ) });
  }
);
th.displayName = eh;
var nh = "SelectValue", rh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = Ft(nh, n), { onValueNodeHasChildrenChange: d } = c, f = s !== void 0, m = oe(t, c.onValueNodeChange);
    return ge(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ l.jsx(
      W.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: Eh(c.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: a }) : s
      }
    );
  }
);
rh.displayName = nh;
var LP = "SelectIcon", oh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(W.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
oh.displayName = LP;
var $P = "SelectPortal", sh = (e) => /* @__PURE__ */ l.jsx(tn, { asChild: !0, ...e });
sh.displayName = $P;
var Jt = "SelectContent", ah = u.forwardRef(
  (e, t) => {
    const n = Ft(Jt, e.__scopeSelect), [r, o] = u.useState();
    if (ge(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? pr.createPortal(
        /* @__PURE__ */ l.jsx(ih, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(ds.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(ch, { ...e, ref: t });
  }
);
ah.displayName = Jt;
var He = 10, [ih, Lt] = Bn(Jt), WP = "SelectContentImpl", BP = /* @__PURE__ */ Tt("SelectContent.RemoveScroll"), ch = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: p,
      collisionPadding: g,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: b,
      //
      ...x
    } = e, y = Ft(Jt, n), [w, S] = u.useState(null), [N, C] = u.useState(null), E = oe(t, (O) => S(O)), [R, T] = u.useState(null), [k, F] = u.useState(
      null
    ), K = fs(n), [q, D] = u.useState(!1), H = u.useRef(!1);
    u.useEffect(() => {
      if (w) return Ao(w);
    }, [w]), ko();
    const B = u.useCallback(
      (O) => {
        const [U, ...te] = K().map((Y) => Y.ref.current), [ee] = te.slice(-1), ne = document.activeElement;
        for (const Y of O)
          if (Y === ne || (Y?.scrollIntoView({ block: "nearest" }), Y === U && N && (N.scrollTop = 0), Y === ee && N && (N.scrollTop = N.scrollHeight), Y?.focus(), document.activeElement !== ne)) return;
      },
      [K, N]
    ), X = u.useCallback(
      () => B([R, w]),
      [B, R, w]
    );
    u.useEffect(() => {
      q && X();
    }, [q, X]);
    const { onOpenChange: _, triggerPointerDownPosRef: L } = y;
    u.useEffect(() => {
      if (w) {
        let O = { x: 0, y: 0 };
        const U = (ee) => {
          O = {
            x: Math.abs(Math.round(ee.pageX) - (L.current?.x ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (L.current?.y ?? 0))
          };
        }, te = (ee) => {
          O.x <= 10 && O.y <= 10 ? ee.preventDefault() : w.contains(ee.target) || _(!1), document.removeEventListener("pointermove", U), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", te, { capture: !0 });
        };
      }
    }, [w, _, L]), u.useEffect(() => {
      const O = () => _(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [_]);
    const [A, G] = Rh((O) => {
      const U = K().filter((ne) => !ne.disabled), te = U.find((ne) => ne.ref.current === document.activeElement), ee = Mh(U, O, te);
      ee && setTimeout(() => ee.ref.current.focus());
    }), P = u.useCallback(
      (O, U, te) => {
        const ee = !H.current && !te;
        (y.value !== void 0 && y.value === U || ee) && (T(O), ee && (H.current = !0));
      },
      [y.value]
    ), $ = u.useCallback(() => w?.focus(), [w]), z = u.useCallback(
      (O, U, te) => {
        const ee = !H.current && !te;
        (y.value !== void 0 && y.value === U || ee) && F(O);
      },
      [y.value]
    ), V = r === "popper" ? Ca : lh, J = V === Ca ? {
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: p,
      collisionPadding: g,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ l.jsx(
      ih,
      {
        scope: n,
        content: w,
        viewport: N,
        onViewportChange: C,
        itemRefCallback: P,
        selectedItem: R,
        onItemLeave: $,
        itemTextRefCallback: z,
        focusSelectedItem: X,
        selectedItemText: k,
        position: r,
        isPositioned: q,
        searchRef: A,
        children: /* @__PURE__ */ l.jsx(vr, { as: BP, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          gr,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: j(o, (O) => {
              y.trigger?.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              At,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  V,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...x,
                    ...J,
                    onPlaced: () => D(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: j(x.onKeyDown, (O) => {
                      const U = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !U && O.key.length === 1 && G(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let ee = K().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const ne = O.target, Y = ee.indexOf(ne);
                          ee = ee.slice(Y + 1);
                        }
                        setTimeout(() => B(ee)), O.preventDefault();
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
ch.displayName = WP;
var VP = "SelectItemAlignedPosition", lh = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Ft(Jt, n), a = Lt(Jt, n), [i, c] = u.useState(null), [d, f] = u.useState(null), m = oe(t, (E) => f(E)), p = fs(n), g = u.useRef(!1), v = u.useRef(!0), { viewport: h, selectedItem: b, selectedItemText: x, focusSelectedItem: y } = a, w = u.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && h && b && x) {
      const E = s.trigger.getBoundingClientRect(), R = d.getBoundingClientRect(), T = s.valueNode.getBoundingClientRect(), k = x.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ne = k.left - R.left, Y = T.left - ne, ie = E.left - Y, fe = E.width + ie, we = Math.max(fe, R.width), Re = window.innerWidth - He, ke = wa(Y, [
          He,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(He, Re - we)
        ]);
        i.style.minWidth = fe + "px", i.style.left = ke + "px";
      } else {
        const ne = R.right - k.right, Y = window.innerWidth - T.right - ne, ie = window.innerWidth - E.right - Y, fe = E.width + ie, we = Math.max(fe, R.width), Re = window.innerWidth - He, ke = wa(Y, [
          He,
          Math.max(He, Re - we)
        ]);
        i.style.minWidth = fe + "px", i.style.right = ke + "px";
      }
      const F = p(), K = window.innerHeight - He * 2, q = h.scrollHeight, D = window.getComputedStyle(d), H = parseInt(D.borderTopWidth, 10), B = parseInt(D.paddingTop, 10), X = parseInt(D.borderBottomWidth, 10), _ = parseInt(D.paddingBottom, 10), L = H + B + q + _ + X, A = Math.min(b.offsetHeight * 5, L), G = window.getComputedStyle(h), P = parseInt(G.paddingTop, 10), $ = parseInt(G.paddingBottom, 10), z = E.top + E.height / 2 - He, V = K - z, J = b.offsetHeight / 2, O = b.offsetTop + J, U = H + B + O, te = L - U;
      if (U <= z) {
        const ne = F.length > 0 && b === F[F.length - 1].ref.current;
        i.style.bottom = "0px";
        const Y = d.clientHeight - h.offsetTop - h.offsetHeight, ie = Math.max(
          V,
          J + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? $ : 0) + Y + X
        ), fe = U + ie;
        i.style.height = fe + "px";
      } else {
        const ne = F.length > 0 && b === F[0].ref.current;
        i.style.top = "0px";
        const ie = Math.max(
          z,
          H + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? P : 0) + J
        ) + te;
        i.style.height = ie + "px", h.scrollTop = U - z + h.offsetTop;
      }
      i.style.margin = `${He}px 0`, i.style.minHeight = A + "px", i.style.maxHeight = K + "px", r?.(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    i,
    d,
    h,
    b,
    x,
    s.dir,
    r
  ]);
  ge(() => w(), [w]);
  const [S, N] = u.useState();
  ge(() => {
    d && N(window.getComputedStyle(d).zIndex);
  }, [d]);
  const C = u.useCallback(
    (E) => {
      E && v.current === !0 && (w(), y?.(), v.current = !1);
    },
    [w, y]
  );
  return /* @__PURE__ */ l.jsx(
    zP,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: C,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ l.jsx(
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
lh.displayName = VP;
var HP = "SelectPopperPosition", Ca = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = He,
    ...s
  } = e, a = ms(n);
  return /* @__PURE__ */ l.jsx(
    Xo,
    {
      ...a,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ca.displayName = HP;
var [zP, Hi] = Bn(Jt, {}), Sa = "SelectViewport", uh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Lt(Sa, n), a = Hi(Sa, n), i = oe(t, s.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ l.jsx(ds.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
        W.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
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
          onScroll: j(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = a;
            if (p?.current && m) {
              const g = Math.abs(c.current - f.scrollTop);
              if (g > 0) {
                const v = window.innerHeight - He * 2, h = parseFloat(m.style.minHeight), b = parseFloat(m.style.height), x = Math.max(h, b);
                if (x < v) {
                  const y = x + g, w = Math.min(v, y), S = y - w;
                  m.style.height = w + "px", m.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, m.style.justifyContent = "flex-end");
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
uh.displayName = Sa;
var dh = "SelectGroup", [YP, GP] = Bn(dh), fh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = be();
    return /* @__PURE__ */ l.jsx(YP, { scope: n, id: o, children: /* @__PURE__ */ l.jsx(W.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
fh.displayName = dh;
var mh = "SelectLabel", ph = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = GP(mh, n);
    return /* @__PURE__ */ l.jsx(W.div, { id: o.id, ...r, ref: t });
  }
);
ph.displayName = mh;
var No = "SelectItem", [KP, hh] = Bn(No), gh = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = Ft(No, n), c = Lt(No, n), d = i.value === r, [f, m] = u.useState(s ?? ""), [p, g] = u.useState(!1), v = oe(
      t,
      (y) => c.itemRefCallback?.(y, r, o)
    ), h = be(), b = u.useRef("touch"), x = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l.jsx(
      KP,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: u.useCallback((y) => {
          m((w) => w || (y?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l.jsx(
          ds.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ l.jsx(
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
                ...a,
                ref: v,
                onFocus: j(a.onFocus, () => g(!0)),
                onBlur: j(a.onBlur, () => g(!1)),
                onClick: j(a.onClick, () => {
                  b.current !== "mouse" && x();
                }),
                onPointerUp: j(a.onPointerUp, () => {
                  b.current === "mouse" && x();
                }),
                onPointerDown: j(a.onPointerDown, (y) => {
                  b.current = y.pointerType;
                }),
                onPointerMove: j(a.onPointerMove, (y) => {
                  b.current = y.pointerType, o ? c.onItemLeave?.() : b.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: j(a.onPointerLeave, (y) => {
                  y.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: j(a.onKeyDown, (y) => {
                  c.searchRef?.current !== "" && y.key === " " || (_P.includes(y.key) && x(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
gh.displayName = No;
var Jn = "SelectItemText", vh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = Ft(Jn, n), i = Lt(Jn, n), c = hh(Jn, n), d = FP(Jn, n), [f, m] = u.useState(null), p = oe(
      t,
      (x) => m(x),
      c.onItemTextChange,
      (x) => i.itemTextRefCallback?.(x, c.value, c.disabled)
    ), g = f?.textContent, v = u.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: b } = d;
    return ge(() => (h(v), () => b(v)), [h, b, v]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(W.span, { id: c.textId, ...s, ref: p }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? pr.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
vh.displayName = Jn;
var bh = "SelectItemIndicator", xh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return hh(bh, n).isSelected ? /* @__PURE__ */ l.jsx(W.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
xh.displayName = bh;
var Na = "SelectScrollUpButton", yh = u.forwardRef((e, t) => {
  const n = Lt(Na, e.__scopeSelect), r = Hi(Na, e.__scopeSelect), [o, s] = u.useState(!1), a = oe(t, r.onScrollButtonChange);
  return ge(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = c.scrollTop > 0;
        s(d);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    Ch,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
yh.displayName = Na;
var Ea = "SelectScrollDownButton", wh = u.forwardRef((e, t) => {
  const n = Lt(Ea, e.__scopeSelect), r = Hi(Ea, e.__scopeSelect), [o, s] = u.useState(!1), a = oe(t, r.onScrollButtonChange);
  return ge(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < d;
        s(f);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    Ch,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
wh.displayName = Ea;
var Ch = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Lt("SelectScrollButton", n), a = u.useRef(null), i = fs(n), c = u.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), ge(() => {
    i().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ l.jsx(
    W.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: j(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: j(o.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: j(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), UP = "SelectSeparator", Sh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(W.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Sh.displayName = UP;
var Ra = "SelectArrow", qP = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ms(n), s = Ft(Ra, n), a = Lt(Ra, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ l.jsx(Zo, { ...o, ...r, ref: t }) : null;
  }
);
qP.displayName = Ra;
var XP = "SelectBubbleInput", Nh = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), s = oe(r, o), a = Nr(t);
    return u.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(m);
      }
    }, [a, t]), /* @__PURE__ */ l.jsx(
      W.select,
      {
        ...n,
        style: { ...Qm, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Nh.displayName = XP;
function Eh(e) {
  return e === "" || e === void 0;
}
function Rh(e) {
  const t = me(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), (function c(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), s = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Mh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = ZP(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function ZP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var QP = Jp, Th = th, JP = rh, ek = oh, tk = sh, Ph = ah, nk = uh, rk = fh, kh = ph, Dh = gh, ok = vh, sk = xh, Ah = yh, _h = wh, Oh = Sh;
const jh = QP, RA = rk, Ih = JP, zi = u.forwardRef(({ className: e, children: t, isLoading: n = !1, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Th,
  {
    ref: o,
    className: M(
      "flex h-9 w-full items-center text-left justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-1", children: [
        n && /* @__PURE__ */ l.jsx(nr, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ l.jsx(ek, { asChild: !0, children: /* @__PURE__ */ l.jsx(Mt, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
zi.displayName = Th.displayName;
const Fh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ah,
  {
    ref: n,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(hv, { className: "h-4 w-4" })
  }
));
Fh.displayName = Ah.displayName;
const Lh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _h,
  {
    ref: n,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(Mt, { className: "h-4 w-4" })
  }
));
Lh.displayName = _h.displayName;
const Yi = u.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ l.jsx(tk, { children: /* @__PURE__ */ l.jsxs(
  Ph,
  {
    ref: o,
    className: M(
      "relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx(Fh, {}),
      /* @__PURE__ */ l.jsx(
        nk,
        {
          className: M(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ l.jsx(Lh, {})
    ]
  }
) }));
Yi.displayName = Ph.displayName;
const ak = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  kh,
  {
    ref: n,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
ak.displayName = kh.displayName;
const Eo = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Dh,
  {
    ref: r,
    className: M(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(sk, { children: /* @__PURE__ */ l.jsx(hr, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l.jsx(ok, { children: t })
    ]
  }
));
Eo.displayName = Dh.displayName;
const ik = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Oh,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
ik.displayName = Oh.displayName;
const MA = ({
  name: e,
  label: t,
  placeholder: n,
  options: r,
  helpText: o,
  isLoading: s,
  ...a
}) => {
  const i = Tn();
  return /* @__PURE__ */ l.jsx(
    Lr,
    {
      control: i.control,
      name: e,
      render: ({ field: c }) => /* @__PURE__ */ l.jsxs(Ln, { children: [
        !!t && /* @__PURE__ */ l.jsx($n, { children: t }),
        /* @__PURE__ */ l.jsxs(
          jh,
          {
            onValueChange: c.onChange,
            value: c.value,
            defaultValue: c.value,
            ...a,
            children: [
              /* @__PURE__ */ l.jsx(as, { children: /* @__PURE__ */ l.jsx(zi, { isLoading: s, children: /* @__PURE__ */ l.jsx(Ih, { placeholder: n }) }) }),
              /* @__PURE__ */ l.jsx(Yi, { children: r.map((d) => /* @__PURE__ */ l.jsx(Eo, { value: d.value, children: d.label }, d.value)) })
            ]
          }
        ),
        !!o && /* @__PURE__ */ l.jsx(Zm, { children: o }),
        /* @__PURE__ */ l.jsx(Wn, {})
      ] })
    }
  );
};
var ck = "Separator", fl = "horizontal", lk = ["horizontal", "vertical"], $h = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = fl, ...o } = e, s = uk(r) ? r : fl, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    W.div,
    {
      "data-orientation": s,
      ...i,
      ...o,
      ref: t
    }
  );
});
$h.displayName = ck;
function uk(e) {
  return lk.includes(e);
}
var Wh = $h;
const Bh = u.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l.jsx(
    Wh,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: M(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Bh.displayName = Wh.displayName;
const TA = Oo, PA = Ya, kA = _n, dk = jo, Vh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Dn,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Vh.displayName = Dn.displayName;
const fk = it(
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
), mk = u.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(dk, { children: [
  /* @__PURE__ */ l.jsx(Vh, {}),
  /* @__PURE__ */ l.jsxs(
    An,
    {
      ref: o,
      className: M(fk({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ l.jsxs(_n, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ l.jsx(_a, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
mk.displayName = An.displayName;
const pk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
pk.displayName = "SheetHeader";
const hk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
hk.displayName = "SheetFooter";
const gk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  br,
  {
    ref: n,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
gk.displayName = br.displayName;
const vk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xr,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
vk.displayName = xr.displayName;
function bk({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: M("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var ps = "Switch", [xk, DA] = Ce(ps), [yk, wk] = xk(ps), Hh = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: c = "on",
      onCheckedChange: d,
      form: f,
      ...m
    } = e, [p, g] = u.useState(null), v = oe(t, (w) => g(w)), h = u.useRef(!1), b = p ? f || !!p.closest("form") : !0, [x, y] = Se({
      prop: o,
      defaultProp: s ?? !1,
      onChange: d,
      caller: ps
    });
    return /* @__PURE__ */ l.jsxs(yk, { scope: n, checked: x, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        W.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": a,
          "data-state": Kh(x),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...m,
          ref: v,
          onClick: j(e.onClick, (w) => {
            y((S) => !S), b && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ l.jsx(
        Gh,
        {
          control: p,
          bubbles: !h.current,
          name: r,
          value: c,
          checked: x,
          required: a,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Hh.displayName = ps;
var zh = "SwitchThumb", Yh = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = wk(zh, n);
    return /* @__PURE__ */ l.jsx(
      W.span,
      {
        "data-state": Kh(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Yh.displayName = zh;
var Ck = "SwitchBubbleInput", Gh = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = u.useRef(null), i = oe(a, s), c = Nr(n), d = Wo(t);
    return u.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (c !== n && g) {
        const v = new Event("click", { bubbles: r });
        g.call(f, n), f.dispatchEvent(v);
      }
    }, [c, n, r]), /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
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
Gh.displayName = Ck;
function Kh(e) {
  return e ? "checked" : "unchecked";
}
var Uh = Hh, Sk = Yh;
const Nk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Uh,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ l.jsx(
      Sk,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Nk.displayName = Uh.displayName;
const Ek = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ l.jsx(
  "table",
  {
    ref: n,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ek.displayName = "Table";
const Rk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "thead",
  {
    ref: n,
    className: M("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
Rk.displayName = "TableHeader";
const Mk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tbody",
  {
    ref: n,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Mk.displayName = "TableBody";
const Tk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tfoot",
  {
    ref: n,
    className: M(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
Tk.displayName = "TableFooter";
const Pk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tr",
  {
    ref: n,
    className: M(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Pk.displayName = "TableRow";
const kk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "th",
  {
    ref: n,
    className: M(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
kk.displayName = "TableHead";
const Dk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "td",
  {
    ref: n,
    className: M(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Dk.displayName = "TableCell";
const Ak = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "caption",
  {
    ref: n,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Ak.displayName = "TableCaption";
var hs = "Tabs", [_k, AA] = Ce(hs, [
  jt
]), qh = jt(), [Ok, Gi] = _k(hs), Xh = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...d
    } = e, f = xt(i), [m, p] = Se({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: hs
    });
    return /* @__PURE__ */ l.jsx(
      Ok,
      {
        scope: n,
        baseId: be(),
        value: m,
        onValueChange: p,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ l.jsx(
          W.div,
          {
            dir: f,
            "data-orientation": a,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
Xh.displayName = hs;
var Zh = "TabsList", Qh = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Gi(Zh, n), a = qh(n);
    return /* @__PURE__ */ l.jsx(
      es,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ l.jsx(
          W.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
Qh.displayName = Zh;
var Jh = "TabsTrigger", eg = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Gi(Jh, n), i = qh(n), c = rg(a.baseId, r), d = og(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ l.jsx(
      ts,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ l.jsx(
          W.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...s,
            ref: t,
            onMouseDown: j(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? a.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: j(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && a.onValueChange(r);
            }),
            onFocus: j(e.onFocus, () => {
              const m = a.activationMode !== "manual";
              !f && !o && m && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
eg.displayName = Jh;
var tg = "TabsContent", ng = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Gi(tg, n), c = rg(i.baseId, r), d = og(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ l.jsx(ve, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ l.jsx(
      W.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !p,
        id: d,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: m.current ? "0s" : void 0
        },
        children: p && s
      }
    ) });
  }
);
ng.displayName = tg;
function rg(e, t) {
  return `${e}-trigger-${t}`;
}
function og(e, t) {
  return `${e}-content-${t}`;
}
var jk = Xh, sg = Qh, ag = eg, ig = ng;
const _A = jk, Ik = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  sg,
  {
    ref: n,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Ik.displayName = sg.displayName;
const Fk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  ag,
  {
    ref: n,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Fk.displayName = ag.displayName;
const Lk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  ig,
  {
    ref: n,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Lk.displayName = ig.displayName;
const cg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "textarea",
  {
    className: M(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: n,
    ...t
  }
));
cg.displayName = "Textarea";
const $k = ({
  name: e,
  label: t,
  placeholder: n,
  ...r
}) => {
  const o = Tn();
  return /* @__PURE__ */ l.jsx(
    Lr,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ l.jsxs(Ln, { children: [
        !!t && /* @__PURE__ */ l.jsx($n, { children: t }),
        /* @__PURE__ */ l.jsx(as, { children: /* @__PURE__ */ l.jsx(cg, { placeholder: n, ...r, ...s }) }),
        /* @__PURE__ */ l.jsx(Wn, {})
      ] })
    }
  );
};
$k.displayName = "TextareaForm";
var Ki = "ToastProvider", [Ui, Wk, Bk] = en("Toast"), [lg, OA] = Ce("Toast", [Bk]), [Vk, gs] = lg(Ki), ug = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, c] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Ki}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ l.jsx(Ui.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
    Vk,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: d,
      viewport: i,
      onViewportChange: c,
      onToastAdd: u.useCallback(() => f((g) => g + 1), []),
      onToastRemove: u.useCallback(() => f((g) => g - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: p,
      children: a
    }
  ) });
};
ug.displayName = Ki;
var dg = "ToastViewport", Hk = ["F8"], Ma = "toast.viewportPause", Ta = "toast.viewportResume", fg = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Hk,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = gs(dg, n), i = Wk(n), c = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = oe(t, m, a.onViewportChange), g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = a.toastCount > 0;
    u.useEffect(() => {
      const b = (x) => {
        r.length !== 0 && r.every((w) => x[w] || x.code === w) && m.current?.focus();
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r]), u.useEffect(() => {
      const b = c.current, x = m.current;
      if (v && b && x) {
        const y = () => {
          if (!a.isClosePausedRef.current) {
            const C = new CustomEvent(Ma);
            x.dispatchEvent(C), a.isClosePausedRef.current = !0;
          }
        }, w = () => {
          if (a.isClosePausedRef.current) {
            const C = new CustomEvent(Ta);
            x.dispatchEvent(C), a.isClosePausedRef.current = !1;
          }
        }, S = (C) => {
          !b.contains(C.relatedTarget) && w();
        }, N = () => {
          b.contains(document.activeElement) || w();
        };
        return b.addEventListener("focusin", y), b.addEventListener("focusout", S), b.addEventListener("pointermove", y), b.addEventListener("pointerleave", N), window.addEventListener("blur", y), window.addEventListener("focus", w), () => {
          b.removeEventListener("focusin", y), b.removeEventListener("focusout", S), b.removeEventListener("pointermove", y), b.removeEventListener("pointerleave", N), window.removeEventListener("blur", y), window.removeEventListener("focus", w);
        };
      }
    }, [v, a.isClosePausedRef]);
    const h = u.useCallback(
      ({ tabbingDirection: b }) => {
        const y = i().map((w) => {
          const S = w.ref.current, N = [S, ...nD(S)];
          return b === "forwards" ? N : N.reverse();
        });
        return (b === "forwards" ? y.reverse() : y).flat();
      },
      [i]
    );
    return u.useEffect(() => {
      const b = m.current;
      if (b) {
        const x = (y) => {
          const w = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !w) {
            const N = document.activeElement, C = y.shiftKey;
            if (y.target === b && C) {
              d.current?.focus();
              return;
            }
            const T = h({ tabbingDirection: C ? "backwards" : "forwards" }), k = T.findIndex((F) => F === N);
            qs(T.slice(k + 1)) ? y.preventDefault() : C ? d.current?.focus() : f.current?.focus();
          }
        };
        return b.addEventListener("keydown", x), () => b.removeEventListener("keydown", x);
      }
    }, [i, h]), /* @__PURE__ */ l.jsxs(
      Zb,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ l.jsx(
            Pa,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const b = h({
                  tabbingDirection: "forwards"
                });
                qs(b);
              }
            }
          ),
          /* @__PURE__ */ l.jsx(Ui.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(W.ol, { tabIndex: -1, ...s, ref: p }) }),
          v && /* @__PURE__ */ l.jsx(
            Pa,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = h({
                  tabbingDirection: "backwards"
                });
                qs(b);
              }
            }
          )
        ]
      }
    );
  }
);
fg.displayName = dg;
var mg = "ToastFocusProxy", Pa = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = gs(mg, n);
    return /* @__PURE__ */ l.jsx(
      is,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (a) => {
          const i = a.relatedTarget;
          !s.viewport?.contains(i) && r();
        }
      }
    );
  }
);
Pa.displayName = mg;
var $r = "Toast", zk = "toast.swipeStart", Yk = "toast.swipeMove", Gk = "toast.swipeCancel", Kk = "toast.swipeEnd", pg = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = Se({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: $r
    });
    return /* @__PURE__ */ l.jsx(ve, { present: n || i, children: /* @__PURE__ */ l.jsx(
      Xk,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: me(e.onPause),
        onResume: me(e.onResume),
        onSwipeStart: j(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: j(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: j(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: j(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), c(!1);
        })
      }
    ) });
  }
);
pg.displayName = $r;
var [Uk, qk] = lg($r, {
  onClose() {
  }
}), Xk = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: s,
      onClose: a,
      onEscapeKeyDown: i,
      onPause: c,
      onResume: d,
      onSwipeStart: f,
      onSwipeMove: m,
      onSwipeCancel: p,
      onSwipeEnd: g,
      ...v
    } = e, h = gs($r, n), [b, x] = u.useState(null), y = oe(t, (D) => x(D)), w = u.useRef(null), S = u.useRef(null), N = o || h.duration, C = u.useRef(0), E = u.useRef(N), R = u.useRef(0), { onToastAdd: T, onToastRemove: k } = h, F = me(() => {
      b?.contains(document.activeElement) && h.viewport?.focus(), a();
    }), K = u.useCallback(
      (D) => {
        !D || D === 1 / 0 || (window.clearTimeout(R.current), C.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(F, D));
      },
      [F]
    );
    u.useEffect(() => {
      const D = h.viewport;
      if (D) {
        const H = () => {
          K(E.current), d?.();
        }, B = () => {
          const X = (/* @__PURE__ */ new Date()).getTime() - C.current;
          E.current = E.current - X, window.clearTimeout(R.current), c?.();
        };
        return D.addEventListener(Ma, B), D.addEventListener(Ta, H), () => {
          D.removeEventListener(Ma, B), D.removeEventListener(Ta, H);
        };
      }
    }, [h.viewport, N, c, d, K]), u.useEffect(() => {
      s && !h.isClosePausedRef.current && K(N);
    }, [s, N, h.isClosePausedRef, K]), u.useEffect(() => (T(), () => k()), [T, k]);
    const q = u.useMemo(() => b ? wg(b) : null, [b]);
    return h.viewport ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      q && /* @__PURE__ */ l.jsx(
        Zk,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: q
        }
      ),
      /* @__PURE__ */ l.jsx(Uk, { scope: n, onClose: F, children: pr.createPortal(
        /* @__PURE__ */ l.jsx(Ui.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
          Xb,
          {
            asChild: !0,
            onEscapeKeyDown: j(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || F(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ l.jsx(
              W.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...v,
                ref: y,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: j(e.onKeyDown, (D) => {
                  D.key === "Escape" && (i?.(D.nativeEvent), D.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, F()));
                }),
                onPointerDown: j(e.onPointerDown, (D) => {
                  D.button === 0 && (w.current = { x: D.clientX, y: D.clientY });
                }),
                onPointerMove: j(e.onPointerMove, (D) => {
                  if (!w.current) return;
                  const H = D.clientX - w.current.x, B = D.clientY - w.current.y, X = !!S.current, _ = ["left", "right"].includes(h.swipeDirection), L = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, A = _ ? L(0, H) : 0, G = _ ? 0 : L(0, B), P = D.pointerType === "touch" ? 10 : 2, $ = { x: A, y: G }, z = { originalEvent: D, delta: $ };
                  X ? (S.current = $, to(Yk, m, z, {
                    discrete: !1
                  })) : ml($, h.swipeDirection, P) ? (S.current = $, to(zk, f, z, {
                    discrete: !1
                  }), D.target.setPointerCapture(D.pointerId)) : (Math.abs(H) > P || Math.abs(B) > P) && (w.current = null);
                }),
                onPointerUp: j(e.onPointerUp, (D) => {
                  const H = S.current, B = D.target;
                  if (B.hasPointerCapture(D.pointerId) && B.releasePointerCapture(D.pointerId), S.current = null, w.current = null, H) {
                    const X = D.currentTarget, _ = { originalEvent: D, delta: H };
                    ml(H, h.swipeDirection, h.swipeThreshold) ? to(Kk, g, _, {
                      discrete: !0
                    }) : to(
                      Gk,
                      p,
                      _,
                      {
                        discrete: !0
                      }
                    ), X.addEventListener("click", (L) => L.preventDefault(), {
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
), Zk = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = gs($r, t), [s, a] = u.useState(!1), [i, c] = u.useState(!1);
  return eD(() => a(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ l.jsx(tn, { asChild: !0, children: /* @__PURE__ */ l.jsx(is, { ...r, children: s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, Qk = "ToastTitle", hg = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(W.div, { ...r, ref: t });
  }
);
hg.displayName = Qk;
var Jk = "ToastDescription", gg = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(W.div, { ...r, ref: t });
  }
);
gg.displayName = Jk;
var vg = "ToastAction", bg = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ l.jsx(yg, { altText: n, asChild: !0, children: /* @__PURE__ */ l.jsx(qi, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${vg}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
bg.displayName = vg;
var xg = "ToastClose", qi = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = qk(xg, n);
    return /* @__PURE__ */ l.jsx(yg, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: j(e.onClick, o.onClose)
      }
    ) });
  }
);
qi.displayName = xg;
var yg = u.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ l.jsx(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function wg(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), tD(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...wg(r));
    }
  }), t;
}
function to(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? rr(o, s) : o.dispatchEvent(s);
}
var ml = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function eD(e = () => {
}) {
  const t = me(e);
  ge(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function tD(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function nD(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function qs(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var rD = ug, Cg = fg, Sg = pg, Ng = hg, Eg = gg, Rg = bg, Mg = qi;
const oD = rD, sD = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, Tg = u.forwardRef(({ className: e, position: t = "bottom-right", ...n }, r) => /* @__PURE__ */ l.jsx(
  Cg,
  {
    ref: r,
    className: M(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${sD[t]}`,
      e
    ),
    ...n
  }
));
Tg.displayName = Cg.displayName;
const aD = it(
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
), Pg = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Sg,
  {
    ref: r,
    className: M(aD({ variant: t }), e),
    ...n
  }
));
Pg.displayName = Sg.displayName;
const iD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Rg,
  {
    ref: n,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
iD.displayName = Rg.displayName;
const kg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Mg,
  {
    ref: n,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l.jsx(_a, { className: "h-4 w-4" })
  }
));
kg.displayName = Mg.displayName;
const Dg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ng,
  {
    ref: n,
    className: M("text-sm font-semibold", e),
    ...t
  }
));
Dg.displayName = Ng.displayName;
const Ag = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Eg,
  {
    ref: n,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
Ag.displayName = Eg.displayName;
const cD = 1, lD = 1e4;
let Xs = 0;
function uD() {
  return Xs = (Xs + 1) % Number.MAX_SAFE_INTEGER, Xs.toString();
}
const Zs = /* @__PURE__ */ new Map(), pl = (e) => {
  if (Zs.has(e))
    return;
  const t = setTimeout(() => {
    Zs.delete(e), tr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, lD);
  Zs.set(e, t);
}, dD = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, cD)
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
      return n ? pl(n) : e.toasts.forEach((r) => {
        pl(r.id);
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
}, co = [];
let lo = { toasts: [] };
function tr(e) {
  lo = dD(lo, e), co.forEach((t) => {
    t(lo);
  });
}
function fD({ ...e }) {
  const t = uD(), n = (o) => tr({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => tr({ type: "DISMISS_TOAST", toastId: t });
  return tr({
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
function mD() {
  const [e, t] = u.useState(lo);
  return u.useEffect(() => (co.push(t), () => {
    const n = co.indexOf(t);
    n > -1 && co.splice(n, 1);
  }), [e]), {
    ...e,
    toast: fD,
    dismiss: (n) => tr({ type: "DISMISS_TOAST", toastId: n })
  };
}
function jA() {
  const { toasts: e } = mD();
  return /* @__PURE__ */ l.jsxs(oD, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...s }) {
      return /* @__PURE__ */ l.jsxs(Pg, { ...s, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ l.jsx(Dg, { children: n }),
          r && /* @__PURE__ */ l.jsx(Ag, { children: r })
        ] }),
        o,
        /* @__PURE__ */ l.jsx(kg, {})
      ] }, t);
    }),
    /* @__PURE__ */ l.jsx(Tg, {})
  ] });
}
var _g = "Toggle", Xi = u.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...s } = e, [a, i] = Se({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: _g
  });
  return /* @__PURE__ */ l.jsx(
    W.button,
    {
      type: "button",
      "aria-pressed": a,
      "data-state": a ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...s,
      ref: t,
      onClick: j(e.onClick, () => {
        e.disabled || i(!a);
      })
    }
  );
});
Xi.displayName = _g;
var Og = Xi;
const jg = it(
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
), pD = u.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ l.jsx(
  Og,
  {
    ref: o,
    className: M(jg({ variant: t, size: n, className: e })),
    ...r
  }
));
pD.displayName = Og.displayName;
var $t = "ToggleGroup", [Ig, IA] = Ce($t, [
  jt
]), Fg = jt(), Zi = I.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single") {
    const o = r;
    return /* @__PURE__ */ l.jsx(hD, { ...o, ref: t });
  }
  if (n === "multiple") {
    const o = r;
    return /* @__PURE__ */ l.jsx(gD, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${$t}\``);
});
Zi.displayName = $t;
var [Lg, $g] = Ig($t), hD = I.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Se({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: $t
  });
  return /* @__PURE__ */ l.jsx(
    Lg,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: I.useMemo(() => a ? [a] : [], [a]),
      onItemActivate: i,
      onItemDeactivate: I.useCallback(() => i(""), [i]),
      children: /* @__PURE__ */ l.jsx(Wg, { ...s, ref: t })
    }
  );
}), gD = I.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Se({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: $t
  }), c = I.useCallback(
    (f) => i((m = []) => [...m, f]),
    [i]
  ), d = I.useCallback(
    (f) => i((m = []) => m.filter((p) => p !== f)),
    [i]
  );
  return /* @__PURE__ */ l.jsx(
    Lg,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: a,
      onItemActivate: c,
      onItemDeactivate: d,
      children: /* @__PURE__ */ l.jsx(Wg, { ...s, ref: t })
    }
  );
});
Zi.displayName = $t;
var [vD, bD] = Ig($t), Wg = I.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: s,
      dir: a,
      loop: i = !0,
      ...c
    } = e, d = Fg(n), f = xt(a), m = { role: "group", dir: f, ...c };
    return /* @__PURE__ */ l.jsx(vD, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ l.jsx(
      es,
      {
        asChild: !0,
        ...d,
        orientation: s,
        dir: f,
        loop: i,
        children: /* @__PURE__ */ l.jsx(W.div, { ...m, ref: t })
      }
    ) : /* @__PURE__ */ l.jsx(W.div, { ...m, ref: t }) });
  }
), Ro = "ToggleGroupItem", Bg = I.forwardRef(
  (e, t) => {
    const n = $g(Ro, e.__scopeToggleGroup), r = bD(Ro, e.__scopeToggleGroup), o = Fg(e.__scopeToggleGroup), s = n.value.includes(e.value), a = r.disabled || e.disabled, i = { ...e, pressed: s, disabled: a }, c = I.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ l.jsx(
      ts,
      {
        asChild: !0,
        ...o,
        focusable: !a,
        active: s,
        ref: c,
        children: /* @__PURE__ */ l.jsx(hl, { ...i, ref: t })
      }
    ) : /* @__PURE__ */ l.jsx(hl, { ...i, ref: t });
  }
);
Bg.displayName = Ro;
var hl = I.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, s = $g(Ro, n), a = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, i = s.type === "single" ? a : void 0;
    return /* @__PURE__ */ l.jsx(
      Xi,
      {
        ...i,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? s.onItemActivate(r) : s.onItemDeactivate(r);
        }
      }
    );
  }
), Vg = Zi, Hg = Bg;
const zg = u.createContext({
  size: "default",
  variant: "default"
}), xD = u.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, s) => /* @__PURE__ */ l.jsx(
  Vg,
  {
    ref: s,
    className: M("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ l.jsx(zg.Provider, { value: { variant: t, size: n }, children: r })
  }
));
xD.displayName = Vg.displayName;
const yD = u.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, s) => {
  const a = u.useContext(zg);
  return /* @__PURE__ */ l.jsx(
    Hg,
    {
      ref: s,
      className: M(
        jg({
          variant: a.variant || n,
          size: a.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
yD.displayName = Hg.displayName;
var [vs, FA] = Ce("Tooltip", [
  _t
]), bs = _t(), Yg = "TooltipProvider", wD = 700, ka = "tooltip.open", [CD, Qi] = vs(Yg), Gg = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = wD,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = u.useRef(!0), i = u.useRef(!1), c = u.useRef(0);
  return u.useEffect(() => {
    const d = c.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ l.jsx(
    CD,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: u.useCallback((d) => {
        i.current = d;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
Gg.displayName = Yg;
var mr = "Tooltip", [SD, Wr] = vs(mr), Kg = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = Qi(mr, e.__scopeTooltip), d = bs(t), [f, m] = u.useState(null), p = be(), g = u.useRef(0), v = a ?? c.disableHoverableContent, h = i ?? c.delayDuration, b = u.useRef(!1), [x, y] = Se({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ka))) : c.onClose(), s?.(E);
    },
    caller: mr
  }), w = u.useMemo(() => x ? b.current ? "delayed-open" : "instant-open" : "closed", [x]), S = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b.current = !1, y(!0);
  }, [y]), N = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, y(!1);
  }, [y]), C = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      b.current = !0, y(!0), g.current = 0;
    }, h);
  }, [h, y]);
  return u.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ l.jsx(Pr, { ...d, children: /* @__PURE__ */ l.jsx(
    SD,
    {
      scope: t,
      contentId: p,
      open: x,
      stateAttribute: w,
      trigger: f,
      onTriggerChange: m,
      onTriggerEnter: u.useCallback(() => {
        c.isOpenDelayedRef.current ? C() : S();
      }, [c.isOpenDelayedRef, C, S]),
      onTriggerLeave: u.useCallback(() => {
        v ? N() : (window.clearTimeout(g.current), g.current = 0);
      }, [N, v]),
      onOpen: S,
      onClose: N,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
Kg.displayName = mr;
var Da = "TooltipTrigger", Ug = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Wr(Da, n), s = Qi(Da, n), a = bs(n), i = u.useRef(null), c = oe(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ l.jsx(kr, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      W.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: j(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: j(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: j(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: j(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: j(e.onBlur, o.onClose),
        onClick: j(e.onClick, o.onClose)
      }
    ) });
  }
);
Ug.displayName = Da;
var Ji = "TooltipPortal", [ND, ED] = vs(Ji, {
  forceMount: void 0
}), qg = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = Wr(Ji, t);
  return /* @__PURE__ */ l.jsx(ND, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(tn, { asChild: !0, container: o, children: r }) }) });
};
qg.displayName = Ji;
var Mn = "TooltipContent", Xg = u.forwardRef(
  (e, t) => {
    const n = ED(Mn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = Wr(Mn, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(ve, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ l.jsx(Zg, { side: o, ...s, ref: t }) : /* @__PURE__ */ l.jsx(RD, { side: o, ...s, ref: t }) });
  }
), RD = u.forwardRef((e, t) => {
  const n = Wr(Mn, e.__scopeTooltip), r = Qi(Mn, e.__scopeTooltip), o = u.useRef(null), s = oe(t, o), [a, i] = u.useState(null), { trigger: c, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), g = u.useCallback(
    (v, h) => {
      const b = v.currentTarget, x = { x: v.clientX, y: v.clientY }, y = DD(x, b.getBoundingClientRect()), w = AD(x, y), S = _D(h.getBoundingClientRect()), N = jD([...w, ...S]);
      i(N), m(!0);
    },
    [m]
  );
  return u.useEffect(() => () => p(), [p]), u.useEffect(() => {
    if (c && f) {
      const v = (b) => g(b, f), h = (b) => g(b, c);
      return c.addEventListener("pointerleave", v), f.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", h);
      };
    }
  }, [c, f, g, p]), u.useEffect(() => {
    if (a) {
      const v = (h) => {
        const b = h.target, x = { x: h.clientX, y: h.clientY }, y = c?.contains(b) || f?.contains(b), w = !OD(x, a);
        y ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, f, a, d, p]), /* @__PURE__ */ l.jsx(Zg, { ...e, ref: s });
}), [MD, TD] = vs(mr, { isInside: !1 }), PD = /* @__PURE__ */ Nl("TooltipContent"), Zg = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = Wr(Mn, n), d = bs(n), { onClose: f } = c;
    return u.useEffect(() => (document.addEventListener(ka, f), () => document.removeEventListener(ka, f)), [f]), u.useEffect(() => {
      if (c.trigger) {
        const m = (p) => {
          p.target?.contains(c.trigger) && f();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [c.trigger, f]), /* @__PURE__ */ l.jsx(
      At,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ l.jsxs(
          Xo,
          {
            "data-state": c.stateAttribute,
            ...d,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ l.jsx(PD, { children: r }),
              /* @__PURE__ */ l.jsx(MD, { scope: n, isInside: !0, children: /* @__PURE__ */ l.jsx(Jm, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Xg.displayName = Mn;
var Qg = "TooltipArrow", kD = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = bs(n);
    return TD(
      Qg,
      n
    ).isInside ? null : /* @__PURE__ */ l.jsx(Zo, { ...o, ...r, ref: t });
  }
);
kD.displayName = Qg;
function DD(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
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
function AD(e, t, n = 5) {
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
function _D(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function OD(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], d = i.x, f = i.y, m = c.x, p = c.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function jD(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), ID(t);
}
function ID(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var FD = Gg, LD = Kg, $D = Ug, WD = qg, Jg = Xg;
const LA = FD, $A = LD, WA = $D, BD = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(WD, { children: /* @__PURE__ */ l.jsx(
  Jg,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
BD.displayName = Jg.displayName;
export {
  UD as Accordion,
  Lb as AccordionContent,
  Ib as AccordionItem,
  Fb as AccordionTrigger,
  Wb as Alert,
  Vb as AlertDescription,
  XD as AlertDialog,
  xy as AlertDialogAction,
  yy as AlertDialogCancel,
  py as AlertDialogContent,
  by as AlertDialogDescription,
  gy as AlertDialogFooter,
  hy as AlertDialogHeader,
  qu as AlertDialogOverlay,
  my as AlertDialogPortal,
  vy as AlertDialogTitle,
  ZD as AlertDialogTrigger,
  Bb as AlertTitle,
  wy as AsyncSelect,
  QD as AsyncSelectForm,
  Ay as Avatar,
  Oy as AvatarFallback,
  _y as AvatarImage,
  Tc as Badge,
  Iy as Breadcrumb,
  Vy as BreadcrumbEllipsis,
  Ly as BreadcrumbItem,
  $y as BreadcrumbLink,
  Fy as BreadcrumbList,
  Wy as BreadcrumbPage,
  By as BreadcrumbSeparator,
  wt as Button,
  jd as Calendar,
  SN as CalendarDayButton,
  NN as Card,
  TN as CardContent,
  MN as CardDescription,
  PN as CardFooter,
  EN as CardHeader,
  RN as CardTitle,
  uE as Carousel,
  dE as CarouselContent,
  fE as CarouselItem,
  pE as CarouselNext,
  mE as CarouselPrevious,
  gE as ChartContainer,
  rA as ChartLegend,
  xE as ChartLegendContent,
  vE as ChartStyle,
  nA as ChartTooltip,
  bE as ChartTooltipContent,
  NE as Checkbox,
  EE as Combobox,
  sA as ComboboxForm,
  Rr as Command,
  aA as CommandDialog,
  Yo as CommandEmpty,
  Mr as CommandGroup,
  Ho as CommandInput,
  Gt as CommandItem,
  zo as CommandList,
  rf as CommandSeparator,
  XE as CommandShortcut,
  cA as DatePicker,
  WR as DateTimePicker,
  BR as Dialog,
  uA as DialogClose,
  Hf as DialogContent,
  GR as DialogDescription,
  zR as DialogFooter,
  HR as DialogHeader,
  Vf as DialogOverlay,
  VR as DialogPortal,
  YR as DialogTitle,
  lA as DialogTrigger,
  fA as DropdownMenu,
  vT as DropdownMenuCheckboxItem,
  hT as DropdownMenuContent,
  pA as DropdownMenuGroup,
  gT as DropdownMenuItem,
  xT as DropdownMenuLabel,
  hA as DropdownMenuPortal,
  vA as DropdownMenuRadioGroup,
  bT as DropdownMenuRadioItem,
  yT as DropdownMenuSeparator,
  wT as DropdownMenuShortcut,
  gA as DropdownMenuSub,
  pT as DropdownMenuSubContent,
  mT as DropdownMenuSubTrigger,
  mA as DropdownMenuTrigger,
  bA as Form,
  as as FormControl,
  Zm as FormDescription,
  Lr as FormField,
  Ln as FormItem,
  $n as FormLabel,
  Wn as FormMessage,
  xA as Heading,
  ki as Input,
  yA as InputForm,
  os as Label,
  XT as ListItem,
  ZT as MaskedInput,
  JT as MultiSelect,
  HT as NavigationMenu,
  KT as NavigationMenuContent,
  qT as NavigationMenuIndicator,
  CA as NavigationMenuItem,
  UT as NavigationMenuLink,
  zT as NavigationMenuList,
  GT as NavigationMenuTrigger,
  Np as NavigationMenuViewport,
  eP as Pagination,
  tP as PaginationContent,
  sP as PaginationEllipsis,
  nP as PaginationItem,
  Fi as PaginationLink,
  oP as PaginationNext,
  rP as PaginationPrevious,
  Ar as Popover,
  Fn as PopoverContent,
  _r as PopoverTrigger,
  gP as RadioGroup,
  vP as RadioGroupItem,
  DP as ScrollArea,
  Qp as ScrollBar,
  jh as Select,
  Yi as SelectContent,
  MA as SelectForm,
  RA as SelectGroup,
  Eo as SelectItem,
  ak as SelectLabel,
  Lh as SelectScrollDownButton,
  Fh as SelectScrollUpButton,
  ik as SelectSeparator,
  zi as SelectTrigger,
  Ih as SelectValue,
  Bh as Separator,
  TA as Sheet,
  kA as SheetClose,
  mk as SheetContent,
  vk as SheetDescription,
  hk as SheetFooter,
  pk as SheetHeader,
  Vh as SheetOverlay,
  dk as SheetPortal,
  gk as SheetTitle,
  PA as SheetTrigger,
  bk as Skeleton,
  Nk as Switch,
  Ek as Table,
  Mk as TableBody,
  Ak as TableCaption,
  Dk as TableCell,
  Tk as TableFooter,
  kk as TableHead,
  Rk as TableHeader,
  Pk as TableRow,
  _A as Tabs,
  Lk as TabsContent,
  Ik as TabsList,
  Fk as TabsTrigger,
  cg as Textarea,
  $k as TextareaForm,
  Bf as TimePicker,
  ao as TimePickerInput,
  Pg as Toast,
  iD as ToastAction,
  kg as ToastClose,
  Ag as ToastDescription,
  oD as ToastProvider,
  Dg as ToastTitle,
  Tg as ToastViewport,
  jA as Toaster,
  pD as Toggle,
  xD as ToggleGroup,
  yD as ToggleGroupItem,
  $A as Tooltip,
  BD as TooltipContent,
  LA as TooltipProvider,
  WA as TooltipTrigger,
  jy as badgeVariants,
  tA as brazillianStates,
  Ut as buttonVariants,
  M as cn,
  eA as mask,
  YT as navigationMenuTriggerStyle,
  dD as reducer,
  fD as toast,
  jg as toggleVariants,
  ss as useFormField,
  mD as useToast
};
