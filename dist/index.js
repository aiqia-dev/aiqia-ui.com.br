import * as l from "react";
import U, { useState as Ve, useEffect as St, useCallback as je, createContext as bv, useContext as xv, useRef as lt, useLayoutEffect as nu, useMemo as go, useImperativeHandle as ru } from "react";
import * as un from "react-dom";
import { ChevronDown as Fn, ChevronsUpDown as ou, Loader2 as hr, Check as Er, MoreHorizontal as su, ChevronRight as Xa, ChevronLeftIcon as wv, ChevronRightIcon as yv, ChevronDownIcon as Cv, ArrowLeft as Sv, ArrowRight as Nv, Search as Ev, CalendarIcon as Tv, Clock as Rv, Calendar as Mv, X as Qa, Circle as au, XCircle as jc, XIcon as Pv, Plus as kv, CheckIcon as Fc, WandSparkles as Dv, ChevronLeft as _v, ChevronUp as Ov } from "lucide-react";
import { useFormContext as Yn, FormProvider as Av, Controller as Iv } from "react-hook-form";
import { Link as jv } from "react-router-dom";
import * as Za from "recharts";
var to = { exports: {} }, or = {};
var Lc;
function Fv() {
  if (Lc) return or;
  Lc = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
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
  return or.Fragment = t, or.jsx = n, or.jsxs = n, or;
}
var sr = {};
var $c;
function Lv() {
  return $c || ($c = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(M) {
      if (M == null) return null;
      if (typeof M == "function")
        return M.$$typeof === _ ? null : M.displayName || M.name || null;
      if (typeof M == "string") return M;
      switch (M) {
        case h:
          return "Fragment";
        case x:
          return "Profiler";
        case v:
          return "StrictMode";
        case N:
          return "Suspense";
        case C:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof M == "object")
        switch (typeof M.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), M.$$typeof) {
          case g:
            return "Portal";
          case y:
            return (M.displayName || "Context") + ".Provider";
          case w:
            return (M._context.displayName || "Context") + ".Consumer";
          case S:
            var B = M.render;
            return M = M.displayName, M || (M = B.displayName || B.name || "", M = M !== "" ? "ForwardRef(" + M + ")" : "ForwardRef"), M;
          case T:
            return B = M.displayName || null, B !== null ? B : e(M.type) || "Memo";
          case E:
            B = M._payload, M = M._init;
            try {
              return e(M(B));
            } catch {
            }
        }
      return null;
    }
    function t(M) {
      return "" + M;
    }
    function n(M) {
      try {
        t(M);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var D = B.error, V = typeof Symbol == "function" && Symbol.toStringTag && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return D.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(M);
      }
    }
    function r(M) {
      if (M === h) return "<>";
      if (typeof M == "object" && M !== null && M.$$typeof === E)
        return "<...>";
      try {
        var B = e(M);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var M = O.A;
      return M === null ? null : M.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(M) {
      if (W.call(M, "key")) {
        var B = Object.getOwnPropertyDescriptor(M, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return M.key !== void 0;
    }
    function i(M, B) {
      function D() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(M, "key", {
        get: D,
        configurable: !0
      });
    }
    function c() {
      var M = e(this.type);
      return H[M] || (H[M] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), M = this.props.ref, M !== void 0 ? M : null;
    }
    function d(M, B, D, V, K, L, Z, j) {
      return D = L.ref, M = {
        $$typeof: b,
        type: M,
        key: B,
        props: L,
        _owner: K
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(M, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(M, "ref", { enumerable: !1, value: null }), M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(M, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(M, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(M, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    }
    function m(M, B, D, V, K, L, Z, j) {
      var G = B.children;
      if (G !== void 0)
        if (V)
          if (X(G)) {
            for (V = 0; V < G.length; V++)
              f(G[V]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(G);
      if (W.call(B, "key")) {
        G = e(M);
        var Q = Object.keys(B).filter(function(te) {
          return te !== "key";
        });
        V = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", I[G + V] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          G,
          Q,
          G
        ), I[G + V] = !0);
      }
      if (G = null, D !== void 0 && (n(D), G = "" + D), a(B) && (n(B.key), G = "" + B.key), "key" in B) {
        D = {};
        for (var re in B)
          re !== "key" && (D[re] = B[re]);
      } else D = B;
      return G && i(
        D,
        typeof M == "function" ? M.displayName || M.name || "Unknown" : M
      ), d(
        M,
        G,
        L,
        K,
        o(),
        D,
        Z,
        j
      );
    }
    function f(M) {
      typeof M == "object" && M !== null && M.$$typeof === b && M._store && (M._store.validated = 1);
    }
    var p = U, b = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), y = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), C = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, X = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(M) {
        return M();
      }
    };
    var F, H = {}, q = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), Y = k(r(s)), I = {};
    sr.Fragment = h, sr.jsx = function(M, B, D, V, K) {
      var L = 1e4 > O.recentlyCreatedOwnerStacks++;
      return m(
        M,
        B,
        D,
        !1,
        V,
        K,
        L ? Error("react-stack-top-frame") : q,
        L ? k(r(M)) : Y
      );
    }, sr.jsxs = function(M, B, D, V, K) {
      var L = 1e4 > O.recentlyCreatedOwnerStacks++;
      return m(
        M,
        B,
        D,
        !0,
        V,
        K,
        L ? Error("react-stack-top-frame") : q,
        L ? k(r(M)) : Y
      );
    };
  })()), sr;
}
var Wc;
function $v() {
  return Wc || (Wc = 1, process.env.NODE_ENV === "production" ? to.exports = Fv() : to.exports = Lv()), to.exports;
}
var u = $v();
function Te(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = l.createContext(a);
    i.displayName = s + "Context";
    const c = n.length;
    n = [...n, a];
    const d = (f) => {
      const { scope: p, children: b, ...g } = f, h = p?.[e]?.[c] || i, v = l.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ u.jsx(h.Provider, { value: v, children: b });
    };
    d.displayName = s + "Provider";
    function m(f, p) {
      const b = p?.[e]?.[c] || i, g = l.useContext(b);
      if (g) return g;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [d, m];
  }
  const o = () => {
    const s = n.map((a) => l.createContext(a));
    return function(i) {
      const c = i?.[e] || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, Wv(o, ...t)];
}
function Wv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: c, scopeName: d }) => {
        const f = c(s)[`__scope${d}`];
        return { ...i, ...f };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Bc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Nt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Bc(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Bc(e[o], null);
        }
      };
  };
}
function oe(...e) {
  return l.useCallback(Nt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  const t = l.forwardRef((n, r) => {
    let { children: o, ...s } = n, a = null, i = !1;
    const c = [];
    Hc(o) && typeof no == "function" && (o = no(o._payload)), l.Children.forEach(o, (p) => {
      if (zv(p)) {
        i = !0;
        const b = p;
        let g = "child" in b.props ? b.props.child : b.props.children;
        Hc(g) && typeof no == "function" && (g = no(g._payload)), a = Hv(b, g), c.push(a?.props?.children);
      } else
        c.push(p);
    }), a ? a = l.cloneElement(a, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !i && l.Children.count(o) === 1 && l.isValidElement(o) && (a = o)
    );
    const d = a ? Yv(a) : void 0, m = oe(r, d);
    if (!a) {
      if (o || o === 0)
        throw new Error(
          i ? qv(e) : Uv(e)
        );
      return o;
    }
    const f = Vv(s, a.props ?? {});
    return a.type !== l.Fragment && (f.ref = r ? m : d), l.cloneElement(a, f);
  });
  return t.displayName = `${e}.Slot`, t;
}
var iu = /* @__PURE__ */ jt("Slot"), cu = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Bv(e) {
  const t = (n) => "child" in n ? n.children(n.child) : n.children;
  return t.displayName = `${e}.Slottable`, t.__radixId = cu, t;
}
var Hv = (e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return l.isValidElement(n) ? l.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return l.isValidElement(t) ? t : null;
};
function Vv(e, t) {
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
function Yv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function zv(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cu;
}
var Gv = /* @__PURE__ */ Symbol.for("react.lazy");
function Hc(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Gv && "_payload" in e && Kv(e._payload);
}
function Kv(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
var Uv = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, qv = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, no = l[" use ".trim().toString()];
function dn(e) {
  const t = e + "CollectionProvider", [n, r] = Te(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: v, children: x } = h, w = l.useRef(null), y = l.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: v, itemMap: y, collectionRef: w, children: x });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ jt(i), d = l.forwardRef(
    (h, v) => {
      const { scope: x, children: w } = h, y = s(i, x), S = oe(v, y.collectionRef);
      return /* @__PURE__ */ u.jsx(c, { ref: S, children: w });
    }
  );
  d.displayName = i;
  const m = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ jt(m), b = l.forwardRef(
    (h, v) => {
      const { scope: x, children: w, ...y } = h, S = l.useRef(null), N = oe(v, S), C = s(m, x);
      return l.useEffect(() => (C.itemMap.set(S, { ref: S, ...y }), () => {
        C.itemMap.delete(S);
      })), /* @__PURE__ */ u.jsx(p, { [f]: "", ref: N, children: w });
    }
  );
  b.displayName = m;
  function g(h) {
    const v = s(e + "CollectionConsumer", h);
    return l.useCallback(() => {
      const w = v.collectionRef.current;
      if (!w) return [];
      const y = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (C, T) => y.indexOf(C.ref.current) - y.indexOf(T.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: b },
    g,
    r
  ];
}
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var xe = globalThis?.document ? l.useLayoutEffect : () => {
}, Xv = l[" useInsertionEffect ".trim().toString()] || xe;
function Pe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = Qv({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const m = l.useRef(e !== void 0);
    l.useEffect(() => {
      const f = m.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), m.current = i;
    }, [i, r]);
  }
  const d = l.useCallback(
    (m) => {
      if (i) {
        const f = Zv(m) ? m(e) : m;
        f !== e && a.current?.(f);
      } else
        s(m);
    },
    [i, e, s, a]
  );
  return [c, d];
}
function Qv({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = l.useState(e), o = l.useRef(n), s = l.useRef(t);
  return Xv(() => {
    s.current = t;
  }, [t]), l.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Zv(e) {
  return typeof e == "function";
}
var Jv = [
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
], $ = Jv.reduce((e, t) => {
  const n = /* @__PURE__ */ jt(`Primitive.${t}`), r = l.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function gr(e, t) {
  e && un.flushSync(() => e.dispatchEvent(t));
}
function eb(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var be = (e) => {
  const { present: t, children: n } = e, r = tb(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), s = nb(r.ref, rb(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
be.displayName = "Presence";
function tb(e) {
  const [t, n] = l.useState(), r = l.useRef(null), o = l.useRef(e), s = l.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = eb(a, {
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
    const d = ro(r.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), xe(() => {
    const d = r.current, m = o.current;
    if (m !== e) {
      const p = s.current, b = ro(d);
      e ? c("MOUNT") : b === "none" || d?.display === "none" ? c("UNMOUNT") : c(m && p !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), xe(() => {
    if (t) {
      let d;
      const m = t.ownerDocument.defaultView ?? window, f = (b) => {
        const h = ro(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, p = (b) => {
        b.target === t && (s.current = ro(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        m.clearTimeout(d), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: l.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Vc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function nb(...e) {
  const t = l.useRef(e);
  return t.current = e, l.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((a) => {
      const i = Vc(a, n);
      return !o && typeof i == "function" && (o = !0), i;
    });
    if (o)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const i = s[a];
          typeof i == "function" ? i() : Vc(r[a], null);
        }
      };
  }, []);
}
function ro(e) {
  return e?.animationName || "none";
}
function rb(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ob = l[" useId ".trim().toString()] || (() => {
}), sb = 0;
function we(e) {
  const [t, n] = l.useState(ob());
  return xe(() => {
    n((r) => r ?? String(sb++));
  }, [e]), t ? `radix-${t}` : "";
}
var zo = "Collapsible", [ab, lu] = Te(zo), [ib, Ja] = ab(zo), uu = l.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [c, d] = Pe({
      prop: r,
      defaultProp: o ?? !1,
      onChange: a,
      caller: zo
    });
    return /* @__PURE__ */ u.jsx(
      ib,
      {
        scope: n,
        disabled: s,
        contentId: we(),
        open: c,
        onOpenToggle: l.useCallback(() => d((m) => !m), [d]),
        children: /* @__PURE__ */ u.jsx(
          $.div,
          {
            "data-state": ti(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
uu.displayName = zo;
var du = "CollapsibleTrigger", fu = l.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Ja(du, n);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        "aria-controls": o.open ? o.contentId : void 0,
        "aria-expanded": o.open || !1,
        "data-state": ti(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: A(e.onClick, o.onOpenToggle)
      }
    );
  }
);
fu.displayName = du;
var ei = "CollapsibleContent", mu = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ja(ei, e.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(be, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ u.jsx(cb, { ...r, ref: t, present: s }) });
  }
);
mu.displayName = ei;
var cb = l.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = Ja(ei, n), [i, c] = l.useState(r), d = l.useRef(null), m = oe(t, d), f = l.useRef(0), p = f.current, b = l.useRef(0), g = b.current, h = a.open || i, v = l.useRef(h), x = l.useRef(void 0);
  return l.useEffect(() => {
    const w = requestAnimationFrame(() => v.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), xe(() => {
    const w = d.current;
    if (w) {
      x.current = x.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const y = w.getBoundingClientRect();
      f.current = y.height, b.current = y.width, v.current || (w.style.transitionDuration = x.current.transitionDuration, w.style.animationName = x.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ u.jsx(
    $.div,
    {
      "data-state": ti(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !h,
      ...s,
      ref: m,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function ti(e) {
  return e ? "open" : "closed";
}
var lb = uu, ub = fu, db = mu, fb = l.createContext(void 0);
function Mt(e) {
  const t = l.useContext(fb);
  return e || t || "ltr";
}
var Je = "Accordion", mb = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [ni, pb, hb] = dn(Je), [Go] = Te(Je, [
  hb,
  lu
]), ri = lu(), pu = l.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ u.jsx(ni.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ u.jsx(xb, { ...s, ref: t }) : /* @__PURE__ */ u.jsx(bb, { ...o, ref: t }) });
  }
);
pu.displayName = Je;
var [hu, gb] = Go(Je), [gu, vb] = Go(
  Je,
  { collapsible: !1 }
), bb = l.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, c] = Pe({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Je
    });
    return /* @__PURE__ */ u.jsx(
      hu,
      {
        scope: e.__scopeAccordion,
        value: l.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: l.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ u.jsx(gu, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ u.jsx(vu, { ...a, ref: t }) })
      }
    );
  }
), xb = l.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Pe({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Je
  }), c = l.useCallback(
    (m) => i((f = []) => [...f, m]),
    [i]
  ), d = l.useCallback(
    (m) => i((f = []) => f.filter((p) => p !== m)),
    [i]
  );
  return /* @__PURE__ */ u.jsx(
    hu,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: d,
      children: /* @__PURE__ */ u.jsx(gu, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(vu, { ...s, ref: t }) })
    }
  );
}), [wb, Ko] = Go(Je), vu = l.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = l.useRef(null), c = oe(i, t), d = pb(n), f = Mt(o) === "ltr", p = A(e.onKeyDown, (b) => {
      if (!mb.includes(b.key)) return;
      const g = b.target, h = d().filter((E) => !E.ref.current?.disabled), v = h.findIndex((E) => E.ref.current === g), x = h.length;
      if (v === -1) return;
      b.preventDefault();
      let w = v;
      const y = 0, S = x - 1, N = () => {
        w = v + 1, w > S && (w = y);
      }, C = () => {
        w = v - 1, w < y && (w = S);
      };
      switch (b.key) {
        case "Home":
          w = y;
          break;
        case "End":
          w = S;
          break;
        case "ArrowRight":
          s === "horizontal" && (f ? N() : C());
          break;
        case "ArrowDown":
          s === "vertical" && N();
          break;
        case "ArrowLeft":
          s === "horizontal" && (f ? C() : N());
          break;
        case "ArrowUp":
          s === "vertical" && C();
          break;
      }
      const T = w % x;
      h[T].ref.current?.focus();
    });
    return /* @__PURE__ */ u.jsx(
      wb,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ u.jsx(ni.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
          $.div,
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
), No = "AccordionItem", [yb, oi] = Go(No), bu = l.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = Ko(No, n), a = gb(No, n), i = ri(n), c = we(), d = r && a.value.includes(r) || !1, m = s.disabled || e.disabled;
    return /* @__PURE__ */ u.jsx(
      yb,
      {
        scope: n,
        open: d,
        disabled: m,
        triggerId: c,
        children: /* @__PURE__ */ u.jsx(
          lb,
          {
            "data-orientation": s.orientation,
            "data-state": Nu(d),
            ...i,
            ...o,
            ref: t,
            disabled: m,
            open: d,
            onOpenChange: (f) => {
              f ? a.onItemOpen(r) : a.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
bu.displayName = No;
var xu = "AccordionHeader", wu = l.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ko(Je, n), s = oi(xu, n);
    return /* @__PURE__ */ u.jsx(
      $.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Nu(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
wu.displayName = xu;
var ba = "AccordionTrigger", yu = l.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ko(Je, n), s = oi(ba, n), a = vb(ba, n), i = ri(n);
    return /* @__PURE__ */ u.jsx(ni.ItemSlot, { scope: n, children: /* @__PURE__ */ u.jsx(
      ub,
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
yu.displayName = ba;
var Cu = "AccordionContent", Su = l.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ko(Je, n), s = oi(Cu, n), a = ri(n);
    return /* @__PURE__ */ u.jsx(
      db,
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
Su.displayName = Cu;
function Nu(e) {
  return e ? "open" : "closed";
}
var Cb = pu, Sb = bu, Nb = wu, Eu = yu, Tu = Su;
function Ru(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ru(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Mu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ru(e)) && (r && (r += " "), r += t);
  return r;
}
const Eb = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Tb = (e, t) => ({
  classGroupId: e,
  validator: t
}), Pu = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Eo = "-", Yc = [], Rb = "arbitrary..", Mb = (e) => {
  const t = kb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Pb(a);
      const i = a.split(Eo), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return ku(i, c, t);
    },
    getConflictingClassGroupIds: (a, i) => {
      if (i) {
        const c = r[a], d = n[a];
        return c ? d ? Eb(d, c) : c : d || Yc;
      }
      return n[a] || Yc;
    }
  };
}, ku = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const d = ku(e, t + 1, s);
    if (d) return d;
  }
  const a = n.validators;
  if (a === null)
    return;
  const i = t === 0 ? e.join(Eo) : e.slice(t).join(Eo), c = a.length;
  for (let d = 0; d < c; d++) {
    const m = a[d];
    if (m.validator(i))
      return m.classGroupId;
  }
}, Pb = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Rb + r : void 0;
})(), kb = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Db(n, t);
}, Db = (e, t) => {
  const n = Pu();
  for (const r in e) {
    const o = e[r];
    si(o, n, r, t);
  }
  return n;
}, si = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const a = e[s];
    _b(a, t, n, r);
  }
}, _b = (e, t, n, r) => {
  if (typeof e == "string") {
    Ob(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Ab(e, t, n, r);
    return;
  }
  Ib(e, t, n, r);
}, Ob = (e, t, n) => {
  const r = e === "" ? t : Du(t, e);
  r.classGroupId = n;
}, Ab = (e, t, n, r) => {
  if (jb(e)) {
    si(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Tb(n, e));
}, Ib = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let a = 0; a < s; a++) {
    const [i, c] = o[a];
    si(c, Du(t, i), n, r);
  }
}, Du = (e, t) => {
  let n = e;
  const r = t.split(Eo), o = r.length;
  for (let s = 0; s < o; s++) {
    const a = r[s];
    let i = n.nextPart.get(a);
    i || (i = Pu(), n.nextPart.set(a, i)), n = i;
  }
  return n;
}, jb = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Fb = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, a) => {
    n[s] = a, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let a = n[s];
      if (a !== void 0)
        return a;
      if ((a = r[s]) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      s in n ? n[s] = a : o(s, a);
    }
  };
}, xa = "!", zc = ":", Lb = [], Gc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), $b = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, d;
    const m = o.length;
    for (let h = 0; h < m; h++) {
      const v = o[h];
      if (a === 0 && i === 0) {
        if (v === zc) {
          s.push(o.slice(c, h)), c = h + 1;
          continue;
        }
        if (v === "/") {
          d = h;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? i++ : v === ")" && i--;
    }
    const f = s.length === 0 ? o : o.slice(c);
    let p = f, b = !1;
    f.endsWith(xa) ? (p = f.slice(0, -1), b = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(xa) && (p = f.slice(1), b = !0)
    );
    const g = d && d > c ? d - c : void 0;
    return Gc(s, b, p, g);
  };
  if (t) {
    const o = t + zc, s = r;
    r = (a) => a.startsWith(o) ? s(a.slice(o.length)) : Gc(Lb, !1, a, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Wb = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const a = n[s], i = a[0] === "[", c = t.has(a);
      i || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Bb = (e) => ({
  cache: Fb(e.cacheSize),
  parseClassName: $b(e),
  sortModifiers: Wb(e),
  postfixLookupClassGroupIds: Hb(e),
  ...Mb(e)
}), Hb = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      t[n[r]] = !0;
  return t;
}, Vb = /\s+/, Yb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s,
    postfixLookupClassGroupIds: a
  } = t, i = [], c = e.trim().split(Vb);
  let d = "";
  for (let m = c.length - 1; m >= 0; m -= 1) {
    const f = c[m], {
      isExternal: p,
      modifiers: b,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: v
    } = n(f);
    if (p) {
      d = f + (d.length > 0 ? " " + d : d);
      continue;
    }
    let x = !!v, w;
    if (x) {
      const T = h.substring(0, v);
      w = r(T);
      const E = w && a[w] ? r(h) : void 0;
      E && E !== w && (w = E, x = !1);
    } else
      w = r(h);
    if (!w) {
      if (!x) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (w = r(h), !w) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      x = !1;
    }
    const y = b.length === 0 ? "" : b.length === 1 ? b[0] : s(b).join(":"), S = g ? y + xa : y, N = S + w;
    if (i.indexOf(N) > -1)
      continue;
    i.push(N);
    const C = o(w, x);
    for (let T = 0; T < C.length; ++T) {
      const E = C[T];
      i.push(S + E);
    }
    d = f + (d.length > 0 ? " " + d : d);
  }
  return d;
}, zb = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = _u(n)) && (o && (o += " "), o += r);
  return o;
}, _u = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = _u(e[r])) && (n && (n += " "), n += t);
  return n;
}, Gb = (e, ...t) => {
  let n, r, o, s;
  const a = (c) => {
    const d = t.reduce((m, f) => f(m), e());
    return n = Bb(d), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }, i = (c) => {
    const d = r(c);
    if (d)
      return d;
    const m = Yb(c, n);
    return o(c, m), m;
  };
  return s = a, (...c) => s(zb(...c));
}, Kb = [], ke = (e) => {
  const t = (n) => n[e] || Kb;
  return t.isThemeGetter = !0, t;
}, Ou = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Au = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ub = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, qb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Zb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _t = (e) => Ub.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), nt = (e) => !!e && Number.isInteger(Number(e)), Qs = (e) => e.endsWith("%") && le(e.slice(0, -1)), xt = (e) => qb.test(e), Iu = () => !0, ex = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xb.test(e) && !Qb.test(e)
), ai = () => !1, tx = (e) => Zb.test(e), nx = (e) => Jb.test(e), rx = (e) => !J(e) && !ee(e), ox = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), sx = (e) => Bt(e, Lu, ai), J = (e) => Ou.test(e), Qt = (e) => Bt(e, $u, ex), Kc = (e) => Bt(e, mx, le), ax = (e) => Bt(e, Bu, Iu), ix = (e) => Bt(e, Wu, ai), Uc = (e) => Bt(e, ju, ai), cx = (e) => Bt(e, Fu, nx), oo = (e) => Bt(e, Hu, tx), ee = (e) => Au.test(e), ar = (e) => fn(e, $u), lx = (e) => fn(e, Wu), qc = (e) => fn(e, ju), ux = (e) => fn(e, Lu), dx = (e) => fn(e, Fu), so = (e) => fn(e, Hu, !0), fx = (e) => fn(e, Bu, !0), Bt = (e, t, n) => {
  const r = Ou.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, fn = (e, t, n = !1) => {
  const r = Au.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ju = (e) => e === "position" || e === "percentage", Fu = (e) => e === "image" || e === "url", Lu = (e) => e === "length" || e === "size" || e === "bg-size", $u = (e) => e === "length", mx = (e) => e === "number", Wu = (e) => e === "family-name", Bu = (e) => e === "number" || e === "weight", Hu = (e) => e === "shadow", px = () => {
  const e = ke("color"), t = ke("font"), n = ke("text"), r = ke("font-weight"), o = ke("tracking"), s = ke("leading"), a = ke("breakpoint"), i = ke("container"), c = ke("spacing"), d = ke("radius"), m = ke("shadow"), f = ke("inset-shadow"), p = ke("text-shadow"), b = ke("drop-shadow"), g = ke("blur"), h = ke("perspective"), v = ke("aspect"), x = ke("ease"), w = ke("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], N = () => [...S(), ee, J], C = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], E = () => [ee, J, c], R = () => [_t, "full", "auto", ...E()], _ = () => [nt, "none", "subgrid", ee, J], O = () => ["auto", {
    span: ["full", nt, ee, J]
  }, nt, ee, J], W = () => [nt, "auto", ee, J], X = () => ["auto", "min", "max", "fr", ee, J], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], F = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...E()], q = () => [_t, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], Y = () => [_t, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()], I = () => [_t, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...E()], M = () => [e, ee, J], B = () => [...S(), qc, Uc, {
    position: [ee, J]
  }], D = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], V = () => ["auto", "cover", "contain", ux, sx, {
    size: [ee, J]
  }], K = () => [Qs, ar, Qt], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ee,
    J
  ], Z = () => ["", le, ar, Qt], j = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [le, Qs, qc, Uc], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    ee,
    J
  ], te = () => ["none", le, ee, J], z = () => ["none", le, ee, J], ie = () => [le, ee, J], ce = () => [_t, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [xt],
      breakpoint: [xt],
      color: [Iu],
      container: [xt],
      "drop-shadow": [xt],
      ease: ["in", "out", "in-out"],
      font: [rx],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [xt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [xt],
      shadow: [xt],
      spacing: ["px", le],
      text: [xt],
      "text-shadow": [xt],
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
        aspect: ["auto", "square", _t, J, ee, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", ee, J]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [ox],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [le, J, ee, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
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
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: R()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": R(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: R()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": R(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: R()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": R()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": R()
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
        z: [nt, "auto", ee, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [_t, "full", "auto", i, ...E()]
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
        flex: [le, _t, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", le, ee, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", le, ee, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [nt, "first", "last", "none", ee, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": _()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: O()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": _()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: O()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": X()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": X()
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
        content: ["normal", ...k()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...F(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...F(), {
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
        p: E()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: E()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: E()
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
        m: H()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: H()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
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
        size: q()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...Y()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...Y()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...Y()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...I()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...I()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...I()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...q()]
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
          ...q()
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
          ...q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ar, Qt]
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
        font: [r, fx, ax]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qs, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lx, ix, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [J]
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
        tracking: [o, ee, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [le, "none", ee, Kc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee, J]
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
        list: ["disc", "decimal", "none", ee, J]
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
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
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
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [le, "from-font", "auto", ee, Qt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [le, "auto", ee, J]
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
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [nt, ee, J]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee, J]
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
        content: ["none", ee, J]
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
        bg: B()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: D()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: V()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, nt, ee, J],
          radial: ["", ee, J],
          conic: [nt, ee, J]
        }, dx, cx]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
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
        border: Z()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Z()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Z()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Z()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Z()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": Z()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": Z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Z()
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
        "divide-y": Z()
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
        border: [...j(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...j(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": M()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...j(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [le, ee, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", le, ar, Qt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
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
          m,
          so,
          oo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, so, oo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Z()
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
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [le, Qt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, so, oo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [le, ee, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "mask-linear": [le]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [ee, J]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
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
        "mask-conic": [le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
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
        mask: B()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: D()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: V()
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
        mask: ["none", ee, J]
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
          ee,
          J
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: re()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [le, ee, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [le, ee, J]
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
          b,
          so,
          oo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", le, ee, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [le, ee, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", le, ee, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [le, ee, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", le, ee, J]
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
          ee,
          J
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": re()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [le, ee, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [le, ee, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", le, ee, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [le, ee, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", le, ee, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [le, ee, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le, ee, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", le, ee, J]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ee, J]
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
        duration: [le, "initial", ee, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, ee, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [le, ee, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, ee, J]
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
        perspective: [h, ee, J]
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
        skew: ie()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ie()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ie()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ee, J, "", "none", "gpu", "cpu"]
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
        translate: ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ce()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [nt, ee, J]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
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
        caret: M()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee, J]
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
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": M()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": M()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": E()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": E()
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
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": E()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": E()
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
        "will-change": ["auto", "scroll", "contents", "transform", ee, J]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [le, ar, Qt, Kc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
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
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
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
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, hx = /* @__PURE__ */ Gb(px);
function P(...e) {
  return hx(Mu(e));
}
const dO = Cb, gx = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Sb,
  {
    ref: n,
    className: P("border-b", e),
    ...t
  }
));
gx.displayName = "AccordionItem";
const vx = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(Nb, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  Eu,
  {
    ref: r,
    className: P(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(Fn, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
vx.displayName = Eu.displayName;
const bx = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Tu,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ u.jsx("div", { className: P("pb-4 pt-0", e), children: t })
  }
));
bx.displayName = Tu.displayName;
const Xc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Qc = Mu, mt = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Qc(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((d) => {
    const m = n?.[d], f = s?.[d];
    if (m === null) return null;
    const p = Xc(m) || Xc(f);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, m) => {
    let [f, p] = m;
    return p === void 0 || (d[f] = p), d;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, m) => {
    let { class: f, className: p, ...b } = m;
    return Object.entries(b).every((g) => {
      let [h, v] = g;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === v;
    }) ? [
      ...d,
      f,
      p
    ] : d;
  }, []);
  return Qc(e, a, c, n?.class, n?.className);
}, xx = mt(
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
), wx = l.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    role: "alert",
    className: P(xx({ variant: t }), e),
    ...n
  }
));
wx.displayName = "Alert";
const yx = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "h5",
  {
    ref: n,
    className: P("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
yx.displayName = "AlertTitle";
const Cx = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: P("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Cx.displayName = "AlertDescription";
function he(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => ((...n) => t.current?.(...n)), []);
}
function Sx(e, t = globalThis?.document) {
  const n = he(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Nx = "DismissableLayer", wa = "dismissableLayer.update", Ex = "dismissableLayer.pointerDownOutside", Tx = "dismissableLayer.focusOutside", Zc, ii = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Ht = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      deferPointerDownOutside: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: c,
      ...d
    } = e, m = l.useContext(ii), [f, p] = l.useState(null), b = f?.ownerDocument ?? globalThis?.document, [, g] = l.useState({}), h = oe(t, (R) => p(R)), v = Array.from(m.layers), [x] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(x), y = f ? v.indexOf(f) : -1, S = m.layersWithOutsidePointerEventsDisabled.size > 0, N = y >= w, C = l.useRef(!1), T = Px(
      (R) => {
        const _ = R.target;
        if (!(_ instanceof Node))
          return;
        const O = [...m.branches].some(
          (W) => W.contains(_)
        );
        !N || O || (s?.(R), i?.(R), R.defaultPrevented || c?.());
      },
      {
        ownerDocument: b,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: C,
        dismissableSurfaces: m.dismissableSurfaces
      }
    ), E = kx((R) => {
      if (r && C.current)
        return;
      const _ = R.target;
      [...m.branches].some((W) => W.contains(_)) || (a?.(R), i?.(R), R.defaultPrevented || c?.());
    }, b);
    return Sx((R) => {
      y === m.layers.size - 1 && (o?.(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
    }, b), l.useEffect(() => {
      if (f)
        return n && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Zc = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(f)), m.layers.add(f), Jc(), () => {
          n && (m.layersWithOutsidePointerEventsDisabled.delete(f), m.layersWithOutsidePointerEventsDisabled.size === 0 && (b.body.style.pointerEvents = Zc));
        };
    }, [f, b, n, m]), l.useEffect(() => () => {
      f && (m.layers.delete(f), m.layersWithOutsidePointerEventsDisabled.delete(f), Jc());
    }, [f, m]), l.useEffect(() => {
      const R = () => g({});
      return document.addEventListener(wa, R), () => document.removeEventListener(wa, R);
    }, []), /* @__PURE__ */ u.jsx(
      $.div,
      {
        ...d,
        ref: h,
        style: {
          pointerEvents: S ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: A(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: A(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: A(
          e.onPointerDownCapture,
          T.onPointerDownCapture
        )
      }
    );
  }
);
Ht.displayName = Nx;
var Rx = "DismissableLayerBranch", Vu = l.forwardRef((e, t) => {
  const n = l.useContext(ii), r = l.useRef(null), o = oe(t, r);
  return l.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx($.div, { ...e, ref: o });
});
Vu.displayName = Rx;
function Mx() {
  const e = l.useContext(ii), [t, n] = l.useState(null);
  return l.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
function Px(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s
  } = t, a = he(e), i = l.useRef(!1), c = l.useRef(!1), d = l.useRef(/* @__PURE__ */ new Map()), m = l.useRef(() => {
  });
  return l.useEffect(() => {
    function f() {
      c.current = !1, o.current = !1, d.current.clear();
    }
    function p() {
      return Array.from(d.current.values()).some(Boolean);
    }
    function b(w) {
      if (!c.current)
        return;
      const y = w.target;
      y instanceof Node && [...s].some((N) => N.contains(y)) || d.current.set(w.type, !0), w.type === "click" && window.setTimeout(() => {
        c.current && m.current();
      }, 0);
    }
    function g(w) {
      c.current && d.current.set(w.type, !1);
    }
    const h = (w) => {
      if (w.target && !i.current) {
        let y = function() {
          n.removeEventListener("click", m.current);
          const N = p();
          f(), N || Yu(
            Ex,
            a,
            S,
            { discrete: !0 }
          );
        };
        const S = { originalEvent: w };
        c.current = !0, o.current = r && w.button === 0, d.current.clear(), !r || w.button !== 0 ? y() : (n.removeEventListener("click", m.current), m.current = y, n.addEventListener("click", m.current, { once: !0 }));
      } else
        n.removeEventListener("click", m.current), f();
      i.current = !1;
    }, v = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const w of v)
      n.addEventListener(w, b, !0), n.addEventListener(w, g);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", h);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", h), n.removeEventListener("click", m.current);
      for (const w of v)
        n.removeEventListener(w, b, !0), n.removeEventListener(w, g);
    };
  }, [
    n,
    a,
    r,
    o,
    s
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function kx(e, t = globalThis?.document) {
  const n = he(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Yu(Tx, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Jc() {
  const e = new CustomEvent(wa);
  document.dispatchEvent(e);
}
function Yu(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gr(o, s) : o.dispatchEvent(s);
}
var Dx = Ht, _x = Vu, Zs = "focusScope.autoFocusOnMount", Js = "focusScope.autoFocusOnUnmount", el = { bubbles: !1, cancelable: !0 }, Ox = "FocusScope", Tr = l.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = l.useState(null), d = he(o), m = he(s), f = l.useRef(null), p = oe(t, (h) => c(h)), b = l.useRef({
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
      let h = function(y) {
        if (b.paused || !i) return;
        const S = y.target;
        i.contains(S) ? f.current = S : At(f.current, { select: !0 });
      }, v = function(y) {
        if (b.paused || !i) return;
        const S = y.relatedTarget;
        S !== null && (i.contains(S) || At(f.current, { select: !0 }));
      }, x = function(y) {
        if (document.activeElement === document.body)
          for (const N of y)
            N.removedNodes.length > 0 && At(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const w = new MutationObserver(x);
      return i && w.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), w.disconnect();
      };
    }
  }, [r, i, b.paused]), l.useEffect(() => {
    if (i) {
      nl.add(b);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const x = new CustomEvent(Zs, el);
        i.addEventListener(Zs, d), i.dispatchEvent(x), x.defaultPrevented || (Ax($x(zu(i)), { select: !0 }), document.activeElement === h && At(i));
      }
      return () => {
        i.removeEventListener(Zs, d), setTimeout(() => {
          const x = new CustomEvent(Js, el);
          i.addEventListener(Js, m), i.dispatchEvent(x), x.defaultPrevented || At(h ?? document.body, { select: !0 }), i.removeEventListener(Js, m), nl.remove(b);
        }, 0);
      };
    }
  }, [i, d, m, b]);
  const g = l.useCallback(
    (h) => {
      if (!n && !r || b.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, x = document.activeElement;
      if (v && x) {
        const w = h.currentTarget, [y, S] = Ix(w);
        y && S ? !h.shiftKey && x === S ? (h.preventDefault(), n && At(y, { select: !0 })) : h.shiftKey && x === y && (h.preventDefault(), n && At(S, { select: !0 })) : x === w && h.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ u.jsx($.div, { tabIndex: -1, ...a, ref: p, onKeyDown: g });
});
Tr.displayName = Ox;
function Ax(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (At(r, { select: t }), document.activeElement !== n) return;
}
function Ix(e) {
  const t = zu(e), n = tl(t, e), r = tl(t.reverse(), e);
  return [n, r];
}
function zu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function tl(e, t) {
  for (const n of e)
    if (!jx(n, { upTo: t })) return n;
}
function jx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Fx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function At(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Fx(e) && t && e.select();
  }
}
var nl = Lx();
function Lx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = rl(e, t), e.unshift(t);
    },
    remove(t) {
      e = rl(e, t), e[0]?.resume();
    }
  };
}
function rl(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function $x(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Wx = "Portal", mn = l.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = l.useState(!1);
  xe(() => s(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? un.createPortal(/* @__PURE__ */ u.jsx($.div, { ...r, ref: t }), a) : null;
});
mn.displayName = Wx;
var ao = 0, Tn = null;
function Uo() {
  l.useEffect(() => {
    Tn || (Tn = { start: ol(), end: ol() });
    const { start: e, end: t } = Tn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), ao++, () => {
      ao === 1 && (Tn?.start.remove(), Tn?.end.remove(), Tn = null), ao = Math.max(0, ao - 1);
    };
  }, []);
}
function ol() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ot = function() {
  return ot = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ot.apply(this, arguments);
};
function Gu(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Bx(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var vo = "right-scroll-bar-position", bo = "width-before-scroll-bar", Hx = "with-scroll-bars-hidden", Vx = "--removed-body-scroll-bar-size";
function ea(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Yx(e, t) {
  var n = Ve(function() {
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
var zx = typeof window < "u" ? l.useLayoutEffect : l.useEffect, sl = /* @__PURE__ */ new WeakMap();
function Gx(e, t) {
  var n = Yx(null, function(r) {
    return e.forEach(function(o) {
      return ea(o, r);
    });
  });
  return zx(function() {
    var r = sl.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || ea(i, null);
      }), s.forEach(function(i) {
        o.has(i) || ea(i, a);
      });
    }
    sl.set(n, e);
  }, [e]), n;
}
function Kx(e) {
  return e;
}
function Ux(e, t) {
  t === void 0 && (t = Kx);
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
        var m = a;
        a = [], m.forEach(s);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(m) {
          a.push(m), d();
        },
        filter: function(m) {
          return a = a.filter(m), n;
        }
      };
    }
  };
  return o;
}
function qx(e) {
  e === void 0 && (e = {});
  var t = Ux(null);
  return t.options = ot({ async: !0, ssr: !1 }, e), t;
}
var Ku = function(e) {
  var t = e.sideCar, n = Gu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, ot({}, n));
};
Ku.isSideCarExport = !0;
function Xx(e, t) {
  return e.useMedium(t), Ku;
}
var Uu = qx(), ta = function() {
}, qo = l.forwardRef(function(e, t) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: ta,
    onWheelCapture: ta,
    onTouchMoveCapture: ta
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, m = e.enabled, f = e.shards, p = e.sideCar, b = e.noRelative, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, y = e.gapMode, S = Gu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = p, C = Gx([n, t]), T = ot(ot({}, S), o);
  return l.createElement(
    l.Fragment,
    null,
    m && l.createElement(N, { sideCar: Uu, removeScrollBar: d, shards: f, noRelative: b, noIsolation: g, inert: h, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: y }),
    a ? l.cloneElement(l.Children.only(i), ot(ot({}, T), { ref: C })) : l.createElement(w, ot({}, T, { className: c, ref: C }), i)
  );
});
qo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qo.classNames = {
  fullWidth: bo,
  zeroRight: vo
};
var Qx = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Zx() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Qx();
  return t && e.setAttribute("nonce", t), e;
}
function Jx(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ew(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var tw = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Zx()) && (Jx(t, n), ew(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, nw = function() {
  var e = tw();
  return function(t, n) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, qu = function() {
  var e = nw(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, rw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, na = function(e) {
  return parseInt(e || "", 10) || 0;
}, ow = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [na(n), na(r), na(o)];
}, sw = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return rw;
  var t = ow(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, aw = qu(), An = "data-scroll-locked", iw = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Hx, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(An, `] {
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
  
  .`).concat(vo, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(bo, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(vo, " .").concat(vo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(bo, " .").concat(bo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(An, `] {
    `).concat(Vx, ": ").concat(i, `px;
  }
`);
}, al = function() {
  var e = parseInt(document.body.getAttribute(An) || "0", 10);
  return isFinite(e) ? e : 0;
}, cw = function() {
  l.useEffect(function() {
    return document.body.setAttribute(An, (al() + 1).toString()), function() {
      var e = al() - 1;
      e <= 0 ? document.body.removeAttribute(An) : document.body.setAttribute(An, e.toString());
    };
  }, []);
}, lw = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  cw();
  var s = l.useMemo(function() {
    return sw(o);
  }, [o]);
  return l.createElement(aw, { styles: iw(s, !t, o, n ? "" : "!important") });
}, ya = !1;
if (typeof window < "u")
  try {
    var io = Object.defineProperty({}, "passive", {
      get: function() {
        return ya = !0, !0;
      }
    });
    window.addEventListener("test", io, io), window.removeEventListener("test", io, io);
  } catch {
    ya = !1;
  }
var Rn = ya ? { passive: !1 } : !1, uw = function(e) {
  return e.tagName === "TEXTAREA";
}, Xu = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !uw(e) && n[t] === "visible")
  );
}, dw = function(e) {
  return Xu(e, "overflowY");
}, fw = function(e) {
  return Xu(e, "overflowX");
}, il = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Qu(e, r);
    if (o) {
      var s = Zu(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, mw = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, pw = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Qu = function(e, t) {
  return e === "v" ? dw(t) : fw(t);
}, Zu = function(e, t) {
  return e === "v" ? mw(t) : pw(t);
}, hw = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, gw = function(e, t, n, r, o) {
  var s = hw(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), d = !1, m = a > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var b = Zu(e, i), g = b[0], h = b[1], v = b[2], x = h - v - s * g;
    (g || x) && Qu(e, i) && (f += x, p += g);
    var w = i.parentNode;
    i = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (m && Math.abs(f) < 1 || !m && Math.abs(p) < 1) && (d = !0), d;
}, co = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cl = function(e) {
  return [e.deltaX, e.deltaY];
}, ll = function(e) {
  return e && "current" in e ? e.current : e;
}, vw = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, bw = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xw = 0, Mn = [];
function ww(e) {
  var t = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(xw++)[0], s = l.useState(qu)[0], a = l.useRef(e);
  l.useEffect(function() {
    a.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Bx([e.lockRef.current], (e.shards || []).map(ll), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = l.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var x = co(h), w = n.current, y = "deltaX" in h ? h.deltaX : w[0] - x[0], S = "deltaY" in h ? h.deltaY : w[1] - x[1], N, C = h.target, T = Math.abs(y) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && T === "h" && C.type === "range")
      return !1;
    var E = window.getSelection(), R = E && E.anchorNode, _ = R ? R === C || R.contains(C) : !1;
    if (_)
      return !1;
    var O = il(T, C);
    if (!O)
      return !0;
    if (O ? N = T : (N = T === "v" ? "h" : "v", O = il(T, C)), !O)
      return !1;
    if (!r.current && "changedTouches" in h && (y || S) && (r.current = N), !N)
      return !0;
    var W = r.current || N;
    return gw(W, v, h, W === "h" ? y : S);
  }, []), c = l.useCallback(function(h) {
    var v = h;
    if (!(!Mn.length || Mn[Mn.length - 1] !== s)) {
      var x = "deltaY" in v ? cl(v) : co(v), w = t.current.filter(function(N) {
        return N.name === v.type && (N.target === v.target || v.target === N.shadowParent) && vw(N.delta, x);
      })[0];
      if (w && w.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!w) {
        var y = (a.current.shards || []).map(ll).filter(Boolean).filter(function(N) {
          return N.contains(v.target);
        }), S = y.length > 0 ? i(v, y[0]) : !a.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), d = l.useCallback(function(h, v, x, w) {
    var y = { name: h, delta: v, target: x, should: w, shadowParent: yw(x) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== y;
      });
    }, 1);
  }, []), m = l.useCallback(function(h) {
    n.current = co(h), r.current = void 0;
  }, []), f = l.useCallback(function(h) {
    d(h.type, cl(h), h.target, i(h, e.lockRef.current));
  }, []), p = l.useCallback(function(h) {
    d(h.type, co(h), h.target, i(h, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Mn.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Rn), document.addEventListener("touchmove", c, Rn), document.addEventListener("touchstart", m, Rn), function() {
      Mn = Mn.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", c, Rn), document.removeEventListener("touchmove", c, Rn), document.removeEventListener("touchstart", m, Rn);
    };
  }, []);
  var b = e.removeScrollBar, g = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    g ? l.createElement(s, { styles: bw(o) }) : null,
    b ? l.createElement(lw, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function yw(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Cw = Xx(Uu, ww);
var Rr = l.forwardRef(function(e, t) {
  return l.createElement(qo, ot({}, e, { ref: t, sideCar: Cw }));
});
Rr.classNames = qo.classNames;
var Sw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pn = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), uo = {}, ra = 0, Ju = function(e) {
  return e && (e.host || Ju(e.parentNode));
}, Nw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ju(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ew = function(e, t, n, r) {
  var o = Nw(t, Array.isArray(e) ? e : [e]);
  uo[n] || (uo[n] = /* @__PURE__ */ new WeakMap());
  var s = uo[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var m = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        m(p);
      else
        try {
          var b = p.getAttribute(r), g = b !== null && b !== "false", h = (Pn.get(p) || 0) + 1, v = (s.get(p) || 0) + 1;
          Pn.set(p, h), s.set(p, v), a.push(p), h === 1 && g && lo.set(p, !0), v === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return m(t), i.clear(), ra++, function() {
    a.forEach(function(f) {
      var p = Pn.get(f) - 1, b = s.get(f) - 1;
      Pn.set(f, p), s.set(f, b), p || (lo.has(f) || f.removeAttribute(r), lo.delete(f)), b || f.removeAttribute(n);
    }), ra--, ra || (Pn = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), uo = {});
  };
}, Xo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Sw(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Ew(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Qo = "Dialog", [ed, td] = Te(Qo), [Tw, et] = ed(Qo), Mr = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = l.useRef(null), c = l.useRef(null), [d, m] = Pe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Qo
  });
  return /* @__PURE__ */ u.jsx(
    Tw,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: we(),
      titleId: we(),
      descriptionId: we(),
      open: d,
      onOpenChange: m,
      onOpenToggle: l.useCallback(() => m((f) => !f), [m]),
      modal: a,
      children: n
    }
  );
};
Mr.displayName = Qo;
var nd = "DialogTrigger", Zo = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(nd, n), s = oe(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": li(o.open),
        ...r,
        ref: s,
        onClick: A(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Zo.displayName = nd;
var ci = "DialogPortal", [Rw, rd] = ed(ci, {
  forceMount: void 0
}), Pr = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = et(ci, t);
  return /* @__PURE__ */ u.jsx(Rw, { scope: t, forceMount: n, children: l.Children.map(r, (a) => /* @__PURE__ */ u.jsx(be, { present: n || s.open, children: /* @__PURE__ */ u.jsx(mn, { asChild: !0, container: o, children: a }) })) });
};
Pr.displayName = ci;
var To = "DialogOverlay", pn = l.forwardRef(
  (e, t) => {
    const n = rd(To, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = et(To, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ u.jsx(be, { present: r || s.open, children: /* @__PURE__ */ u.jsx(Pw, { ...o, ref: t }) }) : null;
  }
);
pn.displayName = To;
var Mw = /* @__PURE__ */ jt("DialogOverlay.RemoveScroll"), Pw = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(To, n), s = Mx(), a = oe(t, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Rr, { as: Mw, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        $.div,
        {
          "data-state": li(o.open),
          ...r,
          ref: a,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ln = "DialogContent", hn = l.forwardRef(
  (e, t) => {
    const n = rd(Ln, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = et(Ln, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(be, { present: r || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(kw, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(Dw, { ...o, ref: t }) });
  }
);
hn.displayName = Ln;
var kw = l.forwardRef(
  (e, t) => {
    const n = et(Ln, e.__scopeDialog), r = l.useRef(null), o = oe(t, n.contentRef, r);
    return l.useEffect(() => {
      const s = r.current;
      if (s) return Xo(s);
    }, []), /* @__PURE__ */ u.jsx(
      od,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: A(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: A(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Dw = l.forwardRef(
  (e, t) => {
    const n = et(Ln, e.__scopeDialog), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      od,
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
), od = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = et(Ln, n);
    return Uo(), /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
      Tr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ u.jsx(
          Ht,
          {
            role: "dialog",
            id: i.contentId,
            "aria-describedby": i.descriptionId,
            "aria-labelledby": i.titleId,
            "data-state": li(i.open),
            ...a,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => i.onOpenChange(!1)
          }
        )
      }
    ) });
  }
), sd = "DialogTitle", zn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(sd, n);
    return /* @__PURE__ */ u.jsx($.h2, { id: o.titleId, ...r, ref: t });
  }
);
zn.displayName = sd;
var ad = "DialogDescription", Gn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(ad, n);
    return /* @__PURE__ */ u.jsx($.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Gn.displayName = ad;
var id = "DialogClose", gn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = et(id, n);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
gn.displayName = id;
function li(e) {
  return e ? "open" : "closed";
}
var cd = "AlertDialog", [_w] = Te(cd, [
  td
]), Pt = td(), ld = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Pt(t);
  return /* @__PURE__ */ u.jsx(Mr, { ...r, ...n, modal: !0 });
};
ld.displayName = cd;
var Ow = "AlertDialogTrigger", ud = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Pt(n);
    return /* @__PURE__ */ u.jsx(Zo, { ...o, ...r, ref: t });
  }
);
ud.displayName = Ow;
var Aw = "AlertDialogPortal", dd = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Pt(t);
  return /* @__PURE__ */ u.jsx(Pr, { ...r, ...n });
};
dd.displayName = Aw;
var Iw = "AlertDialogOverlay", fd = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Pt(n);
    return /* @__PURE__ */ u.jsx(pn, { ...o, ...r, ref: t });
  }
);
fd.displayName = Iw;
var md = "AlertDialogContent", [jw, Fw] = _w(md), pd = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, s = Pt(n), a = l.useRef(null), i = oe(t, a), c = l.useRef(null);
    return /* @__PURE__ */ u.jsx(jw, { scope: n, cancelRef: c, children: /* @__PURE__ */ u.jsx(
      hn,
      {
        role: "alertdialog",
        ...s,
        ...o,
        ref: i,
        onOpenAutoFocus: A(o.onOpenAutoFocus, (d) => {
          d.preventDefault(), c.current?.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (d) => d.preventDefault(),
        onInteractOutside: (d) => d.preventDefault(),
        children: r
      }
    ) });
  }
);
pd.displayName = md;
var Lw = "AlertDialogTitle", hd = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Pt(n);
    return /* @__PURE__ */ u.jsx(zn, { ...o, ...r, ref: t });
  }
);
hd.displayName = Lw;
var $w = "AlertDialogDescription", gd = l.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Pt(n);
  return /* @__PURE__ */ u.jsx(Gn, { ...o, ...r, ref: t });
});
gd.displayName = $w;
var Ww = "AlertDialogAction", vd = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Pt(n);
    return /* @__PURE__ */ u.jsx(gn, { ...o, ...r, ref: t });
  }
);
vd.displayName = Ww;
var bd = "AlertDialogCancel", xd = l.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = Fw(bd, n), s = Pt(n), a = oe(t, o);
    return /* @__PURE__ */ u.jsx(gn, { ...s, ...r, ref: a });
  }
);
xd.displayName = bd;
var Bw = ld, Hw = ud, Vw = dd, wd = fd, yd = pd, Cd = vd, Sd = xd, Nd = hd, Ed = gd;
const fO = Bw, mO = Hw, Yw = Vw, Td = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  wd,
  {
    className: P(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Td.displayName = wd.displayName;
const zw = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsxs(Yw, { children: [
  /* @__PURE__ */ u.jsx(Td, {}),
  /* @__PURE__ */ u.jsx(
    yd,
    {
      ref: n,
      className: P(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
zw.displayName = yd.displayName;
const Gw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: P(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Gw.displayName = "AlertDialogHeader";
const Kw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: P(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Kw.displayName = "AlertDialogFooter";
const Uw = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Nd,
  {
    ref: n,
    className: P("text-lg font-semibold", e),
    ...t
  }
));
Uw.displayName = Nd.displayName;
const qw = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ed,
  {
    ref: n,
    className: P("text-sm text-muted-foreground", e),
    ...t
  }
));
qw.displayName = Ed.displayName;
const Xw = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Cd,
  {
    ref: n,
    className: P(rn(), e),
    ...t
  }
));
Xw.displayName = Cd.displayName;
const Qw = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Sd,
  {
    ref: n,
    className: P(
      rn({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Qw.displayName = Sd.displayName;
function Zw({
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
  disabled: m = !1,
  triggerClassName: f,
  noResultsMessage: p,
  clearable: b = !0,
  error: g
}) {
  const [h, v] = Ve(!1), [x, w] = Ve(i), [y, S] = Ve(null), [N, C] = Ve("");
  St(() => {
    w(i);
  }, [i]), St(() => {
    if (i && e.length > 0) {
      const E = e.find((R) => r(R) === i);
      E && S(E);
    }
  }, [i, e, r]);
  const T = je(
    (E) => {
      const R = b && E === x ? "" : E;
      i && w(R), S(
        e.find((_) => r(_) === R) || null
      ), c(R), v(!1);
    },
    [x, c, b, e, r, i]
  );
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-1", children: [
    !!s && /* @__PURE__ */ u.jsx(Ss, { className: P(g && "text-destructive"), children: s }),
    /* @__PURE__ */ u.jsxs(Hr, { open: h, onOpenChange: v, children: [
      /* @__PURE__ */ u.jsx(Vr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
        vn,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": h,
          className: P(
            "justify-between w-full hover:bg-input bg-input font-normal",
            m && "opacity-50 cursor-not-allowed",
            !i && "text-muted-foreground",
            f
          ),
          disabled: m,
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "truncate", children: i && y ? o(y) : a }),
            /* @__PURE__ */ u.jsx(ou, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsx(Xn, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ u.jsxs(jr, { shouldFilter: !1, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "relative border-b", children: [
          /* @__PURE__ */ u.jsx(
            cs,
            {
              placeholder: "Buscar",
              value: N,
              onValueChange: (E) => {
                C(E), d(E);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ u.jsx(hr, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ u.jsxs(ls, { children: [
          t && e.length === 0 && /* @__PURE__ */ u.jsx(Jw, {}),
          !t && e.length === 0 && /* @__PURE__ */ u.jsx(us, { children: /* @__PURE__ */ u.jsx("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: p ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ u.jsx(Fr, { children: e.map((E) => /* @__PURE__ */ u.jsxs(
            nn,
            {
              value: r(E),
              onSelect: T,
              children: [
                /* @__PURE__ */ u.jsx(
                  Er,
                  {
                    className: P(
                      "mr-2 size-4 shrink-0",
                      x === r(E) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ u.jsx("div", { className: "w-0 flex-1", children: n(E) })
              ]
            },
            r(E)
          )) })
        ] })
      ] }) })
    ] }),
    !!g && /* @__PURE__ */ u.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: g })
  ] });
}
function Jw() {
  return /* @__PURE__ */ u.jsx(Fr, { children: [1, 2, 3].map((e) => /* @__PURE__ */ u.jsx(nn, { disabled: !0, className: "p-0", children: /* @__PURE__ */ u.jsx(LD, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const pO = ({
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
  const { control: m } = Yn();
  return /* @__PURE__ */ u.jsx(
    Ur,
    {
      name: e,
      control: m,
      render: ({ field: f }) => /* @__PURE__ */ u.jsxs(Qn, { children: [
        !!t && /* @__PURE__ */ u.jsx(Zn, { children: t }),
        /* @__PURE__ */ u.jsx(
          Zw,
          {
            options: o,
            value: f.value,
            placeholder: s,
            onSearchChange: a,
            getDisplayValue: i,
            getOptionValue: c,
            renderOption: d,
            onChange: (p) => f.onChange(p),
            isLoading: r,
            disabled: n
          }
        ),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
};
var ui = "Avatar", [ey] = Te(ui), ty = [
  0,
  () => {
  }
], [ny, Rd] = ey(ui), di = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, s] = l.useState("idle"), [a, i] = oy();
    return /* @__PURE__ */ u.jsx(
      ny,
      {
        scope: n,
        imageLoadingStatus: o,
        setImageLoadingStatus: s,
        imageCount: a,
        setImageCount: i,
        children: /* @__PURE__ */ u.jsx($.span, { ...r, ref: t })
      }
    );
  }
);
di.displayName = ui;
var Md = "AvatarImage", fi = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o, ...s } = e, a = Rd(Md, n);
    sy(a.setImageCount);
    const i = ry(r, {
      referrerPolicy: s.referrerPolicy,
      crossOrigin: s.crossOrigin,
      loadingStatus: a.imageLoadingStatus,
      setLoadingStatus: a.setImageLoadingStatus
    }), c = he((m) => {
      o?.(m);
    }), d = l.useRef(i);
    return xe(() => {
      const m = d.current;
      d.current = i, i !== m && c(i);
    }, [i, c]), i === "loaded" ? /* @__PURE__ */ u.jsx($.img, { ...s, ref: t, src: r }) : null;
  }
);
fi.displayName = Md;
var Pd = "AvatarFallback", mi = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, s = Rd(Pd, n), [a, i] = l.useState(r === void 0);
    return l.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), a && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ u.jsx($.span, { ...o, ref: t }) : null;
  }
);
mi.displayName = Pd;
function ry(e, {
  loadingStatus: t,
  setLoadingStatus: n,
  referrerPolicy: r,
  crossOrigin: o
}) {
  return xe(() => {
    if (!e) {
      n("error");
      return;
    }
    const s = new window.Image(), a = (c) => {
      const d = c.currentTarget;
      n(ul(d));
    }, i = () => n("error");
    return s.addEventListener("load", a), s.addEventListener("error", i), r && (s.referrerPolicy = r), s.crossOrigin = o ?? null, s.src = e, n(ul(s)), () => {
      s.removeEventListener("load", a), s.removeEventListener("error", i), n("idle");
    };
  }, [e, o, r, n]), t;
}
function ul(e) {
  return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function oy() {
  let e = ty;
  {
    e = l.useState(0);
    const [t] = e, n = l.useRef(!1);
    l.useEffect(() => {
      t > 1 && !n.current && (n.current = !0, console.warn(
        "Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."
      ));
    }, [t]);
  }
  return e;
}
function sy(e) {
  l.useEffect(() => (e((t) => t + 1), () => {
    e((t) => t - 1);
  }), [e]);
}
const ay = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  di,
  {
    ref: n,
    className: P(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
ay.displayName = di.displayName;
const iy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  fi,
  {
    ref: n,
    className: P("aspect-square h-full w-full", e),
    ...t
  }
));
iy.displayName = fi.displayName;
const cy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  mi,
  {
    ref: n,
    className: P(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
cy.displayName = mi.displayName;
const ly = mt(
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
function dl({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ u.jsx("div", { className: P(ly({ variant: t }), e), ...n });
}
const uy = l.forwardRef(({ ...e }, t) => /* @__PURE__ */ u.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
uy.displayName = "Breadcrumb";
const dy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "ol",
  {
    ref: n,
    className: P(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
dy.displayName = "BreadcrumbList";
const fy = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "li",
  {
    ref: n,
    className: P("inline-flex items-center gap-1.5", e),
    ...t
  }
));
fy.displayName = "BreadcrumbItem";
const my = l.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? iu : "a";
  return /* @__PURE__ */ u.jsx(
    o,
    {
      ref: r,
      className: P("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
my.displayName = "BreadcrumbLink";
const py = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: P("font-normal text-foreground", e),
    ...t
  }
));
py.displayName = "BreadcrumbPage";
const hy = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ u.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: P("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ u.jsx(Xa, {})
  }
);
hy.displayName = "BreadcrumbSeparator";
const gy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: P("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(su, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
gy.displayName = "BreadcrumbElipssis";
const vy = {
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
}, rn = mt(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: vy,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), vn = l.forwardRef(({ className: e, variant: t, size: n, disabled: r, href: o, ...s }, a) => /* @__PURE__ */ u.jsx(u.Fragment, { children: o ? /* @__PURE__ */ u.jsx(
  jv,
  {
    className: P(rn({ variant: t, size: n, className: e })),
    ref: a,
    to: o,
    ...s
  }
) : /* @__PURE__ */ u.jsx(
  "button",
  {
    className: P(rn({ variant: t, size: n, className: e })),
    ref: a,
    disabled: r,
    ...s
  }
) }));
vn.displayName = "Button";
function by(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const xy = {}, lr = {};
function wt(e, t) {
  try {
    const r = (xy[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in lr ? lr[r] : fl(r, r.split(":"));
  } catch {
    if (e in lr) return lr[e];
    const n = e?.match(wy);
    return n ? fl(e, n.slice(1)) : NaN;
  }
}
const wy = /([+-]\d\d):?(\d\d)?/;
function fl(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return lr[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class ut extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(wt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), kd(this, t)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new ut(...n, t) : new ut(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new ut(+this, t);
  }
  getTimezoneOffset() {
    const t = -wt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Ro(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new ut(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ml = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!ml.test(e)) return;
  const t = e.replace(ml, "$1UTC");
  ut.prototype[t] && (e.startsWith("get") ? ut.prototype[e] = function() {
    return this.internal[t]();
  } : (ut.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), yy(this), +this;
  }, ut.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ro(this), +this;
  }));
});
function Ro(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-wt(e.timeZone, e) * 60));
}
function yy(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), kd(e);
}
function kd(e, t) {
  const n = Array.isArray(t) ? Cy(t) : +e.internal, r = wt(e.timeZone, e), o = r > 0 ? Math.floor(r) : Math.ceil(r), s = /* @__PURE__ */ new Date(+e);
  s.setUTCHours(s.getUTCHours() - 1);
  const a = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), i = -(/* @__PURE__ */ new Date(+s)).getTimezoneOffset(), c = a - i;
  let d = a;
  if (c && a !== o) {
    const R = Date.prototype.getHours.apply(e), _ = Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours();
    if (R !== _) {
      const O = /* @__PURE__ */ new Date(+e), W = a - o;
      W && O.setUTCMinutes(O.getUTCMinutes() + W);
      const X = wt(e.timeZone, O);
      (X > 0 ? Math.floor(X) : Math.ceil(X)) === o && (d = i);
    }
  }
  const m = d - o;
  m && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + m);
  const f = /* @__PURE__ */ new Date(+e);
  f.setUTCSeconds(0);
  const p = a > 0 ? f.getSeconds() : (f.getSeconds() - 60) % 60, b = Math.round(-(wt(e.timeZone, e) * 60)) % 60;
  (b || p) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + b + p);
  const g = wt(e.timeZone, e), h = g > 0 ? Math.floor(g) : Math.ceil(g), x = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, w = h !== o, y = x - m, S = h - o, N = n - h * 60 * 1e3, C = S > 0 && pl(e) - n === S * 60 * 1e3 && pl(e, N) !== n;
  if (w && y && !C) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
    const R = wt(e.timeZone, e), _ = R > 0 ? Math.floor(R) : Math.ceil(R), O = h - _;
    O && y < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + O);
  }
  Ro(e);
  const E = (t ? n : n + b * 1e3) - +e.internal;
  E && Math.abs(E) < 1800 * 1e3 && (Date.prototype.setTime.call(e, +e + E), Ro(e));
}
function Cy(e) {
  return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function pl(e, t) {
  const n = new Date(t ?? +e);
  return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-wt(e.timeZone, n) * 60)), +n;
}
class Oe extends ut {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Oe(...n, t) : new Oe(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${by(this.timeZone, this)})`;
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
    return new Oe(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Oe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Dd = 6048e5, Sy = 864e5, Ny = 6e4, Ey = 36e5, Ty = 1e3, hl = /* @__PURE__ */ Symbol.for("constructDateFrom");
function ge(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && hl in e ? e[hl](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ue(e, t) {
  return ge(t || e, e);
}
function kr(e, t, n) {
  const r = ue(e, n?.in);
  return isNaN(t) ? ge(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function pi(e, t, n) {
  const r = ue(e, n?.in);
  if (isNaN(t)) return ge(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = ge(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
function Ry(e, t, n) {
  const {
    years: r = 0,
    months: o = 0,
    weeks: s = 0,
    days: a = 0,
    hours: i = 0,
    minutes: c = 0,
    seconds: d = 0
  } = t, m = ue(e, n?.in), f = o || r ? pi(m, o + r * 12) : m, p = a || s ? kr(f, a + s * 7) : f, b = c + i * 60, h = (d + b * 60) * 1e3;
  return ge(e, +p + h);
}
let My = {};
function bn() {
  return My;
}
function Et(e, t) {
  const n = bn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ue(e, t?.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function on(e, t) {
  return Et(e, { ...t, weekStartsOn: 1 });
}
function _d(e, t) {
  const n = ue(e, t?.in), r = n.getFullYear(), o = ge(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = on(o), a = ge(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = on(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Mo(e) {
  const t = ue(e), n = new Date(
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
function Kn(e, ...t) {
  const n = ge.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function vr(e, t) {
  const n = ue(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function hi(e, t, n) {
  const [r, o] = Kn(
    n?.in,
    e,
    t
  ), s = vr(r), a = vr(o), i = +s - Mo(s), c = +a - Mo(a);
  return Math.round((i - c) / Sy);
}
function Py(e, t) {
  const n = _d(e, t), r = ge(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), on(r);
}
function ky(e, t, n) {
  return kr(e, t * 7, n);
}
function Dy(e, t, n) {
  return pi(e, t * 12, n);
}
function _y(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ge.bind(null, o));
    const s = ue(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), ge(r, n || NaN);
}
function Oy(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ge.bind(null, o));
    const s = ue(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), ge(r, n || NaN);
}
function Ay(e, t, n) {
  const [r, o] = Kn(
    n?.in,
    e,
    t
  );
  return +vr(r) == +vr(o);
}
function Od(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function gi(e) {
  return !(!Od(e) && typeof e != "number" || isNaN(+ue(e)));
}
function Ad(e, t, n) {
  const [r, o] = Kn(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function Iy(e, t) {
  const n = ue(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Id(e, t) {
  const [n, r] = Kn(e, t.start, t.end);
  return { start: n, end: r };
}
function jy(e, t) {
  const { start: n, end: r } = Id(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(ge(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function Fy(e, t) {
  const n = ue(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Ly(e, t) {
  const n = ue(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function jd(e, t) {
  const n = ue(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function $y(e, t) {
  const { start: n, end: r } = Id(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(ge(n, a)), a.setFullYear(a.getFullYear() + i);
  return o ? c.reverse() : c;
}
function Fd(e, t) {
  const n = bn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ue(e, t?.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function Wy(e, t) {
  return Fd(e, { ...t, weekStartsOn: 1 });
}
const By = {
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
}, Hy = (e, t, n) => {
  let r;
  const o = By[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function In(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Vy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, zy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Gy = {
  date: In({
    formats: Vy,
    defaultWidth: "full"
  }),
  time: In({
    formats: Yy,
    defaultWidth: "full"
  }),
  dateTime: In({
    formats: zy,
    defaultWidth: "full"
  })
}, Ky = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Uy = (e, t, n, r) => Ky[e];
function st(e) {
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
const qy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Xy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Qy = {
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
}, Zy = {
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
}, Jy = {
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
}, eC = {
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
}, tC = (e, t) => {
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
}, nC = {
  ordinalNumber: tC,
  era: st({
    values: qy,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: Xy,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: st({
    values: Qy,
    defaultWidth: "wide"
  }),
  day: st({
    values: Zy,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: Jy,
    defaultWidth: "wide",
    formattingValues: eC,
    defaultFormattingWidth: "wide"
  })
};
function at(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? oC(i, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      rC(i, (f) => f.test(a))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const m = t.slice(a.length);
    return { value: d, rest: m };
  };
}
function rC(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function oC(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ld(e) {
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
const sC = /^(\d+)(th|st|nd|rd)?/i, aC = /\d+/i, iC = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, cC = {
  any: [/^b/i, /^(a|c)/i]
}, lC = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, uC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, dC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, fC = {
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
}, mC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, hC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gC = {
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
}, vC = {
  ordinalNumber: Ld({
    matchPattern: sC,
    parsePattern: aC,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: at({
    matchPatterns: iC,
    defaultMatchWidth: "wide",
    parsePatterns: cC,
    defaultParseWidth: "any"
  }),
  quarter: at({
    matchPatterns: lC,
    defaultMatchWidth: "wide",
    parsePatterns: uC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: at({
    matchPatterns: dC,
    defaultMatchWidth: "wide",
    parsePatterns: fC,
    defaultParseWidth: "any"
  }),
  day: at({
    matchPatterns: mC,
    defaultMatchWidth: "wide",
    parsePatterns: pC,
    defaultParseWidth: "any"
  }),
  dayPeriod: at({
    matchPatterns: hC,
    defaultMatchWidth: "any",
    parsePatterns: gC,
    defaultParseWidth: "any"
  })
}, en = {
  code: "en-US",
  formatDistance: Hy,
  formatLong: Gy,
  formatRelative: Uy,
  localize: nC,
  match: vC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function bC(e, t) {
  const n = ue(e, t?.in);
  return hi(n, jd(n)) + 1;
}
function Jo(e, t) {
  const n = ue(e, t?.in), r = +on(n) - +Py(n);
  return Math.round(r / Dd) + 1;
}
function vi(e, t) {
  const n = ue(e, t?.in), r = n.getFullYear(), o = bn(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, a = ge(t?.in || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = Et(a, t), c = ge(t?.in || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const d = Et(c, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function xC(e, t) {
  const n = bn(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = vi(e, t), s = ge(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), Et(s, t);
}
function es(e, t) {
  const n = ue(e, t?.in), r = +Et(n, t) - +xC(n, t);
  return Math.round(r / Dd) + 1;
}
function ve(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ot = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ve(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ve(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ve(e.getDate(), t.length);
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
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ve(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ve(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ve(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ve(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ve(o, t.length);
  }
}, kn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, gl = {
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
    return Ot.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = vi(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return ve(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : ve(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = _d(e);
    return ve(n, t.length);
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
    return ve(n, t.length);
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
        return ve(r, 2);
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
        return ve(r, 2);
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
        return Ot.M(e, t);
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
        return ve(r + 1, 2);
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
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = es(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ve(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Jo(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ve(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ot.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = bC(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ve(r, t.length);
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
        return ve(s, 2);
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
        return ve(s, t.length);
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
        return ve(o, t.length);
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
    switch (r === 12 ? o = kn.noon : r === 0 ? o = kn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = kn.evening : r >= 12 ? o = kn.afternoon : r >= 4 ? o = kn.morning : o = kn.night, t) {
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
    return Ot.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ot.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ve(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ve(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ot.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ot.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ot.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return bl(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Jt(r);
      // Hours and minutes with `:` delimiter
      default:
        return Jt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return bl(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Jt(r);
      // Hours and minutes with `:` delimiter
      default:
        return Jt(r, ":");
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
        return "GMT" + vl(r, ":");
      default:
        return "GMT" + Jt(r, ":");
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
        return "GMT" + vl(r, ":");
      default:
        return "GMT" + Jt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return ve(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ve(+e, t.length);
  }
};
function vl(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + ve(s, 2);
}
function bl(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ve(Math.abs(e) / 60, 2) : Jt(e, t);
}
function Jt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ve(Math.trunc(r / 60), 2), s = ve(r % 60, 2);
  return n + o + t + s;
}
const xl = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, $d = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, wC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return xl(e, t);
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
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", xl(r, t)).replace("{{time}}", $d(o, t));
}, Ca = {
  p: $d,
  P: wC
}, yC = /^D+$/, CC = /^Y+$/, SC = ["D", "DD", "YY", "YYYY"];
function Wd(e) {
  return yC.test(e);
}
function Bd(e) {
  return CC.test(e);
}
function Sa(e, t, n) {
  const r = NC(e, t, n);
  if (console.warn(r), SC.includes(e)) throw new RangeError(r);
}
function NC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const EC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, TC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, RC = /^'([^]*?)'?$/, MC = /''/g, PC = /[a-zA-Z]/;
function tn(e, t, n) {
  const r = bn(), o = n?.locale ?? r.locale ?? en, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = ue(e, n?.in);
  if (!gi(i))
    throw new RangeError("Invalid time value");
  let c = t.match(TC).map((m) => {
    const f = m[0];
    if (f === "p" || f === "P") {
      const p = Ca[f];
      return p(m, o.formatLong);
    }
    return m;
  }).join("").match(EC).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const f = m[0];
    if (f === "'")
      return { isToken: !1, value: kC(m) };
    if (gl[f])
      return { isToken: !0, value: m };
    if (f.match(PC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: m };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const d = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: o
  };
  return c.map((m) => {
    if (!m.isToken) return m.value;
    const f = m.value;
    (!n?.useAdditionalWeekYearTokens && Bd(f) || !n?.useAdditionalDayOfYearTokens && Wd(f)) && Sa(f, t, String(e));
    const p = gl[f[0]];
    return p(i, f, o.localize, d);
  }).join("");
}
function kC(e) {
  const t = e.match(RC);
  return t ? t[1].replace(MC, "'") : e;
}
function DC(e, t) {
  const n = ue(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = ge(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function _C() {
  return Object.assign({}, bn());
}
function OC(e, t) {
  const n = ue(e, t?.in).getDay();
  return n === 0 ? 7 : n;
}
function AC(e, t) {
  return ue(e, t?.in).getMonth();
}
function IC(e, t) {
  return ue(e, t?.in).getFullYear();
}
function jC(e, t) {
  return +ue(e) > +ue(t);
}
function FC(e, t) {
  return +ue(e) < +ue(t);
}
function LC(e, t) {
  const n = $C(t) ? new t(0) : ge(t, 0);
  return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
function $C(e) {
  return typeof e == "function" && e.prototype?.constructor === e;
}
const WC = 10;
class Hd {
  subPriority = 0;
  validate(t, n) {
    return !0;
  }
}
class BC extends Hd {
  constructor(t, n, r, o, s) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = o, s && (this.subPriority = s);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class HC extends Hd {
  priority = WC;
  subPriority = -1;
  constructor(t, n) {
    super(), this.context = t || ((r) => ge(n, r));
  }
  set(t, n) {
    return n.timestampIsSet ? t : ge(t, LC(t, this.context));
  }
}
class pe {
  run(t, n, r, o) {
    const s = this.parse(t, n, r, o);
    return s ? {
      setter: new BC(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class VC extends pe {
  priority = 140;
  parse(t, n, r) {
    switch (n) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      // A, B
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, n, r) {
    return n.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
}
const Re = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, it = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Me(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ce(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function ct(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, o = n[2] ? parseInt(n[2], 10) : 0, s = n[3] ? parseInt(n[3], 10) : 0, a = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (o * Ey + s * Ny + a * Ty),
    rest: t.slice(n[0].length)
  };
}
function Vd(e) {
  return Ce(Re.anyDigitsSigned, e);
}
function Ee(e, t) {
  switch (e) {
    case 1:
      return Ce(Re.singleDigit, t);
    case 2:
      return Ce(Re.twoDigits, t);
    case 3:
      return Ce(Re.threeDigits, t);
    case 4:
      return Ce(Re.fourDigits, t);
    default:
      return Ce(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function Po(e, t) {
  switch (e) {
    case 1:
      return Ce(Re.singleDigitSigned, t);
    case 2:
      return Ce(Re.twoDigitsSigned, t);
    case 3:
      return Ce(Re.threeDigitsSigned, t);
    case 4:
      return Ce(Re.fourDigitsSigned, t);
    default:
      return Ce(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function bi(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0;
  }
}
function Yd(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let o;
  if (r <= 50)
    o = e || 100;
  else {
    const s = r + 50, a = Math.trunc(s / 100) * 100, i = e >= s % 100;
    o = e + a - (i ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function zd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class YC extends pe {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(t, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return Me(Ee(4, t), o);
      case "yo":
        return Me(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Me(Ee(n.length, t), o);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r) {
    const o = t.getFullYear();
    if (r.isTwoDigitYear) {
      const a = Yd(
        r.year,
        o
      );
      return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class zC extends pe {
  priority = 130;
  parse(t, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return Me(Ee(4, t), o);
      case "Yo":
        return Me(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Me(Ee(n.length, t), o);
    }
  }
  validate(t, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(t, n, r, o) {
    const s = vi(t, o);
    if (r.isTwoDigitYear) {
      const i = Yd(
        r.year,
        s
      );
      return t.setFullYear(
        i,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Et(t, o);
    }
    const a = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(a, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Et(t, o);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
class GC extends pe {
  priority = 130;
  parse(t, n) {
    return Po(n === "R" ? 4 : n.length, t);
  }
  set(t, n, r) {
    const o = ge(t, 0);
    return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), on(o);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
class KC extends pe {
  priority = 130;
  parse(t, n) {
    return Po(n === "u" ? 4 : n.length, t);
  }
  set(t, n, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class UC extends pe {
  priority = 120;
  parse(t, n, r) {
    switch (n) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return Ee(n.length, t);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class qC extends pe {
  priority = 120;
  parse(t, n, r) {
    switch (n) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return Ee(n.length, t);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 4;
  }
  set(t, n, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class XC extends pe {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(t, n, r) {
    const o = (s) => s - 1;
    switch (n) {
      // 1, 2, ..., 12
      case "M":
        return Me(
          Ce(Re.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return Me(Ee(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return Me(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class QC extends pe {
  priority = 110;
  parse(t, n, r) {
    const o = (s) => s - 1;
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return Me(
          Ce(Re.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return Me(Ee(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return Me(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function ZC(e, t, n) {
  const r = ue(e, n?.in), o = es(r, n) - t;
  return r.setDate(r.getDate() - o * 7), ue(r, n?.in);
}
class JC extends pe {
  priority = 100;
  parse(t, n, r) {
    switch (n) {
      case "w":
        return Ce(Re.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, r, o) {
    return Et(ZC(t, r, o), o);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
function e0(e, t, n) {
  const r = ue(e, n?.in), o = Jo(r, n) - t;
  return r.setDate(r.getDate() - o * 7), r;
}
class t0 extends pe {
  priority = 100;
  parse(t, n, r) {
    switch (n) {
      case "I":
        return Ce(Re.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 53;
  }
  set(t, n, r) {
    return on(e0(t, r));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
const n0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], r0 = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class o0 extends pe {
  priority = 90;
  subPriority = 1;
  parse(t, n, r) {
    switch (n) {
      case "d":
        return Ce(Re.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear(), o = zd(r), s = t.getMonth();
    return o ? n >= 1 && n <= r0[s] : n >= 1 && n <= n0[s];
  }
  set(t, n, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class s0 extends pe {
  priority = 90;
  subpriority = 1;
  parse(t, n, r) {
    switch (n) {
      case "D":
      case "DD":
        return Ce(Re.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    const r = t.getFullYear();
    return zd(r) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(t, n, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function xi(e, t, n) {
  const r = bn(), o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = ue(e, n?.in), a = s.getDay(), c = (t % 7 + 7) % 7, d = 7 - o, m = t < 0 || t > 6 ? t - (a + d) % 7 : (c + d) % 7 - (a + d) % 7;
  return kr(s, m, n);
}
class a0 extends pe {
  priority = 90;
  parse(t, n, r) {
    switch (n) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, o) {
    return t = xi(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class i0 extends pe {
  priority = 90;
  parse(t, n, r, o) {
    const s = (a) => {
      const i = Math.floor((a - 1) / 7) * 7;
      return (a + o.weekStartsOn + 6) % 7 + i;
    };
    switch (n) {
      // 3
      case "e":
      case "ee":
        return Me(Ee(n.length, t), s);
      // 3rd
      case "eo":
        return Me(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, o) {
    return t = xi(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
}
class c0 extends pe {
  priority = 90;
  parse(t, n, r, o) {
    const s = (a) => {
      const i = Math.floor((a - 1) / 7) * 7;
      return (a + o.weekStartsOn + 6) % 7 + i;
    };
    switch (n) {
      // 3
      case "c":
      case "cc":
        return Me(Ee(n.length, t), s);
      // 3rd
      case "co":
        return Me(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 6;
  }
  set(t, n, r, o) {
    return t = xi(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
}
function l0(e, t, n) {
  const r = ue(e, n?.in), o = OC(r, n), s = t - o;
  return kr(r, s, n);
}
class u0 extends pe {
  priority = 90;
  parse(t, n, r) {
    const o = (s) => s === 0 ? 7 : s;
    switch (n) {
      // 2
      case "i":
      case "ii":
        return Ee(n.length, t);
      // 2nd
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      // Tue
      case "iii":
        return Me(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // T
      case "iiiii":
        return Me(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return Me(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      default:
        return Me(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 7;
  }
  set(t, n, r) {
    return t = l0(t, r), t.setHours(0, 0, 0, 0), t;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
}
class d0 extends pe {
  priority = 80;
  parse(t, n, r) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(bi(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class f0 extends pe {
  priority = 80;
  parse(t, n, r) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(bi(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class m0 extends pe {
  priority = 80;
  parse(t, n, r) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, n, r) {
    return t.setHours(bi(r), 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class p0 extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "h":
        return Ce(Re.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 12;
  }
  set(t, n, r) {
    const o = t.getHours() >= 12;
    return o && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !o && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
class h0 extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "H":
        return Ce(Re.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 23;
  }
  set(t, n, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
class g0 extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "K":
        return Ce(Re.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
class v0 extends pe {
  priority = 70;
  parse(t, n, r) {
    switch (n) {
      case "k":
        return Ce(Re.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 1 && n <= 24;
  }
  set(t, n, r) {
    const o = r <= 24 ? r % 24 : r;
    return t.setHours(o, 0, 0, 0), t;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
class b0 extends pe {
  priority = 60;
  parse(t, n, r) {
    switch (n) {
      case "m":
        return Ce(Re.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, r) {
    return t.setMinutes(r, 0, 0), t;
  }
  incompatibleTokens = ["t", "T"];
}
class x0 extends pe {
  priority = 50;
  parse(t, n, r) {
    switch (n) {
      case "s":
        return Ce(Re.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return Ee(n.length, t);
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 59;
  }
  set(t, n, r) {
    return t.setSeconds(r, 0), t;
  }
  incompatibleTokens = ["t", "T"];
}
class w0 extends pe {
  priority = 30;
  parse(t, n) {
    const r = (o) => Math.trunc(o * Math.pow(10, -n.length + 3));
    return Me(Ee(n.length, t), r);
  }
  set(t, n, r) {
    return t.setMilliseconds(r), t;
  }
  incompatibleTokens = ["t", "T"];
}
class y0 extends pe {
  priority = 10;
  parse(t, n) {
    switch (n) {
      case "X":
        return ct(
          it.basicOptionalMinutes,
          t
        );
      case "XX":
        return ct(it.basic, t);
      case "XXXX":
        return ct(
          it.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return ct(
          it.extendedOptionalSeconds,
          t
        );
      default:
        return ct(it.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : ge(
      t,
      t.getTime() - Mo(t) - r
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class C0 extends pe {
  priority = 10;
  parse(t, n) {
    switch (n) {
      case "x":
        return ct(
          it.basicOptionalMinutes,
          t
        );
      case "xx":
        return ct(it.basic, t);
      case "xxxx":
        return ct(
          it.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return ct(
          it.extendedOptionalSeconds,
          t
        );
      default:
        return ct(it.extended, t);
    }
  }
  set(t, n, r) {
    return n.timestampIsSet ? t : ge(
      t,
      t.getTime() - Mo(t) - r
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class S0 extends pe {
  priority = 40;
  parse(t) {
    return Vd(t);
  }
  set(t, n, r) {
    return [ge(t, r * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class N0 extends pe {
  priority = 20;
  parse(t) {
    return Vd(t);
  }
  set(t, n, r) {
    return [ge(t, r), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const E0 = {
  G: new VC(),
  y: new YC(),
  Y: new zC(),
  R: new GC(),
  u: new KC(),
  Q: new UC(),
  q: new qC(),
  M: new XC(),
  L: new QC(),
  w: new JC(),
  I: new t0(),
  d: new o0(),
  D: new s0(),
  E: new a0(),
  e: new i0(),
  c: new c0(),
  i: new u0(),
  a: new d0(),
  b: new f0(),
  B: new m0(),
  h: new p0(),
  H: new h0(),
  K: new g0(),
  k: new v0(),
  m: new b0(),
  s: new x0(),
  S: new w0(),
  X: new y0(),
  x: new C0(),
  t: new S0(),
  T: new N0()
}, T0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, R0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, M0 = /^'([^]*?)'?$/, P0 = /''/g, k0 = /\S/, D0 = /[a-zA-Z]/;
function Gd(e, t, n, r) {
  const o = () => ge(n, NaN), s = _C(), a = s.locale ?? en, i = s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, c = s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0;
  if (!t)
    return e ? o() : ue(n, r?.in);
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: c,
    locale: a
  }, m = [new HC(r?.in, n)], f = t.match(R0).map((v) => {
    const x = v[0];
    if (x in Ca) {
      const w = Ca[x];
      return w(v, a.formatLong);
    }
    return v;
  }).join("").match(T0), p = [];
  for (let v of f) {
    Bd(v) && Sa(v, t, e), Wd(v) && Sa(v, t, e);
    const x = v[0], w = E0[x];
    if (w) {
      const { incompatibleTokens: y } = w;
      if (Array.isArray(y)) {
        const N = p.find(
          (C) => y.includes(C.token) || C.token === x
        );
        if (N)
          throw new RangeError(
            `The format string mustn't contain \`${N.fullToken}\` and \`${v}\` at the same time`
          );
      } else if (w.incompatibleTokens === "*" && p.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${v}\` and any other token at the same time`
        );
      p.push({ token: x, fullToken: v });
      const S = w.run(
        e,
        v,
        a.match,
        d
      );
      if (!S)
        return o();
      m.push(S.setter), e = S.rest;
    } else {
      if (x.match(D0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + x + "`"
        );
      if (v === "''" ? v = "'" : x === "'" && (v = _0(v)), e.indexOf(v) === 0)
        e = e.slice(v.length);
      else
        return o();
    }
  }
  if (e.length > 0 && k0.test(e))
    return o();
  const b = m.map((v) => v.priority).sort((v, x) => x - v).filter((v, x, w) => w.indexOf(v) === x).map(
    (v) => m.filter((x) => x.priority === v).sort((x, w) => w.subPriority - x.subPriority)
  ).map((v) => v[0]);
  let g = ue(n, r?.in);
  if (isNaN(+g)) return o();
  const h = {};
  for (const v of b) {
    if (!v.validate(g, d))
      return o();
    const x = v.set(g, h, d);
    Array.isArray(x) ? (g = x[0], Object.assign(h, x[1])) : g = x;
  }
  return g;
}
function _0(e) {
  return e.match(M0)[1].replace(P0, "'");
}
function O0(e, t, n) {
  const [r, o] = Kn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function A0(e, t, n) {
  const [r, o] = Kn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function I0(e, t, n) {
  const r = ue(e, n?.in), o = r.getFullYear(), s = r.getDate(), a = ge(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = DC(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function j0(e, t, n) {
  const r = ue(e, n?.in);
  return isNaN(+r) ? ge(e, NaN) : (r.setFullYear(t), r);
}
const wl = 5, F0 = 4;
function L0(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, wl * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? wl : F0;
}
function Kd(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function $0(e, t) {
  const n = Kd(e, t), r = L0(e, t);
  return t.addDays(n, r * 7 - 1);
}
const W0 = {
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
}, B0 = (e, t, n) => {
  let r;
  const o = W0[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r;
}, H0 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, V0 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Y0 = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, z0 = {
  date: In({
    formats: H0,
    defaultWidth: "full"
  }),
  time: In({
    formats: V0,
    defaultWidth: "full"
  }),
  dateTime: In({
    formats: Y0,
    defaultWidth: "full"
  })
}, G0 = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, K0 = (e, t, n, r) => {
  const o = G0[e];
  return typeof o == "function" ? o(t) : o;
}, U0 = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, q0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, X0 = {
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
}, Q0 = {
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
}, Z0 = {
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
}, J0 = {
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
}, eS = (e, t) => {
  const n = Number(e);
  return t?.unit === "week" ? n + "ª" : n + "º";
}, tS = {
  ordinalNumber: eS,
  era: st({
    values: U0,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: q0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: st({
    values: X0,
    defaultWidth: "wide"
  }),
  day: st({
    values: Q0,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: Z0,
    defaultWidth: "wide",
    formattingValues: J0,
    defaultFormattingWidth: "wide"
  })
}, nS = /^(\d+)[ºªo]?/i, rS = /\d+/i, oS = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, sS = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, aS = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, iS = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, cS = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, lS = {
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
}, uS = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, dS = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, fS = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, mS = {
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
}, pS = {
  ordinalNumber: Ld({
    matchPattern: nS,
    parsePattern: rS,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: at({
    matchPatterns: oS,
    defaultMatchWidth: "wide",
    parsePatterns: sS,
    defaultParseWidth: "any"
  }),
  quarter: at({
    matchPatterns: aS,
    defaultMatchWidth: "wide",
    parsePatterns: iS,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: at({
    matchPatterns: cS,
    defaultMatchWidth: "wide",
    parsePatterns: lS,
    defaultParseWidth: "any"
  }),
  day: at({
    matchPatterns: uS,
    defaultMatchWidth: "wide",
    parsePatterns: dS,
    defaultParseWidth: "any"
  }),
  dayPeriod: at({
    matchPatterns: fS,
    defaultMatchWidth: "any",
    parsePatterns: mS,
    defaultParseWidth: "any"
  })
}, Ud = {
  code: "pt-BR",
  formatDistance: B0,
  formatLong: z0,
  formatRelative: K0,
  localize: tS,
  match: pS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, qd = {
  ...en,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => tn(a, i, { locale: en, ...n });
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
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => tn(o, s, { locale: en, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => tn(a, i, { locale: en, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => tn(o, s, { locale: en, ...t }), r(e, "cccc");
    }
  }
};
class Be {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Oe.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new Oe(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : kr(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : pi(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : ky(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : Dy(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : hi(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Ad(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : jy(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : $y(r), s = new Set(o.map((i) => this.getYear(i)));
      if (s.size === o.length)
        return o;
      const a = [];
      return s.forEach((i) => {
        a.push(new Date(i, 0, 1));
      }), a;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : $0(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Wy(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Iy(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : Fd(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Ly(r), this.format = (r, o, s) => {
      const a = this.overrides?.format ? this.overrides.format(r, o, this.options) : tn(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Jo(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : AC(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : IC(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : es(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : jC(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : FC(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : Od(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : Ay(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : O0(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : A0(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : _y(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Oy(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : I0(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : j0(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Kd(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : vr(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : on(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Fy(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Et(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : jd(r), this.options = { locale: qd, ...t }, this.overrides = n;
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
    return t && Be.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && Be.yearFirstLocales.has(s))
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
Be.yearFirstLocales = /* @__PURE__ */ new Set([
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
const pt = new Be();
class Xd {
  constructor(t, n, r = pt) {
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
class hS {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class gS {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function vS(e) {
  return U.createElement("button", { ...e });
}
function bS(e) {
  return U.createElement("span", { ...e });
}
function xS(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    U.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && U.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && U.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && U.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && U.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function wS(e) {
  const { day: t, modifiers: n, ...r } = e;
  return U.createElement("td", { ...r });
}
function yS(e) {
  const { day: t, modifiers: n, ...r } = e, o = U.useRef(null);
  return U.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), U.createElement("button", { ref: o, ...r });
}
var ne;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(ne || (ne = {}));
var ye;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ye || (ye = {}));
var qe;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(qe || (qe = {}));
var Le;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Le || (Le = {}));
function CS(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, a = [o[ne.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === s.value);
  return U.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[ne.DropdownRoot] },
    U.createElement(r.Select, { className: a, ...s }, t?.map(({ value: c, label: d, disabled: m }) => U.createElement(r.Option, { key: c, value: c, disabled: m }, d))),
    U.createElement(
      "span",
      { className: o[ne.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      U.createElement(r.Chevron, { orientation: "down", size: 18, className: o[ne.Chevron] })
    )
  );
}
function SS(e) {
  return U.createElement("div", { ...e });
}
function NS(e) {
  return U.createElement("div", { ...e });
}
function ES(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return U.createElement("div", { ...r }, e.children);
}
function TS(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return U.createElement("div", { ...r });
}
function RS(e) {
  return U.createElement("table", { ...e });
}
function MS(e) {
  return U.createElement("div", { ...e });
}
const Qd = bv(void 0);
function Dr() {
  const e = xv(Qd);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function PS(e) {
  const { components: t } = Dr();
  return U.createElement(t.Dropdown, { ...e });
}
function kS(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: d } } = Dr(), m = je((p) => {
    o && n?.(p);
  }, [o, n]), f = je((p) => {
    r && t?.(p);
  }, [r, t]);
  return U.createElement(
    "nav",
    { ...s },
    U.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[ne.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: f },
      U.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[ne.Chevron], orientation: "left" })
    ),
    U.createElement(
      a.NextMonthButton,
      { type: "button", className: i[ne.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: m },
      U.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[ne.Chevron] })
    )
  );
}
function DS(e) {
  const { components: t } = Dr();
  return U.createElement(t.Button, { ...e });
}
function _S(e) {
  return U.createElement("option", { ...e });
}
function OS(e) {
  const { components: t } = Dr();
  return U.createElement(t.Button, { ...e });
}
function AS(e) {
  const { rootRef: t, ...n } = e;
  return U.createElement("div", { ...n, ref: t });
}
function IS(e) {
  return U.createElement("select", { ...e });
}
function jS(e) {
  const { week: t, ...n } = e;
  return U.createElement("tr", { ...n });
}
function FS(e) {
  return U.createElement("th", { ...e });
}
function LS(e) {
  return U.createElement(
    "thead",
    { "aria-hidden": !0 },
    U.createElement("tr", { ...e })
  );
}
function $S(e) {
  const { week: t, ...n } = e;
  return U.createElement("th", { ...n });
}
function WS(e) {
  return U.createElement("th", { ...e });
}
function BS(e) {
  return U.createElement("tbody", { ...e });
}
function HS(e) {
  const { components: t } = Dr();
  return U.createElement(t.Dropdown, { ...e });
}
const VS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: vS,
  CaptionLabel: bS,
  Chevron: xS,
  Day: wS,
  DayButton: yS,
  Dropdown: CS,
  DropdownNav: SS,
  Footer: NS,
  Month: ES,
  MonthCaption: TS,
  MonthGrid: RS,
  Months: MS,
  MonthsDropdown: PS,
  Nav: kS,
  NextMonthButton: DS,
  Option: _S,
  PreviousMonthButton: OS,
  Root: AS,
  Select: IS,
  Week: jS,
  WeekNumber: $S,
  WeekNumberHeader: WS,
  Weekday: FS,
  Weekdays: LS,
  Weeks: BS,
  YearsDropdown: HS
}, Symbol.toStringTag, { value: "Module" }));
function yt(e, t, n = !1, r = pt) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function wi(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ts(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function yi(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ci(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Zd(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Jd(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Ct(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Jd(i, n))
      return i.some((c) => o(e, c));
    if (ts(i))
      return yt(i, e, !1, n);
    if (Zd(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (wi(i)) {
      const c = s(i.before, e), d = s(i.after, e), m = c > 0, f = d < 0;
      return a(i.before, i.after) ? f && m : m || f;
    }
    return yi(i) ? s(e, i.after) > 0 : Ci(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function YS(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: d, today: m = o.today() } = t, { isSameDay: f, isSameMonth: p, startOfMonth: b, isBefore: g, endOfMonth: h, isAfter: v } = o, x = n && b(n), w = r && h(r), y = {
    [ye.focused]: [],
    [ye.outside]: [],
    [ye.disabled]: [],
    [ye.hidden]: [],
    [ye.today]: []
  }, S = {};
  for (const N of e) {
    const { date: C, displayMonth: T } = N, E = !!(T && !p(C, T)), R = !!(x && g(C, x)), _ = !!(w && v(C, w)), O = !!(s && Ct(C, s, o)), W = !!(a && Ct(C, a, o)) || R || _ || // Broadcast calendar will show outside days as default
    !d && !c && E || d && c === !1 && E, X = f(C, m);
    E && y.outside.push(N), O && y.disabled.push(N), W && y.hidden.push(N), X && y.today.push(N), i && Object.keys(i).forEach((k) => {
      const F = i?.[k];
      F && Ct(C, F, o) && (S[k] ? S[k].push(N) : S[k] = [N]);
    });
  }
  return (N) => {
    const C = {
      [ye.focused]: !1,
      [ye.disabled]: !1,
      [ye.hidden]: !1,
      [ye.outside]: !1,
      [ye.today]: !1
    }, T = {};
    for (const E in y) {
      const R = y[E];
      C[E] = R.some((_) => _ === N);
    }
    for (const E in S)
      T[E] = S[E].some((R) => R === N);
    return {
      ...C,
      // custom modifiers should override all the previous ones
      ...T
    };
  };
}
function zS(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[ye[s]] ? o.push(t[ye[s]]) : t[qe[s]] && o.push(t[qe[s]]), o), [t[ne.Day]]);
}
function GS(e) {
  return {
    ...VS,
    ...e
  };
}
function KS(e) {
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
function Si() {
  const e = {};
  for (const t in ne)
    e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in ye)
    e[ye[t]] = `rdp-${ye[t]}`;
  for (const t in qe)
    e[qe[t]] = `rdp-${qe[t]}`;
  for (const t in Le)
    e[Le[t]] = `rdp-${Le[t]}`;
  return e;
}
function ef(e, t, n) {
  return (n ?? new Be(t)).formatMonthYear(e);
}
const US = ef;
function qS(e, t, n) {
  return (n ?? new Be(t)).format(e, "d");
}
function XS(e, t = pt) {
  return t.format(e, "LLLL");
}
function QS(e, t, n) {
  return (n ?? new Be(t)).format(e, "cccccc");
}
function ZS(e, t = pt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function JS() {
  return "";
}
function tf(e, t = pt) {
  return t.format(e, "yyyy");
}
const eN = tf, tN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: ef,
  formatDay: qS,
  formatMonthCaption: US,
  formatMonthDropdown: XS,
  formatWeekNumber: ZS,
  formatWeekNumberHeader: JS,
  formatWeekdayName: QS,
  formatYearCaption: eN,
  formatYearDropdown: tf
}, Symbol.toStringTag, { value: "Module" }));
function nN(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...tN,
    ...e
  };
}
function Ni(e, t, n, r) {
  let o = (r ?? new Be(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const rN = Ni;
function Ei(e, t, n) {
  return (n ?? new Be(t)).formatMonthYear(e);
}
const oN = Ei;
function nf(e, t, n, r) {
  let o = (r ?? new Be(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function rf(e) {
  return "Choose the Month";
}
function of() {
  return "";
}
const sN = "Go to the Next Month";
function sf(e, t) {
  return sN;
}
function af(e) {
  return "Go to the Previous Month";
}
function cf(e, t, n) {
  return (n ?? new Be(t)).format(e, "cccc");
}
function lf(e, t) {
  return `Week ${e}`;
}
function uf(e) {
  return "Week Number";
}
function df(e) {
  return "Choose the Year";
}
const aN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: oN,
  labelDay: rN,
  labelDayButton: Ni,
  labelGrid: Ei,
  labelGridcell: nf,
  labelMonthDropdown: rf,
  labelNav: of,
  labelNext: sf,
  labelPrevious: af,
  labelWeekNumber: lf,
  labelWeekNumberHeader: uf,
  labelWeekday: cf,
  labelYearDropdown: df
}, Symbol.toStringTag, { value: "Module" })), Ke = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function iN(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...aN,
    ...e ?? {},
    labelDayButton: Ke(Ni, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Ke(rf, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Ke(sf, e?.labelNext, n.labelNext),
    labelPrevious: Ke(af, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: Ke(lf, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Ke(df, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Ke(Ei, e?.labelGrid, n.labelGrid),
    labelGridcell: Ke(nf, e?.labelGridcell, n.labelGridcell),
    labelNav: Ke(of, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: Ke(uf, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Ke(cf, e?.labelWeekday, n.labelWeekday)
  };
}
function cN(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: d } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((p) => {
    const b = r.formatMonthDropdown(p, o), g = d(p), h = t && p < s(t) || n && p > s(n) || !1;
    return { value: g, label: b, disabled: h };
  });
}
function lN(e, t = {}, n = {}) {
  let r = { ...t?.[ne.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function uN(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), a = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(s, i);
    a.push(c);
  }
  return a;
}
function dN(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: a, eachYearOfInterval: i, getYear: c } = r, d = s(e), m = a(t), f = i({ start: d, end: m });
  return o && f.reverse(), f.map((p) => {
    const b = n.formatYearDropdown(p, r);
    return {
      value: c(p),
      label: b,
      disabled: !1
    };
  });
}
function fN(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, s = (i) => {
    const c = typeof i == "number" || typeof i == "string" ? new Date(i) : i;
    return new Oe(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, a = (i) => {
    const c = s(i);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(Oe.tz(e)),
    newDate: (i, c, d) => new Oe(i, c, d, 12, 0, 0, e),
    startOfDay: (i) => s(i),
    startOfWeek: (i, c) => {
      const d = s(i), m = c?.weekStartsOn ?? o, f = (d.getDay() - m + 7) % 7;
      return d.setDate(d.getDate() - f), d;
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
      const c = s(i.start), d = s(i.end), m = [], f = new Oe(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), p = d.getFullYear() * 12 + d.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= p; )
        m.push(new Oe(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return m;
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
      const c = s(i.start), d = s(i.end), m = [], f = new Oe(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= d.getFullYear(); )
        m.push(new Oe(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return m;
    },
    getWeek: (i, c) => {
      const d = a(i);
      return es(d, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (i) => {
      const c = a(i);
      return Jo(c);
    },
    differenceInCalendarDays: (i, c) => {
      const d = a(i), m = a(c);
      return hi(d, m);
    },
    differenceInCalendarMonths: (i, c) => {
      const d = a(i), m = a(c);
      return Ad(d, m);
    }
  };
}
const _r = (e) => e instanceof HTMLElement ? e : null, oa = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], mN = (e) => _r(e.querySelector("[data-animated-month]")), sa = (e) => _r(e.querySelector("[data-animated-caption]")), aa = (e) => _r(e.querySelector("[data-animated-weeks]")), pN = (e) => _r(e.querySelector("[data-animated-nav]")), hN = (e) => _r(e.querySelector("[data-animated-weekdays]"));
function gN(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = lt(null), i = lt(r), c = lt(!1);
  nu(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const m = s.isSameMonth(r[0].date, d[0].date), f = s.isAfter(r[0].date, d[0].date), p = f ? n[Le.caption_after_enter] : n[Le.caption_before_enter], b = f ? n[Le.weeks_after_enter] : n[Le.weeks_before_enter], g = a.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (oa(h).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const S = mN(y);
      S && y.contains(S) && y.removeChild(S);
      const N = sa(y);
      N && N.classList.remove(p);
      const C = aa(y);
      C && C.classList.remove(b);
    }), a.current = h) : a.current = null, c.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const v = g instanceof HTMLElement ? oa(g) : [], x = oa(e.current);
    if (x?.every((w) => w instanceof HTMLElement) && v && v.every((w) => w instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const w = pN(e.current);
      w && (w.style.zIndex = "1"), x.forEach((y, S) => {
        const N = v[S];
        if (!N)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const C = sa(y);
        C && C.classList.add(p);
        const T = aa(y);
        T && T.classList.add(b);
        const E = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), w && (w.style.zIndex = ""), C && C.classList.remove(p), T && T.classList.remove(b), y.style.position = "", y.style.overflow = "", y.contains(N) && y.removeChild(N);
        };
        N.style.pointerEvents = "none", N.style.position = "absolute", N.style.overflow = "hidden", N.setAttribute("aria-hidden", "true");
        const R = hN(N);
        R && (R.style.opacity = "0");
        const _ = sa(N);
        _ && (_.classList.add(f ? n[Le.caption_before_exit] : n[Le.caption_after_exit]), _.addEventListener("animationend", E));
        const O = aa(N);
        O && O.classList.add(f ? n[Le.weeks_before_exit] : n[Le.weeks_after_exit]), y.insertBefore(N, y.firstChild);
      });
    }
  });
}
function vN(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: d, differenceInCalendarDays: m, differenceInCalendarMonths: f, endOfBroadcastWeek: p, endOfISOWeek: b, endOfMonth: g, endOfWeek: h, isAfter: v, startOfBroadcastWeek: x, startOfISOWeek: w, startOfWeek: y } = r, S = c ? x(o, r) : a ? w(o) : y(o), N = c ? p(s) : a ? b(g(s)) : h(g(s)), C = t && (c ? p(t) : a ? b(t) : h(t)), T = C && v(N, C) ? C : N, E = m(T, S), R = f(s, o) + 1, _ = [];
  for (let X = 0; X <= E; X++) {
    const k = d(S, X);
    _.push(k);
  }
  const W = (c ? 35 : 42) * R;
  if (i && _.length < W) {
    const X = W - _.length;
    for (let k = 0; k < X; k++) {
      const F = d(_[_.length - 1], 1);
      _.push(F);
    }
  }
  return _;
}
function bN(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function xN(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function yl(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: d, addMonths: m, startOfMonth: f } = r;
  if (n && d(n, c) < i - 1) {
    const p = -1 * (i - 1);
    c = m(n, p);
  }
  return t && d(c, t) < 0 && (c = t), f(c);
}
function wN(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: d, getWeek: m, startOfBroadcastWeek: f, startOfISOWeek: p, startOfWeek: b } = r, g = e.reduce((h, v) => {
    const x = n.broadcastCalendar ? f(v, r) : n.ISOWeek ? p(v) : b(v), w = n.broadcastCalendar ? s(v) : n.ISOWeek ? a(i(v)) : c(i(v)), y = t.filter((T) => T >= x && T <= w), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < S) {
      const T = t.filter((E) => {
        const R = S - y.length;
        return E > w && E <= o(w, R);
      });
      y.push(...T);
    }
    const N = y.reduce((T, E) => {
      const R = n.ISOWeek ? d(E) : m(E), _ = T.find((W) => W.weekNumber === R), O = new Xd(E, v, r);
      return _ ? _.days.push(O) : T.push(new gS(R, [O])), T;
    }, []), C = new hS(v, N);
    return h.push(C), h;
  }, []);
  return n.reverseMonths ? g.reverse() : g;
}
function yN(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: d, newDate: m, today: f } = t, { fromYear: p, toYear: b, fromMonth: g, toMonth: h } = e;
  !n && g && (n = g), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && b && (r = m(b, 11, 31));
  const v = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : p ? n = m(p, 0, 1) : !n && v && (n = o(c(e.today ?? f(), -100))), r ? r = i(r) : b ? r = m(b, 11, 31) : !r && v && (r = d(e.today ?? f())), [
    n && s(n),
    r && s(r)
  ];
}
function CN(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, d = o ? s : 1, m = a(e);
  if (!t)
    return i(m, d);
  if (!(c(t, e) < s))
    return i(m, d);
}
function SN(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, d = o ? s ?? 1 : 1, m = a(e);
  if (!t)
    return i(m, -d);
  if (!(c(m, t) <= 0))
    return i(m, -d);
}
function NN(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function ns(e, t) {
  const [n, r] = Ve(e);
  return [t === void 0 ? n : t, r];
}
function EN(e, t) {
  const [n, r] = yN(e, t), { startOfMonth: o, endOfMonth: s } = t, a = yl(e, n, r, t), [i, c] = ns(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  St(() => {
    const S = yl(e, n, r, t);
    c(S);
  }, [e.timeZone]);
  const { months: d, weeks: m, days: f, previousMonth: p, nextMonth: b } = go(() => {
    const S = xN(i, r, { numberOfMonths: e.numberOfMonths }, t), N = vN(S, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), C = wN(S, N, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), T = NN(C), E = bN(C), R = SN(i, n, e, t), _ = CN(i, r, e, t);
    return {
      months: C,
      weeks: T,
      days: E,
      previousMonth: R,
      nextMonth: _
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
  ]), { disableNavigation: g, onMonthChange: h } = e, v = (S) => m.some((N) => N.days.some((C) => C.isEqualTo(S))), x = (S) => {
    if (g)
      return;
    let N = o(S);
    n && N < o(n) && (N = o(n)), r && N > o(r) && (N = o(r)), c(N), h?.(N);
  };
  return {
    months: d,
    weeks: m,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: p,
    nextMonth: b,
    goToMonth: x,
    goToDay: (S) => {
      v(S) || x(S.date);
    }
  };
}
var rt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(rt || (rt = {}));
function Cl(e) {
  return !e[ye.disabled] && !e[ye.hidden] && !e[ye.outside];
}
function TN(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    Cl(i) && (i[ye.focused] && s < rt.FocusedModifier ? (o = a, s = rt.FocusedModifier) : r?.isEqualTo(a) && s < rt.LastFocused ? (o = a, s = rt.LastFocused) : n(a.date) && s < rt.Selected ? (o = a, s = rt.Selected) : i[ye.today] && s < rt.Today && (o = a, s = rt.Today));
  }
  return o || (o = e.find((a) => Cl(t(a)))), o;
}
function RN(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: d, addMonths: m, addWeeks: f, addYears: p, endOfBroadcastWeek: b, endOfISOWeek: g, endOfWeek: h, max: v, min: x, startOfBroadcastWeek: w, startOfISOWeek: y, startOfWeek: S } = a;
  let C = {
    day: d,
    week: f,
    month: m,
    year: p,
    startOfWeek: (T) => c ? w(T, a) : i ? y(T) : S(T),
    endOfWeek: (T) => c ? b(T) : i ? g(T) : h(T)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? C = v([r, C]) : t === "after" && o && (C = x([o, C])), C;
}
function ff(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = RN(e, t, n.date, r, o, s, a), d = !!(s.disabled && Ct(c, s.disabled, a)), m = !!(s.hidden && Ct(c, s.hidden, a)), f = c, p = new Xd(c, f, a);
  return !d && !m ? p : ff(e, t, p, r, o, s, a, i + 1);
}
function MN(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = Ve(), c = TN(t.days, n, r || (() => !1), a), [d, m] = Ve(s ? c : void 0);
  return {
    isFocusTarget: (h) => !!c?.isEqualTo(h),
    setFocused: m,
    focused: d,
    blur: () => {
      i(d), m(void 0);
    },
    moveFocus: (h, v) => {
      if (!d)
        return;
      const x = ff(h, v, d, t.navStart, t.navEnd, e, o);
      x && (e.disableNavigation && !t.days.some((y) => y.isEqualTo(x)) || (t.goToDay(x), m(x)));
    }
  };
}
function PN(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = ns(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, d = (b) => i?.some((g) => c(g, b)) ?? !1, { min: m, max: f } = e;
  return {
    selected: i,
    select: (b, g, h) => {
      let v = [...i ?? []];
      if (d(b)) {
        if (i?.length === m || r && i?.length === 1)
          return;
        v = i?.filter((x) => !c(x, b));
      } else
        i?.length === f ? v = [b] : v = [...v, b];
      return o || a(v), o?.(v, b, g, h), v;
    },
    isSelected: d
  };
}
function kN(e, t, n = 0, r = 0, o = !1, s = pt) {
  const { from: a, to: i } = t || {}, { isSameDay: c, isAfter: d, isBefore: m } = s;
  let f;
  if (!a && !i)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (a && !i)
    c(a, e) ? n === 0 ? f = { from: a, to: e } : o ? f = { from: a, to: void 0 } : f = void 0 : m(e, a) ? f = { from: e, to: a } : f = { from: a, to: e };
  else if (a && i)
    if (c(a, e) && c(i, e))
      o ? f = { from: a, to: i } : f = void 0;
    else if (c(a, e))
      f = { from: a, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (m(e, a))
      f = { from: e, to: i };
    else if (d(e, a))
      f = { from: a, to: e };
    else if (d(e, i))
      f = { from: a, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const p = s.differenceInCalendarDays(f.to, f.from);
    r > 0 && p > r ? f = { from: e, to: void 0 } : n > 1 && p < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function DN(e, t, n = pt) {
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
function Sl(e, t, n = pt) {
  return yt(e, t.from, !1, n) || yt(e, t.to, !1, n) || yt(t, e.from, !1, n) || yt(t, e.to, !1, n);
}
function _N(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? yt(e, i, !1, n) : Jd(i, n) ? i.some((c) => yt(e, c, !1, n)) : ts(i) ? i.from && i.to ? Sl(e, { from: i.from, to: i.to }, n) : !1 : Zd(i) ? DN(e, i.dayOfWeek, n) : wi(i) ? n.isAfter(i.before, i.after) ? Sl(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Ct(e.from, i, n) || Ct(e.to, i, n) : yi(i) || Ci(i) ? Ct(e.from, i, n) || Ct(e.to, i, n) : !1))
    return !0;
  const a = r.filter((i) => typeof i == "function");
  if (a.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let d = 0; d <= c; d++) {
      if (a.some((m) => m(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function ON(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = ns(o, a ? o : void 0), d = a ? o : i;
  return {
    selected: d,
    select: (p, b, g) => {
      const { min: h, max: v } = e, x = p ? kN(p, d, h, v, s, t) : void 0;
      return r && n && x?.from && x.to && _N({ from: x.from, to: x.to }, n, t) && (x.from = p, x.to = void 0), a || c(x), a?.(x, p, b, g), x;
    },
    isSelected: (p) => d && yt(d, p, !1, t)
  };
}
function AN(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = ns(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (f, p, b) => {
      let g = f;
      return !r && i && i && c(f, i) && (g = void 0), o || a(g), o?.(g, f, p, b), g;
    },
    isSelected: (f) => i ? c(i, f) : !1
  };
}
function IN(e, t) {
  const n = AN(e, t), r = PN(e, t), o = ON(e, t);
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
function He(e, t) {
  return e instanceof Oe && e.timeZone === t ? e : new Oe(e, t);
}
function Dn(e, t, n) {
  return He(e, t);
}
function Nl(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Dn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Dn(r, t) : r) : ts(e) ? {
    ...e,
    from: e.from ? He(e.from, t) : e.from,
    to: e.to ? He(e.to, t) : e.to
  } : wi(e) ? {
    before: Dn(e.before, t),
    after: Dn(e.after, t)
  } : yi(e) ? {
    after: Dn(e.after, t)
  } : Ci(e) ? {
    before: Dn(e.before, t)
  } : e;
}
function ia(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Nl(r, t)) : Nl(e, t));
}
function jN(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = He(t.today, n)), t.month && (t.month = He(t.month, n)), t.defaultMonth && (t.defaultMonth = He(t.defaultMonth, n)), t.startMonth && (t.startMonth = He(t.startMonth, n)), t.endMonth && (t.endMonth = He(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = He(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((ae) => He(ae, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? He(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? He(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = ia(t.disabled, n)), t.hidden !== void 0 && (t.hidden = ia(t.hidden, n)), t.modifiers)) {
    const ae = {};
    Object.keys(t.modifiers).forEach((me) => {
      ae[me] = ia(t.modifiers?.[me], n);
    }), t.modifiers = ae;
  }
  const { components: r, formatters: o, labels: s, dateLib: a, locale: i, classNames: c } = go(() => {
    const ae = { ...qd, ...t.locale }, me = t.broadcastCalendar ? 1 : t.weekStartsOn, se = t.noonSafe && t.timeZone ? fN(t.timeZone, {
      weekStartsOn: me,
      locale: ae
    }) : void 0, fe = t.dateLib && se ? { ...se, ...t.dateLib } : t.dateLib ?? se, _e = new Be({
      locale: ae,
      weekStartsOn: me,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, fe);
    return {
      dateLib: _e,
      components: GS(t.components),
      formatters: nN(t.formatters),
      labels: iN(t.labels, _e.options),
      locale: ae,
      classNames: { ...Si(), ...t.classNames }
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
  const { captionLayout: d, mode: m, navLayout: f, numberOfMonths: p = 1, onDayBlur: b, onDayClick: g, onDayFocus: h, onDayKeyDown: v, onDayMouseEnter: x, onDayMouseLeave: w, onNextClick: y, onPrevClick: S, showWeekNumber: N, styles: C } = t, { formatCaption: T, formatDay: E, formatMonthDropdown: R, formatWeekNumber: _, formatWeekNumberHeader: O, formatWeekdayName: W, formatYearDropdown: X } = o, k = EN(t, a), { days: F, months: H, navStart: q, navEnd: Y, previousMonth: I, nextMonth: M, goToMonth: B } = k, D = YS(F, t, q, Y, a), { isSelected: V, select: K, selected: L } = IN(t, a) ?? {}, { blur: Z, focused: j, isFocusTarget: G, moveFocus: Q, setFocused: re } = MN(t, k, D, V ?? (() => !1), a), { labelDayButton: te, labelGridcell: z, labelGrid: ie, labelMonthDropdown: ce, labelNav: Ne, labelPrevious: De, labelNext: Ie, labelWeekday: vt, labelWeekNumber: tt, labelWeekNumberHeader: bt, labelYearDropdown: Xt } = s, er = go(() => uN(a, t.ISOWeek, t.broadcastCalendar, t.today), [a, t.ISOWeek, t.broadcastCalendar, t.today]), Cn = m !== void 0 || g !== void 0, Sn = je(() => {
    I && (B(I), S?.(I));
  }, [I, B, S]), Nn = je(() => {
    M && (B(M), y?.(M));
  }, [B, M, y]), Hs = je((ae, me) => (se) => {
    se.preventDefault(), se.stopPropagation(), re(ae), !me.disabled && (K?.(ae.date, me, se), g?.(ae.date, me, se));
  }, [K, g, re]), Qr = je((ae, me) => (se) => {
    re(ae), h?.(ae.date, me, se);
  }, [h, re]), Vs = je((ae, me) => (se) => {
    Z(), b?.(ae.date, me, se);
  }, [Z, b]), tr = je((ae, me) => (se) => {
    const fe = {
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
    if (fe[se.key]) {
      se.preventDefault(), se.stopPropagation();
      const [_e, de] = fe[se.key];
      Q(_e, de);
    }
    v?.(ae.date, me, se);
  }, [Q, v, t.dir]), Dt = je((ae, me) => (se) => {
    x?.(ae.date, me, se);
  }, [x]), nr = je((ae, me) => (se) => {
    w?.(ae.date, me, se);
  }, [w]), rr = je((ae) => (me) => {
    const se = Number(me.target.value), fe = a.setMonth(a.startOfMonth(ae), se);
    B(fe);
  }, [a, B]), En = je((ae) => (me) => {
    const se = Number(me.target.value), fe = a.setYear(a.startOfMonth(ae), se);
    B(fe);
  }, [a, B]), { className: Ys, style: zs } = go(() => ({
    className: [c[ne.Root], t.className].filter(Boolean).join(" "),
    style: { ...C?.[ne.Root], ...t.style }
  }), [c, t.className, t.style, C]), Gs = KS(t), Zr = lt(null);
  gN(Zr, !!t.animate, {
    classNames: c,
    months: H,
    focused: j,
    dateLib: a
  });
  const Ks = {
    dayPickerProps: t,
    selected: L,
    select: K,
    isSelected: V,
    months: H,
    nextMonth: M,
    previousMonth: I,
    goToMonth: B,
    getModifiers: D,
    components: r,
    classNames: c,
    styles: C,
    labels: s,
    formatters: o
  };
  return U.createElement(
    Qd.Provider,
    { value: Ks },
    U.createElement(
      r.Root,
      { rootRef: t.animate ? Zr : void 0, className: Ys, style: zs, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Gs },
      U.createElement(
        r.Months,
        { className: c[ne.Months], style: C?.[ne.Months] },
        !t.hideNavigation && !f && U.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[ne.Nav], style: C?.[ne.Nav], "aria-label": Ne(), onPreviousClick: Sn, onNextClick: Nn, previousMonth: I, nextMonth: M }),
        H.map((ae, me) => U.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[ne.Month],
            style: C?.[ne.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: me,
            displayIndex: me,
            calendarMonth: ae
          },
          f === "around" && !t.hideNavigation && me === 0 && U.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[ne.PreviousMonthButton], tabIndex: I ? void 0 : -1, "aria-disabled": I ? void 0 : !0, "aria-label": De(I), onClick: Sn, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(r.Chevron, { disabled: I ? void 0 : !0, className: c[ne.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          U.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[ne.MonthCaption], style: C?.[ne.MonthCaption], calendarMonth: ae, displayIndex: me }, d?.startsWith("dropdown") ? U.createElement(
            r.DropdownNav,
            { className: c[ne.Dropdowns], style: C?.[ne.Dropdowns] },
            (() => {
              const se = d === "dropdown" || d === "dropdown-months" ? U.createElement(r.MonthsDropdown, { key: "month", className: c[ne.MonthsDropdown], "aria-label": ce(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: rr(ae.date), options: cN(ae.date, q, Y, o, a), style: C?.[ne.Dropdown], value: a.getMonth(ae.date) }) : U.createElement("span", { key: "month" }, R(ae.date, a)), fe = d === "dropdown" || d === "dropdown-years" ? U.createElement(r.YearsDropdown, { key: "year", className: c[ne.YearsDropdown], "aria-label": Xt(a.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: En(ae.date), options: dN(q, Y, o, a, !!t.reverseYears), style: C?.[ne.Dropdown], value: a.getYear(ae.date) }) : U.createElement("span", { key: "year" }, X(ae.date, a));
              return a.getMonthYearOrder() === "year-first" ? [fe, se] : [se, fe];
            })(),
            U.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, T(ae.date, a.options, a))
          ) : U.createElement(r.CaptionLabel, { className: c[ne.CaptionLabel], role: "status", "aria-live": "polite" }, T(ae.date, a.options, a))),
          f === "around" && !t.hideNavigation && me === p - 1 && U.createElement(
            r.NextMonthButton,
            { type: "button", className: c[ne.NextMonthButton], tabIndex: M ? void 0 : -1, "aria-disabled": M ? void 0 : !0, "aria-label": Ie(M), onClick: Nn, "data-animated-button": t.animate ? "true" : void 0 },
            U.createElement(r.Chevron, { disabled: M ? void 0 : !0, className: c[ne.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          me === p - 1 && f === "after" && !t.hideNavigation && U.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[ne.Nav], style: C?.[ne.Nav], "aria-label": Ne(), onPreviousClick: Sn, onNextClick: Nn, previousMonth: I, nextMonth: M }),
          U.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": m === "multiple" || m === "range", "aria-label": ie(ae.date, a.options, a) || void 0, className: c[ne.MonthGrid], style: C?.[ne.MonthGrid] },
            !t.hideWeekdays && U.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[ne.Weekdays], style: C?.[ne.Weekdays] },
              N && U.createElement(r.WeekNumberHeader, { "aria-label": bt(a.options), className: c[ne.WeekNumberHeader], style: C?.[ne.WeekNumberHeader], scope: "col" }, O()),
              er.map((se) => U.createElement(r.Weekday, { "aria-label": vt(se, a.options, a), className: c[ne.Weekday], key: String(se), style: C?.[ne.Weekday], scope: "col" }, W(se, a.options, a)))
            ),
            U.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[ne.Weeks], style: C?.[ne.Weeks] }, ae.weeks.map((se) => U.createElement(
              r.Week,
              { className: c[ne.Week], key: se.weekNumber, style: C?.[ne.Week], week: se },
              N && U.createElement(r.WeekNumber, { week: se, style: C?.[ne.WeekNumber], "aria-label": tt(se.weekNumber, {
                locale: i
              }), className: c[ne.WeekNumber], scope: "row", role: "rowheader" }, _(se.weekNumber, a)),
              se.days.map((fe) => {
                const { date: _e } = fe, de = D(fe);
                if (de[ye.focused] = !de.hidden && !!j?.isEqualTo(fe), de[qe.selected] = V?.(_e) || de.selected, ts(L)) {
                  const { from: qs, to: Xs } = L;
                  de[qe.range_start] = !!(qs && Xs && a.isSameDay(_e, qs)), de[qe.range_end] = !!(qs && Xs && a.isSameDay(_e, Xs)), de[qe.range_middle] = yt(L, _e, !0, a);
                }
                const Jr = lN(de, C, t.modifiersStyles), eo = zS(de, c, t.modifiersClassNames), Us = !Cn && !de.hidden ? z(_e, de, a.options, a) : void 0;
                return U.createElement(r.Day, { key: `${fe.isoDate}_${fe.displayMonthId}`, day: fe, modifiers: de, className: eo.join(" "), style: Jr, role: "gridcell", "aria-selected": de.selected || void 0, "aria-label": Us, "data-day": fe.isoDate, "data-month": fe.outside ? fe.dateMonthId : void 0, "data-selected": de.selected || void 0, "data-disabled": de.disabled || void 0, "data-hidden": de.hidden || void 0, "data-outside": fe.outside || void 0, "data-focused": de.focused || void 0, "data-today": de.today || void 0 }, !de.hidden && Cn ? U.createElement(r.DayButton, { className: c[ne.DayButton], style: C?.[ne.DayButton], type: "button", day: fe, modifiers: de, disabled: !de.focused && de.disabled || void 0, "aria-disabled": de.focused && de.disabled || void 0, tabIndex: G(fe) ? 0 : -1, "aria-label": te(_e, de, a.options, a), onClick: Hs(fe, de), onBlur: Vs(fe, de), onFocus: Qr(fe, de), onKeyDown: tr(fe, de), onMouseEnter: Dt(fe, de), onMouseLeave: nr(fe, de) }, E(_e, a.options, a)) : !de.hidden && E(fe.date, a.options, a));
              })
            )))
          )
        ))
      ),
      t.footer && U.createElement(r.Footer, { className: c[ne.Footer], style: C?.[ne.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const FN = "(##) ####-####", LN = "(##) #####-####", $N = "#####-###", WN = "###.###.###-##", BN = "##.###.###/####-##", HN = "###########", VN = "##.###.###-#", YN = "AAA#A##", zN = "###########", GN = "##############", mf = (e, t) => {
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
}, hO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: LN,
  CNH_MASK: HN,
  CNPJ_MASK: BN,
  CPF_MASK: WN,
  PHONE_MASK: FN,
  PLATE_MASK: YN,
  RENAVAM_MASK: zN,
  RG_MASK: VN,
  RNTRC_MASK: GN,
  ZIP_CODE_MASK: $N,
  formatMask: mf
}, Symbol.toStringTag, { value: "Module" })), gO = [
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
function pf({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "dropdown",
  buttonVariant: o = "ghost",
  locale: s = Ud,
  formatters: a,
  components: i,
  startMonth: c,
  endMonth: d,
  ...m
}) {
  const f = /* @__PURE__ */ new Date(), p = new Date(f.getFullYear() - 100, 0, 1), b = new Date(f.getFullYear() + 10, 11, 31), g = Si();
  return /* @__PURE__ */ u.jsx(
    jN,
    {
      showOutsideDays: n,
      className: P(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      startMonth: c ?? p,
      endMonth: d ?? b,
      locale: s,
      formatters: {
        formatMonthDropdown: (h) => h.toLocaleString(s?.code, { month: "short" }),
        ...a
      },
      classNames: {
        root: P("w-fit", g.root),
        months: P(
          "flex gap-4 flex-col md:flex-row relative",
          g.months
        ),
        month: P("flex flex-col w-full gap-4", g.month),
        nav: P(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          g.nav
        ),
        button_previous: P(
          rn({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          g.button_previous
        ),
        button_next: P(
          rn({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          g.button_next
        ),
        month_caption: P(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          g.month_caption
        ),
        dropdowns: P(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          g.dropdowns
        ),
        dropdown_root: P(
          "relative cn-calendar-dropdown-root rounded-(--cell-radius)",
          g.dropdown_root
        ),
        dropdown: P(
          "absolute bg-popover inset-0 opacity-0",
          g.dropdown
        ),
        caption_label: P(
          "select-none font-medium",
          r === "label" ? "text-sm" : "cn-calendar-caption-label rounded-(--cell-radius) flex items-center gap-1 text-sm  [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          g.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: P("flex", g.weekdays),
        weekday: P(
          "text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none",
          g.weekday
        ),
        week: P("flex w-full mt-2", g.week),
        week_number_header: P(
          "select-none w-(--cell-size)",
          g.week_number_header
        ),
        week_number: P(
          "text-[0.8rem] select-none text-muted-foreground",
          g.week_number
        ),
        day: P(
          "relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          g.day
        ),
        range_start: P(
          "rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate",
          g.range_start
        ),
        range_middle: P("rounded-none", g.range_middle),
        range_end: P(
          "rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate",
          g.range_end
        ),
        today: P(
          "bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none",
          g.today
        ),
        outside: P(
          "text-muted-foreground aria-selected:text-muted-foreground",
          g.outside
        ),
        disabled: P(
          "text-muted-foreground opacity-50",
          g.disabled
        ),
        hidden: P("invisible", g.hidden),
        ...t
      },
      components: {
        Root: ({ className: h, rootRef: v, ...x }) => /* @__PURE__ */ u.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: v,
            className: P(h),
            ...x
          }
        ),
        Chevron: ({ className: h, orientation: v, ...x }) => v === "left" ? /* @__PURE__ */ u.jsx(wv, { className: P("cn-rtl-flip size-4", h), ...x }) : v === "right" ? /* @__PURE__ */ u.jsx(yv, { className: P("cn-rtl-flip size-4", h), ...x }) : /* @__PURE__ */ u.jsx(Cv, { className: P("size-4", h), ...x }),
        DayButton: ({ ...h }) => /* @__PURE__ */ u.jsx(KN, { locale: s, ...h }),
        WeekNumber: ({ children: h, ...v }) => /* @__PURE__ */ u.jsx("td", { ...v, children: /* @__PURE__ */ u.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: h }) }),
        ...i
      },
      ...m
    }
  );
}
function KN({
  className: e,
  day: t,
  modifiers: n,
  locale: r,
  ...o
}) {
  const s = Si(), a = l.useRef(null);
  return l.useEffect(() => {
    n.focused && a.current?.focus();
  }, [n.focused]), /* @__PURE__ */ u.jsx(
    vn,
    {
      ref: a,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(r?.code),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: P(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        s.day,
        e
      ),
      ...o
    }
  );
}
const UN = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: P(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
UN.displayName = "Card";
const qN = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: P("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
qN.displayName = "CardHeader";
const XN = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    ref: n,
    className: P(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
XN.displayName = "CardTitle";
const QN = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: n,
    className: P("text-sm text-muted-foreground", e),
    ...t
  }
));
QN.displayName = "CardDescription";
const ZN = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { ref: n, className: P("p-4", e), ...t }));
ZN.displayName = "CardContent";
const JN = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: P("flex items-center p-4 pt-0", e),
    ...t
  }
));
JN.displayName = "CardFooter";
function eE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function El(e) {
  return eE(e) || Array.isArray(e);
}
function tE() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ti(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), s = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== s ? !1 : n.every((a) => {
    const i = e[a], c = t[a];
    return typeof i == "function" ? `${i}` == `${c}` : !El(i) || !El(c) ? i === c : Ti(i, c);
  });
}
function Tl(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function nE(e, t) {
  if (e.length !== t.length) return !1;
  const n = Tl(e), r = Tl(t);
  return n.every((o, s) => {
    const a = r[s];
    return Ti(o, a);
  });
}
function Ri(e) {
  return typeof e == "number";
}
function Na(e) {
  return typeof e == "string";
}
function rs(e) {
  return typeof e == "boolean";
}
function Rl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Se(e) {
  return Math.abs(e);
}
function Mi(e) {
  return Math.sign(e);
}
function mr(e, t) {
  return Se(e - t);
}
function rE(e, t) {
  if (e === 0 || t === 0 || Se(e) <= Se(t)) return 0;
  const n = mr(Se(e), Se(t));
  return Se(n / e);
}
function oE(e) {
  return Math.round(e * 100) / 100;
}
function br(e) {
  return xr(e).map(Number);
}
function Xe(e) {
  return e[Or(e)];
}
function Or(e) {
  return Math.max(0, e.length - 1);
}
function Pi(e, t) {
  return t === Or(e);
}
function Ml(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function xr(e) {
  return Object.keys(e);
}
function hf(e, t) {
  return [e, t].reduce((n, r) => (xr(r).forEach((o) => {
    const s = n[o], a = r[o], i = Rl(s) && Rl(a);
    n[o] = i ? hf(s, a) : a;
  }), n), {});
}
function Ea(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function sE(e, t) {
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
    return Na(e) ? n[e](c) : e(t, c, d);
  }
  return {
    measure: a
  };
}
function wr() {
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
function aE(e, t, n, r) {
  const o = wr(), s = 1e3 / 60;
  let a = null, i = 0, c = 0;
  function d() {
    o.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function m() {
    b(), o.clear();
  }
  function f(v) {
    if (!c) return;
    a || (a = v, n(), n());
    const x = v - a;
    for (a = v, i += x; i >= s; )
      n(), i -= s;
    const w = i / s;
    r(w), c && (c = t.requestAnimationFrame(f));
  }
  function p() {
    c || (c = t.requestAnimationFrame(f));
  }
  function b() {
    t.cancelAnimationFrame(c), a = null, i = 0, c = 0;
  }
  function g() {
    a = null, i = 0;
  }
  return {
    init: d,
    destroy: m,
    start: p,
    stop: b,
    update: n,
    render: r
  };
}
function iE(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", s = r ? "x" : "y", a = !r && n ? -1 : 1, i = m(), c = f();
  function d(g) {
    const {
      height: h,
      width: v
    } = g;
    return r ? h : v;
  }
  function m() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(g) {
    return g * a;
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
function sn(e = 0, t = 0) {
  const n = Se(e - t);
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
function gf(e, t, n) {
  const {
    constrain: r
  } = sn(0, e), o = e + 1;
  let s = a(t);
  function a(p) {
    return n ? Se((o + p) % o) : r(p);
  }
  function i() {
    return s;
  }
  function c(p) {
    return s = a(p), f;
  }
  function d(p) {
    return m().set(i() + p);
  }
  function m() {
    return gf(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: d,
    clone: m
  };
  return f;
}
function cE(e, t, n, r, o, s, a, i, c, d, m, f, p, b, g, h, v, x, w) {
  const {
    cross: y,
    direction: S
  } = e, N = ["INPUT", "SELECT", "TEXTAREA"], C = {
    passive: !1
  }, T = wr(), E = wr(), R = sn(50, 225).constrain(b.measure(20)), _ = {
    mouse: 300,
    touch: 400
  }, O = {
    mouse: 500,
    touch: 600
  }, W = g ? 43 : 25;
  let X = !1, k = 0, F = 0, H = !1, q = !1, Y = !1, I = !1;
  function M(z) {
    if (!w) return;
    function ie(Ne) {
      (rs(w) || w(z, Ne)) && Z(Ne);
    }
    const ce = t;
    T.add(ce, "dragstart", (Ne) => Ne.preventDefault(), C).add(ce, "touchmove", () => {
    }, C).add(ce, "touchend", () => {
    }).add(ce, "touchstart", ie).add(ce, "mousedown", ie).add(ce, "touchcancel", G).add(ce, "contextmenu", G).add(ce, "click", Q, !0);
  }
  function B() {
    T.clear(), E.clear();
  }
  function D() {
    const z = I ? n : t;
    E.add(z, "touchmove", j, C).add(z, "touchend", G).add(z, "mousemove", j, C).add(z, "mouseup", G);
  }
  function V(z) {
    const ie = z.nodeName || "";
    return N.includes(ie);
  }
  function K() {
    return (g ? O : _)[I ? "mouse" : "touch"];
  }
  function L(z, ie) {
    const ce = f.add(Mi(z) * -1), Ne = m.byDistance(z, !g).distance;
    return g || Se(z) < R ? Ne : v && ie ? Ne * 0.5 : m.byIndex(ce.get(), 0).distance;
  }
  function Z(z) {
    const ie = Ea(z, r);
    I = ie, Y = g && ie && !z.buttons && X, X = mr(o.get(), a.get()) >= 2, !(ie && z.button !== 0) && (V(z.target) || (H = !0, s.pointerDown(z), d.useFriction(0).useDuration(0), o.set(a), D(), k = s.readPoint(z), F = s.readPoint(z, y), p.emit("pointerDown")));
  }
  function j(z) {
    if (!Ea(z, r) && z.touches.length >= 2) return G(z);
    const ce = s.readPoint(z), Ne = s.readPoint(z, y), De = mr(ce, k), Ie = mr(Ne, F);
    if (!q && !I && (!z.cancelable || (q = De > Ie, !q)))
      return G(z);
    const vt = s.pointerMove(z);
    De > h && (Y = !0), d.useFriction(0.3).useDuration(0.75), i.start(), o.add(S(vt)), z.preventDefault();
  }
  function G(z) {
    const ce = m.byDistance(0, !1).index !== f.get(), Ne = s.pointerUp(z) * K(), De = L(S(Ne), ce), Ie = rE(Ne, De), vt = W - 10 * Ie, tt = x + Ie / 50;
    q = !1, H = !1, E.clear(), d.useDuration(vt).useFriction(tt), c.distance(De, !g), I = !1, p.emit("pointerUp");
  }
  function Q(z) {
    Y && (z.stopPropagation(), z.preventDefault(), Y = !1);
  }
  function re() {
    return H;
  }
  return {
    init: M,
    destroy: B,
    pointerDown: re
  };
}
function lE(e, t) {
  let r, o;
  function s(f) {
    return f.timeStamp;
  }
  function a(f, p) {
    const g = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ea(f, t) ? f : f.touches[0])[g];
  }
  function i(f) {
    return r = f, o = f, a(f);
  }
  function c(f) {
    const p = a(f) - a(o), b = s(f) - s(r) > 170;
    return o = f, b && (r = f), p;
  }
  function d(f) {
    if (!r || !o) return 0;
    const p = a(o) - a(r), b = s(f) - s(r), g = s(f) - s(o) > 170, h = p / b;
    return b && !g && Se(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: d,
    readPoint: a
  };
}
function uE() {
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
function dE(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function fE(e, t, n, r, o, s, a) {
  const i = [e].concat(r);
  let c, d, m = [], f = !1;
  function p(v) {
    return o.measureSize(a.measure(v));
  }
  function b(v) {
    if (!s) return;
    d = p(e), m = r.map(p);
    function x(w) {
      for (const y of w) {
        if (f) return;
        const S = y.target === e, N = r.indexOf(y.target), C = S ? d : m[N], T = p(S ? e : r[N]);
        if (Se(T - C) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((w) => {
      (rs(s) || s(v, w)) && x(w);
    }), n.requestAnimationFrame(() => {
      i.forEach((w) => c.observe(w));
    });
  }
  function g() {
    f = !0, c && c.disconnect();
  }
  return {
    init: b,
    destroy: g
  };
}
function mE(e, t, n, r, o, s) {
  let a = 0, i = 0, c = o, d = s, m = e.get(), f = 0;
  function p() {
    const C = r.get() - e.get(), T = !c;
    let E = 0;
    return T ? (a = 0, n.set(r), e.set(r), E = C) : (n.set(e), a += C / c, a *= d, m += a, e.add(a), E = m - f), i = Mi(E), f = m, N;
  }
  function b() {
    const C = r.get() - t.get();
    return Se(C) < 1e-3;
  }
  function g() {
    return c;
  }
  function h() {
    return i;
  }
  function v() {
    return a;
  }
  function x() {
    return y(o);
  }
  function w() {
    return S(s);
  }
  function y(C) {
    return c = C, N;
  }
  function S(C) {
    return d = C, N;
  }
  const N = {
    direction: h,
    duration: g,
    velocity: v,
    seek: p,
    settled: b,
    useBaseFriction: w,
    useBaseDuration: x,
    useFriction: S,
    useDuration: y
  };
  return N;
}
function pE(e, t, n, r, o) {
  const s = o.measure(10), a = o.measure(50), i = sn(0.1, 0.99);
  let c = !1;
  function d() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function m(b) {
    if (!d()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max", h = Se(e[g] - t.get()), v = n.get() - t.get(), x = i.constrain(h / a);
    n.subtract(v * x), !b && Se(v) < s && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(b) {
    c = !b;
  }
  return {
    shouldConstrain: d,
    constrain: m,
    toggleActive: f
  };
}
function hE(e, t, n, r, o) {
  const s = sn(-t + e, 0), a = f(), i = m(), c = p();
  function d(g, h) {
    return mr(g, h) <= 1;
  }
  function m() {
    const g = a[0], h = Xe(a), v = a.lastIndexOf(g), x = a.indexOf(h) + 1;
    return sn(v, x);
  }
  function f() {
    return n.map((g, h) => {
      const {
        min: v,
        max: x
      } = s, w = s.constrain(g), y = !h, S = Pi(n, h);
      return y ? x : S || d(v, w) ? v : d(x, w) ? x : w;
    }).map((g) => parseFloat(g.toFixed(3)));
  }
  function p() {
    if (t <= e + o) return [s.max];
    if (r === "keepSnaps") return a;
    const {
      min: g,
      max: h
    } = i;
    return a.slice(g, h);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function gE(e, t, n) {
  const r = t[0], o = n ? r - e : Xe(t);
  return {
    limit: sn(o, r)
  };
}
function vE(e, t, n, r) {
  const s = t.min + 0.1, a = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = sn(s, a);
  function d(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function m(p) {
    if (!d(p)) return;
    const b = e * (p * -1);
    r.forEach((g) => g.add(b));
  }
  return {
    loop: m
  };
}
function bE(e) {
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
function xE(e, t, n, r, o) {
  const {
    startEdge: s,
    endEdge: a
  } = e, {
    groupSlides: i
  } = o, c = f().map(t.measure), d = p(), m = b();
  function f() {
    return i(r).map((h) => Xe(h)[a] - h[0][s]).map(Se);
  }
  function p() {
    return r.map((h) => n[s] - h[s]).map((h) => -Se(h));
  }
  function b() {
    return i(d).map((h) => h[0]).map((h, v) => h + c[v]);
  }
  return {
    snaps: d,
    snapsAligned: m
  };
}
function wE(e, t, n, r, o, s) {
  const {
    groupSlides: a
  } = o, {
    min: i,
    max: c
  } = r, d = m();
  function m() {
    const p = a(s), b = !e || t === "keepSnaps";
    return n.length === 1 ? [s] : b ? p : p.slice(i, c).map((g, h, v) => {
      const x = !h, w = Pi(v, h);
      if (x) {
        const y = Xe(v[0]) + 1;
        return Ml(y);
      }
      if (w) {
        const y = Or(s) - Xe(v)[0] + 1;
        return Ml(y, Xe(v)[0]);
      }
      return g;
    });
  }
  return {
    slideRegistry: d
  };
}
function yE(e, t, n, r, o) {
  const {
    reachedAny: s,
    removeOffset: a,
    constrain: i
  } = r;
  function c(g) {
    return g.concat().sort((h, v) => Se(h) - Se(v))[0];
  }
  function d(g) {
    const h = e ? a(g) : i(g), v = t.map((w, y) => ({
      diff: m(w - h, 0),
      index: y
    })).sort((w, y) => Se(w.diff) - Se(y.diff)), {
      index: x
    } = v[0];
    return {
      index: x,
      distance: h
    };
  }
  function m(g, h) {
    const v = [g, g + n, g - n];
    if (!e) return g;
    if (!h) return c(v);
    const x = v.filter((w) => Mi(w) === h);
    return x.length ? c(x) : Xe(v) - n;
  }
  function f(g, h) {
    const v = t[g] - o.get(), x = m(v, h);
    return {
      index: g,
      distance: x
    };
  }
  function p(g, h) {
    const v = o.get() + g, {
      index: x,
      distance: w
    } = d(v), y = !e && s(v);
    if (!h || y) return {
      index: x,
      distance: g
    };
    const S = t[x] - w, N = g + m(S, 0);
    return {
      index: x,
      distance: N
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: m
  };
}
function CE(e, t, n, r, o, s, a) {
  function i(f) {
    const p = f.distance, b = f.index !== t.get();
    s.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), b && (n.set(t.get()), t.set(f.index), a.emit("select"));
  }
  function c(f, p) {
    const b = o.byDistance(f, p);
    i(b);
  }
  function d(f, p) {
    const b = t.clone().set(f), g = o.byIndex(b.get(), p);
    i(g);
  }
  return {
    distance: c,
    index: d
  };
}
function SE(e, t, n, r, o, s, a, i) {
  const c = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function m(b) {
    if (!i) return;
    function g(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      a.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((y) => y.includes(h));
      Ri(w) && (o.useDuration(0), r.index(w, 0), a.emit("slideFocus"));
    }
    s.add(document, "keydown", f, !1), t.forEach((h, v) => {
      s.add(h, "focus", (x) => {
        (rs(i) || i(b, x)) && g(v);
      }, c);
    });
  }
  function f(b) {
    b.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: m
  };
}
function ur(e) {
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
    return Ri(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: s
  };
}
function vf(e, t) {
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
    const b = oE(e.direction(p));
    b !== o && (r.transform = n(b), o = b);
  }
  function d(p) {
    s = !p;
  }
  function m() {
    s || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: m,
    to: c,
    toggleActive: d
  };
}
function NE(e, t, n, r, o, s, a, i, c) {
  const m = br(o), f = br(o).reverse(), p = x().concat(w());
  function b(T, E) {
    return T.reduce((R, _) => R - o[_], E);
  }
  function g(T, E) {
    return T.reduce((R, _) => b(R, E) > 0 ? R.concat([_]) : R, []);
  }
  function h(T) {
    return s.map((E, R) => ({
      start: E - r[R] + 0.5 + T,
      end: E + t - 0.5 + T
    }));
  }
  function v(T, E, R) {
    const _ = h(E);
    return T.map((O) => {
      const W = R ? 0 : -n, X = R ? n : 0, k = R ? "end" : "start", F = _[O][k];
      return {
        index: O,
        loopPoint: F,
        slideLocation: ur(-1),
        translate: vf(e, c[O]),
        target: () => i.get() > F ? W : X
      };
    });
  }
  function x() {
    const T = a[0], E = g(f, T);
    return v(E, n, !1);
  }
  function w() {
    const T = t - a[0] - 1, E = g(m, T);
    return v(E, -n, !0);
  }
  function y() {
    return p.every(({
      index: T
    }) => {
      const E = m.filter((R) => R !== T);
      return b(E, t) <= 0.1;
    });
  }
  function S() {
    p.forEach((T) => {
      const {
        target: E,
        translate: R,
        slideLocation: _
      } = T, O = E();
      O !== _.get() && (R.to(O), _.set(O));
    });
  }
  function N() {
    p.forEach((T) => T.translate.clear());
  }
  return {
    canLoop: y,
    clear: N,
    loop: S,
    loopPoints: p
  };
}
function EE(e, t, n) {
  let r, o = !1;
  function s(c) {
    if (!n) return;
    function d(m) {
      for (const f of m)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((m) => {
      o || (rs(n) || n(c, m)) && d(m);
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
function TE(e, t, n, r) {
  const o = {};
  let s = null, a = null, i, c = !1;
  function d() {
    i = new IntersectionObserver((g) => {
      c || (g.forEach((h) => {
        const v = t.indexOf(h.target);
        o[v] = h;
      }), s = null, a = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((g) => i.observe(g));
  }
  function m() {
    i && i.disconnect(), c = !0;
  }
  function f(g) {
    return xr(o).reduce((h, v) => {
      const x = parseInt(v), {
        isIntersecting: w
      } = o[x];
      return (g && w || !g && !w) && h.push(x), h;
    }, []);
  }
  function p(g = !0) {
    if (g && s) return s;
    if (!g && a) return a;
    const h = f(g);
    return g && (s = h), g || (a = h), h;
  }
  return {
    init: d,
    destroy: m,
    get: p
  };
}
function RE(e, t, n, r, o, s) {
  const {
    measureSize: a,
    startEdge: i,
    endEdge: c
  } = e, d = n[0] && o, m = g(), f = h(), p = n.map(a), b = v();
  function g() {
    if (!d) return 0;
    const w = n[0];
    return Se(t[i] - w[i]);
  }
  function h() {
    if (!d) return 0;
    const w = s.getComputedStyle(Xe(r));
    return parseFloat(w.getPropertyValue(`margin-${c}`));
  }
  function v() {
    return n.map((w, y, S) => {
      const N = !y, C = Pi(S, y);
      return N ? p[y] + m : C ? p[y] + f : S[y + 1][i] - w[i];
    }).map(Se);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: b,
    startGap: m,
    endGap: f
  };
}
function ME(e, t, n, r, o, s, a, i, c) {
  const {
    startEdge: d,
    endEdge: m,
    direction: f
  } = e, p = Ri(n);
  function b(x, w) {
    return br(x).filter((y) => y % w === 0).map((y) => x.slice(y, y + w));
  }
  function g(x) {
    return x.length ? br(x).reduce((w, y, S) => {
      const N = Xe(w) || 0, C = N === 0, T = y === Or(x), E = o[d] - s[N][d], R = o[d] - s[y][m], _ = !r && C ? f(a) : 0, O = !r && T ? f(i) : 0, W = Se(R - O - (E + _));
      return S && W > t + c && w.push(y), T && w.push(x.length), w;
    }, []).map((w, y, S) => {
      const N = Math.max(S[y - 1] || 0);
      return x.slice(N, w);
    }) : [];
  }
  function h(x) {
    return p ? b(x, n) : g(x);
  }
  return {
    groupSlides: h
  };
}
function PE(e, t, n, r, o, s, a) {
  const {
    align: i,
    axis: c,
    direction: d,
    startIndex: m,
    loop: f,
    duration: p,
    dragFree: b,
    dragThreshold: g,
    inViewThreshold: h,
    slidesToScroll: v,
    skipSnaps: x,
    containScroll: w,
    watchResize: y,
    watchSlides: S,
    watchDrag: N,
    watchFocus: C
  } = s, T = 2, E = uE(), R = E.measure(t), _ = n.map(E.measure), O = iE(c, d), W = O.measureSize(R), X = dE(W), k = sE(i, W), F = !f && !!w, H = f || !!w, {
    slideSizes: q,
    slideSizesWithGaps: Y,
    startGap: I,
    endGap: M
  } = RE(O, R, _, n, H, o), B = ME(O, W, v, f, R, _, I, M, T), {
    snaps: D,
    snapsAligned: V
  } = xE(O, k, R, _, B), K = -Xe(D) + Xe(Y), {
    snapsContained: L,
    scrollContainLimit: Z
  } = hE(W, K, V, w, T), j = F ? L : V, {
    limit: G
  } = gE(K, j, f), Q = gf(Or(j), m, f), re = Q.clone(), te = br(n), z = ({
    dragHandler: Dt,
    scrollBody: nr,
    scrollBounds: rr,
    options: {
      loop: En
    }
  }) => {
    En || rr.constrain(Dt.pointerDown()), nr.seek();
  }, ie = ({
    scrollBody: Dt,
    translate: nr,
    location: rr,
    offsetLocation: En,
    previousLocation: Ys,
    scrollLooper: zs,
    slideLooper: Gs,
    dragHandler: Zr,
    animation: Ks,
    eventHandler: ae,
    scrollBounds: me,
    options: {
      loop: se
    }
  }, fe) => {
    const _e = Dt.settled(), de = !me.shouldConstrain(), Jr = se ? _e : _e && de, eo = Jr && !Zr.pointerDown();
    eo && Ks.stop();
    const Us = rr.get() * fe + Ys.get() * (1 - fe);
    En.set(Us), se && (zs.loop(Dt.direction()), Gs.loop()), nr.to(En.get()), eo && ae.emit("settle"), Jr || ae.emit("scroll");
  }, ce = aE(r, o, () => z(tr), (Dt) => ie(tr, Dt)), Ne = 0.68, De = j[Q.get()], Ie = ur(De), vt = ur(De), tt = ur(De), bt = ur(De), Xt = mE(Ie, tt, vt, bt, p, Ne), er = yE(f, j, K, G, bt), Cn = CE(ce, Q, re, Xt, er, bt, a), Sn = bE(G), Nn = wr(), Hs = TE(t, n, a, h), {
    slideRegistry: Qr
  } = wE(F, w, j, Z, B, te), Vs = SE(e, n, Qr, Cn, Xt, Nn, a, C), tr = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: a,
    containerRect: R,
    slideRects: _,
    animation: ce,
    axis: O,
    dragHandler: cE(O, e, r, o, bt, lE(O, o), Ie, ce, Cn, Xt, er, Q, a, X, b, g, x, Ne, N),
    eventStore: Nn,
    percentOfView: X,
    index: Q,
    indexPrevious: re,
    limit: G,
    location: Ie,
    offsetLocation: tt,
    previousLocation: vt,
    options: s,
    resizeHandler: fE(t, a, o, n, O, y, E),
    scrollBody: Xt,
    scrollBounds: pE(G, tt, bt, Xt, X),
    scrollLooper: vE(K, G, tt, [Ie, tt, vt, bt]),
    scrollProgress: Sn,
    scrollSnapList: j.map(Sn.get),
    scrollSnaps: j,
    scrollTarget: er,
    scrollTo: Cn,
    slideLooper: NE(O, W, K, q, Y, D, j, tt, n),
    slideFocus: Vs,
    slidesHandler: EE(t, a, S),
    slidesInView: Hs,
    slideIndexes: te,
    slideRegistry: Qr,
    slidesToScroll: B,
    target: bt,
    translate: vf(O, t)
  };
  return tr;
}
function kE() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function r(d) {
    return e[d] || [];
  }
  function o(d) {
    return r(d).forEach((m) => m(t, d)), c;
  }
  function s(d, m) {
    return e[d] = r(d).concat([m]), c;
  }
  function a(d, m) {
    return e[d] = r(d).filter((f) => f !== m), c;
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
const DE = {
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
function _E(e) {
  function t(s, a) {
    return hf(s, a || {});
  }
  function n(s) {
    const a = s.breakpoints || {}, i = xr(a).filter((c) => e.matchMedia(c).matches).map((c) => a[c]).reduce((c, d) => t(c, d), {});
    return t(s, i);
  }
  function r(s) {
    return s.map((a) => xr(a.breakpoints || {})).reduce((a, i) => a.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function OE(e) {
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
function ko(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, s = _E(o), a = OE(s), i = wr(), c = kE(), {
    mergeOptions: d,
    optionsAtMedia: m,
    optionsMediaQueries: f
  } = s, {
    on: p,
    off: b,
    emit: g
  } = c, h = O;
  let v = !1, x, w = d(DE, ko.globalOptions), y = d(w), S = [], N, C, T;
  function E() {
    const {
      container: te,
      slides: z
    } = y;
    C = (Na(te) ? e.querySelector(te) : te) || e.children[0];
    const ce = Na(z) ? C.querySelectorAll(z) : z;
    T = [].slice.call(ce || C.children);
  }
  function R(te) {
    const z = PE(e, C, T, r, o, te, c);
    if (te.loop && !z.slideLooper.canLoop()) {
      const ie = Object.assign({}, te, {
        loop: !1
      });
      return R(ie);
    }
    return z;
  }
  function _(te, z) {
    v || (w = d(w, te), y = m(w), S = z || S, E(), x = R(y), f([w, ...S.map(({
      options: ie
    }) => ie)]).forEach((ie) => i.add(ie, "change", O)), y.active && (x.translate.to(x.location.get()), x.animation.init(), x.slidesInView.init(), x.slideFocus.init(re), x.eventHandler.init(re), x.resizeHandler.init(re), x.slidesHandler.init(re), x.options.loop && x.slideLooper.loop(), C.offsetParent && T.length && x.dragHandler.init(re), N = a.init(re, S)));
  }
  function O(te, z) {
    const ie = B();
    W(), _(d({
      startIndex: ie
    }, te), z), c.emit("reInit");
  }
  function W() {
    x.dragHandler.destroy(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), x.animation.destroy(), a.destroy(), i.clear();
  }
  function X() {
    v || (v = !0, i.clear(), W(), c.emit("destroy"), c.clear());
  }
  function k(te, z, ie) {
    !y.active || v || (x.scrollBody.useBaseFriction().useDuration(z === !0 ? 0 : y.duration), x.scrollTo.index(te, ie || 0));
  }
  function F(te) {
    const z = x.index.add(1).get();
    k(z, te, -1);
  }
  function H(te) {
    const z = x.index.add(-1).get();
    k(z, te, 1);
  }
  function q() {
    return x.index.add(1).get() !== B();
  }
  function Y() {
    return x.index.add(-1).get() !== B();
  }
  function I() {
    return x.scrollSnapList;
  }
  function M() {
    return x.scrollProgress.get(x.offsetLocation.get());
  }
  function B() {
    return x.index.get();
  }
  function D() {
    return x.indexPrevious.get();
  }
  function V() {
    return x.slidesInView.get();
  }
  function K() {
    return x.slidesInView.get(!1);
  }
  function L() {
    return N;
  }
  function Z() {
    return x;
  }
  function j() {
    return e;
  }
  function G() {
    return C;
  }
  function Q() {
    return T;
  }
  const re = {
    canScrollNext: q,
    canScrollPrev: Y,
    containerNode: G,
    internalEngine: Z,
    destroy: X,
    off: b,
    on: p,
    emit: g,
    plugins: L,
    previousScrollSnap: D,
    reInit: h,
    rootNode: j,
    scrollNext: F,
    scrollPrev: H,
    scrollProgress: M,
    scrollSnapList: I,
    scrollTo: k,
    selectedScrollSnap: B,
    slideNodes: Q,
    slidesInView: V,
    slidesNotInView: K
  };
  return _(t, n), setTimeout(() => c.emit("init"), 0), re;
}
ko.globalOptions = void 0;
function ki(e = {}, t = []) {
  const n = lt(e), r = lt(t), [o, s] = Ve(), [a, i] = Ve(), c = je(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return St(() => {
    Ti(n.current, e) || (n.current = e, c());
  }, [e, c]), St(() => {
    nE(r.current, t) || (r.current = t, c());
  }, [t, c]), St(() => {
    if (tE() && a) {
      ko.globalOptions = ki.globalOptions;
      const d = ko(a, n.current, r.current);
      return s(d), () => d.destroy();
    } else
      s(void 0);
  }, [a, s]), [i, o];
}
ki.globalOptions = void 0;
const bf = l.createContext(null);
function os() {
  const e = l.useContext(bf);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const AE = l.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: s,
    ...a
  }, i) => {
    const [c, d] = ki(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [m, f] = l.useState(!1), [p, b] = l.useState(!1), g = l.useCallback((w) => {
      w && (f(w.canScrollPrev()), b(w.canScrollNext()));
    }, []), h = l.useCallback(() => {
      d?.scrollPrev();
    }, [d]), v = l.useCallback(() => {
      d?.scrollNext();
    }, [d]), x = l.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), h()) : w.key === "ArrowRight" && (w.preventDefault(), v());
      },
      [h, v]
    );
    return l.useEffect(() => {
      !d || !n || n(d);
    }, [d, n]), l.useEffect(() => {
      if (d)
        return g(d), d.on("reInit", g), d.on("select", g), () => {
          d?.off("select", g);
        };
    }, [d, g]), /* @__PURE__ */ u.jsx(
      bf.Provider,
      {
        value: {
          carouselRef: c,
          api: d,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: v,
          canScrollPrev: m,
          canScrollNext: p
        },
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: x,
            className: P("relative", o),
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
AE.displayName = "Carousel";
const IE = l.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = os();
  return /* @__PURE__ */ u.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: P(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
IE.displayName = "CarouselContent";
const jE = l.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = os();
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: P(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
jE.displayName = "CarouselItem";
const FE = l.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollPrev: a, canScrollPrev: i } = os();
  return /* @__PURE__ */ u.jsxs(
    vn,
    {
      ref: o,
      variant: t,
      size: n,
      className: P(
        "absolute  h-8 w-8 rounded-full",
        s === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(Sv, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
FE.displayName = "CarouselPrevious";
const LE = l.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollNext: a, canScrollNext: i } = os();
  return /* @__PURE__ */ u.jsxs(
    vn,
    {
      ref: o,
      variant: t,
      size: n,
      className: P(
        "absolute h-8 w-8 rounded-full",
        s === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(Nv, { className: "h-4 w-4" }),
        /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
LE.displayName = "CarouselNext";
const $E = { light: "", dark: ".dark" }, xf = l.createContext(null);
function wf() {
  const e = l.useContext(xf);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const WE = l.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, s) => {
  const a = l.useId(), i = `chart-${e || a.replace(/:/g, "")}`;
  return /* @__PURE__ */ u.jsx(xf.Provider, { value: { config: r }, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      "data-chart": i,
      ref: s,
      className: P(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ u.jsx(BE, { id: i, config: r }),
        /* @__PURE__ */ u.jsx(Za.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
WE.displayName = "Chart";
const BE = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ u.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries($E).map(
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
}, vO = Za.Tooltip, HE = l.forwardRef(
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
    color: m,
    nameKey: f,
    labelKey: p
  }, b) => {
    const { config: g } = wf(), h = l.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [x] = t;
      if (!x)
        return null;
      const w = `${p || x.dataKey || x.name || "value"}`, y = Ta(g, x, w), S = !p && typeof a == "string" ? g[a]?.label || a : y?.label;
      return i ? /* @__PURE__ */ u.jsx("div", { className: P("font-medium", c), children: i(S, t) }) : S ? /* @__PURE__ */ u.jsx("div", { className: P("font-medium", c), children: S }) : null;
    }, [
      a,
      i,
      t,
      o,
      c,
      g,
      p
    ]);
    if (!e || !t?.length)
      return null;
    const v = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: b,
        className: P(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          v ? null : h,
          /* @__PURE__ */ u.jsx("div", { className: "grid gap-1.5", children: t.map((x, w) => {
            if (!x)
              return null;
            const y = `${f || x.dataKey || x.name || "value"}`, S = Ta(g, x, y), N = m || x.payload.fill || x.color;
            return /* @__PURE__ */ u.jsx(
              "div",
              {
                className: P(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: d && x?.value !== void 0 && x.name ? d(x.value, x.name, x, w, x.payload) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  S?.icon ? /* @__PURE__ */ u.jsx(S.icon, {}) : !s && /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      className: P(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": v && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": N,
                        "--color-border": N
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: P(
                        "flex flex-1 justify-between leading-none",
                        v ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1.5", children: [
                          v ? h : null,
                          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: S?.label || x.name })
                        ] }),
                        x.value && /* @__PURE__ */ u.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: x.value.toLocaleString() })
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
HE.displayName = "ChartTooltip";
const bO = Za.Legend, VE = l.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, s) => {
    const { config: a } = wf();
    return n?.length ? /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: s,
        className: P(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((i) => {
          if (!i)
            return null;
          const c = `${o || i.dataKey || "value"}`, d = Ta(a, i, c);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: P(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                d?.icon && !t ? /* @__PURE__ */ u.jsx(d.icon, {}) : /* @__PURE__ */ u.jsx(
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
VE.displayName = "ChartLegend";
function Ta(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function Ar(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ss(e) {
  const [t, n] = l.useState(void 0);
  return xe(() => {
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
var as = "Checkbox", [YE] = Te(as), [zE, Di] = YE(as);
function GE(e) {
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
    value: m = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, b] = Pe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: as
  }), [g, h] = l.useState(null), [v, x] = l.useState(null), w = l.useRef(!1), y = g ? !!a || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: p,
    disabled: s,
    setChecked: b,
    control: g,
    setControl: h,
    name: i,
    form: a,
    value: m,
    hasConsumerStoppedPropagationRef: w,
    required: d,
    defaultChecked: It(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: v,
    setBubbleInput: x
  };
  return /* @__PURE__ */ u.jsx(
    zE,
    {
      scope: t,
      ...S,
      children: KE(f) ? f(S) : r
    }
  );
}
var yf = "CheckboxTrigger", Cf = l.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: s,
      value: a,
      disabled: i,
      checked: c,
      required: d,
      setControl: m,
      setChecked: f,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: b,
      bubbleInput: g
    } = Di(yf, e), h = oe(o, m), v = l.useRef(c);
    return l.useEffect(() => {
      const x = s?.form;
      if (x) {
        const w = () => f(v.current);
        return x.addEventListener("reset", w), () => x.removeEventListener("reset", w);
      }
    }, [s, f]), /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": It(c) ? "mixed" : c,
        "aria-required": d,
        "data-state": Rf(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: h,
        onKeyDown: A(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: A(n, (x) => {
          f((w) => It(w) ? !0 : !w), g && b && (p.current = x.isPropagationStopped(), p.current || x.stopPropagation());
        })
      }
    );
  }
);
Cf.displayName = yf;
var _i = l.forwardRef(
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
      form: m,
      ...f
    } = e;
    return /* @__PURE__ */ u.jsx(
      GE,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: s,
        disabled: i,
        required: a,
        onCheckedChange: d,
        name: r,
        form: m,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(
            Cf,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ u.jsx(
            Tf,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
_i.displayName = as;
var Sf = "CheckboxIndicator", Nf = l.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = Di(Sf, n);
    return /* @__PURE__ */ u.jsx(
      be,
      {
        present: r || It(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          $.span,
          {
            "data-state": Rf(s.checked),
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
Nf.displayName = Sf;
var Ef = "CheckboxBubbleInput", Tf = l.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      name: d,
      value: m,
      form: f,
      bubbleInput: p,
      setBubbleInput: b
    } = Di(Ef, e), g = oe(n, b), h = Ar(s), v = ss(r);
    l.useEffect(() => {
      const w = p;
      if (!w) return;
      const y = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, C = !o.current;
      if (h !== s && N) {
        const T = new Event("click", { bubbles: C });
        w.indeterminate = It(s), N.call(w, It(s) ? !1 : s), w.dispatchEvent(T);
      }
    }, [p, h, s, o]);
    const x = l.useRef(It(s) ? !1 : s);
    return /* @__PURE__ */ u.jsx(
      $.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? x.current,
        required: i,
        disabled: c,
        name: d,
        value: m,
        form: f,
        ...t,
        tabIndex: -1,
        ref: g,
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
Tf.displayName = Ef;
function KE(e) {
  return typeof e == "function";
}
function It(e) {
  return e === "indeterminate";
}
function Rf(e) {
  return It(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const UE = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  _i,
  {
    ref: n,
    className: P(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(
      Nf,
      {
        className: P("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u.jsx(Er, { className: "size-4 h-full" })
      }
    )
  }
));
UE.displayName = _i.displayName;
function xO({
  name: e,
  label: t,
  options: n,
  placeholder: r = "Selecione uma opção",
  searchPlaceholder: o = "Buscar...",
  emptyMessage: s = "Nenhum resultado encontrado.",
  disabled: a = !1,
  isLoading: i = !1
}) {
  const { control: c, setValue: d } = Yn();
  return /* @__PURE__ */ u.jsx(
    Ur,
    {
      control: c,
      name: e,
      render: ({ field: m }) => /* @__PURE__ */ u.jsxs(Qn, { children: [
        !!t && /* @__PURE__ */ u.jsx(Zn, { children: t }),
        /* @__PURE__ */ u.jsx(
          qE,
          {
            placeholder: r,
            searchPlaceholder: o,
            emptyMessage: s,
            options: n,
            selected: m.value,
            onSelect: (f) => d(e, f, { shouldValidate: !0 }),
            disabled: a,
            isLoading: i
          }
        ),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
}
function qE({
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
  const [m, f] = Ve(!1);
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ u.jsx(Ss, { children: e }),
    /* @__PURE__ */ u.jsxs(Hr, { open: m, onOpenChange: f, children: [
      /* @__PURE__ */ u.jsx(Vr, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
        vn,
        {
          variant: "outline",
          disabled: c,
          className: P(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !n && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "truncate", children: n ? t.find((p) => p.value === n)?.label : o }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
              d && /* @__PURE__ */ u.jsx(hr, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ u.jsx(ou, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ u.jsx(Xn, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ u.jsxs(jr, { children: [
        /* @__PURE__ */ u.jsx(cs, { placeholder: s }),
        /* @__PURE__ */ u.jsxs(ls, { children: [
          /* @__PURE__ */ u.jsx(us, { children: a }),
          /* @__PURE__ */ u.jsx(Fr, { children: t.map((p) => /* @__PURE__ */ u.jsxs(
            nn,
            {
              value: p.label,
              onSelect: () => {
                n === p.value ? r(void 0) : r(p.value), f(!1);
              },
              children: [
                /* @__PURE__ */ u.jsx(
                  Er,
                  {
                    className: P(
                      "mr-2 size-4",
                      n === p.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ u.jsx("div", { className: "w-0 flex-1", children: p.label })
              ]
            },
            p.value
          )) })
        ] })
      ] }) })
    ] }),
    !!i && /* @__PURE__ */ u.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: i })
  ] });
}
var Pl = 1, XE = 0.9, QE = 0.8, ZE = 0.17, ca = 0.1, la = 0.999, JE = 0.9999, eT = 0.99, tT = /[\\\/_+.#"@\[\(\{&]/, nT = /[\\\/_+.#"@\[\(\{&]/g, rT = /[\s-]/, Mf = /[\s-]/g;
function Ra(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? Pl : eT;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), d = n.indexOf(c, o), m = 0, f, p, b, g; d >= 0; ) f = Ra(e, t, n, r, d + 1, s + 1, a), f > m && (d === o ? f *= Pl : tT.test(e.charAt(d - 1)) ? (f *= QE, b = e.slice(o, d - 1).match(nT), b && o > 0 && (f *= Math.pow(la, b.length))) : rT.test(e.charAt(d - 1)) ? (f *= XE, g = e.slice(o, d - 1).match(Mf), g && o > 0 && (f *= Math.pow(la, g.length))) : (f *= ZE, o > 0 && (f *= Math.pow(la, d - o))), e.charAt(d) !== t.charAt(s) && (f *= JE)), (f < ca && n.charAt(d - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(d - 1) !== r.charAt(s)) && (p = Ra(e, t, n, r, d + 1, s + 2, a), p * ca > f && (f = p * ca)), f > m && (m = f), d = n.indexOf(c, d + 1);
  return a[i] = m, m;
}
function kl(e) {
  return e.toLowerCase().replace(Mf, " ");
}
function oT(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ra(e, t, kl(e), kl(t), 0, 0, {});
}
var ir = '[cmdk-group=""]', ua = '[cmdk-group-items=""]', sT = '[cmdk-group-heading=""]', Pf = '[cmdk-item=""]', Dl = `${Pf}:not([aria-disabled="true"])`, Ma = "cmdk-item-select", _n = "data-value", aT = (e, t, n) => oT(e, t, n), kf = l.createContext(void 0), Ir = () => l.useContext(kf), Df = l.createContext(void 0), Oi = () => l.useContext(Df), _f = l.createContext(void 0), Of = l.forwardRef((e, t) => {
  let n = On(() => {
    var D, V;
    return { search: "", value: (V = (D = e.value) != null ? D : e.defaultValue) != null ? V : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = On(() => /* @__PURE__ */ new Set()), o = On(() => /* @__PURE__ */ new Map()), s = On(() => /* @__PURE__ */ new Map()), a = On(() => /* @__PURE__ */ new Set()), i = Af(e), { label: c, children: d, value: m, onValueChange: f, filter: p, shouldFilter: b, loop: g, disablePointerSelection: h = !1, vimBindings: v = !0, ...x } = e, w = we(), y = we(), S = we(), N = l.useRef(null), C = vT();
  an(() => {
    if (m !== void 0) {
      let D = m.trim();
      n.current.value = D, T.emit();
    }
  }, [m]), an(() => {
    C(6, X);
  }, []);
  let T = l.useMemo(() => ({ subscribe: (D) => (a.current.add(D), () => a.current.delete(D)), snapshot: () => n.current, setState: (D, V, K) => {
    var L, Z, j, G;
    if (!Object.is(n.current[D], V)) {
      if (n.current[D] = V, D === "search") W(), _(), C(1, O);
      else if (D === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(S);
          Q ? Q.focus() : (L = document.getElementById(w)) == null || L.focus();
        }
        if (C(7, () => {
          var Q;
          n.current.selectedItemId = (Q = k()) == null ? void 0 : Q.id, T.emit();
        }), K || C(5, X), ((Z = i.current) == null ? void 0 : Z.value) !== void 0) {
          let Q = V ?? "";
          (G = (j = i.current).onValueChange) == null || G.call(j, Q);
          return;
        }
      }
      T.emit();
    }
  }, emit: () => {
    a.current.forEach((D) => D());
  } }), []), E = l.useMemo(() => ({ value: (D, V, K) => {
    var L;
    V !== ((L = s.current.get(D)) == null ? void 0 : L.value) && (s.current.set(D, { value: V, keywords: K }), n.current.filtered.items.set(D, R(V, K)), C(2, () => {
      _(), T.emit();
    }));
  }, item: (D, V) => (r.current.add(D), V && (o.current.has(V) ? o.current.get(V).add(D) : o.current.set(V, /* @__PURE__ */ new Set([D]))), C(3, () => {
    W(), _(), n.current.value || O(), T.emit();
  }), () => {
    s.current.delete(D), r.current.delete(D), n.current.filtered.items.delete(D);
    let K = k();
    C(4, () => {
      W(), K?.getAttribute("id") === D && O(), T.emit();
    });
  }), group: (D) => (o.current.has(D) || o.current.set(D, /* @__PURE__ */ new Set()), () => {
    s.current.delete(D), o.current.delete(D);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: w, inputId: S, labelId: y, listInnerRef: N }), []);
  function R(D, V) {
    var K, L;
    let Z = (L = (K = i.current) == null ? void 0 : K.filter) != null ? L : aT;
    return D ? Z(D, n.current.search, V) : 0;
  }
  function _() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let D = n.current.filtered.items, V = [];
    n.current.filtered.groups.forEach((L) => {
      let Z = o.current.get(L), j = 0;
      Z.forEach((G) => {
        let Q = D.get(G);
        j = Math.max(Q, j);
      }), V.push([L, j]);
    });
    let K = N.current;
    F().sort((L, Z) => {
      var j, G;
      let Q = L.getAttribute("id"), re = Z.getAttribute("id");
      return ((j = D.get(re)) != null ? j : 0) - ((G = D.get(Q)) != null ? G : 0);
    }).forEach((L) => {
      let Z = L.closest(ua);
      Z ? Z.appendChild(L.parentElement === Z ? L : L.closest(`${ua} > *`)) : K.appendChild(L.parentElement === K ? L : L.closest(`${ua} > *`));
    }), V.sort((L, Z) => Z[1] - L[1]).forEach((L) => {
      var Z;
      let j = (Z = N.current) == null ? void 0 : Z.querySelector(`${ir}[${_n}="${encodeURIComponent(L[0])}"]`);
      j?.parentElement.appendChild(j);
    });
  }
  function O() {
    let D = F().find((K) => K.getAttribute("aria-disabled") !== "true"), V = D?.getAttribute(_n);
    T.setState("value", V || void 0);
  }
  function W() {
    var D, V, K, L;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Z = 0;
    for (let j of r.current) {
      let G = (V = (D = s.current.get(j)) == null ? void 0 : D.value) != null ? V : "", Q = (L = (K = s.current.get(j)) == null ? void 0 : K.keywords) != null ? L : [], re = R(G, Q);
      n.current.filtered.items.set(j, re), re > 0 && Z++;
    }
    for (let [j, G] of o.current) for (let Q of G) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(j);
      break;
    }
    n.current.filtered.count = Z;
  }
  function X() {
    var D, V, K;
    let L = k();
    L && (((D = L.parentElement) == null ? void 0 : D.firstChild) === L && ((K = (V = L.closest(ir)) == null ? void 0 : V.querySelector(sT)) == null || K.scrollIntoView({ block: "nearest" })), L.scrollIntoView({ block: "nearest" }));
  }
  function k() {
    var D;
    return (D = N.current) == null ? void 0 : D.querySelector(`${Pf}[aria-selected="true"]`);
  }
  function F() {
    var D;
    return Array.from(((D = N.current) == null ? void 0 : D.querySelectorAll(Dl)) || []);
  }
  function H(D) {
    let V = F()[D];
    V && T.setState("value", V.getAttribute(_n));
  }
  function q(D) {
    var V;
    let K = k(), L = F(), Z = L.findIndex((G) => G === K), j = L[Z + D];
    (V = i.current) != null && V.loop && (j = Z + D < 0 ? L[L.length - 1] : Z + D === L.length ? L[0] : L[Z + D]), j && T.setState("value", j.getAttribute(_n));
  }
  function Y(D) {
    let V = k(), K = V?.closest(ir), L;
    for (; K && !L; ) K = D > 0 ? hT(K, ir) : gT(K, ir), L = K?.querySelector(Dl);
    L ? T.setState("value", L.getAttribute(_n)) : q(D);
  }
  let I = () => H(F().length - 1), M = (D) => {
    D.preventDefault(), D.metaKey ? I() : D.altKey ? Y(1) : q(1);
  }, B = (D) => {
    D.preventDefault(), D.metaKey ? H(0) : D.altKey ? Y(-1) : q(-1);
  };
  return l.createElement($.div, { ref: t, tabIndex: -1, ...x, "cmdk-root": "", onKeyDown: (D) => {
    var V;
    (V = x.onKeyDown) == null || V.call(x, D);
    let K = D.nativeEvent.isComposing || D.keyCode === 229;
    if (!(D.defaultPrevented || K)) switch (D.key) {
      case "n":
      case "j": {
        v && D.ctrlKey && M(D);
        break;
      }
      case "ArrowDown": {
        M(D);
        break;
      }
      case "p":
      case "k": {
        v && D.ctrlKey && B(D);
        break;
      }
      case "ArrowUp": {
        B(D);
        break;
      }
      case "Home": {
        D.preventDefault(), H(0);
        break;
      }
      case "End": {
        D.preventDefault(), I();
        break;
      }
      case "Enter": {
        D.preventDefault();
        let L = k();
        if (L) {
          let Z = new Event(Ma);
          L.dispatchEvent(Z);
        }
      }
    }
  } }, l.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: xT }, c), is(e, (D) => l.createElement(Df.Provider, { value: T }, l.createElement(kf.Provider, { value: E }, D))));
}), iT = l.forwardRef((e, t) => {
  var n, r;
  let o = we(), s = l.useRef(null), a = l.useContext(_f), i = Ir(), c = Af(e), d = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a?.forceMount;
  an(() => {
    if (!d) return i.item(o, a?.id);
  }, [d]);
  let m = If(o, s, [e.value, e.children, s], e.keywords), f = Oi(), p = Ft((C) => C.value && C.value === m.current), b = Ft((C) => d || i.filter() === !1 ? !0 : C.search ? C.filtered.items.get(o) > 0 : !0);
  l.useEffect(() => {
    let C = s.current;
    if (!(!C || e.disabled)) return C.addEventListener(Ma, g), () => C.removeEventListener(Ma, g);
  }, [b, e.onSelect, e.disabled]);
  function g() {
    var C, T;
    h(), (T = (C = c.current).onSelect) == null || T.call(C, m.current);
  }
  function h() {
    f.setState("value", m.current, !0);
  }
  if (!b) return null;
  let { disabled: v, value: x, onSelect: w, forceMount: y, keywords: S, ...N } = e;
  return l.createElement($.div, { ref: Nt(s, t), ...N, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!v, "aria-selected": !!p, "data-disabled": !!v, "data-selected": !!p, onPointerMove: v || i.getDisablePointerSelection() ? void 0 : h, onClick: v ? void 0 : g }, e.children);
}), cT = l.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = we(), i = l.useRef(null), c = l.useRef(null), d = we(), m = Ir(), f = Ft((b) => o || m.filter() === !1 ? !0 : b.search ? b.filtered.groups.has(a) : !0);
  an(() => m.group(a), []), If(a, i, [e.value, e.heading, c]);
  let p = l.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return l.createElement($.div, { ref: Nt(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && l.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), is(e, (b) => l.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, l.createElement(_f.Provider, { value: p }, b))));
}), lT = l.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = l.useRef(null), s = Ft((a) => !a.search);
  return !n && !s ? null : l.createElement($.div, { ref: Nt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), uT = l.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Oi(), a = Ft((d) => d.search), i = Ft((d) => d.selectedItemId), c = Ir();
  return l.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), l.createElement($.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (d) => {
    o || s.setState("search", d.target.value), n?.(d.target.value);
  } });
}), dT = l.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = l.useRef(null), a = l.useRef(null), i = Ft((d) => d.selectedItemId), c = Ir();
  return l.useEffect(() => {
    if (a.current && s.current) {
      let d = a.current, m = s.current, f, p = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let b = d.offsetHeight;
          m.style.setProperty("--cmdk-list-height", b.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(f), p.unobserve(d);
      };
    }
  }, []), l.createElement($.div, { ref: Nt(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, is(e, (d) => l.createElement("div", { ref: Nt(a, c.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), fT = l.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return l.createElement(Mr, { open: n, onOpenChange: r }, l.createElement(Pr, { container: a }, l.createElement(pn, { "cmdk-overlay": "", className: o }), l.createElement(hn, { "aria-label": e.label, "cmdk-dialog": "", className: s }, l.createElement(Of, { ref: t, ...i }))));
}), mT = l.forwardRef((e, t) => Ft((n) => n.filtered.count === 0) ? l.createElement($.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), pT = l.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return l.createElement($.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, is(e, (a) => l.createElement("div", { "aria-hidden": !0 }, a)));
}), Fe = Object.assign(Of, { List: dT, Item: iT, Input: uT, Group: cT, Separator: lT, Dialog: fT, Empty: mT, Loading: pT });
function hT(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function gT(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Af(e) {
  let t = l.useRef(e);
  return an(() => {
    t.current = e;
  }), t;
}
var an = typeof window > "u" ? l.useEffect : l.useLayoutEffect;
function On(e) {
  let t = l.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ft(e) {
  let t = Oi(), n = () => e(t.snapshot());
  return l.useSyncExternalStore(t.subscribe, n, n);
}
function If(e, t, n, r = []) {
  let o = l.useRef(), s = Ir();
  return an(() => {
    var a;
    let i = (() => {
      var d;
      for (let m of n) {
        if (typeof m == "string") return m.trim();
        if (typeof m == "object" && "current" in m) return m.current ? (d = m.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), c = r.map((d) => d.trim());
    s.value(e, i, c), (a = t.current) == null || a.setAttribute(_n, i), o.current = i;
  }), o;
}
var vT = () => {
  let [e, t] = l.useState(), n = On(() => /* @__PURE__ */ new Map());
  return an(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function bT(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function is({ asChild: e, children: t }, n) {
  return e && l.isValidElement(t) ? l.cloneElement(bT(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var xT = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const jr = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Fe,
  {
    ref: n,
    className: P(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
jr.displayName = Fe.displayName;
const wO = ({ children: e, ...t }) => /* @__PURE__ */ u.jsx(lM, { ...t, children: /* @__PURE__ */ u.jsx(ym, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ u.jsx(jr, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), cs = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ u.jsx(Ev, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ u.jsx(
    Fe.Input,
    {
      ref: n,
      className: P(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
cs.displayName = Fe.Input.displayName;
const ls = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Fe.List,
  {
    ref: n,
    className: P("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
ls.displayName = Fe.List.displayName;
const us = l.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  Fe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
us.displayName = Fe.Empty.displayName;
const Fr = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Fe.Group,
  {
    ref: n,
    className: P(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Fr.displayName = Fe.Group.displayName;
const jf = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Fe.Separator,
  {
    ref: n,
    className: P("-mx-1 h-px bg-border", e),
    ...t
  }
));
jf.displayName = Fe.Separator.displayName;
const nn = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Fe.Item,
  {
    ref: n,
    className: P(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
nn.displayName = Fe.Item.displayName;
const wT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: P(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
wT.displayName = "CommandShortcut";
const yT = ["top", "right", "bottom", "left"], Lt = Math.min, $e = Math.max, Do = Math.round, fo = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), CT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pa(e, t, n) {
  return $e(e, Lt(t, n));
}
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rt(e) {
  return e.split("-")[0];
}
function Un(e) {
  return e.split("-")[1];
}
function Ai(e) {
  return e === "x" ? "y" : "x";
}
function Ii(e) {
  return e === "y" ? "height" : "width";
}
function dt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ji(e) {
  return Ai(dt(e));
}
function ST(e, t, n) {
  n === void 0 && (n = !1);
  const r = Un(e), o = ji(e), s = Ii(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = _o(a)), [a, _o(a)];
}
function NT(e) {
  const t = _o(e);
  return [ka(e), t, ka(t)];
}
function ka(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const _l = ["left", "right"], Ol = ["right", "left"], ET = ["top", "bottom"], TT = ["bottom", "top"];
function RT(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ol : _l : t ? _l : Ol;
    case "left":
    case "right":
      return t ? ET : TT;
    default:
      return [];
  }
}
function MT(e, t, n, r) {
  const o = Un(e);
  let s = RT(Rt(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(ka)))), s;
}
function _o(e) {
  const t = Rt(e);
  return CT[t] + e.slice(t.length);
}
function PT(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ff(e) {
  return typeof e != "number" ? PT(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Oo(e) {
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
function Al(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = dt(t), a = ji(t), i = Ii(a), c = Rt(t), d = s === "y", m = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let b;
  switch (c) {
    case "top":
      b = {
        x: m,
        y: r.y - o.height
      };
      break;
    case "bottom":
      b = {
        x: m,
        y: r.y + r.height
      };
      break;
    case "right":
      b = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      b = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      b = {
        x: r.x,
        y: r.y
      };
  }
  switch (Un(t)) {
    case "start":
      b[a] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      b[a] += p * (n && d ? -1 : 1);
      break;
  }
  return b;
}
async function kT(e, t) {
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
    rootBoundary: m = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: b = 0
  } = Tt(t, e), g = Ff(b), v = i[p ? f === "floating" ? "reference" : "floating" : f], x = Oo(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: m,
    strategy: c
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Oo(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: y,
    strategy: c
  }) : w);
  return {
    top: (x.top - N.top + g.top) / S.y,
    bottom: (N.bottom - x.bottom + g.bottom) / S.y,
    left: (x.left - N.left + g.left) / S.x,
    right: (N.right - x.right + g.right) / S.x
  };
}
const DT = 50, _T = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = a.detectOverflow ? a : {
    ...a,
    detectOverflow: kT
  }, c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: f
  } = Al(d, r, c), p = r, b = 0;
  const g = {};
  for (let h = 0; h < s.length; h++) {
    const v = s[h];
    if (!v)
      continue;
    const {
      name: x,
      fn: w
    } = v, {
      x: y,
      y: S,
      data: N,
      reset: C
    } = await w({
      x: m,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: g,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = y ?? m, f = S ?? f, g[x] = {
      ...g[x],
      ...N
    }, C && b < DT && (b++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: m,
      y: f
    } = Al(d, p, c)), h = -1);
  }
  return {
    x: m,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: g
  };
}, OT = (e) => ({
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
      padding: m = 0
    } = Tt(e, t) || {};
    if (d == null)
      return {};
    const f = Ff(m), p = {
      x: n,
      y: r
    }, b = ji(o), g = Ii(b), h = await a.getDimensions(d), v = b === "y", x = v ? "top" : "left", w = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", S = s.reference[g] + s.reference[b] - p[b] - s.floating[g], N = p[b] - s.reference[b], C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let T = C ? C[y] : 0;
    (!T || !await (a.isElement == null ? void 0 : a.isElement(C))) && (T = i.floating[y] || s.floating[g]);
    const E = S / 2 - N / 2, R = T / 2 - h[g] / 2 - 1, _ = Lt(f[x], R), O = Lt(f[w], R), W = _, X = T - h[g] - O, k = T / 2 - h[g] / 2 + E, F = Pa(W, k, X), H = !c.arrow && Un(o) != null && k !== F && s.reference[g] / 2 - (k < W ? _ : O) - h[g] / 2 < 0, q = H ? k < W ? k - W : k - X : 0;
    return {
      [b]: p[b] + q,
      data: {
        [b]: F,
        centerOffset: k - F - q,
        ...H && {
          alignmentOffset: q
        }
      },
      reset: H
    };
  }
}), AT = function(e) {
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
        mainAxis: m = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ...v
      } = Tt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = Rt(o), w = dt(i), y = Rt(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), N = p || (y || !h ? [_o(i)] : NT(i)), C = g !== "none";
      !p && C && N.push(...MT(i, h, g, S));
      const T = [i, ...N], E = await c.detectOverflow(t, v), R = [];
      let _ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (m && R.push(E[x]), f) {
        const k = ST(o, a, S);
        R.push(E[k[0]], E[k[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: R
      }], !R.every((k) => k <= 0)) {
        var O, W;
        const k = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, F = T[k];
        if (F && (!(f === "alignment" ? w !== dt(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every((Y) => dt(Y.placement) === w ? Y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: k,
              overflows: _
            },
            reset: {
              placement: F
            }
          };
        let H = (W = _.filter((q) => q.overflows[0] <= 0).sort((q, Y) => q.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!H)
          switch (b) {
            case "bestFit": {
              var X;
              const q = (X = _.filter((Y) => {
                if (C) {
                  const I = dt(Y.placement);
                  return I === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((I) => I > 0).reduce((I, M) => I + M, 0)]).sort((Y, I) => Y[1] - I[1])[0]) == null ? void 0 : X[0];
              q && (H = q);
              break;
            }
            case "initialPlacement":
              H = i;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function Il(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jl(e) {
  return yT.some((t) => e[t] >= 0);
}
const IT = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Tt(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), i = Il(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: jl(i)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), i = Il(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: jl(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Lf = /* @__PURE__ */ new Set(["left", "top"]);
async function jT(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Rt(n), i = Un(n), c = dt(n) === "y", d = Lf.has(a) ? -1 : 1, m = s && c ? -1 : 1, f = Tt(t, e);
  let {
    mainAxis: p,
    crossAxis: b,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof g == "number" && (b = i === "end" ? g * -1 : g), c ? {
    x: b * m,
    y: p * d
  } : {
    x: p * d,
    y: b * m
  };
}
const FT = function(e) {
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
      } = t, c = await jT(t, e);
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
}, LT = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: w,
              y
            } = x;
            return {
              x: w,
              y
            };
          }
        },
        ...d
      } = Tt(e, t), m = {
        x: n,
        y: r
      }, f = await s.detectOverflow(t, d), p = dt(Rt(o)), b = Ai(p);
      let g = m[b], h = m[p];
      if (a) {
        const x = b === "y" ? "top" : "left", w = b === "y" ? "bottom" : "right", y = g + f[x], S = g - f[w];
        g = Pa(y, g, S);
      }
      if (i) {
        const x = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = h + f[x], S = h - f[w];
        h = Pa(y, h, S);
      }
      const v = c.fn({
        ...t,
        [b]: g,
        [p]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [b]: a,
            [p]: i
          }
        }
      };
    }
  };
}, $T = function(e) {
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
      } = Tt(e, t), m = {
        x: n,
        y: r
      }, f = dt(o), p = Ai(f);
      let b = m[p], g = m[f];
      const h = Tt(i, t), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const y = p === "y" ? "height" : "width", S = s.reference[p] - s.floating[y] + v.mainAxis, N = s.reference[p] + s.reference[y] - v.mainAxis;
        b < S ? b = S : b > N && (b = N);
      }
      if (d) {
        var x, w;
        const y = p === "y" ? "width" : "height", S = Lf.has(Rt(o)), N = s.reference[f] - s.floating[y] + (S && ((x = a.offset) == null ? void 0 : x[f]) || 0) + (S ? 0 : v.crossAxis), C = s.reference[f] + s.reference[y] + (S ? 0 : ((w = a.offset) == null ? void 0 : w[f]) || 0) - (S ? v.crossAxis : 0);
        g < N ? g = N : g > C && (g = C);
      }
      return {
        [p]: b,
        [f]: g
      };
    }
  };
}, WT = function(e) {
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
      } = Tt(e, t), m = await a.detectOverflow(t, d), f = Rt(o), p = Un(o), b = dt(o) === "y", {
        width: g,
        height: h
      } = s.floating;
      let v, x;
      f === "top" || f === "bottom" ? (v = f, x = p === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = f, v = p === "end" ? "top" : "bottom");
      const w = h - m.top - m.bottom, y = g - m.left - m.right, S = Lt(h - m[v], w), N = Lt(g - m[x], y), C = !t.middlewareData.shift;
      let T = S, E = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = y), (r = t.middlewareData.shift) != null && r.enabled.y && (T = w), C && !p) {
        const _ = $e(m.left, 0), O = $e(m.right, 0), W = $e(m.top, 0), X = $e(m.bottom, 0);
        b ? E = g - 2 * (_ !== 0 || O !== 0 ? _ + O : $e(m.left, m.right)) : T = h - 2 * (W !== 0 || X !== 0 ? W + X : $e(m.top, m.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: T
      });
      const R = await a.getDimensions(i.floating);
      return g !== R.width || h !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ds() {
  return typeof window < "u";
}
function qn(e) {
  return $f(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function We(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ht(e) {
  var t;
  return (t = ($f(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $f(e) {
  return ds() ? e instanceof Node || e instanceof We(e).Node : !1;
}
function Qe(e) {
  return ds() ? e instanceof Element || e instanceof We(e).Element : !1;
}
function kt(e) {
  return ds() ? e instanceof HTMLElement || e instanceof We(e).HTMLElement : !1;
}
function Fl(e) {
  return !ds() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof We(e).ShadowRoot;
}
function Lr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function BT(e) {
  return /^(table|td|th)$/.test(qn(e));
}
function fs(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const HT = /transform|translate|scale|rotate|perspective|filter/, VT = /paint|layout|strict|content/, Zt = (e) => !!e && e !== "none";
let da;
function Fi(e) {
  const t = Qe(e) ? Ze(e) : e;
  return Zt(t.transform) || Zt(t.translate) || Zt(t.scale) || Zt(t.rotate) || Zt(t.perspective) || !Li() && (Zt(t.backdropFilter) || Zt(t.filter)) || HT.test(t.willChange || "") || VT.test(t.contain || "");
}
function YT(e) {
  let t = $t(e);
  for (; kt(t) && !$n(t); ) {
    if (Fi(t))
      return t;
    if (fs(t))
      return null;
    t = $t(t);
  }
  return null;
}
function Li() {
  return da == null && (da = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), da;
}
function $n(e) {
  return /^(html|body|#document)$/.test(qn(e));
}
function Ze(e) {
  return We(e).getComputedStyle(e);
}
function ms(e) {
  return Qe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function $t(e) {
  if (qn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fl(e) && e.host || // Fallback.
    ht(e)
  );
  return Fl(t) ? t.host : t;
}
function Wf(e) {
  const t = $t(e);
  return $n(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : kt(t) && Lr(t) ? t : Wf(t);
}
function yr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Wf(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = We(o);
  if (s) {
    const i = Da(a);
    return t.concat(a, a.visualViewport || [], Lr(o) ? o : [], i && n ? yr(i) : []);
  } else
    return t.concat(o, yr(o, [], n));
}
function Da(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Bf(e) {
  const t = Ze(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = kt(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = Do(n) !== s || Do(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function $i(e) {
  return Qe(e) ? e : e.contextElement;
}
function jn(e) {
  const t = $i(e);
  if (!kt(t))
    return ft(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Bf(t);
  let a = (s ? Do(n.width) : n.width) / r, i = (s ? Do(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const zT = /* @__PURE__ */ ft(0);
function Hf(e) {
  const t = We(e);
  return !Li() || !t.visualViewport ? zT : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function GT(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== We(e) ? !1 : t;
}
function cn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = $i(e);
  let a = ft(1);
  t && (r ? Qe(r) && (a = jn(r)) : a = jn(e));
  const i = GT(s, n, r) ? Hf(s) : ft(0);
  let c = (o.left + i.x) / a.x, d = (o.top + i.y) / a.y, m = o.width / a.x, f = o.height / a.y;
  if (s) {
    const p = We(s), b = r && Qe(r) ? We(r) : r;
    let g = p, h = Da(g);
    for (; h && r && b !== g; ) {
      const v = jn(h), x = h.getBoundingClientRect(), w = Ze(h), y = x.left + (h.clientLeft + parseFloat(w.paddingLeft)) * v.x, S = x.top + (h.clientTop + parseFloat(w.paddingTop)) * v.y;
      c *= v.x, d *= v.y, m *= v.x, f *= v.y, c += y, d += S, g = We(h), h = Da(g);
    }
  }
  return Oo({
    width: m,
    height: f,
    x: c,
    y: d
  });
}
function ps(e, t) {
  const n = ms(e).scrollLeft;
  return t ? t.left + n : cn(ht(e)).left + n;
}
function Vf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ps(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function KT(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = ht(r), i = t ? fs(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ft(1);
  const m = ft(0), f = kt(r);
  if ((f || !f && !s) && ((qn(r) !== "body" || Lr(a)) && (c = ms(r)), f)) {
    const b = cn(r);
    d = jn(r), m.x = b.x + r.clientLeft, m.y = b.y + r.clientTop;
  }
  const p = a && !f && !s ? Vf(a, c) : ft(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + m.x + p.x,
    y: n.y * d.y - c.scrollTop * d.y + m.y + p.y
  };
}
function UT(e) {
  return Array.from(e.getClientRects());
}
function qT(e) {
  const t = ht(e), n = ms(e), r = e.ownerDocument.body, o = $e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = $e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ps(e);
  const i = -n.scrollTop;
  return Ze(r).direction === "rtl" && (a += $e(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const Ll = 25;
function XT(e, t) {
  const n = We(e), r = ht(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const m = Li();
    (!m || m && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const d = ps(r);
  if (d <= 0) {
    const m = r.ownerDocument, f = m.body, p = getComputedStyle(f), b = m.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - b);
    g <= Ll && (s -= g);
  } else d <= Ll && (s += d);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
function QT(e, t) {
  const n = cn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = kt(e) ? jn(e) : ft(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, d = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: d
  };
}
function $l(e, t, n) {
  let r;
  if (t === "viewport")
    r = XT(e, n);
  else if (t === "document")
    r = qT(ht(e));
  else if (Qe(t))
    r = QT(t, n);
  else {
    const o = Hf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Oo(r);
}
function Yf(e, t) {
  const n = $t(e);
  return n === t || !Qe(n) || $n(n) ? !1 : Ze(n).position === "fixed" || Yf(n, t);
}
function ZT(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = yr(e, [], !1).filter((i) => Qe(i) && qn(i) !== "body"), o = null;
  const s = Ze(e).position === "fixed";
  let a = s ? $t(e) : e;
  for (; Qe(a) && !$n(a); ) {
    const i = Ze(a), c = Fi(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Lr(a) && !c && Yf(e, a)) ? r = r.filter((m) => m !== a) : o = i, a = $t(a);
  }
  return t.set(e, r), r;
}
function JT(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? fs(t) ? [] : ZT(t, this._c) : [].concat(n), r], i = $l(t, a[0], o);
  let c = i.top, d = i.right, m = i.bottom, f = i.left;
  for (let p = 1; p < a.length; p++) {
    const b = $l(t, a[p], o);
    c = $e(b.top, c), d = Lt(b.right, d), m = Lt(b.bottom, m), f = $e(b.left, f);
  }
  return {
    width: d - f,
    height: m - c,
    x: f,
    y: c
  };
}
function eR(e) {
  const {
    width: t,
    height: n
  } = Bf(e);
  return {
    width: t,
    height: n
  };
}
function tR(e, t, n) {
  const r = kt(t), o = ht(t), s = n === "fixed", a = cn(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ft(0);
  function d() {
    c.x = ps(o);
  }
  if (r || !r && !s)
    if ((qn(t) !== "body" || Lr(o)) && (i = ms(t)), r) {
      const b = cn(t, !0, s, t);
      c.x = b.x + t.clientLeft, c.y = b.y + t.clientTop;
    } else o && d();
  s && !r && o && d();
  const m = o && !r && !s ? Vf(o, i) : ft(0), f = a.left + i.scrollLeft - c.x - m.x, p = a.top + i.scrollTop - c.y - m.y;
  return {
    x: f,
    y: p,
    width: a.width,
    height: a.height
  };
}
function fa(e) {
  return Ze(e).position === "static";
}
function Wl(e, t) {
  if (!kt(e) || Ze(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ht(e) === n && (n = n.ownerDocument.body), n;
}
function zf(e, t) {
  const n = We(e);
  if (fs(e))
    return n;
  if (!kt(e)) {
    let o = $t(e);
    for (; o && !$n(o); ) {
      if (Qe(o) && !fa(o))
        return o;
      o = $t(o);
    }
    return n;
  }
  let r = Wl(e, t);
  for (; r && BT(r) && fa(r); )
    r = Wl(r, t);
  return r && $n(r) && fa(r) && !Fi(r) ? n : r || YT(e) || n;
}
const nR = async function(e) {
  const t = this.getOffsetParent || zf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: tR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function rR(e) {
  return Ze(e).direction === "rtl";
}
const oR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: KT,
  getDocumentElement: ht,
  getClippingRect: JT,
  getOffsetParent: zf,
  getElementRects: nR,
  getClientRects: UT,
  getDimensions: eR,
  getScale: jn,
  isElement: Qe,
  isRTL: rR
};
function Gf(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sR(e, t) {
  let n = null, r;
  const o = ht(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const d = e.getBoundingClientRect(), {
      left: m,
      top: f,
      width: p,
      height: b
    } = d;
    if (i || t(), !p || !b)
      return;
    const g = fo(f), h = fo(o.clientWidth - (m + p)), v = fo(o.clientHeight - (f + b)), x = fo(m), y = {
      rootMargin: -g + "px " + -h + "px " + -v + "px " + -x + "px",
      threshold: $e(0, Lt(1, c)) || 1
    };
    let S = !0;
    function N(C) {
      const T = C[0].intersectionRatio;
      if (T !== c) {
        if (!S)
          return a();
        T ? a(!1, T) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !Gf(d, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, y);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function aR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = $i(e), m = o || s ? [...d ? yr(d) : [], ...t ? yr(t) : []] : [];
  m.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const f = d && i ? sR(d, n) : null;
  let p = -1, b = null;
  a && (b = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === d && b && t && (b.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = b) == null || y.observe(t);
    })), n();
  }), d && !c && b.observe(d), t && b.observe(t));
  let g, h = c ? cn(e) : null;
  c && v();
  function v() {
    const x = cn(e);
    h && !Gf(h, x) && n(), h = x, g = requestAnimationFrame(v);
  }
  return n(), () => {
    var x;
    m.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), f?.(), (x = b) == null || x.disconnect(), b = null, c && cancelAnimationFrame(g);
  };
}
const iR = FT, cR = LT, lR = AT, uR = WT, dR = IT, Bl = OT, fR = $T, mR = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: oR,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return _T(e, t, {
    ...o,
    platform: s
  });
};
var pR = typeof document < "u", hR = function() {
}, xo = pR ? nu : hR;
function Ao(e, t) {
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
        if (!Ao(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !Ao(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Kf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Hl(e, t) {
  const n = Kf(e);
  return Math.round(t * n) / n;
}
function ma(e) {
  const t = l.useRef(e);
  return xo(() => {
    t.current = e;
  }), t;
}
function gR(e) {
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
  } = e, [m, f] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, b] = l.useState(r);
  Ao(p, r) || b(r);
  const [g, h] = l.useState(null), [v, x] = l.useState(null), w = l.useCallback((Y) => {
    Y !== C.current && (C.current = Y, h(Y));
  }, []), y = l.useCallback((Y) => {
    Y !== T.current && (T.current = Y, x(Y));
  }, []), S = s || g, N = a || v, C = l.useRef(null), T = l.useRef(null), E = l.useRef(m), R = c != null, _ = ma(c), O = ma(o), W = ma(d), X = l.useCallback(() => {
    if (!C.current || !T.current)
      return;
    const Y = {
      placement: t,
      strategy: n,
      middleware: p
    };
    O.current && (Y.platform = O.current), mR(C.current, T.current, Y).then((I) => {
      const M = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      k.current && !Ao(E.current, M) && (E.current = M, un.flushSync(() => {
        f(M);
      }));
    });
  }, [p, t, n, O, W]);
  xo(() => {
    d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [d]);
  const k = l.useRef(!1);
  xo(() => (k.current = !0, () => {
    k.current = !1;
  }), []), xo(() => {
    if (S && (C.current = S), N && (T.current = N), S && N) {
      if (_.current)
        return _.current(S, N, X);
      X();
    }
  }, [S, N, X, _, R]);
  const F = l.useMemo(() => ({
    reference: C,
    floating: T,
    setReference: w,
    setFloating: y
  }), [w, y]), H = l.useMemo(() => ({
    reference: S,
    floating: N
  }), [S, N]), q = l.useMemo(() => {
    const Y = {
      position: n,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return Y;
    const I = Hl(H.floating, m.x), M = Hl(H.floating, m.y);
    return i ? {
      ...Y,
      transform: "translate(" + I + "px, " + M + "px)",
      ...Kf(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: M
    };
  }, [n, i, H.floating, m.x, m.y]);
  return l.useMemo(() => ({
    ...m,
    update: X,
    refs: F,
    elements: H,
    floatingStyles: q
  }), [m, X, F, H, q]);
}
const vR = (e) => {
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
      return r && t(r) ? r.current != null ? Bl({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Bl({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, bR = (e, t) => {
  const n = iR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, xR = (e, t) => {
  const n = cR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, wR = (e, t) => ({
  fn: fR(e).fn,
  options: [e, t]
}), yR = (e, t) => {
  const n = lR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, CR = (e, t) => {
  const n = uR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, SR = (e, t) => {
  const n = dR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, NR = (e, t) => {
  const n = vR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var ER = "Arrow", Uf = l.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ u.jsx(
    $.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Uf.displayName = ER;
var TR = Uf, Wi = "Popper", [qf, Vt] = Te(Wi), [RR, Xf] = qf(Wi), Qf = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = l.useState(null), [s, a] = l.useState(void 0);
  return /* @__PURE__ */ u.jsx(
    RR,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: s,
      setPlacementState: a,
      children: n
    }
  );
};
Qf.displayName = Wi;
var Zf = "PopperAnchor", Jf = l.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Xf(Zf, n), a = l.useRef(null), i = s.onAnchorChange, c = l.useCallback(
      (g) => {
        a.current = g, g && i(g);
      },
      [i]
    ), d = oe(t, c), m = l.useRef(null);
    l.useEffect(() => {
      if (!r)
        return;
      const g = m.current;
      m.current = r.current, g !== m.current && i(m.current);
    });
    const f = s.placementState && Hi(s.placementState), p = f?.[0], b = f?.[1];
    return r ? null : /* @__PURE__ */ u.jsx(
      $.div,
      {
        "data-radix-popper-side": p,
        "data-radix-popper-align": b,
        ...o,
        ref: d
      }
    );
  }
);
Jf.displayName = Zf;
var Bi = "PopperContent", [MR, PR] = qf(Bi), em = l.forwardRef(
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
      collisionPadding: m = 0,
      sticky: f = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: g,
      ...h
    } = e, v = Xf(Bi, n), [x, w] = l.useState(null), y = oe(t, (G) => w(G)), [S, N] = l.useState(null), C = ss(S), T = C?.width ?? 0, E = C?.height ?? 0, R = r + (s !== "center" ? "-" + s : ""), _ = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, O = Array.isArray(d) ? d : [d], W = O.length > 0, X = {
      padding: _,
      boundary: O.filter(DR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: k, floatingStyles: F, placement: H, isPositioned: q, middlewareData: Y } = gR({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...G) => aR(...G, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        bR({ mainAxis: o + E, alignmentAxis: a }),
        c && xR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? wR() : void 0,
          ...X
        }),
        c && yR({ ...X }),
        CR({
          ...X,
          apply: ({ elements: G, rects: Q, availableWidth: re, availableHeight: te }) => {
            const { width: z, height: ie } = Q.reference, ce = G.floating.style;
            ce.setProperty("--radix-popper-available-width", `${re}px`), ce.setProperty("--radix-popper-available-height", `${te}px`), ce.setProperty("--radix-popper-anchor-width", `${z}px`), ce.setProperty("--radix-popper-anchor-height", `${ie}px`);
          }
        }),
        S && NR({ element: S, padding: i }),
        _R({ arrowWidth: T, arrowHeight: E }),
        p && SR({
          strategy: "referenceHidden",
          ...X,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: W ? X.boundary : void 0
        })
      ]
    }), I = v.setPlacementState;
    xe(() => (I(H), () => {
      I(void 0);
    }), [H, I]);
    const [M, B] = Hi(H), D = he(g);
    xe(() => {
      q && D?.();
    }, [q, D]);
    const V = Y.arrow?.x, K = Y.arrow?.y, L = Y.arrow?.centerOffset !== 0, [Z, j] = l.useState();
    return xe(() => {
      x && j(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: q ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            Y.transformOrigin?.x,
            Y.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...Y.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          MR,
          {
            scope: n,
            placedSide: M,
            placedAlign: B,
            onArrowChange: N,
            arrowX: V,
            arrowY: K,
            shouldHideArrow: L,
            children: /* @__PURE__ */ u.jsx(
              $.div,
              {
                "data-side": M,
                "data-align": B,
                ...h,
                ref: y,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: q ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
em.displayName = Bi;
var tm = "PopperArrow", kR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, nm = l.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = PR(tm, r), a = kR[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
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
        children: /* @__PURE__ */ u.jsx(
          TR,
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
nm.displayName = tm;
function DR(e) {
  return e !== null;
}
var _R = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [d, m] = Hi(n), f = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + i / 2, b = (o.arrow?.y ?? 0) + c / 2;
    let g = "", h = "";
    return d === "bottom" ? (g = a ? f : `${p}px`, h = `${-c}px`) : d === "top" ? (g = a ? f : `${p}px`, h = `${r.floating.height + c}px`) : d === "right" ? (g = `${-c}px`, h = a ? f : `${b}px`) : d === "left" && (g = `${r.floating.width + c}px`, h = a ? f : `${b}px`), { data: { x: g, y: h } };
  }
});
function Hi(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var $r = Qf, Wr = Jf, hs = em, gs = nm, vs = "Popover", [rm] = Te(vs, [
  Vt
]), Br = Vt(), [OR, Yt] = rm(vs), om = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = Br(t), c = l.useRef(null), [d, m] = l.useState(!1), [f, p] = Pe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: vs
  });
  return /* @__PURE__ */ u.jsx($r, { ...i, children: /* @__PURE__ */ u.jsx(
    OR,
    {
      scope: t,
      contentId: we(),
      triggerRef: c,
      open: f,
      onOpenChange: p,
      onOpenToggle: l.useCallback(() => p((b) => !b), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: l.useCallback(() => m(!0), []),
      onCustomAnchorRemove: l.useCallback(() => m(!1), []),
      modal: a,
      children: n
    }
  ) });
};
om.displayName = vs;
var sm = "PopoverAnchor", AR = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Yt(sm, n), s = Br(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return l.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ u.jsx(Wr, { ...s, ...r, ref: t });
  }
);
AR.displayName = sm;
var am = "PopoverTrigger", im = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Yt(am, n), s = Br(n), a = oe(t, o.triggerRef), i = /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": fm(o.open),
        ...r,
        ref: a,
        onClick: A(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ u.jsx(Wr, { asChild: !0, ...s, children: i });
  }
);
im.displayName = am;
var Vi = "PopoverPortal", [IR, jR] = rm(Vi, {
  forceMount: void 0
}), cm = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = Yt(Vi, t);
  return /* @__PURE__ */ u.jsx(IR, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(be, { present: n || s.open, children: /* @__PURE__ */ u.jsx(mn, { asChild: !0, container: o, children: r }) }) });
};
cm.displayName = Vi;
var Wn = "PopoverContent", lm = l.forwardRef(
  (e, t) => {
    const n = jR(Wn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = Yt(Wn, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(be, { present: r || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(LR, { ...o, ref: t }) : /* @__PURE__ */ u.jsx($R, { ...o, ref: t }) });
  }
);
lm.displayName = Wn;
var FR = /* @__PURE__ */ jt("PopoverContent.RemoveScroll"), LR = l.forwardRef(
  (e, t) => {
    const n = Yt(Wn, e.__scopePopover), r = l.useRef(null), o = oe(t, r), s = l.useRef(!1);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return Xo(a);
    }, []), /* @__PURE__ */ u.jsx(Rr, { as: FR, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      um,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: A(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || c;
            s.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: A(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), $R = l.forwardRef(
  (e, t) => {
    const n = Yt(Wn, e.__scopePopover), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      um,
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
), um = l.forwardRef(
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
      onInteractOutside: m,
      ...f
    } = e, p = Yt(Wn, n), b = Br(n);
    return Uo(), /* @__PURE__ */ u.jsx(
      Tr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ u.jsx(
          Ht,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: m,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ u.jsx(
              hs,
              {
                "data-state": fm(p.open),
                role: "dialog",
                id: p.contentId,
                ...b,
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
), dm = "PopoverClose", WR = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Yt(dm, n);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
WR.displayName = dm;
var BR = "PopoverArrow", HR = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Br(n);
    return /* @__PURE__ */ u.jsx(gs, { ...o, ...r, ref: t });
  }
);
HR.displayName = BR;
function fm(e) {
  return e ? "open" : "closed";
}
var VR = om, YR = im, zR = cm, mm = lm;
const Hr = VR, Vr = YR, Xn = l.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(zR, { children: /* @__PURE__ */ u.jsx(
  mm,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: P(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Xn.displayName = mm.displayName;
function GR(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let r = 0; r < t.length && r < 8; r++)
    (r === 2 || r === 4) && (n += "/"), n += t[r];
  return n;
}
function KR(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let r = 0; r < t.length && r < 16; r++)
    (r === 2 || r === 4) && (n += "/"), r === 8 && (n += " - "), (r === 10 || r === 12) && (n += "/"), n += t[r];
  return n;
}
function Io(e) {
  if (e.length < 10) return null;
  const t = Gd(e.slice(0, 10), "dd/MM/yyyy", /* @__PURE__ */ new Date());
  return gi(t) ? t : null;
}
function Vl(e) {
  const t = e.split(" - "), n = Io(t[0] ?? "");
  if (!n) return null;
  const r = t[1] ? Io(t[1]) : void 0;
  return { from: n, to: r ?? void 0 };
}
function mo(e) {
  return tn(e, "dd/MM/yyyy");
}
function po(e, t) {
  if (!e) return "";
  if (t === "range") {
    const n = e;
    return n.from ? n.to ? `${mo(n.from)} - ${mo(n.to)}` : mo(n.from) : "";
  }
  return mo(e);
}
function Yl(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function yO({
  value: e,
  onChange: t,
  disabled: n,
  disabledDates: r,
  mode: o = "single",
  ...s
}) {
  const [a, i] = l.useState(e), [c, d] = l.useState(
    Yl(e)
  ), [m, f] = l.useState(
    po(e, o)
  ), [p, b] = l.useState(!1), g = l.useRef(null), h = l.useRef(
    po(e, o)
  ), v = l.useRef(!1);
  l.useEffect(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    const N = po(e, o);
    i(e), f(N), h.current = N;
    const C = Yl(e);
    C && d(C);
  }, [e]);
  function x(N) {
    v.current = !0;
    const C = po(N, o);
    i(N), f(C), h.current = C, t?.(N), o !== "range" && b(!1);
  }
  function w(N) {
    const C = N.target.value;
    if (C.replace(/\D/g, "") === "") {
      f(""), h.current = "", v.current = !0, i(void 0), d(void 0), t?.(void 0);
      return;
    }
    const T = N.target.selectionStart ?? C.length, E = C.slice(0, T).replace(/\D/g, "").length, R = o === "range" ? KR(C) : GR(C);
    if (f(R), requestAnimationFrame(() => {
      if (g.current) {
        let _ = 0, O = R.length;
        for (let W = 0; W < R.length; W++)
          if (/\d/.test(R[W]) && _++, _ === E) {
            O = W + 1;
            break;
          }
        g.current.setSelectionRange(O, O);
      }
    }), o === "range") {
      const _ = Vl(R);
      _ && (v.current = !0, i(_), h.current = R, _.from && d(_.from), t?.(_));
    } else {
      const _ = Io(R);
      _ && (v.current = !0, i(_), d(_), h.current = R, t?.(_));
    }
  }
  function y() {
    !(o === "range" ? Vl(m) !== null : Io(m) !== null) && m !== "" && f(h.current);
  }
  const S = o === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ u.jsxs(Hr, { open: p, onOpenChange: b, children: [
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: P(
          "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
          n && "cursor-not-allowed opacity-50"
        ),
        children: [
          /* @__PURE__ */ u.jsx(
            "input",
            {
              ref: g,
              value: m,
              onChange: w,
              onBlur: y,
              placeholder: S,
              disabled: n,
              className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
            }
          ),
          /* @__PURE__ */ u.jsx(Vr, { asChild: !0, disabled: n, children: /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              disabled: n,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ u.jsx(Tv, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(Xn, { className: "w-auto p-0", children: /* @__PURE__ */ u.jsx(
      pf,
      {
        mode: o,
        selected: a,
        onSelect: x,
        disabled: r,
        month: c,
        onMonthChange: d,
        ...s
      }
    ) })
  ] });
}
function UR(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function qR(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function XR(e) {
  return /^[0-5][0-9]$/.test(e);
}
function bs(e, { max: t, min: n = 0, loop: r = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (r ? (o > t && (o = n), o < n && (o = t)) : (o > t && (o = t), o < n && (o = n)), o.toString().padStart(2, "0"));
}
function pm(e) {
  return UR(e) ? e : bs(e, { max: 23 });
}
function hm(e) {
  return qR(e) ? e : bs(e, { min: 1, max: 12 });
}
function jo(e) {
  return XR(e) ? e : bs(e, { max: 59 });
}
function Yi(e, { min: t, max: n, step: r }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += r, bs(String(o), { min: t, max: n, loop: !0 }));
}
function QR(e, t) {
  return Yi(e, { min: 0, max: 23, step: t });
}
function ZR(e, t) {
  return Yi(e, { min: 1, max: 12, step: t });
}
function zl(e, t) {
  return Yi(e, { min: 0, max: 59, step: t });
}
function JR(e, t) {
  const n = jo(t);
  return e.setMinutes(parseInt(n, 10)), e;
}
function eM(e, t) {
  const n = jo(t);
  return e.setSeconds(parseInt(n, 10)), e;
}
function tM(e, t) {
  const n = pm(t);
  return e.setHours(parseInt(n, 10)), e;
}
function nM(e, t, n) {
  const r = parseInt(hm(t), 10), o = sM(r, n);
  return e.setHours(o), e;
}
function _a(e, t, n, r) {
  switch (n) {
    case "minutes":
      return JR(e, t);
    case "seconds":
      return eM(e, t);
    case "hours":
      return tM(e, t);
    case "12hours":
      return r ? nM(e, t, r) : e;
    default:
      return e;
  }
}
function rM(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return jo(String(e.getMinutes()));
    case "seconds":
      return jo(String(e.getSeconds()));
    case "hours":
      return pm(String(e.getHours()));
    case "12hours":
      return hm(String(gm(e.getHours())));
    default:
      return "00";
  }
}
function oM(e, t, n) {
  switch (n) {
    case "minutes":
      return zl(e, t);
    case "seconds":
      return zl(e, t);
    case "hours":
      return QR(e, t);
    case "12hours":
      return ZR(e, t);
    default:
      return "00";
  }
}
function sM(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function gm(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function vm(e) {
  switch (e) {
    case "day":
      return "dd/MM/yyyy";
    case "hour":
      return "dd/MM/yyyy HH";
    case "minute":
      return "dd/MM/yyyy HH:mm";
    case "second":
      return "dd/MM/yyyy HH:mm:ss";
  }
}
function aM(e) {
  switch (e) {
    case "day":
      return 8;
    case "hour":
      return 10;
    case "minute":
      return 12;
    case "second":
      return 14;
  }
}
function iM(e, t) {
  const n = e.replace(/\D/g, ""), r = aM(t);
  let o = "";
  for (let s = 0; s < n.length && s < r; s++)
    (s === 2 || s === 4) && (o += "/"), s === 8 && (o += " "), (s === 10 || s === 12) && (o += ":"), o += n[s];
  return o;
}
function Gl(e, t) {
  const n = vm(t);
  if (e.length < n.length) return null;
  const r = Gd(e.slice(0, n.length), n, /* @__PURE__ */ new Date());
  return gi(r) ? r : null;
}
function cr(e, t) {
  return tn(e, vm(t));
}
const bm = l.forwardRef(
  ({ period: e, setPeriod: t, date: n, onDateChange: r, onLeftFocus: o, onRightFocus: s }, a) => {
    const i = (d) => {
      d.key === "ArrowRight" && s?.(), d.key === "ArrowLeft" && o?.();
    }, c = (d) => {
      if (t?.(d), n) {
        const m = new Date(n), f = gm(n.getHours());
        r?.(
          _a(
            m,
            f.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ u.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ u.jsxs(
      tg,
      {
        defaultValue: e,
        onValueChange: (d) => c(d),
        children: [
          /* @__PURE__ */ u.jsx(
            Nc,
            {
              ref: a,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: i,
              children: /* @__PURE__ */ u.jsx(ng, {})
            }
          ),
          /* @__PURE__ */ u.jsxs(Ec, { children: [
            /* @__PURE__ */ u.jsx(Vo, { value: "AM", children: "AM" }),
            /* @__PURE__ */ u.jsx(Vo, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
bm.displayName = "TimePeriodSelect";
const wo = l.forwardRef(
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
    period: m,
    onLeftFocus: f,
    onRightFocus: p,
    ...b
  }, g) => {
    const [h, v] = l.useState(!1), [x, w] = l.useState("0");
    l.useEffect(() => {
      if (h) {
        const C = setTimeout(() => {
          v(!1);
        }, 2e3);
        return () => clearTimeout(C);
      }
    }, [h]);
    const y = l.useMemo(() => rM(s, d), [s, d]), S = (C) => d === "12hours" && h && y.slice(1, 2) === "1" && x === "0" ? `0${C}` : h ? y.slice(1, 2) + C : `0${C}`, N = (C) => {
      if (C.key !== "Tab") {
        if (C.preventDefault(), C.key === "ArrowRight" && p?.(), C.key === "ArrowLeft" && f?.(), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const T = C.key === "ArrowUp" ? 1 : -1, E = oM(y, T, d);
          h && v(!1);
          const R = s ? new Date(s) : /* @__PURE__ */ new Date();
          a?.(_a(R, E, d, m));
        }
        if (C.key >= "0" && C.key <= "9") {
          d === "12hours" && w(C.key);
          const T = S(C.key);
          h && p?.(), v((R) => !R);
          const E = s ? new Date(s) : /* @__PURE__ */ new Date();
          a?.(_a(E, T, d, m));
        }
      }
    };
    return /* @__PURE__ */ u.jsx(
      Ji,
      {
        ref: g,
        id: r || d,
        name: o || d,
        className: P(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: n || y,
        onChange: (C) => {
          C.preventDefault(), i?.(C);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (C) => {
          c?.(C), N(C);
        },
        ...b
      }
    );
  }
);
wo.displayName = "TimePickerInput";
const xm = l.forwardRef(
  ({ date: e, onChange: t, hourCycle: n = 24, granularity: r = "second" }, o) => {
    const s = l.useRef(null), a = l.useRef(null), i = l.useRef(null), c = l.useRef(null), [d, m] = l.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return ru(
      o,
      () => ({
        minuteRef: s.current,
        hourRef: a.current,
        secondRef: i.current,
        periodRef: c.current
      }),
      [s, a, i]
    ), /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ u.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ u.jsx(Rv, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ u.jsx(
        wo,
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
      (r === "minute" || r === "second") && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        ":",
        /* @__PURE__ */ u.jsx(
          wo,
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
      r === "second" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        ":",
        /* @__PURE__ */ u.jsx(
          wo,
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
      n === 12 && /* @__PURE__ */ u.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ u.jsx(
        bm,
        {
          period: d,
          setPeriod: m,
          date: e,
          onDateChange: (f) => {
            t?.(f), f && f?.getHours() >= 12 ? m("PM") : m("AM");
          },
          ref: c,
          onLeftFocus: () => i?.current?.focus()
        }
      ) })
    ] });
  }
);
xm.displayName = "TimePicker";
const cM = l.forwardRef(
  ({
    locale: e = Ud,
    defaultPopupValue: t = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
    value: n,
    onChange: r,
    hourCycle: o = 24,
    yearRange: s = 50,
    disabled: a = !1,
    displayFormat: i,
    granularity: c = "minute",
    placeholder: d = "dd/mm/aaaa - hh:mm",
    className: m,
    disabledDates: f,
    ...p
  }, b) => {
    const [g, h] = l.useState(n ?? t), v = lt(null), x = lt(null), [w, y] = l.useState(n), [S, N] = l.useState(!1), [C, T] = l.useState(
      n ? cr(n, c) : ""
    ), E = lt(!1), R = lt(
      n ? cr(n, c) : ""
    ), _ = (k) => {
      if (!k)
        return;
      if (!t) {
        k.setHours(
          g?.getHours() ?? 0,
          g?.getMinutes() ?? 0,
          g?.getSeconds() ?? 0
        ), r?.(k), h(k);
        return;
      }
      const H = (k.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), q = Ry(t, {
        days: Math.ceil(H)
      });
      q.setHours(
        g?.getHours() ?? 0,
        g?.getMinutes() ?? 0,
        g?.getSeconds() ?? 0
      ), r?.(q), h(q);
    };
    St(() => {
      if (E.current) {
        E.current = !1;
        return;
      }
      const k = n ? cr(n, c) : "";
      n ? (y(n), h(n)) : y(void 0), T(k), R.current = k;
    }, [n, c]);
    const O = (k) => {
      if (!k)
        return;
      E.current = !0;
      const F = cr(k, c);
      r?.(k), h(k), y(k), T(F), R.current = F;
    };
    ru(
      b,
      () => ({
        ...v.current,
        value: w
      }),
      [w]
    );
    function W(k) {
      const F = k.target.value;
      if (F.replace(/\D/g, "") === "") {
        T(""), R.current = "", E.current = !0, y(void 0), r?.(void 0);
        return;
      }
      const H = k.target.selectionStart ?? F.length, q = F.slice(0, H).replace(/\D/g, "").length, Y = iM(F, c);
      T(Y), requestAnimationFrame(() => {
        if (x.current) {
          let M = 0, B = Y.length;
          for (let D = 0; D < Y.length; D++)
            if (/\d/.test(Y[D]) && M++, M === q) {
              B = D + 1;
              break;
            }
          x.current.setSelectionRange(B, B);
        }
      });
      const I = Gl(Y, c);
      I && (E.current = !0, R.current = Y, r?.(I), y(I), h(I));
    }
    function X() {
      !(Gl(C, c) !== null) && C !== "" && T(R.current);
    }
    return /* @__PURE__ */ u.jsxs(Hr, { open: S, onOpenChange: N, children: [
      /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: P(
            "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
            a && "cursor-not-allowed opacity-50",
            m
          ),
          children: [
            /* @__PURE__ */ u.jsx(
              "input",
              {
                ref: x,
                value: C,
                onChange: W,
                onBlur: X,
                placeholder: d,
                disabled: a,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ u.jsx(Vr, { asChild: !0, disabled: a, children: /* @__PURE__ */ u.jsx(
              "button",
              {
                ref: v,
                type: "button",
                disabled: a,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ u.jsx(Mv, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ u.jsxs(Xn, { className: "w-auto p-0", children: [
        /* @__PURE__ */ u.jsx(
          pf,
          {
            selected: w,
            onSelect: (k) => {
              k && (k.setHours(
                g?.getHours() ?? 0,
                g?.getMinutes() ?? 0,
                g?.getSeconds() ?? 0
              ), O(k));
            },
            onMonthChange: _,
            month: w ?? g,
            locale: e,
            disabled: f,
            className: "w-full",
            ...p,
            mode: "single"
          }
        ),
        c !== "day" && /* @__PURE__ */ u.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ u.jsx(
          xm,
          {
            onChange: (k) => {
              if (E.current = !0, r?.(k), y(k), k) {
                h(k);
                const F = cr(k, c);
                T(F), R.current = F;
              }
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
cM.displayName = "DateTimePicker";
const lM = Mr, CO = Zo, uM = Pr, SO = gn, wm = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  pn,
  {
    ref: n,
    className: P(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
wm.displayName = pn.displayName;
const ym = l.forwardRef(({ className: e, onClose: t, ...n }, r) => /* @__PURE__ */ u.jsxs(uM, { children: [
  /* @__PURE__ */ u.jsx(wm, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ u.jsxs(
    hn,
    {
      ref: r,
      className: P(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(
          gn,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ u.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ u.jsx(Qa, { className: "h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
ym.displayName = hn.displayName;
const dM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: P(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
dM.displayName = "DialogHeader";
const fM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: P(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
fM.displayName = "DialogFooter";
const mM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  zn,
  {
    ref: n,
    className: P(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
mM.displayName = zn.displayName;
const pM = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Gn,
  {
    ref: n,
    className: P("text-sm text-muted-foreground", e),
    ...t
  }
));
pM.displayName = Gn.displayName;
var pa = "rovingFocusGroup.onEntryFocus", hM = { bubbles: !1, cancelable: !0 }, Yr = "RovingFocusGroup", [Oa, Cm, gM] = dn(Yr), [vM, zt] = Te(
  Yr,
  [gM]
), [bM, xM] = vM(Yr), Sm = l.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(Oa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Oa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(wM, { ...e, ref: t }) }) })
);
Sm.displayName = Yr;
var wM = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: d,
    preventScrollOnEntryFocus: m = !1,
    ...f
  } = e, p = l.useRef(null), b = oe(t, p), g = Mt(s), [h, v] = Pe({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: Yr
  }), [x, w] = l.useState(!1), y = he(d), S = Cm(n), N = l.useRef(!1), [C, T] = l.useState(0);
  return l.useEffect(() => {
    const E = p.current;
    if (E)
      return E.addEventListener(pa, y), () => E.removeEventListener(pa, y);
  }, [y]), /* @__PURE__ */ u.jsx(
    bM,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: h,
      onItemFocus: l.useCallback(
        (E) => v(E),
        [v]
      ),
      onItemShiftTab: l.useCallback(() => w(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => T((E) => E + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => T((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        $.div,
        {
          tabIndex: x || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: A(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: A(e.onFocus, (E) => {
            const R = !N.current;
            if (E.target === E.currentTarget && R && !x) {
              const _ = new CustomEvent(pa, hM);
              if (E.currentTarget.dispatchEvent(_), !_.defaultPrevented) {
                const O = S().filter((H) => H.focusable), W = O.find((H) => H.active), X = O.find((H) => H.id === h), F = [W, X, ...O].filter(
                  Boolean
                ).map((H) => H.ref.current);
                Tm(F, m);
              }
            }
            N.current = !1;
          }),
          onBlur: A(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Nm = "RovingFocusGroupItem", Em = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = we(), d = s || c, m = xM(Nm, n), f = m.currentTabStopId === d, p = Cm(n), { onFocusableItemAdd: b, onFocusableItemRemove: g, currentTabStopId: h } = m;
    return l.useEffect(() => {
      if (r)
        return b(), () => g();
    }, [r, b, g]), /* @__PURE__ */ u.jsx(
      Oa.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          $.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": m.orientation,
            ...i,
            ref: t,
            onMouseDown: A(e.onMouseDown, (v) => {
              r ? m.onItemFocus(d) : v.preventDefault();
            }),
            onFocus: A(e.onFocus, () => m.onItemFocus(d)),
            onKeyDown: A(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const x = SM(v, m.orientation, m.dir);
              if (x !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let y = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (x === "last") y.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && y.reverse();
                  const S = y.indexOf(v.currentTarget);
                  y = m.loop ? NM(y, S + 1) : y.slice(S + 1);
                }
                setTimeout(() => Tm(y));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
Em.displayName = Nm;
var yM = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function CM(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function SM(e, t, n) {
  const r = CM(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return yM[r];
}
function Tm(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function NM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var xs = Sm, ws = Em, Aa = ["Enter", " "], EM = ["ArrowDown", "PageUp", "Home"], Rm = ["ArrowUp", "PageDown", "End"], TM = [...EM, ...Rm], RM = {
  ltr: [...Aa, "ArrowRight"],
  rtl: [...Aa, "ArrowLeft"]
}, MM = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, zr = "Menu", [Cr, PM, kM] = dn(zr), [xn, Mm] = Te(zr, [
  kM,
  Vt,
  zt
]), Gr = Vt(), Pm = zt(), [km, Gt] = xn(zr), [DM, Kr] = xn(zr), Dm = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = Gr(t), [c, d] = l.useState(null), m = l.useRef(!1), f = he(s), p = Mt(o);
  return l.useEffect(() => {
    const b = () => {
      m.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => m.current = !1;
    return document.addEventListener("keydown", b, { capture: !0 }), () => {
      document.removeEventListener("keydown", b, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), l.useEffect(() => {
    if (!n)
      return;
    const b = () => f(!1);
    return window.addEventListener("blur", b), () => window.removeEventListener("blur", b);
  }, [n, f]), /* @__PURE__ */ u.jsx($r, { ...i, children: /* @__PURE__ */ u.jsx(
    km,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ u.jsx(
        DM,
        {
          scope: t,
          onClose: l.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: m,
          dir: p,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Dm.displayName = zr;
var _M = "MenuAnchor", zi = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Gr(n);
    return /* @__PURE__ */ u.jsx(Wr, { ...o, ...r, ref: t });
  }
);
zi.displayName = _M;
var Gi = "MenuPortal", [OM, _m] = xn(Gi, {
  forceMount: void 0
}), Om = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Gt(Gi, t);
  return /* @__PURE__ */ u.jsx(OM, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(be, { present: n || s.open, children: /* @__PURE__ */ u.jsx(mn, { asChild: !0, container: o, children: r }) }) });
};
Om.displayName = Gi;
var Ye = "MenuContent", [AM, Ki] = xn(Ye), Am = l.forwardRef(
  (e, t) => {
    const n = _m(Ye, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Gt(Ye, e.__scopeMenu), a = Kr(Ye, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(Cr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(be, { present: r || s.open, children: /* @__PURE__ */ u.jsx(Cr.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ u.jsx(IM, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(jM, { ...o, ref: t }) }) }) });
  }
), IM = l.forwardRef(
  (e, t) => {
    const n = Gt(Ye, e.__scopeMenu), r = l.useRef(null), o = oe(t, r);
    return l.useEffect(() => {
      const s = r.current;
      if (s) return Xo(s);
    }, []), /* @__PURE__ */ u.jsx(
      Ui,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: A(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), jM = l.forwardRef((e, t) => {
  const n = Gt(Ye, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    Ui,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), FM = /* @__PURE__ */ jt("MenuContent.ScrollLock"), Ui = l.forwardRef(
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
      onPointerDownOutside: m,
      onFocusOutside: f,
      onInteractOutside: p,
      onDismiss: b,
      disableOutsideScroll: g,
      ...h
    } = e, v = Gt(Ye, n), x = Kr(Ye, n), w = Gr(n), y = Pm(n), S = PM(n), [N, C] = l.useState(null), T = l.useRef(null), E = oe(t, T, v.onContentChange), R = l.useRef(0), _ = l.useRef(""), O = l.useRef(0), W = l.useRef(null), X = l.useRef("right"), k = l.useRef(0), F = g ? Rr : l.Fragment, H = g ? { as: FM, allowPinchZoom: !0 } : void 0, q = (I) => {
      const M = _.current + I, B = S().filter((j) => !j.disabled), D = document.activeElement, V = B.find((j) => j.ref.current === D)?.textValue, K = B.map((j) => j.textValue), L = qM(K, M, V), Z = B.find((j) => j.textValue === L)?.ref.current;
      (function j(G) {
        _.current = G, window.clearTimeout(R.current), G !== "" && (R.current = window.setTimeout(() => j(""), 1e3));
      })(M), Z && setTimeout(() => Z.focus());
    };
    l.useEffect(() => () => window.clearTimeout(R.current), []), Uo();
    const Y = l.useCallback((I) => X.current === W.current?.side && QM(I, W.current?.area), []);
    return /* @__PURE__ */ u.jsx(
      AM,
      {
        scope: n,
        searchRef: _,
        onItemEnter: l.useCallback(
          (I) => {
            Y(I) && I.preventDefault();
          },
          [Y]
        ),
        onItemLeave: l.useCallback(
          (I) => {
            Y(I) || (T.current?.focus(), C(null));
          },
          [Y]
        ),
        onTriggerLeave: l.useCallback(
          (I) => {
            Y(I) && I.preventDefault();
          },
          [Y]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: l.useCallback((I) => {
          W.current = I;
        }, []),
        children: /* @__PURE__ */ u.jsx(F, { ...H, children: /* @__PURE__ */ u.jsx(
          Tr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: A(s, (I) => {
              I.preventDefault(), T.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ u.jsx(
              Ht,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: b,
                children: /* @__PURE__ */ u.jsx(
                  xs,
                  {
                    asChild: !0,
                    ...y,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: C,
                    onEntryFocus: A(c, (I) => {
                      x.isUsingKeyboardRef.current || I.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      hs,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Qm(v.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...w,
                        ...h,
                        ref: E,
                        style: { outline: "none", ...h.style },
                        onKeyDown: A(h.onKeyDown, (I) => {
                          const B = I.target.closest("[data-radix-menu-content]") === I.currentTarget, D = I.ctrlKey || I.altKey || I.metaKey, V = I.key.length === 1;
                          B && (I.key === "Tab" && I.preventDefault(), !D && V && q(I.key));
                          const K = T.current;
                          if (I.target !== K || !TM.includes(I.key)) return;
                          I.preventDefault();
                          const Z = S().filter((j) => !j.disabled).map((j) => j.ref.current);
                          Rm.includes(I.key) && Z.reverse(), KM(Z);
                        }),
                        onBlur: A(e.onBlur, (I) => {
                          I.currentTarget.contains(I.target) || (window.clearTimeout(R.current), _.current = "");
                        }),
                        onPointerMove: A(
                          e.onPointerMove,
                          Sr((I) => {
                            const M = I.target, B = k.current !== I.clientX;
                            if (I.currentTarget.contains(M) && B) {
                              const D = I.clientX > k.current ? "right" : "left";
                              X.current = D, k.current = I.clientX;
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
Am.displayName = Ye;
var LM = "MenuGroup", qi = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx($.div, { role: "group", ...r, ref: t });
  }
);
qi.displayName = LM;
var $M = "MenuLabel", Im = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx($.div, { ...r, ref: t });
  }
);
Im.displayName = $M;
var Fo = "MenuItem", Kl = "menu.itemSelect", ys = l.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = l.useRef(null), a = Kr(Fo, e.__scopeMenu), i = Ki(Fo, e.__scopeMenu), c = oe(t, s), d = l.useRef(!1), m = () => {
      const f = s.current;
      if (!n && f) {
        const p = new CustomEvent(Kl, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Kl, (b) => r?.(b), { once: !0 }), gr(f, p), p.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      jm,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: A(e.onClick, m),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: A(e.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: A(e.onKeyDown, (f) => {
          const p = i.searchRef.current !== "";
          n || p && f.key === " " || Aa.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
ys.displayName = Fo;
var jm = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = Ki(Fo, n), i = Pm(n), c = l.useRef(null), d = oe(t, c), [m, f] = l.useState(!1), [p, b] = l.useState("");
    return l.useEffect(() => {
      const g = c.current;
      g && b((g.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ u.jsx(
      Cr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ u.jsx(ws, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ u.jsx(
          $.div,
          {
            role: "menuitem",
            "data-highlighted": m ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: A(
              e.onPointerMove,
              Sr((g) => {
                r ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: A(
              e.onPointerLeave,
              Sr((g) => a.onItemLeave(g))
            ),
            onFocus: A(e.onFocus, () => f(!0)),
            onBlur: A(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), WM = "MenuCheckboxItem", Fm = l.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(Hm, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ u.jsx(
      ys,
      {
        role: "menuitemcheckbox",
        "aria-checked": Lo(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Zi(n),
        onSelect: A(
          o.onSelect,
          () => r?.(Lo(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Fm.displayName = WM;
var Lm = "MenuRadioGroup", [BM, HM] = xn(
  Lm,
  { value: void 0, onValueChange: () => {
  } }
), $m = l.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = he(r);
    return /* @__PURE__ */ u.jsx(BM, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ u.jsx(qi, { ...o, ref: t }) });
  }
);
$m.displayName = Lm;
var Wm = "MenuRadioItem", Bm = l.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = HM(Wm, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ u.jsx(Hm, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ u.jsx(
      ys,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Zi(s),
        onSelect: A(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Bm.displayName = Wm;
var Xi = "MenuItemIndicator", [Hm, VM] = xn(
  Xi,
  { checked: !1 }
), Vm = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = VM(Xi, n);
    return /* @__PURE__ */ u.jsx(
      be,
      {
        present: r || Lo(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          $.span,
          {
            ...o,
            ref: t,
            "data-state": Zi(s.checked)
          }
        )
      }
    );
  }
);
Vm.displayName = Xi;
var YM = "MenuSeparator", Ym = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(
      $.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Ym.displayName = YM;
var zM = "MenuArrow", zm = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Gr(n);
    return /* @__PURE__ */ u.jsx(gs, { ...o, ...r, ref: t });
  }
);
zm.displayName = zM;
var Qi = "MenuSub", [GM, Gm] = xn(Qi), Km = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = Gt(Qi, t), a = Gr(t), [i, c] = l.useState(null), [d, m] = l.useState(null), f = he(o);
  return l.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), /* @__PURE__ */ u.jsx($r, { ...a, children: /* @__PURE__ */ u.jsx(
    km,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: d,
      onContentChange: m,
      children: /* @__PURE__ */ u.jsx(
        GM,
        {
          scope: t,
          contentId: we(),
          triggerId: we(),
          trigger: i,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
Km.displayName = Qi;
var dr = "MenuSubTrigger", Um = l.forwardRef(
  (e, t) => {
    const n = Gt(dr, e.__scopeMenu), r = Kr(dr, e.__scopeMenu), o = Gm(dr, e.__scopeMenu), s = Ki(dr, e.__scopeMenu), a = l.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, d = { __scopeMenu: e.__scopeMenu }, m = l.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return l.useEffect(() => m, [m]), l.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [i, c]), /* @__PURE__ */ u.jsx(zi, { asChild: !0, ...d, children: /* @__PURE__ */ u.jsx(
      jm,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": n.open ? o.contentId : void 0,
        "data-state": Qm(n.open),
        ...e,
        ref: Nt(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: A(
          e.onPointerMove,
          Sr((f) => {
            s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), m();
            }, 100));
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          Sr((f) => {
            m();
            const p = n.content?.getBoundingClientRect();
            if (p) {
              const b = n.content?.dataset.side, g = b === "right", h = g ? -5 : 5, v = p[g ? "left" : "right"], x = p[g ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + h, y: f.clientY },
                  { x: v, y: p.top },
                  { x, y: p.top },
                  { x, y: p.bottom },
                  { x: v, y: p.bottom }
                ],
                side: b
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(f), f.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: A(e.onKeyDown, (f) => {
          const p = s.searchRef.current !== "";
          e.disabled || p && f.key === " " || RM[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Um.displayName = dr;
var qm = "MenuSubContent", Xm = l.forwardRef(
  (e, t) => {
    const n = _m(Ye, e.__scopeMenu), { forceMount: r = n.forceMount, align: o = "start", ...s } = e, a = Gt(Ye, e.__scopeMenu), i = Kr(Ye, e.__scopeMenu), c = Gm(qm, e.__scopeMenu), d = l.useRef(null), m = oe(t, d);
    return /* @__PURE__ */ u.jsx(Cr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(be, { present: r || a.open, children: /* @__PURE__ */ u.jsx(Cr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      Ui,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...s,
        ref: m,
        align: o,
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          i.isUsingKeyboardRef.current && d.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: A(e.onFocusOutside, (f) => {
          f.target !== c.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: A(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: A(e.onKeyDown, (f) => {
          const p = f.currentTarget.contains(f.target), b = MM[i.dir].includes(f.key);
          p && b && (a.onOpenChange(!1), c.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Xm.displayName = qm;
function Qm(e) {
  return e ? "open" : "closed";
}
function Lo(e) {
  return e === "indeterminate";
}
function Zi(e) {
  return Lo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function KM(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function UM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function qM(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = UM(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function XM(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], d = i.x, m = i.y, f = c.x, p = c.y;
    m > r != p > r && n < (f - d) * (r - m) / (p - m) + d && (o = !o);
  }
  return o;
}
function QM(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return XM(n, t);
}
function Sr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ZM = Dm, JM = zi, eP = Om, tP = Am, nP = qi, rP = Im, oP = ys, sP = Fm, aP = $m, iP = Bm, cP = Vm, lP = Ym, uP = zm, dP = Km, fP = Um, mP = Xm, Cs = "DropdownMenu", [pP] = Te(
  Cs,
  [Mm]
), Ae = Mm(), [hP, Zm] = pP(Cs), Jm = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = Ae(t), d = l.useRef(null), [m, f] = Pe({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: Cs
  });
  return /* @__PURE__ */ u.jsx(
    hP,
    {
      scope: t,
      triggerId: we(),
      triggerRef: d,
      contentId: we(),
      open: m,
      onOpenChange: f,
      onOpenToggle: l.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: /* @__PURE__ */ u.jsx(ZM, { ...c, open: m, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
Jm.displayName = Cs;
var ep = "DropdownMenuTrigger", tp = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Zm(ep, n), a = Ae(n);
    return /* @__PURE__ */ u.jsx(JM, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      $.button,
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
        ref: Nt(t, s.triggerRef),
        onPointerDown: A(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: A(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
tp.displayName = ep;
var gP = "DropdownMenuPortal", np = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ae(t);
  return /* @__PURE__ */ u.jsx(eP, { ...r, ...n });
};
np.displayName = gP;
var rp = "DropdownMenuContent", op = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Zm(rp, n), s = Ae(n), a = l.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      tP,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (i) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: A(e.onInteractOutside, (i) => {
          const c = i.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0, m = c.button === 2 || d;
          (!o.modal || m) && (a.current = !0);
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
op.displayName = rp;
var vP = "DropdownMenuGroup", sp = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
    return /* @__PURE__ */ u.jsx(nP, { ...o, ...r, ref: t });
  }
);
sp.displayName = vP;
var bP = "DropdownMenuLabel", ap = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
    return /* @__PURE__ */ u.jsx(rP, { ...o, ...r, ref: t });
  }
);
ap.displayName = bP;
var xP = "DropdownMenuItem", ip = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
    return /* @__PURE__ */ u.jsx(oP, { ...o, ...r, ref: t });
  }
);
ip.displayName = xP;
var wP = "DropdownMenuCheckboxItem", cp = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ u.jsx(sP, { ...o, ...r, ref: t });
});
cp.displayName = wP;
var yP = "DropdownMenuRadioGroup", lp = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ u.jsx(aP, { ...o, ...r, ref: t });
});
lp.displayName = yP;
var CP = "DropdownMenuRadioItem", up = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ u.jsx(iP, { ...o, ...r, ref: t });
});
up.displayName = CP;
var SP = "DropdownMenuItemIndicator", dp = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ u.jsx(cP, { ...o, ...r, ref: t });
});
dp.displayName = SP;
var NP = "DropdownMenuSeparator", fp = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ u.jsx(lP, { ...o, ...r, ref: t });
});
fp.displayName = NP;
var EP = "DropdownMenuArrow", TP = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
    return /* @__PURE__ */ u.jsx(uP, { ...o, ...r, ref: t });
  }
);
TP.displayName = EP;
var RP = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, a = Ae(t), [i, c] = Pe({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ u.jsx(dP, { ...a, open: i, onOpenChange: c, children: n });
}, MP = "DropdownMenuSubTrigger", mp = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ u.jsx(fP, { ...o, ...r, ref: t });
});
mp.displayName = MP;
var PP = "DropdownMenuSubContent", pp = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ae(n);
  return /* @__PURE__ */ u.jsx(
    mP,
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
pp.displayName = PP;
var kP = Jm, DP = tp, hp = np, gp = op, _P = sp, vp = ap, bp = ip, xp = cp, OP = lp, wp = up, yp = dp, Cp = fp, AP = RP, Sp = mp, Np = pp;
const NO = kP, EO = DP, TO = _P, RO = hp, MO = AP, PO = OP, IP = l.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  Sp,
  {
    ref: o,
    className: P(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ u.jsx(Xa, { className: "ml-auto h-4 w-4" })
    ]
  }
));
IP.displayName = Sp.displayName;
const jP = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Np,
  {
    ref: n,
    className: P(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
jP.displayName = Np.displayName;
const FP = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ u.jsx(hp, { children: /* @__PURE__ */ u.jsx(
  gp,
  {
    ref: r,
    sideOffset: t,
    className: P(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
FP.displayName = gp.displayName;
const LP = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  bp,
  {
    ref: r,
    className: P(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
LP.displayName = bp.displayName;
const $P = l.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ u.jsxs(
  xp,
  {
    ref: o,
    className: P(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(yp, { children: /* @__PURE__ */ u.jsx(Er, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
$P.displayName = xp.displayName;
const WP = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  wp,
  {
    ref: r,
    className: P(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(yp, { children: /* @__PURE__ */ u.jsx(au, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
WP.displayName = wp.displayName;
const BP = l.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  vp,
  {
    ref: r,
    className: P(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
BP.displayName = vp.displayName;
const HP = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Cp,
  {
    ref: n,
    className: P("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
HP.displayName = Cp.displayName;
const VP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "span",
  {
    className: P("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
VP.displayName = "DropdownMenuShortcut";
var YP = "Label", Ep = l.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  $.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ep.displayName = YP;
var Tp = Ep;
const zP = mt(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ss = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Tp,
  {
    ref: n,
    className: P(zP(), e),
    ...t
  }
));
Ss.displayName = Tp.displayName;
const kO = Av, Rp = l.createContext(
  {}
), Ur = ({
  ...e
}) => /* @__PURE__ */ u.jsx(Rp.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u.jsx(Iv, { ...e }) }), Ns = () => {
  const e = l.useContext(Rp), t = l.useContext(Mp), { getFieldState: n, formState: r } = Yn(), o = n(e.name, r);
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
}, Mp = l.createContext(
  {}
), Qn = l.forwardRef(({ className: e, ...t }, n) => {
  const r = l.useId();
  return /* @__PURE__ */ u.jsx(Mp.Provider, { value: { id: r }, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: P("space-y-1 relative", e),
      ...t
    }
  ) });
});
Qn.displayName = "FormItem";
const Zn = l.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ns();
  return /* @__PURE__ */ u.jsx(
    Ss,
    {
      ref: n,
      className: P(r && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
Zn.displayName = "FormLabel";
const Es = l.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: s } = Ns();
  return /* @__PURE__ */ u.jsx(
    iu,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${s}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Es.displayName = "FormControl";
const Pp = l.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ns();
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: P("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Pp.displayName = "FormDescription";
const Jn = l.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: s } = Ns(), a = o ? String(o?.message) : t;
  return a ? /* @__PURE__ */ u.jsx(
    "p",
    {
      ref: r,
      id: s,
      className: P(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...n,
      children: a
    }
  ) : null;
});
Jn.displayName = "FormMessage";
const GP = mt("font-bold tracking-tight", {
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
}), DO = U.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => {
    const s = t || "h1";
    return /* @__PURE__ */ u.jsx(
      s,
      {
        className: P(GP({ variant: t }), e),
        ref: o,
        ...r,
        children: n
      }
    );
  }
), Ji = U.forwardRef(({ className: e, type: t, ...n }, r) => t === "textarea" ? /* @__PURE__ */ u.jsx(
  "textarea",
  {
    rows: 1,
    ref: r,
    className: P(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...n
  }
) : /* @__PURE__ */ u.jsx(
  "input",
  {
    ref: r,
    type: t,
    className: P(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:bg-accent file:px-2 file:h-6.5 file:text-accent-foreground file:rounded-md file:cursor-pointer",
      e
    ),
    ...n
  }
)), _O = ({
  name: e,
  label: t,
  placeholder: n,
  mask: r,
  ...o
}) => {
  const s = Yn();
  return /* @__PURE__ */ u.jsx(
    Ur,
    {
      control: s.control,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ u.jsxs(Qn, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ u.jsx(Zn, { children: t }),
        /* @__PURE__ */ u.jsx(Es, { children: r ? /* @__PURE__ */ u.jsx(
          xk,
          {
            mask: r,
            placeholder: n,
            ...o,
            ...a
          }
        ) : /* @__PURE__ */ u.jsx(Ji, { placeholder: n, ...o, ...a }) }),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
};
var kp = Object.freeze({
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
}), KP = "VisuallyHidden", Ts = l.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    $.span,
    {
      ...e,
      ref: t,
      style: { ...kp, ...e.style }
    }
  )
);
Ts.displayName = KP;
var Dp = Ts, wn = "NavigationMenu", [ec, _p, UP] = dn(wn), [Ia, qP, XP] = dn(wn), [tc] = Te(
  wn,
  [UP, XP]
), [QP, ze] = tc(wn), [ZP, JP] = tc(wn), Op = l.forwardRef(
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
      ...m
    } = e, [f, p] = l.useState(null), b = oe(t, (R) => p(R)), g = Mt(d), h = l.useRef(0), v = l.useRef(0), x = l.useRef(0), [w, y] = l.useState(!0), [S, N] = Pe({
      prop: r,
      onChange: (R) => {
        const _ = R !== "", O = i > 0;
        _ ? (window.clearTimeout(x.current), O && y(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
          () => y(!0),
          i
        )), o?.(R);
      },
      defaultProp: s ?? "",
      caller: wn
    }), C = l.useCallback(() => {
      window.clearTimeout(v.current), v.current = window.setTimeout(() => N(""), 150);
    }, [N]), T = l.useCallback(
      (R) => {
        window.clearTimeout(v.current), N(R);
      },
      [N]
    ), E = l.useCallback(
      (R) => {
        S === R ? window.clearTimeout(v.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(v.current), N(R);
        }, a);
      },
      [S, N, a]
    );
    return l.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(v.current), window.clearTimeout(x.current);
    }, []), /* @__PURE__ */ u.jsx(
      Ap,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: g,
        orientation: c,
        rootNavigationMenu: f,
        onTriggerEnter: (R) => {
          window.clearTimeout(h.current), w ? E(R) : T(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), C();
        },
        onContentEnter: () => window.clearTimeout(v.current),
        onContentLeave: C,
        onItemSelect: (R) => {
          N((_) => _ === R ? "" : R);
        },
        onItemDismiss: () => N(""),
        children: /* @__PURE__ */ u.jsx(
          $.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: g,
            ...m,
            ref: b
          }
        )
      }
    );
  }
);
Op.displayName = wn;
var ja = "NavigationMenuSub", ek = l.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      ...i
    } = e, c = ze(ja, n), [d, m] = Pe({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: ja
    });
    return /* @__PURE__ */ u.jsx(
      Ap,
      {
        scope: n,
        isRootMenu: !1,
        value: d,
        dir: c.dir,
        orientation: a,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (f) => m(f),
        onItemSelect: (f) => m(f),
        onItemDismiss: () => m(""),
        children: /* @__PURE__ */ u.jsx($.div, { "data-orientation": a, ...i, ref: t })
      }
    );
  }
);
ek.displayName = ja;
var Ap = (e) => {
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
    onTriggerEnter: m,
    onTriggerLeave: f,
    onContentEnter: p,
    onContentLeave: b
  } = e, [g, h] = l.useState(null), [v, x] = l.useState(/* @__PURE__ */ new Map()), [w, y] = l.useState(null);
  return /* @__PURE__ */ u.jsx(
    QP,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: i,
      previousValue: Ar(i),
      baseId: we(),
      dir: o,
      orientation: s,
      viewport: g,
      onViewportChange: h,
      indicatorTrack: w,
      onIndicatorTrackChange: y,
      onTriggerEnter: he(m),
      onTriggerLeave: he(f),
      onContentEnter: he(p),
      onContentLeave: he(b),
      onItemSelect: he(c),
      onItemDismiss: he(d),
      onViewportContentChange: l.useCallback((S, N) => {
        x((C) => (C.set(S, N), new Map(C)));
      }, []),
      onViewportContentRemove: l.useCallback((S) => {
        x((N) => N.has(S) ? (N.delete(S), new Map(N)) : N);
      }, []),
      children: /* @__PURE__ */ u.jsx(ec.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(ZP, { scope: t, items: v, children: a }) })
    }
  );
}, Ip = "NavigationMenuList", jp = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = ze(Ip, n), s = /* @__PURE__ */ u.jsx($.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ u.jsx($.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ u.jsx(ec.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ u.jsx(Gp, { asChild: !0, children: s }) : s }) });
  }
);
jp.displayName = Ip;
var Fp = "NavigationMenuItem", [tk, Lp] = tc(Fp), $p = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, s = we(), a = r || s || "LEGACY_REACT_AUTO_VALUE", i = l.useRef(null), c = l.useRef(null), d = l.useRef(null), m = l.useRef(() => {
    }), f = l.useRef(!1), p = l.useCallback((g = "start") => {
      if (i.current) {
        m.current();
        const h = La(i.current);
        h.length && oc(g === "start" ? h : h.reverse());
      }
    }, []), b = l.useCallback(() => {
      if (i.current) {
        const g = La(i.current);
        g.length && (m.current = ck(g));
      }
    }, []);
    return /* @__PURE__ */ u.jsx(
      tk,
      {
        scope: n,
        value: a,
        triggerRef: c,
        contentRef: i,
        focusProxyRef: d,
        wasEscapeCloseRef: f,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: b,
        onContentFocusOutside: b,
        children: /* @__PURE__ */ u.jsx($.li, { ...o, ref: t })
      }
    );
  }
);
$p.displayName = Fp;
var Fa = "NavigationMenuTrigger", Wp = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, s = ze(Fa, e.__scopeNavigationMenu), a = Lp(Fa, e.__scopeNavigationMenu), i = l.useRef(null), c = oe(i, a.triggerRef, t), d = Up(s.baseId, a.value), m = qp(s.baseId, a.value), f = l.useRef(!1), p = l.useRef(!1), b = a.value === s.value;
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(ec.ItemSlot, { scope: n, value: a.value, children: /* @__PURE__ */ u.jsx(Kp, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      $.button,
      {
        id: d,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": sc(b),
        "aria-expanded": b,
        "aria-controls": b ? m : void 0,
        ...o,
        ref: c,
        onPointerEnter: A(e.onPointerEnter, () => {
          p.current = !1, a.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: A(
          e.onPointerMove,
          $o(() => {
            r || p.current || a.wasEscapeCloseRef.current || f.current || (s.onTriggerEnter(a.value), f.current = !0);
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          $o(() => {
            r || (s.onTriggerLeave(), f.current = !1);
          })
        ),
        onClick: A(e.onClick, () => {
          s.onItemSelect(a.value), p.current = b;
        }),
        onKeyDown: A(e.onKeyDown, (g) => {
          const v = { horizontal: "ArrowDown", vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[s.orientation];
          b && g.key === v && (a.onEntryKeyDown(), g.preventDefault());
        })
      }
    ) }) }),
    b && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        Dp,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: a.focusProxyRef,
          onFocus: (g) => {
            const h = a.contentRef.current, v = g.relatedTarget, x = v === i.current, w = h?.contains(v);
            (x || !w) && a.onFocusProxyEnter(x ? "start" : "end");
          }
        }
      ),
      s.viewport && /* @__PURE__ */ u.jsx("span", { "aria-owns": m })
    ] })
  ] });
});
Wp.displayName = Fa;
var nk = "NavigationMenuLink", Ul = "navigationMenu.linkSelect", Bp = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...s } = e;
    return /* @__PURE__ */ u.jsx(Kp, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      $.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...s,
        ref: t,
        onClick: A(
          e.onClick,
          (a) => {
            const i = a.target, c = new CustomEvent(Ul, {
              bubbles: !0,
              cancelable: !0
            });
            if (i.addEventListener(Ul, (d) => o?.(d), { once: !0 }), gr(i, c), !c.defaultPrevented && !a.metaKey) {
              const d = new CustomEvent(yo, {
                bubbles: !0,
                cancelable: !0
              });
              gr(i, d);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Bp.displayName = nk;
var nc = "NavigationMenuIndicator", Hp = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ze(nc, e.__scopeNavigationMenu), s = !!o.value;
  return o.indicatorTrack ? un.createPortal(
    /* @__PURE__ */ u.jsx(be, { present: n || s, children: /* @__PURE__ */ u.jsx(rk, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Hp.displayName = nc;
var rk = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = ze(nc, n), s = _p(n), [a, i] = l.useState(
    null
  ), [c, d] = l.useState(null), m = o.orientation === "horizontal", f = !!o.value;
  l.useEffect(() => {
    const g = s().find((h) => h.value === o.value)?.ref.current;
    g && i(g);
  }, [s, o.value]);
  const p = () => {
    a && d({
      size: m ? a.offsetWidth : a.offsetHeight,
      offset: m ? a.offsetLeft : a.offsetTop
    });
  };
  return $a(a, p), $a(o.indicatorTrack, p), c ? /* @__PURE__ */ u.jsx(
    $.div,
    {
      "aria-hidden": !0,
      "data-state": f ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...m ? {
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
}), Bn = "NavigationMenuContent", Vp = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ze(Bn, e.__scopeNavigationMenu), s = Lp(Bn, e.__scopeNavigationMenu), a = oe(s.contentRef, t), i = s.value === o.value, c = {
    value: s.value,
    triggerRef: s.triggerRef,
    focusProxyRef: s.focusProxyRef,
    wasEscapeCloseRef: s.wasEscapeCloseRef,
    onContentFocusOutside: s.onContentFocusOutside,
    onRootContentClose: s.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ u.jsx(ok, { forceMount: n, ...c, ref: a }) : /* @__PURE__ */ u.jsx(be, { present: n || i, children: /* @__PURE__ */ u.jsx(
    Yp,
    {
      "data-state": sc(i),
      ...c,
      ref: a,
      onPointerEnter: A(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: A(
        e.onPointerLeave,
        $o(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !i && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
Vp.displayName = Bn;
var ok = l.forwardRef((e, t) => {
  const n = ze(Bn, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return xe(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), xe(() => () => o(e.value), [e.value, o]), null;
}), yo = "navigationMenu.rootContentDismiss", Yp = l.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: s,
    wasEscapeCloseRef: a,
    onRootContentClose: i,
    onContentFocusOutside: c,
    ...d
  } = e, m = ze(Bn, n), f = l.useRef(null), p = oe(f, t), b = Up(m.baseId, r), g = qp(m.baseId, r), h = _p(n), v = l.useRef(null), { onItemDismiss: x } = m;
  l.useEffect(() => {
    const y = f.current;
    if (m.isRootMenu && y) {
      const S = () => {
        x(), i(), y.contains(document.activeElement) && o.current?.focus();
      };
      return y.addEventListener(yo, S), () => y.removeEventListener(yo, S);
    }
  }, [m.isRootMenu, e.value, o, x, i]);
  const w = l.useMemo(() => {
    const S = h().map((_) => _.value);
    m.dir === "rtl" && S.reverse();
    const N = S.indexOf(m.value), C = S.indexOf(m.previousValue), T = r === m.value, E = C === S.indexOf(r);
    if (!T && !E) return v.current;
    const R = (() => {
      if (N !== C) {
        if (T && C !== -1) return N > C ? "from-end" : "from-start";
        if (E && N !== -1) return N > C ? "to-start" : "to-end";
      }
      return null;
    })();
    return v.current = R, R;
  }, [m.previousValue, m.value, m.dir, h, r]);
  return /* @__PURE__ */ u.jsx(Gp, { asChild: !0, children: /* @__PURE__ */ u.jsx(
    Ht,
    {
      id: g,
      "aria-labelledby": b,
      "data-motion": w,
      "data-orientation": m.orientation,
      ...d,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const y = new Event(yo, {
          bubbles: !0,
          cancelable: !0
        });
        f.current?.dispatchEvent(y);
      },
      onFocusOutside: A(e.onFocusOutside, (y) => {
        c();
        const S = y.target;
        m.rootNavigationMenu?.contains(S) && y.preventDefault();
      }),
      onPointerDownOutside: A(e.onPointerDownOutside, (y) => {
        const S = y.target, N = h().some((T) => T.ref.current?.contains(S)), C = m.isRootMenu && m.viewport?.contains(S);
        (N || C || !m.isRootMenu) && y.preventDefault();
      }),
      onKeyDown: A(e.onKeyDown, (y) => {
        const S = y.altKey || y.ctrlKey || y.metaKey;
        if (y.key === "Tab" && !S) {
          const C = La(y.currentTarget), T = document.activeElement, E = C.findIndex((O) => O === T), _ = y.shiftKey ? C.slice(0, E).reverse() : C.slice(E + 1, C.length);
          oc(_) ? y.preventDefault() : s.current?.focus();
        }
      }),
      onEscapeKeyDown: A(e.onEscapeKeyDown, (y) => {
        a.current = !0;
      })
    }
  ) });
}), rc = "NavigationMenuViewport", zp = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, s = !!ze(rc, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ u.jsx(be, { present: n || s, children: /* @__PURE__ */ u.jsx(sk, { ...r, ref: t }) });
});
zp.displayName = rc;
var sk = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, s = ze(rc, n), a = oe(t, s.onViewportChange), i = JP(
    Bn,
    e.__scopeNavigationMenu
  ), [c, d] = l.useState(null), [m, f] = l.useState(null), p = c ? c?.width + "px" : void 0, b = c ? c?.height + "px" : void 0, g = !!s.value, h = g ? s.value : s.previousValue;
  return $a(m, () => {
    m && d({ width: m.offsetWidth, height: m.offsetHeight });
  }), /* @__PURE__ */ u.jsx(
    $.div,
    {
      "data-state": sc(g),
      "data-orientation": s.orientation,
      ...o,
      ref: a,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !g && s.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": b,
        ...o.style
      },
      onPointerEnter: A(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: A(e.onPointerLeave, $o(s.onContentLeave)),
      children: Array.from(i.items).map(([x, { ref: w, forceMount: y, ...S }]) => {
        const N = h === x;
        return /* @__PURE__ */ u.jsx(be, { present: y || N, children: /* @__PURE__ */ u.jsx(
          Yp,
          {
            ...S,
            ref: Nt(w, (C) => {
              N && C && f(C);
            })
          }
        ) }, x);
      })
    }
  );
}), ak = "FocusGroup", Gp = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = ze(ak, n);
    return /* @__PURE__ */ u.jsx(Ia.Provider, { scope: n, children: /* @__PURE__ */ u.jsx(Ia.Slot, { scope: n, children: /* @__PURE__ */ u.jsx($.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), ql = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], ik = "FocusGroupItem", Kp = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = qP(n), s = ze(ik, n);
    return /* @__PURE__ */ u.jsx(Ia.ItemSlot, { scope: n, children: /* @__PURE__ */ u.jsx(
      $.button,
      {
        ...r,
        ref: t,
        onKeyDown: A(e.onKeyDown, (a) => {
          if (["Home", "End", ...ql].includes(a.key)) {
            let c = o().map((f) => f.ref.current);
            if ([s.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && c.reverse(), ql.includes(a.key)) {
              const f = c.indexOf(a.currentTarget);
              c = c.slice(f + 1);
            }
            setTimeout(() => oc(c)), a.preventDefault();
          }
        })
      }
    ) });
  }
);
function La(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function oc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function ck(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function $a(e, t) {
  const n = he(t);
  xe(() => {
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
function sc(e) {
  return e ? "open" : "closed";
}
function Up(e, t) {
  return `${e}-trigger-${t}`;
}
function qp(e, t) {
  return `${e}-content-${t}`;
}
function $o(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Xp = Op, Qp = jp, lk = $p, Zp = Wp, uk = Bp, Jp = Hp, eh = Vp, th = zp;
const dk = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Xp,
  {
    ref: r,
    className: P(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(nh, {})
    ]
  }
));
dk.displayName = Xp.displayName;
const fk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Qp,
  {
    ref: n,
    className: P(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
fk.displayName = Qp.displayName;
const OO = lk, mk = mt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), pk = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Zp,
  {
    ref: r,
    className: P(mk(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ u.jsx(
        Fn,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
pk.displayName = Zp.displayName;
const hk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  eh,
  {
    ref: n,
    className: P(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
hk.displayName = eh.displayName;
const gk = uk, nh = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { className: P("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ u.jsx(
  th,
  {
    className: P(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
nh.displayName = th.displayName;
const vk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Jp,
  {
    ref: n,
    className: P(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
vk.displayName = Jp.displayName;
const bk = U.forwardRef(({ className: e, title: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx(gk, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
  "a",
  {
    ref: o,
    className: P(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ u.jsx("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ u.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: n })
    ]
  }
) }) }));
bk.displayName = "ListItem";
function xk({
  value: e,
  mask: t,
  onChange: n,
  ...r
}) {
  const o = t.split("#").length - 1, s = t.split("A").length - 1, a = t.split("*").length - 1, i = o + s + a;
  function c(d) {
    const f = d.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, i);
    n(f);
  }
  return /* @__PURE__ */ u.jsx(
    Ji,
    {
      value: mf(e, t),
      onChange: c,
      ...r
    }
  );
}
const wk = (e, t = 300) => {
  const [n, r] = Ve(e);
  return St(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, Xl = mt(
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
), yk = l.forwardRef(
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
    onSearchChange: m,
    isLoading: f,
    onCreate: p,
    ...b
  }, g) => {
    const [h, v] = l.useState(r), [x, w] = l.useState(!1), [y, S] = l.useState(!1), [N, C] = l.useState(""), T = wk(N, 300);
    St(() => {
      m && m(T ?? "");
    }, [T]);
    const E = (k) => {
      if (k.key === "Enter")
        w(!0);
      else if (k.key === "Backspace" && !k.currentTarget.value) {
        const F = [...h];
        F.pop(), v(F), t(F);
      }
    }, R = (k) => {
      const F = h.includes(k) ? h.filter((H) => H !== k) : [...h, k];
      v(F), t(F);
    }, _ = () => {
      v([]), t([]);
    }, O = () => {
      w((k) => !k);
    }, W = () => {
      const k = h.slice(0, a);
      v(k), t(k);
    }, X = () => {
      if (h.length === e.length)
        _();
      else {
        const k = e.map((F) => F.value);
        v(k), t(k);
      }
    };
    return /* @__PURE__ */ u.jsxs(
      Hr,
      {
        open: x,
        onOpenChange: w,
        modal: i,
        children: [
          /* @__PURE__ */ u.jsx(Vr, { asChild: !0, children: /* @__PURE__ */ u.jsx(
            vn,
            {
              ref: g,
              ...b,
              onClick: O,
              variant: "outline",
              className: P(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, a).map((k) => {
                    const F = e.find((q) => q.value === k), H = F?.icon;
                    return /* @__PURE__ */ u.jsxs(
                      dl,
                      {
                        className: P(
                          y ? "animate-bounce" : "",
                          Xl({ variant: n })
                        ),
                        style: { animationDuration: `${s}s` },
                        children: [
                          H && /* @__PURE__ */ u.jsx(H, { className: "h-4 w-4 mr-2" }),
                          F?.label,
                          /* @__PURE__ */ u.jsx(
                            jc,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (q) => {
                                q.stopPropagation(), R(k);
                              }
                            }
                          )
                        ]
                      },
                      k
                    );
                  }),
                  h.length > a && /* @__PURE__ */ u.jsxs(
                    dl,
                    {
                      className: P(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        y ? "animate-bounce" : "",
                        Xl({ variant: n })
                      ),
                      style: { animationDuration: `${s}s` },
                      children: [
                        `+ ${h.length - a}`,
                        /* @__PURE__ */ u.jsx(
                          jc,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (k) => {
                              k.stopPropagation(), W();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
                  f && /* @__PURE__ */ u.jsx(hr, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ u.jsx(
                    Pv,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (k) => {
                        k.stopPropagation(), _();
                      }
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    ig,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ u.jsx(Fn, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ u.jsx(Fn, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ u.jsx(
            Xn,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => w(!1),
              children: /* @__PURE__ */ u.jsxs(jr, { shouldFilter: !m, children: [
                /* @__PURE__ */ u.jsx(
                  cs,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: E,
                    onValueChange: C
                  }
                ),
                /* @__PURE__ */ u.jsxs(ls, { children: [
                  !f && /* @__PURE__ */ u.jsx(us, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ u.jsxs(Fr, { children: [
                    !f && !e.length && !!N.length && p && /* @__PURE__ */ u.jsx(
                      nn,
                      {
                        onSelect: p,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ u.jsx(kv, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ u.jsx("b", { children: N })
                        ] })
                      },
                      "new"
                    ),
                    f && /* @__PURE__ */ u.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ u.jsx(hr, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !d && /* @__PURE__ */ u.jsxs(
                      nn,
                      {
                        onSelect: X,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              className: P(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ u.jsx(Fc, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ u.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((k) => {
                      const F = h.includes(k.value);
                      return /* @__PURE__ */ u.jsxs(
                        nn,
                        {
                          onSelect: () => R(k.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ u.jsx(
                              "div",
                              {
                                className: P(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  F ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ u.jsx(Fc, { className: "h-4 w-4" })
                              }
                            ),
                            k.icon && /* @__PURE__ */ u.jsx(k.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ u.jsx("span", { children: k.label })
                          ]
                        },
                        k.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ u.jsx(jf, {})
                ] })
              ] })
            }
          ),
          s > 0 && h.length > 0 && /* @__PURE__ */ u.jsx(
            Dv,
            {
              className: P(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                y ? "" : "text-muted-foreground"
              ),
              onClick: () => S(!y)
            }
          )
        ]
      }
    );
  }
);
yk.displayName = "MultiSelect";
const Ck = ({ className: e, ...t }) => /* @__PURE__ */ u.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: P("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Ck.displayName = "Pagination";
const Sk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "ul",
  {
    ref: n,
    className: P("flex flex-row items-center gap-1", e),
    ...t
  }
));
Sk.displayName = "PaginationContent";
const Nk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("li", { ref: n, className: P("", e), ...t }));
Nk.displayName = "PaginationItem";
const ac = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ u.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: P(
      rn({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
ac.displayName = "PaginationLink";
const Ek = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  ac,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: P("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(_v, { className: "h-4 w-4" })
  }
);
Ek.displayName = "PaginationPrevious";
const Tk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  ac,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: P("gap-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(Xa, { className: "h-4 w-4" })
  }
);
Tk.displayName = "PaginationNext";
const Rk = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: P("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ u.jsx(su, { className: "h-4 w-4" }),
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Rk.displayName = "PaginationEllipsis";
var ic = "Radio", [Mk, rh] = Te(ic), [Pk, Rs] = Mk(ic);
function oh(e) {
  const {
    __scopeRadio: t,
    checked: n = !1,
    children: r,
    disabled: o,
    form: s,
    name: a,
    onCheck: i,
    required: c,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [f, p] = l.useState(null), [b, g] = l.useState(null), h = l.useRef(!1), v = f ? !!s || !!f.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), x = {
    checked: n,
    disabled: o,
    required: c,
    name: a,
    form: s,
    value: d,
    control: f,
    setControl: p,
    hasConsumerStoppedPropagationRef: h,
    isFormControl: v,
    bubbleInput: b,
    setBubbleInput: g,
    onCheck: () => i?.()
  };
  return /* @__PURE__ */ u.jsx(Pk, { scope: t, ...x, children: Dk(m) ? m(x) : r });
}
var sh = "RadioTrigger", cc = l.forwardRef(
  ({ __scopeRadio: e, onClick: t, ...n }, r) => {
    const {
      checked: o,
      disabled: s,
      value: a,
      setControl: i,
      onCheck: c,
      hasConsumerStoppedPropagationRef: d,
      isFormControl: m,
      bubbleInput: f
    } = Rs(sh, e), p = oe(r, i);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        role: "radio",
        "aria-checked": o,
        "data-state": lh(o),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...n,
        ref: p,
        onClick: A(t, (b) => {
          o || c(), f && m && (d.current = b.isPropagationStopped(), d.current || b.stopPropagation());
        })
      }
    );
  }
);
cc.displayName = sh;
var kk = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, name: r, checked: o, required: s, disabled: a, value: i, onCheck: c, form: d, ...m } = e;
    return /* @__PURE__ */ u.jsx(
      oh,
      {
        __scopeRadio: n,
        checked: o,
        disabled: a,
        required: s,
        onCheck: c,
        name: r,
        form: d,
        value: i,
        internal_do_not_use_render: ({ isFormControl: f }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(
            cc,
            {
              ...m,
              ref: t,
              __scopeRadio: n
            }
          ),
          f && /* @__PURE__ */ u.jsx(
            lc,
            {
              __scopeRadio: n
            }
          )
        ] })
      }
    );
  }
);
kk.displayName = ic;
var ah = "RadioIndicator", ih = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = Rs(ah, n);
    return /* @__PURE__ */ u.jsx(be, { present: r || s.checked, children: /* @__PURE__ */ u.jsx(
      $.span,
      {
        "data-state": lh(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
ih.displayName = ah;
var ch = "RadioBubbleInput", lc = l.forwardRef(
  ({ __scopeRadio: e, ...t }, n) => {
    const {
      control: r,
      checked: o,
      required: s,
      disabled: a,
      name: i,
      value: c,
      form: d,
      bubbleInput: m,
      setBubbleInput: f,
      hasConsumerStoppedPropagationRef: p
    } = Rs(ch, e), b = oe(n, f), g = Ar(o), h = ss(r);
    l.useEffect(() => {
      const x = m;
      if (!x) return;
      const w = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, N = !p.current;
      if (g !== o && S) {
        const C = new Event("click", { bubbles: N });
        S.call(x, o), x.dispatchEvent(C);
      }
    }, [m, g, o, p]);
    const v = l.useRef(o);
    return /* @__PURE__ */ u.jsx(
      $.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: v.current,
        required: s,
        disabled: a,
        name: i,
        value: c,
        form: d,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
          ...t.style,
          ...h,
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
lc.displayName = ch;
function Dk(e) {
  return typeof e == "function";
}
function lh(e) {
  return e ? "checked" : "unchecked";
}
var _k = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ms = "RadioGroup", [Ok] = Te(Ms, [
  zt,
  rh
]), uh = zt(), Ps = rh(), [Ak, Ik] = Ok(Ms), uc = l.forwardRef(
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
      loop: m = !0,
      onValueChange: f,
      ...p
    } = e, b = uh(n), g = Mt(d), [h, v] = Pe({
      prop: s,
      defaultProp: o ?? null,
      onChange: f,
      caller: Ms
    });
    return /* @__PURE__ */ u.jsx(
      Ak,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: h,
        onValueChange: v,
        children: /* @__PURE__ */ u.jsx(
          xs,
          {
            asChild: !0,
            ...b,
            orientation: c,
            dir: g,
            loop: m,
            children: /* @__PURE__ */ u.jsx(
              $.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
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
uc.displayName = Ms;
var jk = "RadioGroupItem", Fk = "RadioGroupItemProvider", dh = "RadioGroupItemTrigger", Lk = "RadioGroupItemBubbleInput";
function $k(e) {
  const {
    __scopeRadioGroup: t,
    value: n,
    disabled: r,
    children: o,
    // @ts-expect-error
    internal_do_not_use_render: s
  } = e, a = Ik(Fk, t), i = Ps(t), c = a.disabled || r;
  return /* @__PURE__ */ u.jsx(
    oh,
    {
      ...i,
      checked: a.value === n,
      disabled: c,
      required: a.required,
      name: a.name,
      value: n,
      onCheck: () => a.onValueChange(n),
      internal_do_not_use_render: s,
      children: o
    }
  );
}
var fh = l.forwardRef((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = uh(n), s = Ps(n), { checked: a, disabled: i } = Rs(dh, s.__scopeRadio), c = l.useRef(null), d = oe(t, c), m = l.useRef(!1);
  return l.useEffect(() => {
    const f = (b) => {
      _k.includes(b.key) && (m.current = !0);
    }, p = () => m.current = !1;
    return document.addEventListener("keydown", f), document.addEventListener("keyup", p), () => {
      document.removeEventListener("keydown", f), document.removeEventListener("keyup", p);
    };
  }, []), /* @__PURE__ */ u.jsx(
    ws,
    {
      asChild: !0,
      ...o,
      focusable: !i,
      active: a,
      children: /* @__PURE__ */ u.jsx(
        cc,
        {
          ...s,
          ...r,
          ref: d,
          onKeyDown: A(r.onKeyDown, (f) => {
            f.key === "Enter" && f.preventDefault();
          }),
          onFocus: A(r.onFocus, () => {
            m.current && c.current?.click();
          })
        }
      )
    }
  );
});
fh.displayName = dh;
var dc = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, value: r, disabled: o, ...s } = e;
    return /* @__PURE__ */ u.jsx(
      $k,
      {
        __scopeRadioGroup: n,
        value: r,
        disabled: o,
        internal_do_not_use_render: ({ isFormControl: a }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(
            fh,
            {
              ...s,
              ref: t,
              __scopeRadioGroup: n
            }
          ),
          a && /* @__PURE__ */ u.jsx(
            mh,
            {
              __scopeRadioGroup: n
            }
          )
        ] })
      }
    );
  }
);
dc.displayName = jk;
var mh = l.forwardRef((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Ps(n);
  return /* @__PURE__ */ u.jsx(lc, { ...o, ...r, ref: t });
});
mh.displayName = Lk;
var Wk = "RadioGroupIndicator", ph = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Ps(n);
    return /* @__PURE__ */ u.jsx(ih, { ...o, ...r, ref: t });
  }
);
ph.displayName = Wk;
const Bk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  uc,
  {
    className: P("grid gap-2", e),
    ...t,
    ref: n
  }
));
Bk.displayName = uc.displayName;
const Hk = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  dc,
  {
    ref: n,
    className: P(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(ph, { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsx(au, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Hk.displayName = dc.displayName;
function Wa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Vk(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var fc = "ScrollArea", [hh] = Te(fc), [Yk, Ge] = hh(fc), gh = l.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...a
    } = e, [i, c] = l.useState(null), [d, m] = l.useState(null), [f, p] = l.useState(null), [b, g] = l.useState(null), [h, v] = l.useState(null), [x, w] = l.useState(0), [y, S] = l.useState(0), [N, C] = l.useState(!1), [T, E] = l.useState(!1), R = oe(t, (O) => c(O)), _ = Mt(o);
    return /* @__PURE__ */ u.jsx(
      Yk,
      {
        scope: n,
        type: r,
        dir: _,
        scrollHideDelay: s,
        scrollArea: i,
        viewport: d,
        onViewportChange: m,
        content: f,
        onContentChange: p,
        scrollbarX: b,
        onScrollbarXChange: g,
        scrollbarXEnabled: N,
        onScrollbarXEnabledChange: C,
        scrollbarY: h,
        onScrollbarYChange: v,
        scrollbarYEnabled: T,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: w,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ u.jsx(
          $.div,
          {
            dir: _,
            ...a,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": x + "px",
              "--radix-scroll-area-corner-height": y + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
gh.displayName = fc;
var vh = "ScrollAreaViewport", bh = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, a = Ge(vh, n), i = l.useRef(null), c = oe(t, i, a.onViewportChange);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(zk, { nonce: o }),
      /* @__PURE__ */ u.jsx(
        $.div,
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
          children: /* @__PURE__ */ u.jsx("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
bh.displayName = vh;
var zk = l.memo(
  ({ nonce: e }) => /* @__PURE__ */ u.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
      },
      nonce: e
    }
  ),
  (e, t) => e.nonce === t.nonce
), gt = "ScrollAreaScrollbar", mc = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ge(gt, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = o, i = e.orientation === "horizontal";
    return l.useEffect(() => (i ? s(!0) : a(!0), () => {
      i ? s(!1) : a(!1);
    }), [i, s, a]), o.type === "hover" ? /* @__PURE__ */ u.jsx(Gk, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ u.jsx(Kk, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ u.jsx(xh, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ u.jsx(pc, { ...r, ref: t, "data-state": "visible" }) : null;
  }
);
mc.displayName = gt;
var Gk = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ge(gt, e.__scopeScrollArea), [s, a] = l.useState(!1);
  return l.useEffect(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const d = () => {
        window.clearTimeout(c), a(!0);
      }, m = () => {
        c = window.setTimeout(() => a(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", d), i.addEventListener("pointerleave", m), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", d), i.removeEventListener("pointerleave", m);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ u.jsx(be, { present: n || s, children: /* @__PURE__ */ u.jsx(
    xh,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Kk = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ge(gt, e.__scopeScrollArea), s = e.orientation === "horizontal", a = Ds(() => c("SCROLL_END"), 100), [i, c] = Vk("hidden", {
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
    if (i === "idle") {
      const d = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [i, o.scrollHideDelay, c]), l.useEffect(() => {
    const d = o.viewport, m = s ? "scrollLeft" : "scrollTop";
    if (d) {
      let f = d[m];
      const p = () => {
        const b = d[m];
        f !== b && (c("SCROLL"), a()), f = b;
      };
      return d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [o.viewport, s, c, a]), /* @__PURE__ */ u.jsx(be, { present: n || i !== "hidden", children: /* @__PURE__ */ u.jsx(
    pc,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: A(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: A(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), xh = l.forwardRef((e, t) => {
  const n = Ge(gt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, a] = l.useState(!1), i = e.orientation === "horizontal", c = Ds(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, m = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(i ? d : m);
    }
  }, 10);
  return Hn(n.viewport, c), Hn(n.content, c), /* @__PURE__ */ u.jsx(be, { present: r || s, children: /* @__PURE__ */ u.jsx(
    pc,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), pc = l.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Ge(gt, e.__scopeScrollArea), s = l.useRef(null), a = l.useRef(0), [i, c] = l.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = Nh(i.viewport, i.content), m = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (p) => a.current = p
  };
  function f(p, b) {
    return Jk(p, a.current, i, b);
  }
  return n === "horizontal" ? /* @__PURE__ */ u.jsx(
    Uk,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollLeft, b = Ql(p, i, o.dir);
          s.current.style.transform = `translate3d(${b}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ u.jsx(
    qk,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollTop, b = Ql(p, i);
          s.current.style.transform = `translate3d(0, ${b}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = f(p));
      }
    }
  ) : null;
}), Uk = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Ge(gt, e.__scopeScrollArea), [a, i] = l.useState(), c = l.useRef(null), d = oe(t, c, s.onScrollbarXChange);
  return l.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    yh,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ks(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.x),
      onDragScroll: (m) => e.onDragScroll(m.x),
      onWheelScroll: (m, f) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + m.deltaX;
          e.onWheelScroll(p), Th(p, f) && m.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Bo(a.paddingLeft),
            paddingEnd: Bo(a.paddingRight)
          }
        });
      }
    }
  );
}), qk = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Ge(gt, e.__scopeScrollArea), [a, i] = l.useState(), c = l.useRef(null), d = oe(t, c, s.onScrollbarYChange);
  return l.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ u.jsx(
    yh,
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
        "--radix-scroll-area-thumb-height": ks(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.y),
      onDragScroll: (m) => e.onDragScroll(m.y),
      onWheelScroll: (m, f) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + m.deltaY;
          e.onWheelScroll(p), Th(p, f) && m.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Bo(a.paddingTop),
            paddingEnd: Bo(a.paddingBottom)
          }
        });
      }
    }
  );
}), [Xk, wh] = hh(gt), yh = l.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: s,
    onThumbPointerUp: a,
    onThumbPointerDown: i,
    onThumbPositionChange: c,
    onDragScroll: d,
    onWheelScroll: m,
    onResize: f,
    ...p
  } = e, b = Ge(gt, n), [g, h] = l.useState(null), v = oe(t, (R) => h(R)), x = l.useRef(null), w = l.useRef(""), y = b.viewport, S = r.content - r.viewport, N = he(m), C = he(c), T = Ds(f, 10);
  function E(R) {
    if (x.current) {
      const _ = R.clientX - x.current.left, O = R.clientY - x.current.top;
      d({ x: _, y: O });
    }
  }
  return l.useEffect(() => {
    const R = (_) => {
      const O = _.target;
      g?.contains(O) && N(_, S);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [y, g, S, N]), l.useEffect(C, [r, C]), Hn(g, T), Hn(b.content, T), /* @__PURE__ */ u.jsx(
    Xk,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: he(s),
      onThumbPointerUp: he(a),
      onThumbPositionChange: C,
      onThumbPointerDown: he(i),
      children: /* @__PURE__ */ u.jsx(
        $.div,
        {
          ...p,
          ref: v,
          style: { position: "absolute", ...p.style },
          onPointerDown: A(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), x.current = g.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), E(R));
          }),
          onPointerMove: A(e.onPointerMove, E),
          onPointerUp: A(e.onPointerUp, (R) => {
            const _ = R.target;
            _.hasPointerCapture(R.pointerId) && _.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = w.current, b.viewport && (b.viewport.style.scrollBehavior = ""), x.current = null;
          })
        }
      )
    }
  );
}), Wo = "ScrollAreaThumb", Ch = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = wh(Wo, e.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(be, { present: n || o.hasThumb, children: /* @__PURE__ */ u.jsx(Qk, { ref: t, ...r }) });
  }
), Qk = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = Ge(Wo, n), a = wh(Wo, n), { onThumbPositionChange: i } = a, c = oe(
      t,
      (f) => a.onThumbChange(f)
    ), d = l.useRef(void 0), m = Ds(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return l.useEffect(() => {
      const f = s.viewport;
      if (f) {
        const p = () => {
          if (m(), !d.current) {
            const b = eD(f, i);
            d.current = b, i();
          }
        };
        return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
      }
    }, [s.viewport, m, i]), /* @__PURE__ */ u.jsx(
      $.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: A(e.onPointerDownCapture, (f) => {
          const b = f.target.getBoundingClientRect(), g = f.clientX - b.left, h = f.clientY - b.top;
          a.onThumbPointerDown({ x: g, y: h });
        }),
        onPointerUp: A(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
Ch.displayName = Wo;
var hc = "ScrollAreaCorner", Sh = l.forwardRef(
  (e, t) => {
    const n = Ge(hc, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ u.jsx(Zk, { ...e, ref: t }) : null;
  }
);
Sh.displayName = hc;
var Zk = l.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Ge(hc, n), [s, a] = l.useState(0), [i, c] = l.useState(0), d = !!(s && i);
  return Hn(o.scrollbarX, () => {
    const m = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(m), c(m);
  }), Hn(o.scrollbarY, () => {
    const m = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(m), a(m);
  }), d ? /* @__PURE__ */ u.jsx(
    $.div,
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
function Bo(e) {
  return e ? parseInt(e, 10) : 0;
}
function Nh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ks(e) {
  const t = Nh(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Jk(e, t, n, r = "ltr") {
  const o = ks(n), s = o / 2, a = t || s, i = o - a, c = n.scrollbar.paddingStart + a, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, m = n.content - n.viewport, f = r === "ltr" ? [0, m] : [m * -1, 0];
  return Eh([c, d], f)(e);
}
function Ql(e, t, n = "ltr") {
  const r = ks(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, a = t.content - t.viewport, i = s - r, c = n === "ltr" ? [0, a] : [a * -1, 0], d = Wa(e, c);
  return Eh([0, a], [0, i])(d);
}
function Eh(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Th(e, t) {
  return e > 0 && e < t;
}
var eD = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== s.left, i = n.top !== s.top;
    (a || i) && t(), n = s, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function Ds(e, t) {
  const n = he(e), r = l.useRef(0);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), l.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Hn(e, t) {
  const n = he(t);
  xe(() => {
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
var Rh = gh, tD = bh, nD = Sh;
const rD = U.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Rh,
  {
    ref: r,
    className: P("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx(tD, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(Mh, {}),
      /* @__PURE__ */ u.jsx(nD, {})
    ]
  }
));
rD.displayName = Rh.displayName;
const Mh = U.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ u.jsx(
  mc,
  {
    ref: r,
    orientation: t,
    className: P(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx(Ch, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Mh.displayName = mc.displayName;
var oD = [" ", "Enter", "ArrowUp", "ArrowDown"], sD = [" ", "Enter"], ln = "Select", [_s, Os, aD] = dn(ln), [yn] = Te(ln, [
  aD,
  Vt
]), As = Vt(), [iD, Kt] = yn(ln), [cD, lD] = yn(ln), uD = "SelectProvider";
function Ph(e) {
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
    name: m,
    autoComplete: f,
    disabled: p,
    required: b,
    form: g,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: h
  } = e, v = As(t), [x, w] = l.useState(null), [y, S] = l.useState(null), [N, C] = l.useState(!1), T = Mt(d), [E, R] = Pe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ln
  }), [_, O] = Pe({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: ln
  }), W = l.useRef(null), X = x ? !!g || !!x.closest("form") : !0, [k, F] = l.useState(/* @__PURE__ */ new Set()), H = we(), q = Array.from(k).map((B) => B.props.value).join(";"), Y = l.useCallback((B) => {
    F((D) => new Set(D).add(B));
  }, []), I = l.useCallback((B) => {
    F((D) => {
      const V = new Set(D);
      return V.delete(B), V;
    });
  }, []), M = {
    required: b,
    trigger: x,
    onTriggerChange: w,
    valueNode: y,
    onValueNodeChange: S,
    valueNodeHasChildren: N,
    onValueNodeHasChildrenChange: C,
    contentId: H,
    value: _,
    onValueChange: O,
    open: E,
    onOpenChange: R,
    dir: T,
    triggerPointerDownPosRef: W,
    disabled: p,
    name: m,
    autoComplete: f,
    form: g,
    nativeOptions: k,
    nativeSelectKey: q,
    isFormControl: X
  };
  return /* @__PURE__ */ u.jsx($r, { ...v, children: /* @__PURE__ */ u.jsx(iD, { scope: t, ...M, children: /* @__PURE__ */ u.jsx(_s.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
    cD,
    {
      scope: t,
      onNativeOptionAdd: Y,
      onNativeOptionRemove: I,
      children: ND(h) ? h(M) : n
    }
  ) }) }) });
}
Ph.displayName = uD;
var kh = (e) => {
  const { __scopeSelect: t, children: n, ...r } = e;
  return /* @__PURE__ */ u.jsx(
    Ph,
    {
      __scopeSelect: t,
      ...r,
      internal_do_not_use_render: ({ isFormControl: o }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        n,
        o ? /* @__PURE__ */ u.jsx(
          Zh,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
};
kh.displayName = ln;
var Dh = "SelectTrigger", gc = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = As(n), a = Kt(Dh, n), i = a.disabled || r, c = oe(t, a.onTriggerChange), d = Os(n), m = l.useRef("touch"), [f, p, b] = Jh((h) => {
      const v = d().filter((y) => !y.disabled), x = v.find((y) => y.value === a.value), w = eg(v, h, x);
      w !== void 0 && a.onValueChange(w.value);
    }), g = (h) => {
      i || (a.onOpenChange(!0), b()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(Wr, { asChild: !0, ...s, children: /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.open ? a.contentId : void 0,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Is(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: A(o.onClick, (h) => {
          h.currentTarget.focus(), m.current !== "mouse" && g(h);
        }),
        onPointerDown: A(o.onPointerDown, (h) => {
          m.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (g(h), h.preventDefault());
        }),
        onKeyDown: A(o.onKeyDown, (h) => {
          const v = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(v && h.key === " ") && oD.includes(h.key) && (g(), h.preventDefault());
        })
      }
    ) });
  }
);
gc.displayName = Dh;
var _h = "SelectValue", Oh = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = Kt(_h, n), { onValueNodeHasChildrenChange: d } = c, m = s !== void 0, f = oe(t, c.onValueNodeChange);
    xe(() => {
      d(m);
    }, [d, m]);
    const p = Is(c.value);
    return /* @__PURE__ */ u.jsx(
      $.span,
      {
        ...i,
        asChild: p ? !1 : i.asChild,
        ref: f,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ u.jsx(l.Fragment, { children: p ? a : s }, p ? "placeholder" : "value")
      }
    );
  }
);
Oh.displayName = _h;
var dD = "SelectIcon", Ah = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx($.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Ah.displayName = dD;
var Ih = "SelectPortal", [fD, mD] = yn(Ih, {
  forceMount: void 0
}), jh = (e) => {
  const { __scopeSelect: t, forceMount: n, ...r } = e;
  return /* @__PURE__ */ u.jsx(fD, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ u.jsx(mn, { asChild: !0, ...r }) });
};
jh.displayName = Ih;
var Wt = "SelectContent", vc = l.forwardRef(
  (e, t) => {
    const n = mD(Wt, e.__scopeSelect), { forceMount: r = n.forceMount, ...o } = e, s = Kt(Wt, e.__scopeSelect), [a, i] = l.useState();
    return xe(() => {
      i(new DocumentFragment());
    }, []), /* @__PURE__ */ u.jsx(be, { present: r || s.open, children: ({ present: c }) => c ? /* @__PURE__ */ u.jsx($h, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(Fh, { ...o, fragment: a }) });
  }
);
vc.displayName = Wt;
var Fh = l.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, fragment: o } = e;
  return o ? un.createPortal(
    /* @__PURE__ */ u.jsx(Lh, { scope: n, children: /* @__PURE__ */ u.jsx(_s.Slot, { scope: n, children: /* @__PURE__ */ u.jsx("div", { ref: t, children: r }) }) }),
    o
  ) : null;
});
Fh.displayName = "SelectContentFragment";
var Ue = 10, [Lh, Ut] = yn(Wt), pD = "SelectContentImpl", hD = /* @__PURE__ */ jt("SelectContent.RemoveScroll"), $h = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n } = e, {
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: m,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...x
    } = e, w = Kt(Wt, n), [y, S] = l.useState(null), [N, C] = l.useState(null), T = oe(t, (j) => S(j)), [E, R] = l.useState(null), [_, O] = l.useState(
      null
    ), W = Os(n), [X, k] = l.useState(!1), F = l.useRef(!1);
    l.useEffect(() => {
      if (y) return Xo(y);
    }, [y]), Uo();
    const H = l.useCallback(
      (j) => {
        const [G, ...Q] = W().map((z) => z.ref.current), [re] = Q.slice(-1), te = document.activeElement;
        for (const z of j)
          if (z === te || (z?.scrollIntoView({ block: "nearest" }), z === G && N && (N.scrollTop = 0), z === re && N && (N.scrollTop = N.scrollHeight), z?.focus(), document.activeElement !== te)) return;
      },
      [W, N]
    ), q = l.useCallback(
      () => H([E, y]),
      [H, E, y]
    );
    l.useEffect(() => {
      X && q();
    }, [X, q]);
    const { onOpenChange: Y, triggerPointerDownPosRef: I } = w;
    l.useEffect(() => {
      if (y) {
        let j = { x: 0, y: 0 };
        const G = (re) => {
          j = {
            x: Math.abs(Math.round(re.pageX) - (I.current?.x ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (I.current?.y ?? 0))
          };
        }, Q = (re) => {
          j.x <= 10 && j.y <= 10 ? re.preventDefault() : re.composedPath().includes(y) || Y(!1), document.removeEventListener("pointermove", G), I.current = null;
        };
        return I.current !== null && (document.addEventListener("pointermove", G), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", G), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [y, Y, I]), l.useEffect(() => {
      const j = () => Y(!1);
      return window.addEventListener("blur", j), window.addEventListener("resize", j), () => {
        window.removeEventListener("blur", j), window.removeEventListener("resize", j);
      };
    }, [Y]);
    const [M, B] = Jh((j) => {
      const G = W().filter((te) => !te.disabled), Q = G.find((te) => te.ref.current === document.activeElement), re = eg(G, j, Q);
      re && setTimeout(() => re.ref.current?.focus());
    }), D = l.useCallback(
      (j, G, Q) => {
        const re = !F.current && !Q;
        (w.value !== void 0 && w.value === G || re) && (R(j), re && (F.current = !0));
      },
      [w.value]
    ), V = l.useCallback(() => y?.focus(), [y]), K = l.useCallback(
      (j, G, Q) => {
        const re = !F.current && !Q;
        (w.value !== void 0 && w.value === G || re) && O(j);
      },
      [w.value]
    ), L = r === "popper" ? Ba : Wh, Z = L === Ba ? {
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: m,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: b,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ u.jsx(
      Lh,
      {
        scope: n,
        content: y,
        viewport: N,
        onViewportChange: C,
        itemRefCallback: D,
        selectedItem: E,
        onItemLeave: V,
        itemTextRefCallback: K,
        focusSelectedItem: q,
        selectedItemText: _,
        position: r,
        isPositioned: X,
        searchRef: M,
        children: /* @__PURE__ */ u.jsx(Rr, { as: hD, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          Tr,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (j) => {
              j.preventDefault();
            },
            onUnmountAutoFocus: A(o, (j) => {
              w.trigger?.focus({ preventScroll: !0 }), j.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              Ht,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (j) => j.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  L,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (j) => j.preventDefault(),
                    ...x,
                    ...Z,
                    onPlaced: () => k(!0),
                    ref: T,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: A(x.onKeyDown, (j) => {
                      const G = j.ctrlKey || j.altKey || j.metaKey;
                      if (j.key === "Tab" && j.preventDefault(), !G && j.key.length === 1 && B(j.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
                        let re = W().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes(j.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
                          const te = j.target, z = re.indexOf(te);
                          re = re.slice(z + 1);
                        }
                        setTimeout(() => H(re)), j.preventDefault();
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
$h.displayName = pD;
var gD = "SelectItemAlignedPosition", Wh = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Kt(Wt, n), a = Ut(Wt, n), [i, c] = l.useState(null), [d, m] = l.useState(null), f = oe(t, (T) => m(T)), p = Os(n), b = l.useRef(!1), g = l.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: x, focusSelectedItem: w } = a, y = l.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && h && v && x) {
      const T = s.trigger.getBoundingClientRect(), E = d.getBoundingClientRect(), R = s.valueNode.getBoundingClientRect(), _ = x.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const te = _.left - E.left, z = R.left - te, ie = T.left - z, ce = T.width + ie, Ne = Math.max(ce, E.width), De = window.innerWidth - Ue, Ie = Wa(z, [
          Ue,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ue, De - Ne)
        ]);
        i.style.minWidth = ce + "px", i.style.left = Ie + "px";
      } else {
        const te = E.right - _.right, z = window.innerWidth - R.right - te, ie = window.innerWidth - T.right - z, ce = T.width + ie, Ne = Math.max(ce, E.width), De = window.innerWidth - Ue, Ie = Wa(z, [
          Ue,
          Math.max(Ue, De - Ne)
        ]);
        i.style.minWidth = ce + "px", i.style.right = Ie + "px";
      }
      const O = p(), W = window.innerHeight - Ue * 2, X = h.scrollHeight, k = window.getComputedStyle(d), F = parseInt(k.borderTopWidth, 10), H = parseInt(k.paddingTop, 10), q = parseInt(k.borderBottomWidth, 10), Y = parseInt(k.paddingBottom, 10), I = F + H + X + Y + q, M = Math.min(v.offsetHeight * 5, I), B = window.getComputedStyle(h), D = parseInt(B.paddingTop, 10), V = parseInt(B.paddingBottom, 10), K = T.top + T.height / 2 - Ue, L = W - K, Z = v.offsetHeight / 2, j = v.offsetTop + Z, G = F + H + j, Q = I - G;
      if (G <= K) {
        const te = O.length > 0 && v === O[O.length - 1].ref.current;
        i.style.bottom = "0px";
        const z = d.clientHeight - h.offsetTop - h.offsetHeight, ie = Math.max(
          L,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? V : 0) + z + q
        ), ce = G + ie;
        i.style.height = ce + "px";
      } else {
        const te = O.length > 0 && v === O[0].ref.current;
        i.style.top = "0px";
        const ie = Math.max(
          K,
          F + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? D : 0) + Z
        ) + Q;
        i.style.height = ie + "px", h.scrollTop = G - K + h.offsetTop;
      }
      i.style.margin = `${Ue}px 0`, i.style.minHeight = M + "px", i.style.maxHeight = W + "px", r?.(), requestAnimationFrame(() => b.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    i,
    d,
    h,
    v,
    x,
    s.dir,
    r
  ]);
  xe(() => y(), [y]);
  const [S, N] = l.useState();
  xe(() => {
    d && N(window.getComputedStyle(d).zIndex);
  }, [d]);
  const C = l.useCallback(
    (T) => {
      T && g.current === !0 && (y(), w?.(), g.current = !1);
    },
    [y, w]
  );
  return /* @__PURE__ */ u.jsx(
    bD,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: C,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ u.jsx(
            $.div,
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
Wh.displayName = gD;
var vD = "SelectPopperPosition", Ba = l.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ue,
    ...s
  } = e, a = As(n);
  return /* @__PURE__ */ u.jsx(
    hs,
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
Ba.displayName = vD;
var [bD, bc] = yn(Wt, {}), Ha = "SelectViewport", Bh = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Ut(Ha, n), a = bc(Ha, n), i = oe(t, s.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ u.jsx(_s.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
        $.div,
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
          onScroll: A(o.onScroll, (d) => {
            const m = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = a;
            if (p?.current && f) {
              const b = Math.abs(c.current - m.scrollTop);
              if (b > 0) {
                const g = window.innerHeight - Ue * 2, h = parseFloat(f.style.minHeight), v = parseFloat(f.style.height), x = Math.max(h, v);
                if (x < g) {
                  const w = x + b, y = Math.min(g, w), S = w - y;
                  f.style.height = y + "px", f.style.bottom === "0px" && (m.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Bh.displayName = Ha;
var Hh = "SelectGroup", [xD, wD] = yn(Hh), Vh = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = we();
    return /* @__PURE__ */ u.jsx(xD, { scope: n, id: o, children: /* @__PURE__ */ u.jsx($.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Vh.displayName = Hh;
var Yh = "SelectLabel", xc = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = wD(Yh, n);
    return /* @__PURE__ */ u.jsx($.div, { id: o.id, ...r, ref: t });
  }
);
xc.displayName = Yh;
var Ho = "SelectItem", [yD, zh] = yn(Ho), wc = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = Kt(Ho, n), c = Ut(Ho, n), d = i.value === r, [m, f] = l.useState(s ?? ""), [p, b] = l.useState(!1), g = oe(
      t,
      (w) => c.itemRefCallback?.(w, r, o)
    ), h = we(), v = l.useRef("touch"), x = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    return /* @__PURE__ */ u.jsx(
      yD,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: l.useCallback((w) => {
          f((y) => y || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          _s.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: m,
            children: /* @__PURE__ */ u.jsx(
              $.div,
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
                ref: g,
                onFocus: A(a.onFocus, () => b(!0)),
                onBlur: A(a.onBlur, () => b(!1)),
                onClick: A(a.onClick, () => {
                  v.current !== "mouse" && x();
                }),
                onPointerUp: A(a.onPointerUp, () => {
                  v.current === "mouse" && x();
                }),
                onPointerDown: A(a.onPointerDown, (w) => {
                  v.current = w.pointerType;
                }),
                onPointerMove: A(a.onPointerMove, (w) => {
                  v.current = w.pointerType, o ? c.onItemLeave?.() : v.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: A(a.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: A(a.onKeyDown, (w) => {
                  c.searchRef?.current !== "" && w.key === " " || (sD.includes(w.key) && x(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
wc.displayName = Ho;
var fr = "SelectItemText", Gh = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = Kt(fr, n), i = Ut(fr, n), c = zh(fr, n), d = lD(fr, n), [m, f] = l.useState(null), p = oe(
      t,
      (x) => f(x),
      c.onItemTextChange,
      (x) => i.itemTextRefCallback?.(x, c.value, c.disabled)
    ), b = m?.textContent, g = l.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: b }, c.value),
      [c.disabled, c.value, b]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = d;
    return xe(() => (h(g), () => v(g)), [h, v, g]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx($.span, { id: c.textId, ...s, ref: p }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren && !Is(a.value) ? un.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Gh.displayName = fr;
var Kh = "SelectItemIndicator", Uh = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return zh(Kh, n).isSelected ? /* @__PURE__ */ u.jsx($.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Uh.displayName = Kh;
var Va = "SelectScrollUpButton", yc = l.forwardRef((e, t) => {
  const n = Ut(Va, e.__scopeSelect), r = bc(Va, e.__scopeSelect), [o, s] = l.useState(!1), a = oe(t, r.onScrollButtonChange);
  return xe(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = c.scrollTop > 0;
        s(d);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    qh,
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
yc.displayName = Va;
var Ya = "SelectScrollDownButton", Cc = l.forwardRef((e, t) => {
  const n = Ut(Ya, e.__scopeSelect), r = bc(Ya, e.__scopeSelect), [o, s] = l.useState(!1), a = oe(t, r.onScrollButtonChange);
  return xe(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = c.scrollHeight - c.clientHeight, m = Math.ceil(c.scrollTop) < d;
        s(m);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    qh,
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
Cc.displayName = Ya;
var qh = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Ut("SelectScrollButton", n), a = l.useRef(null), i = Os(n), c = l.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return l.useEffect(() => () => c(), [c]), xe(() => {
    i().find((m) => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ u.jsx(
    $.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: A(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: A(o.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: A(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), CD = "SelectSeparator", Sc = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx($.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Sc.displayName = CD;
var Xh = "SelectArrow", SD = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = As(n);
    return Ut(Xh, n).position === "popper" ? /* @__PURE__ */ u.jsx(gs, { ...o, ...r, ref: t }) : null;
  }
);
SD.displayName = Xh;
var Qh = "SelectBubbleInput", Zh = l.forwardRef(
  ({ __scopeSelect: e, ...t }, n) => {
    const r = Kt(Qh, e), { value: o, onValueChange: s, required: a, disabled: i, name: c, autoComplete: d, form: m } = r, { nativeOptions: f, nativeSelectKey: p } = r, b = l.useRef(null), g = oe(n, b), h = o ?? "", v = Ar(h), x = Array.from(f).some(
      (w) => (w.props.value ?? "") === ""
    );
    return l.useEffect(() => {
      const w = b.current;
      if (!w) return;
      const y = window.HTMLSelectElement.prototype, N = Object.getOwnPropertyDescriptor(
        y,
        "value"
      ).set;
      if (v !== h && N) {
        const C = new Event("change", { bubbles: !0 });
        N.call(w, h), w.dispatchEvent(C);
      }
    }, [v, h]), /* @__PURE__ */ u.jsxs(
      $.select,
      {
        "aria-hidden": !0,
        required: a,
        tabIndex: -1,
        name: c,
        autoComplete: d,
        disabled: i,
        form: m,
        onChange: (w) => s(w.target.value),
        ...t,
        style: { ...kp, ...t.style },
        ref: g,
        defaultValue: h,
        children: [
          Is(o) && !x ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
          Array.from(f)
        ]
      },
      p
    );
  }
);
Zh.displayName = Qh;
function ND(e) {
  return typeof e == "function";
}
function Is(e) {
  return e === "" || e === void 0;
}
function Jh(e) {
  const t = he(e), n = l.useRef(""), r = l.useRef(0), o = l.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), (function c(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), s = l.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function eg(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = ED(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function ED(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const tg = kh, AO = Vh, ng = Oh, Nc = l.forwardRef(({ className: e, children: t, isLoading: n = !1, ...r }, o) => /* @__PURE__ */ u.jsxs(
  gc,
  {
    ref: o,
    className: P(
      "flex h-9 w-full items-center text-left justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
        n && /* @__PURE__ */ u.jsx(hr, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ u.jsx(Ah, { asChild: !0, children: /* @__PURE__ */ u.jsx(Fn, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Nc.displayName = gc.displayName;
const rg = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  yc,
  {
    ref: n,
    className: P(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Ov, { className: "h-4 w-4" })
  }
));
rg.displayName = yc.displayName;
const og = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Cc,
  {
    ref: n,
    className: P(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(Fn, { className: "h-4 w-4" })
  }
));
og.displayName = Cc.displayName;
const Ec = l.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ u.jsx(jh, { children: /* @__PURE__ */ u.jsxs(
  vc,
  {
    ref: o,
    className: P(
      "relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(rg, {}),
      /* @__PURE__ */ u.jsx(
        Bh,
        {
          className: P(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(og, {})
    ]
  }
) }));
Ec.displayName = vc.displayName;
const TD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  xc,
  {
    ref: n,
    className: P("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
TD.displayName = xc.displayName;
const Vo = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  wc,
  {
    ref: r,
    className: P(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Uh, { children: /* @__PURE__ */ u.jsx(Er, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(Gh, { children: t })
    ]
  }
));
Vo.displayName = wc.displayName;
const RD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Sc,
  {
    ref: n,
    className: P("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
RD.displayName = Sc.displayName;
const IO = ({
  name: e,
  label: t,
  placeholder: n,
  options: r,
  helpText: o,
  isLoading: s,
  ...a
}) => {
  const i = Yn();
  return /* @__PURE__ */ u.jsx(
    Ur,
    {
      control: i.control,
      name: e,
      render: ({ field: c }) => /* @__PURE__ */ u.jsxs(Qn, { children: [
        !!t && /* @__PURE__ */ u.jsx(Zn, { children: t }),
        /* @__PURE__ */ u.jsxs(
          tg,
          {
            onValueChange: c.onChange,
            value: c.value,
            defaultValue: c.value,
            ...a,
            children: [
              /* @__PURE__ */ u.jsx(Es, { children: /* @__PURE__ */ u.jsx(Nc, { isLoading: s, children: /* @__PURE__ */ u.jsx(ng, { placeholder: n }) }) }),
              /* @__PURE__ */ u.jsx(Ec, { children: r.map((d) => /* @__PURE__ */ u.jsx(Vo, { value: d.value, children: d.label }, d.value)) })
            ]
          }
        ),
        !!o && /* @__PURE__ */ u.jsx(Pp, { children: o }),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
};
var MD = "Separator", Zl = "horizontal", PD = ["horizontal", "vertical"], sg = l.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Zl, ...o } = e, s = kD(r) ? r : Zl, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ u.jsx(
    $.div,
    {
      "data-orientation": s,
      ...i,
      ...o,
      ref: t
    }
  );
});
sg.displayName = MD;
function kD(e) {
  return PD.includes(e);
}
var ag = sg;
const ig = l.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ u.jsx(
    ag,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: P(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
ig.displayName = ag.displayName;
const jO = Mr, FO = Zo, LO = gn, DD = Pr, cg = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  pn,
  {
    className: P(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
cg.displayName = pn.displayName;
const _D = mt(
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
), OD = l.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsxs(DD, { children: [
  /* @__PURE__ */ u.jsx(cg, {}),
  /* @__PURE__ */ u.jsxs(
    hn,
    {
      ref: o,
      className: P(_D({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ u.jsxs(gn, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ u.jsx(Qa, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
OD.displayName = hn.displayName;
const AD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: P(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
AD.displayName = "SheetHeader";
const ID = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: P(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ID.displayName = "SheetFooter";
const jD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  zn,
  {
    ref: n,
    className: P("text-lg font-semibold text-foreground", e),
    ...t
  }
));
jD.displayName = zn.displayName;
const FD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Gn,
  {
    ref: n,
    className: P("text-sm text-muted-foreground", e),
    ...t
  }
));
FD.displayName = Gn.displayName;
function LD({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: P("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
var js = "Switch", [$D] = Te(js), [WD, Tc] = $D(js);
function BD(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: s,
    form: a,
    name: i,
    onCheckedChange: c,
    required: d,
    value: m = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, b] = Pe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: js
  }), [g, h] = l.useState(null), [v, x] = l.useState(null), w = l.useRef(!1), y = g ? !!a || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: p,
    setChecked: b,
    disabled: s,
    control: g,
    setControl: h,
    name: i,
    form: a,
    value: m,
    hasConsumerStoppedPropagationRef: w,
    required: d,
    defaultChecked: o,
    isFormControl: y,
    bubbleInput: v,
    setBubbleInput: x
  };
  return /* @__PURE__ */ u.jsx(WD, { scope: t, ...S, children: HD(f) ? f(S) : r });
}
var lg = "SwitchTrigger", ug = l.forwardRef(
  ({ __scopeSwitch: e, onClick: t, ...n }, r) => {
    const {
      value: o,
      disabled: s,
      checked: a,
      required: i,
      setControl: c,
      setChecked: d,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: f,
      bubbleInput: p
    } = Tc(lg, e), b = oe(r, c);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": a,
        "aria-required": i,
        "data-state": hg(a),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: o,
        ...n,
        ref: b,
        onClick: A(t, (g) => {
          d((h) => !h), p && f && (m.current = g.isPropagationStopped(), m.current || g.stopPropagation());
        })
      }
    );
  }
);
ug.displayName = lg;
var Rc = l.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: c,
      onCheckedChange: d,
      form: m,
      ...f
    } = e;
    return /* @__PURE__ */ u.jsx(
      BD,
      {
        __scopeSwitch: n,
        checked: o,
        defaultChecked: s,
        disabled: i,
        required: a,
        onCheckedChange: d,
        name: r,
        form: m,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(
            ug,
            {
              ...f,
              ref: t,
              __scopeSwitch: n
            }
          ),
          p && /* @__PURE__ */ u.jsx(
            pg,
            {
              __scopeSwitch: n
            }
          )
        ] })
      }
    );
  }
);
Rc.displayName = js;
var dg = "SwitchThumb", fg = l.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Tc(dg, n);
    return /* @__PURE__ */ u.jsx(
      $.span,
      {
        "data-state": hg(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
fg.displayName = dg;
var mg = "SwitchBubbleInput", pg = l.forwardRef(
  ({ __scopeSwitch: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      name: d,
      value: m,
      form: f,
      bubbleInput: p,
      setBubbleInput: b
    } = Tc(mg, e), g = oe(n, b), h = Ar(s), v = ss(r);
    l.useEffect(() => {
      const w = p;
      if (!w) return;
      const y = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, C = !o.current;
      if (h !== s && N) {
        const T = new Event("click", { bubbles: C });
        N.call(w, s), w.dispatchEvent(T);
      }
    }, [p, h, s, o]);
    const x = l.useRef(s);
    return /* @__PURE__ */ u.jsx(
      $.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? x.current,
        required: i,
        disabled: c,
        name: d,
        value: m,
        form: f,
        ...t,
        tabIndex: -1,
        ref: g,
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
pg.displayName = mg;
function HD(e) {
  return typeof e == "function";
}
function hg(e) {
  return e ? "checked" : "unchecked";
}
const VD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Rc,
  {
    className: P(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ u.jsx(
      fg,
      {
        className: P(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
VD.displayName = Rc.displayName;
const YD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ u.jsx(
  "table",
  {
    ref: n,
    className: P("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
YD.displayName = "Table";
const zD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "thead",
  {
    ref: n,
    className: P("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
zD.displayName = "TableHeader";
const GD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tbody",
  {
    ref: n,
    className: P("[&_tr:last-child]:border-0", e),
    ...t
  }
));
GD.displayName = "TableBody";
const KD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tfoot",
  {
    ref: n,
    className: P(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
KD.displayName = "TableFooter";
const UD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tr",
  {
    ref: n,
    className: P(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
UD.displayName = "TableRow";
const qD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "th",
  {
    ref: n,
    className: P(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
qD.displayName = "TableHead";
const XD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: n,
    className: P(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
XD.displayName = "TableCell";
const QD = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: n,
    className: P("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
QD.displayName = "TableCaption";
var Fs = "Tabs", [ZD] = Te(Fs, [
  zt
]), gg = zt(), [JD, Mc] = ZD(Fs), vg = l.forwardRef(
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
    } = e, m = Mt(i), [f, p] = Pe({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Fs
    });
    return /* @__PURE__ */ u.jsx(
      JD,
      {
        scope: n,
        baseId: we(),
        value: f,
        onValueChange: p,
        orientation: a,
        dir: m,
        activationMode: c,
        children: /* @__PURE__ */ u.jsx(
          $.div,
          {
            dir: m,
            "data-orientation": a,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
vg.displayName = Fs;
var bg = "TabsList", xg = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Mc(bg, n), a = gg(n);
    return /* @__PURE__ */ u.jsx(
      xs,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ u.jsx(
          $.div,
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
xg.displayName = bg;
var wg = "TabsTrigger", yg = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Mc(wg, n), i = gg(n), c = Ng(a.baseId, r), d = Eg(a.baseId, r), m = r === a.value;
    return /* @__PURE__ */ u.jsx(
      ws,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: m,
        children: /* @__PURE__ */ u.jsx(
          $.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": d,
            "data-state": m ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...s,
            ref: t,
            onMouseDown: A(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? a.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: A(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && a.onValueChange(r);
            }),
            onFocus: A(e.onFocus, () => {
              const f = a.activationMode !== "manual";
              !m && !o && f && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
yg.displayName = wg;
var Cg = "TabsContent", Sg = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Mc(Cg, n), c = Ng(i.baseId, r), d = Eg(i.baseId, r), m = r === i.value, f = l.useRef(m);
    return l.useEffect(() => {
      const p = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ u.jsx(be, { present: o || m, children: ({ present: p }) => /* @__PURE__ */ u.jsx(
      $.div,
      {
        "data-state": m ? "active" : "inactive",
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
          animationDuration: f.current ? "0s" : void 0
        },
        children: p && s
      }
    ) });
  }
);
Sg.displayName = Cg;
function Ng(e, t) {
  return `${e}-trigger-${t}`;
}
function Eg(e, t) {
  return `${e}-content-${t}`;
}
var e_ = vg, Tg = xg, Rg = yg, Mg = Sg;
const $O = e_, t_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Tg,
  {
    ref: n,
    className: P(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
t_.displayName = Tg.displayName;
const n_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Rg,
  {
    ref: n,
    className: P(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
n_.displayName = Rg.displayName;
const r_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Mg,
  {
    ref: n,
    className: P(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
r_.displayName = Mg.displayName;
const Pg = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "textarea",
  {
    className: P(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: n,
    ...t
  }
));
Pg.displayName = "Textarea";
const o_ = ({
  name: e,
  label: t,
  placeholder: n,
  ...r
}) => {
  const o = Yn();
  return /* @__PURE__ */ u.jsx(
    Ur,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ u.jsxs(Qn, { children: [
        !!t && /* @__PURE__ */ u.jsx(Zn, { children: t }),
        /* @__PURE__ */ u.jsx(Es, { children: /* @__PURE__ */ u.jsx(Pg, { placeholder: n, ...r, ...s }) }),
        /* @__PURE__ */ u.jsx(Jn, {})
      ] })
    }
  );
};
o_.displayName = "TextareaForm";
var Pc = "ToastProvider", [kc, s_, a_] = dn("Toast"), [kg] = Te("Toast", [a_]), [i_, Ls] = kg(Pc), Dg = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    announcerContainer: a,
    children: i
  } = e, [c, d] = l.useState(null), [m, f] = l.useState(0), p = l.useRef(!1), b = l.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Pc}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u.jsx(kc.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
    i_,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: m,
      viewport: c,
      onViewportChange: d,
      onToastAdd: l.useCallback(() => f((g) => g + 1), []),
      onToastRemove: l.useCallback(() => f((g) => g - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: b,
      announcerContainer: a,
      children: i
    }
  ) });
};
Dg.displayName = Pc;
var _g = "ToastViewport", c_ = ["F8"], za = "toast.viewportPause", Ga = "toast.viewportResume", Og = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = c_,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = Ls(_g, n), i = s_(n), c = l.useRef(null), d = l.useRef(null), m = l.useRef(null), f = l.useRef(null), p = oe(t, f, a.onViewportChange), b = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = a.toastCount > 0;
    l.useEffect(() => {
      const v = (x) => {
        r.length !== 0 && r.every((y) => x[y] || x.code === y) && f.current?.focus();
      };
      return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
    }, [r]), l.useEffect(() => {
      const v = c.current, x = f.current;
      if (g && v && x) {
        const w = () => {
          if (!a.isClosePausedRef.current) {
            const C = new CustomEvent(za);
            x.dispatchEvent(C), a.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (a.isClosePausedRef.current) {
            const C = new CustomEvent(Ga);
            x.dispatchEvent(C), a.isClosePausedRef.current = !1;
          }
        }, S = (C) => {
          !v.contains(C.relatedTarget) && y();
        }, N = () => {
          v.contains(document.activeElement) || y();
        };
        return v.addEventListener("focusin", w), v.addEventListener("focusout", S), v.addEventListener("pointermove", w), v.addEventListener("pointerleave", N), window.addEventListener("blur", w), window.addEventListener("focus", y), () => {
          v.removeEventListener("focusin", w), v.removeEventListener("focusout", S), v.removeEventListener("pointermove", w), v.removeEventListener("pointerleave", N), window.removeEventListener("blur", w), window.removeEventListener("focus", y);
        };
      }
    }, [g, a.isClosePausedRef]);
    const h = l.useCallback(
      ({ tabbingDirection: v }) => {
        const w = i().map((y) => {
          const S = y.ref.current, N = [S, ...y_(S)];
          return v === "forwards" ? N : N.reverse();
        });
        return (v === "forwards" ? w.reverse() : w).flat();
      },
      [i]
    );
    return l.useEffect(() => {
      const v = f.current;
      if (v) {
        const x = (w) => {
          const y = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !y) {
            const N = document.activeElement, C = w.shiftKey;
            if (w.target === v && C) {
              d.current?.focus();
              return;
            }
            const R = h({ tabbingDirection: C ? "backwards" : "forwards" }), _ = R.findIndex((O) => O === N);
            ha(R.slice(_ + 1)) ? w.preventDefault() : C ? d.current?.focus() : m.current?.focus();
          }
        };
        return v.addEventListener("keydown", x), () => v.removeEventListener("keydown", x);
      }
    }, [i, h]), /* @__PURE__ */ u.jsxs(
      _x,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", b),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ u.jsx(
            Ka,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "forwards"
                });
                ha(v);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(kc.Slot, { scope: n, children: /* @__PURE__ */ u.jsx($.ol, { tabIndex: -1, ...s, ref: p }) }),
          g && /* @__PURE__ */ u.jsx(
            Ka,
            {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const v = h({
                  tabbingDirection: "backwards"
                });
                ha(v);
              }
            }
          )
        ]
      }
    );
  }
);
Og.displayName = _g;
var Ag = "ToastFocusProxy", Ka = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = Ls(Ag, n);
    return /* @__PURE__ */ u.jsx(
      Ts,
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
Ka.displayName = Ag;
var qr = "Toast", l_ = "toast.swipeStart", u_ = "toast.swipeMove", d_ = "toast.swipeCancel", f_ = "toast.swipeEnd", Ig = l.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = Pe({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: qr
    });
    return /* @__PURE__ */ u.jsx(be, { present: n || i, children: /* @__PURE__ */ u.jsx(
      h_,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: he(e.onPause),
        onResume: he(e.onResume),
        onSwipeStart: A(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: A(e.onSwipeMove, (d) => {
          const { x: m, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${m}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: A(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: A(e.onSwipeEnd, (d) => {
          const { x: m, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${m}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), c(!1);
        })
      }
    ) });
  }
);
Ig.displayName = qr;
var [m_, p_] = kg(qr, {
  onClose() {
  }
}), h_ = l.forwardRef(
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
      onSwipeStart: m,
      onSwipeMove: f,
      onSwipeCancel: p,
      onSwipeEnd: b,
      ...g
    } = e, h = Ls(qr, n), [v, x] = l.useState(null), w = oe(t, (k) => x(k)), y = l.useRef(null), S = l.useRef(null), N = o || h.duration, C = l.useRef(0), T = l.useRef(N), E = l.useRef(0), { onToastAdd: R, onToastRemove: _ } = h, O = he(() => {
      v?.contains(document.activeElement) && h.viewport?.focus(), a();
    }), W = l.useCallback(
      (k) => {
        !k || k === 1 / 0 || (window.clearTimeout(E.current), C.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(O, k));
      },
      [O]
    );
    l.useEffect(() => {
      const k = h.viewport;
      if (k) {
        const F = () => {
          W(T.current), d?.();
        }, H = () => {
          const q = (/* @__PURE__ */ new Date()).getTime() - C.current;
          T.current = T.current - q, window.clearTimeout(E.current), c?.();
        };
        return k.addEventListener(za, H), k.addEventListener(Ga, F), () => {
          k.removeEventListener(za, H), k.removeEventListener(Ga, F);
        };
      }
    }, [h.viewport, N, c, d, W]), l.useEffect(() => {
      s && !h.isClosePausedRef.current && W(N);
    }, [s, N, h.isClosePausedRef, W]), l.useEffect(() => (R(), () => _()), [R, _]);
    const X = l.useMemo(() => v ? Hg(v) : null, [v]);
    return h.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      X && /* @__PURE__ */ u.jsx(
        g_,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: X
        }
      ),
      /* @__PURE__ */ u.jsx(m_, { scope: n, onClose: O, children: un.createPortal(
        /* @__PURE__ */ u.jsx(kc.ItemSlot, { scope: n, children: /* @__PURE__ */ u.jsx(
          Dx,
          {
            asChild: !0,
            onEscapeKeyDown: A(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || O(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ u.jsx(
              $.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...g,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: A(e.onKeyDown, (k) => {
                  k.key === "Escape" && (i?.(k.nativeEvent), k.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, O()));
                }),
                onPointerDown: A(e.onPointerDown, (k) => {
                  k.button === 0 && (y.current = { x: k.clientX, y: k.clientY });
                }),
                onPointerMove: A(e.onPointerMove, (k) => {
                  if (!y.current) return;
                  const F = k.clientX - y.current.x, H = k.clientY - y.current.y, q = !!S.current, Y = ["left", "right"].includes(h.swipeDirection), I = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, M = Y ? I(0, F) : 0, B = Y ? 0 : I(0, H), D = k.pointerType === "touch" ? 10 : 2, V = { x: M, y: B }, K = { originalEvent: k, delta: V };
                  q ? (S.current = V, ho(u_, f, K, {
                    discrete: !1
                  })) : Jl(V, h.swipeDirection, D) ? (S.current = V, ho(l_, m, K, {
                    discrete: !1
                  }), k.target.setPointerCapture(k.pointerId)) : (Math.abs(F) > D || Math.abs(H) > D) && (y.current = null);
                }),
                onPointerUp: A(e.onPointerUp, (k) => {
                  const F = S.current, H = k.target;
                  if (H.hasPointerCapture(k.pointerId) && H.releasePointerCapture(k.pointerId), S.current = null, y.current = null, F) {
                    const q = k.currentTarget, Y = { originalEvent: k, delta: F };
                    Jl(F, h.swipeDirection, h.swipeThreshold) ? ho(f_, b, Y, {
                      discrete: !0
                    }) : ho(
                      d_,
                      p,
                      Y,
                      {
                        discrete: !0
                      }
                    ), q.addEventListener("click", (I) => I.preventDefault(), {
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
), g_ = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Ls(qr, t), [s, a] = l.useState(!1), [i, c] = l.useState(!1);
  return x_(() => a(!0)), l.useEffect(() => {
    const d = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ u.jsx(mn, { asChild: !0, container: o.announcerContainer || void 0, children: /* @__PURE__ */ u.jsx(Ts, { ...r, children: s && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, v_ = "ToastTitle", jg = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ u.jsx($.div, { ...r, ref: t });
  }
);
jg.displayName = v_;
var b_ = "ToastDescription", Fg = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ u.jsx($.div, { ...r, ref: t });
  }
);
Fg.displayName = b_;
var Lg = "ToastAction", $g = l.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ u.jsx(Bg, { altText: n, asChild: !0, children: /* @__PURE__ */ u.jsx(Dc, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Lg}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
$g.displayName = Lg;
var Wg = "ToastClose", Dc = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = p_(Wg, n);
    return /* @__PURE__ */ u.jsx(Bg, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, o.onClose)
      }
    ) });
  }
);
Dc.displayName = Wg;
var Bg = l.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ u.jsx(
    $.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Hg(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), w_(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Hg(r));
    }
  }), t;
}
function ho(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gr(o, s) : o.dispatchEvent(s);
}
var Jl = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function x_(e = () => {
}) {
  const t = he(e);
  xe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function w_(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function y_(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ha(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var C_ = Dg, Vg = Og, Yg = Ig, zg = jg, Gg = Fg, Kg = $g, Ug = Dc;
const S_ = C_, N_ = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, qg = l.forwardRef(({ className: e, position: t = "bottom-right", ...n }, r) => /* @__PURE__ */ u.jsx(
  Vg,
  {
    ref: r,
    className: P(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${N_[t]}`,
      e
    ),
    ...n
  }
));
qg.displayName = Vg.displayName;
const E_ = mt(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full p-4",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border-success bg-success text-success-foreground",
        warning: "border-warning bg-warning text-warning-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Xg = l.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  Yg,
  {
    ref: r,
    className: P(E_({ variant: t }), e),
    ...n
  }
));
Xg.displayName = Yg.displayName;
const T_ = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Kg,
  {
    ref: n,
    className: P(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
T_.displayName = Kg.displayName;
const Qg = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ug,
  {
    ref: n,
    className: P(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ u.jsx(Qa, { className: "h-4 w-4" })
  }
));
Qg.displayName = Ug.displayName;
const Zg = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  zg,
  {
    ref: n,
    className: P("text-sm font-semibold", e),
    ...t
  }
));
Zg.displayName = zg.displayName;
const Jg = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Gg,
  {
    ref: n,
    className: P("text-sm opacity-90", e),
    ...t
  }
));
Jg.displayName = Gg.displayName;
const R_ = 5, M_ = 1e4;
let ga = 0;
function P_() {
  return ga = (ga + 1) % Number.MAX_SAFE_INTEGER, ga.toString();
}
const va = /* @__PURE__ */ new Map(), eu = (e) => {
  if (va.has(e))
    return;
  const t = setTimeout(() => {
    va.delete(e), pr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, M_);
  va.set(e, t);
}, k_ = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, R_)
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
      return n ? eu(n) : e.toasts.forEach((r) => {
        eu(r.id);
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
}, Co = [];
let So = { toasts: [] };
function pr(e) {
  So = k_(So, e), Co.forEach((t) => {
    t(So);
  });
}
function D_({ ...e }) {
  const t = P_(), n = (o) => pr({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => pr({ type: "DISMISS_TOAST", toastId: t });
  return pr({
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
function __() {
  const [e, t] = l.useState(So);
  return l.useEffect(() => (Co.push(t), () => {
    const n = Co.indexOf(t);
    n > -1 && Co.splice(n, 1);
  }), [e]), {
    ...e,
    toast: D_,
    dismiss: (n) => pr({ type: "DISMISS_TOAST", toastId: n })
  };
}
function WO() {
  const { toasts: e } = __();
  return /* @__PURE__ */ u.jsxs(S_, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...s }) {
      return /* @__PURE__ */ u.jsxs(Xg, { ...s, className: "mt-2", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ u.jsx(Zg, { children: n }),
          r && /* @__PURE__ */ u.jsx(Jg, { children: r })
        ] }),
        o,
        /* @__PURE__ */ u.jsx(Qg, {})
      ] }, t);
    }),
    /* @__PURE__ */ u.jsx(qg, {})
  ] });
}
var ev = "Toggle", _c = l.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...s } = e, [a, i] = Pe({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: ev
  });
  return /* @__PURE__ */ u.jsx(
    $.button,
    {
      type: "button",
      "aria-pressed": a,
      "data-state": a ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...s,
      ref: t,
      onClick: A(e.onClick, () => {
        e.disabled || i(!a);
      })
    }
  );
});
_c.displayName = ev;
var tv = _c;
const nv = mt(
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
), O_ = l.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ u.jsx(
  tv,
  {
    ref: o,
    className: P(nv({ variant: t, size: n, className: e })),
    ...r
  }
));
O_.displayName = tv.displayName;
var qt = "ToggleGroup", [rv] = Te(qt, [
  zt
]), ov = zt(), $s = l.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single") {
    const o = r;
    return /* @__PURE__ */ u.jsx(A_, { role: "radiogroup", ...o, ref: t });
  }
  if (n === "multiple") {
    const o = r;
    return /* @__PURE__ */ u.jsx(I_, { role: "toolbar", ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${qt}\``);
});
$s.displayName = qt;
var [sv, av] = rv(qt), A_ = l.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Pe({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: qt
  });
  return /* @__PURE__ */ u.jsx(
    sv,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: l.useMemo(() => a ? [a] : [], [a]),
      onItemActivate: i,
      onItemDeactivate: l.useCallback(() => i(""), [i]),
      children: /* @__PURE__ */ u.jsx(iv, { ...s, ref: t })
    }
  );
}), I_ = l.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Pe({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: qt
  }), c = l.useCallback(
    (m) => i((f = []) => [...f, m]),
    [i]
  ), d = l.useCallback(
    (m) => i((f = []) => f.filter((p) => p !== m)),
    [i]
  );
  return /* @__PURE__ */ u.jsx(
    sv,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: a,
      onItemActivate: c,
      onItemDeactivate: d,
      children: /* @__PURE__ */ u.jsx(iv, { ...s, ref: t })
    }
  );
});
$s.displayName = qt;
var [j_, F_] = rv(qt), iv = l.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: s,
      dir: a,
      loop: i = !0,
      ...c
    } = e, d = ov(n), m = Mt(a), f = { dir: m, ...c };
    return /* @__PURE__ */ u.jsx(j_, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ u.jsx(
      xs,
      {
        asChild: !0,
        ...d,
        orientation: s,
        dir: m,
        loop: i,
        children: /* @__PURE__ */ u.jsx($.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx($.div, { ...f, ref: t }) });
  }
), Yo = "ToggleGroupItem", Oc = l.forwardRef(
  (e, t) => {
    const n = av(Yo, e.__scopeToggleGroup), r = F_(Yo, e.__scopeToggleGroup), o = ov(e.__scopeToggleGroup), s = n.value.includes(e.value), a = r.disabled || e.disabled, i = { ...e, pressed: s, disabled: a }, c = l.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ u.jsx(
      ws,
      {
        asChild: !0,
        ...o,
        focusable: !a,
        active: s,
        ref: c,
        children: /* @__PURE__ */ u.jsx(tu, { ...i, ref: t })
      }
    ) : /* @__PURE__ */ u.jsx(tu, { ...i, ref: t });
  }
);
Oc.displayName = Yo;
var tu = l.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, s = av(Yo, n), a = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, i = s.type === "single" ? a : void 0;
    return /* @__PURE__ */ u.jsx(
      _c,
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
);
const cv = l.createContext({
  size: "default",
  variant: "default"
}), L_ = l.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, s) => /* @__PURE__ */ u.jsx(
  $s,
  {
    ref: s,
    className: P("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ u.jsx(cv.Provider, { value: { variant: t, size: n }, children: r })
  }
));
L_.displayName = $s.displayName;
const $_ = l.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, s) => {
  const a = l.useContext(cv);
  return /* @__PURE__ */ u.jsx(
    Oc,
    {
      ref: s,
      className: P(
        nv({
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
$_.displayName = Oc.displayName;
var [Ws] = Te("Tooltip", [
  Vt
]), Bs = Vt(), lv = "TooltipProvider", W_ = 700, Ua = "tooltip.open", [B_, Ac] = Ws(lv), uv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = W_,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = l.useRef(!0), i = l.useRef(!1), c = l.useRef(0);
  return l.useEffect(() => {
    const d = c.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ u.jsx(
    B_,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: l.useCallback(() => {
        r <= 0 || (window.clearTimeout(c.current), a.current = !1);
      }, [r]),
      onClose: l.useCallback(() => {
        r <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          r
        ));
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: l.useCallback((d) => {
        i.current = d;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
uv.displayName = lv;
var Nr = "Tooltip", [H_, Xr] = Ws(Nr), dv = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = Ac(Nr, e.__scopeTooltip), d = Bs(t), [m, f] = l.useState(null), p = we(), b = l.useRef(0), g = a ?? c.disableHoverableContent, h = i ?? c.delayDuration, v = l.useRef(!1), [x, w] = Pe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (T) => {
      T ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ua))) : c.onClose(), s?.(T);
    },
    caller: Nr
  }), y = l.useMemo(() => x ? v.current ? "delayed-open" : "instant-open" : "closed", [x]), S = l.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, v.current = !1, w(!0);
  }, [w]), N = l.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, w(!1);
  }, [w]), C = l.useCallback(() => {
    window.clearTimeout(b.current), b.current = window.setTimeout(() => {
      v.current = !0, w(!0), b.current = 0;
    }, h);
  }, [h, w]);
  return l.useEffect(() => () => {
    b.current && (window.clearTimeout(b.current), b.current = 0);
  }, []), /* @__PURE__ */ u.jsx($r, { ...d, children: /* @__PURE__ */ u.jsx(
    H_,
    {
      scope: t,
      contentId: p,
      open: x,
      stateAttribute: y,
      trigger: m,
      onTriggerChange: f,
      onTriggerEnter: l.useCallback(() => {
        c.isOpenDelayedRef.current ? C() : S();
      }, [c.isOpenDelayedRef, C, S]),
      onTriggerLeave: l.useCallback(() => {
        g ? N() : (window.clearTimeout(b.current), b.current = 0);
      }, [N, g]),
      onOpen: S,
      onClose: N,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
dv.displayName = Nr;
var qa = "TooltipTrigger", fv = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Xr(qa, n), s = Ac(qa, n), a = Bs(n), i = l.useRef(null), c = oe(t, i, o.onTriggerChange), d = l.useRef(!1), m = l.useRef(!1), f = l.useCallback(() => d.current = !1, []);
    return l.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ u.jsx(Wr, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      $.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: A(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !m.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), m.current = !0);
        }),
        onPointerLeave: A(e.onPointerLeave, () => {
          o.onTriggerLeave(), m.current = !1;
        }),
        onPointerDown: A(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: A(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: A(e.onBlur, o.onClose),
        onClick: A(e.onClick, o.onClose)
      }
    ) });
  }
);
fv.displayName = qa;
var Ic = "TooltipPortal", [V_, Y_] = Ws(Ic, {
  forceMount: void 0
}), mv = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = Xr(Ic, t);
  return /* @__PURE__ */ u.jsx(V_, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(be, { present: n || s.open, children: /* @__PURE__ */ u.jsx(mn, { asChild: !0, container: o, children: r }) }) });
};
mv.displayName = Ic;
var Vn = "TooltipContent", pv = l.forwardRef(
  (e, t) => {
    const n = Y_(Vn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = Xr(Vn, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(be, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ u.jsx(hv, { side: o, ...s, ref: t }) : /* @__PURE__ */ u.jsx(z_, { side: o, ...s, ref: t }) });
  }
), z_ = l.forwardRef((e, t) => {
  const n = Xr(Vn, e.__scopeTooltip), r = Ac(Vn, e.__scopeTooltip), o = l.useRef(null), s = oe(t, o), [a, i] = l.useState(null), { trigger: c, onClose: d } = n, m = o.current, { onPointerInTransitChange: f } = r, p = l.useCallback(() => {
    i(null), f(!1);
  }, [f]), b = l.useCallback(
    (g, h) => {
      const v = g.currentTarget, x = { x: g.clientX, y: g.clientY }, w = X_(x, v.getBoundingClientRect()), y = Q_(x, w), S = Z_(h.getBoundingClientRect()), N = eO([...y, ...S]);
      i(N), f(!0);
    },
    [f]
  );
  return l.useEffect(() => () => p(), [p]), l.useEffect(() => {
    if (c && m) {
      const g = (v) => b(v, m), h = (v) => b(v, c);
      return c.addEventListener("pointerleave", g), m.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", g), m.removeEventListener("pointerleave", h);
      };
    }
  }, [c, m, b, p]), l.useEffect(() => {
    if (a) {
      const g = (h) => {
        const v = h.target, x = { x: h.clientX, y: h.clientY }, w = c?.contains(v) || m?.contains(v), y = !J_(x, a);
        w ? p() : y && (p(), d());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [c, m, a, d, p]), /* @__PURE__ */ u.jsx(hv, { ...e, ref: s });
}), [G_, K_] = Ws(Nr, { isInside: !1 }), U_ = /* @__PURE__ */ Bv("TooltipContent"), hv = l.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = Xr(Vn, n), d = Bs(n), { onClose: m } = c;
    return l.useEffect(() => (document.addEventListener(Ua, m), () => document.removeEventListener(Ua, m)), [m]), l.useEffect(() => {
      if (c.trigger) {
        const f = (p) => {
          p.target instanceof Node && p.target.contains(c.trigger) && m();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, m]), /* @__PURE__ */ u.jsx(
      Ht,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ u.jsxs(
          hs,
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
              /* @__PURE__ */ u.jsx(U_, { children: r }),
              /* @__PURE__ */ u.jsx(G_, { scope: n, isInside: !0, children: /* @__PURE__ */ u.jsx(Dp, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
pv.displayName = Vn;
var gv = "TooltipArrow", q_ = l.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Bs(n);
    return K_(
      gv,
      n
    ).isInside ? null : /* @__PURE__ */ u.jsx(gs, { ...o, ...r, ref: t });
  }
);
q_.displayName = gv;
function X_(e, t) {
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
function Q_(e, t, n = 5) {
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
function Z_(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function J_(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], d = i.x, m = i.y, f = c.x, p = c.y;
    m > r != p > r && n < (f - d) * (r - m) / (p - m) + d && (o = !o);
  }
  return o;
}
function eO(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), tO(t);
}
function tO(e) {
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
var nO = uv, rO = dv, oO = fv, sO = mv, vv = pv;
const BO = nO, HO = rO, VO = oO, aO = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ u.jsx(sO, { children: /* @__PURE__ */ u.jsx(
  vv,
  {
    ref: r,
    sideOffset: t,
    className: P(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
aO.displayName = vv.displayName;
export {
  dO as Accordion,
  bx as AccordionContent,
  gx as AccordionItem,
  vx as AccordionTrigger,
  wx as Alert,
  Cx as AlertDescription,
  fO as AlertDialog,
  Xw as AlertDialogAction,
  Qw as AlertDialogCancel,
  zw as AlertDialogContent,
  qw as AlertDialogDescription,
  Kw as AlertDialogFooter,
  Gw as AlertDialogHeader,
  Td as AlertDialogOverlay,
  Yw as AlertDialogPortal,
  Uw as AlertDialogTitle,
  mO as AlertDialogTrigger,
  yx as AlertTitle,
  Zw as AsyncSelect,
  pO as AsyncSelectForm,
  ay as Avatar,
  cy as AvatarFallback,
  iy as AvatarImage,
  dl as Badge,
  uy as Breadcrumb,
  gy as BreadcrumbEllipsis,
  fy as BreadcrumbItem,
  my as BreadcrumbLink,
  dy as BreadcrumbList,
  py as BreadcrumbPage,
  hy as BreadcrumbSeparator,
  vn as Button,
  pf as Calendar,
  KN as CalendarDayButton,
  UN as Card,
  ZN as CardContent,
  QN as CardDescription,
  JN as CardFooter,
  qN as CardHeader,
  XN as CardTitle,
  AE as Carousel,
  IE as CarouselContent,
  jE as CarouselItem,
  LE as CarouselNext,
  FE as CarouselPrevious,
  WE as ChartContainer,
  bO as ChartLegend,
  VE as ChartLegendContent,
  BE as ChartStyle,
  vO as ChartTooltip,
  HE as ChartTooltipContent,
  UE as Checkbox,
  qE as Combobox,
  xO as ComboboxForm,
  jr as Command,
  wO as CommandDialog,
  us as CommandEmpty,
  Fr as CommandGroup,
  cs as CommandInput,
  nn as CommandItem,
  ls as CommandList,
  jf as CommandSeparator,
  wT as CommandShortcut,
  yO as DatePicker,
  cM as DateTimePicker,
  lM as Dialog,
  SO as DialogClose,
  ym as DialogContent,
  pM as DialogDescription,
  fM as DialogFooter,
  dM as DialogHeader,
  wm as DialogOverlay,
  uM as DialogPortal,
  mM as DialogTitle,
  CO as DialogTrigger,
  NO as DropdownMenu,
  $P as DropdownMenuCheckboxItem,
  FP as DropdownMenuContent,
  TO as DropdownMenuGroup,
  LP as DropdownMenuItem,
  BP as DropdownMenuLabel,
  RO as DropdownMenuPortal,
  PO as DropdownMenuRadioGroup,
  WP as DropdownMenuRadioItem,
  HP as DropdownMenuSeparator,
  VP as DropdownMenuShortcut,
  MO as DropdownMenuSub,
  jP as DropdownMenuSubContent,
  IP as DropdownMenuSubTrigger,
  EO as DropdownMenuTrigger,
  kO as Form,
  Es as FormControl,
  Pp as FormDescription,
  Ur as FormField,
  Qn as FormItem,
  Zn as FormLabel,
  Jn as FormMessage,
  DO as Heading,
  Ji as Input,
  _O as InputForm,
  Ss as Label,
  bk as ListItem,
  xk as MaskedInput,
  yk as MultiSelect,
  dk as NavigationMenu,
  hk as NavigationMenuContent,
  vk as NavigationMenuIndicator,
  OO as NavigationMenuItem,
  gk as NavigationMenuLink,
  fk as NavigationMenuList,
  pk as NavigationMenuTrigger,
  nh as NavigationMenuViewport,
  Ck as Pagination,
  Sk as PaginationContent,
  Rk as PaginationEllipsis,
  Nk as PaginationItem,
  ac as PaginationLink,
  Tk as PaginationNext,
  Ek as PaginationPrevious,
  Hr as Popover,
  Xn as PopoverContent,
  Vr as PopoverTrigger,
  Bk as RadioGroup,
  Hk as RadioGroupItem,
  rD as ScrollArea,
  Mh as ScrollBar,
  tg as Select,
  Ec as SelectContent,
  IO as SelectForm,
  AO as SelectGroup,
  Vo as SelectItem,
  TD as SelectLabel,
  og as SelectScrollDownButton,
  rg as SelectScrollUpButton,
  RD as SelectSeparator,
  Nc as SelectTrigger,
  ng as SelectValue,
  ig as Separator,
  jO as Sheet,
  LO as SheetClose,
  OD as SheetContent,
  FD as SheetDescription,
  ID as SheetFooter,
  AD as SheetHeader,
  cg as SheetOverlay,
  DD as SheetPortal,
  jD as SheetTitle,
  FO as SheetTrigger,
  LD as Skeleton,
  VD as Switch,
  YD as Table,
  GD as TableBody,
  QD as TableCaption,
  XD as TableCell,
  KD as TableFooter,
  qD as TableHead,
  zD as TableHeader,
  UD as TableRow,
  $O as Tabs,
  r_ as TabsContent,
  t_ as TabsList,
  n_ as TabsTrigger,
  Pg as Textarea,
  o_ as TextareaForm,
  xm as TimePicker,
  wo as TimePickerInput,
  Xg as Toast,
  T_ as ToastAction,
  Qg as ToastClose,
  Jg as ToastDescription,
  S_ as ToastProvider,
  Zg as ToastTitle,
  qg as ToastViewport,
  WO as Toaster,
  O_ as Toggle,
  L_ as ToggleGroup,
  $_ as ToggleGroupItem,
  HO as Tooltip,
  aO as TooltipContent,
  BO as TooltipProvider,
  VO as TooltipTrigger,
  ly as badgeVariants,
  gO as brazillianStates,
  rn as buttonVariants,
  P as cn,
  hO as mask,
  mk as navigationMenuTriggerStyle,
  k_ as reducer,
  D_ as toast,
  nv as toggleVariants,
  Ns as useFormField,
  __ as useToast
};
